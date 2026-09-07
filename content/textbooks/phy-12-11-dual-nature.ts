/**
 * Chapter 11 · Dual Nature of Radiation and Matter. Physics, Class 12.
 *
 * Restructured from pages 709 to 754 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-08-electromagnetic-waves.ts.
 *
 * FOUR TOPICS FROM THREE SOURCE SUBTOPICS, WITH EXACTLY ONE SPLIT.
 * The source runs three subtopics: 00 Electron Emission, the Photoelectric
 * Experiments and the Photon (pages 711 to 719), 01 The Photoelectric Effect
 * and Einstein's Equation (720 to 728), 02 Matter Waves and the de Broglie
 * Relation (729 to 737). Three is below the reader's floor of four
 * (scripts/validate-chapters.mjs wants four to six), so one subtopic had to
 * split, and Subtopic 00 is the only one carrying two subjects rather than
 * one. Its first half is ALGEBRA about a particle of light: the four emission
 * routes, the work function, E = hv, p = h/lambda, photon counting, radiation
 * force. Its second half is an EXPERIMENT and the three graphs it produces:
 * the apparatus, current against intensity, current against collector
 * potential, and the three ways classical wave theory fails. Those are not
 * two halves of one argument the way Chapter 8's plane-wave family was; they
 * are a quantity and a measurement, and the seam between them is where the
 * source itself changes register from "Key Formulas" to "Key Procedures". So:
 *   01 Electron Emission and the Photon
 *   02 The Photoelectric Experiments and the Failure of Wave Theory
 *   03 Einstein's Photoelectric Equation
 *   04 Matter Waves and the de Broglie Relation
 * Subtopics 01 and 02 are NOT split. Subtopic 01 is one argument from the
 * one-photon-one-electron postulate to Millikan's straight line, and cutting
 * it would put a checkpoint in the middle of a derivation. Subtopic 02 is one
 * postulate with three consequences (the kinetic-energy form, the accelerated
 * charge, Bohr's orbits) plus the experiment that confirmed it, and the
 * Davisson-Germer half alone is four paragraphs, which is a topic's worth of
 * nothing. 46 pages of which 17 are an addendum that is not a topic is a
 * short chapter, and it is written short: 130 blocks, not the 180 a
 * six-topic version would have needed padding to reach.
 *
 * THE ROUND 2 ADDENDUM (pages 738 to 754: A relativistic corrections for fast
 * electrons, B the quantum efficiency chain, C threshold-energy problems by
 * simultaneous equations, D quantitative uncertainty-principle problems) IS
 * NOT A TOPIC, per the brief. It reaches a student in exactly three places,
 * each one line long: Topic 03's `mistakes` item on quantum efficiency names
 * Addendum B's separation of current from energy, Topic 03's protip on the
 * two-wavelength method names Addendum C's subtraction step, and Topic 04's
 * uncertainty `formula` note quotes Addendum D's order-of-magnitude form.
 * No `ex`, `mcq` or `practice` below is sourced from the addendum and NO
 * ADDENDUM NUMBER is carried anywhere, which matters, because five of them
 * are wrong (see CORRECTIONS below). The relativistic de Broglie formula is
 * not carried in any form: it is outside the NCERT syllabus and the source's
 * own worked example of it is the most damaged page in the range.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full, read rather than
 * assumed). NO ENTRY TOUCHES THIS RANGE. The Class 12 errata has exactly two
 * entries and both are named by chapter: Chapter 7 (Alternating Current),
 * page 14, a Practice 5 whose stated drive frequency IS the resonant
 * frequency of its own stated components; and Chapter 10 (Wave Optics), page
 * 33, thin-film interference with the dark and bright conditions swapped in
 * one sentence. Chapter 11 is not named, and neither entry changes a number,
 * a formula or a claim this chapter uses.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 711 to 754 was recomputed independently, addendum first.
 *
 *   THE MAIN BODY (pages 711 to 737) IS CLEAN. This is the first chapter in
 *   this run where that sentence can be written. Sixteen worked examples,
 *   fifteen practice items and twelve MCQ keys, roughly seventy numerical
 *   answers, and every one of them recomputes. Spot checks, so the claim is
 *   auditable rather than asserted: 500 nm gives 1240/500 = 2.48 eV and
 *   2.48 x 1.6 x 10^-19 = 3.97 x 10^-19 J and h/lambda = 1.33 x 10^-27
 *   kg m/s; a 20 W source at 600 nm gives 20/(2.067 x 1.6 x 10^-19) =
 *   6.0 x 10^19 photons per second; 100 W at 500 nm spread over a sphere of
 *   radius 2 m gives 2.52 x 10^20/(4 pi x 4) = 5.0 x 10^18 m^-2 s^-1; a
 *   30 W beam gives P/c = 1.0 x 10^-7 N absorbed and 2P/c = 2.0 x 10^-7 N
 *   reflected; work function 2.5 eV under 400 nm gives 3.10 - 2.50 = 0.60 eV
 *   and V0 = 0.60 V; the two-wavelength example's data (400 nm at 0.90 V,
 *   250 nm at 2.76 V) is internally CONSISTENT, giving phi0 = 2.20 eV from
 *   both points and h = 1.984 x 10^-25/3 x 10^8 = 6.61 x 10^-34 J s; 3.2 mW
 *   at 620 nm with 0.10 per cent yield gives 1.0 x 10^13 electrons per second,
 *   1.6 microamps, and v_max = sqrt(2 x 1.6 x 10^-20/9.11 x 10^-31) =
 *   1.9 x 10^5 m/s; 12.27/sqrt(100) = 1.227 angstrom and 12.27/sqrt(54) =
 *   1.67 angstrom against the measured 1.65; sqrt(1836) = 42.85; and the
 *   photon-to-electron energy ratio at equal wavelength,
 *   2 m_e c lambda/h = 82.4. Nothing below silently repairs a source number,
 *   because nothing needed repairing.
 *   Two EDITORIAL imprecisions in the main body, corrected in place rather
 *   than carried:
 *   (i) Subtopic 00's Cheat Sheet (page 719) writes "V0 vs nu is a straight
 *       line, slope h/e, intercept nu0". nu0 is the x-intercept; the
 *       y-intercept is -phi0/e, and the two are different facts a graph
 *       question can ask for separately. Page 723 states it correctly. Topic
 *       03's `formula` and its figure name both intercepts explicitly.
 *   (ii) Subtopic 00's intensity relation (page 712) writes
 *       I = P/A = n_ph h nu/A and then glosses n_ph as "the number of photons
 *       EMITTED per second". In I = n_ph h nu/A the same symbol has to mean
 *       photons per second CROSSING A, which is a different quantity as soon
 *       as the beam spreads. Topic 01's `formula` legend distinguishes the
 *       two, and its third worked example is exactly the case where they
 *       differ.
 *
 *   THE ADDENDUM IS NOT CLEAN, exactly as the brief predicted. Recomputed
 *   with particular suspicion, and the five below are carried nowhere.
 *   1. ADDENDUM A, Example A.1, Step 3 (page 740). Both terms under the root
 *      are a decade too large and the root is then taken wrongly. Printed:
 *      "2 m_e eV = 2.92 x 10^-43", "e^2 V^2/c^2 = 2.84 x 10^-44", "sum
 *      3.20 x 10^-43", "sqrt = 4.49 x 10^-22", "lambda = 1.48 x 10^-12 m".
 *      Working: 2(9.11 x 10^-31)(1.6 x 10^-19)(10^5) = 2.92 x 10^-44, and
 *      (1.6 x 10^-19)^2(10^5)^2/(3 x 10^8)^2 = 2.84 x 10^-45, so the sum is
 *      3.20 x 10^-44, whose root is 1.79 x 10^-22 kg m/s, giving
 *      lambda = 3.71 x 10^-12 m. Note also that sqrt(3.20 x 10^-43) is
 *      5.66 x 10^-22 and not the printed 4.49 x 10^-22, so the printed line
 *      is wrong even on its own wrong numbers. CORRECT lambda = 3.7 x 10^-12
 *      m = 0.037 angstrom, which is what the printed text eventually reaches
 *      by a different route. It gets there by abandoning the calculation
 *      mid-page: the words "This differs from the exact calculation above,
 *      let me recompute the ratio method more carefully" and "Let me verify
 *      from first principles with higher precision" are still in the plated
 *      chapter, a leaked draft that a student reads as instruction.
 *   2. ADDENDUM A, Practice 1 (page 742), an electron through 50 kV.
 *      Printed: "p = gamma m_e beta c = 1.77 x 10^-22 kg m/s,
 *      lambda = 3.74 x 10^-12 m = 0.0374 angstrom. Difference: 0.0174
 *      angstrom, about 31.7 per cent too high if non-relativistic is used at
 *      50 kV." The momentum is the 100 kV answer carried over unchanged.
 *      Working: gamma = 1 + 50/511 = 1.0978, beta = sqrt(1 - 1/gamma^2) =
 *      0.4127, p = (1.0978)(9.11 x 10^-31)(0.4127)(3 x 10^8) =
 *      1.238 x 10^-22 kg m/s, lambda = 6.63 x 10^-34/1.238 x 10^-22 =
 *      5.35 x 10^-12 m = 0.0535 angstrom. Cross-checked by the addendum's own
 *      ratio shortcut: 0.0549/sqrt(1 + 50/1022) = 0.0536 angstrom, which
 *      agrees. CORRECT lambda_rel = 0.0536 angstrom, and the non-relativistic
 *      estimate is high by 2.4 per cent, not 31.7. The wrong figure is then
 *      quoted a second time in Practice 3's closing comparison.
 *   3. ADDENDUM B, Practice 1 (page 745), a 5 mW laser at 532 nm with
 *      efficiency 0.01. Printed "i_sat = 1.34 x 10^14 x 1.6 x 10^-19 = 21.4
 *      nA". Working: (1.34 x 10^14)(1.6 x 10^-19) = 2.14 x 10^-5 A, which is
 *      21.4 MICROamps. CORRECT i_sat = 21.4 microamps, three decades from
 *      what is printed, and the printed digits are right, only the prefix is
 *      wrong, which is the kind of slip a student copies without noticing.
 *   4. ADDENDUM C, Example C.1 (pages 747 to 748). The data (200 nm at
 *      2.70 V, 300 nm at 0.90 V) is internally inconsistent: 1240/200 - 2.70
 *      = 3.50 eV against 1240/300 - 0.90 = 3.23 eV, two different work
 *      functions for one metal. The printed text discovers this on the page
 *      ("These give different phi0 because the equations are not
 *      simultaneously satisfied ... Wait, they should give the same answer if
 *      hc is exact. Let me re-examine.") and rescues itself by declaring
 *      h = 5.76 x 10^-34 J s, 13 per cent below the real value, and calling
 *      the data "chosen for clean arithmetic". A worked example whose answer
 *      is a wrong Planck constant teaches a student to accept one. The
 *      consistent version keeps 200 nm at 2.70 V, which fixes phi0 = 3.50 eV,
 *      and then 300 nm MUST give V0 = 1240/300 - 3.50 = 0.63 V, not 0.90 V.
 *      With that datum the subtraction returns hc = 1.984 x 10^-25 J m and
 *      h = 6.61 x 10^-34 J s. Topic 03's third worked example is the
 *      two-wavelength method done on the source's own CONSISTENT data from
 *      Subtopic 01 instead.
 *   5. ADDENDUM D, Method (page 751). "For an electron in an atomic-scale box
 *      dx = 1 angstrom: K_min = hbar^2/(8 m dx^2) = 1.11 x 10^-68/
 *      7.29 x 10^-50 = 1.52 x 10^-18 J = 9.5 eV." Working: the quotient of
 *      those two printed numbers is 1.53 x 10^-19 J, a decade below what is
 *      printed, and 1.53 x 10^-19 J is 0.95 eV, not 9.5 eV. So the error is
 *      compounded: a decade in the division and then the correct conversion
 *      applied to the wrong number. CORRECT K_min = 1.5 x 10^-19 J = 0.95 eV.
 *      The addendum's own Example D.2 computes 0.95 eV from the same formula
 *      four pages later without noticing it contradicts the Method. The
 *      editorial claim that survives is the one about scale: 0.95 eV really
 *      is the order of an atomic binding energy, and Topic 04's uncertainty
 *      note keeps that sentence and drops the number.
 *   Two further addendum passages are not errors but are damaged as prose,
 *   recorded so the next reader of the source is not confused: Addendum B's
 *   Practice 2 reaches the right ratio 1.5 through a printed self-correction
 *   ("Wait, i_sat is proportional to n_inc which is proportional to P lambda")
 *   and its question names a "wavelength-squared factor" that does not exist,
 *   since n_inc = P lambda/hc is linear in lambda; and Addendum C's Example
 *   C.2 imports the true photon energy at 600 nm (2.07 eV) into an example
 *   otherwise running on its own fabricated hc = 756 eV nm, where the value
 *   is 1.26 eV, and then asks itself "Wait" in the middle of the check.
 *
 * SOURCE DAMAGE. Pages 709 to 754 have their own dialect, measured before any
 * of it was read as physics. Every passage below was re-authored from
 * context, never transcribed.
 *
 *   - GREEK AND ITALIC SURVIVE AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), and this is by far the dominant defect in the range: 1,902
 *     instances across 34 distinct code points, which is the chapter's entire
 *     symbol vocabulary. The heaviest are math-italic lambda (233), e (193),
 *     V (189), c (186), phi (139), nu (134), m (134), K (118) and p (117),
 *     then n, P, v, E, x, alpha, eta, r, L, pi, i, gamma, q, T, M, A, epsilon.
 *     These have no font fallback on the device and draw as blank boxes;
 *     validate-chapters rejects them outright. Every symbol below is retyped
 *     as an ordinary character inside <i> tags and every Greek letter as its
 *     plain Unicode form, so phi is U+03C6 and nu is U+03BD.
 *     A trap specific to this chapter: the source uses ONE math-italic phi
 *     for two unrelated quantities, the work function in Subtopics 00 and 01
 *     and the Davisson-Germer SCATTERING ANGLE in Subtopic 02. Topic 04 below
 *     names the scattering angle in words and never writes it as phi.
 *   - THE TOKEN FAMILY, PARTIALLY, and lightly. "\nN" for the multiplication
 *     sign appears 12 times, "\n7" for minus 3 times, "\nA" for a centred dot
 *     once, and "\nK" for the degree sign once. Checked for and ABSENT: "\nC"
 *     (colon) and "\nH" (ellipsis), 0 instances of each. Against 365 correct
 *     U+00D7 and 455 correct U+2212 in the same pages, so this is localised
 *     font fallback, not a whole-range substitution.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. 838
 *     lines in the range are a bare signed integer and nothing else: every
 *     power of ten, every unit exponent, every phi_0 and nu_0 and lambda_0
 *     and K_max, and every dimensional formula breaks into three or four
 *     lines. Recomputing every numerical answer independently, and rebuilding
 *     the DIMENSIONS ledger below from scratch, was the check that these were
 *     reassembled correctly.
 *   - LIGATURES ARE DELETED RATHER THAN SUBSTITUTED, and only in headings.
 *     Eight instances, all in the bold section headings on pages 713, 715 and
 *     732: "Eect of intensity", "Eect of collector potential", "Eect of
 *     frequency", "(frequency and collector potential xed)", "(intensity
 *     xed)", "the experimental conrmation". In body text "field",
 *     "efficiency", "fixed" and "confined" all survive intact, 104 words with
 *     "fi" and 91 with "ff", so this is the heading face and not the run of
 *     text. It is this range's version of the ASCII heading shift that the
 *     Class 11 Waves range logged; the shifts themselves (+29, -29, +46) are
 *     ABSENT here, 0 instances.
 *   - THE DEGREE SIGN NEVER ARRIVES AS ITSELF. U+00B0, 0 instances. The
 *     Davisson-Germer scattering angle is written as U+2218 RING OPERATOR (4
 *     instances) or as the "\nK" token (1). Topic 04 writes ° (U+00B0).
 *   - THE RATIO COLON U+2236 stands in for an ordinary colon in every ratio,
 *     7 instances, all in Subtopic 02's comparison problems. Also present and
 *     re-typed: U+22C5 dot operator (6), U+23DF underbrace (3), U+2272 and
 *     U+2273 (9 between them, in the uncertainty relation), U+2032 prime (6).
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout, and the numeric
 *     case is the dangerous one: "500nm", "2.5eV", "20W", "1.6 × 10-19J",
 *     "54V". 19 instances of a digit against "nm" and 18 against "eV" alone.
 *     In prose: "photoelectric emissioncarefully", "de Brogliewaves",
 *     "the wholeBohr orbit", "Study 1 - Eect of intensity". The running head
 *     joins the same way on every page.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand rather than assumed:
 *     U+20D7 combining arrow (0 instances, and unsurprising, since this
 *     chapter has no vectors), octal escapes of the \050 kind (0), Wingdings
 *     ticks arriving as bare digits (0), leaked LaTeX delimiters (0 dollars,
 *     0 \begin, 0 \frac), HTML entities (0), and the ff/fi/fl ligatures
 *     surviving as U+FB00 to U+FB02 (0; they are deleted instead, above).
 *   - NO SILENTLY EMPTY PAGES. Every page from 709 to 754 was measured for
 *     extracted length before any of it was read. The shortest are 709 (5
 *     lines, the cover), 716 (6), 724 (7) and 733 (8), and each is short
 *     because it genuinely carries almost nothing: 709 is the cover, and 714,
 *     716, 724 and 733 are the book's four "CHAPTER 11 FIGURES" pages, each
 *     holding one or two figure captions and nothing else. No run of blank
 *     pages exists anywhere in the range, so no pdftoppm render was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A. Twenty-four
 * lines checked, twenty-four consistent, none rejected. Current is a base
 * dimension, so [A] is irreducible; charge is [A T].
 *
 *   Base quantities used throughout:
 *     h  [M L2 T-1]        hbar [M L2 T-1]      c [L T-1]
 *     e  [A T]             V (volt) [M L2 T-3 A-1]
 *     energy [M L2 T-2]    momentum [M L T-1]   intensity [M T-3]
 *
 *   T1  E = h nu: [M L2 T-1][T-1] = [M L2 T-2] = J. OK.
 *       E = hc/lambda: [M L2 T-1][L T-1]/[L] = [M L2 T-2]. OK.
 *       p = E/c: [M L2 T-2]/[L T-1] = [M L T-1]. OK, and this is the check
 *       that kills the commonest MCQ trap: hc/lambda has the dimensions of
 *       energy, not momentum, so it cannot be p however familiar it looks.
 *       p = h/lambda: [M L2 T-1]/[L] = [M L T-1]. OK.
 *       h lambda: [M L2 T-1][L] = [M L3 T-1], which is nothing. h lambda/c:
 *       [M L3 T-1]/[L T-1] = [M L2]. Also nothing. Both distractors die on
 *       dimensions alone, without arithmetic.
 *       m_eff = E/c2: [M L2 T-2]/[L2 T-2] = [M]. OK, a mass.
 *       phi0 = h nu0 = hc/lambda0: [M L2 T-2] both ways. OK.
 *       nu0 = phi0/h: [M L2 T-2]/[M L2 T-1] = [T-1] = Hz. OK.
 *       lambda0 = hc/phi0: [M L3 T-2]/[M L2 T-2] = [L]. OK.
 *       I = P/A: [M L2 T-3]/[L2] = [M T-3] = W m-2. OK.
 *       n = P/(h nu): [M L2 T-3]/[M L2 T-2] = [T-1]. OK, a rate.
 *       n = P lambda/(hc): [M L2 T-3][L]/([M L2 T-1][L T-1]) =
 *       [M L3 T-3]/[M L3 T-2] = [T-1]. OK, the same rate by the other route,
 *       which is the check that the two forms of the counting formula are one
 *       formula.
 *       F = P/c: [M L2 T-3]/[L T-1] = [M L T-2] = N. OK. Pc would give
 *       [M L3 T-4], which is not a force, so the direction of the division
 *       is not a matter of memory.
 *   T2  e V0 = K_max: [A T][M L2 T-3 A-1] = [M L2 T-2]. OK, an energy on each
 *       side, which is the entire content of the stopping-potential idea.
 *       i_sat = n_e e: [T-1][A T] = [A]. OK, an ampere.
 *       I proportional to n: [M T-3] against [T-1] is NOT an identity and is
 *       not claimed as one; the law is a proportionality at fixed photon
 *       energy and area, where I = n h nu/A restores it exactly, checked
 *       above.
 *   T3  K_max = h nu - phi0: [M L2 T-2] - [M L2 T-2]. OK, and a subtraction
 *       is the strongest kind of dimensional check, because both terms must
 *       match each other and not merely the answer.
 *       K_max = (1/2) m v2: [M][L2 T-2] = [M L2 T-2]. OK.
 *       V0 = (h/e) nu - phi0/e. First term: [M L2 T-1]/[A T] x [T-1] =
 *       [M L2 T-3 A-1] = volt. OK. Second term: [M L2 T-2]/[A T] =
 *       [M L2 T-3 A-1] = volt. OK. Both terms are volts, so the equation of
 *       a straight line in nu is legal.
 *       slope h/e: [M L2 T-1]/[A T] = [M L2 T-2 A-1], and a volt second is
 *       [M L2 T-3 A-1][T] = [M L2 T-2 A-1]. OK, so the slope really is in V s
 *       and 4.14 x 10^-15 V s is the number a graph must return.
 *   T4  lambda = h/p: [M L2 T-1]/[M L T-1] = [L]. OK.
 *       lambda = h/(m v): [M L2 T-1]/([M][L T-1]) = [L]. OK.
 *       lambda = h/sqrt(2 m K): 2 m K = [M][M L2 T-2] = [M2 L2 T-2], whose
 *       root is [M L T-1], a momentum, so lambda = [L]. OK.
 *       lambda = h/sqrt(2 m q V): m q V = [M][A T][M L2 T-3 A-1] =
 *       [M2 L2 T-2], root [M L T-1]. OK, and this is the check that q V is
 *       standing in for K rather than for something else.
 *       K = p2/2m: [M2 L2 T-2]/[M] = [M L2 T-2]. OK.
 *       2 pi r = n lambda: [L] = [L]. OK.
 *       m v r = n h/2 pi: [M][L T-1][L] = [M L2 T-1] = [h]. OK, and this is
 *       why Planck's constant is the natural unit of angular momentum.
 *       dx dp >= hbar/2: [L][M L T-1] = [M L2 T-1] = [h]. OK.
 *       The 12.27/sqrt(V) shortcut is a NUMERICAL identity, not a dimensional
 *       one: it hides h, m_e and e inside the 12.27 and only balances when V
 *       is read in volts and lambda in angstrom. Its note below says so,
 *       because a student who substitutes SI volts and expects metres will
 *       be out by ten decades.
 *
 * hc = 1240 eV nm, CHECKED NUMERICALLY, because the whole chapter runs on it
 * and a shortcut nobody has verified is a rumour.
 *   hc = (6.63 x 10^-34 J s)(3.00 x 10^8 m/s) = 1.989 x 10^-25 J m
 *   in eV: 1.989 x 10^-25/1.6 x 10^-19 = 1.243 x 10^-6 eV m
 *   in nm: 1.243 x 10^-6 x 10^9 = 1243 eV nm
 *   which is 1240 eV nm to three figures. With the unrounded constants
 *   (h = 6.626 x 10^-34, c = 2.998 x 10^8, e = 1.602 x 10^-19) it returns
 *   1239.8 eV nm, so the 1240 is the true value and the 1243 is the rounding
 *   of h and c, not the other way round. Topic 01's `deriv` builds it in four
 *   steps and its final `why` says exactly that. Every photon energy below is
 *   computed from it and cross-checked against E = hc/lambda in SI at least
 *   once per topic.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   VISIBLE PHOTONS CARRY 1.8 TO 3.1 eV. Computed rather than quoted:
 *   1240/700 = 1.77 eV and 1240/400 = 3.10 eV. This is the sanity anchor for
 *   the whole chapter, and it is why a work function near 2 eV is the
 *   interesting case: caesium at 2.14 eV can be worked by green light and
 *   platinum at 5.65 eV cannot be worked by any visible light at all.
 *   Topic 01's second figure marks both ends of the visible band on the
 *   1240/lambda curve and Topic 01's first figure draws the two metals
 *   against a blue photon.
 *   AN ELECTRON THROUGH V VOLTS HAS lambda = 1.227/sqrt(V) nm, which is
 *   0.123 nm at 100 V. Every de Broglie answer below is checked against it:
 *   0.061 nm at 400 V, 0.167 nm at 54 V, and 150 V for a wavelength of
 *   exactly 1 angstrom. That 0.12 nm is the same size as the spacing between
 *   atoms in a crystal, which is the entire reason electrons diffract, and
 *   Topic 04's numberline figure is that coincidence drawn.
 *   STOPPING POTENTIAL IS NEVER NEGATIVE. Below the threshold there is no
 *   emission at all, so V0 is zero, not negative; the straight line V0
 *   against nu is physical only for nu >= nu0 and its continuation to the
 *   negative y-intercept -phi0/e is an EXTRAPOLATION. Topic 03's figure draws
 *   the physical part solid and the extrapolation dashed for that reason, and
 *   its caption says which is which.
 *   ELECTRON SPEEDS STAY NON-RELATIVISTIC. The fastest photoelectron below is
 *   6.5 x 10^5 m/s, about 0.002c, so p = m v is safe everywhere and the
 *   relativistic correction the addendum spends four pages on is 10^-6 of the
 *   answer. Stated once in Topic 03's `mistakes` rather than carried.
 *   PHOTON COUNTS ARE ASTRONOMICAL. A 20 W lamp emits 6 x 10^19 photons a
 *   second. That number is why the quantum nature of light is invisible in
 *   everyday life, and it is the same argument as the cricket ball's
 *   wavelength, run from the other end.
 *
 * LIMITING CASES, used where they teach something.
 *   EXACTLY AT THE THRESHOLD, K_max = h nu0 - phi0 = 0. The electrons emerge
 *   with zero kinetic energy, the stopping potential is zero, and the
 *   photocurrent is not negative or undefined but simply the edge of
 *   existence. Below nu0 the equation would return a negative K_max, which
 *   does not mean electrons with negative energy; it means the premise fails
 *   and there is no emission to describe. Topic 03's `deriv` closes on this
 *   step and Topic 03's third MCQ is it read as a question.
 *   BRIGHTER LIGHT BELOW THRESHOLD IS STILL NOTHING. The intensity does not
 *   appear in K_max = h nu - phi0 at all, so no multiplier on it can rescue a
 *   photon that individually cannot pay. This is the limit that kills the
 *   classical picture, and Topic 02 states it as the second of the three
 *   failures.
 *   EQUAL MOMENTUM MEANS EQUAL WAVELENGTH, FOR ANYTHING. lambda = h/p has no
 *   mass, no charge and no particle identity in it, so a photon and an
 *   electron of the same wavelength have the same momentum exactly. Their
 *   ENERGIES differ by 2 m c lambda/h, which at 1 angstrom is a factor of 82,
 *   because the photon spends its energy as pc and the electron as p2/2m.
 *   Topic 04's fourth worked example is that pair of facts side by side.
 *   THE CRICKET BALL AND THE ELECTRON ARE THE SAME FORMULA. lambda = h/p
 *   gives 1.1 x 10^-34 m for a 0.15 kg ball at 40 m/s and 1.2 x 10^-10 m for
 *   an electron through 100 V, twenty-four decades apart, and the wave nature
 *   has not switched off in between. Topic 04's numberline is that span drawn
 *   to scale, which no sentence does.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-12-08-electromagnetic-waves.ts, and this is the chapter's whole
 *     dramatic premise, so it is quoted rather than restated:
 *       * That light IS an electromagnetic wave, that Maxwell predicted it
 *         and Hertz produced it, and that c = 1/sqrt(mu0 eps0). Topic 01's
 *         opening paragraph cites that chapter by name in one sentence and
 *         does not rebuild any of it. The point of this chapter is that the
 *         picture is incomplete, which is only interesting if the picture is
 *         first granted, and granting it in one line rather than ten is the
 *         difference between a seam and a repetition.
 *       * Its E = hf photon-energy `formula` in Topic 04, which that chapter
 *         wrote and explicitly flagged as "the bridge to Chapter 11, Dual
 *         Nature". This chapter is the other side of that bridge and says so.
 *       * Its E(eV) = 1240/lambda(nm) shortcut, which it states in its own
 *         Topic 04 snapshot as "the one shortcut worth memorising outright".
 *         Topic 01 below DERIVES it rather than quoting it, because a
 *         shortcut used forty times in one chapter should be built once where
 *         it lives, and because that chapter states it without the arithmetic.
 *       * Its visible band, 400 to 700 nm and about 1.8 to 3.1 eV, quoted
 *         exactly. Topic 01's figure marks the same two numbers.
 *       * Its Duane-Hunt limit, V(volts) = 1240/lambda_min(nm), named once in
 *         Topic 01's protip as the same shortcut running backwards. The
 *         X-ray tube itself belongs to that chapter and is not re-taught.
 *       * NOT quoted: its radiation-pressure family. That chapter derives
 *         P_rad = I/c and 2I/c from the wave picture and draws absorption
 *         against reflection. This chapter reaches the same F = P/c and 2P/c
 *         from PHOTON momentum instead, which is a genuinely different
 *         argument reaching the same number, so Topic 01 states the photon
 *         derivation in full and its `formula` note names the wave route as
 *         the other half of the same fact rather than pretending to be new.
 *   - The Bohr model is NOT quoted from a sibling, and the reason changed
 *     between the two checks, so it is recorded in full. Topic 04 needs
 *     m v r = n h/2 pi to show that de Broglie explains it. On the FIRST
 *     check, content/textbooks held no Class 12 Atoms chapter at all. On the
 *     SECOND, after Topic 04 was drafted, phy-12-12-atoms.ts HAD appeared and
 *     was being written concurrently: at that moment three topics of an
 *     intended five, its own header announcing that its Topic 04 carries "the
 *     energy ladder ... and the de Broglie standing wave", and not yet
 *     registered in lib/textbooks.ts. Quoting a file that is still growing
 *     would pin this chapter to wording that may not survive its own author's
 *     next edit, and the two chapters would then be quoting each other on the
 *     same standing wave from opposite directions. So nothing is quoted.
 *     Topic 04's `deriv` states Bohr's quantisation condition inline, as a
 *     postulate that de Broglie's standing wave then accounts for, and its
 *     final `why` names the Atoms chapter as the owner of the rest of the
 *     model. That `why` is the one place a quotation should replace an inline
 *     statement once that sibling lands and registers, and nothing else below
 *     depends on it. What Atoms can safely quote FROM here is listed in NOTES
 *     at the end of this header.
 *   - phy-11-14-waves.ts: the standing wave, and specifically that a standing
 *     wave on a closed loop must contain a whole number of wavelengths or
 *     cancel itself. Topic 04's Bohr `deriv` and its orbit figure both cite
 *     that chapter for the resonance condition rather than proving it again;
 *     a string fixed at both ends and an electron wave closing on itself are
 *     the same argument.
 *   - phy-12-01-electric-charges-fields.ts: that the electron's charge is
 *     1.6 x 10^-19 C and that work done on a charge q through a potential
 *     difference V is qV. Topic 03's stopping-potential `deriv` and Topic
 *     04's accelerated-charge `deriv` both use it in one step and neither
 *     re-derives it.
 *
 * NINE FIGURE BLOCKS, CARRYING ALL 8 THE SOURCE NAMES PLUS 3 DESIGNED HERE.
 * Nine blocks rather than eleven because three of the source's figures are
 * one comparison and are drawn as three chips of a single block, and because
 * two more are the same graph drawn twice and are merged. Nineteen frames in
 * total, every one of them a chip.
 * The source names exactly eight, on its four "CHAPTER 11 FIGURES" pages
 * (714, 716, 724, 733), and all eight are drawn below.
 *   11.1 (page 714), the evacuated tube with emitter C, collector A, a quartz
 *     window, a reversible-tap battery, a voltmeter across the plates and a
 *     microammeter in series, is Topic 02's `circuit`, two chips. The two
 *     chips are the two BATTERY POLARITIES, which is the one thing the source
 *     describes in words and never draws: accelerating on chip 1, retarding
 *     on chip 2, same circuit, same components, one part reversed.
 *   11.2, 11.3 and the LEFT HALF of 11.4 are ONE `plot` in Topic 02 with
 *     three chips, because they are the source's own three numbered studies
 *     and reading them as a sequence is the whole lesson. Chip 1 is 11.2,
 *     current against intensity through the origin. Chip 2 is 11.3, two
 *     intensities at one frequency, TWO CURVES IN ONE FRAME: same stopping
 *     potential, different saturation current. Chip 3 is 11.4's left panel,
 *     two frequencies at one intensity, again two curves in one frame: same
 *     saturation current, different stopping potential. THE PANEL RULE IS
 *     HONOURED throughout; at 316pt two panels would be 150pt each and the
 *     entire point of these figures is a comparison you can only make when
 *     both curves share an axis.
 *   11.4's RIGHT HALF merges into 11.6, below, rather than being drawn twice:
 *     they are the same graph, V0 against nu, and the source draws it once
 *     for one metal and once for two.
 *   11.5 (page 724), one photon striking one electron at the surface with the
 *     electron leaving carrying K_max, is Topic 03's first figure, two chips.
 *     Chip 2 is the case the source's picture does not show and the physics
 *     turns on: the same collision below threshold, where nothing leaves.
 *   11.6 (page 724), stopping potential against frequency for two metals as
 *     two PARALLEL lines of slope h/e cutting the axis at different nu0, is
 *     Topic 03's second figure and the defining graph of the chapter. Chip 1
 *     is one metal with its solid physical branch and its dashed
 *     extrapolation down to -phi0/e; chip 2 adds the second metal. The
 *     PARALLELISM IS THE FACT: h is universal and the work function is not.
 *   11.7 (page 733), a circular Bohr orbit with a standing wave wrapped
 *     around it showing exactly n = 4 wavelengths, is Topic 04's second
 *     figure. Chip 2 is the case that makes chip 1 mean anything: a
 *     non-integer number of wavelengths, drawn over two laps, where the
 *     second lap arrives out of step with the first and the wave cancels.
 *   11.8 (page 733), the Davisson-Germer apparatus and its polar
 *     intensity-against-angle plot with a bump at 50 degrees, is Topic 04's
 *     third figure, two chips: the apparatus, then the measurement. Two
 *     chips rather than the source's two side-by-side panels, per the panel
 *     rule, and they are genuinely two pictures rather than one split.
 * The three designed here, and why each earns its space:
 *   T1  The surface barrier as an energy ladder, `levels`, two chips. Chip 1
 *       puts caesium (2.14 eV) and platinum (5.65 eV) below one shared vacuum
 *       level, so the work function is a VISIBLE HEIGHT rather than a symbol.
 *       Chip 2 fires the same blue photon (2.76 eV) at both: in caesium the
 *       electron lands above the vacuum level and leaves with 0.62 eV, in
 *       platinum it lands 2.76 eV short and falls back. That is the whole
 *       chapter in one picture, and the source's fish-in-a-pond paragraph is
 *       reaching for it without drawing it.
 *   T1  Photon energy against wavelength, `plot`, two chips: the 1240/lambda
 *       curve, then the visible window marked on it at 3.10 eV and 1.77 eV.
 *       The hc = 1240 eV nm shortcut is used forty times below and it is a
 *       hyperbola, which is a thing a student can see steepening towards the
 *       blue.
 *   T4  The de Broglie wavelength across scales, `numberline`, two chips on
 *       the rule log10(lambda/m). Chip 1 is the everyday world: a cricket
 *       ball at 10^-34 m and a dust grain at 10^-21 m against the atomic
 *       spacing at 10^-10 m, twenty-four decades of nothing. Chip 2 zooms to
 *       the quantum end, where a 100 V electron lands ON the atomic spacing
 *       and a 100 V proton lands a decade and a half short. Twenty-eight
 *       decades cannot be plotted any other way, and the coincidence in chip
 *       2 is the reason electron diffraction exists at all.
 * RENDERER FACTS HONOURED, each one live while drawing this:
 *   - A POINT LABEL DEFAULTS TO NORTH-EAST, which is exactly wrong for a
 *     threshold frequency marked on a rising line, and Topic 03's figure is
 *     nothing but rising lines leaving their own thresholds to the
 *     north-east. Every nu0 marker below carries at: "se" for that reason,
 *     and the -phi0/e intercept carries at: "sw".
 *   - A `circle` CURVE is round only when both axes carry the same pixels per
 *     unit. Topic 04's Bohr orbit is drawn on a square window x and y both
 *     [-1.6, 1.6] with aspect 0.987, which is the value that equalises the
 *     two scales exactly given the renderer's own padding (width 308, left
 *     and right pad 10, top and bottom pad 8 with axes off). Checked by
 *     arithmetic rather than by eye, and check-figures agrees.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, so the metal
 *     surface in Topic 03's photon figure is an axis-aligned rectangle and
 *     nothing else below is hatched at all.
 *   - TWO COLLINEAR STROKES READ AS ONE LINE. In Topic 02's I-V frames the
 *     two curves are deliberately given different saturation values or
 *     different stopping potentials, which is the physics AND the separation;
 *     where they must coincide (the two-frequency frame shares a saturation
 *     current) they approach it from visibly different directions and the
 *     shared plateau is stated in the caption rather than drawn twice.
 *   - A HORIZONTAL ARROW'S at: "above" LABEL LANDS BELOW when the arrow
 *     points left. Topic 03's photon figure has no leftward arrow for that
 *     reason; the incoming photon comes down from the upper left and the
 *     electron leaves to the upper right, so both labels sit where they read.
 *   - `flow` box text is plain SVG with NO markup and must fit its row. No
 *     `flow` figure appears below: the four emission types are a `defgrid`,
 *     because they are four independent facts rather than a chain, and a
 *     four-box row with no links between them is a table drawn badly.
 *   - `check-figures` INSPECTS ONLY `plot`, `numberline` AND `flow`, so
 *     Topic 02's `circuit` and Topic 01's `levels` were placed by hand
 *     against the renderers' own arithmetic in components/textbook/figures.tsx.
 *     For the circuit: grid 10 by 6 at aspect 0.62 gives X(n) = 22 + 26.4n
 *     and Y(n) = 22 + 24.5n on a 308 by 191 canvas, so the microammeter's
 *     right-side label sits at x = 247 and clears the edge, and the
 *     photocell's label was moved to side "below" so it clears the light
 *     beam's own label at the tip of the current arrow. For the levels
 *     figure: rows land at 16, 37, 108, 132 and 224 px on chip 2, the closest
 *     pair 21 px apart, and the two jump labels sit at x = 115 and x = 144 at
 *     y = 62 and y = 178, so nothing overlaps anything.
 * No new figure vocabulary is requested. Everything this chapter wanted to
 * draw, `plot`, `numberline`, `levels` and `circuit` could already draw.
 *
 * NOTES: WHAT ATOMS AND NUCLEI CAN QUOTE FROM HERE, established below and
 * stated once so the next two chapters do not rebuild any of it.
 *   - THE PHOTON ITSELF, Topic 01: E = h nu = hc/lambda, p = h/lambda, zero
 *     rest mass, effective mass E/c^2, electrically neutral. Atoms needs the
 *     photon for every emission and absorption line and Nuclei needs it for
 *     gamma decay; neither needs to reintroduce it.
 *   - hc = 1240 eV nm, DERIVED here in Topic 01 rather than asserted, with
 *     the rounding accounted for. This is the single most useful line in
 *     modern physics and Atoms will want it on every spectral wavelength.
 *     Nuclei works in MeV and fm, where the same constant reads
 *     hc = 1240 MeV fm, which is the identical number with both units scaled
 *     by 10^6; that restatement is one line and is worth making explicitly
 *     rather than leaving a student to notice.
 *   - THE ELECTRONVOLT, Topic 01's `def` and its `think`: 1 eV =
 *     1.6 x 10^-19 J, why the unit exists, and the two rules that follow
 *     (E in eV is 1240/lambda in nm; a kinetic energy in eV equals a stopping
 *     potential in volts). Nuclei's MeV and Atoms' 13.6 eV both sit on it.
 *   - THE DE BROGLIE RELATION AND THE STANDING WAVE ON AN ORBIT, Topic 04.
 *     Its `deriv` takes 2 pi r = n lambda to m v r = n h/2 pi in four steps,
 *     and its Figure 11.7 draws the fitting and the non-fitting case side by
 *     side as two chips. Atoms should quote that derivation and that figure
 *     for its own account of why Bohr's second postulate is a resonance
 *     condition, rather than redrawing the orbit. What Atoms owns and this
 *     chapter deliberately does not touch: the force balance that fixes the
 *     radius, the energy ladder, the spectral series and the Rydberg formula.
 *   - lambda = h/sqrt(2 m K) AND THE 12.27/sqrt(V) SHORTCUT, Topic 04, with
 *     the warning that the shortcut is a numerical identity in volts and
 *     angstrom and not a dimensional one. Nuclei's scattering problems and
 *     any electron-microscope aside can quote both.
 *   - THE UNCERTAINTY PRINCIPLE in the form dx dp >= hbar/2, Topic 04's last
 *     `formula`, together with the reading that confinement costs kinetic
 *     energy: about 1 eV for an electron in 1 angstrom. Nuclei can scale that
 *     same argument to a nucleon in 10^-14 m and get hundreds of keV, which
 *     is the standard justification for nuclear energy scales, and it is one
 *     substitution rather than a new idea.
 *   - THE STOPPING-POTENTIAL GRAPH AS A MEASURING INSTRUMENT, Topic 03: read
 *     the slope for a universal constant, read the intercept for a property
 *     of the sample. That is the same reading Nuclei's binding-energy curve
 *     and Atoms' Rydberg plots ask for, and Topic 03's `proc` states it as a
 *     transferable procedure rather than as a fact about photocells.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12DualNature: Chapter = {
  "chapter": "11",
  "title": "Dual Nature of Radiation and Matter",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Electron Emission and the Photon",
      "chip": "01 THE PACKET",
      "kalam": "light arrives in lumps, and every metal charges an exit fee",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Electron Emission and the Photon</b><br>Pure foundation marks. CBSE Boards ask the four types of electron emission and the properties of a photon as guaranteed 1 to 3 mark questions. NEET loves photon energy, photon momentum and number of photons per second. JEE Main extends the photon to intensity and photon flux; JEE Advanced adds radiation force. Nothing here is optional, because the rest of the chapter stands on it.<br><br><b>02 · The Photoelectric Experiments and the Failure of Wave Theory</b><br>The characteristic graphs turn up almost every year. CBSE Boards ask you to describe the experiment or sketch and explain one of the three curves, for 2 to 3 marks. NEET asks the single most repeated conceptual trap in the syllabus: what changes when you raise the intensity, and what changes when you raise the frequency. JEE Main gives you a graph and asks you to read it.<br><br><b>03 · Einstein's Photoelectric Equation</b><br>One of the highest-yield topics in all of Class 12. NEET asks 1 to 2 questions almost every year, usually the intensity-against-frequency trap or a one-step numerical. JEE Main reliably carries one question, often a graph slope or a two-wavelength numerical. JEE Advanced folds it into multi-part problems on photon flux and saturation current. CBSE Boards include a guaranteed derivation or a 2 to 3 mark numerical. If you master nothing else in this chapter, master this.<br><br><b>04 · Matter Waves and the de Broglie Relation</b><br>A guaranteed scorer. NEET asks one question nearly every year, almost always a same-energy or same-momentum comparison trap. JEE Main reliably has one numerical, often the accelerated-electron shortcut or a ratio. JEE Advanced links it to the Bohr model or pairs it with photon energy. CBSE Boards ask for the de Broglie relation, the accelerated-electron result, or the Davisson-Germer experiment, worth 2 to 3 marks."
        },
        {
          "t": "p",
          "html": "Electromagnetic Waves left light in a settled state. Maxwell predicted it, Hertz produced it in a laboratory, and its speed <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) falls out of two constants measured with capacitors and coils. Light is a wave. That chapter proved it and this one does not reopen it.<br><br>This chapter is about the experiment that showed the picture is <b>incomplete</b>. In 1887 Heinrich Hertz, of all people, noticed almost by accident that a spark jumped more easily across a gap when ultraviolet light fell on the metal electrodes. Hallwachs and Lenard chased it down. What they found could not be explained by any wave, however carefully you argued, and the way out was to admit that light also arrives in <b>countable lumps</b>."
        },
        {
          "t": "p",
          "html": "Start with the metal rather than the light. A metal conducts electricity because it is full of electrons that drift around almost freely. So here is a fair question: if these electrons are free, why do they not simply leak out of the surface and drip off the metal like water off a wet cloth?<br><br>Because <b>free means free to roam inside, not free to leave</b>. Picture a pond full of fish. A fish swims wherever it likes within the water, but to jump clear of the surface and into the air it needs a sudden burst of energy, and even then the surface seems to pull it back. A metal's surface behaves the same way. It sets up an invisible energy barrier that holds the electrons in, and the minimum energy an electron must be given to just clear that barrier is the <b>work function</b>."
        },
        {
          "t": "think",
          "html": "the work function is an exit fee. it is not a speed limit and not a force, just a fixed toll in joules that the metal charges any electron that wants out. pay it and you leave with whatever change you have left. come up short and you do not leave at all, no matter how many times you try."
        },
        {
          "t": "def",
          "term": "Work function, φ<sub>0</sub>",
          "html": "The <b>minimum energy</b> that must be supplied to an electron at the surface of a metal for it to just escape. It is a property of the <b>metal</b>, not of whatever you shine on it, and it depends on the surface: an oxide layer raises it, which is why photoelectric experiments run on clean surfaces in vacuum. Caesium is leaky, at about 2.14 eV; platinum holds on hard, at about 5.65 eV. Almost always quoted in <b>electronvolts</b>, where 1 eV = 1.6 × 10<sup>−19</sup> J."
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE · THE BARRIER, AS A HEIGHT",
          "chips": ["two metals", "one blue photon"],
          "captions": [
            "One shared reference line at the top: an electron sitting on it is free, just outside the surface with no energy to spare. Below it sit the electrons of two metals, and the gap is the work function. Caesium's electrons sit 2.14 eV below freedom, platinum's sit 5.65 eV below it. Nothing about the light has been mentioned yet, and that is the point. The barrier belongs to the metal and it is there whether you shine anything on it or not.",
            "Now fire the same photon at both. Blue light at 450 nm carries 1240/450 = 2.76 eV, one indivisible packet, and it hands the whole of it to one electron. In caesium the electron lands 0.62 eV above the free line and leaves the metal carrying that 0.62 eV as kinetic energy. In platinum the same photon lifts the electron by exactly the same 2.76 eV and it is still 2.89 eV below freedom, so it falls back and nothing at all comes out. Same light, same energy delivered, opposite result, and the only thing that differs is the height of the barrier."
          ],
          "frames": [
            {
              "aspect": 0.78,
              "levels": {
                "rows": [
                  { "at": 0, "label": "free", "right": "vacuum" },
                  { "at": -2.14, "label": "caesium", "dash": true },
                  { "at": -5.65, "label": "platinum", "dash": true }
                ],
                "jumps": [
                  { "from": -2.14, "to": 0, "label": "φ₀ = 2.1 eV", "tone": "amber" },
                  { "from": -5.65, "to": 0, "label": "φ₀ = 5.6 eV", "tone": "amber" }
                ]
              }
            },
            {
              "aspect": 0.78,
              "levels": {
                "rows": [
                  { "at": 0.62, "right": "escapes", "tone": "green" },
                  { "at": 0, "label": "free", "right": "vacuum" },
                  { "at": -2.14, "label": "caesium", "dash": true },
                  { "at": -2.89, "right": "stuck", "tone": "red" },
                  { "at": -5.65, "label": "platinum", "dash": true }
                ],
                "jumps": [
                  { "from": -2.14, "to": 0.62, "label": "2.76 eV", "tone": "green" },
                  { "from": -5.65, "to": -2.89, "label": "2.76 eV", "tone": "red" }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "If an electron needs an energy kick of at least φ<sub>0</sub> to escape, the whole question becomes: <b>how do you deliver that kick?</b> Nature runs four delivery services, and they are the four types of electron emission. One word in a question triggers the right one every time."
        },
        {
          "t": "defgrid",
          "title": "The four types of electron emission",
          "tag": "MATCH CAUSE TO NAME",
          "rows": [
            { "k": "Thermionic emission", "v": "<b>Heat.</b> Warm the metal, as in the filament of a vacuum tube or an old television picture tube. The electrons jiggle harder and the most energetic of them leap out." },
            { "k": "Photoelectric emission", "v": "<b>Light.</b> Shine light on the metal. If a single packet of light is energetic enough, it knocks one electron out. <b>This is the type that occupies the rest of this chapter.</b>" },
            { "k": "Field emission", "v": "<b>A strong electric field</b>, of order 10<sup>8</sup> V/m applied from outside. The field pulls electrons straight off the surface with no heating at all, which is why it is also called cold-cathode emission." },
            { "k": "Secondary emission", "v": "<b>Bombardment.</b> Fire fast electrons or ions at the surface. The incoming particles dump their energy and splash electrons out, like a cricket ball smashing into a stack of marbles." }
          ]
        },
        {
          "t": "p",
          "html": "Now the light. Einstein's proposal in 1905 was that a beam of light is not a smoothly spread wave of energy but a <b>stream of discrete packets</b>, each carrying a fixed amount of energy set by the frequency alone. We call a packet a <b>photon</b>.<br><br>Read that carefully, because it is stranger than it looks. It does not say light behaves <i>as if</i> it were lumpy. It says the energy of a beam is delivered in whole units and never in fractions of one, so an electron either receives a full packet or receives nothing. There is no partial absorption and no saving up."
        },
        {
          "t": "def",
          "term": "Photon",
          "html": "A <b>quantum of light</b>: one indivisible packet of electromagnetic energy, of energy <i>E</i> = <i>h</i>ν and momentum <i>p</i> = <i>h</i>/λ. It travels at <i>c</i> in vacuum, has <b>zero rest mass</b>, and is electrically <b>neutral</b>, so no electric or magnetic field deflects it. In a collision with a particle, total energy and total momentum are conserved, but the <b>number</b> of photons need not be: a photon can be created or destroyed outright, which no ordinary particle can."
        },
        {
          "t": "defgrid",
          "title": "Properties of a photon",
          "tag": "THE PARTICLE NATURE OF LIGHT",
          "rows": [
            { "k": "Speed and mass", "v": "Travels at <i>c</i> in vacuum and has <b>zero rest mass</b>, so it cannot exist at rest. Its effective or dynamic mass is <i>E</i>/<i>c</i><sup>2</sup> = <i>h</i>ν/<i>c</i><sup>2</sup>, which is not zero and is what carries its momentum." },
            { "k": "Charge", "v": "<b>Electrically neutral</b>. No electric or magnetic field deflects a photon, which is one of the fastest ways to tell a photon from any charged particle in a question." },
            { "k": "In collisions", "v": "Total energy and total momentum are <b>conserved</b>, exactly as for any particle collision. But the <b>number of photons is not</b>: one can be created or destroyed in a single event." },
            { "k": "Intensity", "v": "For monochromatic light, intensity is set by the <b>number</b> of photons crossing unit area per unit time, and not by the energy of each one. Colour fixes the packet size; brightness fixes the count." }
          ]
        },
        {
          "t": "def",
          "term": "The electronvolt",
          "html": "The energy gained by one electron falling through a potential difference of one volt: 1 eV = <i>e</i> × 1 V = <b>1.6 × 10<sup>−19</sup> J</b>. It is the natural unit here because everything in this chapter is one electron's worth of energy, and 10<sup>−19</sup> J is an awkward number to carry around. Two rules follow and both are used constantly. A photon's energy in eV is 1240 divided by its wavelength in nanometres. And a kinetic energy quoted in eV equals, numerically, the stopping potential in volts."
        },
        {
          "t": "think",
          "html": "the eV is not a new kind of energy, just a different sized bucket. one joule is about six billion billion electronvolts, which is why a single photon measured in joules always comes out as 10 to the minus something horrible. keep the whole calculation in eV and the powers of ten stop appearing at all, right up until the last line when somebody asks for SI."
        },
        {
          "t": "formula",
          "kicker": "ENERGY OF A PHOTON",
          "tag": "SET BY FREQUENCY ALONE",
          "main": "E = hν = hc/λ",
          "legend": [
            "<i>E</i> is the energy of one photon, in joules (J), or in electronvolts where 1 eV = 1.6 × 10<sup>−19</sup> J.",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s is Planck's constant.",
            "ν is the frequency of the light, in hertz (Hz).",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s is the speed of light in vacuum, and λ is the wavelength in metres (m)."
          ],
          "note": "The two forms are the same statement, joined by <i>c</i> = νλ from Electromagnetic Waves. Nothing about the <b>brightness</b> of the beam appears anywhere in this equation, and that absence is the single most examined fact in the chapter."
        },
        {
          "t": "formula",
          "kicker": "MOMENTUM OF A PHOTON",
          "tag": "MASSLESS, NOT MOMENTUMLESS",
          "main": "p = E/c = hν/c = h/λ",
          "legend": [
            "<i>p</i> is the momentum of one photon, in kg m/s.",
            "<i>E</i> is its energy in joules (J), and <i>c</i> = 3 × 10<sup>8</sup> m/s.",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s and λ is the wavelength in metres (m).",
            "ν is the frequency in hertz (Hz). The rest mass is zero; the <b>effective</b> or dynamic mass is <i>E</i>/<i>c</i><sup>2</sup> = <i>h</i>ν/<i>c</i><sup>2</sup>, in kg."
          ],
          "note": "<i>E</i> = <i>hc</i>/λ and <i>p</i> = <i>h</i>/λ differ by exactly one factor of <i>c</i>, and swapping them is the commonest wrong answer in the chapter. Dimensions settle it instantly: <i>hc</i>/λ is [M L<sup>2</sup> T<sup>−2</sup>], an energy, and cannot be a momentum however familiar the expression looks."
        },
        {
          "t": "deriv",
          "kicker": "BUILDING hc = 1240 eV nm, THE SHORTCUT THIS CHAPTER RUNS ON",
          "steps": [
            { "eq": "hc = (6.63 × 10<sup>−34</sup>)(3.00 × 10<sup>8</sup>) = 1.989 × 10<sup>−25</sup> J m", "why": "Multiply the two constants and nothing else. The product hc turns up in every photon-energy calculation, so it is worth having as one number rather than two. In SI it is an awkward one, which is exactly why the next three steps are worth taking." },
            { "eq": "in eV: 1.989 × 10<sup>−25</sup> / 1.6 × 10<sup>−19</sup> = 1.243 × 10<sup>−6</sup> eV m", "why": "Change the energy unit. Dividing joules by 1.6 x 10^-19 J per eV converts the energy half of the product into electronvolts, which is the unit every work function in this chapter is quoted in. The length is still metres." },
            { "eq": "in nm: 1.243 × 10<sup>−6</sup> × 10<sup>9</sup> = 1243 eV nm", "why": "Change the length unit. One metre is a thousand million nanometres, so multiplying by 10<sup>9</sup> puts the length half into nanometres, which is the unit every wavelength in this chapter is quoted in. Both halves now match the numbers you will actually be handed." },
            { "eq": "hc ≈ 1240 eV nm,  so  E(eV) = 1240 / λ(nm)", "why": "Round honestly, and know which way. Our <i>h</i> = 6.63 × 10<sup>−34</sup> J s and <i>c</i> = 3.00 × 10<sup>8</sup> m/s are themselves rounded; with the unrounded values the product is 1239.8 eV nm. So 1240 is the true figure and the 1243 above is our rounding of h and c, not the other way round. Divide 1240 by the wavelength in nanometres and read the answer in electronvolts. One division, no powers of ten, no calculator." }
          ]
        },
        {
          "t": "protip",
          "html": "learn 1240 the way you learned your times tables. 400 nm is 3.1 eV, 500 nm is 2.48 eV, 620 nm is exactly 2.0 eV, 700 nm is 1.77 eV. the whole visible band lives between 1.8 and 3.1 eV, so a metal with a work function near 2 eV is one you can work with a torch, and one near 5 eV needs ultraviolet. the same division runs backwards for an X-ray tube: <i>V</i> in volts = 1240/λ<sub>min</sub> in nm, which is the Duane-Hunt limit from Electromagnetic Waves."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · PHOTON ENERGY AGAINST WAVELENGTH",
          "chips": ["the 1240 curve", "where visible light sits"],
          "captions": [
            "Photon energy against wavelength is E = 1240/lambda with E in electronvolts and lambda in nanometres, which is a hyperbola. Short wavelength means a big photon and long wavelength means a small one, and the curve steepens without limit as you move to the left. The marked point is 500 nm, where a photon carries 2.48 eV. Notice what the curve is not: it is not a straight line, so halving the wavelength doubles the energy but shifting the wavelength by 100 nm does something quite different at 200 nm than it does at 800 nm.",
            "Now shade the band your eyes respond to, 400 to 700 nm, quoted from Electromagnetic Waves. Read the two energies off the curve and the whole chapter falls into place: violet at 400 nm carries 3.10 eV and deep red at 700 nm carries 1.77 eV, so every photon you have ever seen lies between about 1.8 and 3.1 eV. That is why caesium at 2.14 eV is the classic photocell metal and why platinum at 5.65 eV is useless for one. It also shows why the band looks so narrow here: the visible window is a factor of under two in energy, and the curve to its left runs on for decades."
          ],
          "frames": [
            {
              "x": [100, 900],
              "y": [0, 13],
              "aspect": 0.72,
              "axisX": "λ (nm)",
              "axisY": "E (eV)",
              "ticksX": { "at": [200, 400, 600, 800] },
              "ticksY": { "every": 2 },
              "curves": [{ "c": "recip", "a": 1240 }],
              "points": [{ "x": 500, "y": 2.48, "label": "2.48 eV" }]
            },
            {
              "x": [100, 900],
              "y": [0, 13],
              "aspect": 0.72,
              "axisX": "λ (nm)",
              "axisY": "E (eV)",
              "ticksX": { "at": [200, 400, 600, 800] },
              "ticksY": { "every": 2 },
              "curves": [{ "c": "recip", "a": 1240 }],
              "bands": [{ "x0": 400, "x1": 700 }],
              "points": [
                { "x": 400, "y": 3.1, "label": "3.10 eV" },
                { "x": 700, "y": 1.77, "label": "1.77 eV", "at": "se" }
              ],
              "labels": [{ "x": 550, "y": 6.4, "text": "visible" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Once light is a stream of packets, <b>brightness</b> has to mean something new. A brighter beam of the same colour is not made of bigger photons. Every photon of 500 nm light carries 2.48 eV whether the lamp is dim or blinding. A brighter beam is made of <b>more photons per second</b>, and that is all.<br><br>So intensity and photon energy are two independent dials on the same source. Turn up the brightness and you increase the count; change the colour and you change the size of each packet. Nothing you do to one affects the other."
        },
        {
          "t": "formula",
          "kicker": "INTENSITY AND PHOTON COUNT",
          "tag": "BRIGHTNESS IS A HEAD COUNT",
          "main": "n = P / (hν) = Pλ / (hc),   I = P/A",
          "legend": [
            "<i>n</i> is the number of photons per second, in s<sup>−1</sup>. For a source it is the rate <b>emitted</b>; for a beam crossing a surface it is the rate <b>arriving</b>, and the two are equal only if nothing spreads or is lost.",
            "<i>P</i> is the radiated power of the source, or the power in the beam, in watts (W).",
            "<i>h</i>ν is the energy of one photon, in joules (J). λ is the wavelength in metres (m), <i>h</i> = 6.63 × 10<sup>−34</sup> J s and <i>c</i> = 3 × 10<sup>8</sup> m/s.",
            "<i>I</i> is the intensity in W m<sup>−2</sup>, the power crossing unit area, and <i>A</i> is that area in m<sup>2</sup>."
          ],
          "note": "The two forms of <i>n</i> are one formula: <i>h</i>ν = <i>hc</i>/λ, so <i>P</i>/(<i>h</i>ν) and <i>P</i>λ/(<i>hc</i>) always agree. At fixed colour and area the intensity is directly proportional to the photon count, <i>I</i> = <i>nh</i>ν/<i>A</i>, which is the statement that a brighter beam is a busier one."
        },
        {
          "t": "formula",
          "kicker": "RADIATION FORCE ON A SURFACE",
          "tag": "MOMENTUM PER SECOND",
          "main": "F<sub>absorbed</sub> = P/c,    F<sub>reflected</sub> = 2P/c",
          "legend": [
            "<i>F</i> is the force on the surface, in newtons (N), for a beam striking it normally.",
            "<i>P</i> is the power of the beam, in watts (W).",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s is the speed of light."
          ],
          "note": "Force is momentum delivered per second. In one second the beam delivers energy <i>P</i>, hence momentum <i>P</i>/<i>c</i>, since every photon carries <i>p</i> = <i>E</i>/<i>c</i>. An absorbed photon hands over its momentum once; a reflected one comes back with its momentum reversed, a change of 2<i>p</i>, so it delivers twice as much. Electromagnetic Waves reaches the same two numbers from the wave picture as <i>I</i>/<i>c</i> and 2<i>I</i>/<i>c</i>: two genuinely different arguments, one answer, which is the best evidence either of them is right."
        },
        {
          "t": "p",
          "html": "One more thing to fix before the experiments, because it decides whether they work at all. <b>Photoelectric emission happens only if the energy per packet is at least φ<sub>0</sub></b>. Below that threshold nothing happens, no matter how long or how brightly you illuminate the surface, and that sentence is not a rule of thumb: it is the single fact the next two topics are built on.<br><br>Two practical conditions come with it. The surface must be <b>clean</b>, because an oxide layer raises the work function and changes the answer. And the whole thing must sit in <b>vacuum</b>, so that electrons which do escape are not immediately reabsorbed by air molecules."
        },
        {
          "t": "proc",
          "title": "count the photons a source emits",
          "steps": [
            "Find the energy of <b>one</b> photon first, and in the unit you will actually divide by. From the wavelength in nanometres: <i>E</i>(eV) = 1240/λ(nm).",
            "Convert that to joules by multiplying by 1.6 × 10<sup>−19</sup>, because power is in watts, which is joules per second.",
            "Divide the power by it: <i>n</i> = <i>P</i>/<i>E</i>. That is the whole calculation, and it makes the physics obvious, since power is photons per second times energy each.",
            "If the question asks for photons per unit <b>area</b>, only now bring in the geometry. A point source spreads over a sphere, so divide by 4π<i>r</i><sup>2</sup> at distance <i>r</i>.",
            "Sanity check the size. A watt of visible light is around 10<sup>18</sup> photons a second. If your answer is 10<sup>5</sup> or 10<sup>30</sup>, a power of ten has gone missing."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Find the energy, in joules and in electronvolts, and the momentum of a photon of light of wavelength 500 nm.",
          "steps": [
            "<b>Energy, the fast way.</b> <i>E</i>(eV) = 1240/λ(nm) = 1240/500 = <b>2.48 eV</b>.",
            "In joules: 2.48 × 1.6 × 10<sup>−19</sup> = 3.97 × 10<sup>−19</sup> J. Check it against <i>E</i> = <i>hc</i>/λ directly: (1.989 × 10<sup>−25</sup>)/(500 × 10<sup>−9</sup>) = 3.98 × 10<sup>−19</sup> J, the same to two figures.",
            "<b>Momentum.</b> <i>p</i> = <i>h</i>/λ = (6.63 × 10<sup>−34</sup>)/(500 × 10<sup>−9</sup>).",
            "= 1.326 × 10<sup>−27</sup> kg m/s. Cross-check by the other route: <i>p</i> = <i>E</i>/<i>c</i> = (3.97 × 10<sup>−19</sup>)/(3 × 10<sup>8</sup>) = 1.32 × 10<sup>−27</sup> kg m/s."
          ],
          "ans": "<i>E</i> = 2.48 eV = 3.97 × 10<sup>−19</sup> J,  <i>p</i> = 1.33 × 10<sup>−27</sup> kg m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A 20 W source emits monochromatic light of wavelength 600 nm. How many photons does it emit per second?",
          "steps": [
            "<b>The trap.</b> Power and wavelength in the same question tempt people to push the power into a wavelength formula. Power is not an energy. Get one photon's energy first.",
            "<i>E</i> = 1240/600 = 2.07 eV, and in joules 2.07 × 1.6 × 10<sup>−19</sup> = 3.31 × 10<sup>−19</sup> J.",
            "<i>n</i> = <i>P</i>/<i>E</i> = 20/(3.31 × 10<sup>−19</sup>).",
            "= 6.0 × 10<sup>19</sup> s<sup>−1</sup>. Sixty billion billion photons a second from one 20 W lamp, which is why nobody notices light is lumpy."
          ],
          "ans": "<i>n</i> ≈ 6.0 × 10<sup>19</sup> photons per second"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A point source of power 100 W emits light of wavelength 500 nm uniformly in all directions. Find the number of photons crossing an area of 1 m<sup>2</sup> per second at a distance of 2 m from the source.",
          "steps": [
            "<b>Step 1, total emission rate.</b> <i>E</i> = 1240/500 = 2.48 eV = 3.97 × 10<sup>−19</sup> J, so <i>n</i> = 100/(3.97 × 10<sup>−19</sup>) = 2.52 × 10<sup>20</sup> s<sup>−1</sup>.",
            "<b>Step 2, spread it out.</b> At 2 m the photons are crossing a sphere of area 4π<i>r</i><sup>2</sup> = 4π(2)<sup>2</sup> = 50.3 m<sup>2</sup>.",
            "Flux = 2.52 × 10<sup>20</sup>/50.3 = 5.0 × 10<sup>18</sup> m<sup>−2</sup> s<sup>−1</sup>.",
            "<b>Why the two rates differ.</b> The source emits 2.52 × 10<sup>20</sup> per second in total; only 5.0 × 10<sup>18</sup> of them cross any particular square metre out there. Emitted and arriving are two different counts as soon as the beam spreads."
          ],
          "ans": "≈ 5.0 × 10<sup>18</sup> photons per square metre per second"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A parallel laser beam of power 30 W falls normally on a surface. Find the force on the surface if it is (a) a perfect absorber and (b) a perfect reflector, and say why the two differ.",
          "steps": [
            "<b>(a)</b> In one second the beam delivers energy 30 J, hence momentum 30/<i>c</i>, since each photon carries <i>p</i> = <i>E</i>/<i>c</i>. All of it is absorbed, so <i>F</i> = <i>P</i>/<i>c</i> = 30/(3 × 10<sup>8</sup>) = 1.0 × 10<sup>−7</sup> N.",
            "<b>(b)</b> A reflected photon arrives with momentum +<i>p</i> and leaves with −<i>p</i>, a change of 2<i>p</i>. So <i>F</i> = 2<i>P</i>/<i>c</i> = 2.0 × 10<sup>−7</sup> N.",
            "<b>Why exactly two, not some other factor.</b> Absorption removes momentum; reflection reverses it. Reversing takes twice the impulse of removing, whatever the beam is made of.",
            "<b>Scale check.</b> 10<sup>−7</sup> N from 30 W is about the weight of a grain of dust, which is why radiation pressure only matters for solar sails and never for anything you can feel."
          ],
          "ans": "(a) 1.0 × 10<sup>−7</sup> N   (b) 2.0 × 10<sup>−7</sup> N"
        },
        {
          "t": "mcq",
          "q": "Electron emission produced by applying a very strong external electric field to a metal surface is called:",
          "opts": [
            { "label": "thermionic emission", "nudge": "That one needs heat. A hot filament shakes its electrons out; no external field is applied at all." },
            { "label": "photoelectric emission", "nudge": "That one needs light. The energy arrives as photons, not as an applied field." },
            { "label": "field emission" },
            { "label": "secondary emission", "nudge": "That one needs bombardment by fast particles. The energy is carried in by electrons or ions that physically strike the surface." }
          ],
          "correct": 2,
          "solution": "A field of order 10<sup>8</sup> V/m pulls electrons straight off the surface with no heating, which is why it is also called cold-cathode emission. The question is testing one thing: can you match the energy-delivery mechanism to its name. Heat, light, field, hit."
        },
        {
          "t": "mcq",
          "q": "The momentum of a photon of wavelength λ is:",
          "opts": [
            { "label": "hλ", "nudge": "Dimensionally impossible. [M L<sup>2</sup> T<sup>−1</sup>][L] = [M L<sup>3</sup> T<sup>−1</sup>], which is not a momentum, and you can kill this option without doing any physics." },
            { "label": "h/λ" },
            { "label": "hc/λ", "nudge": "That is the photon's <b>energy</b>, not its momentum. The two differ by a factor of <i>c</i>, and this exact swap is the most common wrong answer in the chapter." },
            { "label": "hλ/c", "nudge": "Also dimensionally impossible: [M L<sup>3</sup> T<sup>−1</sup>]/[L T<sup>−1</sup>] = [M L<sup>2</sup>], which is nothing at all." }
          ],
          "correct": 1,
          "solution": "<i>p</i> = <i>h</i>/λ, by definition, and equivalently <i>p</i> = <i>E</i>/<i>c</i> = <i>h</i>ν/<i>c</i>. In an exam, check the dimensions of all four options before you check anything else: two of them die immediately, which halves the work."
        },
        {
          "t": "mcq",
          "q": "A source of monochromatic light is made twice as bright without changing its colour. Which of these doubles?",
          "opts": [
            { "label": "the energy of each photon", "nudge": "Photon energy is <i>h</i>ν, and the frequency did not change. Brightness has no entry in that equation at all." },
            { "label": "the number of photons emitted per second" },
            { "label": "the momentum of each photon", "nudge": "Momentum is <i>h</i>/λ, and the wavelength did not change. Same objection as option A, one factor of <i>c</i> away." },
            { "label": "the speed of the photons", "nudge": "Every photon in vacuum travels at <i>c</i>, always. Nothing you do to a light source changes that." }
          ],
          "correct": 1,
          "solution": "For monochromatic light, intensity is set by the <b>number</b> of photons crossing unit area per unit time and not by the energy of each one: <i>I</i> = <i>nh</i>ν/<i>A</i>, and only <i>n</i> can move here. This is the single idea that Topic 02's experiments confirm and that Topic 03's equation explains."
        },
        {
          "t": "mcq",
          "q": "A photon of wavelength λ is deflected by a strong magnetic field placed in its path. This observation would be:",
          "opts": [
            { "label": "expected, because the photon has momentum h/λ", "nudge": "Momentum is not charge. A magnetic force is <i>qv</i> × <i>B</i>, and with <i>q</i> = 0 the force is zero however much momentum the photon carries." },
            { "label": "expected, because the photon has effective mass E/c<sup>2</sup>", "nudge": "Effective mass is not charge either. A magnetic field acts on moving <b>charge</b>, and mass of any kind is irrelevant to whether there is a force." },
            { "label": "impossible, because a photon is electrically neutral" },
            { "label": "impossible, because a photon travels at c", "nudge": "Speed is not the reason. A charged particle at high speed is deflected perfectly well, and in fact more strongly. The reason is the absence of charge, not the presence of speed." }
          ],
          "correct": 2,
          "solution": "A photon carries energy, momentum and an effective mass, and it carries <b>no charge at all</b>, so neither an electric nor a magnetic field exerts any force on it. This is a favourite one-line discriminator: anything a field can bend is not a photon."
        },
        {
          "t": "practice",
          "items": [
            { "q": "Calculate the energy of a photon of wavelength 620 nm in electronvolts.", "a": "1240/620 = <b>2.0 eV</b> exactly. Worth remembering as an anchor: 620 nm orange light is a 2 eV photon." },
            { "q": "Find the momentum of a photon whose energy is 3.1 eV.", "a": "<i>p</i> = <i>E</i>/<i>c</i> = (3.1 × 1.6 × 10<sup>−19</sup>)/(3 × 10<sup>8</sup>) = 4.96 × 10<sup>−19</sup>/3 × 10<sup>8</sup> = <b>1.65 × 10<sup>−27</sup> kg m/s</b>. Converting the eV to joules first is not optional; leaving 3.1 in the numerator gives an answer 19 decades wrong." },
            { "q": "A 60 W bulb converts 2 per cent of its power into light of wavelength 500 nm. How many such photons does it emit per second?", "a": "Useful power = 0.02 × 60 = 1.2 W. One photon carries 1240/500 = 2.48 eV = 3.97 × 10<sup>−19</sup> J. So <i>n</i> = 1.2/(3.97 × 10<sup>−19</sup>) = <b>3.0 × 10<sup>18</sup> s<sup>−1</sup></b>." },
            { "q": "Name the type of electron emission in (a) the heated filament of a vacuum tube and (b) a metal plate exposed to ultraviolet light.", "a": "(a) <b>thermionic</b>, the energy is delivered as heat. (b) <b>photoelectric</b>, the energy is delivered as photons." },
            { "q": "Calculate the force exerted by a 10 W laser beam falling normally on a perfectly reflecting mirror.", "a": "Reflection, so <i>F</i> = 2<i>P</i>/<i>c</i> = 20/(3 × 10<sup>8</sup>) = <b>6.7 × 10<sup>−8</sup> N</b>. Using <i>P</i>/<i>c</i> instead halves it, and that factor of two is the whole question." }
          ]
        },
        {
          "t": "p",
          "html": "So the photon picture makes a sharp, testable claim, and it is worth writing it down before anyone measures anything. If light really arrives as countable packets of size <i>h</i>ν, then <b>brightness and colour should control two different things</b>. Brightness sets how many electrons a metal can be made to release. Colour sets how much energy each released electron can carry away, and whether any are released at all.<br><br>Under a wave picture there is no such separation, because a wave delivers energy continuously and more of it is more of it. Topic 02 is the experiment that tells the two pictures apart, and it does so by measuring exactly these two quantities against exactly these two dials."
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing electronvolts and joules in the same line.</b> This is the chapter's own currency problem, and it is where most marks go. Work functions are quoted in eV and photon energies in joules, and the two differ by 1.6 × 10<sup>−19</sup>. Pick <b>one</b> system before you write anything down. For speed work entirely in eV using 1240/λ(nm), and convert to joules only at the very end if the answer is asked for in SI.",
            "<b>Believing zero rest mass means zero momentum.</b> A photon carries <i>p</i> = <i>h</i>/λ and an effective mass <i>E</i>/<i>c</i><sup>2</sup>. Rest mass and momentum are simply not the same thing for something that never rests.",
            "<b>Swapping <i>E</i> = <i>hc</i>/λ with <i>p</i> = <i>h</i>/λ.</b> They differ by exactly one <i>c</i>, so the wrong one is out by 3 × 10<sup>8</sup>. Dimensions catch it in two seconds and no amount of staring will.",
            "<b>Thinking a brighter beam has more energetic photons.</b> It has more of them. Photon energy is fixed by frequency alone, and this misconception is designed into nearly every exam question in the next three topics.",
            "<b>Forgetting to convert nanometres.</b> If you use <i>E</i> = <i>hc</i>/λ in SI, λ must be in metres. If you use 1240/λ, λ must be in nanometres. Mixing the two is a factor of 10<sup>9</sup>."
          ]
        },
        {
          "t": "protip",
          "html": "photon counting has exactly one shape, so learn the shape rather than four formulas. power divided by the energy of one photon gives photons per second, and everything else is geometry bolted on afterwards. spreading over a sphere, hitting a fraction of a plate, only a percentage being effective: all of those are multipliers applied to a number you already have."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>E</i> = <i>h</i>ν = <i>hc</i>/λ", "note": "energy of one photon; brightness appears nowhere in it" },
            { "f": "<i>E</i>(eV) = 1240/λ(nm)", "note": "the shortcut the whole chapter runs on; derive once, use forty times" },
            { "f": "<i>p</i> = <i>E</i>/<i>c</i> = <i>h</i>/λ", "note": "one factor of c away from the energy; never write the wrong one" },
            { "f": "φ<sub>0</sub> = <i>h</i>ν<sub>0</sub> = <i>hc</i>/λ<sub>0</sub>", "note": "the exit fee, a property of the metal and of nothing else" },
            { "f": "1 eV = 1.6 × 10<sup>−19</sup> J", "note": "the chapter's currency; never leave it implicit" },
            { "f": "<i>n</i> = <i>P</i>/(<i>h</i>ν) = <i>P</i>λ/(<i>hc</i>)", "note": "photons per second; a watt of visible light is about 10<sup>18</sup>" },
            { "f": "<i>F</i> = <i>P</i>/<i>c</i> absorbed, 2<i>P</i>/<i>c</i> reflected", "note": "reversing momentum costs twice what removing it costs" },
            { "f": "heat, light, field, hit", "note": "thermionic, photoelectric, field, secondary; one word picks the type" }
          ],
          "aids": [
            "\"twelve forty over nanometres gives electronvolts\"",
            "\"heat, light, field, hit\" for the four emissions",
            "\"brightness is a head count, colour is a packet size\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Photoelectric Experiments and the Failure of Wave Theory",
      "chip": "02 THE GRAPHS",
      "kalam": "three studies, three graphs, and the moment classical physics ran out",
      "blocks": [
        {
          "t": "p",
          "html": "There is no algebra in this topic. There is an <b>experiment</b>, and the three graphs it produces, and the fact that no wave picture of light can account for any of them. Master the setup and the three curves and you have mastered the section; the equation that explains them is Topic 03, and it will mean nothing until you know what it has to explain.<br><br>Read the graphs the way an experimenter does. Each study holds two things fixed and varies the third, and the whole art is keeping track of which is which."
        },
        {
          "t": "p",
          "html": "<b>The apparatus.</b> An evacuated glass tube holds two metal plates: a photosensitive <b>emitter</b>, the cathode C, and a <b>collector</b>, the anode A. Monochromatic light of adjustable intensity and frequency enters through a quartz window and strikes the emitter. Quartz rather than ordinary glass, because glass absorbs ultraviolet and ultraviolet is exactly the light you need for most metals.<br><br>A battery with a sliding contact applies a variable potential between the plates, and its polarity can be <b>reversed</b>, so the collector can be made positive or negative with respect to the emitter. A sensitive microammeter in series reads the current. The tube is evacuated so that emitted electrons are not reabsorbed by air molecules on their way across."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 11.1 · THE PHOTOELECTRIC APPARATUS",
          "chips": ["collector positive", "collector negative"],
          "captions": [
            "Light enters through the quartz window along the diagonal arrow and strikes the emitter, the left plate of the photocell. The battery is set so that the collector, the right plate, is positive, which is why the minus sign sits on the emitter side and the plus on the collector side. Electrons knocked out of the emitter are pulled across the gap and the microammeter reads a current. Turn the sliding contact up and more of the slower electrons make it across, until every single emitted electron is being collected and the current stops rising. That plateau is the saturation current.",
            "Now reverse the battery, and nothing else. Same tube, same light, same meter, one component flipped. The collector is now negative, so it repels the electrons instead of attracting them, and only those emitted with enough kinetic energy to climb the retarding potential arrive at all. Wind the reverse voltage up and the current falls. At one particular value even the fastest electron is turned back and the meter reads exactly zero. That value is the stopping potential, and it is the single most informative number this apparatus produces, because it measures an energy."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [4.5, 1] },
                  { "from": [7.5, 1], "to": [10.5, 1] },
                  { "from": [1, 1], "to": [1, 5] },
                  { "from": [1, 5], "to": [4, 5] },
                  { "from": [7.5, 5], "to": [10.5, 5] },
                  { "from": [10.5, 1], "to": [10.5, 2.2] },
                  { "from": [10.5, 3.8], "to": [10.5, 5] },
                  { "from": [4.5, 1], "to": [4.5, 3] },
                  { "from": [7.5, 3], "to": [7.5, 1] },
                  { "from": [2.4, -0.7], "to": [4.15, 0.75] }
                ],
                "parts": [
                  { "at": [4.5, 1], "to": [7.5, 1], "kind": "C", "label": "photocell", "side": "below" },
                  { "at": [10.5, 2.2], "to": [10.5, 3.8], "kind": "A", "label": "current", "side": "left" },
                  { "at": [7.5, 5], "to": [4, 5], "kind": "battery", "label": "variable", "side": "below" },
                  { "at": [4.5, 3], "to": [7.5, 3], "kind": "V" }
                ],
                "currents": [{ "at": [2.4, -0.7], "to": [4.15, 0.75], "label": "light" }]
              },
              "marks": [
                { "x": 4.9, "y": 2.15, "glyph": "minus" },
                { "x": 7.1, "y": 2.15, "glyph": "plus" }
              ]
            },
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [4.5, 1] },
                  { "from": [7.5, 1], "to": [10.5, 1] },
                  { "from": [1, 1], "to": [1, 5] },
                  { "from": [1, 5], "to": [4, 5] },
                  { "from": [7.5, 5], "to": [10.5, 5] },
                  { "from": [10.5, 1], "to": [10.5, 2.2] },
                  { "from": [10.5, 3.8], "to": [10.5, 5] },
                  { "from": [4.5, 1], "to": [4.5, 3] },
                  { "from": [7.5, 3], "to": [7.5, 1] },
                  { "from": [2.4, -0.7], "to": [4.15, 0.75] }
                ],
                "parts": [
                  { "at": [4.5, 1], "to": [7.5, 1], "kind": "C", "label": "photocell", "side": "below" },
                  { "at": [10.5, 2.2], "to": [10.5, 3.8], "kind": "A", "label": "current", "side": "left" },
                  { "at": [4, 5], "to": [7.5, 5], "kind": "battery", "label": "reversed", "side": "below" },
                  { "at": [4.5, 3], "to": [7.5, 3], "kind": "V" }
                ],
                "currents": [{ "at": [2.4, -0.7], "to": [4.15, 0.75], "label": "light" }]
              },
              "marks": [
                { "x": 4.9, "y": 2.15, "glyph": "plus" },
                { "x": 7.1, "y": 2.15, "glyph": "minus" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four words this topic runs on",
          "tag": "GET THESE EXACT",
          "rows": [
            { "k": "Photoelectron", "v": "An electron that has escaped the metal because light fell on it. Nothing else distinguishes it from any other electron once it is out." },
            { "k": "Photocurrent", "v": "The current the microammeter reads: photoelectrons per second reaching the collector, times <i>e</i>. It counts <b>electrons</b>, so it is a head count and nothing to do with how fast any of them is going." },
            { "k": "Saturation current", "v": "The plateau reached when the collector is positive enough that <b>every</b> emitted electron is collected. Raise the voltage further and nothing changes, because there are no more electrons to catch." },
            { "k": "Stopping potential, <i>V</i><sub>0</sub>", "v": "The reverse voltage at which the photocurrent falls to exactly zero, because even the fastest photoelectron is turned back. It measures the <b>maximum kinetic energy</b> of the emitted electrons, directly." }
          ]
        },
        {
          "t": "formula",
          "kicker": "WHAT THE STOPPING POTENTIAL MEASURES",
          "tag": "A VOLTAGE THAT IS AN ENERGY",
          "main": "eV<sub>0</sub> = K<sub>max</sub>",
          "legend": [
            "<i>e</i> = 1.6 × 10<sup>−19</sup> C is the magnitude of the electron's charge.",
            "<i>V</i><sub>0</sub> is the stopping potential, in volts (V). It is a positive number by convention; the retarding voltage applied is −<i>V</i><sub>0</sub>.",
            "<i>K</i><sub>max</sub> is the maximum kinetic energy of the emitted photoelectrons, in joules (J)."
          ],
          "note": "An electron crossing a retarding potential <i>V</i><sub>0</sub> loses energy <i>eV</i><sub>0</sub>, from Electric Charges and Fields. The <b>fastest</b> electron is the last one to be stopped, so the voltage that just kills the current is the one that exactly cancels <i>K</i><sub>max</sub>. That gives the neatest bookkeeping trick in the chapter: express <i>K</i><sub>max</sub> in <b>electronvolts</b> and the stopping potential in <b>volts</b> is numerically the same number. 0.60 eV of kinetic energy, 0.60 V of stopping potential."
        },
        {
          "t": "formula",
          "kicker": "PHOTOCURRENT AS A HEAD COUNT",
          "tag": "WHAT THE METER READS",
          "main": "i = n<sub>e</sub>e",
          "legend": [
            "<i>i</i> is the photocurrent, in amperes (A). At the plateau it is the saturation current.",
            "<i>n</i><sub>e</sub> is the number of photoelectrons reaching the collector per second, in s<sup>−1</sup>.",
            "<i>e</i> = 1.6 × 10<sup>−19</sup> C is the electron's charge."
          ],
          "note": "Every current in this chapter is this one line: count the electrons, multiply by <i>e</i>. Nothing about the electrons' <b>speed</b> enters, which is exactly why the saturation current is blind to the frequency and why a photon-counting calculation and an energy calculation are two independent halves of any problem."
        },
        {
          "t": "p",
          "html": "<b>Study 1. Vary the intensity</b>, holding the frequency (above threshold) and the collector potential fixed. The photocurrent comes out <b>directly proportional</b> to the intensity: a straight line through the origin.<br><br>That much is unremarkable. More light per second means more photons per second, so more electrons knocked out per second, so more current. A wave picture would predict the same thing. This is the one result of the three that classical physics survives."
        },
        {
          "t": "p",
          "html": "<b>Study 2. Sweep the collector potential</b>, holding the frequency and the intensity fixed, then repeat at a higher intensity.<br><br>Make the collector more positive and the current climbs, then flattens at its saturation value. Make it negative and the current falls, hitting zero at the stopping potential. Now repeat at double the brightness. The saturation current doubles, obviously. But the <b>stopping potential does not move at all</b>.<br><br>Sit with that for a second. Twice the light energy pouring onto the plate, and the fastest electron comes out with exactly the same energy as before. Intensity controls how <b>many</b> electrons, not how <b>energetic</b> they are."
        },
        {
          "t": "think",
          "html": "picture the collector as a net and the emitter as a crowd running out of a gate. wind the voltage positive and you are widening the net until it catches every single runner, however slow: that is the plateau, and it counts <b>people</b>. wind it negative and you are putting a hill in front of them, so only the fast ones get over: the voltage that stops even the fastest measures <b>speed</b>. one apparatus, two completely separate readings."
        },
        {
          "t": "p",
          "html": "<b>Study 3. Vary the frequency</b>, holding the intensity fixed. Now the stopping potential moves, and it moves the other way: <b>higher frequency, larger stopping potential</b>. Bluer light produces faster electrons, at the same brightness.<br><br>And below a certain frequency, characteristic of the metal, <b>nothing happens at all</b>. No current, no matter how intense the light and no matter how long you leave it on. That frequency is the <b>threshold frequency</b> ν<sub>0</sub>, and its existence is the fact that breaks the wave picture in half."
        },
        {
          "t": "def",
          "term": "Threshold frequency, ν<sub>0</sub>",
          "html": "The <b>minimum frequency</b> of incident light that produces photoelectric emission from a given metal. Below it there is no emission at any intensity and after any length of exposure; at it, emission just begins with the electrons carrying no kinetic energy; above it, emission is instantaneous. It is a property of the <b>metal</b>, fixed by its work function, and it is measured in this experiment as the frequency at which the stopping potential falls to zero. Topic 03 shows it is exactly φ<sub>0</sub>/<i>h</i>."
        },
        {
          "t": "p",
          "html": "It is worth being precise about what a plateau means, because it is the most misread feature of these graphs. The saturation current is not a limit on how fast electrons can travel or on how many the metal can supply. A metal holds around 10<sup>28</sup> free electrons in every cubic metre and photoemission removes a vanishing fraction of them.<br><br>The plateau appears because of the <b>collecting circuit</b>. At low collector voltage some of the slower photoelectrons drift back to the emitter and never arrive. Raise the voltage and you recruit those stragglers, one by one, until every single emitted electron is being caught. After that there is nobody left to recruit, so the current stops rising. Its height therefore measures the <b>emission rate</b>, and the emission rate is set by the intensity."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 11.2 TO 11.4 · THE THREE STUDIES",
          "chips": ["1 · vary intensity", "2 · vary potential", "3 · vary frequency"],
          "captions": [
            "Study 1, and the only one classical physics survives. Hold the frequency above threshold and hold the collector potential fixed, then change nothing but the brightness. The photocurrent is directly proportional to the intensity: a straight line through the origin, with no threshold and no curvature. More photons per second means more electrons per second, and a wave picture predicts the same trend, so this graph proves nothing on its own. Keep it as the control against which the other two are read.",
            "Study 2, and here is the whole classical puzzle in one frame. Both curves are the same light of the same colour, one at low intensity and one at high. Look right and they differ: the brighter beam saturates at a higher current, because more electrons per second are being emitted. Now look left, at where each curve meets the potential axis. They meet it at the SAME place. Doubling the brightness doubled the number of electrons and did not change the energy of the fastest one by a millivolt. That shared intercept, minus V-nought, is the observation classical wave theory has no answer for.",
            "Study 3, and now the intercept moves. Same intensity in both curves, but different colours. The higher frequency needs a bigger reverse voltage to stop it, so its intercept sits further left: bluer light produces more energetic electrons. And this time the two curves saturate at the same current, because the same intensity at a fixed photon count is delivering electrons at the same rate. Put the two frames together and you have the rule the whole chapter turns on. Intensity moves the plateau on the right. Frequency moves the intercept on the left. Neither touches the other's."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [0, 8],
              "aspect": 0.72,
              "axisX": "intensity",
              "axisY": "photocurrent",
              "curves": [{ "c": "line", "m": 0.72, "k": 0 }],
              "labels": [{ "x": 3.3, "y": 6.5, "text": "ν fixed, above ν₀" }]
            },
            {
              "x": [-3.4, 7],
              "y": [-0.5, 4.6],
              "aspect": 0.72,
              "axisX": "collector potential",
              "axisY": "photocurrent",
              "ticksX": { "at": [-2, 0], "labels": ["−V₀", "0"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[-2.6, 0], [-2, 0], [-1.5, 0.78], [-1, 1.41], [-0.5, 1.91], [0, 2.32], [0.6, 2.7], [1.2, 3], [2, 3.29], [3, 3.54], [4.2, 3.73], [5.5, 3.84], [7, 3.92]] },
                { "c": "pts", "smooth": true, "pts": [[-2.6, 0], [-2, 0], [-1.5, 0.39], [-1, 0.7], [-0.5, 0.96], [0, 1.16], [0.6, 1.35], [1.2, 1.5], [2, 1.65], [3, 1.77], [4.2, 1.86], [5.5, 1.92], [7, 1.96]] }
              ],
              "labels": [
                { "x": 4.3, "y": 4.3, "text": "high intensity" },
                { "x": 4.3, "y": 1.25, "text": "low intensity" }
              ]
            },
            {
              "x": [-4, 7],
              "y": [-0.5, 4],
              "aspect": 0.72,
              "axisX": "collector potential",
              "axisY": "photocurrent",
              "ticksX": { "at": [-3, -1.2, 0], "labels": ["−V₀′", "−V₀", "0"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[-3.6, 0], [-3, 0], [-2.4, 0.57], [-1.8, 1.03], [-1.2, 1.4], [-0.6, 1.7], [0, 1.95], [0.7, 2.18], [1.5, 2.38], [2.4, 2.55], [3.5, 2.69], [4.8, 2.85], [6, 2.94]] },
                { "c": "pts", "smooth": true, "pts": [[-1.7, 0], [-1.2, 0], [-0.6, 0.82], [0, 1.42], [0.7, 1.91], [1.5, 2.29], [2.4, 2.56], [3.5, 2.76], [4.8, 2.88], [6, 2.94]] }
              ],
              "labels": [
                { "x": -2.3, "y": 3.05, "text": "higher ν" },
                { "x": 2.9, "y": 1.2, "text": "lower ν" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three laws of photoelectric emission",
          "tag": "WHAT THE EXPERIMENTS SHOWED",
          "rows": [
            { "k": "1 · Current ∝ intensity", "v": "For light above threshold, the number of photoelectrons emitted per second is proportional to the intensity of the incident light. This sets the <b>saturation current</b>." },
            { "k": "2 · <i>K</i><sub>max</sub> depends on ν only", "v": "The maximum kinetic energy of the photoelectrons depends on the <b>frequency</b> of the light and not at all on its intensity. This sets the <b>stopping potential</b>." },
            { "k": "3 · There is a threshold ν<sub>0</sub>", "v": "Below a frequency characteristic of the metal, no emission occurs however intense the light or however long it is applied. Above it, emission is <b>instantaneous</b>, within about 10<sup>−9</sup> s." },
            { "k": "The one-line version", "v": "<b>Count for current, colour for energy.</b> Every graph question in this chapter is one of these three laws in disguise, and naming which one usually finishes the question." }
          ]
        },
        {
          "t": "p",
          "html": "<b>Now the failure.</b> Classical wave theory treats the energy of light as spread smoothly over the whole wavefront. An electron sitting in the metal absorbs energy continuously from the wave washing over it, like a buoy soaking up energy from swell. A brighter wave carries more energy, so it should shake the electron harder, and given enough time even a feeble wave should build up enough energy to shake one loose.<br><br>Every clause of that paragraph is contradicted by the experiments."
        },
        {
          "t": "proc",
          "title": "read the three failures of wave theory",
          "steps": [
            "<b>Failure 1: it predicts <i>K</i><sub>max</sub> rises with intensity.</b> A stronger wave should shake electrons harder and fling them out faster. Experiment says <i>K</i><sub>max</sub> depends only on frequency, and the shared stopping potential in Study 2 is the direct measurement of that.",
            "<b>Failure 2: it predicts no threshold frequency at all.</b> Given enough intensity, or enough time, any frequency should eventually free electrons, because energy is energy. Experiment says a sharp threshold ν<sub>0</sub> exists and light below it does absolutely nothing, forever.",
            "<b>Failure 3: it predicts a measurable time lag for dim light.</b> Spread a weak wave over a whole plate and the energy arriving at any one electron is tiny, so it must accumulate. The classical estimate for a dim source is hours. Experiment says emission starts within about 10<sup>−9</sup> s of the light arriving.",
            "<b>What survives.</b> Only Study 1. Current proportional to intensity is consistent with the wave picture, which is why it is such a common wrong answer when a question asks what wave theory <b>cannot</b> explain.",
            "<b>Where the argument is going.</b> All three failures share one cause: the wave picture lets energy pool. Einstein's fix is to forbid pooling, and that fix is Topic 03."
          ]
        },
        {
          "t": "protip",
          "html": "there are two dials on this experiment and they are wired to two different readings. <b>intensity to saturation current, frequency to stopping potential.</b> lock that in and half the marks in this chapter are free. when a graph question arrives, ask only one thing: which dial did they turn? if it was brightness, look right at the plateau. if it was colour, look left at the intercept."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "In a photoelectric experiment the stopping potential for a certain metal and a certain colour of light is 1.5 V. Find the maximum kinetic energy of the photoelectrons in eV and in joules, and their maximum speed.",
          "steps": [
            "<b>In eV, no arithmetic at all.</b> <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>, so a stopping potential of 1.5 V means <i>K</i><sub>max</sub> = <b>1.5 eV</b>. The numbers are the same because the charge is one <i>e</i>.",
            "<b>In joules:</b> 1.5 × 1.6 × 10<sup>−19</sup> = 2.4 × 10<sup>−19</sup> J.",
            "<b>Speed.</b> <i>K</i><sub>max</sub> = ½<i>mv</i><sup>2</sup><sub>max</sub>, so <i>v</i><sub>max</sub> = √(2<i>K</i><sub>max</sub>/<i>m</i>) = √(2 × 2.4 × 10<sup>−19</sup>/9.11 × 10<sup>−31</sup>).",
            "= √(5.27 × 10<sup>11</sup>) = 7.3 × 10<sup>5</sup> m/s. That is about 0.002<i>c</i>, comfortably non-relativistic, which is what lets us use ½<i>mv</i><sup>2</sup> at all."
          ],
          "ans": "<i>K</i><sub>max</sub> = 1.5 eV = 2.4 × 10<sup>−19</sup> J,  <i>v</i><sub>max</sub> ≈ 7.3 × 10<sup>5</sup> m/s"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two curves of photocurrent against collector potential are drawn for the same metal and the same frequency, at two different intensities. In what respect do the two curves differ?",
          "steps": [
            "<b>The trap.</b> The eye sees two different curves and assumes everything about them differs. Check the two features one at a time.",
            "<b>Stopping potential.</b> Set by <i>K</i><sub>max</sub>, which is set by frequency. The frequency is the same in both, so the stopping potential is the <b>same</b> and both curves meet the potential axis at one point.",
            "<b>Saturation current.</b> Set by the number of electrons emitted per second, which is set by intensity. The intensities differ, so the saturation currents <b>differ</b>.",
            "So exactly one feature differs. This is the most commonly misread graph in the syllabus, and the misreading is always the same: assuming intensity shifts the intercept."
          ],
          "ans": "Saturation current only. The stopping potential is identical for both."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Light of wavelength 400 nm and power 1.0 mW falls on a metal plate. Every incident photon ejects one photoelectron and all of them are collected. Find the saturation current.",
          "steps": [
            "<b>Step 1, one photon.</b> <i>E</i> = 1240/400 = 3.10 eV = 3.10 × 1.6 × 10<sup>−19</sup> = 4.96 × 10<sup>−19</sup> J.",
            "<b>Step 2, photons per second.</b> <i>n</i> = <i>P</i>/<i>E</i> = (1.0 × 10<sup>−3</sup>)/(4.96 × 10<sup>−19</sup>) = 2.02 × 10<sup>15</sup> s<sup>−1</sup>.",
            "<b>Step 3, electrons per second.</b> One for one, so <i>n</i><sub>e</sub> = 2.02 × 10<sup>15</sup> s<sup>−1</sup>.",
            "<b>Step 4, current.</b> <i>i</i> = <i>n</i><sub>e</sub><i>e</i> = (2.02 × 10<sup>15</sup>)(1.6 × 10<sup>−19</sup>) = 3.2 × 10<sup>−4</sup> A. Notice the work function never entered: saturation current is a head count and knows nothing about energies."
          ],
          "ans": "<i>i</i><sub>sat</sub> ≈ 3.2 × 10<sup>−4</sup> A = 0.32 mA"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A photocell is illuminated by monochromatic light and gives a saturation current of 12 μA at a stopping potential of 1.4 V. The lamp is then moved to twice its distance from the cell, with nothing else changed. Find the new saturation current and the new stopping potential.",
          "steps": [
            "<b>What actually changed.</b> Moving the lamp changes the <b>intensity</b> at the cell and nothing else. The colour of the light is untouched, so every photon still carries the same energy.",
            "<b>Intensity.</b> A point source spreads over 4π<i>r</i><sup>2</sup>, so doubling the distance quarters the intensity: <i>I</i> falls to <i>I</i>/4.",
            "<b>Saturation current</b> is proportional to the photon arrival rate, hence to the intensity. So it falls to 12/4 = <b>3.0 μA</b>.",
            "<b>Stopping potential</b> is set by the photon energy and the work function, neither of which moved. So <i>V</i><sub>0</sub> stays at <b>1.4 V</b>, exactly. Reading a distance change as an energy change is the trap; it is an intensity change wearing a geometry costume."
          ],
          "ans": "<i>i</i><sub>sat</sub> = 3.0 μA,  <i>V</i><sub>0</sub> = 1.4 V unchanged"
        },
        {
          "t": "mcq",
          "q": "In a photoelectric experiment the intensity of the incident light is increased while the frequency is held fixed and above threshold. Which quantity increases?",
          "opts": [
            { "label": "the maximum kinetic energy of the photoelectrons", "nudge": "This is the number-one designed trap in the chapter. <i>K</i><sub>max</sub> is set by frequency alone; intensity does not appear in it anywhere." },
            { "label": "the stopping potential", "nudge": "Same error one step later. <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>, so if <i>K</i><sub>max</sub> is untouched then so is <i>V</i><sub>0</sub>. Study 2 measures exactly this and finds no shift." },
            { "label": "the saturation photocurrent" },
            { "label": "the threshold frequency", "nudge": "A pure conceptual error. ν<sub>0</sub> = φ<sub>0</sub>/<i>h</i> is a property of the <b>metal</b> and is completely independent of the light you shine on it." }
          ],
          "correct": 2,
          "solution": "Higher intensity means more photons per second, hence more one-to-one emissions per second, hence a higher plateau. The left-hand end of the curve, where it crosses the potential axis, does not move at all. Intensity to plateau, frequency to intercept."
        },
        {
          "t": "mcq",
          "q": "Which experimental observation can classical wave theory NOT explain?",
          "opts": [
            { "label": "the proportionality of photocurrent to intensity", "nudge": "This one wave theory handles perfectly: more energy arriving means more electrons freed. It is the one result of the three that survives, which is what makes it a tempting wrong answer." },
            { "label": "the existence of a threshold frequency" },
            { "label": "the saturation of the photocurrent at high collector voltage", "nudge": "Saturation is about the <b>collecting</b> circuit, not about the light. Once every emitted electron is caught, no extra voltage can catch more, and that argument is entirely classical." },
            { "label": "the reflection of light from the metal surface", "nudge": "Reflection is not part of the photoelectric effect at all, and wave theory explains it beautifully. The option is a distractor with no connection to the question." }
          ],
          "correct": 1,
          "solution": "A wave lets energy accumulate, so given enough intensity or enough time any frequency should eventually free an electron. Experiment finds a sharp threshold ν<sub>0</sub> below which absolutely nothing happens, forever. The other two failures, <i>K</i><sub>max</sub> being independent of intensity and the absence of any time lag, are equally fatal; only the threshold is offered here."
        },
        {
          "t": "mcq",
          "q": "A photoelectric surface is illuminated by very dim light of a frequency well above its threshold. When does emission begin?",
          "opts": [
            { "label": "after a delay of several hours, while energy accumulates", "nudge": "This is precisely the classical prediction, and precisely what experiment rules out. It assumes energy pools in the electron, which is the assumption the photon picture forbids." },
            { "label": "after a delay proportional to how dim the light is", "nudge": "Same classical picture, dressed up. Dimness changes how many photons arrive per second, not how long any one of them takes to be absorbed." },
            { "label": "essentially at once, within about 10<sup>−9</sup> s" },
            { "label": "never, because dim light cannot free electrons", "nudge": "Dimness has nothing to do with whether emission happens; frequency does, and the frequency here is above threshold. Dim light simply gives a small current, not no current." }
          ],
          "correct": 2,
          "solution": "Emission is instantaneous because each absorption is a single one-to-one event between one photon and one electron. Dimming the beam reduces how <b>often</b> that event happens, so the current is small, but the first electron out still leaves within a nanosecond of the first photon arriving."
        },
        {
          "t": "mcq",
          "q": "In a photocurrent against collector potential graph, the saturation current is reached because:",
          "opts": [
            { "label": "the electrons have reached their maximum possible speed", "nudge": "The collecting voltage does accelerate the electrons, but the current stops rising long before any speed limit is involved. Speed is not what the meter counts." },
            { "label": "every emitted electron is now being collected" },
            { "label": "the metal has run out of free electrons", "nudge": "A metal holds around 10<sup>28</sup> free electrons per cubic metre and photoemission removes a vanishing fraction of them. Depletion is never the limit." },
            { "label": "the light source has reached its maximum intensity", "nudge": "The intensity is held fixed while the potential is swept; the source is not being changed at all during this study." }
          ],
          "correct": 1,
          "solution": "Raising the collector potential recruits the slower electrons that would otherwise drift back. Once even the slowest is being collected there is nobody left to recruit, so the current stops rising. The plateau height is therefore set by the <b>emission</b> rate, which is set by intensity, and not by the collecting circuit."
        },
        {
          "t": "practice",
          "items": [
            { "q": "The stopping potential in a photoelectric experiment is 0.85 V. What is <i>K</i><sub>max</sub> in eV?", "a": "<b>0.85 eV</b>. Because the charge is one <i>e</i>, the number in volts and the number in electronvolts are identical. No arithmetic required, and none should be attempted." },
            { "q": "Two curves of photocurrent against collector potential share a saturation current but meet the potential axis at different points. What was varied between them?", "a": "The <b>frequency</b>, at fixed intensity. Same photon delivery rate gives the same plateau; different photon energy gives a different intercept. This is Study 3." },
            { "q": "A photocell is illuminated with light of frequency below its threshold, and the intensity is then increased a thousandfold. What is the photocurrent?", "a": "<b>Zero</b>, still. Intensity multiplies the number of photons and each of them individually cannot pay the exit fee, so a thousand times nothing is nothing. This is the second failure of wave theory, stated as a question." },
            { "q": "Light of 500 nm and power 2.0 mW falls on a plate and one photon in a thousand ejects an electron. Find the saturation current.", "a": "One photon carries 1240/500 = 2.48 eV = 3.97 × 10<sup>−19</sup> J, so <i>n</i> = 2.0 × 10<sup>−3</sup>/3.97 × 10<sup>−19</sup> = 5.04 × 10<sup>15</sup> s<sup>−1</sup>. One in a thousand gives <i>n</i><sub>e</sub> = 5.04 × 10<sup>12</sup> s<sup>−1</sup>, so <i>i</i> = (5.04 × 10<sup>12</sup>)(1.6 × 10<sup>−19</sup>) = <b>8.1 × 10<sup>−7</sup> A</b>, about 0.81 μA." },
            { "q": "Why is the tube evacuated, and why is the window quartz rather than glass?", "a": "<b>Evacuated</b> so that emitted electrons are not scattered or reabsorbed by air molecules before reaching the collector. <b>Quartz</b> because ordinary glass absorbs ultraviolet, and ultraviolet is the light that most metals need to be above threshold at all." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading the wrong end of the I-V graph.</b> The plateau on the right is about the number of electrons; the intercept on the left is about their energy. Students who memorise the shape rather than the two readings get this backwards under time pressure, every time.",
            "<b>Thinking intensity shifts the stopping potential.</b> It does not, and Study 2 is the direct measurement. This single misconception accounts for more lost marks in this chapter than everything else combined.",
            "<b>Calling the saturation current a wave-theory failure.</b> It is not. Current proportional to intensity, and saturating once every electron is collected, is exactly what a classical picture predicts. Only the threshold, the frequency dependence of <i>K</i><sub>max</sub> and the absence of a time lag are failures.",
            "<b>Confusing the threshold frequency with the incident frequency.</b> ν<sub>0</sub> belongs to the <b>metal</b> and ν belongs to the <b>light you shine</b>. Changing the lamp cannot change ν<sub>0</sub>; changing the plate can.",
            "<b>Reporting a negative stopping potential.</b> <i>V</i><sub>0</sub> is defined as a positive magnitude and the applied retarding voltage is −<i>V</i><sub>0</sub>. Below threshold there is no emission, so <i>V</i><sub>0</sub> is zero and never negative."
          ]
        },
        {
          "t": "protip",
          "html": "if a graph question gives you a stopping potential in volts, you already have an energy in electronvolts and you have done no work. 2.3 V of stopping potential is 2.3 eV of kinetic energy. this is why examiners quote stopping potentials so often: they are handing you an energy while appearing to hand you a voltage."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>", "note": "a voltage that is an energy; same number in V and in eV" },
            { "f": "intensity → saturation current", "note": "the plateau on the right of the I-V curve; a head count" },
            { "f": "frequency → stopping potential", "note": "the intercept on the left of the I-V curve; an energy" },
            { "f": "same ν, two intensities", "note": "same intercept, different plateau. Study 2, and the whole puzzle" },
            { "f": "same intensity, two frequencies", "note": "same plateau, different intercept. Study 3" },
            { "f": "below ν<sub>0</sub>: nothing, ever", "note": "no current at any intensity for any length of time" },
            { "f": "emission within ~10<sup>−9</sup> s", "note": "no time lag, however dim the light" },
            { "f": "wave theory fails on 2 and 3, not 1", "note": "current proportional to intensity is classically fine" }
          ],
          "aids": [
            "\"count for current, colour for energy\"",
            "\"plateau right, intercept left\" when you meet an I-V graph",
            "\"a wave lets energy pool, and pooling is what nature refuses\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Einstein's Photoelectric Equation",
      "chip": "03 ONE FOR ONE",
      "kalam": "one photon, one electron, one subtraction, and the whole thing falls out",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 left three observations that no wave can produce: energy set by colour and not brightness, a hard threshold below which nothing happens, and emission with no time lag. Einstein resolved all three at a single stroke in 1905, and the move was not a clever calculation. It was a change of what light <b>is</b>.<br><br>Treat a beam as a stream of photons, each carrying <i>E</i> = <i>h</i>ν. Then insist on one further thing, which is where the whole argument lives: <b>a single photon is absorbed by a single electron, all or nothing</b>. There is no partial absorption, and no electron can collect energy from two photons and add them up."
        },
        {
          "t": "think",
          "html": "you are at the gated exit of a Mumbai local station. to get out you touch your card to the turnstile, and the gate opens only if the card holds at least the minimum fare. have less and no amount of waving it harder helps. have more and the leftover balance simply stays in your pocket as you walk out. a photon is one card with one fixed balance printed on it, and the metal's turnstile charges φ₀."
        },
        {
          "t": "p",
          "html": "That one rule kills the wave picture's whole method. Under a wave, energy trickles into an electron continuously and accumulates, which is why classical physics expects a time lag for dim light and expects any frequency to work eventually. Under the photon rule there is no trickle and no accumulation. Either one packet arrives carrying at least φ<sub>0</sub>, in which case the electron leaves immediately, or it does not, in which case the electron never leaves however many such packets you send.<br><br>The rest is one line of energy bookkeeping."
        },
        {
          "t": "def",
          "term": "The photoelectric effect, stated exactly",
          "html": "The emission of electrons from a metal surface when light of frequency above the metal's threshold falls on it. The escaped electrons are <b>photoelectrons</b> and the resulting current is the <b>photocurrent</b>. The defining feature, and the whole content of Einstein's account, is that the transaction is <b>one photon to one electron</b>: the electron receives exactly <i>h</i>ν, all at once, or it receives nothing."
        },
        {
          "t": "p",
          "html": "Four assumptions sit underneath every clean relation in this topic, and knowing them is knowing where the model stops. <b>One:</b> a single photon is absorbed by a single electron, a one-to-one transaction rather than a pooling of many weak photons. <b>Two:</b> the electron emitted with maximum kinetic energy is one that escapes from the very surface without losing energy to internal collisions, which is why the equation carries the word <i>maximum</i> and why most photoelectrons come out slower than it says. <b>Three:</b> the surface is clean and in vacuum, since oxide layers and adsorbed gas change φ<sub>0</sub>. <b>Four:</b> relativistic corrections are ignored, which is safe because photoelectron speeds run to about 10<sup>6</sup> m/s, well under one per cent of <i>c</i>.<br><br>The first of these does bend at laser intensities, where <b>multi-photon</b> absorption becomes possible and light below threshold can eject electrons after all. That is real physics and it is far outside the exam."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.5 · ONE PHOTON, ONE ELECTRON",
          "chips": ["above threshold", "below threshold"],
          "captions": [
            "A single photon of energy h-nu comes in from the upper left and is absorbed by a single electron at the surface. It is a one-on-one transaction, not a wave washing over the plate, and the whole packet is handed over at once. The electron spends phi-nought paying its way out through the surface and leaves with everything that is left, K max = h nu minus phi-nought. An electron starting deeper inside the metal loses more on the way out through collisions, so it emerges slower; K max is the ceiling, reached only by an electron right at the surface, which is why the equation carries the word maximum.",
            "Same photon, same one-on-one rule, a metal with a bigger work function. The electron absorbs the entire h nu, exactly as before, and it is still short of what the surface charges. So it does not half-escape and it does not wait for a second photon to top it up; it simply loses the energy again in collisions and stays put. Nothing comes out. Send a million such photons a second and a million electrons do this, and the microammeter still reads zero. That is what a threshold IS, and it is the fact no wave picture can produce."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [-2.4, 5],
              "aspect": 0.62,
              "axes": "none",
              "polys": [{ "pts": [[0.6, -2.2], [9.4, -2.2], [9.4, 0], [0.6, 0]], "close": true, "fill": "hatch", "tone": "soft", "label": "metal" }],
              "arrows": [
                { "from": [2.4, 4.4], "to": [4.6, 0.25], "tone": "amber", "label": "hν", "at": "start" },
                { "from": [4.9, 0.3], "to": [7.6, 3.9], "tone": "green", "label": "K max", "at": "end" }
              ],
              "marks": [{ "x": 4.7, "y": 0.05, "glyph": "dot", "label": "e−" }],
              "labels": [{ "x": 8, "y": 4.5, "text": "hν > φ₀" }]
            },
            {
              "x": [0, 10],
              "y": [-2.4, 5],
              "aspect": 0.62,
              "axes": "none",
              "polys": [{ "pts": [[0.6, -2.2], [9.4, -2.2], [9.4, 0], [0.6, 0]], "close": true, "fill": "hatch", "tone": "soft", "label": "metal" }],
              "arrows": [
                { "from": [2.4, 4.4], "to": [4.6, 0.25], "tone": "amber", "label": "hν", "at": "start" },
                { "from": [4.9, 0.1], "to": [5.9, 1.6], "tone": "red", "head": "none" },
                { "from": [6.1, 1.6], "to": [7, 0.15], "tone": "red", "label": "falls back", "at": "mid" }
              ],
              "marks": [{ "x": 4.7, "y": -0.35, "glyph": "dot", "label": "e−" }],
              "labels": [{ "x": 8, "y": 4.5, "text": "hν < φ₀" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "EINSTEIN'S PHOTOELECTRIC EQUATION",
          "tag": "ENERGY IN, FEE OUT, REST IS SPEED",
          "main": "K<sub>max</sub> = hν − φ<sub>0</sub> = ½mv<sup>2</sup><sub>max</sub>",
          "legend": [
            "<i>K</i><sub>max</sub> is the maximum kinetic energy of the emitted photoelectrons, in joules (J) or in eV.",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s and ν is the frequency of the incident light, in hertz (Hz), so <i>h</i>ν is the energy one photon delivers, in joules.",
            "φ<sub>0</sub> is the work function of the metal, in joules (J) or in eV.",
            "<i>m</i> = 9.11 × 10<sup>−31</sup> kg is the electron mass and <i>v</i><sub>max</sub> its maximum speed, in m/s."
          ],
          "note": "<b>Notation watch, locked chapter-wide.</b> ν is the Greek nu, the <b>frequency of the light</b>; <i>v</i> is an italic vee, the <b>speed of the electron</b>. They sit in the same equation. Note also what is absent: no intensity, no time, no area. Brightness cannot appear on the right-hand side, so it cannot appear on the left, and that single absence is the second law of photoelectric emission proved rather than observed."
        },
        {
          "t": "deriv",
          "kicker": "EINSTEIN'S EQUATION, THE BOARD DERIVATION",
          "steps": [
            { "eq": "one photon delivers E = hν to one electron", "why": "Invoke the quantum hypothesis. Energy arrives in indivisible lumps, not in a continuous trickle, and one lump goes to one electron entire. This is the assumption everything else follows from, and it is a postulate rather than a result: nothing in classical physics suggests it and the experiments of Topic 02 force it." },
            { "eq": "escaping the surface costs at least φ<sub>0</sub>", "why": "Pay the exit fee. An electron sitting right at the surface spends exactly the work function to break free of the binding forces there. An electron deeper inside must additionally lose energy to collisions on its way out, so it spends more, which is why most photoelectrons emerge with less than the maximum." },
            { "eq": "hν = φ<sub>0</sub> + K<sub>max</sub>", "why": "Conserve energy, for the best case. Whatever the photon delivers either pays the fee or becomes kinetic energy of the freed electron. Written for a surface electron, which loses the least and therefore carries away the most, this is an equality rather than an inequality." },
            { "eq": "K<sub>max</sub> = hν − φ<sub>0</sub> = ½mv<sup>2</sup><sub>max</sub>", "why": "Rearrange, and read what you have. A straight line in the frequency, with slope h and intercept minus the work function. The kinetic energy of the fastest electron is fixed entirely by the colour of the light and the identity of the metal, and by nothing else whatsoever." },
            { "eq": "emission requires K<sub>max</sub> ≥ 0, so hν ≥ φ<sub>0</sub>", "why": "Recover the threshold. Setting K_max = 0 gives the exact edge: h nu-nought = phi-nought. At that frequency electrons emerge with precisely zero kinetic energy, so the stopping potential is zero, and emission is only just happening. Below it the equation would return a negative kinetic energy, which does not mean slow electrons; it means the premise has failed and there is nothing to describe." },
            { "eq": "eV<sub>0</sub> = hν − φ<sub>0</sub>,  so  V<sub>0</sub> = (h/e)ν − φ<sub>0</sub>/e", "why": "Make it measurable. Substituting K_max = eV_0 from Topic 02 turns an energy nobody can see into a voltage anybody can read off a meter. Plot V_0 against nu and you get a straight line whose slope is h/e, the SAME for every metal, and whose intercept on the frequency axis is nu-nought, DIFFERENT for every metal. Millikan measured that slope and obtained Planck's constant independently, which is what turned Einstein's proposal into accepted physics and won him the 1921 Nobel Prize." }
          ]
        },
        {
          "t": "defgrid",
          "title": "How one equation explains all three laws",
          "tag": "READ IT BACK AGAINST TOPIC 02",
          "rows": [
            { "k": "Current ∝ intensity", "v": "More photons per second means more one-to-one absorptions per second, hence more electrons emitted per second. Intensity enters the <b>count</b>, which is the current, and nowhere else." },
            { "k": "<i>K</i><sub>max</sub> depends on ν alone", "v": "The equation contains ν and contains no intensity term at all, so brighter light cannot raise <i>K</i><sub>max</sub> by any amount. This is the observation that beat classical physics and it is now a line of algebra." },
            { "k": "A threshold exists", "v": "Baked in as ν<sub>0</sub> = φ<sub>0</sub>/<i>h</i>. One photon must individually cover the fee, and multiplying the number of photons multiplies nothing that matters." },
            { "k": "No time lag", "v": "A single collision transfers the whole energy at once, so there is nothing to wait for. Emission begins within about 10<sup>−9</sup> s of the first photon arriving, however dim the beam." }
          ]
        },
        {
          "t": "formula",
          "kicker": "THRESHOLD FREQUENCY AND WAVELENGTH",
          "tag": "PROPERTIES OF THE METAL",
          "main": "ν<sub>0</sub> = φ<sub>0</sub>/h,   λ<sub>0</sub> = hc/φ<sub>0</sub> = c/ν<sub>0</sub>",
          "legend": [
            "ν<sub>0</sub> is the threshold frequency, in hertz (Hz): the <b>minimum</b> frequency that produces emission.",
            "λ<sub>0</sub> is the threshold wavelength, in metres (m), or in nanometres via λ<sub>0</sub>(nm) = 1240/φ<sub>0</sub>(eV): the <b>maximum</b> wavelength that produces emission.",
            "φ<sub>0</sub> is the work function, <i>h</i> = 6.63 × 10<sup>−34</sup> J s and <i>c</i> = 3 × 10<sup>8</sup> m/s."
          ],
          "note": "Watch the <b>inversion</b>, because it reverses one of the two conditions and this is where careless answers come from. Emission needs ν > ν<sub>0</sub> but λ < λ<sub>0</sub>: higher frequency is shorter wavelength. So a metal with a <b>low</b> work function has a <b>long</b> threshold wavelength and is therefore easy to work, which is exactly the caesium of Topic 01 at λ<sub>0</sub> = 580 nm, well inside the visible band."
        },
        {
          "t": "formula",
          "kicker": "THE STOPPING POTENTIAL LINE",
          "tag": "THE CHAPTER'S DEFINING GRAPH",
          "main": "V<sub>0</sub> = (h/e)ν − φ<sub>0</sub>/e",
          "legend": [
            "<i>V</i><sub>0</sub> is the stopping potential in volts (V), plotted on the vertical axis.",
            "ν is the frequency of the incident light in hertz (Hz), on the horizontal axis.",
            "<i>h</i>/<i>e</i> = 4.14 × 10<sup>−15</sup> V s is the <b>slope</b>, identical for every metal because both <i>h</i> and <i>e</i> are universal constants.",
            "φ<sub>0</sub>/<i>e</i> in volts sets the intercept on the vertical axis, at −φ<sub>0</sub>/<i>e</i>, and it differs from metal to metal."
          ],
          "note": "Two different intercepts, and questions ask for both. The line crosses the <b>frequency</b> axis at ν<sub>0</sub> = φ<sub>0</sub>/<i>h</i>, which is the physical threshold. Extended backwards to ν = 0 it crosses the <b>vertical</b> axis at −φ<sub>0</sub>/<i>e</i>, which is an extrapolation and not a measurement: below ν<sub>0</sub> there is no emission, so the real stopping potential there is zero and never negative."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.6 · STOPPING POTENTIAL AGAINST FREQUENCY",
          "chips": ["one metal", "two metals, parallel"],
          "captions": [
            "Stopping potential against frequency, for one metal. The solid part is what an experiment can actually produce: it starts at the threshold, here 5 x 10^14 Hz, and rises as a straight line of slope h/e. The dashed part is an EXTRAPOLATION backwards to zero frequency, drawn because it is where the work function shows up as the intercept minus phi-nought over e, but no measurement lives on it. Below the threshold there is no emission at all, so the stopping potential is zero, not negative. Read the graph twice: once for its frequency intercept, which gives nu-nought and hence the work function, and once for its slope, which gives h/e and hence Planck's constant.",
            "Now add a second metal with a larger work function, measured on the same apparatus with the same light source. Its line starts further right, at a higher threshold, because it charges a bigger exit fee. And the two lines are PARALLEL. That parallelism is not a drawing convenience, it is the entire result: the slope is h/e, and h and e are properties of nature rather than of caesium or platinum, so every metal on Earth gives the same slope. Change the metal and you slide the line sideways; nothing you can do to it will tilt the line. Millikan measured that slope on several metals, got Planck's constant each time, and that is what settled the argument."
          ],
          "frames": [
            {
              "x": [0, 16],
              "y": [-2.6, 5],
              "aspect": 0.72,
              "axisX": "ν / 10¹⁴ Hz",
              "axisY": "V₀ (V)",
              "ticksX": { "at": [0, 5, 10, 15] },
              "ticksY": { "at": [-2, 0, 2, 4] },
              "curves": [
                { "c": "pts", "pts": [[5, 0], [15.5, 4.347]] },
                { "c": "pts", "pts": [[0, -2.07], [5, 0]], "dash": true, "soft": true }
              ],
              "points": [
                { "x": 5, "y": 0, "label": "ν₀", "at": "se" },
                { "x": 0, "y": -2.07 }
              ],
              "labels": [
                { "x": 1.4, "y": -1.6, "text": "−φ₀/e" },
                { "x": 11, "y": 1.6, "text": "slope = h/e" }
              ]
            },
            {
              "x": [0, 16],
              "y": [-2.6, 5],
              "aspect": 0.72,
              "axisX": "ν / 10¹⁴ Hz",
              "axisY": "V₀ (V)",
              "ticksX": { "at": [0, 5, 10, 15] },
              "ticksY": { "at": [-2, 0, 2, 4] },
              "curves": [
                { "c": "pts", "pts": [[5, 0], [15.5, 4.347]] },
                { "c": "pts", "pts": [[10, 0], [15.5, 2.277]] }
              ],
              "points": [
                { "x": 5, "y": 0, "label": "ν₀ A", "at": "se" },
                { "x": 10, "y": 0, "label": "ν₀ B", "at": "se" }
              ],
              "labels": [
                { "x": 4.2, "y": 3.4, "text": "parallel: same h" },
                { "x": 12.6, "y": 3.85, "text": "metal A" },
                { "x": 13.2, "y": 0.55, "text": "metal B" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Robert Millikan spent ten years trying to <b>disprove</b> Einstein's equation, which is the highest compliment an experimentalist can pay a theory. He built a photoelectric cell in which the metal surfaces were shaved clean in vacuum, measured stopping potentials against frequency for several alkali metals, and got straight parallel lines every time.<br><br>Then he read the slope. It gave <i>h</i> = 6.57 × 10<sup>−34</sup> J s, agreeing with the value Planck had obtained from an entirely unrelated experiment on hot bodies. Two completely different corners of physics, one constant. Einstein received the 1921 Nobel Prize for this equation, not for relativity."
        },
        {
          "t": "think",
          "html": "the graph is doing two jobs at once and questions ask for either. its <b>slope</b> is a universal constant, so it tells you about the world and nothing about the plate in the tube. its <b>intercept</b> is the plate and nothing about the world. one straight line, two completely different kinds of information, and the first thing to decide when a graph question arrives is which of the two it wants."
        },
        {
          "t": "proc",
          "title": "read a stopping-potential graph",
          "steps": [
            "<b>Check the axes first.</b> <i>V</i><sub>0</sub> against ν has slope <i>h</i>/<i>e</i>. <i>K</i><sub>max</sub> against ν has slope <i>h</i>. They are the same line scaled by <i>e</i>, and answering one when asked the other is out by 10<sup>19</sup>.",
            "<b>For Planck's constant, take the slope.</b> Read two well-separated points, compute Δ<i>V</i><sub>0</sub>/Δν, and multiply by <i>e</i>. Do not use the intercepts for this.",
            "<b>For the work function, take an intercept.</b> Either read ν<sub>0</sub> off the frequency axis and use φ<sub>0</sub> = <i>h</i>ν<sub>0</sub>, or read the extrapolated vertical intercept, which is −φ<sub>0</sub>/<i>e</i>, and multiply by <i>e</i>.",
            "<b>Cross-check the two routes.</b> Slope times the frequency intercept must equal the magnitude of the vertical intercept, because both equal φ<sub>0</sub>/<i>e</i>. If they disagree you have misread the graph.",
            "<b>If two metals are drawn, expect parallel lines.</b> If the printed lines are not parallel, either the graph is wrong or one of them is not a photoelectric plot, and saying so is the right answer."
          ]
        },
        {
          "t": "proc",
          "title": "attack any photoelectric numerical",
          "steps": [
            "<b>Decide your currency first and write it at the top.</b> Everything in eV, or everything in joules. This is where marks are lost, so make it a deliberate act rather than a habit.",
            "<b>Get the photon energy.</b> If a wavelength in nm is given, <i>E</i>(eV) = 1240/λ(nm) and you are done. If a frequency is given, <i>E</i> = <i>h</i>ν in joules, so divide by 1.6 × 10<sup>−19</sup> if you want eV.",
            "<b>Test whether anything is emitted at all.</b> Compare <i>E</i> with φ<sub>0</sub>, or equivalently λ with λ<sub>0</sub>. If <i>E</i> < φ<sub>0</sub> the answer to almost every part is zero and you have finished early.",
            "<b>Subtract once.</b> <i>K</i><sub>max</sub> = <i>E</i> − φ<sub>0</sub>. Once, never twice, and never scaled from a previous answer.",
            "<b>Convert to whatever was asked.</b> Stopping potential: numerically equal to <i>K</i><sub>max</sub> in eV. Speed: convert <i>K</i><sub>max</sub> to joules first, then <i>v</i> = √(2<i>K</i>/<i>m</i>). Current: that is a separate calculation from photon counting and does not involve φ<sub>0</sub> at all."
          ]
        },
        {
          "t": "protip",
          "html": "for any \"does it emit?\" question, skip the energy balance entirely and compare wavelengths. if λ of the incident light is <b>shorter</b> than λ₀ of the metal, emission happens; if longer, nothing. one comparison, no calculator. and remember which way round it goes by the physics rather than by memory: shorter wavelength means a bigger photon, and a bigger photon is the one that can pay."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A metal surface has work function 2.5 eV. Monochromatic light of wavelength 400 nm falls on it. Find (a) the maximum kinetic energy of the photoelectrons and (b) the stopping potential.",
          "steps": [
            "<b>Currency: electronvolts throughout.</b> Both given numbers are already in eV-friendly units, so there is no reason to visit joules.",
            "<b>(a) Photon energy.</b> <i>E</i> = 1240/400 = 3.10 eV. Then <i>K</i><sub>max</sub> = <i>E</i> − φ<sub>0</sub> = 3.10 − 2.50 = <b>0.60 eV</b>.",
            "In joules, if asked: 0.60 × 1.6 × 10<sup>−19</sup> = 9.6 × 10<sup>−20</sup> J.",
            "<b>(b) Stopping potential.</b> <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>, so <i>V</i><sub>0</sub> = 0.60 V. When <i>K</i><sub>max</sub> is in eV the stopping potential in volts is numerically identical, and writing out the division by <i>e</i> is a way to make an arithmetic slip for no gain."
          ],
          "ans": "<i>K</i><sub>max</sub> = 0.60 eV = 9.6 × 10<sup>−20</sup> J,  <i>V</i><sub>0</sub> = 0.60 V"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Light of frequency ν on a metal gives stopping potential <i>V</i><sub>0</sub>. The frequency is doubled to 2ν at unchanged intensity. Is the new stopping potential equal to <i>V</i><sub>0</sub>, exactly 2<i>V</i><sub>0</sub>, more than 2<i>V</i><sub>0</sub>, or less than 2<i>V</i><sub>0</sub>?",
          "steps": [
            "<b>The trap.</b> The eye sees double the frequency and reaches for 2<i>V</i><sub>0</sub>. Resist it, and do not scale the old answer. Go back to the equation.",
            "At ν: <i>eV</i><sub>0</sub> = <i>h</i>ν − φ<sub>0</sub>, so <i>h</i>ν = <i>eV</i><sub>0</sub> + φ<sub>0</sub>.",
            "At 2ν: <i>eV</i><sub>0</sub>′ = 2<i>h</i>ν − φ<sub>0</sub> = 2(<i>eV</i><sub>0</sub> + φ<sub>0</sub>) − φ<sub>0</sub> = 2<i>eV</i><sub>0</sub> + φ<sub>0</sub>.",
            "So <i>V</i><sub>0</sub>′ = 2<i>V</i><sub>0</sub> + φ<sub>0</sub>/<i>e</i>, which is strictly <b>more</b> than 2<i>V</i><sub>0</sub> for any real metal. <b>Why.</b> The constant fee φ<sub>0</sub> is subtracted only once, so doubling the gross income more than doubles the take-home. Geometrically it is just the fact that the line does not pass through the origin."
          ],
          "ans": "More than 2<i>V</i><sub>0</sub>, by exactly φ<sub>0</sub>/<i>e</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "On one metal, light of wavelength 400 nm gives a stopping potential of 0.90 V and light of wavelength 250 nm gives 2.76 V. Determine (a) Planck's constant and (b) the work function.",
          "steps": [
            "<b>The method: write the equation twice and subtract, so φ<sub>0</sub> cancels.</b> <i>eV</i><sub>0,1</sub> = <i>hc</i>/λ<sub>1</sub> − φ<sub>0</sub> and <i>eV</i><sub>0,2</sub> = <i>hc</i>/λ<sub>2</sub> − φ<sub>0</sub>, so <i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) = <i>hc</i>(1/λ<sub>1</sub> − 1/λ<sub>2</sub>).",
            "<b>The bracket:</b> 1/(400 × 10<sup>−9</sup>) − 1/(250 × 10<sup>−9</sup>) = (2.5 − 4.0) × 10<sup>6</sup> = −1.5 × 10<sup>6</sup> m<sup>−1</sup>. <b>The left side:</b> (1.6 × 10<sup>−19</sup>)(0.90 − 2.76) = (1.6 × 10<sup>−19</sup>)(−1.86) = −2.976 × 10<sup>−19</sup> J.",
            "<b>(a)</b> <i>hc</i> = (−2.976 × 10<sup>−19</sup>)/(−1.5 × 10<sup>6</sup>) = 1.984 × 10<sup>−25</sup> J m, so <i>h</i> = 1.984 × 10<sup>−25</sup>/3 × 10<sup>8</sup> = <b>6.6 × 10<sup>−34</sup> J s</b>. Both signs are negative and cancel, which is the check that the two equations were subtracted the same way round.",
            "<b>(b)</b> Back-substitute in either equation: φ<sub>0</sub> = <i>hc</i>/λ<sub>1</sub> − <i>eV</i><sub>0,1</sub> = 1.984 × 10<sup>−25</sup>/400 × 10<sup>−9</sup> − (1.6 × 10<sup>−19</sup>)(0.90) = 4.96 × 10<sup>−19</sup> − 1.44 × 10<sup>−19</sup> = 3.52 × 10<sup>−19</sup> J = <b>2.2 eV</b>. Check it on the second point: 1240/250 − 2.76 = 4.96 − 2.76 = 2.20 eV. The two agree, which is how you know the data is consistent."
          ],
          "ans": "<i>h</i> ≈ 6.6 × 10<sup>−34</sup> J s,  φ<sub>0</sub> ≈ 2.2 eV"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A source of wavelength 620 nm and power 3.2 mW illuminates a clean metal plate of work function 1.90 eV. Exactly 0.10 per cent of the incident photons eject a photoelectron. Find (a) the saturation photocurrent, (b) the maximum speed of the electrons and (c) the stopping potential.",
          "steps": [
            "<b>(a) The counting half.</b> <i>E</i> = 1240/620 = 2.00 eV = 3.2 × 10<sup>−19</sup> J, so photons per second <i>n</i> = 3.2 × 10<sup>−3</sup>/3.2 × 10<sup>−19</sup> = 1.0 × 10<sup>16</sup> s<sup>−1</sup>. Electrons per second: 0.0010 × 1.0 × 10<sup>16</sup> = 1.0 × 10<sup>13</sup> s<sup>−1</sup>.",
            "<i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i> = (1.0 × 10<sup>13</sup>)(1.6 × 10<sup>−19</sup>) = 1.6 × 10<sup>−6</sup> A = 1.6 μA.",
            "<b>(b) The energy half, which is completely independent.</b> <i>K</i><sub>max</sub> = 2.00 − 1.90 = 0.10 eV = 1.6 × 10<sup>−20</sup> J. Then <i>v</i><sub>max</sub> = √(2 × 1.6 × 10<sup>−20</sup>/9.11 × 10<sup>−31</sup>) = √(3.51 × 10<sup>10</sup>) = 1.9 × 10<sup>5</sup> m/s.",
            "<b>(c)</b> <i>V</i><sub>0</sub> = <i>K</i><sub>max</sub>/<i>e</i> = 0.10 V.",
            "<b>The check that matters.</b> The 0.10 per cent yield changed the current and did not touch the speed or the stopping potential, because it multiplies the head count and the head count does not appear in <i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub>. If a yield ever changes your <i>V</i><sub>0</sub>, you have crossed the two halves of the problem."
          ],
          "ans": "(a) 1.6 μA   (b) 1.9 × 10<sup>5</sup> m/s   (c) 0.10 V"
        },
        {
          "t": "mcq",
          "q": "The graph of maximum kinetic energy of photoelectrons against the frequency of the incident light is:",
          "opts": [
            { "label": "a straight line through the origin", "nudge": "This forgets the −φ<sub>0</sub> term. The line is straight, but at ν = 0 it sits at −φ<sub>0</sub>, and it only reaches zero at the threshold ν<sub>0</sub>." },
            { "label": "a straight line of positive slope with a negative intercept on the energy axis" },
            { "label": "a curve concave upwards", "nudge": "This imagines a nonlinearity that is not there. <i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub> is linear in ν, with <i>h</i> constant." },
            { "label": "a horizontal line", "nudge": "This confuses the two independences. <i>K</i><sub>max</sub> is flat against <b>intensity</b>, not against frequency, which is precisely the distinction the chapter is built on." }
          ],
          "correct": 1,
          "solution": "From <i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub>: the slope is <i>h</i>, positive, and the intercept at ν = 0 is −φ<sub>0</sub>, negative. The line crosses the frequency axis at ν<sub>0</sub> = φ<sub>0</sub>/<i>h</i>. The <i>V</i><sub>0</sub> against ν graph is the same line divided through by <i>e</i>, with slope <i>h</i>/<i>e</i> and intercept −φ<sub>0</sub>/<i>e</i>."
        },
        {
          "t": "mcq",
          "q": "Light of energy 4.0 eV ejects photoelectrons from a metal of work function 2.0 eV. If the photon energy is doubled to 8.0 eV, the maximum kinetic energy becomes:",
          "opts": [
            { "label": "4.0 eV", "nudge": "This doubles the original <i>K</i><sub>max</sub> of 2.0 eV. It is the same doubling fallacy as the speed trap above: φ<sub>0</sub> is subtracted once, not twice, so nothing scales." },
            { "label": "6.0 eV" },
            { "label": "8.0 eV", "nudge": "This forgets to subtract the work function at all. The electron still has to pay to get out, whatever the photon brought." },
            { "label": "12.0 eV", "nudge": "This adds instead of subtracting, or doubles the answer after subtracting. Either way it exceeds the energy the photon delivered, which is impossible on energy conservation alone." }
          ],
          "correct": 1,
          "solution": "Originally <i>K</i><sub>max</sub> = 4.0 − 2.0 = 2.0 eV. After doubling the photon energy, <i>K</i><sub>max</sub>′ = 8.0 − 2.0 = 6.0 eV, which is three times the old value rather than two. Always recompute from <i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub>; never scale a previous answer."
        },
        {
          "t": "mcq",
          "q": "Light of exactly the threshold frequency ν<sub>0</sub> falls on a metal. The stopping potential is:",
          "opts": [
            { "label": "zero" },
            { "label": "negative, and equal to −φ<sub>0</sub>/e", "nudge": "That value is the extrapolated intercept at ν = 0, not the stopping potential at ν<sub>0</sub>. A stopping potential is a magnitude and cannot be negative." },
            { "label": "equal to φ<sub>0</sub>/e", "nudge": "This substitutes the work function itself for the leftover energy. At threshold the photon delivers exactly φ<sub>0</sub> and there is nothing left over at all." },
            { "label": "undefined, because no electrons are emitted", "nudge": "At exactly ν<sub>0</sub> emission is just beginning, so electrons do come out, carrying zero kinetic energy. It is the edge of the range, not outside it." }
          ],
          "correct": 0,
          "solution": "At ν = ν<sub>0</sub>, <i>K</i><sub>max</sub> = <i>h</i>ν<sub>0</sub> − φ<sub>0</sub> = 0. The electrons emerge with no kinetic energy at all, so the smallest reverse voltage stops them and <i>V</i><sub>0</sub> = 0. This is the point where the line in Figure 11.6 crosses the frequency axis, and it is exactly why the dashed continuation below it is an extrapolation rather than data."
        },
        {
          "t": "mcq",
          "q": "In a <i>V</i><sub>0</sub> against ν experiment repeated on two different metals with the same apparatus, the two straight lines will:",
          "opts": [
            { "label": "have different slopes and the same frequency intercept", "nudge": "Exactly backwards. The slope <i>h</i>/<i>e</i> is built from two universal constants and cannot depend on the metal; the intercept is φ<sub>0</sub>/<i>h</i> and must." },
            { "label": "be parallel, with different frequency intercepts" },
            { "label": "be identical", "nudge": "That would require the two metals to have the same work function, which is not given and is generally false. Different metals means different thresholds." },
            { "label": "intersect at the origin", "nudge": "Neither line passes through the origin: each crosses the frequency axis at its own ν<sub>0</sub> > 0. Two parallel lines with different intercepts never meet anywhere." }
          ],
          "correct": 1,
          "solution": "The slope is <i>h</i>/<i>e</i> = 4.14 × 10<sup>−15</sup> V s, and both <i>h</i> and <i>e</i> are constants of nature, so every metal gives the same slope. Only the intercept moves, sliding the line sideways according to the work function. That parallelism is the whole evidential force of the experiment: it is what shows <i>h</i> is universal, and it is what let Millikan measure it."
        },
        {
          "t": "practice",
          "items": [
            { "q": "A metal has a work function of 4.2 eV. Calculate its threshold wavelength.", "a": "λ<sub>0</sub>(nm) = 1240/φ<sub>0</sub>(eV) = 1240/4.2 = <b>295 nm</b>. Well into the ultraviolet, so no visible light will work this metal at any brightness." },
            { "q": "Light of wavelength 500 nm falls on a metal of work function 1.8 eV. Find <i>K</i><sub>max</sub> in eV.", "a": "<i>E</i> = 1240/500 = 2.48 eV, so <i>K</i><sub>max</sub> = 2.48 − 1.80 = <b>0.68 eV</b>. The stopping potential would be 0.68 V." },
            { "q": "In a <i>V</i><sub>0</sub> against ν experiment the straight line has slope 4.14 × 10<sup>−15</sup> V s. Determine Planck's constant.", "a": "Slope = <i>h</i>/<i>e</i>, so <i>h</i> = <i>e</i> × slope = (1.6 × 10<sup>−19</sup>)(4.14 × 10<sup>−15</sup>) = <b>6.62 × 10<sup>−34</sup> J s</b>. This is Millikan's measurement in one line." },
            { "q": "The threshold wavelength of a metal is 600 nm. Light of 400 nm falls on it. Find <i>K</i><sub>max</sub>.", "a": "φ<sub>0</sub> = 1240/600 = 2.07 eV and <i>E</i> = 1240/400 = 3.10 eV, so <i>K</i><sub>max</sub> = 3.10 − 2.07 = <b>1.03 eV</b>. Going through the work function is safer than trying to combine the two wavelengths directly." },
            { "q": "A metal of work function 2.0 eV emits photoelectrons that are stopped by a reverse potential of 0.5 V. Find the wavelength of the light.", "a": "<i>E</i> = <i>K</i><sub>max</sub> + φ<sub>0</sub> = 0.5 + 2.0 = 2.5 eV, so λ = 1240/2.5 = <b>496 nm</b>. Green light, comfortably inside the visible band, which is the plausibility check on the answer." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing eV and joules inside one equation.</b> φ<sub>0</sub> is quoted in eV and photon energies are often computed in joules, and subtracting one from the other is where marks disappear. Work entirely in eV using 1240/λ(nm), and convert at the very end if SI is demanded. If you must use joules, convert φ<sub>0</sub> first, on its own line, before anything else.",
            "<b>Scaling a previous answer instead of recomputing.</b> Doubling ν does not double <i>K</i><sub>max</sub> or <i>V</i><sub>0</sub>, because φ<sub>0</sub> is subtracted once. Always return to <i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub>.",
            "<b>Confusing threshold quantities with incident ones.</b> ν<sub>0</sub> and λ<sub>0</sub> belong to the <b>metal</b>; ν and λ belong to the <b>light you shine</b>. And the condition inverts between them: emission needs ν > ν<sub>0</sub> but λ < λ<sub>0</sub>.",
            "<b>Letting a quantum efficiency change the electron energy.</b> If a question says only one photon in a thousand ejects an electron, that number divides the current and touches nothing else. <i>K</i><sub>max</sub>, <i>v</i><sub>max</sub> and <i>V</i><sub>0</sub> are set by frequency and work function alone.",
            "<b>Reaching for relativity.</b> Photoelectron speeds here run to about 10<sup>6</sup> m/s, well under one per cent of <i>c</i>, so ½<i>mv</i><sup>2</sup> is exact to better than one part in 10<sup>4</sup>. The relativistic form is not needed anywhere in this chapter and using it wastes time you do not have."
          ]
        },
        {
          "t": "protip",
          "html": "two data points on one metal always mean the same move: write the equation twice and <b>subtract</b>, because that kills φ₀ in one line and leaves you with <i>h</i>. then put <i>h</i> back into either equation to recover φ₀, and check it against the <i>other</i> equation. if the two work functions disagree, the data is inconsistent and you should say so rather than average them."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>K</i><sub>max</sub> = <i>h</i>ν − φ<sub>0</sub> = ½<i>mv</i><sup>2</sup><sub>max</sub>", "note": "one photon, one electron, one subtraction. No intensity anywhere" },
            { "f": "<i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>", "note": "K in eV gives V₀ in volts as the same number" },
            { "f": "<i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)ν − φ<sub>0</sub>/<i>e</i>", "note": "a straight line: slope h/e universal, intercept φ₀ specific" },
            { "f": "slope = <i>h</i>/<i>e</i> = 4.14 × 10<sup>−15</sup> V s", "note": "same for every metal; this is how Millikan measured h" },
            { "f": "ν<sub>0</sub> = φ<sub>0</sub>/<i>h</i>,  λ<sub>0</sub> = 1240/φ<sub>0</sub>(eV) nm", "note": "properties of the metal, not of the light" },
            { "f": "emit if ν > ν<sub>0</sub>, equivalently λ < λ<sub>0</sub>", "note": "the condition inverts between frequency and wavelength" },
            { "f": "at ν = ν<sub>0</sub>: <i>K</i><sub>max</sub> = 0, <i>V</i><sub>0</sub> = 0", "note": "emission just beginning; below it, nothing rather than negative" },
            { "f": "yield changes current, never <i>V</i><sub>0</sub>", "note": "counting and energy are two independent halves of any problem" }
          ],
          "aids": [
            "\"energy in, fee out, the rest is speed\"",
            "\"subtract once, never scale\" for every doubling question",
            "\"parallel lines mean h belongs to nature, not to the metal\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Matter Waves and the de Broglie Relation",
      "chip": "04 THE TURNABOUT",
      "kalam": "if waves can be particles, ask the question the other way round",
      "blocks": [
        {
          "t": "p",
          "html": "Topics 01 to 03 watched light, which everyone knew was a wave, start behaving like a stream of bullets. Now comes the turnabout, and it is the boldest single sentence in the syllabus.<br><br>In 1924 a French graduate student named Louis de Broglie asked a question so simple it sounds reckless: <b>if waves can behave like particles, can particles behave like waves?</b> He had no experiment prompting him and no equation forcing him. He had a symmetry argument."
        },
        {
          "t": "p",
          "html": "The argument runs like this. The universe is built out of matter and radiation. If radiation turns out to be two-faced, wave on some days and particle on others, then matter, to keep the books balanced, ought to be two-faced as well. Every moving particle should have a wave travelling along with it. We call these <b>matter waves</b>, or de Broglie waves.<br><br>And the wavelength of that wave should be given by the same relation the photon obeys, with the photon's momentum replaced by the particle's. That is the whole postulate. It was awarded the Nobel Prize five years later, once someone had checked it."
        },
        {
          "t": "think",
          "html": "flick a thin nylon thread and it ripples visibly. give a thick ship's rope the same flick and it barely moves, and whatever ripple it does carry is short and tight. matter waves work the same way round: pile on mass or speed and the wavelength shrinks towards nothing. this one sentence is the answer to the question every student asks here, which is why cricket balls do not diffract around the stumps."
        },
        {
          "t": "def",
          "term": "de Broglie wavelength",
          "html": "The wavelength λ = <i>h</i>/<i>p</i> associated with any particle of momentum <i>p</i>. It depends on <b>momentum and nothing else</b>: not on charge, not on the kind of particle, not on what the particle is made of. A neutron and a proton of equal momentum have identical de Broglie wavelengths even though one is charged and one is not. A stationary particle has <i>p</i> = 0 and no meaningful de Broglie wavelength at all, because the wave is associated with the <b>motion</b>."
        },
        {
          "t": "formula",
          "kicker": "THE DE BROGLIE RELATION",
          "tag": "THE POSTULATE",
          "main": "λ = h/p = h/(mv)",
          "legend": [
            "λ is the de Broglie wavelength, in metres (m).",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s is Planck's constant.",
            "<i>p</i> is the momentum of the particle, in kg m/s.",
            "<i>m</i> is its mass in kilograms (kg) and <i>v</i> its speed in m/s."
          ],
          "note": "Written this way the relation is <b>non-relativistic</b>: <i>p</i> = <i>mv</i> holds only while the speed is well below <i>c</i>, which covers everything in this chapter and every question you will be set. Note what is missing from the right-hand side. There is no charge in it, so no field and no potential enters directly; charge matters only when it is what gives the particle its momentum in the first place."
        },
        {
          "t": "p",
          "html": "Now run the numbers, because that is where the strangeness goes away.<br><br>A cricket ball of mass 0.15 kg hurled at 40 m/s has momentum 6.0 kg m/s, so λ = 6.63 × 10<sup>−34</sup>/6.0 = 1.1 × 10<sup>−34</sup> m. Take a nucleus to be about 10<sup>−14</sup> m across; the ball's wavelength is some 10<sup>20</sup> times smaller than that. There is no slit, no crystal and no obstacle anywhere in the universe small enough to make <b>that</b> wave show itself. The ball is, for every practical purpose, purely a particle.<br><br>Now shrink the object to an electron, mass 9.11 × 10<sup>−31</sup> kg. Tiny mass means tiny momentum, and tiny momentum means a <b>large</b> wavelength, comparable to the spacing between atoms in a crystal, about 10<sup>−10</sup> m. And crystals are nature's ready-made diffraction gratings. That is why electrons visibly diffract and cricket balls do not: not because the wave nature switches off, but because for big objects the wavelength is hopelessly unmeasurable."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "FIGURE · DE BROGLIE WAVELENGTH ACROSS SCALES",
          "chips": ["the everyday world", "the quantum end"],
          "captions": [
            "One rule, marked in powers of ten of the wavelength in metres, because nothing else can hold this range. A cricket ball off a fast bowler sits at 10 to the minus 34. A speck of dust drifting at a millimetre a second sits at 10 to the minus 21, thirteen decades better and still hopeless. The band on the right is the spacing between atoms in a crystal, around 10 to the minus 10, which is the largest ruler nature hands us for free. Between the cricket ball and that ruler lie twenty-four powers of ten of nothing, and that gap is the entire reason nobody noticed matter waves for three hundred years.",
            "Zoom into the right-hand end and the picture changes completely. An electron accelerated through 100 volts has a wavelength of 0.123 nanometres, which lands ON the atomic spacing, not near it. That is not a lucky coincidence, it is why electron diffraction is possible at all and why the Davisson-Germer experiment worked at the very first voltage they tried. A proton through the same 100 volts sits a decade and a half short, because it is 1836 times heavier and the wavelength goes as one over the square root of the mass. And a nucleus, at 10 to the minus 14, sits two and a half decades below even the proton, which is why probing one needs proton energies of tens of MeV rather than the hundred volts here: the wavelength falls only as the square root of the energy, so shrinking it by a factor of three hundred costs a factor of a hundred thousand in energy."
          ],
          "frames": [
            {
              "x": [-36, -8],
              "y": [-1, 1],
              "axisX": "log₁₀(λ / m)",
              "ticksX": { "at": [-35, -30, -25, -20, -15, -10] },
              "intervals": [{ "from": -10.4, "to": -9.6, "soft": true }],
              "points": [
                { "x": -33.96, "y": 0, "label": "cricket ball", "at": "ne" },
                { "x": -21.18, "y": 0, "label": "dust grain", "at": "ne" },
                { "x": -10, "y": 0, "label": "atom spacing", "at": "sw" }
              ]
            },
            {
              "x": [-15, -8],
              "y": [-1, 1],
              "axisX": "log₁₀(λ / m)",
              "ticksX": { "at": [-14, -12, -10] },
              "intervals": [{ "from": -10.4, "to": -9.6, "label": "atom spacing" }],
              "points": [
                { "x": -14, "y": 0, "label": "nucleus", "at": "ne" },
                { "x": -11.54, "y": 0, "label": "p at 100 V", "at": "se" },
                { "x": -9.91, "y": 0, "label": "e− at 100 V", "at": "se" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "notice how little the postulate actually says. it does not say a particle IS a wave, or that it wobbles as it flies. it says one number, the wavelength, is attached to another number, the momentum, by <i>h</i>. everything else in this topic is that one sentence pushed through ordinary algebra, which is why a topic built on a wild idea contains almost no new physics after the first line."
        },
        {
          "t": "p",
          "html": "Two limits are worth stating before the algebra, because they mark where the relation stops meaning anything. First, λ = <i>h</i>/(<i>mv</i>) as written is <b>non-relativistic</b>: for a particle approaching <i>c</i> the momentum is no longer <i>mv</i> and the formula must be rewritten. Nothing in this chapter comes close, so it never bites here.<br><br>Second, the wave is associated with the particle's <b>motion</b>. A stationary particle has <i>p</i> = 0, so the formula returns an infinite wavelength, which is not a physical statement but the model announcing that it has nothing to say. A de Broglie wavelength is a property of a moving thing."
        },
        {
          "t": "formula",
          "kicker": "IN TERMS OF KINETIC ENERGY",
          "tag": "THE FORM MOST QUESTIONS WANT",
          "main": "λ = h / √(2mK)",
          "legend": [
            "λ is the de Broglie wavelength in metres (m) and <i>h</i> = 6.63 × 10<sup>−34</sup> J s.",
            "<i>m</i> is the particle's mass in kilograms (kg).",
            "<i>K</i> is its kinetic energy in <b>joules</b> (J). If you are given eV, multiply by 1.6 × 10<sup>−19</sup> before you substitute."
          ],
          "note": "From <i>K</i> = ½<i>mv</i><sup>2</sup> = <i>p</i><sup>2</sup>/2<i>m</i>, so <i>p</i> = √(2<i>mK</i>). This is the form that answers comparison questions, because it displays the two dependences separately: at fixed kinetic energy λ goes as 1/√<i>m</i>, and at fixed mass λ goes as 1/√<i>K</i>. Note the <b>square roots</b>. Quadrupling the energy halves the wavelength; it does not quarter it."
        },
        {
          "t": "formula",
          "kicker": "FOR AN ACCELERATED CHARGE",
          "tag": "AND THE ELECTRON SHORTCUT",
          "main": "λ = h / √(2mqV),    λ<sub>electron</sub> = 12.27/√V Å",
          "legend": [
            "λ is the de Broglie wavelength, in metres (m) in the first form.",
            "<i>m</i> is the particle's mass in kg, <i>q</i> its charge in coulombs (C), and <i>V</i> the accelerating potential difference in volts (V).",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s.",
            "In the shortcut, <i>V</i> is in <b>volts</b> and the answer comes out in <b>ångström</b>, where 1 Å = 10<sup>−10</sup> m = 0.1 nm. For a proton the same algebra gives 0.286/√<i>V</i> Å."
          ],
          "note": "A charge <i>q</i> falling through <i>V</i> gains kinetic energy <i>K</i> = <i>qV</i>, from Electric Charges and Fields, so this is the previous formula with <i>K</i> replaced. The shortcut is a <b>numerical</b> identity, not a dimensional one: <i>h</i>, <i>m</i><sub>e</sub> and <i>e</i> are all hidden inside the 12.27, and it balances only when <i>V</i> is read in volts and λ in ångström. Substitute SI units into it and you will be out by ten decades."
        },
        {
          "t": "deriv",
          "kicker": "FROM THE PHOTON TO THE ELECTRON SHORTCUT",
          "steps": [
            { "eq": "photon: E = hν and E = pc  ⟹  p = h/λ", "why": "Borrow the photon result from Topic 01. A photon is massless, so its energy and momentum are related by E = pc, and combining that with E = h nu = hc/lambda gives p = h/lambda. For light, wavelength and momentum are tied together by Planck's constant." },
            { "eq": "postulate: the same link holds for matter, λ = h/p", "why": "This is de Broglie's leap and it is a POSTULATE, not a derivation. Nothing in older mechanics implies it. He demanded that nature treat matter and radiation on the same footing, wrote down the same relation with p = mv, and waited to be checked. Everything after this step is algebra." },
            { "eq": "K = p<sup>2</sup>/2m  ⟹  p = √(2mK)  ⟹  λ = h/√(2mK)", "why": "Recast in terms of energy, because energy is what questions give you. This step is ordinary mechanics, not quantum physics: it is just the definition of kinetic energy rearranged." },
            { "eq": "K = qV  ⟹  λ = h/√(2mqV)", "why": "Specialise to a charge accelerated from rest through a potential difference V. It arrives carrying kinetic energy qV, quoted from Electric Charges and Fields. Notice that the charge has now entered, but only through the back door: it decides how much momentum the particle picks up, and never appears in the de Broglie relation itself." },
            { "eq": "λ = 6.63 × 10<sup>−34</sup> / √(2 · 9.11 × 10<sup>−31</sup> · 1.6 × 10<sup>−19</sup> · V) = 1.227 × 10<sup>−9</sup>/√V m", "why": "Substitute the electron's own constants and collect everything that is not V into one number. Under the root: 2 x 9.11 x 10^-31 x 1.6 x 10^-19 = 2.92 x 10^-49, whose root is 5.40 x 10^-25. Dividing h by that gives 1.227 x 10^-9. So lambda = 1.227/sqrt(V) nanometres, or 12.27/sqrt(V) angstrom, and at 100 V that is 0.123 nm. One division replaces a three-line substitution, which under exam time pressure is the whole point." }
          ]
        },
        {
          "t": "protip",
          "html": "for <b>any</b> electron-acceleration problem, go straight to 12.27/√V ångström and do not touch the full formula. 100 V gives 1.23 Å. 400 V gives 0.61 Å, because the square root only halves it. 54 V gives 1.67 Å, which is the Davisson-Germer number and worth knowing by sight. and to go backwards, square: a wavelength of 1.0 Å needs <i>V</i> = (12.27)<sup>2</sup> ≈ 150 V."
        },
        {
          "t": "p",
          "html": "Most exam questions on this topic are comparisons, and they are all one question in disguise: <b>what is being held fixed?</b> Same kinetic energy, same momentum and same speed give three completely different mass dependences, and reading the condition before choosing the proportionality is the entire skill.<br><br>Read the condition first. Then pick the form of the relation that displays it. Then compare."
        },
        {
          "t": "defgrid",
          "title": "The three comparison conditions",
          "tag": "READ THE CONDITION FIRST",
          "rows": [
            { "k": "Same momentum <i>p</i>", "v": "λ = <i>h</i>/<i>p</i>, so the wavelengths are <b>equal</b>. No mass dependence at all. This is the only case with no dependence on anything but <i>p</i>, and it is true even between a photon and an electron." },
            { "k": "Same kinetic energy <i>K</i>", "v": "λ = <i>h</i>/√(2<i>mK</i>), so λ ∝ 1/√<i>m</i>. The <b>heaviest</b> particle has the <b>shortest</b> wavelength. Electron, proton, alpha in decreasing order of λ." },
            { "k": "Same speed <i>v</i>", "v": "λ = <i>h</i>/(<i>mv</i>), so λ ∝ 1/<i>m</i>. Heavier still means shorter, but now it falls off as the first power of the mass rather than its square root." },
            { "k": "Same accelerating <i>V</i>", "v": "λ = <i>h</i>/√(2<i>mqV</i>), so λ ∝ 1/√(<i>mq</i>). Both mass and charge enter, which is why a proton and an alpha particle through the same voltage differ by √8 rather than by √4." }
          ]
        },
        {
          "t": "p",
          "html": "De Broglie's postulate paid a debt nobody had expected it to. Bohr had <b>postulated</b> that an electron in an atom can only orbit at certain angular momenta, <i>mvr</i> = <i>nh</i>/2π, with no reason offered for why nature should care about whole numbers. It fitted the hydrogen spectrum beautifully and explained nothing.<br><br>De Broglie supplied the reason. If the electron carries a wave with it, that wave has to fit around the orbit. Wrap a wave around a closed loop and it must join up smoothly with itself, or it interferes with itself destructively on the next lap and cancels out. Waves fixed on a loop is exactly the standing-wave condition from Waves, and the condition is that the circumference contains a <b>whole number</b> of wavelengths."
        },
        {
          "t": "deriv",
          "kicker": "WHY BOHR'S ORBITS ARE QUANTISED",
          "steps": [
            { "eq": "2πr = nλ,   n = 1, 2, 3, …", "why": "The standing-wave condition on a loop, quoted from Waves. If the circumference is not a whole number of wavelengths, the wave arrives back out of step with itself, the two laps interfere destructively, and after many laps nothing is left. Only whole numbers survive." },
            { "eq": "λ = h/(mv)", "why": "Substitute de Broglie. The electron's own wave has this wavelength, set by its momentum in the orbit and nothing else." },
            { "eq": "2πr = nh/(mv)", "why": "Put the two together. This is now a statement about the orbit's size and the electron's speed, with n a whole number because it counts wavelengths." },
            { "eq": "mvr = nh/2π", "why": "Rearrange, and read what has appeared. This is EXACTLY Bohr's quantisation condition, the one he had to assume. The whole number n is no longer a mystery: it is the number of wavelengths that fit, and angular momentum comes in units of h/2 pi because that is what a resonance condition on a circle looks like. The Bohr model and the hydrogen spectrum belong to the Atoms chapter; this is the one step of it that belongs here." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.7 · THE ELECTRON WAVE ON ITS ORBIT",
          "chips": ["n = 4, it fits", "not a whole number"],
          "captions": [
            "The dashed circle is the orbit and the dot at the centre is the nucleus. The wavy line is the electron's own de Broglie wave, drawn wrapped around the orbit with its crests bulging outward and its troughs pulling inward. Count the crests: there are exactly four, so the circumference holds exactly four wavelengths. The wave comes back round and meets its own beginning perfectly, crest onto crest, so it reinforces itself on every lap and survives indefinitely. That is a stable Bohr orbit, and n = 4 is not a label anyone chose, it is the count.",
            "The same orbit with a wave whose wavelength does not divide the circumference. Follow it round once and it arrives back at the starting angle at the wrong radius, which is the marked gap: the wave has come home out of step with itself. On the next lap it lands somewhere different again, and on the lap after that different again, so crest falls on trough and the whole thing cancels by destructive interference. Nothing survives. That is why only whole numbers of wavelengths are allowed, and it is exactly Bohr's quantisation condition with a reason attached."
          ],
          "frames": [
            {
              "x": [-1.6, 1.6],
              "y": [-1.6, 1.6],
              "aspect": 0.987,
              "axes": "none",
              "curves": [{ "c": "ellipse", "a": 1, "b": 1, "dash": true, "soft": true }],
              "polys": [
                { "close": true, "tone": "ink", "pts": [[1, 0], [1.06, 0.104], [1.099, 0.219], [1.107, 0.336], [1.081, 0.448], [1.02, 0.545], [0.931, 0.622], [0.823, 0.676], [0.707, 0.707], [0.593, 0.723], [0.489, 0.732], [0.397, 0.743], [0.318, 0.767], [0.245, 0.807], [0.172, 0.863], [0.092, 0.93], [0, 1], [-0.104, 1.06], [-0.219, 1.099], [-0.336, 1.107], [-0.448, 1.081], [-0.545, 1.02], [-0.622, 0.931], [-0.676, 0.823], [-0.707, 0.707], [-0.723, 0.593], [-0.732, 0.489], [-0.743, 0.397], [-0.767, 0.318], [-0.807, 0.245], [-0.863, 0.172], [-0.93, 0.092], [-1, 0], [-1.06, -0.104], [-1.099, -0.219], [-1.107, -0.336], [-1.081, -0.448], [-1.02, -0.545], [-0.931, -0.622], [-0.823, -0.676], [-0.707, -0.707], [-0.593, -0.723], [-0.489, -0.732], [-0.397, -0.743], [-0.318, -0.767], [-0.245, -0.807], [-0.172, -0.863], [-0.092, -0.93], [0, -1], [0.104, -1.06], [0.219, -1.099], [0.336, -1.107], [0.448, -1.081], [0.545, -1.02], [0.622, -0.931], [0.676, -0.823], [0.707, -0.707], [0.723, -0.593], [0.732, -0.489], [0.743, -0.397], [0.767, -0.318], [0.807, -0.245], [0.863, -0.172], [0.93, -0.092]], "smooth": true }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "dot", "label": "nucleus" }],
              "labels": [{ "x": 0, "y": -1.35, "text": "4 waves fit exactly" }]
            },
            {
              "x": [-1.6, 1.6],
              "y": [-1.6, 1.6],
              "aspect": 0.987,
              "axes": "none",
              "curves": [{ "c": "ellipse", "a": 1, "b": 1, "dash": true, "soft": true }],
              "polys": [
                { "tone": "ink", "pts": [[1, 0], [1.072, 0.121], [1.111, 0.254], [1.103, 0.386], [1.044, 0.503], [0.943, 0.592], [0.814, 0.649], [0.679, 0.679], [0.554, 0.694], [0.448, 0.713], [0.361, 0.749], [0.284, 0.811], [0.205, 0.896], [0.112, 0.992], [0, 1.077], [-0.127, 1.131], [-0.26, 1.139], [-0.383, 1.095], [-0.484, 1.004], [-0.555, 0.883], [-0.6, 0.752], [-0.629, 0.629], [-0.658, 0.525], [-0.704, 0.442], [-0.773, 0.372], [-0.866, 0.303], [-0.971, 0.222], [-1.069, 0.12], [-1.138, 0], [-1.161, -0.131], [-1.131, -0.258], [-1.053, -0.369], [-0.942, -0.454], [-0.816, -0.513], [-0.697, -0.556], [-0.596, -0.596], [-0.518, -0.649], [-0.456, -0.726], [-0.397, -0.825], [-0.328, -0.938], [-0.239, -1.047], [-0.127, -1.129], [0, -1.168], [0.13, -1.154], [0.249, -1.089], [0.346, -0.988], [0.419, -0.87], [0.475, -0.756], [0.526, -0.66], [0.587, -0.587], [0.669, -0.534], [0.774, -0.487], [0.894, -0.431], [1.012, -0.354], [1.107, -0.253], [1.16, -0.131], [1.162, 0]], "smooth": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "nucleus" },
                { "x": 1.162, "y": 0, "glyph": "cross", "tone": "red", "label": "gap" }
              ],
              "labels": [{ "x": 0, "y": -1.4, "text": "wave misses itself" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "A postulate this bold needs an experiment, and it got one in 1927. Clinton Davisson and Lester Germer were firing electrons at a nickel target in the United States when an accident, a broken vacuum flask, forced them to bake the target and turn it into a single large crystal. When they resumed, the scattered electrons no longer came off smoothly in all directions. They came off in <b>peaks</b>.<br><br>A peak in a scattering pattern is a diffraction maximum, and diffraction is something particles do not do. Waves do."
        },
        {
          "t": "proc",
          "title": "the Davisson-Germer experiment",
          "steps": [
            "<b>Make a beam of known energy.</b> An electron gun, a heated filament with accelerating plates, produces a fine beam of electrons whose kinetic energy is set entirely by the accelerating voltage <i>V</i>.",
            "<b>Fire it at a crystal.</b> The beam strikes a single nickel crystal, whose regularly spaced atomic planes act as a natural diffraction grating with a spacing of about 1 Å, the only ruler fine enough for this wavelength.",
            "<b>Measure the scattered intensity against angle.</b> A movable detector swings around an arc and records how many electrons come off in each direction.",
            "<b>The result.</b> At an accelerating voltage of 54 V, a sharp peak in scattered intensity appeared at a scattering angle of 50°, which is a diffraction maximum: impossible for particles, natural for waves.",
            "<b>The comparison.</b> From the crystal geometry the wavelength producing that peak works out at about 1.65 Å. De Broglie's prediction is λ = 12.27/√54 = 1.67 Å. They agree to better than two per cent, and that agreement is the direct experimental confirmation of the wave nature of matter."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 11.8 · DAVISSON AND GERMER",
          "chips": ["the apparatus", "what they measured"],
          "captions": [
            "An electron gun sends a narrow beam of electrons of known energy down onto a single nickel crystal. Because the crystal is a single crystal rather than a jumble of grains, its atomic planes are regularly spaced and act as a diffraction grating with a spacing of about one ångström. A detector rides on an arc around the target and can be swung to any scattering angle, measured from the incident beam direction. Nothing here is exotic; it is a beam, a target and a movable counter, which is what makes the result so hard to argue with.",
            "The measurement, at an accelerating voltage of 54 volts. Plot the number of scattered electrons against the angle and you do not get a smooth spread. You get a pronounced bump centred on 50 degrees, with the count falling away on both sides. That bump is a diffraction maximum, and particles travelling in straight lines and bouncing off atoms cannot produce one. Working the crystal geometry backwards gives the wavelength that would put a maximum there: about 1.65 ångström. De Broglie's formula, using only the 54 volts, predicts 1.67. The agreement is the confirmation."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [-1, 6],
              "aspect": 0.62,
              "axes": "none",
              "polys": [
                { "pts": [[0.4, 3.4], [2, 3.4], [2, 4.6], [0.4, 4.6]], "close": true, "tone": "ink", "label": "gun" },
                { "pts": [[3.6, -0.9], [6.4, -0.9], [6.4, 0.1], [3.6, 0.1]], "close": true, "fill": "hatch", "tone": "soft", "label": "nickel" }
              ],
              "arrows": [
                { "from": [2.2, 3.3], "to": [4.85, 0.25], "tone": "amber", "label": "e− beam", "at": "start" },
                { "from": [5.15, 0.25], "to": [6.95, 2.22], "tone": "amber", "label": "scattered", "at": "mid" }
              ],
              "arcs": [
                { "at": [5, 0.1], "r": 3, "from": 15, "to": 150, "dash": true, "tone": "soft" },
                { "at": [5, 0.1], "r": 1.15, "from": 47, "to": 131, "label": "angle" }
              ],
              "marks": [{ "x": 7.15, "y": 2.44, "glyph": "square" }],
              "labels": [{ "x": 8.7, "y": 3.6, "text": "detector" }]
            },
            {
              "x": [0, 95],
              "y": [0, 1.3],
              "aspect": 0.72,
              "axisX": "scattering angle (°)",
              "axisY": "scattered intensity",
              "ticksX": { "at": [0, 30, 50, 70, 90] },
              "curves": [{ "c": "pts", "smooth": true, "pts": [[10, 0.3], [15, 0.308], [20, 0.316], [25, 0.328], [30, 0.358], [35, 0.452], [40, 0.663], [45, 0.942], [50, 1.084], [55, 0.958], [60, 0.695], [65, 0.5], [70, 0.422], [75, 0.408], [80, 0.412], [85, 0.42], [90, 0.428]] }],
              "points": [{ "x": 50, "y": 1.084, "label": "50°" }],
              "labels": [{ "x": 22, "y": 1.05, "text": "V = 54 V" }]
            }
          ]
        },
        {
          "t": "def",
          "term": "Why a single crystal, and not a lump of metal",
          "html": "An ordinary piece of nickel is a jumble of tiny crystal grains pointing every which way, so the diffraction maxima from all the different orientations wash out into a smooth spread. A <b>single crystal</b> has one set of atomic planes at one spacing throughout, which is what a diffraction grating requires. Davisson and Germer got theirs by accident: a broken vacuum flask forced them to bake their target, and the baking annealed the polycrystalline nickel into one large crystal."
        },
        {
          "t": "formula",
          "kicker": "HEISENBERG'S UNCERTAINTY PRINCIPLE",
          "tag": "THE PRICE OF BEING A WAVE",
          "main": "Δx · Δp ≥ ℏ/2,   ℏ = h/2π",
          "legend": [
            "Δ<i>x</i> is the uncertainty in the particle's position, in metres (m).",
            "Δ<i>p</i> is the uncertainty in the component of its momentum along the same direction, in kg m/s.",
            "ℏ, read h-bar, is the reduced Planck constant, <i>h</i>/2π = 1.055 × 10<sup>−34</sup> J s."
          ],
          "note": "A direct consequence of matter's wave nature rather than a separate law: a wave confined to a small region cannot have a single sharp wavelength, and wavelength is momentum. NCERT states it in the order-of-magnitude form Δ<i>x</i> Δ<i>p</i> ≈ ℏ, which is what numerical questions use. Confinement therefore costs energy: an electron squeezed into a region 1 Å across cannot sit still, and carries about 1 eV of kinetic energy for that reason alone, which is the order of an atomic binding energy."
        },
        {
          "t": "p",
          "html": "The short wavelength is not only a curiosity; it is a tool, and it is the reason this topic pays for itself outside the exam. An optical microscope cannot resolve anything much smaller than the wavelength of the light it uses, which puts a floor of a few hundred nanometres on it. No amount of better glass gets past that.<br><br>An electron accelerated through a few tens of kilovolts has a de Broglie wavelength of a few picometres, five orders of magnitude shorter than visible light. Focus those electrons with magnetic lenses and you have an <b>electron microscope</b>, which resolves individual atoms. Every image you have seen of a virus or a crystal lattice exists because matter has a wavelength and that wavelength is small."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An electron is accelerated from rest through a potential difference of 100 V. Find its de Broglie wavelength, and comment on the result.",
          "steps": [
            "<b>Use the shortcut, not the full formula.</b> λ = 12.27/√<i>V</i> Å with <i>V</i> = 100.",
            "λ = 12.27/√100 = 12.27/10 = 1.227 Å.",
            "In metres: 1.227 × 10<sup>−10</sup> m, or 0.123 nm.",
            "<b>Comment.</b> That is the same size as the spacing between atoms in a crystal, which is exactly why electron diffraction works and why Davisson and Germer saw a peak at their very first choice of voltage. A wave only diffracts off an obstacle comparable to its own wavelength, and a crystal is the free ruler at this scale."
          ],
          "ans": "λ ≈ 1.23 Å = 0.123 nm, comparable to interatomic spacing"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An electron, a proton and an alpha particle all have the <b>same kinetic energy</b>. Which has the shortest de Broglie wavelength?",
          "steps": [
            "<b>The trap.</b> Students who half-remember λ = <i>h</i>/<i>mv</i> start reasoning about speeds and tie themselves in knots, because at fixed energy the speeds differ too. Use the form that matches the condition.",
            "The condition is fixed <i>K</i>, so use λ = <i>h</i>/√(2<i>mK</i>). With <i>K</i> fixed, λ ∝ 1/√<i>m</i>.",
            "So the <b>heaviest</b> particle has the shortest wavelength. Masses: electron < proton < alpha, and the alpha is about 4 protons, so about 7344 electron masses.",
            "<b>The habit to build.</b> Read the condition, then pick the rule. Same <i>K</i> gives λ ∝ 1/√<i>m</i>; same <i>p</i> gives all wavelengths equal; same <i>v</i> gives λ ∝ 1/<i>m</i>. Three different answers to what looks like one question."
          ],
          "ans": "The alpha particle, because at fixed kinetic energy λ ∝ 1/√<i>m</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A proton and an alpha particle are accelerated from rest through the same potential difference <i>V</i>. Find the ratio of their de Broglie wavelengths. Take <i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub> and <i>q</i><sub>α</sub> = 2<i>e</i>.",
          "steps": [
            "<b>Both mass and charge matter here</b>, because the accelerating voltage is what is fixed, not the energy. Use λ = <i>h</i>/√(2<i>mqV</i>), so at fixed <i>V</i>, λ ∝ 1/√(<i>mq</i>).",
            "λ<sub>p</sub>/λ<sub>α</sub> = √(<i>m</i><sub>α</sub><i>q</i><sub>α</sub> / <i>m</i><sub>p</sub><i>q</i><sub>p</sub>) = √((4<i>m</i><sub>p</sub>)(2<i>e</i>)/(<i>m</i><sub>p</sub>)(<i>e</i>)).",
            "= √8 = 2√2 ≈ 2.83.",
            "<b>Check the factor.</b> If you answered 2, you used only the mass and forgot that the alpha carries twice the charge, so it also picks up twice the energy from the same voltage. Both effects shorten the alpha's wavelength."
          ],
          "ans": "λ<sub>p</sub> : λ<sub>α</sub> = 2√2 : 1 ≈ 2.83 : 1"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A photon and an electron have the same wavelength, λ = 1.0 Å. Find the ratio of (a) their momenta and (b) their energies.",
          "steps": [
            "<b>(a)</b> Both obey <i>p</i> = <i>h</i>/λ, the photon by Topic 01 and the electron by de Broglie. Same λ therefore means same <i>p</i>, exactly. The ratio is <b>1 : 1</b>, and it would be 1 : 1 for any pair of objects whatsoever.",
            "<b>(b) The energies are not the same, because the two get their energy differently.</b> Photon: <i>E</i> = <i>pc</i> = <i>hc</i>/λ. Electron, non-relativistic: <i>E</i> = <i>p</i><sup>2</sup>/2<i>m</i> = <i>h</i><sup>2</sup>/(2<i>m</i>λ<sup>2</sup>).",
            "Ratio: <i>E</i><sub>ph</sub>/<i>E</i><sub>e</sub> = (<i>hc</i>/λ) ÷ (<i>h</i><sup>2</sup>/2<i>m</i>λ<sup>2</sup>) = 2<i>mc</i>λ/<i>h</i>.",
            "Substitute: 2(9.11 × 10<sup>−31</sup>)(3 × 10<sup>8</sup>)(1.0 × 10<sup>−10</sup>)/(6.63 × 10<sup>−34</sup>) = 5.47 × 10<sup>−32</sup>/6.63 × 10<sup>−34</sup> ≈ <b>82</b>. The photon spends all its energy as <i>pc</i>; the electron's is the much smaller <i>p</i><sup>2</sup>/2<i>m</i>. Same momentum, very different energy ledgers."
          ],
          "ans": "(a) 1 : 1   (b) the photon carries about 82 times the electron's energy"
        },
        {
          "t": "mcq",
          "q": "The de Broglie wavelength of a particle depends on:",
          "opts": [
            { "label": "its charge only", "nudge": "There is no <i>q</i> in λ = <i>h</i>/<i>p</i>. A neutral neutron and a charged proton of equal momentum have identical wavelengths." },
            { "label": "its momentum only" },
            { "label": "its charge and its mass", "nudge": "Both enter only <b>indirectly</b>, when they decide how much momentum the particle picks up in a field. Fix the momentum and neither matters at all." },
            { "label": "its temperature", "nudge": "This confuses the de Broglie wavelength of one particle with the thermal de Broglie wavelength of a gas, which is a different and out-of-scope idea." }
          ],
          "correct": 1,
          "solution": "Straight from λ = <i>h</i>/<i>p</i>. Charge enters only when a field is doing the accelerating, because then it sets the momentum; it never enters the relation itself. This is why the accelerated-charge formula has <i>q</i> in it and the basic relation does not."
        },
        {
          "t": "mcq",
          "q": "Two particles of different masses have the same momentum. Their de Broglie wavelengths are:",
          "opts": [
            { "label": "in the ratio of their masses", "nudge": "That is the answer to a <b>same speed</b> question smuggled into a same-momentum one. Read the condition before choosing the rule." },
            { "label": "in the inverse ratio of their masses", "nudge": "Also a same-speed answer, and with the direction flipped as well. Neither mass appears anywhere once the momentum is fixed." },
            { "label": "equal" },
            { "label": "in the ratio of the square roots of their masses", "nudge": "That is the answer to a <b>same kinetic energy</b> question. Three conditions, three different answers, and the examiner is testing which one you read." }
          ],
          "correct": 2,
          "solution": "λ = <i>h</i>/<i>p</i> contains no mass at all, so equal momentum means equal wavelength, whatever the two particles are. This is the one comparison case with no mass dependence, which is exactly why it is set so often."
        },
        {
          "t": "mcq",
          "q": "If the kinetic energy of an electron is increased to four times its original value, its de Broglie wavelength becomes:",
          "opts": [
            { "label": "one quarter of the original", "nudge": "This drops the square root and uses λ ∝ 1/<i>K</i>. The single most common slip in this topic." },
            { "label": "one half of the original" },
            { "label": "double the original", "nudge": "Right size, wrong direction. More energy means more momentum, and more momentum means a <b>shorter</b> wave, never a longer one." },
            { "label": "four times the original", "nudge": "Wrong direction and no square root, both at once. Check the direction physically before you compute: faster particle, shorter wave." }
          ],
          "correct": 1,
          "solution": "λ = <i>h</i>/√(2<i>mK</i>), so λ ∝ 1/√<i>K</i>. Quadrupling <i>K</i> multiplies λ by 1/√4 = 1/2. The same square root is why doubling the accelerating voltage shrinks the wavelength by √2 and not by 2."
        },
        {
          "t": "mcq",
          "q": "The Davisson-Germer experiment provided direct evidence for:",
          "opts": [
            { "label": "the quantisation of electric charge", "nudge": "That is Millikan's oil-drop experiment. Millikan appears in this chapter too, but for measuring <i>h</i> from the stopping-potential slope." },
            { "label": "the particle nature of light", "nudge": "That is the photoelectric effect, Topics 02 and 03. This experiment runs the duality the other way round." },
            { "label": "the wave nature of electrons" },
            { "label": "the existence of the atomic nucleus", "nudge": "That is Rutherford's alpha-scattering experiment. All four options are famous experiments, and the trap is worth exactly one careless second." }
          ],
          "correct": 2,
          "solution": "Diffraction maxima in the scattered electron intensity confirmed de Broglie's matter-wave hypothesis, and the wavelength read off the crystal geometry, about 1.65 Å, matched the predicted 12.27/√54 = 1.67 Å. Particles do not diffract; waves do."
        },
        {
          "t": "practice",
          "items": [
            { "q": "Find the de Broglie wavelength of an electron accelerated through 400 V.", "a": "λ = 12.27/√400 = 12.27/20 = <b>0.61 Å</b>. Note that four times the voltage halved the wavelength from the 100 V case, not quartered it: the square root is doing the work." },
            { "q": "Calculate the de Broglie wavelength of a 0.15 kg cricket ball moving at 30 m/s, and comment on detectability.", "a": "<i>p</i> = 0.15 × 30 = 4.5 kg m/s, so λ = 6.63 × 10<sup>−34</sup>/4.5 = <b>1.5 × 10<sup>−34</sup> m</b>. Twenty decades smaller than a nucleus, so there is no object in the universe it could diffract around. Undetectable in principle, not merely in practice." },
            { "q": "An electron and a proton have the same kinetic energy. Find the ratio λ<sub>e</sub> : λ<sub>p</sub>, taking <i>m</i><sub>p</sub>/<i>m</i><sub>e</sub> = 1836.", "a": "At fixed <i>K</i>, λ ∝ 1/√<i>m</i>, so λ<sub>e</sub>/λ<sub>p</sub> = √(<i>m</i><sub>p</sub>/<i>m</i><sub>e</sub>) = √1836 = <b>42.8 : 1</b>. The lighter particle has the longer wave." },
            { "q": "Through what accelerating potential must an electron pass to have a de Broglie wavelength of 1.0 Å?", "a": "Square the shortcut: <i>V</i> = (12.27/λ in Å)<sup>2</sup> = (12.27/1.0)<sup>2</sup> = <b>150 V</b>. Worth remembering as a landmark alongside the 1.23 Å at 100 V." },
            { "q": "In the Davisson-Germer experiment the electrons were accelerated through 54 V. Compute their de Broglie wavelength.", "a": "λ = 12.27/√54 = 12.27/7.35 = <b>1.67 Å</b>, against the 1.65 Å read off the crystal geometry. A two per cent agreement between a formula postulated on symmetry grounds and a measurement, which is what won the argument." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Ignoring the comparison condition.</b> Same kinetic energy, same momentum and same speed give λ ∝ 1/√<i>m</i>, no mass dependence at all, and λ ∝ 1/<i>m</i> respectively. Three different answers to what looks like one question, and the examiner is testing whether you read which quantity is held fixed.",
            "<b>Dropping the square root.</b> λ ∝ 1/√<i>K</i> and λ ∝ 1/√<i>V</i>, never 1/<i>K</i> or 1/<i>V</i>. Doubling the accelerating voltage shrinks the wavelength by √2, and this single slip is the most common way marks are lost here.",
            "<b>Thinking charge changes the wavelength directly.</b> λ = <i>h</i>/<i>p</i> has no <i>q</i> in it. Charge only matters when it determines how much momentum a particle picks up in a field, which is why <i>q</i> appears in the accelerated-charge formula and nowhere else.",
            "<b>Putting eV into a formula that wants joules.</b> In λ = <i>h</i>/√(2<i>mK</i>), <i>K</i> must be in joules. Convert first by multiplying by 1.6 × 10<sup>−19</sup>, or sidestep the issue entirely with 12.27/√<i>V</i> Å, where <i>V</i> is already in volts.",
            "<b>Mixing ångström, nanometres and metres.</b> 1 Å = 10<sup>−10</sup> m = 0.1 nm. The electron shortcut returns ångström, the photon shortcut wants nanometres, and SI answers want metres. Write the unit on every line."
          ]
        },
        {
          "t": "protip",
          "html": "keep three landmark wavelengths in your head and most questions become a one-line comparison: an electron at 100 V is 1.23 Å, at 54 V it is 1.67 Å, and a proton at 100 V is 0.029 Å. anything else is one of these scaled by a square root. and if an answer ever comes out near 10<sup>−34</sup> m, you are holding a macroscopic object and the correct comment is that nothing in the universe could ever detect it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "λ = <i>h</i>/<i>p</i> = <i>h</i>/(<i>mv</i>)", "note": "the postulate; no charge and no particle identity in it" },
            { "f": "λ = <i>h</i>/√(2<i>mK</i>) = <i>h</i>/√(2<i>mqV</i>)", "note": "the two forms questions actually hand you" },
            { "f": "λ<sub>electron</sub> = 12.27/√<i>V</i> Å", "note": "V in volts, answer in ångström; proton is 0.286/√V Å" },
            { "f": "same <i>p</i> ⟹ same λ", "note": "no mass dependence at all, even between a photon and an electron" },
            { "f": "same <i>K</i> ⟹ λ ∝ 1/√<i>m</i>", "note": "heavier means shorter; same v gives λ ∝ 1/m instead" },
            { "f": "2π<i>r</i> = <i>n</i>λ ⟹ <i>mvr</i> = <i>nh</i>/2π", "note": "the standing wave on a loop IS Bohr's quantisation" },
            { "f": "54 V, peak at 50°, λ = 1.67 Å", "note": "Davisson-Germer, against 1.65 Å from crystal geometry" },
            { "f": "Δ<i>x</i> Δ<i>p</i> ≥ ℏ/2, ℏ = <i>h</i>/2π", "note": "confinement costs momentum, and therefore energy" }
          ],
          "aids": [
            "\"heavier and faster means shorter wave\"",
            "\"read the condition, then pick the rule\" before any comparison",
            "\"twelve point two seven over root vee, in angstrom\""
          ]
        }
      ]
    }
  ]
};

export default phy12DualNature;
