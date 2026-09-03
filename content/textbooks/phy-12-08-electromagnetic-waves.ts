/**
 * Chapter 8 · Electromagnetic Waves. Physics, Class 12.
 *
 * Restructured from pages 514 to 551 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-04-moving-charges-magnetism.ts and phy-11-14-waves.ts.
 *
 * FOUR TOPICS FROM FOUR SOURCE SUBTOPICS, ONE FOR ONE, AND NOTHING SPLIT.
 * At 38 pages this is the shortest chapter in either book, and the honest
 * reading of it is four topics, not five: 01 Displacement Current and
 * Maxwell's Equations, 02 Sources and Experimental Discovery, 03 Nature and
 * Properties, 04 The Electromagnetic Spectrum. Four is the floor of the
 * reader's gate (scripts/validate-chapters.mjs wants four to six), so there
 * was room to split and no seam worth splitting on. Subtopic 03 is the one
 * candidate: it carries the c = 1/sqrt(mu0 eps0) derivation AND the whole
 * energy-and-momentum family. But those are not two subjects. E0 = cB0 falls
 * out of the same plane-wave solution that gives c, uE = uB is E0 = cB0
 * squared, and the intensity and the radiation pressure are that energy
 * density multiplied by c and divided by c. Cutting between them would put a
 * checkpoint in the middle of one argument. Subtopic 04 is a classification
 * scheme with no derivation at all and splitting it would mean two half
 * tables. So the chapter is short and is written short: 120 blocks, not the
 * 180 a five-topic version would have needed padding to reach.
 *
 * THE ROUND 2 ADDENDUM (pages 539 to 551: A radiation pressure on moving and
 * rotating bodies, B the Poynting vector and energy flow in circuits, C
 * polarization with Malus's law and Brewster's angle, D standing EM waves in
 * resonant cavities) IS NOT A TOPIC, per the brief. It reaches a student in
 * exactly three places below, all of them one line long: Topic 03's protip
 * quotes the general oblique-incidence pressure (I/c) cos(theta) (1 + R) from
 * Addendum A's Method, Topic 03's mistakes item on the factor of two names
 * the same formula's two limits, and Topic 02's protip names the Poynting
 * vector's circuit reading from Addendum B's Method. No `formula`, `defgrid`,
 * `deriv`, `proc`, `ex`, `mcq` or `practice` block below is sourced from the
 * addendum, and no addendum NUMBER is carried anywhere, which matters because
 * six of its numbers are wrong (see CORRECTIONS below).
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). NO ENTRY TOUCHES THIS
 * RANGE, confirmed rather than assumed. The Class 12 errata has exactly two
 * entries: Chapter 7 (Alternating Current) page 14, a Practice 5 whose stated
 * drive frequency IS the resonant frequency of its own stated components so
 * that "the current lagging" cannot hold; and Chapter 10 (Wave Optics) page
 * 33, thin-film interference with the dark and bright conditions swapped in
 * one sentence. Chapter 8 is not named, and neither entry changes a number, a
 * formula or a claim this chapter uses.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 514 to 551 was recomputed independently. The main body
 * (pages 514 to 538) is in very good shape: about four dozen numerical answers
 * across sixteen worked examples, twenty practice items and sixteen MCQ keys,
 * and exactly one of them wrong. The Round 2 Addendum is not, exactly as the
 * brief predicted.
 *
 *   1. MAIN BODY, and the only one. Subtopic 03, Practice 3 (page 532): "A
 *      laser delivers an average intensity of 5.0 x 10^3 W m^-2. Find E0 and
 *      B0." Printed answers "E0 = 1.9 x 10^3 V/m, B0 = 6.3 x 10^-6 T". E0 is
 *      right; B0 is not. Working: I = (1/2) eps0 c E0^2 gives
 *      E0 = sqrt(2I/(eps0 c)) = sqrt(1.0 x 10^4 / 2.655 x 10^-3)
 *      = sqrt(3.7665 x 10^6) = 1941 V/m, which rounds to 1.9 x 10^3 V/m.
 *      Then B0 = E0/c = 1941 / 3 x 10^8 = 6.47 x 10^-6 T, which rounds to
 *      6.5 x 10^-6 T. The printed 6.3 x 10^-6 is what you get by dividing the
 *      ALREADY ROUNDED 1.9 x 10^3 by c: 1900/3 x 10^8 = 6.33 x 10^-6. A
 *      premature rounding, and a 3 per cent error on a two-figure answer.
 *      CORRECT ANSWER B0 = 6.5 x 10^-6 T. Topic 03's practice item 3 below
 *      carries the corrected value and shows the unrounded E0 in the answer
 *      so the chain is visible, and Topic 03's protip states the rule the slip
 *      breaks: carry the full E0 into B0 = E0/c and round once, at the end.
 *   2. ADDENDUM A, Practice 4 (page 542), wrong twice over. "A perfectly
 *      reflecting sail of area A = 100 m^2 and mass m = 20 kg is pushed by
 *      sunlight of intensity I = 1360 W m^-2. How far does it travel in 1
 *      hour?" Printed: "a = 2IA/(mc) = 2(1360)(100)/(20 x 3 x 10^8) =
 *      4.53 x 10^-7 m s^-2. In 1 hour: s = (1/2)at^2 = 2.9 x 10^-3 m = 2.9
 *      mm." Working: 2(1360)(100) = 2.72 x 10^5; 20 x 3 x 10^8 = 6 x 10^9;
 *      the quotient is 4.53 x 10^-5 m s^-2, one hundred times the printed
 *      value. Then s = (1/2)(4.533 x 10^-5)(3600)^2 = (0.5)(4.533 x 10^-5)
 *      (1.296 x 10^7) = 294 m. CORRECT ANSWERS a = 4.5 x 10^-5 m s^-2 and
 *      s = 2.9 x 10^2 m. Note that the printed distance does not even follow
 *      from the printed acceleration: (1/2)(4.53 x 10^-7)(1.296 x 10^7) is
 *      2.9 m, not 2.9 mm. Two independent slips, five orders of magnitude
 *      apart in total.
 *   3. ADDENDUM A, Practice 5 (page 542), wrong on the physics, not just the
 *      arithmetic. "Two laser beams of power P1 = 5 W and P2 = 3 W strike a
 *      small perfectly absorbing sphere from opposite directions. The sphere
 *      cross-section is A = 1 cm^2. Find the net force." Printed:
 *      "F1 = P1/(Ac) = 1.67 x 10^-1 N ... net force = 0.67 N." P/(Ac) is the
 *      radiation PRESSURE, not the force: force is pressure times area, so
 *      the A cancels and F = P/c. A pressure reported as a force is a
 *      dimensional error, and it is why the sphere's area appears in the
 *      question at all as a red herring. Working: F1 = 5/(3 x 10^8) =
 *      1.67 x 10^-8 N, F2 = 3/(3 x 10^8) = 1.00 x 10^-8 N, net =
 *      2/(3 x 10^8) = 6.7 x 10^-9 N towards the weaker beam. CORRECT ANSWER
 *      6.7 x 10^-9 N. (The printed arithmetic is separately wrong: 10^-4 x
 *      3 x 10^8 is 3 x 10^4, not 30, so even its own wrong formula gives
 *      1.67 x 10^-4, not 1.67 x 10^-1.)
 *   4. ADDENDUM B, Example B.1(c) (page 543): the Poynting vector at a wire's
 *      surface. Printed "|S| = EB/mu0 = (2.7 x 10^-2)(1.0 x 10^-3)/
 *      (4 pi x 10^-7) = 2.1 x 10^3 W m^-2". Working: the numerator is
 *      2.7 x 10^-5 and mu0 is 1.2566 x 10^-6, so |S| = 21.5 W m^-2, one
 *      hundredth of the printed value. The check confirms it: the wire
 *      dissipates I^2 R = 0.135 W over a surface 2 pi r l = 6.28 x 10^-3 m^2,
 *      which is 21.5 W m^-2 exactly. CORRECT ANSWER 21.5 W m^-2. The printed
 *      text goes on to notice that its own part (d) does not balance, prints
 *      the words "This is wrong, I made an error. Let me recalculate R", and
 *      then verifies the power by a different route WITHOUT ever going back
 *      to fix the printed |S|. That leaked draft sentence is still in the
 *      plated chapter.
 *   5. ADDENDUM B, Example B.3 (pages 544 to 545): the whole worked example
 *      is wrong, and its conclusion is wrong BECAUSE of the arithmetic, which
 *      is the dangerous kind. Three faults compound.
 *      (a) The induced field. Printed "E = (1/2)(4 pi x 10^-7 x 10^3 x 100)
 *      (0.02) = (1/2)(4 pi x 10^-4)(0.02) = 1.26 x 10^-5 V/m". But
 *      4 pi x 10^-7 x 10^3 x 100 = 4 pi x 10^-2, not 4 pi x 10^-4. CORRECT
 *      E = (1/2)(0.12566)(0.02) = 1.26 x 10^-3 V/m.
 *      (b) The Poynting vector. With the corrected E, |S| = EB/mu0 =
 *      (1.26 x 10^-3)(2.513 x 10^-3)/(1.2566 x 10^-6) = 2.51 W m^-2, not the
 *      printed 25 W m^-2 (which does not follow from the printed E either).
 *      (c) The inductance. Printed "L' = mu0 n^2 A = (4 pi x 10^-7)(10^6)
 *      (pi x 10^-4)". The solenoid's radius is 2.0 cm, so A = pi R^2 =
 *      pi x 4 x 10^-4 m^2, four times what is used. CORRECT L = mu0 n^2 A l =
 *      (1.2566 x 10^-6)(10^6)(1.2566 x 10^-3)(0.20) = 3.16 x 10^-4 H, and
 *      dU/dt = L I dI/dt = (3.16 x 10^-4)(2)(100) = 6.32 x 10^-2 W.
 *      Now the punchline. Corrected Poynting flux through the SIDE alone:
 *      |S| x 2 pi R l = (2.51)(2 pi)(0.02)(0.20) = 6.32 x 10^-2 W. The two
 *      agree EXACTLY. The printed text, working from its three wrong numbers,
 *      finds 0.63 W against 1.58 x 10^-2 W, calls the mismatch a discrepancy,
 *      and explains it away by claiming the solenoid's END FACES must carry
 *      the missing flux. They do not, for an ideal solenoid: B is axial and
 *      confined inside, the induced E is azimuthal, so E x B is purely radial
 *      and the end faces carry no flux at all. A student who believes that
 *      paragraph has been taught a false fact to cover an arithmetic slip.
 *      NOT CARRIED BELOW IN ANY FORM.
 *   6. ADDENDUM C, Example C.4(b) (page 548): "By what angle should the second
 *      polarizer be rotated to maximize transmission, and what is that
 *      maximum?" Printed: "Maximum transmission: 10 mW cm^-2 with second
 *      polarizer parallel to first." Impossible. The laser light is already
 *      linearly polarized at I0 = 10 mW cm^-2, and the FIRST polarizer sits
 *      at 30 degrees to it, so only I1 = I0 cos^2(30 degrees) = 0.75 I0 =
 *      7.5 mW cm^-2 ever reaches the second. No orientation of the second
 *      polarizer can transmit more than what arrives at it. CORRECT ANSWER
 *      7.5 mW cm^-2, reached by rotating the second polarizer through 60
 *      degrees so that its axis lies parallel to the first's.
 *   7. ADDENDUM D, Practice 5(c) (page 551): the average energy density in a
 *      cavity, printed as 1.39 x 10^-7 J m^-3. Two faults. The printed
 *      arithmetic drops a power of ten: (1/2)(10^-12)/(4 pi x 10^-7) is
 *      3.98 x 10^-7, not the printed 3.98 x 10^-8. And the formula mixes two
 *      conventions, halving the field amplitude for the electric term and not
 *      for the magnetic one. Done consistently, with B at the wall
 *      B_A = 1.0 x 10^-6 T and therefore E at the antinode E_A = c B_A = 300
 *      V/m, the time AND space average of each term is one eighth of its
 *      amplitude form: <uE> = (1/8) eps0 E_A^2 = 9.96 x 10^-8 J m^-3 and
 *      <uB> = (1/8) B_A^2/mu0 = 9.95 x 10^-8 J m^-3. CORRECT ANSWER
 *      <u> = 2.0 x 10^-7 J m^-3. The two halves being equal is itself the
 *      check, and the printed answer's halves differ by a factor of four.
 *   8. Editorial, recorded because it will confuse the next reader of the
 *      source rather than any student here. The subtopic cross-references are
 *      off by one throughout the back half. Subtopic 02's Example 3 cites
 *      "I = eps0 c E_rms^2 (Subtopic 02)" for a formula that is introduced in
 *      Subtopic 03; Subtopic 03's Cheat Sheet says it "hands off to Subtopic
 *      03 (Spectrum)" when the spectrum is Subtopic 04; and Subtopic 04's
 *      opening cites "the same self-sustaining dance of E and B from Subtopic
 *      02" when that dance is Subtopic 03. Every cross-reference below was
 *      re-pointed at the topic that actually carries the material.
 *
 * SOURCE DAMAGE. Pages 514 to 551 have their own dialect. Every passage below
 * was re-authored from context, never transcribed. What this range actually
 * had, checked rather than assumed:
 *
 *   - GREEK AND ITALIC SURVIVE AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), which draws as blank boxes on device and which
 *     validate-chapters rejects outright. 2,591 instances in 38 pages, and
 *     they are the chapter's entire symbol vocabulary: math-italic E, B, I,
 *     c, r, R, A, d, t, f, n, P, S, V, and the Greek eps, mu, lambda, nu, pi,
 *     omega, sigma, rho, theta, phi, tau, alpha, and the partial sign. Every
 *     symbol below is retyped as an ordinary character inside <i> tags and
 *     every Greek letter as its plain Unicode form.
 *   - THE TOKEN FAMILY, PARTIALLY. "\nN" for the multiplication sign appears
 *     15 times and "\nA" for the centred dot of a dot product 5 times, both
 *     confined to pages 518 to 520 and 528. Checked for and ABSENT: "\n7"
 *     (minus), "\nK" (degree), "\nC" (colon), "\nH" (ellipsis), 0 instances
 *     of each. This range's minus signs extract correctly as U+2212 and most
 *     of its multiplication signs as U+00D7, so the token dialect is a
 *     localised font fallback, not a whole-range substitution.
 *   - U+20D7 COMBINING ARROW, 125 INSTANCES, and it lands BEFORE its letter,
 *     so every vector in the source extracts as a bare arrow on one line and
 *     the letter on the next. Vectors below are plain italic letters, as the
 *     brief requires, and unit vectors are the precomposed forms.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively and
 *     without exception. Every power of ten, every unit exponent, every I_c
 *     and I_d and E_0 and Phi_E, and every dimensional formula breaks into
 *     three or four lines. Recomputing every numerical answer independently,
 *     and re-deriving every formula in the DIMENSIONS ledger below, was the
 *     check that these were rebuilt correctly.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout. "it
 *     worksbeautifully", "a changingmagnetic field", "shows up as 1
 *     calculation-heavy question inJEE Main", "the wave is going. So", "9GHz",
 *     "50Hz", "the microwaveband", "Situation FormulaResult". The running
 *     head joins the same way on every page.
 *   - THE ff LIGATURE SURVIVES AS U+FB00: "Difficulty ladder maintained" on
 *     page 522 arrives as "Di[ff]iculty". One instance.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: octal escapes of the
 *     \050 kind (0 instances), Wingdings ticks and crosses arriving as bare
 *     digits (0), leaked LaTeX delimiters (0), and the ASCII heading shifts
 *     of +29, -29 and +46 that the Class 11 Waves range logged (0; every
 *     heading in pages 514 to 551 reads correctly, Cheat Sheet Box headings
 *     included).
 *   - NO SILENTLY EMPTY PAGES. Every page from 514 to 551 was measured for
 *     extracted length before any of it was read. The shortest are 514 (286
 *     characters, the cover), 519 (434) and 529 (281), and those three are
 *     short because they genuinely carry almost nothing: 519 and 529 are the
 *     book's two "CHAPTER 8 FIGURES" pages, each holding one figure caption
 *     and nothing else. No run of blank pages exists, so no pdftoppm render
 *     was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A. Twenty-seven
 * lines checked, twenty-seven consistent, none rejected. Current is a base
 * dimension here, so [A] is irreducible; charge is [A T].
 *
 *   Base quantities used throughout:
 *     E field   [M L T-3 A-1]      B field   [M T-2 A-1]
 *     eps0      [M-1 L-3 T4 A2]    mu0       [M L T-2 A-2]
 *     Phi_E     [M L3 T-3 A-1]     Phi_B     [M L2 T-2 A-1]
 *     V         [M L2 T-3 A-1]     C         [M-1 L-2 T4 A2]
 *     L (henry) [M L2 T-2 A-2]     h         [M L2 T-1]
 *
 *   T1  Id = eps0 dPhiE/dt: [M-1 L-3 T4 A2][M L3 T-3 A-1][T-1] = [A]. OK, and
 *       this is the whole point of the quantity: a rate of change of flux
 *       comes out in amperes, which is what let Maxwell call it a current at
 *       all.
 *       PhiE = EA: [M L T-3 A-1][L2] = [M L3 T-3 A-1]. OK.
 *       jd = eps0 dE/dt: [M-1 L-3 T4 A2][M L T-3 A-1][T-1] = [L-2 A], which
 *       is A m-2. OK.
 *       E = q/(eps0 A): [A T]/([M-1 L-3 T4 A2][L2]) = [M L T-3 A-1]. OK.
 *       Ampere-Maxwell, both sides. Left: [B][L] = [M L T-2 A-1]. Right term
 *       one: mu0 Ic = [M L T-2 A-2][A] = [M L T-2 A-1]. OK. Right term two:
 *       mu0 eps0 dPhiE/dt = [M L T-2 A-2][M-1 L-3 T4 A2][M L3 T-3 A-1][T-1]
 *       = [M L T-2 A-1]. OK. All three agree, which is the check that the
 *       repair to Ampere's law is a legal repair.
 *       Gauss for E: [E][L2] = [M L3 T-3 A-1] against q/eps0 = [A T]/
 *       [M-1 L-3 T4 A2] = [M L3 T-3 A-1]. OK.
 *       Faraday: [E][L] = [M L2 T-3 A-1] against dPhiB/dt = [M L2 T-2 A-1]
 *       [T-1] = [M L2 T-3 A-1]. OK.
 *       Id = C dV/dt: [M-1 L-2 T4 A2][M L2 T-3 A-1][T-1] = [A]. OK, and this
 *       is why the shortcut is legitimate rather than a coincidence.
 *       B = mu0 Id r/(2 pi R^2): [M L T-2 A-2][A][L]/[L2] = [M T-2 A-1]. OK,
 *       the tesla. The r/R^2 is a reciprocal length, so dropping either the
 *       r or one power of R leaves something that is not a field.
 *   T2  nu = 1/(2 pi sqrt(LC)): LC = [M L2 T-2 A-2][M-1 L-2 T4 A2] = [T2],
 *       root [T], reciprocal [T-1]. OK. This is the one place a slip is
 *       invisible to the eye and obvious to dimensions: sqrt(L/C) is an
 *       ohm, not a second.
 *       S = (1/mu0) E x B: [M-1 L-1 T2 A2][M L T-3 A-1][M T-2 A-1] =
 *       [M T-3] = W m-2. OK.
 *       I = P/(4 pi r^2): [M L2 T-3]/[L2] = [M T-3]. OK, same as S, as it
 *       must be, since intensity IS the time-averaged Poynting magnitude.
 *       n = sqrt(mu_r eps_r): a ratio of two permeabilities times a ratio of
 *       two permittivities, so dimensionless, and v = c/n is [L T-1]. OK.
 *       P = q^2 a^2/(6 pi eps0 c^3): [A2 T2][L2 T-4]/([M-1 L-3 T4 A2]
 *       [L3 T-3]) = [A2 L2 T-2]/[M-1 T A2] = [M L2 T-3] = watt. OK.
 *       E_rms = sqrt(I/(eps0 c)): I/(eps0 c) = [M T-3]/([M-1 L-3 T4 A2]
 *       [L T-1]) = [M2 L2 T-6 A-2], root [M L T-3 A-1]. OK, a field.
 *   T3  c = 1/sqrt(mu0 eps0), THE CHAPTER'S CROWN. mu0 eps0 =
 *       [M L T-2 A-2][M-1 L-3 T4 A2] = [L-2 T2], which is a reciprocal speed
 *       squared. Its root is [L-1 T], a time per length, and the reciprocal
 *       of that is [L T-1]. OK. Nothing else in the two constants can produce
 *       a speed, which is exactly why the numerical agreement below is
 *       evidence and not a coincidence.
 *       E0 = c B0: [L T-1][M T-2 A-1] = [M L T-3 A-1]. OK, a field from a
 *       field, and B = cE would give [M L2 T-4 A-1], which is nothing.
 *       c = f lambda: [T-1][L] = [L T-1]. OK. omega = ck: [L T-1][L-1]
 *       = [T-1]. OK.
 *       uE = (1/2) eps0 E^2: [M-1 L-3 T4 A2][M2 L2 T-6 A-2] = [M L-1 T-2].
 *       OK, J m-3.
 *       uB = B^2/(2 mu0): [M2 T-4 A-2]/[M L T-2 A-2] = [M L-1 T-2]. OK. The
 *       two energy densities have the same dimensions, which is the first
 *       necessary condition for uE = uB and is checked numerically below.
 *       I = (1/2) eps0 c E0^2: [M L-1 T-2][L T-1] = [M T-3]. OK.
 *       p = U/c: [M L2 T-2]/[L T-1] = [M L T-1]. OK, a momentum.
 *       P_rad = I/c: [M T-3]/[L T-1] = [M L-1 T-2] = Pa. OK, and I times c
 *       would give [M L T-4], which is not a pressure, which is the fastest
 *       way to kill the option (D) trap in Topic 03's fourth MCQ.
 *       The wave equation, d2E/dx2 = mu0 eps0 d2E/dt2: left is [E][L-2],
 *       right is [L-2 T2][E][T-2] = [E][L-2]. OK.
 *   T4  E = hf: [M L2 T-1][T-1] = [M L2 T-2] = J. OK.
 *       E = hc/lambda: [M L2 T-1][L T-1]/[L] = [M L2 T-2]. OK.
 *       eV = hc/lambda_min: [A T][M L2 T-3 A-1] = [M L2 T-2]. OK, an energy
 *       on each side, which is the whole content of the Duane-Hunt limit.
 *
 * THE CROWN RESULT, CHECKED NUMERICALLY, because the agreement is the reason
 * anyone believed Maxwell and a student should see it land rather than be
 * told it lands.
 *   mu0 eps0 = (4 pi x 10^-7)(8.85 x 10^-12) = (1.2566 x 10^-6)
 *              (8.85 x 10^-12) = 1.1121 x 10^-17 s^2 m^-2
 *   sqrt(mu0 eps0) = 3.3348 x 10^-9 s m^-1
 *   c = 1/(3.3348 x 10^-9) = 2.9987 x 10^8 m s^-1
 *   Measured speed of light: 2.9979 x 10^8 m s^-1.
 *   Agreement to four significant figures, a discrepancy of 0.03 per cent,
 *   and that residue is the rounding of eps0 to three figures, not physics:
 *   with eps0 = 8.854 x 10^-12 the formula returns 2.99795 x 10^8 m s^-1,
 *   which agrees with the measured value to six figures. Topic 03's deriv
 *   closes on this arithmetic step by step and its final `why` says what it
 *   means: two constants measured in a laboratory with capacitors and coils,
 *   neither of them anything to do with light, combine to give the speed of
 *   light. Topic 03's Example 1 and its snapshot both carry the number.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   c = f lambda holds in every worked example, practice answer and MCQ that
 *   produces two of the three, and every one is spelled out in its own step.
 *   VISIBLE LIGHT RUNS 400 TO 700 nm and nothing below contradicts it: the
 *   spectrum figure places the visible band at exactly that span and shows it
 *   as the sliver it is, and Topic 04's Example 3 lands 200 nm outside it on
 *   the short side and names the band as ultraviolet for that reason.
 *   MAINS AT 50 Hz HAS A WAVELENGTH OF 6000 km. Computed rather than quoted:
 *   lambda = c/f = 3 x 10^8/50 = 6 x 10^6 m. Topic 04's protip uses it as the
 *   sanity anchor at the long end of the spectrum, against 550 nm in the
 *   middle: thirteen powers of ten between the wall socket and green light.
 *   ENERGY IS SHARED EQUALLY between the electric and magnetic fields, and
 *   Topic 03 proves it rather than asserting it (see LIMITING CASES).
 *   FIELD SIZES. Every B0 below is of order 10^-8 to 10^-6 T against an E0 of
 *   order 10 to 10^3 V m-1, a ratio of about 3 x 10^8 every time, which is
 *   the fastest arithmetic check in the chapter: if E0/B0 is not c, one of
 *   the two is wrong.
 *   RADIATION PRESSURE. Full sunlight at 1.0 kW m-2 gives 3.3 micropascals,
 *   about 3 x 10^-11 of an atmosphere. Every force below is of that order,
 *   which is why the solar sail's acceleration comes out at 10^-4 m s-2 and
 *   not at anything a student should expect to feel.
 *
 * LIMITING CASES, used where they teach something.
 *   E0 = cB0 MAKES THE TWO ENERGY DENSITIES EQUAL, and this is why the
 *   sharing is exact rather than approximate. Take uB = B^2/(2 mu0),
 *   substitute B = E/c, and then c^2 = 1/(mu0 eps0):
 *     uB = E^2/(2 mu0 c^2) = E^2 mu0 eps0/(2 mu0) = (1/2) eps0 E^2 = uE.
 *   The factor of c^2 that makes B numerically tiny is cancelled exactly by
 *   the 1/mu0 that multiplies it, and mu0 eps0 c^2 = 1 is the identity that
 *   does the cancelling. So uE = uB is not an approximation and not a
 *   coincidence: it is E0 = cB0 squared. Topic 03's Example 2 is this
 *   argument as a two-line NEET answer, and its `mistakes` item names the
 *   wrong instinct it defeats.
 *   A STEADY CAPACITOR HAS ZERO DISPLACEMENT CURRENT. dPhiE/dt goes to zero,
 *   so Id goes to zero, so the magnetic field between the plates goes to
 *   zero: at steady state the gap is magnetically as dead as the empty space
 *   it is. Topic 01's fourth MCQ is this limit read as a question.
 *   THE LOSSY DIELECTRIC AS omega GOES TO ZERO AND TO INFINITY. The ratio
 *   jd/jc = eps_r eps0 omega/sigma is linear in frequency, so the SAME
 *   material is a conductor at DC and an insulator at optical frequencies.
 *   Topic 01's Example 4 computes the crossover, and the limit is what makes
 *   it interesting rather than arithmetic.
 *   B BETWEEN CIRCULAR PLATES AT r = R. The inside formula
 *   mu0 Id r/(2 pi R^2) and the outside formula mu0 Id/(2 pi r) must agree
 *   there, and they do: both give mu0 Id/(2 pi R). Topic 01's second figure
 *   draws exactly that join, and the agreement is the check that the
 *   enclosed-fraction argument was set up correctly.
 *   REFLECTION AGAINST ABSORPTION gives 2I/c against I/c, a ratio of exactly
 *   two, and the reason is momentum reversal rather than momentum removal.
 *   Topic 03's figure draws the two side by side and its MCQ is the factor
 *   read backwards.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-11-14-waves.ts, Topic 01, quoted rather than re-derived, exactly as
 *     the brief asks. Its wave vocabulary is this chapter's foundation and
 *     none of it is rebuilt here:
 *       * v = f lambda, and its reading that frequency belongs to the SOURCE
 *         while speed belongs to the MEDIUM. Topic 03's `def` and Topic 04's
 *         `formula` both cite it by name, and Topic 03's practice item 2
 *         (light entering glass) is that reading applied: f is unchanged,
 *         v drops, so lambda must drop.
 *       * Its sign convention for a travelling wave, y = A sin(omega t - kx
 *         + phi) for travel in +x, with direction decided by the RELATIVE
 *         sign of omega t and kx and never by which is written first. Topic
 *         03's plane-wave `formula` writes E = E0 sin(kx - omega t) because
 *         that is the form the source's derivation uses and because it is
 *         the same wave up to an overall phase; the note says so outright
 *         rather than leaving a student to find two conventions.
 *       * Its omega = 2 pi f and k = 2 pi/lambda and v = omega/k. Topic 03's
 *         wave-relation `formula` states omega = ck as a consequence of that
 *         identity and does not re-derive it.
 *       * Its snapshot-versus-history distinction, which the Waves chapter
 *         makes with its single most valuable figure. Topic 03's figure of E
 *         and B in phase is a SNAPSHOT, a photograph of the wave against x at
 *         one instant, and its caption says so in those words and points at
 *         the Waves chapter for the other reading. Without that the "in
 *         phase" claim is ambiguous: two curves drawn against x that peak
 *         together is a different statement from two curves drawn against t
 *         that peak together, and for an EM wave both happen to be true,
 *         which is precisely why it is worth naming which one is drawn.
 *       * Its transverse-versus-longitudinal `def`, quoted in Topic 03's
 *         transverse-nature paragraph. The Waves chapter already established
 *         that only a transverse wave can be polarised; this chapter uses
 *         polarisation as EVIDENCE that light is transverse and cites that
 *         chapter for the implication rather than proving it again.
 *     Its own header notes that its interference toolkit is ready to be
 *     quoted. It is not quoted below, and deliberately so: nothing in
 *     Chapter 8 superposes two EM waves. That toolkit is Chapter 10's.
 *   - phy-12-04-moving-charges-magnetism.ts: Ampere's circuital law, the
 *     Amperian loop, and B = mu0 I/(2 pi r) around a straight wire. Topic 01
 *     opens on that law and breaks it; it does not restate it. The B between
 *     circular capacitor plates in Topic 01 is that chapter's straight-wire
 *     result with the enclosed current replaced by an enclosed FRACTION, and
 *     the `formula` note says so, because the two formulas are otherwise
 *     easy to confuse and the source's own Pitfall 4 is students confusing
 *     them.
 *   - phy-12-02-potential-capacitance.ts: the parallel-plate capacitor,
 *     C = eps0 A/d, E = sigma/eps0 = q/(eps0 A), and q = CV. Topic 01's
 *     derivation uses all four in Step 3 and none of them is re-derived; the
 *     `deriv` step names the chapter it is borrowing from.
 *   - phy-12-01-electric-charges-fields.ts: Gauss's law and electric flux
 *     Phi_E = E A for a uniform field on a perpendicular area. Topic 01's
 *     Maxwell-equations `defgrid` states Gauss's law as already known.
 *   - Faraday's law of induction: NOT quoted from a sibling, and the reason
 *     is worth recording because it will change. Checked twice, as the brief
 *     asks. On the first check content/textbooks held no Class 12 induction
 *     chapter at all. On the second, after Topic 04 was written,
 *     phy-12-06-electromagnetic-induction.ts HAD appeared and was being
 *     written concurrently: one topic of four to six, titled "Magnetic Flux,
 *     Faraday's and Lenz's Laws", and not yet registered in lib/textbooks.ts.
 *     Quoting a file that is still growing would have pinned this chapter to
 *     wording that may not survive its own author's next edit, so nothing is
 *     quoted. Topic 01's `defgrid` states Faraday's law inline, in the
 *     integral form the source uses, and Topic 02's causal chain states in
 *     words what it does. Those are the exact two places a quotation should
 *     replace an inline statement once that sibling lands and registers, and
 *     nothing else below depends on it. The neighbouring Class 12 chapter
 *     phy-12-05-magnetism-matter.ts was also mid-write and is not drawn on.
 *   - Chapter 11, Dual Nature, is pre-loaded rather than quoted: Topic 04's
 *     photon-energy `formula` states E = hf and flags it as the bridge to
 *     that chapter. The source does the same and the flag is worth keeping.
 *
 * NINE FIGURES: 2 DRAWN OF THE 2 THE SOURCE NAMES, PLUS 7 DESIGNED HERE.
 * The source names exactly two, both on its own "CHAPTER 8 FIGURES" pages
 * (519 and 529), and both are drawn below:
 *   Figure 8.1 (page 519), the charging capacitor with one Amperian loop and
 *     two surfaces stretched over it, is Topic 01's first figure, two chips.
 *     The flat disc S1 is a shaded strip the wire pierces; the balloon S2 is
 *     a smoothed poly that bulges past the plate edge and dips through the
 *     gap. Drawing them as two CHIPS rather than two panels is the whole
 *     point: the loop does not move between them, and a student flipping the
 *     chip watches the same boundary acquire a different answer, which is
 *     the contradiction stated as an interaction.
 *   Figure 8.2 (page 529), a wave along +x with E in the x-y plane and B in
 *     the x-z plane, both in phase, is SPLIT ACROSS TWO figures in Topic 03,
 *     because it is making two claims that no single flat drawing makes
 *     honestly. The three-dimensional claim (E perpendicular to B, both
 *     perpendicular to travel, direction given by E x B) is an `axes3d`
 *     figure, two chips, because a flat sketch of mutual perpendicularity
 *     misleads and isometric axes do not. The one-dimensional claim (E and B
 *     peak together and vanish together) is a `plot`, two chips, drawn as two
 *     sines on one axis because `sin` is a named PlotCurve and in-phase is
 *     then exact by construction rather than by hand.
 * The seven designed here, and why each earns its space:
 *   T1  B between the circular plates against r, two chips: linear inside,
 *       then the 1/r tail added. The source states both formulas, states the
 *       enclosed-fraction rule, and never shows the join. Chip 2 is where
 *       the two formulas agree at r = R, which is the check that the
 *       argument was set up right, and it is also the answer to the source's
 *       own Practice 3, which asks for the field at the edge AND at half the
 *       radius and expects a student to notice they differ by two.
 *   T2  What radiates and what does not, three chips: a charge at rest with
 *       its static radial field, the same charge at constant velocity, and
 *       the same charge oscillating with wavefronts breaking away. This is
 *       the source's own three-situation argument, and it is a sequence of
 *       pictures pretending to be a numbered list.
 *   T2  The chain and the proof, two chips of `flow`: the causal chain from
 *       an accelerating charge to a wave leaving at c, and Hertz's apparatus
 *       as four boxes with an air gap between transmitter and receiver.
 *   T3  Absorption against reflection, two chips: one beam in and nothing
 *       back, then one beam in and one beam out. The factor of two in
 *       radiation pressure is a momentum-reversal argument and it is
 *       drawable, which is better than a remembered 2.
 *   T4  The spectrum, seven chips on ONE numberline whose rule is
 *       log10(lambda/m). Twenty powers of ten cannot be plotted any other
 *       way, and THE PANEL RULE IS HONOURED: seven bands, seven chips, one
 *       rule, never seven boxes side by side. Each frame draws all seven
 *       bands and lights exactly one, so the bands keep their relative
 *       widths across every chip and a student can see that visible light is
 *       a sliver a quarter of a decade wide between two bands three decades
 *       across.
 *   T4  Photon energy against wavelength, two chips: the 1240/lambda curve,
 *       then the visible window marked on it. The energy ladder is the
 *       chapter's through-line and it is a hyperbola, which is a thing a
 *       student can see steepening.
 * RENDERER FACTS HONOURED, each one of which was live while drawing this:
 *   - `flow` box text is plain SVG with NO markup and must fit its row, so
 *     every box below is one line of at most eighteen characters on a
 *     two-column grid, and "Ampere-Maxwell" is a link label rather than box
 *     text.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, so the absorbing
 *     and reflecting surfaces in Topic 03 are axis-aligned rectangles and
 *     nothing else is hatched anywhere.
 *   - A point label defaults to north-east, which is wrong wherever a curve
 *     leaves the point that way. Topic 04's violet marker carries at: "nw"
 *     for that reason: the 1240/lambda curve climbs away to the north-east
 *     of it.
 *   - A `circle` curve is round only when both axes carry the same pixels
 *     per unit. No `circle` curve appears below at all: the Amperian loop is
 *     an `ellipse` because a loop seen edge-on IS an ellipse, and the
 *     spreading wavefronts in Topic 02 are `arcs`, which take their radius
 *     from the x-scale and are drawn in screen space, so they stay round
 *     whatever the axes do.
 *   - Two collinear strokes read as one line. Topic 01's figure draws the
 *     two wires as the current arrows themselves rather than as a wire plus
 *     an arrow on top of it, and the plate edges are `polys` rather than
 *     `segments` for the same reason.
 *   - A horizontal arrow's at: "above" label lands BELOW the shaft when the
 *     arrow points left. Topic 03's reflection figure has the returning beam
 *     pointing left and carrying at: "above" precisely so that its label
 *     sits below its own shaft and clears the incoming beam's label.
 *   - `check-figures` inspects only `plot`, `numberline` and `flow`, so the
 *     one `axes3d` figure was placed by hand against the renderer's own
 *     isometric arithmetic in components/textbook/figures.tsx: with the
 *     origin at 0.4 of the card width and a reach of 3.2 units, vectors of
 *     length 1.8 along y and z and 2.4 along x all land inside the canvas
 *     with their tip labels clear of the three axis labels.
 * No new figure vocabulary is requested. Everything this chapter wanted to
 * draw, `plot`, `numberline`, `flow` and `axes3d` could already draw.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12ElectromagneticWaves: Chapter = {
  "chapter": "08",
  "title": "Electromagnetic Waves",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Displacement Current and Maxwell's Equations",
      "chip": "01 THE GAP",
      "kalam": "the current that is not there, and the field that is",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Displacement Current and Maxwell's Equations</b><br>JEE Main carries about one calculation-heavy question here, almost always find the displacement current or find <i>B</i> between the plates. NEET asks a one-mark conceptual question, usually the steady-state trap. JEE Advanced folds it into RC charging or a lossy dielectric. For CBSE Boards, expect the definition of displacement current, the argument for why it must exist, or the statement of Maxwell's four equations, worth 2 to 3 marks.<br><br><b>02 · Sources and the Discovery of Electromagnetic Waves</b><br>A CBSE Boards favourite: how are electromagnetic waves produced, and describe Hertz's experiment, are classic 2 to 3 mark questions. NEET asks conceptual one-liners on which charge radiates and whether EM waves need a medium. JEE Main links an LC source to its radiated frequency, or a point source to its intensity. JEE Advanced chains source power to intensity to field to force. The history of Maxwell, Hertz, Bose and Marconi turns up in assertion-reason and match-the-column items.<br><br><b>03 · Nature and Properties of Electromagnetic Waves</b><br>The reliable scoring zone of the chapter. JEE Main almost always carries one numerical: <i>E</i><sub>0</sub> against <i>B</i><sub>0</sub>, intensity, or radiation pressure. NEET likes one or two conceptual lines on the transverse nature, the phase relation and the energy split. JEE Advanced folds radiation pressure into a mechanics problem, typically a force and an acceleration on a reflector. CBSE Boards ask for the properties of EM waves or for <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>), worth 2 to 3 marks.<br><br><b>04 · The Electromagnetic Spectrum</b><br>The highest-yield recall topic in the chapter, and pure marks if you have the ranges and uses in your head. NEET loves it and asks one or two direct questions on the production, detection or use of a band. JEE Main asks for band ordering or a <i>c</i> = <i>f</i>λ identification. JEE Advanced rarely asks it alone but links X-ray production to modern physics. CBSE Boards very commonly ask uses of X or how X is produced, for 2 to 3 marks."
        },
        {
          "t": "p",
          "html": "Here is a puzzle that bothered physicists for a while, and the way out of it is the whole of this chapter.<br><br>You already know two solid facts. First, a current flowing through a wire wraps a magnetic field around itself: that is Ampere's circuital law from Moving Charges and Magnetism, and it works beautifully. Second, a <b>changing magnetic field creates an electric field</b>: that is Faraday's law of induction. Notice the symmetry begging to be completed. If a changing magnetic field makes an electric field, should a <b>changing electric field</b> not make a magnetic field?<br><br>Maxwell closed that gap. But he did not close it for the sake of symmetry. He was forced into it by a genuine contradiction, and the cleanest place to see the contradiction is a humble <b>charging capacitor</b>."
        },
        {
          "t": "p",
          "html": "Picture a parallel plate capacitor being charged by a battery. Current flows in the connecting wires, charge piles up on one plate and drains off the other. But here is the thing: <b>no charge crosses the gap</b>. There is empty space or a dielectric there, and nothing passes through it. So we have current in the wire and no current in the gap, on the same circuit.<br><br>Now apply Ampere's law to a loop encircling the wire. It says the line integral of <i>B</i> around the loop equals μ<sub>0</sub> times the current piercing <b>any</b> surface bounded by that loop. The trouble is the phrase <i>any surface</i>. Choose a flat disc that the wire pokes through and it catches the conduction current, so you get a magnetic field. Choose instead a balloon-shaped surface with the same rim, bulging out and slipping between the capacitor plates, and it catches <b>no current at all</b>.<br><br>Same loop, same boundary, same left-hand side. Two different answers. Ampere's law has just contradicted itself."
        },
        {
          "t": "think",
          "html": "imagine a water pipe with a sealed rubber membrane stretched across the middle. water cannot physically cross the membrane. but as you push water in on the left, the membrane bulges, and that bulge shoves water out on the right. to anyone watching the two ends, the flow continues right through, even though not one water molecule crossed. in a capacitor, the <b>changing electric field</b> in the gap is that bulging membrane. it is not a flow of charge, but it carries the books across so that current stays continuous all the way round the circuit."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 8.1 · ONE LOOP, TWO SURFACES, TWO ANSWERS",
          "chips": ["the flat disc", "the balloon"],
          "captions": [
            "A parallel plate capacitor part way through charging. The current I flows in on the left and out on the right, the left plate is gaining positive charge, and inside the gap there is a uniform electric field E pointing from the positive plate to the negative one. The tall narrow ellipse is one Amperian loop around the left-hand wire, drawn as you would see a circle edge-on. Stretch the flat disc across it, the shaded strip, and the wire pierces it: the disc catches the full conduction current, so Ampere's law says the magnetic field around the loop is mu-nought I.",
            "Now keep the SAME loop, the same ellipse in the same place, and stretch a different surface over it: a balloon that bulges to the right, past the edge of the left plate, and dips down through the gap between the plates. Nothing pierces this one, because no charge crosses the gap. Ampere's law now says the magnetic field around the loop is zero. The left-hand side of the law depends only on the loop, and the loop did not move. That is the contradiction, and the only way out is to admit that something in the gap is doing a current's job."
          ],
          "frames": [
            {
              "x": [0, 9], "y": [-3, 3], "axes": "none", "aspect": 0.62,
              "curves": [
                { "c": "ellipse", "cx": 1.7, "cy": 0, "a": 0.35, "b": 1.9 }
              ],
              "bands": [{ "x0": 1.4, "x1": 2.0, "y0": -1.9, "y1": 1.9 }],
              "polys": [
                { "pts": [[3.0, -1.5], [3.0, 1.5]], "tone": "ink" },
                { "pts": [[4.4, -1.5], [4.4, 1.5]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [0.4, 0], "to": [3.0, 0], "tone": "ink", "label": "I", "at": "above" },
                { "from": [4.4, 0], "to": [8.6, 0], "tone": "ink", "label": "I", "at": "above" },
                { "from": [3.1, 0.7], "to": [4.3, 0.7], "tone": "amber", "label": "E", "at": "above" },
                { "from": [3.1, -0.7], "to": [4.3, -0.7], "tone": "amber" }
              ],
              "marks": [
                { "x": 2.6, "y": 1.15, "glyph": "plus" },
                { "x": 4.8, "y": 1.15, "glyph": "minus" }
              ],
              "labels": [{ "x": 1.7, "y": 2.85, "text": "S1" }]
            },
            {
              "x": [0, 9], "y": [-3, 3], "axes": "none", "aspect": 0.62,
              "curves": [
                { "c": "ellipse", "cx": 1.7, "cy": 0, "a": 0.35, "b": 1.9 }
              ],
              "polys": [
                { "pts": [[3.0, -1.5], [3.0, 1.5]], "tone": "ink" },
                { "pts": [[4.4, -1.5], [4.4, 1.5]], "tone": "ink" },
                { "pts": [[1.7, 1.9], [2.6, 2.4], [3.7, 1.8], [3.7, -1.8], [2.6, -2.4], [1.7, -1.9]], "smooth": true, "tone": "amber" }
              ],
              "arrows": [
                { "from": [0.4, 0], "to": [3.0, 0], "tone": "ink", "label": "I", "at": "above" },
                { "from": [4.4, 0], "to": [8.6, 0], "tone": "ink", "label": "I", "at": "above" },
                { "from": [3.1, 0.7], "to": [4.3, 0.7], "tone": "amber", "label": "E", "at": "above" },
                { "from": [3.1, -0.7], "to": [4.3, -0.7], "tone": "amber" }
              ],
              "marks": [
                { "x": 2.6, "y": 1.15, "glyph": "plus" },
                { "x": 4.8, "y": 1.15, "glyph": "minus" }
              ],
              "labels": [{ "x": 2.6, "y": 2.85, "text": "S2" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Maxwell's resolution was bold. He proposed that a changing electric field in the gap behaves, magnetically, <b>exactly like a real current</b>. He called it the <b>displacement current</b>. Add it to Ampere's law and the contradiction vanishes: both surfaces now give the same answer.<br><br>The consequence is far bigger than the repair. It means a changing electric field is a genuine source of magnetic field <b>anywhere in space</b>, even in a perfect vacuum with not a single charge around. Hold that thought. Together with Faraday's law, it is the seed from which electromagnetic waves grow."
        },
        {
          "t": "def",
          "term": "Electric flux, as this chapter uses it",
          "html": "Φ<sub>E</sub> = ∫<i>E</i> · d<i>A</i>, which for a <b>uniform</b> field <i>E</i> passing normally through a flat area <i>A</i> collapses to the single product Φ<sub>E</sub> = <i>EA</i>. Quoted from Electric Charges and Fields, not re-derived. Every displacement-current formula below uses the collapsed form, which is legitimate only for an <b>ideal</b> capacitor: a uniform field confined to the gap, with the fringing at the plate edges neglected. Real capacitors fringe, and the formulas become approximations rather than identities."
        },
        {
          "t": "def",
          "term": "Displacement current",
          "html": "The current attributed to a <b>time-varying electric flux</b>, <i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>. It is <b>not a movement of charge</b>: nothing physical crosses the capacitor gap. It exists <b>only where the electric flux is changing with time</b>, so a fully charged capacitor sitting at steady voltage has zero displacement current. But the magnetic field it predicts is physically real and measurable, which is what stops it being a bookkeeping trick."
        },
        {
          "t": "formula",
          "kicker": "DISPLACEMENT CURRENT",
          "tag": "THE DEFINITION",
          "main": "I<sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/dt,  Φ<sub>E</sub> = EA",
          "legend": [
            "<i>I</i><sub>d</sub> is the displacement current, in amperes (A).",
            "ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup> is the permittivity of free space.",
            "Φ<sub>E</sub> is the electric flux through the surface, in V m. For a uniform field <i>E</i> in V/m normal to a flat area <i>A</i> in m<sup>2</sup>, Φ<sub>E</sub> = <i>EA</i>.",
            "<i>t</i> is time, in seconds (s)."
          ],
          "note": "The flux form Φ<sub>E</sub> = <i>EA</i> assumes an ideal capacitor: a uniform field confined to the gap, with fringing at the edges neglected. Every numerical below makes that assumption."
        },
        {
          "t": "formula",
          "kicker": "THE AMPERE-MAXWELL LAW",
          "tag": "AMPERE'S LAW, REPAIRED",
          "main": "∮ B · dl = μ<sub>0</sub>(I<sub>c</sub> + I<sub>d</sub>) = μ<sub>0</sub>I<sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/dt",
          "legend": [
            "<i>B</i> is the magnetic field on the loop, in tesla (T), and d<i>l</i> an element of the loop, in metres (m).",
            "μ<sub>0</sub> = 4π × 10<sup>−7</sup> T m/A is the permeability of free space.",
            "<i>I</i><sub>c</sub> is the conduction current through the surface, in amperes (A): actual charge in motion.",
            "<i>I</i><sub>d</sub> is the displacement current through the same surface, in amperes (A): changing flux, no charge.",
            "Φ<sub>E</sub> is the electric flux through that surface, in V m, and <i>t</i> is time in seconds (s)."
          ],
          "note": "Read the sum as one thing. It is the TOTAL current, conduction plus displacement, that wraps a magnetic field around itself, and the total is the same through every surface bounded by the loop. That is what makes the law consistent again."
        },
        {
          "t": "deriv",
          "kicker": "WHY THE DISPLACEMENT CURRENT MUST EXIST",
          "steps": [
            { "eq": "I<sub>c</sub> = dq/dt flows in the wires, charging plates of area A", "why": "Set up the situation. A parallel plate capacitor is being charged, so at every instant a conduction current in the connecting wires is depositing charge q on the plates. Assume an ideal capacitor, so the field between the plates is uniform and confined to the gap." },
            { "eq": "S<sub>1</sub> gives ∮ B · dl = μ<sub>0</sub>I<sub>c</sub>,  S<sub>2</sub> gives ∮ B · dl = 0", "why": "One loop, two surfaces. Take an Amperian loop of radius r around the wire. The flat disc S1 is pierced by the wire and encloses I_c. The balloon S2 has the same rim but dips between the plates, and no charge crosses the gap, so it encloses nothing. The left-hand side depends only on the loop, which we did not change, and yet the right-hand side did. That inconsistency is the whole problem." },
            { "eq": "E = q/(ε<sub>0</sub>A)  ⟹  Φ<sub>E</sub> = EA = q/ε<sub>0</sub>", "why": "Find what is flowing through the gap. If no charge crosses S2, the only thing changing inside it is the electric field, so hunt for a quantity built from that changing field. The field between the plates and the flux through S2 both come from Electrostatic Potential and Capacitance and are quoted, not re-derived." },
            { "eq": "ε<sub>0</sub> dΦ<sub>E</sub>/dt = ε<sub>0</sub> · (1/ε<sub>0</sub>) dq/dt = dq/dt = I<sub>c</sub>", "why": "Differentiate, and watch a current appear. Because q grows with time, this combination comes out EXACTLY equal to the conduction current in the wire, and it has the dimensions of current: amperes, checked in the header's DIMENSIONS ledger. Maxwell named it the displacement current, I_d." },
            { "eq": "∮ B · dl = μ<sub>0</sub>(I<sub>c</sub> + I<sub>d</sub>)", "why": "Repair the law. Replace current with conduction plus displacement current. Now S1 sees I_c and no changing flux, so its total is I_c. S2 sees no conduction current and a displacement current I_d = I_c, so its total is also I_c. Both surfaces give the same answer and the contradiction is gone." },
            { "eq": "in the gap: I<sub>c</sub> = 0 and B ≠ 0", "why": "The consequence that matters. Between the plates there is no conduction current at all, and yet there IS a magnetic field, produced purely by a changing electric field. Put that beside Faraday's law, where a changing magnetic field produces an electric field, and the two together can sustain each other with no charges anywhere. That is Topic 02 and Topic 03." }
          ]
        },
        {
          "t": "defgrid",
          "title": "Maxwell's four equations",
          "tag": "INTEGRAL FORM",
          "rows": [
            { "k": "∮ E · dA = q<sub>enc</sub>/ε<sub>0</sub>", "v": "<b>Gauss's law for electricity.</b> Electric field lines begin and end on charge, so the flux out of a closed surface counts the charge inside. Quoted from Electric Charges and Fields." },
            { "k": "∮ B · dA = 0", "v": "<b>Gauss's law for magnetism.</b> Zero, always, through any closed surface: magnetic field lines close on themselves. There is no isolated north or south pole, no magnetic monopole." },
            { "k": "∮ E · dl = −dΦ<sub>B</sub>/dt", "v": "<b>Faraday's law of induction.</b> A changing magnetic flux drives an electric field around a loop. The minus sign is Lenz's law: the induced effect opposes the change that caused it." },
            { "k": "∮ B · dl = μ<sub>0</sub>I<sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/dt", "v": "<b>The Ampere-Maxwell law.</b> Both a conduction current and a changing electric flux wrap a magnetic field around themselves. The second term is the new one, and it is what this topic is about." }
          ]
        },
        {
          "t": "formula",
          "kicker": "IN THE GAP, THE SHORTCUT",
          "tag": "SKIP THE FLUX",
          "main": "I<sub>d</sub> = I<sub>c</sub> = dq/dt = C dV/dt",
          "legend": [
            "<i>I</i><sub>d</sub> is the displacement current between the plates, in amperes (A), and <i>I</i><sub>c</sub> the conduction current in the wire, also in amperes.",
            "<i>q</i> is the charge on a plate, in coulombs (C), and <i>t</i> is time in seconds (s).",
            "<i>C</i> is the capacitance, in farads (F), and <i>V</i> the voltage across the plates, in volts (V).",
            "Inside the gap the two currents are equal, so the area <i>A</i>, the separation <i>d</i> and ε<sub>0</sub> all cancel and never need to be found."
          ],
          "note": "Three routes to the same number, and the data decides which. Charge given: use d<i>q</i>/d<i>t</i>. Voltage given: use <i>C</i> d<i>V</i>/d<i>t</i>. Rate of change of field given: use ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>. Pick the one that matches what you were handed."
        },
        {
          "t": "formula",
          "kicker": "MAGNETIC FIELD BETWEEN CIRCULAR PLATES",
          "tag": "ONLY THE ENCLOSED FRACTION",
          "main": "r ≤ R:  B = μ<sub>0</sub>I<sub>d</sub>r / (2πR<sup>2</sup>)      r ≥ R:  B = μ<sub>0</sub>I<sub>d</sub> / (2πr)",
          "legend": [
            "<i>B</i> is the magnetic field, in tesla (T), at a point in the gap a distance <i>r</i> from the axis, in metres (m).",
            "<i>R</i> is the radius of the circular plates, in metres (m).",
            "<i>I</i><sub>d</sub> is the total displacement current in the gap, in amperes (A), and equals the conduction current in the wire.",
            "μ<sub>0</sub> = 4π × 10<sup>−7</sup> T m/A."
          ],
          "note": "The displacement current is spread uniformly across the plate area, so a loop of radius <i>r</i> inside the plates encloses only the fraction π<i>r</i><sup>2</sup>/π<i>R</i><sup>2</sup> of it. Outside the plates the whole of it is enclosed and you are back to the straight-wire result of Moving Charges and Magnetism. The two expressions agree at <i>r</i> = <i>R</i>, where both give μ<sub>0</sub><i>I</i><sub>d</sub>/2π<i>R</i>, which is the check that the fraction was set up correctly."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE FIELD IN THE GAP, AGAINST DISTANCE FROM THE AXIS",
          "chips": ["inside the plates", "and outside"],
          "captions": [
            "Inside the gap the magnetic field climbs in a straight line from zero on the axis to its largest value at the rim. The reason is the enclosed fraction: a loop of radius r catches only r squared over R squared of the displacement current, and dividing that by the loop's own circumference, which grows as r, leaves something proportional to r. Halve the radius and you halve the field, which is exactly what the source's own practice question is testing when it asks for the field at the edge and then at half the radius.",
            "Add the outside. Past the rim the loop encloses the whole displacement current, and the field falls away as one over r, precisely as it does around a straight wire. The two pieces meet at r = R with the same value, mu-nought I over two pi R, and no kink: the field is largest exactly at the edge of the plates. If your two expressions do not meet there, one of them is wrong."
          ],
          "frames": [
            {
              "x": [0, 3], "y": [0, 1.25], "axisX": "r", "axisY": "B",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [1, 1]] },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "labels": [{ "x": 0.62, "y": 1.1, "text": "B rises with r" }]
            },
            {
              "x": [0, 3], "y": [0, 1.25], "axisX": "r", "axisY": "B",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [1, 1]] },
                { "c": "pts", "pts": [[1, 1], [1.25, 0.8], [1.5, 0.667], [1.75, 0.571], [2, 0.5], [2.25, 0.444], [2.5, 0.4], [2.75, 0.364], [3, 0.333]], "smooth": true },
                { "c": "vline", "x": 1, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 0.55, "y": 1.15, "text": "inside: B ∝ r" },
                { "x": 2.2, "y": 0.85, "text": "outside: B ∝ 1/r" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "One last thing before the numbers, because it is what separates a real idea from a bookkeeping trick. It would be fair to object that all Maxwell did was invent a quantity to make his equation balance. The answer is that <b>the magnetic field this quantity predicts is physically real and can be measured</b>. Between the plates of a charging capacitor, where there is no conduction current whatever, there is a magnetic field, and it has exactly the value the Ampere-Maxwell law says.<br><br>Worked Example 3 below shows why that took so long to confirm. For a laboratory-sized capacitor charging at a laboratory rate, the field comes out at around 10<sup>−11</sup> T, which is about a millionth of the Earth's own magnetic field. It is not a small effect because it is a weak idea; it is small because <i>c</i> is large, and the whole of Topic 03 turns on the same fact."
        },
        {
          "t": "defgrid",
          "title": "Units and dimensions of the new quantities",
          "tag": "M L T A",
          "rows": [
            { "k": "Displacement current <i>I</i><sub>d</sub>", "v": "ampere (A). Dimensions [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup> A<sup>1</sup>]. The same as any current, which is the point: ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> really is amperes." },
            { "k": "Electric flux Φ<sub>E</sub>", "v": "V m, equivalently N m<sup>2</sup> C<sup>−1</sup>. Dimensions [M<sup>1</sup> L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>]." },
            { "k": "Displacement current density <i>j</i><sub>d</sub>", "v": "A m<sup>−2</sup>. Dimensions [M<sup>0</sup> L<sup>−2</sup> T<sup>0</sup> A<sup>1</sup>]. Equal to ε<sub>0</sub> d<i>E</i>/d<i>t</i>." },
            { "k": "Permittivity of free space ε<sub>0</sub>", "v": "C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>. Dimensions [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]. Worth memorising: it is the one constant in this chapter whose dimensions no one can reconstruct under pressure." },
            { "k": "Permeability of free space μ<sub>0</sub>", "v": "T m A<sup>−1</sup>. Dimensions [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup> A<sup>−2</sup>]. Multiply it by ε<sub>0</sub> and you get [L<sup>−2</sup> T<sup>2</sup>], a reciprocal speed squared, which is Topic 03 in one line." }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A parallel plate capacitor has plates of area <i>A</i> = 80 cm<sup>2</sup>. While charging, the electric field between the plates increases uniformly at d<i>E</i>/d<i>t</i> = 6.0 × 10<sup>8</sup> V m<sup>−1</sup> s<sup>−1</sup>. Calculate the displacement current.",
          "steps": [
            "Convert the area first: <i>A</i> = 80 cm<sup>2</sup> = 80 × 10<sup>−4</sup> m<sup>2</sup> = 8.0 × 10<sup>−3</sup> m<sup>2</sup>.",
            "With Φ<sub>E</sub> = <i>EA</i> and <i>A</i> constant, <i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> = ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>.",
            "Substitute: <i>I</i><sub>d</sub> = (8.85 × 10<sup>−12</sup>)(8.0 × 10<sup>−3</sup>)(6.0 × 10<sup>8</sup>).",
            "Numbers: 8.85 × 8.0 × 6.0 = 424.8. Powers: 10<sup>−12−3+8</sup> = 10<sup>−7</sup>. So <i>I</i><sub>d</sub> = 424.8 × 10<sup>−7</sup> A."
          ],
          "ans": "<i>I</i><sub>d</sub> = 4.25 × 10<sup>−5</sup> A = 42.5 μA"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The charge on a parallel plate capacitor varies as <i>q</i> = <i>q</i><sub>0</sub> sin(ω<i>t</i>) with <i>q</i><sub>0</sub> = 8.0 nC and frequency <i>f</i> = 50 Hz. What is the peak displacement current between the plates?",
          "steps": [
            "<b>The trap.</b> Most students reach for <i>I</i><sub>d</sub> = ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i> and then hunt for the plate area and separation, which are not even given.",
            "Inside the gap <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i>. No area, no ε<sub>0</sub>, no flux.",
            "d<i>q</i>/d<i>t</i> = <i>q</i><sub>0</sub>ω cos(ω<i>t</i>), so the peak value is <i>q</i><sub>0</sub>ω = <i>q</i><sub>0</sub>(2π<i>f</i>).",
            "(<i>I</i><sub>d</sub>)<sub>peak</sub> = (8.0 × 10<sup>−9</sup>)(2π × 50) = (8.0 × 10<sup>−9</sup>)(314.2)."
          ],
          "ans": "(<i>I</i><sub>d</sub>)<sub>peak</sub> ≈ 2.5 × 10<sup>−6</sup> A = 2.5 μA"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A capacitor with circular plates of radius <i>R</i> = 6.0 cm and capacitance <i>C</i> = 5.0 nF is charged through a resistor <i>R</i><sub>s</sub> = 2.0 MΩ from a <i>V</i><sub>0</sub> = 100 V battery. At <i>t</i> equal to one time constant, find (a) the conduction current and (b) the magnetic field at <i>r</i> = 3.0 cm from the axis, between the plates.",
          "steps": [
            "<b>(a)</b> Time constant τ = <i>R</i><sub>s</sub><i>C</i> = (2.0 × 10<sup>6</sup>)(5.0 × 10<sup>−9</sup>) = 1.0 × 10<sup>−2</sup> s, and the charging current decays as <i>I</i><sub>c</sub> = (<i>V</i><sub>0</sub>/<i>R</i><sub>s</sub>)e<sup>−t/τ</sup>.",
            "At <i>t</i> = τ: <i>I</i><sub>c</sub> = (100/2.0 × 10<sup>6</sup>)e<sup>−1</sup> = (5.0 × 10<sup>−5</sup>)(0.368) ≈ 1.84 × 10<sup>−5</sup> A, and <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub>.",
            "<b>(b)</b> Only the enclosed fraction counts, so <i>B</i> = μ<sub>0</sub><i>I</i><sub>d</sub><i>r</i>/(2π<i>R</i><sup>2</sup>) with <i>r</i> = 0.03 m and <i>R</i> = 0.06 m.",
            "<i>B</i> = (2 × 10<sup>−7</sup>)(1.84 × 10<sup>−5</sup>)(0.03)/(0.06)<sup>2</sup> = (1.10 × 10<sup>−13</sup>)/(3.6 × 10<sup>−3</sup>).",
            "<b>Sanity check.</b> <i>r</i> is half of <i>R</i>, so this must be half the edge value μ<sub>0</sub><i>I</i><sub>d</sub>/2π<i>R</i> = 6.1 × 10<sup>−11</sup> T. It is."
          ],
          "ans": "(a) <i>I</i><sub>c</sub> = <i>I</i><sub>d</sub> ≈ 1.84 × 10<sup>−5</sup> A  (b) <i>B</i> ≈ 3.1 × 10<sup>−11</sup> T, tiny, which is why Maxwell's prediction was so hard to confirm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A capacitor is filled with a material of relative permittivity ε<sub>r</sub> = 4.0 and small conductivity σ = 1.0 × 10<sup>−4</sup> S m<sup>−1</sup>. An AC voltage <i>V</i> = <i>V</i><sub>0</sub> sin(ω<i>t</i>) is applied. (a) Find the ratio of the amplitudes of displacement current density to conduction current density at <i>f</i> = 50 Hz. (b) At what frequency are the two equal?",
          "steps": [
            "With gap <i>d</i>, the field is <i>E</i> = (<i>V</i><sub>0</sub>/<i>d</i>) sin ω<i>t</i>. Conduction: <i>j</i><sub>c</sub> = σ<i>E</i>, so the amplitude is σ<i>V</i><sub>0</sub>/<i>d</i>.",
            "Displacement: <i>j</i><sub>d</sub> = ε<sub>r</sub>ε<sub>0</sub> d<i>E</i>/d<i>t</i>, so the amplitude is ε<sub>r</sub>ε<sub>0</sub>ω<i>V</i><sub>0</sub>/<i>d</i>.",
            "<b>(a)</b> The <i>V</i><sub>0</sub>/<i>d</i> cancels: ratio = ε<sub>r</sub>ε<sub>0</sub>ω/σ, with ω = 2π(50) = 314 rad s<sup>−1</sup>.",
            "Ratio = (4.0)(8.85 × 10<sup>−12</sup>)(314)/(1.0 × 10<sup>−4</sup>) = (1.11 × 10<sup>−8</sup>)/(1.0 × 10<sup>−4</sup>) ≈ 1.1 × 10<sup>−4</sup>. Conduction utterly dominates.",
            "<b>(b)</b> Set the ratio to 1: ω = σ/(ε<sub>r</sub>ε<sub>0</sub>) = (1.0 × 10<sup>−4</sup>)/(3.54 × 10<sup>−11</sup>) ≈ 2.82 × 10<sup>6</sup> rad s<sup>−1</sup>, so <i>f</i> = ω/2π ≈ 4.5 × 10<sup>5</sup> Hz."
          ],
          "ans": "(a) ratio ≈ 1.1 × 10<sup>−4</sup>  (b) <i>f</i> ≈ 4.5 × 10<sup>5</sup> Hz. The same material acts like a conductor at low frequency and like an insulator at high frequency"
        },
        {
          "t": "mcq",
          "q": "In a charging parallel plate capacitor, the displacement current between the plates is:",
          "opts": [
            { "label": "zero", "nudge": "This confuses \"no charge crosses the gap\", which is true, with \"no current\", which is false. There is no CONDUCTION current, and there is a displacement current." },
            { "label": "equal to the conduction current in the wire" },
            { "label": "half the conduction current", "nudge": "An invented fraction. Nothing in the derivation produces a factor of one half; ε₀ dΦ_E/dt comes out exactly equal to dq/dt." },
            { "label": "infinite", "nudge": "This comes from imagining a broken circuit at the gap. The field changes smoothly, so the rate of change of flux, and hence the current, is finite." }
          ],
          "correct": 1,
          "solution": "Continuity of total current around the circuit demands <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> in the gap, and the derivation proves it: ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i> = d<i>q</i>/d<i>t</i> = <i>I</i><sub>c</sub>. That equality is what makes the two Amperian surfaces agree."
        },
        {
          "t": "mcq",
          "q": "Maxwell's modification of Ampere's law was necessary because the original law:",
          "opts": [
            { "label": "violated energy conservation", "nudge": "It sounds weighty and it is not the reason. The failure was a logical inconsistency in the law's own statement, not a thermodynamic one." },
            { "label": "gave different magnetic fields for different surfaces sharing the same boundary loop" },
            { "label": "could not handle steady currents", "nudge": "Backwards. The original law works perfectly for steady currents. It fails for time-varying fields, which is exactly the case a charging capacitor creates." },
            { "label": "ignored magnetic monopoles", "nudge": "Monopoles belong to Gauss's law for magnetism, a different one of the four equations entirely. Ampere's law never claimed anything about them." }
          ],
          "correct": 1,
          "solution": "Stretch a flat disc and then a balloon over the same Amperian loop around the wire of a charging capacitor. The disc encloses <i>I</i><sub>c</sub>, the balloon encloses nothing, and Ampere's law returns two different values for one line integral around one unchanged loop. That is a contradiction inside the law, and it is what forced the repair."
        },
        {
          "t": "mcq",
          "q": "Which of Maxwell's equations expresses that isolated magnetic poles do not exist?",
          "opts": [
            { "label": "∮ E · dA = q/ε₀", "nudge": "That is Gauss's law for ELECTRICITY, and its right-hand side is not zero precisely because electric charges DO exist as isolated monopoles." },
            { "label": "∮ B · dA = 0" },
            { "label": "∮ E · dl = −dΦ_B/dt", "nudge": "That is Faraday's law: a changing magnetic field makes an electric field. It says nothing about poles." },
            { "label": "∮ B · dl = μ₀I_c + μ₀ε₀ dΦ_E/dt", "nudge": "That is the Ampere-Maxwell law, which names the SOURCES of the magnetic field. Being a source is a different question from being a pole." }
          ],
          "correct": 1,
          "solution": "Zero net magnetic flux through <b>any</b> closed surface means every field line that enters must leave, so magnetic field lines close on themselves. There is no surface you can draw that traps a lone north pole, because there is no lone north pole to trap."
        },
        {
          "t": "mcq",
          "q": "A capacitor is fully charged and connected to a steady DC source. The displacement current between its plates is:",
          "opts": [
            { "label": "maximum", "nudge": "This assumes a capacitor ALWAYS carries a displacement current. It carries one only while its flux is changing, and at steady state nothing is changing." },
            { "label": "equal to the leakage current", "nudge": "Leakage is a real-material effect through an imperfect dielectric. It is a conduction current, and the question is about an ideal capacitor." },
            { "label": "zero" },
            { "label": "equal to ε₀AE/d", "nudge": "Look at the dimensions before the physics: that expression is not a rate of change of anything, so it cannot be a current. Every displacement current has a d/dt in it." }
          ],
          "correct": 2,
          "solution": "Fully charged and steady means <i>q</i>, and therefore <i>E</i> and Φ<sub>E</sub>, are constant. So dΦ<sub>E</sub>/d<i>t</i> = 0 and <i>I</i><sub>d</sub> = 0. Wording like <b>fully charged</b> or <b>steady DC</b> is nearly always a zero-displacement-current cue, and it is worth training your eye to catch it."
        },
        {
          "t": "practice",
          "items": [
            { "q": "<b>[CBSE]</b> A parallel plate capacitor of plate area 0.02 m<sup>2</sup> is being charged so that the electric field between its plates increases at 1.5 × 10<sup>9</sup> V m<sup>−1</sup> s<sup>−1</sup>. Find the displacement current.", "a": "<i>I</i><sub>d</sub> = ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i> = (8.85 × 10<sup>−12</sup>)(0.02)(1.5 × 10<sup>9</sup>) = (8.85 × 10<sup>−12</sup>)(3.0 × 10<sup>7</sup>) ≈ <b>2.66 × 10<sup>−4</sup> A</b>" },
            { "q": "<b>[NEET]</b> The voltage across a capacitor is <i>V</i> = 30 sin(200<i>t</i>) volt and its capacitance is 2 μF. Find the peak displacement current.", "a": "Use <i>I</i><sub>d</sub> = <i>C</i> d<i>V</i>/d<i>t</i> = <i>C</i>(30)(200) cos(200<i>t</i>), so the peak is (2 × 10<sup>−6</sup>)(6000) = <b>1.2 × 10<sup>−2</sup> A = 12 mA</b>. No area or separation needed." },
            { "q": "<b>[JEE Main]</b> A parallel plate capacitor with circular plates of radius 8.0 cm carries a conduction current of 0.20 A while charging. Find the magnetic field (a) at the edge of the plates and (b) at a radius of 4.0 cm from the axis.", "a": "(a) At <i>r</i> = <i>R</i>: <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>R</i>) = (2 × 10<sup>−7</sup>)(0.20)/(0.08) = <b>5.0 × 10<sup>−7</sup> T</b>. (b) At half the radius the enclosed fraction halves the field: <b>2.5 × 10<sup>−7</sup> T</b>." },
            { "q": "<b>[JEE Main]</b> The charge on a capacitor grows as <i>q</i> = (4<i>t</i><sup>2</sup> + 2<i>t</i>) μC, with <i>t</i> in seconds. Find the displacement current between the plates at <i>t</i> = 3 s.", "a": "<i>I</i><sub>d</sub> = d<i>q</i>/d<i>t</i> = (8<i>t</i> + 2) μA. At <i>t</i> = 3 s: (24 + 2) = <b>26 μA</b>." },
            { "q": "<b>[JEE Advanced]</b> A capacitor filled with a dielectric (ε<sub>r</sub> = 2.5, conductivity σ = 5 × 10<sup>−6</sup> S m<sup>−1</sup>) is driven by an AC source. Find the angular frequency at which the displacement current density is exactly <b>twice</b> the conduction current density.", "a": "ε<sub>r</sub>ε<sub>0</sub>ω/σ = 2, so ω = 2σ/(ε<sub>r</sub>ε<sub>0</sub>) = (1.0 × 10<sup>−5</sup>)/(2.5 × 8.85 × 10<sup>−12</sup>) = (1.0 × 10<sup>−5</sup>)/(2.21 × 10<sup>−11</sup>) ≈ <b>4.5 × 10<sup>5</sup> rad s<sup>−1</sup></b>" }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Thinking displacement current is moving charge.</b> It is not. Nothing crosses the gap. It is the changing electric flux that mimics a current's magnetic effect, and saying so in those words is what earns the mark in a Boards answer.",
            "<b>Forgetting that <i>I</i><sub>d</sub> = 0 at steady state.</b> A constant field means dΦ<sub>E</sub>/d<i>t</i> = 0. Watch for the words <b>fully charged</b> or <b>steady DC</b>: they are almost always a zero-displacement-current cue.",
            "<b>Hunting for <i>A</i>, <i>d</i> and ε<sub>0</sub> when they cancel.</b> Inside the gap <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> = <i>C</i> d<i>V</i>/d<i>t</i>. If the question gives you charge or voltage, the flux machinery is a detour.",
            "<b>Using the whole <i>I</i><sub>d</sub> instead of the enclosed fraction for <i>B</i>.</b> For a point at radius <i>r</i> < <i>R</i> between circular plates, only <i>I</i><sub>d</sub><i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> is enclosed. Using all of it overestimates <i>B</i>, and by a factor you can name: <i>R</i>/<i>r</i>."
          ]
        },
        {
          "t": "protip",
          "html": "for any displacement-current numerical, ask one question before you write anything: <b>what is the easiest rate of change here?</b> charge given, use d<i>q</i>/d<i>t</i>. voltage given, use <i>C</i> d<i>V</i>/d<i>t</i>. field rate given, use ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>. pick the one that matches the data and you skip about ninety per cent of the algebra. and if the question then asks for <i>B</i>, check whether the point is inside or outside the plates <b>before</b> you choose a formula, because those are two different formulas that happen to agree at exactly one radius."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>", "note": "a changing electric flux acts like a current; no charge actually flows" },
            { "f": "in the gap: <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i> = <i>C</i> d<i>V</i>/d<i>t</i>", "note": "use whichever the question hands you; A, d and ε₀ cancel" },
            { "f": "∮ <i>B</i> · d<i>l</i> = μ<sub>0</sub>(<i>I</i><sub>c</sub> + <i>I</i><sub>d</sub>)", "note": "the Ampere-Maxwell law: total current, and the total is surface-independent" },
            { "f": "<i>r</i> < <i>R</i>: <i>B</i> = μ<sub>0</sub><i>I</i><sub>d</sub><i>r</i>/(2π<i>R</i><sup>2</sup>)", "note": "only the enclosed fraction counts; outside, B = μ₀I_d/2πr" },
            { "f": "Gauss-E, Gauss-B, Faraday, Ampere-Maxwell", "note": "charge, no pole, changing B makes E, changing E makes B" },
            { "f": "ε<sub>0</sub> = [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]", "note": "the one dimensional formula in this topic worth memorising outright" },
            { "f": "steady state ⟹ <i>I</i><sub>d</sub> = 0", "note": "no change in flux, no displacement current, no field in the gap" }
          ],
          "aids": [
            "\"changing flux IS a current\"",
            "\"charge, no-pole, faraday, ampere\" in that order",
            "\"same loop, two surfaces, one answer\" is the whole repair"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Sources and the Discovery of Electromagnetic Waves",
      "chip": "02 SHAKE IT",
      "kalam": "predicted on paper, proved with a spark",
      "blocks": [
        {
          "t": "p",
          "html": "By the end of Topic 01, Maxwell had <b>predicted</b> electromagnetic waves on paper. His equations demanded that a changing electric field and a changing magnetic field could regenerate each other and sail off through empty space at a speed <i>c</i>. But a prediction on paper is not a discovery, and two questions were left standing.<br><br><b>What actually produces an electromagnetic wave?</b> And <b>how do we prove they really exist?</b> This topic answers both, and the second answer took twenty-two years and a spark gap."
        },
        {
          "t": "p",
          "html": "Start with the first question. Charges make electric fields and currents make magnetic fields. So what does it take to launch a <b>wave</b>? Consider three situations, and notice that they differ in exactly one thing.<br><br><b>1. A charge sitting still.</b> It has a steady electric field around it, but nothing changes, so nothing propagates. A static field clinging to the charge, and no wave.<br><br><b>2. A charge moving at constant velocity.</b> This is a steady current, so now there is a steady magnetic field too. Still nothing is changing in the way a wave needs. No radiation.<br><br><b>3. A charge that is accelerating.</b> Now the fields it carries are constantly being reshaped. The disturbance cannot keep up with the charge, a kink in the field lines breaks away, and it travels outward on its own.<br><br>That detached, self-propagating ripple is an electromagnetic wave. The headline is beautifully simple: <b>only accelerating charges radiate electromagnetic waves</b>."
        },
        {
          "t": "think",
          "html": "drop a stone into a still pond and ripples spread out, because the water surface was suddenly <b>accelerated</b>. a stone resting on the surface makes no new ripples, and neither does one gliding along at constant speed just beneath it. a charge is the same. jiggle it and it sends electromagnetic ripples across space; leave it alone, or let it drift, and it sends nothing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHAT RADIATES AND WHAT DOES NOT",
          "chips": ["at rest", "constant velocity", "accelerating"],
          "captions": [
            "A charge at rest. Its electric field spreads outward in every direction, and it stays exactly where it is: the same field now, a second from now, a year from now. Nothing is changing, so there is nothing to hand on. This is the field of Electric Charges and Fields, and no part of it ever leaves.",
            "Now let the charge drift at constant velocity, the amber arrow. It carries its field along with it and adds a steady magnetic field, so this is a steady current. But steady is the killer word: there is still no acceleration, so still nothing changing in the way a wave needs, and still no radiation. This is the trap that costs the most marks in this topic, because moving feels like it ought to be enough.",
            "Now shake it. The charge oscillates up and down about one place, so it is accelerating at every instant except the two turning points. Its field can no longer keep up with it, and the mismatch closes off into rings that break away and travel outward on their own, at speed c. The gap on the right is where a wavefront is heading out past the edge of the picture. The frequency of those rings is the frequency of the shaking, exactly."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-2.2, 2.2], "axes": "none",
              "marks": [{ "x": 0, "y": 0, "glyph": "plus" }],
              "arrows": [
                { "from": [0.303, 0.175], "to": [1.645, 0.95], "tone": "soft" },
                { "from": [0, 0.35], "to": [0, 1.9], "tone": "soft" },
                { "from": [-0.303, 0.175], "to": [-1.645, 0.95], "tone": "soft" },
                { "from": [-0.303, -0.175], "to": [-1.645, -0.95], "tone": "soft" },
                { "from": [0, -0.35], "to": [0, -1.9], "tone": "soft" },
                { "from": [0.303, -0.175], "to": [1.645, -0.95], "tone": "soft" }
              ],
              "labels": [{ "x": -2.1, "y": -1.95, "text": "no wave" }]
            },
            {
              "x": [-3, 3], "y": [-2.2, 2.2], "axes": "none",
              "marks": [{ "x": 0, "y": 0, "glyph": "plus" }],
              "arrows": [
                { "from": [0.303, 0.175], "to": [1.645, 0.95], "tone": "soft" },
                { "from": [0, 0.35], "to": [0, 1.9], "tone": "soft" },
                { "from": [-0.303, 0.175], "to": [-1.645, 0.95], "tone": "soft" },
                { "from": [-0.303, -0.175], "to": [-1.645, -0.95], "tone": "soft" },
                { "from": [0, -0.35], "to": [0, -1.9], "tone": "soft" },
                { "from": [0.303, -0.175], "to": [1.645, -0.95], "tone": "soft" },
                { "from": [0.4, 0], "to": [2.0, 0], "tone": "amber", "label": "v", "at": "above" }
              ],
              "labels": [{ "x": -2.1, "y": -1.95, "text": "still no wave" }]
            },
            {
              "x": [-3, 3], "y": [-2.2, 2.2], "axes": "none",
              "marks": [{ "x": 0, "y": 0, "glyph": "plus" }],
              "arcs": [
                { "at": [0, 0], "r": 0.8, "from": 20, "to": 340, "tone": "ink" },
                { "at": [0, 0], "r": 1.4, "from": 20, "to": 340, "tone": "ink" },
                { "at": [0, 0], "r": 2.0, "from": 20, "to": 340, "tone": "ink" }
              ],
              "arrows": [
                { "from": [-0.02, -0.6], "to": [-0.02, 0.6], "head": "both", "tone": "amber" },
                { "from": [0.6, 0], "to": [2.4, 0], "tone": "ink", "label": "wave", "at": "above" }
              ],
              "labels": [{ "x": -1.9, "y": 1.85, "text": "shaken" }]
            }
          ]
        },
        {
          "t": "def",
          "term": "The radiation condition",
          "html": "An electromagnetic wave is radiated by an <b>accelerating charge</b>, and only by an accelerating charge. A charge at rest gives a static field; a charge at constant velocity gives a steady current and a steady magnetic field; neither radiates. The frequency of the radiated wave equals the frequency at which the charge oscillates, ν<sub>wave</sub> = ν<sub>charge</sub>, for an idealised single-frequency source."
        },
        {
          "t": "p",
          "html": "The cleanest way to keep a charge accelerating forever is to make it <b>oscillate</b>, back and forth in simple harmonic motion. A charge oscillating at frequency ν is accelerating the whole time, and it radiates a wave of exactly that frequency.<br><br>This is precisely how a radio antenna works. An alternating current drives electrons up and down the antenna rod millions of times a second, and the tower beams out radio waves at that frequency. The All India Radio transmitter near your town is doing nothing more exotic than shaking electrons at the right rate.<br><br>And the natural electrical shaker is the <b>LC circuit</b> from your Alternating Current chapter: charge sloshes between capacitor and inductor at a frequency set by <i>L</i> and <i>C</i>. Couple that oscillation to an antenna and you have a tunable source. Turn the dial, which changes <i>L</i> or <i>C</i>, and you retune the broadcast."
        },
        {
          "t": "formula",
          "kicker": "THE SOURCE SETS THE FREQUENCY",
          "tag": "LC OSCILLATOR",
          "main": "ν<sub>wave</sub> = ν<sub>charge</sub>,   ν = 1 / (2π√(LC))",
          "legend": [
            "ν is frequency, in hertz (Hz). The wave's frequency is the source's frequency, with no factor in between.",
            "<i>L</i> is the inductance of the oscillator, in henry (H).",
            "<i>C</i> is its capacitance, in farad (F).",
            "The product <i>LC</i> has dimensions of time squared, so its square root is a time and its reciprocal a frequency. That check kills the commonest slip, writing √(<i>L</i>/<i>C</i>), which is an ohm."
          ],
          "note": "Not on the CBSE syllabus but worth one line for insight: the power radiated by an accelerating charge goes as <i>P</i> = <i>q</i><sup>2</sup><i>a</i><sup>2</sup>/(6πε<sub>0</sub><i>c</i><sup>3</sup>), so radiated power is proportional to the acceleration squared. That single proportionality is why high-frequency oscillations, which mean large accelerations, radiate far more strongly than low-frequency ones."
        },
        {
          "t": "proc",
          "title": "How an accelerating charge launches a wave",
          "steps": [
            "<b>Acceleration means a time-varying current.</b> Acceleration changes velocity, and changing charge-motion is a changing current.",
            "<b>A time-varying current produces a time-varying magnetic field.</b> This is the Ampere-Maxwell law of Topic 01 doing its ordinary job.",
            "<b>That changing <i>B</i> produces a time-varying electric field.</b> This is Faraday's law: a changing magnetic flux drives an electric field around a loop.",
            "<b>The changing <i>E</i> in turn regenerates <i>B</i> a little further out</b>, by the displacement-current term. Now the cycle repeats, one step further from the source each time.",
            "<b>The disturbance detaches and propagates at <i>c</i>.</b> Neither field can exist alone in the wave; each is the other's cause. That is what makes it self-sustaining, and it is why no medium is needed."
          ]
        },
        {
          "t": "p",
          "html": "And here is the property that sets electromagnetic waves apart from sound or water waves: <b>they need no medium</b>. The fields sustain each other, so they cross the vacuum of space perfectly happily. That is why sunlight reaches Earth across 150 million km of nothing at all, and why the explosions in space films should be silent."
        },
        {
          "t": "p",
          "html": "So much for the theory. In 1887, twenty-two years after Maxwell's paper, <b>Heinrich Hertz</b> set out to physically demonstrate the predicted waves, and succeeded. His apparatus was crude and his logic was airtight: make a charge accelerate violently, put a detector some metres away with <b>no wire connecting them</b>, and see whether anything arrives."
        },
        {
          "t": "proc",
          "title": "Hertz's experiment, 1887",
          "steps": [
            "<b>Transmitter.</b> An induction coil drove a high voltage across a small air gap between two metal plates. Sparks jumped the gap, and during each spark the charges oscillated rapidly back and forth. That is an accelerating-charge source, exactly as in the chain above, radiating in the radio region at wavelengths of a few metres.",
            "<b>Receiver.</b> A separate loop of wire with its own tiny gap, placed some metres away, with <b>no wires connecting it to the transmitter</b>. The separation is the point: it is what proves energy crossed empty space rather than travelling along a conductor.",
            "<b>Observation.</b> Whenever the transmitter sparked, faint sparks appeared across the receiver's gap. Energy had travelled through space and driven oscillations in the distant loop. Electromagnetic waves can be both produced and detected.",
            "<b>Clinching the case.</b> Hertz reflected the waves off a metal sheet to set up standing waves, measured the node spacing to get λ, knew the frequency ν of his own oscillator, and computed <i>v</i> = νλ. It came out equal to <i>c</i>. He then showed the waves reflect, refract, interfere and polarise just like light. Maxwell was vindicated."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE · THE CHAIN, AND THE EXPERIMENT THAT PROVED IT",
          "chips": ["the causal chain", "Hertz, 1887"],
          "captions": [
            "Read it as a snake, left to right along the top and then back along the bottom. An accelerating charge is a changing current; a changing current makes a changing magnetic field, by the Ampere-Maxwell law; a changing magnetic field makes a changing electric field, by Faraday's law; and that changing electric field makes a magnetic field one step further out, by the displacement-current term of Topic 01. Each link is one of Maxwell's equations doing its ordinary job. The loop does not close back on the charge: it walks outward, and what walks away is the wave.",
            "Hertz's apparatus, with the one link that matters drawn across the gap. An induction coil drives a high voltage across a spark gap, and the sparking charges accelerate. Metres away, with nothing connecting the two, a small loop of wire with its own gap shows faint sparks whenever the transmitter fires. That dashed link is the whole experiment: energy crossing open space, no conductor, exactly as Maxwell's equations said it could."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "Charge accelerates", "tone": "amber" },
                  { "id": "b", "col": 1, "row": 0, "text": "Current varies" },
                  { "id": "c", "col": 1, "row": 1, "text": "B field varies" },
                  { "id": "d", "col": 0, "row": 1, "text": "E field varies" },
                  { "id": "e", "col": 0, "row": 2, "text": "Wave leaves at c", "tone": "amber" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "b", "to": "c", "label": "Ampere" },
                  { "from": "c", "to": "d", "label": "Faraday" },
                  { "from": "d", "to": "e" }
                ]
              }
            },
            {
              "flow": {
                "boxes": [
                  { "id": "p", "col": 0, "row": 0, "text": "Induction coil" },
                  { "id": "q", "col": 1, "row": 0, "text": "Spark gap", "tone": "amber" },
                  { "id": "r", "col": 1, "row": 1, "text": "Receiver loop", "tone": "amber" },
                  { "id": "s", "col": 0, "row": 1, "text": "Faint spark seen" }
                ],
                "links": [
                  { "from": "p", "to": "q", "label": "high voltage" },
                  { "from": "q", "to": "r", "label": "EM wave", "dash": true, "tone": "amber" },
                  { "from": "r", "to": "s" }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "The Indian and practical sequel followed fast. In Kolkata around 1895, <b>Jagadish Chandra Bose</b> generated electromagnetic waves of very short wavelength, in the millimetre to centimetre range, and used them to ring a bell and trigger devices remotely. That is pioneering microwave technology, done before anyone had a word for it. <b>Guglielmo Marconi</b> then turned the discovery into long-distance wireless telegraphy and eventually sent signals across the Atlantic, which is the birth of radio communication.<br><br>Four names, four verbs, and CBSE marks hang on getting them the right way round: <b>Maxwell predicted, Hertz demonstrated, Bose and Marconi applied.</b>"
        },
        {
          "t": "defgrid",
          "title": "Who did what",
          "tag": "AND IN WHAT ORDER",
          "rows": [
            { "k": "Maxwell, 1865", "v": "<b>Predicted.</b> Added the displacement current, closed his four equations, and showed on paper that they permit a self-sustaining wave travelling at 1/√(μ<sub>0</sub>ε<sub>0</sub>). Theory only: he never detected one." },
            { "k": "Hertz, 1887", "v": "<b>Demonstrated.</b> Produced radio waves with a spark-gap oscillator and detected them in a distant unconnected loop, then measured their speed as <i>c</i> and showed they reflect, refract and polarise." },
            { "k": "J. C. Bose, Kolkata, about 1895", "v": "<b>Applied, at short wavelength.</b> Generated millimetre and centimetre waves and used them to ring a bell and trigger devices remotely, pioneering microwave technology." },
            { "k": "Marconi", "v": "<b>Applied, at long range.</b> Turned the discovery into wireless telegraphy and eventually sent signals across the Atlantic. Radio communication starts here." }
          ]
        },
        {
          "t": "p",
          "html": "Two assumptions are buried in everything above, and a question can poke at either.<br><br>First, the radiated frequency equals the source frequency only for an <b>idealised single-frequency source</b>. Hertz's spark was nothing of the kind: a spark is a burst, and a burst contains a spread of frequencies, which is why his waves were broad rather than a clean tone. An oscillating LC circuit is much closer to the ideal, which is why it, and not a spark, is what a transmitter actually uses.<br><br>Second, everything in the formulas below is a <b>far-field</b> statement: the source is treated as small compared with the distance at which we observe. Close to an antenna the fields are messier and do not simply fall as 1/<i>r</i>. The inverse-square law for intensity is a statement about a sphere of radiating energy, and it needs a sphere large enough that the source looks like a point at its centre."
        },
        {
          "t": "def",
          "term": "Poynting vector",
          "html": "<i>S</i> = (1/μ<sub>0</sub>) <i>E</i> × <i>B</i>, the <b>rate of energy flow per unit area</b> carried by an electromagnetic field, in W m<sup>−2</sup>. Being a cross product it answers two questions at once: its magnitude says how much energy is crossing unit area per second, and its direction says which way. For a travelling wave it points along the direction of propagation, and its time average is what we call the <b>intensity</b>."
        },
        {
          "t": "formula",
          "kicker": "ENERGY FLOW: THE POYNTING VECTOR",
          "tag": "DIRECTION AND RATE",
          "main": "S = (1/μ<sub>0</sub>) E × B,   ⟨|S|⟩ = I",
          "legend": [
            "<i>S</i> is the Poynting vector, in W m<sup>−2</sup>: the rate of energy flow per unit area, pointing along the direction the wave travels.",
            "<i>E</i> is the electric field in V/m and <i>B</i> the magnetic field in T, at the same point and instant.",
            "μ<sub>0</sub> = 4π × 10<sup>−7</sup> T m/A.",
            "<i>I</i> is the intensity, in W m<sup>−2</sup>: the time-averaged magnitude of <i>S</i>. Topic 03 evaluates that average."
          ],
          "note": "The cross product carries the direction, which is why the same vector answers two questions at once: how much energy is flowing, and which way. Beyond this chapter it also explains something quietly startling, that the energy heating a resistor flows into it from the surrounding field rather than along the wire, since <i>E</i> along the wire and <i>B</i> around it give an <i>S</i> pointing radially inward."
        },
        {
          "t": "formula",
          "kicker": "A POINT SOURCE, AND A MEDIUM",
          "tag": "TWO WORKHORSES",
          "main": "I = P / (4πr<sup>2</sup>),   v = c/n,   n = √(μ<sub>r</sub>ε<sub>r</sub>) ≈ √ε<sub>r</sub>",
          "legend": [
            "<i>I</i> is the intensity in W m<sup>−2</sup> at distance <i>r</i> in metres from a source radiating <i>P</i> watts equally in all directions.",
            "The 4π<i>r</i><sup>2</sup> is the area of the sphere the energy has spread over, so intensity falls as 1/<i>r</i><sup>2</sup> and the FIELD falls as 1/<i>r</i>.",
            "<i>v</i> is the wave's speed in a medium, in m/s, and <i>c</i> = 3 × 10<sup>8</sup> m/s in vacuum.",
            "<i>n</i> is the refractive index, a pure number, and μ<sub>r</sub> and ε<sub>r</sub> are the relative permeability and permittivity. For non-magnetic materials μ<sub>r</sub> ≈ 1, so <i>n</i> ≈ √ε<sub>r</sub>."
          ],
          "note": "Two different powers of <i>r</i>, and the marks turn on which one goes where. Intensity is energy per unit area and areas grow as <i>r</i><sup>2</sup>; the field is what intensity is the square of, so it falls only as 1/<i>r</i>. Double the distance and the intensity quarters while the field halves."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An antenna is driven by an LC circuit with inductance <i>L</i> = 0.50 μH and capacitance <i>C</i> = 2.0 pF. Find the frequency of the electromagnetic waves it radiates, and name the band.",
          "steps": [
            "<i>LC</i> = (0.50 × 10<sup>−6</sup>)(2.0 × 10<sup>−12</sup>) = 1.0 × 10<sup>−18</sup> s<sup>2</sup>.",
            "√(<i>LC</i>) = 1.0 × 10<sup>−9</sup> s. Notice the units: seconds, as they must be.",
            "ν = 1/(2π√(<i>LC</i>)) = 1/(2π × 1.0 × 10<sup>−9</sup>) = 1/(6.28 × 10<sup>−9</sup>).",
            "The radiated frequency equals the circuit's own oscillation frequency, so this is also the frequency of the wave."
          ],
          "ans": "ν ≈ 1.6 × 10<sup>8</sup> Hz, that is about 160 MHz, which lies in the <b>radio (VHF) band</b> used for FM and TV broadcasting"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Which of the following produces electromagnetic waves: (i) a charge at rest, (ii) a charge moving with constant velocity, (iii) a charge oscillating at 9 GHz? For the one that does, name the band.",
          "steps": [
            "<b>The trap.</b> Students read moving and answer yes. Moving is not the test. <b>Accelerating</b> is.",
            "(i) At rest: a static field, nothing changing. <b>No wave.</b>",
            "(ii) Constant velocity: a steady current and a steady magnetic field, but no acceleration. <b>No wave.</b>",
            "(iii) Oscillating: accelerating at every instant, so it radiates, at ν = 9 GHz = 9 × 10<sup>9</sup> Hz."
          ],
          "ans": "Only the oscillating charge radiates, and 9 × 10<sup>9</sup> Hz puts it in the <b>microwave</b> band"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A small transmitter radiates <i>P</i> = 100 W equally in all directions. Find (a) the intensity and (b) the rms electric field at a distance <i>r</i> = 50 m.",
          "steps": [
            "<b>(a)</b> The energy spreads over a sphere of radius <i>r</i>: <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) = 100/(4π × 2500) = 100/(3.14 × 10<sup>4</sup>).",
            "<i>I</i> ≈ 3.2 × 10<sup>−3</sup> W m<sup>−2</sup>.",
            "<b>(b)</b> Link intensity to field with <i>I</i> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup>, which Topic 03 derives, so <i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)).",
            "ε<sub>0</sub><i>c</i> = (8.85 × 10<sup>−12</sup>)(3 × 10<sup>8</sup>) = 2.655 × 10<sup>−3</sup>, so <i>E</i><sub>rms</sub> = √(3.2 × 10<sup>−3</sup>/2.655 × 10<sup>−3</sup>) = √1.20."
          ],
          "ans": "(a) <i>I</i> ≈ 3.2 × 10<sup>−3</sup> W m<sup>−2</sup>  (b) <i>E</i><sub>rms</sub> ≈ 1.1 V m<sup>−1</sup>. A 100 W transmitter gives about a volt per metre at 50 m, and beyond that the field falls as 1/<i>r</i> while the intensity falls as 1/<i>r</i><sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "An isotropic source radiates <i>P</i> = 1.0 kW. A perfectly absorbing disc of area <i>A</i> = 1.0 cm<sup>2</sup> is held facing the source at <i>r</i> = 10 m. Find (a) the intensity at the disc and (b) the radiation force on it.",
          "steps": [
            "<b>(a)</b> <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) = 1000/(4π × 100) = 1000/1257 ≈ 0.80 W m<sup>−2</sup>.",
            "<b>(b)</b> For full absorption the radiation pressure is <i>I</i>/<i>c</i>, so the force is <i>F</i> = <i>IA</i>/<i>c</i>.",
            "<i>A</i> = 1.0 cm<sup>2</sup> = 1.0 × 10<sup>−4</sup> m<sup>2</sup>, so <i>F</i> = (0.80)(1.0 × 10<sup>−4</sup>)/(3 × 10<sup>8</sup>).",
            "If the disc were perfectly <b>reflecting</b> instead, the momentum transfer doubles and so does the force, to about 5.3 × 10<sup>−13</sup> N."
          ],
          "ans": "(a) <i>I</i> ≈ 0.80 W m<sup>−2</sup>  (b) <i>F</i> ≈ 2.7 × 10<sup>−13</sup> N. The whole chain, source power to inverse-square intensity to momentum, is one ladder and is worth walking in that order every time"
        },
        {
          "t": "mcq",
          "q": "Electromagnetic waves are produced by:",
          "opts": [
            { "label": "a stationary charge", "nudge": "A stationary charge has a static field around it and nothing changing anywhere, so there is nothing to detach and propagate." },
            { "label": "a charge moving with uniform velocity", "nudge": "The single commonest trap in this topic. Uniform velocity is a steady current and a steady magnetic field: no acceleration, no radiation." },
            { "label": "an accelerating charge" },
            { "label": "any charge, whether moving or not", "nudge": "An overgeneralisation that swallows both wrong options above. Two of the three cases genuinely radiate nothing." }
          ],
          "correct": 2,
          "solution": "Only acceleration creates the time-varying fields that can detach from the source and propagate. Rest gives a static field, constant velocity gives a steady current, and neither one is changing in the way the Ampere-Maxwell and Faraday pair needs in order to hand energy back and forth."
        },
        {
          "t": "mcq",
          "q": "Hertz's experiment is historically important because it:",
          "opts": [
            { "label": "measured the charge on the electron", "nudge": "That is Millikan's oil-drop experiment, and a different chapter entirely." },
            { "label": "experimentally produced and detected electromagnetic waves" },
            { "label": "discovered X-rays", "nudge": "That is Roentgen. X-rays are one band of the spectrum; Hertz worked in the radio region, at wavelengths of a few metres." },
            { "label": "first proposed the displacement current", "nudge": "That is Maxwell's theoretical contribution, twenty-two years earlier. Hertz tested the prediction; he did not make it." }
          ],
          "correct": 1,
          "solution": "Hertz generated electromagnetic waves with a spark-gap oscillator and detected them in a distant loop that had no wire connecting it, then measured their speed as <i>c</i>. That is what turned Maxwell's equations from a beautiful piece of mathematics into a fact about the world."
        },
        {
          "t": "mcq",
          "q": "A charge oscillates with frequency <i>f</i>. The frequency of the electromagnetic wave it radiates is:",
          "opts": [
            { "label": "f/2", "nudge": "An invented factor. Nothing in the radiation mechanism halves anything; the field simply follows the charge." },
            { "label": "2f", "nudge": "Also invented, and it may be leaking in from the energy of an oscillator, which does go at twice the frequency. The FIELD does not." },
            { "label": "f" },
            { "label": "independent of f", "nudge": "This contradicts the direct link between source and wave, which is the one quantitative fact this topic asserts." }
          ],
          "correct": 2,
          "solution": "The wave frequency equals the source's oscillation frequency, ν<sub>wave</sub> = ν<sub>charge</sub>. It is why tuning an LC circuit tunes a broadcast, and why an antenna driven at 100 MHz radiates at 100 MHz and nothing else."
        },
        {
          "t": "mcq",
          "q": "Which statement about electromagnetic waves is correct?",
          "opts": [
            { "label": "They require a material medium to travel", "nudge": "This confuses them with sound and other mechanical waves. The fields sustain each other, so no medium is needed, and sunlight crossing space proves it daily." },
            { "label": "They travel through vacuum at speed c" },
            { "label": "They are longitudinal", "nudge": "They are transverse, with both fields perpendicular to the direction of travel. That is why they can be polarised, which longitudinal waves never can." },
            { "label": "They are produced by charges moving at constant velocity", "nudge": "Radiation needs acceleration. Constant velocity is a steady current and radiates nothing at all." }
          ],
          "correct": 1,
          "solution": "Electromagnetic waves are self-sustaining: each field regenerates the other, so nothing material has to be there for them to travel through. In vacuum every one of them, radio to gamma, travels at <i>c</i> = 3 × 10<sup>8</sup> m/s, which is how sunlight reaches us across 150 million km of empty space."
        },
        {
          "t": "practice",
          "items": [
            { "q": "<b>[CBSE]</b> What type of charge motion is necessary to radiate electromagnetic waves, and what decides the frequency of the radiated wave? State the roles of Maxwell and Hertz in one line each.", "a": "An <b>accelerating</b> charge, most simply an oscillating one; a charge at rest or moving at constant velocity radiates nothing. The frequency of the wave equals the <b>frequency of the source's oscillation</b>. Maxwell <b>predicted</b> electromagnetic waves theoretically in 1865; Hertz <b>demonstrated</b> them experimentally in 1887." },
            { "q": "<b>[NEET]</b> The electrons in a transmitting antenna oscillate at 6.0 × 10<sup>8</sup> Hz. Find the wavelength of the radiated wave and name the band.", "a": "λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(6.0 × 10<sup>8</sup>) = <b>0.50 m</b>. At 600 MHz this is the <b>radio band</b>, in its UHF stretch, which is where television broadcasting lives." },
            { "q": "<b>[JEE Main]</b> An LC circuit has <i>L</i> = 8.0 μH and <i>C</i> = 2.0 pF. Find the frequency of the electromagnetic waves it can radiate.", "a": "<i>LC</i> = (8.0 × 10<sup>−6</sup>)(2.0 × 10<sup>−12</sup>) = 1.6 × 10<sup>−17</sup> s<sup>2</sup>, so √(<i>LC</i>) = 4.0 × 10<sup>−9</sup> s. Then ν = 1/(2π × 4.0 × 10<sup>−9</sup>) ≈ <b>4.0 × 10<sup>7</sup> Hz = 40 MHz</b>, in the radio band." },
            { "q": "<b>[JEE Main]</b> A point source radiates 60 W isotropically. Find the intensity at a distance of 30 m.", "a": "<i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) = 60/(4π × 900) = 60/11310 ≈ <b>5.3 × 10<sup>−3</sup> W m<sup>−2</sup></b>" },
            { "q": "<b>[JEE Advanced]</b> An isotropic source radiates steadily. Find the ratio of the rms electric fields at distances 10 m and 40 m from it, and the ratio of the intensities at those points.", "a": "The field falls as 1/<i>r</i>, so <i>E</i>(10) : <i>E</i>(40) = 40 : 10 = <b>4 : 1</b>. The intensity falls as 1/<i>r</i><sup>2</sup>, so <i>I</i>(10) : <i>I</i>(40) = 40<sup>2</sup> : 10<sup>2</sup> = <b>16 : 1</b>. Note the second ratio is the square of the first, which is the check." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Thinking any moving charge radiates.</b> Only accelerating charges do. A charge at constant velocity is a steady current, and a steady current radiates nothing, however fast it moves.",
            "<b>Swapping Maxwell and Hertz.</b> Maxwell <b>predicted</b> electromagnetic waves theoretically; Hertz <b>demonstrated</b> them experimentally, twenty-two years later. CBSE marks hang on stating those two verbs the right way round.",
            "<b>Thinking electromagnetic waves need a medium.</b> They do not. Each field regenerates the other, so they cross vacuum. Do not carry across the intuition from sound, which genuinely cannot.",
            "<b>Applying the wrong power of <i>r</i>.</b> For a point source the intensity falls as 1/<i>r</i><sup>2</sup> and the field only as 1/<i>r</i>. Students routinely square the wrong one, and the giveaway is that the answer moves by a factor of <i>r</i> in the wrong direction."
          ]
        },
        {
          "t": "protip",
          "html": "every isotropic-source question is one ladder, and you should walk it in the same order every time: <b><i>P</i> gives <i>I</i> = <i>P</i>/4π<i>r</i><sup>2</sup>, which gives <i>E</i><sub>rms</sub> = √(<i>I</i>/ε<sub>0</sub><i>c</i>), which gives pressure = <i>I</i>/<i>c</i></b>, doubled to 2<i>I</i>/<i>c</i> if the surface reflects. write the rungs down before you touch a number and you will never be caught wondering which formula comes next. and if a question ever asks where the energy in a circuit actually flows, the Poynting vector answers it: <i>E</i> along a wire crossed with <i>B</i> around it points radially <b>inward</b>, so a resistor is heated by energy arriving from the surrounding field, not by energy travelling down the copper."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "only ACCELERATING charges radiate", "note": "at rest or at constant velocity, nothing leaves" },
            { "f": "ν<sub>wave</sub> = ν<sub>charge</sub>", "note": "the source sets the frequency, with no factor in between" },
            { "f": "LC source: ν = 1/(2π√(<i>LC</i>))", "note": "L in henry, C in farad; LC has dimensions of time squared" },
            { "f": "no medium needed", "note": "the fields sustain each other, so they cross vacuum at c" },
            { "f": "<i>S</i> = (1/μ<sub>0</sub>) <i>E</i> × <i>B</i>", "note": "the Poynting vector: rate of energy flow, and its direction" },
            { "f": "<i>I</i> = <i>P</i>/4π<i>r</i><sup>2</sup>, field ∝ 1/<i>r</i>", "note": "intensity as the inverse square, field as the inverse first power" },
            { "f": "in a medium: <i>v</i> = <i>c</i>/<i>n</i>, <i>n</i> = √(μ<sub>r</sub>ε<sub>r</sub>) ≈ √ε<sub>r</sub>", "note": "frequency is unchanged; the wavelength shrinks instead" },
            { "f": "Maxwell 1865, Hertz 1887, Bose and Marconi after", "note": "predicted, demonstrated, applied" }
          ],
          "aids": [
            "\"shake a charge, make a wave\"",
            "\"predicted, proved, applied = maxwell, hertz, bose and marconi\"",
            "\"double the distance, quarter the intensity, half the field\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Nature and Properties of Electromagnetic Waves",
      "chip": "03 THE WAVE",
      "kalam": "two fields handing the baton, forever, at c",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 left us on a cliff edge. A changing electric field creates a magnetic field, by the Ampere-Maxwell law. A changing magnetic field creates an electric field, by Faraday's law. Put those two facts side by side and something extraordinary happens: the fields can keep <b>handing energy back and forth to each other</b> and march off through empty space with no wire, no charge and no medium to carry them.<br><br>Think of it as a relay between two runners who never stop. The electric field changes and hands the baton to the magnetic field; the magnetic field changes and hands it straight back to a new electric field a little further along. Neither can exist alone in the wave. Kill one and the other collapses."
        },
        {
          "t": "p",
          "html": "The hand-off is so precisely tuned that the disturbance travels at a fixed, enormous speed, set entirely by two constants of empty space and by nothing else at all.<br><br>This was Maxwell's jaw-dropping moment. He computed that number from purely electric and magnetic measurements, things done in a laboratory with capacitors and coils and no light involved anywhere, and found it matched the measured speed of light. Not approximately. To the accuracy of the day. There was only one honest conclusion available: <b>light is an electromagnetic wave</b>."
        },
        {
          "t": "formula",
          "kicker": "THE SPEED OF LIGHT, FROM TWO CONSTANTS",
          "tag": "THE CROWN RESULT",
          "main": "c = 1 / √(μ<sub>0</sub>ε<sub>0</sub>) ≈ 3 × 10<sup>8</sup> m/s",
          "legend": [
            "<i>c</i> is the speed of an electromagnetic wave in vacuum, in m/s.",
            "μ<sub>0</sub> = 4π × 10<sup>−7</sup> T m/A is the permeability of free space, measured with currents and coils.",
            "ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup> is the permittivity of free space, measured with charges and capacitors.",
            "In a medium the same argument gives <i>v</i> = 1/√(με) = <i>c</i>/<i>n</i>, with μ and ε the medium's own permeability and permittivity."
          ],
          "note": "Run the arithmetic yourself once, because being told it works is not the same as watching it work. μ<sub>0</sub>ε<sub>0</sub> = (1.2566 × 10<sup>−6</sup>)(8.85 × 10<sup>−12</sup>) = 1.112 × 10<sup>−17</sup>; its square root is 3.335 × 10<sup>−9</sup>; the reciprocal is 2.999 × 10<sup>8</sup> m/s. The measured speed of light is 2.998 × 10<sup>8</sup> m/s. Four significant figures of agreement, out of two constants that have nothing to do with light."
        },
        {
          "t": "p",
          "html": "Now picture the geometry, because three separate claims are being made about it and students routinely draw two of them wrong.<br><br>In a wave travelling along the <i>x</i>-axis, the electric field oscillates along <i>y</i> and the magnetic field oscillates along <i>z</i>. So <b>the two fields are perpendicular to each other, and both are perpendicular to the direction of travel</b>. That makes electromagnetic waves <b>transverse</b>, exactly as the Waves chapter defined the word, and it is why they can be polarised, which no longitudinal wave can ever be.<br><br>Second, the two fields <b>rise and fall together</b>. They hit their peaks at the same instant and their zeros at the same instant. They are <b>in phase</b>, not a quarter of a cycle apart. This is the single most commonly drawn-wrong fact in the chapter.<br><br>Third, their magnitudes are locked together at every instant by <i>E</i> = <i>cB</i>, so <i>B</i> is numerically tiny, because <i>c</i> is huge. But do not be fooled by the small number: the wave stores <b>exactly equal energy</b> in its electric and magnetic parts, and Example 2 below shows why the two facts are consistent rather than contradictory."
        },
        {
          "t": "think",
          "html": "the direction of travel is always given by the cross product <b><i>E</i> × <i>B</i></b>. point your right hand's fingers along <i>E</i>, curl them towards <i>B</i>, and your thumb points where the wave is going. so <i>E</i>, <i>B</i> and the direction of propagation form a right-handed set, exactly like the <i>x</i>, <i>y</i> and <i>z</i> axes. that one gesture answers every direction question this topic can ask, and it is faster than any rule you could memorise."
        },
        {
          "t": "diagram",
          "kind": "axes3d",
          "kicker": "FIGURE 8.2a · THE THREE DIRECTIONS, IN THREE DIMENSIONS",
          "chips": ["E and B", "E cross B"],
          "captions": [
            "The two fields at one point, at one instant, drawn on isometric axes rather than flat because mutual perpendicularity is a genuinely three-dimensional claim and a flat sketch of it misleads. E points along y and B points along z. They are at right angles to each other, and neither one has any component along x. Read the coordinates off the axes: this is not an artist's impression, the foreshortening is equal on all three axes.",
            "Now add the third arrow. E cross B points along x, straight down the axis that neither field touches, and that is the direction the wave travels. Curl your right hand from E towards B and your thumb lies along it. This is also the fastest way to answer any direction question in an exam: given two of the three, the right hand gives you the third in about two seconds, and there is no formula to misremember."
          ],
          "frames": [
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.8, 0], "label": "E" },
                  { "to": [0, 0, 1.8], "label": "B" }
                ]
              }
            },
            {
              "axes3d": {
                "vectors": [
                  { "to": [0, 1.8, 0], "label": "E", "soft": true },
                  { "to": [0, 0, 1.8], "label": "B", "soft": true },
                  { "to": [2.4, 0, 0], "label": "E × B" }
                ]
              }
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 8.2b · IN PHASE, AND THE PICTURE THAT IS NOT",
          "chips": ["in phase", "the 90 degree trap"],
          "captions": [
            "A snapshot of the wave: a photograph taken at one instant, with distance along the direction of travel running to the right. This is the snapshot reading of the Waves chapter, not the history reading, and for an electromagnetic wave both happen to give the same answer, which is exactly why it is worth saying which one is drawn. E is the taller curve and B the shorter one, and they peak together, cross zero together and reverse together. B is drawn at half the height of E purely so you can see both; in reality the ratio is E over B equals c, so B would be about three hundred million times shorter and invisible on any page.",
            "The picture students draw instead, and it is wrong. Here B has been shifted a quarter of a cycle, so B peaks where E is zero. That idea leaks in from LC circuits, where the energy really does slosh between the capacitor and the inductor a quarter cycle apart, and from standing waves. A TRAVELLING electromagnetic wave is not like that: neither field is storing while the other releases, because each one is the other's cause and they are created together. If your sketch shows a crest of B above a zero of E, you have drawn a different physical situation."
          ],
          "frames": [
            {
              "x": [0, 12.6], "y": [-1.4, 1.4],
              "curves": [
                { "c": "sin", "a": 1.1, "b": 1 },
                { "c": "sin", "a": 0.55, "b": 1 }
              ],
              "segments": [{ "from": [1.571, 0], "to": [1.571, 1.1], "dash": true, "soft": true }],
              "labels": [
                { "x": 1.571, "y": 1.3, "text": "E" },
                { "x": 1.571, "y": 0.78, "text": "B" },
                { "x": 5.6, "y": 1.25, "text": "peaks and zeros together" }
              ]
            },
            {
              "x": [0, 12.6], "y": [-1.4, 1.4],
              "curves": [
                { "c": "sin", "a": 1.1, "b": 1 },
                { "c": "cos", "a": 0.55, "b": 1, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 1.571, "y": 1.3, "text": "E" },
                { "x": 0.2, "y": 0.78, "text": "B" },
                { "x": 6.0, "y": 1.25, "text": "wrong: a quarter cycle out" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Plane electromagnetic wave in vacuum",
          "html": "A wave in which <i>E</i> and <i>B</i> are <b>mutually perpendicular</b>, <b>both perpendicular to the direction of propagation</b>, and <b>in phase</b>, with the direction of travel along <i>E</i> × <i>B</i> and the magnitudes locked by <i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub>. Hold all four clauses together: they are one description, not four facts, and a question that gives you any two of the three directions determines the third. The simple relations here are for a plane wave <b>in vacuum</b>; in a medium the speed drops to <i>v</i> = 1/√(με) and the field relation becomes <i>E</i> = <i>vB</i>, not <i>cB</i>."
        },
        {
          "t": "formula",
          "kicker": "THE PLANE WAVE, AND ITS TWO AMPLITUDES",
          "tag": "LOCKED TOGETHER",
          "main": "E = E<sub>0</sub> sin(kx − ωt),  B = B<sub>0</sub> sin(kx − ωt),  E<sub>0</sub> = cB<sub>0</sub>",
          "legend": [
            "<i>E</i><sub>0</sub> is the electric field amplitude, in V/m, and <i>B</i><sub>0</sub> the magnetic field amplitude, in tesla (T).",
            "<i>k</i> = 2π/λ is the wave number in rad/m and ω = 2π<i>f</i> the angular frequency in rad/s, both as defined in the Waves chapter.",
            "ω = <i>ck</i>, which is that chapter's <i>v</i> = ω/<i>k</i> with <i>v</i> set to <i>c</i>, and it is the same statement as <i>c</i> = <i>f</i>λ.",
            "The ratio holds at every instant, not only at the peaks: <i>E</i>/<i>B</i> = <i>c</i> throughout the cycle, because the two sines are the same sine."
          ],
          "note": "Both fields carry the SAME argument (<i>kx</i> − ω<i>t</i>), and that is the whole content of in phase. The Waves chapter writes a wave travelling in +<i>x</i> as sin(ω<i>t</i> − <i>kx</i>); these two forms differ only by an overall phase of π and describe the same wave travelling the same way, since direction is set by the RELATIVE sign of <i>kx</i> and ω<i>t</i> and never by which is written first."
        },
        {
          "t": "deriv",
          "kicker": "SPEED OF LIGHT AND THE E-B RELATION",
          "steps": [
            { "eq": "no component of E or B along the direction of travel", "why": "Why transverse. Apply Gauss's law to a small box straddling the wave in a source-free region. The box encloses no charge, so the net electric flux through it is zero, and the magnetic flux through any closed surface is zero always. A field component ALONG the propagation direction would put unbalanced flux through the two end faces. The only way both Gauss laws hold is if neither field has such a component, so the wave is transverse." },
            { "eq": "∂E/∂x = −∂B/∂t", "why": "Faraday's law links E to B. Take a thin rectangular loop in the plane containing E and the propagation axis. As the wave passes, the magnetic flux through that loop changes, and Faraday's law relates the SPATIAL variation of E to the TIME variation of B. Physically: a field that varies in space along the direction of travel cannot be static." },
            { "eq": "∂B/∂x = −μ<sub>0</sub>ε<sub>0</sub> ∂E/∂t", "why": "The Ampere-Maxwell law links B back to E. Now take a loop in the plane containing B and the propagation axis. There are no charges here, so the conduction current is zero and ONLY the displacement-current term survives. This is Topic 01 doing real work: without Maxwell's repair this equation reads dB/dx = 0 and there is no wave at all." },
            { "eq": "∂<sup>2</sup>E/∂x<sup>2</sup> = μ<sub>0</sub>ε<sub>0</sub> ∂<sup>2</sup>E/∂t<sup>2</sup>", "why": "Combine the two. Differentiate the Faraday relation with respect to x, substitute the Ampere-Maxwell relation for the mixed derivative, and the two first-order equations fuse into one second-order equation. That is the standard wave equation, and its appearance is the proof that a wave is possible: the equation was not assumed, it was produced." },
            { "eq": "compare with ∂<sup>2</sup>E/∂x<sup>2</sup> = (1/v<sup>2</sup>) ∂<sup>2</sup>E/∂t<sup>2</sup>  ⟹  c = 1/√(μ<sub>0</sub>ε<sub>0</sub>)", "why": "Read off the speed. Matching the two forms gives v squared equal to 1 over mu-nought epsilon-nought. Now the arithmetic: mu-nought epsilon-nought is 1.112 times ten to the minus seventeen, its square root is 3.335 times ten to the minus nine, and the reciprocal is 2.999 times ten to the eight metres per second. The measured speed of light is 2.998 times ten to the eight. That agreement, from two constants measured with coils and capacitors, is the reason anyone believed Maxwell, and it unified optics with electromagnetism in one line." },
            { "eq": "E<sub>0</sub>k = B<sub>0</sub>ω  ⟹  E<sub>0</sub> = cB<sub>0</sub>", "why": "And the amplitude relation. Substitute the sinusoidal solutions E = E0 sin(kx − omega t) and B = B0 sin(kx − omega t) into the Faraday relation of step 2. The sines cancel, leaving E0 k = B0 omega, and since omega over k is c, E0 = c B0. Note what the cancellation required: the two sines had to be identical, which is to say IN PHASE. Had they been a quarter cycle apart, a sine would have met a cosine and no constant ratio could exist. The phase relation is not an extra fact bolted on, it is forced by the same equation that gives the amplitude ratio." }
          ]
        },
        {
          "t": "p",
          "html": "Two more properties fall out of this, and both are examined every year.<br><br>First, <b>energy</b>. The wave carries energy in both fields, and it carries the <b>same amount in each</b>. That looks impossible when you notice that <i>B</i> is around 10<sup>−6</sup> T against an <i>E</i> of hundreds of volts per metre, but the smallness of <i>B</i> is cancelled exactly by the 1/2μ<sub>0</sub> that multiplies its square. Example 2 does the two lines.<br><br>Second, <b>momentum</b>. Because the wave carries energy it also carries momentum, so light can genuinely <b>push on things it hits</b>. That push is radiation pressure, it is minute, and it never switches off, which is the principle behind solar sails."
        },
        {
          "t": "formula",
          "kicker": "ENERGY DENSITY, SHARED EQUALLY",
          "tag": "ALWAYS ONE TO ONE",
          "main": "u<sub>E</sub> = (1/2)ε<sub>0</sub>E<sup>2</sup>,  u<sub>B</sub> = B<sup>2</sup>/(2μ<sub>0</sub>),  u<sub>E</sub> = u<sub>B</sub>",
          "legend": [
            "<i>u</i><sub>E</sub> and <i>u</i><sub>B</sub> are the instantaneous energy densities of the two fields, in J m<sup>−3</sup>.",
            "<i>E</i> is the instantaneous electric field in V/m and <i>B</i> the instantaneous magnetic field in T.",
            "Total: <i>u</i> = <i>u</i><sub>E</sub> + <i>u</i><sub>B</sub> = ε<sub>0</sub><i>E</i><sup>2</sup>, and averaged over a cycle ⟨<i>u</i>⟩ = (1/2)ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> = ε<sub>0</sub><i>E</i><sub>rms</sub><sup>2</sup>.",
            "The equality is exact, not approximate, and it holds at every instant, not only on average."
          ],
          "note": "Here is why it is exact. Put <i>B</i> = <i>E</i>/<i>c</i> into <i>u</i><sub>B</sub> and then use <i>c</i><sup>2</sup> = 1/μ<sub>0</sub>ε<sub>0</sub>: <i>u</i><sub>B</sub> = <i>E</i><sup>2</sup>/(2μ<sub>0</sub><i>c</i><sup>2</sup>) = <i>E</i><sup>2</sup>μ<sub>0</sub>ε<sub>0</sub>/(2μ<sub>0</sub>) = (1/2)ε<sub>0</sub><i>E</i><sup>2</sup> = <i>u</i><sub>E</sub>. The factor of <i>c</i><sup>2</sup> that makes <i>B</i> tiny is cancelled by the 1/μ<sub>0</sub> that multiplies it, and μ<sub>0</sub>ε<sub>0</sub><i>c</i><sup>2</sup> = 1 does the cancelling. So <i>u</i><sub>E</sub> = <i>u</i><sub>B</sub> is nothing but <i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> squared."
        },
        {
          "t": "formula",
          "kicker": "INTENSITY",
          "tag": "ONE FORMULA, WHOLE FAMILY",
          "main": "I = ⟨u⟩c = (1/2)ε<sub>0</sub>cE<sub>0</sub><sup>2</sup> = ε<sub>0</sub>cE<sub>rms</sub><sup>2</sup>",
          "legend": [
            "<i>I</i> is the intensity, the average power per unit area, in W m<sup>−2</sup>.",
            "⟨<i>u</i>⟩ is the cycle-averaged total energy density in J m<sup>−3</sup>, and multiplying by <i>c</i> in m/s turns an energy per volume into an energy per area per second.",
            "<i>E</i><sub>0</sub> is the amplitude of the electric field in V/m, and <i>E</i><sub>rms</sub> = <i>E</i><sub>0</sub>/√2 its root-mean-square value, also in V/m.",
            "ε<sub>0</sub><i>c</i> = (8.85 × 10<sup>−12</sup>)(3 × 10<sup>8</sup>) = 2.655 × 10<sup>−3</sup>, a number worth having ready."
          ],
          "note": "Anchor everything to this one line. From <i>I</i> you get <i>E</i><sub>0</sub>, from <i>E</i><sub>0</sub> you get <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i>, and from <i>I</i> you get the pressure. There is no need to memorise four separate formulas when they are one formula read in four directions."
        },
        {
          "t": "formula",
          "kicker": "MOMENTUM AND RADIATION PRESSURE",
          "tag": "THE FACTOR OF TWO",
          "main": "p = U/c,  P<sub>rad</sub> = I/c (absorbed)  to  2I/c (reflected)",
          "legend": [
            "<i>p</i> is the momentum delivered, in kg m s<sup>−1</sup>, by radiation carrying energy <i>U</i> in joules.",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s.",
            "<i>I</i> is the intensity at the surface, in W m<sup>−2</sup>, and <i>P</i><sub>rad</sub> the radiation pressure, in pascals (Pa).",
            "Force on a surface of area <i>A</i> in m<sup>2</sup> at normal incidence: <i>F</i> = <i>P</i><sub>rad</sub><i>A</i>."
          ],
          "note": "The factor of two is momentum REVERSAL, not momentum removal. An absorbed photon hands over its momentum <i>U</i>/<i>c</i> and stops. A reflected one arrives with +<i>U</i>/<i>c</i> and leaves with −<i>U</i>/<i>c</i>, a change of 2<i>U</i>/<i>c</i>, and the surface takes up all of it. Same reason a ball bouncing off a wall pushes twice as hard as one that sticks."
        },
        {
          "t": "def",
          "term": "Radiation pressure",
          "html": "The pressure a beam of electromagnetic radiation exerts on a surface it strikes at normal incidence: <i>I</i>/<i>c</i> if the surface <b>absorbs</b> the light, 2<i>I</i>/<i>c</i> if it <b>reflects</b> it. The two differ because the reflected case reverses the light's momentum instead of merely removing it, so the momentum CHANGE is twice as large. Note what this means for a mirror: it absorbs no energy at all and is still pushed twice as hard as a black surface that absorbs everything. Pressure here is about momentum, not about energy delivered."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY REFLECTION PUSHES TWICE AS HARD",
          "chips": ["a black surface", "a mirror"],
          "captions": [
            "A perfectly absorbing surface, hatched. Light arrives carrying momentum U over c per unit of energy, is swallowed, and nothing comes back. The surface gains exactly the momentum that arrived, so the pressure is I over c. Nothing subtle happens here, which is why it is the case to reason from.",
            "A perfect mirror, the same hatched surface. Now the light arrives with momentum U over c in one direction and leaves with U over c in the other, so its momentum has CHANGED by twice that amount, and by conservation the mirror takes up all of it. The pressure is 2I over c. Notice the argument is about a change of momentum and not about how much energy was delivered: the mirror absorbs no energy at all, and still gets pushed twice as hard as the black surface. This is the same arithmetic as a ball bouncing off a wall against a ball of putty sticking to it."
          ],
          "frames": [
            {
              "x": [0, 8], "y": [-2, 2], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[5.4, -1.5], [6.0, -1.5], [6.0, 1.5], [5.4, 1.5]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "arrows": [
                { "from": [0.8, 0.4], "to": [5.3, 0.4], "tone": "amber", "label": "light in", "at": "above" }
              ],
              "labels": [
                { "x": 2.5, "y": -0.9, "text": "pressure = I/c" },
                { "x": 6.9, "y": 0.4, "text": "no bounce" }
              ]
            },
            {
              "x": [0, 8], "y": [-2, 2], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[5.4, -1.5], [6.0, -1.5], [6.0, 1.5], [5.4, 1.5]], "close": true, "fill": "hatch", "tone": "ink" }
              ],
              "arrows": [
                { "from": [0.8, 0.8], "to": [5.3, 0.8], "tone": "amber", "label": "light in", "at": "above" },
                { "from": [5.3, -0.4], "to": [0.8, -0.4], "tone": "amber", "label": "light back", "at": "above" }
              ],
              "labels": [
                { "x": 2.5, "y": -1.5, "text": "pressure = 2I/c" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "The transverse nature has one consequence that is also its own best evidence: an electromagnetic wave can be <b>polarised</b>. The Waves chapter established the rule in general, that only a transverse wave can be polarised, because only a transverse wave has a choice of direction to make in the plane perpendicular to its travel. Sound, being longitudinal, has no such choice and can never be polarised.<br><br>So when Hertz showed that his waves could be polarised, he was not adding a decorative property to the list. He was demonstrating, without any equations, that <i>E</i> and <i>B</i> must lie across the direction of travel rather than along it. A single pair of polaroid sunglasses is the same experiment, run daily."
        },
        {
          "t": "p",
          "html": "Be careful about where these relations stop being true, because two of the three commonest errors in this topic are boundary errors rather than algebra.<br><br><b><i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) and <i>E</i> = <i>cB</i> are for a plane wave in vacuum.</b> In a medium the speed drops to <i>v</i> = 1/√(με) = <i>c</i>/<i>n</i> and the field relation becomes <i>E</i> = <i>vB</i>. Using <i>c</i> inside glass overestimates <i>E</i> by the refractive index.<br><br><b>In phase applies to a travelling wave.</b> It is not true of the energy oscillations in an LC circuit, where the two stores really are a quarter cycle apart, and it is not true of a standing wave, where the electric nodes sit at the magnetic antinodes. If a question sets up a reflection off a conductor, you are no longer in this topic's picture.<br><br><b>Radiation pressure is <i>I</i>/<i>c</i> for normal incidence.</b> Tilt the surface and the projected area brings in a cos θ, so the general form is (<i>I</i>/<i>c</i>) cos θ (1 + <i>R</i>) with θ from the normal and <i>R</i> the reflectance."
        },
        {
          "t": "defgrid",
          "title": "Units and dimensions",
          "tag": "M L T A",
          "rows": [
            { "k": "Energy density <i>u</i>", "v": "J m<sup>−3</sup>. Dimensions [M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]. The same as a pressure, which is not a coincidence: radiation pressure IS an energy density." },
            { "k": "Intensity <i>I</i>", "v": "W m<sup>−2</sup>. Dimensions [M<sup>1</sup> L<sup>0</sup> T<sup>−3</sup>]. Identical to the Poynting vector's, because intensity is its time average." },
            { "k": "Radiation pressure <i>P</i><sub>rad</sub>", "v": "pascal (Pa). Dimensions [M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]. Check the arithmetic direction with this: <i>I</i>/<i>c</i> gives Pa, and <i>Ic</i> gives [M L T<sup>−4</sup>], which is nothing." },
            { "k": "Field amplitudes <i>E</i><sub>0</sub>, <i>B</i><sub>0</sub>", "v": "V m<sup>−1</sup> and tesla (T). Their ratio is <i>c</i> in m/s, which is the fastest check in the chapter: if <i>E</i><sub>0</sub>/<i>B</i><sub>0</sub> is not about 3 × 10<sup>8</sup>, one of the two is wrong." },
            { "k": "μ<sub>0</sub>ε<sub>0</sub>", "v": "Dimensions [L<sup>−2</sup> T<sup>2</sup>], a reciprocal speed squared. Nothing else you can build from those two constants is a speed, which is why <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) is forced rather than fitted." }
          ]
        },
        {
          "t": "proc",
          "title": "Work any intensity problem",
          "steps": [
            "<b>Get to <i>I</i> first.</b> If the question gives a source power and a distance, <i>I</i> = <i>P</i>/4π<i>r</i><sup>2</sup>. If it gives a beam and a spot area, <i>I</i> = <i>P</i>/<i>A</i>. If it gives sunlight, <i>I</i> is quoted. Everything downstream needs <i>I</i>, so do not start anywhere else.",
            "<b>From <i>I</i> to the fields.</b> <i>I</i> = (1/2)ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup> gives the amplitude, or <i>I</i> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup> gives the rms value. Decide which the question asked for before you take the square root, because the two differ by √2.",
            "<b>From <i>E</i> to <i>B</i>.</b> Divide by <i>c</i>, and divide the UNROUNDED value: <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i>, <i>B</i><sub>rms</sub> = <i>E</i><sub>rms</sub>/<i>c</i>. Amplitude with amplitude, rms with rms, never mixed.",
            "<b>From <i>I</i> to the push.</b> Pressure is <i>I</i>/<i>c</i> for an absorber and 2<i>I</i>/<i>c</i> for a reflector; force is that pressure times the area facing the beam; and if the question then asks for an acceleration, divide by the mass. Round only here, at the end."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An electromagnetic wave in vacuum has a peak electric field <i>E</i><sub>0</sub> = 36 V m<sup>−1</sup> and frequency <i>f</i> = 25 MHz. Find (a) the peak magnetic field and (b) the wavelength.",
          "steps": [
            "<b>(a)</b> The amplitudes are locked by <i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub>, so <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i> = 36/(3 × 10<sup>8</sup>).",
            "<i>B</i><sub>0</sub> = 1.2 × 10<sup>−7</sup> T.",
            "<b>(b)</b> In vacuum <i>c</i> = <i>f</i>λ, quoted from the Waves chapter, so λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(25 × 10<sup>6</sup>).",
            "<b>Check.</b> <i>E</i><sub>0</sub>/<i>B</i><sub>0</sub> = 36/(1.2 × 10<sup>−7</sup>) = 3 × 10<sup>8</sup>, which is <i>c</i>. Run that check on every answer of this type."
          ],
          "ans": "(a) <i>B</i><sub>0</sub> = 1.2 × 10<sup>−7</sup> T  (b) λ = 12 m. Note how small <i>B</i><sub>0</sub> is, and that it nonetheless carries exactly as much energy as the electric part"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In a plane electromagnetic wave, what is the ratio of the energy density stored in the electric field to that in the magnetic field?",
          "steps": [
            "<b>The trap.</b> <i>B</i><sub>0</sub> is around 10<sup>−7</sup> T while <i>E</i><sub>0</sub> is tens of volts per metre, so students conclude the magnetic energy is negligible and pick a huge ratio, often <i>c</i><sup>2</sup>.",
            "Write both out: <i>u</i><sub>E</sub>/<i>u</i><sub>B</sub> = [(1/2)ε<sub>0</sub><i>E</i><sup>2</sup>] / [<i>B</i><sup>2</sup>/(2μ<sub>0</sub>)] = μ<sub>0</sub>ε<sub>0</sub><i>E</i><sup>2</sup>/<i>B</i><sup>2</sup>.",
            "Now substitute <i>B</i> = <i>E</i>/<i>c</i>: the ratio becomes μ<sub>0</sub>ε<sub>0</sub><i>c</i><sup>2</sup>.",
            "And μ<sub>0</sub>ε<sub>0</sub><i>c</i><sup>2</sup> = 1, from <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>). The small <i>B</i> is compensated exactly by the small factor 1/2μ<sub>0</sub>."
          ],
          "ans": "<i>u</i><sub>E</sub> : <i>u</i><sub>B</sub> = <b>1 : 1</b>, always and exactly. Mark it in two seconds and move on"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Sunlight strikes a solar panel with intensity <i>I</i> = 1.0 kW m<sup>−2</sup>. Treating it as a plane wave, find (a) <i>E</i><sub>rms</sub>, (b) <i>B</i><sub>rms</sub>, and (c) the radiation pressure if the panel fully absorbs the light.",
          "steps": [
            "<b>(a)</b> From <i>I</i> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup>: <i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)) = √(1000/2.655 × 10<sup>−3</sup>) = √(3.77 × 10<sup>5</sup>).",
            "<i>E</i><sub>rms</sub> ≈ 614 V m<sup>−1</sup>.",
            "<b>(b)</b> <i>B</i><sub>rms</sub> = <i>E</i><sub>rms</sub>/<i>c</i> = 614/(3 × 10<sup>8</sup>) ≈ 2.0 × 10<sup>−6</sup> T. Carry the unrounded 614, not a rounded 610.",
            "<b>(c)</b> Full absorption: <i>P</i><sub>rad</sub> = <i>I</i>/<i>c</i> = 1000/(3 × 10<sup>8</sup>) ≈ 3.3 × 10<sup>−6</sup> Pa."
          ],
          "ans": "(a) <i>E</i><sub>rms</sub> ≈ 614 V m<sup>−1</sup>  (b) <i>B</i><sub>rms</sub> ≈ 2.0 × 10<sup>−6</sup> T  (c) <i>P</i><sub>rad</sub> ≈ 3.3 × 10<sup>−6</sup> Pa, about three ten-billionths of an atmosphere, which is how gentle light's push really is"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A perfectly reflecting solar sail of area <i>A</i> = 50 m<sup>2</sup> and total mass <i>m</i> = 2.0 kg is deployed in space where the solar intensity is <i>I</i> = 1.36 kW m<sup>−2</sup>, facing the Sun head-on. Find (a) the radiation force on the sail and (b) its acceleration.",
          "steps": [
            "<b>(a)</b> Perfect reflection doubles the momentum transfer, so <i>P</i><sub>rad</sub> = 2<i>I</i>/<i>c</i> and <i>F</i> = 2<i>IA</i>/<i>c</i>.",
            "<i>F</i> = 2(1360)(50)/(3 × 10<sup>8</sup>) = (1.36 × 10<sup>5</sup>)/(3 × 10<sup>8</sup>).",
            "<i>F</i> ≈ 4.5 × 10<sup>−4</sup> N.",
            "<b>(b)</b> <i>a</i> = <i>F</i>/<i>m</i> = (4.5 × 10<sup>−4</sup>)/2.0 ≈ 2.3 × 10<sup>−4</sup> m s<sup>−2</sup>."
          ],
          "ans": "(a) <i>F</i> ≈ 4.5 × 10<sup>−4</sup> N  (b) <i>a</i> ≈ 2.3 × 10<sup>−4</sup> m s<sup>−2</sup>. Minuscule, but it never switches off: over a month of continuous thrust that is a speed gain of about 600 m/s, with no fuel at all"
        },
        {
          "t": "mcq",
          "q": "In a plane electromagnetic wave, the electric and magnetic fields are:",
          "opts": [
            { "label": "parallel and in phase", "nudge": "Wrong on the first count. If E and B were parallel, E × B would be zero and the wave would have no direction of travel at all." },
            { "label": "perpendicular and 90 degrees out of phase", "nudge": "The right geometry with the wrong phase. The 90 degree idea is borrowed from LC circuit energy exchange or from standing waves; it is not true of a travelling electromagnetic wave." },
            { "label": "perpendicular and in phase" },
            { "label": "parallel and 90 degrees out of phase", "nudge": "Both errors at once. Neither the geometry nor the phase survives the derivation." }
          ],
          "correct": 2,
          "solution": "<i>E</i> is perpendicular to <i>B</i>, both are perpendicular to the direction of travel, and they peak and vanish together. The phase part is not an extra assumption: substituting the two sinusoids into Faraday's law only yields a constant ratio <i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> if the two carry the identical argument, which is to say if they are in phase."
        },
        {
          "t": "mcq",
          "q": "An electromagnetic wave travels along the +<i>z</i>-axis with <i>E</i> along +<i>x</i>. The magnetic field oscillates along:",
          "opts": [
            { "label": "+z", "nudge": "That puts B along the direction of propagation, which is impossible for a transverse wave. Neither field has any component along the travel direction." },
            { "label": "+y" },
            { "label": "−x", "nudge": "Antiparallel to E, so E × B is zero and there is no propagation direction. It also violates E perpendicular to B." },
            { "label": "+x", "nudge": "Parallel to E, so again E × B is zero. Parallel fields cannot make a wave go anywhere." }
          ],
          "correct": 1,
          "solution": "Propagation is along <i>E</i> × <i>B</i>. With <i>E</i> along +<i>x</i> and travel along +<i>z</i>, we need î × <i>B</i>̂ = k̂, and î × ĵ = k̂, so <i>B</i> lies along +<i>y</i>. Right hand along <i>x</i>, curl towards <i>y</i>, thumb up the <i>z</i>-axis: two seconds, no formula."
        },
        {
          "t": "mcq",
          "q": "The speed of an electromagnetic wave in vacuum depends on:",
          "opts": [
            { "label": "its frequency", "nudge": "The classic trap. All electromagnetic waves, radio through gamma, travel at the same c in vacuum whatever their frequency. Speed only becomes frequency-dependent inside a dispersive medium." },
            { "label": "its amplitude", "nudge": "Amplitude sets how much energy the wave carries, through I = (1/2)ε₀cE₀², not how fast it carries it." },
            { "label": "the electric and magnetic properties of vacuum" },
            { "label": "the intensity of the source", "nudge": "Intensity is amplitude squared in disguise, so this is the previous trap restated. A brighter torch does not shine faster." }
          ],
          "correct": 2,
          "solution": "<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>), and those two constants are properties of empty space alone. Nothing about the source or the wave appears in the formula, which is precisely why the result was so startling: the speed is a property of the vacuum, not of the light."
        },
        {
          "t": "mcq",
          "q": "When a beam of light of intensity <i>I</i> falls normally on a perfectly reflecting surface, the radiation pressure is:",
          "opts": [
            { "label": "I/c", "nudge": "That is the perfect ABSORBER. This is the factor-of-two trap, and the fix is to ask what the momentum CHANGE is, not what arrived." },
            { "label": "2I/c" },
            { "label": "I/2c", "nudge": "Halved instead of doubled. Reflection can only increase the momentum transfer, never reduce it below the absorbing case." },
            { "label": "Ic", "nudge": "Dimensionally impossible: I/c is a pascal, so Ic is [M L T⁻⁴], which is not a pressure. Check the direction of the division before anything else." }
          ],
          "correct": 1,
          "solution": "Reflection reverses the photons' momentum, so the change is 2<i>U</i>/<i>c</i> per unit energy rather than <i>U</i>/<i>c</i>, and the surface takes up all of it. Read the surface description carefully: black, absorbing or blackened means <i>I</i>/<i>c</i>, and mirror, reflecting or shiny means 2<i>I</i>/<i>c</i>."
        },
        {
          "t": "practice",
          "items": [
            { "q": "<b>[CBSE]</b> The peak magnetic field of an electromagnetic wave in vacuum is <i>B</i><sub>0</sub> = 4.0 × 10<sup>−8</sup> T. Find the peak electric field, and state the direction relationship between <i>E</i>, <i>B</i> and the propagation direction.", "a": "<i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub> = (3 × 10<sup>8</sup>)(4.0 × 10<sup>−8</sup>) = <b>12 V m<sup>−1</sup></b>. <i>E</i> and <i>B</i> are mutually perpendicular and both perpendicular to the direction of travel, which lies along <i>E</i> × <i>B</i>." },
            { "q": "<b>[NEET]</b> An electromagnetic wave travels in a medium of refractive index <i>n</i> = 1.5. By what factor is its speed reduced compared to vacuum, and does its frequency change?", "a": "<i>v</i> = <i>c</i>/<i>n</i> = (3 × 10<sup>8</sup>)/1.5 = <b>2 × 10<sup>8</sup> m/s</b>, a reduction by the factor 1.5. The <b>frequency does not change</b>: it belongs to the source, as the Waves chapter established. Since <i>v</i> = <i>f</i>λ and <i>f</i> is fixed, the wavelength shrinks by the same factor 1.5." },
            { "q": "<b>[JEE Main]</b> A laser delivers an average intensity of 5.0 × 10<sup>3</sup> W m<sup>−2</sup>. Find <i>E</i><sub>0</sub> and <i>B</i><sub>0</sub> of the beam.", "a": "<i>E</i><sub>0</sub> = √(2<i>I</i>/(ε<sub>0</sub><i>c</i>)) = √((1.0 × 10<sup>4</sup>)/(2.655 × 10<sup>−3</sup>)) = √(3.767 × 10<sup>6</sup>) = 1941 V m<sup>−1</sup>, so <b><i>E</i><sub>0</sub> ≈ 1.9 × 10<sup>3</sup> V m<sup>−1</sup></b>. Now carry the UNROUNDED 1941 forward: <i>B</i><sub>0</sub> = 1941/(3 × 10<sup>8</sup>) = 6.47 × 10<sup>−6</sup>, so <b><i>B</i><sub>0</sub> ≈ 6.5 × 10<sup>−6</sup> T</b>. Rounding <i>E</i><sub>0</sub> to 1900 first gives 6.3 × 10<sup>−6</sup> T, which is three per cent out and wrong at two figures." },
            { "q": "<b>[JEE Main]</b> The electric field of an electromagnetic wave is <i>E</i> = 60 sin[2π(3 × 10<sup>14</sup><i>t</i> − <i>x</i>/λ)] V m<sup>−1</sup> in SI units. Find the wavelength and the peak magnetic field.", "a": "Comparing with the standard form, <i>f</i> = 3 × 10<sup>14</sup> Hz, so λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(3 × 10<sup>14</sup>) = <b>1.0 × 10<sup>−6</sup> m</b>. And <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i> = 60/(3 × 10<sup>8</sup>) = <b>2.0 × 10<sup>−7</sup> T</b>. (At 1000 nm this is just into the infrared.)" },
            { "q": "<b>[JEE Advanced]</b> A black disc of area 0.04 m<sup>2</sup> absorbs all the sunlight falling on it at intensity 1.4 kW m<sup>−2</sup>. Find the force exerted by radiation on the disc and the momentum delivered to it in 1 minute.", "a": "Black means absorbing, so <i>F</i> = <i>IA</i>/<i>c</i> = (1400)(0.04)/(3 × 10<sup>8</sup>) = 56/(3 × 10<sup>8</sup>) ≈ <b>1.9 × 10<sup>−7</sup> N</b>. Momentum is force times time: <i>p</i> = (1.867 × 10<sup>−7</sup>)(60) ≈ <b>1.1 × 10<sup>−5</sup> kg m s<sup>−1</sup></b>. Had the disc been a mirror both answers would double." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Drawing <i>E</i> and <i>B</i> 90 degrees out of phase.</b> In a travelling electromagnetic wave they are <b>in phase</b>. The quarter-cycle idea leaks in from LC circuits, where energy really does slosh between two stores. Here neither field is a store waiting its turn: each is the other's cause, so they are born together.",
            "<b>Saying the magnetic energy is negligible because <i>B</i> is tiny.</b> <i>u</i><sub>E</sub> = <i>u</i><sub>B</sub> exactly, at every instant. The small <i>B</i> is balanced by the 1/2μ<sub>0</sub> that multiplies its square, and the identity that makes the cancellation exact is μ<sub>0</sub>ε<sub>0</sub><i>c</i><sup>2</sup> = 1.",
            "<b>Dropping the factor of 2 in radiation pressure.</b> Absorber gives <i>I</i>/<i>c</i>, perfect reflector gives 2<i>I</i>/<i>c</i>. Read the surface description before you write anything, and if the question gives a partial reflectance <i>R</i>, the general result is (<i>I</i>/<i>c</i>)(1 + <i>R</i>), which returns both limits at <i>R</i> = 0 and <i>R</i> = 1.",
            "<b>Using <i>c</i> inside a medium.</b> There <i>v</i> = <i>c</i>/<i>n</i> and the field relation is <i>E</i> = <i>vB</i>, not <i>cB</i>. The frequency stays the same and the wavelength shrinks, never the other way round.",
            "<b>Rounding <i>E</i><sub>0</sub> before dividing by <i>c</i>.</b> A two-figure <i>E</i><sub>0</sub> fed into <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i> can move the second figure of <i>B</i><sub>0</sub>. Carry the full value through the chain and round once, at the end."
          ]
        },
        {
          "t": "protip",
          "html": "for any intensity problem, anchor to one line and read it in whichever direction the question needs: <b><i>I</i> = (1/2)ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup></b>. from <i>E</i><sub>0</sub> you get <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i>, and the pressure is just <i>I</i>/<i>c</i>, doubled if the surface reflects. one formula unlocks the whole family and there is nothing else to memorise. two habits that go with it: keep ε<sub>0</sub><i>c</i> = 2.655 × 10<sup>−3</sup> in your head so you never retype it, and <b>round once, at the very end</b>, because a rounded <i>E</i><sub>0</sub> divided by <i>c</i> is how the source's own answer key gets <i>B</i><sub>0</sub> wrong in the third practice question above. and if a question ever tilts the surface, the general pressure is (<i>I</i>/<i>c</i>) cos θ (1 + <i>R</i>), with θ measured from the normal."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) = 3 × 10<sup>8</sup> m/s", "note": "two lab constants, and out comes the speed of light" },
            { "f": "<i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub>, in phase, mutually ⊥, both ⊥ to travel", "note": "one description in four clauses; travel is along E × B" },
            { "f": "<i>c</i> = <i>f</i>λ, ω = <i>ck</i>", "note": "quoted from Waves; f belongs to the source, v to the medium" },
            { "f": "<i>u</i><sub>E</sub> = <i>u</i><sub>B</sub>, ⟨<i>u</i>⟩ = (1/2)ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup>", "note": "exact, at every instant; it is E₀ = cB₀ squared" },
            { "f": "<i>I</i> = (1/2)ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup> = ε<sub>0</sub><i>cE</i><sub>rms</sub><sup>2</sup>", "note": "the one line the whole family reads from; ε₀c = 2.655 × 10⁻³" },
            { "f": "<i>p</i> = <i>U</i>/<i>c</i>; pressure <i>I</i>/<i>c</i> absorbed, 2<i>I</i>/<i>c</i> reflected", "note": "momentum reversal, not removal; general form (I/c)(1 + R)" },
            { "f": "in a medium: <i>v</i> = <i>c</i>/<i>n</i>, <i>E</i> = <i>vB</i>", "note": "frequency unchanged, wavelength shrinks by n" },
            { "f": "transverse, so it can be polarised", "note": "the one property sound can never have" }
          ],
          "aids": [
            "\"E cross B shows the way\"",
            "\"equal energy, in phase, perpendicular\" is all three core properties",
            "\"reflect = double, absorb = single\"",
            "\"if E over B is not c, one of them is wrong\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "The Electromagnetic Spectrum",
      "chip": "04 ONE FAMILY",
      "kalam": "one keyboard, and we can only hear a few keys",
      "blocks": [
        {
          "t": "p",
          "html": "Here is the single most liberating idea in the whole chapter. Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are <b>all the same thing</b>.<br><br>Every one of them is an electromagnetic wave: the same self-sustaining dance of <i>E</i> and <i>B</i> from Topic 03, obeying the same four equations, travelling at the same speed <i>c</i> in vacuum. The <b>only</b> thing that distinguishes them is their <b>frequency</b>, and therefore their wavelength, since <i>c</i> = <i>f</i>λ ties the two together."
        },
        {
          "t": "think",
          "html": "imagine one piano keyboard stretching across a vast hall. each key is a different frequency. the seven or eight octaves of that keyboard are what we <b>name</b> radio, microwave, infrared, and so on. visible light, the entire rainbow your eyes can see, is just a few neighbouring keys near the middle. we are effectively colour-blind to the rest of the keyboard even though it is the same instrument playing. a radio antenna hears the low keys, your retina hears a thin band in the middle, and a hospital X-ray detector hears the very high ones."
        },
        {
          "t": "p",
          "html": "Because it is one continuous keyboard, <b>there are no sharp walls between the bands</b>. The boundaries are fuzzy and they overlap: the high-ultraviolet and the low-X-ray regions genuinely occupy the same wavelengths, and by the standard numbers below anything between 1 nm and 10 nm can be called either.<br><br>So how do we classify them at all? By <b>how they are produced and how they are detected</b>, not by some hard physical line. A 5 nm wave from a hot stellar atmosphere is called extreme ultraviolet; the same wavelength from an electron slamming into a metal target is called a soft X-ray. Radio waves come from electrons sloshing in an antenna; gamma rays come from the nucleus itself. The production mechanism climbs steadily in energy as you go up the spectrum: gentle circuit oscillations at the bottom, violent nuclear processes at the top."
        },
        {
          "t": "def",
          "term": "The electromagnetic spectrum",
          "html": "The full range of electromagnetic wave frequencies, from below a hertz to above 10<sup>20</sup> Hz, treated as <b>one continuous family</b>. All members travel at <i>c</i> in vacuum and differ only in <i>f</i> and λ. The named bands are labels of convenience, defined by <b>production and detection method</b> rather than by exact cutoffs, and adjacent bands overlap. Never quote a boundary number as if it were exact, and never say two bands travel at different speeds in vacuum."
        },
        {
          "t": "formula",
          "kicker": "THE CONVERSION YOU WILL USE MOST",
          "tag": "VACUUM",
          "main": "c = fλ,   c = 3 × 10<sup>8</sup> m/s",
          "legend": [
            "<i>c</i> is the speed of the wave in vacuum, in m/s, the same for every band.",
            "<i>f</i> is the frequency, in hertz (Hz), and belongs to the source.",
            "λ is the wavelength, in metres (m).",
            "Quoted from the Waves chapter, where it is derived for any wave at all; here <i>v</i> is simply <i>c</i>."
          ],
          "note": "Bands are defined on the frequency and wavelength axis, so before you can place a wave you must be on that axis. Given one, convert to the other. A useful pair to carry: 3 × 10<sup>8</sup> Hz sits at 1 m, and 3 × 10<sup>14</sup> Hz sits at 1 μm, so every six powers of ten in frequency is six powers of ten the other way in wavelength."
        },
        {
          "t": "p",
          "html": "And here is the through-line that ties the whole topic together: <b>as frequency rises, wavelength shrinks and photon energy grows</b>. Low-frequency radio photons are feeble; high-frequency gamma photons are ferociously energetic and dangerous.<br><br>This single trend explains <b>why</b> each band is used the way it is. Microwaves match the tumbling frequency of water molecules, so they cook your food. Ultraviolet carries enough punch to break the bonds inside a bacterium, so it sterilises water. X-rays slip through soft tissue but are stopped by dense bone, so they image your skeleton. Once you see the energy ladder you stop memorising and start <b>reasoning</b>, which is the difference between remembering four uses and being able to work out a fifth."
        },
        {
          "t": "formula",
          "kicker": "PHOTON ENERGY",
          "tag": "AND A SHORTCUT WORTH MEMORISING",
          "main": "E = hf = hc/λ,   E(eV) = 1240 / λ(nm)",
          "legend": [
            "<i>E</i> is the energy of one photon, in joules (J), or in electronvolts (eV) in the shortcut form.",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s is Planck's constant.",
            "<i>f</i> is the frequency in Hz, λ the wavelength, in metres for the first form and in nanometres for the shortcut.",
            "1 eV = 1.6 × 10<sup>−19</sup> J, which is where the 1240 comes from: <i>hc</i>/<i>e</i> = (6.63 × 10<sup>−34</sup>)(3 × 10<sup>8</sup>)/(1.6 × 10<sup>−19</sup>) ≈ 1.24 × 10<sup>−6</sup> eV m = 1240 eV nm."
          ],
          "note": "The shortcut is worth memorising outright, because it converts a wavelength you can picture into an energy you can judge, in one division. Green light at 550 nm gives 2.3 eV, which is the right size to move an electron between atomic levels. A 200 nm ultraviolet photon gives 6.2 eV, which is the right size to break a chemical bond. That is the whole of this topic's reasoning in two divisions. <i>E</i> = <i>hf</i> also pre-loads the Dual Nature chapter, where the photon stops being a convenience and becomes the point."
        },
        {
          "t": "diagram",
          "kind": "numberline",
          "kicker": "FIGURE · THE WHOLE SPECTRUM, ON A RULE OF POWERS OF TEN",
          "chips": ["radio", "microwave", "infrared", "visible", "ultraviolet", "X-ray", "gamma"],
          "captions": [
            "First, read the rule. The numbers along it are POWERS OF TEN of the wavelength in metres, so −9 means 10 to the minus 9 metres, one nanometre, and 0 means one metre. Nothing else could hold this picture: the spectrum spans twenty powers of ten, and on an ordinary linear scale everything except radio would sit in a single dot. Radio is the long-wavelength end, above about 0.1 m, which is below 3 × 10 to the 9 hertz. It is produced by accelerated charges in antennas driven by LC oscillators, and it carries AM and FM broadcasting, television and mobile telephony.",
            "Microwaves run from about 1 mm to 0.1 m, that is 3 × 10 to the 9 up to 3 × 10 to the 11 hertz. They are not made by ordinary antennas but by special vacuum tubes and devices: klystrons, magnetrons and Gunn diodes. Radar, microwave ovens and satellite communication all live here. The oven works because this frequency happens to match the tumbling of water molecules, which is a resonance rather than a coincidence.",
            "Infrared spans 700 nm to 1 mm, roughly 3 × 10 to the 11 up to 4 × 10 to the 14 hertz, and it is the widest band on the rule after radio. It is emitted by anything warm and by vibrating molecules, which is why every object around you including you is glowing in it right now. Uses: television remote controls, thermal imaging cameras, and physiotherapy lamps.",
            "Visible light: 400 to 700 nm, about 4 × 10 to the 14 up to 7.5 × 10 to the 14 hertz. Look how narrow it is on the rule, a quarter of one decade wedged between two bands three decades wide. Everything you have ever seen with your own eyes arrived through that sliver. It is produced by electron transitions between atomic energy levels, which is why each element has its own colours, and detected by your retina and by every camera ever built.",
            "Ultraviolet runs 1 to 400 nm, about 7.5 × 10 to the 14 up to 3 × 10 to the 17 hertz. It comes from very hot bodies such as the Sun, and from special discharge lamps. Its photons carry a few electronvolts, which is exactly the energy needed to break a chemical bond, and every one of its uses follows from that: sterilising instruments, purifying drinking water, LASIK surgery, and sunburn.",
            "X-rays span 0.01 to 10 nm, about 3 × 10 to the 16 up to 3 × 10 to the 19 hertz, and they are made in a quite different way: fast electrons are slammed into a metal target and decelerate suddenly. Note that the band as drawn OVERLAPS the ultraviolet between 1 and 10 nm. That overlap is real and the boundary there is settled by how the wave was made, not by its wavelength. Uses: medical imaging, security scanning, cancer therapy.",
            "Gamma rays are everything shorter than about 0.01 nm, above 3 × 10 to the 19 hertz, and they come from the nucleus itself: radioactive decay and nuclear reactions. Their photons carry millions of electronvolts, hundreds of thousands of times a visible photon, which is why they are used to kill tumours and sterilise food and why they are dangerous to everything else. Read the whole rule left to right and one sentence covers it: wavelength falls, frequency rises, photon energy rises, and the source that makes the wave gets more violent at every step."
          ],
          "frames": [
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "label": "radio" }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "label": "microwave" },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "label": "infrared" },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "label": "visible" },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "label": "ultraviolet" },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "soft": true },
                { "from": -11, "to": -9, "label": "X-ray" },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            },
            {
              "x": [-12.5, 2.5],
              "intervals": [
                { "from": -12, "to": -11, "openLeft": true, "label": "gamma" },
                { "from": -11, "to": -9, "soft": true },
                { "from": -9, "to": -6.4, "soft": true },
                { "from": -6.4, "to": -6.15, "soft": true },
                { "from": -6.15, "to": -3, "soft": true },
                { "from": -3, "to": -1, "soft": true },
                { "from": -1, "to": 2.5, "openRight": true, "soft": true }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Radio through visible",
          "tag": "THE LONG HALF",
          "rows": [
            { "k": "Radio", "v": "λ above 0.1 m, <i>f</i> below 3 × 10<sup>9</sup> Hz. Made by accelerated charges in antennas driven by LC oscillators. Used for AM and FM broadcasting, television, and mobile communication." },
            { "k": "Microwave", "v": "λ from 1 mm to 0.1 m, <i>f</i> from 3 × 10<sup>9</sup> to 3 × 10<sup>11</sup> Hz. Made by klystrons, magnetrons and Gunn diodes. Used for radar, microwave ovens and satellite communication." },
            { "k": "Infrared", "v": "λ from 700 nm to 1 mm, <i>f</i> from 3 × 10<sup>11</sup> to about 4 × 10<sup>14</sup> Hz. Emitted by hot bodies and vibrating molecules. Used in remote controls, thermal imaging and physiotherapy." },
            { "k": "Visible", "v": "λ from 400 to 700 nm, <i>f</i> from about 4 × 10<sup>14</sup> to 7.5 × 10<sup>14</sup> Hz. Made by electron transitions in atoms. Used for vision, illumination and the whole of optics." }
          ]
        },
        {
          "t": "defgrid",
          "title": "Ultraviolet through gamma",
          "tag": "THE SHORT HALF",
          "rows": [
            { "k": "Ultraviolet", "v": "λ from 1 to 400 nm, <i>f</i> from 7.5 × 10<sup>14</sup> to 3 × 10<sup>17</sup> Hz. From very hot bodies such as the Sun, and from special lamps. Used for sterilisation, water purification and LASIK. Also the cause of sunburn." },
            { "k": "X-rays", "v": "λ from 0.01 to 10 nm, <i>f</i> from 3 × 10<sup>16</sup> to 3 × 10<sup>19</sup> Hz. Made by the sudden deceleration of fast electrons on a metal target. Used for medical imaging, security scanning and cancer therapy." },
            { "k": "Gamma rays", "v": "λ below 0.01 nm, <i>f</i> above 3 × 10<sup>19</sup> Hz. From radioactive nuclei and nuclear reactions, so the source is the nucleus itself. Used for radiotherapy, food sterilisation and research." },
            { "k": "About those boundaries", "v": "They <b>overlap</b> and none of the numbers is exact. Ultraviolet and X-rays share the 1 to 10 nm stretch, and the answer to which band a wave belongs to there is decided by how it was produced. Classify by mechanism, not by a cutoff." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · PHOTON ENERGY AGAINST WAVELENGTH",
          "chips": ["the curve", "where visible sits"],
          "captions": [
            "Photon energy in electronvolts against wavelength in nanometres, drawn from E = 1240 over lambda. It is a hyperbola, and the shape is the whole message: at long wavelengths the curve is nearly flat and one photon carries almost nothing, while towards short wavelengths it climbs without limit. That steepening is why a 1 nm X-ray photon is not a bit more energetic than a 100 nm ultraviolet one but a hundred times more energetic, and why the dangerous end of the spectrum is dangerous.",
            "Now put the visible window on it, the shaded strip from 400 to 700 nm. Red light at 700 nm carries 1.8 eV, violet at 400 nm carries 3.1 eV, and the entire rainbow lives inside a factor of less than two in energy. Just to the left of the strip sits 200 nm ultraviolet at 6.2 eV, which is enough to break a chemical bond, and that single step is the difference between light that lets you see and light that damages the cells doing the seeing. Read the curve rather than memorising the table and most uses questions answer themselves."
          ],
          "frames": [
            {
              "x": [90, 1090], "y": [0, 14], "axisX": "λ (nm)", "axisY": "E (eV)",
              "ticksX": { "at": [200, 400, 700, 1000], "labels": ["200", "400", "700", "1000"] },
              "ticksY": { "at": [2, 6, 10], "labels": ["2", "6", "10"] },
              "curves": [{ "c": "recip", "a": 1240 }],
              "labels": [{ "x": 850, "y": 11, "text": "E = 1240 / λ in nm" }]
            },
            {
              "x": [90, 1090], "y": [0, 14], "axisX": "λ (nm)", "axisY": "E (eV)",
              "ticksX": { "at": [200, 400, 700, 1000], "labels": ["200", "400", "700", "1000"] },
              "ticksY": { "at": [2, 6, 10], "labels": ["2", "6", "10"] },
              "bands": [{ "x0": 400, "x1": 700 }],
              "curves": [{ "c": "recip", "a": 1240 }],
              "points": [
                { "x": 700, "y": 1.77, "label": "red" },
                { "x": 400, "y": 3.1, "label": "violet", "at": "sw" },
                { "x": 200, "y": 6.2, "label": "UV" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Place a wave in its band",
          "steps": [
            "<b>Get onto the right axis.</b> If you are given frequency you can place it directly; if you are given wavelength, convert with <i>f</i> = <i>c</i>/λ, or convert the band's limits the other way. The bands are defined on this axis, so you must be standing on it first.",
            "<b>Slot the value into the table.</b> Membership is purely a matter of where <i>f</i> or λ falls. Nothing clever is required and nothing clever is being tested.",
            "<b>If it sits near a boundary, use the production method.</b> The boundaries overlap, so the source resolves the ambiguity: a 5 nm wave from a hot gas is extreme ultraviolet, the same wavelength off a metal target is a soft X-ray. If the question hints at how the wave was made, that hint is the answer."
          ]
        },
        {
          "t": "proc",
          "title": "Reason a use from the energy",
          "steps": [
            "<b>Higher frequency means higher photon energy</b>, from <i>E</i> = <i>hf</i>. Every step below follows from this one fact, so if you remember nothing else, remember this.",
            "<b>Low energy, radio and microwave.</b> Too weak to ionise anything, easily transmitted, reflected and steered, so they are ideal for <b>communication and heating</b>.",
            "<b>Middle energy, infrared and visible.</b> Matched to molecular vibration and to the eye, so they are used for <b>heating, imaging and vision</b>.",
            "<b>High energy, ultraviolet, X-ray and gamma.</b> Enough energy to break bonds and ionise atoms, so they <b>sterilise, penetrate tissue and treat cancer</b>, and are correspondingly dangerous to living cells."
          ]
        },
        {
          "t": "defgrid",
          "title": "The production ladder",
          "tag": "CLIMBING IN ENERGY",
          "rows": [
            { "k": "Antennas and LC oscillators", "v": "<b>Radio.</b> Electrons driven up and down a rod by an alternating current. The gentlest source there is, and the only one you could build on a bench with a coil and a capacitor." },
            { "k": "Klystrons, magnetrons, Gunn diodes", "v": "<b>Microwave.</b> Special vacuum tubes and semiconductor devices, because an ordinary antenna cannot be driven fast enough." },
            { "k": "Hot bodies and vibrating molecules", "v": "<b>Infrared.</b> Thermal emission. Everything warmer than its surroundings is doing this right now, including you." },
            { "k": "Electron transitions in atoms", "v": "<b>Visible and ultraviolet.</b> An outer electron falls between atomic energy levels and emits one photon of a few electronvolts." },
            { "k": "Fast electrons decelerating on a target", "v": "<b>X-rays.</b> Kilovolts of electrical energy dumped into one electron and out again as one photon. This is Example 4 below." },
            { "k": "Radioactive nuclei", "v": "<b>Gamma rays.</b> The nucleus itself, at millions of electronvolts. Nothing in the chemistry of atoms can produce these, which is why the band is named after the source and not the wavelength." }
          ]
        },
        {
          "t": "p",
          "html": "The other half of the classification is <b>detection</b>, and the source is explicit that a band is named by how it is produced <b>and</b> how it is detected. That matters practically: your eye is a detector for exactly one band and is stone blind to the other six, so every other band needs an instrument standing in for it. A radio needs an aerial and a tuned circuit; infrared needs a thermopile or a bolometer; X-rays need a photographic plate or an ionisation chamber. When a question hands you a detector rather than a wavelength, the detector is the clue."
        },
        {
          "t": "defgrid",
          "title": "How each band is detected",
          "tag": "THE OTHER HALF OF THE DEFINITION",
          "rows": [
            { "k": "Radio", "v": "An aerial feeding a tuned LC circuit. The passing wave drives the antenna's electrons at its own frequency, and the circuit is tuned to select one broadcast out of the many arriving at once." },
            { "k": "Microwave", "v": "Point-contact diodes and crystal detectors, and in the kitchen the food itself: absorbed microwave energy shows up as a temperature rise, which is a detector of a rough and honest kind." },
            { "k": "Infrared", "v": "Thermopiles and bolometers, which sense the heating the absorbed radiation produces, and semiconductor photodetectors in remote-control receivers and thermal cameras." },
            { "k": "Visible", "v": "The human eye, photographic film, and photodiodes and CCD or CMOS sensors. This is the only band with a built-in biological detector, which is exactly why it is the band we named light." },
            { "k": "Ultraviolet", "v": "Photocells and photomultipliers, and fluorescent screens, where the invisible ultraviolet is absorbed and re-emitted as visible light you can see." },
            { "k": "X-ray and gamma", "v": "Photographic plates, ionisation chambers, Geiger-Muller counters and scintillation detectors. All of them work by the same route: the photon ionises something, and the ionisation is counted." }
          ]
        },
        {
          "t": "p",
          "html": "You meet this spectrum every single day. All India Radio broadcasts on radio waves; the mobile tower down the street works in the microwave region; your television remote speaks infrared; sunlight brings visible and ultraviolet together, one of which lets you see and the other of which burns you; the hospital chest X-ray images your bones; and cancer radiotherapy uses gamma rays. Seven bands, one family, and you have used at least five of them before lunch."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A radio station broadcasts at <i>f</i> = 90.4 MHz. Find the wavelength of the wave and name the band it belongs to.",
          "steps": [
            "λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(90.4 × 10<sup>6</sup>).",
            "λ ≈ 3.3 m.",
            "Now place it: a wavelength of a few metres, and a frequency well below 3 × 10<sup>9</sup> Hz.",
            "That is firmly inside the radio band, in its FM stretch, which is exactly what you would expect from a broadcast station."
          ],
          "ans": "λ ≈ 3.3 m, in the <b>radio (FM) band</b>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Arrange the following in order of <b>increasing wavelength</b>: gamma rays, microwaves, visible light, X-rays.",
          "steps": [
            "<b>The trap.</b> Students who memorised the FREQUENCY order copy it straight across and hand in the sequence backwards.",
            "Wavelength is inverse to frequency, so the lowest-frequency wave has the longest wavelength.",
            "Increasing wavelength therefore means decreasing frequency, and decreasing frequency means decreasing photon energy.",
            "<b>Mental check.</b> Gamma is the most energetic of the four, so it must have the shortest λ. Microwave is the least energetic, so it must have the longest. Anything else is wrong before you write it down."
          ],
          "ans": "gamma rays, then X-rays, then visible light, then microwaves"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "An electromagnetic wave has wavelength λ = 200 nm. (a) Find the energy of one photon in electronvolts. (b) Identify the band.",
          "steps": [
            "<b>(a)</b> Use the shortcut <i>E</i>(eV) = 1240/λ(nm), with λ already in nanometres.",
            "<i>E</i> = 1240/200 = 6.2 eV.",
            "<b>(b)</b> 200 nm is shorter than the visible range of 400 to 700 nm but far longer than the X-ray range of 0.01 to 10 nm.",
            "<b>Consistency check.</b> 6.2 eV is comfortably more than the few electronvolts that hold a chemical bond together, which is precisely why ultraviolet sterilises."
          ],
          "ans": "(a) <i>E</i> = 6.2 eV  (b) the <b>ultraviolet</b> band"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "In an X-ray tube, electrons are accelerated through a potential difference <i>V</i> and strike a metal target. The shortest-wavelength X-ray produced corresponds to an electron converting all its kinetic energy into a single photon. If the minimum wavelength observed is λ<sub>min</sub> = 0.10 nm, find the accelerating voltage <i>V</i>.",
          "steps": [
            "<b>The concept.</b> The most energetic photon possible carries the electron's entire energy <i>eV</i>. That is the Duane-Hunt limit, and it is pure energy conservation: <i>eV</i> = <i>hc</i>/λ<sub>min</sub>.",
            "Rearranged, <i>V</i> = <i>hc</i>/(<i>e</i>λ<sub>min</sub>), and <i>hc</i>/<i>e</i> is the same 1240 eV nm as in the shortcut.",
            "So <i>V</i> in volts equals 1240 divided by λ<sub>min</sub> in nanometres.",
            "<i>V</i> = 1240/0.10 = 1.24 × 10<sup>4</sup> V.",
            "<b>Plausibility.</b> Diagnostic X-ray tubes really do run at tens of kilovolts, so 12.4 kV for a 0.1 nm limit is the right size."
          ],
          "ans": "<i>V</i> = 1.24 × 10<sup>4</sup> V = 12.4 kV. The electrical energy handed to one electron sets the highest-frequency X-ray the tube can emit"
        },
        {
          "t": "mcq",
          "q": "Which list is arranged in order of <b>increasing</b> frequency?",
          "opts": [
            { "label": "X-rays, UV, visible, IR", "nudge": "This is decreasing frequency, the whole list written backwards. Check the two ends against each other before reading the middle." },
            { "label": "radio, microwave, infrared, visible" },
            { "label": "gamma, X-rays, UV, visible", "nudge": "Also decreasing, and starting from the very top of the spectrum, which should be the giveaway: nothing has a higher frequency than gamma." },
            { "label": "microwave, radio, IR, UV", "nudge": "Radio and microwave are the wrong way round. Radio is the LOWER frequency band, above 0.1 m in wavelength." }
          ],
          "correct": 1,
          "solution": "The full order in increasing frequency is radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Wavelength runs the other way, and photon energy runs the same way as frequency. Lock those three together once and you can generate any ordering question's answer instead of recalling it."
        },
        {
          "t": "mcq",
          "q": "Electromagnetic waves used in radar are produced by:",
          "opts": [
            { "label": "radioactive nuclei", "nudge": "That produces gamma rays, at millions of electronvolts. Radar operates about fourteen powers of ten lower in energy." },
            { "label": "electron transitions in atoms", "nudge": "That produces visible light and ultraviolet, not microwaves. Atomic transitions are a few electronvolts, far too energetic." },
            { "label": "special vacuum tubes such as magnetrons and klystrons" },
            { "label": "vibrating molecules in hot bodies", "nudge": "That is thermal emission, which produces infrared. It is one rung too high on the production ladder." }
          ],
          "correct": 2,
          "solution": "Radar uses microwaves, and microwaves are generated by magnetrons, klystrons and Gunn diodes: devices built specifically because an ordinary antenna cannot be driven fast enough. Matching the band to its production mechanism is worth doing once for all seven bands, since it is the single most-asked recall in this topic."
        },
        {
          "t": "mcq",
          "q": "The band of the spectrum chiefly responsible for sunburn and used to sterilise drinking water is:",
          "opts": [
            { "label": "infrared", "nudge": "Infrared is felt as heat and its photons carry well under an electronvolt, nowhere near enough to break the bonds that sterilising and sunburn both involve." },
            { "label": "microwave", "nudge": "Microwaves heat water, which is a different mechanism entirely, and they do not cause sunburn or kill microorganisms by ionisation." },
            { "label": "ultraviolet" },
            { "label": "X-rays", "nudge": "X-rays would work biologically, and that is what makes this tempting, but they are enormously more energetic than needed and are not how either job is done." }
          ],
          "correct": 2,
          "solution": "Ultraviolet photons carry a few electronvolts, which is the energy scale of a chemical bond. That is exactly enough to damage the DNA inside a microorganism, and exactly enough to damage skin cells. One number, 6.2 eV at 200 nm, explains both the use and the hazard."
        },
        {
          "t": "mcq",
          "q": "Two electromagnetic waves, one radio and one gamma, travel through vacuum. Which statement is correct?",
          "opts": [
            { "label": "The gamma ray travels faster", "nudge": "The higher energy equals faster trap. Energy and speed are unrelated here: c depends only on μ₀ and ε₀, and neither knows anything about the wave." },
            { "label": "The radio wave travels faster", "nudge": "The same trap inverted, perhaps from the idea that a longer wave covers more ground per cycle. Frequency and wavelength adjust together so that fλ is always c." },
            { "label": "Both travel at the same speed" },
            { "label": "Speed depends on amplitude", "nudge": "Amplitude sets the intensity, through I = (1/2)ε₀cE₀², not the speed." }
          ],
          "correct": 2,
          "solution": "In vacuum <b>all</b> electromagnetic waves travel at <i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>), regardless of frequency, wavelength, amplitude or source. Speed only changes inside a medium, where <i>v</i> = <i>c</i>/<i>n</i>, and that is a property of the medium and not of the band."
        },
        {
          "t": "practice",
          "items": [
            { "q": "<b>[CBSE]</b> Name the electromagnetic radiation used in (i) a TV remote control, (ii) sterilising surgical instruments, (iii) radar, and state one production method for each.", "a": "(i) <b>Infrared</b>, produced by hot bodies and vibrating molecules, here by an LED. (ii) <b>Ultraviolet</b>, produced by special UV discharge lamps. (iii) <b>Microwaves</b>, produced by a magnetron or klystron." },
            { "q": "<b>[NEET]</b> Which of these has the highest photon energy: infrared, ultraviolet, microwave, or red light? Justify in one line.", "a": "<b>Ultraviolet.</b> Photon energy goes as <i>E</i> = <i>hf</i>, and of the four, ultraviolet has the highest frequency: it sits above visible, while red light is at the low-frequency end of visible and infrared and microwave are below it." },
            { "q": "<b>[JEE Main]</b> A microwave oven operates at 2.45 GHz. Find the wavelength of its radiation.", "a": "λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(2.45 × 10<sup>9</sup>) ≈ <b>0.122 m = 12.2 cm</b>, Everyone calls 2.45 GHz a microwave, and yet 12.2 cm is slightly LONGER than the 0.1 m upper limit in the table, which by those numbers would make it radio. That is not an error in your arithmetic; it is the overlap the table warns about, and it is a good reminder that the cutoffs are conventions rather than walls." },
            { "q": "<b>[JEE Main]</b> Green light has wavelength λ = 550 nm. Find its frequency and the energy of one photon in eV.", "a": "<i>f</i> = <i>c</i>/λ = (3 × 10<sup>8</sup>)/(550 × 10<sup>−9</sup>) ≈ <b>5.5 × 10<sup>14</sup> Hz</b>. Photon energy <i>E</i> = 1240/550 ≈ <b>2.3 eV</b>, which is the right size to move an outer electron between atomic levels, exactly as the production ladder says it should be." },
            { "q": "<b>[JEE Advanced]</b> A gamma photon has energy 1.5 MeV. Find its frequency and wavelength.", "a": "In joules, <i>E</i> = (1.5 × 10<sup>6</sup>)(1.6 × 10<sup>−19</sup>) = 2.4 × 10<sup>−13</sup> J. Then <i>f</i> = <i>E</i>/<i>h</i> = (2.4 × 10<sup>−13</sup>)/(6.63 × 10<sup>−34</sup>) ≈ <b>3.6 × 10<sup>20</sup> Hz</b>, and λ = <i>c</i>/<i>f</i> ≈ <b>8.3 × 10<sup>−13</sup> m</b>. That is under 0.01 nm and above 3 × 10<sup>19</sup> Hz, so it lands in the gamma band, as it must." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reversing the wavelength order.</b> Increasing frequency means <b>decreasing</b> wavelength. Do not copy the frequency sequence across when a question asks for wavelength; check the two ends against each other before you write anything.",
            "<b>Flipping infrared and ultraviolet.</b> Ultraviolet is <b>higher</b> in energy than infrared: ultra sits above visible, infra sits below it. The prefixes tell you, if you read them.",
            "<b>Attaching the wrong production mechanism.</b> Gamma comes from the nucleus, X-rays from decelerating fast electrons, visible and ultraviolet from atomic electron jumps, microwaves from special tubes, radio from antennas. Mismatching these is a favourite trap because all five sound plausible.",
            "<b>Thinking different bands travel at different speeds.</b> In vacuum every band moves at <i>c</i>. Speed changes only in a medium, and then by the refractive index.",
            "<b>Treating the boundary numbers as exact.</b> They overlap, particularly ultraviolet against X-rays between 1 and 10 nm. If a question puts a wavelength in an overlap and mentions a source, the source decides."
          ]
        },
        {
          "t": "protip",
          "html": "memorise the order with one sentence and you have locked production, energy and hazard together at the same time. left to right is <b>rising frequency, rising photon energy, more energetic source, more biologically dangerous</b>, and falling wavelength. after that you can <b>derive</b> most uses questions instead of recalling them. keep two anchors for scale: the 50 Hz wave in your wall socket has a wavelength of <i>c</i>/<i>f</i> = 6 × 10<sup>6</sup> m, that is six thousand kilometres, about half the diameter of the Earth, while green light is 550 nm. thirteen powers of ten between the two, and both are the same kind of wave travelling at the same speed."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "one family: all travel at <i>c</i> in vacuum", "note": "they differ only in f and λ, never in vacuum speed" },
            { "f": "radio, microwave, IR, visible, UV, X-ray, gamma", "note": "rising frequency and photon energy, falling wavelength" },
            { "f": "<i>c</i> = <i>f</i>λ", "note": "get onto the frequency or wavelength axis before placing anything" },
            { "f": "<i>E</i> = <i>hf</i> = <i>hc</i>/λ, and <i>E</i>(eV) = 1240/λ(nm)", "note": "the one shortcut worth memorising outright" },
            { "f": "visible: 400 to 700 nm, about 1.8 to 3.1 eV", "note": "a quarter of a decade wide, and everything you have ever seen" },
            { "f": "antennas, tubes, hot bodies, atoms, fast electrons, nuclei", "note": "the production ladder, in the same order as the bands" },
            { "f": "boundaries overlap; classify by production", "note": "UV and X-ray share 1 to 10 nm, and the source settles it" },
            { "f": "Duane-Hunt: <i>V</i>(volts) = 1240/λ<sub>min</sub>(nm)", "note": "the shortest X-ray a tube can make, from its own accelerating voltage" }
          ],
          "aids": [
            "\"running men in vans use extra gas\" for radio, microwave, infrared, visible, ultraviolet, x-ray, gamma",
            "\"higher frequency, shorter wave, stronger punch\"",
            "\"twelve forty over nanometres gives electronvolts\""
          ]
        }
      ]
    }
  ]
};

export default phy12ElectromagneticWaves;
