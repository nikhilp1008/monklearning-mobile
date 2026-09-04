/**
 * Chapter 13 · Nuclei. Physics, Class 12.
 *
 * Restructured from pages 809 to 858 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-12-atoms.ts, the chapter immediately before this one.
 *
 * FIVE TOPICS FROM FOUR SOURCE SUBTOPICS, SPLIT ONCE. The source carries four
 * subtopics (1 Composition and Size of the Nucleus and Mass-Energy
 * Equivalence, 2 Nuclear Binding Energy and the Binding-Energy Curve and the
 * Nuclear Force, 3 Radioactivity, 4 Nuclear Energy). Four satisfies the
 * reader's gate, and the brief warns against inflating a fifty-page chapter,
 * so only ONE split was taken and it is taken on a seam the source draws for
 * itself. Subtopic 2 splits at its own Section 3.1 / 3.2 boundary:
 *   Section 3.1 is a PROCEDURE, "compute the binding energy and Eb/A", and
 *     everything before it is the arithmetic that procedure needs: the mass
 *     defect, the atomic-mass route, the 931.5 conversion, Examples 1 and 3,
 *     MCQ 4. That is Topic 02. It ends where a student can compute Eb/A for
 *     any nucleus and has done it for helium, oxygen and the deuteron.
 *   Section 3.2 is "reading the BE/A curve, why it has this shape", and
 *     3.3 is the neutron-proton balance. Everything from there on is about
 *     the SHAPE rather than the arithmetic: the curve, the six properties of
 *     the nuclear force, the stability band, Examples 2 and 4, MCQs 1 to 3.
 *     That is Topic 03, and it is where the chapter's most important figure
 *     lives.
 * Subtopic 3 (Radioactivity) was CONSIDERED for a second split, at its own
 * Section 1 / Section 2 boundary, which would have put the three decay modes
 * in one topic and the decay law in another. It was NOT taken. The source
 * gives the decay modes about eight items in total (three paragraphs, the
 * Soddy-Fajans box, one MCQ, one pitfall, two cheat-sheet lines) and gives
 * the decay law three full derivations, four examples, five practice items
 * and three MCQs. A "decay modes" topic would have been half the length of
 * every other topic here and would have had to be padded from the addendum,
 * which the brief forbids. It is one topic, Topic 04, and it is the longest.
 *
 * THE ROUND 2 ADDENDUM (pages 842 to 858: A sequential decay and parent-
 * daughter equilibrium, B the Geiger-Nuttall law, C beta-decay energy balance
 * and electron capture, D the semi-empirical mass formula, E nuclear reaction
 * kinematics and threshold energy) IS NOT A TOPIC, per the brief. It reaches
 * a student in exactly three places below, all of them a single line:
 *   - Topic 03's protip names the liquid-drop / semi-empirical picture as
 *     where the curve's shape comes from quantitatively (Addendum D, Method).
 *   - Topic 04's mistakes item on decay chains names secular equilibrium as
 *     the reason a long-lived parent's daughters all show the SAME activity
 *     (Addendum A, Method).
 *   - Topic 05's protip names threshold energy as the one place where the
 *     energy you must supply is bigger than |Q| (Addendum E, Method).
 * No formula, defgrid, deriv, proc, ex, mcq or practice block below is
 * sourced from the addendum, and NO ADDENDUM NUMBER IS CARRIED ANYWHERE,
 * which matters, because twelve of the ones I checked are wrong or
 * self-contradictory and one of them states a flat physical falsehood.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). NO ENTRY TOUCHES THIS
 * RANGE, confirmed rather than assumed. The Class 12 errata has exactly two
 * entries: Chapter 7 (Alternating Current) page 14, a Practice 5 whose stated
 * drive frequency IS the resonant frequency of its own components; and
 * Chapter 10 (Wave Optics) page 33, thin-film interference with the dark and
 * bright conditions swapped in one sentence. Chapter 13 is not named, and
 * neither entry changes a number, a formula or a claim this chapter uses.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 809 to 858 was recomputed independently, addendum first.
 *
 * THE MAIN BODY (pages 810 to 841) IS CLEAN. Sixteen worked examples, twenty
 * practice answers and sixteen MCQ keys, and every single one recomputes
 * correctly. Checked individually: the radii (3.6 fm for Al-27, 7.44 for
 * U-238 from 238^(1/3) = 6.198, 1.2 fm recovered from Cu-64 at 4.8 fm,
 * A = 125 from R = 6.0 fm); the 1 : 3 radius ratio and 1 : 1 density ratio;
 * the neutron-star radius by BOTH printed routes (M/rho = 1.304 x 10^13 m^3
 * gives R = 1.460 x 10^4 m, and R_0 N^(1/3) with N = 1.807 x 10^57 gives
 * 1.462 x 10^4 m, agreeing to three figures); every mass defect
 * (He-4 0.030377 u, O-16 0.137005 u, deuteron 0.002388 u, Li-7 0.042131 u,
 * D-T 0.018883 u, D-D 0.003510 u) and every energy from them (28.30, 127.6,
 * 2.224, 39.25, 17.59, 3.270 MeV); the 216 MeV from the 240 -> 2 x 120 split;
 * the 23.8 MeV from two deuterons fusing; the radon numbers (2.713 x 10^18
 * atoms, lambda = 2.111 x 10^-6 s^-1, 5.73 x 10^12 Bq, 155 Ci); the carbon
 * date (4224 yr); the reactor arithmetic (9.375 x 10^18 fissions per second,
 * 316 g per day); the star's 6 x 10^11 kg/s of hydrogen; and all four
 * isotope/isobar/isotone pairs. Two soft items only:
 *
 *   1. SOFT, page 811 and page 816. The source rounds 1 u to 1.660539 x
 *      10^-27 kg in the definition and then uses the mean nucleon mass
 *      1.66 x 10^-27 kg for the density. Both are right for what they are
 *      doing, but a student who uses the proton mass 1.6726 x 10^-27 kg
 *      instead gets rho = 2.31 x 10^17 rather than 2.29 x 10^17, and the
 *      printed 2.3 x 10^17 covers both. Topic 01 says which mass it is using
 *      and why the answer is quoted to two figures.
 *   2. SOFT, page 816. Example 3 gives U-238 a nuclear radius of 7.44 fm and
 *      Chapter 12's own practice gave gold 6.98 fm from the same formula.
 *      Both are R = 1.2 A^(1/3) and both are right; recorded only because
 *      Topic 01's figure plots the two on one curve and a reader checking
 *      the figure against Chapter 12 will want to know they agree
 *      deliberately.
 *
 * THE ADDENDUM IS NOT CLEAN, exactly as the brief predicted. Twelve faults,
 * recorded with their working even though not one is carried into a block.
 *
 *   A1. ADDENDUM C, Method (page 849): THE BETA-DECAY EQUATIONS ARE PRINTED
 *       BACKWARDS. Printed: "Beta-minus decay. p -> n + e+ + nu_e" and
 *       "Beta-plus decay. n -> p + e- + antinu_e". Both are exactly the wrong
 *       way round. Beta-minus is a NEUTRON turning into a proton,
 *       n -> p + e- + antinu_e, and beta-plus is a PROTON turning into a
 *       neutron, p -> n + e+ + nu_e. The chapter's OWN main body has it right
 *       (page 833, MCQ Q3: "A neutron converts to a proton
 *       (n -> p + e- + antinu)"), and the Q-value formulas printed directly
 *       under the wrong equations are also right, so the fault is confined to
 *       those two lines. Topic 04 states the correct pair and its mistakes
 *       item makes a student check the charge balance, which catches it.
 *   A2. ADDENDUM C, Method and Practice 2 (pages 849 and 851): THE 1.022 MeV
 *       THRESHOLD IS DOUBLE-COUNTED, AND IT PRODUCES A FALSE STATEMENT ABOUT
 *       A REAL ISOTOPE. Printed: "If Q_beta+ < 1.022 MeV, positron emission
 *       is energetically forbidden." But the printed Q_beta+ ALREADY has
 *       2 m_e c^2 subtracted: Q_beta+ = [m(X) - m(Y) - 2 m_e] c^2. So the
 *       condition for beta-plus to be allowed is simply Q_beta+ > 0, and
 *       testing it against 1.022 MeV a second time subtracts the positron
 *       cost twice. Working, on the source's own Practice 2: for C-11,
 *       Delta-m = 11.011434 - 11.009305 - 2(0.000549) = 0.001031 u, so
 *       Q_beta+ = 0.001031 x 931.5 = 0.961 MeV, which is POSITIVE and
 *       therefore ALLOWED. The printed answer says "0.961 < 1.022, so beta+
 *       is forbidden", which is false: carbon-11 is one of the standard
 *       positron emitters used in PET imaging and its measured maximum
 *       positron energy is 0.96 MeV, the very number the source just
 *       computed. CORRECT ANSWER: beta-plus IS allowed, Q_beta+ = 0.96 MeV.
 *       The same double-count sits in Example C.1 but happens to reach the
 *       right verdict there, since 1.198 MeV clears both the true test and
 *       the false one.
 *   A3. ADDENDUM A, Example A.2 Step 2 (page 844): the algebra is abandoned
 *       mid-line ("That calculation was wrong, cancel carefully"), restarted,
 *       and the restart lands on the wrong side. Printed:
 *       e^(-(lambda_Y - lambda_X) t) = (2 lambda_X - lambda_Y)/lambda_Y,
 *       then "substituting numbers this is negative, so R_Y never equals R_X".
 *       Working: from (lambda_Y/(lambda_Y - lambda_X))(1 - e^(-(lambda_Y -
 *       lambda_X)t)) = 1 the right-hand side is lambda_X/lambda_Y, not
 *       (2 lambda_X - lambda_Y)/lambda_Y. With lambda_X/lambda_Y = 0.2 a
 *       solution exists, and it is t = ln(lambda_Y/lambda_X)/(lambda_Y -
 *       lambda_X) = ln 5/0.2772 = 5.80 h, which is EXACTLY the t_max the
 *       example's own Step 3 computes. The daughter activity crosses the
 *       parent's precisely at its own maximum, always, and the source says
 *       the opposite. CORRECT: R_Y = R_X at t = 5.8 h.
 *   A4. ADDENDUM A, Example A.2 Step 4 (page 844): a dropped factor.
 *       Printed R_Y,max = R_X(0) x 1.25 x 0.663 = 0.83 R_X(0). Working: the
 *       maximum is R_X(0) e^(-lambda_X t_max) x (lambda_Y/(lambda_Y -
 *       lambda_X)) x (1 - e^(-(lambda_Y - lambda_X) t_max)) = R_X(0) x 0.669
 *       x 1.25 x 0.8, and the third factor is missing from the printed line.
 *       CORRECT ANSWER 0.67 R_X(0), which is also forced by A3: if the two
 *       activities are equal at t_max then R_Y,max = R_X(t_max) = 0.669
 *       R_X(0) with no further arithmetic at all.
 *   A5. ADDENDUM A, Practice 5 (page 845): the stated condition contradicts
 *       the question. The question says the parent's half-life is much
 *       LONGER than the daughter's; the answer opens "For lambda_1 much
 *       greater than lambda_2 (parent much shorter-lived than daughter)".
 *       The result N_2/N_1 = lambda_1/lambda_2 = T_2/T_1 is correct and is
 *       the secular-equilibrium result, which needs lambda_1 much LESS than
 *       lambda_2. The inequality is printed the wrong way round.
 *   A6. ADDENDUM B, Example B.1 (pages 846 to 847): a leaked draft line and a
 *       wrong diagnosis. The example's heading carries the stray sentence
 *       "0 0 gamma decay is not real", which belongs to nothing on the page.
 *       Then Step 3 approximates K_alpha = Q_alpha, Step 4 adds the recoil on
 *       top, the sum overshoots Q, and the source writes "Something is off.
 *       The discrepancy arises because the given Ra mass is atomic while the
 *       decay involves nuclear masses." That diagnosis is wrong. Atomic
 *       masses are exactly right for an alpha Q-value: the parent has Z
 *       electrons and the daughter plus the helium atom have (Z - 2) + 2 = Z
 *       between them, so they cancel identically. The real error is
 *       double-counting: K_alpha is Q x M_daughter/(M_daughter + M_alpha),
 *       not Q. The correction the source then makes is right
 *       (K_alpha = 4.94 x 222/226 = 4.85 MeV), it just names the wrong cause.
 *       Also Q = 0.005297 x 931.5 = 4.934 MeV, printed as 4.937.
 *   A7. ADDENDUM B, Example B.2 (page 847): a rounding that moves both
 *       constants by four per cent. Printed b = 6.30/0.024 = 262.5 and
 *       a = 103.15. Working: 1/sqrt(8.78) = 0.33748 and 1/sqrt(7.69) =
 *       0.36062, so the coefficient is 0.02314, not 0.024, and
 *       b = 6.305/0.02314 = 272.5, a = 14.653 + 0.33748 x 272.5 = 106.6.
 *       CORRECT a = 107, b = 272 MeV^(1/2). The conclusion (the law is a poor
 *       extrapolator) survives either way: with the corrected constants
 *       Po-210 comes out at 26 h against a measured 138 days, versus the
 *       printed 13.5 h.
 *   A8. ADDENDUM C, Practice 4 (page 851): a mass in the wrong units, and the
 *       answer is a thousand times too large. Printed "K_daughter =
 *       (1)^2/(2 x 64) = 0.008 MeV = 8 keV". Working: the denominator is
 *       2 M_d c^2, and M_d c^2 for A = 64 is 64 x 931.5 = 59,600 MeV, not 64.
 *       So K_d = 1.022/(2 x 59,600) = 8.6 x 10^-6 MeV = 8.6 eV. CORRECT
 *       ANSWER about 9 eV. The conclusion ("negligible") holds three orders
 *       of magnitude more strongly than the source claims.
 *   A9. ADDENDUM D, Example D.1 Step 5 and Practice 2 (pages 852 to 854):
 *       two independent slips in the same formula. (a) Printed
 *       "120^(3/4) = (120^(1/3))^(3/2) = 4.93^1.5 = 10.9". But
 *       (120^(1/3))^(3/2) is 120^(1/2), which is indeed 10.95 and is NOT
 *       120^(3/4). The true value is 120^(0.75) = 36.25, so the pairing term
 *       is 34/36.25 = 0.94 MeV, not 3.1 MeV, and the total becomes
 *       B = 1018.3 MeV, B/A = 8.49 MeV. The example's headline agreement with
 *       the measured 8.50 MeV survives, and is in fact slightly better.
 *       (b) Practice 2 writes the Coulomb term for O-16 as
 *       "0.711(8^2)/16^(1/3)" and then evaluates it as "0.711(4) = 2.84",
 *       which has divided 64 by 16 instead of by 16^(1/3) = 2.52. The right
 *       value is 0.711 x 25.40 = 18.06 MeV, so B = 252 - 113.0 - 18.06 +
 *       4.25 = 125.2 MeV and B/A = 7.82 MeV. The printed conclusion, "the
 *       SEMF OVERestimates by about 0.8 MeV because O-16 is doubly magic",
 *       is then wrong in direction as well as size: the corrected formula
 *       UNDERestimates the measured 7.98 MeV by 0.16 MeV.
 *   A10. ADDENDUM E, Method (page 855): three forms of one formula, two of
 *       them wrong. Printed "T_th = -Q (m_Y + m_y)/(m_Y + m_y - m_X) =
 *       -Q m_products/m_target", and then two lines later "T_th =
 *       -Q (M + m)/M". The last is the correct non-relativistic threshold,
 *       T_th = |Q| (m_target + m_projectile)/m_target. The middle expression
 *       is not equal to it and is not equal to anything: on the source's own
 *       Li + p example it gives 8.0256/1.0096 = 7.95, so T_th = 13.1 MeV
 *       instead of 1.89 MeV. The worked example itself uses
 *       (m_Y + m_y)/m_X, which agrees with the correct form to within Q/c^2
 *       and returns the right 1.89 MeV.
 *   A11. ADDENDUM E, Practice 4 (page 857): a threshold computed for a
 *       reaction that has none. The question asks for the threshold energy of
 *       D + D -> He-3 + n "given Q = 3.27 MeV". Q is POSITIVE, so the
 *       reaction is exoergic and needs no threshold at all; the addendum's
 *       own Method box says the threshold formula is for Q < 0. The printed
 *       answer applies it anyway and reports 6.54 MeV. CORRECT ANSWER: there
 *       is no threshold; the reaction is exoergic and releases 3.27 MeV.
 *       (The 6.54 MeV it computes is the threshold the reaction WOULD have
 *       if Q were -3.27 MeV.)
 *   A12. ADDENDUM A, Practice 3 (page 845), a contradiction rather than a
 *       number. The answer correctly computes t_max = 60 min for a 30-minute
 *       parent feeding a 60-minute daughter, and then appends "(Parent
 *       half-life is shorter here, so transient equilibrium applies with peak
 *       at t goes to infinity)", which contradicts the 60 minutes it just
 *       obtained. The 60 minutes is right; the parenthesis is not.
 *
 * SOURCE DAMAGE. Pages 809 to 858 have their own dialect, milder than the
 * Atoms range's. Every passage below was re-authored from context, never
 * transcribed. What this range actually had, checked rather than assumed,
 * over 95,162 extracted characters:
 *
 *   - GREEK AND ITALIC SURVIVE AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), which draws as blank boxes on device and which
 *     validate-chapters rejects outright. 2,342 instances across 43 distinct
 *     code points, and they are the chapter's entire symbol vocabulary:
 *     math-italic A (258), m (185), N (127), Z (111), R (110), Q (110), a, T,
 *     t, e, E, X, Y, b, c, B, n, M, K, p, d, k, s, v, L, and the Greek lambda
 *     (201), alpha (63), beta (60), tau (21), gamma (14), nu (12), pi (11),
 *     delta (10), rho (5), mu (5). Every symbol below is retyped as an
 *     ordinary character inside <i> tags and every Greek letter as its plain
 *     Unicode form. Note that lambda alone accounts for 201 of them, all in
 *     Subtopic 3, so a transcription that missed this dialect would have lost
 *     the decay constant from every formula in the topic.
 *   - THE TOKEN FAMILY, PARTIALLY, AND ONE NEW MEMBER. "\n7" for the minus
 *     sign, 14 instances, all inside displayed formulas and cheat-sheet
 *     boxes. "\nN" for the multiplication sign, 19. "\nC" for the colon, 9,
 *     all of them the colon in a ratio ("1 \nC 27") or the label colon in the
 *     Soddy-Fajans box ("alpha \nC"). "\tF" for the CLOSING SQUARE BRACKET,
 *     2 instances, both in the mass-defect definition, so the source prints
 *     "Delta-m = [Z m_p + (A - Z) m_n \tF - M_nucleus" with an opening
 *     bracket and no closing one. That is the same class of damage Atoms
 *     logged as "\tV" and it is a different token here. NEW: "\n_" for the
 *     EXCITATION ASTERISK, 1 instance, in the gamma-decay line of the
 *     Soddy-Fajans box, where "X\n_ -> X + gamma" should read "X* -> X +
 *     gamma". A transcriber who dropped it would have printed gamma decay as
 *     a nucleus decaying to itself. Checked for and ABSENT: "\nA" (centred
 *     dot), "\nK" (degree), "\nH" (ellipsis), "\tV", 0 each. 371 of the
 *     range's minus signs and 197 of its multiplication signs extract
 *     correctly, so the token dialect is a localised font fallback rather
 *     than a whole-range substitution.
 *   - WINGDINGS TICKS DO NOT APPEAR AS BARE DIGITS IN THIS RANGE, and this
 *     was checked explicitly and by hand because the brief flagged it as the
 *     most dangerous artefact found so far and because this chapter is made
 *     of mass numbers and atomic numbers. There are exactly four tick marks
 *     in pages 809 to 858 and all four extract as REAL U+2713 CHECK MARK:
 *     page 813 (the dimensional check on E = mc^2), page 816 (the sanity
 *     check on the U-238 rest energy), page 817 (MCQ Q4's isotone check) and
 *     page 824 (Example 2's "energy is released" check). Every other trailing
 *     digit in the range was inspected in context ("= 3", "= 8, 3",
 *     "= 3.26 x 10^-7", "= 23.7", "= 17.8 x 120^(2/3)", "= m(7") and every
 *     one is arithmetic. No stray digit is carried into any block below.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     nuclide symbol arrives as three separate lines (mass number, atomic
 *     number, element), every power of ten breaks in two, and every E_b,
 *     T_1/2, N_0, R_0, m_n and lambda_1 splits from its subscript. The
 *     five-line arrival of a single nuclide is the reason the isotope /
 *     isobar / isotone pairs were re-derived from Z and N below rather than
 *     copied: "40 18 Ar and 40 20 Ca" is six tokens with no structure.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout. "nu-clear
 *     radius relation", "nucleardensity is independent of mass number",
 *     "the fissile fraction", "thePaschen", "3.6fm", "200MeV", "931.5MeV",
 *     "isotopes/isobars/isotones", "Correct: (c).", and the entire
 *     Exam Relevance box of each subtopic arrives as one unbroken run.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: the fi/fl LIGATURE
 *     DELETION that other ranges logged (0; "fission" 59, "fusion" 36,
 *     "first" 5, "find" 17, "difference" 11 and "specific" 1 all read
 *     correctly, and there is not one instance of "ssion", "usion", "rst",
 *     "nd", "dierence" or "specic"); U+FB00 to U+FB06 ligature code points
 *     (0 each); octal escapes of the \050 kind (0); leaked LaTeX delimiters
 *     (0 of "\(", "\[" or "$"); HTML entities (0); U+20D7 combining arrow
 *     (0, and no vector notation is needed anywhere in this chapter); and the
 *     ASCII heading shifts of +29, -29 and +46 (0; all 64 "Section N:"
 *     headings and all 8 "Cheat Sheet Box" headings read correctly).
 *   - NO DEGREE SIGN OF ANY KIND, and none is needed: 0 instances of U+00B0
 *     and 0 of U+2218 across fifty pages, because this is the one Class 12
 *     physics chapter with no angles in it.
 *   - ONE OUT-OF-ORDER HEADING, page 836: the subtopic's "Section 2: Key
 *     Formulas and Definitions" heading extracts with its number missing, as
 *     a bare " Section 2: ...", where every other one in the chapter carries
 *     its "4.2". Cosmetic, and recorded only because a script counting
 *     headings by their numbers would miss one.
 *   - NO SILENTLY EMPTY PAGES. Every page from 809 to 858 was measured for
 *     extracted length before any of it was read. The shortest are 858 (110
 *     characters, the addendum's last half-line), 829 (330), 815 (342), 823
 *     (416), 837 (438), 812 (442) and 821 (512), and every one of those six
 *     short middle pages is a "CHAPTER 13 FIGURES" page carrying one figure
 *     caption and nothing else. No run of blank pages exists anywhere in the
 *     range, so no pdftoppm render was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T. Twenty-two
 * lines checked, twenty-two consistent, none rejected. There is no current
 * anywhere in this chapter, which is why the ledger is shorter than Atoms'.
 *
 *   T1  R = R_0 A^(1/3): A is a nucleon COUNT and dimensionless, so the
 *       cube root cannot change dimensions and [R] = [R_0] = [L]. OK, and
 *       this is the check that R_0 must be a length, which is what makes
 *       "1.2 fm" the whole content of the constant.
 *       V = (4/3) pi R^3: [L^3]. OK.
 *       rho = A m_N/((4/3) pi R_0^3 A) = m_N/((4/3) pi R_0^3): [M]/[L^3]
 *       = [M L-3]. OK, and A cancels as a pure number on both sides, which
 *       is exactly the physics the derivation is making.
 *       E = m c^2: [M][L T-1]^2 = [M L2 T-2] = J. OK. The source checks this
 *       one itself on page 813 and its tick is the only dimensional check it
 *       prints.
 *       1 u -> 931.5 MeV: a mass equated to an energy divided by c^2, so the
 *       statement is 1 u = 931.5 MeV/c^2 and the "MeV" form is shorthand.
 *       Written as MeV/c^2 in every legend below for exactly this reason.
 *   T2  Delta-m = [Z m_H + (A - Z) m_n] - M_atom: Z and A are counts, so
 *       every term is [M]. OK.
 *       E_b = Delta-m c^2: [M L2 T-2]. OK, same as E = mc^2.
 *       E_b/A: [M L2 T-2] divided by a pure number, still an energy. OK,
 *       and this is why "MeV per nucleon" is an energy and not an energy
 *       density.
 *   T3  E_released = BE(products) - BE(reactants): an energy minus an
 *       energy, [M L2 T-2]. OK, and it is the one formula in the chapter
 *       that needs NO mass at all.
 *       U(r) for the nuclear force: [M L2 T-2] at every r. OK.
 *   T4  dN/dt = -lambda N: N is a count, so [T-1] = [lambda][1] and
 *       [lambda] = [T-1]. OK, and this is the check that lambda is a
 *       probability PER SECOND rather than a probability.
 *       N = N_0 e^(-lambda t): the exponent lambda t is [T-1][T] = 1, which
 *       it must be, since an exponential of a dimensioned quantity is
 *       meaningless. OK, and this is the single most useful dimensional
 *       check in the topic.
 *       T_1/2 = ln 2/lambda: ln 2 is a pure number, so [1]/[T-1] = [T]. OK.
 *       tau = 1/lambda: [T]. OK, so half-life and mean life are the same
 *       kind of thing and CAN be compared, which is what makes tau = 1.44
 *       T_1/2 a meaningful statement.
 *       R = lambda N: [T-1] times a count = [T-1] = becquerel. OK. Note
 *       lambda and R have the SAME dimensions and are not the same quantity;
 *       one is per nucleus, the other is for the whole sample.
 *       tau = integral of t lambda e^(-lambda t) dt from 0 to infinity:
 *       [T][T-1][T] = [T]. OK.
 *       A and Z balance in a decay equation: both pure counts, and the
 *       balance is an identity between integers, not a dimensional
 *       statement. Recorded so nobody looks for one.
 *   T5  Q = (sum m_reactants - sum m_products) c^2: [M][L2 T-2]. OK.
 *       N = (m/M) N_A: [M]/[M mol-1] x [mol-1] = a pure count. OK, and this
 *       is the check that catches a student who forgets to divide by the
 *       molar mass, since m N_A alone comes out as [M mol-1] and is nothing.
 *       Fission rate = P/E_per_fission: [M L2 T-3]/[M L2 T-2] = [T-1]. OK,
 *       a number per second, which is what a rate must be.
 *       k, the multiplication factor: neutrons out over neutrons in, a pure
 *       number. OK, which is why k = 1 is a statement about counting and not
 *       about energy.
 *       Coulomb barrier U = e^2/(4 pi eps0 r): Chapter 12's group [M L3 T-2]
 *       divided by [L] = [M L2 T-2] = J. OK, and it is quoted from Chapter
 *       12 rather than re-derived.
 *
 * THE THREE WORKHORSE NUMBERS, DERIVED RATHER THAN QUOTED, because a student
 * who has only been told 931.5 and 2.3 x 10^17 cannot check anything.
 *
 *   1 u = 931.5 MeV/c^2, DERIVED, and the derivation is Topic 01's `deriv`.
 *     E = (1.66054 x 10^-27)(2.99792 x 10^8)^2
 *       = (1.66054 x 10^-27)(8.98755 x 10^16)
 *       = 1.49242 x 10^-10 J.
 *     In MeV: 1.49242 x 10^-10/1.602177 x 10^-13 = 931.49 MeV.
 *   So the printed 931.5 is right to four figures. WITH THE ROUNDED
 *   CLASSROOM CONSTANTS (u = 1.66 x 10^-27, c = 3 x 10^8, e = 1.6 x 10^-19)
 *   the same expression returns 1.494 x 10^-10 J and 933.75 MeV, which is
 *   0.24 per cent high. This is the identical situation Chapter 11 recorded
 *   for hc (1240 true, 1243 from rounded constants) and Chapter 12 recorded
 *   for a_0, and it is worth stating in the same words: 931.5 is the true
 *   value and 933.75 is our rounding of u, c and e. Topic 01 says so.
 *   NUCLEAR DENSITY rho = 2.3 x 10^17 kg/m^3, DERIVED, Topic 01's second
 *   `deriv`.
 *     rho = m_N/((4/3) pi R_0^3)
 *         = 1.66 x 10^-27/((4/3) pi (1.2 x 10^-15)^3)
 *         = 1.66 x 10^-27/(4.18879 x 1.728 x 10^-45)
 *         = 1.66 x 10^-27/7.2382 x 10^-45
 *         = 2.293 x 10^17 kg/m^3.
 *   Two figures, 2.3 x 10^17, and the third figure is not defensible because
 *   R_0 itself is only known to 1.1 to 1.3 fm. Quoted to two everywhere.
 *   hbar c = 197 MeV fm, DERIVED FROM CHAPTER 11's OWN CONSTANT rather than
 *   introduced. Chapter 11's header states hc = 1240 eV nm and points out
 *   that the same number reads hc = 1240 MeV fm, since 1 eV nm = 10^6 eV x
 *   10^-15 m = 1 MeV fm exactly. Then hbar c = hc/(2 pi) = 1240/6.2832
 *   = 197.4 MeV fm, and the CODATA value is 197.327. Topic 02's protip uses
 *   this for the confinement argument and names Chapter 11 for the constant.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   THE BINDING-ENERGY CURVE PEAKS AT 8.8 MeV NEAR IRON AND IS 7.6 MeV AT
 *   URANIUM, and Figure 13.3 below is plotted from measured Eb/A values, not
 *   sketched: (4, 7.07), (12, 7.68), (16, 7.98), (40, 8.55), (56, 8.79),
 *   (62, 8.79), (120, 8.50), (200, 7.91), (238, 7.57). The peak really is
 *   broad and really does sit at nickel-62 a hair above iron-56, which is
 *   why the caption says "the iron region" rather than "iron".
 *   A FISSION OF U-235 RELEASES ABOUT 200 MeV, and this is the check that
 *   catches a wrong Q. From the curve: 235 nucleons climbing from 7.59 to
 *   about 8.5 MeV each gives 235 x 0.91 = 214 MeV, and the measured average
 *   is 200 MeV once the neutrinos are excluded. The source's own Example 4
 *   (A = 240 splitting into two 120s, 7.6 to 8.5) gives 216 MeV, which is
 *   the same arithmetic and lands in the same place. Every fission number
 *   below was checked against 200 MeV.
 *   THE DEUTERON'S BINDING ENERGY IS 2.22 MeV, computed below from
 *   1.007825 + 1.008665 - 2.014102 = 0.002388 u, and its Eb/A of 1.11 MeV is
 *   the lowest of any bound nucleus. It is the anchor for "the left end of
 *   the curve really is that low".
 *   NUCLEAR DENSITY IS 2.3 x 10^17 kg/m^3 FOR EVERY NUCLEUS, derived above,
 *   and the ratio to a whole hydrogen atom (one proton in a sphere of radius
 *   0.53 Angstrom, Chapter 12's Bohr radius) is 2.293 x 10^17/2682 = 8.6 x
 *   10^13, so about 10^14. Topic 01's practice 5 makes a student compute it,
 *   and the answer is the reason the stadium image at the top of the topic
 *   is not an exaggeration.
 *   NUCLEAR SIZES ARE FEMTOMETRES, and Chapter 12's own bounds agree: its
 *   closest-approach ruler puts a 7.7 MeV alpha 3.0 x 10^-14 m from a gold
 *   nucleus whose radius R = 1.2 A^(1/3) fm makes 6.98 fm, so the alpha turns
 *   round about four radii short. Topic 01's figure plots Al-27 at 3.6 fm and
 *   Au-197 at 7.0 fm on the same curve, which are Chapter 12's two numbers
 *   exactly.
 *   CONFINEMENT SETS THE ENERGY SCALE. Chapter 11's uncertainty rule, "about
 *   1 eV for an electron in 1 Angstrom", scales to a nucleon in a nucleus in
 *   one substitution: with Delta-x about 5 fm, (Delta-p) c = hbar c/(2
 *   Delta-x) = 197/10 = 20 MeV, and K = (pc)^2/(2 m_n c^2) = 400/(2 x 940)
 *   = 0.21 MeV. So a nucleon costs hundreds of keV just to be locked up, and
 *   binding energies of 8 MeV per nucleon are comfortably above that. That
 *   is the whole reason nuclear energies are MeV where atomic energies are
 *   eV, and it is one substitution rather than a new idea.
 *   THE SUN BURNS 6 x 10^11 kg OF HYDROGEN PER SECOND. From the source's
 *   Practice 5: 4 x 10^26 W divided by 26.7 MeV = 4.27 x 10^-12 J per cycle
 *   gives 9.4 x 10^37 cycles per second, each consuming 4 m_H = 6.7 x 10^-27
 *   kg, so 6.3 x 10^11 kg/s. The measured figure is about 6 x 10^11 kg/s.
 *   And the p-p cycle's 26.7 MeV is itself checkable: 4 m(H) - m(He-4)
 *   = 4(1.007825) - 4.002603 = 0.028697 u, times 931.5 = 26.73 MeV.
 *   ONE PLACE THE SOURCE'S REASONING DOES NOT SURVIVE ITS OWN NUMBERS, and
 *   Topic 05 corrects it in prose rather than silently. Page 838 says fusion
 *   needs "temperatures of order 10^7 K, where thermal kinetic energies
 *   become comparable to the barrier". They do not become comparable. The
 *   Coulomb barrier for two deuterons meeting at 4 fm, from Chapter 12's own
 *   grouped constant, is U = 2.304 x 10^-28/4 x 10^-15 = 5.75 x 10^-14 J
 *   = 0.36 MeV, while kT at the Sun's core temperature of 1.5 x 10^7 K is
 *   1.38 x 10^-23 x 1.5 x 10^7 = 2.07 x 10^-16 J = 1.3 keV. That is 280
 *   times too small, and a barrier-height argument would demand 4 x 10^9 K.
 *   The gap is closed by quantum tunnelling plus the high-energy tail of the
 *   Maxwell distribution, and Topic 05 says so. The 10^7 K figure is right;
 *   the reason given for it is not.
 *
 * LIMITING CASES, used where they teach something.
 *   THE DECAY LAW AT t = 0 AND AT ONE HALF-LIFE. N = N_0 e^(-lambda t) gives
 *   N = N_0 at t = 0, which is the initial condition the integration was
 *   given, so the formula reproduces its own starting point. At
 *   t = T_1/2 = ln2/lambda the exponent is -ln 2 and N = N_0/2 exactly, by
 *   construction. Both are checked in Topic 04's deriv, because a student who
 *   cannot reproduce those two cannot trust the third.
 *   ACTIVITY AND NUMBER FALL WITH THE SAME CONSTANT. R = lambda N and lambda
 *   is a constant, so R/R_0 = N/N_0 at every instant and both are
 *   e^(-lambda t). This is why the carbon-dating example may use an activity
 *   ratio where the physics is a nucleus ratio, and Topic 04 states it as a
 *   licence rather than leaving it implicit.
 *   AS n GROWS, THE HALVING LADDER. After n whole half-lives N = N_0/2^n,
 *   and the ladder 1/2, 1/4, 1/8, 1/16, 1/32 against n = 1, 2, 3, 4, 5 turns
 *   four of the source's six numerical decay problems into mental
 *   arithmetic. It fails the moment t is not a whole multiple of T_1/2,
 *   which is the source's own pitfall 2 and which Topic 04 keeps.
 *   THE MASS DEFECT AS A FRACTION. For helium-4 it is 0.030377/4.032980
 *   = 0.75 per cent, and that tiny fraction is 28.3 MeV. Figure 13.2 draws
 *   the two bars to true scale for exactly this reason: at true scale the
 *   gap is 1.8 pixels wide, which is the point, and the second chip
 *   magnifies the mass axis a hundredfold to show it.
 *   R = R_0 A^(1/3) AT A = 1. The formula gives 1.2 fm for a single proton,
 *   and the measured proton charge radius is 0.84 fm. Recorded because a
 *   student will try it: the formula is a fit to MEDIUM AND HEAVY nuclei and
 *   is not meant to survive down to one nucleon. Topic 01's mistakes item
 *   says so.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-12-12-atoms.ts, THE CHAPTER IMMEDIATELY BEFORE THIS ONE, complete
 *     at 2,731 lines with five topics, and it wrote this chapter a handover.
 *     Four things are quoted from it and none is rebuilt:
 *       * THE DISTANCE OF CLOSEST APPROACH, d = 2 Z e^2/(4 pi eps0 K), with
 *         its reading d proportional to zZ/K. Topic 05 uses it for the
 *         Coulomb barrier between two fusing nuclei, which is the same
 *         calculation run in the other direction: Atoms asks how close an
 *         alpha gets, this chapter asks how much energy is needed to get
 *         close enough. The `deriv` names the chapter and does not re-derive
 *         the formula.
 *       * THE GROUPED CONSTANT (9 x 10^9)(1.6 x 10^-19)^2 = 2.304 x 10^-28
 *         in SI units, from Atoms' Topic 01 protip. Topic 05's barrier
 *         arithmetic is one division by it.
 *       * R = 1.2 A^(1/3) fm, WITH ALUMINIUM AT 3.6 fm AND GOLD AT 7.0 fm.
 *         Atoms states the formula and uses both numbers (its Topic 01
 *         practice 4 and its own SOFT correction 1 both turn on the gold
 *         radius). This chapter OWNS the formula, derives it from constant
 *         density, and plots Atoms' two numbers on the curve so the two
 *         chapters visibly agree. Topic 01's figure caption says so.
 *       * THE NEGATIVE-ENERGY-MEANS-BOUND CONVENTION, with its zero at
 *         infinite separation. Topic 01's sign `defgrid` and Topic 03's
 *         nuclear-potential figure both use it and both name Chapter 12.
 *       * 1 MeV = 1.6 x 10^-13 J, from Atoms' Topic 01 snapshot. Used
 *         throughout and stated once.
 *   - phy-12-11-dual-nature.ts, complete at 2,119 lines with four topics, and
 *     its own header lists what Nuclei may take. Three things are quoted:
 *       * hc = 1240 eV nm, DERIVED there with its rounding accounted for,
 *         and its header's own observation that the identical number reads
 *         hc = 1240 MeV fm in nuclear units. Topic 02's protip uses that
 *         restatement to get hbar c = 197 MeV fm in one line.
 *       * THE PHOTON: E = h nu, zero rest mass, emitted and absorbed in
 *         lumps. Topic 04's account of gamma decay uses it and names the
 *         chapter; nothing about the photon is reintroduced.
 *       * THE UNCERTAINTY PRINCIPLE, Delta-x Delta-p >= hbar/2, with the
 *         reading "about 1 eV per Angstrom of confinement". Its header says
 *         outright that Nuclei can scale this to 10^-14 m in one
 *         substitution, and Topic 02's protip is that one substitution: 5 fm
 *         of confinement costs a nucleon about 0.2 MeV. Nothing is
 *         re-derived.
 *   - phy-11-01-units-measurements.ts: order-of-magnitude estimation and
 *     significant figures. Topic 01's neutron-star example is one estimate
 *     carried through four steps and quotes two figures throughout, which is
 *     that chapter's rule, not a new one.
 *   - phy-11-11-thermodynamics.ts and phy-11-12-kinetic-theory.ts: the
 *     thermal energy of a particle at temperature T, of order kT. Topic 05's
 *     correction to the source's fusion-temperature reasoning uses kT at
 *     1.5 x 10^7 K and nothing else from either chapter.
 *   - Chapter 14, Semiconductor Electronics, is being written concurrently
 *     and shares nothing with this chapter. No coordination was needed and
 *     none was assumed.
 *
 * ELEVEN FIGURES: 6 DRAWN OF THE 6 THE SOURCE NAMES, PLUS 5 DESIGNED HERE.
 * The source names exactly six, on its six "CHAPTER 13 FIGURES" pages (812,
 * 815, 821, 823, 829, 837), and every one of them is drawn below.
 *   13.1 (page 812) the scale comparison, Topic 01, two chips: the atom with
 *     its nucleus as a dot, then the nucleus itself as packed protons and
 *     neutrons. The proton is a `plus` mark and the neutron an `open` one,
 *     so the figure reads with colour removed, which a "protons shaded one
 *     colour, neutrons another" brief does not.
 *   13.2 (page 815) the mass-defect bar chart, Topic 02, two chips, AND THE
 *     FIRST CHIP IS DRAWN TO TRUE SCALE ON PURPOSE. The source asks for a
 *     "slightly shorter" second bar; at true scale for helium-4 the
 *     difference is 0.75 per cent, which is 1.8 pixels, and drawing it
 *     larger would be a lie about the size of the effect. Chip 1 shows the
 *     two bars genuinely indistinguishable; chip 2 magnifies the mass axis a
 *     hundredfold and hatches the gap. The point of the figure is that a
 *     0.75 per cent mass difference is 28 MeV.
 *   13.3 (page 821) THE BINDING-ENERGY-PER-NUCLEON CURVE, Topic 03, three
 *     chips, and the most important figure in the chapter. Plotted as a
 *     `pts` curve through MEASURED Eb/A values rather than sketched, with
 *     real ticks on both axes and 8.8 marked on the y-axis. Chip 1 is the
 *     shape with Fe-56 and U-238 marked; chip 2 adds the fusion and fission
 *     arrows, both pointing toward the peak, which is the whole of the
 *     nuclear-energy unit in one picture; chip 3 zooms to A = 0 to 20 and
 *     draws the light end UNSMOOTHED, because it genuinely is jagged and the
 *     4n peaks at He-4, C-12, O-16 and Ne-20 are the reason the smooth trend
 *     line in chips 1 and 2 is a trend and not the data.
 *   13.4 (page 823) the nucleon-nucleon potential U(r), Topic 03, two chips:
 *     the shape with the well depth marked, then the same curve with the
 *     three ranges named. Its zero at infinite separation is Chapter 12's
 *     convention and the caption says so.
 *   13.5 (page 829) the exponential decay curve, Topic 04, three chips: the
 *     halving staircase with N_0/2, N_0/4 and N_0/8 at equal horizontal
 *     spacing, exactly as the source asks; the same decay on a log axis,
 *     where it becomes a straight line of slope minus lambda; and the
 *     half-life against the mean life on one curve, which is where a student
 *     can see that tau is the LONGER of the two.
 *   13.6 (page 837) fission and fusion, Topic 05, TWO CHIPS RATHER THAN THE
 *     TWO PANELS THE SOURCE ASKS FOR, and the panel rule is the reason. At
 *     316pt two side-by-side panels are 150pt each; the fission side alone
 *     needs an incoming neutron, a nucleus, two fragments, three outgoing
 *     neutrons and an energy label, and none of that is legible at 150pt.
 *     Two chips give each side the full width. The Coulomb barrier is drawn
 *     on the fusion chip as the source asks, as a dashed vertical the two
 *     nuclei have to get through.
 * The five designed here, and why each earns its space:
 *   T1 nuclear radius and nuclear density against mass number, two chips.
 *     The source states R proportional to A^(1/3) four times and rho
 *     independent of A five times and never draws either. Drawn together
 *     they are one picture: the radius curve flattens and the density line
 *     is flat, and the second is the consequence of the first. Chapter 12's
 *     aluminium (3.6 fm) and gold (7.0 fm) are marked on the radius curve so
 *     the two chapters visibly agree.
 *   T3 the neutron-proton stability band, one chip. The source's Section 3.3
 *     says stable nuclei drift from N = Z to N/Z about 1.5 and never shows
 *     it. The band plotted against the N = Z line IS the argument, and it is
 *     the picture Topic 04's decay modes then move around on.
 *   T4 the three decay modes as moves on a change-in-Z, change-in-N chart,
 *     FOUR CHIPS, AND THE PANEL RULE IS AGAIN THE REASON. Alpha, beta-minus,
 *     beta-plus and gamma each light up on the SAME axes, one at a time. The
 *     axes do not move between chips, so a student watches the arrow change
 *     direction rather than comparing four small pictures. Three side-by-side
 *     panels at 316pt would be 100pt each.
 *   T4 a decay chain as a `flow`, two chips: the first three steps of the
 *     uranium series with their mode on each link, then the whole series
 *     collapsed to one box. Box text is plain SVG with no markup and every
 *     line is at most 8 characters, well inside the 16 the 84pt boxes allow.
 *   T5 the chain reaction as a `flow`, two chips: one neutron per fission
 *     continuing the chain with two lost, which is k = 1; then the same tree
 *     with two continuing, which is k = 2 and doubles every generation.
 *     The source describes both in words and draws neither.
 * RENDERER FACTS HONOURED, each one live while drawing this:
 *   - `flow` box text is plain SVG with NO MARKUP and must fit its row. Both
 *     flow figures below use 3 columns, so a box is 84pt wide and holds 16
 *     characters; the longest text used is 8 ("2 escape"). Row heights are
 *     74pt and 55pt against a 26pt box.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, not the polygon.
 *     The one hatched poly below, Figure 13.2's mass-defect strip, is an
 *     axis-aligned rectangle, which is the case where the two coincide.
 *   - A POINT LABEL DEFAULTS TO NORTH-EAST, and marking iron on the
 *     binding-energy curve hits it exactly as the brief warned. Fe-56 sits
 *     at the top of the curve with the curve running away east, so "ne" is
 *     the one free quadrant and is used. U-238 sits at the right edge, where
 *     "ne" or "se" would put the label past x = 308, so it takes "sw". The
 *     light-end chip's He-4 would have collided with the rising curve at
 *     every setting on the full-range axes, which is a second reason that
 *     chip exists on its own zoomed window.
 *   - A `circle` CURVE IS ROUND ONLY WHEN BOTH AXES CARRY THE SAME PIXELS
 *     PER UNIT. Figure 13.6 uses five of them (the uranium nucleus, two
 *     fragments, two fusing nuclei, the helium product) on a 12 by 7 window,
 *     which needs aspect 0.5974 to make 24 pixels per unit on both axes.
 *     Solved from the renderer's own arithmetic; check-figures reports a
 *     skew of 1.00.
 *   - TWO COLLINEAR STROKES READ AS ONE LINE. Figure 13.5's halving
 *     staircase draws three horizontals and three verticals that meet at
 *     right angles rather than overlapping, and each pair shares an endpoint
 *     so the renderer draws one corner rather than two lines.
 *   - A HORIZONTAL ARROW'S at "above" LABEL LANDS BELOW WHEN THE ARROW
 *     POINTS LEFT. Figure 13.3's fission arrow points left, from uranium
 *     back toward the peak, so its name is placed with a free-floating
 *     `labels` entry rather than on the arrow, and both arrows in that chip
 *     are unlabelled for the same reason.
 *   - ARCS ARE DRAWN IN SCREEN SPACE. No `arcs` appear anywhere below: this
 *     is the one Class 12 physics chapter with no angles in it, so the
 *     atan2(dy x pxPerY, dx x pxPerX) correction Ray Optics paid for has
 *     nothing to correct here. Recorded so nobody looks for it.
 *   - check-figures INSPECTS ONLY `plot`, `numberline` and `flow`. Every
 *     figure below is one of those three, so all eleven are machine-checked
 *     and none needed hand computation of label positions. No `levels`,
 *     `circuit`, `optics`, `axes3d`, `tree` or `pascal` figure appears.
 * No new figure vocabulary is requested. Everything this chapter wanted to
 * draw, `plot` and `flow` could already draw.
 *
 * NOTES: WHAT A LATER CHAPTER CAN QUOTE FROM HERE, and two things worth
 * knowing before drawing anything.
 *   - 1 u = 931.5 MeV/c^2, DERIVED in Topic 01 rather than asserted, with the
 *     rounding accounted for exactly as Chapter 11 did for hc: 931.5 is the
 *     true value and 933.75 is what the classroom constants
 *     (1.66 x 10^-27, 3 x 10^8, 1.6 x 10^-19) give, 0.24 per cent high.
 *     Anything that converts a mass to an energy can quote it.
 *   - hbar c = 197 MeV fm, derived in Topic 02's protip from Chapter 11's
 *     hc = 1240 eV nm in one line, together with the confinement argument
 *     that a nucleon locked into 5 fm carries about 0.2 MeV. That is the
 *     transferable form of "why nuclear is MeV and atomic is eV".
 *   - R = 1.2 A^(1/3) fm and rho = 2.3 x 10^17 kg/m^3, both DERIVED here from
 *     constant nucleon density, with Chapter 12's aluminium (3.6 fm) and gold
 *     (7.0 fm) plotted on the curve. Chapter 12 quotes the formula; this
 *     chapter owns it.
 *   - THE BINDING-ENERGY CURVE, Figure 13.3, plotted from measured Eb/A
 *     values. Its point list is reusable and its four anchor values
 *     (deuteron 1.11, He-4 7.07, Fe-56 8.79, U-238 7.57) are the ones a
 *     student is asked to sketch from.
 *   - THE DECAY LAW AND ITS THREE DERIVATIONS, Topic 04, including the
 *     mean-life integral. Anything that needs an exponential with a time
 *     constant can quote the shape.
 *   TWO RENDERER OBSERVATIONS, neither of which is a request.
 *   1. `pts` with `smooth: true` uses UNIFORM Catmull-Rom in SCREEN space:
 *      the control offsets are (p2 - p0)/6 by INDEX, not by x-spacing. So an
 *      unevenly spaced point list can produce a control point that goes
 *      BACKWARDS in x and loops. It nearly happened to the stability-band
 *      curve, where two points 2 units apart followed a gap of 12: the
 *      outgoing control landed exactly on the next point's x. The fix was to
 *      space the points more evenly, not to change the renderer. Anyone
 *      hand-building a `pts` curve should check that consecutive x-gaps never
 *      differ by more than about a factor of five.
 *   2. `bands` was considered for Figure 13.4's three ranges and rejected in
 *      favour of two dashed `vline` curves, because a `vline` is a curve and
 *      therefore invisible to check-figures' strike-through test, where a
 *      `polys` rectangle would have put four more edges into it for no
 *      pictorial gain. Where a divider is a divider and not a region, a
 *      dashed vline is the cheaper primitive.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12Nuclei: Chapter = {
  "chapter": "13",
  "title": "Nuclei",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Inside the Nucleus: Composition, Size and Mass-Energy",
      "chip": "01 THE CORE",
      "kalam": "almost all the mass, almost none of the room",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Inside the Nucleus: Composition, Size and Mass-Energy</b><br>A quiet workhorse. CBSE Boards almost always carry a 1 to 2 mark question on isotopes, isobars and isotones, or on the nuclear radius relation. NEET reliably plants one conceptual trap on <i>nuclear density is independent of mass number</i>. JEE Main asks direct radius-ratio and mass-energy numericals; JEE Advanced folds nuclear size or density into a multi-step estimate, often disguised as astrophysics.<br><br><b>02 · Mass Defect and Binding Energy</b><br>CBSE Boards ask for the definition of binding energy and a mass-defect calculation, 2 to 3 marks. NEET asks the mass-defect-to-MeV conversion as a one-liner. JEE Main asks binding energy per nucleon for a named nuclide from atomic masses, which is the single most common numerical in the chapter.<br><br><b>03 · The Binding-Energy Curve and the Nuclear Force</b><br>The conceptual heart. CBSE Boards ask for a sketch and interpretation of the curve, or for the properties of the nuclear force, 2 to 3 marks, almost every year. NEET sets quick <i>which nucleus is most stable</i> and <i>why does fission release energy</i> questions. JEE Advanced demands an energy release computed from binding energies alone.<br><br><b>04 · Radioactivity: Decay Modes, the Decay Law and Activity</b><br>A perennial high-yield topic. CBSE Boards reliably ask for the derivation of the decay law and the definitions of half-life and mean life, 2 to 3 marks. NEET traps on half-life against mean life and on decay-mode identification. JEE Main loves decay-constant and activity numericals linked to Avogadro's number; JEE Advanced sets dating problems needing logarithms.<br><br><b>05 · Fission, Fusion and Nuclear Energy</b><br>A favourite across all four. CBSE Boards ask for fission and fusion definitions, the reactor and its components, and an energy-release calculation, 3 to 5 marks. NEET sets conceptual questions on fuel, moderators and fission-against-fusion energetics. JEE Main asks Q-value and energy-per-fission numericals; JEE Advanced links reactor power to fission rate and fuel burn-up."
        },
        {
          "t": "p",
          "html": "Walk into a cricket stadium. Stand on the pitch and look around at eighty thousand empty seats rising away from you in every direction. Now imagine that every gram of the stadium, the concrete, the steel, the floodlights, all of it, has been squeezed into a single grain of rice lying at your feet, and that the rest of the bowl is genuinely empty.<br><br>That is an atom. The <b>nucleus</b> sits at the centre carrying more than 99.9 per cent of the atom's mass, and it is about <b>one hundred thousand times smaller</b> than the atom around it. An atom is roughly 10<sup>−10</sup> m across; a nucleus is roughly 10<sup>−15</sup> m across. Everything else is electrons, and electrons weigh almost nothing.<br><br>Hold on to that image, because it is the single most important intuition in nuclear physics. Enormous emptiness wrapped around a dense core."
        },
        {
          "t": "p",
          "html": "What is the core made of? Two kinds of particle, called <b>nucleons</b>: positively charged <b>protons</b> and electrically neutral <b>neutrons</b>. They have almost the same mass, and next to them an electron is a rounding error.<br><br>The number of protons is the <b>atomic number</b> <i>Z</i>. That number, and nothing else, is the fingerprint of the chemical element: change <i>Z</i> and you have turned one element into another. The number of neutrons is <i>N</i>, and the total nucleon count is the <b>mass number</b> <i>A</i> = <i>Z</i> + <i>N</i>.<br><br>A particular nuclide is written <sup><i>A</i></sup><sub><i>Z</i></sub>X, with the mass number on top and the atomic number below. So carbon-12 is <sup>12</sup><sub>6</sub>C: six protons, six neutrons. Uranium-238 is <sup>238</sup><sub>92</sub>U: ninety-two protons, one hundred and forty-six neutrons."
        },
        {
          "t": "defgrid",
          "title": "Reading a Nuclide Symbol",
          "rows": [
            { "k": "<i>Z</i>", "v": "Atomic number. The number of protons. Fixes which element it is." },
            { "k": "<i>A</i>", "v": "Mass number. The total number of nucleons, protons plus neutrons." },
            { "k": "<i>N</i>", "v": "Neutron number, <i>N</i> = <i>A</i> − <i>Z</i>. Never written on the symbol; always computed." },
            { "k": "<sup><i>A</i></sup><sub><i>Z</i></sub>X", "v": "The nuclide. Mass number above, atomic number below, element symbol on the line." },
            { "k": "<sup>12</sup><sub>6</sub>C", "v": "Six protons, six neutrons, twelve nucleons. The standard against which 1 u is defined." }
          ]
        },
        {
          "t": "defgrid",
          "title": "Isotopes, Isobars, Isotones",
          "tag": "ONE MARK, EVERY YEAR",
          "rows": [
            { "k": "Isotopes", "v": "Same <i>Z</i>, different <i>A</i>. Same element, different mass. <sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H." },
            { "k": "Isobars", "v": "Same <i>A</i>, different <i>Z</i>. Different elements of equal mass number. <sup>3</sup><sub>1</sub>H and <sup>3</sup><sub>2</sub>He." },
            { "k": "Isotones", "v": "Same <i>N</i>, different <i>Z</i>. <sup>3</sup><sub>1</sub>H (<i>N</i> = 2) and <sup>4</sup><sub>2</sub>He (<i>N</i> = 2)." },
            { "k": "The anchor", "v": "Iso<b>p</b>-tope is the <b>p</b>roton count, iso<b>bar</b> is a balance so it is the total, iso<b>tone</b> is the <b>n</b>eutron count." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.1 · TWO SCALES, A HUNDRED THOUSAND APART",
          "chips": ["the atom", "the nucleus itself"],
          "captions": [
            "The whole atom, about 0.1 nm across, drawn as the dashed edge of its electron cloud with the nucleus as a single dot at the centre. This picture is NOT to scale and cannot be: at this size the nucleus would be about one thousandth of a millimetre wide, far smaller than the ink of the dot. If the dashed circle were the boundary of a cricket stadium, the nucleus would be a grain of rice on the centre pitch. Almost all the mass is in that grain.",
            "Zoom into the dot and the nucleus is a close-packed cluster of nucleons, drawn here for carbon-12: six protons marked with a plus and six neutrons drawn hollow. They touch. Each nucleon claims a fixed little parcel of space, so adding nucleons makes the cluster swell rather than making it denser, which is the reason the radius grows only as the cube root of the mass number and the density does not grow at all."
          ],
          "frames": [
            {
              "x": [-6, 6],
              "y": [-4, 4],
              "axes": "none",
              "aspect": 0.6753,
              "curves": [{ "c": "circle", "r": 3, "dash": true, "soft": true }],
              "marks": [{ "x": 0, "y": 0, "glyph": "dot", "tone": "amber", "label": "nucleus" }],
              "arrows": [
                { "from": [-3, -3.2], "to": [3, -3.2], "head": "both", "tone": "soft", "label": "atom ~0.1 nm", "at": "below" }
              ],
              "labels": [
                { "x": 0, "y": 3.45, "text": "electron cloud", "soft": true },
                { "x": 0, "y": -1.7, "text": "not to scale", "soft": true }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-2.2, 2.2],
              "axes": "none",
              "aspect": 0.72,
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus", "tone": "amber" },
                { "x": 0.85, "y": 0, "glyph": "open" },
                { "x": 0.425, "y": 0.736, "glyph": "plus", "tone": "amber" },
                { "x": -0.425, "y": 0.736, "glyph": "open" },
                { "x": -0.85, "y": 0, "glyph": "plus", "tone": "amber" },
                { "x": -0.425, "y": -0.736, "glyph": "open" },
                { "x": 0.425, "y": -0.736, "glyph": "plus", "tone": "amber" },
                { "x": 1.275, "y": 0.736, "glyph": "open" },
                { "x": 0, "y": 1.472, "glyph": "plus", "tone": "amber" },
                { "x": -1.275, "y": 0.736, "glyph": "open" },
                { "x": -1.275, "y": -0.736, "glyph": "plus", "tone": "amber" },
                { "x": 0, "y": -1.472, "glyph": "open" },
                { "x": 2.1, "y": 1.2, "glyph": "plus", "tone": "amber", "label": "proton" },
                { "x": 2.1, "y": 0, "glyph": "open", "label": "neutron" }
              ],
              "labels": [{ "x": -0.4, "y": -2.0, "text": "carbon-12: 6 p, 6 n", "soft": true }]
            }
          ]
        },
        {
          "t": "think",
          "html": "picture a train where every coach is the same size. a ten-coach train is twice as long as a five-coach train, but the number of passengers per cubic metre inside is identical. the nucleus is exactly like that. each nucleon claims a fixed little volume, so as you add nucleons the nucleus just swells to make room, and the stuff inside stays packed at the same crushing density. that is why the radius goes as <i>A</i><sup>1/3</sup> and not as <i>A</i>."
        },
        {
          "t": "formula",
          "kicker": "THE NUCLEAR RADIUS",
          "tag": "CBSE · NEET · JEE MAIN",
          "main": "<i>R</i> = <i>R</i><sub>0</sub> <i>A</i><sup>1/3</sup>,   <i>R</i><sub>0</sub> ≈ 1.2 fm",
          "legend": [
            "<i>R</i> = radius of the nucleus, in metres (m).",
            "<i>A</i> = mass number, a pure count with no units.",
            "<i>R</i><sub>0</sub> = an empirical constant, 1.2 × 10<sup>−15</sup> m. Measured, not derived.",
            "1 fm (femtometre, also called a fermi) = 10<sup>−15</sup> m, the natural unit here."
          ],
          "note": "Dimensionally [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>], and since <i>A</i> is a pure number the cube root cannot change that: <i>R</i><sub>0</sub> must itself be a length, which is the whole content of the constant. Its value is only known to about 1.1 to 1.3 fm depending on how you measure a fuzzy edge, so never quote a radius to more than two significant figures."
        },
        {
          "t": "deriv",
          "kicker": "WHY THE RADIUS GOES AS THE CUBE ROOT OF A",
          "steps": [
            { "eq": "experiment: nucleon density is the same everywhere inside every nucleus", "why": "Fire high-energy electrons at nuclei and read how they scatter, and the answer comes back the same for carbon as for lead: nucleons are packed at an essentially constant density throughout the interior. This is the measurement the whole derivation rests on. It is not an assumption we chose; it is what the apparatus said." },
            { "eq": "so the VOLUME of a nucleus is proportional to <i>A</i>", "why": "Constant density means every nucleon demands the same fixed parcel of space. Put in twice as many nucleons and you need twice the volume. The geometry has to obey the physics." },
            { "eq": "treat the nucleus as a sphere: <i>V</i> = (4/3)π<i>R</i><sup>3</sup>", "why": "Real nuclei have fuzzy surfaces and some are rugby-ball shaped, so this is a model. It is good enough for an order of magnitude and a trend, which is all the formula ever claims." },
            { "eq": "(4/3)π<i>R</i><sup>3</sup> ∝ <i>A</i>,  so  <i>R</i><sup>3</sup> ∝ <i>A</i>", "why": "The factor (4/3)π does not depend on <i>A</i>, so it passes straight through the proportionality and can be dropped." },
            { "eq": "<i>R</i> ∝ <i>A</i><sup>1/3</sup>,  hence  <i>R</i> = <i>R</i><sub>0</sub> <i>A</i><sup>1/3</sup>", "why": "Take the cube root of both sides and name the constant of proportionality <i>R</i><sub>0</sub>, fixed by experiment at about 1.2 fm. The cube root is not algebraic decoration: it is the geometric signature of incompressible, uniformly packed matter, and any material that behaves this way would show it." }
          ]
        },
        {
          "t": "formula",
          "kicker": "NUCLEAR DENSITY, THE SAME FOR EVERY NUCLEUS",
          "tag": "NEET'S FAVOURITE TRAP",
          "main": "ρ = <i>A m</i><sub>N</sub> / [(4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>] = <i>m</i><sub>N</sub> / [(4/3)π<i>R</i><sub>0</sub><sup>3</sup>] ≈ 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>",
          "legend": [
            "ρ = nuclear density, in kilograms per cubic metre (kg m<sup>−3</sup>).",
            "<i>m</i><sub>N</sub> = mean mass of one nucleon ≈ 1.66 × 10<sup>−27</sup> kg.",
            "<i>A</i> = mass number, which appears in the numerator and the denominator and cancels.",
            "<i>R</i><sub>0</sub> = 1.2 × 10<sup>−15</sup> m, the same constant as in the radius formula."
          ],
          "note": "Dimensionally [M<sup>1</sup> L<sup>−3</sup> T<sup>0</sup>]. The <i>A</i> cancels exactly, so hydrogen and uranium have the SAME nuclear density. That is about 10<sup>14</sup> times the density of water: one cubic centimetre of nuclear matter would weigh 230 million tonnes."
        },
        {
          "t": "deriv",
          "kicker": "WHY DENSITY DOES NOT DEPEND ON A AT ALL",
          "steps": [
            { "eq": "mass of the nucleus ≈ <i>A m</i><sub>N</sub>", "why": "Protons and neutrons have nearly the same mass, so <i>A</i> nucleons weigh about <i>A</i> times the mean nucleon mass. We use 1.66 × 10<sup>−27</sup> kg for that mean, which is 1 u. The approximation is good to under one per cent and the answer is only quoted to two figures anyway." },
            { "eq": "volume from the radius law: <i>V</i> = (4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>", "why": "Cube <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> and the cube root turns back into a single power of <i>A</i>. This is the step where the previous derivation pays off." },
            { "eq": "ρ = <i>A m</i><sub>N</sub> / [(4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>]", "why": "Density is mass over volume. Write it out and do not simplify yet, so you can see what is about to happen." },
            { "eq": "ρ = <i>m</i><sub>N</sub> / [(4/3)π<i>R</i><sub>0</sub><sup>3</sup>]", "why": "The <i>A</i> cancels top and bottom. The right-hand side now contains no reference to the nucleus at all, only two constants. Every nucleus in the periodic table has the same density, and this single line is the conceptual heart of the topic." },
            { "eq": "= 1.66 × 10<sup>−27</sup> / (4.189 × 1.728 × 10<sup>−45</sup>) = 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>", "why": "Put the numbers in. (1.2 × 10<sup>−15</sup>)<sup>3</sup> = 1.728 × 10<sup>−45</sup> m<sup>3</sup>, and (4/3)π = 4.189, so the denominator is 7.238 × 10<sup>−45</sup> m<sup>3</sup>. Dividing gives 2.29 × 10<sup>17</sup>, which is 2.3 × 10<sup>17</sup> to two figures. Two figures is the honest limit, because <i>R</i><sub>0</sub> is itself only known to about ten per cent." }
          ]
        },
        {
          "t": "p",
          "html": "Both of those results rest on one modelling assumption, and it is worth naming it before you trust a third significant figure.<br><br><i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> treats the nucleus as a <b>uniformly dense sphere with a sharp edge</b>. Real nuclei have neither. Their surfaces are fuzzy, with the density fading out over about a femtometre rather than stopping, and several are not spherical at all: some heavy nuclei are noticeably rugby-ball shaped.<br><br>So the formula is an excellent <b>order-of-magnitude and trend</b> tool and not a microscopically exact one. The constant <i>R</i><sub>0</sub> is itself an empirical fit that comes out anywhere from 1.1 to 1.3 fm depending on how you choose to define the edge of a fuzzy object. Two significant figures is what these results are worth, and quoting a nuclear radius to four is a claim the physics cannot support."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "RADIUS CLIMBS SLOWLY, DENSITY DOES NOT CLIMB AT ALL",
          "chips": ["radius against A", "density against A"],
          "captions": [
            "R = 1.2 A^(1/3) fm, plotted from hydrogen to uranium. Two things to read off it. First, the curve is steep at the left and almost flat at the right: going from A = 27 to A = 216, an eight-fold increase in mass, only doubles the radius. Second, the whole range from the lightest nucleus to the heaviest fits between 1 and 8 femtometres, so a nucleus is a femtometre-scale object whatever it is made of. The two marked points, aluminium-27 at 3.6 fm and gold-197 at 7.0 fm, are the same two numbers Chapter 12 used when it bounded the size of the gold nucleus by alpha scattering.",
            "The same horizontal axis, now carrying the density. It is a flat line. Not approximately flat, not flat over some range: the A cancelled exactly in the algebra, so the line is horizontal by construction. Lithium and uranium are equally dense, and the value is 2.3 x 10^17 kg per cubic metre for both. This is the graph NEET is testing when it asks what happens to nuclear density as the mass number increases, and the answer is nothing."
          ],
          "frames": [
            {
              "x": [0, 250],
              "y": [0, 8],
              "aspect": 0.72,
              "axisX": "mass number A",
              "axisY": "R (fm)",
              "ticksX": { "at": [0, 50, 100, 150, 200, 250] },
              "ticksY": { "every": 2 },
              "curves": [{ "c": "power", "a": 1.2, "p": 0.3333 }],
              "points": [
                { "x": 27, "y": 3.6, "label": "Al-27", "at": "se" },
                { "x": 197, "y": 6.98, "label": "Au-197", "at": "se" }
              ]
            },
            {
              "x": [0, 250],
              "y": [0, 4],
              "aspect": 0.72,
              "axisX": "mass number A",
              "axisY": "ρ (units of 10¹⁷ kg m⁻³)",
              "ticksX": { "at": [0, 50, 100, 150, 200, 250] },
              "ticksY": { "every": 1 },
              "curves": [{ "c": "line", "m": 0, "k": 2.3 }],
              "labels": [{ "x": 128, "y": 1.35, "text": "flat: 2.3 for every A", "soft": true }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Now weigh a nucleus on a hyper-precise scale and something strange happens. It comes out <b>lighter</b> than the sum of the separate protons and neutrons that make it up. Not by much, but by an amount you can measure to six decimal places, and reliably.<br><br>Mass has gone missing. Einstein's relation <i>E</i> = <i>mc</i><sup>2</sup> says where it went: that missing mass was released as the energy that glues the nucleons together. Mass and energy are two currencies for the same underlying quantity, exchangeable at the fixed rate of <i>c</i><sup>2</sup>.<br><br>Because <i>c</i><sup>2</sup> is enormous, a speck of mass buys an enormous amount of energy. That is the whole reason nuclear physics matters, and Topic 02 turns it into a number."
        },
        {
          "t": "think",
          "html": "mass and energy are not two things one of which can turn into the other. they are two currencies for the same underlying quantity, and <i>c</i><sup>2</sup> is the exchange rate. the reason it never comes up in chemistry is that the rate is absurd: one kilogram buys 9 × 10<sup>16</sup> joules. burn a kilogram of coal and about a third of a microgram of mass goes missing, which no scale on earth could catch. split a kilogram of uranium-235 and about a gram goes missing, which is three million times more, and that single ratio is the whole of nuclear engineering."
        },
        {
          "t": "def",
          "term": "Atomic mass unit (u)",
          "html": "Exactly one twelfth of the mass of one neutral <sup>12</sup><sub>6</sub>C <b>atom</b>, electrons included. In kilograms, 1 u = <b>1.66 × 10<sup>−27</sup> kg</b>. It is the right size for this chapter because a proton is 1.007276 u and a neutron 1.008665 u, so every nucleon is about 1 u and every mass number is about the mass in u.<br><br>Note the word <b>atom</b>. Tabulated masses almost always include the electrons, and this chapter uses atomic masses throughout on purpose, because the electrons then cancel. Topic 02 shows exactly how."
        },
        {
          "t": "formula",
          "kicker": "THE MASS-ENERGY BRIDGE",
          "tag": "MEMORISE THIS ONE LINE",
          "main": "<i>E</i> = <i>mc</i><sup>2</sup>,   1 u = 931.5 MeV/<i>c</i><sup>2</sup>",
          "legend": [
            "<i>E</i> = energy, in joules (J), or in MeV once divided by 1.6 × 10<sup>−13</sup>.",
            "<i>m</i> = mass, in kilograms (kg), or in u.",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s, the speed of light in vacuum.",
            "1 MeV = 1.6 × 10<sup>−13</sup> J, quoted from Chapter 12 and not re-derived.",
            "So a mass in u times 931.5 is an energy in MeV, in one multiplication."
          ],
          "note": "Dimensionally [M][L T<sup>−1</sup>]<sup>2</sup> = [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>], which is a joule. Write the conversion as MeV/<i>c</i><sup>2</sup>, not MeV: 1 u is a MASS, and 931.5 MeV is the energy you get when you destroy it. Saying they are equal is shorthand for saying they are exchangeable."
        },
        {
          "t": "deriv",
          "kicker": "DERIVING 931.5, RATHER THAN BELIEVING IT",
          "steps": [
            { "eq": "<i>E</i> = (1.66054 × 10<sup>−27</sup> kg) × <i>c</i><sup>2</sup>", "why": "Start from the definition of the unit: 1 u is 1.66054 × 10<sup>−27</sup> kg, measured against carbon-12. Nothing here is circular; this is the mass and we are about to ask what it is worth." },
            { "eq": "<i>c</i><sup>2</sup> = (2.99792 × 10<sup>8</sup>)<sup>2</sup> = 8.98755 × 10<sup>16</sup> m<sup>2</sup> s<sup>−2</sup>", "why": "Square the speed of light. Keep six figures for now; we will round at the end, once, rather than at every step." },
            { "eq": "<i>E</i> = 1.49242 × 10<sup>−10</sup> J", "why": "Multiply. This is what one atomic mass unit is worth in joules, and 10<sup>−10</sup> J is an awkward number to carry, which is exactly why the electronvolt exists." },
            { "eq": "<i>E</i> = 1.49242 × 10<sup>−10</sup> / 1.602 × 10<sup>−13</sup> = 931.5 MeV", "why": "Divide by the joules in one MeV. The answer is 931.49, so the printed 931.5 is right to four figures. Derived, not asserted." },
            { "eq": "check with the rounded constants: 933.75 MeV", "why": "Use the classroom values <i>u</i> = 1.66 × 10<sup>−27</sup>, <i>c</i> = 3 × 10<sup>8</sup>, <i>e</i> = 1.6 × 10<sup>−19</sup> and the same expression returns 933.75, which is 0.24 per cent high. So 931.5 is the true value and 933.75 is our rounding, exactly as Chapter 11 found for <i>hc</i> = 1240 eV nm against its rounded 1243. Use 931.5 and stop worrying about it." }
          ]
        },
        {
          "t": "defgrid",
          "title": "The Three Signs, Declared Once",
          "tag": "HOLD THESE FOR THE WHOLE CHAPTER",
          "rows": [
            { "k": "Mass defect Δ<i>m</i>", "v": "<b>Always positive.</b> The separate nucleons are always heavier than the bound nucleus. A negative Δ<i>m</i> means you subtracted the wrong way." },
            { "k": "Binding energy <i>E</i><sub>b</sub>", "v": "<b>Always positive.</b> It is the energy you must SUPPLY to pull a nucleus apart, so it can only be a positive amount owed." },
            { "k": "Potential energy <i>U</i>", "v": "<b>Negative for anything bound</b>, with its zero at infinite separation. Chapter 12's convention, unchanged: negative means trapped." },
            { "k": "Q-value", "v": "<b>Positive when energy is released</b>, negative when energy must be supplied. A sign slip here turns a power station into a furnace." }
          ]
        },
        {
          "t": "proc",
          "title": "Turning a Mass Defect into an Energy",
          "steps": [
            "<b>Get the missing mass in u.</b> Add the masses of the separate pieces, subtract the mass of the assembled thing, and keep every decimal place you were given. Five or six decimals matter here: for helium-4 the whole answer lives in the fourth decimal place, so rounding early destroys it.",
            "<b>Multiply by 931.5 to get MeV.</b> That is the entire conversion. Do not go through <i>E</i> = <i>mc</i><sup>2</sup> in joules under exam pressure; 931.5 MeV per u is that calculation already done for you.",
            "<b>Convert to joules only if asked.</b> Multiply the MeV figure by 1.6 × 10<sup>−13</sup>. Doing this the long way, Δ<i>m</i> × 1.66 × 10<sup>−27</sup> × (3 × 10<sup>8</sup>)<sup>2</sup>, gives the same answer and takes four times as long.",
            "<b>Sanity-check the size.</b> A mass defect of a few hundredths of a u is a few tens of MeV. If a whole nucleus comes out at 2 MeV or at 2000 MeV per nucleon, something is wrong: real binding energies sit between about 1 and 9 MeV per nucleon and nowhere else."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Estimate the radius of an aluminium-27 nucleus, <sup>27</sup><sub>13</sub>Al. Take <i>R</i><sub>0</sub> = 1.2 fm.",
          "steps": [
            "<i>R</i> = <i>R</i><sub>0</sub> <i>A</i><sup>1/3</sup> with <i>A</i> = 27.",
            "27 is a perfect cube: 27<sup>1/3</sup> = 3.",
            "<i>R</i> = 1.2 × 3 = 3.6 fm."
          ],
          "ans": "<i>R</i> ≈ 3.6 fm = 3.6 × 10<sup>−15</sup> m. Examiners choose mass numbers near 8, 27, 64, 125 and 216 for exactly this reason, so learn those five cubes and the arithmetic becomes instant."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two nuclei have mass numbers in the ratio 1 : 27. Find the ratio of (a) their radii and (b) their densities.",
          "steps": [
            "(a) <i>R</i> ∝ <i>A</i><sup>1/3</sup>, so the radius ratio is the CUBE ROOT of the mass-number ratio.",
            "<i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = (1/27)<sup>1/3</sup> = 1/3, so the radii are 1 : 3.",
            "(b) Density is independent of <i>A</i>. It is the same for every nucleus.",
            "So the densities are 1 : 1."
          ],
          "ans": "Radii 1 : 3, densities 1 : 1. The trap catches two different students: one writes 1 : 27 for the radii by forgetting the cube root, and one writes 1 : 27 for the densities by assuming the bigger nucleus is denser. Radius questions get a cube root; density questions get the word <i>equal</i> before you pick up a pen."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For <sup>238</sup><sub>92</sub>U (atomic mass 238.05 u), find (a) the nuclear radius and (b) the energy equivalent of its whole rest mass, in MeV and in joules.",
          "steps": [
            "(a) 238<sup>1/3</sup>: since 6.2<sup>3</sup> = 238.3, take 238<sup>1/3</sup> ≈ 6.2.",
            "<i>R</i> = 1.2 × 6.2 = 7.44 fm ≈ 7.4 × 10<sup>−15</sup> m.",
            "(b) In MeV: <i>E</i> = 238.05 × 931.5 = 2.22 × 10<sup>5</sup> MeV.",
            "In joules: <i>E</i> = 2.22 × 10<sup>5</sup> × 1.6 × 10<sup>−13</sup> = 3.55 × 10<sup>−8</sup> J."
          ],
          "ans": "<i>R</i> ≈ 7.4 fm; <i>E</i> ≈ 2.22 × 10<sup>5</sup> MeV ≈ 3.6 × 10<sup>−8</sup> J. Cross-check the energy the long way: <i>m</i> = 238.05 × 1.66 × 10<sup>−27</sup> = 3.95 × 10<sup>−25</sup> kg, and <i>mc</i><sup>2</sup> = 3.95 × 10<sup>−25</sup> × 9 × 10<sup>16</sup> = 3.6 × 10<sup>−8</sup> J. The two routes agree, which is the only reason to trust either."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A neutron star can be modelled as one gigantic nucleus of close-packed nucleons at ordinary nuclear density. Estimate the radius of a neutron star of mass 1.5 <i>M</i><sub>sun</sub>, where <i>M</i><sub>sun</sub> = 2 × 10<sup>30</sup> kg. Take ρ = 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>.",
          "steps": [
            "<i>M</i> = 1.5 × 2 × 10<sup>30</sup> = 3 × 10<sup>30</sup> kg.",
            "<i>V</i> = <i>M</i>/ρ = 3 × 10<sup>30</sup> / 2.3 × 10<sup>17</sup> = 1.30 × 10<sup>13</sup> m<sup>3</sup>.",
            "<i>R</i><sup>3</sup> = 3<i>V</i>/4π = 3 × 1.30 × 10<sup>13</sup> / 12.57 = 3.11 × 10<sup>12</sup> m<sup>3</sup>.",
            "<i>R</i> = (3.11 × 10<sup>12</sup>)<sup>1/3</sup> = 1.46 × 10<sup>4</sup> m."
          ],
          "ans": "<i>R</i> ≈ 15 km, which is remarkably close to the radii of real neutron stars. Second route, and it must agree: the nucleon count is <i>N</i> = 3 × 10<sup>30</sup> / 1.66 × 10<sup>−27</sup> = 1.81 × 10<sup>57</sup>, so <i>R</i> = <i>R</i><sub>0</sub><i>N</i><sup>1/3</sup> = 1.2 × 10<sup>−15</sup> × 1.22 × 10<sup>19</sup> = 1.46 × 10<sup>4</sup> m. Both come out the same because <i>treat it as one big nucleus</i> and <i>use the constant nuclear density</i> are the same physical statement said twice."
        },
        {
          "t": "mcq",
          "q": "The nuclei of two atoms have mass numbers 16 and 128. The ratio of their nuclear radii is:",
          "opts": [
            { "label": "1 : 8", "nudge": "That is the raw mass-number ratio with the cube root forgotten entirely, and it is the single most common error in this topic." },
            { "label": "1 : 4", "nudge": "That is a SQUARE root of 16/128 handled loosely. The radius law carries a cube root, not a square root." },
            { "label": "1 : 2", "nudge": null },
            { "label": "1 : 2√2", "nudge": "That comes from mishandling 8<sup>1/3</sup> as √8 / 2. The cube root of 8 is a clean 2." }
          ],
          "correct": 2,
          "solution": "<i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = (16/128)<sup>1/3</sup> = (1/8)<sup>1/3</sup> = 1/2. Reduce the mass-number ratio to its simplest form FIRST, because 1/8 has an obvious cube root and 16/128 does not."
        },
        {
          "t": "mcq",
          "q": "As the mass number <i>A</i> of a nucleus increases, the nuclear density:",
          "opts": [
            { "label": "increases linearly with <i>A</i>", "nudge": "This is the reasoning <i>more nucleons means more mass means denser</i>, which forgets that the volume grows by exactly the same factor." },
            { "label": "decreases as 1/<i>A</i>", "nudge": "That confuses density with mass per unit radius, or with a surface effect. Nothing in the derivation produces a 1/<i>A</i>." },
            { "label": "increases as <i>A</i><sup>1/3</sup>", "nudge": "That carries the <i>A</i><sup>1/3</sup> across from the radius formula, where it belongs, into the density, where it has already cancelled." },
            { "label": "remains nearly constant", "nudge": null }
          ],
          "correct": 3,
          "solution": "Mass ∝ <i>A</i> and volume ∝ <i>A</i>, so density, being mass over volume, is independent of <i>A</i>. Write the two proportionalities down before answering and the cancellation is impossible to miss."
        },
        {
          "t": "mcq",
          "q": "The energy equivalent of one atomic mass unit is approximately:",
          "opts": [
            { "label": "0.511 MeV", "nudge": "That is the rest energy of an ELECTRON, which is 0.000549 u. You are out by a factor of about 1800." },
            { "label": "931.5 MeV", "nudge": null },
            { "label": "938.3 MeV", "nudge": "That is the rest energy of a PROTON, whose mass is 1.007276 u and not exactly 1 u. A subtle trap and a deliberate one." },
            { "label": "1.6 × 10<sup>−13</sup> J", "nudge": "That is the joule value of one MeV, not of one u. One u is 931.5 times bigger, about 1.49 × 10<sup>−10</sup> J." }
          ],
          "correct": 1,
          "solution": "1 u = 1.66 × 10<sup>−27</sup> kg, and <i>mc</i><sup>2</sup> for that mass is 1.49 × 10<sup>−10</sup> J = 931.5 MeV. The three wrong options are all real numbers from this chapter attached to the wrong quantity, which is exactly how this question is set every year."
        },
        {
          "t": "mcq",
          "q": "Which pair represents isotones?",
          "opts": [
            { "label": "<sup>12</sup><sub>6</sub>C and <sup>14</sup><sub>6</sub>C", "nudge": "Same <i>Z</i> = 6, so these are isotopes. Their neutron numbers are 6 and 8, which are different." },
            { "label": "<sup>3</sup><sub>1</sub>H and <sup>3</sup><sub>2</sub>He", "nudge": "Same <i>A</i> = 3, so these are isobars. Their neutron numbers are 2 and 1." },
            { "label": "<sup>18</sup><sub>8</sub>O and <sup>19</sup><sub>9</sub>F", "nudge": null },
            { "label": "<sup>40</sup><sub>18</sub>Ar and <sup>40</sup><sub>19</sub>K", "nudge": "Same <i>A</i> = 40, so these are isobars too. Their neutron numbers are 22 and 21." }
          ],
          "correct": 2,
          "solution": "Isotones share the NEUTRON number <i>N</i> = <i>A</i> − <i>Z</i>. For <sup>18</sup><sub>8</sub>O, <i>N</i> = 18 − 8 = 10; for <sup>19</sup><sub>9</sub>F, <i>N</i> = 19 − 9 = 10. Equal, so isotones. Compute <i>N</i> for both members of every option before you look at the words: <i>N</i> is the one number the symbol does not show you."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Identify each pair as isotopes, isobars or isotones: (i) <sup>14</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N; (ii) <sup>40</sup><sub>18</sub>Ar and <sup>40</sup><sub>20</sub>Ca; (iii) <sup>13</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N.", "a": "(i) Same <i>A</i> = 14, so <b>isobars</b>. (ii) Same <i>A</i> = 40, so <b>isobars</b>. (iii) <i>N</i> = 13 − 6 = 7 and <i>N</i> = 14 − 7 = 7, so <b>isotones</b>. Always compute <i>N</i> before deciding: two of these three are settled by a number that is not printed on either symbol." },
            { "q": "[NEET] The radius of a <sup>64</sup><sub>29</sub>Cu nucleus is measured to be 4.8 fm. Using <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>, find <i>R</i><sub>0</sub>.", "a": "64<sup>1/3</sup> = 4, so <i>R</i><sub>0</sub> = <i>R</i>/<i>A</i><sup>1/3</sup> = 4.8/4 = <b>1.2 fm</b>. This is the measurement that FIXES the constant, run backwards, and it is why 1.2 fm is quoted rather than derived." },
            { "q": "[JEE Main] A nucleus has a radius of 6.0 fm. Taking <i>R</i><sub>0</sub> = 1.2 fm, find its mass number <i>A</i> and hence its approximate mass in kg.", "a": "<i>A</i><sup>1/3</sup> = 6.0/1.2 = 5, so <i>A</i> = 5<sup>3</sup> = <b>125</b>. Mass ≈ 125 × 1.66 × 10<sup>−27</sup> = <b>2.08 × 10<sup>−25</sup> kg</b>. Notice the examiner chose 6.0 fm precisely so that the ratio is a whole number." },
            { "q": "[JEE Main] Calculate the energy equivalent of the rest mass of one neutron, in MeV and in joules. Take <i>m</i><sub>n</sub> = 1.008665 u.", "a": "<i>E</i> = 1.008665 × 931.5 = <b>939.6 MeV</b>. In joules, 939.6 × 1.6 × 10<sup>−13</sup> = <b>1.50 × 10<sup>−10</sup> J</b>. Worth memorising alongside the proton's 938.3 MeV and the electron's 0.511 MeV: those three rest energies appear as MCQ distractors constantly." },
            { "q": "[JEE Advanced] Estimate the ratio of the density of nuclear matter to the mean density of a whole hydrogen atom, modelling the atom as a sphere of radius 0.53 × 10<sup>−10</sup> m containing one proton. Comment on the order of magnitude.", "a": "Atomic volume = (4/3)π(0.53 × 10<sup>−10</sup>)<sup>3</sup> = 6.24 × 10<sup>−31</sup> m<sup>3</sup>, so the atom's mean density is 1.67 × 10<sup>−27</sup>/6.24 × 10<sup>−31</sup> ≈ 2.7 × 10<sup>3</sup> kg m<sup>−3</sup>, about three times water. Ratio = 2.3 × 10<sup>17</sup>/2.7 × 10<sup>3</sup> ≈ <b>10<sup>14</sup></b>. Nuclear matter is about a hundred trillion times denser than the atom as a whole, because essentially all the mass sits in about 10<sup>−15</sup> of the volume. The 0.53 Angstrom is Chapter 12's Bohr radius, used here as a size and nothing more." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the cube root in a radius ratio.</b> Writing <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = <i>A</i><sub>1</sub>/<i>A</i><sub>2</sub> is the most frequent slip in the topic. The relation is <i>R</i> ∝ <i>A</i><sup>1/3</sup>, always. Cube-root the mass-number ratio before you do anything else.",
            "<b>Believing heavier nuclei are denser.</b> Nuclear density is the SAME for every nucleus. If a question asks for a density ratio between two nuclei, the answer is 1 : 1 unless something other than <i>A</i> has changed.",
            "<b>Confusing atomic mass with nuclear mass.</b> Tabulated masses usually include the <i>Z</i> electrons. Be explicit about whether you are using <i>m</i><sub>p</sub>, <i>m</i><sub>n</sub>, or the neutral-atom mass <i>m</i>(<sup>1</sup>H) = 1.007825 u, because mixing them is how a binding energy comes out wrong in the third decimal place.",
            "<b>Pushing <i>R</i> = 1.2<i>A</i><sup>1/3</sup> down to <i>A</i> = 1.</b> It gives 1.2 fm for a lone proton, and the measured proton radius is about 0.84 fm. The formula is a fit to medium and heavy nuclei and is not meant to survive down to a single nucleon. It is an excellent trend, not a law.",
            "<b>Quoting a nuclear radius to four figures.</b> <i>R</i><sub>0</sub> itself is only known to about 1.1 to 1.3 fm depending on how you define the edge of a fuzzy object. Two significant figures is the honest limit, and the same goes for the density."
          ]
        },
        {
          "t": "protip",
          "html": "learn the five cubes cold: 2<sup>3</sup> = 8, 3<sup>3</sup> = 27, 4<sup>3</sup> = 64, 5<sup>3</sup> = 125, 6<sup>3</sup> = 216. examiners pick mass numbers at or near those five so the cube root is instant, and if a question hands you 27 or 125 that is a signal, not a coincidence. for mass-energy conversions never re-derive through <i>E</i> = <i>mc</i><sup>2</sup> in joules under time pressure: multiply the mass in u by 931.5 and read MeV. and keep two sanity checks free in your head. a nuclear radius is a few femtometres, never an ångström and never 10<sup>−18</sup> m. a nucleon is worth about 940 MeV, so a nucleus of mass number <i>A</i> is worth roughly 940<i>A</i> MeV of rest energy and nothing else."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<sup>A</sup><sub>Z</sub>X: Z protons, N = A − Z neutrons", "note": "A is the nucleon count. Z alone names the element." },
            { "f": "Isotopes same Z · Isobars same A · Isotones same N", "note": "Compute N for both members before deciding. It is never printed." },
            { "f": "R = 1.2 A<sup>1/3</sup> fm", "note": "Radius ratio is the CUBE ROOT of the A ratio. Al-27 gives 3.6 fm, Au-197 gives 7.0 fm." },
            { "f": "ρ = 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>", "note": "The A cancels exactly. Same for every nucleus, about 10<sup>14</sup> times water." },
            { "f": "1 u = 1.66 × 10<sup>−27</sup> kg = 931.5 MeV/c<sup>2</sup>", "note": "Derived, not quoted. Multiply a mass in u by 931.5 and read MeV." },
            { "f": "1 MeV = 1.6 × 10<sup>−13</sup> J", "note": "Convert before substituting, never after. From Chapter 12." },
            { "f": "Rest energies: e 0.511, p 938.3, n 939.6 MeV", "note": "All three appear as MCQ distractors for the energy of 1 u." },
            { "f": "Δm > 0, E<sub>b</sub> > 0, U < 0, Q > 0 for a release", "note": "The four signs. Declared here, held for the whole chapter." }
          ],
          "aids": [
            "volume goes with A, so radius goes with the cube root of A and density goes with nothing at all.",
            "isotoPe is Protons, isotoNe is Neutrons, isobar balances the total.",
            "a nucleus is femtometres and MeV. an atom is ångströms and eV. get the scale wrong and every answer is out by a million."
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Mass Defect and Binding Energy",
      "chip": "02 THE GLUE",
      "kalam": "weigh the pieces, weigh the whole, the difference is the glue",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 left you with a fact that ought to be impossible. Weigh a helium-4 nucleus and it comes out lighter than two protons plus two neutrons weighed separately. The pieces are heavier than the thing they make.<br><br>The missing mass did not vanish. When the four nucleons snapped together, that much mass was converted into energy and radiated away. Run the film backwards and the same number appears again, this time as the energy you would have to <b>supply</b> to tear the nucleus completely apart into free, motionless nucleons.<br><br>That energy is the <b>binding energy</b>. A nucleus with a large binding energy is like a well that is hard to climb out of: deeply, securely held together."
        },
        {
          "t": "def",
          "term": "Mass defect Δm",
          "html": "The amount by which the total mass of the separate constituent nucleons exceeds the mass of the assembled nucleus.<br><br>Δ<i>m</i> = (mass of <i>Z</i> protons + mass of <i>N</i> neutrons) − (mass of the nucleus)<br><br>It is <b>always positive</b>, for every bound nucleus that exists. If you get a negative number you subtracted the wrong way round. Measured in u, and you will need five or six decimal places, because for helium-4 the entire answer lives in the fourth."
        },
        {
          "t": "def",
          "term": "Binding energy E<sub>b</sub>",
          "html": "The energy equivalent of the mass defect: <i>E</i><sub>b</sub> = Δ<i>m c</i><sup>2</sup>.<br><br>Read it either way and both are true. It is the energy <b>released</b> when free nucleons come together to form the nucleus, and it is the energy you must <b>supply</b> to pull that nucleus apart into free nucleons again. It is always positive, and a bigger <i>E</i><sub>b</sub> means a harder nucleus to break.<br><br>Do not confuse it with the potential energy, which is negative. Binding energy is the DEPTH of the well measured as a positive number; potential energy is the position in the well measured against zero at infinity. Chapter 12 set that convention and this chapter keeps it."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.2 · THE PIECES WEIGH MORE THAN THE WHOLE",
          "chips": ["true scale", "mass axis magnified"],
          "captions": [
            "Two bars, each drawn with its length proportional to a mass, for helium-4. The upper bar is two free protons plus two free neutrons: 4.032980 u. The lower bar is the assembled helium-4 atom: 4.002603 u. They look identical, and that is not a drawing error. The difference is 0.030377 u, which is 0.75 per cent, which at this scale is under two pixels. Every honest picture of a mass defect looks like this, and every textbook that draws a visible gap has exaggerated it.",
            "The same two bars with the mass axis magnified about a hundred times, so only the last one per cent of each is shown. Now the gap is visible, and the hatched strip between the two ends is the mass defect: 0.030377 u. Multiply it by 931.5 and it is 28.3 MeV. That is the whole point of the figure. Three quarters of one per cent of the mass of a helium nucleus is twenty-eight million electronvolts, because the exchange rate c-squared is enormous."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [0, 6],
              "axes": "none",
              "aspect": 0.5,
              "polys": [
                { "pts": [[0.6, 3.6], [8.66, 3.6], [8.66, 4.5], [0.6, 4.5]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[0.6, 1.8], [8.605, 1.8], [8.605, 2.7], [0.6, 2.7]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "labels": [
                { "x": 4.6, "y": 5.2, "text": "2 protons + 2 neutrons" },
                { "x": 4.6, "y": 1.15, "text": "one helium-4 nucleus" },
                { "x": 4.6, "y": 0.4, "text": "the gap is 0.75%", "soft": true }
              ]
            },
            {
              "x": [3.975, 4.045],
              "y": [0, 6],
              "axes": "none",
              "aspect": 0.5,
              "polys": [
                { "pts": [[3.978, 4.2], [4.03298, 4.2], [4.03298, 5.0], [3.978, 5.0]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[3.978, 2.4], [4.002603, 2.4], [4.002603, 3.2], [3.978, 3.2]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4.002603, 2.4], [4.03298, 2.4], [4.03298, 5.0], [4.002603, 5.0]], "close": true, "fill": "hatch", "tone": "amber", "label": "Δm = 0.0304 u" }
              ],
              "labels": [
                { "x": 4.005, "y": 5.5, "text": "separate p and n" },
                { "x": 4.005, "y": 1.75, "text": "the bound nucleus" },
                { "x": 4.0175, "y": 0.55, "text": "mass axis magnified", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "MASS DEFECT, THE ROUTE YOU WILL ACTUALLY USE",
          "tag": "CBSE · JEE MAIN",
          "main": "Δ<i>m</i> = [<i>Z m</i><sub>H</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub>] − <i>M</i><sub>atom</sub>",
          "legend": [
            "Δ<i>m</i> = mass defect, in atomic mass units (u).",
            "<i>Z</i> = atomic number, <i>A</i> = mass number, both pure counts.",
            "<i>m</i><sub>H</sub> = mass of a neutral hydrogen ATOM = 1.007825 u.",
            "<i>m</i><sub>n</sub> = mass of a free neutron = 1.008665 u.",
            "<i>M</i><sub>atom</sub> = measured mass of the neutral atom of the nuclide, in u."
          ],
          "note": "The nuclear version, Δ<i>m</i> = [<i>Z m</i><sub>p</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub>] − <i>M</i><sub>nucleus</sub>, is the same statement with nuclear masses on both sides. Use one or the other and never a mixture: subtracting a nuclear mass from atomic-mass constituents leaves <i>Z</i> stray electrons in your answer."
        },
        {
          "t": "p",
          "html": "Why is the atomic-mass route safe? Because the electrons cancel, exactly.<br><br>Take <i>Z</i> hydrogen atoms: that is <i>Z</i> protons and <i>Z</i> electrons. Add (<i>A</i> − <i>Z</i>) neutrons, which carry no electrons. Now compare with the neutral atom of the nuclide, which has a nucleus of <i>Z</i> protons and (<i>A</i> − <i>Z</i>) neutrons, plus <i>Z</i> electrons around it.<br><br><b>Both sides carry exactly <i>Z</i> electrons.</b> They subtract away and leave the nuclear mass defect untouched. That is why tables give atomic masses, why <i>m</i><sub>H</sub> = 1.007825 u appears in the formula instead of <i>m</i><sub>p</sub> = 1.007276 u, and why you never have to think about electrons in a binding-energy calculation. The one place this stops working is beta decay, where the electron count changes, and Topic 04 flags it there."
        },
        {
          "t": "deriv",
          "kicker": "PROVING THE ELECTRONS CANCEL, RATHER THAN HOPING THEY DO",
          "steps": [
            { "eq": "what we want: Δ<i>m</i> = [<i>Z m</i><sub>p</sub> + <i>N m</i><sub>n</sub>] − <i>M</i><sub>nucleus</sub>", "why": "The mass defect is a statement about the NUCLEUS. Electrons are not part of it and have no business being in the answer. But nuclear masses are not what tables give you." },
            { "eq": "what tables give: <i>M</i><sub>atom</sub> = <i>M</i><sub>nucleus</sub> + <i>Z m</i><sub>e</sub>", "why": "The neutral atom is the nucleus plus its <i>Z</i> electrons. We are ignoring the electrons' own binding to the atom here, and the next-to-last step justifies that." },
            { "eq": "and <i>m</i><sub>H</sub> = <i>m</i><sub>p</sub> + <i>m</i><sub>e</sub>", "why": "A neutral hydrogen atom is one proton plus one electron: 1.007276 + 0.000549 = 1.007825 u, which is the tabulated value exactly. Check it yourself; that agreement is what makes the next line work." },
            { "eq": "substitute both into [<i>Z m</i><sub>H</sub> + <i>N m</i><sub>n</sub>] − <i>M</i><sub>atom</sub>", "why": "This is the formula we actually use. Expanding it gives <i>Z</i>(<i>m</i><sub>p</sub> + <i>m</i><sub>e</sub>) + <i>N m</i><sub>n</sub> − (<i>M</i><sub>nucleus</sub> + <i>Z m</i><sub>e</sub>)." },
            { "eq": "= <i>Z m</i><sub>p</sub> + <i>N m</i><sub>n</sub> − <i>M</i><sub>nucleus</sub>,  the same Δ<i>m</i>", "why": "The <i>Z m</i><sub>e</sub> appears with a plus from the hydrogen atoms and a minus from the neutral atom, and they cancel identically. Not approximately: identically, for every <i>Z</i>. That is why the atomic route is not a shortcut but an exact restatement." },
            { "eq": "the neglected piece is the ELECTRON binding energy", "why": "Real atoms hold their electrons with tens of eV to a few keV, so the two <i>Z m</i><sub>e</sub> terms are not quite equal. But nuclear binding energies are MeV. The discrepancy is one part in 10<sup>5</sup> or smaller, which is far below the precision of any mass you will be handed." }
          ]
        },
        {
          "t": "formula",
          "kicker": "BINDING ENERGY, AND BINDING ENERGY PER NUCLEON",
          "tag": "THE TWO NUMBERS THIS CHAPTER RUNS ON",
          "main": "<i>E</i><sub>b</sub> = Δ<i>m c</i><sup>2</sup> = Δ<i>m</i>(in u) × 931.5 MeV      <i>E</i><sub>b</sub>/<i>A</i> = Δ<i>m c</i><sup>2</sup>/<i>A</i>",
          "legend": [
            "<i>E</i><sub>b</sub> = total binding energy of the nucleus, in MeV (or joules).",
            "Δ<i>m</i> = mass defect, in atomic mass units (u).",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s, the speed of light in vacuum.",
            "<i>A</i> = mass number, so <i>E</i><sub>b</sub>/<i>A</i> is in MeV per nucleon.",
            "931.5 = the MeV equivalent of one u, derived in Topic 01."
          ],
          "note": "Both are energies, [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>], because dividing by <i>A</i> divides by a pure number. <i>E</i><sub>b</sub> tells you how hard this nucleus is to smash; <i>E</i><sub>b</sub>/<i>A</i> tells you how tightly the TYPICAL nucleon is held, and only the second one lets you compare two different nuclei fairly."
        },
        {
          "t": "think",
          "html": "compare two cricket teams not by their total runs but by the batting average. a side of eleven that scores 880 is doing better, player for player, than a side that scores 990 across twenty innings. binding energy per nucleon is exactly that stability average: it tells you how tightly the typical nucleon is held, independent of how many nucleons there are. uranium has a far bigger <i>total</i> binding energy than helium and is far less stable, and the average is the number that shows it."
        },
        {
          "t": "think",
          "html": "binding energy is the depth of a well, and the two ways of saying it are the same sentence read in opposite directions. going IN, the nucleons fall to the bottom and the energy they lose is radiated away, which is why the assembled nucleus weighs less. coming OUT, you have to pay all of it back to lift them clear. so <i>E</i><sub>b</sub> is simultaneously what was released when the nucleus formed and what it would cost to destroy it, and there is no contradiction in that because they are the same number measured from the two ends of the same climb."
        },
        {
          "t": "proc",
          "title": "Computing E<sub>b</sub> and E<sub>b</sub>/A",
          "steps": [
            "<b>Count the constituents.</b> <i>Z</i> protons and (<i>A</i> − <i>Z</i>) neutrons. Get this from the symbol before you touch a mass: for <sup>16</sup><sub>8</sub>O it is 8 and 8, for <sup>7</sup><sub>3</sub>Li it is 3 and 4.",
            "<b>Add their separate masses.</b> <i>Z</i> × 1.007825 + (<i>A</i> − <i>Z</i>) × 1.008665, using the ATOMIC hydrogen mass. Keep all six decimals in both products.",
            "<b>Subtract the measured atomic mass</b> of the nuclide to get Δ<i>m</i>. This is where sign errors live: constituents first, nucleus second, and the answer must be positive.",
            "<b>Multiply Δ<i>m</i> by 931.5</b> to get <i>E</i><sub>b</sub> in MeV. One multiplication.",
            "<b>Divide by <i>A</i></b> to get <i>E</i><sub>b</sub>/<i>A</i>, and sanity-check it against the range 1 to 9 MeV per nucleon. If it lands outside, go back: almost every real nucleus sits between 7 and 9, and only the very lightest few sit below."
          ]
        },
        {
          "t": "deriv",
          "kicker": "HELIUM-4 ALL THE WAY THROUGH, WITH THE DECIMALS SHOWN",
          "steps": [
            { "eq": "constituents: <i>Z</i> = 2 protons, <i>A</i> − <i>Z</i> = 2 neutrons", "why": "<sup>4</sup><sub>2</sub>He, so two of each. Using the atomic route, the two protons are carried as two hydrogen ATOMS, which brings two electrons that will cancel against the two in the helium atom." },
            { "eq": "2(1.007825) + 2(1.008665) = 2.015650 + 2.017330 = 4.032980 u", "why": "Both products written out in full. This is why the source's tables give six decimals: chop to three here and the mass defect disappears entirely, because it lives in the second and third decimal places of the difference." },
            { "eq": "Δ<i>m</i> = 4.032980 − 4.002603 = 0.030377 u", "why": "Subtract the measured atomic mass of helium-4. Positive, as it must be. Note how much precision was destroyed by the subtraction: seven significant figures went in and five came out, which is exactly why five decimal places on the inputs are doing real work." },
            { "eq": "<i>E</i><sub>b</sub> = 0.030377 × 931.5 = 28.30 MeV", "why": "One multiplication. Twenty-eight million electronvolts from three quarters of one per cent of the mass, which is the number Figure 13.2 exists to make believable." },
            { "eq": "<i>E</i><sub>b</sub>/<i>A</i> = 28.30/4 = 7.07 MeV per nucleon", "why": "Divide by four. That is already very tightly bound for such a light nucleus, and it is the reason an alpha particle is ejected as a single intact unit in alpha decay rather than coming apart: the helium-4 nucleus is a remarkably good package." }
          ]
        },
        {
          "t": "p",
          "html": "Four numbers from this topic are worth carrying in your head, because almost every question in the rest of the chapter is a comparison against one of them.<br><br>The <b>deuteron</b>, <sup>2</sup><sub>1</sub>H, has <i>E</i><sub>b</sub> = 2.22 MeV and <i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV. It is the most loosely bound nucleus that exists: one proton and one neutron, barely holding on.<br><b>Helium-4</b> has 28.3 MeV total and 7.07 MeV per nucleon, six times better per nucleon than the deuteron.<br><b>Oxygen-16</b> has 127.6 MeV total and 7.98 MeV per nucleon, already close to the best any nucleus achieves.<br><b>Uranium-238</b> has about 1802 MeV total, which is enormous, and only 7.57 MeV per nucleon, which is worse than oxygen.<br><br>That last pair is the whole argument for using the per-nucleon figure. Uranium's total binding energy is sixty-four times helium's and it is the less stable of the two."
        },
        {
          "t": "defgrid",
          "title": "Masses You Will Be Given, and What They Are",
          "tag": "SIX DECIMALS, ALWAYS",
          "rows": [
            { "k": "<i>m</i><sub>H</sub> = 1.007825 u", "v": "A neutral HYDROGEN ATOM: one proton plus one electron. This is the one to use with atomic masses." },
            { "k": "<i>m</i><sub>p</sub> = 1.007276 u", "v": "A bare PROTON. Use it only with nuclear masses. The gap from <i>m</i><sub>H</sub> is exactly one electron." },
            { "k": "<i>m</i><sub>n</sub> = 1.008665 u", "v": "A free NEUTRON. Slightly heavier than a proton, which is why a free neutron itself beta decays." },
            { "k": "<i>m</i><sub>e</sub> = 0.000549 u", "v": "An electron, about 1/1836 of a nucleon. Small, but <i>Z</i> of them is not, so cancel them properly." },
            { "k": "<i>m</i>(<sup>4</sup>He) = 4.002603 u", "v": "The neutral helium-4 ATOM. Note it is BELOW 4 even though it has four nucleons, which is the mass defect showing." },
            { "k": "<i>m</i>(<sup>12</sup>C) = 12.000000 u", "v": "Exact by definition; the unit is defined from it. The only mass in the table with no measurement error." }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Calculate the binding energy and the binding energy per nucleon of <sup>4</sup><sub>2</sub>He. Take <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u, <i>m</i>(<sup>4</sup>He atom) = 4.002603 u.",
          "steps": [
            "Constituents: <i>Z</i> = 2 protons, <i>A</i> − <i>Z</i> = 2 neutrons.",
            "Separate masses: 2(1.007825) + 2(1.008665) = 4.032980 u.",
            "Δ<i>m</i> = 4.032980 − 4.002603 = 0.030377 u.",
            "<i>E</i><sub>b</sub> = 0.030377 × 931.5 = 28.30 MeV.",
            "<i>E</i><sub>b</sub>/<i>A</i> = 28.30/4 = 7.07 MeV."
          ],
          "ans": "<i>E</i><sub>b</sub> ≈ 28.3 MeV and <i>E</i><sub>b</sub>/<i>A</i> ≈ 7.07 MeV per nucleon. Board answers are marked on the working as much as the number, so write the constituent sum on its own line, the mass defect on its own line, and state the units at every stage."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Compute the binding energy per nucleon of <sup>16</sup><sub>8</sub>O and compare it with the deuteron <sup>2</sup><sub>1</sub>H. Given <i>m</i>(<sup>16</sup>O) = 15.994915 u and <i>m</i>(<sup>2</sup>H) = 2.014102 u.",
          "steps": [
            "Oxygen: 8(1.007825) + 8(1.008665) = 8.062600 + 8.069320 = 16.131920 u.",
            "Δ<i>m</i> = 16.131920 − 15.994915 = 0.137005 u, so <i>E</i><sub>b</sub> = 127.6 MeV.",
            "<i>E</i><sub>b</sub>/<i>A</i> = 127.6/16 = 7.98 MeV.",
            "Deuteron: Δ<i>m</i> = (1.007825 + 1.008665) − 2.014102 = 0.002388 u.",
            "<i>E</i><sub>b</sub> = 0.002388 × 931.5 = 2.224 MeV, so <i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV."
          ],
          "ans": "Oxygen-16 gives 7.98 MeV per nucleon against only 1.11 MeV for the deuteron, a factor of seven. Oxygen sits on the stable plateau while the deuteron is the loosest bound nucleus there is, and the two together are the steep rise of Topic 03's curve measured at its two ends."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Calculate the binding energy per nucleon of <sup>7</sup><sub>3</sub>Li. Given <i>m</i>(<sup>7</sup>Li) = 7.016004 u, <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u.",
          "steps": [
            "Constituents: 3 protons and 4 neutrons.",
            "3(1.007825) + 4(1.008665) = 3.023475 + 4.034660 = 7.058135 u.",
            "Δ<i>m</i> = 7.058135 − 7.016004 = 0.042131 u.",
            "<i>E</i><sub>b</sub> = 0.042131 × 931.5 = 39.25 MeV.",
            "<i>E</i><sub>b</sub>/<i>A</i> = 39.25/7 = 5.61 MeV."
          ],
          "ans": "<i>E</i><sub>b</sub>/<i>A</i> ≈ 5.61 MeV per nucleon. Lower than helium-4's 7.07, which is startling until you notice that helium-4 is one of the anomalously well-bound light nuclei and lithium-7 is not. Topic 03's third figure draws exactly this: the light end of the curve is jagged, and helium-4 is a spike on it."
        },
        {
          "t": "mcq",
          "q": "The binding energy of a deuteron is 2.22 MeV. Its mass defect is approximately:",
          "opts": [
            { "label": "0.0024 u", "nudge": null },
            { "label": "0.0238 u", "nudge": "That divides 2.22 by 93.15 instead of 931.5, a single decimal slip that multiplies the answer by ten." },
            { "label": "2.22 u", "nudge": "That reads the energy in MeV as though it were a mass in u. They are different quantities related by a factor of 931.5, not the same number." },
            { "label": "0.24 u", "nudge": "A power-of-ten error, and a big one: 0.24 u is eighty times a real deuteron mass defect and a quarter of a whole nucleon." }
          ],
          "correct": 0,
          "solution": "Δ<i>m</i> = <i>E</i><sub>b</sub>/931.5 = 2.22/931.5 = 0.00238 u. Run the conversion backwards: to go from u to MeV you multiply by 931.5, so to go from MeV to u you divide. Cross-check it against the direct calculation, 1.007825 + 1.008665 − 2.014102 = 0.002388 u, which is the same number."
        },
        {
          "t": "mcq",
          "q": "Which quantity should you compare to decide which of two nuclei is more stable?",
          "opts": [
            { "label": "The total binding energy <i>E</i><sub>b</sub>", "nudge": "Total binding energy keeps rising with <i>A</i> almost forever, so this rule would make uranium the most stable nucleus in existence. It is one of the least." },
            { "label": "The binding energy per nucleon <i>E</i><sub>b</sub>/<i>A</i>", "nudge": null },
            { "label": "The mass defect Δ<i>m</i>", "nudge": "Δ<i>m</i> is just <i>E</i><sub>b</sub> in different units, so it grows with <i>A</i> for exactly the same reason and misleads in exactly the same way." },
            { "label": "The mass number <i>A</i>", "nudge": "This is the assumption <i>heavier means more stable</i>, and it is precisely backwards for everything past the iron region." }
          ],
          "correct": 1,
          "solution": "Stability is read off <i>E</i><sub>b</sub>/<i>A</i> alone. Dividing by the nucleon count removes the size of the nucleus from the comparison and leaves only how tightly the typical nucleon is held. The other three options all grow with <i>A</i>, so all three would rank uranium above helium, and all three would be wrong."
        },
        {
          "t": "mcq",
          "q": "Using atomic masses, the mass defect of <sup>A</sup><sub>Z</sub>X is [<i>Z m</i><sub>H</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub>] − <i>M</i><sub>atom</sub>. Why does this work even though the formula mentions no electrons?",
          "opts": [
            { "label": "Electron masses are too small to matter", "nudge": "An electron is 0.000549 u, and mass defects are around 0.03 u. For uranium the <i>Z</i> electrons weigh 0.05 u, which is bigger than a typical mass defect. They matter; they cancel." },
            { "label": "Both sides carry exactly <i>Z</i> electrons, so they subtract away", "nudge": null },
            { "label": "The formula secretly uses <i>m</i><sub>p</sub>, not <i>m</i><sub>H</sub>", "nudge": "It genuinely uses <i>m</i><sub>H</sub> = 1.007825 u, which is the proton 1.007276 plus one electron 0.000549. Substituting <i>m</i><sub>p</sub> and keeping <i>M</i><sub>atom</sub> would leave <i>Z</i> uncancelled electrons." },
            { "label": "Electrons are not part of the atom's mass", "nudge": "They are, and they are tabulated in it. That is exactly why the neutral-atom mass is the one you look up." }
          ],
          "correct": 1,
          "solution": "<i>Z</i> hydrogen ATOMS carry <i>Z</i> protons and <i>Z</i> electrons; the neutral atom of X carries <i>Z</i> protons, <i>N</i> neutrons and <i>Z</i> electrons. Subtract and the electrons vanish identically, leaving the nuclear mass defect. This cancellation is exact, not approximate, and it is the whole reason tables list atomic masses. It fails only when the electron count changes, which is beta decay."
        },
        {
          "t": "mcq",
          "q": "Nucleus P has a mass defect of 0.20 u and mass number 25. Nucleus R has a mass defect of 0.50 u and mass number 60. Which is more tightly bound per nucleon?",
          "opts": [
            { "label": "P, because 0.20/25 is the smaller fraction", "nudge": "The smaller fraction is the wrong way round. A bigger mass defect PER NUCLEON means more binding per nucleon, so you want the larger ratio, not the smaller." },
            { "label": "R, because its mass defect is larger", "nudge": "Right answer, wrong reason, and the reason matters. A larger total mass defect on its own proves nothing: R also has more than twice as many nucleons to share it between." },
            { "label": "R, because 0.50/60 exceeds 0.20/25", "nudge": null },
            { "label": "They are equally bound, since both give about 7 MeV", "nudge": "They do not. 0.20/25 = 0.0080 u per nucleon gives 7.45 MeV, and 0.50/60 = 0.00833 u per nucleon gives 7.76 MeV. A gap of 0.3 MeV per nucleon is not a rounding difference." }
          ],
          "correct": 2,
          "solution": "Compute the mass defect PER NUCLEON and convert once. P: 0.20/25 = 0.00800 u each, times 931.5 = 7.45 MeV. R: 0.50/60 = 0.00833 u each, times 931.5 = 7.76 MeV. R wins. Note the order of operations: divide by <i>A</i> first, then convert, and you never have to multiply 931.5 by anything twice."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define binding energy and binding energy per nucleon. Why is the per-nucleon value the better measure of nuclear stability?", "a": "<b>Binding energy</b> is the energy needed to break a nucleus into its free constituent nucleons, equal to Δ<i>mc</i><sup>2</sup>. <b>Binding energy per nucleon</b> is that divided by <i>A</i>. The per-nucleon figure is better because total binding energy rises with <i>A</i> for almost every nucleus, so it would rank a big loose nucleus above a small tight one. Dividing by <i>A</i> removes the size and leaves only how tightly the typical nucleon is held. Uranium-238 has about sixty-four times helium-4's total binding energy and a LOWER value per nucleon, which is why it can release energy by splitting." },
            { "q": "[NEET] The mass defect of a nucleus is 0.21 u. What is its binding energy in MeV?", "a": "<i>E</i><sub>b</sub> = 0.21 × 931.5 = <b>195.6 MeV</b>. One multiplication. If the question then asks for the per-nucleon value you also need <i>A</i>, which this one deliberately withholds." },
            { "q": "[JEE Main] Find the mass defect and binding energy per nucleon of <sup>12</sup><sub>6</sub>C, whose atomic mass is exactly 12.000000 u by definition. Take <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u.", "a": "Constituents: 6(1.007825) + 6(1.008665) = 6.046950 + 6.051990 = 12.098940 u. Δ<i>m</i> = 12.098940 − 12.000000 = <b>0.098940 u</b>. <i>E</i><sub>b</sub> = 0.098940 × 931.5 = <b>92.16 MeV</b>, so <i>E</i><sub>b</sub>/<i>A</i> = 92.16/12 = <b>7.68 MeV</b>. Carbon-12 is the one nuclide whose atomic mass is exact by definition, which makes it the cleanest possible worked example." },
            { "q": "[JEE Main] A nucleus of mass number 20 has a binding energy per nucleon of 8.03 MeV. Find its total binding energy and its mass defect in u.", "a": "<i>E</i><sub>b</sub> = 20 × 8.03 = <b>160.6 MeV</b>. Δ<i>m</i> = 160.6/931.5 = <b>0.1724 u</b>. Note the direction of travel: this question hands you the per-nucleon value and asks you to walk backwards to the mass, which is the reverse of every other problem in the topic and is the reason it appears." },
            { "q": "[JEE Advanced] The binding energy per nucleon of <sup>16</sup><sub>8</sub>O is 7.98 MeV. Find the energy needed to remove one neutron from it, given that <sup>15</sup><sub>8</sub>O has a binding energy per nucleon of 7.46 MeV.", "a": "Total binding energies: <sup>16</sup>O has 16 × 7.98 = 127.7 MeV, <sup>15</sup>O has 15 × 7.46 = 111.9 MeV. Removing a neutron takes you from the first bound state to the second plus a FREE neutron, which has zero binding energy, so the energy required is 127.7 − 111.9 = <b>15.8 MeV</b>. This is the neutron separation energy, and the method is the one Topic 03 generalises: an energy change is always a difference of TOTAL binding energies, never of per-nucleon ones." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Rounding the masses too early.</b> Δ<i>m</i> for helium-4 is 0.030377 u, and it comes from subtracting two numbers that agree to three significant figures. Chop the inputs to four decimals and you lose the answer's last two digits; chop to three and you lose the answer entirely. Carry every decimal you were given until the very last step.",
            "<b>Subtracting the wrong way round.</b> Constituents minus nucleus, always. Δ<i>m</i> is positive for every bound nucleus in existence, so a negative answer is a signal to swap the two terms, not to take the modulus and move on.",
            "<b>Mixing atomic and nuclear masses.</b> Use <i>m</i><sub>H</sub> = 1.007825 u with the atomic mass, or <i>m</i><sub>p</sub> = 1.007276 u with the nuclear mass. Mixing them leaves <i>Z</i> electrons in the answer, which for uranium is 0.05 u, bigger than most mass defects.",
            "<b>Comparing total binding energies to judge stability.</b> Uranium's <i>E</i><sub>b</sub> is huge and spread thin. Always divide by <i>A</i> before comparing two nuclei, and note that the DIVISION is only for comparing; energy releases are computed from totals.",
            "<b>Calling binding energy negative because the nucleus is bound.</b> The potential energy is negative; the binding energy is the positive amount you must pay to escape it. Two different quantities, opposite signs, and the exam question usually says which one it wants."
          ]
        },
        {
          "t": "protip",
          "html": "here is why nuclear energies are millions of times bigger than chemical ones, in one substitution from chapter 11. that chapter's uncertainty rule says confining a particle costs it kinetic energy, about 1 eV for an electron squeezed into 1 ångström. do the same sum for a nucleon squeezed into a nucleus. chapter 11's own constant <i>hc</i> = 1240 eV nm is identically <i>hc</i> = 1240 MeV fm, so ħ<i>c</i> = 1240/2π = 197 MeV fm. with Δ<i>x</i> about 5 fm, (Δ<i>p</i>)<i>c</i> ≈ ħ<i>c</i>/2Δ<i>x</i> = 197/10 ≈ 20 MeV, and the kinetic energy is (Δ<i>pc</i>)<sup>2</sup>/2<i>m</i><sub>n</sub><i>c</i><sup>2</sup> = 400/1880 ≈ 0.2 MeV. hundreds of keV just to be locked up, against about 1 eV for an electron in an atom. binding energies of 8 MeV per nucleon sit comfortably above that, and that single ratio is why a gram of uranium beats a tonne of coal."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Δm = [Z m<sub>H</sub> + (A − Z) m<sub>n</sub>] − M<sub>atom</sub>", "note": "Atomic masses throughout. The Z electrons cancel exactly." },
            { "f": "E<sub>b</sub> = Δm × 931.5 MeV", "note": "One multiplication. Δm in u, answer in MeV." },
            { "f": "E<sub>b</sub>/A is the stability measure", "note": "E<sub>b</sub> alone rises with A and ranks uranium above helium. It should not." },
            { "f": "Δm > 0 and E<sub>b</sub> > 0, always", "note": "A negative answer means you subtracted the wrong way." },
            { "f": "He-4: Δm = 0.030377 u, E<sub>b</sub> = 28.3 MeV, E<sub>b</sub>/A = 7.07", "note": "Only 0.75 per cent of the mass, and it is 28 million eV." },
            { "f": "Deuteron: E<sub>b</sub> = 2.22 MeV, E<sub>b</sub>/A = 1.11", "note": "The loosest bound nucleus there is. The floor of the curve." },
            { "f": "O-16: 127.6 MeV total, 7.98 per nucleon", "note": "Already near the best any nucleus manages." },
            { "f": "Energy change = difference of TOTAL binding energies", "note": "Never subtract two per-nucleon values directly." }
          ],
          "aids": [
            "keep every decimal until the last line. the whole answer lives in the fourth one.",
            "constituents minus nucleus. pieces first, whole second, answer positive.",
            "per nucleon to compare, totals to compute. two different jobs, two different numbers."
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "The Binding-Energy Curve and the Nuclear Force",
      "chip": "03 THE CURVE",
      "kalam": "everyone wants to be iron",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 02 gave you a way to compute <i>E</i><sub>b</sub>/<i>A</i> for any nucleus you like. Now do it for all of them, plot the answers against mass number, and look at the shape.<br><br>What comes out is one of the most consequential curves in physics. It climbs steeply from almost nothing at the deuteron, reaches a broad maximum of about <b>8.8 MeV per nucleon</b> near <i>A</i> = 56, in the iron and nickel region, and then declines slowly and steadily, reaching about <b>7.6 MeV per nucleon</b> by the time it gets to uranium.<br><br>That is the whole graph. Two hundred and fifty nuclides, one shape, and every nuclear power station and every star on the sky is a consequence of it."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.3 · THE BINDING-ENERGY CURVE",
          "chips": ["the shape", "both ends climb inward", "the light end, close up"],
          "captions": [
            "Binding energy per nucleon against mass number, plotted from measured values rather than sketched. Read three things off it. It RISES steeply for the first twenty nucleons or so, from 1.11 MeV at the deuteron to about 8 MeV at oxygen. It PEAKS broadly around A = 56, at 8.79 MeV for iron-56 and a hair higher for nickel-62, and it stays within a tenth of a MeV of that peak from about A = 40 to A = 90, which is why the maximum is called broad. And it FALLS gently after that, all the way to 7.57 MeV at uranium-238. Nothing in nature does better than about 8.8 MeV per nucleon.",
            "The same curve with the two arrows that make it matter. A light nucleus climbs toward the peak by JOINING another one, which is fusion, and the arrow runs up and to the right. A heavy nucleus climbs toward the peak by SPLITTING, which is fission, and the arrow runs up and to the left. Both arrows point uphill, and uphill on this graph means more tightly bound, which means surplus binding energy released. That is why the two opposite processes both give out energy, and it is the single most important sentence in the chapter.",
            "The first twenty nucleons, drawn unsmoothed, because at this end the curve genuinely is jagged and a smooth line would be a lie. The three marked nuclei are helium-4, carbon-12 and oxygen-16, and every one of them sits above its immediate neighbours. They are the nuclei made of whole alpha particles, and they are unusually well bound for their size. The smooth line in the first two chips is a trend through data like this, not the data itself. Notice also how low the left edge starts: the deuteron at A = 2 manages only 1.11 MeV per nucleon."
          ],
          "frames": [
            {
              "x": [0, 250],
              "y": [0, 10],
              "aspect": 0.72,
              "axisX": "mass number A",
              "axisY": "Eb/A (MeV)",
              "ticksX": { "at": [0, 50, 100, 150, 200, 250] },
              "ticksY": { "at": [0, 2, 4, 6, 8.8], "labels": ["0", "2", "4", "6", "8.8"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[1, 0], [2, 1.11], [3, 2.83], [6, 5.33], [7, 5.61], [9, 6.46], [12, 7.68], [16, 7.98], [20, 8.03], [24, 8.26], [28, 8.45], [40, 8.55], [56, 8.79], [62, 8.79], [80, 8.71], [100, 8.6], [120, 8.5], [140, 8.38], [160, 8.18], [180, 8.02], [200, 7.91], [220, 7.75], [238, 7.57]] }
              ],
              "points": [
                { "x": 56, "y": 8.79, "label": "Fe-56", "at": "ne" },
                { "x": 238, "y": 7.57, "label": "U-238", "at": "sw" }
              ]
            },
            {
              "x": [0, 250],
              "y": [0, 10],
              "aspect": 0.72,
              "axisX": "mass number A",
              "axisY": "Eb/A (MeV)",
              "ticksX": { "at": [0, 50, 100, 150, 200, 250] },
              "ticksY": { "at": [0, 2, 4, 6, 8.8], "labels": ["0", "2", "4", "6", "8.8"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[1, 0], [2, 1.11], [3, 2.83], [6, 5.33], [7, 5.61], [9, 6.46], [12, 7.68], [16, 7.98], [20, 8.03], [24, 8.26], [28, 8.45], [40, 8.55], [56, 8.79], [62, 8.79], [80, 8.71], [100, 8.6], [120, 8.5], [140, 8.38], [160, 8.18], [180, 8.02], [200, 7.91], [220, 7.75], [238, 7.57]] }
              ],
              "arrows": [
                { "from": [18, 3.2], "to": [52, 5.6], "tone": "green" },
                { "from": [228, 5.3], "to": [120, 7.2], "tone": "green" }
              ],
              "points": [{ "x": 56, "y": 8.79, "label": "Fe-56", "at": "ne" }],
              "labels": [
                { "x": 38, "y": 2.2, "text": "fusion" },
                { "x": 175, "y": 4.0, "text": "fission" }
              ]
            },
            {
              "x": [0, 20],
              "y": [0, 9],
              "aspect": 0.72,
              "axisX": "mass number A",
              "axisY": "Eb/A (MeV)",
              "ticksX": { "every": 4 },
              "ticksY": { "every": 2 },
              "curves": [
                { "c": "pts", "pts": [[1, 0], [2, 1.11], [3, 2.83], [4, 7.07], [6, 5.33], [7, 5.61], [8, 7.06], [9, 6.46], [10, 6.48], [11, 6.93], [12, 7.68], [13, 7.47], [14, 7.48], [15, 7.7], [16, 7.98], [17, 7.75], [18, 7.77], [19, 7.78], [20, 8.03]] }
              ],
              "points": [
                { "x": 4, "y": 7.07, "label": "He-4", "at": "ne" },
                { "x": 12, "y": 7.68, "label": "C-12", "at": "ne" },
                { "x": 16, "y": 7.98, "label": "O-16", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading the Curve, Region by Region",
          "steps": [
            "<b>The steep rise, light nuclei.</b> In a tiny nucleus almost every nucleon is on the surface with few neighbours to bond to. Add nucleons and each new one finds more partners, so <i>E</i><sub>b</sub>/<i>A</i> climbs fast. This is a volume-against-surface competition, and surface nucleons are the under-bonded ones.",
            "<b>The broad peak, <i>A</i> near 56.</b> Here the short-range nuclear force has SATURATED. A nucleon only feels its nearest neighbours, so adding more nucleons no longer increases the binding <i>per nucleon</i>. Stability is maximised, and the curve flattens rather than turning over sharply.",
            "<b>The gentle fall, heavy nuclei.</b> Every proton repels every OTHER proton through the long-range Coulomb force, so the disruptive electrostatic energy grows like <i>Z</i><sup>2</sup>, faster than the attractive nuclear binding can keep up with. The typical nucleon becomes slightly less tightly held and <i>E</i><sub>b</sub>/<i>A</i> slowly decreases.",
            "<b>The bumps.</b> Superimposed on all of that are small spikes at helium-4, carbon-12, oxygen-16 and at the magic numbers 2, 8, 20, 28, 50, 82 and 126 protons or neutrons. Those nuclei are unusually stable for their size. The curve is a smooth average trend and the bumps are real deviations from it, not drawing error."
          ]
        },
        {
          "t": "p",
          "html": "Now read the curve as a set of instructions, because that is what it is.<br><br>Any rearrangement that moves nucleons to a <b>higher</b> point on the curve leaves them more tightly bound, and the surplus binding energy has to go somewhere. It comes out as kinetic energy of the products and as radiation. There are exactly two ways to move uphill.<br><br><b>Light nuclei climb by joining.</b> Two small nuclei on the steep left-hand slope merge into a bigger one further up. That is <b>fusion</b>.<br><b>Heavy nuclei climb by splitting.</b> One large nucleus on the gentle right-hand slope breaks into two medium ones further up. That is <b>fission</b>.<br><br>Both directions lead toward iron, and both give out energy. That is not a coincidence or a curiosity; it is what a peaked curve means."
        },
        {
          "t": "formula",
          "kicker": "ENERGY RELEASED, WITHOUT TOUCHING A SINGLE MASS",
          "tag": "JEE ADVANCED FAVOURITE",
          "main": "<i>E</i><sub>released</sub> = (total BE of products) − (total BE of reactants)",
          "legend": [
            "Total BE of a nuclide = its <i>E</i><sub>b</sub>/<i>A</i> multiplied by its own <i>A</i>, in MeV.",
            "Sum over every product, and separately over every reactant.",
            "A positive result means energy comes OUT; a negative result means energy must go in.",
            "Free nucleons and neutrons count as zero: they are not bound to anything."
          ],
          "note": "Both sides are energies, so the difference is an energy, [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]. This is the one formula in the chapter that needs no masses at all. When a question hands you binding energies per nucleon, use this and do not go anywhere near a mass table. Multiply each <i>E</i><sub>b</sub>/<i>A</i> by its own <i>A</i> first: subtracting two per-nucleon values directly is the classic way to get this wrong."
        },
        {
          "t": "think",
          "html": "think of the curve as a valley seen upside down, with iron at the bottom of it. every nucleus in the universe would rather be iron. the light ones roll down toward it by clumping together, the heavy ones roll down toward it by breaking up, and in both cases the energy they lose on the way down is the energy that comes out. a star is just a very slow, very large object rolling downhill toward iron."
        },
        {
          "t": "p",
          "html": "So what supplies all this binding in the first place?<br><br>Not gravity: between two protons it is about 10<sup>36</sup> times too weak. Not the electric force: between two protons it <b>pushes them apart</b>, hard. At a separation of 2 fm the Coulomb repulsion between two protons is enormous, and yet nuclei full of protons sit there perfectly happily.<br><br>There is a fourth interaction, distinct from gravity, electromagnetism and anything you met in Class 11. The <b>strong nuclear force</b> acts between nucleons, overwhelms the electrostatic repulsion at nuclear distances, and clamps the nucleus together. It has a very particular set of properties, and each one of them explains something you have already seen."
        },
        {
          "t": "defgrid",
          "title": "Six Properties of the Nuclear Force",
          "tag": "CBSE ASKS FOR FOUR OF THESE",
          "rows": [
            { "k": "Strongest", "v": "The strongest of the fundamental forces in its own domain, about 100 times the electrostatic force at nuclear separations. That is what lets it beat proton-proton repulsion." },
            { "k": "Short-range", "v": "Effective only within about 2 to 3 fm, and essentially zero beyond. Which is why it holds a nucleus together but does nothing at all between two atoms." },
            { "k": "Charge-independent", "v": "The attraction is the same between n-n, n-p and p-p pairs. The force does not care about electric charge at all." },
            { "k": "Saturated", "v": "Each nucleon attracts only its nearest neighbours, not all the others. This is why total binding energy grows roughly in proportion to <i>A</i>, and why nuclear density is constant." },
            { "k": "Repulsive core", "v": "Below about 0.7 fm the force turns strongly REPULSIVE, which stops the nucleus collapsing and fixes the spacing between nucleons." },
            { "k": "Spin-dependent", "v": "Its strength depends on the relative orientation of the two nucleons' spins, and it is not purely central. This is beyond the syllabus but it is why the deuteron exists at all." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.4 · THE FORCE BETWEEN TWO NUCLEONS",
          "chips": ["the shape", "the three ranges"],
          "captions": [
            "Potential energy of two nucleons against their separation, in femtometres and MeV. The zero is at infinite separation, which is Chapter 12's convention and is unchanged here: negative means bound. Coming in from the right the curve is flat at zero, so two nucleons three femtometres apart do not feel each other at all. Then it plunges into a deep attractive well about 50 MeV below zero, with its minimum near 1 fm. Then, below about 0.7 fm, it turns sharply upward and becomes strongly repulsive. That upturn is why a nucleus does not collapse to a point.",
            "The same curve with its three ranges marked. Beyond about 2.5 fm there is effectively no force, which is what short-range means. Between about 0.7 and 2.5 fm the force is attractive, and this is the band a nucleon actually lives in. Below 0.7 fm it is repulsive, hard, and that hard core sets the spacing between neighbouring nucleons, which is what makes every nucleus the same density. The well depth of roughly 50 MeV is worth comparing with the 8 MeV per nucleon of the binding-energy curve: a nucleon does not sit at the bottom of the well, it sits well up it, because it also carries kinetic energy."
          ],
          "frames": [
            {
              "x": [0, 4],
              "y": [-60, 40],
              "aspect": 0.72,
              "axisX": "separation r (fm)",
              "axisY": "U (MeV)",
              "ticksX": { "every": 1 },
              "ticksY": { "at": [-50, -25, 25], "labels": ["−50", "−25", "25"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0.35, 40], [0.5, 20], [0.6, 0], [0.7, -25], [0.8, -42], [0.9, -50], [1.0, -52], [1.1, -50], [1.3, -40], [1.5, -28], [1.8, -15], [2.1, -7], [2.5, -2.5], [3.0, -0.8], [3.5, -0.2], [4.0, 0]] }
              ],
              "points": [{ "x": 1.0, "y": -52, "label": "−52 MeV", "at": "se" }],
              "labels": [{ "x": 3.1, "y": 12, "text": "zero far away", "soft": true }]
            },
            {
              "x": [0, 4],
              "y": [-60, 40],
              "aspect": 0.72,
              "axisX": "separation r (fm)",
              "axisY": "U (MeV)",
              "ticksX": { "every": 1 },
              "ticksY": { "at": [-50, -25, 25], "labels": ["−50", "−25", "25"] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0.35, 40], [0.5, 20], [0.6, 0], [0.7, -25], [0.8, -42], [0.9, -50], [1.0, -52], [1.1, -50], [1.3, -40], [1.5, -28], [1.8, -15], [2.1, -7], [2.5, -2.5], [3.0, -0.8], [3.5, -0.2], [4.0, 0]] },
                { "c": "vline", "x": 0.7, "dash": true, "soft": true },
                { "c": "vline", "x": 2.5, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 0.28, "y": -30, "text": "repulsive" },
                { "x": 1.55, "y": 26, "text": "attractive well" },
                { "x": 3.25, "y": 26, "text": "no force here" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Magic numbers",
          "html": "Nuclei with 2, 8, 20, 28, 50, 82 or 126 protons or neutrons are unusually stable, and they are the bumps that sit above the smooth curve.<br><br>Helium-4 has 2 of each. Oxygen-16 has 8 of each. Calcium-40 has 20 of each. Lead-208 has 82 protons and 126 neutrons, and it is doubly magic, which is why it is the heaviest stable nuclide and the destination of the uranium decay chain in Topic 04.<br><br>The reason is the same as the reason a noble gas is chemically inert: nucleons fill shells, and a filled shell is hard to disturb. The liquid-drop picture behind the smooth curve knows nothing about shells, which is precisely why the magic nuclei stick out of it."
        },
        {
          "t": "deriv",
          "kicker": "WHY SATURATION MAKES BINDING ENERGY GROW LIKE A, NOT A SQUARED",
          "steps": [
            { "eq": "suppose every nucleon attracted EVERY other nucleon", "why": "This is the hypothesis we are about to demolish, and it is the natural first guess. It is what gravity does, and what the Coulomb force does between the protons." },
            { "eq": "then the number of bonds is <i>A</i>(<i>A</i> − 1)/2", "why": "Count the pairs: the first nucleon bonds to <i>A</i> − 1 others, the second to <i>A</i> − 2 new ones, and so on. That is the same counting as handshakes in a room, and it grows like <i>A</i><sup>2</sup>/2." },
            { "eq": "so <i>E</i><sub>b</sub> would go as <i>A</i><sup>2</sup> and <i>E</i><sub>b</sub>/<i>A</i> would go as <i>A</i>", "why": "The per-nucleon binding would rise without limit. Uranium would be about sixty times more tightly bound per nucleon than helium, and nothing would ever fission." },
            { "eq": "measured: <i>E</i><sub>b</sub>/<i>A</i> is roughly CONSTANT across the plateau", "why": "Look at the curve. From <i>A</i> = 20 to <i>A</i> = 200 it stays between 8.0 and 8.8 MeV, a variation of ten per cent where the hypothesis predicted a factor of ten. The hypothesis is dead." },
            { "eq": "therefore each nucleon bonds to a FIXED small number of neighbours", "why": "That is saturation, and it is forced on us by the data rather than assumed. It follows from the short range of the nuclear force: a nucleon simply cannot feel a nucleon on the far side of a large nucleus. The bond count then grows like <i>A</i>, so <i>E</i><sub>b</sub> ∝ <i>A</i> and <i>E</i><sub>b</sub>/<i>A</i> is constant, which is exactly the flat plateau you see." },
            { "eq": "and the Coulomb term is the one that is NOT saturated", "why": "Every proton repels every other one however far away, so the electrostatic energy really does go as <i>Z</i>(<i>Z</i> − 1)/2, that is like <i>Z</i><sup>2</sup>. One term saturating and the other not is the entire explanation of why the curve is flat in the middle and falls at the right." }
          ]
        },
        {
          "t": "p",
          "html": "Two of those six properties explain results you already have.<br><br><b>Saturation explains why <i>E</i><sub>b</sub> grows roughly like <i>A</i>.</b> If every nucleon attracted every other nucleon, the number of bonds would go as <i>A</i>(<i>A</i> − 1)/2 and the binding energy would grow like <i>A</i><sup>2</sup>. It does not. Each nucleon bonds only to its handful of neighbours, so the bond count grows like <i>A</i> and so does the binding.<br><br><b>The repulsive core explains constant density.</b> Nucleons cannot be squeezed closer than about 0.7 fm without the force pushing back hard, so the spacing between them is fixed. Fixed spacing plus a fixed mass per nucleon is exactly a fixed density, which is Topic 01's result arriving from the other direction."
        },
        {
          "t": "p",
          "html": "One last pattern before the numbers. Plot every stable nuclide as a point, with the neutron number up the page and the proton number across, and the stable ones do not scatter: they lie in a narrow band.<br><br>For light nuclei that band follows <i>N</i> ≈ <i>Z</i>. Carbon-12 has six of each, oxygen-16 has eight of each. But as nuclei grow, the Coulomb repulsion between protons grows like <i>Z</i><sup>2</sup> while the nuclear attraction only grows like <i>A</i>, so heavy nuclei need <b>extra neutrons</b>: neutrons add binding without adding charge. By the time you reach lead, <i>N</i>/<i>Z</i> is about 1.5.<br><br>Step too far off that band in either direction and the nucleus is unstable. It will rearrange itself to get back on, and that rearrangement is radioactivity, which is Topic 04."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "THE BAND OF STABILITY",
          "chips": ["stable nuclei against N = Z"],
          "captions": [
            "Every stable nuclide, sketched as a band, with the dashed N = Z line for comparison. Up to about calcium the band sits on the dashed line: light stable nuclei have equal numbers of protons and neutrons. Past that it peels away upward, because each extra proton adds Coulomb repulsion to the whole nucleus while each extra neutron adds only attraction, so a heavy nucleus buys stability with surplus neutrons. Iron-56 already needs 30 neutrons to 26 protons; uranium-238 needs 146 to 92, a ratio of 1.59. A nuclide sitting above the band has too many neutrons and a nuclide below it has too many protons, and both will decay to get back onto it. That is the map Topic 04's decay modes move around on."
          ],
          "frames": [
            {
              "x": [0, 100],
              "y": [0, 160],
              "aspect": 0.72,
              "axisX": "Z (protons)",
              "axisY": "N (neutrons)",
              "ticksX": { "every": 20 },
              "ticksY": { "every": 40 },
              "curves": [
                { "c": "line", "m": 1, "k": 0, "dash": true, "soft": true },
                { "c": "pts", "smooth": true, "pts": [[1, 0], [2, 2], [6, 6], [8, 8], [10, 10], [14, 14], [20, 20], [26, 30], [32, 38], [40, 50], [50, 69], [60, 82], [70, 103], [82, 126], [92, 146]] }
              ],
              "points": [
                { "x": 26, "y": 30, "label": "Fe-56", "at": "se" },
                { "x": 92, "y": 146, "label": "U-238", "at": "sw" }
              ],
              "labels": [
                { "x": 58, "y": 52, "text": "N = Z line", "soft": true },
                { "x": 24, "y": 122, "text": "too many neutrons", "soft": true },
                { "x": 74, "y": 36, "text": "too many protons", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Four nuclei have binding energies per nucleon P = 7.1 MeV, Q = 8.8 MeV, R = 8.0 MeV, S = 7.6 MeV. Which is the most stable, and would a reaction turning S into Q release energy?",
          "steps": [
            "Stability is read off <i>E</i><sub>b</sub>/<i>A</i> alone, so simply pick the largest.",
            "The largest is Q at 8.8 MeV, which is the peak of the curve.",
            "For S to Q: <i>E</i><sub>b</sub>/<i>A</i> rises from 7.6 to 8.8.",
            "Rising means more tightly bound products, so the surplus is released."
          ],
          "ans": "Q is the most stable, and S going to Q releases energy. The trap catches students who compare TOTAL binding energies, which need mass numbers this question never gives, or who assume heavier means more stable. Speed rule: any move that raises <i>E</i><sub>b</sub>/<i>A</i> liberates energy, and no arithmetic is needed to see it."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A heavy nucleus of mass number <i>A</i> = 240 with binding energy per nucleon 7.6 MeV splits into two fragments each of mass number 120 with binding energy per nucleon 8.5 MeV. Calculate the energy released.",
          "steps": [
            "Energy released equals the INCREASE in total binding energy.",
            "Parent total BE = 240 × 7.6 = 1824 MeV.",
            "Products total BE = 2 × (120 × 8.5) = 2 × 1020 = 2040 MeV.",
            "<i>E</i><sub>released</sub> = 2040 − 1824 = 216 MeV."
          ],
          "ans": "About 216 MeV per fission, and the plausibility check is immediate: real uranium fission releases about 200 MeV, so this is the right size. Notice that no mass appears anywhere in the calculation. Notice too that subtracting the per-nucleon values directly, 8.5 − 7.6 = 0.9, would have given 0.9 MeV, which is two hundred times too small. Multiply by <i>A</i> first, every time."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two deuterons (<i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV) fuse to form a helium-4 nucleus (<i>E</i><sub>b</sub>/<i>A</i> = 7.07 MeV). Using binding-energy values only, estimate the energy released.",
          "steps": [
            "Reactants: two deuterons, each of <i>A</i> = 2, so total BE = 2 × (2 × 1.11) = 4.44 MeV.",
            "Products: one helium-4, <i>A</i> = 4, so total BE = 4 × 7.07 = 28.28 MeV.",
            "<i>E</i><sub>released</sub> = 28.28 − 4.44 = 23.84 MeV."
          ],
          "ans": "About 23.8 MeV. That is the same method as the fission example run in the opposite direction on the curve, and it is worth noticing how much bigger it is PER NUCLEON: 23.8 MeV shared over 4 nucleons is 5.96 MeV each, against 216 MeV over 240 nucleons which is 0.9 MeV each. Fusion wins per nucleon by a factor of more than six, and that is a direct reading of the steep left limb against the gentle right one."
        },
        {
          "t": "mcq",
          "q": "The binding energy per nucleon is maximum for nuclei near mass number:",
          "opts": [
            { "label": "4", "nudge": "Helium-4 is tightly bound FOR A LIGHT NUCLEUS, at 7.07 MeV, and it is a genuine spike on the curve. But it is still well below the 8.8 MeV peak." },
            { "label": "56", "nudge": null },
            { "label": "138", "nudge": "This lies on the declining heavy side of the curve, at about 8.4 MeV, where Coulomb repulsion has already begun to lower the per-nucleon binding." },
            { "label": "238", "nudge": "This is uranium, at 7.57 MeV, near the far right end of the fall. It is close to the LEAST tightly bound of the heavy nuclei, which is exactly why it can fission." }
          ],
          "correct": 1,
          "solution": "The curve peaks at about 8.8 MeV per nucleon in the iron region, <i>A</i> ≈ 56. To be exact, nickel-62 edges out iron-56 by a few thousandths of an MeV, but the peak is broad and every exam names iron. The three wrong options are all real points on the curve, which is why reading the shape rather than memorising one number is the safer preparation."
        },
        {
          "t": "mcq",
          "q": "Energy is released in the nuclear fission of a heavy nucleus because:",
          "opts": [
            { "label": "the products have lower binding energy per nucleon", "nudge": "This reverses the logic exactly. Lower <i>E</i><sub>b</sub>/<i>A</i> means more loosely bound products, which would need energy put IN." },
            { "label": "the products have higher binding energy per nucleon", "nudge": null },
            { "label": "mass is created", "nudge": "Mass is CONVERTED, never created. The products are lighter than the parent, and the missing mass is where the energy came from." },
            { "label": "the Coulomb force does positive work only", "nudge": "The Coulomb repulsion between the separating fragments does carry a large share of the released energy, but it is a mechanism, not the reason. The reason is the binding-energy bookkeeping." }
          ],
          "correct": 1,
          "solution": "Fission products sit nearer the peak of the curve, so they are more tightly bound than the parent, and the surplus binding energy is released. Every energy-release question in this chapter reduces to the same sentence: did the rearrangement move nucleons UP the curve?"
        },
        {
          "t": "mcq",
          "q": "Which property of the nuclear force explains the near-constant density of all nuclei?",
          "opts": [
            { "label": "it is charge-independent", "nudge": "True, but that explains why n-p and p-p attractions are equal. It says nothing about spacing, and spacing is what fixes density." },
            { "label": "it is long-range", "nudge": "This is simply false. The nuclear force is short-range, effective only over about 2 to 3 fm, which is one of its defining properties." },
            { "label": "it saturates and has a repulsive core", "nudge": null },
            { "label": "it is purely attractive", "nudge": "Also false, and importantly so: a purely attractive force with no repulsive core would let the nucleus collapse, and density would then be unbounded rather than constant." }
          ],
          "correct": 2,
          "solution": "Saturation means each nucleon bonds only to its nearest neighbours, and the repulsive core below 0.7 fm stops them getting any closer. Together they fix a constant spacing between nucleons, so the volume per nucleon is fixed, so the density is independent of <i>A</i>. This is Topic 01's algebraic result arriving from the physics side."
        },
        {
          "t": "mcq",
          "q": "Nucleus X (<i>A</i> = 20, <i>E</i><sub>b</sub>/<i>A</i> = 8.0 MeV) and nucleus Y (<i>A</i> = 100, <i>E</i><sub>b</sub>/<i>A</i> = 8.6 MeV). Which statement is correct?",
          "opts": [
            { "label": "X has the greater total binding energy", "nudge": "160 MeV against 860 MeV. Total binding energy is <i>E</i><sub>b</sub>/<i>A</i> times <i>A</i>, and Y has five times the nucleons." },
            { "label": "X is the more stable nucleus", "nudge": "Stability is read off <i>E</i><sub>b</sub>/<i>A</i>, and X has the LOWER value of the two, 8.0 against 8.6." },
            { "label": "Y is more stable and has the greater total binding energy", "nudge": null },
            { "label": "They are equally stable since both are near 8 MeV", "nudge": "A gap of 0.6 MeV per nucleon is not a rounding difference. Over 100 nucleons it is 60 MeV, which is twice the entire binding energy of a helium nucleus." }
          ],
          "correct": 2,
          "solution": "Y wins both ways here, and the question exists to show that the two measures usually agree but answer different questions. Total BE: X gives 20 × 8.0 = 160 MeV, Y gives 100 × 8.6 = 860 MeV. Stability: 8.6 beats 8.0, so Y again. The two measures only DISAGREE when you compare a light nucleus with a very heavy one, which is exactly the uranium-against-helium case that makes fission possible."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Sketch the binding-energy-per-nucleon curve and mark on it the regions where fusion and fission release energy. State the value and location of the maximum.", "a": "Axes: <i>E</i><sub>b</sub>/<i>A</i> in MeV up, mass number <i>A</i> across. The curve rises steeply to about <b>8.8 MeV per nucleon near <i>A</i> = 56</b> (the iron region), then falls gently to about 7.6 MeV at <i>A</i> = 238. <b>Fusion</b> is the region to the LEFT of the peak: light nuclei joining move right and up. <b>Fission</b> is the region to the RIGHT: heavy nuclei splitting move left and up. Mark both arrows pointing toward the peak. Boards award marks for labelled axes, the numerical peak value and the two arrows in the correct directions." },
            { "q": "[JEE Main] State any four properties of the nuclear force, and explain how saturation makes binding energy roughly proportional to mass number.", "a": "Four from: strongest of the fundamental forces in its domain (about 100 times electrostatic at nuclear range); short-range (about 2 to 3 fm); charge-independent (n-n, n-p and p-p attractions equal); saturated (each nucleon bonds only to its nearest neighbours); repulsive below about 0.7 fm; spin-dependent. <b>Saturation:</b> if every nucleon attracted every other one there would be <i>A</i>(<i>A</i> − 1)/2 bonds and <i>E</i><sub>b</sub> would grow like <i>A</i><sup>2</sup>. Because each nucleon bonds only to a fixed small number of neighbours, the bond count grows like <i>A</i>, so <i>E</i><sub>b</sub> ∝ <i>A</i> and <i>E</i><sub>b</sub>/<i>A</i> is roughly constant across the plateau." },
            { "q": "[NEET] A nucleus with <i>A</i> = 200 and <i>E</i><sub>b</sub>/<i>A</i> = 7.8 MeV splits into two equal fragments with <i>E</i><sub>b</sub>/<i>A</i> = 8.4 MeV. Find the energy released.", "a": "Parent total BE = 200 × 7.8 = 1560 MeV. Products = 2 × (100 × 8.4) = 1680 MeV. Released = 1680 − 1560 = <b>120 MeV</b>. Check the size: a fission of a heavy nucleus should land somewhere near 200 MeV, and 120 is the right order for a smaller parent and a smaller climb." },
            { "q": "[JEE Main] Why does the binding-energy curve fall for heavy nuclei, and why do stable heavy nuclei need more neutrons than protons?", "a": "Both have the same cause. Coulomb repulsion acts between EVERY pair of protons and is long-range, so the disruptive energy grows like <i>Z</i><sup>2</sup>. The attractive nuclear force is short-range and saturated, so the binding grows only like <i>A</i>. Past the iron region the <i>Z</i><sup>2</sup> term catches up and <i>E</i><sub>b</sub>/<i>A</i> starts to fall. The same imbalance is why heavy nuclei need surplus neutrons: a neutron adds nuclear attraction without adding any charge, so extra neutrons buy binding for free. <i>N</i>/<i>Z</i> drifts from 1 at light nuclei to about 1.5 at the heaviest stable ones." },
            { "q": "[JEE Advanced] Using <i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV for the deuteron and 2.83 MeV for tritium (<sup>3</sup><sub>1</sub>H) and 7.07 MeV for helium-4, estimate the energy released in <sup>2</sup>H + <sup>3</sup>H going to <sup>4</sup>He + n.", "a": "Reactants: deuteron 2 × 1.11 = 2.22 MeV, tritium 3 × 2.83 = 8.49 MeV, total <b>10.71 MeV</b>. Products: helium-4 4 × 7.07 = 28.28 MeV, and the free neutron contributes <b>zero</b> because it is not bound to anything. Released = 28.28 − 10.71 = <b>17.6 MeV</b>. This is the deuterium-tritium reaction, and Topic 05 computes exactly the same 17.6 MeV from atomic masses instead. Two completely independent routes to the same number is as good a check as this chapter offers." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Subtracting two per-nucleon values to get an energy release.</b> 8.5 − 7.6 = 0.9 MeV is not the answer to anything. Multiply each <i>E</i><sub>b</sub>/<i>A</i> by its own mass number FIRST, then subtract totals. The correct answer to that example is 216 MeV, two hundred times larger.",
            "<b>Forgetting that a free nucleon has zero binding energy.</b> When a reaction emits a neutron, that neutron contributes nothing to the product side. Students who assign it 8 MeV because <i>everything is about 8</i> lose the whole answer.",
            "<b>Thinking heavy nuclei are more stable because <i>E</i><sub>b</sub> is huge.</b> Uranium's total binding energy is 1802 MeV, more than eight hundred times the deuteron's. It is spread over 238 nucleons, so per nucleon it is BELOW iron's, and that is exactly why it can release energy by fissioning.",
            "<b>Calling the nuclear force long-range because it is strong.</b> Strength and range are separate properties. It is the strongest force there is at 1 fm and it is effectively zero at 5 fm, and the second half of that sentence is what makes saturation and constant density possible.",
            "<b>Drawing the curve peaking sharply.</b> It is a BROAD maximum: from about <i>A</i> = 40 to <i>A</i> = 90 the value stays within a tenth of an MeV of 8.7. A drawing with a sharp spike at 56 loses marks and, worse, hides why so many medium nuclei are stable."
          ]
        },
        {
          "t": "protip",
          "html": "the curve is worth more to you than any formula in the chapter, so learn four points and the shape joins them by itself. deuteron at <i>A</i> = 2 is 1.1. helium-4 at <i>A</i> = 4 is 7.1. iron at <i>A</i> = 56 is 8.8. uranium at <i>A</i> = 238 is 7.6. with those four you can sketch it, you can answer every conceptual question about it, and you can sanity-check any energy release you compute. and if you want to know where the shape comes from quantitatively rather than qualitatively, it is the liquid-drop or semi-empirical mass formula: a volume term that grows with <i>A</i>, a surface term that penalises small nuclei, and a coulomb term that penalises big ones, and the competition between the second and third puts the maximum right where the data does. that is beyond the syllabus, but knowing it exists stops the curve feeling like an arbitrary fact."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Peak ≈ 8.8 MeV per nucleon at A ≈ 56", "note": "The iron region. Nothing in nature does better." },
            { "f": "Rises steeply, peaks broadly, falls gently", "note": "1.1 at the deuteron, 8.8 at iron, 7.6 at uranium." },
            { "f": "Rise: surface nucleons are under-bonded", "note": "Add nucleons and each new one finds more neighbours." },
            { "f": "Fall: Coulomb repulsion grows like Z<sup>2</sup>", "note": "Faster than binding, which only grows like A." },
            { "f": "E<sub>released</sub> = BE(products) − BE(reactants)", "note": "Multiply each E<sub>b</sub>/A by its own A first. A free neutron is zero." },
            { "f": "Both ends climb toward the middle", "note": "Fusion from the left, fission from the right, energy out either way." },
            { "f": "Nuclear force: strong, short, charge-blind, saturated, hard core", "note": "Saturation gives E<sub>b</sub> ∝ A; the hard core gives constant density." },
            { "f": "Stability band: N = Z light, N/Z ≈ 1.5 heavy", "note": "Extra neutrons add binding without adding charge." }
          ],
          "aids": [
            "two, four, fifty-six, two thirty-eight: 1.1, 7.1, 8.8, 7.6. four points and you can draw the whole thing.",
            "uphill on the curve means energy out. both ends are uphill toward iron.",
            "totals not averages. multiply by A before you subtract, or you will be off by a factor of A."
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Radioactivity: Decay Modes, the Decay Law and Activity",
      "chip": "04 THE CLOCK",
      "kalam": "you cannot predict one, you can predict a billion perfectly",
      "blocks": [
        {
          "t": "p",
          "html": "In 1896 Henri Becquerel left some uranium salts in a drawer on top of a wrapped photographic plate, in the dark, expecting nothing. The plate came out fogged. Something was coming out of the uranium continuously, with no light, no heating, no chemistry, and no way to switch it off.<br><br>That something is <b>radioactivity</b>: the spontaneous transformation of an unstable nucleus into a more stable one. Topic 03's stability band says which nuclei are unstable. This topic says what they do about it, and how fast.<br><br>The word <b>spontaneous</b> is doing real work. You cannot start it, stop it, speed it up or slow it down. Heat the sample, cool it, crush it, dissolve it, put it under pressure, bond it into a different molecule: the decay rate does not change, to extraordinary precision. The action happens deep in the nucleus, completely shielded from the chemistry of the electrons."
        },
        {
          "t": "p",
          "html": "The second strange feature is deeper. Radioactive decay is <b>purely random</b>.<br><br>You cannot point at a single nucleus and predict when it will decay. It might go in the next second or sit unchanged for a million years, and there is no experiment that could tell you which. There is no ageing either: a nucleus that has already survived a billion years is no more <i>due</i> to decay than one made a second ago. It has no memory and no internal clock.<br><br>What you <b>can</b> predict, with beautiful precision, is the behaviour of a crowd. A microgram of anything contains around 10<sup>15</sup> nuclei, and the statistics of 10<sup>15</sup> independent coin flips are so tight that the smooth exponential curve of the next few pages is, for all practical purposes, exact."
        },
        {
          "t": "think",
          "html": "a multiplex hall at the end of the film. you cannot say which person walks out at which second, but you can say the rate people leave is proportional to how many are still inside. packed hall, people pour out; a handful left, a trickle. radioactive nuclei behave identically, and that one sentence is the whole physics of the decay law: d<i>N</i>/d<i>t</i> ∝ −<i>N</i>. everything else in this topic is calculus applied to it."
        },
        {
          "t": "p",
          "html": "An unstable nucleus has three main ways to settle down.<br><br><b>Alpha decay.</b> It ejects a whole helium-4 nucleus, <sup>4</sup><sub>2</sub>He, called an alpha particle. The parent loses 2 protons and 2 neutrons, so <i>A</i> drops by 4 and <i>Z</i> by 2. Helium-4 is ejected as one intact package rather than as four loose nucleons because, as Topic 02 showed, it is remarkably tightly bound at 7.07 MeV per nucleon.<br><br><b>Beta decay.</b> Inside the nucleus one kind of nucleon turns into the other. In <b>beta-minus</b> a neutron becomes a proton and a fast electron and an antineutrino fly out: <i>n</i> goes to <i>p</i> + <i>e</i><sup>−</sup> + antineutrino. In <b>beta-plus</b> a proton becomes a neutron and a positron and a neutrino leave: <i>p</i> goes to <i>n</i> + <i>e</i><sup>+</sup> + neutrino. Either way <i>A</i> is unchanged and only <i>Z</i> shifts by one.<br><br><b>Gamma decay.</b> A nucleus left in an excited state after an alpha or beta decay drops to its ground state and emits a high-energy photon. Neither <i>Z</i> nor <i>A</i> changes; only energy leaves. It is the nuclear version of the photon emission Chapter 11 introduced and Chapter 12 used for spectral lines, at a million times the energy."
        },
        {
          "t": "def",
          "term": "The neutrino, and why it has to be there",
          "html": "An alpha particle comes out with a single sharp energy, as conservation of energy demands for a two-body split. A beta particle does not: it comes out with any energy from zero up to a maximum, a continuous spectrum.<br><br>That looked like energy conservation failing, until Pauli proposed a third, almost undetectable particle sharing the energy. Three products can share a fixed total in infinitely many ways, so the electron's share varies. The particle is the <b>neutrino</b> (with the beta-plus) or <b>antineutrino</b> (with the beta-minus): neutral, almost massless, and barely interacting. It was postulated in 1930 to save a conservation law and detected in 1956."
        },
        {
          "t": "defgrid",
          "title": "The Displacement (Soddy-Fajans) Laws",
          "tag": "BALANCE A AND Z, EVERY TIME",
          "rows": [
            { "k": "Alpha", "v": "<sup><i>A</i></sup><sub><i>Z</i></sub>X goes to <sup><i>A</i>−4</sup><sub><i>Z</i>−2</sub>Y + <sup>4</sup><sub>2</sub>He. <i>A</i> down 4, <i>Z</i> down 2, <i>N</i> down 2." },
            { "k": "Beta-minus", "v": "<sup><i>A</i></sup><sub><i>Z</i></sub>X goes to <sup><i>A</i></sup><sub><i>Z</i>+1</sub>Y + <i>e</i><sup>−</sup> + antineutrino. <i>A</i> same, <i>Z</i> up 1, <i>N</i> down 1." },
            { "k": "Beta-plus", "v": "<sup><i>A</i></sup><sub><i>Z</i></sub>X goes to <sup><i>A</i></sup><sub><i>Z</i>−1</sub>Y + <i>e</i><sup>+</sup> + neutrino. <i>A</i> same, <i>Z</i> down 1, <i>N</i> up 1." },
            { "k": "Gamma", "v": "<sup><i>A</i></sup><sub><i>Z</i></sub>X* goes to <sup><i>A</i></sup><sub><i>Z</i></sub>X + γ. Nothing changes but the energy. The star means an excited nucleus." },
            { "k": "The check", "v": "Sum the top numbers on each side and sum the bottom numbers on each side. Both must balance. An electron counts as <i>A</i> = 0, <i>Z</i> = −1." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "THE THREE DECAYS AS MOVES ON A MAP",
          "chips": ["alpha", "beta minus", "beta plus", "all three"],
          "captions": [
            "The parent nucleus sits at the origin and the axes count the CHANGE in its proton and neutron numbers. Alpha decay throws out a whole helium nucleus, two protons and two neutrons, so the daughter lands two steps left and two steps down. The mass number falls by four, which is the only decay that changes it. On Topic 03's stability band this move goes down and to the left along the band, which is why the heavy elements walk down the chart in a chain of alphas rather than in one jump.",
            "Beta-minus decay: a neutron inside the nucleus turns into a proton. So the neutron count falls by one, the proton count rises by one, and the total is unchanged. On the map that is one step right and one step down, a diagonal that keeps A constant. A nucleus ABOVE the stability band has too many neutrons, and this is exactly the move that fixes it. It is the commonest decay in nature for that reason.",
            "Beta-plus decay: a proton turns into a neutron. One step left and one step up, the exact mirror of beta-minus, and again A is unchanged. This is the move for a nucleus BELOW the band, one with too many protons. Both beta decays run along the same diagonal in opposite directions, and which one a nucleus chooses is decided entirely by which side of the band it sits on.",
            "All three on one map. Notice that the two beta arrows lie on the same diagonal line of constant A, pointing opposite ways, while the alpha arrow leaves that line entirely. And gamma decay is not drawn, because there is nothing to draw: the nucleus does not move at all. It stays exactly where it is and sheds energy as a photon. If a decay puzzle gives you a parent and a daughter, find them both on this map and the arrow between them names the mode."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "aspect": 0.72,
              "axes": "cross",
              "axisX": "change in Z",
              "axisY": "change in N",
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": -2, "y": -2, "glyph": "open" }
              ],
              "arrows": [{ "from": [0, 0], "to": [-2, -2], "tone": "amber", "label": "α", "at": "below" }],
              "labels": [
                { "x": -1.3, "y": 2.5, "text": "A−4, Z−2, N−2" },
                { "x": 0.55, "y": 0.55, "text": "parent", "soft": true },
                { "x": -1.9, "y": -2.55, "text": "daughter", "soft": true }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "aspect": 0.72,
              "axes": "cross",
              "axisX": "change in Z",
              "axisY": "change in N",
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": 1, "y": -1, "glyph": "open" }
              ],
              "arrows": [{ "from": [0, 0], "to": [1, -1], "tone": "amber", "label": "β−", "at": "below" }],
              "labels": [
                { "x": -1.3, "y": 2.5, "text": "A same, Z+1, N−1" },
                { "x": -0.35, "y": 0.75, "text": "parent", "soft": true },
                { "x": 1.55, "y": -1.5, "text": "daughter", "soft": true }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "aspect": 0.72,
              "axes": "cross",
              "axisX": "change in Z",
              "axisY": "change in N",
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": -1, "y": 1, "glyph": "open" }
              ],
              "arrows": [{ "from": [0, 0], "to": [-1, 1], "tone": "amber", "label": "β+", "at": "below" }],
              "labels": [
                { "x": -1.3, "y": 2.5, "text": "A same, Z−1, N+1" },
                { "x": 0.55, "y": -0.35, "text": "parent", "soft": true },
                { "x": -1.5, "y": 1.75, "text": "daughter", "soft": true }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-3, 3],
              "aspect": 0.72,
              "axes": "cross",
              "axisX": "change in Z",
              "axisY": "change in N",
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": -2, "y": -2, "glyph": "open" },
                { "x": 1, "y": -1, "glyph": "open" },
                { "x": -1, "y": 1, "glyph": "open" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [-2, -2], "tone": "amber", "label": "α", "at": "below" },
                { "from": [0, 0], "to": [1, -1], "tone": "amber", "label": "β−", "at": "below" },
                { "from": [0, 0], "to": [-1, 1], "tone": "amber", "label": "β+", "at": "below" }
              ],
              "labels": [
                { "x": -1.3, "y": 2.5, "text": "γ: nothing moves" },
                { "x": 0.55, "y": 0.9, "text": "parent", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Balancing a Decay Equation",
          "steps": [
            "<b>Write both sides with full symbols</b>, mass number above and atomic number below, including the emitted particle. An alpha is <sup>4</sup><sub>2</sub>He, a beta-minus electron is <sup>0</sup><sub>−1</sub><i>e</i>, a beta-plus positron is <sup>0</sup><sub>+1</sub><i>e</i>, a gamma is <sup>0</sup><sub>0</sub>γ.",
            "<b>Sum the top numbers on each side.</b> They must be equal. This is nucleon-number conservation and it is never violated.",
            "<b>Sum the bottom numbers on each side.</b> They must be equal too. This is charge conservation, and it is why the electron carries <i>Z</i> = −1: the nucleus gained a positive charge, so something negative had to leave.",
            "<b>Read off the unknown.</b> Two equations, and a decay problem never has more than two unknowns, so the daughter is fully determined by the arithmetic.",
            "<b>Sanity-check against the map.</b> Did <i>A</i> change? Then it was an alpha. Did <i>A</i> stay and <i>Z</i> rise? Beta-minus. Did nothing change at all? Gamma."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "A DECAY CHAIN, AND WHERE IT STOPS",
          "chips": ["the first three steps", "the whole series"],
          "captions": [
            "The head of the uranium series. Uranium-238 alpha decays to thorium-234, which beta-minus decays to protactinium-234, which beta-minus decays again. Notice what the alpha did to the neutron-proton balance: it removed two of each, and since uranium already has surplus neutrons, the daughter is left even further above the stability band. Two beta-minus decays then convert neutrons to protons and pull it back. Almost every heavy decay chain alternates like this, alphas dropping the mass and betas correcting the balance.",
            "Where the chain finishes. Uranium-238 makes fourteen decays in all before it reaches something stable, and the destination is lead-206. The bookkeeping is forced and you can do it in two lines: the mass number falls from 238 to 206, a drop of 32, and only alphas change A, so there must be exactly 8 of them. Eight alphas would take Z from 92 down to 76, but lead is 82, so 6 beta-minus decays must have pushed it back up. Eight alphas and six betas, and no other combination fits."
          ],
          "frames": [
            {
              "aspect": 0.34,
              "flow": {
                "boxes": [
                  { "id": "u", "col": 0, "row": 0, "text": "U-238", "tone": "amber" },
                  { "id": "th", "col": 1, "row": 0, "text": "Th-234" },
                  { "id": "pa", "col": 2, "row": 0, "text": "Pa-234" }
                ],
                "links": [
                  { "from": "u", "to": "th", "label": "α" },
                  { "from": "th", "to": "pa", "label": "β−" }
                ]
              }
            },
            {
              "aspect": 0.34,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "U-238", "tone": "amber" },
                  { "id": "b", "col": 1, "row": 0, "text": "8 α, 6 β", "shape": "round" },
                  { "id": "c", "col": 2, "row": 0, "text": "Pb-206", "tone": "green" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "b", "to": "c" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE RADIOACTIVE DECAY LAW",
          "tag": "CBSE DERIVATION, 3 MARKS",
          "main": "<i>N</i> = <i>N</i><sub>0</sub> <i>e</i><sup>−λ<i>t</i></sup>",
          "legend": [
            "<i>N</i> = number of undecayed nuclei left at time <i>t</i>, a pure count.",
            "<i>N</i><sub>0</sub> = number present at <i>t</i> = 0, a pure count.",
            "λ = the decay constant: the probability per second that any one nucleus decays. SI unit s<sup>−1</sup>.",
            "<i>t</i> = elapsed time, in seconds (s), or any unit as long as λ uses the same one."
          ],
          "note": "Dimensionally λ is [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>], so the product λ<i>t</i> is a pure number, which it has to be: an exponential of a quantity with units is meaningless. That is the fastest check there is on this formula, and it also tells you that λ and <i>t</i> must be in matching units. λ in per-year with <i>t</i> in seconds is the single commonest slip."
        },
        {
          "t": "deriv",
          "kicker": "DERIVING THE DECAY LAW FROM ONE SENTENCE",
          "steps": [
            { "eq": "d<i>N</i>/d<i>t</i> = −λ<i>N</i>", "why": "The number decaying per second is proportional to the number present, which is the cinema-hall statement written as calculus. The minus sign is there because <i>N</i> is decreasing, and λ is the constant of proportionality. Everything below is just solving this one equation." },
            { "eq": "d<i>N</i>/<i>N</i> = −λ d<i>t</i>", "why": "Separate the variables so each side contains only one of them. We do this because the equation is now in a form both sides of which we can integrate." },
            { "eq": "∫ d<i>N</i>/<i>N</i> from <i>N</i><sub>0</sub> to <i>N</i> = −λ ∫ d<i>t</i> from 0 to <i>t</i>", "why": "Integrate between matching limits: the sample starts with <i>N</i><sub>0</sub> nuclei at time zero and has <i>N</i> at time <i>t</i>. Using limits rather than an arbitrary constant is what fixes the answer to this sample instead of any sample." },
            { "eq": "ln(<i>N</i>/<i>N</i><sub>0</sub>) = −λ<i>t</i>", "why": "The left integral is a logarithm, the right is just <i>t</i>. Notice the left side is dimensionless, being a ratio, which forces λ<i>t</i> to be dimensionless too." },
            { "eq": "<i>N</i> = <i>N</i><sub>0</sub> <i>e</i><sup>−λ<i>t</i></sup>", "why": "Exponentiate both sides. The exponential form is not a choice: ANY quantity whose rate of decrease is proportional to itself must decay exponentially, and this is the same mathematics that governs a discharging capacitor and a cooling cup of tea." },
            { "eq": "check: at <i>t</i> = 0, <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>0</sup> = <i>N</i><sub>0</sub>", "why": "The formula reproduces its own starting condition, which is the minimum a solution must do. And at <i>t</i> going to infinity, <i>N</i> goes to zero, so the sample eventually vanishes, which it should. Two free checks, and a student who cannot reproduce them should not trust the third." }
          ]
        },
        {
          "t": "def",
          "term": "The decay constant λ",
          "html": "The probability, per unit time, that any one particular nucleus decays. SI unit s<sup>−1</sup>.<br><br>Read that definition carefully, because it is stronger than it looks. λ belongs to the <b>nuclide</b>, not to the sample: every carbon-14 nucleus in the universe carries the same λ, whether it is one of a trillion or the last one left. It does not depend on how many nuclei there are, how old they are, or what chemistry or temperature they are sitting in.<br><br>A λ of 10<sup>−6</sup> s<sup>−1</sup> means each nucleus has about a one-in-a-million chance of going in the next second. Multiply that by the number present and you get the number that actually go, which is the activity <i>R</i> = λ<i>N</i>."
        },
        {
          "t": "p",
          "html": "One honest caveat about everything in this topic. The exponential decay law is a <b>statistical</b> law, not a mechanical one.<br><br>It works because <i>N</i> is enormous. A microgram of anything already holds around 10<sup>15</sup> nuclei, and averaging over 10<sup>15</sup> independent random events makes the fluctuations utterly negligible: the smooth curve is exact to more decimal places than you can measure.<br><br>Take that away and the law dissolves. With ten nuclei left, one half-life does not leave you five; it leaves you five on average, and any number from zero to ten in practice. The curve becomes a staircase of random jumps. This matters in real laboratories, where a low-activity sample gives a count that visibly wobbles, and it is why activity measurements are always quoted with a statistical uncertainty. It never matters in an exam problem, because exam samples are always macroscopic."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.5 · THE DECAY CURVE, THREE WAYS",
          "chips": ["the halving staircase", "on a log axis", "half-life against mean life"],
          "captions": [
            "The number of surviving nuclei against time, measured in half-lives. The dashed guides show the halvings: N drops to N/2 after one half-life, to N/4 after two and to N/8 after three, and the horizontal spacing between them is EQUAL. That equal spacing is the whole content of exponential decay. It also shows why half-life does not depend on how much you started with: whatever is left at any instant will halve again in the same T, so the sample never remembers how big it once was.",
            "The identical decay with the vertical axis changed to ln(N/N0). The curve becomes a perfectly straight line through the origin with slope minus lambda. This is not a trick of presentation, it is the decay law rearranged: ln(N/N0) = minus lambda t is the equation of a straight line. It matters experimentally, because a straight line is what you can fit and read a slope off, and reading that slope is how decay constants are actually measured.",
            "The same curve with both time constants marked. The half-life T is where N has fallen to one half. The mean life tau is where it has fallen to 1/e, which is 0.368, and 1/e is LESS than 1/2, so tau sits further to the right: the mean life is always the LONGER of the two, by a factor of 1.44. Students reverse this every year. Read it off the picture instead of memorising it: a curve that has only fallen to 0.368 has had more time than one that has fallen to 0.5."
          ],
          "frames": [
            {
              "x": [0, 5],
              "y": [0, 1.1],
              "aspect": 0.72,
              "axisX": "t (in half-lives)",
              "axisY": "N / N0",
              "ticksX": { "at": [0, 1, 2, 3, 4, 5], "labels": ["0", "T", "2T", "3T", "4T", "5T"] },
              "ticksY": { "at": [0, 0.125, 0.25, 0.5, 1], "labels": ["0", "1/8", "1/4", "1/2", "1"] },
              "curves": [{ "c": "exp", "a": 1, "k": -0.693 }],
              "segments": [
                { "from": [0, 0.5], "to": [1, 0.5], "dash": true, "soft": true },
                { "from": [1, 0.5], "to": [1, 0], "dash": true, "soft": true },
                { "from": [0, 0.25], "to": [2, 0.25], "dash": true, "soft": true },
                { "from": [2, 0.25], "to": [2, 0], "dash": true, "soft": true },
                { "from": [0, 0.125], "to": [3, 0.125], "dash": true, "soft": true },
                { "from": [3, 0.125], "to": [3, 0], "dash": true, "soft": true }
              ]
            },
            {
              "x": [0, 5],
              "y": [-4, 0.5],
              "aspect": 0.72,
              "axisX": "t (in half-lives)",
              "axisY": "ln (N / N0)",
              "ticksX": { "at": [0, 1, 2, 3, 4, 5], "labels": ["0", "T", "2T", "3T", "4T", "5T"] },
              "ticksY": { "every": 1 },
              "curves": [{ "c": "line", "m": -0.693, "k": 0 }],
              "labels": [{ "x": 3.3, "y": -0.9, "text": "slope = −λ" }]
            },
            {
              "x": [0, 3],
              "y": [0, 1.1],
              "aspect": 0.72,
              "axisX": "t (in half-lives)",
              "axisY": "N / N0",
              "ticksX": { "at": [0, 1, 1.443, 2, 3], "labels": ["0", "T", "τ", "2T", "3T"] },
              "ticksY": { "at": [0, 0.368, 0.5, 1], "labels": ["0", "1/e", "1/2", "1"] },
              "curves": [{ "c": "exp", "a": 1, "k": -0.693 }],
              "segments": [
                { "from": [0, 0.5], "to": [1, 0.5], "dash": true, "soft": true },
                { "from": [1, 0.5], "to": [1, 0], "dash": true, "soft": true },
                { "from": [0, 0.368], "to": [1.443, 0.368], "dash": true, "soft": true },
                { "from": [1.443, 0.368], "to": [1.443, 0], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 1.0, "y": 0.62, "text": "half-life" },
                { "x": 1.9, "y": 0.5, "text": "mean life" },
                { "x": 1.5, "y": 0.86, "text": "τ = 1.44 T" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "HALF-LIFE, MEAN LIFE AND THE HALVING LADDER",
          "tag": "NEET TRAPS ON THE RELATION",
          "main": "<i>T</i><sub>1/2</sub> = ln 2 / λ = 0.693/λ      τ = 1/λ      τ = 1.44 <i>T</i><sub>1/2</sub>      <i>N</i> = <i>N</i><sub>0</sub>/2<sup><i>n</i></sup>",
          "legend": [
            "<i>T</i><sub>1/2</sub> = half-life, the time for half the sample to decay, in seconds (s).",
            "τ = mean life, the average lifetime of a nucleus, in seconds (s).",
            "λ = decay constant, in s<sup>−1</sup>. Both time constants are just 1/λ up to a number.",
            "<i>n</i> = <i>t</i>/<i>T</i><sub>1/2</sub>, the number of WHOLE half-lives elapsed, a pure number."
          ],
          "note": "Both <i>T</i><sub>1/2</sub> and τ are [T], so they can be compared, and τ is always the LONGER: 1/λ against 0.693/λ. The last formula is a shortcut, not a law: it only works when <i>t</i> is a whole multiple of the half-life. For any other time go back to <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−λ<i>t</i></sup> and use logarithms."
        },
        {
          "t": "deriv",
          "kicker": "HALF-LIFE AND MEAN LIFE FROM THE DECAY LAW",
          "steps": [
            { "eq": "half-life: set <i>N</i> = <i>N</i><sub>0</sub>/2 at <i>t</i> = <i>T</i><sub>1/2</sub>", "why": "That is the definition and nothing more. Substitute it into the decay law and everything else follows mechanically." },
            { "eq": "<i>N</i><sub>0</sub>/2 = <i>N</i><sub>0</sub><i>e</i><sup>−λ<i>T</i></sup>,  so  <i>e</i><sup>−λ<i>T</i></sup> = 1/2", "why": "The <i>N</i><sub>0</sub> cancels from both sides. Look hard at that cancellation: it is the reason half-life does not depend on how much sample you started with, and it is the answer to a standard two-mark board question." },
            { "eq": "−λ<i>T</i><sub>1/2</sub> = ln(1/2) = −ln 2,  so  <i>T</i><sub>1/2</sub> = 0.693/λ", "why": "Take natural logs of both sides and tidy the sign. ln 2 = 0.693 is worth memorising cold, along with its reciprocal 1.44." },
            { "eq": "mean life: τ = (1/<i>N</i><sub>0</sub>) ∫ <i>t</i> |d<i>N</i>| from 0 to ∞", "why": "The mean life is the average lifetime over ALL the nuclei, so weight each lifetime <i>t</i> by the number |d<i>N</i>| that actually decay at that instant and divide by the total. Long-lived nuclei pull the average up but they are rare, so the two effects trade off." },
            { "eq": "|d<i>N</i>| = λ<i>N</i><sub>0</sub><i>e</i><sup>−λ<i>t</i></sup> d<i>t</i>,  so  τ = λ ∫ <i>t e</i><sup>−λ<i>t</i></sup> d<i>t</i>", "why": "Substitute the number decaying between <i>t</i> and <i>t</i> + d<i>t</i>, which is just λ<i>N</i> d<i>t</i> with <i>N</i> from the decay law. The <i>N</i><sub>0</sub> cancels again." },
            { "eq": "the standard integral is 1/λ<sup>2</sup>,  so  τ = 1/λ", "why": "And combining with the half-life result, <i>T</i><sub>1/2</sub> = 0.693τ, or equivalently τ = 1.44 <i>T</i><sub>1/2</sub>. Since 1.44 is bigger than 1, the mean life is always LONGER than the half-life. If your answer says otherwise you have inverted the relation." }
          ]
        },
        {
          "t": "def",
          "term": "Activity R",
          "html": "The number of disintegrations per second in a sample: <i>R</i> = λ<i>N</i>. It is what a Geiger counter actually reads, because you can count clicks but you cannot count undecayed nuclei.<br><br>Since λ is constant, <i>R</i> is directly proportional to <i>N</i> at every instant. So <i>R</i> = <i>R</i><sub>0</sub><i>e</i><sup>−λ<i>t</i></sup> with exactly the same λ, and the ratio <i>R</i>/<i>R</i><sub>0</sub> equals <i>N</i>/<i>N</i><sub>0</sub> always. That licence is what lets a carbon-dating problem work entirely in counts per minute and never mention a nucleus.<br><br><b>Units.</b> The SI unit is the <b>becquerel</b>: 1 Bq = 1 decay per second. The practical unit is the <b>curie</b>: 1 Ci = 3.7 × 10<sup>10</sup> Bq, which is roughly the activity of one gram of radium."
        },
        {
          "t": "formula",
          "kicker": "ACTIVITY",
          "tag": "JEE MAIN NUMERICALS",
          "main": "<i>R</i> = λ<i>N</i> = <i>R</i><sub>0</sub> <i>e</i><sup>−λ<i>t</i></sup>,   with  <i>N</i> = (<i>m</i>/<i>M</i>) <i>N</i><sub>A</sub>",
          "legend": [
            "<i>R</i> = activity, in becquerel (Bq), one decay per second.",
            "λ = decay constant, in s<sup>−1</sup>. <i>N</i> = number of undecayed nuclei, a pure count.",
            "<i>R</i><sub>0</sub> = λ<i>N</i><sub>0</sub>, the activity at <i>t</i> = 0, in Bq.",
            "<i>m</i> = sample mass in grams, <i>M</i> = molar mass in g/mol, <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> per mol.",
            "1 Ci = 3.7 × 10<sup>10</sup> Bq."
          ],
          "note": "Dimensionally [T<sup>−1</sup>] for the activity, since a count is dimensionless. Note that λ and <i>R</i> share dimensions and are NOT the same thing: λ is per nucleus, <i>R</i> is for the whole sample. Almost every activity numerical is the same three steps: count the nuclei from the mass, get λ from the half-life, multiply."
        },
        {
          "t": "protip",
          "html": "memorise the halving ladder and half the numericals in this topic stop needing a calculator. 1/2, 1/4, 1/8, 1/16, 1/32 correspond to 1, 2, 3, 4, 5 half-lives. so <i>any</i> question that says <i>falls to one sixteenth</i> is saying <i>four half-lives</i>, and the answer is 4<i>T</i>. keep ln 2 = 0.693 and 1/0.693 = 1.44 in your head, because almost every calculation here needs one of them, and remember which way round: <i>T</i><sub>1/2</sub> = 0.693 τ and τ = 1.44 <i>T</i><sub>1/2</sub>. mean life is the LONG life. and reserve logarithms for ugly ratios like 0.6, where the ladder cannot help you."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A radioactive sample of initial mass 80 g has a half-life of 10 days. What mass remains undecayed after 30 days?",
          "steps": [
            "Number of whole half-lives: <i>n</i> = <i>t</i>/<i>T</i><sub>1/2</sub> = 30/10 = 3.",
            "<i>N</i> = <i>N</i><sub>0</sub>/2<sup>3</sup> = <i>N</i><sub>0</sub>/8.",
            "Mass tracks nucleus number, since each decay removes one parent nucleus.",
            "Remaining mass = 80/8 = 10 g."
          ],
          "ans": "10 g remains. No exponentials and no logarithms were needed, because 30 days is a whole number of half-lives. Notice the wording: <b>remains undecayed</b>. If the question had asked how much had decayed, the answer would be 70 g, and that misreading costs a mark every year."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The activity of a source falls to 1/16 of its initial value. If the half-life is 2 hours, how long did this take?",
          "steps": [
            "Activity falls by exactly the same factor as the number of nuclei, since <i>R</i> = λ<i>N</i>.",
            "Recognise 1/16 = (1/2)<sup>4</sup>, so exactly 4 half-lives have passed.",
            "<i>t</i> = 4 × <i>T</i><sub>1/2</sub> = 4 × 2 = 8 hours."
          ],
          "ans": "8 hours. The trap catches two students. One sees 16 and writes 16 half-lives, giving 32 hours. The other reaches for logarithms and loses a minute of exam time to get the same 8. Read the fraction as a power of one half and the answer is immediate."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "1.0 mg of pure radon-222 (molar mass 222 g/mol) has a half-life of 3.8 days. Find (a) the number of atoms present, (b) the decay constant in s<sup>−1</sup>, and (c) the initial activity in Bq and in Ci.",
          "steps": [
            "(a) <i>N</i><sub>0</sub> = (<i>m</i>/<i>M</i>)<i>N</i><sub>A</sub> = (1.0 × 10<sup>−3</sup>/222) × 6.022 × 10<sup>23</sup> = 2.71 × 10<sup>18</sup>.",
            "(b) <i>T</i><sub>1/2</sub> = 3.8 × 86400 = 3.28 × 10<sup>5</sup> s.",
            "λ = 0.693/3.28 × 10<sup>5</sup> = 2.11 × 10<sup>−6</sup> s<sup>−1</sup>.",
            "(c) <i>R</i><sub>0</sub> = λ<i>N</i><sub>0</sub> = (2.11 × 10<sup>−6</sup>)(2.71 × 10<sup>18</sup>) = 5.73 × 10<sup>12</sup> Bq.",
            "In curie: 5.73 × 10<sup>12</sup>/3.7 × 10<sup>10</sup> = 155 Ci."
          ],
          "ans": "<i>N</i><sub>0</sub> ≈ 2.7 × 10<sup>18</sup> atoms, λ ≈ 2.1 × 10<sup>−6</sup> s<sup>−1</sup>, <i>R</i><sub>0</sub> ≈ 5.7 × 10<sup>12</sup> Bq ≈ 155 Ci. The one step that goes wrong is (b): the half-life arrives in days and the answer is wanted in per second, so convert BEFORE dividing. A milligram of radon is 155 curie, which is a genuinely dangerous source, and that is worth knowing as a feel for the units."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A wooden tool from an excavation shows a <sup>14</sup>C activity of 9.0 disintegrations per minute per gram of carbon, while living wood gives 15.0 dpm per gram. Taking the half-life of <sup>14</sup>C as 5730 years, estimate the age of the tool.",
          "steps": [
            "Both are per gram of carbon, so the activity ratio equals the surviving fraction: <i>R</i>/<i>R</i><sub>0</sub> = 9.0/15.0 = 0.60.",
            "λ = 0.693/5730 = 1.21 × 10<sup>−4</sup> per year.",
            "0.60 is not a power of one half, so use logarithms: <i>t</i> = (1/λ) ln(<i>R</i><sub>0</sub>/<i>R</i>).",
            "<i>t</i> = ln(15/9)/1.21 × 10<sup>−4</sup> = 0.511/1.21 × 10<sup>−4</sup> = 4.2 × 10<sup>3</sup> years."
          ],
          "ans": "About 4200 years old. The whole method turns on one biological fact: a living thing keeps a fixed <sup>14</sup>C fraction by constantly exchanging carbon with the atmosphere, and the clock only starts at death. Note that λ was left in per-year and <i>t</i> came out in years, which is legitimate as long as both match. And note that 0.60 forced logarithms: the halving ladder is no help here."
        },
        {
          "t": "mcq",
          "q": "A radioactive sample decays to 1/8 of its initial quantity in 9 days. Its half-life is:",
          "opts": [
            { "label": "1 day", "nudge": "That comes from dividing 9 by 8, or by 9. Neither operation has anything to do with the decay law; you need the number of half-lives, which is 3." },
            { "label": "3 days", "nudge": null },
            { "label": "9 days", "nudge": "That takes the whole elapsed time as the half-life with no division at all. In 9 days the sample fell by a factor of 8, not 2." },
            { "label": "27 days", "nudge": "That multiplies 9 by 3 instead of dividing. A half-life can never be longer than the time taken to fall past one half." }
          ],
          "correct": 1,
          "solution": "1/8 = (1/2)<sup>3</sup>, so 3 half-lives fit into 9 days and <i>T</i><sub>1/2</sub> = 9/3 = 3 days. Always convert the fraction to a power of one half first; the exponent is the number of half-lives, and everything after that is one division."
        },
        {
          "t": "mcq",
          "q": "For a radioactive substance, which relation between the mean life τ and the half-life <i>T</i><sub>1/2</sub> is correct?",
          "opts": [
            { "label": "τ = <i>T</i><sub>1/2</sub>", "nudge": "They are both 1/λ up to a numerical factor, but the factors differ: 1 against 0.693. Equal would require ln 2 = 1." },
            { "label": "τ = 0.693 <i>T</i><sub>1/2</sub>", "nudge": "This is the correct relation written backwards. <i>T</i><sub>1/2</sub> = 0.693 τ is true; swapping the two symbols is the single most common trap in the topic." },
            { "label": "τ = 1.44 <i>T</i><sub>1/2</sub>", "nudge": null },
            { "label": "τ < <i>T</i><sub>1/2</sub>", "nudge": "This contradicts the fact that mean life is always the LONGER of the two. Look at Figure 13.5's third chip: 1/e is below 1/2, so it takes more time to reach." }
          ],
          "correct": 2,
          "solution": "τ = 1/λ and <i>T</i><sub>1/2</sub> = 0.693/λ, so τ = <i>T</i><sub>1/2</sub>/0.693 = 1.44 <i>T</i><sub>1/2</sub>. If you can only remember one thing, remember that the MEAN life is the LONG life, and then the 1.44 has to be the multiplier that makes it bigger."
        },
        {
          "t": "mcq",
          "q": "In beta-minus decay, the atomic number <i>Z</i> of the nucleus:",
          "opts": [
            { "label": "decreases by 1", "nudge": "That describes beta-PLUS decay, where a proton becomes a neutron. Students who memorise <i>beta changes the charge</i> without the direction land here." },
            { "label": "increases by 1", "nudge": null },
            { "label": "decreases by 2", "nudge": "That is alpha decay, which also drops the mass number by 4. Beta decay leaves <i>A</i> completely unchanged." },
            { "label": "remains unchanged", "nudge": "That is gamma decay, where only energy is emitted and neither <i>Z</i> nor <i>A</i> moves." }
          ],
          "correct": 1,
          "solution": "A neutron converts to a proton, <i>n</i> going to <i>p</i> + <i>e</i><sup>−</sup> + antineutrino, so <i>Z</i> rises by one while <i>A</i> is unchanged. Get the direction from charge conservation rather than memory: a NEGATIVE electron left, so the nucleus must have become MORE positive."
        },
        {
          "t": "mcq",
          "q": "The activity of a sample is 3.7 × 10<sup>7</sup> Bq. In curie, this is:",
          "opts": [
            { "label": "1 Ci", "nudge": "That ignores a factor of 10<sup>3</sup>. One curie is 3.7 × 10<sup>10</sup> Bq, a thousand times more than this sample." },
            { "label": "1 mCi", "nudge": null },
            { "label": "1 μCi", "nudge": "That is off by a further factor of 10<sup>3</sup> in the same direction: one microcurie is 3.7 × 10<sup>4</sup> Bq." },
            { "label": "1 kCi", "nudge": "That inverts the conversion, multiplying where you should divide. A kilocurie is 3.7 × 10<sup>13</sup> Bq, a million times this sample." }
          ],
          "correct": 1,
          "solution": "1 Ci = 3.7 × 10<sup>10</sup> Bq, so 3.7 × 10<sup>7</sup> Bq = 10<sup>−3</sup> Ci = 1 mCi. Line up the powers of ten before doing anything else: 10<sup>7</sup> against 10<sup>10</sup> is three orders down, and three orders down from curie is millicurie."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define half-life and mean life and state the relation between them. A sample has a half-life of 12 hours; what fraction remains undecayed after 2 days?", "a": "<b>Half-life</b> is the time for half the nuclei in a sample to decay, <i>T</i><sub>1/2</sub> = 0.693/λ. <b>Mean life</b> is the average lifetime of a nucleus, τ = 1/λ. Relation: τ = 1.44 <i>T</i><sub>1/2</sub>, so the mean life is the longer. For the numerical: 2 days = 48 hours = 4 half-lives, so the fraction remaining is (1/2)<sup>4</sup> = <b>1/16</b>." },
            { "q": "[NEET] The decay constant of a nuclide is 1.155 × 10<sup>−3</sup> s<sup>−1</sup>. Find its half-life.", "a": "<i>T</i><sub>1/2</sub> = 0.693/λ = 0.693/(1.155 × 10<sup>−3</sup>) = <b>600 s = 10 minutes</b>. One division, and the examiner chose 1.155 precisely so that 0.693/1.155 = 0.6 exactly." },
            { "q": "[JEE Main] A source has an activity of 8000 Bq. After 12 hours its activity is 1000 Bq. Determine its half-life.", "a": "The activity fell by a factor of 8 = 2<sup>3</sup>, so 3 half-lives passed in 12 hours and <i>T</i><sub>1/2</sub> = 12/3 = <b>4 hours</b>. No logarithms: activity falls by the same factor as nucleus number, and 8 is a clean power of two." },
            { "q": "[JEE Main] The mean life of a radioactive nucleus is 5.0 × 10<sup>3</sup> s. Find (a) its decay constant and (b) its half-life.", "a": "(a) λ = 1/τ = 1/(5.0 × 10<sup>3</sup>) = <b>2.0 × 10<sup>−4</sup> s<sup>−1</sup></b>. (b) <i>T</i><sub>1/2</sub> = 0.693 τ = 0.693 × 5000 = <b>3465 s</b>. Check the direction: 3465 is less than 5000, so the half-life came out shorter than the mean life, as it must." },
            { "q": "[JEE Advanced] Two radioactive samples A and B have EQUAL initial activities. Their half-lives are 2 h for A and 4 h for B. After what time will the activity of A be one quarter that of B?", "a": "Both start at <i>R</i><sub>0</sub>, so <i>R</i><sub>A</sub>/<i>R</i><sub>B</sub> = <i>e</i><sup>−(λ<sub>A</sub> − λ<sub>B</sub>)<i>t</i></sup>. With λ<sub>A</sub> = ln2/2 and λ<sub>B</sub> = ln2/4, the difference is λ<sub>A</sub> − λ<sub>B</sub> = ln2/4. Setting the ratio to 1/4 = 2<sup>−2</sup> gives (ln2/4)<i>t</i> = 2 ln 2, so <b><i>t</i> = 8 hours</b>. Check it directly: after 8 h, A has had 4 half-lives and is at <i>R</i><sub>0</sub>/16, while B has had 2 and is at <i>R</i><sub>0</sub>/4. And <i>R</i><sub>0</sub>/16 is a quarter of <i>R</i><sub>0</sub>/4." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Swapping the τ and <i>T</i><sub>1/2</sub> relation.</b> Mean life is the LONGER one: τ = 1.44 <i>T</i><sub>1/2</sub>, while <i>T</i><sub>1/2</sub> = 0.693 τ. If your answer makes the half-life bigger than the mean life you have flipped it, and this is the single most tested trap in the topic.",
            "<b>Using the halving ladder for a non-integer number of half-lives.</b> <i>N</i> = <i>N</i><sub>0</sub>/2<sup><i>n</i></sup> only works when <i>t</i> is a whole multiple of <i>T</i><sub>1/2</sub>. For a ratio like 0.6 or 0.3 you MUST go back to the exponential and take logarithms.",
            "<b>Mismatching the units of λ and <i>t</i>.</b> λ<i>t</i> has to be a pure number. A half-life given in days and a time given in seconds will produce an answer wrong by a factor of 86400, and the formula will not warn you.",
            "<b>Forgetting that activity decays exponentially too.</b> <i>R</i> = λ<i>N</i> with λ constant, so <i>R</i>, <i>N</i> and the sample mass all fall by exactly the same factor. For any RATIO problem the three are interchangeable, and that is what makes carbon dating work from counts alone.",
            "<b>Assuming a decay chain's members all have the same half-life.</b> They do not, and their half-lives can differ by a factor of 10<sup>17</sup> along the uranium series. What IS true, once a long-lived parent has been sitting long enough, is that every daughter shows the same ACTIVITY as the parent, because each is produced exactly as fast as it decays. Equal activities, wildly unequal half-lives and populations."
          ]
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "N = N<sub>0</sub> e<sup>−λt</sup>", "note": "λt must be a pure number. Match the units of λ and t or lose a factor of 86400." },
            { "f": "After n whole half-lives, N = N<sub>0</sub>/2<sup>n</sup>", "note": "Ladder: 1/2, 1/4, 1/8, 1/16, 1/32 for n = 1 to 5. Whole n only." },
            { "f": "T<sub>1/2</sub> = 0.693/λ", "note": "Independent of sample size: the N<sub>0</sub> cancels in the derivation." },
            { "f": "τ = 1/λ = 1.44 T<sub>1/2</sub>", "note": "Mean life is the LONG life. Always." },
            { "f": "R = λN = R<sub>0</sub> e<sup>−λt</sup>", "note": "Activity, N and mass all fall by the same factor. 1 Ci = 3.7 × 10<sup>10</sup> Bq." },
            { "f": "N = (m/M) N<sub>A</sub>", "note": "Grams to nuclei. N<sub>A</sub> = 6.022 × 10<sup>23</sup> per mol." },
            { "f": "α: A−4, Z−2 · β<sup>−</sup>: A same, Z+1 · β<sup>+</sup>: A same, Z−1 · γ: nothing", "note": "Balance the top row and the bottom row on both sides, every time." },
            { "f": "ln 2 = 0.693 and 1/0.693 = 1.44", "note": "Almost every numerical in the topic needs one of these two." }
          ],
          "aids": [
            "one over sixteen means four half-lives. read the fraction as a power of a half and you are done.",
            "mean life is the long life. tau is bigger, by 1.44.",
            "beta-minus made a proton, so Z goes up. a negative charge left, so the nucleus got more positive."
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Fission, Fusion and Nuclear Energy",
      "chip": "05 THE POWER",
      "kalam": "split the big ones, join the small ones, both go uphill",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 03 handed you a master key and then put it down. Here it is again: <b>any rearrangement that moves nucleons to a higher point on the binding-energy curve releases energy</b>, and there are exactly two ways to move uphill.<br><br>Split a heavy nucleus and the fragments land nearer the iron peak. That is <b>fission</b>.<br>Join two light nuclei and the product lands nearer the iron peak. That is <b>fusion</b>.<br><br>Between them they run every nuclear power station on Earth and every star in the sky, and the arithmetic in this topic is nothing more than that one sentence with numbers attached."
        },
        {
          "t": "def",
          "term": "Nuclear fission",
          "html": "The splitting of a heavy nucleus into two medium-sized fragments, usually triggered by the absorption of a slow neutron, with two or three fresh neutrons and a large amount of energy released.<br><br>Fire a slow neutron at a uranium-235 nucleus and it wobbles, elongates, and breaks. Why so much energy? The fragments sit at about 8.5 MeV per nucleon on the curve where uranium sat at 7.59, and that difference of roughly 0.9 MeV, multiplied over 236 nucleons, is about <b>200 MeV per fission</b>. Almost all of it appears as kinetic energy of the two recoiling fragments, which then turns into heat."
        },
        {
          "t": "p",
          "html": "A representative fission reaction, and it is worth balancing it yourself:<br><br><sup>1</sup><sub>0</sub>n + <sup>235</sup><sub>92</sub>U goes to <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3<sup>1</sup><sub>0</sub>n + <i>Q</i>, with <i>Q</i> about 200 MeV.<br><br>Top row: 1 + 235 = 236 on the left; 141 + 92 + 3 = 236 on the right. Bottom row: 0 + 92 = 92 on the left; 56 + 36 + 0 = 92 on the right. Both balance.<br><br>Barium and krypton are only one of dozens of possible fragment pairs. Fission is not a single reaction with a single answer; it is a distribution of outcomes with the same average energy. What is always true is the pattern: <b>one heavy nucleus in, two medium fragments out, two or three neutrons out, about 200 MeV out.</b>"
        },
        {
          "t": "formula",
          "kicker": "THE Q-VALUE OF A NUCLEAR REACTION",
          "tag": "JEE MAIN · GET THE SIGN RIGHT",
          "main": "<i>Q</i> = [Σ<i>m</i>(reactants) − Σ<i>m</i>(products)]<i>c</i><sup>2</sup> = Δ<i>m</i>(in u) × 931.5 MeV",
          "legend": [
            "<i>Q</i> = the energy released by the reaction, in MeV.",
            "Δ<i>m</i> = reactant masses minus product masses, in u. Note the direction.",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s, folded into the 931.5.",
            "Use atomic masses consistently on BOTH sides, so the electrons cancel.",
            "<i>Q</i> > 0 means exothermic, energy released. <i>Q</i> < 0 means endothermic, energy must be supplied."
          ],
          "note": "Dimensionally [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>], an energy. Reactants FIRST: if the products are heavier, <i>Q</i> is negative and the reaction absorbs energy, and forcing a positive answer turns a reaction that needs feeding into a power source. The energy appears as the kinetic energy of the products, which is why a fission fragment comes out at thousands of kilometres per second."
        },
        {
          "t": "proc",
          "title": "Computing a Q-value",
          "steps": [
            "<b>Balance the equation first.</b> Sum the mass numbers and the atomic numbers on both sides. If they do not balance you are about to compute the Q-value of something that cannot happen.",
            "<b>Sum the rest masses of the reactants</b>, in u, keeping all six decimals. Then sum the products the same way, on its own line.",
            "<b>Subtract: Δ<i>m</i> = reactants − products.</b> This order, always. A positive Δ<i>m</i> means mass disappeared, which means energy appeared.",
            "<b>Multiply by 931.5</b> to get <i>Q</i> in MeV. Then interpret the sign honestly: positive is energy out as kinetic energy of the products, negative means the reaction will not go unless you supply that much.",
            "<b>Check against a known anchor.</b> A fission of a heavy nucleus should land near 200 MeV. A light-nucleus fusion should be a few MeV to about 18 MeV. Anything far outside those bands is arithmetic, not physics."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 13.6 · THE TWO WAYS TO CLIMB",
          "chips": ["fission", "fusion"],
          "captions": [
            "Fission, left to right. A slow neutron arrives at a uranium-235 nucleus, is absorbed, and the nucleus becomes unstable and breaks into two medium-sized fragments, here barium-141 and krypton-92. Three fresh neutrons fly out, and about 200 MeV is released, almost all of it as kinetic energy of the two fragments flying apart under their mutual electrostatic repulsion. Those three neutrons are the whole story of the next figure: each one can go on to split another nucleus.",
            "Fusion, left to right, and the dashed line is what makes it hard. A deuteron and a triton approach each other, but both are positively charged and repel each other fiercely, and the nuclear force only takes over inside a few femtometres. The dashed vertical is the Coulomb barrier they must get through. Once through, they merge into helium-4 and eject a neutron, releasing 17.6 MeV. Per nucleon that beats fission by a factor of about six, and the barrier is the entire reason we have fission reactors and no fusion reactors."
          ],
          "frames": [
            {
              "x": [0, 12],
              "y": [-3.5, 3.5],
              "axes": "none",
              "aspect": 0.5974,
              "curves": [
                { "c": "circle", "cx": 3.2, "cy": 0, "r": 1.0 },
                { "c": "circle", "cx": 7.6, "cy": 1.3, "r": 0.75 },
                { "c": "circle", "cx": 7.5, "cy": -1.3, "r": 0.68 }
              ],
              "arrows": [
                { "from": [0.4, 0], "to": [2.0, 0], "tone": "amber", "label": "neutron", "at": "above" },
                { "from": [4.6, 0], "to": [6.0, 0], "tone": "soft" },
                { "from": [8.6, 1.6], "to": [10.8, 2.6], "tone": "amber" },
                { "from": [8.4, 0], "to": [11.0, 0], "tone": "amber" },
                { "from": [8.4, -1.6], "to": [10.6, -2.6], "tone": "amber" }
              ],
              "labels": [
                { "x": 3.2, "y": 0, "text": "U-235" },
                { "x": 7.6, "y": 1.3, "text": "Ba-141" },
                { "x": 7.5, "y": -1.3, "text": "Kr-92" },
                { "x": 10.6, "y": 0.65, "text": "3 neutrons", "soft": true },
                { "x": 6.2, "y": -2.9, "text": "about 200 MeV" }
              ]
            },
            {
              "x": [0, 12],
              "y": [-3.5, 3.5],
              "axes": "none",
              "aspect": 0.5974,
              "curves": [
                { "c": "circle", "cx": 1.7, "cy": 1.4, "r": 0.45 },
                { "c": "circle", "cx": 1.7, "cy": -1.4, "r": 0.52 },
                { "c": "circle", "cx": 8.0, "cy": 0.5, "r": 0.8 },
                { "c": "vline", "x": 4.6, "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [2.5, 1.2], "to": [4.0, 0.35], "tone": "amber" },
                { "from": [2.5, -1.2], "to": [4.0, -0.35], "tone": "amber" },
                { "from": [5.6, 0], "to": [6.9, 0], "tone": "soft" },
                { "from": [8.9, -0.4], "to": [10.4, -1.5], "tone": "amber" }
              ],
              "labels": [
                { "x": 1.7, "y": 2.5, "text": "deuterium" },
                { "x": 1.7, "y": -2.6, "text": "tritium" },
                { "x": 8.0, "y": 0.5, "text": "He-4" },
                { "x": 5.0, "y": 2.6, "text": "barrier here", "soft": true },
                { "x": 10.6, "y": -2.4, "text": "neutron", "soft": true },
                { "x": 7.4, "y": -2.4, "text": "17.6 MeV" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "picture a tall, top-heavy stack of bricks held together against its own tendency to topple. one nudge, the incoming neutron, sends it crashing into two shorter, stabler piles, and the crash releases the energy that was stored in the precarious arrangement. now notice what else the crash does: it flings a few loose bricks sideways, and those bricks can nudge the neighbouring stacks. that is a chain reaction, and it is the difference between a fission event and a power station."
        },
        {
          "t": "p",
          "html": "Those two or three liberated neutrons are the whole reason fission is useful rather than merely interesting.<br><br>If, on average, exactly <b>one</b> of them goes on to split another nucleus, the reaction sustains itself at a steady rate. This is a <b>controlled chain reaction</b> and it is the basis of every nuclear reactor. If <b>more</b> than one does, the rate multiplies every generation and grows explosively.<br><br>The bookkeeping is one number, the <b>neutron multiplication factor <i>k</i></b>: how many neutrons from one fission go on to cause another. <i>k</i> < 1 and the reaction dies out. <i>k</i> = 1 and it is <b>critical</b>: steady, controlled, exactly what a power station wants. <i>k</i> > 1 and it is supercritical and runs away.<br><br>The dividing line is set partly by geometry, through the <b>critical mass</b>. Too little fuel and neutrons escape through the surface before they meet anything; enough fuel and the chain sustains itself."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "ONE NEUTRON EACH, OR TWO",
          "chips": ["k = 1, controlled", "k = 2, runaway"],
          "captions": [
            "The controlled case. Each fission emits three neutrons; exactly one of them goes on to cause the next fission and the other two are absorbed by control rods or escape through the surface of the fuel. The chain marches along at a constant rate, generation after generation, and the power output is steady. This is what a reactor's control rods are for: they are not there to stop the reaction, they are there to soak up precisely the surplus that would otherwise make k bigger than one.",
            "The runaway case. Now two of the three neutrons from each fission cause a further fission, so k = 2 and the number of fissions doubles every generation: one, two, four, eight. Since a generation lasts under a millisecond, eighty generations take a fraction of a second and produce 2^80 fissions. Nothing about the individual fission event has changed between these two pictures. The only difference is how many of the emitted neutrons are allowed to find another nucleus, and that is a matter of absorbers and geometry."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "f1", "col": 0, "row": 0, "text": "fission", "tone": "amber" },
                  { "id": "f2", "col": 1, "row": 0, "text": "fission", "tone": "amber" },
                  { "id": "f3", "col": 2, "row": 0, "text": "fission", "tone": "amber" },
                  { "id": "l1", "col": 0, "row": 2, "text": "2 lost" },
                  { "id": "l2", "col": 1, "row": 2, "text": "2 lost" },
                  { "id": "l3", "col": 2, "row": 2, "text": "2 lost" }
                ],
                "links": [
                  { "from": "f1", "to": "f2", "label": "1 n" },
                  { "from": "f2", "to": "f3", "label": "1 n" },
                  { "from": "f1", "to": "l1", "dash": true },
                  { "from": "f2", "to": "l2", "dash": true },
                  { "from": "f3", "to": "l3", "dash": true }
                ]
              }
            },
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "g0", "col": 0, "row": 1, "text": "fission", "tone": "amber" },
                  { "id": "g1", "col": 1, "row": 0, "text": "fission", "tone": "amber" },
                  { "id": "g2", "col": 1, "row": 2, "text": "fission", "tone": "amber" },
                  { "id": "h1", "col": 2, "row": 0, "text": "fission", "tone": "amber" },
                  { "id": "h2", "col": 2, "row": 1, "text": "fission", "tone": "amber" },
                  { "id": "h3", "col": 2, "row": 2, "text": "fission", "tone": "amber" },
                  { "id": "h4", "col": 2, "row": 3, "text": "fission", "tone": "amber" }
                ],
                "links": [
                  { "from": "g0", "to": "g1" },
                  { "from": "g0", "to": "g2" },
                  { "from": "g1", "to": "h1" },
                  { "from": "g1", "to": "h2" },
                  { "from": "g2", "to": "h3" },
                  { "from": "g2", "to": "h4" }
                ]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The Parts of a Nuclear Reactor",
          "tag": "CBSE, 3 MARKS, ALMOST EVERY YEAR",
          "rows": [
            { "k": "Fuel", "v": "Enriched uranium, raised from its natural 0.7 per cent <sup>235</sup>U to a few per cent. Only <sup>235</sup>U fissions readily with slow neutrons." },
            { "k": "Moderator", "v": "Light water, heavy water or graphite. SLOWS the fast fission neutrons to thermal speeds by elastic collisions, because slow neutrons are far more likely to cause fission." },
            { "k": "Control rods", "v": "Cadmium or boron. ABSORB surplus neutrons to hold <i>k</i> = 1. Push them in and the reaction slows; withdraw them and it speeds up." },
            { "k": "Coolant", "v": "Carries the heat out to a boiler, which raises steam to drive a turbine. Often the same water that acts as moderator." },
            { "k": "Shielding", "v": "Thick concrete, to absorb the radiation that would otherwise escape the core." },
            { "k": "The confusion", "v": "Moderator SLOWS, control rods SOAK UP. Two different jobs, two different materials, and swapping them is the commonest reactor mistake there is." }
          ]
        },
        {
          "t": "p",
          "html": "Now the other climb, from the light end of the curve.<br><br><b>Fusion</b> is the merging of two very light nuclei into a heavier one. Fuse hydrogen isotopes into helium and you release energy too, and <b>per nucleon fusion releases even more than fission</b>, because the left-hand limb of the binding-energy curve is far steeper than the right-hand one.<br><br>So why does the world run on fission? Because of the entrance fee. Both nuclei are positively charged and repel each other ferociously, and the attractive nuclear force only takes over once they are within a few femtometres. They have to get through a Coulomb barrier, and the next derivation shows exactly how high it is."
        },
        {
          "t": "def",
          "term": "Nuclear fusion",
          "html": "The merging of two very light nuclei into a single heavier one, with energy released because the product lies higher on the binding-energy curve than either starting nucleus.<br><br>It is the exact mirror of fission and it obeys the same master rule, but the two are not symmetric in difficulty. Fission is <b>triggered</b> by an uncharged neutron that simply walks in, so it needs no entrance energy at all. Fusion has to force two positive charges together against their mutual repulsion, which is why it is called <b>thermonuclear</b>: the only practical way to supply that energy in bulk is heat.<br><br>Fusion also wins on yield. Per nucleon it releases about 3.5 MeV against fission's 0.85, because the left-hand limb of the curve is far steeper than the right-hand one."
        },
        {
          "t": "deriv",
          "kicker": "HOW HIGH IS THE COULOMB BARRIER, AND WHY 10 MILLION KELVIN IS NOT ENOUGH",
          "steps": [
            { "eq": "two deuterons must reach about <i>r</i> = 4 fm for the nuclear force to grab", "why": "Figure 13.4 says the attractive well runs from about 0.7 to 2.5 fm between two individual nucleons, and two whole deuterons have to bring their surfaces into that range. A few femtometres is the target." },
            { "eq": "<i>U</i> = <i>e</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i>), Chapter 12's group divided by a length", "why": "This is Chapter 12's distance-of-closest-approach calculation read backwards. It asked how close an alpha of given energy can get; we are asking what energy is needed to get to a given distance. Same formula, opposite unknown. Both nuclei here carry charge +<i>e</i>, so there is no factor of <i>zZ</i>." },
            { "eq": "= 2.304 × 10<sup>−28</sup> / 4 × 10<sup>−15</sup> = 5.8 × 10<sup>−14</sup> J", "why": "Using Chapter 12's own grouped constant, (9 × 10<sup>9</sup>)(1.6 × 10<sup>−19</sup>)<sup>2</sup> = 2.304 × 10<sup>−28</sup> in SI units, which turns this into a single division." },
            { "eq": "<i>U</i> = 5.8 × 10<sup>−14</sup>/1.6 × 10<sup>−13</sup> = 0.36 MeV", "why": "Convert to MeV. So the barrier is about 360 keV. That is the entrance fee, and it is enormous compared with anything chemistry can supply: a chemical bond is a few eV." },
            { "eq": "at the Sun's core, 1.5 × 10<sup>7</sup> K, the thermal energy is <i>kT</i> = 1.3 keV", "why": "1.38 × 10<sup>−23</sup> × 1.5 × 10<sup>7</sup> = 2.1 × 10<sup>−16</sup> J, which is 1.3 keV. Compare it with the 360 keV barrier: the typical particle has <b>280 times too little</b> energy. A barrier-height argument would demand about 4 × 10<sup>9</sup> K, not 10<sup>7</sup> K." },
            { "eq": "so the gap is closed by the Maxwell tail and by quantum tunnelling", "why": "Two effects, and both are needed. The Maxwell distribution has a high-energy tail, so a tiny fraction of nuclei carry far more than the average. And a nucleus does not have to go OVER the barrier: quantum mechanics lets it tunnel THROUGH one it could never climb. Together these make fusion proceed at 10<sup>7</sup> K, but only very slowly, which is exactly why the Sun burns for ten billion years instead of exploding. Be careful with the usual textbook line that at 10<sup>7</sup> K thermal energies <i>become comparable to the barrier</i>. They do not, by a factor of nearly three hundred, and the real answer is more interesting." }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE FUSION REACTIONS WORTH KNOWING",
          "tag": "NEET · JEE MAIN",
          "main": "<sup>2</sup>H + <sup>2</sup>H → <sup>3</sup>He + <i>n</i> + 3.27 MeV<br><sup>2</sup>H + <sup>3</sup>H → <sup>4</sup>He + <i>n</i> + 17.6 MeV<br>4 <sup>1</sup>H → <sup>4</sup>He + 2<i>e</i><sup>+</sup> + 2ν + 26.7 MeV",
          "legend": [
            "<i>n</i> = a free neutron, <i>e</i><sup>+</sup> = a positron, ν = a neutrino.",
            "H is hydrogen: <sup>1</sup>H is a lone proton, <sup>2</sup>H is deuterium, <sup>3</sup>H is tritium.",
            "The first is deuterium-deuterium; the second is deuterium-tritium, the most promising for terrestrial power.",
            "The third is the NET proton-proton cycle that powers the Sun, summarising several steps.",
            "Each energy is the Q-value of that reaction, computed from atomic masses in MeV."
          ],
          "note": "All three balance: check the mass numbers and the charges yourself. The 26.7 MeV of the p-p cycle is worth verifying, since it is the number the whole Sun runs on: 4(1.007825) − 4.002603 = 0.028697 u, and 0.028697 × 931.5 = 26.7 MeV. Notice how much better fusion is per nucleon: 17.6 MeV over 5 nucleons is 3.5 MeV each, against 200 MeV over 236 nucleons which is 0.85 MeV each."
        },
        {
          "t": "p",
          "html": "This is why fusion is called <b>thermonuclear</b>, and why it happens naturally only in the crushing heat of stellar cores. In the Sun's centre, gravity supplies the temperature and the pressure and the confinement all at once, and the proton-proton chain converts hydrogen to helium at about <b>four million tonnes of mass per second</b>, which is where sunlight comes from.<br><br>On Earth we have neither the gravity nor the patience. Reproducing those conditions means holding a plasma at 10<sup>8</sup> K, hotter than the Sun's core because we cannot match its density, and holding it long enough. Magnetic confinement in a tokamak and laser implosion are the two approaches. Controlled, commercially useful fusion remains unachieved, which is the honest state of it.<br><br>Fission, by contrast, is thoroughly practical and has been for eighty years. Its problem is on the other end: long-lived radioactive waste, and fuel that is also weapons material."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "If each fission of <sup>235</sup>U releases 200 MeV, calculate the energy released by the complete fission of 1.0 g of <sup>235</sup>U.",
          "steps": [
            "Number of nuclei: <i>N</i> = (<i>m</i>/<i>M</i>)<i>N</i><sub>A</sub> = (1.0/235) × 6.022 × 10<sup>23</sup> = 2.563 × 10<sup>21</sup>.",
            "Total energy in MeV: <i>E</i> = 2.563 × 10<sup>21</sup> × 200 = 5.13 × 10<sup>23</sup> MeV.",
            "Convert: <i>E</i> = 5.13 × 10<sup>23</sup> × 1.6 × 10<sup>−13</sup> = 8.2 × 10<sup>10</sup> J."
          ],
          "ans": "About 8.2 × 10<sup>10</sup> J from a single gram. For scale, burning coal releases about 3 × 10<sup>7</sup> J per kilogram, so one gram of uranium matches roughly 2.7 tonnes of coal. That energy density, a factor of nearly three million, is the entire commercial case for nuclear power and it is worth being able to reconstruct in two lines."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Which of these statements is correct? (i) Fission is caused most efficiently by fast neutrons. (ii) Per nucleon, fusion releases more energy than fission. (iii) A moderator speeds up neutrons.",
          "steps": [
            "(i) FALSE. <sup>235</sup>U fissions most readily with SLOW, thermal neutrons, which is precisely why a reactor needs a moderator at all.",
            "(ii) TRUE. Fusion climbs the steep left limb of the binding-energy curve, so the gain per nucleon is larger.",
            "(iii) FALSE. A moderator SLOWS neutrons down. Its name means it moderates their speed."
          ],
          "ans": "Only (ii) is correct. The trap in (i) is the intuition that fast means powerful; in fission the opposite is true, because a slow neutron spends longer near a nucleus and is far more likely to be captured. The trap in (iii) is simply the word. Speed rule: slow neutrons for fission, and fusion wins per nucleon."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Calculate the energy released in the fusion reaction <sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H going to <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub>n. Given <i>m</i>(<sup>2</sup>H) = 2.014102 u, <i>m</i>(<sup>3</sup>H) = 3.016049 u, <i>m</i>(<sup>4</sup>He) = 4.002603 u, <i>m</i><sub>n</sub> = 1.008665 u.",
          "steps": [
            "Balance first: top row 2 + 3 = 5 and 4 + 1 = 5; bottom row 1 + 1 = 2 and 2 + 0 = 2. Balanced.",
            "Reactant mass: 2.014102 + 3.016049 = 5.030151 u.",
            "Product mass: 4.002603 + 1.008665 = 5.011268 u.",
            "Δ<i>m</i> = 5.030151 − 5.011268 = 0.018883 u.",
            "<i>Q</i> = 0.018883 × 931.5 = 17.6 MeV."
          ],
          "ans": "<i>Q</i> ≈ 17.6 MeV, positive, so energy is released. This is the deuterium-tritium reaction, the most promising candidate for terrestrial fusion power because of this unusually large yield at relatively attainable temperatures. Cross-check it against Topic 03's practice 5, which got exactly 17.6 MeV from binding energies per nucleon and never touched a mass table. Two completely independent routes, one answer."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A nuclear reactor delivers 300 MW of power. If each fission of <sup>235</sup>U releases 200 MeV, find (a) the number of fissions per second and (b) the mass of <sup>235</sup>U consumed per day.",
          "steps": [
            "(a) Energy per fission = 200 × 1.6 × 10<sup>−13</sup> = 3.2 × 10<sup>−11</sup> J.",
            "Fissions per second = power / energy per fission = 3.0 × 10<sup>8</sup> / 3.2 × 10<sup>−11</sup> = 9.4 × 10<sup>18</sup> s<sup>−1</sup>.",
            "(b) Fissions per day = 9.4 × 10<sup>18</sup> × 86400 = 8.1 × 10<sup>23</sup>.",
            "Mass = (8.1 × 10<sup>23</sup>/6.022 × 10<sup>23</sup>) × 235 = 1.35 × 235 = 316 g."
          ],
          "ans": "About 9.4 × 10<sup>18</sup> fissions per second, consuming roughly 0.32 kg of <sup>235</sup>U per day. Note the direction of travel: the gram-to-energy problem multiplies, the power-to-fuel problem divides, and they are the same chain of logic run in opposite directions. The fuel actually loaded is far larger, because only the fissile fraction of the enriched uranium is consumed."
        },
        {
          "t": "mcq",
          "q": "In the fission of <sup>235</sup>U, the released energy appears mainly as:",
          "opts": [
            { "label": "gamma rays only", "nudge": "Gammas carry only a small share, a few per cent. Most of the energy is mechanical, in the recoil of the fragments." },
            { "label": "kinetic energy of the fission fragments and neutrons", "nudge": null },
            { "label": "sound energy", "nudge": "Sound is a bulk-matter phenomenon and is meaningless at the scale of a single nucleus. There is no medium inside a nucleus to carry a wave." },
            { "label": "potential energy stored in the products", "nudge": "This reads a RELEASE as a storage. The products end up more tightly bound, so their potential energy went DOWN, and the difference had to leave as kinetic energy." }
          ],
          "correct": 1,
          "solution": "Roughly 165 of the 200 MeV goes into the kinetic energy of the two fragments, which fly apart under their own electrostatic repulsion at thousands of kilometres per second. That kinetic energy turns into heat as they slam to a halt inside the fuel, and that heat is what raises steam. The rest is shared between the neutrons, prompt gammas and the decay products."
        },
        {
          "t": "mcq",
          "q": "The role of a moderator in a nuclear reactor is to:",
          "opts": [
            { "label": "absorb neutrons to stop the reaction", "nudge": "That is what CONTROL RODS do, using cadmium or boron. Confusing the two is the commonest reactor mistake in the syllabus." },
            { "label": "speed up neutrons", "nudge": "The exact opposite of a moderator's job, and it would make the reaction less likely rather than more: <sup>235</sup>U fissions best with slow neutrons." },
            { "label": "slow down fast neutrons", "nudge": null },
            { "label": "generate neutrons", "nudge": "Neutrons come from the fission itself, two or three per event. A moderator produces none; it only changes the speed of the ones already there." }
          ],
          "correct": 2,
          "solution": "The moderator slows fast fission neutrons to thermal speeds through elastic collisions, because a slow neutron is far more likely to be captured by <sup>235</sup>U and cause fission. Light nuclei make the best moderators, since a neutron loses most energy colliding with something of its own mass, which is why water and graphite are used and lead is not."
        },
        {
          "t": "mcq",
          "q": "Compared with fission, nuclear fusion is harder to achieve on Earth mainly because:",
          "opts": [
            { "label": "it releases less total energy", "nudge": "False, and backwards per nucleon: fusion releases about 3.5 MeV per nucleon against fission's 0.85. Energy yield is the one thing fusion is better at." },
            { "label": "the nuclei must overcome a Coulomb barrier at very high temperature", "nudge": null },
            { "label": "it produces no neutrons", "nudge": "The deuterium-tritium reaction produces a neutron in every event, and in any case neutron production has nothing to do with how hard a reaction is to start." },
            { "label": "it violates conservation of charge", "nudge": "Charge is conserved in every fusion reaction, as you can check by balancing the bottom row of the equation. Nothing in nuclear physics violates it." }
          ],
          "correct": 1,
          "solution": "Both nuclei are positive and repel, so they must be given enough energy to get within a few femtometres of each other, and the barrier is around 0.36 MeV. That demands temperatures of order 10<sup>7</sup> K plus tunnelling. Fission needs no such fee, because a neutron is uncharged and simply walks in."
        },
        {
          "t": "mcq",
          "q": "For a self-sustaining, controlled chain reaction, the neutron multiplication factor <i>k</i> must be:",
          "opts": [
            { "label": "<i>k</i> > 1", "nudge": "That is supercritical: the fission rate multiplies every generation and runs away. It is not controlled, and it is not what a power station wants." },
            { "label": "<i>k</i> = 1", "nudge": null },
            { "label": "<i>k</i> < 1", "nudge": "That is subcritical: fewer fissions each generation than the last, so the reaction dies out. Not self-sustaining at all." },
            { "label": "<i>k</i> = 0", "nudge": "That means no neutron from any fission causes another. There is no chain, and after the first generation there is no reaction." }
          ],
          "correct": 1,
          "solution": "<i>k</i> = 1 means exactly one neutron per fission goes on to trigger the next, so the fission rate and the power output are constant. The control rods exist to hold that balance by absorbing the surplus. Push them further in and <i>k</i> drops below 1 and the reactor powers down; withdraw them and <i>k</i> rises above 1 and it powers up."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Distinguish between nuclear fission and nuclear fusion, giving one example reaction of each. State which releases more energy per nucleon.", "a": "<b>Fission</b>: a HEAVY nucleus splits into two medium fragments, usually triggered by a slow neutron. Example: <sup>1</sup><sub>0</sub>n + <sup>235</sup><sub>92</sub>U going to <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3n, about 200 MeV. <b>Fusion</b>: two LIGHT nuclei merge into a heavier one, requiring very high temperature to beat the Coulomb barrier. Example: <sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H going to <sup>4</sup><sub>2</sub>He + n, 17.6 MeV. Both release energy because the products lie nearer the peak of the binding-energy curve. <b>Fusion releases more per nucleon</b>: 17.6/5 = 3.5 MeV against 200/236 = 0.85 MeV." },
            { "q": "[NEET] In a nuclear reactor, name the materials commonly used as (i) moderator and (ii) control rods, and state the function of each.", "a": "(i) <b>Moderator</b>: graphite, heavy water or ordinary light water. It SLOWS the fast fission neutrons to thermal speeds by elastic collisions, because <sup>235</sup>U fissions far more readily with slow neutrons. (ii) <b>Control rods</b>: cadmium or boron. They ABSORB surplus neutrons to keep the multiplication factor at <i>k</i> = 1, so the reaction rate stays steady. Push them in and the reactor slows down; withdraw them and it speeds up." },
            { "q": "[JEE Main] Calculate the Q-value of the reaction <sup>2</sup><sub>1</sub>H + <sup>2</sup><sub>1</sub>H going to <sup>3</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub>n. Given <i>m</i>(<sup>2</sup>H) = 2.014102 u, <i>m</i>(<sup>3</sup>He) = 3.016029 u, <i>m</i><sub>n</sub> = 1.008665 u.", "a": "Reactants: 2 × 2.014102 = 4.028204 u. Products: 3.016029 + 1.008665 = 4.024694 u. Δ<i>m</i> = 4.028204 − 4.024694 = <b>0.003510 u</b>, so <i>Q</i> = 0.003510 × 931.5 = <b>3.27 MeV</b>. Positive, so exothermic. Note it is five times smaller than the D-T reaction's 17.6 MeV, which is exactly why deuterium-tritium and not deuterium-deuterium is the target for fusion power." },
            { "q": "[JEE Main] How much energy is released when 2.0 kg of a substance is COMPLETELY converted to energy according to <i>E</i> = <i>mc</i><sup>2</sup>?", "a": "<i>E</i> = 2.0 × (3 × 10<sup>8</sup>)<sup>2</sup> = 2.0 × 9 × 10<sup>16</sup> = <b>1.8 × 10<sup>17</sup> J</b>. Read the word COMPLETELY: this is not a nuclear reaction, where only a fraction of one per cent of the mass converts. It is a hypothetical total annihilation, and the answer is about two million times what fissioning the same two kilograms would give." },
            { "q": "[JEE Advanced] A star radiates energy at 4 × 10<sup>26</sup> W by fusing hydrogen to helium through the net cycle 4<sup>1</sup>H going to <sup>4</sup>He, releasing 26.7 MeV. Estimate the mass of hydrogen consumed per second.", "a": "Energy per cycle = 26.7 × 1.6 × 10<sup>−13</sup> = 4.3 × 10<sup>−12</sup> J. Cycles per second = 4 × 10<sup>26</sup>/4.3 × 10<sup>−12</sup> = 9.4 × 10<sup>37</sup>. Each cycle consumes 4 hydrogen atoms, a mass of 4 × 1.67 × 10<sup>−27</sup> = 6.7 × 10<sup>−27</sup> kg. So the rate is 9.4 × 10<sup>37</sup> × 6.7 × 10<sup>−27</sup> = <b>6 × 10<sup>11</sup> kg per second</b>. That is six hundred million tonnes of hydrogen every second, and the measured figure for the Sun agrees. Only about 0.7 per cent of that mass actually becomes energy, which is the four million tonnes per second quoted earlier." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Thinking fast neutrons are best for fission.</b> <sup>235</sup>U fissions most readily with SLOW thermal neutrons, which is the entire reason a moderator exists. And do not swap the moderator with the control rods: the moderator slows neutrons down, the control rods soak them up.",
            "<b>Believing fusion is easier because the nuclei are small.</b> Small nuclei still carry positive charge, and the Coulomb barrier makes fusion far harder to ignite than fission despite the larger yield. Fission needs no ignition energy at all, because the neutron that triggers it is uncharged.",
            "<b>Sign errors in the Q-value.</b> <i>Q</i> = (reactant masses − product masses)<i>c</i><sup>2</sup>, in that order. If the products come out heavier, <i>Q</i> is negative and energy must be supplied. Do not force a positive answer because the question said <i>energy released</i>.",
            "<b>Forgetting to convert MeV to joules in a power problem.</b> A reactor's power is in watts, which are joules per second, so the per-fission energy must be in joules too. Multiply the MeV figure by 1.6 × 10<sup>−13</sup> before dividing, not after.",
            "<b>Mixing per-fission and per-gram quantities.</b> Track the units explicitly: MeV per fission, fissions per second, grams per day. Almost every wrong answer in this topic is a correct calculation of a different quantity."
          ]
        },
        {
          "t": "protip",
          "html": "there are only two directions of travel in this whole topic and every numerical is one of them. going FORWARD from fuel to energy: count the nuclei with <i>N</i> = (<i>m</i>/<i>M</i>)<i>N</i><sub>A</sub>, then multiply by the per-event energy. going BACKWARD from power to fuel: divide the power by the per-event energy to get the event rate, then convert the rate to a mass. same chain, opposite direction, and knowing which way you are walking makes the arithmetic obvious. and one thing worth knowing exists even though it is beyond the syllabus: for a reaction with a NEGATIVE Q, the energy you must supply is not |<i>Q</i>| but slightly more, because momentum has to be conserved as well as energy and some of what you supply goes into the products' shared motion. that extra is called the threshold energy, and it is why an endothermic reaction is always harder than its Q-value suggests."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Q = Δm × 931.5 MeV, reactants minus products", "note": "Q > 0 releases, Q < 0 absorbs. Balance A and Z before computing." },
            { "f": "Fission: heavy + slow n → 2 fragments + 2 to 3 n + 200 MeV", "note": "About 165 MeV of it is fragment kinetic energy." },
            { "f": "n + U-235 → Ba-141 + Kr-92 + 3n", "note": "236 = 236 on top, 92 = 92 below. One of dozens of fragment pairs." },
            { "f": "k < 1 dies · k = 1 critical · k > 1 runaway", "note": "Plus a critical mass of fuel, or neutrons escape through the surface." },
            { "f": "Fuel, moderator, control rods, coolant, shielding", "note": "Moderator SLOWS, control rods SOAK UP. Never swap them." },
            { "f": "D + T → He-4 + n + 17.6 MeV", "note": "The best terrestrial candidate. D + D gives only 3.27 MeV." },
            { "f": "4 <sup>1</sup>H → He-4 + 2e<sup>+</sup> + 2ν + 26.7 MeV", "note": "The Sun's p-p cycle. Burns 6 × 10<sup>11</sup> kg of hydrogen per second." },
            { "f": "Per nucleon, fusion beats fission", "note": "3.5 MeV against 0.85 MeV. The left limb of the curve is steeper." },
            { "f": "Coulomb barrier ≈ 0.36 MeV, kT at 1.5 × 10<sup>7</sup> K ≈ 1.3 keV", "note": "Thermal energy is 280 times too small. Tunnelling and the Maxwell tail close the gap." }
          ],
          "aids": [
            "slow neutrons split uranium, hot nuclei fuse. and only one of those two is easy.",
            "moderator moderates the speed. control rods control the number.",
            "grams to energy, multiply. power to grams, divide. one chain, two directions."
          ]
        }
      ]
    }
  ]
};

export default phy12Nuclei;
