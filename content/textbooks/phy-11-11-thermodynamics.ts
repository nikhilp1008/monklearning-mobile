/**
 * Chapter 11 · Thermodynamics. Physics, Class 11.
 *
 * Restructured from pages 729 to 804 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-02-motion-straight-line.ts.
 *
 * EIGHT SUBTOPICS, SIX TOPICS, AND WHY. The source range carries EIGHT
 * subtopics, not five or six: 01 Thermodynamic State and the Zeroth Law, 02
 * The First Law, 03 Thermodynamic Processes, 04 Specific Heat Capacity and
 * Mayer's Relation, 05 Heat Engines, Refrigerators and Heat Pumps, 06 The
 * Second Law and Reversibility, 07 The Carnot Engine and Carnot's Theorem, 08
 * Entropy (flagged in the source itself as a JEE Advanced extension outside the
 * CBSE Class 11 syllabus). Eight topics is not authorable: scripts/
 * validate-chapters.mjs enforces 4 to 6 topics per chapter, and that gate is
 * not mine to move. So exactly two merges were made, both along seams the
 * source itself already crosses, and nothing was dropped:
 *
 *   - Topic 05 = source subtopics 05 + 06. Subtopic 05's own Section 3.3 is
 *     titled "The link to the second law (preview)" and states both the
 *     Kelvin-Planck and Clausius prohibitions in order to explain why the
 *     efficiency is under 1 and the COP is finite. The merged topic simply
 *     stops previewing and states them.
 *   - Topic 06 = source subtopics 07 + 08. Subtopic 08's own Section 3.3 is
 *     "The Carnot cycle has zero entropy change (a consistency check)" and
 *     ends "entropy and Carnot are two views of the same truth". Both halves
 *     of the merged topic derive Q2/Q1 = T2/T1, once through the volume
 *     logarithms and once through the entropy ledger, which is a stronger
 *     lesson adjacent than it is split apart.
 *
 * Subtopics 01 to 04 map 1:1 onto Topics 01 to 04. 153 blocks across 6 topics
 * is 25.5 per topic, against the pilot physics chapter's 23.4 and
 * math-12-01-relations.ts's 23.5, so no topic here is thin.
 *
 * The Round 2 Addendum (pages 790 to 804: A general polytropic processes, B
 * composite cycles leg by leg, C irreversible adiabatics and free expansion, D
 * the entropy ledger for the universe, E compound Carnot systems) is NOT a
 * topic, per the brief. Every line drawn from it below sits in a `protip`, a
 * `mistakes` item, a `def`, or a single practice item: Addendum A into Topic
 * 03's polytropic protip, its "cooling does not mean heat released" mistake
 * and its JEE Advanced practice item 5, and into Topic 04's `def` on the
 * molar heat capacity of an arbitrary process; Addendum C into Topic 02's
 * free-expansion mistake; Addendum D into Topic 06's irreversible-entropy
 * mistake and protip; Addendum E into Topic 06's compound-machine protip
 * line. No `formula`, `defgrid`, `deriv` or worked `ex` below is sourced from
 * the addendum.
 *
 * SIGN CONVENTION, held in every single worked line. The source uses the
 * Indian board / JEE / NEET convention throughout and warns explicitly against
 * the chemistry one, so this chapter does the same: DQ = DU + DW, with DQ
 * positive when heat is ABSORBED by the system and DW positive when work is
 * done BY the gas (expansion). It is stated once, as a `def` in Topic 01
 * rather than Topic 02, because the brief asks for it in topic 1 and because
 * every later topic needs it. It is then held without exception in all 25
 * worked examples, all 22 MCQs and all 30 practice answers. Temperature is
 * kelvin in every gas law, every heat capacity and every efficiency, and that
 * is stated in the same `def`.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five pages read in full).
 * TWO of the nine listed entries touch this chapter's range, and BOTH are
 * corrected in place below rather than reproduced:
 *
 *   - Page 980, Chapter 11: subtopic 04's Practice answer 3 is printed as
 *     "DQ = nCP DT = (0.5)(7/2 x 8.314)(200) ~ 5.82 kJ ... DU = (0.5)(5/2 x
 *     8.314)(200) ~ 4.16 kJ", each exactly double the correct value (the
 *     calculation was run with n = 1 mol instead of the stated 0.5 mol), and
 *     the printed text then carries a visibly confused self-correcting aside
 *     chasing the resulting inconsistency. Recomputed independently before
 *     reading the errata and found the same defect: DQ = 0.5 x 29.099 x 200 =
 *     2909.9 J ~ 2.91 kJ, W = 0.5 x 8.314 x 200 ~ 831 J, DU = 0.5 x 20.785 x
 *     200 = 2078.5 J ~ 2.08 kJ, and 2.08 + 0.83 = 2.91 kJ, which now closes.
 *     Topic 04's practice item 3 prints the corrected numbers with that check
 *     shown.
 *   - Page 981, Chapter 11: the degrees-of-freedom table lists "Polyatomic
 *     (nonlinear, e.g. CO2 bent / H2O)". CO2 is a LINEAR triatomic, O=C=O, so
 *     it rotates about two axes and has f = 5, belonging with the diatomic
 *     row. The f = 6 row itself is correct; only the example is wrong. Topic
 *     04's standard-values `defgrid` names H2O, SO2 and NH3 instead and adds
 *     a dedicated row warning about CO2, and Topic 04's `mistakes` carries it
 *     as a named trap.
 *
 * The other seven errata entries are in Chapters 1, 2, 4, 6, 8 and 9 and
 * touch nothing here.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key across all eight subtopics (pages 729 to 789) was recomputed
 * independently: all match the source apart from the errata item above. The
 * Round 2 Addendum (pages 790 to 804) was recomputed the same way and is NOT
 * clean. Four defects, none of them in the errata:
 *
 *   1. Addendum A, Method step 6, page 791. Printed: "DS = n[CV(1 - x) + R]
 *      ln(Vf/Vi) = n(C - CV) ln(Vf/Vi) (using C - CV = R/(1 - x))". The first
 *      expression is right and the second is wrong: the correct identity is
 *      DS = nC(1 - x) ln(Vf/Vi) = nC ln(Tf/Ti), because C(1 - x) = CV(1 - x) +
 *      R follows from C = CV + R/(1 - x), whereas C - CV = R/(1 - x) is a
 *      DIFFERENT quantity. They coincide only when CV(1 - x)^2 + R(1 - x) = R,
 *      which is not generally true. The printed formula therefore gives the
 *      wrong entropy for every polytrope except by accident.
 *   2. Addendum A, Practice answer 1 (page 793), which uses that formula:
 *      printed "DS = n(C - CV) ln2 = -0.5R ln2 < 0". Correct: monatomic CV =
 *      1.5R, x = 1.5, Vf/Vi = 2, so DS = [1.5R(1 - 1.5) + R] ln2 = +0.25R ln2
 *      = +1.44 J/K. POSITIVE, not negative. Cross-check by the other route:
 *      C = 1.5R - 2R = -0.5R and Tf/Ti = 2^(-0.5), so DS = nC ln(Tf/Ti) =
 *      (-0.5R)(-0.3466) = +0.173R = +1.44 J/K. The sign, which is the whole
 *      teaching point of that item, is printed backwards.
 *   3. Addendum A, Practice answer 4 (page 794). Printed "C = 2.5R + R/(1 - 4)
 *      = 2.5R - R/3 = 19R/6", then Q ~ -27600 J and DS ~ +7.7 J/K. The
 *      arithmetic 2.5R - R/3 is 13R/6, not 19R/6 (19R/6 is the mixture answer
 *      from subtopic 04's Example 4, evidently copied across). With C = 13R/6
 *      = 18.01 J/mol K and DT = 37.5 - 300 = -262.5 K for n = 2: Q = 2 x 18.01
 *      x (-262.5) = -9.46 kJ, not -27600 J. Confirmed by the first law
 *      independently: DU = 2 x 20.785 x (-262.5) = -10.91 kJ and W = +1.455 kJ,
 *      so Q = DU + W = -9.46 kJ. The entropy is also wrong twice over (wrong C
 *      and defect 1): DS = n[CV(1 - x) + R] ln2 = 2[2.5R(-3) + R](0.693) =
 *      -74.9 J/K, not +7.7 J/K, and it is NEGATIVE, which is legal here only
 *      because heat leaves the gas.
 *   4. Addendum A, Practice answer 5 (page 793) states "T ∝ V^(-0.5)" for
 *      x = 0.5. From TV^(x-1) = const with x - 1 = -0.5, T ∝ V^(+0.5). The
 *      conclusion drawn (DT > 0 on expansion) is right; the proportionality
 *      printed to justify it is inverted and would give the opposite.
 *
 *   Also noted, not a numeric error: Addendum B Example B.2 (pages 795 to 796)
 *   prints the author's own failed attempts in the body text ("Not equal! ...
 *   Correction: ... Let's redefine"). Its final numbers are correct once the
 *   closure condition T2 = T1/2^(gamma-1) is imposed (eta = 12.7% against a
 *   Carnot 24.2%), but the presentation is unusable as printed. Nothing from
 *   B.2 is used below. B.1, which IS clean (eta = 1/12 = 8.33% against a
 *   Carnot 75%), was verified leg by leg and also not used, since the brief
 *   confines the addendum to protips, mistakes and one hard item per group.
 *
 * SOURCE DAMAGE. All four damage patterns named in the brief are present in
 * pages 729 to 789, and one more. Every instance below was re-authored from
 * context, never transcribed:
 *
 *   - GREEK LETTERS VANISH WITH NO PLACEHOLDER, and this range is built on
 *     them. gamma extracts as a musical-natural glyph followed by 015, or as
 *     natural-r, or as nothing at all, so "PV = const" on page 749 is
 *     PV^gamma = const, "TV -1 = const" is TV^(gamma-1) = const, "adiabatic
 *     slope = -P/V" is -gamma P/V, "slope is times the isothermal" is gamma
 *     times, "W = nR(Ti - Tf)/( - 1)" is /(gamma - 1), and the bare "= 1.4" in
 *     the diatomic context of pages 749 and 754 is gamma = 1.4 every time. eta
 *     extracts as the same natural glyph followed by 021, so "= W/Q1 = 1 -
 *     Q2/Q1" on page 766 is eta, and "natural-021 < 1" is eta < 1. Delta
 *     extracts as a left curly quote followed by 001 on pages 740 to 763 and
 *     as a clean ASCII fragment elsewhere, so "001Q = 001U + 001W" is
 *     DQ = DU + DW. Theta survives only inside the dimensional formulas.
 *     The reconstruction was checked every time by recomputing the example
 *     that uses it: 8^(2/3) = 4 forces the exponent to be gamma - 1 and not
 *     gamma, 2^(-2/3) = 0.630 forces the 5/3, and the isobaric heat splitting
 *     7 to 5 forces gamma = 7/5.
 *   - HEADING RUNS ARRIVE ASCII-SHIFTED BY +29. Present here on the addendum
 *     pages, where "$GGHQGXP$" decodes to "AddendumA" and the page-foot
 *     numerals shift with it, so every page number in the 790 to 804 range was
 *     read from the printed foot line ("Page 3 of 15") rather than from the
 *     shifted run.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES. Pervasive:
 *     "0.025 m\n3" is 0.025 m^3, "2.0 x 10\n5\nPa" is 2.0 x 10^5 Pa, "10\n-30
 *     kg" style breaks hit every power of ten in the range, and every Q1, Q2,
 *     T1, T2, CP, CV, Vf, Vi in the source arrives as a letter on one line and
 *     its index on the next. The adiabatic relation is the worst case, since
 *     its exponent is BOTH a superscript and a dropped Greek letter: page
 *     749's "P V \n natural-015 \n = \n constant" is PV^gamma = constant, and
 *     nothing in the token stream says so.
 *   - INTER-WORD SPACES VANISH at tight kerning. Confirmed instances in
 *     passages actually used below: "thermodynamic stateof a system" (p.731),
 *     "twodoorsthrough which energy can enter" (p.740), "Slowis the key word"
 *     (p.748), "howyou heat it matters" (p.757), "needstwomolar specific
 *     heats" (p.757), "partof it into work" (p.764), "yousupplyworkW"
 *     (p.764), "the bestengine is a fully reversibleone" (p.777),
 *     "dependsonlyon the two temperatures" (p.777), "it isforced into
 *     existence" (p.731), "convert it entirelyto work" (p.773).
 *   - PARENTHESES AND OTHER PUNCTUATION ARRIVE AS OCTAL-ESCAPE TOKENS, a
 *     pattern the pilot's "\n7" minus sign belongs to but which is much wider
 *     here: "\\050" is an open parenthesis, "\\051" a close parenthesis,
 *     "\\026" an en dash, "\\034" the "fi" ligature and "\\036" the "ffi"
 *     ligature. So page 736's "n = P VRT=\\0502.0..\\051\\0500.025\\051" is
 *     n = PV/RT = (2.0 x 10^5)(0.025)/((8.314)(300)), and "e\\036ciency" is
 *     "efficiency" throughout. Every numeric substitution below was rebuilt
 *     from the arithmetic rather than from the token stream, and then checked
 *     by recomputing the printed answer.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T Theta:
 *
 *   - PV = nRT: [M L-1 T-2][L3] = [M L2 T-2]; and [mol][M L2 T-2 Theta-1
 *     mol-1][Theta] = [M L2 T-2]. Both sides an energy. OK. PV = N kB T is the
 *     same with N a pure count.
 *   - DQ = DU + DW: all three terms [M L2 T-2]. This is the check the source
 *     itself names, and it is the one that catches a mis-substituted formula
 *     fastest. OK.
 *   - W = integral P dV: [M L-1 T-2][L3] = [M L2 T-2]. OK.
 *   - DU = n CV DT: [mol][M L2 T-2 Theta-1 mol-1][Theta] = [M L2 T-2]. OK.
 *   - W = nRT ln(Vf/Vi): the logarithm's argument is a ratio of two volumes and
 *     so is dimensionless, as it must be for a logarithm to exist at all; nRT
 *     alone carries [M L2 T-2]. OK.
 *   - PV^gamma = const, TV^(gamma-1) = const, P^(1-gamma) T^gamma = const:
 *     gamma is a ratio of two molar heat capacities and therefore
 *     dimensionless, which is what makes the exponent legal. The "constant" is
 *     not a physical quantity ([M L^(3gamma-1) T-2] for the first), which is
 *     exactly why every adiabatic problem is solved with RATIOS. OK.
 *   - W = (PiVi - PfVf)/(gamma - 1) = nR(Ti - Tf)/(gamma - 1): numerator
 *     [M L2 T-2], denominator dimensionless. OK.
 *   - Polytropic C = CV + R/(1 - x): x dimensionless, so all three terms are
 *     [M L2 T-2 Theta-1 mol-1]. Slope dP/dV = -xP/V: [M L-1 T-2]/[L3] =
 *     [M L-4 T-2] on both sides. OK.
 *   - CP - CV = R: all three [M L2 T-2 Theta-1 mol-1]. OK. CV = (f/2)R with f
 *     a pure count. OK. gamma = 1 + 2/f dimensionless. OK.
 *   - DQ = m s DT: [M][L2 T-2 Theta-1][Theta] = [M L2 T-2]. OK, and it is the
 *     mismatch between s in J/kg K and C in J/mol K that this check catches.
 *   - eta = W/Q1 and COP = Q2/W: ratios of two energies, dimensionless. OK.
 *   - eta = 1 - T2/T1, Q2/Q1 = T2/T1, COPref = T2/(T1 - T2), COPhp =
 *     T1/(T1 - T2): ratios of two kelvins, dimensionless. This is the ledger
 *     entry that explains WHY Celsius fails: a ratio of two Celsius readings
 *     is not the same number as a ratio of the two kelvins, because the
 *     Celsius scale has a shifted zero, and a shifted-zero scale has no
 *     meaningful ratios at all.
 *   - dS = dQrev/T: [M L2 T-2]/[Theta] = [M L2 T-2 Theta-1], SI J/K. OK, and
 *     it is NOT an energy, which is the mistake the topic flags.
 *   - DS = nR ln(Vf/Vi): [mol][M L2 T-2 Theta-1 mol-1] = [M L2 T-2 Theta-1].
 *     OK. DS = mL/T: [M][L2 T-2]/[Theta] = [M L2 T-2 Theta-1]. OK.
 *     DS = n CP ln(Tf/Ti) and n CV ln(Tf/Ti): same, with a dimensionless
 *     logarithm. OK.
 *
 *   22 formula lines checked, 22 dimensionally consistent, 0 defects.
 *
 * PHYSICAL PLAUSIBILITY. Every efficiency printed in this file: 40%, 25%,
 * 30%, 50%, 70%, 20%, 40% again. All lie strictly between 0 and 1, and every
 * one that names its reservoirs was checked against 1 - T2/T1 for those
 * reservoirs and is at or below it. No printed efficiency in the source range
 * beats Carnot, so no correction was needed on that head; the one apparent
 * violation, the inventor's 60% against a 600 K / 300 K pair, is a
 * deliberately impossible claim that the source correctly rejects, and it is
 * reproduced here as Topic 06's JEE Advanced worked example precisely because
 * rejecting it on sight is the skill. Every gamma printed: 5/3, 7/5 = 1.4,
 * 4/3, 1.46 (a 2:4 monatomic/diatomic mixture), 1.5 (a hypothetical, in
 * range), 1.53 (a 3:2 mixture). All lie in (1, 5/3], and both mixture values
 * were checked to sit between their component gammas. Every entropy total for
 * an isolated system or for the universe comes out at or above zero: +11.5,
 * +612, +37, +0.5 J/K, and exactly 0 for the reversible cases. Every COP is
 * positive: 4, 9. No negative kelvin temperature appears anywhere.
 *
 * LIMITING CASES, used where they teach something. (1) The first law with one
 * term deleted IS the four standard processes, and Topic 02's `defgrid` and
 * Topic 03's are the same table read twice: V fixed kills W, T fixed kills DU,
 * Q = 0 is adiabatic, and P fixed kills nothing, which is why the isobaric row
 * is the only one with three surviving terms. (2) The polytropic master
 * process at x = 0, 1, gamma and infinity recovers all four, and the x = 1
 * case sending C to infinity is used in Topic 04's `def` as the check that
 * the general formula remembers the special ones. (3) Topic 06's derivation
 * closes on the two limits of the Carnot result: eta tends to 1 only as T2
 * tends to absolute zero, and eta falls to 0 at T2 = T1, no gap and therefore
 * no engine. (4) Topic 03's practice item 5 is the limiting case that
 * genuinely surprises: at 1 < x < gamma the polytropic C is negative, so the
 * gas ABSORBS heat while cooling, which kills the intuition that cooling
 * implies heat released.
 *
 * SEAMS: what is quoted as already known, and from where. From
 * phy-11-02-motion-straight-line.ts, the pilot physics chapter: the sign
 * convention discipline of its Topic 01 `def` ("name your positive direction,
 * then hold it") is quoted directly in this chapter's own Topic 01 `def`
 * rather than re-argued, since it is the same habit applied to heat and work
 * instead of to displacement and velocity; and the reading of an area under a
 * curve as an accumulated quantity, which that chapter's Topic 02 establishes
 * for a v-t graph, is assumed here rather than re-derived when Topic 03
 * declares the area under a P-V curve to be the work. From
 * math-11-12-limits.ts: the derivative as a limit and the power rule are used
 * without comment in the two `deriv` blocks that differentiate PV = nRT.
 * Integration is NOT in math-11-12-limits.ts (checked: that file teaches
 * derivatives only), so this chapter never leans on an integral the student is
 * assumed to be able to evaluate: the only two integrals it performs, of 1/V
 * and of V^(-gamma), are each shown with their antiderivative written out in
 * the `deriv` step itself. Mayer's relation is derived here in full rather
 * than quoted, because nothing earlier in the physics sequence contains it.
 *
 * FIGURES. Eleven named in the source range, eleven drawn, none dropped, no
 * new figure vocabulary requested. Seven are `plot` (11.3, 11.4, 11.5, 11.6,
 * 11.7, 11.10, 11.11) and four are `flow` (11.1, 11.2, 11.8, 11.9); the eleven
 * briefs are eleven `diagram` blocks carrying twenty-two chips in total,
 * because the panel rule turns a multi-part brief into chips and never into
 * panels inside one frame. Figure 11.5 in particular is the four
 * processes as FOUR chips through one common point, never four panels: at
 * 316pt two panels would be 150pt each and unreadable, and tapping between the
 * isotherm chip and the adiabat chip is exactly how a student sees that the
 * adiabat is steeper, which is why the adiabat chip also carries the isotherm
 * ghosted behind it. Figure 11.10's Carnot loop is drawn at gamma = 1.4 with
 * T1/T2 = 1.3 so the four corners are genuinely separated on a 308px canvas;
 * all four corner labels carry an explicit `at` (nw, ne, se, sw) chosen so the
 * label leaves by the one diagonal no leg occupies, which is the densest label
 * case in the book. Region fills honour `tone`, so the green/red pairing on
 * the energy-flow links of Figures 11.8 and 11.9 is heat gained against heat
 * lost, deliberately, and every figure still reads with colour removed because
 * every flow link is also labelled "Q1 in" or "Q2 out" in words.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11Thermodynamics: Chapter = {
  "chapter": "11",
  "title": "Thermodynamics",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Thermodynamic State and the Zeroth Law",
      "chip": "01 STATE",
      "kalam": "two variables fix the state, the third comes free",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Thermodynamic State and the Zeroth Law</b><br>The conceptual foundation of the whole chapter. CBSE Boards almost always take 1 to 2 marks here: a statement of the zeroth law, a state versus path variable question, or a clean equation-of-state calculation. NEET loves the one-line trap that thermal equilibrium does not mean equal energy. JEE Main asks crisp equation-of-state numericals. JEE Advanced occasionally probes the deep idea, that temperature is a property the zeroth law forces into existence.<br><br><b>02 · The First Law of Thermodynamics</b><br>The workhorse. Almost every later numerical is the first law wearing a different costume. CBSE Boards reliably ask a 2 to 3 mark heat-given, work-done, find Δ<i>U</i> numerical plus the occasional limitations question. NEET favours quick sign-convention and conceptual traps, cyclic process and isothermal Δ<i>U</i> = 0. JEE Main asks two-path numericals that exploit internal energy being a state function. JEE Advanced layers it onto phase changes and cycles where every transfer's sign must be tracked.<br><br><b>03 · Thermodynamic Processes</b><br>The most question-dense slice in the chapter. CBSE Boards almost always pull a 3 to 5 mark derivation from here, work done in an isothermal process or the adiabatic relation <i>PV</i><sup>γ</sup> = constant. NEET fires rapid conceptual rounds: identifying a process from a P-V graph, the heat-work relation in each, slope comparisons. JEE Main loves multi-step numericals combining a process with the first law. JEE Advanced builds full cycles out of these legs and compares work across competing paths.<br><br><b>04 · Specific Heat Capacity and Mayer's Relation</b><br>The hinge between the first law and every numerical that follows. CBSE Boards ask the definitions of <i>C<sub>P</sub></i> and <i>C<sub>V</sub></i>, the derivation of <i>C<sub>P</sub></i> − <i>C<sub>V</sub></i> = <i>R</i>, and one-line reasoning for why <i>C<sub>P</sub></i> is the larger. NEET fires conceptual traps on degrees of freedom and the value of γ. JEE Main folds the two capacities into isobaric and isochoric numericals. JEE Advanced probes gas mixtures, the polytropic molar heat capacity, and the link between equipartition and γ.<br><br><b>05 · Heat Engines, Refrigerators and the Second Law</b><br>Where the first law turns into machines, and where a second law becomes necessary. CBSE Boards ask for the definition of a heat engine, the efficiency formula, the energy-flow schematic, the coefficient of performance, and the two statements of the second law. NEET likes one-step efficiency and COP numericals and quick conceptual traps on reversibility. JEE Main asks you to spot which statement a hypothetical device violates. JEE Advanced probes the equivalence of the Kelvin-Planck and Clausius statements and the precise meaning of reversibility.<br><br><b>06 · The Carnot Engine, Carnot's Theorem and Entropy</b><br>The crown of the chapter. CBSE Boards ask for the four steps of the Carnot cycle, the efficiency η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, and a clean numerical. NEET loves one-line find-the-efficiency traps and the fact that η depends on the two temperatures alone. JEE Main asks multi-part numericals on heat rejected, work and raising efficiency. JEE Advanced derives the heat ratio from the cycle, probes Carnot's theorem, and extends into entropy: the standard entropy changes, the sign of Δ<i>S</i> for the universe, and the Clausius inequality. Entropy is not in the Class 11 board syllabus and boards-only students may read it as enrichment."
        },
        {
          "t": "p",
          "html": "Pick up a steel tin of syrup that has been sitting on a sweet-shop counter all afternoon. Your hand reports <i>warm</i>. But warmth cannot be seen, weighed or bottled, and yet you are certain the tin and the room have settled into some shared condition. That shared condition is the seed of this entire chapter. Thermodynamics studies heat, temperature and the conversion of heat into other forms of energy, and it does so from a deliberately zoomed-out point of view. It is a <b>macroscopic</b> science: describing a litre of gas, it does not care that roughly 10<sup>22</sup> molecules are zipping about inside with their own separate velocities. That bookkeeping belongs to kinetic theory. Thermodynamics asks instead which few bulk numbers an ordinary instrument can measure that completely pin down the gas."
        },
        {
          "t": "p",
          "html": "The answer is a small handful: pressure, volume, temperature, mass, composition. That bundle is the <b>thermodynamic state</b> of a system. A <b>system</b> is whatever chunk of the universe you choose to study, the gas in a cylinder or the syrup in the tin; everything outside it is the <b>surroundings</b>; and the boundary between them, the <b>wall</b>, matters more than students expect. A wall that lets heat through is <b>diathermic</b>, or conducting. A wall that blocks heat entirely is <b>adiabatic</b>, or insulating. Whether two systems can feel each other thermally depends entirely on the wall between them."
        },
        {
          "t": "think",
          "html": "picture two friends in adjacent train compartments. leave the connecting door open, a diathermic wall, and they keep swapping news until there is nothing left to swap: a settled state where nothing more changes. seal the door, an adiabatic wall, and each lives in their own world, oblivious. that settled state is exactly what physicists call thermal equilibrium, and reaching it is what stops the exchange."
        },
        {
          "t": "p",
          "html": "Now the quietly profound part. Experiment shows that thermal equilibrium is <b>transitive</b>, like an equals sign in algebra. If system A has settled with system C, and system B has separately settled with the same C, then A and B turn out to be already settled with each other, even though they were never in contact. That single observation is the <b>Zeroth Law of Thermodynamics</b>, and it does something beautiful: it guarantees that every system carries one number such that equal numbers means in equilibrium. We call that number <b>temperature</b>. Temperature is not assumed at the start of thermodynamics; it is forced into existence by the zeroth law. That is why this law, discovered last, is numbered first: temperature has to exist before the first and second laws can even be written down."
        },
        {
          "t": "def",
          "term": "The sign convention this whole chapter runs on",
          "html": "Fix this now and never re-decide it. This chapter uses the Indian board and JEE/NEET convention, <b>Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i></b>, in which <b>Δ<i>Q</i> is positive when heat is absorbed <i>by</i> the system</b> and negative when heat is released, and <b>Δ<i>W</i> is positive when work is done <i>by</i> the gas</b>, that is on expansion, and negative when work is done on the gas, that is on compression. Δ<i>U</i> positive means the internal energy rose, which for an ideal gas means the temperature rose. Some foreign textbooks and all of chemistry write Δ<i>U</i> = Δ<i>Q</i> + Δ<i>W</i> with <i>W</i> meaning work done <i>on</i> the system. That is the same physics with one sign flipped, and mixing the two mid-problem is where most lost marks in this chapter live. And one more rule with no exceptions: <b>every temperature in every gas law, every specific heat and every efficiency is in kelvin</b>, never in degrees Celsius. Convert first: <i>T</i>(K) = <i>t</i>(°C) + 273.15, rounded to +273 when a question's own data is given to three figures."
        },
        {
          "t": "p",
          "html": "One more split runs through everything. A <b>state variable</b>, also called a point function, depends only on where the system is now, not on how it got there: pressure, volume, temperature and internal energy are all state variables, and around any closed cycle each returns to its starting value, so its net change is zero. A <b>path variable</b> depends on the route taken between two states: heat and work are both path variables. There is no such thing as the amount of heat stored in a gas, only heat transferred along a path. The quick test: ask whether the quantity has a definite value the instant you freeze the system. If it does, it is a state variable. If it only makes sense while something is happening, it is a path variable."
        },
        {
          "t": "defgrid",
          "title": "The quantities, their units and their dimensions",
          "rows": [
            {
              "k": "Pressure <i>P</i>",
              "v": "pascal (Pa) = N/m<sup>2</sup>. Dimensions [M L<sup>−1</sup> T<sup>−2</sup>]"
            },
            {
              "k": "Volume <i>V</i>",
              "v": "m<sup>3</sup>. Dimensions [L<sup>3</sup>]"
            },
            {
              "k": "Temperature <i>T</i>",
              "v": "kelvin (K), always absolute. Dimension [Θ]"
            },
            {
              "k": "Amount <i>n</i>",
              "v": "mole (mol). Dimension [mol]"
            },
            {
              "k": "Gas constant <i>R</i>",
              "v": "8.314 J/mol K. Dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>]"
            },
            {
              "k": "Boltzmann constant <i>k<sub>B</sub></i>",
              "v": "1.38 × 10<sup>−23</sup> J/K = <i>R</i>/<i>N<sub>A</sub></i>, with <i>N<sub>A</sub></i> = 6.022 × 10<sup>23</sup> /mol"
            },
            {
              "k": "Internal energy <i>U</i>",
              "v": "joule (J). Dimensions [M L<sup>2</sup> T<sup>−2</sup>], the same as heat and work"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE EQUATION OF STATE",
          "tag": "T in kelvin, no exceptions",
          "main": "<i>PV</i> = <i>nRT</i><br><i>PV</i> = <i>Nk<sub>B</sub>T</i>",
          "legend": [
            "<i>P</i> = pressure in Pa, <i>V</i> = volume in m<sup>3</sup>, <i>T</i> = absolute temperature in K",
            "<i>n</i> = number of moles in mol, <i>R</i> = 8.314 J/mol K, the universal gas constant",
            "<i>N</i> = number of molecules, a pure count, and <i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K is the Boltzmann constant",
            "both sides reduce to [M L<sup>2</sup> T<sup>−2</sup>], an energy: Pa times m<sup>3</sup> is N/m<sup>2</sup> times m<sup>3</sup>, which is N m, which is a joule"
          ],
          "note": "A homogeneous fixed mass of gas is pinned down by any TWO of P, V and T. The third follows from this equation, so specifying all three over-determines the state."
        },
        {
          "t": "def",
          "term": "Intensive and extensive, settled by cutting the system in half",
          "html": "An <b>intensive</b> property does not depend on how much substance you have: pressure, temperature, density, molar volume. An <b>extensive</b> property scales with the amount: volume, mass, internal energy, number of moles. The test is physical and takes one second. Imagine slicing the system into two equal halves. Whatever stays the same is intensive; whatever halves is extensive. This is exactly why two systems at the same temperature can hold wildly different internal energies: temperature is intensive, energy is extensive, and the zeroth law promises you the first, never the second."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 11.1 · THE TRANSITIVITY EXPERIMENT",
          "chips": [
            "A and B, each with C",
            "the payoff"
          ],
          "captions": [
            "A and B each sit against a diathermic wall with C, and heat flows until nothing more changes. A and B are kept insulated from one another the whole time, so they have never interacted directly.",
            "Now remove the insulation between A and B. Nothing happens: they were already in equilibrium. That is the zeroth law as a raw experimental fact, and it is what licenses a single shared label, temperature."
          ],
          "frames": [
            {
              "aspect": 0.55,
              "flow": {
                "boxes": [
                  {
                    "id": "C",
                    "col": 1,
                    "row": 0,
                    "text": "C",
                    "tone": "amber"
                  },
                  {
                    "id": "A",
                    "col": 0,
                    "row": 1,
                    "text": "A"
                  },
                  {
                    "id": "B",
                    "col": 2,
                    "row": 1,
                    "text": "B"
                  }
                ],
                "links": [
                  {
                    "from": "A",
                    "to": "C",
                    "label": "heat"
                  },
                  {
                    "from": "B",
                    "to": "C",
                    "label": "heat"
                  }
                ]
              }
            },
            {
              "aspect": 0.55,
              "flow": {
                "boxes": [
                  {
                    "id": "ac",
                    "col": 0,
                    "row": 0,
                    "text": "A with C"
                  },
                  {
                    "id": "bc",
                    "col": 2,
                    "row": 0,
                    "text": "B with C"
                  },
                  {
                    "id": "ab",
                    "col": 1,
                    "row": 1,
                    "text": "so A with B",
                    "tone": "green"
                  }
                ],
                "links": [
                  {
                    "from": "ac",
                    "to": "ab"
                  },
                  {
                    "from": "bc",
                    "to": "ab"
                  }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Specifying a thermodynamic state",
          "steps": [
            "<b>Confirm the system is homogeneous, of fixed mass and composition, and in equilibrium.</b> Mid-explosion or mid-reaction, pressure and temperature do not even have single values, and the whole state picture collapses.",
            "<b>Choose any two independent variables</b>, most commonly two of <i>P</i>, <i>V</i>, <i>T</i>.",
            "<b>Let the third follow from <i>PV</i> = <i>nRT</i>.</b> You never need all three independently.",
            "<b>Plot the state as one point on a P-V diagram.</b> A point is a definite state; a line is a process. This one habit makes every later cycle question readable.",
            "<b>For two states of the same fixed amount of gas, use the ratio form</b> <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> and cancel whatever is held fixed."
          ]
        },
        {
          "t": "proc",
          "title": "Deciding whether a quantity is a state variable or a path variable",
          "steps": [
            "<b>Freeze the system in your head</b> and ask whether the quantity still has a definite value.",
            "<b>If yes, it is a state variable</b>, a point function: <i>P</i>, <i>V</i>, <i>T</i>, <i>U</i>. Its net change around any closed cycle is exactly zero.",
            "<b>If it only makes sense while something is happening, it is a path variable</b>: heat <i>Q</i> and work <i>W</i>. Both describe energy in transit, never energy stored.",
            "<b>Never write the phrase heat content of the gas.</b> A gas in a given state has internal energy; it does not contain heat.",
            "<b>Use the consequence, not just the label.</b> Because <i>U</i> is a state variable, Δ<i>U</i> between two states is the same along every route, and that single fact solves most two-path problems in one line."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 11.2 · HOW THE ZEROTH LAW MANUFACTURES TEMPERATURE",
          "chips": [
            "the logical chain"
          ],
          "captions": [
            "Contact, then settling, then transitivity, then a shared label. Every temperature measurement you have ever made silently relies on the last link: because equal readings on one small standard system guarantee equal temperatures, you never have to press two objects together to compare them."
          ],
          "frames": [
            {
              "aspect": 1.05,
              "flow": {
                "boxes": [
                  {
                    "id": "k1",
                    "col": 0,
                    "row": 0,
                    "text": "thermal contact"
                  },
                  {
                    "id": "k2",
                    "col": 0,
                    "row": 1,
                    "text": "variables settle"
                  },
                  {
                    "id": "k3",
                    "col": 0,
                    "row": 2,
                    "text": "equilibrium is\ntransitive"
                  },
                  {
                    "id": "k4",
                    "col": 0,
                    "row": 3,
                    "text": "define the shared\nlabel: temperature",
                    "tone": "amber"
                  },
                  {
                    "id": "k5",
                    "col": 0,
                    "row": 4,
                    "text": "a thermometer\ncompares from afar"
                  }
                ],
                "links": [
                  {
                    "from": "k1",
                    "to": "k2"
                  },
                  {
                    "from": "k2",
                    "to": "k3"
                  },
                  {
                    "from": "k3",
                    "to": "k4"
                  },
                  {
                    "from": "k4",
                    "to": "k5"
                  }
                ]
              }
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A rigid steel cylinder of fixed internal volume 0.025 m<sup>3</sup> holds an ideal gas at a pressure of 2.0 × 10<sup>5</sup> Pa and a temperature of 300 K. Find the number of moles of gas in the cylinder.",
          "steps": [
            "Rearrange the equation of state: <i>n</i> = <i>PV</i>/<i>RT</i>.",
            "<i>n</i> = (2.0 × 10<sup>5</sup>)(0.025)/[(8.314)(300)] = 5.0 × 10<sup>3</sup>/2494 mol.",
            "Unit check, the fastest sanity test in a board exam: Pa times m<sup>3</sup> is N/m<sup>2</sup> times m<sup>3</sup>, which is N m, which is J. That cancels against the joules in <i>R</i> and leaves mol.",
            "<i>n</i> = 2.005 mol, so 2.0 mol to two significant figures."
          ],
          "ans": "n = 2.0 mol"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Three sealed flasks P, Q and R are watched over time. P is in thermal equilibrium with Q, and Q is in thermal equilibrium with R. A student concludes that (i) P is in equilibrium with R, (ii) P, Q and R all have the same temperature, (iii) P, Q and R all contain the same internal energy. Which conclusions are correct?",
          "steps": [
            "(i) is the zeroth law applied directly. P with Q and Q with R forces P with R. Correct.",
            "(ii) is (i) restated through temperature: equilibrium holds exactly when temperatures are equal. Correct.",
            "(iii) is the trap. Temperature is intensive; internal energy is extensive and depends on how much gas each flask holds and of what kind. A flask with 5 mol holds five times the internal energy of one with 1 mol at the same temperature. Incorrect.",
            "The instant a question offers an equal energy option beside an equal temperature option, suspect the energy one. Equal <i>T</i> is what the zeroth law gives you; equal <i>U</i> is something it never promises."
          ],
          "ans": "(i) and (ii) only"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A rigid, externally insulated container is split into two equal halves by a fixed diathermic partition. Each half has volume 0.010 m<sup>3</sup>. The left half holds 2.0 mol of a monatomic ideal gas at 400 K; the right half holds 3.0 mol of the same gas at 300 K. Find the final common temperature and the final pressure on each side.",
          "steps": [
            "What is conserved? The partition is fixed, so no work is done, and the container is insulated, so no heat enters or leaves. Total internal energy is therefore constant.",
            "For a monatomic ideal gas <i>U</i> = (3/2)<i>nRT</i>, so (3/2)<i>R</i>(<i>n</i><sub>1</sub><i>T</i><sub>1</sub> + <i>n</i><sub>2</sub><i>T</i><sub>2</sub>) = (3/2)<i>R</i>(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)<i>T<sub>f</sub></i>. The (3/2)<i>R</i> cancels.",
            "<i>T<sub>f</sub></i> = [(2.0)(400) + (3.0)(300)]/5.0 = 1700/5.0 = 340 K, the mole-weighted mean.",
            "Each half keeps <i>V</i> = 0.010 m<sup>3</sup>. <i>P</i><sub>left</sub> = (2.0)(8.314)(340)/0.010 = 5.65 × 10<sup>5</sup> Pa, and <i>P</i><sub>right</sub> = (3.0)(8.314)(340)/0.010 = 8.48 × 10<sup>5</sup> Pa.",
            "The temperatures equalise but the pressures do not. Thermal equilibrium fixes temperature, and nothing else."
          ],
          "ans": "T<sub>f</sub> = 340 K · P<sub>left</sub> = 5.65 × 10<sup>5</sup> Pa · P<sub>right</sub> = 8.48 × 10<sup>5</sup> Pa"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A constant-volume ideal-gas thermometer reads <i>T</i> = 273.16(<i>P</i>/<i>P</i><sub>tr</sub>) K, where <i>P</i><sub>tr</sub> is its gas pressure at the triple point of water. Dipped in bath A it reads 1.10<i>P</i><sub>tr</sub>; in bath B, 1.30<i>P</i><sub>tr</sub>. Bath A is 2.0 kg of water, bath B is 1.0 kg of water. The baths are placed in thermal contact, isolated and allowed to settle. Predict, with justification, and then compute the two readings afterwards.",
          "steps": [
            "Initial temperatures: <i>T<sub>A</sub></i> = 273.16(1.10) = 300.5 K and <i>T<sub>B</sub></i> = 273.16(1.30) = 355.1 K.",
            "The prediction comes before the arithmetic. Once A and B reach mutual equilibrium they share one temperature, and by the zeroth law the thermometer, itself a third system, must register the same value in each. So the two final readings are identical.",
            "Common temperature by calorimetry, heat lost equal to heat gained with the same specific heat: <i>T<sub>f</sub></i> = (<i>m<sub>A</sub>T<sub>A</sub></i> + <i>m<sub>B</sub>T<sub>B</sub></i>)/(<i>m<sub>A</sub></i> + <i>m<sub>B</sub></i>) = [(2.0)(300.5) + (1.0)(355.1)]/3.0 = 318.7 K.",
            "Convert back: <i>P<sub>f</sub></i> = <i>P</i><sub>tr</sub>(318.7/273.16) = 1.17<i>P</i><sub>tr</sub> in both baths.",
            "Note the check on plausibility: 318.7 K lies nearer <i>T<sub>A</sub></i>, exactly as a 2 to 1 mass ratio demands."
          ],
          "ans": "both baths read ≈ 1.17P<sub>tr</sub>, that is T<sub>f</sub> ≈ 318.7 K"
        },
        {
          "t": "mcq",
          "q": "The zeroth law fundamentally allows us to define which physical quantity?",
          "opts": [
            {
              "label": "heat",
              "nudge": "Heat is energy in transit driven by a temperature difference, so it already presupposes that temperature exists."
            },
            {
              "label": "internal energy",
              "nudge": "Internal energy is defined later, by the first law, not by the zeroth."
            },
            {
              "label": "temperature",
              "nudge": null
            },
            {
              "label": "work",
              "nudge": "Work is a mechanical, path-dependent transfer and has nothing to do with the zeroth law."
            }
          ],
          "correct": 2,
          "solution": "The zeroth law makes in equilibrium with a transitive relation, which lets every system be tagged with one number that is equal exactly when two systems are in equilibrium. That number is temperature."
        },
        {
          "t": "mcq",
          "q": "The minimum number of independent state variables needed to specify the state of a homogeneous fixed mass of ideal gas in equilibrium is:",
          "opts": [
            {
              "label": "1",
              "nudge": "One variable is too few: fixing only the temperature still leaves the gas free to slide anywhere along an isotherm."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "The most common wrong choice. It over-counts by ignoring the equation-of-state constraint that ties the three together."
            },
            {
              "label": "4",
              "nudge": "This adds the amount of gas, but the mass is already fixed by the wording of the question."
            }
          ],
          "correct": 1,
          "solution": "P, V and T are tied by PV = nRT, so fixing any two fixes the third."
        },
        {
          "t": "mcq",
          "q": "Which of these is an intensive property?",
          "opts": [
            {
              "label": "volume",
              "nudge": "Cut the system in half and the volume halves, which is the definition of extensive."
            },
            {
              "label": "internal energy",
              "nudge": "Internal energy scales with how much substance is present, so it is extensive."
            },
            {
              "label": "number of moles",
              "nudge": "The number of moles literally measures amount, making it the most obviously extensive quantity on the list."
            },
            {
              "label": "pressure",
              "nudge": null
            }
          ],
          "correct": 3,
          "solution": "Cut the system in half: the pressure is unchanged, so it is intensive. Volume, internal energy and moles all halve."
        },
        {
          "t": "mcq",
          "q": "X is in thermal equilibrium with Y. Y is <i>not</i> in equilibrium with Z. Which statement is necessarily true?",
          "opts": [
            {
              "label": "X is in equilibrium with Z",
              "nudge": "This reverses the logic. Equal temperatures propagate, but so does the inequality."
            },
            {
              "label": "X is not in equilibrium with Z",
              "nudge": null
            },
            {
              "label": "X, Y and Z are all at the same temperature",
              "nudge": "Impossible, since the question states that Y and Z are not in equilibrium, so their temperatures differ."
            },
            {
              "label": "Z holds more internal energy than X",
              "nudge": "This confuses temperature with energy. Nothing here fixes how much of anything Z contains."
            }
          ],
          "correct": 1,
          "solution": "X with Y gives T<sub>X</sub> = T<sub>Y</sub>. Since T<sub>Y</sub> is not equal to T<sub>Z</sub>, T<sub>X</sub> cannot equal T<sub>Z</sub> either, so X and Z cannot be in equilibrium."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] An ideal gas occupies 5.0 × 10<sup>−3</sup> m<sup>3</sup> at 1.0 × 10<sup>5</sup> Pa and 250 K. Find the number of moles present.",
              "a": "<i>n</i> = <i>PV</i>/<i>RT</i> = (1.0 × 10<sup>5</sup>)(5.0 × 10<sup>−3</sup>)/[(8.314)(250)] = 500/2078.5 ≈ 0.24 mol."
            },
            {
              "q": "[NEET] Classify each as a state or a path variable: pressure, work done, internal energy, heat supplied, volume. Then say which two of pressure, work and volume can together specify the state.",
              "a": "State: pressure, internal energy, volume. Path: work done, heat supplied. Only pressure and volume can specify the state, since work is not a state variable at all."
            },
            {
              "q": "[JEE Main] A fixed mass of ideal gas at 300 K and 2.0 × 10<sup>5</sup> Pa is heated in a rigid sealed container until its pressure reaches 3.2 × 10<sup>5</sup> Pa. Find its new temperature.",
              "a": "Rigid means <i>V</i> is constant, so <i>P</i>/<i>T</i> is constant. <i>T</i><sub>2</sub> = 300 × (3.2/2.0) = 480 K."
            },
            {
              "q": "[JEE Main] Two equal rigid volumes joined by a fixed diathermic wall, isolated from outside, hold 1.0 mol of a monatomic ideal gas at 500 K and 4.0 mol of the same gas at 250 K. Find the final common temperature.",
              "a": "Energy is conserved and the (3/2)<i>R</i> cancels, so <i>T<sub>f</sub></i> = [(1.0)(500) + (4.0)(250)]/5.0 = 1500/5.0 = 300 K."
            },
            {
              "q": "[JEE Advanced] A constant-volume gas thermometer reads <i>P</i><sub>1</sub> in a bath at unknown <i>T</i><sub>1</sub> and 1.5<i>P</i><sub>1</sub> in a second bath. Its triple-point pressure is <i>P</i><sub>tr</sub> = 0.80<i>P</i><sub>1</sub>. The second bath is twice as massive and holds the same liquid. Mixed in isolation, what does the thermometer read in each?",
              "a": "<i>T</i><sub>1</sub> = 273.16/0.80 = 341.5 K and <i>T</i><sub>2</sub> = 1.5 × 341.5 = 512.2 K. Mass ratio 1 to 2 gives <i>T<sub>f</sub></i> = (341.5 + 2 × 512.2)/3 = 455.3 K. Both baths then read <i>P<sub>f</sub></i> = <i>P</i><sub>tr</sub>(455.3/273.16) ≈ 1.67<i>P</i><sub>tr</sub>."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading equal temperature as equal energy.</b> A tiny hot system and a huge warm one can hold the same internal energy, and two systems at the same temperature usually hold different amounts. Temperature is intensive, energy is extensive, and the zeroth law promises only the first.",
            "<b>Treating <i>P</i>, <i>V</i> and <i>T</i> as three independent variables.</b> They are bound by <i>PV</i> = <i>nRT</i>. For a fixed mass only two are free, and quoting all three over-determines the state.",
            "<b>Calling heat a state variable.</b> <i>Q</i> and <i>W</i> are path quantities. Only <i>P</i>, <i>V</i>, <i>T</i> and <i>U</i> are point functions. Never write the heat content of the gas.",
            "<b>Putting degrees Celsius into <i>PV</i> = <i>nRT</i>.</b> The gas equation demands kelvin. Convert with <i>T</i>(K) = <i>t</i>(°C) + 273.15 before anything else, and the same rule will follow you through every efficiency in this chapter.",
            "<b>Deciding the sign convention halfway through a solution.</b> Heat in is positive and work by the gas is positive, for every worked line of this chapter. Choose it before the first equation, not after the first surprise."
          ]
        },
        {
          "t": "protip",
          "html": "for any same gas, fixed amount, two states problem, skip rederiving anything and use the ratio form P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>. cancel whatever is held constant, V for a rigid vessel, P for a free piston, and you are left with a one-line proportion. and for any two bodies reach equilibrium question, write the qualitative answer first, they end at one temperature, before touching the algebra: it is often the whole mark."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "state = one point in P-V-T space",
              "note": "any two independent variables fix it, the third follows"
            },
            {
              "f": "PV = nRT, and PV = Nk<sub>B</sub>T per molecule",
              "note": "T in kelvin, always, with R = 8.314 J/mol K"
            },
            {
              "f": "zeroth law: A with C and B with C gives A with B",
              "note": "this is what defines temperature as the shared label of equilibrium"
            },
            {
              "f": "equilibrium means equal T, not equal U and not equal P",
              "note": "temperature is intensive, internal energy is extensive"
            },
            {
              "f": "state variables P, V, T, U · path variables Q, W",
              "note": "a state variable has zero net change around any closed cycle"
            },
            {
              "f": "ΔQ = ΔU + ΔW, heat in positive, work by gas positive",
              "note": "the convention every worked example in this chapter holds"
            }
          ],
          "aids": [
            "\"the zeroth law is the law that gives birth to temperature\"",
            "\"cut it in half: same means intensive, halved means extensive\"",
            "\"heat and work are journeys, not destinations\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The First Law of Thermodynamics",
      "chip": "02 FIRST LAW",
      "kalam": "signs before sums, every single time",
      "blocks": [
        {
          "t": "p",
          "html": "A system's condition is captured by its internal energy <i>U</i>, a genuine state variable, a number the gas owns. The natural next question is the one this law answers: how can that owned energy change? Picture a fixed amount of gas trapped in a cylinder under a frictionless, movable piston, the single most important mental image in thermodynamics. There are exactly <b>two doors</b> through which energy can enter or leave. Door one is <b>heat</b>: stand the cylinder on a hot stove and, because of the temperature difference, energy seeps in as <i>Q</i>. Door two is <b>work</b>: push the piston down and you cram energy in; let the gas push the piston up and the gas spends energy on its surroundings. There is no third door."
        },
        {
          "t": "think",
          "html": "treat the gas like a bank account for a month. ΔQ is the salary credited, ΔW is the rent and bills paid out, ΔU is the change in the balance. the law ΔQ = ΔU + ΔW just says income equals change in savings plus spending. some months savings grow, some months you overspend and the balance drops. nobody invents money from nothing, and no gas invents energy from nothing."
        },
        {
          "t": "p",
          "html": "Now the exam-deciding distinction, and it is the same bank account. Your <b>balance</b> is a state: at any instant it has one definite value. But income and expenditure describe <b>flows</b> over a period, not contents at an instant. It is meaningless to ask how much income is sitting in the account right now. In the same way internal energy <i>U</i> is a <b>state function</b> while heat <i>Q</i> and work <i>W</i> are <b>path functions</b>: they describe energy in transit, not energy stored. A powerful consequence drops out. Take a gas from state <i>i</i> to state <i>f</i> by ten wildly different routes and <i>Q</i> and <i>W</i> differ on every one, but Δ<i>U</i> = <i>U<sub>f</sub></i> − <i>U<sub>i</sub></i> is identical for all ten, because it depends only on the endpoints. So Δ<i>Q</i> − Δ<i>W</i> comes out the same no matter the path, and this single fact is the most-used idea in first-law problems."
        },
        {
          "t": "p",
          "html": "Three guardrails before you use it. First, unit consistency is non-negotiable: <i>Q</i>, <i>U</i> and <i>W</i> must share one unit, and 1 cal = 4.18 J. Second, the law itself is supremely general, covering solids, liquids, gases and even phase changes, but the simple work expression <i>W</i> = ∫<i>P dV</i> assumes a <b>quasi-static</b> process, one slow enough that the gas has a single well-defined pressure at every instant. Third, and this is the whole reason the chapter continues past this page, the first law is a bookkeeper and not a fortune-teller. It guarantees that energy balances, and it says nothing about which direction a process spontaneously runs, or what fraction of heat can be turned into useful work. That blind spot is what the second law fills."
        },
        {
          "t": "def",
          "term": "Why there is no such thing as the heat content of a gas",
          "html": "A gas in a given state has a definite internal energy, and no definite quantity of heat. Heat is energy crossing a boundary because of a temperature difference; it exists only <i>while a process is happening</i>, and the moment the process stops there is no heat anywhere, only internal energy that has changed. The differential notation makes the same point: <i>dU</i> is an exact differential, so ∮<i>dU</i> = 0 around any cycle, while heat and work carry inexact differentials whose loop integrals are generally not zero. Say <b>the gas gained 545 J of internal energy</b>, never the gas now contains 545 J of heat."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FIRST LAW",
          "tag": "board, JEE and NEET convention",
          "main": "Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i><br>Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i>",
          "legend": [
            "Δ<i>Q</i> = heat exchanged, in joules; positive when absorbed by the system, negative when released",
            "Δ<i>W</i> = work, in joules; positive when done <i>by</i> the gas on expansion, negative when done <i>on</i> the gas on compression",
            "Δ<i>U</i> = change in internal energy, in joules; positive means the temperature rose, for an ideal gas",
            "all three terms carry [M L<sup>2</sup> T<sup>−2</sup>], which is the fastest check that an equation you have written is even allowed"
          ],
          "note": "Over a complete cycle the system returns to its start, so ΔU = 0 and the net heat absorbed equals the net work done. That one line solves a large fraction of cyclic-process questions."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.3 · THE TWO DOORS, AND THEIR SIGNS",
          "chips": [
            "heat in, gas expands",
            "work in, heat leaks out"
          ],
          "captions": [
            "Heat enters through the base and the gas pushes the piston up. Both terms are positive here: Q in is energy gained and W by the gas is energy spent, and what is left over raises U.",
            "The same cylinder run the other way. An external agent pushes the piston down, so the work done by the gas is negative, and heat leaks out, so Q is negative too. Squeeze a gas while only a little heat escapes and its internal energy must rise: ΔU = ΔQ − ΔW with two negatives on the right."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axes": "none",
              "aspect": 1,
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      7.5
                    ],
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      7.5
                    ]
                  ],
                  "fill": "none",
                  "tone": "ink"
                },
                {
                  "pts": [
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      4.2
                    ],
                    [
                      3,
                      4.2
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "soft",
                  "label": "gas, U"
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    5,
                    4.5
                  ],
                  "w": 4,
                  "h": 0.5
                }
              ],
              "arrows": [
                {
                  "from": [
                    5,
                    0.3
                  ],
                  "to": [
                    5,
                    1.05
                  ],
                  "tone": "green",
                  "label": "Q in",
                  "at": "start"
                },
                {
                  "from": [
                    5,
                    5.3
                  ],
                  "to": [
                    5,
                    7
                  ],
                  "tone": "red",
                  "label": "W by gas",
                  "at": "end"
                }
              ],
              "labels": [
                {
                  "x": 5,
                  "y": 8.5,
                  "text": "heat in, gas expands"
                },
                {
                  "x": 5,
                  "y": 9.4,
                  "text": "ΔQ = ΔU + ΔW"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axes": "none",
              "aspect": 1,
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      7.5
                    ],
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      7.5
                    ]
                  ],
                  "fill": "none",
                  "tone": "ink"
                },
                {
                  "pts": [
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      3.2
                    ],
                    [
                      3,
                      3.2
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "soft",
                  "label": "gas, U"
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    5,
                    3.5
                  ],
                  "w": 4,
                  "h": 0.5
                }
              ],
              "arrows": [
                {
                  "from": [
                    5,
                    0.85
                  ],
                  "to": [
                    5,
                    0.3
                  ],
                  "tone": "red",
                  "label": "Q out",
                  "at": "end"
                },
                {
                  "from": [
                    5,
                    6.4
                  ],
                  "to": [
                    5,
                    4
                  ],
                  "tone": "green",
                  "label": "W on gas",
                  "at": "start"
                }
              ],
              "labels": [
                {
                  "x": 5,
                  "y": 8.5,
                  "text": "work in, heat leaks out"
                },
                {
                  "x": 5,
                  "y": 9.4,
                  "text": "ΔU rises anyway"
                }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WORK AS AN AREA, INTERNAL ENERGY AS A TEMPERATURE",
          "main": "Δ<i>W</i> = ∫ <i>P dV</i>, from <i>V<sub>i</sub></i> to <i>V<sub>f</sub></i><br>Δ<i>U</i> = <i>nC<sub>V</sub></i> Δ<i>T</i>",
          "legend": [
            "the integral is the area under the P-V curve between the two volumes, in joules, valid for a quasi-static process",
            "<i>V<sub>i</sub></i>, <i>V<sub>f</sub></i> are the initial and final volumes in m<sup>3</sup>, and <i>P</i> is the gas pressure in Pa at each stage",
            "<i>n</i> = moles, <i>C<sub>V</sub></i> = molar heat capacity at constant volume in J/mol K, Δ<i>T</i> = temperature change in K",
            "Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> holds for <b>every</b> process of an ideal gas, not only for constant volume, because <i>U</i> depends on temperature alone"
          ],
          "note": "Dimensions: Pa times m<sup>3</sup> is a joule, and mol times J/mol K times K is a joule. Both sides of the first law are energies, as they must be."
        },
        {
          "t": "defgrid",
          "title": "The first law in four standard processes",
          "rows": [
            {
              "k": "Isochoric, <i>V</i> fixed",
              "v": "Δ<i>W</i> = 0, so Δ<i>Q</i> = Δ<i>U</i>. Every joule of heat becomes internal energy"
            },
            {
              "k": "Isobaric, <i>P</i> fixed",
              "v": "nothing vanishes: Δ<i>Q</i> = Δ<i>U</i> + <i>P</i>Δ<i>V</i>"
            },
            {
              "k": "Isothermal, <i>T</i> fixed",
              "v": "Δ<i>U</i> = 0 for an ideal gas, so Δ<i>Q</i> = Δ<i>W</i>. All the heat leaves as work"
            },
            {
              "k": "Adiabatic, no heat crosses",
              "v": "Δ<i>Q</i> = 0, so Δ<i>U</i> = −Δ<i>W</i>. The gas pays for expansion out of its own energy and cools"
            },
            {
              "k": "Complete cycle",
              "v": "Δ<i>U</i> = 0, so Δ<i>Q</i><sub>net</sub> = Δ<i>W</i><sub>net</sub> = the area enclosed by the loop"
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY INTERNAL ENERGY MUST BE A STATE FUNCTION, TAP A LINE",
          "steps": [
            {
              "eq": "experiment: for any process taking a system from <i>i</i> to <i>f</i>, the quantity (Δ<i>Q</i> − Δ<i>W</i>) is the same on every path",
              "why": "This is a measured fact, not a definition. Δ<i>Q</i> and Δ<i>W</i> separately vary wildly from route to route, and their difference stubbornly does not."
            },
            {
              "eq": "a quantity that depends only on the endpoints is, by definition, a function of state",
              "why": "So there exists a state function whose change equals Δ<i>Q</i> − Δ<i>W</i>. Nothing has been assumed here; the experiment forces the existence of the function on us."
            },
            {
              "eq": "define Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i>, that is Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>",
              "why": "The first law therefore does two jobs at once: it states conservation of energy, and it introduces internal energy as a legitimate property of the system. The two ideas arrive together."
            },
            {
              "eq": "if <i>i</i> = <i>f</i>, a closed cycle, then Δ<i>U</i> = 0 and so ∮<i>dQ</i> = ∮<i>dW</i>",
              "why": "Net heat absorbed equals net work done, per cycle, for any cyclic device whatsoever. This is the identity every engine problem in Topic 05 is built on."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.4 · THREE ROUTES, ONE CHANGE IN U",
          "chips": [
            "path dependence"
          ],
          "captions": [
            "Three quasi-static routes from A to B on a P-V diagram. The area under each curve differs, so the work differs, and the heat differs to match. But the change in internal energy is U at B minus U at A, and every route shares those endpoints, so all three give exactly the same number. That is what path-independence looks like."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      8,
                      2
                    ],
                    [
                      2,
                      8
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      8,
                      2
                    ],
                    [
                      8,
                      5
                    ],
                    [
                      6,
                      7.5
                    ],
                    [
                      2,
                      8
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      8,
                      2
                    ],
                    [
                      4,
                      2.2
                    ],
                    [
                      2.4,
                      4
                    ],
                    [
                      2,
                      8
                    ]
                  ],
                  "smooth": true
                }
              ],
              "points": [
                {
                  "x": 8,
                  "y": 2,
                  "label": "A",
                  "at": "se"
                },
                {
                  "x": 2,
                  "y": 8,
                  "label": "B",
                  "at": "nw"
                }
              ],
              "labels": [
                {
                  "x": 5.6,
                  "y": 4.9,
                  "text": "1"
                },
                {
                  "x": 6.6,
                  "y": 6.4,
                  "text": "2"
                },
                {
                  "x": 3.4,
                  "y": 2.9,
                  "text": "3"
                },
                {
                  "x": 4.6,
                  "y": 9.4,
                  "text": "Q and W differ, ΔU does not"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any first-law problem, in six moves",
          "steps": [
            "<b>Identify the system and the two transfers.</b> What is the substance? Is heat entering or leaving? Is the gas expanding, so doing work, or being compressed, so having work done on it?",
            "<b>Assign signs first and numbers second.</b> Write Δ<i>Q</i> and Δ<i>W</i> with an explicit plus or minus before you substitute anything. Most wrong answers here are sign errors, not arithmetic errors.",
            "<b>Convert to one unit system, usually joules.</b> 1 cal = 4.18 J.",
            "<b>Apply Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i></b>, or the reduced form for whichever of the four standard processes you are in.",
            "<b>Exploit path-independence when two routes share endpoints.</b> Compute Δ<i>U</i> once from the fully specified route and reuse it on the other.",
            "<b>Sanity-check the sign of Δ<i>U</i>.</b> For an ideal gas, Δ<i>U</i> greater than zero means the temperature rose. Does that match the physical story you just told? If not, you have an error, not a discovery."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A gas is supplied 250 cal of heat. During the heating it expands and does 500 J of work on its surroundings. Find the change in internal energy. Take 1 cal = 4.18 J.",
          "steps": [
            "Signs first. Heat is absorbed, so Δ<i>Q</i> = +250 cal. The gas expands, so the work done by the gas is Δ<i>W</i> = +500 J.",
            "Convert: Δ<i>Q</i> = 250 × 4.18 = 1045 J. Skipping this conversion is the single commonest way to lose the whole question.",
            "Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = 1045 − 500 = +545 J.",
            "The positive sign says most of the heat stayed inside the gas as internal energy and the rest pushed the piston outward."
          ],
          "ans": "ΔU = +545 J"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A gas is compressed by an external agent who does 80 J of work on it. During the compression the gas releases 30 J of heat. By how much does its internal energy change?",
          "steps": [
            "The trap lives entirely in the signs, so set them before touching arithmetic. Heat released gives Δ<i>Q</i> = −30 J. Work done <i>on</i> the gas means the work done <i>by</i> the gas is Δ<i>W</i> = −80 J.",
            "Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = (−30) − (−80) = +50 J.",
            "Two wrong answers are waiting: −110 J, from forgetting that work done on the gas is an energy input, and +50 J reached by mixing conventions and getting the right number for the wrong reason.",
            "The physical check rescues you every time: squeezing a gas while only a little heat leaks out must raise its internal energy, so Δ<i>U</i> has to be positive."
          ],
          "ans": "ΔU = +50 J, the internal energy rises"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "An ideal gas goes from A to B along two different paths. Along path 1 it absorbs 200 J of heat and does 120 J of work. Along path 2, between the same endpoints, it does 60 J of work. Find the heat exchanged along path 2 and say whether it is absorbed or released.",
          "steps": [
            "This lives entirely on Δ<i>U</i> being a state function.",
            "From the fully known path 1: Δ<i>U</i> = Δ<i>Q</i><sub>1</sub> − Δ<i>W</i><sub>1</sub> = 200 − 120 = +80 J.",
            "Path 2 shares both endpoints, so Δ<i>U</i> is the same +80 J. No recalculation of anything else is needed.",
            "Δ<i>Q</i><sub>2</sub> = Δ<i>U</i> + Δ<i>W</i><sub>2</sub> = 80 + 60 = +140 J, positive and therefore absorbed.",
            "Both transfers shrank from path 1 to path 2, yet their difference stayed pinned at 80 J. That fixed difference is the entire point."
          ],
          "ans": "ΔQ<sub>2</sub> = +140 J, absorbed by the gas"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "2.0 g of a liquid is completely vaporised at a constant pressure of 1.0 × 10<sup>5</sup> Pa. As a liquid it occupies 2.5 cm<sup>3</sup>; as vapour, 3100 cm<sup>3</sup>. The latent heat is <i>L</i> = 2.0 × 10<sup>6</sup> J/kg. Find the work done, the change in internal energy, and the fraction of the supplied heat that ends up as internal energy.",
          "steps": [
            "Heat supplied is latent: Δ<i>Q</i> = <i>mL</i> = (2.0 × 10<sup>−3</sup>)(2.0 × 10<sup>6</sup>) = 4000 J.",
            "Work at constant pressure: Δ<i>V</i> = (3100 − 2.5) cm<sup>3</sup> = 3.0975 × 10<sup>−3</sup> m<sup>3</sup>, so Δ<i>W</i> = <i>P</i>Δ<i>V</i> = (1.0 × 10<sup>5</sup>)(3.0975 × 10<sup>−3</sup>) ≈ 310 J.",
            "Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = 4000 − 310 = 3690 J.",
            "Fraction into internal energy: 3690/4000 = 0.92, that is 92%.",
            "Only about 8% of the heat went into pushing back the atmosphere. The other 92% is almost entirely potential energy, spent pulling molecules apart against their mutual attraction, since the temperature does not change during boiling. That is exactly why latent heats are large: breaking intermolecular bonds is expensive and mechanical expansion is cheap."
          ],
          "ans": "ΔW ≈ 310 J · ΔU ≈ 3690 J · about 92% into internal energy"
        },
        {
          "t": "mcq",
          "q": "A system absorbs 800 J of heat and its internal energy increases by 500 J. The work done by the system is:",
          "opts": [
            {
              "label": "300 J",
              "nudge": null
            },
            {
              "label": "1300 J",
              "nudge": "This adds where the first law subtracts: ΔW = ΔQ − ΔU, not ΔQ + ΔU."
            },
            {
              "label": "−300 J",
              "nudge": "The right magnitude with the sign flipped. A system that absorbs more heat than it stores must be doing positive work, not having work done on it."
            },
            {
              "label": "500 J",
              "nudge": "This is the change in internal energy read off as if it were the work."
            }
          ],
          "correct": 0,
          "solution": "ΔW = ΔQ − ΔU = 800 − 500 = 300 J, done by the system."
        },
        {
          "t": "mcq",
          "q": "For a complete cyclic process, which statement is always true?",
          "opts": [
            {
              "label": "net heat absorbed equals net work done",
              "nudge": null
            },
            {
              "label": "the net work is zero",
              "nudge": "False, and an engine's whole purpose is a non-zero net work: it is the area enclosed by the loop on a P-V diagram."
            },
            {
              "label": "the net heat is zero",
              "nudge": "False for the same reason. If the net heat vanished the net work would too, and the device would do nothing."
            },
            {
              "label": "ΔU equals the net work",
              "nudge": "This confuses the result with the premise. Around a cycle ΔU is zero, and it is the heat that equals the work."
            }
          ],
          "correct": 0,
          "solution": "Over a cycle the system returns to its initial state, so ΔU = 0 and the first law collapses to net heat absorbed equals net work done."
        },
        {
          "t": "mcq",
          "q": "The internal energy of a given mass of ideal gas depends only on its:",
          "opts": [
            {
              "label": "pressure",
              "nudge": "Pressure alone is only part of the state: you can change P along an isotherm with no change in U at all."
            },
            {
              "label": "volume",
              "nudge": "Volume alone is only part of the state, for exactly the same reason as pressure."
            },
            {
              "label": "temperature",
              "nudge": null
            },
            {
              "label": "pressure and volume independently",
              "nudge": "A tempting near-miss: the pair (P, V) does fix the state, but only because it fixes T through PV = nRT, and it is T that U actually tracks."
            }
          ],
          "correct": 2,
          "solution": "U is the energy of random molecular motion, a function of T alone, which is why ΔU = nC<sub>V</sub>ΔT holds for every process, not just constant-volume ones."
        },
        {
          "t": "mcq",
          "q": "Which of these can the first law <i>not</i> do?",
          "opts": [
            {
              "label": "account for energy conservation",
              "nudge": "This is precisely what the first law does; picking it means missing the word not in the question."
            },
            {
              "label": "introduce U as a state variable",
              "nudge": "The first law does exactly this, alongside conservation. The two ideas arrive together."
            },
            {
              "label": "predict the direction of spontaneous change",
              "nudge": null
            },
            {
              "label": "apply to solids, liquids and gases alike",
              "nudge": "The first law is completely general across states of matter, so this too is something it does."
            }
          ],
          "correct": 2,
          "solution": "The first law is direction-blind: it permits heat to flow from cold to hot just as readily as from hot to cold, since both conserve energy. Only the second law forbids the unnatural direction."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A gas absorbs 600 J of heat and does 250 J of work on its surroundings. Find Δ<i>U</i>.",
              "a": "Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = 600 − 250 = +350 J."
            },
            {
              "q": "[NEET] An ideal gas undergoes an isothermal expansion. State the value of Δ<i>U</i>, with a one-line justification, and the relation between Δ<i>Q</i> and Δ<i>W</i>.",
              "a": "Δ<i>U</i> = 0, because the internal energy of an ideal gas depends only on <i>T</i> and <i>T</i> is held constant. The first law then gives Δ<i>Q</i> = Δ<i>W</i>: all the absorbed heat leaves as work."
            },
            {
              "q": "[JEE Main] 150 J of heat is supplied to a gas in a rigid sealed container of fixed volume. Find the work done by the gas and its Δ<i>U</i>.",
              "a": "Rigid means isochoric, so Δ<i>W</i> = 0 and Δ<i>U</i> = Δ<i>Q</i> = +150 J."
            },
            {
              "q": "[JEE Main] A gas goes from A to B along path I, absorbing 300 J while doing 100 J of work. Taken from A to B along a different path II it does 250 J of work. Find the heat exchanged along path II.",
              "a": "Δ<i>U</i> = 300 − 100 = 200 J, and it is the same on both paths. So Δ<i>Q</i><sub>II</sub> = 200 + 250 = +450 J, absorbed."
            },
            {
              "q": "[JEE Advanced] A gas first expands adiabatically, doing 220 J of work, and is then compressed isothermally with 150 J of work done on it by an external agent. Find the total Δ<i>U</i> and say whether the final temperature is above or below the initial one.",
              "a": "Adiabatic leg: Δ<i>U</i><sub>1</sub> = −Δ<i>W</i><sub>1</sub> = −220 J. Isothermal leg: Δ<i>U</i><sub>2</sub> = 0. Total Δ<i>U</i> = −220 J. A negative Δ<i>U</i> for an ideal gas means <i>T</i> fell, so the final temperature is lower."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Sign-convention chaos.</b> The number-one error in this chapter. Heat released means Δ<i>Q</i> is negative; work done on the gas means Δ<i>W</i> is negative. Decide and write every sign before substituting a single number.",
            "<b>Calling internal energy the heat content.</b> A gas in a state has internal energy; it does not contain heat. Heat is energy crossing the boundary and is defined only for a process.",
            "<b>Mixing calories and joules.</b> Δ<i>Q</i>, Δ<i>U</i> and Δ<i>W</i> must share one unit. Convert first: 1 cal = 4.18 J.",
            "<b>Assuming Δ<i>U</i> = 0 when it is not.</b> Δ<i>U</i> vanishes only for an isothermal process of an ideal gas, or over a complete cycle. It is not zero for adiabatic, isobaric or isochoric changes. And Δ<i>U</i> equals Δ<i>Q</i> only when the process is isochoric.",
            "<b>Thinking an expanding gas must always do work.</b> In a <b>free expansion</b> into vacuum there is nothing to push against, so <i>P</i><sub>ext</sub> = 0 and Δ<i>W</i> = 0 even though the volume grows. With the container also insulated, Δ<i>Q</i> = 0 too, so Δ<i>U</i> = 0 and an ideal gas comes out at exactly the same temperature it went in at."
          ]
        },
        {
          "t": "protip",
          "html": "for any two-path problem, do not grind through both routes. compute ΔU once from the fully specified path, then reuse it. for cyclic problems jump straight to net heat equals net work and read the net work off as the enclosed loop area. and always run the physical check at the end: compress a gas and ΔU rises, let it expand adiabatically and it cools. if a sign disagrees with your intuition, you have an arithmetic error, not a discovery."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "ΔQ = ΔU + ΔW",
              "note": "heat in positive, work by the gas positive, everything in joules"
            },
            {
              "f": "U is a state function, Q and W are path functions",
              "note": "∮dU = 0, so ΔU is fixed by the endpoints alone"
            },
            {
              "f": "ΔW = ∫P dV = area under the P-V curve",
              "note": "quasi-static only: a violent expansion has no single pressure"
            },
            {
              "f": "ΔU = nC<sub>V</sub>ΔT for every process of an ideal gas",
              "note": "not just constant volume, because U depends on T alone"
            },
            {
              "f": "V fixed kills W · T fixed kills ΔU · Q = 0 is adiabatic",
              "note": "each of the four standard processes is the master equation with one term gone"
            },
            {
              "f": "over a cycle: ΔU = 0, so Q<sub>net</sub> = W<sub>net</sub>",
              "note": "the identity every heat-engine question in Topic 05 stands on"
            }
          ],
          "aids": [
            "\"income equals savings plus spending\"",
            "\"U is a place you are at; Q and W are roads you took\"",
            "\"signs before sums\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Four Processes and the Area Under the Curve",
      "chip": "03 PROCESSES",
      "kalam": "work is the area, and the adiabat is the steep one",
      "blocks": [
        {
          "t": "p",
          "html": "The first law is a universal accountant, but an accountant needs the rules of the particular transaction before the numbers can be filled in. A <b>thermodynamic process</b> is exactly that: a stated rule for how a system moves from one state to another. Pin down the rule and the first law instantly tells you how heat, work and internal energy divide up between them."
        },
        {
          "t": "p",
          "html": "Return to the gas in a cylinder. There are four ways to handle it, each holding one thing fixed. <b>Volume fixed, isochoric</b>: bolt the piston so it cannot move, heat the gas, and its pressure climbs while it does exactly zero work. Every joule goes into internal energy. <b>Pressure fixed, isobaric</b>: let the piston slide freely against the steady push of the atmosphere, so the gas expands as it warms, doing work against that unchanging pressure. <b>Temperature fixed, isothermal</b>: keep the cylinder in a huge water bath that never changes temperature and move the piston slowly, so the gas always sits at the bath's temperature. Every joule spent as work is replenished by heat sneaking in, and the internal energy never changes. <b>No heat exchanged, adiabatic</b>: wrap the cylinder in a perfect insulator, or move the piston so fast that heat has no time to flow. Now the gas must pay for any expansion entirely out of its own internal energy, so an adiabatic expansion <b>cools</b> the gas. That is why the gas rushing out of a spray can feels cold."
        },
        {
          "t": "think",
          "html": "isothermal and adiabatic are two opposite extremes of speed. do it infinitely slowly with the bath connected and heat flows freely to keep the temperature pinned, which is isothermal. do it so fast, or so well insulated, that no heat can cross at all, which is adiabatic. real processes live somewhere between, but exams idealise to the two clean limits, and a process can never be both unless nothing actually happens."
        },
        {
          "t": "p",
          "html": "Now the deepest single fact in this topic, and the one worth more marks than anything else in the chapter: <b>the work done by a gas is the area under its P-V curve</b>. Two processes connecting the same two states enclose different areas, so they do different work, which is a direct picture of why <i>W</i> is a path function. And if a process traces a closed loop, a <b>cycle</b>, the work done per cycle is the area trapped inside the loop, positive if the loop runs clockwise and negative if it runs anticlockwise. On a P-V diagram both the isotherm and the adiabat look like falling curves, but the <b>adiabat always falls more steeply</b>, because the adiabatic gas loses temperature as it expands and so loses pressure faster than the isothermal gas, whose temperature is propped up by incoming heat."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.5 · FOUR PROCESSES THROUGH ONE POINT",
          "chips": [
            "isochoric",
            "isobaric",
            "isothermal",
            "adiabatic"
          ],
          "captions": [
            "Volume held fixed. A vertical line: the pressure climbs but the volume never moves, so the area under the curve, and therefore the work, is exactly zero.",
            "Pressure held fixed. A horizontal line: the gas expands against an unchanging pressure, so the work is simply P times the change in volume, a plain rectangle of area.",
            "Temperature held fixed. PV = nRT with T constant makes PV = constant, a gentle hyperbola. The bath keeps feeding in exactly the heat the gas spends as work.",
            "No heat crosses the wall. The adiabat obeys PV raised to the power gamma = constant, and since gamma is greater than 1 it is gamma times steeper than the isotherm at every common point. Compare it with the ghosted isotherm through the same start: at every volume beyond the start the adiabat has already dropped further, because the gas has been cooling as it expands."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3,
                      9.3
                    ]
                  ]
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "start",
                  "at": "sw"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      9.3,
                      6
                    ]
                  ]
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "start",
                  "at": "sw"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.14
                    ],
                    [
                      4,
                      4.5
                    ],
                    [
                      5,
                      3.6
                    ],
                    [
                      6,
                      3
                    ],
                    [
                      7,
                      2.57
                    ],
                    [
                      8,
                      2.25
                    ],
                    [
                      9.3,
                      1.94
                    ]
                  ]
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "start",
                  "at": "sw"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      4.64
                    ],
                    [
                      4,
                      3.71
                    ],
                    [
                      5,
                      2.55
                    ],
                    [
                      6,
                      1.89
                    ],
                    [
                      7,
                      1.49
                    ],
                    [
                      8,
                      1.22
                    ],
                    [
                      9.3,
                      0.91
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.14
                    ],
                    [
                      4,
                      4.5
                    ],
                    [
                      5,
                      3.6
                    ],
                    [
                      6,
                      3
                    ],
                    [
                      7,
                      2.57
                    ],
                    [
                      8,
                      2.25
                    ],
                    [
                      9.3,
                      1.94
                    ]
                  ],
                  "soft": true,
                  "dash": true
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "start",
                  "at": "sw"
                }
              ],
              "labels": [
                {
                  "x": 8.2,
                  "y": 2.9,
                  "text": "isotherm"
                },
                {
                  "x": 8.2,
                  "y": 0.4,
                  "text": "adiabat"
                }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four processes, at a glance",
          "rows": [
            {
              "k": "Isochoric, <i>V</i> constant",
              "v": "<i>W</i> = 0 · Δ<i>Q</i> = Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> · a vertical line on the P-V diagram"
            },
            {
              "k": "Isobaric, <i>P</i> constant",
              "v": "<i>W</i> = <i>P</i>Δ<i>V</i> = <i>nR</i>Δ<i>T</i> · Δ<i>Q</i> = <i>nC<sub>P</sub></i>Δ<i>T</i> · a horizontal line"
            },
            {
              "k": "Isothermal, <i>T</i> constant",
              "v": "Δ<i>U</i> = 0 · Δ<i>Q</i> = <i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) · a gentle hyperbola"
            },
            {
              "k": "Adiabatic, Δ<i>Q</i> = 0",
              "v": "Δ<i>U</i> = −<i>W</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> · <i>W</i> = <i>nR</i>(<i>T<sub>i</sub></i> − <i>T<sub>f</sub></i>)/(γ − 1) · a steep curve"
            },
            {
              "k": "Expansion work, ordered",
              "v": "isobaric beats isothermal beats adiabatic, between the same two volumes, because the pressure stays highest in that order"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ISOTHERMAL WORK",
          "tag": "CBSE derivation favourite",
          "main": "<i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) = <i>nRT</i> ln(<i>P<sub>i</sub></i>/<i>P<sub>f</sub></i>)",
          "legend": [
            "<i>n</i> = moles, <i>R</i> = 8.314 J/mol K, <i>T</i> = the fixed absolute temperature in K, so <i>W</i> comes out in joules",
            "<i>V<sub>i</sub></i>, <i>V<sub>f</sub></i> are initial and final volumes in m<sup>3</sup>; <i>P<sub>i</sub></i>, <i>P<sub>f</sub></i> are the matching pressures in Pa",
            "the logarithm takes a ratio, so its argument is dimensionless, and <i>nRT</i> alone carries the energy dimension [M L<sup>2</sup> T<sup>−2</sup>]",
            "since Δ<i>U</i> = 0 here, the first law forces Δ<i>Q</i> = <i>W</i>: every joule the gas spends is supplied as heat by the reservoir"
          ],
          "note": "Expansion gives V<sub>f</sub> greater than V<sub>i</sub>, so the logarithm is positive and the work is positive. Compression flips both."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ADIABATIC RELATIONS AND ADIABATIC WORK",
          "tag": "gamma, never gamma minus one, on the pressure form",
          "main": "<i>PV</i><sup>γ</sup> = constant<br><i>TV</i><sup>γ−1</sup> = constant<br><i>W</i> = (<i>P<sub>i</sub>V<sub>i</sub></i> − <i>P<sub>f</sub>V<sub>f</sub></i>)/(γ − 1) = <i>nR</i>(<i>T<sub>i</sub></i> − <i>T<sub>f</sub></i>)/(γ − 1)",
          "legend": [
            "γ = <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i> is the ratio of the two molar heat capacities, dimensionless, and always between 1 and 5/3",
            "5/3 for a monatomic gas, 7/5 = 1.4 for a diatomic gas, 4/3 for a nonlinear polyatomic gas",
            "<i>T</i> in kelvin, <i>V</i> in m<sup>3</sup>, <i>P</i> in Pa, <i>W</i> in joules, and a third equivalent form is <i>P</i><sup>1−γ</sup><i>T</i><sup>γ</sup> = constant",
            "γ must be dimensionless or an exponent would be meaningless; the constant itself is not a physical quantity, which is why every adiabatic problem is solved with ratios rather than absolute values"
          ],
          "note": "The pressure relation uses gamma; the temperature relation uses gamma minus one. Writing TV raised to gamma is the classic slip, and it costs the whole question."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE POLYTROPIC MASTER PROCESS",
          "tag": "all four are special cases of one",
          "main": "<i>PV</i><sup>x</sup> = constant, with <i>W</i> = <i>nR</i>Δ<i>T</i>/(1 − <i>x</i>)<br><i>C</i> = <i>C<sub>V</sub></i> + <i>R</i>/(1 − <i>x</i>)<br>slope of the curve: <i>dP</i>/<i>dV</i> = −<i>xP</i>/<i>V</i>",
          "legend": [
            "<i>x</i> is the polytropic index, a pure number: <i>x</i> = 0 is isobaric, 1 is isothermal, γ is adiabatic, and <i>x</i> tending to infinity is isochoric",
            "<i>C</i> is the molar heat capacity of that particular process, in J/mol K, and <i>C<sub>V</sub></i> is its constant-volume value",
            "<i>R</i> = 8.314 J/mol K, <i>n</i> = moles, Δ<i>T</i> in kelvin, <i>W</i> in joules, <i>P</i> in Pa and <i>V</i> in m<sup>3</sup>",
            "the slope result gives the whole comparison in one line: isobaric slope 0, isothermal slope −<i>P</i>/<i>V</i>, adiabatic slope −γ<i>P</i>/<i>V</i>, so the adiabat is exactly γ times steeper"
          ],
          "note": "Check the four special cases against the master formula and you have checked your memory of all of them at once: x = 1 sends C to infinity, which is right, since an isothermal process takes in heat with no temperature change at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WORK IN AN ISOTHERMAL PROCESS, TAP A LINE",
          "steps": [
            {
              "eq": "<i>PV</i> = <i>nRT</i>, so <i>P</i> = <i>nRT</i>/<i>V</i>",
              "why": "The whole trick is to get the integrand in terms of the one variable you are integrating over. Temperature is held fixed here, so <i>nRT</i> is a constant and only <i>V</i> moves."
            },
            {
              "eq": "<i>W</i> = ∫ <i>P dV</i> = ∫ (<i>nRT</i>/<i>V</i>) <i>dV</i>, from <i>V<sub>i</sub></i> to <i>V<sub>f</sub></i>",
              "why": "This is the definition of work for a quasi-static process, with the pressure now written as a function of volume alone."
            },
            {
              "eq": "<i>W</i> = <i>nRT</i> [ln <i>V</i>], evaluated from <i>V<sub>i</sub></i> to <i>V<sub>f</sub></i>, giving <i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>)",
              "why": "Pull the constants <i>n</i>, <i>R</i> and <i>T</i> outside and the remaining integral of 1/<i>V</i> is a logarithm. The two limits subtract into the logarithm of a ratio."
            },
            {
              "eq": "since <i>T</i> is fixed, <i>P<sub>i</sub>V<sub>i</sub></i> = <i>P<sub>f</sub>V<sub>f</sub></i>, so <i>V<sub>f</sub></i>/<i>V<sub>i</sub></i> = <i>P<sub>i</sub></i>/<i>P<sub>f</sub></i> and <i>W</i> = <i>nRT</i> ln(<i>P<sub>i</sub></i>/<i>P<sub>f</sub></i>)",
              "why": "The same work, expressed in whichever pair the question actually hands you. And with Δ<i>U</i> = 0, the first law immediately gives Δ<i>Q</i> = <i>W</i>."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY PV RAISED TO GAMMA IS CONSTANT, TAP A LINE",
          "steps": [
            {
              "eq": "first law on an infinitesimal adiabatic step: 0 = <i>nC<sub>V</sub> dT</i> + <i>P dV</i>",
              "why": "Adiabatic means <i>dQ</i> = 0, and the first law <i>dQ</i> = <i>dU</i> + <i>dW</i> then sets the internal-energy change and the work exactly opposite. Here <i>dU</i> = <i>nC<sub>V</sub> dT</i> and <i>dW</i> = <i>P dV</i>."
            },
            {
              "eq": "differentiate <i>PV</i> = <i>nRT</i>: <i>P dV</i> + <i>V dP</i> = <i>nR dT</i>, so <i>dT</i> = (<i>P dV</i> + <i>V dP</i>)/(<i>nR</i>)",
              "why": "The gas law is the only extra fact available, and it is what lets the unwanted <i>dT</i> be eliminated in favour of <i>dP</i> and <i>dV</i>."
            },
            {
              "eq": "substitute and multiply through by <i>nR</i>: <i>C<sub>V</sub></i>(<i>P dV</i> + <i>V dP</i>) + <i>RP dV</i> = 0, so <i>C<sub>V</sub>V dP</i> + (<i>C<sub>V</sub></i> + <i>R</i>)<i>P dV</i> = 0",
              "why": "Pure algebra, collecting the <i>dP</i> and <i>dV</i> terms. Mayer's relation is about to turn that bracket into a single symbol."
            },
            {
              "eq": "use <i>C<sub>P</sub></i> = <i>C<sub>V</sub></i> + <i>R</i>, divide by <i>C<sub>V</sub>PV</i>, and write γ = <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i>: <i>dP</i>/<i>P</i> + γ <i>dV</i>/<i>V</i> = 0",
              "why": "This is where gamma enters the chapter, and it enters as a pure ratio of two heat capacities. Every adiabatic result downstream inherits it from this one line."
            },
            {
              "eq": "integrate: ln <i>P</i> + γ ln <i>V</i> = constant, that is <i>PV</i><sup>γ</sup> = constant",
              "why": "Substituting <i>P</i> = <i>nRT</i>/<i>V</i> turns it into <i>TV</i><sup>γ−1</sup> = constant, and eliminating <i>V</i> instead gives <i>P</i><sup>1−γ</sup><i>T</i><sup>γ</sup> = constant. Three faces of one relation."
            },
            {
              "eq": "work: with <i>P</i> = <i>K</i>/<i>V</i><sup>γ</sup>, integrating gives <i>W</i> = (<i>P<sub>i</sub>V<sub>i</sub></i> − <i>P<sub>f</sub>V<sub>f</sub></i>)/(γ − 1) = <i>nR</i>(<i>T<sub>i</sub></i> − <i>T<sub>f</sub></i>)/(γ − 1)",
              "why": "Read the physics off the sign: in an adiabatic expansion the gas does positive work, so Δ<i>U</i> = −<i>W</i> is negative and the gas cools. That is the spray-can effect, and it is forced by the first law with one term deleted."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.6 · THE AREA IS THE WORK",
          "chips": [
            "isothermal expansion",
            "adiabatic expansion"
          ],
          "captions": [
            "The same start, the same finish volume, with the whole area under the curve shaded. That shaded area IS the work done by the gas, which is what W = the integral of P dV means geometrically.",
            "The adiabat from the same start to the same finish volume. Its pressure falls faster, because the gas is cooling as it expands, so it sits lower everywhere and the shaded area is visibly smaller. Same two volumes, less work: this is the picture behind isobaric being greater than isothermal being greater than adiabatic."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.14
                    ],
                    [
                      4,
                      4.5
                    ],
                    [
                      5,
                      3.6
                    ],
                    [
                      6,
                      3
                    ],
                    [
                      7,
                      2.57
                    ],
                    [
                      8,
                      2.25
                    ]
                  ]
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      0
                    ],
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.14
                    ],
                    [
                      4,
                      4.5
                    ],
                    [
                      5,
                      3.6
                    ],
                    [
                      6,
                      3
                    ],
                    [
                      7,
                      2.57
                    ],
                    [
                      8,
                      2.25
                    ],
                    [
                      8,
                      0
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "amber"
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "i",
                  "at": "nw"
                },
                {
                  "x": 8,
                  "y": 2.25,
                  "label": "f",
                  "at": "ne"
                }
              ],
              "labels": [
                {
                  "x": 5.6,
                  "y": 1.2,
                  "text": "W = area under"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      4.64
                    ],
                    [
                      4,
                      3.71
                    ],
                    [
                      5,
                      2.55
                    ],
                    [
                      6,
                      1.89
                    ],
                    [
                      7,
                      1.49
                    ],
                    [
                      8,
                      1.22
                    ]
                  ]
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      0
                    ],
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      4.64
                    ],
                    [
                      4,
                      3.71
                    ],
                    [
                      5,
                      2.55
                    ],
                    [
                      6,
                      1.89
                    ],
                    [
                      7,
                      1.49
                    ],
                    [
                      8,
                      1.22
                    ],
                    [
                      8,
                      0
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "amber"
                }
              ],
              "points": [
                {
                  "x": 3,
                  "y": 6,
                  "label": "i",
                  "at": "nw"
                },
                {
                  "x": 8,
                  "y": 1.22,
                  "label": "f",
                  "at": "ne"
                }
              ],
              "labels": [
                {
                  "x": 5.6,
                  "y": 0.7,
                  "text": "smaller area"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Naming the process, then picking the right formula",
          "steps": [
            "<b>Read the P-V graph first if there is one.</b> A vertical line is isochoric, a horizontal line is isobaric, and of the two falling curves the steeper one is always the adiabat.",
            "<b>Read the words if there is no graph.</b> Rigid or sealed container means isochoric. Free piston or open to the atmosphere means isobaric. In a large bath, or done slowly at constant temperature, means isothermal. Insulated, or done suddenly, means adiabatic.",
            "<b>Never use a process formula outside its process.</b> <i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) is isothermal only; <i>W</i> = <i>P</i>Δ<i>V</i> is isobaric only.",
            "<b>For an adiabatic numerical, work in ratios.</b> <i>T<sub>f</sub></i>/<i>T<sub>i</sub></i> = (<i>V<sub>i</sub></i>/<i>V<sub>f</sub></i>)<sup>γ−1</sup> and <i>P<sub>f</sub></i>/<i>P<sub>i</sub></i> = (<i>V<sub>i</sub></i>/<i>V<sub>f</sub></i>)<sup>γ</sup> collapse most problems to one power of a clean number.",
            "<b>If the process is none of the four, find the polytropic index <i>x</i>.</b> If <i>P</i> varies as <i>V</i> to the power −<i>n</i> then <i>x</i> = <i>n</i>; if the molar heat capacity <i>C</i> is given instead, solve <i>C</i> = <i>C<sub>V</sub></i> + <i>R</i>/(1 − <i>x</i>) for <i>x</i>. Everything else follows.",
            "<b>Finish with the physical check.</b> Compression must raise the temperature of an insulated gas, and adiabatic expansion must lower it. A ratio less than 1 where you expected more than 1 is an inverted fraction, every time."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "2.0 mol of an ideal gas at 300 K expands isothermally and quasi-statically until its volume triples. Find the work done and the heat absorbed. Take R = 8.314 J/mol K and ln 3 = 1.0986.",
          "steps": [
            "Isothermal work: <i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) = (2.0)(8.314)(300)(1.0986).",
            "(2.0)(8.314) = 16.628, times 300 gives 4988, times 1.0986 gives 5.48 × 10<sup>3</sup> J.",
            "Isothermal means Δ<i>U</i> = 0, so the first law gives Δ<i>Q</i> = <i>W</i> directly.",
            "All the absorbed heat leaves again as work; the temperature and the internal energy are unchanged from start to finish."
          ],
          "ans": "W ≈ 5.48 kJ · ΔQ ≈ 5.48 kJ"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A monatomic ideal gas with γ = 5/3 is compressed adiabatically until its volume becomes one-eighth of its initial value. By what factor does its absolute temperature change?",
          "steps": [
            "Use the temperature form, not the pressure form: <i>TV</i><sup>γ−1</sup> = constant, so <i>T<sub>f</sub></i>/<i>T<sub>i</sub></i> = (<i>V<sub>i</sub></i>/<i>V<sub>f</sub></i>)<sup>γ−1</sup> = 8<sup>5/3 − 1</sup> = 8<sup>2/3</sup>.",
            "Do it mentally: 8 = 2<sup>3</sup>, so 8<sup>2/3</sup> = 2<sup>2</sup> = 4.",
            "Two classic wrecks are waiting. Using the exponent γ instead of γ − 1 gives 8<sup>5/3</sup> = 32. Inverting the volume ratio gives 8<sup>−2/3</sup> = 1/4.",
            "The physical check kills the second one instantly: a compression must raise the temperature, so the factor has to exceed 1."
          ],
          "ans": "T<sub>f</sub> = 4T<sub>i</sub>, the absolute temperature quadruples"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "3.0 mol of a diatomic ideal gas, with γ = 7/5 so that <i>C<sub>V</sub></i> = (5/2)<i>R</i> and <i>C<sub>P</sub></i> = (7/2)<i>R</i>, is heated at constant pressure so its temperature rises by 100 K. Find the work done, the change in internal energy and the heat supplied, then verify the first law.",
          "steps": [
            "Isobaric work: <i>W</i> = <i>nR</i>Δ<i>T</i> = (3.0)(8.314)(100) = 2494 J, about 2.49 kJ.",
            "Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> = (3.0)(2.5 × 8.314)(100) = (3.0)(20.785)(100) = 6236 J, about 6.24 kJ.",
            "Δ<i>Q</i> = <i>nC<sub>P</sub></i>Δ<i>T</i> = (3.0)(3.5 × 8.314)(100) = (3.0)(29.099)(100) = 8730 J, about 8.73 kJ.",
            "Verification: Δ<i>U</i> + <i>W</i> = 6.24 + 2.49 = 8.73 kJ = Δ<i>Q</i>. The first law holds to the rounding.",
            "A structural check worth memorising: at constant pressure the heat splits between internal energy and work in the ratio <i>C<sub>V</sub></i> to <i>R</i>, which for a diatomic gas is 5 to 2, and Δ<i>Q</i> to Δ<i>U</i> is γ to 1, that is 7 to 5."
          ],
          "ans": "W ≈ 2.49 kJ · ΔU ≈ 6.24 kJ · ΔQ ≈ 8.73 kJ"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A monatomic ideal gas with γ = 5/3 starts at (<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) and expands to 2<i>V</i><sub>0</sub> by two routes: isothermally, and adiabatically. Find the ratio of the work done in the isothermal expansion to that in the adiabatic one, and explain which is larger and why. Take ln 2 = 0.693 and 2<sup>−2/3</sup> = 0.630.",
          "steps": [
            "Isothermal, with <i>nRT</i> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>: <i>W</i><sub>iso</sub> = <i>nRT</i> ln 2 = 0.693 <i>P</i><sub>0</sub><i>V</i><sub>0</sub>.",
            "Adiabatic final pressure: <i>P</i><sub>0</sub><i>V</i><sub>0</sub><sup>γ</sup> = <i>P<sub>f</sub></i>(2<i>V</i><sub>0</sub>)<sup>γ</sup>, so <i>P<sub>f</sub></i> = <i>P</i><sub>0</sub>2<sup>−5/3</sup> and <i>P<sub>f</sub></i>(2<i>V</i><sub>0</sub>) = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>2<sup>−2/3</sup> = 0.630 <i>P</i><sub>0</sub><i>V</i><sub>0</sub>.",
            "Adiabatic work: <i>W</i><sub>adia</sub> = (<i>P</i><sub>0</sub><i>V</i><sub>0</sub> − <i>P<sub>f</sub>V<sub>f</sub></i>)/(γ − 1) = (1 − 0.630)<i>P</i><sub>0</sub><i>V</i><sub>0</sub>/(2/3) = 1.5 × 0.370 <i>P</i><sub>0</sub><i>V</i><sub>0</sub> = 0.555 <i>P</i><sub>0</sub><i>V</i><sub>0</sub>.",
            "Ratio: 0.693/0.555 ≈ 1.25, so the isothermal expansion does about 25% more work.",
            "Why: both start at the same point and end at the same volume, but the isothermal gas is continuously fed heat, keeping its temperature and therefore its pressure higher at every intermediate volume. The adiabatic gas, sealed off, spends its own internal energy and cools, so its pressure drops faster. Higher pressure throughout means a larger area under the curve. That is the geometric truth behind isobaric being greater than isothermal being greater than adiabatic."
          ],
          "ans": "W<sub>iso</sub>/W<sub>adia</sub> ≈ 1.25, the isothermal expansion doing about 25% more work"
        },
        {
          "t": "mcq",
          "q": "An ideal gas expands from the same initial state to the same final volume by an isobaric, an isothermal and an adiabatic process. The work done is greatest in the:",
          "opts": [
            {
              "label": "adiabatic process",
              "nudge": "The adiabat does the least work of the three: its pressure falls fastest, so it encloses the smallest area."
            },
            {
              "label": "isothermal process",
              "nudge": "The isotherm sits in the middle, above the adiabat and below the flat isobar."
            },
            {
              "label": "isobaric process",
              "nudge": null
            },
            {
              "label": "all three are equal",
              "nudge": "This ignores the whole point that work is a path function: different curves between the same volumes enclose different areas."
            }
          ],
          "correct": 2,
          "solution": "Work is the area under the P-V curve. The isobaric path holds the pressure highest, at a flat line, so it encloses the largest area. The order is isobaric, then isothermal, then adiabatic."
        },
        {
          "t": "mcq",
          "q": "At a given point on a P-V diagram, the magnitude of the slope of the adiabatic curve relates to that of the isothermal by a factor of:",
          "opts": [
            {
              "label": "γ",
              "nudge": null
            },
            {
              "label": "1/γ",
              "nudge": "This inverts the relationship and would make the adiabat the gentler curve, which contradicts the physics of a cooling gas."
            },
            {
              "label": "γ − 1",
              "nudge": "This confuses the slope ratio with the exponent in the temperature relation TV raised to gamma minus one."
            },
            {
              "label": "γ<sup>2</sup>",
              "nudge": "There is no basis for a square anywhere in the slope calculation."
            }
          ],
          "correct": 0,
          "solution": "The polytropic slope is −xP/V. The isotherm has x = 1 and slope −P/V; the adiabat has x = γ and slope −γP/V. The ratio of magnitudes is exactly γ, which exceeds 1, so the adiabat is steeper."
        },
        {
          "t": "mcq",
          "q": "For an adiabatic process of an ideal gas, which relation is correct?",
          "opts": [
            {
              "label": "ΔQ = W",
              "nudge": "That is the isothermal result, where ΔU vanishes instead of ΔQ."
            },
            {
              "label": "ΔU = 0",
              "nudge": "Also isothermal. An adiabatic gas changes temperature, so its internal energy certainly changes."
            },
            {
              "label": "ΔU = −W",
              "nudge": null
            },
            {
              "label": "W = 0",
              "nudge": "That is the isochoric case, where the piston cannot move at all."
            }
          ],
          "correct": 2,
          "solution": "Adiabatic means ΔQ = 0, so 0 = ΔU + W and the gas does work entirely at the expense of its own internal energy."
        },
        {
          "t": "mcq",
          "q": "A monatomic ideal gas with γ = 5/3 is compressed adiabatically to half its volume. Its absolute temperature changes by a factor of about:",
          "opts": [
            {
              "label": "2<sup>2/3</sup> ≈ 1.59",
              "nudge": null
            },
            {
              "label": "2<sup>5/3</sup> ≈ 3.17",
              "nudge": "This uses the exponent γ where γ − 1 belongs. The exponent gamma governs the pressure relation, not the temperature one."
            },
            {
              "label": "2",
              "nudge": "This ignores the exponent altogether and assumes the temperature simply tracks the volume ratio."
            },
            {
              "label": "2<sup>1/3</sup> ≈ 1.26",
              "nudge": "This miscomputes γ − 1 as 1/3 when for a monatomic gas it is 5/3 − 1 = 2/3."
            }
          ],
          "correct": 0,
          "solution": "T<sub>f</sub>/T<sub>i</sub> = (V<sub>i</sub>/V<sub>f</sub>) raised to γ − 1 = 2 raised to 2/3, about 1.59. It exceeds 1, as any compression must."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] 0.50 mol of an ideal gas is heated at constant pressure, raising its temperature from 300 K to 400 K. Find the work done by the gas.",
              "a": "<i>W</i> = <i>nR</i>Δ<i>T</i> = (0.50)(8.314)(100) ≈ 416 J."
            },
            {
              "q": "[NEET] On a P-V diagram an isothermal and an adiabatic curve pass through the same point for the same gas. State which is steeper, by what factor the slopes differ, and which process does less work when both expand to the same final volume.",
              "a": "The adiabatic is steeper, its slope being γ times the isothermal slope at that point. The adiabatic process does less work, since it encloses the smaller area under the curve."
            },
            {
              "q": "[JEE Main] A diatomic ideal gas with γ = 1.4 at 300 K is compressed adiabatically to one-fourth of its initial volume. Find the final temperature. Take 4<sup>0.4</sup> = 1.741.",
              "a": "<i>T<sub>f</sub></i> = <i>T<sub>i</sub></i>(<i>V<sub>i</sub></i>/<i>V<sub>f</sub></i>)<sup>γ−1</sup> = 300 × 4<sup>0.4</sup> = 300 × 1.741 ≈ 522 K."
            },
            {
              "q": "[JEE Main] 4.0 mol of a monatomic ideal gas, <i>C<sub>V</sub></i> = (3/2)<i>R</i>, is heated at constant volume so its temperature rises by 50 K. Find the work done by the gas and the heat supplied.",
              "a": "Isochoric, so <i>W</i> = 0 and Δ<i>Q</i> = Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> = (4.0)(1.5 × 8.314)(50) ≈ 2.49 kJ."
            },
            {
              "q": "[JEE Advanced] One mole of a monatomic gas, <i>C<sub>V</sub></i> = (3/2)<i>R</i>, expands from <i>V</i><sub>0</sub> to 2<i>V</i><sub>0</sub> along <i>PV</i><sup>3/2</sup> = constant. Find the molar heat capacity of the process, and say whether the gas warms or cools and whether it absorbs or releases heat.",
              "a": "<i>x</i> = 1.5, so <i>C</i> = <i>C<sub>V</sub></i> + <i>R</i>/(1 − <i>x</i>) = 1.5<i>R</i> − 2<i>R</i> = −0.5<i>R</i>. Since <i>x</i> − 1 = 0.5 is positive, <i>T<sub>f</sub></i>/<i>T<sub>i</sub></i> = (1/2)<sup>0.5</sup> ≈ 0.707, so the gas <b>cools</b>. But <i>Q</i> = <i>nC</i>Δ<i>T</i> is a negative capacity times a negative temperature change, so <i>Q</i> is <b>positive</b>: the gas absorbs heat while cooling. Its expansion work exceeds the drop in internal energy, and it draws in the shortfall as heat."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing the isotherm and the adiabat.</b> They look like twins. The adiabat is steeper, by exactly the factor γ; the adiabatic gas changes temperature while the isothermal one does not; and Δ<i>Q</i> = <i>W</i> is isothermal while Δ<i>U</i> = −<i>W</i> is adiabatic.",
            "<b>Using γ where γ − 1 belongs, and the reverse.</b> The pressure relation is <i>PV</i><sup>γ</sup>; the temperature relation is <i>TV</i><sup>γ−1</sup>. Writing <i>TV</i><sup>γ</sup> is the classic slip and it silently changes every number downstream.",
            "<b>Applying a process formula outside its process.</b> <i>W</i> = <i>nRT</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) is isothermal only, and <i>W</i> = <i>P</i>Δ<i>V</i> is isobaric only. Neither is a general result.",
            "<b>Getting the sign of the cycle area wrong.</b> Expansion gives positive work and compression negative. For a closed loop the net work is the enclosed area, positive when the loop runs clockwise on a P-V diagram, which is an engine, and negative when it runs anticlockwise, which is a refrigerator.",
            "<b>Assuming that cooling always means heat was released.</b> For a polytropic index strictly between 1 and γ the gas cools as it expands, exactly as an adiabat would, yet its molar heat capacity <i>C</i> is negative, so <i>Q</i> = <i>nC</i>Δ<i>T</i> comes out positive and the gas is absorbing heat the whole time. It simply does more expansion work than the fall in internal energy can pay for, and draws in the difference."
          ]
        },
        {
          "t": "protip",
          "html": "for adiabatic numericals work with ratios, never absolute pressures: T<sub>f</sub>/T<sub>i</sub> = (V<sub>i</sub>/V<sub>f</sub>)<sup>γ−1</sup> and P<sub>f</sub>/P<sub>i</sub> = (V<sub>i</sub>/V<sub>f</sub>)<sup>γ</sup> collapse most problems into a single power of a clean number. to identify a process from a graph in seconds: vertical is isochoric, horizontal is isobaric, and of the two curves the steeper is the adiabat. and if the process is none of the four, find x first, from P varying as V to a power or from the given molar heat capacity, then C = C<sub>V</sub> + R/(1 − x) hands you the heat in one step."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "isochoric: W = 0, ΔQ = ΔU = nC<sub>V</sub>ΔT",
              "note": "a vertical line, and the only process with no work at all"
            },
            {
              "f": "isobaric: W = PΔV = nRΔT, ΔQ = nC<sub>P</sub>ΔT",
              "note": "a horizontal line, and the largest work of the three expansions"
            },
            {
              "f": "isothermal: ΔU = 0, ΔQ = W = nRT ln(V<sub>f</sub>/V<sub>i</sub>)",
              "note": "a gentle hyperbola; every joule of heat leaves again as work"
            },
            {
              "f": "adiabatic: ΔQ = 0, ΔU = −W, PV<sup>γ</sup> = TV<sup>γ−1</sup> = constant",
              "note": "the steep curve; expansion cools the gas, compression heats it"
            },
            {
              "f": "polytropic PV<sup>x</sup> = constant, C = C<sub>V</sub> + R/(1 − x)",
              "note": "recovers all four at x = 0, 1, γ and infinity"
            },
            {
              "f": "work = area under the curve · cycle work = enclosed area",
              "note": "clockwise loop positive, anticlockwise negative"
            }
          ],
          "aids": [
            "\"V fixed kills work; T fixed kills ΔU; Q zero is adiabatic; P fixed needs C\"",
            "\"the adiabat is the athlete: steeper, and it cools down when it works\"",
            "\"pressure uses gamma, temperature uses gamma minus one\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Two Specific Heats and Mayer's Relation",
      "chip": "04 SPECIFIC HEATS",
      "kalam": "delta U always rides CV, whatever the process",
      "blocks": [
        {
          "t": "p",
          "html": "Pour the same amount of heat into a small steel spanner and into a bucket of water and the spanner's temperature shoots up while the water barely warms. <b>Heat capacity</b> measures exactly this reluctance: how much heat a body needs for a one-degree rise. Divide by mass and you get the <b>specific heat capacity</b> <i>s</i>, per kilogram; divide by moles and you get the <b>molar specific heat capacity</b> <i>C</i>, per mole. Water's famously large specific heat, about 4186 J/kg K, is why coastal cities have mild climates and why a hot-water bottle stays warm all night."
        },
        {
          "t": "p",
          "html": "For solids and liquids one number is enough, because they barely expand on heating and essentially all the heat becomes internal energy. <b>Gases are different, and that difference is the whole of this topic.</b> A gas expands dramatically on heating, so <i>how</i> you heat it matters. Heat it in a sealed rigid box, at constant volume, and it cannot expand: every joule goes into internal energy. Heat it under a free piston, at constant pressure, and it expands, spending part of the incoming heat pushing the piston back, so you must supply <b>extra</b> heat to get the same temperature rise. A gas therefore needs two molar specific heats, <i>C<sub>V</sub></i> at constant volume and <i>C<sub>P</sub></i> at constant pressure, and <i>C<sub>P</sub></i> is always the larger."
        },
        {
          "t": "think",
          "html": "imagine filling a bucket that has a small leak at the bottom. plug the leak, constant volume, and every mug you pour raises the level. leave the leak open, constant pressure, and some of every mug drains away, so you must pour more to reach the same level. the plugged bucket is C<sub>V</sub> and the leaky one is C<sub>P</sub>. the size of the leak is exactly the expansion work, and for one mole of ideal gas heated by one kelvin at constant pressure that leak is precisely R joules. that one sentence is mayer's relation."
        },
        {
          "t": "p",
          "html": "Why is <i>C<sub>V</sub></i> equal to (3/2)<i>R</i> for helium but (5/2)<i>R</i> for nitrogen? Because internal energy is stored in the <b>ways a molecule can move</b>. A point-like monatomic atom can only translate in three directions, so it has three <b>degrees of freedom</b>. A dumbbell-shaped diatomic molecule can also tumble about two axes, giving five. The <b>equipartition theorem</b> hands each active degree of freedom an average energy of (1/2)<i>k<sub>B</sub>T</i> per molecule, which is (1/2)<i>R</i> per mole per kelvin. A molecule with <i>f</i> active degrees of freedom therefore stores <i>U</i> = (<i>f</i>/2)<i>nRT</i>, giving <i>C<sub>V</sub></i> = (<i>f</i>/2)<i>R</i>. More ways to wiggle means more places to hide energy, which means a larger heat capacity and, as it turns out, a smaller γ."
        },
        {
          "t": "defgrid",
          "title": "Three capacities, three different denominators",
          "rows": [
            {
              "k": "Heat capacity of a body <i>S</i>",
              "v": "<i>S</i> = Δ<i>Q</i>/Δ<i>T</i>, in J/K. Refers to that one object, of whatever size"
            },
            {
              "k": "Specific heat capacity <i>s</i>",
              "v": "<i>s</i> = Δ<i>Q</i>/(<i>m</i>Δ<i>T</i>), in J/kg K, so Δ<i>Q</i> = <i>ms</i>Δ<i>T</i>. Per kilogram"
            },
            {
              "k": "Molar specific heat <i>C</i>",
              "v": "<i>C</i> = Δ<i>Q</i>/(<i>n</i>Δ<i>T</i>), in J/mol K, so Δ<i>Q</i> = <i>nC</i>Δ<i>T</i>. Per mole, and <i>C</i> = <i>Ms</i> with <i>M</i> the molar mass"
            },
            {
              "k": "<i>C<sub>V</sub></i>, at constant volume",
              "v": "no work is done, so all the heat becomes internal energy: <i>C<sub>V</sub></i> = (1/<i>n</i>)<i>dU</i>/<i>dT</i>"
            },
            {
              "k": "<i>C<sub>P</sub></i>, at constant pressure",
              "v": "the gas also expands, so the same temperature rise costs more heat: <i>C<sub>P</sub></i> is greater than <i>C<sub>V</sub></i>, always"
            },
            {
              "k": "Two useful benchmarks",
              "v": "water <i>s</i> = 4186 J/kg K, and the Dulong-Petit result that many solids have a molar heat capacity near 3<i>R</i>, about 25 J/mol K"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MAYER'S RELATION AND EQUIPARTITION",
          "tag": "ideal gas, per mole",
          "main": "<i>C<sub>P</sub></i> − <i>C<sub>V</sub></i> = <i>R</i><br><i>C<sub>V</sub></i> = (<i>f</i>/2)<i>R</i>, <i>C<sub>P</sub></i> = (<i>f</i>/2 + 1)<i>R</i>, γ = 1 + 2/<i>f</i>",
          "legend": [
            "<i>R</i> = 8.314 J/mol K, and both capacities carry the same unit, J/mol K, so their difference does too",
            "<i>f</i> is the number of active degrees of freedom, a pure count with no dimensions, so γ is dimensionless",
            "the extra <i>R</i> in <i>C<sub>P</sub></i> is precisely the work <i>P dV</i> = <i>R dT</i> done pushing back the surroundings, per mole per kelvin",
            "γ therefore lies strictly between 1 and 5/3: <i>f</i> can never be smaller than 3, and increasing <i>f</i> only pushes γ down towards 1"
          ],
          "note": "Mayer's relation is per mole and for an ideal gas. It is not the relation for solids, liquids or real gases except as an approximation."
        },
        {
          "t": "defgrid",
          "title": "Standard values, worth knowing cold",
          "rows": [
            {
              "k": "Monatomic, He and Ar",
              "v": "<i>f</i> = 3 (three translations) · <i>C<sub>V</sub></i> = 1.5<i>R</i> ≈ 12.5 · <i>C<sub>P</sub></i> = 2.5<i>R</i> ≈ 20.8 · γ = 5/3 ≈ 1.67"
            },
            {
              "k": "Diatomic, N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>",
              "v": "<i>f</i> = 5 (three translations, two rotations) · <i>C<sub>V</sub></i> = 2.5<i>R</i> ≈ 20.8 · <i>C<sub>P</sub></i> = 3.5<i>R</i> ≈ 29.1 · γ = 7/5 = 1.40"
            },
            {
              "k": "Nonlinear polyatomic, H<sub>2</sub>O, SO<sub>2</sub>, NH<sub>3</sub>",
              "v": "<i>f</i> = 6 (three translations, three rotations) · <i>C<sub>V</sub></i> = 3<i>R</i> ≈ 24.9 · <i>C<sub>P</sub></i> = 4<i>R</i> ≈ 33.3 · γ = 4/3 ≈ 1.33"
            },
            {
              "k": "A warning about CO<sub>2</sub>",
              "v": "carbon dioxide is a <b>linear</b> triatomic, O=C=O, so it rotates about only two axes and has <i>f</i> = 5, not 6. It belongs with the diatomic row, not the nonlinear polyatomic one"
            },
            {
              "k": "Why diatomic <i>f</i> is 5 and not 7",
              "v": "vibration would add two more, but at ordinary temperatures the vibrational modes are frozen out. Use 7 only when a problem explicitly invokes high-temperature vibration"
            },
            {
              "k": "Capacities in J/mol K",
              "v": "every number above uses <i>R</i> = 8.314 J/mol K, and all of them scale with <i>R</i>, so remembering the fractions is enough"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.7 · THE SAME TEMPERATURE RISE, TWO DIFFERENT BILLS",
          "chips": [
            "volume fixed",
            "pressure fixed"
          ],
          "captions": [
            "The piston is bolted, so the gas cannot move it and does no work at all. Every joule of the heat supplied lands in the internal energy, which is why the bill for a given temperature rise is nCV times that rise.",
            "The piston is free under a constant load, so the gas expands by an amount marked here against the dashed original level. Part of the heat now leaves again as the work P times that change in volume, so the same temperature rise costs nR times the rise in extra heat. That extra is exactly the R in Mayer's relation."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axes": "none",
              "aspect": 1,
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      7.5
                    ],
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      7.5
                    ]
                  ],
                  "fill": "none",
                  "tone": "ink"
                },
                {
                  "pts": [
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      4.2
                    ],
                    [
                      3,
                      4.2
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "soft",
                  "label": "gas"
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    5,
                    4.5
                  ],
                  "w": 4,
                  "h": 0.5
                }
              ],
              "arrows": [
                {
                  "from": [
                    5,
                    0.3
                  ],
                  "to": [
                    5,
                    1.05
                  ],
                  "tone": "green",
                  "label": "Q in",
                  "at": "start"
                }
              ],
              "labels": [
                {
                  "x": 5,
                  "y": 6.4,
                  "text": "piston bolted"
                },
                {
                  "x": 5,
                  "y": 8.5,
                  "text": "all of Q goes into U"
                },
                {
                  "x": 5,
                  "y": 9.4,
                  "text": "Q = n CV ΔT"
                }
              ]
            },
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                10
              ],
              "axes": "none",
              "aspect": 1,
              "polys": [
                {
                  "pts": [
                    [
                      3,
                      7.5
                    ],
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      7.5
                    ]
                  ],
                  "fill": "none",
                  "tone": "ink"
                },
                {
                  "pts": [
                    [
                      3,
                      1.2
                    ],
                    [
                      7,
                      1.2
                    ],
                    [
                      7,
                      5.4
                    ],
                    [
                      3,
                      5.4
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "soft",
                  "label": "gas"
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    5,
                    5.7
                  ],
                  "w": 4,
                  "h": 0.5
                }
              ],
              "segments": [
                {
                  "from": [
                    3,
                    4.2
                  ],
                  "to": [
                    7,
                    4.2
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "arrows": [
                {
                  "from": [
                    5,
                    0.3
                  ],
                  "to": [
                    5,
                    1.05
                  ],
                  "tone": "green",
                  "label": "Q in",
                  "at": "start"
                },
                {
                  "from": [
                    7.6,
                    4.2
                  ],
                  "to": [
                    7.6,
                    5.4
                  ],
                  "head": "both",
                  "tone": "red",
                  "label": "ΔV",
                  "at": "end"
                }
              ],
              "labels": [
                {
                  "x": 5,
                  "y": 6.9,
                  "text": "piston free"
                },
                {
                  "x": 5,
                  "y": 8.5,
                  "text": "part of Q does P ΔV"
                },
                {
                  "x": 5,
                  "y": 9.4,
                  "text": "Q = n CP ΔT"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MAYER'S RELATION, TAP A LINE",
          "steps": [
            {
              "eq": "take one mole. At constant volume <i>dV</i> = 0, so <i>dQ</i> = <i>dU</i>, and by definition <i>C<sub>V</sub></i> = <i>dU</i>/<i>dT</i>, giving <i>dU</i> = <i>C<sub>V</sub> dT</i>",
              "why": "With the piston bolted the gas does no work, so the first law hands the entire heat input to the internal energy. And crucially, for an ideal gas <i>U</i> depends only on <i>T</i>, so this <i>dU</i> = <i>C<sub>V</sub> dT</i> is true for <b>every</b> process, not just this one."
            },
            {
              "eq": "at constant pressure, <i>dQ<sub>P</sub></i> = <i>dU</i> + <i>P dV</i> = <i>C<sub>V</sub> dT</i> + <i>P dV</i>, and by definition <i>dQ<sub>P</sub></i> = <i>C<sub>P</sub> dT</i>",
              "why": "The same internal-energy term appears, carried over from the previous line, plus the work the gas now does against the constant external pressure. Setting the two expressions for the same heat equal is the whole derivation."
            },
            {
              "eq": "for one mole, <i>PV</i> = <i>RT</i>; at constant pressure, differentiating gives <i>P dV</i> = <i>R dT</i>",
              "why": "This is the only extra fact needed, and it is where the letter <i>R</i> enters. It says the expansion work per mole per kelvin at constant pressure is exactly <i>R</i>, no more and no less."
            },
            {
              "eq": "<i>C<sub>P</sub> dT</i> = <i>C<sub>V</sub> dT</i> + <i>R dT</i>, so <i>C<sub>P</sub></i> = <i>C<sub>V</sub></i> + <i>R</i>, that is <i>C<sub>P</sub></i> − <i>C<sub>V</sub></i> = <i>R</i>",
              "why": "Cancel <i>dT</i> and the relation stands. The physical reading is worth more than the algebra: the extra <i>R</i> is precisely the leak, the work spent pushing back the surroundings, which is why <i>C<sub>P</sub></i> exceeds <i>C<sub>V</sub></i> by exactly <i>R</i> and never by anything else."
            }
          ]
        },
        {
          "t": "def",
          "term": "The molar heat capacity of any process at all",
          "html": "<i>C<sub>V</sub></i> and <i>C<sub>P</sub></i> are just two entries in a family. A general polytropic process <i>PV</i><sup>x</sup> = constant has molar heat capacity <b><i>C</i> = <i>C<sub>V</sub></i> + <i>R</i>/(1 − <i>x</i>)</b>, and the four familiar cases fall straight out of it. Isobaric, <i>x</i> = 0, gives <i>C</i> = <i>C<sub>V</sub></i> + <i>R</i> = <i>C<sub>P</sub></i>. Isothermal, <i>x</i> = 1, sends <i>C</i> to infinity, which is exactly right, since heat pours in with no temperature change to show for it. Adiabatic, <i>x</i> = γ, gives <i>C</i> = 0, since heat is exchanged with nothing while the temperature does change. Isochoric, <i>x</i> tending to infinity, gives back <i>C<sub>V</sub></i>. And a warning that JEE Advanced likes: for <i>x</i> strictly between 1 and γ this capacity is <b>negative</b>, so the gas can absorb heat while its temperature falls."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TWO REFLEX IDENTITIES AND THE MIXTURE RULE",
          "main": "<i>C<sub>V</sub></i> = <i>R</i>/(γ − 1)<br><i>C<sub>P</sub></i> = γ<i>R</i>/(γ − 1)<br><i>C</i><sub>V,mix</sub> = (<i>n</i><sub>1</sub><i>C</i><sub>V1</sub> + <i>n</i><sub>2</sub><i>C</i><sub>V2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)",
          "legend": [
            "<i>R</i> = 8.314 J/mol K, and γ is the dimensionless ratio <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i>, so both capacities come out in J/mol K",
            "<i>n</i><sub>1</sub> and <i>n</i><sub>2</sub> are the numbers of moles of the two components, in mol, and <i>C</i><sub>V1</sub>, <i>C</i><sub>V2</sub> their individual constant-volume capacities",
            "the first two identities convert any γ straight into capacities with no degree-of-freedom counting at all",
            "for a mixture, take the mole-weighted <i>C<sub>V</sub></i> first, then get <i>C<sub>P</sub></i> from Mayer and γ as their ratio: never average the two gammas directly"
          ],
          "note": "The mixture gamma always lies between the two component gammas, pulled towards whichever component supplies more moles. That is a free sanity check on every mixture answer."
        },
        {
          "t": "proc",
          "title": "Choosing between C sub V and C sub P in a numerical",
          "steps": [
            "<b>For Δ<i>U</i>, always use Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i>.</b> It is process-independent for an ideal gas, so it is correct at constant pressure, along an adiabat, along a polytrope, everywhere.",
            "<b>For the heat, look at the process.</b> Constant volume takes <i>nC<sub>V</sub></i>Δ<i>T</i>; constant pressure takes <i>nC<sub>P</sub></i>Δ<i>T</i>; a general polytrope takes <i>nC</i>Δ<i>T</i> with <i>C</i> = <i>C<sub>V</sub></i> + <i>R</i>/(1 − <i>x</i>).",
            "<b>Fix <i>f</i> from the gas type before plugging in any numbers</b>, and read <i>C<sub>V</sub></i>, <i>C<sub>P</sub></i> and γ straight off it. Monatomic 3, diatomic 5, nonlinear polyatomic 6.",
            "<b>If the problem gives γ instead of the gas type</b>, go through <i>C<sub>V</sub></i> = <i>R</i>/(γ − 1) and skip the counting entirely.",
            "<b>Check that your units match your capacity.</b> A specific heat in J/kg K needs a mass in kg; a molar capacity in J/mol K needs moles. The two differ by the molar mass and mixing them is a silent factor-of-ten error."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The molar specific heat at constant volume of a gas is <i>C<sub>V</sub></i> = 20.8 J/mol K. Identify the gas type and find <i>C<sub>P</sub></i> and γ. Take R = 8.314 J/mol K.",
          "steps": [
            "Compare with (<i>f</i>/2)<i>R</i>: 20.8/8.314 = 2.5, so <i>f</i>/2 = 2.5 and <i>f</i> = 5. That is a <b>diatomic</b> gas at ordinary temperature.",
            "By Mayer, <i>C<sub>P</sub></i> = <i>C<sub>V</sub></i> + <i>R</i> = 20.8 + 8.3 = 29.1 J/mol K.",
            "γ = <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i> = 29.1/20.8 = 7/5 = 1.40.",
            "Plausibility check: γ must lie between 1 and 5/3, and 1.40 does."
          ],
          "ans": "diatomic · C<sub>P</sub> ≈ 29.1 J/mol K · γ = 1.40"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Heat is supplied at constant pressure. For which gas is the <i>fraction</i> of that heat which goes into expansion work the largest: monatomic, diatomic or polyatomic?",
          "steps": [
            "Write the fraction, do not guess it. At constant pressure the work is <i>nR</i>Δ<i>T</i> and the heat is <i>nC<sub>P</sub></i>Δ<i>T</i>, so the fraction is <i>W</i>/Δ<i>Q</i> = <i>R</i>/<i>C<sub>P</sub></i>.",
            "With <i>C<sub>P</sub></i> = (<i>f</i>/2 + 1)<i>R</i>, the fraction is 2/(<i>f</i> + 2).",
            "That decreases as <i>f</i> increases, so it is largest for the smallest <i>f</i>: the monatomic gas, at 2/5 = 40%. Diatomic gives 2/7 = 29% and nonlinear polyatomic 2/8 = 25%.",
            "The trap is the assumption that a polyatomic gas absorbs the most heat and therefore does the most work. More degrees of freedom means more heat siphoned into internal modes, leaving a <b>smaller</b> share for expansion."
          ],
          "ans": "the monatomic gas, with a work fraction of 2/5 = 40%"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "2.0 mol of a monatomic ideal gas is heated so its temperature rises by 60 K. Find the heat supplied if the heating is at constant volume, if it is at constant pressure, and the difference between the two, interpreting that difference physically. Take R = 8.314 J/mol K.",
          "steps": [
            "Monatomic: <i>C<sub>V</sub></i> = 1.5<i>R</i> = 12.47 and <i>C<sub>P</sub></i> = 2.5<i>R</i> = 20.79, both in J/mol K.",
            "Constant volume: Δ<i>Q<sub>V</sub></i> = <i>nC<sub>V</sub></i>Δ<i>T</i> = (2.0)(12.47)(60) = 1.50 × 10<sup>3</sup> J = 1.50 kJ.",
            "Constant pressure: Δ<i>Q<sub>P</sub></i> = <i>nC<sub>P</sub></i>Δ<i>T</i> = (2.0)(20.79)(60) = 2.49 × 10<sup>3</sup> J = 2.49 kJ.",
            "Difference: Δ<i>Q<sub>P</sub></i> − Δ<i>Q<sub>V</sub></i> = <i>nR</i>Δ<i>T</i> = (2.0)(8.314)(60) = 998 J, about 1.0 kJ.",
            "That extra kilojoule is precisely the expansion work the gas does against its surroundings, and it is the same <i>R</i> that appears in Mayer's relation. The difference never depends on the gas type."
          ],
          "ans": "ΔQ<sub>V</sub> ≈ 1.50 kJ · ΔQ<sub>P</sub> ≈ 2.49 kJ · difference ≈ 1.0 kJ, the expansion work"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A container holds a mixture of 2.0 mol of a monatomic ideal gas and 4.0 mol of a diatomic ideal gas. Find <i>C</i><sub>V,mix</sub>, <i>C</i><sub>P,mix</sub> and γ<sub>mix</sub>.",
          "steps": [
            "Components: monatomic <i>C</i><sub>V1</sub> = 1.5<i>R</i>, diatomic <i>C</i><sub>V2</sub> = 2.5<i>R</i>.",
            "Mole-weighted average: <i>C</i><sub>V,mix</sub> = [(2.0)(1.5<i>R</i>) + (4.0)(2.5<i>R</i>)]/6.0 = (3<i>R</i> + 10<i>R</i>)/6 = (13/6)<i>R</i> ≈ 2.167<i>R</i> ≈ 18.0 J/mol K.",
            "Mayer applies to the mixture too: <i>C</i><sub>P,mix</sub> = <i>C</i><sub>V,mix</sub> + <i>R</i> = (19/6)<i>R</i> ≈ 26.3 J/mol K.",
            "γ<sub>mix</sub> = (19/6)/(13/6) = 19/13 ≈ 1.46.",
            "Sanity check: 1.46 lies between the monatomic 1.67 and the diatomic 1.40, pulled towards the diatomic because diatomic moles outnumber monatomic ones two to one. Averaging the gammas directly would have given 1.49, which is wrong."
          ],
          "ans": "C<sub>V,mix</sub> ≈ 18.0 J/mol K · C<sub>P,mix</sub> ≈ 26.3 J/mol K · γ<sub>mix</sub> ≈ 1.46"
        },
        {
          "t": "mcq",
          "q": "For an ideal gas, <i>C<sub>P</sub></i> − <i>C<sub>V</sub></i> equals:",
          "opts": [
            {
              "label": "0",
              "nudge": "Zero would mean no expansion work is ever done, which is true only if the volume is held fixed, and then C<sub>P</sub> is not defined at all."
            },
            {
              "label": "R",
              "nudge": null
            },
            {
              "label": "γR",
              "nudge": "This confuses the difference of the two capacities with something built out of their ratio."
            },
            {
              "label": "R/γ",
              "nudge": "Same confusion, inverted. The difference is a plain R and carries no gamma at all."
            }
          ],
          "correct": 1,
          "solution": "Mayer's relation, per mole of an ideal gas. The difference is exactly the constant-pressure expansion work nRΔT per mole per kelvin."
        },
        {
          "t": "mcq",
          "q": "The ratio γ = <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i> for a monatomic ideal gas is:",
          "opts": [
            {
              "label": "7/5",
              "nudge": "That is the diatomic value, from f = 5."
            },
            {
              "label": "5/3",
              "nudge": null
            },
            {
              "label": "4/3",
              "nudge": "That is the nonlinear polyatomic value, from f = 6."
            },
            {
              "label": "3/2",
              "nudge": "No standard f gives 3/2: γ = 1 + 2/f would need f = 4, which no ordinary gas has."
            }
          ],
          "correct": 1,
          "solution": "A monatomic atom has f = 3 translational degrees of freedom, so γ = 1 + 2/3 = 5/3, the largest value any ideal gas can reach."
        },
        {
          "t": "mcq",
          "q": "Why is <i>C<sub>P</sub></i> greater than <i>C<sub>V</sub></i> for a gas?",
          "opts": [
            {
              "label": "there are more molecules present at constant pressure",
              "nudge": "The amount of gas is unchanged; only the constraint on the piston differs."
            },
            {
              "label": "at constant pressure part of the heat does expansion work",
              "nudge": null
            },
            {
              "label": "constant pressure heats the gas faster",
              "nudge": "How fast you heat something is irrelevant to its heat capacity, which is a ratio of heat to temperature rise."
            },
            {
              "label": "C<sub>V</sub> ignores internal energy",
              "nudge": "The opposite is true: C<sub>V</sub> is built directly out of internal energy, since it equals dU/dT per mole."
            }
          ],
          "correct": 1,
          "solution": "At constant pressure the gas expands and spends part of the heat as work, so more heat is needed to achieve the same temperature rise. The extra is exactly R per mole per kelvin."
        },
        {
          "t": "mcq",
          "q": "At room temperature the internal energy of one mole of a diatomic ideal gas is:",
          "opts": [
            {
              "label": "(3/2)RT",
              "nudge": "That is the monatomic result, from f = 3."
            },
            {
              "label": "(5/2)RT",
              "nudge": null
            },
            {
              "label": "(7/2)RT",
              "nudge": "This would need f = 7, that is with vibration active, and at ordinary temperatures the vibrational modes are frozen out."
            },
            {
              "label": "3RT",
              "nudge": "That is the nonlinear polyatomic result, from f = 6."
            }
          ],
          "correct": 1,
          "solution": "A diatomic molecule has f = 5 at room temperature, three translations and two rotations, so U = (f/2)RT = (5/2)RT per mole."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Define the molar specific heats at constant volume and at constant pressure, state Mayer's relation, and for a gas with γ = 1.4 find <i>C<sub>V</sub></i> and <i>C<sub>P</sub></i> in terms of <i>R</i>.",
              "a": "<i>C<sub>V</sub></i> is the heat per mole per kelvin at constant volume, equal to <i>dU</i>/<i>dT</i>; <i>C<sub>P</sub></i> is the same at constant pressure; and <i>C<sub>P</sub></i> − <i>C<sub>V</sub></i> = <i>R</i>. With γ = 1.4: <i>C<sub>V</sub></i> = <i>R</i>/(γ − 1) = <i>R</i>/0.4 = 2.5<i>R</i> and <i>C<sub>P</sub></i> = γ<i>C<sub>V</sub></i> = 3.5<i>R</i>."
            },
            {
              "q": "[NEET] A gas has γ = 4/3. How many active degrees of freedom does each molecule have, and what type of gas is it?",
              "a": "γ = 1 + 2/<i>f</i> = 4/3 gives 2/<i>f</i> = 1/3, so <i>f</i> = 6. That is a nonlinear polyatomic gas such as H<sub>2</sub>O or NH<sub>3</sub>."
            },
            {
              "q": "[JEE Main] 0.50 mol of a diatomic ideal gas is heated at constant pressure by 200 K. Find the heat supplied, the work done and Δ<i>U</i>. Take R = 8.314 J/mol K.",
              "a": "Δ<i>Q</i> = <i>nC<sub>P</sub></i>Δ<i>T</i> = (0.50)(3.5 × 8.314)(200) = (0.50)(29.099)(200) ≈ 2.91 kJ. <i>W</i> = <i>nR</i>Δ<i>T</i> = (0.50)(8.314)(200) ≈ 831 J. Δ<i>U</i> = <i>nC<sub>V</sub></i>Δ<i>T</i> = (0.50)(2.5 × 8.314)(200) ≈ 2.08 kJ. Check: 2.08 + 0.83 = 2.91 kJ = Δ<i>Q</i>."
            },
            {
              "q": "[JEE Main] How much heat is needed to raise the temperature of 5.0 kg of water from 20 °C to 80 °C? Take <i>s</i> = 4186 J/kg K.",
              "a": "Δ<i>Q</i> = <i>ms</i>Δ<i>T</i> = (5.0)(4186)(60) ≈ 1.26 × 10<sup>6</sup> J = 1.26 MJ. A 60 K rise and a 60 °C rise are the same size, so no conversion is needed on a temperature <i>difference</i>."
            },
            {
              "q": "[JEE Advanced] A mixture contains 3.0 mol of a monatomic and 2.0 mol of a diatomic ideal gas. Find γ<sub>mix</sub>.",
              "a": "<i>C</i><sub>V,mix</sub> = [3(1.5<i>R</i>) + 2(2.5<i>R</i>)]/5 = (4.5<i>R</i> + 5<i>R</i>)/5 = 1.9<i>R</i>. Then <i>C</i><sub>P,mix</sub> = 2.9<i>R</i> and γ<sub>mix</sub> = 2.9/1.9 ≈ 1.53, which duly sits between 1.40 and 1.67."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using <i>C<sub>P</sub></i> for Δ<i>U</i>.</b> The internal-energy change of an ideal gas is <b>always</b> <i>nC<sub>V</sub></i>Δ<i>T</i>, in every process, and never <i>nC<sub>P</sub></i>Δ<i>T</i>. Use <i>C<sub>P</sub></i> only for the heat at constant pressure.",
            "<b>Counting diatomic degrees of freedom as 7.</b> At ordinary temperatures vibration is frozen out, so <i>f</i> = 5. Use 7 only when a problem explicitly invokes high-temperature vibration.",
            "<b>Putting CO<sub>2</sub> in the nonlinear polyatomic row.</b> Carbon dioxide is linear, O=C=O, so it rotates about only two axes and has <i>f</i> = 5 like a diatomic. Water, ammonia and sulphur dioxide are the genuine <i>f</i> = 6 examples.",
            "<b>Mixing specific and molar capacities.</b> <i>s</i> is in J/kg K and <i>C</i> is in J/mol K, and they differ by the molar mass, <i>C</i> = <i>Ms</i>. Substituting one where the other belongs is a silent order-of-magnitude error.",
            "<b>Averaging the two gammas of a mixture.</b> γ is a ratio, not an extensive quantity. Take the mole-weighted <i>C<sub>V</sub></i> first, add <i>R</i> for <i>C<sub>P</sub></i>, and only then divide."
          ]
        },
        {
          "t": "protip",
          "html": "memorise the two reflex identities C<sub>V</sub> = R/(γ − 1) and C<sub>P</sub> = γR/(γ − 1): they convert any gamma straight into capacities with no degree-of-freedom counting at all. for a named gas type jump through f instead: monatomic 1.5R and 2.5R, diatomic 2.5R and 3.5R, nonlinear polyatomic 3R and 4R. and the constant-pressure work fraction R/C<sub>P</sub> = 2/(f + 2) answers a whole family of which gas does the most work traps in one step."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "ΔQ = msΔT per kg · ΔQ = nCΔT per mole",
              "note": "s is in J/kg K, C is in J/mol K, and C = Ms"
            },
            {
              "f": "a gas needs two: C<sub>V</sub> and C<sub>P</sub>, with C<sub>P</sub> the larger",
              "note": "because at constant pressure some heat leaks away as expansion work"
            },
            {
              "f": "Mayer: C<sub>P</sub> − C<sub>V</sub> = R",
              "note": "ideal gas, per mole, and the R is exactly that expansion work"
            },
            {
              "f": "C<sub>V</sub> = (f/2)R, C<sub>P</sub> = (f/2 + 1)R, γ = 1 + 2/f",
              "note": "monatomic f = 3, diatomic f = 5, nonlinear polyatomic f = 6"
            },
            {
              "f": "reflex: C<sub>V</sub> = R/(γ − 1), C<sub>P</sub> = γR/(γ − 1)",
              "note": "and γ always lies above 1 and at most 5/3, so a printed γ outside that is an error"
            },
            {
              "f": "ΔU = nC<sub>V</sub>ΔT, in every process",
              "note": "the single identity that survives every change of process in this chapter"
            }
          ],
          "aids": [
            "\"C sub P pays for the push\"",
            "\"more wiggles, more storage: bigger f means bigger C sub V and smaller gamma\"",
            "\"delta U always rides C sub V\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Engines, Refrigerators and the Second Law",
      "chip": "05 ENGINES AND THE SECOND LAW",
      "kalam": "pay heat get work, or pay work move heat",
      "blocks": [
        {
          "t": "p",
          "html": "The first law says energy is conserved. It does not say energy is <b>useful</b>. A <b>heat engine</b> is any device that performs the most economically important trick in physics: it converts heat, the most disordered form of energy, into ordered mechanical work, over and over, in a cycle. Every car engine, steam turbine and power-plant boiler is one. The story is always the same three parts. A working substance draws heat <i>Q</i><sub>1</sub> from a <b>hot reservoir</b> at <i>T</i><sub>1</sub>, converts <b>part</b> of it into work <i>W</i>, and dumps the leftover <i>Q</i><sub>2</sub> into a <b>cold reservoir</b> at <i>T</i><sub>2</sub>. A reservoir is a body so large that its temperature does not change as heat is exchanged. And because the substance returns to its starting state each cycle, Δ<i>U</i> = 0 and the first law forces <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>."
        },
        {
          "t": "think",
          "html": "think of Q<sub>1</sub> as the salary drawn from the bank, the hot reservoir. W is what you actually get to spend on yourself. Q<sub>2</sub> is the tax and fees siphoned off to the government, the cold reservoir. efficiency is the take-home fraction. no matter how clever your accounting the tax can never be zero, and a hundred per cent efficient engine is as impossible as a job with zero deductions."
        },
        {
          "t": "p",
          "html": "Now run the movie backwards. A <b>refrigerator</b> or <b>heat pump</b> is simply a heat engine in reverse. Instead of heat flowing naturally hot to cold and producing work, you <b>supply</b> work <i>W</i> to force heat to flow the unnatural way, cold to hot. The fridge extracts <i>Q</i><sub>2</sub> from its cold interior, you pay <i>W</i> at the compressor, and the total <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> is dumped into the warm kitchen through the coils at the back. A heat pump is the identical machine, but now you care about the heat <i>Q</i><sub>1</sub> delivered to the <b>warm</b> side, to heat a house in winter. Same hardware, different goal, and therefore a different figure of merit: the <b>coefficient of performance</b>, defined as what you want divided by what you pay. Because what you want can easily exceed what you pay, a COP routinely exceeds 1. It is a ratio, not a percentage, so never cap it at 100%."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ENGINE BALANCE AND ITS EFFICIENCY",
          "tag": "per cycle, so ΔU is zero",
          "main": "<i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub><br>η = <i>W</i>/<i>Q</i><sub>1</sub> = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>",
          "legend": [
            "<i>Q</i><sub>1</sub> = heat absorbed from the hot reservoir per cycle, in joules, and <i>Q</i><sub>2</sub> = heat rejected to the cold reservoir per cycle, also in joules",
            "<i>W</i> = net work done by the engine per cycle, in joules, and it equals the area enclosed by the cycle on a P-V diagram",
            "η is the thermal efficiency, a pure ratio of two energies and therefore dimensionless, often quoted as a percentage",
            "η lies at or above 0 and strictly below 1: η = 1 would mean <i>Q</i><sub>2</sub> = 0, which the second law forbids outright"
          ],
          "note": "Efficiency is 1 minus the rejected fraction, not the rejected fraction itself. Reading Q<sub>2</sub>/Q<sub>1</sub> off as the efficiency is the most common single slip in this topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO COEFFICIENTS OF PERFORMANCE",
          "tag": "what you want over what you pay",
          "main": "COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = <i>Q</i><sub>2</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)<br>COP<sub>hp</sub> = <i>Q</i><sub>1</sub>/<i>W</i> = <i>Q</i><sub>1</sub>/(<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>)<br>COP<sub>hp</sub> = COP<sub>ref</sub> + 1",
          "legend": [
            "for a refrigerator what you want is <i>Q</i><sub>2</sub>, the heat removed from the cold space; for a heat pump it is <i>Q</i><sub>1</sub>, the heat delivered to the warm space",
            "in both cases what you pay is the work <i>W</i>, in joules, supplied from outside, and never the hot-side heat",
            "both COPs are ratios of two energies, so both are dimensionless and both are routinely larger than 1",
            "the same machine run as an engine has COP<sub>ref</sub> = 1/η − 1, which is why a poor engine makes a good fridge"
          ],
          "note": "The maximum possible values of η and of both COPs are set by the reservoir temperatures alone, through the Carnot limit derived in Topic 06."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 11.8 · SAME BOXES, THREE DIFFERENT JOBS",
          "chips": [
            "engine",
            "refrigerator",
            "heat pump"
          ],
          "captions": [
            "Heat falls from hot to cold and the engine takes its cut on the way through. You pay Q1 and you get W; the rest, Q2, is thrown away and can never be zero.",
            "The same hardware run backwards. You pay work W and the machine drags Q2 out of the cold interior, dumping Q1 = Q2 + W into the warm room. What you want here is Q2.",
            "Identical machine, different goal. Now the thing you want is Q1, the heat delivered into the house, and the work you paid is delivered along with the heat you pumped, which is why a heat pump beats a resistive heater."
          ],
          "frames": [
            {
              "aspect": 0.8,
              "flow": {
                "boxes": [
                  {
                    "id": "hot",
                    "col": 0,
                    "row": 0,
                    "text": "hot reservoir T1"
                  },
                  {
                    "id": "eng",
                    "col": 0,
                    "row": 1,
                    "text": "engine",
                    "shape": "round"
                  },
                  {
                    "id": "cold",
                    "col": 0,
                    "row": 2,
                    "text": "cold reservoir T2"
                  },
                  {
                    "id": "w",
                    "col": 1,
                    "row": 1,
                    "text": "work W out"
                  }
                ],
                "links": [
                  {
                    "from": "hot",
                    "to": "eng",
                    "label": "Q1 in",
                    "tone": "green"
                  },
                  {
                    "from": "eng",
                    "to": "cold",
                    "label": "Q2 out",
                    "tone": "red"
                  },
                  {
                    "from": "eng",
                    "to": "w",
                    "label": "W"
                  }
                ]
              }
            },
            {
              "aspect": 0.8,
              "flow": {
                "boxes": [
                  {
                    "id": "hot",
                    "col": 0,
                    "row": 0,
                    "text": "warm room T1"
                  },
                  {
                    "id": "dev",
                    "col": 0,
                    "row": 1,
                    "text": "fridge",
                    "shape": "round"
                  },
                  {
                    "id": "cold",
                    "col": 0,
                    "row": 2,
                    "text": "cold inside T2"
                  },
                  {
                    "id": "w",
                    "col": 1,
                    "row": 1,
                    "text": "work W paid in"
                  }
                ],
                "links": [
                  {
                    "from": "cold",
                    "to": "dev",
                    "label": "Q2 in",
                    "tone": "green"
                  },
                  {
                    "from": "dev",
                    "to": "hot",
                    "label": "Q1 out",
                    "tone": "red"
                  },
                  {
                    "from": "w",
                    "to": "dev",
                    "label": "W"
                  }
                ]
              }
            },
            {
              "aspect": 0.8,
              "flow": {
                "boxes": [
                  {
                    "id": "hot",
                    "col": 0,
                    "row": 0,
                    "text": "house T1"
                  },
                  {
                    "id": "dev",
                    "col": 0,
                    "row": 1,
                    "text": "heat pump",
                    "shape": "round"
                  },
                  {
                    "id": "cold",
                    "col": 0,
                    "row": 2,
                    "text": "cold outdoors T2"
                  },
                  {
                    "id": "w",
                    "col": 1,
                    "row": 1,
                    "text": "work W paid in"
                  }
                ],
                "links": [
                  {
                    "from": "cold",
                    "to": "dev",
                    "label": "Q2 in"
                  },
                  {
                    "from": "dev",
                    "to": "hot",
                    "label": "Q1 out",
                    "tone": "green"
                  },
                  {
                    "from": "w",
                    "to": "dev",
                    "label": "W"
                  }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Engine, fridge or pump: the same four moves",
          "steps": [
            "<b>Identify the device by what it does with work.</b> Does it produce work, making it an engine, or consume work, making it a fridge or a pump?",
            "<b>Write the single energy balance <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i>.</b> One equation ties all three quantities together, and everything else is one division away from it.",
            "<b>Pick the figure of merit by the goal, not by the hardware.</b> Engine takes η = <i>W</i>/<i>Q</i><sub>1</sub>; fridge takes COP = <i>Q</i><sub>2</sub>/<i>W</i>; heat pump takes COP = <i>Q</i><sub>1</sub>/<i>W</i>. The denominator for both COPs is the <b>work</b>, never the hot-side heat.",
            "<b>For a maximum or ideal value, swap the heat ratio for the temperature ratio.</b> The Carnot result <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, proved in Topic 06, turns every one of these into a formula in temperatures alone.",
            "<b>Check the answer is physically possible.</b> An efficiency must sit strictly between 0 and 1, and it must not exceed 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> for its reservoirs. A COP has no upper bound but must be positive."
          ]
        },
        {
          "t": "p",
          "html": "So why can <i>Q</i><sub>2</sub> never be zero? Nothing in the first law forbids it. The first law is generous to a fault: it would happily allow a cup of coffee to grow hotter while the room cools, or a ball lying on the floor to gather heat from the tiles and leap upward, because neither violates energy conservation. Yet you have never once seen these things happen. Something beyond energy balance forbids them, and that something is the <b>second law of thermodynamics</b>. It is fundamentally a law about <b>direction</b>: it tells you which way the movie of the universe is allowed to run. Heat flows hot to cold, never the reverse on its own. Ink spreads through water and never re-gathers. A swinging pendulum slows as its ordered motion bleeds into disordered heat, but a warm still pendulum never starts swinging by cooling itself. Every one of these conserves energy in both directions, and only one direction ever occurs."
        },
        {
          "t": "think",
          "html": "shuffle a brand-new deck stacked in perfect order. a few shuffles and it is hopelessly mixed, and shuffling forever will essentially never bring the order back. not because order is forbidden by any law of card motion, but because there is exactly one ordered arrangement and astronomically many disordered ones. nature drifts towards the overwhelmingly more probable state. heat spreading out, ink diffusing, motion dissipating: all of it is the physical world shuffling towards its most probable condition."
        },
        {
          "t": "def",
          "term": "Kelvin-Planck statement, the engine form",
          "html": "<b>No process is possible whose sole result is the complete conversion of heat absorbed from a single reservoir into work.</b> Equivalently: no heat engine can have efficiency η = 1, and some heat must always be rejected to a colder reservoir. Note the two load-bearing phrases. <b>Sole result</b>: an isothermal expansion does convert heat entirely into work, but it is not a cycle, since the gas ends up bigger, so that is not the sole result. <b>Single reservoir</b>: converting heat into work is allowed, and engines do it every day; what is forbidden is doing it with nothing else changed anywhere."
        },
        {
          "t": "def",
          "term": "Clausius statement, the refrigerator form",
          "html": "<b>No process is possible whose sole result is the transfer of heat from a colder body to a hotter body.</b> Equivalently: heat cannot flow spontaneously from cold to hot, and doing so always requires work input. Again the phrase <b>sole result</b> is doing the work. Your refrigerator moves heat from cold to hot every minute of the day, and it is entirely legal, because it is not the sole result: an electricity bill is paid, and the work supplied ends up in the kitchen as extra heat. What is forbidden is the free version. And these two statements are logically <b>equivalent</b>: assume you could break one and you can construct a machine that breaks the other."
        },
        {
          "t": "def",
          "term": "Reversible and irreversible",
          "html": "A <b>reversible</b> process is an idealised limit: carried out infinitely slowly, quasi-statically, through a continuous chain of equilibrium states, and with <b>no</b> dissipative effects, meaning no friction, no turbulence, and no heat flow across a finite temperature gap. Run it backwards and both the system <b>and</b> the surroundings retrace their states exactly, leaving no trace anywhere. No real process is truly reversible, but it is the crucial benchmark, because reversible engines set the ceiling on efficiency. An <b>irreversible</b> process, which is to say every real one, cannot be undone without leaving a permanent change in the surroundings. The standard sources are friction and viscosity, heat flow across a finite temperature difference, free expansion into a vacuum, the mixing of gases, and any sudden non-quasi-static change. Both conditions are needed: <b>slow alone is not enough</b>, because a slow process with friction is still irreversible."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 11.9 · THE TWO MACHINES NATURE WILL NOT BUILD",
          "chips": [
            "Kelvin-Planck violator",
            "Clausius violator"
          ],
          "captions": [
            "An engine drawing heat from one reservoir and turning all of it into work, with nothing rejected anywhere. Energy balances perfectly, so the first law is entirely satisfied. It is the second law, in its engine form, that forbids this.",
            "Heat crossing from the cold body to the hot body with no work paid at all. Again energy balances exactly. The Clausius statement is what rules it out, and the two prohibitions turn out to be the same prohibition seen from two ends."
          ],
          "frames": [
            {
              "aspect": 0.8,
              "flow": {
                "boxes": [
                  {
                    "id": "hot",
                    "col": 0,
                    "row": 0,
                    "text": "one hot\nreservoir T1"
                  },
                  {
                    "id": "eng",
                    "col": 0,
                    "row": 1,
                    "text": "engine",
                    "shape": "round"
                  },
                  {
                    "id": "w",
                    "col": 1,
                    "row": 1,
                    "text": "W equals all of Q"
                  },
                  {
                    "id": "no",
                    "col": 0,
                    "row": 2,
                    "text": "no cold side\nforbidden",
                    "tone": "red"
                  }
                ],
                "links": [
                  {
                    "from": "hot",
                    "to": "eng",
                    "label": "Q"
                  },
                  {
                    "from": "eng",
                    "to": "w"
                  },
                  {
                    "from": "eng",
                    "to": "no",
                    "dash": true
                  }
                ]
              }
            },
            {
              "aspect": 0.8,
              "flow": {
                "boxes": [
                  {
                    "id": "hot",
                    "col": 0,
                    "row": 0,
                    "text": "hot reservoir T1"
                  },
                  {
                    "id": "dev",
                    "col": 0,
                    "row": 1,
                    "text": "device",
                    "shape": "round"
                  },
                  {
                    "id": "cold",
                    "col": 0,
                    "row": 2,
                    "text": "cold reservoir T2"
                  },
                  {
                    "id": "no",
                    "col": 1,
                    "row": 1,
                    "text": "no work paid\nforbidden",
                    "tone": "red"
                  }
                ],
                "links": [
                  {
                    "from": "cold",
                    "to": "dev",
                    "label": "Q"
                  },
                  {
                    "from": "dev",
                    "to": "hot",
                    "label": "Q"
                  },
                  {
                    "from": "dev",
                    "to": "no",
                    "dash": true
                  }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE TWO STATEMENTS ARE ONE, TAP A LINE",
          "steps": [
            {
              "eq": "suppose a magic device C moves <i>Q</i><sub>2</sub> from the cold reservoir to the hot one with no work input, breaking Clausius",
              "why": "The cleanest way to prove that two statements are equivalent is to show that violating either one lets you violate the other. Start by assuming a Clausius-violator exists and see what can be built with it."
            },
            {
              "eq": "run an ordinary engine E beside it: E draws <i>Q</i><sub>1</sub> from hot, does work <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>, and rejects exactly <i>Q</i><sub>2</sub> to cold",
              "why": "E is a perfectly legal engine; nothing suspect has been assumed about it. The only design choice is to size it so that the heat it rejects is exactly the heat C carries back."
            },
            {
              "eq": "combine C and E into one composite device. The cold reservoir gains <i>Q</i><sub>2</sub> from E and loses <i>Q</i><sub>2</sub> to C, so its net change is zero",
              "why": "The cold reservoir has been cancelled out of the story entirely. On balance it is untouched, which means it is no longer part of the composite machine's sole result."
            },
            {
              "eq": "the sole net result is (<i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub>) drawn from the hot reservoir alone and converted entirely into work",
              "why": "That is precisely a Kelvin-Planck violator. So breaking Clausius breaks Kelvin-Planck too."
            },
            {
              "eq": "now the other direction: a magic engine K takes <i>Q</i> from hot and converts all of it into <i>W</i> = <i>Q</i>, breaking Kelvin-Planck. Feed that work into an ordinary refrigerator",
              "why": "The refrigerator uses <i>W</i> to pump <i>Q</i><sub>2</sub> from cold to hot, dumping <i>Q</i><sub>2</sub> + <i>W</i> into the hot reservoir. The hot reservoir gives up <i>Q</i> to K and receives <i>Q</i><sub>2</sub> + <i>Q</i> back, a net gain of <i>Q</i><sub>2</sub>. Sole result: <i>Q</i><sub>2</sub> moved cold to hot with no work. A Clausius violator. The two statements stand or fall together."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Deciding whether a claimed device is possible",
          "steps": [
            "<b>List every reservoir the device touches and the heat exchanged with each</b>, signed: positive if absorbed by the device, negative if rejected.",
            "<b>Identify the sole net effect after one full cycle</b>, using Δ<i>U</i> = 0 to cancel everything internal to the machine.",
            "<b>If the sole effect is heat from one reservoir turned into pure work, it violates Kelvin-Planck.</b> Impossible.",
            "<b>If the sole effect is heat moved from cold to hot with no work, it violates Clausius.</b> Impossible.",
            "<b>If neither, the device is allowed so far</b>, and only then do you check its efficiency or COP against the Carnot ceiling of Topic 06."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In each cycle a heat engine absorbs 1000 J from a hot reservoir and rejects 600 J to a cold reservoir. Find the work done per cycle and the efficiency.",
          "steps": [
            "The energy balance per cycle, with Δ<i>U</i> = 0: <i>W</i> = <i>Q</i><sub>1</sub> − <i>Q</i><sub>2</sub> = 1000 − 600 = 400 J.",
            "η = <i>W</i>/<i>Q</i><sub>1</sub> = 400/1000 = 0.40, that is 40%.",
            "Cross-check with the other form: η = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 1 − 0.60 = 0.40. The same number, as it must be.",
            "Plausibility: 0.40 sits strictly between 0 and 1, as any real efficiency must."
          ],
          "ans": "W = 400 J · η = 40%"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A refrigerator extracts 200 J of heat from its interior for every 50 J of electrical work supplied. What is its coefficient of performance, and how much heat is dumped into the room per cycle?",
          "steps": [
            "COP<sub>ref</sub> = <i>Q</i><sub>2</sub>/<i>W</i> = 200/50 = 4.",
            "Heat dumped: <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> = 200 + 50 = 250 J. The room gets warmer by more than the food's heat alone, because the work you paid ends up there too.",
            "The trap is to compute <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 200/250 = 0.8 and call that the COP, confusing a fridge with an engine.",
            "For a fridge the denominator is the <b>work</b>, not the hot-side heat, and a COP of 4 exceeding 1 is perfectly normal. Only an efficiency is capped below 1."
          ],
          "ans": "COP = 4 · Q<sub>1</sub> = 250 J rejected to the room"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "An inventor claims a cyclic engine that, in each cycle, absorbs 500 J from a reservoir at 400 K and produces 500 J of work, rejecting no heat. Does this violate the first law, the second law, both, or neither?",
          "steps": [
            "First-law check: energy in is 500 J, energy out as work is 500 J, and Δ<i>U</i> over the cycle is zero. Energy balances exactly, so the <b>first law is satisfied</b>.",
            "Second-law check: the sole result is the complete conversion of heat from a <b>single</b> reservoir into work, with nothing rejected anywhere.",
            "That is precisely the Kelvin-Planck prohibition.",
            "This is the canonical reason a second law was needed at all: energy conservation alone does not forbid the device, and yet nobody has ever built one."
          ],
          "ans": "it violates the second law only, in its Kelvin-Planck form; the first law is satisfied"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Show that a hypothetical device transferring 100 J from a cold reservoir at <i>T</i><sub>2</sub> to a hot reservoir at <i>T</i><sub>1</sub> with no work input could be combined with an ordinary engine, drawing 250 J from hot and rejecting 100 J to cold, to manufacture a Kelvin-Planck violator. Identify the net effect.",
          "steps": [
            "Let the ordinary engine E draw <i>Q</i><sub>1</sub> = 250 J from the hot reservoir, do <i>W</i> = 250 − 100 = 150 J of work, and reject <i>Q</i><sub>2</sub> = 100 J to the cold reservoir. Everything about E is legal.",
            "The magic Clausius-violating device C then carries that same 100 J back from cold to hot, free of charge.",
            "Net effect on the cold reservoir: it receives 100 J from E and gives up 100 J to C, so on balance it is untouched. It has dropped out of the story.",
            "Net effect overall: the hot reservoir loses 250 − 100 = 150 J, and all of it appears as work, with no other change anywhere.",
            "The composite's sole effect is therefore 150 J drawn from the hot reservoir alone and fully converted to work: a Kelvin-Planck violation. So Clausius holding forces Kelvin-Planck to hold as well."
          ],
          "ans": "the composite draws 150 J from the hot reservoir alone and turns all of it into work, which is exactly what Kelvin-Planck forbids"
        },
        {
          "t": "mcq",
          "q": "The efficiency of a heat engine is given by:",
          "opts": [
            {
              "label": "Q<sub>2</sub>/Q<sub>1</sub>",
              "nudge": "That is the rejected fraction, the exact complement of the efficiency, and it is the commonest wrong answer on this question."
            },
            {
              "label": "1 − Q<sub>2</sub>/Q<sub>1</sub>",
              "nudge": null
            },
            {
              "label": "Q<sub>1</sub>/W",
              "nudge": "This inverts the definition. Efficiency is useful output over costly input, not the other way round."
            },
            {
              "label": "1 − Q<sub>1</sub>/Q<sub>2</sub>",
              "nudge": "The ratio is upside down, and since Q<sub>1</sub> exceeds Q<sub>2</sub> this would come out negative."
            }
          ],
          "correct": 1,
          "solution": "η = W/Q<sub>1</sub> = (Q<sub>1</sub> − Q<sub>2</sub>)/Q<sub>1</sub> = 1 − Q<sub>2</sub>/Q<sub>1</sub>."
        },
        {
          "t": "mcq",
          "q": "A refrigerator's coefficient of performance can be:",
          "opts": [
            {
              "label": "only less than 1",
              "nudge": "This treats a COP like a capped percentage. It is a plain ratio of a heat to a work and has no ceiling."
            },
            {
              "label": "exactly 1 always",
              "nudge": "Same misconception. A domestic fridge typically runs at a COP of three or four."
            },
            {
              "label": "greater than 1",
              "nudge": null
            },
            {
              "label": "negative",
              "nudge": "Impossible: both the heat removed and the work paid are positive quantities."
            }
          ],
          "correct": 2,
          "solution": "COP = Q<sub>2</sub>/W, and the useful heat moved routinely exceeds the work paid, so the COP routinely exceeds 1."
        },
        {
          "t": "mcq",
          "q": "For one device run first as a refrigerator and then as a heat pump between the same reservoirs, COP<sub>hp</sub> − COP<sub>ref</sub> equals:",
          "opts": [
            {
              "label": "0",
              "nudge": "This ignores the extra work term. The pump delivers everything the fridge removed plus the work you paid."
            },
            {
              "label": "1",
              "nudge": null
            },
            {
              "label": "η",
              "nudge": "This borrows a quantity from the engine picture, where it does not belong."
            },
            {
              "label": "Q<sub>1</sub>/Q<sub>2</sub>",
              "nudge": "A ratio of the two heats, but the difference of the two COPs is what the question asks for."
            }
          ],
          "correct": 1,
          "solution": "COP<sub>hp</sub> = Q<sub>1</sub>/W and COP<sub>ref</sub> = Q<sub>2</sub>/W, and Q<sub>1</sub> − Q<sub>2</sub> = W, so the difference is W/W = 1."
        },
        {
          "t": "mcq",
          "q": "A heat engine with η = 1, that is with Q<sub>2</sub> = 0, is impossible because it would violate:",
          "opts": [
            {
              "label": "the first law",
              "nudge": "The first law is actually satisfied by such an engine, since energy still balances. That is precisely why a second law was needed."
            },
            {
              "label": "the zeroth law",
              "nudge": "The zeroth law only defines temperature and says nothing about the direction of any process."
            },
            {
              "label": "the second law, in its Kelvin-Planck form",
              "nudge": null
            },
            {
              "label": "conservation of momentum",
              "nudge": "Nothing in the engine's operation involves a momentum balance."
            }
          ],
          "correct": 2,
          "solution": "Converting heat from a single reservoir entirely into work, with no other effect, is exactly what the Kelvin-Planck statement forbids."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A heat engine absorbs 800 J per cycle and does 200 J of work. Find the heat rejected and the efficiency.",
              "a": "<i>Q</i><sub>2</sub> = 800 − 200 = 600 J, and η = 200/800 = 0.25, that is 25%."
            },
            {
              "q": "[NEET] State in one line each the difference between a refrigerator and a heat pump, in terms of which heat is the desired output.",
              "a": "For a refrigerator the desired output is <i>Q</i><sub>2</sub>, the heat removed from the cold space. For a heat pump it is <i>Q</i><sub>1</sub>, the heat delivered to the warm space. Same machine, opposite goal, so a different figure of merit."
            },
            {
              "q": "[JEE Main] An engine of efficiency 30% rejects 1400 J of heat per cycle. Find the heat absorbed and the work done.",
              "a": "η = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, so <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub>/(1 − η) = 1400/0.70 = 2000 J. Then <i>W</i> = η<i>Q</i><sub>1</sub> = 0.30 × 2000 = 600 J."
            },
            {
              "q": "[JEE Main] A refrigerator has COP = 4.5 and removes 900 J from the cold chamber per cycle. Find the work input and the heat rejected to the room.",
              "a": "<i>W</i> = <i>Q</i><sub>2</sub>/COP = 900/4.5 = 200 J, and <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> = 1100 J."
            },
            {
              "q": "[JEE Advanced] Explain in three or four lines why a refrigerator needing <b>zero</b> work would also make a 100% efficient single-reservoir engine possible.",
              "a": "A zero-work refrigerator is a Clausius-violator. Couple it with an ordinary engine, sized so that the heat the fridge pumps back exactly cancels the heat the engine rejects at the cold reservoir. The cold reservoir is then untouched on balance, so the composite's sole effect is to draw heat from the hot reservoir alone and turn all of it into work: a Kelvin-Planck violator. Breaking Clausius therefore breaks Kelvin-Planck."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Putting <i>Q</i><sub>1</sub> in the COP denominator.</b> For a fridge or a pump the denominator is the <b>work</b>, not the hot-side heat: COP = <i>Q</i><sub>2</sub>/<i>W</i> for a fridge, <i>Q</i><sub>1</sub>/<i>W</i> for a pump.",
            "<b>Treating a COP as a percentage capped at 100%.</b> It is a ratio and is normally greater than 1. Never write COP = 80%.",
            "<b>Forgetting that <i>Q</i><sub>1</sub> = <i>Q</i><sub>2</sub> + <i>W</i> for a fridge.</b> The room receives the food's heat <b>plus</b> the work you paid, which is why an open fridge door heats a kitchen rather than cooling it.",
            "<b>Confusing efficiency with the rejected fraction.</b> η = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>, not <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub>.",
            "<b>Reading slow as reversible.</b> Quasi-static is necessary but not sufficient: a slow process with friction, or one exchanging heat across a finite temperature gap, is still irreversible. Both conditions have to hold.",
            "<b>Thinking the second law bans cold-to-hot heat flow outright.</b> It bans it only as the <b>sole</b> effect. With work supplied, which is a refrigerator, it is perfectly legal and happens in every kitchen."
          ]
        },
        {
          "t": "protip",
          "html": "start every numerical from the single balance Q<sub>1</sub> = Q<sub>2</sub> + W and everything else is one division away. for any is this device possible question, reduce the claim to its sole net effect over one cycle: heat from one reservoir turned into pure work is a kelvin-planck violation, and heat moved cold to hot with no work is a clausius violation, and if it is neither the device is allowed. and remember the shape of the equivalence proof: assume one violation, bolt on an ordinary engine or fridge, cancel the cold reservoir, read off the other violation."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "cyclic balance: Q<sub>1</sub> = Q<sub>2</sub> + W, since ΔU over a cycle is zero",
              "note": "one equation ties the three quantities of every device in this topic"
            },
            {
              "f": "engine: η = W/Q<sub>1</sub> = 1 − Q<sub>2</sub>/Q<sub>1</sub>, and η is under 1",
              "note": "efficiency is 1 minus the rejected fraction, never the rejected fraction"
            },
            {
              "f": "fridge: COP = Q<sub>2</sub>/W · pump: COP = Q<sub>1</sub>/W",
              "note": "the denominator is always the work paid, and COP<sub>hp</sub> = COP<sub>ref</sub> + 1"
            },
            {
              "f": "Kelvin-Planck: no engine converts single-reservoir heat entirely to work",
              "note": "so η = 1 is forbidden, though the first law would allow it"
            },
            {
              "f": "Clausius: no spontaneous heat flow cold to hot",
              "note": "with work paid it is legal; the two statements are logically equivalent"
            },
            {
              "f": "reversible = quasi-static AND dissipation-free",
              "note": "slow alone is not enough; every real process is irreversible"
            }
          ],
          "aids": [
            "\"engine: pay heat, get work. fridge: pay work, move heat\"",
            "\"figure of merit is what you want over what you pay\"",
            "\"first law: you cannot win. second law: you cannot even break even\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "The Carnot Ceiling and Entropy",
      "chip": "06 CARNOT AND ENTROPY",
      "kalam": "kelvin only, and the ceiling is one minus T2 over T1",
      "blocks": [
        {
          "t": "p",
          "html": "The second law told us that efficiency must be less than 1. But how <b>close</b> to 1 can we get? In 1824 a young French engineer, Sadi Carnot, asked the deepest possible version of the question: of <b>all</b> conceivable engines working between a hot reservoir at <i>T</i><sub>1</sub> and a cold one at <i>T</i><sub>2</sub>, which is the best, and what limits it? His answer is one of the most beautiful results in physics. The best engine is a fully <b>reversible</b> one; its efficiency depends <b>only</b> on the two temperatures, not on the gas, the size or the design; and that efficiency is η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, with both temperatures in kelvin."
        },
        {
          "t": "think",
          "html": "why insist on reversibility for the best engine? because every irreversibility, friction, a finite temperature gap during heat transfer, turbulence, is wasted opportunity: energy degraded into useless heat that you could otherwise have captured as work. a reversible engine wastes nothing and sits exactly on the boundary the second law allows. it is the frictionless pulley of thermodynamics. a real power plant quoting 42 per cent efficient is really saying it reached 42 per cent of the way to the carnot ceiling its boiler and cooling tower set."
        },
        {
          "t": "p",
          "html": "The <b>Carnot cycle</b> is built from exactly the two reversible ways of moving a gas that Topic 03 already gave you: <b>isothermal</b> steps, in contact with a reservoir so the temperature is pinned, and <b>adiabatic</b> steps, perfectly insulated so no heat crosses. Stitch two of each into a closed loop and you have it. Step 1, isothermal expansion at <i>T</i><sub>1</sub>: the gas touches the hot reservoir, expands slowly and absorbs <i>Q</i><sub>1</sub>, and since Δ<i>U</i> = 0 here, all of that heat leaves as work. Step 2, adiabatic expansion: insulated, the gas expands further at the cost of its own internal energy, cooling from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub>. Step 3, isothermal compression at <i>T</i><sub>2</sub>: touching the cold reservoir, the gas is compressed slowly, rejecting <i>Q</i><sub>2</sub>. Step 4, adiabatic compression: insulated again, the gas is squeezed back to its starting state, warming from <i>T</i><sub>2</sub> back to <i>T</i><sub>1</sub>. <b>Heat crosses the boundary only on the two isothermal steps</b>, since the adiabatic steps have <i>Q</i> = 0 by definition."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.10 · THE CARNOT CYCLE",
          "chips": [
            "the four legs",
            "the enclosed area"
          ],
          "captions": [
            "Two isotherms and two adiabats, closing into a loop. A to B is the isothermal expansion at T1 that absorbs Q1; B to C the adiabatic expansion that cools the gas to T2; C to D the isothermal compression at T2 that rejects Q2; D to A the adiabatic compression back to the start. The arrows run clockwise, which is what makes this an engine rather than a refrigerator.",
            "The same loop with the enclosed region shaded. That area is the net work per cycle, and by the first law over a cycle it equals Q1 minus Q2 exactly. Reverse every arrow and the loop runs anticlockwise: the area becomes work you pay in, and the engine becomes a refrigerator."
          ],
          "frames": [
            {
              "x": [
                0,
                9
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      2,
                      9
                    ],
                    [
                      2.5,
                      7.2
                    ],
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.143
                    ],
                    [
                      4,
                      4.5
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      4,
                      4.5
                    ],
                    [
                      4.5,
                      3.82
                    ],
                    [
                      5,
                      3.29
                    ],
                    [
                      6,
                      2.55
                    ],
                    [
                      7,
                      2.06
                    ],
                    [
                      7.71,
                      1.8
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      7.71,
                      1.8
                    ],
                    [
                      7,
                      1.98
                    ],
                    [
                      6,
                      2.31
                    ],
                    [
                      5,
                      2.77
                    ],
                    [
                      4.5,
                      3.08
                    ],
                    [
                      3.854,
                      3.593
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      3.854,
                      3.593
                    ],
                    [
                      3.5,
                      4.11
                    ],
                    [
                      3,
                      5.1
                    ],
                    [
                      2.5,
                      6.59
                    ],
                    [
                      2,
                      9
                    ]
                  ]
                }
              ],
              "arrows": [
                {
                  "from": [
                    2.8,
                    6.43
                  ],
                  "to": [
                    3.2,
                    5.63
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    5.2,
                    3.12
                  ],
                  "to": [
                    5.8,
                    2.67
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    6.3,
                    2.2
                  ],
                  "to": [
                    5.7,
                    2.43
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    3.2,
                    4.66
                  ],
                  "to": [
                    2.8,
                    5.62
                  ],
                  "head": "end"
                }
              ],
              "points": [
                {
                  "x": 2,
                  "y": 9,
                  "label": "A",
                  "at": "nw"
                },
                {
                  "x": 4,
                  "y": 4.5,
                  "label": "B",
                  "at": "ne"
                },
                {
                  "x": 7.71,
                  "y": 1.8,
                  "label": "C",
                  "at": "se"
                },
                {
                  "x": 3.854,
                  "y": 3.593,
                  "label": "D",
                  "at": "sw"
                }
              ],
              "labels": [
                {
                  "x": 2.6,
                  "y": 8.3,
                  "text": "T1"
                },
                {
                  "x": 6.6,
                  "y": 1.35,
                  "text": "T2"
                }
              ]
            },
            {
              "x": [
                0,
                9
              ],
              "y": [
                0,
                10
              ],
              "axisX": "V",
              "axisY": "P",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      2,
                      9
                    ],
                    [
                      2.5,
                      7.2
                    ],
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.143
                    ],
                    [
                      4,
                      4.5
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      4,
                      4.5
                    ],
                    [
                      4.5,
                      3.82
                    ],
                    [
                      5,
                      3.29
                    ],
                    [
                      6,
                      2.55
                    ],
                    [
                      7,
                      2.06
                    ],
                    [
                      7.71,
                      1.8
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      7.71,
                      1.8
                    ],
                    [
                      7,
                      1.98
                    ],
                    [
                      6,
                      2.31
                    ],
                    [
                      5,
                      2.77
                    ],
                    [
                      4.5,
                      3.08
                    ],
                    [
                      3.854,
                      3.593
                    ]
                  ]
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      3.854,
                      3.593
                    ],
                    [
                      3.5,
                      4.11
                    ],
                    [
                      3,
                      5.1
                    ],
                    [
                      2.5,
                      6.59
                    ],
                    [
                      2,
                      9
                    ]
                  ]
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      2,
                      9
                    ],
                    [
                      2.5,
                      7.2
                    ],
                    [
                      3,
                      6
                    ],
                    [
                      3.5,
                      5.143
                    ],
                    [
                      4,
                      4.5
                    ],
                    [
                      4.5,
                      3.82
                    ],
                    [
                      5,
                      3.29
                    ],
                    [
                      6,
                      2.55
                    ],
                    [
                      7,
                      2.06
                    ],
                    [
                      7.71,
                      1.8
                    ],
                    [
                      7,
                      1.98
                    ],
                    [
                      6,
                      2.31
                    ],
                    [
                      5,
                      2.77
                    ],
                    [
                      4.5,
                      3.08
                    ],
                    [
                      3.854,
                      3.593
                    ],
                    [
                      3.5,
                      4.11
                    ],
                    [
                      3,
                      5.1
                    ],
                    [
                      2.5,
                      6.59
                    ]
                  ],
                  "close": true,
                  "fill": "wash",
                  "tone": "amber"
                }
              ],
              "arrows": [
                {
                  "from": [
                    2.8,
                    6.43
                  ],
                  "to": [
                    3.2,
                    5.63
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    5.2,
                    3.12
                  ],
                  "to": [
                    5.8,
                    2.67
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    6.3,
                    2.2
                  ],
                  "to": [
                    5.7,
                    2.43
                  ],
                  "head": "end"
                },
                {
                  "from": [
                    3.2,
                    4.66
                  ],
                  "to": [
                    2.8,
                    5.62
                  ],
                  "head": "end"
                }
              ],
              "labels": [
                {
                  "x": 6.4,
                  "y": 5.6,
                  "text": "shaded = net work W"
                }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CARNOT RESULTS",
          "tag": "T in kelvin, and only in kelvin",
          "main": "<i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub><br>η<sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>T</i><sub>1</sub><br>COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), COP<sub>hp</sub> = <i>T</i><sub>1</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)",
          "legend": [
            "<i>T</i><sub>1</sub> = hot reservoir temperature and <i>T</i><sub>2</sub> = cold reservoir temperature, both in kelvin; <i>Q</i><sub>1</sub> and <i>Q</i><sub>2</sub> are the heats in joules",
            "every quantity here is a ratio of two like quantities, so all three results are dimensionless, exactly as an efficiency and a COP must be",
            "the heats on the two isothermals are <i>Q</i><sub>1</sub> = <i>nRT</i><sub>1</sub> ln(<i>V<sub>B</sub></i>/<i>V<sub>A</sub></i>) absorbed and <i>Q</i><sub>2</sub> = <i>nRT</i><sub>2</sub> ln(<i>V<sub>C</sub></i>/<i>V<sub>D</sub></i>) rejected",
            "all three expressions share the denominator (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>), so a small temperature gap makes a superb fridge and a feeble engine"
          ],
          "note": "Feed Celsius into these and you can produce an efficiency above 1, which is the loudest possible signal that a conversion was skipped. Convert first, every time."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE HEAT RATIO IS THE TEMPERATURE RATIO, TAP A LINE",
          "steps": [
            {
              "eq": "on A to B, isothermal at <i>T</i><sub>1</sub>: Δ<i>U</i> = 0, so <i>Q</i><sub>1</sub> = <i>nRT</i><sub>1</sub> ln(<i>V<sub>B</sub></i>/<i>V<sub>A</sub></i>). On C to D, isothermal at <i>T</i><sub>2</sub>: <i>Q</i><sub>2</sub> = <i>nRT</i><sub>2</sub> ln(<i>V<sub>C</sub></i>/<i>V<sub>D</sub></i>)",
              "why": "Only the isothermal legs exchange heat, and on each one the isothermal work formula from Topic 03 applies directly. <i>Q</i><sub>2</sub> is written as a magnitude, with the compression handled by taking the ratio the other way up."
            },
            {
              "eq": "on the two insulated legs, <i>TV</i><sup>γ−1</sup> = constant: <i>T</i><sub>1</sub><i>V<sub>B</sub></i><sup>γ−1</sup> = <i>T</i><sub>2</sub><i>V<sub>C</sub></i><sup>γ−1</sup> and <i>T</i><sub>2</sub><i>V<sub>D</sub></i><sup>γ−1</sup> = <i>T</i><sub>1</sub><i>V<sub>A</sub></i><sup>γ−1</sup>",
              "why": "The adiabatic relation is the only extra fact the derivation needs, and it is exactly the one Topic 03 derived from the first law. Each equation ties one corner of the loop to the next."
            },
            {
              "eq": "divide the first by the second: (<i>V<sub>B</sub></i>/<i>V<sub>D</sub></i>)<sup>γ−1</sup> = (<i>V<sub>C</sub></i>/<i>V<sub>A</sub></i>)<sup>γ−1</sup>, so <i>V<sub>B</sub></i>/<i>V<sub>A</sub></i> = <i>V<sub>C</sub></i>/<i>V<sub>D</sub></i>",
              "why": "Both temperatures cancel in the division and the exponent γ − 1, being the same on both sides and non-zero, can be stripped. This volume identity is the single algebraic fact the whole derivation turns on."
            },
            {
              "eq": "the two logarithms are therefore <b>equal</b> and cancel: <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>",
              "why": "Everything about the gas has vanished from the answer: the number of moles, the value of γ, the volumes themselves. Only the two temperatures survive."
            },
            {
              "eq": "substitute into η = 1 − <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> to get η<sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>",
              "why": "The working substance has disappeared, which is a preview of Carnot's theorem. And notice the two limits: η tends to 1 only as <i>T</i><sub>2</sub> tends to absolute zero, which is unreachable, and η falls to 0 when <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>, since with no temperature gap there is nothing to drive the engine at all."
            }
          ]
        },
        {
          "t": "def",
          "term": "Carnot's theorem, in two claims",
          "html": "<b>(a) No engine operating between two given reservoirs can be more efficient than a reversible engine working between the same two.</b> The proof is a coupling argument. If some engine X beat a reversible engine R, run R backwards as a refrigerator driven by X's work. Because X needs less heat from the hot reservoir than R pumps back into it, the net effect is heat delivered from cold to hot with no external work: a Clausius violation. So no engine can beat the reversible one. <b>(b) All reversible engines operating between the same two reservoirs have the same efficiency, whatever their working substance.</b> Apply the argument of (a) once in each direction and each reversible engine is shown to be no more efficient than the other, so they must tie. The consequence is the striking one: since all reversible engines tie regardless of substance, η can depend only on the two reservoir temperatures, which is exactly what η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> says. It is also what lets <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> <b>define</b> an absolute thermodynamic temperature scale, independent of any particular thermometer."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. Find its efficiency.",
          "steps": [
            "Both temperatures are already in kelvin, so nothing needs converting.",
            "η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = 1 − 300/500 = 1 − 0.60 = 0.40.",
            "That is 40%. No detail of the gas, the size of the engine or the amount of substance is needed: the two temperatures alone fix the ceiling."
          ],
          "ans": "η = 0.40 = 40%"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A Carnot engine has efficiency 50% with the cold reservoir at 300 K. To raise the efficiency to 60% while keeping the cold reservoir fixed, by how much must the hot-reservoir temperature increase?",
          "steps": [
            "Invert the formula cleanly rather than scaling anything: η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> gives <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/(1 − η).",
            "At 50%: <i>T</i><sub>1</sub> = 300/0.50 = 600 K.",
            "At 60%: <i>T</i><sub>1</sub> = 300/0.40 = 750 K.",
            "Increase = 750 − 600 = 150 K.",
            "The trap is to scale <i>T</i><sub>1</sub> linearly with η, reasoning that ten percentage points more efficiency needs ten per cent more temperature. The relationship is a reciprocal, not a proportion."
          ],
          "ans": "raise T<sub>1</sub> from 600 K to 750 K, an increase of 150 K"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A Carnot engine working between 400 K and 300 K absorbs 1200 J from the hot reservoir per cycle. Find the efficiency, the work done per cycle, and the heat rejected.",
          "steps": [
            "η = 1 − 300/400 = 0.25, that is 25%.",
            "<i>W</i> = η<i>Q</i><sub>1</sub> = 0.25 × 1200 = 300 J.",
            "<i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub> − <i>W</i> = 1200 − 300 = 900 J.",
            "Cross-check against the Carnot heat ratio: <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = 900/1200 = 0.75 = 300/400 = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>. Consistent, so the arithmetic is sound.",
            "A 25% engine throws away three quarters of the heat it buys, which is a vivid reminder of why <i>Q</i><sub>2</sub> is never negligible."
          ],
          "ans": "η = 25% · W = 300 J · Q<sub>2</sub> = 900 J"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A reversible engine operates between <i>T</i><sub>1</sub> = 600 K and <i>T</i><sub>2</sub> = 300 K. An inventor claims a different engine between the same two reservoirs with efficiency 60%. Find the Carnot efficiency. Is the claim possible? If the inventor instead claims 45%, is <i>that</i> possible, and if so must the engine be reversible?",
          "steps": [
            "Carnot efficiency: η<sub>Carnot</sub> = 1 − 300/600 = 0.50, that is 50%.",
            "The claimed 60% exceeds 50%. By Carnot's theorem no engine between these reservoirs can beat the reversible one, so the claim is <b>impossible</b>. Coupling it to a reversed Carnot engine would manufacture a Clausius violation.",
            "This is worth doing on sight in an exam: whenever a claimed efficiency exceeds 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, declare it impossible with no further calculation.",
            "45% is below the ceiling, so it is <b>possible</b>. But being strictly below the maximum means the engine must be <b>irreversible</b>: only a reversible engine reaches the full 50%, and by claim (b) every reversible engine between these reservoirs reaches exactly that.",
            "The three parts together are the essence of Carnot's theorem: the reversible efficiency is simultaneously the maximum and the value all reversible engines share."
          ],
          "ans": "η<sub>Carnot</sub> = 50% · the 60% claim is impossible · 45% is possible, and such an engine is necessarily irreversible"
        },
        {
          "t": "mcq",
          "q": "The efficiency of a Carnot engine depends on:",
          "opts": [
            {
              "label": "the working substance",
              "nudge": "Carnot's theorem says exactly the opposite: all reversible engines between the same reservoirs tie, whatever gas they use."
            },
            {
              "label": "the two reservoir temperatures only",
              "nudge": null
            },
            {
              "label": "the physical size of the engine",
              "nudge": "Size drops out of the derivation with everything else: the volume logarithms cancel."
            },
            {
              "label": "the amount of gas used",
              "nudge": "The number of moles appears in both heats and cancels in their ratio, leaving no trace in the efficiency."
            }
          ],
          "correct": 1,
          "solution": "η = 1 − T<sub>2</sub>/T<sub>1</sub>. Everything about the gas cancels when the two isothermal heats are divided, leaving only the temperature ratio."
        },
        {
          "t": "mcq",
          "q": "In a Carnot cycle, heat is exchanged with the reservoirs during:",
          "opts": [
            {
              "label": "the two adiabatic steps",
              "nudge": "This reverses the truth: an adiabatic step is defined by Q = 0, so no heat crosses at all."
            },
            {
              "label": "the two isothermal steps",
              "nudge": null
            },
            {
              "label": "all four steps",
              "nudge": "This ignores the adiabatic condition on two of the four legs."
            },
            {
              "label": "none of the steps",
              "nudge": "Then no heat would ever enter, and the engine would produce no work whatsoever."
            }
          ],
          "correct": 1,
          "solution": "The adiabatic legs are insulated and exchange no heat by definition, so all the heat enters on the hot isotherm and leaves on the cold one."
        },
        {
          "t": "p",
          "html": "The second law, so far, is a sentence: real processes have a preferred direction. But direction begs for a <b>number</b>, a quantity that always increases as a system drifts towards its most probable state, the way a clock's hands only ever advance. That quantity is <b>entropy</b>, written <i>S</i>. It turns the qualitative arrow of time into an inequality you can compute: Δ<i>S</i><sub>universe</sub> is at least zero, for every process. The cleanest physical reading is the amount of disorder, or more precisely the number of microscopic arrangements consistent with the bulk state. Heat <i>Q</i> flowing into a system at temperature <i>T</i> raises its disorder by <i>Q</i>/<i>T</i>, and the colder the system the bigger the disordering effect of the <b>same</b> heat: a whisper in a silent library is disruptive, and the same whisper at a loud party is nothing. That single ratio is the heartbeat of entropy. Entropy is not part of the Class 11 board syllabus; treat it as a JEE Advanced extension."
        },
        {
          "t": "think",
          "html": "you can lower a system's entropy any time you like. a freezer makes ordered ice out of disordered water. but only by dumping even more disorder into the surroundings: the coils at the back warm the kitchen. so the universe's total still rises. the second law never constrains the system alone, only the system plus everything it touched."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENTROPY AND THE QUANTIFIED SECOND LAW",
          "tag": "JEE Advanced extension",
          "main": "<i>dS</i> = <i>dQ</i><sub>rev</sub>/<i>T</i><br>Δ<i>S</i><sub>universe</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> ≥ 0<br>∮ <i>dQ</i>/<i>T</i> ≤ 0, the Clausius inequality",
          "legend": [
            "<i>T</i> is the absolute temperature in kelvin at which the heat is exchanged, and <i>dQ</i><sub>rev</sub> is the heat along a <b>reversible</b> path, in joules",
            "entropy therefore carries the unit J/K and the dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>]: it is emphatically not an energy",
            "the equality Δ<i>S</i><sub>universe</sub> = 0 holds only for a reversible process; every irreversible, that is every real, process gives strictly more than zero",
            "the Clausius inequality uses the <b>actual</b> heat around a cycle, and becomes an equality exactly when the cycle is reversible"
          ],
          "note": "Why reversible heat in the definition? Because Q is a path function and S must be a state function. Insisting on the reversible path is the trick that rescues a point function out of a path quantity, and it means you may compute ΔS for an irreversible process along any convenient reversible route with the same endpoints."
        },
        {
          "t": "defgrid",
          "title": "The standard entropy changes",
          "rows": [
            {
              "k": "Isothermal, ideal gas",
              "v": "Δ<i>S</i> = <i>Q</i><sub>rev</sub>/<i>T</i> = <i>nR</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>). Positive on expansion"
            },
            {
              "k": "Phase change at constant <i>T</i>",
              "v": "Δ<i>S</i> = <i>mL</i>/<i>T</i>, with <i>L</i> the latent heat in J/kg and <i>T</i> the melting or boiling point in kelvin"
            },
            {
              "k": "Heating at constant pressure",
              "v": "Δ<i>S</i> = <i>nC<sub>P</sub></i> ln(<i>T<sub>f</sub></i>/<i>T<sub>i</sub></i>), and for a solid or liquid of mass <i>m</i>, Δ<i>S</i> = <i>ms</i> ln(<i>T<sub>f</sub></i>/<i>T<sub>i</sub></i>)"
            },
            {
              "k": "Heating at constant volume",
              "v": "Δ<i>S</i> = <i>nC<sub>V</sub></i> ln(<i>T<sub>f</sub></i>/<i>T<sub>i</sub></i>)"
            },
            {
              "k": "Reversible adiabatic",
              "v": "Δ<i>S</i> = 0, since <i>dQ</i><sub>rev</sub> = 0 throughout. A reversible adiabatic process is called isentropic"
            },
            {
              "k": "General ideal gas",
              "v": "Δ<i>S</i> = <i>nC<sub>V</sub></i> ln(<i>T<sub>f</sub></i>/<i>T<sub>i</sub></i>) + <i>nR</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>), which contains every row above as a special case"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.11 · THE ONE CURVE THAT NEVER DIPS",
          "chips": [
            "the universe ledger"
          ],
          "captions": [
            "As a real process runs, the system's own entropy is free to fall, and here it does, exactly as it would during freezing or compression. The surroundings gain more than the system loses, so the total for the universe climbs monotonically and never once dips. The second law constrains only that top curve. Add the two lower ones at any instant and you get it."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                -3,
                6
              ],
              "axisX": "time",
              "axisY": "S",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0
                    ],
                    [
                      2,
                      0.7
                    ],
                    [
                      4,
                      1.5
                    ],
                    [
                      6,
                      2.2
                    ],
                    [
                      8,
                      2.7
                    ],
                    [
                      10,
                      3
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0
                    ],
                    [
                      2,
                      1.3
                    ],
                    [
                      4,
                      2.9
                    ],
                    [
                      6,
                      4
                    ],
                    [
                      8,
                      4.7
                    ],
                    [
                      10,
                      5.1
                    ]
                  ],
                  "smooth": true,
                  "soft": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0
                    ],
                    [
                      2,
                      -0.6
                    ],
                    [
                      4,
                      -1.4
                    ],
                    [
                      6,
                      -1.8
                    ],
                    [
                      8,
                      -2
                    ],
                    [
                      10,
                      -2.1
                    ]
                  ],
                  "smooth": true,
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 7.4,
                  "y": 5.7,
                  "text": "S surroundings"
                },
                {
                  "x": 7.4,
                  "y": 3.4,
                  "text": "S universe"
                },
                {
                  "x": 7,
                  "y": -2.7,
                  "text": "S system"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CARNOT CYCLE CREATES NO ENTROPY, TAP A LINE",
          "steps": [
            {
              "eq": "around a reversible Carnot cycle, entropy is gained on the hot isotherm, +<i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub>, and lost on the cold one, −<i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub>",
              "why": "Heat crosses the boundary only on the two isothermal legs, and on each the temperature is constant, so the integral of <i>dQ</i>/<i>T</i> is simply the heat divided by that temperature."
            },
            {
              "eq": "the two adiabatic legs contribute nothing, since <i>dQ</i><sub>rev</sub> = 0 on both",
              "why": "A reversible adiabatic is isentropic. That is why the Carnot cycle is a rectangle on a temperature-entropy diagram, even though it is a curved loop on a P-V one."
            },
            {
              "eq": "<i>S</i> is a state function, so the net change around any closed loop is zero: ∮ <i>dQ</i><sub>rev</sub>/<i>T</i> = <i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub> − <i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub> = 0",
              "why": "The working substance returns to its starting state, so every state function it carries must return to its starting value, entropy included."
            },
            {
              "eq": "therefore <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>, which is exactly the Carnot heat ratio",
              "why": "Two completely different routes, the volume-logarithm derivation earlier in this topic and this one-line entropy argument, land on the same relation. Entropy and Carnot are two views of a single truth, and this is why the Carnot engine is the ceiling: it is the unique engine that creates <b>no</b> entropy. Every real engine creates some, and the entropy it creates is precisely the work it failed to deliver."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "2.0 mol of an ideal gas expands isothermally and reversibly at 400 K to twice its initial volume. Find the entropy change of the gas, and of the universe. Take R = 8.314 J/mol K and ln 2 = 0.693.",
          "steps": [
            "Isothermal, so Δ<i>S</i> = <i>nR</i> ln(<i>V<sub>f</sub></i>/<i>V<sub>i</sub></i>) = (2.0)(8.314)(0.693).",
            "(2.0)(8.314) = 16.628, times 0.693 gives 11.5 J/K.",
            "Positive, as expected: the gas has spread into a larger volume, so there are more arrangements available to it.",
            "The process is <b>reversible</b>, so the surroundings must change by exactly the opposite amount, Δ<i>S</i><sub>surr</sub> = −11.5 J/K, and Δ<i>S</i><sub>universe</sub> = 0. That zero is the signature of reversibility, and it is the only case where the inequality becomes an equality."
          ],
          "ans": "ΔS<sub>gas</sub> ≈ +11.5 J/K · ΔS<sub>universe</sub> = 0"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "0.50 kg of ice at 0 °C melts completely to water at 0 °C. The latent heat of fusion is <i>L</i> = 3.34 × 10<sup>5</sup> J/kg. Find the entropy change of the ice.",
          "steps": [
            "A phase change happens at constant temperature, so Δ<i>S</i> = <i>mL</i>/<i>T</i>. Convert the temperature first: 0 °C = 273 K.",
            "<i>mL</i> = (0.50)(3.34 × 10<sup>5</sup>) = 1.67 × 10<sup>5</sup> J.",
            "Δ<i>S</i> = 1.67 × 10<sup>5</sup>/273 ≈ 612 J/K.",
            "A large positive change, and physically obvious: melting injects heat at constant temperature while a rigid crystal lattice dissolves into a free-flowing liquid. Note the unit, J/K and not J. Entropy is not an energy."
          ],
          "ans": "ΔS ≈ +612 J/K"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A 2.0 kg block of metal at 400 K is dropped into a very large lake at 300 K and cools to 300 K. The metal's specific heat is <i>c</i> = 400 J/kg K. Find the entropy change of the block, of the lake and of the universe, and confirm the sign. Take ln(400/300) = 0.2877.",
          "steps": [
            "The block's own change, computed along a reversible heating path with the same endpoints: Δ<i>S</i> = <i>mc</i> ln(<i>T<sub>f</sub></i>/<i>T<sub>i</sub></i>) = (2.0)(400) ln(300/400) = 800 × (−0.2877) ≈ −230 J/K.",
            "Negative, which is entirely allowed: the block loses heat and becomes more ordered.",
            "The lake is a reservoir at a fixed 300 K and it <b>gains</b> the heat the block lost: <i>Q</i> = <i>mc</i>(<i>T<sub>i</sub></i> − <i>T<sub>f</sub></i>) = (2.0)(400)(100) = 8.0 × 10<sup>4</sup> J. So Δ<i>S</i><sub>lake</sub> = +8.0 × 10<sup>4</sup>/300 ≈ +267 J/K. Note the different rule: the block gets a logarithm because its own temperature changed; the lake gets a plain <i>Q</i>/<i>T</i> because its temperature did not.",
            "Δ<i>S</i><sub>universe</sub> = −230 + 267 ≈ +37 J/K, which is greater than zero.",
            "The block's entropy falls, but the lake's rises by more. Cooling across a finite temperature gap is irreversible and creates net entropy, exactly as the second law demands. A negative total would be a guaranteed sign error."
          ],
          "ans": "ΔS<sub>block</sub> ≈ −230 J/K · ΔS<sub>lake</sub> ≈ +267 J/K · ΔS<sub>universe</sub> ≈ +37 J/K"
        },
        {
          "t": "mcq",
          "q": "For any reversible process, the entropy change of the universe is:",
          "opts": [
            {
              "label": "positive",
              "nudge": "That is the irreversible case. Reversibility is precisely the boundary where the inequality becomes an equality."
            },
            {
              "label": "negative",
              "nudge": "Impossible for any process at all: it would be a direct violation of the second law."
            },
            {
              "label": "zero",
              "nudge": null
            },
            {
              "label": "infinite",
              "nudge": "Entropy changes are finite quantities in J/K, and nothing in the definition can diverge here."
            }
          ],
          "correct": 2,
          "solution": "ΔS for the universe is at least zero, with equality exactly for a reversible process. A reversible process leaves no trace anywhere, and creating no entropy is what that means quantitatively."
        },
        {
          "t": "mcq",
          "q": "The entropy change of an ideal gas in a reversible <i>adiabatic</i> process is:",
          "opts": [
            {
              "label": "nR ln(V<sub>f</sub>/V<sub>i</sub>)",
              "nudge": "That is the isothermal result. On an adiabat the temperature changes too, and its logarithm cancels the volume one exactly."
            },
            {
              "label": "zero",
              "nudge": null
            },
            {
              "label": "Q/T",
              "nudge": "Since Q is zero here, this expression is zero anyway, but quoting it as the answer misses that the adiabatic condition is what makes it so."
            },
            {
              "label": "negative",
              "nudge": "There is no basis for a sign: a reversible adiabatic creates no entropy in either direction."
            }
          ],
          "correct": 1,
          "solution": "Adiabatic means dQ<sub>rev</sub> = 0 at every step, so the integral of dQ<sub>rev</sub>/T is zero. A reversible adiabatic process is called isentropic for exactly this reason."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A Carnot engine works between 727 °C and 27 °C. Find its efficiency. Convert to kelvin first.",
              "a": "<i>T</i><sub>1</sub> = 727 + 273 = 1000 K and <i>T</i><sub>2</sub> = 27 + 273 = 300 K. η = 1 − 300/1000 = 0.70, that is 70%."
            },
            {
              "q": "[NEET] A Carnot engine has efficiency 40% when the sink is at 300 K. Find the source temperature.",
              "a": "<i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>/(1 − η) = 300/0.60 = 500 K."
            },
            {
              "q": "[JEE Main] A Carnot engine between 500 K and 400 K does 250 J of work per cycle. Find the heat absorbed and the heat rejected.",
              "a": "η = 1 − 400/500 = 0.20. <i>Q</i><sub>1</sub> = <i>W</i>/η = 250/0.20 = 1250 J and <i>Q</i><sub>2</sub> = 1250 − 250 = 1000 J. Check: 1000/1250 = 0.80 = 400/500."
            },
            {
              "q": "[JEE Advanced] An ideal Carnot refrigerator works between a cold space at 270 K and surroundings at 300 K. Find its COP and the minimum work needed to extract 600 J from the cold reservoir.",
              "a": "COP<sub>ref</sub> = <i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = 270/30 = 9. Then <i>W</i><sub>min</sub> = <i>Q</i><sub>2</sub>/COP = 600/9 ≈ 66.7 J. A COP of 9 is large because the temperature gap is small, which is exactly the regime in which an engine would be feeble."
            },
            {
              "q": "[JEE Advanced] A hot body at 500 K transfers 1000 J directly to a cold body at 400 K, both large enough that their temperatures barely change. Find Δ<i>S</i><sub>universe</sub> and confirm it is positive.",
              "a": "Δ<i>S</i><sub>hot</sub> = −1000/500 = −2.0 J/K and Δ<i>S</i><sub>cold</sub> = +1000/400 = +2.5 J/K. So Δ<i>S</i><sub>universe</sub> = +0.5 J/K, which is positive. The same heat is worth more disorder at the lower temperature, and that gap is the irreversibility."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting to convert to kelvin.</b> η = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> is valid <b>only</b> in kelvin. Feeding in Celsius gives nonsense and can even produce an efficiency above 1, which should be an instant alarm.",
            "<b>Thinking heat is exchanged on all four steps of the Carnot cycle.</b> Only the two isothermals exchange heat; the adiabatics are insulated and have <i>Q</i> = 0 by definition.",
            "<b>Believing a real engine can reach the Carnot efficiency.</b> Carnot is the reversible ceiling, and every real engine falls strictly below it. If a printed efficiency exceeds 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> for its reservoirs, the source is wrong.",
            "<b>Confusing raise <i>T</i><sub>1</sub> with lower <i>T</i><sub>2</sub>.</b> For equal temperature changes, lowering the sink raises the efficiency more than raising the source does, because <i>T</i><sub>2</sub> sits in the numerator of the fraction being subtracted.",
            "<b>Computing Δ<i>S</i> of an irreversible process from the actual heat.</b> The system's entropy change must be computed along a <b>reversible</b> path with the same endpoints. The actual heat belongs only in the surroundings' term, Δ<i>S</i><sub>surr</sub> = −<i>Q</i><sub>actual</sub>/<i>T</i><sub>surr</sub>.",
            "<b>Treating entropy as an energy.</b> Entropy has units J/K, not J. It measures disorder, not stored energy, and a system's entropy may legitimately fall as long as the universe's does not."
          ]
        },
        {
          "t": "protip",
          "html": "memorise the engine in one line: two isotherms, two adiabats, heat only on the isotherms, η = 1 − T<sub>2</sub>/T<sub>1</sub> in kelvin. get η from the temperatures first, then use W = ηQ<sub>1</sub> and Q<sub>2</sub> = Q<sub>1</sub> − W. whenever a claimed efficiency beats 1 − T<sub>2</sub>/T<sub>1</sub>, declare it impossible on the spot, no calculation needed. for compound machines, an engine driving a fridge or a cascade, the coupling condition is always an equality of work or of heat at the joint, and each device still obeys its own carnot relation. and for entropy, always split into system and surroundings, route the system through a convenient reversible path, and use Q<sub>actual</sub>/T<sub>res</sub> for the reservoir: a negative universe total is a guaranteed sign error."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "cycle: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression",
              "note": "heat only on the two isotherms; the loop runs clockwise for an engine"
            },
            {
              "f": "key ratio Q<sub>2</sub>/Q<sub>1</sub> = T<sub>2</sub>/T<sub>1</sub>, from V<sub>B</sub>/V<sub>A</sub> = V<sub>C</sub>/V<sub>D</sub>",
              "note": "the volume identity is what makes the two logarithms cancel"
            },
            {
              "f": "η<sub>Carnot</sub> = 1 − T<sub>2</sub>/T<sub>1</sub>, in kelvin",
              "note": "the maximum for those reservoirs, and lowering the sink beats raising the source"
            },
            {
              "f": "Carnot's theorem: nothing beats reversible, and all reversible engines tie",
              "note": "so η depends on the two temperatures alone, whatever the working substance"
            },
            {
              "f": "dS = dQ<sub>rev</sub>/T, unit J/K, and S is a state function",
              "note": "compute ΔS along any convenient reversible path with the same endpoints"
            },
            {
              "f": "ΔS<sub>universe</sub> = ΔS<sub>sys</sub> + ΔS<sub>surr</sub> ≥ 0",
              "note": "zero only if reversible; a reversible Carnot cycle creates exactly no entropy"
            }
          ],
          "aids": [
            "\"iso, adia, iso, adia, and heat only on the isos\"",
            "\"eta is one minus T cold over T hot, always in kelvin\"",
            "\"entropy is the universe's odometer: it only ever goes up\""
          ]
        }
      ]
    }
  ]
};

export default phy11Thermodynamics;
