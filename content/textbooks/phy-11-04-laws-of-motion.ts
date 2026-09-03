/**
 * Chapter 04 · Laws of Motion. Physics, Class 11.
 *
 * Restructured from pages 194 to 280 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-02-motion-straight-line.ts.
 *
 * EIGHT SOURCE SUBTOPICS, SIX TOPICS, AND WHY. This range is not one document
 * but three, stacked: Part I (pages 194 to 245) carries Subtopics 1 to 5
 * (Newton's Laws and Impulse, Momentum Conservation, Concurrent Forces and
 * Equilibrium, Friction, Circular Motion Dynamics/Banking); Part II (pages 246
 * to 267), headed "Coverage Completion", adds Subtopics 6 to 8 (Common Forces
 * and Free-Body Diagrams, Connected Bodies/Pulleys/Constraints, Vertical
 * Circular Motion) and says in its own preamble that without them "a student
 * cannot say they know everything about this chapter"; the Round 2 Addendum
 * (pages 268 to 280) adds A to D. So the source honestly has eight subtopics,
 * and the schema caps a chapter at six topics (lib/textbooks.ts, enforced by
 * scripts/validate-chapters.mjs). Two merges close that gap, and both are
 * unions of material the source itself cross-references rather than
 * convenience packing:
 *
 *   - Topic 03 = Subtopic 6 + Subtopic 3. Subtopic 6 is the force vocabulary
 *     and the FBD method that, in its own words, "all of Subtopics 1 to 5
 *     silently assumed"; Subtopic 3 is what you do with that vocabulary when
 *     the forces balance. One is the noun list, the other the first verb.
 *   - Topic 06 = Subtopic 5 + Subtopic 8. Subtopic 8 opens by naming itself
 *     "the vertical-circle case that Part I's banking subtopic did not cover".
 *     Same centripetal equation, one with gravity along the axis and one with
 *     gravity in the plane of the motion.
 *
 * Nothing was split, nothing padded. The remaining four topics are Subtopics
 * 1, 2, 4 and 7 unchanged, in the source's own order.
 *
 * THE ROUND 2 ADDENDUM IS NOT A TOPIC, per the brief, and every line drawn
 * from it below sits in a `protip`, a `mistakes` item, or the hardest `ex` or
 * `mcq` of the group it extends: Addendum A (multi-pulley constraints) into
 * Topic 05, Addendum B (stacked blocks) into Topic 05, Addendum C (the full
 * force budget on a rough incline) into Topic 04, Addendum D (chains and
 * rockets done exactly) into Topics 01 and 02. No `formula`, `defgrid`,
 * `deriv` or `proc` block below is sourced from the addendum: where a result
 * appears in both places, the version printed is Part I's or Part II's. Topic
 * 05's formula card, for instance, states the movable-pulley factor of two
 * exactly as Subtopic 7 does, and the addendum's general n-segment
 * proof of it is confined to that topic's `protip`.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five pages, every entry read).
 * TWO ENTRIES TOUCH THIS RANGE, both on the same Crack-the-MCQ page of
 * Subtopic 7, and one of them is a real physics error, not a typographic one:
 *
 *   - Page 978, "Chapter 4: Laws of Motion, Page 59 - Crack the MCQ Q1
 *     (Atwood machine, equal masses): duplicated option label and wrong marked
 *     answer". The printed option list runs (a), (b), (b), (c), and the key
 *     marks "has zero tension" as correct. That is wrong: two equal masses on
 *     an ideal Atwood machine give a = 0 and T = mg, so the string is under
 *     tension, not slack. The errata's fix is to relabel the four options in
 *     order and mark "remains at rest or moves at constant velocity, with
 *     T = mg" correct. Topic 05's MCQ on this exact question below is authored
 *     with four properly labelled options and keys the T = mg answer, so the
 *     defect cannot propagate; the wrong option is kept as a distractor with a
 *     nudge that names the trap.
 *   - Page 979, "a second duplicated option label" on a later question of the
 *     same section: the constraint MCQ prints "a1m1 = a2m2" as a second "(b)"
 *     while its own explanation refers to "(c) and (d)". Purely a labelling
 *     slip; the physics (an inextensible string over one fixed pulley forces
 *     equal-magnitude accelerations) is right. Topic 05's constraint MCQ is
 *     authored fresh with four distinct options.
 *
 * No other errata entry names Chapter 4.
 *
 * CORRECTIONS BEYOND THE ERRATA: none found. Every worked example, every
 * practice answer and every MCQ key in all eight subtopics was recomputed
 * independently, as were all nine Round 2 Addendum examples and all sixteen of
 * its practice answers. All match the source's printed values. Spot list of
 * the ones most likely to hide an error, all confirmed: Subtopic 1's sand-on-
 * belt triple (6 N, 6 W, 12 W, the missing 6 W to friction); Subtopic 2's shell
 * explosion (5 root 13 = 18.03 m/s at 33.69 degrees below the horizontal) and
 * its e = 0.8 double bounce (e to the fourth times 10 = 4.096 m); Subtopic 3's
 * horizontal-string incline (N = 100/root 3 = 57.7 N, T = 50/root 3 = 28.9 N)
 * and the truck pendulum solved three ways (25 N by components, by dividing the
 * equations, and as m times root(g squared plus a squared) = 2 times 12.5);
 * Subtopic 4's optimal drag angle (75 N horizontal against 60 N at the angle of
 * friction, exactly mg sin lambda); Subtopic 5's banking-with-friction
 * (root 1200 = 34.6 m/s against a design speed of root 450 = 21.2 m/s) and the
 * v_min = 0 practice item, which is correct precisely because tan theta equals
 * mu there; Subtopic 7's Atwood-in-a-lift (g_eff = 12, a_rel = 6 m/s^2,
 * T = 18 N); Subtopic 8's leaving-a-sphere angle (cos theta = 2/3); Addendum
 * A.2's four-equation multi-pulley solve, where the sign of a comes out
 * negative and the source correctly reads that as m1 rising; Addendum B.2's
 * three-ceiling regime map; Addendum C.2's optimal hold and haul (5.6 N and
 * 20 N, both exactly 20 percent under the parallel-force values); Addendum
 * D.3's rocket with gravity (158 m/s minus 100 m/s = 58 m/s). This matches the
 * physics pilot's outcome, where re-solving also found nothing, and is unlike
 * the maths chapters, where it found dozens: this book's arithmetic is clean
 * and only its PDF extraction is damaged.
 *
 * SOURCE DAMAGE. All four patterns the brief names appear in this range, plus
 * three more. Every passage below was re-authored from context and physics,
 * never transcribed:
 *
 *   - GREEK LETTERS AND ACCENTS DROP WITH NO PLACEHOLDER, and because this is
 *     the friction-and-incline chapter the damage is everywhere. Page 226's
 *     Figure 4.4 caption extracts as "mg resolved into mg sinalong and mg
 *     cosperpendicular to the incline ... At the verge of sliding, the
 *     down-slope pull is exactly balanced by limiting friction: sin = = cos
 *     Cancel and divide: tan =  But the angle of friction is defined by
 *     tan = . Therefore: = ". Re-authored as: mg resolves into mg sin(theta)
 *     along and mg cos(theta) perpendicular; at the verge mg sin(theta) =
 *     mu_s N = mu_s mg cos(theta), so tan(theta_r) = mu_s = tan(lambda) and
 *     theta_r = lambda. That reconstruction is the whole of Topic 04's
 *     angle-of-repose derivation, and it is confirmed by the same page's
 *     surviving prose ("the steepest safe slope is set entirely by the
 *     surfaces' grip, independent of the block's mass"). The same loss hits
 *     "coefficient offriction" (page 224, "coefficient of friction"), every
 *     "mu_s", every "theta", every "lambda", and Figure 4.6's and 4.7's whole
 *     captions.
 *   - HEADING RUNS ARRIVE ASCII-SHIFTED BY EXACTLY +29. Confirmed on the
 *     addendum's own headings, where "$GGHQGXP$" decodes to "AddendumA"
 *     (G = 71, 71 + 29 = 100 = d). Page numbers in those runs shift too, so
 *     every page number cited in this header was read from the page foot
 *     instead, which is unshifted.
 *   - INTER-WORD SPACES VANISH at tight kerning, pervasively. Instances behind
 *     prose used below: "stayat rest" and "hisdistance" style joins on page 195
 *     ("a body at rest genuinely wants to stay at rest"), "isthe whole of
 *     Newton's First Law" (page 195), "changeit" (page 195), "fallsforward"
 *     (page 201), "coefficient-of-restitution numericals" arriving as
 *     "coefficient-of-restitutionnumericals" (page 204), "thebalancing force"
 *     (page 216), "notparallel to the incline" (page 218), "isnot mu_s N until
 *     the body is about to move" (page 228), "dropsfrom 8 N to 6 N" (page 228),
 *     "stillaccelerating" (page 235), "demandsa net inward force" (page 235),
 *     "notthe reaction to centripetal" (page 245).
 *   - THE PILOT'S "\n7" FOR A MINUS SIGN IS HERE TOO, and so are three
 *     siblings the pilot did not meet. In this range "\n7" is U+2212 (page 226
 *     "N = mg \n7 F sin theta" is N = mg - F sin(theta); page 229 "20 \n7 6 =
 *     5a"), "\nN" is the multiplication sign (page 218 "5 \nN 10"; page 229
 *     "0.2 \nN 3 \nN 10 = 6"), and "\nK" is the degree sign (page 216 "each
 *     making an angle of 30 \nK with the beam"). All three were decoded by the
 *     arithmetic they sit inside: 5 x 10 = 50 forces "\nN" to be a times sign,
 *     20 - 6 = 5a with a = 2.8 forces "\n7" to be a minus.
 *   - PART II IS SET IN A DIFFERENT PIPELINE AND ARRIVES IN OCTAL ESCAPES AND
 *     SUBSTITUTE GLYPHS. Across pages 246 to 267 only, "\050" and "\051" are
 *     the parentheses, "\026" is a dash, "\020" and "\021" are the quotation
 *     marks, "\210" is a bullet, "\034" "\035" "\036" "\033" are the fi, fl,
 *     ffi and ff ligatures, and the maths symbols are replaced wholesale:
 *     "∩′′′" is a minus, "∩′▽∞" is an implies arrow, "∩′′∈" is a times sign,
 *     "∩′∞̸" is a degree sign, "∩′∋△" is "much less than", "♮022" is theta and
 *     "♮026" is mu. Page 257's "a = F1 ⇁ 2 ⇁ 3/126/ 2 m/s^2" is
 *     a = F/(1 + 2 + 3) = 12/6 = 2 m/s^2, recovered from the worked line
 *     beneath it. Nothing in Topics 03, 05 or 06 was transcribed from this
 *     stretch; every formula from it was re-derived and then checked against
 *     the surviving numeric answers.
 *   - A DIGIT IMMEDIATELY AFTER A RADICAL SIGN IS SWALLOWED BY THE RADICAL
 *     GLYPH. Page 262 prints the string loop's bottom speed as "p gr" where
 *     the same page's pitfall list, which sets it inline, prints it intact as
 *     root(5gr); page 264's "v = p gR/3" for a block leaving a smooth sphere
 *     is root(2gR/3), not root(gR/3), and the source's own two lines above it
 *     prove it: v^2 = gR cos(theta) with cos(theta) = 2/3 gives v^2 = 2gR/3,
 *     and the energy line v^2 = 2gR(1 - cos theta) gives the same 2gR/3. Topic
 *     06 prints root(2gR/3) and shows both routes. Letters after a radical
 *     survive ("root gr" extracts as a glyph pair that still reads), so only
 *     numerals are affected, which is why this was recoverable at all.
 *   - ONE DEFINITION LINE WAS RECONSTRUCTED FROM A STRAY FRAGMENT. Page 233's
 *     cheat-sheet row for static friction survives only as the run-together
 *     line "Staticfriction(belowlimit):fs=appliedforce,withfs<=musN", orphaned
 *     below the table it belongs to. It is re-authored as "static friction
 *     below the limit: f_s equals the applied tangential force, with
 *     f_s <= mu_s N", which is exactly what the subtopic's own Example 1 and
 *     pitfall list say in full sentences on pages 228 and 233.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Force is
 * [M L T-2] throughout, so only the lines that are not immediately that are
 * spelled out.
 *
 *   - p = mv: [M][L T-1] = [M L T-1]. F = dp/dt: [M L T-1]/[T] = [M L T-2].
 *     F = ma: [M][L T-2] = [M L T-2]. All three agree. OK.
 *   - J = F dt: [M L T-2][T] = [M L T-1], IDENTICAL to momentum, which is the
 *     chapter's own built-in error detector and is why it is printed.
 *   - J = dp and F_avg = dp/dt: [M L T-1] and [M L T-2]. OK.
 *   - Momentum flux F = u dm/dt: [L T-1][M T-1] = [M L T-2]. OK, and this is
 *     the check that the belt and chain results are forces and not powers.
 *   - Perfectly inelastic v = (m1u1 + m2u2)/(m1 + m2): [M L T-1]/[M] =
 *     [L T-1]. OK.
 *   - Elastic pair v1, v2: every coefficient is a mass over a mass, so
 *     dimensionless, times a velocity. [L T-1]. OK.
 *   - e = (v2 - v1)/(u1 - u2): [L T-1]/[L T-1] = [M0 L0 T0], dimensionless, as
 *     the source's own table states.
 *   - v_cm = sum(m v)/sum(m): [M L T-1]/[M] = [L T-1]. OK.
 *   - Thrust = v_rel dm/dt: [L T-1][M T-1] = [M L T-2]. OK. Rocket equation
 *     v - v0 = v_rel ln(m0/m): [L T-1] on both sides, and the logarithm's
 *     argument is a mass over a mass, dimensionless, which is the only way a
 *     log can appear in physics at all.
 *   - W = mg: [M][L T-2] = [M L T-2]. OK.
 *   - Fx = F cos(theta): trigonometric functions are dimensionless, so
 *     [M L T-2]. Same for every resolved component in the chapter.
 *   - Lami, P/sin(alpha) = Q/sin(beta) = R/sin(gamma): each ratio is
 *     [M L T-2]. OK.
 *   - R = m(g +- a): [M][L T-2] = [M L T-2]. F_pseudo = m a0: same. OK.
 *   - Hooke, F = -kx with |F| = kx: for [M L T-2] = [k][L], k must carry
 *     [M T-2], and N/m is indeed kg s-2. Series 1/k_eq = 1/k1 + 1/k2 adds
 *     [M-1 T2]; parallel k_eq = k1 + k2 adds [M T-2]. Both homogeneous. OK.
 *   - T = mg sin(theta), N = mg cos(theta): [M L T-2]. OK.
 *   - g_eff = root(g^2 + a^2): root([L2 T-4]) = [L T-2]. OK.
 *   - f_s <= mu_s N and f_k = mu_k N: for both sides to be [M L T-2], mu must
 *     be [M0 L0 T0]. That is the dimensional proof that a coefficient of
 *     friction is a pure number, which the chapter states and never argues.
 *   - tan(lambda) = mu and tan(theta_r) = mu_s: dimensionless = dimensionless.
 *     OK.
 *   - a = g(sin theta - mu_k cos theta): [L T-2] times a dimensionless
 *     bracket. OK, and the bracket is why the answer can be negative, which is
 *     the chapter's "does it even move" check.
 *   - F_min = mu mg/root(1 + mu^2) = mg sin(lambda): [M L T-2], the
 *     denominator dimensionless. OK.
 *   - Overhang y/L = mu/(1 + mu): dimensionless = dimensionless. OK.
 *   - F_hold,min = mg sin(theta - lambda), F_drag,min = mg sin(theta +
 *     lambda): [M L T-2]. OK. Both angles are pure numbers, so the sum inside
 *     the sine is legal, which a dimensioned quantity inside a sine never is.
 *   - Atwood a = (m1 - m2)g/(m1 + m2): [M][L T-2]/[M] = [L T-2]. Atwood
 *     T = 2 m1 m2 g/(m1 + m2): [M2][L T-2]/[M] = [M L T-2]. OK.
 *   - Contact force N_c = m2 F/(m1 + m2): [M][M L T-2]/[M] = [M L T-2]. OK.
 *   - Table-and-hanging a = m2 g/(m1 + m2), T = m1 m2 g/(m1 + m2): [L T-2] and
 *     [M L T-2]. OK.
 *   - Incline-and-hanging a = (m2 - m1 sin theta)g/(m1 + m2): [L T-2]. OK.
 *   - n-segment rule v_load = v_string/n with n a pure count: [L T-1]. OK.
 *   - Stacked-block slip threshold a_max = mu_s g: [L T-2], and the top mass
 *     has cancelled, which is the result's whole point.
 *   - a_c = v^2/r: [L2 T-2]/[L] = [L T-2]. a_c = omega^2 r: [T-1]2[L] =
 *     [L T-2]. The two agree, which is the check that omega is [T-1] and not
 *     [L T-1].
 *   - F_c = m v^2/r: [M L T-2]. OK.
 *   - v_max = root(mu_s r g): root([L][L T-2]) = root([L2 T-2]) = [L T-1]. OK,
 *     and the source's own MCQ distractor "mu r g" fails exactly this check,
 *     which is how a student can eliminate it without computing.
 *   - tan(theta) = v^2/rg: [L2 T-2]/([L][L T-2]) = dimensionless. OK, and this
 *     is why the banking angle cannot depend on mass.
 *   - Banked with friction, v = root(rg (tan theta +- mu)/(1 -+ mu tan
 *     theta)): the bracket is dimensionless, so [L T-1]. OK.
 *   - Well of death v_min = root(gr/mu): root([L T-2][L]) = [L T-1], mu being
 *     a pure number. OK.
 *   - T_bottom = m v^2/r + mg and T_top = m v^2/r - mg: [M L T-2] on every
 *     term. OK. Their difference 6mg is likewise [M L T-2].
 *   - v_bottom^2 = v_top^2 + 4gr: [L2 T-2] = [L2 T-2] + [L T-2][L]. OK.
 *   - v_top,min = root(gr), v_bottom,min = root(5gr), rod case 2 root(gr):
 *     [L T-1] throughout. OK.
 *   - Leaving a sphere, cos(theta) = 2/3 and v = root(2gR/3): dimensionless
 *     and [L T-1]. OK.
 *
 *   47 formula lines checked, 47 dimensionally consistent. No informal-units
 *   case arose in this chapter (unlike the pilot's nth-second formula).
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES, checked on every printed result.
 * No normal reaction comes out negative anywhere below; where one could
 * (a lift in free fall, a block on the point of leaving a sphere) the chapter
 * says so explicitly and reads N = 0 as "contact is lost", which is Topic 06's
 * whole leaving-the-track method. No friction anywhere exceeds mu N: Topic
 * 04's Example 1 is built around exactly that ceiling, and Topic 05's stacked
 * blocks test it as a hypothesis before using it. No tension pushes: Topic 03
 * states the rule, Topic 05's Atwood check ("T must lie between the two
 * weights") enforces it, and the addendum's negative-tension warning is a
 * `mistakes` item. Limiting cases used where they teach something: the smooth
 * incline at theta = 0 gives T = 0 and N = mg, and at theta = 90 degrees gives
 * T = mg and N = 0 (Topic 03's derivation ends on both); the Atwood machine at
 * m1 = m2 gives a = 0 and T = mg, and at m2 -> 0 gives a -> g and T -> 0
 * (Topic 05); the banked road at mu = 0 collapses both friction formulas back
 * to the single design speed (Topic 06's derivation ends on it, and it is the
 * chapter's recommended instant check); a rocket at burn rate -> 0 reduces to
 * free fall (Topic 02's protip); and the equal-mass elastic collision reduces
 * to a swap (Topic 02's derivation).
 *
 * SEAMS: what is quoted as already known, and from which file.
 *
 *   - phy-11-02-motion-straight-line.ts, Topic 03, supplies the three
 *     equations of motion and free fall. They are used unproved in Topic 01's
 *     bouncing-ball example (root(2gh) for the speeds either side of an
 *     impact), in Topic 02's restitution work, and in Topic 04's incline
 *     acceleration, and are named as that chapter's result rather than
 *     re-derived.
 *   - phy-11-02, Topic 01, supplies the sign-convention discipline ("name your
 *     positive direction before you write a single equation, then hold it").
 *     Topic 01 below restates it in one `def` because this chapter adds two
 *     new ways to break it, the direction of friction and the membership of a
 *     free-body diagram, and then holds it for all six topics.
 *   - phy-11-02, Topic 04, supplies relative velocity and the fact that
 *     relative quantities obey the ordinary equations of motion. Topic 05's
 *     constraint work and Topic 03's pseudo-force work both lean on it without
 *     re-deriving it.
 *   - phy-11-02, Topic 05, supplies a = dv/dt = v dv/dx and the habit of
 *     integrating from the definitions when a is not constant. Topic 01's
 *     impulse derivation is exactly F dt = dp integrated, and says so.
 *   - math-11-12-limits.ts supplies the derivative; integration is NOT in it
 *     (checked: that file teaches derivatives only), and phy-11-02's Topic 05
 *     `think` block already introduced the integral as the power rule run
 *     backward. Topic 01 below therefore uses an integral of F dt without
 *     re-introducing it, quoting the physics chapter rather than the maths one.
 *   - THE SINE RULE IS NOT AVAILABLE. math-11-03-trigonometry.ts states in its
 *     own header that NCERT and the current CBSE Class 11 syllabus have
 *     removed the sine rule, the cosine rule and Heron's formula. Topic 03's
 *     Lami derivation therefore states the sine rule in the step that uses it,
 *     as a one-line given about any triangle, instead of quoting it as known.
 *
 * FIGURES. Thirteen `diagram` blocks, all of kind `plot`, carrying 27 chips
 * between them. All eight figures the source names (4.1 to 4.8) are drawn,
 * none dropped, and no new figure vocabulary is requested. Figures 4.6 and 4.7
 * share one block, because they are the same banked road with friction added,
 * which is exactly what a chip is for; five further figures are designed for
 * material the source describes but never illustrates (impulse as an area, the
 * three ways momentum is shared, the self-adjusting static-friction graph, the
 * three connected-body rigs, and the vertical circle at top and bottom). Per
 * the panel rule, every multi-part figure is chips on one block and never
 * panels inside one frame. Two renderer facts this chapter had to design
 * around, both read out of components/textbook/plot.tsx rather than assumed:
 * a `polys` fill of 'hatch' rules its whole bounding box rather than the
 * polygon, so it is used only on rectangles (beams and ceilings) and never on
 * a triangle; and an `incline` body is always drawn rising to the RIGHT, with
 * its right angle at the bottom right, which fixes the handedness of every
 * incline scene below. That handedness is not cosmetic: on a right-rising
 * slope the outward normal leans up and to the LEFT, so in Figure 4.2 the
 * horizontal string must pull to the right, and in Figures 4.6 and 4.7 the
 * centre of the car's circular path lies to the left, which is why those
 * frames carry a "to centre" arrow pointing that way.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11LawsOfMotion: Chapter = {
  "chapter": "04",
  "title": "Laws of Motion",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Newton's Three Laws, Momentum and Impulse",
      "chip": "01 THE THREE LAWS",
      "kalam": "a force is not something a body has, it is what changes its momentum",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Newton's Laws and Impulse</b><br>This is the spine of all mechanics. JEE Main reliably pulls 1 to 2 questions a year from impulse and momentum, often disguised inside a collision or a variable-mass problem. NEET leans on the conceptual side: inertia, action and reaction, and the impulse as area under the force-time graph. JEE Advanced rarely asks it standing alone but weaves it into multi-body and variable-mass setups. CBSE Boards almost always carries a 2 to 3 mark numerical on the impulse-momentum theorem.<br><br><b>02 · Momentum Conservation</b><br>One of the most heavily examined ideas in all of physics. JEE Main asks 1 to 2 questions almost every year, usually through collisions or recoil. NEET leans conceptual, is momentum conserved here, plus coefficient-of-restitution numericals. JEE Advanced builds it into multi-body, two-dimensional and variable-mass problems. CBSE Boards typically sets a 2 to 3 mark recoil or perfectly-inelastic-collision numerical.<br><br><b>03 · Forces, Free-Body Diagrams and Equilibrium</b><br>The toolkit every other mechanics problem is built from, and a perennial favourite in its own right. JEE Main reliably asks 1 to 2 questions on string-tension equilibrium, blocks on inclines or Lami's theorem, and a wrong normal force silently wrecks one or two more. NEET loves direct conceptual items: which forces are contact forces, why the normal reaction is not always <i>mg</i>, spring combinations, which string breaks first. JEE Advanced assumes flawless free-body diagrams as a prerequisite and tests spring networks and non-inertial-frame equilibrium. CBSE Boards frequently sets a 2 to 3 mark numerical on a hanging mass supported by two strings, or on Hooke's law.<br><br><b>04 · Friction</b><br>One of the highest-yield topics in mechanics. JEE Main asks 1 to 2 questions almost every year: blocks on inclines, connected systems, minimum-force problems. NEET favours conceptual items on the self-adjusting nature of static friction, the angle of repose, and the laws of friction. JEE Advanced layers it into multi-block, stacked and non-inertial setups. CBSE Boards regularly sets a 2 to 3 mark numerical or a definition-plus-graph question.<br><br><b>05 · Connected Bodies, Pulleys and Constraints</b><br>Arguably the most heavily tested problem family in mechanics. JEE Main reliably asks 1 to 2 questions a year on Atwood machines, a block on a table with a hanging mass, blocks in contact, or pulley systems. NEET favours quick one-step versions: the equal-mass Atwood, the tension between two connected blocks. JEE Advanced layers in movable pulleys, constraint relations, and connected systems inside accelerating frames. CBSE Boards regularly sets a 3 mark Atwood-machine or two-block numerical.<br><br><b>06 · Circular Motion: Banking and the Vertical Loop</b><br>A high-yield application of Newton's laws, and the one place students confuse a role with a force. JEE Main asks 1 to 2 questions a year on banking, friction-limited cornering, critical speed in a vertical loop, or a body leaving a curved surface. NEET favours the conceptual side: what actually provides the centripetal force, why a cyclist leans, why a bucket of water does not spill, the string-versus-rod distinction. JEE Advanced builds it into friction-plus-banking ranges and leaving-the-track problems on spheres. CBSE Boards reliably sets the banking-angle derivation or the critical-velocity derivation for 3 to 5 marks."
        },
        {
          "t": "p",
          "html": "You are standing in a crowded Mumbai local, no handrail in reach, when the train jerks forward to leave the platform. Your feet move with the floor. Your upper body, for one heartbeat, stays exactly where it was, and you lurch backward relative to the train. Nobody pushed you. So what threw you? Nothing did, and that is the entire content of <b>Newton's First Law</b>. Your body was at rest and a body at rest genuinely stays at rest; it has no built-in urge to speed up just because the floor underneath it did. That stubbornness has a name, <b>inertia</b>, the reluctance of matter to change whatever state of motion it is already in. The train did not push you backward, it simply ran out from under your lazy upper body."
        },
        {
          "t": "p",
          "html": "Read the First Law carefully and you find it is not really about motion at all, it is about <b>change</b>. A body continues at rest, or moving uniformly in a straight line, unless a net external force compels it to change that state. Constant velocity, zero included, is the free state that costs nothing to maintain; you only need a force to change it. And how much inertia a body has is measured by its <b>mass</b>. A loaded goods wagon is far harder to get rolling, and far harder to stop, than an empty handcart. A cork-and-leather cricket ball can be redirected with a flick of the bat; try that flick on a shot-put and you will hurt your wrists. More mass, more inertia, more stubbornness."
        },
        {
          "t": "p",
          "html": "Now bring motion in and you get <b>momentum</b>, <i>p</i> = <i>mv</i>, literally how much motion a body carries, accounting for both how heavy it is and how fast it is going. A truck crawling at 5 km/h and a motorbike racing at 80 km/h can carry comparable momentum, because the truck makes up in mass what it lacks in speed. Momentum is the quantity Newton actually cared about, and his Second Law in its truest form says <b>force is the rate at which momentum changes</b>. Push twice as hard and momentum changes twice as fast. Only when the mass is constant does that collapse into the familiar <i>F</i> = <i>ma</i>."
        },
        {
          "t": "think",
          "html": "a force is not a thing a body owns, like a mass or a colour. it is an interaction between two bodies, and its whole job is to change momentum. so when a bat meets a ball, or a foot meets a football, or a car meets a crash barrier, stop asking what the force was at each microsecond, because nobody can measure that. ask only for the total kick delivered. that total kick is impulse, and impulse is nothing but the change in momentum."
        },
        {
          "t": "p",
          "html": "<b>Newton's Third Law</b> completes the picture: forces never come alone. When the bat pushes the ball forward, the ball pushes back on the bat, equally hard and in exactly the opposite direction. Here is the part worth tattooing on your brain before exam day: those two forces act on <b>different bodies</b>, which is precisely why they do not cancel. The bat feels one of them and the ball feels the other. A pair of forces can only cancel when both act on the same body, and a Third Law pair never does."
        },
        {
          "t": "def",
          "term": "The sign convention this chapter holds, and the two new ways to break it",
          "html": "Motion in this chapter is still one-dimensional most of the time, so direction is usually a + or a − sign. <b>Name your positive direction before you write a single equation, then hold it for the whole problem.</b> Velocity, momentum, impulse, acceleration and force carry that sign; mass, speed and time never do. This chapter adds two fresh ways to break the rule that the kinematics chapter did not have. First, <b>friction's direction is decided by the relative sliding, not by your convenience</b>: it opposes the slide or the tendency to slide, and it is perfectly capable of pointing forward. Second, <b>a free-body diagram carries only forces acting ON the chosen body</b>: the force that body exerts on something else belongs in the other body's diagram, and putting a Third Law pair into one diagram is the fastest way to get zero for an answer that should not be zero."
        },
        {
          "t": "defgrid",
          "title": "The three laws, and what each one is for",
          "rows": [
            { "k": "First Law", "v": "with no net external force a body keeps its velocity, zero included. It defines inertia and tells you what a force is <i>for</i>" },
            { "k": "Second Law", "v": "<i>F</i><sub>net</sub> = <i>dp</i>/<i>dt</i>, and <i>F</i><sub>net</sub> = <i>ma</i> only while the mass is constant. It quantifies force" },
            { "k": "Third Law", "v": "<i>F<sub>AB</sub></i> = −<i>F<sub>BA</sub></i>: same line of action, opposite directions, <b>different bodies</b>, so never cancelling" },
            { "k": "Inertial frame", "v": "a frame that is not itself accelerating. All three laws hold only here; inside the jerking train they appear to fail" },
            { "k": "Inertia vs weight", "v": "inertia depends only on mass and is the same on the Moon; weight is <i>mg</i> and changes with <i>g</i>. A crate is hard to shove in orbit too" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MOMENTUM AND THE SECOND LAW",
          "tag": "the fundamental form first, the familiar one second",
          "main": "<i>p</i> = <i>mv</i><br><i>F</i><sub>net</sub> = <i>dp</i>/<i>dt</i><br><i>F</i><sub>net</sub> = <i>ma</i>, constant mass only",
          "legend": [
            "<i>p</i> = linear momentum (kg m/s, equivalently N s), <i>m</i> = mass (kg), <i>v</i> = velocity (m/s)",
            "<i>F</i> = force (newton, N, which is kg m/s<sup>2</sup>), <i>a</i> = acceleration (m/s<sup>2</sup>), <i>t</i> = time (s)",
            "dimensions: momentum [M L T<sup>−1</sup>], force [M L T<sup>−2</sup>]"
          ],
          "note": "The middle line is the law. The bottom line is the middle line with the mass pulled out of the derivative, which is legal only when the mass does not change. Rockets, falling chains and sand landing on a belt all break that condition."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · IMPULSE, AND THE THEOREM THAT MAKES IT USEFUL",
          "main": "<i>J</i> = <i>F</i> Δ<i>t</i>, constant force<br><i>J</i> = ∫ <i>F</i> <i>dt</i> = area under the <i>F</i>–<i>t</i> graph<br><i>J</i> = Δ<i>p</i> = <i>mv<sub>f</sub></i> − <i>mv<sub>i</sub></i><br><i>F</i><sub>avg</sub> = Δ<i>p</i> / Δ<i>t</i>",
          "legend": [
            "<i>J</i> = impulse (N s, which is kg m/s), <i>F</i> = force (N), Δ<i>t</i> = duration of the interaction (s)",
            "<i>v<sub>i</sub></i>, <i>v<sub>f</sub></i> = velocities just before and just after (m/s), <i>m</i> = mass (kg)",
            "impulse and momentum share the dimensional formula [M L T<sup>−1</sup>], so N s and kg m/s are the same unit"
          ],
          "note": "That shared unit is a free error detector. If an impulse ever comes out in joules or in newtons, stop and recheck the algebra before committing the answer."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE F = ma ACTUALLY COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "<i>F</i> = <i>dp</i>/<i>dt</i> = <i>d</i>(<i>mv</i>)/<i>dt</i>",
              "why": "Start from the real statement of the Second Law, not the school one. Momentum, not acceleration, is the quantity a force genuinely controls."
            },
            {
              "eq": "assume <i>m</i> is constant, so <i>F</i> = <i>m</i> <i>dv</i>/<i>dt</i>",
              "why": "This is an explicit assumption, not a step of algebra. A constant mass slides out of the derivative; a changing mass does not, and that single line is the whole reason rockets need different treatment."
            },
            {
              "eq": "<i>dv</i>/<i>dt</i> is acceleration, so <i>F</i> = <i>ma</i>",
              "why": "The familiar form, now with its licence stamped on it. Notice what falls out for free: set <i>F</i> = 0 and you get <i>a</i> = 0, so the velocity never changes, which is exactly the First Law. The First Law lives inside the Second."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE IMPULSE-MOMENTUM THEOREM, TAP A LINE",
          "steps": [
            {
              "eq": "<i>F</i> = <i>dp</i>/<i>dt</i>, so <i>F</i> <i>dt</i> = <i>dp</i>",
              "why": "Multiply both sides by <i>dt</i>. This is the same move you already used in kinematics to turn <i>a</i> = <i>dv</i>/<i>dt</i> into an integral."
            },
            {
              "eq": "∫ <i>F</i> <i>dt</i> from <i>t</i><sub>1</sub> to <i>t</i><sub>2</sub> = ∫ <i>dp</i> from <i>p<sub>i</sub></i> to <i>p<sub>f</sub></i>",
              "why": "Integrate over the whole duration of the interaction, from the instant contact begins to the instant it ends."
            },
            {
              "eq": "<i>J</i> = <i>p<sub>f</sub></i> − <i>p<sub>i</sub></i> = <i>mv<sub>f</sub></i> − <i>mv<sub>i</sub></i>",
              "why": "The left side is the impulse by definition; the right side integrates cleanly to the change in momentum. The power of this is what it lets you skip: you never needed the force at each microsecond of a collision, only the momentum at the two endpoints. A spiky, unmeasurable force has been sidestepped entirely."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.A · IMPULSE IS AN AREA",
          "chips": ["a steady push", "a real impact"],
          "captions": [
            "A steady 6 N held for 6 s. The rectangle's area, 36 N s, is the entire change in momentum the body receives. Nothing else about the force matters.",
            "The same 36 N s delivered by a force that climbs to 12 N and is gone inside 6 s. Different force at every single instant, identical total kick, identical change in momentum. That is why impulse is worth defining at all."
          ],
          "frames": [
            {
              "x": [0, 7], "y": [0, 14],
              "axisX": "t (s)", "axisY": "F (N)",
              "ticksX": { "at": [0, 2, 4, 6] }, "ticksY": { "at": [0, 6, 12] },
              "curves": [{ "c": "line", "m": 0, "k": 6 }],
              "polys": [
                { "pts": [[0, 0], [0, 6], [6, 6], [6, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "36 N s" }
              ]
            },
            {
              "x": [0, 7], "y": [0, 14],
              "axisX": "t (s)", "axisY": "F (N)",
              "ticksX": { "at": [0, 2, 4, 6] }, "ticksY": { "at": [0, 6, 12] },
              "curves": [{ "c": "pts", "pts": [[0, 0], [4, 12], [6, 0]] }],
              "polys": [
                { "pts": [[0, 0], [4, 12], [6, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "36 N s" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any impulse or average-force question",
          "steps": [
            "<b>Fix a positive direction and write both velocities with signs.</b> A ball that arrives at 30 m/s and leaves at 40 m/s the other way is <i>v<sub>i</sub></i> = −30 m/s and <i>v<sub>f</sub></i> = +40 m/s, never 40 − 30.",
            "<b>Compute the momentum at the two endpoints only.</b> <i>p<sub>i</sub></i> = <i>mv<sub>i</sub></i> and <i>p<sub>f</sub></i> = <i>mv<sub>f</sub></i>. What happened in between is deliberately none of your business.",
            "<b>Impulse is the difference, <i>J</i> = <i>p<sub>f</sub></i> − <i>p<sub>i</sub></i>,</b> and it carries a direction. Quote it.",
            "<b>For the average force, divide by the contact time,</b> <i>F</i><sub>avg</sub> = <i>J</i>/Δ<i>t</i>. A short contact time is what makes impact forces enormous.",
            "<b>Check the unit.</b> Impulse must land in N s or kg m/s. Anything else means a slip upstream."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A cricket ball of mass 0.16 kg moves toward a batsman at 30 m/s. He hits it straight back along the same line at 40 m/s. The bat and ball are in contact for 0.01 s. Find the impulse given to the ball and the average force the bat exerts.",
          "steps": [
            "Take the direction away from the batsman as positive. Then <i>v<sub>i</sub></i> = −30 m/s and <i>v<sub>f</sub></i> = +40 m/s.",
            "<i>J</i> = <i>mv<sub>f</sub></i> − <i>mv<sub>i</sub></i> = 0.16(+40) − 0.16(−30) = 6.4 + 4.8 = 11.2 N s.",
            "<i>F</i><sub>avg</sub> = <i>J</i>/Δ<i>t</i> = 11.2/0.01 = 1120 N.",
            "The marks here are won entirely by the sign convention. Writing <i>J</i> = 0.16(40 − 30) = 1.6 N s forgets that the ball reversed direction, and loses almost everything."
          ],
          "ans": "J = 11.2 N s away from the batsman · F<sub>avg</sub> = 1120 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A rifle of mass 4 kg fires a bullet of mass 20 g at a muzzle speed of 400 m/s. What is the recoil speed of the rifle?",
          "steps": [
            "The instinct is to reach for energy, or to hunt for the force during firing. Do neither. The word fires, with no external horizontal force, means momentum is conserved.",
            "Everything is at rest before firing, so the total momentum is zero, and the two momenta afterwards must cancel: <i>m</i><sub>bullet</sub><i>v</i><sub>bullet</sub> = <i>m</i><sub>rifle</sub><i>v</i><sub>rifle</sub>.",
            "Convert 20 g to 0.02 kg on sight. <i>v</i><sub>rifle</sub> = (0.02)(400)/4 = 8/4 = 2 m/s.",
            "Eliminate any option saying 2 m/s in the same direction as the bullet on physics alone: recoil is always backward."
          ],
          "ans": "2 m/s, opposite to the bullet"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A ball of mass 0.5 kg is dropped from a height of 5 m onto a hard floor and rebounds to a height of 1.8 m. Find the magnitude of the impulse the floor delivers to the ball. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Two chapters meet here: kinematics gives the speeds, the impulse-momentum theorem does the rest.",
            "Speed just before impact, free fall through 5 m: <i>v</i><sub>1</sub> = √(2<i>gh</i><sub>1</sub>) = √100 = 10 m/s downward.",
            "Speed just after, enough to rise 1.8 m: <i>v</i><sub>2</sub> = √(2<i>gh</i><sub>2</sub>) = √36 = 6 m/s upward.",
            "Take upward as positive: <i>J</i> = 0.5(+6) − 0.5(−10) = 3 + 5 = 8 N s, upward.",
            "Note what this already accounts for: the speeds are not equal, because energy was lost in the bounce, and the theorem never assumed they were. Gravity's impulse during the brief contact is negligible beside the floor's, which is why it is ignored."
          ],
          "ans": "8 N s, directed upward"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Dry sand falls vertically at a steady 3 kg/s from a stationary hopper onto a horizontal conveyor belt moving at a constant 2 m/s. Find the horizontal force the motor must supply, the rate at which the sand gains kinetic energy, and the rate at which the motor does work. Explain the difference.",
          "steps": [
            "The mass being accelerated is changing, so <i>F</i> = <i>ma</i> is illegal here and you must use <i>F</i> = <i>dp</i>/<i>dt</i>.",
            "Each second, 3 kg of sand lands with zero horizontal velocity and must be brought up to 2 m/s. <i>F</i> = <i>u</i>(<i>dm</i>/<i>dt</i>) = (2)(3) = 6 N. There is no <i>m</i>(<i>dv</i>/<i>dt</i>) term because the belt's own speed never changes.",
            "Rate of kinetic energy gained by the sand: <i>d</i>(KE)/<i>dt</i> = ½(<i>dm</i>/<i>dt</i>)<i>u</i><sup>2</sup> = ½(3)(4) = 6 W.",
            "Rate of work by the motor: its 6 N acts on a belt surface moving at 2 m/s, so <i>P</i> = <i>Fu</i> = 12 W.",
            "The motor does 12 W and the sand gains only 6 W. The missing 6 W is dissipated as heat by friction during the brief slipping while each grain is dragged up to belt speed. Exactly half the work is always lost this way, and that factor of two is the signature of this whole problem class."
          ],
          "ans": "F = 6 N · sand gains 6 W · motor does 12 W · the missing 6 W goes to friction"
        },
        {
          "t": "mcq",
          "q": "A passenger standing in a bus falls forward when the bus stops suddenly. The best explanation is:",
          "opts": [
            { "label": "a forward force acts on the passenger because of the braking", "nudge": "The classic trap. There is no forward force at all: the lurch is the <i>absence</i> of a stopping force on the upper body, not the presence of a forward one." },
            { "label": "the lower body stops with the bus while the upper body keeps moving forward by inertia", "nudge": null },
            { "label": "friction between the feet and the floor pushes the passenger forward", "nudge": "Backwards: friction at the feet is what decelerates the lower body, so it acts against the forward motion, it does not cause it." },
            { "label": "the passenger's weight momentarily increases", "nudge": "This confuses inertia with weight. Weight is <i>mg</i> and is unchanged here; the effect is entirely about inertia." }
          ],
          "correct": 1,
          "solution": "The feet, gripped by friction, decelerate with the bus. The upper body, obeying inertia of motion, keeps going. The body therefore pitches forward."
        },
        {
          "t": "mcq",
          "q": "Two forces deliver the same impulse to a body. Force A is large and acts for a short time; force B is small and acts for a long time. Which quantity must be the same for both?",
          "opts": [
            { "label": "the acceleration produced", "nudge": "A large force gives a large acceleration. Equal impulses say nothing about the accelerations, which here clearly differ." },
            { "label": "the change in kinetic energy", "nudge": "The strongest distractor. Equal impulse does not mean equal work: a change in kinetic energy depends on the distance over which the force acts, not on the time." },
            { "label": "the change in momentum", "nudge": null },
            { "label": "the maximum force reached", "nudge": "The question itself says one force is large and the other small, so the peaks are different by construction." }
          ],
          "correct": 2,
          "solution": "Impulse is defined as the change in momentum, so equal impulses mean equal Δ<i>p</i>, however the force was spread over time."
        },
        {
          "t": "mcq",
          "q": "A ball of mass <i>m</i> hits a wall head on at speed <i>v</i> and rebounds with the same speed <i>v</i>. The magnitude of the impulse on the ball is:",
          "opts": [
            { "label": "zero", "nudge": "The trap for anyone reasoning same speed in, same speed out, so no change. Velocity is a vector and its direction flipped, so the change is real and it is large." },
            { "label": "<i>mv</i>", "nudge": "This counts the outgoing momentum only and forgets the reversal, halving the true answer." },
            { "label": "2<i>mv</i>", "nudge": null },
            { "label": "½<i>mv</i>", "nudge": "No physical basis at all; it is a pure distractor built from the ½ in the kinetic energy formula." }
          ],
          "correct": 2,
          "solution": "Take the rebound direction as positive. The velocity goes from −<i>v</i> to +<i>v</i>, a change of 2<i>v</i>, so |<i>J</i>| = |<i>mv</i> − <i>m</i>(−<i>v</i>)| = 2<i>mv</i>."
        },
        {
          "t": "mcq",
          "q": "A chain of linear density λ falls from rest onto a weighing pan and piles up. When a length <i>x</i> has landed, the pan reads:",
          "opts": [
            { "label": "λ<i>xg</i>, the weight of the pile", "nudge": "This is only the static half. It ignores the force needed to stop the links that are still arriving, which is the whole point of the problem." },
            { "label": "2λ<i>xg</i>", "nudge": "This adds one static weight to itself. The arriving links contribute 2λ<i>xg</i>, not λ<i>xg</i>, because they land at √(2<i>gx</i>)." },
            { "label": "3λ<i>xg</i>", "nudge": null },
            { "label": "λ<i>xg</i>/2", "nudge": "Below the dead weight alone, which is impossible: the pan must at least support what is lying on it." }
          ],
          "correct": 2,
          "solution": "A link arrives at <i>v</i> = √(2<i>gx</i>) and stops dead, so the flux term is λ<i>v</i><sup>2</sup> = 2λ<i>xg</i>. Adding the pile's own weight λ<i>xg</i> gives 3λ<i>xg</i>, of which only a third is genuine weight. It is the conveyor belt's factor of two wearing a different hat."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A force of 20 N acts for 3 s on a 4 kg body initially at rest. Find the impulse delivered and the final velocity.", "a": "<i>J</i> = <i>F</i>Δ<i>t</i> = (20)(3) = 60 N s. Then <i>v</i> = <i>J</i>/<i>m</i> = 60/4 = 15 m/s." },
            { "q": "[NEET] A 0.05 kg ball strikes a vertical wall horizontally at 10 m/s and rebounds at 8 m/s. Find the magnitude of the change in its momentum.", "a": "Taking the rebound as positive: |Δ<i>p</i>| = 0.05(8) − 0.05(−10) = 0.4 + 0.5 = 0.9 kg m/s." },
            { "q": "[JEE Main] A machine gun fires 25 g bullets at 500 m/s, releasing 4 bullets each second. What average force must the shooter exert to hold it steady?", "a": "Momentum leaving per second = 4(0.025)(500) = 50 kg m/s per second, so <i>F</i> = 50 N." },
            { "q": "[JEE Main] A variable force acts on a 2 kg body at rest. Its force-time graph rises linearly from 0 to 12 N over 4 s, then falls linearly back to 0 over the next 2 s. Find the speed at <i>t</i> = 6 s.", "a": "Impulse = area of the triangle = ½(6)(12) = 36 N s. Then <i>v</i> = 36/2 = 18 m/s." },
            { "q": "[JEE Advanced] A trolley of mass 8 kg slides frictionlessly at 3 m/s. Rain falls vertically and collects in it at 0.5 kg/s. Find its speed after 4 s.", "a": "Rain adds no horizontal momentum, so <i>Mv</i><sub>0</sub> = (<i>M</i> + <i>m</i>)<i>v</i> with <i>m</i> = 2 kg: <i>v</i> = 24/10 = 2.4 m/s." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting that momentum and impulse are vectors.</b> The single biggest source of lost marks in this topic. When a ball reverses, its speed may be unchanged but its velocity changes sign, so Δ<i>p</i> can be as large as 2<i>mv</i>, never zero. Fix a positive direction <i>before</i> substituting a single number.",
            "<b>Believing action and reaction cancel.</b> They are equal and opposite, yes, but they act on two different bodies, so they can never cancel on one body. The force on the bat and the force on the ball are a Third Law pair, and neither one is cancelled by anything.",
            "<b>Using <i>F</i> = <i>ma</i> when the mass changes.</b> Rockets, falling chains, sand on belts, a leaking trolley: the moment the mass is variable, retreat to <i>F</i> = <i>dp</i>/<i>dt</i>. Substituting into <i>ma</i> here is a guaranteed wrong answer, and the sand-on-belt example shows exactly how far wrong.",
            "<b>Confusing inertia with weight.</b> Inertia depends only on mass and is the same on the Moon as on Earth; weight is the gravitational force and follows <i>g</i>. A heavy crate is hard to push in orbit too, and that is inertia, not weight.",
            "<b>Applying Newton's laws inside an accelerating frame without saying so.</b> Inside the jerking train you appear to be pushed backward by nothing at all. The laws hold only in inertial frames; the fix is a pseudo-force, which Topic 03 sets up properly."
          ]
        },
        {
          "t": "protip",
          "html": "run the unit check on every impulse you write: impulse and momentum share the dimensions [M L T<sup>−1</sup>], so N s and kg m/s are the same thing, and an answer that lands in joules or newtons is an algebra error you can catch in five seconds. and when a problem has mass crossing a boundary, sand landing on a belt, a chain piling on a scale, a rocket burning fuel, write <i>F</i> = <i>v</i>(<i>dm</i>/<i>dt</i>) and expect a factor of two somewhere: the belt loses exactly half its work to friction, the falling chain makes the scale read exactly three times the dead weight. both come from the same momentum-flux term."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>p</i> = <i>mv</i> · <i>F</i> = <i>dp</i>/<i>dt</i> · <i>F</i> = <i>ma</i> only if <i>m</i> is constant", "note": "the middle one is the law, the last one is a special case with conditions" },
            { "f": "<i>J</i> = <i>F</i>Δ<i>t</i> = ∫<i>F dt</i> = Δ<i>p</i>", "note": "impulse is the area under the force-time graph, and it equals the change in momentum" },
            { "f": "N s and kg m/s are the same unit", "note": "[M L T<sup>−1</sup>] for both: a free check on every answer" },
            { "f": "<i>F<sub>AB</sub></i> = −<i>F<sub>BA</sub></i>, on different bodies", "note": "which is exactly why a Third Law pair never cancels" },
            { "f": "mass crossing a boundary: <i>F</i> = <i>v</i>(<i>dm</i>/<i>dt</i>)", "note": "sand on a belt, 6 N; chain on a scale, three times the dead weight" }
          ],
          "aids": [
            "\"inertia in, force changes, pairs push back\"",
            "\"big force short time, small force long time, same total kick\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Conservation of Momentum, Collisions and Recoil",
      "chip": "02 MOMENTUM",
      "kalam": "no doors on the room, so the total never changes",
      "blocks": [
        {
          "t": "p",
          "html": "You have seen this on every Diwali. A rocket sits still on the ground, a jet of hot gas blasts downward, and the rocket streaks up. Nobody is pushing it from above. So where does the upward motion come from? The total amount of motion of rocket-plus-gas was zero before the fuse was lit, and it is still zero afterwards. It has only been <b>redistributed</b>. The gas rushes down carrying a large chunk of downward momentum, so the rocket must carry an equal chunk of upward momentum to keep the books balanced. The grand total never changes. That is the <b>principle of conservation of linear momentum</b>, and it is arguably the single most powerful problem-solving tool you will meet in mechanics."
        },
        {
          "t": "p",
          "html": "You already know why it is true, from the last topic. When no net external force acts on a system, the total momentum stays constant, because the internal forces always come in equal-and-opposite Third Law pairs and cancel in the sum. Here the job is to <b>use</b> it. The everyday versions are everywhere: stand on a skateboard and throw a heavy bag forward and you roll backward; step off a small boat onto a jetty and the boat scoots away behind you; fire a rifle and it kicks into your shoulder. In every case you push something one way and the system pushes you the other, and the total is unchanged. That one idea cracks open three whole families of problem: <b>recoil and explosions</b>, where one body becomes two or more that fly apart; <b>collisions</b>, where two bodies meet, interact briefly and then separate or stick; and <b>variable-mass systems</b>, where rockets throw mass backward, chains pile up and raindrops grow as they fall. In every one of them you write down the total momentum before, write it down after, and set the two equal."
        },
        {
          "t": "think",
          "html": "picture momentum as cash in a sealed room with no doors. the people inside can hand notes to each other all day, that is the internal forces, but not a single rupee can enter or leave. so the total in the room is fixed even while individual wallets fatten and thin. the no doors condition is the crucial one, and it is exactly the requirement that no net external force acts. choose your system so the troublesome forces end up inside the room."
        },
        {
          "t": "p",
          "html": "A companion idea decides what else survives. Momentum is conserved in <b>every</b> collision, as long as external forces are negligible during the brief impact. <b>Kinetic energy is a different matter</b>: it is conserved only in a perfectly <b>elastic</b> collision, two carrom coins or near-ideal billiard balls. In a real-world crunch, two cars crumpling or a ball of clay hitting a wall, some kinetic energy becomes heat, sound and permanent deformation. That collision is <b>inelastic</b>, and if the bodies end up stuck together it is <b>perfectly inelastic</b>. Confusing these two, and using energy conservation across an impact where it does not hold, is the way this topic is most often failed."
        },
        {
          "t": "def",
          "term": "When momentum is conserved, and along which axis",
          "html": "Conservation needs the net <b>external</b> force on your chosen system to be zero. Three refinements do all the real work. <b>It can hold for an instant without holding for a minute:</b> during a collision or an explosion the internal impulsive forces are enormous compared with gravity or friction, so the system is effectively isolated <i>for that instant</i>, even though gravity changes its momentum between bounces. <b>It applies component by component:</b> if the net external force vanishes only along one axis, momentum is conserved along that axis alone, which is why a shell exploding in mid-air conserves horizontal momentum while gravity is busy changing the vertical. <b>Choosing the system is everything:</b> pick it so the awkward forces become internal, and they cancel themselves."
        },
        {
          "t": "defgrid",
          "title": "Elastic, inelastic, and the number that separates them",
          "rows": [
            { "k": "Every collision", "v": "momentum is conserved, provided the net external force is negligible during the impact" },
            { "k": "Perfectly elastic", "v": "kinetic energy also conserved. Relative speed of separation equals relative speed of approach, so <i>e</i> = 1" },
            { "k": "Inelastic", "v": "some kinetic energy becomes heat, sound and deformation, and <i>e</i> lies strictly between 0 and 1" },
            { "k": "Perfectly inelastic", "v": "the bodies stick together and move as one. Maximum energy loss consistent with momentum, <i>e</i> = 0" },
            { "k": "Coefficient of restitution", "v": "<i>e</i> = (speed of separation)/(speed of approach), dimensionless, 0 ≤ <i>e</i> ≤ 1. For a floor bounce <i>e</i> = √(<i>h</i><sub>up</sub>/<i>h</i><sub>down</sub>)" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CONSERVATION, RECOIL AND THE STICKY COLLISION",
          "tag": "valid when the net external force on the system is zero",
          "main": "Σ <i>m<sub>i</sub>u<sub>i</sub></i> = Σ <i>m<sub>i</sub>v<sub>i</sub></i><br>from rest: <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub> = 0<br>they stick: <i>v</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)",
          "legend": [
            "<i>m</i> = mass (kg), <i>u</i> = velocity before (m/s), <i>v</i> = velocity after (m/s)",
            "the middle line is a recoil or an explosion starting at rest: the two momenta are equal and opposite, so the lighter piece flies off faster",
            "the last line is the perfectly inelastic case, one common velocity for the combined mass"
          ],
          "note": "Every one of these is a vector equation. In two dimensions, conserve the x and y components separately and never add speeds as if they were numbers on a line."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ONE-DIMENSIONAL ELASTIC COLLISION",
          "main": "<i>v</i><sub>1</sub> = ((<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>1</sub> + (2<i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>2</sub><br><i>v</i><sub>2</sub> = ((<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>2</sub> + (2<i>m</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>1</sub><br><i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>",
          "legend": [
            "<i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> = the two masses (kg); <i>u</i>, <i>v</i> = velocities before and after (m/s), signed",
            "every coefficient is a mass over a mass, so it is a pure number, and each whole term is a velocity",
            "the third line says the relative speed of approach equals the relative speed of separation, which is what <i>e</i> = 1 means"
          ],
          "note": "Three special cases are worth memorising as instant answers. Equal masses: they swap velocities. Heavy hits light at rest: the heavy one barely notices, the light one leaves at nearly 2<i>u</i>. Light hits heavy at rest: the light one bounces back at nearly <i>u</i>, the heavy one barely moves."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CENTRE OF MASS, AND THRUST ON A ROCKET",
          "main": "<i>v</i><sub>cm</sub> = Σ <i>m<sub>i</sub>v<sub>i</sub></i> / Σ <i>m<sub>i</sub></i><br><i>F</i><sub>thrust</sub> = <i>v</i><sub>rel</sub> (<i>dm</i>/<i>dt</i>)<br><i>v</i> − <i>v</i><sub>0</sub> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>)",
          "legend": [
            "<i>v</i><sub>cm</sub> = velocity of the centre of mass (m/s), constant whenever the net external force is zero",
            "<i>v</i><sub>rel</sub> = exhaust speed relative to the rocket (m/s), <i>dm</i>/<i>dt</i> = burn rate (kg/s), so thrust is in newtons",
            "<i>m</i><sub>0</sub>, <i>m</i> = initial and current mass (kg); their ratio is a pure number, which is the only kind of thing a logarithm may contain"
          ],
          "note": "The centre of mass line is a free error check: internal forces cannot move it, so <i>v</i><sub>cm</sub> is identical before and after any collision or explosion. Compute it both ways and a sign slip shows up instantly."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ELASTIC COLLISION, AND THE TRICK IN THE MIDDLE",
          "steps": [
            {
              "eq": "momentum: <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)   (i)",
              "why": "Write <i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub> and rearrange so each mass sits with its own change of velocity."
            },
            {
              "eq": "energy: <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>)(<i>u</i><sub>1</sub> + <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)(<i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>)   (ii)",
              "why": "Kinetic energy is conserved because the collision is elastic. Cancel the ½ throughout, group by mass as before, and factor each side as a difference of two squares."
            },
            {
              "eq": "divide (ii) by (i): <i>u</i><sub>1</sub> + <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>",
              "why": "The clever step. The factors <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) and <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>) cancel cleanly, and a quadratic problem becomes a linear one."
            },
            {
              "eq": "so <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>",
              "why": "A beautiful intermediate result in its own right: in an elastic collision the relative velocity of approach equals the relative velocity of separation. This is precisely why the coefficient of restitution is defined the way it is, and why <i>e</i> = 1 means elastic."
            },
            {
              "eq": "solve with (i) for <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub>",
              "why": "Two linear equations, two unknowns, giving the standard pair above. Sanity check on the answer: put <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> and the first fractions vanish, leaving <i>v</i><sub>1</sub> = <i>u</i><sub>2</sub> and <i>v</i><sub>2</sub> = <i>u</i><sub>1</sub>. The bodies simply swap velocities, exactly what one carrom coin does to another."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THRUST ON A ROCKET, TAP A LINE",
          "steps": [
            {
              "eq": "at time <i>t</i>: mass <i>m</i>, speed <i>v</i>. In <i>dt</i> it ejects |<i>dm</i>| at <i>v</i><sub>rel</sub> relative to itself",
              "why": "Take the whole system, rocket plus the gas it is about to eject, so the ejection forces are internal and the total momentum is conserved. In the ground frame the gas leaves at <i>v</i> − <i>v</i><sub>rel</sub>."
            },
            {
              "eq": "<i>mv</i> = (<i>m</i> + <i>dm</i>)(<i>v</i> + <i>dv</i>) + (−<i>dm</i>)(<i>v</i> − <i>v</i><sub>rel</sub>)",
              "why": "Momentum before equals momentum after. Here <i>dm</i> is negative, because the rocket loses mass, so (−<i>dm</i>) is the positive mass of gas that left."
            },
            {
              "eq": "expand, drop the second-order term <i>dm dv</i>: 0 = <i>m dv</i> + <i>v</i><sub>rel</sub> <i>dm</i>",
              "why": "A product of two infinitesimals is negligible beside either one alone. This is the same order-of-smallness argument that lets you differentiate a product at all."
            },
            {
              "eq": "<i>m</i>(<i>dv</i>/<i>dt</i>) = −<i>v</i><sub>rel</sub>(<i>dm</i>/<i>dt</i>)",
              "why": "The right side is the thrust: the effective forward force the engine provides, equal to the exhaust speed times the rate at which mass is burnt. Note that a rocket does not push on air. It speeds up purely by throwing mass backward, which is momentum conservation in its rawest form."
            },
            {
              "eq": "integrate, ignoring gravity: <i>v</i> − <i>v</i><sub>0</sub> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>)",
              "why": "The celebrated rocket equation. With uniform gravity switched on you simply subtract <i>gt</i>, and the limit is worth seeing: let the burn rate go to zero and the logarithm dies, leaving <i>v</i> = −<i>gt</i>. The rocket becomes a falling brick, correctly."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.B · ONE ENCOUNTER, THREE ENDINGS",
          "chips": ["before the hit", "elastic: they swap", "they stick together"],
          "captions": [
            "Two equal masses on a smooth floor. The left one arrives at u, the right one waits. Total momentum, mu, pointing right.",
            "A perfectly elastic head-on hit between equal masses. The incoming block stops dead and the struck block leaves at exactly u. Momentum mu, unchanged; kinetic energy also unchanged, which is what elastic means.",
            "The same encounter, perfectly inelastic. The two lock together and the combined 2m moves off at u/2. Momentum is still mu, but the kinetic energy has halved: the missing half went to heat and deformation."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.225], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [3, 1.8], "w": 1.3, "h": 0.9, "label": "m" },
                { "kind": "block", "at": [7, 1.8], "w": 1.3, "h": 0.9, "label": "m" }
              ],
              "arrows": [
                { "from": [3.75, 1.8], "to": [5.5, 1.8], "tone": "amber", "label": "u", "at": "end" }
              ],
              "labels": [{ "x": 7, "y": 3.3, "text": "at rest" }]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.225], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [3, 1.8], "w": 1.3, "h": 0.9, "label": "m" },
                { "kind": "block", "at": [7, 1.8], "w": 1.3, "h": 0.9, "label": "m" }
              ],
              "arrows": [
                { "from": [7.75, 1.8], "to": [9.5, 1.8], "tone": "amber", "label": "u", "at": "end" }
              ],
              "labels": [{ "x": 3, "y": 3.3, "text": "now at rest" }]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.225], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [4.9, 1.8], "w": 2.6, "h": 0.9, "label": "2m" }
              ],
              "arrows": [
                { "from": [6.4, 1.8], "to": [8.1, 1.8], "tone": "green", "label": "u/2", "at": "end" }
              ],
              "labels": [{ "x": 3, "y": 3.3, "text": "locked together" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any collision, recoil or explosion",
          "steps": [
            "<b>Draw the system and ask whether the net external force is zero</b>, at least along the axis you care about and at least for the instant of the impact. If it is not, conservation does not apply and you have the wrong system.",
            "<b>Fix a positive direction and sign every velocity.</b> Two bodies moving toward each other must get opposite signs; in two dimensions set up x and y axes and treat them as two separate one-dimensional problems.",
            "<b>Write total momentum before = total momentum after</b>, component by component. Nothing else goes into this equation.",
            "<b>Decide whether energy is also available.</b> Elastic and only elastic: then add kinetic energy conservation, or better, add the relative-velocity result <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>, which is linear and much faster.",
            "<b>Check with the centre of mass.</b> Compute <i>v</i><sub>cm</sub> before and after; the two must agree, because internal forces cannot move a centre of mass."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A railway wagon of mass 8000 kg moving at 2 m/s on a straight level track collides with a stationary wagon of mass 12000 kg and automatically couples to it. Find their common velocity just after coupling, and show that the collision is inelastic.",
          "steps": [
            "Coupling means they move off together, so this is perfectly inelastic. The track is level and the impact is brief, so horizontal external forces are negligible and momentum is conserved.",
            "8000(2) + 12000(0) = (20000)<i>v</i>, so 16000 = 20000<i>v</i> and <i>v</i> = 0.8 m/s in the original direction.",
            "Kinetic energy before = ½(8000)(2)<sup>2</sup> = 16000 J. After = ½(20000)(0.8)<sup>2</sup> = 6400 J.",
            "Nearly 60 per cent of the kinetic energy has gone, into the coupling, into sound and into deformation. Momentum survived it untouched, which is the whole point."
          ],
          "ans": "v = 0.8 m/s · KE falls from 16000 J to 6400 J, so the collision is inelastic"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A carrom striker of mass 15 g moving at 4 m/s strikes an identical stationary coin head on. Taking the collision as perfectly elastic, find the velocity of each afterwards.",
          "steps": [
            "The trap is reaching for the full elastic-collision formulas and burning a minute of algebra under exam pressure.",
            "The masses are equal and the collision is elastic and head on, so the two bodies simply exchange velocities.",
            "The striker takes the coin's velocity, zero. The coin takes the striker's, 4 m/s.",
            "The mass, 15 g, never entered the calculation, and any option in which the striker keeps moving forward is wrong on sight."
          ],
          "ans": "striker 0 m/s · coin 4 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A bullet of mass 10 g travelling at 200 m/s embeds itself in a wooden block of mass 1.99 kg resting on a frictionless surface. The block is attached to a spring of force constant 800 N/m. Find the maximum compression of the spring.",
          "steps": [
            "Two conservation laws in sequence, and the order matters. The collision is perfectly inelastic, so use momentum for it, never energy.",
            "0.01(200) = (0.01 + 1.99)<i>v</i>, so 2 = 2.00<i>v</i> and <i>v</i> = 1 m/s just after impact.",
            "Now the spring stage, where the surface is frictionless and nothing is lost, so energy conservation is legal: ½(2.00)(1)<sup>2</sup> = ½(800)<i>x</i><sup>2</sup>.",
            "1 = 400<i>x</i><sup>2</sup>, so <i>x</i><sup>2</sup> = 0.0025 and <i>x</i> = 0.05 m = 5 cm.",
            "The critical insight: you cannot apply energy conservation through the collision, because embedding loses kinetic energy to heat. Momentum carries you through the impact and energy carries you through the spring."
          ],
          "ans": "maximum compression 0.05 m, that is 5 cm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A shell of mass 3 kg moving horizontally at 10 m/s explodes into two fragments. Immediately afterwards a 1 kg fragment is seen moving vertically upward at 20 m/s. Find the velocity of the other 2 kg fragment. Neglect gravity during the explosion.",
          "steps": [
            "An explosion is internal, so momentum is conserved separately along each axis. Take x horizontal, in the shell's original direction, and y vertically up.",
            "Before: <i>p<sub>x</sub></i> = 3(10) = 30 kg m/s and <i>p<sub>y</sub></i> = 0. Fragment 1: <i>p</i><sub>1<i>x</i></sub> = 0 and <i>p</i><sub>1<i>y</i></sub> = 1(20) = 20 kg m/s.",
            "Horizontal: 30 = 0 + 2<i>v</i><sub>2<i>x</i></sub>, so <i>v</i><sub>2<i>x</i></sub> = 15 m/s. Vertical: 0 = 20 + 2<i>v</i><sub>2<i>y</i></sub>, so <i>v</i><sub>2<i>y</i></sub> = −10 m/s, that is, downward.",
            "Magnitude: √(15<sup>2</sup> + 10<sup>2</sup>) = √325 ≈ 18.0 m/s. Direction: tan<sup>−1</sup>(10/15) ≈ 33.7° below the horizontal.",
            "The centre of mass check: it keeps moving exactly as the unexploded shell would have, horizontally at 10 m/s and then on a normal projectile path. The blast rearranges the pieces but cannot shift the centre of mass, because its forces are internal."
          ],
          "ans": "about 18.0 m/s, 33.7° below the horizontal, forward and downward"
        },
        {
          "t": "mcq",
          "q": "An astronaut floating at rest in deep space, far from any gravity, wants to move toward her spacecraft. With nothing to push against, her best option is to:",
          "opts": [
            { "label": "swim vigorously with her arms and legs", "nudge": "Swimming needs a medium to push on. Empty space offers none, so there is nothing for the stroke to act against." },
            { "label": "throw a heavy tool in the direction away from the spacecraft", "nudge": null },
            { "label": "blow air from her mouth toward the spacecraft", "nudge": "Right idea, wrong direction. Blowing air toward the craft pushes her away from it, and feebly at that." },
            { "label": "wait, since motion is impossible without an external force", "nudge": "Over-applying the rule. An external force is needed to change the system's total momentum, not to rearrange it internally." }
          ],
          "correct": 1,
          "solution": "Her total momentum is fixed at zero. Throwing the tool away from the craft gives the tool momentum in that direction, so she recoils toward the craft and the total still sums to zero."
        },
        {
          "t": "mcq",
          "q": "For a perfectly inelastic collision between two bodies with no external forces, which statement is correct?",
          "opts": [
            { "label": "both momentum and kinetic energy are conserved", "nudge": "This describes a perfectly <i>elastic</i> collision. Sticking together always costs kinetic energy." },
            { "label": "momentum is conserved but kinetic energy is not", "nudge": null },
            { "label": "kinetic energy is conserved but momentum is not", "nudge": "Exactly backwards. Momentum conservation is the robust one, holding for every collision type." },
            { "label": "neither is conserved", "nudge": "Momentum conservation holds regardless of collision type whenever the external force is negligible." }
          ],
          "correct": 1,
          "solution": "Momentum is conserved in every collision with no external force. In a perfectly inelastic one the bodies stick and some kinetic energy goes to heat and deformation, so KE is not conserved."
        },
        {
          "t": "mcq",
          "q": "A ball dropped from height <i>h</i> rebounds from the floor to a height of <i>h</i>/4. The coefficient of restitution between ball and floor is:",
          "opts": [
            { "label": "0.25", "nudge": "This takes the ratio of the <i>heights</i> directly. Restitution compares speeds, and speed goes as the square root of height, so this is the single commonest error here." },
            { "label": "0.5", "nudge": null },
            { "label": "0.75", "nudge": "An unmotivated distractor with no route to it." },
            { "label": "0.125", "nudge": "This cubes rather than square-roots the height ratio; no relation gives it." }
          ],
          "correct": 1,
          "solution": "Speed before impact is proportional to √<i>h</i> and after to √(<i>h</i>/4), so <i>e</i> = √(<i>h</i>/4)/√<i>h</i> = √(1/4) = 0.5."
        },
        {
          "t": "mcq",
          "q": "A bomb initially at rest explodes into three fragments. Immediately afterwards, which of the following must be true?",
          "opts": [
            { "label": "the three fragments fly off along one straight line", "nudge": "Only two fragments are forced to be collinear. Three generally spread out in a plane." },
            { "label": "the vector sum of the three momenta is zero", "nudge": null },
            { "label": "the total kinetic energy of the fragments is zero", "nudge": "Chemical energy is converted <i>into</i> kinetic energy in an explosion. The fragments certainly move." },
            { "label": "the heaviest fragment is at rest", "nudge": "Nothing about the mass distribution forces any fragment to be stationary." }
          ],
          "correct": 1,
          "solution": "The bomb started at rest, so the total momentum is zero, and the blast forces are internal, so it stays zero. The three momentum vectors must add to zero, which puts them in one plane and balances them."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A boy of mass 60 kg standing on a stationary boat of mass 140 kg jumps horizontally off it at 2 m/s relative to the ground. Find the recoil speed of the boat, ignoring water resistance.", "a": "60(2) = 140<i>v</i>, so <i>v</i> = 120/140 ≈ 0.86 m/s, opposite to the boy's jump." },
            { "q": "[NEET] A body of mass <i>m</i> moving at 6 m/s collides head on and elastically with an identical body at rest. State both velocities afterwards.", "a": "Equal masses, elastic, head on, so they swap: the first stops and the second moves off at 6 m/s." },
            { "q": "[JEE Main] A 5 g bullet at 400 m/s passes straight through a 0.995 kg block on a frictionless surface and emerges at 100 m/s. Find the block's speed.", "a": "0.005(400) = 0.005(100) + 0.995<i>v</i>, so 1.5 = 0.995<i>v</i> and <i>v</i> ≈ 1.51 m/s." },
            { "q": "[JEE Main] A 2 kg body at 3 m/s collides head on with a 3 kg body moving at 2 m/s the other way, and they stick. Find their common velocity.", "a": "2(+3) + 3(−2) = 6 − 6 = 0, so <i>v</i> = 0 m/s. They come to rest together." },
            { "q": "[JEE Advanced] A ball is dropped from 10 m onto a floor with coefficient of restitution <i>e</i> = 0.8. Find the maximum height after the second bounce.", "a": "Each bounce multiplies the height by <i>e</i><sup>2</sup>, so <i>h</i><sub>2</sub> = <i>e</i><sup>4</sup><i>h</i> = (0.8)<sup>4</sup>(10) = 4.096 m ≈ 4.1 m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Applying kinetic-energy conservation to an inelastic collision.</b> Momentum is conserved in every collision; kinetic energy only in a perfectly elastic one. When a bullet embeds, a car crumples or clay sticks, energy is lost. Use momentum for the impact, never energy.",
            "<b>Forgetting that momentum is a vector.</b> Bodies moving in opposite directions must carry opposite signs; in two dimensions the x and y components are conserved separately. Adding speeds as if they were plain numbers is a guaranteed wrong answer.",
            "<b>Conserving momentum when the external force is not negligible.</b> It holds only where the net external force on your chosen system is zero. Across the instant of impact, gravity and friction are swamped by the internal impulses, so it is fine. Over a whole bouncing sequence it is not: gravity changes the momentum between bounces.",
            "<b>Misusing the coefficient of restitution.</b> <i>e</i> compares speeds of separation and approach, not heights and not energies. For a bounce off the floor <i>e</i> = √(<i>h</i><sub>rebound</sub>/<i>h</i><sub>drop</sub>), and the square root is what most answers drop.",
            "<b>Choosing a system that leaves the awkward force outside it.</b> If a force you cannot compute is doing work on your system, you have drawn the boundary in the wrong place. Enlarge it until that force becomes internal, and it will cancel itself."
          ]
        },
        {
          "t": "protip",
          "html": "finish every collision or explosion with the centre-of-mass check: internal forces cannot move a centre of mass, so <i>v</i><sub>cm</sub> must be identical before and after. computing it both ways catches a sign slip faster than redoing the whole problem. for elastic head-on collisions, reach for <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub> paired with momentum, two linear equations, instead of the quadratic energy equation. and for a rocket in real gravity just subtract <i>gt</i> from the ideal answer: a 1000 kg rocket burning 10 kg/s at 1500 m/s reaches 158 m/s in ten seconds on paper, but only 58 m/s once gravity has taken its 100 m/s, because early in flight the thrust barely exceeds the weight."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "no external force: Σ<i>m<sub>i</sub>u<sub>i</sub></i> = Σ<i>m<sub>i</sub>v<sub>i</sub></i>", "note": "conserve components separately, because momentum is a vector" },
            { "f": "momentum in every collision, energy only in elastic ones", "note": "the single distinction this whole topic turns on" },
            { "f": "equal masses, elastic, head on: they swap", "note": "an instant answer worth memorising, along with heavy-hits-light and light-hits-heavy" },
            { "f": "<i>e</i> = separation ÷ approach · floor bounce <i>e</i> = √(<i>h</i><sub>up</sub>/<i>h</i><sub>down</sub>)", "note": "<i>e</i> = 1 elastic, <i>e</i> = 0 perfectly inelastic, and never a ratio of heights" },
            { "f": "thrust = <i>v</i><sub>rel</sub>(<i>dm</i>/<i>dt</i>) · <i>v</i> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>) − <i>gt</i>", "note": "a rocket pushes on nothing; it only throws mass backward" }
          ],
          "aids": [
            "\"momentum survives many, energy survives elastic\"",
            "\"separation over approach, and never heights\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Forces You Draw, and When They Balance",
      "chip": "03 FORCES AND FBDs",
      "kalam": "one clean diagram per body, weight arrow first",
      "blocks": [
        {
          "t": "p",
          "html": "Walk through any Indian market and look up. A heavy signboard hangs from two chains bolted into a wall. A row of decorative bulbs sags between two poles. A fruit-seller's weighing pan dangles from three cords meeting at one hook. None of them is moving, yet every one is being pulled in several directions at once, by gravity, by tension in every chain, by the wall. The fact that they hang there perfectly still is telling you something deep: <b>all those pulls are cancelling out</b>. That is the whole idea of <b>equilibrium</b>. A body is in translational equilibrium when the net force on it is zero, so it has no acceleration: it either stays at rest or keeps moving at constant velocity. The forces do not have to be small, or few. They only have to balance."
        },
        {
          "t": "p",
          "html": "Before you can balance forces you have to know which ones exist, and the menu is short. At the deepest level nature has four fundamental forces, but everyday mechanics shows you just two faces: <b>gravity</b>, the long-range pull that gives a body its weight, and <b>contact forces</b>, the normal reaction, friction, tension and the push of a spring. Here is the fact that surprises students: every contact force is electromagnetic in origin. When two surfaces touch, their atoms never actually meet; the electron clouds repel, and that repulsion summed over a vast number of atoms is what you feel as a solid push. Contact force is not a fifth fundamental force, it is what electromagnetism looks like at arm's length."
        },
        {
          "t": "p",
          "html": "Two of those contact forces are <b>self-adjusting</b>, and that is where marks are lost. The <b>normal reaction</b> <i>N</i> is the push a surface exerts perpendicular to itself, and a surface can only push, never pull, so the arrow always points away from the surface into the body. The commonest error in all of mechanics is assuming <i>N</i> = <i>mg</i>. That is true only for a body on flat ground with nothing else pressing on it. On an incline <i>N</i> = <i>mg</i> cos <i>θ</i>. In a lift accelerating upward <i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>). Press down on a block at an angle and <i>N</i> grows; pull up on it and <i>N</i> shrinks. The normal force takes whatever value the no-penetration condition demands, and nothing else. <b>Tension</b> <i>T</i> behaves the same way: a string, like a hand, can only pull. For an ideal string, massless and inextensible, the tension is the same at every point, and it is unchanged as the string runs over an ideal pulley."
        },
        {
          "t": "think",
          "html": "a string and a floor are two very different employees. the string is a puller: ask it to push and it just goes slack. the floor is a pusher: ask it to pull you down and it cannot, the body simply lifts off. so a negative tension in your answer is nature saying this rope is not doing what your equation claims, and a negative normal reaction is nature saying the body has already left the surface. neither is a number you report. both mean the picture you assumed was wrong."
        },
        {
          "t": "p",
          "html": "Most of the situations in this topic involve <b>concurrent forces</b>, forces whose lines of action all pass through one common point. The hook holding the weighing pan feels three cords pulling on it and all three act <i>at the hook</i>, so you can treat that point as a single particle and ask one clean question: do the force vectors add to zero? To answer it you use one tool, <b>resolution</b>. Any force pointing at an awkward angle splits into two perpendicular pieces, usually horizontal and vertical, though on a slope you cleverly choose axes along and perpendicular to the slope instead. Once split, equilibrium becomes two simple scalar statements: the rightward pulls balance the leftward ones, and the upward pulls balance the downward ones. That is it."
        },
        {
          "t": "def",
          "term": "What a free-body diagram contains, and what it must not",
          "html": "Isolate <b>one</b> body and mentally cut it free from everything touching it. Then draw <b>only the forces acting on that body</b>. The weight arrow goes in first, because it is always there, and then one arrow for every object in contact: a normal reaction for each surface, a tension for each string, a spring force, a friction force. Two rules decide every hard case. <b>The force this body exerts on something else does not belong here</b>: it belongs in the other object's diagram, and drawing both members of a Third Law pair on one body is what makes a real acceleration come out as zero. And <b>there is no arrow labelled \"centripetal force\", \"centrifugal force\" or \"<i>ma</i>\"</b>: those name a role or a result, not a real interaction, and adding them on top of the real forces double-counts. The one exception is a deliberate pseudo-force, added only when you have chosen to work in an accelerating frame, and never alongside a ground-frame equation."
        },
        {
          "t": "defgrid",
          "title": "The force menu, and what each one actually equals",
          "rows": [
            { "k": "Weight", "v": "<i>W</i> = <i>mg</i>, always vertically down, acting effectively at the centre of mass. The only one needing no contact" },
            { "k": "Normal reaction", "v": "perpendicular to the surface, always a push. Whatever the perpendicular balance demands, and <b>not</b> automatically <i>mg</i>" },
            { "k": "Tension", "v": "along the string, away from the body, always a pull. Uniform in an ideal string and across an ideal pulley" },
            { "k": "Spring force", "v": "<i>F</i> = −<i>kx</i>, magnitude <i>kx</i>, restoring. Unlike a string a spring can push as well as pull" },
            { "k": "Rolling friction", "v": "<i>f<sub>r</sub></i> = <i>μ<sub>r</sub>N</i> with <i>μ<sub>r</sub></i> far below <i>μ<sub>k</sub></i>. The whole reason we put wheels under heavy loads" },
            { "k": "Pseudo-force", "v": "<i>ma</i><sub>0</sub>, opposite the frame's acceleration. Added only inside a non-inertial frame, never in the ground frame" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE NORMAL REACTION IS NEVER AUTOMATICALLY mg",
          "tag": "five situations, five different answers",
          "main": "flat, nothing else: <i>N</i> = <i>mg</i><br>incline of angle <i>θ</i>: <i>N</i> = <i>mg</i> cos <i>θ</i><br>lift accelerating up at <i>a</i>: <i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>)<br>rope pulling up at <i>θ</i>: <i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i><br>push angled down at <i>θ</i>: <i>N</i> = <i>mg</i> + <i>F</i> sin <i>θ</i>",
          "legend": [
            "<i>N</i> = normal reaction (N), <i>m</i> = mass (kg), <i>g</i> = 9.8 m/s<sup>2</sup>, <i>a</i> = the frame's acceleration (m/s<sup>2</sup>)",
            "<i>F</i> = the applied force (N), <i>θ</i> = its angle to the surface (degrees or radians, a pure number either way)",
            "the same body, the same mass, five different normal forces. Write the perpendicular balance every single time"
          ],
          "note": "In free fall the third line gives N = 0, which is what apparent weightlessness actually is: not the absence of gravity, but the absence of a contact force to feel it through."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOOKE'S LAW, AND SPRINGS COMBINED",
          "main": "<i>F</i> = −<i>kx</i>, so |<i>F</i>| = <i>kx</i><br>series: 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub><br>parallel: <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>",
          "legend": [
            "<i>x</i> = extension or compression from the natural length (m), <i>F</i> = spring force (N)",
            "<i>k</i> = force constant, unit N/m, which is kg/s<sup>2</sup>, so its dimensions are [M T<sup>−2</sup>]",
            "series springs carry the <i>same force</i> and their extensions add, so reciprocals add and the pair is softer; parallel springs share the <i>same extension</i> and their forces add, so the constants add and the pair is stiffer"
          ],
          "note": "Quick check when you cannot remember which is which: more springs side by side must be harder to stretch, so parallel has to be the stiffer one."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EQUILIBRIUM, LAMI, AND THE ACCELERATING FRAME",
          "main": "Σ<i>F<sub>x</sub></i> = 0 and Σ<i>F<sub>y</sub></i> = 0<br>Lami: <i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i><br>lift: <i>N</i> = <i>m</i>(<i>g</i> ± <i>a</i>)<br>accelerating frame: tan <i>θ</i> = <i>a</i>/<i>g</i>, <i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>)",
          "legend": [
            "<i>P</i>, <i>Q</i>, <i>R</i> = three concurrent coplanar forces in equilibrium (N); <i>α</i> is the angle <b>between the other two</b>, that is, opposite <i>P</i>, and likewise for <i>β</i> and <i>γ</i>, with <i>α</i> + <i>β</i> + <i>γ</i> = 360°",
            "<i>N</i> = the scale reading or apparent weight (N), <i>m</i> = mass (kg), <i>a</i> = the lift's acceleration (m/s<sup>2</sup>), plus for up and minus for down",
            "<i>g</i><sub>eff</sub> = effective gravity inside a frame accelerating horizontally at <i>a</i> (m/s<sup>2</sup>), and <i>θ</i> is the angle a hanging string settles at, measured from the vertical"
          ],
          "note": "Lami is a three-force relation and nothing else. Four concurrent forces have no Lami form at all, and parallel forces are not concurrent, so the theorem cannot touch them."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · LAMI'S THEOREM, TAP A LINE",
          "steps": [
            {
              "eq": "three concurrent forces in equilibrium close into a triangle head to tail",
              "why": "This is the triangle law of forces. If the three vectors summed to anything other than zero the path would not close, so equilibrium and a closed triangle are the same statement drawn two ways."
            },
            {
              "eq": "the interior angle opposite the side representing <i>P</i> is (180° − <i>α</i>)",
              "why": "In the original star arrangement, <i>α</i> is the angle between <i>Q</i> and <i>R</i>. Laying the forces head to tail reverses the relative orientation, so the triangle's interior angle is the supplement. The same happens for <i>β</i> and <i>γ</i>."
            },
            {
              "eq": "in any triangle, each side divided by the sine of its opposite angle is the same number",
              "why": "This is the sine rule. It is not in the current Class 11 maths syllabus, so take it here as a stated property of triangles: it is what lets a triangle of forces be solved by angles alone."
            },
            {
              "eq": "<i>P</i>/sin(180° − <i>α</i>) = <i>Q</i>/sin(180° − <i>β</i>) = <i>R</i>/sin(180° − <i>γ</i>)",
              "why": "Apply the sine rule to the closed force triangle, side by opposite angle."
            },
            {
              "eq": "sin(180° − <i>θ</i>) = sin <i>θ</i>, so <i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i>",
              "why": "The supplement identity you already know from trigonometry cleans it up. The payoff: a three-force equilibrium falls out in one line, with no axes to choose and no components to grind, provided you pair each force with the angle between the other two."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A BLOCK HELD ON A SMOOTH INCLINE, TAP A LINE",
          "steps": [
            {
              "eq": "choose axes along and perpendicular to the incline",
              "why": "Two of the three forces, the tension along the slope and the normal perpendicular to it, already lie on these axes, so only gravity needs resolving. Choosing axes to minimise the number of forces you have to split is the single most valuable habit in incline problems."
            },
            {
              "eq": "resolve <i>mg</i>: down-slope component <i>mg</i> sin <i>θ</i>, into-surface component <i>mg</i> cos <i>θ</i>",
              "why": "The weight points straight down. The angle between the vertical and the incline's own normal is the same <i>θ</i> as the slope angle, which is why the sine takes the along-slope share and the cosine the perpendicular one."
            },
            {
              "eq": "along the incline: <i>T</i> = <i>mg</i> sin <i>θ</i>",
              "why": "The string pulls up the slope and gravity's component pulls down it. With no acceleration they are equal."
            },
            {
              "eq": "perpendicular to the incline: <i>N</i> = <i>mg</i> cos <i>θ</i>",
              "why": "The surface pushes out exactly hard enough to cancel the part of the weight pressing into it. Note that <i>N</i> is less than <i>mg</i> here, and it is less for every incline that is not flat."
            },
            {
              "eq": "check both extremes: <i>θ</i> = 0 and <i>θ</i> = 90°",
              "why": "At <i>θ</i> = 0 the surface is flat: <i>T</i> = 0 and <i>N</i> = <i>mg</i>, nothing pulls the block and the floor carries the whole weight. At <i>θ</i> = 90° the surface is a vertical wall: <i>T</i> = <i>mg</i> and <i>N</i> = 0, the string carries everything and the wall presses on nothing. Both match intuition exactly, which is what makes the general result trustworthy."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.1 · TWO ROPES, ONE LAMP",
          "chips": ["ropes at 30°", "the same lamp, flatter ropes"],
          "captions": [
            "A 100 N lamp hangs from a junction held by two ropes, each at 30° to the horizontal beam. Each rope contributes an upward component T sin 30°, so 2T(0.5) = 100 and T = 100 N. The tension in each rope equals the whole weight, not half of it.",
            "The same lamp, the same 100 N, with the ropes pulled flatter to 15°. Now 2T sin 15° = 100 and each rope carries 193 N. Only a small vertical slice of each tension does the lifting, so the flatter the ropes the harder they pull. This is why a tight clothesline barely sags under a shirt yet strains its posts."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[1, 5.5], [9, 5.5], [9, 5.78], [1, 5.78]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "segments": [
                { "from": [1.465, 5.5], "to": [5, 3.5], "label": "T = 100 N", "at": "below" },
                { "from": [8.535, 5.5], "to": [5, 3.5], "label": "T = 100 N", "at": "above" }
              ],
              "arcs": [
                { "at": [1.465, 5.5], "r": 0.75, "from": -30, "to": 0, "label": "30°", "tone": "amber" }
              ],
              "arrows": [
                { "from": [5, 3.5], "to": [5, 1.4], "tone": "amber", "label": "W = 100 N", "at": "mid" }
              ],
              "marks": [{ "x": 5, "y": 3.5, "glyph": "dot" }]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[1, 5.5], [9, 5.5], [9, 5.78], [1, 5.78]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "segments": [
                { "from": [1.191, 5.5], "to": [5, 4.5], "label": "T = 193 N", "at": "below" },
                { "from": [8.809, 5.5], "to": [5, 4.5], "label": "T = 193 N", "at": "above" }
              ],
              "arcs": [
                { "at": [1.191, 5.5], "r": 0.75, "from": -15, "to": 0, "label": "15°", "tone": "amber" }
              ],
              "arrows": [
                { "from": [5, 4.5], "to": [5, 2.4], "tone": "amber", "label": "W = 100 N", "at": "mid" }
              ],
              "marks": [{ "x": 5, "y": 4.5, "glyph": "dot" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.2 · THE SAME BLOCK, THEN ITS FORCES",
          "chips": ["the set-up", "the free-body diagram"],
          "captions": [
            "A block rests on a smooth 30° incline, held by a horizontal string running to a wall. The string is not parallel to the slope, so all three forces point in genuinely different directions and none of them can be ignored.",
            "The three forces on the block, and nothing else. Weight mg straight down, normal reaction N perpendicular to the slope, tension T horizontal. Because two of them already lie on the horizontal and vertical axes, resolve N rather than the weight: N cos 30° = mg gives N, and T = N sin 30° gives the tension."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [1.2, 1.0], "w": 3.6, "h": 2.04 },
                { "kind": "block", "at": [4.107, 3.197], "w": 1.2, "h": 0.94, "rot": 30, "label": "5 kg" },
                { "kind": "rope", "at": [4.72, 3.197], "to": [8.38, 3.197] },
                { "kind": "wall", "at": [8.6, 3.4], "w": 0.45, "h": 3.6 }
              ],
              "arcs": [
                { "at": [1.2, 1.0], "r": 0.85, "from": 0, "to": 30, "label": "30°", "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [1.2, 1.0], "w": 3.6, "h": 2.04 },
                { "kind": "block", "at": [4.107, 3.197], "w": 1.2, "h": 0.94, "rot": 30, "label": "5 kg" },
                { "kind": "rope", "at": [5.9, 3.197], "to": [8.38, 3.197] },
                { "kind": "wall", "at": [8.6, 3.4], "w": 0.45, "h": 3.6 }
              ],
              "arrows": [
                { "from": [3.899, 3.551], "to": [3.10, 4.90], "tone": "amber", "label": "N", "at": "end" },
                { "from": [4.107, 2.85], "to": [4.107, 1.5], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [4.72, 3.197], "to": [5.9, 3.197], "tone": "ink", "label": "T", "at": "end" }
              ],
              "arcs": [
                { "at": [1.2, 1.0], "r": 0.85, "from": 0, "to": 30, "label": "30°", "tone": "amber" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.3 · ONE BOB, TWO FRAMES",
          "chips": ["from the road", "from inside the truck"],
          "captions": [
            "The truck accelerates to the right and the bob hangs back at 37° from the vertical. To an observer on the road the bob is genuinely accelerating: only two real forces act, tension T along the string and weight mg, and their resultant is the horizontal ma the bob needs.",
            "To a passenger the bob is simply hanging still, and that view is made correct by adding a pseudo-force ma pointing backward, opposite the truck's acceleration. Now three forces balance and ordinary equilibrium applies. Dividing the two equations gives tan 37° = a/g, so a = 7.5 m/s<sup>2</sup>, and both frames agree, as they must."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.2], "w": 9, "h": 0.25 },
                { "kind": "rope", "at": [5, 5.1], "to": [3.642, 3.334] }
              ],
              "polys": [
                { "pts": [[2, 1.325], [8, 1.325], [8, 5.1], [2, 5.1]], "close": true, "tone": "soft" }
              ],
              "segments": [
                { "from": [5, 5.1], "to": [5, 3.2], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [5, 5.1], "r": 0.95, "from": 233, "to": 270, "label": "37°", "tone": "amber" }
              ],
              "arrows": [
                { "from": [3.642, 3.334], "to": [4.55, 4.516], "tone": "ink", "label": "T", "at": "end" },
                { "from": [3.642, 3.334], "to": [3.642, 2.15], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [2.4, 6.0], "to": [4.4, 6.0], "tone": "amber", "label": "a", "at": "above" }
              ],
              "marks": [
                { "x": 3.642, "y": 3.334, "glyph": "dot" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.2], "w": 9, "h": 0.25 },
                { "kind": "rope", "at": [5, 5.1], "to": [3.642, 3.334] }
              ],
              "polys": [
                { "pts": [[2, 1.325], [8, 1.325], [8, 5.1], [2, 5.1]], "close": true, "tone": "soft" }
              ],
              "segments": [
                { "from": [5, 5.1], "to": [5, 3.2], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [5, 5.1], "r": 0.95, "from": 233, "to": 270, "label": "37°", "tone": "amber" }
              ],
              "arrows": [
                { "from": [3.642, 3.334], "to": [4.55, 4.516], "tone": "ink", "label": "T", "at": "end" },
                { "from": [3.642, 3.334], "to": [3.642, 2.15], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [3.642, 3.334], "to": [2.45, 3.334], "tone": "amber", "label": "ma", "at": "above" },
                { "from": [2.4, 6.0], "to": [4.4, 6.0], "tone": "amber", "label": "a", "at": "above" }
              ],
              "marks": [
                { "x": 3.642, "y": 3.334, "glyph": "dot" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The free-body diagram method, every single time",
          "steps": [
            "<b>Isolate one body</b> and cut it free from everything touching it. If a problem has three bodies, it has three diagrams.",
            "<b>Draw the weight first,</b> because it is always present, then one arrow for every object in contact: a normal for each surface, a tension for each string, a spring force, a friction force. Nothing else goes in.",
            "<b>Choose smart axes.</b> Horizontal and vertical against a wall or a lift; along and perpendicular to the slope on an incline. The right choice usually leaves exactly one force needing resolution.",
            "<b>Resolve the slanted forces</b> into components on those axes.",
            "<b>Write Σ<i>F<sub>x</sub></i> = <i>ma<sub>x</sub></i> and Σ<i>F<sub>y</sub></i> = <i>ma<sub>y</sub></i>,</b> with equilibrium as the special case <i>a</i> = 0.",
            "<b>Solve, then sanity-check the signs and the extremes.</b> A negative <i>N</i> means the body left the surface; a negative <i>T</i> means the string went slack. Neither is an answer, both mean the assumed configuration was impossible."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A decorative lamp of weight 100 N hangs from a horizontal ceiling beam by two ropes, each making 30° with the beam. Find the tension in each rope.",
          "steps": [
            "Draw the free-body diagram of the junction point: three concurrent forces, the weight 100 N down and two tensions along the ropes, each 30° above the horizontal.",
            "By symmetry the two tensions are equal, call each <i>T</i>. Their horizontal components point in opposite directions and cancel automatically, which confirms the set-up is consistent.",
            "Vertical balance: each rope contributes an upward component <i>T</i> sin 30°, so 2<i>T</i> sin 30° = 100.",
            "2<i>T</i>(0.5) = 100 gives <i>T</i> = 100 N. Notice this is the <i>whole</i> weight in each rope, not half of it, because the ropes are nearly horizontal and only a small vertical slice of each tension does the lifting."
          ],
          "ans": "T = 100 N in each rope"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Forces of 5 N east and 12 N north act on a particle. What single force will keep it in equilibrium?",
          "steps": [
            "The trap is adding 5 + 12 = 17 N, or finding the resultant and then forgetting that the balancing force points the other way.",
            "The two forces are perpendicular, so their resultant follows from Pythagoras in one step: <i>R</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = √169 = 13 N.",
            "The balancing force is the <b>equilibrant</b>: equal in magnitude, opposite in direction. So 13 N pointing exactly opposite the resultant, that is, south of west.",
            "Memorise the Pythagorean triples 3-4-5, 5-12-13 and 8-15-17. The instant you see 5 N and 12 N perpendicular, write 13 and move on. And remember: equilibrant equals minus resultant."
          ],
          "ans": "13 N, directed opposite the resultant, that is, south of west"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A block of mass 5 kg rests on a smooth 30° incline, held in equilibrium by a <i>horizontal</i> string attached to a wall. Find the tension in the string and the normal reaction from the incline. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The string is horizontal, not parallel to the incline, so all three forces point in different directions and this is a genuine multi-component problem.",
            "Choose horizontal and vertical axes here, because weight and tension already lie on them and only <i>N</i> needs resolving. Since <i>N</i> is perpendicular to the incline, it makes 30° with the vertical.",
            "Vertical: <i>N</i> cos 30° = <i>mg</i>, so <i>N</i> = 50/(√3/2) = 100/√3 ≈ 57.7 N.",
            "Horizontal: <i>T</i> = <i>N</i> sin 30° = (100/√3)(0.5) = 50/√3 ≈ 28.9 N.",
            "Cross-check along the slope instead: <i>T</i> cos 30° = <i>mg</i> sin 30° gives <i>T</i> = <i>mg</i> tan 30° = 50(0.577) ≈ 28.9 N, the same answer in fewer steps. Both <i>N</i> and <i>T</i> are larger than in the string-parallel case, because a horizontal string fights gravity less efficiently."
          ],
          "ans": "N ≈ 57.7 N · T ≈ 28.9 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A bob of mass 2 kg hangs from a string fixed to the roof of a truck. As the truck accelerates uniformly along a straight horizontal road, the string settles at a steady 37° from the vertical. Find the acceleration and the tension, solving it in <b>both</b> the ground frame and the truck's frame. Take <i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8.",
          "steps": [
            "<b>Ground frame, which is inertial.</b> Only two real forces act, tension and weight, and their resultant must be the horizontal <i>ma</i> the bob needs.",
            "Vertical, no vertical acceleration: <i>T</i> cos 37° = <i>mg</i>, so <i>T</i>(0.8) = 20 and <i>T</i> = 25 N. Horizontal, providing the acceleration: <i>T</i> sin 37° = <i>ma</i>, so 25(0.6) = 2<i>a</i> and <i>a</i> = 7.5 m/s<sup>2</sup>.",
            "<b>Truck frame, which is not inertial.</b> To the passenger the bob is in equilibrium, but only after adding a pseudo-force <i>ma</i> pointing backward. Now three forces balance: vertical <i>T</i> cos 37° = <i>mg</i>, horizontal <i>T</i> sin 37° = <i>ma</i>.",
            "Divide the two: tan 37° = <i>a</i>/<i>g</i>, so <i>a</i> = 10(0.75) = 7.5 m/s<sup>2</sup>, and <i>T</i> = <i>mg</i>/cos 37° = 25 N. Identical, as they must be.",
            "A third route worth having: the string aligns with the <b>effective gravity</b> felt in the accelerating frame, of magnitude √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>). Then <i>T</i> = <i>m</i>√(100 + 56.25) = 2(12.5) = 25 N, straight off. Reach for this in any accelerating-frame equilibrium problem."
          ],
          "ans": "a = 7.5 m/s<sup>2</sup> · T = 25 N, identical from both frames"
        },
        {
          "t": "mcq",
          "q": "The normal reaction on a body resting on a horizontal surface equals its weight only when:",
          "opts": [
            { "label": "the surface is rough", "nudge": "Roughness affects friction, which acts along the surface. It has nothing to do with the perpendicular balance that sets <i>N</i>." },
            { "label": "no other vertical force acts and there is no vertical acceleration", "nudge": null },
            { "label": "the body is moving", "nudge": "Motion along the surface is irrelevant to the perpendicular balance; a sliding block on flat ground still has <i>N</i> = <i>mg</i>." },
            { "label": "always, by definition", "nudge": "The always fallacy, and the commonest error in mechanics. <i>N</i> changes on inclines, in lifts, and under any angled force." }
          ],
          "correct": 1,
          "solution": "<i>N</i> is whatever the perpendicular balance demands. It equals <i>mg</i> only when nothing else presses or lifts vertically and the vertical acceleration is zero."
        },
        {
          "t": "mcq",
          "q": "Lami's theorem can be applied to a system of:",
          "opts": [
            { "label": "any number of concurrent forces in equilibrium", "nudge": "The theorem has exactly three terms and cannot be stretched to four or more." },
            { "label": "exactly three concurrent, coplanar forces in equilibrium", "nudge": null },
            { "label": "three parallel forces", "nudge": "Parallel forces are not concurrent: their lines never meet at a point, so there is no common point to build the triangle from." },
            { "label": "four concurrent forces in equilibrium", "nudge": "Same objection as the first option. Four forces have four terms and Lami has three." }
          ],
          "correct": 1,
          "solution": "Lami's theorem is a three-force relation derived from the sine rule applied to the closed triangle those three forces form."
        },
        {
          "t": "mcq",
          "q": "A weight hangs in equilibrium from two strings attached to a ceiling. String A makes 30° with the horizontal and string B makes 60° with the horizontal, on opposite sides. Which carries the greater tension?",
          "opts": [
            { "label": "string A, the one at 30°", "nudge": "This reverses the logic. The flatter string is the one whose tension does less lifting per newton, but that is not the comparison horizontal balance makes." },
            { "label": "string B, the one at 60°", "nudge": null },
            { "label": "both carry equal tension", "nudge": "Equal tensions occur only for symmetric angles, and 30° against 60° is not symmetric." },
            { "label": "it cannot be decided without knowing the weight", "nudge": "The <i>ratio</i> of the tensions depends only on the angles, so it is fully determined without the weight." }
          ],
          "correct": 1,
          "solution": "Horizontal balance gives <i>T<sub>A</sub></i> cos 30° = <i>T<sub>B</sub></i> cos 60°, so <i>T<sub>A</sub></i>(0.866) = <i>T<sub>B</sub></i>(0.5) and <i>T<sub>B</sub></i> ≈ 1.7<i>T<sub>A</sub></i>. The steeper string, closer to vertical, shoulders more of the vertical load."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A lantern of weight 30 N hangs from a string. A steady horizontal wind pushes it so the string makes 37° with the vertical. Find the wind force and the tension. (sin 37° = 0.6, cos 37° = 0.8)", "a": "Vertical: <i>T</i> cos 37° = 30, so <i>T</i> = 30/0.8 = 37.5 N. Horizontal: wind = <i>T</i> sin 37° = 37.5(0.6) = 22.5 N." },
            { "q": "[NEET] Two springs of constants 300 N/m and 600 N/m are combined. Find the equivalent constant in series and in parallel.", "a": "Series: 1/<i>k</i> = 1/300 + 1/600 gives <i>k</i> = (300)(600)/900 = 200 N/m. Parallel: <i>k</i> = 300 + 600 = 900 N/m." },
            { "q": "[JEE Main] A weight of 40 N hangs from a knot. The knot is also tied to a horizontal string fixed to a wall and to a second string running to the ceiling at 53° above the horizontal. Find both tensions. (sin 53° = 0.8, cos 53° = 0.6)", "a": "Vertical: <i>T</i><sub>ceiling</sub> sin 53° = 40, so <i>T</i><sub>ceiling</sub> = 40/0.8 = 50 N. Horizontal: <i>T</i><sub>wall</sub> = 50 cos 53° = 30 N." },
            { "q": "[JEE Main] A 2 kg block hangs from a spring inside a lift. The spring's extension corresponds to a force of 26 N. Find the lift's acceleration and its direction. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>kx</i> = <i>m</i>(<i>g</i> + <i>a</i>): 26 = 2(10 + <i>a</i>), so <i>a</i> = 3 m/s<sup>2</sup>, upward." },
            { "q": "[JEE Advanced] A pendulum bob of mass 1 kg hangs from the roof of a car accelerating at 5 m/s<sup>2</sup> along a horizontal road. Find the angle with the vertical and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "tan <i>θ</i> = <i>a</i>/<i>g</i> = 0.5, so <i>θ</i> ≈ 26.6°. <i>T</i> = <i>m</i>√(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>) = √125 ≈ 11.2 N." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Substituting <i>N</i> = <i>mg</i> by reflex.</b> The normal reaction is self-adjusting. On an incline it is <i>mg</i> cos <i>θ</i>, in a lift <i>m</i>(<i>g</i> ± <i>a</i>), under an angled pull <i>mg</i> − <i>F</i> sin <i>θ</i>. Write the actual perpendicular balance every time, and note that every friction answer downstream inherits this error.",
            "<b>Adding forces at angles without resolving them.</b> You cannot add 5 N and 12 N to get 17 N when they point in different directions. Resolve into perpendicular components first, then balance each direction separately. Skipping resolution is the number-one source of wrong equilibrium answers.",
            "<b>Misreading the angles in Lami's theorem.</b> Each force pairs with the angle <i>between the other two</i>, not with any angle the force itself makes. Mislabel these and you get a wrong answer that looks entirely plausible. Sketch the three forces from the common point and read each opposite angle deliberately.",
            "<b>Drawing the wrong forces in a free-body diagram.</b> Only forces acting <i>on</i> the chosen body belong there. The force it exerts on something else lives in that object's diagram, and an invented arrow labelled <i>ma</i> or centripetal force belongs nowhere at all.",
            "<b>Adding a pseudo-force in the ground frame, or pointing it the wrong way.</b> It belongs only inside a non-inertial frame, always opposite the frame's acceleration, and never in the same equation as ground-frame quantities. Mixing the two frames in one line is a guaranteed error."
          ]
        },
        {
          "t": "protip",
          "html": "pick smart axes before you write anything: on an incline resolve along and perpendicular to the slope, against a wall or in a lift use horizontal and vertical. the right choice usually leaves exactly one force needing resolution and halves the algebra. for exactly three concurrent forces, reach for lami's theorem before grinding through components, it is normally a one-line solution. and in any accelerating frame, stop thinking about pseudo-forces separately and think about effective gravity instead: a string hangs along <i>g</i><sub>eff</sub>, its magnitude is √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>), and the tension is just <i>m</i> times that."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Σ<i>F<sub>x</sub></i> = 0 and Σ<i>F<sub>y</sub></i> = 0", "note": "resolve first, then balance each perpendicular direction separately" },
            { "f": "<i>N</i> is never automatically <i>mg</i>", "note": "<i>mg</i> cos <i>θ</i> on a slope, <i>m</i>(<i>g</i> ± <i>a</i>) in a lift, <i>mg</i> ∓ <i>F</i> sin <i>θ</i> under an angled force" },
            { "f": "strings only pull, surfaces only push", "note": "a negative <i>T</i> or <i>N</i> means the configuration you assumed is impossible" },
            { "f": "Lami: <i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i>", "note": "exactly three concurrent coplanar forces, each paired with the angle between the other two" },
            { "f": "series springs soften, parallel springs stiffen", "note": "1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> against <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>" }
          ],
          "aids": [
            "\"gravity pulls, surfaces push, strings tug, springs snap back\"",
            "\"each force loves the angle across from it\", and for lifts, \"up adds, down subtracts, free fall floats\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Friction",
      "chip": "04 FRICTION",
      "kalam": "find the ceiling first, then decide which friction you are in",
      "blocks": [
        {
          "t": "p",
          "html": "Try pushing a heavy steel almirah across a floor. At first it refuses to budge however hard you lean into it. You push harder, harder still, and then suddenly it gives way and slides, usually with a little jerk. Everyone has felt this. That stubborn resistance, and its sudden surrender, is the whole drama of <b>friction</b>: the force that acts <i>along</i> two surfaces in contact, opposing the relative sliding between them, or the tendency to slide. It exists because no surface is truly smooth. Under a microscope even polished steel is a landscape of tiny peaks and valleys that interlock and, where they touch, weakly weld together. To slide one surface over the other, those microscopic bonds must be sheared. That is also why friction depends on how hard the surfaces are pressed together, the normal force, and not on how large they look."
        },
        {
          "t": "p",
          "html": "The single most important idea in this topic is that <b>static friction is self-adjusting</b>. Push the almirah gently and friction pushes back exactly as hard as you push, so the net force is zero and nothing moves. Push a little harder and friction matches you again. It keeps matching, but only up to a ceiling. That ceiling is the <b>limiting friction</b>, the maximum grip the surfaces can muster, <i>f</i><sub>max</sub> = <i>μ<sub>s</sub>N</i>. Push past it and the surfaces lose their hold. The instant the body slides, a different and slightly weaker force takes over, <b>kinetic friction</b> <i>f<sub>k</sub></i> = <i>μ<sub>k</sub>N</i>, which is why the almirah is easier to keep moving than it was to start. That little lurch you feel is exactly the drop from <i>μ<sub>s</sub>N</i> to <i>μ<sub>k</sub>N</i>."
        },
        {
          "t": "think",
          "html": "static friction is like a patient employee who does exactly the work you assign, no more and no less, but who has a strict maximum capacity. ask for less than the maximum and the request is met precisely. ask for more and the system snaps: the body starts sliding and a different, slightly weaker force takes over. so the number you write for static friction is never μN by default, it is whatever the applied force happens to be, right up until it is not."
        },
        {
          "t": "p",
          "html": "Two angles summarise all of this geometrically, and they turn out to be the same angle. The <b>angle of friction</b> <i>λ</i> is the tilt of the <i>total</i> contact force, friction plus normal added as vectors, away from the normal, and it satisfies tan <i>λ</i> = <i>μ</i>. The <b>angle of repose</b> <i>θ<sub>r</sub></i> is the steepest incline on which a body can rest before sliding under its own weight, and it satisfies tan <i>θ<sub>r</sub></i> = <i>μ<sub>s</sub></i>. So <i>θ<sub>r</sub></i> = <i>λ</i>. Tilt a tray of marbles and watch the angle at which they let go: you have just measured a coefficient of friction with no instrument at all. It is also why a given material, sand, gravel, rice, always piles into a cone of the same characteristic angle however much you pour."
        },
        {
          "t": "def",
          "term": "Which direction friction points, and the ceiling you must find first",
          "html": "<b>Friction opposes relative sliding, not motion.</b> Those are different things, and this is where the marks go. When you walk, static friction from the ground pushes you <i>forward</i>; when a car accelerates, static friction on the driving wheels is the force that accelerates it. Friction is the driver there, not a brake. So never write friction backward by reflex: ask which way the surfaces would slide over each other if friction vanished, and point it the other way. Then, before you write any number, <b>compute the ceiling <i>μ<sub>s</sub>N</i> and compare it with the driving force</b>. Below the ceiling the body is static and friction equals the applied tangential force. Above it the body slides and friction is <i>μ<sub>k</sub>N</i>, a smaller number. Choosing the regime before computing anything is the habit that makes this topic easy."
        },
        {
          "t": "defgrid",
          "title": "The laws of friction, and what they do not depend on",
          "rows": [
            { "k": "Static, below the limit", "v": "<i>f<sub>s</sub></i> equals the applied tangential force exactly, with <i>f<sub>s</sub></i> ≤ <i>μ<sub>s</sub>N</i>. Self-adjusting, not fixed" },
            { "k": "Limiting friction", "v": "<i>f</i><sub>max</sub> = <i>μ<sub>s</sub>N</i>, the largest grip the surfaces can muster, reached only at the verge of sliding" },
            { "k": "Kinetic friction", "v": "<i>f<sub>k</sub></i> = <i>μ<sub>k</sub>N</i> while sliding, and generally <i>μ<sub>k</sub></i> ≤ <i>μ<sub>s</sub></i>, which is why the body lurches as it breaks free" },
            { "k": "Independent of area", "v": "a brick on its large face or its small face has the same limiting friction, because <i>N</i> is unchanged" },
            { "k": "Independent of speed", "v": "<i>μ<sub>k</sub></i> is taken as constant at exam level. Both this and the last row are good empirical approximations, not exact laws of nature" },
            { "k": "Dimensionless <i>μ</i>", "v": "<i>μ</i> = <i>f</i>/<i>N</i> is a ratio of two forces, [M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>]. It depends on <b>both</b> surfaces and never on the masses" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE REGIMES, AND THE TWO ANGLES",
          "tag": "compute the ceiling before you use any of them",
          "main": "0 ≤ <i>f<sub>s</sub></i> ≤ <i>μ<sub>s</sub>N</i>, and <i>f<sub>s</sub></i> = applied force while static<br><i>f</i><sub>max</sub> = <i>μ<sub>s</sub>N</i> · <i>f<sub>k</sub></i> = <i>μ<sub>k</sub>N</i><br>tan <i>λ</i> = <i>μ</i> · tan <i>θ<sub>r</sub></i> = <i>μ<sub>s</sub></i> · <i>θ<sub>r</sub></i> = <i>λ</i>",
          "legend": [
            "<i>f<sub>s</sub></i>, <i>f<sub>k</sub></i> = static and kinetic friction (N), <i>N</i> = normal reaction (N)",
            "<i>μ<sub>s</sub></i>, <i>μ<sub>k</sub></i> = coefficients of static and kinetic friction, both pure numbers with no unit",
            "<i>λ</i> = angle of friction, <i>θ<sub>r</sub></i> = angle of repose, both in degrees, and both pure numbers dimensionally"
          ],
          "note": "The first line is the one students break. Static friction equals μsN only at the verge of sliding; below that it equals whatever tangential force is applied, and it can be zero."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SLIDING, DRAGGING AND HANGING OVER AN EDGE",
          "main": "down a rough incline: <i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ<sub>k</sub></i> cos <i>θ</i>)<br>least drag force on the flat: <i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i>, applied at <i>θ</i> = <i>λ</i><br>chain over a table edge: <i>y</i>/<i>L</i> = <i>μ</i>/(1 + <i>μ</i>)",
          "legend": [
            "<i>a</i> = acceleration down the slope (m/s<sup>2</sup>), <i>θ</i> = incline angle, <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>F</i><sub>min</sub> = least force needed to start the body moving on level ground (N), <i>m</i> = mass (kg), <i>λ</i> = angle of friction",
            "<i>y</i> = length hanging over the edge (m), <i>L</i> = total chain length (m), so the ratio is a pure number"
          ],
          "note": "The first line is valid only once the block is actually sliding, that is, once tan θ exceeds μs. Apply it to a block that is still stationary and you invent an acceleration that does not exist."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ANGLE OF REPOSE IS THE ANGLE OF FRICTION",
          "steps": [
            {
              "eq": "a block rests on an incline whose angle <i>θ</i> is slowly raised, until it is just about to slide",
              "why": "Three forces act: the weight <i>mg</i> straight down, the normal reaction <i>N</i> perpendicular to the surface, and limiting friction <i>μ<sub>s</sub>N</i> up the slope, opposing the impending downhill slide. At the angle of repose <i>θ<sub>r</sub></i> the block is on the verge, so friction is at its ceiling."
            },
            {
              "eq": "perpendicular to the incline: <i>N</i> = <i>mg</i> cos <i>θ<sub>r</sub></i>",
              "why": "Resolve the weight along the natural slope axes. Only the part pressing into the surface has to be balanced by the normal reaction."
            },
            {
              "eq": "along the incline: <i>mg</i> sin <i>θ<sub>r</sub></i> = <i>μ<sub>s</sub>N</i> = <i>μ<sub>s</sub> mg</i> cos <i>θ<sub>r</sub></i>",
              "why": "The down-slope pull is exactly balanced by limiting friction, because the block is on the verge and not yet moving."
            },
            {
              "eq": "cancel <i>mg</i> and divide: tan <i>θ<sub>r</sub></i> = <i>μ<sub>s</sub></i>",
              "why": "The mass cancels completely, and that is the physically interesting part: the steepest safe slope is set entirely by the surfaces' grip. A heavier block presses down harder but is gripped harder in exactly the same proportion."
            },
            {
              "eq": "but tan <i>λ</i> = <i>μ<sub>s</sub></i> defines the angle of friction, so <i>θ<sub>r</sub></i> = <i>λ</i>",
              "why": "The two angles are the same number reached by two different routes. This is why sand, gravel or rice always piles up into a cone of the same characteristic angle, no matter how much you pour."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE BEST ANGLE TO DRAG SOMETHING AT",
          "steps": [
            {
              "eq": "pull a block on rough level ground with force <i>F</i> at angle <i>θ</i> above the horizontal",
              "why": "Two competing effects. The upward component reduces the normal force, and so reduces friction, which is good. But it also wastes part of <i>F</i> in a vertical direction that does no dragging, which is bad. There must be a sweet spot."
            },
            {
              "eq": "vertical: <i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i>",
              "why": "The block stays on the floor, so the normal reaction plus the pull's vertical share balance the weight. Note this is the perpendicular balance again, and it is the whole reason the normal force is not <i>mg</i>."
            },
            {
              "eq": "at the verge: <i>F</i> cos <i>θ</i> = <i>μN</i> = <i>μ</i>(<i>mg</i> − <i>F</i> sin <i>θ</i>)",
              "why": "The horizontal share of the pull is exactly balanced by limiting friction at the instant sliding begins."
            },
            {
              "eq": "<i>F</i> = <i>μmg</i>/(cos <i>θ</i> + <i>μ</i> sin <i>θ</i>)",
              "why": "Collect the <i>F</i> terms. To make <i>F</i> as small as possible, make the denominator as large as possible."
            },
            {
              "eq": "cos <i>θ</i> + <i>μ</i> sin <i>θ</i> peaks at √(1 + <i>μ</i><sup>2</sup>) when tan <i>θ</i> = <i>μ</i>",
              "why": "So the optimal angle is exactly the angle of friction, <i>θ</i> = <i>λ</i>, and <i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i>. Pulling horizontally would need <i>μmg</i> = <i>mg</i> tan <i>λ</i>, which is always more, since sin <i>λ</i> is always less than tan <i>λ</i>. This is the physics behind why you instinctively tilt the handle when dragging a loaded trolley."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.4 · A BLOCK ON A ROUGH INCLINE",
          "chips": ["the three forces", "the weight, resolved"],
          "captions": [
            "Weight mg straight down, normal reaction N perpendicular to the surface, friction f up the slope because the block's tendency is to slide down. Only three arrows, and every one of them acts on the block.",
            "The same weight, split along the natural axes. mg sin θ pulls down the slope and mg cos θ presses into it. At the verge of sliding the first equals the limiting friction and the second sets <i>N</i>, and dividing one by the other gives tan <i>θ</i> = <i>μ<sub>s</sub></i> with the mass gone."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [1.0, 1.0], "w": 5.0, "h": 2.827 },
                { "kind": "block", "at": [3.357, 2.882], "w": 1.2, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [3.357, 2.882], "to": [2.524, 4.297], "tone": "amber", "label": "N", "at": "end" },
                { "from": [3.357, 2.882], "to": [3.357, 1.35], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [3.357, 2.882], "to": [4.559, 3.562], "tone": "green", "label": "f", "at": "end" }
              ],
              "arcs": [
                { "at": [1.0, 1.0], "r": 0.85, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [1.0, 1.0], "w": 5.0, "h": 2.827 },
                { "kind": "block", "at": [3.357, 2.882], "w": 1.2, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [3.357, 2.882], "to": [3.357, 1.35], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [3.357, 2.882], "to": [2.680, 2.499], "tone": "amber", "label": "mg sin θ", "at": "below" },
                { "from": [3.357, 2.882], "to": [4.034, 1.732], "tone": "amber", "label": "mg cos θ", "at": "end" }
              ],
              "segments": [
                { "from": [2.680, 2.499], "to": [3.357, 1.35], "dash": true, "soft": true },
                { "from": [4.034, 1.732], "to": [3.357, 1.35], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [1.0, 1.0], "r": 0.85, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.C · FRICTION AGAINST THE FORCE YOU APPLY",
          "chips": ["the whole story on one graph"],
          "captions": [
            "A 2 kg block with <i>μ<sub>s</sub></i> = 0.4 and <i>μ<sub>k</sub></i> = 0.3, on level ground with <i>g</i> = 10 m/s<sup>2</sup>. Along the sloping line friction is static and equals the applied force exactly, so the block does not move. At 8 N it reaches its ceiling <i>μ<sub>s</sub>N</i>. Push harder and the block breaks free, friction drops to <i>μ<sub>k</sub>N</i> = 6 N and stays there however hard you push. That vertical drop is the little lurch you feel."
          ],
          "frames": [
            {
              "x": [0, 13], "y": [0, 12],
              "axisX": "applied force (N)", "axisY": "friction (N)",
              "ticksX": { "at": [0, 4, 8, 12] }, "ticksY": { "at": [0, 6, 8] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [8, 8]] },
                { "c": "pts", "pts": [[8, 6], [12.8, 6]] }
              ],
              "segments": [
                { "from": [8, 0], "to": [8, 8], "dash": true, "soft": true }
              ],
              "points": [
                { "x": 8, "y": 8, "label": "limit", "at": "nw" },
                { "x": 8, "y": 6, "label": "kinetic", "at": "se", "open": true }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.5 · FRICTION INSIDE A CONNECTED SYSTEM",
          "chips": ["the rig"],
          "captions": [
            "A 3 kg block on a rough table, joined by a light string over a frictionless pulley at the edge to a 2 kg block hanging free. The hanging weight drives the system and friction on the table block opposes its motion toward the pulley. Both blocks share one acceleration, because the string cannot stretch."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [3.2, 3.5], "w": 6.4, "h": 0.3 },
                { "kind": "block", "at": [2.2, 4.1], "w": 1.5, "h": 0.9, "label": "3 kg" },
                { "kind": "pulley", "at": [6.85, 3.9], "w": 0.7 },
                { "kind": "rope", "at": [2.95, 4.244], "to": [6.85, 4.244] },
                { "kind": "rope", "at": [7.2, 3.9], "to": [7.2, 2.35] },
                { "kind": "block", "at": [7.2, 1.95], "w": 1.4, "h": 0.85, "label": "2 kg" }
              ],
              "arrows": [
                { "from": [2.2, 3.78], "to": [1.15, 3.78], "tone": "red", "label": "f", "at": "above" },
                { "from": [2.2, 5.05], "to": [3.5, 5.05], "tone": "amber", "label": "a", "at": "above" },
                { "from": [8.1, 2.3], "to": [8.1, 1.3], "tone": "amber", "label": "a", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Every friction problem, in the same five moves",
          "steps": [
            "<b>Find the normal reaction from the perpendicular balance.</b> Not <i>mg</i> by reflex: <i>mg</i> cos <i>θ</i> on a slope, <i>mg</i> ∓ <i>F</i> sin <i>θ</i> under an angled force, <i>m</i>(<i>g</i> ± <i>a</i>) in a lift. Every later number depends on this one.",
            "<b>Compute the ceiling <i>μ<sub>s</sub>N</i>.</b> This single number decides the rest of the problem, so write it down before anything else.",
            "<b>Compute the driving force</b>, the tangential force that would move the body: the applied push, the hanging weight, or <i>mg</i> sin <i>θ</i> on an incline.",
            "<b>Compare them.</b> Driving force below the ceiling: the body is static, friction equals the driving force exactly, and the acceleration is zero. Above the ceiling: the body slides and friction is <i>μ<sub>k</sub>N</i>, which is smaller.",
            "<b>Only now write Newton's second law,</b> with friction pointing against the relative sliding, and solve. On an incline the shortcut form of step 4 is simply to compare tan <i>θ</i> with <i>μ<sub>s</sub></i>."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 2 kg block rests on a rough horizontal floor with <i>μ<sub>s</sub></i> = 0.4 and <i>μ<sub>k</sub></i> = 0.3. Find the frictional force when a horizontal force of (a) 5 N, (b) 8 N, (c) 12 N is applied. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Find the limiting friction first, always the first move: <i>f</i><sub>max</sub> = <i>μ<sub>s</sub>mg</i> = 0.4(2)(10) = 8 N. This threshold decides all three answers.",
            "(a) 5 N is below 8 N, so the block does not move and static friction self-adjusts to balance the push exactly: <i>f<sub>s</sub></i> = 5 N.",
            "(b) 8 N equals the limiting friction exactly, so the block is on the verge of sliding and friction is at its maximum: <i>f<sub>s</sub></i> = 8 N.",
            "(c) 12 N exceeds 8 N, so the block breaks free and kinetic friction takes over: <i>f<sub>k</sub></i> = <i>μ<sub>k</sub>mg</i> = 0.3(2)(10) = 6 N.",
            "Notice the drop in (c): the friction falls from 8 N to 6 N the moment sliding starts. That is the lurch, and it is also why an answer of 8 N in part (a) would be wrong by 3 N and by a whole concept."
          ],
          "ans": "(a) 5 N · (b) 8 N · (c) 6 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A coin placed on a closed textbook starts to slide the moment the book is tilted to 30° from the horizontal. Find the coefficient of static friction between coin and cover.",
          "steps": [
            "The trap is reaching for <i>mg</i> sin <i>θ</i> and <i>mg</i> cos <i>θ</i>, setting up full equilibrium equations, and losing a minute under exam pressure.",
            "Starts to slide when tilted to <i>θ</i> is the literal definition of the angle of repose, and the angle of repose equals the angle of friction.",
            "So <i>μ<sub>s</sub></i> = tan <i>θ<sub>r</sub></i> = tan 30° = 1/√3 ≈ 0.58.",
            "Beware distractors offering sin 30° = 0.5 or cos 30° = 0.87. They tempt anyone who sets up the components correctly and then forgets that they cancel into a clean tangent."
          ],
          "ans": "μ<sub>s</sub> = 1/√3 ≈ 0.58"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 3 kg block on a rough horizontal table is joined by a light string over a frictionless pulley at the table's edge to a freely hanging 2 kg block. The coefficient of friction between block and table is 0.2. Find the acceleration and the tension. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Will it move at all? The hanging weight drives it: <i>m</i><sub>2</sub><i>g</i> = 2(10) = 20 N. The maximum friction resisting it: <i>μm</i><sub>1</sub><i>g</i> = 0.2(3)(10) = 6 N. Since 20 N is above 6 N, the system accelerates and kinetic friction applies.",
            "Hanging block, taking downward as positive for it: <i>m</i><sub>2</sub><i>g</i> − <i>T</i> = <i>m</i><sub>2</sub><i>a</i>, so 20 − <i>T</i> = 2<i>a</i>.",
            "Table block, taking motion toward the pulley as positive for it: <i>T</i> − <i>μm</i><sub>1</sub><i>g</i> = <i>m</i><sub>1</sub><i>a</i>, so <i>T</i> − 6 = 3<i>a</i>.",
            "Add the two to eliminate <i>T</i>: 20 − 6 = 5<i>a</i>, so <i>a</i> = 14/5 = 2.8 m/s<sup>2</sup>. Substituting back, <i>T</i> = 6 + 3(2.8) = 14.4 N.",
            "Check: the tension, 14.4 N, is less than the hanging weight, 20 N, which is exactly right for a block that is accelerating downward. If <i>T</i> ever comes out above <i>m</i><sub>2</sub><i>g</i> here, you have a sign error."
          ],
          "ans": "a = 2.8 m/s<sup>2</sup> · T = 14.4 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A crate of mass 10 kg rests on a rough floor with <i>μ</i> = 0.75. A worker wants to drag it with a rope. Compare the force needed pulling horizontally with the force needed at the best possible angle, and find that angle. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Horizontal pull: the whole weight presses on the floor, so <i>N</i> = <i>mg</i> = 100 N and <i>F</i> = <i>μmg</i> = 0.75(100) = 75 N.",
            "Angled pull: the minimum occurs at the angle of friction, <i>λ</i> = tan<sup>−1</sup>(0.75) ≈ 37°, the 3-4-5 angle.",
            "<i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = 75/√1.5625 = 75/1.25 = 60 N. The slicker route gives the same number: <i>mg</i> sin <i>λ</i> = 100(0.6) = 60 N.",
            "So the angled pull saves 15 N, a full 20 per cent. It wins because lifting at <i>λ</i> reduces the normal force, and so the friction, faster than it wastes pull in the vertical direction.",
            "The same idea generalises to a slope, and it is worth carrying: on a rough incline of angle <i>θ</i>, the least force that will <i>hold</i> a block is <i>mg</i> sin(<i>θ</i> − <i>λ</i>), pressed <i>into</i> the plane at <i>λ</i>, and the least force that will <i>haul</i> it up is <i>mg</i> sin(<i>θ</i> + <i>λ</i>), lifted <i>away</i> from the plane at <i>λ</i>. One formula family, and only the sign inside the sine changes with which way friction is helping you."
          ],
          "ans": "horizontal 75 N · at the angle of friction 37°, only 60 N, a saving of 20 per cent"
        },
        {
          "t": "mcq",
          "q": "A 5 kg block sits on a rough floor with <i>μ<sub>s</sub></i> = 0.5. A horizontal force of 15 N is applied and the block does not move. The frictional force on it is (<i>g</i> = 10 m/s<sup>2</sup>):",
          "opts": [
            { "label": "25 N", "nudge": "This computes <i>μ<sub>s</sub>N</i> without checking whether the block is actually at the verge of sliding. It is the single most common friction error, and here it would exceed the applied force, which would push the block backward." },
            { "label": "15 N", "nudge": null },
            { "label": "0 N", "nudge": "Friction must balance the applied force, or the block would accelerate. The question says it does not move." },
            { "label": "7.5 N", "nudge": "This multiplies <i>μ<sub>s</sub></i> by the applied force, which is a meaningless product: <i>μ</i> multiplies the <i>normal</i> force, never a tangential one." }
          ],
          "correct": 1,
          "solution": "The limiting friction is <i>μ<sub>s</sub>mg</i> = 0.5(50) = 25 N. The applied 15 N is below that, so the block stays put and static friction self-adjusts to exactly 15 N."
        },
        {
          "t": "mcq",
          "q": "The force of limiting friction between two surfaces in contact:",
          "opts": [
            { "label": "increases if the apparent area of contact increases", "nudge": "The empirical laws say the apparent contact area does not matter: a brick on its large face or its small face has the same limiting friction, because <i>N</i> is the same." },
            { "label": "is independent of the apparent contact area but proportional to the normal reaction", "nudge": null },
            { "label": "depends only on the area of contact", "nudge": "Same objection, and worse: it also drops the dependence on <i>N</i>, which is the one thing friction genuinely does depend on." },
            { "label": "is independent of the normal reaction", "nudge": "This contradicts the defining relation <i>f</i> = <i>μN</i> outright." }
          ],
          "correct": 1,
          "solution": "By the empirical laws of friction, limiting friction is proportional to the normal reaction and, to a good approximation, independent of the apparent area of contact."
        },
        {
          "t": "mcq",
          "q": "Which statement about friction is correct?",
          "opts": [
            { "label": "friction always opposes the motion of a body", "nudge": "The classic misconception. Friction opposes relative <i>sliding</i> between surfaces, which is not the same thing, and it frequently drives motion." },
            { "label": "static friction can be the force that propels a body forward", "nudge": null },
            { "label": "kinetic friction is always greater than limiting static friction", "nudge": "Backwards: kinetic friction is generally the smaller of the two, which is the whole reason a body lurches as it breaks free." },
            { "label": "friction acts only on bodies that are moving", "nudge": "This ignores static friction entirely, which acts on stationary bodies and is most of this topic." }
          ],
          "correct": 1,
          "solution": "When you walk, or when a car's driving wheels turn, static friction from the ground pushes you forward. It is the driving force there, not a retarding one."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 4 kg block rests on a rough surface with <i>μ<sub>s</sub></i> = 0.5 and <i>μ<sub>k</sub></i> = 0.4. Find the friction when a horizontal force of (a) 12 N and (b) 25 N is applied. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "Limiting friction = 0.5(40) = 20 N. (a) 12 N is below it, so friction = 12 N, static. (b) 25 N is above it, so it slides: friction = 0.4(40) = 16 N." },
            { "q": "[NEET] A body on a rough inclined plane just begins to slide when the inclination reaches 45°. Find the coefficient of static friction.", "a": "That angle is the angle of repose, so <i>μ<sub>s</sub></i> = tan 45° = 1." },
            { "q": "[JEE Main] A 5 kg block slides down a rough 37° incline with <i>μ<sub>k</sub></i> = 0.25. Find its acceleration. (<i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8)", "a": "Check first: tan 37° = 0.75, well above 0.25, so it really does slide. <i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ<sub>k</sub></i> cos <i>θ</i>) = 10(0.6 − 0.2) = 4 m/s<sup>2</sup>." },
            { "q": "[JEE Main] A 6 kg block on a rough table with <i>μ</i> = 0.3 is joined over a frictionless pulley to a hanging 4 kg block. Find the acceleration and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "Driving 40 N against friction 0.3(60) = 18 N, so <i>a</i> = (40 − 18)/10 = 2.2 m/s<sup>2</sup>. Then <i>T</i> = 4(10) − 4(2.2) = 31.2 N." },
            { "q": "[JEE Advanced] A uniform chain lies on a rough horizontal table with <i>μ<sub>s</sub></i> = 0.25. Find the largest fraction of its length that can hang over the edge without the chain sliding off.", "a": "At the verge, the hanging part's weight equals the limiting friction on the part still on the table: <i>y</i>/<i>L</i> = <i>μ</i>/(1 + <i>μ</i>) = 0.25/1.25 = 0.2, that is 20 per cent." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Writing friction = <i>μN</i> unconditionally.</b> Static friction equals <i>μ<sub>s</sub>N</i> only at the verge of sliding. Below that it equals whatever tangential force is applied. Always compute the limiting friction first, compare it with the driving force, and only then decide whether the body is static or sliding.",
            "<b>Pointing friction the wrong way, because it is drawn against the motion rather than against the sliding.</b> Ask which way the two surfaces would slip over each other if friction vanished, and point it the other way. Static friction on a walker's shoe or a car's driving wheel points <i>forward</i>, and getting that backward inverts the whole answer.",
            "<b>Skipping the does-it-move test on inclines.</b> A block on a rough incline stays put whenever tan <i>θ</i> ≤ <i>μ<sub>s</sub></i>. Plugging into <i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ<sub>k</sub></i> cos <i>θ</i>) when the block is not actually sliding invents an acceleration out of nothing, and often a negative one.",
            "<b>Believing friction depends on the contact area.</b> It does not, to exam approximation. A brick on its large face or its small face experiences the same limiting friction, because the normal force is unchanged and that is all friction sees.",
            "<b>Inheriting a wrong normal force.</b> Friction is <i>μ</i> times <i>N</i>, and <i>N</i> is not <i>mg</i> on a slope, in a lift or under an angled pull. Every friction error of this kind starts one line earlier, in the perpendicular balance."
          ]
        },
        {
          "t": "protip",
          "html": "the instant a problem says a body just begins to slide on an incline of angle <i>θ</i>, write <i>μ<sub>s</sub></i> = tan <i>θ</i> and stop, no resolution needed. and on <i>any</i> incline question make your first scratch-pad line the comparison of tan <i>θ</i> with <i>μ<sub>s</sub></i>: it tells you in one step whether you are in the static regime or the kinetic one. one more pattern worth carrying: a parallel force holding a block on a rough incline is not a single number but a <i>range</i>, from <i>mg</i>(sin <i>θ</i> − <i>μ<sub>s</sub></i> cos <i>θ</i>) up to <i>mg</i>(sin <i>θ</i> + <i>μ<sub>s</sub></i> cos <i>θ</i>). for 5 kg on 37° with <i>μ<sub>s</sub></i> = 0.5 that is anything from 10 N to 50 N, and at the midpoint, 30 N, friction is doing nothing at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "0 ≤ <i>f<sub>s</sub></i> ≤ <i>μ<sub>s</sub>N</i> · <i>f<sub>k</sub></i> = <i>μ<sub>k</sub>N</i>", "note": "static is self-adjusting and equals the applied force; only kinetic is fixed" },
            { "f": "friction opposes relative sliding, not motion", "note": "which is why static friction is what lets you walk and what drives a car forward" },
            { "f": "tan <i>θ<sub>r</sub></i> = <i>μ<sub>s</sub></i> = tan <i>λ</i>, so <i>θ<sub>r</sub></i> = <i>λ</i>", "note": "angle of repose equals angle of friction, and the mass cancels out of both" },
            { "f": "<i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ<sub>k</sub></i> cos <i>θ</i>)", "note": "valid only once tan <i>θ</i> exceeds <i>μ<sub>s</sub></i>, so check that first" },
            { "f": "<i>F</i><sub>min</sub> = <i>mg</i> sin <i>λ</i>, pulled at <i>θ</i> = <i>λ</i>", "note": "always less than the horizontal <i>μmg</i>, because sin <i>λ</i> is less than tan <i>λ</i>" }
          ],
          "aids": [
            "\"static is shy and self-adjusting, kinetic is constant and a little weaker\"",
            "\"repose equals friction equals arctan mu\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Connected Bodies, Pulleys and Constraints",
      "chip": "05 CONNECTED BODIES",
      "kalam": "cut, draw, add: the tension falls out on its own",
      "blocks": [
        {
          "t": "p",
          "html": "Real machines are rarely a lone block. A lift and its counterweight, a crane, a tow-truck, two wagons coupled on a track: all of them are <b>connected bodies</b>, linked by strings, rods or plain contact, and forced to move together in a related way. The physics here is not new. It is Newton's second law applied carefully to each body, plus one extra idea, a <b>constraint</b>. A constraint is a relationship that the connection forces upon the motions. The cleanest example: two blocks joined by an inextensible string over a fixed pulley. The string cannot stretch, so whatever length leaves one side arrives on the other. If one block moves down by 1 cm, the other moves up by 1 cm. Their speeds are equal, and so are the magnitudes of their accelerations. That single sentence is what makes two equations solvable."
        },
        {
          "t": "p",
          "html": "Three configurations recur so often they are worth recognising on sight. <b>Blocks in contact, pushed by a force:</b> treat the train as one body to get the common acceleration, then isolate one block to find the internal contact force. <b>The Atwood machine:</b> two masses hanging from a string over a fixed pulley, the heavier descending and the lighter rising with a shared acceleration <i>smaller</i> than <i>g</i>. The genius of the device is exactly that, it dilutes gravity so the motion is slow enough to time, which is what it was built for. <b>A block on a table joined over a pulley to a hanging mass:</b> the hanging weight drives the system and the table block is dragged along, with the rough-table version already done in the last topic. In every one of them the same fact does the work: <b>the internal force at any junction only has to accelerate the mass beyond that junction, never the whole load</b>."
        },
        {
          "t": "think",
          "html": "an inextensible string is a rigid promise: for every metre i give to one side, i take a metre from the other. that promise is the constraint. the moment you trust it, equal speeds and equal accelerations for a simple pulley, the algebra collapses from four unknowns to two. a movable pulley makes a richer promise, one side moves twice as fast as the pulley itself, but it is the same idea underneath. when a rig gets complicated, stop guessing and count the string."
        },
        {
          "t": "def",
          "term": "What ideal buys you, and what a constraint actually is",
          "html": "Two idealisations do all the work in this topic, and each one is a licence with conditions. <b>An ideal string is massless and inextensible.</b> Massless means the tension is a single number at every point along it; a real rope with weight has a tension that varies down its length. Inextensible means lengths trade one for one between its two sides, and that is where the constraint comes from. <b>An ideal pulley is massless and frictionless</b>, so it merely redirects the string without changing the tension's magnitude; a pulley with mass, and therefore rotational inertia, does change it, and that belongs to a later chapter. Then the constraint itself: <b>the connection forces a relationship on the motions</b>. Over one fixed pulley it is simply that the two accelerations have equal magnitude. Under a movable pulley the load moves at half the free end's speed. Two conditions keep the whole picture honest: the string must stay taut, so a negative tension means it went slack and the bodies move independently, and blocks in contact must stay pressed together, so a negative contact force means they have already separated."
        },
        {
          "t": "defgrid",
          "title": "The standard rigs, and what each one gives you",
          "rows": [
            { "k": "Blocks in contact", "v": "<i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), contact force <i>N<sub>c</sub></i> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) with <i>F</i> applied to <i>m</i><sub>1</sub>" },
            { "k": "Atwood machine", "v": "<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), and <i>T</i> always lies between the two weights" },
            { "k": "Table plus hanging mass", "v": "smooth table: <i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)" },
            { "k": "Incline plus hanging mass", "v": "smooth: <i>a</i> = (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub> sin <i>θ</i>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), with <i>m</i><sub>1</sub> on the slope" },
            { "k": "One movable pulley", "v": "the load moves at half the free end's speed, and the tension needed is halved because two strands share the load" },
            { "k": "Inside an accelerating frame", "v": "replace <i>g</i> by <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub> and reuse every formula above unchanged" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CONSTRAINT, AND THE n-SEGMENT RULE",
          "tag": "ideal string, ideal pulley, so the tension is one number throughout",
          "main": "one fixed pulley: <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub><br>one movable pulley: <i>v</i><sub>free end</sub> = 2<i>v</i><sub>load</sub><br>and the load is then carried by 2<i>T</i>, one strand each side",
          "legend": [
            "<i>a</i> = acceleration (m/s<sup>2</sup>), <i>v</i> = speed (m/s), <i>T</i> = tension (N)",
            "an ideal string is massless and inextensible, so its tension is one number at every point along it, and lengths trade one for one between its two sides",
            "an ideal pulley is massless and frictionless, so it redirects the string without changing the tension at all: half the speed at the load, twice the force, which is the whole trade a block and tackle makes"
          ],
          "note": "The tension is uniform across an ideal pulley because the pulley is massless and frictionless. It differs across a pulley only when the pulley itself has mass, and therefore rotational inertia."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ATWOOD MACHINE AND ITS RELATIVES",
          "main": "<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) · <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>smooth table: <i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) · <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>inside a frame accelerating at <i>a</i><sub>0</sub>: <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub>",
          "legend": [
            "<i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> = the two masses (kg), with <i>m</i><sub>1</sub> the heavier for the Atwood machine and the table block for the second line",
            "<i>a</i> = common acceleration (m/s<sup>2</sup>), <i>T</i> = string tension (N), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>a</i><sub>0</sub> = the frame's own acceleration (m/s<sup>2</sup>), added for a lift going up and subtracted for one going down"
          ],
          "note": "Every one of these has a mass over a mass multiplying g or mg, so each acceleration is in m/s<sup>2</sup> and each tension is in newtons. A quick sanity read: the tension must land between the two weights, or a sign has slipped."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ATWOOD MACHINE, TAP A LINE",
          "steps": [
            {
              "eq": "for <i>m</i><sub>1</sub>, taking down as positive for it: <i>m</i><sub>1</sub><i>g</i> − <i>T</i> = <i>m</i><sub>1</sub><i>a</i>",
              "why": "The heavier mass descends, so choose down as its positive direction. Weight acts down, tension up, and the tension is one number because the string is massless and the pulley frictionless."
            },
            {
              "eq": "for <i>m</i><sub>2</sub>, taking up as positive for it: <i>T</i> − <i>m</i><sub>2</sub><i>g</i> = <i>m</i><sub>2</sub><i>a</i>",
              "why": "The lighter mass rises. Using each body's own direction of motion as its positive direction is what stops the signs going wrong, and the string's inextensibility is what lets both equations share one <i>a</i>."
            },
            {
              "eq": "add the two: (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i> = (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>a</i>",
              "why": "The tension cancels immediately, which is the whole reason to add rather than substitute. This one move solves almost every two-body problem in the chapter."
            },
            {
              "eq": "<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), then <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)",
              "why": "Back-substitute into either equation for the tension. Note the acceleration is always less than <i>g</i>, because the numerator is a difference and the denominator a sum."
            },
            {
              "eq": "check the two limits: <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>, and <i>m</i><sub>2</sub> → 0",
              "why": "Equal masses give <i>a</i> = 0 and <i>T</i> = <i>mg</i>: the system balances and the string is taut, carrying the weight of either mass. Let <i>m</i><sub>2</sub> vanish and <i>a</i> → <i>g</i> with <i>T</i> → 0: <i>m</i><sub>1</sub> is in free fall, as it must be. And in every case <i>T</i> lies strictly between <i>m</i><sub>2</sub><i>g</i> and <i>m</i><sub>1</sub><i>g</i>, which is why the heavier side wins."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CONTACT FORCE, AND WHY IT DEPENDS WHICH END YOU PUSH",
          "steps": [
            {
              "eq": "whole system: <i>F</i> = (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>a</i>, so <i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)",
              "why": "The two blocks are in contact and move together, so treat them as one body first. The internal contact forces are a Third Law pair and cancel in this equation, which is exactly why they do not appear."
            },
            {
              "eq": "isolate the front block <i>m</i><sub>2</sub>: <i>N<sub>c</sub></i> = <i>m</i><sub>2</sub><i>a</i> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)",
              "why": "The only horizontal force on the front block is the push from the rear one. Its free-body diagram is the clean one; the rear block's has two forces and is messier."
            },
            {
              "eq": "check on the rear block: <i>F</i> − <i>N<sub>c</sub></i> = <i>m</i><sub>1</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = <i>m</i><sub>1</sub><i>a</i>",
              "why": "It closes. The rear block feels the applied force forward and the Third Law reaction backward, and what is left is exactly its own share."
            },
            {
              "eq": "so <i>N<sub>c</sub></i> is never <i>F</i>, and it changes if you push the other end",
              "why": "Push the light block so it drives the heavy one and the contact force is large; reverse it and the contact force is small. The force felt at any interface is always the share needed to accelerate everything <i>ahead</i> of that interface. For 2 kg and 3 kg with <i>F</i> = 10 N, pushing the 2 kg gives 6 N at the interface and pushing the 3 kg gives only 4 N. That asymmetry is a favourite trap."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.D · THREE RIGS, ONE METHOD",
          "chips": ["blocks in contact", "the Atwood machine", "the movable pulley"],
          "captions": [
            "F pushes the 2 kg block, which pushes the 3 kg block through their contact face. Both share one acceleration F/5, and the contact force is 3a, the share needed to accelerate only what lies ahead of the interface.",
            "Two masses over one fixed ideal pulley. The string cannot stretch, so the accelerations have equal magnitude, and the tension is a single number on both sides. The heavier mass descends, the lighter rises, and the acceleration is always smaller than g.",
            "A movable pulley. Two strands support the load, so the tension needed is halved; but the free end must travel twice as far, so the load moves at half the free end's speed. Force and distance always trade against each other exactly."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.375], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [3.2, 2.05], "w": 1.6, "h": 1.1, "label": "2 kg" },
                { "kind": "block", "at": [4.8, 2.05], "w": 1.6, "h": 1.1, "label": "3 kg" }
              ],
              "arrows": [
                { "from": [1.0, 2.05], "to": [2.35, 2.05], "tone": "amber", "label": "F", "at": "mid" },
                { "from": [3.5, 3.4], "to": [5.0, 3.4], "tone": "green", "label": "a", "at": "mid" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[3, 6.2], [7, 6.2], [7, 6.45], [3, 6.45]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "bodies": [
                { "kind": "rope", "at": [5, 6.2], "to": [5, 5.2] },
                { "kind": "pulley", "at": [5, 5.2], "w": 2.0 },
                { "kind": "rope", "at": [4.0, 5.2], "to": [4.0, 4.1] },
                { "kind": "rope", "at": [6.0, 5.2], "to": [6.0, 3.2] },
                { "kind": "block", "at": [4.0, 3.65], "w": 1.3, "h": 0.9, "label": "3 kg" },
                { "kind": "block", "at": [6.0, 2.75], "w": 1.3, "h": 0.9, "label": "5 kg" }
              ],
              "arrows": [
                { "from": [3.0, 3.2], "to": [3.0, 4.2], "tone": "amber", "label": "a", "at": "end" },
                { "from": [7.0, 3.1], "to": [7.0, 2.1], "tone": "amber", "label": "a", "at": "end" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[1.5, 6.2], [8.5, 6.2], [8.5, 6.45], [1.5, 6.45]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "bodies": [
                { "kind": "rope", "at": [4.7, 6.2], "to": [4.7, 5.5] },
                { "kind": "pulley", "at": [4.7, 5.5], "w": 1.0 },
                { "kind": "rope", "at": [3.0, 6.2], "to": [3.0, 3.2] },
                { "kind": "rope", "at": [4.2, 3.2], "to": [4.2, 5.5] },
                { "kind": "rope", "at": [5.2, 5.5], "to": [5.2, 3.4] },
                { "kind": "pulley", "at": [3.6, 3.2], "w": 1.2 },
                { "kind": "rope", "at": [3.6, 2.6], "to": [3.6, 2.4] },
                { "kind": "block", "at": [3.6, 1.95], "w": 1.5, "h": 0.9, "label": "load" }
              ],
              "arrows": [
                { "from": [5.2, 3.3], "to": [5.2, 2.4], "tone": "amber", "label": "v", "at": "end" },
                { "from": [2.4, 2.0], "to": [2.4, 2.9], "tone": "green", "label": "v/2", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.E · WHEN DOES FRICTION SAY TOGETHER?",
          "chips": ["they move together", "the top one slips"],
          "captions": [
            "F pushes the lower block on a frictionless floor. The upper block is dragged along by interface friction alone, a Third Law pair: forward on the top block, backward on the bottom one. While the friction it needs stays under the ceiling <i>μ<sub>s</sub>mg</i>, the stack accelerates as one body.",
            "Push harder than 30 N and the needed friction exceeds the ceiling. Now kinetic friction takes over at <i>μ<sub>k</sub>mg</i> and the two blocks have different accelerations: the bottom one races ahead at 8.5 m/s<sup>2</sup> while the top one manages only <i>μ<sub>k</sub>g</i> = 4 m/s<sup>2</sup>, so the top block walks backward off the stack."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.425], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [4.5, 2.15], "w": 3.4, "h": 1.2, "label": "M = 4 kg" },
                { "kind": "block", "at": [4.5, 3.3], "w": 1.8, "h": 1.1, "label": "m = 2 kg" }
              ],
              "arrows": [
                { "from": [1.2, 2.15], "to": [2.65, 2.15], "tone": "amber", "label": "F", "at": "mid" },
                { "from": [3.4, 2.9], "to": [4.6, 2.9], "tone": "green", "label": "f", "at": "below" },
                { "from": [6.1, 2.62], "to": [4.9, 2.62], "tone": "green", "label": "f", "at": "above" },
                { "from": [7.2, 3.9], "to": [8.6, 3.9], "tone": "ink", "label": "a", "at": "mid" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.425], "w": 9, "h": 0.25 },
                { "kind": "block", "at": [4.5, 2.15], "w": 3.4, "h": 1.2, "label": "M = 4 kg" },
                { "kind": "block", "at": [4.5, 3.3], "w": 1.8, "h": 1.1, "label": "m = 2 kg" }
              ],
              "arrows": [
                { "from": [1.2, 2.15], "to": [2.65, 2.15], "tone": "amber", "label": "F", "at": "mid" },
                { "from": [3.4, 2.9], "to": [4.6, 2.9], "tone": "red", "label": "f", "at": "below" },
                { "from": [6.1, 2.62], "to": [4.9, 2.62], "tone": "red", "label": "f", "at": "above" },
                { "from": [7.0, 3.6], "to": [7.8, 3.6], "tone": "ink", "label": "top", "at": "mid" },
                { "from": [7.0, 2.4], "to": [8.7, 2.4], "tone": "ink", "label": "bottom", "at": "mid" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The universal recipe for connected bodies",
          "steps": [
            "<b>Decide which way the system will actually go.</b> Compare the driving forces first: the hanging weight against <i>m</i><sub>1</sub><i>g</i> sin <i>θ</i>, or against the maximum friction. Getting this wrong flips every sign.",
            "<b>Draw a separate free-body diagram for each body.</b> One body, one diagram, and only forces acting on that body.",
            "<b>Write Σ<i>F</i> = <i>ma</i> for each, taking that body's own direction of motion as its positive direction.</b> Do not try to impose one global sign on bodies moving in different directions.",
            "<b>Add the constraint.</b> Two bodies give two equations and three unknowns, <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub> and <i>T</i>. For a single fixed pulley the constraint is simply <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>. Without it the system cannot be solved at all.",
            "<b>Add the equations to cancel the tension</b>, solve for <i>a</i>, then back-substitute for <i>T</i>. Finish by checking that the tension lies between the two weights and that no tension came out negative."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In an Atwood machine, masses of 5 kg and 3 kg hang over a light frictionless pulley. Find the acceleration of the system and the tension in the string. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = (5 − 3)(10)/8 = 20/8 = 2.5 m/s<sup>2</sup>.",
            "<i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 2(5)(3)(10)/8 = 300/8 = 37.5 N.",
            "Check the answer against the weights: 30 N for the 3 kg and 50 N for the 5 kg. The tension 37.5 N lies between them, which is exactly what it must do.",
            "If a tension ever comes out above the heavier weight or below the lighter one, stop: you have a sign error, not an answer."
          ],
          "ans": "a = 2.5 m/s<sup>2</sup> · T = 37.5 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Three blocks of 1 kg, 2 kg and 3 kg are joined by light strings and pulled along a frictionless floor by <i>F</i> = 12 N applied to the 1 kg block. Find the tension in the string between the 2 kg and 3 kg blocks.",
          "steps": [
            "The trap is setting up three coupled equations and grinding. Do not.",
            "Common acceleration first: <i>a</i> = <i>F</i>/(1 + 2 + 3) = 12/6 = 2 m/s<sup>2</sup>.",
            "The string between the 2 kg and 3 kg blocks only has to accelerate everything <i>behind</i> that cut, which is just the 3 kg block: <i>T</i> = 3(2) = 6 N.",
            "The rule in one line: the tension at any cut equals the mass on the far side of the cut times <i>a</i>. That turns a system of equations into a single multiplication."
          ],
          "ans": "T = 6 N"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 4 kg block rests on a frictionless 30° incline. A light string from it runs up the slope, over a pulley at the top, and down to a freely hanging 3 kg block. Find the acceleration of the system and the tension. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Which way does it move? The hanging weight is <i>m</i><sub>2</sub><i>g</i> = 30 N. The down-slope pull on the incline block is <i>m</i><sub>1</sub><i>g</i> sin 30° = 4(10)(0.5) = 20 N. Since 30 N is more, the hanging block descends and the incline block slides <i>up</i> the slope.",
            "Hanging block, down positive for it: 30 − <i>T</i> = 3<i>a</i>.",
            "Incline block, up-slope positive for it: <i>T</i> − 20 = 4<i>a</i>.",
            "Add: 30 − 20 = 7<i>a</i>, so <i>a</i> = 10/7 ≈ 1.43 m/s<sup>2</sup>. Then <i>T</i> = 20 + 4(10/7) = 180/7 ≈ 25.7 N.",
            "Sanity check: 25.7 N is between the hanging weight 30 N and the down-slope pull 20 N, exactly where a tension that is losing to one side and winning against the other should sit."
          ],
          "ans": "a ≈ 1.43 m/s<sup>2</sup> · T ≈ 25.7 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A 2 kg block sits on a 4 kg block on a frictionless floor. Between the blocks <i>μ<sub>s</sub></i> = 0.5 and <i>μ<sub>k</sub></i> = 0.4. A horizontal force <i>F</i> is applied to the <b>lower</b> block. Take <i>g</i> = 10 m/s<sup>2</sup>. Find (a) the acceleration and the friction when <i>F</i> = 12 N, (b) the largest <i>F</i> for which nothing slips, and (c) both accelerations when <i>F</i> = 42 N.",
          "steps": [
            "First the interface ceiling, exactly as in the friction topic: <i>f</i><sub>max</sub> = <i>μ<sub>s</sub>mg</i> = 0.5(2)(10) = 10 N. Everything below is a comparison against this one number.",
            "(a) Hypothesise that they move together: <i>a</i> = <i>F</i>/(<i>M</i> + <i>m</i>) = 12/6 = 2 m/s<sup>2</sup>. The top block is driven by friction and nothing else, so the friction it <i>needs</i> is <i>f</i><sub>req</sub> = <i>ma</i> = 4 N. Since 4 N is below 10 N, static friction obliges, they do move together, and the friction actually acting is 4 N, not 10 N.",
            "(b) Slipping begins when <i>f</i><sub>req</sub> reaches 10 N, that is when <i>a</i> = <i>f</i><sub>max</sub>/<i>m</i> = 5 m/s<sup>2</sup>. Notice this is exactly <i>μ<sub>s</sub>g</i>, with the top mass cancelled: friction can never accelerate the top block faster than <i>μ<sub>s</sub>g</i>, whatever <i>F</i> does. So <i>F</i><sub>max</sub> = (<i>M</i> + <i>m</i>)<i>μ<sub>s</sub>g</i> = 6(5) = 30 N.",
            "(c) 42 N exceeds 30 N, so they slip and kinetic friction takes over at <i>μ<sub>k</sub>mg</i> = 8 N. Top block, driven by friction alone: <i>a</i><sub>top</sub> = 8/2 = 4 m/s<sup>2</sup>. Bottom block: <i>a</i><sub>bot</sub> = (42 − 8)/4 = 8.5 m/s<sup>2</sup>. Relative acceleration 4.5 m/s<sup>2</sup>, and the top block walks backward off the stack.",
            "Check: the two slipped equations must rebuild the whole-system one. <i>Ma</i><sub>bot</sub> + <i>ma</i><sub>top</sub> = 4(8.5) + 2(4) = 34 + 8 = 42 N = <i>F</i>. And 4 m/s<sup>2</sup> is indeed below the 5 m/s<sup>2</sup> ceiling, as it must be."
          ],
          "ans": "(a) a = 2 m/s<sup>2</sup>, friction 4 N · (b) F<sub>max</sub> = 30 N · (c) a<sub>top</sub> = 4 m/s<sup>2</sup>, a<sub>bot</sub> = 8.5 m/s<sup>2</sup>"
        },
        {
          "t": "mcq",
          "q": "An Atwood machine carries two equal masses <i>m</i>. When released, the system:",
          "opts": [
            { "label": "accelerates at <i>g</i>", "nudge": "That would need the string to be doing nothing at all. Each mass is held up by a taut string, so neither is in free fall." },
            { "label": "accelerates at <i>g</i>/2", "nudge": "There is no net driving force to produce any acceleration: the formula's numerator is <i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>, which is zero here." },
            { "label": "stays at rest or moves at constant velocity, with <i>T</i> = <i>mg</i>", "nudge": null },
            { "label": "has zero tension in the string", "nudge": "The tempting one, and it is what an equal-mass Atwood machine looks like from the outside: nothing is happening. But the formula gives <i>T</i> = 2<i>m</i><sup>2</sup><i>g</i>/2<i>m</i> = <i>mg</i>. Cut the string and both masses fall, which is proof enough that it was under tension." }
          ],
          "correct": 2,
          "solution": "With <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> = <i>m</i>, the acceleration formula gives <i>a</i> = 0 and the tension formula gives <i>T</i> = 2<i>m</i><sup>2</sup><i>g</i>/(2<i>m</i>) = <i>mg</i>. The string simply balances the two equal weights."
        },
        {
          "t": "mcq",
          "q": "A light inextensible string connects two blocks over a single fixed ideal pulley. The magnitudes of their accelerations are related by:",
          "opts": [
            { "label": "<i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>", "nudge": null },
            { "label": "<i>a</i><sub>1</sub> = 2<i>a</i><sub>2</sub>", "nudge": "That is the <i>movable</i>-pulley relation, where the load moves at half the free end's rate. A fixed pulley only redirects the string." },
            { "label": "<i>m</i><sub>1</sub><i>a</i><sub>1</sub> = <i>m</i><sub>2</sub><i>a</i><sub>2</sub>", "nudge": "This says the two net forces are equal, which is not what an inextensible string enforces. It also has no route from any constraint." },
            { "label": "they are unrelated", "nudge": "If they were unrelated the problem would have three unknowns and two equations, and could not be solved at all." }
          ],
          "correct": 0,
          "solution": "The string cannot stretch, so whatever length leaves one side arrives on the other. The two speeds are equal and so are the magnitudes of the accelerations. This is the constraint that makes the system solvable."
        },
        {
          "t": "mcq",
          "q": "Two blocks of masses <i>m</i> and 2<i>m</i> are in contact on a frictionless floor. The contact force between them is <b>larger</b> when the applied force pushes:",
          "opts": [
            { "label": "the block of mass <i>m</i>, so that it drives the 2<i>m</i>", "nudge": null },
            { "label": "the block of mass 2<i>m</i>, so that it drives the <i>m</i>", "nudge": "This makes the light block the mass ahead of the interface, so the interface only has to deliver <i>F</i>/3, the smaller of the two answers." },
            { "label": "either one, the contact force is the same", "nudge": "The symmetry trap. The contact force is set by the mass <i>ahead</i> of the interface, and swapping ends swaps which mass that is." },
            { "label": "it cannot be determined without the value of <i>F</i>", "nudge": "The <i>ratio</i> of the two answers is 2 to 1 whatever <i>F</i> is, so the comparison is fully determined." }
          ],
          "correct": 0,
          "solution": "The contact force equals the mass ahead of the interface times <i>a</i>. Pushing <i>m</i> makes 2<i>m</i> the mass ahead, giving 2<i>F</i>/3; pushing 2<i>m</i> gives only <i>F</i>/3."
        },
        {
          "t": "mcq",
          "q": "An Atwood machine is taken into a lift that is in free fall. The tension in the string becomes:",
          "opts": [
            { "label": "unchanged", "nudge": "The tension depends on <i>g</i>, and inside a freely falling lift the effective gravity is not <i>g</i> at all." },
            { "label": "doubled", "nudge": "Nothing in the free-fall condition doubles anything; the effective gravity falls, so the tension must fall too." },
            { "label": "zero", "nudge": null },
            { "label": "infinite", "nudge": "An infinite tension would need an infinite effective gravity, which is the opposite of what free fall does." }
          ],
          "correct": 2,
          "solution": "In free fall <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i><sub>0</sub> = 0, so <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i><sub>eff</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 0 and <i>a</i><sub>rel</sub> = 0. The masses float beside each other and the string goes slack."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] An Atwood machine has masses of 6 kg and 4 kg. Find the acceleration and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>a</i> = (6 − 4)(10)/10 = 2 m/s<sup>2</sup>. <i>T</i> = 2(6)(4)(10)/10 = 48 N, which sits between 40 N and 60 N as it should." },
            { "q": "[NEET] Blocks of 2 kg and 4 kg in contact on a frictionless floor are pushed by <i>F</i> = 18 N applied to the 2 kg block. Find the contact force.", "a": "<i>a</i> = 18/6 = 3 m/s<sup>2</sup>. Contact force = mass ahead of the interface times <i>a</i> = 4(3) = 12 N." },
            { "q": "[JEE Main] A 4 kg block on a frictionless table is joined over a pulley at the edge to a hanging 2 kg block. Find the acceleration and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 20/6 ≈ 3.33 m/s<sup>2</sup>. <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 80/6 ≈ 13.3 N." },
            { "q": "[JEE Main] A 2 kg block on a frictionless 37° incline is joined over a pulley to a hanging 3 kg block. Find the acceleration. (<i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6)", "a": "Driving 3(10) = 30 N against 2(10)(0.6) = 12 N, so <i>a</i> = (30 − 12)/5 = 3.6 m/s<sup>2</sup>." },
            { "q": "[JEE Advanced] An Atwood machine with 5 kg and 3 kg hangs in a lift accelerating <i>downward</i> at 2 m/s<sup>2</sup>. Find the acceleration of the masses relative to the lift, and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>g</i><sub>eff</sub> = 10 − 2 = 8 m/s<sup>2</sup>. Then <i>a</i><sub>rel</sub> = (2)(8)/8 = 2 m/s<sup>2</sup> and <i>T</i> = 2(5)(3)(8)/8 = 30 N." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the constraint.</b> Two bodies give two equations but three unknowns, <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub> and <i>T</i>. Without the constraint linking the accelerations the system is simply unsolvable, and for a single fixed pulley that constraint is just <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>.",
            "<b>Using inconsistent positive directions.</b> Choose the direction each body actually moves as positive <i>for that body</i>, then the signs in Σ<i>F</i> = <i>ma</i> look after themselves. Trying to impose one global sign on bodies moving in opposite directions flips a term and ruins the answer.",
            "<b>Using the full applied force as the internal force.</b> The tension or contact force at any junction only accelerates the mass beyond that junction, never the whole load. This is the mistake that makes a three-block problem take five minutes instead of one line.",
            "<b>Letting the tension differ across an ideal pulley.</b> For a massless string over a frictionless pulley there is one tension throughout. It differs only when the pulley itself has mass, and therefore rotational inertia, which is a Class 11 rotational-motion topic, not this one.",
            "<b>Mishandling the movable-pulley factor of two.</b> A load on a movable pulley moves at half the free end's speed and the supporting tension is halved, but it is shared by two strands. When in doubt, count the string segments and differentiate the total length twice; guessing is what the method exists to replace."
          ]
        },
        {
          "t": "protip",
          "html": "the one move that solves almost every two-body problem: write Σ<i>F</i> = <i>ma</i> for each body with consistent signs, then simply <b>add</b> the equations. the tension cancels and the acceleration falls out in one line. back-substitute for <i>T</i> afterwards. for anything with more than one pulley, name a coordinate for every moving piece, write the string's total length, and differentiate twice: the constants die and a linear relation among the accelerations drops out. that also generalises the factor of two, since a string running in <i>n</i> segments between a movable pulley and fixed points gives <i>v</i><sub>load</sub> = <i>v</i><sub>string</sub>/<i>n</i> with the load held by <i>nT</i>. then audit your answer with power: an ideal string stores no energy, so the total of tension times velocity summed over all its attachment points must come to zero. thirty seconds of multiplication catches almost every sign error a multi-pulley rig can hide."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "constraint first: one fixed pulley gives <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>", "note": "two bodies, three unknowns, so without it there is nothing to solve" },
            { "f": "Atwood: <i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)", "note": "difference over sum times <i>g</i>, and <i>T</i> always lands between the two weights" },
            { "f": "internal force = (mass beyond the junction) × <i>a</i>", "note": "never the whole applied force, and it changes if you push the other end" },
            { "f": "movable pulley: half the speed, half the tension, two strands", "note": "in general <i>v</i><sub>load</sub> = <i>v</i><sub>string</sub>/<i>n</i> and the load is held by <i>nT</i>" },
            { "f": "accelerating frame: swap <i>g</i> for <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub>", "note": "free fall gives <i>g</i><sub>eff</sub> = 0, so the masses float and the string goes slack" }
          ],
          "aids": [
            "\"cut, draw, add, and the tension falls out\"",
            "\"difference over sum times g\", and \"count the string, do not guess it\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Circular Motion: Banking and the Vertical Loop",
      "chip": "06 CIRCULAR MOTION",
      "kalam": "name the real force that points at the centre, then set it equal to mv squared over r",
      "blocks": [
        {
          "t": "p",
          "html": "Watch a car take a sharp turn on a flat road and you feel your body flung toward the outer side. Watch a cyclist round a corner at speed and she <i>leans inward</i>, almost alarmingly so. Watch the daredevil at a village mela riding around the inside of a vertical wooden cylinder, the well of death, apparently defying gravity. All three are the same physics. And it starts with a fact that surprises most students: <b>a body moving in a circle at constant speed is still accelerating</b>. Its speed is not changing, but its direction is changing every instant, and velocity is a vector, so a changing direction is a changing velocity. That acceleration always points toward the <b>centre</b> of the circle and has magnitude <i>v</i><sup>2</sup>/<i>r</i>."
        },
        {
          "t": "p",
          "html": "An acceleration needs a force, so circular motion <b>demands</b> a net inward force of magnitude <i>mv</i><sup>2</sup>/<i>r</i>, called the <b>centripetal force</b>. Here is the single most misunderstood point in the topic: <b>centripetal force is not a new kind of force.</b> It is the name for the <i>role</i> played by whatever real force happens to point toward the centre. Friction for a turning car. Tension for a stone on a string. Gravity for a satellite. The normal reaction for the well-of-death rider. Your job in every problem is to identify the real inward force, set it equal to <i>mv</i><sup>2</sup>/<i>r</i>, and solve. Writing centripetal force as an extra arrow in a free-body diagram, on top of the real forces, double-counts and gives a wrong answer every time."
        },
        {
          "t": "think",
          "html": "when your car turns left and you lurch right, no real force pushed you outward. your body, obeying inertia, simply wanted to keep going straight while the car curved away beneath you. then the seat or the door pushed you inward to make you turn with it. from inside the car you may pretend there is an outward force, the centrifugal force, but it is a pseudo-force, a bookkeeping fiction valid only in the rotating frame. and it is not the third-law partner of the centripetal force: those two act on the same body, described from two different frames."
        },
        {
          "t": "p",
          "html": "A turning vehicle needs an inward force and it can come three ways: from <b>friction alone</b> on a flat road, from <b>banking alone</b> on a tilted one, or from both together, which is what real roads use. Friction is unreliable on a wet or icy surface and runs out at high speed, so engineers <b>bank</b> a curve, raising its outer edge so that a component of the always-present normal reaction points toward the centre and supplies the centripetal force without any friction at all. That is why highway curves and railway tracks are visibly tilted. A <b>vertical</b> circle is different in one decisive way: gravity now lies in the plane of the motion, so it speeds the body up on the way down and slows it on the way up. The speed is no longer constant, it is largest at the bottom and smallest at the top, and that single fact reshapes the whole problem."
        },
        {
          "t": "def",
          "term": "The two questions that open every circular-motion problem",
          "html": "<b>First: which real force is pointing at the centre here?</b> Name it, then write that force equal to <i>mv</i><sup>2</sup>/<i>r</i>. On a flat road it is static friction. On a banked road it is the horizontal component of the normal reaction, plus friction if the speed is off the design value. On a string it is the tension, combined with gravity's radial share. In the well of death it is the wall's normal reaction. <b>Second: does gravity lie along the axis of the circle or in its plane?</b> Along the axis, as in every horizontal circle, gravity does no work and the speed stays constant, so one equation suffices. In the plane, as in every vertical circle, gravity changes the speed continuously and you need a second equation, energy conservation, to link two points on the loop. Almost every question in this topic is those two equations solved together."
        },
        {
          "t": "defgrid",
          "title": "Five circular situations, and what supplies the inward force",
          "rows": [
            { "k": "Flat road", "v": "static friction alone, so <i>v</i><sub>max</sub> = √(<i>μ<sub>s</sub>rg</i>). Mass cancels, and a wet road is a smaller <i>μ<sub>s</sub></i>" },
            { "k": "Banked, at the design speed", "v": "the horizontal component of <i>N</i> alone, and the friction <b>required</b> is exactly zero" },
            { "k": "Banked, off the design speed", "v": "<i>N</i> plus friction, which acts down the slope above the design speed and up it below" },
            { "k": "Leaning cyclist, conical pendulum", "v": "the horizontal component of the ground reaction, or of the string tension. Same relation, tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>" },
            { "k": "Well of death", "v": "the wall's normal reaction is the centripetal force, and friction acts vertically to hold the rider up" },
            { "k": "Vertical circle", "v": "tension or normal reaction combined with gravity's radial component, and the speed varies around the loop" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HORIZONTAL CIRCLES, FLAT AND BANKED",
          "tag": "the mass cancels out of every single one",
          "main": "<i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i> · <i>F<sub>c</sub></i> = <i>mv</i><sup>2</sup>/<i>r</i><br>flat road: <i>v</i><sub>max</sub> = √(<i>μ<sub>s</sub>rg</i>)<br>banked, frictionless: tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i><br>banked with friction: <i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>)), <i>v</i><sub>min</sub> = √(<i>rg</i>(tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>))<br>well of death: <i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>)",
          "legend": [
            "<i>v</i> = speed (m/s), <i>r</i> = radius of the circular path (m), <i>ω</i> = angular speed (rad/s, dimensionally [T<sup>−1</sup>])",
            "<i>F<sub>c</sub></i> = the net inward force (N), <i>m</i> = mass (kg), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>θ</i> = banking angle or lean angle, <i>μ</i> = coefficient of friction, both pure numbers",
            "the same relation tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> governs a banked road, a leaning cyclist and a conical pendulum, which is why all three look alike on paper"
          ],
          "note": "Put μ = 0 into the maximum-speed and minimum-speed formulas and both collapse to the single frictionless design speed. That is the five-second check on whether you have the signs the right way round."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE VERTICAL CIRCLE",
          "main": "<i>T</i><sub>bottom</sub> = <i>mv</i><sup>2</sup><sub>bottom</sub>/<i>r</i> + <i>mg</i> · <i>T</i><sub>top</sub> = <i>mv</i><sup>2</sup><sub>top</sub>/<i>r</i> − <i>mg</i><br>energy link: <i>v</i><sup>2</sup><sub>bottom</sub> = <i>v</i><sup>2</sup><sub>top</sub> + 4<i>gr</i><br>string or track: <i>v</i><sub>top,min</sub> = √(<i>gr</i>), <i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>), <i>v</i><sub>mid,min</sub> = √(3<i>gr</i>)<br>rigid rod or tube: <i>v</i><sub>top,min</sub> = 0, <i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>)<br>always: <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>",
          "legend": [
            "<i>T</i> = the connector's pull, tension in a string or normal reaction on a track (N), <i>m</i> = mass (kg), <i>r</i> = radius (m)",
            "<i>v</i> = speed at the named point (m/s), and it is largest at the bottom because gravity does work around the loop",
            "at a general angle <i>θ</i> measured from the lowest point, <i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> + <i>mg</i> cos <i>θ</i>, which gives both lines above at <i>θ</i> = 0 and <i>θ</i> = 180°"
          ],
          "note": "The 6mg result holds at any speed, not just the minimum, as long as the body stays on the circle. It is a one-line exam answer and a free arithmetic check on any vertical-circle solution."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE BANKING ANGLE, AND WHAT FRICTION ADDS",
          "steps": [
            {
              "eq": "smooth banked road: <i>N</i> cos <i>θ</i> = <i>mg</i>   (1)",
              "why": "Only two forces act, the weight and the normal reaction perpendicular to the tilted surface. Vertically the car neither rises nor sinks, so the vertical forces balance."
            },
            {
              "eq": "horizontally: <i>N</i> sin <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i>   (2)",
              "why": "The normal reaction, being perpendicular to a tilted road, leans inward, and its horizontal component is the only force available to point at the centre. So it must be the whole centripetal force."
            },
            {
              "eq": "divide (2) by (1): tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>",
              "why": "Both <i>N</i> and <i>m</i> cancel beautifully. The required banking angle depends only on the speed and the radius, not on the vehicle's mass, so a truck and a scooter need the same banked curve. And this is exactly the geometry of a leaning cyclist and a conical pendulum, which is why all three share one formula."
            },
            {
              "eq": "add friction at the top speed: <i>N</i>(cos <i>θ</i> − <i>μ</i> sin <i>θ</i>) = <i>mg</i>, <i>N</i>(sin <i>θ</i> + <i>μ</i> cos <i>θ</i>) = <i>mv</i><sup>2</sup><sub>max</sub>/<i>r</i>",
              "why": "At the maximum speed the car tends to skid <i>outward and up</i> the bank, so limiting friction acts <i>down</i> the slope, helping to hold it in. Its downward component adds to the weight in the vertical equation and its inward component adds to <i>N</i> sin <i>θ</i> in the horizontal one."
            },
            {
              "eq": "divide again: <i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))",
              "why": "Divide numerator and denominator by cos <i>θ</i>. The minimum speed follows by flipping friction's direction, since below the design speed the car tends to slide <i>down</i> the bank: swap both signs of <i>μ</i>. Check the whole thing by setting <i>μ</i> = 0: both formulas collapse to √(<i>rg</i> tan <i>θ</i>), the single frictionless design speed, exactly as the first derivation demands."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CRITICAL SPEEDS IN A VERTICAL CIRCLE, TAP A LINE",
          "steps": [
            {
              "eq": "at the top, both tension and weight point inward: <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup><sub>top</sub>/<i>r</i>",
              "why": "At the very top, inward means downward, so gravity is not the enemy here, it is the helper: it does part of the centripetal job for free, and the string can afford to pull less."
            },
            {
              "eq": "a string cannot push, so the least it can do is <i>T</i> = 0, giving <i>mg</i> = <i>mv</i><sup>2</sup><sub>top</sub>/<i>r</i>",
              "why": "This is the whole limiting condition. Set <i>T</i> = 0 and gravity alone supplies the centripetal force, which fixes the slowest speed at which the body can still be on the circle."
            },
            {
              "eq": "<i>v</i><sub>top,min</sub> = √(<i>gr</i>)",
              "why": "The mass cancels. Go slower than this and gravity supplies <i>more</i> inward force than the circle needs, so the body falls inward, the string goes slack, and it leaves the path as a projectile. Counterintuitively, in a vertical circle faster is safer."
            },
            {
              "eq": "energy from bottom to top, a rise of 2<i>r</i>: <i>v</i><sup>2</sup><sub>bottom</sub> = <i>v</i><sup>2</sup><sub>top</sub> + 4<i>gr</i>",
              "why": "Half <i>mv</i><sup>2</sup> at the bottom equals half <i>mv</i><sup>2</sup> at the top plus <i>mg</i>(2<i>r</i>). No friction, so no energy is lost, and the mass cancels once more."
            },
            {
              "eq": "so <i>v</i><sup>2</sup><sub>bottom,min</sub> = <i>gr</i> + 4<i>gr</i> = 5<i>gr</i>, and <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>",
              "why": "Insert the minimum top speed to get the famous √(5<i>gr</i>). For the bonus result, subtract the two tension equations using <i>v</i><sup>2</sup><sub>bottom</sub> − <i>v</i><sup>2</sup><sub>top</sub> = 4<i>gr</i>: the difference is 4<i>mg</i> from the speeds plus 2<i>mg</i> from the two weight terms, so 6<i>mg</i>, at any speed. A rigid rod changes everything, because a rod can also push outward: then <i>v</i><sub>top</sub> may be zero and the bottom requirement drops to 2√(<i>gr</i>)."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 4.6 AND 4.7 · A BANKED ROAD, WITH AND WITHOUT FRICTION",
          "chips": ["the two forces", "N, resolved", "at the top speed", "at the lowest speed"],
          "captions": [
            "The road is banked at θ, and the centre of the circular path lies off to the left. On a smooth road only two forces act on the car: its weight mg straight down, and the normal reaction N perpendicular to the tilted surface.",
            "Because N is perpendicular to a tilted road, it leans inward. Its vertical component N cos θ carries the weight and its horizontal component N sin θ points at the centre and is the entire centripetal force. Dividing one equation by the other gives tan θ = v<sup>2</sup>/rg, with both N and m gone.",
            "Above the design speed the car tends to skid outward and up the bank, so limiting friction acts down the slope. It now helps in two ways at once, and the ceiling rises to v<sub>max</sub> = √(rg(tan θ + μ)/(1 − μ tan θ)).",
            "Below the design speed the car tends to slide down the bank instead, so friction reverses and acts up the slope. Swapping both signs of μ gives v<sub>min</sub>. Between these two speeds the curve can be taken safely, and at the design speed itself the friction required is exactly zero."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [2.0, 1.2], "w": 5.5, "h": 3.113 },
                { "kind": "block", "at": [4.257, 3.027], "w": 1.3, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [4.257, 3.027], "to": [3.354, 4.558], "tone": "amber", "label": "N", "at": "mid" },
                { "from": [4.257, 3.027], "to": [4.257, 1.55], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [3.2, 0.55], "to": [1.4, 0.55], "tone": "soft", "label": "to centre", "at": "above" }
              ],
              "arcs": [
                { "at": [2.0, 1.2], "r": 0.9, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [2.0, 1.2], "w": 5.5, "h": 3.113 },
                { "kind": "block", "at": [4.257, 3.027], "w": 1.3, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [4.257, 3.027], "to": [3.354, 4.558], "tone": "soft", "dash": true },
                { "from": [4.257, 3.027], "to": [4.257, 4.558], "tone": "amber", "label": "N cos θ", "at": "end" },
                { "from": [4.257, 3.027], "to": [3.354, 3.027], "tone": "amber", "label": "N sin θ", "at": "below" },
                { "from": [4.257, 3.027], "to": [4.257, 1.55], "tone": "ink", "label": "mg", "at": "end" }
              ],
              "arcs": [
                { "at": [2.0, 1.2], "r": 0.9, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [2.0, 1.2], "w": 5.5, "h": 3.113 },
                { "kind": "block", "at": [4.257, 3.027], "w": 1.3, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [4.257, 3.027], "to": [3.354, 4.558], "tone": "amber", "label": "N", "at": "mid" },
                { "from": [4.257, 3.027], "to": [4.257, 1.55], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [4.257, 3.027], "to": [2.993, 2.313], "tone": "green", "label": "f", "at": "below" },
                { "from": [3.2, 0.55], "to": [1.4, 0.55], "tone": "soft", "label": "to centre", "at": "above" }
              ],
              "arcs": [
                { "at": [2.0, 1.2], "r": 0.9, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [2.0, 1.2], "w": 5.5, "h": 3.113 },
                { "kind": "block", "at": [4.257, 3.027], "w": 1.3, "h": 0.94, "rot": 30 }
              ],
              "arrows": [
                { "from": [4.257, 3.027], "to": [3.354, 4.558], "tone": "amber", "label": "N", "at": "mid" },
                { "from": [4.257, 3.027], "to": [4.257, 1.55], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [4.257, 3.027], "to": [5.521, 3.741], "tone": "green", "label": "f", "at": "above" },
                { "from": [3.2, 0.55], "to": [1.4, 0.55], "tone": "soft", "label": "to centre", "at": "above" }
              ],
              "arcs": [
                { "at": [2.0, 1.2], "r": 0.9, "from": 0, "to": 30, "label": "θ", "tone": "amber" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.8 · THE WELL OF DEATH",
          "chips": ["riding the inside wall"],
          "captions": [
            "A rider on the inside of a vertical cylinder. The wall pushes horizontally inward, and that normal reaction N is the entire centripetal force. Gravity pulls down, and friction along the wall acts upward and is the only thing holding the rider up. Since friction cannot exceed μN, and N grows with v<sup>2</sup>, going faster is what keeps the rider from sliding: v<sub>min</sub> = √(gr/μ), with the mass cancelled out."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "wall", "at": [2.4, 3.6], "w": 0.4, "h": 4.6 },
                { "kind": "wall", "at": [7.6, 3.6], "w": 0.4, "h": 4.6 },
                { "kind": "block", "at": [6.9, 3.4], "w": 0.9, "h": 0.7, "label": "rider" }
              ],
              "segments": [
                { "from": [5, 1.1], "to": [5, 6.0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [6.6, 3.4], "to": [5.3, 3.4], "tone": "amber", "label": "N", "at": "above" },
                { "from": [6.75, 3.3], "to": [6.75, 1.8], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [7.2, 3.5], "to": [7.2, 5.0], "tone": "green", "label": "f", "at": "end" }
              ],
              "labels": [{ "x": 5, "y": 6.4, "text": "axis" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.F · THE SAME LOOP, TOP AND BOTTOM",
          "chips": ["at the top", "at the bottom"],
          "captions": [
            "At the top, inward means downward, so tension and weight cooperate: T + mg = mv<sup>2</sup>/r. The string can therefore afford to pull less here, and at the critical speed it pulls nothing at all, leaving gravity alone to bend the path.",
            "At the bottom, inward means upward, so tension fights gravity: T − mg = mv<sup>2</sup>/r. The string works hardest here, which is why a whirled stone snaps its string at the lowest point and never at the highest. The two tensions always differ by exactly 6mg."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "curves": [{ "c": "circle", "cx": 5, "cy": 3.5, "r": 2, "soft": true }],
              "bodies": [
                { "kind": "rope", "at": [5, 3.5], "to": [5, 5.5] }
              ],
              "marks": [
                { "x": 5, "y": 3.5, "glyph": "cross" },
                { "x": 5, "y": 5.5, "glyph": "dot" }
              ],
              "arrows": [
                { "from": [4.55, 5.45], "to": [4.55, 4.55], "tone": "ink", "label": "T", "at": "end" },
                { "from": [5.45, 5.45], "to": [5.45, 4.55], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [4.3, 5.9], "to": [5.7, 5.9], "tone": "amber", "label": "v", "at": "above" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "curves": [{ "c": "circle", "cx": 5, "cy": 3.5, "r": 2, "soft": true }],
              "bodies": [
                { "kind": "rope", "at": [5, 3.5], "to": [5, 1.5] }
              ],
              "marks": [
                { "x": 5, "y": 3.5, "glyph": "cross" },
                { "x": 5, "y": 1.5, "glyph": "dot" }
              ],
              "arrows": [
                { "from": [4.55, 1.55], "to": [4.55, 2.45], "tone": "ink", "label": "T", "at": "end" },
                { "from": [5.45, 1.45], "to": [5.45, 0.55], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [2.3, 1.5], "to": [3.7, 1.5], "tone": "amber", "label": "v", "at": "above" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any circular-motion problem, in four moves",
          "steps": [
            "<b>Draw the free-body diagram and name the real inward force.</b> Friction, tension, normal reaction, gravity, or a combination. Do not add an arrow called centripetal force; that is the role, not a separate force.",
            "<b>Write Newton's law toward the centre</b> at the point of interest: net inward force = <i>mv</i><sup>2</sup>/<i>r</i>. On a slope this usually means resolving <i>N</i>, and on a loop it means combining the connector's pull with gravity's radial component.",
            "<b>If the circle is vertical, add energy conservation between two points</b>, using <i>v</i><sup>2</sup><sub>bottom</sub> = <i>v</i><sup>2</sup><sub>top</sub> + 4<i>gr</i> for the full loop. Almost every vertical-circle question is these two equations solved together.",
            "<b>Check that the mass has cancelled, and check a limit.</b> It cancels in flat cornering, in banking, in the well of death and in every critical speed. For banking with friction, set <i>μ</i> = 0 and confirm you recover tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A curved highway of radius 200 m is to be banked so that a car can take the turn at 20 m/s without relying on friction. Find the required angle of banking. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Frictionless design, so the banking relation applies directly: tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>.",
            "tan <i>θ</i> = (20)<sup>2</sup>/(200 × 10) = 400/2000 = 0.2.",
            "<i>θ</i> = tan<sup>−1</sup>(0.2) ≈ 11.3°.",
            "Say clearly in your answer that this is the <b>design speed</b> angle: the curve is friction-free only at 20 m/s. Boards often award a mark for noting that the answer does not depend on the car's mass."
          ],
          "ans": "θ ≈ 11.3°, and independent of the car's mass"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A car rounds a flat, unbanked curve of radius 20 m. The coefficient of friction between tyres and road is 0.5. What is the maximum speed at which it can turn without skidding? Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The trap is dragging in the car's mass, or forgetting the square root and reporting <i>μrg</i> = 100 as a speed.",
            "On a flat road friction alone supplies the centripetal force: <i>μ<sub>s</sub>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i>, and the mass cancels.",
            "<i>v</i><sub>max</sub> = √(<i>μ<sub>s</sub>rg</i>) = √(0.5 × 20 × 10) = √100 = 10 m/s.",
            "Two instant filters for the options. Anything that scales with mass is wrong, because mass cancels. And <i>μrg</i> has the dimensions of speed squared, so an option quoting 100 m/s fails a dimension check without any arithmetic."
          ],
          "ans": "v<sub>max</sub> = 10 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A stone of mass 0.5 kg tied to a string of length 1 m is whirled in a vertical circle at the minimum speed that still completes the loop. Find the speed at the top, the speed at the bottom, and the tension at the bottom. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Minimum speed to complete a loop on a <i>string</i> means the tension vanishes at the top, so gravity alone supplies the centripetal force there: <i>v</i><sub>top</sub> = √(<i>gr</i>) = √10 ≈ 3.16 m/s.",
            "Energy conservation over the rise of 2<i>r</i>: <i>v</i><sup>2</sup><sub>bottom</sub> = <i>v</i><sup>2</sup><sub>top</sub> + 4<i>gr</i> = 10 + 40 = 50, so <i>v</i><sub>bottom</sub> = √50 ≈ 7.07 m/s. Equivalently √(5<i>gr</i>).",
            "At the bottom the tension fights gravity: <i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> + <i>mg</i> = 0.5(50)/1 + 0.5(10) = 25 + 5 = 30 N.",
            "Check with the 6<i>mg</i> rule: at minimum speed <i>T</i><sub>top</sub> = 0, so <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> should be 6<i>mg</i> = 6(0.5)(10) = 30 N. It is. The arithmetic is confirmed in one line."
          ],
          "ans": "v<sub>top</sub> ≈ 3.16 m/s · v<sub>bottom</sub> ≈ 7.07 m/s · T<sub>bottom</sub> = 30 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A small block is released from rest at the top of a smooth sphere of radius <i>R</i> and slides down the outside. At what angle <i>θ</i>, measured from the top at the centre, does it leave the surface, and how fast is it going there?",
          "steps": [
            "Forces toward the centre. On the <i>outside</i> of a sphere the normal reaction points outward, away from the centre, while gravity's radial component at angle <i>θ</i> from the top is <i>mg</i> cos <i>θ</i> inward. So <i>mg</i> cos <i>θ</i> − <i>N</i> = <i>mv</i><sup>2</sup>/<i>R</i>.",
            "The block leaves when the surface can no longer push, that is, <i>N</i> = 0. Then <i>mg</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>R</i>, so <i>v</i><sup>2</sup> = <i>gR</i> cos <i>θ</i>.",
            "Energy conservation from the top, having dropped a height <i>R</i>(1 − cos <i>θ</i>): ½<i>mv</i><sup>2</sup> = <i>mgR</i>(1 − cos <i>θ</i>), so <i>v</i><sup>2</sup> = 2<i>gR</i>(1 − cos <i>θ</i>).",
            "Equate the two: <i>gR</i> cos <i>θ</i> = 2<i>gR</i>(1 − cos <i>θ</i>), giving 3 cos <i>θ</i> = 2 and cos <i>θ</i> = 2/3, so <i>θ</i> ≈ 48.2°. Then <i>v</i><sup>2</sup> = <i>gR</i>(2/3), so <i>v</i> = √(2<i>gR</i>/3).",
            "The result is independent of both the mass and the radius: every block leaves a smooth sphere at the same universal angle. This <i>N</i> = 0 plus energy method is the outside-the-circle cousin of the <i>T</i> = 0 condition at the top of a loop, and it is the single most useful Advanced technique for curved surfaces."
          ],
          "ans": "θ = cos<sup>−1</sup>(2/3) ≈ 48.2° from the top · v = √(2gR/3)"
        },
        {
          "t": "mcq",
          "q": "A car takes a turn on a flat, unbanked road at constant speed. The centripetal force acting on it is provided by:",
          "opts": [
            { "label": "the forward thrust of the engine", "nudge": "Engine thrust acts along the direction of motion, that is, tangentially. It cannot point at the centre." },
            { "label": "the static friction between tyres and road", "nudge": null },
            { "label": "the weight of the car", "nudge": "Weight is vertical on a flat road, and the centripetal force needed here is horizontal." },
            { "label": "the normal reaction from the road", "nudge": "Also vertical on a flat road, and so equally unable to supply a horizontal force. It is only on a <i>banked</i> road that <i>N</i> gains an inward component." }
          ],
          "correct": 1,
          "solution": "On a flat road the only horizontal force available is friction, so static friction between tyres and road plays the centripetal role. That is also why the turn fails on a wet surface, where <i>μ<sub>s</sub></i> falls."
        },
        {
          "t": "mcq",
          "q": "The centrifugal force is best described as:",
          "opts": [
            { "label": "a real force directed toward the centre of the circular path", "nudge": "Two errors at once: it points outward, not inward, and it is not a real force in the ground frame at all." },
            { "label": "the Newton's Third Law reaction to the centripetal force", "nudge": "The classic trap. Centripetal and centrifugal forces act on the <b>same</b> body, described from two different frames, so they cannot be a Third Law pair, which by definition acts on different bodies." },
            { "label": "a pseudo-force, directed radially outward, felt only in a rotating frame", "nudge": null },
            { "label": "a force always equal to the weight of the body", "nudge": "There is no general relation to weight; its magnitude is <i>mv</i><sup>2</sup>/<i>r</i> and depends on the speed and radius." }
          ],
          "correct": 2,
          "solution": "Centrifugal force is a fictitious force introduced so that Newton's laws work inside a rotating frame. It points outward and exists only in that non-inertial frame; in the ground frame there is only the inward centripetal force and inertia."
        },
        {
          "t": "mcq",
          "q": "A road is banked for a particular design speed. When a vehicle travels at exactly that speed, the friction required between tyres and road is:",
          "opts": [
            { "label": "maximum, equal to <i>μmg</i>", "nudge": "Friction is maximal only at the edge of skidding, which is the fastest or slowest safe speed, not the design speed." },
            { "label": "equal to <i>mg</i>", "nudge": "This assigns friction a value with no basis; nothing in the banking equations produces it." },
            { "label": "zero", "nudge": null },
            { "label": "equal to <i>mv</i><sup>2</sup>/<i>r</i>", "nudge": "That is the centripetal requirement, and at the design speed it is supplied entirely by the horizontal component of <i>N</i>, not by friction." }
          ],
          "correct": 2,
          "solution": "At the design speed the horizontal component of the normal reaction alone supplies the whole centripetal force, so no friction is needed. Making friction unnecessary at the design speed is the entire purpose of banking."
        },
        {
          "t": "mcq",
          "q": "The minimum speed of a body at the highest point of a vertical circle on a string of radius <i>r</i> is:",
          "opts": [
            { "label": "zero", "nudge": "That is the <i>rod</i> answer. A rod can push outward and support the body at the top; a string can only pull, so it would go slack." },
            { "label": "√(<i>gr</i>)", "nudge": null },
            { "label": "√(5<i>gr</i>)", "nudge": "That is the minimum speed at the <b>bottom</b>, not the top. The two differ by the 4<i>gr</i> the body gains coming down." },
            { "label": "√(2<i>gr</i>)", "nudge": "Not produced by any of the relations here; it is what you get by dropping through one radius rather than two." }
          ],
          "correct": 1,
          "solution": "At the top, setting the tension to zero gives <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i>, so <i>v</i> = √(<i>gr</i>). Below that the string goes slack and the body leaves the circular path."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A curved road of radius 50 m is banked for a design speed of 15 m/s. Find the angle of banking. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> = 225/500 = 0.45, so <i>θ</i> = tan<sup>−1</sup>(0.45) ≈ 24.2°." },
            { "q": "[NEET] A car rounds an unbanked curve of radius 40 m with <i>μ</i> = 0.5 between tyres and road. Find the maximum speed for no skidding. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>v</i><sub>max</sub> = √(<i>μrg</i>) = √(0.5 × 40 × 10) = √200 ≈ 14.1 m/s." },
            { "q": "[JEE Main] A road of radius 90 m is banked at tan <i>θ</i> = 0.5, with <i>μ</i> = 0.5. Find the maximum safe speed. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>v</i><sub>max</sub> = √(900 × (0.5 + 0.5)/(1 − 0.25)) = √(900 × 4/3) = √1200 ≈ 34.6 m/s, well above the frictionless design speed √450 ≈ 21.2 m/s." },
            { "q": "[JEE Main] A bead on a light rigid rod of length 0.4 m is swung in a vertical circle. Find the minimum speed at the lowest point to complete the circle. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "A rod can push, so <i>v</i><sub>top</sub> may be zero and <i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>) = 2√4 = 4 m/s." },
            { "q": "[JEE Advanced] A motorcyclist rides the inside vertical wall of a well of death of radius 4 m, with <i>μ</i> = 0.4 between tyres and wall. Find the minimum speed needed to avoid sliding down. (<i>g</i> = 10 m/s<sup>2</sup>)", "a": "<i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>) = √(10 × 4/0.4) = √100 = 10 m/s, and the mass cancels, so a heavy bike and a light one need the same speed." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding centripetal force as an extra arrow in a free-body diagram.</b> It is the name of a role, not a separate interaction. Ask which <i>real</i> force points at the centre, friction, tension, normal reaction or gravity, and set that equal to <i>mv</i><sup>2</sup>/<i>r</i>. Drawing it as well double-counts.",
            "<b>Treating centrifugal force as real in the ground frame.</b> In the inertial frame there is only the inward force and inertia. Introduce the outward pseudo-force only if you deliberately work in the rotating frame, and then never mix the two frames in one equation.",
            "<b>Forgetting that the mass cancels.</b> It drops out of √(<i>μrg</i>), of tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>, of √(<i>gr</i>/<i>μ</i>) and of every critical speed in a vertical circle. If your final answer still contains <i>m</i>, you have missed a cancellation.",
            "<b>Assuming constant speed in a vertical circle.</b> It is fastest at the bottom and slowest at the top, because gravity now lies in the plane of the motion. Always link the two points with <i>v</i><sup>2</sup><sub>bottom</sub> = <i>v</i><sup>2</sup><sub>top</sub> + 4<i>gr</i> rather than reusing one speed twice.",
            "<b>Using √(<i>gr</i>) for a rod, or zero for a string.</b> A string or the inside of a track can only pull inward, so the top speed must be at least √(<i>gr</i>). A rigid rod or a tube can also push outward, so its top speed may be zero. Reading the connector carefully changes the bottom requirement from √(5<i>gr</i>) to 2√(<i>gr</i>), and it is worth a full mark."
          ]
        },
        {
          "t": "protip",
          "html": "for any banking-with-friction question, compute the frictionless design speed √(<i>rg</i> tan <i>θ</i>) first. the friction-assisted <i>v</i><sub>max</sub> must come out larger and <i>v</i><sub>min</sub> smaller; if your range does not straddle the design speed you have the friction direction the wrong way round. for a vertical circle, memorise the trio for a loop that just completes: <i>v</i><sub>top</sub> : <i>v</i><sub>mid</sub> : <i>v</i><sub>bottom</sub> = √(<i>gr</i>) : √(3<i>gr</i>) : √(5<i>gr</i>), that is 1 : √3 : √5, and any ratio question collapses to picking two of them. and finish every vertical-circle answer with the 6<i>mg</i> check, since <i>T</i><sub>bottom</sub> minus <i>T</i><sub>top</sub> is 6<i>mg</i> at any speed at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>a<sub>c</sub></i> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i> · <i>F<sub>c</sub></i> = <i>mv</i><sup>2</sup>/<i>r</i>", "note": "centripetal force is a role played by a real force, never a new one" },
            { "f": "flat road √(<i>μ<sub>s</sub>rg</i>) · banked tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>", "note": "the same tan <i>θ</i> relation covers a leaning cyclist and a conical pendulum" },
            { "f": "banked with friction: <i>μ</i> = 0 must recover the design speed", "note": "maximum uses +<i>μ</i> on top and −<i>μ</i> tan <i>θ</i> below; the minimum flips both" },
            { "f": "string loop: √(<i>gr</i>) at the top, √(5<i>gr</i>) at the bottom · rod: 0 and 2√(<i>gr</i>)", "note": "a string can only pull, a rod can also push, and that is the entire difference" },
            { "f": "<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>, always", "note": "and a body leaves a smooth sphere at cos <i>θ</i> = 2/3, with <i>v</i> = √(2<i>gR</i>/3)" }
          ],
          "aids": [
            "\"the centre pulls, inertia flings\"",
            "\"top needs root gr, bottom needs root five gr, and the tensions differ by six mg\""
          ]
        }
      ]
    }
  ]
};

export default phy11LawsOfMotion;
