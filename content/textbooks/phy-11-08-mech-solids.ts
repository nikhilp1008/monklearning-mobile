/**
 * Chapter 08 · Mechanical Properties of Solids. Physics, Class 11.
 *
 * Restructured from pages 537 to 590 of the Drona Class 11 Physics Master
 * Reference (Chapter 8: Elasticity/Stress/Strain, Elastic Moduli, Poisson's
 * Ratio and Elastic Energy, Ductility/Malleability/Yielding, Applications of
 * Elastic Behaviour) into the block system in
 * design_handoff_textbooks/CONTENT_SPEC.md and lib/textbooks.ts, matching the
 * voice and density of phy-11-02-motion-straight-line.ts.
 *
 * FIVE TOPICS, BECAUSE THE SOURCE HAS FIVE SUBTOPICS. Pages 537 to 577 carry
 * exactly five, each on the same rigid eight-section template, and they map
 * 1:1 onto the five topics below. Nothing was merged, split or invented to
 * hit a count. The Round 2 Addendum (pages 578 to 590: A the master
 * elongation integral, B thermal stress with gaps and dissimilar rods, C the
 * wire-as-spring set in motion, D two wires sharing a load through a rigid
 * bar, E the interatomic potential made quantitative, F error propagation in
 * Searle's experiment) is explicitly not a topic per the brief. Every line
 * drawn from it below sits in a `protip`, a `mistakes` item or the hardest
 * `ex` of a group: A into Topic 01's integration material, C into Topic 02's
 * spring material and Topic 03's sudden-loading material, D into Topic 02's
 * combinations material, B and F into Topic 05's thermal-stress and Searle
 * material, E into Topic 05's atomic-origin material. No `formula`,
 * `defgrid`, `deriv` or `proc` block below is sourced from the addendum.
 * 54 pages is the shortest chapter in this wave; at 131 blocks over five
 * topics (26.2 per topic) the density matches phy-11-02's own (23.4) and
 * math-12-01-relations.ts's (23.5) without padding.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all seven listed chapters read in
 * full). EXACTLY ONE ENTRY TOUCHES THIS RANGE:
 *
 *   - Page 980, "Chapter 8: Mechanical Properties of Solids". The printed
 *     text of Subtopic 05's MCQ Q2 (the mountain-height question, source page
 *     575) reads "a quick dimension check ($[ ]/[ g] = $ metres) rules them
 *     out instantly", with literal $ delimiters and empty brackets where the
 *     symbols died. The errata's first proposed fix is right and is what this
 *     chapter teaches: [σ]/([ρ][g]) = metres. Its SECOND proposed fix, and
 *     its gloss, are wrong for this chapter, and that is recorded below under
 *     CORRECTIONS BEYOND THE ERRATA.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, every practice answer
 * and every MCQ key in Subtopics 01 to 05 was recomputed independently, as
 * were all twelve addendum worked examples and all twenty-four addendum
 * practice answers. The arithmetic is clean: no printed numerical answer is
 * wrong. Four non-numerical defects were found and are corrected in the
 * content below:
 *
 *   1. Errata page 980 offers, as an alternative fix, "√(σ/(ρg)) has units of
 *      length", and explains the passage as "a dimensional-analysis check on
 *      a capillary-rise-style formula". Both are wrong here. In Chapter 8 σ
 *      is a breaking STRESS, [M L−1 T−2], not a surface tension, [M T−2].
 *      Working: σ/(ρg) = [M L−1 T−2] / ([M L−3][L T−2]) = [M L−1 T−2] /
 *      [M L−2 T−2] = [L]. So σ/(ρg) is ALREADY a length and the square root
 *      would give [L^1/2], which is not a length at all. The root form is
 *      correct only for surface tension, where σ/(ρg) = [M T−2]/[M L−2 T−2] =
 *      [L2]. The errata has imported Chapter 9's capillary formula into
 *      Chapter 8's mountain-height MCQ. Topic 05's MCQ 2 below prints the
 *      un-rooted form and its nudges say why the root is wrong.
 *   2. Subtopic 01, Section 2 and its Cheat Sheet define the bulk modulus as
 *      "B = −P/(ΔV/V)". The numerator must be a CHANGE in pressure, ΔP: the
 *      chapter's own Subtopic 02 Example 1 uses B = −ΔP/(ΔV/V) and could not
 *      have got −0.50 cm³ otherwise, since it substitutes the 7.0 × 10^7 Pa
 *      excess, not an absolute pressure. Printed as B = −ΔP/(ΔV/V)
 *      throughout below.
 *   3. Subtopic 01, Example 3 closes "both pieces happen to stretch equally
 *      because their LY/A-balances coincide". The quantity that coincides is
 *      AY/L, not LY/A: steel has AY/L = (1.0 × 10−6)(2.0 × 10^11)/1.0 = 2.0 ×
 *      10^5 N/m and copper (2.0 × 10−6)(1.0 × 10^11)/1.0 = 2.0 × 10^5 N/m,
 *      which is the equality of the two SPRING CONSTANTS k = YA/L. With the
 *      printed LY/A the steel value is 1.0/(1.0 × 10−6) × 2.0 × 10^11 = 2 ×
 *      10^17 and the copper 5 × 10^16, which are not equal, so the printed
 *      sentence contradicts its own example. Topic 01's Example 3 below says
 *      "equal AY/L".
 *   4. Addendum C, Practice 2 asks the reader to prove that h = 0 gives x =
 *      2Mg/k and prints the step "½kx² = Mgx ⇒ x(k/2 − Mg) = 0". That bracket
 *      is dimensionally impossible: k/2 is N/m and Mg is N. The factorisation
 *      is x(½kx − Mg) = 0, whose non-trivial root is x = 2Mg/k. The printed
 *      root is right; only the middle line is mistyped. Topic 03's `protip`
 *      states the correct factorisation.
 *
 * SOURCE DAMAGE. Three of the brief's patterns are present in pages 537 to
 * 590; one is not, and one new one is. Every instance was re-authored from
 * context and never transcribed.
 *
 *   - GREEK SURVIVES, BUT AS FORBIDDEN GLYPHS. The brief warns that Greek is
 *     dropped without a placeholder. In this range it is not dropped: it
 *     arrives as Mathematical Italic characters in U+1D400 to U+1D7FF, 2830
 *     of them across the 54 pages (σ, ε, ν, η, φ, Δ, ρ, α, γ, λ, ω, θ, π, κ,
 *     μ, β, plus every italic Latin variable). The validator rejects that
 *     block and the app renders it as tofu, so not one character of the
 *     source's mathematics can be copied. Every symbol below is retyped as
 *     plain Unicode Greek (U+0370 block) or as <i>x</i>.
 *   - MULTIPLICATION SIGNS DIE AS "{nN". Eight occurrences, all in Subtopic
 *     01's Example 1 (source page 542): "2.0 mm2 = 2.0 {nN 10 −6 m2",
 *     "F = Mg = 8.0 {nN 10 = 80 N", "= 240 / 1.2 {nN 10 −9",
 *     "Y = 2.0 {nN 10 11 Pa". Each "{nN" is a × sign. Same family as the
 *     brief's "\n7" minus sign in the pilot, different glyph. Recomputed:
 *     Y = (80)(3.0)/((2.0 × 10−6)(6.0 × 10−4)) = 240/(1.2 × 10−9) = 2.0 ×
 *     10^11 Pa, which is the textbook value for steel, so the reconstruction
 *     is self-checking.
 *   - SUPERSCRIPTS LAND ON THEIR OWN LINES, pervasively, and this chapter's
 *     exponents run from 10−12 (r⁴ for a 1 mm wire) to 10^11 (Young's moduli)
 *     and 10^16 (σy² in the resilience example). Every exponent below was
 *     rebuilt by recomputing the example it sits in. The worst case,
 *     Subtopic 05 Example 4, extracts "𝑟 4 = (0.020) 4 = 1.6 × 10 −7 m 4":
 *     that is r⁴ = (0.020 m)⁴ = 1.6 × 10⁻⁷ m⁴, confirmed by C = πηr⁴θ/(2L) =
 *     π(4.0 × 10^10)(1.6 × 10−7)(0.50)/2 = 5.0 × 10³ N m as printed.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Confirmed
 *     instances used or paraphrased below: "Steel ismore elastic than rubber"
 *     (p.539), "samepull" (p.539), "itdoesnotdepend" and "notdepend" (p.541),
 *     "hasnosingle bulk modulus" (p.554), "isgraduallyincreased" (p.560),
 *     "itcannotexpand" (p.572), "volumeincreasesslightly" (p.555),
 *     "alsothinner" (p.555), "anelastomer" (p.563), "thesamethermal stress"
 *     (p.572), "thisisHooke's law" (p.572), "doesnotobey Hooke's law"
 *     (p.568), "thepracticalrange" (p.560), "sameinter-atomic bonds" (p.549),
 *     "togetherthey're treated as one" (p.565), "reasoningon stress-strain
 *     graphs" (p.562), "mountainheight" (p.575), "hethinner upper wire"
 *     (p.552, "the thinner"), "twicethe energy" (p.552),
 *     "independentproperties" (p.567), "straingraph" and "straincurve"
 *     (p.556, p.560).
 *   - NOT PRESENT: no ASCII-shifted heading run. The +29 pattern that decodes
 *     "$GGHQGXP$" to "AddendumA" does not appear anywhere in 537 to 590; the
 *     only two literal $ characters in the range are the leaked LaTeX the
 *     errata names. No U+20D7 combining arrow either, which is expected:
 *     this chapter has no vectors.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Stress is
 * [M L−1 T−2] and strain is [M0 L0 T0], so every modulus must come out
 * [M L−1 T−2]; all four that should, do.
 *
 *   - σ = F/A: [M L T−2]/[L2] = [M L−1 T−2]. ✓ Pa.
 *   - ε = Δx/x, ΔV/V, φ = x/h: [L]/[L] = 1. ✓ dimensionless, and this is the
 *     pair the brief flags, since σ and P share Pa while ε carries nothing.
 *   - σ = Eε: [M L−1 T−2] = [E]·1, so [E] = [M L−1 T−2]. ✓
 *   - Y = FL/(AΔL) = MgL/(πr2ΔL): [M L T−2][L]/([L2][L]) = [M L−1 T−2]. ✓
 *   - B = −ΔP/(ΔV/V): [M L−1 T−2]/1 = [M L−1 T−2]. ✓
 *   - compressibility k = 1/B: [M−1 L T2], i.e. Pa−1. ✓
 *   - η = τ/φ: [M L−1 T−2]/1 = [M L−1 T−2]. ✓
 *   - ν = −(Δr/r)/(ΔL/L): dimensionless. ✓
 *   - Y = 2η(1 + ν) = 3B(1 − 2ν): [M L−1 T−2] on all three sides, since ν is
 *     a pure number. ✓
 *   - 9/Y = 1/B + 3/η: every term [M−1 L T2]. ✓
 *   - ν = (3B − 2η)/(2(3B + η)): a ratio of like quantities, dimensionless. ✓
 *   - spring constant k = YA/L: [M L−1 T−2][L2]/[L] = [M T−2] = N/m. ✓
 *   - 1/keq = Σ1/ki and keq = Σki: [M−1 T2] and [M T−2]. ✓
 *   - Yeq = 2Y1Y2/(Y1 + Y2): [M L−1 T−2]. ✓ (harmonic mean of like terms)
 *   - ΔV/V = −ΔP/B and Δρ/ρ = +ΔP/B: dimensionless. ✓
 *   - Biso = P, Badia = γP: [M L−1 T−2], γ being a pure ratio. ✓
 *   - ΔV/V = (1 − 2ν)ΔL/L: dimensionless. ✓
 *   - U = ½FΔL: [M L T−2][L] = [M L2 T−2]. ✓ J.
 *   - U = ½σεV: [M L−1 T−2][1][L3] = [M L2 T−2]. ✓
 *   - U = ½(YA/L)(ΔL)2: [M L−1 T−2][L2][L2]/[L] = [M L2 T−2]. ✓
 *   - u = ½σε = ½Yε2 = σ2/(2Y): [M L−1 T−2]. ✓ J/m3 reduces to M L−1 T−2,
 *     which is why an energy DENSITY and a stress share a unit.
 *   - uresilience = σy2/(2Y): [M2 L−2 T−4]/[M L−1 T−2] = [M L−1 T−2]. ✓
 *   - xmax = 2mgL/(YA): [M L T−2][L]/([M L−1 T−2][L2]) = [L]. ✓
 *   - ΔL = MgL/(2AY) = ρgL2/(2Y): [M L−3][L T−2][L2]/[M L−1 T−2] = [L]. ✓
 *   - ΔL = Mω2L2/(3AY): [M][T−2][L2]/([L2][M L−1 T−2]) = [L]. ✓
 *   - ΔL = ∫T(x)/(A(x)Y) dx: ([M L T−2]/([L2][M L−1 T−2]))·[L] = [L]. ✓
 *   - ΔL = FL/(πR1R2Y) (tapered rod): [M L T−2][L]/([L2][M L−1 T−2]) = [L].
 *     ✓ and R1R2 confirms the effective area is π√(R1R2)², a geometric mean.
 *   - ℓmax = σbreak/(ρg) and hmax = σmax/(ρg): [M L−1 T−2]/[M L−2 T−2] = [L].
 *     ✓ This is the ledger line that kills the errata's √ version.
 *   - x = F/(ηL) (sheared cube): [M L T−2]/([M L−1 T−2][L]) = [L]. ✓
 *   - δ = WL3/(3YIg) and WL3/(48YIg): [M L T−2][L3]/([M L−1 T−2][L4]) = [L].
 *     ✓ Ig = bd3/12 = [L4] and πr4/4 = [L4], an AREA moment, not [M L2].
 *   - σth = YαΔT: [M L−1 T−2][Θ−1][Θ] = [M L−1 T−2]. ✓ no L, as advertised.
 *   - Fth = YAαΔT: [M L−1 T−2][L2] = [M L T−2] = N. ✓
 *   - C = πηr4θ/(2L): [M L−1 T−2][L4]/[L] = [M L2 T−2] = N m. ✓ θ in radians
 *     is dimensionless, so a torque and an energy share dimensions here and
 *     are told apart by what they multiply, not by their units.
 *   - torsional rigidity c = C/θ: [M L2 T−2]. ✓
 *   - T = 2π√(ML/(YA)): √([M][L]/([M L−1 T−2][L2])) = √([T2]) = [T]. ✓
 *   - κ = d2U/dr2 at r0: [M L2 T−2]/[L2] = [M T−2] = N/m, a spring constant.
 *     ✓ and ω = √(κ/μ) gives √([M T−2]/[M]) = [T−1]. ✓
 *   - δY/Y = δM/M + δL/L + 2δr/r + δ(ΔL)/ΔL: every term is a quantity over
 *     itself, so the whole line is dimensionless. ✓
 *
 *   40 formula lines checked, 40 dimensionally consistent. No dropped term
 *   found by this route.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Poisson's ratio is between 0 and
 * 0.5 in every example (0.25, 0.29, 0.30, 0.34, and the 2/7 = 0.286 that
 * B = 2η forces); the one value outside is the theoretical lower bound −1,
 * which is taught as a bound and never used as a number. Young's modulus for
 * steel comes out 2.0 × 10^11 Pa from Topic 01's Example 1 data, which is the
 * check the source itself makes. Every strain in every worked example is
 * small: the largest anywhere in Topics 01 to 03 is 1.0 × 10−3, and the
 * elastic-region strains sit near 10−4, exactly as an elastic problem
 * demands. The one large strain in the chapter is deliberate and labelled: an
 * elastomer at 400 percent strain in Topic 04's Figure 8.2, which is not an
 * elastic-limit calculation but the whole reason rubber gets its own name.
 * Limiting cases used pedagogically: as the deforming force goes to zero,
 * every modulus stays FINITE, because a modulus is the slope of the
 * stress-strain line at the origin and not a value at the origin, which is
 * Topic 01's `def` on what a modulus is and Topic 02's answer to "does a
 * lightly loaded wire have a smaller Y". ν → 0.5 collapses ΔV/V to zero
 * (incompressible), ν → 0 collapses it to ΔL/L (no lateral contraction);
 * B → ∞ is the same limit from the other side. h → 0 in Topic 03's drop
 * equation returns the chapter's own xmax = 2xstatic. R1 = R2 in the tapered
 * rod returns the uniform-wire result. a → 0 in the lift-cable practice
 * returns the static tension.
 *
 * SEAMS: what is quoted as already known, and from which file.
 *   - phy-11-05-work-energy-power.ts, Topic 02: "DERIVATION · WHY A SPRING
 *     STORES ½kx²" and "FIGURE 4 · SPRING ENERGY IS THE TRIANGLE", plus that
 *     file's Topic 01 "FIGURE 3 · THE AREA UNDER F-x IS THE WORK" and its
 *     `formula` W = ∫F dx. Topic 03's elastic-energy derivation below names
 *     this and reuses it rather than re-deriving that the area under a
 *     linearly rising force is half base times height. It is the same
 *     triangle with F = (YA/L)ΔL in place of F = kx, and the chapter says so.
 *   - phy-11-05-work-energy-power.ts, Topic 03: conservation of mechanical
 *     energy. Topic 03's sudden-loading example equates lost gravitational
 *     PE to stored elastic PE and quotes the ledger rather than justifying
 *     it.
 *   - phy-11-04-laws-of-motion.ts: equilibrium of a hanging mass, so
 *     "the stretching force is Mg" in Topic 01's Derivation 1 is quoted, not
 *     argued. Also the free-body habit of naming a tension before writing an
 *     equation, used in Topic 02's series-wire example.
 *   - phy-11-02-motion-straight-line.ts, Topic 02: area under a graph as a
 *     running total, and Topic 05's introduction of integration as the power
 *     rule run backward. Topics 01, 03 and 05 below integrate three times
 *     (self-weight, elastic energy, torsion) and lean on that framing rather
 *     than teaching integration again. Class 11 Mathematics does not reach
 *     integration at all (checked: math-11-12-limits.ts is derivatives only),
 *     so this is the only place the idea has been introduced.
 *   - math-11-12-limits.ts, Topic 05: the power rule, used unremarked in
 *     Topic 05's atomic-potential derivation.
 *
 * FIGURES. Eight `diagram` blocks, all `plot`, carrying sixteen chips. Two
 * are the source's own named figures (8.1 the stress-strain curve, 8.2 the
 * three-material comparison); the other six were designed here, because the
 * source names only two figures in 54 pages. None dropped, no new figure
 * vocabulary requested. The panel rule is honoured everywhere: the three
 * moduli are three CHIPS of one block, never three panels in one frame, and
 * so are the two loading histories and the two energy areas.
 *
 * One scale problem is worth recording, because it recurs in any real
 * stress-strain figure. A steel wire yields at a strain near 0.002 and
 * fractures near 0.25, so the elastic region is under one percent of the
 * width of an honest full-range plot and simply cannot be seen. Printed
 * textbooks solve this by breaking the strain axis, which this vocabulary
 * cannot draw. Rather than label a stretched axis with numbers that are not
 * true, Figures 8.1 and the resilience/toughness pair each use TWO CHIPS with
 * two different honest windows: one zoomed to the elastic strains (x to
 * 0.0026) and one at full range (x to 0.28), with the caption saying so. Both
 * carry real numbers on both axes, so the slope of the first chip really is
 * 2 × 10^11 Pa and reads as Young's modulus.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11MechSolids: Chapter = {
  "chapter": "08",
  "title": "Mechanical Properties of Solids",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Elasticity, Stress and Strain",
      "chip": "01 STRESS AND STRAIN",
      "kalam": "stress is the cause per unit area, strain is the effect per unit size",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Elasticity, Stress and Strain</b><br>This is the bedrock of the whole chapter. CBSE Boards reliably ask a 2 to 3 mark definition or a Young's-modulus numerical, plus a stress-strain graph question. JEE Main almost always carries one question: an elongation, wires in series or parallel, or a graph reading. NEET asks about one, usually conceptual (<i>which is more elastic?</i>) or a breaking-stress numerical. JEE Advanced rarely tests this alone; it bundles it with thermal stress, rotation, or energy methods.<br><br><b>02 · The Elastic Moduli, and Wires as Springs</b><br>A workhorse. JEE Main loves the wire-as-a-spring idea and series or parallel combinations, roughly one question every year. NEET favours bulk-modulus and compressibility numericals and <i>which modulus applies</i> conceptuals. JEE Advanced reaches for the relations between <i>Y</i>, <i>B</i>, η and ν, and for the process-dependent bulk modulus of a gas. CBSE Boards ask a 2 to 3 mark bulk-modulus or shear-modulus numerical.<br><br><b>03 · Poisson's Ratio and the Energy a Stretch Stores</b><br>CBSE Boards reliably ask the <i>derivation</i> of the elastic potential energy of a stretched wire, worth 3 marks, and a definition of Poisson's ratio. JEE Main mixes the volume-change relation with Young's modulus and tests energy density. NEET favours the <i>area under the stress-strain curve</i> conceptual and quick energy-density numericals. JEE Advanced loves the sudden-loading energy partition, where half the work turns to heat.<br><br><b>04 · Ductile, Brittle, and the Yield Point</b><br>Heavy on conceptual and graph-reading questions. CBSE Boards ask definitions (ductile, brittle, elastomer, yield point) and a stress-strain interpretation. NEET reliably puts up a two-curve comparison: <i>which material is more brittle, which has the greater Young's modulus?</i> JEE Main tests yield-strength design and energy-to-yield. JEE Advanced reaches for multi-statement reasoning on stress-strain graphs and for elastic-hysteresis energy loss.<br><br><b>05 · Elasticity at Work</b><br>CBSE Boards regularly ask the I-section reasoning, the mountain-height estimate, and Searle's experiment, worth 3 to 5 marks. JEE Main tests beam depression and thermal-stress numericals. NEET favours thermal stress and the conceptual beam-design questions. JEE Advanced reaches for the torsion of a cylinder and for multi-concept thermal-stress problems. This subtopic ties the whole chapter together."
        },
        {
          "t": "p",
          "html": "Pick up a steel ruler and a rubber band, and pull both. The rubber stretches dramatically and snaps back. The ruler barely moves, but it also returns to shape the instant you let go. That springing back is <b>elasticity</b>: the property by which a body regains its original shape and size once the deforming force is removed. The opposite extreme is <b>plasticity</b>, where wet clay or chewing gum keeps whatever new shape you force on it. Almost every real solid lives somewhere on that spectrum, elastic up to a point and plastic beyond it."
        },
        {
          "t": "p",
          "html": "Here is the part that surprises everyone. In ordinary speech you would call the rubber band <i>more elastic</i> because it stretches further. Physics says the exact opposite: <b>steel is more elastic than rubber</b>, because for the same pull steel resists deformation far more strongly and returns far more faithfully. Elasticity measures the <b>strength of the restoring tendency</b>, not the size of the stretch. Hold on to that sentence. It is the single most examined misconception in this chapter, and it reappears in Topic 04 as a full MCQ."
        },
        {
          "t": "think",
          "html": "picture the atoms of a solid joined by countless tiny springs, the inter-atomic bonds. at rest every spring sits at its natural length. the moment you pull, you stretch those molecular springs and, like any spring, they push back. that collective push-back is the body's internal restoring force. pull harder and they stretch more and push back harder, right up to the point where a bond gives. everything in this chapter is bookkeeping on that one picture."
        },
        {
          "t": "p",
          "html": "To compare different materials and different-sized objects fairly, two normalised quantities are needed. A thick steel cable and a thin steel wire are the same material, yet the cable obviously carries more force, so raw force is a bad measure. Use <b>stress</b> instead: the restoring force <i>per unit area</i> of cross-section. Likewise a 10 m wire stretching by 1 cm is a very different event from a 10 cm wire stretching by 1 cm, so raw elongation is a bad measure too. Use <b>strain</b>: the change in a dimension <i>as a fraction of the original</i>. Stress is the cause per unit area; strain is the effect per unit size. Normalising this way lets you talk about the <b>material itself</b>, independent of how much of it you happen to be holding."
        },
        {
          "t": "think",
          "html": "a market analogy that sticks: stress is the price per kilogram of vegetables, not the total bill. strain is the percentage discount, not the rupees knocked off. both are ratios, and ratios are what let you compare a roadside thela with a supermarket fairly. quote a total and you are describing one transaction; quote a ratio and you are describing the shop."
        },
        {
          "t": "def",
          "term": "Symbols, fixed here and carried through all five topics",
          "html": "Normal or longitudinal stress is σ; shear or tangential stress is τ. Longitudinal strain is ε; shear strain is φ, measured in radians; volume strain is Δ<i>V</i>/<i>V</i>. Young's modulus is <i>Y</i>, the bulk modulus is <i>B</i> (some books write <i>K</i>), and the modulus of rigidity or shear modulus is η (some books write <i>G</i>). Poisson's ratio is ν. <b>Many Indian coaching books write Poisson's ratio as σ, which collides head-on with stress.</b> This chapter uses ν throughout so that σ always means a stress and nothing else. Compressibility is <i>k</i> = 1/<i>B</i>."
        },
        {
          "t": "defgrid",
          "title": "Three ways to load a solid, three stresses, three strains",
          "rows": [
            { "k": "Longitudinal (tensile)", "v": "pull along one axis. σ = <i>F</i>/<i>A</i> with <i>F</i> normal to <i>A</i>; strain ε = Δ<i>L</i>/<i>L</i>" },
            { "k": "Longitudinal (compressive)", "v": "the same thing with the force reversed: the length shrinks, so Δ<i>L</i> and σ change sign together" },
            { "k": "Volumetric (hydraulic)", "v": "squeezed normally on every face, so σ = <i>P</i>; strain is Δ<i>V</i>/<i>V</i>" },
            { "k": "Shear (tangential)", "v": "force parallel to a face. τ = <i>F</i>/<i>A</i>; strain is the tilt angle φ = <i>x</i>/<i>h</i> in radians" },
            { "k": "What never changes", "v": "at equilibrium the internal restoring force equals the applied force in magnitude, so you may compute stress from either" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · STRESS AND STRAIN",
          "tag": "the units students lose marks on",
          "main": "σ = <i>F</i>/<i>A</i><br>ε = (change in dimension) ÷ (original dimension)",
          "legend": [
            "<i>F</i> is the applied or restoring force in newtons (N); <i>A</i> is the cross-section area in m<sup>2</sup>",
            "σ has the SI unit N m<sup>−2</sup>, the pascal (Pa), and the dimensions [M L<sup>−1</sup> T<sup>−2</sup>], exactly the same as a pressure",
            "ε is a pure ratio: it has <b>no unit and no dimension</b>, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]. Never write pascals or metres after a strain"
          ],
          "note": "Stress and pressure share a unit; strain shares a unit with nothing, because it has none. If your answer sheet has Pa written after a strain, that alone loses the mark."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOOKE'S LAW AND YOUNG'S MODULUS",
          "tag": "valid only inside the elastic limit",
          "main": "σ = <i>E</i> ε<br><i>Y</i> = σ/ε = (<i>F</i>/<i>A</i>) ÷ (Δ<i>L</i>/<i>L</i>) = <i>FL</i>/(<i>A</i> Δ<i>L</i>) = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>)",
          "legend": [
            "<i>E</i> is the modulus of elasticity, the constant of proportionality; unit Pa, dimensions [M L<sup>−1</sup> T<sup>−2</sup>]",
            "<i>Y</i> is Young's modulus, the value of <i>E</i> for a longitudinal pull; <i>L</i> is the natural length (m), Δ<i>L</i> the elongation (m)",
            "<i>M</i> is the hanging mass (kg), <i>g</i> = 9.8 m/s<sup>2</sup>, and <i>r</i> is the wire's radius (m), so π<i>r</i><sup>2</sup> is its area"
          ],
          "note": "A modulus depends on the MATERIAL only. Cutting, stretching or rejoining a wire changes its shape and its stiffness, never its <i>Y</i>. Steel is about 2 × 10<sup>11</sup> Pa whatever you do to the piece."
        },
        {
          "t": "def",
          "term": "Why a modulus does not vanish as the load does",
          "html": "A modulus is a <b>ratio of two things that shrink together</b>. Halve the load and both σ and ε halve, so σ/ε does not move. Take the load to zero and both go to zero, but their ratio stays put: <i>Y</i> is the <b>slope</b> of the stress-strain line at the origin, not a value read off at the origin. That is why a lightly loaded wire and a heavily loaded one made of the same steel have exactly the same Young's modulus, and why <i>Y</i> is a property you can look up in a table while Δ<i>L</i> is not."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · YOUNG'S MODULUS OF A SUSPENDED WIRE, TAP A LINE",
          "steps": [
            {
              "eq": "the stretching force is <i>F</i> = <i>Mg</i>",
              "why": "The wire hangs in equilibrium, so the upward restoring force it develops exactly balances the downward weight of the load. This is the ordinary equilibrium condition from Laws of Motion, quoted here rather than re-argued."
            },
            {
              "eq": "σ = <i>Mg</i>/(π<i>r</i><sup>2</sup>), since <i>A</i> = π<i>r</i><sup>2</sup>",
              "why": "Divide that force by the cross-section area. Note the radius: examiners quote the DIAMETER far more often than the radius, and forgetting to halve it before squaring throws the area, and therefore Y, out by a factor of four."
            },
            {
              "eq": "ε = Δ<i>L</i>/<i>L</i>",
              "why": "The wire lengthens by ΔL out of a natural length L, and the fraction is the longitudinal strain. It is dimensionless, so nothing about the wire's units survives into it."
            },
            {
              "eq": "<i>Y</i> = σ/ε = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>)",
              "why": "Divide one by the other. Every input on the right is something you can measure with a metre rule, a screw gauge and a set of slotted masses, which is exactly what Searle's experiment in Topic 05 does. Nothing here depends on HOW the wire was loaded, only on what it is made of."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1 · THE WIRE THAT DEFINES YOUNG'S MODULUS",
          "chips": ["a wire under a hanging load"],
          "captions": [
            "Clamped at the ceiling, natural length L, cross-section A = πr². Hang a mass M and the lower end drops from the dashed position to the solid one, a distance ΔL. Stress is Mg divided by A, strain is ΔL divided by L, and Young's modulus is one over the other. Every quantity in the picture is measurable, which is why this arrangement, not an abstraction, is what Searle's experiment builds."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[2.0, 9.2], [8.0, 9.2], [8.0, 9.7], [2.0, 9.7]], "close": true, "fill": "hatch" }
              ],
              "segments": [
                { "from": [5, 9.2], "to": [5, 3.6] },
                { "from": [3.5, 4.2], "to": [6.5, 4.2], "dash": true, "soft": true }
              ],
              "bodies": [
                { "kind": "block", "at": [5, 3.0], "w": 1.8, "h": 1.0, "label": "M" }
              ],
              "arrows": [
                { "from": [2.6, 9.2], "to": [2.6, 3.6], "head": "both", "tone": "soft", "label": "L", "at": "mid" },
                { "from": [7.4, 4.2], "to": [7.4, 3.6], "head": "both", "tone": "amber", "label": "ΔL", "at": "mid" },
                { "from": [5, 2.5], "to": [5, 1.2], "tone": "ink", "label": "Mg", "at": "mid" }
              ],
              "labels": [
                { "x": 6.7, "y": 6.6, "text": "area A" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ELONGATION OF A ROD UNDER ITS OWN WEIGHT, TAP A LINE",
          "steps": [
            {
              "eq": "at height <i>x</i> above the bottom, <i>T</i>(<i>x</i>) = ρ<i>Agx</i>",
              "why": "Remove the hanging mass; the rod now stretches under its own weight, and the tension is NOT uniform. A cross-section at height x must carry everything below it, which is a length x of rod, of volume Ax and mass ρAx."
            },
            {
              "eq": "the slice <i>dx</i> there stretches by <i>d</i>(Δ<i>L</i>) = (ρ<i>gx</i>/<i>Y</i>) <i>dx</i>",
              "why": "That slice feels a stress T/A = ρgx and therefore a strain ρgx/Y. Multiply a strain by the slice's own length dx to get how much that slice lengthens. Every slice stretches by a different amount, which is exactly why one formula will not do."
            },
            {
              "eq": "Δ<i>L</i> = ∫ from 0 to <i>L</i> of (ρ<i>gx</i>/<i>Y</i>) <i>dx</i> = ρ<i>gL</i><sup>2</sup>/(2<i>Y</i>) = <i>MgL</i>/(2<i>AY</i>)",
              "why": "Adding the slices is the running total under a graph, the same move that turned a v-t area into a displacement. The integral of x is x²/2, and substituting M = ρAL gives the second form."
            },
            {
              "eq": "the factor of ½ is the punchline",
              "why": "It is as if the rod's ENTIRE weight acted at its centre of mass, halfway down. That average-tension shortcut saves a full page in an exam, and the same ½ turns up again in Topic 03's elastic energy for the same reason: a quantity that grows linearly from zero contributes its average, not its final value."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a stress-strain curve, left to right",
          "steps": [
            "<b>Proportional limit P.</b> The straight-line stretch from the origin. Hooke's law holds exactly here, and the <b>slope of this line is Young's modulus</b>, not the height of any point on it.",
            "<b>Elastic limit E.</b> Slightly beyond P. The line is no longer perfectly straight, but the body still returns to its original shape when you unload. This is the last point of full recovery.",
            "<b>Yield point.</b> Strain shoots up for barely any extra stress. Permanent deformation begins; the plastic region starts here. For many metals E and the yield point sit so close together that they are treated as one.",
            "<b>Ultimate tensile strength.</b> The peak of the curve, the highest stress the material can bear. Past it a ductile sample <b>necks</b>, thinning locally.",
            "<b>Fracture point.</b> The material snaps, and the stress there is the breaking stress. A <b>ductile</b> material (copper, mild steel) has a long plastic region between yield and fracture and can be drawn into wires; a <b>brittle</b> one (glass, cast iron) fractures almost immediately after the elastic limit.",
            "<b>Area, not slope, is energy.</b> The area under the curve up to any point is the energy absorbed per unit volume up to that point. Topic 03 does the arithmetic; Topic 04 gives the two named areas their names."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 8.1 · THE STRESS-STRAIN CURVE OF A DUCTILE METAL",
          "chips": ["the elastic line, magnified", "all the way to fracture"],
          "captions": [
            "The first 0.0026 of strain, magnified. The curve is dead straight from the origin to P, the proportional limit: 2.4 × 10⁸ Pa at a strain of 0.0012, so the slope is 2.0 × 10¹¹ Pa, which IS Young's modulus for steel. Past P it bends. E is the elastic limit, the last point of full recovery, and the yield point follows almost at once.",
            "The same curve at full range, and the whole of the first chip is now the sliver left of the dashed line. Past yield the metal flows: strain runs to 0.25 for barely a quarter more stress, rising to the ultimate tensile strength at the peak and then falling as the sample necks, until it fractures. That long plastic road is what ductile means."
          ],
          "frames": [
            {
              "x": [0, 0.0026], "y": [0, 3.4],
              "axisX": "strain ε", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [0.001, 0.002], "labels": ["0.001", "0.002"] },
              "ticksY": { "at": [1, 2, 3] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.0012, 2.4], [0.00145, 2.68], [0.0016, 2.85], [0.00185, 2.97], [0.002, 3.0], [0.00245, 3.05]] }
              ],
              "points": [
                { "x": 0.0012, "y": 2.4, "label": "P", "at": "se" },
                { "x": 0.0016, "y": 2.85, "label": "E", "at": "se" },
                { "x": 0.002, "y": 3.0, "label": "yield", "at": "se" }
              ],
              "labels": [
                { "x": 0.0006, "y": 2.4, "text": "slope = Y" }
              ]
            },
            {
              "x": [0, 0.28], "y": [0, 4.6],
              "axisX": "strain ε", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [0.1, 0.2] },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.002, 3.0], [0.01, 3.15], [0.04, 3.5], [0.08, 3.78], [0.12, 3.93], [0.16, 4.0], [0.2, 3.88], [0.25, 3.3]], "smooth": true }
              ],
              "segments": [
                { "from": [0.002, 0], "to": [0.002, 3.0], "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0.002, "y": 3.0, "label": "yield", "at": "se" },
                { "x": 0.16, "y": 4.0, "label": "ultimate", "at": "ne" },
                { "x": 0.25, "y": 3.3, "label": "fracture", "at": "sw" }
              ],
              "labels": [
                { "x": 0.13, "y": 1.3, "text": "plastic region" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Same material, two wires: the thirty-second ratio",
          "steps": [
            "<b>Notice the words same material.</b> They mean <i>Y</i> is identical for both wires, so it will cancel. Do not compute it, and do not look it up.",
            "<b>Write the proportionality, not the formula.</b> From Δ<i>L</i> = <i>FL</i>/(<i>AY</i>) = <i>FL</i>/(π<i>r</i><sup>2</sup><i>Y</i>), with <i>F</i>, <i>Y</i> and π common to both, Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup>.",
            "<b>Take the ratio and substitute the multiples.</b> Doubling the length doubles the stretch; doubling the radius quarters it, because area goes as the square.",
            "<b>Answer the elasticity question separately.</b> Geometry changes the STRETCH; it never changes the elasticity. Two wires of the same material are equally elastic no matter how differently they stretch, so eliminate any option claiming otherwise.",
            "<b>Sanity check.</b> The wire that is longer and thinner always stretches more. If your ratio says the fat short one stretched further, a square went missing."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A steel wire of length 3.0 m and cross-section 2.0 mm<sup>2</sup> stretches by 0.60 mm when an 8.0 kg load hangs from it. Find Young's modulus of steel. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Convert everything to SI: <i>A</i> = 2.0 mm<sup>2</sup> = 2.0 × 10<sup>−6</sup> m<sup>2</sup>, Δ<i>L</i> = 0.60 mm = 6.0 × 10<sup>−4</sup> m.",
            "Stretching force <i>F</i> = <i>Mg</i> = (8.0)(10) = 80 N.",
            "<i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) = (80)(3.0) ÷ [(2.0 × 10<sup>−6</sup>)(6.0 × 10<sup>−4</sup>)] = 240 ÷ (1.2 × 10<sup>−9</sup>).",
            "<i>Y</i> = 2.0 × 10<sup>11</sup> Pa. That is the tabulated value for steel, which is the sanity check to run every time: a Young's modulus for a metal that comes out near 10<sup>11</sup> Pa is plausible, one near 10<sup>5</sup> Pa is an arithmetic slip."
          ],
          "ans": "Y = 2.0 × 10<sup>11</sup> Pa"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Wires A and B are made of the <b>same</b> material. B is twice as long as A and has twice the radius. The same load hangs from each. By what factor does A's elongation exceed B's, and is A more elastic than B?",
          "steps": [
            "The trap is twofold: rushing to plug in numbers, and reading <i>stretches more</i> as <i>more elastic</i>.",
            "Same material means <i>Y</i> cancels. From Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup>: Δ<i>L</i><sub>A</sub>/Δ<i>L</i><sub>B</sub> = (<i>L</i>/<i>r</i><sup>2</sup>) ÷ (2<i>L</i>/4<i>r</i><sup>2</sup>) = (<i>L</i>/<i>r</i><sup>2</sup>) ÷ (<i>L</i>/2<i>r</i><sup>2</sup>) = 2.",
            "So A elongates twice as much. Mentally: B is twice as long, which stretches it more, but four times the area, which stretches it less, and the net effect is a halving.",
            "On elasticity: A stretches more, but both are the same material with the same <i>Y</i>, so they are <b>equally elastic</b>. Eliminate any option claiming one is more elastic than the other."
          ],
          "ans": "A stretches 2 times as much · equally elastic, since Y is a material property"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A steel wire (length 1.0 m, area 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa) is joined end to end to a copper wire (length 1.0 m, area 2.0 mm<sup>2</sup>, <i>Y</i> = 1.0 × 10<sup>11</sup> Pa), and a 10 kg mass hangs from the bottom. Find the total elongation. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Two ideas: wires in <b>series carry the same tension</b>, because the lower one transmits the full load to the upper one, and the total elongation is the <b>sum</b> of the individual ones.",
            "Tension throughout: <i>F</i> = <i>Mg</i> = 100 N.",
            "Steel: Δ<i>L</i> = <i>FL</i>/(<i>AY</i>) = (100)(1.0) ÷ [(1.0 × 10<sup>−6</sup>)(2.0 × 10<sup>11</sup>)] = 100 ÷ (2.0 × 10<sup>5</sup>) = 5.0 × 10<sup>−4</sup> m.",
            "Copper: (100)(1.0) ÷ [(2.0 × 10<sup>−6</sup>)(1.0 × 10<sup>11</sup>)] = 100 ÷ (2.0 × 10<sup>5</sup>) = 5.0 × 10<sup>−4</sup> m.",
            "Total = 1.0 × 10<sup>−3</sup> m = 1.0 mm. The two halves happen to stretch equally because their <i>AY</i>/<i>L</i> values coincide at 2.0 × 10<sup>5</sup> N/m, which is a coincidence of the numbers, not a rule."
          ],
          "ans": "total elongation 1.0 × 10<sup>−3</sup> m = 1.0 mm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A uniform rod of mass <i>M</i>, length <i>L</i> and area <i>A</i> lies on a frictionless table and rotates at angular velocity ω about a vertical axis through <b>one end</b>. Derive its elongation, then evaluate for <i>M</i> = 2.0 kg, <i>L</i> = 1.0 m, ω = 10 rad/s, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa.",
          "steps": [
            "The tension is non-uniform again, but for a new reason: at distance <i>x</i> from the axis it must supply the centripetal force for <b>all</b> the mass beyond <i>x</i>.",
            "With linear density λ = <i>M</i>/<i>L</i>: <i>T</i>(<i>x</i>) = ∫ from <i>x</i> to <i>L</i> of λω<sup>2</sup><i>x</i>′ <i>dx</i>′ = <i>M</i>ω<sup>2</sup>(<i>L</i><sup>2</sup> − <i>x</i><sup>2</sup>)/(2<i>L</i>).",
            "Each slice stretches by <i>T</i>(<i>x</i>)/(<i>AY</i>) <i>dx</i>. Integrating from 0 to <i>L</i>: Δ<i>L</i> = [<i>M</i>ω<sup>2</sup>/(2<i>LAY</i>)](<i>L</i><sup>3</sup> − <i>L</i><sup>3</sup>/3) = <i>M</i>ω<sup>2</sup><i>L</i><sup>2</sup>/(3<i>AY</i>).",
            "Numerically: (2.0)(100)(1.0) ÷ [3(1.0 × 10<sup>−6</sup>)(2.0 × 10<sup>11</sup>)] = 200 ÷ (6.0 × 10<sup>5</sup>) ≈ 3.3 × 10<sup>−4</sup> m ≈ 0.33 mm.",
            "The ⅓ here, against the ½ for self-weight, is the whole point: tension grows <b>quadratically</b> with <i>x</i> in the rotating rod and only <b>linearly</b> in the hanging one, so the average is a third rather than a half."
          ],
          "ans": "ΔL = Mω<sup>2</sup>L<sup>2</sup>/(3AY) ≈ 3.3 × 10<sup>−4</sup> m ≈ 0.33 mm"
        },
        {
          "t": "mcq",
          "q": "A wire of length <i>L</i>, area <i>A</i> and Young's modulus <i>Y</i> is stretched by an amount ℓ. The work done in stretching it is:",
          "opts": [
            { "label": "YAℓ<sup>2</sup>/(2L)", "nudge": null },
            { "label": "YAℓ<sup>2</sup>/L", "nudge": "This forgets the factor of ½. The force builds up gradually from 0 to F as the wire stretches, so the work uses the average force F/2, not the final F." },
            { "label": "YAℓ/(2L)", "nudge": "This drops a power of ℓ, and one glance at the dimensions kills it: YAℓ/L has the dimensions of a force, not an energy." },
            { "label": "Yℓ<sup>2</sup>/(2AL)", "nudge": "This puts A in the denominator. More material must store more energy for the same stretch, so A belongs on top." }
          ],
          "correct": 0,
          "solution": "The force needed to hold a stretch ℓ is F = YAℓ/L, and it grows linearly from zero, so the work is ½Fℓ = ½(YAℓ/L)ℓ = YAℓ²/(2L). This is exactly the spring triangle from Work, Energy and Power with k = YA/L."
        },
        {
          "t": "mcq",
          "q": "Two wires of the same material and the same length have radii <i>r</i> and 2<i>r</i>. They are stretched by the same force. The ratio of their elongations, thin : thick, is:",
          "opts": [
            { "label": "1 : 1", "nudge": "This assumes same material plus same length means the same stretch, ignoring the area entirely. Area is the whole content of this question." },
            { "label": "2 : 1", "nudge": "This uses the radius to the first power instead of squaring it. It is the single most frequent error on this question." },
            { "label": "4 : 1", "nudge": null },
            { "label": "1 : 4", "nudge": "The right magnitude, flipped. The thin wire must stretch MORE, so the larger number belongs first." }
          ],
          "correct": 2,
          "solution": "ΔL ∝ 1/A = 1/(πr²), so ΔL(thin)/ΔL(thick) = (2r)²/r² = 4. The thin wire stretches four times as far."
        },
        {
          "t": "mcq",
          "q": "Which statement is correct?",
          "opts": [
            { "label": "Steel is less elastic than rubber because it stretches less", "nudge": "This is the headline misconception of the chapter. Stretching more feels like being more elastic, but it is exactly backwards: elasticity measures the restoring tendency, not the stretch." },
            { "label": "A material with a larger Young's modulus is more elastic", "nudge": null },
            { "label": "Strain has the unit pascal", "nudge": "This confuses strain, which is a pure ratio with no unit at all, with stress and the moduli, which carry pascals." },
            { "label": "Bulk modulus applies only to solids", "nudge": "Inverted. Bulk modulus applies to all three states, and gases and liquids possess ONLY a bulk modulus, since they cannot be stretched or sheared." }
          ],
          "correct": 1,
          "solution": "A larger Y means a greater stress is needed for the same strain, which means a stronger restoring tendency, which is what more elastic means in physics."
        },
        {
          "t": "mcq",
          "q": "A uniform rod hangs from its top end and stretches by Δ<i>L</i> under its own weight. If instead the rod were weightless and the <b>same</b> total weight were hung from its bottom end, the elongation would be:",
          "opts": [
            { "label": "the same, ΔL", "nudge": "This ignores where the weight acts. Self-weight is distributed, so the lower parts of the rod carry almost none of it and barely stretch." },
            { "label": "2ΔL", "nudge": null },
            { "label": "ΔL/2", "nudge": "The right factor of two, applied the wrong way round. A concentrated load at the bottom stretches the rod MORE, because now every cross-section carries the full weight." },
            { "label": "4ΔL", "nudge": "There is no square here: the tension in the self-weight case grows linearly with height, so the factor is exactly two." }
          ],
          "correct": 1,
          "solution": "Self-weight gives ΔL = MgL/(2AY); the same weight hung at the end gives MgL/(AY), twice as much. The ½ says the distributed weight acts, in effect, at the centre of mass halfway down."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A brass wire 2.0 m long and of cross-section 0.50 mm<sup>2</sup> is stretched by 1.0 mm under a load. Taking <i>Y</i> = 1.0 × 10<sup>11</sup> Pa, find the load. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>F</i> = <i>YA</i>Δ<i>L</i>/<i>L</i> = (1.0 × 10<sup>11</sup>)(5.0 × 10<sup>−7</sup>)(1.0 × 10<sup>−3</sup>)/2.0 = 25 N, that is, a mass of 2.5 kg." },
            { "q": "[NEET] The bulk modulus of water is 2.2 × 10<sup>9</sup> Pa. What fractional change in volume occurs under an extra pressure of 1.1 × 10<sup>7</sup> Pa?", "a": "Δ<i>V</i>/<i>V</i> = Δ<i>P</i>/<i>B</i> = (1.1 × 10<sup>7</sup>)/(2.2 × 10<sup>9</sup>) = 5.0 × 10<sup>−3</sup>, a decrease of 0.5 per cent." },
            { "q": "[JEE Main] A wire elongates by 1 mm under a load. A second wire of the same material but double the length and double the diameter carries the same load. Find its elongation.", "a": "Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup>, so the factor is 2/4 = ½ and the elongation is 0.5 mm." },
            { "q": "[JEE Main] The breaking stress of a metal is 4.0 × 10<sup>8</sup> Pa and its density is 8.0 × 10<sup>3</sup> kg/m<sup>3</sup>. Find the greatest length of a wire of this metal that can hang vertically without breaking. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "The top carries the whole weight, so σ = ρ<i>g</i>ℓ. ℓ<sub>max</sub> = σ/(ρ<i>g</i>) = (4.0 × 10<sup>8</sup>)/(8.0 × 10<sup>4</sup>) = 5.0 × 10<sup>3</sup> m = 5 km. Notice the area cancels: a thicker wire is no help." },
            { "q": "[JEE Advanced] A solid cube of side <i>L</i> and shear modulus η has its bottom face fixed, and a tangential force <i>F</i> acts on the top face. Show that the top face displaces by <i>x</i> = <i>F</i>/(η<i>L</i>), and evaluate it for <i>L</i> = 0.10 m, η = 5.0 × 10<sup>10</sup> Pa, <i>F</i> = 5.0 × 10<sup>5</sup> N.", "a": "η = (<i>F</i>/<i>L</i><sup>2</sup>) ÷ (<i>x</i>/<i>L</i>) = <i>F</i>/(<i>Lx</i>), so <i>x</i> = <i>F</i>/(η<i>L</i>) = (5.0 × 10<sup>5</sup>)/[(5.0 × 10<sup>10</sup>)(0.10)] = 1.0 × 10<sup>−4</sup> m = 0.1 mm." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Radius versus diameter.</b> Examiners quote the diameter far more often than the radius. Forget to halve it before squaring and your area is out by a factor of 4, and <i>Y</i> with it. Underline the word the moment you read it.",
            "<b>Believing more stretch means more elastic.</b> A higher Young's modulus means more elastic. Rubber stretches enormously and is <i>less</i> elastic than steel by this definition, which is the one every exam means.",
            "<b>Putting units on strain.</b> Strain is a pure ratio: no pascals, no metres, no per cent unless you say per cent. Only stress and the moduli carry pascals, and they carry the same one.",
            "<b>Dropping the ½.</b> Self-weight elongation uses an effective length <i>L</i>/2 and elastic energy uses an average force <i>F</i>/2. The ½ is physics in both cases, not decoration, and it comes from the same fact: a quantity rising linearly from zero contributes its average.",
            "<b>Using Δ<i>L</i> = <i>FL</i>/(<i>AY</i>) when the tension or the area varies along the rod.</b> Then neither <i>F</i> nor <i>A</i> can come out of the sum, and the only correct move is to integrate <i>T</i>(<i>x</i>)/(<i>A</i>(<i>x</i>)<i>Y</i>) along the length, as both derivations above do."
          ]
        },
        {
          "t": "protip",
          "html": "for any same-material comparison, never compute Y. cancel it on sight and reduce the whole question to ΔL ∝ L/r², or FL/r² if the loads differ too. a thirty-second ratio replaces a messy two-line calculation, and you cannot make an arithmetic slip on a number you never wrote down. and one result worth carrying for the hard version: a rod that tapers from radius R₁ to R₂ stretches exactly like a uniform wire of radius √(R₁R₂), the geometric mean of the ends, and emphatically not the average (R₁+R₂)/2. thin regions dominate because strain goes as 1/A, so the skinny end pulls the answer its way."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "σ = F/A → Pa, [M L<sup>−1</sup> T<sup>−2</sup>] · ε = Δx/x → no unit", "note": "the one pair students mix up: same family, only one carries pascals" },
            { "f": "Hooke: σ = Eε, inside the elastic limit only", "note": "E depends on the material alone, never on the shape or the load" },
            { "f": "Y = FL/(A ΔL) = MgL/(πr<sup>2</sup> ΔL)", "note": "the slope of the straight part of the stress-strain curve" },
            { "f": "self-weight: ΔL = MgL/(2AY) = ρgL<sup>2</sup>/(2Y)", "note": "half the end-loaded value, because the weight acts on average halfway down" },
            { "f": "ℓ<sub>max</sub> = σ<sub>break</sub>/(ρg)", "note": "the greatest hanging length; the area cancels, so thickness never helps" },
            { "f": "one material, two wires: ΔL ∝ L/r<sup>2</sup>", "note": "longer stretches more, fatter stretches less, and area beats radius by a square" }
          ],
          "aids": [
            "\"stress is the squeeze, strain is the change\"",
            "\"more Y, more elastic, and steel beats rubber\"",
            "\"Please Eat Your Usual Food\" for Proportional, Elastic, Yield, Ultimate, Fracture"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Elastic Moduli, and Wires as Springs",
      "chip": "02 ELASTIC MODULI",
      "kalam": "redraw every wire as a spring, then it is Class 11 mechanics",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 left you with three ways to deform a solid and one number for each. You can <b>stretch</b> it, so its length changes, and Young's modulus <i>Y</i> measures the resistance. You can <b>shear</b> it, so its shape changes while its volume does not, and the modulus of rigidity η measures that. You can <b>squeeze</b> it from every side, so its volume changes while its shape does not, and the bulk modulus <i>B</i> measures that. Poisson's ratio ν, the fourth constant, then says how much a stretch in one direction quietly shrinks the perpendicular ones. The natural next question, and the whole point of this topic, is how you actually <i>use</i> these numbers."
        },
        {
          "t": "p",
          "html": "<b>Big idea 1: a loaded wire is just a spring.</b> Hang a mass from a wire and it stretches in proportion to the load, exactly like a spring obeying <i>F</i> = <i>kx</i>. You already have the algebra: rearrange <i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) into <i>F</i> = (<i>YA</i>/<i>L</i>) Δ<i>L</i>, and the bracket is playing the role of a spring constant. So <b>every rod is a spring of stiffness <i>k</i> = <i>YA</i>/<i>L</i></b>: stiffer if it is fatter, softer if it is longer. That single re-reading lets you attack any tangle of wires with the spring rules you already know from Class 11 mechanics."
        },
        {
          "t": "think",
          "html": "a bullock cart pulling a load with two ropes. tie them one after the other, in series, and the cart can sag further, with the weaker rope setting the limit. tie them side by side, in parallel, and they share the strain and the pair is stiffer than either alone. springs, wires, ropes, all the same arithmetic: end to end, the stretches add; side by side, the stiffnesses add."
        },
        {
          "t": "p",
          "html": "<b>Big idea 2: the four constants are not independent. There are really only two.</b> For a uniform, isotropic material, knowing any two of {<i>Y</i>, <i>B</i>, η, ν} fixes the other two automatically, through <i>Y</i> = 2η(1 + ν) = 3<i>B</i>(1 − 2ν). Physically this has to be true. Stretching, shearing and squeezing are not three separate magical properties: they all trace back to the <b>same</b> inter-atomic bonds you imagined in Topic 01. Disturb those bonds one way and the material's response in every other way is already decided."
        },
        {
          "t": "defgrid",
          "title": "The four elastic constants, side by side",
          "rows": [
            { "k": "Young's modulus Y", "v": "longitudinal stress ÷ longitudinal strain = <i>FL</i>/(<i>A</i> Δ<i>L</i>). Unit Pa. Length changes" },
            { "k": "Bulk modulus B", "v": "−Δ<i>P</i> ÷ (Δ<i>V</i>/<i>V</i>). Unit Pa. Volume changes, shape does not. The minus sign records that volume falls as pressure rises" },
            { "k": "Rigidity η", "v": "shear stress ÷ shear strain = τ/φ, with φ in radians. Unit Pa. Shape changes, volume does not" },
            { "k": "Poisson's ratio ν", "v": "−(lateral strain) ÷ (longitudinal strain). Dimensionless, 0 to 0.5 for real solids, about 0.2 to 0.4 for metals" },
            { "k": "Compressibility k", "v": "1/<i>B</i>, unit Pa<sup>−1</sup>. The same fact said the other way up: how easily a material yields to pressure" },
            { "k": "What fluids have", "v": "only <i>B</i>. A liquid or gas cannot sustain a shear and cannot be pulled along a line, so it has no η and no <i>Y</i>" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2 · ONE BLOCK, THREE DEFORMATIONS",
          "chips": ["stretch, and Y", "shear, and η", "squeeze, and B"],
          "captions": [
            "A bar clamped at one end and pulled along its axis. The length grows by ΔL and nothing else about the shape is asked about. Stress is F over the cross-section, strain is ΔL over L, and their ratio is Young's modulus Y.",
            "The same block glued to the floor with a force dragged along its top face. The volume is unchanged; only the shape tilts, through an angle φ, while the top slides a distance x over a height h. Stress is F over the top AREA, strain is φ = x/h in radians, and their ratio is the modulus of rigidity η.",
            "The same block squeezed normally on every face by a pressure P. Now the shape is unchanged and only the volume shrinks, from the dashed outline to the solid one. Stress is the pressure itself, strain is ΔV over V, and their ratio, with a minus sign, is the bulk modulus B. This is the only one of the three a liquid or a gas can offer you."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[0.6, 1.5], [1.2, 1.5], [1.2, 5.5], [0.6, 5.5]], "close": true, "fill": "hatch" },
                { "pts": [[5.4, 2.7], [6.6, 2.7], [6.6, 4.3], [5.4, 4.3]], "close": true, "dash": true, "tone": "amber", "label": "ΔL" }
              ],
              "bodies": [
                { "kind": "block", "at": [3.3, 3.5], "w": 4.2, "h": 1.6 }
              ],
              "arrows": [
                { "from": [6.8, 3.5], "to": [8.8, 3.5], "tone": "amber", "label": "F", "at": "end" },
                { "from": [1.2, 1.9], "to": [5.4, 1.9], "head": "both", "tone": "soft", "label": "L", "at": "mid" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [5, 1.4], "w": 6, "h": 0.3 }
              ],
              "polys": [
                { "pts": [[2.5, 1.55], [6.5, 1.55], [6.5, 4.55], [2.5, 4.55]], "close": true, "dash": true, "tone": "soft" },
                { "pts": [[2.5, 1.55], [6.5, 1.55], [7.6, 4.55], [3.6, 4.55]], "close": true, "tone": "ink" }
              ],
              "arcs": [
                { "at": [2.5, 1.55], "r": 1.6, "from": 70, "to": 90, "label": "φ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [4.0, 4.95], "to": [7.0, 4.95], "tone": "amber", "label": "F", "at": "end" },
                { "from": [2.5, 4.55], "to": [3.6, 4.55], "head": "both", "tone": "amber", "label": "x", "at": "mid" },
                { "from": [1.6, 1.55], "to": [1.6, 4.55], "head": "both", "tone": "soft", "label": "h", "at": "mid" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "polys": [
                { "pts": [[3.0, 1.8], [7.0, 1.8], [7.0, 5.2], [3.0, 5.2]], "close": true, "dash": true, "tone": "soft" },
                { "pts": [[3.5, 2.2], [6.5, 2.2], [6.5, 4.8], [3.5, 4.8]], "close": true, "tone": "ink" }
              ],
              "arrows": [
                { "from": [1.4, 3.5], "to": [2.9, 3.5], "tone": "amber", "label": "P", "at": "start" },
                { "from": [8.6, 3.5], "to": [7.1, 3.5], "tone": "amber" },
                { "from": [5.0, 6.6], "to": [5.0, 5.3], "tone": "amber" },
                { "from": [5.0, 0.4], "to": [5.0, 1.7], "tone": "amber" }
              ],
              "labels": [
                { "x": 5.0, "y": 3.5, "text": "V − ΔV" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FOUR CONSTANTS, IN ONE PLACE",
          "main": "<i>Y</i> = σ/ε = <i>FL</i>/(<i>A</i> Δ<i>L</i>) · η = τ/φ<br><i>B</i> = −Δ<i>P</i> ÷ (Δ<i>V</i>/<i>V</i>) = −<i>V</i> (<i>dP</i>/<i>dV</i>) · ν = −(lateral strain)/(longitudinal strain)",
          "legend": [
            "<i>Y</i>, <i>B</i> and η all carry the unit Pa and the dimensions [M L<sup>−1</sup> T<sup>−2</sup>]; ν is dimensionless",
            "<i>F</i> is the force (N), <i>A</i> the area (m<sup>2</sup>), <i>L</i> and Δ<i>L</i> the length and its change (m), <i>P</i> and Δ<i>P</i> the pressure and its change (Pa), <i>V</i> and Δ<i>V</i> the volume and its change (m<sup>3</sup>)",
            "τ is the shear stress (Pa) and φ the shear strain in <b>radians</b>; ν runs 0 to 0.5 for real materials, with a theoretical floor of −1"
          ],
          "note": "Solids possess all three moduli. Liquids and gases possess only <i>B</i>, because they flow rather than resist a shear."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A WIRE IS A SPRING",
          "tag": "the idea JEE Main asks about almost every year",
          "main": "<i>F</i> = <i>k</i> Δ<i>L</i>, with <i>k</i> = <i>YA</i>/<i>L</i><br>series: 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> · parallel: <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub><br>two equal rods end to end: <i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub> ÷ (<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)",
          "legend": [
            "<i>k</i> is the wire's force constant in N/m, built from <i>Y</i> (Pa), the area <i>A</i> (m<sup>2</sup>) and the length <i>L</i> (m); <i>F</i> is in newtons and Δ<i>L</i> in metres",
            "<i>k</i> rises with area and falls with length, so a short fat wire is a stiff spring and a long thin one is a soft spring",
            "<b>series means the same force and stretches that add; parallel means the same stretch and forces that add</b>"
          ],
          "note": "<i>Y</i><sub>eq</sub> is the <b>harmonic</b>-type mean, NOT the arithmetic mean ½(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>). That substitution is the single most common trap on this topic."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3 · WIRES JOINED, DRAWN AS SPRINGS",
          "chips": ["series: the stretches add", "parallel: the stiffnesses add"],
          "captions": [
            "End to end. Whatever the load W is, the lower wire hands the whole of it up to the upper one, so both carry the SAME tension. The total drop is the sum of the two individual stretches, which is why the reciprocals add and the combination is always softer than either wire alone.",
            "Side by side, sharing a rigid bar. Now the geometry forces the SAME stretch on both, and the load splits between them in proportion to their stiffnesses. The stiffnesses add, so the pair is stiffer than either alone, and the stiffer wire quietly takes the bigger share of the load."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[2.5, 9.2], [7.5, 9.2], [7.5, 9.7], [2.5, 9.7]], "close": true, "fill": "hatch" }
              ],
              "bodies": [
                { "kind": "spring", "at": [5, 9.2], "to": [5, 6.4] },
                { "kind": "spring", "at": [5, 6.4], "to": [5, 3.6] },
                { "kind": "rope", "at": [5, 3.6], "to": [5, 3.0] },
                { "kind": "block", "at": [5, 2.5], "w": 1.8, "h": 1.0, "label": "W" }
              ],
              "arrows": [
                { "from": [8.3, 9.2], "to": [8.3, 3.6], "head": "both", "tone": "amber", "label": "ΔL₁ + ΔL₂", "at": "mid" }
              ],
              "labels": [
                { "x": 6.9, "y": 7.8, "text": "k₁" },
                { "x": 6.9, "y": 4.6, "text": "k₂" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 1.0,
              "polys": [
                { "pts": [[1.5, 9.2], [8.5, 9.2], [8.5, 9.7], [1.5, 9.7]], "close": true, "fill": "hatch" }
              ],
              "bodies": [
                { "kind": "spring", "at": [3.2, 9.2], "to": [3.2, 5.35] },
                { "kind": "spring", "at": [6.8, 9.2], "to": [6.8, 5.35] },
                { "kind": "block", "at": [5, 5.1], "w": 5.2, "h": 0.5 },
                { "kind": "rope", "at": [5, 4.85], "to": [5, 4.2] },
                { "kind": "block", "at": [5, 3.6], "w": 1.8, "h": 1.0, "label": "W" }
              ],
              "arrows": [
                { "from": [9.2, 9.2], "to": [9.2, 5.35], "head": "both", "tone": "amber", "label": "ΔL", "at": "mid" }
              ],
              "labels": [
                { "x": 2.0, "y": 7.3, "text": "k₁" },
                { "x": 7.9, "y": 7.3, "text": "k₂" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SQUEEZING: BULK MODULUS AND COMPRESSIBILITY",
          "main": "Δ<i>V</i>/<i>V</i> = −Δ<i>P</i>/<i>B</i> · Δρ/ρ = +Δ<i>P</i>/<i>B</i> · <i>k</i> = 1/<i>B</i><br>for a gas: <i>B</i><sub>isothermal</sub> = <i>P</i>, <i>B</i><sub>adiabatic</sub> = γ<i>P</i>, and the ratio of the two is γ",
          "legend": [
            "<i>B</i> is the bulk modulus (Pa), <i>k</i> the compressibility (Pa<sup>−1</sup>), <i>P</i> and Δ<i>P</i> the pressure and its change (Pa)",
            "<i>V</i> and Δ<i>V</i> are the volume and its change (m<sup>3</sup>); ρ and Δρ are the density (kg/m<sup>3</sup>) and its change; γ is the ratio of specific heats, a pure number greater than 1",
            "the two signs are consistent, not contradictory: squeezing a fixed mass into less volume must raise its density"
          ],
          "note": "Ordering of stiffness against compression: <i>B</i><sub>solid</sub> > <i>B</i><sub>liquid</sub> ≫ <i>B</i><sub>gas</sub>. A gas has <b>no single</b> bulk modulus at all; the process decides it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ONLY TWO OF THE FOUR ARE INDEPENDENT",
          "tag": "isotropic materials only",
          "main": "<i>Y</i> = 2η(1 + ν) = 3<i>B</i>(1 − 2ν)<br>9/<i>Y</i> = 1/<i>B</i> + 3/η · ν = (3<i>B</i> − 2η) ÷ (2(3<i>B</i> + η))",
          "legend": [
            "<i>Y</i>, <i>B</i> and η are the three moduli in Pa; ν is Poisson's ratio, dimensionless",
            "give any two and the other two follow, so a question that hands you three is handing you a consistency check as well as data",
            "the second relation reads cleanly in reciprocals, and each of the three terms carries Pa<sup>−1</sup>"
          ],
          "note": "These hold <b>only</b> for homogeneous, isotropic materials. Wood is stiffer along the grain than across it, and fibre composites and single crystals need a whole matrix of constants rather than two."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE WIRE AS A SPRING, AND THE SERIES RULE, TAP A LINE",
          "steps": [
            {
              "eq": "<i>Y</i> = <i>FL</i>/(<i>A</i> Δ<i>L</i>) ⇒ <i>F</i> = (<i>YA</i>/<i>L</i>) Δ<i>L</i>",
              "why": "Nothing new has been assumed: this is the definition of Young's modulus with the elongation moved to the other side. Comparing it with F = kx identifies the wire's force constant as k = YA/L."
            },
            {
              "eq": "two wires end to end: Δ<i>L</i><sub>total</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub>",
              "why": "Both carry the same tension F, because the lower wire simply transmits the full load to the upper one, and the total drop of the load is the sum of the two stretches. Dividing through by F gives 1/keq = 1/k1 + 1/k2, the ordinary series rule."
            },
            {
              "eq": "for equal <i>L</i> and <i>A</i>: 2<i>L</i>/(<i>Y</i><sub>eq</sub><i>A</i>) = <i>L</i>/(<i>Y</i><sub>1</sub><i>A</i>) + <i>L</i>/(<i>Y</i><sub>2</sub><i>A</i>)",
              "why": "The combined rod has length 2L and area A, so its own stiffness is YeqA/(2L). Substituting each k as YiA/L into the series rule and cancelling A gives this line."
            },
            {
              "eq": "2/<i>Y</i><sub>eq</sub> = 1/<i>Y</i><sub>1</sub> + 1/<i>Y</i><sub>2</sub> ⇒ <i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)",
              "why": "Cancel L. The result is the harmonic mean, which always sits nearer the SMALLER modulus: the softer rod dominates a series pair, exactly as the weaker rope dominates a bullock cart's tandem hitch. It is not ½(Y1 + Y2), and that substitution is a favourite exam trap."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A GAS HAS NO FIXED BULK MODULUS, TAP A LINE",
          "steps": [
            {
              "eq": "start from <i>B</i> = −<i>V</i> (<i>dP</i>/<i>dV</i>)",
              "why": "This is the bulk modulus written for an infinitesimal squeeze rather than a finite one. For a gas, HOW you compress it changes the pressure it develops, so the derivative, and therefore B, depends on the process."
            },
            {
              "eq": "isothermal, <i>PV</i> = constant ⇒ <i>P dV</i> + <i>V dP</i> = 0 ⇒ <i>B</i><sub>iso</sub> = <i>P</i>",
              "why": "Compress slowly and the gas stays at the surrounding temperature. Differentiating the constant product and rearranging gives −V(dP/dV) = P exactly."
            },
            {
              "eq": "adiabatic, <i>PV</i><sup>γ</sup> = constant ⇒ γ<i>PV</i><sup>γ−1</sup><i>dV</i> + <i>V</i><sup>γ</sup><i>dP</i> = 0 ⇒ <i>B</i><sub>adia</sub> = γ<i>P</i>",
              "why": "Compress fast and no heat escapes, so the gas also heats up and pushes back harder. Differentiating the product rule and cancelling one factor of V raised to γ−1 leaves γP."
            },
            {
              "eq": "γ > 1, so a gas always resists a <b>sudden</b> squeeze more stiffly than a slow one",
              "why": "This is exactly why sound, which is an adiabatic compression wave, travels faster than the isothermal estimate Newton first guessed. The ratio of the two bulk moduli is γ itself, which is the fastest way to answer any exam question that offers both."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TYING THE FOUR CONSTANTS TOGETHER, TAP A LINE",
          "steps": [
            {
              "eq": "take <i>Y</i> = 2η(1 + ν) and <i>Y</i> = 3<i>B</i>(1 − 2ν)",
              "why": "These are the two source relations. Each says the same Young's modulus can be reconstructed from a different pair of constants, so setting them against each other must eliminate whatever they share."
            },
            {
              "eq": "from the first, ν = <i>Y</i>/(2η) − 1; from the second, ν = ½ − <i>Y</i>/(6<i>B</i>)",
              "why": "Solve each for ν. Poisson's ratio is the quantity to eliminate, because it is the only dimensionless one and it appears linearly in both."
            },
            {
              "eq": "<i>Y</i>/(2η) − 1 = ½ − <i>Y</i>/(6<i>B</i>) ⇒ 1/η + 1/(3<i>B</i>) = 3/<i>Y</i> ⇒ 9/<i>Y</i> = 1/<i>B</i> + 3/η",
              "why": "Equate, collect the Y terms on one side and the numbers on the other, divide through by Y and multiply by 3. The reciprocal form is the one to memorise, because it is symmetric enough to be hard to misremember, and it is the consistency check a JEE Advanced question expects you to run."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Which modulus does this question want?",
          "steps": [
            "<b>Is the deformation a change in LENGTH</b> under a pull or push along one axis? Then it is Young's modulus <i>Y</i>.",
            "<b>Is it a change in SHAPE</b>, with faces sliding or a rod twisting, and the volume unchanged? Then it is the rigidity η.",
            "<b>Is it a change in VOLUME</b> under all-round pressure, with the shape unchanged? Then it is the bulk modulus <i>B</i>.",
            "<b>Is the material a fluid?</b> Then only <i>B</i> exists at all, and for a gas you must still ask one more question: slow and isothermal, giving <i>B</i> = <i>P</i>, or sudden and adiabatic, giving <i>B</i> = γ<i>P</i>?",
            "<b>Are you given two of the four constants and asked for a third?</b> Then no deformation is involved at all: go straight to <i>Y</i> = 2η(1 + ν) = 3<i>B</i>(1 − 2ν)."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A solid copper cube of edge 10 cm is put under a uniform pressure of 7.0 × 10<sup>7</sup> Pa on all faces. Taking the bulk modulus of copper as 1.4 × 10<sup>11</sup> Pa, find the change in its volume.",
          "steps": [
            "Edge 0.10 m gives <i>V</i> = (0.10)<sup>3</sup> = 1.0 × 10<sup>−3</sup> m<sup>3</sup>. All-round pressure means bulk modulus.",
            "From <i>B</i> = −Δ<i>P</i> ÷ (Δ<i>V</i>/<i>V</i>): Δ<i>V</i> = −Δ<i>P</i> · <i>V</i>/<i>B</i>.",
            "Δ<i>V</i> = −(7.0 × 10<sup>7</sup>)(1.0 × 10<sup>−3</sup>)/(1.4 × 10<sup>11</sup>) = −(7.0 × 10<sup>4</sup>)/(1.4 × 10<sup>11</sup>) = −5.0 × 10<sup>−7</sup> m<sup>3</sup>.",
            "That is −0.50 cm<sup>3</sup> out of 1000 cm<sup>3</sup>, a fractional change of 5 × 10<sup>−4</sup>. The minus sign confirms a decrease, and the tiny size confirms copper is nearly incompressible."
          ],
          "ans": "ΔV = −5.0 × 10<sup>−7</sup> m<sup>3</sup> = −0.50 cm<sup>3</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A fixed mass of a diatomic gas (γ = 1.4) is at a pressure of 1.0 × 10<sup>5</sup> Pa. Find its bulk modulus when it is compressed (i) slowly and (ii) suddenly.",
          "steps": [
            "The trap is hunting for a tabulated bulk modulus of the gas as though it were a material constant, or reaching for a solid's formula. For a gas, <i>B</i> is <b>set by the process</b>.",
            "Slow means isothermal: <i>B</i> = <i>P</i> = 1.0 × 10<sup>5</sup> Pa.",
            "Sudden means adiabatic: <i>B</i> = γ<i>P</i> = (1.4)(1.0 × 10<sup>5</sup>) = 1.4 × 10<sup>5</sup> Pa.",
            "The whole question collapses to <i>is it slow or fast?</i> If any option offers a single fixed value for a gas's bulk modulus regardless of the process, eliminate it instantly."
          ],
          "ans": "isothermal 1.0 × 10<sup>5</sup> Pa · adiabatic 1.4 × 10<sup>5</sup> Pa"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two wires of the same material (<i>Y</i> = 2.0 × 10<sup>11</sup> Pa) and the same length 1.0 m are joined end to end. The upper has radius <i>R</i> = 0.50 mm, the lower 2<i>R</i> = 1.0 mm. A load of 100 N hangs from the bottom. Find the total elongation, and say which wire stores more elastic energy.",
          "steps": [
            "Series, so both carry the same 100 N. Areas: <i>A</i><sub>1</sub> = π(5.0 × 10<sup>−4</sup>)<sup>2</sup> = 7.85 × 10<sup>−7</sup> m<sup>2</sup>, and <i>A</i><sub>2</sub> = 4<i>A</i><sub>1</sub> = 3.14 × 10<sup>−6</sup> m<sup>2</sup>.",
            "Δ<i>L</i><sub>1</sub> = (100)(1.0) ÷ [(7.85 × 10<sup>−7</sup>)(2.0 × 10<sup>11</sup>)] = 100 ÷ (1.571 × 10<sup>5</sup>) = 6.4 × 10<sup>−4</sup> m.",
            "Δ<i>L</i><sub>2</sub> = Δ<i>L</i><sub>1</sub>/4 = 1.6 × 10<sup>−4</sup> m, since four times the area quarters the stretch.",
            "Total = 8.0 × 10<sup>−4</sup> m = 0.80 mm.",
            "Energy: <i>U</i> = ½<i>F</i>Δ<i>L</i> and <i>F</i> is common, so <i>U</i> ∝ Δ<i>L</i>. The <b>thinner upper wire stores four times</b> the energy. Thinner wires both stretch more and soak up more energy, which is why the weakest link does the most work and snaps first."
          ],
          "ans": "total 8.0 × 10<sup>−4</sup> m = 0.80 mm · the thinner wire stores 4 times the energy"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A homogeneous isotropic material has <i>Y</i> = 1.2 × 10<sup>11</sup> Pa and ν = 0.25. Find its bulk modulus and shear modulus, and verify that the two answers are mutually consistent.",
          "steps": [
            "<i>B</i> = <i>Y</i> ÷ [3(1 − 2ν)] = (1.2 × 10<sup>11</sup>) ÷ [3(0.50)] = (1.2 × 10<sup>11</sup>)/1.5 = 8.0 × 10<sup>10</sup> Pa.",
            "η = <i>Y</i> ÷ [2(1 + ν)] = (1.2 × 10<sup>11</sup>) ÷ [2(1.25)] = (1.2 × 10<sup>11</sup>)/2.5 = 4.8 × 10<sup>10</sup> Pa.",
            "Check with 9/<i>Y</i> = 1/<i>B</i> + 3/η. Right side: 1/(8.0 × 10<sup>10</sup>) + 3/(4.8 × 10<sup>10</sup>) = (1.25 + 6.25) × 10<sup>−11</sup> = 7.5 × 10<sup>−11</sup> Pa<sup>−1</sup>.",
            "Left side: 9/(1.2 × 10<sup>11</sup>) = 7.5 × 10<sup>−11</sup> Pa<sup>−1</sup>. The two routes agree, confirming the material really is described by just two independent constants.",
            "Plausibility: η is smaller than <i>Y</i>, and <i>B</i> sits between them, which is the ordering every ordinary metal shows."
          ],
          "ans": "B = 8.0 × 10<sup>10</sup> Pa · η = 4.8 × 10<sup>10</sup> Pa · consistent, both routes give 7.5 × 10<sup>−11</sup> Pa<sup>−1</sup>"
        },
        {
          "t": "mcq",
          "q": "A wire stretched by a hanging mass behaves as a spring of force constant <i>k</i>. If its length is halved, with the same material and the same cross-section, the new force constant is:",
          "opts": [
            { "label": "k/2", "nudge": "This assumes k is proportional to L, which is backwards. Shorter wires are stiffer, not softer." },
            { "label": "k", "nudge": "This confuses k, which depends on the geometry, with Y, which does not. Cutting the wire leaves Y untouched but changes k." },
            { "label": "2k", "nudge": null },
            { "label": "4k", "nudge": "This is the area-scaling or parallel-combination answer, misapplied to a change of length. A doubling of area would give 2k too; only a length change is happening here." }
          ],
          "correct": 2,
          "solution": "k = YA/L, so halving L doubles k. Y is unchanged, because it is a property of the steel and not of the piece."
        },
        {
          "t": "mcq",
          "q": "Two rods of identical dimensions but Young's moduli <i>Y</i><sub>1</sub> and <i>Y</i><sub>2</sub> are joined end to end. The equivalent Young's modulus of the composite rod is:",
          "opts": [
            { "label": "Y<sub>1</sub> + Y<sub>2</sub>", "nudge": "This is the parallel, side-by-side result. End to end is series, where reciprocals add, not the quantities themselves." },
            { "label": "(Y<sub>1</sub> + Y<sub>2</sub>)/2", "nudge": "The arithmetic mean is the single most common error here. Series springs do not average; their stretches add, so their reciprocal stiffnesses add." },
            { "label": "2Y<sub>1</sub>Y<sub>2</sub>/(Y<sub>1</sub> + Y<sub>2</sub>)", "nudge": null },
            { "label": "√(Y<sub>1</sub>Y<sub>2</sub>)", "nudge": "The geometric mean simply does not arise here. It appears elsewhere in the chapter, for the radii of a tapered rod, which is a different question." }
          ],
          "correct": 2,
          "solution": "End to end means series: the stretches add, giving 2/Y_eq = 1/Y1 + 1/Y2 and therefore the harmonic-type mean, which always sits nearer the smaller modulus."
        },
        {
          "t": "mcq",
          "q": "A fluid, whether liquid or gas, can possess:",
          "opts": [
            { "label": "only Young's modulus", "nudge": "A fluid cannot be pulled along a line at all, so a longitudinal stress has nothing to act on. Y is a solid-only modulus." },
            { "label": "only bulk modulus", "nudge": null },
            { "label": "only the modulus of rigidity", "nudge": "This is the exact opposite of the truth: a fluid flows precisely because it cannot sustain a shear stress, so η is the one modulus it certainly lacks." },
            { "label": "all three moduli", "nudge": "This forgets that having a definite length and a definite shape is a prerequisite for Y and η, and a fluid has neither." }
          ],
          "correct": 1,
          "solution": "Fluids flow, so they cannot sustain a shear (no η) and cannot be stretched along a line (no Y). They resist only a change of volume, so only B survives."
        },
        {
          "t": "mcq",
          "q": "For a given gas at pressure <i>P</i>, the ratio of its adiabatic bulk modulus to its isothermal bulk modulus is:",
          "opts": [
            { "label": "1", "nudge": "This treats a gas's bulk modulus as process-independent, which is exactly the thing a gas does not have." },
            { "label": "γ", "nudge": null },
            { "label": "1/γ", "nudge": "The ratio inverted. A sudden squeeze meets MORE resistance, so the adiabatic value must be the larger one and the ratio greater than 1." },
            { "label": "γ<sup>2</sup>", "nudge": "This double-counts γ, probably by confusing the bulk modulus with a speed-of-sound expression, where γ sits under a square root." }
          ],
          "correct": 1,
          "solution": "B(adiabatic) = γP and B(isothermal) = P, so the ratio is γ, which is greater than 1 for every gas."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] One litre of water is put under a pressure increase of 2.0 × 10<sup>7</sup> Pa. Taking the bulk modulus of water as 2.0 × 10<sup>9</sup> Pa, find the decrease in its volume.", "a": "Δ<i>V</i> = Δ<i>P</i> · <i>V</i>/<i>B</i> = (2.0 × 10<sup>7</sup>)(1.0 × 10<sup>−3</sup>)/(2.0 × 10<sup>9</sup>) = 1.0 × 10<sup>−5</sup> m<sup>3</sup> = 10 cm<sup>3</sup>." },
            { "q": "[NEET] At a pressure of 1.0 × 10<sup>5</sup> Pa, find the isothermal and adiabatic bulk moduli of a diatomic gas with γ = 1.4.", "a": "Isothermal <i>B</i> = <i>P</i> = 1.0 × 10<sup>5</sup> Pa; adiabatic <i>B</i> = γ<i>P</i> = 1.4 × 10<sup>5</sup> Pa." },
            { "q": "[JEE Main] A wire has force constant <i>k</i>. It is cut into two equal pieces and the pieces are connected side by side, in parallel. Find the effective force constant.", "a": "Halving the length doubles each piece's constant to 2<i>k</i>. In parallel the stiffnesses add: <i>k</i><sub>eq</sub> = 2<i>k</i> + 2<i>k</i> = 4<i>k</i> N/m." },
            { "q": "[JEE Main] Two rods of equal length and equal cross-section, of Young's moduli <i>Y</i> and 3<i>Y</i>, are joined end to end. Find the equivalent Young's modulus.", "a": "<i>Y</i><sub>eq</sub> = 2(<i>Y</i>)(3<i>Y</i>)/(<i>Y</i> + 3<i>Y</i>) = 6<i>Y</i><sup>2</sup>/4<i>Y</i> = 1.5<i>Y</i> Pa, which sits nearer the softer rod, not at the average 2<i>Y</i>." },
            { "q": "[JEE Advanced] For an isotropic material the bulk modulus is twice the shear modulus, <i>B</i> = 2η. Find its Poisson's ratio.", "a": "ν = (3<i>B</i> − 2η)/(2(3<i>B</i> + η)) with <i>B</i> = 2η gives (6η − 2η)/(2(6η + η)) = 4η/14η = 2/7 ≈ 0.29, comfortably inside the physical range 0 to 0.5." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Averaging the moduli of rods joined in series.</b> The equivalent is 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>), not ½(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>). Series means stretches add, which means reciprocals add. Map it back to springs and you will not slip.",
            "<b>Treating a gas's bulk modulus as a fixed number.</b> A gas has none. Always ask whether the squeeze is slow, giving <i>B</i> = <i>P</i>, or sudden, giving <i>B</i> = γ<i>P</i>. Using the wrong one is an instant loss.",
            "<b>Confusing <i>k</i> with <i>Y</i>.</b> Young's modulus is a material property and geometry cannot touch it. The spring constant <i>k</i> = <i>YA</i>/<i>L</i> is geometry itself. Cutting or rejoining a wire changes <i>k</i> and never <i>Y</i>.",
            "<b>Treating the four constants as four free numbers.</b> Any two fix the rest, so a question that gives three has given you a check as well as data. Use it.",
            "<b>Assuming two wires on a rigid bar always stretch equally.</b> Only if the bar is <i>told</i> to stay horizontal. If instead the load hangs at the midpoint of a light bar free to tilt, taking moments gives equal <b>tensions</b> and therefore unequal stretches, with the softer wire dropping further. Ask which quantity the constraint pins down before you write a single equation."
          ]
        },
        {
          "t": "protip",
          "html": "whenever wires are connected, redraw them as springs with k = YA/L before doing anything else, then use 1/k<sub>eq</sub> = Σ1/k<sub>i</sub> in series and k<sub>eq</sub> = Σk<sub>i</sub> in parallel. an unfamiliar elasticity problem turns into a spring problem you already own, and every average-versus-reciprocal trap disappears. one bonus the same substitution buys you: hang a mass M on the wire and it oscillates with T = 2π√(M/k) = 2π√(ML/(YA)), and g appears nowhere in it, so the period on the moon is identical."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "wire = spring: k = YA/L", "note": "k rises with area, falls with length; Y never moves" },
            { "f": "series 1/k<sub>eq</sub> = Σ1/k<sub>i</sub> · parallel k<sub>eq</sub> = Σk<sub>i</sub>", "note": "series shares the force, parallel shares the stretch" },
            { "f": "two equal rods in series: Y<sub>eq</sub> = 2Y<sub>1</sub>Y<sub>2</sub>/(Y<sub>1</sub> + Y<sub>2</sub>)", "note": "harmonic, never the average; it leans toward the softer rod" },
            { "f": "ΔV/V = −ΔP/B · Δρ/ρ = +ΔP/B · k = 1/B", "note": "B<sub>solid</sub> > B<sub>liquid</sub> ≫ B<sub>gas</sub>" },
            { "f": "gas: B<sub>iso</sub> = P, B<sub>adia</sub> = γP, ratio γ", "note": "process-dependent, so a gas has no single bulk modulus" },
            { "f": "Y = 2η(1 + ν) = 3B(1 − 2ν) · 9/Y = 1/B + 3/η", "note": "only two of the four constants are ever independent" }
          ],
          "aids": [
            "\"short and fat is stiff\", since k rises as L falls and A grows",
            "\"slow gas is soft, fast gas is stiff\", isothermal P against adiabatic γP",
            "\"two knowns rule them all\", any two elastic constants fix the other two"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Poisson's Ratio and the Energy a Stretch Stores",
      "chip": "03 POISSON AND ENERGY",
      "kalam": "stretch it and it slims; half the force, half the story",
      "blocks": [
        {
          "t": "p",
          "html": "Take a thick rubber band and stretch it between your hands, and watch closely: as it lengthens it also gets visibly <b>thinner</b>. Roll out a ball of atta and the same thing happens. Pulling in one direction always squeezes the other two. That sideways shrinking is what <b>Poisson's ratio</b> measures, and it is nothing more complicated than <i>how much thinner per unit longer</i>. A material with a large ν, like rubber at about 0.5, necks down dramatically. One with a small ν, like cork at about 0, barely changes width at all, which is exactly why cork makes a good bottle stopper: push it in lengthwise and it does not bulge sideways and jam."
        },
        {
          "t": "think",
          "html": "here is the question that makes poisson's ratio genuinely interesting rather than just another definition. stretch a wire and it gets longer, which wants to grow the volume, but it also gets thinner, which wants to shrink it. which one wins? does the total volume go up, down, or stay exactly where it was? the answer is decided by ν alone, and it is one line of algebra away."
        },
        {
          "t": "p",
          "html": "That line is Δ<i>V</i>/<i>V</i> = (1 − 2ν) Δ<i>L</i>/<i>L</i>. If ν < 0.5, which is almost every real solid, the lengthening wins and the volume <b>increases</b> slightly when you pull. If ν = 0.5 exactly, as for rubber and most liquids, the thinning perfectly cancels the lengthening and the volume <b>stays constant</b>: the material is <b>incompressible</b>. And now you can see why ν cannot exceed 0.5 for ordinary materials. A value above 0.5 would mean that stretching a body <i>shrinks</i> its volume, and inter-atomic forces do not permit that. The theoretical band is −1 ≤ ν ≤ 0.5; the band real solids actually occupy is 0 ≤ ν ≤ 0.5, and exam questions live on the difference between those two sentences."
        },
        {
          "t": "p",
          "html": "Now the second half of this topic: <b>deformation stores energy</b>. Pull back the string of a bow and you feel resistance; let go and the stored energy launches the arrow. A gulel, a trampoline, a pole-vaulter's flexing pole, all of them are energy banks that take in work as they deform and pay it back as they recover. A stretched wire is the same idea in miniature. The work you do against the inter-atomic springs does not vanish: it is stored as <b>elastic potential energy</b>, ready to be released the instant the load is removed, provided you stayed inside the elastic limit. The neat result to be derived is that the stored energy is exactly <b>half</b> of force times stretch, and understanding <i>why</i> it is half rather than the full product is what separates a careful student from a careless one."
        },
        {
          "t": "p",
          "html": "Both halves of this topic carry the same fine print. The volume relation is a <b>small-strain</b> result: it assumes the changes are tiny, so that products of two small quantities can be dropped, and it is a first-order statement and nothing more. All of it lives <b>inside the elastic limit</b>; beyond that, energy leaks away into permanent deformation and heat and none of these clean formulas survive. And the material must be <b>isotropic</b>, because Poisson's ratio is a single number only when the material responds the same way in every direction."
        },
        {
          "t": "def",
          "term": "Poisson's ratio, and the minus sign in front of it",
          "html": "ν = −(lateral strain)/(longitudinal strain) = −(Δ<i>r</i>/<i>r</i>) ÷ (Δ<i>L</i>/<i>L</i>). The minus sign is not a sign convention you may drop: it is there to make ν come out <b>positive</b>. Stretch a bar and Δ<i>L</i> is positive while Δ<i>r</i> is negative, so the raw ratio is negative and the minus flips it. ν is dimensionless, depends only on the material, and is quoted as a positive number. Typical values: steel about 0.28 to 0.30, aluminium alloys about 0.33, rubber about 0.5, cork about 0."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POISSON'S RATIO AND WHAT IT DOES TO VOLUME",
          "main": "ν = −(Δ<i>r</i>/<i>r</i>) ÷ (Δ<i>L</i>/<i>L</i>) = −(Δ<i>D</i>/<i>D</i>) ÷ (Δ<i>L</i>/<i>L</i>)<br>Δ<i>V</i>/<i>V</i> = (1 − 2ν) Δ<i>L</i>/<i>L</i>",
          "legend": [
            "<i>r</i> and <i>D</i> are the radius and diameter (m) and Δ<i>r</i>, Δ<i>D</i> their changes; <i>L</i> and Δ<i>L</i> are the length and its change (m); <i>V</i> and Δ<i>V</i> the volume (m<sup>3</sup>) and its change",
            "ν, and both sides of the volume relation, are <b>dimensionless</b>: nothing here carries pascals",
            "ν < 0.5 gives a volume that grows on stretching, ν = 0.5 gives no volume change at all, and ν = 0 gives Δ<i>V</i>/<i>V</i> = Δ<i>L</i>/<i>L</i>, since nothing contracts sideways"
          ],
          "note": "Practical range 0 ≤ ν ≤ 0.5, theoretical range −1 ≤ ν ≤ 0.5. Options offering 0 to 0.5 as the <i>theoretical</i> bound, or 0 to 1, are the two planted distractors."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE VOLUME CHANGE, IN ONE LOGARITHM, TAP A LINE",
          "steps": [
            {
              "eq": "for a cylindrical bar, <i>V</i> = π<i>r</i><sup>2</sup><i>L</i>",
              "why": "When the bar is stretched both r and L change slightly, and we need how V responds. Differentiating a product of powers directly is messy, so take a logarithm first."
            },
            {
              "eq": "ln <i>V</i> = ln π + 2 ln <i>r</i> + ln <i>L</i> ⇒ Δ<i>V</i>/<i>V</i> = 2 Δ<i>r</i>/<i>r</i> + Δ<i>L</i>/<i>L</i>",
              "why": "The logarithm turns the product into a sum, and differentiating a sum of logarithms turns every term into its own FRACTIONAL change. The exponent 2 on the radius comes straight through as a factor of 2, which is where the eventual 2ν is born."
            },
            {
              "eq": "by definition Δ<i>r</i>/<i>r</i> = −ν Δ<i>L</i>/<i>L</i>",
              "why": "This is Poisson's ratio rearranged. The minus sign says the radius shrinks while the length grows, which is the physical content of the whole idea."
            },
            {
              "eq": "Δ<i>V</i>/<i>V</i> = 2(−ν Δ<i>L</i>/<i>L</i>) + Δ<i>L</i>/<i>L</i> = (1 − 2ν) Δ<i>L</i>/<i>L</i>",
              "why": "Substitute and collect. Read the physics off immediately: ν = 0.5 makes the bracket vanish, so the volume is unchanged and the material is incompressible; ν < 0.5 leaves the bracket positive, so the volume grows. This single line is the whole reason ν has an upper bound of 0.5."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4 · WHAT A STRETCH COSTS, AND WHAT IT BUYS",
          "chips": ["longer, and thinner", "the area is the energy"],
          "captions": [
            "The solid outline is the bar before loading, length L and diameter 2r. The dashed outline is the same bar under tension: longer by ΔL and, at the same time, measurably thinner. Poisson's ratio is the second effect divided by the first, with a minus sign so the answer is positive. Whether the total volume grows or holds still is decided by whether ν is below 0.5 or exactly at it.",
            "Stress against strain for the same bar inside its elastic limit, using Example 1's numbers: a stress of 1.0 × 10⁸ Pa at a strain of 5 × 10⁻⁴. The straight line means the force grew steadily from zero, so the work done is the shaded triangle, half base times height, u = ½σε = 2.5 × 10⁴ J/m³. This is the F-x triangle of Work, Energy and Power with the axes normalised, which is exactly why the answer comes out per unit volume rather than in joules."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 8], "axes": "none",
              "polys": [
                { "pts": [[1.2, 3.2], [5.6, 3.2], [5.6, 4.8], [1.2, 4.8]], "close": true, "tone": "ink" },
                { "pts": [[1.2, 3.45], [8.0, 3.45], [8.0, 4.55], [1.2, 4.55]], "close": true, "dash": true, "tone": "amber" }
              ],
              "arrows": [
                { "from": [0.7, 3.2], "to": [0.7, 4.8], "head": "both", "tone": "soft", "label": "2r", "at": "mid" },
                { "from": [8.6, 3.45], "to": [8.6, 4.55], "head": "both", "tone": "amber", "label": "thinner", "at": "mid" },
                { "from": [1.2, 1.5], "to": [5.6, 1.5], "head": "both", "tone": "soft", "label": "L", "at": "below" },
                { "from": [5.6, 2.4], "to": [8.0, 2.4], "head": "both", "tone": "amber", "label": "ΔL", "at": "below" }
              ]
            },
            {
              "x": [0, 6], "y": [0, 1.4],
              "axisX": "strain ε (10⁻⁴)", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [5], "labels": ["5"] },
              "ticksY": { "at": [1.0], "labels": ["1.0"] },
              "curves": [{ "c": "line", "m": 0.2, "k": 0 }],
              "polys": [
                { "pts": [[0, 0], [5, 1.0], [5, 0]], "close": true, "fill": "wash", "tone": "amber", "label": "u = ½σε" }
              ],
              "segments": [
                { "from": [0, 1.0], "to": [5, 1.0], "dash": true, "soft": true },
                { "from": [5, 1.0], "to": [5, 0], "dash": true, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ELASTIC ENERGY, AND ENERGY DENSITY",
          "tag": "the CBSE derivation, and the NEET one-liner",
          "main": "<i>U</i> = ½ <i>F</i> Δ<i>L</i> = ½ × stress × strain × volume = ½ (<i>YA</i>/<i>L</i>)(Δ<i>L</i>)<sup>2</sup><br><i>u</i> = <i>U</i>/volume = ½ σ ε = ½ <i>Y</i> ε<sup>2</sup> = σ<sup>2</sup>/(2<i>Y</i>)",
          "legend": [
            "<i>U</i> is the total stored energy in joules (J); <i>F</i> is the final stretching force (N) and Δ<i>L</i> the elongation (m)",
            "<i>u</i> is the energy <b>density</b> in J m<sup>−3</sup>; <i>Y</i> is Young's modulus (Pa), <i>A</i> the area (m<sup>2</sup>), <i>L</i> the natural length (m)",
            "σ is in Pa and ε carries no unit, so their product already has the units of energy per unit volume: J m<sup>−3</sup> reduces to [M L<sup>−1</sup> T<sup>−2</sup>], the same dimensions as a stress"
          ],
          "note": "<i>u</i> is exactly the <b>area under the stress-strain curve</b>. Multiply by the volume to get joules. The area under a <i>force-extension</i> curve, by contrast, is the total energy directly."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ENERGY IN A STRETCHED WIRE, TAP A LINE",
          "steps": [
            {
              "eq": "to hold the wire at a stretch <i>l</i>, you must apply <i>F</i>(<i>l</i>) = (<i>YA</i>/<i>L</i>) <i>l</i>",
              "why": "This is Topic 02's spring reading of Young's modulus. The force you must supply grows LINEARLY from zero as the wire lengthens, which is the fact everything else here depends on."
            },
            {
              "eq": "stretching a further <i>dl</i> costs <i>dW</i> = <i>F</i>(<i>l</i>) <i>dl</i> = (<i>YA</i>/<i>L</i>) <i>l dl</i>",
              "why": "Over a sliver so thin that the force does not change across it, work is simply force times distance. This is the same infinitesimal step Work, Energy and Power uses for a variable force."
            },
            {
              "eq": "<i>W</i> = ∫ from 0 to Δ<i>L</i> of (<i>YA</i>/<i>L</i>) <i>l dl</i> = ½ (<i>YA</i>/<i>L</i>)(Δ<i>L</i>)<sup>2</sup>",
              "why": "The force is not constant, so integrate. Equivalently, read the triangle under the straight F-versus-l line, half base times height: this is exactly the spring triangle that gave ½kx², with k = YA/L."
            },
            {
              "eq": "<i>U</i> = <i>W</i> = ½ <i>F</i> Δ<i>L</i>",
              "why": "Since the final force is F = (YA/L)ΔL, the answer is half of final force times final stretch. The ½ is the AVERAGE force at work, the mean of 0 and F, and not the full F. Writing FΔL doubles your answer, and it is the commonest slip in this topic."
            },
            {
              "eq": "<i>u</i> = <i>U</i>/(<i>AL</i>) = ½ (<i>F</i>/<i>A</i>)(Δ<i>L</i>/<i>L</i>) = ½ σ ε",
              "why": "Divide by the wire's volume AL and regroup the factors: F/A is the stress and ΔL/L is the strain. So the energy per unit volume is half the product of the two axes of a stress-strain graph, which is why the area under that graph is a density and not a total."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Gradual loading against sudden loading",
          "rows": [
            { "k": "Gradual", "v": "the force is raised slowly from 0 to <i>F</i>. Work done = ½<i>F</i>Δ<i>L</i>, all of it stored as <i>U</i>. No heat" },
            { "k": "Sudden", "v": "the full load <i>F</i> is applied at once. Work done by the load = <i>F x</i><sub>max</sub>, but only half of it is stored; the other half is dissipated as heat" },
            { "k": "The elongations", "v": "<i>x</i><sub>max</sub> = 2<i>x</i><sub>static</sub> exactly. A suddenly dropped load always stretches a wire to twice its gentle-loading value" },
            { "k": "Why twice", "v": "the wire can only store ½<i>k x</i><sup>2</sup>, so the mismatch first appears as kinetic energy, which then overshoots the equilibrium point by exactly the same amount" },
            { "k": "What to check", "v": "if a question says <i>released suddenly</i> or <i>dropped</i>, the static formula is the wrong one. If it says <i>gradually increased</i>, the static formula is the right one" }
          ]
        },
        {
          "t": "proc",
          "title": "Reading energy off a graph: which axes are you looking at?",
          "steps": [
            "<b>Read the axis labels first.</b> Everything below depends on whether the vertical axis is a force or a stress, and most wrong answers here come from not looking.",
            "<b>Stress against strain: the area is energy PER UNIT VOLUME.</b> Its unit is J m<sup>−3</sup>, and the unit on the printed area is your tell. Multiply by the volume to get joules.",
            "<b>Force against extension: the area is the total energy, in joules, directly.</b> No multiplication needed, because the axes already carry newtons and metres.",
            "<b>Slope is never energy.</b> On a stress-strain graph the slope is Young's modulus; the area is the energy. Mixing these two is the commonest graph error in the whole chapter.",
            "<b>Stay inside the elastic limit before calling the area stored.</b> Past yield, part of that area has gone into permanent deformation and heat and will never come back."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A steel wire of length 2.0 m and cross-section 1.0 mm<sup>2</sup> is stretched by 1.0 mm. Given <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, find (a) the elastic potential energy stored and (b) the energy stored per unit volume.",
          "steps": [
            "First the stretching force: <i>F</i> = <i>YA</i>Δ<i>L</i>/<i>L</i> = (2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)(1.0 × 10<sup>−3</sup>)/2.0 = 100 N.",
            "(a) <i>U</i> = ½<i>F</i>Δ<i>L</i> = ½(100)(1.0 × 10<sup>−3</sup>) = 0.05 J.",
            "(b) Volume = <i>AL</i> = (1.0 × 10<sup>−6</sup>)(2.0) = 2.0 × 10<sup>−6</sup> m<sup>3</sup>, so <i>u</i> = 0.05/(2.0 × 10<sup>−6</sup>) = 2.5 × 10<sup>4</sup> J m<sup>−3</sup>.",
            "Cross-check by the other route: σ = <i>F</i>/<i>A</i> = 1.0 × 10<sup>8</sup> Pa and ε = Δ<i>L</i>/<i>L</i> = 5.0 × 10<sup>−4</sup>, so <i>u</i> = ½σε = ½(1.0 × 10<sup>8</sup>)(5.0 × 10<sup>−4</sup>) = 2.5 × 10<sup>4</sup> J m<sup>−3</sup>. The two agree, and the strain of 5 × 10<sup>−4</sup> confirms we are safely inside the elastic region."
          ],
          "ans": "U = 0.05 J · u = 2.5 × 10<sup>4</sup> J m<sup>−3</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Inside the elastic limit, the area under a wire's stress-strain graph is found to be 8 × 10<sup>4</sup> J m<sup>−3</sup>. The wire has volume 5 × 10<sup>−6</sup> m<sup>3</sup>. What is the total elastic energy stored?",
          "steps": [
            "The trap is reading <i>area under the stress-strain curve</i> and writing it down as the total energy. It is not: it is energy <b>per unit volume</b>.",
            "The unit printed on the area, J m<sup>−3</sup>, is the giveaway. Total energy needs a volume.",
            "<i>U</i> = <i>u</i> × <i>V</i> = (8 × 10<sup>4</sup>)(5 × 10<sup>−6</sup>) = 0.4 J.",
            "If an option offers 8 × 10<sup>4</sup> J, that is the planted trap: the density read as a total."
          ],
          "ans": "U = 0.4 J"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A wire of length 1.0 m and diameter 1.0 mm is made of a material with <i>Y</i> = 1.2 × 10<sup>11</sup> Pa and ν = 0.30. A tensile stress of 1.2 × 10<sup>8</sup> Pa is applied. Find (a) the longitudinal strain, (b) the lateral strain, (c) the fractional change in volume.",
          "steps": [
            "(a) Young's modulus gives the longitudinal strain: ε = σ/<i>Y</i> = (1.2 × 10<sup>8</sup>)/(1.2 × 10<sup>11</sup>) = 1.0 × 10<sup>−3</sup>.",
            "(b) Poisson's ratio gives the lateral one: lateral strain = −ν ε = −(0.30)(1.0 × 10<sup>−3</sup>) = −3.0 × 10<sup>−4</sup>. The minus sign says the diameter shrinks.",
            "(c) Δ<i>V</i>/<i>V</i> = (1 − 2ν) ε = (1 − 0.60)(1.0 × 10<sup>−3</sup>) = (0.40)(1.0 × 10<sup>−3</sup>) = 4.0 × 10<sup>−4</sup>.",
            "The volume <b>increases</b>, by 0.04 per cent, because ν is less than 0.5. Note the diameter was never needed: every answer here is a ratio."
          ],
          "ans": "ε = 1.0 × 10<sup>−3</sup> · lateral strain = −3.0 × 10<sup>−4</sup> · ΔV/V = 4.0 × 10<sup>−4</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A block of mass <i>m</i> hangs from a vertical wire (length <i>L</i>, area <i>A</i>, modulus <i>Y</i>) and is released <b>suddenly</b> from the position where the wire is just taut. Show the maximum elongation is twice the static one, then evaluate for <i>m</i> = 2.0 kg, <i>L</i> = 2.0 m, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Released suddenly, the block falls and stretches the wire until it momentarily stops at <i>x</i><sub>max</sub>, where the kinetic energy is zero at both ends of the motion.",
            "So the whole loss in gravitational potential energy has gone into elastic energy: <i>mg x</i><sub>max</sub> = ½(<i>YA</i>/<i>L</i>) <i>x</i><sub>max</sub><sup>2</sup>.",
            "Cancel one factor of <i>x</i><sub>max</sub>: <i>x</i><sub>max</sub> = 2<i>mgL</i>/(<i>YA</i>). The static elongation is <i>x</i><sub>st</sub> = <i>mgL</i>/(<i>YA</i>), so <i>x</i><sub>max</sub> = 2<i>x</i><sub>st</sub> exactly.",
            "Why twice: the full weight acts through the entire descent, doing <i>mg x</i><sub>max</sub>, but the wire can only bank half of that, and the mismatch first shows up as kinetic energy which then overshoots the equilibrium point by the same amount.",
            "Numerically: <i>x</i><sub>st</sub> = (2.0)(10)(2.0) ÷ [(2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)] = 40/(2.0 × 10<sup>5</sup>) = 2.0 × 10<sup>−4</sup> m, so <i>x</i><sub>max</sub> = 4.0 × 10<sup>−4</sup> m = 0.40 mm."
          ],
          "ans": "x<sub>max</sub> = 2x<sub>static</sub> = 4.0 × 10<sup>−4</sup> m = 0.40 mm"
        },
        {
          "t": "mcq",
          "q": "The <b>theoretical</b> limits within which Poisson's ratio can lie are:",
          "opts": [
            { "label": "0 to 0.5", "nudge": "This is the PRACTICAL range for ordinary materials, not the theoretical one. The question turns entirely on which of those two words it used." },
            { "label": "−1 to 0.5", "nudge": null },
            { "label": "−1 to 1", "nudge": "The lower bound is right but the upper one overshoots. A value above 0.5 would mean stretching a body shrank its volume, which is forbidden." },
            { "label": "0 to 1", "nudge": "Both bounds are wrong: it misses the negative half of the theoretical band and overshoots the upper limit of 0.5." }
          ],
          "correct": 1,
          "solution": "Thermodynamic stability of an isotropic solid restricts ν to −1 ≤ ν ≤ 0.5. Real ordinary materials occupy only 0 ≤ ν ≤ 0.5, which is the distractor."
        },
        {
          "t": "mcq",
          "q": "A material with Poisson's ratio exactly 0.5 is stretched along its length. Its volume:",
          "opts": [
            { "label": "increases", "nudge": "True for ν < 0.5, which is right idea and wrong value. At exactly 0.5 the lateral contraction cancels the lengthening precisely." },
            { "label": "decreases", "nudge": "This would need ν > 0.5, which is physically impossible for an ordinary material." },
            { "label": "remains constant", "nudge": null },
            { "label": "first increases, then decreases", "nudge": "This invents a non-monotonic behaviour that the small-strain relation, being linear in ΔL/L, simply cannot produce." }
          ],
          "correct": 2,
          "solution": "ΔV/V = (1 − 2ν)ε, and ν = 0.5 makes the bracket exactly zero. This is the incompressible limit, which is why rubber and most liquids sit there."
        },
        {
          "t": "mcq",
          "q": "Inside the elastic limit, the area under the stress-strain curve gives the:",
          "opts": [
            { "label": "elastic potential energy", "nudge": "This forgets what the axes carry. Stress is force over area and strain is dimensionless, so their product is an energy per unit VOLUME, not an energy." },
            { "label": "elastic potential energy per unit volume", "nudge": null },
            { "label": "elastic potential energy per unit length", "nudge": "Dimensionally wrong: σε reduces to J m<sup>−3</sup>, not J m<sup>−1</sup>." },
            { "label": "Young's modulus", "nudge": "That is the SLOPE of the curve, not the area. Slope and area are the two readings students most often swap." }
          ],
          "correct": 1,
          "solution": "Area = ½σε = u, the energy per unit volume. Multiply by the volume for joules, or use a force-extension graph, whose area gives joules directly."
        },
        {
          "t": "mcq",
          "q": "A wire of natural length <i>L</i> extends by ℓ when a force is <b>gradually</b> increased to a final value <i>F</i>. Which statement is <b>NOT</b> correct?",
          "opts": [
            { "label": "work done by the external force = ½Fℓ", "nudge": "This one is correct, so it is not the answer. Gradual loading averages the force at F/2." },
            { "label": "elastic potential energy stored = ½Fℓ", "nudge": "This one is correct too. Loading is quasi-static, so every joule of work is banked as potential energy." },
            { "label": "work done by the external force = Fℓ", "nudge": null },
            { "label": "no heat is produced in the wire", "nudge": "This one is correct: with the load raised slowly there is no kinetic energy to dissipate, so nothing is lost to heat." }
          ],
          "correct": 2,
          "solution": "For gradual loading the force averages F/2, so the work is ½Fℓ, not Fℓ. The Fℓ figure belongs to SUDDEN loading, where it is the work of a constant full load and half of it becomes heat."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A wire is stretched by 2.0 mm when a gradually increasing force reaching 50 N is applied. Calculate the elastic potential energy stored.", "a": "<i>U</i> = ½<i>F</i>Δ<i>L</i> = ½(50)(2.0 × 10<sup>−3</sup>) = 0.05 J." },
            { "q": "[NEET] Inside the elastic limit, what does the area under a stress-strain graph represent?", "a": "The elastic potential energy <b>per unit volume</b>, the energy density <i>u</i>, in J m<sup>−3</sup>. Multiply by the volume to get the total energy in joules." },
            { "q": "[JEE Main] A rod made of a material with Poisson's ratio 0.5 is stretched longitudinally. What is the fractional change in its volume?", "a": "Δ<i>V</i>/<i>V</i> = (1 − 2ν)ε = (1 − 1)ε = 0. The volume is unchanged: the material is incompressible." },
            { "q": "[JEE Main] A wire is subjected to a stress of 2.0 × 10<sup>8</sup> Pa. If the Young's modulus of its material is 2.0 × 10<sup>11</sup> Pa, find the elastic energy stored per unit volume.", "a": "<i>u</i> = σ<sup>2</sup>/(2<i>Y</i>) = (2.0 × 10<sup>8</sup>)<sup>2</sup>/(2 × 2.0 × 10<sup>11</sup>) = (4.0 × 10<sup>16</sup>)/(4.0 × 10<sup>11</sup>) = 1.0 × 10<sup>5</sup> J m<sup>−3</sup>." },
            { "q": "[JEE Advanced] A load attached <b>gradually</b> to a wire produces an elongation <i>x</i>. If an identical load is attached <b>suddenly</b>, released from the just-taut position, find the maximum elongation in terms of <i>x</i>.", "a": "2<i>x</i>. Energy conservation gives <i>mg x</i><sub>max</sub> = ½<i>k x</i><sub>max</sub><sup>2</sup>, so <i>x</i><sub>max</sub> = 2<i>mg</i>/<i>k</i> = twice the static value, and half the input work ends as heat." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the factor ½.</b> Elastic energy is ½<i>F</i>Δ<i>L</i>, because the force builds from zero and it is the <i>average</i> force that does the work. Writing <i>F</i>Δ<i>L</i> doubles your answer.",
            "<b>Confusing total energy with energy density.</b> The area under a <i>stress-strain</i> curve is per unit volume; the area under a <i>force-extension</i> curve is the total. Read the axes before reading the area.",
            "<b>Assuming volume is conserved when a body is stretched.</b> That holds only at ν = 0.5. For a metal with ν ≈ 0.3 the volume genuinely grows on stretching, by (1 − 2ν) times the longitudinal strain.",
            "<b>Losing the sign or the range of ν.</b> ν is quoted as a positive number, because the minus sign in the definition has already accounted for the opposite-signed strains, and it can never exceed 0.5 for a real material.",
            "<b>Using the static elongation when the load was dropped.</b> The words <i>released suddenly</i> double the answer, and dropping it from a height above the taut position increases it further still."
          ]
        },
        {
          "t": "protip",
          "html": "for sudden loading, skip the algebra: x<sub>max</sub> = 2x<sub>static</sub>, always, with exactly half the input work becoming heat. recognising that on sight turns a full energy-conservation derivation into one line. the harder version is worth carrying too. drop the mass from a height h above the just-taut wire and energy conservation reads Mg(h + x) = ½kx², whose useful factorisation at h = 0 is x(½kx − Mg) = 0, giving back x = 2Mg/k. for h much larger than x the Mgx term is a small correction and x ≈ √(2Mgh/k), so the stretch grows only as the square root of the drop: quadruple the height and you merely double the stretch. even so, a 0.20 m drop on a 2 m steel wire turns a 0.40 mm sudden stretch into about 9.1 mm, more than twenty times worse."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "ν = −(lateral strain)/(longitudinal strain)", "note": "dimensionless; 0 to 0.5 in practice, −1 to 0.5 in theory; steel ≈ 0.3" },
            { "f": "ΔV/V = (1 − 2ν) ΔL/L", "note": "ν = 0.5 gives ΔV = 0, incompressible; ν < 0.5 grows the volume" },
            { "f": "U = ½F ΔL = ½ σ ε × volume", "note": "the ½ is the average force, the mean of 0 and F" },
            { "f": "u = ½σε = ½Yε<sup>2</sup> = σ<sup>2</sup>/(2Y)", "note": "the area under the stress-strain curve, in J m<sup>−3</sup>" },
            { "f": "sudden loading: x<sub>max</sub> = 2x<sub>static</sub>", "note": "half the input work becomes heat; gradual loading wastes none" }
          ],
          "aids": [
            "\"stretch it, it slims\", a lengthwise pull always means a sideways shrink",
            "\"half the force, half the story\", elastic energy uses F/2",
            "\"drop it and it doubles\", a suddenly applied load gives twice the static stretch"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Ductile, Brittle, and the Yield Point",
      "chip": "04 YIELDING",
      "kalam": "slope is stiff, area is energy, length is ductility",
      "blocks": [
        {
          "t": "p",
          "html": "Every solid, pushed hard enough, eventually stops behaving like a spring. Up to a point it stretches and springs back faithfully, and that is the elastic behaviour of the last three topics. Push past the <b>yield point</b> and something irreversible happens: the material <b>gives</b>. It keeps stretching for barely any extra force, and when you finally release it, it does <b>not</b> return to its original shape. It carries a <b>permanent set</b>. Think of a government queue that holds its shape under mild pressure but, once a critical crowd builds, surges forward and never reforms into the neat line it was."
        },
        {
          "t": "p",
          "html": "What a material does <i>after</i> it yields is its personality, and it sorts materials into families. <b>Ductile</b> materials (copper, gold, mild steel) have a long, generous plastic region between yielding and fracture, so they stretch a lot before breaking and can be <b>drawn out into thin wires</b>, which is literally what ductility means. <b>Malleable</b> materials (gold, silver, aluminium, lead) yield easily under <i>compression</i> and can be <b>hammered or rolled into thin sheets</b> without cracking. Ductility lives in tension, malleability in compression, and most ductile metals happen to be malleable too, but the two ideas are genuinely distinct. <b>Brittle</b> materials (glass, cast iron, ceramic) have almost <i>no</i> plastic region: they snap clean, with little warning, very soon after the elastic limit. A glass tumbler does not bend before it shatters; it goes straight from fine to in pieces."
        },
        {
          "t": "think",
          "html": "so is rubber more elastic than steel? in everyday language, obviously, and in one honest sense too: rubber can be stretched to several times its length and still recover fully, where steel would have snapped long ago. but physics defines elasticity by the restoring force per unit strain, which is young's modulus, and for the same strain steel develops vastly larger internal stress. by that definition steel wins. rubber is an <b>elastomer</b>: huge recoverable strains, essentially no region of proportionality at all, so hooke's law never really applies to it, and a loading path that its unloading path refuses to retrace."
        },
        {
          "t": "p",
          "html": "That last property has a name and a consequence. The loading and unloading curves of an elastomer enclose a <b>loop</b>, and the phenomenon is <b>elastic hysteresis</b>. The area inside the loop is energy quietly converted to heat on every cycle. That is exactly why rubber is chosen for vehicle tyres and shock absorbers: it <b>eats</b> vibration energy rather than bouncing it back. It is also why a much-flexed rubber band warms up in your fingers."
        },
        {
          "t": "p",
          "html": "One warning before the definitions. These behaviours are properties of the <b>material</b>, but they shift. Many brittle metals turn ductile when hot, which is why a blacksmith heats iron before hammering it. A sudden shock makes even a ductile metal behave brittlely, because the loading <i>rate</i> matters. And repeated cycling produces <b>elastic fatigue</b>: a material loses strength after countless load cycles and can fail well below its normal breaking stress, which is why aircraft parts and railway axles are retired on a schedule rather than when they look worn."
        },
        {
          "t": "defgrid",
          "title": "The named points and the named areas",
          "rows": [
            { "k": "Yield strength σ<sub>y</sub>", "v": "the stress at the yield point, the boundary between recoverable elastic and permanent plastic deformation. Unit Pa" },
            { "k": "Ultimate tensile strength", "v": "the maximum stress on the curve, the most the material can bear before it necks and heads for fracture. Unit Pa" },
            { "k": "Breaking (fracture) stress", "v": "the stress at actual rupture. Unit Pa. For a ductile metal it is <i>lower</i> than the ultimate, because the sample has thinned" },
            { "k": "Modulus of resilience", "v": "elastic energy absorbed per unit volume up to yield, the area under the elastic part: σ<sub>y</sub><sup>2</sup>/(2<i>Y</i>), in J m<sup>−3</sup>" },
            { "k": "Toughness", "v": "total energy absorbed per unit volume up to fracture, the whole area under the curve, in J m<sup>−3</sup>" },
            { "k": "Permanent set", "v": "the residual strain left after a material is loaded past yield and then unloaded. Dimensionless, like any strain" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO ENERGY AREAS",
          "tag": "same curve, different limits",
          "main": "<i>u</i><sub>resilience</sub> = ½ σ<sub>y</sub> ε<sub>y</sub> = σ<sub>y</sub><sup>2</sup>/(2<i>Y</i>)<br>toughness = total area under the stress-strain curve up to fracture",
          "legend": [
            "σ<sub>y</sub> is the yield stress in Pa and ε<sub>y</sub> the strain at yield, dimensionless; <i>Y</i> is Young's modulus in Pa",
            "both quantities are energies per unit volume, J m<sup>−3</sup>, which reduces to [M L<sup>−1</sup> T<sup>−2</sup>], the same dimensions as a stress",
            "resilience is the energy handed <b>back</b>; toughness is the energy <b>absorbed and kept</b>"
          ],
          "note": "Springs and trampolines are designed to maximise resilience; crash barriers and helmets are designed to maximise toughness. A brittle spring steel can be very resilient and not tough at all."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 8.2 · THREE MATERIALS, THREE PERSONALITIES",
          "chips": ["ductile against brittle", "an elastomer, and its loop"],
          "captions": [
            "Two materials on the same axes. The brittle one, dashed, rises more steeply, so its Young's modulus is the larger, and it reaches a higher stress before it snaps at a strain of only 0.005: it is stiffer AND stronger. The ductile one is less steep but keeps going to a strain of 0.27, and the area beneath it is far greater. Stiff, strong and tough are three independent properties, and this pair separates them on purpose.",
            "An elastomer such as rubber, plotted to 400 per cent strain. There is no straight portion anywhere, so Hooke's law never applies, and the unloading path lies below the loading path instead of retracing it. The enclosed loop is elastic hysteresis, and its area is energy turned into heat on every single cycle. That, not stiffness, is why tyres and shock absorbers are made of the stuff."
          ],
          "frames": [
            {
              "x": [0, 0.3], "y": [0, 7],
              "axisX": "strain ε", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [0.1, 0.2] },
              "ticksY": { "every": 2 },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.003, 3.0], [0.02, 3.3], [0.06, 3.7], [0.12, 3.95], [0.17, 4.05], [0.22, 3.9], [0.27, 3.3]], "smooth": true },
                { "c": "pts", "pts": [[0, 0], [0.004, 6.0], [0.005, 6.3]], "dash": true }
              ],
              "points": [
                { "x": 0.005, "y": 6.3, "label": "snaps", "at": "ne" },
                { "x": 0.27, "y": 3.3, "label": "fracture", "at": "sw" }
              ],
              "labels": [
                { "x": 0.16, "y": 4.6, "text": "ductile" },
                { "x": 0.06, "y": 5.4, "text": "brittle" }
              ]
            },
            {
              "x": [0, 5], "y": [0, 3],
              "axisX": "strain ε", "axisY": "stress σ (10⁶ Pa)",
              "ticksX": { "every": 1 },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.5, 0.35], [1.5, 0.7], [2.5, 1.0], [3.2, 1.4], [3.7, 2.0], [4.0, 2.5]], "smooth": true },
                { "c": "pts", "pts": [[4.0, 2.5], [3.5, 1.5], [2.5, 0.7], [1.5, 0.4], [0.5, 0.15], [0, 0]], "smooth": true, "dash": true }
              ],
              "polys": [
                { "pts": [[0, 0], [0.5, 0.35], [1.5, 0.7], [2.5, 1.0], [3.2, 1.4], [3.7, 2.0], [4.0, 2.5], [3.5, 1.5], [2.5, 0.7], [1.5, 0.4], [0.5, 0.15]], "close": true, "smooth": true, "fill": "wash", "tone": "red", "label": "lost as heat" }
              ],
              "labels": [
                { "x": 1.2, "y": 1.9, "text": "loading" },
                { "x": 3.2, "y": 0.5, "text": "unloading" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The journey along the curve, region by region",
          "steps": [
            "<b>Linear region, up to the proportional limit.</b> Stress is proportional to strain, Hooke's law holds, and the slope is <i>Y</i>. Unload anywhere here and the wire recovers fully.",
            "<b>Elastic limit, then yield point.</b> The elastic limit is the last point of full recovery; the yield point is the onset of large plastic flow. For many metals they sit so close together that they are treated as one.",
            "<b>Plastic region, beyond yield.</b> Strain grows rapidly for very little extra stress. Unload from here and the wire keeps a <b>permanent set</b>: the unloading line runs parallel to the original elastic line but does not return to the origin. That is the defining signature of yielding.",
            "<b>Ultimate tensile strength.</b> The peak. Past it, a ductile sample <b>necks</b>, thinning locally, so the load it can carry falls even though the material has not failed yet.",
            "<b>Fracture point.</b> The wire breaks, and the stress there is the breaking stress. Because of necking it is usually below the ultimate for a ductile metal."
          ]
        },
        {
          "t": "proc",
          "title": "Classifying a material from its curve, in four readings",
          "steps": [
            "<b>Steep initial slope means a high Young's modulus, so a stiff material.</b> A gentle slope means a low <i>Y</i>, so a flexible one. It is the slope that gives stiffness, never the height.",
            "<b>A long plastic region between yield and fracture means ductile.</b> Fracture almost immediately after the elastic limit means brittle.",
            "<b>No straight portion at all, a huge recoverable strain and an unloading loop means an elastomer.</b> Nothing else looks like that.",
            "<b>A large total area under the curve means tough</b>, since the material has absorbed a lot of energy before breaking. Ductile materials are generally tough; brittle ones are not.",
            "<b>Never bundle the four readings onto one material.</b> A stiff material can be brittle and a flexible one ductile, and an exam graph is usually drawn precisely to separate them."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5 · TWO AREAS UNDER ONE CURVE",
          "chips": ["resilience, to yield", "toughness, to fracture"],
          "captions": [
            "The first 0.0026 of strain, magnified, so the elastic region can actually be seen. The shaded region is bounded on the right by the yield point, and its area is the modulus of resilience: the energy per unit volume the material can absorb and then hand back in full. For a wire with σy = 3.0 × 10⁸ Pa and Y = 2.0 × 10¹¹ Pa, that area is σy²/(2Y) = 2.25 × 10⁵ J/m³.",
            "The same curve at full range, and now the shading runs all the way to fracture. That whole area is the toughness: every joule per cubic metre the material swallows before it breaks, elastic and plastic together. Notice how small the first chip's triangle is inside this one. Almost all of a ductile metal's toughness is bought in the plastic region, which is exactly why a stiff, strong, brittle material can still be the poorer choice for a crash barrier."
          ],
          "frames": [
            {
              "x": [0, 0.0026], "y": [0, 3.4],
              "axisX": "strain ε", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [0.001, 0.002], "labels": ["0.001", "0.002"] },
              "ticksY": { "at": [1, 2, 3] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.0012, 2.4], [0.00145, 2.68], [0.0016, 2.85], [0.00185, 2.97], [0.002, 3.0], [0.00245, 3.05]] }
              ],
              "polys": [
                { "pts": [[0, 0], [0.0012, 2.4], [0.00145, 2.68], [0.0016, 2.85], [0.00185, 2.97], [0.002, 3.0], [0.002, 0]], "close": true, "fill": "wash", "tone": "green", "label": "resilience" }
              ],
              "points": [
                { "x": 0.002, "y": 3.0, "label": "yield", "at": "se" }
              ]
            },
            {
              "x": [0, 0.28], "y": [0, 4.6],
              "axisX": "strain ε", "axisY": "stress σ (10⁸ Pa)",
              "ticksX": { "at": [0.1, 0.2] },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.002, 3.0], [0.01, 3.15], [0.04, 3.5], [0.08, 3.78], [0.12, 3.93], [0.16, 4.0], [0.2, 3.88], [0.25, 3.3]], "smooth": true }
              ],
              "polys": [
                { "pts": [[0, 0], [0.002, 3.0], [0.01, 3.15], [0.04, 3.5], [0.08, 3.78], [0.12, 3.93], [0.16, 4.0], [0.2, 3.88], [0.25, 3.3], [0.25, 0]], "close": true, "smooth": true, "fill": "wash", "tone": "amber", "label": "toughness" }
              ],
              "points": [
                { "x": 0.25, "y": 3.3, "label": "fracture", "at": "sw" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Elastic hysteresis, and elastic fatigue",
          "html": "<b>Elastic hysteresis</b> is the failure of the unloading curve to retrace the loading curve. The enclosed loop area is the energy converted to heat per cycle, per unit volume. A large loop is a <i>feature</i> in a tyre or a shock absorber, where you want vibration eaten rather than returned, and a defect in a spring, where you want it returned. <b>Elastic fatigue</b> is a different thing with a similar flavour: after very many load cycles a material's strength falls, so it can fail at a stress well below its ordinary breaking stress. Neither effect appears anywhere in a single-loading stress-strain curve, which is why both have to be tested for separately."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A steel wire has a yield strength of 3.0 × 10<sup>8</sup> Pa and a Young's modulus of 2.0 × 10<sup>11</sup> Pa. Calculate its modulus of resilience, the maximum elastic energy it can store per unit volume without taking a permanent set.",
          "steps": [
            "The modulus of resilience is the energy density at the yield point, so use <i>u</i> = σ<sup>2</sup>/(2<i>Y</i>) evaluated at σ = σ<sub>y</sub>.",
            "<i>u</i> = (3.0 × 10<sup>8</sup>)<sup>2</sup> ÷ [2(2.0 × 10<sup>11</sup>)] = (9.0 × 10<sup>16</sup>)/(4.0 × 10<sup>11</sup>).",
            "<i>u</i> = 2.25 × 10<sup>5</sup> J m<sup>−3</sup>.",
            "Read it as a safe elastic energy budget per cubic metre. Store more than this and the wire yields and stops giving the energy back."
          ],
          "ans": "u<sub>resilience</sub> = 2.25 × 10<sup>5</sup> J m<sup>−3</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two materials P and Q are tested. On the same stress-strain axes, P's curve rises steeply and ends abruptly at a low strain; Q's rises less steeply but continues to a much higher strain before fracturing. Which material (i) has the greater Young's modulus and (ii) is more ductile?",
          "steps": [
            "The trap is assuming that whichever curve goes higher or steeper is better in every way, or confusing stiffness with ductility.",
            "Young's modulus is the <b>slope</b> of the linear part. P is steeper, so P has the greater <i>Y</i> and is the stiffer material.",
            "Ductility is how far the curve <b>extends</b> before fracture. Q reaches a much higher strain, so Q is the more ductile, and P, snapping early, is the more brittle.",
            "So stiffness and ductility point to different materials here. Eliminate any option that bundles greater <i>Y</i> with more ductile onto the same material: that is the planted error."
          ],
          "ans": "P has the greater Young's modulus · Q is the more ductile"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A steel lift cable must support a maximum load of 2000 kg. The yield strength of the steel is 2.5 × 10<sup>8</sup> Pa and the design requires a safety factor of 5, so the working stress must not exceed one fifth of the yield strength. Find the minimum diameter of the cable. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Maximum force: <i>F</i> = <i>mg</i> = (2000)(10) = 2.0 × 10<sup>4</sup> N.",
            "Allowed working stress: σ<sub>work</sub> = σ<sub>y</sub>/5 = (2.5 × 10<sup>8</sup>)/5 = 5.0 × 10<sup>7</sup> Pa.",
            "Minimum area: <i>A</i> = <i>F</i>/σ<sub>work</sub> = (2.0 × 10<sup>4</sup>)/(5.0 × 10<sup>7</sup>) = 4.0 × 10<sup>−4</sup> m<sup>2</sup>.",
            "From <i>A</i> = π<i>d</i><sup>2</sup>/4: <i>d</i> = √(4<i>A</i>/π) = √(1.6 × 10<sup>−3</sup>/π) = √(5.09 × 10<sup>−4</sup>) ≈ 2.3 × 10<sup>−2</sup> m = 2.3 cm.",
            "The safety factor keeps the cable working comfortably inside the elastic region: at the rated load it never approaches yielding, and the strain stays around 2.5 × 10<sup>−4</sup>."
          ],
          "ans": "minimum diameter ≈ 2.3 × 10<sup>−2</sup> m = 2.3 cm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two wires of equal length and cross-section, of materials A and B, are tested to fracture. Curve A is a steep straight line to a high stress, then fractures almost at once. Curve B is a less steep line to a lower yield stress, followed by a long plastic plateau to a large strain, the plateau lying below A's fracture stress. Determine which has the greater (i) Young's modulus, (ii) breaking stress, (iii) ductility, (iv) toughness.",
          "steps": [
            "(i) Young's modulus is the slope of the initial straight line. A is steeper, so <i>Y</i><sub>A</sub> > <i>Y</i><sub>B</sub>: A is the stiffer material.",
            "(ii) Breaking stress is the stress at fracture. A fractures at a high stress and B's whole plateau lies below it, so A's breaking stress is the greater: A is the stronger.",
            "(iii) Ductility is the extent of plastic deformation, the curve's length from yield to fracture. A snaps with almost no plastic region and B has a long plateau, so B is far more ductile and A is brittle.",
            "(iv) Toughness is the total area to fracture. A reaches a higher stress but its area is a thin sliver, because it breaks at a tiny strain. B's modest stress acts over a huge strain, enclosing a far larger area, so B is the tougher.",
            "The takeaway: <b>strong, stiff and tough are three independent properties.</b> A glass rod, like A, is strong and stiff and shatters with no warning; a mild-steel rod, like B, bends and absorbs enormous energy before failing, which is precisely why structural beams are made of the latter."
          ],
          "ans": "Y: A · breaking stress: A · ductility: B · toughness: B"
        },
        {
          "t": "mcq",
          "q": "A material that breaks soon after the elastic limit is crossed, with almost no plastic deformation, is called:",
          "opts": [
            { "label": "ductile", "nudge": "This is the opposite. A ductile material has a LONG plastic region between yielding and fracture, which is what lets it be drawn into wire." },
            { "label": "brittle", "nudge": null },
            { "label": "malleable", "nudge": "Malleability is about being hammered into sheets under compression, and says nothing about how soon fracture arrives." },
            { "label": "an elastomer", "nudge": "An elastomer endures huge strains elastically, which is the very opposite of snapping early." }
          ],
          "correct": 1,
          "solution": "Little or no plastic region before fracture is the definition of brittleness. Glass and cast iron are the standard examples."
        },
        {
          "t": "mcq",
          "q": "Regarding steel and rubber, which statement is correct?",
          "opts": [
            { "label": "rubber is more elastic than steel because it has a larger Young's modulus", "nudge": "This reverses the modulus comparison: rubber's Y is SMALL, not large. That is what allows it to stretch so far in the first place." },
            { "label": "steel is more elastic than rubber because, for a given strain, a larger restoring stress develops in steel", "nudge": null },
            { "label": "both have the same Young's modulus", "nudge": "Plainly false. Steel is around 2 × 10<sup>11</sup> Pa and rubber around 10<sup>7</sup> Pa, four orders of magnitude apart." },
            { "label": "rubber obeys Hooke's law more closely than steel", "nudge": "Backwards. Rubber has almost no proportional region at all, so it obeys Hooke's law far LESS well than steel does." }
          ],
          "correct": 1,
          "solution": "By the modulus definition, elasticity favours steel: the same strain calls up a far greater internal stress in steel than in rubber."
        },
        {
          "t": "mcq",
          "q": "The ductility of a material, read from its stress-strain curve, is measured by:",
          "opts": [
            { "label": "the slope of the linear region", "nudge": "The slope gives Young's modulus, which is stiffness, not ductility. A material can be very stiff and completely brittle." },
            { "label": "the area under the elastic portion", "nudge": "That area is the resilience, an energy per unit volume. Ductility is a length along the strain axis, not an area." },
            { "label": "the length of the curve between the yield point and the ultimate load", "nudge": null },
            { "label": "the stress at the proportional limit", "nudge": "That stress concerns where elastic behaviour ends, not how far the material can be plastically extended afterwards." }
          ],
          "correct": 2,
          "solution": "A longer stretch of curve between yielding and the ultimate load means more plastic extension before failure, which is exactly what ductility measures."
        },
        {
          "t": "mcq",
          "q": "Vulcanised rubber is preferred for shock absorbers mainly because:",
          "opts": [
            { "label": "it has a very high Young's modulus", "nudge": "Rubber's Y is low, not high. Stiffness is not what a shock absorber is for." },
            { "label": "it obeys Hooke's law over a large range", "nudge": "Rubber notably does NOT obey Hooke's law: its curve is bent from the origin, with no proportional region at all." },
            { "label": "its loading and unloading curves enclose a large area, dissipating energy as heat", "nudge": null },
            { "label": "it is brittle and absorbs shock by cracking", "nudge": "Rubber is the opposite of brittle, and cracking would be a failure, not a design feature." }
          ],
          "correct": 2,
          "solution": "The large elastic-hysteresis loop means a great deal of energy is turned into heat every cycle, which is exactly what damping vibration requires."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define ductile and brittle materials, give one example of each, and say which region of the stress-strain curve decides which a material is.", "a": "Ductile: a long plastic region, so it can be drawn into wires; example copper. Brittle: fractures almost at once past the elastic limit; example glass. The <b>plastic region</b>, from yield to fracture, is what decides." },
            { "q": "[NEET] A material is stretched and then unloaded, and it does not return to its original length but keeps some elongation. Which property does this demonstrate, and what is the retained strain called?", "a": "Plasticity, that is, plastic deformation past the yield point. The retained strain is called the <b>permanent set</b>, and being a strain it is dimensionless." },
            { "q": "[JEE Main] A material has yield strength 4.0 × 10<sup>8</sup> Pa and Young's modulus 1.0 × 10<sup>11</sup> Pa. Find its modulus of resilience.", "a": "<i>u</i> = σ<sub>y</sub><sup>2</sup>/(2<i>Y</i>) = (1.6 × 10<sup>17</sup>)/(2.0 × 10<sup>11</sup>) = 8.0 × 10<sup>5</sup> J m<sup>−3</sup>." },
            { "q": "[JEE Main] A wire of cross-section 2.0 mm<sup>2</sup> is made of a material whose yield strength is 2.0 × 10<sup>8</sup> Pa. What is the maximum load it can carry without permanent deformation? Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "<i>F</i><sub>max</sub> = σ<sub>y</sub><i>A</i> = (2.0 × 10<sup>8</sup>)(2.0 × 10<sup>−6</sup>) = 400 N, which is a mass of 40 kg." },
            { "q": "[JEE Advanced] Explain, in terms of the area enclosed by its loading-unloading curve, why rubber is chosen over steel for tyres and shock absorbers, and say where the lost energy goes.", "a": "Rubber's loading and unloading curves enclose a large hysteresis loop, and that enclosed area is energy dissipated per cycle. So rubber absorbs and damps vibration instead of returning it. The lost energy becomes <b>heat</b>, which is why a much-flexed rubber band warms up." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing ductility, malleability and elasticity.</b> Ductility means drawn into <i>wires</i>, in tension. Malleability means hammered into <i>sheets</i>, in compression. Elasticity means the ability to <i>recover</i>. A material can rank quite differently on all three.",
            "<b>Saying rubber is more elastic than steel.</b> True only in the loose everyday sense of a large recoverable strain. By the physics definition, Young's modulus, steel is more elastic. Read which definition the question wants.",
            "<b>Swapping slope for area.</b> The <i>slope</i> of the linear part is Young's modulus, so stiffness. <i>Areas</i> are energies: the area to yield is resilience, the total area to fracture is toughness. Mixing these is the single commonest graph error in the chapter.",
            "<b>Treating the yield point as fracture.</b> Yielding is the onset of permanent deformation, not breaking. A ductile material yields and then carries load for a long plastic range before it finally fractures.",
            "<b>Assuming the stiffest material is also the strongest and the toughest.</b> A two-curve exam question is usually drawn precisely to break that bundle, with one material winning on stiffness and strength and the other on ductility and toughness."
          ]
        },
        {
          "t": "protip",
          "html": "on any two-curve comparison, decode each property from one specific feature and answer in this fixed order: slope gives stiffness, that is Y; the height of the fracture point gives strength, that is the breaking stress; the horizontal extent past yield gives ductility; the total enclosed area gives toughness. running that checklist stops you bundling stiff, strong and tough onto one material when the graph is deliberately separating them. and if a question mentions repeated cycling or a component that has been in service a long time, the word it wants is elastic fatigue, not any of the four."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "yield point: elastic (recovers) → plastic (permanent set)", "note": "beyond it, strain grows fast for very little extra stress" },
            { "f": "ductile = long plastic region → wires · brittle = snaps just past the elastic limit", "note": "copper against glass" },
            { "f": "malleable = hammered into sheets · elastomer = huge strain, no proportional region, a loop", "note": "gold and aluminium; rubber" },
            { "f": "resilience = σ<sub>y</sub><sup>2</sup>/(2Y) · toughness = total area to fracture", "note": "energy returned against energy absorbed and kept" },
            { "f": "hysteresis loop area = heat lost per cycle", "note": "the reason tyres and shock absorbers are rubber" },
            { "f": "steel is more elastic than rubber, by modulus", "note": "rubber merely recovers from far larger strains" }
          ],
          "aids": [
            "\"ductile draws wires, malleable makes sheets\"",
            "\"slope is stiff, area is energy, length is ductility\"",
            "\"loop equals lost heat\", the hysteresis area is what rubber eats"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Elasticity at Work",
      "chip": "05 APPLICATIONS",
      "kalam": "find the exponent first, then take the ratio",
      "blocks": [
        {
          "t": "p",
          "html": "Why is a solid elastic in the first place? Zoom all the way in. The atoms sit at fixed average positions, held there by electrical forces from their neighbours: attractive when pulled apart, repulsive when pushed together. Each atom rests at the bottom of a <b>potential well</b>, at the separation <i>r</i><sub>0</sub> where those forces balance. Displace it slightly and the well behaves, for small displacements, exactly like a tiny spring, with a restoring force proportional to the displacement. Multiply that over the trillions of bonds across a wire's cross-section and you get the macroscopic behaviour you already know: <b>Hooke's law is the collective voice of countless atomic springs.</b> Young's modulus is large when those bonds are stiff, as in metals and diamond, and small when they are floppy, as in rubber, where long molecular chains uncoil rather than stretch their bonds."
        },
        {
          "t": "think",
          "html": "every structure you trust is a deliberate negotiation with elasticity. the railway bridge your train rumbles over, the crane lifting a slab at a construction site, the pillars of a flyover, the wing of an aeroplane. too flexible and it sags or sways dangerously; too brittle and it cracks; too heavy and it is wasteful. the whole art is getting maximum stiffness and strength out of minimum material, while staying safely inside the elastic limit at all times."
        },
        {
          "t": "p",
          "html": "Start with beams. A beam loaded in the middle <b>bends</b>: its lower fibres stretch, its upper fibres compress, and a <b>neutral layer</b> in between neither stretches nor shrinks. How far it sags, the <b>depression</b> δ, depends on the load and the material, but it depends far more dramatically on the <b>shape</b> of the cross-section. Since the material near the neutral layer barely does any work, you can scoop it out and pile that material far from the centre instead, which gives the familiar <b>I-section</b>: the same stiffness for far less weight. That one insight is why steel girders, railway tracks and aircraft spars are I-shaped or hollow."
        },
        {
          "t": "p",
          "html": "Two more negotiations complete the picture. <b>Mountains cannot be infinitely tall.</b> Rock at the base of a mountain bears the weight of everything above it, and pile the mountain too high and that stress exceeds the rock's strength, so the base flows or crumbles. This sets a natural ceiling of roughly 10 km, which is why Everest is the size it is and not ten times bigger. And <b>heat is a hidden force</b>. Clamp a rod rigidly and heat it: it wants to expand and cannot, so it pushes on its supports with enormous force. That <b>thermal stress</b> is why railway tracks are laid with gaps, why bridges sit on roller supports, and why pipelines have expansion loops."
        },
        {
          "t": "p",
          "html": "The fine print applies to all of it. Every result here assumes the material stays <b>within its elastic limit</b>; once you cross into plastic flow, these formulas fail and permanent damage begins. The beam and torsion results also assume small deformations, uniform cross-sections and a homogeneous isotropic material. And the mountain-height estimate is an honest order-of-magnitude argument, not a geological prediction: it ignores temperature, rock layering and isostasy."
        },
        {
          "t": "def",
          "term": "The geometrical moment of inertia is not the moment of inertia you know",
          "html": "The <i>I</i> in a beam formula is <i>I</i><sub>g</sub> = ∫ <i>y</i><sup>2</sup> <i>dA</i>, an <b>area</b> moment about the neutral axis, with the unit m<sup>4</sup> and the dimensions [L<sup>4</sup>]. It is <b>not</b> the rotational moment of inertia Σ<i>mr</i><sup>2</sup>, which carries kg m<sup>2</sup> and dimensions [M L<sup>2</sup>]. Same name, entirely different quantity, and the check that separates them takes one second: if the unit has a kilogram in it, it is the rotational one. For a rectangle of breadth <i>b</i> and depth <i>d</i>, <i>I</i><sub>g</sub> = <i>bd</i><sup>3</sup>/12; for a circle of radius <i>r</i>, <i>I</i><sub>g</sub> = π<i>r</i><sup>4</sup>/4."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW FAR A BEAM SAGS",
          "tag": "depth beats breadth, by a cube against a first power",
          "main": "cantilever, loaded at the free end: δ = <i>WL</i><sup>3</sup>/(3 <i>Y I</i><sub>g</sub>)<br>supported at both ends, central load: δ = <i>WL</i><sup>3</sup>/(48 <i>Y I</i><sub>g</sub>)<br>rectangle: <i>I</i><sub>g</sub> = <i>bd</i><sup>3</sup>/12 · circle: <i>I</i><sub>g</sub> = π<i>r</i><sup>4</sup>/4",
          "legend": [
            "δ is the depression in metres; <i>W</i> is the load in newtons; <i>L</i> is the beam's length in metres",
            "<i>Y</i> is Young's modulus in Pa and <i>I</i><sub>g</sub> the geometrical moment of inertia in m<sup>4</sup>; <i>b</i> and <i>d</i> are the breadth and depth of a rectangular section in metres, and <i>r</i> the radius of a circular one",
            "δ ∝ 1/<i>I</i><sub>g</sub>, and for a rectangle <i>I</i><sub>g</sub> ∝ <i>d</i><sup>3</sup>, so δ ∝ 1/<i>d</i><sup>3</sup> but only 1/<i>b</i>"
          ],
          "note": "Doubling the depth is eight times as effective as doubling the breadth. That is why a plank laid flat sags and the same plank stood on edge does not, and why beams are always mounted with the long dimension vertical."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6 · THE BENT BEAM, AND WHY THE GIRDER IS AN I",
          "chips": ["a beam under load", "the I-section"],
          "captions": [
            "A beam on two supports with a load at the centre. The top fibres are squeezed, the bottom fibres are stretched, and one layer in between, drawn dashed, is neither: the neutral layer. The sag itself is the depression δ, and it goes as the cube of the beam's depth, which is the single most useful proportionality in this topic.",
            "The cross-section of a girder. The bending stress is greatest far from the neutral axis and nearly zero at it, so the material in the web, close to the axis, is barely working. Scoop it out and pile it into the two flanges instead: the same geometrical moment of inertia for a fraction of the weight. This is why steel girders, railway tracks and aircraft spars are I-shaped or hollow, and it is also why the shape cannot change Y, which belongs to the steel and not to the beam."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none",
              "bodies": [
                { "kind": "ground", "at": [1.5, 1.6], "w": 1.2, "h": 0.3 },
                { "kind": "ground", "at": [8.5, 1.6], "w": 1.2, "h": 0.3 }
              ],
              "polys": [
                { "pts": [[1.2, 4.2], [3.0, 3.85], [5.0, 3.6], [7.0, 3.85], [8.8, 4.2], [8.8, 3.4], [7.0, 3.05], [5.0, 2.8], [3.0, 3.05], [1.2, 3.4]], "close": true, "smooth": true, "tone": "ink" },
                { "pts": [[1.2, 3.8], [3.0, 3.45], [5.0, 3.2], [7.0, 3.45], [8.8, 3.8]], "smooth": true, "dash": true, "tone": "soft", "label": "neutral layer" }
              ],
              "arrows": [
                { "from": [5.0, 6.2], "to": [5.0, 4.6], "tone": "amber", "label": "W", "at": "start" }
              ],
              "labels": [
                { "x": 2.9, "y": 5.2, "text": "top fibres squeezed" },
                { "x": 3.2, "y": 0.8, "text": "bottom fibres stretched" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 8], "axes": "none",
              "polys": [
                { "pts": [[2.0, 6.6], [8.0, 6.6], [8.0, 5.6], [5.8, 5.6], [5.8, 2.4], [8.0, 2.4], [8.0, 1.4], [2.0, 1.4], [2.0, 2.4], [4.2, 2.4], [4.2, 5.6], [2.0, 5.6]], "close": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [1.2, 4.0], "to": [8.8, 4.0], "dash": true, "soft": true, "label": "neutral axis", "at": "start" }
              ],
              "labels": [
                { "x": 5.0, "y": 7.2, "text": "flange" },
                { "x": 5.0, "y": 0.8, "text": "flange" },
                { "x": 5.0, "y": 4.9, "text": "web" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MOUNTAINS, HEAT AND TWIST",
          "main": "<i>h</i><sub>max</sub> = σ<sub>max</sub>/(ρ<i>g</i>)<br>σ<sub>thermal</sub> = <i>Y</i> α Δ<i>T</i> and <i>F</i><sub>thermal</sub> = <i>Y A</i> α Δ<i>T</i><br>torsion: <i>C</i> = π η <i>r</i><sup>4</sup> θ ÷ (2<i>L</i>)",
          "legend": [
            "σ<sub>max</sub> is the rock's breaking compressive stress in Pa, ρ its density in kg/m<sup>3</sup>, <i>g</i> = 9.8 m/s<sup>2</sup>, and <i>h</i><sub>max</sub> comes out in metres",
            "α is the coefficient of linear expansion in °C<sup>−1</sup>, Δ<i>T</i> the temperature change in °C, <i>Y</i> the modulus in Pa and <i>A</i> the area in m<sup>2</sup>; the stress is in Pa and the force in N",
            "<i>C</i> is the torque in N m, η the rigidity in Pa, <i>r</i> the cylinder's radius in m, <i>L</i> its length in m and θ the twist in radians; torsional rigidity is <i>C</i>/θ"
          ],
          "note": "Note what is missing. σ<sub>thermal</sub> contains <b>no length</b>, so a short clamped rod and a long one develop the same stress; only the FORCE needs the area. And torsion goes as the <b>fourth</b> power of the radius."
        },
        {
          "t": "defgrid",
          "title": "Representative elastic constants, as orders of magnitude",
          "rows": [
            { "k": "Steel", "v": "<i>Y</i> ≈ 200 GPa, η ≈ 80 GPa, <i>B</i> ≈ 160 GPa, ν ≈ 0.29" },
            { "k": "Copper", "v": "<i>Y</i> ≈ 120 GPa, η ≈ 44 GPa, <i>B</i> ≈ 140 GPa, ν ≈ 0.34" },
            { "k": "Brass, aluminium", "v": "brass <i>Y</i> ≈ 95 GPa, ν ≈ 0.34; aluminium <i>Y</i> ≈ 70 GPa, η ≈ 25 GPa, ν ≈ 0.33" },
            { "k": "Glass, bone", "v": "glass <i>Y</i> ≈ 60 GPa, ν ≈ 0.23; bone <i>Y</i> ≈ 15 GPa, ν ≈ 0.30" },
            { "k": "Rubber", "v": "<i>Y</i> ≈ 0.01 to 0.1 GPa, η very low, <i>B</i> ≈ 1 to 2 GPa, ν ≈ 0.50" },
            { "k": "How to use these", "v": "1 GPa = 10<sup>9</sup> Pa. Values vary with composition and treatment, so treat them as orders of magnitude and as a sanity check on an answer, never as exam data" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE HOOKE'S LAW COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "let <i>U</i>(<i>r</i>) be the energy of two neighbouring atoms a distance <i>r</i> apart, with a minimum at <i>r</i><sub>0</sub>",
              "why": "At the minimum the net force is zero, which is exactly what equilibrium separation means. Nothing has been assumed about the shape of the well yet beyond it having a smooth minimum."
            },
            {
              "eq": "near <i>r</i><sub>0</sub>, <i>U</i>(<i>r</i>) ≈ <i>U</i>(<i>r</i><sub>0</sub>) + ½ κ (<i>r</i> − <i>r</i><sub>0</sub>)<sup>2</sup>",
              "why": "This is the leading term of ANY smooth minimum: the linear term vanishes because the slope is zero there, so the quadratic term is the first one that survives. κ is the second derivative of U at r0."
            },
            {
              "eq": "<i>F</i> = −<i>dU</i>/<i>dr</i> ≈ −κ (<i>r</i> − <i>r</i><sub>0</sub>)",
              "why": "Differentiate, using the power rule. The force is LINEAR in the displacement, which is a spring of constant κ, with the unit N/m. That is Hooke's law, appearing before anything macroscopic has been mentioned."
            },
            {
              "eq": "summed over every bond across a cross-section, this is σ = <i>Y</i> ε",
              "why": "The macroscopic law is the microscopic one added up, with Y fixed by the bond stiffness κ and the spacing r0. It also explains the limitation: stretch far enough and the parabola approximation fails, and so does Hooke's law, which is exactly why every formula in this chapter is stamped small strains only."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THERMAL STRESS, AND WHY LENGTH DROPS OUT, TAP A LINE",
          "steps": [
            {
              "eq": "left free, a heated rod lengthens by Δ<i>L</i> = <i>L</i> α Δ<i>T</i>, a thermal strain ε<sub>th</sub> = α Δ<i>T</i>",
              "why": "Divide the expansion by the original length and the length cancels immediately: the thermal STRAIN is a property of the material and the temperature change alone."
            },
            {
              "eq": "clamp both ends: the walls must impose a mechanical strain ε = α Δ<i>T</i>, equal and opposite",
              "why": "The rod cannot get longer, so the net strain must be zero. The walls supply exactly the compression needed to cancel the expansion the rod wanted, and this compatibility statement is the whole physics of the problem."
            },
            {
              "eq": "σ<sub>thermal</sub> = <i>Y</i> ε = <i>Y</i> α Δ<i>T</i>, and <i>F</i> = σ<i>A</i> = <i>Y A</i> α Δ<i>T</i>",
              "why": "Hooke's law converts that imposed strain into a stress. Neither expression contains L, because the length cancelled in the very first line: a short clamped rod and a long one develop the SAME thermal stress for the same temperature change. Length decides how much the rod would have expanded, not the stress once expansion is fully prevented."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TORSION OF A SOLID CYLINDER, TAP A LINE",
          "steps": [
            {
              "eq": "fix one end and twist the other through θ; a shell at radius <i>x</i> shears through φ = <i>x</i>θ/<i>L</i>",
              "why": "A straight line drawn along the shell's surface tilts. The rim of that shell moves an arc xθ over a length L, and shear strain is the tilt, so φ = xθ/L. The further out the shell, the more it is sheared, which is where the r-to-the-fourth eventually comes from."
            },
            {
              "eq": "τ = η φ = η<i>x</i>θ/<i>L</i>, so the ring of area 2π<i>x dx</i> contributes <i>dC</i> = (2πηθ/<i>L</i>) <i>x</i><sup>3</sup> <i>dx</i>",
              "why": "Shear stress is rigidity times shear strain. Multiply by the ring's area to get a force, then by x to get its moment about the axis. Two factors of x from the geometry plus one from the strain make x cubed."
            },
            {
              "eq": "<i>C</i> = (2πηθ/<i>L</i>) ∫ from 0 to <i>R</i> of <i>x</i><sup>3</sup> <i>dx</i> = π η <i>R</i><sup>4</sup> θ ÷ (2<i>L</i>)",
              "why": "Integrating x cubed gives R to the fourth over 4, and the 4 cancels one of the 2s. The torsional rigidity C/θ is therefore πηR⁴/(2L)."
            },
            {
              "eq": "<i>C</i> ∝ <i>R</i><sup>4</sup>",
              "why": "A shaft only twice as thick is SIXTEEN times harder to twist. That is the dramatic payoff of the fourth power, and it is why drive shafts and axles are made as fat as the weight budget allows rather than as long as convenient."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Searle's experiment, and why it uses two wires",
          "steps": [
            "<b>Hang two identical wires side by side from the same rigid support.</b> One is the <b>reference</b>, carrying a fixed dead load just to keep it taut; the other is the <b>experimental</b> wire, which will be loaded.",
            "<b>Connect them with a frame carrying a spirit level and a micrometer screw</b>, so that tilting of the frame measures the <i>difference</i> in their elongations.",
            "<b>Add known loads to the experimental wire in steps.</b> For each, level the spirit bubble with the micrometer and record the extension Δ<i>L</i>.",
            "<b>Plot load, or stress, against extension, or strain.</b> Inside the elastic limit it is a straight line, and <i>Y</i> = <i>MgL</i>/(π<i>r</i><sup>2</sup>Δ<i>L</i>) follows from its slope.",
            "<b>Why two wires:</b> the reference wire cancels errors from temperature change and from any yielding of the support, because both wires shift together and only the load-induced extension survives the difference.",
            "<b>Measure the radius separately and carefully.</b> Since <i>Y</i> ∝ 1/<i>r</i><sup>2</sup>, a small error in <i>r</i> is <b>doubled</b> in the answer, and it is usually the dominant error in the whole experiment."
          ]
        },
        {
          "t": "proc",
          "title": "Any change-a-dimension question, in one line",
          "steps": [
            "<b>Do not recompute anything.</b> These questions test whether you know an exponent, and nothing else.",
            "<b>Write the proportionality.</b> δ ∝ 1/<i>d</i><sup>3</sup> for a rectangular beam's depth and 1/<i>b</i> for its breadth; <i>C</i> ∝ <i>r</i><sup>4</sup> for torsion; <i>I</i><sub>g</sub> ∝ <i>r</i><sup>4</sup> for a circular section; Δ<i>L</i> ∝ <i>L</i>/<i>r</i><sup>2</sup> for a stretched wire.",
            "<b>Remember which quantities carry no dependence at all.</b> σ<sub>thermal</sub> does not depend on length or on area; <i>h</i><sub>max</sub> does not depend on the mountain's width; the hanging-length limit does not depend on the wire's thickness.",
            "<b>Take the ratio and substitute the multiple.</b> Double the depth and the sag falls to one eighth. Multiply the radius by 1.5 and the torque needed rises by 1.5<sup>4</sup> = 5.06.",
            "<b>Sanity check the direction before you write it down.</b> Fatter and shorter should always mean stiffer; if your ratio says otherwise, an exponent has been inverted."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The breaking compressive stress of a certain rock is 3.0 × 10<sup>8</sup> Pa and its density is 2.5 × 10<sup>3</sup> kg/m<sup>3</sup>. Estimate the maximum height of a mountain this rock could support. Take <i>g</i> = 10 m/s<sup>2</sup>.",
          "steps": [
            "Model the mountain as a column of rock of height <i>h</i>. The compressive stress at its base is the weight of everything above, divided by the base area: σ = (<i>Ah</i>ρ<i>g</i>)/<i>A</i> = ρ<i>gh</i>. The area cancels, so the mountain's width is irrelevant.",
            "Set that equal to the breaking stress: <i>h</i><sub>max</sub> = σ<sub>max</sub>/(ρ<i>g</i>).",
            "<i>h</i><sub>max</sub> = (3.0 × 10<sup>8</sup>) ÷ [(2.5 × 10<sup>3</sup>)(10)] = (3.0 × 10<sup>8</sup>)/(2.5 × 10<sup>4</sup>) = 1.2 × 10<sup>4</sup> m = 12 km.",
            "Reassuringly close to the tallest mountains on Earth. Check the dimensions if you doubt the form: [M L<sup>−1</sup> T<sup>−2</sup>] ÷ ([M L<sup>−3</sup>][L T<sup>−2</sup>]) = [L], a length, as required."
          ],
          "ans": "h<sub>max</sub> = 1.2 × 10<sup>4</sup> m = 12 km"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A steel rod is clamped rigidly between two fixed walls and heated so its temperature rises by 40 °C. Given <i>Y</i> = 2.0 × 10<sup>11</sup> Pa and α = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>, find the thermal stress developed. Does the answer depend on the rod's length?",
          "steps": [
            "The trap is hunting for a length and a cross-section, assuming a longer or thinner rod gives a different <i>stress</i>. It does not.",
            "Thermal stress depends only on material and temperature change: σ = <i>Y</i>αΔ<i>T</i>.",
            "σ = (2.0 × 10<sup>11</sup>)(1.2 × 10<sup>−5</sup>)(40) = (2.4 × 10<sup>6</sup>)(40) = 9.6 × 10<sup>7</sup> Pa.",
            "No, it does not depend on length, and the stress does not depend on area either. Only the <i>force</i>, σ<i>A</i>, needs the area. If a NEET option changes the answer when the length is doubled, eliminate it on sight."
          ],
          "ans": "σ = 9.6 × 10<sup>7</sup> Pa · independent of length, and of area"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A cantilever beam of length 1.0 m has a rectangular cross-section of breadth 4.0 cm and depth 6.0 cm. A load of 200 N hangs from its free end. With <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, find the depression of the free end.",
          "steps": [
            "First the geometrical moment of inertia: <i>I</i><sub>g</sub> = <i>bd</i><sup>3</sup>/12 = (0.040)(0.060)<sup>3</sup>/12 = (0.040)(2.16 × 10<sup>−4</sup>)/12 = (8.64 × 10<sup>−6</sup>)/12 = 7.2 × 10<sup>−7</sup> m<sup>4</sup>.",
            "Cantilever formula: δ = <i>WL</i><sup>3</sup>/(3<i>YI</i><sub>g</sub>) = (200)(1.0)<sup>3</sup> ÷ [3(2.0 × 10<sup>11</sup>)(7.2 × 10<sup>−7</sup>)].",
            "δ = 200/(4.32 × 10<sup>5</sup>) ≈ 4.6 × 10<sup>−4</sup> m = 0.46 mm.",
            "Check the intuition. Turn the beam on its side, so breadth and depth swap and the depth is now 4.0 cm: <i>I</i><sub>g</sub> falls by a factor (6/4)<sup>2</sup> = 2.25, and the depression rises to about 1.0 mm. That is the concrete reason beams are mounted with the long dimension vertical."
          ],
          "ans": "δ ≈ 4.6 × 10<sup>−4</sup> m = 0.46 mm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A solid cylindrical shaft of radius 2.0 cm and length 1.0 m is made of a metal of shear modulus η = 4.0 × 10<sup>10</sup> Pa. (a) Find the torque needed to twist one end through 0.50 rad relative to the other. (b) If the radius is doubled, by what factor does the required torque change for the same twist?",
          "steps": [
            "(a) Use <i>C</i> = πη<i>r</i><sup>4</sup>θ/(2<i>L</i>). First <i>r</i><sup>4</sup> = (0.020)<sup>4</sup> = 1.6 × 10<sup>−7</sup> m<sup>4</sup>.",
            "η<i>r</i><sup>4</sup> = (4.0 × 10<sup>10</sup>)(1.6 × 10<sup>−7</sup>) = 6.4 × 10<sup>3</sup>. Multiply by θ = 0.50 to get 3.2 × 10<sup>3</sup>.",
            "<i>C</i> = π(3.2 × 10<sup>3</sup>)/(2 × 1.0) = π(1.6 × 10<sup>3</sup>) ≈ 5.0 × 10<sup>3</sup> N m.",
            "(b) Since <i>C</i> ∝ <i>r</i><sup>4</sup>, doubling the radius multiplies the torque by 2<sup>4</sup> = 16. A shaft only twice as thick is sixteen times harder to twist, which is the whole reason drive shafts and axles are made as fat as weight allows."
          ],
          "ans": "C ≈ 5.0 × 10<sup>3</sup> N m · doubling r multiplies the torque by 16"
        },
        {
          "t": "mcq",
          "q": "A girder is given an I-shaped cross-section primarily because:",
          "opts": [
            { "label": "it looks better", "nudge": "Appearance is irrelevant to mechanics, and no structural formula contains a term for it." },
            { "label": "it puts material far from the neutral axis, giving high stiffness for low weight", "nudge": null },
            { "label": "the I-shape increases the Young's modulus of the steel", "nudge": "Y is a material property. No amount of reshaping a beam can change what its steel is made of." },
            { "label": "it makes the beam more brittle and therefore stronger", "nudge": "Brittleness is undesirable in a structure and is not something a cross-section can confer anyway." }
          ],
          "correct": 1,
          "solution": "Bending stress is greatest far from the neutral axis and nearly zero at it, so concentrating material in the top and bottom flanges maximises the geometrical moment of inertia per unit weight."
        },
        {
          "q": "The maximum height of a mountain on a planet depends on the rock's breaking stress σ, its density ρ and the surface gravity <i>g</i> as:",
          "t": "mcq",
          "opts": [
            { "label": "σ/(ρg)", "nudge": null },
            { "label": "ρg/σ", "nudge": "The reciprocal, and it has the wrong dimensions: [M L<sup>−2</sup> T<sup>−2</sup>]/[M L<sup>−1</sup> T<sup>−2</sup>] = 1/[L], which is a per-metre, not a height." },
            { "label": "σρg", "nudge": "A product where a quotient is needed. A quick dimension check kills it: [σ]/([ρ][g]) = metres, so σ must be divided by ρg, not multiplied." },
            { "label": "√(σ/(ρg))", "nudge": "The square root belongs to a capillary-rise formula, where σ is a surface tension in N/m. Here σ is a stress, so σ/(ρg) is ALREADY a length and rooting it would give the square root of a metre." }
          ],
          "correct": 0,
          "solution": "Setting the base stress ρgh equal to σ gives h = σ/(ρg). Check it dimensionally: [M L−1 T−2] ÷ ([M L−3][L T−2]) = [L]. Higher gravity means shorter mountains, which is why low-gravity Mars hosts Olympus Mons."
        },
        {
          "t": "mcq",
          "q": "A rod clamped rigidly between two walls is heated. The thermal stress developed is <b>independent</b> of:",
          "opts": [
            { "label": "the Young's modulus of the rod", "nudge": "Y appears explicitly in σ = YαΔT, so the stress certainly depends on it: a stiffer rod pushes back harder." },
            { "label": "the temperature rise", "nudge": "ΔT appears explicitly and linearly. Double the heating and you double the stress." },
            { "label": "the coefficient of linear expansion", "nudge": "α appears explicitly too. A material that wants to expand more, when prevented, develops more stress." },
            { "label": "the length of the rod", "nudge": null }
          ],
          "correct": 3,
          "solution": "σ = YαΔT carries no length term at all. Length decides how much the rod WOULD have expanded, but not the stress once that expansion is completely prevented."
        },
        {
          "t": "mcq",
          "q": "The depression at the free end of a loaded cantilever of rectangular cross-section is proportional to:",
          "opts": [
            { "label": "d<sup>3</sup>", "nudge": "This confuses the dependence of I<sub>g</sub>, which really does go as d cubed, with that of the depression, which is its reciprocal. A deeper beam sags LESS." },
            { "label": "1/d<sup>3</sup>", "nudge": null },
            { "label": "d", "nudge": "The wrong power entirely, and the wrong direction: a deeper beam must sag less, not more." },
            { "label": "1/d", "nudge": "Right direction, wrong power. 1/d is the dependence on the BREADTH, which is exactly why depth is eight times as effective as breadth." }
          ],
          "correct": 1,
          "solution": "δ ∝ 1/I_g and I_g = bd³/12 ∝ d³, so δ ∝ 1/d³. Doubling the depth cuts the sag to one eighth."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Explain why a construction girder is given an I-shaped cross-section rather than a solid rectangular one. Which dimension of a beam most strongly reduces its sagging, and why?", "a": "Material near the neutral axis carries almost no bending stress, so removing it keeps the stiffness while saving weight, which is the I-section. The <b>depth</b> matters most, because <i>I</i><sub>g</sub> = <i>bd</i><sup>3</sup>/12 goes as the cube of the depth and only the first power of the breadth." },
            { "q": "[NEET] A metal rod is held between two rigid clamps and cooled by 30 °C. With <i>Y</i> = 1.0 × 10<sup>11</sup> Pa and α = 2.0 × 10<sup>−5</sup> °C<sup>−1</sup>, find the stress that develops, and say whether it is tensile or compressive.", "a": "σ = <i>Y</i>αΔ<i>T</i> = (1.0 × 10<sup>11</sup>)(2.0 × 10<sup>−5</sup>)(30) = 6.0 × 10<sup>7</sup> Pa, and it is <b>tensile</b>: cooling makes the rod want to shrink, so the clamps must pull it outward." },
            { "q": "[JEE Main] A beam supported at both ends carries a load <i>W</i> at its centre and depresses by δ. If it is replaced by one of the same material and length but twice the depth, with the same breadth, find the new depression.", "a": "δ ∝ 1/<i>d</i><sup>3</sup>, so doubling the depth divides the sag by 2<sup>3</sup> = 8. The new depression is δ/8 m." },
            { "q": "[JEE Main] A wire of radius <i>r</i> requires a torque <i>C</i> to twist through a given angle. What torque twists a wire of the same length and material but radius 1.5<i>r</i> through the same angle?", "a": "<i>C</i> ∝ <i>r</i><sup>4</sup>, so the torque becomes (1.5)<sup>4</sup><i>C</i> = 5.06<i>C</i> N m, a fivefold increase for a fifty per cent thicker wire." },
            { "q": "[JEE Advanced] A steel rail of cross-section 40 cm<sup>2</sup> is clamped so it cannot expand, and its temperature rises by 25 °C. Taking <i>Y</i> = 2.0 × 10<sup>11</sup> Pa and α = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>, find the force it exerts on its supports.", "a": "<i>F</i> = <i>YA</i>αΔ<i>T</i> = (2.0 × 10<sup>11</sup>)(40 × 10<sup>−4</sup>)(1.2 × 10<sup>−5</sup>)(25) = 2.4 × 10<sup>5</sup> N, that is 240 kN from a 25 degree warm-up, which is why rails are laid with gaps." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Putting a length into thermal stress.</b> σ = <i>Y</i>αΔ<i>T</i> has no length in it. Length decides the prevented expansion, not the resulting stress. Only the force, σ<i>A</i>, needs a dimension of the rod at all, and that is the area.",
            "<b>Confusing <i>I</i><sub>g</sub> with the rotational moment of inertia.</b> The one in beam formulas is an area moment, ∫<i>y</i><sup>2</sup><i>dA</i>, with the unit m<sup>4</sup>. The other is Σ<i>mr</i><sup>2</sup>, in kg m<sup>2</sup>. If a kilogram appears, you have the wrong one.",
            "<b>Treating depth and breadth as equal partners.</b> Depression goes as 1/<i>d</i><sup>3</sup> but only 1/<i>b</i>, so doubling the depth is eight times as effective as doubling the breadth. Always orient the larger dimension vertically.",
            "<b>Forgetting the fourth-power laws.</b> Both a circular section's stiffness and a shaft's torsional rigidity go as <i>r</i><sup>4</sup>, so small radius changes have outsized effects. The same sensitivity is a menace in Searle's experiment, where <i>Y</i> ∝ 1/<i>r</i><sup>2</sup> means a radius error counts <b>twice</b> in the final answer.",
            "<b>Forgetting to ask whether the rod actually reaches the wall.</b> If a small gap <i>s</i> is left, the rod fills it freely first and only the excess is suppressed, so the imposed strain is αΔ<i>T</i> − <i>s</i>/<i>L</i>, and if αΔ<i>T</i> is smaller than <i>s</i>/<i>L</i> there is no contact and no stress at all. That conditional is where the marks go."
          ]
        },
        {
          "t": "protip",
          "html": "for any what-happens-if-i-change-a-dimension question, never recompute from scratch: write the proportionality (δ ∝ 1/d³, C ∝ r⁴, σ<sub>th</sub> independent of L), take the ratio, done in one line. most exam questions on this topic are secretly just testing whether you know the exponent. two more worth carrying. weld two different rods and clamp the pair between rigid walls, and the wall force is common to both while the strains are not: F[L₁/(A₁Y₁) + L₂/(A₂Y₂)] = (α₁L₁ + α₂L₂)ΔT, and the narrower rod carries the larger stress since σᵢ = F/Aᵢ. and in searle's experiment the errors add as δY/Y = δM/M + δL/L + 2δr/r + δ(ΔL)/ΔL, so the screw gauge reading of the diameter, entering doubled, is almost always the term to improve first."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Hooke's law = the parabolic bottom of the interatomic well", "note": "Y tracks bond stiffness; valid for small strains only" },
            { "f": "cantilever δ = WL<sup>3</sup>/(3YI<sub>g</sub>) · supported δ = WL<sup>3</sup>/(48YI<sub>g</sub>)", "note": "I<sub>g</sub> = bd<sup>3</sup>/12 for a rectangle, πr<sup>4</sup>/4 for a circle" },
            { "f": "δ ∝ 1/d<sup>3</sup>, and the I-section removes idle material", "note": "same stiffness, far less weight" },
            { "f": "h<sub>max</sub> = σ<sub>max</sub>/(ρg) ≈ 10 km for rock", "note": "the base area cancels, so width is irrelevant" },
            { "f": "σ = YαΔT · F = YAαΔT", "note": "no length anywhere; only the force needs the area" },
            { "f": "torsion C = πηr<sup>4</sup>θ/(2L)", "note": "rigidity goes as the fourth power of the radius" },
            { "f": "Searle: Y = MgL/(πr<sup>2</sup>ΔL) from the load-extension slope", "note": "the twin wire cancels temperature and support errors" }
          ],
          "aids": [
            "\"depth cubed, breadth single\", beams sag as 1/d³ but only 1/b",
            "\"heat builds stress, not by the metre\", σ = YαΔT carries no length",
            "\"twist loves the fourth power\", torsional stiffness goes as r⁴",
            "\"mountains end where rock gives way\", h = σ/(ρg)"
          ]
        }
      ]
    }
  ]
};

export default phy11MechSolids;
