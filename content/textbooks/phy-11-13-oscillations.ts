/**
 * Chapter 13 · Oscillations. Physics, Class 11.
 *
 * Restructured from pages 866 to 924 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-09-mech-fluids.ts.
 *
 * SIX TOPICS FROM FIVE SOURCE SUBTOPICS, and exactly one split. The source
 * names five: 01 SHM Concepts and Kinematics, 02 SHM Energy, 03 Pendulums and
 * Mass-Spring Systems, 04 Damped and Forced Oscillations, 05 Reference Circle,
 * Superposition and More SHM Systems. Topics 01 to 04 below are 1:1 with the
 * source. Subtopic 05 is split into Topics 05 and 06 along the seam its own
 * title crosses: "Reference Circle, Superposition" is one skill (a picture and
 * a phasor sum, both about oscillations you already know), and "More SHM
 * Systems" is a different one (a procedure applied to systems you have never
 * seen). The source's own Section 3 splits at exactly that line, its
 * Derivations 1 and 2 being the reference circle and the phasor method and its
 * Derivations 3 and 4 being the universal recipe and the three classic systems,
 * and the source's Section 1 introduces them as "three tools" under three
 * separate headings. Left merged, Subtopic 05 would have been half again the
 * size of any other topic and would have hidden the single most examinable
 * procedure in the chapter inside a topic named after a picture. Nothing was
 * merged.
 *
 * ONE EDITORIAL MOVE ACROSS THE SOURCE'S OWN BOUNDARY. The source files
 * "Pendulum fine points" (temperature error of a pendulum clock, a charged bob
 * in a field, the large-amplitude correction) inside Subtopic 05's formula
 * section, and its Subtopic 05 Example 4 is the pendulum-clock problem. All of
 * it is pendulum physics and none of it is reference-circle physics, so it sits
 * in Topic 03 below, next to T = 2 pi sqrt(L/g), which is what it modifies.
 * Topic 05's material is correspondingly the reference circle and superposition
 * only.
 *
 * THE ROUND 2 ADDENDUM (pages 907 to 924: A energy method and the
 * potential-energy curve, B spring systems beyond series and parallel, C phase
 * and fraction-of-period, D beats and amplitude modulation, E logarithmic
 * decrement and resonance nuances, F the "prove it's SHM" laboratory) IS NOT A
 * TOPIC, per the brief. Every line drawn from it sits in a `protip`, a
 * `mistakes` item, a `practice` item or the hardest `ex` of its group: A and F
 * into Topic 06's energy-method material, B into Topic 03's spring protip and
 * one practice item, C into Topic 01's and Topic 05's phase-stopwatch protips,
 * D into Topic 05's beats `ex` and `formula`, E into Topic 04's protip and
 * practice. One exception is declared rather than hidden: Topic 05 carries a
 * `formula` block for beats, because the source's main body states the beat
 * result nowhere at all and a chapter that teaches superposition and then omits
 * the one case JEE Main asks for by name is not usable.
 *
 * ERRATA REVIEWED (source pages 977 to 981, in full). The list carries entries
 * for Chapters 1, 2, 4, 6, 8, 9 and 11. NO ENTRY TOUCHES CHAPTER 13, and no
 * entry touches any result this chapter quotes from another chapter. The
 * nearest miss is the Chapter 6 entry on a dropped mass factor in an angular
 * momentum practice answer, which changes nothing here.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 866 to 924 was recomputed independently. The five main subtopics
 * (pages 869 to 906) came out clean: all twenty worked examples, all
 * twenty-five practice answers and all twenty MCQ keys reproduce. The Round 2
 * Addendum did not, and it is the same story the brief predicted:
 *
 *   1. Addendum A, Practice 3 (page 911), solid sphere of radius R rolling
 *      without slipping in a fixed bowl of radius 10R. Printed answer
 *      T = 2 pi sqrt(63R/10g), from a printed "omega^2 = (M g / 9R) / (7/10 M)
 *      = 10g/63R". Working: the centre travels on a circle of radius 9R, so
 *      with x the arc length of the centre and no slip giving spin rate x-dot/R,
 *      K = (1/2)M x-dot^2 + (1/2)(2/5 M R^2)(x-dot/R)^2 = (7/10) M x-dot^2.
 *      That is (1/2) m_eff x-dot^2 with m_eff = (7/5)M, NOT (7/10)M: the source
 *      read its own kinetic energy as if the one-half were already outside.
 *      With U = (1/2) Mg x^2/(9R), omega^2 = (Mg/9R)/((7/5)M) = 5g/63R and
 *      CORRECT ANSWER T = 2 pi sqrt(63R/5g). The source contradicts itself
 *      seven pages later: its own Example F.2 derives the general bowl result
 *      T = 2 pi sqrt(7(R_bowl - r)/5g), which at R_bowl - r = 9R gives
 *      2 pi sqrt(63R/5g), agreeing with the recomputation and not with the
 *      printed A.3. The printed value is exactly a factor sqrt(2) too small.
 *      Topic 06's practice item 5 carries the corrected answer.
 *   2. Addendum A, Practice 4 (page 911), U-tube of unequal cross-sections A1
 *      and A2, arm liquid lengths L1 and L2. Printed
 *      omega^2 = [g A1 (A1 + A2)/A2] / (A1 L1 + A2 L2). Working: with y the
 *      drop of the surface in arm 1, volume conservation makes the other
 *      surface rise by (A1/A2)y at speed (A1/A2)y-dot, so
 *      K = (1/2) rho A1 (L1 + A1 L2/A2) y-dot^2 and
 *      U = (1/2) rho g A1 (1 + A1/A2) y^2, giving
 *      CORRECT ANSWER omega^2 = g(A1 + A2)/(A2 L1 + A1 L2). The printed form
 *      uses the TOTAL mass rho(A1 L1 + A2 L2) as the inertia, which is only
 *      valid when both arms move at the same speed, i.e. when A1 = A2. Both
 *      forms happen to collapse to the familiar 2g/L for a single bore, which
 *      is why the error survived; they part company at once otherwise. Test at
 *      A2 -> infinity, an arm against a wide reservoir, where the answer must
 *      be g/L1: the recomputed form gives g A2/(A2 L1) = g/L1, and the printed
 *      form gives g A1/(A2 L2) -> 0. The source again contradicts itself, at
 *      Addendum F Practice 5 (page 923), which derives arm-by-arm and prints
 *      omega^2 = g(A1 + A2)/(A2 L1 + A1 L2), the recomputed value. Too fiddly
 *      for Class 11 and left out of the chapter body; recorded here so the next
 *      author does not copy the printed A.4.
 *   3. Addendum B, Practice 1 (page 913), spring of mass 0.2 kg and constant
 *      100 N/m carrying an 0.8 kg block: "by what percentage does the spring's
 *      mass increase the period". Printed answer 4.3 percent. Working: the
 *      period ratio is sqrt((0.8 + 0.2/3)/0.8) = sqrt(0.86667/0.8)
 *      = sqrt(1.08333) = 1.0408, so the CORRECT ANSWER is 4.1 percent. The
 *      printed 4.3 comes from differencing the source's own two three-figure
 *      periods, 0.585 s and 0.561 s, whose rounding error is larger than the
 *      quantity being measured: a calculator tail masquerading as a result.
 *      Topic 03's practice item 4 asks the same question with the ratio taken
 *      before the rounding.
 *   4. Addendum A, Practice 1 (page 911), uniform rod pivoted at one end with a
 *      spring at the free end, is stated inconsistently rather than wrongly.
 *      Its printed answer, T = 2 pi sqrt(M/3k), silently drops the rod's own
 *      weight, which for a rod hanging from its pivot supplies a restoring
 *      torque of exactly the same order as the spring's. The source's own
 *      Example F.4 (page 923) sets the identical problem and keeps gravity,
 *      giving omega^2 = 3g/2L + 3k/M, and its check line even reads "If g = 0:
 *      T = 2 pi sqrt(M/3k) (Addendum A Example 1 corrected)". Two answers for
 *      one problem; F.4 is the right one. Not used in this chapter.
 *
 *   None of items 1 to 4 reaches a student through a formula, defgrid, deriv or
 *   proc block below. Items 1 and 3 appear as practice items with the
 *   recomputed answers; items 2 and 4 do not appear at all.
 *
 * SOURCE DAMAGE. This range speaks three of the dialects the brief names at
 * once, and every passage below was re-authored from context, never
 * transcribed:
 *
 *   - GREEK SURVIVES, AS MATHEMATICAL ALPHANUMERIC (U+1D400 to U+1D7FF), which
 *     the app's faces cannot draw and the validator rejects outright. The
 *     census of pages 866 to 924: 4404 math-alphanumeric characters in all, led
 *     by math-italic omega (496 instances), math-italic capital A (485),
 *     math-italic x (348), math-italic m (282), math-italic pi (279), plus
 *     math-italic theta (71), phi (54), delta (63), gamma (22), rho (19) and
 *     roughly forty distinct math-italic Latin letters. Since omega, phi and
 *     theta appear on nearly every line of this chapter, copying ANY run of
 *     source symbol text verbatim would have shipped a wall of blank boxes.
 *     Confusingly, the same letters ALSO appear in ordinary Unicode in the same
 *     pages (83 plain omega, 81 plain pi, 50 plain theta, 45 plain capital
 *     delta), mostly inside the figure briefs, so the damage is not even
 *     uniform within one page. Every symbol below is retyped: Latin letters as
 *     ordinary characters inside <i> tags, Greek as its plain Unicode form.
 *   - THE BACKSLASH-TOKEN FAMILY, three of the five flavours seen elsewhere in
 *     this book. "\n7" is a minus sign (11 instances, e.g. page 890's
 *     "g_eff = g \n7 a = g \n7 (3/4)g" is g minus a, and page 902's
 *     "r-double-dot = \n7 (g/R) r"), "\nN" is the multiplication sign (6
 *     instances, e.g. page 878's "100 \nN 0.0016 = 0.16" is 100 times 0.0016
 *     and page 903's "2 \nN 9.8" is 2 times 9.8), and "\nK" is the degree sign
 *     (2 instances, both in Subtopic 05 Example 1's phase answer, "53 \nK"
 *     being 53 degrees). Two further tokens mark structure rather than glyphs:
 *     "\nA" is a large left bracket (3 instances, all in the power-reduction
 *     derivation on page 878) and "\tq" and "\t@" are a stray opening bracket
 *     and a stray closing parenthesis. "\nC" for the ratio colon, logged by the
 *     fluids chapter, does NOT occur here; nor do octal escapes like "\050".
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively and
 *     destructively, because this chapter is made of them. Every "omega squared"
 *     arrives as three lines, every "v sub max" as two, every "e to the minus
 *     bt over 2m" as an exponent stranded from its base, and every dimensional
 *     formula ([M 0 L 1 T 0]) as seven. The printed "a = -omega 2 x" is
 *     a = -omega-squared times x and not a times 2 times x, and the printed
 *     "A 2 1 + A 2 2" in the superposition formula is A1-squared + A2-squared
 *     with BOTH the exponent and the subscript adrift. Recomputing every worked
 *     example independently (see CORRECTIONS above) was the check that these
 *     were reassembled correctly.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances actually
 *     paraphrased below: "asks it in isolationbut assumesperfect command"
 *     (p.869), "you slow down, stop, and come rightback" (p.869), "directly
 *     propor-tional to how far the body has strayed" (p.869), "the tug is
 *     always towardyour finger" (p.869), "the swing, a tuning fork's prong"
 *     run into "point: the swing" (p.869), "energy isentirely kineticand U = 0"
 *     (p.876), "one rises exactly as much as the other falls" as
 *     "the two trade off" (p.876), "period depends only onL andg" (p.883),
 *     "a heavier bob feels astrongerpull" and "is alsomore sluggish" (p.883),
 *     "the spring's period does not depend ong at all" (p.883), "its amplitude
 *     shrinks exponentially" as "amplitude shrinks exponentiallyuntil it dies
 *     out" (p.891), "marches in step with the driving frequency" (p.891),
 *     "the shadow runs back and forth" as "that shadow is executing exactlysimple
 *     harmonic motion" (p.899), and "you displace it a little" as
 *     "you donot need to recognise it" (p.899).
 *   - NO ASCII-SHIFTED HEADING RUN (the "+29" pattern) appears anywhere in
 *     pages 866 to 924. Every heading in this range extracted as readable
 *     English, and the chapter's own page numbers ("Page 3 of36") extracted
 *     correctly. No leaked LaTeX either, of the kind the errata records for
 *     Chapter 8.
 *   - ONE HAZARD THAT IS NOT THE PDF'S FAULT, logged for the next author: the
 *     shared scratchpad directory is NOT private per agent. A working file
 *     written as /scratchpad/range.txt was overwritten mid-read by a sibling
 *     agent extracting Chapter 12, and two hundred lines of Kinetic Theory
 *     appeared in the middle of this chapter's Subtopic 02. Detected because
 *     the page markers vanished, not because the physics looked wrong. Every
 *     working file for this chapter is prefixed osc13-.
 *
 * PHASE CONVENTION, DECLARED ONCE AND HELD. Topic 01's `def` block fixes it for
 * the whole chapter: displacement is always written
 * x = A sin(omega t + phi), so velocity carries a cosine and acceleration
 * carries a minus sine. Every worked example, practice answer, MCQ, cheat-sheet
 * row and figure below uses that form and no other. The source does not: its
 * Subtopics 01 to 03 use the sine, its Subtopic 04 writes the damped solution
 * with a cosine, and its Subtopic 05 switches to the cosine for the reference
 * circle and never switches back. Silently mixing the two shifts every phase
 * constant by pi/2, so the chapter's Topic 01 `mistakes` block names the trap
 * outright. Two consequences of holding the sine are worth flagging: the damped
 * solution below reads A0 e^(-bt/2m) sin(omega' t + phi), and on the reference
 * circle the displacement is the projection of the rotating radius on the
 * VERTICAL axis, with the phase still measured anticlockwise from the +x axis.
 * Both are stated where they occur.
 *
 * OMEGA IS NOT f, AND THE LEGENDS SAY SO. Every `formula` legend below names
 * the SI unit of every symbol it uses, and the two that students fuse carry it
 * every single time: omega is in rad/s and f is in Hz, related by omega = 2 pi f.
 * The confusion is the source's own Subtopic 01 pitfall 4 and it earns a
 * `mistakes` item here too.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Forty-six lines
 * checked, forty-six consistent, none rejected:
 *
 *   T1  x = A sin(omega t + phi): [L], and omega t = [T-1][T] = 1, so the
 *       argument is a pure number, which is what a sine demands. ✓
 *       v = A omega cos(omega t + phi): [L][T-1] = [L T-1]. ✓
 *       a = -omega^2 x: [T-2][L] = [L T-2]. ✓
 *       v = omega sqrt(A^2 - x^2): [T-1] sqrt([L2]) = [L T-1]. ✓
 *       omega = 2 pi/T = 2 pi f: [T-1] both ways, and this is exactly why f in
 *       Hz and omega in rad/s share a dimension while differing by 2 pi. ✓
 *       F = -kx: [M T-2][L] = [M L T-2], so k is [M T-2] = N/m. ✓
 *       omega = sqrt(k/m): sqrt([M T-2]/[M]) = [T-1]. ✓
 *       v_max = A omega: [L T-1]. a_max = A omega^2: [L T-2]. ✓
 *       omega = a_max/v_max: [L T-2]/[L T-1] = [T-1]. ✓
 *       A = v_max^2/a_max: [L2 T-2]/[L T-2] = [L]. ✓
 *   T2  U = (1/2) k x^2: [M T-2][L2] = [M L2 T-2], a joule. ✓
 *       K = (1/2) m v^2: [M][L2 T-2] = [M L2 T-2], matching U, as a sum
 *       demands. ✓
 *       E = (1/2) k A^2 = (1/2) m omega^2 A^2: [M][T-2][L2] = [M L2 T-2], and
 *       the two forms agree only because k = m omega^2, which is the check. ✓
 *       K/U = (A^2 - x^2)/x^2: dimensionless, as any energy ratio must be. ✓
 *       x = A/sqrt(2) at K = U: [L]. ✓
 *   T3  T = 2 pi sqrt(L/g): sqrt([L]/[L T-2]) = sqrt([T2]) = [T]. ✓
 *       T = 2 pi sqrt(m/k): sqrt([M]/[M T-2]) = [T], and the mass cancels
 *       against k's own mass, which is why the answer is a time and not a
 *       square root of a kilogram. ✓
 *       T = 2 pi sqrt(x0/g): [T], identical in form to the pendulum, which is
 *       the whole content of the static-stretch shortcut. ✓
 *       k_eff = k1 + k2 and 1/k_eff = 1/k1 + 1/k2: every term [M T-2]. ✓
 *       g_eff = g + a, g - a, sqrt(g^2 + a^2): every term [L T-2]. ✓
 *       T = 2 pi sqrt(I/(m g d)): sqrt([M L2]/([M][L T-2][L]))
 *       = sqrt([M L2]/[M L2 T-2]) = [T]. ✓
 *       L_eq = I/(m d): [M L2]/([M][L]) = [L], so the equivalent length really
 *       is a length. ✓
 *       T = 2 pi sqrt(I/kappa): kappa is N m per radian = [M L2 T-2], so
 *       sqrt([M L2]/[M L2 T-2]) = [T]. ✓
 *       delta-T/T = (1/2) alpha delta-theta: [K-1][K] = 1, dimensionless on
 *       both sides. ✓
 *       T = 2 pi sqrt(L/g) (1 + theta0^2/16): the bracket is dimensionless
 *       only because theta0 is in RADIANS, which is why degrees ruin it. ✓
 *   T4  x = A0 e^(-bt/2m) sin(omega' t + phi): bt/2m = [M T-1][T]/[M] = 1, so
 *       the exponent is a pure number, which is what an exponential demands,
 *       and b is [M T-1] = kg/s. ✓
 *       omega' = sqrt(omega0^2 - (b/2m)^2): [T-2] under the root, [T-1] out. ✓
 *       A = A0 e^(-bt/2m): [L]. E = E0 e^(-bt/m): [M L2 T-2]. ✓
 *       A = (F0/m)/sqrt((omega^2 - omega0^2)^2 + (b omega/m)^2): numerator
 *       [M L T-2]/[M] = [L T-2], denominator sqrt([T-4]) = [T-2], so [L]. ✓
 *       A_res = F0/(b omega0): [M L T-2]/([M T-1][T-1]) = [L]. ✓
 *       Q = m omega0/b: [M][T-1]/[M T-1] = 1, dimensionless, as a quality
 *       factor must be. ✓
 *       b_c = 2 sqrt(mk): sqrt([M][M T-2]) = [M T-1], matching b. ✓
 *       delta = b T'/2m: [M T-1][T]/[M] = 1, dimensionless. ✓
 *   T5  A = sqrt(A1^2 + A2^2 + 2 A1 A2 cos delta): [L]. ✓
 *       tan phi = A2 sin delta/(A1 + A2 cos delta): [L]/[L] = 1. ✓
 *       x^2/A^2 + y^2/B^2 = 1: dimensionless. ✓
 *       f_beat = |f1 - f2|: [T-1]. ✓
 *       mean speed = 4A/T = 2 A omega/pi: [L]/[T] = [L T-1]. ✓
 *       v_rms = A omega/sqrt(2): [L T-1]. ✓
 *   T6  d2x/dt2 + omega^2 x = 0: [L T-2] and [T-2][L] = [L T-2], so the two
 *       terms can legally be added, which a wrong power of omega would break. ✓
 *       omega = sqrt(k_eff/m_eff): [T-1] whenever k_eff is a restoring force
 *       per unit displacement and m_eff the coefficient of (1/2) q-dot^2. ✓
 *       T = 2 pi sqrt(L/2g) for the U-tube: [T], and the 2 is a pure number, so
 *       it cannot be caught this way. ✓
 *       T = 2 pi sqrt(h/g) for a float and T = 2 pi sqrt(R/g) for the tunnel:
 *       [T], and identical in form to the pendulum, which is the point. ✓
 *       omega = sqrt(U''(0)/m): U'' is [M L2 T-2]/[L2] = [M T-2], the same
 *       dimension as a spring constant, so omega comes out [T-1]. ✓
 *       T = 2 pi sqrt(m V0/(gamma P0 A^2)): [M][L3]/([M L-1 T-2][L4])
 *       = [M L3]/[M L3 T-2] = [T2], root [T]. ✓
 *
 * PHYSICAL PLAUSIBILITY, checked on every number this chapter prints. Every
 * period is positive and every one is independent of amplitude, which is the
 * defining test for true SHM: no worked example, practice answer or MCQ key
 * below contains a period that carries an A. Every omega comes out in rad/s and
 * is stated as such, never as Hz. A simple pendulum of 1.00 m gives
 * T = 2 pi sqrt(1.00/9.8) = 2.0 s, checked in Topic 03's first example, and the
 * seconds pendulum's length comes back as 0.99 m rather than exactly 1 m,
 * which is the honest number. sqrt(k/m) is dimensionally forced to rad/s by the
 * DIMENSIONS ledger above and is quoted with that unit in every legend. The
 * Earth-tunnel period, 2 pi sqrt(R/g) = 5077 s = 84.6 min, is checked against
 * the surface-skimming satellite period quoted in the Gravitation chapter and
 * agrees. No damping constant below is large enough to violate its own
 * light-damping assumption, and each one is checked: Topic 04's examples run at
 * b/2m = 0.10 and 0.20 per second against omega0 of 10 and 200 rad/s, so
 * omega'/omega0 differs from 1 by 5 parts in 100000 and 1 part in 10000000
 * respectively. No speed anywhere approaches c.
 *
 * LIMITING CASES, used where they teach something rather than as decoration.
 * The one the brief asks for by name: the simple-pendulum period is
 * amplitude-independent ONLY in the small-angle limit, and the source says so
 * in three separate places (its Subtopic 01 limiting conditions, its Subtopic
 * 03 limiting conditions, and its Subtopic 05 formula list, which prints the
 * correction T = 2 pi sqrt(L/g)(1 + theta0^2/16)). Topic 03 below carries that
 * correction as a formula rather than as a footnote, evaluates it (a 30 degree
 * swing runs 1.7 percent slow, gaining nothing and losing about 25 minutes a
 * day on a clock), and makes it a `mistakes` item, because "the period does not
 * depend on amplitude" is a half-truth and the half is examinable. Free fall
 * with a = g kills g_eff, so the pendulum period diverges and the bob simply
 * floats: Topic 03's lift example closes on that check. Zero damping in the
 * driven-amplitude denominator leaves (omega^2 - omega0^2)^2 alone, which
 * vanishes at resonance and predicts infinite amplitude, which is why real
 * resonance peaks are finite: Topic 04's `mistakes` block is that limit read
 * backwards. A driving frequency taken to zero collapses the same denominator
 * to omega0^2 and the amplitude to F0/k, a static stretch, which is drawn as
 * the shared left-hand end of both curves in Figure 13.3. The bowl of radius R
 * with a sliding (not rolling) ball reduces to a simple pendulum of length R,
 * which is Topic 06's check on the rolling answer.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - math-11-03-trigonometry.ts, Topics 02 and 04 (sine and cosine on the unit
 *     circle, their graphs, periodicity, and the fact that cosine peaks where
 *     sine is zero): quoted throughout and re-derived nowhere. Topic 01's
 *     kinematics derivation differentiates a sine and states the phase lead as
 *     a known property of the graphs; Topic 05's reference circle uses that
 *     file's own picture, the point (cos theta, sin theta) on the unit circle,
 *     and adds only the observation that theta = omega t makes it move.
 *   - math-11-03-trigonometry.ts, Topic 05 (sin^2 + cos^2 = 1, and the
 *     power-reduction forms cos^2 theta = (1 + cos 2 theta)/2 and
 *     sin^2 theta = (1 - cos 2 theta)/2): both are used verbatim, the first in
 *     Topic 01's v(x) derivation and the second in Topic 02's double-frequency
 *     derivation, and neither is proved here.
 *   - phy-11-05-work-energy-power.ts, Topic 02 (the spring's U = (1/2) k x^2,
 *     obtained there as the area under the F = kx line, and the ledger
 *     K + U = constant for a conservative force): Topic 02 below opens by
 *     naming that result rather than re-integrating it, and spends its
 *     derivation on what is new, which is that the sum stays constant while
 *     each term swings at twice the frequency.
 *   - phy-11-05-work-energy-power.ts, Topic 02 (reading a U-x curve: a minimum
 *     is stable equilibrium, the curvature at the bottom sets the stiffness):
 *     Topic 06's energy method is that reading pushed one step, to
 *     omega = sqrt(U''(0)/m).
 *   - phy-11-07-gravitation.ts, Topic 03 (the tunnel through the Earth: the
 *     interior field is g(r) = g r/R, so F = -(mg/R) r, and that file states
 *     outright that "a gravitation problem has quietly become an oscillations
 *     problem", printing 2 pi sqrt(R/g) = 84.6 min and noting that any straight
 *     chord gives the same answer): picked up in Topic 06 as promised. The
 *     linear restoring force is quoted from there, not re-derived; this chapter
 *     supplies only what that one could not, which is why a linear restoring
 *     force gives a period at all.
 *   - phy-11-06-rotational-motion.ts (moment of inertia, I = ML^2/3 for a rod
 *     about its end, I = MR^2/2 for a cylinder about its axis, I = 2MR^2/5 for
 *     a solid sphere, and the rolling condition v = omega R): quoted in Topic
 *     03's physical pendulum and Topic 06's rolling-cylinder example. No moment
 *     of inertia is computed below.
 *   - phy-11-09-mech-fluids.ts, Topic 02 (Archimedes, F_B = rho V_sub g, and
 *     that chapter's own note that it "states the period as a result to be met
 *     properly in Oscillations rather than deriving a period this chapter has
 *     no tools for"): Topic 06 below is where that promise is kept. The
 *     buoyant restoring force is quoted; the period is derived here.
 *   - phy-11-10-thermal-properties.ts (linear expansion, L = L0(1 + alpha
 *     delta-theta)): quoted in Topic 03's pendulum-clock example, which uses it
 *     and does not restate it.
 *
 * NINE FIGURE BLOCKS, EIGHTEEN CHIPS. The source names four figures and all
 * four are here: 13.1 in Topic 02 (energy against time, and against position),
 * 13.2 in Topic 03 (the pendulum's resolved weight, and springs in series and
 * parallel), 13.3 in Topic 04 (two resonance curves, and the decaying
 * envelope), 13.4 in Topic 06 (U-tube, floating cylinder, tunnel). Five more
 * were designed because this chapter's ideas are pictures and the source drew
 * none of them: x, v and a on one time axis (Topic 01), the v-x ellipse and the
 * a-x line (Topic 01), the reference circle at four phases (Topic 05), the
 * phasor sum and the perpendicular-SHM path (Topic 05), and beats (Topic 05).
 * THE PANEL RULE IS OBSERVED THROUGHOUT: the source's Figure 13.2 and 13.3 are
 * described in its own text as "left panel / right panel" and its Figure 13.4
 * as "three panels", and every one of them is chips here, never panels inside
 * one frame. Topic 01's first figure is the case the rule was written for, and
 * it is three CURVES in one frame, because the whole content of that picture is
 * that velocity leads displacement by a quarter cycle and acceleration is
 * exactly out of phase, which cannot be seen at all if the three are separated.
 * Renderer constraints paid for by earlier chapters and honoured here: no
 * `flow` frame is used anywhere, so the no-markup box rule cannot bite; every
 * `polys` fill is `wash` on a shape or `hatch` on a rectangle only; the one
 * `circle` curve in the corpus below (Figure 13.4's Earth) carries
 * aspect 0.987, computed so that its axes carry equal pixels per unit and it
 * renders round; every point label whose line leaves to the north-east sets
 * `at` explicitly; and no horizontal arrow that points left carries an `above`
 * label.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11Oscillations: Chapter = {
  "chapter": "13",
  "title": "Oscillations",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Simple Harmonic Motion: the ID Card, and the Kinematics of x, v and a",
      "chip": "01 SHM",
      "kalam": "acceleration always points home",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · SHM Concepts and Kinematics</b><br>The bedrock of the whole chapter. JEE Main asks one or two direct questions every year on the <i>x</i>, <i>v</i>, <i>a</i> relations and on phase. NEET reliably places one question on identifying SHM or on maximum speed and maximum acceleration. JEE Advanced rarely asks it in isolation but assumes perfect command of this kinematics inside every energy, spring and pendulum problem. CBSE Boards want the definition, the <i>a</i> = −ω<sup>2</sup><i>x</i> relation, and a clean derivation of velocity from displacement.<br><br><b>02 · Energy in SHM</b><br>A perennial favourite. JEE Main almost always carries one or two questions on <i>E</i> ∝ <i>A</i><sup>2</sup>, on the position where kinetic and potential energies are equal, or on the double frequency of the energy curves. NEET reliably places one question, usually on where the maxima sit or on an energy ratio. JEE Advanced folds it into spring and graph problems and loves the time-average versus position-average subtlety. For CBSE Boards, the derivation of <i>E</i> = ½<i>kA</i><sup>2</sup> is a standard 3 mark question.<br><br><b>03 · Pendulums and Mass-Spring Systems</b><br>The most question-dense topic in the chapter. JEE Main reliably carries one or two questions every year: a pendulum in a lift or an accelerating car, spring combinations, or the vertical-spring period. NEET asks one or two on the factors affecting a simple pendulum and on effective gravity. JEE Advanced reaches for the physical pendulum and multi-spring systems. For CBSE Boards, the derivation of <i>T</i> = 2π√(<i>L</i>/<i>g</i>) is an almost-guaranteed 3 mark question.<br><br><b>04 · Damped and Forced Oscillations</b><br>The most conceptual topic here. JEE Main typically asks one question on the resonance condition, on the exponential decay of amplitude or energy, or on the type of damping. NEET leans on definitions and assertion-reason items. JEE Advanced reaches for the quality factor, energy decay and the damping regimes. For CBSE Boards, the definitions of free, damped and forced oscillation and everyday examples of resonance are frequent short-answer questions.<br><br><b>05 · The Reference Circle, and Adding Oscillations</b><br>The reference-circle picture is a guaranteed CBSE 1 to 2 mark item and the conceptual backbone JEE uses for phasors. Superposition of two SHMs, collinear and perpendicular, appears in JEE Advanced and in NEET assertion-reason questions, and beats are asked by name in JEE Main. Lissajous figures turn up as a recognition question rather than a calculation.<br><br><b>06 · Proving a New System Is SHM</b><br>The topic that separates a student who has memorised from one who can work. JEE Main and Advanced love the standard non-obvious systems, liquid in a U-tube, a floating block, the tunnel through the Earth, a rolling cylinder on a spring, precisely because they test whether you can PROVE a motion is simple harmonic rather than recall a formula. CBSE Boards ask for the differential equation of SHM. Every one of these systems collapses to the same three lines."
        },
        {
          "t": "p",
          "html": "Think of the last time you sat on a <i>jhula</i> in a courtyard. Somebody gives you a gentle push and you sail forward. But you do not fly off. You slow, you stop, and you come right back. Push too far one way and something always pulls you back toward the middle. That something always pulling you back home is the single most important idea in this entire chapter.<br><br>Build it up slowly. A motion that repeats itself after a fixed interval of time is <b>periodic motion</b>: the hands of a wall clock, the Earth around the Sun, the needle of a sewing machine. Among periodic motions, some go <b>to and fro about a central point</b>: the swing, a tuning fork's prong, a loaded truck bouncing on its springs after it meets a pothole. That back-and-forth, repeating, about-a-fixed-point motion is an <b>oscillation</b>.<br><br><b>Simple harmonic motion</b> is the cleanest and most fundamental kind of oscillation. It happens whenever the force trying to drag the body back to the centre is directly proportional to how far the body has strayed. Stray a little, get pulled a little. Stray twice as far, get pulled twice as hard. In symbols the restoring force obeys <i>F</i> = −<i>kx</i>, and the minus sign is the soul of the whole thing: the force always points opposite to the displacement, always back toward the mean position. When you are to the right it pulls left, when you are to the left it pushes right. It never lets you settle anywhere except the centre, and it never lets you stay at the centre, because you arrive there moving."
        },
        {
          "t": "think",
          "html": "tie a rubber band to your finger and stretch it. the further you pull, the harder it tugs back, and the tug always points <i>toward</i> your finger, never away. a particle in shm lives its whole life inside such a tug. at the mean position the tug is zero, so it is sprinting there. at the turning points the tug is largest, so it freezes and reverses. speed is maximum where force is zero, speed is zero where force is maximum. they are never both maximum at the same place. hold that picture, because almost every question in this chapter is a variation of it."
        },
        {
          "t": "p",
          "html": "Now turn the force statement into a motion statement. Newton's second law says <i>F</i> = <i>ma</i>, so <i>F</i> = −<i>kx</i> becomes <i>ma</i> = −<i>kx</i>, that is, <i>a</i> = −(<i>k</i>/<i>m</i>)<i>x</i>. The bracket is a positive constant, and it is traditional and extremely useful to name it ω<sup>2</sup>. What comes out is the <b>defining kinematic signature</b> of simple harmonic motion:<br><br><i>a</i> = −ω<sup>2</sup><i>x</i>, with ω<sup>2</sup> = <i>k</i>/<i>m</i><br><br>Read this as the official identity card of SHM. Any motion whose acceleration is (i) proportional to the displacement and (ii) opposite to it in direction is simple harmonic, no exceptions, no matter what dressing the problem is wearing. Topic 06 is nothing but this sentence applied to six systems that do not look like springs.<br><br>It also tells you where SHM stops being true. The restoring force must be <b>exactly linear</b> in the displacement, so a real spring qualifies only inside its elastic limit. A simple pendulum qualifies only for small angles, because we are about to approximate sin θ by θ. Ideal SHM assumes no damping, so a real oscillation, which leaks energy to air and friction, is only approximately simple harmonic. And the motion must have a <b>single</b> mean position and a <b>single</b> angular frequency: a sum of two different frequencies is perfectly periodic and is not simple harmonic at all."
        },
        {
          "t": "def",
          "term": "The phase convention, fixed once for this whole chapter",
          "html": "Displacement is always written <b><i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)</b> in this chapter, never <i>A</i> cos(ω<i>t</i> + φ). Both are correct descriptions of the same motion, differing only in where you start the clock: the cosine form is the sine form started a quarter cycle earlier. But they are not interchangeable inside one problem. If you write the displacement as a sine and then quote a phase constant you computed from a cosine, every phase in your answer is wrong by π/2, and the marks go with it.<br><br>Three consequences follow and hold everywhere below. Velocity carries a <b>cosine</b>, <i>v</i> = <i>A</i>ω cos(ω<i>t</i> + φ). Acceleration carries a <b>minus sine</b>, <i>a</i> = −<i>A</i>ω<sup>2</sup> sin(ω<i>t</i> + φ) = −ω<sup>2</sup><i>x</i>. And φ = 0 means the particle starts at the mean position moving in the positive direction, which is the most convenient start for almost every problem. In Topic 05, where the motion is drawn as a shadow of a rotating radius, the same convention makes the displacement the projection on the <b>vertical</b> axis, with the angle still measured anticlockwise from the horizontal."
        },
        {
          "t": "defgrid",
          "title": "The seven quantities, with units and dimensions",
          "rows": [
            { "k": "Displacement <i>x</i>", "v": "position measured from the mean position, not from the end of the swing. SI unit m. Dimensions [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]" },
            { "k": "Amplitude <i>A</i>", "v": "the maximum magnitude of displacement, |<i>x</i>|<sub>max</sub>, so the particle travels 4<i>A</i> in one full period. SI unit m, [L]" },
            { "k": "Time period <i>T</i>", "v": "the smallest time for one complete oscillation, out and back. SI unit s, [T]" },
            { "k": "Frequency <i>f</i>", "v": "oscillations per second, <i>f</i> = 1/<i>T</i>. SI unit <b>hertz (Hz)</b>, [T<sup>−1</sup>]" },
            { "k": "Angular frequency ω", "v": "the rate at which the phase advances, ω = 2π<i>f</i>. SI unit <b>rad/s</b>, [T<sup>−1</sup>]. Same dimension as <i>f</i>, different unit, larger by 2π" },
            { "k": "Phase (ω<i>t</i> + φ)", "v": "the argument of the sine. It fixes both the position AND the direction of travel. Dimensionless, measured in radians" },
            { "k": "Phase constant φ", "v": "the phase at <i>t</i> = 0, also called the epoch or the initial phase. Dimensionless, in radians" },
            { "k": "Force constant <i>k</i>", "v": "restoring force per unit displacement. SI unit N/m, [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup>]" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE KINEMATIC EQUATIONS",
          "tag": "one differentiation apart, each from the last",
          "main": "<i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)<br><i>v</i> = <i>dx</i>/<i>dt</i> = <i>A</i>ω cos(ω<i>t</i> + φ)<br><i>a</i> = <i>dv</i>/<i>dt</i> = −<i>A</i>ω<sup>2</sup> sin(ω<i>t</i> + φ) = −ω<sup>2</sup><i>x</i>",
          "legend": [
            "<i>x</i> = displacement from the mean position (m), <i>A</i> = amplitude (m), <i>t</i> = time (s)",
            "ω = angular frequency (<b>rad/s</b>, never Hz), φ = phase constant (rad, dimensionless)",
            "<i>v</i> = velocity (m/s), <i>a</i> = acceleration (m/s<sup>2</sup>), and the last equality is the ID card of SHM"
          ],
          "note": "Velocity leads displacement by π/2 and acceleration leads it by π, which is to say acceleration is exactly anti-phase to displacement. Those two phase facts are worth more marks than the equations themselves."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · VELOCITY WITHOUT TIME, AND THE THREE LINKS",
          "main": "<i>v</i> = ±ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)<br>ω = 2π/<i>T</i> = 2π<i>f</i>, and from a force law <i>F</i> = −<i>kx</i>: ω = √(<i>k</i>/<i>m</i>)",
          "legend": [
            "<i>v</i> = speed at displacement <i>x</i> (m/s), <i>A</i> = amplitude (m), ω = angular frequency (rad/s)",
            "<i>T</i> = time period (s), <i>f</i> = frequency (Hz), <i>k</i> = force constant (N/m), <i>m</i> = oscillating mass (kg)",
            "the ± records that the particle passes every point twice per cycle, once going out and once coming back"
          ],
          "note": "Most problems hand you a position, not a time, which is exactly why this form earns its keep. At x = 0 it gives v = ωA, the fastest the particle ever moves; at x = ±A it gives zero."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MAXIMA, AND TWO SHORTCUTS WORTH MEMORISING",
          "tag": "these two lines finish NEET MCQs in ten seconds",
          "main": "<i>v</i><sub>max</sub> = <i>A</i>ω at <i>x</i> = 0 · <i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup> at <i>x</i> = ±<i>A</i><br>ω = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> · <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub>",
          "legend": [
            "<i>v</i><sub>max</sub> = maximum speed (m/s), reached at the mean position where the restoring force is zero",
            "<i>a</i><sub>max</sub> = maximum acceleration magnitude (m/s<sup>2</sup>), reached at the extremes where the force is largest",
            "<i>A</i> = amplitude (m), ω = angular frequency (rad/s)"
          ],
          "note": "Divide the two maxima and the amplitude cancels, leaving ω. Square the speed and divide, and ω cancels, leaving A. Never solve two simultaneous equations for a problem that gives you both maxima."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · VELOCITY AND ACCELERATION FROM DISPLACEMENT, TAP A LINE",
          "steps": [
            {
              "eq": "let the particle move on a straight line about the mean position, <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)",
              "why": "This is the convention fixed above. <i>A</i>, ω and φ are all constants; only <i>t</i> varies, which is what makes the differentiation short."
            },
            {
              "eq": "<i>v</i> = <i>dx</i>/<i>dt</i> = <i>A</i>ω cos(ω<i>t</i> + φ)",
              "why": "The derivative of sin <i>u</i> is cos <i>u</i>, times <i>du</i>/<i>dt</i> = ω by the chain rule. Both facts come straight from the Trigonometry chapter and neither is re-proved here."
            },
            {
              "eq": "read the physics off: cosine peaks exactly where sine vanishes",
              "why": "So the particle is <b>fastest at the mean position</b> and <b>momentarily at rest at the extremes</b>. That is the swing intuition, recovered from the algebra rather than asserted."
            },
            {
              "eq": "<i>a</i> = <i>dv</i>/<i>dt</i> = −<i>A</i>ω<sup>2</sup> sin(ω<i>t</i> + φ)",
              "why": "Differentiate once more. The derivative of cos <i>u</i> is −sin <i>u</i>, and the chain rule contributes a second factor of ω, which is where the square comes from."
            },
            {
              "eq": "but <i>A</i> sin(ω<i>t</i> + φ) is just <i>x</i>, so <i>a</i> = −ω<sup>2</sup><i>x</i>",
              "why": "The maths has handed back the defining property we started from, which is the best consistency check a derivation can offer. It also explains the name: this is why the motion is called simple <b>harmonic</b> in the first place."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SPEED AS A FUNCTION OF POSITION, TAP A LINE",
          "steps": [
            {
              "eq": "divide each equation by its own maximum: <i>x</i>/<i>A</i> = sin(ω<i>t</i> + φ) and <i>v</i>/<i>A</i>ω = cos(ω<i>t</i> + φ)",
              "why": "We want <i>v</i> in terms of <i>x</i> with the time eliminated, because problems give positions far more often than they give instants. Dividing sets both right-hand sides up as a sine and a cosine of the SAME angle."
            },
            {
              "eq": "square and add, using sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1: <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>v</i><sup>2</sup>/<i>A</i><sup>2</sup>ω<sup>2</sup> = 1",
              "why": "The Pythagorean identity from the Trigonometry chapter, used exactly as it stands. This one line is what removes the time."
            },
            {
              "eq": "multiply by <i>A</i><sup>2</sup>ω<sup>2</sup>: <i>v</i><sup>2</sup> = ω<sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), so <i>v</i> = ±ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)",
              "why": "Rearranged, nothing more. The square root is why the answer carries a ±: the particle passes each point once outward and once inward."
            },
            {
              "eq": "check the two ends: <i>x</i> = 0 gives <i>v</i> = ω<i>A</i>, and <i>x</i> = ±<i>A</i> gives <i>v</i> = 0",
              "why": "Fastest at the centre, frozen at the turning points. The relation also says the graph of <i>v</i> against <i>x</i> is an <b>ellipse</b>, which the next figure draws, and that is a favourite MCQ in its own right."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.A · ONE CLOCK, THREE CURVES",
          "chips": ["displacement, velocity, acceleration"],
          "captions": [
            "One full period, with all three quantities scaled by their own maxima so they share an axis. Displacement is the solid sine. Velocity is the dashed cosine: it peaks a quarter cycle EARLIER, at the moment displacement crosses zero, which is the statement that velocity leads by π/2. Acceleration is the faint curve, and it is the exact mirror image of displacement in the time axis: whenever x is up, a is down by the same amount, which is the statement that a = −ω²x. Read the three together and you can see why speed is maximum where force is zero. This is one frame on purpose; separated into three panels the quarter-cycle offset is invisible."
          ],
          "frames": [
            {
              "x": [0, 6.2832],
              "y": [-1.38, 1.38],
              "aspect": 0.78,
              "axisX": "t",
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [
                { "c": "sin", "a": 1, "b": 1 },
                { "c": "cos", "a": 1, "b": 1, "dash": true },
                { "c": "sin", "a": -1, "b": 1, "soft": true }
              ],
              "labels": [
                { "x": 1.62, "y": 1.24, "text": "x / A" },
                { "x": 0.42, "y": 1.24, "text": "v / Aω" },
                { "x": 4.72, "y": 1.24, "text": "a / Aω²" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two habits come out of that picture and both are examinable. First, <b>the phase ladder</b>: velocity is a quarter cycle ahead of displacement, and acceleration is half a cycle ahead, which is the same as saying it is exactly opposite. Second, <b>the maxima never coincide</b>. At the mean position the speed is greatest and the acceleration is zero; at the extremes the acceleration is greatest and the speed is zero. A question that asks where kinetic energy is largest and acceleration smallest is asking about one place, the centre, and it is asking it in two languages at once.<br><br>There is a third graph worth having in your head, and it is not a graph against time at all. Plot velocity against <b>displacement</b> and the relation <i>v</i><sup>2</sup> = ω<sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) rearranges to <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>v</i><sup>2</sup>/(<i>A</i>ω)<sup>2</sup> = 1, which is an ellipse. Plot acceleration against displacement and <i>a</i> = −ω<sup>2</sup><i>x</i> is a straight line through the origin with negative slope, whose steepness is ω<sup>2</sup> itself. Examiners like these because each is a real SHM graph, so a student who half-remembers can be steered onto the wrong one."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.B · THE TWO GRAPHS THAT ARE NOT AGAINST TIME",
          "chips": ["v against x", "a against x"],
          "captions": [
            "Velocity against displacement, both scaled by their maxima. The curve is a closed ellipse, traced clockwise: the particle runs out to x = A along the top with positive velocity, freezes, and returns along the bottom with negative velocity. It never leaves the ellipse, because v² + ω²x² = ω²A² is a conservation statement in disguise. The two points where the curve meets the x-axis are the turning points.",
            "Acceleration against displacement. A straight line through the origin with NEGATIVE slope, and the magnitude of that slope is ω². Nothing curves and nothing is a parabola: the parabola belongs to potential energy against displacement, which is the next topic. Getting the sign of this line right is the whole question, because a positive slope describes a runaway, not an oscillation."
          ],
          "frames": [
            {
              "x": [-1.35, 1.35],
              "y": [-1.35, 1.35],
              "aspect": 0.86,
              "axisX": "x / A",
              "axisY": "v / Aω",
              "ticksX": { "at": [-1, 0, 1], "labels": ["−A", "0", "A"] },
              "ticksY": { "at": [-1, 0, 1], "labels": ["−1", "0", "1"] },
              "curves": [{ "c": "ellipse", "a": 1, "b": 1 }],
              "points": [
                { "x": 1, "y": 0, "label": "turn", "at": "se" },
                { "x": -1, "y": 0, "label": "turn", "at": "nw" }
              ],
              "labels": [{ "x": 0.02, "y": 1.2, "text": "fastest at x = 0" }]
            },
            {
              "x": [-1.35, 1.35],
              "y": [-1.35, 1.35],
              "aspect": 0.86,
              "axisX": "x",
              "axisY": "a",
              "curves": [{ "c": "line", "m": -1, "k": 0 }],
              "labels": [
                { "x": -0.68, "y": 1.13, "text": "slope = −ω²" },
                { "x": 0.66, "y": -1.16, "text": "a opposes x" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading an SHM equation, and reading off its constants",
          "steps": [
            "Put the given equation beside <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ) and match term by term. The number multiplying the whole sine is <i>A</i>; the number multiplying <i>t</i> inside the bracket is ω in rad/s; whatever is left inside the bracket is φ in radians.",
            "Convert only after matching. <i>T</i> = 2π/ω and <i>f</i> = ω/2π = 1/<i>T</i>. Write the unit down at this step, because ω is rad/s and <i>f</i> is Hz and this is where they get swapped.",
            "For maxima, do not differentiate: <i>v</i><sub>max</sub> = <i>A</i>ω and <i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup>, and say out loud where each one happens, at the centre and at the ends respectively.",
            "If the question instead gives a force law or an acceleration law, force it into the shape <i>a</i> = −(positive constant) × <i>x</i>. That constant IS ω<sup>2</sup>, so ω is its square root and <i>T</i> = 2π/ω. This one move is the whole of Topic 06.",
            "Sanity-check the units before you write the final line. ω<sup>2</sup> must come out per second squared, so ω is in rad/s; if it did not, you have mixed centimetres with metres somewhere."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A particle executes SHM described by <i>x</i> = 0.05 sin(20π<i>t</i>), with every quantity in SI units. Find its amplitude, time period, frequency, maximum speed and maximum acceleration.",
          "steps": [
            "Match against <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ): <i>A</i> = 0.05 m, ω = 20π rad/s, φ = 0. The phase constant is zero, so the particle starts at the mean position moving in the positive direction.",
            "<i>T</i> = 2π/ω = 2π/20π = 0.10 s, and <i>f</i> = 1/<i>T</i> = 10 Hz. Note the two units: ω is 20π rad/s ≈ 62.8 rad/s, while <i>f</i> is 10 Hz. They are not the same number and they are not the same unit.",
            "<i>v</i><sub>max</sub> = <i>A</i>ω = (0.05)(20π) = π ≈ 3.1 m/s, and this happens at <i>x</i> = 0.",
            "<i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup> = (0.05)(20π)<sup>2</sup> = (0.05)(400π<sup>2</sup>) = 20π<sup>2</sup> ≈ 197 m/s<sup>2</sup>, and this happens at <i>x</i> = ±0.05 m."
          ],
          "ans": "<i>A</i> = 5.0 cm, <i>T</i> = 0.10 s, <i>f</i> = 10 Hz, <i>v</i><sub>max</sub> ≈ 3.1 m/s, <i>a</i><sub>max</sub> ≈ 197 m/s<sup>2</sup>. Identify by comparison, substitute, attach units: that order never fails."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A particle in SHM has a maximum speed of 8π cm/s and a maximum acceleration of 16π<sup>2</sup> cm/s<sup>2</sup>. Find its amplitude and time period in under thirty seconds.",
          "steps": [
            "The trap is to write <i>v</i><sub>max</sub> = <i>A</i>ω and <i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup> and then grind through two simultaneous equations. Do not.",
            "Divide: ω = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> = 16π<sup>2</sup>/8π = 2π rad/s. The amplitude cancelled itself out, and the centimetres cancelled too, which is why the mixed units did no harm here.",
            "<i>T</i> = 2π/ω = 2π/2π = 1.0 s.",
            "<i>A</i> = <i>v</i><sub>max</sub>/ω = 8π/2π = 4.0 cm. Equivalently <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub> = 64π<sup>2</sup>/16π<sup>2</sup> = 4.0 cm, which is the same shortcut used the other way round."
          ],
          "ans": "<i>A</i> = 4.0 cm, <i>T</i> = 1.0 s. The ratio <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> giving ω is the single most reused trick in NEET oscillation MCQs."
        },
        {
          "t": "p",
          "html": "The next pattern is the other half of that toolkit. When a problem gives you <b>two speeds at two positions</b>, neither the time nor ω is known, and the way in is always the same: write <i>v</i> = ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) at each position, <b>square both</b> to kill the roots, and <b>subtract</b>. The unknown <i>A</i><sup>2</sup> appears identically in both, so subtracting removes it and leaves ω alone. Put ω back into either equation to recover <i>A</i>. It is two lines, and any attempt to solve the pair by substitution is four."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A particle executing SHM has speed 16 cm/s when it is 3.0 cm from the mean position, and speed 12 cm/s when it is 4.0 cm from the mean position. Find the amplitude and the period.",
          "steps": [
            "Square <i>v</i> = ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) at the first position: 16<sup>2</sup> = ω<sup>2</sup>(<i>A</i><sup>2</sup> − 3<sup>2</sup>), so 256 = ω<sup>2</sup>(<i>A</i><sup>2</sup> − 9). Everything is in centimetres and stays there; the units cancel in the ratio.",
            "At the second position: 12<sup>2</sup> = ω<sup>2</sup>(<i>A</i><sup>2</sup> − 4<sup>2</sup>), so 144 = ω<sup>2</sup>(<i>A</i><sup>2</sup> − 16).",
            "Subtract the second from the first. The <i>A</i><sup>2</sup> terms cancel: 256 − 144 = ω<sup>2</sup>[(<i>A</i><sup>2</sup> − 9) − (<i>A</i><sup>2</sup> − 16)], so 112 = 7ω<sup>2</sup> and ω = 4.0 rad/s.",
            "Substitute back into the first: 256 = 16(<i>A</i><sup>2</sup> − 9), so <i>A</i><sup>2</sup> − 9 = 16, <i>A</i><sup>2</sup> = 25 and <i>A</i> = 5.0 cm.",
            "<i>T</i> = 2π/ω = 2π/4 = π/2 ≈ 1.6 s. Check the answer is physical: both given positions, 3.0 cm and 4.0 cm, are less than the amplitude 5.0 cm, as they must be."
          ],
          "ans": "<i>A</i> = 5.0 cm, <i>T</i> = π/2 ≈ 1.6 s. The subtract-to-eliminate move is the standard route for every two-speeds-at-two-positions problem."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A particle executes SHM of amplitude <i>A</i> about the origin. Prove that the fraction of one complete period during which the magnitude of its displacement is less than <i>A</i>/2 is exactly 1/3.",
          "steps": [
            "Take <i>x</i> = <i>A</i> sin θ with θ = ω<i>t</i> sweeping from 0 to 2π over one period. Because θ = ω<i>t</i> with ω constant, <b>equal angles take equal times</b>, so a fraction of the period is the same thing as a fraction of the angle. That single observation replaces an integration.",
            "The condition |<i>x</i>| < <i>A</i>/2 becomes |sin θ| < 1/2. Sine is small near its zeros, so this holds in three windows, around θ = 0, around θ = π, and around θ = 2π.",
            "Solve them: θ in [0, π/6), then (5π/6, 7π/6), then (11π/6, 2π]. The first and last are half-windows sitting at the two ends of the cycle.",
            "Add the angular spans: π/6 + (7π/6 − 5π/6) + (2π − 11π/6) = π/6 + 2π/6 + π/6 = 4π/6 = 2π/3.",
            "Divide by the full 2π: the fraction is (2π/3)/2π = 1/3."
          ],
          "ans": "Exactly 1/3. The result is worth pausing on. The inner zone is only the central half of the amplitude, yet the particle spends a full third of its life there, and no more, because that is precisely where it is moving fastest: the geometry and the kinematics pull in opposite directions and settle on a clean fraction."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A body in SHM has displacement <i>x</i> = 6 sin(4π<i>t</i> + π/3) cm. Write its amplitude, angular frequency, time period and initial phase.", "a": "<i>A</i> = 6.0 cm, ω = 4π rad/s ≈ 12.6 rad/s, <i>T</i> = 2π/4π = 0.50 s, φ = π/3 rad = 60°." },
            { "q": "[NEET] The maximum acceleration of a particle in SHM is 0.5π<sup>2</sup> m/s<sup>2</sup> and its amplitude is 2.0 cm. Find its time period.", "a": "ω<sup>2</sup> = <i>a</i><sub>max</sub>/<i>A</i> = 0.5π<sup>2</sup>/0.02 = 25π<sup>2</sup>, so ω = 5π rad/s and <i>T</i> = 2π/5π = 0.40 s. Convert the amplitude to metres BEFORE dividing, or the answer is out by a factor of ten." },
            { "q": "[JEE Main] A particle in SHM has speed <i>v</i> at displacement <i>x</i> and speed <i>v</i>/2 at displacement 2<i>x</i>, with 2<i>x</i> < <i>A</i>. Express the amplitude in terms of <i>x</i>.", "a": "Square and divide: 4 = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/(<i>A</i><sup>2</sup> − 4<i>x</i><sup>2</sup>), so 4<i>A</i><sup>2</sup> − 16<i>x</i><sup>2</sup> = <i>A</i><sup>2</sup> − <i>x</i><sup>2</sup> and 3<i>A</i><sup>2</sup> = 15<i>x</i><sup>2</sup>. Hence <i>A</i> = √5 <i>x</i> ≈ 2.2<i>x</i>." },
            { "q": "[JEE Main] A particle moves so that its acceleration is <i>a</i> = −16<i>x</i> in SI units, starting from rest at <i>x</i> = 5.0 cm. Find its speed as it passes the mean position.", "a": "Matching <i>a</i> = −ω<sup>2</sup><i>x</i> gives ω<sup>2</sup> = 16, ω = 4.0 rad/s. Starting from rest means it starts at an extreme, so <i>A</i> = 5.0 cm = 0.050 m. Then <i>v</i><sub>max</sub> = <i>A</i>ω = 0.20 m/s." },
            { "q": "[JEE Advanced] A particle starts at the mean position moving in the positive direction with period <i>T</i>. Find the time it takes to travel from <i>x</i> = <i>A</i>/2 to <i>x</i> = <i>A</i> during this first quarter cycle.", "a": "With <i>x</i> = <i>A</i> sin ω<i>t</i>: <i>x</i> = <i>A</i>/2 at ω<i>t</i> = π/6, and <i>x</i> = <i>A</i> at ω<i>t</i> = π/2. The phase span is π/2 − π/6 = π/3, so the time is (π/3)/(2π/<i>T</i>) = <i>T</i>/6. Sanity check: 0 to <i>A</i> takes <i>T</i>/4 and 0 to <i>A</i>/2 takes <i>T</i>/12, and <i>T</i>/4 − <i>T</i>/12 = <i>T</i>/6." }
          ]
        },
        {
          "t": "mcq",
          "q": "Which of these functions of time represents simple harmonic motion?",
          "opts": [
            { "label": "<i>x</i> = sin(ω<i>t</i>) − cos(ω<i>t</i>)", "nudge": null },
            { "label": "<i>x</i> = sin<sup>3</sup>(ω<i>t</i>)", "nudge": "It does oscillate, which is the bait. But sin³θ = (3 sin θ − sin 3θ)/4 is a superposition of TWO frequencies, ω and 3ω, so it is periodic without being simple harmonic. Checking only that something oscillates is not enough." },
            { "label": "<i>x</i> = sin(ω<i>t</i>) + sin(2ω<i>t</i>) + sin(3ω<i>t</i>)", "nudge": "Three different frequencies. Periodic, certainly, but a sum of sines is only SHM when every term shares one frequency. This option exists to catch the belief that any sum of sines is simple harmonic." },
            { "label": "<i>x</i> = 1 + ω<i>t</i> + ω<sup>2</sup><i>t</i><sup>2</sup>", "nudge": "A polynomial in time grows without bound and never comes back, so it is not even periodic, let alone simple harmonic. Test for repetition before you test for anything else." }
          ],
          "correct": 0,
          "solution": "A sine and a cosine of the SAME angular frequency combine into a single sinusoid, here √2 sin(ωt − π/4), which satisfies a = −ω²x. One frequency in, one frequency out, so it is genuine SHM."
        },
        {
          "t": "mcq",
          "q": "In SHM, velocity leads displacement in phase by, and acceleration leads displacement by, respectively:",
          "opts": [
            { "label": "π/2 and π", "nudge": null },
            { "label": "π and π/2", "nudge": "The two are swapped. It is velocity, the first derivative, that is a quarter cycle ahead; acceleration, the second derivative, is two quarter cycles ahead, which is half a cycle." },
            { "label": "π/2 and π/2", "nudge": "This treats acceleration like velocity and forgets that a = −ω²x is ANTI-phase, not quarter-phase. The minus sign in the ID card is exactly the π you are dropping." },
            { "label": "0 and π", "nudge": "Getting acceleration right and velocity wrong. A zero lead would mean velocity peaks at the same instant as displacement, which would put the particle at its fastest at the turning point." }
          ],
          "correct": 0,
          "solution": "With x = A sin ωt, v = Aω cos ωt = Aω sin(ωt + π/2), a lead of π/2. And a = −Aω² sin ωt = Aω² sin(ωt + π), a lead of π. Figure 13.A is this MCQ drawn."
        },
        {
          "t": "mcq",
          "q": "For a particle in SHM, the graph of acceleration against displacement is:",
          "opts": [
            { "label": "a parabola", "nudge": "That is the potential-energy-against-displacement graph, U = ½kx², which is genuinely a parabola. Every distractor here is a real SHM graph for some OTHER pair of quantities." },
            { "label": "an ellipse", "nudge": "That is the velocity-against-displacement graph, from v² = ω²(A² − x²). Figure 13.B draws both, side by side, for exactly this reason." },
            { "label": "a straight line of positive slope", "nudge": "The shape is right and the sign is not, which is the classic error. A positive slope would mean the acceleration pushes the particle further out, which is a runaway, not an oscillation." },
            { "label": "a straight line of negative slope", "nudge": null }
          ],
          "correct": 3,
          "solution": "a = −ω²x is linear in x with slope −ω², which is negative for every real ω. The magnitude of the slope hands you ω² directly, so such a graph is a way of measuring the period off a picture."
        },
        {
          "t": "mcq",
          "q": "A particle in SHM has its kinetic energy maximum and its acceleration minimum at:",
          "opts": [
            { "label": "the extreme positions", "nudge": "Exactly the opposite situation. At the extremes the particle is momentarily at rest, so kinetic energy is zero, and the restoring force is largest, so acceleration is maximum." },
            { "label": "the mean position", "nudge": null },
            { "label": "midway between mean and extreme", "nudge": "Nothing special happens to either quantity at x = A/2. The one landmark that does sit between mean and extreme is x = A/√2, where kinetic and potential energies are equal, and that is a different question." },
            { "label": "it depends on the amplitude", "nudge": "Both locations are fixed by the shape of the motion, not by how far it swings. Changing A changes the SIZE of the maximum speed and the maximum acceleration, never where they occur." }
          ],
          "correct": 1,
          "solution": "At x = 0 the speed is Aω, its largest value, so kinetic energy is maximum; and a = −ω²x = 0, so acceleration is minimum. The two facts lock to the same point for any amplitude."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the minus sign in <i>a</i> = −ω<sup>2</sup><i>x</i>.</b> The minus sign IS the physics: it encodes the word restoring. Writing <i>a</i> = ω<sup>2</sup><i>x</i> describes a body accelerating away from the centre, which runs off to infinity and never oscillates at all. If a graph question offers you a line of positive slope, this is the trap being set.",
            "<b>Mixing the sine and the cosine convention inside one problem.</b> Both <i>A</i> sin(ω<i>t</i> + φ) and <i>A</i> cos(ω<i>t</i> + φ) are valid, and they differ by a quarter cycle. Choose one at the start, write it down, and never switch: a phase constant computed from one form and quoted in the other is wrong by π/2 every single time. This chapter uses the sine throughout, and it says so in Topic 01's definition block.",
            "<b>Confusing fastest with most accelerated.</b> At the mean position speed is maximum and acceleration is zero. At the extremes speed is zero and acceleration is maximum. They are never both maximum at the same place, and a question that mentions one is usually testing the other.",
            "<b>Assuming any periodic motion is SHM.</b> The Earth orbiting the Sun is periodic and is not simple harmonic. A ball bouncing elastically off the floor is periodic and is not simple harmonic. A sum of two different frequencies is periodic and is not simple harmonic. SHM demands a single frequency and a strictly linear restoring force.",
            "<b>Mixing up ω in rad/s with <i>f</i> in Hz.</b> They differ by a factor of 2π and a huge share of lost marks trace back to this one slip. Sanity-check by unit: if the answer wants hertz you should have divided by 2π somewhere, and if it wants rad/s you should not have. Write the unit beside the number the moment you compute it, not at the end."
          ]
        },
        {
          "t": "protip",
          "html": "three moves cover most of this topic. for max-speed-and-max-acceleration problems, never solve simultaneous equations: ω = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> and <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub>, and you are done in one line each. for two-speeds-at-two-positions, square <i>v</i> = ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) twice and subtract, so <i>A</i><sup>2</sup> vanishes on its own. and for any question about TIME between two positions, do not integrate: convert both positions to phase angles with the sine, take the difference, and divide by ω, because θ = ω<i>t</i> means equal angles take equal times. that third move is worth memorising as a small table, all for a particle starting at the mean position: 0 to <i>A</i>/2 takes <i>T</i>/12, 0 to <i>A</i>/√2 takes <i>T</i>/8, 0 to <i>A</i> takes <i>T</i>/4, and therefore <i>A</i>/2 to <i>A</i> takes <i>T</i>/6. those four numbers answer a startling fraction of objective questions without a single calculation."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>a</i> = −ω<sup>2</sup><i>x</i>", "note": "the ID card. acceleration ∝ displacement and opposite in direction. if this holds, it is SHM" },
            { "f": "<i>x</i> = <i>A</i> sin(ω<i>t</i> + φ) → <i>v</i> = <i>A</i>ω cos(ω<i>t</i> + φ) → <i>a</i> = −<i>A</i>ω<sup>2</sup> sin(ω<i>t</i> + φ)", "note": "this chapter's convention; hold it and never mix in a cosine" },
            { "f": "<i>v</i> = ±ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)", "note": "time eliminated; the v-x graph is an ellipse, the a-x graph a negative-slope line" },
            { "f": "<i>v</i><sub>max</sub> = <i>A</i>ω at the mean · <i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup> at the extremes", "note": "never maximum at the same place" },
            { "f": "ω = 2π/<i>T</i> = 2π<i>f</i>, and ω = √(<i>k</i>/<i>m</i>) from <i>F</i> = −<i>kx</i>", "note": "ω in rad/s, f in Hz; the two are not interchangeable" },
            { "f": "ω = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> · <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub>", "note": "the ten-second shortcuts" },
            { "f": "velocity leads <i>x</i> by π/2 · acceleration leads <i>x</i> by π", "note": "quarter cycle and half cycle; the second means anti-phase" }
          ],
          "aids": [
            "\"MAX at MEAN\": speed is Maximum at the Mean, acceleration at the eXtremes",
            "\"a opposes x\": the minus sign is the whole physics",
            "\"omega wears radians, f wears hertz\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Energy in SHM: One Ledger, Two Costumes",
      "chip": "02 ENERGY",
      "kalam": "the total never moves, though both halves swing twice as fast",
      "blocks": [
        {
          "t": "p",
          "html": "Picture a marble rolling back and forth inside a smooth steel <i>katori</i>. At the very bottom it whizzes through fastest. As it climbs the side it slows, stops for an instant at the highest point it reaches, then rolls back down. Ask a simple question: where did its speed <b>go</b> at the top, and where did it <b>come from</b> at the bottom?<br><br>Nothing was lost. The energy simply changed costume. At the bottom it wore the costume of motion, kinetic energy; at the top it wore the costume of position, potential energy. That continuous change of costume, with the <b>total</b> never changing, is the entire story of energy in SHM.<br><br>The bookkeeping is one you have already done. In Work, Energy and Power the spring's stored energy came out as <i>U</i> = ½<i>kx</i><sup>2</sup>, the area under the <i>F</i> = <i>kx</i> line, and the ledger <i>K</i> + <i>U</i> = constant was established for any conservative force. The restoring force of SHM, <i>F</i> = −<i>kx</i>, is conservative, so that ledger applies here unchanged. Nothing about it is re-derived in this topic. What is new is where the two terms sit, and how fast each one swings."
        },
        {
          "t": "think",
          "html": "imagine your savings are fixed at ten thousand rupees, split between a current account you can spend from instantly, which is kinetic energy, and a fixed deposit that is locked up, which is potential energy. money shuttles between the two accounts as the particle moves, but your net worth never changes. at the mean position everything sits in the current account, so <i>K</i> = <i>E</i> and <i>U</i> = 0. at the extremes everything is locked away, so <i>U</i> = <i>E</i> and <i>K</i> = 0. everywhere in between, one rises by exactly as much as the other falls. that fixed net worth is the total mechanical energy, and for shm it is ½<i>kA</i><sup>2</sup>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · KINETIC ENERGY, THREE WAYS TO WRITE IT",
          "main": "<i>K</i> = ½<i>mv</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup> cos<sup>2</sup>(ω<i>t</i> + φ)",
          "legend": [
            "<i>K</i> = kinetic energy (J), <i>m</i> = oscillating mass (kg), <i>v</i> = speed (m/s)",
            "ω = angular frequency (rad/s), <i>A</i> = amplitude (m), <i>x</i> = displacement (m), <i>t</i> = time (s), φ = phase constant (rad)",
            "the middle form comes straight from <i>v</i> = ω√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) in Topic 01, and is the one to use when the question gives a position"
          ],
          "note": "Largest at the mean position, where it equals the whole energy E, and zero at the extremes. Use the position form for position questions and the time form for time questions; converting between them is where the minutes go."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POTENTIAL ENERGY, AND THE TOTAL",
          "tag": "with U = 0 chosen at the mean position",
          "main": "<i>U</i> = ½<i>kx</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup><i>x</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup> sin<sup>2</sup>(ω<i>t</i> + φ)<br><i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup>",
          "legend": [
            "<i>U</i> = potential energy (J), <i>k</i> = force constant (N/m), <i>x</i> = displacement from the mean position (m)",
            "<i>E</i> = total mechanical energy (J), constant in time and independent of where the particle is",
            "<i>m</i> = mass (kg), ω = angular frequency (rad/s), <i>A</i> = amplitude (m), <i>t</i> = time (s), φ = phase constant (rad)"
          ],
          "note": "The two forms of E agree only because k = mω², which is the ID card written sideways. U is measured from a chosen zero, conventionally the mean position; shifting that zero adds a constant to both U and E and changes no physics at all."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RATIOS THAT ANSWER MOST MCQS",
          "tag": "no substitution needed, just a position",
          "main": "<i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> · <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> · <i>K</i>/<i>U</i> = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/<i>x</i><sup>2</sup><br><i>E</i> ∝ <i>A</i><sup>2</sup> and <i>E</i> ∝ ω<sup>2</sup>",
          "legend": [
            "<i>K</i>, <i>U</i>, <i>E</i> = kinetic, potential and total energy (J); every ratio here is dimensionless",
            "<i>x</i> = displacement from the mean position (m), <i>A</i> = amplitude (m), ω = angular frequency (rad/s)",
            "so doubling the amplitude quadruples the energy, and doubling the frequency quadruples it too"
          ],
          "note": "Feed a position in as a fraction of the amplitude and the answer comes out as a fraction of the total energy, with no masses and no spring constants ever entering. At x = A/2 that gives U = E/4 and K = 3E/4."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TOTAL ENERGY IS ½kA², TAP A LINE",
          "steps": [
            {
              "eq": "take <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ) under a conservative restoring force <i>F</i> = −<i>kx</i>, with ω<sup>2</sup> = <i>k</i>/<i>m</i> and <i>U</i> = 0 at the mean position",
              "why": "The chapter's convention, plus the one assumption that matters: the force is conservative, so a potential energy exists at all and the total is worth computing."
            },
            {
              "eq": "kinetic: <i>K</i> = ½<i>mv</i><sup>2</sup> = ½<i>mA</i><sup>2</sup>ω<sup>2</sup> cos<sup>2</sup>(ω<i>t</i> + φ) = ½<i>kA</i><sup>2</sup> cos<sup>2</sup>(ω<i>t</i> + φ)",
              "why": "Substitute <i>v</i> = <i>A</i>ω cos(ω<i>t</i> + φ) from Topic 01 and square it. The last step uses <i>m</i>ω<sup>2</sup> = <i>k</i>, which is the ID card again."
            },
            {
              "eq": "potential: the work done against the restoring force from 0 to <i>x</i> is stored, giving <i>U</i> = ½<i>kx</i><sup>2</sup> = ½<i>kA</i><sup>2</sup> sin<sup>2</sup>(ω<i>t</i> + φ)",
              "why": "This is the spring result from Work, Energy and Power, quoted rather than re-integrated: the area under a straight line of slope <i>k</i> up to <i>x</i> is ½<i>kx</i><sup>2</sup>."
            },
            {
              "eq": "add: <i>E</i> = ½<i>kA</i><sup>2</sup>[cos<sup>2</sup>(ω<i>t</i> + φ) + sin<sup>2</sup>(ω<i>t</i> + φ)] = ½<i>kA</i><sup>2</sup>",
              "why": "The bracket is 1 by the Pythagorean identity. Every trace of time has vanished, which is exactly what conservation of energy is supposed to look like."
            },
            {
              "eq": "and since <i>k</i> = <i>m</i>ω<sup>2</sup>, equivalently <i>E</i> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup>",
              "why": "The second form is the one to reach for when a problem gives you <i>m</i> and ω rather than <i>k</i>. Both say the same thing: energy scales as the SQUARE of the amplitude and as the square of the frequency."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ENERGIES SWING AT DOUBLE THE FREQUENCY, TAP A LINE",
          "steps": [
            {
              "eq": "use the power-reduction identities cos<sup>2</sup>θ = (1 + cos 2θ)/2 and sin<sup>2</sup>θ = (1 − cos 2θ)/2, with θ = ω<i>t</i> + φ",
              "why": "Both come from the Trigonometry chapter's double-angle work and are used here exactly as they stand. Their whole job is to turn a squared trig function into a plain one at twice the angle."
            },
            {
              "eq": "<i>K</i> = ½<i>kA</i><sup>2</sup> · (1 + cos 2θ)/2 = <i>E</i>/2 + (<i>E</i>/2) cos 2(ω<i>t</i> + φ)",
              "why": "A constant <i>E</i>/2 plus a term oscillating at angular frequency <b>2ω</b>. That factor of two is the whole result."
            },
            {
              "eq": "<i>U</i> = ½<i>kA</i><sup>2</sup> · (1 − cos 2θ)/2 = <i>E</i>/2 − (<i>E</i>/2) cos 2(ω<i>t</i> + φ)",
              "why": "The same constant, with the oscillating part carrying the opposite sign. The two swings are equal and opposite by construction."
            },
            {
              "eq": "add them: the oscillating parts cancel exactly, leaving <i>E</i>",
              "why": "Which re-proves the previous derivation in one line, and shows WHY the total is constant: not because neither term moves, but because they move in perfect opposition."
            },
            {
              "eq": "read off the averages: the cos 2θ term averages to zero, so ⟨<i>K</i>⟩ = ⟨<i>U</i>⟩ = <i>E</i>/2 over a full period",
              "why": "So each energy oscillates at frequency 2<i>f</i>, period <i>T</i>/2, about a mean of <i>E</i>/2. Physically: in one full to-and-fro the particle crosses the fast mean position TWICE and freezes at the extremes TWICE, so each energy peaks twice."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.1 · THE TWO CURVES THAT ADD TO A FLAT LINE",
          "chips": ["energy against time", "energy against position"],
          "captions": [
            "One period of the motion, with x = A sin ωt so the particle starts at the mean position. Kinetic energy (dashed) starts at its maximum E and falls; potential energy (solid) starts at zero and rises. Each completes TWO full humps inside one period T, which is the double-frequency result made visible. They cross at E/2, and their sum is the faint horizontal line at E, which never moves. If the two curves in front of you do not add to a flat line at every instant, one of them is drawn wrong.",
            "The same two energies against position instead of time. Potential energy is the solid upward parabola U = ½kx², kinetic energy the dashed downward one K = E − U, and their sum is again the flat line at E. They cross at x = ±A/√2 ≈ ±0.707A, NOT at ±A/2, because energy goes as the square of displacement and the halfway point in energy therefore sits well past the halfway point in distance. The parabola is why an energy-against-displacement graph is a parabola and an acceleration-against-displacement graph is a straight line."
          ],
          "frames": [
            {
              "x": [0, 6.2832],
              "y": [-0.16, 1.30],
              "aspect": 0.78,
              "axisX": "t",
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [
                { "c": "cos", "a": -0.5, "b": 2, "d": 0.5 },
                { "c": "cos", "a": 0.5, "b": 2, "d": 0.5, "dash": true },
                { "c": "line", "m": 0, "k": 1, "soft": true }
              ],
              "labels": [
                { "x": 0.30, "y": 1.14, "text": "K" },
                { "x": 1.85, "y": 1.14, "text": "U" },
                { "x": 4.60, "y": 1.12, "text": "E = K + U" }
              ]
            },
            {
              "x": [-1.3, 1.3],
              "y": [-0.16, 1.28],
              "aspect": 0.80,
              "axisX": "x",
              "ticksX": { "at": [-1, 0, 1], "labels": ["−A", "0", "A"] },
              "ticksY": { "at": [0, 0.5, 1], "labels": ["0", "E/2", "E"] },
              "curves": [
                { "c": "poly", "coeffs": [0, 0, 1] },
                { "c": "poly", "coeffs": [1, 0, -1], "dash": true },
                { "c": "line", "m": 0, "k": 1, "soft": true }
              ],
              "points": [
                { "x": 0.707, "y": 0.5, "label": "K = U", "at": "se" },
                { "x": -0.707, "y": 0.5, "label": "K = U", "at": "sw" }
              ],
              "labels": [
                { "x": 0, "y": 1.14, "text": "E = constant" },
                { "x": 0.80, "y": 0.72, "text": "U" },
                { "x": -0.80, "y": 0.28, "text": "K" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "The crossing point deserves its own paragraph, because it is asked almost every year and the tempting wrong answer is very tempting indeed. Set <i>K</i> = <i>U</i>: ½<i>k</i>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) = ½<i>kx</i><sup>2</sup>, so <i>A</i><sup>2</sup> = 2<i>x</i><sup>2</sup> and <b><i>x</i> = ±<i>A</i>/√2 ≈ ±0.707<i>A</i></b>. Not <i>A</i>/2. Halfway in <b>displacement</b> is not halfway in <b>energy</b>, because energy carries a square, so the split happens later than instinct says. At that crossing each energy is exactly <i>E</i>/2.<br><br>Two cousins are worth carrying with it. At <i>x</i> = <i>A</i>/2 the potential energy is <i>E</i>/4 and the kinetic is 3<i>E</i>/4. At <i>x</i> = (√3/2)<i>A</i> ≈ 0.866<i>A</i> the potential energy is 3<i>E</i>/4 and the kinetic is <i>E</i>/4. Between those three landmarks you can answer nearly every objective question on this topic without writing an equation."
        },
        {
          "t": "defgrid",
          "title": "The landmark positions, and what each energy is doing there",
          "rows": [
            { "k": "<i>x</i> = 0, the mean", "v": "<i>K</i> = <i>E</i>, <i>U</i> = 0. Speed maximum at <i>A</i>ω, acceleration zero. Crossed TWICE per period" },
            { "k": "<i>x</i> = ±<i>A</i>/2", "v": "<i>U</i> = <i>E</i>/4, <i>K</i> = 3<i>E</i>/4. Reached at phase π/6 from the mean" },
            { "k": "<i>x</i> = ±<i>A</i>/√2", "v": "<i>K</i> = <i>U</i> = <i>E</i>/2. The equal-energy point, at ≈ 0.707<i>A</i>, phase π/4" },
            { "k": "<i>x</i> = ±(√3/2)<i>A</i>", "v": "<i>U</i> = 3<i>E</i>/4, <i>K</i> = <i>E</i>/4. At ≈ 0.866<i>A</i>, phase π/3" },
            { "k": "<i>x</i> = ±<i>A</i>, the extremes", "v": "<i>U</i> = <i>E</i>, <i>K</i> = 0. Speed zero, acceleration maximum at <i>A</i>ω<sup>2</sup>. Reached TWICE per period" },
            { "k": "Over a whole period", "v": "⟨<i>K</i>⟩ = ⟨<i>U</i>⟩ = <i>E</i>/2 in TIME average, but ⟨<i>K</i>⟩ = 2<i>E</i>/3 averaged over position" }
          ]
        },
        {
          "t": "proc",
          "title": "Energy at a given position, in three lines",
          "steps": [
            "Compute the total once, from whichever pair the question gives you: <i>E</i> = ½<i>kA</i><sup>2</sup> if you have <i>k</i>, or <i>E</i> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup> if you have <i>m</i> and ω. Convert every length to metres at this step and nowhere else.",
            "Turn the position into a fraction of the amplitude, <i>r</i> = <i>x</i>/<i>A</i>. Then <i>U</i> = <i>r</i><sup>2</sup><i>E</i> and <i>K</i> = (1 − <i>r</i><sup>2</sup>)<i>E</i>, with no further substitution.",
            "Check the pair adds to <i>E</i>, and check the ratio against the landmark table: <i>r</i> = 0.5 must give 1 to 3, <i>r</i> = 0.707 must give 1 to 1. If your two numbers do not sum to the total you computed in line one, stop and find the arithmetic slip before writing anything else."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A block of mass 0.50 kg is attached to a spring of force constant 200 N/m on a frictionless surface and set into SHM with amplitude 4.0 cm. Find the total mechanical energy, the maximum kinetic energy, the maximum potential energy and the maximum speed.",
          "steps": [
            "Convert first: <i>A</i> = 4.0 cm = 0.040 m. Every energy formula here takes metres, and this is the step that decides whether the answer is right or out by ten thousand.",
            "<i>E</i> = ½<i>kA</i><sup>2</sup> = ½(200)(0.040)<sup>2</sup> = (100)(0.0016) = 0.16 J.",
            "Maximum kinetic energy occurs at the mean position, where all of the energy is kinetic, so <i>K</i><sub>max</sub> = <i>E</i> = 0.16 J. Maximum potential energy occurs at the extremes, where all of it is potential, so <i>U</i><sub>max</sub> = <i>E</i> = 0.16 J. Both maxima equal the total; they simply happen at different places.",
            "From ½<i>mv</i><sub>max</sub><sup>2</sup> = <i>E</i>: <i>v</i><sub>max</sub> = √(2<i>E</i>/<i>m</i>) = √(0.32/0.50) = √0.64 = 0.80 m/s.",
            "Cross-check with Topic 01: ω = √(<i>k</i>/<i>m</i>) = √(200/0.50) = √400 = 20 rad/s, so <i>v</i><sub>max</sub> = <i>A</i>ω = (0.040)(20) = 0.80 m/s. The two routes agree."
          ],
          "ans": "<i>E</i> = <i>K</i><sub>max</sub> = <i>U</i><sub>max</sub> = 0.16 J, and <i>v</i><sub>max</sub> = 0.80 m/s."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At what displacement from the mean position, as a fraction of the amplitude, is the kinetic energy of an SHM particle exactly equal to its potential energy?",
          "steps": [
            "The tempting wrong answer is <i>x</i> = <i>A</i>/2, and it is wrong because halfway in displacement is not halfway in energy. Energy goes as the square of displacement, so the split happens later than instinct suggests.",
            "Set <i>K</i> = <i>U</i> with <i>K</i> = ½<i>k</i>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) and <i>U</i> = ½<i>kx</i><sup>2</sup>. The ½<i>k</i> cancels off both sides at once.",
            "<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup> = <i>x</i><sup>2</sup>, so 2<i>x</i><sup>2</sup> = <i>A</i><sup>2</sup> and <i>x</i> = ±<i>A</i>/√2 ≈ ±0.707<i>A</i>.",
            "At that point each energy is half the total, <i>K</i> = <i>U</i> = <i>E</i>/2."
          ],
          "ans": "<i>x</i> = ±<i>A</i>/√2 ≈ ±0.71<i>A</i>. Memorise it with its two cousins: <i>U</i> = <i>E</i>/4 at <i>x</i> = <i>A</i>/2, and <i>U</i> = 3<i>E</i>/4 at <i>x</i> = (√3/2)<i>A</i>."
        },
        {
          "t": "p",
          "html": "One subtlety separates a good student from a careless one, and JEE Advanced knows it. The statement <b>the time-averaged kinetic energy is <i>E</i>/2</b> is true. The statement <b>the kinetic energy averaged over position is <i>E</i>/2</b> is false; that average is 2<i>E</i>/3. The two disagree because they weight the motion differently. Time-averaging counts every <b>second</b> equally, and the particle spends more seconds near the slow extremes where kinetic energy is small. Position-averaging counts every <b>centimetre</b> equally regardless of how long the particle dawdles there, and that treatment favours the fast middle where kinetic energy is large. The word average means nothing until you say averaged with respect to what."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A particle of mass 0.10 kg executes SHM of amplitude 10 cm with angular frequency 10 rad/s. Find its kinetic and potential energies when it is 6.0 cm from the mean position, and verify their ratio.",
          "steps": [
            "Total energy first: <i>E</i> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup> = ½(0.10)(10)<sup>2</sup>(0.10)<sup>2</sup> = ½(0.10)(100)(0.010) = 0.050 J.",
            "At <i>x</i> = 6.0 cm = 0.060 m: <i>U</i> = ½<i>m</i>ω<sup>2</sup><i>x</i><sup>2</sup> = ½(0.10)(100)(0.060)<sup>2</sup> = (5.0)(0.0036) = 0.018 J.",
            "<i>K</i> = <i>E</i> − <i>U</i> = 0.050 − 0.018 = 0.032 J. Subtracting is safer than recomputing, because it cannot disagree with the total.",
            "Verify with the position ratio: <i>K</i>/<i>U</i> = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/<i>x</i><sup>2</sup> = (10<sup>2</sup> − 6<sup>2</sup>)/6<sup>2</sup> = 64/36 = 16/9. And 0.032/0.018 = 16/9. The centimetres cancel in the ratio, so no conversion was needed there."
          ],
          "ans": "<i>K</i> = 0.032 J and <i>U</i> = 0.018 J, in the ratio 16 to 9."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "For a particle in SHM of amplitude <i>A</i> and total energy <i>E</i>, show that the time-averaged kinetic energy over one period is <i>E</i>/2 but the kinetic energy averaged over position from −<i>A</i> to +<i>A</i> is 2<i>E</i>/3. Explain physically why the two differ.",
          "steps": [
            "Time average. With φ = 0, <i>K</i> = <i>E</i> cos<sup>2</sup>(ω<i>t</i>), and the power-reduction identity gives cos<sup>2</sup> = ½ + ½cos 2ω<i>t</i>. The oscillating half averages to zero over a whole period, so ⟨<i>K</i>⟩<sub>time</sub> = <i>E</i>/2.",
            "Position average. Write <i>K</i> as a function of position, <i>K</i>(<i>x</i>) = (<i>E</i>/<i>A</i><sup>2</sup>)(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), and average it uniformly over the segment from −<i>A</i> to +<i>A</i>, which has length 2<i>A</i>.",
            "The integral of (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) from −<i>A</i> to <i>A</i> is [<i>A</i><sup>2</sup><i>x</i> − <i>x</i><sup>3</sup>/3] evaluated across, which is (<i>A</i><sup>3</sup> − <i>A</i><sup>3</sup>/3) − (−<i>A</i><sup>3</sup> + <i>A</i><sup>3</sup>/3) = 4<i>A</i><sup>3</sup>/3.",
            "So ⟨<i>K</i>⟩<sub>position</sub> = (<i>E</i>/<i>A</i><sup>2</sup>)(1/2<i>A</i>)(4<i>A</i><sup>3</sup>/3) = 2<i>E</i>/3.",
            "Why they differ: the particle moves slowly near the extremes, where <i>K</i> is small, and quickly near the mean, where <i>K</i> is large. Time-weighting therefore gives extra weight to the low-<i>K</i> regions and drags the average down to <i>E</i>/2, while position-weighting treats every centimetre alike and returns the larger 2<i>E</i>/3."
          ],
          "ans": "⟨<i>K</i>⟩<sub>time</sub> = <i>E</i>/2 and ⟨<i>K</i>⟩<sub>position</sub> = 2<i>E</i>/3. The lesson generalises far beyond this chapter: an average is undefined until you name the variable you averaged over."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A spring of force constant 100 N/m undergoes SHM of amplitude 5.0 cm. Find the total mechanical energy of the oscillation.", "a": "<i>E</i> = ½<i>kA</i><sup>2</sup> = ½(100)(0.050)<sup>2</sup> = (50)(0.0025) = 0.125 J." },
            { "q": "[NEET] At what displacement, as a fraction of the amplitude, is the potential energy of an SHM particle three times its kinetic energy?", "a": "<i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> must equal 3/4, so <i>x</i> = (√3/2)<i>A</i> ≈ 0.87<i>A</i>. Reading the ratio off the table is faster than solving <i>U</i> = 3<i>K</i> from scratch." },
            { "q": "[JEE Main] If the amplitude of an SHM is doubled while the mass and force constant are unchanged, by what factor does the total energy change, and by what factor the maximum speed?", "a": "Total energy ×4, since <i>E</i> ∝ <i>A</i><sup>2</sup>. Maximum speed ×2, since <i>v</i><sub>max</sub> = <i>A</i>ω and ω = √(<i>k</i>/<i>m</i>) is untouched by the amplitude." },
            { "q": "[JEE Main] Express the kinetic energy of an SHM particle at <i>x</i> = <i>A</i>/2 as a fraction of the total energy.", "a": "<i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> = 1 − 1/4 = 3/4, so <i>K</i> = 0.75<i>E</i>. The other quarter is potential." },
            { "q": "[JEE Advanced] Find the fraction of one complete period during which the kinetic energy of an SHM particle exceeds its potential energy.", "a": "<i>K</i> > <i>U</i> exactly when |<i>x</i>| < <i>A</i>/√2, that is |sin θ| < 1/√2, which holds for θ within π/4 of 0 and within π/4 of π. Four such quarter-windows give a total span of 4 × π/4 = π out of 2π, so the fraction is exactly 1/2." }
          ]
        },
        {
          "t": "mcq",
          "q": "A particle executes SHM with frequency <i>f</i>. The frequency with which its kinetic energy oscillates is:",
          "opts": [
            { "label": "<i>f</i>", "nudge": "The most common error: assuming energy tracks displacement. It does not, because kinetic energy contains cos² of the phase, and squaring a sinusoid doubles its frequency." },
            { "label": "2<i>f</i>", "nudge": null },
            { "label": "<i>f</i>/2", "nudge": "A guess at a factor of two in the wrong direction. Squaring can only make a periodic function repeat more often, never less." },
            { "label": "4<i>f</i>", "nudge": "Squaring once doubles the frequency once. Getting a factor of four would need the energy to depend on the fourth power of the displacement." }
          ],
          "correct": 1,
          "solution": "K contains cos²(ωt + φ) = (1 + cos 2(ωt + φ))/2, whose oscillating part runs at 2ω. Physically, the particle crosses the fast mean position twice per cycle, so K peaks twice per cycle. Period T/2."
        },
        {
          "t": "mcq",
          "q": "The total energy of an SHM particle is <i>E</i>. At a displacement equal to half the amplitude, its kinetic energy is:",
          "opts": [
            { "label": "<i>E</i>/4", "nudge": "That is the POTENTIAL energy at x = A/2, since U/E = x²/A² = 1/4. Chosen by students who compute U when the question asked for K." },
            { "label": "<i>E</i>/2", "nudge": "This assumes K = U, which is true only at x = A/√2 ≈ 0.707A, not at x = A/2. It is the single most reliable distractor in this topic." },
            { "label": "3<i>E</i>/4", "nudge": null },
            { "label": "<i>E</i>", "nudge": "That is the kinetic energy at the mean position only. At x = A/2 the particle has already banked a quarter of its energy as potential." }
          ],
          "correct": 2,
          "solution": "K/E = 1 − x²/A² = 1 − 1/4 = 3/4, so K = 3E/4 and U = E/4. Substituting a fraction of the amplitude into the ratio is a one-line answer that needs neither m nor k."
        },
        {
          "t": "mcq",
          "q": "If the amplitude of a simple harmonic oscillator is increased by 50 percent, its total energy increases by:",
          "opts": [
            { "label": "50 percent", "nudge": "This treats E as proportional to A rather than to A². Energy always carries the square, which is the one fact this topic exists to install." },
            { "label": "100 percent", "nudge": "A guess unconnected to the square law. Doubling the energy would need the amplitude to grow by a factor of √2 ≈ 1.41, not 1.5." },
            { "label": "125 percent", "nudge": null },
            { "label": "225 percent", "nudge": "225 percent is the NEW energy as a percentage of the old, not the increase. The question asks how much it went UP, which is 225 minus the original 100." }
          ],
          "correct": 2,
          "solution": "E ∝ A², so the new energy is (1.5)² = 2.25 times the old, that is 225 percent of it, which is an increase of 125 percent. Read carefully whether a question wants the new value or the change."
        },
        {
          "t": "mcq",
          "q": "The graph of potential energy against displacement for a particle in SHM is:",
          "opts": [
            { "label": "a straight line", "nudge": "That is the ACCELERATION against displacement graph, a = −ω²x. Every option here is a real SHM graph for a different quantity, which is the trap." },
            { "label": "a parabola", "nudge": null },
            { "label": "an ellipse", "nudge": "That is the VELOCITY against displacement graph, from v² = ω²(A² − x²). Figure 13.B draws it." },
            { "label": "a horizontal line", "nudge": "That is the TOTAL energy against displacement, which really is constant. Potential energy is the part of it that varies." }
          ],
          "correct": 1,
          "solution": "U = ½kx² is quadratic in x, so the graph is an upward-opening parabola with its minimum at the mean position. Kinetic energy is the same parabola turned over, and the two sum to the flat total-energy line."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the double frequency.</b> Both <i>K</i> and <i>U</i> oscillate at 2<i>f</i>, period <i>T</i>/2, not at <i>f</i>. The particle crosses the fast mean position twice and freezes at the extremes twice in every single cycle, so each energy must peak twice.",
            "<b>Putting <i>K</i> = <i>U</i> at <i>x</i> = <i>A</i>/2.</b> Energy goes as <i>x</i><sup>2</sup>, so equality happens at <i>x</i> = <i>A</i>/√2 ≈ 0.707<i>A</i>, noticeably past the halfway mark. At <i>A</i>/2 the split is 3 to 1 in favour of kinetic, not 1 to 1.",
            "<b>Writing <i>E</i> ∝ <i>A</i> instead of <i>E</i> ∝ <i>A</i><sup>2</sup>.</b> The commonest single source of lost marks in any amplitude-changed-by problem. Square the amplitude ratio before you do anything else, and remember the same square applies to ω.",
            "<b>Confusing the two averages.</b> Time-averaged <i>K</i> and <i>U</i> are each <i>E</i>/2. That does NOT mean <i>K</i> = <i>U</i> at every instant, and it does not mean the position-average is <i>E</i>/2 either, which is 2<i>E</i>/3. They are equal on average, and equal instantaneously only at <i>x</i> = ±<i>A</i>/√2.",
            "<b>Measuring <i>U</i> from the wrong zero and then quoting <i>E</i>.</b> <i>U</i> = ½<i>kx</i><sup>2</sup> assumes <i>U</i> = 0 at the mean position. For a VERTICAL spring the mean position is the stretched equilibrium, not the natural length, and measuring <i>x</i> from the natural length adds a gravitational term that has already been cancelled. Topic 03 shows why."
          ]
        },
        {
          "t": "protip",
          "html": "skip re-deriving energies at a given position. use the two ready ratios, <i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> and <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>, and read the answer straight off. lock in three landmarks and you will rarely need anything else: <i>x</i> = <i>A</i>/2 splits the energy 3 to 1, <i>x</i> = <i>A</i>/√2 splits it 1 to 1, and <i>x</i> = 0.866<i>A</i> splits it 1 to 3. for scaling questions, say \"energy squares the amplitude\" before you touch the arithmetic, and check whether the question wants the new value or the increase, because those two differ by exactly one hundred percentage points and examiners know it. and when a damped oscillator turns up in topic 04, this same square is what makes its energy decay twice as fast as its amplitude."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>K</i> = ½<i>m</i>ω<sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) · <i>U</i> = ½<i>kx</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup><i>x</i><sup>2</sup>", "note": "position forms; use these when the question gives a position" },
            { "f": "<i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> = ½<i>m</i>ω<sup>2</sup><i>A</i><sup>2</sup>", "note": "constant in time and independent of x; the two forms agree because k = mω²" },
            { "f": "<i>E</i> ∝ <i>A</i><sup>2</sup> and <i>E</i> ∝ ω<sup>2</sup>", "note": "double the amplitude, quadruple the energy" },
            { "f": "<i>K</i><sub>max</sub> = <i>E</i> at <i>x</i> = 0 · <i>U</i><sub>max</sub> = <i>E</i> at <i>x</i> = ±<i>A</i>", "note": "both maxima equal the total, at different places" },
            { "f": "<i>K</i> = <i>U</i> = <i>E</i>/2 at <i>x</i> = ±<i>A</i>/√2 ≈ ±0.707<i>A</i>", "note": "not at A/2, where the split is 3 to 1" },
            { "f": "<i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> · <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>", "note": "the two lines that answer most objective questions" },
            { "f": "<i>K</i> and <i>U</i> both oscillate at 2<i>f</i>, period <i>T</i>/2; each averages to <i>E</i>/2 in time", "note": "position-average of K is 2E/3, which is a different question" }
          ],
          "aids": [
            "\"square the swing\": energy follows the square of amplitude",
            "\"half energy at A over root two\", never at A over two",
            "\"twice as fast, because a square repeats twice\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Pendulums and Mass-Spring Systems",
      "chip": "03 PENDULUM AND SPRING",
      "kalam": "the pendulum feels gravity, the spring feels stiffness",
      "blocks": [
        {
          "t": "p",
          "html": "There are two great workhorses of oscillation, and almost every problem you will ever solve is one of them in disguise: the <b>pendulum</b>, driven by gravity, and the <b>mass-spring system</b>, driven by elasticity. They look nothing alike. One swings, one bounces. Yet both obey the same master rule from Topic 01, a restoring force proportional to displacement. The interest lies in <b>why</b> each one obeys it, because the reason is different in the two cases.<br><br>Take the <b>simple pendulum</b> first: a small heavy bob on a light string, like the clapper of a temple bell. Pull it aside and gravity tries to drag it straight down, but the string only lets it move along an arc. The part of gravity <b>along the arc</b>, the tangential component <i>mg</i> sin θ, is what hauls the bob back toward the bottom. For small swings sin θ ≈ θ, so this restoring force becomes proportional to the displacement, and that, precisely, is SHM. Out of it falls one of the most beautiful facts in physics: the period depends only on <i>L</i> and <i>g</i>. Not on the mass of the bob. Not on the amplitude. A heavy bob and a light bob on strings of equal length keep perfect time together. This is <b>isochronism</b>, the property Galileo noticed watching a swinging lamp, and it is the only reason pendulum clocks work at all."
        },
        {
          "t": "think",
          "html": "why does mass cancel for a pendulum but matter for a spring? in a pendulum a heavier bob feels a <i>stronger</i> pull, because gravity scales with mass, but it is also <i>more sluggish</i>, because inertia scales with mass too. the two effects cancel exactly and the mass drops out. in a spring the elastic force is set by the stiffness <i>k</i> alone and could not care less what is hanging on it, so a heavier mass is pure sluggishness with no compensating extra force, and the period grows. the same argument run backwards tells you the spring's period contains no <i>g</i> at all. take a spring-mass system to the moon and it keeps exactly the same time; take a pendulum and it slows down by a factor of √6. that contrast is the single most reliable trap on this topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SIMPLE PENDULUM",
          "tag": "small amplitude only, roughly under 10 degrees",
          "main": "<i>T</i> = 2π√(<i>L</i>/<i>g</i>) · ω = √(<i>g</i>/<i>L</i>)",
          "legend": [
            "<i>T</i> = time period (s), <i>L</i> = length from the pivot to the CENTRE of the bob (m)",
            "<i>g</i> = acceleration due to gravity at that place, 9.8 m/s<sup>2</sup> on Earth",
            "ω = angular frequency (rad/s), and note there is no mass and no amplitude anywhere in this line"
          ],
          "note": "T ∝ √L, so quadrupling the length only doubles the period. A pendulum of period 2.0 s is a seconds pendulum, because each one-way swing takes 1.0 s, and its length is 0.99 m, close enough to a metre to be worth remembering."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASS-SPRING SYSTEM",
          "tag": "vertical or horizontal, the same period",
          "main": "<i>T</i> = 2π√(<i>m</i>/<i>k</i>) · ω = √(<i>k</i>/<i>m</i>)<br>static-stretch form: <i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>), where <i>kx</i><sub>0</sub> = <i>mg</i>",
          "legend": [
            "<i>T</i> = time period (s), <i>m</i> = oscillating mass (kg), <i>k</i> = force constant (N/m)",
            "ω = angular frequency (rad/s), <i>x</i><sub>0</sub> = the extra stretch of a VERTICAL spring at equilibrium (m)",
            "<i>g</i> = 9.8 m/s<sup>2</sup>, which appears in the static-stretch form only because it was used to measure <i>x</i><sub>0</sub>"
          ],
          "note": "The period contains no g. Gravity moves a vertical spring's mean position down by x0 = mg/k and does nothing else. The static-stretch form is the way in when a problem gives you the sag but neither m nor k."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SPRINGS COMBINED, AND SPRINGS CUT",
          "tag": "the opposite of how resistors combine",
          "main": "parallel: <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer, shorter <i>T</i>)<br>series: 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer, longer <i>T</i>)<br>cut into <i>n</i> equal pieces: each piece has constant <i>nk</i>",
          "legend": [
            "<i>k</i><sub>1</sub>, <i>k</i><sub>2</sub>, <i>k</i><sub>eff</sub> = force constants (N/m); <i>n</i> = number of equal pieces, a pure number",
            "parallel means both springs stretch by the SAME amount and share the load",
            "series means both carry the SAME tension and their stretches add"
          ],
          "note": "This is the reverse of the resistor rule, and borrowing that intuition is the single most common error here. A mass connected to two opposite walls by two springs is a PARALLEL pair, because displacing it stretches one and compresses the other and both push it back."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SIMPLE PENDULUM PERIOD, TAP A LINE",
          "steps": [
            {
              "eq": "a point bob of mass <i>m</i> hangs from a light inextensible string of length <i>L</i>, displaced by a small angle θ from the vertical",
              "why": "Two forces act: gravity <i>mg</i> straight down, and the string's tension along the string. The string is inextensible, so the bob is confined to an arc."
            },
            {
              "eq": "resolve the weight along and across the string: <i>mg</i> cos θ along it, balanced by the tension, and <i>mg</i> sin θ along the arc",
              "why": "The along-string component does no work and simply keeps the string taut. Only the tangential component moves the bob, and it points back toward the lowest point, so the restoring force is <i>F</i> = −<i>mg</i> sin θ."
            },
            {
              "eq": "for small angles sin θ ≈ θ in radians, and the arc displacement is <i>s</i> = <i>L</i>θ, so θ = <i>s</i>/<i>L</i>",
              "why": "This single approximation is the whole reason a pendulum is simple harmonic at all, and it is the whole reason the answer stops being true at large swings. It is worth stating out loud every time you use it."
            },
            {
              "eq": "<i>F</i> = −<i>mg</i>θ = −(<i>mg</i>/<i>L</i>)<i>s</i>, which is exactly <i>F</i> = −<i>ks</i> with <i>k</i> = <i>mg</i>/<i>L</i>",
              "why": "The pendulum has revealed itself as a spring in disguise, with an effective stiffness of <i>mg</i>/<i>L</i>. Everything from Topic 01 now applies without changing a symbol."
            },
            {
              "eq": "ω<sup>2</sup> = <i>k</i>/<i>m</i> = (<i>mg</i>/<i>L</i>)/<i>m</i> = <i>g</i>/<i>L</i>, so <i>T</i> = 2π/ω = 2π√(<i>L</i>/<i>g</i>)",
              "why": "The mass cancels, and the cancellation is the physics: gravity, which supplies the restoring force, scales with <i>m</i> in exactly the same way as the inertia that resists it. Check the dimensions: √([L]/[L T<sup>−2</sup>]) = [T]."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A VERTICAL SPRING HAS THE SAME PERIOD AS A HORIZONTAL ONE, TAP A LINE",
          "steps": [
            {
              "eq": "horizontal case first: displacing the mass by <i>x</i> gives <i>F</i> = −<i>kx</i> and nothing else, so <i>m</i><i>a</i> = −<i>kx</i> and ω = √(<i>k</i>/<i>m</i>)",
              "why": "Gravity acts perpendicular to the motion and is balanced by the normal force, so it never enters. This is the clean case."
            },
            {
              "eq": "vertical case: at equilibrium the spring is already stretched by <i>x</i><sub>0</sub>, where <i>kx</i><sub>0</sub> = <i>mg</i>",
              "why": "The mass hangs still, so the spring's pull already balances the weight before any oscillation begins. Note where this equilibrium is: BELOW the natural length by <i>mg</i>/<i>k</i>."
            },
            {
              "eq": "now measure the displacement <i>y</i> from THAT new equilibrium, not from the natural length",
              "why": "The choice of origin is the entire trick. Measuring from the natural length leaves a gravity term dangling in every equation; measuring from equilibrium kills it in one line."
            },
            {
              "eq": "net force = <i>mg</i> − <i>k</i>(<i>x</i><sub>0</sub> + <i>y</i>) = (<i>mg</i> − <i>kx</i><sub>0</sub>) − <i>ky</i> = 0 − <i>ky</i> = −<i>ky</i>",
              "why": "The constant weight is exactly cancelled by the constant extra pull from the initial stretch. What survives is the same <i>F</i> = −<i>ky</i> as the horizontal case."
            },
            {
              "eq": "so <i>T</i> = 2π√(<i>m</i>/<i>k</i>), identical to the horizontal case, and <i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>) by substituting <i>k</i> = <i>mg</i>/<i>x</i><sub>0</sub>",
              "why": "Gravity relocated the mean position and left the period untouched. On the Moon the same spring and mass would hang lower and still oscillate at exactly the same rate."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.2 · THE RESOLVED WEIGHT, AND TWO WAYS TO JOIN SPRINGS",
          "chips": ["the pendulum's weight, resolved", "springs in series", "springs in parallel"],
          "captions": [
            "The bob displaced by a small angle θ from the vertical dashed line. Gravity mg points straight down and is resolved into two pieces: mg cos θ along the string, which the tension balances and which therefore does nothing, and mg sin θ along the arc, pointing back toward the lowest point. That tangential piece is the whole restoring force. Because the arc displacement is s = Lθ and sin θ ≈ θ for small angles, mg sin θ becomes (mg/L)s, which is Hooke's law with an effective stiffness of mg/L.",
            "Two springs stacked end to end, with the mass hanging below both. The SAME tension runs through both springs, so each stretches by its own amount and the stretches ADD. A chain of springs is softer than any single link, exactly as a chain of ropes is longer than any one rope: 1/k = 1/k₁ + 1/k₂, and the period is longer than for either spring alone.",
            "Two springs side by side, both carrying the same mass. Both stretch by the SAME amount, and both pull back, so the restoring forces ADD: k = k₁ + k₂. Two springs sharing a load are stiffer than one, and the period is shorter. Note this is the reverse of the resistor rule, so do not borrow that mnemonic. The same parallel rule applies to a mass sitting between two springs anchored to opposite walls."
          ],
          "frames": [
            {
              "x": [-1.0, 1.15],
              "y": [-1.55, 0.5],
              "axes": "none",
              "aspect": 0.95,
              "polys": [
                { "pts": [[-0.45, 0.3], [0.45, 0.3], [0.45, 0.48], [-0.45, 0.48]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "segments": [
                { "from": [0, 0.3], "to": [0, -0.8], "dash": true, "soft": true },
                { "from": [0, 0.3], "to": [0.525, -0.609], "label": "L", "at": "mid" }
              ],
              "arcs": [{ "at": [0, 0.3], "r": 0.38, "from": 270, "to": 300, "label": "θ", "tone": "amber" }],
              "marks": [{ "x": 0.525, "y": -0.609, "glyph": "dot", "tone": "ink" }],
              "arrows": [
                { "from": [0.525, -0.609], "to": [0.525, -1.25], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [0.525, -0.609], "to": [0.802, -1.089], "tone": "soft", "dash": true, "label": "mg cosθ", "at": "mid" },
                { "from": [0.525, -0.609], "to": [0.248, -0.769], "tone": "amber", "label": "mg sinθ", "at": "end" }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 10],
              "axes": "none",
              "aspect": 0.95,
              "polys": [
                { "pts": [[3, 9.2], [7, 9.2], [7, 9.8], [3, 9.8]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "bodies": [
                { "kind": "spring", "at": [5, 9.2], "to": [5, 6.6], "tone": "ink" },
                { "kind": "spring", "at": [5, 6.6], "to": [5, 4.0], "tone": "ink" },
                { "kind": "block", "at": [5, 3.1], "w": 2.2, "h": 1.3, "label": "m", "tone": "ink" }
              ],
              "marks": [{ "x": 5, "y": 6.6, "glyph": "dot", "tone": "soft" }],
              "labels": [
                { "x": 7.2, "y": 7.9, "text": "k₁" },
                { "x": 7.2, "y": 5.3, "text": "k₂" },
                { "x": 5, "y": 1.1, "text": "1/k = 1/k₁ + 1/k₂" }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 10],
              "axes": "none",
              "aspect": 0.95,
              "polys": [
                { "pts": [[1.5, 9.2], [8.5, 9.2], [8.5, 9.8], [1.5, 9.8]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[2.4, 5.6], [7.6, 5.6]], "tone": "ink" }
              ],
              "bodies": [
                { "kind": "spring", "at": [3.2, 9.2], "to": [3.2, 5.6], "tone": "ink" },
                { "kind": "spring", "at": [6.8, 9.2], "to": [6.8, 5.6], "tone": "ink" },
                { "kind": "block", "at": [5, 4.6], "w": 2.6, "h": 1.4, "label": "m", "tone": "ink" }
              ],
              "segments": [{ "from": [5, 5.6], "to": [5, 5.3] }],
              "labels": [
                { "x": 2.2, "y": 7.4, "text": "k₁" },
                { "x": 7.8, "y": 7.4, "text": "k₂" },
                { "x": 5, "y": 1.6, "text": "k = k₁ + k₂" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SERIES AND PARALLEL SPRING CONSTANTS, TAP A LINE",
          "steps": [
            {
              "eq": "PARALLEL: both springs stretch by the same <i>x</i>, so each pulls back with its own <i>k</i><sub>i</sub><i>x</i>",
              "why": "Side by side, sharing one load, the two ends move together by definition. That is what parallel MEANS mechanically, and it is worth saying rather than pattern-matching on the picture."
            },
            {
              "eq": "total force <i>F</i> = −(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<i>x</i>, so <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>",
              "why": "Forces add because both act on the same mass through the same displacement. Two springs sharing a load are stiffer than either alone, so the period drops."
            },
            {
              "eq": "SERIES: the same tension <i>F</i> runs through both, and the stretches add: <i>x</i> = <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub>",
              "why": "Stacked end to end, whatever tension the lower spring feels is passed straight up to the upper one, exactly as a rope passes tension along its length."
            },
            {
              "eq": "divide by <i>F</i>: 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>",
              "why": "Each spring takes the FULL load and stretches by its own share, so the total stretch is larger and the combination is softer. The period rises."
            },
            {
              "eq": "cutting: a spring of constant <i>k</i> cut into <i>n</i> equal pieces gives each piece a constant <i>nk</i>",
              "why": "The original is <i>n</i> such pieces in series, so 1/<i>k</i> = <i>n</i>(1/<i>k</i><sub>piece</sub>). A shorter spring is STIFFER, which surprises people: under the same force it has less length in which to stretch."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Effective gravity: replace g by g_eff and change nothing else",
          "rows": [
            { "k": "Lift accelerating UP with <i>a</i>", "v": "<i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i>. The bob feels heavier, so the period SHORTENS" },
            { "k": "Lift accelerating DOWN with <i>a</i>", "v": "<i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i>. The bob feels lighter, so the period LENGTHENS" },
            { "k": "Lift in free fall, <i>a</i> = <i>g</i>", "v": "<i>g</i><sub>eff</sub> = 0, so <i>T</i> → infinity. The bob floats and never swings at all" },
            { "k": "Car accelerating horizontally with <i>a</i>", "v": "<i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>), and the rest position TILTS by tan<sup>−1</sup>(<i>a</i>/<i>g</i>) from the vertical" },
            { "k": "The rule behind all three", "v": "add the real <i>g</i> vector to the pseudo-acceleration −<i>a</i> as VECTORS, and take the magnitude" },
            { "k": "What it never touches", "v": "a mass-spring system, whose period has no <i>g</i> in it. Only the pendulum's mean position shifts" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHEN THE BOB IS NOT A POINT: PHYSICAL AND TORSIONAL PENDULUMS",
          "main": "physical (rigid body, pivot a distance <i>d</i> from the centre of mass):<br><i>T</i> = 2π√(<i>I</i>/(<i>mgd</i>)), with equivalent length <i>L</i><sub>eq</sub> = <i>I</i>/(<i>md</i>)<br>torsional (a disc on a wire): <i>T</i> = 2π√(<i>I</i>/κ)",
          "legend": [
            "<i>I</i> = moment of inertia about the PIVOT (kg m<sup>2</sup>), taken from Rotational Motion and not recomputed here",
            "<i>m</i> = mass of the body (kg), <i>d</i> = pivot-to-centre-of-mass distance (m), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "κ = torsional constant, the restoring torque per unit twist, in N m/rad; <i>L</i><sub>eq</sub> is in m"
          ],
          "note": "Set I = mL² and d = L and the physical pendulum collapses to the simple one, which is the check that the formula is the same physics. A uniform rod pivoted at one end has I = mL²/3 and d = L/2, giving L_eq = 2L/3: a rod swings faster than a simple pendulum of the same length."
        },
        {
          "t": "p",
          "html": "Three refinements to the pendulum turn up often enough to be worth their own line, and all three are the same move: something changes <i>L</i> or <i>g</i>, and the period follows.<br><br>A <b>temperature change</b> lengthens the rod. Linear expansion from Thermal Properties gives <i>L</i> = <i>L</i><sub>0</sub>(1 + αΔθ), and since <i>T</i> ∝ √<i>L</i>, a small fractional change in length produces exactly half that fractional change in period. A rise makes the rod longer, the period longer, and the clock <b>slow</b>. A <b>charged bob in an electric field</b> feels an extra force <i>qE</i>, which adds to or subtracts from <i>mg</i> if the field is vertical and combines by Pythagoras if it is horizontal, exactly like an accelerating car. And a <b>large amplitude</b> breaks the small-angle approximation itself, which is the one refinement that is not a change of <i>L</i> or <i>g</i> at all: the period starts to depend on the amplitude, and the motion stops being simple harmonic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE PENDULUM REFINEMENTS",
          "tag": "each one is a change to L or to g",
          "main": "temperature: Δ<i>T</i>/<i>T</i> = ½αΔθ, so a clock loses ½αΔθ × 86400 s per day<br>charged bob: <i>g</i><sub>eff</sub> = <i>g</i> ± <i>qE</i>/<i>m</i> (vertical field), √(<i>g</i><sup>2</sup> + (<i>qE</i>/<i>m</i>)<sup>2</sup>) (horizontal)<br>large amplitude: <i>T</i> ≈ 2π√(<i>L</i>/<i>g</i>)(1 + θ<sub>0</sub><sup>2</sup>/16)",
          "legend": [
            "α = coefficient of linear expansion of the rod (per K), Δθ = temperature rise (K), Δ<i>T</i>/<i>T</i> = fractional change of period (dimensionless)",
            "<i>q</i> = charge on the bob (C), <i>E</i> = electric field (N/C or V/m), <i>m</i> = mass (kg), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "θ<sub>0</sub> = angular amplitude in RADIANS, not degrees, or the correction is nonsense"
          ],
          "note": "The large-amplitude correction is what \"the period does not depend on amplitude\" actually means: it does not, to first order. At θ0 = 30° = 0.524 rad the bracket is 1.017, so the pendulum runs 1.7 percent slow and a clock built on it would lose about 25 minutes a day."
        },
        {
          "t": "proc",
          "title": "A pendulum in a lift, a car, or any accelerating frame",
          "steps": [
            "Draw the acceleration of the FRAME, not of the bob, and reverse it. That reversed vector is the pseudo-acceleration the bob feels in the frame's own reckoning.",
            "Add it to the real <i>g</i> vector, tail to head, and measure the resultant. Its MAGNITUDE is <i>g</i><sub>eff</sub>, and its DIRECTION is the new rest position of the string.",
            "Read the three standard cases off that one picture: frame accelerating up gives <i>g</i> + <i>a</i>, frame accelerating down gives <i>g</i> − <i>a</i>, and a horizontal acceleration gives √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>) with the string tilted by tan<sup>−1</sup>(<i>a</i>/<i>g</i>).",
            "Substitute into <i>T</i> = 2π√(<i>L</i>/<i>g</i><sub>eff</sub>). If the question compares two situations, take the RATIO instead, because <i>L</i> and the 2π cancel and only √(<i>g</i>/<i>g</i><sub>eff</sub>) survives.",
            "Sanity-check the direction of the answer before you write it. Heavier bob means faster swings and a shorter period; lighter bob means the reverse. If the frame is in free fall the answer must run to infinity, and if your algebra does not do that, the sign is wrong."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A simple pendulum has length 1.00 m. Taking <i>g</i> = π<sup>2</sup> ≈ 9.87 m/s<sup>2</sup>, find its time period. What is the new period if the length is made four times as large?",
          "steps": [
            "<i>T</i> = 2π√(<i>L</i>/<i>g</i>) = 2π√(1.00/π<sup>2</sup>) = 2π(1/π) = 2.0 s. Taking <i>g</i> as π<sup>2</sup> is a standard exam convenience and makes the arithmetic exact; with the real 9.8 m/s<sup>2</sup> the answer is 2π√(1.00/9.8) = 2.007 s, which rounds to the same 2.0 s.",
            "A pendulum of period 2.0 s is called a <b>seconds pendulum</b>, because each one-way swing takes exactly 1.0 s, and its length on Earth is about 0.99 m. That pairing is worth memorising outright.",
            "For <i>L</i>' = 4<i>L</i>, take the ratio rather than recomputing: <i>T</i>'/<i>T</i> = √(4<i>L</i>/<i>L</i>) = 2.",
            "So <i>T</i>' = 2 × 2.0 = 4.0 s."
          ],
          "ans": "<i>T</i> = 2.0 s, and quadrupling the length only DOUBLES the period to 4.0 s, because <i>T</i> ∝ √<i>L</i>. Notice that the mass of the bob was never asked for and never needed."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A simple pendulum has period 2.0 s in a stationary lift. The lift now accelerates <b>downward</b> at 3<i>g</i>/4. Find the new period.",
          "steps": [
            "The trap has two mouths: ignoring the lift's acceleration entirely, or adding it when you should subtract. A bob in a downward-accelerating lift feels <b>lighter</b>, so the effective gravity DECREASES and the period must LENGTHEN.",
            "<i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i> = <i>g</i> − (3/4)<i>g</i> = <i>g</i>/4.",
            "Use the ratio form so that <i>L</i> cancels: <i>T</i>'/<i>T</i> = √(<i>g</i>/<i>g</i><sub>eff</sub>) = √(<i>g</i>/(<i>g</i>/4)) = √4 = 2.",
            "<i>T</i>' = 2 × 2.0 = 4.0 s.",
            "Sanity check the limiting case: if the lift were in free fall, <i>a</i> = <i>g</i>, then <i>g</i><sub>eff</sub> = 0 and <i>T</i>' → infinity, meaning the bob floats and never swings. Our answer moved in exactly that direction, which is the confirmation that the sign is right."
          ],
          "ans": "<i>T</i>' = 4.0 s. Always decide FIRST whether the bob gets heavier or lighter, then let the algebra agree with you."
        },
        {
          "t": "p",
          "html": "Spring problems ask a different question, and it is nearly always the same one: <b>find <i>k</i><sub>eff</sub>, then substitute</b>. Everything before that step is geometry, everything after it is one square root. The three configurations worth recognising on sight are two springs in parallel, two in series, and a mass sitting between two springs anchored to opposite walls, which is a parallel pair even though the picture looks nothing like one, because displacing the mass stretches one spring and compresses the other and BOTH push it back toward the centre."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A block of mass 2.0 kg is connected to two springs of force constants 6.0 N/m and 3.0 N/m. Find the period of oscillation when the springs are connected (a) in series and (b) in parallel.",
          "steps": [
            "(a) Series: 1/<i>k</i><sub>eff</sub> = 1/6 + 1/3 = 1/6 + 2/6 = 3/6, so <i>k</i><sub>eff</sub> = 2.0 N/m. The combination is softer than EITHER spring, which is the check that you inverted correctly.",
            "<i>T</i><sub>series</sub> = 2π√(<i>m</i>/<i>k</i><sub>eff</sub>) = 2π√(2.0/2.0) = 2π ≈ 6.3 s.",
            "(b) Parallel: <i>k</i><sub>eff</sub> = 6.0 + 3.0 = 9.0 N/m. Stiffer than either spring, again as a check.",
            "<i>T</i><sub>parallel</sub> = 2π√(2.0/9.0) = 2π(0.4714) ≈ 2.96 s, which rounds to 3.0 s.",
            "Compare: the series combination has one quarter the stiffness of the parallel one, so its period is twice as long, and 6.3/2.96 ≈ 2.1, allowing for rounding."
          ],
          "ans": "<i>T</i><sub>series</sub> ≈ 6.3 s and <i>T</i><sub>parallel</sub> ≈ 3.0 s. The series combination is softer, so it oscillates more slowly, exactly as intuition predicts once you have said the words out loud."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A pendulum clock keeps perfect time at 20 °C. Its rod has a linear expansion coefficient α = 1.2 × 10<sup>−5</sup> per K. In summer the temperature rises to 40 °C. Does the clock run fast or slow, and by how many seconds per day?",
          "steps": [
            "Decide the direction before touching a formula. Heat lengthens the rod; a longer pendulum has a longer period; each tick of the clock now takes MORE than a real second, so the clock falls behind. It runs <b>slow</b>.",
            "Linear expansion, from Thermal Properties: <i>L</i> = <i>L</i><sub>0</sub>(1 + αΔθ), so the fractional change of length is Δ<i>L</i>/<i>L</i> = αΔθ.",
            "Since <i>T</i> ∝ √<i>L</i>, a fractional change in <i>L</i> gives HALF that fractional change in <i>T</i>: Δ<i>T</i>/<i>T</i> = ½αΔθ = ½(1.2 × 10<sup>−5</sup>)(20) = 1.2 × 10<sup>−4</sup>.",
            "Over one day of 86400 s, the time lost is Δ<i>t</i> = (Δ<i>T</i>/<i>T</i>) × 86400 = (1.2 × 10<sup>−4</sup>)(86400) ≈ 10.4 s.",
            "Note that Δθ = 20 K whether you work in kelvin or celsius, because α multiplies a temperature DIFFERENCE and the two scales have the same size of degree."
          ],
          "ans": "The clock runs <b>slow</b>, losing about 10 s per day. A cooler rod would shorten and the clock would gain, which is why precision pendulum clocks use temperature-compensated rods made of two metals that expand against each other."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Find the length of a seconds pendulum, one whose period is 2.0 s, at a place where <i>g</i> = 9.8 m/s<sup>2</sup>.", "a": "<i>L</i> = <i>gT</i><sup>2</sup>/4π<sup>2</sup> = (9.8)(4.0)/(4π<sup>2</sup>) = 39.2/39.48 ≈ 0.99 m. Just under a metre, not exactly one: the round number belongs to <i>g</i> = π<sup>2</sup>, not to the real <i>g</i>." },
            { "q": "[NEET] A simple pendulum has period <i>T</i> on Earth. Taken to the Moon, where gravity is one sixth of Earth's, what is its new period?", "a": "<i>T</i>'/<i>T</i> = √(<i>g</i>/<i>g</i><sub>moon</sub>) = √6, so <i>T</i>' = √6 <i>T</i> ≈ 2.4<i>T</i>. A spring-mass system taken on the same trip would not change at all, which is the contrast being tested." },
            { "q": "[JEE Main] A spring of force constant <i>k</i> is cut into two equal halves and a mass <i>m</i> is hung from one half. Find the ratio of the new period to the period of the original uncut spring with the same mass.", "a": "Halving the length doubles the stiffness, so each half has constant 2<i>k</i>. Then <i>T</i><sub>new</sub>/<i>T</i><sub>old</sub> = √(<i>k</i>/2<i>k</i>) = 1/√2 ≈ 0.71. The cut spring is stiffer, so it oscillates faster." },
            { "q": "[JEE Advanced] A spring of mass 0.20 kg and force constant 100 N/m carries a block of 0.80 kg. A uniform spring contributes an effective mass of one third of its own to the oscillating mass. By what percentage does the spring's mass lengthen the period?", "a": "Effective mass = 0.80 + 0.20/3 = 0.8667 kg. Take the RATIO before rounding anything: <i>T</i>'/<i>T</i> = √(0.8667/0.800) = √1.0833 = 1.041, an increase of <b>4.1 percent</b>. Differencing two three-figure periods, 0.585 s and 0.562 s, gives 4.3 percent, but that last digit is rounding noise and not physics: never subtract two rounded numbers of similar size." },
            { "q": "[JEE Advanced] A simple pendulum of length <i>L</i> hangs from the ceiling of a car accelerating horizontally with <i>a</i> = <i>g</i>. Find the new period and the angle the equilibrium string makes with the vertical.", "a": "<i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>g</i><sup>2</sup>) = <i>g</i>√2, so <i>T</i>' = 2π√(<i>L</i>/<i>g</i>√2) = <i>T</i>/2<sup>1/4</sup> ≈ 0.84<i>T</i>, a shorter period because the apparent gravity is stronger. The string tilts by tan<sup>−1</sup>(<i>a</i>/<i>g</i>) = tan<sup>−1</sup>(1) = 45° from the vertical, backwards relative to the acceleration." }
          ]
        },
        {
          "t": "mcq",
          "q": "The time period of a simple pendulum at small amplitude depends on:",
          "opts": [
            { "label": "the mass of the bob", "nudge": "Mass cancels in the derivation, because gravity supplies the restoring force in exact proportion to the inertia that resists it. This is isochronism, and it is the pendulum's most famous property." },
            { "label": "the amplitude of swing", "nudge": "Not in the SHM regime, which is what small amplitude means. Amplitude begins to matter only once the swings are large enough to break sin θ ≈ θ, and then the motion is no longer simple harmonic at all." },
            { "label": "the length and the local <i>g</i>", "nudge": null },
            { "label": "the material of the bob", "nudge": "Material would enter only through mass, and mass has already cancelled. A lead bob and a wooden bob on equal strings keep identical time." }
          ],
          "correct": 2,
          "solution": "T = 2π√(L/g) contains a length and a field strength and nothing else. Two of the wrong options, mass and material, are the same error twice; the third is the large-amplitude correction over-applied to a small-amplitude question."
        },
        {
          "t": "mcq",
          "q": "A spring-mass system has period <i>T</i> on Earth. On the Moon, where gravity is <i>g</i>/6, its period becomes:",
          "opts": [
            { "label": "<i>T</i>", "nudge": null },
            { "label": "<i>T</i>/√6", "nudge": "A g-dependent guess with the direction reversed as well. Weaker gravity could never SPEED UP an oscillator whose period does not contain g in the first place." },
            { "label": "<i>T</i>√6", "nudge": "This is the PENDULUM answer applied to a spring, and it is the single most common trap on this topic. Ask which system stores its restoring force in gravity and which stores it in elasticity." },
            { "label": "6<i>T</i>", "nudge": "The factor of six is applied to the period rather than to the field, and the period should not depend on the field at all." }
          ],
          "correct": 0,
          "solution": "T = 2π√(m/k) contains no g, so it is identical anywhere in the universe. Gravity would move the hanging equilibrium six times closer to the natural length and leave the timing untouched."
        },
        {
          "t": "mcq",
          "q": "A spring of force constant <i>k</i> is cut into three equal pieces. The force constant of each piece is:",
          "opts": [
            { "label": "<i>k</i>/3", "nudge": "This treats the pieces as sharing the constant the way a series combination divides it, which is backwards: the ORIGINAL spring is the three pieces in series, so each piece must be stiffer than the whole." },
            { "label": "<i>k</i>", "nudge": "Cutting cannot leave the stiffness alone. Under the same force a shorter spring has less length in which to stretch, so it stretches less, which is precisely what a larger k means." },
            { "label": "3<i>k</i>", "nudge": null },
            { "label": "<i>k</i>/9", "nudge": "The factor is squared for no reason. Stiffness scales inversely with length, not inversely with the square of it." }
          ],
          "correct": 2,
          "solution": "A shorter spring is stiffer. Cutting into n equal pieces multiplies the constant by n, so each third has 3k and stretches only one third as far under the same pull. The original spring is those three pieces in series, and 1/k = 3 × 1/(3k) checks out."
        },
        {
          "t": "mcq",
          "q": "A pendulum clock keeps accurate time at ground level. Carried to the top of a very tall tower, it will:",
          "opts": [
            { "label": "run fast", "nudge": "That would need a LARGER g at the top, whereas gravity weakens with altitude. Getting the direction backwards here is easy, so decide it in words before touching the formula." },
            { "label": "run slow", "nudge": null },
            { "label": "keep correct time", "nudge": "This treats g as a universal constant. It is a local field strength, and Gravitation shows it falling off with altitude, which is enough to detune a clock." },
            { "label": "stop", "nudge": "A longer period is not a stopped clock. The pendulum keeps swinging perfectly well, just more slowly, and only free fall would stop it." }
          ],
          "correct": 1,
          "solution": "g decreases with altitude, so T = 2π√(L/g) increases: each second of the clock now takes longer than a real second and it falls behind. A spring-driven balance-wheel watch, whose period has no g in it, would be unaffected."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Letting the bob's mass into the pendulum period.</b> It cancels, exactly, and for a reason worth being able to state: gravity scales the restoring force with <i>m</i> and inertia scales the resistance with <i>m</i>, so the two cancel. Equally, do not let the amplitude in either, as long as the swing is small.",
            "<b>Believing the period is truly amplitude-independent.</b> It is, to first order only. The honest statement is <i>T</i> ≈ 2π√(<i>L</i>/<i>g</i>)(1 + θ<sub>0</sub><sup>2</sup>/16), so a 30° swing runs 1.7 percent slow and the motion is no longer simple harmonic. When a question mentions a LARGE angle, it is testing exactly this.",
            "<b>Giving a vertical spring a different period from a horizontal one.</b> Both give <i>T</i> = 2π√(<i>m</i>/<i>k</i>). Gravity only relocates the mean position, by <i>x</i><sub>0</sub> = <i>mg</i>/<i>k</i>, and never changes the period. The spring period contains no <i>g</i> at all.",
            "<b>Swapping series with parallel.</b> Parallel springs are STIFFER, <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>, with a shorter period. Series springs are SOFTER, 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>, with a longer period. This is the reverse of the resistor mnemonic and borrowing that intuition costs the mark every time.",
            "<b>Cutting a spring the wrong way.</b> A cut piece is stiffer, not weaker: <i>k</i><sub>piece</sub> = <i>nk</i> for <i>n</i> equal pieces. The mental picture that fixes it: a one-centimetre stub of spring is almost rigid.",
            "<b>Forgetting effective gravity in a non-inertial frame, or getting its sign wrong.</b> Up means add, down means subtract, horizontal means Pythagoras. If your answer for a downward-accelerating lift is a SHORTER period, you have added when you should have subtracted."
          ]
        },
        {
          "t": "protip",
          "html": "for any non-inertial pendulum, draw the apparent gravity as a vector before you write anything: the real <i>g</i> plus the pseudo-acceleration −<i>a</i>, tail to head. its length is <i>g</i><sub>eff</sub> and its direction is the new rest position of the string, so one sketch answers both halves of the question at once. when a vertical spring's static stretch <i>x</i><sub>0</sub> is given but <i>m</i> and <i>k</i> are not, use <i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>) and sidestep the missing data entirely. and for spring combinations, two extras beyond series and parallel are worth carrying: a spring with mass <i>m</i><sub>s</sub> of its own behaves as if <i>m</i><sub>s</sub>/3 were added to the load, so <i>T</i> = 2π√((<i>M</i> + <i>m</i><sub>s</sub>/3)/<i>k</i>), and a mass at the midpoint of a spring with both ends fixed sees each half as a spring of constant 2<i>k</i> in parallel, giving 4<i>k</i> and <i>T</i> = π√(<i>m</i>/<i>k</i>). both are standard jee advanced set pieces and neither is hard once you know the picture."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>T</i> = 2π√(<i>L</i>/<i>g</i>)", "note": "independent of mass and of small amplitude; T ∝ √L; a seconds pendulum is 0.99 m" },
            { "f": "<i>T</i> = 2π√(<i>m</i>/<i>k</i>) = 2π√(<i>x</i><sub>0</sub>/<i>g</i>)", "note": "vertical or horizontal, the same; no g in it; x₀ is the static sag" },
            { "f": "parallel <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> · series 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>", "note": "the reverse of resistors; cut into n pieces and each is nk" },
            { "f": "lift up <i>g</i> + <i>a</i> · lift down <i>g</i> − <i>a</i> · car √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>)", "note": "free fall gives g_eff = 0 and no oscillation at all" },
            { "f": "physical: <i>T</i> = 2π√(<i>I</i>/<i>mgd</i>), <i>L</i><sub>eq</sub> = <i>I</i>/<i>md</i> · torsional: <i>T</i> = 2π√(<i>I</i>/κ)", "note": "a rod on its end has L_eq = 2L/3, so it beats a same-length pendulum" },
            { "f": "temperature: Δ<i>T</i>/<i>T</i> = ½αΔθ, rise means slow", "note": "×86400 for seconds lost per day" },
            { "f": "large amplitude: <i>T</i> ≈ 2π√(<i>L</i>/<i>g</i>)(1 + θ<sub>0</sub><sup>2</sup>/16)", "note": "θ₀ in radians; 30° costs 1.7 percent" }
          ],
          "aids": [
            "\"pendulum feels gravity, spring feels stiffness\"",
            "\"Parallel is Powerful, Series is Soft\"",
            "\"a cut spring is a stiff spring\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Damped and Forced Oscillations, and Resonance",
      "chip": "04 DAMPING AND RESONANCE",
      "kalam": "every real oscillation dies, unless you push it in rhythm",
      "blocks": [
        {
          "t": "p",
          "html": "Strike a tabla and the note swells, then fades. Pluck a sitar string and it sings, then falls silent. Set a child's <i>jhula</i> swinging and walk away, and within a minute or two it slows and stops. <b>Every real oscillation in the world eventually dies.</b> The idealised SHM of the first three topics, with its forever-constant amplitude, is a beautiful fiction: reality always leaks energy. Understanding how it leaks, and how we can pump energy back in, is the whole of this topic.<br><br>The leak has a simple model. The resistive force from air or a viscous medium is taken to be proportional to the velocity, <i>F</i><sub>damp</sub> = −<i>bv</i>. The faster you move, the harder the medium resists. Because this force always opposes the velocity, it always does negative work, so the mechanical energy can only ever go down. Notice what that means for the amplitude: it shrinks, and it shrinks <b>exponentially</b>, which is a very particular kind of shrinking. Each fixed fractional drop takes the same time, so the amplitude halves in some interval, then halves again in exactly the same interval, forever."
        },
        {
          "t": "def",
          "term": "Three storylines, and you must keep them straight",
          "html": "<b>Free oscillation.</b> The idealised case: give the system one push and leave it alone with no friction. It oscillates forever at its own <b>natural frequency</b> ω<sub>0</sub> = √(<i>k</i>/<i>m</i>) with constant amplitude. This is the SHM of Topics 01 to 03 and it does not exist.<br><br><b>Damped oscillation.</b> The realistic left-alone case. A resistive force drains energy steadily. The system still oscillates at very nearly its natural frequency, but the amplitude shrinks exponentially until the motion dies out. The frequency barely changes; only the amplitude does.<br><br><b>Forced oscillation.</b> We refuse to let it die and apply an external periodic force. After a brief confused transient, the system stops oscillating at its own frequency and instead <b>marches in step with the driving frequency</b>, settling at a steady amplitude where the energy pumped in each cycle exactly replaces what damping removes. In the steady state the system oscillates at the DRIVER's frequency, never at its own."
        },
        {
          "t": "think",
          "html": "pushing a child on a swing. if you shove at random moments you sometimes help and sometimes fight the motion, and the swing never gets very high. but time each push to arrive exactly as the swing starts moving away from you, at the swing's <i>own</i> natural rhythm, and every push adds energy and the swing climbs higher and higher. that perfect timing is <b>resonance</b>. it is how a radio tuner picks one station out of hundreds, and it is why soldiers are ordered to break step on a bridge, in case their marching rhythm happens to match the bridge's own."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DAMPED OSCILLATOR",
          "tag": "underdamped, which is the only case that oscillates",
          "main": "<i>x</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> sin(ω'<i>t</i> + φ)<br>ω' = √(ω<sub>0</sub><sup>2</sup> − (<i>b</i>/2<i>m</i>)<sup>2</sup>), with ω<sub>0</sub> = √(<i>k</i>/<i>m</i>)",
          "legend": [
            "<i>x</i> = displacement (m), <i>A</i><sub>0</sub> = initial amplitude (m), <i>t</i> = time (s), φ = phase constant (rad)",
            "<i>b</i> = damping constant from <i>F</i> = −<i>bv</i>, SI unit kg/s or equivalently N s/m, dimensions [M<sup>1</sup> L<sup>0</sup> T<sup>−1</sup>]",
            "<i>m</i> = mass (kg), <i>k</i> = force constant (N/m), ω<sub>0</sub> = natural angular frequency and ω' = damped angular frequency, both in rad/s"
          ],
          "note": "The sine carries the to-and-fro and the exponential is the shrinking envelope. Note the chapter's convention held: a sine, not a cosine. The exponent bt/2m is dimensionless, which is the check that b really is kg/s."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AMPLITUDE AND ENERGY DECAY",
          "tag": "energy fades twice as fast as amplitude",
          "main": "<i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> · <i>E</i>(<i>t</i>) = <i>E</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/<i>m</i></sup>",
          "legend": [
            "<i>A</i> = amplitude at time <i>t</i> (m), <i>A</i><sub>0</sub> = its initial value (m)",
            "<i>E</i> = mechanical energy at time <i>t</i> (J), <i>E</i><sub>0</sub> = its initial value (J)",
            "<i>b</i> = damping constant (kg/s), <i>m</i> = mass (kg), <i>t</i> = time (s)"
          ],
          "note": "The two exponents differ by a factor of two for one reason only: E ∝ A², from Topic 02, so squaring the amplitude doubles the exponent. The energy time-constant is HALF the amplitude time-constant, and this is a favourite exam catch."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DRIVEN AMPLITUDE, AND RESONANCE",
          "tag": "read the denominator and the whole story is there",
          "main": "<i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>) / √((ω<sup>2</sup> − ω<sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>b</i>ω/<i>m</i>)<sup>2</sup>)<br>peak at ω<sub>r</sub> = √(ω<sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/2<i>m</i><sup>2</sup>) ≈ ω<sub>0</sub>, where <i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>b</i>ω<sub>0</sub>)",
          "legend": [
            "<i>A</i> = steady-state amplitude (m), <i>F</i><sub>0</sub> = amplitude of the driving force (N), <i>m</i> = mass (kg)",
            "ω = DRIVING angular frequency (rad/s), ω<sub>0</sub> = natural angular frequency (rad/s), <i>b</i> = damping constant (kg/s)",
            "ω<sub>r</sub> = the driving frequency that gives the largest amplitude (rad/s), which for light damping is ω<sub>0</sub> to excellent accuracy"
          ],
          "note": "Two limits are worth reading straight off. At ω → 0 the denominator is just ω₀², so A → F₀/(mω₀²) = F₀/k: a very slow push simply stretches the spring statically. At ω = ω₀ the first term vanishes and only the damping term is left holding the denominator up, which is why the resonant amplitude is set by b alone and would be infinite without it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · QUALITY FACTOR, AND THE THREE DAMPING REGIMES",
          "main": "<i>Q</i> = <i>m</i>ω<sub>0</sub>/<i>b</i> = 2π × (energy stored)/(energy lost per cycle)<br>critical damping at <i>b</i><sub>c</sub> = 2√(<i>mk</i>)",
          "legend": [
            "<i>Q</i> = quality factor, dimensionless, a measure of how sharp the resonance is and how long the system rings",
            "<i>m</i> = mass (kg), ω<sub>0</sub> = natural angular frequency (rad/s), <i>b</i> = damping constant (kg/s), <i>k</i> = force constant (N/m)",
            "<i>b</i><sub>c</sub> = the critical value of <i>b</i> (kg/s) that separates oscillating from non-oscillating behaviour"
          ],
          "note": "A useful reading: the oscillator rings for about Q/2π complete cycles before its energy falls to 1/e of the start. High Q means a tall narrow resonance peak and a long ring; low Q means a short broad peak and a quick death."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE DAMPED EQUATION, AND WHY ITS SOLUTION HAS THAT SHAPE",
          "steps": [
            {
              "eq": "a mass <i>m</i> on a spring of constant <i>k</i> moves through a medium exerting a drag −<i>bv</i>. Newton's second law: <i>m</i>(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>) = −<i>kx</i> − <i>b</i>(<i>dx</i>/<i>dt</i>)",
              "why": "Two forces, the restoring one and the drag. Both carry a minus sign but for different reasons: the spring opposes DISPLACEMENT, the drag opposes VELOCITY."
            },
            {
              "eq": "rearranged: <i>m</i>(<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup>) + <i>b</i>(<i>dx</i>/<i>dt</i>) + <i>kx</i> = 0",
              "why": "The standard form. Compare it with Topic 01's undamped equation, which is this one with <i>b</i> = 0: the whole of damping is that middle term."
            },
            {
              "eq": "guess the shape: an oscillation multiplied by a shrinking factor, <i>x</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> sin(ω'<i>t</i> + φ)",
              "why": "This is not a trick. For light damping each swing is a little smaller than the last, so the answer must be a sine wearing an exponential coat. Substituting it back fixes ω'."
            },
            {
              "eq": "substitution gives ω' = √(<i>k</i>/<i>m</i> − <i>b</i><sup>2</sup>/4<i>m</i><sup>2</sup>) = √(ω<sub>0</sub><sup>2</sup> − (<i>b</i>/2<i>m</i>)<sup>2</sup>)",
              "why": "So damping does two things: it shrinks the amplitude, and it slightly SLOWS the oscillation, ω' being less than ω<sub>0</sub>. But the shift depends on <i>b</i><sup>2</sup>, so for light damping it is utterly negligible."
            },
            {
              "eq": "energy: <i>E</i> = ½<i>kA</i><sup>2</sup> from Topic 02, and <i>A</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup>, so <i>E</i> = ½<i>kA</i><sub>0</sub><sup>2</sup><i>e</i><sup>−<i>bt</i>/<i>m</i></sup> = <i>E</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/<i>m</i></sup>",
              "why": "Squaring the amplitude doubles the exponent, so energy fades with HALF the time constant of amplitude. That one line is the most quoted consequence of damping and it comes entirely from Topic 02's square."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.3 · THE RESONANCE PEAK, AND THE SHRINKING ENVELOPE",
          "chips": ["amplitude against driving frequency", "a damped oscillation in time"],
          "captions": [
            "Steady-state amplitude against driving frequency, for two values of the damping constant b, with the natural frequency marked by the dashed vertical line. Both curves start at the SAME height on the left, because a very slow drive simply stretches the spring statically to F₀/k whatever the damping is. They part company near ω₀: light damping gives a tall narrow peak, a sharp resonance and a high Q; heavy damping gives a short broad one. Note that neither peak is infinite, and note that the heavier-damped peak has drifted noticeably to the LEFT of ω₀, to ω_r = √(ω₀² − b²/2m²), while the lightly damped one sits almost exactly on it.",
            "A damped oscillation in time, drawn inside its own envelope. The oscillation itself is the solid curve; the two faint dashed curves are ±A₀e^(−bt/2m), the exponential envelope that squeezes it. Two things to read off. The zero crossings stay evenly spaced, so the PERIOD barely changes, which is the point that damping shrinks the amplitude rather than slowing the motion. And the envelope falls by the same FACTOR in every equal interval, which is what exponential decay means and why every fraction-drop problem in this topic is solved by counting intervals rather than by solving for b."
          ],
          "frames": [
            {
              "x": [0, 2.25],
              "y": [-0.05, 1.15],
              "aspect": 0.78,
              "axisX": "driving ω",
              "axisY": "A",
              "ticksX": { "at": [0, 1, 2], "labels": ["0", "ω₀", "2ω₀"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0.25], [0.15, 0.256], [0.3, 0.274], [0.45, 0.31], [0.6, 0.38], [0.7, 0.464], [0.8, 0.607], [0.86, 0.74], [0.9, 0.849], [0.94, 0.953], [0.97, 1.002], [1.0, 1.0], [1.03, 0.945], [1.06, 0.855], [1.1, 0.723], [1.15, 0.579], [1.22, 0.434], [1.3, 0.328], [1.4, 0.245], [1.55, 0.172], [1.75, 0.119], [2.0, 0.082], [2.2, 0.064]] },
                { "c": "pts", "smooth": true, "dash": true, "pts": [[0, 0.25], [0.15, 0.254], [0.3, 0.268], [0.45, 0.292], [0.6, 0.327], [0.7, 0.353], [0.8, 0.376], [0.86, 0.381], [0.9, 0.38], [0.94, 0.374], [0.97, 0.367], [1.0, 0.357], [1.03, 0.346], [1.06, 0.332], [1.1, 0.313], [1.15, 0.288], [1.22, 0.254], [1.3, 0.219], [1.4, 0.182], [1.55, 0.141], [1.75, 0.104], [2.0, 0.076], [2.2, 0.06]] },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 0.44, "y": 1.04, "text": "small b: sharp" },
                { "x": 1.66, "y": 0.50, "text": "large b: flat" },
                { "x": 0.52, "y": 0.13, "text": "both start at F₀/k" }
              ]
            },
            {
              "x": [0, 12.7],
              "y": [-1.08, 1.08],
              "aspect": 0.72,
              "axisX": "t",
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.2, 0.191], [0.39, 0.365], [0.59, 0.516], [0.79, 0.64], [0.98, 0.733], [1.18, 0.793], [1.38, 0.821], [1.57, 0.815], [1.77, 0.778], [1.97, 0.714], [2.17, 0.625], [2.36, 0.517], [2.56, 0.394], [2.76, 0.263], [2.95, 0.128], [3.15, -0.006], [3.35, -0.132], [3.54, -0.247], [3.74, -0.347], [3.94, -0.428], [4.13, -0.489], [4.33, -0.529], [4.53, -0.546], [4.72, -0.541], [4.92, -0.516], [5.12, -0.472], [5.32, -0.413], [5.51, -0.34], [5.71, -0.258], [5.91, -0.171], [6.1, -0.081], [6.3, 0.007], [6.5, 0.091], [6.69, 0.167], [6.89, 0.233], [7.09, 0.287], [7.28, 0.327], [7.48, 0.352], [7.68, 0.363], [7.88, 0.359], [8.07, 0.342], [8.27, 0.312], [8.47, 0.272], [8.66, 0.224], [8.86, 0.169], [9.06, 0.111], [9.25, 0.051], [9.45, -0.007], [9.65, -0.063], [9.84, -0.113], [10.04, -0.157], [10.24, -0.192], [10.43, -0.218], [10.63, -0.235], [10.83, -0.241], [11.03, -0.238], [11.22, -0.227], [11.42, -0.207], [11.62, -0.18], [11.81, -0.147], [12.01, -0.111], [12.21, -0.072], [12.4, -0.032], [12.6, 0.007]] },
                { "c": "exp", "a": 1, "k": -0.13, "dash": true, "soft": true },
                { "c": "exp", "a": -1, "k": -0.13, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 2.6, "y": 0.98, "text": "the envelope" },
                { "x": 8.6, "y": -0.92, "text": "amplitude decays" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "The driven-amplitude formula rewards being read rather than memorised, because its whole story lives in the denominator. That denominator is a square root of two competing terms. The first, (ω<sup>2</sup> − ω<sub>0</sub><sup>2</sup>)<sup>2</sup>, <b>vanishes</b> when the drive matches the natural frequency, and its collapse is what makes the amplitude shoot up. The second, (<i>b</i>ω/<i>m</i>)<sup>2</sup>, is then the only thing keeping the denominator off zero, which is why the resonant amplitude is capped by the damping alone at roughly <i>F</i><sub>0</sub>/(<i>b</i>ω<sub>0</sub>). Turn the damping down and the peak grows without limit; turn it off entirely and the formula predicts infinity, which is not a physical answer but a reminder that no real system has zero damping.<br><br>Go the other way, to ω → 0, and the first term becomes ω<sub>0</sub><sup>4</sup> while the second vanishes, so <i>A</i> → <i>F</i><sub>0</sub>/(<i>m</i>ω<sub>0</sub><sup>2</sup>) = <i>F</i><sub>0</sub>/<i>k</i>. That is simply Hooke's law: push slowly enough and you are not driving an oscillator at all, you are stretching a spring. One denominator, read at three places, gives the entire resonance curve."
        },
        {
          "t": "defgrid",
          "title": "The three damping regimes, and where you meet each one",
          "rows": [
            { "k": "Underdamped, <i>b</i> < <i>b</i><sub>c</sub>", "v": "still oscillates, with an exponentially shrinking amplitude. A guitar string, a swing, a car with worn shock absorbers" },
            { "k": "Critically damped, <i>b</i> = <i>b</i><sub>c</sub>", "v": "returns to equilibrium in the SHORTEST possible time without ever overshooting. A hydraulic door closer, a galvanometer needle, a good car suspension" },
            { "k": "Overdamped, <i>b</i> > <i>b</i><sub>c</sub>", "v": "also returns without oscillating, but SLOWLY. A door closer set too tight, or a needle swimming through treacle" },
            { "k": "The boundary", "v": "<i>b</i><sub>c</sub> = 2√(<i>mk</i>). At exactly this value ω' = 0, which is the algebraic signature that the oscillation has just stopped existing" },
            { "k": "Quality factor <i>Q</i>", "v": "<i>Q</i> = <i>m</i>ω<sub>0</sub>/<i>b</i>. Large <i>Q</i> means light damping, a sharp resonance and a long ring; the system rings for about <i>Q</i>/2π cycles" },
            { "k": "What damping does NOT do", "v": "it does not noticeably change the frequency. ω' differs from ω<sub>0</sub> only at second order in <i>b</i>, so for any light damping the period is the free period" }
          ]
        },
        {
          "t": "proc",
          "title": "Any amplitude-falls-to-a-fraction problem, without ever finding b",
          "steps": [
            "Recognise the structure: exponential decay means EQUAL TIMES for EQUAL FACTORS. If the amplitude falls to half in <i>t</i><sub>1</sub>, it falls to a quarter in 2<i>t</i><sub>1</sub>, to an eighth in 3<i>t</i><sub>1</sub>, and so on. Most questions can be answered by counting intervals and never solving for <i>b</i> at all.",
            "If the question does need <i>b</i>, take logarithms of <i>A</i>/<i>A</i><sub>0</sub> = <i>e</i><sup>−<i>bt</i>/2<i>m</i></sup>, giving <i>bt</i>/2<i>m</i> = ln(<i>A</i><sub>0</sub>/<i>A</i>). Solve for whichever symbol is missing.",
            "For an ENERGY question, remember which exponent you need. Amplitude carries <i>b</i>/2<i>m</i> and energy carries <i>b</i>/<i>m</i>. Alternatively, find the amplitude ratio first and then square it, which is safer because it uses only Topic 02.",
            "The 1/<i>e</i> point is worth knowing on sight: the amplitude reaches <i>A</i><sub>0</sub>/<i>e</i> at <i>t</i> = 2<i>m</i>/<i>b</i>, and the energy reaches <i>E</i><sub>0</sub>/<i>e</i> at <i>t</i> = <i>m</i>/<i>b</i>, half as long.",
            "Check the answer is a decay, not a growth. Every fraction you compute must be less than one and every time must be positive; if either fails, a sign in the exponent is inverted."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A block of mass 0.20 kg attached to a spring oscillates in a viscous medium with damping constant <i>b</i> = 0.040 kg/s. Find the time in which the amplitude drops to half its initial value. Take ln 2 = 0.693.",
          "steps": [
            "The amplitude obeys <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup>. Set <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub>/2, so <i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> = 1/2.",
            "Take logarithms: <i>bt</i>/2<i>m</i> = ln 2, so <i>t</i> = (2<i>m</i>/<i>b</i>) ln 2.",
            "Substitute: <i>t</i> = (2 × 0.20/0.040)(0.693) = (10)(0.693) = 6.93 s.",
            "Check the units: <i>m</i>/<i>b</i> has units kg/(kg/s) = s, so 2<i>m</i>/<i>b</i> is a time and the logarithm is a pure number. The answer is a time, as it must be."
          ],
          "ans": "About 6.9 s. And it will halve <b>again</b> in the next 6.9 s, and again in the 6.9 s after that. Equal times for equal fractional drops is the signature of exponential decay, and recognising it saves the whole calculation next time."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A spring-mass system has a natural frequency of 5.0 Hz. A small periodic driving force is applied to it. At approximately what driving frequency is the amplitude largest, and what is the phenomenon called?",
          "steps": [
            "The trap has two versions. One is to attempt the exact resonant frequency ω<sub>r</sub> = √(ω<sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/2<i>m</i><sup>2</sup>) and get bogged down with a <i>b</i> the question never gave you. The other, worse, is to guess that maximum amplitude happens at twice or half the natural frequency, which is confusion with harmonics from the Waves chapter.",
            "The phrase <b>a small periodic driving force</b> is the signal that damping is light. In that case the correction term <i>b</i><sup>2</sup>/2<i>m</i><sup>2</sup> is negligible against ω<sub>0</sub><sup>2</sup>.",
            "So ω<sub>r</sub> ≈ ω<sub>0</sub>, and since the two are related to their frequencies by the same 2π, <i>f</i><sub>drive</sub> ≈ <i>f</i><sub>0</sub> = 5.0 Hz.",
            "The phenomenon is <b>resonance</b>."
          ],
          "ans": "About 5.0 Hz, and the phenomenon is resonance. The amplitude peak always sits at, or just below, the natural frequency, never at a multiple of it."
        },
        {
          "t": "p",
          "html": "The last two examples are where damping earns its reputation as the conceptual topic. Both hinge on one idea: <b>the exponents for amplitude and for energy are not the same</b>, and the factor of two between them is Topic 02's <i>E</i> ∝ <i>A</i><sup>2</sup> showing up again. If you can only remember one of the two, remember the amplitude one, find the amplitude ratio, and square it."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A damped oscillator has mass 0.50 kg, spring constant 50 N/m and damping constant 0.10 kg/s. Find (a) its natural and damped angular frequencies, (b) the time for the amplitude to fall to 1/<i>e</i> of its initial value, and (c) the fraction of mechanical energy remaining at that instant.",
          "steps": [
            "(a) ω<sub>0</sub> = √(<i>k</i>/<i>m</i>) = √(50/0.50) = √100 = 10 rad/s.",
            "The damping parameter is <i>b</i>/2<i>m</i> = 0.10/(2 × 0.50) = 0.10 per second. So ω' = √(ω<sub>0</sub><sup>2</sup> − (<i>b</i>/2<i>m</i>)<sup>2</sup>) = √(100 − 0.010) = √99.99 = 10.0 rad/s to three figures. The frequency is essentially unchanged, which confirms the damping is light, and this is exactly why light damping lets you use ω<sub>0</sub> everywhere.",
            "(b) The amplitude reaches <i>A</i><sub>0</sub>/<i>e</i> when <i>bt</i>/2<i>m</i> = 1, so <i>t</i> = 2<i>m</i>/<i>b</i> = (2 × 0.50)/0.10 = 10 s.",
            "(c) Energy decays as <i>E</i> = <i>E</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/<i>m</i></sup>. At <i>t</i> = 10 s the exponent is <i>bt</i>/<i>m</i> = (0.10)(10)/0.50 = 2.0, so <i>E</i> = <i>E</i><sub>0</sub><i>e</i><sup>−2</sup> ≈ 0.135<i>E</i><sub>0</sub>.",
            "Cross-check without the energy formula: at this instant <i>A</i> = <i>A</i><sub>0</sub>/<i>e</i>, and <i>E</i> ∝ <i>A</i><sup>2</sup>, so <i>E</i> = <i>E</i><sub>0</sub>/<i>e</i><sup>2</sup> = 0.135<i>E</i><sub>0</sub>. The two routes agree, as they must."
          ],
          "ans": "ω<sub>0</sub> = 10 rad/s and ω' ≈ 10.0 rad/s; the amplitude reaches 1/<i>e</i> at <i>t</i> = 10 s; and about 13.5 percent of the energy remains at that moment."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A lightly damped oscillator has natural angular frequency ω<sub>0</sub> = 200 rad/s and quality factor <i>Q</i> = 100. Find <i>b</i>/<i>m</i>, and estimate how many complete oscillations the system makes before its energy falls to 1/<i>e</i> of its initial value. Show that this number is <i>Q</i>/2π.",
          "steps": [
            "From <i>Q</i> = <i>m</i>ω<sub>0</sub>/<i>b</i>: <i>b</i>/<i>m</i> = ω<sub>0</sub>/<i>Q</i> = 200/100 = 2.0 per second.",
            "Energy falls to 1/<i>e</i> when (<i>b</i>/<i>m</i>)<i>t</i> = 1, so <i>t</i> = <i>m</i>/<i>b</i> = 1/2.0 = 0.50 s.",
            "The period, with ω' ≈ ω<sub>0</sub> for light damping, is <i>T</i> = 2π/ω<sub>0</sub> = 2π/200 ≈ 0.0314 s.",
            "Number of oscillations <i>N</i> = <i>t</i>/<i>T</i> = 0.50/0.0314 ≈ 15.9, so about 16 complete swings.",
            "In symbols: <i>N</i> = (<i>m</i>/<i>b</i>)/(2π/ω<sub>0</sub>) = <i>m</i>ω<sub>0</sub>/(2π<i>b</i>) = <i>Q</i>/2π = 100/2π ≈ 15.9. The mass, the stiffness and the damping have all vanished into the single number <i>Q</i>."
          ],
          "ans": "<i>b</i>/<i>m</i> = 2.0 per second, and the system rings for about 16 oscillations, with <i>N</i> = <i>Q</i>/2π in general. This is the deep meaning of the quality factor: a high-<i>Q</i> oscillator rings for many cycles before its energy decays, which is exactly why a high-<i>Q</i> tuning circuit gives a sharp, selective resonance."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] The amplitude of a damped oscillator falls to half its initial value in 10 s. After what total time will it fall to one quarter of the initial value?", "a": "20 s. Exponential decay takes equal times for equal FACTORS, so the second halving takes another 10 s. No value of <i>b</i> is needed and none should be computed." },
            { "q": "[NEET] The amplitude of a damped oscillator becomes 1/3 of its initial value in 2.0 s. What fraction of the initial amplitude remains after 6.0 s?", "a": "6.0 s is three intervals of 2.0 s, so the amplitude is multiplied by 1/3 three times: (1/3)<sup>3</sup> = 1/27 ≈ 0.037 of the original." },
            { "q": "[JEE Main] For a damped oscillator, when the amplitude has fallen to half its initial value, what fraction of the original mechanical energy remains?", "a": "<i>E</i> ∝ <i>A</i><sup>2</sup>, so halving the amplitude leaves (1/2)<sup>2</sup> = 1/4 of the energy. Three quarters of the energy has already been lost by the time the swing looks half as big." },
            { "q": "[JEE Main] A driven oscillator has natural angular frequency ω<sub>0</sub>. State (a) the driving frequency that gives maximum amplitude for light damping, and (b) the amplitude in the limit of a very slowly varying driving force, ω → 0.", "a": "(a) ω ≈ ω<sub>0</sub>, the resonance condition. (b) <i>A</i> → <i>F</i><sub>0</sub>/<i>k</i> = <i>F</i><sub>0</sub>/(<i>m</i>ω<sub>0</sub><sup>2</sup>), which is nothing but the static stretch of the spring under a steady force <i>F</i><sub>0</sub>." },
            { "q": "[JEE Advanced] A lightly damped oscillator loses 2.0 percent of its energy in each cycle. Estimate its quality factor, and estimate how many cycles it rings before its energy falls to 1/<i>e</i>.", "a": "<i>Q</i> = 2π/(fractional energy lost per cycle) = 2π/0.020 = 100π ≈ 314. The ring-down is <i>N</i> = <i>Q</i>/2π = 1/0.020 = 50 cycles, which is the same statement read the other way: losing one fiftieth of the energy per cycle means it takes about fifty cycles to lose most of it." }
          ]
        },
        {
          "t": "mcq",
          "q": "In a damped harmonic oscillation, which quantity decreases continuously with time?",
          "opts": [
            { "label": "the frequency", "nudge": "The frequency does drop, from ω₀ to ω′, but only by an amount that goes as b² and is negligible for light damping. It also does not keep dropping: ω′ is a constant, not a decaying function." },
            { "label": "the amplitude", "nudge": null },
            { "label": "the time period", "nudge": "The same error as the frequency option in the other direction. Look at Figure 13.3's second chip: the zero crossings stay evenly spaced while the peaks shrink." },
            { "label": "the phase", "nudge": "The phase ω′t + φ steadily INCREASES with time, without limit. It is the argument of the sine and it has to keep growing for the motion to keep repeating." }
          ],
          "correct": 1,
          "solution": "The defining feature of damping is the exponential decay of amplitude, A(t) = A₀e^(−bt/2m). The classic trap is picturing damping as the motion slowing down, when what actually happens is that the swings get smaller at an unchanged rhythm."
        },
        {
          "t": "mcq",
          "q": "The amplitude of a forced oscillator is maximum when the driving frequency is approximately equal to:",
          "opts": [
            { "label": "zero", "nudge": "That is the static limit, where A → F₀/k. It is the SMALLEST amplitude on the low-frequency side, not the largest, and Figure 13.3 draws it as the shared left-hand end of both curves." },
            { "label": "twice the natural frequency", "nudge": "This confuses resonance with harmonics and overtones from the Waves chapter. A driven oscillator has exactly one resonance, at its own natural frequency, not a ladder of them." },
            { "label": "the natural frequency", "nudge": null },
            { "label": "half the natural frequency", "nudge": "Same confusion as the twice option, in the other direction. Nothing special happens to the amplitude at any submultiple of ω₀." }
          ],
          "correct": 2,
          "solution": "Resonance occurs when the drive matches the natural frequency, because that makes the term (ω² − ω₀²)² in the amplitude denominator vanish. Strictly the peak sits at ω_r = √(ω₀² − b²/2m²), which for light damping is ω₀ to within a fraction of a percent."
        },
        {
          "t": "mcq",
          "q": "For a damped oscillator, the amplitude falls to 1/√2 of its initial value. The energy then becomes what fraction of the initial energy?",
          "opts": [
            { "label": "1/2", "nudge": null },
            { "label": "1/√2", "nudge": "This applies the amplitude ratio directly to the energy and forgets to square it. Energy always carries the square of amplitude, in this chapter and everywhere else." },
            { "label": "1/4", "nudge": "That is the answer for an amplitude that fell to 1/2, not to 1/√2. Squaring 1/√2 gives 1/2, and squaring 1/2 gives 1/4." },
            { "label": "1/(2√2)", "nudge": "A cube rather than a square. Nothing in oscillator energy depends on the third power of anything." }
          ],
          "correct": 0,
          "solution": "E ∝ A², so the energy ratio is (1/√2)² = 1/2. Half the energy is gone by the time the amplitude has fallen only to about 71 percent, which is the same 0.707 that Topic 02's K = U point lives at, for the same reason."
        },
        {
          "t": "mcq",
          "q": "A hydraulic door closer is designed so that after release the door returns to the closed position in the shortest possible time without swinging past and oscillating. This is an example of:",
          "opts": [
            { "label": "underdamping", "nudge": "Underdamping would let the door swing past the frame and oscillate before settling, which is exactly the behaviour the design exists to prevent." },
            { "label": "critical damping", "nudge": null },
            { "label": "overdamping", "nudge": "Overdamping also avoids oscillation, so it is a genuine near miss, but it returns the door TOO SLOWLY. The words in the shortest possible time pick out exactly one regime." },
            { "label": "forced oscillation", "nudge": "There is no external periodic driver here at all. The door is released and left alone, which makes this a damping question, not a forcing one." }
          ],
          "correct": 1,
          "solution": "Critical damping, b = 2√(mk), returns a system to equilibrium in the minimum time with no overshoot. The same design goal appears in a galvanometer needle and a car's shock absorbers, and the phrase to listen for is fastest return without oscillating."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing damping noticeably slows the frequency.</b> For light damping ω' ≈ ω<sub>0</sub>. The visible effect is a shrinking amplitude, not a slower oscillation, and the frequency shift goes as <i>b</i><sup>2</sup>, which is usually a fraction of a percent. Figure 13.3's second chip shows evenly spaced zero crossings under a falling envelope.",
            "<b>Confusing the transient with the steady state.</b> In the steady state of a forced oscillation the system vibrates at the <b>driving</b> frequency, never at its own. Its natural-frequency motion belongs only to the brief transient right after the drive is switched on.",
            "<b>Thinking the resonance amplitude is infinite.</b> It is large and finite, because every real system has some damping, and the damping term is the only thing holding the denominator off zero at ω = ω<sub>0</sub>. Only the idealised zero-damping formula blows up.",
            "<b>Forgetting that energy decays twice as fast as amplitude.</b> <i>A</i> ∝ <i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> but <i>E</i> ∝ <i>e</i><sup>−<i>bt</i>/<i>m</i></sup>. Using the amplitude exponent for an energy question halves the answer's exponent and is the commonest slip in this topic.",
            "<b>Mixing up the three damping regimes.</b> CRITICAL damping gives the fastest return with no oscillation; OVERdamping also has no oscillation but is slower; UNDERdamping still oscillates. If a question says fastest and no oscillation in the same breath, only one regime fits."
          ]
        },
        {
          "t": "protip",
          "html": "for any amplitude-falls-to-a-fraction problem, exploit the equal-interval property of exponentials: each fixed ratio drop takes the same time, so you rarely need to solve for <i>b</i> at all. two resonance-sharpness shortcuts are worth memorising as a pair: <i>Q</i> = 2π divided by the fractional energy lost per cycle, and the oscillator rings for about <i>N</i> = <i>Q</i>/2π cycles before its energy falls to 1/<i>e</i>. one more that jee advanced likes: the <b>logarithmic decrement</b> δ = ln(<i>A</i><sub>n</sub>/<i>A</i><sub>n+1</sub>) = <i>bT</i>'/2<i>m</i> is the natural quantity to read off a measured trace, because it is just the log of the ratio of successive peaks, and for light damping δ ≈ π/<i>Q</i>. finally, a distinction worth carrying: the DISPLACEMENT amplitude peaks slightly below ω<sub>0</sub>, but the VELOCITY amplitude, and therefore the power absorbed, peaks exactly at ω<sub>0</sub> for any damping at all. when a question says maximum power or maximum kinetic energy rather than maximum amplitude, the answer is ω<sub>0</sub> with no correction."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "free → damped → forced", "note": "constant A at ω₀ · shrinking A, left alone · steady A at the DRIVING frequency" },
            { "f": "<i>x</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> sin(ω'<i>t</i> + φ), ω' = √(ω<sub>0</sub><sup>2</sup> − (<i>b</i>/2<i>m</i>)<sup>2</sup>)", "note": "ω′ ≈ ω₀ for light damping; b is in kg/s" },
            { "f": "<i>A</i> ∝ <i>e</i><sup>−<i>bt</i>/2<i>m</i></sup> · <i>E</i> ∝ <i>e</i><sup>−<i>bt</i>/<i>m</i></sup>", "note": "energy fades twice as fast, because E ∝ A²" },
            { "f": "<i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/√((ω<sup>2</sup> − ω<sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>b</i>ω/<i>m</i>)<sup>2</sup>)", "note": "ω → 0 gives F₀/k; ω = ω₀ gives F₀/(bω₀)" },
            { "f": "<i>Q</i> = <i>m</i>ω<sub>0</sub>/<i>b</i> = 2π(stored)/(lost per cycle)", "note": "dimensionless; the system rings for about Q/2π cycles" },
            { "f": "under <i>b</i> < 2√(<i>mk</i>) · critical <i>b</i> = 2√(<i>mk</i>) · over <i>b</i> > 2√(<i>mk</i>)", "note": "critical is the fastest return with no overshoot" }
          ],
          "aids": [
            "\"resonance is matching rhythm\", the swing-push picture",
            "\"energy is amplitude squared, so it fades twice as fast\"",
            "\"equal times for equal factors\", the whole of exponential decay"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Reference Circle, and Adding Oscillations",
      "chip": "05 CIRCLE AND PHASORS",
      "kalam": "SHM is the shadow of something going round",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far has treated SHM as algebra, a sine in time. Now take the picture. Imagine a bead glued to the rim of a turntable spinning at a steady angular speed ω, on a circle of radius <i>A</i>. Shine a light from the side and watch the bead's <b>shadow</b> on a wall. As the bead goes round and round at constant speed, its shadow runs back and forth in a straight line, and that shadow is executing <b>exactly</b> simple harmonic motion.<br><br>This is not an analogy. It is a mathematical identity, and the Trigonometry chapter already contains it: a point on a circle of radius <i>A</i> at angle θ from the horizontal has coordinates (<i>A</i> cos θ, <i>A</i> sin θ). Let the angle grow at a steady rate, θ = ω<i>t</i> + φ, and the vertical coordinate becomes <i>A</i> sin(ω<i>t</i> + φ), which is this chapter's displacement, exactly as written in Topic 01. Nothing has been added except motion.<br><br>Suddenly the three constants of SHM have a picture. <b><i>A</i> is the radius</b> of the circle. <b>ω is how fast the bead circulates.</b> And <b>the phase (ω<i>t</i> + φ) is literally the angle</b> the radius has swept, measured anticlockwise from the horizontal. A phasor is nothing more exotic than this rotating radius, and that is why oscillations of the same frequency can be added like vectors."
        },
        {
          "t": "think",
          "html": "the bead moves at constant speed, but its shadow does not. when the bead is at the top or the bottom of the circle, the turning points of the shadow, the bead is moving purely sideways, so the shadow is momentarily still. when the bead crosses the horizontal, the shadow at its centre, the bead is moving purely up or down, so the shadow is sprinting at the full circular speed <i>A</i>ω. constant circular speed, varying shadow speed. that is the whole story of why shm speeds up in the middle and freezes at the ends, drawn in a single picture, and it is where <i>v</i><sub>max</sub> = <i>A</i>ω comes from without any calculus at all."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE REFERENCE CIRCLE",
          "tag": "the projection of uniform circular motion",
          "main": "a point at angle (ω<i>t</i> + φ) on a circle of radius <i>A</i>:<br>across: <i>A</i> cos(ω<i>t</i> + φ) · up: <i>A</i> sin(ω<i>t</i> + φ)<br>this chapter's displacement is the UP projection, <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)",
          "legend": [
            "<i>A</i> = radius of the reference circle, which is the amplitude of the SHM (m)",
            "ω = the bead's constant angular speed, which is the SHM's angular frequency (rad/s)",
            "(ω<i>t</i> + φ) = the swept angle, measured anticlockwise from the horizontal, which is the SHM's phase (rad); <i>t</i> = time (s)"
          ],
          "note": "The two perpendicular projections of the SAME circular motion are two SHMs a quarter cycle apart, which is the reference circle's version of the fact that velocity leads displacement by π/2. Choosing the up projection rather than the across one is what keeps this chapter's sine convention intact."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SHADOW OF UNIFORM CIRCULAR MOTION IS SHM, TAP A LINE",
          "steps": [
            {
              "eq": "a particle moves anticlockwise on a circle of radius <i>A</i> at constant angular speed ω; at time <i>t</i> its radius makes angle (ω<i>t</i> + φ) with the horizontal",
              "why": "Uniform circular motion, nothing more. ω is constant, which is what uniform means, and it is the ONLY assumption the whole argument needs."
            },
            {
              "eq": "its vertical coordinate is <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)",
              "why": "Straight from the Trigonometry chapter's unit circle, scaled by <i>A</i>. This one line is why the reference circle is not a metaphor: the shadow's position IS a sine of a linearly growing angle."
            },
            {
              "eq": "differentiate twice: <i>dx</i>/<i>dt</i> = <i>A</i>ω cos(ω<i>t</i> + φ), then <i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> = −<i>A</i>ω<sup>2</sup> sin(ω<i>t</i> + φ)",
              "why": "The chain rule twice, exactly as in Topic 01. Each differentiation brings down a factor of ω, which is where the square comes from."
            },
            {
              "eq": "recognise the last expression: <i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> = −ω<sup>2</sup><i>x</i>",
              "why": "The ID card of SHM, satisfied exactly. So the shadow performs simple harmonic motion with amplitude equal to the radius and angular frequency equal to the circulation rate."
            },
            {
              "eq": "the correspondence extends to every quantity: circular speed <i>A</i>ω projects to the SHM speed, and centripetal acceleration <i>A</i>ω<sup>2</sup> projects to the SHM acceleration",
              "why": "So <i>v</i><sub>max</sub> = <i>A</i>ω and <i>a</i><sub>max</sub> = <i>A</i>ω<sup>2</sup> are just the circular speed and the centripetal acceleration seen edge-on, which is a far better reason to believe them than having memorised them."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "unitcircle",
          "kicker": "DIAGRAM · TAP A PHASE, WATCH THE SHADOW",
          "mathChips": true,
          "chips": ["ωt + φ = 30°", "ωt + φ = 90°", "ωt + φ = 150°", "ωt + φ = 270°"],
          "captions": [
            "Phase 30°. The rotating radius has swept 30° from the horizontal, and the marked vertical height is sin 30° = 1/2, so the oscillator sits at x = A/2. The bead is climbing, so the shadow is moving in the positive direction. Because the radius is turning at a constant rate, this phase is reached at time t = (π/6)/ω, which is T/12 after the start.",
            "Phase 90°. The radius points straight up, the height is sin 90° = 1, and the oscillator is at its extreme x = A. Here the bead is moving purely horizontally, so its vertical shadow is momentarily at rest: this is the turning point, where speed is zero and acceleration is largest. A quarter of the circle has been swept, so a quarter period has passed.",
            "Phase 150°. The height is sin 150° = 1/2 again, so the oscillator is back at x = A/2, at exactly the same PLACE as in the first frame. But the bead is now descending, so the shadow is moving in the NEGATIVE direction. Same position, different phase, opposite velocity: this is why phase, not position, is what fixes the state of an oscillator, and why v = ±ω√(A² − x²) carries that plus-or-minus.",
            "Phase 270°. The radius points straight down, the height is sin 270° = −1, and the oscillator is at the other extreme x = −A. Three quarters of the circle swept, three quarters of a period gone, and the shadow is again momentarily still. One more quarter turn returns everything to where it began, which is the picture of periodicity itself."
          ],
          "frames": [
            { "angle": 30, "show": ["sin"] },
            { "angle": 90, "show": ["sin"] },
            { "angle": 150, "show": ["sin"] },
            { "angle": 270, "show": ["sin"] }
          ]
        },
        {
          "t": "p",
          "html": "Once SHM is a rotating radius, adding two SHMs of the <b>same frequency</b> becomes a vector problem. Represent each one by its own rotating radius, of length <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub>, with a fixed angle δ between them. Because both turn at the same ω, that angle <b>never changes</b>: the pair rotates rigidly, like a bent stick. So their sum can be found once, by ordinary vector addition, and it too rotates at ω. The resultant is therefore another SHM of the same frequency, with an amplitude given by the law of cosines and a phase given by resolving into components.<br><br>Everything you already know about adding vectors transfers straight across. In phase, δ = 0, and the amplitudes simply add to <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>, the largest possible. Anti-phase, δ = π, and they subtract to |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>|, the smallest. In quadrature, δ = π/2, and Pythagoras gives √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup>). Amplitudes never add arithmetically unless the phase difference happens to be zero, and forgetting that is the topic's most reliable error."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TWO COLLINEAR SHMS OF THE SAME FREQUENCY",
          "tag": "the law of cosines, wearing a physics hat",
          "main": "<i>x</i><sub>1</sub> = <i>A</i><sub>1</sub> sin ω<i>t</i>, <i>x</i><sub>2</sub> = <i>A</i><sub>2</sub> sin(ω<i>t</i> + δ) ⟹ <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ)<br><i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos δ)<br>tan φ = <i>A</i><sub>2</sub> sin δ / (<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos δ)",
          "legend": [
            "<i>A</i><sub>1</sub>, <i>A</i><sub>2</sub> = the two amplitudes (m), δ = the constant phase difference between them (rad)",
            "<i>A</i> = resultant amplitude (m), φ = resultant phase constant (rad), ω = the shared angular frequency (rad/s)",
            "<i>t</i> = time (s); both oscillations must share ω, or the angle between the phasors would not stay fixed and none of this would work"
          ],
          "note": "Three special cases carry most of the marks: δ = 0 gives A₁ + A₂, δ = π gives |A₁ − A₂|, and δ = π/2 gives √(A₁² + A₂²). Between the two extremes the resultant can be anything, so 3 and 4 can combine to give anywhere from 1 to 7."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PHASOR METHOD, TAP A LINE",
          "steps": [
            {
              "eq": "draw <i>x</i><sub>1</sub> as a radius of length <i>A</i><sub>1</sub> and <i>x</i><sub>2</sub> as a radius of length <i>A</i><sub>2</sub>, with a fixed angle δ between them",
              "why": "By the reference circle, each SHM IS such a radius, with the oscillation being its vertical projection. Nothing is being modelled or approximated here."
            },
            {
              "eq": "both rotate at the same ω, so the angle between them never changes",
              "why": "This is the whole reason the method works, and it is exactly why it fails for two DIFFERENT frequencies: then the angle between the phasors grows steadily and the resultant amplitude is no longer constant. That case is beats, later on this page."
            },
            {
              "eq": "a projection of a sum is the sum of the projections, so the resultant SHM is the vertical projection of the vector sum",
              "why": "Projection is a linear operation. This single sentence converts a trigonometric identity problem into a triangle of vectors."
            },
            {
              "eq": "law of cosines on the parallelogram: <i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos δ)",
              "why": "The included angle is δ, and the sign is a PLUS because we are adding the vectors head to tail rather than subtracting them. Setting δ = 0 must give <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>, and it does, which is the check."
            },
            {
              "eq": "resolve to get the direction: tan φ = <i>A</i><sub>2</sub> sin δ / (<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos δ)",
              "why": "The numerator is the component of the second phasor perpendicular to the first, the denominator the total along it. So the resultant's phase is measured from the first oscillation, which is what makes it interpretable."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TWO PERPENDICULAR SHMS, AND THE PATH THEY TRACE",
          "main": "<i>x</i> = <i>A</i> sin ω<i>t</i>, <i>y</i> = <i>B</i> sin(ω<i>t</i> + δ), equal frequencies:<br>δ = 0: the line <i>y</i> = (<i>B</i>/<i>A</i>)<i>x</i> · δ = π: the line <i>y</i> = −(<i>B</i>/<i>A</i>)<i>x</i><br>δ = π/2: the ellipse <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>B</i><sup>2</sup> = 1, a CIRCLE when <i>A</i> = <i>B</i>",
          "legend": [
            "<i>A</i>, <i>B</i> = the amplitudes along the two perpendicular directions (m)",
            "δ = the phase difference between them (rad), ω = the shared angular frequency (rad/s), <i>t</i> = time (s)",
            "unequal frequencies give a Lissajous figure instead, closed whenever the frequency ratio is a ratio of whole numbers"
          ],
          "note": "This is the reference circle read backwards: a circle traced by a particle is nothing but two perpendicular SHMs a quarter cycle apart, which is exactly what the reference-circle theorem said in the first place."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "DIAGRAM · ADDING TWO OSCILLATIONS, THREE WAYS",
          "chips": ["same line, same frequency", "at right angles", "slightly different frequencies"],
          "captions": [
            "Two collinear SHMs of amplitudes 3 and 4 with a phase difference of a quarter cycle, drawn as phasors. Because both rotate at the same rate, the angle between them is frozen and they add exactly like ordinary vectors, head to tail. The resultant here is the hypotenuse of a 3-4-5 triangle, so the amplitude is 5, and its phase relative to the first oscillation is tan⁻¹(4/3) ≈ 53°. Turn the whole rigid triangle at ω and the vertical shadow of the hypotenuse is the resultant SHM.",
            "Two SHMs at right angles instead of along one line, both of amplitude A. With a phase difference of zero the particle simply runs back and forth along the dashed diagonal y = x, because the two coordinates rise and fall together. With a quarter-cycle difference the particle traces the circle, because when x is at its maximum y is at zero and vice versa. Anything between those two gives an ellipse, so the phase difference is what opens the line out into a loop.",
            "Two collinear SHMs of EQUAL amplitude but slightly different frequencies. Now the angle between the phasors is no longer frozen, so the resultant amplitude breathes: the fast carrier oscillation sits inside a slow envelope, drawn dashed, which is 2A cos(Δωt/2). Where the two component oscillations are momentarily in step the amplitude is 2A; where they are momentarily opposed it collapses to zero. Those swellings are BEATS, and there are two of them per envelope cycle, because the envelope is at its largest at both its positive and its negative peaks."
          ],
          "frames": [
            {
              "x": [-1, 6],
              "y": [-1, 5.6],
              "axes": "none",
              "aspect": 0.85,
              "arrows": [
                { "from": [0, 0], "to": [3, 0], "tone": "ink", "label": "A₁ = 3", "at": "mid" },
                { "from": [3, 0], "to": [3, 4], "tone": "ink", "label": "A₂ = 4", "at": "mid" },
                { "from": [0, 0], "to": [3, 4], "tone": "amber", "label": "A = 5", "at": "mid" }
              ],
              "arcs": [{ "at": [0, 0], "r": 1.1, "from": 0, "to": 53.13, "label": "φ", "tone": "amber" }],
              "labels": [{ "x": 4.4, "y": 4.9, "text": "δ = π/2 here" }]
            },
            {
              "x": [-1.35, 1.35],
              "y": [-1.35, 1.35],
              "aspect": 1.094,
              "axisX": "x / A",
              "axisY": "y / A",
              "curves": [
                { "c": "circle", "r": 1 },
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 0, "y": 1.2, "text": "δ = π/2: a circle" },
                { "x": -0.62, "y": -1.18, "text": "δ = 0: a line" }
              ]
            },
            {
              "x": [0, 6.35],
              "y": [-2.35, 2.35],
              "aspect": 0.72,
              "axisX": "t",
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0.0, 0.0], [0.066, 0.766], [0.131, 1.405], [0.197, 1.814], [0.263, 1.931], [0.328, 1.745], [0.394, 1.298], [0.459, 0.674], [0.525, -0.015], [0.591, -0.65], [0.656, -1.132], [0.722, -1.393], [0.787, -1.411], [0.853, -1.208], [0.919, -0.845], [0.984, -0.407], [1.05, 0.017], [1.116, 0.351], [1.181, 0.547], [1.247, 0.593], [1.312, 0.511], [1.378, 0.35], [1.444, 0.175], [1.509, 0.044], [1.575, 0.0], [1.641, 0.057], [1.706, 0.196], [1.772, 0.373], [1.838, 0.527], [1.903, 0.595], [1.969, 0.531], [2.034, 0.315], [2.1, -0.034], [2.166, -0.465], [2.231, -0.898], [2.297, -1.245], [2.362, -1.422], [2.428, -1.374], [2.494, -1.082], [2.559, -0.575], [2.625, 0.073], [2.691, 0.76], [2.756, 1.367], [2.822, 1.785], [2.887, 1.934], [2.953, 1.777], [3.019, 1.334], [3.084, 0.672], [3.15, -0.101], [3.216, -0.857], [3.281, -1.472], [3.347, -1.847], [3.412, -1.924], [3.478, -1.701], [3.544, -1.225], [3.609, -0.587], [3.675, 0.101], [3.741, 0.722], [3.806, 1.179], [3.872, 1.409], [3.938, 1.396], [4.003, 1.169], [4.069, 0.792], [4.134, 0.35], [4.2, -0.066], [4.266, -0.384], [4.331, -0.561], [4.397, -0.589], [4.462, -0.493], [4.528, -0.328], [4.594, -0.155], [4.659, -0.033], [4.725, -0.002], [4.791, -0.071], [4.856, -0.218], [4.922, -0.396], [4.987, -0.542], [5.053, -0.595], [5.119, -0.511], [5.184, -0.277], [5.25, 0.086], [5.316, 0.522], [5.381, 0.949], [5.447, 1.278], [5.512, 1.429], [5.578, 1.35], [5.644, 1.028], [5.709, 0.498], [5.775, -0.161], [5.841, -0.845], [5.906, -1.433], [5.972, -1.82], [6.038, -1.931], [6.103, -1.736], [6.169, -1.26], [6.234, -0.577], [6.3, 0.201]] },
                { "c": "cos", "a": 2, "b": 1, "dash": true, "soft": true },
                { "c": "cos", "a": -2, "b": 1, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 1.55, "y": 2.15, "text": "envelope" },
                { "x": 4.4, "y": -2.1, "text": "one beat" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "That third picture is worth its own name. When two oscillations of <b>slightly different</b> frequencies are added along the same line, the phasor angle between them no longer stays fixed: it creeps round at the difference rate Δω = ω<sub>1</sub> − ω<sub>2</sub>. So the resultant amplitude slowly swells and collapses as the two phasors drift into and out of step. Written out with the sum-to-product identity from the Trigonometry chapter, two equal-amplitude oscillations give<br><br><i>x</i> = 2<i>A</i> cos(Δω<i>t</i>/2) sin(ω<sub>avg</sub><i>t</i>)<br><br>which is a fast <b>carrier</b> at the average frequency inside a slow <b>envelope</b> at half the difference frequency. This is what you hear as <b>beats</b> when two slightly mistuned tabla or two tuning forks sound together. Note the factor everyone drops: the envelope is loudest at BOTH its positive and its negative peaks, so you hear <b>two</b> swellings per envelope cycle, and the beat frequency is Δ<i>f</i> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, not half of it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BEATS, WHEN THE FREQUENCIES DIFFER",
          "tag": "asked by name in JEE Main",
          "main": "equal amplitudes: <i>x</i> = 2<i>A</i> cos((ω<sub>1</sub> − ω<sub>2</sub>)<i>t</i>/2) sin((ω<sub>1</sub> + ω<sub>2</sub>)<i>t</i>/2)<br>beat frequency <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| · carrier frequency = (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2<br>unequal amplitudes: the envelope runs between |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| and <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>",
          "legend": [
            "<i>A</i> = the shared amplitude of the two components (m), <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub> their separate values when unequal (m)",
            "ω<sub>1</sub>, ω<sub>2</sub> = the two angular frequencies (rad/s), <i>f</i><sub>1</sub>, <i>f</i><sub>2</sub> = the corresponding frequencies (Hz), <i>t</i> = time (s)",
            "<i>f</i><sub>beat</sub> = swellings heard per second (Hz), and the beat period is 1/<i>f</i><sub>beat</sub> (s)"
          ],
          "note": "The envelope's own frequency is half the difference, but you hear a swelling at each of its peaks, positive and negative, so beats arrive at the full difference frequency. With unequal amplitudes the sound never falls silent, because the minimum is |A₁ − A₂| rather than zero."
        },
        {
          "t": "proc",
          "title": "The phase stopwatch: any time-between-two-positions question",
          "steps": [
            "Choose the form that makes the start simple. Starting at the mean position moving positive means <i>x</i> = <i>A</i> sin ω<i>t</i> with φ = 0; starting at an extreme is easier as a cosine, but this chapter's convention keeps the sine, so use φ = π/2 instead and stay consistent.",
            "Convert each position into a phase angle by inverting the sine: <i>x</i> = <i>x</i><sub>0</sub> gives θ = sin<sup>−1</sup>(<i>x</i><sub>0</sub>/<i>A</i>) or π − sin<sup>−1</sup>(<i>x</i><sub>0</sub>/<i>A</i>). Two answers, always.",
            "Pick the right one using the DIRECTION of motion, which is the sign of cos θ: moving in the positive direction means cos θ > 0, so θ lies in the first or fourth quadrant, and moving negative puts it in the second or third. This is the step that separates a right answer from a plausible one.",
            "Subtract the two phases along the actual direction of travel, then divide by ω. Time = Δθ/ω, and fraction of a period = Δθ/2π.",
            "Check against the four landmarks from Topic 01: 0 to <i>A</i>/2 is <i>T</i>/12, 0 to <i>A</i>/√2 is <i>T</i>/8, 0 to <i>A</i> is <i>T</i>/4, and <i>A</i>/2 to <i>A</i> is <i>T</i>/6. If your answer contradicts these, you picked the wrong quadrant."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Two SHMs act on a particle along the same line: <i>x</i><sub>1</sub> = 3 sin ω<i>t</i> cm and <i>x</i><sub>2</sub> = 4 sin(ω<i>t</i> + π/2) cm. Find the amplitude and initial phase of the resultant motion.",
          "steps": [
            "The phase difference is δ = π/2, so cos δ = 0 and sin δ = 1. Perpendicular phasors, which means Pythagoras rather than the full law of cosines.",
            "<i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos δ) = √(3<sup>2</sup> + 4<sup>2</sup> + 0) = √25 = 5.0 cm.",
            "tan φ = <i>A</i><sub>2</sub> sin δ/(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos δ) = 4(1)/(3 + 0) = 4/3.",
            "So φ = tan<sup>−1</sup>(4/3) ≈ 53°, measured from the first oscillation. Both quantities are positive, so φ sits in the first quadrant and no ambiguity arises."
          ],
          "ans": "Amplitude 5.0 cm and phase about 53° ahead of the first oscillation. The 3-4-5 right triangle IS the phasor diagram: perpendicular phasors add by Pythagoras, and the figure above draws exactly this."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two collinear SHMs of equal amplitude <i>a</i> and the same frequency differ in phase by 2π/3. Find the amplitude of their resultant.",
          "steps": [
            "The trap is to answer 2<i>a</i>, adding the amplitudes as if they were in phase, or 0, treating any phase difference as cancellation. Neither is right; amplitudes add as VECTORS.",
            "Use the law of cosines with <i>A</i><sub>1</sub> = <i>A</i><sub>2</sub> = <i>a</i> and δ = 2π/3, where cos(2π/3) = −1/2.",
            "<i>A</i> = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> + 2<i>a</i><sup>2</sup>(−1/2)) = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> − <i>a</i><sup>2</sup>) = √(<i>a</i><sup>2</sup>) = <i>a</i>.",
            "Sanity check by picture: two equal phasors 120° apart form two sides of an equilateral triangle, whose closing side is the same length. The answer had to be <i>a</i>."
          ],
          "ans": "The resultant amplitude is <i>a</i>, the same as either component alone. Two oscillations of equal size can combine to give something no bigger than one of them, which is exactly why phase matters."
        },
        {
          "t": "p",
          "html": "The last two examples take the same phasor idea in the two directions that JEE likes. One goes to <b>different</b> frequencies, where the phasor angle unfreezes and the amplitude starts to breathe. The other goes to <b>perpendicular</b> directions, where the two projections no longer add at all but instead act as the two coordinates of a point, and the particle draws a path rather than shuttling along a line."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Find the beat frequency, the time between successive maxima of loudness, and the frequency of the note actually heard.",
          "steps": [
            "Beat frequency is the difference: <i>f</i><sub>beat</sub> = |260 − 256| = 4.0 Hz. Four swellings per second.",
            "Time between successive maxima is the beat period: <i>T</i><sub>beat</sub> = 1/<i>f</i><sub>beat</sub> = 1/4.0 = 0.25 s.",
            "The note heard is the carrier, at the AVERAGE frequency: (256 + 260)/2 = 258 Hz. Your ear hears a single 258 Hz tone whose loudness pulses four times a second.",
            "Check against the algebra: the envelope is cos(Δω<i>t</i>/2) with Δω/2 = 2π(4)/2 = 4π rad/s, so the envelope's own frequency is 2.0 Hz. But the envelope peaks twice per its own cycle, once positive and once negative, giving 4.0 swellings per second, which matches."
          ],
          "ans": "Beat frequency 4.0 Hz, successive maxima 0.25 s apart, note heard at 258 Hz. The commonest slip is to quote the envelope frequency, 2 Hz, as the beat frequency; it is half of it."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A particle is subjected to two perpendicular SHMs of the same amplitude <i>A</i> and the same angular frequency ω, with a phase difference of π/2: <i>x</i> = <i>A</i> sin ω<i>t</i> and <i>y</i> = <i>A</i> sin(ω<i>t</i> + π/2). Identify the path, its size, and the sense in which it is traced.",
          "steps": [
            "Simplify the second: sin(ω<i>t</i> + π/2) = cos ω<i>t</i>, so <i>y</i> = <i>A</i> cos ω<i>t</i>. The quadrature phase difference has turned one sine into a cosine, which is the whole reason the path closes.",
            "Eliminate the time by squaring and adding: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>A</i><sup>2</sup>(sin<sup>2</sup>ω<i>t</i> + cos<sup>2</sup>ω<i>t</i>) = <i>A</i><sup>2</sup>.",
            "That is a circle of radius <i>A</i> centred on the origin. Had the two amplitudes differed, the same elimination would have given <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>B</i><sup>2</sup> = 1, an ellipse.",
            "Find the sense. At <i>t</i> = 0 the particle is at (0, <i>A</i>), the top. Its velocity components are <i>dx</i>/<i>dt</i> = <i>A</i>ω cos ω<i>t</i> = <i>A</i>ω, positive, and <i>dy</i>/<i>dt</i> = −<i>A</i>ω sin ω<i>t</i> = 0. So it is moving to the RIGHT from the top, which is clockwise.",
            "Recognise what has happened: two perpendicular SHMs a quarter cycle apart have reassembled uniform circular motion. This is the reference circle read backwards, and it closes the loop the topic opened with."
          ],
          "ans": "A circle of radius <i>A</i> about the origin, traced clockwise. Change δ to 0 or π and the same pair collapses to a straight line through the origin; anything in between gives an ellipse."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A particle in SHM is described as the projection of uniform circular motion of radius 5.0 cm at angular speed 4.0 rad/s. Write its amplitude, angular frequency and maximum speed.", "a": "The radius IS the amplitude, so <i>A</i> = 5.0 cm; the circulation rate IS the angular frequency, so ω = 4.0 rad/s; and the circular speed IS the maximum shadow speed, <i>v</i><sub>max</sub> = <i>A</i>ω = 20 cm/s = 0.20 m/s." },
            { "q": "[NEET] Two collinear SHMs of amplitudes 3.0 cm and 4.0 cm and the same frequency are combined. Between what limits must the resultant amplitude lie?", "a": "Between |4.0 − 3.0| = 1.0 cm, when they are anti-phase, and 4.0 + 3.0 = 7.0 cm, when they are in phase. Every value in between corresponds to some phase difference, and 5.0 cm is the quadrature case." },
            { "q": "[JEE Main] Two sound waves of frequencies 440 Hz and 446 Hz interfere. Find the beat frequency, the beat period, and the frequency of the resultant note.", "a": "<i>f</i><sub>beat</sub> = 6.0 Hz, <i>T</i><sub>beat</sub> = 1/6.0 ≈ 0.17 s, and the note heard is the average, (440 + 446)/2 = 443 Hz." },
            { "q": "[JEE Main] Two collinear SHMs have amplitudes 10 cm and 6.0 cm and angular frequencies 200π and 208π rad/s. Find the maximum and minimum resultant amplitudes and the beat frequency.", "a": "Maximum = 10 + 6.0 = 16 cm, minimum = |10 − 6.0| = 4.0 cm. Δω = 8π rad/s, so <i>f</i><sub>beat</sub> = Δω/2π = 4.0 Hz. Because the amplitudes differ, the resultant never vanishes: the quietest moment still has 4.0 cm of swing." },
            { "q": "[JEE Advanced] A particle in SHM of amplitude <i>A</i> and period <i>T</i> is at <i>x</i> = −<i>A</i>/2 moving in the positive direction at <i>t</i> = 0. Find the time when it first reaches <i>x</i> = +<i>A</i>/2.", "a": "Write <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ). At <i>t</i> = 0, sin φ = −1/2 with cos φ > 0 for positive motion, so φ = −π/6. Reaching +<i>A</i>/2 while still moving positive needs ω<i>t</i> − π/6 = +π/6, so ω<i>t</i> = π/3 and <i>t</i> = <i>T</i>/6. Check by symmetry: −<i>A</i>/2 to 0 is <i>T</i>/12 and 0 to +<i>A</i>/2 is another <i>T</i>/12." }
          ]
        },
        {
          "t": "mcq",
          "q": "The projection of a particle in uniform circular motion onto a diameter of the circle executes:",
          "opts": [
            { "label": "uniform motion", "nudge": "The shadow's speed varies: it is fastest at the centre and momentarily zero at the two ends. Only the BEAD moves uniformly, and that is exactly the contrast the picture exists to draw." },
            { "label": "non-uniform circular motion", "nudge": "A projection onto a diameter is one-dimensional by construction. Whatever it does, it cannot be circular, because it never leaves the line." },
            { "label": "simple harmonic motion", "nudge": null },
            { "label": "projectile motion", "nudge": "Projectile motion is two-dimensional with a constant downward acceleration. The shadow's acceleration is proportional to its displacement and reverses direction twice per cycle." }
          ],
          "correct": 2,
          "solution": "The projection is A sin(ωt + φ), and differentiating twice gives −ω² times itself, which is the defining equation of SHM. This equivalence is the reference-circle theorem, and it is the reason the phase of an oscillation can be pictured as an angle."
        },
        {
          "t": "mcq",
          "q": "Two collinear SHMs of equal amplitude <i>a</i> and the same frequency combine. For their resultant amplitude to be <i>a</i>√2, their phase difference must be:",
          "opts": [
            { "label": "0", "nudge": "In phase gives the largest possible resultant, 2a, because the two phasors point the same way and the lengths simply add." },
            { "label": "π/4", "nudge": "A tempting middle value, but it gives √(2a² + 2a² cos 45°) = a√(2 + √2) ≈ 1.85a, not a√2 ≈ 1.41a. The cosine has to be exactly zero." },
            { "label": "π/2", "nudge": null },
            { "label": "π", "nudge": "Anti-phase gives |a − a| = 0, total cancellation. This is the smallest resultant, not an intermediate one." }
          ],
          "correct": 2,
          "solution": "A = √(a² + a² + 2a² cos δ) = a√2 requires 2a² + 2a² cos δ = 2a², so cos δ = 0 and δ = π/2. Perpendicular phasors, and the resultant is the diagonal of a square."
        },
        {
          "t": "mcq",
          "q": "Two perpendicular SHMs of equal amplitude and equal frequency, with a phase difference of π/2, make a particle trace a:",
          "opts": [
            { "label": "straight line", "nudge": "That is the δ = 0 or δ = π case, where the two coordinates rise and fall together and the particle shuttles along a diagonal." },
            { "label": "parabola", "nudge": "A parabola is not closed, so it cannot be the path of a bounded periodic motion at all. No combination of equal-frequency perpendicular SHMs produces one." },
            { "label": "circle", "nudge": null },
            { "label": "figure of eight", "nudge": "That needs a 2 to 1 frequency RATIO, which is a Lissajous figure. Equal frequencies can only give a line, an ellipse or a circle." }
          ],
          "correct": 2,
          "solution": "With x = A sin ωt and y = A cos ωt, squaring and adding gives x² + y² = A². Equal amplitudes and quadrature phase reassemble uniform circular motion, which is the reference-circle theorem run backwards."
        },
        {
          "t": "mcq",
          "q": "Two tuning forks of frequencies 300 Hz and 304 Hz are sounded together. The listener hears:",
          "opts": [
            { "label": "a 302 Hz note pulsing 4 times a second", "nudge": null },
            { "label": "a 302 Hz note pulsing 2 times a second", "nudge": "This quotes the ENVELOPE frequency, which is half the difference, as the beat frequency. The envelope peaks twice per its own cycle, positive and negative, so the loudness pulses at the full 4 Hz." },
            { "label": "a 4 Hz note", "nudge": "4 Hz is far below the range of human hearing and is not a note at all here. The difference frequency is the rate at which the loudness changes, not the pitch." },
            { "label": "two separate notes, 300 Hz and 304 Hz", "nudge": "Frequencies this close are not resolved as separate pitches. The ear hears one average pitch whose loudness rises and falls, which is precisely the phenomenon of beats." }
          ],
          "correct": 0,
          "solution": "The carrier is the average, (300 + 304)/2 = 302 Hz, and the beat frequency is the difference, |304 − 300| = 4 Hz. Beats are a loudness effect at the difference frequency riding on a pitch at the average frequency."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding SHM amplitudes arithmetically regardless of phase.</b> Two oscillations of amplitude 3 and 4 give a resultant anywhere between 1 and 7 depending on the phase difference, and only δ = 0 gives 7. Always use the phasor formula, or at least sketch the two phasors before answering.",
            "<b>Forgetting that the reference-circle speed is constant but the SHM speed is not.</b> The bead circulates uniformly; its shadow accelerates and decelerates. The whole value of the picture is that it makes this contrast visible, and reading it the other way loses the point.",
            "<b>Quoting the envelope frequency as the beat frequency.</b> The envelope is cos(Δω<i>t</i>/2), whose frequency is Δ<i>f</i>/2, but each envelope cycle contains TWO loud moments, at its positive and its negative peaks. So beats arrive at the full Δ<i>f</i>, and answers that come out half the expected value are usually this slip.",
            "<b>Applying the phasor method to different frequencies.</b> The whole method rests on the angle between the phasors staying fixed, which needs a shared ω. Different frequencies mean a rotating angle, and that is beats, not a single resultant SHM of constant amplitude.",
            "<b>Mixing the sine and cosine convention when inverting a phase.</b> This topic is where the temptation is strongest, because the source of every reference-circle picture writes cosine for the across-projection. This chapter's displacement is the UP projection, so it stays a sine, and a phase constant lifted from a cosine picture is wrong by π/2."
          ]
        },
        {
          "t": "protip",
          "html": "when two collinear shms turn up, do not reach for the law of cosines first. sketch the two phasors. if the angle between them is 0, π/2 or π you can write the answer down without any algebra at all, and those three cases cover most exam questions. for anything else, notice that the formula is exactly the parallelogram law you already know from vectors, so nothing new is being asked. for perpendicular shms, the shortcut is to convert the phase difference into a shape: 0 or π gives a line, π/2 gives an ellipse and a circle when the amplitudes match, and anything else gives a tilted ellipse. for beats, three numbers answer nearly every question: the carrier is the average of the two frequencies, the beat rate is their difference, and the loudness runs between |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| and <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>. and one general average worth carrying: over a full cycle the mean SPEED of an oscillator is 4<i>A</i>/<i>T</i> = 2<i>A</i>ω/π, while the mean VELOCITY is exactly zero and the root-mean-square speed is <i>A</i>ω/√2."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "SHM = projection of uniform circular motion", "note": "radius → amplitude, circulation rate → ω, swept angle → phase" },
            { "f": "<i>x</i> = <i>A</i> sin(ω<i>t</i> + φ) is the UP projection", "note": "the across projection is A cos(ωt + φ), a quarter cycle apart" },
            { "f": "<i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos δ)", "note": "max A₁ + A₂ at δ = 0, min |A₁ − A₂| at δ = π, √(A₁² + A₂²) at δ = π/2" },
            { "f": "tan φ = <i>A</i><sub>2</sub> sin δ/(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos δ)", "note": "measured from the first oscillation" },
            { "f": "perpendicular, equal frequency: line at δ = 0 or π, ellipse at δ = π/2", "note": "a circle when the amplitudes are equal; unequal frequencies give Lissajous figures" },
            { "f": "beats: carrier (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2, envelope amplitude 2<i>A</i> cos(Δω<i>t</i>/2)", "note": "f_beat = |f₁ − f₂|, twice the envelope frequency" },
            { "f": "cycle averages: mean speed 4<i>A</i>/<i>T</i> = 2<i>A</i>ω/π, mean velocity 0, <i>v</i><sub>rms</sub> = <i>A</i>ω/√2", "note": "speed and velocity are different questions" }
          ],
          "aids": [
            "\"SHM is a shadow\": the bead is uniform, the shadow is not",
            "\"amplitudes are vectors, not numbers\"",
            "\"beats come twice per envelope cycle\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Proving a New System Is SHM",
      "chip": "06 THE UNIVERSAL RECIPE",
      "kalam": "displace it, find the restoring term, read off omega",
      "blocks": [
        {
          "t": "p",
          "html": "Forget formulas for a moment. A motion is simple harmonic <b>if and only if</b> its acceleration is proportional to its displacement and points back toward the centre:<br><br><i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> = −ω<sup>2</sup><i>x</i>, equivalently <i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> + ω<sup>2</sup><i>x</i> = 0<br><br>That is the real, rigorous definition, and it is also a <b>procedure</b>. When an examiner invents a system you have never seen, a sloshing liquid, a bobbing test tube, a body falling through the Earth, a cylinder rolling against a spring, you are not expected to recognise it. You displace it a little, find its net restoring force or write its total energy, and show that the acceleration comes out as −(a positive constant) × the displacement. That constant IS ω<sup>2</sup>, and the period falls out as <i>T</i> = 2π/ω. One method, every system.<br><br>This topic is that one method, run six times. The three systems the syllabus names by name, the U-tube, the floating body and the Earth tunnel, are worked here in full, and every one of them collapses to three lines. Nothing in this topic is a new physical principle: it is Topic 01's ID card, used as a tool instead of admired as a definition."
        },
        {
          "t": "think",
          "html": "there are two doors into the same room and you should know both. the <b>force method</b>: push the system by a small <i>x</i>, work out the net force that appears, and if it comes out as −<i>k</i><sub>eff</sub><i>x</i> you have won. the <b>energy method</b>: write the total energy as ½<i>m</i><sub>eff</sub>(speed)<sup>2</sup> + ½<i>k</i><sub>eff</sub><i>x</i><sup>2</sup>, and since energy is constant you can differentiate it with respect to time, cancel the common speed factor, and the equation of motion appears by itself. use whichever is cleaner for the system in front of you. forces are easier when there is one obvious push; energy is easier when the forces are messy or internal, which is why the energy door is the one that opens for rolling bodies and gas pistons."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DEFINING EQUATION, AND HOW TO READ OMEGA OFF IT",
          "tag": "this is the whole topic in two lines",
          "main": "<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> + ω<sup>2</sup><i>x</i> = 0 ⟹ <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ), <i>T</i> = 2π/ω<br>ω = √(<i>k</i><sub>eff</sub>/<i>m</i><sub>eff</sub>) = √(restoring force per unit displacement ÷ inertia)",
          "legend": [
            "<i>x</i> = the coordinate you chose, measured from equilibrium (m, or rad for an angular coordinate)",
            "ω = angular frequency (rad/s), <i>T</i> = period (s), <i>A</i> = amplitude (same unit as <i>x</i>), φ = phase constant (rad), <i>t</i> = time (s)",
            "<i>k</i><sub>eff</sub> = restoring force per unit displacement (N/m), <i>m</i><sub>eff</sub> = the coefficient of ½(speed)<sup>2</sup> in the kinetic energy (kg)"
          ],
          "note": "The second line is dimensionally forced: [M T⁻²]/[M] = [T⁻²], whose square root is rad/s. If your k_eff over m_eff does not come out per second squared, you have mismatched an inertia with a force, and no amount of algebra later will fix it."
        },
        {
          "t": "proc",
          "title": "The force method, in four lines",
          "steps": [
            "Find the equilibrium and put your origin there. This is not optional bookkeeping: measuring from anywhere else leaves a constant term in the force equation that has to be cancelled by hand, which is exactly the vertical-spring trap from Topic 03.",
            "Displace the system by a small <i>x</i> and work out the NET force that this displacement creates. Only the CHANGE matters; anything that was already balanced at equilibrium cancels itself.",
            "Force the answer into the shape <i>F</i> = −<i>k</i><sub>eff</sub><i>x</i>. If it will not go into that shape, for instance if the leading term is a constant or an <i>x</i><sup>2</sup>, the motion is not simple harmonic and the honest answer says so.",
            "Divide by the moving mass to get <i>a</i> = −(<i>k</i><sub>eff</sub>/<i>m</i>)<i>x</i>, read ω<sup>2</sup> as that bracket, and write <i>T</i> = 2π√(<i>m</i>/<i>k</i><sub>eff</sub>). Then check the units of ω before writing the final line."
          ]
        },
        {
          "t": "proc",
          "title": "The energy method, in five lines",
          "steps": [
            "Choose one coordinate <i>q</i> that describes the whole configuration: the centre's displacement for a translating body, the angle for a pendulum or a rigid body, the level difference for a liquid.",
            "Write the total kinetic energy in terms of the rate of change of that one coordinate, and read off the effective inertia from <i>K</i> = ½<i>m</i><sub>eff</sub>(<i>dq</i>/<i>dt</i>)<sup>2</sup>. For a rolling body this is where the moment of inertia enters, through <i>K</i> = ½<i>mv</i><sup>2</sup> + ½<i>I</i>ω<sub>spin</sub><sup>2</sup> with the rolling condition <i>v</i> = ω<sub>spin</sub><i>R</i>.",
            "Write the total potential energy and expand it for small <i>q</i> until it looks like ½<i>k</i><sub>eff</sub><i>q</i><sup>2</sup>. The linear term always vanishes at equilibrium, which is what equilibrium means, so the quadratic term is the first one that survives.",
            "Set the total energy constant and differentiate with respect to time: <i>m</i><sub>eff</sub>(<i>dq</i>/<i>dt</i>)(<i>d</i><sup>2</sup><i>q</i>/<i>dt</i><sup>2</sup>) + <i>k</i><sub>eff</sub><i>q</i>(<i>dq</i>/<i>dt</i>) = 0. Cancel the common factor <i>dq</i>/<i>dt</i>, which is legitimate because it is not zero except at the instants of turning.",
            "What is left is <i>m</i><sub>eff</sub>(<i>d</i><sup>2</sup><i>q</i>/<i>dt</i><sup>2</sup>) + <i>k</i><sub>eff</sub><i>q</i> = 0, so ω = √(<i>k</i><sub>eff</sub>/<i>m</i><sub>eff</sub>). The one trap here is reading the effective inertia off a kinetic energy without the factor of one half in place: <i>K</i> = (3/4)<i>M</i><i>v</i><sup>2</sup> means <i>m</i><sub>eff</sub> = (3/2)<i>M</i>, not (3/4)<i>M</i>."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE STANDARD SYSTEMS",
          "tag": "same skeleton, different length",
          "main": "liquid in a U-tube: <i>T</i> = 2π√(<i>L</i>/2<i>g</i>)<br>floating body: <i>T</i> = 2π√(<i>h</i>/<i>g</i>)<br>tunnel through the Earth, or a ball in a smooth bowl: <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min",
          "legend": [
            "<i>L</i> = TOTAL length of the liquid column (m), not the length in one arm and not the displacement",
            "<i>h</i> = equilibrium submerged depth of the floating body (m), not its total height",
            "<i>R</i> = radius of the Earth, 6.4 × 10<sup>6</sup> m, or of the bowl (m); <i>g</i> = 9.8 m/s<sup>2</sup>; <i>T</i> = period (s)"
          ],
          "note": "All three are 2π√(length/g), the same skeleton as the simple pendulum. None depends on the density of the liquid, the mass of the body, or how far it was pushed. Learn the family together and you will never mix up which length goes where."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · LIQUID OSCILLATING IN A U-TUBE, TAP A LINE",
          "steps": [
            {
              "eq": "a U-tube of uniform bore area <i>A</i> holds a liquid of density ρ, total column length <i>L</i>. Push the liquid down one arm by <i>y</i>",
              "why": "The liquid is incompressible, so what leaves one arm arrives in the other. The bore is uniform, which is what lets one number <i>y</i> describe the whole configuration."
            },
            {
              "eq": "the level in the other arm rises by <i>y</i>, so the height DIFFERENCE between the two free surfaces is 2<i>y</i>",
              "why": "The factor of two is the single commonest slip in this derivation, and it comes from nowhere clever: one surface went down by <i>y</i> and the other went up by <i>y</i>."
            },
            {
              "eq": "the unbalanced weight is that of a column of height 2<i>y</i>: <i>F</i> = −(2<i>y</i>)<i>A</i>ρ<i>g</i>",
              "why": "Everything below the lower of the two surfaces is balanced and pushes back with equal pressure on each side. Only the excess column of height 2<i>y</i> is left over, and it pulls the liquid back, hence the minus sign."
            },
            {
              "eq": "the moving mass is the WHOLE column, <i>m</i> = <i>LA</i>ρ, so <i>a</i> = <i>F</i>/<i>m</i> = −(2ρ<i>gA</i>/<i>LA</i>ρ)<i>y</i> = −(2<i>g</i>/<i>L</i>)<i>y</i>",
              "why": "Every part of the liquid moves at the same speed, because the bore is uniform and the liquid is incompressible, so the whole column shares one acceleration. Notice that <i>A</i> and ρ both cancel."
            },
            {
              "eq": "so ω<sup>2</sup> = 2<i>g</i>/<i>L</i> and <i>T</i> = 2π√(<i>L</i>/2<i>g</i>)",
              "why": "The period is independent of the LIQUID: mercury, water and oil in the same tube at the same column length all oscillate identically, because both the restoring force and the inertia scale with ρ and it cancels. That surprises people, and examiners know it."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A FLOATING BODY BOBBING UP AND DOWN, TAP A LINE",
          "steps": [
            {
              "eq": "a body of uniform cross-section <i>A</i> floats in a liquid of density ρ with submerged depth <i>h</i>; equilibrium says <i>mg</i> = <i>A</i><i>h</i>ρ<i>g</i>",
              "why": "This is Archimedes from Mechanical Properties of Fluids, quoted and not re-derived: the upthrust equals the weight of the displaced liquid. It also tells us <i>m</i> = <i>A</i><i>h</i>ρ, which is the substitution that makes the answer clean."
            },
            {
              "eq": "push the body down by <i>x</i>. The extra submerged volume is <i>Ax</i>, so the EXTRA buoyant force is <i>F</i> = −<i>A</i>ρ<i>gx</i>, upward",
              "why": "The original upthrust was already balancing the weight, so only the change matters. It is proportional to <i>x</i> and points back up, which is the shape we were hoping for."
            },
            {
              "eq": "divide by the mass: <i>a</i> = −(<i>A</i>ρ<i>g</i>/<i>m</i>)<i>x</i>",
              "why": "This is already the SHM form, so the answer exists. Everything after this is simplification."
            },
            {
              "eq": "substitute <i>m</i> = <i>A</i><i>h</i>ρ from the equilibrium condition: <i>a</i> = −(<i>A</i>ρ<i>g</i>/<i>A</i><i>h</i>ρ)<i>x</i> = −(<i>g</i>/<i>h</i>)<i>x</i>",
              "why": "The area and the density both cancel, and what is left contains only <i>g</i> and the submerged depth. The mass of the body has vanished too."
            },
            {
              "eq": "so ω<sup>2</sup> = <i>g</i>/<i>h</i> and <i>T</i> = 2π√(<i>h</i>/<i>g</i>)",
              "why": "Identical in form to a simple pendulum of length <i>h</i>. A block floating with 1.0 m submerged bobs with the same 2.0 s period as a 1.0 m pendulum swings, which is a coincidence of algebra worth remembering as a memory hook."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · A BODY DROPPED INTO A TUNNEL THROUGH THE EARTH, TAP A LINE",
          "steps": [
            {
              "eq": "from Gravitation: inside a uniform Earth, at distance <i>r</i> from the centre, only the sphere BENEATH you pulls, and the field is <i>g</i>(<i>r</i>) = <i>g</i>(<i>r</i>/<i>R</i>), directed toward the centre",
              "why": "Quoted from the Gravitation chapter, which derives it by the shell theorem and then explicitly flags it as an oscillations problem in disguise. Nothing about that result is re-proved here; this chapter supplies only what that one could not, which is the period."
            },
            {
              "eq": "so the force on a body of mass <i>m</i> in a straight tunnel through the centre is <i>F</i> = −(<i>mg</i>/<i>R</i>)<i>r</i>",
              "why": "Proportional to the displacement from the centre and always pointing home. That is Hooke's law with an effective stiffness of <i>mg</i>/<i>R</i>, and the whole question is answered the moment you see it."
            },
            {
              "eq": "divide by <i>m</i>: <i>a</i> = −(<i>g</i>/<i>R</i>)<i>r</i>, so ω<sup>2</sup> = <i>g</i>/<i>R</i>",
              "why": "The mass cancels, exactly as for the pendulum and for the same reason: gravity supplies the restoring force in proportion to the mass that resists it."
            },
            {
              "eq": "<i>T</i> = 2π√(<i>R</i>/<i>g</i>) = 2π√(6.4 × 10<sup>6</sup>/9.8) = 2π√(6.53 × 10<sup>5</sup>) = 2π(808) ≈ 5.08 × 10<sup>3</sup> s",
              "why": "That is 84.6 minutes for a full round trip, so a one-way fall from one end of the tunnel to the other takes half of it, about 42.3 minutes. Nothing about the answer depends on the mass, and nothing on the amplitude."
            },
            {
              "eq": "the same 2π√(<i>R</i>/<i>g</i>) is the period of a satellite skimming the surface, and of a ball sliding in a smooth bowl of radius <i>R</i>",
              "why": "Three problems that look nothing alike share one number, because all three are governed by a restoring effect proportional to displacement with the same constant. The Gravitation chapter also notes that a tunnel along any straight CHORD gives the same 84.6 minutes, since the field's component along the chord inherits the same proportionality."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.4 · THREE SYSTEMS THAT ARE ALL THE SAME SYSTEM",
          "chips": ["liquid in a U-tube", "a floating cylinder", "a tunnel through the Earth"],
          "captions": [
            "Liquid in a U-tube, pushed down by y in the left arm and therefore up by y in the right one. The dashed line is the common equilibrium level. What restores the liquid is the weight of the unbalanced column between the two surfaces, whose height is 2y and not y: that factor of two is where the 2g in the answer comes from. The whole column, of total length L, has to be accelerated, so the area and the density appear in both the force and the inertia and cancel out, leaving T = 2π√(L/2g) for any liquid at all.",
            "A cylinder floating in a liquid, with h its equilibrium submerged depth. Push it down by a small x and the extra submerged volume produces an extra upward buoyant force proportional to x, drawn here as the upward arrow. Because equilibrium already fixes the body's mass as Ahρ, the area and the density cancel just as they did in the U-tube, and the period comes out as 2π√(h/g): the same form as a simple pendulum of length h. Notice what does NOT appear: the total height of the cylinder, its mass, and the depth of the liquid.",
            "A cross-section of the Earth with a straight tunnel bored along a diameter, and a body a distance r from the centre. Gravitation shows that only the sphere below the body pulls, so the field inside is g(r/R): proportional to the displacement from the centre and always pointing home. That is Hooke's law wearing a planet, so the body oscillates with T = 2π√(R/g) ≈ 84.6 minutes, and a one-way trip to the far side takes about 42 minutes. Nothing depends on the body's mass, and dropping it from halfway down would give exactly the same 42 minutes."
          ],
          "frames": [
            {
              "x": [1.2, 8.8],
              "y": [0.2, 10],
              "axes": "none",
              "aspect": 0.9,
              "polys": [
                { "pts": [[2.2, 5.4], [3.2, 5.4], [3.2, 2.6], [6.8, 2.6], [6.8, 7.4], [7.8, 7.4], [7.8, 1.6], [2.2, 1.6]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[2.2, 9.3], [2.2, 1.6], [7.8, 1.6], [7.8, 9.3]], "tone": "ink" },
                { "pts": [[3.2, 9.3], [3.2, 2.6], [6.8, 2.6], [6.8, 9.3]], "tone": "ink" }
              ],
              "segments": [{ "from": [1.6, 6.4], "to": [8.4, 6.4], "dash": true, "soft": true }],
              "arrows": [
                { "from": [2.7, 6.4], "to": [2.7, 5.5], "tone": "amber", "label": "y", "at": "start" },
                { "from": [7.3, 6.4], "to": [7.3, 7.3], "tone": "amber", "label": "y", "at": "start" }
              ],
              "labels": [
                { "x": 5.0, "y": 8.9, "text": "difference 2y" },
                { "x": 5.0, "y": 0.8, "text": "column length L" }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 10],
              "axes": "none",
              "aspect": 0.85,
              "polys": [
                { "pts": [[0.6, 6.4], [9.4, 6.4], [9.4, 1.2], [0.6, 1.2]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[0.6, 8.6], [0.6, 1.2], [9.4, 1.2], [9.4, 8.6]], "tone": "ink" }
              ],
              "bodies": [{ "kind": "block", "at": [5, 5.4], "w": 2.4, "h": 3.6, "tone": "ink" }],
              "segments": [{ "from": [6.5, 3.6], "to": [6.5, 6.4], "label": "h", "at": "mid" }],
              "arrows": [
                { "from": [3.0, 8.2], "to": [3.0, 7.3], "tone": "amber", "label": "push x", "at": "start" },
                { "from": [8.2, 2.4], "to": [8.2, 4.2], "tone": "green", "label": "extra F", "at": "end" }
              ],
              "labels": [{ "x": 5.0, "y": 0.5, "text": "T = 2π√(h/g)" }]
            },
            {
              "x": [-1.4, 1.4],
              "y": [-1.4, 1.4],
              "axes": "none",
              "aspect": 0.987,
              "curves": [{ "c": "circle", "r": 1.15 }],
              "segments": [{ "from": [-1.15, 0], "to": [1.15, 0], "dash": true }],
              "arrows": [
                { "from": [0, 0], "to": [0, 1.15], "tone": "soft", "label": "R", "at": "mid" },
                { "from": [0.62, 0.12], "to": [0.22, 0.12], "tone": "amber" }
              ],
              "marks": [
                { "x": 0.62, "y": 0, "glyph": "dot", "tone": "ink" },
                { "x": 0, "y": 0, "glyph": "cross", "tone": "soft" }
              ],
              "labels": [
                { "x": 0.42, "y": 0.4, "text": "F = mg r/R" },
                { "x": 0, "y": -1.26, "text": "T = 2π√(R/g)" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The period family: same skeleton, different length",
          "rows": [
            { "k": "Simple pendulum", "v": "<i>T</i> = 2π√(<i>L</i>/<i>g</i>), with <i>L</i> the string length" },
            { "k": "Floating body", "v": "<i>T</i> = 2π√(<i>h</i>/<i>g</i>), with <i>h</i> the equilibrium SUBMERGED depth" },
            { "k": "Tunnel through the Earth", "v": "<i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min, with <i>R</i> the Earth's radius. Half of it, 42.3 min, for a one-way trip" },
            { "k": "Ball in a smooth bowl", "v": "<i>T</i> = 2π√(<i>R</i>/<i>g</i>) for a SLIDING ball, with <i>R</i> the bowl's radius. Rolling adds inertia and lengthens it" },
            { "k": "Liquid in a U-tube", "v": "<i>T</i> = 2π√(<i>L</i>/2<i>g</i>), the odd one out, with its 2 from the doubled level difference and <i>L</i> the TOTAL column" },
            { "k": "Rolling body on a spring", "v": "<i>T</i> = 2π√(<i>m</i><sub>eff</sub>/<i>k</i>) with <i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>. For a solid cylinder that is 1.5<i>m</i>, for a solid sphere 1.4<i>m</i>, for a ring 2<i>m</i>" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A frictionless tunnel is bored straight through the centre of the Earth. A body is released at one end. Show that it performs simple harmonic motion and find the time it takes to reach the far side. Treat the Earth as uniform, with <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>g</i> = 9.8 m/s<sup>2</sup>.",
          "steps": [
            "Quote the interior field from Gravitation: at distance <i>r</i> from the centre, only the sphere beneath the body pulls, and its field is <i>g</i>(<i>r</i>) = <i>g</i>(<i>r</i>/<i>R</i>), directed toward the centre.",
            "So the force on the body is <i>F</i> = −<i>mg</i>(<i>r</i>/<i>R</i>) = −(<i>mg</i>/<i>R</i>)<i>r</i>. It is proportional to the displacement from the centre and always points back to it, which is exactly the SHM test. The motion IS simple harmonic, with <i>k</i><sub>eff</sub> = <i>mg</i>/<i>R</i>.",
            "Divide by <i>m</i>: the acceleration is <i>a</i> = −(<i>g</i>/<i>R</i>)<i>r</i>, so ω<sup>2</sup> = <i>g</i>/<i>R</i> and the mass has cancelled.",
            "<i>T</i> = 2π√(<i>R</i>/<i>g</i>) = 2π√(6.4 × 10<sup>6</sup>/9.8) = 2π√(6.53 × 10<sup>5</sup>) = 2π(808) ≈ 5.08 × 10<sup>3</sup> s = 84.6 min.",
            "A full period is out and back. Falling from one end to the other is HALF of it: <i>t</i> = <i>T</i>/2 = π√(<i>R</i>/<i>g</i>) ≈ 2.54 × 10<sup>3</sup> s ≈ 42.3 min."
          ],
          "ans": "The motion is SHM with <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min, and the one-way trip takes about 42 min. Two checks worth stating: the answer is independent of the body's mass, and it is independent of how far down it was dropped from, which is the amplitude-independence that certifies true SHM."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A wooden cylinder floats upright in water with 16 cm of its length submerged. It is pushed down slightly and released. Find its period of small vertical oscillations. Take <i>g</i> = 9.8 m/s<sup>2</sup>.",
          "steps": [
            "The trap is to start hunting for the mass, the density or the cross-sectional area. None of them is given, and none is needed: for a floating body the period depends only on the equilibrium submerged depth.",
            "<i>T</i> = 2π√(<i>h</i>/<i>g</i>) with <i>h</i> = 16 cm = 0.16 m.",
            "<i>T</i> = 2π√(0.16/9.8) = 2π√(0.01633) = 2π(0.1278) ≈ 0.80 s.",
            "Sanity check by the family: this is a pendulum of length 0.16 m, which is about one sixth of a seconds pendulum, and √(1/6) ≈ 0.41, so the period should be about 0.41 × 2.0 = 0.82 s. It is."
          ],
          "ans": "<i>T</i> ≈ 0.80 s. Memorise the twin: <i>T</i> = 2π√(<i>h</i>/<i>g</i>) for a float has exactly the same form as <i>T</i> = 2π√(<i>L</i>/<i>g</i>) for a pendulum, with the submerged depth playing the part of the string."
        },
        {
          "t": "p",
          "html": "The last two examples are the two hardest shapes this method takes. One is a system where the moving mass is not a single block but a whole column of fluid, and the geometry supplies a factor of two that is very easy to lose. The other is a system where the kinetic energy has <b>two</b> pieces, translation and rotation, so the effective inertia is larger than the mass and the energy door is the only comfortable way in. In both cases the recipe is unchanged: displace, find the restoring term, read off ω."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A U-tube contains mercury. The total length of the mercury column is 1.0 m. The mercury is displaced slightly and released. Find the period of oscillation. Take <i>g</i> = 9.8 m/s<sup>2</sup>.",
          "steps": [
            "Identify the length correctly. <i>L</i> is the TOTAL length of the liquid column, counting both arms and the bend, not the length in one arm and not the displacement. Here <i>L</i> = 1.0 m.",
            "<i>T</i> = 2π√(<i>L</i>/2<i>g</i>), where the 2 comes from the level difference being 2<i>y</i> when one arm falls by <i>y</i>.",
            "<i>T</i> = 2π√(1.0/(2 × 9.8)) = 2π√(1.0/19.6) = 2π√(0.05102) = 2π(0.2259) ≈ 1.42 s.",
            "Note what never entered: the density of mercury, 13.6 × 10<sup>3</sup> kg/m<sup>3</sup>, and the bore of the tube. Fill the same tube with water or with oil to the same column length and the period is identical, because ρ and <i>A</i> appear in both the restoring force and the inertia and cancel."
          ],
          "ans": "<i>T</i> ≈ 1.4 s, independent of which liquid fills the tube. If your answer changed when you swapped mercury for water, you used ρ on only one side of Newton's second law."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A solid cylinder of mass <i>M</i> and radius <i>R</i> rolls without slipping on a horizontal surface, with a spring of constant <i>k</i> attached to its axle and anchored to a wall. Find the period of small oscillations.",
          "steps": [
            "Use the energy method, because the friction that enforces rolling does no work and would otherwise have to be carried as an unknown through a force calculation. Let <i>x</i> be the displacement of the centre from the spring's relaxed position, and write <i>v</i> = <i>dx</i>/<i>dt</i>.",
            "Kinetic energy has two parts. Rolling without slipping gives the spin rate ω<sub>spin</sub> = <i>v</i>/<i>R</i>, and a solid cylinder has <i>I</i> = <i>MR</i><sup>2</sup>/2 about its axis, from Rotational Motion. So <i>K</i> = ½<i>Mv</i><sup>2</sup> + ½(<i>MR</i><sup>2</sup>/2)(<i>v</i>/<i>R</i>)<sup>2</sup> = ½<i>Mv</i><sup>2</sup> + ¼<i>Mv</i><sup>2</sup> = (3/4)<i>Mv</i><sup>2</sup>.",
            "Read the effective inertia CAREFULLY. <i>K</i> = ½<i>m</i><sub>eff</sub><i>v</i><sup>2</sup> means <i>m</i><sub>eff</sub> = (3/2)<i>M</i>, not (3/4)<i>M</i>. Dropping the factor of one half here is the single commonest error in every rolling-oscillator problem.",
            "Potential energy is the spring's alone, <i>U</i> = ½<i>kx</i><sup>2</sup>, since gravity does no work on a body rolling along a level floor.",
            "So ω<sup>2</sup> = <i>k</i>/<i>m</i><sub>eff</sub> = 2<i>k</i>/3<i>M</i> and <i>T</i> = 2π√(3<i>M</i>/2<i>k</i>).",
            "Check the direction of the answer. If the cylinder slid without friction there would be no rotation, <i>m</i><sub>eff</sub> would be <i>M</i>, and the period would be 2π√(<i>M</i>/<i>k</i>). Rolling adds rotational inertia, so the system is dynamically heavier and the period must be LONGER, by a factor √(3/2) ≈ 1.22. It is."
          ],
          "ans": "<i>T</i> = 2π√(3<i>M</i>/2<i>k</i>). The general rule worth carrying: for a body rolling without slipping, <i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>, which is 1.5<i>m</i> for a cylinder or disc, 1.4<i>m</i> for a solid sphere and 2<i>m</i> for a ring."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A test tube loaded with lead floats vertically in water with 12 cm submerged. Find its period of small vertical oscillation. Take <i>g</i> = 9.8 m/s<sup>2</sup>.", "a": "<i>T</i> = 2π√(<i>h</i>/<i>g</i>) = 2π√(0.12/9.8) = 2π√(0.01224) = 2π(0.1107) ≈ 0.70 s. The lead, the glass and the tube's diameter are all irrelevant." },
            { "q": "[NEET] Estimate the time a stone takes to fall from one end of a straight smooth tunnel bored through the centre of the Earth to the far end. Take <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>g</i> = 9.8 m/s<sup>2</sup>.", "a": "One-way is half a period: <i>t</i> = π√(<i>R</i>/<i>g</i>) = π√(6.53 × 10<sup>5</sup>) = π(808) ≈ 2.54 × 10<sup>3</sup> s ≈ 42 min. The full there-and-back period is about 85 min." },
            { "q": "[JEE Main] A U-tube contains water with a total column length of 40 cm. Find the period of oscillation of the water. Take <i>g</i> = 9.8 m/s<sup>2</sup>.", "a": "<i>T</i> = 2π√(<i>L</i>/2<i>g</i>) = 2π√(0.40/19.6) = 2π√(0.02041) = 2π(0.1429) ≈ 0.90 s." },
            { "q": "[JEE Main] A particle of mass <i>m</i> moves in a potential <i>U</i>(<i>x</i>) = ½<i>kx</i><sup>2</sup> + ¼α<i>x</i><sup>4</sup> with α > 0. Find the angular frequency of small oscillations about <i>x</i> = 0.", "a": "For small oscillations only the curvature at the bottom matters. The second derivative is <i>U</i>'' = <i>k</i> + 3α<i>x</i><sup>2</sup>, which at <i>x</i> = 0 is just <i>k</i>. So ω = √(<i>k</i>/<i>m</i>) and the quartic term does not affect the small-oscillation frequency at all. It is a distractor parameter, and JEE Advanced sets exactly this trap." },
            { "q": "[JEE Advanced] A solid sphere of radius <i>R</i> rolls without slipping inside a fixed spherical bowl of radius 10<i>R</i>. Find the period of small oscillations.", "a": "The centre travels on a circle of radius 10<i>R</i> − <i>R</i> = 9<i>R</i>. With <i>x</i> the arc length of the centre, no slip gives the spin rate <i>v</i>/<i>R</i>, so <i>K</i> = ½<i>Mv</i><sup>2</sup> + ½(2<i>MR</i><sup>2</sup>/5)(<i>v</i>/<i>R</i>)<sup>2</sup> = (7/10)<i>Mv</i><sup>2</sup>, giving <i>m</i><sub>eff</sub> = (7/5)<i>M</i>. Height gain is 9<i>R</i>(1 − cos θ) ≈ ½(9<i>R</i>)θ<sup>2</sup>, so with <i>x</i> = 9<i>R</i>θ the potential is ½<i>Mgx</i><sup>2</sup>/(9<i>R</i>) and <i>k</i><sub>eff</sub> = <i>Mg</i>/(9<i>R</i>). Hence ω<sup>2</sup> = 5<i>g</i>/(63<i>R</i>) and <b><i>T</i> = 2π√(63<i>R</i>/5<i>g</i>)</b>. Check it against the general bowl result <i>T</i> = 2π√(7(<i>R</i><sub>bowl</sub> − <i>r</i>)/5<i>g</i>) with <i>R</i><sub>bowl</sub> − <i>r</i> = 9<i>R</i>: the two agree. The commonest slip is to read <i>m</i><sub>eff</sub> as (7/10)<i>M</i> straight off the kinetic energy, forgetting the ½ that belongs outside it, which makes the answer too short by a factor √2." }
          ]
        },
        {
          "t": "mcq",
          "q": "Which of these does <b>not</b> execute simple harmonic motion for small displacements?",
          "opts": [
            { "label": "liquid oscillating in a U-tube", "nudge": "It does: the restoring force is the weight of the unbalanced 2y column, which is proportional to the displacement, giving T = 2π√(L/2g)." },
            { "label": "a ball rolling back and forth at the bottom of a smooth bowl", "nudge": "It does, for small swings: the geometry is that of a pendulum of length equal to the bowl's radius, with the rolling merely adding effective inertia." },
            { "label": "a body dropped into a tunnel through the Earth", "nudge": "It does, and famously: the interior field g(r/R) is exactly proportional to the displacement from the centre, so the tunnel is a spring made of planet." },
            { "label": "a ball bouncing elastically off the floor", "nudge": null }
          ],
          "correct": 3,
          "solution": "Between bounces the ball has a CONSTANT downward acceleration g, which is not proportional to its displacement and does not reverse with it. The motion is perfectly periodic and is not simple harmonic, which is exactly the distinction Topic 01 opened with."
        },
        {
          "t": "mcq",
          "q": "A liquid column of total length <i>L</i> oscillates in a uniform U-tube. Its period is:",
          "opts": [
            { "label": "2π√(<i>L</i>/<i>g</i>)", "nudge": "This is the pendulum formula borrowed unchanged, and it misses the factor of two that comes from the level DIFFERENCE being 2y when one arm falls by y." },
            { "label": "2π√(<i>L</i>/2<i>g</i>)", "nudge": null },
            { "label": "2π√(2<i>L</i>/<i>g</i>)", "nudge": "The two has landed on the wrong side of the fraction. Doubling the restoring force must SHORTEN the period, not lengthen it, so the 2 belongs under L." },
            { "label": "it depends on the density of the liquid", "nudge": "Density appears in both the restoring weight and the inertia of the moving column, so it cancels exactly. Mercury and water in the same tube at the same column length oscillate identically." }
          ],
          "correct": 1,
          "solution": "One arm falls by y and the other rises by y, so the unbalanced column has height 2y and the restoring force is 2ρgAy. The moving mass is the whole column, ρAL, giving ω² = 2g/L. Both ρ and A cancel."
        },
        {
          "t": "mcq",
          "q": "A cylinder floats upright in a liquid with a submerged depth <i>h</i>. Pushed down slightly, it oscillates with period:",
          "opts": [
            { "label": "2π√(<i>h</i>/<i>g</i>)", "nudge": null },
            { "label": "2π√(<i>H</i>/<i>g</i>) where <i>H</i> is the cylinder's full height", "nudge": "The period uses the equilibrium SUBMERGED depth, not the total length of the object. A tall cylinder floating with only a centimetre in the water bobs very fast indeed." },
            { "label": "2π√(<i>h</i>ρ/<i>g</i>) with ρ the liquid's density", "nudge": "Density cancels: it appears in the extra buoyant force and again in the equilibrium condition that fixes the body's mass. A dimensional check kills this option instantly, since ρ under a square root leaves the answer in the wrong units." },
            { "label": "2π√(<i>m</i>/<i>g</i>) with <i>m</i> the cylinder's mass", "nudge": "Mass over acceleration is not a time squared, so this cannot be a period at all. It is worth doing that check on every option before choosing." }
          ],
          "correct": 0,
          "solution": "Pushing down by x adds an extra upthrust Aρgx, and the equilibrium condition m = Ahρ makes A and ρ cancel, leaving a = −(g/h)x. The result is identical in form to a simple pendulum of length h."
        },
        {
          "t": "mcq",
          "q": "A body dropped into a straight frictionless tunnel through the centre of the Earth reaches the far side in about 42 minutes. The period of a satellite in a circular orbit skimming the Earth's surface is about:",
          "opts": [
            { "label": "42 minutes", "nudge": "This confuses the one-way tunnel trip with a full period. The tunnel body takes 42 minutes to go halfway through its own cycle, from one extreme to the other." },
            { "label": "84 minutes", "nudge": null },
            { "label": "21 minutes", "nudge": "Halving again for no reason. Nothing in either problem introduces a further factor of two." },
            { "label": "it depends on the satellite's mass", "nudge": "The mass cancels in orbital motion exactly as it cancels in the tunnel, and for the same reason: gravity supplies force in proportion to the mass that resists it." }
          ],
          "correct": 1,
          "solution": "Both are 2π√(R/g) ≈ 84.6 min, as Gravitation shows: a surface-skimming orbit needs g = v²/R, and the tunnel oscillation has ω² = g/R. The 42 minutes quoted is half a period, the one-way trip. Three quite different problems, one number."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the wrong length in the U-tube formula.</b> <i>L</i> is the TOTAL length of the liquid column, not the length in one arm and certainly not the displacement. And the level difference is 2<i>y</i>, not <i>y</i>, which is where the 2<i>g</i> comes from: losing it makes every answer too long by √2.",
            "<b>Putting the floating body's full length into its period.</b> The formula uses <i>h</i>, the equilibrium SUBMERGED depth. A long cylinder floating with only a little of itself in the water has a short period, not a long one.",
            "<b>Reading the effective inertia off a kinetic energy without the factor of one half.</b> <i>K</i> = (3/4)<i>Mv</i><sup>2</sup> means <i>m</i><sub>eff</sub> = (3/2)<i>M</i>. This single slip is the commonest error in every rolling-oscillator problem, it makes the period too short by √2, and it is what a printed answer in this book's own addendum got wrong for a sphere in a bowl.",
            "<b>Measuring the displacement from the wrong origin.</b> The coordinate must start at EQUILIBRIUM. Measure a vertical spring from its natural length, or a floating body from its unsubmerged position, and a constant term survives in the force equation that has no business being there.",
            "<b>Expecting the answer to depend on the density, the area or the mass.</b> In all three standard systems those quantities appear in both the restoring force and the inertia and cancel. If yours has not cancelled, you have applied it to only one side of Newton's second law.",
            "<b>Assuming any restoring force certifies SHM.</b> The force must be LINEAR in the displacement. A restoring force proportional to <i>x</i><sup>3</sup>, or one of constant magnitude like the bouncing ball's weight, gives periodic motion whose period depends on the amplitude, and that dependence is the tell."
          ]
        },
        {
          "t": "protip",
          "html": "when you meet an unfamiliar oscillating system, do not look for a memorised formula. run the recipe: displace by a small <i>x</i>, find the net restoring force or write the energy and differentiate, force the result into <i>a</i> = −ω<sup>2</sup><i>x</i>, and read off ω. three of the hardest-looking jee systems collapse to one line each this way. two extra tools finish the rest. first, the <b>potential-energy curve test</b>: if a particle of mass <i>m</i> sits in a potential <i>U</i>(<i>x</i>) with a stable minimum, then ω = √(<i>U</i>''(0)/<i>m</i>), no force calculation needed at all, and any higher-order term in <i>U</i> is a distractor because it contributes nothing to the curvature at the bottom. second, for rolling bodies use <i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup> straight off, which is 1.5<i>m</i> for a disc or cylinder, 1.4<i>m</i> for a solid sphere, 1.67<i>m</i> for a hollow sphere and 2<i>m</i> for a ring. and keep the period family on a sticky note: √(<i>L</i>/<i>g</i>) for the pendulum, √(<i>h</i>/<i>g</i>) for the float, √(<i>R</i>/<i>g</i>) for the planet, √(<i>L</i>/2<i>g</i>) for the u-tube. same skeleton, four lengths, and only one of them carries a 2."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>d</i><sup>2</sup><i>x</i>/<i>dt</i><sup>2</sup> + ω<sup>2</sup><i>x</i> = 0", "note": "the definition and the test; prove any system is SHM by producing this line" },
            { "f": "ω = √(<i>k</i><sub>eff</sub>/<i>m</i><sub>eff</sub>)", "note": "restoring force per unit displacement, over the coefficient of ½(speed)²" },
            { "f": "energy method: <i>dE</i>/<i>dt</i> = 0, cancel the speed factor", "note": "the door that opens for rolling bodies and gas pistons" },
            { "f": "U-tube: <i>T</i> = 2π√(<i>L</i>/2<i>g</i>)", "note": "L is the TOTAL column; the 2 comes from the doubled level difference; no ρ, no A" },
            { "f": "float: <i>T</i> = 2π√(<i>h</i>/<i>g</i>)", "note": "h is the SUBMERGED depth, not the body's height; no mass, no density" },
            { "f": "tunnel or bowl: <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min", "note": "42.3 min one way; the same number as a surface-skimming satellite" },
            { "f": "potential well: ω = √(<i>U</i>''(0)/<i>m</i>) · rolling: <i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>", "note": "curvature at the bottom is all that matters; disc 1.5m, sphere 1.4m, ring 2m" }
          ],
          "aids": [
            "\"one test rules them all\": acceleration equals minus omega squared times displacement",
            "\"pendulum, float, planet\": √(L/g), √(h/g), √(R/g)",
            "\"the half lives outside\": K = (3/4)Mv² means m_eff = (3/2)M"
          ]
        }
      ]
    }
  ]
};

export default phy11Oscillations;
