/**
 * Chapter 10 · Thermal Properties of Matter. Physics, Class 11.
 *
 * Restructured from pages 666 to 728 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-02-motion-straight-line.ts.
 *
 * SIX TOPICS, BECAUSE THE SOURCE HAS SIX SUBTOPICS. Part I (pages 667 to 701)
 * carries Subtopics 01 to 04; Part II (pages 702 to 716), printed as a separate
 * "Coverage Completion" document, carries Subtopics 05 and 06 and says in its
 * own words that without them "a student cannot claim to know everything" about
 * this chapter. They are full subtopics on the same eight-section template, not
 * appendices, so they are Topics 05 and 06 here. Nothing was merged or split.
 *
 * The Round 2 Addendum (pages 717 to 728: A composite and constrained thermal
 * stress, B conduction in cylindrical and spherical shells, C exact radiation
 * cooling beyond Newton's law, D variable specific heat and water equivalent)
 * is explicitly not a topic. Every line drawn from it is confined to a
 * `protip`, a `mistakes` item, the hardest `ex` in its group, or one closing
 * `practice` item: A into Topic 01 (the JEE Advanced composite-rod example and
 * the bimetallic-strip protip), B into Topic 03 (the pipe and shell protip, the
 * slab-formula mistake, the closing practice item), C into Topic 04 (the
 * deep-space cooling practice item and the "Newton overestimates the time"
 * mistake), D into Topic 02 (the variable-specific-heat protip and the water
 * equivalent mistake). No `formula`, `defgrid`, `deriv` or `proc` block below
 * is sourced from the addendum. Nothing from the addendum reaches Topic 05 or
 * Topic 06, because the addendum does not extend those subtopics.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five pages read in full). The
 * errata covers Chapters 1, 2, 4, 6, 8, 9 and 11. NO ENTRY TOUCHES CHAPTER 10.
 * The closest neighbours are the Chapter 11 (Thermodynamics) entries, one on a
 * molar-heat-capacity arithmetic slip run with the wrong number of moles and
 * one on CO2 being misdescribed as a bent molecule; neither quantity is used
 * here, and this chapter's own CO2 material (Topic 06, the dry-ice phase
 * argument) concerns its triple-point pressure, not its geometry, so the
 * Chapter 11 defect cannot leak in.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key across all six subtopics was recomputed independently. Four defects
 * found, three of them real physics errors:
 *
 *   1. Subtopic 01, Practice 5 (page 673). Copper (alpha 1.7e-5) and steel
 *      (alpha 1.2e-5) joined into a 1.00 m rod at 20 degC expand 0.78 mm on
 *      heating to 70 degC. PRINTED ANSWER: copper 0.60 m, steel 0.40 m.
 *      CORRECT: copper 0.72 m, steel 0.28 m. Working: with L1 + L2 = 1.00 and
 *      dT = 50, 50(1.7e-5 L1 + 1.2e-5 (1 - L1)) = 7.8e-4, so 0.5e-5 L1 =
 *      1.56e-5 - 1.2e-5 = 0.36e-5 and L1 = 0.72 m. Check: 0.72(1.7e-5) +
 *      0.28(1.2e-5) = 1.56e-5, times 50 = 0.78 mm, exactly as stated. The
 *      printed 0.60/0.40 split gives 1.50e-5 times 50 = 0.75 mm, not 0.78 mm.
 *      Topic 01's Practice 5 below carries the corrected lengths.
 *   2. Addendum C, Example C.1 (page 723), the exact-cooling integral. The
 *      printed partial-fraction line 1/(T^4 - T0^4) = (1/2T0^3)[1/(T - T0) -
 *      1/(T + T0)] - (1/T0^3)(T0/(T^2 + T0^2)) evaluates to 2/(T^4 - T0^4),
 *      not 1/(T^4 - T0^4): every term is twice too big. Working: the first
 *      bracket is (1/2T0^3)(2T0/(T^2 - T0^2)) = 1/(T0^2 (T^2 - T0^2)); the
 *      second is 1/(T0^2 (T^2 + T0^2)); their difference is (1/T0^2)(2T0^2) /
 *      (T^4 - T0^4) = 2/(T^4 - T0^4). The correct decomposition carries
 *      1/(4T0^3) and 1/(2T0^3), so the exact cooling time is t = mc /
 *      (4 e sigma A T0^3) times the printed bracket, HALF the printed
 *      prefactor. For the printed copper sphere (500 K to 400 K, surroundings
 *      300 K, mc/(e sigma A) = 5.07e11 s K^3) the prefactor is 5.07e11 /
 *      (4 x 2.7e7) = 4694 s, the bracket is ln(1.75) - 2[atan(5/3) -
 *      atan(4/3)] = 0.5596 - 0.2062 = 0.3534, and t = 1659 s (27.7 min), not
 *      the printed 3318 s (55.3 min).
 *   3. Same example, the Newton comparison. PRINTED: k = 4 e sigma A T0^3 /
 *      (mc) = 4.27e-4 per s. CORRECT: 4(0.8)(5.67e-8)(5.027e-3)(2.7e7) /
 *      115.6 = 2.13e-4 per s, exactly half the printed value, so 1/k = 4694 s
 *      and the Newton estimate is 4694 ln 2 = 3254 s (54.2 min), not the
 *      printed 1623 s (27.0 min). CONSEQUENCE: the printed conclusion, that
 *      "Newton's law underestimates time by ~50%", is backwards. Because
 *      T^4 - T0^4 is convex, it exceeds its own tangent 4T0^3 (T - T0) for
 *      every T above T0, so the true body always cools FASTER than Newton
 *      predicts and the true time is always SHORTER: 1659 s exact against
 *      3254 s from Newton, an overestimate of about 96%. Topic 04's `mistakes`
 *      item below states the direction the corrected arithmetic gives, and its
 *      closing practice item uses the addendum's clean T0 = 0 K special case
 *      (t = mc/(3 e sigma A)(1/T2^3 - 1/T1^3) = 2058 s), which is unaffected
 *      by the defect and which I recomputed and confirmed.
 *   4. Addendum B, Practice B4 (page 727). Hollow sphere r1 = 5 cm, r2 = 10 cm,
 *      K = 10 W/m K. PRINTED: R1 = 0.05/0.0628 = 0.796 K/W, H = 213.5 W.
 *      CORRECT: the denominator 4 pi K r1 r2 = 4 pi (10)(0.05)(0.10) = 0.6283,
 *      not 0.0628, because K = 10 was dropped, so R1 = 0.0796 K/W and H =
 *      170/0.0796 = 2136 W. The knock-on values (new H 160.2 W, interface
 *      72.5 degC) become 493 W and 161 degC. Not used anywhere below; found
 *      while verifying the spherical-shell resistance quoted in Topic 03's
 *      protip, and recorded because it is real.
 *
 *   Everything else checks out: all 24 worked examples, all 30 practice
 *   answers and all 24 MCQ keys across the six subtopics were recomputed and
 *   agree with the source, as did Addendum examples A.1, A.2, B.1, B.2, C.2,
 *   D.1, D.2 and practice items A1, A2, A3, B5, B6, C7, C8, D10, D11, D12.
 *
 *   One structural, non-physics defect, recorded but not counted above: every
 *   "Crack the MCQ" question in Part II (Subtopics 05 and 06, eight questions)
 *   prints its third option with the label "(b)" instead of "(c)", so two
 *   options share a label and no "(c)" exists for the answer key to point at,
 *   even though the key reads "Correct: (c)". This is the same class of defect
 *   the errata records for Chapter 4 and Chapter 9 but does not record for
 *   Chapter 10. Immaterial here: every MCQ below is authored fresh with four
 *   distinct options and a nudge on each wrong one, so it cannot propagate.
 *
 *   One convention flag, not an error: the source prints L_f (ice) as
 *   3.36e5 J/kg. 80 cal/g times 4.186 J/cal is 3.35e5 J/kg, and NCERT prints
 *   3.33e5, so textbook values genuinely spread over 3.33 to 3.36. The
 *   defgrid in Topic 02 gives 3.34e5 J/kg as the SI value, names the spread,
 *   and tells the student to use whatever value the question supplies; the
 *   pond and ice-melting numericals below therefore keep the source's own
 *   3.36e5, because their problem statements hand it over. c_water = 4186
 *   J/kg K and L_v = 2.26e6 J/kg match the standard values exactly.
 *
 * SOURCE DAMAGE. This range is damaged in three different dialects, because
 * Part I, Part II and the Addendum come from three different production runs.
 * Every passage below was re-authored from context, never transcribed:
 *
 *   - PART I (pages 667 to 701). Greek letters did NOT vanish; they arrived as
 *     Mathematical Alphanumeric codepoints in U+1D400 to U+1D7FF, which the
 *     app's faces cannot draw and the validator rejects as tofu. So alpha,
 *     beta, gamma, Delta, sigma, rho, lambda and theta were all retyped as
 *     ordinary characters here, and every one had to be identified from
 *     context first, which is exactly the exposure the brief warns about:
 *     three coefficients that all look alike in a damaged stream, where
 *     beta = 2 alpha and gamma = 3 alpha and swapping any two changes the
 *     physics. Each occurrence was cross-checked against the relation the
 *     surrounding text states (page 669's "beta = 2 alpha, gamma = 3 alpha,
 *     alpha : beta : gamma = 1 : 2 : 3", page 674's cheat-sheet repeat, and
 *     page 673's Q2) and against the geometry of the derivation on pages 669
 *     to 670, which fixes the 1, 2, 3 as the powers to which a length is
 *     raised for a line, an area and a volume. All three statements agree;
 *     nothing in this chapter needed the relation repaired, only re-typed.
 *   - PART I, three glyphs die on extraction and reappear as ASCII garbage:
 *     the multiplication sign extracts as the token "\nN" (47 occurrences,
 *     e.g. page 670's "1.2 \nN 10 -5" is 1.2 x 10^-5), the minus sign as
 *     "\n7" (27 occurrences, e.g. page 670's "48 \n7 18 = 30" is 48 - 18 =
 *     30, and page 691's "100 \n7 0" is 100 - 0), and the ratio colon as
 *     "\nC" (page 673's "1 \nC 2 \nC 3" is 1 : 2 : 3). One closing bracket
 *     also extracts as "\tF" (page 691, the pond integral's
 *     "[(0.06)^2 \n7 (0.04)^2 \tF"). Same family as the brief's named
 *     Greek-letter loss, different glyphs.
 *   - PART II (pages 702 to 716) is a different pipeline and a worse one. Here
 *     the Greek DOES vanish into placeholders: alpha extracts as the token
 *     "♮015" (six occurrences, page 704's "♮015 gas = 1/273.15" is
 *     the ideal-gas expansion coefficient alpha_gas = 3.66e-3 per degC, and
 *     page 703's "two metals with different ♮015" is the bimetallic
 *     strip's two linear expansion coefficients), and rho as "♮032"
 *     (page 713's ice and water densities). Delta arrives as the curly-quote
 *     token "“001". Punctuation is octal-escaped throughout: \050 and
 *     \051 are the parentheses, \026 the dash, \210 the bullet, \034 and \036
 *     the fi and ffi ligatures, \020 and \021 the quotation marks. And the
 *     mathematical operators come through as private-use runs: the minus sign
 *     as a three-character run, the multiplication sign, the degree sign, the
 *     approximately-equal sign and the implication arrow each as their own.
 *     Page 703's "0 ∩'∞̸ C" is 0 degC; page 704's
 *     "∩'''273.15" is -273.15. Every number in Topics 05 and 06 below
 *     was rebuilt from those runs and then re-derived independently.
 *   - PART II also drops the Fahrenheit and Reaumur accents and the phase
 *     arrows: page 709's "solid ∠⪕⪖⋞ liquid" is the
 *     two-way equilibrium arrow between solid and liquid.
 *   - Superscripts and subscripts land on their own lines throughout all three
 *     parts, so every exponent is broken. This chapter is unusually exposed:
 *     the expansion coefficients run to 10^-5 per K, the Stefan constant is
 *     5.67 x 10^-8, Wien's constant 2.9 x 10^-3, the conductivity dimensions
 *     M L T^-3 Theta^-1, and the latent heats 3.36 x 10^5 and 2.26 x 10^6.
 *     Recomputing every worked example (see CORRECTIONS above) was the check
 *     that these were re-authored correctly, and it is what caught the one
 *     real slip in Practice 5 of Subtopic 01.
 *   - Inter-word spaces vanish at tight kerning, pervasively. Confirmed
 *     instances in passages actually used below: "thesameamount" (page 676),
 *     "hisdistance"-style collisions such as "goes somewhere invisible"
 *     rendered as "notrise" (page 677), "theoverflowuses" (page 674),
 *     "thecalorimeter itself participates" as "forget:the calorimeter"
 *     (page 676), "risingonly" style breaks in "the metalmoves outward"
 *     (page 673), "bulkphenomenon" and "anytemperature" (page 710),
 *     "beforetaking the fourth power" (page 698), "allthe ice melts andallthe
 *     steam condenses" (page 681), and "aboveits triple-point pressure"
 *     (page 713).
 *   - No ASCII-shifted heading run (the "+29" pattern that turns AddendumA
 *     into $GGHQGXP$) appears anywhere in pages 666 to 728; the Addendum's own
 *     headings extract cleanly. That pattern was searched for and is absent
 *     from this range.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T Theta. Heat and
 * energy are [M L2 T-2]; a temperature and a temperature difference are both
 * [Theta].
 *
 *   TOPIC 01
 *   - F = (9/5)C + 32 and K = C + 273.15: [Theta] on both sides; the 32 and
 *     273.15 are offsets carrying the units of their own degree, which is why
 *     they cancel out of a difference and must not be added to one.
 *   - Q = m c dT: [M L2 T-2] = [M][L2 T-2 Theta-1][Theta]. Correct.
 *   - dL = alpha L0 dT: [L] = [Theta-1][L][Theta]. Correct.
 *   - dA = beta A0 dT: [L2] = [Theta-1][L2][Theta]. Correct.
 *   - dV = gamma V0 dT: [L3] = [Theta-1][L3][Theta]. Correct.
 *   - beta = 2 alpha and gamma = 3 alpha: [Theta-1] throughout, and the 2 and
 *     3 are pure numbers, so the relation is dimensionally silent. That is
 *     exactly why dimensions cannot police this one and the derivation must.
 *   - rho = rho0 / (1 + gamma dT): gamma dT is dimensionless, so [M L-3] on
 *     both sides. Correct.
 *   - sigma = Y alpha dT: [M L-1 T-2] = [M L-1 T-2][Theta-1][Theta]. Correct,
 *     and note it carries no L of its own, which is the length-independence
 *     the examples exploit.
 *   - R = 2d / ((alpha2 - alpha1) dT), the bimetallic radius in the protip:
 *     [L]/([Theta-1][Theta]) = [L]. Correct.
 *   TOPIC 02
 *   - Q = m L: [M L2 T-2] = [M][L2 T-2]. Correct.
 *   - C = m c: [M L2 T-2 Theta-1] = [M][L2 T-2 Theta-1]. Correct.
 *   - C_molar = M c: energy per mole per kelvin, [M L2 T-2 Theta-1 N-1] once
 *     the mole is carried as its own base quantity. Correct.
 *   - w = m c / c_water: a ratio of two specific heats is dimensionless, so
 *     [M]. Correct, and it is why a water equivalent is quoted in grams.
 *   - sum Q_lost = sum Q_gained: [M L2 T-2] on both sides. Correct.
 *   - Q = m [c0 dT + (beta/2)(T2^2 - T1^2)], the variable-c protip: for the
 *     two terms to add, beta carries [L2 T-2 Theta-2], and the product
 *     [Theta-2][Theta2] restores [L2 T-2]. Correct.
 *   TOPIC 03
 *   - H = K A dT / L: [M L2 T-3] = [M L T-3 Theta-1][L2][Theta]/[L]. Correct,
 *     and [M L2 T-3] is the watt.
 *   - temperature gradient (T1 - T2)/L: [Theta L-1], K per metre. Correct.
 *   - R = L/(K A): [L]/([M L T-3 Theta-1][L2]) = [M-1 L-2 T3 Theta], and then
 *     H = dT/R = [Theta]/[M-1 L-2 T3 Theta] = [M L2 T-3], the watt again.
 *     Correct, and the two routes to the watt agreeing is the check that the
 *     electrical analogy is dimensionally honest rather than merely pretty.
 *   - T2 = (K1 T1 + K2 T3)/(K1 + K2): a weighted mean of temperatures, so
 *     [Theta]. Correct.
 *   - t = rho L_f (x2^2 - x1^2) / (2 K theta): numerator [M L-3][L2 T-2][L2] =
 *     [M L T-2]; denominator [M L T-3 Theta-1][Theta] = [M L T-3]; ratio [T].
 *     Correct.
 *   - R_cyl = ln(r2/r1)/(2 pi K L) in the protip: the logarithm's argument is
 *     a ratio of lengths and so dimensionless, leaving 1/([M L T-3 Theta-1][L])
 *     = [M-1 L-2 T3 Theta], the same as a slab's R. Correct.
 *   - R_sph = (r2 - r1)/(4 pi K r1 r2) in the protip: [L]/([M L T-3 Theta-1]
 *     [L2]) = [M-1 L-2 T3 Theta]. Correct, same units again.
 *   TOPIC 04
 *   - P = e sigma A T^4: [M L2 T-3] = [M T-3 Theta-4][L2][Theta4]. Correct,
 *     with e dimensionless.
 *   - E = sigma T^4, emissive power: [M T-3], watts per square metre. Correct.
 *   - lambda_m T = b: [L][Theta] = [L Theta]. Correct.
 *   - -dT/dt = k (T - T0): [Theta T-1] = [k][Theta], so k is [T-1], a pure
 *     inverse time. Correct.
 *   - k = 4 e sigma A T0^3 / (m c): [M T-3 Theta-4][L2][Theta3] /
 *     ([M][L2 T-2 Theta-1]) = [M L2 T-3 Theta-1]/[M L2 T-2 Theta-1] = [T-1].
 *     Correct, and it agrees with the line above, which is the check that the
 *     derivation's k is the same k the law uses.
 *   - t = mc/(3 e sigma A) (1/T2^3 - 1/T1^3), the deep-space practice item:
 *     [M L2 T-2 Theta-1]/[M L2 T-3 Theta-4] = [T Theta3], times [Theta-3] =
 *     [T]. Correct.
 *   TOPIC 05
 *   - t = (Xt - X0)/(X100 - X0) x 100: X is any thermometric property and its
 *     dimensions cancel in the ratio, leaving a pure number read as degC.
 *     Correct, and it is why the same formula serves a length, a pressure and
 *     a resistance.
 *   - T = 273.16 (P/P_tr): [Theta], the pressure ratio being dimensionless.
 *     Correct.
 *   - P V = n R T: [M L-1 T-2][L3] = [M L2 T-2] on the left; on the right
 *     [N][M L2 T-2 Theta-1 N-1][Theta] = [M L2 T-2]. Correct, with
 *     R = 8.314 J/mol K.
 *   - P1 V1 / T1 = P2 V2 / T2: [M L2 T-2 Theta-1] on both sides. Correct.
 *   - alpha_gas = 1/273.15 per degC: [Theta-1], the same dimensions as a
 *     solid's alpha, which is the point of comparing them.
 *   TOPIC 06
 *   - Q = m L, restated: [M L2 T-2]. Correct (counted once, under Topic 02).
 *   - dP/dT = L/(T dV): left side [M L-1 T-2 Theta-1]; right side, with dV the
 *     SPECIFIC volume change [L3 M-1], is [L2 T-2]/([Theta][L3 M-1]) =
 *     [M L-1 T-2 Theta-1]. Correct, and it is the check that fixes which
 *     volume the relation wants: use a bulk volume in cubic metres and the
 *     two sides differ by [M], which is how a student catches the slip.
 *
 *   31 formula lines checked, 31 dimensionally consistent. Two carry a caveat
 *   stated in the chapter itself rather than an error: beta = 2 alpha and
 *   gamma = 3 alpha are dimensionally silent and must be settled by geometry,
 *   and the Clausius-Clapeyron relation needs a specific volume, not a bulk
 *   one.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. c_water = 4186 J/kg K, L_f =
 * 3.34e5 J/kg and L_v = 2.26e6 J/kg are the values the chapter teaches, and
 * every calorimetry answer below was checked against them (see the convention
 * flag above for the source's 3.36e5). No final mixture temperature falls
 * outside the range its coldest and hottest ingredient bracket; the Topic 02
 * `proc` makes that the closing sanity check. No body cools below its
 * surroundings: Newton's law gives -dT/dt = k(T - T0), so the cooling rate goes
 * to zero as the excess goes to zero and the curve flattens ONTO the ambient
 * line asymptotically rather than crossing it, which is drawn as the dashed
 * asymptote in Figure 10.8, stated in Topic 04's `def`, and used as the reason
 * the second equal drop in the worked example takes 8.3 minutes against the
 * first one's 5. Other limiting cases used pedagogically: gamma dT is of order
 * 1e-3 for a 100 K rise, which is what licenses dropping its square and cube
 * in Topic 01's derivation; dT/T0 much less than 1 is what licenses the
 * first-order binomial step in Topic 04's derivation, and the chapter says so
 * in the derivation itself rather than after it; r2 tending to infinity
 * collapses the spherical-shell resistance to 1/(4 pi K r1), quoted in Topic
 * 03's protip; and Topic 05's absolute zero is reached only as an
 * extrapolation of P to zero, never as an attained state.
 *
 * SEAMS: what is quoted as already known, and from which file.
 *   - From phy-11-02-motion-straight-line.ts, Topic 05 ("Motion with Variable
 *     Acceleration"): separating variables and integrating a first-order
 *     differential equation is treated as a tool the student already owns.
 *     Topic 03's freezing-pond example writes x dx = (K theta / rho L_f) dt
 *     and integrates without re-teaching separation, and Topic 04's derivation
 *     of Newton's law leaves its differential equation unintegrated for the
 *     same reason: the practical average-temperature form is what exams want.
 *     That file's own `think` block introduces integration as the power rule
 *     run backward, so this chapter does not introduce it again.
 *   - From phy-11-02-motion-straight-line.ts, Topic 01: the derivative as the
 *     limit of a difference quotient. Topic 03's Fourier's law is stated as a
 *     rate dQ/dt and Topic 04's cooling law as dT/dt with no re-derivation.
 *   - Young's modulus and the definition of stress and strain are NOT in
 *     either physics chapter written so far; they belong to Chapter 8,
 *     Mechanical Properties of Solids, which is unwritten. Topic 01's thermal
 *     stress material therefore states stress = Y x strain in one line inside
 *     the `formula` legend rather than assuming it, and names the chapter it
 *     comes from, so the Topic 01 examples stand alone.
 *   - The kinetic-theory reading of temperature (average molecular kinetic
 *     energy) is Chapter 12's, also unwritten. Topic 01 uses "how energetically
 *     the molecules are jiggling, on average" as an intuition and explicitly
 *     does not lean on the equipartition result.
 *
 * ELEVEN `diagram` blocks: nine `plot` and one `flow` and one more `plot`,
 * covering all six named source figures plus five designed here. The six named
 * ones and their numbers in this chapter: source Figure 10.1 (expanding cube)
 * is Figure 10.1 here, source 10.2 (heating curve) is 10.3, source 10.3 (rods
 * in series) is 10.6, source 10.4 (freezing pond) is 10.7, source 10.5
 * (cooling curve) is 10.8, source 10.6 (phase diagram) is 10.11. Figures are
 * renumbered into reading order so a student meets 10.1 to 10.11 in sequence;
 * the five designed ones are 10.2 (the anomalous expansion of water, which the
 * brief asked for and which is a real curve worth seeing), 10.4 (the
 * calorimetry heat budget as a decision flow), 10.5 (conduction and
 * convection), 10.9 (two black-body spectra, showing Wien's shift), and 10.10
 * (extrapolating a gas thermometer's pressure line to absolute zero). None
 * dropped, and no new figure vocabulary is requested: everything the six named
 * briefs asked for was drawable with the existing frame primitives.
 *
 * THE PANEL RULE is honoured everywhere. Conduction and convection is Figure
 * 10.5's TWO CHIPS, never two panels in one frame; radiation is not there at
 * all, because it belongs to Topic 04 and topics are self-contained. Figures
 * 10.1, 10.3, 10.6 and 10.11 are likewise two chips each, never a grid inside
 * one frame. Figure 10.3, the heating curve, gets its second chip because the
 * ice-warming leg is 21 kJ against the boiling plateau's 2260 and is 2 pixels
 * wide on the full-journey axis: the zoom is the only way the first three legs
 * are readable, and the full view is the only way the boiling plateau's
 * dominance is.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11ThermalProperties: Chapter = {
  "chapter": "10",
  "title": "Thermal Properties of Matter",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Temperature, Heat and Thermal Expansion",
      "chip": "01 HEAT AND EXPANSION",
      "kalam": "a difference is the same number in K and °C; a reading is not",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Temperature, Heat and Expansion</b><br>A steady source of marks. JEE Main almost always carries 1 to 2 questions, usually a clean thermal-expansion or thermal-stress numerical, or a quick scale conversion. NEET tends to ask one conceptual MCQ: heat versus temperature, the anomalous expansion of water, or does the hole expand. CBSE Boards favour a 1 to 3 mark definition or short numerical, state the relation γ = 3α, or compute an increase in length. JEE Advanced rarely asks it standalone but loves bolting it onto elasticity or onto a clock or pendulum problem for multi-step reasoning.<br><br><b>02 · Calorimetry and Specific Heat</b><br>The most numerically loaded slice of the chapter. JEE Main reliably carries 1 to 2 questions, usually a mixing or heat-balance numerical or a find-the-final-state problem. NEET loves the conceptual traps here, steam burns, the latent-heat step, will all the ice melt, plus a quick specific-heat comparison. CBSE Boards ask 2 to 3 mark numericals on <i>Q</i> = <i>mc</i>Δ<i>T</i> and <i>Q</i> = <i>mL</i>, the principle of calorimetry, or a definition. JEE Advanced uses it for multi-phase mixing where you must <i>determine</i> the final state rather than assume it: high reasoning, low formula count.<br><br><b>03 · Heat Transfer by Conduction and Convection</b><br>Conduction is a dependable scorer. JEE Main almost always carries a numerical on Fourier's law, series or parallel rods, or a junction temperature, and JEE Advanced reaches for the growth of ice on a pond or a composite-slab network. NEET sticks to conceptual MCQs: which mode works in vacuum, why metal feels colder than wood, and the sea-breeze story. CBSE Boards ask a 2 to 3 mark definition of thermal conductivity, the units and dimensions of <i>K</i>, or a clean rate-of-heat-flow calculation through a wall or a windowpane.<br><br><b>04 · Radiation and the Cooling Laws</b><br>High yield. JEE Main reliably pulls a Stefan numerical, a Wien wavelength question, or a Newton's-law-of-cooling problem. NEET loves the conceptual MCQs, good absorber equals good emitter, why heated iron changes colour, the black-body definition, plus the occasional fourth-power ratio. JEE Advanced combines Wien with Stefan, finding a star's temperature and then its power, or sets a multi-step cooling problem. CBSE Boards ask for the statement of Stefan's or Wien's law, the definition of a black body, or the derivation of Newton's law of cooling from Stefan's law, a perennial favourite.<br><br><b>05 · Thermometry and the Absolute Scale</b><br>A reliable source of definition and short-numerical marks. CBSE Boards regularly ask for the definition of the triple point, the ideal-gas equation, absolute zero, or a thermometer's thermometric property, worth 1 to 3 marks. JEE Main occasionally sets a constant-volume gas-thermometer or gas-law numerical. NEET favours conceptual MCQs, which thermometer suits a given range, why absolute zero is unreachable, why dilute gases all agree. JEE Advanced rarely asks it standalone but uses absolute temperature as the gateway to kinetic theory and thermodynamics, so a clean grasp here pays off across three chapters.<br><br><b>06 · Change of State and Phase Diagrams</b><br>The richest source of conceptual marks in the chapter. NEET loves it: regelation and ice skating, the pressure cooker, why food cooks slowly on mountains, sublimation, cooling by evaporation, the triple point. CBSE Boards ask for definitions, the effect of pressure on melting and boiling points, and short explain-why answers worth 2 to 3 marks. JEE Main sets phase-diagram interpretation and pressure-dependence reasoning; JEE Advanced pushes into the slope of the fusion curve and a quantitative melting-point shift. The latent-heat <i>numbers</i> live in Topic 02; this topic supplies the framework those numbers sit inside."
        },
        {
          "t": "p",
          "html": "Pour hot chai into a steel tumbler, wait two minutes, and the tumbler itself is too hot to hold. Something moved. The chai and the steel started at different levels of hotness, and energy flowed from the hotter one into the cooler one until, given long enough, both settle somewhere in between. That level of hotness is <b>temperature</b>. The something that flows is <b>heat</b>. Almost everything in this chapter is a careful reading of that one kitchen scene, so it is worth pulling apart slowly."
        },
        {
          "t": "p",
          "html": "<b>Temperature</b> is the property that decides which way energy will flow when two objects touch. It is not how much energy is inside; it is how energetically the molecules are jiggling, on average. A spoonful of boiling water and a bucket of boiling water are at the <i>same</i> temperature, because the molecules jiggle equally hard in both, yet the bucket obviously holds far more thermal energy. Temperature is <b>intensive</b>: it does not care about size or amount."
        },
        {
          "t": "think",
          "html": "picture a mumbai local at rush hour. temperature is the crowd density in one compartment, how tightly packed the people are. heat is the people pushing through the doors from a packed compartment into an emptier one when the train stops. the pushing carries on only until both compartments are equally crowded, and then it stops: that is equilibrium. and notice a twelve-coach train and a three-coach train can have the same density, the same temperature, while the long one obviously contains far more people, far more internal energy. once that clicks you will never confuse the two again."
        },
        {
          "t": "p",
          "html": "<b>Heat</b> is energy <i>in transit</i>. The moment two bodies at different temperatures touch, energy passes from the hotter to the cooler, and only while it is crossing do we call it heat. Once it has arrived and the flow has stopped, it stops being heat and becomes part of the body's <b>internal energy</b>. This is exactly why the sentence <i>this body contains a lot of heat</i> is wrong and loses marks: a body contains internal energy. Heat is the name for the transfer. The correct version is <i>this body is at a high temperature</i>, or <i>heat is flowing from A to B because A is hotter</i>."
        },
        {
          "t": "p",
          "html": "The flow stops when both bodies reach the same temperature, a state called <b>thermal equilibrium</b>. And a quiet rule sneaks in here, the <b>Zeroth Law of Thermodynamics</b>: if A is in thermal equilibrium with C, and B is also in thermal equilibrium with C, then A and B are in equilibrium with each other. It sounds too obvious to name, but it is precisely what lets a thermometer work. The thermometer is the C you touch to everything. If two patients both make it read 37 °C, they are at the same temperature, even though they never touched each other."
        },
        {
          "t": "def",
          "term": "Kelvin and celsius, and the difference that is not a reading",
          "html": "This chapter's single biggest source of lost marks. A <b>reading</b> and a <b>difference</b> behave differently. An absolute temperature converts with the offset: <i>K</i> = <i>C</i> + 273.15, so 27 °C is 300 K. A temperature <b>difference</b> carries no offset at all, because a kelvin and a celsius degree are exactly the same size: Δ<i>K</i> = Δ<i>C</i>, so a rise of 30 °C is a rise of 30 K, full stop. <b>The convention this chapter holds throughout: any Δ<i>T</i> may be quoted in either K or °C and the number is identical, while any bare <i>T</i> in a radiation or gas law must be in kelvin.</b> Adding 273 to a difference, or 32 to a Fahrenheit difference, is the commonest single error in the whole chapter."
        },
        {
          "t": "p",
          "html": "Now the third character, <b>expansion</b>. Heat a substance and its molecules jiggle harder, pushing their neighbours a little further away on average, so the object grows. Cool it and it shrinks. Almost everything does this, and engineers respect it constantly: the gaps left between railway track segments, the rollers under a bridge span, the slight sag deliberately left in overhead electric wires. All of those exist so that summer heat does not buckle the structure."
        },
        {
          "t": "defgrid",
          "title": "The three coefficients, and what each one scales",
          "rows": [
            { "k": "Linear, α", "v": "Δ<i>L</i> = α<i>L</i><sub>0</sub>Δ<i>T</i>. Unit K<sup>−1</sup> (same number per °C). Typical solid: 1 to 2 × 10<sup>−5</sup> K<sup>−1</sup>" },
            { "k": "Areal, β", "v": "Δ<i>A</i> = β<i>A</i><sub>0</sub>Δ<i>T</i>, with β = 2α. Also called superficial expansion" },
            { "k": "Cubical, γ", "v": "Δ<i>V</i> = γ<i>V</i><sub>0</sub>Δ<i>T</i>, with γ = 3α. Also called volumetric expansion" },
            { "k": "The ratio", "v": "α : β : γ = 1 : 2 : 3, the powers to which a length is raised for a line, an area, a volume" },
            { "k": "Dimensions", "v": "all three are [Θ<sup>−1</sup>]. Dimensions cannot tell them apart, so the geometry has to" },
            { "k": "Apparent, liquids", "v": "γ<sub>apparent</sub> = γ<sub>liquid</sub> − γ<sub>container</sub> = γ<sub>liquid</sub> − 3α<sub>container</sub>, for overflow problems" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TEMPERATURE SCALES",
          "tag": "readings take the offset, differences never do",
          "main": "<i>C</i>/100 = (<i>F</i> − 32)/180 = (<i>K</i> − 273.15)/100<br><i>F</i> = (9/5)<i>C</i> + 32 · <i>K</i> = <i>C</i> + 273.15<br>for changes: Δ<i>C</i> = Δ<i>K</i> · Δ<i>F</i> = (9/5)Δ<i>C</i>",
          "legend": [
            "<i>C</i>, <i>F</i>, <i>K</i> are readings on the Celsius, Fahrenheit and Kelvin scales, all measures of temperature",
            "the kelvin is the SI unit, defined as 1/273.16 of the triple point of water, dimensions [Θ]",
            "the general identity works for any linear scale: equal fractions of the ice-to-steam span read the same temperature"
          ],
          "note": "a Fahrenheit degree is only 5/9 as big as a celsius degree, which is the only thing that survives into a difference. The +32 and the +273.15 are where each scale starts, and a difference has no start."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EXPANSION, DENSITY AND THERMAL STRESS",
          "main": "Δ<i>L</i> = α<i>L</i><sub>0</sub>Δ<i>T</i> · Δ<i>A</i> = β<i>A</i><sub>0</sub>Δ<i>T</i> · Δ<i>V</i> = γ<i>V</i><sub>0</sub>Δ<i>T</i><br>β = 2α · γ = 3α<br>ρ = ρ<sub>0</sub>/(1 + γΔ<i>T</i>) ≈ ρ<sub>0</sub>(1 − γΔ<i>T</i>)<br>clamped rod: σ = <i>Y</i>αΔ<i>T</i>",
          "legend": [
            "<i>L</i><sub>0</sub>, <i>A</i><sub>0</sub>, <i>V</i><sub>0</sub> are the ORIGINAL length (m), area (m<sup>2</sup>) and volume (m<sup>3</sup>), before heating, and ρ<sub>0</sub> the original density in kg/m<sup>3</sup>",
            "α, β, γ are the linear, areal and cubical expansion coefficients, all in K<sup>−1</sup>; Δ<i>T</i> is the temperature change in K, the same number in °C",
            "σ is the thermal stress in pascal (Pa) and <i>Y</i> is Young's modulus in Pa, from Mechanical Properties of Solids: stress = <i>Y</i> × strain, and a rod stopped from expanding carries exactly the strain αΔ<i>T</i> it was denied"
          ],
          "note": "the thermal stress contains no length at all, so a short clamped rod and a long one of the same material develop identical stress. That length-independence is the favourite hook in this kind of question."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY γ = 3α, TAP A LINE",
          "steps": [
            {
              "eq": "take a cube of side <i>L</i><sub>0</sub> at <i>T</i><sub>0</sub>, so <i>V</i><sub>0</sub> = <i>L</i><sub>0</sub><sup>3</sup>",
              "why": "A cube only for convenience. The result holds for any shape, because expansion is a scaling of the whole geometry, not a property of a particular outline."
            },
            {
              "eq": "raise the temperature by Δ<i>T</i>: every edge obeys <i>L</i> = <i>L</i><sub>0</sub>(1 + αΔ<i>T</i>)",
              "why": "Expansion is a property of the material's bonds, not of the object's orientation, so each of the three mutually perpendicular edges grows by the same fractional amount αΔ<i>T</i>."
            },
            {
              "eq": "the cube stays a cube, so <i>V</i> = <i>L</i><sup>3</sup> = <i>V</i><sub>0</sub>(1 + αΔ<i>T</i>)<sup>3</sup>",
              "why": "Nothing has been approximated yet. This line is exact; the approximation arrives only at the next step, and knowing exactly where it enters is what the examiner is testing."
            },
            {
              "eq": "(1 + αΔ<i>T</i>)<sup>3</sup> = 1 + 3αΔ<i>T</i> + 3(αΔ<i>T</i>)<sup>2</sup> + (αΔ<i>T</i>)<sup>3</sup> ≈ 1 + 3αΔ<i>T</i>",
              "why": "Here is the physical reasoning. For solids α is of order 10<sup>−5</sup> K<sup>−1</sup>, so even a 100 K rise makes αΔ<i>T</i> about 10<sup>−3</sup>. Its square is about 10<sup>−6</sup> and its cube about 10<sup>−9</sup>, utterly negligible beside the first-order term. Keep only the linear term."
            },
            {
              "eq": "compare with the definition <i>V</i> = <i>V</i><sub>0</sub>(1 + γΔ<i>T</i>): γ = 3α",
              "why": "Matching term by term. Run the identical argument on a square face, <i>A</i> = <i>L</i><sup>2</sup>, and the first-order term gives β = 2α. The numbers 1, 2, 3 are simply the powers to which a length is raised for a line, an area and a volume, which is why you can rebuild this on the spot instead of memorising it."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.1 · WHAT EXPANDS, AND BY HOW MUCH",
          "chips": ["one edge", "the whole cube"],
          "captions": [
            "A rod of original length L₀ grows by ΔL = αL₀ΔT. The extension is drawn far bigger than life: for a real metre-long metal rod over a 100 K rise it is about 1 mm, a thousandth of the length.",
            "Heat the cube and every edge grows by the same fractional amount αΔT, so the volume grows by three times that fraction. The dashed cube shares one corner with the original, which is the honest way to draw it: expansion has no preferred direction and no fixed point of its own."
          ],
          "frames": [
            {
              "x": [-0.5, 10.5], "y": [-2.6, 1.6], "axes": "none", "aspect": 0.45,
              "polys": [
                { "pts": [[0, -0.4], [8, -0.4], [8, 0.4], [0, 0.4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[8, -0.4], [9.6, -0.4], [9.6, 0.4], [8, 0.4]], "close": true, "fill": "wash", "tone": "amber", "dash": true }
              ],
              "arrows": [
                { "from": [0, -1.4], "to": [8, -1.4], "head": "both", "label": "L₀", "at": "below" },
                { "from": [8, -1.4], "to": [9.6, -1.4], "head": "both", "tone": "amber", "label": "ΔL", "at": "below" }
              ]
            },
            {
              "x": [-0.9, 7.5], "y": [-1.4, 7.0], "axes": "none", "aspect": 0.99,
              "polys": [
                { "pts": [[0, 0], [5, 0], [5, 5], [0, 5]], "close": true, "dash": true, "tone": "soft" },
                { "pts": [[0, 5], [5, 5], [6.9, 6.9], [1.9, 6.9]], "close": true, "dash": true, "tone": "soft" },
                { "pts": [[5, 0], [6.9, 1.9], [6.9, 6.9], [5, 5]], "close": true, "dash": true, "tone": "soft" },
                { "pts": [[0, 0], [4, 0], [4, 4], [0, 4]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[0, 4], [4, 4], [5.5, 5.5], [1.5, 5.5]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4, 0], [5.5, 1.5], [5.5, 5.5], [4, 4]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "labels": [
                { "x": 2, "y": -0.75, "text": "L₀" },
                { "x": 6.0, "y": -0.75, "text": "heated" }
              ],
              "arrows": [
                { "from": [4, -0.75], "to": [5, -0.75], "tone": "amber", "label": "ΔL", "at": "above" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "One substance refuses to play along, and its rebellion keeps things alive. Between 0 °C and 4 °C, <b>water contracts as you warm it</b>, and only above 4 °C does it start expanding normally. So water is at its densest at 4 °C. In a pond in winter the surface water cools, grows denser, sinks and is replaced, until the whole body reaches 4 °C. Cool it further and the surface water now becomes <i>less</i> dense, so it stays on top, freezes there, and the ice floats as a lid over liquid water beneath. The fish survive the winter because of an anomaly in a graph."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.2 · THE ANOMALOUS EXPANSION OF WATER",
          "chips": ["density of water"],
          "captions": [
            "Density of pure water against temperature. From 0 °C the density RISES to a maximum at 4 °C, which means the water is contracting as it is warmed, and only past 4 °C does it fall in the ordinary way. The whole anomaly is about 0.013 percent of the density, far too small to see in a glass and large enough to decide how a pond freezes."
          ],
          "frames": [
            {
              "x": [0, 20], "y": [997.9, 1000.3],
              "axisX": "T (°C)", "axisY": "ρ (kg/m³)",
              "ticksX": { "every": 5 },
              "ticksY": { "at": [998, 999, 1000] },
              "curves": [
                { "c": "pts", "pts": [[0, 999.84], [2, 999.94], [4, 999.97], [6, 999.94], [8, 999.85], [10, 999.7], [15, 999.1], [20, 998.2]], "smooth": true },
                { "c": "vline", "x": 4, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 4, "y": 999.97, "label": "4 °C", "at": "nw" }
              ],
              "labels": [
                { "x": 5, "y": 998.6, "text": "contracts 0 to 4 °C" },
                { "x": 13.5, "y": 1000.0, "text": "normal expansion" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any expansion question, in five steps",
          "steps": [
            "<b>Decide which coefficient the question wants.</b> A length needs α, an area β, a volume or a liquid γ. If only one is given, convert with β = 2α and γ = 3α before you do anything else.",
            "<b>Go straight for the change, never the final value minus the initial one.</b> Compute Δ<i>L</i> = α<i>L</i><sub>0</sub>Δ<i>T</i> directly. Subtracting two nearly equal seven-figure numbers throws away the precision the answer needs.",
            "<b>Use the ORIGINAL dimension.</b> α multiplies <i>L</i><sub>0</sub>, the length before heating. In board problems the difference is negligible; in precise work it is not.",
            "<b>Treat every cavity as if it were filled with the same metal.</b> A hole, a bore, the inside of a ring: the boundary is metal and the boundary is what expands, so the empty region scales up by the same factor.",
            "<b>Sanity-check the order of magnitude.</b> Solids have α about 10<sup>−5</sup> K<sup>−1</sup>, so a metre-long rod over a 100 K rise grows by about 1 mm. If your answer is in centimetres, you have a power-of-ten error."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A straight steel rail is 12.0 m long when laid at an early-morning temperature of 18 °C in Nagpur. By afternoon it has heated to 48 °C. Find the increase in its length. Take α<sub>steel</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.",
          "steps": [
            "Given: <i>L</i><sub>0</sub> = 12.0 m, Δ<i>T</i> = 48 − 18 = 30 °C, which is also 30 K, and α = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.",
            "Δ<i>L</i> = α<i>L</i><sub>0</sub>Δ<i>T</i> = (1.2 × 10<sup>−5</sup>)(12.0)(30).",
            "Δ<i>L</i> = 432 × 10<sup>−5</sup> m = 4.32 × 10<sup>−3</sup> m = 4.32 mm.",
            "Just 4.32 mm. Multiply that across thousands of rail segments and you see why expansion gaps are non-negotiable on Indian Railways."
          ],
          "ans": "ΔL = 4.32 mm"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A child's body temperature rises by 3.0 °C during a fever. By how much has it risen on the Fahrenheit scale?",
          "steps": [
            "The reflex is to grab <i>F</i> = (9/5)<i>C</i> + 32 and convert the 3, giving (9/5)(3) + 32 = 37.4 °F, and then to write <i>rose by 37.4 °F</i>, which is nonsense: the fever did not add 37 degrees to the child.",
            "The +32 says where the Fahrenheit scale starts. A rise has no start, so the offset disappears the moment you deal with a change.",
            "Only the SIZE of a degree survives, and a Fahrenheit degree is 5/9 as big as a celsius one. So Δ<i>F</i> = (9/5)Δ<i>C</i> = (9/5)(3.0) = 5.4 °F.",
            "The same logic in kelvin is even simpler: Δ<i>K</i> = Δ<i>C</i> = 3.0 K exactly, because the two degrees are the same size."
          ],
          "ans": "ΔF = 5.4 °F, and ΔK = 3.0 K"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A pendulum clock with a steel pendulum keeps perfect time at 20 °C. During a Rajasthan summer the temperature climbs to 45 °C. Does the clock run fast or slow, and by how many seconds is it off after one full day? Take α<sub>steel</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>.",
          "steps": [
            "The period of a simple pendulum is <i>T</i> = 2π√(<i>L</i>/<i>g</i>), so <i>T</i> ∝ √<i>L</i>. A fractional change in a square root is half the fractional change inside it: Δ<i>T</i>/<i>T</i> = ½(Δ<i>L</i>/<i>L</i>).",
            "Expansion supplies Δ<i>L</i>/<i>L</i> = αΔθ, so Δ<i>T</i>/<i>T</i> = ½αΔθ = ½(1.2 × 10<sup>−5</sup>)(25) = 1.5 × 10<sup>−4</sup>.",
            "Direction first, because that is the conceptual core. Heating LENGTHENS the pendulum, which INCREASES the period, so each swing takes slightly longer and the clock ticks less often than it should. It runs SLOW and loses time.",
            "The fractional error in the period is the fractional error in the elapsed time, so over one day of <i>t</i> = 86400 s: Δ<i>t</i> = (1.5 × 10<sup>−4</sup>)(86400) = 12.96 s.",
            "Roughly 13 s lost every day in that heat. The deep idea, that a fractional change in a LENGTH becomes half the fractional change in a TIME, is exactly the multi-step bridge these papers reward."
          ],
          "ans": "runs slow, losing about 13 s per day"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A copper rod (<i>L</i><sub>1</sub> = 0.40 m, <i>A</i><sub>1</sub> = 4.0 cm<sup>2</sup>, <i>Y</i><sub>1</sub> = 1.1 × 10<sup>11</sup> Pa, α<sub>1</sub> = 1.7 × 10<sup>−5</sup> K<sup>−1</sup>) and a steel rod (<i>L</i><sub>2</sub> = 0.60 m, <i>A</i><sub>2</sub> = 2.0 cm<sup>2</sup>, <i>Y</i><sub>2</sub> = 2.0 × 10<sup>11</sup> Pa, α<sub>2</sub> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>) sit end to end between rigid supports, unstressed at 20 °C. The temperature is raised to 120 °C. Find the stress in each rod.",
          "steps": [
            "In a series joint the internal force <i>F</i> is the same in both rods. Each rod's length change is its mechanical part plus its thermal part: Δ<i>L<sub>i</sub></i> = <i>FL<sub>i</sub></i>/(<i>A<sub>i</sub>Y<sub>i</sub></i>) + α<i><sub>i</sub>L<sub>i</sub></i>Δ<i>T</i>.",
            "The walls are rigid, so the TOTAL length cannot change: Δ<i>L</i><sub>1</sub> + Δ<i>L</i><sub>2</sub> = 0. With Δ<i>T</i> = 100 K, <i>A</i><sub>1</sub> = 4.0 × 10<sup>−4</sup> m<sup>2</sup> and <i>A</i><sub>2</sub> = 2.0 × 10<sup>−4</sup> m<sup>2</sup>.",
            "Compliance terms: 0.40/(4.4 × 10<sup>7</sup>) = 9.09 × 10<sup>−9</sup> and 0.60/(4.0 × 10<sup>7</sup>) = 15.0 × 10<sup>−9</sup>, summing to 24.1 × 10<sup>−9</sup> m/N.",
            "Free thermal expansions: (1.7 × 10<sup>−5</sup>)(0.40)(100) = 6.8 × 10<sup>−4</sup> m and (1.2 × 10<sup>−5</sup>)(0.60)(100) = 7.2 × 10<sup>−4</sup> m, summing to 1.40 × 10<sup>−3</sup> m.",
            "So <i>F</i>(24.1 × 10<sup>−9</sup>) = −1.40 × 10<sup>−3</sup>, giving <i>F</i> = −5.81 × 10<sup>4</sup> N, negative meaning compression. Then σ<sub>1</sub> = <i>F</i>/<i>A</i><sub>1</sub> = −1.45 × 10<sup>8</sup> Pa and σ<sub>2</sub> = <i>F</i>/<i>A</i><sub>2</sub> = −2.91 × 10<sup>8</sup> Pa: the thinner rod carries twice the stress from the very same force."
          ],
          "ans": "F = 5.81 × 10<sup>4</sup> N compressive · σ<sub>copper</sub> = 1.45 × 10<sup>8</sup> Pa · σ<sub>steel</sub> = 2.91 × 10<sup>8</sup> Pa"
        },
        {
          "t": "mcq",
          "q": "A circular metal plate has a small circular hole drilled through it. When the plate is heated uniformly, the diameter of the hole:",
          "opts": [
            { "label": "decreases", "nudge": "The classic trap: you picture the surrounding metal closing in on the hole. It feels intuitive, but the metal moves outward and carries the hole's edge outward with it." },
            { "label": "increases", "nudge": null },
            { "label": "stays the same", "nudge": "This assumes a hole is nothing and so cannot expand. But it is the boundary that expands, and the boundary is metal." },
            { "label": "first increases, then decreases", "nudge": "This invents a reversal that no expansion law contains. Only water's density has a turning point, and that is a different quantity entirely." }
          ],
          "correct": 1,
          "solution": "Expansion is a SCALING of the whole geometry, like a photograph enlarged on a photocopier. Every feature, empty regions included, scales up by the same factor (1 + αΔT). The hole behaves exactly like a disc of metal that would have occupied it."
        },
        {
          "t": "mcq",
          "q": "The coefficients of linear, areal and volumetric expansion of an isotropic solid are in the ratio:",
          "opts": [
            { "label": "1 : 1 : 1", "nudge": "This would hold only if expansion were one-dimensional. A heated cube grows in three directions at once." },
            { "label": "1 : 2 : 3", "nudge": null },
            { "label": "3 : 2 : 1", "nudge": "The same numbers read backwards, a careless-reading trap. The LARGEST coefficient belongs to the volume, which grows fastest." },
            { "label": "1 : 3 : 9", "nudge": "This comes from squaring and cubing the ratio instead of doubling and tripling it. Area goes as the 2nd power of a length, not the 3rd." }
          ],
          "correct": 1,
          "solution": "Length, area and volume scale as the 1st, 2nd and 3rd powers of a linear dimension, so α : β : γ = 1 : 2 : 3."
        },
        {
          "t": "mcq",
          "q": "Water is heated steadily from 0 °C to 10 °C. Its volume:",
          "opts": [
            { "label": "increases throughout", "nudge": "The everything-expands-when-heated reflex, which is exactly the assumption water violates over the first four degrees." },
            { "label": "decreases throughout", "nudge": "This describes only the first four degrees and misses the reversal at 4 °C." },
            { "label": "first decreases up to 4 °C, then increases", "nudge": null },
            { "label": "first increases up to 4 °C, then decreases", "nudge": "This inverts the real behaviour, the trap for anyone who half-remembers that something odd happens at 4 °C without remembering which way." }
          ],
          "correct": 2,
          "solution": "Between 0 °C and 4 °C water contracts on heating, so its density rises and peaks at 4 °C. Only above 4 °C does it expand normally."
        },
        {
          "t": "mcq",
          "q": "A faulty celsius thermometer reads 2 °C in pure melting ice and 102 °C in steam at standard pressure. When it reads 27 °C, the true temperature is:",
          "opts": [
            { "label": "25 °C", "nudge": null },
            { "label": "25.5 °C", "nudge": "This corrects the span but forgets that the lower fixed point itself has shifted by 2 degrees." },
            { "label": "27 °C", "nudge": "This treats the faulty reading as correct and ignores the calibration error entirely." },
            { "label": "23 °C", "nudge": "This subtracts the 2-degree offset twice, once from the reading and once again from the answer." }
          ],
          "correct": 0,
          "solution": "The faulty scale runs from 2 to 102, so its span is still 100 divisions, but it is offset by 2. Mapping its reading X to the true value C: C/100 = (X − 2)/(102 − 2), so C = (27 − 2)/100 × 100 = 25 °C."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A brass scale is correct at 15 °C. A rod measured with it reads 80.00 cm on a day when the scale is at 35 °C. Find the true length of the rod. Take α<sub>brass</sub> = 1.9 × 10<sup>−5</sup> °C<sup>−1</sup>.", "a": "The scale's own divisions have grown, so it under-reads. True length = 80.00(1 + αΔ<i>T</i>) = 80.00(1 + 1.9 × 10<sup>−5</sup> × 20) = 80.00(1.00038) = 80.03 cm." },
            { "q": "[NEET] At what single temperature do the Celsius and Fahrenheit scales show the same numerical reading?", "a": "Set <i>F</i> = <i>C</i>: <i>C</i> = (9/5)<i>C</i> + 32, so −(4/5)<i>C</i> = 32 and <i>C</i> = −40. That is −40 °C = −40 °F." },
            { "q": "[JEE Main] A glass flask of volume 1000 cm<sup>3</sup> is filled to the brim with mercury at 0 °C. Both are heated to 80 °C. How much mercury overflows? Take γ<sub>mercury</sub> = 1.8 × 10<sup>−4</sup> °C<sup>−1</sup> and α<sub>glass</sub> = 9 × 10<sup>−6</sup> °C<sup>−1</sup>.", "a": "The flask expands too, so use the apparent coefficient: γ<sub>app</sub> = 1.8 × 10<sup>−4</sup> − 3(9 × 10<sup>−6</sup>) = 1.53 × 10<sup>−4</sup> °C<sup>−1</sup>. Overflow = <i>V</i><sub>0</sub>γ<sub>app</sub>Δ<i>T</i> = 1000 × 1.53 × 10<sup>−4</sup> × 80 = 12.24 cm<sup>3</sup>." },
            { "q": "[JEE Main] An aluminium wire of cross-section 2.0 mm<sup>2</sup> is stretched between two rigid clamps at 30 °C and then cooled to −10 °C. Find the tension developed. Take <i>Y</i> = 7.0 × 10<sup>10</sup> Pa and α = 2.3 × 10<sup>−5</sup> °C<sup>−1</sup>.", "a": "Δ<i>T</i> = 40 K. Tension = <i>YA</i>αΔ<i>T</i> = (7.0 × 10<sup>10</sup>)(2.0 × 10<sup>−6</sup>)(2.3 × 10<sup>−5</sup>)(40) ≈ 129 N. Cooling puts a clamped wire in tension, exactly as heating puts it in compression." },
            { "q": "[JEE Advanced] A copper rod (α<sub>1</sub> = 1.7 × 10<sup>−5</sup> °C<sup>−1</sup>) and a steel rod (α<sub>2</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>) are joined end to end into a single rod 1.00 m long at 20 °C. The combined rod expands by 0.78 mm when heated to 70 °C. Find the length of each at 20 °C.", "a": "With Δ<i>T</i> = 50 and <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> = 1.00: 50(1.7<i>L</i><sub>1</sub> + 1.2(1 − <i>L</i><sub>1</sub>)) × 10<sup>−5</sup> = 7.8 × 10<sup>−4</sup>, so 0.5<i>L</i><sub>1</sub> = 0.36 and <i>L</i><sub>1</sub> = 0.72 m. Copper 0.72 m, steel 0.28 m. Check: 0.72(1.7) + 0.28(1.2) = 1.56, times 50 × 10<sup>−5</sup> = 0.78 mm." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding 32, or 273, to a temperature DIFFERENCE.</b> The single most expensive habit in this chapter. Δ<i>C</i> = Δ<i>K</i> and Δ<i>F</i> = (9/5)Δ<i>C</i>. The offsets belong only to absolute readings, never to a change. Conversely, dropping the +273 from an absolute temperature before a radiation or gas law is just as fatal, and Topics 04 and 05 will punish it with a fourth power.",
            "<b>Confusing α, β and γ.</b> They are three different numbers in the ratio 1 : 2 : 3, and dimensional analysis cannot separate them because all three are [Θ<sup>−1</sup>]. If a question gives you α and asks about a volume, you must triple it before you start.",
            "<b>Multiplying α by the FINAL length instead of the original.</b> Always use <i>L</i><sub>0</sub>, the length before heating. For board-sized changes the error hides in the rounding; in precise work it does not.",
            "<b>Thinking holes and cavities shrink.</b> A hole, a bore, the inner radius of a ring: all expand outward with the same coefficient as the surrounding solid. Treat every empty region as if it were filled with the same metal.",
            "<b>Forgetting that the container expands too.</b> Liquid overflow uses γ<sub>apparent</sub> = γ<sub>liquid</sub> − 3α<sub>container</sub>, not γ<sub>liquid</sub>. A mercury-in-glass problem solved with the bare mercury coefficient is out by about 15 percent, which is exactly the size of the wrong option waiting for you."
          ]
        },
        {
          "t": "protip",
          "html": "carry one sentence: same size of degree, so a difference converts without the offset; different starting points, so a reading does not. for the ratio, do not memorise 1 : 2 : 3, rebuild it, a line is length to the first power, an area to the second, a volume to the third, and that is the whole derivation. two extras worth having in your pocket. first, thermal stress σ = Yα ΔT carries no length, so a 2 cm clamped rod and a 2 m one develop the same stress. second, a bimetallic strip of two metals of equal thickness d bonded together bends on heating to a radius R ≈ 2d ÷ ((α<sub>2</sub> − α<sub>1</sub>)ΔT), with the higher-α metal on the outside; that is your geyser thermostat, and two 0.5 mm strips of brass and steel over a 100 K rise curl to about 1.4 m."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Δ<i>C</i> = Δ<i>K</i>, but <i>K</i> = <i>C</i> + 273.15", "note": "a difference takes no offset; a reading does" },
            { "f": "Δ<i>L</i> = α<i>L</i><sub>0</sub>Δ<i>T</i> · Δ<i>A</i> = β<i>A</i><sub>0</sub>Δ<i>T</i> · Δ<i>V</i> = γ<i>V</i><sub>0</sub>Δ<i>T</i>", "note": "always the ORIGINAL dimension, never the final one" },
            { "f": "β = 2α · γ = 3α · α : β : γ = 1 : 2 : 3", "note": "the powers to which a length is raised for line, area, volume" },
            { "f": "σ = <i>Y</i>αΔ<i>T</i>, clamped rod", "note": "independent of length: short rod, long rod, same stress" },
            { "f": "water is densest at 4 °C", "note": "0 to 4 °C it CONTRACTS on heating; this is why ice floats and fish live" },
            { "f": "holes expand outward", "note": "the boundary is metal, and it is the boundary that grows" }
          ],
          "aids": [
            "\"one, two, three for line, area, volume\"",
            "\"four keeps the fish alive\"",
            "\"a change never takes the offset\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Calorimetry, Specific Heat and Latent Heat",
      "chip": "02 CALORIMETRY",
      "kalam": "spend the heat in order: warm, melt, warm, boil, warm",
      "blocks": [
        {
          "t": "p",
          "html": "Your kitchen on a winter morning. You put a steel ladle and a mug of water on the same flame, side by side, for the same one minute. Pick them up: the ladle is already scorching, the water is merely warm. Same flame, same time, so roughly the <i>same amount of heat</i> went into each. Yet their temperatures rose by wildly different amounts. The water stubbornly refused to heat up while the steel surrendered instantly. That stubbornness has a name, <b>specific heat capacity</b>."
        },
        {
          "t": "p",
          "html": "<b>Specific heat</b> <i>c</i> is the heat needed to raise the temperature of <b>one kilogram</b> of a substance by <b>one degree</b>. Water's is unusually high, 4186 J/kg K, or a clean 1 cal/g °C, far higher than almost anything you meet daily. That single number explains a startling range of things: why the afternoon sea breeze is cool, because the ocean barely warms while the land bakes; why a hot-water bottle stays warm all night; why coastal Mumbai and Chennai have gentler climates than landlocked Nagpur; and why your body, which is mostly water, can absorb a lot of metabolic heat without your temperature spiking. Water is nature's thermal shock-absorber."
        },
        {
          "t": "think",
          "html": "imagine a heat bank account. every body in the insulated box has a balance. put them in contact and the rich, hot ones transfer money to the poor, cold ones until everybody has settled. no money leaves the room, it only gets redistributed, so the total lost by the depositors is exactly the total gained by the receivers. that conservation is the entire engine behind every mixing problem you will ever solve, and it is why you can always write one equation and trust it."
        },
        {
          "t": "p",
          "html": "Bring a hot body and a cold body together in an insulated box and leave them alone. Heat flows hot to cold, always, never the reverse on its own, until both reach one common temperature. Crucially, energy is neither created nor destroyed inside the box: every joule the hot body loses, the cold body gains. That bookkeeping rule is the <b>Principle of Calorimetry</b>, heat lost by hot bodies equals heat gained by cold bodies. A <b>calorimeter</b> is just a well-insulated metal cup with a stirrer and a thermometer, built to make the rule trustworthy. But here is the catch students forget: <b>the calorimeter itself takes part</b>. Its metal walls soak up heat too, so they must appear in the balance sheet."
        },
        {
          "t": "p",
          "html": "Now the twist that generates most of the exam traps. Pour heat into ice at 0 °C and its temperature does <b>not</b> rise while it is melting. The heat is going somewhere invisible: into breaking the rigid crystal lattice, prying molecules loose into the liquid state. That hidden heat, absorbed at <i>constant temperature</i> during a change of phase, is the <b>latent heat</b> <i>L</i>, and the heat for a phase change is <i>Q</i> = <i>mL</i>. Latent heats are large. Melting 1 g of ice takes 80 cal, the same heat that would raise that gram of water by a full 80 °C. Boiling 1 g of water takes a whopping 540 cal. That is exactly why a steam burn is so much worse than a boiling-water burn: the steam dumps an extra 540 cal per gram into your skin as it condenses, before it has even begun to cool."
        },
        {
          "t": "def",
          "term": "Never assume the final state",
          "html": "The golden rule of this topic, and the one thing that separates a JEE Advanced answer from a plausible-looking wrong one. Before you write <i>let the final temperature be T</i>, you do not yet know whether the ice all melts, whether the steam all condenses, or whether the mixture settles pinned at 0 °C or 100 °C with two phases coexisting. Compute what the hot side <b>can</b> deliver, compute what the cold side <b>needs</b> to reach each milestone, and compare. The leg where the budget runs out fixes both the final temperature and the final composition. Only then may you write an equation."
        },
        {
          "t": "defgrid",
          "title": "The constants worth memorising",
          "rows": [
            { "k": "<i>c</i> water", "v": "1 cal/g °C = 4186 J/kg K. The reference against which every other specific heat looks small" },
            { "k": "<i>c</i> ice", "v": "0.5 cal/g °C ≈ 2100 J/kg K. Ice warms twice as fast as water for the same heat" },
            { "k": "<i>c</i> steam", "v": "≈ 0.48 cal/g °C ≈ 2010 J/kg K" },
            { "k": "<i>L<sub>f</sub></i> ice", "v": "80 cal/g ≈ 3.34 × 10<sup>5</sup> J/kg. Books round this over 3.33 to 3.36 × 10<sup>5</sup>; always use the value the question hands you" },
            { "k": "<i>L<sub>v</sub></i> water", "v": "540 cal/g = 2.26 × 10<sup>6</sup> J/kg, nearly seven times the fusion value" },
            { "k": "1 calorie", "v": "the heat to raise 1 g of water from 14.5 °C to 15.5 °C, equal to 4.186 J" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HEAT, CAPACITY AND WATER EQUIVALENT",
          "main": "<i>Q</i> = <i>mc</i>Δ<i>T</i> (temperature change, no phase change)<br>heat capacity <i>C</i> = <i>mc</i> · molar heat capacity = <i>Mc</i><br>water equivalent <i>w</i> = <i>mc</i>/<i>c</i><sub>water</sub>",
          "legend": [
            "<i>Q</i> is heat in joule (J), <i>m</i> is mass in kg, <i>c</i> is specific heat in J/kg K, Δ<i>T</i> is the temperature change in K, the same number in °C",
            "<i>C</i> is the heat capacity of the WHOLE body, in J/K, and depends on both mass and material, while <i>c</i> depends on the material only",
            "<i>M</i> is the molar mass in kg/mol, so molar heat capacity is in J/mol K; <i>w</i> is a mass, in grams, the mass of water with the same heat capacity as the object"
          ],
          "note": "read Q = mcΔT as a recipe: how much stuff, times how reluctant it is, times how big a jump you want. Triple the mass, triple the heat. Nothing subtler than a multiplication."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · LATENT HEAT AND THE CALORIMETRY BALANCE",
          "tag": "the equation you may write only after budgeting",
          "main": "<i>Q</i> = <i>mL</i> (phase change, at constant <i>T</i>)<br>Σ <i>Q</i><sub>lost</sub> = Σ <i>Q</i><sub>gained</sub>",
          "legend": [
            "<i>L<sub>f</sub></i> is the latent heat of fusion, solid to liquid, and <i>L<sub>v</sub></i> the latent heat of vaporisation, liquid to gas; SI unit J/kg, dimensions [L<sup>2</sup> T<sup>−2</sup>]",
            "during a phase change Δ<i>T</i> is exactly zero even as heat pours in, so <i>mc</i>Δ<i>T</i> gives zero there and is the wrong tool",
            "the balance holds for an insulated system with no chemical reaction, and the calorimeter is one of the bodies in it"
          ],
          "note": "keep every term as a magnitude and let the equation balance them. Signs are for one-dimensional motion; here, name the hot side and the cold side and the arithmetic stays positive."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.3 · THE HEATING CURVE",
          "chips": ["1 kg, ice to steam", "the first 800 kJ"],
          "captions": [
            "Temperature against heat supplied, for 1 kg of ice starting at −10 °C. Two flat stretches, and they are where students assume the temperature must still be climbing. It is not: at 0 °C the 336 kJ goes entirely into melting, and at 100 °C the 2260 kJ goes entirely into boiling. Notice how the boiling plateau dwarfs everything else on the axis, and how the ice-warming leg, 21 kJ, is barely a tick.",
            "The same curve zoomed to the first 800 kJ, where the ice-warming leg, the melting plateau and the water-warming leg are all readable. Read off the slopes: ice climbs steeply because c is 2100 J/kg K, water climbs at half that rate because its c is 4186."
          ],
          "frames": [
            {
              "x": [0, 3300], "y": [-30, 170],
              "axisX": "Q (kJ)", "axisY": "T (°C)",
              "ticksX": { "every": 1000 },
              "ticksY": { "at": [-10, 0, 100, 150] },
              "curves": [
                { "c": "pts", "pts": [[0, -10], [21, 0], [357, 0], [776, 100], [3036, 100], [3136, 150]] }
              ],
              "points": [
                { "x": 21, "y": 0, "label": "0 °C", "at": "nw" },
                { "x": 776, "y": 100, "label": "100 °C", "at": "nw" }
              ],
              "labels": [
                { "x": 190, "y": -22, "text": "336 kJ melts it" },
                { "x": 1900, "y": 70, "text": "2260 kJ boils it" }
              ]
            },
            {
              "x": [0, 850], "y": [-30, 130],
              "axisX": "Q (kJ)", "axisY": "T (°C)",
              "ticksX": { "every": 200 },
              "ticksY": { "at": [-10, 0, 50, 100] },
              "curves": [
                { "c": "pts", "pts": [[0, -10], [21, 0], [357, 0], [776, 100]] }
              ],
              "points": [
                { "x": 21, "y": 0, "label": "0 °C", "at": "nw" },
                { "x": 776, "y": 100, "label": "100 °C", "at": "nw" }
              ],
              "labels": [
                { "x": 190, "y": 12, "text": "336 kJ, all latent" },
                { "x": 570, "y": 25, "text": "water warms" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Splitting a journey into its legs",
          "steps": [
            "<b>List every body and its journey.</b> For each substance note its mass, its specific heat, its latent heats, and the temperature it starts at. A missed body, especially the calorimeter, breaks conservation and you will never find the error afterwards.",
            "<b>Split each journey at every phase boundary.</b> Taking ice from −10 °C to steam at 110 °C is not one calculation, it is five: warm the ice, melt it, warm the water, boil it, warm the steam.",
            "<b>Use <i>mc</i>Δ<i>T</i> on the warming legs and <i>mL</i> on the phase-change legs.</b> During legs 2 and 4 the temperature is frozen even as heat pours in, and using <i>mc</i>Δ<i>T</i> there is the single most common mistake in the topic.",
            "<b>Include the calorimeter as one more warming leg</b>, either as <i>m<sub>c</sub>c<sub>c</sub></i>Δ<i>T</i> or, more neatly, by adding its water equivalent <i>w</i> to the mass of water already present.",
            "<b>Work in calories when the numbers are messy.</b> Water's specific heat is exactly 1 in cal/g °C, which turns most of the arithmetic into mental work. Just never mix cal-units and SI inside one problem."
          ]
        },
        {
          "t": "proc",
          "title": "Testing an unknown final state with a heat budget",
          "steps": [
            "<b>Pick a boundary temperature to test</b>, usually 0 °C or 100 °C, whichever lies between the two starting temperatures.",
            "<b>Compute what the cold side NEEDS</b> to arrive at that boundary in a single phase, adding every warming and melting leg on the way.",
            "<b>Compute what the hot side CAN GIVE</b> as it falls to that same boundary, adding every cooling and condensing leg.",
            "<b>Compare.</b> If the hot side's available heat EXCEEDS what the cold side needs, the system pushes past the boundary; carry the surplus into the next leg and solve for a temperature. If it FALLS SHORT, the system settles exactly at that boundary and only PART of the phase change happens; solve for the fraction instead.",
            "<b>Sanity-check the answer.</b> The final temperature must satisfy <i>T</i><sub>cold</sub> ≤ <i>T</i><sub>final</sub> ≤ <i>T</i><sub>hot</sub>. A final temperature outside that bracket, or above 100 °C when liquid water is present, means a phase change was missed."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 10.4 · THE HEAT BUDGET, AS A DECISION",
          "chips": ["the one branch that matters"],
          "captions": [
            "Every hard mixing problem turns on this single question, asked before any equation is written. Budget what the hot side can deliver down to the phase boundary, compare it against what the cold side needs to get there, and let the answer choose the branch. Guess the branch instead and you will produce a final temperature of 130 °C with liquid water in the beaker."
          ],
          "frames": [
            {
              "aspect": 0.95,
              "flow": {
                "boxes": [
                  { "id": "budget", "col": 0, "row": 0, "text": "budget the heat\nthe hot side gives", "shape": "round" },
                  { "id": "test", "col": 0, "row": 1, "text": "enough for the\nwhole phase change?", "shape": "diamond" },
                  { "id": "stuck", "col": 0, "row": 2, "text": "no: it stops at\nthat temperature", "tone": "red" },
                  { "id": "past", "col": 1, "row": 2, "text": "yes: push past\nand warm on", "tone": "green" }
                ],
                "links": [
                  { "from": "budget", "to": "test" },
                  { "from": "test", "to": "stuck", "label": "short", "tone": "red" },
                  { "from": "test", "to": "past", "label": "surplus", "tone": "green" }
                ]
              }
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A 0.50 kg aluminium vessel contains 2.0 kg of water at 25 °C. How much heat must be supplied to raise the whole system to 75 °C? Take <i>c</i><sub>water</sub> = 4186 J/kg K and <i>c</i><sub>Al</sub> = 900 J/kg K.",
          "steps": [
            "The vessel and the water rise together through the same Δ<i>T</i> = 75 − 25 = 50 K, so their capacities simply add.",
            "<i>Q</i> = (<i>m</i><sub>w</sub><i>c</i><sub>water</sub> + <i>m</i><sub>Al</sub><i>c</i><sub>Al</sub>)Δ<i>T</i> = [(2.0)(4186) + (0.50)(900)](50).",
            "<i>Q</i> = [8372 + 450](50) = (8822)(50) = 4.41 × 10<sup>5</sup> J.",
            "The vessel contributes only 450/8822, about 5 percent. Small, but a careful answer still includes it: always account for the container."
          ],
          "ans": "Q = 4.41 × 10<sup>5</sup> J"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "5 g of ice at 0 °C is dropped into 20 g of water at 30 °C in an insulated cup. Find the final temperature.",
          "steps": [
            "The reflex is to treat this as mixing two waters: (20)(30 − <i>T</i>) = (5)(<i>T</i> − 0), giving <i>T</i> = 24 °C. That is wrong, because it forgets that the ice must first MELT, which silently eats a huge chunk of heat.",
            "The 10-second budget, in calories. Heat the warm water can give as it cools to 0 °C: 20 × 1 × 30 = 600 cal. Heat needed just to melt the ice: 5 × 80 = 400 cal.",
            "600 exceeds 400, so all the ice melts and 200 cal is left over. That surplus warms the TOTAL 25 g of water now present, the original 20 g plus the 5 g just melted, all sitting at 0 °C.",
            "200 = (25)(1)(<i>T</i> − 0), so <i>T</i> = 8 °C. Compare that with the trap's 24 °C: melting the ice cost two thirds of the available heat."
          ],
          "ans": "T = 8 °C"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A lead pellet fired from an air gun strikes a thick wall and comes to rest. Its initial temperature is 27 °C. If 50 percent of its kinetic energy is retained as heat in the pellet, find the minimum speed at which it just begins to melt. For lead: melting point 327 °C, <i>c</i> = 128 J/kg K, <i>L<sub>f</sub></i> = 2.5 × 10<sup>4</sup> J/kg.",
          "steps": [
            "Three concepts in sequence. The kinetic energy becomes heat; that heat must first warm the lead to its melting point AND THEN melt it. <i>Just begins to melt</i> means exactly enough to reach 327 °C and complete the fusion.",
            "Heat needed per unit mass, with Δ<i>T</i> = 327 − 27 = 300 K: <i>Q</i>/<i>m</i> = <i>c</i>Δ<i>T</i> + <i>L<sub>f</sub></i> = (128)(300) + 2.5 × 10<sup>4</sup> = 38400 + 25000 = 63400 J/kg.",
            "Half the kinetic energy per unit mass becomes this heat: 0.50 × ½<i>v</i><sup>2</sup> = 63400, so ¼<i>v</i><sup>2</sup> = 63400.",
            "<i>v</i><sup>2</sup> = 253600, giving <i>v</i> ≈ 504 m/s. The mass cancels entirely: the answer depends only on the material and the energy fraction. Drop the latent-heat term and you get a wrongly LOW speed, which is the distractor."
          ],
          "ans": "v ≈ 504 m/s"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In a perfectly insulated container, 30 g of ice at −10 °C is mixed with 5 g of steam at 100 °C. Determine the final temperature and the composition. Use <i>c</i><sub>ice</sub> = 0.5, <i>c</i><sub>water</sub> = 1 cal/g °C, <i>L<sub>f</sub></i> = 80, <i>L<sub>v</sub></i> = 540 cal/g.",
          "steps": [
            "Budget the cold side up to water at 0 °C: warm the ice, 30 × 0.5 × 10 = 150 cal; melt it all, 30 × 80 = 2400 cal. Subtotal needed: 2550 cal.",
            "Budget the hot side down to 0 °C: condense all the steam, 5 × 540 = 2700 cal; cool the condensate from 100 to 0, 5 × 100 = 500 cal. Subtotal available: 3200 cal.",
            "Test the state. Condensing the steam ALONE releases 2700 cal, already more than the 2550 needed to turn all the ice into water at 0 °C. So all the ice melts, all the steam condenses, and the final temperature lies strictly between 0 °C and 100 °C with everything liquid.",
            "Now, and only now, write the balance: 150 + 2400 + 30<i>T</i> = 2700 + 5(100 − <i>T</i>), so 2550 + 30<i>T</i> = 3200 − 5<i>T</i>.",
            "35<i>T</i> = 650, giving <i>T</i> ≈ 18.6 °C, with all 35 g liquid. Check: 18.6 lies strictly between 0 and 100, confirming both phase changes completed. Had step 3 shown the steam could not fully condense, the answer would instead be a steam-and-water mixture pinned at 100 °C, which is exactly the branch these papers test."
          ],
          "ans": "T ≈ 18.6 °C · all 35 g is liquid water"
        },
        {
          "t": "mcq",
          "q": "A burn from steam at 100 °C is far more severe than one from boiling water at 100 °C. The principal reason is that:",
          "opts": [
            { "label": "steam is hotter than boiling water", "nudge": "The obvious trap, but both are at exactly the same 100 °C. That is the whole point of the question." },
            { "label": "steam releases its large latent heat of vaporisation as it condenses on the skin", "nudge": null },
            { "label": "steam has a higher specific heat than water", "nudge": "False and irrelevant: steam's specific heat is about 0.48 cal/g °C, actually LOWER than water's 1." },
            { "label": "steam molecules travel faster and hit harder", "nudge": "This confuses a microscopic detail with the cause. The kinetic energy of impact is negligible beside 540 cal per gram of latent heat." }
          ],
          "correct": 1,
          "solution": "As steam condenses on skin it dumps an extra 540 cal per gram before it has even begun to cool, energy that boiling water simply does not carry."
        },
        {
          "t": "mcq",
          "q": "Equal masses of water and cooking oil, the oil having the smaller specific heat, are given the same amount of heat. Then:",
          "opts": [
            { "label": "water becomes hotter", "nudge": "This reverses the logic, a very common slip: a bigger specific heat means MORE reluctance to warm, not less." },
            { "label": "oil becomes hotter", "nudge": null },
            { "label": "both reach the same temperature", "nudge": "This ignores the role of c altogether, as if heat and temperature rise were the same thing." },
            { "label": "it cannot be decided", "nudge": "Avoidance. The relation ΔT = Q/(mc) fully determines the outcome once Q and m are fixed." }
          ],
          "correct": 1,
          "solution": "From ΔT = Q/(mc), with Q and m fixed, a SMALLER c gives a LARGER temperature rise. Oil, having the smaller specific heat, heats up more."
        },
        {
          "t": "mcq",
          "q": "1 g of ice at 0 °C and 1 g of water at 0 °C are each supplied with 80 cal of heat. Afterwards:",
          "opts": [
            { "label": "the ice sample is hotter", "nudge": "This misjudges where the latent-heat step applies. The ice sample spends every one of its 80 cal on melting and none on warming." },
            { "label": "the water sample is hotter", "nudge": null },
            { "label": "both are at the same temperature", "nudge": "This would need the same heat to produce the same rise in both, which ignores that one of them has a phase change to pay for first." },
            { "label": "both remain at 0 °C", "nudge": "The trap for anyone who reasons both start at 0, so both stay at 0. Only the ice stays: the water has nothing to melt and warms freely." }
          ],
          "correct": 1,
          "solution": "The 80 cal given to the ice is exactly its latent heat of fusion, so it all goes into melting and leaves water at 0 °C. The 80 cal given to the water raises it by 80/(1 × 1) = 80 °C, to 80 °C."
        },
        {
          "t": "mcq",
          "q": "While a block of ice melts at 0 °C, the heat supplied to it:",
          "opts": [
            { "label": "increases the average kinetic energy of the molecules, raising the temperature", "nudge": "This contradicts the observed fact of a phase change: the thermometer does not move while the ice melts." },
            { "label": "increases the molecular potential energy by breaking the crystal lattice, at constant temperature", "nudge": null },
            { "label": "is entirely lost to the surroundings", "nudge": "This ignores that the heat is stored, as latent heat, in the new phase, and can be recovered by refreezing." },
            { "label": "increases kinetic and potential energy equally", "nudge": "Wrong because no temperature rise means no rise in average kinetic energy at all, not merely a smaller one." }
          ],
          "correct": 1,
          "solution": "During melting the temperature is fixed. The energy goes into pulling molecules out of the rigid lattice, a change in potential energy, not into faster jiggling."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Calculate the total heat required to convert 50 g of ice at 0 °C completely into steam at 100 °C. Use <i>L<sub>f</sub></i> = 80, <i>c</i><sub>water</sub> = 1, <i>L<sub>v</sub></i> = 540 cal/g.", "a": "Three legs: melt, 50 × 80 = 4000 cal; warm, 50 × 1 × 100 = 5000 cal; boil, 50 × 540 = 27000 cal. Total 36000 cal = 3.6 × 10<sup>4</sup> cal ≈ 1.51 × 10<sup>5</sup> J. Note that boiling alone is three quarters of the bill." },
            { "q": "[NEET] A copper calorimeter of water equivalent 10 g contains 90 g of water at 20 °C. 100 g of water at 60 °C is poured in. Find the equilibrium temperature.", "a": "The calorimeter counts as 10 g more water, so the cold side is 100 g in effect. 100(60 − <i>T</i>) = 100(<i>T</i> − 20), giving <i>T</i> = 40 °C, the plain midpoint, because the two effective masses are equal." },
            { "q": "[JEE Main] A 200 g copper block at 200 °C is dropped into 300 g of water at 25 °C held in a 50 g copper calorimeter. Find the final temperature. Take <i>c</i><sub>Cu</sub> = 0.09 and <i>c</i><sub>water</sub> = 1 cal/g °C.", "a": "Lost: 200 × 0.09 × (200 − <i>T</i>) = 18(200 − <i>T</i>). Gained: [300(1) + 50(0.09)](<i>T</i> − 25) = 304.5(<i>T</i> − 25). Solving, 322.5<i>T</i> = 11212.5, so <i>T</i> ≈ 34.8 °C." },
            { "q": "[JEE Main] What mass of ice at 0 °C can be melted by passing 50 g of steam at 100 °C through it, the steam finally becoming water at 0 °C?", "a": "Heat released = condense, 50 × 540 = 27000 cal, plus cool, 50 × 1 × 100 = 5000 cal, total 32000 cal. Ice melted = 32000/80 = 400 g, eight times the mass of the steam." },
            { "q": "[JEE Advanced] In an insulated vessel, 10 g of ice at 0 °C is mixed with 10 g of steam at 100 °C. Find the final temperature and the masses of water and steam at equilibrium.", "a": "Cold side to water at 100 °C needs 10(80) + 10(1)(100) = 1800 cal. The steam can release 10 × 540 = 5400 cal just by condensing, far more, so the mixture is pinned at 100 °C and only PART of the steam condenses: 1800/540 = 3.33 g. Final state: 100 °C, about 13.3 g water and 6.7 g steam." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Skipping the latent-heat step.</b> The number-one error in the topic. In any ice or steam problem <i>mL</i> comes BEFORE you spend heat on warming. Treating a melt or a boil as if it were <i>mc</i>Δ<i>T</i>, or ignoring it altogether, wrecks the whole balance.",
            "<b>Assuming the final state.</b> Never write <i>let the final temperature be T</i> before the budget check. The hot side may not have enough heat to melt all the ice, or it may have far too much, leaving a steam-and-water mixture pinned at 100 °C.",
            "<b>Dropping the calorimeter.</b> The container absorbs heat too. Include <i>m<sub>c</sub>c<sub>c</sub></i>, or fold it in as a water equivalent <i>w</i> = <i>m<sub>c</sub>c<sub>c</sub></i>/<i>c</i><sub>water</sub>, which is a mass in grams and simply adds to the water already there. And if a water-equivalent experiment ever returns a NEGATIVE <i>w</i>, do not report it: the cold side gained more heat than the hot side lost, which means the box was not insulated and the data violates the assumption behind the formula.",
            "<b>Colliding units mid-problem.</b> Never mix cal-units with SI halfway through. Fix one system at the start: 1 cal = 4.186 J, <i>L<sub>f</sub></i> = 80 cal/g = 3.34 × 10<sup>5</sup> J/kg, <i>L<sub>v</sub></i> = 540 cal/g = 2.26 × 10<sup>6</sup> J/kg.",
            "<b>Treating <i>c</i> as a universal constant of the substance.</b> It is a property of the material, but it drifts with temperature, and over a wide range you must integrate rather than multiply. For water from 0 to 100 °C the drift is under about 1 percent and can be ignored; for a metal cooled towards absolute zero it cannot."
          ]
        },
        {
          "t": "protip",
          "html": "build a running heat budget in calories, because water's specific heat is exactly 1 and the arithmetic goes mental. tally what the hot side can supply, then spend it on the cold side's milestones in order, warm, melt, warm, boil. the leg where your budget runs out pins down both the final temperature and the final composition, instantly and without guessing. one extension worth knowing: when the specific heat is given as a function of temperature, say c = c<sub>0</sub> + βT, you cannot multiply, you must integrate, Q = m[c<sub>0</sub>ΔT + (β/2)(T<sub>2</sub><sup>2</sup> − T<sub>1</sub><sup>2</sup>)]. and a pleasant shortcut hides in there: when c is LINEAR in T, using the average c, evaluated at the midpoint temperature, gives exactly the same answer. for any non-linear c it does not, so check the form before you take that shortcut."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>Q</i> = <i>mc</i>Δ<i>T</i> · <i>Q</i> = <i>mL</i>", "note": "the first for warming, the second for a phase change at constant T" },
            { "f": "Σ <i>Q</i><sub>lost</sub> = Σ <i>Q</i><sub>gained</sub>", "note": "insulated, no reaction, and the calorimeter counts as one of the bodies" },
            { "f": "<i>C</i> = <i>mc</i> · <i>w</i> = <i>mc</i>/<i>c</i><sub>water</sub>", "note": "heat capacity in J/K; water equivalent is the same thing as a mass of water" },
            { "f": "<i>c</i><sub>water</sub> = 4186 J/kg K · <i>L<sub>f</sub></i> ≈ 3.34 × 10<sup>5</sup> · <i>L<sub>v</sub></i> = 2.26 × 10<sup>6</sup> J/kg", "note": "or 1, 80 and 540 in cal/g units" },
            { "f": "flat plateaus at 0 °C and 100 °C on the heating curve", "note": "temperature frozen while heat goes into latent heat; the boiling plateau is far the longer" },
            { "f": "never assume the final state, budget first", "note": "the leg where the heat runs out fixes both the temperature and the composition" }
          ],
          "aids": [
            "\"warm, melt, warm, boil, warm: five legs, two of them flat\"",
            "\"budget before you balance\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Conduction, Convection and the Resistance Analogy",
      "chip": "03 CONDUCTION",
      "kalam": "the poor conductor hogs the temperature drop",
      "blocks": [
        {
          "t": "p",
          "html": "Hold a steel spoon in a cup of hot chai and within seconds the far end, the bit your fingers are on, turns uncomfortably warm. You never moved the spoon. Nothing visibly travelled. Yet energy clearly crawled from the hot end to the cold end. That silent, particle-to-particle relay is <b>conduction</b>, the first of the three ways heat moves from a hotter place to a cooler one."
        },
        {
          "t": "p",
          "html": "In conduction the material itself stays put. Near the hot end, atoms vibrate more violently; they jostle their neighbours, who jostle <i>their</i> neighbours, and the agitation marches down the rod like a whispered message passed along a row of seated people, each person staying in their seat while only the message travels. In metals there is a second, faster courier: free electrons, which drift and carry energy bodily. That extra channel is exactly why metals conduct heat, and electricity, so much better than wood or glass or plastic. A metal door handle and a wooden one in the same room are at the <i>same</i> temperature, but the metal feels colder because it whisks heat out of your warm hand far faster. Your skin, not the handle, is what you are really sensing."
        },
        {
          "t": "think",
          "html": "picture heat flow as water through a pipe. the temperature difference ΔT is the pressure pushing it, and the heat current H is the flow rate. a short, wide, smooth pipe lets water gush; a long, narrow, clogged one chokes it. so define a thermal resistance R = L ÷ KA and you get H = ΔT ÷ R, which is ohm's law with temperature difference playing voltage and heat current playing current. that one analogy turns frightening multi-rod problems into ordinary circuit problems, and this topic leans on it hard."
        },
        {
          "t": "p",
          "html": "How fast does heat conduct? On four sensible things, all bundled into <b>Fourier's law</b>. Heat flows faster through a fatter conductor, bigger area <i>A</i>; faster when the two ends differ more in temperature, bigger Δ<i>T</i>; slower along a longer path, bigger <i>L</i>; and the material's own willingness to conduct is captured by <i>K</i>, the <b>thermal conductivity</b>. Copper's <i>K</i> is about 400 W/m K and aluminium's about 235, while glass is 0.8, wood 0.1 and still air 0.025. That range of sixteen thousand to one is the whole reason a woollen blanket warms you: wool is not hot, it simply has a tiny <i>K</i>, made tinier by the air it traps, so it throttles the escape of your body heat."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.5 · THE TWO CONTACT MODES",
          "chips": ["conduction", "convection"],
          "captions": [
            "Conduction. The rod bridges a hot reservoir and a cold one, and a steady heat current H flows along it while not one atom of the rod travels anywhere. The hatched blocks are the two reservoirs, held at fixed temperatures.",
            "Convection. Water at the bottom of the pot is heated, expands, becomes less dense and physically RISES, while cooler dense water sinks to take its place. The fluid carries its heat with it as it moves, which is why this mode cannot happen in a solid and cannot happen in a vacuum."
          ],
          "frames": [
            {
              "x": [-0.5, 10.5], "y": [-2.6, 2.6], "axes": "none", "aspect": 0.5,
              "polys": [
                { "pts": [[0, -2], [1.5, -2], [1.5, 2], [0, 2]], "close": true, "fill": "hatch" },
                { "pts": [[8.5, -2], [10, -2], [10, 2], [8.5, 2]], "close": true, "fill": "hatch" },
                { "pts": [[1.5, -0.5], [8.5, -0.5], [8.5, 0.5], [1.5, 0.5]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [2, 0], "to": [8, 0], "tone": "amber", "label": "H", "at": "above" }
              ],
              "labels": [
                { "x": 0.75, "y": 2.3, "text": "T₁ (hot)" },
                { "x": 9.0, "y": 2.3, "text": "T₂ (cold)" }
              ]
            },
            {
              "x": [-0.5, 8.5], "y": [-1.6, 6.0], "axes": "none", "aspect": 0.72,
              "polys": [
                { "pts": [[1, 4.4], [1, 0], [7, 0], [7, 4.4]], "tone": "ink" },
                { "pts": [[1, 0], [7, 0], [7, 3.4], [1, 3.4]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [4, 0.5], "to": [4, 2.9], "tone": "amber", "label": "warm rises" },
                { "from": [4, 2.9], "to": [6.3, 2.9], "tone": "amber" },
                { "from": [6.3, 2.9], "to": [6.3, 0.5], "tone": "amber", "label": "cool sinks" },
                { "from": [6.3, 0.5], "to": [4.2, 0.5], "tone": "amber" },
                { "from": [2.5, -1.2], "to": [2.5, -0.15], "tone": "red" },
                { "from": [4, -1.2], "to": [4, -0.15], "tone": "red" },
                { "from": [5.5, -1.2], "to": [5.5, -0.15], "tone": "red" }
              ],
              "labels": [
                { "x": 4, "y": 5.2, "text": "convection current" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Conduction is hopeless in a pot of water heated from below, because water is a poor conductor. So how does the whole pot get hot? The heated water at the bottom <b>expands, becomes less dense and rises</b>, while cooler dense water sinks to take its place. The fluid literally carries its heat with it. That bulk transport by a moving fluid is <b>convection</b>, and it needs a fluid free to flow: it cannot happen in a solid. Convection runs our world. The <b>sea breeze</b> on a Chennai afternoon exists because land, with its low specific heat, heats faster than the sea; air over the hot land rises and cooler sea air rushes in underneath. At night the flow reverses into a <b>land breeze</b>. The same physics, scaled up enormously, drives the monsoon. When buoyancy does the pushing we call it <b>natural</b> convection; when a fan or a pump does, <b>forced</b> convection, of which your own blood circulation is a beautiful biological example."
        },
        {
          "t": "def",
          "term": "Steady state, the condition that makes the formula legal",
          "html": "<i>H</i> = <i>KA</i>Δ<i>T</i>/<i>L</i> is not a universal law; it is what Fourier's law becomes once the rod has settled. <b>Steady state</b> means the temperature at every point has stopped changing with time, so the SAME heat current passes through every cross-section: nothing accumulates anywhere. Three assumptions ride on that. One, the rod's curved surface is perfectly insulated, so heat flows only along its length and never leaks sideways. Two, the cross-section is uniform and <i>K</i> is constant. Three, we are past the transient stage. If the rod is still warming up, the heat current genuinely differs from point to point along it and the formula simply does not apply."
        },
        {
          "t": "defgrid",
          "title": "Conductivity, resistance, and how they combine",
          "rows": [
            { "k": "<i>K</i>, conductivity", "v": "SI unit W/m K, dimensions [M L T<sup>−3</sup> Θ<sup>−1</sup>]. A property of the material alone" },
            { "k": "Values worth knowing", "v": "copper ≈ 400, aluminium ≈ 235, glass ≈ 0.8, wood ≈ 0.1, still air ≈ 0.025 W/m K" },
            { "k": "<i>R</i>, thermal resistance", "v": "<i>R</i> = <i>L</i>/<i>KA</i>, unit K/W. Depends on the shape as well as the material" },
            { "k": "Temperature gradient", "v": "(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>, unit K/m. The steepness of the fall along the rod" },
            { "k": "Series, end to end", "v": "<i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>. <i>H</i> is COMMON; Δ<i>T</i> divides in proportion to <i>R</i>" },
            { "k": "Parallel, side by side", "v": "1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>. Δ<i>T</i> is COMMON; the currents add" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FOURIER'S LAW OF CONDUCTION",
          "tag": "steady state only",
          "main": "<i>H</i> = <i>dQ</i>/<i>dt</i> = <i>KA</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>",
          "legend": [
            "<i>H</i> is the heat current, the rate of heat flow, in watt (W); <i>K</i> is the thermal conductivity in W/m K",
            "<i>A</i> is the cross-sectional area in m<sup>2</sup>, <i>L</i> the length of the conducting path in m, and (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) the temperature difference across the ends in K",
            "for a cylindrical rod <i>A</i> = π<i>r</i><sup>2</sup>, so doubling the radius QUADRUPLES the heat current, and forgetting this is the most expensive slip in the topic"
          ],
          "note": "the law says nothing whatever about convection or radiation. Those obey entirely different rules, and a body losing heat by all three modes needs all three accounted separately."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THERMAL-RESISTANCE NETWORK",
          "main": "<i>R</i> = <i>L</i>/<i>KA</i> · <i>H</i> = Δ<i>T</i>/<i>R</i><br>series: <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub><br>parallel: 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub><br>junction, equal <i>A</i> and <i>L</i>: <i>T</i><sub>2</sub> = (<i>K</i><sub>1</sub><i>T</i><sub>1</sub> + <i>K</i><sub>2</sub><i>T</i><sub>3</sub>)/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)",
          "legend": [
            "<i>R</i> is the thermal resistance in K/W, and <i>H</i> = Δ<i>T</i>/<i>R</i> is structurally identical to <i>I</i> = <i>V</i>/<i>R</i>: temperature difference plays voltage, heat current plays current",
            "<i>T</i><sub>1</sub> and <i>T</i><sub>3</sub> are the two outer reservoir temperatures in K or °C and <i>T</i><sub>2</sub> is the junction between them, a weighted average that sits CLOSER to the better conductor's reservoir",
            "for two rods of equal length and area in parallel the combination behaves as one rod of conductivity <i>K</i><sub>eq</sub> = (<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/2"
          ],
          "note": "the junction shortcut is worth carrying in your pocket. It cracks a whole class of MCQs in seconds, and it is just series resistances rearranged."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SERIES AND PARALLEL, TAP A LINE",
          "steps": [
            {
              "eq": "rewrite Fourier's law as <i>H</i> = Δ<i>T</i>/(<i>L</i>/<i>KA</i>), and define <i>R</i> ≡ <i>L</i>/<i>KA</i>",
              "why": "Nothing has been assumed; the law has only been rearranged. But it now has the shape of Ohm's law, which lets us combine conductors with the arithmetic students already trust from circuits."
            },
            {
              "eq": "series: in steady state the SAME <i>H</i> flows through both rods",
              "why": "This is the key physical fact. If more heat flowed into the junction than out of it, the junction would keep heating up, contradicting steady state. Nothing accumulates, so the current is common."
            },
            {
              "eq": "<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = <i>HR</i><sub>1</sub> and <i>T</i><sub>2</sub> − <i>T</i><sub>3</sub> = <i>HR</i><sub>2</sub>, so adding: <i>T</i><sub>1</sub> − <i>T</i><sub>3</sub> = <i>H</i>(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)",
              "why": "The junction temperature cancels when you add. Comparing with <i>T</i><sub>1</sub> − <i>T</i><sub>3</sub> = <i>HR</i><sub>eq</sub> gives <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>: series resistances add, and the larger DROP appears across the larger resistance, exactly as voltage does across a bigger resistor."
            },
            {
              "eq": "parallel: both rods span the same hot and cold faces, so both have the same Δ<i>T</i>",
              "why": "Side by side, not end to end. Now it is the temperature difference that is common and the currents that are free to differ."
            },
            {
              "eq": "<i>H</i> = <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = Δ<i>T</i>(1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>), so 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>",
              "why": "The total heat delivered is the sum of what each path carries, because the two paths are independent. Writing it as <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub> identifies the reciprocal sum. Conductances add in parallel, resistances add in series: the same two rules, and now you know why each one is true here rather than merely borrowed."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.6 · TWO RODS IN SERIES",
          "chips": ["the same current", "where the drop goes"],
          "captions": [
            "A copper rod and a steel rod joined end to end between reservoirs at T₁ and T₃. In steady state the same heat current H passes through both, because nothing may accumulate at the junction, and that single fact fixes the junction temperature T₂.",
            "Temperature along the composite rod, for copper at K = 400 and steel at K = 50, each 0.50 m, with ends at 100 °C and 0 °C. The line kinks at the junction: copper's tiny resistance costs only 11 degrees over its whole length, while the steel spends the remaining 89. The POOR conductor hogs the drop."
          ],
          "frames": [
            {
              "x": [-0.5, 10.5], "y": [-2.6, 2.6], "axes": "none", "aspect": 0.5,
              "polys": [
                { "pts": [[0, -2], [1, -2], [1, 2], [0, 2]], "close": true, "fill": "hatch" },
                { "pts": [[9, -2], [10, -2], [10, 2], [9, 2]], "close": true, "fill": "hatch" },
                { "pts": [[1, -0.6], [5, -0.6], [5, 0.6], [1, 0.6]], "close": true, "fill": "wash", "tone": "soft", "label": "K₁, R₁" },
                { "pts": [[5, -0.6], [9, -0.6], [9, 0.6], [5, 0.6]], "close": true, "tone": "ink", "label": "K₂, R₂" }
              ],
              "arrows": [
                { "from": [2, 1.5], "to": [8, 1.5], "tone": "amber", "label": "H, same in both" }
              ],
              "labels": [
                { "x": 0.5, "y": 2.3, "text": "T₁" },
                { "x": 5, "y": -1.6, "text": "T₂" },
                { "x": 9.5, "y": 2.3, "text": "T₃" }
              ]
            },
            {
              "x": [0, 1.05], "y": [-8, 110],
              "axisX": "x (m)", "axisY": "T (°C)",
              "ticksX": { "at": [0, 0.5, 1.0] },
              "ticksY": { "at": [0, 50, 100] },
              "curves": [
                { "c": "pts", "pts": [[0, 100], [0.5, 88.9], [1.0, 0]] },
                { "c": "vline", "x": 0.5, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0.5, "y": 88.9, "label": "88.9 °C", "at": "ne" }
              ],
              "labels": [
                { "x": 0.25, "y": 60, "text": "copper" },
                { "x": 0.75, "y": 60, "text": "steel" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Treating a conduction problem as a DC circuit",
          "steps": [
            "<b>Redraw the geometry as a network.</b> Rods END TO END are in series, resistances add and the heat current is common. Rods SIDE BY SIDE spanning the same two faces are in parallel, conductances add and the temperature difference is common.",
            "<b>Replace every segment by <i>R</i> = <i>L</i>/<i>KA</i>.</b> Convert all lengths to metres and all areas to square metres first, and remember that a rod of radius <i>r</i> has area π<i>r</i><sup>2</sup>.",
            "<b>Reduce the network to a single <i>R</i><sub>eq</sub></b> using the two combination rules, working from the innermost pair outwards, exactly as you would with resistors.",
            "<b>Get the total current from <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub></b>, using the full temperature difference across the whole network.",
            "<b>Read junction temperatures off as voltage drops.</b> Starting from a known end, subtract <i>HR</i> for each segment you cross. Then check the sense of the answer: the junction should sit nearer the reservoir attached through the SMALLER resistance."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.7 · A FREEZING POND",
          "chips": ["ice grows downward"],
          "captions": [
            "New ice forms at the BOTTOM of the sheet, at the ice-water boundary held at 0 °C. The latent heat released by that freezing has to conduct upward through the ice already there, thickness x, to reach the cold air. So as the sheet thickens, the conduction path lengthens and the freezing slows. The rate is not constant, which is why this problem needs an integral and why the second centimetre of ice takes far longer than the first."
          ],
          "frames": [
            {
              "x": [-0.5, 10.5], "y": [-3.8, 4.0], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[0.5, 3.6], [0.5, -3.4], [9.5, -3.4], [9.5, 3.6]], "tone": "ink" },
                { "pts": [[0.5, 0], [9.5, 0], [9.5, 1.7], [0.5, 1.7]], "close": true, "fill": "wash", "tone": "soft", "label": "ice, thickness x" },
                { "pts": [[0.5, -0.5], [9.5, -0.5], [9.5, 0], [0.5, 0]], "close": true, "fill": "wash", "tone": "amber", "dash": true }
              ],
              "arrows": [
                { "from": [3, -0.3], "to": [3, 2.6], "tone": "red", "label": "heat", "at": "end" }
              ],
              "labels": [
                { "x": 5, "y": 3.1, "text": "air at −10 °C" },
                { "x": 5, "y": -2.3, "text": "water at 0 °C" },
                { "x": 8.2, "y": -0.25, "text": "dx" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A glass windowpane measures 1.5 m by 1.0 m and is 4.0 mm thick. On a winter day the inside surface is at 22 °C and the outside surface at 8 °C. Find the rate at which heat is conducted out. Take <i>K</i><sub>glass</sub> = 0.80 W/m K.",
          "steps": [
            "Given: <i>A</i> = 1.5 × 1.0 = 1.5 m<sup>2</sup>, <i>L</i> = 4.0 × 10<sup>−3</sup> m, Δ<i>T</i> = 22 − 8 = 14 K.",
            "<i>H</i> = <i>KA</i>Δ<i>T</i>/<i>L</i> = (0.80)(1.5)(14)/(4.0 × 10<sup>−3</sup>).",
            "<i>H</i> = 16.8/(4.0 × 10<sup>−3</sup>) = 4200 W = 4.2 kW.",
            "Over four kilowatts through one thin pane, which is exactly why double glazing traps a layer of low-<i>K</i> air between two sheets: the air's <i>K</i> of 0.025 makes even a thin gap a far larger resistance than the glass itself."
          ],
          "ans": "H = 4200 W = 4.2 kW"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A metal rod conducts heat at a steady rate <i>H</i> for a fixed temperature difference between its ends. Its length is halved and its radius is doubled. What is the new rate of conduction?",
          "steps": [
            "The trap is to adjust for length and radius but to forget that a rod's cross-section goes as <i>r</i><sup>2</sup>, not <i>r</i>. Students write <i>double the radius, double the area</i> and land on 4<i>H</i>.",
            "With Δ<i>T</i> and <i>K</i> fixed, <i>H</i> ∝ <i>A</i>/<i>L</i> ∝ <i>r</i><sup>2</sup>/<i>L</i>.",
            "Radius doubled multiplies <i>r</i><sup>2</sup> by 2<sup>2</sup> = 4. Length halved means dividing by <i>L</i>/2, which multiplies by 2.",
            "<i>H</i><sub>new</sub> = <i>H</i> × 4 × 2 = 8<i>H</i>. For circular rods, always think <i>r</i><sup>2</sup>: a doubled radius is a fourfold area, and that single reflex saves you from the commonest conduction error there is."
          ],
          "ans": "8H"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A copper rod (<i>K</i><sub>1</sub> = 400 W/m K) and a steel rod (<i>K</i><sub>2</sub> = 50 W/m K), each 0.50 m long and of cross-section 4.0 cm<sup>2</sup>, are joined end to end. The free copper end is held at 100 °C and the free steel end at 0 °C. Find the rate of heat flow and the junction temperature in steady state.",
          "steps": [
            "Treat it as a circuit. With <i>A</i> = 4.0 × 10<sup>−4</sup> m<sup>2</sup>: <i>R</i><sub>1</sub> = 0.50/[(400)(4.0 × 10<sup>−4</sup>)] = 0.50/0.16 = 3.125 K/W.",
            "<i>R</i><sub>2</sub> = 0.50/[(50)(4.0 × 10<sup>−4</sup>)] = 0.50/0.02 = 25.0 K/W. In series, <i>R</i><sub>eq</sub> = 3.125 + 25.0 = 28.125 K/W.",
            "<i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub> = (100 − 0)/28.125 ≈ 3.56 W.",
            "Junction temperature, dropping from the hot end: <i>T</i><sub>j</sub> = 100 − <i>HR</i><sub>1</sub> = 100 − (3.56)(3.125) ≈ 88.9 °C.",
            "The junction sits very close to the HOT end, because copper's tiny resistance produces only an 11-degree drop while the steel spends the remaining 89. The poor conductor hogs the temperature difference, exactly as a large resistor hogs the voltage."
          ],
          "ans": "H ≈ 3.56 W · junction ≈ 88.9 °C"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A still pond is covered by a 4.0 cm layer of ice. The air above stays at −10 °C while the water just below the ice is at 0 °C. How long will the ice take to thicken from 4.0 cm to 6.0 cm? Take <i>K</i><sub>ice</sub> = 2.2 W/m K, ρ<sub>ice</sub> = 920 kg/m<sup>3</sup>, <i>L<sub>f</sub></i> = 3.36 × 10<sup>5</sup> J/kg.",
          "steps": [
            "Physical picture first. New ice forms at the BOTTOM of the sheet, at 0 °C, and the latent heat it releases must conduct UPWARD through the existing thickness <i>x</i> to reach the cold air. As the sheet thickens the path lengthens and the freezing slows, so the rate is not constant and we must integrate.",
            "Heat conducted up through thickness <i>x</i>, per area <i>A</i>: <i>dQ</i>/<i>dt</i> = <i>KA</i>θ/<i>x</i>, with θ = 0 − (−10) = 10 K.",
            "Heat released by freezing a layer <i>dx</i>: the mass frozen is ρ<i>A dx</i>, so <i>dQ</i> = ρ<i>L<sub>f</sub>A dx</i>. Equating the two and separating variables gives <i>x dx</i> = (<i>K</i>θ/ρ<i>L<sub>f</sub></i>) <i>dt</i>.",
            "Integrating from <i>x</i><sub>1</sub> = 0.04 m to <i>x</i><sub>2</sub> = 0.06 m: <i>t</i> = ρ<i>L<sub>f</sub></i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)/(2<i>K</i>θ).",
            "<i>t</i> = (920)(3.36 × 10<sup>5</sup>)(0.0036 − 0.0016)/[2(2.2)(10)] = (3.0912 × 10<sup>8</sup>)(2.0 × 10<sup>−3</sup>)/44 ≈ 1.4 × 10<sup>4</sup> s ≈ 3.9 hours.",
            "The crucial insight is that the thickening time scales as <i>x</i><sup>2</sup>, so the second centimetre takes far longer than the first. That is why a frozen lake's ice grows quickly at first and then crawls."
          ],
          "ans": "t ≈ 1.4 × 10<sup>4</sup> s, about 3.9 hours"
        },
        {
          "t": "mcq",
          "q": "Which mode or modes of heat transfer can carry energy across a perfect vacuum?",
          "opts": [
            { "label": "conduction only", "nudge": "Conduction needs a material lattice to pass vibrations along, and a vacuum has none." },
            { "label": "convection only", "nudge": "Convection needs a fluid free to move, and a vacuum has no fluid to carry anything." },
            { "label": "radiation only", "nudge": null },
            { "label": "all three", "nudge": "The careless more-is-safer pick. It ignores that two of the three modes are flatly impossible without matter." }
          ],
          "correct": 2,
          "solution": "Only radiation travels through empty space, which is how the Sun's energy crosses 150 million kilometres of near-vacuum to reach Earth."
        },
        {
          "t": "mcq",
          "q": "On a cold morning a metal chair feels much colder to the touch than a wooden chair beside it, even though both are at the same temperature. This is because the metal:",
          "opts": [
            { "label": "is actually at a lower temperature", "nudge": "This contradicts the given, that both are at room temperature. It is the classic trap: you are sensing your own skin, not the chair." },
            { "label": "conducts heat away from your hand much faster than wood", "nudge": null },
            { "label": "has a higher specific heat than wood", "nudge": "A real property, but not the cause. The sensation is about the RATE at which heat leaves your hand, which is conductivity, not capacity." },
            { "label": "radiates more heat than wood", "nudge": "Polished metal is in fact a poor emitter, and in any case radiation is negligible over a contact of a few seconds at room temperature." }
          ],
          "correct": 1,
          "solution": "The metal's high thermal conductivity drains heat from your warm skin rapidly, so your nerves register cold. Wood, a poor conductor, barely draws any heat away."
        },
        {
          "t": "mcq",
          "q": "During the daytime near a coast, a cool breeze blows from the sea toward the land. The best explanation is:",
          "opts": [
            { "label": "the sea is hotter than the land, so air flows from hot to cold", "nudge": "This inverts the temperatures. By afternoon the LAND is hotter, because its specific heat is much lower than water's." },
            { "label": "the land heats faster than the sea, so air over the land rises and cooler sea air moves in to replace it", "nudge": null },
            { "label": "the wind is caused purely by the Earth's rotation", "nudge": "Rotation deflects large-scale winds but cannot create a breeze that reverses direction between day and night." },
            { "label": "water vapour from the sea pushes the air inland", "nudge": "Evaporation adds vapour but supplies no push. The driver here is a density difference set up by differential heating." }
          ],
          "correct": 1,
          "solution": "Land has the lower specific heat, so by afternoon it is hotter. The warm air above it rises by natural convection and denser cool air from over the sea flows in underneath: the sea breeze. At night the whole circulation reverses."
        },
        {
          "t": "mcq",
          "q": "Two rods of the same length and cross-section but different conductivities are joined in series, with their outer ends held at fixed different temperatures. In steady state:",
          "opts": [
            { "label": "the heat current is larger in the rod with higher conductivity", "nudge": "This violates steady-state continuity: if the currents differed, heat would pile up at the junction and the temperature there would keep changing." },
            { "label": "the temperature drop is larger across the rod with lower conductivity", "nudge": null },
            { "label": "the temperature drop is the same across both rods", "nudge": "That would hold only if the two resistances happened to be equal, which different conductivities rule out." },
            { "label": "the better conductor has the larger temperature drop", "nudge": "Exactly backwards. The poor conductor takes the big drop, like a large resistor takes the big share of the voltage." }
          ],
          "correct": 1,
          "solution": "In series the heat current is identical in both rods, so the drop ΔT = HR is largest where R = L/KA is largest, that is across the lower-conductivity rod."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A brick wall of a cold-storage room measures 5.0 m by 3.0 m and is 20 cm thick. The outside is at 40 °C and the inside at 25 °C. Find the rate at which heat enters. Take <i>K</i><sub>brick</sub> = 0.70 W/m K.", "a": "<i>A</i> = 15 m<sup>2</sup>, <i>L</i> = 0.20 m, Δ<i>T</i> = 15 K. <i>H</i> = (0.70)(15)(15)/0.20 = 157.5/0.20 ≈ 788 W." },
            { "q": "[NEET] Two rods of the same material: rod P has length <i>L</i> and radius <i>r</i>; rod Q has length 2<i>L</i> and radius 2<i>r</i>. For the same temperature difference, find <i>H</i><sub>P</sub> : <i>H</i><sub>Q</sub>.", "a": "<i>H</i> ∝ <i>r</i><sup>2</sup>/<i>L</i>. For Q that is 4<i>r</i><sup>2</sup>/2<i>L</i> = 2<i>r</i><sup>2</sup>/<i>L</i>, twice P's. So <i>H</i><sub>P</sub> : <i>H</i><sub>Q</sub> = 1 : 2." },
            { "q": "[JEE Main] Two rods of equal length and cross-section, of conductivities 200 and 100 W/m K, are placed side by side between the same hot and cold faces. Find the equivalent conductivity.", "a": "Side by side is parallel with equal <i>A</i> and <i>L</i>, so <i>K</i><sub>eq</sub> = (200 + 100)/2 = 150 W/m K, the plain average." },
            { "q": "[JEE Main] One end of a copper rod (<i>K</i> = 400 W/m K) of length 1.0 m and cross-section 5.0 cm<sup>2</sup> is held at 100 °C; the other touches ice at 0 °C. Find the rate at which ice melts. Take <i>L<sub>f</sub></i> = 3.36 × 10<sup>5</sup> J/kg.", "a": "<i>H</i> = (400)(5.0 × 10<sup>−4</sup>)(100)/1.0 = 20 W. Melting rate = <i>H</i>/<i>L<sub>f</sub></i> = 20/(3.36 × 10<sup>5</sup>) ≈ 5.95 × 10<sup>−5</sup> kg/s, about 0.21 kg per hour." },
            { "q": "[JEE Advanced] A steel steam pipe (<i>r</i><sub>1</sub> = 5.0 cm, <i>r</i><sub>2</sub> = 6.0 cm, <i>K</i> = 50 W/m K) is lagged with 4.0 cm of glass wool (<i>K</i> = 0.08 W/m K). Steam inside is at 150 °C and the outer wool surface at 25 °C. Find the heat loss per metre and the steel-wool interface temperature. Use the cylindrical resistance from the pro-tip.", "a": "Per metre, <i>R</i><sub>steel</sub> = ln(0.060/0.050)/(2π × 50) = 5.80 × 10<sup>−4</sup> K/W and <i>R</i><sub>wool</sub> = ln(0.100/0.060)/(2π × 0.08) = 1.016 K/W, some 1750 times larger. <i>H</i> = 125/1.0166 ≈ 123 W per metre, and the interface sits at 150 − (123)(5.80 × 10<sup>−4</sup>) ≈ 149.9 °C, essentially the steam temperature: the steel offers almost no resistance at all." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting that <i>A</i> ∝ <i>r</i><sup>2</sup>.</b> A cylindrical rod's cross-section is π<i>r</i><sup>2</sup>, so doubling the radius QUADRUPLES the area and the heat current. Many marks are lost to this single stray factor.",
            "<b>Confusing series with parallel.</b> Rods END TO END are in series: resistances add and the heat current is common. Rods SIDE BY SIDE spanning the same faces are in parallel: conductances add and the temperature difference is common. Map the geometry onto a circuit before computing anything.",
            "<b>Sharing Δ<i>T</i> equally in series.</b> It is the CURRENT that is shared, not the drop. Δ<i>T</i> divides in proportion to each resistance, so the poor conductor takes the bigger fall, and a question that asks for the junction temperature is usually testing exactly this.",
            "<b>Applying the formula in the transient stage.</b> <i>H</i> = <i>KA</i>Δ<i>T</i>/<i>L</i> holds only in steady state. If the rod is still warming up, the heat current genuinely differs along its length and the formula does not apply.",
            "<b>Using the slab resistance on a pipe or a shell.</b> <i>R</i> = <i>L</i>/<i>KA</i> assumes a constant cross-section. When the area grows with radius, as it does for a pipe wall or a spherical shell, that formula is simply the wrong one and you must integrate; the pro-tip below gives both results."
          ]
        },
        {
          "t": "protip",
          "html": "treat every conduction problem as a DC circuit. replace each segment by R = L ÷ KA, redraw the network, and use H = ΔT ÷ R<sub>eq</sub> with the series and parallel rules you already trust. junction temperatures then fall out as voltage drops, and the scariest multi-rod question becomes routine arithmetic. two more resistances are worth carrying, because the area is not constant in either and the slab formula fails. for a pipe wall of length L between radii r<sub>1</sub> and r<sub>2</sub>, R = ln(r<sub>2</sub>/r<sub>1</sub>) ÷ 2πKL. for a spherical shell, R = (r<sub>2</sub> − r<sub>1</sub>) ÷ 4πKr<sub>1</sub>r<sub>2</sub>, and letting r<sub>2</sub> run off to infinity, a small hot sphere buried in a huge block, collapses that neatly to R = 1 ÷ 4πKr<sub>1</sub>. both are in K/W, both go straight into the same series and parallel arithmetic."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>H</i> = <i>dQ</i>/<i>dt</i> = <i>KA</i>Δ<i>T</i>/<i>L</i>", "note": "steady state only; H is in watt" },
            { "f": "<i>R</i> = <i>L</i>/<i>KA</i> · <i>H</i> = Δ<i>T</i>/<i>R</i>", "note": "temperature difference is voltage, heat current is current" },
            { "f": "series <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> · parallel 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>", "note": "series shares H, parallel shares ΔT" },
            { "f": "junction: <i>T</i><sub>2</sub> = (<i>K</i><sub>1</sub><i>T</i><sub>1</sub> + <i>K</i><sub>2</sub><i>T</i><sub>3</sub>)/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)", "note": "for equal A and L; sits nearer the better conductor's end" },
            { "f": "ice on a pond: <i>t</i> = ρ<i>L<sub>f</sub></i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)/2<i>K</i>θ", "note": "time goes as thickness SQUARED, so growth crawls" },
            { "f": "convection needs a fluid free to move", "note": "natural is buoyancy-driven, forced is pump or fan driven; neither works in a solid or a vacuum" }
          ],
          "aids": [
            "\"solids conduct, fluids convect, vacuum only radiates\"",
            "\"the poor conductor hogs the drop\"",
            "\"a doubled radius is a fourfold area\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Radiation, Stefan's Law and Cooling",
      "chip": "04 RADIATION",
      "kalam": "kelvin, always kelvin, before you take a fourth power",
      "blocks": [
        {
          "t": "p",
          "html": "Stand outside on a clear winter morning in Delhi. The air is freezing, yet the instant the Sun clears the rooftops you feel its warmth on your face. That warmth did not arrive by conduction, because air is a poor conductor. It did not arrive by convection, because the Sun's heat crossed 150 million kilometres of near-total vacuum where there is no fluid to carry anything. It arrived by <b>radiation</b>: energy emitted as electromagnetic waves that need <b>no medium at all</b>. That is the defining feature of the third mode, and the one thing you must never forget. Radiation alone can cross empty space."
        },
        {
          "t": "p",
          "html": "Here is the first surprising fact: <b>every object radiates, all the time, at every temperature</b>. You, this page, an ice cube, a star. This is <b>Prevost's theory of exchange</b>. A body is never switched off; it is always simultaneously emitting radiation to its surroundings and absorbing radiation from them, and what you observe as heating or cooling is only the <i>net</i> balance. A cup of chai in a cool room radiates faster than it absorbs, so it loses energy and cools. An ice cube in a warm room absorbs faster than it radiates, so it warms. And a body that reaches the temperature of its surroundings does not stop radiating: it radiates and absorbs at equal rates, a dynamic standoff we call thermal equilibrium."
        },
        {
          "t": "think",
          "html": "imagine a crowded room where everyone is continuously tossing tennis balls at everyone else and catching the ones thrown at them. each ball is a packet of radiant energy. a hot person throws faster than the room average, so if they throw more than they catch, their pile shrinks and they cool. a cold person catches more than they throw and their pile grows. eventually everyone throws and catches at the same rate: equilibrium, with balls still flying everywhere and nobody ever stopping. that ceaseless two-way exchange is exactly prevost's picture, and it is why an ice cube is still radiating at you."
        },
        {
          "t": "p",
          "html": "How fast a body radiates depends fiercely on its temperature. Double the <b>absolute</b> temperature and the radiated power leaps by a factor of <b>sixteen</b>, because power goes as the fourth power of temperature: that is the <b>Stefan-Boltzmann law</b>. Temperature also controls the <i>colour</i> of the glow. Heat an iron rod in a furnace and it glows dull red, then orange, then yellow, then white. As it gets hotter, the wavelength at which it radiates most strongly slides toward the <b>shorter</b>, bluer end of the spectrum: <b>Wien's displacement law</b>, hotter means bluer. It is the same physics that tells an astronomer a blue-white star is far hotter than a red one."
        },
        {
          "t": "p",
          "html": "Finally, a beautifully simple rule connects absorbing and emitting. Put a shiny polished can and a black-painted can of boiling water side by side and the black one cools noticeably faster. Why? Because <b>good absorbers of radiation are also good emitters</b>: that is <b>Kirchhoff's law</b>. A surface that greedily soaks radiation up also pours it out greedily. The ideal limit is a <b>black body</b>, which absorbs all radiation falling on it, reflecting and transmitting none, and therefore also emits at the maximum possible rate for its temperature. No real surface is perfectly black, but a small hole in a closed cavity comes astonishingly close, because any ray entering bounces around inside and is absorbed before it can find its way out. It is also why a thermos flask defeats all three modes at once: silvered walls reflect radiation, and the vacuum gap kills conduction and convection."
        },
        {
          "t": "def",
          "term": "Newton's law of cooling is an approximation, and it never lets a body overshoot",
          "html": "The exact statement is Stefan's: the net loss goes as <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>. Newton's law, that the rate of cooling is proportional to the excess temperature, is what that becomes when the excess is SMALL, and it is derived below rather than asserted. Two consequences worth holding on to. First, the cooling constant <i>k</i> is not a constant of the body alone: it contains the surroundings' temperature, the surface area, the emissivity and the heat capacity. Second, look at the limit. As the excess (<i>T</i> − <i>T</i><sub>0</sub>) goes to zero, so does the cooling rate, so the curve flattens ONTO the ambient temperature and approaches it asymptotically. <b>A body can never cool below its surroundings by this law</b>, and an answer that has it doing so has a sign error, not a discovery."
        },
        {
          "t": "defgrid",
          "title": "The four laws of radiation, in one table",
          "rows": [
            { "k": "Prevost exchange", "v": "every body emits at every temperature and absorbs from its surroundings; equilibrium is equal RATES, not silence" },
            { "k": "Stefan-Boltzmann", "v": "<i>P</i> = <i>e</i>σ<i>AT</i><sup>4</sup>, with σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup>, dimensions [M T<sup>−3</sup> Θ<sup>−4</sup>]" },
            { "k": "Wien displacement", "v": "λ<sub>m</sub><i>T</i> = <i>b</i>, with <i>b</i> = 2.9 × 10<sup>−3</sup> m K, dimensions [L Θ]. Hotter gives a smaller λ<sub>m</sub>" },
            { "k": "Kirchhoff", "v": "at a given temperature, emissivity equals absorptivity: a good absorber is a good emitter" },
            { "k": "Black body", "v": "absorbs everything incident, so absorptivity 1 and emissivity <i>e</i> = 1; the maximum emitter at every wavelength" },
            { "k": "Emissivity <i>e</i>", "v": "a pure number between 0 and 1, dimensionless. Do NOT confuse it with emissive power <i>E</i>, which is in W/m<sup>2</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · STEFAN-BOLTZMANN AND WIEN",
          "tag": "kelvin only, on pain of a fourth power",
          "main": "<i>P</i> = <i>e</i>σ<i>AT</i><sup>4</sup> (emitted)<br><i>P</i><sub>net</sub> = <i>e</i>σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)<br>λ<sub>m</sub><i>T</i> = <i>b</i>",
          "legend": [
            "<i>P</i> is radiated power in watt (W), <i>A</i> the surface area in m<sup>2</sup>, <i>e</i> the dimensionless emissivity, and <i>T</i> and <i>T</i><sub>0</sub> the ABSOLUTE temperatures of body and surroundings in kelvin",
            "σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup> is the Stefan constant; the emissive power <i>E</i> = <i>P</i>/<i>A</i> is in W/m<sup>2</sup>, and equals σ<i>T</i><sup>4</sup> for a black body",
            "λ<sub>m</sub> is the wavelength of peak emission in metres and <i>b</i> = 2.9 × 10<sup>−3</sup> m K is Wien's constant"
          ],
          "note": "for any by-what-factor question, skip the constants entirely and use ratios in kelvin: P₂/P₁ = (T₂/T₁)⁴ for power, and λ₂/λ₁ = T₁/T₂ for the peak wavelength."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NEWTON'S LAW OF COOLING",
          "tag": "valid only for a small excess temperature",
          "main": "−<i>dT</i>/<i>dt</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>), with <i>k</i> = 4<i>e</i>σ<i>AT</i><sub>0</sub><sup>3</sup>/<i>mc</i><br>practical form:<br>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>[(<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>]",
          "legend": [
            "<i>T</i> is the body's temperature and <i>T</i><sub>0</sub> the surroundings', <i>m</i> its mass in kg and <i>c</i> its specific heat in J/kg K; <i>k</i> is a positive constant with dimensions [T<sup>−1</sup>], so it is a pure inverse time",
            "the practical form cools a body from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub> in time <i>t</i> and uses the MEAN temperature over the interval, which turns a differential equation into one line of arithmetic",
            "because the difference (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) and the excess are both temperature DIFFERENCES, this form works unchanged in °C: it is the one place in this topic where you need not convert"
          ],
          "note": "the same 20-degree drop always takes LONGER the second time, because the body is now cooler and closer to the room. That slowing as you approach the surroundings is the entire character of the law."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · NEWTON'S LAW FROM STEFAN'S LAW, TAP A LINE",
          "steps": [
            {
              "eq": "net power lost: <i>P</i><sub>net</sub> = <i>e</i>σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)",
              "why": "Start from the exact statement. The body emits and absorbs simultaneously, so what it actually loses is the difference between the two, which is why the surroundings term must never be dropped."
            },
            {
              "eq": "that power comes out of the body's internal energy: −<i>mc</i> <i>dT</i>/<i>dt</i> = <i>e</i>σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)",
              "why": "Losing energy at a rate <i>P</i> drops the temperature at a rate <i>P</i>/<i>mc</i>, straight from <i>Q</i> = <i>mc</i>Δ<i>T</i> differentiated. The minus sign says the temperature is falling."
            },
            {
              "eq": "write <i>T</i> = <i>T</i><sub>0</sub> + Δ<i>T</i> with Δ<i>T</i> small, so <i>T</i><sup>4</sup> = <i>T</i><sub>0</sub><sup>4</sup>(1 + Δ<i>T</i>/<i>T</i><sub>0</sub>)<sup>4</sup> ≈ <i>T</i><sub>0</sub><sup>4</sup> + 4<i>T</i><sub>0</sub><sup>3</sup>Δ<i>T</i>",
              "why": "This is the crucial step and the only approximation in the whole derivation. Expanding by the binomial theorem and keeping ONLY the first-order term requires Δ<i>T</i>/<i>T</i><sub>0</sub> to be much less than 1, which is exactly where the phrase small excess enters. Everything downstream inherits that condition."
            },
            {
              "eq": "so <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> ≈ 4<i>T</i><sub>0</sub><sup>3</sup>Δ<i>T</i>, giving −<i>dT</i>/<i>dt</i> = (4<i>e</i>σ<i>AT</i><sub>0</sub><sup>3</sup>/<i>mc</i>)(<i>T</i> − <i>T</i><sub>0</sub>)",
              "why": "Substituting turns a fourth power into something linear in the excess. The whole bracket is a constant for a given body in given surroundings, so name it <i>k</i>."
            },
            {
              "eq": "−<i>dT</i>/<i>dt</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>), with <i>k</i> = 4<i>e</i>σ<i>AT</i><sub>0</sub><sup>3</sup>/<i>mc</i>",
              "why": "Newton's law, and the derivation shows two things a memoriser never sees. The constant <i>k</i> depends on the surroundings' temperature, the surface and the body's heat capacity, so it is not a property of the material alone. And the law is fundamentally an approximation: the higher-order binomial terms were thrown away, so for a large excess the full fourth-power behaviour dominates and the simple proportionality fails."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.8 · THE COOLING CURVE",
          "chips": ["how a body cools", "where Newton fails"],
          "captions": [
            "Temperature against time for a body cooling in a room at 25 °C. The fall is steep at first, when the excess is large, and flattens as the excess shrinks, because the rate is proportional to the excess itself. The dashed line is the surroundings: the curve approaches it asymptotically and never crosses it. Nothing here cools below the room.",
            "Why the small-excess condition matters. This plots the TRUE radiative rate, which goes as T⁴ − T₀⁴, divided by the rate Newton's linear law predicts, against the excess above a 300 K room. At zero excess they agree exactly, which is what the tangent line means. By a 100 K excess the true body is losing heat 1.6 times faster than Newton says, and by 200 K, 2.5 times faster."
          ],
          "frames": [
            {
              "x": [0, 18], "y": [0, 115],
              "axisX": "t (min)", "axisY": "T (°C)",
              "ticksX": { "every": 5 },
              "ticksY": { "at": [25, 50, 100] },
              "curves": [
                { "c": "exp", "a": 75, "k": -0.25, "d": 25 },
                { "c": "line", "m": 0, "k": 25, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 2.2, "y": 95, "text": "steep: big excess" },
                { "x": 12.5, "y": 40, "text": "surroundings T₀" }
              ]
            },
            {
              "x": [0, 210], "y": [0, 3],
              "axisX": "excess above 300 K", "axisY": "rate ratio",
              "ticksX": { "every": 50 },
              "ticksY": { "at": [1, 2, 3] },
              "curves": [
                { "c": "pts", "pts": [[0, 1], [25, 1.13], [50, 1.28], [75, 1.44], [100, 1.62], [125, 1.82], [150, 2.03], [175, 2.27], [200, 2.52]], "smooth": true },
                { "c": "line", "m": 0, "k": 1, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 50, "y": 2.55, "text": "Newton's line: ratio 1" },
                { "x": 145, "y": 0.6, "text": "gap grows with excess" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.9 · HOTTER MEANS BLUER",
          "chips": ["two black-body spectra"],
          "captions": [
            "How a black body's emission is spread across wavelength, at 4000 K and at 5800 K. Two things change at once. The peak slides LEFT toward shorter, bluer wavelengths, which is Wien's law, λₘT = b, giving 0.72 micrometres and 0.50. And the whole curve rises, so the total area, the total power, grows as T⁴: the 5800 K body radiates about six times as much per square metre. Visible light spans roughly 0.4 to 0.7 micrometres, which is why the cooler body glows red and the hotter one white."
          ],
          "frames": [
            {
              "x": [0, 3.4], "y": [0, 1.1],
              "axisX": "λ (μm)", "axisY": "emission",
              "ticksX": { "every": 1 },
              "curves": [
                { "c": "pts", "pts": [[0.3, 0.468], [0.4, 0.878], [0.5, 1.0], [0.6, 0.927], [0.8, 0.637], [1.0, 0.405], [1.4, 0.169], [2.0, 0.056], [2.6, 0.023], [3.2, 0.011]], "smooth": true },
                { "c": "pts", "pts": [[0.3, 0.011], [0.4, 0.054], [0.5, 0.107], [0.6, 0.142], [0.725, 0.156], [0.8, 0.153], [1.0, 0.125], [1.4, 0.068], [2.0, 0.028], [2.6, 0.013], [3.2, 0.006]], "smooth": true, "soft": true }
              ],
              "points": [
                { "x": 0.5, "y": 1.0, "label": "5800 K", "at": "ne" },
                { "x": 0.725, "y": 0.156, "label": "4000 K", "at": "ne" }
              ],
              "arrows": [
                { "from": [1.35, 0.85], "to": [0.68, 0.85], "tone": "amber", "label": "peak shifts blue" }
              ],
              "labels": [
                { "x": 2.2, "y": 0.72, "text": "hotter means bluer" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any radiation or cooling question, in five steps",
          "steps": [
            "<b>Convert to kelvin first, before anything else.</b> Stefan's law and Wien's law both demand absolute temperature, and with a fourth power in play a stray celsius reading produces a wildly wrong answer rather than a slightly wrong one.",
            "<b>If the question asks BY WHAT FACTOR, use a ratio and never touch σ.</b> <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup>, and λ<sub>2</sub>/λ<sub>1</sub> = <i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>. The area, the emissivity and the constant all cancel.",
            "<b>If the question asks for an actual power, decide whether it wants emitted or NET.</b> A body in surroundings at <i>T</i><sub>0</sub> is being heated by them too, so the net loss carries the <i>T</i><sub>0</sub><sup>4</sup> term. Dropping it is a standard distractor.",
            "<b>For a spectrum-to-power chain, do Wien first and Stefan second.</b> The peak wavelength gives you <i>T</i>, and only then does <i>T</i> give you the power. That two-step pattern is the standard astrophysics-flavoured question.",
            "<b>For a cooling problem, use the average-temperature form.</b> Substitute the first stage to get <i>k</i>, then reuse the same <i>k</i> for the second stage. And check that the second equal drop takes longer than the first: if it does not, you have made an arithmetic slip."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A spherical black body of radius 5.0 cm is maintained at 327 °C in surroundings at 27 °C. Find the net power it radiates. Take σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup>.",
          "steps": [
            "Convert to kelvin FIRST: <i>T</i> = 327 + 273 = 600 K and <i>T</i><sub>0</sub> = 27 + 273 = 300 K. Black body, so <i>e</i> = 1.",
            "Surface area: <i>A</i> = 4π<i>r</i><sup>2</sup> = 4π(0.05)<sup>2</sup> = 3.14 × 10<sup>−2</sup> m<sup>2</sup>.",
            "<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> = (600)<sup>4</sup> − (300)<sup>4</sup> = 1.296 × 10<sup>11</sup> − 0.081 × 10<sup>11</sup> = 1.215 × 10<sup>11</sup> K<sup>4</sup>.",
            "<i>P</i><sub>net</sub> = σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>) = (5.67 × 10<sup>−8</sup>)(3.14 × 10<sup>−2</sup>)(1.215 × 10<sup>11</sup>) ≈ 216 W.",
            "Note that the surroundings term removed only about 6 percent here, because 300 K to the fourth is small beside 600 K to the fourth. Do not let that tempt you into dropping it: for a body only slightly hotter than its room, that term is nearly everything."
          ],
          "ans": "P<sub>net</sub> ≈ 216 W"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The temperature of a body is raised from 27 °C to 327 °C. By what factor does the power it radiates increase?",
          "steps": [
            "Two errors are waiting. Students plug in the celsius numbers and write (327/27)<sup>4</sup>, or they forget the fourth power and answer 2. Both are wrong, and the first is wrong by a factor of about ten thousand.",
            "Convert to kelvin: 300 K to 600 K, a ratio of exactly 2. That clean 2 is the whole reason the question chose these particular celsius numbers.",
            "Since <i>P</i> ∝ <i>T</i><sup>4</sup>: <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup> = (600/300)<sup>4</sup> = 2<sup>4</sup> = 16.",
            "Never compute σ or the area for a ratio question: they cancel. Forgetting to convert °C to K is the single deadliest trap in this topic, because the fourth power magnifies the error enormously."
          ],
          "ans": "16 times"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "The radiation from a certain star peaks in intensity at a wavelength of 500 nm. Treating the star as a black body, find its surface temperature and the power it radiates per unit area. Take <i>b</i> = 2.9 × 10<sup>−3</sup> m K and σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup>.",
          "steps": [
            "Wien first, because the spectrum is what fixes the temperature. <i>T</i> = <i>b</i>/λ<sub>m</sub> = (2.9 × 10<sup>−3</sup>)/(500 × 10<sup>−9</sup>) = (2.9 × 10<sup>−3</sup>)/(5.0 × 10<sup>−7</sup>).",
            "<i>T</i> = 5800 K. That is reassuringly close to the Sun's own surface temperature, which is a useful sanity check on any star problem.",
            "Now Stefan, per unit area for a black body: <i>E</i> = σ<i>T</i><sup>4</sup>. Compute (5800)<sup>4</sup> = (5.8)<sup>4</sup> × 10<sup>12</sup> = 1131.6 × 10<sup>12</sup> = 1.132 × 10<sup>15</sup>.",
            "<i>E</i> = (5.67 × 10<sup>−8</sup>)(1.132 × 10<sup>15</sup>) ≈ 6.4 × 10<sup>7</sup> W/m<sup>2</sup>. Wien to get <i>T</i> from the spectrum, then Stefan to get the power: that two-step chain is the standard pattern here."
          ],
          "ans": "T = 5800 K · E ≈ 6.4 × 10<sup>7</sup> W/m<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A metal block cools from 80 °C to 60 °C in 5.0 minutes in a room at 20 °C. How long will it take to cool further from 60 °C to 40 °C, assuming Newton's law of cooling holds?",
          "steps": [
            "Use the average-temperature form, with the mean temperature of the body during each interval. Because every quantity in it is a temperature DIFFERENCE, celsius is fine throughout and no conversion is needed.",
            "First stage: (80 − 60)/5 = <i>k</i>[(80 + 60)/2 − 20], so 4 = <i>k</i>(70 − 20) = 50<i>k</i>, giving <i>k</i> = 0.08 per minute.",
            "Second stage, same block and same room, so the same <i>k</i>. The mean temperature is now (60 + 40)/2 = 50 °C: (60 − 40)/<i>t</i> = (0.08)(50 − 20) = (0.08)(30) = 2.4.",
            "20/<i>t</i> = 2.4, so <i>t</i> ≈ 8.3 minutes.",
            "The same 20-degree drop takes 8.3 minutes the second time against 5 the first, because the block is now cooler and closer to the room. A smaller excess means a slower rate, and that slowing as you approach the surroundings is the entire character of the law, visible right in the numbers."
          ],
          "ans": "t ≈ 8.3 minutes"
        },
        {
          "t": "mcq",
          "q": "Two identical kettles, one polished and one painted dull black, are filled with boiling water and left in the same room. Which cools faster?",
          "opts": [
            { "label": "the polished kettle, because shiny surfaces lose heat faster", "nudge": "This inverts the physics. Polished surfaces are POOR emitters, which is exactly why a thermos flask is silvered on the inside." },
            { "label": "the black kettle, because good absorbers are also good emitters", "nudge": null },
            { "label": "both cool at the same rate, since they hold the same water", "nudge": "This ignores that the rate of radiative loss depends on the SURFACE, not only on the contents." },
            { "label": "the black kettle, because black objects are always hotter", "nudge": "The right answer for a nonsense reason. Both start at exactly the same temperature; it is the emission rate that differs, not the starting point." }
          ],
          "correct": 1,
          "solution": "By Kirchhoff's law a good absorber is a good emitter. The black surface radiates more strongly, so it loses heat faster and cools quicker."
        },
        {
          "t": "mcq",
          "q": "If the absolute temperature of a black body is doubled, the total energy it radiates per unit time becomes:",
          "opts": [
            { "label": "2 times", "nudge": "This assumes a linear dependence, as if power were simply proportional to temperature." },
            { "label": "4 times", "nudge": "The trap for anyone who misremembers the exponent as 2." },
            { "label": "8 times", "nudge": "The trap for the exponent 3, which is tempting because a volume scales that way. Radiated power does not." },
            { "label": "16 times", "nudge": null }
          ],
          "correct": 3,
          "solution": "Stefan's law gives P ∝ T⁴, so doubling the absolute temperature multiplies the power by 2⁴ = 16."
        },
        {
          "t": "mcq",
          "q": "As a piece of iron is heated to higher and higher temperatures, the wavelength at which it radiates most intensely:",
          "opts": [
            { "label": "increases, shifting toward red", "nudge": "This reverses Wien's relationship. Iron goes from dull red to white-hot as it heats, not the other way." },
            { "label": "decreases, shifting toward blue", "nudge": null },
            { "label": "stays the same", "nudge": "This would need λₘ to be independent of T, contradicting the constancy of the product λₘT." },
            { "label": "first increases, then decreases", "nudge": "This invents a turnaround that Wien's law, a simple inverse proportionality, cannot produce." }
          ],
          "correct": 1,
          "solution": "Wien's law, λₘT = constant, means a higher T gives a SMALLER λₘ, so the peak shifts toward shorter, bluer wavelengths."
        },
        {
          "t": "mcq",
          "q": "Newton's law of cooling is best described as:",
          "opts": [
            { "label": "an exact law valid for all temperature differences", "nudge": "False: it is the first-order approximation to Stefan's law and fails once the excess is comparable with the absolute temperature of the surroundings." },
            { "label": "a special case of Stefan's law, valid only when the excess temperature is small", "nudge": null },
            { "label": "applicable only to black bodies", "nudge": "Wrong: the emissivity e survives into the constant k, so the law applies to ordinary surfaces too." },
            { "label": "independent of the surface area of the body", "nudge": "Wrong: the derivation puts the area A explicitly inside k = 4eσAT₀³/mc, which is why a thin sheet cools faster than a compact block of the same mass." }
          ],
          "correct": 1,
          "solution": "Newton's law follows from Stefan's fourth-power law by a first-order binomial approximation that is valid only for a small excess temperature."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A black body of surface area 20 cm<sup>2</sup> is maintained at 727 °C. Find the power it radiates. Take σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup>.", "a": "<i>T</i> = 1000 K and <i>A</i> = 2.0 × 10<sup>−3</sup> m<sup>2</sup>. <i>P</i> = σ<i>AT</i><sup>4</sup> = (5.67 × 10<sup>−8</sup>)(2.0 × 10<sup>−3</sup>)(10<sup>12</sup>) ≈ 113 W." },
            { "q": "[NEET] The radiation from a hot body peaks at 1.45 μm. Find the body's absolute temperature. Take <i>b</i> = 2.9 × 10<sup>−3</sup> m K.", "a": "<i>T</i> = <i>b</i>/λ<sub>m</sub> = (2.9 × 10<sup>−3</sup>)/(1.45 × 10<sup>−6</sup>) = 2000 K." },
            { "q": "[JEE Main] A body radiates a certain power at 727 °C. At what temperature in °C will it radiate 16 times that power, all else unchanged?", "a": "16 = 2<sup>4</sup>, so the ABSOLUTE temperature must double: 1000 K becomes 2000 K, that is 1727 °C. Answering 2 × 727 = 1454 °C is the trap." },
            { "q": "[JEE Main] A liquid cools from 70 °C to 50 °C in 6.0 minutes in surroundings at 20 °C. Find the time to cool from 50 °C to 40 °C.", "a": "First stage: 20/6 = <i>k</i>(60 − 20), so <i>k</i> = 1/12 per minute. Second stage: 10/<i>t</i> = (1/12)(45 − 20) = 25/12, so <i>t</i> ≈ 4.8 minutes." },
            { "q": "[JEE Advanced] A black body of mass 1 kg, specific heat 500 J/kg K and surface area 0.01 m<sup>2</sup> cools from 1000 K to 500 K while radiating into surroundings at effectively 0 K, as in deep space. Find the time taken.", "a": "With <i>T</i><sub>0</sub> = 0 the exact integral is easy: −<i>mc dT</i>/<i>dt</i> = σ<i>AT</i><sup>4</sup> gives <i>t</i> = <i>mc</i>/(3σ<i>A</i>) × (1/<i>T</i><sub>2</sub><sup>3</sup> − 1/<i>T</i><sub>1</sub><sup>3</sup>). Here σ<i>A</i> = 5.67 × 10<sup>−10</sup>, so <i>t</i> = 500/(1.701 × 10<sup>−9</sup>) × (8 × 10<sup>−9</sup> − 1 × 10<sup>−9</sup>) ≈ 2.06 × 10<sup>3</sup> s, about 34 minutes. Newton's law is useless here: the excess is not small." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using celsius in Stefan's or Wien's law.</b> Both demand absolute temperature. With a fourth power in Stefan's law, a stray °C does not give a slightly wrong answer, it gives a wildly wrong one. Convert first, always. The one exception is Newton's cooling law in its practical form, where every term is a difference and celsius survives.",
            "<b>Dropping the surroundings term.</b> Net radiation is <i>e</i>σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>), not <i>e</i>σ<i>AT</i><sup>4</sup>. A body in a warm room is being heated by the room's radiation at the same time, and for a small excess that returned energy is nearly all of it.",
            "<b>Confusing emissive power with emissivity.</b> Emissive power <i>E</i> is in W/m<sup>2</sup>; emissivity <i>e</i> is a dimensionless number between 0 and 1. A black body has <i>e</i> = 1, but its emissive power σ<i>T</i><sup>4</sup> is certainly not 1.",
            "<b>Using Newton's law for a large excess, and misjudging which way it errs.</b> Because <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> is convex, it always EXCEEDS its own tangent 4<i>T</i><sub>0</sub><sup>3</sup>(<i>T</i> − <i>T</i><sub>0</sub>), so a real body always cools FASTER than Newton predicts and the true time is always SHORTER. A copper sphere falling from 500 K to 400 K in a 300 K room takes about 28 minutes by the exact law against about 54 by Newton's, an overestimate of nearly a factor of two. Check Δ<i>T</i>/<i>T</i><sub>0</sub> is well under 0.1 before you trust the linear law.",
            "<b>Letting a body cool past its surroundings.</b> The rate is proportional to the excess, so it vanishes as the excess does. The curve flattens onto the ambient line and never crosses it. A final temperature below <i>T</i><sub>0</sub> is an algebra error, not a result."
          ]
        },
        {
          "t": "protip",
          "html": "for any by-what-factor radiation question, throw away the constants and work in ratios in kelvin: P<sub>2</sub>/P<sub>1</sub> = (T<sub>2</sub>/T<sub>1</sub>)<sup>4</sup> for power, λ<sub>2</sub>/λ<sub>1</sub> = T<sub>1</sub>/T<sub>2</sub> for the peak. σ and the area cancel, and the whole question becomes one line. for cooling, the average-temperature form turns a differential equation into arithmetic: find k from the first stage, reuse it in the second. and know where the linear law dies, because that is what separates a JEE main answer from an advanced one. the exact law can be integrated, and in the clean case of surroundings at 0 K, a satellite radiating into deep space, it gives t = mc ÷ 3eσA times (1/T<sub>2</sub><sup>3</sup> − 1/T<sub>1</sub><sup>3</sup>). one more that turns up in satellite problems: a SELECTIVE surface, one with a high absorptivity for the sun's short wavelengths and a low emissivity for its own long-wave glow, runs far hotter than a black one, because it drinks well and radiates badly."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "radiation needs no medium", "note": "the only mode that crosses a vacuum, and all bodies radiate at all temperatures" },
            { "f": "<i>P</i> = <i>e</i>σ<i>AT</i><sup>4</sup> · <i>P</i><sub>net</sub> = <i>e</i>σ<i>A</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)", "note": "σ = 5.67 × 10<sup>−8</sup> W/m<sup>2</sup> K<sup>4</sup>, kelvin only" },
            { "f": "λ<sub>m</sub><i>T</i> = <i>b</i> = 2.9 × 10<sup>−3</sup> m K", "note": "hotter is bluer; the peak slides to shorter wavelengths" },
            { "f": "Kirchhoff: emissivity = absorptivity", "note": "good absorbers are good emitters; a black body has e = 1" },
            { "f": "−<i>dT</i>/<i>dt</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>), <i>k</i> = 4<i>e</i>σ<i>AT</i><sub>0</sub><sup>3</sup>/<i>mc</i>", "note": "Stefan's law linearised for a SMALL excess, and nothing more" },
            { "f": "(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>[(<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>]", "note": "the exam form; equal drops take longer as the body approaches the room" }
          ],
          "aids": [
            "\"power to the fourth, in kelvin\"",
            "\"hot is blue, cool is red\"",
            "\"black absorbs all, emits all\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Thermometry, the Gas Laws and Absolute Zero",
      "chip": "05 THERMOMETRY",
      "kalam": "measure by a property, standardise by a gas, count from absolute zero",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 told you what temperature is and how to convert between scales. This one answers the next question: how do we actually <i>measure</i> it, and where does the kelvin scale come from? You cannot read temperature directly. You read it through some property of a substance that changes reproducibly with hotness. Such a property is called a <b>thermometric property</b>, and the device built around it is a thermometer."
        },
        {
          "t": "p",
          "html": "The zoo is larger than you think, and each member is defined by which property it watches. A mercury-in-glass thermometer uses the <b>length</b> of a mercury column. A constant-volume gas thermometer uses the <b>pressure</b> of a trapped gas. A platinum resistance thermometer uses electrical <b>resistance</b>. A thermocouple uses a tiny <b>thermo-emf</b>. A radiation pyrometer uses the <b>radiation</b> emitted by a very hot body, which is why it needs no contact at all and can read a furnace from across the room. The same differential-expansion idea from Topic 01 even runs your geyser's thermostat: a <b>bimetallic strip</b> of two metals with different α bends as it heats and trips a switch."
        },
        {
          "t": "think",
          "html": "a thermometer is a translator. it converts invisible hotness into a visible number using some property as its language. different translators, mercury, alcohol, resistance, speak slightly different dialects and disagree on the fine print. the dilute gas is the one translator everyone trusts, because in the thin-gas limit they all tell exactly the same story. so we make it the official language, and every other thermometer gets checked against it."
        },
        {
          "t": "p",
          "html": "To turn a property into a number you need <b>calibration</b>: two reproducible fixed points. The classic pair are the <b>ice point</b>, melting ice at 1 atm, called 0 °C, and the <b>steam point</b>, boiling water at 1 atm, called 100 °C. Mark the property at both, divide the span into 100 equal parts, and you have a celsius thermometer. So far, so neat. Here is the subtlety that forced physicists to find a better standard. A mercury thermometer and an alcohol thermometer, both perfectly calibrated at 0 and 100, will <b>disagree</b> slightly at, say, 50, because mercury and alcohol do not expand in exactly the same non-linear way in between. Which one tells the true temperature? Neither, exactly."
        },
        {
          "t": "p",
          "html": "The escape is the <b>gas thermometer</b>. Experiment shows that as you make a gas more and more dilute, lowering its pressure toward ideal behaviour, <b>all</b> gases, hydrogen, helium, nitrogen alike, give the same temperature reading. That universality is why the ideal-gas temperature is adopted as the fundamental standard. And it goes further. Plot the pressure of a fixed-volume gas against celsius temperature and you get a straight line; extend that line backward and it crosses zero pressure at −273.15 °C, and gases of <i>every</i> kind extrapolate to the same point. A gas cannot push with less than zero pressure, so this common intercept is the coldest conceivable temperature: <b>absolute zero</b>. Shift the origin there and you have the <b>Kelvin scale</b>, on which pressure is simply proportional to temperature."
        },
        {
          "t": "def",
          "term": "The triple point is not the ice point",
          "html": "A distinction worth two marks and constantly muddled. The <b>ice point</b> is melting ice under 1 atm of air, at 273.15 K. The <b>triple point</b> of water is the unique state where ice, water and vapour coexist in equilibrium, which happens at 273.16 K and a pressure of only 611.7 Pa, about 0.006 atm. They differ by 0.01 K, but the triple point is the one that matters, because it is a single reproducible <i>point</i>, fixed by nature rather than by whatever air pressure you happen to have that day. The kelvin was defined as 1/273.16 of it, and a constant-volume gas thermometer needs only that one fixed point: once <i>P</i> ∝ <i>T</i>, a single reference sets the whole scale."
        },
        {
          "t": "defgrid",
          "title": "Thermometers, their property and their range",
          "rows": [
            { "k": "Mercury-in-glass", "v": "length of a mercury column. About −39 °C to 357 °C, bounded by mercury's own freezing and boiling points" },
            { "k": "Alcohol-in-glass", "v": "length of an alcohol column. Reaches down to about −115 °C, so it takes over where mercury freezes" },
            { "k": "Constant-volume gas", "v": "pressure of a trapped gas. About −270 °C to 1500 °C, and the STANDARD against which the rest are checked" },
            { "k": "Platinum resistance", "v": "electrical resistance. About −200 °C to 1200 °C, and the most accurate over that span" },
            { "k": "Thermocouple", "v": "thermo-emf of a junction. About −200 °C to 1600 °C, and fast, because the junction is tiny" },
            { "k": "Radiation pyrometer", "v": "the radiation emitted. Above about 1000 °C, and it needs NO contact, which is the only way to read molten metal" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · READING A TEMPERATURE OFF A PROPERTY",
          "main": "<i>t</i> = [(<i>X<sub>t</sub></i> − <i>X</i><sub>0</sub>)/(<i>X</i><sub>100</sub> − <i>X</i><sub>0</sub>)] × 100 °C<br>gas thermometer: <i>T</i> = 273.16 × (<i>P</i>/<i>P</i><sub>tr</sub>) K",
          "legend": [
            "<i>X</i> is ANY thermometric property, a length, a pressure, a resistance or an emf, with <i>X</i><sub>0</sub> and <i>X</i><sub>100</sub> its values at the ice and steam points and <i>X<sub>t</sub></i> its value at the unknown temperature <i>t</i>",
            "the units of <i>X</i> cancel in the ratio, which is why one formula serves every two-fixed-point thermometer",
            "<i>P</i><sub>tr</sub> is the gas pressure at the triple point of water and <i>P</i> the pressure at the measured temperature, both in any consistent unit; 273.16 K is the assigned triple-point temperature"
          ],
          "note": "the gas thermometer needs only ONE fixed point, against the two-point construction everyone else needs. That economy is a direct consequence of P being proportional to T rather than merely linear in it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE GAS LAWS AND THE IDEAL-GAS EQUATION",
          "tag": "kelvin throughout, without exception",
          "main": "Boyle: <i>PV</i> = constant at fixed <i>T</i><br>Charles: <i>V</i> ∝ <i>T</i> at fixed <i>P</i><br>Gay-Lussac: <i>P</i> ∝ <i>T</i> at fixed <i>V</i><br>combined: <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub><br><i>PV</i> = <i>nRT</i>",
          "legend": [
            "<i>P</i> is pressure in pascal (Pa), <i>V</i> volume in m<sup>3</sup>, <i>T</i> ABSOLUTE temperature in kelvin, and <i>n</i> the number of moles",
            "<i>R</i> = 8.314 J/mol K is the universal gas constant; per molecule the same law reads <i>PV</i> = <i>Nk</i><sub>B</sub><i>T</i> with <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J/K",
            "absolute zero: 0 K = −273.15 °C, the extrapolated point of zero pressure, approachable but never attainable"
          ],
          "note": "learn only the combined form. Boyle, Charles and Gay-Lussac are each just that one equation with a different quantity held fixed, so it is one relation to remember instead of three."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ABSOLUTE ZERO FROM A GAS THERMOMETER, TAP A LINE",
          "steps": [
            {
              "eq": "for a fixed mass of gas at fixed volume, <i>P<sub>t</sub></i> = <i>P</i><sub>0</sub>(1 + α<sub>gas</sub><i>t</i>), with <i>t</i> in °C",
              "why": "This is an experimental fact, not a definition: measure the pressure of a trapped gas at several temperatures and the points fall on a straight line. <i>P</i><sub>0</sub> is the pressure at 0 °C and α<sub>gas</sub> is the measured pressure coefficient."
            },
            {
              "eq": "every dilute gas gives the same α<sub>gas</sub> = 1/273.15 per °C ≈ 3.66 × 10<sup>−3</sup> per °C",
              "why": "Hydrogen, helium and nitrogen all return the same number in the dilute limit, which is a strong hint that the constant belongs to temperature itself and not to any particular gas. Compare it with a solid's α of about 10<sup>−5</sup>: a gas expands roughly three hundred times more readily."
            },
            {
              "eq": "a gas cannot push with negative pressure, so set <i>P<sub>t</sub></i> = 0: 0 = <i>P</i><sub>0</sub>(1 + <i>t</i>/273.15), giving <i>t</i> = −273.15 °C",
              "why": "This is the lowest temperature the straight line permits. Because α<sub>gas</sub> is the same for every gas, they all extrapolate to this SAME intercept, which is what makes it a property of nature rather than an accident of the working substance."
            },
            {
              "eq": "shift the origin: set <i>T</i> = <i>t</i> + 273.15, so <i>P<sub>t</sub></i> = <i>P</i><sub>0</sub>(<i>T</i>/<i>T</i><sub>0</sub>) and <i>P</i> ∝ <i>T</i>",
              "why": "The clumsy linear relation collapses into a pure proportionality. That is Gay-Lussac's law in its cleanest form, and it is exactly why the Kelvin scale, not celsius, is the natural language of gas behaviour. Once <i>P</i> ∝ <i>T</i>, one reference point suffices: assign the triple point 273.16 K and the working formula <i>T</i> = 273.16(<i>P</i>/<i>P</i><sub>tr</sub>) follows immediately."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.10 · EXTRAPOLATING TO ABSOLUTE ZERO",
          "chips": ["a gas thermometer's line"],
          "captions": [
            "Pressure of a fixed volume of dilute gas against celsius temperature. The solid stretch is what you can actually measure, between the ice point and the steam point; the dashed stretch is the extrapolation. It reaches zero pressure at −273.15 °C, and here is the astonishing part: every gas, whatever its molecules, extrapolates to the same intercept. Absolute zero was pinned down this way, by extending a line, not by reaching it."
          ],
          "frames": [
            {
              "x": [-320, 150], "y": [-0.15, 1.7],
              "axisX": "t (°C)", "axisY": "P (atm)",
              "ticksX": { "at": [-273, -100, 0, 100] },
              "ticksY": { "at": [0, 0.5, 1.0, 1.5] },
              "curves": [
                { "c": "pts", "pts": [[0, 1.0], [100, 1.366]] },
                { "c": "pts", "pts": [[-273.2, 0], [0, 1.0]], "dash": true, "soft": true },
                { "c": "vline", "x": -273.2, "dash": true, "soft": true }
              ],
              "points": [
                { "x": -273.2, "y": 0, "label": "−273 °C", "at": "nw" },
                { "x": 0, "y": 1.0, "label": "ice pt", "at": "nw" },
                { "x": 100, "y": 1.366, "label": "steam pt", "at": "nw" }
              ],
              "labels": [
                { "x": -150, "y": 1.2, "text": "extrapolate back" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any gas-law problem, in four steps",
          "steps": [
            "<b>Convert every temperature to kelvin before you write anything.</b> The 273 offset quietly wrecks a proportion: 27 °C to 127 °C sounds like a factor of nearly five and is actually 300 K to 400 K, a factor of 4/3.",
            "<b>Write down the combined law <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>, not one of the three named laws.</b> Then cross out whichever quantity the problem holds fixed. One equation, always.",
            "<b>Check that the mass of gas is unchanged between the two states.</b> The combined law assumes it. If gas escapes, leaks in, or dissolves, go back to <i>PV</i> = <i>nRT</i> with <i>n</i> as a variable.",
            "<b>Keep pressures in ONE unit and volumes in one unit, and never mix.</b> Because both appear as ratios, cm of mercury and litres are perfectly legal, provided both sides use them; only the temperature has no such freedom."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A constant-volume gas thermometer registers a pressure of 80 mm Hg when its bulb is at the triple point of water. Placed in a hot bath the pressure rises to 100 mm Hg. Find the temperature of the bath.",
          "steps": [
            "The gas thermometer needs only one fixed point, because <i>P</i> is proportional to <i>T</i>. Use <i>T</i> = 273.16 × (<i>P</i>/<i>P</i><sub>tr</sub>).",
            "<i>T</i> = 273.16 × (100/80) = 273.16 × 1.25.",
            "<i>T</i> = 341.45 K, which is 341.45 − 273.15 ≈ 68.3 °C.",
            "Note that the pressure units cancelled, so the mm Hg never had to become pascal. That is the economy of a single-fixed-point scale over the two-point celsius construction."
          ],
          "ans": "T ≈ 341.5 K, about 68.3 °C"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A fixed mass of gas at 27 °C is heated at constant pressure until its volume doubles. Find the final temperature.",
          "steps": [
            "The trap is instant: volume doubles, so double the 27 and answer 54 °C. Charles's law is <i>V</i> ∝ <i>T</i> with <i>T</i> in KELVIN, never celsius.",
            "Convert first: 27 °C = 300 K.",
            "Doubling <i>V</i> at fixed <i>P</i> doubles the ABSOLUTE temperature: <i>T</i><sub>2</sub> = 2 × 300 = 600 K.",
            "Back to celsius: 600 − 273 = 327 °C. The trap's answer of 54 °C is out by nearly 300 degrees, purely because the 273 offset was left inside a proportion."
          ],
          "ans": "327 °C"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A sealed rigid vessel contains gas at 27 °C and 1.0 atm. It is heated to 127 °C. Find the new pressure.",
          "steps": [
            "Rigid vessel means the volume is fixed, so this is Gay-Lussac: <i>P</i> ∝ <i>T</i> at constant <i>V</i>.",
            "Convert: <i>T</i><sub>1</sub> = 300 K and <i>T</i><sub>2</sub> = 400 K.",
            "<i>P</i><sub>2</sub> = <i>P</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = 1.0 × (400/300) = 4/3 ≈ 1.33 atm.",
            "A 100-degree rise sounds large but is only a 33 percent pressure increase, because on the absolute scale 300 to 400 K is a factor of 4/3, not the factor of nearly 5 that reading 27 to 127 misleadingly suggests. Always reason in kelvin."
          ],
          "ans": "P<sub>2</sub> ≈ 1.33 atm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In a constant-volume gas thermometer the gas pressure is 1.000 atm at the ice point, 0 °C, and 1.366 atm at the steam point, 100 °C. Treating <i>P</i> as a linear function of celsius temperature, determine the value of absolute zero in °C implied by this data.",
          "steps": [
            "Model it as <i>P</i> = <i>a</i> + <i>bt</i> with <i>t</i> in °C. At <i>t</i> = 0 the pressure is 1.000, so <i>a</i> = 1.000 atm.",
            "Slope from the second point: <i>b</i> = (1.366 − 1.000)/100 = 3.66 × 10<sup>−3</sup> atm per °C. That is the pressure coefficient, and note it is 1/273 of <i>a</i>, which is already the answer in disguise.",
            "Extrapolate to <i>P</i> = 0: 0 = <i>a</i> + <i>bt</i><sub>0</sub>, so <i>t</i><sub>0</sub> = −<i>a</i>/<i>b</i> = −1.000/(3.66 × 10<sup>−3</sup>) ≈ −273.2 °C.",
            "Absolute zero recovered from nothing but two pressure readings and a ruler. This is precisely how it was first pinned down, not by reaching it but by extending the straight <i>P</i>-versus-<i>t</i> line of a dilute gas to the point of zero pressure.",
            "The ratio <i>P</i><sub>100</sub>/<i>P</i><sub>0</sub> = 1.366 is worth recognising on sight: it is 373.15/273.15, the absolute scale hiding inside celsius data."
          ],
          "ans": "absolute zero ≈ −273.2 °C"
        },
        {
          "t": "mcq",
          "q": "Which thermometer is most suitable for measuring the temperature of molten metal in a furnace at about 1500 °C?",
          "opts": [
            { "label": "mercury-in-glass", "nudge": "Mercury boils at 357 °C, so the thermometer would be destroyed long before it read anything useful." },
            { "label": "alcohol-in-glass", "nudge": "Alcohol's useful range lies far LOWER than mercury's, not higher: it is the instrument you reach for near −100 °C." },
            { "label": "radiation pyrometer", "nudge": null },
            { "label": "clinical thermometer", "nudge": "A clinical thermometer covers only the narrow human body range, roughly 35 to 42 °C, which is its whole design purpose." }
          ],
          "correct": 2,
          "solution": "A radiation pyrometer reads the radiation the hot body emits, so it needs no contact at all and has no substance of its own to melt or boil. That is what makes it the only option above 1000 °C."
        },
        {
          "t": "mcq",
          "q": "A dilute, low-pressure gas thermometer is chosen as the standard because:",
          "opts": [
            { "label": "gases are cheap and easy to obtain", "nudge": "True but irrelevant. A standard is chosen for reproducibility, not for cost." },
            { "label": "all gases give the same reading in the dilute limit", "nudge": null },
            { "label": "a gas expands more than any solid or liquid", "nudge": "A gas does expand about three hundred times more readily than a solid, but a large response is only sensitivity. It does not make one gas agree with another." },
            { "label": "gases never liquefy", "nudge": "False, and it is precisely near liquefaction that real gases deviate from ideal behaviour, which is why the DILUTE limit is specified." }
          ],
          "correct": 1,
          "solution": "In the low-pressure limit different gases agree exactly, so the reading is independent of the working substance. Substance-independence is the hallmark of a true standard."
        },
        {
          "t": "mcq",
          "q": "Absolute zero corresponds to:",
          "opts": [
            { "label": "0 °C", "nudge": "That is the ice point, an arbitrary human choice of origin, not a floor set by nature." },
            { "label": "−273.15 °C, the extrapolated point of zero gas pressure", "nudge": null },
            { "label": "the freezing point of every gas", "nudge": "This confuses condensation, which happens at wildly different temperatures for different gases, with the single extrapolated limit they all share." },
            { "label": "a temperature easily reached in a modern laboratory", "nudge": "Laboratories get within a billionth of a kelvin, but the limit itself is unattainable: it is an extrapolation, not a state." }
          ],
          "correct": 1,
          "solution": "It is the common intercept at which every dilute gas's pressure, or volume, extrapolates to zero. Since a gas cannot push with negative pressure, no lower temperature is conceivable."
        },
        {
          "t": "mcq",
          "q": "For a fixed mass of ideal gas, which combination is correct?",
          "opts": [
            { "label": "<i>PV</i> = constant at constant <i>T</i>; <i>V</i> ∝ <i>T</i> at constant <i>P</i>; <i>P</i> ∝ <i>T</i> at constant <i>V</i>", "nudge": null },
            { "label": "<i>PV</i> ∝ <i>T</i><sup>2</sup> always", "nudge": "This contradicts <i>PV</i> = <i>nRT</i>, in which the product is proportional to the first power of T, not the second." },
            { "label": "<i>P</i> ∝ <i>V</i> at constant <i>T</i>", "nudge": "This inverts Boyle's law. Squeeze a gas into half the volume and the pressure doubles; it does not halve." },
            { "label": "<i>V</i> ∝ 1/<i>T</i> at constant <i>P</i>", "nudge": "This inverts Charles's law. Heat a balloon and it swells, so volume rises with temperature, not falls." }
          ],
          "correct": 0,
          "solution": "These are Boyle, Charles and Gay-Lussac in order, the three pillars of PV = nRT, each one the combined law with a different quantity held fixed."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A constant-volume gas thermometer reads 90 mm Hg at the triple point. What pressure will it read at the ice point, 273.15 K?", "a": "<i>P</i> = 90 × (273.15/273.16) ≈ 90.0 mm Hg. Essentially unchanged, because the triple point and the ice point differ by only 0.01 K. The two are still different fixed points, and only one of them defines the kelvin." },
            { "q": "[NEET] Express absolute zero, −273.15 °C, on the Fahrenheit scale.", "a": "<i>F</i> = (9/5)(−273.15) + 32 = −491.67 + 32 = −459.67 °F. This is a READING, not a difference, so the +32 offset genuinely belongs here." },
            { "q": "[JEE Main] A gas occupies 2.0 L at 27 °C and 1 atm. It is compressed to 1.0 L and warmed to 127 °C. Find the new pressure.", "a": "Combined law: <i>P</i><sub>2</sub> = <i>P</i><sub>1</sub>(<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>)(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = 1 × (2.0/1.0) × (400/300) = 8/3 ≈ 2.67 atm." },
            { "q": "[JEE Main] A bubble of gas doubles in volume as it rises from the bottom of a lake to the surface, while its temperature rises from 7 °C to 27 °C. Atmospheric pressure is 76 cm Hg. Find the pressure due to the water column at the lake bottom.", "a": "<i>T</i><sub>1</sub> = 280 K, <i>T</i><sub>2</sub> = 300 K, <i>V</i><sub>2</sub> = 2<i>V</i><sub>1</sub>, <i>P</i><sub>2</sub> = 76. So <i>P</i><sub>1</sub> = 76 × 2 × (280/300) = 141.9 cm Hg. Subtracting the atmosphere, the water column contributes 141.9 − 76 ≈ 65.9 cm Hg." },
            { "q": "[JEE Advanced] A constant-volume gas thermometer gives pressures <i>P</i><sub>1</sub> and <i>P</i><sub>2</sub> at the ice and steam points. Show that the celsius temperature for a measured pressure <i>P</i> is <i>t</i> = [(<i>P</i> − <i>P</i><sub>1</sub>)/(<i>P</i><sub>2</sub> − <i>P</i><sub>1</sub>)] × 100, and evaluate it for <i>P</i><sub>1</sub> = 1.00, <i>P</i><sub>2</sub> = 1.37 and <i>P</i> = 1.10 atm.", "a": "It is the general two-fixed-point relation with pressure as the thermometric property: the fraction of the ice-to-steam span that <i>P</i> has covered, times 100. Substituting: <i>t</i> = (0.10/0.37) × 100 ≈ 27.0 °C." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using celsius in a gas law.</b> <i>P</i> ∝ <i>T</i>, <i>V</i> ∝ <i>T</i> and <i>PV</i> = <i>nRT</i> all require kelvin. Convert before forming any ratio: the 273 offset is fatal inside a proportion, and doubling the celsius reading is the single most common NEET error on this topic.",
            "<b>Thinking absolute zero is attainable.</b> It is an extrapolated limit, the point where a straight line would meet zero pressure. Real systems get arbitrarily close and never arrive.",
            "<b>Confusing which of the three laws holds what fixed.</b> Boyle holds <i>T</i>, Charles holds <i>P</i>, Gay-Lussac holds <i>V</i>. Mislabelling which quantity is constant produces a formula that is wrong from the first line, so use the combined law and cross out instead.",
            "<b>Mixing up the triple point and the ice point.</b> The triple point is 273.16 K at 611.7 Pa with three phases coexisting; the ice point is 273.15 K at 1 atm. They differ by 0.01 K, but only the triple point defines the kelvin.",
            "<b>Using a thermometer outside its range.</b> Mercury above 357 °C or below −39 °C reads nothing meaningful, because the mercury has boiled or frozen. Pick the device whose substance actually spans the interval you need, and above 1000 °C that means giving up contact altogether."
          ]
        },
        {
          "t": "protip",
          "html": "carry one identity, not three. for a fixed mass of gas between any two states, P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>, kelvin throughout, and every boyle, charles or gay-lussac question is just that with one quantity held fixed. one equation instead of three to remember, and no chance of holding the wrong thing constant. two sanity checks worth reflexes. first, α for a gas is 1/273 per °C, about three hundred times a solid's, so if a gas problem gives you a change of a fraction of a percent for a 100-degree rise, you have used a solid's coefficient by mistake. second, before you take any ratio, glance at your temperatures and ask whether the smaller one is at least 200. if it is not, you forgot to convert."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>t</i> = [(<i>X<sub>t</sub></i> − <i>X</i><sub>0</sub>)/(<i>X</i><sub>100</sub> − <i>X</i><sub>0</sub>)] × 100", "note": "one formula for any thermometric property: length, pressure, resistance, emf" },
            { "f": "<i>T</i> = 273.16 × (<i>P</i>/<i>P</i><sub>tr</sub>) K", "note": "the standard; all dilute gases agree, and it needs only ONE fixed point" },
            { "f": "0 K = −273.15 °C", "note": "the extrapolated zero-pressure intercept, the same for every gas, and unreachable" },
            { "f": "<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> · <i>PV</i> = <i>nRT</i>", "note": "R = 8.314 J/mol K; Boyle holds T, Charles holds P, Gay-Lussac holds V" },
            { "f": "triple point of water: 273.16 K at 611.7 Pa", "note": "three phases coexisting; NOT the 1 atm ice point at 273.15 K" },
            { "f": "α<sub>gas</sub> = 1/273.15 ≈ 3.66 × 10<sup>−3</sup> per °C", "note": "the same for every ideal gas, and far larger than any solid's" }
          ],
          "aids": [
            "\"measure by a property, standardise by a gas, count from absolute zero\"",
            "\"Boyle holds T, Charles holds P, Gay-Lussac holds V\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Change of State, the Triple Point and Phase Diagrams",
      "chip": "06 CHANGE OF STATE",
      "kalam": "slide along a constant-pressure line and see which border you cross",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 taught you to count the heat a phase change costs, <i>Q</i> = <i>mL</i>, and to budget it in mixing problems. But <b>when</b> and <b>why</b> a substance changes state, and how pressure shifts those transitions, is a separate story and a heavily tested one. Matter exists in three common states and a pure substance moves between them along three borders: <b>melting and freezing</b>, solid to liquid; <b>vaporisation and condensation</b>, liquid to gas; and <b>sublimation</b>, solid straight to gas with no liquid in between, which is what dry ice, camphor, naphthalene balls and iodine all do. Each transition happens at a fixed temperature for a given pressure, with latent heat flowing in or out."
        },
        {
          "t": "p",
          "html": "<b>Melting point and pressure.</b> For <i>most</i> substances the melting point RISES as pressure increases, because squeezing favours the denser solid. Water is the famous rebel: ice is <b>less</b> dense than liquid water, which is why it floats and why pipes burst, so for water the melting point FALLS with pressure. That one fact powers <b>regelation</b>. Press a fine loaded wire over a block of ice and the high pressure directly beneath it lowers the local melting point. The ice there melts, the wire sinks through, and above the wire, where the pressure has been released, the water is below its normal melting point again and refreezes. The wire descends through the block, which re-fuses behind it and stays whole. It is also the textbook, if slightly oversimplified, story of why ice is slippery under a skate."
        },
        {
          "t": "think",
          "html": "a phase diagram is a map of which state a substance prefers at each pressure and temperature. the three regions are territories, the three curves are borderlines where two states are exactly tied, and crossing a border means switching state. the triple point is the one address on the whole map where all three territories meet at a single corner. whether the fusion border leans left, as water's does, or right, as almost everything else's does, is the entire secret behind regelation, and you can read it off the picture without a single formula."
        },
        {
          "t": "p",
          "html": "<b>Boiling point and pressure.</b> A liquid boils when its saturated vapour pressure equals the external pressure. Raise the external pressure and you must reach a higher temperature before that happens, which is the <b>pressure cooker</b>: trapped steam raises the internal pressure, the boiling point climbs above 100 °C, and food cooks faster because the water around it is genuinely hotter. Conversely, high in the mountains the air pressure is low, water boils <i>below</i> 100 °C, and food cooked in that cooler water takes longer. The controlling variable is always the temperature of the boiling water, and pressure is what sets it."
        },
        {
          "t": "p",
          "html": "Plot pressure against temperature and you get a <b>phase diagram</b>: three regions, solid, liquid and gas, separated by three curves, fusion, vaporisation and sublimation. All three curves meet at one special point, the <b>triple point</b>, the only pressure and temperature at which solid, liquid and vapour coexist in equilibrium, and for water that is 273.16 K at 611.7 Pa. The vaporisation curve does not run on forever: it ENDS at the <b>critical point</b>, 647 K and 22.1 MPa for water. Above the critical temperature there is no liquid-gas distinction at all, and you cannot liquefy a gas by pressure alone, however hard you squeeze."
        },
        {
          "t": "def",
          "term": "Evaporation is not boiling",
          "html": "<b>Boiling</b> is a <b>bulk</b> phenomenon at one particular temperature, the boiling point: bubbles form throughout the liquid, and it needs a continuous supply of heat. <b>Evaporation</b> happens only at the <b>surface</b> and at <b>any</b> temperature: the fastest molecules escape, leaving the rest with a lower average energy. That is why evaporation <b>cools</b>. Sweat evaporating cools your skin, water seeping through a porous earthen matka keeps what is inside cool, and a desert cooler works by evaporating water into dry air. Evaporation speeds up with higher temperature, larger exposed surface, drier air and moving air, which is exactly the four-part answer a board question wants."
        },
        {
          "t": "defgrid",
          "title": "The numbers and signs of this topic",
          "rows": [
            { "k": "Triple point, water", "v": "273.16 K, that is 0.01 °C, at 611.7 Pa ≈ 0.006 atm. All three phases coexist; it defines the kelvin" },
            { "k": "Critical point, water", "v": "647 K, that is 374 °C, at 22.1 MPa ≈ 218 atm. Above it no pressure produces a liquid" },
            { "k": "Melting point vs <i>P</i>", "v": "water DECREASES, about −0.0075 °C per atm; most substances increase" },
            { "k": "Boiling point vs <i>P</i>", "v": "increases with external pressure, the pressure cooker; decreases at altitude, slow mountain cooking" },
            { "k": "Triple point, CO<sub>2</sub>", "v": "216.6 K at 5.1 atm, which is ABOVE 1 atm, so dry ice sublimes rather than melting" },
            { "k": "Sublimation rule", "v": "a substance sublimes at any ambient pressure BELOW its triple-point pressure" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SLOPE OF A PHASE BOUNDARY",
          "tag": "for JEE Advanced; the SIGN is the examinable part",
          "main": "<i>dP</i>/<i>dT</i> = <i>L</i>/(<i>T</i> Δ<i>V</i>)",
          "legend": [
            "<i>L</i> is the latent heat of the transition in J/kg, <i>T</i> the absolute transition temperature in kelvin, and Δ<i>V</i> the change in SPECIFIC volume, in m<sup>3</sup>/kg, on going from the lower phase to the higher one",
            "Δ<i>V</i> must be a specific volume, per kilogram, not a bulk volume in m<sup>3</sup>: use a bulk volume and the two sides of the equation differ by a mass, which is the fastest way to catch the slip",
            "for water's fusion curve Δ<i>V</i> is NEGATIVE, because ice shrinks on melting, so <i>dP</i>/<i>dT</i> is negative and the fusion line slopes BACKWARD, which is the whole anomaly in one sign"
          ],
          "note": "computing with it is beyond the core syllabus, but the sign is not. Ask only whether the solid is denser or less dense than the liquid, and the direction the melting point moves follows immediately."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.11 · TWO PHASE DIAGRAMS",
          "chips": ["water", "carbon dioxide"],
          "captions": [
            "Water, not to scale. The three curves meet at the triple point, 273.16 K and 611.7 Pa, and the vaporisation curve ends at the critical point. The fusion curve leans LEFT, its negative slope being the water anomaly, and that is what regelation exploits. The dashed line is 1 atm: because it runs well above the triple point, it crosses the fusion curve at 0 °C and the vaporisation curve at 100 °C, giving water a genuine liquid range in between.",
            "Carbon dioxide, not to scale. Two things differ. The fusion curve leans RIGHT, as it does for almost every substance, because solid CO₂ is denser than liquid CO₂. And the triple point sits at 5.1 atm, ABOVE ordinary atmospheric pressure, so the dashed 1 atm line passes BELOW it and crosses only the sublimation curve. Dry ice goes straight from solid to gas, and to obtain liquid CO₂ at all you must first push the pressure above 5.1 atm."
          ],
          "frames": [
            {
              "x": [0, 8.6], "y": [0, 9],
              "axisX": "temperature", "axisY": "pressure",
              "ticksX": { "at": [2.0, 6.8], "labels": ["273.16 K", "647 K"] },
              "ticksY": { "at": [1.0, 2.2, 6.3], "labels": ["611 Pa", "1 atm", "22.1 MPa"] },
              "curves": [
                { "c": "pts", "pts": [[0.5, 0.04], [1.0, 0.2], [1.5, 0.5], [2.0, 1.0]], "smooth": true },
                { "c": "pts", "pts": [[2.0, 1.0], [1.85, 3.5], [1.7, 6.0], [1.55, 8.5]], "smooth": true },
                { "c": "pts", "pts": [[2.0, 1.0], [3.0, 1.5], [4.0, 2.3], [5.0, 3.4], [6.0, 4.7], [6.8, 6.3]], "smooth": true },
                { "c": "line", "m": 0, "k": 2.2, "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 2.0, "y": 1.0, "glyph": "dot", "label": "triple" },
                { "x": 6.8, "y": 6.3, "glyph": "dot", "label": "critical" }
              ],
              "labels": [
                { "x": 1.0, "y": 6.0, "text": "SOLID" },
                { "x": 4.0, "y": 6.8, "text": "LIQUID" },
                { "x": 6.0, "y": 1.3, "text": "VAPOUR" }
              ]
            },
            {
              "x": [0, 8.6], "y": [0, 9],
              "axisX": "temperature", "axisY": "pressure",
              "ticksX": { "at": [2.5, 6.5], "labels": ["216.6 K", "304 K"] },
              "ticksY": { "at": [1.6, 4.0], "labels": ["1 atm", "5.1 atm"] },
              "curves": [
                { "c": "pts", "pts": [[0.6, 0.3], [1.2, 1.0], [1.8, 2.1], [2.5, 4.0]], "smooth": true },
                { "c": "pts", "pts": [[2.5, 4.0], [2.75, 6.2], [3.0, 8.5]], "smooth": true },
                { "c": "pts", "pts": [[2.5, 4.0], [3.5, 4.5], [4.5, 5.1], [5.5, 5.6], [6.5, 6.2]], "smooth": true },
                { "c": "line", "m": 0, "k": 1.6, "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 2.5, "y": 4.0, "glyph": "dot", "label": "triple" }
              ],
              "labels": [
                { "x": 1.3, "y": 6.5, "text": "SOLID" },
                { "x": 4.6, "y": 7.2, "text": "LIQUID" },
                { "x": 5.6, "y": 1.5, "text": "GAS" },
                { "x": 3.2, "y": 0.6, "text": "sublimes at 1 atm" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a phase diagram, board-answer style",
          "steps": [
            "<b>Locate the three regions and the three borders.</b> Each region is one stable state; each curve is a two-phase equilibrium where the substance can sit as either phase or a mixture. Crossing a curve IS the phase change.",
            "<b>Find the triple point.</b> Where all three curves meet, all three phases coexist. It is a fixed, reproducible state, which is exactly why it anchors the kelvin.",
            "<b>Read the SLOPE of the fusion curve.</b> Positive, as for most substances, means raising the pressure raises the melting point. Negative, as for water, means raising it LOWERS the melting point. The sign comes straight from whether the solid is denser or less dense than the liquid.",
            "<b>Answer the question by sliding along a line.</b> A constant-pressure question is a horizontal line, a constant-temperature question a vertical one. Move along it and note which borders you cross and in what order.",
            "<b>Check the critical point before promising a liquid.</b> Above the critical temperature the liquid-gas border simply does not exist any more, so no amount of pressure will condense the gas."
          ]
        },
        {
          "t": "proc",
          "title": "Deciding whether something melts or sublimes",
          "steps": [
            "<b>Find the substance's triple-point PRESSURE.</b> That single number decides the whole question, and it is what the problem will hand you.",
            "<b>Compare it with the ambient pressure.</b> If the ambient pressure is BELOW the triple-point pressure, a horizontal warming line passes below the triple point.",
            "<b>Below the triple point, only the sublimation curve is there to cross</b>, because the liquid region lies entirely above the triple point. So the solid goes straight to vapour.",
            "<b>Above the triple-point pressure, the line crosses fusion first and vaporisation later</b>, so the substance melts, exists as a liquid over a genuine range, and then boils.",
            "<b>Apply it to the two standard cases.</b> Water's triple-point pressure is 0.006 atm, far below 1 atm, so water melts normally. Carbon dioxide's is 5.1 atm, far above it, so dry ice sublimes and liquid CO<sub>2</sub> needs a pressure vessel."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Explain, in terms of boiling point and pressure, why food cooks faster in a pressure cooker than in an open pan, and why it cooks more slowly at a high-altitude hill station.",
          "steps": [
            "Start from the definition: a liquid boils when its saturated vapour pressure equals the surrounding pressure. Everything follows from that one sentence.",
            "In a pressure cooker the trapped steam raises the internal pressure well above 1 atm. The vapour pressure of water now has to climb higher before it can match, so the boiling point rises above 100 °C.",
            "The food therefore sits in genuinely HOTTER water, and a higher temperature speeds up the cooking. The pressure never cooks anything directly; it only sets the temperature of the water.",
            "At a hill station the atmospheric pressure is lower than at sea level, so the vapour pressure matches it at a lower temperature and water boils BELOW 100 °C. The cooler boiling water transfers heat to the food more slowly, and cooking takes longer.",
            "The chain to write out for marks: higher pressure gives a higher boiling point gives hotter water gives faster cooking, and lower pressure reverses every link."
          ],
          "ans": "pressure sets the boiling point, and the boiling point sets the cooking rate"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A copper wire carrying heavy weights at its two ends is hung over a slab of ice. After some time the wire has passed completely through the slab, yet the slab is still a single solid block. Name and explain the phenomenon.",
          "steps": [
            "The trap is to say the wire cut or sawed its way through. It did not cut anything, and the giveaway is right there in the question: the slab is still whole. A cut would have left a slit.",
            "The phenomenon is REGELATION. The large pressure directly beneath the wire lowers the melting point of the ice there, because water's melting point falls with pressure.",
            "So the ice melts under the wire and lets it sink. Above the wire the pressure has been released, the water is now below its normal melting point again, and it REFREEZES.",
            "The refreezing releases latent heat, which conveniently supplies much of the heat needed to melt the ice just ahead of the wire. The wire descends and the block re-fuses behind it.",
            "Regelation works ONLY because water is the anomaly. A substance whose melting point rises with pressure would never let the wire through, so any option blaming cutting or friction heat is wrong on sight."
          ],
          "ans": "regelation: it melts under the pressure and refreezes when the pressure is released"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Solid carbon dioxide, dry ice, has a triple point at 216.6 K and 5.1 atm. Explain with a phase-diagram argument why dry ice at 1 atm turns directly into gas without ever becoming a liquid.",
          "steps": [
            "Put the triple point on the map: it sits at 5.1 atm, well ABOVE ordinary atmospheric pressure.",
            "The liquid region of any phase diagram lies above the triple point, wedged between the fusion and vaporisation curves. Below the triple-point pressure there is no liquid territory at all.",
            "At 1 atm a horizontal warming line therefore lies BELOW the triple point, so as the solid warms it crosses only the sublimation curve, solid straight to vapour, and never enters the liquid region.",
            "Hence dry ice sublimes at 1 atm. To obtain liquid CO<sub>2</sub> you must first raise the pressure above 5.1 atm, which is exactly what a CO<sub>2</sub> fire extinguisher cylinder does.",
            "The rule generalises: a substance sublimes at any ambient pressure below its triple-point pressure. Water's triple-point pressure is only about 0.006 atm, far below 1 atm, which is why water melts rather than sublimes."
          ],
          "ans": "1 atm lies below CO<sub>2</sub>'s 5.1 atm triple point, so only the sublimation curve is crossed"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Estimate the change in the melting point of ice when the pressure is increased by 1 atm. Use <i>dP</i>/<i>dT</i> = <i>L</i>/(<i>T</i>Δ<i>V</i>) with <i>T</i> = 273 K, <i>L<sub>f</sub></i> = 3.36 × 10<sup>5</sup> J/kg, ρ<sub>ice</sub> = 917 kg/m<sup>3</sup> and ρ<sub>water</sub> = 1000 kg/m<sup>3</sup>. Comment on the sign.",
          "steps": [
            "Volume change per kilogram on melting, ice to water: Δ<i>V</i> = 1/ρ<sub>water</sub> − 1/ρ<sub>ice</sub> = 1/1000 − 1/917.",
            "Δ<i>V</i> = 1.000 × 10<sup>−3</sup> − 1.0905 × 10<sup>−3</sup> = −9.05 × 10<sup>−5</sup> m<sup>3</sup>/kg. It is NEGATIVE because water is denser than ice: the substance shrinks on melting, which is the anomaly stated as a number.",
            "Invert the relation to get the quantity you want: <i>dT</i>/<i>dP</i> = <i>T</i>Δ<i>V</i>/<i>L</i> = (273)(−9.05 × 10<sup>−5</sup>)/(3.36 × 10<sup>5</sup>) = −7.35 × 10<sup>−8</sup> K/Pa.",
            "Multiply by Δ<i>P</i> = 1 atm = 1.013 × 10<sup>5</sup> Pa: Δ<i>T</i> = (−7.35 × 10<sup>−8</sup>)(1.013 × 10<sup>5</sup>) ≈ −7.4 × 10<sup>−3</sup> K.",
            "So the melting point falls by about 0.0074 °C per atmosphere. The negative sign is the entire point, and it traces directly to Δ<i>V</i> being negative, that is, to ice being less dense than water. This tiny but real drop is what makes regelation possible. For a normal substance, with Δ<i>V</i> positive, the same relation gives a melting point that RISES with pressure."
          ],
          "ans": "the melting point falls by about 0.0074 °C per atm"
        },
        {
          "t": "mcq",
          "q": "The melting point of ice, as the external pressure is increased:",
          "opts": [
            { "label": "increases", "nudge": "True for most OTHER substances, which is exactly what makes it the classic trap. Water is the exception, because its solid is less dense than its liquid." },
            { "label": "decreases", "nudge": null },
            { "label": "stays constant", "nudge": "This would need ΔV to be zero on melting, meaning ice and water had identical densities, which they plainly do not." },
            { "label": "first rises, then falls", "nudge": "This invents a turning point on the fusion curve. The curve's slope keeps its sign, which is fixed by the sign of ΔV." }
          ],
          "correct": 1,
          "solution": "Ice is less dense than water, so ΔV is negative on melting and dP/dT = L/(TΔV) is negative: the fusion curve slopes backward and the melting point falls with pressure. This is the basis of regelation."
        },
        {
          "t": "mcq",
          "q": "Water boils at a temperature below 100 °C when:",
          "opts": [
            { "label": "the external pressure is increased", "nudge": "Raising the pressure means the vapour pressure must climb higher to match it, so the boiling point goes UP. That is the pressure cooker." },
            { "label": "the external pressure is decreased, as at high altitude", "nudge": null },
            { "label": "salt is dissolved in it", "nudge": "A dissolved solid RAISES the boiling point, which is why salted water takes slightly longer to boil, not less." },
            { "label": "the container is sealed", "nudge": "Sealing lets vapour build up and raises the internal pressure, so this is the pressure cooker again and the boiling point rises." }
          ],
          "correct": 1,
          "solution": "A liquid boils when its saturated vapour pressure equals the external pressure. Lower the external pressure and that match happens at a lower temperature, which is why food cooks slowly in the mountains."
        },
        {
          "t": "mcq",
          "q": "At the triple point of a substance:",
          "opts": [
            { "label": "only solid and liquid coexist", "nudge": "That describes an ordinary point on the fusion curve, a two-phase equilibrium, not the one point where three curves meet." },
            { "label": "only liquid and vapour coexist", "nudge": "That describes an ordinary point on the vaporisation curve, again only two phases." },
            { "label": "solid, liquid and vapour coexist in equilibrium", "nudge": null },
            { "label": "the substance cannot exist", "nudge": "The opposite is true: it is the one state where every phase can exist at once, which is precisely why it is so useful as a standard." }
          ],
          "correct": 2,
          "solution": "The triple point is the unique pressure and temperature at which all three phases coexist. Being a single reproducible point rather than a curve is why it defines the kelvin."
        },
        {
          "t": "mcq",
          "q": "Evaporation differs from boiling in that evaporation:",
          "opts": [
            { "label": "occurs only at the boiling point", "nudge": "That describes boiling. Evaporation happens at any temperature at all, which is why a wet floor dries in a cool room." },
            { "label": "occurs throughout the bulk of the liquid", "nudge": "That also describes boiling: bubbles forming through the body of the liquid are the signature of the bulk process." },
            { "label": "occurs only at the liquid surface, at any temperature, and cools the liquid", "nudge": null },
            { "label": "releases heat to the liquid", "nudge": "This reverses the effect. The most energetic molecules leave, so the average energy of those remaining falls and the liquid gets cooler, not warmer." }
          ],
          "correct": 2,
          "solution": "Evaporation is a surface phenomenon at all temperatures. The fastest molecules escape, lowering the average energy of the rest, which is why sweating and an earthen matka both cool by evaporation."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define sublimation, the triple point of a substance, and regelation, giving one everyday example of each.", "a": "Sublimation: a solid passing directly to gas with no liquid stage, as dry ice and camphor do. Triple point: the unique pressure and temperature at which solid, liquid and vapour coexist, for water 273.16 K at 611.7 Pa. Regelation: melting under pressure and refreezing when the pressure is released, as when a loaded wire passes through a block of ice that stays whole." },
            { "q": "[NEET] A wet cloth wrapped around a water bottle keeps it cooler than a dry one in a hot, dry breeze. Name the effect and state two factors that make it stronger.", "a": "Cooling by evaporation: the fastest molecules leave the surface, lowering the average energy of what remains. It is stronger with LOWER humidity and with faster-moving air, and also with a higher temperature and a larger exposed surface." },
            { "q": "[JEE Main] The triple point of water is 273.16 K at 0.006 atm. Explain why, at the much higher 1 atm, water has a distinct liquid range between 0 °C and 100 °C rather than subliming.", "a": "At 1 atm the pressure is far ABOVE the triple-point pressure, so a horizontal constant-pressure line passes above the triple point and crosses BOTH the fusion and the vaporisation curves. That gives a melt at 0 °C, a genuine liquid range, and a boil at 100 °C. Sublimation would require the line to pass below the triple point." },
            { "q": "[JEE Main] A sealed flask half-filled with water is heated. Describe what happens to the boiling point as heating continues, and why.", "a": "It RISES. The vapour cannot escape, so the internal pressure climbs as heating continues, and a higher external pressure demands a higher temperature before the saturated vapour pressure can match it. This is exactly the pressure cooker, and it is why sealed vessels are pressure-rated." },
            { "q": "[JEE Advanced] Using <i>dP</i>/<i>dT</i> = <i>L</i>/(<i>T</i>Δ<i>V</i>), explain qualitatively why the vaporisation curve on a phase diagram is far LESS steep than the fusion curve.", "a": "Compare the two Δ<i>V</i> values. For vaporisation Δ<i>V</i> is enormous, because a liquid turning to gas expands by a factor of about a thousand, so <i>dP</i>/<i>dT</i> = <i>L</i>/(<i>T</i>Δ<i>V</i>) is small and the curve rises gently. For fusion Δ<i>V</i> is tiny, since a solid and its liquid have nearly the same density, so <i>dP</i>/<i>dT</i> is huge and the curve is steep, nearly vertical." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Assuming every melting point rises with pressure.</b> Water is the great exception, with Δ<i>V</i> negative on melting, so its melting point FALLS. Before guessing the sign, ask whether the solid is denser or less dense than the liquid, and let that decide.",
            "<b>Calling regelation cutting.</b> The wire never cuts the ice. The ice melts under the pressure and refreezes when the pressure is released, which is why the block is still one piece afterwards. If it had been cut there would be a slit.",
            "<b>Confusing the triple point with the ordinary melting or boiling point.</b> The triple point is a single pressure and temperature, at low pressure, with three phases present. It is not the 1 atm melting point at 0 °C, and not the 1 atm boiling point at 100 °C.",
            "<b>Thinking any gas can be liquefied by squeezing hard enough.</b> Above the CRITICAL temperature no pressure whatever produces a liquid, because the liquid-gas border has ended at the critical point. Oxygen at room temperature cannot be liquefied by pressure alone, no matter what the cylinder is rated to.",
            "<b>Mixing up evaporation and boiling.</b> Evaporation is a surface process at any temperature and it COOLS the liquid. Boiling is a bulk process at one temperature and it requires a continuous input of heat. Their causes, locations and energy flows all differ."
          ]
        },
        {
          "t": "protip",
          "html": "solve conceptual questions on the map, not on a formula. sketch a quick P against T diagram, mark the triple point and the critical point, then slide along a horizontal constant-pressure line or a vertical constant-temperature one and see which border you cross. pressure cooker, mountain cooking, dry-ice sublimation and regelation all fall out of that one picture with no arithmetic at all. two reflexes to carry with it. one, the sign of the fusion curve's lean is the sign of ΔV, so ask which is denser, the solid or the liquid, and read the answer off. two, remember that transition temperatures printed in tables are for PURE substances at standard pressure: salt lowers ice's melting point, dissolved solids raise a liquid's boiling point, and a question that mentions impurities is telling you which way to shift."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "three transitions: melting, vaporisation, sublimation", "note": "each absorbs or releases latent heat Q = mL at constant T" },
            { "f": "melting point vs pressure: water DOWN, most substances UP", "note": "the sign of dP/dT is the sign of ΔV; water's negative ΔV is the basis of regelation" },
            { "f": "boiling point rises with external pressure", "note": "pressure cooker up, mountain cooking down; the water's temperature does the cooking" },
            { "f": "triple point of water: 273.16 K at 611.7 Pa", "note": "all three phases coexist, and it defines the kelvin" },
            { "f": "critical point of water: 647 K at 22.1 MPa", "note": "above it, no liquefaction by pressure at all" },
            { "f": "sublimes when ambient <i>P</i> is below the triple-point <i>P</i>", "note": "CO₂'s triple point is 5.1 atm, so dry ice sublimes at 1 atm" },
            { "f": "evaporation: surface, any temperature, cools", "note": "boiling: bulk, at the boiling point, needs continuous heat" }
          ],
          "aids": [
            "\"squeeze ice and it melts; squeeze vapour and it boils hotter\"",
            "\"triple point: all three at one corner\"",
            "\"evaporation cools, boiling needs heat\""
          ]
        }
      ]
    }
  ]
};

export default phy11ThermalProperties;
