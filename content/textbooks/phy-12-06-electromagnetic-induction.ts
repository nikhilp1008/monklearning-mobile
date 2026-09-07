/**
 * Chapter 06 · Electromagnetic Induction. Physics, Class 12.
 *
 * Restructured from pages 386 to 455 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-04-moving-charges-magnetism.ts, the just-finished sibling this
 * chapter leans on hardest: it is where the field B, the tesla, the flux
 * integral's cousin (electric flux, quoted separately below) and the Lorentz
 * force F = qv x B were all built, and this chapter uses every one of them
 * without re-deriving.
 *
 * FIVE TOPICS FROM FOUR SOURCE SUB-TOPICS, ONE SPLIT. The source runs four
 * sub-topics end to end: Magnetic Flux, Faraday's and Lenz's Laws (390-399),
 * Motional EMF and Eddy Currents (400-409), Self and Mutual Induction
 * (410-419), and AC Generator (420-427), each with its own Exam Relevance
 * line. Four sits at the validator's floor with no room to spare, and
 * Subtopic 03's own title carries an "and": self-induction and mutual
 * induction are two clean, independently derivable ideas (a solenoid's own
 * flux versus a neighbour's), and the brief for this chapter asks explicitly
 * that self-induction's definitions be "clean and quotable" for the
 * Alternating Current author working concurrently, who needs L on its own
 * before needing M. Splitting the source's Subtopic 03 into Topic 03
 * (Self-Induction) and Topic 04 (Mutual Induction) serves both the validator
 * (five sits inside its 4-to-6 window with room to spare) and that reader:
 * L, the henry, the solenoid derivation and U = LI^2/2 land in one
 * self-contained topic a citing chapter can point at without also pulling in
 * M, reciprocity and the coupling coefficient. Every other seam in the
 * source is already a topic boundary; nothing else was merged or split.
 *
 * Pages 428 to 432 are Chapter Synthesis & Master Revision: a one-idea
 * summary (flux changes three ways: change B, change A, change theta), a
 * master formula table, a "choosing the right tool" diagnostic, cross-topic
 * traps, three boss-level synthesis problems, an exam weightage map and a
 * revision checklist. None of this is its own topic -- it restates the four
 * subtopics rather than adding one -- but its one genuinely new artefact,
 * Figure 6.8 (the flux-changes-three-ways flow chart), closes Topic 05 below
 * as the chapter's own capstone, once every branch it names has actually
 * been taught. The three synthesis problems were recomputed as a check on
 * the chapter's own numbers (all matched; see CORRECTIONS) but are not
 * quoted directly, since equivalent or harder versions already sit in the
 * four subtopics' own worked examples.
 *
 * Pages 433 to 455 are the Round 2 Addendum: seven addenda (A to G) numbered
 * onward from the chapter's own Subtopic 04, covering the energy method for
 * motional emf, LR growth and decay, LC oscillations, BLV-chain inversions,
 * quantitative eddy currents, the flux-linkage method for hard geometries,
 * and the dot convention for coupled inductors in series or parallel. Per
 * the brief this is not a topic, and it was read in full rather than assumed
 * safe, exactly because the brief flags it as the one unreliable part of
 * these books. Two pieces of it earned a place after independent
 * recomputation:
 *
 *   - Addendum A's Example A.2 (a rod pulled at constant velocity on
 *     HORIZONTAL rails) is the genuine extension the chapter's own worked
 *     examples do not cover on their own terms: every motional-emf example
 *     in Subtopic 02 either falls under gravity or simply asks for "the
 *     force to keep it moving," never naming the trap directly. A.2 names it
 *     -- students reach for P = mgv out of habit and get zero, since there
 *     is no gravity component on a horizontal table -- and the resolution
 *     (P_ext = F_ext v = F_mag v = B^2 l^2 v^2/R = I^2R, exactly) is exactly
 *     the energy-conservation argument the chapter already makes for the
 *     vertical case. Recomputed independently (F = BIl = 0.40 N, P = Fv =
 *     I^2R = 0.80 W, both routes agreeing) and folded into Topic 02's
 *     mistakes list rather than presented as a full worked example, since
 *     the arithmetic is a straightforward re-use of the rod-on-rails chain
 *     already derived there.
 *   - Addendum G's dot convention for two coupled inductors in series
 *     (L_eq = L1 + L2 +/- 2M, sign set by whether the windings aid or
 *     oppose) is standard JEE Advanced material the source's own Subtopic 03
 *     names only as a caveat ("Combinations, negligible mutual coupling")
 *     without ever saying what changes when the coupling is NOT negligible.
 *     Re-derived independently in Topic 04 (V = L1 dI/dt + M dI/dt + L2 dI/dt
 *     +/- M dI/dt, so L_eq = L1 + L2 +/- 2M by inspection) once M itself has
 *     been defined, and used for one mcq and one mistakes item there.
 *
 *   Everything else in the addendum was read and left out on its own
 *   merits. Addendum B (LR growth/decay, tau = L/R) and Addendum C (LC
 *   oscillations) are the Alternating Current chapter's own opening
 *   material, not this one's -- using them here would pre-empt exactly the
 *   citation this chapter is meant to offer instead. Addendum D (BLV-chain
 *   algebraic inversions) restates Subtopic 02's own chain solved for a
 *   different unknown, teaching no new physics. Addendum E's eddy-current
 *   power-density estimate is an order-of-magnitude scaling argument built
 *   on an unstated loop-size approximation (P_loss ~ sigma t^2 (dB/dt)^2),
 *   one dimension past what CBSE, NEET or even JEE Advanced ask of this
 *   topic, which stays qualitative in the source's own main sections.
 *   Addendum F (flux-linkage method for hard geometries) is a restatement of
 *   the method Subtopic 01's own worked example 4 already demonstrates on
 *   the wire-and-loop problem (Figure 6.2): integrate a non-uniform field
 *   over a strip, differentiate the result. Nothing in it is a new tool.
 *
 * ERRATA REVIEWED (source pages 924 to 925, both read in full, not assumed).
 * The list covers exactly two entries in the entire book: a self-
 * contradictory Alternating Current practice question (Chapter 7, page 14,
 * where the printed data put the "first" frequency exactly AT resonance,
 * which cannot also be the lagging-phase condition the question describes)
 * and a swapped dark/bright condition in Wave Optics (Chapter 10, page 33).
 * Electromagnetic Induction has no listed erratum, confirmed rather than
 * assumed by reading the errata section itself.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key in Subtopics 01 to 04 and the Chapter Synthesis (all three boss-
 * level synthesis problems included) was recomputed independently from the
 * question's own stated data before this file went anywhere near the
 * printed answer. All of it checked out: every numeral in every answer key
 * this chapter actually draws from matches an independent recomputation, so
 * there is nothing to restate here from the four subtopics themselves --
 * unlike the sibling chapter, which found one orphaned micro-prefix, this
 * one's core content is clean.
 *
 *   The Round 2 Addendum, read "with particular suspicion" per the brief,
 *   turned up two defects, NEITHER carried into this chapter:
 *
 *   - Addendum A's own Practice Exercise 1 answer prints the terminal-
 *     velocity formula as "v_t = mLR / (B^2 l^2)" and then substitutes
 *     (0.080)(10)(0.40) for exactly that numerator -- but 10 is g, not any
 *     quantity the addendum calls L, and the correct formula (matching every
 *     other terminal-velocity line in this chapter, including the source's
 *     own Subtopic 02 Example 3 and Addendum A's own Example A.1) is
 *     v_t = mgR / (B^2 l^2). The final numeral, 3.6 m/s, is unaffected --
 *     independently recomputed as (0.080)(10)(0.40)/[(0.60)^2(0.50)^2] =
 *     0.32/0.09 = 3.6 m/s, matching the printed answer -- so only the
 *     symbolic line is corrupted, not the arithmetic. This is a new,
 *     single-character extraction failure not among the seven dialects the
 *     brief names: the italic g (U+1D454) came out as L. Not used below;
 *     recorded because it was found while verifying content this chapter
 *     does draw from the same addendum.
 *   - Addendum A's own Practice Exercise 2 is unanswerable exactly as
 *     printed: it asks for the external power to pull a rod at 3.0 m/s on
 *     rails of resistance 1.0 ohm in a field of 0.25 T, but never states the
 *     rod's length, and the printed answer key notices mid-derivation
 *     ("Needs l -- problem under-specified") and gives a formula in l rather
 *     than a number. A genuine authoring gap in the source, not extraction
 *     damage. Not used below.
 *
 * SOURCE DAMAGE. Five dialects confirmed in this range, plus the single new
 * one recorded above; nothing was transcribed from any of them without
 * independent reconstruction.
 *
 *   - MATHEMATICAL ALPHANUMERIC SYMBOLS, the dominant dialect here exactly
 *     as the brief predicts: a script count over the 386-455 range finds
 *     4,533 characters in U+1D400 to U+1D7FF, roughly one every fifteen
 *     words. Every variable in every formula and legend below was retyped in
 *     ordinary italic through the <i> tag rather than copied, since the
 *     codepoint itself renders as a blank box on device.
 *   - THE BACKSLASH-LETTER OPERATOR TOKENS, four of the five the brief
 *     names, each confirmed against the arithmetic the line is heading
 *     toward: "\n7" is the minus sign (source page 421, "epsilon = \n7
 *     dPhi/dt", decoding to "epsilon = - dPhi/dt", the derivative Faraday's
 *     law itself is built from), "\nN" is the multiplication/centred-dot
 *     sign (pervasive, e.g. source page 393 "200 \nN 3.14 \nN 10-3" decoding
 *     to the Example 1 emf computation), "\nA" is the dot product's centred
 *     dot (source page 391, "B \nA A" for B . A, and again in the flux
 *     integral B \nA dA), and "\nK" is the degree sign (source page 393,
 *     "cos 0 \nK", and five further occurrences across the range). "\nC",
 *     the ratio colon, does not occur in this range -- this chapter states
 *     no ratio that way. "\nH", the ellipsis, likewise does not occur.
 *   - OCTAL ESCAPES for a Wingdings-style checkbox glyph, "\003", appearing
 *     eleven times, every one of them at the start of a line in the Final
 *     Revision Checklist (source pages 431-432), immediately before an
 *     imperative like "State and apply" or "Derive". Decoded from position
 *     and repetition rather than content: eleven bullet points in a row,
 *     each opening a checklist item, is a tick-box glyph, not chapter text,
 *     and none of it was transcribed (the checklist itself is chapter
 *     synthesis, not a topic; see above).
 *   - U+20D7 BEFORE ITS LETTER rather than combining onto it, confirmed at
 *     110 occurrences across the range, every one immediately followed by
 *     the letter it should sit over (e.g. source page 391, the sequence
 *     "\n⃗\n𝐵" for what is meant to read as B with a vector arrow). Every
 *     vector in this chapter -- B, A, v, l, F -- is set as a plain italic
 *     letter per the brief's own convention, so this dialect never needed
 *     reconstruction beyond dropping the stray mark.
 *   - INTER-WORD SPACES VANISH at tight kerning, confirmed at source page
 *     396 ("everylater formula") and page 401 ("Other-wise"), both re-spaced
 *     by hand; neither sits in text this chapter quotes numerically, so
 *     only the surrounding prose needed correction, not any figure.
 *
 *   No consecutive-blank-page run was found: a per-page character count
 *   across all seventy pages in the 386-455 range shows every page carrying
 *   real content (the thinnest, page 416, still carries 211 characters, a
 *   short MCQ-options page, not an extraction gap), so pdftoppm rendering
 *   was not needed for this chapter.
 *
 * DIMENSIONS, worked in M L T A, current joining the base set exactly as the
 * sibling chapter set up. Fourteen formula lines checked, all consistent;
 * three quoted outright from the sibling rather than re-derived, since nine
 * of this chapter's own formulas are built directly on top of them.
 *
 *   - QUOTED: [B] = M T^-2 A^-1 and [mu0] = M L T^-2 A^-2, both from
 *     phy-12-04-moving-charges-magnetism.ts's own DIMENSIONS note. Every
 *     derivation below that starts from B = mu0 n I or B = mu0 I/2 pi r
 *     inherits these without re-deriving them.
 *   - Magnetic flux, Phi = BA: [B][L^2] = (M T^-2 A^-1)(L^2) = M L^2 T^-2
 *     A^-1. Matches the weber, and matches the sibling's own flux dimension
 *     exactly (Phi is not new to this chapter; B times an area was already
 *     computed there for the dipole moment's field).
 *   - Faraday's law, epsilon = -N dPhi/dt: [Phi]/[T] = M L^2 T^-3 A^-1. The
 *     volt. Matches every other emf in this chapter by construction, since
 *     every emf formula below (motional, self-induced, mutual, generator)
 *     is either this same law applied to a specific flux or the identical
 *     result reached by the Lorentz-force route.
 *   - Induced charge, q = N (Delta Phi)/R, with [R] = V/A = M L^2 T^-3 A^-2:
 *     [Phi]/[R] = (M L^2 T^-2 A^-1)/(M L^2 T^-3 A^-2) = T A, which is
 *     ampere-seconds, the coulomb. Matches charge's own dimension exactly
 *     ([q] = [I][T] = AT), confirming the chapter's own headline claim that
 *     q does not carry a leftover power of T from the "independent of time"
 *     result -- if it did, this check would fail.
 *   - Motional emf, epsilon = Bvl: [B][L T^-1][L] = (M T^-2 A^-1)(L T^-1)(L)
 *     = M L^2 T^-3 A^-1. The volt again, by the Lorentz-force route rather
 *     than Faraday's, confirming the chapter's own point that the two routes
 *     cannot help but agree.
 *   - Rod-on-rails retarding force, F = B^2 l^2 v/R: numerator (M T^-2
 *     A^-1)^2 (L^2)(L T^-1) = M^2 L^3 T^-5 A^-2; divided by [R] = M L^2 T^-3
 *     A^-2 gives M L T^-2. A force, as required of anything Newton's second
 *     law is about to balance against gravity.
 *   - Rotating-rod emf, epsilon = B omega l^2 / 2, with omega in T^-1 (an
 *     angle is dimensionless): (M T^-2 A^-1)(T^-1)(L^2) = M L^2 T^-3 A^-1.
 *     The volt, matching the straight-rod case exactly, as it must since
 *     Topic 02's own derivation builds the rotating rod from the same Bvl
 *     applied element by element.
 *   - Terminal velocity, v_term = mgR/(B^2 l^2): numerator [M][L T^-2][M L^2
 *     T^-3 A^-2] = M^2 L^3 T^-5 A^-2; denominator [M T^-2 A^-1]^2 [L^2] =
 *     M^2 L^2 T^-4 A^-2; ratio L T^-1. A speed, and note the two M's do not
 *     cancel by inspection until R's own M L^2 T^-3 A^-2 is expanded --
 *     exactly the trap the sibling chapter flagged for the cyclotron radius.
 *   - Self-inductance, definition L = N Phi/I: [Phi]/[A] = (M L^2 T^-2
 *     A^-1)/A = M L^2 T^-2 A^-2. The henry.
 *   - Solenoid self-inductance, L = mu0 n^2 A l, with n = turns per length
 *     in L^-1 and turns themselves dimensionless: [mu0][L^-2][L^2][L] =
 *     (M L T^-2 A^-2)(L) = M L^2 T^-2 A^-2. Matches the definition exactly,
 *     as any derived formula for L must.
 *   - Energy stored, U = LI^2/2: [L][A^2] = (M L^2 T^-2 A^-2)(A^2) = M L^2
 *     T^-2. Energy, matching work and matching the sibling's own dipole
 *     potential energy dimension.
 *   - Energy density, u_B = B^2/2 mu0: [B]^2/[mu0] = (M T^-2 A^-1)^2/(M L
 *     T^-2 A^-2) = (M^2 T^-4 A^-2)/(M L T^-2 A^-2) = M L^-1 T^-2, which is
 *     energy over volume ((M L^2 T^-2)/L^3), confirmed rather than assumed:
 *     the sibling chapter flagged this exact identity as failing its own
 *     dimensional check and left it out for that reason. Re-run here with
 *     the same substitution and it passes cleanly, which is the resolution
 *     that note promised but did not carry out -- the earlier failure was an
 *     artefact of folding the ampere into mechanical units rather than
 *     carrying it as an independent base dimension, not a real
 *     inconsistency in u_B = B^2/2 mu0 itself.
 *   - Mutual inductance, coaxial solenoids, M = mu0 n1 n2 A l: identical
 *     construction to the self-inductance solenoid line above, same result,
 *     M L^2 T^-2 A^-2, the henry, matching M's own definition N2 Phi2/I1 by
 *     the same argument as self-inductance.
 *   - AC generator emf, epsilon = N B A omega sin(omega t): [B][L^2][T^-1] =
 *     (M T^-2 A^-1)(L^2)(T^-1) = M L^2 T^-3 A^-1. The volt, matching every
 *     other emf in the chapter, as it must: this is still Faraday's law,
 *     applied to a flux that varies through the angle rather than through B
 *     or A.
 *   - Average power into a resistor, P_avg = epsilon0^2/2R: [M L^2 T^-3
 *     A^-1]^2/[M L^2 T^-3 A^-2] = (M^2 L^4 T^-6 A^-2)/(M L^2 T^-3 A^-2) =
 *     M L^2 T^-3. The watt.
 *
 *   Fourteen formulas checked (two quoted, twelve independently derived),
 *   all consistent, including the one the sibling chapter had flagged as
 *   failing and left unresolved.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Every induced emf from a hand-
 * scale motional or flux-change setup in this chapter (the coil in Example
 * 1, the rod on rails throughout Topic 02, the coaxial-solenoid pairs in
 * Topic 04) prints between a few hundred microvolts and a few volts, and
 * every self- or mutual inductance from a laboratory-scale coil prints in
 * the microhenry-to-millihenry range -- both exactly where the brief's own
 * plausibility bar sits (millihenries typical, millivolts typical, never a
 * calculator tail in whole volts or whole henries from a hand-wound coil).
 * The one deliberate exception is flagged as an exception rather than a
 * violation: Topic 03's own back-emf-at-a-switch worked example computes a
 * kilovolt-scale spike from a 200 mH solenoid interrupted in a millisecond,
 * and that IS physically correct -- it is the textbook reason a switch
 * sparks and the reason relay and solenoid circuits need a flyback diode,
 * not a hand-moved-magnet emf, so the two scales are not in tension.
 * Limiting cases used where they teach: the induced emf in every one of
 * Faraday's law's forms vanishes identically when the flux is constant,
 * whatever the flux's own size -- checked explicitly in Topic 01's own NEET
 * trap example, where a large field threading a loop that never leaves it
 * gives exactly zero emf, not a small one. The rod-on-rails force law is
 * checked at v = 0 (no motion, no separated charge, no force) and confirmed
 * to grow linearly rather than quadratically in v once a current actually
 * flows, which is exactly what keeps the retarding force finite at terminal
 * velocity rather than runaway. The AC generator's emf is checked at both
 * of its own extremes, omega t = 0 degrees (flux maximum, emf exactly zero)
 * and omega t = 90 degrees (flux exactly zero, emf at its peak), the
 * quarter-cycle phase relationship that is the topic's own headline result.
 *
 * SEAMS: what is quoted as already known, and from which file. The Lorentz
 * force F = qv x B, its magnitude qvB sin theta, and the tesla as its unit
 * are quoted from phy-12-04-moving-charges-magnetism.ts Topic 01, which
 * built B by exactly this relation; Topic 02 below starts a charge inside a
 * moving rod from that same formula rather than re-deriving what a moving
 * charge in a field feels. The structure of flux itself -- a dot product
 * with an area vector, Phi = (field) . A = (field)(A) cos theta, reducing to
 * zero at theta = 90 degrees and maximum at theta = 0 -- is quoted from
 * phy-12-01-electric-charges-fields.ts's own Electric Flux topic, which
 * built the identical river-through-a-net picture for Phi_E = EA cos theta;
 * Topic 01 below reuses the same mathematical object with B in place of E,
 * flagged explicitly rather than re-derived as if new. Newton's second law
 * and the work-energy theorem are quoted from Class 11 Physics (Laws of
 * Motion, Work Energy and Power) and used without re-derivation in Topic
 * 02's terminal-velocity and energy-balance arguments, the same force-
 * balance-at-zero-acceleration logic the sibling chapter already leaned on
 * for the cyclotron.
 *
 * FIGURES. All eight named figures drawn (6.1 through 6.8), plus three
 * designed: a rod sliding on rails sweeping area (Topic 02), which the brief
 * lists among this chapter's natural pictures but which the source itself
 * never draws on its own -- Figures 6.3 and 6.4 draw only the ROTATING rod,
 * so the more fundamental straight-line case that Topic 02's own opening
 * derivation depends on had no figure until this one; an inductor-switch-
 * battery circuit showing the back-emf spark at the instant of opening
 * (Topic 03), two chips for closed-and-rising versus opening-and-sparking,
 * observing the panel rule exactly as the brief demands; and a paired
 * flux-and-emf-against-time figure (Topic 05), the two curves the brief
 * names as a natural picture, placed where it earns its keep -- after the
 * sinusoidal-emf derivation, where it makes the 90-degree phase result
 * (Topic 05's own headline point) a picture rather than only an equation.
 * `into`/`outof` marks carry every field-through-the-page in the chapter
 * (Figures 6.1, 6.2, 6.3, 6.5, 6.6, and the designed rod-on-rails figure),
 * and circles that must render round carry an explicit `aspect` (Figures
 * 6.1, 6.3, 6.4 and 6.6, all built on the sibling's own proven 0.987 value
 * for a symmetric plot window, rather than re-derived by hand for each).
 * Figure 6.8, the chapter's own flux-changes-three-ways diagram, is drawn
 * as a `flow` figure with the eddy-current branch coming off Change A
 * (motional emf) rather than off the central box the source draws it from:
 * a deliberate departure from the source's own layout, since in THIS
 * chapter's topic split eddy currents live inside Topic 02 alongside
 * motional emf, and the figure should map onto this chapter's own five
 * topics, not the source's four subtopics.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12ElectromagneticInduction: Chapter = {
  "chapter": "06",
  "title": "Electromagnetic Induction",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Magnetic Flux, Faraday's and Lenz's Laws",
      "chip": "01 FARADAY & LENZ",
      "kalam": "a steady flux, however huge, induces nothing at all",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Magnetic Flux, Faraday's and Lenz's Laws</b><br>This is the foundation stone of the entire chapter. CBSE Boards almost always carry a 2 to 3 mark derivation or definition: flux, Faraday's law statement, Lenz's law as energy conservation. NEET reliably asks one conceptual question on the change-versus-magnitude trap. JEE Main carries one to two numericals on induced emf or charge, and JEE Advanced loves combining flux-by-integration in non-uniform fields with Lenz-law direction reasoning.<br><br><b>02 · Motional EMF and Eddy Currents</b><br>A heavily loaded topic. JEE Main and Advanced lean hard on motional emf: rod-on-rails, terminal-velocity and rotating-rod problems appear almost every year, often fused with mechanics. CBSE Boards favour a 2 to 3 mark derivation of ε = <i>Bvl</i> and short-answer questions on eddy currents. NEET reliably asks one conceptual eddy-current question: applications, laminations, the falling-magnet demonstration.<br><br><b>03 · Self-Induction</b><br>CBSE Boards almost always carry a 3-mark derivation of the self-inductance of a long solenoid. JEE Main loves numericals on <i>L</i> and the energy stored, <sup>1</sup>&frasl;<sub>2</sub><i>LI</i><sup>2</sup>. NEET asks crisp conceptual questions on the henry and the <i>L</i> proportional to <i>N</i>-squared rule. JEE Advanced fuses inductance with combinations of coupled coils and energy-density reasoning.<br><br><b>04 · Mutual Induction</b><br>CBSE Boards may ask the mutual inductance of two coaxial solenoids as a 3-mark derivation. JEE Main loves numericals on <i>M</i>, often chained to Faraday's law for the induced emf and charge. NEET asks what <i>M</i> depends on, and reliably tests reciprocity. JEE Advanced fuses reciprocity with the harder direction of a calculation, expecting you to spot the easier one first.<br><br><b>05 · AC Generator</b><br>A guaranteed CBSE Boards favourite: the derivation of ε = <i>NBAω</i> sin <i>ωt</i>, together with principle and construction, is a perennial 3-mark question. NEET asks crisp conceptuals on the coil position for maximum or zero emf and on slip rings. JEE Main carries numericals on peak and instantaneous emf and on the link between rotation speed and output frequency. JEE Advanced occasionally fuses it with AC-circuit power."
        },
        {
          "t": "p",
          "html": "Hold a rectangular picture frame out into falling rain. How much rain passes through it each second? Three things decide it: how heavy the rain is, how big the frame is, and how you tilt it. Face it flat, up into the rain, and a lot passes through. Tilt it edge-on and almost nothing does, even though the frame has not shrunk. That is exactly the idea behind <b>magnetic flux</b>, written Φ<sub>B</sub>, except it is field lines threading a loop instead of raindrops threading a frame. The central experimental fact of this whole chapter is delightfully simple: a coil sitting in a magnetic field does nothing at all by itself. Push a magnet toward it, and a current appears from nowhere, no battery in sight. Hold the magnet still, even right inside the coil, and the current vanishes. That current has to come from an emf, and the only thing that changed was the flux."
        },
        {
          "t": "think",
          "html": "picture a small coil on a table, wired to a galvanometer with a centre-zero needle. right now nothing is happening, the needle sits at zero. the instant you push a bar magnet toward the coil, the needle jumps. hold the magnet still, even right inside the coil, and the needle drops back to zero. pull it away, and the needle jumps the other way. it is not the presence of a field that makes electricity here, it is the change in flux through the coil."
        },
        {
          "t": "p",
          "html": "This is <b>Faraday's law</b>: whenever the flux linked with a circuit changes, an emf is induced, and the faster the flux changes, the bigger the emf. A slow, gentle change gives a feeble emf; a sudden, violent one gives a strong one. Nature adds a twist, and this is <b>Lenz's law</b>: the induced current always flows in whatever direction fights the change that created it. Push a magnet's north pole toward a coil, and the coil turns its near face into a north pole to repel the intruder. Pull the magnet away, and the coil switches to a south pole to cling on and resist the departure. Think of nature as a stubborn referee who hates being disturbed: whatever you try to do to the flux, the induced current pushes back. That opposition is not an arbitrary rule bolted onto Faraday's law. Suppose, for a moment, that the induced current instead <i>aided</i> the change: push a magnet toward a coil, and the induced current would make the coil attract the magnet, pulling it in faster, inducing a still larger current, attracting it harder still, an ever-accelerating magnet generating ever-growing electrical energy out of nothing. That is a perpetual motion machine, forbidden outright by conservation of energy. So the induced current must oppose the approach, meaning you have to do mechanical work to push the magnet in against it, and that work is exactly the source of the electrical energy that appears in the circuit. <b>Lenz's law is energy conservation, written into the minus sign of Faraday's law.</b> Hold onto that: every time this chapter asks for a direction, it is really asking what stops the universe from running downhill for free."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.1 · A MAGNET APPROACHES, THE COIL FIGHTS BACK",
          "chips": ["north pole approaching, induced current repels it"],
          "captions": [
            "The bar magnet's N pole moves toward the coil at velocity v. By Lenz's law the coil opposes the approaching flux by building its own field back toward the magnet: the coil's near face becomes an induced N pole, so the field at its centre points out of the page, toward the magnet, marked here by the dotted circle. The tangential arrows give the current's sense by the right-hand grip rule: curl the fingers the way the current runs and the thumb gives that outward field. Two like poles facing each other repel, so the force on the magnet, marked F, points back the way it came. Pull the magnet away instead and every arrow in this figure reverses at once."
          ],
          "frames": [
            {
              "x": [-2.6, 4], "y": [-2, 2], "axes": "none", "aspect": 0.619,
              "curves": [{ "c": "circle", "cx": 2.2, "cy": 0, "r": 1.3 }],
              "marks": [{ "x": 2.2, "y": 0, "glyph": "outof", "tone": "amber", "label": "B" }],
              "arrows": [
                { "from": [2.6, 1.3], "to": [1.8, 1.3], "tone": "amber", "label": "I", "at": "above" },
                { "from": [3.5, -0.4], "to": [3.5, 0.4], "tone": "amber" },
                { "from": [-1.2, 0.7], "to": [-0.3, 0.7], "tone": "ink", "label": "v" },
                { "from": [-1.2, -0.9], "to": [-2.1, -0.9], "tone": "ink", "label": "F" }
              ],
              "polys": [{ "pts": [[-1.8, -0.4], [-0.6, -0.4], [-0.6, 0.4], [-1.8, 0.4]], "close": true, "tone": "soft" }],
              "labels": [
                { "x": -0.9, "y": 0, "text": "N" },
                { "x": -1.5, "y": 0, "text": "S" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Magnetic flux",
          "html": "Φ<sub>B</sub> = <i>B</i> · <i>A</i> = <i>BA</i> cos θ for a flat surface of area <i>A</i> in a uniform field <i>B</i>, where θ is the angle between <i>B</i> and the area vector <i>A</i>, the vector perpendicular to the surface with magnitude equal to the area. For a non-uniform field, or a curved surface, chop it into patches so tiny that <i>B</i> is effectively constant over each one and add: Φ<sub>B</sub> = ∫<i>B</i> · <i>dA</i>. SI unit: the weber (Wb), 1 Wb = 1 T m<sup>2</sup> = 1 V s. Dimensional formula: M L<sup>2</sup> T<sup>-2</sup> A<sup>-1</sup>. This is the identical mathematical object as electric flux Φ<sub>E</sub> = <i>EA</i> cos θ, with <i>B</i> written where <i>E</i> stood before."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MAGNETIC FLUX",
          "tag": "how much field actually threads the loop",
          "main": "Φ<sub>B</sub> = <i>B</i> · <i>A</i> = <i>BA</i> cos θ (uniform)<br>Φ<sub>B</sub> = ∫<i>B</i> · <i>dA</i> (non-uniform or curved)",
          "legend": [
            "<i>B</i> is the field magnitude, in tesla",
            "<i>A</i> is the area vector: magnitude the surface area in m<sup>2</sup>, direction along the outward normal",
            "θ is measured between <i>B</i> and the area vector <i>A</i>, never between <i>B</i> and the plane of the loop itself"
          ],
          "note": "θ = 0 gives the maximum flux BA, face-on to the field; θ = 90 degrees gives zero, edge-on, however strong the field. If a problem instead states the angle α between the field and the PLANE of the loop, convert first: θ = 90 degrees minus α, so Φ = BA sin α."
        },
        {
          "t": "think",
          "html": "picture opening a laptop. the angle you care about for how much light from the screen reaches your eyes is measured from the screen's own face, not from the hinge. flux works the same way: theta sits between the field and the surface's NORMAL, the invisible pole sticking straight out of the face, never between the field and the plane you can actually see drawn on the page."
        },
        {
          "t": "def",
          "term": "Faraday's law of electromagnetic induction",
          "html": "For a single loop: ε = -<i>d</i>Φ<sub>B</sub>/<i>dt</i>. For a coil of <i>N</i> turns, each linking the same flux: ε = -<i>N</i> <i>d</i>Φ<sub>B</sub>/<i>dt</i>. Induced current: <i>I</i> = |ε|/<i>R</i>. The minus sign is not a number to carry into arithmetic; it is Lenz's law written as bookkeeping, telling you the induced emf opposes the change producing it. Compute the magnitude from the formula, then fix the direction separately by Lenz's law."
        },
        {
          "t": "think",
          "html": "quoted from moving charges and magnetism: the closed surface integral of B over any surface is always zero, no exceptions. magnetic field lines never start or stop anywhere, they only ever loop back on themselves. that single fact is why every field-through-the-page mark in this chapter's figures always has a return path somewhere else in the picture, even when the figure does not bother drawing it."
        },
        {
          "t": "def",
          "term": "Lenz's law: the physical content of that minus sign",
          "html": "The induced current always flows so as to oppose the change in flux that produced it, never to aid it. This is not a separate rule bolted onto Faraday's law; it is conservation of energy, since an induced effect that aided its own cause would let a system feed its own growth without limit. Two consequences worth holding onto for the rest of this chapter: opposing the CHANGE is not the same as opposing the field itself (a steady field, however strong, produces no current to oppose anything), and the work an external agent does against this opposition is exactly where the induced electrical energy comes from."
        },
        {
          "t": "defgrid",
          "title": "Units and dimensions carried forward",
          "tag": "these three feed every later topic in this chapter",
          "rows": [
            { "k": "Magnetic flux Φ<sub>B</sub>", "v": "weber (Wb); 1 Wb = 1 T m² = 1 V s; dimension M L²T⁻²A⁻¹" },
            { "k": "Induced emf ε", "v": "volt (V); dimension M L²T⁻³A⁻¹" },
            { "k": "Induced charge q", "v": "coulomb (C); dimension AT, the same as any charge" }
          ]
        },
        {
          "t": "def",
          "term": "Faraday's law in terms of the induced electric field",
          "html": "A changing flux does more than drive a current through a wire loop: it creates a genuine induced electric field in the surrounding space, present even where no wire exists at all. ∮<i>E</i> · <i>dl</i> = -<i>d</i>Φ<sub>B</sub>/<i>dt</i>, the line integral of this induced <i>E</i> around any closed path, equals minus the rate of change of flux through it. For a conducting loop this reduces to ε = -<i>d</i>Φ<sub>B</sub>/<i>dt</i>, with <i>E</i> doing the work of separating charge; strip the wire away and the circulating <i>E</i> field is still genuinely there, simply with nothing to push."
        },
        {
          "t": "think",
          "html": "even in an empty patch of vacuum with no wire anywhere nearby, a changing magnetic field creates a real, physically present electric field, circulating around wherever the flux is changing. a loop of wire is not what CREATES that field, it only gives you a convenient path to measure it with a voltmeter."
        },
        {
          "t": "proc",
          "title": "Building the flux integral, uniform to non-uniform",
          "steps": [
            "<b>Start flat and uniform.</b> A surface of area <i>A</i> sits in a field <i>B</i>, with the area vector making angle θ with the field. Only the component of <i>B</i> along the normal, <i>B</i> cos θ, actually threads the surface; the in-plane component slides past and contributes nothing. Φ<sub>B</sub> = (<i>B</i> cos θ)<i>A</i> = <i>B</i> · <i>A</i>.",
            "<b>Let the field vary.</b> Chop the surface into patches <i>dA</i>, each small enough that <i>B</i> is effectively constant across it. The flux through one patch is <i>B</i> · <i>dA</i>.",
            "<b>Sum the patches.</b> As the patches shrink to zero the sum becomes an integral: Φ<sub>B</sub> = ∫<i>B</i> · <i>dA</i>. This is the form to reach for whenever <i>B</i> changes from point to point across the surface, the central trick in JEE Advanced flux problems (Worked Example 4 below is exactly this)."
          ]
        },
        {
          "t": "proc",
          "title": "Why the induced current must oppose the change",
          "steps": [
            "<b>Suppose, for contradiction, that it aided the change instead.</b> Push a magnet toward a coil; if the induced current attracted the magnet rather than repelled it, the magnet would accelerate in faster.",
            "<b>Follow the runaway.</b> A faster approach means a faster-changing flux, which induces a still larger current, which attracts the magnet harder still, which speeds it up further.",
            "<b>Name what this produces.</b> An ever-accelerating magnet delivering ever-growing electrical energy, with no external work put in anywhere. That is a perpetual motion machine of the first kind, forbidden by conservation of energy.",
            "<b>So the current must oppose the change.</b> Pushing the magnet in now costs mechanical work, done against the coil's own repulsion, and that work is exactly the electrical energy that appears in the circuit. Lenz's law is not an extra postulate; it is what conservation of energy demands of the minus sign already sitting in Faraday's law."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · INDUCED CHARGE DOES NOT DEPEND ON TIME",
          "steps": [
            {
              "eq": "<i>dq</i> = <i>I dt</i> = (ε/<i>R</i>) <i>dt</i>",
              "why": "The induced current is I = ε/R, so the charge that flows in a small time dt is just current times time."
            },
            {
              "eq": "<i>dq</i> = -(<i>N</i>/<i>R</i>)(<i>d</i>Φ<sub>B</sub>/<i>dt</i>) <i>dt</i> = -(<i>N</i>/<i>R</i>) <i>d</i>Φ<sub>B</sub>",
              "why": "Substitute Faraday's law for ε. The dt in the numerator and denominator cancel, leaving charge in terms of a small change in flux, not a small change in time."
            },
            {
              "eq": "<i>q</i> = -(<i>N</i>/<i>R</i>) ∫ <i>d</i>Φ<sub>B</sub> from Φ<sub>i</sub> to Φ<sub>f</sub> = <i>N</i>(Φ<sub>i</sub> - Φ<sub>f</sub>)/<i>R</i> = <i>N</i>|ΔΦ<sub>B</sub>|/<i>R</i>",
              "why": "Integrate from the initial to the final flux. Time itself has dropped out entirely: only the NET change in flux survives the integration."
            }
          ]
        },
        {
          "t": "think",
          "html": "notice what q = N|deltaphi|/R buys you: you can measure it with a simple galvanometer even if you have no stopwatch at all, no idea how fast the change happened, only the net swing. that is exactly why real ballistic galvanometers are calibrated to read total charge from a single kick of the needle, not a current, and it is the whole reason this one result gets its own boxed formula instead of living inside faraday's law."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.2 · A NON-UNIFORM FIELD NEEDS AN INTEGRAL",
          "chips": ["a loop beside a long wire, one strip at a time"],
          "captions": [
            "A long straight wire carries current I upward. To its right, a rectangular loop of width a and height L lies in the same plane, its near edge a distance c from the wire. The wire's own field falls off as 1 over r, so it is stronger on the near strips of the loop than the far ones: BA cos θ cannot be used directly. Chop the loop into thin vertical strips of width dr at distance r from the wire, one is shaded here, treat B as constant across that one strip, and integrate from r = c to r = c + a. Because the current runs upward, the field at every point inside the loop points into the page, marked by the crossed circles."
          ],
          "frames": [
            {
              "x": [-0.8, 4.4], "y": [-2.6, 2.8], "axes": "none",
              "segments": [
                { "from": [0, -2.4], "to": [0, 2.4] },
                { "from": [1, -1.6], "to": [3, -1.6] },
                { "from": [1, 1.6], "to": [3, 1.6] },
                { "from": [1, -1.6], "to": [1, 1.6] },
                { "from": [3, -1.6], "to": [3, 1.6] },
                { "from": [0, -1.9], "to": [1, -1.9], "dash": true, "soft": true, "label": "c", "at": "mid" },
                { "from": [1, -2.1], "to": [3, -2.1], "dash": true, "soft": true, "label": "a", "at": "mid" }
              ],
              "polys": [{ "pts": [[1.9, -1.6], [2.1, -1.6], [2.1, 1.6], [1.9, 1.6]], "fill": "wash", "tone": "soft" }],
              "arrows": [{ "from": [0, 1.9], "to": [0, 2.5], "label": "I", "at": "above" }],
              "marks": [
                { "x": 2, "y": 0.9, "glyph": "into", "tone": "amber", "label": "B" },
                { "x": 2, "y": 0, "glyph": "into", "tone": "amber" },
                { "x": 2, "y": -0.9, "glyph": "into", "tone": "amber" }
              ],
              "labels": [
                { "x": 2, "y": 1.9, "text": "dr" },
                { "x": 3.4, "y": 0, "text": "L" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Every worked problem below is one of three families: a coil sitting in a field that changes in time (read off <i>dB/dt</i> or <i>dΦ/dt</i> directly), a coil or loop whose enclosed flux does not actually change even though something in the picture is moving, or a non-uniform field that forces the integral above. Ask first whether the flux is changing at all; that single question, more than any formula, is what separates a thirty-second answer from a wrong one."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A circular coil of N = 200 turns and radius r = 5.0 cm is placed with its plane perpendicular to a uniform field B = 0.40 T. The field is then reduced steadily to zero in 0.20 s. Find (a) the initial flux through one turn, and (b) the induced emf.",
          "steps": [
            "Given: N = 200, r = 5.0 cm = 0.050 m, B = 0.40 T, θ = 0 degrees, Δt = 0.20 s.",
            "Area of one turn: A = πr² = π(0.050)² = 7.85 × 10⁻³ m². Initial flux: Φ<sub>B</sub> = BA cos 0° = (0.40)(7.85 × 10⁻³) = 3.14 × 10⁻³ Wb.",
            "The flux falls from Φ<sub>B</sub> to zero, so |ΔΦ<sub>B</sub>| = 3.14 × 10⁻³ Wb. |ε| = N|ΔΦ<sub>B</sub>|/Δt = 200 × (3.14 × 10⁻³)/0.20."
          ],
          "ans": "Φ<sub>B</sub> = 3.14 × 10⁻³ Wb per turn; the induced emf is 3.14 V."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A square conducting loop of area 100 cm² lies entirely inside a large region of uniform field 0.50 T, directed into the loop. The loop is pushed across the region at a steady 2.0 m/s, never crossing the boundary. What is the induced emf?",
          "steps": [
            "The trap: seeing a moving loop in a field and instantly writing ε = Blv = 0.50 × 0.10 × 2.0 = 0.10 V.",
            "The fast, correct read: ask one question first, does the flux actually change? The loop stays fully inside a UNIFORM field the whole time, so the number of field lines threading it never changes.",
            "dΦ<sub>B</sub>/dt = 0 exactly, whatever the loop's speed. Motional emf only appears at a boundary, where the enclosed area of field is actually changing."
          ],
          "ans": "ε = 0. Motion alone induces nothing; only a changing enclosed flux does."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A coil of N = 50 turns, area A = 200 cm², and total resistance R = 10 Ω sits with its plane perpendicular to a field decreasing uniformly as B(t) = (0.60 − 0.20t) T. Find (a) the induced emf, (b) the induced current, and (c) the total heat dissipated by the time the field reaches zero.",
          "steps": [
            "A = 200 cm² = 0.020 m², and dB/dt = −0.20 T/s (constant).",
            "|ε| = NA|dB/dt| = 50 × 0.020 × 0.20 = 0.20 V. I = ε/R = 0.20/10 = 0.020 A = 20 mA.",
            "Time to reach zero: t = 0.60/0.20 = 3.0 s. Since ε (and so I) is constant throughout, Q = I²Rt = (0.020)²(10)(3.0) = 0.012 J."
          ],
          "ans": "ε = 0.20 V, I = 20 mA, and the coil dissipates 12 mJ of heat."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A rectangular loop, long side L = 0.30 m parallel to a long straight wire carrying current I, lies in the wire's own plane. The near side sits a distance c = 0.020 m from the wire; the loop's width, measured away from the wire, is a = 0.080 m. With I₀ = 10 A, find the flux through the loop; then, if the current increases at dI/dt = 25 A/s, find the induced emf.",
          "steps": [
            "The wire's field B(r) = μ₀I/2πr is non-uniform across the loop, so BA cos θ cannot be used directly. Take a strip of width dr at distance r: dΦ = B(r)L dr, and integrate from r = c to r = c + a.",
            "Φ<sub>B</sub> = (μ₀I₀L/2π) ln[(c + a)/c]. With μ₀I₀L/2π = (4π × 10⁻⁷)(10)(0.30)/2π = 6.0 × 10⁻⁷, and ln(0.100/0.020) = ln 5 = 1.609:",
            "Φ<sub>B</sub> = (6.0 × 10⁻⁷)(1.609) ≈ 9.7 × 10⁻⁷ Wb ≈ 0.97 μWb. Since Φ<sub>B</sub> is proportional to I, |ε| = (μ₀L/2π) ln[(c+a)/c] × (dI/dt) = (6.0 × 10⁻⁸)(1.609)(25)."
          ],
          "ans": "Φ<sub>B</sub> ≈ 0.97 μWb; |ε| ≈ 2.4 μV, with the induced current circulating so as to oppose the wire's growing flux through the loop."
        },
        {
          "t": "p",
          "html": "Notice the scale of that last answer: microweber, microvolt. Every induced emf in this topic, and in the rest of this chapter's hand-scale examples, lands somewhere between a few hundred microvolts and a few volts, never in whole kilovolts from an ordinary coil. That is not a coincidence worth forgetting: if an answer to a similar problem ever comes out in kilovolts from a hand-wound loop or a slowly moved magnet, a decimal point or a prefix has gone missing upstream, not the physics."
        },
        {
          "t": "mcq",
          "q": "The dimensional formula of magnetic flux is:",
          "opts": [
            { "label": "[M T⁻² A⁻¹]", "nudge": "This is the dimension of B itself, the field. Flux needs an extra area, [L²], multiplied in." },
            { "label": "[M L² T⁻² A⁻¹]", "nudge": null },
            { "label": "[M L² T⁻³ A⁻¹]", "nudge": "This is the dimension of emf (the volt), one power of T⁻¹ beyond flux: it is easy to confuse flux with its own rate of change." },
            { "label": "[M L² T⁻¹ A⁻¹]", "nudge": "A plausible-looking distractor with the wrong power of T; no quantity in this chapter carries this dimension." }
          ],
          "correct": 1,
          "solution": "Φ = BA. B carries [M T⁻² A⁻¹] and area contributes [L²], giving [M L² T⁻² A⁻¹]."
        },
        {
          "t": "mcq",
          "q": "The magnetic flux through a coil is held constant at 8 Wb. The emf induced in the coil is:",
          "opts": [
            { "label": "8 V", "nudge": "Reads \"8 Wb\" as if it were already \"8 V\", the single most common confusion in the whole chapter: flux is not emf." },
            { "label": "0", "nudge": null },
            { "label": "8 V divided by the resistance", "nudge": "Mixes up emf with current; even so, a zero emf would give zero current, not a nonzero one." },
            { "label": "Cannot be determined without the time taken", "nudge": "Wrongly assumes more information is needed; a CONSTANT flux already fixes the answer at zero, whatever the time." }
          ],
          "correct": 1,
          "solution": "Faraday's law depends on the rate of change of flux. A constant flux gives dΦ<sub>B</sub>/dt = 0, so ε = 0, regardless of how large the flux itself is."
        },
        {
          "t": "mcq",
          "q": "The north pole of a bar magnet is lowered toward a horizontal conducting ring from directly above. As seen from above, the induced current and the force on the magnet are:",
          "opts": [
            { "label": "Clockwise; attractive", "nudge": "Gets the current sense wrong: a clockwise current as seen from above would AID the incoming flux, which Lenz's law forbids." },
            { "label": "Anticlockwise; repulsive", "nudge": null },
            { "label": "Clockwise; repulsive", "nudge": "The direction is wrong even though the force is right; a clockwise current here would aid, not oppose, the approaching flux." },
            { "label": "Anticlockwise; attractive", "nudge": "Gets the opposing current right but mislabels the force as attractive; attraction would HELP the magnet approach, which is energetically forbidden." }
          ],
          "correct": 1,
          "solution": "The downward-approaching N pole increases the downward flux through the ring. By Lenz's law the ring opposes this by presenting its own N pole upward, which by the right-hand rule means the current runs anticlockwise as seen from above. Two N poles facing each other repel."
        },
        {
          "t": "mcq",
          "q": "A change in flux ΔΦ occurs through a coil of resistance R. The total charge that flows depends on:",
          "opts": [
            { "label": "The time taken for the change", "nudge": "Timing sets the instantaneous current and emf, but these effects cancel exactly on integration; the total charge does not carry any leftover time dependence." },
            { "label": "Only ΔΦ and R", "nudge": null },
            { "label": "The rate of change of flux", "nudge": "The rate controls the current at each instant, not the total charge that eventually flows." },
            { "label": "The precise way the flux varies in time", "nudge": "A fast change gives a brief large current and a slow change a prolonged small one; the two integrate to the identical total charge either way." }
          ],
          "correct": 1,
          "solution": "From q = N|ΔΦ|/R, the charge is set entirely by the net flux change and the resistance, independent of how the change unfolded in time."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A coil of 150 turns and area 0.025 m² is held with its plane perpendicular to a uniform field that increases steadily from 0.10 T to 0.50 T in 2.0 s. Find the induced emf.", "a": "ε = NA(ΔB/Δt) = 150 × 0.025 × (0.40/2.0) = 0.75 V." },
            { "q": "[NEET] A circular loop is rotated in a uniform field. State the orientation at which the flux through it is (i) maximum, (ii) zero, and the orientation at which the induced emf is maximum.", "a": "(i) Plane perpendicular to B (area vector along B): flux maximum. (ii) Plane parallel to B: flux zero. The induced emf is maximum when the plane CONTAINS B, the flux-zero orientation, since that is where the flux is changing fastest." },
            { "q": "[JEE Main] A flat coil of 80 turns and area 0.015 m² has resistance 4.0 Ω. The flux per turn through it reverses from +6.0 × 10⁻³ Wb to −6.0 × 10⁻³ Wb. Find the total charge that flows.", "a": "|ΔΦ| per turn = 1.2 × 10⁻² Wb. q = N|ΔΦ|/R = 80 × (1.2 × 10⁻²)/4.0 = 0.24 C." },
            { "q": "[JEE Main] A square loop of side 0.20 m lies in a region where a field B = 0.80 T makes 30 degrees with the PLANE of the loop. Compute the flux through it.", "a": "θ from the normal is 90 − 30 = 60 degrees, so Φ = BA cos 60° = BA sin 30° = 0.80 × 0.040 × 0.5 = 1.6 × 10⁻² Wb." },
            { "q": "[JEE Advanced] A field perpendicular to a circular loop of radius R and resistance r varies as B(t) = B₀ sin(ωt). Find the induced current as a function of time, and the instant in the first quarter-cycle at which it is maximum.", "a": "I(t) = (πR²B₀ω/r) cos(ωt), maximum at t = 0, the instant the flux is momentarily unchanging in sign but changing fastest in magnitude." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Mistaking flux for emf. A large flux does not mean a large emf; only a CHANGING flux induces one. Whenever a flux value appears, ask immediately whether it is changing before doing anything else.",
            "The angle confusion. θ in Φ = BA cos θ is measured from the area VECTOR (the normal), never from the plane of the loop. If a problem gives the angle α to the plane instead, convert: θ = 90° − α, so Φ = BA sin α.",
            "Dropping the number of turns N. For an N-turn coil the emf is N times bigger, ε = -N dΦ<sub>B</sub>/dt. Forgetting N is a guaranteed mark loss in a numerical.",
            "Misreading the minus sign as a number. It is a direction rule (Lenz's law), not a quantity to carry through arithmetic. Compute the magnitude first, then assign direction separately.",
            "Treating Lenz's law as a rule to memorise rather than a consequence of energy conservation. \"The current opposes the change\" is not an arbitrary fact; it is the only outcome that does not generate energy from nothing, and remembering WHY makes the direction impossible to get backwards under exam pressure."
          ]
        },
        {
          "t": "protip",
          "html": "for any \"charge that flows\" question, skip emf and current entirely and go straight to q = N|deltaphi|/R. for \"field at angle alpha to the plane,\" reach for sin alpha directly instead of converting to the normal angle every time. and whenever a direction question stalls you, stop reaching for a memorised hand rule first and ask instead: which direction would make the universe generate free energy? the opposite of that is always the answer."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Φ<sub>B</sub> = B · A = BA cos θ; Φ<sub>B</sub> = ∫B · dA", "note": "flux, uniform and non-uniform; unit weber, dimension M L²T⁻²A⁻¹" },
            { "f": "ε = -N dΦ<sub>B</sub>/dt", "note": "Faraday's law; the minus sign is Lenz's law, not a number" },
            { "f": "q = N|ΔΦ<sub>B</sub>|/R", "note": "total induced charge, independent of how fast the change happened" },
            { "f": "Lenz's law", "note": "induced effects oppose the change that produced them; energy conservation in disguise" }
          ],
          "aids": ["a steady flux, however huge, induces nothing", "theta is from the normal, not the plane", "the minus sign is nature refusing free energy"]
        }
      ]
    },
    {
      "n": "02",
      "title": "Motional EMF and Eddy Currents",
      "chip": "02 MOTIONAL EMF",
      "kalam": "on horizontal rails there is no gravity to blame",
      "blocks": [
        {
          "t": "p",
          "html": "In Topic 01 the flux changed because the field changed. Now hold the field steady and move the conductor instead, and the same magic happens: an emf appears, with no battery and no changing <i>B</i> anywhere in sight. A metal rod is packed with free electrons; picture them as passengers standing in a moving local train, the rod itself. The instant the train slides sideways through a magnetic field, every passenger feels an invisible shove along the length of the carriage, the Lorentz force <i>F</i> = <i>qv</i> × <i>B</i> quoted from Moving Charges and Magnetism. Every free charge in the rod is pushed toward one end and piles up there, leaving the other end oppositely charged. The rod has spontaneously turned into a tiny battery, with a voltage across its own ends. This is <b>motional emf</b>: emf generated by motion rather than by a time-varying field."
        },
        {
          "t": "think",
          "html": "lay two parallel rails on a table, bridge them with a sliding rod, and close the circuit with a bulb. push the rod through a vertical field and the bulb glows, you have built the simplest possible generator. the moment you stop pushing, the current dies at once. and while you push, you can feel a resistance fighting you, that is lenz's law again, the induced current creating a force that opposes your own push."
        },
        {
          "t": "p",
          "html": "Everything above assumed the induced charges flow along a neat thin wire. But what if the conductor is not a wire at all, but a solid slab of metal moving through, or sitting in, a changing field? The charges still want to circulate, but now they have a whole three-dimensional block to swirl around in, forming closed whirlpools of current throughout the bulk of the metal, exactly like the eddies behind a rock in a flowing river. These are <b>eddy currents</b>. Like every induced current, they obey Lenz's law: they oppose the change that creates them. Drop a strong magnet down a copper pipe and it drifts down in slow motion, as if falling through honey, the eddy currents in the pipe wall fighting its descent; try the same with a PVC pipe and it free-falls, since an insulator carries no eddy currents at all. These same swirling currents dump energy as heat, <i>I</i><sup>2</sup><i>R</i>, a nuisance in a transformer core, fought by lamination (thin insulated sheets that raise the resistance of the eddy-current paths without touching the useful flux), and the entire point of an induction cooktop."
        },
        {
          "t": "def",
          "term": "Why a bulk conductor needs no external circuit",
          "html": "A thin wire loop needs a complete external path for current to flow at all. A solid conducting slab does not: the induced charges form their OWN closed loops entirely within the metal itself, since the conductor is its own return path in every direction. This is exactly why eddy currents appear inside a solid block with no wires attached anywhere, and why cutting slots into a metal plate (breaking those internal loops) is another way, alongside lamination, to fight them."
        },
        {
          "t": "defgrid",
          "title": "Eddy currents: where they help, where they hurt",
          "tag": "same swirling current, opposite verdicts",
          "rows": [
            { "k": "Magnetic braking", "v": "trains, roller-coaster brakes; a moving conductor sweeps a field and the drag itself does the stopping" },
            { "k": "Induction furnace and cooktop", "v": "deliberately maximised heating, a rapidly alternating field driving strong eddy currents in the metal itself" },
            { "k": "Transformer and motor cores", "v": "unwanted I²R loss, fought by laminating the core into thin, insulated sheets" },
            { "k": "Galvanometer damping", "v": "a swinging needle's own induced eddy currents bring it to rest quickly, without overshoot" }
          ]
        },
        {
          "t": "think",
          "html": "an induction cooktop is the copper-pipe demonstration run in reverse, on purpose. the falling magnet's job there was to slow ITSELF down; the cooktop's rapidly alternating field is built specifically to drive strong eddy currents in the pan and let those currents do the heating, i squared r losses that were a nuisance in one context become the entire point in the other."
        },
        {
          "t": "p",
          "html": "Every current in this topic, sliding rod or swirling eddy, is still the same lazy referee from Topic 01. Push the rod, and the induced current builds a force that resists your push; drop the magnet down the copper tube, and the eddy currents build a drag that resists its fall. Neither outcome is a new rule bolted onto Lenz's law, it is the same minus sign, the same refusal to hand out free energy, simply wearing a different geometry each time."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A ROD SLIDES, THE LOOP GROWS",
          "chips": ["the fundamental picture: motion sweeps area, area sweeps flux"],
          "captions": [
            "A rod slides at velocity v along two horizontal rails, closing a circuit through a resistor R. The field B points into the page, marked by the crossed circles, uniformly over the shaded region the rod has already swept. Free positive charge in the rod feels qv × B along the rod's own length and piles up at the top, marked +, leaving the bottom, marked −; that separated charge is the motional emf ε = Bvl. Current I flows around the completed circuit, shown along the bottom rail, driven by exactly that emf. As the rod moves right, the shaded swept area, and so the flux through the loop, keeps growing: this is the same event Topic 01 already named, a changing flux, just produced by a moving boundary instead of a changing field."
          ],
          "frames": [
            {
              "x": [-2.9, 5.3], "y": [-3.2, 3.4], "axes": "none",
              "segments": [
                { "from": [-0.8, 2.4], "to": [4.6, 2.4] },
                { "from": [-0.8, 0], "to": [4.6, 0] },
                { "from": [0, -1.4], "to": [0, -2.6] },
                { "from": [-1.8, 0.4], "to": [-1.8, -2.6], "soft": true },
                { "from": [-1.8, -2.6], "to": [0, -2.6], "soft": true },
                { "from": [-0.8, 0], "to": [-0.8, 2.4] }
              ],
              "polys": [{ "pts": [[-0.8, 0], [3, 0], [3, 2.4], [-0.8, 2.4]], "fill": "wash", "tone": "soft" }],
              "arrows": [
                { "from": [3, 1.2], "to": [4.4, 1.2], "tone": "ink", "label": "v" },
                { "from": [0.5, -0.55], "to": [2.3, -0.55], "tone": "amber", "label": "I", "at": "below" }
              ],
              "marks": [
                { "x": 0.2, "y": 1.8, "glyph": "into", "tone": "amber", "label": "B" },
                { "x": 0.2, "y": 0.6, "glyph": "into", "tone": "amber" },
                { "x": 1.6, "y": 1.2, "glyph": "into", "tone": "amber" },
                { "x": 3, "y": 2.55, "glyph": "plus" },
                { "x": 3, "y": -0.2, "glyph": "minus" }
              ],
              "labels": [{ "x": -1.4, "y": -1.1, "text": "R" }]
            }
          ]
        },
        {
          "t": "def",
          "term": "Motional emf",
          "html": "A conductor moving through a magnetic field develops an emf across its own ends, called motional emf, with no external field ever changing: ε = <i>Bvl</i> when velocity <i>v</i>, field <i>B</i>, and the conductor's length <i>l</i> are mutually perpendicular. This is not new physics beyond Faraday's law; it is the identical law seen from the moving conductor's own point of view, both routes derived below."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MOTIONAL EMF",
          "tag": "a moving conductor is its own tiny battery",
          "main": "ε = <i>Bvl</i> (<i>v</i>, <i>B</i>, <i>l</i> mutually perpendicular)<br>ε = ∫(<i>v</i> × <i>B</i>) · <i>dl</i> (general); ε = ∮(<i>v</i> × <i>B</i>) · <i>dl</i> (closed loop)",
          "legend": [
            "<i>v</i> is the conductor's speed, in m/s",
            "<i>B</i> is the field magnitude, in tesla",
            "<i>l</i> is the length of the moving conductor, in m"
          ],
          "note": "When the geometry is not mutually perpendicular, only the components that are actually perpendicular to one another contribute; fall back to the vector form rather than forcing ε = Bvl on a tilted problem."
        },
        {
          "t": "defgrid",
          "title": "The rod-on-rails chain",
          "tag": "one quantity feeds the next; never solve each from scratch",
          "rows": [
            { "k": "Induced current", "v": "<i>I</i> = <i>Bvl</i>/<i>R</i>" },
            { "k": "Retarding force on the rod", "v": "<i>F</i> = <i>BIl</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i>/<i>R</i>" },
            { "k": "Power, mechanical in equals electrical out", "v": "<i>P</i> = <i>Fv</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> = <i>I</i><sup>2</sup><i>R</i>" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.3 · A ROD SWEEPS OUT A CIRCLE INSTEAD",
          "chips": ["one end pivoted, the far end tracing a circle"],
          "captions": [
            "A rod pivoted at O rotates with angular velocity ω in a field B into the page, marked by the crossed circles. The far end traces the dashed circle of radius l. An element at distance x from the pivot moves at speed v = ωx, perpendicular to both the rod and the field, exactly the motional-emf geometry above, just applied one element at a time rather than to the whole rod at once."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-3, 3], "axes": "none", "aspect": 0.987,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 2.6, "dash": true, "soft": true }],
              "segments": [{ "from": [0, 0], "to": [2.6, 0] }],
              "arcs": [{ "at": [0, 0], "r": 0.6, "from": 0, "to": 50, "label": "ω" }],
              "points": [
                { "x": 0, "y": 0, "label": "O", "at": "sw" },
                { "x": 1.6, "y": 0, "label": "dx", "at": "ne" }
              ],
              "arrows": [{ "from": [1.6, 0], "to": [1.6, 0.9], "tone": "amber", "label": "v" }],
              "marks": [
                { "x": -1.8, "y": 1.8, "glyph": "into", "tone": "soft", "label": "B" },
                { "x": 1.8, "y": 1.8, "glyph": "into", "tone": "soft" },
                { "x": -1.8, "y": -1.8, "glyph": "into", "tone": "soft" },
                { "x": 1.8, "y": -1.8, "glyph": "into", "tone": "soft" }
              ],
              "labels": [{ "x": 2.3, "y": -0.35, "text": "l" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MOTIONAL EMF, TWO ROUTES TO THE SAME ANSWER",
          "steps": [
            {
              "eq": "<i>F</i> = <i>qvB</i>, directed along the rod",
              "why": "Quote the Lorentz force F = qv × B from Moving Charges and Magnetism. A free charge q inside the rod, moving with it at speed v through field B (v, B and the rod mutually perpendicular), feels a force of this magnitude along the rod's own length."
            },
            {
              "eq": "<i>qE</i> = <i>qvB</i> ⇒ <i>E</i> = <i>vB</i>",
              "why": "Charge piles up at one end, building an internal field E that opposes further separation. Equilibrium is reached when the electric force on a charge exactly balances the magnetic one."
            },
            {
              "eq": "ε = <i>El</i> = <i>Bvl</i>",
              "why": "The potential difference across the rod's length is V = El, which is precisely the work done per unit charge in separating the charges: the motional emf, by the local, charge-by-charge route."
            },
            {
              "eq": "<i>d</i>Φ<sub>B</sub> = <i>Bl</i>(<i>v dt</i>), so |ε| = <i>d</i>Φ<sub>B</sub>/<i>dt</i> = <i>Blv</i>",
              "why": "Same rod, on rails, viewed through Faraday's law instead: as the rod slides a distance v dt in time dt, the circuit's area grows by l(v dt), so the flux grows by B times that area. Dividing by dt gives the identical Blv, by the global, flux-through-the-circuit route."
            }
          ]
        },
        {
          "t": "def",
          "term": "Terminal velocity is a force balance, not a kinematics problem",
          "html": "v<sub>term</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>l</i><sup>2</sup>) falls out of setting the net force to zero, gravity exactly cancelling the magnetic drag, the same logic as any other terminal velocity in mechanics. It carries no memory of how the rod started (from rest, or already moving), and no dependence on time: a force balance is a statement about one instant, not a trajectory."
        },
        {
          "t": "proc",
          "title": "Energy balance: falling under gravity, or pulled by hand",
          "steps": [
            "<b>Vertical rails, falling under gravity.</b> At terminal velocity the rod's acceleration is zero, so the magnetic drag force exactly balances gravity, and the gravitational power <i>mgv</i><sub>term</sub> converts entirely into <i>I</i><sup>2</sup><i>R</i> heat.",
            "<b>Horizontal rails, no gravity at all.</b> An external agent must still supply power to keep the rod moving at constant <i>v</i>, working against the SAME magnetic drag force <i>F</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i>/<i>R</i>. That power is <i>P</i><sub>ext</sub> = <i>Fv</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> = <i>I</i><sup>2</sup><i>R</i> exactly, not <i>mgv</i>, since there is no gravity to fight on a horizontal table.",
            "<b>The trap this catches.</b> Reaching for <i>P</i> = <i>mgv</i> out of habit even when the rails are horizontal, and getting a nonsense zero; or squaring the force before multiplying by <i>v</i> again and getting a nonsense <i>v</i><sup>3</sup>. The external agent supplies exactly the electrical power dissipated, whatever the orientation of the rails.",
            "<b>Either way, kinetic energy is unchanged</b> (terminal velocity, or hand-held constant velocity): the mechanical work put in has nowhere to go but the resistor."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · EMF OF A ROD ROTATING ABOUT ONE END",
          "steps": [
            {
              "eq": "<i>v</i> = <i>ωx</i> at distance <i>x</i> from the pivot",
              "why": "A rod of length l rotates with angular velocity ω about one fixed end, in a field B perpendicular to the plane of rotation. An element at distance x from the pivot moves in a circle of radius x, at speed ωx."
            },
            {
              "eq": "<i>d</i>ε = <i>B</i>(<i>ωx</i>) <i>dx</i>",
              "why": "Treat this element as its own tiny straight conductor, moving at speed ωx perpendicular to B: it contributes a motional emf exactly like the straight-rod result, applied element by element."
            },
            {
              "eq": "ε = ∫<sub>0</sub><sup>l</sup> <i>Bωx dx</i> = <i>Bωl</i><sup>2</sup>/2",
              "why": "Every element between the pivot and the far end contributes in the same sense (every point rotates the same way), so sum them by integrating x from 0 to l."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.4 · THE ROTATING ROD, WIRED TO A RESISTOR",
          "chips": ["far end on a circular rail, both leads run to R"],
          "captions": [
            "The same rotating rod as Figure 6.3, now wired into a circuit: the far end slides on a circular conducting rail, and a lead from the rail together with a lead from the pivot O both run to an external resistor R. The rod's own emf, ε = Bωl²/2, drives a current I around this external path, shown along the lower lead."
          ],
          "frames": [
            {
              "x": [-3.4, 2.4], "y": [-3.3, 2.7], "axes": "none", "aspect": 1.019,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0.4, "r": 1.8, "dash": true, "soft": true }],
              "segments": [
                { "from": [0, 0.4], "to": [1.8, 0.4] },
                { "from": [0, -1.4], "to": [0, -2.6] },
                { "from": [0, 0.4], "to": [-2.4, 0.4], "soft": true },
                { "from": [-2.4, 0.4], "to": [-2.4, -2.6], "soft": true },
                { "from": [-2.4, -2.6], "to": [0, -2.6], "soft": true }
              ],
              "arrows": [{ "from": [-1.8, -2.45], "to": [-0.6, -2.45], "tone": "amber", "label": "I", "at": "above" }],
              "marks": [
                { "x": -0.9, "y": 1.1, "glyph": "into", "tone": "soft" },
                { "x": 0.9, "y": 1.1, "glyph": "into", "tone": "soft" },
                { "x": -0.9, "y": -0.4, "glyph": "into", "tone": "soft" },
                { "x": 0.9, "y": -0.4, "glyph": "into", "tone": "soft" }
              ],
              "points": [{ "x": 0, "y": 0.4, "label": "O", "at": "ne" }],
              "labels": [{ "x": 0, "y": -2.9, "text": "R" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a rod-on-rails problem in ten seconds",
          "steps": [
            "<b>Identify what moves and what stays fixed.</b> A moving rod on fixed rails is a straight motional-emf problem; a rod rotating about a pivot needs the ½Bωl² form instead.",
            "<b>Check the geometry.</b> If v, B and the rod are genuinely mutually perpendicular, ε = Bvl works directly; otherwise fall back to (v × B) · l.",
            "<b>Compute ε first, then let the chain cascade.</b> I = ε/R, then F = BIl, then P = Fv. Never jump straight to P or F without ε in hand first.",
            "<b>For terminal velocity, skip the differential equation.</b> Just set the driving force equal to the magnetic retarding force and solve algebraically; the acceleration is zero by definition at that instant, nothing more subtle is needed."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A conducting rod of length l = 0.50 m slides at constant speed v = 3.0 m/s along two horizontal frictionless rails in a uniform vertical field B = 0.40 T. The rails are joined by a resistor of total resistance R = 2.0 Ω. Find (a) the motional emf, (b) the induced current, (c) the force needed to keep the rod moving steadily, and (d) the power delivered.",
          "steps": [
            "(a) ε = Bvl = (0.40)(3.0)(0.50) = 0.60 V.",
            "(b) I = ε/R = 0.60/2.0 = 0.30 A. (c) F = BIl = (0.40)(0.30)(0.50) = 0.060 N.",
            "(d) P = Fv = (0.060)(3.0) = 0.18 W. Check: εI = (0.60)(0.30) = 0.18 W, and I²R = (0.30)²(2.0) = 0.18 W. All three agree."
          ],
          "ans": "ε = 0.60 V, I = 0.30 A, F = 0.060 N, P = 0.18 W."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A strong cylindrical magnet is dropped from the top of two identical vertical tubes of equal length, one copper, one PVC. Through which tube does it take longer to fall, and why?",
          "steps": [
            "The trap: \"both tubes are hollow and the magnet touches neither, so gravity is the only force, it takes the same time in both.\" Tempting, but wrong.",
            "The fast, correct read: as the magnet falls through the COPPER tube, the flux through each ring-like cross-section changes, inducing eddy currents in the wall. By Lenz's law these oppose the change, exerting an upward retarding force that slows the fall.",
            "PVC is an insulator, so no eddy currents form at all, and the magnet falls in ordinary free-fall time."
          ],
          "ans": "It takes far longer in the copper tube. The one-line elimination: eddy currents need a conductor, and PVC has none."
        },
        {
          "t": "p",
          "html": "A real magnetic brake, on a train or a roller-coaster car, is this same copper-tube demonstration scaled up: a conducting fin sweeps past a bank of magnets and the induced eddy currents drag it to a stop with no physical contact at all, no brake pads to wear down. The retarding force in that fin follows exactly the rod-on-rails chain above, F proportional to v, which is why magnetic brakes get gentler as the vehicle slows rather than grabbing suddenly the way friction brakes do."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A conducting rod of mass m = 40 g and length l = 0.40 m slides without friction down two vertical conducting rails joined at the bottom by a resistor, total resistance R = 0.20 Ω, in a uniform horizontal field B = 0.50 T perpendicular to the rail plane. Released from rest, find the terminal velocity, the current at that instant, and verify energy balance. Take g = 10 m/s².",
          "steps": [
            "Terminal velocity: magnetic drag balances gravity, mg = B²l²v_term/R, so v_term = mgR/(B²l²) = (0.040)(10)(0.20)/[(0.50)²(0.40)²] = 0.080/0.040 = 2.0 m/s.",
            "Current at terminal velocity: I = Bv_term l/R = (0.50)(2.0)(0.40)/0.20 = 2.0 A.",
            "Energy check: gravitational power in, mgv_term = (0.040)(10)(2.0) = 0.80 W; electrical dissipation, I²R = (2.0)²(0.20) = 0.80 W. They match exactly."
          ],
          "ans": "v_term = 2.0 m/s, I = 2.0 A; at terminal velocity every watt of gravitational power becomes heat."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A conducting rod of length l = 0.60 m rotates at constant angular velocity ω = 50 rad/s about a fixed axis through one end, in a uniform field B = 0.30 T perpendicular to the plane of rotation. The far end slides on a circular rail, wired through an external resistance R = 9.0 Ω (rod and contacts resistanceless). Find the emf, the current, the external torque needed to maintain rotation, and the power supplied.",
          "steps": [
            "ε = Bωl²/2 = (0.30)(50)(0.60)²/2 = (0.30)(50)(0.36)/2 = 2.7 V. I = ε/R = 2.7/9.0 = 0.30 A.",
            "Electrical power drawn: P = εI = (2.7)(0.30) = 0.81 W, matching I²R = (0.30)²(9.0) = 0.81 W.",
            "This power is delivered mechanically as P = τω, so τ = P/ω = 0.81/50 = 1.62 × 10⁻² N m."
          ],
          "ans": "ε = 2.7 V, I = 0.30 A, τ = 1.62 × 10⁻² N m, P = 0.81 W, the mechanical power an agent must supply against the magnetic braking torque."
        },
        {
          "t": "mcq",
          "q": "A straight conducting rod moves through a uniform field. The motional emf between its ends is zero when:",
          "opts": [
            { "label": "Its velocity is perpendicular to B", "nudge": "v perpendicular to B is, together with a perpendicular rod, the condition for MAXIMUM emf, not zero; a reflexive association of \"perpendicular\" with \"inactive\" is the trap." },
            { "label": "Its velocity is parallel to B", "nudge": null },
            { "label": "It moves perpendicular to its own length", "nudge": "This is the NORMAL generating configuration, not a zero case." },
            { "label": "B is perpendicular to the rod", "nudge": "This is part of the maximum-emf setup; it does not by itself force the emf to vanish." }
          ],
          "correct": 1,
          "solution": "The emf comes from v × B. If v is parallel to B, the cross product is zero, so no charge-separating force acts anywhere along the rod, and ε = 0."
        },
        {
          "t": "mcq",
          "q": "Transformer cores are laminated mainly to:",
          "opts": [
            { "label": "Reduce the magnetic flux through the core", "nudge": "The wrong goal entirely; lamination is designed NOT to touch the useful flux." },
            { "label": "Increase the resistance of eddy-current paths and break them up", "nudge": null },
            { "label": "Keep the core cool by conduction", "nudge": "Cooling is a side effect at best, not the reason laminae are used in the first place." },
            { "label": "Eliminate hysteresis loss", "nudge": "Hysteresis loss is reduced by choosing a soft magnetic material, a completely different mechanism, one of the classic two-losses mix-ups." }
          ],
          "correct": 1,
          "solution": "Thin insulated laminae confine eddy currents to narrow, high-resistance paths, slashing the I²R heating without disturbing the useful magnetic flux."
        },
        {
          "t": "mcq",
          "q": "A rod is pulled at CONSTANT velocity along rails in a magnetic field. The work done by the external agent goes mainly into:",
          "opts": [
            { "label": "Kinetic energy of the rod", "nudge": "Only true if the rod were accelerating; \"constant velocity\" rules this out from the start." },
            { "label": "Magnetic potential energy of the field", "nudge": "Invokes a fictitious storage; there is no net magnetic energy build-up in this steady process." },
            { "label": "Heat dissipated in the circuit resistance", "nudge": null },
            { "label": "Energy stored permanently in the rod", "nudge": "Nothing is stored in the rod at all; a moving conductor at constant velocity is not a battery that keeps charging." }
          ],
          "correct": 2,
          "solution": "At constant velocity the kinetic energy does not change, so all the external work converts to electrical energy and is dissipated as Joule heat in R."
        },
        {
          "t": "mcq",
          "q": "A rod rotating about one end produces ε = Bωl²/2. If its length is doubled while its angular velocity is halved, with the same B, the new emf is:",
          "opts": [
            { "label": "Unchanged", "nudge": "Wrongly assumes the two changes cancel exactly." },
            { "label": "Doubled", "nudge": null },
            { "label": "Halved", "nudge": "Counts only the halved ω and ignores that l is squared in the formula." },
            { "label": "Quadrupled", "nudge": "Counts only the doubled l² (a factor of 4) and ignores the halved ω." }
          ],
          "correct": 1,
          "solution": "ε is proportional to ωl². Halving ω gives a factor of one half; doubling l gives a factor of four. Net factor: one half times four equals two, so the emf doubles."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A rod of length 0.30 m moves at 4.0 m/s perpendicular to a uniform field of 0.50 T (field perpendicular to both). Find the motional emf.", "a": "ε = Bvl = 0.50 × 4.0 × 0.30 = 0.60 V." },
            { "q": "[NEET] Explain in two lines why transformer and motor cores are laminated rather than solid.", "a": "Laminations break the wide eddy-current paths into many narrow, insulated ones, sharply raising the resistance of those paths and cutting the I²R loss, without affecting the useful flux." },
            { "q": "[JEE Main] A rod of length 0.40 m on rails (R = 3.0 Ω) moves at a constant 5.0 m/s in a field B = 0.60 T. Find the external force required and the power dissipated.", "a": "F = B²l²v/R = (0.36)(0.16)(5.0)/3.0 = 0.096 N; P = Fv = 0.48 W." },
            { "q": "[JEE Main] A rod rotates about one end at ω = 40 rad/s in a field 0.20 T perpendicular to its plane of rotation. If the rod is 0.50 m long, find the emf.", "a": "ε = Bωl²/2 = (0.20)(40)(0.25)/2 = 1.0 V." },
            { "q": "[JEE Advanced] A rod of mass 0.050 kg and length 0.50 m slides down vertical rails (R = 0.50 Ω) in a horizontal field B = 0.40 T perpendicular to the rail plane. Find its terminal velocity. Take g = 10 m/s².", "a": "v_term = mgR/(B²l²) = (0.050)(10)(0.50)/[(0.16)(0.25)] = 0.25/0.040 = 6.25 m/s." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Ignoring the geometry in Bvl. The clean formula needs v, B and the rod mutually perpendicular; if the velocity makes an angle, only the perpendicular component generates emf, so fall back to the vector form (v × B) · l.",
            "Assuming a moving rod always carries current. An isolated rod develops a voltage across its ends but drives no sustained current; current needs a CLOSED circuit whose enclosed flux is actually changing.",
            "Treating motional emf as separate from Faraday's law. They are the same law seen two ways; do not add a \"motional\" contribution and a \"flux-change\" contribution for the same single effect.",
            "Misunderstanding laminations. They do not block magnetism; they raise the resistance of eddy-current loops. Hysteresis loss and eddy-current loss are different problems with different fixes.",
            "Reaching for P = mgv on HORIZONTAL rails. With no vertical motion there is no gravity term at all; the external power an agent supplies always equals F_ext v, and F_ext must be found by balancing forces against the magnetic drag first."
          ]
        },
        {
          "t": "protip",
          "html": "for any rod-on-rails problem, anchor everything to epsilon = Bvl and let the chain cascade: I = Bvl/R, F = B squared l squared v over R, P = B squared l squared v squared over R. for terminal velocity, don't solve a differential equation, just set the driving force equal to the magnetic retarding force and solve algebraically. and before your hand reaches for mgv, check whether gravity is even in the picture at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "ε = Bvl; general ε = ∫(v × B) · dl", "note": "motional emf, Faraday's law seen from the moving conductor" },
            { "f": "I = Bvl/R, F = B²l²v/R, P = B²l²v²/R = I²R", "note": "the rod-on-rails chain, one quantity feeding the next" },
            { "f": "ε = Bωl²/2", "note": "rod rotating about one end; note the l squared" },
            { "f": "v_term = mgR/(B²l²)", "note": "terminal velocity: gravity balanced against magnetic drag" }
          ],
          "aids": ["move a wire, make a battery", "no conductor, no eddies", "laminate to resist, not to block"]
        }
      ]
    },
    {
      "n": "03",
      "title": "Self-Induction",
      "chip": "03 SELF-INDUCTION",
      "kalam": "a coil fights change, never the current itself",
      "blocks": [
        {
          "t": "p",
          "html": "So far, every flux through our circuit changed because of something external: a moving magnet, a moving rod, a neighbouring field. Here is a subtler twist: a coil carrying a CHANGING current changes its own flux, and so induces an emf in itself. This is <b>self-induction</b>. The cleanest way to feel it is the analogy of inertia. A loaded bullock cart resists being set into motion, and once rolling, resists being stopped; that reluctance to change its state of motion is mechanical inertia, mass. A coil behaves exactly this way toward current. Switch a circuit on, and the coil fights the rising current, slowing its climb; switch off, and it fights the collapse, trying to keep the current going. This is why inductance <i>L</i> is nicknamed <b>electrical inertia</b>, the electrical cousin of mass. Notice the coil does not oppose current itself, a steady current flows through it freely; it opposes CHANGES in current."
        },
        {
          "t": "think",
          "html": "you have surely seen a tiny blue spark jump at a switch when you unplug a fan or a tube-light choke. that spark is self-induction caught in the act. as the switch breaks, the current is forced to drop to zero almost instantly, and the coil violently opposes this sudden change by generating a large back-emf, epsilon = -L dI/dt, with dI/dt enormous. the bigger the inductance, the angrier the spark."
        },
        {
          "t": "def",
          "term": "Self-inductance",
          "html": "For a coil of <i>N</i> turns, each carrying current <i>I</i> and linking flux Φ<sub>B</sub> through itself: <i>N</i>Φ<sub>B</sub> = <i>LI</i>, so <i>L</i> = <i>N</i>Φ<sub>B</sub>/<i>I</i>. The self-induced emf opposing any change in that current is ε = -<i>L dI/dt</i>. <i>L</i> depends only on the coil's own geometry and the surrounding medium, never on <i>I</i> or ε themselves, exactly as capacitance depends only on plate geometry and the dielectric, never on charge or voltage."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SELF-INDUCTANCE",
          "tag": "electrical inertia, quantified",
          "main": "<i>L</i> = <i>N</i>Φ<sub>B</sub>/<i>I</i>, ε = -<i>L dI/dt</i> (definition)<br><i>L</i> = μ₀<i>n</i><sup>2</sup><i>Al</i> = μ₀<i>N</i><sup>2</sup><i>A</i>/<i>l</i> (long solenoid, <i>N</i> = <i>nl</i> turns)",
          "legend": [
            "<i>N</i> is the number of turns; Φ<sub>B</sub> is the flux through one turn, in weber",
            "<i>n</i> = <i>N</i>/<i>l</i> is turns per unit length, in per metre; <i>A</i> is the cross-sectional area, m²; <i>l</i> is the solenoid's length, m"
          ],
          "note": "Multiply by the core's relative permeability μᵣ if the solenoid is wound on a magnetic material rather than air or vacuum."
        },
        {
          "t": "def",
          "term": "The henry, and how L scales",
          "html": "SI unit of <i>L</i>: the henry (H), with 1 H = 1 Wb/A = 1 V s/A = 1 Ω s = 1 J/A². Dimensional formula: M L<sup>2</sup>T<sup>-2</sup>A<sup>-2</sup>. For a solenoid of fixed geometry, <i>L</i> is proportional to <i>N</i><sup>2</sup>, not to <i>N</i>: doubling the turns quadruples the inductance, since each turn both carries more flux and links it twice as many times over."
        },
        {
          "t": "p",
          "html": "Every choke coil in a tube-light fixture, every ballast, every filter inductor smoothing a ripple in a power supply is this same L at work, chosen deliberately so that its opposition to a CHANGING current shapes the circuit's behaviour, while its resistance to a steady current stays close to zero. That distinction, reluctant toward change but transparent to anything constant, is the entire reason an inductor earns a separate symbol from a resistor at all."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "CIRCUIT · THE SWITCH THAT SPARKS",
          "chips": ["closed: current climbing", "opened: current collapses, back-emf sparks"],
          "captions": [
            "A battery drives current through inductor L and a closed switch. The coil fights the rise, but a steady current I eventually flows around the loop, shown here along the bottom wire.",
            "The instant the switch opens, the current is forced toward zero almost immediately, dI/dt enormous. The coil's back-emf, ε = -L dI/dt, spikes far above the battery's own voltage and arcs across the opening contacts, the blue spark this topic opened with."
          ],
          "frames": [
            {
              "circuit": {
                "grid": [4, 3],
                "parts": [
                  { "at": [0, 0], "to": [0, 3], "kind": "battery", "side": "left" },
                  { "at": [0, 0], "to": [4, 0], "kind": "L", "label": "L", "side": "above" },
                  { "at": [4, 0], "to": [4, 3], "kind": "switch", "label": "S", "side": "right" }
                ],
                "wires": [{ "from": [0, 3], "to": [4, 3] }],
                "currents": [{ "at": [1, 3], "to": [3, 3], "label": "I" }]
              }
            },
            {
              "circuit": {
                "grid": [4, 3],
                "parts": [
                  { "at": [0, 0], "to": [0, 3], "kind": "battery", "side": "left" },
                  { "at": [0, 0], "to": [4, 0], "kind": "L", "label": "L", "side": "above" },
                  { "at": [4, 0], "to": [4, 3], "kind": "switch", "label": "S", "side": "right" }
                ],
                "wires": [{ "from": [0, 3], "to": [4, 3] }]
              },
              "marks": [{ "x": 4, "y": 1.5, "glyph": "cross", "tone": "amber" }],
              "labels": [{ "x": 3.1, "y": 0.35, "text": "spark" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SELF-INDUCTANCE OF A LONG SOLENOID",
          "steps": [
            {
              "eq": "<i>B</i> = μ₀<i>nI</i> inside the solenoid",
              "why": "Quote the solenoid field from Ampere's law, established in Moving Charges and Magnetism: for a long solenoid of n turns per unit length carrying current I, the interior field is uniform."
            },
            {
              "eq": "Φ<sub>B</sub> = <i>BA</i> = μ₀<i>nIA</i> per turn",
              "why": "The flux through one turn is this uniform field times the cross-sectional area A."
            },
            {
              "eq": "<i>N</i>Φ<sub>B</sub> = (<i>nl</i>)(μ₀<i>nIA</i>) = μ₀<i>n</i><sup>2</sup><i>Al I</i>",
              "why": "Total flux linkage over all N = nl turns: multiply the per-turn flux by the number of turns."
            },
            {
              "eq": "<i>L</i> = μ₀<i>n</i><sup>2</sup><i>Al</i> = μ₀<i>N</i><sup>2</sup><i>A</i>/<i>l</i>",
              "why": "By definition NΦ_B = LI; comparing gives L directly, fixed entirely by geometry (n, A, l) and the medium, never by the current I flowing through it, exactly as the definition above promised."
            }
          ]
        },
        {
          "t": "p",
          "html": "One consequence worth stating outright: L can never come out negative. It is built from μ₀, a turns count squared, an area and a length, all of them either positive constants or positive geometric quantities, so nothing in the definition or the solenoid formula can ever produce a negative sign. If an algebra slip ever hands back a negative L, the error is in the algebra, not a new kind of physics."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ENERGY STORED IN AN INDUCTOR",
          "steps": [
            {
              "eq": "<i>dW</i> = ε <i>dq</i> = (<i>L dI/dt</i>)(<i>I dt</i>) = <i>LI dI</i>",
              "why": "To build a current up from zero to a final value I₀, an external source does work against the back-emf ε = L dI/dt. The work in pushing charge dq = I dt against this emf in time dt is this product."
            },
            {
              "eq": "<i>U</i> = ∫<sub>0</sub><sup>I₀</sup> <i>LI dI</i> = <i>LI</i><sub>0</sub><sup>2</sup>/2",
              "why": "Integrate from 0 to the final current I₀. This energy is not lost anywhere; it is stored in the magnetic field the current has built up."
            },
            {
              "eq": "<i>u</i><sub>B</sub> = <i>U</i>/(<i>Al</i>) = <i>B</i><sup>2</sup>/2μ₀",
              "why": "Substituting the solenoid's own L = μ₀n²Al and B = μ₀nI₀, the stored energy per unit volume (V = Al) reduces to this, the magnetic analogue of the electric energy density ε₀E²/2 stored in a capacitor."
            }
          ]
        },
        {
          "t": "think",
          "html": "the switch-spark example above is really an LR circuit caught at a single instant, the current forced toward zero almost all at once. slow that same collapse down, watch the current rise and fall smoothly instead of snapping, and that gentler growth and decay, with its own time constant tau = L/R, is exactly where the Alternating Current chapter picks up the story."
        },
        {
          "t": "def",
          "term": "The ideal inductor: purely reactive",
          "html": "Every <i>L</i> in this topic is treated as an ideal inductor, opposing only CHANGES in current and carrying no resistance of its own wire. A real coil's winding does carry some resistance, and a full circuit model places that resistance in series with an ideal <i>L</i>; solving that combination, an inductor and a resistor together, is exactly where the Alternating Current chapter begins."
        },
        {
          "t": "p",
          "html": "Laboratory and everyday inductors span microhenries to a few henries: a radio-tuning coil sits in the microhenry range, a choke or a small transformer winding in the millihenry-to-henry range, and a large power-transformer winding can reach several henries. Nothing built from a hand-wound coil of a few hundred turns should ever print a self-inductance of thousands of henries; if it does, a power of ten has gone missing somewhere in the calculation."
        },
        {
          "t": "defgrid",
          "title": "Combining inductors, negligible mutual coupling",
          "tag": "series adds, parallel behaves like resistors; both assume the coils share no flux",
          "rows": [
            { "k": "Series", "v": "<i>L</i> = <i>L</i>₁ + <i>L</i>₂" },
            { "k": "Parallel", "v": "<i>L</i> = <i>L</i>₁<i>L</i>₂/(<i>L</i>₁ + <i>L</i>₂)" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A long air-cored solenoid is 0.40 m long, has N = 800 turns, and a cross-sectional area of 5.0 cm². Find (a) its self-inductance, and (b) the self-induced emf when the current changes at 200 A/s.",
          "steps": [
            "N² = 6.4 × 10⁵. L = μ₀N²A/l = (4π × 10⁻⁷)(6.4 × 10⁵)(5.0 × 10⁻⁴)/0.40 ≈ 1.0 × 10⁻³ H = 1.0 mH.",
            "ε = L(dI/dt) = (1.0 × 10⁻³)(200) = 0.20 V."
          ],
          "ans": "L = 1.0 mH; ε = 0.20 V."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "An inductor of L = 50 mH carries a steady current of 4.0 A. Find the energy stored in its magnetic field.",
          "steps": ["U = LI²/2 = (0.050)(4.0)²/2 = (0.050)(16)/2."],
          "ans": "U = 0.40 J."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Two inductors, L₁ = 6.0 mH and L₂ = 3.0 mH, share no mutual flux. Find their combined inductance (a) in series, (b) in parallel.",
          "steps": [
            "(a) Series: L = L₁ + L₂ = 6.0 + 3.0 = 9.0 mH.",
            "(b) Parallel: L = L₁L₂/(L₁ + L₂) = (6.0 × 3.0)/9.0 = 18/9."
          ],
          "ans": "9.0 mH in series, 2.0 mH in parallel; the parallel value sits below even the smaller individual inductance, exactly as parallel resistors and parallel capacitors' own cousins behave."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A solenoid of L = 200 mH carries a steady current I = 5.0 A from a 5.0 V battery. Its switch is opened, and the current collapses to zero in Δt = 1.0 ms. Find the average back-emf, and compare it to the battery voltage.",
          "steps": [
            "ε = L|ΔI|/Δt = (0.200)(5.0)/(1.0 × 10⁻³) = 1.0 × 10³ V.",
            "Compare: 1.0 kV is about 200 times the 5.0 V that originally drove the current."
          ],
          "ans": "ε ≈ 1.0 kV, roughly 200 times the source voltage, more than enough to arc across the opening switch contacts. This is the actual mechanism of the blue spark this topic opened with, and the entire reason relay and solenoid circuits carry a flyback diode."
        },
        {
          "t": "think",
          "html": "that kilovolt answer sits nowhere near the microtesla-to-volt world the rest of this chapter lives in, and it should not: it is the one deliberate exception, not a mistake. a slowly moved magnet gives millivolts because dI/dt is small; an interrupted inductor gives kilovolts because dt is forced toward zero. same formula, opposite reason for the size."
        },
        {
          "t": "mcq",
          "q": "The henry is equivalent to:",
          "opts": [
            { "label": "Wb · A", "nudge": "Multiplies flux by current instead of dividing; dimensionally the wrong combination entirely." },
            { "label": "Wb/A", "nudge": null },
            { "label": "V/A", "nudge": "V/A is the ohm, resistance, a tempting mix-up since both involve volts and amperes, but inductance carries an extra factor of time." },
            { "label": "A/Wb", "nudge": "The reciprocal arrangement; it has nothing to do with inductance." }
          ],
          "correct": 1,
          "solution": "By definition L = Φ/I, so 1 H = 1 Wb/A, equivalently 1 V s/A or 1 Ω s."
        },
        {
          "t": "mcq",
          "q": "A coil of self-inductance L is unwound and rewound on the same former with TWICE the number of turns, length and cross-section unchanged. The new self-inductance is:",
          "opts": [
            { "label": "2L", "nudge": "Assumes L is proportional to N, the single most common inductance mistake in the whole topic." },
            { "label": "4L", "nudge": null },
            { "label": "L/2", "nudge": "Ignores the dependence on turns entirely, and gets the direction backwards besides." },
            { "label": "L, unchanged", "nudge": "Ignores the dependence on turns entirely." }
          ],
          "correct": 1,
          "solution": "For fixed geometry, L = μ₀N²A/l is proportional to N². Doubling N multiplies L by 2² = 4."
        },
        {
          "t": "mcq",
          "q": "Two inductors, 4 mH and 12 mH, are connected in series with negligible mutual coupling. Their combined inductance is:",
          "opts": [
            { "label": "16 mH", "nudge": null },
            { "label": "8 mH", "nudge": "Neither the series nor the parallel formula gives this; a slip somewhere in the addition." },
            { "label": "3 mH", "nudge": "This is the PARALLEL value for this same pair, (4)(12)/16 = 3 mH, offered here as if it were the series answer, the two combination laws swapped." },
            { "label": "48 mH", "nudge": "The bare product of the two values, mistaking this for a mutual-inductance-style geometric mean rather than a simple sum." }
          ],
          "correct": 0,
          "solution": "With negligible mutual coupling, series inductances simply add: L = L₁ + L₂ = 4 + 12 = 16 mH."
        },
        {
          "t": "mcq",
          "q": "The blue spark seen when a fan or a tube-light choke is switched off is direct evidence of:",
          "opts": [
            { "label": "Resistive heating in the wires", "nudge": "Ordinary I²R heating does not by itself produce a visible arc at the switch contacts; it is present everywhere in the circuit, sparks are not." },
            { "label": "Self-induced back-emf opposing the sudden collapse of current", "nudge": null },
            { "label": "Eddy currents in the fan blade", "nudge": "Eddy currents need a bulk conductor nearby to swirl in; a switch contact is not one." },
            { "label": "Capacitive discharge", "nudge": "There is no charged capacitor anywhere in this simple inductor circuit for that stored energy to come from." }
          ],
          "correct": 1,
          "solution": "Interrupting the current forces a huge dI/dt for a brief instant, and the coil's back-emf, ε = -L dI/dt, spikes far above the supply voltage, arcing across the opening gap."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A solenoid 0.25 m long with 500 turns has cross-sectional area 2.0 cm² (air core). Find its self-inductance.", "a": "L = μ₀N²A/l = (1.2566 × 10⁻⁶)(2.5 × 10⁵)(2.0 × 10⁻⁴)/0.25 ≈ 2.5 × 10⁻⁴ H = 0.25 mH." },
            { "q": "[NEET] A coil has self-inductance L. Without changing its length or cross-section, the number of turns is doubled. State the new self-inductance and justify in one line.", "a": "4L, since L is proportional to N² at fixed geometry." },
            { "q": "[JEE Main] A long solenoid has 1000 turns per metre and carries 2.0 A. Find the magnetic energy density inside it, and confirm it equals B²/2μ₀.", "a": "B = μ₀nI = (1.2566 × 10⁻⁶)(1000)(2.0) ≈ 2.51 × 10⁻³ T; u_B = B²/2μ₀ ≈ 2.5 J/m³." },
            { "q": "[JEE Main] Two inductors, L₁ = 10 mH and L₂ = 15 mH, share no mutual flux. Find the combined inductance in series and in parallel.", "a": "Series: 25 mH. Parallel: (10 × 15)/25 = 6.0 mH." },
            { "q": "[JEE Advanced] A solenoid of L = 100 mH carries I = 3.0 A. Its switch opens and the current falls to zero in 0.50 ms. Find the average back-emf.", "a": "ε = L|ΔI|/Δt = (0.100)(3.0)/(0.50 × 10⁻³) = 600 V." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Believing L depends on current or emf. It depends only on geometry and the surrounding medium, exactly like capacitance; a larger current gives a larger stored energy and a larger back-emf, but never a larger L.",
            "The linear-in-N error. L is proportional to N², not N. Doubling the turns quadruples the inductance, and by the same token stored energy is proportional to I², not I.",
            "Mixing n and N in the solenoid formula. L = μ₀n²Al uses turns PER UNIT LENGTH; L = μ₀N²A/l uses TOTAL turns. They are the same formula, since n = N/l, but never plug a total-turns number into the n² version.",
            "Forgetting the changing-current requirement. No self-induced emf arises from a steady current, however large; only dI/dt ≠ 0 matters.",
            "Adding coupled inductors as L = L₁ + L₂ without checking the assumption. That combination is only valid when the mutual coupling is NEGLIGIBLE; Topic 04 shows exactly what changes once two coils genuinely share flux."
          ]
        },
        {
          "t": "protip",
          "html": "remember the perfect parallel with the capacitor: u sub L equals L I squared over two mirrors u sub C equals C V squared over two, with energy living in the magnetic field, B squared over two mu-nought, rather than the electric field. and whenever a switch-spark question shows up, the arithmetic is always the same shape: emf equals L times delta-I over delta-t, and delta-t is always tiny, which is exactly why the spark is large."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "NΦ<sub>B</sub> = LI, ε = -L dI/dt", "note": "self-inductance, definition; unit henry, dimension M L²T⁻²A⁻²" },
            { "f": "L = μ₀n²Al = μ₀N²A/l", "note": "long solenoid; L is proportional to N², not N" },
            { "f": "U = LI²/2, u_B = B²/2μ₀", "note": "energy stored and its density, the magnetic analogue of a capacitor" },
            { "f": "L = L₁ + L₂ (series), L₁L₂/(L₁+L₂) (parallel)", "note": "only when mutual coupling is negligible" }
          ],
          "aids": ["inductance is electrical inertia", "L goes as N squared", "energy hides in the field, B squared over two mu-nought"]
        }
      ]
    },
    {
      "n": "04",
      "title": "Mutual Induction",
      "chip": "04 MUTUAL INDUCTION",
      "kalam": "coil one talks to coil two exactly as loudly as it listens",
      "blocks": [
        {
          "t": "p",
          "html": "Bring a SECOND coil nearby. When the current in the first coil changes, its changing field threads the second coil too, inducing an emf there without any wire connecting the two at all. This is <b>mutual induction</b>, and it is the principle behind transformers, the wireless charging pad under a phone, an induction cooktop heating a pan, and the metal detector at an airport. The coupling quantity is the mutual inductance <i>M</i>: a big <i>M</i> means the two coils talk strongly, a small <i>M</i> means they barely notice each other. A lovely fact worth holding onto for the rest of this topic: mutual induction is perfectly RECIPROCAL. Coil 1 influences coil 2 exactly as strongly as coil 2 influences coil 1, one single number <i>M</i> for the pair, with <i>M</i><sub>12</sub> = <i>M</i><sub>21</sub>."
        },
        {
          "t": "think",
          "html": "a transformer is nothing but two coils sharing an iron core so their coupling coefficient sits as close to one as engineering allows. every volt the primary's alternating current induces in itself, the secondary feels almost the identical story, scaled only by how many more or fewer turns it carries. that turns-ratio scaling is the alternating current chapter's own story to tell; what this topic hands it is the M underneath."
        },
        {
          "t": "def",
          "term": "Mutual inductance",
          "html": "For two coils, a changing current <i>I</i>₁ in the first producing flux Φ₂ through each turn of the second: <i>N</i>₂Φ₂ = <i>MI</i>₁, so <i>M</i> = <i>N</i>₂Φ₂/<i>I</i>₁. The emf induced in the second coil is ε₂ = -<i>M dI</i>₁/<i>dt</i>. Like self-inductance, <i>M</i> depends only on the two coils' geometry, their separation and relative orientation, and the medium between them, never on <i>I</i>₁ or ε₂ themselves."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MUTUAL INDUCTANCE",
          "tag": "how strongly one coil's current reaches into another",
          "main": "<i>M</i> = <i>N</i>₂Φ₂/<i>I</i>₁, ε₂ = -<i>M dI</i>₁/<i>dt</i> (definition)<br><i>M</i> = μ₀<i>n</i>₁<i>n</i>₂<i>Al</i> (two coaxial solenoids, shared length <i>l</i>)",
          "legend": [
            "<i>N</i>₂ is the second coil's turns; Φ₂ is the flux per turn linking it, in weber",
            "<i>I</i>₁ is the current in the first, driving, coil",
            "<i>n</i>₁, <i>n</i>₂ are turns per unit length of the two solenoids; <i>A</i> is the shared cross-sectional area; <i>l</i> is the shared length"
          ],
          "note": "Reciprocity guarantees the identical M whether coil 1 or coil 2 is the one driven; Worked Example 4 below exploits this to dodge a hard integral entirely."
        },
        {
          "t": "def",
          "term": "Reciprocity, and the coupling coefficient",
          "html": "<i>M</i><sub>12</sub> = <i>M</i><sub>21</sub> = <i>M</i>: the mutual inductance of a pair is one single number, however the pair is labelled. In general, <i>M</i> = <i>k</i>√(<i>L</i>₁<i>L</i>₂), with 0 ≤ <i>k</i> ≤ 1 the coefficient of coupling: <i>k</i> → 1 when the coils share their flux fully, coaxial and wound on the same core, and <i>k</i> → 0 when their axes are perpendicular, so neither one's field threads the other at all."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE COUPLING COEFFICIENT, AT ITS TWO EXTREMES",
          "chips": ["k → 0: axes perpendicular", "k → 1: coaxial, sharing every line"],
          "captions": [
            "Coil 1 faces the viewer, its axis straight out of the page, marked by the dotted field circle at its centre. Coil 2's own axis lies IN the page instead, so it is seen edge-on, the vertical stroke through the same point. The two axes are perpendicular: essentially none of coil 1's field threads coil 2, and k is close to zero.",
            "The same two coils, now wound coaxially, one inside the other, sharing a single axis straight out of the page. Every field line either coil produces now threads the other as well: k is close to one, and M is as large as the pair's own self-inductances allow."
          ],
          "frames": [
            {
              "x": [-2.2, 2.2], "y": [-2.2, 2.2], "axes": "none", "aspect": 0.987,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.4 }],
              "segments": [{ "from": [0, -1.6], "to": [0, 1.6], "soft": true }],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "amber" }]
            },
            {
              "x": [-2.2, 2.2], "y": [-2.2, 2.2], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.6 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.9 }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "amber" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.5 · ONE SOLENOID INSIDE ANOTHER",
          "chips": ["S1 inside S2, sharing one field"],
          "captions": [
            "Inner solenoid S1 (turns per length n1) sits fully inside outer solenoid S2 (turns per length n2), both of length l, on a common axis. Current I2 in the OUTER winding, marked by dots where the wire runs toward the viewer and crosses where it runs away, builds a uniform field along the shared axis, and that field threads every single turn of S1 sitting inside it."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-1.9, 1.9], "axes": "none",
              "polys": [
                { "pts": [[-3, -1.4], [3, -1.4], [3, 1.4], [-3, 1.4]], "close": true, "tone": "ink" },
                { "pts": [[-2.6, -0.7], [2.6, -0.7], [2.6, 0.7], [-2.6, 0.7]], "close": true, "tone": "soft" }
              ],
              "marks": [
                { "x": -2, "y": 1.4, "glyph": "dot" },
                { "x": 0, "y": 1.4, "glyph": "dot" },
                { "x": 2, "y": 1.4, "glyph": "dot" },
                { "x": -2, "y": -1.4, "glyph": "cross" },
                { "x": 0, "y": -1.4, "glyph": "cross" },
                { "x": 2, "y": -1.4, "glyph": "cross" }
              ],
              "arrows": [{ "from": [-1, 0], "to": [0.4, 0], "tone": "amber", "label": "B" }],
              "labels": [
                { "x": 0, "y": 1.0, "text": "S2" },
                { "x": -2, "y": 0.35, "text": "S1" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MUTUAL INDUCTANCE OF TWO COAXIAL SOLENOIDS, WITH RECIPROCITY",
          "steps": [
            {
              "eq": "<i>B</i>₂ = μ₀<i>n</i>₂<i>I</i>₂, driving current through the OUTER solenoid",
              "why": "Pass current I2 through outer solenoid S2 (turns per length n2); its uniform interior field, quoted from Ampere's law exactly as in Topic 03, threads every turn of the inner solenoid S1 sitting inside it."
            },
            {
              "eq": "<i>N</i>₁Φ₁ = (<i>n</i>₁<i>l</i>)(μ₀<i>n</i>₂<i>I</i>₂)(<i>A</i>) = μ₀<i>n</i>₁<i>n</i>₂<i>Al I</i>₂",
              "why": "The flux linkage with S1, which has N1 = n1l turns: multiply the outer solenoid's own field by S1's turn count and cross-sectional area."
            },
            {
              "eq": "<i>M</i><sub>12</sub> = <i>N</i>₁Φ₁/<i>I</i>₂ = μ₀<i>n</i>₁<i>n</i>₂<i>Al</i>",
              "why": "By definition N1Φ1 = M12 I2; read off M12 directly."
            },
            {
              "eq": "<i>M</i><sub>21</sub> = μ₀<i>n</i>₁<i>n</i>₂<i>Al</i>, identical, driving <i>I</i>₁ through the INNER solenoid instead",
              "why": "Repeat the same argument with current in S1 and the linkage computed with S2: the algebra returns exactly the same expression. Hence M12 = M21 = M, the reciprocity theorem, a genuine labour-saver whenever one direction is a much easier calculation than the other."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.6 · A TINY COIL AT A BIG COIL'S CENTRE",
          "chips": ["small coil r sits where the large coil's field is uniform"],
          "captions": [
            "A large coil of radius R and a tiny coplanar, concentric coil of radius r sit at a common centre. Drive current through the LARGE coil and its field at the centre, out of the page here, is essentially uniform across the small coil's own tiny area, since R is so much bigger than r. Driving current through the small coil instead would demand integrating its messy dipole field over the large coil's whole area, far harder; reciprocity guarantees the same M either way, so the easy direction is the one worth choosing."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-3, 3], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.4 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.35 }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "amber" }],
              "arrows": [
                { "from": [0.4, 2.4], "to": [-0.4, 2.4], "tone": "ink", "label": "I1", "at": "above" },
                { "from": [2.4, -0.4], "to": [2.4, 0.4], "tone": "ink" }
              ],
              "segments": [
                { "from": [0, 0], "to": [2.4, 0], "dash": true, "soft": true, "label": "R", "at": "mid" },
                { "from": [0, 0], "to": [0, 0.35], "dash": true, "soft": true, "label": "r", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "A phone's wireless charging pad is the coplanar-coils picture above, deliberately loosened: two flat coils face each other with only a small coupling coefficient, nowhere near a transformer's k close to one, which is exactly why the phone has to sit within a centimetre or two of the pad and why the pad's own current alternates rapidly, since ε₂ = -M dI₁/dt needs that dI₁/dt to be large to make up for a modest M. Every example below is one of two families: read M straight off a stated geometry, or work backward to M from a measured emf or charge."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Two coaxial solenoids, each 0.30 m long and sharing cross-sectional area 3.0 cm², are wound with n₁ = 1500 turns/m (inner) and n₂ = 800 turns/m (outer). Find their mutual inductance.",
          "steps": [
            "M = μ₀n₁n₂Al = (4π × 10⁻⁷)(1500)(800)(3.0 × 10⁻⁴)(0.30).",
            "Working through the product step by step: (1.2566 × 10⁻⁶)(1500) ≈ 1.885 × 10⁻³; × 800 ≈ 1.508; × (3.0 × 10⁻⁴) ≈ 4.52 × 10⁻⁴; × 0.30 ≈ 1.36 × 10⁻⁴."
          ],
          "ans": "M ≈ 1.4 × 10⁻⁴ H = 0.14 mH."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two coils, L₁ = 2 mH and L₂ = 8 mH, are wound tightly one over the other on the same core, so coupling is essentially perfect, k ≈ 1. Estimate their mutual inductance.",
          "steps": [
            "The trap: reaching for \"add them,\" 2 + 8 = 10 mH, or \"average them,\" 5 mH. Both wrong.",
            "The fast, correct read: mutual inductance from two self-inductances is a GEOMETRIC mean, not a sum or an average. M = k√(L₁L₂) = 1 × √(2 × 8) = √16."
          ],
          "ans": "M = 4 mH. Perfect coupling gives the largest possible M for the pair, and it is the geometric, not arithmetic, mean of the two self-inductances."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Two coaxial solenoids of equal length 0.50 m and equal cross-sectional area 4.0 cm² are wound with n₁ = 2000 turns/m (inner) and n₂ = 1000 turns/m (outer). The outer (primary) current is switched off, dropping from 5.0 A to 0 in 0.010 s. The secondary circuit has total resistance 10 Ω. Find (a) the mutual inductance, (b) the emf induced in the secondary, (c) the total charge that flows.",
          "steps": [
            "(a) M = μ₀n₁n₂Al = (4π × 10⁻⁷)(2000)(1000)(4.0 × 10⁻⁴)(0.50) = 5.0 × 10⁻⁴ H.",
            "(b) |ε₂| = M|ΔI|/Δt = (5.0 × 10⁻⁴)(5.0/0.010) = (5.0 × 10⁻⁴)(500) = 0.25 V.",
            "(c) Exactly the q = N|ΔΦ|/R logic from Topic 01, with flux linkage now MI: q = M|ΔI|/R = (5.0 × 10⁻⁴)(5.0)/10."
          ],
          "ans": "M = 0.50 mH; ε₂ = 0.25 V; q = 2.5 × 10⁻⁴ C = 0.25 mC."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A small circular coil of N₂ = 50 turns and radius r = 1.0 cm sits at the centre of a large coplanar, coaxial coil of N₁ = 200 turns and radius R = 0.20 m (R much greater than r). Find the mutual inductance, and the emf induced in the small coil when the large coil's current changes at 100 A/s.",
          "steps": [
            "The clever step: drive current I₁ through the LARGE coil. Its field at the centre, B₁ = μ₀N₁I₁/2R, is essentially uniform over the small coil's tiny area since R ≫ r. Flux linkage: N₂Φ₂ = N₂B₁(πr²), so M = N₂Φ₂/I₁ = μ₀N₁N₂πr²/2R.",
            "Driving I₂ through the small coil instead would demand integrating its dipole field over the large coil's whole area; reciprocity guarantees the same M either way, so the large-coil route is the one to choose.",
            "M = (4π × 10⁻⁷)(200)(50)π(0.010)²/[2(0.20)] ≈ 9.9 × 10⁻⁶ H."
          ],
          "ans": "M ≈ 9.9 μH; |ε₂| = M(dI₁/dt) = (9.9 × 10⁻⁶)(100) ≈ 0.99 mV."
        },
        {
          "t": "think",
          "html": "an airport metal detector is a mutual-inductance measurement dressed up as security equipment: a transmitter coil drives a changing field, and a receiver coil listens for exactly the small extra M that a nearby lump of metal contributes by hosting its own eddy currents. no metal, no extra coupling, silence; a belt buckle shifts M by just enough to trip the alarm."
        },
        {
          "t": "def",
          "term": "The dot convention, for coupled inductors in a circuit",
          "html": "A dot marks one end of each winding. Current entering BOTH dotted ends produces flux that adds in the shared core, the aiding case; current entering one dotted and one undotted end produces flux that subtracts, the opposing case. In series, this gives <i>L</i><sub>eq</sub> = <i>L</i>₁ + <i>L</i>₂ + 2<i>M</i> (aiding) or <i>L</i>₁ + <i>L</i>₂ - 2<i>M</i> (opposing), the sign fixed entirely by which ends carry the dots, never by which coil happens to be labelled first."
        },
        {
          "t": "mcq",
          "q": "The mutual inductance of two coils does NOT depend on:",
          "opts": [
            { "label": "The number of turns in each coil", "nudge": "A genuine determinant of M, not the exception the question asks for." },
            { "label": "The current flowing through them", "nudge": null },
            { "label": "The distance between them", "nudge": "A genuine determinant of M, not the exception the question asks for." },
            { "label": "The permeability of the core material", "nudge": "A genuine determinant of M, not the exception the question asks for." }
          ],
          "correct": 1,
          "solution": "M is fixed by geometry and medium alone, a property of the arrangement, not the current; a steady or changing current does not alter M itself, only the induced emf scales with dI/dt."
        },
        {
          "t": "mcq",
          "q": "M₁₂, the mutual inductance computed by driving current through coil 1 and finding the flux linkage with coil 2, is related to M₂₁, computed the other way round, by:",
          "opts": [
            { "label": "M₁₂ = M₂₁, always", "nudge": null },
            { "label": "M₁₂ = 1/M₂₁", "nudge": "Invents a reciprocal relationship that does not exist here; the two are simply EQUAL, not inverse." },
            { "label": "They are unrelated and must each be computed separately", "nudge": "Misses reciprocity entirely, exactly the assumption that forces two hard integrals when one alone would do." },
            { "label": "M₁₂ = M₂₁ only when the two coils are identical", "nudge": "Reciprocity holds for any pair of coils whatsoever, not only matched ones; that generality is precisely what makes it useful." }
          ],
          "correct": 0,
          "solution": "Reciprocity: the mutual inductance of a pair is one single number, whichever coil is treated as the driver."
        },
        {
          "t": "mcq",
          "q": "Two coils have coupling coefficient k. Which statement is correct?",
          "opts": [
            { "label": "k = 1 when the coils' axes are perpendicular", "nudge": "Has the geometry backwards: perpendicular axes give k = 0, since neither coil's field threads the other at all." },
            { "label": "k = 0 when the coils are coaxial, wound on the same core", "nudge": "Also backwards: coaxial, same-core coils are exactly the k toward 1 case, sharing flux as fully as possible." },
            { "label": "k = 1 when the coils share their flux fully, k = 0 when their axes are perpendicular", "nudge": null },
            { "label": "k can exceed 1 for tightly wound coils", "nudge": "k is capped at 1 by definition; M = k√(L₁L₂) can never exceed the geometric mean of the two self-inductances." }
          ],
          "correct": 2,
          "solution": "The coupling coefficient runs from 0 (no shared flux, perpendicular axes) to 1 (fully shared flux, coaxial coils on a common core)."
        },
        {
          "t": "mcq",
          "q": "Two inductors, L₁ = 4 mH and L₂ = 9 mH, are perfectly coupled (k = 1) and connected in series AIDING, their dots at the same end. Their combined inductance is:",
          "opts": [
            { "label": "13 mH", "nudge": "This is just L₁ + L₂, the negligible-coupling formula from Topic 03, ignoring the coupling entirely." },
            { "label": "25 mH", "nudge": null },
            { "label": "5 mH", "nudge": "Subtracts 2M instead of adding it, the SERIES OPPOSING case (dots at opposite ends), not the aiding case this question describes." },
            { "label": "36 mH", "nudge": "The bare product L₁L₂, mistaking this for some other combination entirely; even the units, mH², give it away." }
          ],
          "correct": 1,
          "solution": "With M = k√(L₁L₂) = √(4 × 9) = 6 mH, series AIDING gives L_eq = L₁ + L₂ + 2M = 4 + 9 + 12 = 25 mH: when coupled inductors add their flux, the mutual term adds twice over, once for each coil's own contribution to the other."
        },
        {
          "t": "p",
          "html": "Zoom out from a single pair of coils and this is also how a power grid crosses long distances: a step-up transformer at the plant, all reciprocity and turns ratios, raises the voltage so the SAME power travels at a much smaller current, and a much smaller I²R loss along the transmission line, before a step-down transformer at the other end brings it back to a socket-safe voltage. Every one of those transformers is a pair of coils sharing an iron core so their own k sits as close to one as the engineering allows."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two coaxial solenoids, each 0.40 m long, share cross-sectional area 5.0 cm², with n₁ = 1000 turns/m and n₂ = 1200 turns/m. Find their mutual inductance.", "a": "M = μ₀n₁n₂Al ≈ 3.0 × 10⁻⁴ H = 0.30 mH." },
            { "q": "[NEET] Two coils, L₁ = 3 mH and L₂ = 12 mH, are perfectly coupled (k = 1). Find their mutual inductance.", "a": "M = √(L₁L₂) = √(3 × 12) = √36 = 6 mH." },
            { "q": "[JEE Main] A primary coil's current changes at 30 A/s, inducing 6.0 mV in a nearby secondary. Find the mutual inductance.", "a": "M = ε/(dI/dt) = (6.0 × 10⁻³)/30 = 2.0 × 10⁻⁴ H = 0.20 mH." },
            { "q": "[JEE Advanced] Two coaxial solenoids, each 0.60 m long and sharing area 6.0 cm², both have 1500 turns per metre. The primary's current changes at 40 A/s; the secondary has resistance 5.0 Ω. Find M, the induced emf, and the induced current.", "a": "M = μ₀n²Al ≈ 1.0 × 10⁻³ H = 1.0 mH (since n₁ = n₂ here). ε₂ = M(dI/dt) = 40 mV. I₂ = ε₂/R = 8.0 mA." },
            { "q": "[JEE Advanced] Two coils, each of self-inductance 20 mH, are coupled with k = 0.5. Find M, and state whether this same pair could ever reach k = 1.", "a": "M = k√(L₁L₂) = 0.5 × 20 = 10 mH. Yes: k depends only on geometry, so rewinding the coils coaxially on a shared core, so all of one coil's flux threads the other, would push k toward 1 without changing either L." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Believing M depends on current. It is fixed by geometry and medium alone, exactly like self-inductance.",
            "Treating M as an arithmetic mean or a sum. M = k√(L₁L₂) is a GEOMETRIC mean, never (L₁ + L₂)/2 and never L₁ + L₂.",
            "Redoing a hard integral in the harder direction. Reciprocity guarantees M₁₂ = M₂₁; always check whether the OTHER direction is easier before starting the calculation.",
            "Forgetting the changing-current requirement. A steady I₁, however large, induces no emf in coil 2 at all, exactly as with self-induction.",
            "Treating L_eq = L₁ + L₂ as universal for two inductors in series. With real mutual coupling this becomes L_eq = L₁ + L₂ ± 2M, the sign set by the dot convention: aiding windings add 2M, opposing windings subtract it."
          ]
        },
        {
          "t": "protip",
          "html": "when self-inductances are already known, skip the geometry entirely: M equals k times the square root of L1 times L2, with k = 1 for tightly wound coils. and whenever a mutual-inductance integral looks ugly in one direction, stop and ask whether the OTHER direction is any easier first, reciprocity guarantees the identical answer either way, so always compute the easy one."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "N₂Φ₂ = MI₁, ε₂ = -M dI₁/dt", "note": "mutual inductance, definition; unit henry" },
            { "f": "M = μ₀n₁n₂Al", "note": "two coaxial solenoids" },
            { "f": "M₁₂ = M₂₁", "note": "reciprocity: compute whichever direction is easier" },
            { "f": "M = k√(L₁L₂), 0 ≤ k ≤ 1", "note": "coupling coefficient; a geometric mean, never a sum" }
          ],
          "aids": ["M is the geometric mean, perfectly coupled at k equals one", "reciprocity: compute the easy direction", "no current change, no mutual emf"]
        }
      ]
    },
    {
      "n": "05",
      "title": "AC Generator",
      "chip": "05 AC GENERATOR",
      "kalam": "edge-on to the field is where the emf peaks",
      "blocks": [
        {
          "t": "p",
          "html": "Everything so far has been about detecting an induced emf. The AC generator is where we HARNESS it, the machine that lights your home, nothing more than Faraday's law put to work on an industrial scale. It converts mechanical energy into electrical energy, in effect an electric motor run in reverse. The most relatable version is the old bicycle dynamo that powers a cycle lamp: as you pedal, a small coil spins inside a magnet, and the faster you pedal, the brighter the lamp glows. That is the entire principle: spin a coil in a magnetic field and an emf appears across its ends. Why does spinning produce emf? Recall flux is Φ = <i>BA</i> cos θ. Topics 03 and 04 changed flux by changing <i>B</i>; Topic 02 changed it by changing the area <i>A</i>. The generator changes the third variable, the angle θ. As the coil rotates, θ = <i>ωt</i> sweeps continuously, so cos <i>ωt</i> oscillates, the flux oscillates, and Faraday's law delivers a continuously varying emf: a clean sine wave, alternating current."
        },
        {
          "t": "think",
          "html": "picture the coil as a swinging gate in a stream of field lines. when the coil's plane is parallel to the field, its sides slice straight across the lines, cutting as fast as possible, flux is momentarily zero but changing fastest, so the emf is at its peak. a quarter-turn later, plane perpendicular to the field, flux is maximum but momentarily not changing at all, the sides glide along the lines instead of cutting them, so the emf is zero. emf is maximum exactly when flux is zero, and zero exactly when flux is maximum, a quarter cycle out of step."
        },
        {
          "t": "p",
          "html": "The construction follows directly. A rectangular <b>armature</b> coil of many turns is mounted on an axle between the poles of a strong <b>field magnet</b>, turned by some prime mover: water in a hydro dam, steam in a thermal plant, wind in a turbine. The two ends of the coil connect to two <b>slip rings</b> that rotate with it, and stationary carbon <b>brushes</b> press against the rings to tap the output. The slip rings are what keep the output alternating: each end of the coil stays connected to the same external terminal, so as the emf in the coil reverses every half-turn, the output reverses too. Replace the slip rings with a single split ring, a commutator, and the output becomes pulsating DC instead, the ONLY construction difference between an AC and a DC generator."
        },
        {
          "t": "think",
          "html": "a clock's second hand is a free demonstration of this same sweep. it moves fastest, in the sense of covering the most horizontal ground per second, as it crosses straight up or straight down, and slowest, barely shifting sideways at all, as it crosses the horizontal nine or three. swap horizontal position for flux and the clock hand's own speed for emf, and you have re-derived the ninety-degree phase gap without a single equation."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 6.7 · THE ARMATURE SPINS, THE OUTPUT ALTERNATES",
          "chips": ["construction: armature, slip rings, brushes", "output: peak at parallel, zero at perpendicular"],
          "captions": [
            "The armature coil turns between field-magnet poles N and S. Its axle carries two slip rings; brushes pressed against them tap the output to an external resistor R. Because each ring stays wired to the same external terminal as the coil spins, the tapped output alternates every half-turn.",
            "The emf this produces over one full rotation: zero when the coil's plane is perpendicular to the field (flux at its own peak, momentarily unchanging), rising to its peak a quarter-turn later when the plane is parallel to the field (flux zero, changing fastest), then repeating with the opposite sign."
          ],
          "frames": [
            {
              "x": [-3.2, 3.2], "y": [-4.1, 1.3], "axes": "none", "aspect": 0.841,
              "polys": [
                { "pts": [[-2.6, -0.5], [-1.4, -0.5], [-1.4, 0.5], [-2.6, 0.5]], "close": true, "tone": "soft" },
                { "pts": [[1.4, -0.5], [2.6, -0.5], [2.6, 0.5], [1.4, 0.5]], "close": true, "tone": "soft" }
              ],
              "segments": [
                { "from": [-1.4, 0], "to": [1.4, 0] },
                { "from": [0, 0], "to": [0, -1.8] },
                { "from": [-0.85, -2.3], "to": [-0.5, -2.3] },
                { "from": [0.5, -2.3], "to": [0.85, -2.3] },
                { "from": [-0.85, -2.3], "to": [-0.85, -3.5] },
                { "from": [0.85, -2.3], "to": [0.85, -3.5] },
                { "from": [-0.85, -3.5], "to": [-0.3, -3.5] },
                { "from": [0.85, -3.5], "to": [0.3, -3.5] }
              ],
              "curves": [
                { "c": "circle", "cx": -0.3, "cy": -2.3, "r": 0.22 },
                { "c": "circle", "cx": 0.3, "cy": -2.3, "r": 0.22 }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.7, "from": 20, "to": 90, "label": "ω" }],
              "labels": [
                { "x": -2, "y": 0, "text": "N" },
                { "x": 2, "y": 0, "text": "S" },
                { "x": 0, "y": -3.8, "text": "R" }
              ]
            },
            {
              "x": [-0.3, 6.6], "y": [-1.6, 1.6], "axisY": "ε", "piTicks": true,
              "curves": [{ "c": "sin" }],
              "points": [
                { "x": 1.5708, "y": 1, "label": "peak", "at": "ne" },
                { "x": 0, "y": 0, "label": "zero", "at": "nw" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Instantaneous flux and emf",
          "html": "As the coil rotates at constant ω in a uniform field <i>B</i>, its area vector sweeps through angle θ = <i>ωt</i> from the field. Instantaneous flux linkage: Φ = <i>NBA</i> cos <i>ωt</i>. Instantaneous emf, straight from Faraday's law: ε = -<i>d</i>Φ/<i>dt</i> = <i>NBAω</i> sin <i>ωt</i> = ε₀ sin <i>ωt</i>, with peak emf ε₀ = <i>NBAω</i> = <i>NBA</i>(2π<i>f</i>)."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE AC GENERATOR",
          "tag": "a rotating coil is a sine-wave factory",
          "main": "ε = <i>NBAω</i> sin <i>ωt</i> = ε₀ sin <i>ωt</i>, ε₀ = <i>NBAω</i> = <i>NBA</i>(2π<i>f</i>)<br><i>I</i> = <i>I</i>₀ sin <i>ωt</i>, <i>I</i>₀ = ε₀/<i>R</i>; ε<sub>rms</sub> = ε₀/√2, <i>P</i><sub>avg</sub> = ε₀<sup>2</sup>/2<i>R</i> = ε<sub>rms</sub><i>I</i><sub>rms</sub>",
          "legend": [
            "<i>N</i> is the number of turns; <i>A</i> is the coil's area; <i>B</i> is the field magnitude",
            "ω = 2π<i>f</i> is the angular speed of rotation, <i>f</i> the output frequency in hertz",
            "<i>R</i> is the load resistance across the output"
          ],
          "note": "India's mains frequency is f = 50 Hz, so ω = 100π ≈ 314 rad/s. The rms and average-power lines bridge directly into the Alternating Current chapter's own opening formulas."
        },
        {
          "t": "think",
          "html": "fifty hertz is not a law of physics, only a historical choice, india and most of europe settled on it while north america settled on sixty. either number works: a generator built for sixty hertz output simply spins its armature faster, since f is set by the rotation speed alone, the same NBA omega sin omega t underneath both grids."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SINUSOIDAL GENERATOR EMF",
          "steps": [
            {
              "eq": "θ = <i>ωt</i>, area vector along <i>B</i> at <i>t</i> = 0",
              "why": "A coil of N turns and area A rotates with constant ω in a uniform field B, the rotation axis perpendicular to B. Let the area vector make angle θ with B; with uniform rotation, θ = ωt."
            },
            {
              "eq": "Φ = <i>NBA</i> cos <i>ωt</i>",
              "why": "The flux through one turn is BA cos θ; total flux linkage over N turns follows directly."
            },
            {
              "eq": "ε = -<i>d</i>Φ/<i>dt</i> = <i>NBAω</i> sin <i>ωt</i> = ε₀ sin <i>ωt</i>",
              "why": "Faraday's law: differentiate the flux linkage with respect to time. The derivative of cos ωt is -ω sin ωt, and the two minus signs cancel."
            },
            {
              "eq": "ε = 0 at <i>ωt</i> = 0°, 180°; ε = ε₀ at <i>ωt</i> = 90°",
              "why": "Reading the physics off the result: the sin ωt factor confirms the intuition exactly, peak emf coincides with zero flux and the two are a quarter-cycle apart. The emf reverses sign every half-rotation, precisely why the output alternates."
            }
          ]
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "The clean ε = ε₀ sin <i>ωt</i> output assumes a UNIFORM field <i>B</i> and a UNIFORM angular velocity ω held constant throughout the rotation. A non-uniform field, or an unsteady prime mover speeding up and slowing down, distorts the waveform away from a pure sine, exactly the kind of idealisation every derivation in this chapter has named outright rather than left silent."
        },
        {
          "t": "defgrid",
          "title": "Construction, for the descriptive marks",
          "tag": "the ring is the whole difference between AC and DC",
          "rows": [
            { "k": "Armature", "v": "coil of many turns on a soft-iron core; the rotating part" },
            { "k": "Field magnet", "v": "supplies the uniform field B; permanent magnet in small units, electromagnet in power-station alternators" },
            { "k": "Slip rings", "v": "two rings rotating with the coil; keep the output alternating" },
            { "k": "Brushes", "v": "fixed carbon contacts tapping current from the rings to the external circuit" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · FLUX AND EMF, A QUARTER-CYCLE APART",
          "chips": ["flux: Φ(t) = NBA cos ωt", "emf: ε(t) = ε₀ sin ωt"],
          "captions": [
            "Flux linkage through the rotating coil, peaking when the plane is perpendicular to the field and crossing zero a quarter-cycle later.",
            "The emf this flux induces: zero exactly where the flux was at its peak, and peaking exactly where the flux crossed zero. Lay one curve over the other in your head and the emf is always riding the slope of the flux curve, steepest where the emf peaks, flattest where the emf vanishes."
          ],
          "frames": [
            {
              "x": [-0.3, 6.6], "y": [-1.6, 1.6], "axisY": "Φ", "piTicks": true,
              "curves": [{ "c": "cos" }],
              "points": [
                { "x": 0, "y": 1, "label": "max", "at": "ne" },
                { "x": 1.5708, "y": 0, "label": "zero", "at": "nw" }
              ]
            },
            {
              "x": [-0.3, 6.6], "y": [-1.6, 1.6], "axisY": "ε", "piTicks": true,
              "curves": [{ "c": "sin" }],
              "points": [
                { "x": 1.5708, "y": 1, "label": "peak", "at": "ne" },
                { "x": 0, "y": 0, "label": "zero", "at": "nw" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A rectangular coil of N = 100 turns and area A = 0.020 m² rotates at f = 50 Hz in a uniform field B = 0.50 T. Find the peak emf generated.",
          "steps": [
            "ω = 2πf = 2π(50) = 314.16 rad/s.",
            "ε₀ = NBAω = (100)(0.50)(0.020)(314.16)."
          ],
          "ans": "ε₀ ≈ 314 V, reassuringly close to the peak of India's roughly 220 V rms mains supply, since 220√2 ≈ 311 V."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A generator produces peak emf ε₀ at frequency f. The prime mover is then adjusted so the coil spins at TWICE the angular speed. What happens to (a) the peak emf, (b) the output frequency?",
          "steps": [
            "The trap: changing the peak emf but forgetting the frequency also changes, or over-correcting and quadrupling the emf.",
            "The fast, correct read: both the amplitude and the output frequency are tied to the same ω. Since ε₀ = NBAω and the output frequency IS the rotation frequency,"
          ],
          "ans": "(a) the peak emf doubles, ε₀ ∝ ω; (b) the output frequency doubles, f ∝ ω. Spin faster and the output grows bigger AND faster-alternating, in lock-step."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "The coil of Worked Example 1 (ε₀ = 314 V at 50 Hz) is connected across a load resistor R = 100 Ω. Find the rms emf, the rms current, and the average power delivered.",
          "steps": [
            "ε_rms = ε₀/√2 = 314.16/1.414 ≈ 222 V. I_rms = ε_rms/R = 222/100 = 2.22 A.",
            "P_avg = ε_rms I_rms = (222)(2.22) ≈ 493 W. Check via the peak form: P_avg = ε₀²/2R = (314.16)²/200 ≈ 493 W, agreeing exactly."
          ],
          "ans": "ε_rms ≈ 222 V, I_rms ≈ 2.22 A, P_avg ≈ 493 W."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "For a generator with peak emf ε₀, find (a) the rotation angle θ, measured from the maximum-flux position, at which the instantaneous emf equals half its peak, and (b) the fraction of peak flux linking the coil at that same instant.",
          "steps": [
            "(a) ε = ε₀ sin θ. Setting ε = ε₀/2: sin θ = 1/2, so θ = 30°.",
            "(b) Flux linkage is Φ = Φ₀ cos θ, with Φ₀ = NBA the peak linkage. At θ = 30°: Φ/Φ₀ = cos 30° = √3/2 ≈ 0.866."
          ],
          "ans": "θ = 30°; the flux is still 86.6 percent of its own peak at the instant the emf has already dropped to half of its own. The quantitative face of the 90-degree phase gap: small emf coincides with large flux, and vice versa."
        },
        {
          "t": "mcq",
          "q": "The peak emf of an AC generator with N turns, coil area A, field B, rotating at angular speed ω, is:",
          "opts": [
            { "label": "NBA", "nudge": "This omits ω entirely; it is the peak FLUX linkage, Φ₀ = NBA, not the emf." },
            { "label": "NBAω", "nudge": null },
            { "label": "NBAω²", "nudge": "An extra, unwarranted power of ω; emf is linear in ω, not quadratic." },
            { "label": "BAω", "nudge": "Drops the turn-count N." }
          ],
          "correct": 1,
          "solution": "From ε = NBAω sin ωt, the amplitude is ε₀ = NBAω."
        },
        {
          "t": "mcq",
          "q": "The slip rings in an AC generator serve to:",
          "opts": [
            { "label": "Convert the alternating emf to direct current", "nudge": "This describes a SPLIT-RING COMMUTATOR, the DC-generator part; the classic AC-versus-DC trap." },
            { "label": "Keep the rotating coil electrically connected to the external circuit while preserving the alternating output", "nudge": null },
            { "label": "Increase the magnitude of the emf", "nudge": "Rings do not amplify anything; the emf's size depends only on N, B, A and ω." },
            { "label": "Suppress eddy currents in the core", "nudge": "Eddy currents are handled by laminating the core, an entirely separate concern from the rings." }
          ],
          "correct": 1,
          "solution": "Slip rings rotate with the coil and let stationary brushes tap the output without tangling the leads, each ring staying wired to the same external terminal so the output alternates."
        },
        {
          "t": "mcq",
          "q": "In an AC generator, the induced emf is ZERO at the instant when:",
          "opts": [
            { "label": "The plane of the coil is parallel to B", "nudge": "This is the MAXIMUM-emf condition (flux zero, changing fastest); the most common reversal error in the topic." },
            { "label": "The plane of the coil is perpendicular to B", "nudge": null },
            { "label": "The angular speed is zero", "nudge": "Trivially true but not the cyclic condition the question is asking about; the question concerns coil orientation during ongoing rotation." },
            { "label": "The flux through the coil is zero", "nudge": "\"Flux zero\" is exactly where the emf is at its MAXIMUM, the direct opposite of what this option claims." }
          ],
          "correct": 1,
          "solution": "When the plane is perpendicular to B, the flux is maximum and momentarily not changing, so ε = -dΦ/dt = 0."
        },
        {
          "t": "mcq",
          "q": "If the angular speed of an AC generator is doubled, all else unchanged, then:",
          "opts": [
            { "label": "Only the peak emf doubles", "nudge": "Forgets that the output frequency is set by the same ω, and doubles right alongside the emf." },
            { "label": "The peak emf doubles and the output frequency doubles", "nudge": null },
            { "label": "The peak emf quadruples", "nudge": "Mistakes the linear ω dependence for a quadratic one." },
            { "label": "Neither changes", "nudge": "Ignores the ω dependence of both quantities entirely." }
          ],
          "correct": 1,
          "solution": "Both ε₀ = NBAω and the output frequency scale linearly with ω, so each doubles."
        },
        {
          "t": "p",
          "html": "A real power-station alternator is this same NBAω sin ωt scaled up enormously: many-turn field windings instead of a single permanent magnet, a rotor several metres across, and a field magnet that is itself an electromagnet so its strength can be tuned to hold the output voltage steady as the load on the grid changes through the day. None of that changes the underlying law; it only changes how large N, B and A are allowed to get."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A coil of 200 turns and area 0.015 m² rotates at ω = 120 rad/s in a field of 0.40 T. Find the peak emf.", "a": "ε₀ = NBAω = (200)(0.40)(0.015)(120) = 144 V." },
            { "q": "[NEET] State the coil position, relative to the field, at which the induced emf in an AC generator is maximum, and explain why in one line.", "a": "Maximum when the plane of the coil is parallel to B (area vector perpendicular to B): the flux is then changing at its fastest possible rate." },
            { "q": "[JEE Main] A generator produces a peak emf of 200 V at 50 Hz. Find the instantaneous emf 1/600 s after the emf passes through zero, going positive.", "a": "ωt = 2π(50)(1/600) = π/6 = 30°. ε = 200 sin 30° = 100 V." },
            { "q": "[JEE Main] A generator's peak emf across a 50 Ω resistor is 150 V. Find the average power delivered.", "a": "P_avg = ε₀²/2R = (150)²/100 = 225 W." },
            { "q": "[JEE Advanced] For a coil of N turns and area A rotating at ω in field B, show that the ratio of the instantaneous emf to the instantaneous flux linkage equals ω tan ωt.", "a": "ε/Φ = (NBAω sin ωt)/(NBA cos ωt) = ω tan ωt." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing maximum flux with maximum emf. They are 90 degrees out of phase: emf peaks when flux is zero (plane parallel to B), and is zero when flux is maximum (plane perpendicular). Burn this in.",
            "Forgetting that ε₀ depends on ω. Speed up the rotation and the output grows in amplitude and in frequency together; neither can change without the other.",
            "The AC-versus-DC construction mix-up. Slip rings give AC; a split-ring commutator gives pulsating DC. That ring is the entire structural difference, everything else is identical.",
            "Dropping the 2π. When frequency is given in Hz, convert with ω = 2πf before plugging into ε₀ = NBAω; skipping the conversion is a guaranteed factor-of-six error."
          ]
        },
        {
          "t": "protip",
          "html": "memorize the output in one breath: epsilon equals NBA omega sin omega t, with epsilon-nought equals NBA times two pi f. whenever a question says maximum emf, it means the amplitude epsilon-nought, and at that instant the coil is edge-on to the field. for power questions, jump straight to P average equals epsilon-nought squared over two R."
        },
        {
          "t": "think",
          "html": "an oscilloscope trace of household mains genuinely looks like this chapter's own sin omega t, not an approximation of it, because a well-built alternator's field and rotation speed really do stay close enough to uniform that the distortion this topic's own limiting-conditions note warns about stays small. the sine wave on the screen is the derivation above, made visible."
        },
        {
          "t": "p",
          "html": "This sine wave is where this chapter hands off to the next. Everything from here, how a resistor, an inductor and a capacitor each respond to ε = ε₀ sin ωt, why reactance behaves like a frequency-dependent resistance, how power is actually delivered by a current and voltage that are out of phase, belongs to Alternating Current. What this chapter leaves that discussion with is exactly three things, built and verified across five topics: the source itself, ε₀ sin ωt; the self-inductance L that will define one of its three circuit elements; and the mutual inductance M that makes a transformer possible in the first place."
        },
        {
          "t": "think",
          "html": "five topics, one sentence: a changing flux induces an emf, and the universe never hands that emf out for free. everything else, every formula this chapter carries, is that one sentence wearing a different costume."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 6.8 · THE WHOLE CHAPTER, ONE FLUX, THREE WAYS TO CHANGE IT",
          "chips": ["one idea, five topics"],
          "captions": [
            "Strip away the apparatus and this whole chapter reduces to one sentence: a changing magnetic flux induces an emf, and Lenz's law is that statement's own energy-conservation bookkeeping. There are exactly three things to change in Φ = BA cos θ, and each is a branch of this chapter: change B (Topics 03 and 04, self and mutual induction), change A (Topic 02, motional emf, and its own bulk-conductor cousin, eddy currents), or change θ (Topic 05, the AC generator you just derived)."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "C", "col": 1, "row": 0, "text": "Changing flux\nε = −N dΦ/dt", "tone": "amber" },
                  { "id": "B1", "col": 0, "row": 1, "text": "Change B\nSelf & Mutual" },
                  { "id": "B2", "col": 1, "row": 1, "text": "Change A\nMotional EMF" },
                  { "id": "B3", "col": 2, "row": 1, "text": "Change θ\nAC Generator" },
                  { "id": "E", "col": 1, "row": 2, "text": "Bulk conductor\nEddy currents" }
                ],
                "links": [
                  { "from": "C", "to": "B1" },
                  { "from": "C", "to": "B2" },
                  { "from": "C", "to": "B3" },
                  { "from": "B2", "to": "E" }
                ]
              }
            }
          ]
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Φ = NBA cos ωt, ε = NBAω sin ωt = ε₀ sin ωt", "note": "AC generator; ε₀ = NBAω = NBA(2πf)" },
            { "f": "ε_rms = ε₀/√2, P_avg = ε₀²/2R", "note": "bridges straight into AC-circuit power" },
            { "f": "flux and emf are 90° out of phase", "note": "maximum emf at zero flux, zero emf at maximum flux" },
            { "f": "change B, change A, or change θ", "note": "the whole chapter's one idea, in three branches" }
          ],
          "aids": ["edge-on to the field is where the emf peaks", "slip rings sing AC, split ring barks DC", "one flux, three ways to change it"]
        }
      ]
    }
  ]
};

export default phy12ElectromagneticInduction;
