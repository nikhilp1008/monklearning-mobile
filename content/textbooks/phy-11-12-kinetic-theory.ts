/**
 * Chapter 12 · Kinetic Theory. Physics, Class 11.
 *
 * Restructured from pages 805 to 865 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-11-thermodynamics.ts, which is the chapter immediately before this
 * one.
 *
 * FIVE SUBTOPICS, SIX TOPICS, AND THE ONE SPLIT. The source range carries five
 * subtopics: 0 Molecular Nature of Matter (pp. 805 to 811), 1 Ideal Gas and Gas
 * Laws (812 to 819), 2 Kinetic Theory and Gas Pressure (820 to 827), 3 RMS
 * Speed and Maxwell Distribution (828 to 835), 4 Degrees of Freedom and Mean
 * Free Path (836 to 843), followed by a Chapter Summary (844 to 847) and the
 * Round 2 Addendum (848 to 865). Subtopics 0 to 3 map 1:1 onto Topics 01 to 04.
 * Subtopic 4 is SPLIT into Topics 05 and 06, on a seam the source crosses
 * itself four separate times: its own title joins two nouns with an "and"; its
 * Section 1 opens the second half with the sentence "The second idea in this
 * subtopic is about motion between collisions"; its Section 3 is divided into
 * "Part A, Specific heats and gamma from equipartition" and "Part B, Mean free
 * path, by the collision-cylinder argument" plus "Part C, collision frequency";
 * and the chapter summary's own exam-emphasis table on pages 846 to 847 lists
 * "Degrees of freedom, gamma, C_V" and "Mean free path" as two separate rows
 * with different exam weights. Nothing was merged and nothing was dropped.
 *
 * Five topics at 150 blocks would be 30 per topic, denser than any chapter in
 * the corpus; six gives 25.0, against thermodynamics' 25.7 and the physics
 * median of 25.5. The validator's cap is 6 and this sits exactly on it.
 *
 * ERRATA REVIEWED (source pages 977 to 981, all five pages read in full).
 * NOT ONE of the nine listed entries touches pages 805 to 865. The entries are
 * in Chapters 1, 2, 4, 6, 8, 9 and 11. The last entry on page 981 is titled
 * "Kinetic theory degrees-of-freedom table: CO2 misdescribed as bent", which
 * reads as though it were mine, and it is not: it sits under the errata's
 * "Chapter 11: Thermodynamics" heading and quotes a table that occurs at
 * source lines inside the THERMODYNAMICS range, where the printed row reads
 * "Polyatomic (nonlinear, e.g. CO2 bent / H2O)". Grepped the whole book: the
 * string "CO2 bent" occurs exactly twice, both inside Chapter 11, and zero
 * times in 805 to 865. This chapter's own degrees-of-freedom table, on page
 * 837, already reads "Non-linear polyatomic (H2O, NH3)" and is correct as
 * printed. Topic 05's `defgrid` and `mistakes` nonetheless carry the CO2
 * warning explicitly, because it is a real trap and because
 * phy-11-11-thermodynamics.ts carries it too and the two chapters must not
 * disagree in front of a student.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key in subtopics 0 to 4 (pages 805 to 843) was recomputed independently and
 * all of them check out, with one rounding slip and one internal inconsistency
 * noted below. The Round 2 Addendum (848 to 865) was recomputed the same way
 * and is NOT clean: seven defects, none in the errata, one of them an
 * ill-posed problem rather than an arithmetic slip.
 *
 *   1. Subtopic 0, MCQ Q4 and the Pitfalls list, pages 810 to 811. The option
 *      keyed correct reads "about 1000 times the molecular diameter" and the
 *      pitfall says "mean free path (~1000x a diameter)", but the answer's own
 *      explanation says "of order a few-hundred molecular diameters" and the
 *      chapter's own worked value in subtopic 4 (page 840) gives
 *      6.8 x 10^-8 / 3.7 x 10^-10 = 184. The orphaned run at the foot of page
 *      807 agrees: "about 20 times the interatomic distance and about 200
 *      times the molecular size". The 1000 figure only survives if the
 *      molecular diameter is taken as a round 1 Angstrom rather than
 *      nitrogen's actual 3.7. Resolved here by printing the absolute lengths
 *      and the two honest ratios instead of the slogan: d ~ 3 x 10^-10 m,
 *      mean spacing ~ 3.3 x 10^-9 m (about 11 d), mean free path
 *      ~ 6.8 x 10^-8 m (about 180 d, and about 20 times the spacing). Topic
 *      01's MCQ 4 is keyed to "a couple of hundred times the molecular
 *      diameter", with "about ten times" offered as the spacing distractor.
 *   2. Subtopic 1, Practice answer 2, page 817. Printed "~ 20.1 g/mol". Recomputed:
 *      M = rho R T / P = 0.90 x 0.0821 x 546 / 2.0 = 40.344 / 2.0 = 20.17,
 *      which is 20.2 g/mol to three figures. Printed as 20.2 in Topic 02's
 *      practice item 2.
 *   3. Addendum A, Practice answer 3, page 852. Printed "T2/T1 = (V1/V2)^0.4
 *      ~ 0.76" after correctly finding V2/V1 = 2^(1/1.4) = 1.64. The exponent
 *      was applied to the PRESSURE ratio, not the volume ratio: 2^-0.4 =
 *      0.758, which is where 0.76 comes from. Correct: T2/T1 =
 *      (1/1.6407)^0.4 = 0.820. Cross-checked from the gas law itself, which
 *      does not involve gamma at all: T2/T1 = (P2V2)/(P1V1) = 0.5 x 1.6407 =
 *      0.820. Also equals (P2/P1)^((gamma-1)/gamma) = 0.5^(2/7) = 0.820.
 *   4. Addendum B, Practice answer 3, page 856. States the formula
 *      a = 27 b^2 P_c, then reports a = 3.64 L^2 atm /mol^2. With the answer's
 *      own b = V_c/3 = 31.87 cm^3/mol = 0.03187 L/mol: 27 x (0.03187)^2 x
 *      73.8 = 27 x 1.0157 x 10^-3 x 73.8 = 2.02 L^2 atm /mol^2. Confirmed by
 *      the equivalent route a = 3 P_c V_c^2 = 3 x 73.8 x (0.0956)^2 = 2.02.
 *      The printed 3.64 is carbon dioxide's tabulated a value, which is what
 *      you get from the OTHER pair of critical constants,
 *      a = 27 R^2 T_c^2 / (64 P_c) = 3.56; the given (T_c, P_c, V_c) triple is
 *      over-determined and mutually inconsistent with van der Waals, since a
 *      real gas has Z_c near 0.28 and van der Waals demands 0.375. Nothing
 *      from Addendum B is used below beyond one qualitative protip line.
 *   5. Addendum B, Practice answer 5, page 856. The algebra correctly reaches
 *      0 = a/(RT) - b - ab/(RT V_m), which rearranges to V_m = ab/(a - bRT).
 *      The printed next line is "V_m = ab/(a/(RT) - b) = abRT/(a - bRT)",
 *      which carries a spurious factor of RT, and the quoted answer 0.104
 *      m^3/mol inherits it. Correct: with a = 1.39, b = 3.91 x 10^-5 and
 *      RT = 2494.2, bRT = 0.0975, so V_m = 1.39 x 3.91 x 10^-5 / 1.2925 =
 *      4.21 x 10^-5 m^3/mol, just above b as a Z = 1 crossing must be. The
 *      printed 0.104 m^3/mol is an essentially ideal molar volume, where the
 *      two correction terms are 3.8 x 10^-4 and 5.4 x 10^-3 and are nowhere
 *      near equal, so it cannot be a root.
 *   6. Addendum C, Practice item 5, page 859. Prints
 *      "F = 1 - (2/sqrt(pi)) integral of x^2 e^(-x^2)". The reduced speed
 *      distribution is (4/sqrt(pi)) x^2 e^(-x^2), which is what integrates to
 *      1 over 0 to infinity; with 2/sqrt(pi) the formula gives 0.70, not the
 *      0.393 the answer key correctly quotes. The prefactor is wrong, the
 *      numerical answer is right. Independently confirmed at 0.392 from
 *      F(>v) = erfc(x) + (2/sqrt(pi)) x e^(-x^2) at x = sqrt(1.5), and this is
 *      the 39 per cent that Figure 12.7's second chip shades.
 *   7. Addendum D, Practice answer 5, page 862. A 1:1 He/N2 mixture effuses
 *      until half the moles have gone; printed residual x_He = 0.242, from the
 *      shortcut x1/x2 = (x1,0/x2,0)(N/N0)^(alpha-1). That shortcut is not the
 *      Rayleigh result. Effusion gives dN1/dN2 = (N1/N2) sqrt(M2/M1), so
 *      N1/N1,0 = (N2/N2,0)^alpha with alpha = sqrt(7) = 2.6458. Writing
 *      u = N2/N2,0 and imposing N1 + N2 = 0.5 N0 gives u^alpha + u = 1, whose
 *      root is u = 0.6635, so N2 = 0.3318 N0, N1 = 0.1679 N0 and
 *      x_He = 0.336. Not 0.242. Nothing from Addendum D is used below.
 *   8. Addendum E, page 863. Prints eta = (1/3) rho v_av lambda AND
 *      lambda = 1/(sqrt(2) pi d^2 n), which together give
 *      eta = m v_av / (3 sqrt(2) pi d^2). The next printed line is
 *      eta = (1/(3 pi d^2)) sqrt(8 m k_B T / pi), which has silently dropped
 *      the sqrt(2), and Example E.1 then computes 1.72 x 10^-5 Pa s from the
 *      dropped-sqrt(2) version and calls it a match for the measured
 *      1.76 x 10^-5. The self-consistent simple-kinetic-theory value is
 *      1.21 x 10^-5 Pa s; the agreement is an accident of two errors. Only the
 *      SCALINGS from Addendum E are used below (eta and kappa go as sqrt(T)
 *      and are pressure-independent, D goes as T^(3/2)/P), all three of which
 *      are correct, and they appear as one paragraph in Topic 06, never as a
 *      formula.
 *   9. Addendum A, Example A.2, pages 851 to 852, is ill-posed rather than
 *      arithmetically wrong. It has a piston "held at rest" whose gas pressure
 *      already equals P_0 + Mg/A, then releases it and asks for the final
 *      temperature after an adiabatic expansion. With P_1 = P_ext the piston
 *      is already in mechanical equilibrium and cannot move at all, so
 *      Delta V = 0 and T_2 = T_1 trivially; the printed "special case"
 *      resolution dresses a degenerate problem as a subtlety. Not used.
 *
 * Independently recomputed and found CLEAN, for the record: every worked
 * example and practice answer in subtopics 0 to 4; Addendum A Example A.1
 * (T_2 = 543 K, W_on = 5.06 kJ, checked twice against Delta U = n C_V Delta T)
 * and Practice 2, 4, 5, 6; Addendum B Example B.1 (T_B = 1025 K, T_c = 304 K,
 * P_c = 7.4 x 10^6 Pa, Z_c = 0.375); Addendum C Method C1 (0.57 beyond v_mp,
 * 0.39 beyond v_rms, both recomputed from erfc), C3 (the flux identity
 * (1/4) n v_av = P/sqrt(2 pi m k_B T), verified algebraically) and Example C.1
 * (2.7 x 10^21 /s); Addendum D Examples D.1 and D.2 and Practice 1 to 4 and 6;
 * Addendum E Example E.2 and Practice 3, 4, 5.
 *
 * PLAUSIBILITY, held everywhere. Nitrogen at 300 K has v_rms = 517 m/s,
 * v_av = 476 m/s, v_mp = 422 m/s, in the fixed ratio sqrt(3) : sqrt(8/pi) :
 * sqrt(2) = 1.22 : 1.13 : 1, and that ordering is checked in every place the
 * three speeds appear. k_B T at 300 K is 4.14 x 10^-21 J. Both are printed as
 * sanity anchors in Topic 04's defgrid and protip, because the commonest error
 * in this chapter (molar mass left in g/mol) is caught by them instantly: it
 * inflates every speed by sqrt(1000) = 32.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T Theta:
 *
 *   - PV = nRT: [M L-1 T-2][L3] = [M L2 T-2]; [mol][M L2 T-2 Theta-1 mol-1]
 *     [Theta] = [M L2 T-2]. Both an energy. OK.
 *   - PV = N k_B T: N is a pure count; [M L2 T-2 Theta-1][Theta] = [M L2 T-2].
 *     OK, and it forces [k_B] = [M L2 T-2 Theta-1].
 *   - P = rho R T / M: [M L-3][M L2 T-2 Theta-1 mol-1][Theta]/[M mol-1] =
 *     [M L-1 T-2], a pressure. OK.
 *   - P_total = sum P_i (Dalton): a sum of pressures is a pressure. OK.
 *   - rate proportional to 1/sqrt(M) (Graham): only ever used as a ratio of two
 *     rates, so both sides are dimensionless. OK.
 *   - n_0 = P/(k_B T): [M L-1 T-2]/([M L2 T-2 Theta-1][Theta]) = [L-3], a
 *     number density. OK.
 *   - l = (1/n_0)^(1/3): [L3]^(1/3) = [L]. OK.
 *   - d = V/A (oil film): [L3]/[L2] = [L]. OK.
 *   - P = (1/3)(N/V) m <v^2> : [L-3][M][L2 T-2] = [M L-1 T-2]. OK.
 *   - P = (1/3) rho v_rms^2 : [M L-3][L2 T-2] = [M L-1 T-2]. OK.
 *   - PV = (2/3)E : [M L2 T-2] both sides. OK, and it shows E/V is an energy
 *     density with the dimensions of a pressure, which is the deeper reason
 *     the two can be equated.
 *   - (1/2) m <v^2> = (3/2) k_B T : [M][L2 T-2] = [M L2 T-2 Theta-1][Theta].
 *     OK.
 *   - v_rms = sqrt(3RT/M): inside the root, [M L2 T-2 Theta-1 mol-1][Theta]/
 *     [M mol-1] = [L2 T-2], so the root is [L T-1]. OK. Identically for
 *     v_av = sqrt(8RT/pi M) and v_mp = sqrt(2RT/M), since pi is a pure number.
 *   - v_rms = sqrt(3P/rho): [M L-1 T-2]/[M L-3] = [L2 T-2], root [L T-1]. OK.
 *   - P(v) = 4 pi (M/2 pi R T)^(3/2) v^2 exp(-Mv^2/2RT): M/(RT) has dimensions
 *     [M mol-1]/([M L2 T-2 mol-1]) = [L-2 T2], so the 3/2 power is [L-3 T3],
 *     times v^2 = [L2 T-2] gives [L-1 T], which is exactly 1/(a speed) as it
 *     must be for P(v) dv to be a dimensionless fraction. The exponent
 *     Mv^2/2RT is [M mol-1][L2 T-2]/[M L2 T-2 mol-1] = dimensionless, which is
 *     the check that matters, since an exponential of a dimensioned quantity
 *     does not exist. OK.
 *   - U = (f/2) n R T: f is a pure count; [mol][M L2 T-2 Theta-1 mol-1][Theta]
 *     = [M L2 T-2]. OK.
 *   - C_V = (f/2) R, C_P = (f/2 + 1) R, C = 3R, C = 9R: all
 *     [M L2 T-2 Theta-1 mol-1], a molar heat capacity. OK.
 *   - gamma = 1 + 2/f: f is dimensionless, so gamma is a pure number, which is
 *     what makes PV^gamma legal in the first place. OK.
 *   - lambda = 1/(sqrt(2) pi d^2 n): 1/([L2][L-3]) = [L]. OK.
 *   - lambda = k_B T/(sqrt(2) pi d^2 P): [M L2 T-2 Theta-1][Theta]/([L2]
 *     [M L-1 T-2]) = [L]. OK, and the two forms agree, which is the check that
 *     n = P/(k_B T) was substituted the right way up.
 *   - nu = v_av/lambda: [L T-1]/[L] = [T-1], a frequency. tau = 1/nu = [T]. OK.
 *
 *   Twenty formulas, twenty verified. The one that catches a mis-substitution
 *   fastest is lambda, because getting n and P the wrong way round leaves [L-1]
 *   rather than [L] and is visible without any arithmetic.
 *
 * SOURCE DAMAGE. This range's dialect is NOT the one the previous chapter hit,
 * and assuming it would have been fatal. Checked mechanically over the 139,484
 * characters of pages 805 to 865:
 *
 *   - GREEK SURVIVES, AS U+1D400-RANGE MATHEMATICAL ALPHANUMERIC. This range
 *     does NOT drop its Greek the way pages 729 to 804 do. Instead every
 *     variable, Latin and Greek alike, arrives as Mathematical Italic:
 *     U+1D463 for v (395 times), U+1D447 for T (371), U+1D443 for P (329),
 *     U+1D6FE for gamma (75), U+1D70B for pi (56), U+1D706 for lambda (50),
 *     U+1D70C for rho (34), and single figures of nu, tau, mu, eta, kappa,
 *     alpha, beta, epsilon, omega. Every one of these is a blank box in the
 *     app's faces and every one is rejected by scripts/validate-chapters.mjs.
 *     So NOTHING in this range could be copied: every symbol below was
 *     retyped, Latin ones as plain italic letters and Greek ones as ordinary
 *     Greek (U+03B3 gamma, U+03BB lambda, U+03C1 rho, U+03C0 pi, U+03BD nu,
 *     U+03C4 tau, U+0394 Delta). The upside of this dialect over the previous
 *     chapter's is that no reconstruction from context was needed: the letters
 *     are all there, just in an unusable encoding.
 *   - "\n7" IS A MINUS SIGN and "\nN" IS A TIMES SIGN, exactly as the brief
 *     says. Three and four instances respectively, all of them load-bearing:
 *     page 807's "F = \n7 dU/dr" is F = -dU/dr; page 837's "C_V = R/(gamma \n7
 *     1)" and "C_P = gamma R/(gamma \n7 1)" are the two reflex identities, and
 *     reading the token literally would print a nonsense denominator; page
 *     810's "1.5 \nN 10^23", "0.5 mol \nN N_A", "3.0 \nN 10^23" and page 810's
 *     "3.34 \nN 10^28" are all multiplications. Every one is reproduced below
 *     as a real minus (U+2212) or a real times (U+00D7).
 *   - NO "\nK" DEGREE TOKEN, NO "\nC" COLON TOKEN, NO OCTAL ESCAPES, NO +29
 *     ASCII HEADING SHIFT, NO LOST LIGATURES. Searched for all five; zero hits
 *     in 805 to 865. The addendum pages here are plain ASCII with LaTeX-ish
 *     inline notation ("PV^gamma", "C_V", "T^{3/2}"), not the shifted run the
 *     previous chapter's addendum used, so page numbers were read directly.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     power of ten in the range breaks across two or three lines, and every
 *     v_rms, k_B, N_A, C_V, C_P, T_1, P_2, n_0 and d^2 arrives as a letter on
 *     one line and its index on the next. The single worst case is page 835's
 *     distribution, "4 pi ( M / 2 pi R T )\n3/2\nv\n2\ne\n-Mv2/2RT", where the
 *     exponent of the exponential is itself split. It was rebuilt by checking
 *     that the peak of the reconstructed function falls at sqrt(2RT/M), which
 *     is what the source's own Part B derives.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING. Confirmed in passages
 *     actually used below: "theatomic hypothesis" (p.805), "the onlything that
 *     has changed" (p.805), "why a gas is the natural home" runs into its
 *     heading (p.806), "moleculardiameter" (p.807), "we asserted that gases
 *     obey" as "we assertedthat" (p.820), "there isno isotropy to invoke"
 *     (p.825), "temperatureis average molecular kinetic energy" (p.830),
 *     "the peak ofP(v)" (p.831), "each vibration carries 2 degrees" runs into
 *     "givingf = 3 x 2 = 6" (p.838), "the mean free pathis about" (p.807).
 *   - WHOLE RUNS REFLOW TO THE PAGE FOOT WITH ALL SPACES REMOVED, which is a
 *     pattern the brief does not list and which silently eats a sentence.
 *     Three instances, all in text used below: page 807 ends with
 *     "meanfreepathisabout20timestheinteratomicdistanceandabout200timesthe",
 *     whose continuation "molecular size" sits ABOVE it in the token stream;
 *     page 810's MCQ Q4 answer is orphaned the same way, as
 *     "(C).Inanordinarygasthemeanfreepathisoforderafew-hundredmolecular"
 *     followed at the top of the next paragraph by "diameters..."; and page
 *     837's degrees-of-freedom table has its "Diatomic (N2, O2)" row label and
 *     its high-temperature polyatomic value "12" both flung to the page foot,
 *     out of the table, leaving the table body as a bare run of digits
 *     "3033 3 257" that decodes only against the physics. In total 11
 *     passages were re-authored from context rather than transcribed, and each
 *     was verified by recomputing the number that depends on it.
 *
 * SEAMS: what is quoted as already known, and from where.
 *
 *   From phy-11-11-thermodynamics.ts, the chapter immediately before this one,
 *   and by far the biggest seam. Its Topic 01 establishes PV = nRT as the
 *   equation of state, its dimensional check, the kelvin rule, and the fact
 *   that two of P, V, T fix the state; Topic 02's file header states that
 *   thermodynamics is deliberately macroscopic and that the molecular
 *   bookkeeping "belongs to kinetic theory", which is precisely the promise
 *   this chapter keeps. Its Topic 04 establishes Mayer's relation
 *   C_P - C_V = R with a full four-step derivation, the equipartition value
 *   (1/2) k_B T per degree of freedom, C_V = (f/2)R, C_P = (f/2 + 1)R,
 *   gamma = 1 + 2/f, the reflex identities C_V = R/(gamma - 1) and
 *   C_P = gamma R/(gamma - 1), the standard-values table, the Dulong-Petit
 *   value near 3R, the frozen-out vibration rule, the CO2-is-linear warning
 *   and the do-not-average-gamma rule for mixtures.
 *
 *   So Topic 05 below does NOT re-derive Mayer's relation: its third
 *   derivation step names it as "established in Thermodynamics" and quotes it,
 *   which is the honest division of labour, since kinetic theory supplies the
 *   f and thermodynamics supplies the R. What Topic 05 does spend its space on
 *   is the molecular picture Chapter 11 has no room for and states as bare
 *   fact: WHY a diatomic counts 2 rotations and not 3 (the moment of inertia
 *   about the bond axis is essentially zero, since the mass sits on the axis),
 *   why a monatomic counts 0 by the same argument, why a nonlinear molecule
 *   counts 3, why a vibration is worth 2 and not 1, and why the modes switch
 *   on one at a time as k_B T passes each quantum gap. Chapter 11 mentions the
 *   freezing-out in a single defgrid row; the quantum reason for it is
 *   developed here. Dulong-Petit is a single row there and is DERIVED here
 *   from f = 6 per bound atom, and the 9R result for water, which Chapter 11
 *   does not carry at all, is derived alongside it. The standard-values table
 *   is reproduced in Topic 05 rather than cross-referenced, because a student
 *   reading Kinetic Theory cannot be sent to another chapter mid-question, but
 *   its rows are worded differently and it adds the "3 translations, 2
 *   rotations" structural column that Chapter 11's does not carry.
 *
 *   Chapter 11's Topic 01 also warns that CO2 is linear with f = 5 and that
 *   the source's f = 6 row must not list it. This range's own table (page 837)
 *   already says "Non-linear polyatomic (H2O, NH3)" and does not repeat that
 *   error, so there was nothing here to correct; the warning is nevertheless
 *   carried in Topic 05 so the two chapters agree.
 *
 *   From phy-11-02-motion-straight-line.ts: the habit of naming a positive
 *   direction and holding it, used without re-arguing in Topic 03's
 *   momentum-reversal step, where +mv_x and -mv_x are the same discipline
 *   applied to one axis of a cube.
 *
 *   From math-11-12-limits.ts: the derivative as a limit, the product rule and
 *   the chain rule, used without comment in Topic 04's derivation of v_mp from
 *   dP/dv = 0. Checked, as the previous chapter's author did: that file
 *   teaches derivatives but NOT integration, so nothing below asks a student
 *   to evaluate an integral. Topic 04's "a fraction is an area" is stated and
 *   drawn as an area, never as a definite integral to be computed, and the 39
 *   per cent figure is quoted as a result rather than derived.
 *
 * FIGURES: TWELVE DESIGNED, ZERO NAMED BY THE SOURCE. The source range does
 * not contain a single "Figure N.M" callout in sixty-one pages; it carries six
 * unnumbered captions under images that the extractor drops. Every figure
 * below was therefore designed here, from the physics rather than from a
 * brief, and numbered 12.1 to 12.12. Eleven are `plot` and one is `levels`,
 * carrying twenty-seven chips between them.
 *
 *   The panel rule is honoured absolutely: not one frame contains two panels.
 *   Two temperatures on the Maxwell curve (Figure 12.8) are two CURVES in one
 *   frame, and the hotter-versus-heavier comparison is two CHIPS, because at
 *   316pt two panels would be 150pt each and unreadable. The same applies to
 *   Figure 12.3's three gas laws, Figure 12.5's bounce and round trip, and
 *   Figure 12.9's three molecular structures.
 *
 *   Figure 12.7 is the one the whole chapter turns on and the one that took
 *   the most care. Marking three speeds 422, 476 and 517 m/s on a 1400 m/s
 *   axis puts them 8 and 10 pixels apart, so three labels at the same height
 *   would be one illegible smear. They are instead staggered vertically by
 *   0.19 plot units, which is 13.7px against an 11px label height, and each
 *   sits ABOVE the dashed drop-line that marks its speed rather than beside
 *   it. The second chip shades the tail beyond v_rms with `polys` and
 *   `fill: 'wash'`, because "what fraction of molecules are faster than X" is
 *   an area question and a chip that answers it in ink teaches more than a
 *   sentence. Both frames carry `axisX`, `axisY` and `ticksX`: a speed
 *   distribution without axis units is just a bump.
 *
 *   Figure 12.11's second chip uses `fill: 'hatch'` and is a RECTANGLE, on
 *   purpose. Hatching fills the bounding box rather than the polygon, so it is
 *   safe only on rectangles, and the collision cylinder happens to be exactly
 *   that when drawn edge-on. Figure 12.10 is `levels`, which draws the ladder
 *   of internal energy per mole at f = 3, 5 and 6 with the +RT rungs marked:
 *   it is the figure that answers "why does a diatomic gas store more energy
 *   per mole than a monatomic one" in one glance.
 *
 *   Tone discipline: no frame carries more than two accent tones, and every
 *   figure reads with colour removed, because every amber element is also
 *   distinguished by shape or by a word. Hit and missed molecules in Figure
 *   12.11 are a filled dot against an open circle, not two colours. The
 *   isotropy contrast in Figure 12.6 is five parallel arrows against eight
 *   radial ones. The frozen and active rungs in Figure 12.10 are dashed
 *   against solid.
 *
 * No new figure vocabulary is requested: everything drawn below is expressible
 * in the existing DiagramFrame.
 *
 * NOTATION, AND A GLYPH THE CORPUS SHOULD KNOW ABOUT. The mean square speed is
 * written below as (v^2)av, with real parentheses and a subscript, NOT as the
 * angle-bracket form the source uses. That is not a style preference. The
 * angle brackets are U+27E8 and U+27E9 MATHEMATICAL LEFT/RIGHT ANGLE BRACKET,
 * and reading the cmap of /System/Library/Fonts/Supplemental/Georgia.ttf, the
 * face components/textbook/markup.tsx selects for maths on iOS, shows both are
 * ABSENT from it; Android's Noto Serif is no better provisioned. Sixty of them
 * in the chapter that leans on the mean square speed hardest is sixty chances
 * to ship a blank box or an ugly font fallback, so the notation was changed
 * instead. (v^2)av is also the form most Indian board and JEE reference books
 * print, so nothing is lost. Note for whoever is writing Oscillations: that
 * file currently carries the same brackets in three places.
 *
 * The same cmap read shows U+221D PROPORTIONAL TO is also missing from
 * Georgia, but that one is left alone: it appears in ten already-finished
 * chapters, so the platform's font fallback evidently handles it, and changing
 * it here alone would make this chapter the odd one out. Every other
 * non-ASCII glyph used below was checked against the same cmap and is present:
 * the Greek letters, the script ell, the prime, the sigma, the radical, the
 * almost-equal, the degree sign, the minus, the multiplication sign, the
 * superscript two and the ring-A of the Angstrom.
 *
 * REQUESTS. None. Everything this chapter needed to draw was already in
 * DiagramFrame, including the two things that were not obvious: `pts` with
 * `smooth` draws a Maxwell distribution, which is not any named function, and
 * `polys` with `fill: 'wash'` shades the area under it, which is what a
 * fraction-of-molecules question actually asks for.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11KineticTheory: Chapter = {
  "chapter": "12",
  "title": "Kinetic Theory",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "The Molecular Nature of Matter",
      "chip": "01 MOLECULES",
      "kalam": "a gas is mostly nothing, and that is exactly why it is simple",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · The Molecular Nature of Matter</b><br>Mostly a CBSE Board section, worth 1 to 2 marks as a short answer or an assertion-reason item on intermolecular forces, on the solid-liquid-gas distinction, or on Avogadro's hypothesis. NEET occasionally asks the molecular-size or number-density estimate. JEE rarely asks it directly but assumes it as the bedrock for everything that follows.<br><br><b>02 · The Ideal Gas and the Gas Laws</b><br>A guaranteed scorer. CBSE Boards almost always carry a 1 to 3 mark gas-law or <i>PV</i> = <i>nRT</i> application. NEET asks one direct numerical nearly every year, often density against molar mass, or a mixture. JEE Main treats it as a calculation backbone, and JEE Advanced hides it inside multi-bulb and piston problems where mole conservation is the real test.<br><br><b>03 · Kinetic Theory and the Origin of Pressure</b><br>The pressure derivation is a CBSE Board favourite: a full 3 to 5 mark derivation appears regularly, so the step-by-step logic has to be airtight. JEE Main leans on <i>P</i> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub> and <i>PV</i> = (2/3)<i>E</i> in numericals, NEET tests the proportionalities, and JEE Advanced probes the <i>assumptions</i>, meaning where the pressure expression breaks, far more than the algebra.<br><br><b>04 · Temperature, Molecular Speeds and the Maxwell Curve</b><br>Extremely high yield. NEET and JEE Main almost always carry one numerical on <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) or on the speed ratios. CBSE Boards ask for the kinetic interpretation of temperature and the labelled Maxwell curve. JEE Advanced reaches into the distribution itself: deriving <i>v</i><sub>mp</sub>, comparing the three speeds, reading fractions off the curve as areas.<br><br><b>05 · Degrees of Freedom and Equipartition</b><br>A dense, high-return cluster. JEE Main and NEET reliably ask for γ or for <i>C<sub>V</sub></i> and <i>C<sub>P</sub></i> from atomicity. CBSE Boards favour the statement of the equipartition law and the degrees-of-freedom count. JEE Advanced combines them: mixture specific heats, or γ when the vibrational modes switch on.<br><br><b>06 · Mean Free Path and Collision Frequency</b><br>A small, reliable slice. CBSE Boards ask for the formula and its meaning; NEET and JEE Main ask how λ responds to pressure and temperature, which is one line if you know the formula and impossible if you do not. JEE Advanced links λ to viscosity, thermal conduction and diffusion, and to the historical estimation of molecular size."
        },
        {
          "t": "p",
          "html": "Everything in this chapter grows from one sentence: <b>all matter is made of enormous numbers of tiny particles, atoms and molecules, in perpetual motion.</b> That is the atomic hypothesis, and although it now feels obvious it was hard won. Kanada in India and Democritus in Greece speculated about indivisible particles millennia ago, but it was John Dalton, in the early 1800s, who turned the idea into testable chemistry: matter is built from atoms, atoms of a given element are alike, and they combine in small whole-number ratios. Richard Feynman once said that if all of science had to be compressed into one statement, the most valuable would be that everything is made of atoms, tiny particles in perpetual motion, attracting when a little apart and repelling when squeezed together. Almost this entire chapter is the unpacking of that one sentence."
        },
        {
          "t": "think",
          "html": "zoom into a steel rod, a cup of water, and the air above it. all three are built from the same kind of blocks, molecules, arranged utterly differently. in the steel they are packed shoulder to shoulder in a rigid lattice, only able to jiggle in place. in the water they still touch but can slide past each other, which is why a liquid flows. in the air they are flung about ten times farther apart, racing around almost independently and meeting only in brief collisions. same particles, three states, and the only thing that changed is how close they are."
        },
        {
          "t": "p",
          "html": "What sets that closeness is the <b>intermolecular force</b>. Two molecules attract each other weakly at moderate separation, and that attraction is what holds liquids and solids together. Push them too close and they repel each other very hard indeed, because you cannot force two molecules into the same space. In between sits one special separation, written <i>r</i><sub>0</sub>, where attraction and repulsion exactly balance and the net force is zero. That is the comfortable spacing a molecule in a solid settles into. Formally the force is the negative slope of the potential energy, <i>F</i> = −d<i>U</i>/d<i>r</i>, so the potential energy curve dips to its minimum exactly where the force crosses zero."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.1 · THE FORCE, AND THE WELL IT COMES FROM",
          "chips": [
            "the force",
            "the potential well"
          ],
          "captions": [
            "Force against separation. Below r0 the curve is high and positive, a fierce short-range repulsion: this is what stops matter collapsing. Above r0 it is negative, a gentle attraction that fades to nothing within a few molecular diameters. It crosses zero exactly at r0. In a gas the molecules spend almost their whole lives out on the flat right-hand tail, feeling nothing at all, which is precisely the licence for the ideal-gas model.",
            "The same physics as an energy. The potential energy dips to a minimum at r0, and the force is the negative slope of this curve, so zero slope at the bottom of the well is zero force. A molecule in a solid sits near the bottom and merely vibrates about it. Add heat and the vibrations grow until the lattice gives way to a liquid; add more and the molecules break free entirely into a gas."
          ],
          "frames": [
            {
              "x": [
                0.8,
                3.0
              ],
              "y": [
                -4,
                12
              ],
              "aspect": 0.72,
              "axisX": "separation r (in units of r0)",
              "axisY": "force F",
              "ticksX": {
                "at": [
                  1,
                  1.5,
                  2,
                  2.5,
                  3
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  4,
                  8,
                  12
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0.93,
                      10.88
                    ],
                    [
                      0.94,
                      8.32
                    ],
                    [
                      0.95,
                      6.19
                    ],
                    [
                      0.962,
                      4.12
                    ],
                    [
                      0.975,
                      2.35
                    ],
                    [
                      0.99,
                      0.8
                    ],
                    [
                      1.0,
                      0.0
                    ],
                    [
                      1.02,
                      -1.17
                    ],
                    [
                      1.05,
                      -2.16
                    ],
                    [
                      1.09,
                      -2.65
                    ],
                    [
                      1.14,
                      -2.61
                    ],
                    [
                      1.2,
                      -2.23
                    ],
                    [
                      1.28,
                      -1.65
                    ],
                    [
                      1.38,
                      -1.08
                    ],
                    [
                      1.5,
                      -0.64
                    ],
                    [
                      1.66,
                      -0.33
                    ],
                    [
                      1.86,
                      -0.15
                    ],
                    [
                      2.1,
                      -0.07
                    ],
                    [
                      2.4,
                      -0.03
                    ],
                    [
                      2.7,
                      -0.01
                    ],
                    [
                      3.0,
                      -0.01
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "vline",
                  "x": 1,
                  "dash": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 0,
                  "label": "r0",
                  "at": "sw"
                }
              ],
              "labels": [
                {
                  "x": 1.62,
                  "y": 8.4,
                  "text": "repulsion, F above 0"
                },
                {
                  "x": 2.25,
                  "y": 2.3,
                  "text": "attraction, F below 0"
                }
              ]
            },
            {
              "x": [
                0.8,
                3.0
              ],
              "y": [
                -1.6,
                1.4
              ],
              "aspect": 0.72,
              "axisX": "separation r (in units of r0)",
              "axisY": "potential energy U",
              "ticksX": {
                "at": [
                  1,
                  1.5,
                  2,
                  2.5,
                  3
                ]
              },
              "ticksY": {
                "at": [
                  -1,
                  0,
                  1
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0.858,
                      1.27
                    ],
                    [
                      0.868,
                      0.791
                    ],
                    [
                      0.88,
                      0.33
                    ],
                    [
                      0.893,
                      -0.055
                    ],
                    [
                      0.91,
                      -0.421
                    ],
                    [
                      0.935,
                      -0.753
                    ],
                    [
                      0.965,
                      -0.943
                    ],
                    [
                      1.0,
                      -1.0
                    ],
                    [
                      1.04,
                      -0.956
                    ],
                    [
                      1.09,
                      -0.837
                    ],
                    [
                      1.15,
                      -0.678
                    ],
                    [
                      1.22,
                      -0.515
                    ],
                    [
                      1.31,
                      -0.357
                    ],
                    [
                      1.42,
                      -0.229
                    ],
                    [
                      1.56,
                      -0.134
                    ],
                    [
                      1.74,
                      -0.071
                    ],
                    [
                      1.96,
                      -0.035
                    ],
                    [
                      2.22,
                      -0.017
                    ],
                    [
                      2.5,
                      -0.008
                    ],
                    [
                      2.75,
                      -0.005
                    ],
                    [
                      3.0,
                      -0.003
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "vline",
                  "x": 1,
                  "dash": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": -1.0,
                  "label": "r0, the minimum",
                  "at": "se"
                }
              ],
              "labels": [
                {
                  "x": 2.15,
                  "y": 0.75,
                  "text": "flat: a gas lives here"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "How do we <i>know</i> molecules are really moving, when nobody has ever watched one? The most direct everyday evidence is <b>Brownian motion</b>. In 1827 the botanist Robert Brown saw that tiny pollen grains suspended in perfectly still water jiggled ceaselessly along random, erratic paths. The grains are far too large to move on their own; what jostles them is the relentless bombardment by invisible water molecules striking them unevenly from all sides. The smaller the grain and the hotter the water, the more violent the dance. The same restless motion explains <b>diffusion</b>, the way a drop of ink spreads through still water or a whiff of perfume crosses a room with no draught to carry it."
        },
        {
          "t": "def",
          "term": "The three laws Dalton's atoms explain, and the one Avogadro adds",
          "html": "Dalton's atomic theory explains the <b>law of definite proportions</b>, that a compound always contains the same elements in the same mass ratio, and the <b>law of multiple proportions</b>. Gay-Lussac then found the <b>law of combining volumes</b>: when gases react, the volumes of the reacting gases and of the gaseous products stand in simple whole-number ratios at the same temperature and pressure, so two volumes of hydrogen plus one of oxygen give two volumes of water vapour, a ratio of 2 : 1 : 2. <b>Avogadro's hypothesis</b> is what reconciles the two: equal volumes of <i>all</i> gases, at the same temperature and pressure, contain equal numbers of molecules. Volumes are then simply molecule counts in disguise, which is why the balanced equation and not the conservation of volume fixes the ratio. Note the trap hiding in that: 2 volumes plus 1 volume gives 2 volumes, not 3. Volume is <b>not</b> conserved in a gaseous reaction."
        },
        {
          "t": "defgrid",
          "title": "The numbers and the scales worth carrying in your head",
          "rows": [
            {
              "k": "Avogadro number <i>N<sub>A</sub></i>",
              "v": "6.022 × 10<sup>23</sup> /mol, the number of particles in one mole"
            },
            {
              "k": "The mole <i>n</i>",
              "v": "<i>n</i> = <i>N</i>/<i>N<sub>A</sub></i> = <i>m</i>/<i>M</i>, with <i>N</i> a molecule count, <i>m</i> the sample mass and <i>M</i> the molar mass"
            },
            {
              "k": "Molecular diameter <i>d</i>",
              "v": "about 1 to 3 Å, that is 1 to 3 × 10<sup>−10</sup> m. Take 3 Å when a question does not say"
            },
            {
              "k": "Spacing in a solid or liquid",
              "v": "neighbours sit about one diameter apart, essentially touching"
            },
            {
              "k": "Spacing in a gas at STP",
              "v": "about 33 Å, roughly ten times the spacing in condensed matter and about eleven molecular diameters"
            },
            {
              "k": "Molar volume at STP",
              "v": "22.4 L/mol at <i>T</i> = 273.15 K and <i>P</i> = 1.013 × 10<sup>5</sup> Pa, the same for every ideal gas by Avogadro's law"
            },
            {
              "k": "Fraction of a gas that is matter",
              "v": "about 10<sup>−4</sup> of the container at STP, so a gas is roughly 99.96 per cent empty space"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NUMBER DENSITY AND MEAN SPACING",
          "tag": "the two numbers every estimate starts from",
          "main": "<i>n</i><sub>0</sub> = <i>N</i>/<i>V</i> = <i>P</i>/<i>k<sub>B</sub>T</i><br>ℓ ≈ (1/<i>n</i><sub>0</sub>)<sup>1/3</sup> = (<i>V</i>/<i>N</i>)<sup>1/3</sup>",
          "legend": [
            "<i>n</i><sub>0</sub> = number density, molecules per cubic metre, dimensions [L<sup>−3</sup>]",
            "<i>N</i> = number of molecules, a pure count; <i>V</i> = volume in m<sup>3</sup>; <i>P</i> = pressure in Pa",
            "<i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K, the Boltzmann constant, and <i>T</i> is in kelvin",
            "ℓ = mean separation between neighbours in m, dimension [L], because one molecule owns a volume 1/<i>n</i><sub>0</sub> and the side of that little cube is its cube root"
          ],
          "note": "For a liquid or solid you have no P and V, so reach for n0 = ρN_A/M instead: density over molar mass gives moles per cubic metre, and N_A converts that to molecules."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.2 · THE SAME MOLECULES, THREE ARRANGEMENTS",
          "chips": [
            "solid",
            "liquid",
            "gas"
          ],
          "captions": [
            "Close and caged. Every molecule sits near its own r0, locked into a rigid lattice by its neighbours, and can do nothing but vibrate about that site. The spacing is about one molecular diameter, so the intermolecular forces are at full strength and completely dominate the behaviour.",
            "Close and loose. The molecules still touch, so the spacing is barely changed from the solid, which is why liquids are almost as incompressible as solids. What has changed is order: they can now slide past one another, so a liquid flows and takes the shape of its container.",
            "Far and free. The same number of molecules now sit about ten times farther apart, so the volume is around a thousand times larger and the container is 99.96 per cent empty. For almost all of their lives the molecules are beyond the reach of one another and fly in straight lines. That is the entire licence for kinetic theory."
          ],
          "frames": [
            {
              "x": [
                0,
                10
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      0.6,
                      0.6
                    ],
                    [
                      9.4,
                      0.6
                    ],
                    [
                      9.4,
                      7.4
                    ],
                    [
                      0.6,
                      7.4
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "marks": [
                {
                  "x": 2.2,
                  "y": 2.0,
                  "glyph": "dot"
                },
                {
                  "x": 3.6,
                  "y": 2.0,
                  "glyph": "dot"
                },
                {
                  "x": 5.0,
                  "y": 2.0,
                  "glyph": "dot"
                },
                {
                  "x": 6.4,
                  "y": 2.0,
                  "glyph": "dot"
                },
                {
                  "x": 7.8,
                  "y": 2.0,
                  "glyph": "dot"
                },
                {
                  "x": 2.2,
                  "y": 3.15,
                  "glyph": "dot"
                },
                {
                  "x": 3.6,
                  "y": 3.15,
                  "glyph": "dot"
                },
                {
                  "x": 5.0,
                  "y": 3.15,
                  "glyph": "dot"
                },
                {
                  "x": 6.4,
                  "y": 3.15,
                  "glyph": "dot"
                },
                {
                  "x": 7.8,
                  "y": 3.15,
                  "glyph": "dot"
                },
                {
                  "x": 2.2,
                  "y": 4.3,
                  "glyph": "dot"
                },
                {
                  "x": 3.6,
                  "y": 4.3,
                  "glyph": "dot"
                },
                {
                  "x": 5.0,
                  "y": 4.3,
                  "glyph": "dot"
                },
                {
                  "x": 6.4,
                  "y": 4.3,
                  "glyph": "dot"
                },
                {
                  "x": 7.8,
                  "y": 4.3,
                  "glyph": "dot"
                },
                {
                  "x": 2.2,
                  "y": 5.45,
                  "glyph": "dot"
                },
                {
                  "x": 3.6,
                  "y": 5.45,
                  "glyph": "dot"
                },
                {
                  "x": 5.0,
                  "y": 5.45,
                  "glyph": "dot"
                },
                {
                  "x": 6.4,
                  "y": 5.45,
                  "glyph": "dot"
                },
                {
                  "x": 7.8,
                  "y": 5.45,
                  "glyph": "dot"
                }
              ],
              "labels": [
                {
                  "x": 5.0,
                  "y": 1.15,
                  "text": "fixed sites, only vibration"
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
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      0.6,
                      0.6
                    ],
                    [
                      9.4,
                      0.6
                    ],
                    [
                      9.4,
                      7.4
                    ],
                    [
                      0.6,
                      7.4
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "marks": [
                {
                  "x": 2.6,
                  "y": 1.63,
                  "glyph": "dot"
                },
                {
                  "x": 3.29,
                  "y": 2.22,
                  "glyph": "dot"
                },
                {
                  "x": 5.16,
                  "y": 1.87,
                  "glyph": "dot"
                },
                {
                  "x": 5.95,
                  "y": 2.37,
                  "glyph": "dot"
                },
                {
                  "x": 8.07,
                  "y": 2.33,
                  "glyph": "dot"
                },
                {
                  "x": 2.04,
                  "y": 2.89,
                  "glyph": "dot"
                },
                {
                  "x": 4.05,
                  "y": 3.28,
                  "glyph": "dot"
                },
                {
                  "x": 5.4,
                  "y": 2.78,
                  "glyph": "dot"
                },
                {
                  "x": 6.09,
                  "y": 3.37,
                  "glyph": "dot"
                },
                {
                  "x": 7.96,
                  "y": 3.02,
                  "glyph": "dot"
                },
                {
                  "x": 1.75,
                  "y": 4.67,
                  "glyph": "dot"
                },
                {
                  "x": 3.87,
                  "y": 4.63,
                  "glyph": "dot"
                },
                {
                  "x": 4.84,
                  "y": 4.04,
                  "glyph": "dot"
                },
                {
                  "x": 6.85,
                  "y": 4.43,
                  "glyph": "dot"
                },
                {
                  "x": 8.2,
                  "y": 3.93,
                  "glyph": "dot"
                },
                {
                  "x": 1.89,
                  "y": 5.67,
                  "glyph": "dot"
                },
                {
                  "x": 3.76,
                  "y": 5.32,
                  "glyph": "dot"
                },
                {
                  "x": 4.55,
                  "y": 5.82,
                  "glyph": "dot"
                },
                {
                  "x": 6.67,
                  "y": 5.78,
                  "glyph": "dot"
                },
                {
                  "x": 7.64,
                  "y": 5.19,
                  "glyph": "dot"
                }
              ],
              "labels": [
                {
                  "x": 5.0,
                  "y": 1.15,
                  "text": "still touching, but mobile"
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
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      0.6,
                      0.6
                    ],
                    [
                      9.4,
                      0.6
                    ],
                    [
                      9.4,
                      7.4
                    ],
                    [
                      0.6,
                      7.4
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "marks": [
                {
                  "x": 1.6,
                  "y": 1.4,
                  "glyph": "dot"
                },
                {
                  "x": 4.3,
                  "y": 2.2,
                  "glyph": "dot"
                },
                {
                  "x": 7.8,
                  "y": 1.1,
                  "glyph": "dot"
                },
                {
                  "x": 2.6,
                  "y": 4.4,
                  "glyph": "dot"
                },
                {
                  "x": 6.1,
                  "y": 5.2,
                  "glyph": "dot"
                },
                {
                  "x": 8.6,
                  "y": 3.9,
                  "glyph": "dot"
                },
                {
                  "x": 1.3,
                  "y": 6.6,
                  "glyph": "dot"
                },
                {
                  "x": 4.9,
                  "y": 7.4,
                  "glyph": "dot"
                },
                {
                  "x": 7.3,
                  "y": 6.9,
                  "glyph": "dot"
                },
                {
                  "x": 3.4,
                  "y": 6.0,
                  "glyph": "dot"
                }
              ],
              "arrows": [
                {
                  "from": [
                    1.6,
                    1.4
                  ],
                  "to": [
                    2.9,
                    2.5
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    7.8,
                    1.1
                  ],
                  "to": [
                    6.9,
                    2.4
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    4.9,
                    7.4
                  ],
                  "to": [
                    6.0,
                    6.6
                  ],
                  "tone": "amber",
                  "head": "end"
                }
              ],
              "labels": [
                {
                  "x": 5.0,
                  "y": 3.15,
                  "text": "mostly empty space"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Estimating the number density and the spacing of a gas",
          "steps": [
            "<b>Get the number density first.</b> From the gas law, <i>n</i><sub>0</sub> = <i>N</i>/<i>V</i> = <i>P</i>/<i>k<sub>B</sub>T</i>. At STP you can skip that entirely: one mole is <i>N<sub>A</sub></i> molecules in 22.4 L.",
            "<b>Find the volume one molecule owns</b>, which is simply 1/<i>n</i><sub>0</sub>. At STP that is 22.4 × 10<sup>−3</sup>/6.022 × 10<sup>23</sup> = 3.72 × 10<sup>−26</sup> m<sup>3</sup>.",
            "<b>Take the cube root</b> to get the mean separation, ℓ ≈ (1/<i>n</i><sub>0</sub>)<sup>1/3</sup>. Here that is 3.34 × 10<sup>−9</sup> m, or 33.4 Å.",
            "<b>Compare ℓ with the molecular diameter <i>d</i>.</b> For a gas at STP the ratio comes out near eleven, confirming that molecules are mostly far apart and that intermolecular forces are negligible.",
            "<b>For a liquid or a solid, start from the density instead:</b> <i>n</i><sub>0</sub> = ρ<i>N<sub>A</sub></i>/<i>M</i>, and then take the same cube root. The answer will come out close to one molecular diameter, which is the quantitative statement that the molecules are touching."
          ]
        },
        {
          "t": "proc",
          "title": "Measuring a molecule you cannot see, by the oil-film method",
          "steps": [
            "<b>Take a drop of oil of known volume <i>V</i></b> and release it on a clean water surface lightly dusted with fine powder, so the edge of the film is visible.",
            "<b>Let it spread until it stops.</b> It stops when it is exactly one molecule thick, a monomolecular layer, because it cannot thin any further.",
            "<b>Measure the area <i>A</i> it covers.</b> Volume equals area times thickness, so the thickness is <i>V</i>/<i>A</i>.",
            "<b>That thickness <i>is</i> the molecular diameter</b>, <i>d</i> ≈ <i>V</i>/<i>A</i>, and typical results land at 10<sup>−9</sup> to 10<sup>−10</sup> m.",
            "<b>Notice what the trick achieved.</b> An invisible length has been converted into two quantities anyone can measure with a syringe and a ruler, a volume and an area."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Estimate the fraction of the total volume actually occupied by the molecules themselves in one mole of oxygen at STP. Take the diameter of an oxygen molecule as 3 Å.",
          "steps": [
            "<i>d</i> = 3 Å so <i>r</i> = 1.5 Å = 1.5 × 10<sup>−10</sup> m, and the molar volume at STP is 22.4 L = 22.4 × 10<sup>−3</sup> m<sup>3</sup>.",
            "Volume of one molecule, treated as a sphere: (4/3)π<i>r</i><sup>3</sup> = (4/3)(3.1416)(3.375 × 10<sup>−30</sup>) = 1.41 × 10<sup>−29</sup> m<sup>3</sup>.",
            "Multiply by <i>N<sub>A</sub></i> for the molecular volume in one mole: 6.022 × 10<sup>23</sup> × 1.41 × 10<sup>−29</sup> = 8.5 × 10<sup>−6</sup> m<sup>3</sup>.",
            "Divide by the actual molar volume: 8.5 × 10<sup>−6</sup>/22.4 × 10<sup>−3</sup> = 3.8 × 10<sup>−4</sup>."
          ],
          "ans": "About 3.8 × 10<sup>−4</sup>, that is roughly 0.04 per cent. A gas is overwhelmingly empty space, and this is the quantitative justification for treating its molecules as point masses."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At the same temperature and pressure, 3 L of hydrogen reacts completely with oxygen to form water vapour, 2H<sub>2</sub> + O<sub>2</sub> gives 2H<sub>2</sub>O. Find the volume of oxygen used and the volume of water vapour formed.",
          "steps": [
            "Avogadro's law says equal volumes hold equal numbers of molecules, so the volumes react in exactly the ratio of the balanced equation, 2 : 1 : 2.",
            "Oxygen = (1/2) × 3 = 1.5 L.",
            "Water vapour has the same coefficient as hydrogen, so it is 3 L."
          ],
          "ans": "Oxygen 1.5 L, water vapour 3 L. The trap is expecting 3 + 1.5 = 4.5 L of product: volume is <b>not</b> conserved in a gaseous reaction, molecule count and the balanced equation are what rule."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Estimate the mean separation between the molecules of an ideal gas at STP and compare it with a molecular diameter of 3 Å.",
          "steps": [
            "One mole, <i>N<sub>A</sub></i> molecules, occupies 22.4 × 10<sup>−3</sup> m<sup>3</sup>, so the volume per molecule is 22.4 × 10<sup>−3</sup>/6.022 × 10<sup>23</sup> = 3.72 × 10<sup>−26</sup> m<sup>3</sup>.",
            "The mean separation is the cube root of that: ℓ = (3.72 × 10<sup>−26</sup>)<sup>1/3</sup> = 3.34 × 10<sup>−9</sup> m = 33.4 Å.",
            "Compare: ℓ/<i>d</i> = 33.4/3 ≈ 11."
          ],
          "ans": "ℓ ≈ 3.3 × 10<sup>−9</sup> m, about 11 molecular diameters. This is the concrete meaning of the claim that gas spacing is roughly ten times the spacing in condensed matter, and it is why intermolecular forces can be dropped."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Liquid nitrogen has density about 810 kg/m<sup>3</sup> and molar mass 28 g/mol. Find its number density and mean spacing, and compare with nitrogen gas at STP, where the spacing is about 33 Å.",
          "steps": [
            "Number density from the density: <i>n</i><sub>0</sub> = ρ<i>N<sub>A</sub></i>/<i>M</i> = 810 × 6.022 × 10<sup>23</sup>/(28 × 10<sup>−3</sup>) = 1.74 × 10<sup>28</sup> /m<sup>3</sup>.",
            "Volume per molecule: 1/<i>n</i><sub>0</sub> = 5.75 × 10<sup>−29</sup> m<sup>3</sup>.",
            "Mean spacing: ℓ = (5.75 × 10<sup>−29</sup>)<sup>1/3</sup> = 3.86 × 10<sup>−10</sup> m ≈ 3.9 Å.",
            "Ratio to the gas: 33.4/3.9 ≈ 8.6."
          ],
          "ans": "<i>n</i><sub>0</sub> ≈ 1.7 × 10<sup>28</sup> /m<sup>3</sup> and ℓ ≈ 3.9 Å, essentially one molecular diameter, so the molecules are touching. The gas was about 8 to 9 times farther apart. Liquefaction collapses the molecules from far apart and free to touching and interacting, which is exactly why the ideal-gas model fails for a liquid."
        },
        {
          "t": "mcq",
          "q": "The net intermolecular force between two molecules is zero when their separation is",
          "opts": [
            {
              "label": "zero",
              "nudge": "At r tending to zero the repulsion is at its most violent, not zero. This is the separation at which the force is largest, not smallest."
            },
            {
              "label": "equal to the equilibrium separation <i>r</i><sub>0</sub>",
              "nudge": null
            },
            {
              "label": "infinite",
              "nudge": "The force does approach zero at infinite separation, but it never actually crosses zero there and molecules that far apart are not bound to anything. r0 is a genuine balance point with a restoring force on either side."
            },
            {
              "label": "equal to one molecular diameter",
              "nudge": "A molecular diameter is a useful rough scale, but the exact zero-force point is defined by the balance of attraction and repulsion, not by the size of the molecule."
            }
          ],
          "correct": 1,
          "solution": "At <i>r</i><sub>0</sub> the attractive and repulsive contributions cancel exactly. It is a stable equilibrium: the potential energy is at its minimum there, so a small displacement either way produces a restoring force, which is precisely why atoms in a solid vibrate about fixed sites instead of drifting away or collapsing inward."
        },
        {
          "t": "mcq",
          "q": "Which statement best explains why a gas can be compressed far more easily than a liquid?",
          "opts": [
            {
              "label": "Gas molecules are smaller than liquid molecules",
              "nudge": "The very same molecules form the liquid and the gas. Nothing about their size changes on evaporation, only their spacing does."
            },
            {
              "label": "In a gas the molecules are far apart, with much empty space between them",
              "nudge": null
            },
            {
              "label": "Gas molecules have no mass",
              "nudge": "Molecules certainly have mass, and it is exactly that mass carried into the wall that produces the pressure you will derive in Topic 03."
            },
            {
              "label": "Gas molecules attract each other strongly",
              "nudge": "Strong attraction characterises the liquid, not the gas, and in any case attraction would resist a change of volume rather than ease one."
            }
          ],
          "correct": 1,
          "solution": "The molecular volume is only about 10<sup>−4</sup> of the total, so compressing a gas mostly means closing the gaps. In a liquid the molecules already touch, so there is almost nothing left to close and the liquid is nearly incompressible."
        },
        {
          "t": "mcq",
          "q": "Two volumes of gas A combine with one volume of gas B to give two volumes of a gaseous compound, all at the same <i>T</i> and <i>P</i>. This directly illustrates",
          "opts": [
            {
              "label": "Boyle's law",
              "nudge": "Boyle's law describes how one fixed sample of gas responds to a change of pressure. It says nothing about the volumes in which different gases react."
            },
            {
              "label": "Charles' law",
              "nudge": "Charles' law describes how one fixed sample responds to a change of temperature. Again this is a reacting-volume ratio, not a response of a single sample."
            },
            {
              "label": "Gay-Lussac's law of combining volumes together with Avogadro's hypothesis",
              "nudge": null
            },
            {
              "label": "Dalton's law of partial pressures",
              "nudge": "Dalton's law concerns the pressures of a non-reacting mixture sharing a container. Here the gases react, and it is volumes and not pressures that are being compared."
            }
          ],
          "correct": 2,
          "solution": "The simple whole-number volume ratio is Gay-Lussac's law of combining volumes. Reading those volumes as proportional to molecule numbers, which is what lets you match them to the balanced equation, requires Avogadro's hypothesis. You need both statements, which is why neither half on its own is the answer."
        },
        {
          "t": "mcq",
          "q": "In an ordinary gas at STP, the average distance a molecule flies between two collisions is roughly",
          "opts": [
            {
              "label": "equal to the molecular diameter",
              "nudge": "That badly underestimates it. One diameter is the spacing in a solid, where molecules touch, not the free-flight distance in a gas."
            },
            {
              "label": "about ten times the molecular diameter",
              "nudge": "Ten diameters is the mean separation between neighbours in a gas, which is a different quantity. The free flight is far longer than the gap to the nearest neighbour, because most near neighbours are missed."
            },
            {
              "label": "a couple of hundred times the molecular diameter",
              "nudge": null
            },
            {
              "label": "the size of the container, whatever the pressure",
              "nudge": "The free path reaches the container size only in a good vacuum, where the density is so low that a molecule crosses the vessel without meeting anything. At ordinary pressure it is very much shorter."
            }
          ],
          "correct": 2,
          "solution": "Topic 06 computes it: for nitrogen at 300 K and 10<sup>5</sup> Pa, λ = 6.8 × 10<sup>−8</sup> m against <i>d</i> = 3.7 × 10<sup>−10</sup> m, a ratio of about 180. Keep the three scales separate and in order: molecular diameter, then mean spacing at roughly ten diameters, then mean free path at a couple of hundred diameters, which is about twenty times the spacing."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] State Avogadro's hypothesis, and use it to explain why equal volumes of hydrogen and oxygen at the same temperature and pressure hold equal numbers of molecules.",
              "a": "Avogadro's hypothesis: equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules. It is an experimental statement about gases in general, so it applies to hydrogen and oxygen alike, and the consequence is that a ratio of volumes is a ratio of molecule numbers. That is what lets the balanced equation be read straight off the measured volumes."
            },
            {
              "q": "[NEET] At STP one mole of any ideal gas occupies 22.4 L. How many molecules are present in 5.6 L of an ideal gas at STP?",
              "a": "5.6/22.4 = 0.25 mol, so <i>N</i> = 0.25 × 6.022 × 10<sup>23</sup> = 1.5 × 10<sup>23</sup> molecules."
            },
            {
              "q": "[JEE Main] A vessel holds 1.0 g of hydrogen, <i>M</i> = 2 g/mol, at STP. Find the number of molecules and estimate the volume occupied.",
              "a": "<i>n</i> = 1.0/2 = 0.50 mol, so <i>N</i> = 0.50 × 6.022 × 10<sup>23</sup> = 3.0 × 10<sup>23</sup> molecules and <i>V</i> = 0.50 × 22.4 = 11.2 L."
            },
            {
              "q": "[JEE Main] Sketch qualitatively how the intermolecular force varies with separation <i>r</i>, mark the equilibrium separation <i>r</i><sub>0</sub>, and state the sign of the force on either side of it.",
              "a": "Repulsive, and steeply so, for <i>r</i> less than <i>r</i><sub>0</sub>; attractive and gentle for <i>r</i> greater than <i>r</i><sub>0</sub>, fading to zero within a few diameters; exactly zero at <i>r</i><sub>0</sub>. The curve therefore crosses the axis once, from above, at <i>r</i><sub>0</sub>, which is the minimum of the potential energy."
            },
            {
              "q": "[JEE Advanced] Water has density 1000 kg/m<sup>3</sup> and <i>M</i> = 18 g/mol, and a water molecule is about 3 Å across. Estimate the mean spacing in liquid water and compare it with the molecular diameter.",
              "a": "<i>n</i><sub>0</sub> = ρ<i>N<sub>A</sub></i>/<i>M</i> = 1000 × 6.022 × 10<sup>23</sup>/(18 × 10<sup>−3</sup>) = 3.35 × 10<sup>28</sup> /m<sup>3</sup>. Then 1/<i>n</i><sub>0</sub> = 2.99 × 10<sup>−29</sup> m<sup>3</sup> and ℓ = (2.99 × 10<sup>−29</sup>)<sup>1/3</sup> = 3.1 × 10<sup>−10</sup> m ≈ 3.1 Å, which is about one molecular diameter. The molecules of a liquid are touching."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing the molecular spacing with the mean free path.</b> The mean separation between neighbours in a gas is about ten molecular diameters. The mean free path, the average distance flown <i>between collisions</i>, is about twenty times that again. They are different quantities and questions deliberately offer both.",
            "<b>Expecting volume to be conserved in a gaseous reaction.</b> Combining volumes follow the balanced equation and Avogadro's law. Two volumes plus one volume need not give three, and usually does not.",
            "<b>Thinking molecules only attract.</b> Without a short-range repulsion all matter would collapse to a point; without the attraction no solid or liquid could form. Both halves are essential, and <i>r</i><sub>0</sub> is where they balance.",
            "<b>Picturing a gas as full of molecules.</b> A gas at STP is about 99.96 per cent empty. Imagining it densely packed leads straight to wrong intuitions about compressibility and about whether the point-mass assumption is fair.",
            "<b>Misreading Brownian motion.</b> The jiggling speck under the microscope is <b>not</b> a molecule. It is a much larger suspended grain being kicked around <i>by</i> molecules. Brownian motion is indirect evidence: you see the effect, never the molecules."
          ]
        },
        {
          "t": "protip",
          "html": "carry three lengths and one fraction in your head and most conceptual questions in this topic answer themselves by comparison alone. molecular size about 10<sup>−10</sup> m, mean spacing in a gas about ten times that, mean free path about twenty times the spacing again, and the fraction of the container actually filled with matter about 10<sup>−4</sup>. and one habit for every estimate below: get the number density first, then take a cube root for a length. that single move handles gases, liquids and solids alike."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "matter is atoms, in perpetual motion",
              "note": "Dalton's theory plus Gay-Lussac's volumes plus Avogadro's hypothesis"
            },
            {
              "f": "N_A = 6.022 × 10<sup>23</sup> /mol, n = N/N_A = m/M",
              "note": "the bridge between a molecule count, a mass and a mole"
            },
            {
              "f": "force: repulsive below r<sub>0</sub>, attractive above, zero at r<sub>0</sub>",
              "note": "and r0 is the minimum of the potential energy, where F = −dU/dr vanishes"
            },
            {
              "f": "n<sub>0</sub> = P/k_B T, ℓ ≈ (1/n<sub>0</sub>)<sup>1/3</sup>",
              "note": "number density first, then a cube root for the spacing"
            },
            {
              "f": "d ≈ V/A from the oil film",
              "note": "a one-molecule-thick layer turns a diameter into a volume and an area"
            },
            {
              "f": "at STP: ℓ ≈ 33 Å ≈ 11 d, and matter fills about 10<sup>−4</sup> of the box",
              "note": "the two numbers that justify treating gas molecules as free points"
            }
          ],
          "aids": [
            "\"close and caged, close and loose, far and free\"",
            "\"brownian motion shows you the boat, never the water\"",
            "\"number density first, cube root second\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Ideal Gas and the Gas Laws",
      "chip": "02 IDEAL GAS",
      "kalam": "kelvin or nothing, and moles before mass",
      "blocks": [
        {
          "t": "p",
          "html": "Picture a Mumbai local at nine in the morning. The compartment is packed, people are shoving against the doors, and the outward push on the walls is enormous. Now picture the same compartment at two in the afternoon: a handful of passengers drifting about, barely touching the sides. A gas is exactly this crowd, except that the passengers are molecules, the shoving is molecular collisions, and the push the walls feel is what we call <b>pressure</b>. The whole of this topic is the bookkeeping that crowd obeys."
        },
        {
          "t": "p",
          "html": "A real gas is messy. Molecules have size, they tug on one another, and they occasionally clump. To make the physics tractable we invent a clean idealisation, the <b>ideal gas</b>, by stripping those complications away. An ideal gas is a crowd of point-like particles that occupy no real volume, exert no force on one another except during instantaneous collisions, and otherwise fly in straight lines. Because nothing sticks the molecules together, an ideal gas has <b>no</b> potential energy of interaction, so all of its internal energy is the kinetic energy of motion. That is a promise this chapter will cash twice: once in Topic 04 when temperature turns out to be that kinetic energy, and once in Topic 05 when the internal energy turns out to depend on temperature alone."
        },
        {
          "t": "think",
          "html": "an ideal gas is a hall full of perfectly smooth marbles that never attract and never deform. they only knock about and bounce off the walls. the word ideal is not a compliment about quality, it just means the gas obeys one beautifully simple law, PV = nRT, at every temperature and every pressure. no real substance does that perfectly, but every real gas comes very close in the right regime."
        },
        {
          "t": "def",
          "term": "The six idealisations, and the regime where they hold",
          "html": "An ideal gas is built from six assumptions, and every later result in this chapter rests on them. The molecules are <b>point masses</b> whose own volume is negligible against the container, so the volume of the gas is the volume of the vessel. There are <b>no intermolecular forces</b> except during collisions, which makes the potential energy zero. All collisions, molecule with molecule and molecule with wall, are <b>perfectly elastic</b>. Between collisions the molecules travel in <b>straight lines</b>, spending negligible time actually colliding. The gas is a <b>pure substance</b>, every molecule alike. And <b>gravity is ignored</b>, so the density is uniform. A real gas obeys these best when its molecules are far apart and fast, that is at <b>low pressure and high temperature</b>. Squeeze it hard, or chill it, and the idealisation breaks: molecules crowd together, attractions bite, finite size starts to matter, and eventually the gas condenses, which an ideal gas can never do. Hydrogen and helium stay near-ideal over a wide range; water vapour near 100 °C and carbon dioxide near room temperature deviate noticeably."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.3 · THE THREE ONE-VARIABLE-FIXED LAWS",
          "chips": [
            "Boyle, T fixed",
            "Charles, P fixed",
            "the pressure law, V fixed"
          ],
          "captions": [
            "Hold the temperature and the amount fixed and pressure varies inversely with volume, so the graph of P against V is a rectangular hyperbola: PV is a constant. Two of them are drawn, one for each temperature, and the hotter isotherm sits further from the origin because the same volume now holds a higher pressure. Squeeze the gas into half the volume and the molecules strike the walls twice as often, which doubles the pressure.",
            "Hold the pressure fixed and volume rises in a straight line with temperature. The measured part of the line is solid; the dashed part is the extrapolation nobody can perform, because every gas liquefies long before it gets there. Its intercept is the whole point: the line hits zero volume at the same −273 °C for every gas, and that is where the kelvin scale puts its zero. This is why T must be absolute in every formula in this chapter.",
            "Hold the volume fixed instead and pressure rises in a straight line with temperature. It is the same picture with a different quantity up the vertical axis, and it extrapolates to the same −273 °C. Two laws, one shape, one absolute zero: for an ideal gas the volume-expansion and pressure-expansion coefficients are equal, both 1/273 per degree celsius, and that shared intercept is why."
          ],
          "frames": [
            {
              "x": [
                0.5,
                5
              ],
              "y": [
                0,
                9
              ],
              "aspect": 0.72,
              "axisX": "volume V",
              "axisY": "pressure P",
              "ticksX": {
                "at": [
                  1,
                  2,
                  3,
                  4,
                  5
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  3,
                  6,
                  9
                ]
              },
              "curves": [
                {
                  "c": "recip",
                  "a": 4
                },
                {
                  "c": "recip",
                  "a": 7,
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 3.7,
                  "y": 2.75,
                  "text": "hotter: PV bigger"
                },
                {
                  "x": 3.4,
                  "y": 0.55,
                  "text": "cooler"
                }
              ]
            },
            {
              "x": [
                -300,
                200
              ],
              "y": [
                0,
                4
              ],
              "aspect": 0.72,
              "axisX": "temperature t (°C)",
              "axisY": "volume V",
              "ticksX": {
                "at": [
                  -273,
                  -100,
                  0,
                  100,
                  200
                ],
                "labels": [
                  "−273",
                  "−100",
                  "0",
                  "100",
                  "200"
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2,
                  3,
                  4
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      -273,
                      0.0
                    ],
                    [
                      -220,
                      0.388
                    ],
                    [
                      -160,
                      0.828
                    ],
                    [
                      -100,
                      1.268
                    ],
                    [
                      -50,
                      1.634
                    ],
                    [
                      0,
                      2.0
                    ]
                  ],
                  "dash": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      2.0
                    ],
                    [
                      50,
                      2.366
                    ],
                    [
                      100,
                      2.733
                    ],
                    [
                      150,
                      3.099
                    ],
                    [
                      200,
                      3.465
                    ]
                  ]
                }
              ],
              "marks": [
                {
                  "x": -273,
                  "y": 0,
                  "glyph": "open",
                  "label": "V = 0 here",
                  "tone": "amber"
                }
              ],
              "labels": [
                {
                  "x": -95,
                  "y": 3.4,
                  "text": "V rises in step with T"
                }
              ]
            },
            {
              "x": [
                -300,
                200
              ],
              "y": [
                0,
                4
              ],
              "aspect": 0.72,
              "axisX": "temperature t (°C)",
              "axisY": "pressure P",
              "ticksX": {
                "at": [
                  -273,
                  -100,
                  0,
                  100,
                  200
                ],
                "labels": [
                  "−273",
                  "−100",
                  "0",
                  "100",
                  "200"
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2,
                  3,
                  4
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      -273,
                      0.0
                    ],
                    [
                      -220,
                      0.388
                    ],
                    [
                      -160,
                      0.828
                    ],
                    [
                      -100,
                      1.268
                    ],
                    [
                      -50,
                      1.634
                    ],
                    [
                      0,
                      2.0
                    ]
                  ],
                  "dash": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      2.0
                    ],
                    [
                      50,
                      2.366
                    ],
                    [
                      100,
                      2.733
                    ],
                    [
                      150,
                      3.099
                    ],
                    [
                      200,
                      3.465
                    ]
                  ]
                }
              ],
              "marks": [
                {
                  "x": -273,
                  "y": 0,
                  "glyph": "open",
                  "label": "P = 0 here",
                  "tone": "amber"
                }
              ],
              "labels": [
                {
                  "x": -95,
                  "y": 3.4,
                  "text": "same line, same zero"
                }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four experimental laws, each for a fixed mass of gas",
          "rows": [
            {
              "k": "Boyle, <i>T</i> held fixed",
              "v": "<i>V</i> ∝ 1/<i>P</i>, that is <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>"
            },
            {
              "k": "Charles, <i>P</i> held fixed",
              "v": "<i>V</i> ∝ <i>T</i>, that is <i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>, with <i>T</i> in kelvin"
            },
            {
              "k": "The pressure law, <i>V</i> held fixed",
              "v": "<i>P</i> ∝ <i>T</i>, that is <i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>. Often called Gay-Lussac's pressure law"
            },
            {
              "k": "Avogadro, <i>P</i> and <i>T</i> held fixed",
              "v": "<i>V</i> ∝ <i>n</i>, so equal volumes hold equal numbers of molecules"
            },
            {
              "k": "The combined law",
              "v": "<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>, the first three at once, for a fixed mass"
            },
            {
              "k": "Expansion coefficients",
              "v": "for an ideal gas α = β = 1/273 per degree celsius, because <i>V</i> ∝ <i>T</i> and <i>P</i> ∝ <i>T</i> share one absolute scale"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE IDEAL GAS EQUATION, FOUR FACES",
          "tag": "T in kelvin, always",
          "main": "<i>PV</i> = <i>nRT</i> = (<i>m</i>/<i>M</i>)<i>RT</i> = <i>Nk<sub>B</sub>T</i><br><i>P</i> = ρ<i>RT</i>/<i>M</i>",
          "legend": [
            "<i>P</i> = pressure in Pa, <i>V</i> = volume in m<sup>3</sup>, <i>T</i> = absolute temperature in K",
            "<i>n</i> = moles, <i>m</i> = total mass in kg, <i>M</i> = molar mass in kg/mol, so <i>n</i> = <i>m</i>/<i>M</i>",
            "<i>N</i> = number of molecules, a pure count, with <i>N</i> = <i>nN<sub>A</sub></i>; ρ = <i>m</i>/<i>V</i> = density in kg/m<sup>3</sup>",
            "<i>R</i> = 8.314 J/mol K, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>]; <i>k<sub>B</sub></i> = <i>R</i>/<i>N<sub>A</sub></i> = 1.38 × 10<sup>−23</sup> J/K, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>]",
            "every face reduces to [M L<sup>2</sup> T<sup>−2</sup>], an energy: Pa times m<sup>3</sup> is N/m<sup>2</sup> times m<sup>3</sup>, which is N m, a joule"
          ],
          "note": "PV = nRT is the CONTAINER form, for a gas shut in a vessel of definite volume. P = ρRT/M is the ATMOSPHERIC form, for when you are handed a density instead: open air, a gas column, an unconfined region. Same physics, and you pick the face that matches the data given."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · STITCHING THE LAWS INTO PV = nRT",
          "steps": [
            {
              "eq": "take a fixed mass in state (<i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub>) and aim for (<i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>), through an intermediate state (<i>P</i><sub>2</sub>, <i>V</i>′, <i>T</i><sub>1</sub>)",
              "why": "Each experimental law holds only one variable fixed, so you cannot use any of them on a change where two variables move at once. The fix is to change the state in two stages and let exactly one law act at a time. The intermediate state has the final pressure but is still at the initial temperature."
            },
            {
              "eq": "step 1, at fixed <i>T</i><sub>1</sub>, Boyle gives <i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i>′, so <i>V</i>′ = <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>P</i><sub>2</sub>",
              "why": "Fixing the temperature first isolates the pressure-volume trade-off with no temperature interference at all, which is exactly the condition Boyle's law was measured under."
            },
            {
              "eq": "step 2, at fixed <i>P</i><sub>2</sub>, Charles gives <i>V</i>′/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>, so <i>V</i>′ = <i>V</i><sub>2</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>",
              "why": "With the pressure now pinned at its final value, the only remaining trade-off is volume against temperature, and that is Charles' law. Both temperatures here are absolute, which is the one thing that cannot be relaxed."
            },
            {
              "eq": "eliminate <i>V</i>′: <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>P</i><sub>2</sub> = <i>V</i><sub>2</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>, hence <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>",
              "why": "The two steps each produced an expression for the same intermediate volume, so setting them equal removes it. What survives is the combined gas law: the quantity <i>PV</i>/<i>T</i> is a constant for a fixed mass of gas, whatever route you take between two states."
            },
            {
              "eq": "the constant must scale with the amount of gas, so write it <i>nR</i>: <i>PV</i>/<i>T</i> = <i>nR</i>, that is <b><i>PV</i> = <i>nRT</i></b>",
              "why": "Avogadro's law says volume scales with the number of moles at fixed <i>P</i> and <i>T</i>, so the constant is proportional to <i>n</i>. The experimental discovery is that the remaining factor <i>R</i> is the <i>same for every gas</i>: measure <i>PV</i>/<i>nT</i> for hydrogen, oxygen or argon and let the pressure fall towards zero, and all of them approach 8.314 J/mol K. That universality is what earns <i>R</i> the name universal gas constant, and it is why the equation carries nothing about the identity of the gas."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.4 · THE TWO-STEP ROUTE THE DERIVATION TAKES",
          "chips": [
            "step 1, Boyle",
            "step 2, Charles"
          ],
          "captions": [
            "The state moves along the isotherm through state 1, so the temperature never changes and Boyle's law is legal. It stops at the intermediate state, which already has the final pressure. The whole hyperbola is drawn faintly behind: every point on it is the same gas at the same temperature.",
            "Now the pressure is pinned and the state moves horizontally, at constant P, to the final volume. Only temperature and volume change, so Charles' law is legal. Two legs, two laws, and the intermediate volume V prime cancels between them, which is the entire trick of the derivation."
          ],
          "frames": [
            {
              "x": [
                0,
                4
              ],
              "y": [
                0,
                5
              ],
              "aspect": 0.72,
              "axisX": "volume V",
              "axisY": "pressure P",
              "ticksX": {
                "at": [
                  1,
                  2,
                  3
                ]
              },
              "ticksY": {
                "at": [
                  2,
                  4
                ]
              },
              "curves": [
                {
                  "c": "recip",
                  "a": 4,
                  "soft": true
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      1,
                      4.0
                    ],
                    [
                      1.15,
                      3.478
                    ],
                    [
                      1.3,
                      3.077
                    ],
                    [
                      1.5,
                      2.667
                    ],
                    [
                      1.7,
                      2.353
                    ],
                    [
                      1.85,
                      2.162
                    ],
                    [
                      2,
                      2.0
                    ]
                  ],
                  "smooth": true,
                  "fill": "none",
                  "tone": "amber"
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 4,
                  "label": "state 1",
                  "at": "ne"
                },
                {
                  "x": 2,
                  "y": 2,
                  "label": "V prime",
                  "at": "nw"
                }
              ],
              "labels": [
                {
                  "x": 2.75,
                  "y": 4.1,
                  "text": "one isotherm, T1"
                }
              ]
            },
            {
              "x": [
                0,
                4
              ],
              "y": [
                0,
                5
              ],
              "aspect": 0.72,
              "axisX": "volume V",
              "axisY": "pressure P",
              "ticksX": {
                "at": [
                  1,
                  2,
                  3
                ]
              },
              "ticksY": {
                "at": [
                  2,
                  4
                ]
              },
              "curves": [
                {
                  "c": "recip",
                  "a": 4,
                  "soft": true
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      1,
                      4.0
                    ],
                    [
                      1.15,
                      3.478
                    ],
                    [
                      1.3,
                      3.077
                    ],
                    [
                      1.5,
                      2.667
                    ],
                    [
                      1.7,
                      2.353
                    ],
                    [
                      1.85,
                      2.162
                    ],
                    [
                      2,
                      2.0
                    ]
                  ],
                  "smooth": true,
                  "fill": "none",
                  "tone": "soft"
                }
              ],
              "arrows": [
                {
                  "from": [
                    2.05,
                    2
                  ],
                  "to": [
                    3,
                    2
                  ],
                  "tone": "amber",
                  "label": "at fixed P",
                  "at": "below"
                }
              ],
              "points": [
                {
                  "x": 1,
                  "y": 4,
                  "label": "state 1",
                  "at": "ne"
                },
                {
                  "x": 2,
                  "y": 2,
                  "label": "V prime",
                  "at": "nw"
                },
                {
                  "x": 3,
                  "y": 2,
                  "label": "state 2",
                  "at": "ne"
                }
              ],
              "labels": [
                {
                  "x": 2.75,
                  "y": 4.1,
                  "text": "T2 above T1 now"
                }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MIXTURES AND DIFFUSION",
          "tag": "non-reacting mixture, one volume, one temperature",
          "main": "<i>P</i><sub>total</sub> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + … = (<i>RT</i>/<i>V</i>)(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> + …)<br><i>P<sub>i</sub></i>/<i>P</i><sub>total</sub> = <i>n<sub>i</sub></i>/<i>n</i><sub>total</sub> = <i>x<sub>i</sub></i><br>rate of diffusion ∝ 1/√ρ ∝ 1/√<i>M</i>",
          "legend": [
            "<i>P<sub>i</sub></i> = the partial pressure of component <i>i</i> in Pa, the pressure it would exert alone in the same vessel",
            "<i>n<sub>i</sub></i> = moles of component <i>i</i>, and <i>x<sub>i</sub></i> = its mole fraction, a pure number between 0 and 1",
            "<i>V</i> = the shared volume in m<sup>3</sup>, <i>T</i> = the shared temperature in K, <i>R</i> = 8.314 J/mol K",
            "ρ = density in kg/m<sup>3</sup> and <i>M</i> = molar mass in kg/mol, so Graham's ratio is dimensionless, as a ratio of two rates must be"
          ],
          "note": "Dalton's law is the first two lines and is exact for ideal gases, since each component ignores the others entirely. Graham's law is really a consequence of the kinetic picture of Topic 04, but it lives here because it is stated purely in the macroscopic quantities density and molar mass. Lighter means faster, always."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DALTON'S LAW, AND THE MOLE-FRACTION COROLLARY",
          "steps": [
            {
              "eq": "each component behaves ideally and ignores the others, so on its own it would exert <i>P<sub>i</sub></i> = <i>n<sub>i</sub>RT</i>/<i>V</i>",
              "why": "The ideal-gas assumptions include no intermolecular forces, and that applies between unlike molecules just as much as between like ones. Each gas therefore fills the whole vessel as if the others were not there, at the shared volume and the shared temperature."
            },
            {
              "eq": "the wall feels every molecule, so the pressures add: <i>P</i><sub>total</sub> = Σ<i>P<sub>i</sub></i> = (<i>RT</i>/<i>V</i>)Σ<i>n<sub>i</sub></i> = <i>n</i><sub>total</sub><i>RT</i>/<i>V</i>",
              "why": "Pressure is a force per unit area, and forces from independent sources add. So the mixture behaves exactly like a single ideal gas of <i>n</i><sub>total</sub> moles. That is Dalton's law, and it is why a mixture problem collapses into a one-gas problem the moment you convert every mass to moles."
            },
            {
              "eq": "divide one partial pressure by the total: <i>P<sub>i</sub></i>/<i>P</i><sub>total</sub> = <i>n<sub>i</sub></i>/<i>n</i><sub>total</sub> = <i>x<sub>i</sub></i>",
              "why": "The factor <i>RT</i>/<i>V</i> is common to both and cancels. Each gas's share of the pressure is exactly its mole fraction, which is the single most useful mixture result in the whole syllabus: find the mole fractions and every partial pressure follows in one multiplication."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Choosing the right face of the gas law",
          "steps": [
            "<b>If the amount of gas is fixed and only <i>P</i>, <i>V</i>, <i>T</i> change</b>, use the combined law <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> and never compute <i>n</i> at all. Pressure and volume may stay in any consistent units inside a ratio; temperature may not, and must be kelvin.",
            "<b>If a mass, a density or a molar mass appears</b>, use <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> or <i>P</i> = ρ<i>RT</i>/<i>M</i>. Those are the only two faces that carry <i>M</i>, so seeing a molar mass in the question is the signal.",
            "<b>If a number of molecules appears</b>, use <i>PV</i> = <i>Nk<sub>B</sub>T</i>. Do not convert <i>N</i> to moles and back; the Boltzmann form exists precisely to save you that step.",
            "<b>If a mixture is involved</b>, convert every mass to moles first, add them, and treat the mixture as one gas of <i>n</i><sub>total</sub> moles. Partial pressures then come from the mole fractions.",
            "<b>Match <i>R</i> to your units before substituting.</b> <i>R</i> = 8.314 J/mol K demands pascal and cubic metres; <i>R</i> = 0.0821 L atm /mol K demands litres and atmospheres. Mismatching them is a silent error that produces a plausible-looking wrong number."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A sealed cylinder holds 2.0 L of an ideal gas at 27 °C and 1.0 atm. The gas is compressed to 0.50 L and simultaneously heated to 127 °C. Find the new pressure.",
          "steps": [
            "Convert first: <i>T</i><sub>1</sub> = 27 + 273 = 300 K and <i>T</i><sub>2</sub> = 127 + 273 = 400 K.",
            "The amount of gas is fixed, so the combined law applies: <i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> × (<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>) × (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>).",
            "<i>P</i><sub>2</sub> = 1.0 × (2.0/0.50) × (400/300) = 1.0 × 4 × 4/3 = 5.33 atm."
          ],
          "ans": "About 5.3 atm. Notice that litres were never converted to cubic metres: inside a ratio the volume units cancel. The temperatures still had to become kelvin, because 400/300 and 127/27 are not the same number."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At STP a certain gas has density 1.25 g/L. Identify its molar mass, and hence the likely gas.",
          "steps": [
            "At STP one mole of <i>any</i> ideal gas occupies 22.4 L, by Avogadro's law.",
            "So the molar mass is just the density times the molar volume: <i>M</i> = 1.25 × 22.4 = 28 g/mol."
          ],
          "ans": "<i>M</i> = 28 g/mol, so nitrogen (N<sub>2</sub>) or carbon monoxide (CO). The trap is that <i>M</i> = ρ<i>RT</i>/<i>P</i> tempts a full plug-in, and the killer mistake there is reading STP as <i>T</i> = 0 and forgetting the +273, which makes <i>M</i> = 0. At STP always shortcut through <i>M</i> = 22.4ρ with ρ in g/L, and skip <i>R</i>, <i>T</i> and <i>P</i> entirely."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A rigid 10.0 L vessel holds 4.0 g of oxygen (<i>M</i> = 32) and 2.0 g of helium (<i>M</i> = 4) at 300 K. Find the total pressure on the walls and the partial pressure of helium.",
          "steps": [
            "Moles first, always: <i>n</i>(O<sub>2</sub>) = 4.0/32 = 0.125 mol and <i>n</i>(He) = 2.0/4 = 0.50 mol, so <i>n</i><sub>total</sub> = 0.625 mol.",
            "Convert the volume for SI <i>R</i>: <i>V</i> = 10.0 L = 1.0 × 10<sup>−2</sup> m<sup>3</sup>.",
            "<i>P</i><sub>total</sub> = <i>n</i><sub>total</sub><i>RT</i>/<i>V</i> = 0.625 × 8.314 × 300/(1.0 × 10<sup>−2</sup>) = 1.56 × 10<sup>5</sup> Pa.",
            "Mole fraction of helium: <i>x</i> = 0.50/0.625 = 0.80, so <i>P</i>(He) = 0.80 × 1.56 × 10<sup>5</sup> = 1.25 × 10<sup>5</sup> Pa."
          ],
          "ans": "<i>P</i><sub>total</sub> ≈ 1.56 × 10<sup>5</sup> Pa, about 1.54 atm, and <i>P</i>(He) ≈ 1.25 × 10<sup>5</sup> Pa. The lesson: each gas fills the whole vessel independently, and pressures add. The 2.0 g of helium outweighs the 4.0 g of oxygen in <i>pressure</i> because it is four times as many moles."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two identical bulbs, each of volume <i>V</i>, are joined by a thin tube of negligible volume and hold an ideal gas at a common pressure <i>P</i><sub>0</sub> and temperature <i>T</i><sub>0</sub> = 300 K throughout. One bulb is now immersed in a bath at 400 K while the other stays at 300 K. Find the new common pressure.",
          "steps": [
            "The bulbs are connected, so the <i>pressure</i> becomes common, but the <i>total number of moles</i> is what is conserved. Write that equation first.",
            "Initially: <i>n</i> = <i>P</i><sub>0</sub><i>V</i>/<i>RT</i><sub>0</sub> + <i>P</i><sub>0</sub><i>V</i>/<i>RT</i><sub>0</sub> = 2<i>P</i><sub>0</sub><i>V</i>/<i>RT</i><sub>0</sub>.",
            "Finally, at a common <i>P</i>: <i>n</i> = <i>PV</i>/<i>RT</i><sub>1</sub> + <i>PV</i>/<i>RT</i><sub>2</sub> = (<i>PV</i>/<i>R</i>)(1/<i>T</i><sub>1</sub> + 1/<i>T</i><sub>2</sub>).",
            "Cancel <i>V</i>/<i>R</i> and solve: <i>P</i> = (2<i>P</i><sub>0</sub>/<i>T</i><sub>0</sub>) × <i>T</i><sub>1</sub><i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>).",
            "Substitute: <i>P</i> = (2<i>P</i><sub>0</sub>/300) × (400 × 300)/700 = 2<i>P</i><sub>0</sub> × 400/700 = 8<i>P</i><sub>0</sub>/7."
          ],
          "ans": "<i>P</i> = 8<i>P</i><sub>0</sub>/7 ≈ 1.14<i>P</i><sub>0</sub>. Heating one half drives gas across into the cooler bulb, and the system settles at a higher common pressure. The whole problem turns on the phrase total moles conserved: write that line first and the algebra is routine."
        },
        {
          "t": "mcq",
          "q": "A real gas most closely approaches ideal behaviour at",
          "opts": [
            {
              "label": "high pressure and low temperature",
              "nudge": "That is the exact reverse, and it is the corner of the diagram where a gas condenses. High pressure and low temperature is the worst case for ideality, not the best."
            },
            {
              "label": "low pressure and high temperature",
              "nudge": null
            },
            {
              "label": "high pressure and high temperature",
              "nudge": "High temperature does help, but high pressure reintroduces the finite molecular volume: the molecules' own bulk stops being negligible against the container even when they are moving fast."
            },
            {
              "label": "low pressure and low temperature",
              "nudge": "Low pressure does help, but at low temperature the kinetic energy no longer overwhelms the intermolecular attraction, so the stickiness starts to register."
            }
          ],
          "correct": 1,
          "solution": "Low pressure keeps the molecules far apart, so the time they spend near one another, where attractions matter, is negligible. High temperature makes the kinetic energy dominate any residual attraction. Both conditions push towards far apart and fast, which is exactly the ideal-gas regime. Memorising extremes are good without the physics is what makes the other three tempting."
        },
        {
          "t": "mcq",
          "q": "A fixed mass of ideal gas at 27 °C is heated at constant volume until its pressure doubles. The final temperature is",
          "opts": [
            {
              "label": "54 °C",
              "nudge": "This doubles the celsius reading. Pressure is proportional to the ABSOLUTE temperature, and 54 °C is 327 K, nowhere near double 300 K."
            },
            {
              "label": "327 °C",
              "nudge": null
            },
            {
              "label": "600 °C",
              "nudge": "This correctly doubles 300 K to 600 K and then forgets to convert back to celsius. Read the units the options are written in before choosing."
            },
            {
              "label": "273 °C",
              "nudge": "This is the +273 offset mistaken for the answer itself. The offset is a step in the conversion, not the result."
            }
          ],
          "correct": 1,
          "solution": "At constant volume <i>P</i> ∝ <i>T</i> in kelvin. <i>T</i><sub>1</sub> = 27 + 273 = 300 K, so doubling the pressure needs <i>T</i><sub>2</sub> = 600 K, which is 600 − 273 = 327 °C."
        },
        {
          "t": "mcq",
          "q": "Equal <i>masses</i> of helium (<i>M</i> = 4) and oxygen (<i>M</i> = 32) are mixed in one container. The ratio of the partial pressure of helium to that of oxygen is",
          "opts": [
            {
              "label": "1 : 1",
              "nudge": "This assumes equal mass means equal pressure, which ignores the molar mass entirely. Pressure is set by the number of molecules, and a gram of helium is far more molecules than a gram of oxygen."
            },
            {
              "label": "1 : 8",
              "nudge": "This is the ratio inverted: it uses M directly instead of 1/M. The lighter gas gives more moles per gram, so helium must come out on top."
            },
            {
              "label": "8 : 1",
              "nudge": null
            },
            {
              "label": "4 : 32",
              "nudge": "This just quotes the molar-mass ratio, which is the reciprocal of what matters, and does not even simplify to a mole ratio."
            }
          ],
          "correct": 2,
          "solution": "Partial pressure is set by moles, and for equal masses <i>n</i> = <i>m</i>/<i>M</i>, so <i>n</i>(He) : <i>n</i>(O<sub>2</sub>) = 1/4 : 1/32 = 8 : 1. The pressures share that ratio exactly, since both gases sit in the same volume at the same temperature."
        },
        {
          "t": "mcq",
          "q": "Gases A and B diffuse through a porous plug under identical conditions, and A diffuses 1.5 times as fast as B. The ratio <i>M</i><sub>A</sub> : <i>M</i><sub>B</sub> is",
          "opts": [
            {
              "label": "3 : 2",
              "nudge": "This uses the rate ratio directly without squaring. Graham's law relates rate to the square ROOT of the molar mass, so a rate ratio must be squared before it becomes a mass ratio."
            },
            {
              "label": "2 : 3",
              "nudge": "This inverts the rate ratio but still never squares it, so it is wrong twice over."
            },
            {
              "label": "4 : 9",
              "nudge": null
            },
            {
              "label": "9 : 4",
              "nudge": "This squares correctly but forgets to invert, giving M_B : M_A. Sanity check it: A is the faster gas, so A must be the LIGHTER one, and 9 : 4 makes A heavier."
            }
          ],
          "correct": 2,
          "solution": "Graham's law gives rate(A)/rate(B) = √(<i>M</i><sub>B</sub>/<i>M</i><sub>A</sub>) = 1.5. Square it: <i>M</i><sub>B</sub>/<i>M</i><sub>A</sub> = 2.25, so <i>M</i><sub>A</sub>/<i>M</i><sub>B</sub> = 1/2.25 = 4/9. The two-second sanity check, lighter means faster, kills the reversed option instantly."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A gas occupies 500 mL at 300 K and 1.0 atm. To what temperature must it be heated at constant pressure to occupy 750 mL?",
              "a": "At constant pressure <i>V</i> ∝ <i>T</i>, so <i>T</i><sub>2</sub> = 300 × 750/500 = 450 K, that is 177 °C."
            },
            {
              "q": "[NEET] The density of a gas at 546 K and 2.0 atm is 0.90 g/L. Find its molar mass. Take <i>R</i> = 0.0821 L atm /mol K.",
              "a": "<i>M</i> = ρ<i>RT</i>/<i>P</i> = 0.90 × 0.0821 × 546/2.0 = 40.34/2.0 = 20.2 g/mol, which is neon. Units are consistent throughout: ρ in g/L with <i>R</i> in L atm /mol K gives <i>M</i> in g/mol."
            },
            {
              "q": "[JEE Main] A 5.0 L flask holds 1.4 g of nitrogen (<i>M</i> = 28) and 3.2 g of oxygen (<i>M</i> = 32) at 290 K. Find the total pressure in pascal and the mole fraction of oxygen.",
              "a": "<i>n</i>(N<sub>2</sub>) = 1.4/28 = 0.050 mol, <i>n</i>(O<sub>2</sub>) = 3.2/32 = 0.100 mol, so <i>n</i><sub>total</sub> = 0.150 mol. With <i>V</i> = 5.0 × 10<sup>−3</sup> m<sup>3</sup>: <i>P</i> = 0.150 × 8.314 × 290/(5.0 × 10<sup>−3</sup>) = 7.23 × 10<sup>4</sup> Pa. Mole fraction of oxygen = 0.100/0.150 = 0.667."
            },
            {
              "q": "[JEE Main] An open flask is heated from 27 °C to 327 °C at constant atmospheric pressure. What fraction of the air originally present escapes?",
              "a": "The flask volume and the pressure are both fixed, so <i>n</i> ∝ 1/<i>T</i>. With <i>T</i> going from 300 K to 600 K, <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = 300/600 = 1/2, so half the air escapes."
            },
            {
              "q": "[JEE Advanced] A vertical cylinder closed at the bottom, fitted with a frictionless massless piston of area <i>A</i>, holds an ideal gas of column length <i>L</i><sub>0</sub> at <i>T</i><sub>0</sub>. Atmospheric pressure is <i>P</i><sub>0</sub>. A mass <i>m</i> is placed on the piston and the gas is heated to <i>T</i>. Find the new column length <i>L</i>.",
              "a": "With the mass resting on a free piston the gas pressure is pinned at <i>P</i><sub>0</sub> + <i>mg</i>/<i>A</i> and stays there, so this is an isobaric change and <i>V</i> ∝ <i>T</i>. Since <i>V</i> = <i>AL</i> with <i>A</i> fixed, <i>L</i> ∝ <i>T</i> and <i>L</i> = <i>L</i><sub>0</sub><i>T</i>/<i>T</i><sub>0</sub>. The pressure value never enters the answer, only the fact that it is constant."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>The kelvin sin.</b> Leaving a temperature in celsius wrecks any gas-law calculation. Pressure and volume may stay in any consistent units inside a ratio, but <i>T</i> must be absolute. Build the reflex: the instant you see a celsius value, add 273.",
            "<b>Treating mass as moles.</b> Pressure, Dalton's law and Avogadro's law all care about the <i>number</i> of molecules, never the mass. Equal masses of two gases give quite different pressures. Convert to moles before anything else.",
            "<b>Swapping Charles' law and the pressure law.</b> Charles, <i>V</i>/<i>T</i>, holds at constant <i>pressure</i>; the pressure law, <i>P</i>/<i>T</i>, holds at constant <i>volume</i>. Write down which variable is held fixed before writing any equation at all.",
            "<b>Mismatching <i>R</i> with the units.</b> <i>R</i> = 8.314 needs pascal and cubic metres; <i>R</i> = 0.0821 needs litres and atmospheres. There is no warning when you get this wrong, only a number that is off by a factor of about a hundred.",
            "<b>Assuming ideal behaviour everywhere.</b> The equation fails near condensation, at very high pressure where molecular volume matters, and at very low temperature where attraction dominates. An exam question that mentions liquefying, or a very high pressure, is usually testing exactly this."
          ]
        },
        {
          "t": "protip",
          "html": "for any before-and-after problem with a fixed mass, never compute n. write P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>, strike out whatever is held constant, and read off the answer. it is faster and it is immune to unit-conversion mistakes, which is a genuine NEET time saver. and at STP keep one number in your pocket: M = 22.4 × (density in g/L). that turns a whole family of find the gas questions into one multiplication."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "PV = nRT = (m/M)RT = Nk_B T, and P = ρRT/M",
              "note": "four faces of one equation; pick the one carrying the data you were given"
            },
            {
              "f": "fixed mass: P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>",
              "note": "kelvin only, and cancel whatever is constant before substituting"
            },
            {
              "f": "Boyle PV, Charles V/T, pressure law P/T, Avogadro V ∝ n",
              "note": "each holds ONE variable fixed, and the combined law is the first three at once"
            },
            {
              "f": "Dalton: P<sub>total</sub> = ΣP<sub>i</sub>, and P<sub>i</sub> = x<sub>i</sub>P<sub>total</sub>",
              "note": "convert masses to moles, add, then treat the mixture as one gas"
            },
            {
              "f": "Graham: rate ∝ 1/√M",
              "note": "lighter is faster, and it is the square root, so square a rate ratio to get a mass ratio"
            },
            {
              "f": "R = 8.314 J/mol K, k_B = 1.38 × 10<sup>−23</sup> J/K, 22.4 L/mol at STP",
              "note": "R with pascal and m<sup>3</sup>; 0.0821 L atm /mol K with litres and atmospheres"
            }
          ],
          "aids": [
            "\"low P, high T: molecules free and flighty\"",
            "\"moles before mass, kelvin before everything\"",
            "\"at STP, molar mass is 22.4 times the density in grams per litre\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Kinetic Theory and the Origin of Pressure",
      "chip": "03 PRESSURE",
      "kalam": "pressure is a drumbeat, and the one third is isotropy",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 <i>asserted</i> that gases obey <i>PV</i> = <i>nRT</i>. Where does that law come from, and why should pressure exist at all? Kinetic theory answers by zooming all the way down to the molecules and asking what a swarm of tiny particles in ceaseless random motion must look like from outside. The triumph is that pressure, temperature and the gas laws all fall out of Newton's laws applied to a crowd of bouncing balls. It took Clausius, Maxwell and Boltzmann most of the nineteenth century to put it on a firm footing, and from that one set of assumptions the theory reproduces the gas laws, explains the specific heats of gases, and links viscosity, thermal conduction and diffusion back to molecular sizes and masses."
        },
        {
          "t": "p",
          "html": "Picture a bowling machine at a practice net, firing balls at the back netting. Each ball that strikes pushes the net outward a little and bounces back. One ball gives a tiny, jerky shove. Fire thousands per second from every angle and the net feels a steady, smooth, outward push, a <b>pressure</b>. A gas does exactly this. <b>Pressure is nothing more than the relentless drumbeat of molecules colliding with the container walls and rebounding.</b> No collisions, no pressure. The wall no more feels individual molecular hits than your skin feels individual air molecules; what it feels is the time-averaged force from an astronomical number of impacts."
        },
        {
          "t": "think",
          "html": "the wall of a balloon is being machine-gunned from inside by something like 10<sup>27</sup> molecules every second. each impact is microscopic and random, but their sheer number averages into the constant, uniform pressure that keeps the balloon inflated. stretch that picture and you can feel the answers to exam questions before doing any algebra: heat the gas and the molecules move faster and hit harder and more often, so pressure rises; squeeze it into half the volume and the same molecules strike the walls twice as often, so pressure doubles."
        },
        {
          "t": "defgrid",
          "title": "The five postulates the whole derivation rests on",
          "rows": [
            {
              "k": "1 · Very many, and random",
              "v": "a gas is a very large number of identical molecules in constant, random motion in all directions"
            },
            {
              "k": "2 · Effectively points",
              "v": "a molecule's size is negligible against the mean separation and against the container, so molecules are point masses"
            },
            {
              "k": "3 · Newton between collisions",
              "v": "molecules obey Newton's laws and travel in straight lines at constant velocity between collisions, exerting no force on one another"
            },
            {
              "k": "4 · Perfectly elastic collisions",
              "v": "molecule with molecule and molecule with wall, kinetic energy and momentum are both conserved, and each collision is instantaneous"
            },
            {
              "k": "5 · Isotropic motion",
              "v": "no direction is special, so (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>y</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>z</sub>)<sub>av</sub>. This is the postulate that produces the factor of one third"
            },
            {
              "k": "Where they break",
              "v": "put a field on charged molecules and a non-collisional force appears; make one wall preferred and isotropy is lost; pack the gas densely and size and attraction matter. Kinetic theory is the physics of a <b>dilute</b> gas of <b>neutral</b> molecules feeling nothing but each other's bounces"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.5 · ONE MOLECULE, ONE WALL",
          "chips": [
            "the bounce",
            "the round trip"
          ],
          "captions": [
            "The wall is perpendicular to x, and the collision is elastic, so only the x-component of the velocity reverses: vx becomes minus vx while vy and vz slide along the wall untouched. The molecule's momentum changes by minus 2mvx, so by Newton's third law the momentum delivered TO the wall is plus 2mvx. Note the 2: an elastic bounce reverses the component, it does not merely stop it, and halving this to mvx is the classic derivation error.",
            "How often does this one molecule hit this one wall? It must cross to the far wall and come back, a round-trip distance 2l in the x-direction, covered at x-speed vx. The y and z wandering is irrelevant, because the rate of striking THIS wall is set purely by the x-motion. So the time between two hits on the same wall is 2l/vx, and force is momentum delivered per unit time."
          ],
          "frames": [
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.2,
                      1.0
                    ],
                    [
                      9.8,
                      1.0
                    ],
                    [
                      9.8,
                      7.0
                    ],
                    [
                      1.2,
                      7.0
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "marks": [
                {
                  "x": 8.9,
                  "y": 5.2,
                  "glyph": "dot"
                },
                {
                  "x": 8.9,
                  "y": 3.0,
                  "glyph": "dot"
                }
              ],
              "arrows": [
                {
                  "from": [
                    5.6,
                    5.2
                  ],
                  "to": [
                    9.4,
                    5.2
                  ],
                  "tone": "amber",
                  "label": "vx",
                  "at": "above"
                },
                {
                  "from": [
                    9.4,
                    3.0
                  ],
                  "to": [
                    5.6,
                    3.0
                  ],
                  "tone": "amber",
                  "label": "vx",
                  "at": "above"
                }
              ],
              "labels": [
                {
                  "x": 4.4,
                  "y": 6.4,
                  "text": "in, momentum +mvx"
                },
                {
                  "x": 4.4,
                  "y": 1.8,
                  "text": "out, momentum −mvx"
                }
              ]
            },
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.2,
                      1.0
                    ],
                    [
                      9.8,
                      1.0
                    ],
                    [
                      9.8,
                      7.0
                    ],
                    [
                      1.2,
                      7.0
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "arrows": [
                {
                  "from": [
                    9.4,
                    4.7
                  ],
                  "to": [
                    1.6,
                    4.7
                  ],
                  "tone": "amber",
                  "label": "l across",
                  "at": "above"
                },
                {
                  "from": [
                    1.6,
                    3.3
                  ],
                  "to": [
                    9.4,
                    3.3
                  ],
                  "tone": "amber",
                  "label": "l back",
                  "at": "below"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 6.4,
                  "text": "round trip 2l, at speed vx"
                },
                {
                  "x": 5.5,
                  "y": 1.8,
                  "text": "so Δt = 2l/vx between hits"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PRESSURE OF AN IDEAL GAS",
          "steps": [
            {
              "eq": "one elastic bounce off the wall perpendicular to <i>x</i>: Δ<i>p<sub>x</sub></i> = (−<i>mv<sub>x</sub></i>) − (+<i>mv<sub>x</sub></i>) = −2<i>mv<sub>x</sub></i>, so the wall receives +2<i>mv<sub>x</sub></i>",
              "why": "Take <i>N</i> molecules of mass <i>m</i> in a cube of side <i>l</i>, volume <i>V</i> = <i>l</i><sup>3</sup>, axes along the edges. Only the <i>x</i>-motion sees this wall; the tangential components slide along it untouched. Newton's third law then converts the molecule's loss into the wall's gain."
            },
            {
              "eq": "the time between two hits on the <i>same</i> wall is Δ<i>t</i> = 2<i>l</i>/<i>v<sub>x</sub></i>",
              "why": "After bouncing off the right wall the molecule must cross to the left wall and return before it can strike the right wall again. That is a round-trip distance of 2<i>l</i> in the <i>x</i>-direction, covered at <i>x</i>-speed <i>v<sub>x</sub></i>. The wandering in <i>y</i> and <i>z</i> changes nothing about how often this wall is struck."
            },
            {
              "eq": "average force from one molecule: <i>f<sub>x</sub></i> = 2<i>mv<sub>x</sub></i>/Δ<i>t</i> = 2<i>mv<sub>x</sub></i>/(2<i>l</i>/<i>v<sub>x</sub></i>) = <i>mv</i><sup>2</sup><sub>x</sub>/<i>l</i>",
              "why": "Force is momentum delivered per unit time, which is what Newton's second law says in its original form. The <i>v<sub>x</sub></i> in the numerator and the 1/<i>v<sub>x</sub></i> hiding in Δ<i>t</i> combine into the square, and that square is the reason pressure ends up proportional to <i>v</i><sup>2</sup> and not to <i>v</i>."
            },
            {
              "eq": "sum over all <i>N</i> molecules: <i>F<sub>x</sub></i> = (<i>m</i>/<i>l</i>)(<i>v</i><sup>2</sup><sub>x1</sub> + <i>v</i><sup>2</sup><sub>x2</sub> + … + <i>v</i><sup>2</sup><sub>xN</sub>) = (<i>m</i>/<i>l</i>)<i>N</i>(<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub>",
              "why": "Each molecule contributes its own term, and the sum of the squares divided by <i>N</i> is by definition the mean square <i>x</i>-velocity (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub>. Averaging is what turns a wildly fluctuating set of impulses into a single steady force, which is why pressure is meaningful only for a large collection."
            },
            {
              "eq": "divide by the wall area <i>A</i> = <i>l</i><sup>2</sup>: <i>P</i> = <i>F<sub>x</sub></i>/<i>A</i> = <i>mN</i>(<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub>/<i>l</i><sup>3</sup> = (<i>mN</i>/<i>V</i>)(<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub>",
              "why": "The three factors of <i>l</i> collect into the volume, and the side length of the box has now vanished completely. That is worth pausing on: the answer depends only on the number density <i>N</i>/<i>V</i>, the molecular mass and the mean square speed, never on how big the box is."
            },
            {
              "eq": "isotropy gives (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (1/3)(<i>v</i><sup>2</sup>)<sub>av</sub>, hence <b><i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub></b>",
              "why": "Pressure cannot depend on which wall we chose, because the motion is random, so (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>y</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>z</sub>)<sub>av</sub>. Since <i>v</i><sup>2</sup> = <i>v</i><sup>2</sup><sub>x</sub> + <i>v</i><sup>2</sup><sub>y</sub> + <i>v</i><sup>2</sup><sub>z</sub>, averaging gives (<i>v</i><sup>2</sup>)<sub>av</sub> = 3(<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub>. The factor of one third is <b>not</b> arbitrary: it is the direct fingerprint of three-dimensional isotropy. Intermolecular collisions were ignored along the way, and legitimately so, because being elastic they only reshuffle velocities among molecules without changing the collection's total (<i>v</i><sup>2</sup>)<sub>av</sub>."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE KINETIC EQUATION FOR PRESSURE",
          "tag": "the central result of this topic",
          "main": "<i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub><br><i>PV</i> = (1/3)<i>Nm v</i><sup>2</sup><sub>rms</sub>",
          "legend": [
            "<i>P</i> = pressure in Pa, dimensions [M L<sup>−1</sup> T<sup>−2</sup>]; <i>V</i> = volume in m<sup>3</sup>",
            "<i>N</i> = total number of molecules, a pure count, and <i>N</i>/<i>V</i> is the number density in /m<sup>3</sup>",
            "<i>m</i> = mass of <b>one</b> molecule in kg, never the sample mass",
            "(<i>v</i><sup>2</sup>)<sub>av</sub> = mean square speed in m<sup>2</sup>/s<sup>2</sup>, dimensions [L<sup>2</sup> T<sup>−2</sup>], and <i>v</i><sub>rms</sub> = √[(<i>v</i><sup>2</sup>)<sub>av</sub>] in m/s",
            "ρ = <i>Nm</i>/<i>V</i> = density in kg/m<sup>3</sup>, dimensions [M L<sup>−3</sup>], which bundles <i>N</i> and <i>m</i> together and sidesteps the commonest slip"
          ],
          "note": "Check the dimensions of the density form: [M L−3][L2 T−2] = [M L−1 T−2], which is a pressure. The proportionalities worth memorising are P ∝ N/V, P ∝ m and P ∝ v²rms. Pressure is LINEAR in the molecular mass but QUADRATIC in the speed."
        },
        {
          "t": "p",
          "html": "Two reassurances, because examiners probe them. First, <b>the side length cancelled</b>. It appears in the force step and again in the area step and then divides out, so the final pressure never refers to the size of the box. Second, <b>the cube was only a scaffold</b>. Any wall can be tiled by tiny flat patches, and the same momentum-transfer argument applied patch by patch reproduces the same result everywhere, so the formula holds for a container of any shape. Notice also what the expression does <i>not</i> contain: nothing about the chemical identity of the gas beyond <i>m</i>, and no temperature at all. Temperature only enters in Topic 04, when (<i>v</i><sup>2</sup>)<sub>av</sub> is finally connected to <i>T</i>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PRESSURE-ENERGY BRIDGE",
          "tag": "translational kinetic energy only",
          "main": "<i>PV</i> = (2/3)<i>E</i>, so <i>E</i> = (3/2)<i>PV</i><br><i>P</i> = (2/3) × (translational kinetic energy per unit volume)",
          "legend": [
            "<i>E</i> = total <i>translational</i> kinetic energy of all the molecules, in joules, dimensions [M L<sup>2</sup> T<sup>−2</sup>]",
            "<i>P</i> = pressure in Pa and <i>V</i> = volume in m<sup>3</sup>, so <i>PV</i> is itself an energy, which is what makes the equation dimensionally legal",
            "the derivation is one line: <i>PV</i> = (1/3)<i>Nm</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (2/3)<i>N</i>[(1/2)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub>] = (2/3)<i>E</i>, by deliberately introducing the factor that exposes a kinetic energy",
            "<i>E</i>/<i>V</i> is an energy density, dimensions [M L<sup>−1</sup> T<sup>−2</sup>], the same as a pressure, which is the deeper reason a pressure and an energy density can be equated at all"
          ],
          "note": "This single line is the bridge that Topic 04 walks across to reach temperature. It also means that if a question hands you P and V, you already know the total translational kinetic energy without needing the temperature, the molar mass or the number of molecules."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.6 · WHERE THE ONE THIRD COMES FROM",
          "chips": [
            "everything along x",
            "isotropic, the real case"
          ],
          "captions": [
            "A hypothetical gas in which every molecule moves only along x, half one way and half the other, all at the same speed v. Here there is no isotropy to invoke, so the mean square x-velocity is the full v squared and the x-walls feel P = (N/V)mv squared. The four walls parallel to x are never struck at all and feel exactly nothing.",
            "The real thing. Each molecule's kinetic energy is shared equally among three directions, so any one pair of walls receives only a third of the if-everything-pointed-here pressure. The directed gas above pushes three times as hard on the x-walls as this one does. Strip away isotropy and the factor of one third simply disappears, which is why the pressure formula is inseparable from that postulate."
          ],
          "frames": [
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.2,
                      1.0
                    ],
                    [
                      9.8,
                      1.0
                    ],
                    [
                      9.8,
                      7.0
                    ],
                    [
                      1.2,
                      7.0
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "arrows": [
                {
                  "from": [
                    4.2,
                    5.9
                  ],
                  "to": [
                    7.0,
                    5.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    7.0,
                    4.9
                  ],
                  "to": [
                    4.2,
                    4.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    4.2,
                    3.9
                  ],
                  "to": [
                    7.0,
                    3.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    7.0,
                    2.9
                  ],
                  "to": [
                    4.2,
                    2.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    4.2,
                    1.9
                  ],
                  "to": [
                    7.0,
                    1.9
                  ],
                  "tone": "amber",
                  "head": "end"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 6.6,
                  "text": "top wall never struck"
                },
                {
                  "x": 5.5,
                  "y": 1.25,
                  "text": "and neither is this one"
                }
              ]
            },
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.2,
                      1.0
                    ],
                    [
                      9.8,
                      1.0
                    ],
                    [
                      9.8,
                      7.0
                    ],
                    [
                      1.2,
                      7.0
                    ]
                  ],
                  "close": true,
                  "fill": "none",
                  "tone": "ink"
                }
              ],
              "arrows": [
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    8.6,
                    4.0
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    2.4,
                    4.0
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    5.5,
                    6.4
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    5.5,
                    1.6
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    7.7,
                    6.1
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    3.3,
                    1.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    7.7,
                    1.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    3.3,
                    6.1
                  ],
                  "tone": "amber",
                  "head": "end"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 7.35,
                  "text": "no direction is special"
                }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Mean square speed, root mean square speed, and the average velocity that is zero",
          "html": "Three quantities that look alike and are not. The <b>mean square speed</b> (<i>v</i><sup>2</sup>)<sub>av</sub> is the average of the squares, (<i>v</i><sup>2</sup><sub>1</sub> + … + <i>v</i><sup>2</sup><sub>N</sub>)/<i>N</i>, measured in m<sup>2</sup>/s<sup>2</sup>. The <b>root mean square speed</b> <i>v</i><sub>rms</sub> = √[(<i>v</i><sup>2</sup>)<sub>av</sub>] is its square root, measured in m/s, and it is the speed the pressure formula actually contains. The <b>average velocity</b> is something else entirely: velocity is a vector, molecules go equally in every direction, and so the average velocity of the gas is exactly <b>zero</b> in a container at rest. Nothing in this chapter ever uses it. Every formula here is about speed, a scalar, whose average is emphatically not zero. A question that says average velocity is usually testing whether you will reach for <i>v</i><sub>av</sub> by reflex."
        },
        {
          "t": "proc",
          "title": "Deciding whether the pressure formula still applies",
          "steps": [
            "<b>Is <i>N</i> large?</b> Pressure is a statistical average. A single molecule rattling in a box delivers sharp intermittent impulses, not a steady force, and you cannot sensibly assign it a pressure or a temperature at all.",
            "<b>Are the only forces the wall bounces?</b> Add gravity, an electric field on charged molecules, or any long-range interaction and the derivation's third postulate is broken, so the result fails.",
            "<b>Is the motion isotropic?</b> If a beam, a field or a preferred wall biases the directions, then (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> is no longer one third of (<i>v</i><sup>2</sup>)<sub>av</sub>, and the factor of one third must be recomputed rather than quoted.",
            "<b>Is the gas dilute?</b> At high density the molecules' own volume and their mutual attraction stop being negligible, and you are dealing with a real gas.",
            "<b>Then pick the face that matches the data.</b> Given ρ, use <i>P</i> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub>. Given <i>N</i> and <i>m</i>, use <i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub>. Asked for a total kinetic energy, use <i>E</i> = (3/2)<i>PV</i> and nothing else."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Oxygen is held at a pressure of 1.0 × 10<sup>5</sup> Pa and has a density of 1.30 kg/m<sup>3</sup>. Calculate the rms speed of its molecules.",
          "steps": [
            "The data is a pressure and a density, so reach for the density form: <i>P</i> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub>.",
            "Rearrange: <i>v</i><sub>rms</sub> = √(3<i>P</i>/ρ).",
            "Substitute: <i>v</i><sub>rms</sub> = √(3 × 1.0 × 10<sup>5</sup>/1.30) = √(2.31 × 10<sup>5</sup>)."
          ],
          "ans": "<i>v</i><sub>rms</sub> ≈ 480 m/s, that is 4.8 × 10<sup>2</sup> m/s. A useful plausibility check: that is comfortably above the speed of sound in air, around 340 m/s, which is exactly what you expect, since sound travels on the molecular motion and cannot outrun it."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A fixed quantity of gas is heated and stirred until its rms speed is three times its original value, while its density is held unchanged. By what factor does the pressure change?",
          "steps": [
            "At fixed density, <i>P</i> = (1/3)ρ<i>v</i><sup>2</sup><sub>rms</sub> gives <i>P</i> ∝ <i>v</i><sup>2</sup><sub>rms</sub>.",
            "Tripling <i>v</i><sub>rms</sub> multiplies <i>v</i><sup>2</sup><sub>rms</sub> by 3<sup>2</sup> = 9."
          ],
          "ans": "The pressure becomes 9 times larger. The careless answer is 3 times, from reading pressure as proportional to speed. Pressure follows the <b>square</b> of the rms speed, because it comes from kinetic energy. Whenever a speed is scaled, square the factor before touching a pressure or an energy."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A rigid 2.0 L vessel holds an ideal gas at 1.5 × 10<sup>5</sup> Pa. Find the total translational kinetic energy of all the molecules. If the gas is monatomic with 4.0 × 10<sup>22</sup> molecules, find the average translational kinetic energy per molecule.",
          "steps": [
            "The pressure-energy bridge gives <i>E</i> = (3/2)<i>PV</i> directly, with no other information needed.",
            "Convert the volume: 2.0 L = 2.0 × 10<sup>−3</sup> m<sup>3</sup>.",
            "<i>E</i> = (3/2)(1.5 × 10<sup>5</sup>)(2.0 × 10<sup>−3</sup>) = (3/2)(300) = 450 J.",
            "Per molecule: 450/(4.0 × 10<sup>22</sup>) = 1.1 × 10<sup>−20</sup> J."
          ],
          "ans": "Total translational kinetic energy 450 J, and about 1.1 × 10<sup>−20</sup> J per molecule. Notice that neither the temperature nor the molar mass was ever needed: the macroscopic pair (<i>P</i>, <i>V</i>) already encodes the total kinetic energy. That is the whole power of <i>PV</i> = (2/3)<i>E</i>."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A thought experiment. <i>N</i> identical molecules of mass <i>m</i> in a cubical box of volume <i>V</i> are constrained to move only along <i>x</i>, half in each direction, all at the same speed <i>v</i>. Find the pressure on the two walls perpendicular to <i>x</i>, the pressure on the four walls parallel to <i>x</i>, and the ratio of the first to the pressure of a normal isotropic gas with the same <i>N</i>, <i>V</i>, <i>m</i> and <i>v</i>.",
          "steps": [
            "Repeat the derivation but stop before the isotropy step. Now the entire speed is in <i>x</i>, so (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = <i>v</i><sup>2</sup>, not (1/3)<i>v</i><sup>2</sup>.",
            "From the fifth line of the derivation: <i>P<sub>x</sub></i> = (<i>Nm</i>/<i>V</i>)(<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>.",
            "No molecule has any <i>y</i> or <i>z</i> velocity, so no molecule ever reaches the walls parallel to <i>x</i>: <i>P<sub>y</sub></i> = <i>P<sub>z</sub></i> = 0.",
            "The isotropic gas gives <i>P</i><sub>iso</sub> = (1/3)(<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>, so the ratio is <i>P<sub>x</sub></i>/<i>P</i><sub>iso</sub> = 3."
          ],
          "ans": "<i>P<sub>x</sub></i> = (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>, <i>P<sub>y</sub></i> = <i>P<sub>z</sub></i> = 0, and the ratio is 3. The directed gas pushes three times as hard on the <i>x</i>-walls and not at all on the others. This <i>is</i> the meaning of the one third: in a real gas each molecule's energy is shared among three directions, so one pair of walls gets a third of it."
        },
        {
          "t": "mcq",
          "q": "The pressure an ideal gas exerts on its container walls is fundamentally due to",
          "opts": [
            {
              "label": "the weight of the gas molecules",
              "nudge": "Gravity is explicitly neglected in kinetic theory, and a gas in a sealed box in orbit still exerts pressure. Weight has nothing to do with it."
            },
            {
              "label": "the mutual attraction between molecules",
              "nudge": "An ideal gas has no intermolecular attraction at all, by assumption, yet it still has a pressure. Attraction would in any case pull molecules away from the walls, not push them into it."
            },
            {
              "label": "the change in momentum of molecules colliding with the walls",
              "nudge": null
            },
            {
              "label": "electrostatic repulsion between molecules and the walls",
              "nudge": "The molecules of the model are neutral, so there is no electrostatic interaction anywhere in the derivation. Introducing charge is precisely what BREAKS the pressure formula."
            }
          ],
          "correct": 2,
          "solution": "Pressure is the time-averaged force per unit area from countless elastic collisions, each transferring 2<i>mv<sub>x</sub></i> of momentum to the wall. No collisions, no pressure. Every one of the wrong options names a force the model has deliberately excluded."
        },
        {
          "t": "mcq",
          "q": "For an ideal gas <i>PV</i> = (2/3)<i>E</i>, where <i>E</i> is the total translational kinetic energy. If the volume is halved while <i>E</i> is held constant, the pressure",
          "opts": [
            {
              "label": "halves",
              "nudge": "This reads the proportionality backwards. With E fixed, P = 2E/3V, so P goes UP when V goes down."
            },
            {
              "label": "doubles",
              "nudge": null
            },
            {
              "label": "stays the same",
              "nudge": "This assumes constant E means constant P. But pressure depends on the energy DENSITY E/V, not on E alone, and V has just changed."
            },
            {
              "label": "becomes four times",
              "nudge": "A factor of four would need a square somewhere. The relation P = 2E/3V is strictly linear in 1/V, with no squaring in sight."
            }
          ],
          "correct": 1,
          "solution": "With <i>E</i> fixed, <i>P</i> = 2<i>E</i>/3<i>V</i>, so <i>P</i> ∝ 1/<i>V</i>. Halving <i>V</i> doubles <i>P</i>. This is Boyle's law arriving from the molecular side: at constant energy, and therefore constant temperature, squeezing the gas raises the pressure in exact inverse proportion."
        },
        {
          "t": "mcq",
          "q": "A sealed, rigid, insulated box of ionised hydrogen has a strong positive charge fixed on one inner face. The usual kinetic expression <i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub>",
          "opts": [
            {
              "label": "remains exactly valid",
              "nudge": "Two postulates have just been broken at once, so nothing licenses the formula any more. A derivation is only as good as the assumptions it was built on."
            },
            {
              "label": "fails, because the ions now feel forces other than wall collisions, and the motion is no longer isotropic",
              "nudge": null
            },
            {
              "label": "fails, because collisions with the walls stop being elastic",
              "nudge": "Elasticity of the wall bounce is not what goes wrong here. The bounces can stay perfectly elastic; the problem is the new EXTERNAL force acting between bounces."
            },
            {
              "label": "remains valid, but only for the uncharged walls",
              "nudge": "The loss of isotropy spoils the formula globally, not on one face. Once the mean square velocity components are unequal, the factor of one third is wrong for every wall."
            }
          ],
          "correct": 1,
          "solution": "The derivation assumes the <b>only</b> forces are elastic wall collisions and that the motion is isotropic. A fixed charge exerts a long-range electrostatic force on the ions, violating the first, and biases their motion towards or away from that face, destroying the second, so (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>y</sub>)<sub>av</sub> = (<i>v</i><sup>2</sup><sub>z</sub>)<sub>av</sub> no longer holds. JEE Advanced probes the postulates far more often than the algebra."
        },
        {
          "t": "mcq",
          "q": "Two ideal gases have the same number density and the same rms speed, but gas X has molecules twice as massive as gas Y. The ratio <i>P</i><sub>X</sub> : <i>P</i><sub>Y</sub> is",
          "opts": [
            {
              "label": "1 : 1",
              "nudge": "This assumes pressure is independent of molecular mass. It is not: heavier molecules carry more momentum into the wall at the same speed, so they push harder."
            },
            {
              "label": "2 : 1",
              "nudge": null
            },
            {
              "label": "1 : 2",
              "nudge": "This inverts the dependence. Pressure rises with molecular mass at fixed speed and number density, it does not fall."
            },
            {
              "label": "4 : 1",
              "nudge": "This squares the mass ratio. Pressure is LINEAR in m and only quadratic in the speed, so the square belongs to v, not to m."
            }
          ],
          "correct": 1,
          "solution": "From <i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub>, with <i>N</i>/<i>V</i> and (<i>v</i><sup>2</sup>)<sub>av</sub> identical, <i>P</i> ∝ <i>m</i>. Doubling the molecular mass doubles the pressure. Keep the two exponents straight: linear in <i>m</i>, quadratic in <i>v</i><sub>rms</sub>."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Nitrogen has a density of 1.25 kg/m<sup>3</sup> at a pressure of 1.0 × 10<sup>5</sup> Pa. Find the rms speed of its molecules.",
              "a": "<i>v</i><sub>rms</sub> = √(3<i>P</i>/ρ) = √(3 × 1.0 × 10<sup>5</sup>/1.25) = √(2.4 × 10<sup>5</sup>) ≈ 490 m/s."
            },
            {
              "q": "[NEET] At constant density the rms speed of a gas is reduced to half its initial value. The pressure becomes what fraction of its initial value?",
              "a": "At fixed density <i>P</i> ∝ <i>v</i><sup>2</sup><sub>rms</sub>, so halving the speed gives (1/2)<sup>2</sup> = one quarter of the original pressure."
            },
            {
              "q": "[JEE Main] A 5.0 L container holds a gas at 2.0 × 10<sup>5</sup> Pa. What is the total translational kinetic energy of the gas?",
              "a": "<i>E</i> = (3/2)<i>PV</i> = (3/2)(2.0 × 10<sup>5</sup>)(5.0 × 10<sup>−3</sup>) = 1.5 × 10<sup>3</sup> J. Nothing else about the gas is needed."
            },
            {
              "q": "[JEE Main] Equal masses of two gases A and B sit in identical containers at the same pressure. A's molecules are twice as massive as B's. Find (<i>v</i><sup>2</sup><sub>A</sub>)<sub>av</sub> : (<i>v</i><sup>2</sup><sub>B</sub>)<sub>av</sub>.",
              "a": "Write the pressure with the total gas mass: <i>PV</i> = (1/3)<i>M</i><sub>gas</sub>(<i>v</i><sup>2</sup>)<sub>av</sub>. Equal masses means equal <i>M</i><sub>gas</sub>, and equal <i>P</i> and <i>V</i> means equal <i>PV</i>, so the two mean square speeds must be equal: the ratio is 1 : 1. The molecular mass never enters, because the sample mass was fixed instead of the molecule count."
            },
            {
              "q": "[JEE Advanced] A cubical box holds <i>N</i> molecules with rms speed <i>v</i><sub>rms</sub> at pressure <i>P</i><sub>0</sub>. Without changing the volume, three quarters of the molecules are removed and the rms speed of those remaining is simultaneously doubled. Find the new pressure.",
              "a": "<i>P</i> ∝ (<i>N</i>/<i>V</i>)(<i>v</i><sup>2</sup>)<sub>av</sub>. The number falls to one quarter and <i>v</i><sup>2</sup><sub>rms</sub> rises by a factor of four, so the pressure is <i>P</i><sub>0</sub> × (1/4) × 4 = <i>P</i><sub>0</sub>. Unchanged. The two effects cancel exactly."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing <i>m</i>, one molecule, with the sample mass.</b> In <i>P</i> = (1/3)(<i>N</i>/<i>V</i>)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> the <i>m</i> is the mass of a <b>single</b> molecule and <i>N</i> is the count. Mixing them up is an error of a factor of <i>N</i>, which is around 10<sup>23</sup>. The density form sidesteps it entirely, because ρ already bundles <i>Nm</i>/<i>V</i>.",
            "<b>Forgetting the one third, or not knowing where it comes from.</b> It is purely the isotropy factor, (<i>v</i><sup>2</sup><sub>x</sub>)<sub>av</sub> = (1/3)(<i>v</i><sup>2</sup>)<sub>av</sub>. Examiners test it by removing isotropy: if a problem says the molecules move along one axis, <b>drop the one third</b>.",
            "<b>Treating pressure as linear in speed.</b> Pressure and kinetic energy both scale as <i>v</i><sup>2</sup><sub>rms</sub>, never as <i>v</i><sub>rms</sub>. Square the speed factor before touching either.",
            "<b>Transferring <i>mv<sub>x</sub></i> instead of 2<i>mv<sub>x</sub></i> at the wall.</b> An elastic bounce <i>reverses</i> the perpendicular component, so the momentum change is from +<i>mv<sub>x</sub></i> to −<i>mv<sub>x</sub></i>. Halving this is the single most common derivation slip in board scripts.",
            "<b>Assigning a pressure or a temperature to one molecule.</b> Both are statistical averages over a very large <i>N</i>. A single molecule delivers sharp intermittent impulses, not a steady force, and the postulate that licenses the whole theory has failed."
          ]
        },
        {
          "t": "protip",
          "html": "if a question gives you P and V and asks for a total kinetic energy, you are one line from the answer: E = (3/2)PV, no temperature, no molar mass, no molecule count. reach for it the instant the words total kinetic energy appear and a three-step problem collapses into one. and for the derivation itself, memorise the four milestones rather than the algebra: 2mv<sub>x</sub> per hit, 2l/v<sub>x</sub> between hits, sum and divide by area, then isotropy. every line in between follows from those."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "P = (1/3)(N/V)m(v²)av = (1/3)ρ v²rms",
              "note": "m is ONE molecule; the density form hides that trap"
            },
            {
              "f": "PV = (2/3)E, so E = (3/2)PV",
              "note": "E is the total TRANSLATIONAL kinetic energy, and P and V alone fix it"
            },
            {
              "f": "per hit 2mv<sub>x</sub>, between hits 2l/v<sub>x</sub>",
              "note": "the two lines the whole board derivation is built from"
            },
            {
              "f": "the 1/3 is isotropy: (v²x)av = (v²y)av = (v²z)av = (1/3)(v²)av",
              "note": "remove isotropy and the one third goes with it"
            },
            {
              "f": "P ∝ N/V, P ∝ m, P ∝ v²rms",
              "note": "linear in the mass, quadratic in the speed, and never the other way round"
            },
            {
              "f": "valid for: large N, point molecules, elastic bounces only, isotropic motion",
              "note": "charge, an external field or anisotropy and the formula fails"
            }
          ],
          "aids": [
            "\"pressure is one third density times speed squared\"",
            "\"PV is two thirds the kinetic energy\"",
            "\"the box cancels: no l in the answer\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Temperature, Molecular Speeds and the Maxwell Curve",
      "chip": "04 SPEEDS",
      "kalam": "temperature IS the average kinetic energy, nothing more",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 03 stopped one step short of a secret. It found <i>PV</i> = (2/3)<i>E</i>, linking pressure to the molecules' kinetic energy, but it never said what <i>temperature</i> is at the molecular level. This topic closes that gap, and the answer is among the most beautiful results in physics: <b>temperature is a measure of the average kinetic energy of the molecules.</b> A hot gas is not carrying heat the way a bucket carries water. Its molecules are literally moving faster. Cool the gas and they slow down. That is all temperature is."
        },
        {
          "t": "think",
          "html": "imagine the molecules as the crowd leaving a stadium after a big match. they do not all walk at one pace: a few sprint, most amble, a handful dawdle. there is a whole spread of speeds. so if you wanted one number for how fast is this crowd moving, which would you pick? the fastest? the most common pace? physicists found that three different averages are each useful, and all three turn up in exams."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE KINETIC INTERPRETATION OF TEMPERATURE",
          "tag": "translational energy only, T in kelvin",
          "main": "(1/2)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (3/2)<i>k<sub>B</sub>T</i><br><i>E</i> = (3/2)<i>Nk<sub>B</sub>T</i> = (3/2)<i>nRT</i>",
          "legend": [
            "<i>m</i> = mass of one molecule in kg, (<i>v</i><sup>2</sup>)<sub>av</sub> = mean square speed in m<sup>2</sup>/s<sup>2</sup>",
            "<i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>], and <i>T</i> is the absolute temperature in K",
            "<i>E</i> = total translational kinetic energy in J, with <i>N</i> the molecule count and <i>n</i> = <i>N</i>/<i>N<sub>A</sub></i> the number of moles",
            "both sides reduce to [M L<sup>2</sup> T<sup>−2</sup>]: [M][L<sup>2</sup> T<sup>−2</sup>] on the left, [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>][Θ] on the right"
          ],
          "note": "Read it twice. The right side names no mass and no gas, so ALL gases at the same temperature have the same average translational kinetic energy per molecule. Heavier molecules simply compensate by moving more slowly. At 300 K, kBT is 4.1 × 10−21 J, so the average translational energy per molecule is about 6.2 × 10−21 J, whatever the gas."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TEMPERATURE, AND THE RMS SPEED",
          "steps": [
            {
              "eq": "from Topic 03, <i>PV</i> = (1/3)<i>Nm</i>(<i>v</i><sup>2</sup>)<sub>av</sub>; from Topic 02, <i>PV</i> = <i>Nk<sub>B</sub>T</i>",
              "why": "Two independent descriptions of the same gas, one built from Newton's laws applied to molecules and the other measured on a pressure gauge and a thermometer. The entire kinetic interpretation of temperature comes from insisting that they agree."
            },
            {
              "eq": "equate them: (1/3)<i>Nm</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = <i>Nk<sub>B</sub>T</i>",
              "why": "Nothing has been assumed here beyond the two results already derived. This is simply the statement that the microscopic and macroscopic accounts of <i>PV</i> describe one physical situation."
            },
            {
              "eq": "cancel <i>N</i> and multiply by 3/2: (1/2)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (3/2)<i>k<sub>B</sub>T</i>",
              "why": "The molecule count cancels, which is what makes the result <i>per molecule</i> and independent of how much gas there is. The left side is now recognisably the average translational kinetic energy of one molecule. This is the deepest single line in the chapter, and the reason the constant <i>k<sub>B</sub></i> deserves a name of its own: it is the conversion factor between a temperature and an energy."
            },
            {
              "eq": "solve for the speed: (<i>v</i><sup>2</sup>)<sub>av</sub> = 3<i>k<sub>B</sub>T</i>/<i>m</i>, so <i>v</i><sub>rms</sub> = √(3<i>k<sub>B</sub>T</i>/<i>m</i>)",
              "why": "Straight rearrangement. The rms speed is the square root of the mean square speed, which is exactly the quantity the pressure formula contained, so this is the one speed that connects to pressure and energy without any conversion factor."
            },
            {
              "eq": "multiply top and bottom inside the root by <i>N<sub>A</sub></i>: <i>v</i><sub>rms</sub> = √(3<i>N<sub>A</sub>k<sub>B</sub>T</i>/<i>N<sub>A</sub>m</i>) = <b>√(3<i>RT</i>/<i>M</i>)</b>",
              "why": "Because <i>N<sub>A</sub>k<sub>B</sub></i> = <i>R</i> and <i>N<sub>A</sub>m</i> = <i>M</i>, the molar mass. This is the molar form, and it is the one you will actually substitute into, because molar masses are tabulated and single-molecule masses are not. Using <i>P</i> = ρ<i>RT</i>/<i>M</i> from Topic 02 gives a third equivalent face at once, <i>v</i><sub>rms</sub> = √(3<i>P</i>/ρ)."
            }
          ]
        },
        {
          "t": "p",
          "html": "Why do we need <i>three</i> speeds? Because the molecules do not all move at one speed. If they did, one number would do. Instead they share the total energy out through countless collisions into a characteristic, stable <b>distribution</b> of speeds, the <b>Maxwell-Boltzmann distribution</b>. Picture a graph with the fraction of molecules up the vertical axis and speed along the horizontal. The curve starts at zero, since no molecule is perfectly still, rises to a peak, then falls away with a long tail stretching to very high speeds. It is lopsided: a fairly steep rise, then a slow decline. That asymmetry is exactly why the three speed-measures differ, and why they always line up in the same order. The <b>most probable speed</b> is the pace the largest number of molecules actually have, the peak of the crowd. The <b>average speed</b> is the ordinary arithmetic mean. The <b>root mean square speed</b> is the one that connects to kinetic energy, and because squaring over-weights the fast tail it always comes out the largest of the three."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE MOLECULAR SPEEDS",
          "tag": "M in kg/mol, never g/mol",
          "main": "<i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) = √(3<i>k<sub>B</sub>T</i>/<i>m</i>) = √(3<i>P</i>/ρ)<br><i>v</i><sub>av</sub> = √(8<i>RT</i>/π<i>M</i>)<br><i>v</i><sub>mp</sub> = √(2<i>RT</i>/<i>M</i>)",
          "legend": [
            "<i>M</i> = molar mass in <b>kg/mol</b>, and <i>m</i> = mass of one molecule in kg, with <i>M</i> = <i>N<sub>A</sub>m</i>",
            "<i>R</i> = 8.314 J/mol K, <i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K, and <i>T</i> is in kelvin",
            "ρ = density in kg/m<sup>3</sup> and <i>P</i> = pressure in Pa, for the third face of <i>v</i><sub>rms</sub>",
            "all three are speeds in m/s, dimension [L T<sup>−1</sup>]: inside the root, [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>][Θ]/[M mol<sup>−1</sup>] = [L<sup>2</sup> T<sup>−2</sup>], and π is a pure number"
          ],
          "note": "Order and ratio, true at every temperature and for every gas: vrms > vav > vmp, in the ratio √3 : √(8/π) : √2 = 1.732 : 1.596 : 1.414, that is 1.22 : 1.13 : 1. The memory hook is RAM, for rms, average, most probable, largest to smallest. Every one of the three scales as √T and as 1/√M."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.7 · READING THE MAXWELL CURVE",
          "chips": [
            "the three speeds",
            "a fraction is an area"
          ],
          "captions": [
            "Nitrogen at 300 K. The peak sits at the most probable speed, 422 m/s; the ordinary mean is 476 m/s; and the root mean square is 517 m/s. They come in that order for one geometric reason: the curve has a long high-speed tail and a short low-speed side, so both averages are dragged to the right of the peak, and the rms furthest of all because squaring over-weights the fast molecules. The ratio 1 : 1.13 : 1.22 never changes, whatever the gas and whatever the temperature.",
            "The height of the curve is NOT a probability. Only an area is. The fraction of molecules with speeds in any interval is the area under the curve across that interval, so the shaded region here, everything faster than vrms, is 39 per cent of the gas. The total area, from zero to infinity, is exactly 1, because every molecule has some speed. That is why heating a gas can redistribute molecules into the tail but can never change the area."
          ],
          "frames": [
            {
              "x": [
                0,
                1400
              ],
              "y": [
                0,
                2.4
              ],
              "aspect": 0.72,
              "axisX": "speed v (m/s)",
              "axisY": "fraction per unit speed",
              "ticksX": {
                "at": [
                  0,
                  400,
                  800,
                  1200
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      60,
                      0.106
                    ],
                    [
                      120,
                      0.399
                    ],
                    [
                      180,
                      0.811
                    ],
                    [
                      240,
                      1.251
                    ],
                    [
                      300,
                      1.63
                    ],
                    [
                      350,
                      1.848
                    ],
                    [
                      390,
                      1.944
                    ],
                    [
                      422,
                      1.967
                    ],
                    [
                      460,
                      1.936
                    ],
                    [
                      500,
                      1.844
                    ],
                    [
                      545,
                      1.683
                    ],
                    [
                      600,
                      1.432
                    ],
                    [
                      660,
                      1.134
                    ],
                    [
                      730,
                      0.803
                    ],
                    [
                      810,
                      0.495
                    ],
                    [
                      900,
                      0.258
                    ],
                    [
                      1000,
                      0.11
                    ],
                    [
                      1120,
                      0.033
                    ],
                    [
                      1250,
                      0.007
                    ],
                    [
                      1400,
                      0.001
                    ]
                  ],
                  "smooth": true
                }
              ],
              "segments": [
                {
                  "from": [
                    422,
                    0
                  ],
                  "to": [
                    422,
                    1.967
                  ],
                  "dash": true
                },
                {
                  "from": [
                    476,
                    0
                  ],
                  "to": [
                    476,
                    1.899
                  ],
                  "dash": true
                },
                {
                  "from": [
                    517,
                    0
                  ],
                  "to": [
                    517,
                    1.789
                  ],
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 422,
                  "y": 2.28,
                  "text": "v mp"
                },
                {
                  "x": 476,
                  "y": 2.09,
                  "text": "v av"
                },
                {
                  "x": 517,
                  "y": 1.9,
                  "text": "v rms"
                }
              ]
            },
            {
              "x": [
                0,
                1400
              ],
              "y": [
                0,
                2.4
              ],
              "aspect": 0.72,
              "axisX": "speed v (m/s)",
              "axisY": "fraction per unit speed",
              "ticksX": {
                "at": [
                  0,
                  400,
                  800,
                  1200
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      60,
                      0.106
                    ],
                    [
                      120,
                      0.399
                    ],
                    [
                      180,
                      0.811
                    ],
                    [
                      240,
                      1.251
                    ],
                    [
                      300,
                      1.63
                    ],
                    [
                      350,
                      1.848
                    ],
                    [
                      390,
                      1.944
                    ],
                    [
                      422,
                      1.967
                    ],
                    [
                      460,
                      1.936
                    ],
                    [
                      500,
                      1.844
                    ],
                    [
                      545,
                      1.683
                    ],
                    [
                      600,
                      1.432
                    ],
                    [
                      660,
                      1.134
                    ],
                    [
                      730,
                      0.803
                    ],
                    [
                      810,
                      0.495
                    ],
                    [
                      900,
                      0.258
                    ],
                    [
                      1000,
                      0.11
                    ],
                    [
                      1120,
                      0.033
                    ],
                    [
                      1250,
                      0.007
                    ],
                    [
                      1400,
                      0.001
                    ]
                  ],
                  "smooth": true
                }
              ],
              "polys": [
                {
                  "pts": [
                    [
                      517,
                      1.789
                    ],
                    [
                      545,
                      1.683
                    ],
                    [
                      580,
                      1.528
                    ],
                    [
                      620,
                      1.334
                    ],
                    [
                      660,
                      1.134
                    ],
                    [
                      710,
                      0.893
                    ],
                    [
                      760,
                      0.677
                    ],
                    [
                      820,
                      0.463
                    ],
                    [
                      890,
                      0.279
                    ],
                    [
                      970,
                      0.144
                    ],
                    [
                      1060,
                      0.062
                    ],
                    [
                      1160,
                      0.021
                    ],
                    [
                      1270,
                      0.006
                    ],
                    [
                      1400,
                      0.001
                    ],
                    [
                      1400,
                      0
                    ],
                    [
                      517,
                      0
                    ]
                  ],
                  "close": true,
                  "smooth": false,
                  "fill": "wash",
                  "tone": "amber"
                }
              ],
              "segments": [
                {
                  "from": [
                    517,
                    0
                  ],
                  "to": [
                    517,
                    1.789
                  ],
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 517,
                  "y": 2.13,
                  "text": "v rms"
                },
                {
                  "x": 780,
                  "y": 0.36,
                  "text": "39% of the gas"
                }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Anchor numbers, worth memorising as sanity checks",
          "rows": [
            {
              "k": "Nitrogen at 300 K",
              "v": "<i>v</i><sub>rms</sub> ≈ 517 m/s, <i>v</i><sub>av</sub> ≈ 476 m/s, <i>v</i><sub>mp</sub> ≈ 422 m/s"
            },
            {
              "k": "Oxygen at 300 K",
              "v": "<i>v</i><sub>rms</sub> ≈ 484 m/s, <i>v</i><sub>av</sub> ≈ 446 m/s, <i>v</i><sub>mp</sub> ≈ 395 m/s"
            },
            {
              "k": "Hydrogen at 300 K",
              "v": "<i>v</i><sub>rms</sub> ≈ 1934 m/s, four times oxygen's, because √(32/2) = 4"
            },
            {
              "k": "The scale to expect",
              "v": "hundreds to a couple of thousand metres per second, comparable to and a little above the speed of sound in that gas"
            },
            {
              "k": "<i>k<sub>B</sub>T</i> at 300 K",
              "v": "1.38 × 10<sup>−23</sup> × 300 = 4.1 × 10<sup>−21</sup> J, the natural energy unit of a room-temperature molecule"
            },
            {
              "k": "The fixed ratio",
              "v": "<i>v</i><sub>rms</sub> : <i>v</i><sub>av</sub> : <i>v</i><sub>mp</sub> = 1.22 : 1.13 : 1, so <i>v</i><sub>av</sub> = 0.921<i>v</i><sub>rms</sub> and <i>v</i><sub>mp</sub> = 0.816<i>v</i><sub>rms</sub>"
            },
            {
              "k": "Fractions beyond a speed",
              "v": "about 57 per cent of molecules are faster than <i>v</i><sub>mp</sub> and about 39 per cent faster than <i>v</i><sub>rms</sub>, both of which say the curve leans right"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.8 · WHAT MOVES THE CURVE",
          "chips": [
            "hotter",
            "heavier"
          ],
          "captions": [
            "Nitrogen at 300 K and at 1200 K. Four times the absolute temperature doubles every speed, so the peak slides right by a factor of two. It also flattens and spreads, because the same population is now shared over a wider range of speeds. The area under both curves is identical, which it must be, so a taller peak and a broader curve are two ways of saying the same thing.",
            "Nitrogen and helium, both at 300 K. Equal temperature means equal average kinetic energy per molecule, so the seven-times-lighter helium must move √7 times faster: its curve shifts right and flattens exactly as a hotter gas would. Equal energy, unequal speeds. This one fact answers a large share of the comparison questions on any paper."
          ],
          "frames": [
            {
              "x": [
                0,
                2400
              ],
              "y": [
                0,
                2.3
              ],
              "aspect": 0.72,
              "axisX": "speed v (m/s)",
              "axisY": "fraction per unit speed",
              "ticksX": {
                "at": [
                  0,
                  800,
                  1600,
                  2400
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      100,
                      0.284
                    ],
                    [
                      200,
                      0.959
                    ],
                    [
                      300,
                      1.63
                    ],
                    [
                      380,
                      1.927
                    ],
                    [
                      422,
                      1.967
                    ],
                    [
                      470,
                      1.919
                    ],
                    [
                      520,
                      1.779
                    ],
                    [
                      580,
                      1.528
                    ],
                    [
                      650,
                      1.184
                    ],
                    [
                      730,
                      0.803
                    ],
                    [
                      820,
                      0.463
                    ],
                    [
                      920,
                      0.22
                    ],
                    [
                      1030,
                      0.083
                    ],
                    [
                      1160,
                      0.021
                    ],
                    [
                      1300,
                      0.004
                    ],
                    [
                      1450,
                      0.0
                    ],
                    [
                      1650,
                      0.0
                    ],
                    [
                      1900,
                      0.0
                    ],
                    [
                      2150,
                      0.0
                    ],
                    [
                      2400,
                      0.0
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      150,
                      0.082
                    ],
                    [
                      300,
                      0.298
                    ],
                    [
                      450,
                      0.572
                    ],
                    [
                      600,
                      0.815
                    ],
                    [
                      720,
                      0.94
                    ],
                    [
                      844,
                      0.983
                    ],
                    [
                      940,
                      0.959
                    ],
                    [
                      1040,
                      0.889
                    ],
                    [
                      1150,
                      0.776
                    ],
                    [
                      1270,
                      0.629
                    ],
                    [
                      1400,
                      0.47
                    ],
                    [
                      1550,
                      0.31
                    ],
                    [
                      1700,
                      0.188
                    ],
                    [
                      1880,
                      0.093
                    ],
                    [
                      2080,
                      0.037
                    ],
                    [
                      2400,
                      0.007
                    ]
                  ],
                  "smooth": true,
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 330,
                  "y": 2.18,
                  "text": "300 K"
                },
                {
                  "x": 1000,
                  "y": 1.16,
                  "text": "1200 K"
                },
                {
                  "x": 1750,
                  "y": 1.75,
                  "text": "equal areas, always"
                }
              ]
            },
            {
              "x": [
                0,
                2400
              ],
              "y": [
                0,
                2.3
              ],
              "aspect": 0.72,
              "axisX": "speed v (m/s)",
              "axisY": "fraction per unit speed",
              "ticksX": {
                "at": [
                  0,
                  800,
                  1600,
                  2400
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  1,
                  2
                ]
              },
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      100,
                      0.284
                    ],
                    [
                      200,
                      0.959
                    ],
                    [
                      300,
                      1.63
                    ],
                    [
                      380,
                      1.927
                    ],
                    [
                      422,
                      1.967
                    ],
                    [
                      470,
                      1.919
                    ],
                    [
                      520,
                      1.779
                    ],
                    [
                      580,
                      1.528
                    ],
                    [
                      650,
                      1.184
                    ],
                    [
                      730,
                      0.803
                    ],
                    [
                      820,
                      0.463
                    ],
                    [
                      920,
                      0.22
                    ],
                    [
                      1030,
                      0.083
                    ],
                    [
                      1160,
                      0.021
                    ],
                    [
                      1300,
                      0.004
                    ],
                    [
                      1450,
                      0.0
                    ],
                    [
                      1650,
                      0.0
                    ],
                    [
                      1900,
                      0.0
                    ],
                    [
                      2150,
                      0.0
                    ],
                    [
                      2400,
                      0.0
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      0,
                      0.0
                    ],
                    [
                      200,
                      0.063
                    ],
                    [
                      400,
                      0.228
                    ],
                    [
                      600,
                      0.437
                    ],
                    [
                      800,
                      0.621
                    ],
                    [
                      950,
                      0.709
                    ],
                    [
                      1117,
                      0.743
                    ],
                    [
                      1250,
                      0.723
                    ],
                    [
                      1400,
                      0.66
                    ],
                    [
                      1550,
                      0.567
                    ],
                    [
                      1700,
                      0.461
                    ],
                    [
                      1880,
                      0.337
                    ],
                    [
                      2080,
                      0.218
                    ],
                    [
                      2400,
                      0.092
                    ]
                  ],
                  "smooth": true,
                  "dash": true
                }
              ],
              "labels": [
                {
                  "x": 330,
                  "y": 2.18,
                  "text": "N2, M = 28"
                },
                {
                  "x": 1290,
                  "y": 0.92,
                  "text": "He, M = 4"
                },
                {
                  "x": 1700,
                  "y": 1.75,
                  "text": "same T, same energy"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · LOCATING THE PEAK, v mp",
          "steps": [
            {
              "eq": "the distribution is <i>P</i>(<i>v</i>) = <i>C v</i><sup>2</sup>e<sup>−<i>mv</i>2/2<i>k<sub>B</sub>T</i></sup>, where <i>C</i> collects every constant",
              "why": "In full, <i>P</i>(<i>v</i>) = 4π(<i>M</i>/2π<i>RT</i>)<sup>3/2</sup><i>v</i><sup>2</sup>e<sup>−<i>Mv</i>2/2<i>RT</i></sup>, and <i>P</i>(<i>v</i>)d<i>v</i> is the fraction of molecules with speeds between <i>v</i> and <i>v</i> + d<i>v</i>. None of the constants can move the position of the peak, so bundling them into <i>C</i> costs nothing. The shape is a rising <i>v</i><sup>2</sup> fighting a falling exponential, which is precisely why there is a peak at all."
            },
            {
              "eq": "the peak is where d<i>P</i>/d<i>v</i> = 0. By the product rule, d<i>P</i>/d<i>v</i> = <i>C</i>[2<i>v</i> + <i>v</i><sup>2</sup>(−<i>mv</i>/<i>k<sub>B</sub>T</i>)]e<sup>−<i>mv</i>2/2<i>k<sub>B</sub>T</i></sup>",
              "why": "Differentiate the product <i>v</i><sup>2</sup> times the exponential, using the chain rule on the exponent, whose derivative is −<i>mv</i>/<i>k<sub>B</sub>T</i>. This is standard Class 11 calculus and nothing else is needed."
            },
            {
              "eq": "factor out the common non-zero terms: d<i>P</i>/d<i>v</i> = <i>Cv</i> e<sup>−<i>mv</i>2/2<i>k<sub>B</sub>T</i></sup>[2 − <i>mv</i><sup>2</sup>/<i>k<sub>B</sub>T</i>] = 0",
              "why": "Pulling out <i>Cv</i> and the exponential leaves a simple bracket. An exponential never vanishes, and <i>v</i> = 0 is the minimum at the left-hand end of the curve, not the peak, so the only interesting root is the bracket."
            },
            {
              "eq": "set the bracket to zero: 2 = <i>mv</i><sup>2</sup>/<i>k<sub>B</sub>T</i>, giving <b><i>v</i><sub>mp</sub> = √(2<i>k<sub>B</sub>T</i>/<i>m</i>) = √(2<i>RT</i>/<i>M</i>)</b>",
              "why": "And there is the smallest coefficient of the three, the √2. It marks the position of the peak and nothing more. The averaging that defines <i>v</i><sub>av</sub> and the energy-weighting that defines <i>v</i><sub>rms</sub> both pull their values up into the high-speed tail, which is exactly why √(8/π) = 1.596 and √3 = 1.732 both exceed it."
            }
          ]
        },
        {
          "t": "p",
          "html": "That long tail is not bookkeeping; it has consequences you can see from a window. Why does the Earth keep an atmosphere while the Moon has none? A body retains a gas only if the molecules move too slowly to escape its gravity. But the Maxwell curve guarantees that <i>some</i> molecules are always far faster than <i>v</i><sub>rms</sub>, and over geological time those stragglers leak away. Light gases have large speeds and lose the race quickly, which is why Earth's air is dominated by heavier nitrogen and oxygen and holds almost no free hydrogen, and why the low-gravity Moon, where even slow molecules exceed escape speed, holds essentially nothing. The same high-energy tail explains why a few molecules can evaporate from a cool liquid, and why chemical reactions speed up so sharply with temperature: only the molecules out in the fast tail carry enough energy to react at all."
        },
        {
          "t": "def",
          "term": "What this topic counts, and what it does not",
          "html": "The clean relation (1/2)<i>m</i>(<i>v</i><sup>2</sup>)<sub>av</sub> = (3/2)<i>k<sub>B</sub>T</i> counts <b>translational</b> kinetic energy only. Rotation and vibration, which matter enormously for the energy budget of diatomic and polyatomic gases, belong to Topic 05 and do <b>not</b> change the translational speeds derived here: a nitrogen molecule and a helium atom at the same temperature have exactly the same average translational energy, however differently they store the rest. For a <b>monatomic</b> gas this translational energy is the entire internal energy, since a point-like atom has nowhere else to put it, so <i>U</i> = (3/2)<i>nRT</i>, a result Thermodynamics leans on constantly. And note the recurring trap once more: the average <i>velocity</i> of the molecules is zero, because they go equally in all directions, while the average <i>speed</i> is decidedly not. Every formula on this page is about speed."
        },
        {
          "t": "proc",
          "title": "Comparing two gases, or two temperatures, without a calculator",
          "steps": [
            "<b>Never compute full speeds for a comparison question.</b> All three speeds scale identically, as √<i>T</i> and as 1/√<i>M</i>, so write the ratio directly: <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √(<i>T</i><sub>1</sub><i>M</i><sub>2</sub>/<i>T</i><sub>2</sub><i>M</i><sub>1</sub>).",
            "<b>Same gas, different temperatures:</b> the molar masses cancel and <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>). Doubling the speed needs four times the absolute temperature.",
            "<b>Same temperature, different gases:</b> the temperatures cancel and <i>v</i><sub>A</sub>/<i>v</i><sub>B</sub> = √(<i>M</i><sub>B</sub>/<i>M</i><sub>A</sub>). The lighter gas is always the faster one, which is a two-second sanity check on any answer.",
            "<b>Equal speeds across two gases</b> reduces to equal <i>T</i>/<i>M</i>. That single reading turns a two-unknown problem into one line.",
            "<b>Only when a single absolute value is wanted</b>, substitute, and then convert <i>M</i> to kg/mol and <i>T</i> to kelvin before anything else. Finish with a plausibility check: a room-temperature answer should land in the hundreds of metres per second."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Calculate the rms speed of nitrogen molecules, <i>M</i> = 28 g/mol, at 27 °C. Take <i>R</i> = 8.314 J/mol K.",
          "steps": [
            "Convert both: <i>M</i> = 28 × 10<sup>−3</sup> kg/mol and <i>T</i> = 27 + 273 = 300 K.",
            "<i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) = √(3 × 8.314 × 300/(28 × 10<sup>−3</sup>)).",
            "Numerator 7482.6, so <i>v</i><sub>rms</sub> = √(7482.6/0.028) = √(2.672 × 10<sup>5</sup>) = 517 m/s.",
            "The other two follow from the fixed ratio without repeating the arithmetic: <i>v</i><sub>av</sub> = 0.921 × 517 = 476 m/s and <i>v</i><sub>mp</sub> = 0.816 × 517 = 422 m/s."
          ],
          "ans": "<i>v</i><sub>rms</sub> ≈ 517 m/s, with <i>v</i><sub>av</sub> ≈ 476 m/s and <i>v</i><sub>mp</sub> ≈ 422 m/s. Note the conversion of <i>M</i> to kg/mol: leaving it in g/mol would inflate every answer by √1000, about 32 times, and 16 000 m/s should look absurd on sight."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "At the same temperature, find the ratio of the rms speed of hydrogen (<i>M</i> = 2) to that of oxygen (<i>M</i> = 32).",
          "steps": [
            "At fixed <i>T</i>, <i>v</i><sub>rms</sub> ∝ 1/√<i>M</i>, so the ratio is √(<i>M</i>(O<sub>2</sub>)/<i>M</i>(H<sub>2</sub>)).",
            "√(32/2) = √16 = 4."
          ],
          "ans": "Hydrogen molecules move 4 times as fast. Two slips lurk here. The first is taking the ratio of molar masses directly, 32/2 = 16, and forgetting the square root. The second is inverting it and concluding oxygen is faster: the <b>lighter</b> gas is always faster at a given temperature. A two-second check, light means fast, kills the wrong option instantly."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "At what temperature will the rms speed of helium atoms (<i>M</i> = 4) equal that of nitrogen molecules (<i>M</i> = 28) held at 350 K?",
          "steps": [
            "Set the two rms speeds equal: √(3<i>RT</i>(He)/<i>M</i>(He)) = √(3<i>RT</i>(N<sub>2</sub>)/<i>M</i>(N<sub>2</sub>)).",
            "Everything common cancels, leaving <i>T</i>(He)/<i>M</i>(He) = <i>T</i>(N<sub>2</sub>)/<i>M</i>(N<sub>2</sub>). Equal rms speeds means equal <i>T</i>/<i>M</i>.",
            "<i>T</i>(He) = 350 × 4/28 = 50 K."
          ],
          "ans": "Helium must be cooled to 50 K. That makes physical sense: helium is seven times lighter, so to be as slow as nitrogen it must carry seven times less kinetic energy, which means one seventh of the absolute temperature."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Five molecules have speeds 2, 4, 6, 8 and 10 in arbitrary units. Compute <i>v</i><sub>av</sub> and <i>v</i><sub>rms</sub> and verify the ordering. Then explain why, for a real gas in equilibrium, <i>v</i><sub>rms</sub> always exceeds <i>v</i><sub>av</sub>.",
          "steps": [
            "<i>v</i><sub>av</sub> = (2 + 4 + 6 + 8 + 10)/5 = 30/5 = 6.00 units.",
            "(<i>v</i><sup>2</sup>)<sub>av</sub> = (4 + 16 + 36 + 64 + 100)/5 = 220/5 = 44, so <i>v</i><sub>rms</sub> = √44 = 6.63 units.",
            "Indeed 6.63 exceeds 6.00.",
            "The reason is that squaring weights large speeds disproportionately: the molecule at 10 contributes 100 to the squared sum but only 10 to the plain sum. So the high-speed tail drags <i>v</i><sub>rms</sub> up above <i>v</i><sub>av</sub>."
          ],
          "ans": "<i>v</i><sub>av</sub> = 6.00 and <i>v</i><sub>rms</sub> = 6.63 units. Mathematically this is the inequality (<i>v</i><sup>2</sup>)<sub>av</sub> ≥ (<i>v</i><sub>av</sub>)<sup>2</sup>, with equality only if every molecule had exactly the same speed. A real gas in equilibrium always has a spread, so the inequality is strict and the ordering <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub> holds without exception."
        },
        {
          "t": "mcq",
          "q": "The average translational kinetic energy of the molecules of an ideal gas depends on",
          "opts": [
            {
              "label": "the pressure of the gas only",
              "nudge": "This confuses energy with pressure. Pressure does depend on the energy DENSITY, but the per-molecule energy does not depend on P at all: compress a gas at fixed temperature and each molecule's energy is unchanged."
            },
            {
              "label": "the nature, that is the molar mass, of the gas only",
              "nudge": "The molar mass fixes the SPEED, not the energy. Heavier molecules go slower by exactly the amount that keeps the energy the same."
            },
            {
              "label": "the absolute temperature of the gas only",
              "nudge": null
            },
            {
              "label": "both the temperature and the molar mass",
              "nudge": "Half right, and the half that is wrong is the surprising half. Write out (3/2)kBT and look for an m: there isn't one."
            }
          ],
          "correct": 2,
          "solution": "From the average translational energy per molecule = (3/2)<i>k<sub>B</sub>T</i>, it is a function of <i>T</i> alone. This independence from mass and from the identity of the gas is exactly the remarkable part of the result, and it is what makes a mixture of gases settle to one shared temperature with every species carrying the same average translational energy."
        },
        {
          "t": "mcq",
          "q": "The rms speed of oxygen molecules at temperature <i>T</i> is <i>v</i>. If the temperature is doubled <b>and</b> the molecules dissociate into oxygen atoms, the rms speed becomes",
          "opts": [
            {
              "label": "<i>v</i>",
              "nudge": "This assumes the two effects cancel. They do not: both changes push the speed UP, since raising T raises it and lowering the particle mass raises it too."
            },
            {
              "label": "√2 <i>v</i>",
              "nudge": "This accounts for the temperature change and forgets that dissociation halves the particle mass, which contributes another factor of √2."
            },
            {
              "label": "2<i>v</i>",
              "nudge": null
            },
            {
              "label": "4<i>v</i>",
              "nudge": "This multiplies the two factors of 2 outside the root instead of combining them inside it. Each factor of 2 becomes a √2 in the speed, not a 2."
            }
          ],
          "correct": 2,
          "solution": "<i>v</i><sub>rms</sub> ∝ √(<i>T</i>/<i>M</i>). Doubling <i>T</i> multiplies by √2, and dissociation takes <i>M</i> to <i>M</i>/2, multiplying by another √2. Together √2 × √2 = 2, so the new rms speed is 2<i>v</i>."
        },
        {
          "t": "mcq",
          "q": "For an ideal gas in thermal equilibrium, which ordering of the speeds is always correct?",
          "opts": [
            {
              "label": "<i>v</i><sub>mp</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>rms</sub>",
              "nudge": "This is the exact reversal, a common memory slip. The peak of the curve is the SMALLEST of the three, not the largest, because the long tail lies to its right."
            },
            {
              "label": "<i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>",
              "nudge": null
            },
            {
              "label": "<i>v</i><sub>av</sub> > <i>v</i><sub>rms</sub> > <i>v</i><sub>mp</sub>",
              "nudge": "This misremembers which average sits on top. Squaring always wins, because it over-weights the fast tail, so the rms is above the plain mean and never below it."
            },
            {
              "label": "all three are equal",
              "nudge": "True only for a hypothetical gas in which every molecule has exactly the same speed, which never happens in equilibrium. Collisions guarantee a spread."
            }
          ],
          "correct": 1,
          "solution": "The RAM order: <i>v</i><sub>rms</sub> : <i>v</i><sub>av</sub> : <i>v</i><sub>mp</sub> = √3 : √(8/π) : √2 = 1.22 : 1.13 : 1. The coefficients under the roots, 3 then 8/π then 2, are what fix it, and they are worth memorising because at least one option in a question like this will be built from swapping two of them."
        },
        {
          "t": "mcq",
          "q": "When the temperature of a gas is raised, the Maxwell speed-distribution curve",
          "opts": [
            {
              "label": "shifts its peak to a lower speed and becomes taller",
              "nudge": "The direction of the peak is backwards. Hotter means faster, so the peak must move right, and it flattens rather than sharpens."
            },
            {
              "label": "shifts its peak to a higher speed and becomes broader and flatter",
              "nudge": null
            },
            {
              "label": "remains unchanged in shape",
              "nudge": "This ignores the temperature dependence entirely. Every speed on the curve scales as √T, so the whole curve must move."
            },
            {
              "label": "increases the total area under it",
              "nudge": "The area is the total fraction of molecules and is always exactly 1, so it cannot change. This is a frequent conceptual error and examiners rely on it."
            }
          ],
          "correct": 1,
          "solution": "Higher <i>T</i> raises every speed, so <i>v</i><sub>mp</sub>, the peak, moves right. The distribution then spreads over a wider range, so the curve flattens and the peak height drops. What cannot change is the area: it is fixed at 1 because every molecule still has some speed. Higher temperature redistributes molecules into the fast tail, it does not create or destroy any."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Calculate the rms speed of oxygen molecules, <i>M</i> = 32 g/mol, at 0 °C.",
              "a": "<i>T</i> = 273 K and <i>M</i> = 32 × 10<sup>−3</sup> kg/mol. <i>v</i><sub>rms</sub> = √(3 × 8.314 × 273/0.032) = √(6809/0.032) = √(2.128 × 10<sup>5</sup>) ≈ 461 m/s."
            },
            {
              "q": "[NEET] The rms speed of a gas at 300 K is <i>v</i>. At what temperature does it become 2<i>v</i>?",
              "a": "<i>v</i> ∝ √<i>T</i>, so doubling the speed needs four times the absolute temperature: <i>T</i> = 4 × 300 = 1200 K. The answer is 1200 K, not 600 K, which is the trap for anyone who reads the dependence as linear."
            },
            {
              "q": "[JEE Main] For oxygen at 300 K, <i>M</i> = 32 g/mol, calculate the most probable speed and the average speed.",
              "a": "<i>v</i><sub>mp</sub> = √(2<i>RT</i>/<i>M</i>) = √(2 × 8.314 × 300/0.032) = √(1.559 × 10<sup>5</sup>) ≈ 395 m/s. <i>v</i><sub>av</sub> = √(8<i>RT</i>/π<i>M</i>) = √(8 × 8.314 × 300/(π × 0.032)) = √(1.985 × 10<sup>5</sup>) ≈ 446 m/s. Check the ratio: 446/395 = 1.13, as it must be."
            },
            {
              "q": "[JEE Main] A vessel holds a mixture of hydrogen and oxygen in thermal equilibrium. Find the ratio of the average translational kinetic energy per hydrogen molecule to that per oxygen molecule.",
              "a": "1 : 1. The average translational kinetic energy per molecule is (3/2)<i>k<sub>B</sub>T</i>, which depends on the shared temperature alone and not on the molar mass. The hydrogen molecules move four times faster, and that is exactly what keeps the energies equal."
            },
            {
              "q": "[JEE Advanced] The rms speed of an ideal gas is <i>v</i>. The gas is heated until its absolute temperature triples, and simultaneously every molecule dissociates into two molecules each of half the original mass. Find the new rms speed.",
              "a": "<i>v</i><sub>rms</sub> ∝ √(<i>T</i>/<i>M</i>), with <i>T</i>′ = 3<i>T</i> and <i>M</i>′ = <i>M</i>/2, so the factor is √(3 × 2) = √6 ≈ 2.45. The new rms speed is √6 <i>v</i> ≈ 2.45<i>v</i>. Note that the number of molecules doubling is irrelevant: the rms speed is a per-molecule quantity."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Molar mass in grams.</b> <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) demands <i>M</i> in <b>kg/mol</b>. Using g/mol inflates every speed by √1000, about 32 times. This is the single most common error in board and entrance scripts, and the fastest way to catch it is a plausibility check: a room-temperature speed of 16 000 m/s is not physics, it is a unit slip.",
            "<b>Celsius instead of kelvin.</b> Every speed and every energy in this chapter is proportional to <i>T</i> or to √<i>T</i>, so a celsius value silently destroys the answer. At 27 °C the ratio 300/27 is over eleven, which is how far wrong you land. Convert before you square-root, never after.",
            "<b>Mixing up which speed carries which coefficient.</b> √3 for rms, √(8/π) for the average, √2 for the most probable, in the RAM order. Only <i>v</i><sub>av</sub> carries a π, which is the quickest way to identify it on sight.",
            "<b>Reading a height off the Maxwell curve as a fraction.</b> The height <i>P</i>(<i>v</i>) is not a probability; only an <b>area</b> is. A question asking what fraction of molecules exceed <i>v</i><sub>mp</sub> wants the area to the right of the peak, not a value read off the vertical axis. And the total area is always 1, so heating a gas never adds molecules to the graph.",
            "<b>Substituting <i>v</i><sub>av</sub> when a question says average velocity.</b> The mean velocity vector is zero by isotropy. The mean speed is not. A question that says velocity rather than speed is usually testing exactly this."
          ]
        },
        {
          "t": "protip",
          "html": "for any compare two gases or change the temperature problem, never compute a full speed. write v<sub>1</sub>/v<sub>2</sub> = √(T<sub>1</sub>M<sub>2</sub>/T<sub>2</sub>M<sub>1</sub>) and substitute: one line, no calculator, no unit errors. and keep two anchors in your pocket for sanity checks. nitrogen at room temperature has an rms speed near 500 m/s, and k<sub>B</sub>T at 300 K is about 4.1 × 10<sup>−21</sup> J. any answer that misses either by an order of magnitude has a units bug in it, and you will find it faster by checking than by re-deriving."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "(1/2)m(v²)av = (3/2)k_B T",
              "note": "temperature IS the average translational kinetic energy, and it is the same for every gas at a given T"
            },
            {
              "f": "E = (3/2)Nk_B T = (3/2)nRT",
              "note": "the translational total; for a monatomic gas this is the whole internal energy"
            },
            {
              "f": "v_rms = √(3RT/M), v_av = √(8RT/πM), v_mp = √(2RT/M)",
              "note": "M in kg/mol and T in kelvin, always"
            },
            {
              "f": "RAM order: v_rms > v_av > v_mp, ratio 1.22 : 1.13 : 1",
              "note": "the coefficients under the roots are 3, then 8/π, then 2"
            },
            {
              "f": "every speed ∝ √T and ∝ 1/√M",
              "note": "hotter is faster, heavier is slower, and both go as a square root"
            },
            {
              "f": "P(v) = 4π(M/2πRT)<sup>3/2</sup> v² e<sup>−Mv²/2RT</sup>, total area = 1",
              "note": "peak at v_mp; a FRACTION is an area under the curve, never a height"
            }
          ],
          "aids": [
            "\"heavier is slower, hotter is faster, and RAM runs big to small\"",
            "\"kilograms per mole, or every speed is thirty-two times too big\"",
            "\"a fraction is an area, and the area never changes\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Degrees of Freedom and Equipartition",
      "chip": "05 DEGREES OF FREEDOM",
      "kalam": "count the ways it can move, then give each one half kT",
      "blocks": [
        {
          "t": "p",
          "html": "So far our molecules have only been allowed to <b>fly</b>. But a real molecule can do more than travel: a dumbbell-shaped oxygen molecule can also <b>tumble</b>, and at high enough temperature its two atoms can <b>vibrate</b> along their bond like two masses on a spring. Each of these independent ways of moving is a place the molecule can stash energy, and each is called a <b>degree of freedom</b>. Counting them is the whole business of this topic, because the count decides how much energy a mole of gas holds, and therefore what its heat capacities are."
        },
        {
          "t": "think",
          "html": "think about the state a single coin can carry. it can slide across a table, that is translation. it can spin on the spot, that is rotation. and if it were soft it could wobble and flex, that is vibration. a point-like atom such as helium is a marble: it can only slide, in three independent directions, and a spinning marble of negligible size carries no meaningful energy. a diatomic molecule is a tiny dumbbell: it slides in three directions and tumbles end over end about two axes."
        },
        {
          "t": "p",
          "html": "Why does spinning about the <i>bond</i> axis store nothing? Rotational kinetic energy is (1/2)<i>I</i>ω<sup>2</sup>, and the moment of inertia <i>I</i> about the line joining the two atoms is vanishingly small: almost all the mass of each atom sits essentially <i>on</i> that axis, so the perpendicular distance that enters <i>I</i> is negligible. With <i>I</i> ≈ 0 along the bond, no meaningful energy can be stored in that rotation, which is exactly why a diatomic molecule counts <b>two</b> rotational degrees of freedom and not three. The very same argument explains why a monatomic atom counts <b>zero</b>: a point-like atom has negligible moment of inertia about <i>every</i> axis. And it explains the third case too: a nonlinear molecule such as water has its atoms genuinely off every axis, so all three rotations count and <i>f</i> = 6."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.9 · DEGREES OF FREEDOM BY STRUCTURE",
          "chips": [
            "monatomic",
            "diatomic, room T",
            "diatomic, hot"
          ],
          "captions": [
            "A single atom is a point. It can move along x, along y and along z, and those three motions are independent, so f = 3. It cannot usefully rotate, because a point has negligible moment of inertia about every axis, and it cannot vibrate, because there is no bond to stretch. Helium, neon and argon behave exactly like this.",
            "A dumbbell adds tumbling. It still slides in three independent directions, and it can now rotate end over end about two axes perpendicular to the bond. Rotation about the bond itself is drawn dashed because it stores nothing: the atoms sit on that axis, so the moment of inertia about it is essentially zero. Three slides plus two tumbles gives f = 5, which is nitrogen and oxygen at room temperature.",
            "Heat it enough and the bond starts to stretch and compress like a spring. A vibration is worth TWO degrees of freedom, not one, because the mode stores kinetic energy in the moving atoms and potential energy in the stretched bond, and equipartition pays half kT to each. Three slides, two tumbles and one vibration therefore give f = 7."
          ],
          "frames": [
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "marks": [
                {
                  "x": 5.5,
                  "y": 4.0,
                  "glyph": "dot"
                }
              ],
              "arrows": [
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    8.7,
                    4.0
                  ],
                  "tone": "amber",
                  "label": "x",
                  "at": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    5.5,
                    6.6
                  ],
                  "tone": "amber",
                  "label": "y",
                  "at": "end"
                },
                {
                  "from": [
                    5.5,
                    4.0
                  ],
                  "to": [
                    3.2,
                    2.1
                  ],
                  "tone": "amber",
                  "label": "z",
                  "at": "end"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 7.5,
                  "text": "f = 3"
                },
                {
                  "x": 6.6,
                  "y": 1.2,
                  "text": "three slides, nothing else"
                }
              ]
            },
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "marks": [
                {
                  "x": 4.6,
                  "y": 4.2,
                  "glyph": "dot"
                },
                {
                  "x": 6.4,
                  "y": 4.2,
                  "glyph": "dot"
                }
              ],
              "segments": [
                {
                  "from": [
                    4.6,
                    4.2
                  ],
                  "to": [
                    6.4,
                    4.2
                  ]
                },
                {
                  "from": [
                    2.4,
                    4.2
                  ],
                  "to": [
                    4.6,
                    4.2
                  ],
                  "dash": true,
                  "soft": true,
                  "label": "I ≈ 0 here",
                  "at": "below"
                }
              ],
              "arcs": [
                {
                  "at": [
                    5.5,
                    4.2
                  ],
                  "r": 2.2,
                  "from": 32,
                  "to": 148,
                  "label": "tumble",
                  "tone": "amber"
                },
                {
                  "at": [
                    5.5,
                    4.2
                  ],
                  "r": 2.2,
                  "from": 212,
                  "to": 328,
                  "label": "tumble",
                  "tone": "amber"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 7.5,
                  "text": "f = 5"
                },
                {
                  "x": 5.5,
                  "y": 1.1,
                  "text": "3 slides + 2 tumbles"
                }
              ]
            },
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "marks": [
                {
                  "x": 3.6,
                  "y": 4.4,
                  "glyph": "dot"
                },
                {
                  "x": 7.4,
                  "y": 4.4,
                  "glyph": "dot"
                }
              ],
              "bodies": [
                {
                  "kind": "spring",
                  "at": [
                    3.6,
                    4.4
                  ],
                  "to": [
                    7.4,
                    4.4
                  ],
                  "tone": "amber"
                }
              ],
              "arrows": [
                {
                  "from": [
                    3.4,
                    2.9
                  ],
                  "to": [
                    2.1,
                    2.9
                  ],
                  "tone": "amber",
                  "head": "end"
                },
                {
                  "from": [
                    7.6,
                    2.9
                  ],
                  "to": [
                    8.9,
                    2.9
                  ],
                  "tone": "amber",
                  "head": "end"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 7.5,
                  "text": "f = 7"
                },
                {
                  "x": 5.5,
                  "y": 6.1,
                  "text": "the bond stretches now"
                },
                {
                  "x": 5.5,
                  "y": 1.3,
                  "text": "kinetic + potential = 2 more"
                }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "A degree of freedom, and the law that pays each one equally",
          "html": "A <b>degree of freedom</b> is an independent way in which a molecule can store energy. Translation always contributes 3, one per spatial direction. Rotation contributes 0 for a monatomic atom, 2 for a diatomic or any linear molecule, and 3 for a nonlinear one. Each active <b>vibrational mode</b> contributes 2, one for the kinetic energy of the moving atoms and one for the potential energy stored in the stretched bond. Now the elegant part. Nature is scrupulously fair about sharing thermal energy: the <b>law of equipartition of energy</b> says that in thermal equilibrium each degree of freedom carries an average energy of exactly <b>(1/2)<i>k<sub>B</sub>T</i> per molecule</b>, equivalently (1/2)<i>RT</i> per mole, no matter what kind of motion it is. A molecule with <i>f</i> degrees of freedom therefore carries an average energy of <i>f</i> × (1/2)<i>k<sub>B</sub>T</i>. That one principle is the master key: it gives the internal energy of any ideal gas, and from there its specific heats and the all-important ratio γ."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EQUIPARTITION AND INTERNAL ENERGY",
          "tag": "f active degrees of freedom",
          "main": "each degree of freedom: (1/2)<i>k<sub>B</sub>T</i> per molecule, (1/2)<i>RT</i> per mole<br><i>U</i> = (<i>f</i>/2)<i>nRT</i>",
          "legend": [
            "<i>f</i> = number of <i>active</i> degrees of freedom, a pure count with no dimensions",
            "<i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K per molecule, and <i>R</i> = 8.314 J/mol K per mole, with <i>R</i> = <i>N<sub>A</sub>k<sub>B</sub></i>",
            "<i>n</i> = number of moles and <i>T</i> = absolute temperature in K",
            "<i>U</i> = internal energy in joules, dimensions [M L<sup>2</sup> T<sup>−2</sup>]: [mol][M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>][Θ] closes correctly, and <i>f</i>/2 is dimensionless"
          ],
          "note": "U depends on temperature ALONE for an ideal gas, never on pressure or volume. Setting f = 3 recovers Topic 04's translational result U = (3/2)nRT, which is the entire internal energy of a monatomic gas and only part of it for anything larger."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · FROM f TO THE HEAT CAPACITIES AND gamma",
          "steps": [
            {
              "eq": "each molecule carries (<i>f</i>/2)<i>k<sub>B</sub>T</i>, so for <i>n</i> moles: <i>U</i> = <i>N</i>(<i>f</i>/2)<i>k<sub>B</sub>T</i> = <i>nN<sub>A</sub></i>(<i>f</i>/2)<i>k<sub>B</sub>T</i> = (<i>f</i>/2)<i>nRT</i>",
              "why": "Equipartition hands each degree of freedom (1/2)<i>k<sub>B</sub>T</i>, and a molecule has <i>f</i> of them. Multiplying by the molecule count and using <i>N<sub>A</sub>k<sub>B</sub></i> = <i>R</i> converts the per-molecule statement into the molar one. Notice there is no volume and no pressure anywhere: the internal energy of an ideal gas is a function of temperature alone."
            },
            {
              "eq": "at constant volume the gas does no work, so <i>C<sub>V</sub></i> = (1/<i>n</i>)(d<i>U</i>/d<i>T</i>) = (<i>f</i>/2)<i>R</i>",
              "why": "<i>C<sub>V</sub></i> is the heat needed to raise one mole by one kelvin with the piston bolted. With no expansion work to pay for, every joule of heat lands in <i>U</i>, so differentiating the previous line and dividing by <i>n</i> gives the capacity directly."
            },
            {
              "eq": "Mayer's relation, established in Thermodynamics, gives <i>C<sub>P</sub></i> = <i>C<sub>V</sub></i> + <i>R</i> = (<i>f</i>/2 + 1)<i>R</i> = ((<i>f</i> + 2)/2)<i>R</i>",
              "why": "At constant pressure the gas also expands and pushes back the surroundings, and that expansion work is exactly <i>R</i> joules per mole per kelvin. Chapter 11 derives this in full from the first law and <i>PV</i> = <i>RT</i>; here we simply quote it, because kinetic theory contributes the <i>f</i> and thermodynamics contributes the <i>R</i>."
            },
            {
              "eq": "divide: <b>γ = <i>C<sub>P</sub></i>/<i>C<sub>V</sub></i> = (<i>f</i> + 2)/<i>f</i> = 1 + 2/<i>f</i></b>",
              "why": "Everything except <i>f</i> cancels, and the reading is worth more than the algebra. Because γ depends on <i>f</i> alone, <b>measuring γ in a laboratory tells you the atomicity of the gas</b>. And the direction is fixed: more ways to store energy means a larger <i>C<sub>V</sub></i>, so extra modes soak up heat without raising the temperature as fast, and γ falls towards 1. Since <i>f</i> is at least 3, γ can never exceed 5/3, and a printed γ outside the range 1 to 5/3 is an error."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Degrees of freedom and the numbers that follow, at room temperature",
          "rows": [
            {
              "k": "Monatomic: He, Ne, Ar",
              "v": "3 translations, 0 rotations, <i>f</i> = 3 · <i>C<sub>V</sub></i> = 1.5<i>R</i> ≈ 12.5 · <i>C<sub>P</sub></i> = 2.5<i>R</i> ≈ 20.8 · γ = 5/3 ≈ 1.67"
            },
            {
              "k": "Diatomic and linear: N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>",
              "v": "3 translations, 2 rotations, <i>f</i> = 5 · <i>C<sub>V</sub></i> = 2.5<i>R</i> ≈ 20.8 · <i>C<sub>P</sub></i> = 3.5<i>R</i> ≈ 29.1 · γ = 7/5 = 1.40"
            },
            {
              "k": "Nonlinear polyatomic: H<sub>2</sub>O, SO<sub>2</sub>, NH<sub>3</sub>",
              "v": "3 translations, 3 rotations, <i>f</i> = 6 · <i>C<sub>V</sub></i> = 3<i>R</i> ≈ 24.9 · <i>C<sub>P</sub></i> = 4<i>R</i> ≈ 33.3 · γ = 4/3 ≈ 1.33"
            },
            {
              "k": "A warning about CO<sub>2</sub>",
              "v": "carbon dioxide is a <b>linear</b> triatomic, O=C=O, so it rotates about only two axes and has <i>f</i> = 5. It belongs with the diatomic row and not with the nonlinear polyatomic one"
            },
            {
              "k": "At high temperature",
              "v": "each vibrational mode that switches on adds 2, so a diatomic goes from <i>f</i> = 5 to <i>f</i> = 7 and γ falls from 1.40 to 9/7 ≈ 1.29. Use 7 only when a problem explicitly invokes vibration"
            },
            {
              "k": "The reflex identities",
              "v": "<i>C<sub>V</sub></i> = <i>R</i>/(γ − 1) and <i>C<sub>P</sub></i> = γ<i>R</i>/(γ − 1), which convert a given γ straight into capacities with no counting at all"
            },
            {
              "k": "Units and dimensions",
              "v": "molar specific heat in J/mol K, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>]; γ is a pure number"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE 12.10 · THE LADDER OF STORED ENERGY",
          "chips": [
            "per mole, at one T",
            "when vibration wakes up"
          ],
          "captions": [
            "Internal energy per mole at a single temperature, drawn as a ladder. Each rung is (f/2)RT, so every extra pair of degrees of freedom lifts the gas by a whole RT. This is the picture behind the sentence more ways to wiggle means more places to hide energy: at the same temperature a diatomic gas stores 2.5RT per mole against a monatomic gas's 1.5RT, which is two thirds more, and its heat capacity is larger by exactly that ratio.",
            "The same ladder read as a temperature story for one gas, hydrogen. Below about 50 K even the rotations are frozen out and only translation counts, so f = 3. At ordinary temperatures rotation is active and f = 5. Only at high temperature does the vibration switch on and f reach 7. The rungs turn on one at a time as kBT grows past the quantum gap to each mode's first excited level, which is why the classical equipartition prediction of a constant f fails at both ends."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "levels": {
                "scale": "linear",
                "rows": [
                  {
                    "at": 1.5,
                    "label": "f = 3 mono",
                    "right": "U = 1.5 RT"
                  },
                  {
                    "at": 2.5,
                    "label": "f = 5 diatomic",
                    "right": "U = 2.5 RT"
                  },
                  {
                    "at": 3.0,
                    "label": "f = 6 nonlinear",
                    "right": "U = 3 RT"
                  }
                ],
                "jumps": [
                  {
                    "from": 1.5,
                    "to": 2.5,
                    "label": "two rotations, +RT",
                    "tone": "amber"
                  }
                ]
              }
            },
            {
              "aspect": 0.72,
              "levels": {
                "scale": "linear",
                "rows": [
                  {
                    "at": 1.5,
                    "label": "below 50 K",
                    "right": "f = 3, slide only",
                    "dash": true
                  },
                  {
                    "at": 2.5,
                    "label": "room T",
                    "right": "f = 5, + tumble"
                  },
                  {
                    "at": 3.5,
                    "label": "high T",
                    "right": "f = 7, + vibrate",
                    "dash": true
                  }
                ],
                "jumps": [
                  {
                    "from": 2.5,
                    "to": 3.5,
                    "label": "vibration on, +RT",
                    "tone": "amber"
                  }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "That freezing out is itself a fingerprint of quantum mechanics intruding on a classical theory, and it is worth understanding rather than memorising. Classically, equipartition says every mode should <i>always</i> carry (1/2)<i>k<sub>B</sub>T</i>, so a diatomic gas should always show <i>f</i> = 7. Experiment flatly disagrees: at low temperature the measured specific heat of hydrogen corresponds to <i>f</i> = 3, only translation, rising to <i>f</i> = 5 near room temperature and approaching <i>f</i> = 7 only when it is very hot. The reason is that rotational and vibrational energies come in <b>discrete quantum steps</b>. When <i>k<sub>B</sub>T</i> is smaller than the gap to a mode's first excited level, that mode simply cannot be activated and contributes nothing at all. The orderly switching-on of modes as temperature rises was one of the earliest clues that energy at the molecular scale is quantised. So unless a problem says otherwise, use the room-temperature values: 3, 5, 6."
        },
        {
          "t": "p",
          "html": "Equipartition reaches beyond gases, and two results show how far. The atoms of a <b>crystalline solid</b> can neither translate nor rotate freely; each simply vibrates about its lattice site along three axes. Each vibration is worth 2 degrees of freedom, kinetic plus potential, so <i>f</i> = 3 × 2 = 6 and the molar internal energy is 3<i>RT</i>, giving a molar heat capacity of 3<i>R</i> ≈ 25 J/mol K. That is the <b>law of Dulong and Petit</b>, and most solids obey it well at ordinary temperatures. The same reasoning explains <b>water's</b> famously large heat capacity: treat each atom in a water molecule as bound like an atom in a solid, contributing 3<i>R</i> per mole of atoms. A water molecule has 3 atoms, so one mole of water behaves like 3 moles of vibrating atoms and <i>C</i> = 3 × 3<i>R</i> = 9<i>R</i> ≈ 75 J/mol K. Check it against measurement: the familiar 4186 J/kg K times the molar mass 0.018 kg/mol gives 75 J/mol K. A small triumph for an idea invented for gases."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · EQUIPARTITION BEYOND GASES",
          "tag": "solids and liquids, ordinary temperatures",
          "main": "solid: <i>f</i> = 6, <i>U</i> = 3<i>RT</i> per mole, <i>C</i> = 3<i>R</i> ≈ 25 J/mol K<br>water: <i>C</i> = 3 × 3<i>R</i> = 9<i>R</i> ≈ 75 J/mol K",
          "legend": [
            "<i>f</i> = 6 for a lattice atom: three vibration axes, each worth one kinetic and one potential degree of freedom",
            "<i>R</i> = 8.314 J/mol K, <i>T</i> = absolute temperature in K, and <i>U</i> is per mole in J/mol",
            "<i>C</i> = molar heat capacity in J/mol K, dimensions [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup> mol<sup>−1</sup>]",
            "the factor of 3 for water is the number of <i>atoms</i> in H<sub>2</sub>O, so one mole of the compound behaves like three moles of bound atoms"
          ],
          "note": "The solid result is the law of Dulong and Petit. Both break down at low temperature for exactly the reason vibration freezes out in a diatomic gas: the modes are quantised and cannot be excited when kBT is smaller than the gap."
        },
        {
          "t": "proc",
          "title": "Finding the effective gamma of a mixture",
          "steps": [
            "<b>Never average the two γ values.</b> γ is a ratio, and ratios are not additive. This is the mistake the question is testing for.",
            "<b>Fix <i>f</i> for each component and write its <i>C<sub>V</sub></i></b>, using 1.5<i>R</i> for monatomic, 2.5<i>R</i> for diatomic or linear, 3<i>R</i> for nonlinear polyatomic.",
            "<b>Take the mole-weighted average of <i>C<sub>V</sub></i>:</b> <i>C</i><sub>V,mix</sub> = (<i>n</i><sub>1</sub><i>C</i><sub>V1</sub> + <i>n</i><sub>2</sub><i>C</i><sub>V2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>). This is legal because internal energy is additive: the gases share one temperature and their energies simply sum.",
            "<b>Add <i>R</i> once</b> to get <i>C</i><sub>P,mix</sub>, since Mayer's relation holds for the mixture as a whole just as it does for each component.",
            "<b>Only now divide:</b> γ<sub>mix</sub> = <i>C</i><sub>P,mix</sub>/<i>C</i><sub>V,mix</sub>. Sanity check the answer: it must lie between the two component γ values, and closer to the more abundant one."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Calculate the internal energy of 3.0 mol of a diatomic ideal gas at 300 K, assuming only translational and rotational modes are active. Take <i>R</i> = 8.314 J/mol K.",
          "steps": [
            "Diatomic at room temperature means <i>f</i> = 5, since vibration is frozen out and the question says so.",
            "<i>U</i> = (<i>f</i>/2)<i>nRT</i> = (5/2)(3.0)(8.314)(300).",
            "= 2.5 × 3.0 × 2494.2 = 1.87 × 10<sup>4</sup> J."
          ],
          "ans": "<i>U</i> ≈ 1.87 × 10<sup>4</sup> J. Note the use of <i>f</i> = 5 rather than 7: the problem specified translational and rotational modes only, which is room-temperature behaviour, so vibration is excluded. Had you used 7 the answer would have been 2.62 × 10<sup>4</sup> J, and there will be an option offering it."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The ratio of specific heats of a gas is measured as γ = 1.40. Identify the atomicity and write its <i>C<sub>V</sub></i>.",
          "steps": [
            "Invert γ = 1 + 2/<i>f</i> to get <i>f</i> = 2/(γ − 1).",
            "<i>f</i> = 2/0.40 = 5, which is a diatomic gas.",
            "<i>C<sub>V</sub></i> = (<i>f</i>/2)<i>R</i> = 2.5<i>R</i> = 2.5 × 8.314 = 20.8 J/mol K."
          ],
          "ans": "Diatomic, with <i>C<sub>V</sub></i> = 2.5<i>R</i> ≈ 20.8 J/mol K. The three benchmark values, 1.67 for monatomic, 1.40 for diatomic and 1.33 for nonlinear polyatomic, are worth memorising so you can identify the gas on sight. The trap is computing <i>f</i> = 2/γ instead of 2/(γ − 1), which gives 1.43 and matches nothing. The minus one in the denominator is the whole game."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For 2.0 mol of a diatomic ideal gas at 300 K, find the total internal energy, and split it into the part stored in translation and the part stored in rotation.",
          "steps": [
            "At room temperature <i>f</i> = 5, made of 3 translational and 2 rotational degrees of freedom.",
            "Total: <i>U</i> = (5/2)(2.0)(8.314)(300) = 1.25 × 10<sup>4</sup> J.",
            "Translational part, 3 of the 5: <i>U</i><sub>trans</sub> = (3/2)(2.0)(8.314)(300) = 7.48 × 10<sup>3</sup> J.",
            "Rotational part, 2 of the 5: <i>U</i><sub>rot</sub> = (2/2)(2.0)(8.314)(300) = <i>nRT</i> = 4.99 × 10<sup>3</sup> J.",
            "Check: 7.48 + 4.99 = 12.47, that is 1.25 × 10<sup>4</sup> J."
          ],
          "ans": "<i>U</i> ≈ 1.25 × 10<sup>4</sup> J, of which about 7.48 × 10<sup>3</sup> J is translational and 4.99 × 10<sup>3</sup> J is rotational, a 3 : 2 split. Equipartition makes this trivial: the energy divides in exactly the ratio of the degree-of-freedom counts, so no separate calculation is ever needed for a part."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A mixture is made of 2.0 mol of helium, monatomic, and 3.0 mol of oxygen, diatomic at room temperature. Find the effective γ of the mixture.",
          "steps": [
            "Heat capacities add by moles, because the total internal energy is the sum of the parts and both gases share one temperature.",
            "<i>C</i><sub>V,mix</sub> = [2.0 × 1.5<i>R</i> + 3.0 × 2.5<i>R</i>]/(2.0 + 3.0) = (3<i>R</i> + 7.5<i>R</i>)/5.0 = 10.5<i>R</i>/5.0 = 2.1<i>R</i>.",
            "By Mayer's relation the mixture still obeys <i>C</i><sub>P,mix</sub> = <i>C</i><sub>V,mix</sub> + <i>R</i> = 3.1<i>R</i>.",
            "γ<sub>mix</sub> = 3.1<i>R</i>/2.1<i>R</i> = 1.48."
          ],
          "ans": "γ<sub>mix</sub> ≈ 1.48, sitting neatly between the pure monatomic 1.67 and the pure diatomic 1.40, and weighted towards the more abundant oxygen. The crucial insight is that you cannot average the two γ values directly, because γ is a ratio; you must average <i>C<sub>V</sub></i>, which is additive through energy, and only then form the ratio. Averaging the gammas would have given 1.51, which is wrong and will be on offer."
        },
        {
          "t": "mcq",
          "q": "At room temperature the number of degrees of freedom of a diatomic gas molecule is",
          "opts": [
            {
              "label": "3",
              "nudge": "Three is the count for a MONATOMIC gas, translation alone. A dumbbell can also tumble, so it must have more."
            },
            {
              "label": "5",
              "nudge": null
            },
            {
              "label": "6",
              "nudge": "Six over-counts rotation as three. Rotation about the bond axis stores no energy, because the moment of inertia about that line is essentially zero, so only two rotations count."
            },
            {
              "label": "7",
              "nudge": "Seven is the high-temperature value, valid only once vibration is excited. The qualifier room temperature in the question rules it out."
            }
          ],
          "correct": 1,
          "solution": "Three translational plus two rotational gives 5 active degrees of freedom at ordinary temperatures. Vibration would add two more, but it is frozen out: <i>k<sub>B</sub>T</i> at 300 K is smaller than the quantum gap to the first vibrational level, so that mode cannot be excited at all."
        },
        {
          "t": "mcq",
          "q": "A gas has γ = 5/3. The gas is",
          "opts": [
            {
              "label": "diatomic",
              "nudge": "A diatomic gas has γ = 1.40, not 1.67. Run the numbers: 1 + 2/5 = 1.4."
            },
            {
              "label": "monatomic",
              "nudge": null
            },
            {
              "label": "triatomic and nonlinear",
              "nudge": "A nonlinear polyatomic gas has f = 6 and γ = 4/3 ≈ 1.33, the smallest of the three benchmarks, not the largest."
            },
            {
              "label": "diatomic with vibration active",
              "nudge": "Adding vibration INCREASES f and therefore LOWERS γ, to 9/7 ≈ 1.29. This option moves γ in the wrong direction."
            }
          ],
          "correct": 1,
          "solution": "γ = 1 + 2/<i>f</i> = 5/3 gives 2/<i>f</i> = 2/3, so <i>f</i> = 3: translation only, the signature of a monatomic gas such as helium or argon. Since <i>f</i> can never be less than 3, γ = 5/3 is the largest value any ideal gas can have, which is a useful check on any answer."
        },
        {
          "t": "mcq",
          "q": "By the law of equipartition, the energy associated with the <b>rotational</b> motion of one mole of a diatomic gas at temperature <i>T</i> is",
          "opts": [
            {
              "label": "(1/2)<i>RT</i>",
              "nudge": "This counts only one rotational mode. A diatomic molecule tumbles about two independent axes perpendicular to the bond, so there are two."
            },
            {
              "label": "<i>RT</i>",
              "nudge": null
            },
            {
              "label": "(3/2)<i>RT</i>",
              "nudge": "This is the TRANSLATIONAL share, three modes at (1/2)RT each. The question asks for the rotational part only."
            },
            {
              "label": "(5/2)<i>RT</i>",
              "nudge": "This is the TOTAL room-temperature internal energy per mole, all five modes together, rather than the rotational part alone."
            }
          ],
          "correct": 1,
          "solution": "A diatomic molecule has 2 rotational degrees of freedom, each carrying (1/2)<i>RT</i> per mole, so the rotational energy is 2 × (1/2)<i>RT</i> = <i>RT</i>. Equipartition makes every such split a matter of counting: read off how many of the <i>f</i> modes the question asks about, and take that fraction of (<i>f</i>/2)<i>RT</i>."
        },
        {
          "t": "mcq",
          "q": "When a single vibrational mode of a molecule becomes active, the number of degrees of freedom increases by",
          "opts": [
            {
              "label": "1",
              "nudge": "This counts only the kinetic energy of the vibrating atoms. A vibration also stores potential energy in the stretched bond, and equipartition pays half kT to that too."
            },
            {
              "label": "2",
              "nudge": null
            },
            {
              "label": "3",
              "nudge": "Three would be right for adding translation in three directions, not for one vibrational mode, which lives along a single bond."
            },
            {
              "label": "1/2",
              "nudge": "Degrees of freedom are counted in whole numbers. The half belongs to the energy each one carries, (1/2)kT, not to the count."
            }
          ],
          "correct": 1,
          "solution": "Each vibrational mode contributes <b>two</b> degrees of freedom, one kinetic and one potential, so it adds <i>k<sub>B</sub>T</i> per molecule rather than half of it. That is why a diatomic gas jumps from <i>f</i> = 5 to <i>f</i> = 7 rather than to 6 when its bond starts to vibrate, and why γ falls from 1.40 straight to 9/7."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] State the law of equipartition of energy and use it to find the total internal energy of 2.0 mol of a monatomic ideal gas at 400 K.",
              "a": "Equipartition: in thermal equilibrium each active degree of freedom carries an average energy of (1/2)<i>k<sub>B</sub>T</i> per molecule, that is (1/2)<i>RT</i> per mole. A monatomic gas has <i>f</i> = 3, so <i>U</i> = (3/2)<i>nRT</i> = 1.5 × 2.0 × 8.314 × 400 ≈ 9.98 × 10<sup>3</sup> J."
            },
            {
              "q": "[NEET] A polyatomic gas has 6 degrees of freedom. Find its γ.",
              "a": "γ = 1 + 2/<i>f</i> = 1 + 2/6 = 4/3 ≈ 1.33. This is the nonlinear polyatomic benchmark, the smallest of the three."
            },
            {
              "q": "[JEE Main] For a diatomic gas at room temperature, find <i>C<sub>P</sub></i>, <i>C<sub>V</sub></i> and their ratio in terms of <i>R</i>.",
              "a": "<i>f</i> = 5, so <i>C<sub>V</sub></i> = (5/2)<i>R</i> ≈ 20.8 J/mol K and <i>C<sub>P</sub></i> = (7/2)<i>R</i> ≈ 29.1 J/mol K. The ratio is γ = 7/5 = 1.40."
            },
            {
              "q": "[JEE Main] What fraction of the internal energy of a diatomic gas at room temperature is stored in rotation?",
              "a": "Of the 5 active degrees of freedom, 2 are rotational, so the fraction is 2/5 = 0.40, that is 40 per cent. Equipartition makes every mode equal, so the fraction is simply a count over a count and no temperature is needed."
            },
            {
              "q": "[JEE Advanced] A diatomic gas is heated until its vibrational mode is fully active. Find the new γ and the fractional change from its room-temperature value.",
              "a": "<i>f</i> goes from 5 to 7, so γ = 1 + 2/7 = 9/7 ≈ 1.286. The drop from 1.400 is 0.114, that is 0.114/1.400 ≈ 8 per cent. The direction is the point: extra modes always lower γ, never raise it."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using <i>f</i> = 7 for a diatomic gas by default.</b> At ordinary temperatures vibration is frozen out, so <i>f</i> = 5. Use 7 only when a problem explicitly invokes high temperature or vibration. Getting this wrong flips γ between 1.40 and 1.29 and changes every number downstream.",
            "<b>Counting a vibration as one degree of freedom.</b> Each vibrational mode contributes <b>two</b>, one kinetic and one potential, so it adds 2 to <i>f</i>, not 1. This is the difference between <i>f</i> = 7 and a value of 6 that corresponds to no diatomic gas at all.",
            "<b>Putting CO<sub>2</sub> in the nonlinear polyatomic row.</b> Carbon dioxide is <b>linear</b>, O=C=O, so it rotates about only two axes and has <i>f</i> = 5 like a diatomic. Water, ammonia and sulphur dioxide are the genuine <i>f</i> = 6 examples. This exact error appears in printed tables.",
            "<b>Using <i>k<sub>B</sub></i> where <i>R</i> belongs, or the reverse.</b> Per-molecule energies use <i>k<sub>B</sub></i>; molar quantities, <i>C<sub>V</sub></i>, <i>C<sub>P</sub></i> and <i>U</i> = (<i>f</i>/2)<i>nRT</i>, use <i>R</i>. Mixing them costs a factor of <i>N<sub>A</sub></i>, which is 10<sup>23</sup> and unmistakable once you look.",
            "<b>Averaging γ for a mixture.</b> γ is a ratio and is not additive. Average <i>C<sub>V</sub></i> by moles, add <i>R</i> once for <i>C<sub>P</sub></i>, then divide. Averaging the gammas directly produces a physically meaningless number that will nonetheless be one of the options."
          ]
        },
        {
          "t": "protip",
          "html": "memorise the trio 1.67 / 1.40 / 1.33 for mono, di and nonlinear poly. the instant a problem hands you γ you know f, C<sub>V</sub> and C<sub>P</sub> with no algebra at all, and you can sanity-check any answer by recalling that more atoms means smaller gamma. the two reflex identities C<sub>V</sub> = R/(γ − 1) and C<sub>P</sub> = γR/(γ − 1) do the same job in reverse. and for any split-the-energy question, remember equipartition makes every mode equal, so the answer is one count divided by another."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "equipartition: (1/2)k_B T per degree of freedom per molecule",
              "note": "equivalently (1/2)RT per mole, and it applies to every kind of mode alike"
            },
            {
              "f": "f = 3 mono, 5 diatomic or linear, 6 nonlinear poly",
              "note": "room-temperature values; each active vibration adds 2 more"
            },
            {
              "f": "why the bond axis is free: I ≈ 0 there",
              "note": "the mass sits on the axis, so no energy can be stored in that rotation"
            },
            {
              "f": "U = (f/2)nRT",
              "note": "a function of temperature ALONE for an ideal gas, whatever P and V do"
            },
            {
              "f": "C_V = (f/2)R, C_P = (f/2 + 1)R, γ = 1 + 2/f",
              "note": "and the reflex inverse C_V = R/(γ − 1); γ always lies between 1 and 5/3"
            },
            {
              "f": "solids obey Dulong-Petit C = 3R ≈ 25 J/mol K, water C = 9R ≈ 75 J/mol K",
              "note": "six degrees of freedom per bound atom, and water has three atoms per molecule"
            }
          ],
          "aids": [
            "\"half kT to every mode, no favourites\"",
            "\"more atoms, smaller gamma\"",
            "\"a vibration is worth two: one moving, one stretched\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Mean Free Path and Collision Frequency",
      "chip": "06 MEAN FREE PATH",
      "kalam": "squeeze the gas, shrink the path, quicken the collisions",
      "blocks": [
        {
          "t": "p",
          "html": "A molecule in still air does not sail smoothly across the room. It ricochets off its neighbours billions of times a second, tracing a frantic zig-zag whose straight runs are short and whose directions are random. The <b>mean free path</b> λ is the average straight-line distance a molecule covers between two successive collisions. It is the last of the chapter's three lengths, and the one that connects the molecular picture to things you can actually measure in a laboratory."
        },
        {
          "t": "think",
          "html": "walk across a crowded market and you cannot go straight. you take a few steps, sidestep someone, take a few more, sidestep again. the average length of those few steps is your mean free path. now imagine the market emptying out: your runs get longer and your sidesteps rarer. that is what pumping a gas down does. fill the market instead and your runs shrink to almost nothing, which is what compressing a gas does."
        },
        {
          "t": "p",
          "html": "How long is a free run in ordinary air? Roughly 7 × 10<sup>−8</sup> m, about seventy nanometres. Line up the chapter's three lengths and the whole picture of a dilute gas falls into place: the molecular diameter is around 3 × 10<sup>−10</sup> m, the mean spacing between neighbours at STP is about 3 × 10<sup>−9</sup> m, ten times larger, and the mean free path is about 7 × 10<sup>−8</sup> m, another twenty times larger again. So a molecule flies past perhaps twenty near-neighbours before it actually strikes one, which is the quantitative statement of mostly free, occasionally colliding. Crowd the gas and collisions come thicker and faster, so λ shrinks; rarefy it in a vacuum pump and λ grows until it reaches the size of the tube itself, after which the molecules only hit the walls."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.11 · THE ZIG-ZAG AND THE CYLINDER IT SWEEPS",
          "chips": [
            "the zig-zag",
            "counting the hits"
          ],
          "captions": [
            "One molecule's path over a handful of collisions. The straight runs are the free paths; the corners are where it struck another molecule, drawn as open circles. Each run has a different length, and lambda is simply the average of them. The path is drawn flat here for legibility, but the real thing wanders in three dimensions and the corners point every which way.",
            "The counting argument. Model molecules as hard spheres of diameter d. Our molecule collides with another whenever their centres come within d, so as it travels it effectively sweeps a cylinder of radius d, cross-sectional area pi d squared. In time t, moving at speed v, it sweeps a volume pi d squared times v t. Every molecular centre lying inside that volume, drawn as a filled dot here, is a collision; every centre outside it, drawn open, is a miss."
          ],
          "frames": [
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.0,
                      3.2
                    ],
                    [
                      2.6,
                      5.8
                    ],
                    [
                      4.0,
                      2.6
                    ],
                    [
                      5.9,
                      6.0
                    ],
                    [
                      7.2,
                      3.4
                    ],
                    [
                      8.8,
                      5.4
                    ],
                    [
                      10.0,
                      3.0
                    ]
                  ],
                  "fill": "none",
                  "tone": "amber"
                }
              ],
              "marks": [
                {
                  "x": 2.6,
                  "y": 5.8,
                  "glyph": "open"
                },
                {
                  "x": 4.0,
                  "y": 2.6,
                  "glyph": "open"
                },
                {
                  "x": 5.9,
                  "y": 6.0,
                  "glyph": "open"
                },
                {
                  "x": 7.2,
                  "y": 3.4,
                  "glyph": "open"
                },
                {
                  "x": 8.8,
                  "y": 5.4,
                  "glyph": "open"
                }
              ],
              "labels": [
                {
                  "x": 5.5,
                  "y": 7.4,
                  "text": "λ is the mean of these runs"
                },
                {
                  "x": 5.5,
                  "y": 1.1,
                  "text": "each corner is a collision"
                }
              ]
            },
            {
              "x": [
                0,
                11
              ],
              "y": [
                0,
                8
              ],
              "axes": "none",
              "aspect": 0.72,
              "polys": [
                {
                  "pts": [
                    [
                      1.0,
                      3.2
                    ],
                    [
                      9.6,
                      3.2
                    ],
                    [
                      9.6,
                      5.2
                    ],
                    [
                      1.0,
                      5.2
                    ]
                  ],
                  "close": true,
                  "fill": "hatch",
                  "tone": "soft"
                }
              ],
              "arrows": [
                {
                  "from": [
                    1.3,
                    4.2
                  ],
                  "to": [
                    9.3,
                    4.2
                  ],
                  "tone": "amber",
                  "label": "v t",
                  "at": "below"
                }
              ],
              "marks": [
                {
                  "x": 3.1,
                  "y": 4.8,
                  "glyph": "dot"
                },
                {
                  "x": 5.6,
                  "y": 3.6,
                  "glyph": "dot"
                },
                {
                  "x": 8.0,
                  "y": 4.9,
                  "glyph": "dot"
                },
                {
                  "x": 2.4,
                  "y": 6.6,
                  "glyph": "open"
                },
                {
                  "x": 6.4,
                  "y": 6.8,
                  "glyph": "open"
                },
                {
                  "x": 4.4,
                  "y": 1.7,
                  "glyph": "open"
                },
                {
                  "x": 8.6,
                  "y": 1.9,
                  "glyph": "open"
                }
              ],
              "labels": [
                {
                  "x": 5.3,
                  "y": 7.6,
                  "text": "centres outside: missed"
                },
                {
                  "x": 5.3,
                  "y": 0.7,
                  "text": "radius d, area pi d squared"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE MEAN FREE PATH, BY THE COLLISION CYLINDER",
          "steps": [
            {
              "eq": "model molecules as hard spheres of diameter <i>d</i>. A collision happens when two centres come within <i>d</i>, so a moving molecule sweeps a cylinder of radius <i>d</i> and cross-section π<i>d</i><sup>2</sup>",
              "why": "The radius of the cylinder is a whole diameter, not half of one, because what matters is the separation of two <i>centres</i>. Each molecule contributes a radius of <i>d</i>/2 to that separation, and there are two of them. The quantity π<i>d</i><sup>2</sup> is called the <b>collision cross-section</b>."
            },
            {
              "eq": "in time <i>t</i>, at speed <i>v</i>, it sweeps a volume π<i>d</i><sup>2</sup><i>vt</i>, containing <i>n</i>π<i>d</i><sup>2</sup><i>vt</i> molecular centres",
              "why": "With <i>n</i> molecules per unit volume, multiplying the swept volume by the number density counts the centres inside it. Every one of those is a collision, so this is the number of collisions in time <i>t</i>."
            },
            {
              "eq": "mean free path = distance travelled divided by number of collisions: λ = <i>vt</i>/(<i>n</i>π<i>d</i><sup>2</sup><i>vt</i>) = 1/(<i>n</i>π<i>d</i><sup>2</sup>)",
              "why": "Both the time and the speed cancel, which is the first surprise: to this level of approximation the free path does not depend on how fast the molecule is going. It depends only on how crowded the gas is and how big its molecules are."
            },
            {
              "eq": "correct for the fact that <i>all</i> the molecules are moving: <b>λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>)</b>",
              "why": "The simple count above pretended that one molecule moves while the rest stand still. In reality every molecule is moving, so what governs the collision rate is the <b>relative</b> speed between pairs, and averaging the relative speed over a Maxwell distribution multiplies it by √2. A faster approach rate means more collisions and therefore a shorter free path, which is why the √2 lands in the denominator."
            },
            {
              "eq": "substitute <i>n</i> = <i>P</i>/<i>k<sub>B</sub>T</i> from the gas law: <b>λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>)</b>",
              "why": "This is the working form, because a laboratory measures a pressure and a temperature, not a number density. It also makes both dependences explicit at once: at fixed pressure λ grows with temperature, and at fixed temperature λ falls as the pressure rises. Everything a question can ask about how λ responds is read straight off this line."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MEAN FREE PATH",
          "tag": "dilute gas of hard spheres",
          "main": "λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>)",
          "legend": [
            "λ = mean free path in m, dimension [L]",
            "<i>d</i> = molecular diameter in m, so π<i>d</i><sup>2</sup> is the collision cross-section in m<sup>2</sup>, dimensions [L<sup>2</sup>]",
            "<i>n</i> = <i>N</i>/<i>V</i> = number density in /m<sup>3</sup>, dimensions [L<sup>−3</sup>], so 1/(<i>nd</i><sup>2</sup>) has dimension [L] as required",
            "<i>P</i> = pressure in Pa, <i>T</i> = absolute temperature in K, <i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K, and [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>][Θ]/([L<sup>2</sup>][M L<sup>−1</sup> T<sup>−2</sup>]) = [L]"
          ],
          "note": "The dependences, which is what exams actually ask: λ ∝ 1/n, λ ∝ 1/d², λ ∝ T at constant P, and λ ∝ 1/P at constant T. Note what is ABSENT: the molecular mass and the speed. Two gases of the same molecular size at the same P and T have the same mean free path however differently they weigh."
        },
        {
          "t": "p",
          "html": "That √2 deserves a moment, because it is the one factor a student cannot guess. The naive count treats a single molecule as flying through a fixed cloud of stationary targets. In a real gas every target is moving too, so the rate at which our molecule closes on the others is governed not by its own speed but by the <i>relative</i> speed of a pair. Averaging that relative speed over the Maxwell distribution, for two identical molecules, gives exactly √2 times the average speed of one. More closing speed means more collisions in the same time, so the free path shrinks by that same factor and the √2 appears in the denominator. Everything else in the derivation is geometry; this one line is the only place the Maxwell distribution of Topic 04 enters."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COLLISION FREQUENCY AND MEAN FREE TIME",
          "tag": "once lambda is known, these are one line",
          "main": "ν = <i>v</i><sub>av</sub>/λ = √2 π<i>d</i><sup>2</sup><i>n v</i><sub>av</sub><br>τ = 1/ν = λ/<i>v</i><sub>av</sub>",
          "legend": [
            "ν = collision frequency, the number of collisions one molecule suffers per second, in /s, dimension [T<sup>−1</sup>]",
            "τ = mean free time, the average interval between two collisions, in s, dimension [T]",
            "<i>v</i><sub>av</sub> = the average speed from Topic 04, √(8<i>RT</i>/π<i>M</i>), in m/s",
            "λ = mean free path in m, <i>n</i> = number density in /m<sup>3</sup>, <i>d</i> = molecular diameter in m; [L T<sup>−1</sup>]/[L] = [T<sup>−1</sup>], which closes"
          ],
          "note": "This is where all three threads of the chapter meet: v_av comes from the Maxwell distribution, lambda from the collision geometry, and n from the ideal gas law. As pressure rises, lambda falls and nu climbs in exact proportion, so squeezing a gas makes its molecules collide both more often and over shorter flights."
        },
        {
          "t": "defgrid",
          "title": "How lambda and nu respond, and the numbers for air",
          "rows": [
            {
              "k": "λ against number density",
              "v": "λ ∝ 1/<i>n</i>. Twice as many molecules per cubic metre, half the free path"
            },
            {
              "k": "λ against molecular size",
              "v": "λ ∝ 1/<i>d</i><sup>2</sup>. A gas of bigger molecules has a much shorter free path, and the dependence is <b>quadratic</b>"
            },
            {
              "k": "λ at constant pressure",
              "v": "λ ∝ <i>T</i>. Heating at fixed <i>P</i> spreads the gas out, so the free path grows in direct proportion"
            },
            {
              "k": "λ at constant temperature",
              "v": "λ ∝ 1/<i>P</i>. Doubling the pressure halves the free path"
            },
            {
              "k": "λ at constant volume",
              "v": "<b>unchanged.</b> Fixing <i>V</i> fixes <i>n</i>, and λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) never saw <i>T</i> at all. Heating a sealed vessel raises <i>P</i> and <i>T</i> together, and <i>T</i>/<i>P</i> stays put"
            },
            {
              "k": "Nitrogen at 300 K and 10<sup>5</sup> Pa",
              "v": "λ ≈ 6.8 × 10<sup>−8</sup> m with <i>d</i> = 3.7 × 10<sup>−10</sup> m, that is about 180 molecular diameters"
            },
            {
              "k": "Its collision frequency",
              "v": "ν = <i>v</i><sub>av</sub>/λ ≈ 476/6.8 × 10<sup>−8</sup> ≈ 7 × 10<sup>9</sup> /s, seven billion collisions every second"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.12 · WHAT MOVES THE FREE PATH",
          "chips": [
            "against P, at fixed T",
            "against T, at fixed P"
          ],
          "captions": [
            "At fixed temperature lambda is inversely proportional to pressure, so the graph is a rectangular hyperbola: double the pressure and the free path halves, quadruple it and the free path quarters. Pump the gas down towards the left of the graph and lambda climbs without limit, until it reaches the size of the vessel and the molecules stop meeting each other at all. That is the regime a vacuum system is built to reach.",
            "At fixed pressure lambda is directly proportional to absolute temperature, a straight line through the origin. Heating at constant pressure lets the gas expand, thinning it out, so the free runs lengthen in exact proportion to T. Beware the third case, which is not drawn here: at constant VOLUME the number density cannot change, so heating leaves lambda completely unaltered."
          ],
          "frames": [
            {
              "x": [
                0.25,
                5
              ],
              "y": [
                0,
                5
              ],
              "aspect": 0.72,
              "axisX": "pressure P",
              "axisY": "mean free path λ",
              "ticksX": {
                "at": [
                  1,
                  2,
                  3,
                  4,
                  5
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  2,
                  4
                ]
              },
              "curves": [
                {
                  "c": "recip",
                  "a": 1
                }
              ],
              "labels": [
                {
                  "x": 3.1,
                  "y": 2.1,
                  "text": "λ ∝ 1/P"
                }
              ]
            },
            {
              "x": [
                0,
                5
              ],
              "y": [
                0,
                5
              ],
              "aspect": 0.72,
              "axisX": "temperature T (K)",
              "axisY": "mean free path λ",
              "ticksX": {
                "at": [
                  1,
                  2,
                  3,
                  4,
                  5
                ]
              },
              "ticksY": {
                "at": [
                  0,
                  2,
                  4
                ]
              },
              "curves": [
                {
                  "c": "line",
                  "m": 0.85,
                  "k": 0
                }
              ],
              "labels": [
                {
                  "x": 3.4,
                  "y": 1.5,
                  "text": "λ ∝ T"
                }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "The collision cross-section, and why it carries a whole diameter",
          "html": "The quantity π<i>d</i><sup>2</sup> is the <b>collision cross-section</b>, usually written σ, and it is the effective target area one molecule presents to another. It is worth being clear about why it uses the full diameter <i>d</i> and not the radius. A collision occurs when the two <i>centres</i> approach within <i>d</i>, since each sphere contributes <i>d</i>/2 to the gap, so the swept tube has radius <i>d</i> and area π<i>d</i><sup>2</sup>, four times the geometric cross-section π(<i>d</i>/2)<sup>2</sup> of a single molecule. Using the radius by mistake makes every mean free path four times too long. The cross-section is measured in m<sup>2</sup>, dimensions [L<sup>2</sup>], and it is the quantity a physicist actually reports, because it is what experiments on scattering measure directly."
        },
        {
          "t": "p",
          "html": "The mean free path is not merely an abstract average; it is the bridge from the molecular world to bulk properties you can put on a meter. A gas's <b>viscosity</b>, its <b>thermal conductivity</b> and its <b>diffusion coefficient</b> can all be written in terms of λ and the average molecular speed, because each is a matter of some quantity, momentum, energy or molecules themselves, being carried one free path before being handed over in a collision. The scalings that follow are surprising and testable: viscosity and thermal conductivity go as √<i>T</i> and are <b>independent of pressure</b>, because raising the pressure increases the density and shortens the free path in exactly compensating proportion, while the diffusion coefficient goes as <i>T</i><sup>3/2</sup>/<i>P</i>. Historically the logic ran the other way: by measuring viscosity and diffusion in the laboratory and working backwards through these relations, physicists first estimated the sizes of molecules they could not see."
        },
        {
          "t": "proc",
          "title": "Any mean free path numerical, in five moves",
          "steps": [
            "<b>Decide which form you need.</b> Given a number density, use λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>). Given a pressure and a temperature, use λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>) and skip computing <i>n</i> altogether.",
            "<b>Compute the numerator and denominator separately.</b> <i>k<sub>B</sub>T</i> first, then <i>d</i><sup>2</sup>, then multiply by √2 π = 4.443 and by <i>P</i>. Doing it in one keystroke sequence is where powers of ten get lost.",
            "<b>For a change question, use the proportionality and not the formula.</b> λ ∝ <i>T</i>/<i>P</i>, so a new λ is the old one times (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)(<i>P</i><sub>1</sub>/<i>P</i><sub>2</sub>). Nothing else is needed and <i>d</i> never enters.",
            "<b>Watch for constant volume.</b> Fixed <i>V</i> and fixed amount means fixed <i>n</i>, so λ does not change at all, however much you heat it. This is the trap that a pressure-and-temperature form hides.",
            "<b>Finish with the frequency if asked:</b> ν = <i>v</i><sub>av</sub>/λ, where <i>v</i><sub>av</sub> = √(8<i>RT</i>/π<i>M</i>) comes from Topic 04. Expect a few billion per second for ordinary air, and treat anything wildly different as a units bug."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Estimate the mean free path of a nitrogen molecule at 300 K and 1.0 × 10<sup>5</sup> Pa. Take <i>d</i> = 3.7 × 10<sup>−10</sup> m and <i>k<sub>B</sub></i> = 1.38 × 10<sup>−23</sup> J/K.",
          "steps": [
            "Use the pressure-temperature form directly: λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>).",
            "Numerator: <i>k<sub>B</sub>T</i> = 1.38 × 10<sup>−23</sup> × 300 = 4.14 × 10<sup>−21</sup> J.",
            "Denominator: <i>d</i><sup>2</sup> = (3.7 × 10<sup>−10</sup>)<sup>2</sup> = 1.369 × 10<sup>−19</sup> m<sup>2</sup>, and √2 π = 4.443, so √2 π<i>d</i><sup>2</sup><i>P</i> = 4.443 × 1.369 × 10<sup>−19</sup> × 1.0 × 10<sup>5</sup> = 6.08 × 10<sup>−14</sup>.",
            "λ = 4.14 × 10<sup>−21</sup>/6.08 × 10<sup>−14</sup> = 6.8 × 10<sup>−8</sup> m."
          ],
          "ans": "λ ≈ 6.8 × 10<sup>−8</sup> m, about 68 nm. Compare it with the molecule itself: 6.8 × 10<sup>−8</sup>/3.7 × 10<sup>−10</sup> ≈ 180, so a nitrogen molecule flies roughly 180 of its own diameters between collisions. That is the quantitative version of mostly free, occasionally colliding."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A sealed rigid vessel of gas is heated from 300 K to 900 K. By what factor does the mean free path change?",
          "steps": [
            "Reach for the proportionality, not the formula: λ ∝ <i>T</i>/<i>P</i>.",
            "But the vessel is <b>rigid and sealed</b>, so the volume and the number of molecules are both fixed, which fixes the number density <i>n</i>.",
            "λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) contains no temperature at all. Alternatively, at constant volume <i>P</i> ∝ <i>T</i>, so tripling <i>T</i> triples <i>P</i> and the ratio <i>T</i>/<i>P</i> is unchanged."
          ],
          "ans": "The mean free path does not change at all. This is the trap: the form λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>) makes it look as though heating must lengthen the free path, and there will be an option offering a factor of 3. It only lengthens at <b>constant pressure</b>, where the gas is free to expand. The molecules do collide more often when heated, because they move faster, but each free run is exactly as long as before."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For the nitrogen of the first example, λ = 6.8 × 10<sup>−8</sup> m at 300 K, find the collision frequency and the mean time between collisions. Take <i>M</i> = 28 g/mol and <i>R</i> = 8.314 J/mol K.",
          "steps": [
            "First the average speed, from Topic 04: <i>v</i><sub>av</sub> = √(8<i>RT</i>/π<i>M</i>) = √(8 × 8.314 × 300/(π × 0.028)) = √(2.268 × 10<sup>5</sup>) = 476 m/s.",
            "Collision frequency: ν = <i>v</i><sub>av</sub>/λ = 476/(6.8 × 10<sup>−8</sup>).",
            "ν = 7.0 × 10<sup>9</sup> /s.",
            "Mean free time: τ = 1/ν = 1.4 × 10<sup>−10</sup> s."
          ],
          "ans": "About 7 × 10<sup>9</sup> collisions per second, with roughly 1.4 × 10<sup>−10</sup> s between them. Each nitrogen molecule in the air around you suffers about seven billion collisions every second, which is a vivid sense of how furiously busy a seemingly still volume of air really is."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A gas at 300 K and 1.0 × 10<sup>5</sup> Pa is found to have a mean free path of 1.0 × 10<sup>−7</sup> m. Estimate the diameter of its molecules. Then find the pressure at which λ would reach 1.0 m, the sort of vacuum a laboratory calls high.",
          "steps": [
            "Rearrange for the diameter: <i>d</i><sup>2</sup> = <i>k<sub>B</sub>T</i>/(√2 π λ <i>P</i>).",
            "<i>d</i><sup>2</sup> = 4.14 × 10<sup>−21</sup>/(4.443 × 1.0 × 10<sup>−7</sup> × 1.0 × 10<sup>5</sup>) = 4.14 × 10<sup>−21</sup>/(4.443 × 10<sup>−2</sup>) = 9.32 × 10<sup>−20</sup> m<sup>2</sup>.",
            "<i>d</i> = 3.1 × 10<sup>−10</sup> m, about 3.1 Å, comfortably in the expected 1 to 3 Å band.",
            "For the vacuum, use λ ∝ 1/<i>P</i> at fixed <i>T</i>: raising λ from 1.0 × 10<sup>−7</sup> m to 1.0 m is a factor of 10<sup>7</sup>, so the pressure must fall by the same factor.",
            "<i>P</i> = 1.0 × 10<sup>5</sup>/10<sup>7</sup> = 1.0 × 10<sup>−2</sup> Pa."
          ],
          "ans": "<i>d</i> ≈ 3.1 × 10<sup>−10</sup> m, and λ reaches one metre at about 1 × 10<sup>−2</sup> Pa, roughly a ten-millionth of atmospheric pressure. This is exactly how molecular sizes were first estimated: measure a bulk property that depends on λ, invert the relation, and out comes a length no microscope of the period could resolve. It is also why a vacuum chamber has to be pumped so hard, since molecules only stop colliding with each other once λ exceeds the size of the vessel."
        },
        {
          "t": "mcq",
          "q": "At constant temperature, if the pressure of a gas is raised to four times its original value, its mean free path becomes",
          "opts": [
            {
              "label": "4λ",
              "nudge": "This treats λ as directly proportional to P. Higher pressure means a denser gas and more frequent collisions, so the free path must SHRINK, not grow."
            },
            {
              "label": "2λ",
              "nudge": "The direction is wrong and so is the factor. λ falls with pressure, and it falls as 1/P and not as 1/√P."
            },
            {
              "label": "λ/2",
              "nudge": "The direction is right but the factor is wrong: this is the answer for a doubling, or for someone treating the dependence as 1/√P. Quadrupling P divides λ by four."
            },
            {
              "label": "λ/4",
              "nudge": null
            }
          ],
          "correct": 3,
          "solution": "From λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>), at constant <i>T</i> we have λ ∝ 1/<i>P</i>. Quadrupling the pressure divides λ by 4. The physical reading is the check: higher pressure packs more molecules into the same space, so a molecule meets one sooner."
        },
        {
          "t": "mcq",
          "q": "The factor of √2 in λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) accounts for",
          "opts": [
            {
              "label": "the fact that all the molecules are moving, so what matters is the relative speed of a pair",
              "nudge": null
            },
            {
              "label": "the three dimensions of space",
              "nudge": "The three-dimensional factor in this chapter is the one third in the pressure formula, not this. The collision-cylinder argument is already fully three dimensional without it."
            },
            {
              "label": "the two atoms in a diatomic molecule",
              "nudge": "The derivation never mentions atomicity. It works identically for helium and for oxygen, and it depends only on the molecular diameter."
            },
            {
              "label": "the fact that a collision involves two molecules",
              "nudge": "That two molecules take part is already built into the cylinder radius being a full diameter d rather than a radius. The √2 is a separate and later correction."
            }
          ],
          "correct": 0,
          "solution": "The simple count assumed one molecule moving through a cloud of stationary targets. In reality every molecule moves, so the closing rate is governed by the <b>relative</b> speed of a colliding pair, and averaging that over the Maxwell distribution for identical molecules gives √2 times the average speed. A higher closing rate means more collisions and therefore a shorter free path, which is why the √2 sits in the denominator."
        },
        {
          "t": "mcq",
          "q": "Two gases have molecules of the same diameter but different molar masses. They are held at the same pressure and temperature. Their mean free paths are",
          "opts": [
            {
              "label": "in the ratio of their molar masses",
              "nudge": "Look at the formula and hunt for an M or an m. There isn't one: mass enters the collision FREQUENCY through v_av, but never the free path itself."
            },
            {
              "label": "in the ratio of the square roots of their molar masses",
              "nudge": "The square root of the molar mass governs the SPEED, and therefore the collision frequency and the mean free time. The free path is a geometric quantity and does not see it."
            },
            {
              "label": "equal",
              "nudge": null
            },
            {
              "label": "in the inverse ratio of their molar masses",
              "nudge": "Inverting a dependence that does not exist. Write out λ = kBT/(√2 πd²P) and check every symbol against the data given."
            }
          ],
          "correct": 2,
          "solution": "λ = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>) contains no mass at all. At the same <i>P</i> and <i>T</i> the two gases have the same number density, and with the same <i>d</i> they present the same cross-section, so the free paths are equal. What <i>does</i> differ is the collision frequency ν = <i>v</i><sub>av</sub>/λ, since the lighter gas moves faster and so covers its equal free path in less time."
        },
        {
          "t": "mcq",
          "q": "A gas at constant pressure is heated so that its absolute temperature doubles. Its mean free path and its collision frequency respectively",
          "opts": [
            {
              "label": "double and double",
              "nudge": "The free path does double, but the frequency does not. ν = v_av/λ, and v_av rises only by √2 while λ rises by 2, so the frequency FALLS."
            },
            {
              "label": "double and fall by a factor of √2",
              "nudge": null
            },
            {
              "label": "stay the same and rise by √2",
              "nudge": "This is the constant-VOLUME answer. At constant pressure the gas expands and thins out, so λ genuinely grows."
            },
            {
              "label": "halve and double",
              "nudge": "At constant pressure λ is proportional to T, so heating lengthens the free path rather than shortening it."
            }
          ],
          "correct": 1,
          "solution": "At constant pressure λ ∝ <i>T</i>, so doubling <i>T</i> doubles λ. Meanwhile <i>v</i><sub>av</sub> ∝ √<i>T</i> rises only by √2, so ν = <i>v</i><sub>av</sub>/λ changes by √2/2 = 1/√2. The molecules are faster but the gas has thinned out more than enough to compensate, so each one collides <i>less</i> often. This is the kind of two-step question that separates memorising a formula from reading it."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Write the expression for the mean free path of a gas molecule, define every symbol, and state how λ depends on pressure and on temperature.",
              "a": "λ = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>), where <i>d</i> is the molecular diameter, <i>n</i> the number density, <i>P</i> the pressure, <i>T</i> the absolute temperature and <i>k<sub>B</sub></i> the Boltzmann constant. At constant <i>T</i>, λ ∝ 1/<i>P</i>; at constant <i>P</i>, λ ∝ <i>T</i>; and at constant volume λ is unchanged, because <i>n</i> is fixed."
            },
            {
              "q": "[NEET] The mean free path of a gas molecule is λ at pressure <i>P</i> and temperature <i>T</i>. What is it if the pressure is doubled at constant temperature?",
              "a": "λ ∝ 1/<i>P</i> at constant <i>T</i>, so the new mean free path is λ/2."
            },
            {
              "q": "[JEE Main] Oxygen at 300 K has <i>v</i><sub>av</sub> = 446 m/s and a mean free path of 7.1 × 10<sup>−8</sup> m. Find its collision frequency and mean free time.",
              "a": "ν = <i>v</i><sub>av</sub>/λ = 446/(7.1 × 10<sup>−8</sup>) = 6.3 × 10<sup>9</sup> /s, and τ = 1/ν = 1.6 × 10<sup>−10</sup> s. About six billion collisions per second, the usual order for a gas at atmospheric pressure."
            },
            {
              "q": "[JEE Main] Two samples of the same gas are at the same temperature, one at 1 atm and one at 4 atm. Find the ratio of their mean free paths and the ratio of their collision frequencies.",
              "a": "At the same temperature λ ∝ 1/<i>P</i>, so λ<sub>1</sub> : λ<sub>2</sub> = 4 : 1. The average speed is the same in both, since it depends only on <i>T</i> and <i>M</i>, so ν = <i>v</i><sub>av</sub>/λ gives ν<sub>1</sub> : ν<sub>2</sub> = 1 : 4. Compressing the gas fourfold shortens every free flight fourfold and quadruples the collision rate."
            },
            {
              "q": "[JEE Advanced] Estimate the pressure at which the mean free path of nitrogen at 300 K becomes 0.10 m, comparable with the size of a laboratory vacuum chamber. Take <i>d</i> = 3.7 × 10<sup>−10</sup> m.",
              "a": "<i>P</i> = <i>k<sub>B</sub>T</i>/(√2 π<i>d</i><sup>2</sup>λ) = 4.14 × 10<sup>−21</sup>/(4.443 × 1.369 × 10<sup>−19</sup> × 0.10) = 4.14 × 10<sup>−21</sup>/(6.08 × 10<sup>−20</sup>) = 6.8 × 10<sup>−2</sup> Pa. Roughly 7 × 10<sup>−2</sup> Pa, about a millionth of atmospheric pressure. Beyond that point a molecule crosses the chamber without meeting another, and only wall collisions remain."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the radius instead of the diameter in the cross-section.</b> A collision happens when two <i>centres</i> come within <i>d</i>, so the swept cylinder has radius <i>d</i> and area π<i>d</i><sup>2</sup>. Using π(<i>d</i>/2)<sup>2</sup> makes every mean free path four times too long.",
            "<b>Forgetting the √2.</b> Dropping it inflates λ by 41 per cent. It is the correction for every molecule moving, so that what governs the collision rate is the relative speed of a pair, and it belongs in the denominator.",
            "<b>Applying λ ∝ <i>T</i> inside a sealed rigid vessel.</b> At constant <b>volume</b> the number density cannot change, so λ is unaltered by heating: <i>P</i> and <i>T</i> rise together and their ratio is fixed. λ ∝ <i>T</i> holds only at constant <b>pressure</b>.",
            "<b>Leaving a temperature in celsius.</b> λ is directly proportional to the absolute temperature, so a celsius value does not merely shift the answer, it destroys it. At 27 °C the ratio 300/27 is more than eleven.",
            "<b>Confusing the mean free path with the mean spacing.</b> The spacing between neighbours at STP is about 3 × 10<sup>−9</sup> m; the free path is about 7 × 10<sup>−8</sup> m, twenty times larger. A molecule sails past many near-neighbours before it actually strikes one, and questions offer both numbers."
          ]
        },
        {
          "t": "protip",
          "html": "for every change question, throw the formula away and keep one proportionality: λ ∝ T/P. new λ equals old λ times (T<sub>2</sub>/T<sub>1</sub>)(P<sub>1</sub>/P<sub>2</sub>), and the molecular diameter never enters. then ask one extra question before answering: is the volume fixed? if it is, P and T move together and λ does not budge at all, which is the single most common trap in this topic. and carry two anchors: λ ≈ 7 × 10<sup>−8</sup> m and ν ≈ 7 × 10<sup>9</sup> /s for air at room conditions."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "λ = 1/(√2 π d² n) = k_B T/(√2 π d² P)",
              "note": "d is the molecular DIAMETER, and π d² is the collision cross-section"
            },
            {
              "f": "λ ∝ T at fixed P, λ ∝ 1/P at fixed T, unchanged at fixed V",
              "note": "the constant-volume case is the trap: fixed V means fixed n means fixed λ"
            },
            {
              "f": "λ ∝ 1/d², and it does NOT depend on the molecular mass",
              "note": "mass enters only through v_av, and therefore only through the frequency"
            },
            {
              "f": "the √2 is the relative-speed correction",
              "note": "all molecules move, so pairs close faster and collide sooner"
            },
            {
              "f": "ν = v_av/λ, τ = 1/ν = λ/v_av",
              "note": "the one place the Maxwell speed, the collision geometry and the gas law all meet"
            },
            {
              "f": "air at 300 K and 10<sup>5</sup> Pa: λ ≈ 7 × 10<sup>−8</sup> m, ν ≈ 7 × 10<sup>9</sup> /s",
              "note": "about 180 molecular diameters per flight, seven billion flights a second"
            }
          ],
          "aids": [
            "\"squeeze the gas, shrink the path, quicken the collisions\"",
            "\"lambda goes as T over P, and fixed volume means fixed lambda\"",
            "\"a whole diameter in the cross-section, never a radius\""
          ]
        }
      ]
    }
  ]
};

export default phy11KineticTheory;
