/**
 * Chapter 09 · Mechanical Properties of Fluids. Physics, Class 11.
 *
 * Restructured from pages 591 to 665 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS FROM SEVEN SOURCE SUBTOPICS, and exactly one merge. The source
 * names seven: 01 Fluid Pressure and Pascal's Law, 02 Buoyancy and Floatation,
 * 03 Fluids in Accelerated and Rotating Frames, 04 Fluid Dynamics and
 * Bernoulli's Theorem, 05 Viscosity and Terminal Velocity, 06 Poiseuille's Law
 * and Viscous Flow Resistance, 07 Surface Tension and Capillarity. The reader's
 * own gate (scripts/validate-chapters.mjs, line 89) rejects any chapter outside
 * four to six topics, so seven could not ship. Source subtopics 05 and 06 are
 * the merge, and they are the only pair that merges honestly: both are the
 * single quantity eta, subtopic 06 opens by saying so in its own words ("In
 * Subtopic 04 we watched a single sphere fall through a still fluid... Now flip
 * the picture"), its every formula is the viscous-resistance consequence of
 * subtopic 05's definition of eta, and neither has enough material to stand as
 * a topic of this chapter's density on its own. Nothing else was merged and
 * nothing was split. Topic 05 below is correspondingly the largest topic, which
 * is what an honest merge looks like: the material is all still here.
 *
 * THE ROUND 2 ADDENDUM (pages 656 to 665: A hydrostatic force on plane surfaces
 * and centre of pressure, B hydrostatic force on curved surfaces, C metacentric
 * height, D viscous flow in non-circular ducts) IS NOT A TOPIC, per the brief.
 * Every line drawn from it below sits in a `protip`, a `mistakes` item or the
 * hardest `ex` in its group: A into Topic 01's force-on-a-wall material, B into
 * Topic 01's protip, C into Topic 02's stability material, D into Topic 05's
 * Poiseuille material. No `formula`, `defgrid`, `deriv` or `proc` block below is
 * sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 977 to 981, in full; entries for Chapters 1, 2,
 * 4, 6, 8, 9 and 11). EXACTLY ONE ENTRY TOUCHES THIS RANGE, and it changes no
 * number this chapter teaches:
 *
 *   - Page 980, "Chapter 9: Mechanical Properties of Fluids. Capillary-rise MCQ
 *     solution, part labels shifted relative to the question." The source's
 *     Subtopic 07 Example 6 poses parts (a) and (b) but labels its two answers
 *     "(b) For two plates..." and "(c) The smaller bubble...". Confirmed
 *     present in the extraction (page 653). Purely a renumbering: both physics
 *     results, h = 2S/(rho g d) between parallel plates and R = ab/(a - b) for
 *     the common film of two coalesced bubbles, are correct as printed and are
 *     independently re-derived below. Topic 06's `ex` and `protip` carry them
 *     with the labels in the right order, so the defect cannot propagate.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 591 to 665 was recomputed independently. Almost all match; three
 * printed answers do not, and one addendum problem is stated inconsistently:
 *
 *   1. Subtopic 05, Practice 3 (page 637): steel ball r = 0.50 mm, rho_b = 8000
 *      kg/m3, oil rho_f = 900 kg/m3, eta = 0.40 Pa s, g = 10 m/s2. Printed
 *      answer 4.9 x 10^-2 m/s. Working: v_t = (2/9) r^2 (rho_b - rho_f) g / eta
 *      = (2/9)(2.5 x 10^-7)(7100)(10)/0.40 = (2/9)(1.775 x 10^-2/0.40)
 *      = (2/9)(4.4375 x 10^-2) = 9.9 x 10^-3 m/s. The printed value is exactly
 *      five times too large; it is what eta = 0.08 Pa s would give, so the
 *      printed viscosity and the printed answer disagree. CORRECT ANSWER
 *      9.9 x 10^-3 m/s. This chapter's Topic 05 practice item 3 is authored
 *      fresh with its own numbers and its own recomputed answer.
 *   2. Addendum A, Practice 1 (page 658): vertical circular porthole, diameter
 *      0.50 m, centre 3.0 m deep. The force, 5.89 x 10^3 N, is right. The
 *      printed centre of pressure, h_CP = 3.0104 m, is not. Working: for a
 *      vertical circle, I_G = pi R^4 / 4 and A = pi R^2, so
 *      h_CP = h_bar + I_G/(A h_bar) = h_bar + R^2/(4 h_bar)
 *      = 3.0 + 0.0625/12 = 3.0052 m. The printed 3.0104 m is h_bar +
 *      R^2/(2 h_bar), i.e. computed with the POLAR second moment pi R^4 / 2
 *      instead of the diametral one. CORRECT ANSWER 3.005 m.
 *   3. Addendum A, Practice 3 (page 658): vertical triangular gate, base 2.0 m
 *      at the free surface, height 3.0 m, vertex down, hinged along the base.
 *      Printed answer M = 3.0 x 10^4 N m. That number is the FORCE, not the
 *      moment. Working: width at depth y is b(1 - y/H) = 2(1 - y/3), so
 *      F = rho g INT 0..3 y . 2(1 - y/3) dy = 10^4 [y^2 - 2y^3/9] = 3.0 x 10^4
 *      N, and M = rho g INT 0..3 y^2 . 2(1 - y/3) dy = 10^4 [2y^3/3 - y^4/6]
 *      = 10^4 (18 - 13.5) = 4.5 x 10^4 N m. Equivalently M = F y_CP with
 *      y_CP = y_bar + I_G/(A y_bar) = 1 + 1.5/3 = 1.5 m. CORRECT ANSWER
 *      4.5 x 10^4 N m.
 *   4. Addendum C, Practice 1 (page 663): a uniform cylindrical buoy, diameter
 *      1.0 m, height 2.0 m, mass 400 kg, G at the geometric centre, floating
 *      vertically in sea water. Printed answer GM = 0.076 m, "stable". Working:
 *      draft d = m/(rho A) = 400/(1025 x 0.7854) = 0.497 m, so B sits 0.249 m
 *      above the keel and G sits 1.0 m above it, giving BG = 0.751 m; the
 *      waterplane is a circle of radius 0.5 m, so I = pi R^4/4 = 0.0491 m^4 and
 *      V_sub = 0.390 m^3, giving BM = I/V_sub = 0.126 m. Hence
 *      GM = BM - BG = 0.126 - 0.751 = -0.63 m, which is NEGATIVE: this buoy is
 *      unstable upright and would float on its side. A slender vertical
 *      cylinder with G at mid-height is the standard textbook example of an
 *      UNSTABLE float, so the printed sign is wrong as well as the magnitude.
 *      CORRECT ANSWER GM = -0.63 m, unstable.
 *   5. Addendum C, Practice 2 (page 663) is stated inconsistently rather than
 *      wrong: the problem says "fresh water" but the printed draft, 3.05 m, is
 *      m/(rho L B) evaluated with SEA water, 1025 kg/m3. With the stated fresh
 *      water, d = 5.0 x 10^5/(1000 x 20 x 8) = 3.125 m, BG = 2.5 - 1.5625
 *      = 0.9375 m, BM = (20 x 8^3/12)/(160 x 3.125) = 853.3/500 = 1.707 m and
 *      GM = 0.769 m (still stable). Two further addendum practice answers
 *      (A.2, the inclined gate, and B.2, the parabolic gate's horizontal
 *      component) could not be reproduced from the stated data under any
 *      reading of the geometry I could construct; the geometry as printed is
 *      genuinely ambiguous, so they are reported as unverifiable rather than
 *      claimed as errors.
 *
 *   None of items 2 to 5 reaches a student through this chapter: all four sit in
 *   the addendum, which is not a topic, and the two addendum ideas that do
 *   appear below (F = rho g h_bar A for a plane wall in Topic 01, and the
 *   metacentre in Topic 02) are stated qualitatively and carry their own
 *   independently computed numbers.
 *
 * SOURCE DAMAGE. The brief's four named patterns behave differently in this
 * range, and every passage below was re-authored from context, never
 * transcribed:
 *
 *   - GREEK LETTERS DO NOT VANISH HERE. They survive extraction, but as
 *     MATHEMATICAL ALPHANUMERIC glyphs (U+1D400 to U+1D7FF), which the app's
 *     faces cannot draw and the validator rejects: 297 instances of math-italic
 *     rho, 127 of eta, 68 of theta, plus 51 distinct math-italic Latin letters
 *     (P, g, A, F, d, m, r, H, x, f, V, W, b and the rest). Copying any run of
 *     source symbol text verbatim would have shipped blank boxes. Every symbol
 *     below is retyped as an ordinary character inside <i> tags, and every
 *     Greek letter as its plain Unicode form.
 *   - MULTIPLICATION SIGNS DIE, and not silently: 38 instances of the token
 *     "\nN" stand for the times sign, e.g. page 594's "1 atm = 1.013 \nN 10 5
 *     Pa" is 1.013 x 10^5 Pa, and page 608's "1 \nN 10 -4 \nN 15 \nN 750" is
 *     1 x 10^-4 x 15 x 750. Four sibling tokens do the same for four more
 *     glyphs: "\n7" is a minus sign (12 instances, e.g. page 605's "1 \n7
 *     rho_b/rho_f" is 1 - rho_b/rho_f, and page 655's "R = ab/(a \n7 b)"),
 *     "\nK" is the degree sign (8 instances, all in Topic 06's angle-of-contact
 *     MCQ and pitfalls, e.g. "135 \nK" is 135 degrees), "\nC" is the ratio
 *     colon (4 instances, e.g. page 651's "The ratio is 2 \nC 1"), "\n;" is the
 *     plus-or-minus sign (2 instances, page 614's "g_eff = g \n; a"), and
 *     "\tN" and "\nA" mark an underbrace and a centred dot. This is the same
 *     defect family the physics pilot logged as "a minus sign arriving as the
 *     literal token \n7", now in five more flavours.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     density (10 3 kg m -3), every viscosity (1.0 x 10 -3 Pa s), every area
 *     (0.80 m 2), every radius-to-the-fourth (r 4) and every dimensional
 *     formula ([M L -1 T -2]) breaks apart. Recomputing every worked example
 *     independently (see CORRECTIONS above) was the check that these were
 *     rebuilt correctly.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances actually
 *     used or paraphrased below: "thebarometer" and "onmanometers" (p.592),
 *     "squeezed inwardfrom all directions" (p.592), "spreads undiminishedto
 *     every single point" (p.593), "wherethe pressure at the base isidenticalin
 *     all three" (p.592), "depends only on the depthbelow the free surface"
 *     (p.592), "buoyancy depends on the displaced fluid, not on the body" run
 *     together as "Buoyancy depends on the displacedfluid" (p.603), "the body
 *     sinks only until the displaced fluid weighs exactly as much" with
 *     "floatsfully submerged" and "floats partially submerged" (p.604),
 *     "thefluid would simply slide and flow" (p.592), "the water lags
 *     behind... it piles up at the backof the tank" (p.613), "where a fluid
 *     moves fast, its pressure is low" run together as "lower pressure than the
 *     still air" (p.622), "narrow the pipe and the fluid speeds up" as
 *     "It tells us proportional to1/A" (p.624), "each layer exerts a tangential
 *     dragging force" as "the constant is thecoefficient of viscosity" (p.631),
 *     "liquid viscositydecreaseswith rising temperature" (p.632),
 *     "halving a tube's radius cuts the flow to one-sixteenth" as
 *     "cuts theflow to one-sixteenth" (p.639), "the surface is squeezed taut"
 *     as "To create moresurface" (p.647), "highly soluble impurities raise it"
 *     as "Impurities matter:highly soluble" (p.648), and "waternever
 *     overflowsfrom a short tube" (p.653).
 *   - NO ASCII-SHIFTED HEADING RUN (the "+29" pattern) appears anywhere in
 *     pages 591 to 665. Every heading in this range extracted as readable
 *     English. Page numbers were still read from the page foot, as instructed.
 *   - LEAKED LATEX. Three runs arrive as raw markup rather than text and were
 *     rebuilt from their surrounding prose: page 604's apparent-weight line
 *     ("The 'loss of weight' $= F_B = $ weight of displaced fluid"), page 632's
 *     viscosity units line ("$N s m^{-2} = Pa.s = $ decapoise = poiseuille"),
 *     and page 629's continuity cheat-sheet line ("$Av = Q = $ const"). The
 *     errata's own Chapter 8 entry documents this same leak in the neighbouring
 *     chapter, so it is a known production defect rather than an extraction
 *     artefact.
 *
 * GAUGE VERSUS ABSOLUTE, DECLARED ONCE AND HELD. Topic 01's `def` block fixes
 * the convention for the whole chapter: <i>P</i> alone always means ABSOLUTE
 * pressure, <i>P</i><sub>g</sub> = <i>P</i> - <i>P</i><sub>0</sub> is gauge, and
 * a bare rho g h is always a gauge pressure. Every worked example, practice
 * answer and MCQ below states which one it is reporting. The confusion earns a
 * `mistakes` item in Topic 01 and is the trap behind Topic 01's second MCQ.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Thirty-four lines
 * checked, thirty-four consistent, none rejected:
 *
 *   T1  P = F/A: [M L T-2]/[L2] = [M L-1 T-2]. ✓
 *       P = P0 + rho g h: [M L-3][L T-2][L] = [M L-1 T-2], matching P0. ✓
 *       Pg = P - P0 = rho g h: same, [M L-1 T-2]. ✓
 *       F2 = F1 A2/A1: [M L T-2] times a dimensionless area ratio. ✓
 *       A1 h1 = A2 h2: [L2][L] = [L3] both sides. ✓
 *       F = rho g h_bar A (plane wall): [M L-3][L T-2][L][L2] = [M L T-2]. ✓
 *   T2  FB = rho_f V_sub g: [M L-3][L3][L T-2] = [M L T-2]. ✓
 *       W_app = V g (rho_b - rho_f): [L3][L T-2][M L-3] = [M L T-2]. ✓
 *       V_sub/V = rho_b/rho_f: dimensionless both sides, as it must be. ✓
 *       RD = W_air/(W_air - W_app): dimensionless. ✓
 *   T3  tan(theta) = a/g: [L T-2]/[L T-2], dimensionless, as a tangent must be.
 *       ✓
 *       g_eff = sqrt(a2 + g2): [L T-2]. ✓
 *       delta-h = a L/g: [L T-2][L]/[L T-2] = [L]. ✓
 *       dP/dr = rho omega2 r: [M L-3][T-2][L] = [M L-2 T-2], a pressure per
 *       length. ✓
 *       y(r) = omega2 r2/2g: [T-2][L2]/[L T-2] = [L]. ✓
 *   T4  A1 v1 = A2 v2 = Q: [L2][L T-1] = [L3 T-1]. ✓
 *       BERNOULLI, the chapter's best test. P: [M L-1 T-2]. Half rho v2:
 *       [M L-3][L2 T-2] = [M L-1 T-2]. rho g h: [M L-3][L T-2][L] =
 *       [M L-1 T-2]. All three terms agree, and a dropped rho on either of the
 *       last two would show up instantly as [M L-1 T-2] against [L2 T-2] or
 *       [L2 T-2]. ✓
 *       Head form, each term divided by rho g: [M L-1 T-2]/([M L-3][L T-2]) =
 *       [L], so all three are lengths, which is what "head, in metres" means. ✓
 *       v = sqrt(2 g (H - h)): sqrt([L T-2][L]) = [L T-1]. ✓
 *       R = 2 sqrt(h(H - h)): [L]. ✓
 *       Re = rho v D/eta: [M L-3][L T-1][L]/[M L-1 T-1] = [M L-1 T-1]/
 *       [M L-1 T-1] = 1, dimensionless, as a flow-regime number must be. ✓
 *   T5  F = eta A dv/dx: [M L-1 T-1][L2][T-1] = [M L T-2]. ✓
 *       eta = (F/A)/(dv/dx): [M L-1 T-2]/[T-1] = [M L-1 T-1]. ✓
 *       nu = eta/rho: [M L-1 T-1]/[M L-3] = [L2 T-1]. ✓
 *       F = 6 pi eta r v: [M L-1 T-1][L][L T-1] = [M L T-2]. ✓
 *       v_t = (2/9) r2 (rho_b - rho_f) g/eta: [L2][M L-3][L T-2]/[M L-1 T-1] =
 *       [M T-2]/[M L-1 T-1] = [L T-1]. ✓
 *       Q = pi (delta-P) r4/(8 eta l): [M L-1 T-2][L4]/([M L-1 T-1][L]) =
 *       [M L3 T-2]/[M T-1] = [L3 T-1]. ✓
 *       R_fluid = (delta-P)/Q = 8 eta l/(pi r4): [M L-1 T-2]/[L3 T-1] =
 *       [M L-4 T-1], which is Pa s per cubic metre. ✓
 *       v(s) = (delta-P)(r2 - s2)/(4 eta l): [M L-1 T-2][L2]/([M L-1 T-1][L]) =
 *       [L T-1]. ✓
 *   T6  S = F/L: [M L T-2]/[L] = [M T-2]. ✓
 *       E = W/(delta-A): [M L2 T-2]/[L2] = [M T-2], identical to S, which is
 *       the whole content of "surface tension equals surface energy". ✓
 *       delta-P = 2S/r and 4S/r: [M T-2]/[L] = [M L-1 T-2], a pressure. ✓
 *       h = 2 S cos(theta)/(r rho g): [M T-2]/([L][M L-3][L T-2]) =
 *       [M T-2]/[M L-1 T-2] = [L]. ✓
 *       F = 2 S l and F = 4 pi r S: [M T-2][L] = [M L T-2]. ✓
 *       h = 2S/(rho g d) between plates: [L], by the same reduction. ✓
 *
 * PHYSICAL PLAUSIBILITY. Every density used is real (water 1000, sea water
 * 1025 to 1030, mercury 13.6 x 10^3, glycerine 1260, oil 800 to 900, all
 * kg/m3); atmospheric pressure is 1.01 x 10^5 Pa throughout and never rounded
 * past 1.0 x 10^5 without saying so; no floating body in any example, practice
 * item or MCQ displaces more than its own volume (every submerged fraction
 * computed below comes out strictly less than 1, and Topic 02's `proc` makes
 * that the sanity check); every Reynolds number is dimensionless and is checked
 * as such in the DIMENSIONS ledger; no speed anywhere approaches c.
 *
 * LIMITING CASES, used where they teach something rather than as decoration.
 * Bernoulli with v1 = v2 = 0 collapses term by term to P2 - P1 =
 * rho g (h1 - h2), which is Topic 01's own depth law: the dynamic result
 * contains the static one, and Topic 04's `deriv` closes on exactly that check.
 * Torricelli at h = 0 gives sqrt(2 g H), the free-fall speed through the full
 * depth, which is why "efflux is free fall" is the topic's memory aid. Free
 * fall with g_eff = 0 kills the pressure gradient, hence buoyancy: Topic 03's
 * MCQ and Topic 02's mistakes item are the same limiting case seen twice.
 * Terminal velocity with rho_b < rho_f turns v_t negative, and the body rises,
 * which is how an air bubble is handled in Topic 05 rather than by a separate
 * formula. Poiseuille with the inner radius taken to zero reduces the annulus
 * to the solid pipe, quoted in Topic 05's protip.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-11-02-motion-straight-line.ts, Topic 03 (free fall, v = sqrt(2 g h)
 *     and the equations of motion): quoted directly in Topic 04's Torricelli
 *     material, which identifies efflux speed AS the free-fall speed rather
 *     than re-deriving a square root, and again in Topic 04's jet-range example
 *     where the horizontal throw is ordinary projectile bookkeeping.
 *   - phy-11-02-motion-straight-line.ts, Topic 05 (terminal velocity from
 *     a = g - kv, and the rule "terminal speed is where a = 0, not where
 *     v = 0"): Topic 05 below opens its terminal-velocity derivation by naming
 *     that file's result and then supplying the real drag law, 6 pi eta r v,
 *     that the earlier chapter left as an unspecified k. The mistake "looking
 *     for zero velocity at terminal speed" is repeated here deliberately,
 *     because it is the same trap in new clothes.
 *   - phy-11-02-motion-straight-line.ts, Topic 05 (integration introduced in
 *     one line as the power rule run backward): Topic 04's tank-draining
 *     example and Topic 05's Poiseuille annulus both integrate without
 *     re-introducing the idea. Class 11 Mathematics does not reach integration
 *     (checked: math-11-12-limits.ts teaches derivatives only), so that one
 *     line in the pilot is the only place a student has met it, and this
 *     chapter leans on it rather than repeating it.
 *   - math-11-12-limits.ts, Topic 01 (the derivative as the limit of a
 *     difference quotient): quoted in Topic 01's definition of pressure at a
 *     point as dF/dA, and in Topic 05's velocity gradient dv/dx, neither of
 *     which is re-proved.
 *   - NOT quoted, because it is not written yet: simple harmonic motion. The
 *     source's Subtopic 02 practice item 5 asks a floating cylinder to be shown
 *     to execute SHM with period 2 pi sqrt(rho_b L/(rho_w g)). Topic 02 below
 *     carries the restoring-force half of that argument, which is pure
 *     buoyancy, and states the period as a result to be met properly in
 *     Oscillations rather than deriving a period this chapter has no tools for.
 *
 * FOURTEEN FIGURES, FOURTEEN DRAWN. The source names Figures 9.1 to 9.14 and
 * every one is here: 9.1 to 9.3 in Topic 01, 9.4 and 9.5 in Topic 02, 9.6 and
 * 9.7 in Topic 03, 9.8 and 9.9 in Topic 04, 9.10 and 9.11 in Topic 05, 9.12 to
 * 9.14 in Topic 06. None dropped, no new figure vocabulary requested. Two of
 * them are two-chip blocks per the panel rule, never two panels inside one
 * frame: Figure 9.1 (the column in equilibrium, then the wall arrows growing
 * with depth), Figure 9.4 (the real body under pressure, then the same boundary
 * filled with fluid) and Figure 9.14 (a wetting meniscus and a non-wetting one).
 * Three drawing constraints paid for by earlier chapters are honoured
 * throughout: `flow` box text carries no markup (this chapter uses no `flow`
 * frame at all), a poly's fill honours its `tone`, and two collinear strokes
 * read as one line, so every container wall here is a `polys` edge rather than
 * a `segments` stroke and every force arrow beside a wall is offset from it.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11MechFluids: Chapter = {
  "chapter": "09",
  "title": "Mechanical Properties of Fluids",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Pressure in a Fluid at Rest, and Pascal's Law",
      "chip": "01 PRESSURE",
      "kalam": "depth decides everything, shape decides nothing",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Fluid Pressure and Pascal's Law</b><br>The foundation stone of the whole chapter. CBSE Boards almost always carry a 1 to 3 mark question on gauge versus absolute pressure, on the barometer, or on a plain depth calculation. JEE Main reliably asks one or two questions on manometers, hydraulic lifts, or the <i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i> relation. NEET typically sets one conceptual MCQ on pressure being a scalar acting equally in all directions, or a clean depth substitution. JEE Advanced rarely tests this alone but folds it into multi-liquid U-tube problems and into accelerated fluids.<br><br><b>02 · Buoyancy and Floatation</b><br>A perennial favourite across every exam. CBSE Boards routinely ask for a statement of Archimedes' principle or an apparent-weight calculation, worth 2 to 3 marks. JEE Main almost always carries a numerical on the fraction submerged, on two-liquid floatation, or on a body held down by a string. NEET loves the conceptual traps here: the melting-ice question and the anomalous-expansion question recur year after year. JEE Advanced folds buoyancy into accelerating frames and oscillating floats.<br><br><b>03 · Fluids in Accelerated and Rotating Frames</b><br>A favourite of JEE for testing whether you understand pressure or merely memorised ρ<i>gh</i>. JEE Main regularly asks for the tilted free surface, tan θ = <i>a</i>/<i>g</i>, and the height difference across an accelerating tank. JEE Advanced builds rotating-fluid paraboloid problems and combines them with submerged bodies. CBSE Boards touch it lightly through the effective-gravity idea, and NEET asks the occasional conceptual question on which way the surface tilts.<br><br><b>04 · Fluid Dynamics and Bernoulli's Theorem</b><br>One of the highest-yield slices in the book. CBSE Boards regularly ask for the statement and derivation of Bernoulli's theorem, worth 3 to 5 marks, and for the equation of continuity. JEE Main reliably carries one or two numericals on continuity plus Bernoulli, on Venturi meters, or on efflux speed. NEET favours conceptual questions on the speed-pressure relationship and its everyday applications. JEE Advanced builds tank-draining and jet-range problems that fuse Bernoulli with calculus and projectile motion.<br><br><b>05 · Viscosity, Terminal Velocity and Poiseuille Flow</b><br>Two source subtopics, one quantity: the coefficient of viscosity. CBSE Boards ask for its definition, units and dimensions, for the terminal-velocity expression, and for a statement of Poiseuille's law, worth 2 to 3 marks each. JEE Main reliably carries a terminal-velocity numerical, a Newton's-law shear-force problem, or a question on the fourth-power radius dependence and on capillaries combined in series and parallel. NEET loves the <i>v</i><sub>t</sub> proportional to <i>r</i><sup>2</sup> scaling trap, the liquids-versus-gases temperature question, and the halve-the-radius flow trap. JEE Advanced builds droplet coalescence, power-dissipation scaling, and the parabolic velocity profile.<br><br><b>06 · Surface Tension and Capillarity</b><br>A formula-rich subtopic that closes the chapter. CBSE Boards ask for the definition of surface tension and surface energy, the relation between them, and capillary rise, worth 2 to 5 marks, plus the conceptual angle-of-contact question. JEE Main reliably carries an excess-pressure or capillary-rise numerical and the drop-splitting energy problem. NEET favours the drop-versus-bubble excess-pressure trap and the behaviour with temperature and impurities. JEE Advanced builds coalescence-with-heating, double-bubble, and short-capillary problems."
        },
        {
          "t": "p",
          "html": "Stand in a crowded local train at peak hour. People press against you from the front, the back, the left and the right at once. You do not feel a shove in one direction, you feel squeezed inward from every direction together. A small parcel of water sitting deep inside a tank feels almost exactly that. The fluid around it presses on it from all sides, and that inward squeeze, measured per unit of area, is what we call <b>pressure</b>.<br><br>Be precise about it. Take any small flat surface of area <i>A</i> submerged in a fluid at rest. The fluid pushes on that surface with a force, and the crucial observation is that this force is <b>always perpendicular to the surface, never sideways</b>. If it had a sideways component, the fluid would slide along the surface and start flowing, and it would no longer be at rest. So in a static fluid only the normal force survives, and pressure is the size of that normal force divided by the area it acts on."
        },
        {
          "t": "think",
          "html": "pressure is not a vector, even though force is. a diver's eardrum at 10 m down feels the same pressure whether it faces up, down or sideways. turn your head however you like and the water pushes just as hard. because pressure has no direction of its own, it acts perpendicular to whatever surface you happen to put in the fluid, it is a scalar. force is a vector, pressure is a scalar, and that one line is among the most tested sentences in the chapter."
        },
        {
          "t": "p",
          "html": "Why does pressure grow as you go deeper? Picture the overhead tank on a building roof. The water at the bottom has to hold up the weight of every drop above it, so the taller the column pressing down, the greater the pressure. That gives the single most important idea of the topic: <b>pressure grows linearly with depth</b>. At the free surface you feel only the atmosphere pushing down, <i>P</i><sub>0</sub>. A depth <i>h</i> below it you feel the atmosphere plus the weight of the fluid column standing above you.<br><br>This has a genuinely startling consequence, the <b>hydrostatic paradox</b>. Take three vessels of wildly different shapes, one tall and narrow, one wide and squat, one funnel-shaped, and fill all three with water to the same height. The pressure at the base is identical in all three, even though they hold completely different amounts of water. Pressure at a point depends only on the depth below the free surface and on the fluid's density, never on the total volume or the shape of the container. And it leads straight to a second great idea, due to Blaise Pascal: press on an enclosed fluid and that extra pressure does not stay near your hand, it spreads undiminished to every point in the fluid and onto every wall. Squeeze one end of a toothpaste tube and the paste leaves the far end."
        },
        {
          "t": "def",
          "term": "Gauge or absolute, decided once for this whole chapter",
          "html": "Two pressures are in play at every point and they differ by a constant. <b><i>P</i> on its own always means ABSOLUTE pressure</b>, measured up from a perfect vacuum, so it can never be negative. <b><i>P</i><sub>g</sub> = <i>P</i> − <i>P</i><sub>0</sub> is GAUGE pressure</b>, measured up from the local atmosphere, so it is negative wherever a point sits below atmospheric, as inside your mouth when you suck through a straw. A bare ρ<i>gh</i> is always a gauge pressure: it is the fluid column's own contribution, with the atmosphere left out. Tyre pressure, blood pressure and the pressure a diver quotes are all gauge values. Every worked example, practice answer and MCQ in this chapter says which of the two it is reporting, and so should you."
        },
        {
          "t": "defgrid",
          "title": "The quantities of fluid statics",
          "rows": [
            { "k": "Pressure", "v": "<i>P</i> = <i>F</i><sub>⟂</sub>/<i>A</i>, a scalar. SI unit pascal, 1 Pa = 1 N/m<sup>2</sup>. Dimensions [M L<sup>−1</sup> T<sup>−2</sup>]" },
            { "k": "Pressure at a point", "v": "<i>P</i> = <i>dF</i><sub>⟂</sub>/<i>dA</i>, the limit of Δ<i>F</i>/Δ<i>A</i> as the patch shrinks" },
            { "k": "Absolute pressure", "v": "measured from vacuum, always ≥ 0. Written <i>P</i>" },
            { "k": "Gauge pressure", "v": "<i>P</i><sub>g</sub> = <i>P</i> − <i>P</i><sub>0</sub> = ρ<i>gh</i>, may be positive or negative" },
            { "k": "Density", "v": "ρ = mass ÷ volume, unit kg/m<sup>3</sup>. Water 1000 kg/m<sup>3</sup>, mercury 13.6 × 10<sup>3</sup> kg/m<sup>3</sup>" },
            { "k": "Standard pressures", "v": "1 atm = 1.013 × 10<sup>5</sup> Pa = 760 mm Hg · 1 bar = 10<sup>5</sup> Pa · 1 torr = 133 Pa" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PRESSURE AND DEPTH",
          "tag": "the workhorse of the whole chapter",
          "main": "<i>dP</i>/<i>dh</i> = ρ<i>g</i> ⟹ <i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i><br><i>P</i><sub>g</sub> = <i>P</i> − <i>P</i><sub>0</sub> = ρ<i>gh</i>",
          "legend": [
            "<i>P</i> = absolute pressure at depth <i>h</i> (Pa), <i>P</i><sub>0</sub> = pressure at the free surface, normally atmospheric (Pa)",
            "ρ = fluid density (kg/m<sup>3</sup>), <i>g</i> = 9.8 m/s<sup>2</sup>, <i>h</i> = depth measured DOWNWARD from the free surface (m)",
            "the result carries no area, no volume and no container shape, which is the hydrostatic paradox in one line"
          ],
          "note": "Valid only for a fluid at rest whose density does not change with depth. Excellent for liquids, poor for gases, which is exactly why you cannot ask how high the atmosphere reaches with a single ρgh."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PASCAL'S LAW AND THE HYDRAULIC LIFT",
          "main": "<i>F</i><sub>1</sub>/<i>A</i><sub>1</sub> = <i>F</i><sub>2</sub>/<i>A</i><sub>2</sub> ⟹ <i>F</i><sub>2</sub> = <i>F</i><sub>1</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>)<br>same volume displaced: <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>",
          "legend": [
            "<i>F</i><sub>1</sub> = force on the input piston (N), <i>A</i><sub>1</sub> = its area (m<sup>2</sup>); <i>F</i><sub>2</sub> and <i>A</i><sub>2</sub> the same for the output piston",
            "<i>h</i><sub>1</sub>, <i>h</i><sub>2</sub> = the distances the two pistons travel (m), and mechanical advantage = <i>F</i><sub>2</sub>/<i>F</i><sub>1</sub> = <i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>",
            "areas scale as the square of a radius or diameter, so a ten-fold radius gives a hundred-fold force"
          ],
          "note": "Force is multiplied, energy is not: F1h1 = F2h2 exactly. The small piston pays for the big one's force by travelling the longer distance."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY PRESSURE GROWS WITH DEPTH, TAP A LINE",
          "steps": [
            {
              "eq": "isolate a thin vertical column of the fluid, cross-section <i>A</i>, top face at depth <i>h</i><sub>1</sub>, bottom face at depth <i>h</i><sub>2</sub>",
              "why": "The fluid is at rest, so this imaginary column is in equilibrium and the net vertical force on it must be exactly zero. Nothing is assumed about the container."
            },
            {
              "eq": "down on the top face: <i>P</i><sub>1</sub><i>A</i>. Up on the bottom face: <i>P</i><sub>2</sub><i>A</i>. Down: the column's own weight, <i>mg</i> = ρ<i>A</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>)<i>g</i>",
              "why": "Three vertical forces, and only three. The push from below has to support both the push from above and the weight of the fluid in between."
            },
            {
              "eq": "<i>P</i><sub>2</sub><i>A</i> = <i>P</i><sub>1</sub><i>A</i> + ρ<i>Ag</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>), so <i>P</i><sub>2</sub> − <i>P</i><sub>1</sub> = ρ<i>g</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>)",
              "why": "The area <i>A</i> cancels off both sides. That single cancellation is the hydrostatic paradox: whatever cross-section you chose, it left the answer."
            },
            {
              "eq": "put the top face at the free surface, <i>h</i><sub>1</sub> = 0 and <i>P</i><sub>1</sub> = <i>P</i><sub>0</sub>: <i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i>",
              "why": "The result depends on depth alone, not on the horizontal cross-section and not on the shape of the vessel. Two points at the same depth in one connected fluid are therefore at the same pressure, which is the fact every U-tube problem runs on."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.1 · WHY DEPTH IS THE ONLY THING THAT MATTERS",
          "chips": ["the column in equilibrium", "arrows that grow with depth"],
          "captions": [
            "An imaginary column of the fluid, cross-section A. The fluid above pushes down with P₁A, the fluid below pushes up with P₂A, and the column's own weight mg pulls down. Equilibrium forces P₂ − P₁ = ρg(h₂ − h₁), and A cancels.",
            "The same law, drawn as the force on the wall. Each arrow is the fluid pressing perpendicular to the surface, and the deeper the arrow the longer it is, because the column of fluid above that point is taller. A dam wall is built thick at the bottom for exactly this reason."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[1, 9], [1, 1], [9, 1], [9, 9]], "tone": "ink" },
                { "pts": [[1, 8.4], [1, 1], [9, 1], [9, 8.4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4.4, 7], [4.4, 3], [5.6, 3], [5.6, 7]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "arrows": [
                { "from": [4.0, 8.6], "to": [4.0, 7.0], "tone": "ink", "label": "P₁A", "at": "start" },
                { "from": [4.0, 1.4], "to": [4.0, 3.0], "tone": "ink", "label": "P₂A", "at": "start" },
                { "from": [5.0, 5.6], "to": [5.0, 4.2], "tone": "amber", "label": "mg", "at": "end" }
              ],
              "labels": [
                { "x": 2.6, "y": 8.9, "text": "free surface" },
                { "x": 7.2, "y": 6.6, "text": "depth h₁" },
                { "x": 7.2, "y": 2.2, "text": "depth h₂" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[1, 9], [1, 1], [9, 1], [9, 9]], "tone": "ink" },
                { "pts": [[1, 8.4], [1, 1], [9, 1], [9, 8.4]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [7.6, 7.6], "to": [8.9, 7.6], "tone": "amber" },
                { "from": [7.2, 6.2], "to": [8.9, 6.2], "tone": "amber" },
                { "from": [6.6, 4.8], "to": [8.9, 4.8], "tone": "amber" },
                { "from": [5.9, 3.4], "to": [8.9, 3.4], "tone": "amber" },
                { "from": [5.1, 2.0], "to": [8.9, 2.0], "tone": "amber" }
              ],
              "labels": [
                { "x": 2.6, "y": 8.9, "text": "free surface" },
                { "x": 2.8, "y": 6.2, "text": "shallow, small P" },
                { "x": 2.8, "y": 2.0, "text": "deep, large P" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · PASCAL'S LAW, AND WHY A LIFT MULTIPLIES FORCE",
          "steps": [
            {
              "eq": "for a point <i>B</i> a depth <i>z</i> below an enclosed piston: <i>P</i><sub>B</sub> = <i>P</i><sub>piston</sub> + ρ<i>gz</i>",
              "why": "This is the depth law again, with the piston's face playing the part of the free surface. Nothing new has been assumed."
            },
            {
              "eq": "press with an extra force <i>F</i> on the piston, area <i>A</i>. Then Δ<i>P</i><sub>piston</sub> = <i>F</i>/<i>A</i>, while <i>z</i>, ρ and <i>g</i> are all unchanged",
              "why": "The liquid is incompressible, so nothing about the geometry moves. Take the difference of the pressure equation before and after: the ρgz term is identical on both sides and subtracts away."
            },
            {
              "eq": "Δ<i>P</i><sub>B</sub> = Δ<i>P</i><sub>piston</sub> = <i>F</i>/<i>A</i>, and <i>B</i> was any point at all",
              "why": "The increase at B equals the increase at the piston, however deep B sits. Since B was arbitrary, the change reaches every point undiminished. That is Pascal's law."
            },
            {
              "eq": "so at a second piston of area <i>A</i><sub>2</sub>: <i>F</i><sub>2</sub> = Δ<i>P</i> · <i>A</i><sub>2</sub> = <i>F</i><sub>1</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>)",
              "why": "The same pressure change acting on a bigger area gives a bigger force. The fluid volume pushed out of one cylinder arrives in the other, A1h1 = A2h2, so the small piston moves the further distance and the work done, F1h1 = F2h2, comes out equal. A lift multiplies force, never energy."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.2 · THE HYDRAULIC LIFT",
          "chips": ["small push, big lift"],
          "captions": [
            "Two cylinders joined by a fluid-filled pipe. Pressing the small piston with F₁ raises the pressure everywhere by F₁/A₁, and that same pressure acting over the far larger A₂ gives an upward F₂ = F₁(A₂/A₁). The catch is distance: the same volume of fluid has to leave one cylinder and arrive in the other, so the small piston travels A₂/A₁ times as far and the work done on each side is identical."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 8], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[1.5, 6.2], [1.5, 1], [10.5, 1], [10.5, 6.6]], "tone": "ink" },
                { "pts": [[2.8, 6.2], [2.8, 1.9], [7.5, 1.9], [7.5, 6.6]], "tone": "ink" },
                { "pts": [[1.5, 4.0], [1.5, 1], [10.5, 1], [10.5, 4.6], [7.5, 4.6], [7.5, 1.9], [2.8, 1.9], [2.8, 4.0]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "bodies": [
                { "kind": "block", "at": [2.15, 4.2], "w": 1.3, "h": 0.34 },
                { "kind": "block", "at": [9.0, 4.8], "w": 3.0, "h": 0.34 }
              ],
              "arrows": [
                { "from": [2.15, 6.0], "to": [2.15, 4.5], "tone": "amber", "label": "F₁", "at": "start" },
                { "from": [10.0, 5.1], "to": [10.0, 6.6], "tone": "amber", "label": "F₂", "at": "end" }
              ],
              "labels": [
                { "x": 2.15, "y": 7.2, "text": "small area A₁" },
                { "x": 8.4, "y": 7.2, "text": "large area A₂" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a U-tube or a manometer",
          "steps": [
            "<b>Find a horizontal level that lies inside one continuous body of a single fluid</b>, and cutting both arms. Everywhere on that level the pressure is equal, because the two points are joined by fluid at the same depth.",
            "<b>Walk down each arm to that level, one term at a time.</b> Start at the open surface with <i>P</i><sub>0</sub>, then add ρ<i>gh</i> for every column you descend through, using that column's own density.",
            "<b>Set the two walks equal and solve.</b> The <i>P</i><sub>0</sub> terms cancel whenever both arms are open, which is why so many U-tube answers contain no atmospheric pressure at all.",
            "<b>Remember the factor of two.</b> Mercury pushed down by <i>x</i> in one arm reappears in the other, rising by <i>x</i>, so the DIFFERENCE in levels is 2<i>x</i>, never <i>x</i>. This one oversight is why Advanced-level U-tube answers come out exactly half-wrong.",
            "<b>Sanity check the direction.</b> The heavier column always sits lower. If your answer has the denser liquid standing higher on both counts, a sign has slipped."
          ]
        },
        {
          "t": "proc",
          "title": "Hydraulic lift questions, force and distance together",
          "steps": [
            "<b>Compute the area ratio first</b>, and remember areas go as the square of a radius or a diameter: pistons of radii 2 cm and 20 cm give a ratio of 100, not 10.",
            "<b>Force is multiplied by that ratio:</b> <i>F</i><sub>2</sub> = <i>F</i><sub>1</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>). The big piston always gets the big force.",
            "<b>Distance is divided by it:</b> <i>h</i><sub>1</sub> = <i>h</i><sub>2</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>), so the SMALL piston travels the LONG distance. Halving the force means doubling the stroke, never the reverse.",
            "<b>Check energy at the end.</b> <i>F</i><sub>1</sub><i>h</i><sub>1</sub> should equal <i>F</i><sub>2</sub><i>h</i><sub>2</sub> to the last digit. If it does not, you inverted one of the two ratios."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.3 · THE U-TUBE, AND THE FACTOR OF TWO",
          "chips": ["water poured onto mercury"],
          "captions": [
            "Both arms open. A water column of height H is poured into the left arm and floats on the mercury. The mercury in the left arm sinks by x and the SAME mercury reappears in the right arm, rising by x, so the gap between the two mercury surfaces is 2x. Balancing pressures at the lower mercury surface gives ρ_w H = ρ_Hg (2x)."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[2, 9.4], [2, 1], [8, 1], [8, 9.4]], "tone": "ink" },
                { "pts": [[3, 9.4], [3, 2], [7, 2], [7, 9.4]], "tone": "ink" },
                { "pts": [[2, 5], [2, 1], [8, 1], [8, 6], [7, 6], [7, 2], [3, 2], [3, 5]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[2, 8], [2, 5], [3, 5], [3, 8]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "arrows": [
                { "from": [1.4, 5], "to": [1.4, 8], "head": "both", "tone": "amber", "label": "H", "at": "mid" },
                { "from": [8.7, 5], "to": [8.7, 6], "head": "both", "tone": "ink", "label": "2x", "at": "mid" }
              ],
              "labels": [
                { "x": 5, "y": 8.6, "text": "both arms open" },
                { "x": 5, "y": 1.5, "text": "mercury" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A cylindrical overhead tank is filled with water to a height of 2.5 m. Its flat circular base has area 0.80 m<sup>2</sup>. Taking <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa, ρ = 1000 kg/m<sup>3</sup> and <i>g</i> = 10 m/s<sup>2</sup>, find the gauge pressure at the base, the absolute pressure there, and the total downward force the water exerts on the base.",
          "steps": [
            "Gauge pressure is the water column's own contribution: <i>P</i><sub>g</sub> = ρ<i>gh</i> = (1000)(10)(2.5) = 2.5 × 10<sup>4</sup> Pa.",
            "Absolute pressure adds the atmosphere: <i>P</i> = <i>P</i><sub>0</sub> + <i>P</i><sub>g</sub> = 1.0 × 10<sup>5</sup> + 0.25 × 10<sup>5</sup> = 1.25 × 10<sup>5</sup> Pa.",
            "The total force on the base uses the ABSOLUTE pressure, because the atmosphere presses down on the free surface too and that push is transmitted through the water: <i>F</i> = <i>PA</i> = (1.25 × 10<sup>5</sup>)(0.80) = 1.0 × 10<sup>5</sup> N.",
            "Note how the two answers differ by a factor of five. Quoting the gauge value where the absolute one is wanted, or the reverse, is the single commonest way to lose this mark."
          ],
          "ans": "gauge 2.5 × 10<sup>4</sup> Pa · absolute 1.25 × 10<sup>5</sup> Pa · force 1.0 × 10<sup>5</sup> N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A diver descends into seawater of density 1030 kg/m<sup>3</sup>. At roughly what depth is the GAUGE pressure equal to 2 atm? Take <i>g</i> = 10 m/s<sup>2</sup> and 1 atm ≈ 1.0 × 10<sup>5</sup> Pa.",
          "steps": [
            "Two traps sit here. The question says gauge, so use <i>P</i><sub>g</sub> = ρ<i>gh</i> with no <i>P</i><sub>0</sub> term at all. And the water is seawater, 1030 kg/m<sup>3</sup>, not fresh water at 1000.",
            "<i>h</i> = <i>P</i><sub>g</sub>/(ρ<i>g</i>) = (2.0 × 10<sup>5</sup>)/((1030)(10)) = (2.0 × 10<sup>5</sup>)/(1.03 × 10<sup>4</sup>) ≈ 19.4 m.",
            "The shortcut worth memorising: in water ρ<i>g</i> ≈ 10<sup>4</sup> Pa per metre, so every 1 atm of gauge pressure costs about 10 m of depth. Two atmospheres means roughly 20 m, nudged slightly shallower because seawater is denser than fresh."
          ],
          "ans": "≈ 19.4 m"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A hydraulic car lift has an input piston of radius 2 cm and an output piston of radius 20 cm. A car of mass 1200 kg rests on the output piston. Find the minimum force on the input piston that supports the car, and the distance the input piston must travel to raise the car by 5 cm. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The output force must equal the car's weight: <i>F</i><sub>2</sub> = <i>mg</i> = (1200)(10) = 1.2 × 10<sup>4</sup> N.",
            "Areas go as radius squared: <i>A</i><sub>2</sub>/<i>A</i><sub>1</sub> = (20/2)<sup>2</sup> = 100.",
            "<i>F</i><sub>1</sub> = <i>F</i><sub>2</sub>(<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>) = (1.2 × 10<sup>4</sup>)/100 = 120 N.",
            "Volume conservation, <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>, gives <i>h</i><sub>1</sub> = (5 cm)(100) = 500 cm = 5 m. Energy check: (120)(5) = 600 J and (1.2 × 10<sup>4</sup>)(0.05) = 600 J. Equal, as they must be."
          ],
          "ans": "<i>F</i><sub>1</sub> = 120 N · input stroke 5 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A U-tube of uniform cross-section, both arms open, contains mercury of density 13.6 × 10<sup>3</sup> kg/m<sup>3</sup>. A column of water of density 1.0 × 10<sup>3</sup> kg/m<sup>3</sup> and height <i>H</i> = 13.6 cm is poured slowly into the left arm, floating on the mercury. By how much does the mercury rise in the right arm?",
          "steps": [
            "The insight the whole problem turns on: mercury pushed down by <i>x</i> in the left arm reappears in the right arm, rising by <i>x</i>. So the DIFFERENCE between the two mercury surfaces is 2<i>x</i>, not <i>x</i>.",
            "Balance pressures at the level of the lower mercury surface, which sits in the left arm. Going down the left side, through the atmosphere and then the water column: <i>P</i><sub>0</sub> + ρ<sub>w</sub><i>gH</i>.",
            "Going down the right side, through the atmosphere and then a mercury column of height 2<i>x</i> to the same level: <i>P</i><sub>0</sub> + ρ<sub>Hg</sub><i>g</i>(2<i>x</i>). The atmospheric terms cancel.",
            "ρ<sub>w</sub><i>H</i> = ρ<sub>Hg</sub>(2<i>x</i>), so 2<i>x</i> = (13.6 cm)(1.0 × 10<sup>3</sup>)/(13.6 × 10<sup>3</sup>) = 1.0 cm and <i>x</i> = 0.5 cm. The mercury rises 0.5 cm on the right and falls 0.5 cm on the left. Anyone who wrote <i>x</i> for the level difference gets exactly 1.0 cm, double the truth."
          ],
          "ans": "rises 0.5 cm in the right arm"
        },
        {
          "t": "mcq",
          "q": "Points <i>A</i> and <i>B</i> lie at the same depth in a tank of water, <i>A</i> near the centre and <i>B</i> right against a slanted side wall. Which is correct?",
          "opts": [
            { "label": "<i>P</i><sub>A</sub> > <i>P</i><sub>B</sub>", "nudge": "This imagines the centre has more water above it. Both points sit under a column of the same height, and the depth law contains no horizontal coordinate at all." },
            { "label": "<i>P</i><sub>A</sub> < <i>P</i><sub>B</sub>", "nudge": "This imagines the slanted wall adds something. A wall exerts no extra pressure on the fluid; it only contains it." },
            { "label": "<i>P</i><sub>A</sub> = <i>P</i><sub>B</sub>", "nudge": null },
            { "label": "cannot be determined without the tank's shape", "nudge": "The shape is precisely what does not matter here. Depth alone fixes the pressure, which is the hydrostatic paradox stated as a question." }
          ],
          "correct": 2,
          "solution": "In a static fluid, pressure depends only on depth below the free surface. Same depth means same pressure, whatever the horizontal position or the container's shape."
        },
        {
          "t": "mcq",
          "q": "Which of these quantities can be negative?",
          "opts": [
            { "label": "absolute pressure", "nudge": "Absolute pressure is measured up from a perfect vacuum, so it is never less than zero. Choosing this is the exact confusion between the two pressures that this chapter's convention exists to prevent." },
            { "label": "gauge pressure", "nudge": null },
            { "label": "atmospheric pressure", "nudge": "The atmosphere is a real column of air pressing down; its pressure is a positive quantity everywhere." },
            { "label": "density", "nudge": "Density is mass over volume, both positive. There is no physical route to a negative value." }
          ],
          "correct": 1,
          "solution": "Gauge pressure is P − P₀, so it is negative wherever a point sits below atmospheric pressure, for instance inside your mouth while sucking through a straw. Absolute pressure cannot be."
        },
        {
          "t": "mcq",
          "q": "A hydraulic lift multiplies the input force by 25. If the output piston rises by 4 cm, the input piston must move through:",
          "opts": [
            { "label": "0.16 cm", "nudge": "This divides where it should multiply, 4/25. The inverse error: the piston that gets less force must travel further, not less far." },
            { "label": "1 cm", "nudge": "This ignores volume conservation entirely and just guesses a smaller number." },
            { "label": "100 cm", "nudge": null },
            { "label": "4 cm", "nudge": "This assumes both pistons move equally, which would make the areas equal and destroy the force multiplication the question just gave you." }
          ],
          "correct": 2,
          "solution": "Force multiplication means A₂/A₁ = 25. Volume conservation gives h₁ = h₂(A₂/A₁) = 4 × 25 = 100 cm. The input piston takes the long journey, which is how the energy books balance."
        },
        {
          "t": "mcq",
          "q": "A barometer reads 76 cm of mercury at sea level. Carried to the top of a tall mountain, its mercury column will:",
          "opts": [
            { "label": "rise above 76 cm", "nudge": "This reverses the relationship. There is less air above you on a mountain, so the atmosphere supports a shorter column, not a taller one." },
            { "label": "fall below 76 cm", "nudge": null },
            { "label": "stay at 76 cm", "nudge": "This treats the barometer reading as a fixed constant. It is a measurement of the local atmosphere, which genuinely changes with altitude and weather." },
            { "label": "drop to zero", "nudge": "This overstates it wildly. Pressure falls with altitude but does not vanish on any ordinary mountain; the column shortens, it does not disappear." }
          ],
          "correct": 1,
          "solution": "The barometer balances the atmosphere against a mercury column, h = P₀/(ρ_Hg g). Atmospheric pressure decreases with altitude, so the supported height falls."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A swimming pool is 3.0 m deep. Find the gauge and the absolute pressure at the bottom. Take ρ = 1000 kg/m<sup>3</sup>, <i>g</i> = 10 m/s<sup>2</sup>, <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa.", "a": "<i>P</i><sub>g</sub> = ρ<i>gh</i> = 3.0 × 10<sup>4</sup> Pa. <i>P</i> = 1.0 × 10<sup>5</sup> + 0.3 × 10<sup>5</sup> = 1.3 × 10<sup>5</sup> Pa." },
            { "q": "[NEET] Three open vessels, one conical, one cylindrical and one inverted-conical, hold the same oil to the same height and have bases of equal area. Rank the pressures at the three bases.", "a": "All three are equal. Pressure at the base is <i>P</i><sub>0</sub> + ρ<i>gh</i>, which contains no shape and no volume." },
            { "q": "[JEE Main] A hydraulic press has pistons of diameters 5 cm and 30 cm. A force of 90 N acts on the smaller one. Find the largest load the bigger piston can support.", "a": "Area ratio = (30/5)<sup>2</sup> = 36, so <i>F</i><sub>2</sub> = (90)(36) = 3240 N." },
            { "q": "[JEE Main] An open-tube mercury manometer is joined to a gas cylinder. The mercury in the open arm stands 18 cm higher than in the connected arm. Find the gas's gauge and absolute pressure. Take ρ<sub>Hg</sub> = 13.6 × 10<sup>3</sup> kg/m<sup>3</sup>, <i>g</i> = 9.8 m/s<sup>2</sup>, <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa.", "a": "<i>P</i><sub>g</sub> = ρ<i>gh</i> = (13.6 × 10<sup>3</sup>)(9.8)(0.18) ≈ 2.4 × 10<sup>4</sup> Pa. <i>P</i> ≈ 1.24 × 10<sup>5</sup> Pa. The open arm standing higher means the gas is ABOVE atmospheric." },
            { "q": "[JEE Advanced] A vertical cylinder of base radius 10 cm holds water 40 cm deep with a 20 cm layer of oil of relative density 0.8 floating on top. Find the gauge pressure at the base and the total force on the base from the two liquids. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "Add the two columns: <i>P</i><sub>g</sub> = (800)(10)(0.20) + (1000)(10)(0.40) = 1600 + 4000 = 5.6 × 10<sup>3</sup> Pa. Force from the liquids = <i>P</i><sub>g</sub><i>A</i> = (5600)(π)(0.10)<sup>2</sup> ≈ 176 N." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating pressure as a vector.</b> Pressure is a scalar with no direction of its own. Only the FORCE due to pressure is a vector, and it always acts perpendicular to whatever surface you place in the fluid. Writing a direction next to a pressure loses the mark in a theory question every time.",
            "<b>Mixing gauge with absolute.</b> Tyre pressure, blood pressure and a diver's quoted pressure are all gauge. A bare ρ<i>gh</i> is gauge. If a question asks for the NET force on a submerged window whose inside is at atmospheric pressure, use the gauge value, because the atmosphere pushes on both faces and cancels.",
            "<b>Believing more liquid means more pressure.</b> The hydrostatic paradox says otherwise: the base pressure contains ρ, <i>g</i> and the height <i>h</i>, and nothing else. A funnel-shaped vessel and a straight cylinder filled to the same level read identically at the base.",
            "<b>Forgetting the factor of two in a U-tube.</b> When fluid drops by <i>x</i> in one arm it rises by <i>x</i> in the other, so the LEVEL DIFFERENCE is 2<i>x</i>. This single oversight is the most common reason an Advanced U-tube answer comes out exactly half-wrong.",
            "<b>Using the base-pressure shortcut on a vertical wall.</b> <i>F</i> = <i>PA</i> works on a horizontal base, where every point is at one depth. On a vertical or slanted wall the pressure varies down the face, and the honest answer is <i>F</i> = ρ<i>gh</i><sub>c</sub><i>A</i>, the pressure at the wall's CENTROID times its area, with the resultant acting BELOW that centroid."
          ]
        },
        {
          "t": "protip",
          "html": "burn one number into memory: for water ρg ≈ 10<sup>4</sup> Pa per metre, so 10 m of depth is about 1 atm of gauge pressure. it lets you sanity-check any depth answer before you touch the arithmetic and it flags a wrong power of ten instantly on the omr sheet. for a lift, say the sentence \"big piston, big force, small distance\" out loud before writing a ratio, and you will never invert one. and for any curved gate or dam face, remember that the pressure on a circular arc always points along a radius, so the whole resultant passes through the centre of that circle, which kills the moment about any hinge sitting on that same line."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>P</i> = <i>F</i><sub>⟂</sub>/<i>A</i>, a scalar, unit Pa = N/m<sup>2</sup>", "note": "dimensions [M L<sup>−1</sup> T<sup>−2</sup>]; force is a vector, pressure is not" },
            { "f": "<i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i>", "note": "depth only, never volume or shape: the hydrostatic paradox" },
            { "f": "<i>P</i><sub>g</sub> = <i>P</i> − <i>P</i><sub>0</sub> = ρ<i>gh</i>", "note": "absolute ≥ 0 always; gauge may be negative" },
            { "f": "Pascal: a pressure change reaches every point undiminished", "note": "needs an ENCLOSED fluid; an open one just spills" },
            { "f": "<i>F</i><sub>2</sub> = <i>F</i><sub>1</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>), with <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>", "note": "force multiplied, energy conserved: F₁h₁ = F₂h₂" }
          ],
          "aids": [
            "\"pressure is a scalar, force is a vector\"",
            "\"in water, 10 m is about 1 atm\"",
            "\"one arm down by x, the other up by x, so the gap is 2x\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Buoyancy and Floatation",
      "chip": "02 BUOYANCY",
      "kalam": "the upthrust belongs to the fluid, never to the body",
      "blocks": [
        {
          "t": "p",
          "html": "Try pushing a sealed water bottle down to the bottom of a swimming pool. It fights back, and the deeper you push it the harder it shoves against your hand. Let go and it rockets to the surface. That upward shove is <b>buoyancy</b>, and the whole game is understanding where it comes from.<br><br>It is not a new force. It is nothing but the net effect of the fluid pressure you already met in the last topic. Pressure grows with depth, so for any submerged object the pressure on its bottom face is larger than the pressure on its top face, simply because the bottom is deeper. The upward push from below beats the downward push from above, and what is left over is buoyancy. This matters more than it sounds: buoyancy exists ONLY because pressure varies with depth. In a fluid with no pressure gradient there would be no buoyancy at all, which is exactly what happens in free fall."
        },
        {
          "t": "think",
          "html": "scoop the object out and replace it with an identical blob of the same fluid, a water-shaped lump of water sitting where the object was. that blob just hangs there, because it is part of the fluid. what holds it up? the surrounding fluid pushing on its boundary with exactly enough upward force to balance the blob's weight. but the surrounding fluid has no idea what is inside that boundary, it pushes the same way whether the boundary holds water or iron. so the upward force on anything equals the weight of the fluid that would have filled its space."
        },
        {
          "t": "p",
          "html": "That is <b>Archimedes' principle</b>: the buoyant force on a body, partly or fully submerged, equals the weight of the fluid it displaces, and acts vertically upward through the centre of that displaced fluid. Notice what the formula <i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i> contains, and more importantly what it does not. It uses the FLUID's density and the SUBMERGED volume. The body's own density appears nowhere. The body's density only decides what happens next: denser than the fluid and its weight beats the largest buoyancy available, so it sinks; lighter and buoyancy wins until just enough of it pokes above the surface that the reduced submerged volume balances the weight exactly. That balance point is <b>floatation</b>."
        },
        {
          "t": "p",
          "html": "This is why a steel ship floats while a steel nail sinks. The nail is solid steel, denser than water, end of story. The ship is mostly hollow, so averaged over hull and air its effective density is less than water. Same material, opposite fate, decided entirely by average density relative to the fluid. And a floating body settles so that the fraction submerged equals the ratio of the densities: a block of relative density 0.6 floats with 60 per cent of itself underwater, which is why roughly nine tenths of an iceberg hides below the surface."
        },
        {
          "t": "def",
          "term": "Where buoyancy quietly fails",
          "html": "Four assumptions sit under the clean statement. <b>One:</b> the fluid is in equilibrium in an inertial frame. In a lift or on a turning car you must replace <i>g</i> with an effective gravity, which is the next topic's whole business. <b>Two:</b> the fluid has a well-defined density ρ<sub>f</sub>, and that density itself shifts with temperature, water being densest at 4 °C. <b>Three:</b> surface tension is ignored and the body is fully wetted. <b>Four, the sharp one:</b> the phrase weight of displaced fluid assumes fluid actually surrounds the body. A flat-bottomed block sealed against the tank floor with no water underneath has NO upward pressure on its base and therefore no buoyancy at all, however deep the water above it."
        },
        {
          "t": "defgrid",
          "title": "Buoyancy, in one table",
          "rows": [
            { "k": "Buoyant force", "v": "<i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i>, unit N, dimensions [M L T<sup>−2</sup>]" },
            { "k": "Apparent weight", "v": "<i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub>B</sub> = <i>Vg</i>(ρ<sub>b</sub> − ρ<sub>f</sub>), unit N" },
            { "k": "Sinks", "v": "ρ<sub>b</sub> > ρ<sub>f</sub>: weight beats the largest possible upthrust" },
            { "k": "Neutral", "v": "ρ<sub>b</sub> = ρ<sub>f</sub>: floats fully submerged, in equilibrium at any depth" },
            { "k": "Floats", "v": "ρ<sub>b</sub> < ρ<sub>f</sub>: settles with <i>V</i><sub>sub</sub>/<i>V</i> = ρ<sub>b</sub>/ρ<sub>f</sub>, always less than 1" },
            { "k": "Relative density", "v": "RD = ρ<sub>body</sub>/ρ<sub>water</sub> = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>), dimensionless" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ARCHIMEDES AND THE FRACTION SUBMERGED",
          "tag": "fluid density, submerged volume, never the body's own density",
          "main": "<i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i><br>floating: ρ<sub>b</sub><i>Vg</i> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i> ⟹ <i>V</i><sub>sub</sub>/<i>V</i> = ρ<sub>b</sub>/ρ<sub>f</sub>",
          "legend": [
            "ρ<sub>f</sub> = density of the fluid (kg/m<sup>3</sup>), ρ<sub>b</sub> = density of the body (kg/m<sup>3</sup>)",
            "<i>V</i> = total volume of the body (m<sup>3</sup>), <i>V</i><sub>sub</sub> = the part of it below the surface (m<sup>3</sup>), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "the fraction ABOVE the surface is 1 − ρ<sub>b</sub>/ρ<sub>f</sub>, which is where the iceberg's nine tenths comes from"
          ],
          "note": "A floating body can never displace more than its own volume, so the fraction submerged must come out below 1. If it does not, you have inverted the ratio."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · APPARENT WEIGHT AND RELATIVE DENSITY",
          "main": "<i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub>B</sub> = <i>Vg</i>(ρ<sub>b</sub> − ρ<sub>f</sub>)<br>RD = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>)",
          "legend": [
            "<i>W</i> = <i>W</i><sub>air</sub> = the body's true weight (N), <i>W</i><sub>app</sub> = the reading on a spring balance with the body submerged (N)",
            "the LOSS of weight, <i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>, is exactly the buoyant force, so it is the weight of the displaced fluid",
            "<i>V</i> = volume of the body (m<sup>3</sup>); it cancels out of RD entirely, which is why this method needs no volume measurement at all"
          ],
          "note": "This is how a laboratory measures specific gravity, and it is the principle behind the hydrometer, which floats deeper in a less dense liquid and reads density off a calibrated stem."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ARCHIMEDES BY REPLACEMENT, TAP A LINE",
          "steps": [
            {
              "eq": "remove the body and fill the identical boundary with the surrounding fluid",
              "why": "This substituting fluid is now an ordinary part of the bulk fluid, so it is in equilibrium: it neither rises nor sinks."
            },
            {
              "eq": "only two forces act on it: its own weight <i>m</i><sub>f</sub><i>g</i> downward, and the net contact force from all the fluid pressing on its boundary",
              "why": "There is nothing else touching it. Call the net contact force <i>F</i><sub>B</sub> and note it acts through the centroid of the blob."
            },
            {
              "eq": "equilibrium gives <i>F</i><sub>B</sub> = <i>m</i><sub>f</sub><i>g</i> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i>, directed vertically upward",
              "why": "The blob does not move, so the boundary push exactly cancels the blob's weight. That weight is the weight of the displaced fluid, by definition."
            },
            {
              "eq": "now put the real body back inside the same boundary",
              "why": "The surrounding fluid presses on that boundary according to its shape and depth alone, and neither has changed. It genuinely does not know what is inside. So the net contact force is identical, and the buoyant force on ANY body equals the weight of the fluid it displaces."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.4 · THE REPLACEMENT ARGUMENT",
          "chips": ["the real body, pressed on all sides", "the same boundary, filled with fluid"],
          "captions": [
            "The fluid presses inward everywhere on the body's boundary, perpendicular to the surface at each point. The arrows low down are longer because those points are deeper. Add them all up and the sideways pushes cancel while the upward ones win, leaving a net force straight up.",
            "The same boundary, now enclosing an identical blob of the surrounding fluid. That blob hangs in equilibrium, so the boundary push must exactly equal its weight. And the fluid outside cannot tell the difference between the two pictures, which is the whole proof."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[1, 9], [1, 1], [9, 1], [9, 9]], "tone": "ink" },
                { "pts": [[1, 8.4], [1, 1], [9, 1], [9, 8.4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[3.6, 6.4], [5.0, 7.1], [6.5, 6.2], [6.7, 4.5], [5.2, 3.7], [3.7, 4.4]], "close": true, "smooth": true, "fill": "wash", "tone": "ink" }
              ],
              "arrows": [
                { "from": [5.0, 8.2], "to": [5.0, 7.3], "tone": "amber" },
                { "from": [1.9, 5.4], "to": [3.4, 5.4], "tone": "amber" },
                { "from": [8.1, 5.2], "to": [6.8, 5.2], "tone": "amber" },
                { "from": [4.6, 1.6], "to": [4.6, 3.6], "tone": "amber", "label": "bigger", "at": "start" }
              ],
              "labels": [
                { "x": 2.4, "y": 8.9, "text": "deeper, harder push" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[1, 9], [1, 1], [9, 1], [9, 9]], "tone": "ink" },
                { "pts": [[1, 8.4], [1, 1], [9, 1], [9, 8.4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[3.6, 6.4], [5.0, 7.1], [6.5, 6.2], [6.7, 4.5], [5.2, 3.7], [3.7, 4.4]], "close": true, "smooth": true, "dash": true, "tone": "ink" }
              ],
              "arrows": [
                { "from": [4.6, 5.3], "to": [4.6, 2.9], "tone": "ink", "label": "weight", "at": "mid" },
                { "from": [5.8, 5.3], "to": [5.8, 7.7], "tone": "amber", "label": "upthrust", "at": "mid" }
              ],
              "labels": [
                { "x": 2.4, "y": 8.9, "text": "a blob of the fluid" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE LAW OF FLOATATION",
          "steps": [
            {
              "eq": "a floating body: weight <i>W</i> = ρ<sub>b</sub><i>Vg</i> down, buoyancy <i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i> up",
              "why": "Only two vertical forces act, and the body is at rest on the surface, so they must balance."
            },
            {
              "eq": "ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i> = ρ<sub>b</sub><i>Vg</i>",
              "why": "The body sinks only until the fluid it has pushed aside weighs exactly as much as the body itself. At that instant the upward push equals the pull of gravity and it stops sinking."
            },
            {
              "eq": "<i>V</i><sub>sub</sub>/<i>V</i> = ρ<sub>b</sub>/ρ<sub>f</sub>",
              "why": "The <i>g</i> cancels, so the answer is a pure ratio of densities. Since a floater needs ρ<sub>b</sub> < ρ<sub>f</sub>, this fraction is always less than one, which is the built-in sanity check: a body cannot displace more than its own volume."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.5 · A CUBE AT THE OIL-WATER INTERFACE",
          "chips": ["two liquids, two upthrusts"],
          "captions": [
            "The cube's density, 900 kg/m³, sits between the oil's 800 and the water's 1000. Each liquid pushes up on whatever part of the cube lies inside it, and the two upthrusts together carry the weight. Writing 900 = 1000f + 800(1 − f) gives f = 0.5, so exactly half the cube sits in water. That the cube's density is the plain average of the two liquids' is why the split comes out even."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.85,
              "polys": [
                { "pts": [[1, 8.6], [1, 5], [9, 5], [9, 8.6]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[1, 5], [1, 1], [9, 1], [9, 5]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[1, 8.6], [1, 1], [9, 1], [9, 8.6]], "tone": "ink" },
                { "pts": [[4.1, 6.6], [4.1, 3.4], [6.1, 3.4], [6.1, 6.6]], "close": true, "tone": "ink" }
              ],
              "arrows": [
                { "from": [5.1, 3.3], "to": [5.1, 1.5], "tone": "ink", "label": "weight", "at": "mid" },
                { "from": [3.0, 1.7], "to": [3.0, 3.5], "tone": "amber", "label": "upthrust", "at": "mid" }
              ],
              "labels": [
                { "x": 7.2, "y": 7.6, "text": "oil 800 kg/m³" },
                { "x": 7.2, "y": 1.6, "text": "water 1000 kg/m³" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any floating-body problem, in one master line",
          "steps": [
            "<b>Write the master equation before anything else:</b> weight of body = weight of displaced fluid, that is ρ<sub>b</sub><i>V</i> = ρ<sub>f</sub><i>V</i><sub>sub</sub>. This single line handles fraction-submerged, two-liquid and loaded-raft problems alike.",
            "<b>Identify which volume is which.</b> <i>V</i> is the whole body, <i>V</i><sub>sub</sub> is only the part under the surface. If a load is placed on top, its weight joins the left side while its volume does not join the right.",
            "<b>For two liquids, split the right-hand side</b>, one term per liquid, each using its own density and the volume of the body sitting inside it.",
            "<b>Check the fraction.</b> <i>V</i><sub>sub</sub>/<i>V</i> must come out strictly between 0 and 1 for a floater. Above 1 means you flipped the density ratio; exactly 1 means the body is neutrally buoyant and fully submerged.",
            "<b>If the frame accelerates, swap <i>g</i> for <i>g</i><sub>eff</sub> everywhere</b>, in the weight and in the buoyancy at once. Because both terms scale together, the answer to a static question is often unchanged, and only the tensions and reactions move."
          ]
        },
        {
          "t": "proc",
          "title": "Relative density by weighing, with no volume measured",
          "steps": [
            "<b>Weigh the body in air:</b> <i>W</i><sub>air</sub> = ρ<sub>b</sub><i>Vg</i>.",
            "<b>Fully submerge it in water and read the balance again:</b> <i>W</i><sub>app</sub> = (ρ<sub>b</sub> − ρ<sub>w</sub>)<i>Vg</i>.",
            "<b>The LOSS of weight is the buoyant force</b>, ρ<sub>w</sub><i>Vg</i>, which is the weight of the displaced water.",
            "<b>Divide the two:</b> RD = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>) = ρ<sub>b</sub>/ρ<sub>w</sub>. The volume cancels, so you never had to measure it, and that is the whole point of the method."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A solid iron block of volume 500 cm<sup>3</sup> and density 7800 kg/m<sup>3</sup> is fully submerged in water. Find its weight in air, the buoyant force on it, and its apparent weight. Take ρ<sub>w</sub> = 1000 kg/m<sup>3</sup> and <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Convert first: <i>V</i> = 500 cm<sup>3</sup> = 5 × 10<sup>−4</sup> m<sup>3</sup>. Mass = ρ<sub>b</sub><i>V</i> = (7800)(5 × 10<sup>−4</sup>) = 3.9 kg.",
            "Weight in air: <i>W</i> = <i>mg</i> = (3.9)(10) = 39 N.",
            "Buoyancy uses the FLUID's density and the submerged volume, here the whole volume: <i>F</i><sub>B</sub> = (1000)(5 × 10<sup>−4</sup>)(10) = 5 N.",
            "Apparent weight: <i>W</i><sub>app</sub> = 39 − 5 = 34 N. The block still sinks, since ρ<sub>b</sub> > ρ<sub>w</sub>, but it feels lighter by exactly the weight of the water it pushed aside."
          ],
          "ans": "<i>W</i> = 39 N · <i>F</i><sub>B</sub> = 5 N · <i>W</i><sub>app</sub> = 34 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A wooden block floats in water with 75 per cent of its volume submerged. Find the block's density, then find what percentage is submerged when the same block floats in a liquid of relative density 1.2.",
          "steps": [
            "Two traps. The block's density does not change when you change the liquid, only ρ<sub>f</sub> changes. And the question asks for the submerged fraction, not the fraction sticking out.",
            "The submerged fraction is the density ratio: 0.75 = ρ<sub>b</sub>/1000, so ρ<sub>b</sub> = 750 kg/m<sup>3</sup>.",
            "In the denser liquid, ρ<sub>f</sub> = 1200 kg/m<sup>3</sup>: <i>V</i><sub>sub</sub>/<i>V</i> = 750/1200 = 0.625, that is 62.5 per cent.",
            "Sanity check by inspection: a denser liquid needs LESS of the block underwater to generate the same upthrust, so the fraction must fall from 75 per cent. Any answer above 75 per cent is wrong before you check the arithmetic."
          ],
          "ans": "ρ<sub>b</sub> = 750 kg/m<sup>3</sup> · 62.5 per cent submerged"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A cube of density 900 kg/m<sup>3</sup> floats at the interface of two immiscible liquids, oil of density 800 kg/m<sup>3</sup> above and water of density 1000 kg/m<sup>3</sup> below. What fraction of the cube's volume lies in the water?",
          "steps": [
            "Let <i>f</i> be the fraction in water, so 1 − <i>f</i> is the fraction in oil. Each liquid contributes buoyancy on the part of the cube inside it.",
            "Master equation, with the volume <i>V</i> and <i>g</i> common to every term: ρ<sub>b</sub> = ρ<sub>w</sub><i>f</i> + ρ<sub>oil</sub>(1 − <i>f</i>).",
            "900 = 1000<i>f</i> + 800(1 − <i>f</i>) = 800 + 200<i>f</i>, so 200<i>f</i> = 100 and <i>f</i> = 0.5.",
            "Exactly half the cube sits in water. The check is instant: 900 is the plain average of 800 and 1000, so a 50:50 split is exactly what it should be."
          ],
          "ans": "half, <i>f</i> = 0.5"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A cork of volume 100 cm<sup>3</sup> and density 250 kg/m<sup>3</sup> is held submerged at the bottom of a beaker of water by a light string tied to the base. The beaker rides in a lift accelerating upward at 5 m/s<sup>2</sup>. Find the tension in the string. Take ρ<sub>w</sub> = 1000 kg/m<sup>3</sup> and <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "In a frame accelerating upward the effective gravity grows: <i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i> = 15 m/s<sup>2</sup>. Both the buoyancy and the effective weight scale with it, so the whole thing becomes a static problem with <i>g</i> replaced by <i>g</i><sub>eff</sub>.",
            "Three vertical forces on the cork: buoyancy up, effective weight down, and the tension down, because the string ties the cork to the BASE and therefore pulls it downward.",
            "ρ<sub>w</sub><i>Vg</i><sub>eff</sub> = ρ<sub>b</sub><i>Vg</i><sub>eff</sub> + <i>T</i>, so <i>T</i> = <i>Vg</i><sub>eff</sub>(ρ<sub>w</sub> − ρ<sub>b</sub>).",
            "<i>T</i> = (1 × 10<sup>−4</sup>)(15)(1000 − 250) = (1 × 10<sup>−4</sup>)(15)(750) = 1.125 N. Notice the structure: tension scales directly with <i>g</i><sub>eff</sub>, so in free fall, where <i>g</i><sub>eff</sub> = 0, there is no pressure gradient, no buoyancy, and the string simply goes slack."
          ],
          "ans": "<i>T</i> = 1.125 N"
        },
        {
          "t": "mcq",
          "q": "A piece of ice floats in a glass of water. When the ice melts completely, the water level in the glass:",
          "opts": [
            { "label": "rises", "nudge": "This assumes the melt-water is new water arriving. It is not: that water was already accounted for as the volume the floating ice was displacing." },
            { "label": "falls", "nudge": "This half-remembers that ice is less dense than water and expects a drop when it contracts on melting. True of the ICE's own volume, irrelevant to the volume it displaced." },
            { "label": "remains unchanged", "nudge": null },
            { "label": "first rises, then falls", "nudge": "There is no mechanism for a turnaround here; the level simply never moves." }
          ],
          "correct": 2,
          "solution": "A floating ice cube displaces a volume of water whose WEIGHT equals the ice's weight. On melting it becomes exactly that weight of water, which occupies precisely the volume it was already displacing. Watch the variations though: ice with a stone frozen inside it, or ice floating in mercury or brine, do change the level."
        },
        {
          "t": "mcq",
          "q": "Two solid balls of the same volume, one iron and one aluminium, are fully submerged in water. The buoyant force on them is:",
          "opts": [
            { "label": "greater on the iron ball", "nudge": "This reads heavier as more buoyed up, which confuses weight with upthrust. The body's density decides whether it sinks, never how hard it is pushed up." },
            { "label": "greater on the aluminium ball", "nudge": "This puts the body's density into the buoyancy formula, where it does not belong." },
            { "label": "the same on both", "nudge": null },
            { "label": "zero on the denser one", "nudge": "Buoyancy acts on everything submerged in a fluid with a pressure gradient, whatever its density. A sinking body is buoyed up, it just is not buoyed up enough." }
          ],
          "correct": 2,
          "solution": "F_B = ρ_f V_sub g. Same submerged volume in the same water means the identical upthrust; the balls' own densities never enter."
        },
        {
          "t": "mcq",
          "q": "A hydrometer floats in a liquid. Compared with its behaviour in a less dense liquid, in a DENSER liquid it:",
          "opts": [
            { "label": "floats higher, sinking in less far", "nudge": null },
            { "label": "floats lower, sinking in further", "nudge": "This reverses the logic. A denser liquid supplies the same weight of displaced fluid from a smaller volume, so the instrument needs to go in less deep, not more." },
            { "label": "floats at exactly the same level", "nudge": "Then its reading could not depend on density at all, and a hydrometer would be a useless instrument. The submerged depth MUST change to keep the displaced weight fixed." },
            { "label": "sinks completely", "nudge": "This contradicts floating equilibrium; a calibrated hydrometer is designed to float across its whole range." }
          ],
          "correct": 0,
          "solution": "A floating hydrometer always displaces fluid weighing its own fixed weight. In a denser liquid that weight comes from a smaller displaced volume, so it rides higher, and the stem is calibrated to read that off directly."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A stone weighs 5.0 N in air and 3.2 N when fully immersed in water. Find the buoyant force, the volume of the stone, and its relative density. Take <i>g</i> = 10 m/s<sup>2</sup>, ρ<sub>w</sub> = 1000 kg/m<sup>3</sup>.", "a": "<i>F</i><sub>B</sub> = 5.0 − 3.2 = 1.8 N. <i>V</i> = <i>F</i><sub>B</sub>/(ρ<sub>w</sub><i>g</i>) = 1.8/10<sup>4</sup> = 1.8 × 10<sup>−4</sup> m<sup>3</sup>. RD = 5.0/1.8 ≈ 2.78." },
            { "q": "[NEET] An ice cube floats in a glass of water filled to the brim. As the ice melts completely, what happens to the water level, and why in one line?", "a": "It stays the same. The floating ice displaces its own weight of water, and the melt-water is exactly that weight, filling precisely the volume that was displaced." },
            { "q": "[JEE Main] A block of wood of relative density 0.5 and volume 2000 cm<sup>3</sup> floats in water. What minimum mass placed on top just submerges it fully? Take ρ<sub>w</sub> = 1000 kg/m<sup>3</sup>.", "a": "Wood's mass = (500)(2 × 10<sup>−3</sup>) = 1.0 kg. Fully submerged it displaces (1000)(2 × 10<sup>−3</sup>) = 2.0 kg of water. Extra mass needed = 2.0 − 1.0 = 1.0 kg." },
            { "q": "[JEE Main] A body floats in water with one third of its volume above the surface. In another liquid it floats with one quarter above. Find the relative density of the body and of the second liquid.", "a": "Two thirds submerged in water gives RD<sub>body</sub> = 2/3 ≈ 0.667. Three quarters submerged in the liquid gives ρ<sub>b</sub>/ρ<sub>L</sub> = 3/4, so RD<sub>liquid</sub> = (2/3)/(3/4) = 8/9 ≈ 0.889." },
            { "q": "[JEE Advanced] A wooden cylinder of cross-section <i>A</i>, length <i>L</i> and density ρ<sub>b</sub> floats upright in water of density ρ<sub>w</sub>. It is pushed down slightly and released. Show that the restoring force is proportional to the extra depth, and state the period.", "a": "Pushed down by <i>x</i>, the extra submerged volume is <i>Ax</i>, so the extra upthrust is ρ<sub>w</sub><i>Axg</i>, an unbalanced force back toward equilibrium and proportional to <i>x</i>: that is the condition for SHM. With mass ρ<sub>b</sub><i>AL</i>, the period is <i>T</i> = 2π√(ρ<sub>b</sub><i>L</i>/(ρ<sub>w</sub><i>g</i>)), a result you will meet properly in Oscillations." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Putting the BODY's density into the buoyancy formula.</b> It is <i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i>: fluid density, submerged volume. The body's own density decides sink or float and nothing else. This is the single most common buoyancy error in every exam.",
            "<b>Inverting the fraction submerged.</b> It is ρ<sub>b</sub>/ρ<sub>f</sub>, not ρ<sub>f</sub>/ρ<sub>b</sub>. A floater has ρ<sub>b</sub> < ρ<sub>f</sub>, so the answer must come out below 1. Anything above 1 means the body displaces more than its own volume, which is impossible.",
            "<b>Applying the melting-ice rule blindly.</b> Floating ice melting in its own water leaves the level unchanged. Ice with a stone embedded in it, or ice floating on a different liquid such as mercury or brine, genuinely do move the level, so read the variation before quoting the rule.",
            "<b>Forgetting <i>g</i><sub>eff</sub> in an accelerating frame.</b> In a lift, a rotating vessel or free fall, buoyancy scales with the effective gravity, not with <i>g</i>. In free fall <i>g</i><sub>eff</sub> = 0, so a submerged cork stops rising altogether: no pressure gradient, no upthrust.",
            "<b>Assuming buoyancy just because a body is deep.</b> The upthrust comes from fluid pressing on the BOTTOM face. A block sealed flat against the tank floor with no water beneath it has no upward pressure and no buoyancy, which is why a suction-cupped object is so hard to lift off a wet surface."
          ]
        },
        {
          "t": "protip",
          "html": "write \"weight of body = weight of displaced fluid\" as your first line every single time, before you substitute anything. that one sentence covers fraction submerged, two liquids and loaded rafts, and it stops you reaching for the wrong density. for relative density by weighing, remember it as weight in air divided by loss of weight in water, a ratio that never needs a volume. and for a ship or a barge, stability is a separate question from floating: the upthrust acts through the centre of buoyancy, the weight through the centre of gravity, and the body rights itself only when the metacentre sits ABOVE the centre of gravity. a tall slender float with its mass at mid-height, such as a vertical cylindrical buoy, usually fails that test and lies down on its side."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>F</i><sub>B</sub> = ρ<sub>f</sub><i>V</i><sub>sub</sub><i>g</i>", "note": "fluid density, submerged volume, never the body's own density" },
            { "f": "<i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub>B</sub> = <i>Vg</i>(ρ<sub>b</sub> − ρ<sub>f</sub>)", "note": "the loss of weight IS the weight of displaced fluid" },
            { "f": "<i>V</i><sub>sub</sub>/<i>V</i> = ρ<sub>b</sub>/ρ<sub>f</sub>", "note": "always below 1 for a floater, which is the built-in check" },
            { "f": "RD = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>)", "note": "dimensionless, and needs no volume measurement" },
            { "f": "accelerating frame: use <i>g</i><sub>eff</sub>; free fall gives <i>g</i><sub>eff</sub> = 0", "note": "no pressure gradient, so no buoyancy at all" }
          ],
          "aids": [
            "\"buoyancy belongs to the fluid, not to the body\"",
            "\"submerged fraction is the density ratio, body over fluid\"",
            "\"floating ice melts to a draw\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Fluids in Accelerated and Rotating Frames",
      "chip": "03 EFFECTIVE GRAVITY",
      "kalam": "point gravity somewhere else, then use every static rule unchanged",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far assumed the fluid was perfectly still. But fluids usually travel with their container: petrol sloshing in an accelerating tanker, tea tilting in a cup as the train pulls out, water climbing the wall of a spinning bucket. The free surface is no longer flat and the pressure no longer depends on depth alone. Yet one idea handles all of it: replace ordinary gravity with an <b>effective gravity</b> that already contains the acceleration, and every result from Topic 01 works again untouched.<br><br>Start with a tank of water on a cart that accelerates forward. The water lags behind and piles up at the BACK of the tank while the front dips, exactly as you are pressed into your seat when a bus pulls away. Why does the surface settle at one particular angle? Because a liquid surface at rest in its own frame must lie perpendicular to the net effective gravity. Ordinary gravity pulls down with <i>g</i>; in the accelerating frame a pseudo-force pulls backward with <i>a</i> per unit mass. The two combine into <i>g</i><sub>eff</sub> pointing down and backward, and the surface tips to stay square to it, giving tan θ = <i>a</i>/<i>g</i>."
        },
        {
          "t": "think",
          "html": "carry a tray of water and speed up smoothly. the water tilts up at the back, and the harder you accelerate the steeper it gets. accelerate at a = g and the surface would tilt a full 45 degrees, because then the horizontal and vertical pulls are equal. the liquid behaves exactly as if down had been rotated to a new direction, and that is all effective gravity ever means. lock in the benchmark: 45 degrees means a = g."
        },
        {
          "t": "p",
          "html": "Now spin instead of push. Put water in a cylinder and rotate it steadily about its vertical axis. Every parcel of water needs a centripetal force pointing inward to travel its circle, and the only thing available to supply it is a sideways pressure difference, so the pressure has to increase outward. Higher pressure at the rim means the water stands taller there and dips at the centre, and the free surface curves into a <b>paraboloid</b>, the bowl shape you see in a stirred cup of tea. The faster the spin, the deeper the central dip and the higher the rim. This is precisely why liquid-mirror telescopes spin a dish of mercury: rotation sculpts a perfect parabolic reflector for nothing."
        },
        {
          "t": "defgrid",
          "title": "Which effective gravity, and when",
          "rows": [
            { "k": "Horizontal <i>a</i>", "v": "surface tilts, tan θ = <i>a</i>/<i>g</i>; <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>), and the surface is perpendicular to it" },
            { "k": "Upward <i>a</i>", "v": "<i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i>, so pressure at depth <i>h</i> is <i>P</i><sub>0</sub> + ρ(<i>g</i> + <i>a</i>)<i>h</i>" },
            { "k": "Downward <i>a</i>", "v": "<i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i>. Free fall gives <i>g</i><sub>eff</sub> = 0 and no hydrostatic pressure at all" },
            { "k": "Rotation at ω", "v": "radial gradient <i>dP</i>/<i>dr</i> = ρω<sup>2</sup><i>r</i>; the surface is a paraboloid" },
            { "k": "Still fluid", "v": "the special case <i>a</i> = 0, ω = 0, where <i>g</i><sub>eff</sub> = <i>g</i> and Topic 01 applies as written" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A TANK THAT ACCELERATES HORIZONTALLY",
          "tag": "45 degrees means a = g, and nothing else does",
          "main": "tan θ = <i>a</i>/<i>g</i> · <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>)<br>Δ<i>h</i> = <i>L</i> tan θ = <i>aL</i>/<i>g</i>",
          "legend": [
            "θ = angle of the free surface to the horizontal, <i>a</i> = the cart's horizontal acceleration (m/s<sup>2</sup>), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>L</i> = the tank's horizontal length along the direction of motion (m), Δ<i>h</i> = the end-to-end height difference of the surface (m)",
            "horizontal pressure gradient <i>dP</i>/<i>dx</i> = −ρ<i>a</i>, with ρ the fluid density in kg/m<sup>3</sup>: pressure rises toward the rear"
          ],
          "note": "The surface pivots about the tank's centre, because the volume is fixed. So it rises by only Δh/2 at the rear and falls by Δh/2 at the front, which is the number a spill check actually needs."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A SPINNING VESSEL",
          "main": "<i>dP</i>/<i>dr</i> = ρω<sup>2</sup><i>r</i> · <i>y</i>(<i>r</i>) = ω<sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>)<br>rim to centre: Δ<i>h</i> = ω<sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>)",
          "legend": [
            "ω = angular velocity about the vertical axis (rad/s), <i>r</i> = distance from that axis (m), <i>R</i> = the vessel's radius (m)",
            "<i>y</i>(<i>r</i>) = height of the surface above the central vertex (m), ρ = fluid density (kg/m<sup>3</sup>), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "volume conservation: relative to the still level the rim rises by ω<sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) and the centre falls by the same amount"
          ],
          "note": "The rim-to-centre difference and the rise at one end differ by a factor of two. Confusing them is the standard way this formula is misused."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SURFACE TILTS AT tan θ = a/g",
          "steps": [
            {
              "eq": "take a small fluid element of mass <i>m</i> sitting right on the free surface, and work in the accelerating frame",
              "why": "The liquid has settled and moves as a rigid body with the container, so in that frame the element is in equilibrium and nothing is moving relative to anything else."
            },
            {
              "eq": "three influences act: weight <i>mg</i> downward, pseudo-force <i>ma</i> backward, and the normal push from the surrounding fluid",
              "why": "The pseudo-force points OPPOSITE to the acceleration, which is why the liquid rises at the rear rather than the front. Sketch that arrow first and the direction never comes out backwards."
            },
            {
              "eq": "a fluid surface cannot support a force along itself, so the resultant of <i>mg</i> and <i>ma</i> must be perpendicular to the surface",
              "why": "Any component along the surface would make the fluid flow, and we assumed it had stopped flowing. This is the same argument that made pressure act perpendicular to a surface in Topic 01."
            },
            {
              "eq": "tan θ = <i>ma</i>/<i>mg</i> = <i>a</i>/<i>g</i>, and over a tank of length <i>L</i>, Δ<i>h</i> = <i>L</i> tan θ = <i>aL</i>/<i>g</i>",
              "why": "The mass cancels, so the tilt is the same for petrol and for mercury. Notice it also contains no tank size: only the ratio a/g decides the angle, and the length L enters only when you ask for a height."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.6 · THE LIQUID LAGS BEHIND",
          "chips": ["the surface tips backward"],
          "captions": [
            "The cart accelerates to the right, so the liquid piles up at the rear and dips at the front. On a surface element, weight mg pulls down and the pseudo-force ma pulls backward; their resultant must be perpendicular to the surface, which fixes the tilt at tan θ = a/g. The dashed line is the horizontal the angle is measured from."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 8], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[1, 6.5], [1, 1.5], [10, 1.5], [10, 6.5]], "tone": "ink" },
                { "pts": [[1, 5.4], [10, 3.2], [10, 1.5], [1, 1.5]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "segments": [
                { "from": [10, 3.2], "to": [7.4, 3.2], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [10, 3.2], "r": 1.9, "from": 167, "to": 180, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [5.5, 4.3], "to": [5.5, 3.0], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [5.5, 4.3], "to": [4.2, 4.3], "tone": "ink", "label": "ma", "at": "end" },
                { "from": [4.0, 0.7], "to": [7.4, 0.7], "tone": "amber", "label": "a", "at": "below" }
              ],
              "labels": [
                { "x": 2.5, "y": 6.1, "text": "rises at the rear" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A SPINNING SURFACE IS A PARABOLA",
          "steps": [
            {
              "eq": "a fluid element at radius <i>r</i> travels a circle, so it needs a net inward force <i>m</i>ω<sup>2</sup><i>r</i>",
              "why": "The liquid rotates as a rigid body with the vessel, so every parcel goes round at the same angular velocity and needs the centripetal force appropriate to its own radius."
            },
            {
              "eq": "the only source is a pressure difference across it: <i>dP</i>/<i>dr</i> = ρω<sup>2</sup><i>r</i>",
              "why": "Pressure must therefore INCREASE outward, which is already the answer to why the rim stands high and the centre dips."
            },
            {
              "eq": "along the free surface the pressure is constant, so a step <i>dr</i> outward must be paid for by a rise <i>dy</i>: ρ<i>g dy</i> = ρω<sup>2</sup><i>r dr</i>",
              "why": "Move outward and the pressure would rise; to keep the surface at atmospheric everywhere, the surface has to climb by just enough that the extra hydrostatic head cancels it."
            },
            {
              "eq": "integrate from the vertex outward: <i>y</i>(<i>r</i>) = ω<sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>)",
              "why": "The centripetal demand grows linearly with r, and integrating a linear gradient gives a quadratic, so the surface is a paraboloid of revolution rather than a cone or a bowl-shaped arc. The rim-to-vertex height is ω²R²/2g."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.7 · THE SPINNING PARABOLOID",
          "chips": ["low at the centre, high at the rim"],
          "captions": [
            "Spin the vessel about its vertical axis and the surface becomes a paraboloid: lowest at the vertex, highest at the wall. The dashed line is where the liquid stood at rest. Because the volume cannot change, the rim rises above that line by exactly as much as the centre falls below it, so each is ω²R²/4g while the full rim-to-vertex difference is ω²R²/2g."
          ],
          "frames": [
            {
              "x": [-6, 6], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[-4, 9], [-4, 1], [4, 1], [4, 9]], "tone": "ink" },
                { "pts": [[-4, 6.5], [-3, 4.75], [-2, 3.5], [-1, 2.75], [0, 2.5], [1, 2.75], [2, 3.5], [3, 4.75], [4, 6.5]], "smooth": true, "tone": "amber" }
              ],
              "segments": [
                { "from": [-4, 4.5], "to": [4, 4.5], "dash": true, "soft": true, "label": "rest level", "at": "start" }
              ],
              "arrows": [
                { "from": [5.1, 2.5], "to": [5.1, 6.5], "head": "both", "tone": "amber", "label": "Δh", "at": "mid" }
              ],
              "labels": [
                { "x": 0, "y": 8.6, "text": "spinning at ω" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "An accelerating tank, tilt and spill check",
          "steps": [
            "<b>Find the angle from tan θ = <i>a</i>/<i>g</i>.</b> It does not depend on the tank's size, on how much liquid is in it, or on what the liquid is.",
            "<b>Get the end-to-end difference from Δ<i>h</i> = <i>L</i> tan θ</b>, using the horizontal length along the direction of the acceleration.",
            "<b>Halve it for the spill check.</b> The volume is fixed, so the surface pivots about the middle: the rear rises by Δ<i>h</i>/2 and the front falls by the same. Adding the whole Δ<i>h</i> to the original level over-predicts a spill every time.",
            "<b>Compare the new rear level with the wall height.</b> Equal means on the verge; higher means it spills, and the question usually wants the acceleration at which that first happens.",
            "<b>For a spinning vessel, do the same halving.</b> The rim-to-centre gap is ω<sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>), but relative to the ORIGINAL level the rim rises only ω<sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>), which is the number that decides whether the vessel overflows or the bottom is exposed."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A tanker truck carrying diesel accelerates uniformly along a straight horizontal road at 3.0 m/s<sup>2</sup>. Find the angle the free surface of the diesel makes with the horizontal. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The surface sets itself perpendicular to the effective gravity, which gives tan θ = <i>a</i>/<i>g</i>.",
            "tan θ = 3.0/10 = 0.30.",
            "θ = tan<sup>−1</sup>(0.30) ≈ 16.7°. The surface rises toward the REAR of the tanker, because the diesel lags behind the acceleration.",
            "Notice what did not appear: the tanker's length, the amount of diesel, and the density of diesel. None of them can change the angle."
          ],
          "ans": "θ ≈ 16.7°, higher at the rear"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A beaker of water rests on a cart that accelerates horizontally. The water surface is seen to make 45° with the horizontal. What is the cart's acceleration? Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The trap here is over-thinking it. The angle depends only on <i>a</i>/<i>g</i>, not on the beaker's size or shape, nor on how much water it holds.",
            "tan 45° = 1, so <i>a</i> = <i>g</i> tan 45° = 10 m/s<sup>2</sup>.",
            "Anchor the benchmark permanently: 45° means the horizontal and vertical pulls are equal, so <i>a</i> = <i>g</i>. Anything steeper needs <i>a</i> > <i>g</i>, and at that tilt <i>g</i><sub>eff</sub> = √2 <i>g</i>."
          ],
          "ans": "<i>a</i> = 10 m/s<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "An open rectangular tank 2.0 m long is filled with water to a depth of 1.0 m; the walls are 1.2 m tall. The tank is accelerated horizontally along its length at 2.0 m/s<sup>2</sup>. Find the end-to-end height difference of the water, and decide whether it spills. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "tan θ = <i>a</i>/<i>g</i> = 2.0/10 = 0.20.",
            "Δ<i>h</i> = <i>L</i> tan θ = (2.0)(0.20) = 0.40 m from one end to the other.",
            "The volume is conserved, so the surface pivots about the centre: the rear rises by Δ<i>h</i>/2 = 0.20 m and the front falls by 0.20 m.",
            "The rear level becomes 1.0 + 0.20 = 1.20 m, which exactly reaches the 1.2 m wall. It is on the verge of spilling and does not. Any larger acceleration would. Note that using the whole 0.40 m would have wrongly predicted an overflow."
          ],
          "ans": "Δ<i>h</i> = 0.40 m · rear level 1.20 m, exactly on the verge, no spill"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A cylindrical vessel of radius <i>R</i> = 10 cm holds water to a height <i>H</i> = 20 cm at rest. It is spun steadily about its vertical axis. Find the angular velocity at which the water at the centre just uncovers the bottom, and the height of water at the rim then. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Volume conservation first. With the vertex at height <i>z</i><sub>0</sub> above the base, the paraboloid's mean height over the base is <i>z</i><sub>0</sub> + ω<sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>), and that mean must still equal <i>H</i>.",
            "The bottom is just uncovered when <i>z</i><sub>0</sub> = 0, so ω<sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) = <i>H</i>, giving ω = (2/<i>R</i>)√(<i>gH</i>).",
            "ω = (2/0.10)√((10)(0.20)) = 20√2 ≈ 28.3 rad/s.",
            "Rim height with <i>z</i><sub>0</sub> = 0 is the full paraboloid depth: <i>z</i><sub>rim</sub> = ω<sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) = (800)(0.01)/20 = 0.40 m = 40 cm. That is exactly 2<i>H</i>, and it has to be: the mean of the paraboloid must still be <i>H</i>, and for a paraboloid the mean sits halfway between vertex and rim."
          ],
          "ans": "ω ≈ 28.3 rad/s · rim height 40 cm, which is 2<i>H</i>"
        },
        {
          "t": "mcq",
          "q": "A tank of water accelerates horizontally to the right. Its free surface:",
          "opts": [
            { "label": "stays horizontal", "nudge": "This ignores the acceleration entirely. A flat surface would mean no net horizontal force on any surface element, which cannot be true while the tank is accelerating." },
            { "label": "rises at the front, falls at the rear", "nudge": "This is the direction reversed, and it is the commonest slip in the topic. The water LAGS the motion, so it heaps up behind, exactly as you are pressed back into your seat." },
            { "label": "rises at the rear, falls at the front", "nudge": null },
            { "label": "becomes vertical", "nudge": "A vertical surface would need tan θ infinite, that is an infinite acceleration. No finite a can do it." }
          ],
          "correct": 2,
          "solution": "The pseudo-force points backward, opposite to the acceleration, so the surface tilts with tan θ = a/g and stands higher at the back. Sketch the pseudo-force arrow first and the direction comes out right every time."
        },
        {
          "t": "mcq",
          "q": "A beaker of liquid is in free fall. The pressure at a depth <i>h</i> inside the liquid is:",
          "opts": [
            { "label": "<i>P</i><sub>0</sub> + ρ<i>gh</i>", "nudge": "That is the static result, for a beaker sitting on a table. In free fall the whole ρgh term is the thing that vanishes." },
            { "label": "<i>P</i><sub>0</sub>", "nudge": null },
            { "label": "ρ<i>gh</i>", "nudge": "This drops the atmospheric term instead of the hydrostatic one, exactly the wrong way round, and would also make the surface pressure zero." },
            { "label": "zero everywhere", "nudge": "This assumes even the atmosphere switches off. The air outside is not falling with the beaker in any relevant sense; it still presses down with P₀." }
          ],
          "correct": 1,
          "solution": "Free fall gives g_eff = g − g = 0, so there is no pressure variation with depth at all and every point in the liquid sits at the surface pressure P₀. Same limiting case that kills buoyancy in Topic 02."
        },
        {
          "t": "mcq",
          "q": "A container of water accelerates horizontally so that its free surface makes 45° with the horizontal. The effective gravity in the liquid is:",
          "opts": [
            { "label": "<i>g</i>", "nudge": "This ignores the horizontal contribution altogether. If g_eff were still g, the surface would have stayed flat." },
            { "label": "√2 <i>g</i>", "nudge": null },
            { "label": "2<i>g</i>", "nudge": "This adds the two magnitudes arithmetically. They are perpendicular, so they combine by Pythagoras, not by addition." },
            { "label": "<i>g</i>/√2", "nudge": "This inverts the relation. Adding a second perpendicular pull can only make the effective gravity larger than g, never smaller." }
          ],
          "correct": 1,
          "solution": "At 45° the tilt gives a = g, so g_eff = √(a² + g²) = √(g² + g²) = √2 g. Perpendicular components combine by Pythagoras."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A container of water accelerates horizontally at 5.0 m/s<sup>2</sup>. Find the angle the free surface makes with the horizontal. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "tan θ = 5.0/10 = 0.50, so θ = tan<sup>−1</sup>(0.5) ≈ 26.6°, higher at the rear." },
            { "q": "[NEET] A liquid in a beaker rides a lift accelerating DOWNWARD at 4.0 m/s<sup>2</sup>. Compared with the lift at rest, is the pressure at a fixed depth greater, smaller or unchanged? Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "Smaller. <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i> = 6.0 m/s<sup>2</sup>, so <i>P</i> = <i>P</i><sub>0</sub> + ρ(6.0)<i>h</i> instead of ρ(10)<i>h</i>." },
            { "q": "[JEE Main] A tank 3.0 m long, open at the top, is accelerated horizontally until the free surface makes 30° with the horizontal. Find the acceleration and the end-to-end height difference. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>a</i> = <i>g</i> tan 30° = 10/√3 ≈ 5.8 m/s<sup>2</sup>. Δ<i>h</i> = (3.0)(tan 30°) ≈ 1.7 m, so the rear rises about 0.87 m above the still level." },
            { "q": "[JEE Main] A cylindrical bucket of radius 15 cm is spun about its axis at 10 rad/s. Find the height difference between the liquid at the rim and at the centre. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "Δ<i>h</i> = ω<sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) = (100)(0.0225)/20 = 0.1125 m ≈ 11.3 cm. Relative to the rest level the rim rises only about 5.6 cm." },
            { "q": "[JEE Advanced] A sealed cubical box of side <i>L</i>, completely full of water with no air gap, is accelerated horizontally at <i>a</i> along one edge. Find the pressure difference between the rear-bottom and front-bottom corners.", "a": "There is no free surface to tilt, so only the horizontal gradient acts: <i>dP</i>/<i>dx</i> = −ρ<i>a</i> gives Δ<i>P</i> = ρ<i>aL</i>, higher at the rear. The two corners are at the same depth, so the ρ<i>g</i> term contributes nothing." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Tilting the surface the wrong way.</b> Under forward acceleration the liquid rises at the REAR, not the front. Draw the pseudo-force arrow pointing OPPOSITE to the acceleration before you draw the surface, and the error becomes impossible.",
            "<b>Forgetting that the volume is fixed.</b> The surface pivots about the centre of the tank, so it rises at one end by exactly what it falls at the other. To test for a spill, add only HALF the total difference to the original level.",
            "<b>Using <i>g</i> where <i>g</i><sub>eff</sub> is needed.</b> Once a fluid accelerates, every pressure and depth calculation must use the effective gravity: √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>) for a horizontal push, <i>g</i> ± <i>a</i> for a vertical one, and zero in free fall.",
            "<b>Mixing the two rotating-surface heights.</b> The rim-to-centre difference is ω<sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>), but the rise at the rim above the ORIGINAL level is only ω<sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>). One is twice the other and questions ask for both.",
            "<b>Adding <i>a</i> and <i>g</i> arithmetically for a horizontal push.</b> They are perpendicular, so they combine by Pythagoras. Only a VERTICAL acceleration adds or subtracts directly."
          ]
        },
        {
          "t": "protip",
          "html": "treat every accelerating-fluid question as an ordinary statics question in a rotated or strengthened gravity. tilt your mental \"down\" along g<sub>eff</sub>, measure depth perpendicular to the tilted surface, and P = P<sub>0</sub> + ρg<sub>eff</sub>d works exactly as before. memorise the two benchmarks, tan θ = a/g for a push and Δh = ω²R²/2g for a spin, and most questions collapse to a single substitution. and keep one sanity anchor in your pocket: 45 degrees means a = g, so an answer claiming a steep tilt at a modest acceleration is wrong before you check it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "tan θ = <i>a</i>/<i>g</i>, and Δ<i>h</i> = <i>aL</i>/<i>g</i>", "note": "liquid lags, so it rises at the rear; 45° means a = g" },
            { "f": "<i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>) horizontally, <i>g</i> ± <i>a</i> vertically", "note": "surface always sits perpendicular to <i>g</i><sub>eff</sub>" },
            { "f": "free fall: <i>g</i><sub>eff</sub> = 0", "note": "no pressure gradient, so no hydrostatic pressure and no buoyancy" },
            { "f": "spinning: <i>y</i> = ω<sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>), a paraboloid", "note": "rim-to-centre ω²R²/2g; rim rise above the rest level only ω²R²/4g" },
            { "f": "every static rule survives with <i>g</i> → <i>g</i><sub>eff</sub>", "note": "that substitution is the entire topic in one line" }
          ],
          "aids": [
            "\"liquid lags, so it rises at the rear\"",
            "\"forty-five degrees means a equals g\"",
            "\"spin makes a parabola, and half the difference is the rise\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Fluid Dynamics and Bernoulli's Theorem",
      "chip": "04 BERNOULLI",
      "kalam": "fast and low, slow and high: continuity first, bernoulli second",
      "blocks": [
        {
          "t": "p",
          "html": "Stand on a platform as a fast train rushes past and you feel a distinct tug TOWARD the train. That feels backwards: surely all that rushing air should shove you away. This everyday surprise is the most important idea in the topic, and it is Daniel Bernoulli's: <b>where a fluid moves fast, its pressure is low</b>. The fast-moving air between you and the train is at lower pressure than the still air on your other side, so the higher pressure behind you nudges you forward. That is what the yellow safety line is for."
        },
        {
          "t": "p",
          "html": "Before the why, the how. Picture a queue moving smoothly through a narrow gate: everyone in orderly single file, each person tracing the same path as the one before. That is <b>streamline</b> or steady flow, where the velocity at any fixed point never changes with time and the path a particle traces is a streamline. The tangent to a streamline gives the flow direction there, and two streamlines can never cross, because a particle at the crossing would need two velocities at once. Bundle streamlines together and you have a <b>tube of flow</b>: nothing leaks across its walls, so whatever enters one end leaves the other. Push the fluid too hard and the orderly queue breaks into eddies and swirls, which is <b>turbulent</b> flow."
        },
        {
          "t": "think",
          "html": "think about a garden hose you pinch at the end. the same amount of water per second has to get through the wide part and the pinched part, because water cannot pile up inside or vanish. so where there is less room, the water has to move faster. that is the equation of continuity, Av = constant, and it is why a thumb over the hose end sends the jet across the garden."
        },
        {
          "t": "p",
          "html": "Now close the loop on the train. A flowing fluid carries three kinds of energy per unit volume: <b>pressure energy</b> <i>P</i>, <b>kinetic energy</b> ½ρ<i>v</i><sup>2</sup>, and <b>gravitational potential energy</b> ρ<i>gh</i>. Bernoulli's theorem is nothing but the conservation of energy for a flowing ideal fluid: the sum of the three stays constant along a streamline. Energy can only shuffle between the forms. So on a level pipe, if the fluid speeds up it has bought that kinetic energy with its pressure energy, and the pressure must fall. Faster flow means lower pressure. The fast air beside the train has spent its pressure to buy speed.<br><br>That one principle explains a startling range of things. An aeroplane wing is shaped so the air travels faster over the curved top, so the pressure on top is lower and the higher pressure underneath lifts the wing. A perfume atomizer blows fast air across the mouth of a tube, dropping the pressure there and sucking the liquid up. A spinning cricket ball swings, and a roof is torn off in a storm because the fast wind over it lowers the pressure above while the still air inside pushes up."
        },
        {
          "t": "def",
          "term": "What Bernoulli needs, and the sign of h",
          "html": "Bernoulli's theorem holds only for an <b>ideal fluid</b>: incompressible, so ρ is constant, which is fine for liquids and poor for fast gases; <b>non-viscous</b>, so no internal friction, and real viscosity dissipates energy so the true downstream pressure is LOWER than Bernoulli predicts; <b>steady</b>, not turbulent; and <b>irrotational</b>, with no eddies. It applies along a SINGLE streamline, never between two unconnected ones. Continuity, <i>Av</i> = constant, needs only incompressibility and steadiness, so it is the more broadly valid of the two. One convention to hold: in Bernoulli, <i>h</i> is a height measured UPWARD from a chosen datum, the opposite sign to the DEPTH used in Topic 01's <i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i>. Both are correct in their own place, and mixing them is a sign error waiting to happen."
        },
        {
          "t": "defgrid",
          "title": "The vocabulary of flow",
          "rows": [
            { "k": "Streamline flow", "v": "velocity at each fixed point never changes with time; streamlines never cross" },
            { "k": "Tube of flow", "v": "a bundle of streamlines; no fluid crosses its walls, so what enters must leave" },
            { "k": "Volume flow rate", "v": "<i>Q</i> = <i>Av</i>, unit m<sup>3</sup>/s. Conserved through a pipe; the speed <i>v</i> is not" },
            { "k": "Static pressure", "v": "<i>P</i>, what a gauge moving with the fluid would read, unit Pa" },
            { "k": "Dynamic pressure", "v": "½ρ<i>v</i><sup>2</sup>, the kinetic energy per unit volume, unit Pa" },
            { "k": "Stagnation pressure", "v": "<i>P</i> + ½ρ<i>v</i><sup>2</sup>, the total on a level streamline. Not the same thing as <i>P</i><sub>0</sub>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CONTINUITY AND BERNOULLI",
          "tag": "the second one is energy conservation per unit volume",
          "main": "<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> = <i>Q</i><br><i>P</i> + ½ρ<i>v</i><sup>2</sup> + ρ<i>gh</i> = constant along a streamline",
          "legend": [
            "<i>A</i> = cross-sectional area (m<sup>2</sup>), <i>v</i> = flow speed (m/s), <i>Q</i> = volume flow rate (m<sup>3</sup>/s)",
            "<i>P</i> = static pressure (Pa), ρ = density (kg/m<sup>3</sup>), <i>h</i> = height above the datum (m), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "every one of the three terms has the dimensions of pressure, [M L<sup>−1</sup> T<sup>−2</sup>], which is the fastest check that you have not dropped a ρ or a half"
          ],
          "note": "Divide throughout by ρg and each term becomes a length: pressure head, velocity head and gravitational head, all in metres. That is the head form engineers use."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TORRICELLI, JET RANGE AND REYNOLDS NUMBER",
          "main": "efflux: <i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>))<br>range on the ground: <i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>)), largest when <i>h</i> = <i>H</i>/2<br><i>Re</i> = ρ<i>vD</i>/η",
          "legend": [
            "<i>H</i> = height of the liquid surface above the base (m), <i>h</i> = height of the hole above the base (m), so <i>H</i> − <i>h</i> is the hole's DEPTH below the surface",
            "<i>R</i> = horizontal distance the jet lands from the tank wall (m), and its largest value is exactly <i>H</i>",
            "<i>Re</i> = Reynolds number, dimensionless; <i>D</i> = pipe diameter (m), η = coefficient of viscosity (Pa s), ρ = density (kg/m<sup>3</sup>), <i>v</i> = speed (m/s)"
          ],
          "note": "Roughly, Re below 1000 is streamline and above 2000 is turbulent, with an unstable band between. Efflux speed is the free-fall speed through the hole's depth, so it is v = √(2g × depth) and nothing more exotic."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE EQUATION OF CONTINUITY",
          "steps": [
            {
              "eq": "in a small time Δ<i>t</i> the fluid at section 1 advances <i>v</i><sub>1</sub>Δ<i>t</i>, so the volume entering is <i>A</i><sub>1</sub><i>v</i><sub>1</sub>Δ<i>t</i>",
              "why": "A tube of flow leaks nothing across its walls, so everything that goes in at one end has to come out at the other."
            },
            {
              "eq": "the fluid is incompressible and cannot accumulate, so the volume leaving at section 2 in the same time is identical: <i>A</i><sub>1</sub><i>v</i><sub>1</sub>Δ<i>t</i> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>Δ<i>t</i>",
              "why": "This is conservation of mass, written as conservation of volume because the density never changes."
            },
            {
              "eq": "<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>, so <i>v</i> is proportional to 1/<i>A</i>",
              "why": "Narrow the pipe and the fluid must speed up, by exactly the factor the area shrank. And because area goes as the square of a diameter, a pipe that narrows threefold makes the water go nine times as fast."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.8 · WHERE THE PIPE NARROWS, THE STREAMLINES CROWD",
          "chips": ["same throughput, higher speed"],
          "captions": [
            "The same volume per second crosses every section, so where the area halves the speed doubles. Crowded streamlines are the visual signature of fast flow, and by Bernoulli they are also the signature of low pressure, which is the whole content of a Venturi meter."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 8], "axes": "none", "aspect": 0.55,
              "polys": [
                { "pts": [[1, 6], [5, 6], [7, 4.8], [11, 4.8]], "tone": "ink" },
                { "pts": [[1, 2], [5, 2], [7, 3.2], [11, 3.2]], "tone": "ink" },
                { "pts": [[1, 5.2], [5, 5.2], [7, 4.5], [11, 4.5]], "smooth": true, "tone": "soft" },
                { "pts": [[1, 2.8], [5, 2.8], [7, 3.5], [11, 3.5]], "smooth": true, "tone": "soft" }
              ],
              "arrows": [
                { "from": [1.7, 4], "to": [3.3, 4], "tone": "amber", "label": "v₁", "at": "above" },
                { "from": [8.3, 4], "to": [10.6, 4], "tone": "amber", "label": "v₂", "at": "above" }
              ],
              "labels": [
                { "x": 2.8, "y": 7.0, "text": "wide, area A₁" },
                { "x": 9.2, "y": 1.4, "text": "narrow, area A₂" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BERNOULLI BY WORK AND ENERGY, TAP A LINE",
          "steps": [
            {
              "eq": "let a volume Δ<i>V</i> enter at section 1 and an equal Δ<i>V</i> emerge at section 2, of mass <i>m</i> = ρΔ<i>V</i>",
              "why": "The two volumes are equal by continuity, since the fluid is incompressible and the flow is steady."
            },
            {
              "eq": "work by the pressure behind: <i>P</i><sub>1</sub><i>A</i><sub>1</sub>(<i>v</i><sub>1</sub>Δ<i>t</i>) = <i>P</i><sub>1</sub>Δ<i>V</i>. Work against the pressure ahead: −<i>P</i><sub>2</sub>Δ<i>V</i>",
              "why": "The fluid behind pushes the slug in, doing positive work; the fluid ahead pushes back, doing negative work. Net work by pressure is (P₁ − P₂)ΔV."
            },
            {
              "eq": "gravity does <i>W</i><sub>grav</sub> = −<i>mg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>) as the slug rises",
              "why": "Negative if the slug climbs, positive if it descends. This is the term that vanishes on a level pipe and confuses everyone on a sloping one."
            },
            {
              "eq": "work-energy theorem: (<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>)Δ<i>V</i> − <i>mg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>) = ½<i>mv</i><sub>2</sub><sup>2</sup> − ½<i>mv</i><sub>1</sub><sup>2</sup>",
              "why": "The net work by all forces equals the change in kinetic energy. Now substitute m = ρΔV and divide throughout by ΔV, which turns every term into an energy per unit VOLUME."
            },
            {
              "eq": "<i>P</i><sub>1</sub> + ½ρ<i>v</i><sub>1</sub><sup>2</sup> + ρ<i>gh</i><sub>1</sub> = <i>P</i><sub>2</sub> + ½ρ<i>v</i><sub>2</sub><sup>2</sup> + ρ<i>gh</i><sub>2</sub>",
              "why": "Sections 1 and 2 were arbitrary, so the sum is constant along the streamline. Test it at the limit: set v₁ = v₂ = 0 and it collapses to P₂ − P₁ = ρg(h₁ − h₂), which is exactly Topic 01's depth law. The dynamic result contains the static one, as it must."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.9 · THE THREE ENERGIES, TRADED ALONG A TUBE",
          "chips": ["pressure, speed and height"],
          "captions": [
            "The tube narrows and climbs. Pressure P₁ acting over A₁ pushes the fluid in at the left; P₂ over A₂ resists at the right; and the slug also has to be lifted from h₁ to h₂ above the datum. Every joule the fluid gains as speed or as height it pays for out of pressure, and the sum P + ½ρv² + ρgh comes out the same at both ends."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 9], "axes": "none", "aspect": 0.7,
              "polys": [
                { "pts": [[1, 2], [4, 2], [7, 5], [11, 5]], "tone": "ink" },
                { "pts": [[1, 3.6], [4, 3.6], [7, 6.1], [11, 6.1]], "tone": "ink" }
              ],
              "segments": [
                { "from": [0.6, 1.0], "to": [11.4, 1.0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [0.4, 2.8], "to": [1.7, 2.8], "tone": "amber", "label": "P₁A₁", "at": "above" },
                { "from": [11.6, 5.55], "to": [10.3, 5.55], "tone": "amber" },
                { "from": [2.4, 1.0], "to": [2.4, 2.8], "head": "both", "tone": "ink", "label": "h₁", "at": "mid" },
                { "from": [9.0, 1.0], "to": [9.0, 5.55], "head": "both", "tone": "ink", "label": "h₂", "at": "mid" }
              ],
              "labels": [
                { "x": 5.6, "y": 0.4, "text": "datum" },
                { "x": 9.4, "y": 7.4, "text": "P₂A₂ resists here" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Continuity first, Bernoulli second",
          "steps": [
            "<b>Draw the streamline you will use</b>, and mark the two points on it you know most about. Bernoulli compares two points on ONE streamline, never two unrelated places in the flow.",
            "<b>Use continuity to get the missing speed:</b> <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>. Convert diameters to areas properly, since area goes as the square.",
            "<b>Now write Bernoulli between the two points</b> and cross out whatever the geometry kills. A level pipe kills both ρ<i>gh</i> terms; two points open to the atmosphere kill both <i>P</i> terms; a large tank makes the surface speed effectively zero.",
            "<b>Solve for the one unknown that is left.</b> Doing the two steps in this order turns almost every Venturi, nozzle and efflux problem into two clean substitutions.",
            "<b>Sanity check the direction.</b> Faster always means lower static pressure on a level pipe. If your narrow section came out at higher pressure, a sign or a ½ has gone missing."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Water flows steadily through a horizontal pipe whose diameter narrows from 6 cm to 2 cm. If the water enters the wide section at 2.0 m/s, find its speed in the narrow section.",
          "steps": [
            "Continuity: <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>, and area is proportional to the square of the diameter.",
            "<i>v</i><sub>2</sub> = <i>v</i><sub>1</sub>(<i>d</i><sub>1</sub>/<i>d</i><sub>2</sub>)<sup>2</sup> = (2.0)(6/2)<sup>2</sup> = (2.0)(9) = 18 m/s.",
            "The speed rises ninefold because the diameter shrank threefold. Anyone who writes a factor of 3 has used the diameter ratio where the AREA ratio belongs."
          ],
          "ans": "<i>v</i><sub>2</sub> = 18 m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A large water tank is filled to a liquid height of 20 m. A small hole is drilled in the side wall 5 m above the base. Find the speed at which water leaves the hole. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "The efflux speed depends on the hole's DEPTH BELOW THE FREE SURFACE, not on the tank's full height and not on the hole's height above the ground.",
            "Depth below the surface: <i>H</i> − <i>h</i> = 20 − 5 = 15 m.",
            "<i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>)) = √((2)(10)(15)) = √300 ≈ 17.3 m/s.",
            "Check it against free fall: a stone dropped 15 m arrives at exactly this speed, because Torricelli's law is free fall in disguise. Plugging in 20 gives 20 m/s, too big; plugging in 5 gives 10 m/s, too small. The right answer always sits between."
          ],
          "ans": "≈ 17.3 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Water flows through a horizontal pipe. In the wide section the area is 8 cm<sup>2</sup>, the speed 3.0 m/s and the pressure 2.0 × 10<sup>5</sup> Pa. The pipe narrows to 2 cm<sup>2</sup>. Find the speed and the pressure in the narrow section. Take ρ = 1000 kg/m<sup>3</sup>.",
          "steps": [
            "Continuity first: <i>v</i><sub>2</sub> = <i>v</i><sub>1</sub>(<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>) = (3.0)(8/2) = 12 m/s.",
            "The pipe is horizontal, so both ρ<i>gh</i> terms cancel and Bernoulli reduces to <i>P</i><sub>1</sub> + ½ρ<i>v</i><sub>1</sub><sup>2</sup> = <i>P</i><sub>2</sub> + ½ρ<i>v</i><sub>2</sub><sup>2</sup>.",
            "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> + ½ρ(<i>v</i><sub>1</sub><sup>2</sup> − <i>v</i><sub>2</sub><sup>2</sup>) = 2.0 × 10<sup>5</sup> + (500)(9 − 144).",
            "<i>P</i><sub>2</sub> = 2.0 × 10<sup>5</sup> − 67 500 = 1.325 × 10<sup>5</sup> Pa. The pressure DROPS in the narrow section precisely because the water sped up there, which is Bernoulli's central message confirmed by arithmetic."
          ],
          "ans": "<i>v</i><sub>2</sub> = 12 m/s · <i>P</i><sub>2</sub> = 1.325 × 10<sup>5</sup> Pa"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A cylindrical tank of cross-section <i>A</i> = 1.0 m<sup>2</sup> holds water to a height <i>H</i> = 5.0 m. A small hole of area <i>a</i> = 1.0 cm<sup>2</sup> is opened at the bottom. Find the time for the tank to empty. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "When the level stands at height <i>y</i> above the hole, Torricelli gives the efflux speed √(2<i>gy</i>). The volume leaving per second at the hole equals the rate at which the stored volume shrinks: <i>a</i>√(2<i>gy</i>) = −<i>A dy</i>/<i>dt</i>.",
            "Separate the variables: <i>dy</i>/√<i>y</i> = −(<i>a</i>/<i>A</i>)√(2<i>g</i>) <i>dt</i>, and integrate <i>y</i> from <i>H</i> down to 0 while <i>t</i> runs from 0 to <i>t</i>.",
            "The left side gives [2√<i>y</i>] evaluated between the limits, that is −2√<i>H</i>, so <i>t</i> = (<i>A</i>/<i>a</i>)√(2<i>H</i>/<i>g</i>).",
            "Substituting: <i>A</i>/<i>a</i> = 1.0/(1.0 × 10<sup>−4</sup>) = 10<sup>4</sup>, and √(2<i>H</i>/<i>g</i>) = √((2)(5)/10) = 1 s, so <i>t</i> = 1.0 × 10<sup>4</sup> s ≈ 2.8 hours. The emptying time goes as √<i>H</i>, not <i>H</i>, because the outflow slows as the level falls, and the enormous area ratio is why a small hole drains a big tank so slowly."
          ],
          "ans": "<i>t</i> = (<i>A</i>/<i>a</i>)√(2<i>H</i>/<i>g</i>) = 1.0 × 10<sup>4</sup> s ≈ 2.8 hours"
        },
        {
          "t": "mcq",
          "q": "Water flows through a horizontal pipe of varying cross-section. Where the cross-section is SMALLER, the water's:",
          "opts": [
            { "label": "speed increases and pressure increases", "nudge": "The intuitive but wrong answer, and the central misconception of the topic: fast water feels like it should push harder. That is momentum, not static pressure. Kinetic energy is bought with pressure energy, not added to it." },
            { "label": "speed increases and pressure decreases", "nudge": null },
            { "label": "speed decreases and pressure increases", "nudge": "This gets continuity backwards. A narrower pipe forces the fluid to go FASTER, not slower, or it would have to pile up." },
            { "label": "speed decreases and pressure decreases", "nudge": "Continuity is reversed here too, and the pressure conclusion then follows from a false premise." }
          ],
          "correct": 1,
          "solution": "Continuity, Av = constant, forces the speed up in the narrow section, and Bernoulli on a level pipe then forces the static pressure down to keep the total energy per unit volume fixed."
        },
        {
          "t": "mcq",
          "q": "Two streamlines in a steady flow:",
          "opts": [
            { "label": "always run parallel", "nudge": "Too strong. Streamlines converge and diverge freely; they bunch together exactly where the flow is fast, which is how a flow picture is read." },
            { "label": "can cross at exactly one point", "nudge": "Even one crossing is impossible: the particle at that point would need two velocity directions simultaneously." },
            { "label": "can never cross each other", "nudge": null },
            { "label": "cross only in turbulent flow", "nudge": "Turbulent flow has no well-defined streamlines at all, so there is nothing there to cross. The definition simply stops applying." }
          ],
          "correct": 2,
          "solution": "A streamline's tangent gives the fluid's velocity there. Two crossing streamlines would demand two different velocities at one point in a steady flow, which is impossible."
        },
        {
          "t": "mcq",
          "q": "An aeroplane wing generates lift mainly because:",
          "opts": [
            { "label": "the air below the wing moves faster than the air above", "nudge": "This reverses the speed relationship. Faster air below would give lower pressure below, and the wing would be sucked downward." },
            { "label": "the air above the wing moves faster, lowering the pressure on top", "nudge": null },
            { "label": "the wing is lighter than air", "nudge": "A wing is enormously denser than air; a wing does not float, it is pushed up by a pressure difference." },
            { "label": "engine thrust pushes the wing upward", "nudge": "This confuses thrust, which is horizontal and comes from the engines, with lift, which is vertical and comes from the pressure difference across the wing." }
          ],
          "correct": 1,
          "solution": "The wing is shaped so air travels faster over the curved upper surface. Bernoulli then makes the pressure on top lower than underneath, and the difference across the wing area is the lift."
        },
        {
          "t": "mcq",
          "q": "In a Venturi meter, fluid speeds up through the constricted throat. Compared with the wide section, the pressure at the throat is:",
          "opts": [
            { "label": "higher", "nudge": "This repeats the fast-means-high-pressure error. It also destroys the instrument: a Venturi meter measures flow BY the pressure drop, so there would be nothing to read." },
            { "label": "lower", "nudge": null },
            { "label": "the same", "nudge": "This ignores the speed change entirely, which is the one thing a throat exists to produce." },
            { "label": "zero", "nudge": "The pressure merely decreases; it does not vanish. A real fluid cannot sustain zero absolute pressure without boiling, which is a separate phenomenon called cavitation." }
          ],
          "correct": 1,
          "solution": "The throat has the higher speed by continuity and therefore the lower static pressure by Bernoulli, and it is exactly that pressure drop, read off a manometer, that lets the meter compute the flow rate."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] State Bernoulli's theorem and name the principle it expresses. In a horizontal pipe carrying water, the speed at X is twice that at Y. At which point is the pressure greater, and why in one line?", "a": "It is the conservation of energy per unit volume for an ideal fluid along a streamline: <i>P</i> + ½ρ<i>v</i><sup>2</sup> + ρ<i>gh</i> is constant. The pressure is greater at Y, because Y is the slower point and has spent less of its pressure energy on speed." },
            { "q": "[NEET] Why does the canvas roof of a fast-moving truck bulge UPWARD? Choose and justify: air inside pushes up, fast air outside lowers the pressure above, the fabric expands, or gravity weakens with speed.", "a": "Fast air outside lowers the pressure above the roof. The still air inside the truck is then at the higher pressure and pushes the canvas up, the same mechanism that tears roofs off in a storm." },
            { "q": "[JEE Main] Water flows through a pipe of radius 4 cm at 1.5 m/s. The pipe branches into three identical smaller pipes each of radius 1 cm. Find the speed in each smaller pipe.", "a": "Continuity across the branch: <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = 3<i>A</i><sub>2</sub><i>v</i><sub>2</sub>, so (16)(1.5) = 3(1)<i>v</i><sub>2</sub> and <i>v</i><sub>2</sub> = 8.0 m/s." },
            { "q": "[JEE Main] A tank open to the atmosphere is filled with water to a height of 1.25 m and a small hole is made at the bottom. Find the efflux speed, and the initial volume flow rate if the hole has area 0.5 cm<sup>2</sup>. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>v</i> = √((2)(10)(1.25)) = √25 = 5.0 m/s. <i>Q</i> = <i>av</i> = (0.5 × 10<sup>−4</sup>)(5.0) = 2.5 × 10<sup>−4</sup> m<sup>3</sup>/s." },
            { "q": "[JEE Advanced] A tank of height <i>H</i> stands on the ground, full to the brim. A small hole is drilled in the side wall at height <i>h</i>. Show that the jet lands at <i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>)), and find the <i>h</i> that maximises <i>R</i>.", "a": "Efflux speed <i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>)), horizontal. Falling <i>h</i> takes <i>t</i> = √(2<i>h</i>/<i>g</i>), so <i>R</i> = <i>vt</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>)). The product <i>h</i>(<i>H</i> − <i>h</i>) is largest at <i>h</i> = <i>H</i>/2, giving <i>R</i><sub>max</sub> = <i>H</i>, and holes at <i>h</i> and <i>H</i> − <i>h</i> land in the same place." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing fast fluid means high pressure.</b> The most damaging misconception in the chapter. On a level streamline Bernoulli says the opposite: faster flow means LOWER static pressure, because the kinetic energy was bought with pressure energy. Train yourself to expect the inverse.",
            "<b>Applying Bernoulli where it does not hold.</b> It needs an ideal fluid, incompressible, non-viscous, steady and irrotational, and it compares two points on ONE streamline. For turbulent flow, for a long viscous pipe, or across two unconnected streamlines, it simply fails.",
            "<b>Using the wrong height in an efflux problem.</b> The speed uses the hole's depth BELOW THE FREE SURFACE, √(2<i>g</i>(<i>H</i> − <i>h</i>)), not the tank's total height and not the hole's height above the ground. Locate the free surface before you write anything.",
            "<b>Confusing flow rate with speed.</b> <i>Q</i> = <i>Av</i> is conserved along a pipe; the speed <i>v</i> is not, because it changes wherever <i>A</i> does. When a question says rate of flow, check whether it wants <i>Q</i> in m<sup>3</sup>/s or <i>v</i> in m/s.",
            "<b>Mixing Topic 01's depth with Bernoulli's height.</b> In <i>P</i> = <i>P</i><sub>0</sub> + ρ<i>gh</i>, <i>h</i> points DOWN from the surface. In Bernoulli, <i>h</i> points UP from a datum. Carrying one convention into the other flips the sign on every gravitational term."
          ]
        },
        {
          "t": "protip",
          "html": "two moves, always in this order: continuity first, bernoulli second. continuity hands you the unknown speed, and that speed goes straight into bernoulli for the pressure. and keep the two one-liners ready: \"fast and low, slow and high\" for the speed-pressure trade, and \"efflux is free fall\" so that v = √(2g × depth) needs no rederivation. one more worth having: check every bernoulli line by dimensions before you solve it. all three terms must reduce to a pressure, so a term reading ρv² without the half is still dimensionally fine but a term reading v²/2 without the ρ is not, and that catch takes two seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> = <i>Q</i>", "note": "mass conservation; needs only incompressible and steady flow" },
            { "f": "<i>P</i> + ½ρ<i>v</i><sup>2</sup> + ρ<i>gh</i> = constant", "note": "energy per unit volume, along ONE streamline, ideal fluid only" },
            { "f": "on a level pipe: faster flow means lower pressure", "note": "aerofoil, atomizer, Venturi, Magnus effect, roof blow-off" },
            { "f": "<i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>)) · <i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>))", "note": "efflux is free fall; the range is largest at h = H/2, where R = H" },
            { "f": "<i>Re</i> = ρ<i>vD</i>/η, dimensionless", "note": "below about 1000 streamline, above about 2000 turbulent" }
          ],
          "aids": [
            "\"fast and low, slow and high\"",
            "\"continuity first, bernoulli second\"",
            "\"efflux is free fall through the depth\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Viscosity, Terminal Velocity and Poiseuille Flow",
      "chip": "05 VISCOSITY",
      "kalam": "three forces for a falling sphere, radius to the fourth for a tube",
      "blocks": [
        {
          "t": "p",
          "html": "Pour out a bottle of water and it splashes away instantly. Tip up a jar of honey and it crawls down the side in a slow ribbon. Both are fluids, both flow, but honey resists flowing far more than water does. That internal resistance, the friction WITHIN a fluid that opposes one layer sliding past another, is <b>viscosity</b>. It is fluid friction, and nothing more mysterious than that.<br><br>Here is the picture that makes it precise. Imagine a deep, still river. The water right at the bed is essentially stationary, clinging to it; the water at the surface moves fastest; and in between, each thin horizontal layer slides over the one below, a little faster than its neighbour beneath and a little slower than its neighbour above. That layered sliding sets up a <b>velocity gradient</b>, the change in flow speed per unit distance measured PERPENDICULAR to the flow, written <i>dv</i>/<i>dx</i>."
        },
        {
          "t": "think",
          "html": "picture a thick stack of paper. slide the top sheet sideways and friction drags the sheet below it along a little, which drags the next, and so on down to the bottom sheet that never moves. each sheet goes a bit slower than the one above. a viscous fluid is exactly that stack, with each layer pulling sideways on its neighbours. and notice what a fluid at rest has: no velocity gradient at all, so viscosity is dormant. it only wakes up when something is moving."
        },
        {
          "t": "p",
          "html": "Now drop something through a fluid: a steel pellet through glycerine, a raindrop through air. Three forces act. Its <b>weight</b> pulls down, the <b>buoyant force</b> from Topic 02 pushes up, and the <b>viscous drag</b> pushes up, opposing the motion. The drag grows with speed. So the object speeds up, the drag grows, and at some speed the three forces balance exactly: the net force is zero, the acceleration stops, and it falls thereafter at a constant speed. That steady maximum is the <b>terminal velocity</b>. You already met this idea in Motion in a Straight Line, where the drag was written as an unspecified <i>kv</i> and terminal speed was found by setting <i>a</i> = 0. Here we finally have the real drag law for a small sphere, and the same trick delivers a real number.<br><br>Then flip the picture. Instead of a body moving through still fluid, hold the container still and make the FLUID flow through a thin tube: water through a drip pipe, blood through an artery, ink through a nib. Push harder, meaning a bigger pressure difference, and more flows. Use a longer tube and less flows, because the fluid fights drag over a greater distance. Use a more viscous fluid and less flows. All intuitive. But the fourth factor is the shocker, and it is the whole reason Poiseuille's law is famous: the flow depends on the tube's radius to the FOURTH power."
        },
        {
          "t": "think",
          "html": "why the fourth power and not just the area, r squared? two effects multiply. a wider tube has more cross-section for fluid to cross, and that is one factor of r squared. but in a wider tube the fluid in the middle is also much further from the sticky walls, so on average it moves faster, and that is another factor of r squared. area times average speed gives r to the fourth. halve a tube's radius and the flow drops to one sixteenth, which is why a small narrowing of an artery is so dangerous and a slightly clogged fuel line starves an engine."
        },
        {
          "t": "def",
          "term": "Temperature, and the split that catches everyone",
          "html": "Viscosity depends on temperature, and the two phases behave OPPOSITELY. <b>Liquid viscosity FALLS as temperature rises</b>: heat weakens the cohesive bonds between molecules, which is why warm honey pours easily. <b>Gas viscosity RISES as temperature rises</b>: in a gas the drag comes from molecules diffusing between layers and carrying momentum across, and heating speeds that mixing up. Getting this backwards, or applying one rule to both phases, is the classic error of the topic. Two more limits worth holding: Newton's law <i>F</i> = −η<i>A dv</i>/<i>dx</i> and Poiseuille's law both describe LAMINAR flow and fail once the flow turns turbulent, and Stokes' law holds only for a small smooth sphere moving slowly through a fluid that is effectively unbounded."
        },
        {
          "t": "defgrid",
          "title": "Viscosity, its units and its two laws",
          "rows": [
            { "k": "Coefficient of viscosity", "v": "η = (<i>F</i>/<i>A</i>)/(<i>dv</i>/<i>dx</i>), tangential force per unit area per unit velocity gradient" },
            { "k": "SI unit", "v": "Pa s = N s/m<sup>2</sup>, also called the decapoise or poiseuille. Dimensions [M L<sup>−1</sup> T<sup>−1</sup>]" },
            { "k": "CGS unit", "v": "poise = dyne s/cm<sup>2</sup>. 1 Pa s = 10 poise, so 1 poise = 0.1 Pa s" },
            { "k": "Kinematic viscosity", "v": "ν = η/ρ, unit m<sup>2</sup>/s" },
            { "k": "Stokes' law", "v": "<i>F</i> = 6πη<i>rv</i> on a small sphere of radius <i>r</i> moving slowly at speed <i>v</i>" },
            { "k": "Fluid resistance", "v": "<i>R</i> = Δ<i>P</i>/<i>Q</i> = 8η<i>l</i>/(π<i>r</i><sup>4</sup>), unit Pa s/m<sup>3</sup>, the exact analogue of Ohm's law" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NEWTON'S LAW OF VISCOSITY AND STOKES' DRAG",
          "main": "<i>F</i> = −η<i>A</i>(<i>dv</i>/<i>dx</i>)<br><i>F</i> = 6πη<i>rv</i>",
          "legend": [
            "<i>F</i> = tangential viscous force (N), <i>A</i> = contact area between the layers (m<sup>2</sup>), <i>dv</i>/<i>dx</i> = velocity gradient (per second)",
            "η = coefficient of viscosity (Pa s); the minus sign says the force always OPPOSES the relative motion",
            "in Stokes' law <i>r</i> = the sphere's radius (m) and <i>v</i> = its speed through the fluid (m/s)"
          ],
          "note": "Stokes' law needs a small smooth sphere, a slow speed and an effectively infinite fluid. Outside those limits the drag stops being proportional to v and the formula quietly stops being true."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TERMINAL VELOCITY OF A SPHERE",
          "tag": "goes as the SQUARE of the radius, never the radius or the volume",
          "main": "<i>v</i><sub>t</sub> = (2/9) <i>r</i><sup>2</sup>(ρ<sub>b</sub> − ρ<sub>f</sub>)<i>g</i>/η",
          "legend": [
            "<i>r</i> = radius of the sphere (m), ρ<sub>b</sub> = its density and ρ<sub>f</sub> = the fluid's density (both kg/m<sup>3</sup>)",
            "η = coefficient of viscosity (Pa s), <i>g</i> = 9.8 m/s<sup>2</sup>, and <i>v</i><sub>t</sub> comes out in m/s",
            "the three scalings that answer most ratio questions without arithmetic: <i>v</i><sub>t</sub> goes as <i>r</i><sup>2</sup>, as (ρ<sub>b</sub> − ρ<sub>f</sub>), and as 1/η"
          ],
          "note": "If ρ_b is less than ρ_f the answer comes out negative, and the formula is telling you the truth: the body rises. That is how an air bubble in water is handled, with no separate formula needed."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POISEUILLE'S LAW AND THE VELOCITY PROFILE",
          "main": "<i>Q</i> = πΔ<i>P r</i><sup>4</sup>/(8η<i>l</i>)<br><i>v</i>(<i>s</i>) = Δ<i>P</i>(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)/(4η<i>l</i>), so <i>v</i><sub>avg</sub> = ½<i>v</i><sub>max</sub>",
          "legend": [
            "<i>Q</i> = volume flow rate (m<sup>3</sup>/s), Δ<i>P</i> = pressure difference across the ends (Pa), <i>r</i> = tube radius (m), <i>l</i> = tube length (m), η = viscosity (Pa s)",
            "<i>s</i> = distance from the axis (m), so <i>v</i> is zero at the wall where <i>s</i> = <i>r</i>, and largest on the axis where <i>s</i> = 0",
            "series: <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>. Parallel: 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>, exactly like resistors"
          ],
          "note": "Valid only for steady laminar flow of an incompressible fluid in a long uniform tube with no slip at the wall. For blood, which is a suspension, or for turbulent flow, it is an approximation at best."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TERMINAL VELOCITY FROM THREE FORCES, TAP A LINE",
          "steps": [
            {
              "eq": "list the three: weight (4/3)π<i>r</i><sup>3</sup>ρ<sub>b</sub><i>g</i> down, buoyancy (4/3)π<i>r</i><sup>3</sup>ρ<sub>f</sub><i>g</i> up, drag 6πη<i>rv</i> up",
              "why": "The buoyancy is Topic 02's result applied unchanged, and the drag is Stokes' law. This derivation is a genuine synthesis of two earlier ideas rather than anything new."
            },
            {
              "eq": "at the start <i>v</i> = 0, so the drag is zero and the sphere accelerates; as <i>v</i> grows the drag grows with it",
              "why": "Only the drag term contains v. That is why the balance can be reached at all, and why the terminal condition is a = 0 rather than v = 0."
            },
            {
              "eq": "at terminal speed the net force is zero: (4/3)π<i>r</i><sup>3</sup>ρ<sub>b</sub><i>g</i> = (4/3)π<i>r</i><sup>3</sup>ρ<sub>f</sub><i>g</i> + 6πη<i>rv</i><sub>t</sub>",
              "why": "Group the two volume terms on the right: 6πηr v_t = (4/3)πr³(ρ_b − ρ_f)g. The difference of densities is the effective weight, buoyancy already subtracted."
            },
            {
              "eq": "cancel π<i>r</i> from both sides and use (4/3)/6 = 2/9: <i>v</i><sub>t</sub> = (2/9)<i>r</i><sup>2</sup>(ρ<sub>b</sub> − ρ<sub>f</sub>)<i>g</i>/η",
              "why": "One factor of r cancelled from the drag and three came from the volume, which is where the SQUARE comes from. A sphere of twice the radius reaches four times the terminal speed, not twice."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.10 · THREE FORCES ON A FALLING SPHERE",
          "chips": ["the balance that fixes the speed"],
          "captions": [
            "Weight pulls the sphere down; buoyancy and viscous drag both push up. Only the drag depends on the speed, so as the sphere accelerates the drag climbs until the three exactly cancel. At that instant the acceleration, not the velocity, becomes zero, and the sphere falls at a constant v_t forever after."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[2.5, 9.5], [2.5, 0.5], [7.5, 0.5], [7.5, 9.5]], "tone": "ink" },
                { "pts": [[2.5, 8.8], [2.5, 0.5], [7.5, 0.5], [7.5, 8.8]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[5, 5.9], [5.64, 5.64], [5.9, 5], [5.64, 4.36], [5, 4.1], [4.36, 4.36], [4.1, 5], [4.36, 5.64], [5, 5.9]], "smooth": true, "fill": "wash", "tone": "ink" }
              ],
              "arrows": [
                { "from": [5.0, 4.0], "to": [5.0, 1.6], "tone": "ink", "label": "weight", "at": "mid" },
                { "from": [3.9, 5.9], "to": [3.9, 8.3], "tone": "amber", "label": "buoyancy", "at": "mid" },
                { "from": [6.1, 5.9], "to": [6.1, 8.3], "tone": "amber", "label": "drag", "at": "mid" },
                { "from": [8.7, 5.8], "to": [8.7, 4.0], "tone": "ink", "label": "v", "at": "mid" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · POISEUILLE'S LAW, AND WHY IT IS r TO THE FOURTH",
          "steps": [
            {
              "eq": "assume a power law: <i>Q</i> = <i>k</i>(Δ<i>P</i>/<i>l</i>)<sup>a</sup> η<sup>b</sup> <i>r</i><sup>c</sup>, with <i>k</i> a pure number",
              "why": "The flow rate should depend on the pressure gradient that drives it, the viscosity that resists it, and the radius that sets the geometry. Nothing else is available."
            },
            {
              "eq": "write the dimensions: [L<sup>3</sup> T<sup>−1</sup>] = [M L<sup>−2</sup> T<sup>−2</sup>]<sup>a</sup> [M L<sup>−1</sup> T<sup>−1</sup>]<sup>b</sup> [L]<sup>c</sup>",
              "why": "A pressure gradient is a pressure per length, and the viscosity's dimensions come straight from its own definition, so nothing here is assumed."
            },
            {
              "eq": "match M: 0 = <i>a</i> + <i>b</i>. Match T: −1 = −2<i>a</i> − <i>b</i>. Match L: 3 = −2<i>a</i> − <i>b</i> + <i>c</i>",
              "why": "The first two give a = 1 and b = −1 immediately. Substituting into the third: 3 = −1 + c, so c = 4."
            },
            {
              "eq": "<i>Q</i> = <i>k</i> Δ<i>P r</i><sup>4</sup>/(η<i>l</i>), and a full integration of the parabolic profile fixes <i>k</i> = π/8",
              "why": "The fourth power was not assumed anywhere; it fell out of the dimensional bookkeeping, which is what makes this argument satisfying. Dimensional analysis can never supply the pure number k, and the calculus that does also delivers the velocity profile and the result that the mean speed is half the maximum."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.11 · THE PARABOLIC PROFILE IN A TUBE",
          "chips": ["stuck at the wall, racing on the axis"],
          "captions": [
            "The fluid touching the wall does not move at all, which is the no-slip condition. The speed rises smoothly to a maximum on the axis, and the envelope of the arrows is a parabola: v(s) = ΔP(r² − s²)/(4ηl). Averaged over the cross-section the speed is exactly half the axial maximum, and the local speed equals that average at s = r/√2, about 71 per cent of the way out."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [-3, 3], "axes": "none", "aspect": 0.55,
              "polys": [
                { "pts": [[1, 2], [11, 2]], "tone": "ink" },
                { "pts": [[1, -2], [11, -2]], "tone": "ink" },
                { "pts": [[5, -2], [5.875, -1.5], [6.5, -1], [6.875, -0.5], [7, 0], [6.875, 0.5], [6.5, 1], [5.875, 1.5], [5, 2]], "smooth": true, "tone": "amber" }
              ],
              "arrows": [
                { "from": [5, 1.5], "to": [5.875, 1.5], "tone": "amber" },
                { "from": [5, 1], "to": [6.5, 1], "tone": "amber" },
                { "from": [5, 0.5], "to": [6.875, 0.5], "tone": "amber" },
                { "from": [5, 0], "to": [7, 0], "tone": "amber" },
                { "from": [5, -0.5], "to": [6.875, -0.5], "tone": "amber" },
                { "from": [5, -1], "to": [6.5, -1], "tone": "amber" },
                { "from": [5, -1.5], "to": [5.875, -1.5], "tone": "amber" }
              ],
              "labels": [
                { "x": 2.4, "y": 1.2, "text": "zero at the wall" },
                { "x": 2.4, "y": 0, "text": "fastest on the axis" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any falling-sphere problem",
          "steps": [
            "<b>Write the three-force balance as your first line:</b> weight = buoyancy + drag. Every result in the topic flows out of it, including finding η from a measured speed.",
            "<b>Convert every unit before substituting.</b> Radii in millimetres become metres, and poise becomes Pa s by dividing by ten. A forgotten poise conversion puts the answer out by a factor of exactly ten.",
            "<b>Use the effective weight, not the weight.</b> The driving term is (ρ<sub>b</sub> − ρ<sub>f</sub>), never ρ<sub>b</sub> alone. Dropping buoyancy always overestimates the terminal speed.",
            "<b>For a ratio question, use the scalings instead of the formula.</b> <i>v</i><sub>t</sub> goes as <i>r</i><sup>2</sup>, so most NEET and JEE Main questions need no numbers at all. When drops split or coalesce, first get the new radius from volume conservation, THEN square the ratio."
          ]
        },
        {
          "t": "proc",
          "title": "Tubes in series and in parallel, the circuit analogy",
          "steps": [
            "<b>Give each tube a resistance</b> <i>R</i> = 8η<i>l</i>/(π<i>r</i><sup>4</sup>). Pressure difference plays the part of voltage and volume flow rate the part of current, and the analogy is quantitative, not a metaphor.",
            "<b>End to end is series:</b> the same <i>Q</i> passes through each and the pressure drops add, so <i>R</i><sub>eq</sub> = Σ<i>R</i><sub>i</sub>. Because <i>R</i> goes as 1/<i>r</i><sup>4</sup>, the narrowest tube dominates completely.",
            "<b>Side by side between the same two reservoirs is parallel:</b> each feels the same Δ<i>P</i> and the flows add, so 1/<i>R</i><sub>eq</sub> = Σ(1/<i>R</i><sub>i</sub>).",
            "<b>Finish with <i>Q</i> = Δ<i>P</i>/<i>R</i><sub>eq</sub></b>, and if a share of the pressure drop is wanted, use Δ<i>P</i><sub>i</sub> = <i>QR</i><sub>i</sub> for that tube, exactly as you would for a resistor."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A flat glass plate of area 0.10 m<sup>2</sup> rests on a 2.0 mm layer of glycerine spread over a table, and is dragged horizontally at a steady 0.50 m/s. The coefficient of viscosity of glycerine is 1.5 Pa s. Find the tangential force needed. Assume a uniform velocity gradient and that the glycerine touching the table is stationary.",
          "steps": [
            "The velocity gradient is uniform from the still bottom layer to the moving plate: <i>dv</i>/<i>dx</i> = (0.50 − 0)/(2.0 × 10<sup>−3</sup>) = 250 per second.",
            "Newton's law of viscosity, taking magnitudes: <i>F</i> = η<i>A</i>(<i>dv</i>/<i>dx</i>).",
            "<i>F</i> = (1.5)(0.10)(250) = 37.5 N.",
            "The plate moves steadily, so the applied force exactly balances this viscous force; no net force means no acceleration."
          ],
          "ans": "<i>F</i> = 37.5 N"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A spherical raindrop of radius <i>r</i> falls through air at terminal velocity <i>v</i>. It breaks into 8 identical smaller droplets. Find the terminal velocity of each.",
          "steps": [
            "Two traps: assuming <i>v</i><sub>t</sub> scales with the radius, which would give <i>v</i>/2, or with the volume, which would give <i>v</i>/8. It scales as <i>r</i><sup>2</sup>. And you must find the new radius first.",
            "Volume is conserved: (4/3)π<i>r</i><sup>3</sup> = 8(4/3)π<i>r</i>'<sup>3</sup>, so <i>r</i>'<sup>3</sup> = <i>r</i><sup>3</sup>/8 and <i>r</i>' = <i>r</i>/2.",
            "Since <i>v</i><sub>t</sub> goes as <i>r</i><sup>2</sup>: <i>v</i>' = <i>v</i>(1/2)<sup>2</sup> = <i>v</i>/4.",
            "Eight droplets means the radius halves, because the cube root of 8 is 2, and squaring then quarters the speed. Smaller drops fall slower, which is exactly why a fine mist hangs in the air while big drops plummet."
          ],
          "ans": "<i>v</i>/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A glass sphere of radius 2.0 mm and density 2500 kg/m<sup>3</sup> falls through glycerine of density 1260 kg/m<sup>3</sup> and viscosity 0.83 Pa s. Find the terminal velocity and the viscous drag at that speed, and check the drag against the sphere's apparent weight. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "<i>v</i><sub>t</sub> = (2/9)<i>r</i><sup>2</sup>(ρ<sub>b</sub> − ρ<sub>f</sub>)<i>g</i>/η = (2/9)(4.0 × 10<sup>−6</sup>)(1240)(10)/0.83.",
            "The numerator is (4.0 × 10<sup>−6</sup>)(12 400) = 4.96 × 10<sup>−2</sup>; dividing by 0.83 gives 5.98 × 10<sup>−2</sup>; multiplying by 2/9 gives <i>v</i><sub>t</sub> ≈ 1.33 × 10<sup>−2</sup> m/s.",
            "Stokes drag at that speed: <i>F</i> = 6πη<i>rv</i><sub>t</sub> = 6π(0.83)(2.0 × 10<sup>−3</sup>)(1.33 × 10<sup>−2</sup>) ≈ 4.16 × 10<sup>−4</sup> N.",
            "Apparent weight, that is weight minus buoyancy: (4/3)π<i>r</i><sup>3</sup>(ρ<sub>b</sub> − ρ<sub>f</sub>)<i>g</i> = (4/3)π(8.0 × 10<sup>−9</sup>)(1240)(10) ≈ 4.16 × 10<sup>−4</sup> N. The two agree, which is the force balance confirming itself."
          ],
          "ans": "<i>v</i><sub>t</sub> ≈ 1.33 × 10<sup>−2</sup> m/s · drag ≈ 4.16 × 10<sup>−4</sup> N, equal to the apparent weight"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two capillary tubes are joined end to end. The first has length <i>l</i> and radius <i>r</i>; the second has length <i>l</i> and radius 2<i>r</i>. A pressure difference Δ<i>P</i> is held across the pair. Find the volume flow rate, and the share of the pressure drop that falls across the narrow tube.",
          "steps": [
            "The tubes are in series, so add their fluid resistances. <i>R</i><sub>1</sub> = 8η<i>l</i>/(π<i>r</i><sup>4</sup>) and <i>R</i><sub>2</sub> = 8η<i>l</i>/(π(2<i>r</i>)<sup>4</sup>) = <i>R</i><sub>1</sub>/16, because the radius enters to the fourth power.",
            "<i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub>(1 + 1/16) = (17/16)<i>R</i><sub>1</sub> = 17η<i>l</i>/(2π<i>r</i><sup>4</sup>).",
            "<i>Q</i> = Δ<i>P</i>/<i>R</i><sub>eq</sub> = 2π<i>r</i><sup>4</sup>Δ<i>P</i>/(17η<i>l</i>).",
            "The same <i>Q</i> flows through both, so Δ<i>P</i><sub>1</sub> = <i>QR</i><sub>1</sub> = Δ<i>P</i>(<i>R</i><sub>1</sub>/<i>R</i><sub>eq</sub>) = (16/17)Δ<i>P</i> ≈ 0.94Δ<i>P</i>. Almost the whole pressure drop happens across the narrow tube and the wide one barely resists, exactly as the larger resistor takes the larger share of the voltage in a series circuit."
          ],
          "ans": "<i>Q</i> = 2π<i>r</i><sup>4</sup>Δ<i>P</i>/(17η<i>l</i>) · narrow tube takes 16/17 of Δ<i>P</i>"
        },
        {
          "t": "mcq",
          "q": "As temperature rises, the coefficient of viscosity of a liquid and of a gas respectively:",
          "opts": [
            { "label": "both increase", "nudge": "This applies one rule to both phases, which is the commonest error here. The two mechanisms are different, so the two answers are opposite." },
            { "label": "both decrease", "nudge": "Same mistake in the other direction. A gas has no cohesive network to loosen; its drag comes from molecules crossing between layers, and heating makes that faster." },
            { "label": "the liquid's decreases, the gas's increases", "nudge": null },
            { "label": "the liquid's increases, the gas's decreases", "nudge": "This reverses both. Warm honey pours more easily than cold, which settles the liquid half by direct experience." }
          ],
          "correct": 2,
          "solution": "A liquid's viscosity comes from cohesive bonds, which heating weakens, so η falls. A gas's comes from molecular diffusion carrying momentum between layers, which heating intensifies, so η rises."
        },
        {
          "t": "mcq",
          "q": "Two spheres of the same material, with radii in the ratio 1 : 2, fall through the same viscous liquid. The ratio of their terminal velocities is:",
          "opts": [
            { "label": "1 : 2", "nudge": "This uses v_t proportional to r, forgetting the square. One factor of r cancels against Stokes' drag, but three come from the volume." },
            { "label": "1 : 4", "nudge": null },
            { "label": "1 : 8", "nudge": "This uses v_t proportional to r³, confusing the speed with the volume or the mass." },
            { "label": "2 : 1", "nudge": "This inverts the relationship: the bigger sphere falls faster, not slower." }
          ],
          "correct": 1,
          "solution": "Terminal velocity goes as r², so the ratio is 1² : 2² = 1 : 4. Same material means the density difference is identical, so it cancels."
        },
        {
          "t": "mcq",
          "q": "A small water droplet falls through air at a constant speed. At that instant:",
          "opts": [
            { "label": "gravity exceeds the sum of drag and buoyancy", "nudge": "That describes the ACCELERATING phase, before terminal velocity is reached. Constant speed means the net force is already zero." },
            { "label": "drag plus buoyancy equals the weight", "nudge": null },
            { "label": "drag alone equals the weight", "nudge": "This quietly drops buoyancy. It is a decent approximation in air, where the fluid density is tiny, but it is not exact and it is not what the balance says." },
            { "label": "the droplet has become weightless", "nudge": "The weight is completely unchanged; what has changed is that it is now balanced. Zero net force is not zero weight." }
          ],
          "correct": 1,
          "solution": "Constant speed means zero net force, so the two upward forces, viscous drag and buoyancy, together balance the downward weight. That balance is the definition of terminal velocity, and notice the condition is a = 0, not v = 0."
        },
        {
          "t": "mcq",
          "q": "If a capillary tube's radius is doubled while its length and the pressure difference are unchanged, the volume flow rate becomes:",
          "opts": [
            { "label": "2 times", "nudge": "This uses Q proportional to r, which counts neither of the two r² contributions." },
            { "label": "4 times", "nudge": "This uses the area alone, r². It counts the extra cross-section but forgets that the fluid in a wider tube is also further from the sticky walls and moves faster." },
            { "label": "8 times", "nudge": "This uses r³, which corresponds to no physical factor in the derivation at all." },
            { "label": "16 times", "nudge": null }
          ],
          "correct": 3,
          "solution": "Q goes as r⁴, so doubling the radius multiplies the flow by 2⁴ = 16. Area contributes one r² and the higher average speed contributes the other."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define the coefficient of viscosity and give its SI unit and dimensions. A fluid layer of area 0.20 m<sup>2</sup> feels a viscous force of 0.60 N at a velocity gradient of 15 per second. Find η.", "a": "η is the tangential force per unit area per unit velocity gradient; SI unit Pa s, dimensions [M L<sup>−1</sup> T<sup>−1</sup>]. η = (0.60/0.20)/15 = 3.0/15 = 0.20 Pa s." },
            { "q": "[NEET] The viscosity of a liquid and of a gas are each measured as the temperature is raised. State how each changes, with one line of reasoning.", "a": "The liquid's falls, because heating weakens the cohesive bonds between molecules. The gas's rises, because heating speeds up the molecular diffusion that carries momentum between layers." },
            { "q": "[JEE Main] A steel ball of radius 0.50 mm and density 8000 kg/m<sup>3</sup> falls through oil of density 900 kg/m<sup>3</sup> and viscosity 0.40 Pa s. Find its terminal velocity. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>v</i><sub>t</sub> = (2/9)(2.5 × 10<sup>−7</sup>)(7100)(10)/0.40 = (2/9)(4.4375 × 10<sup>−2</sup>) ≈ 9.9 × 10<sup>−3</sup> m/s." },
            { "q": "[JEE Main] Water flows through a horizontal tube of radius 1.0 mm and length 1.0 m at 2.0 × 10<sup>−6</sup> m<sup>3</sup>/s. Find the pressure difference across it. Take η = 1.0 × 10<sup>−3</sup> Pa s.", "a": "Δ<i>P</i> = 8η<i>lQ</i>/(π<i>r</i><sup>4</sup>) = (8)(10<sup>−3</sup>)(1.0)(2.0 × 10<sup>−6</sup>)/(π × 10<sup>−12</sup>) = 1.6 × 10<sup>−8</sup>/(3.14 × 10<sup>−12</sup>) ≈ 5.1 × 10<sup>3</sup> Pa." },
            { "q": "[JEE Advanced] <i>n</i> identical droplets, each falling at terminal velocity <i>v</i>, coalesce into one large drop. Find its terminal velocity in terms of <i>n</i> and <i>v</i>.", "a": "Volume conservation gives <i>R</i> = <i>n</i><sup>1/3</sup><i>r</i>. Since <i>v</i><sub>t</sub> goes as the square of the radius, <i>v</i><sub>big</sub> = <i>n</i><sup>2/3</sup><i>v</i>. For a thousand droplets that is a hundredfold speed-up." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reversing the temperature dependence.</b> Liquids get LESS viscous when heated, gases get MORE viscous. Anchor it physically: heat loosens a liquid's cohesive grip, but speeds up a gas's molecular mixing, and those are opposite effects on the drag between layers.",
            "<b>Mis-scaling terminal velocity.</b> It goes as <i>r</i><sup>2</sup>, not <i>r</i> and not <i>r</i><sup>3</sup>. When a drop splits or droplets merge, get the new radius from volume conservation FIRST, then square the ratio.",
            "<b>Dropping buoyancy from the terminal-velocity formula.</b> The driving term is the effective weight, (ρ<sub>b</sub> − ρ<sub>f</sub>), not ρ<sub>b</sub> alone. Forgetting it always overestimates <i>v</i><sub>t</sub>, and for an air bubble in water it hides the fact that the answer should come out negative, meaning the bubble RISES.",
            "<b>Using the wrong power of <i>r</i> in Poiseuille's law.</b> Flow goes as <i>r</i><sup>4</sup>, not <i>r</i><sup>2</sup> for area and not <i>r</i><sup>3</sup> for volume. When a question changes the radius, raise the ratio to the fourth power, and expect the answer to be dramatic.",
            "<b>Confusing poise with the SI unit.</b> 1 poise = 0.1 Pa s, and 1 decapoise = 10 poise = 1 Pa s. Convert before substituting or every terminal velocity comes out ten times too big or too small.",
            "<b>Looking for zero velocity at terminal speed, or mean speed where maximum is asked.</b> Terminal speed is where the ACCELERATION vanishes, not the velocity: the body is still moving, steadily. And in a tube the centre-line speed is the maximum while the mean, the one that appears in <i>Q</i> = <i>v</i><sub>avg</sub>π<i>r</i><sup>2</sup>, is exactly half of it."
          ]
        },
        {
          "t": "protip",
          "html": "two habits carry this whole topic. for anything falling, write \"weight = buoyancy + drag\" as line one and never deviate. for anything flowing in a tube, work in ratios with Q proportional to ΔP r⁴/(ηl) and you will almost never have to touch the constants. lock in the scaling triple for terminal velocity, r squared, the density difference, and one over eta, because most ratio questions can be answered from the scalings alone. and remember the resistance analogy is exact, not loose: ΔP is voltage, Q is current, 8ηl/πr⁴ is resistance, and a network of capillaries is a circuit problem you already know how to solve. one more that reassures rather than tests: the flow formula for an annular gap collapses back to the plain pipe result as the inner radius goes to zero, which is the general tool reproducing the special case it generalises."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>F</i> = −η<i>A</i>(<i>dv</i>/<i>dx</i>) · η in Pa s, dimensions [M L<sup>−1</sup> T<sup>−1</sup>]", "note": "1 Pa s = 10 poise; viscosity acts only when layers move relative to each other" },
            { "f": "liquids: η falls with <i>T</i> · gases: η rises with <i>T</i>", "note": "opposite behaviours, from opposite mechanisms" },
            { "f": "<i>F</i> = 6πη<i>rv</i> · <i>v</i><sub>t</sub> = (2/9)<i>r</i><sup>2</sup>(ρ<sub>b</sub> − ρ<sub>f</sub>)<i>g</i>/η", "note": "from weight = buoyancy + drag; goes as r², not r or r³" },
            { "f": "<i>Q</i> = πΔ<i>P r</i><sup>4</sup>/(8η<i>l</i>)", "note": "halve the radius and the flow drops to one sixteenth" },
            { "f": "<i>R</i> = 8η<i>l</i>/(π<i>r</i><sup>4</sup>): add in series, reciprocal-add in parallel", "note": "ΔP is voltage, Q is current; the narrow tube dominates a series pair" },
            { "f": "parabolic profile, <i>v</i><sub>avg</sub> = ½<i>v</i><sub>max</sub>", "note": "zero at the wall by no-slip, largest on the axis" }
          ],
          "aids": [
            "\"liquids loosen, gases gum up\"",
            "\"terminal velocity goes as r squared\"",
            "\"flow goes as radius to the fourth\"",
            "\"poise is small, divide by ten for Pa s\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Surface Tension and Capillarity",
      "chip": "06 SURFACE TENSION",
      "kalam": "count the surfaces first, then check whether the contact angle is zero",
      "blocks": [
        {
          "t": "p",
          "html": "Watch a water strider skate across a pond without sinking. Lay a sewing needle flat on water and it floats, though steel is eight times denser. Rain beads into near-perfect spheres on a waxed car, and water climbs UP the thin stem of a cotton wick against gravity. All of it traces back to one property: <b>surface tension</b>, the tendency of a liquid surface to behave like a stretched elastic membrane that is always trying to shrink to the smallest area it can.<br><br>Where does the skin come from? Molecules in a liquid attract their neighbours. A molecule deep inside is pulled equally in every direction, so the net force on it is zero. But a molecule at the surface has liquid below and beside it and only air above, so with no neighbours pulling up it feels a net INWARD tug. Every surface molecule is pulled toward the bulk, and the surface is squeezed taut like the skin of a drum. To make MORE surface you have to drag molecules from the comfortable interior out to the surface against that pull, and that costs energy. Which is why liquids minimise their surface area, and why a free drop pulls itself into a sphere: a sphere has the least surface area for a given volume."
        },
        {
          "t": "think",
          "html": "picture the surface as a permanently shrinking sheet of stretched rubber. cut an imaginary line anywhere on it and the rubber on each side pulls the other toward itself, along the surface and perpendicular to the line. the force per unit length of that line IS the surface tension. and here is the second face of the same coin: every unit of new area you create stores a fixed amount of energy. force per unit length in N/m and energy per unit area in J/m² are the same number, because they are the same physics counted two ways."
        },
        {
          "t": "p",
          "html": "This one idea grows three branches. First, a curved liquid surface has HIGHER pressure on its concave side: the membrane's inward squeeze has to be balanced by extra pressure inside, which is the <b>excess pressure</b> in drops and bubbles. Second, where a liquid meets a solid, the contest between <b>cohesion</b>, liquid pulling on liquid, and <b>adhesion</b>, liquid pulling on solid, decides the shape of the join, and that shape is measured by the <b>angle of contact</b> θ. Third, in a narrow tube the wall-climbing plus the surface tension drags the whole column up, or for mercury pushes it down, and that is <b>capillarity</b>, which carries water up through soil to plant roots and oil up a lamp wick."
        },
        {
          "t": "think",
          "html": "adhesion versus cohesion decides everything about a meniscus. water on clean glass: adhesion wins, the liquid climbs the wall, the surface curves up into a concave dish, θ is acute, and the tube pulls water up. mercury on glass: cohesion wins, the liquid pulls away from the wall, the surface bulges down into a convex dome, θ is obtuse, and the tube pushes mercury down. one contest, two opposite pictures, and every capillary question is one of the two."
        },
        {
          "t": "def",
          "term": "How many surfaces, and what temperature does",
          "html": "Almost every surface-tension error is a miscount of surfaces. A <b>liquid drop</b> has ONE liquid-air surface, and so does an <b>air bubble inside a liquid</b>: excess pressure 2<i>S</i>/<i>r</i> for both, and work <i>S</i>Δ<i>A</i> to make one. A <b>soap bubble in air</b> and a <b>soap film on a frame</b> have TWO, an inner and an outer: excess pressure 4<i>S</i>/<i>r</i>, and work <i>S</i>(2Δ<i>A</i>). Ask how many surfaces before you write anything. Two more behaviours to hold: surface tension DECREASES as temperature rises, falling to exactly zero at the liquid's critical temperature where the liquid-vapour distinction vanishes; and impurities split, with highly soluble ones such as common salt raising it while sparingly soluble ones such as soap and detergent lower it, which is precisely what makes detergent work."
        },
        {
          "t": "defgrid",
          "title": "Surface tension, in one table",
          "rows": [
            { "k": "Surface tension", "v": "<i>S</i> = <i>F</i>/<i>L</i>, unit N/m, dimensions [M T<sup>−2</sup>]" },
            { "k": "Surface energy", "v": "<i>E</i> = <i>W</i>/Δ<i>A</i>, unit J/m<sup>2</sup>, numerically and dimensionally identical to <i>S</i>" },
            { "k": "Excess pressure", "v": "drop or air bubble in liquid 2<i>S</i>/<i>r</i>; soap bubble in air 4<i>S</i>/<i>r</i>" },
            { "k": "Detaching force", "v": "straight wire of length <i>l</i>: <i>F</i> = 2<i>Sl</i>. Thin ring of radius <i>r</i>: <i>F</i> = 4π<i>rS</i>" },
            { "k": "Angle of contact", "v": "θ < 90° wets, concave meniscus, rise. θ > 90° does not wet, convex meniscus, depression. θ falls as <i>T</i> rises" },
            { "k": "Meniscus radius", "v": "<i>R</i> = <i>r</i>/cos θ, equal to the tube radius <i>r</i> only when θ = 0" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SURFACE TENSION AND SURFACE ENERGY",
          "tag": "one number, two ways of counting it",
          "main": "<i>S</i> = <i>F</i>/<i>L</i> = <i>W</i>/Δ<i>A</i><br>film or soap bubble: <i>W</i> = <i>S</i>(2Δ<i>A</i><sub>geom</sub>) · drop: <i>W</i> = <i>S</i>Δ<i>A</i>",
          "legend": [
            "<i>S</i> = surface tension (N/m, which is the same as J/m<sup>2</sup>), <i>F</i> = force along the surface (N), <i>L</i> = length of the line it acts across (m)",
            "<i>W</i> = work done to create new surface (J), Δ<i>A</i><sub>geom</sub> = the increase in GEOMETRIC area (m<sup>2</sup>)",
            "the factor of 2 is not a fudge: a film and a soap bubble genuinely have two liquid-air faces, so making 1 m<sup>2</sup> of film creates 2 m<sup>2</sup> of surface"
          ],
          "note": "For a soap bubble of radius r blown from nothing, the geometric area is 4πr², so the surface created is 8πr² and the work is 8πr²S. A drop of the same radius costs exactly half."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EXCESS PRESSURE INSIDE A CURVED SURFACE",
          "main": "liquid drop, or air bubble in a liquid: Δ<i>P</i> = 2<i>S</i>/<i>r</i><br>soap bubble in air: Δ<i>P</i> = 4<i>S</i>/<i>r</i>",
          "legend": [
            "Δ<i>P</i> = pressure inside minus pressure outside (Pa), <i>S</i> = surface tension (N/m), <i>r</i> = radius of the drop or bubble (m)",
            "the concave side always carries the higher pressure, which is what makes small bubbles harder to blow than big ones",
            "the only difference between the two lines is the COUNT of surfaces, one against two"
          ],
          "note": "Excess pressure goes as 1/r, so a smaller bubble holds the higher pressure. Join two soap bubbles and air flows from the small one into the large one, which is why the common film always bulges into the bigger bubble."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CAPILLARY RISE, JURIN'S LAW",
          "tag": "narrower tube, higher climb",
          "main": "<i>h</i> = 2<i>S</i> cos θ/(<i>r</i>ρ<i>g</i>) = 2<i>S</i>/(<i>R</i>ρ<i>g</i>)",
          "legend": [
            "<i>h</i> = height risen above the outside level (m), <i>S</i> = surface tension (N/m), θ = angle of contact",
            "<i>r</i> = the TUBE's radius (m), <i>R</i> = <i>r</i>/cos θ = the MENISCUS's radius of curvature (m), ρ = liquid density (kg/m<sup>3</sup>), <i>g</i> = 9.8 m/s<sup>2</sup>",
            "<i>h</i> goes as 1/<i>r</i>: halve the tube's radius and the liquid climbs twice as high"
          ],
          "note": "For mercury on glass θ is about 135°, so cos θ is negative and h comes out negative: a depression, not a rise. The formula handles both cases without any change of sign by hand."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY SURFACE TENSION EQUALS SURFACE ENERGY",
          "steps": [
            {
              "eq": "a soap film on a U-frame with a sliding wire of length <i>l</i> pulls that wire inward with <i>F</i> = <i>S</i>(2<i>l</i>)",
              "why": "The factor 2 is the film's two faces, front and back, each pulling along the wire's whole length."
            },
            {
              "eq": "pull the wire out slowly through a small distance <i>x</i>: work done <i>W</i> = <i>Fx</i> = 2<i>Slx</i>",
              "why": "Slowly, so no kinetic energy is created and all the work goes into the film. Every joule is stored as the potential energy of the newly made surface."
            },
            {
              "eq": "the new area created, counting both faces, is Δ<i>A</i> = 2<i>lx</i>",
              "why": "The frame widens by x and the film is l wide, so each face gains lx of area. The film has two faces, hence 2lx."
            },
            {
              "eq": "energy conservation: 2<i>Slx</i> = <i>E</i>(2<i>lx</i>), so <i>E</i> = <i>S</i>",
              "why": "The energy stored per unit of new area equals the surface tension, numerically and dimensionally: [M T⁻²] either way. Force per unit length and energy per unit area are two ways of counting the same thing."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.12 · THE SLIDING WIRE, AND THE FACTOR OF TWO",
          "chips": ["a film has two faces"],
          "captions": [
            "A soap film spans a U-frame with a sliding wire. The film pulls that wire inward with F = 2Sl, the 2 being its front and back faces. Pull the wire out by x, against that force, and the work 2Slx is stored as the energy of the 2lx of new surface, which is why surface tension in N/m and surface energy in J/m² are the same number."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 8], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[7, 6.5], [2, 6.5], [2, 1.5], [7, 1.5]], "tone": "ink" },
                { "pts": [[2, 6.5], [2, 1.5], [5, 1.5], [5, 6.5]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[5, 6.5], [5, 1.5]], "tone": "ink" },
                { "pts": [[6.6, 6.5], [6.6, 1.5]], "dash": true, "tone": "soft" }
              ],
              "arrows": [
                { "from": [5.0, 4.7], "to": [3.6, 4.7], "tone": "amber", "label": "F = 2Sl", "at": "above" },
                { "from": [5.0, 2.5], "to": [6.6, 2.5], "head": "both", "tone": "ink", "label": "x", "at": "below" }
              ],
              "labels": [
                { "x": 3.4, "y": 7.3, "text": "soap film, two faces" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · EXCESS PRESSURE INSIDE A SOAP BUBBLE",
          "steps": [
            {
              "eq": "cut a spherical soap bubble of radius <i>R</i> into two hemispheres and consider one of them",
              "why": "Cutting turns a question about a curved surface into a question about forces across one flat circle, which is a balance you can actually write down."
            },
            {
              "eq": "surface tension holds the halves together around the circumference 2π<i>R</i>, for EACH of the two surfaces: <i>F</i><sub>ST</sub> = 2(2π<i>R</i>)<i>S</i> = 4π<i>RS</i>",
              "why": "An inner surface and an outer surface, each pulling along the whole rim. This is where the bubble's factor of two enters and it is the only difference from a drop."
            },
            {
              "eq": "the excess pressure pushes the halves apart over the projected circular area π<i>R</i><sup>2</sup>: <i>F</i><sub>P</sub> = Δ<i>P</i>(π<i>R</i><sup>2</sup>)",
              "why": "Only the projected area matters, because every element of pressure force on the hemisphere points along its own radius and only the component across the cut survives the sum."
            },
            {
              "eq": "equilibrium: Δ<i>P</i>(π<i>R</i><sup>2</sup>) = 4π<i>RS</i>, so Δ<i>P</i> = 4<i>S</i>/<i>R</i>",
              "why": "Otherwise the bubble would expand or collapse. For a liquid DROP, with only one surface, the tension force halves to 2πRS and the answer becomes 2S/R. The factor of two between them is purely a count of surfaces, nothing else."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.13 · THE BUBBLE, CUT IN HALF",
          "chips": ["tension pulling in, pressure pushing out"],
          "captions": [
            "Slice the bubble across a diameter. Around the rim, surface tension pulls the two halves together with 4πRS, twice the circumference times S because there are two faces. Across the flat circle, the excess pressure pushes them apart with ΔP times πR². Setting the two equal gives ΔP = 4S/R for a soap bubble, and 2S/R for a drop, which has only one face."
          ],
          "frames": [
            {
              "x": [-6, 6], "y": [-5, 5], "axes": "none", "aspect": 0.8,
              "curves": [
                { "c": "circle", "r": 3.5 },
                { "c": "circle", "r": 3.2, "soft": true }
              ],
              "segments": [
                { "from": [-3.5, 0], "to": [3.5, 0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-3.5, 1.0], "to": [-3.5, -0.4], "tone": "amber" },
                { "from": [3.5, 1.0], "to": [3.5, -0.4], "tone": "amber", "label": "4πRS", "at": "start" },
                { "from": [-1.5, -0.4], "to": [-1.5, 1.1], "tone": "ink" },
                { "from": [0, -0.4], "to": [0, 1.1], "tone": "ink", "label": "ΔP", "at": "end" },
                { "from": [1.5, -0.4], "to": [1.5, 1.1], "tone": "ink" }
              ],
              "labels": [
                { "x": 0, "y": 4.2, "text": "inner and outer face" },
                { "x": 0, "y": -4.4, "text": "cut across a diameter" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CAPILLARY RISE, JURIN'S LAW",
          "steps": [
            {
              "eq": "a wetting liquid climbs the tube wall, so the meniscus inside is concave, a spherical cap of radius <i>R</i> = <i>r</i>/cos θ",
              "why": "The tube radius r and the meniscus radius R are different things unless θ = 0. Confusing them is the standard slip in this derivation."
            },
            {
              "eq": "just below a concave meniscus the pressure is LOWER than atmospheric by 2<i>S</i>/<i>R</i>: it is <i>P</i><sub>0</sub> − 2<i>S</i>/<i>R</i>",
              "why": "The concave side of a curved surface carries the higher pressure, and here the concave side is the air above. So the liquid just underneath sits below atmospheric."
            },
            {
              "eq": "outside the tube, just below the flat surface, the pressure is <i>P</i><sub>0</sub>, and the two points are at the same level in one connected liquid",
              "why": "Topic 01's rule: same level in one connected fluid means same pressure. The two do not match, so the liquid is not in equilibrium and must move."
            },
            {
              "eq": "liquid rises until the raised column's own weight makes up the deficit: ρ<i>gh</i> = 2<i>S</i>/<i>R</i> = 2<i>S</i> cos θ/<i>r</i>, so <i>h</i> = 2<i>S</i> cos θ/(<i>r</i>ρ<i>g</i>)",
              "why": "Jurin's law. Since h goes as 1/r, the narrower the tube the higher the climb. And for mercury on glass, θ is obtuse, cos θ is negative, and h comes out negative, which is the depression you actually see."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 9.14 · TWO MENISCI, TWO OUTCOMES",
          "chips": ["water wets glass", "mercury does not"],
          "captions": [
            "Adhesion beats cohesion, so water climbs the glass wall and the meniscus is concave. The pressure just under that curved surface is below atmospheric, and liquid is drawn up the tube until the weight of the raised column ρgh makes up the difference. The contact angle θ is acute, close to zero for clean glass.",
            "Cohesion beats adhesion, so mercury pulls away from the glass and the meniscus bulges upward, convex. Now the pressure just under the surface is ABOVE atmospheric, so mercury is pushed DOWN the tube instead of up. The contact angle is obtuse, about 135°, and Jurin's law returns a negative h all by itself."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[1, 6], [1, 1], [9, 1], [9, 6]], "tone": "ink" },
                { "pts": [[1, 4], [1, 1], [9, 1], [9, 4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4.6, 9], [4.6, 1.6]], "tone": "ink" },
                { "pts": [[5.4, 9], [5.4, 1.6]], "tone": "ink" },
                { "pts": [[4.6, 7], [4.6, 1.6], [5.4, 1.6], [5.4, 7]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[4.6, 7], [5.0, 6.7], [5.4, 7]], "smooth": true, "tone": "ink" }
              ],
              "arcs": [
                { "at": [4.6, 7], "r": 0.9, "from": 272, "to": 322, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [6.6, 4], "to": [6.6, 7], "head": "both", "tone": "amber", "label": "h", "at": "mid" }
              ],
              "labels": [
                { "x": 2.4, "y": 8.4, "text": "concave, it climbs" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[1, 6], [1, 1], [9, 1], [9, 6]], "tone": "ink" },
                { "pts": [[1, 4], [1, 1], [9, 1], [9, 4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4.6, 9], [4.6, 1.6]], "tone": "ink" },
                { "pts": [[5.4, 9], [5.4, 1.6]], "tone": "ink" },
                { "pts": [[4.6, 2.6], [4.6, 1.6], [5.4, 1.6], [5.4, 2.6]], "close": true, "fill": "wash", "tone": "amber" },
                { "pts": [[4.6, 2.6], [5.0, 2.95], [5.4, 2.6]], "smooth": true, "tone": "ink" }
              ],
              "arcs": [
                { "at": [4.6, 2.6], "r": 0.9, "from": 200, "to": 268, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [6.6, 2.6], "to": [6.6, 4], "head": "both", "tone": "amber", "label": "h", "at": "mid" }
              ],
              "labels": [
                { "x": 2.4, "y": 8.4, "text": "convex, it is pushed down" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The two-second checklist, before any calculation",
          "steps": [
            "<b>How many surfaces?</b> One for a liquid drop or an air bubble inside a liquid; two for a soap film or a soap bubble in air. This single question decides between 2<i>S</i>/<i>r</i> and 4<i>S</i>/<i>r</i>, and between <i>S</i>Δ<i>A</i> and 2<i>S</i>Δ<i>A</i>.",
            "<b>Is the angle of contact zero?</b> If it is, the tube radius and the meniscus radius are the same number and you can use either. If it is not, keep <i>r</i> and <i>R</i> = <i>r</i>/cos θ strictly apart.",
            "<b>Is the question a ratio?</b> If so, lean on Δ<i>P</i> going as 1/<i>r</i> and <i>h</i> going as 1/<i>r</i>, and you can often answer without ever computing <i>S</i>.",
            "<b>If volume is conserved, find the new radius first.</b> Splitting one drop into <i>n</i> gives <i>r</i>' = <i>r</i>/<i>n</i><sup>1/3</sup>; merging <i>n</i> into one gives <i>R</i> = <i>n</i><sup>1/3</sup><i>r</i>. Only then compute the change in total area.",
            "<b>Check the sign at the end.</b> A wetting liquid rises and a non-wetting one is depressed. If you got a negative rise for water on clean glass, the cosine went in with the wrong sign."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Calculate the work done in blowing a soap bubble of radius 3.0 cm, starting from a negligible initial size. The surface tension of the soap solution is 0.030 N/m.",
          "steps": [
            "A soap bubble has TWO surfaces, so the area created is twice the geometric sphere area: Δ<i>A</i> = 2(4π<i>r</i><sup>2</sup>) = 8π<i>r</i><sup>2</sup>.",
            "Δ<i>A</i> = 8π(0.030)<sup>2</sup> = 8π(9.0 × 10<sup>−4</sup>) = 2.26 × 10<sup>−2</sup> m<sup>2</sup>.",
            "<i>W</i> = <i>S</i>Δ<i>A</i> = (0.030)(2.26 × 10<sup>−2</sup>) = 6.8 × 10<sup>−4</sup> J.",
            "Had this been a liquid DROP of the same radius, the work would be exactly half, 3.4 × 10<sup>−4</sup> J, because a drop has only one surface."
          ],
          "ans": "<i>W</i> = 6.8 × 10<sup>−4</sup> J"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A raindrop and a soap bubble have the same radius and the same surface tension. Find the ratio of the excess pressure inside the soap bubble to that inside the raindrop.",
          "steps": [
            "The trap is treating both as 2<i>S</i>/<i>r</i>, which would give a ratio of 1 : 1. A soap bubble has two surfaces, a drop has one.",
            "Bubble: Δ<i>P</i> = 4<i>S</i>/<i>r</i>. Drop: Δ<i>P</i> = 2<i>S</i>/<i>r</i>.",
            "The ratio is (4<i>S</i>/<i>r</i>)/(2<i>S</i>/<i>r</i>) = 2 : 1.",
            "Anchor it on the surface count, not on memory of the numbers: bubble beats drop, two to one."
          ],
          "ans": "2 : 1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A capillary tube of radius 0.25 mm is dipped vertically in water of surface tension 0.072 N/m, density 1000 kg/m<sup>3</sup>, angle of contact 0°. Find the height to which water rises, and the height in a tube of half that radius. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "With θ = 0, cos θ = 1, so the meniscus radius equals the tube radius and Jurin's law reads <i>h</i> = 2<i>S</i>/(<i>r</i>ρ<i>g</i>).",
            "<i>h</i> = (2)(0.072)/((0.25 × 10<sup>−3</sup>)(1000)(10)) = 0.144/2.5 = 0.0576 m = 5.76 cm.",
            "For the second tube use the scaling rather than recomputing: <i>h</i> goes as 1/<i>r</i>, so halving the radius DOUBLES the rise.",
            "<i>h</i>' = (2)(5.76) = 11.52 cm. The scaling is the fast route in an exam, and it also makes the direction obvious: a narrower tube always climbs higher."
          ],
          "ans": "<i>h</i> = 5.76 cm · in the half-radius tube 11.52 cm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Part (a): two parallel glass plates a small distance <i>d</i> apart are dipped vertically in water of surface tension <i>S</i>, density ρ, angle of contact 0°. Find the height to which water rises between them. Part (b): two soap bubbles of radii <i>a</i> and <i>b</i>, with <i>a</i> > <i>b</i>, coalesce so that they share a common film. Find that film's radius of curvature.",
          "steps": [
            "(a) Between two plates the meniscus is CYLINDRICAL, curved in one direction only rather than two, so the excess pressure below it is <i>S</i>/<i>R</i> with <i>R</i> = <i>d</i>/2, not 2<i>S</i>/<i>R</i>.",
            "(a) Balancing against the raised column's hydrostatic pressure: 2<i>S</i>/<i>d</i> = ρ<i>gh</i>, so <i>h</i> = 2<i>S</i>/(ρ<i>gd</i>). Compare it with the tube result 2<i>S</i>/(<i>r</i>ρ<i>g</i>): the algebra looks the same but the geometry behind the factor is different, one curvature against two.",
            "(b) Excess pressure goes as 1/<i>r</i>, so the SMALLER bubble holds the higher pressure. Air therefore pushes from the small bubble toward the large one and the common film bulges INTO the larger bubble.",
            "(b) The pressure difference across the common film is the difference of the two individual excess pressures: 4<i>S</i>/<i>R</i> = 4<i>S</i>/<i>b</i> − 4<i>S</i>/<i>a</i>, so 1/<i>R</i> = 1/<i>b</i> − 1/<i>a</i> and <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>). Note that as the two radii approach each other, <i>R</i> grows without limit and the film becomes flat, which is exactly right for two equal bubbles."
          ],
          "ans": "(a) <i>h</i> = 2<i>S</i>/(ρ<i>gd</i>) · (b) <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>), bulging into the larger bubble"
        },
        {
          "t": "mcq",
          "q": "The excess pressure inside a soap bubble of radius <i>r</i>, compared with that inside a liquid drop of the same radius and surface tension, is:",
          "opts": [
            { "label": "equal", "nudge": "This ignores the surface count, which is the whole difference between the two cases and the dominant error in this topic." },
            { "label": "twice as large", "nudge": null },
            { "label": "half as large", "nudge": "This inverts the ratio. The bubble has MORE surface pulling inward, so it needs MORE pressure inside to hold it open, not less." },
            { "label": "four times as large", "nudge": "This applies the factor of two twice over, perhaps by also doubling the radius or the tension." }
          ],
          "correct": 1,
          "solution": "A soap bubble has two liquid-air surfaces and so ΔP = 4S/r; a drop has one and so ΔP = 2S/r. The ratio is 2 : 1, and it is purely a count of surfaces."
        },
        {
          "t": "mcq",
          "q": "Water rises to a height <i>h</i> in a capillary tube of radius <i>r</i>. In a tube of radius 2<i>r</i>, everything else unchanged, the rise becomes:",
          "opts": [
            { "label": "2<i>h</i>", "nudge": "This has the rise increasing with the radius, which is backwards. The intuitive guess, bigger tube holds more water so it climbs higher, is exactly wrong." },
            { "label": "4<i>h</i>", "nudge": "Same reversal, and squared as well. Nothing in Jurin's law contains r²." },
            { "label": "<i>h</i>/2", "nudge": null },
            { "label": "<i>h</i>/4", "nudge": "This uses h proportional to 1/r², confusing the tube's radius with its cross-sectional area. Jurin's law is linear in 1/r." }
          ],
          "correct": 2,
          "solution": "Jurin's law gives h = 2S cos θ/(rρg), so h goes as 1/r. Doubling the radius halves the rise: narrower tubes climb higher, which is why water travels so far through fine soil."
        },
        {
          "t": "mcq",
          "q": "For a liquid that does NOT wet a solid, such as mercury on glass, the angle of contact is:",
          "opts": [
            { "label": "zero", "nudge": "Zero describes perfect wetting, water on scrupulously clean glass, which is the opposite of the case described." },
            { "label": "acute, less than 90°", "nudge": "Acute means adhesion beats cohesion, the liquid climbs the wall and the meniscus is concave: a wetting liquid, again the opposite case." },
            { "label": "exactly 90°", "nudge": "This is the special borderline case, roughly water on silver, giving a flat surface and no rise or depression at all. Mercury on glass is well past it." },
            { "label": "obtuse, greater than 90°", "nudge": null }
          ],
          "correct": 3,
          "solution": "Non-wetting means cohesion beats adhesion, so the liquid pulls away from the wall, the meniscus bulges convex, and θ is obtuse, about 135° for mercury on glass. Then cos θ is negative and Jurin's law returns a capillary DEPRESSION."
        },
        {
          "t": "mcq",
          "q": "As a liquid is heated toward its critical temperature, its surface tension:",
          "opts": [
            { "label": "increases", "nudge": "This reverses the trend. Heating increases molecular motion and separation, which weakens the cohesive forces that create surface tension in the first place." },
            { "label": "decreases, reaching zero at the critical temperature", "nudge": null },
            { "label": "stays constant", "nudge": "This ignores the temperature dependence entirely, and it also cannot be right at the critical point, where the liquid-vapour boundary itself ceases to exist." },
            { "label": "first decreases, then increases", "nudge": "There is no such turning point for ordinary liquids; the fall is monotonic all the way to the critical temperature." }
          ],
          "correct": 1,
          "solution": "Surface tension exists because surface molecules are pulled inward by cohesion. Heating weakens that cohesion, and at the critical temperature the liquid and vapour become indistinguishable, so there is no surface left and S is exactly zero."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define surface tension and give its SI unit and dimensions. Explain in one line why small liquid drops are spherical.", "a": "Surface tension is the force per unit length acting along a liquid surface, perpendicular to any line drawn on it; SI unit N/m, dimensions [M T<sup>−2</sup>]. A drop is spherical because a sphere has the least surface area, and therefore the least surface energy, for a given volume." },
            { "q": "[NEET] Water rises to a height <i>h</i> in a capillary tube. The same tube is dipped in a liquid of half the surface tension, double the density and the same zero angle of contact. What is the new rise?", "a": "<i>h</i> goes as <i>S</i>/ρ, so halving <i>S</i> and doubling ρ gives <i>h</i>/4." },
            { "q": "[JEE Main] The excess pressure inside a soap bubble of radius 2.0 cm is 6.0 Pa. Find the surface tension of the soap solution.", "a": "A soap bubble, so Δ<i>P</i> = 4<i>S</i>/<i>r</i>. <i>S</i> = Δ<i>P r</i>/4 = (6.0)(0.020)/4 = 0.030 N/m." },
            { "q": "[JEE Main] A water drop of radius 1.0 mm is broken into 1000 identical droplets. Take <i>S</i> = 0.072 N/m and find the work done.", "a": "Volume conservation gives <i>r</i>' = <i>r</i>/1000<sup>1/3</sup> = 0.10 mm. New area = 1000(4π)(10<sup>−4</sup>)<sup>2</sup> = 4π(10<sup>−5</sup>) m<sup>2</sup>; old area = 4π(10<sup>−3</sup>)<sup>2</sup> = 4π(10<sup>−6</sup>) m<sup>2</sup>. Δ<i>A</i> = 4π(9 × 10<sup>−6</sup>) = 1.13 × 10<sup>−4</sup> m<sup>2</sup>, so <i>W</i> = <i>S</i>Δ<i>A</i> ≈ 8.1 × 10<sup>−6</sup> J." },
            { "q": "[JEE Advanced] A million droplets of radius 1.0 × 10<sup>−4</sup> m coalesce into one drop. All the released surface energy heats the water. Show that Δ<i>T</i> = 3<i>S</i>(1/<i>r</i> − 1/<i>R</i>)/(ρ<i>c</i>) and evaluate it for <i>S</i> = 0.072 N/m, ρ = 1000 kg/m<sup>3</sup>, <i>c</i> = 4200 J/kg K.", "a": "Energy released = 4π<i>S</i>(<i>nr</i><sup>2</sup> − <i>R</i><sup>2</sup>) = 4π<i>SR</i><sup>3</sup>(1/<i>r</i> − 1/<i>R</i>) using <i>nr</i><sup>3</sup> = <i>R</i><sup>3</sup>. Dividing by <i>mc</i> = ρ(4/3)π<i>R</i><sup>3</sup><i>c</i> gives Δ<i>T</i> = 3<i>S</i>(1/<i>r</i> − 1/<i>R</i>)/(ρ<i>c</i>). With <i>R</i> = 100<i>r</i> = 1.0 × 10<sup>−2</sup> m: Δ<i>T</i> = (3 × 0.072/(4.2 × 10<sup>6</sup>))(10<sup>4</sup> − 10<sup>2</sup>) ≈ 5.1 × 10<sup>−4</sup> K, small but real." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting a soap bubble's two surfaces.</b> A soap bubble has an inner AND an outer face: excess pressure 4<i>S</i>/<i>r</i>, and work <i>S</i>(8π<i>r</i><sup>2</sup>) to blow it. A liquid drop, or an air bubble inside a liquid, has one: 2<i>S</i>/<i>r</i>. Ask how many surfaces before writing any formula.",
            "<b>Inverting Jurin's law.</b> The rise goes as 1/<i>r</i>, so NARROWER tubes climb HIGHER. The intuitive guess, that a bigger tube lifts more water further, is exactly wrong.",
            "<b>Muddling the angle of contact.</b> Acute means wetting, a concave meniscus and a rise, as for water on glass. Obtuse means non-wetting, a convex meniscus and a depression, as for mercury on glass. And θ DECREASES as temperature rises, which is part of why hot water cleans better.",
            "<b>Confusing the tube radius with the meniscus radius.</b> In Jurin's law <i>r</i> is the TUBE's radius, but the excess pressure uses the MENISCUS's radius <i>R</i> = <i>r</i>/cos θ. They coincide only when θ = 0, so keep them apart whenever the angle is given as anything else.",
            "<b>Expecting a short tube to overflow.</b> Water NEVER overflows from a capillary that is shorter than its natural rise. The product <i>hR</i> = 2<i>S</i>/(ρ<i>g</i>) is fixed, so if only <i>h</i>' of tube is available the water climbs to the top and the meniscus simply FLATTENS, its radius growing to <i>R</i>' = <i>Rh</i>/<i>h</i>', until equilibrium is restored."
          ]
        },
        {
          "t": "protip",
          "html": "run the two-second checklist before every calculation: how many surfaces, and is the contact angle zero. those two questions dispose of most of the errors in this topic on their own. for ratio questions lean on ΔP going as 1/r and h going as 1/r and you can usually answer without computing S at all. and keep three advanced results in your pocket, because they show up more often than their difficulty suggests: between parallel plates a distance d apart the rise is 2S/ρgd, since a cylindrical meniscus curves only one way; two coalesced bubbles share a film of radius ab/(a − b) that bulges into the bigger one; and a capillary too short for the full rise never overflows, because hR stays constant and the meniscus flattens instead."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>S</i> = <i>F</i>/<i>L</i> = <i>W</i>/Δ<i>A</i>, unit N/m = J/m<sup>2</sup>", "note": "dimensions [M T<sup>−2</sup>]; force per length and energy per area are one number" },
            { "f": "drop or air bubble 2<i>S</i>/<i>r</i> · soap bubble 4<i>S</i>/<i>r</i>", "note": "the only difference is the count of surfaces, one against two" },
            { "f": "<i>h</i> = 2<i>S</i> cos θ/(<i>r</i>ρ<i>g</i>)", "note": "h goes as 1/r; mercury has θ > 90°, so it is depressed" },
            { "f": "θ acute wets, θ obtuse does not", "note": "adhesion versus cohesion; θ falls as temperature rises" },
            { "f": "<i>S</i> falls with temperature, to zero at the critical point", "note": "soluble impurities like salt raise it, soap lowers it" },
            { "f": "plates a distance <i>d</i> apart: <i>h</i> = 2<i>S</i>/(ρ<i>gd</i>) · two bubbles share <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>)", "note": "one curvature not two; the film bulges into the larger bubble" }
          ],
          "aids": [
            "\"bubble is four, drop is two\"",
            "\"narrow tube, high climb\"",
            "\"acute wets, obtuse won't\"",
            "\"hot liquid, weak skin\""
          ]
        }
      ]
    }
  ]
};

export default phy11MechFluids;
