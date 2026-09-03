/**
 * Chapter 06 · Rotational Motion. Physics, Class 11.
 *
 * Restructured from pages 356 to 447 of the Drona Class 11 Physics Master
 * Reference (Chapter 6, which the book titles "System of Particles and
 * Rotational Motion"; the catalogue this reader matches on calls it
 * "Rotational Motion") into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md and lib/textbooks.ts, matching the
 * voice and density of phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS FROM SEVEN SOURCE SUB-TOPICS, WITH ONE MERGE AND ONE PREAMBLE
 * FOLDED IN. The source runs a preamble ("Chapter Foundations: Rigid Bodies &
 * Types of Motion", pages 356 to 359) and then seven sub-topics: Center of
 * Mass (360-370), Vector Product of Two Vectors (371-377), Torque and Angular
 * Momentum (378-388), Equilibrium of a Rigid Body (389-398), Moment of Inertia
 * (399-409), Rotational Kinematics and Dynamics (410-420), Rolling Motion
 * (421-431). Two of those nine units are not topics here:
 *
 *   - The Foundations preamble has no Sections 1 to 8, no worked example, no
 *     MCQ and no practice set, and its own Exam Relevance line says it is
 *     "rarely asked as standalone questions". It is a preamble, not a
 *     sub-topic, so it opens Topic 01 as prose plus Figure 6.1 rather than
 *     becoming a thin seventh topic.
 *   - Vector Product is merged into Torque and Angular Momentum as Topic 02.
 *     This is the source's own framing, not a merge to hit a number: the
 *     Vector Product Exam Relevance line reads "The cross product is the
 *     mathematical engine behind torque and angular momentum", and every
 *     result in it (the determinant, the right-hand rule, the sin factor,
 *     A x A = 0) exists in this chapter only to be spent on tau = r x F and
 *     L = r x p, which arrive seven pages later. Teaching the tool and its one
 *     application together is what lets Topic 02 open on a door hinge instead
 *     of on a determinant.
 *
 * The remaining five sub-topics map 1:1 onto Topics 03 to 06 plus Topic 01's
 * second half. Nothing else was merged or split. Six is also the ceiling
 * scripts/validate-chapters.mjs enforces, and seven topics would have failed
 * that gate outright.
 *
 * CUT: HOW 92 PAGES BECAME 154 BLOCKS. This is the largest chapter in the
 * wave and roughly 60% more source than the pilot's 57 pages, so selection,
 * not compression, did the work:
 *
 *   - The linear-to-angular correspondence is carried ONCE, by the eight-row
 *     defgrid in Topic 01 ("Every linear quantity and its angular twin"), and
 *     never re-tabulated. The source prints the same dictionary twice, in the
 *     Foundations roadmap and again as the "master analogy table" in
 *     Rotational Kinematics; Topic 05 quotes it instead of repeating it, which
 *     is what freed the space for that topic's connected-body material.
 *   - Prose is spent almost entirely on the places the analogy BREAKS, which
 *     is the brief's organising idea and also where the marks are: that I
 *     depends on the axis and so has no single value (Topic 04's opening and
 *     its `def`), that torque is a cross product and therefore has a direction
 *     and a sign (Topic 02's `def` and its sign convention), and that rolling
 *     couples v to omega so the two motions stop being independent (Topic
 *     06). Where the analogy simply works, a defgrid row does the job of a
 *     paragraph.
 *   - The Round 2 Addendum (pages 432 to 447, six addenda A to F, 16 pages) is
 *     explicitly not a topic per the brief. Every line drawn from it below is
 *     confined to a `protip`, a `mistakes` item, or the hardest `ex`/`mcq` in
 *     the group it extends: Addendum A (velocity of every point on a rolling
 *     body) into Topic 06's `ex` 4 and its snapshot line, Addendum B (massive
 *     pulleys, two unequal tensions) into Topic 05's `protip` and `mistakes`,
 *     Addendum C (slipping into rolling: time, distance, heat) into Topic 06's
 *     `protip` and one `mcq`, Addendum F (over a step) into Topic 03's
 *     `protip`. No `formula`, `defgrid`, `deriv` or `proc` block below is
 *     sourced from the addendum. Addenda D (centre of percussion) and E (the
 *     physical pendulum) are used for a single `mistakes` line each and
 *     nothing more: D because its master collision formula is wrong (see
 *     CORRECTIONS below) and E because the physical pendulum is oscillation,
 *     which this chapter does not teach.
 *   - Four whole source passages were dropped rather than thinned: the
 *     algebraic proof that A x B is perpendicular to A (page 373, a
 *     term-by-term cancellation that teaches nothing a student can reuse), the
 *     tan(theta) = |A x B| / (A . B) angle formula (page 373, not on any
 *     syllabus this chapter serves), the experimental plumb-line location of
 *     the centre of gravity (page 393), and the tensor remark about moment of
 *     inertia (page 400, explicitly out of syllabus in its own sentence).
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five pages read in full; the
 * list covers eight chapters). TWO entries touch this range, and both are
 * real defects in this chapter, not formatting:
 *
 *   - Page 979, "Crack the MCQ (metre stick balance problem): none of the
 *     printed options match the worked solution". The Equilibrium sub-topic's
 *     MCQ Q4 (source page 397) derives m = 0.28 kg correctly by moments about
 *     the 40 cm pivot, then keys "Correct: (B)" where (B) is 0.10 kg; the four
 *     printed options are 0.20, 0.10, 0.30 and 0.15 kg and none is 0.28 kg.
 *     The errata calls the question flawed as posed and leaves the repair to a
 *     human. Repaired here: Topic 03's fourth MCQ keeps the pedagogical point
 *     the source was after (an off-centre pivot makes the stick's own weight
 *     matter) but is re-posed with a 0.20 kg mass at the 10 cm mark instead of
 *     0.50 kg. Moments about the 40 cm pivot then read 0.20 x 0.30 =
 *     0.10 x 0.10 + m x 0.50, so m = 0.10 kg exactly, which IS one of the four
 *     printed options; and the weightless-stick trap now lands on a clean
 *     0.12 kg, offered as a distractor with its own nudge. The full working is
 *     in that block's `solution`.
 *   - Page 979, "Practice answer 4 (angular momentum of a particle): mass
 *     factor dropped". The Torque sub-topic's practice Q4 (source page 386)
 *     prints L = −5 k kg m^2/s where the correct value is −10 k kg m^2/s; the
 *     printed number is r x v with the 2 kg mass never applied. Independently
 *     recomputed here before reading the errata (r x v has z-component
 *     (3)(−1) − (1)(2) = −5, and L = m(r x v) = 2(−5) = −10) and carried into
 *     Topic 02's practice set with the mass factor in place and the trap named
 *     in the answer.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key in the range was recomputed independently. Three defects the errata
 * does not list:
 *
 *   1. Moment of Inertia, practice answer 4 (source page 407). Printed:
 *      "I = 5/6 MR^2 (where M is the remaining mass)" for a uniform disc of
 *      radius R with a CONCENTRIC hole of radius R/2 removed. Correct:
 *      I = 5/8 MR^2. Working, with sigma the surface density: the full disc
 *      has mass sigma.pi.R^2 and I = (1/2)sigma.pi.R^4; the removed core has
 *      mass sigma.pi.R^2/4 and I = (1/2)(sigma.pi.R^2/4)(R/2)^2 =
 *      sigma.pi.R^4/32; so the annulus has I = sigma.pi.R^4(16 − 1)/32 =
 *      15 sigma.pi.R^4/32 and mass M = (3/4)sigma.pi.R^2, whence
 *      sigma.pi.R^2 = 4M/3 and I = (15/32)(4M/3)R^2 = (5/8)MR^2. Cross-check
 *      by the annulus formula I = (1/2)M(a^2 + b^2) with a = R/2, b = R:
 *      (1/2)M(R^2/4 + R^2) = (5/8)MR^2. The source itself agrees elsewhere: a
 *      displaced run on page 407 of the extraction reads "I=5/8MR2", so the
 *      answer LIST is the defective copy. Carried into Topic 04's practice set
 *      as 5/8 MR^2.
 *   2. Round 2 Addendum C (source page 437). Printed: "H = (1/7)(1/2)m v0^2"
 *      and "Exactly one-seventh of the initial kinetic energy is destroyed",
 *      and Addendum C practice answer 3 prints the dissipated fraction as
 *      "1/7 = 14.3%". Correct: two-sevenths, 28.6%. Working, for a solid
 *      sphere thrown at v0 with no spin: K_i = (1/2)m v0^2; pure rolling
 *      begins at v = 5v0/7, where K_f = (7/10)m v^2 = (7/10)(25/49)m v0^2 =
 *      (5/14)m v0^2; so H = (7/14 − 5/14)m v0^2 = (1/7)m v0^2, which is
 *      (1/7)/(1/2) = 2/7 of K_i, not 1/7. The source's own Example C.1
 *      (m = 0.20 kg, v0 = 7.0 m/s) computes H = m v0^2/7 = 1.4 J and checks it
 *      against K_i − K_f = 4.9 − 3.5 = 1.4 J, so the numerical example is
 *      right and only the general statement and the practice answer are wrong;
 *      1.4/4.9 is 2/7. Topic 06's `protip` and its fourth MCQ carry 2/7.
 *   3. Round 2 Addendum D (source page 440). Printed, for a particle of mass m
 *      striking the end of a FREE rod of mass M and length L: "I_cm = ML^2/12
 *      + m(ML/(2(M+m)))^2", and for m = M the value 7ML^2/48 with
 *      omega = 12v/(7L). Both are wrong: the printed I_cm shifts the embedded
 *      particle to the system's centre of mass by the parallel-axis theorem
 *      but never shifts the ROD, which is no longer centred there either. With
 *      y_c = mL/(2(M+m)) the correct value is I_cm = ML^2/12 + M y_c^2 +
 *      m(L/2 − y_c)^2 = ML^2(M + 4m)/(12(M+m)), giving 5ML^2/24 = 10ML^2/48 at
 *      m = M and omega = 6mv/(L(M + 4m)) = 6v/(5L). The source's own
 *      consistency check cannot see the error because it only ever uses the
 *      PRODUCT I_cm.omega, which is MvL/4 either way. The centre-of-percussion
 *      half of Addendum D (x = 2 I_end/(ML) = 2L/3) is correct and is the only
 *      part of D used below, in a single Topic 02 `mistakes` line. The free-rod
 *      collision formula is not taught anywhere in this chapter.
 *
 * Everything else checks out. All 24 worked examples, all 30 practice items
 * and all 24 MCQ keys across the seven sub-topics were re-solved from the
 * problem statements: the CoM composite and integration results, both axis
 * theorems and every standard moment of inertia, the ladder's cot(theta)/2,
 * the beam reactions 66.7 N and 133.3 N, the bullet-in-rod 3mv/(L(M+3m)), the
 * rolling shape factors and the 5v0/7 sliding-to-rolling result all reproduce.
 * Addenda A, B, E and F were checked the same way and are clean, including
 * F's 3-4-5 geometry and its four different "minimum force" answers.
 *
 * SOURCE DAMAGE. All four patterns the brief names are present, plus three
 * this chapter has that the pilot did not. Every instance below was
 * re-authored from context, never transcribed:
 *
 *   - GREEK LETTERS SURVIVE IN MATHS AND DIE IN PROSE, which is a sharper
 *     rule than the brief's. Inside a maths run the extraction keeps them, but
 *     as Mathematical Alphanumeric codepoints (U+1D6D5 onward) that the
 *     validator rejects outright, so "tau = dL/dt" arrives readable but
 *     unusable and must be retyped in ordinary Greek. In body text and figure
 *     captions the same letters are dropped with NO placeholder, which is the
 *     damage the brief warns about: Figure 6.11's caption reads "A sphere on
 *     an incline of angle ." and "component mg sinalong the incline, mg
 *     cosperpendicular", Figure 6.12's reads "until v = Ris reached", and
 *     Figure 6.2's reads "subtending d, with its y-coordinate marked as R
 *     sin.". All three captions were rebuilt from the surrounding derivation
 *     (theta, omega, and R sin(theta) respectively) rather than from the
 *     caption text.
 *   - HEADING RUNS ARRIVE SCRAMBLED, IN TWO DIFFERENT CIPHERS. The brief's
 *     +29 ASCII shift is one of them. The other, which the brief does not
 *     name, is a keyboard-layout substitution: source page 384 opens
 *     "ai2T 1  *?QQb2 i?2 `B;?i +QMb2`p2/ [mMiBivX", which is "Step 1 - Choose
 *     the right conserved quantity." under a fixed letter map (a to S, i to t,
 *     2 to e, ? to h, Q to o, ` to r, X to a full stop). That heading is the
 *     single most important line of the bullet-in-rod example, and it is
 *     reconstructed in Topic 02's fourth worked example from the paragraph it
 *     introduces.
 *   - MATH OPERATORS ARRIVE AS BACKSLASH-LETTER TOKENS, a family the pilot met
 *     once as "\n7" for a minus sign. This chapter carries six of them and
 *     they appear on almost every derivation line: "\n7" is the minus sign
 *     (source pages 391, 394, 401, 405, 407, 412, 415, 423), "\nH" is the
 *     ellipsis in a sum (page 363, "m1 a1 + m2 a2 + ... + mn an"), "\nN" and
 *     "\nA" are the multiplication sign and the centred dot (pages 367, 401,
 *     405, 407, 415, 423, 427), "\nC" is the ratio colon (page 407,
 *     "I_hollow : I_solid = 2/3 : 2/5 = 5 : 3"), "\nK" is the degree sign
 *     (page 427, "sin 30 degrees"), and "\tU", "\tV", "\t@" and "\tz" are the
 *     large delimiters and the underbrace (pages 384, 405). Reading any of
 *     these literally would have silently deleted a minus sign from a torque
 *     or a degree sign from an angle, so each was decoded against the result
 *     the step is heading toward.
 *   - SUPERSCRIPTS LAND ON THEIR OWN LINES, which in a chapter made of MR^2,
 *     ML^2/12 and kg m^2 breaks essentially every formula in the range. The
 *     moment of inertia table on source page 401 extracts as a column of bare
 *     digits; it was rebuilt by checking each entry against the standard
 *     result for that shape and axis (see PLAUSIBILITY below), not by
 *     re-reading the column.
 *   - INTER-WORD SPACES VANISH at tight kerning, pervasively. Confirmed
 *     instances behind prose used below: "rigid bodyis an idealised object"
 *     (p.356), "thelaand an empty one" (p.399), "andisplacement" and
 *     "makingthings move and spin" (p.389), "notdepend on their masses"
 *     (p.422), "everycharpai" (p.389), "spinning topgo" and "onlyfor pure
 *     rolling" (p.430), "isnotconserved here" (p.384), "shrinking Iforces
 *     omega to shoot up" (p.379).
 *   - TWO PRACTICE QUESTIONS LOST THEIR OWN STATEMENTS and had to be rebuilt
 *     from their answers plus the displaced fragments the extraction spat out
 *     elsewhere on the page. Centre of Mass practice 3 (p.367) survives only
 *     as "one corner. Find the distance of the new center of mass from the
 *     center of the original plate." with the run "a√2/6fromthecenter" adrift
 *     twelve lines away; the answer list gives a/(6√2), which is reproduced
 *     exactly by a square plate of side a with a square of side a/2 removed
 *     from one corner (shift a/12 in each coordinate, magnitude a√2/12 =
 *     a/(6√2)), so that is the question, and it is stated in full in Topic
 *     01's practice set. Moment of Inertia practice 3 and 4 (p.407) are fused
 *     into one another, with "I=5/8MR2.hasaconcentriccircularholeofradiusR/2
 *     cutout.Find" landing inside the MCQ section; the two were separated by
 *     matching each to its own answer.
 *   - ONE FIGURE CAPTION IS DUPLICATED ON TWO CONSECUTIVE PAGES, once truncated
 *     with "(see next page)" and once in full on a bare FIGURES page. Every
 *     one of the twelve captions arrives twice this way, so each figure brief
 *     below was assembled from the longer of the two copies.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. The three that
 * matter most in this chapter are checked first, because a dropped R is
 * invisible in prose and obvious here:
 *
 *   - I = sum(m r^2): [M][L^2] = [M L^2]. Correct, and NOT [M L] however
 *     tempting: the r is squared.
 *   - tau = r F: [L][M L T^-2] = [M L^2 T^-2]. Same dimensions as energy, and
 *     that coincidence is the reason the chapter insists on N m and never J.
 *   - L = r p = I omega: [L][M L T^-1] = [M L^2 T^-1], and
 *     [M L^2][T^-1] = [M L^2 T^-1]. The two routes agree, which is the check
 *     that L = I omega has not lost a radius.
 *   - r_cm = sum(m r)/sum(m): [M][L]/[M] = [L]. ✓
 *   - F_ext = M a_cm: [M][L T^-2] = [M L T^-2]. ✓
 *   - |A x B| = AB sin(theta): the sine is dimensionless, so a cross product
 *     carries exactly the product of its factors' dimensions. For r x F that
 *     is [M L^2 T^-2]. ✓
 *   - tau = dL/dt: [M L^2 T^-1]/[T] = [M L^2 T^-2]. ✓ Matches r x F above,
 *     which is the whole content of Topic 02's derivation.
 *   - tau = I alpha: [M L^2][T^-2] = [M L^2 T^-2]. ✓ (alpha is rad/s^2 and
 *     the radian is dimensionless, so alpha reduces to [T^-2].)
 *   - K_rot = (1/2)I omega^2: [M L^2][T^-2] = [M L^2 T^-2], a joule. ✓
 *   - K = L^2/(2I): [M^2 L^4 T^-2]/[M L^2] = [M L^2 T^-2]. ✓
 *   - Angular impulse J = tau t: [M L^2 T^-2][T] = [M L^2 T^-1] = [L]. ✓ Same
 *     dimensions as angular momentum, as an impulse must be.
 *   - Both equilibrium conditions: sum(F) = 0 is [M L T^-2], sum(tau) = 0 is
 *     [M L^2 T^-2]. They are DIFFERENT dimensions, which is the cleanest
 *     argument that one cannot substitute for the other.
 *   - Principle of moments F1 d1 = F2 d2: [M L^2 T^-2] both sides. ✓
 *     Mechanical advantage is a force ratio, dimensionless. ✓
 *   - Parallel axes I = I_cm + M d^2: [M L^2] + [M][L^2]. ✓
 *   - Perpendicular axes I_z = I_x + I_y: [M L^2] throughout. ✓
 *   - Radius of gyration K = sqrt(I/M): sqrt([M L^2]/[M]) = [L]. ✓ A length,
 *     which is why it can be compared with R.
 *   - v = r omega: [L][T^-1] = [L T^-1] ✓. a_t = r alpha: [L][T^-2] ✓.
 *     a_c = omega^2 r: [T^-2][L] ✓. All three land on the right side.
 *   - omega = omega_0 + alpha t: [T^-1] = [T^-1] + [T^-2][T] ✓.
 *     theta = omega_0 t + (1/2)alpha t^2: dimensionless = [T^-1][T] +
 *     [T^-2][T^2] ✓, an angle being a pure number.
 *   - Rolling K = (1/2)m v^2 (1 + K^2/R^2): the bracket is a ratio of two
 *     lengths squared, dimensionless, so the whole thing is [M L^2 T^-2] ✓.
 *   - a = g sin(theta)/(1 + K^2/R^2): [L T^-2] over a pure number ✓.
 *     v_bottom = sqrt(2gh/(1 + K^2/R^2)): sqrt([L T^-2][L]) = [L T^-1] ✓.
 *   - mu_min = tan(theta)/(1 + R^2/K^2): dimensionless over dimensionless, and
 *     a coefficient of friction must be a pure number ✓.
 *
 *   26 formula lines checked, 26 dimensionally consistent, no exceptions and
 *   no informal-units caveats of the kind the pilot's nth-second formula
 *   needed. The one near-miss worth naming is not an error: torque and energy
 *   share [M L^2 T^-2] exactly, so dimensional analysis cannot tell them apart
 *   and the unit convention (N m for torque, J for energy) has to do it
 *   instead. That is said out loud in Topic 02.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Every printed moment of inertia
 * was checked against the standard result for that shape and axis: ring MR^2,
 * ring about a diameter MR^2/2, disc MR^2/2, disc about a diameter MR^2/4,
 * rod about its centre ML^2/12, rod about an end ML^2/3, solid sphere
 * (2/5)MR^2, spherical shell (2/3)MR^2, solid cylinder MR^2/2. Two internal
 * consistency checks are used in the chapter itself rather than merely
 * performed: the parallel-axis theorem takes the rod from ML^2/12 to ML^2/3
 * (Topic 04's `deriv`), and the perpendicular-axis theorem takes the disc from
 * MR^2/2 to MR^2/4 about a diameter (Topic 04's third `ex`). No moment of
 * inertia anywhere below is negative or smaller than MK^2 for a K exceeding
 * the body's own radius. No rolling body is given v greater than omega R;
 * every v = R omega in the chapter is flagged as holding only for pure
 * rolling, and Topic 06's slipping example is the one place v exceeds omega R,
 * explicitly and by construction. Limiting cases used where they teach:
 * Topic 05's pulley result a = 2mg/(2m + M) is checked at M -> 0 (free fall,
 * a -> g) and at large M (a -> 0); Topic 04 checks the ring against the disc
 * (all mass at R gives exactly twice the disc's value, because the disc's
 * mass is spread inward); Topic 06 checks that a rolling body's acceleration
 * collapses to g sin(theta) as K^2/R^2 -> 0, which is a body with no
 * rotational inertia, i.e. a sliding block; and Topic 01 checks the
 * semicircular wire's 2R/pi against the semicircular disc's 4R/3pi, the
 * classic examiner's pair.
 *
 * SEAMS: what is quoted as already known, and from which file. The cross
 * product is NOT one of them. math-12-10-vector-algebra.ts teaches it (its
 * Topic 04, "The Cross Product and What Its Length Means", including the
 * determinant form and the parallelogram-area reading), but that is a Class 12
 * Mathematics chapter and a Class 11 Physics student has not met it, which is
 * exactly why the source gives the vector product seven pages of its own.
 * Topic 02 therefore builds it from scratch, in physics terms, and the maths
 * chapter is a forward reference rather than a prerequisite. What IS quoted:
 * the derivative as dx/dt and the definite integral as an accumulated area,
 * both from math-11-12-limits.ts and both already leaned on by
 * phy-11-02-motion-straight-line.ts, are used without re-derivation in Topic
 * 01's continuous-body integration, Topic 02's d(r x p)/dt, and Topic 04's
 * two moment-of-inertia integrals; the product rule, which Topic 02's
 * derivation applies to a cross product, is quoted from that same file's Topic
 * 05. Newton's second law, the work-energy theorem, conservation of linear
 * momentum, static friction and mu N, and projectile motion's H = u^2 sin^2
 * (theta)/2g are all quoted from Class 11 Physics chapters 4, 5 and 3 as
 * known; Topic 02's third worked example uses the projectile result verbatim
 * rather than re-deriving it.
 *
 * FIGURES. Fifteen `diagram` blocks: all twelve named figures drawn, plus
 * three designed. None dropped, and no new figure vocabulary requested. The
 * three designed ones are Topic 02's two-chip "what the moment arm is",
 * Topic 04's five-chip standard-moments table, and Topic 06's three-chip
 * decomposition of rolling into translation plus rotation. The panel rule is
 * observed everywhere: Figure 6.1's three source panels are three CHIPS of one
 * block, and the moment of inertia table is five chips, never a grid inside
 * one frame. Two lessons the pilot paid for and this chapter inherits are
 * visible in the geometry: an axis of rotation is never drawn collinear with
 * the omega arrow that names it (Figures 6.1 and 6.9 offset one from the
 * other), and every point label with a line leaving it to the north-east
 * carries an explicit `at`.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11RotationalMotion: Chapter = {
  "chapter": "06",
  "title": "Rotational Motion",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Rigid Bodies and the Centre of Mass",
      "chip": "01 CENTRE OF MASS",
      "kalam": "internal forces can never move it",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Rigid Bodies and the Centre of Mass</b><br>The foundations here are rarely asked alone, but every later problem silently assumes them. CBSE Boards expect the <i>motion of the centre of mass</i> derivation and clean definitions, plus the occasional 1-mark definition of a rigid body or a type of motion. JEE Main asks one to two direct questions almost every year, usually a composite body or a mass-removal problem. NEET keeps it light, typically one conceptual question about explosions or the man-on-a-boat. JEE Advanced likes continuous bodies and integration.<br><br><b>02 · Torque and Angular Momentum</b><br>The dynamical heart of the chapter, and the cross product is its engine. JEE Main asks one to two questions yearly on τ = <i>dL</i>/<i>dt</i>, on conservation, or on the angular momentum of a projectile, plus roughly one straight cross-product question, a perpendicular unit vector or the area of a triangle. NEET keeps it conceptual: the spinning-skater idea and <i>is angular momentum conserved here</i>. JEE Advanced pushes into angular impulse and collisions involving rotation. CBSE Boards wants the τ = <i>dL</i>/<i>dt</i> derivation, the conservation law stated cleanly, and the definition and properties of the vector product.<br><br><b>03 · Equilibrium of a Rigid Body</b><br>A CBSE favourite and a steady JEE and NEET performer. CBSE Boards regularly asks the principle of moments, levers and centre of gravity for 2 to 3 marks. JEE Main poses beam-and-support and ladder-against-wall problems. NEET keeps it conceptual: the conditions for equilibrium and the three types of equilibrium. Master this and <i>find the reactions</i> stops being intimidating and becomes bookkeeping.<br><br><b>04 · Moment of Inertia</b><br>The most formula-dense slice of the chapter, and examiners love it. JEE Main asks one to two questions every year on composite bodies, the two axis theorems, or the radius of gyration. NEET keeps it factual: the standard-body values and what moment of inertia depends on. JEE Advanced demands integration from scratch and clever theorem combinations. CBSE Boards wants the rod or ring derivation and clean statements of both theorems.<br><br><b>05 · Rotational Kinematics and Dynamics</b><br>This is where the whole chapter ties together. JEE Main asks one to two questions yearly, with constant-α kinematics and pulley or connected-body τ = <i>I</i>α problems perennial. NEET favours direct numericals and the <i>v</i> = <i>r</i>ω relation. JEE Advanced pushes into connected systems, energy methods and variable torque. CBSE Boards wants the τ = <i>I</i>α derivation, rotational kinetic energy, and the kinematic equations.<br><br><b>06 · Rolling Motion</b><br>The chapter's grand finale, fusing translation and rotation into one motion. JEE Main asks one to two questions yearly: inclined-plane acceleration, the kinetic-energy split, or the <i>which body wins the race</i> classic. NEET loves the energy ratio and the race ordering. JEE Advanced pushes into rolling-with-slipping transitions and friction analysis. CBSE Boards wants the rolling kinetic energy expression and the pure-rolling condition <i>v</i> = <i>R</i>ω."
        },
        {
          "t": "p",
          "html": "Every mechanics problem you have solved so far quietly shrank the object to a dot. A block, a ball, a car, all collapsed to a single point carrying mass. That worked while you only cared about <i>where</i> something went. It cannot explain <i>spinning</i>, because a point has no size, so it cannot turn about itself, wobble, or roll. To study rotation you need objects with extent, and the simplest such object is the <b>rigid body</b>: an idealised object in which the distance between any two of its particles never changes, whatever forces act on it. It never stretches, compresses or bends. Real bats, flywheels, spanners and planets deform a little, but so little that treating them as perfectly rigid predicts their motion beautifully."
        },
        {
          "t": "think",
          "html": "picture the body as a swarm of particles welded together by unbreakable, unstretchable rods. push it, twist it, throw it, and the swarm moves and turns as one, with every internal distance frozen. that frozen internal geometry is the whole definition of rigidity, and it is what lets you talk about the rotation of <i>the body</i> instead of tracking a million particles each doing its own thing."
        },
        {
          "t": "p",
          "html": "Every motion a rigid body can perform is one of three kinds, or a blend of the first two. In <b>pure translation</b> every particle moves with the same velocity at the same instant, tracing parallel paths: a book slid flat across a table, a suitcase carried straight forward. No line drawn on the body changes its direction. In <b>pure rotation about a fixed axis</b> every particle moves in a circle, and all those circles are centred on one fixed line, the axis: a ceiling fan, a merry-go-round, the hands of a clock. Particles farther from the axis move faster, at <i>v</i> = <i>r</i>ω, but every one of them shares the same angular speed. In <b>general motion</b> the two happen at once: a rolling wheel whose centre glides forward while the wheel spins about that centre, a thrown spinning bat, a tumbling gymnast. The master strategy of this entire chapter is to split general motion into translation of the centre of mass plus rotation about the centre of mass, handle each with its own laws, and add the results."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.1 · THE THREE KINDS OF MOTION",
          "chips": ["pure translation", "pure rotation", "general motion"],
          "captions": [
            "Every point of the block carries the same velocity arrow: same length, same direction. A line drawn on the body never turns. This is why a translating body can be replaced by one particle at its centre of mass.",
            "Every point circles the fixed axis, which here points out of the page at the centre. All points share ω, but the outer point sweeps a bigger circle in the same time, so its linear speed v = rω is larger.",
            "A rolling wheel does both at once: its centre glides forward at v while the wheel spins about that centre, here clockwise, so ω points into the page. Split it into the two pictures above and each becomes easy."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [{ "kind": "block", "at": [2.6, 3.5], "w": 2.6, "h": 2.4 }],
              "arrows": [
                { "from": [4.1, 4.4], "to": [7.1, 4.4], "tone": "amber" },
                { "from": [4.1, 3.5], "to": [7.1, 3.5], "tone": "amber", "label": "v" },
                { "from": [4.1, 2.6], "to": [7.1, 2.6], "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "curves": [{ "c": "circle", "cx": 4.4, "cy": 3.5, "r": 2.4 }],
              "marks": [{ "x": 4.4, "y": 3.5, "glyph": "outof", "tone": "amber", "label": "ω" }],
              "segments": [{ "from": [4.4, 3.5], "to": [6.8, 3.5], "dash": true, "soft": true }],
              "arrows": [
                { "from": [5.6, 3.5], "to": [5.6, 4.2], "tone": "ink" },
                { "from": [6.8, 3.5], "to": [6.8, 5.1], "tone": "ink", "label": "v = rω", "at": "end" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "curves": [{ "c": "circle", "cx": 3.4, "cy": 3.3, "r": 2.0 }],
              "bodies": [{ "kind": "ground", "at": [5, 1.0], "w": 9, "h": 0.3 }],
              "marks": [{ "x": 3.4, "y": 3.3, "glyph": "into", "tone": "amber", "label": "ω" }],
              "arrows": [{ "from": [3.4, 3.3], "to": [6.6, 3.3], "tone": "ink", "label": "v", "at": "end" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Every linear quantity and its angular twin",
          "tag": "learn this once and the chapter halves in size",
          "rows": [
            { "k": "displacement <i>s</i>, in m", "v": "angular displacement θ, in rad. <i>s</i> = <i>r</i>θ" },
            { "k": "velocity <i>v</i>, in m/s", "v": "angular velocity ω, in rad/s. <i>v</i> = <i>r</i>ω" },
            { "k": "acceleration <i>a</i>, in m/s<sup>2</sup>", "v": "angular acceleration α, in rad/s<sup>2</sup>. <i>a<sub>t</sub></i> = <i>r</i>α" },
            { "k": "mass <i>m</i>, in kg", "v": "moment of inertia <i>I</i>, in kg m<sup>2</sup>. <i>I</i> = Σ<i>m<sub>i</sub>r<sub>i</sub></i><sup>2</sup>" },
            { "k": "force <i>F</i>, in N", "v": "torque τ, in N m. τ = <i>r</i> × <i>F</i>" },
            { "k": "momentum <i>p</i> = <i>mv</i>, in kg m/s", "v": "angular momentum <i>L</i> = <i>I</i>ω, in kg m<sup>2</sup>/s" },
            { "k": "<i>F</i> = <i>ma</i> · <i>K</i> = ½<i>mv</i><sup>2</sup> · <i>P</i> = <i>Fv</i>", "v": "τ = <i>I</i>α · <i>K</i> = ½<i>I</i>ω<sup>2</sup> · <i>P</i> = τω" },
            { "k": "where the twinning BREAKS", "v": "<i>m</i> is one number for a body, <i>I</i> is a different number for every axis; and <i>F</i> is an ordinary vector while τ is a cross product, so it points along the axis, not along the push" }
          ]
        },
        {
          "t": "def",
          "term": "Sign convention for rotation, fixed here for the whole chapter",
          "html": "<b>Anticlockwise is positive.</b> A torque that would turn the body anticlockwise, seen from the front of the page, counts as +; a clockwise one counts as −. The same sign attaches to ω, to α and to <i>L</i>. In three dimensions the same convention has a shape rather than a sign: curl the fingers of your right hand the way the body turns and your thumb gives the vector's direction, so an anticlockwise turn points <b>out of the page</b> and a clockwise turn points <b>into the page</b>. Figures in this chapter draw those two as ⊙ and ⊗, never as a colour. Pick your positive sense before writing an equation and hold it to the end of the problem: sign errors in torque are where marks go, and they are almost always a convention changed halfway through."
        },
        {
          "t": "p",
          "html": "Now for the point the whole chapter is built on. Toss a cricket bat spinning across the room and it tumbles chaotically, every part of it tracing a complicated looping path. Yet hidden inside that tumble there is <b>one special point</b> that ignores the chaos and traces a clean parabola, exactly the path a single thrown stone would follow. That is the <b>centre of mass</b>, and it is the mass-weighted average position of all the matter in the system. The phrase <i>mass-weighted</i> is the whole idea: put a light particle and a heavy one on a line and the balance point does not sit halfway, it leans toward the heavy one. A heavy uncle and a small child balance on a see-saw only when the uncle sits much closer to the pivot."
        },
        {
          "t": "think",
          "html": "balance a steel thali on your fingertip. there is exactly one spot where it sits without tipping, and that spot is the centre of mass. slide your finger a centimetre off it and the thali topples, because gravity now has a moment arm about your fingertip. two things surprise people: there need be no mass at all at the centre of mass, since a bangle's centre of mass sits in the empty air inside it; and the point belongs to the body, not to your axes, so shifting your origin or turning your axes leaves it welded to the same spot on the object."
        },
        {
          "t": "defgrid",
          "title": "Locating the centre of mass",
          "rows": [
            { "k": "Discrete particles", "v": "<i>r<sub>cm</sub></i> = (Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i>) / <i>M</i>, taken component by component. Unit m" },
            { "k": "Two particles only", "v": "<i>x<sub>cm</sub></i> = (<i>m</i><sub>1</sub><i>x</i><sub>1</sub> + <i>m</i><sub>2</sub><i>x</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), the quick check you will use most" },
            { "k": "Continuous body", "v": "<i>r<sub>cm</sub></i> = (1/<i>M</i>) ∫ <i>r</i> <i>dm</i>, with <i>dm</i> = λ<i>dx</i>, σ<i>dA</i> or ρ<i>dV</i> for a 1D, 2D or 3D body" },
            { "k": "Its velocity and acceleration", "v": "<i>v<sub>cm</sub></i> = (1/<i>M</i>) Σ <i>m<sub>i</sub>v<sub>i</sub></i>, so total momentum is <i>Mv<sub>cm</sub></i>; and <i>a<sub>cm</sub></i> = (1/<i>M</i>) Σ <i>m<sub>i</sub>a<sub>i</sub></i>" },
            { "k": "Standard results worth memorising", "v": "semicircular wire 2<i>R</i>/π ≈ 0.64<i>R</i>; semicircular disc 4<i>R</i>/3π ≈ 0.42<i>R</i>; solid cone <i>3h</i>/4 from the apex; triangle <i>h</i>/3 from the base" },
            { "k": "Centre of gravity", "v": "the point where the total weight acts. It coincides with the centre of mass whenever <i>g</i> is the same across the body, which is every problem in this chapter" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE LAW THAT MAKES THE POINT USEFUL",
          "tag": "internal forces can never move it",
          "main": "<i>F</i><sub>ext</sub> = <i>M</i> <i>a<sub>cm</sub></i><br>Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i> = 0, measured from the centre of mass",
          "legend": [
            "<i>F</i><sub>ext</sub> is the net EXTERNAL force on the system, in N; internal forces are absent from this equation, not merely small",
            "<i>M</i> is the total mass of the system, in kg, and <i>a<sub>cm</sub></i> is the acceleration of its centre of mass, in m/s<sup>2</sup>",
            "the second line says the mass-weighted position vectors add to zero when you measure them from the centre of mass itself, which is one way of defining the point"
          ],
          "note": "If <i>F</i><sub>ext</sub> = 0 then <i>v<sub>cm</sub></i> is constant, which is conservation of linear momentum falling straight out of a definition. Every explosion, recoil and collision problem is a centre-of-mass statement wearing a disguise."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MOTION OF THE CENTRE OF MASS, TAP A LINE",
          "steps": [
            {
              "eq": "<i>M</i> <i>r<sub>cm</sub></i> = <i>m</i><sub>1</sub><i>r</i><sub>1</sub> + <i>m</i><sub>2</sub><i>r</i><sub>2</sub> + ... + <i>m<sub>n</sub>r<sub>n</sub></i>",
              "why": "The definition of the centre of mass, multiplied through by the total mass <i>M</i> to clear the fraction. Everything that follows is this one line differentiated."
            },
            {
              "eq": "<i>M</i> <i>v<sub>cm</sub></i> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub> + ... + <i>m<sub>n</sub>v<sub>n</sub></i>",
              "why": "Differentiate once with respect to time. The masses are constants, so differentiation passes straight through them. Read the right-hand side: it is the total momentum of the system, so the whole system carries momentum as though all its mass marched along with the centre of mass."
            },
            {
              "eq": "<i>M</i> <i>a<sub>cm</sub></i> = <i>m</i><sub>1</sub><i>a</i><sub>1</sub> + <i>m</i><sub>2</sub><i>a</i><sub>2</sub> + ... + <i>m<sub>n</sub>a<sub>n</sub></i>",
              "why": "Differentiate a second time, for the same reason."
            },
            {
              "eq": "<i>M</i> <i>a<sub>cm</sub></i> = Σ <i>F</i><sub>ext</sub> + Σ <i>F</i><sub>int</sub>",
              "why": "Replace every <i>m<sub>i</sub>a<sub>i</sub></i> by the net force on that particle, using Newton's second law. The force on each particle splits in two: external forces such as gravity, applied pushes and normal reactions, and internal forces, the mutual pushes and pulls between particles of the system."
            },
            {
              "eq": "Σ <i>F</i><sub>int</sub> = 0",
              "why": "This is the heart of the proof, and it is Newton's third law rather than algebra. For every internal force A exerts on B, B exerts an equal and opposite one back on A. Summed over the whole system these pairs cancel exactly, every one of them."
            },
            {
              "eq": "<i>F</i><sub>ext</sub> = <i>M</i> <i>a<sub>cm</sub></i>",
              "why": "So internal forces, however violent, can never shift the centre of mass by themselves. When a bomb at rest explodes in mid-air, the fragments fly everywhere while the centre of mass carries on along exactly the parabola the unexploded bomb would have followed."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.2 · WHERE A SEMICIRCULAR WIRE BALANCES",
          "chips": ["the element, and the answer"],
          "captions": [
            "Place the wire's centre at the origin with its flat diameter along the x-axis. The element of arc at angle θ has mass dm = (M/π)dθ and sits at height y = R sin θ. Averaging that height over the half-turn gives y = 2R/π ≈ 0.64R, marked here: the balance point of the wire lies in empty space where there is no wire at all."
          ],
          "frames": [
            {
              "x": [-3.6, 3.6], "y": [-0.9, 4.3], "axes": "none",
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[3, 0], [2.898, 0.776], [2.598, 1.5], [2.121, 2.121], [1.5, 2.598], [0.776, 2.898], [0, 3], [-0.776, 2.898], [-1.5, 2.598], [-2.121, 2.121], [-2.598, 1.5], [-2.898, 0.776], [-3, 0]] }
              ],
              "segments": [
                { "from": [-3, 0], "to": [3, 0], "soft": true },
                { "from": [0, 0], "to": [1.928, 2.298], "dash": true, "soft": true, "label": "R", "at": "start" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.95, "from": 0, "to": 50, "label": "θ" }],
              "points": [{ "x": 1.928, "y": 2.298, "label": "dm", "at": "ne" }],
              "marks": [{ "x": 0, "y": 1.91, "glyph": "dot", "tone": "amber", "label": "2R/π" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Centre of mass of a continuous body, by integration",
          "steps": [
            "<b>Use symmetry first, and only integrate what is left.</b> For the semicircular wire above, symmetry about the vertical axis gives <i>x<sub>cm</sub></i> = 0 for free, so one integral does the whole job instead of two.",
            "<b>Choose the element so every point of it shares the coordinate you are averaging.</b> For a cone, take a thin disc slice perpendicular to the axis, because every point of that slice sits at the same height. Choose badly and the integral quietly lies to you.",
            "<b>Match the density to the geometry.</b> A wire or rod gives <i>dm</i> = λ<i>dx</i>, or λ<i>Rd</i>θ along an arc; a plate or lamina gives <i>dm</i> = σ<i>dA</i>, with <i>dA</i> a strip or a ring; a solid gives <i>dm</i> = ρ<i>dV</i>, with <i>dV</i> a slice or a shell.",
            "<b>Write the element's coordinate, then integrate <i>r dm</i> over the whole body and divide by <i>M</i>.</b> Keep <i>M</i> symbolic until the end; it usually cancels against the density.",
            "<b>Sanity-check the direction.</b> The answer must lie inside the body's outline in the direction the mass is concentrated. A rod that gets denser toward one end must have its centre of mass past the midpoint, on that side."
          ]
        },
        {
          "t": "proc",
          "title": "The negative-mass method, for a body with a piece cut out",
          "steps": [
            "<b>Do not integrate.</b> Treat the drilled body as the full body plus a piece of NEGATIVE mass occupying the hole. Both pieces then have centres of mass you already know.",
            "<b>Get the masses from area or volume, not from the question.</b> For a uniform lamina, mass is proportional to area, so a hole of half the radius carries a quarter of the mass, not half.",
            "<b>Apply the two-particle formula with one mass negative,</b> in the numerator AND the denominator: <i>x<sub>cm</sub></i> = (<i>M</i><sub>full</sub><i>x</i><sub>full</sub> − <i>m</i><sub>hole</sub><i>x</i><sub>hole</sub>)/(<i>M</i><sub>full</sub> − <i>m</i><sub>hole</sub>). Dropping the sign in the denominator is the classic slip.",
            "<b>Check the direction before you check the number.</b> The centre of mass always shifts AWAY from the hole. If your answer is on the same side as the cut, a sign went missing."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Three point masses of 2 kg, 3 kg and 5 kg sit at the points (0, 0), (4, 0) and (0, 3) metres respectively. Find the coordinates of their centre of mass.",
          "steps": [
            "Total mass <i>M</i> = 2 + 3 + 5 = 10 kg. Take the two coordinates separately.",
            "<i>x<sub>cm</sub></i> = [(2)(0) + (3)(4) + (5)(0)]/10 = 12/10 = 1.2 m.",
            "<i>y<sub>cm</sub></i> = [(2)(0) + (3)(0) + (5)(3)]/10 = 15/10 = 1.5 m.",
            "Sanity check: the 5 kg mass is the heaviest and it sits high on the y-axis, so the answer should lean up and left of the triangle's plain geometric centre, which is at (1.33 m, 1.00 m). It does."
          ],
          "ans": "centre of mass at (1.2 m, 1.5 m)"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A man of mass 60 kg stands at one end of a 40 kg boat of length 5 m, floating at rest on still water. He walks to the other end. Ignoring water resistance, how far does the boat move?",
          "steps": [
            "The trap is to answer 5 m, the man's displacement relative to the boat, and stop. But there is no external horizontal force on the man-and-boat system, so the centre of mass cannot move horizontally at all. The boat must slide backward to compensate.",
            "When the man walks a length <i>L</i> relative to the boat, the boat shifts by <i>d</i> = <i>m</i><sub>man</sub><i>L</i>/(<i>m</i><sub>man</sub> + <i>m</i><sub>boat</sub>).",
            "<i>d</i> = (60)(5)/(60 + 40) = 300/100 = 3.0 m, in the direction opposite to the man's walk.",
            "Sanity check: the heavier the mover, the bigger the recoil. The man outweighs the boat here, so the boat should move more than half the length, and 3.0 m out of 5 m is exactly that."
          ],
          "ans": "the boat moves 3.0 m backward"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A uniform circular disc of radius <i>R</i> has a circular hole of radius <i>R</i>/2 cut from it, the hole's centre lying a distance <i>R</i>/2 from the disc's centre. (a) Find the centre of mass of what remains. (b) Where must a point mass equal to the removed disc's mass be placed to bring the combined centre of mass back to the original centre?",
          "steps": [
            "Take the disc's centre as the origin and the line joining the two centres as the x-axis. For a uniform disc, mass is proportional to <i>R</i><sup>2</sup>, so the full disc counts as <i>R</i><sup>2</sup> at <i>x</i> = 0 and the hole as (<i>R</i>/2)<sup>2</sup> = <i>R</i><sup>2</sup>/4 at <i>x</i> = <i>R</i>/2, taken negative.",
            "<i>x<sub>cm</sub></i> = [(<i>R</i><sup>2</sup>)(0) − (<i>R</i><sup>2</sup>/4)(<i>R</i>/2)] / [<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>/4] = (−<i>R</i><sup>3</sup>/8)/(3<i>R</i><sup>2</sup>/4) = −<i>R</i>/6.",
            "So the remaining portion balances at <i>R</i>/6 from the centre, on the side away from the hole, exactly as the direction check demands.",
            "(b) Let the removed disc have mass <i>m</i>, so the remaining portion has mass 3<i>m</i>. Place <i>m</i> at <i>x</i><sub>0</sub> and force the combined centre of mass to the origin: [(3<i>m</i>)(−<i>R</i>/6) + <i>m</i><i>x</i><sub>0</sub>]/(4<i>m</i>) = 0, so −<i>R</i>/2 + <i>x</i><sub>0</sub> = 0 and <i>x</i><sub>0</sub> = +<i>R</i>/2.",
            "That is the centre of the hole itself, which is exactly right: you are putting the missing mass back where it came from."
          ],
          "ans": "(a) <i>R</i>/6 from the centre, away from the hole · (b) at <i>x</i> = +<i>R</i>/2, the hole's own centre"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A thin rod of length <i>L</i> lies along the x-axis from <i>x</i> = 0 to <i>x</i> = <i>L</i>. Its linear mass density varies as λ(<i>x</i>) = λ<sub>0</sub>(1 + <i>x</i>/<i>L</i>). Locate its centre of mass.",
          "steps": [
            "The mass element is <i>dm</i> = λ <i>dx</i> = λ<sub>0</sub>(1 + <i>x</i>/<i>L</i>) <i>dx</i>. Symmetry gives nothing here, because the rod is not uniform, so both integrals must be done.",
            "Total mass: <i>M</i> = ∫ from 0 to <i>L</i> of λ<sub>0</sub>(1 + <i>x</i>/<i>L</i>) <i>dx</i> = λ<sub>0</sub>[<i>x</i> + <i>x</i><sup>2</sup>/2<i>L</i>] from 0 to <i>L</i> = λ<sub>0</sub>(<i>L</i> + <i>L</i>/2) = 3λ<sub>0</sub><i>L</i>/2.",
            "First moment: ∫ <i>x</i> <i>dm</i> = ∫ from 0 to <i>L</i> of λ<sub>0</sub>(<i>x</i> + <i>x</i><sup>2</sup>/<i>L</i>) <i>dx</i> = λ<sub>0</sub>[<i>x</i><sup>2</sup>/2 + <i>x</i><sup>3</sup>/3<i>L</i>] from 0 to <i>L</i> = λ<sub>0</sub>(<i>L</i><sup>2</sup>/2 + <i>L</i><sup>2</sup>/3) = 5λ<sub>0</sub><i>L</i><sup>2</sup>/6.",
            "Divide: <i>x<sub>cm</sub></i> = (5λ<sub>0</sub><i>L</i><sup>2</sup>/6) ÷ (3λ<sub>0</sub><i>L</i>/2) = (5<i>L</i><sup>2</sup>/6)(2/3<i>L</i>) = 5<i>L</i>/9 ≈ 0.556<i>L</i>.",
            "Reasoning check: a uniform rod would balance at 0.5<i>L</i>. Here the density climbs toward <i>x</i> = <i>L</i>, so the answer must sit past the midpoint on that side, and 5<i>L</i>/9 > <i>L</i>/2 does."
          ],
          "ans": "<i>x<sub>cm</sub></i> = 5<i>L</i>/9 ≈ 0.56<i>L</i> from the light end"
        },
        {
          "t": "mcq",
          "q": "A bomb at rest at the origin explodes into several fragments under internal forces only. Ignoring gravity, which statement is always true?",
          "opts": [
            { "label": "the fragments' total momentum increases", "nudge": "This ignores momentum conservation. The system started at rest, so the total momentum stays exactly zero however violent the explosion." },
            { "label": "the centre of mass remains at the origin", "nudge": null },
            { "label": "the centre of mass moves toward the largest fragment", "nudge": "This imagines the heaviest piece winning a tug of war. Fragments always fly so that their momenta cancel, so no piece can drag the average anywhere." },
            { "label": "the centre of mass accelerates outward", "nudge": "The most tempting option: you see fragments shooting outward and assume the average does too. But every one of those forces is internal, and internal forces cannot move the centre of mass." }
          ],
          "correct": 1,
          "solution": "With only internal forces, <i>F</i><sub>ext</sub> = 0, so <i>a<sub>cm</sub></i> = 0. It started at rest at the origin, so it stays there for ever."
        },
        {
          "t": "mcq",
          "q": "The centre of mass of a uniform semicircular disc of radius <i>R</i> lies at what distance from its centre?",
          "opts": [
            { "label": "2<i>R</i>/π", "nudge": "This is the answer for a semicircular WIRE, a bent piece of arc with nothing inside it. Examiners offer both values together precisely to catch this swap." },
            { "label": "4<i>R</i>/3π", "nudge": null },
            { "label": "<i>R</i>/2", "nudge": "A careless guess at halfway. Nothing in the mass distribution of a half-disc puts the balance point at half the radius." },
            { "label": "4<i>R</i>/π", "nudge": "The factor of 3 has been dropped from the denominator, which is what a botched integration produces. It also gives 1.27<i>R</i>, further from the centre than the disc's own edge, which is impossible." }
          ],
          "correct": 1,
          "solution": "A filled lamina has 4<i>R</i>/3π ≈ 0.42<i>R</i>; the empty arc has 2<i>R</i>/π ≈ 0.64<i>R</i>. The disc's answer is nearer the centre because a disc has plenty of mass close in, while a wire keeps all of its mass out at radius <i>R</i>."
        },
        {
          "t": "mcq",
          "q": "A man stands at the rear of a trolley that can roll without friction. He walks forward along it and stops. Relative to the ground, the trolley:",
          "opts": [
            { "label": "stays exactly where it was", "nudge": "This forgets that it is the CENTRE OF MASS that is fixed, not the trolley. Holding the average still while the man moves forward requires the trolley to move." },
            { "label": "moves forward", "nudge": "This confuses the man's motion with the trolley's. If both moved forward, the centre of mass would move forward too, and no external horizontal force exists to do that." },
            { "label": "moves backward", "nudge": null },
            { "label": "moves backward, then returns to its start", "nudge": "This imagines the trolley springing back. Nothing pulls it back: once both man and trolley are at rest again, their displacements are permanent." }
          ],
          "correct": 2,
          "solution": "No external horizontal force means the centre of mass is fixed in the ground frame. For the man to move forward, the trolley must move backward to keep the mass-weighted average in place."
        },
        {
          "t": "mcq",
          "q": "Two particles of masses <i>m</i> and 3<i>m</i> move so that their centre of mass stays stationary. If the velocity of <i>m</i> is <i>v</i>, the velocity of 3<i>m</i> is:",
          "opts": [
            { "label": "−<i>v</i>", "nudge": "This assumes equal and opposite VELOCITIES, which is what would balance if the masses were equal. Momentum, not velocity, is what has to cancel." },
            { "label": "−<i>v</i>/3", "nudge": null },
            { "label": "−3<i>v</i>", "nudge": "The mass ratio has been inverted: the heavier particle is made to move faster, when a stationary centre of mass demands it move slower." },
            { "label": "<i>v</i>/3", "nudge": "The magnitude is right but the sign is missing. Two momenta cannot cancel unless the velocities point opposite ways." }
          ],
          "correct": 1,
          "solution": "A stationary centre of mass means zero total momentum: <i>mv</i> + 3<i>m</i><i>v</i><sub>2</sub> = 0, so <i>v</i><sub>2</sub> = −<i>v</i>/3. Three times the mass, one third of the speed, opposite direction."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two particles of mass 4 kg and 6 kg are 10 m apart along a straight line. How far is their centre of mass from the 4 kg particle?", "a": "Measuring from the 4 kg mass: <i>x<sub>cm</sub></i> = [(4)(0) + (6)(10)]/10 = 6.0 m. It sits nearer the heavier particle, as it must." },
            { "q": "[NEET] Four identical particles of mass <i>m</i> sit at the corners of a square of side <i>a</i>. One is removed. How far does the centre of mass shift from the centre of the square?", "a": "Take corners (0,0), (<i>a</i>,0), (<i>a</i>,<i>a</i>), (0,<i>a</i>) and remove the one at the origin. The remaining three balance at (2<i>a</i>/3, 2<i>a</i>/3), a shift of <i>a</i>/6 in each coordinate from (<i>a</i>/2, <i>a</i>/2). Distance = (<i>a</i>/6)√2 = <i>a</i>√2/6 = <i>a</i>/(3√2) ≈ 0.24<i>a</i>, toward the diagonally opposite corner." },
            { "q": "[JEE Main] A uniform square plate of side <i>a</i> has a square of side <i>a</i>/2 removed from one corner. How far is the new centre of mass from the centre of the original plate?", "a": "Negative mass: full plate <i>a</i><sup>2</sup> at (<i>a</i>/2, <i>a</i>/2), removed corner <i>a</i><sup>2</sup>/4 at (<i>a</i>/4, <i>a</i>/4). <i>x<sub>cm</sub></i> = [<i>a</i><sup>2</sup>(<i>a</i>/2) − (<i>a</i><sup>2</sup>/4)(<i>a</i>/4)]/(3<i>a</i><sup>2</sup>/4) = 7<i>a</i>/12, a shift of <i>a</i>/12 in each coordinate. Distance = <i>a</i>√2/12 = <i>a</i>/(6√2) ≈ 0.12<i>a</i>, away from the cut." },
            { "q": "[JEE Main] A shell flying horizontally at 20 m/s explodes into two equal fragments. One fragment is momentarily at rest. Find the speed of the other immediately after the explosion.", "a": "Momentum is conserved because the explosion is internal: 2<i>m</i>(20) = <i>m</i>(0) + <i>m</i><i>v</i>, so <i>v</i> = 40 m/s, along the original direction." },
            { "q": "[JEE Advanced] A uniform solid cone of height <i>h</i> has its apex at the origin and its axis along the y-axis. Show by integration that its centre of mass lies at 3<i>h</i>/4 from the apex.", "a": "Slice into discs of thickness <i>dy</i> at height <i>y</i>; the radius grows linearly, so <i>dm</i> ∝ <i>y</i><sup>2</sup><i>dy</i>. Then <i>y<sub>cm</sub></i> = ∫<i>y</i><sup>3</sup><i>dy</i> ÷ ∫<i>y</i><sup>2</sup><i>dy</i> over 0 to <i>h</i> = (<i>h</i><sup>4</sup>/4)/(<i>h</i><sup>3</sup>/3) = 3<i>h</i>/4. Past the midpoint, because a cone's mass crowds toward its wide base." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating the centre of mass as a midpoint.</b> It is mass-WEIGHTED, and halfway is right only for equal masses. Lean every answer toward the heavier side and check that it landed there before you write it down.",
            "<b>Confusing the semicircular wire with the semicircular disc.</b> Arc gives 2<i>R</i>/π, filled disc gives 4<i>R</i>/3π. Examiners deliberately offer both as options in the same question, so learn which is which rather than which is bigger.",
            "<b>Forgetting that internal forces cannot move the centre of mass.</b> In explosions, recoils and man-on-boat problems the centre of mass is frozen, or keeps whatever motion it already had. Students waste minutes tracking individual pieces instead of anchoring to the one point that does not move.",
            "<b>Dropping a sign in the negative-mass method.</b> The removed piece is negative in the numerator AND the denominator. Lose it in one place and the centre of mass flips to the wrong side of the hole, which is the side an examiner is offering you.",
            "<b>Assuming there must be mass at the centre of mass.</b> A ring, a bangle, a hollow box and a semicircular wire all balance at a point where there is nothing at all. The point is an average, not a location of matter."
          ]
        },
        {
          "t": "protip",
          "html": "for any removed-portion problem, skip the numbers. mass goes as area for a lamina and as volume for a solid, so a hole of half the radius is a quarter of the mass and a hole of half the diameter of a sphere is an eighth. do the direction check first, the centre of mass always shifts away from the hole, and you will catch half of all sign mistakes before doing any arithmetic. and whenever a problem says explosion, recoil, walking on a boat, or two skaters pushing apart, freeze the centre of mass before you write anything else, then let everything else fall out of that one statement."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>r<sub>cm</sub></i> = (Σ<i>m<sub>i</sub>r<sub>i</sub></i>)/<i>M</i> · <i>r<sub>cm</sub></i> = (1/<i>M</i>)∫<i>r dm</i>", "note": "mass-weighted average, discrete then continuous" },
            { "f": "<i>F</i><sub>ext</sub> = <i>M</i><i>a<sub>cm</sub></i>", "note": "internal forces are absent from this line, so they can never move the point" },
            { "f": "wire 2<i>R</i>/π · disc 4<i>R</i>/3π · cone 3<i>h</i>/4 · triangle <i>h</i>/3", "note": "the four standard results examiners recycle" },
            { "f": "remove a piece by giving it negative mass", "note": "the centre of mass always shifts away from the hole" },
            { "f": "anticlockwise is +, and out of the page is ⊙", "note": "chosen here and held for all six topics" }
          ],
          "aids": [
            "\"wire is 2R over pi, area is 4R over 3 pi\"",
            "\"internal forces can't move it, so freeze the centre of mass first\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Torque and Angular Momentum",
      "chip": "02 TORQUE",
      "kalam": "about which point? answer that before anything else",
      "blocks": [
        {
          "t": "p",
          "html": "Think about the last heavy door you opened. You pushed the handle, the edge farthest from the hinges, without deciding to. Nobody pushes a door near its hinge, because it feels useless, and it is. That instinct is the whole concept of <b>torque</b> already living in your muscle memory. Torque is the turning effect of a force, and it depends on three things the door teaches all at once: how hard you push, how far from the pivot you push, and in which direction you push. Push harder and it swings faster. Push farther from the hinge and it is far easier. Push straight <i>toward</i> the hinge instead of across the door and nothing happens at all, however hard you shove."
        },
        {
          "t": "think",
          "html": "a thela-wala turning his handcart at a corner never pushes straight down the middle of the handle. he pushes sideways, at the far end. long arm, sideways push, maximum turn: torque optimised by instinct decades before anyone wrote it down. a mechanic loosening a seized bolt does the same thing on purpose, reaching for the longest spanner in the box and pushing at right angles to it."
        },
        {
          "t": "p",
          "html": "That last point, that only the part of the force <i>perpendicular</i> to the line from pivot to push does any turning, is what makes torque a different kind of product. You already know one way to multiply two vectors, the dot product, which answers <i>how much do these point the same way</i> and hands back a plain number. The <b>vector product</b>, or cross product, answers the opposite question: <i>how much do these point in different directions, and which way is the plane they span facing?</i> Its answer is itself a vector. It has to be, because a turning effect needs a direction perpendicular to two given directions at once: you push one way, at some distance in another direction, and the door swings about an axis perpendicular to both, straight up the hinge line."
        },
        {
          "t": "p",
          "html": "There are two pictures worth carrying. The first is the <b>right-hand rule</b>: sweep the first vector toward the second with the fingers of your right hand and your thumb gives the product's direction, exactly as a screw cap advances along the axis your thumb points to while your fingers curl the way you turn it. The second is <b>area</b>: the magnitude of <i>A</i> × <i>B</i> is the area of the parallelogram built on <i>A</i> and <i>B</i> as adjacent sides. Two parallel vectors squash that parallelogram flat, zero area, so their cross product is zero; two perpendicular vectors make it as fat as possible, so their cross product is largest. The cross product measures how perpendicular two vectors are, which is precisely the opposite of what the dot product measures."
        },
        {
          "t": "defgrid",
          "title": "The cross product, in six lines",
          "rows": [
            { "k": "Definition", "v": "<i>A</i> × <i>B</i> = <i>AB</i> sin θ <i>n̂</i>, where <i>n̂</i> is the unit vector perpendicular to both, in the right-hand-rule sense. Its unit is whatever the two factors' units multiply to" },
            { "k": "Magnitude", "v": "|<i>A</i> × <i>B</i>| = <i>AB</i> sin θ, which is the area of the parallelogram on <i>A</i> and <i>B</i>. Half of it is the triangle's area" },
            { "k": "Anti-commutative", "v": "<i>A</i> × <i>B</i> = −(<i>B</i> × <i>A</i>), and <i>A</i> × <i>A</i> = 0. Swapping the order flips the direction, so order is never optional" },
            { "k": "Unit vectors, cyclic", "v": "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ. Go round that ring forward for +, backward for −, so ĵ × î = −k̂" },
            { "k": "Determinant form", "v": "î(<i>A<sub>y</sub>B<sub>z</sub></i> − <i>A<sub>z</sub>B<sub>y</sub></i>) − ĵ(<i>A<sub>x</sub>B<sub>z</sub></i> − <i>A<sub>z</sub>B<sub>x</sub></i>) + k̂(<i>A<sub>x</sub>B<sub>y</sub></i> − <i>A<sub>y</sub>B<sub>x</sub></i>). The minus on ĵ is not optional either" },
            { "k": "Three dimensions only", "v": "the dot product works in any number of dimensions; the perpendicular-direction idea needs 3D space to live in. For two vectors already in the xy-plane, only the k̂ term survives" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TORQUE IS A CROSS PRODUCT",
          "tag": "N m, and never joules",
          "main": "τ = <i>r</i> × <i>F</i><br>|τ| = <i>r</i> <i>F</i> sin θ = <i>r</i><sub>⊥</sub> <i>F</i> = <i>r</i> <i>F</i><sub>⊥</sub>",
          "legend": [
            "<i>r</i> is the position vector from the chosen pivot to the point where the force acts, in m",
            "<i>F</i> is the force, in N, and θ is the angle between the two",
            "<i>r</i><sub>⊥</sub> = <i>r</i> sin θ is the <b>moment arm</b>, the perpendicular distance from the pivot to the force's line of action, in m; <i>F</i><sub>⊥</sub> = <i>F</i> sin θ is the perpendicular component of the force, in N. The two readings give the same answer, so use whichever the diagram hands you",
            "τ is in N m, and its dimensions are M L<sup>2</sup> T<sup>−2</sup>"
          ],
          "note": "Those are the dimensions of energy too, so dimensional analysis cannot tell torque from work. The units have to do it instead: torque is reported in N m, energy in joules, and writing a torque in joules loses the mark even when the number is right."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHAT THE MOMENT ARM ACTUALLY IS",
          "chips": ["the perpendicular distance", "a force aimed at the pivot"],
          "captions": [
            "Extend the force's line of action backward, then drop a perpendicular onto it from the pivot O. That perpendicular, r sin θ, is the moment arm, and torque is simply force times moment arm. Here the force would turn the body anticlockwise, so τ points out of the page.",
            "The same force applied along the line joining the pivot to the point of application. Now θ = 180°, sin θ = 0, and the moment arm has collapsed to nothing: the line of action passes straight through O. This is pushing a door at its hinge, and no amount of force produces any turn."
          ],
          "frames": [
            {
              "x": [-1, 9], "y": [-2.4, 5], "axes": "none",
              "marks": [
                { "x": 1, "y": 1, "glyph": "open", "label": "O" },
                { "x": 1, "y": 2.8, "glyph": "outof", "tone": "amber", "label": "τ" }
              ],
              "segments": [
                { "from": [1, 1], "to": [6, 1], "label": "r" },
                { "from": [6, 1], "to": [4.5, -1.598], "dash": true, "soft": true },
                { "from": [1, 1], "to": [4.75, -1.165], "dash": true, "label": "r sin θ" }
              ],
              "arrows": [{ "from": [6, 1], "to": [7, 2.73], "tone": "amber", "label": "F", "at": "end" }],
              "arcs": [
                { "at": [6, 1], "r": 0.9, "from": 0, "to": 60, "label": "θ" },
                { "at": [4.75, -1.165], "r": 0.45, "from": 60, "to": 150, "right": true }
              ]
            },
            {
              "x": [-1, 9], "y": [-2.4, 5], "axes": "none",
              "marks": [{ "x": 1, "y": 1, "glyph": "open", "label": "O" }],
              "segments": [{ "from": [1, 1], "to": [5.5, 3], "dash": true, "soft": true, "label": "r", "at": "start" }],
              "arrows": [{ "from": [5.5, 3], "to": [3.21, 1.98], "tone": "red", "label": "F", "at": "end" }],
              "labels": [{ "x": 6.6, "y": -0.6, "text": "τ = 0" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Computing a cross product from components",
          "steps": [
            "<b>Set up the determinant with î, ĵ, k̂ across the top.</b> Put the components of the FIRST vector in the middle row and the second in the bottom row. For a torque that means <i>r</i> in the middle and <i>F</i> underneath; for angular momentum, <i>r</i> in the middle and <i>p</i> = <i>mv</i> underneath. Swap the rows and you have computed the negative of what you wanted.",
            "<b>Expand along the top row, subtracting the ĵ term.</b> The pattern is î(cover column 1) − ĵ(cover column 2) + k̂(cover column 3), where each cover is the 2 × 2 determinant of the four entries left behind.",
            "<b>For a flat problem, skip the determinant entirely.</b> If both vectors lie in the xy-plane, only the k̂ component survives, and it is <i>A<sub>x</sub>B<sub>y</sub></i> − <i>A<sub>y</sub>B<sub>x</sub></i>. A positive k̂ means anticlockwise, negative means clockwise, so the sign hands you the sense of rotation without any diagram.",
            "<b>Check by dotting.</b> Take your answer and dot it with either original vector. You must get zero, because the product is perpendicular to both. This costs five seconds and catches almost every arithmetic slip."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Find <i>A</i> × <i>B</i> for <i>A</i> = 2î + 3ĵ + k̂ and <i>B</i> = î − ĵ + 2k̂, and verify the answer is perpendicular to <i>A</i>.",
          "steps": [
            "Expand the determinant with <i>A</i> in the middle row: î[(3)(2) − (1)(−1)] − ĵ[(2)(2) − (1)(1)] + k̂[(2)(−1) − (3)(1)].",
            "= î(6 + 1) − ĵ(4 − 1) + k̂(−2 − 3) = 7î − 3ĵ − 5k̂.",
            "Check: <i>A</i> · (<i>A</i> × <i>B</i>) = (2)(7) + (3)(−3) + (1)(−5) = 14 − 9 − 5 = 0. The result is perpendicular to <i>A</i>, as it must be, and the same check against <i>B</i> also gives zero."
          ],
          "ans": "<i>A</i> × <i>B</i> = 7î − 3ĵ − 5k̂"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two sides of a triangle are the vectors <i>P</i> = 3î + ĵ and <i>Q</i> = î + 4ĵ. Find the triangle's area and a unit vector perpendicular to its plane.",
          "steps": [
            "Both vectors lie in the xy-plane, so only the k̂ term of the cross product survives: <i>P</i> × <i>Q</i> = k̂[(3)(4) − (1)(1)] = 11k̂.",
            "Area of the triangle = ½|<i>P</i> × <i>Q</i>| = ½(11) = 5.5 square units. The parallelogram on the same two sides would have 11.",
            "Unit vector: <i>n̂</i> = (<i>P</i> × <i>Q</i>)/|<i>P</i> × <i>Q</i>| = 11k̂/11 = k̂. Which makes sense: two vectors in the xy-plane must have their perpendicular along the z-axis."
          ],
          "ans": "area 5.5 square units · perpendicular unit vector k̂"
        },
        {
          "t": "mcq",
          "q": "The vector product <i>A</i> × <i>B</i> is zero. This means the two vectors are:",
          "opts": [
            { "label": "perpendicular", "nudge": "Perpendicular vectors give the MAXIMUM cross product, not zero, because sin 90° = 1. This is the dot product's rule leaking into the cross product's question." },
            { "label": "parallel or anti-parallel", "nudge": null },
            { "label": "one of them a unit vector", "nudge": "A magnitude of 1 says nothing about the angle between them, and the angle is the only thing that can make the product vanish." },
            { "label": "equal to each other", "nudge": "Equal vectors are one special case of parallel, so this is true but far too narrow: anti-parallel vectors of different lengths also give zero." }
          ],
          "correct": 1,
          "solution": "|<i>A</i> × <i>B</i>| = <i>AB</i> sin θ vanishes only when sin θ = 0, so θ = 0° or 180°. This is the mathematical reason a force pushing straight at a hinge produces no torque."
        },
        {
          "t": "mcq",
          "q": "Which of these unit-vector products is correct?",
          "opts": [
            { "label": "î × ĵ = î", "nudge": "The result of a cross product must be perpendicular to BOTH factors, and î is not perpendicular to itself. The right answer here is k̂." },
            { "label": "ĵ × k̂ = î", "nudge": null },
            { "label": "k̂ × ĵ = î", "nudge": "This runs the cyclic ring backward, so it picks up a minus sign: k̂ × ĵ = −î, not +î." },
            { "label": "î × î = k̂", "nudge": "Any vector crossed with itself is the zero vector, because the angle between them is 0 and sin 0 = 0." }
          ],
          "correct": 1,
          "solution": "Go forward round the ring î → ĵ → k̂ → î for a plus sign. ĵ × k̂ = î is one forward step, so it is correct as printed."
        },
        {
          "t": "p",
          "html": "Now the partner concept. If torque is the rotational cousin of force, <b>angular momentum</b> <i>L</i> is the rotational cousin of momentum: the quantity of rotational motion stored in a spinning body, and like linear momentum it resists being changed. A spinning top stays upright, a moving bicycle balances where a stationary one falls over, and a spinning cricket ball holds its line. Only an external torque can change it. For a single particle, <i>L</i> = <i>r</i> × <i>p</i>, the same cross product one level up; for a rigid body turning about a fixed axis it collapses to the beautifully simple <i>L</i> = <i>I</i>ω."
        },
        {
          "t": "think",
          "html": "you have watched this law at every sangeet. a dancer doing fast chakkars starts with arms flung out, pulls them in, and suddenly whips round much faster. nobody pushed her. she moved her mass closer to the axis, shrinking I, and since L = Iω has to stay constant with no external torque about the vertical, ω had to shoot up. try it on an office chair with your legs out, then tucked in. the same law runs a collapsing star: a giant sun shrinking to a neutron star cuts its radius by thousands, its moment of inertia collapses, and its spin rate explodes to hundreds of turns a second. same dancer, unimaginably larger stage."
        },
        {
          "t": "def",
          "term": "About which point? Answer this before you write anything",
          "html": "There is no such thing as <i>the</i> torque or <i>the</i> angular momentum in the abstract. Both are defined <b>about a chosen point or axis</b>, and the same force gives different torques about different points. So the first line of any solution names the reference point, and the last line still uses it. Three consequences follow. First, conservation of angular momentum holds only when the net external torque <b>about that same point</b> is zero. Second, it is component-wise: if the external torque vanishes along one axis, only the angular momentum along that axis is conserved, and the others may still change. Third, and most usefully, choosing the point is free, so choose it to kill your worst unknown: any force that acts <i>at</i> your chosen point has zero moment arm and drops out of the equation entirely."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER EQUATION OF ROTATIONAL DYNAMICS",
          "main": "<i>L</i> = <i>r</i> × <i>p</i> = <i>r</i> × <i>mv</i>, and <i>L</i> = <i>I</i>ω about a fixed axis<br>τ<sub>ext</sub> = <i>dL</i>/<i>dt</i> · τ<sub>ext</sub> = 0 ⇒ <i>I</i><sub>1</sub>ω<sub>1</sub> = <i>I</i><sub>2</sub>ω<sub>2</sub>",
          "legend": [
            "<i>L</i> is angular momentum, in kg m<sup>2</sup>/s, which is the same unit as J s; its dimensions are M L<sup>2</sup> T<sup>−1</sup>",
            "<i>p</i> = <i>mv</i> is linear momentum in kg m/s, <i>m</i> is mass in kg and <i>v</i> velocity in m/s",
            "<i>I</i> is the moment of inertia, in kg m<sup>2</sup>, and ω the angular velocity in rad/s",
            "|<i>L</i>| = <i>mvr</i> sin θ = <i>p</i> <i>r</i><sub>⊥</sub>, the same moment-arm reading torque has",
            "angular impulse is <i>J</i> = ∫τ <i>dt</i> = Δ<i>L</i>, in N m s, which is again J s; and the rotational kinetic energy is <i>K</i> = ½<i>I</i>ω<sup>2</sup> = <i>L</i><sup>2</sup>/2<i>I</i>"
          ],
          "note": "τ = <i>dL</i>/<i>dt</i> is Newton's second law written in angular language, the exact twin of <i>F</i> = <i>dp</i>/<i>dt</i>. Everything else in this topic is a consequence of it."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY TORQUE IS THE RATE OF CHANGE OF L, TAP A LINE",
          "steps": [
            {
              "eq": "<i>L</i> = <i>r</i> × <i>p</i> = <i>r</i> × <i>mv</i>",
              "why": "The definition of a particle's angular momentum about the chosen point. Both factors change with time, which is what makes the next step a product rule rather than a single derivative."
            },
            {
              "eq": "<i>dL</i>/<i>dt</i> = (<i>dr</i>/<i>dt</i>) × <i>p</i> + <i>r</i> × (<i>dp</i>/<i>dt</i>)",
              "why": "The product rule, applied to a cross product. The order inside each term is preserved on purpose: a cross product is anti-commutative, so writing <i>p</i> × (<i>dr</i>/<i>dt</i>) instead would flip a sign."
            },
            {
              "eq": "(<i>dr</i>/<i>dt</i>) × <i>p</i> = <i>v</i> × <i>mv</i> = <i>m</i>(<i>v</i> × <i>v</i>) = 0",
              "why": "The first term dies. <i>dr</i>/<i>dt</i> is the velocity, and momentum points the same way velocity does, so this is a vector crossed with itself: the angle is zero, sin 0 = 0, and the product vanishes. Velocity and momentum are parallel, so they can produce no turning effect."
            },
            {
              "eq": "<i>dL</i>/<i>dt</i> = <i>r</i> × (<i>dp</i>/<i>dt</i>) = <i>r</i> × <i>F</i> = τ",
              "why": "The second term survives, and Newton's second law turns <i>dp</i>/<i>dt</i> straight into the force. What is left is the definition of torque."
            },
            {
              "eq": "τ<sub>ext</sub> = 0 ⇒ <i>L</i> = constant",
              "why": "The conservation law as a one-line corollary. If no net external torque acts, the total angular momentum cannot change, whatever internal rearrangements occur. The dancer pulling her arms in, two wheels coupling on a shaft and a planet sweeping along its orbit are all this single line."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.3 · A BULLET INTO A PIVOTED ROD",
          "chips": ["choosing the axis that saves you"],
          "captions": [
            "Seen from above: the rod lies on a frictionless table, pinned at O. The bullet arrives perpendicular to the rod and embeds in the free end. During the impact the pin exerts a huge unknown force, so linear momentum is not conserved. But that force acts AT O, so its moment arm about O is zero and it exerts no torque there. Angular momentum about O is therefore conserved, and the unknown never enters the equation."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "segments": [{ "from": [1.5, 3], "to": [7, 3] }],
              "marks": [
                { "x": 1.5, "y": 3, "glyph": "open", "label": "O" },
                { "x": 2.9, "y": 4.5, "glyph": "outof", "tone": "amber", "label": "ω after" }
              ],
              "points": [{ "x": 7, "y": 3, "label": "m", "at": "nw" }],
              "arrows": [{ "from": [7, 0.9], "to": [7, 2.8], "tone": "amber", "label": "v", "at": "end" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the right conserved quantity in a rotational collision",
          "steps": [
            "<b>Ask what the supports do during the impact.</b> A pivot, hinge or axle delivers an enormous impulsive reaction of unknown size while the collision lasts. That single fact decides everything below.",
            "<b>So linear momentum is NOT conserved</b> whenever such a support exists: the unknown reaction is an external force on the system, and it is not small.",
            "<b>But angular momentum about the pivot IS conserved,</b> because that reaction acts at the pivot itself, has zero moment arm about it, and therefore exerts no torque there. Choosing that point as your axis deletes the unknown from the algebra rather than solving for it.",
            "<b>Do not reach for energy.</b> An embedding bullet, a lump of clay landing on a turntable, or two wheels coupling on a shaft are all perfectly inelastic: kinetic energy is lost, and how much is an output of the problem, never an input.",
            "<b>Write <i>L</i> before = <i>L</i> after about that one point, and hold the point.</b> Before the impact, count only what is moving; after it, use <i>I</i>ω with the combined moment of inertia, which includes the embedded mass as a point mass at its own distance."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A mechanic pulls with 40 N at the end of a spanner of length 0.25 m, the force making 30° with the handle. Find the torque about the bolt. Then, for a force <i>F</i> = (5î + ĵ) N acting at <i>r</i> = (2î + 3ĵ) m, find the torque about the origin and its sense.",
          "steps": [
            "Spanner: τ = <i>rF</i> sin θ = (0.25)(40) sin 30° = (0.25)(40)(0.5) = 5.0 N m. Report it in N m, never in joules, and state the sense if asked.",
            "Component version: both vectors lie in the plane, so only the k̂ term survives, τ<sub>z</sub> = <i>xF<sub>y</sub></i> − <i>yF<sub>x</sub></i>.",
            "τ<sub>z</sub> = (2)(1) − (3)(5) = 2 − 15 = −13 N m.",
            "The negative sign, under the convention fixed in Topic 01, means this force tends to turn the body clockwise about the origin. Notice you never drew an angle or hunted for a perpendicular distance: the determinant handled the geometry and the sign in one stroke."
          ],
          "ans": "spanner τ = 5.0 N m · component case τ = −13 N m, i.e. 13 N m clockwise"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A spinning dancer with her arms outstretched has moment of inertia <i>I</i> and angular speed ω. She pulls her arms in, reducing her moment of inertia to 2<i>I</i>/5. Find her new angular speed, and the ratio of her new rotational kinetic energy to the old one.",
          "steps": [
            "The trap is to conserve kinetic energy, as in an elastic collision. It is not conserved: her muscles do work pulling the arms in, so the energy goes UP. Only angular momentum is conserved, because no external torque acts about the vertical axis.",
            "Conserve <i>L</i> = <i>I</i>ω: <i>I</i>ω = (2<i>I</i>/5)ω′, so ω′ = (5/2)ω = 2.5ω.",
            "For the energy, use <i>K</i> = <i>L</i><sup>2</sup>/2<i>I</i> with <i>L</i> fixed, so <i>K</i> is inversely proportional to <i>I</i>: <i>K</i>′/<i>K</i> = <i>I</i>/<i>I</i>′ = <i>I</i>/(2<i>I</i>/5) = 2.5.",
            "Sanity check: she spins faster AND has more energy, which is exactly what it looks like when a skater powers up a spin. The extra energy came from her muscles, not from nowhere."
          ],
          "ans": "ω′ = 2.5ω · rotational kinetic energy rises by a factor of 2.5"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A particle of mass <i>m</i> is projected from the ground with speed <i>u</i> at angle θ to the horizontal. Find the magnitude of its angular momentum about the point of projection when it is at the highest point of its path.",
          "steps": [
            "This needs projectile kinematics before any angular momentum appears. Maximum height <i>H</i> = <i>u</i><sup>2</sup> sin<sup>2</sup>θ / 2<i>g</i>, quoted from Motion in a Plane rather than re-derived.",
            "At the top the vertical component of velocity is zero, so the velocity is purely horizontal and equals <i>u</i> cos θ.",
            "Angular momentum about the launch point is <i>L</i> = <i>m</i> <i>v</i> <i>r</i><sub>⊥</sub>. The horizontal velocity is perpendicular to the vertical height, so the moment arm is simply <i>H</i>.",
            "<i>L</i> = <i>m</i>(<i>u</i> cos θ)(<i>u</i><sup>2</sup> sin<sup>2</sup>θ / 2<i>g</i>) = <i>m</i><i>u</i><sup>3</sup> sin<sup>2</sup>θ cos θ / 2<i>g</i>, directed into the page for a projectile launched to the right, which is the clockwise sense."
          ],
          "ans": "<i>L</i> = <i>m u</i><sup>3</sup> sin<sup>2</sup>θ cos θ / 2<i>g</i>, into the page"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A uniform rod of mass <i>M</i> and length <i>L</i> is pivoted at one end on a frictionless horizontal table, initially at rest. A bullet of mass <i>m</i> moving horizontally at speed <i>v</i>, perpendicular to the rod, strikes the free end and embeds itself. Find the angular speed of the rod-plus-bullet system immediately after impact.",
          "steps": [
            "Choose the right conserved quantity first. During the collision the pivot exerts a large unknown impulsive force, so linear momentum is not conserved. But that force acts at the pivot, so its torque about the pivot is zero, and angular momentum about the pivot is conserved. Choosing that axis is the whole insight.",
            "Before impact only the bullet moves, at perpendicular distance <i>L</i> from the pivot: <i>L</i><sub>i</sub> = <i>mvL</i>.",
            "After impact the two move together. The rod about its end contributes <i>ML</i><sup>2</sup>/3, and the embedded bullet is a point mass at distance <i>L</i>, contributing <i>mL</i><sup>2</sup>. So <i>I</i><sub>f</sub> = <i>ML</i><sup>2</sup>/3 + <i>mL</i><sup>2</sup>.",
            "Equate: <i>mvL</i> = (<i>ML</i><sup>2</sup>/3 + <i>mL</i><sup>2</sup>)ω, so ω = <i>mv</i> / [<i>L</i>(<i>M</i>/3 + <i>m</i>)] = 3<i>mv</i> / [<i>L</i>(<i>M</i> + 3<i>m</i>)].",
            "Kinetic energy is NOT conserved here, since the embedding is perfectly inelastic, which is exactly why the solution leaned on angular momentum instead. Limit check: a very heavy rod, <i>M</i> much larger than <i>m</i>, gives ω → 3<i>mv</i>/(<i>ML</i>), which is small, as an immovable rod should be."
          ],
          "ans": "ω = 3<i>mv</i> / [<i>L</i>(<i>M</i> + 3<i>m</i>)]"
        },
        {
          "t": "mcq",
          "q": "A force acts on a rigid body free to turn about a fixed axis. The torque about that axis is zero when the force is:",
          "opts": [
            { "label": "perpendicular to the position vector", "nudge": "That gives the MAXIMUM torque, since sin 90° = 1. It is the exact opposite of the condition asked for." },
            { "label": "directed along the position vector, toward or away from the axis", "nudge": null },
            { "label": "small in magnitude", "nudge": "A small force gives a small torque, but never exactly zero unless its line of action passes through the axis. Magnitude cannot make a product vanish while the angle is non-zero." },
            { "label": "applied at the rim of the body", "nudge": "The rim is the LARGEST moment arm available, so a force there maximises the torque. This confuses far from the axis with useless." }
          ],
          "correct": 1,
          "solution": "τ = <i>rF</i> sin θ, and a force along <i>r</i> has θ = 0° or 180°, so sin θ = 0. This is pushing a door straight at its hinge."
        },
        {
          "t": "mcq",
          "q": "A skater spinning with her arms extended pulls them in. Which quantity stays constant?",
          "opts": [
            { "label": "angular velocity", "nudge": "Her angular velocity is precisely what changes; that is the whole point of the manoeuvre." },
            { "label": "moment of inertia", "nudge": "Moving mass closer to the axis is exactly what reduces the moment of inertia, so this is the other quantity that visibly changes." },
            { "label": "angular momentum", "nudge": null },
            { "label": "rotational kinetic energy", "nudge": "The classic trap. Kinetic energy INCREASES, because her muscles do work pulling the arms in against the outward tendency. Conserved momentum is not conserved energy." }
          ],
          "correct": 2,
          "solution": "No external torque acts about the spin axis, so <i>L</i> = <i>I</i>ω is conserved. <i>I</i> falls and ω rises to compensate, and <i>K</i> = <i>L</i><sup>2</sup>/2<i>I</i> rises with them."
        },
        {
          "t": "mcq",
          "q": "The dimensional formula of angular momentum is the same as that of:",
          "opts": [
            { "label": "torque", "nudge": "Torque is M L<sup>2</sup> T<sup>−2</sup>, which differs from angular momentum by exactly one power of time. They are the closest pair, which is why this option is offered." },
            { "label": "Planck's constant", "nudge": null },
            { "label": "angular velocity", "nudge": "Angular velocity is just T<sup>−1</sup>: the radian is dimensionless, so it carries no mass or length at all." },
            { "label": "force", "nudge": "Force is M L T<sup>−2</sup>, short by one power of length and one of time." }
          ],
          "correct": 1,
          "solution": "Angular momentum is M L<sup>2</sup> T<sup>−1</sup>. Planck's constant <i>h</i> = 6.63 × 10<sup>−34</sup> J s is an energy times a time, M L<sup>2</sup> T<sup>−2</sup> × T, which is the same thing. That is no coincidence: <i>h</i> literally is a quantum of angular momentum."
        },
        {
          "t": "mcq",
          "q": "A particle moves in a straight line at constant velocity. Its angular momentum about a point NOT on that line is:",
          "opts": [
            { "label": "zero", "nudge": "That would need the moment arm to be zero, which happens only when the reference point lies ON the line. The question rules that out." },
            { "label": "increasing with time", "nudge": "This assumes the growing distance from the point matters. It does not: only the PERPENDICULAR distance to the line enters, and for straight-line motion that never changes." },
            { "label": "constant and non-zero", "nudge": null },
            { "label": "decreasing with time", "nudge": "Same error as the increasing option, with the sign guessed the other way. The moment arm is fixed, so nothing in <i>L</i> = <i>mvr</i><sub>⊥</sub> varies." }
          ],
          "correct": 2,
          "solution": "<i>L</i> = <i>mvr</i><sub>⊥</sub>, and <i>m</i>, <i>v</i> and the perpendicular distance <i>r</i><sub>⊥</sub> from the point to the line are all fixed. Equivalently: no force means no torque, so <i>L</i> is conserved."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A force <i>F</i> = (2î + 3ĵ) N acts at the point <i>r</i> = (4î + ĵ) m. Find the torque about the origin.", "a": "Only the k̂ term survives: τ<sub>z</sub> = <i>xF<sub>y</sub></i> − <i>yF<sub>x</sub></i> = (4)(3) − (1)(2) = 10. So τ = 10k̂ N m, anticlockwise." },
            { "q": "[NEET] A planet moves in an elliptical orbit around the Sun. About which point is its angular momentum conserved, and what stays constant as a result?", "a": "About the Sun, the centre of force: gravity always points at the Sun, so its moment arm about the Sun is zero and it exerts no torque there. The consequence is a constant areal velocity, which is Kepler's second law, equal areas in equal times." },
            { "q": "[JEE Main] A constant torque changes a wheel's angular momentum from <i>L</i><sub>0</sub> to 3<i>L</i><sub>0</sub> in 6 s. Find the torque.", "a": "τ = Δ<i>L</i>/Δ<i>t</i> = (3<i>L</i><sub>0</sub> − <i>L</i><sub>0</sub>)/6 = <i>L</i><sub>0</sub>/3, in N m when <i>L</i><sub>0</sub> is in kg m<sup>2</sup>/s." },
            { "q": "[JEE Main] A particle of mass 2 kg sits at <i>r</i> = (3î + ĵ) m moving with velocity <i>v</i> = (2î − ĵ) m/s. Find its angular momentum about the origin.", "a": "First <i>r</i> × <i>v</i>: the k̂ component is (3)(−1) − (1)(2) = −5 m<sup>2</sup>/s. Then apply the mass: <i>L</i> = <i>m</i>(<i>r</i> × <i>v</i>) = 2(−5k̂) = −10k̂ kg m<sup>2</sup>/s. Stopping at −5 is the standard slip: that is the cross product alone, with the 2 kg never used." },
            { "q": "[JEE Advanced] A solid sphere of mass <i>m</i> and radius <i>R</i> rests on rough ground. A horizontal force <i>F</i> = <i>bt</i> acts at its topmost point. Find its angular momentum about the bottom contact point as a function of time. Does the answer depend on the ground being rough?", "a": "About the contact point, friction has zero moment arm and both the weight and the normal act on the vertical line through it, so only <i>F</i> gives a torque, at height 2<i>R</i>: τ = 2<i>bRt</i>. Then <i>L</i> = ∫τ <i>dt</i> = <i>bRt</i><sup>2</sup>, independent of the surface." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Not naming the reference point.</b> Torque and angular momentum are meaningless without <i>about which point</i>. The same force gives different torques about different points, so anchor the point in line one and never switch mid-solution.",
            "<b>Assuming energy is conserved because angular momentum is.</b> In skater spins, coupling wheels and inelastic rotational collisions, <i>L</i> survives and kinetic energy does not. Reach for energy conservation only when nothing sticks, scrapes or embeds.",
            "<b>Using the whole force instead of its perpendicular part.</b> Only <i>F</i> sin θ, or equivalently the moment arm <i>r</i><sub>⊥</sub>, turns the body. The radial component is dead weight as far as rotation is concerned.",
            "<b>Writing a torque in joules.</b> Torque and energy share the dimensions M L<sup>2</sup> T<sup>−2</sup> exactly, so only the unit convention separates them: torque is a vector in N m, energy is a scalar in J. Examiners do deduct for this.",
            "<b>Forgetting the minus sign on the ĵ term of the determinant,</b> or swapping the two rows. Both flip a torque from anticlockwise to clockwise, which in a sign-sensitive problem is a wrong answer that looks right.",
            "<b>Assuming a pivot always feels the blow.</b> There is exactly one impact point on a pivoted rod, two-thirds of its length from the pivot, at which the hinge feels no impulse at all: strike a uniform rod there and the pivot stays quiet. That point is why a bat has a sweet spot and why a mis-hit stings your hands."
          ]
        },
        {
          "t": "protip",
          "html": "in any collision-and-rotation problem, bullet into rod, person jumping onto a turntable, clay landing on a spinning disc, take angular momentum about the pivot or hinge. the unknown impulsive reaction there has zero moment arm, so it deletes itself and a messy two-unknown problem becomes one line. and after any cross product you compute, dot the answer with one of the original vectors: if it is not zero you have made an arithmetic slip, and five seconds has just saved you a whole question. for two vectors already in the plane, skip the determinant entirely and write only the k̂ term, since its sign is also the sense of rotation."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "τ = <i>r</i> × <i>F</i>, |τ| = <i>rF</i> sin θ = <i>r</i><sub>⊥</sub><i>F</i>", "note": "only the perpendicular part turns anything; N m, never J" },
            { "f": "<i>L</i> = <i>r</i> × <i>p</i> = <i>I</i>ω, in kg m<sup>2</sup>/s = J s", "note": "dimensions M L<sup>2</sup> T<sup>−1</sup>, the same as Planck's constant" },
            { "f": "τ<sub>ext</sub> = <i>dL</i>/<i>dt</i>", "note": "the rotational <i>F</i> = <i>dp</i>/<i>dt</i>, and everything here follows from it" },
            { "f": "τ<sub>ext</sub> = 0 ⇒ <i>I</i><sub>1</sub>ω<sub>1</sub> = <i>I</i><sub>2</sub>ω<sub>2</sub> · <i>J</i> = ∫τ<i>dt</i> = Δ<i>L</i>", "note": "skater, planets, coupling wheels; energy is not part of the deal" },
            { "f": "|<i>A</i> × <i>B</i>| = <i>AB</i> sin θ, and î × ĵ = k̂ going forward", "note": "parallel gives zero, perpendicular gives the maximum" }
          ],
          "aids": [
            "\"about which point? decide first, never switch\"",
            "\"L lives, energy leaks\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Equilibrium of a Rigid Body",
      "chip": "03 EQUILIBRIUM",
      "kalam": "pivot on the unknown and watch it vanish",
      "blocks": [
        {
          "t": "p",
          "html": "The last two topics were about making things move and spin. This one asks the opposite question: when does a rigid body stay perfectly still, neither sliding away nor toppling over? A point particle had only one worry, that the forces on it cancel. A rigid body has size, so it can do something a particle never could: it can <b>rotate even when the forces cancel</b>. Push the top of a cupboard forward while a friend pushes the bottom backward with an equal force. The net force is zero, so the cupboard will not slide. It will still happily topple. That is why a rigid body needs <b>two independent conditions</b>: translational equilibrium, net force zero, so the centre of mass does not accelerate; and rotational equilibrium, net torque zero, so it does not start turning. Forces balanced and torques unbalanced means it spins. Torques balanced and forces unbalanced means it slides. Only when both vanish is the body genuinely content to stay put."
        },
        {
          "t": "think",
          "html": "a park seesaw teaches the whole topic in one picture. a heavy uncle sitting close to the pivot balances a small child sitting far out at the end. balance was never about equal weights, it is about equal moments: weight times distance from the pivot. the child's small weight times a big distance equals the uncle's big weight times a small distance, and the plank stays level. that is the principle of moments, and every crowbar, pair of scissors, bottle opener, nimbu squeezer and human forearm runs on it."
        },
        {
          "t": "p",
          "html": "A <b>lever</b> is that principle turned into a machine. Give the effort a long arm and the load a short one, and a small push lifts a large weight; the factor by which it multiplies your force is the <b>mechanical advantage</b>, a pure number with no units. Closely tied to all of this is the <b>centre of gravity</b>, the single point at which the body's entire weight can be taken to act. Support a body exactly under its centre of gravity and it balances; support it anywhere else and gravity produces a toppling torque. For any ordinary object, where <i>g</i> is the same at the top and the bottom, the centre of gravity sits exactly at the centre of mass, which is why Topic 01's formulas are still the ones you use to locate it."
        },
        {
          "t": "p",
          "html": "One special arrangement of forces deserves its own name. A <b>couple</b> is two equal, opposite, parallel forces whose lines of action do not coincide: your two hands on a steering wheel, your fingers twisting a bottle cap, a screwdriver, a tap. Their vector sum is exactly zero, so a couple produces no translation at all, yet its torque is not zero, because the two forces turn the body the same way about any point you choose. Its moment is simply τ = <i>Fd</i>, where <i>d</i> is the perpendicular distance between the two lines of action, and remarkably that answer does not depend on which point you take moments about. A couple is pure rotation with no push."
        },
        {
          "t": "defgrid",
          "title": "The equilibrium toolkit",
          "rows": [
            { "k": "Translational equilibrium", "v": "Σ<i>F</i><sub>ext</sub> = 0. In a plane this is two scalar equations, Σ<i>F<sub>x</sub></i> = 0 and Σ<i>F<sub>y</sub></i> = 0, both in N" },
            { "k": "Rotational equilibrium", "v": "Στ<sub>ext</sub> = 0, in N m. In a plane this is one more scalar equation, so a planar problem gives you three in all" },
            { "k": "Principle of moments", "v": "anticlockwise moments = clockwise moments, so <i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub> about the pivot" },
            { "k": "Mechanical advantage", "v": "M.A. = load ÷ effort = effort arm ÷ load arm. Dimensionless, so it never carries a unit" },
            { "k": "Couple", "v": "two equal, opposite, non-collinear forces. Net force 0, torque <i>Fd</i>, and the same value about every point" },
            { "k": "The freedom worth using", "v": "for a body in equilibrium the net torque is zero about EVERY point, not just the real pivot. So choose the point that kills your worst unknown" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO CONDITIONS, AND WHY ONE IS NOT ENOUGH",
          "tag": "they are not even the same dimensions",
          "main": "Σ<i>F</i><sub>ext</sub> = 0 and Στ<sub>ext</sub> = 0<br><i>F</i><sub>1</sub> <i>d</i><sub>1</sub> = <i>F</i><sub>2</sub> <i>d</i><sub>2</sub>",
          "legend": [
            "<i>F</i> is a force, in N, with dimensions M L T<sup>−2</sup>; the first condition stops the body sliding",
            "τ is a torque, in N m, with dimensions M L<sup>2</sup> T<sup>−2</sup>; the second condition stops it turning",
            "<i>d</i> is a moment arm, the perpendicular distance from the pivot to the line of action of that force, in m",
            "the two conditions have DIFFERENT dimensions, which is the cleanest possible argument that neither can substitute for the other"
          ],
          "note": "Sign convention, as fixed in Topic 01: anticlockwise moments count positive, clockwise negative. A negative reaction in your answer is not an error, it means you drew that arrow the wrong way round."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.4 · THE LEVER, AND THE TWO MOMENTS",
          "chips": ["balance about the fulcrum"],
          "captions": [
            "A light rod resting on a fulcrum at O. The load F1 acts down at distance d1 on one side and the effort F2 acts down at distance d2 on the other, so the two turn the rod in opposite senses about O. Balance is F1 d1 = F2 d2, which rearranges to F1/F2 = d2/d1: a long effort arm lets a small effort lift a large load. That ratio is the mechanical advantage of every crowbar."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "segments": [{ "from": [1.2, 3], "to": [8.8, 3] }],
              "polys": [{ "pts": [[4.4, 1.9], [5.6, 1.9], [5, 2.95]], "close": true, "fill": "hatch" }],
              "marks": [{ "x": 5, "y": 3, "glyph": "open", "label": "O" }],
              "arrows": [
                { "from": [2.6, 3], "to": [2.6, 1.2], "tone": "amber", "label": "F1" },
                { "from": [7.6, 3], "to": [7.6, 1.2], "tone": "amber", "label": "F2" },
                { "from": [2.6, 3.6], "to": [5, 3.6], "head": "both", "tone": "soft", "label": "d1" },
                { "from": [5, 3.6], "to": [7.6, 3.6], "head": "both", "tone": "soft", "label": "d2" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PRINCIPLE OF MOMENTS, TAP A LINE",
          "steps": [
            {
              "eq": "Στ about O = 0",
              "why": "Take the fulcrum O as the reference point. The rod is not turning, so rotational equilibrium says the net torque about O must vanish. Note that the fulcrum's own upward reaction acts AT O, so it has zero moment arm and never appears below: that is the choice of point doing work for us."
            },
            {
              "eq": "+<i>F</i><sub>1</sub><i>d</i><sub>1</sub> − <i>F</i><sub>2</sub><i>d</i><sub>2</sub> = 0",
              "why": "Write each torque with its own sense. The load on one side turns the rod anticlockwise, which our convention calls positive; the effort on the other side turns it clockwise, so it enters negative. Each torque is force times its own perpendicular distance from O."
            },
            {
              "eq": "<i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub>",
              "why": "Rearranged, this is the principle of moments: at balance the total anticlockwise moment equals the total clockwise moment. Note that <i>g</i> cancels off both sides whenever the forces are weights, so you can work directly in masses and never multiply by 9.8 at all."
            },
            {
              "eq": "<i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = <i>d</i><sub>2</sub>/<i>d</i><sub>1</sub> = M.A.",
              "why": "The same line read as a ratio. A long effort arm <i>d</i><sub>2</sub> lets a small effort <i>F</i><sub>2</sub> lift a large load <i>F</i><sub>1</sub>, and the factor is the ratio of the arms. That is the entire secret of the crowbar, and it is why the mechanical advantage has no units."
            }
          ]
        },
        {
          "t": "def",
          "term": "Stable, unstable and neutral equilibrium",
          "html": "All three are equilibrium: in every one of them the forces and the torques already balance. They differ in what a small nudge does next, and the test is what happens to the centre of gravity. In <b>stable</b> equilibrium a small displacement RAISES the centre of gravity, so gravity pulls the body back: a ball resting in a valley, a cone standing on its base, a ship with heavy ballast low down. In <b>unstable</b> equilibrium the displacement LOWERS the centre of gravity, so the body keeps going: a ball balanced on a hilltop, a cone standing on its apex. In <b>neutral</b> equilibrium the centre of gravity stays at the same height, so the body simply sits wherever you left it: a ball on a flat floor, a cone lying on its side. One object, three answers, decided entirely by which face it rests on."
        },
        {
          "t": "proc",
          "title": "Solving any rigid-body equilibrium problem",
          "steps": [
            "<b>Draw a clean free-body diagram and mark every force at its own point of application.</b> Weight acts at the centre of gravity, normals act at contacts, tension acts along the string, friction acts at the surface. For equilibrium, where a force acts matters as much as how big it is.",
            "<b>Write the force balance, one equation per direction.</b> Σ<i>F<sub>x</sub></i> = 0 and Σ<i>F<sub>y</sub></i> = 0. Choose the axes to line up with the surfaces in the problem, not with the page.",
            "<b>Take torques about the point where an unknown you do not want acts.</b> That force then has zero moment arm and disappears from the equation, often solving for a second unknown in one line. This is the single biggest time saver in the topic, and it is legal because for a body in equilibrium the net torque is zero about every point.",
            "<b>Include the weight of the beam, rod or plank itself,</b> acting at its centre of gravity. It is the omission that costs the most marks, and it matters most exactly when the pivot is off centre.",
            "<b>Solve, then sanity-check the split.</b> The support nearer the centre of gravity must carry the larger share of the load, the reactions must add up to the total weight, and a negative answer means you drew that arrow backwards rather than that the physics failed."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.5 · A BEAM ON TWO SUPPORTS",
          "chips": ["two unknowns, two equations"],
          "captions": [
            "A uniform beam of length 4 m and weight 200 N rests on a support at its left end A and a second at B, 3 m along and so 1 m from the right end. Its weight acts at the centre, 2 m from A. Taking torques about A deletes the reaction at A from the equation and hands you the reaction at B immediately; the vertical force balance then gives the other."
          ],
          "frames": [
            {
              "x": [-0.6, 4.6], "y": [-1.2, 3], "axes": "none",
              "segments": [{ "from": [0, 0.6], "to": [4, 0.6] }],
              "polys": [
                { "pts": [[-0.2, 0.1], [0.2, 0.1], [0, 0.55]], "close": true, "fill": "hatch" },
                { "pts": [[2.8, 0.1], [3.2, 0.1], [3, 0.55]], "close": true, "fill": "hatch" }
              ],
              "points": [
                { "x": 0, "y": 0.6, "label": "A", "at": "nw" },
                { "x": 3, "y": 0.6, "label": "B", "at": "nw" }
              ],
              "arrows": [
                { "from": [0, 0.6], "to": [0, 1.9], "tone": "amber", "label": "NA" },
                { "from": [3, 0.6], "to": [3, 1.9], "tone": "amber", "label": "NB" },
                { "from": [2, 0.6], "to": [2, -0.7], "tone": "ink", "label": "200 N", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.6 · THE LADDER AGAINST A SMOOTH WALL",
          "chips": ["four forces, three equations"],
          "captions": [
            "The wall is smooth, so it can only push horizontally: one normal Nw at the top. The floor is rough, so it supplies both a vertical normal Nf and a horizontal friction f at the foot. The weight W acts at the ladder's midpoint. Take torques about the foot and both floor forces vanish at once, leaving one equation in Nw."
          ],
          "frames": [
            {
              "x": [-0.8, 5], "y": [-0.6, 5.2], "axes": "none",
              "bodies": [{ "kind": "ground", "at": [2.1, -0.15], "w": 4.6, "h": 0.3 }],
              "segments": [
                { "from": [0, 0], "to": [0, 4.6] },
                { "from": [0, 4.0], "to": [3.2, 0] }
              ],
              "arrows": [
                { "from": [0, 4.0], "to": [0.9, 4.0], "tone": "amber", "label": "Nw" },
                { "from": [1.6, 2.0], "to": [1.6, 0.8], "tone": "ink", "label": "W" },
                { "from": [3.2, 0], "to": [3.2, 1.2], "tone": "amber", "label": "Nf" },
                { "from": [3.2, 0], "to": [2.3, 0], "tone": "amber", "label": "f", "at": "below" }
              ],
              "arcs": [{ "at": [3.2, 0], "r": 0.8, "from": 128.7, "to": 180, "label": "θ" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A uniform metre stick of mass 0.40 kg is pivoted at its centre. A 0.60 kg mass hangs 20 cm from the pivot on one side. At what distance from the pivot must a 0.30 kg mass hang on the other side to balance it?",
          "steps": [
            "The stick is uniform and pivoted at its own centre, so its weight acts AT the pivot and produces no torque. Its 0.40 kg never enters the calculation, which is the point of telling you it.",
            "Principle of moments, with <i>g</i> cancelling from both sides: <i>m</i><sub>1</sub><i>d</i><sub>1</sub> = <i>m</i><sub>2</sub><i>d</i><sub>2</sub>.",
            "(0.60)(0.20) = (0.30)<i>d</i><sub>2</sub>, so <i>d</i><sub>2</sub> = 0.12/0.30 = 0.40 m.",
            "Sanity check: the lighter mass has to sit farther out, and 40 cm is indeed farther than 20 cm."
          ],
          "ans": "0.40 m, that is 40 cm from the pivot"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A seesaw is balanced about its central pivot. A 30 kg child sits 1.5 m from the pivot. Where must a 45 kg child sit to balance it?",
          "steps": [
            "The trap is to start converting masses into weights with <i>g</i> = 9.8 m/s<sup>2</sup>. Do not: <i>g</i> multiplies both sides of the moment equation and cancels exactly, so work in mass times distance and save thirty seconds.",
            "(30)(1.5) = (45)<i>d</i><sub>2</sub>, so <i>d</i><sub>2</sub> = 45/45 = 1.0 m.",
            "Sanity check: the heavier child sits closer to the pivot, exactly as every real seesaw behaves."
          ],
          "ans": "1.0 m from the pivot"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A uniform beam of length 4.0 m and weight 200 N rests horizontally on two supports, one at the left end A and one 1.0 m from the right end, at B. Find the reaction at each support.",
          "steps": [
            "Both conditions are needed here. Vertical force balance: <i>N<sub>A</sub></i> + <i>N<sub>B</sub></i> = 200 N.",
            "Torque balance about A, chosen so that <i>N<sub>A</sub></i> drops out with zero moment arm. The beam is uniform, so its weight acts at the centre, <i>x</i> = 2.0 m; support B sits at <i>x</i> = 3.0 m.",
            "<i>N<sub>B</sub></i>(3.0) − (200)(2.0) = 0, so <i>N<sub>B</sub></i> = 400/3 ≈ 133 N.",
            "Back-substitute: <i>N<sub>A</sub></i> = 200 − 133.3 ≈ 67 N.",
            "Check both ways: 66.7 + 133.3 = 200 N balances the weight, and B is nearer the centre of gravity so it should carry the larger share, which it does."
          ],
          "ans": "<i>N<sub>A</sub></i> ≈ 67 N · <i>N<sub>B</sub></i> ≈ 133 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A uniform ladder of weight <i>W</i> and length <i>L</i> leans against a smooth vertical wall, making angle θ with the rough horizontal floor. Find the minimum coefficient of friction at the floor that prevents slipping.",
          "steps": [
            "Identify the forces first. A smooth wall can push only perpendicular to itself, so the wall supplies a horizontal normal <i>N<sub>w</sub></i> at the top and nothing else. The rough floor supplies a vertical normal <i>N<sub>f</sub></i> and a horizontal friction <i>f</i> at the foot. The weight <i>W</i> acts at the midpoint.",
            "Force balance: horizontally <i>f</i> = <i>N<sub>w</sub></i>; vertically <i>N<sub>f</sub></i> = <i>W</i>.",
            "Torque balance about the FOOT, which deletes both <i>N<sub>f</sub></i> and <i>f</i> in one stroke. The weight acts at <i>L</i>/2 along the ladder, so its horizontal moment arm is (<i>L</i>/2)cos θ; the wall normal acts at the top, so its vertical moment arm is <i>L</i> sin θ.",
            "<i>N<sub>w</sub></i> <i>L</i> sin θ = <i>W</i>(<i>L</i>/2)cos θ, so <i>N<sub>w</sub></i> = (<i>W</i>/2) cot θ, and <i>L</i> cancels: the answer cannot depend on how long the ladder is.",
            "No slipping requires <i>f</i> ≤ μ<i>N<sub>f</sub></i>, so μ<sub>min</sub> = <i>f</i>/<i>N<sub>f</sub></i> = <i>N<sub>w</sub></i>/<i>W</i> = ½ cot θ.",
            "Insight: a steeper ladder has a larger θ and a smaller cot θ, so it needs less friction. That is exactly why you stand a ladder as upright as you safely can."
          ],
          "ans": "μ<sub>min</sub> = ½ cot θ, independent of the ladder's length and weight"
        },
        {
          "t": "mcq",
          "q": "A rigid body is in complete mechanical equilibrium. This requires that:",
          "opts": [
            { "label": "the net force is zero", "nudge": "On its own this allows a couple, which has zero net force and a perfectly good torque. The body would not slide, but it would spin." },
            { "label": "the net torque is zero", "nudge": "On its own this allows the body to drift: a single force through the centre of mass has zero torque about it and still accelerates the body." },
            { "label": "both the net force and the net torque are zero", "nudge": null },
            { "label": "the body is at rest", "nudge": "This confuses equilibrium with rest. A body sliding at constant velocity without turning is in complete equilibrium too, and a body momentarily at rest at the top of a swing is not." }
          ],
          "correct": 2,
          "solution": "Complete equilibrium needs Σ<i>F</i> = 0 to stop translation and Στ = 0 to stop rotation. They have different dimensions, M L T<sup>−2</sup> against M L<sup>2</sup> T<sup>−2</sup>, so neither can imply the other."
        },
        {
          "t": "mcq",
          "q": "A couple acting on a free rigid body produces:",
          "opts": [
            { "label": "only translation", "nudge": "This assumes there is a net force. There is not: the two forces of a couple are equal and opposite, so their vector sum is exactly zero." },
            { "label": "only rotation", "nudge": null },
            { "label": "both translation and rotation", "nudge": "Same error as the first option, half hedged. The forces cancel, so there is nothing left to accelerate the centre of mass." },
            { "label": "neither", "nudge": "This forgets the turning effect, which is the defining feature of a couple: the two forces have different lines of action, so their torques add instead of cancelling." }
          ],
          "correct": 1,
          "solution": "Equal and opposite forces with different lines of action sum to zero force but to a non-zero torque <i>Fd</i>, the same about every point. Pure rotation with no push."
        },
        {
          "t": "mcq",
          "q": "A cone resting on its flat circular base is in:",
          "opts": [
            { "label": "unstable equilibrium", "nudge": "That is the same cone balanced on its APEX, where the smallest tilt lowers the centre of gravity and it falls over." },
            { "label": "neutral equilibrium", "nudge": "That is the same cone lying on its SIDE, where rolling it a little leaves the centre of gravity at exactly the same height." },
            { "label": "stable equilibrium", "nudge": null },
            { "label": "no equilibrium at all", "nudge": "It is plainly sitting still with its forces and torques balanced, which is the definition of equilibrium. The question is only what a nudge would do next." }
          ],
          "correct": 2,
          "solution": "Tilt the cone on its base and it pivots about a rim point, which RAISES its centre of gravity; released, gravity brings it back down to upright. A rising centre of gravity on disturbance is the signature of stability."
        },
        {
          "t": "mcq",
          "q": "A metre stick of mass 0.10 kg is pivoted at the 40 cm mark, and a 0.20 kg mass hangs at the 10 cm mark. What mass at the 90 cm mark balances it?",
          "opts": [
            { "label": "0.060 kg", "nudge": "This balances only the stick's own weight against the hanging mass, ignoring the 0.20 kg entirely. Every force with a non-zero moment arm has to appear in the equation." },
            { "label": "0.10 kg", "nudge": null },
            { "label": "0.12 kg", "nudge": "This is the answer you get by treating the stick as weightless. The pivot is off centre, so the stick's own weight at the 50 cm mark has a real 0.10 m moment arm and cannot be dropped." },
            { "label": "0.20 kg", "nudge": "This simply copies the hanging mass, as though equal masses balance. They balance only at equal distances, and here the arms are 0.30 m against 0.50 m." }
          ],
          "correct": 1,
          "solution": "Take moments about the 40 cm pivot. Anticlockwise: (0.20)(0.30) = 0.060. Clockwise: the stick's weight at 50 cm over an arm of 0.10 m gives (0.10)(0.10) = 0.010, plus <i>m</i> at 90 cm over an arm of 0.50 m. So 0.060 = 0.010 + 0.50<i>m</i>, giving <i>m</i> = 0.050/0.50 = 0.10 kg. Drop the stick's weight and you get 0.12 kg instead, which is the trap this question exists to set."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A uniform rod of length 1.0 m and weight 20 N is supported horizontally at its two ends. What force does each support exert?", "a": "By symmetry the two reactions are equal, and together they carry the whole weight: 10 N each. Formally, torques about one end give <i>N</i>(1.0) = 20(0.5)." },
            { "q": "[NEET] Two children of masses 20 kg and 25 kg sit on a seesaw. The lighter one is 2.0 m from the pivot. How far from the pivot is the heavier one?", "a": "(20)(2.0) = (25)<i>d</i>, so <i>d</i> = 40/25 = 1.6 m. Heavier means closer, as always." },
            { "q": "[JEE Main] A 50 N weight hangs from the free end of a uniform horizontal rod of weight 30 N and length 2.0 m, hinged to a wall. Find the total torque about the hinge that must be balanced.", "a": "The hanging weight acts at 2.0 m and the rod's own weight at its centre, 1.0 m: τ = 50(2.0) + 30(1.0) = 130 N m." },
            { "q": "[JEE Main] A crowbar 1.2 m long is used as a lever with the fulcrum 0.20 m from the load end. Find its mechanical advantage.", "a": "Load arm 0.20 m, effort arm 1.2 − 0.20 = 1.0 m. M.A. = effort arm ÷ load arm = 1.0/0.20 = 5, a pure number with no unit." },
            { "q": "[JEE Advanced] A non-uniform rod of length <i>L</i> rests horizontally on supports at its two ends. The reactions at the left and right supports are in the ratio 2 : 3. How far is the rod's centre of gravity from the left end?", "a": "Take torques about the left support: <i>N</i><sub>right</sub><i>L</i> = <i>Wx</i>, and <i>W</i> = <i>N</i><sub>left</sub> + <i>N</i><sub>right</sub>, so <i>x</i> = (3/5)<i>L</i> = 0.6<i>L</i>. The centre of gravity lies nearer the support carrying the larger load." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Checking only one of the two conditions.</b> Balancing forces and forgetting torques, or the reverse, is the number-one error of the topic. A rigid body needs Σ<i>F</i> = 0 AND Στ = 0, and the two are independent.",
            "<b>Ignoring the weight of the rod, beam or plank itself.</b> It acts at the body's own centre of gravity and must enter the torque equation, and it matters most exactly when the pivot is off centre, which is when examiners ask.",
            "<b>Picking a poor pivot.</b> You may take torques about any point at all. Choose one where an unwanted unknown acts and it vanishes; refuse the freedom and a one-line problem becomes a messy simultaneous system.",
            "<b>Confusing the centre of mass with the point of support.</b> A body balances only when supported directly under its centre of gravity. Anywhere else, gravity has a moment arm and produces a toppling torque.",
            "<b>Treating a negative reaction as an error.</b> It is not: it means the support pulls rather than pushes, or that you drew the arrow the wrong way. Read the sign, do not delete it."
          ]
        },
        {
          "t": "protip",
          "html": "for any find-the-reaction problem, take torques about the point where the unknown you care least about acts. it disappears, and the one you actually want falls out in a single line. keep a fast sanity check running too: the support nearer the centre of gravity always carries the larger share of the load. and one pattern worth knowing beyond the syllabus, because jee main returns to it: to make a roller of radius R mount a step of height h, the floor normal has already vanished and the body pivots about the step corner, so take moments THERE. the weight's arm is √(2Rh − h<sup>2</sup>) and a horizontal pull at the top has an arm of 2R − h, which is the whole solution."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Σ<i>F</i> = 0 stops sliding · Στ = 0 stops toppling", "note": "both required, and they are not the same dimensions" },
            { "f": "<i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub> · M.A. = effort arm ÷ load arm", "note": "<i>g</i> cancels, so work in masses and distances" },
            { "f": "couple: net force 0, torque <i>Fd</i>", "note": "same value about every point, so it is pure rotation" },
            { "f": "torque is zero about EVERY point in equilibrium", "note": "so pivot on the unknown you want to delete" },
            { "f": "stable CG rises · unstable CG falls · neutral CG level", "note": "one cone, three answers, decided by which face it rests on" }
          ],
          "aids": [
            "\"slide and spin, kill them both\"",
            "\"pivot on the unknown and it vanishes\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Moment of Inertia",
      "chip": "04 MOMENT OF INERTIA",
      "kalam": "there is no such thing as the moment of inertia",
      "blocks": [
        {
          "t": "p",
          "html": "You already have a deep feel for <b>mass</b>: it is how hard it is to get something moving in a straight line. Push a loaded thela and an empty one with the same force and the loaded one accelerates less. <b>Moment of inertia</b> is that same idea for spinning: how hard it is to get something turning, its resistance to a change in angular motion. But it is richer than mass in one crucial way, and this is the place the linear-to-angular dictionary from Topic 01 stops being a simple translation. Moment of inertia depends not only on how much mass a body has, but on <b>where that mass sits relative to the spin axis</b>. Mass far out is expensive to spin; mass near the axis is cheap."
        },
        {
          "t": "think",
          "html": "you feel this every time you pick up a cricket bat. hold it by the handle and waggle it: hard work, because most of the wood is far from your wrists. now choke up and grip near the middle, and suddenly it whips around easily. same bat, same mass, but you moved the axis closer to the mass and slashed the moment of inertia. a jhaadu, a tabla player's wrist flick, a fan blade and the merry-go-round at the mela are all the same story."
        },
        {
          "t": "p",
          "html": "The reason mass distribution matters so much is that the distance is <b>squared</b>. Each particle contributes <i>mr</i><sup>2</sup>, so doubling a particle's distance from the axis quadruples what it costs you. That single fact explains nearly every result in this topic. Take two hoops of equal mass, one with all its metal bunched at the rim and one with the metal spread evenly across the whole area. Spin both about their centres and the ring fights you twice as hard as the disc, exactly twice, because every scrap of the ring's mass sits at the full radius <i>R</i> while the disc has plenty of mass close in. Engineers exploit this deliberately: a flywheel, the heavy spinning disc in a potter's wheel or an old sewing machine, carries most of its mass at the rim precisely to make <i>I</i> large, so that the wheel resists changes in spin and smooths jerky pedal pushes into steady rotation. Run the same principle backwards and you get the diver who tucks into a tight ball to spin fast, then opens out to slow down for the entry."
        },
        {
          "t": "def",
          "term": "There is no such thing as the moment of inertia",
          "html": "A body has ONE mass and MANY moments of inertia, one for every axis you might choose. A rod about its centre and the same rod about its end differ by a factor of four. So the question <i>what is the moment of inertia of a disc</i> has no answer until you say about which axis, and quoting a number without naming an axis loses the mark even when the number is one of the right ones. Two more cautions come with it. The <i>r</i> in <i>mr</i><sup>2</sup> is the <b>perpendicular distance from the axis</b>, not the distance from a point and not the distance from the centre of mass: for a mass at the corner of a square spinning about its centre, <i>r</i> is half the DIAGONAL, not half the side. And <i>I</i> depends only on mass, its distribution and the axis. It never depends on how fast the body is spinning: a flywheel has the same moment of inertia at rest as at ten thousand revolutions a minute."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MOMENT OF INERTIA AND THE RADIUS OF GYRATION",
          "main": "<i>I</i> = Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup> = ∫ <i>r</i><sup>2</sup> <i>dm</i><br><i>K</i> = √(<i>I</i>/<i>M</i>), so <i>I</i> = <i>M</i> <i>K</i><sup>2</sup>",
          "legend": [
            "<i>I</i> is the moment of inertia, in kg m<sup>2</sup>, with dimensions M L<sup>2</sup> T<sup>0</sup>",
            "<i>m<sub>i</sub></i> is the mass of the <i>i</i>-th particle in kg, and <i>r</i> is its PERPENDICULAR distance from the axis, in m",
            "<i>M</i> is the total mass in kg, and <i>K</i> is the radius of gyration in m: the single distance at which the whole mass could be concentrated to give the same <i>I</i>",
            "because <i>K</i> is a length, it can be compared directly with the body's own radius, and that comparison tells you at a glance how far out the mass really sits"
          ],
          "note": "Moments of inertia about the SAME axis simply add. That is why a composite body is almost never an integral: it is a sum of standard results, with any hole entered as a negative term."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO AXIS THEOREMS",
          "tag": "one hard integral becomes one standard value plus one theorem",
          "main": "parallel axes: <i>I</i> = <i>I</i><sub>cm</sub> + <i>M</i> <i>d</i><sup>2</sup><br>perpendicular axes: <i>I<sub>z</sub></i> = <i>I<sub>x</sub></i> + <i>I<sub>y</sub></i>",
          "legend": [
            "<i>I</i><sub>cm</sub> is the value about a parallel axis through the centre of mass, in kg m<sup>2</sup>, and <i>d</i> is the distance between the two parallel axes, in m",
            "<i>M</i> is the total mass, in kg",
            "the parallel-axis theorem works for ANY body, and since <i>Md</i><sup>2</sup> is never negative, the centre-of-mass axis always gives the smallest moment of inertia of any parallel family",
            "the perpendicular-axis theorem works ONLY for a flat lamina, with <i>x</i> and <i>y</i> two perpendicular axes in the plane of the sheet and <i>z</i> perpendicular to it, all three meeting at one point"
          ],
          "note": "The laminar restriction is not a technicality. The proof needs every mass element to lie in the plane, so the theorem is simply false for a sphere, a cylinder or a cube."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · FIVE AXES, FIVE ANSWERS",
          "chips": ["rod, centre", "rod, end", "ring", "disc", "solid sphere"],
          "captions": [
            "A thin rod turning about a perpendicular axis through its middle. Half the mass lies on each side and none of it is farther than L/2, so this is the cheapest way to spin a rod: I = ML²/12.",
            "The same rod, the same mass, the axis moved to one end. Now all the mass is on one side and some of it is a full L away, so I quadruples to ML²/3. Nothing changed but the axis.",
            "A ring about its central perpendicular axis. Every scrap of mass sits at exactly the full radius R, so no calculus is needed at all: I = MR², the largest value any body of this mass and radius can have about this axis.",
            "A disc about the same axis, drawn as nested rings. The inner rings sit at small r and contribute almost nothing, so the disc comes in at exactly half the ring's value: I = MR²/2.",
            "A solid sphere about a diameter, sliced into stacked discs. Most of its mass is well inside the surface, so it is cheaper still: I = 2MR²/5. The ordering ring, disc, sphere is the ordering of how tightly each hugs its axis."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-2.15, 2.15], "axes": "none",
              "segments": [
                { "from": [-2, 0], "to": [2, 0] },
                { "from": [0, -1.4], "to": [0, 1.4], "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0, "y": 1.75, "text": "I = ML²/12" }]
            },
            {
              "x": [-3, 3], "y": [-2.15, 2.15], "axes": "none",
              "segments": [
                { "from": [-2, 0], "to": [2, 0] },
                { "from": [-2, -1.4], "to": [-2, 1.4], "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0.4, "y": 1.75, "text": "I = ML²/3" }]
            },
            {
              "x": [-3, 3], "y": [-2.15, 2.15], "axes": "none",
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.4 }],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "soft" }],
              "segments": [{ "from": [0, 0], "to": [1.4, 0], "dash": true, "soft": true, "label": "R", "at": "end" }],
              "labels": [{ "x": 0, "y": 1.85, "text": "I = MR²" }]
            },
            {
              "x": [-3, 3], "y": [-2.15, 2.15], "axes": "none",
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.4 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.95, "soft": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.5, "soft": true }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "soft" }],
              "labels": [{ "x": 0, "y": 1.85, "text": "I = MR²/2" }]
            },
            {
              "x": [-3, 3], "y": [-2.15, 2.15], "axes": "none",
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.4 },
                { "c": "ellipse", "cx": 0, "cy": 0, "a": 1.4, "b": 0.45, "soft": true }
              ],
              "segments": [{ "from": [0, -1.8], "to": [0, 1.8], "dash": true, "soft": true }],
              "labels": [{ "x": 1.1, "y": 1.85, "text": "I = 2MR²/5" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.7 · THE ELEMENT THAT BUILDS A ROD",
          "chips": ["one strip at distance x"],
          "captions": [
            "The rod of mass M and length L lies along the x-axis with its centre at the origin, and the dashed line is the rotation axis, perpendicular to the rod through that centre. A strip of width dx at distance x from the axis carries mass dm = (M/L)dx and contributes dI = x² dm. Adding every strip from x = −L/2 to +L/2 is the whole derivation."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-2.2, 2.4], "axes": "none",
              "segments": [
                { "from": [-2.6, 0], "to": [2.6, 0] },
                { "from": [0, -1.6], "to": [0, 1.6], "dash": true, "soft": true }
              ],
              "polys": [{ "pts": [[1.3, -0.16], [1.6, -0.16], [1.6, 0.16], [1.3, 0.16]], "close": true, "fill": "wash", "tone": "amber", "label": "dx" }],
              "arrows": [{ "from": [0, -1.0], "to": [1.45, -1.0], "head": "both", "tone": "soft", "label": "x" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A UNIFORM ROD, AND THEN ITS END, TAP A LINE",
          "steps": [
            {
              "eq": "<i>dm</i> = λ <i>dx</i> = (<i>M</i>/<i>L</i>) <i>dx</i>",
              "why": "Set the rod along the x-axis with its centre at the origin and the axis of rotation perpendicular through that origin. The rod is uniform, so its linear mass density is λ = <i>M</i>/<i>L</i> and a strip of width <i>dx</i> carries that much mass."
            },
            {
              "eq": "<i>dI</i> = <i>x</i><sup>2</sup> <i>dm</i> = (<i>M</i>/<i>L</i>) <i>x</i><sup>2</sup> <i>dx</i>",
              "why": "Every point of that strip sits at the same perpendicular distance <i>x</i> from the axis, which is exactly why the strip is the right element to choose. Its contribution is mass times distance squared."
            },
            {
              "eq": "<i>I</i> = (<i>M</i>/<i>L</i>) ∫ <i>x</i><sup>2</sup> <i>dx</i>, from −<i>L</i>/2 to +<i>L</i>/2",
              "why": "Add the strips over the whole rod. The limits run either side of the centre because the axis is at the centre; getting them wrong here is what produces the end value by accident."
            },
            {
              "eq": "<i>I</i><sub>centre</sub> = (<i>M</i>/<i>L</i>)[<i>x</i><sup>3</sup>/3] = (<i>M</i>/<i>L</i>)(<i>L</i><sup>3</sup>/24 + <i>L</i><sup>3</sup>/24) = <i>ML</i><sup>2</sup>/12",
              "why": "Each half contributes <i>L</i><sup>3</sup>/24 and they add rather than cancel, because the distance is squared and cannot be negative."
            },
            {
              "eq": "<i>I</i><sub>end</sub> = <i>ML</i><sup>2</sup>/12 + <i>M</i>(<i>L</i>/2)<sup>2</sup> = <i>ML</i><sup>2</sup>/12 + <i>ML</i><sup>2</sup>/4 = <i>ML</i><sup>2</sup>/3",
              "why": "Now use the parallel-axis theorem instead of integrating again. The end axis is parallel to the central one and a distance <i>d</i> = <i>L</i>/2 away, so add <i>Md</i><sup>2</sup>. The answer matches the standard table, which is both a consistency check on the theorem and the fastest route to any off-centre axis."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PERPENDICULAR AXIS THEOREM, AND ITS ONE CONDITION",
          "steps": [
            {
              "eq": "<i>r</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>, for a mass element of a flat lamina",
              "why": "Lay the lamina in the xy-plane. An element at (<i>x</i>, <i>y</i>) sits at distance <i>r</i> from the z-axis, and Pythagoras gives that distance in terms of its two in-plane coordinates. This is the only step that uses flatness, and it is where the whole theorem lives."
            },
            {
              "eq": "<i>I<sub>z</sub></i> = ∫(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) <i>dm</i> = ∫<i>x</i><sup>2</sup> <i>dm</i> + ∫<i>y</i><sup>2</sup> <i>dm</i>",
              "why": "Substitute and split the integral. Nothing physical happens here; it is the linearity of integration."
            },
            {
              "eq": "<i>I<sub>z</sub></i> = <i>I<sub>y</sub></i> + <i>I<sub>x</sub></i>",
              "why": "Recognise each piece. The distance of the element from the x-axis is <i>y</i>, so ∫<i>y</i><sup>2</sup><i>dm</i> is <i>I<sub>x</sub></i>; likewise ∫<i>x</i><sup>2</sup><i>dm</i> is <i>I<sub>y</sub></i>. For a solid body the very first line fails, because elements have a <i>z</i> coordinate as well, which is why the theorem is false for spheres, cylinders and cubes."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.8 · SLICING A SPHERE INTO DISCS",
          "chips": ["one slice at height y"],
          "captions": [
            "The sphere spins about the vertical diameter. Slice it into thin discs perpendicular to that axis. The slice at height y has thickness dy and radius r = √(R² − y²), and because it is a disc about its own central axis its contribution is dI = ½(dm)r². Chaining one standard result into the next, point mass to ring to disc to sphere, is the master technique of this whole topic."
          ],
          "frames": [
            {
              "x": [-3.35, 3.35], "y": [-2.2, 2.6], "axes": "none",
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.8 }],
              "segments": [
                { "from": [0, -2.0], "to": [0, 2.0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [1.559, 0.9], "dash": true, "soft": true, "label": "R", "at": "below" },
                { "from": [0, 0.9], "to": [1.559, 0.9], "label": "r" }
              ],
              "polys": [{ "pts": [[-1.559, 0.78], [1.559, 0.78], [1.559, 1.02], [-1.559, 1.02]], "close": true, "fill": "wash", "tone": "amber" }],
              "labels": [{ "x": 2.05, "y": 0.9, "text": "dy" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Attacking any moment of inertia problem",
          "steps": [
            "<b>Name the axis before anything else,</b> and write down the perpendicular distance of each piece FROM THAT AXIS. Half the errors in this topic are a distance measured from the wrong thing.",
            "<b>Look for a standard result first.</b> Ring, disc, rod, solid sphere, shell and cylinder cover almost every problem set, and moments of inertia about a common axis simply add, so a composite body is a sum, not an integral.",
            "<b>Off-centre axis? Reach for the parallel-axis theorem,</b> <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup>, never for an integral. Check the axis you are starting from really does pass through the centre of mass, because the theorem is false otherwise.",
            "<b>Flat plate? The perpendicular-axis theorem turns one hard integral into two easy ones,</b> and by symmetry the two in-plane values are often equal, which halves the work again. That is how a disc's value about a diameter falls out of its value about the central axis in one line.",
            "<b>A hole is a negative mass, exactly as in Topic 01.</b> Subtract the removed piece's own moment of inertia about the SAME axis, using the parallel-axis theorem first if the hole is off centre.",
            "<b>Only integrate when nothing else works,</b> and then chain: a point mass builds a ring, a ring builds a disc, a disc builds a sphere or a cylinder. Choose the element so every point of it is at the same distance from the axis."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Four point masses of 2 kg each sit at the corners of a square of side 1.0 m. Find the moment of inertia of the system about an axis through the centre of the square, perpendicular to its plane.",
          "steps": [
            "The perpendicular distance of each corner from the centre is half the DIAGONAL, not half the side. Half the diagonal is <i>a</i>√2/2, so <i>r</i><sup>2</sup> = <i>a</i><sup>2</sup>/2 = 0.50 m<sup>2</sup>.",
            "All four masses are the same distance out, so <i>I</i> = Σ<i>m<sub>i</sub>r<sub>i</sub></i><sup>2</sup> = 4 × 2 × 0.50.",
            "<i>I</i> = 4.0 kg m<sup>2</sup>.",
            "Check the trap: using half the SIDE instead would give <i>r</i><sup>2</sup> = 0.25 and an answer of 2.0 kg m<sup>2</sup>, exactly half. That factor of two is what the examiner is offering you."
          ],
          "ans": "<i>I</i> = 4.0 kg m<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A ring and a disc have the same mass <i>M</i> and the same radius <i>R</i>. Find the radius of gyration of each about its central perpendicular axis, and say which is larger.",
          "steps": [
            "The trap is to go hunting for the mass or to start an integral. Neither is needed: <i>K</i> = √(<i>I</i>/<i>M</i>), and the mass cancels out of every standard result.",
            "Ring: <i>I</i> = <i>MR</i><sup>2</sup>, so <i>K</i> = √(<i>MR</i><sup>2</sup>/<i>M</i>) = <i>R</i>.",
            "Disc: <i>I</i> = <i>MR</i><sup>2</sup>/2, so <i>K</i> = √(<i>R</i><sup>2</sup>/2) = <i>R</i>/√2 ≈ 0.71<i>R</i>.",
            "The ring has the larger radius of gyration. Sanity check: the ring keeps every gram at the full radius, so its effective distance IS <i>R</i>; the disc spreads mass inward, which must pull the effective distance below <i>R</i>. Physics and formula agree."
          ],
          "ans": "<i>K</i><sub>ring</sub> = <i>R</i> · <i>K</i><sub>disc</sub> = <i>R</i>/√2 ≈ 0.71<i>R</i> · the ring's is larger"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Find the moment of inertia of a uniform disc of mass <i>M</i> and radius <i>R</i> about a tangent lying in the plane of the disc.",
          "steps": [
            "This needs both theorems, in sequence, which is the hallmark of the question type. Start with the value you know: about the central perpendicular axis, <i>I<sub>z</sub></i> = <i>MR</i><sup>2</sup>/2.",
            "Perpendicular-axis theorem to get the diameter value. The disc is flat, so the theorem applies. By symmetry the two in-plane axes give the same answer, <i>I<sub>x</sub></i> = <i>I<sub>y</sub></i> = <i>I<sub>d</sub></i>, so <i>I<sub>z</sub></i> = 2<i>I<sub>d</sub></i> and <i>I<sub>d</sub></i> = <i>MR</i><sup>2</sup>/4.",
            "Parallel-axis theorem to walk out to the tangent. A tangent in the plane is parallel to a diameter and a distance <i>d</i> = <i>R</i> from it.",
            "<i>I</i><sub>tangent</sub> = <i>I<sub>d</sub></i> + <i>MR</i><sup>2</sup> = <i>MR</i><sup>2</sup>/4 + <i>MR</i><sup>2</sup> = 5<i>MR</i><sup>2</sup>/4.",
            "Skip either theorem and you are stuck: the perpendicular one is the only route from the axis you know to a diameter, and the parallel one is the only route from a diameter to the rim."
          ],
          "ans": "<i>I</i><sub>tangent</sub> = 5<i>MR</i><sup>2</sup>/4"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Derive, by integration, the moment of inertia of a uniform solid sphere of mass <i>M</i> and radius <i>R</i> about a diameter.",
          "steps": [
            "Slice the sphere into thin discs stacked along the axis, and use the known disc result <i>dI</i> = ½(<i>dm</i>)<i>r</i><sup>2</sup> for each slice. Chaining a standard result is far faster than starting from <i>r</i><sup>2</sup><i>dm</i> in three dimensions.",
            "Geometry: at height <i>y</i> from the centre, the slice has radius <i>r</i> = √(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>) and thickness <i>dy</i>. With volume density ρ = <i>M</i>/((4/3)π<i>R</i><sup>3</sup>), its mass is <i>dm</i> = ρπ(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>)<i>dy</i>.",
            "So <i>dI</i> = ½ρπ(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>)<sup>2</sup> <i>dy</i>, and integrating from <i>y</i> = −<i>R</i> to +<i>R</i> gives ½ρπ[<i>R</i><sup>4</sup><i>y</i> − 2<i>R</i><sup>2</sup><i>y</i><sup>3</sup>/3 + <i>y</i><sup>5</sup>/5].",
            "Evaluated between the limits this is ½ρπ · 2(<i>R</i><sup>5</sup> − 2<i>R</i><sup>5</sup>/3 + <i>R</i><sup>5</sup>/5) = ½ρπ · 16<i>R</i><sup>5</sup>/15 = 8π<i>R</i><sup>5</sup>ρ/15.",
            "Substitute ρ = 3<i>M</i>/(4π<i>R</i><sup>3</sup>): <i>I</i> = (8π<i>R</i><sup>5</sup>/15)(3<i>M</i>/4π<i>R</i><sup>3</sup>) = 2<i>MR</i><sup>2</sup>/5, confirming the standard result from first principles.",
            "Plausibility check: 2/5 = 0.40 sits below the disc's 0.50 and well below the ring's 1.00, which is right, because a solid sphere hugs its axis more tightly than either."
          ],
          "ans": "<i>I</i> = 2<i>MR</i><sup>2</sup>/5 about any diameter"
        },
        {
          "t": "mcq",
          "q": "The moment of inertia of a rigid body depends on all of the following EXCEPT:",
          "opts": [
            { "label": "the mass of the body", "nudge": "It depends on mass directly: double the mass with the same shape and axis and you double <i>I</i>." },
            { "label": "how the mass is distributed about the axis", "nudge": "This is the distinguishing feature of moment of inertia, the thing that makes it richer than plain mass." },
            { "label": "the position of the axis of rotation", "nudge": "Move the axis and the value changes, by a factor of four between a rod's centre and its end. There is no single moment of inertia for a body." },
            { "label": "the angular velocity of the body", "nudge": null }
          ],
          "correct": 3,
          "solution": "<i>I</i> is a geometric property of the body and the axis: identical at rest, at ten revolutions a second, or at ten thousand. Students who pick one of the other three are thinking of the rotational kinetic energy ½<i>I</i>ω<sup>2</sup>, which does involve ω. <i>I</i> itself does not."
        },
        {
          "t": "mcq",
          "q": "A concentric circular hole is cut from a uniform disc. Compared with the original disc, and about the same central perpendicular axis, the remaining annulus has:",
          "opts": [
            { "label": "larger moment of inertia, smaller radius of gyration", "nudge": "Removing mass cannot increase <i>I</i>: every element taken away had a non-negative contribution. This gets both halves the wrong way round." },
            { "label": "smaller moment of inertia, larger radius of gyration", "nudge": null },
            { "label": "larger moment of inertia and larger radius of gyration", "nudge": "The radius of gyration is right but the moment of inertia is not: taking material out always lowers <i>I</i>." },
            { "label": "smaller moment of inertia and smaller radius of gyration", "nudge": "The gut reaction, less mass so everything falls, and the commonest error here. It forgets that <i>K</i> depends on the RATIO <i>I</i>/<i>M</i>, not on <i>I</i> alone." }
          ],
          "correct": 1,
          "solution": "The material removed sat close to the axis, where <i>r</i><sup>2</sup> is small, so it was cheap: <i>I</i> falls, but only a little. The mass falls proportionally more, so <i>K</i> = √(<i>I</i>/<i>M</i>) rises. What is left hugs the rim more tightly than the original disc did."
        },
        {
          "t": "mcq",
          "q": "The perpendicular axis theorem can be applied to:",
          "opts": [
            { "label": "a solid sphere", "nudge": "Three-dimensional, so its mass elements have a z-coordinate and the theorem's very first line, r² = x² + y², is already false." },
            { "label": "a solid cylinder", "nudge": "Also three-dimensional. A thin disc qualifies, but stack discs into a cylinder and the theorem stops working." },
            { "label": "a thin circular disc", "nudge": null },
            { "label": "a cube", "nudge": "As three-dimensional as a body gets. Being symmetric does not help: the theorem's condition is flatness, not symmetry." }
          ],
          "correct": 2,
          "solution": "The theorem holds only for a planar lamina, where all the mass lies in one plane, and a thin disc is exactly that. This <i>which shape qualifies</i> question is a recurring JEE favourite because the condition is so easy to forget."
        },
        {
          "t": "mcq",
          "q": "Two identical rods, each of mass <i>M</i> and length <i>L</i>, are joined at their centres in the form of a cross. The moment of inertia of the cross about an axis through the centre, perpendicular to its plane, is:",
          "opts": [
            { "label": "<i>ML</i><sup>2</sup>/12", "nudge": "This is one rod only. The second rod is there too, and about this common axis it contributes exactly as much." },
            { "label": "<i>ML</i><sup>2</sup>/6", "nudge": null },
            { "label": "<i>ML</i><sup>2</sup>/3", "nudge": "This uses the about-the-END value for a rod, but the axis here passes through each rod's own centre, not its end." },
            { "label": "2<i>ML</i><sup>2</sup>/3", "nudge": "The same about-the-end mistake, then doubled for the two rods, so it is wrong twice over." }
          ],
          "correct": 1,
          "solution": "Each rod about a perpendicular axis through its own centre is <i>ML</i><sup>2</sup>/12, and moments of inertia about a COMMON axis add directly: <i>ML</i><sup>2</sup>/12 + <i>ML</i><sup>2</sup>/12 = <i>ML</i><sup>2</sup>/6. Note that no theorem was needed, because both rods already have their centres on the axis."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Three particles of mass 1.0 kg each sit at the vertices of an equilateral triangle of side 2.0 m. Find the moment of inertia about an axis through one vertex, perpendicular to the plane of the triangle.", "a": "The particle at the chosen vertex has <i>r</i> = 0 and contributes nothing. The other two are each 2.0 m away: <i>I</i> = 1(2.0)<sup>2</sup> + 1(2.0)<sup>2</sup> = 8.0 kg m<sup>2</sup>." },
            { "q": "[NEET] A solid sphere and a hollow sphere have the same mass and radius. Which has the greater moment of inertia about a diameter, and in what ratio?", "a": "The hollow one, because its mass all sits at the surface. <i>I</i><sub>hollow</sub> : <i>I</i><sub>solid</sub> = (2/3)<i>MR</i><sup>2</sup> : (2/5)<i>MR</i><sup>2</sup> = 5 : 3." },
            { "q": "[JEE Main] Find the radius of gyration of a uniform rod of length <i>L</i> about an axis through its centre, perpendicular to its length.", "a": "<i>I</i> = <i>ML</i><sup>2</sup>/12, so <i>K</i> = √(<i>L</i><sup>2</sup>/12) = <i>L</i>/(2√3) ≈ 0.29<i>L</i>. Comfortably less than <i>L</i>/2, as it must be, since no part of the rod is farther out than that." },
            { "q": "[JEE Main] A uniform disc of radius <i>R</i> has a concentric circular hole of radius <i>R</i>/2 cut out. Find the moment of inertia of the remaining annulus about the central perpendicular axis, in terms of its remaining mass <i>M</i>.", "a": "With surface density σ: the annulus has <i>I</i> = ½σπ<i>R</i><sup>4</sup> − ½(σπ<i>R</i><sup>2</sup>/4)(<i>R</i>/2)<sup>2</sup> = 15σπ<i>R</i><sup>4</sup>/32, and mass <i>M</i> = (3/4)σπ<i>R</i><sup>2</sup>. Substituting σπ<i>R</i><sup>2</sup> = 4<i>M</i>/3 gives <i>I</i> = 5<i>MR</i><sup>2</sup>/8. Cross-check with the annulus formula ½<i>M</i>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) = ½<i>M</i>(<i>R</i><sup>2</sup>/4 + <i>R</i><sup>2</sup>) = 5<i>MR</i><sup>2</sup>/8. Note it exceeds the full disc's <i>MR</i><sup>2</sup>/2 per unit mass, exactly as the annulus MCQ above predicts." },
            { "q": "[JEE Advanced] A thin rod of length <i>L</i> has linear mass density λ = λ<sub>0</sub><i>x</i>/<i>L</i>, with <i>x</i> measured from one end. Find its moment of inertia about an axis through that end, perpendicular to the rod.", "a": "<i>I</i> = ∫<i>x</i><sup>2</sup>λ <i>dx</i> = (λ<sub>0</sub>/<i>L</i>)∫<i>x</i><sup>3</sup><i>dx</i> from 0 to <i>L</i> = λ<sub>0</sub><i>L</i><sup>3</sup>/4. Since <i>M</i> = ∫λ<i>dx</i> = λ<sub>0</sub><i>L</i>/2, this is <i>I</i> = <i>ML</i><sup>2</sup>/2. Larger than a uniform rod's <i>ML</i><sup>2</sup>/3, because this rod's mass crowds toward the far end." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the wrong distance in <i>mr</i><sup>2</sup>.</b> The <i>r</i> is the perpendicular distance from the AXIS, never from the centre of mass or from some convenient point. For a corner mass on a square spinning about its centre, that is half the diagonal, and using half the side halves your answer.",
            "<b>Applying the perpendicular axis theorem to a solid body.</b> It holds for flat laminae only. Reaching for it on a sphere, a cylinder or a cube is an instant wrong answer, not an approximation.",
            "<b>Mixing up the standard values.</b> Disc about its centre is <i>MR</i><sup>2</sup>/2 but about a diameter it is <i>MR</i><sup>2</sup>/4; solid sphere is 2<i>MR</i><sup>2</sup>/5 but a shell is 2<i>MR</i><sup>2</sup>/3. Learn the table as pairs, because examiners offer the partner of the right answer as a distractor.",
            "<b>Using the parallel-axis theorem from the wrong starting axis.</b> <i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup> requires the first axis to pass through the centre of mass. Starting from a rod's END and adding <i>Md</i><sup>2</sup> again is a very common and completely invalid move.",
            "<b>Thinking the radius of gyration must fall when mass is removed.</b> <i>K</i> depends on <i>I</i>/<i>M</i>, so hollowing out a disc lowers <i>I</i> but raises <i>K</i>. Ratios do not follow their numerators.",
            "<b>Quoting a moment of inertia without naming its axis.</b> It is not a property of the body alone. An unlabelled number is an incomplete answer even when it is arithmetically right."
          ]
        },
        {
          "t": "protip",
          "html": "when you need a value about an off-centre axis, do not integrate. reach for the parallel axis theorem first, and for any flat plate let the perpendicular axis theorem turn one hard integral into two easy ones. most problems that look hard are one standard value plus one theorem, so spot the combination and the work collapses. two habits pay off constantly: because r is squared, far mass is costly, so ring beats disc and hollow beats solid every single time, which lets you eliminate two options before computing anything. and always sanity-check K against the body's own radius, since K can never exceed the distance of the farthest mass from the axis."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>I</i> = Σ<i>m<sub>i</sub>r<sub>i</sub></i><sup>2</sup> = ∫<i>r</i><sup>2</sup><i>dm</i>, in kg m<sup>2</sup>", "note": "<i>r</i> is the perpendicular distance from the axis, and it is squared" },
            { "f": "<i>K</i> = √(<i>I</i>/<i>M</i>), so <i>I</i> = <i>MK</i><sup>2</sup>", "note": "a length, so compare it directly with the body's own radius" },
            { "f": "<i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup> · <i>I<sub>z</sub></i> = <i>I<sub>x</sub></i> + <i>I<sub>y</sub></i>", "note": "parallel works for any body; perpendicular only for a flat lamina" },
            { "f": "ring <i>MR</i><sup>2</sup> · disc <i>MR</i><sup>2</sup>/2 · sphere 2<i>MR</i><sup>2</sup>/5 · shell 2<i>MR</i><sup>2</sup>/3", "note": "rod is <i>ML</i><sup>2</sup>/12 about its centre and <i>ML</i><sup>2</sup>/3 about its end" },
            { "f": "depends on mass, distribution and axis, never on ω", "note": "one body, one mass, and a different <i>I</i> for every axis" }
          ],
          "aids": [
            "\"far mass is costly, so ring beats disc and hollow beats solid\"",
            "\"perpendicular means pancake: flat plates only\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Rotational Kinematics and Dynamics",
      "chip": "05 SPIN UP",
      "kalam": "shared spin, personal speed",
      "blocks": [
        {
          "t": "p",
          "html": "Here is the best news in the chapter: you have already studied this topic. You studied it in Class 11 under the name <i>motion in a straight line</i>. Rotation is that same physics retold with a new cast, and the cast list is the table you met in Topic 01. Displacement <i>s</i> becomes angle θ, velocity <i>v</i> becomes angular velocity ω, acceleration <i>a</i> becomes angular acceleration α, force <i>F</i> becomes torque τ, and mass, the resistance to linear acceleration, becomes moment of inertia <i>I</i>, the resistance to angular acceleration. Once that dictionary is in your head, the whole <i>v</i> = <i>u</i> + <i>at</i> family and <i>F</i> = <i>ma</i> carry over almost word for word, and this topic stops being new physics and becomes translation practice."
        },
        {
          "t": "p",
          "html": "One intuition here is worth more than any formula. On a rigid rotating body <b>every particle shares the same ω and the same α, but each has its own linear speed <i>v</i> = <i>r</i>ω</b>. Picture the merry-go-round at the mela: a child near the centre and a child clinging to the outer rim complete one full circle in exactly the same time, so their angular velocity is identical, yet the outer child is hurtling round a far bigger circle and feels the rush of it while the inner one barely moves. Angular quantities belong to the whole body; linear quantities belong to a place on it. That one sentence settles an enormous fraction of the conceptual questions in this topic."
        },
        {
          "t": "think",
          "html": "an old film reel or a music record makes the same point. every groove turns at the same rate, one revolution per revolution, yet a point on the outer edge sweeps past far more centimetres per second than a point near the spindle. linear speed depends on where you are; angular speed is a property of the whole disc. whenever a question says <i>the speed of a point</i>, your first move is to ask which point, and how far from the axis."
        },
        {
          "t": "p",
          "html": "The dynamics half answers one question: what makes rotation speed up? The answer is torque, and the rule is the rotational echo of Newton's second law, <b>τ = <i>I</i>α</b>. Just as a heavier object needs more force for the same acceleration, a body with a larger moment of inertia needs more torque for the same angular acceleration. That is why a heavy stone flywheel on a chakki takes a real heave to get going. Notice what this means: <b>two</b> things control how fast a body spins up, not one. How hard you twist it, and how its mass is arranged. A long lathi is much harder to twirl end over end than to spin about its own length, same stick and same effort, because in the first case the mass sits far from the axis, <i>I</i> is larger, and the same τ buys you less α."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ROTATIONAL SUVAT",
          "tag": "valid only while α is constant",
          "main": "ω = ω<sub>0</sub> + α<i>t</i><br>θ = ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup><br>ω<sup>2</sup> = ω<sub>0</sub><sup>2</sup> + 2αθ",
          "legend": [
            "ω is angular velocity in rad/s, ω<sub>0</sub> its initial value, and α is angular acceleration in rad/s<sup>2</sup>",
            "θ is angular displacement in radians, and <i>t</i> is time in seconds",
            "these come from integrating α = <i>d</i>ω/<i>dt</i> twice, step for step exactly as the linear equations come from integrating <i>a</i> = <i>dv</i>/<i>dt</i>: only the symbols change"
          ],
          "note": "Radians only. Convert first: one revolution is 2π rad, and ω = 2π<i>N</i>/60 for <i>N</i> revolutions per minute. And if the torque varies, α is not constant and these three equations are simply invalid, exactly as their linear twins are."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BRIDGE TO LINEAR, AND THE DYNAMICS",
          "main": "<i>v</i> = <i>r</i>ω · <i>a<sub>t</sub></i> = <i>r</i>α · <i>a<sub>c</sub></i> = ω<sup>2</sup><i>r</i><br>τ<sub>net</sub> = <i>I</i>α · <i>K</i><sub>rot</sub> = ½<i>I</i>ω<sup>2</sup> · <i>P</i> = τω",
          "legend": [
            "<i>r</i> is the perpendicular distance of the point from the axis, in m, so <i>v</i> is that point's linear speed in m/s",
            "<i>a<sub>t</sub></i> is the tangential acceleration in m/s<sup>2</sup>, which changes the speed, and <i>a<sub>c</sub></i> is the centripetal acceleration, also in m/s<sup>2</sup>, which changes only the direction",
            "τ is the net torque about the axis, in N m, and <i>I</i> the moment of inertia about that same axis, in kg m<sup>2</sup>",
            "<i>K</i><sub>rot</sub> is rotational kinetic energy in joules, work is <i>W</i> = τθ in joules for a constant torque, and <i>P</i> = τω is power in watts"
          ],
          "note": "Rotational kinetic energy is not a new kind of energy. It is the ordinary ½<i>mv</i><sup>2</sup> of every particle in the body, added up and repackaged, which is exactly what the second derivation below shows."
        },
        {
          "t": "def",
          "term": "The three conditions these formulas quietly assume",
          "html": "First, <b>radians</b>. Every relation here, <i>s</i> = <i>r</i>θ, <i>v</i> = <i>r</i>ω, <i>a<sub>t</sub></i> = <i>r</i>α, is defined for radian measure, so a θ in degrees or an ω in revolutions per minute must be converted before it touches any of them. Second, <b>constant α</b>. The three SUVAT equations apply only while the angular acceleration holds steady; if the torque varies with time or angle you must go back to α = <i>d</i>ω/<i>dt</i> and integrate. Third, <b>rigidity</b>. τ = <i>I</i>α holds for a rigid body about a fixed axis, or about an axis through its centre of mass. For a non-rigid system, a tank of sloshing water, different particles have different α and the equation has nothing to describe. One footnote for the curious: a finite angular displacement is not a vector at all, because two large rotations give different results in different orders. Only infinitesimal ones are, which is why ω and α are honest vectors and a 90° turn is not."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.9 · WHERE τ = Iα COMES FROM",
          "chips": ["one particle of the body"],
          "captions": [
            "The body seen along its axis, which points out of the page at the centre. One particle of mass mi sits at perpendicular distance ri. Because every particle shares the same α, this one has tangential acceleration ai = ri α, so the tangential force on it is mi ri α, and the torque it needs is that force times ri, giving mi ri² α. Sum over the whole body and the bracket that appears is exactly I."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-2.4, 2.6], "axes": "none",
              "polys": [{ "pts": [[-2.2, 0.2], [-1.5, 1.3], [0.2, 1.6], [1.9, 1.1], [2.4, -0.2], [1.4, -1.3], [-0.4, -1.5], [-1.9, -0.9]], "smooth": true, "close": true }],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "amber", "label": "ω" }],
              "segments": [{ "from": [0, 0], "to": [1.7, 0.4], "dash": true, "soft": true, "label": "ri", "at": "below" }],
              "points": [{ "x": 1.7, "y": 0.4, "label": "mi", "at": "se" }],
              "arrows": [{ "from": [1.7, 0.4], "to": [1.402, 1.665], "tone": "amber", "label": "Fi", "at": "end" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ROTATIONAL SECOND LAW, TAP A LINE",
          "steps": [
            {
              "eq": "<i>a<sub>i</sub></i> = <i>r<sub>i</sub></i> α",
              "why": "Take the <i>i</i>-th particle, of mass <i>m<sub>i</sub></i>, at perpendicular distance <i>r<sub>i</sub></i> from the axis. Every particle of a rigid body shares the same α, so this particle's tangential acceleration is fixed by its own radius alone."
            },
            {
              "eq": "<i>F<sub>i</sub></i> = <i>m<sub>i</sub></i> <i>a<sub>i</sub></i> = <i>m<sub>i</sub></i> <i>r<sub>i</sub></i> α",
              "why": "Newton's second law for that one particle, applied along the tangent. This is the only place ordinary linear mechanics enters; everything after it is bookkeeping."
            },
            {
              "eq": "τ<sub>i</sub> = <i>F<sub>i</sub></i> <i>r<sub>i</sub></i> = <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup> α",
              "why": "The force acts at distance <i>r<sub>i</sub></i> from the axis and is perpendicular to that radius, so the moment arm is the full <i>r<sub>i</sub></i> and the torque is force times radius. Note the radius has now appeared twice, which is where the square in <i>I</i> is born."
            },
            {
              "eq": "τ<sub>net</sub> = Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup> α = (Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup>) α",
              "why": "Sum over every particle. Internal torques cancel in pairs by Newton's third law, exactly as internal forces did in Topic 01, so only external torques survive. Since α is common to all of them it factors out of the sum."
            },
            {
              "eq": "τ<sub>net</sub> = <i>I</i> α",
              "why": "The bracket is the definition of the moment of inertia about that axis. So the rotational second law is not a new postulate, it is Newton's second law applied particle by particle and then added up, with <i>I</i> emerging rather than being assumed."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ROTATIONAL KINETIC ENERGY, TAP A LINE",
          "steps": [
            {
              "eq": "½ <i>m<sub>i</sub></i> <i>v<sub>i</sub></i><sup>2</sup> = ½ <i>m<sub>i</sub></i> (<i>r<sub>i</sub></i> ω)<sup>2</sup>",
              "why": "The kinetic energy of one particle, written using the bridge <i>v</i> = <i>r</i>ω. Nothing new so far: this is ordinary translational kinetic energy for a particle that happens to be going round in a circle."
            },
            {
              "eq": "<i>K</i> = Σ ½ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup> ω<sup>2</sup> = ½ (Σ <i>m<sub>i</sub></i> <i>r<sub>i</sub></i><sup>2</sup>) ω<sup>2</sup>",
              "why": "Add over the whole body. Every particle shares the same ω, so it comes out of the sum, and the same bracket as before is left behind."
            },
            {
              "eq": "<i>K</i><sub>rot</sub> = ½ <i>I</i> ω<sup>2</sup>",
              "why": "So rotational kinetic energy is not a new kind of energy at all: it is the ½<i>mv</i><sup>2</sup> of every particle, summed and repackaged in rotational language. Compare the two forms and the dictionary is doing its usual work: <i>m</i> has become <i>I</i>, <i>v</i> has become ω."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.10 · A BLOCK, A STRING AND A REAL PULLEY",
          "chips": ["two laws and one constraint"],
          "captions": [
            "The pulley is a uniform disc of mass M and radius R on a fixed axle, so it has real rotational inertia and the string's tension has to spin it up. Write mg − T = ma for the block, TR = Iα for the pulley, and link them with the no-slip constraint a = Rα. Three equations, three unknowns, and the tension drops out."
          ],
          "frames": [
            {
              "x": [-1.5, 3.5], "y": [-3.4, 1.6], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [0, 1.5], "w": 1.4, "h": 0.16 },
                { "kind": "pulley", "at": [0, 0], "w": 1.6 },
                { "kind": "rope", "at": [0.8, 0], "to": [0.8, -2.2] },
                { "kind": "block", "at": [0.8, -2.55], "w": 0.9, "h": 0.55, "label": "m" }
              ],
              "segments": [{ "from": [0, 0], "to": [0, 1.3] }],
              "arrows": [
                { "from": [0.45, -2.55], "to": [0.45, -1.6], "tone": "amber", "label": "T" },
                { "from": [1.15, -2.55], "to": [1.15, -3.25], "tone": "ink", "label": "mg" }
              ],
              "labels": [{ "x": -1.0, "y": 0.75, "text": "disc M, R" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Connected bodies: a block, a string and a pulley with mass",
          "steps": [
            "<b>One equation per object.</b> Every translating mass gets <i>F</i><sub>net</sub> = <i>ma</i>; the pulley gets τ<sub>net</sub> = <i>I</i>α about its own axle. Nothing is shared between these equations except the tension and the constraint.",
            "<b>Label the tensions separately.</b> With a pulley that has mass, the tension on one side is NOT the tension on the other: their difference is precisely what supplies the torque that spins the pulley up. Writing <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub> is the single fatal error of the topic, and it is legal only for a massless pulley.",
            "<b>Apply the constraint <i>a</i> = <i>R</i>α.</b> An inextensible string that does not slip forces the linear acceleration of the string, and so of everything attached to it, to equal <i>R</i> times the pulley's angular acceleration. Omit this link and your equations will not close.",
            "<b>Fix one sign convention and hold it,</b> for example the heavier mass descending is positive, and then use it in every equation including the torque one.",
            "<b>Solve, then check the limits.</b> Letting the pulley's mass go to zero must reproduce the answers you would get with a massless pulley; a very heavy pulley must drive the acceleration toward zero. A formula that fails either limit is wrong however the algebra looked.",
            "<b>If the question asks only for a speed, use energy instead.</b> Lost potential energy equals ½<i>mv</i><sup>2</sup> summed over the moving masses plus ½<i>I</i>ω<sup>2</sup> for the pulley, with ω = <i>v</i>/<i>R</i>. It is one equation rather than three, and the axle's friction does no work."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A wheel starts from rest and accelerates uniformly, reaching an angular speed of 50 rad/s in 10 s. Find its angular acceleration and the total angle turned in that time.",
          "steps": [
            "Given ω<sub>0</sub> = 0, ω = 50 rad/s, <i>t</i> = 10 s, and the acceleration is uniform, so the rotational SUVAT applies.",
            "From ω = ω<sub>0</sub> + α<i>t</i>: α = (50 − 0)/10 = 5.0 rad/s<sup>2</sup>.",
            "From θ = ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup>: θ = 0 + ½(5.0)(10)<sup>2</sup> = ½(5.0)(100) = 250 rad.",
            "Cross-check with the third equation: ω<sup>2</sup> = 0 + 2(5.0)(250) = 2500, so ω = 50 rad/s. Consistent. In revolutions that is 250/2π ≈ 40 turns."
          ],
          "ans": "α = 5.0 rad/s<sup>2</sup> · θ = 250 rad"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A flywheel of moment of inertia 4.0 kg m<sup>2</sup> spins at 20 rad/s. Friction at the axle brings it to rest in 10 s. Find the magnitude of the frictional torque.",
          "steps": [
            "The trap is to reach for energy or for an angular-momentum integral. Neither is needed: this is a one-line τ = <i>I</i>α problem once you get α out of the kinematics.",
            "α = (ω − ω<sub>0</sub>)/<i>t</i> = (0 − 20)/10 = −2.0 rad/s<sup>2</sup>.",
            "|τ| = <i>I</i>|α| = (4.0)(2.0) = 8.0 N m, opposing the rotation.",
            "Sanity check: the negative α confirms deceleration, which is exactly what friction should do, and no calculus was required at all."
          ],
          "ans": "|τ| = 8.0 N m, opposing the rotation"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A block of mass <i>m</i> hangs from a light string wound around a pulley shaped like a uniform disc of mass <i>M</i> and radius <i>R</i>. The string does not slip. Find the downward acceleration of the block.",
          "steps": [
            "This couples linear dynamics for the block to rotational dynamics for the pulley, through one constraint. Block, taking down as positive: <i>mg</i> − <i>T</i> = <i>ma</i>.",
            "Pulley: the tension acts at the rim, so τ = <i>TR</i> = <i>I</i>α, and for a uniform disc <i>I</i> = ½<i>MR</i><sup>2</sup>.",
            "Constraint: the string does not slip, so <i>a</i> = <i>R</i>α, that is α = <i>a</i>/<i>R</i>. Substituting, <i>TR</i> = ½<i>MR</i><sup>2</sup>(<i>a</i>/<i>R</i>), so <i>T</i> = ½<i>Ma</i>. The radius cancels completely.",
            "Combine: <i>mg</i> − ½<i>Ma</i> = <i>ma</i>, so <i>mg</i> = <i>a</i>(<i>m</i> + <i>M</i>/2) and <i>a</i> = 2<i>mg</i>/(2<i>m</i> + <i>M</i>).",
            "Check the limits. With <i>M</i> → 0, a massless pulley, <i>a</i> → <i>g</i>: free fall, as it should be. With <i>M</i> very large, <i>a</i> → 0: the heavy pulley barely budges. Both make physical sense, and notice the pulley's inertia enters as <i>M</i>/2, behaving like an extra half-mass hanging on the string."
          ],
          "ans": "<i>a</i> = 2<i>mg</i>/(2<i>m</i> + <i>M</i>)"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A uniform rod of mass <i>m</i> and length <i>L</i> is hinged at one end on a frictionless horizontal axis and held horizontally, then released from rest. Find (a) its angular acceleration at the instant of release and (b) its angular speed when it reaches the vertical.",
          "steps": [
            "(a) Use τ = <i>I</i>α, which is an INSTANTANEOUS statement. At release, gravity acts at the rod's centre of mass, a distance <i>L</i>/2 from the hinge, giving τ = <i>mg</i>(<i>L</i>/2).",
            "The rod's moment of inertia about the hinged end is <i>I</i> = <i>mL</i><sup>2</sup>/3. So <i>mg</i>(<i>L</i>/2) = (<i>mL</i><sup>2</sup>/3)α, giving α = 3<i>g</i>/2<i>L</i>. Both <i>m</i> and one power of <i>L</i> cancel.",
            "(b) Do NOT use SUVAT here: α is not constant, because the torque falls as the rod swings down and gravity's moment arm shrinks. Use energy conservation instead, which handles the whole cumulative change at once.",
            "Falling to vertical drops the centre of mass by <i>L</i>/2, so <i>mg</i>(<i>L</i>/2) = ½<i>I</i>ω<sup>2</sup> = ½(<i>mL</i><sup>2</sup>/3)ω<sup>2</sup>.",
            "That gives <i>mgL</i>/2 = <i>mL</i><sup>2</sup>ω<sup>2</sup>/6, so ω<sup>2</sup> = 3<i>g</i>/<i>L</i> and ω = √(3<i>g</i>/<i>L</i>).",
            "The skill being tested is choosing the tool: τ = <i>I</i>α for what is happening at one instant, energy conservation for what has happened over a whole swing. Reach for the wrong one and part (b) becomes unsolvable."
          ],
          "ans": "(a) α = 3<i>g</i>/2<i>L</i> · (b) ω = √(3<i>g</i>/<i>L</i>)"
        },
        {
          "t": "mcq",
          "q": "Two particles sit on a rotating rigid disc at different distances from the axis. Which quantity is the same for both?",
          "opts": [
            { "label": "linear speed", "nudge": "<i>v</i> = <i>r</i>ω, so the outer particle moves faster. This is the quantity that most obviously differs." },
            { "label": "centripetal acceleration", "nudge": "That is ω<sup>2</sup><i>r</i>, which also carries an <i>r</i> and so also differs between the two." },
            { "label": "angular velocity", "nudge": null },
            { "label": "distance covered per second", "nudge": "This is linear speed wearing a different name, so it differs for exactly the same reason." }
          ],
          "correct": 2,
          "solution": "On a rigid body every particle turns through the same angle in the same time, so ω is shared by all of them, and so is α. Everything linear depends on where you stand."
        },
        {
          "t": "mcq",
          "q": "A wheel starting from rest under constant angular acceleration completes <i>N</i> revolutions in the first 2 s. The number it completes in the NEXT 2 s is:",
          "opts": [
            { "label": "<i>N</i>", "nudge": "Equal turns in equal times is what a constant SPEED gives, not a constant acceleration. The wheel is faster in the second interval, so it must cover more." },
            { "label": "2<i>N</i>", "nudge": "This assumes the angle doubles with time, but θ goes as <i>t</i><sup>2</sup> from rest, not as <i>t</i>." },
            { "label": "3<i>N</i>", "nudge": null },
            { "label": "4<i>N</i>", "nudge": "4<i>N</i> is the TOTAL over the full 4 s, not the amount added in the second half. Subtract the first interval's <i>N</i> and 3<i>N</i> is left." }
          ],
          "correct": 2,
          "solution": "From rest with constant α, θ = ½α<i>t</i><sup>2</sup>, so the angle scales as <i>t</i><sup>2</sup>. In 4 s the total is proportional to 16; in the first 2 s it is proportional to 4. The next 2 s therefore account for 16 − 4 = 12 units, three times the first four. This first-versus-next trap appears constantly."
        },
        {
          "t": "mcq",
          "q": "The rotational analogue of mass is:",
          "opts": [
            { "label": "torque", "nudge": "Torque is the analogue of FORCE: it sits in the τ slot of τ = <i>I</i>α where <i>F</i> sits in <i>F</i> = <i>ma</i>." },
            { "label": "angular momentum", "nudge": "That is the analogue of linear MOMENTUM, since <i>L</i> = <i>I</i>ω answers to <i>p</i> = <i>mv</i>." },
            { "label": "moment of inertia", "nudge": null },
            { "label": "angular velocity", "nudge": "That is the analogue of VELOCITY. Every option here is a genuine analogue, just of a different linear quantity, which is what makes the question worth asking." }
          ],
          "correct": 2,
          "solution": "Moment of inertia measures resistance to angular acceleration exactly as mass measures resistance to linear acceleration, and it occupies the same slot in τ = <i>I</i>α that <i>m</i> occupies in <i>F</i> = <i>ma</i>."
        },
        {
          "t": "mcq",
          "q": "A torque does work on a freely rotating rigid body. That work equals:",
          "opts": [
            { "label": "the change in its angular momentum", "nudge": "Torque times TIME gives the change in angular momentum, which is angular impulse. Torque times ANGLE gives work. Different products, different answers." },
            { "label": "the change in its rotational kinetic energy", "nudge": null },
            { "label": "the change in its moment of inertia", "nudge": "The moment of inertia of a rigid body does not change at all; that is what rigid means." },
            { "label": "zero, since rotation involves no displacement", "nudge": "A classic misconception. There is an angular displacement θ, and <i>W</i> = τθ is not zero. A drill and a potter's wheel both do plenty of work." }
          ],
          "correct": 1,
          "solution": "The work-energy theorem in rotational form: <i>W</i> = Δ<i>K</i><sub>rot</sub> = ½<i>I</i>ω<sup>2</sup> − ½<i>I</i>ω<sub>0</sub><sup>2</sup>, the exact twin of the linear version you already know."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A fan rotating at 300 rpm is switched off and comes to rest after 30 revolutions under uniform deceleration. Find the angular deceleration.", "a": "Convert first: ω<sub>0</sub> = 2π(300)/60 = 10π rad/s, and 30 revolutions is 60π rad. Then 0 = (10π)<sup>2</sup> + 2α(60π), so α = −100π<sup>2</sup>/120π = −10π/12 ≈ −2.6 rad/s<sup>2</sup>, a deceleration of about 2.6 rad/s<sup>2</sup>." },
            { "q": "[NEET] A disc rotates at a constant angular speed. Point P is at distance <i>r</i> from the axis and point Q at 3<i>r</i>. Find the ratio of their angular speeds and of their linear speeds.", "a": "Angular speeds 1 : 1, because ω belongs to the whole body. Linear speeds <i>v</i> = <i>r</i>ω give 1 : 3, in the ratio of the radii." },
            { "q": "[JEE Main] A constant torque of 20 N m acts on a wheel of moment of inertia 5.0 kg m<sup>2</sup>, initially at rest. Find its angular speed after 4.0 s and the work the torque has done.", "a": "α = τ/<i>I</i> = 20/5.0 = 4.0 rad/s<sup>2</sup>, so ω = 4.0(4.0) = 16 rad/s. θ = ½(4.0)(16) = 32 rad, so <i>W</i> = τθ = 20(32) = 640 J. Check against energy: ½<i>I</i>ω<sup>2</sup> = ½(5.0)(256) = 640 J." },
            { "q": "[JEE Main] A solid cylinder of mass <i>M</i> and radius <i>R</i> turns about its fixed horizontal axis. A string wound on it is pulled with constant force <i>F</i>. Find the angular acceleration.", "a": "τ = <i>FR</i> = <i>I</i>α with <i>I</i> = ½<i>MR</i><sup>2</sup>, so α = 2<i>F</i>/(<i>MR</i>), in rad/s<sup>2</sup>. Note this is not the same as hanging a weight <i>F</i>: a constant pull gives a larger α than a hanging mass would, because a hanging mass also has to be accelerated." },
            { "q": "[JEE Advanced] A uniform disc of mass <i>M</i> and radius <i>R</i> spins freely at ω<sub>0</sub> about its central axis. A lump of clay of mass <i>m</i> drops gently onto the rim and sticks. Find the new angular speed and the fraction of kinetic energy lost.", "a": "No external torque about the axis, so <i>L</i> is conserved: (½<i>MR</i><sup>2</sup>)ω<sub>0</sub> = (½<i>MR</i><sup>2</sup> + <i>mR</i><sup>2</sup>)ω, giving ω = <i>M</i>ω<sub>0</sub>/(<i>M</i> + 2<i>m</i>). Using <i>K</i> = <i>L</i><sup>2</sup>/2<i>I</i> with <i>L</i> fixed, the fraction lost is 1 − <i>I</i><sub>i</sub>/<i>I</i><sub>f</sub> = 2<i>m</i>/(<i>M</i> + 2<i>m</i>). Energy is lost because the clay lands with a thud, not gently, from the disc's point of view." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the constant-α equations when α is not constant.</b> They apply only while the angular acceleration holds steady. A rod swinging down under gravity has a torque that shrinks as it falls, so SUVAT is invalid from the first instant and only energy or integration will do.",
            "<b>Forgetting the constraint <i>a</i> = <i>R</i>α.</b> In any pulley-and-block setup the string's linear acceleration equals <i>R</i> times the pulley's angular acceleration. Leave it out and you have more unknowns than equations.",
            "<b>Assuming the two tensions across a pulley are equal.</b> True only for a massless pulley. Give the pulley mass and their difference is exactly what supplies its torque, so setting them equal quietly forces α = 0.",
            "<b>Mixing degrees, revolutions and radians.</b> Convert before anything else: one revolution is 2π rad, and ω = 2π<i>N</i>/60 for <i>N</i> rpm. Every bridge formula in this topic is defined in radians only.",
            "<b>Answering with the wrong particle's speed.</b> Angular quantities belong to the whole body, linear ones to a place on it. Always ask which point and how far from the axis before quoting a speed."
          ]
        },
        {
          "t": "protip",
          "html": "solve every rotational problem by translating it to its linear twin first. <i>wheel from rest, given α, find θ</i> is identically <i>object from rest, given a, find s</i>. write the linear version you already trust, then swap symbols with the dictionary from topic 01, and you will never misremember a rotational formula again. for connected bodies, if the question asks only for a final speed, skip the force-and-torque system entirely: lost potential energy equals ½mv² for the moving masses plus ½Iω², and one equation replaces three. one thing worth carrying past the syllabus: for two blocks over a massive pulley the acceleration is (m<sub>1</sub> − m<sub>2</sub>)g divided by (m<sub>1</sub> + m<sub>2</sub> + M/2) for a disc pulley, so its inertia behaves exactly like half its mass hung on the string."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "ω = ω<sub>0</sub> + α<i>t</i> · θ = ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup> · ω<sup>2</sup> = ω<sub>0</sub><sup>2</sup> + 2αθ", "note": "constant α only, and radians only" },
            { "f": "<i>v</i> = <i>r</i>ω · <i>a<sub>t</sub></i> = <i>r</i>α · <i>a<sub>c</sub></i> = ω<sup>2</sup><i>r</i>", "note": "shared spin, personal speed: only ω and α belong to the whole body" },
            { "f": "τ<sub>net</sub> = <i>I</i>α", "note": "the rotational <i>F</i> = <i>ma</i>, derived one particle at a time" },
            { "f": "<i>K</i><sub>rot</sub> = ½<i>I</i>ω<sup>2</sup> · <i>W</i> = τθ · <i>P</i> = τω", "note": "not a new energy, just ½<i>mv</i><sup>2</sup> summed and repackaged" },
            { "f": "connected bodies: link with <i>a</i> = <i>R</i>α", "note": "and never set the two tensions equal across a pulley with mass" }
          ],
          "aids": [
            "\"same letters, new alphabet: s to θ, v to ω, a to α, m to I, F to τ\"",
            "\"shared spin, personal speed\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Rolling Motion",
      "chip": "06 ROLLING",
      "kalam": "the bottom is frozen and the top flies",
      "blocks": [
        {
          "t": "p",
          "html": "Everything this chapter has built, centre of mass, torque, moment of inertia, rotational dynamics, comes together here in the most familiar motion there is: a wheel rolling along a road. A rolling body does two things at once. Its centre of mass glides forward, which is pure translation, the motion of Topic 01; and at the same time the body spins about that centre, which is pure rotation, the motion of Topics 02 to 05. Rolling is the superposition of the two. And it hides a lovely secret: in <b>pure rolling</b>, rolling without slipping, the point of the body touching the ground is, for that instant, completely at rest. The patch of rubber kissing the road is not skidding or smearing, which is exactly why tyres grip instead of sliding."
        },
        {
          "t": "think",
          "html": "walking is rolling in disguise. when you stride, your planted foot stays fixed on the ground, momentarily at rest, while your whole body pivots forward over it. the foot is your contact point. photograph a moving wheel and you see the same thing from the other side: the spokes near the top are a blur while the spokes at the bottom look sharp, because the camera is telling you the bottom is barely moving."
        },
        {
          "t": "p",
          "html": "That cancellation produces a striking pattern of speeds, and there is a clean way to see it. Imagine two transparent pictures laid on top of one another. In the first, every point of the wheel slides forward at the centre's speed <i>v</i>: pure translation. In the second, every point whirls around the centre at rim speed <i>R</i>ω, which pure rolling forces to equal <i>v</i>: pure rotation. Add them at the bottom and the translation points forward while the rotation points backward, so they cancel exactly to zero. Add them at the top and both point forward, giving <b>2<i>v</i></b>. The contact point is at rest, the centre moves at <i>v</i>, and the top of the wheel races along at twice the speed of the car itself."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ROLLING, TAKEN APART AND PUT BACK TOGETHER",
          "chips": ["translation alone", "rotation alone", "the sum"],
          "captions": [
            "The translation picture: every point of the wheel carries the same forward velocity v, top, centre and bottom alike. On its own this is a wheel skidding along without turning.",
            "The rotation picture: the wheel spins about its own centre, so the top sweeps forward at rim speed Rω and the bottom sweeps backward at the same speed. On its own this is a wheel spinning on the spot. Rolling clockwise means ω points into the page.",
            "Lay the two on top of each other. At the bottom, v forward and Rω backward cancel exactly, because pure rolling forces Rω = v: the contact point is instantaneously at rest. At the top both add, giving 2v. The centre keeps its own v."
          ],
          "frames": [
            {
              "x": [-2.8, 3.6], "y": [-2.4, 2.2], "axes": "none",
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.6 }],
              "bodies": [{ "kind": "ground", "at": [0.4, -1.75], "w": 6.0, "h": 0.3 }],
              "arrows": [
                { "from": [0, 1.6], "to": [1.6, 1.6], "tone": "amber" },
                { "from": [0, 0], "to": [1.6, 0], "tone": "amber", "label": "v" },
                { "from": [0, -1.6], "to": [1.6, -1.6], "tone": "amber" }
              ]
            },
            {
              "x": [-2.8, 3.6], "y": [-2.4, 2.2], "axes": "none",
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.6 }],
              "marks": [{ "x": 0, "y": 0, "glyph": "into", "tone": "amber", "label": "ω" }],
              "arrows": [
                { "from": [0, 1.6], "to": [1.6, 1.6], "tone": "amber", "label": "Rω" },
                { "from": [0, -1.6], "to": [-1.6, -1.6], "tone": "amber", "label": "Rω", "at": "below" }
              ]
            },
            {
              "x": [-2.8, 3.6], "y": [-2.4, 2.2], "axes": "none",
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.6 }],
              "bodies": [{ "kind": "ground", "at": [0.4, -1.75], "w": 6.0, "h": 0.3 }],
              "marks": [{ "x": 0, "y": -1.6, "glyph": "dot", "tone": "green", "label": "v = 0" }],
              "arrows": [
                { "from": [0, 1.6], "to": [3.2, 1.6], "tone": "amber", "label": "2v" },
                { "from": [0, 0], "to": [1.6, 0], "tone": "amber", "label": "v" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "The pure-rolling condition, and the friction that does no work",
          "html": "<b><i>v</i><sub>cm</sub> = <i>R</i>ω, and <i>a</i><sub>cm</sub> = <i>R</i>α.</b> Translation speed equals radius times spin rate: this one line is the bridge between everything linear and everything angular in this topic, and it holds ONLY while the body rolls without slipping. The moment slipping starts, a hard brake, an icy patch, a ball thrown down without spin, <i>v</i> is no longer <i>R</i>ω and every formula below fails. Two consequences surprise almost everyone. First, <b>pure rolling requires friction, yet that friction does no work</b>: static friction supplies the torque that keeps <i>v</i> = <i>R</i>ω, but it acts at the contact point, and the contact point does not move, so it dissipates nothing and mechanical energy is conserved. Second, <b>on a perfectly frictionless incline a body cannot roll at all</b>; with no friction there is no torque about the centre, so ω stays at zero and the body simply slides. One notation warning: in this topic <i>K</i> means the RADIUS OF GYRATION from Topic 04, a length, and kinetic energies are written <i>KE</i>. The shape factor <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> is a pure number."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHERE A ROLLING BODY KEEPS ITS ENERGY",
          "tag": "the rotational tax, in one bracket",
          "main": "<i>KE</i> = ½<i>mv</i><sup>2</sup> + ½<i>I</i>ω<sup>2</sup> = ½<i>mv</i><sup>2</sup>(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)<br><i>KE</i><sub>trans</sub> : <i>KE</i><sub>rot</sub> = 1 : <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>",
          "legend": [
            "<i>m</i> is the mass in kg, <i>v</i> the speed of the centre of mass in m/s, and <i>R</i> the radius in m",
            "<i>I</i> = <i>mK</i><sup>2</sup> is the moment of inertia about the central axis in kg m<sup>2</sup>, and <i>K</i> is the radius of gyration in m",
            "the bracket (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) is dimensionless, a ratio of two lengths squared, so the whole expression is an energy in joules",
            "the point speeds that go with it: contact 0, centre <i>v</i>, top 2<i>v</i>"
          ],
          "note": "A rolling body carries MORE kinetic energy than a sliding one at the same speed, because part of the energy is locked up in spinning. Everything else in this topic is that bracket showing up somewhere else."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ROLLING DOWN AN INCLINE",
          "main": "<i>a</i> = <i>g</i> sin θ ÷ (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)<br><i>v</i><sub>bottom</sub> = √[2<i>gh</i> ÷ (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)]<br>μ<sub>min</sub> = tan θ ÷ (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>)",
          "legend": [
            "<i>g</i> = 9.8 m/s<sup>2</sup>, θ is the angle of the incline, and <i>h</i> is the vertical height descended in m",
            "<i>K</i> is the radius of gyration about the central axis, in m, and <i>R</i> the radius in m; the shape factor <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> is a pure number",
            "μ<sub>min</sub> is the smallest coefficient of static friction that keeps the body rolling rather than slipping, and it is dimensionless",
            "note that the bracket is inverted in the last line, <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup> rather than <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>, which is the commonest place to slip"
          ],
          "note": "Neither the mass nor the radius survives in <i>a</i> or in <i>v</i><sub>bottom</sub>. Only the SHAPE matters, through <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>, which is why a marble beats a ring whether the marble is tiny or huge. Limiting case: a body with <i>K</i> = 0 has no rotational inertia at all and gives <i>a</i> = <i>g</i> sin θ, the sliding block you already know."
        },
        {
          "t": "defgrid",
          "title": "The shape factors, fastest to slowest",
          "tag": "the whole race, in one column",
          "rows": [
            { "k": "Solid sphere", "v": "<i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/5 = 0.40, so <i>a</i> = (5/7)<i>g</i> sin θ and 2/7 of its energy is rotational. Wins every race" },
            { "k": "Solid cylinder or disc", "v": "<i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1/2 = 0.50, so <i>a</i> = (2/3)<i>g</i> sin θ and 1/3 of its energy is rotational" },
            { "k": "Spherical shell", "v": "<i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/3 ≈ 0.67, so <i>a</i> = (3/5)<i>g</i> sin θ and 2/5, that is 40%, of its energy is rotational" },
            { "k": "Ring or hollow cylinder", "v": "<i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1, so <i>a</i> = ½<i>g</i> sin θ and the energy splits exactly half and half. Comes last, always" },
            { "k": "How to read the column", "v": "the smaller the shape factor, the smaller the rotational tax, so the faster the body. Mass and radius appear nowhere in it" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.11 · THE THREE FORCES ON A ROLLING BODY",
          "chips": ["only friction has a moment arm"],
          "captions": [
            "A body rolling on an incline of angle θ. The weight mg acts vertically at the centre; the normal N acts perpendicular to the surface at the contact; static friction f acts up the incline at the contact. Take torques about the centre and both mg and N have zero moment arm, because their lines pass straight through it. Friction alone spins the body up, which is why a frictionless slope produces sliding and never rolling."
          ],
          "frames": [
            {
              "x": [-0.6, 5.4], "y": [-0.7, 3.6], "axes": "none",
              "bodies": [{ "kind": "incline", "at": [0, 0], "w": 5.0, "h": 2.9 }],
              "curves": [{ "c": "circle", "cx": 2.399, "cy": 2.201, "r": 0.7 }],
              "arrows": [
                { "from": [2.399, 2.201], "to": [2.399, 1.0], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [2.75, 1.595], "to": [2.424, 2.157], "tone": "amber", "label": "N" },
                { "from": [2.75, 1.595], "to": [3.529, 2.047], "tone": "amber", "label": "f" }
              ],
              "arcs": [{ "at": [0, 0], "r": 1.0, "from": 0, "to": 30.1, "label": "θ" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY SHAPE DECIDES THE RACE, TAP A LINE",
          "steps": [
            {
              "eq": "<i>mg</i> sin θ − <i>f</i> = <i>ma</i>",
              "why": "Newton's second law along the incline. Only two forces have components along the slope: gravity's <i>mg</i> sin θ pulling the body down, and static friction <i>f</i> acting up. The normal force is perpendicular to the slope and contributes nothing here."
            },
            {
              "eq": "<i>fR</i> = <i>I</i>α = <i>mK</i><sup>2</sup>(<i>a</i>/<i>R</i>)",
              "why": "The torque equation about the centre of mass. Of the three forces only friction has a moment arm about the centre: gravity acts through the centre, and the normal's line of action passes through it too. Then <i>I</i> = <i>mK</i><sup>2</sup> and the pure-rolling link α = <i>a</i>/<i>R</i> convert everything into <i>a</i>."
            },
            {
              "eq": "<i>f</i> = <i>mK</i><sup>2</sup><i>a</i>/<i>R</i><sup>2</sup>",
              "why": "Rearranged, this is the friction force the surface must supply. Notice it is proportional to <i>a</i> rather than to μ<i>N</i>: static friction takes whatever value the constraint demands, up to its own limit."
            },
            {
              "eq": "<i>mg</i> sin θ = <i>ma</i>(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)",
              "why": "Substitute the friction back into the first equation. The mass cancels off both sides at once, and the same bracket that appeared in the energy expression appears here, in the dynamics."
            },
            {
              "eq": "<i>a</i> = <i>g</i> sin θ ÷ (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)",
              "why": "The bracket is the rotational tax. A body with its mass far from the axis, a ring, pays the most: more of gravity's pull goes into spinning it up rather than into moving it along, so it crawls. Set <i>K</i> = 0 and you recover <i>a</i> = <i>g</i> sin θ, a block sliding on a frictionless slope, which is the check that the formula is behaving."
            },
            {
              "eq": "μ<sub>min</sub> = tan θ ÷ (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>)",
              "why": "Put the acceleration back into the friction expression to get <i>f</i> = <i>mg</i> sin θ ÷ (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>), then demand <i>f</i> ≤ μ<i>mg</i> cos θ. If the real μ falls below this, the surface cannot supply what pure rolling needs and the body starts to slip, which is exactly why a steep smooth slope makes even a good wheel skid."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Which tool to reach for in a rolling problem",
          "steps": [
            "<b>First ask: is it pure rolling?</b> If the question says rolls without slipping, <i>v</i> = <i>R</i>ω and <i>a</i> = <i>R</i>α are yours to use. If it says thrown without spin, skidding, or braking hard, they are not, and the two motions must be tracked separately until friction brings them into step.",
            "<b>Only a final speed wanted? Use energy.</b> Lost potential energy <i>mgh</i> equals ½<i>mv</i><sup>2</sup>(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>). Static friction does no work in pure rolling, so nothing is lost, and one line replaces a force-and-torque system.",
            "<b>Acceleration, friction force or a coefficient wanted? Use force and torque.</b> Write the translation equation along the slope, the torque equation about the centre, and link them with α = <i>a</i>/<i>R</i>. That is the derivation above and it hands you all three answers.",
            "<b>Sliding turning into rolling? Take angular momentum about a point ON the surface.</b> Kinetic friction acts at the contact line, so its torque about any floor point is zero, and angular momentum there is conserved through the whole messy transition. That single choice gives you the final speed without ever touching μ or the time.",
            "<b>Ranking bodies? Do not compute anything.</b> Only <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> matters, so sphere beats disc beats shell beats ring, whatever their masses and radii."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.12 · SLIDING, UNTIL FRICTION MAKES IT ROLL",
          "chips": ["the transition"],
          "captions": [
            "A sphere is thrown onto a rough floor moving right at v0 with no spin at all, so v is not Rω and this is not pure rolling. Kinetic friction acts backward at the contact, doing two things at once: it slows the centre down and it exerts a torque that spins the sphere up. When the two finally meet at v = Rω the slipping stops, friction becomes static, and pure rolling takes over for good."
          ],
          "frames": [
            {
              "x": [-0.6, 5.4], "y": [-0.9, 3.4], "axes": "none",
              "bodies": [{ "kind": "ground", "at": [2.4, -0.15], "w": 5.6, "h": 0.3 }],
              "curves": [{ "c": "circle", "cx": 2.4, "cy": 1.1, "r": 1.1 }],
              "marks": [{ "x": 1.55, "y": 1.9, "glyph": "into", "tone": "amber", "label": "ω grows" }],
              "arrows": [
                { "from": [2.4, 1.1], "to": [4.0, 1.1], "tone": "amber", "label": "v0", "at": "end" },
                { "from": [2.4, 0], "to": [1.3, 0], "tone": "red", "label": "f", "at": "below" }
              ],
              "labels": [{ "x": 4.3, "y": 2.6, "text": "until v = Rω" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A solid sphere of mass <i>m</i> rolls without slipping with centre-of-mass speed <i>v</i>. Find its total kinetic energy and the fraction of that energy which is rotational.",
          "steps": [
            "For a solid sphere <i>I</i> = (2/5)<i>mR</i><sup>2</sup>, so the shape factor is <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/5.",
            "Total: <i>KE</i> = ½<i>mv</i><sup>2</sup>(1 + 2/5) = ½<i>mv</i><sup>2</sup>(7/5) = (7/10)<i>mv</i><sup>2</sup>.",
            "The split is <i>KE</i><sub>trans</sub> : <i>KE</i><sub>rot</sub> = 1 : 2/5 = 5 : 2, so the rotational share is 2/(5 + 2) = 2/7 ≈ 29%.",
            "Sanity check: a sliding block of the same mass and speed would have only ½<i>mv</i><sup>2</sup>. The rolling sphere carries 40% more, and that extra is exactly the spin."
          ],
          "ans": "<i>KE</i> = (7/10)<i>mv</i><sup>2</sup> · rotational share 2/7 ≈ 29%"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A solid sphere, a disc and a ring are released from rest at the same height on identical inclines. In what order do they reach the bottom?",
          "steps": [
            "The trap is to start hunting for masses and radii, or to assume they tie. They do not tie, and mass and radius cancel out of <i>a</i> = <i>g</i> sin θ ÷ (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) completely.",
            "Only the shape factor matters, and the smallest one accelerates fastest. Solid sphere: 2/5 = 0.40. Disc: 1/2 = 0.50. Ring: 1.",
            "So the sphere arrives first, the disc second, the ring last, regardless of how big or heavy any of them is.",
            "Sanity check: the ring keeps all its mass at the rim, pays the biggest rotational tax and crawls. The compact sphere spends the least energy spinning and wins. A tiny ball bearing ties exactly with a cannonball of the same shape."
          ],
          "ans": "sphere first, disc second, ring last, independent of mass and radius"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A uniform disc rolls without slipping down an incline of 30°. Find (a) its acceleration and (b) the minimum coefficient of static friction needed for pure rolling.",
          "steps": [
            "For a disc, <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1/2, and θ = 30° so sin θ = 0.5 and tan θ = 1/√3.",
            "(a) <i>a</i> = <i>g</i> sin 30° ÷ (1 + 1/2) = (<i>g</i>/2) ÷ (3/2) = <i>g</i>/3 ≈ 3.3 m/s<sup>2</sup>.",
            "(b) The friction condition uses the INVERTED bracket: μ<sub>min</sub> = tan θ ÷ (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>). For a disc <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup> = 2, so the denominator is 3.",
            "μ<sub>min</sub> = (1/√3)/3 = 1/(3√3) ≈ 0.19.",
            "Why two concepts: part (a) is the rolling-incline result on its own, while part (b) makes you back out the friction force and compare it with μ<i>N</i>. Using the same bracket twice is the mistake this question is built to catch."
          ],
          "ans": "<i>a</i> = <i>g</i>/3 ≈ 3.3 m/s<sup>2</sup> · μ<sub>min</sub> = 1/(3√3) ≈ 0.19"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A solid sphere is thrown onto a rough horizontal floor with initial speed <i>v</i><sub>0</sub> and no spin, so it slides. Friction acts until pure rolling begins. Find the centre-of-mass speed when it does, and the fraction of the initial kinetic energy lost.",
          "steps": [
            "The elegant route is to conserve angular momentum about a point ON the floor. Friction acts at the contact line, so its torque about any floor point is zero, and the sphere's angular momentum about that point is conserved through the whole sliding phase.",
            "Before: only the translating centre contributes, since ω<sub>0</sub> = 0, so <i>L</i><sub>i</sub> = <i>mv</i><sub>0</sub><i>R</i>.",
            "After, with <i>v</i> = <i>R</i>ω, use the moment of inertia about the CONTACT point: <i>I</i> = (2/5)<i>mR</i><sup>2</sup> + <i>mR</i><sup>2</sup> = (7/5)<i>mR</i><sup>2</sup> by the parallel-axis theorem. So <i>L</i><sub>f</sub> = (7/5)<i>mR</i><sup>2</sup>(<i>v</i>/<i>R</i>) = (7/5)<i>mRv</i>.",
            "Equate: <i>mv</i><sub>0</sub><i>R</i> = (7/5)<i>mRv</i>, so <i>v</i> = (5/7)<i>v</i><sub>0</sub>. Note that μ never appeared: friction sets the schedule, not the destination.",
            "Energy: <i>KE</i><sub>i</sub> = ½<i>mv</i><sub>0</sub><sup>2</sup>, and <i>KE</i><sub>f</sub> = (7/10)<i>mv</i><sup>2</sup> = (7/10)(25/49)<i>mv</i><sub>0</sub><sup>2</sup> = (5/14)<i>mv</i><sub>0</sub><sup>2</sup>.",
            "Loss = (7/14 − 5/14)<i>mv</i><sub>0</sub><sup>2</sup> = (1/7)<i>mv</i><sub>0</sub><sup>2</sup>, which as a fraction of <i>KE</i><sub>i</sub> is (1/7)/(1/2) = 2/7 ≈ 29%. Five sevenths of the SPEED survives, and five sevenths of the ENERGY does too; the two happen to agree here, but they are different calculations."
          ],
          "ans": "<i>v</i> = (5/7)<i>v</i><sub>0</sub> · 2/7 ≈ 29% of the kinetic energy is lost to friction"
        },
        {
          "t": "mcq",
          "q": "A wheel rolls without slipping at centre speed <i>v</i>. The speed of its topmost point is:",
          "opts": [
            { "label": "<i>v</i>", "nudge": "This counts only the translation and forgets that the top of the wheel is also sweeping forward as the wheel turns." },
            { "label": "<i>v</i>/2", "nudge": "A random halving with nothing behind it. Nothing in the superposition produces a factor of one half." },
            { "label": "2<i>v</i>", "nudge": null },
            { "label": "zero", "nudge": "That is the speed of the BOTTOM, the contact point, and swapping the two is the classic slip in this question." }
          ],
          "correct": 2,
          "solution": "At the top, the translational velocity <i>v</i> forward and the rotational velocity <i>R</i>ω, which equals <i>v</i> and also points forward there, add to 2<i>v</i>. The defining pattern of pure rolling is bottom 0, centre <i>v</i>, top 2<i>v</i>."
        },
        {
          "t": "mcq",
          "q": "A solid sphere and a ring of the same mass and radius roll down identical inclines from the same height. At the bottom:",
          "opts": [
            { "label": "the ring is faster", "nudge": "This reverses the physics. The ring has the LARGER shape factor, so it diverts more energy into spin and arrives slower." },
            { "label": "the sphere is faster", "nudge": null },
            { "label": "they have equal speed", "nudge": "This assumes energy conservation alone settles it. It does not: the same <i>mgh</i> is split differently between translation and spin for the two shapes." },
            { "label": "which is faster depends on the radius", "nudge": "The radius cancels completely out of <i>v</i><sub>bottom</sub>, leaving only the shape factor <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>, which is a pure number." }
          ],
          "correct": 1,
          "solution": "<i>v</i><sub>bottom</sub> = √[2<i>gh</i>/(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)]. The sphere's 2/5 is smaller than the ring's 1, so it has the smaller denominator and the larger speed."
        },
        {
          "t": "mcq",
          "q": "During pure rolling on a horizontal surface, the work done by the static friction force is:",
          "opts": [
            { "label": "positive", "nudge": "This assumes friction is feeding energy into the body. Work is force times the displacement OF ITS POINT OF APPLICATION, and that point is not moving." },
            { "label": "negative", "nudge": "The same error with the sign guessed the other way. Kinetic friction on a sliding body does negative work, but this friction is static and its contact point is at rest." },
            { "label": "zero", "nudge": null },
            { "label": "equal to the change in rotational kinetic energy", "nudge": "This confuses friction's role with its energy bill. Friction supplies the torque that redistributes energy between translation and rotation, but it does no NET work on the body." }
          ],
          "correct": 2,
          "solution": "Static friction acts at the contact point, which in pure rolling is instantaneously at rest. Work = force times displacement of the point of application = 0. That is exactly why energy conservation may be used freely on a rolling body."
        },
        {
          "t": "mcq",
          "q": "A body rolls without slipping, and its rotational kinetic energy is 40% of its total. The body could be a:",
          "opts": [
            { "label": "ring", "nudge": "A ring splits its energy exactly half and half, so its rotational share is 50%, not 40%." },
            { "label": "solid sphere", "nudge": "A solid sphere's rotational share is 2/7 ≈ 28.6%, the smallest of the four standard shapes." },
            { "label": "disc", "nudge": "A disc's rotational share is 1/3 ≈ 33.3%. Close to 40% but not equal to it, which is what makes it the tempting wrong answer." },
            { "label": "spherical shell", "nudge": null }
          ],
          "correct": 3,
          "solution": "The rotational fraction is (<i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>)/(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>). Setting that to 2/5 gives <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/3, which is a spherical shell. Only the shell yields exactly 40%."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A ring rolls without slipping at centre speed <i>v</i>. What fraction of its total kinetic energy is translational?", "a": "A ring has <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1, so the split <i>KE</i><sub>trans</sub> : <i>KE</i><sub>rot</sub> is 1 : 1 and the translational share is exactly ½, or 50%." },
            { "q": "[NEET] A body rolls down an incline with acceleration (3/5)<i>g</i> sin θ. Identify the body.", "a": "Set <i>g</i> sin θ/(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) = (3/5)<i>g</i> sin θ, so 1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 5/3 and <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/3: a spherical shell." },
            { "q": "[JEE Main] A solid sphere and a hollow sphere of the same mass and radius roll down the same incline from the same height. Find the ratio of the times they take.", "a": "Since <i>s</i> = ½<i>at</i><sup>2</sup> over the same distance, <i>t</i> ∝ 1/√<i>a</i> ∝ √(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>). So <i>t</i><sub>solid</sub> : <i>t</i><sub>hollow</sub> = √(7/5) : √(5/3) = √(21/25) = √21/5 ≈ 0.92. The solid sphere takes about 8% less time." },
            { "q": "[JEE Main] A disc of radius 0.20 m rolls without slipping with centre speed 4.0 m/s. Find the speed of the topmost point and of the point of contact.", "a": "Top = 2<i>v</i> = 8.0 m/s. Contact = 0 m/s. The radius is a distractor: it fixes ω = <i>v</i>/<i>R</i> = 20 rad/s but neither point speed needs it." },
            { "q": "[JEE Advanced] A solid cylinder of mass <i>M</i> and radius <i>R</i> rolls without slipping down an incline. Using energy conservation, find the speed of its centre after descending a vertical height <i>h</i>, and check it is independent of <i>M</i> and <i>R</i>.", "a": "Static friction does no work, so <i>Mgh</i> = ½<i>Mv</i><sup>2</sup>(1 + 1/2). Then <i>v</i><sup>2</sup> = 2<i>gh</i>/(3/2) = 4<i>gh</i>/3, so <i>v</i> = √(4<i>gh</i>/3) ≈ 1.15√(<i>gh</i>). Both <i>M</i> and <i>R</i> cancel: only the shape survives." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) factor.</b> A rolling body is not a point mass: it stores energy in spin as well. Writing ½<i>mv</i><sup>2</sup> for its kinetic energy, or <i>a</i> = <i>g</i> sin θ for its acceleration, is the single commonest rolling error.",
            "<b>Inverting the bracket in the wrong place.</b> The acceleration divides by (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) but μ<sub>min</sub> divides by (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>). They are different numbers, and using one for the other gives an answer that looks plausible and is wrong.",
            "<b>Believing friction does work in pure rolling.</b> It supplies the torque that maintains <i>v</i> = <i>R</i>ω, but its point of application is at rest, so it does zero work and energy is conserved. This is what makes the energy method legal at all.",
            "<b>Thinking mass or radius affects the race.</b> Both cancel completely, on an incline and in the bottom speed. Only the shape decides, so a ball bearing ties exactly with a cannonball.",
            "<b>Using <i>v</i> = <i>R</i>ω while the body is slipping.</b> That condition defines pure rolling and holds only there. A sphere thrown without spin has <i>v</i> greater than <i>R</i>ω, by construction, until friction closes the gap.",
            "<b>Answering that the contact point has zero acceleration because it has zero velocity.</b> Its velocity is zero and its acceleration is <i>v</i><sup>2</sup>/<i>R</i>, directed straight up toward the centre. Velocity and acceleration are independent at an instant, exactly as they were at the top of a vertical throw."
          ]
        },
        {
          "t": "protip",
          "html": "memorise the ordering by shape factor and you can answer half the rolling questions without a pen: sphere 0.4, disc 0.5, shell 0.67, ring 1, fastest to slowest, every time and whatever the masses. for any sliding-becomes-rolling problem take angular momentum about a point on the surface, since friction acts there and its torque vanishes, and the final speed drops out in one line without ever touching μ or the clock. worth carrying beyond the syllabus: a solid sphere thrown at v<sub>0</sub> without spin reaches pure rolling at 5v<sub>0</sub>/7 after a time 2v<sub>0</sub>/(7μg) and a distance 12v<sub>0</sub><sup>2</sup>/(49μg), having burnt exactly two sevenths of its kinetic energy as heat. friction sets the schedule, never the destination."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "pure rolling: <i>v</i><sub>cm</sub> = <i>R</i>ω and <i>a</i><sub>cm</sub> = <i>R</i>α", "note": "and only then; the moment it slips, every line below fails" },
            { "f": "contact 0 · centre <i>v</i> · top 2<i>v</i>", "note": "but the contact point still accelerates upward at <i>v</i><sup>2</sup>/<i>R</i>" },
            { "f": "<i>KE</i> = ½<i>mv</i><sup>2</sup>(1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) · split 1 : <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>", "note": "the rotational tax, and it appears in the dynamics too" },
            { "f": "<i>a</i> = <i>g</i> sin θ ÷ (1 + <i>K</i><sup>2</sup>/<i>R</i><sup>2</sup>) · μ<sub>min</sub> = tan θ ÷ (1 + <i>R</i><sup>2</sup>/<i>K</i><sup>2</sup>)", "note": "note the bracket inverts in the second one" },
            { "f": "sphere 2/5 · disc 1/2 · shell 2/3 · ring 1", "note": "mass and radius never matter; static friction does no work" }
          ],
          "aids": [
            "\"compact wins: sphere, disc, shell, ring\"",
            "\"bottom is frozen, top flies at 2v\""
          ]
        }
      ]
    }
  ]
};

export default phy11RotationalMotion;
