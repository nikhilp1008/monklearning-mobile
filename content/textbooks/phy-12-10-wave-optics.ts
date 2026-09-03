/**
 * Chapter 10 · Wave Optics. Physics, Class 12.
 *
 * Restructured from pages 629 to 708 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-08-electromagnetic-waves.ts and phy-11-14-waves.ts.
 *
 * SIX TOPICS FROM SIX SOURCE SUBTOPICS, ONE FOR ONE, AND NOTHING MERGED.
 * 01 Wavefronts and Huygens' Principle, 02 The Doppler Effect of Light,
 * 03 Interference and Young's Double Slit, 04 Thin-Film Interference,
 * 05 Diffraction of Light, 06 Polarisation of Light. Six is the ceiling of
 * the reader's gate and the source's own division is exactly six, so the
 * question was only whether to merge down, and the answer is no. The one
 * real candidate was folding Doppler (8 pages, the thinnest subtopic) into
 * Huygens, on the seam the source crosses itself: Subtopic 02's opening says
 * outright "picture the spherical wavefronts of Subtopic 01 leaving a moving
 * source". But the two carry different derivations, different exam profiles
 * and different sanity checks, and merging them would have put twenty-one
 * source pages and two checkpoints' worth of material under one snapshot
 * while leaving the merged topic's own hook covering a phenomenon a student
 * meets once. The seam is honoured by QUOTATION instead: Topic 02's
 * derivation opens on Topic 01's wavefronts by name and rebuilds none of it.
 *
 * HOW 80 PAGES FIT IN 155 BLOCKS. The cut is in depth, not in topic count.
 *   - The Round 2 Addendum is 13 of the 80 pages and contributes NOTHING
 *     structural (see below), so the real body is 67 pages.
 *   - Each subtopic ships eight sections, and three of them are the same
 *     material three times: Section 2 (Key Formulas), Section 8 (Cheat Sheet
 *     Box) and the Section 7 Pro-Tip all restate the subtopic's formula set.
 *     Those three collapse into one `formula` run plus one `snapshot` per
 *     topic, which is roughly a 3-to-1 compression and is where most of the
 *     80 pages go.
 *   - Section 1's "Limiting conditions & assumptions" bullet lists are folded
 *     into the paragraph or the `mistakes` card they belong to rather than
 *     given cards of their own.
 *   - The source runs 4 worked examples, 5 practice items and 4 MCQs per
 *     subtopic, which is 78 items across six subtopics. Every one was
 *     recomputed, and 73 are carried: all 24 worked examples, all 30 practice
 *     items, and 19 of the 24 MCQs. The five dropped are MCQs whose content
 *     already appears elsewhere in the SAME topic and would have been asked
 *     twice: Subtopic 01's Q3 on the backwave (which the Huygens-limitations
 *     paragraph states in full), Subtopic 02's Q1 on redshift meaning
 *     recession (which is that subtopic's own Example 2), Subtopic 04's Q3 on
 *     how an AR coating works (the AR `formula` note), Subtopic 05's Q2 on
 *     Fraunhofer against Fresnel (the `def` block), and Subtopic 06's Q2 on
 *     unpolarised light through one polaroid (that subtopic's Example 2).
 *     Nothing conceptually distinct was dropped. One extra practice item was
 *     WRITTEN, in Topic 06, comparing two three-polaroid stacks, because the
 *     source computes one arrangement and never says why equal steps beat one
 *     big step.
 *   - The three big derivations that CBSE actually sets (reflection and
 *     refraction from Huygens, fringe width, single-slit minima) keep every
 *     step. Derivation 3.1 of Subtopic 04 (the 2nt cos r geometry) is the
 *     only derivation compressed, to four steps from five, because its Step 2
 *     and Step 3 are one trigonometric identity.
 *   - Six subtopics at roughly 26 blocks each is 154, and the split is
 *     weighted by exam load rather than by page count: Topic 03 (YDSE) gets
 *     29 because the source calls it "the single most heavily examined
 *     subtopic in the chapter", Topic 02 (Doppler) gets 21 because it is the
 *     one the source itself says NEET "asks rarely". The final tally is
 *     27 + 21 + 29 + 24 + 25 + 28 = 154, in 14 diagram blocks and 31 frames.
 *
 * THE ROUND 2 ADDENDUM (pages 696 to 708: A thin films with both reflections
 * flipped, B the diffraction grating, C the sinc-squared intensity of a
 * single slit, D birefringence and wave plates, E Rayleigh resolution in
 * depth) IS NOT A TOPIC, per the brief, and this chapter was written with
 * unusual suspicion of it because six of its items are wrong (see CORRECTIONS
 * below). It reaches a student in exactly two places, both one line long:
 * Topic 04's protip names the half-wave COUNT as the thing to check, which is
 * Addendum A's Method Step 1 stated as a habit, and Topic 05's protip names
 * the 4.7 per cent first secondary maximum, which is Addendum C's one solid
 * number. No `formula`, `defgrid`, `deriv`, `proc`, `ex`, `mcq` or `practice`
 * block below is sourced from the addendum, and no addendum number beyond
 * that 4.7 per cent is carried anywhere.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). ONE OF THE TWO ENTRIES
 * IS THIS CHAPTER, and it is applied below.
 *
 *   THE CHAPTER 10 ENTRY, in full. "Page 33 (source page 667) - Thin-film
 *   interference, Step 4: the dark/bright conditions are swapped." Printed:
 *   "The net effective path difference is therefore 2nt cos r - lambda/2.
 *   Cancellation (a dark fringe) requires this effective difference to be an
 *   integer number of wavelengths, while reinforcement (bright) requires a
 *   half-integer". Should read: "Cancellation (a dark fringe) requires this
 *   effective difference to be a HALF-INTEGER number of wavelengths, while
 *   reinforcement (bright) requires an INTEGER number". The errata's reason:
 *   with the lambda/2 flip at the top (air to denser) reflection only, the
 *   effective difference is D_eff = 2nt cos r - lambda/2. Dark needs
 *   2nt cos r = m lambda, i.e. D_eff = (m - 1/2) lambda, a half-integer
 *   multiple; bright needs 2nt cos r = (m + 1/2) lambda, i.e. D_eff =
 *   m lambda, an integer multiple. The chapter's own final statements two
 *   paragraphs later ("reflected bright at 2nt cos r = (m + 1/2) lambda, dark
 *   at m lambda") are correct, and the erratum makes the derivation agree
 *   with them. The errata declines to patch in place because the corrected
 *   sentence is longer than the printed line has room for.
 *
 *   INDEPENDENTLY VERIFIED before applying, rather than taken on trust. Beam
 *   1 reflects at the top surface, air into film, rarer into denser, and
 *   picks up a pi phase reversal worth lambda/2. Beam 2 travels the extra
 *   optical path 2nt cos r inside and reflects at the bottom, film into air,
 *   denser into rarer, with no reversal. So the two beams reinforce when
 *   2nt cos r - lambda/2 = m lambda, which is 2nt cos r = (m + 1/2) lambda,
 *   and cancel when 2nt cos r - lambda/2 = (m + 1/2) lambda, which is
 *   2nt cos r = (m + 1) lambda and relabels to m lambda. Bright is the
 *   INTEGER case of D_eff and dark is the half-integer case. The errata is
 *   right and the printed sentence is backwards.
 *
 *   HOW IT IS APPLIED. Topic 04's `deriv` is the source's Derivation 3.1, and
 *   its final step is authored in the CORRECTED direction: the step's `eq`
 *   carries D_eff = 2nt cos r - lambda/2 and its `why` says in plain words
 *   that an INTEGER number of wavelengths of effective difference is the
 *   bright condition and a half-integer is the dark one, then moves the
 *   lambda/2 across to reach 2nt cos r = (m + 1/2) lambda for bright. Topic
 *   04's `mistakes` carries the swap as a named error, because a student who
 *   owns a printed copy will read the wrong sentence. Nothing else in the
 *   chapter changes: the source's Section 2 conditions, its four worked
 *   examples, its five practice answers and its four MCQ keys were all
 *   written from the CORRECT conditions and all of them check out, which is
 *   itself the strongest evidence that the defect is one sentence and not a
 *   systematic reversal.
 *
 *   THE OTHER ERRATA ENTRY, Chapter 7 (Alternating Current) page 14, a
 *   Practice 5 whose stated drive frequency IS the resonant frequency of its
 *   own stated components so that "the current lagging" cannot hold, does not
 *   touch this range. Recorded because it was read in full.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 629 to 708 was recomputed independently, addendum first.
 * The result is worth stating plainly because it is unusual for this corpus:
 * THE MAIN BODY (pages 629 to 695) IS ARITHMETICALLY CLEAN. Twenty-four
 * worked examples, thirty practice items and twenty-four MCQ keys, about a
 * hundred and thirty numbers, and not one of them is wrong. The Round 2
 * Addendum is a different animal, exactly as the brief predicted.
 *
 *   MAIN BODY, three editorial defects and no numerical ones.
 *   1. Subtopic 02, Example 3(c) (page 647) leaks a draft fumble into the
 *      plate: "Blueshift, Dlambda/lambda = -(v_r/c) . (-1) ... more cleanly,
 *      Dlambda/lambda = v_r/c = -1.0 x 10^-3". The first form is a false
 *      start the author talked himself out of mid-sentence and the words
 *      "more cleanly" are addressed to nobody. The ANSWER is right
 *      (Dlambda = -0.6 nm, so 600.0 nm becomes 599.4 nm; recomputed:
 *      v_r = -3.0 x 10^5, v_r/c = -1.0 x 10^-3, lambda = c/f = 600 nm, so
 *      Dlambda = -0.6 nm). Topic 02's Example 3 below states the sign rule
 *      once, in the direction the chapter fixed in its own Section 2, and
 *      does not narrate a false start.
 *   2. Subtopic 05, Practice 2 (page 682) is self-contradictory as printed:
 *      "the first minimum for red light (700 nm) coincides with the first
 *      minimum for another colour at a smaller angle". A coincidence IS the
 *      same angle, so "coincides ... at a smaller angle" cannot both hold.
 *      The intended question is which wavelength puts its first minimum at a
 *      SMALLER angle, and the printed answer ("smaller, since sin theta =
 *      lambda/a with a fixed") answers that. Topic 05's practice item below
 *      is restated as the question the answer belongs to.
 *   3. Subtopic 04, Section 4.3.1 (page 667) has its heading corrupted to
 *      "6HWXS0" and Subtopic 06, Section 1 (page 686) opens "$ second route
 *      to polarised liJht", both an ASCII shift of -29 (see SOURCE DAMAGE).
 *      Not content errors, but they are the two places where a reader of the
 *      extract would guess rather than read, so both passages were
 *      re-authored from context rather than transcribed.
 *
 *   ROUND 2 ADDENDUM, six items wrong, none carried below.
 *   4. ADDENDUM A, Example A.2 Step 1 (page 698), Newton's rings in
 *      TRANSMITTED light. Printed: "the path difference between the two
 *      transmitted beams is D = 2t + lambda/2 (the internal reflections each
 *      contribute a half-wave loss, net lambda)". The parenthesis and the
 *      formula contradict each other: a net lambda is a full wavelength, so
 *      the effective difference is 2t + lambda, which is 2t. Printing
 *      lambda/2 while saying lambda is a factor-of-two slip inside one line,
 *      and it is not harmless: the very next sentence says "At the centre
 *      t = 0, so D = lambda/2, which is the condition for a BRIGHT central
 *      ring", while the same example's Step 2 declares "Dark in transmission
 *      requires D = m lambda". By its own two rules D = lambda/2 at t = 0 is
 *      neither. Working: the directly transmitted beam suffers no reflection;
 *      the second beam reflects at the bottom (air into glass, rarer into
 *      denser, lambda/2) and again at the top from inside (air into glass
 *      again, lambda/2), so the two losses sum to lambda and cancel, leaving
 *      D = 2t. At t = 0, D = 0, which IS bright, and the conclusion survives
 *      by luck. CORRECT: D = 2t; transmitted dark at 2t = (m + 1/2) lambda.
 *      The printed radius rho_5 = 1.54 mm is right, because 2t = (5 - 1/2)
 *      lambda and 2t = (4 + 1/2) lambda are the same equation relabelled:
 *      rho = sqrt(4.5 x 589 x 10^-9 x 0.90) = sqrt(2.3855 x 10^-6) =
 *      1.544 x 10^-3 m. A right answer from a wrong rule.
 *   5. ADDENDUM A, Example A.1 Step 3 (page 697) mislabels its own order:
 *      "The nearest bright condition (m = 0) requires 2n_f t = 600 nm". With
 *      N_HW = 2 the bright condition is 2nt = m lambda, and m = 0 gives
 *      2nt = 0, not 600 nm. 600 nm is m = 1. The paragraph also concludes
 *      twice and differently, first "798 nm sits closer to the dark
 *      condition, the film appears closer to dark (dim)" and then "The film
 *      is neither bright nor dark ... at an intermediate intensity".
 *      Recomputed, both readings are defensible and the second is better:
 *      D = 2nt = 2(1.33)(300 nm) = 798 nm, and the reflected intensity goes
 *      as cos^2(pi D/lambda) = cos^2(1.33 pi) = 0.26, so the film sits at
 *      about a quarter of its maximum, dimmer than halfway but not dark.
 *   6. ADDENDUM A, Practice 4 (page 699) is incoherent as printed. It offers
 *      three different mappings between reflected and transmitted ring
 *      orders in four sentences ("transmitted dark ring m has same radius as
 *      reflected bright ring m - 1/2", then "simpler: reflected dark m
 *      corresponds to transmitted bright m", then "reflected dark order m
 *      gives transmitted dark order m - 1") and then computes with the
 *      third. Working from D = 2t for transmission: reflected dark is
 *      2t = m lambda; transmitted dark is 2t = (m + 1/2) lambda. The 10th
 *      reflected dark ring sits at 2t = 10 lambda, and the transmitted dark
 *      ring nearest it is 2t = 9.5 lambda, so D_trans = D_refl sqrt(9.5/10)
 *      = 5.0 x 0.9747 = 4.87 mm, not the printed 4.75 mm. NOT CARRIED IN ANY
 *      FORM.
 *   7. ADDENDUM B, Example B.2 Step 4 (page 701), the angular separation of
 *      the sodium doublet. Printed "theta_1 = 6.77 degrees, theta_2 = 6.78
 *      degrees, Dtheta approx 0.01 degrees = 0.6 arc-minutes". Working:
 *      sin theta_1 = 2(589.0 x 10^-9)/(1 x 10^-5) = 0.11780, theta_1 =
 *      6.7660 degrees; sin theta_2 = 2(589.6 x 10^-9)/(1 x 10^-5) = 0.11792,
 *      theta_2 = 6.7729 degrees. Dtheta = 0.0069 degrees = 0.41 arc-minutes,
 *      not 0.6. The printed value comes from rounding each angle to two
 *      decimals FIRST and then subtracting, which is exactly the error the
 *      corpus keeps meeting: a difference of two nearly equal numbers cannot
 *      be taken after rounding them.
 *   8. ADDENDUM B, Practice 3 (page 701), white light on a 400 lines/mm
 *      grating. Printed: "m_max = d/lambda_min = 2.5 x 10^-6/(400 x 10^-9) =
 *      6.25, so m = 6 orders visible (orders 0 through 6)." Two faults. The
 *      binding constraint on how many orders of WHITE LIGHT you see is the
 *      LONGEST wavelength, not the shortest: m_max = d/lambda_max =
 *      2500/700 = 3.57, so only three complete spectra appear beyond the
 *      central image, with fragments of orders 4 to 6 in the blue. And
 *      "orders 0 through 6" is seven orders, not six, so the printed sentence
 *      miscounts its own list.
 *   9. ADDENDUM C, Practice 1 (page 704) confuses radians with degrees inside
 *      one line. It correctly computes alpha = pi a sin theta/lambda = 18.3,
 *      which is a number of RADIANS, and then writes "sin 18.3 degrees =
 *      0.314". Working: 18.28 rad reduced modulo 2 pi is 5.714 rad, whose
 *      sine is -0.5397, so I/I_0 = (0.5397/18.28)^2 = 8.7 x 10^-4. The
 *      printed 3 x 10^-4 is three times too small. Recomputing alpha itself:
 *      theta = 0.5 degrees = 8.727 x 10^-3 rad, alpha = pi (0.4 x 10^-3)
 *      (8.727 x 10^-3)/(600 x 10^-9) = 18.28. CORRECT I/I_0 = 8.7 x 10^-4.
 *  10. ADDENDUM E, Example E.2 (page 708) quotes a prism's dispersion as
 *      "|dn/dlambda| approx 1000 cm^-2", which is not a possible unit for
 *      it. n is dimensionless and lambda is a length, so dn/dlambda is a
 *      reciprocal length, cm^-1. The example then divides 982 by 1000 cm^-1
 *      to get t approx 1 cm, which is the right arithmetic under the right
 *      unit, so the printed exponent is a typo rather than a physics error.
 *      Recorded because R = t |dn/dlambda| is the one formula in the whole
 *      addendum whose dimensions a student cannot check against a printed
 *      unit that is wrong.
 *
 * SOURCE DAMAGE. Pages 629 to 708 have their own dialect, narrower than the
 * Class 11 ranges and wider than Chapter 8's. Every passage below was
 * re-authored from context, never transcribed. What this range actually had,
 * checked rather than assumed:
 *
 *   - GREEK AND ITALIC SURVIVE AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), which draws as blank boxes on device and which
 *     validate-chapters rejects outright. 2,950 instances in 80 pages, and
 *     they carry the chapter's whole symbol vocabulary: math-italic n, v, c,
 *     f, d, D, a, t, m, y, I, A, E, R, N, and the Greek lambda, theta, phi,
 *     beta, delta, tau, rho, mu, pi, alpha and nu. Every symbol below is
 *     retyped as an ordinary character inside <i> tags and every Greek letter
 *     as its plain Unicode form.
 *   - THE TOKEN FAMILY, PARTIALLY, and unevenly spread. "\n7" for the minus
 *     sign appears 22 times, "\nN" for the multiplication sign 16 times,
 *     "\nK" for the degree sign 10 times, "\nE" for the implication arrow
 *     once (page 633, "\nE angle i = angle r"), "\no" for the parallel bars
 *     once (page 688, the component E_parallel in the Malus derivation), and
 *     "\tV" for a closing parenthesis twice (pages 667 and 675, both inside a
 *     square root). Checked for and ABSENT: "\nA" (centred dot), "\nC"
 *     (colon), "\nH" (ellipsis), 0 instances of each. Most of the range's
 *     minus signs extract correctly as U+2212 and most multiplication signs
 *     as U+00D7, so this is a localised font fallback rather than a
 *     whole-range substitution: the tokens cluster on pages 638 to 640,
 *     647 to 649, 656 to 659, 667, 675 and 686 to 690.
 *   - ASCII HEADING SHIFTS OF -29, TWICE AND ONLY TWICE. Page 667's
 *     derivation heading reads "6HWXS0" for "Setup." (S 83 to 6 54, e 101 to
 *     H 72, t 116 to W 87, u 117 to X 88, p 112 to S 83; all -29). Page 686
 *     opens a paragraph "$ second route to polarised liJht needs no polaroid
 *     at all" for "A second route to polarised light needs no polaroid at
 *     all" (A 65 to $ 36, g 103 to J 74; both -29). Checked for and ABSENT:
 *     the +29 and +46 shifts the Class 11 Waves range logged, 0 instances.
 *     Both damaged passages were re-authored from their surrounding context;
 *     neither is quoted.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     power of ten, every unit exponent, every y_bright and I_max and
 *     theta_min and rho_m and i_B, and every dimensional formula breaks into
 *     three or four lines: "5 x 10 \n 14 \n Hz" is one number. Recomputing
 *     every numerical answer independently, and re-deriving every printed
 *     formula in the DIMENSIONS ledger below, was the check that these were
 *     rebuilt correctly. Two of them are genuinely ambiguous in the extract
 *     and were resolved by arithmetic rather than by eye: on page 637 the
 *     exponent stack around "5 x 10 14 Hz" (Example 1) and on page 648 a
 *     stranded "-3 -6 ~" trio at the foot of the page, which belongs to the
 *     Pro-Tip's "fractional shifts of 10^-6 to 10^-3" on the FOLLOWING page
 *     and was reunited with it.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout: "at0.5m and
 *     then at5m", "a sharp1mm spot", "the slits are1mm apart", "an aperture
 *     of3mm", "therelativisticDoppler formula", "assumesFraunhofer
 *     diffraction", "anintrinsiccolour". The running head "Wave OpticsDrona
 *     Ed Tech" joins the same way on all 55 body pages, and every table
 *     header row ("Top surfaceBottom surfaceNet half-wave losses") does too.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: U+20D7 combining arrow
 *     (0 instances, because wave optics has no vectors), octal escapes of the
 *     \050 kind (0), Wingdings ticks arriving as bare digits (0; the one tick
 *     in the range, on page 660, extracts as a real U+2713), and leaked LaTeX
 *     delimiters (0).
 *   - NO SILENTLY EMPTY PAGES. All 80 pages from 629 to 708 were measured for
 *     extracted length before any of them was read, and every one carries
 *     content: the shortest are the six "CHAPTER 10 FIGURES" pages (634, 636,
 *     640, 654, 657, 665, 668, 676, 678, 687, 689, 691), each holding one
 *     figure caption and nothing else, and the shortest of those still runs
 *     over 300 characters. No run of blank pages exists, so no pdftoppm
 *     render was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T. Thirty-eight
 * lines checked, thirty-eight consistent, none rejected. Intensity is
 * [M T^-3]; angles, refractive indices and fringe orders are dimensionless.
 *
 *   T1  n = c/v: [L T-1]/[L T-1] = 1. OK, and this is why n has no unit.
 *       sin i/sin r = v1/v2 = n2/n1 = lambda1/lambda2: four dimensionless
 *       ratios set equal, which is the only way the chain can be one
 *       equation. OK.
 *       lambda_med = lambda_vac/n: [L]/1 = [L]. OK.
 *       v = f lambda: [T-1][L] = [L T-1]. OK.
 *       I proportional to 1/r^2 and A proportional to 1/r, with I
 *       proportional to A^2: the third forces the first two to be consistent,
 *       and they are, since (1/r)^2 = 1/r^2. OK.
 *       z_F = a^2/lambda: [L2]/[L] = [L]. OK, a distance, which is the whole
 *       content of the Fresnel distance: aperture squared over wavelength is
 *       the length at which spreading catches up with the aperture.
 *       delta = (n - 1)A: dimensionless times an angle is an angle. OK.
 *       (n - 1)t: 1 x [L] = [L], an extra OPTICAL PATH, which is a length and
 *       not a time. OK.
 *   T2  Df/f = -v_r/c: [T-1]/[T-1] = 1 against [L T-1]/[L T-1] = 1. OK, and
 *       a fractional shift must be dimensionless on both sides or the sign
 *       convention has nothing to attach to.
 *       Dlambda/lambda = +v_r/c: [L]/[L] = 1. OK.
 *       v_r = c Dlambda/lambda: [L T-1] x 1 = [L T-1]. OK. The reciprocal
 *       form, lambda/Dlambda times c, would also be a speed, which is why
 *       this one needs the numerical check as well: a fractional shift of
 *       10^-3 must give 10^-3 c, not 10^3 c.
 *       f' = f sqrt((c - v)/(c + v)): the radicand is [L T-1]/[L T-1] = 1,
 *       so f' is [T-1]. OK.
 *   T3  Dx = d sin theta: [L] x 1 = [L]. OK. Dx = yd/D: [L][L]/[L] = [L]. OK.
 *       phi = (2 pi/lambda) Dx: [L-1][L] = 1, a pure number of radians. OK,
 *       and this is the identity the whole chapter turns on.
 *       y_bright = m lambda D/d: [L][L]/[L] = [L]. OK.
 *       y_dark = (2m - 1) lambda D/(2d): same. OK.
 *       beta = lambda D/d: [L][L]/[L] = [L]. OK, a metre, and the
 *       plausibility check below is what makes it a MILLIMETRE.
 *       theta_beta = beta/D = lambda/d: [L]/[L] = 1, a radian. OK.
 *       I = I1 + I2 + 2 sqrt(I1 I2) cos phi: sqrt([M T-3][M T-3]) =
 *       [M T-3]. OK, so all three terms are intensities and the interference
 *       term can legally be added to the other two.
 *       I = 4 I0 cos^2(phi/2): [M T-3]. OK.
 *       I_max/I_min = ((sqrt(I1) + sqrt(I2))/(sqrt(I1) - sqrt(I2)))^2: a
 *       ratio of intensities, dimensionless. OK.
 *       beta' = beta/n: [L]. OK.
 *   T4  D_path = 2nt cos r: 1 x [L] x 1 = [L]. OK, and 2t cos r would also be
 *       a length, which is why this one needs the physics check rather than
 *       the dimensional one: the n is the difference between geometric and
 *       optical path.
 *       2nt cos r = (m + 1/2) lambda: [L] = [L]. OK.
 *       t_min = lambda/(4 n_coat): [L]/1 = [L]. OK.
 *       n_coat = sqrt(n_glass): sqrt of a dimensionless number. OK.
 *       t = rho^2/(2R): [L2]/[L] = [L]. OK, the sagitta of a shallow arc.
 *       rho_m = sqrt(m lambda R): sqrt([L][L]) = [L]. OK. This is the one
 *       formula in the chapter where dimensions catch the commonest slip:
 *       m lambda R without the root is [L2] and is not a radius.
 *       rho_m = sqrt(m lambda R/n): [L]. OK.
 *   T5  a sin theta = m lambda: [L] = [L]. OK, and identical in form to the
 *       YDSE bright condition, which is exactly why the meaning has to be
 *       carried by the letter and not by the algebra.
 *       theta_1 = lambda/a: [L]/[L] = 1, a radian. OK.
 *       Dtheta = 2 lambda/a: 1. OK.
 *       w = 2 lambda D/a: [L][L]/[L] = [L]. OK, and w = 2 f lambda/a with a
 *       lens is the same line with the focal length in place of D.
 *       z_F = a^2/lambda: [L], as in T1. OK.
 *       theta_min = 1.22 lambda/D_ap: 1, a radian. OK.
 *       d_min = 0.61 lambda/NA: [L]/1 = [L]. OK, since NA = n sin(beta) is
 *       a refractive index times a sine and therefore dimensionless.
 *       Resolving power = 1/theta_min: [1], a pure number per radian, which
 *       is dimensionless. OK.
 *   T6  I = I0/2: [M T-3]. OK.
 *       I = I0 cos^2(theta): [M T-3]. OK, and cos^2 is bounded by 1, so the
 *       output can never exceed the input, which is the check that kills
 *       every "the analyser brightens it" distractor.
 *       tan(i_B) = n: a tangent is dimensionless and so is n. OK, and this is
 *       why Brewster's law can equate an ANGLE's tangent to an INDEX at all.
 *       i_B + r = 90 degrees: angles added to an angle. OK.
 *       P = (I_max - I_min)/(I_max + I_min): [M T-3]/[M T-3] = 1. OK,
 *       bounded between 0 and 1 by construction.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   FRINGE WIDTH COMES OUT IN MILLIMETRES. beta = lambda D/d with the numbers
 *   a school lab actually uses (lambda about 500 to 600 nm, D about 1 m, d
 *   about 0.5 to 1 mm) is 5 x 10^-7 x 1/(5 x 10^-4) = 10^-3 m. Every beta
 *   below lands between 0.25 mm and 1.5 mm, and an answer in metres or in
 *   micrometres would mean a factor of a thousand has gone astray. The
 *   snapshot of Topic 03 states the check in those words.
 *   INTENSITY AT A MAXIMUM IS 4 I0 FOR TWO EQUAL SOURCES, NOT 2 I0, and that
 *   factor is the whole point of interference: amplitudes add, so 2a, and
 *   intensity goes as the square, so 4 I0. The AVERAGE over the pattern is
 *   2 I0, which is the sum of the two sources acting alone, so nothing has
 *   been created. Topic 03 derives both numbers and its figure draws the
 *   4 I0 ceiling as a tick on the intensity axis.
 *   CROSSED POLARISERS PASS NOTHING. Malus's law gives I0 cos^2(90 degrees)
 *   = 0 exactly, not "nearly zero", for ideal polaroids. Topic 06's figure
 *   has the crossed case as its third chip and the plot's own zero at 90
 *   degrees is the same fact read off an axis.
 *   AR COATINGS AND THIN BRIGHT FILMS COME OUT NEAR 100 nm. t = lambda/(4n)
 *   with lambda about 550 nm and n about 1.4 is about 100 nm, a quarter of a
 *   wavelength, and Topic 04's protip uses that as the sanity anchor: an
 *   answer in micrometres or millimetres for a thin film is wrong.
 *   NEWTON'S RING RADII COME OUT IN MILLIMETRES. rho = sqrt(m lambda R) with
 *   m about 10, lambda about 600 nm and R about 1 m is sqrt(6 x 10^-6) =
 *   2.4 mm, which is what a travelling microscope measures.
 *   RAYLEIGH ANGLES COME OUT IN MICRORADIANS. 1.22 lambda/D with lambda about
 *   550 nm and D about 0.1 m is about 7 x 10^-6 rad, roughly one and a half
 *   arc-seconds, which is why atmospheric seeing and not diffraction limits
 *   a small telescope.
 *   DOPPLER SHIFTS FOR STARS ARE 10^-6 TO 10^-3 OF THE WAVELENGTH. Every
 *   fractional shift below sits in that window, and Topic 02's protip says
 *   outright that a fractional shift near 1 means an error rather than
 *   relativistic astrophysics.
 *   VISIBLE LIGHT RUNS 400 TO 700 nm and sodium light is 589 nm. Both are
 *   used as anchors and nothing below contradicts either.
 *
 * LIMITING CASES, used where they teach something.
 *   AS THE SLIT SEPARATION GOES TO ZERO, THE DOUBLE-SLIT PATTERN VANISHES.
 *   beta = lambda D/d grows without bound as d goes to 0, so the first bright
 *   fringe runs off the screen and what remains is a single uniformly lit
 *   patch: two slits on top of each other are one slit, and one slit has
 *   nothing to interfere with. Topic 03's MCQ on doubling d and halving D is
 *   the same dependence read in the other direction, and its `mistakes` names
 *   the trap of expecting the two changes to cancel.
 *   AS THE SLIT WIDENS, SINGLE-SLIT DIFFRACTION BECOMES RAY OPTICS. The
 *   angular half-width theta_1 = lambda/a goes to zero as a grows, the
 *   central maximum w = 2 lambda D/a collapses onto the geometric image of
 *   the slit, and z_F = a^2/lambda runs away to infinity so that every real
 *   screen is in the ray-optics regime. That is not an approximation bolted
 *   on afterwards: it is the same formula at a different scale, and it is why
 *   a doorway does not diffract light while it does diffract sound. Topic
 *   05's Example 2 is this limit read backwards (halve a and the central
 *   maximum DOUBLES) and its protip states the ratio lambda/a as the single
 *   quantity that decides which regime you are in.
 *   AT ZERO FILM THICKNESS THE REFLECTION IS DARK, NOT BRIGHT. 2nt cos r goes
 *   to 0, but the half-wave loss at the top surface does not, so the two
 *   reflected beams stay exactly lambda/2 out of step for every wavelength at
 *   once: a soap film thins to black just before it pops, and the centre of
 *   a Newton's rings pattern is a dark spot. Both are the same limit, and
 *   Topic 04 uses them as each other's check.
 *   AT theta = 0 AND theta = 90 DEGREES MALUS'S LAW GIVES BACK ITS OWN
 *   ENDPOINTS. cos^2(0) = 1 is full transmission and cos^2(90 degrees) = 0 is
 *   a total block, so the law contains the parallel and crossed cases rather
 *   than needing them stated separately. Averaging cos^2 over all angles
 *   gives 1/2, which IS the I0/2 rule for unpolarised light entering the
 *   first polaroid, so the two formulas in Topic 06 are one formula.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-11-14-waves.ts, Topic 02 ("Superposition, Interference and Beats"),
 *     whose own header says its interference toolkit is ready to be quoted.
 *     It is quoted rather than rebuilt, by name, in three places:
 *       * Its `formula` "THE BRIGHTEST AND DARKEST POINTS", which carries
 *         I_max = (sqrt(I1) + sqrt(I2))^2, I_min = (sqrt(I1) - sqrt(I2))^2
 *         and the constructive and destructive conditions. Topic 03's
 *         contrast `formula` states the ratio and cites that chapter instead
 *         of re-deriving it, and Topic 03's practice items on unequal slits
 *         use it directly.
 *       * Its phi = (2 pi/lambda) Dx, the path-to-phase bridge, which that
 *         chapter's `defgrid` glosses as "dimensionless from [L^-1][L]".
 *         Topic 01 declares the relationship ONCE below, in the form that
 *         chapter fixed, and Topics 03 to 05 hold it without restating it.
 *       * Its `def` of coherence, "same frequency and a constant phase
 *         relationship, required for a STEADY pattern", and its observation
 *         that two ordinary bulbs reshuffle their phase billions of times a
 *         second. Topic 03's coherence paragraph quotes that sentence as
 *         established and spends its own words on the thing the sound chapter
 *         could not need: how Young MANUFACTURED coherence from one source.
 *       * Its `formula` "RESULTANT AMPLITUDE AND INTENSITY", I = I1 + I2 +
 *         2 sqrt(I1 I2) cos phi. Topic 03 states it once as the general case
 *         and then specialises to equal sources; the general form is not
 *         re-derived.
 *     Also quoted, from that chapter's Topic 01: v = f lambda with the
 *     reading that frequency belongs to the SOURCE and speed to the MEDIUM.
 *     Topic 01's refraction `formula` cites it by name, and the whole
 *     "frequency is unchanged, wavelength shrinks" result rests on it.
 *     Its Topic 05 (Doppler for sound) is cited in Topic 02 for the
 *     approaching-and-receding picture and deliberately NOT reused for the
 *     formula, because the sound result depends on motion relative to the
 *     MEDIUM and the light result cannot: Topic 02's second paragraph says
 *     exactly that, and it is the one place the two chapters must differ.
 *   - phy-12-08-electromagnetic-waves.ts, quoted rather than restated:
 *       * Its Topic 03 result that light IS an electromagnetic wave, that E
 *         and B are perpendicular to the direction of travel, and that the
 *         wave is therefore TRANSVERSE. Topic 06's opening rests entirely on
 *         this: polarisation is presented as the experiment that CONFIRMS
 *         the transverse nature, which is only a meaningful claim if the
 *         transverse nature was already asserted somewhere else, and it was.
 *       * Its c = 1/sqrt(mu0 eps0) = 3 x 10^8 m/s, used as the numerical
 *         value of c throughout and never re-derived.
 *       * Its Topic 04 spectrum, and specifically the visible band at 400 to
 *         700 nm. Topic 03's white-light fringe discussion and Topic 05's
 *         grating paragraph both cite that band rather than re-stating its
 *         limits.
 *       * Its Addendum C material on Malus and Brewster is NOT quoted, and
 *         the reason is recorded: that chapter's own header logs an error in
 *         it (Example C.4(b) claims a transmission larger than what reaches
 *         the polariser), and this chapter derives both laws from scratch
 *         from its own Subtopic 06, which is where they belong.
 *   - phy-12-09-ray-optics: NOT quoted, and checked twice. On the first check
 *     content/textbooks held no ray-optics file and lib/textbooks.ts carried
 *     no such key. On the second, after Topic 05 was written, still none was
 *     registered, though the brief says one is being written concurrently and
 *     is exercising FigureOptics for the first time. Topic 01 therefore names
 *     ray optics as "the chapter before this one" without quoting a line of
 *     it, and states the three facts it needs inline: that a ray is an arrow,
 *     that a lens fed from its focus emits a parallel beam, and that a thin
 *     prism deviates by (n - 1)A. Those are the exact three places a
 *     quotation should replace an inline statement once that sibling lands
 *     and registers, and nothing else below depends on ray optics at all.
 *   - Chapter 11, Dual Nature, is pre-loaded rather than quoted: Topic 05's
 *     closing paragraph names electron microscopy as the place the lambda in
 *     d_min = 0.61 lambda/NA stops being an optical wavelength. The source
 *     does the same and the flag is worth keeping.
 *
 * FOURTEEN FIGURES: 12 DRAWN OF THE 12 THE SOURCE NAMES, PLUS 6 DESIGNED
 * HERE, in fourteen `diagram` blocks (several named figures share a block as
 * two chips, which is the panel rule doing its job rather than a shortcut).
 * The twelve named, all drawn:
 *   10.1 reflection from Huygens' construction and 10.2 refraction from it
 *     are the two chips of Topic 01's second figure. They are the SAME
 *     construction with one thing changed (the wavelet grows at v2 instead of
 *     v1), and a student who flips the chip watches the tangent tilt the
 *     other way. Two panels would have been two 150pt pictures of nearly the
 *     same triangle.
 *   10.3 the thin prism tilting a plane wavefront is Topic 01's third figure,
 *     two chips: the two glass thicknesses, then the emergent wavefront
 *     tilted by delta.
 *   10.4 the Young's double-slit setup and 10.5 the path-difference geometry
 *     are the two chips of Topic 03's first figure: the apparatus, then the
 *     triangle inside it that produces d sin(theta).
 *   10.6 the two reflected beams from a thin film and 10.7 the geometry that
 *     turns them into 2nt cos r are the two chips of Topic 04's first figure.
 *   10.8 the single-slit setup with its wide central maximum and 10.9 the
 *     half-slit pairing argument are Topic 05's first two figures, two chips
 *     each.
 *   10.10 the two polaroids and 10.11 the resolution of E0 into a transmitted
 *     and an absorbed component are the three chips of Topic 06's first
 *     figure (parallel, at theta with the resolution drawn, crossed).
 *   10.12 the Brewster geometry with reflected perpendicular to refracted is
 *     Topic 06's second figure, two chips.
 * The six designed here, and why each earns its space:
 *   T1  wavefront shapes, three chips: spherical from a point source, plane,
 *       and the same spherical front flattening as it recedes. The source
 *       asserts "far enough away it is effectively flat" and never shows it;
 *       chip 3 draws three fronts from one source and the third is visibly
 *       straight, which is an argument rather than a claim.
 *   T2  the spectral line on a wavelength scale, three chips: laboratory,
 *       redshifted, blueshifted. A `numberline` because a Doppler shift IS a
 *       position on a wavelength axis, and because drawing it that way makes
 *       "longer wavelength means red" a direction rather than a mnemonic.
 *   T3  the intensity pattern, two chips: equal slits reaching 4 I0 and
 *       returning to exactly zero, then unequal slits whose minima never
 *       reach zero. THE AXES CARRY LABELS AND TICKS, because an intensity
 *       graph without them is just a bump: y is ticked at 0, 2 I0 and 4 I0
 *       and x at the fringe positions in units of beta, so the fringe width
 *       is a measurable distance on the picture.
 *   T4  Newton's rings, two chips: the air wedge in cross-section with
 *       t = rho^2/2R, then the rings from above with the dark centre. The
 *       dark centre is the chapter's cleanest limiting case and it is a
 *       picture.
 *   T5  interference against diffraction, two chips, and THIS IS THE PANEL
 *       RULE'S HARDEST CASE IN THE CHAPTER. The contrast is the point, so
 *       the temptation is two panels side by side; at 316pt that is two 150pt
 *       plots and neither is readable. As two chips on ONE pair of axes with
 *       the same x-scale, a student taps and watches the equal-height fringes
 *       become a bright centre with weak wings, which is the comparison the
 *       source spends a table on.
 *   T6  Malus's law as a curve, two chips: I/I0 against theta over 0 to 180
 *       degrees, then the same curve with the parallel, half and crossed
 *       points marked. cos^2 is a named PlotCurve (a cosine of half
 *       amplitude, doubled frequency, lifted by half), so the shape is exact
 *       by construction rather than by hand.
 * FigureOptics WAS CONSIDERED AND IS NOT USED, and the brief asks what it
 * lacks, so: it lacks the two elements this chapter draws most. Its `element`
 * vocabulary is convexLens, concaveLens, concaveMirror and convexMirror, and
 * every Huygens construction in Topic 01 needs a PLANE MIRROR or a PLANE
 * REFRACTING INTERFACE, neither of which it can name. It also has no
 * wavefront: it draws rays and solves for an image, where this chapter needs
 * the surface the rays are perpendicular to and needs to draw a secondary
 * wavelet as a semicircle tangent to it. The one place it would have fitted
 * exactly is Topic 01's Example 2, a point source AT the focus of a convex
 * lens, and that is precisely the case its solver cannot express: u = -f puts
 * the image at infinity, so `f: 1, object: { u: -1 }` asks the renderer for
 * 1/v = 0. THREE REQUESTS, in the order they would help: (1) `element:
 * 'planeMirror' | 'planeInterface'` with an `n2` for the second medium, which
 * would draw Figures 10.1, 10.2 and 10.12 between them; (2) a `wavefronts`
 * flag that draws the surfaces perpendicular to the rays it already computes;
 * (3) a documented behaviour for an object at the focus, since "parallel beam
 * out" is the single most-drawn lens diagram in Class 12 and it is the one
 * the lens equation cannot return a number for.
 * RENDERER FACTS HONOURED, each one of which was live while drawing this:
 *   - `flow` box text is plain SVG with NO markup and must fit its row. No
 *     `flow` figure appears below at all: every schematic this chapter wanted
 *     was a scene with real geometry, not a box-and-arrow chain.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, so nothing below is
 *     hatched except through `bodies` of kind "ground" and "wall", which
 *     place their own hatching on the fixed edge. The mirror in Figure 10.1,
 *     the interface in 10.2, the two slit barriers in 10.4 and 10.8 and the
 *     glass block in 10.12 are all `bodies`.
 *   - A point label defaults to north-east, which is wrong wherever a line
 *     LEAVES the point that way. Figure 10.1's D carries at: "nw" because
 *     both AD and CD leave it to the south, and B sits only 15 px away with
 *     its own label to the north-east; Figure 10.5's P carries at: "nw"
 *     because the screen runs up and to the north-east of it.
 *   - A `circle` curve is round only when both axes carry the same pixels per
 *     unit. NO `circle` curve appears below. Every secondary wavelet, every
 *     Newton's ring and every spreading wavefront is an `arc`, which takes
 *     its radius from the x-scale and is drawn with cos and sin in screen
 *     space, so it stays round whatever the axes do. Full-circle arcs
 *     degenerate, so each Newton's ring is TWO half-arcs, 0 to 180 and 180 to
 *     360. Where the scene also had to be metrically honest (the reflection
 *     and refraction constructions, where a tangent must actually touch a
 *     wavelet) the window and aspect were chosen to make pixels-per-unit
 *     equal on both axes: x span 5.6 over 288 px is 51.43, and y span 3.7
 *     over 190 px is 51.4.
 *   - Two collinear strokes read as one line. The slit barriers below are
 *     `bodies` rather than a `segments` pair, the screens are single `polys`
 *     edges, and Figure 10.5's two paths S1P and S2P are drawn from genuinely
 *     different slit positions so they diverge rather than doubling up.
 *   - A horizontal arrow's at: "above" label lands BELOW the shaft when the
 *     arrow points left. Only one leftward arrow appears below, the "lags"
 *     annotation in Figure 10.3's second chip, and it carries at: "below" so
 *     that its label reads above its own shaft.
 *   - `check-figures` inspects only `plot`, `numberline` and `flow`. Every
 *     figure below is one of the first two, so nothing needed hand-placing
 *     against the renderer's arithmetic.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12WaveOptics: Chapter = {
  "chapter": "10",
  "title": "Wave Optics",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Wavefronts and Huygens' Principle",
      "chip": "01 THE FRONT",
      "kalam": "forget the source: every point on a wave is a fresh source",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Wavefronts and Huygens' Principle</b><br>The conceptual gateway to the whole chapter. CBSE Boards almost always carry a 2 to 3 mark item here, usually define a wavefront, state Huygens' principle, or a full 3-mark derivation of the law of refraction. JEE Main typically asks one conceptual question on wavefront shape or on which law follows from Huygens. NEET keeps it short: a one-mark fact about wavefront types or the validity of the construction. JEE Advanced rarely asks it directly but leans on it for atmospheric refraction and tilted-wavefront reasoning.<br><br><b>02 · The Doppler Effect of Light</b><br>CBSE Boards ask the definition, the redshift and blueshift idea, and the fractional-shift formula, worth 1 to 2 marks. JEE Main occasionally sets a one-step numerical: find the recession speed from a measured shift. NEET asks it rarely, usually as a one-line concept. JEE Advanced may fold it into an astrophysics-flavoured problem such as stellar rotation.<br><br><b>03 · Interference of Light and Young's Double-Slit Experiment</b><br>The single most heavily examined topic in the chapter. CBSE Boards almost guarantee a 3 to 5 mark derivation of fringe width plus a numerical. JEE Main asks one or two questions every year: fringe width, intensity ratios, the glass-plate shift, or two-wavelength coincidence. NEET typically asks one direct numerical or a coherence MCQ. JEE Advanced layers it with intensity distribution, unequal slits and shifted patterns.<br><br><b>04 · Thin-Film Interference</b><br>CBSE Boards treat this mostly qualitatively: why do soap bubbles and oil films show colours, for 1 to 2 marks. JEE Main regularly sets numericals on film thickness, anti-reflection coatings and Newton's rings. JEE Advanced layers in the half-wave loss, wedge films and liquid-filled rings. NEET asks it rarely.<br><br><b>05 · Diffraction of Light</b><br>CBSE Boards regularly ask the single-slit minima derivation and the width of the central maximum, worth 3 to 5 marks. JEE Main asks one or two questions on central-maximum width, missing orders, or resolving power. NEET typically asks one conceptual MCQ on Fresnel against Fraunhofer or on the minima condition. JEE Advanced layers it with intensity, resolving limits and diffraction-interference combinations.<br><br><b>06 · Polarisation of Light</b><br>CBSE Boards ask Malus's law, Brewster's law, and why polarisation is evidence for the transverse nature of light, for 2 to 3 marks. JEE Main asks one numerical most years on two or three polaroids or on the Brewster angle. NEET favours the conceptual MCQ: transverse-only polarisation, or the half-intensity rule. JEE Advanced layers multiple polaroids with an optimisation."
        },
        {
          "t": "p",
          "html": "Everything you did in the chapter before this one was drawn with <b>arrows</b>. A ray hits a mirror, a ray bends at a lens, and you track where the arrows go. That works, and it built every image you have ever computed. But it cannot tell you why a soap bubble is coloured, why a CD throws a rainbow, or why two identical slits produce a screen full of dark bands. For those you need the object the arrow is only pointing at.<br><br>That object is the <b>wavefront</b>, and this chapter is written in wavefronts rather than rays. The two are not rivals; they are two languages for the same thing. Ray optics tracks the arrows, wave optics tracks the surfaces, and every result you already own can be re-derived in the new language. What the new language adds is everything the old one could not say."
        },
        {
          "t": "p",
          "html": "Start with a picture you have seen. Drop a stone into a still village pond and a circular ridge spreads outward. Every point on that ridge started moving at the same instant and is therefore doing the same thing at the same time: all rising together, all at their highest together, all crossing zero together. That ridge is a wavefront made visible.<br><br>Or freeze the crowd at a packed IPL final doing the Mexican wave. One section stands, sits, then the next section stands, and a visible band of standing people sweeps around the stadium. Draw a line through everyone who is, at this exact instant, fully standing. That line is a snapshot of the disturbance, and it is the cleanest mental model of a wavefront you will get.<br><br>The word that matters is <b>phase</b>. A wavefront is not the set of points that are moving, and it is not the set of points at the same distance. It is the set of points at the same <i>stage of their oscillation cycle</i>."
        },
        {
          "t": "def",
          "term": "Wavefront, and the ray that crosses it",
          "html": "A <b>wavefront</b> is the locus of all points of a medium that are vibrating <b>in the same phase</b> at a given instant. A <b>ray</b> is a line drawn perpendicular to the wavefront, pointing in the direction the wavefront advances, and it is the direction along which energy travels.<br><br>Wavefronts and rays are always mutually perpendicular. For a spherical wavefront the rays are the radii shooting outward; for a plane wavefront the rays are a parallel beam."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WAVEFRONT SHAPES, AND WHY DISTANCE FLATTENS THEM",
          "chips": ["spherical", "plane", "far is flat"],
          "captions": [
            "A tiny point source S sends its disturbance out equally in every direction, so the points that share a phase lie on a sphere. Three of those spheres are drawn, one for each successive crest, and the arrows are rays: they leave S along the radii, and every one of them crosses every wavefront at a right angle. A long thin source, a glowing tube-light filament or a narrow slit, gives the same circles in this cross-section but stacked along the length of the source, which makes the surface a cylinder rather than a sphere. That is a cylindrical wavefront, and the cross-section you are looking at cannot tell the two apart, which is exactly why the source shape has to be stated rather than seen.",
            "A plane wavefront: the surfaces of constant phase are flat parallel planes, and the rays are a parallel beam crossing them at right angles. This is the wavefront every derivation in the chapter starts from, and it is what a laser pointer or a distant star delivers.",
            "Where the plane wavefront comes from. Three wavefronts from the same source S, at increasing distance. Near S the front is sharply curved. Further out the same amount of curvature is spread over a much bigger circle, so the patch of it that reaches you sags less and less. The dashed box is the piece you actually see, and across that width the outermost front is straight to within a fraction of a wavelength. It is the same reason the horizon of the Arabian Sea looks like a straight edge even though the Earth is a ball, and the reason sunlight arriving on your terrace is treated as a plane wave even though the Sun is a sphere 150 million km across."
          ],
          "frames": [
            {
              "x": [-4, 4], "y": [-3, 3], "axes": "none", "aspect": 0.753,
              "arcs": [
                { "at": [0, 0], "r": 1, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 1, "from": 180, "to": 360, "tone": "ink" },
                { "at": [0, 0], "r": 1.75, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 1.75, "from": 180, "to": 360, "tone": "ink" },
                { "at": [0, 0], "r": 2.5, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 2.5, "from": 180, "to": 360, "tone": "ink" }
              ],
              "arrows": [
                { "from": [0.25, 0.433], "to": [1.5, 2.598], "tone": "amber", "label": "ray", "at": "end" },
                { "from": [-0.5, 0], "to": [-3.2, 0], "tone": "amber" },
                { "from": [0.25, -0.433], "to": [1.5, -2.598], "tone": "amber" }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "S" }
              ]
            },
            {
              "x": [-4, 4], "y": [-3, 3], "axes": "none", "aspect": 0.753,
              "polys": [
                { "pts": [[-2.4, -2.7], [-2.4, 2.7]], "tone": "ink" },
                { "pts": [[-1.2, -2.7], [-1.2, 2.7]], "tone": "ink" },
                { "pts": [[0, -2.7], [0, 2.7]], "tone": "ink" },
                { "pts": [[1.2, -2.7], [1.2, 2.7]], "tone": "ink" },
                { "pts": [[2.4, -2.7], [2.4, 2.7]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [-3.4, 1.7], "to": [3.4, 1.7], "tone": "amber", "label": "ray", "at": "above" },
                { "from": [-3.4, -1.7], "to": [3.4, -1.7], "tone": "amber" }
              ]
            },
            {
              "x": [-4, 4], "y": [-3, 3], "axes": "none", "aspect": 0.753,
              "polys": [
                { "pts": [[-2.724, 1.45], [-2.234, 1.13], [-1.938, 0.76], [-1.812, 0.28], [-1.8, 0], [-1.812, -0.28], [-1.938, -0.76], [-2.234, -1.13], [-2.724, -1.45]], "smooth": true, "tone": "ink" },
                { "pts": [[-0.549, 1.453], [0.011, 1.093], [0.322, 0.71], [0.474, 0.29], [0.5, 0], [0.474, -0.29], [0.322, -0.71], [0.011, -1.093], [-0.549, -1.453]], "smooth": true, "tone": "ink" },
                { "pts": [[1.166, 1.483], [1.275, 1.113], [1.343, 0.735], [1.383, 0.36], [1.4, 0], [1.383, -0.36], [1.343, -0.735], [1.275, -1.113], [1.166, -1.483]], "smooth": true, "tone": "ink" },
                { "pts": [[0.85, -1.9], [1.75, -1.9], [1.75, 1.9], [0.85, 1.9], [0.85, -1.9]], "tone": "amber", "dash": true }
              ],
              "marks": [
                { "x": -3.4, "y": 0, "glyph": "dot", "label": "S" }
              ],
              "labels": [
                { "x": 1.3, "y": 2.45, "text": "flat, near enough" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "how does a wavefront <b>know</b> where to go next? in 1678 christiaan huygens gave a startlingly simple answer: forget the source. once a wavefront exists, every single point on it becomes a fresh little source of its own tiny spherical wave, a secondary wavelet, and all of these crawl forward at the wave's own speed. a tick of time later, draw the surface that just touches all of them, and that surface is the new wavefront. it is the stadium wave again, where each standing person is what nudges their neighbour to stand. the frontier keeps regenerating itself, point by point, with no memory of where the stone fell."
        },
        {
          "t": "def",
          "term": "Huygens' principle",
          "html": "Every point on a wavefront acts as a <b>secondary source</b> of spherical wavelets, which spread out in the forward direction at the speed of the wave in that medium. After a time τ, the new wavefront is the <b>envelope</b> of all these wavelets: the common surface that just touches every one of them.<br><br>Each wavelet has radius <i>v</i>τ, where <i>v</i> is the wave speed in the medium. That single sentence is the whole construction, and both laws below fall out of it with nothing but geometry."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · REFRACTIVE INDEX, AND WHAT LIGHT DOES IN A MEDIUM",
          "main": "<i>n</i> = <i>c</i>/<i>v</i><br>λ<sub>medium</sub> = λ<sub>vacuum</sub>/<i>n</i> · <i>f</i><sub>medium</sub> = <i>f</i><sub>vacuum</sub>",
          "legend": [
            "<i>n</i> = refractive index of the medium, a pure number with no unit, dimensions [M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>]",
            "<i>c</i> = speed of light in vacuum = 3 × 10<sup>8</sup> m/s; <i>v</i> = speed of light in the medium (m/s)",
            "λ = wavelength (m), quoted in nanometres for light; <i>f</i> = frequency (Hz), dimensions [T<sup>−1</sup>]"
          ],
          "note": "The source sets the frequency and the medium can only rescale the wavelength. That sentence is Waves, Topic 01, quoted rather than re-derived: v = fλ with f belonging to the source and v to the medium. Since v drops in a denser medium and f cannot change, λ has no choice but to shrink."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SNELL CHAIN",
          "tag": "one equation, four ratios",
          "main": "sin <i>i</i> / sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = λ<sub>1</sub>/λ<sub>2</sub><br><i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>",
          "legend": [
            "<i>i</i> = angle of incidence, <i>r</i> = angle of refraction, both measured from the normal (degrees or radians, dimensionless)",
            "<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> = wave speeds in the two media (m/s); <i>n</i><sub>1</sub>, <i>n</i><sub>2</sub> = their refractive indices (no unit)",
            "λ<sub>1</sub>, λ<sub>2</sub> = the wavelengths in the two media (m). Every ratio here is dimensionless, which is why they can all be set equal"
          ],
          "note": "Give a problem any one of these four ratios and you instantly have the other three. Memorise it as \"big n, small everything else\": a bigger index means a slower speed, a shorter wavelength, and a smaller angle from the normal."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 10.1 AND 10.2 · ONE CONSTRUCTION, TWO LAWS",
          "chips": ["reflection", "refraction"],
          "captions": [
            "Figure 10.1. A plane wavefront AB comes down from the upper left onto a plane mirror. A has just touched the surface; B still has a distance to fall. Let τ be the time B takes to reach the mirror at C, so BC = vτ. In that same τ, the wavelet A launched the instant it touched has grown into the semicircle drawn, of radius AD = vτ, because it spreads at the same speed in the same medium. Draw the tangent from C to that wavelet and you have the reflected wavefront CD, with AD perpendicular to CD because a radius meets a tangent at a right angle. Triangles ABC and ADC share the hypotenuse AC and have BC = AD, so they are congruent, so the angle i at A equals the angle r at C. That is the law of reflection, and nothing was assumed except that the wavelet grows at the wave's own speed.",
            "Figure 10.2. The same picture with one thing changed, and all of refraction comes from that one thing. Below the interface the medium is denser, so light travels there at v2, slower than v1. B still falls to C in time τ, so BC = v1τ exactly as before. But the wavelet A launched into the second medium has had the same time to grow at the SMALLER speed, so its radius is only AE = v2τ. The tangent CE from C is therefore tilted more steeply: the refracted wavefront has bent toward the normal. Read the two right triangles that share AC and you get sin i = v1τ/AC and sin r = v2τ/AC, and dividing gives sin i / sin r = v1/v2 = n2/n1."
          ],
          "frames": [
            {
              "x": [-2.8, 2.8], "y": [-1.5, 2.2], "axes": "none", "aspect": 0.67,
              "bodies": [
                { "kind": "ground", "at": [0, -0.25], "w": 5.4, "h": 0.5 }
              ],
              "arcs": [
                { "at": [-1.2, 0], "r": 1.543, "from": 0, "to": 180, "tone": "soft" },
                { "at": [-1.2, 0], "r": 0.62, "from": 0, "to": 40, "label": "i", "tone": "amber" },
                { "at": [1.2, 0], "r": 0.62, "from": 140, "to": 180, "label": "r", "tone": "amber" }
              ],
              "segments": [
                { "from": [-1.2, 0], "to": [0.209, 1.182] },
                { "from": [0.209, 1.182], "to": [1.2, 0], "label": "vτ", "at": "mid" },
                { "from": [-1.2, 0], "to": [-0.209, 1.182], "label": "vτ", "at": "mid" },
                { "from": [1.2, 0], "to": [-0.209, 1.182] },
                { "from": [-1.2, 0], "to": [-1.2, 1.55], "dash": true, "soft": true, "label": "N", "at": "end" }
              ],
              "arrows": [
                { "from": [-2.1, 1.072], "to": [-1.2, 0], "tone": "amber" },
                { "from": [1.2, 0], "to": [2.1, 1.072], "tone": "amber" }
              ],
              "points": [
                { "x": -1.2, "y": 0, "label": "A", "at": "sw" },
                { "x": 0.209, "y": 1.182, "label": "B", "at": "ne" },
                { "x": 1.2, "y": 0, "label": "C", "at": "se" },
                { "x": -0.209, "y": 1.182, "label": "D", "at": "nw" }
              ]
            },
            {
              "x": [-2.8, 2.8], "y": [-1.5, 2.2], "axes": "none", "aspect": 0.67,
              "polys": [
                { "pts": [[-2.7, 0], [2.7, 0]], "tone": "ink" },
                { "pts": [[-2.7, -1.45], [2.7, -1.45], [2.7, 0], [-2.7, 0], [-2.7, -1.45]], "fill": "wash", "tone": "soft" }
              ],
              "arcs": [
                { "at": [-1.2, 0], "r": 1.028, "from": 180, "to": 360, "tone": "soft" },
                { "at": [-1.2, 0], "r": 0.62, "from": 0, "to": 40, "label": "i", "tone": "amber" },
                { "at": [1.2, 0], "r": 0.62, "from": 180, "to": 205.4, "label": "r", "tone": "amber" }
              ],
              "segments": [
                { "from": [-1.2, 0], "to": [0.209, 1.182] },
                { "from": [0.209, 1.182], "to": [1.2, 0], "label": "v1τ", "at": "mid" },
                { "from": [-1.2, 0], "to": [-0.759, -0.929], "label": "v2τ", "at": "mid" },
                { "from": [1.2, 0], "to": [-0.759, -0.929] },
                { "from": [-1.2, 0], "to": [-1.2, 1.55], "dash": true, "soft": true, "label": "N", "at": "end" }
              ],
              "arrows": [
                { "from": [-2.1, 1.072], "to": [-1.2, 0], "tone": "amber" },
                { "from": [1.2, 0], "to": [1.757, -1.175], "tone": "amber" }
              ],
              "points": [
                { "x": 0.209, "y": 1.182, "label": "B", "at": "ne" },
                { "x": 1.2, "y": 0, "label": "C", "at": "ne" },
                { "x": -0.759, "y": -0.929, "label": "E", "at": "sw" }
              ],
              "labels": [
                { "x": -1.95, "y": -0.72, "text": "denser, slower" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE LAWS OF REFLECTION FROM HUYGENS",
          "steps": [
            { "eq": "BC = <i>v</i>τ", "why": "A plane wavefront AB travels at speed <i>v</i> in one homogeneous medium and meets a plane mirror. A touches first; B is still a distance away. Let τ be the time B takes to reach the surface at C. B simply keeps advancing at the wave speed for that time, so it covers <i>v</i>τ." },
            { "eq": "AD = <i>v</i>τ", "why": "The instant A touched the mirror it began throwing out a secondary wavelet back into the same medium. After the same time τ, at the same speed <i>v</i>, that wavelet is a semicircle of radius <i>v</i>τ centred on A. Same time, same speed, same distance: this is the only fact the whole derivation needs." },
            { "eq": "CD is the tangent from C, and AD ⊥ CD", "why": "The new wavefront is the envelope of the wavelets, so from C draw the tangent to the wavelet centred at A. Because a radius meets a tangent at a right angle, AD is perpendicular to CD. CD is the reflected wavefront." },
            { "eq": "△ABC and △ADC are congruent", "why": "Both are right-angled, at B and at D respectively. They share the hypotenuse AC. And BC = AD = <i>v</i>τ from the two steps above. Right angle, hypotenuse, side: the triangles are congruent." },
            { "eq": "sin <i>i</i> = BC/AC and sin <i>r</i> = AD/AC", "why": "The angle of incidence <i>i</i> is the angle ∠BAC between the incident wavefront and the surface, and the angle of reflection <i>r</i> is ∠DCA between the reflected wavefront and the surface. Each is the opposite side over the shared hypotenuse." },
            { "eq": "∠<i>i</i> = ∠<i>r</i>", "why": "Both sines equal <i>v</i>τ/AC, so the angles are equal. The incident ray, the reflected ray and the normal all lie in the plane of the page, which is the second law of reflection. Both laws, from one wavelet." }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · SNELL'S LAW FROM HUYGENS",
          "steps": [
            { "eq": "BC = <i>v</i><sub>1</sub>τ", "why": "A plane wavefront AB in medium 1, where the speed is <i>v</i><sub>1</sub>, is incident at angle <i>i</i> on the interface. A reaches the interface first; let τ be the time B needs to reach it at C. Nothing new here: this step is identical to the reflection case." },
            { "eq": "AE = <i>v</i><sub>2</sub>τ", "why": "THE ONE DIFFERENCE, AND ALL OF REFRACTION IS IN IT. The moment A entered medium 2, it began radiating a wavelet there, and in medium 2 the speed is <i>v</i><sub>2</sub>, not <i>v</i><sub>1</sub>. Same time τ, different speed, so a different radius." },
            { "eq": "CE is the tangent from C, and AE ⊥ CE", "why": "The refracted wavefront is again the envelope: draw the tangent CE from C to the wavelet centred at A. Radius meets tangent at a right angle, so AE ⊥ CE." },
            { "eq": "sin <i>i</i> = <i>v</i><sub>1</sub>τ/AC · sin <i>r</i> = <i>v</i><sub>2</sub>τ/AC", "why": "Right triangle ABC has its right angle at B and its angle at A equal to <i>i</i>; right triangle AEC has its right angle at E and its angle at C equal to <i>r</i>. Both share the hypotenuse AC, so each sine is its own opposite side over AC." },
            { "eq": "sin <i>i</i> / sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>", "why": "Divide the two lines. Both τ and AC cancel, which is why the result does not depend on how far apart the slits, the mirror or the observer happen to be." },
            { "eq": "sin <i>i</i> / sin <i>r</i> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>, so <i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>", "why": "Substitute <i>v</i><sub>1</sub> = <i>c</i>/<i>n</i><sub>1</sub> and <i>v</i><sub>2</sub> = <i>c</i>/<i>n</i><sub>2</sub>. The <i>c</i> cancels and Snell's law drops out of a construction that knew nothing about it." }
          ]
        },
        {
          "t": "p",
          "html": "Look at what that last derivation actually claimed. If medium 2 is denser, so <i>n</i><sub>2</sub> > <i>n</i><sub>1</sub>, then <i>v</i><sub>2</sub> < <i>v</i><sub>1</sub>, so sin <i>r</i> < sin <i>i</i> and the ray bends toward the normal. Which means the wave picture predicts that <b>light slows down in glass</b>.<br><br>Newton's rival corpuscular theory predicted the exact opposite: little particles pulled into the denser medium would speed up. For a century and a half nobody could measure light's speed in water well enough to decide. In 1850 Foucault did, found light slower in water, and settled the argument in favour of waves. This is the rare case where two theories made numerically opposite predictions about one measurement, and the measurement was made.<br><br>Huygens' construction is powerful but it is not perfect, and exams probe exactly where it breaks. It is a purely <b>geometrical</b> rule: it tells you correctly where the new wavefront sits and which way the wave travels, but in its raw 1678 form it does not predict how <i>bright</i> each part of the front is, which needed Fresnel's and Kirchhoff's later corrections. It has a famous embarrassment, the <b>backwave</b>: if every point genuinely radiates a full sphere, half of each wavelet goes backwards and the construction predicts a wave travelling back toward the source, which never happens. Huygens patched it by simply <i>assuming</i> the wavelet amplitude is maximum forward and zero backward. And it assumes the wavelets travel at the local speed of the medium, so plane stays plane only in a <b>homogeneous</b> medium. Where the speed varies with position, as in hot air above a road, wavelets on one side outrun the other and the front bends, which is exactly how mirages and the twinkling of low stars happen."
        },
        {
          "t": "p",
          "html": "That last point deserves a picture of its own, because it is the reasoning JEE Advanced likes and it is Huygens at his most useful.<br><br>Send a plane wavefront straight at a <b>thin prism</b> of small refracting angle <i>A</i>. Two points on that front, one entering where the glass is thick near the base and one where it is thin near the apex, are still part of one wavefront and must stay in step. But they pass through different thicknesses of glass, and light is slower in glass, so a portion crossing thickness <i>t</i> picks up an extra <b>optical path</b> of (<i>n</i> − 1)<i>t</i> compared with going the same geometric distance in air.<br><br>Let the thickness rise linearly across a transverse height <i>h</i>, so that <i>t</i><sub>thick</sub> − <i>t</i><sub>thin</sub> ≈ <i>hA</i> for a thin prism. The bottom of the wavefront is delayed more than the top by Δ = (<i>n</i> − 1)<i>hA</i>. A uniform gradient of delay tilts a plane into another plane rather than curving it, so the emergent front is still flat, merely rotated. The tilt angle is the lag in length divided by the transverse height: δ = Δ/<i>h</i> = (<i>n</i> − 1)<i>A</i>. That is precisely the deviation of a thin prism you met in ray optics, arrived at here without a single ray."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.3 · A GRADIENT OF DELAY TILTS A FLAT FRONT",
          "chips": ["two thicknesses", "the tilt"],
          "captions": [
            "A thin prism of apex angle A, apex up, with a plane wavefront arriving from the left. The entry face is vertical, so the wave enters everywhere at once. What differs is how much glass each part has to cross: the ray near the apex passes through the short thickness marked thin, the ray near the base through the long one marked thick. Light is slower in glass, so the lower ray is held back more. Nothing here is about bending at a surface; it is about two parts of one wavefront being delayed by different amounts.",
            "The result. The emergent wavefront is still a plane, because a delay that grows linearly across the front tilts it without curving it, but it now leans: its lower part lags, because that is the part that crossed the most glass. The ray is perpendicular to the wavefront, so the emergent beam has turned toward the base of the prism, through the angle δ marked against the dashed original direction. Reading δ off the picture as lag divided by height gives δ = (n − 1)A. The tilt is drawn exaggerated; for glass at n = 1.5 and an apex angle of 19 degrees the real deviation is about 9.5 degrees."
          ],
          "frames": [
            {
              "x": [-2.6, 2.7], "y": [-2, 2], "axes": "none", "aspect": 0.758,
              "polys": [
                { "pts": [[-0.6, 1.6], [-0.6, -1.6], [0.5, -1.6], [-0.6, 1.6]], "fill": "wash", "tone": "soft" },
                { "pts": [[-1.9, -1.6], [-1.9, 1.6]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [-2.5, 1], "to": [-0.62, 1], "tone": "amber" },
                { "from": [-2.5, -1], "to": [-0.62, -1], "tone": "amber" }
              ],
              "segments": [
                { "from": [-0.6, 1], "to": [-0.394, 1] },
                { "from": [-0.6, -1], "to": [0.294, -1] }
              ],
              "arcs": [
                { "at": [-0.6, 1.6], "r": 0.5, "from": 270, "to": 289, "label": "A", "tone": "amber" }
              ],
              "labels": [
                { "x": -1.9, "y": 1.85, "text": "incident front" },
                { "x": 0.32, "y": 1.02, "text": "thin" },
                { "x": 0.92, "y": -0.98, "text": "thick" }
              ]
            },
            {
              "x": [-2.6, 2.7], "y": [-2, 2], "axes": "none", "aspect": 0.758,
              "polys": [
                { "pts": [[-0.6, 1.6], [-0.6, -1.6], [0.5, -1.6], [-0.6, 1.6]], "fill": "wash", "tone": "soft" },
                { "pts": [[-1.9, -1.6], [-1.9, 1.6]], "tone": "ink" },
                { "pts": [[1.05, -1.5], [1.65, 1.5]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [-2.5, 0], "to": [-0.62, 0], "tone": "amber" },
                { "from": [1.35, 0], "to": [2.4, -0.21], "tone": "amber" },
                { "from": [1.55, -1.28], "to": [1.12, -1.37], "tone": "amber", "label": "lags", "at": "below" }
              ],
              "segments": [
                { "from": [1.35, 0], "to": [2.45, 0], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [1.35, 0], "r": 0.85, "from": -11.3, "to": 0, "label": "δ", "tone": "amber" }
              ],
              "labels": [
                { "x": -1.9, "y": 1.85, "text": "incident front" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FRESNEL DISTANCE, THE BORDER BETWEEN TWO OPTICS",
          "main": "<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ",
          "legend": [
            "<i>a</i> = size of the aperture or obstacle (m); λ = wavelength of the light (m)",
            "<i>z</i><sub>F</sub> = Fresnel distance (m), dimensions [L], since [L<sup>2</sup>]/[L] = [L]",
            "For screen distances much less than <i>z</i><sub>F</sub> the beam has not spread appreciably and ray optics is a good description; well beyond <i>z</i><sub>F</sub> the spreading dominates and you need wave optics"
          ],
          "note": "This is the number that says when the old language stops working. Ray optics is not a different theory from wave optics; it is the short-distance, large-aperture limit of it, and z_F is where the limit runs out."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A beam of monochromatic light of wavelength 600 nm in air enters a glass slab of refractive index <i>n</i> = 1.5. Find (a) the speed of light in the glass, (b) the wavelength in the glass, and (c) the frequency in the glass.",
          "steps": [
            "(a) Speed: <i>v</i> = <i>c</i>/<i>n</i> = (3 × 10<sup>8</sup>)/1.5 = 2 × 10<sup>8</sup> m/s.",
            "(b) Frequency first, in air, because it is the quantity that will not change: <i>f</i> = <i>c</i>/λ<sub>air</sub> = (3 × 10<sup>8</sup>)/(600 × 10<sup>−9</sup>) = 5 × 10<sup>14</sup> Hz.",
            "Wavelength in glass: λ<sub>glass</sub> = λ<sub>air</sub>/<i>n</i> = 600/1.5 = 400 nm.",
            "(c) The source is still shaking at the same rate, so <i>f</i><sub>glass</sub> = <i>f</i> = 5 × 10<sup>14</sup> Hz.",
            "Check the chain: <i>v</i> = <i>f</i>λ in glass gives (5 × 10<sup>14</sup>)(400 × 10<sup>−9</sup>) = 2 × 10<sup>8</sup> m/s, which is the speed from part (a)."
          ],
          "ans": "<i>v</i> = 2 × 10<sup>8</sup> m/s · λ = 400 nm · <i>f</i> = 5 × 10<sup>14</sup> Hz, unchanged"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A point source of light sits exactly at the focus of a convex lens. What is the shape of the wavefront emerging from the other side, and has the wavelength changed compared with before the lens?",
          "steps": [
            "A point source produces a spherical wavefront. A lens fed from its focus turns that diverging sphere into a parallel beam, so the emergent wavefront is <b>plane</b>.",
            "The medium on both sides is air. The lens does not change what the light is travelling through once it has left, so <i>v</i>, <i>f</i> and therefore λ all come back to their original values.",
            "The trap: students see \"lens\" and reach for the lens formula, or assume the wavelength shrank \"because it went through glass\". The light did spend a microscopic time inside the glass, with a shorter λ while it was in there, but the question asks about the emergent beam in air.",
            "Only the wavefront SHAPE changed, spherical to plane. Nothing about the light itself did."
          ],
          "ans": "Emergent wavefront is plane; the wavelength is unchanged"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Light of wavelength 500 nm passes through a circular aperture of diameter <i>a</i> = 1 mm. (a) Estimate the Fresnel distance. (b) A screen is placed first at 0.5 m and then at 5 m from the aperture. In which case is ray optics a good description, and in which does diffraction take over?",
          "steps": [
            "(a) <i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ = (10<sup>−3</sup>)<sup>2</sup>/(5 × 10<sup>−7</sup>) = (10<sup>−6</sup>)/(5 × 10<sup>−7</sup>) = 2 m.",
            "(b) At 0.5 m, which is well under <i>z</i><sub>F</sub>: the beam has not spread appreciably, so the patch of light is essentially the size of the aperture. Ray optics holds.",
            "At 5 m, which is well past <i>z</i><sub>F</sub>: the beam has spread beyond its geometric width, so you see a diffraction pattern, not a sharp 1 mm spot. Wave optics takes over.",
            "The takeaway is worth more than the number: ray optics is the short-distance limit of wave optics, and <i>z</i><sub>F</sub> is where you cross from one to the other."
          ],
          "ans": "<i>z</i><sub>F</sub> = 2 m · ray optics at 0.5 m, diffraction at 5 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A plane wavefront in air is incident normally on a thin prism of small refracting angle <i>A</i> and refractive index <i>n</i>. Using an optical-path argument, show that the emergent wavefront is still plane but tilted by δ = (<i>n</i> − 1)<i>A</i>, and say what δ is.",
          "steps": [
            "Extra optical path for light crossing thickness <i>t</i> of glass instead of the same geometric distance in air: Δ(optical path) = <i>nt</i> − <i>t</i> = (<i>n</i> − 1)<i>t</i>.",
            "Across a transverse height <i>h</i> the prism thickness rises from <i>t</i><sub>thin</sub> at the apex to <i>t</i><sub>thick</sub> at the base, with <i>t</i><sub>thick</sub> − <i>t</i><sub>thin</sub> = <i>h</i> tan <i>A</i> ≈ <i>hA</i> for a thin prism.",
            "So the bottom of the front is delayed more than the top by Δ = (<i>n</i> − 1)(<i>t</i><sub>thick</sub> − <i>t</i><sub>thin</sub>) = (<i>n</i> − 1)<i>hA</i>.",
            "The delay gradient is constant across the front, so the envelope of the emergent wavelets is a straight tilted surface, not a curved one. The beam stays parallel.",
            "Tilt angle = lag in length / transverse height: δ = Δ/<i>h</i> = (<i>n</i> − 1)<i>hA</i>/<i>h</i> = (<i>n</i> − 1)<i>A</i>."
          ],
          "ans": "δ = (<i>n</i> − 1)<i>A</i>, which is the angle of minimum deviation of a thin prism"
        },
        {
          "t": "mcq",
          "q": "A wavefront is best defined as the locus of points that",
          "opts": [
            { "label": "have the same amplitude only", "nudge": "Points on a wavefront often DO share an amplitude for an ideal point source, but that is a consequence, not the definition. Two points of equal amplitude and opposite phase are not on the same wavefront." },
            { "label": "are at the same distance from the observer", "nudge": "This confuses \"equidistant from the SOURCE\", which is true for a spherical wavefront, with \"equidistant from the observer\", which is irrelevant and would make the wavefront depend on who is watching." },
            { "label": "are vibrating in the same phase", "nudge": null },
            { "label": "lie on a straight line perpendicular to the ray", "nudge": "This inverts the ray-wavefront relationship. The RAY is perpendicular to the wavefront; the wavefront is a surface of constant phase, not a line defined by the ray." }
          ],
          "correct": 2,
          "solution": "A wavefront is a surface of constant PHASE. Every point on it is at the same stage of its oscillation cycle: all at a crest together, or all crossing zero together."
        },
        {
          "t": "mcq",
          "q": "When light passes from air into glass, which quantity remains unchanged?",
          "opts": [
            { "label": "Speed", "nudge": "<i>v</i> = <i>c</i>/<i>n</i> falls in glass. This is the central result of the chapter and the one Foucault's 1850 measurement confirmed against Newton." },
            { "label": "Wavelength", "nudge": "The most common error. λ = λ<sub>0</sub>/<i>n</i> shrinks. Students assume the wavelength is the wave's identity, but it is the frequency that survives a boundary." },
            { "label": "Frequency", "nudge": null },
            { "label": "Refractive index of the medium", "nudge": "This confuses a property of the MEDIUM, which obviously differs between air and glass, with a property of the light." }
          ],
          "correct": 2,
          "solution": "Frequency is fixed by the source. The medium cannot alter how many cycles arrive per second, so <i>f</i> is conserved across the boundary while <i>v</i> and λ both drop by the factor <i>n</i>."
        },
        {
          "t": "mcq",
          "q": "A point source emits light uniformly in all directions. At distance <i>r</i> the intensity is <i>I</i> and the amplitude is <i>A</i>. At distance 2<i>r</i>, the amplitude becomes",
          "opts": [
            { "label": "<i>A</i>/2", "nudge": null },
            { "label": "<i>A</i>/4", "nudge": "The trap for students who correctly write <i>I</i> ∝ 1/<i>r</i><sup>2</sup> and then apply the inverse-square law directly to the AMPLITUDE, forgetting the square-root step from intensity to amplitude." },
            { "label": "<i>A</i>", "nudge": "This ignores the fall-off entirely. The same power is spread over a sphere whose area has quadrupled, so something must decrease." },
            { "label": "<i>A</i>/√2", "nudge": "This comes from misremembering the law as <i>A</i> ∝ 1/√<i>r</i> instead of <i>A</i> ∝ 1/<i>r</i>." }
          ],
          "correct": 0,
          "solution": "For a point source <i>I</i> ∝ 1/<i>r</i><sup>2</sup>, and intensity goes as the square of amplitude, so <i>A</i> ∝ 1/<i>r</i>. Doubling <i>r</i> halves <i>A</i> while quartering <i>I</i>."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Define a wavefront, then name its shape in each case: (a) light diverging from a point source, (b) light emerging from a convex lens with a point source at its focus, (c) a small patch of a spherical wavefront very far from the source.", "a": "A wavefront is the locus of points vibrating in the same phase at a given instant. (a) spherical, diverging. (b) plane. (c) plane, to a very good approximation, because the curvature is spread over a huge radius." },
            { "q": "[NEET] The frequency of monochromatic light is 6 × 10<sup>14</sup> Hz in vacuum. It enters a medium of refractive index 1.5. Find its frequency and its wavelength in the medium.", "a": "Frequency is unchanged: 6 × 10<sup>14</sup> Hz. Vacuum wavelength λ<sub>0</sub> = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(6 × 10<sup>14</sup>) = 500 nm, so λ<sub>medium</sub> = 500/1.5 = 333 nm." },
            { "q": "[JEE Main] Light of wavelength 480 nm in air enters water (<i>n</i> = 4/3) at an angle of incidence of 30°. Find (a) the wavelength in water and (b) the angle of refraction.", "a": "(a) λ<sub>water</sub> = 480/(4/3) = 360 nm. (b) sin <i>r</i> = sin 30° / (4/3) = 0.5 × 3/4 = 0.375, so <i>r</i> = 22°. Both answers move the same way: denser medium, shorter wavelength, smaller angle." },
            { "q": "[JEE Main] A parallel beam of light of wavelength 600 nm passes through a slit of width 2 mm. Up to what distance from the slit can ray optics be safely used?", "a": "<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ = (2 × 10<sup>−3</sup>)<sup>2</sup>/(600 × 10<sup>−9</sup>) = (4 × 10<sup>−6</sup>)/(6 × 10<sup>−7</sup>) = 6.7 m. Well inside that, ray optics is fine." },
            { "q": "[JEE Advanced] A plane wavefront enters a medium whose refractive index increases continuously with depth. Using Huygens' principle, argue how the wavefront and the ray curve, and connect it to why stars near the horizon shift position and twinkle.", "a": "Wavelets travel slower where <i>n</i> is larger, so the deeper edge of each wavefront lags. The front tilts progressively, and the ray, being perpendicular to it, bends steadily toward the denser region: a continuous curving refraction rather than a single kink. Starlight crossing the atmosphere's density gradient therefore arrives from a shifted apparent direction, and moment-to-moment fluctuations in that gradient make the shift wobble, which is twinkling." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Saying the frequency changes in a new medium.</b> It does not. Only <i>v</i> and λ change; <i>f</i> is the source's signature and is conserved across every boundary. This one fact silently decides a large share of wave-optics MCQs.",
            "<b>Confusing the ray with the wavefront.</b> The ray is the arrow, the wavefront is the surface, and they are always perpendicular. In a derivation, be explicit about whether the angle you are calling <i>i</i> is measured from the normal or between the wavefront and the surface. They are equal, but only because the two pairs of lines are mutually perpendicular, and a student who has not noticed that will measure from the wrong line.",
            "<b>Applying the inverse-square law to amplitude.</b> <i>I</i> ∝ 1/<i>r</i><sup>2</sup> but <i>A</i> ∝ 1/<i>r</i>. Take the square root before you touch the amplitude, never after.",
            "<b>Calling the denser medium the faster one.</b> Higher <i>n</i> means SLOWER light, <i>v</i> = <i>c</i>/<i>n</i>, and bending TOWARD the normal. Newton got this backwards and lost; do not repeat it.",
            "<b>Treating path difference and phase difference as the same number.</b> They are proportional, not equal: φ = (2π/λ)Δ<i>x</i>. One whole wavelength of extra path is 2π of extra phase, not 1. Every topic from here to the end of the chapter runs on this conversion, so fix it now."
          ]
        },
        {
          "t": "protip",
          "html": "carry one chain and one sanity check into every refraction numerical. the chain is <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = λ<sub>1</sub>/λ<sub>2</sub> = sin <i>i</i> / sin <i>r</i>, and it means any one ratio hands you the other three without computing a single absolute speed. the sanity check is \"big n, slow and short\": the denser medium must always come out with the smaller speed, the shorter wavelength, and the smaller angle from the normal. if any one of those three moved the wrong way, you inverted a ratio somewhere."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "wavefront = locus of points in the same phase", "note": "ray ⊥ wavefront, always" },
            { "f": "point source → spherical · line source → cylindrical · far source → plane", "note": "shape is set by the source and by how far away you are" },
            { "f": "Huygens: every point is a secondary source, wavelet radius <i>v</i>τ, new front = envelope", "note": "derives both the law of reflection and Snell's law" },
            { "f": "<i>n</i> = <i>c</i>/<i>v</i> · sin <i>i</i>/sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = λ<sub>1</sub>/λ<sub>2</sub>", "note": "four dimensionless ratios, one equation" },
            { "f": "conserved on refraction: <i>f</i> · changed: <i>v</i> and λ, with λ<sub>med</sub> = λ<sub>0</sub>/<i>n</i>", "note": "the source owns f, the medium owns v" },
            { "f": "φ = (2π/λ)Δ<i>x</i>", "note": "path difference of one λ is a phase difference of 2π. hold this for the rest of the chapter" },
            { "f": "<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ", "note": "ray optics well inside it, diffraction well beyond" },
            { "f": "<i>I</i> ∝ 1/<i>r</i><sup>2</sup> and <i>A</i> ∝ 1/<i>r</i> for a point source", "note": "square root between the two, every time" },
            { "f": "δ = (<i>n</i> − 1)<i>A</i> for a thin prism", "note": "an optical-path gradient tilts a plane front without curving it" }
          ],
          "aids": [
            "big n, slow and short: denser means slower, shorter, and bent toward the normal",
            "huygens gives you WHERE the front goes, never HOW BRIGHT it is. the backwave is the price",
            "one wavelength of path = 2π of phase. write it on the top of the page and leave it there"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The Doppler Effect of Light",
      "chip": "02 THE SHIFT",
      "kalam": "the colour of a star is a speedometer",
      "blocks": [
        {
          "t": "p",
          "html": "Stand on a platform as the Rajdhani roars through without stopping. On the way in the horn sounds shrill and high; the instant it passes and starts receding, the pitch drops to a lower drone. The horn never changed its note. Your <i>ears</i> received a different frequency, because the source was moving relative to you.<br><br>That is the <b>Doppler effect</b>, and it happens for every wave, light included. You met it for sound in the Waves chapter, where the derivation had to track motion relative to the <b>air</b>, and where a moving source and a moving observer gave genuinely different formulas. For light that whole complication disappears, and the reason is the single most important fact about light: it needs no medium. There is no \"air\" to measure motion against, so only the <b>relative velocity</b> of source and observer can matter, and it makes no difference at all which of the two you call moving."
        },
        {
          "t": "p",
          "html": "The second difference is scale. Light is fast, so the shifts are tiny unless the relative speed is an appreciable fraction of <i>c</i>. A car on a highway shifts the light it reflects by about one part in ten million. So for everyday and for most astronomical work we use a simple small-speed formula, and only fall back on the exact relativistic one when <i>v</i> approaches <i>c</i>.<br><br>Now the vocabulary, which is worth owning properly rather than memorising. When a source <b>moves away</b>, each successive wavefront is launched from slightly further back, so the waves arrive <b>stretched</b>: longer wavelength, lower frequency. Longer wavelength means shifted toward the red end of the visible band, so this is a <b>redshift</b>. When the source <b>approaches</b>, the waves are squeezed: shorter wavelength, higher frequency, a <b>blueshift</b>. Receding gives red, approaching gives blue.<br><br>This one idea carries an astonishing amount of modern science. The light from distant galaxies is redshifted, and the further away they are the more redshifted, which is how Edwin Hubble found that the universe is expanding. Police speed guns and weather radar bounce waves off a moving target and read the shift. Astronomers weigh unseen planets by the wobble they induce in their star's spectrum, and clock the rotation of the Sun by comparing its two edges."
        },
        {
          "t": "think",
          "html": "picture the spherical wavefronts of the last topic leaving a source that is drifting sideways while it emits. each front is a circle centred on wherever the source happened to be when it was launched, and those centres march along. so the fronts crowd together in front of the source and spread apart behind it. an observer ahead sees crowded fronts and calls it blue; an observer behind sees stretched ones and calls it red. the pattern of circles alone tells you which way the source is going and how fast."
        },
        {
          "t": "def",
          "term": "Doppler effect of light, and radial velocity",
          "html": "The <b>Doppler effect</b> is the change in the observed frequency or wavelength of a wave caused by relative motion of the source and the observer.<br><br>For light, only the <b>radial velocity</b> <i>v</i><sub>r</sub> matters: the component of the relative velocity along the line of sight. A source moving purely <b>across</b> your line of sight produces no first-order shift at all, however fast it is going. Throughout this topic <i>v</i><sub>r</sub> is taken <b>positive for recession</b>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SMALL-SPEED DOPPLER SHIFT",
          "tag": "valid when v is much less than c",
          "main": "Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i><br>Δλ/λ = +<i>v</i><sub>r</sub>/<i>c</i>",
          "legend": [
            "Δ<i>f</i> = <i>f</i><sub>observed</sub> − <i>f</i><sub>source</sub> (Hz); Δλ = λ<sub>observed</sub> − λ<sub>source</sub> (m, quoted in nm)",
            "<i>v</i><sub>r</sub> = radial relative speed (m/s), POSITIVE for recession; <i>c</i> = 3 × 10<sup>8</sup> m/s",
            "Both sides of both lines are dimensionless ratios, which is the fastest check that you have not inverted one"
          ],
          "note": "The two forms carry OPPOSITE signs, and that is not a typo: recede and the frequency drops while the wavelength grows. Pick one form at the start of a problem and stay in it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SPEED FROM A MEASURED SHIFT",
          "main": "<i>v</i><sub>r</sub> = <i>c</i> · Δλ/λ = −<i>c</i> · Δ<i>f</i>/<i>f</i><br><i>f</i>′ = <i>f</i> √((<i>c</i> − <i>v</i>)/(<i>c</i> + <i>v</i>))",
          "legend": [
            "<i>v</i><sub>r</sub> = radial speed (m/s), and the fractional shift Δλ/λ is dimensionless, so the answer is <i>c</i> times a pure number",
            "The second line is the EXACT relativistic result for a source receding at speed <i>v</i>, quoted for completeness",
            "λ = wavelength (m), <i>f</i> = source frequency (Hz), <i>f</i>′ = observed frequency (Hz)"
          ],
          "note": "For v much less than c the exact form reduces to the first line, which is where the small-speed formula comes from rather than being a separate law."
        },
        {
          "t": "defgrid",
          "title": "Signs, at a glance",
          "rows": [
            { "k": "Receding", "v": "<i>v</i><sub>r</sub> positive · frequency decreases · wavelength increases · REDSHIFT" },
            { "k": "Approaching", "v": "<i>v</i><sub>r</sub> negative · frequency increases · wavelength decreases · BLUESHIFT" },
            { "k": "Purely transverse", "v": "no first-order shift at all. Only the line-of-sight component counts" },
            { "k": "Reflection off a mover", "v": "the shift happens TWICE, so use 2<i>v</i>/<i>c</i>. Radar and speed guns" },
            { "k": "Two opposite edges", "v": "one approaches and one recedes, so the measured separation is 2λ<i>v</i>/<i>c</i>" },
            { "k": "Typical size", "v": "stellar shifts run 10<sup>−6</sup> to 10<sup>−3</sup> of λ. A fractional shift near 1 means an error" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ONE SPECTRAL LINE, THREE READINGS",
          "chips": ["laboratory", "receding", "approaching"],
          "captions": [
            "The hydrogen line that astronomers use most, drawn on a wavelength axis in nanometres. Measured in a laboratory on Earth, with the lamp sitting still on the bench, it lands at 656.3 nm. That number is the reference: every star's version of this line is compared with it, and the whole method rests on the fact that hydrogen is hydrogen everywhere.",
            "The same line in the light of a star that is moving away from us. The dashed marker is where the laboratory says it should be; the solid line is where it actually appears, at a LONGER wavelength. Longer wavelength is toward the red end of the visible band, hence redshift, and the size of the gap divided by 656.3 is exactly v_r/c. A shift of 0.2 nm here, which is the width of this arrow, corresponds to a recession speed of about 91 km/s.",
            "And the same line from a star coming toward us. The shift is the other way: the observed line sits at a SHORTER wavelength, toward the blue end. Nothing about the atom changed. What changed is that each successive wavefront was launched from slightly closer to us, so they arrived squeezed together. Note that the shift is drawn hugely exaggerated: a real stellar shift of one part in ten thousand would be a fraction of the thickness of these lines."
          ],
          "frames": [
            {
              "x": [655.85, 656.85], "y": [-0.6, 1.6], "axes": "none", "aspect": 0.45,
              "ticksX": { "at": [656, 656.3, 656.6], "labels": ["656.0", "656.3", "656.6"] },
              "axisX": "λ (nm)",
              "polys": [
                { "pts": [[655.9, 0], [656.8, 0]], "tone": "ink" },
                { "pts": [[656.3, 0], [656.3, 0.8]], "tone": "ink" }
              ],
              "labels": [
                { "x": 656.3, "y": 1.05, "text": "lab, at rest" }
              ]
            },
            {
              "x": [655.85, 656.85], "y": [-0.6, 1.6], "axes": "none", "aspect": 0.45,
              "ticksX": { "at": [656, 656.3, 656.6], "labels": ["656.0", "656.3", "656.6"] },
              "axisX": "λ (nm)",
              "polys": [
                { "pts": [[655.9, 0], [656.8, 0]], "tone": "ink" },
                { "pts": [[656.3, 0], [656.3, 0.8]], "tone": "soft", "dash": true },
                { "pts": [[656.55, 0], [656.55, 0.8]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [656.32, 1.05], "to": [656.53, 1.05], "tone": "amber", "label": "to longer λ", "at": "above" }
              ],
              "labels": [
                { "x": 656.05, "y": 1.05, "text": "receding" }
              ]
            },
            {
              "x": [655.85, 656.85], "y": [-0.6, 1.6], "axes": "none", "aspect": 0.45,
              "ticksX": { "at": [656, 656.3, 656.6], "labels": ["656.0", "656.3", "656.6"] },
              "axisX": "λ (nm)",
              "polys": [
                { "pts": [[655.9, 0], [656.8, 0]], "tone": "ink" },
                { "pts": [[656.3, 0], [656.3, 0.8]], "tone": "soft", "dash": true },
                { "pts": [[656.05, 0], [656.05, 0.8]], "tone": "ink" }
              ],
              "arrows": [
                { "from": [656.28, 1.05], "to": [656.07, 1.05], "tone": "amber", "label": "to shorter λ", "at": "below" }
              ],
              "labels": [
                { "x": 656.62, "y": 1.05, "text": "approaching" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · COUNTING WAVEFRONTS FROM A RECEDING SOURCE",
          "steps": [
            { "eq": "<i>T</i> = 1/<i>f</i> and λ = <i>cT</i>", "why": "Set up one period. The source emits light of frequency <i>f</i>, so one full cycle takes <i>T</i> = 1/<i>f</i>, and in that time the disturbance travels one wavelength. There is no new physics here; this is just <i>v</i> = <i>f</i>λ rearranged." },
            { "eq": "first front travels <i>cT</i>; source retreats <i>v</i><sub>r</sub><i>T</i>", "why": "Track two successive wavefronts. The source emits one, then emits the next exactly one period later. In that period the first front has advanced <i>cT</i> toward the observer, and the source has also moved away by <i>v</i><sub>r</sub><i>T</i>, so the second front starts from further back." },
            { "eq": "λ′ = <i>cT</i> + <i>v</i><sub>r</sub><i>T</i> = (<i>c</i> + <i>v</i><sub>r</sub>)<i>T</i>", "why": "The separation between the two fronts IS the observed wavelength. It is the original spacing plus the extra gap the retreat opened up. Notice that nothing here needed a medium: the fronts travel at <i>c</i> whatever the source is doing." },
            { "eq": "Δλ/λ = <i>v</i><sub>r</sub>/<i>c</i>", "why": "Divide by λ = <i>cT</i>: λ′ = λ(1 + <i>v</i><sub>r</sub>/<i>c</i>), so λ′ − λ = λ<i>v</i><sub>r</sub>/<i>c</i>. The waves arrive stretched, which is the picture of the fronts spreading out behind a moving source stated as a number." },
            { "eq": "<i>f</i>′ = <i>c</i>/λ′ = <i>f</i>/(1 + <i>v</i><sub>r</sub>/<i>c</i>) ≈ <i>f</i>(1 − <i>v</i><sub>r</sub>/<i>c</i>)", "why": "Convert to frequency using <i>f</i> = <i>c</i>/λ. The last step is the binomial approximation 1/(1 + <i>x</i>) ≈ 1 − <i>x</i>, valid because <i>v</i><sub>r</sub> is far smaller than <i>c</i>." },
            { "eq": "Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i>", "why": "The minus sign is the whole story: recede and the frequency drops. Compare with the wavelength form, which has a plus, and the opposite signs stop being a thing to memorise: one quantity went up so the other had to come down." }
          ]
        },
        {
          "t": "proc",
          "title": "Any Doppler-of-light problem",
          "steps": [
            "Identify the MEASURED quantity, a shift in λ or in <i>f</i>, and compute the <b>fractional</b> shift Δλ/λ or Δ<i>f</i>/<i>f</i>. Work in fractions before you work in metres.",
            "Read its sign physically, not algebraically: longer wavelength or lower frequency means receding; shorter or higher means approaching. Decide this from the words before you touch a formula.",
            "Apply <i>v</i><sub>r</sub> = <i>c</i> · Δλ/λ to get the radial speed.",
            "Check for a factor of 2. If the wave reflected off the mover, or if you are comparing two opposite edges of a rotating body, the shift happened twice and the measured value is 2<i>v</i>/<i>c</i>.",
            "If the geometry only gives a component along the line of sight, say so: you have found <i>v</i><sub>r</sub>, not the object's full speed."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A spectral line emitted by hydrogen has wavelength 656.3 nm in the laboratory. In the light from a distant star the same line is observed at 656.5 nm. Find the star's radial speed and say whether it is approaching or receding.",
          "steps": [
            "Δλ = 656.5 − 656.3 = +0.2 nm. The wavelength has INCREASED, which is a redshift, so the star is <b>receding</b>. Settle that before computing anything.",
            "Fractional shift: Δλ/λ = 0.2/656.3 = 3.05 × 10<sup>−4</sup>.",
            "<i>v</i><sub>r</sub> = <i>c</i> · Δλ/λ = (3 × 10<sup>8</sup>)(3.05 × 10<sup>−4</sup>) = 9.1 × 10<sup>4</sup> m/s.",
            "Sanity check: that is 91 km/s, and a fractional shift of 3 × 10<sup>−4</sup> sits squarely in the 10<sup>−6</sup> to 10<sup>−3</sup> band that stellar motions produce."
          ],
          "ans": "<i>v</i><sub>r</sub> = 9.1 × 10<sup>4</sup> m/s, about 91 km/s, receding"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The light from a far-off galaxy shows all its spectral lines shifted toward longer wavelengths. This tells us the galaxy is (A) approaching us (B) receding from us (C) stationary (D) rotating only.",
          "steps": [
            "Longer wavelength is a redshift, and a redshift means the source is receding. No calculation is needed and none is wanted.",
            "The trap is students who half-remember \"red is hot, blue is cold\" from thermal physics, or who simply reverse the rule, and pick (A).",
            "Anchor it physically instead of by rote: moving away STRETCHES the waves, and a stretched wave is a longer wavelength, and longer is red.",
            "The systematic redshift of every distant galaxy is exactly Hubble's evidence for an expanding universe, so this is the answer with the largest consequence in the chapter."
          ],
          "ans": "(B) receding"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A star emits light at 5.0 × 10<sup>14</sup> Hz and is approaching Earth at 3.0 × 10<sup>5</sup> m/s. Find (a) the fractional change in frequency, (b) the observed frequency, and (c) the change in wavelength.",
          "steps": [
            "Approaching, so <i>v</i><sub>r</sub> = −3.0 × 10<sup>5</sup> m/s by the sign convention.",
            "(a) Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> = +(3.0 × 10<sup>5</sup>)/(3.0 × 10<sup>8</sup>) = +1.0 × 10<sup>−3</sup>. The frequency rises: a blueshift, as it must.",
            "(b) Δ<i>f</i> = (1.0 × 10<sup>−3</sup>)(5.0 × 10<sup>14</sup>) = 5.0 × 10<sup>11</sup> Hz, so <i>f</i>′ = 5.005 × 10<sup>14</sup> Hz.",
            "(c) Original λ = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(5 × 10<sup>14</sup>) = 600 nm. Now use the WAVELENGTH form, which carries the opposite sign: Δλ/λ = +<i>v</i><sub>r</sub>/<i>c</i> = −1.0 × 10<sup>−3</sup>.",
            "Δλ = (−1.0 × 10<sup>−3</sup>)(600 nm) = −0.6 nm, so the line moves from 600.0 nm to 599.4 nm.",
            "The two answers agree in physics and disagree in sign, which is the point of the exercise: frequency up, wavelength down, same event."
          ],
          "ans": "Δ<i>f</i>/<i>f</i> = +1.0 × 10<sup>−3</sup> · <i>f</i>′ = 5.005 × 10<sup>14</sup> Hz · Δλ = −0.6 nm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A line at 600.0 nm is observed from the two opposite edges of the Sun's equator. Because the Sun rotates, one edge approaches and the other recedes, and the two measurements differ by Δλ<sub>total</sub> = 0.0080 nm. The Sun's radius is 7.0 × 10<sup>8</sup> m. Find (a) the equatorial rotational speed and (b) the rotation period.",
          "steps": [
            "The approaching edge is blueshifted by λ<i>v</i>/<i>c</i> and the receding edge is redshifted by the same amount, so the SEPARATION between the two measurements is twice a single shift: Δλ<sub>total</sub> = 2λ<i>v</i>/<i>c</i>.",
            "(a) <i>v</i> = <i>c</i>Δλ<sub>total</sub>/(2λ) = (3 × 10<sup>8</sup>)(0.0080 × 10<sup>−9</sup>)/(2 × 600 × 10<sup>−9</sup>) = (2.4 × 10<sup>−3</sup>)/(1.2 × 10<sup>−6</sup>) = 2.0 × 10<sup>3</sup> m/s.",
            "(b) The equator travels 2π<i>R</i> in one rotation, so <i>T</i> = 2π<i>R</i>/<i>v</i> = 2π(7.0 × 10<sup>8</sup>)/(2.0 × 10<sup>3</sup>) = 2.2 × 10<sup>6</sup> s.",
            "Convert: (2.2 × 10<sup>6</sup>)/86400 = 25 days.",
            "That is the Sun's real equatorial rotation period, from a wavelength difference of eight thousandths of a nanometre. The factor of 2, from both edges contributing oppositely, is the step most students drop."
          ],
          "ans": "<i>v</i> = 2.0 × 10<sup>3</sup> m/s, about 2 km/s · <i>T</i> = 25 days"
        },
        {
          "t": "mcq",
          "q": "The Doppler shift in the light from a star depends on",
          "opts": [
            { "label": "the total speed of the star", "nudge": "This over-counts. A star moving mostly sideways contributes only its small line-of-sight part, so its shift is far less than its speed would suggest." },
            { "label": "only the component of velocity along the line of sight", "nudge": null },
            { "label": "only the component perpendicular to the line of sight", "nudge": "Exactly backwards. Transverse motion produces no first-order shift at all, which is why proper motion and radial velocity have to be measured by completely different methods." },
            { "label": "the distance of the star", "nudge": "This confuses the Doppler shift, which depends on velocity, with the Hubble relation, which links redshift to distance only because distant galaxies happen to be receding faster." }
          ],
          "correct": 1,
          "solution": "Only the radial component <i>v</i><sub>r</sub> produces the first-order shift. A source crossing your line of sight is not getting any nearer or further per wavefront, so successive fronts are not spaced any differently."
        },
        {
          "t": "mcq",
          "q": "For a source receding at speed <i>v</i> much smaller than <i>c</i>, the fractional change in frequency is",
          "opts": [
            { "label": "+<i>v</i>/<i>c</i>", "nudge": "Right magnitude, wrong sign. A positive Δ<i>f</i>/<i>f</i> is a rise in frequency, which is a blueshift, which is approach." },
            { "label": "−<i>v</i>/<i>c</i>", "nudge": null },
            { "label": "+<i>c</i>/<i>v</i>", "nudge": "The ratio is inverted, and dimensions catch it instantly: Δ<i>f</i>/<i>f</i> must be a small dimensionless number, while <i>c</i>/<i>v</i> is larger than 1 for any real source." },
            { "label": "−<i>c</i>/<i>v</i>", "nudge": "Inverted as well, and a magnitude greater than 1 would mean the observed frequency is negative, which is not a thing." }
          ],
          "correct": 1,
          "solution": "Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> with <i>v</i><sub>r</sub> positive for recession, so receding lowers the frequency. The wavelength form carries the opposite sign, Δλ/λ = +<i>v</i><sub>r</sub>/<i>c</i>."
        },
        {
          "t": "mcq",
          "q": "A wavelength of 600 nm is observed as 600.6 nm. The radial speed of the source is about",
          "opts": [
            { "label": "3 × 10<sup>5</sup> m/s, approaching", "nudge": "The speed is right and the direction is wrong. The wavelength went UP, and a longer wavelength is a redshift, which is recession." },
            { "label": "3 × 10<sup>5</sup> m/s, receding", "nudge": null },
            { "label": "3 × 10<sup>6</sup> m/s, receding", "nudge": "A factor of ten adrift in the fractional shift. Δλ/λ = 0.6/600 = 10<sup>−3</sup>, not 10<sup>−2</sup>; check the division rather than the physics." },
            { "label": "6 × 10<sup>5</sup> m/s, receding", "nudge": "This doubles the shift, which is the reflection-and-radar correction applied where nothing reflected. The factor of 2 belongs only to a wave that bounced off the mover, or to two opposite edges." }
          ],
          "correct": 1,
          "solution": "Δλ/λ = 0.6/600 = 1.0 × 10<sup>−3</sup>, so <i>v</i><sub>r</sub> = <i>c</i> × 10<sup>−3</sup> = 3 × 10<sup>5</sup> m/s. The wavelength increased, so it is a redshift and the source is receding."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A spectral line of wavelength 500 nm from a star appears at 500.05 nm. Is the star approaching or receding, and at what radial speed?", "a": "Wavelength increased, so redshift, so receding. <i>v</i><sub>r</sub> = <i>c</i>Δλ/λ = (3 × 10<sup>8</sup>)(0.05/500) = (3 × 10<sup>8</sup>)(1.0 × 10<sup>−4</sup>) = 3.0 × 10<sup>4</sup> m/s, that is 30 km/s." },
            { "q": "[NEET] The radial velocity of a galaxy is 1.5 × 10<sup>6</sup> m/s away from Earth. What is the fractional change in the wavelength of its light?", "a": "Δλ/λ = <i>v</i><sub>r</sub>/<i>c</i> = (1.5 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 5.0 × 10<sup>−3</sup>, an increase, so a redshift. Still well inside the small-speed regime: 0.5 per cent of <i>c</i>." },
            { "q": "[JEE Main] A source of light of frequency 6.0 × 10<sup>14</sup> Hz approaches an observer at 6.0 × 10<sup>6</sup> m/s. Find the observed frequency.", "a": "Δ<i>f</i>/<i>f</i> = <i>v</i>/<i>c</i> = (6.0 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 2.0 × 10<sup>−2</sup>, positive because it is approaching. <i>f</i>′ = (6.0 × 10<sup>14</sup>)(1.02) = 6.12 × 10<sup>14</sup> Hz." },
            { "q": "[JEE Main] The Hα line at 656.3 nm from a star is redshifted by 0.15 nm. Compute the star's recession speed.", "a": "<i>v</i><sub>r</sub> = <i>c</i>Δλ/λ = (3 × 10<sup>8</sup>)(0.15/656.3) = (3 × 10<sup>8</sup>)(2.29 × 10<sup>−4</sup>) = 6.9 × 10<sup>4</sup> m/s, about 69 km/s." },
            { "q": "[JEE Advanced] A radar emits microwaves of wavelength 3.0 cm toward a car approaching at 30 m/s. The wave reflects off the car and returns. Find the total fractional change in the wavelength of the received wave. (The car acts first as a moving observer and then as a moving source, so the shift happens twice.)", "a": "|Δλ/λ| = 2<i>v</i>/<i>c</i> = 2(30)/(3 × 10<sup>8</sup>) = 2.0 × 10<sup>−7</sup>, a decrease because the car is approaching. The 3.0 cm wavelength never enters the answer, which is the point: the fractional shift depends only on the speed ratio." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reversing redshift and blueshift.</b> Receding means stretched means longer wavelength means red. Approaching means squeezed means blue. Anchor it to the picture of wavefronts spreading out behind a retreating source, never to a rhyme.",
            "<b>Using the full speed instead of the radial component.</b> Only the line-of-sight part enters the first-order formula. A star whizzing almost sideways shows almost no shift, and that is a physical fact rather than a limitation of the method.",
            "<b>Sign slips between the two forms.</b> Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> but Δλ/λ = +<i>v</i><sub>r</sub>/<i>c</i>. They must disagree, because <i>f</i> and λ are inversely related. Pick one form and stay in it for the whole problem.",
            "<b>Forgetting the factor of 2.</b> Radar off a moving car and the two opposite limbs of a rotating star both double a single shift. If the wave bounced, or if you are comparing two edges, the 2 is there.",
            "<b>Importing the sound formula.</b> For sound, a moving source and a moving observer give different answers, because motion is measured relative to the AIR. Light has no medium, so only the relative velocity exists and there is one formula. Do not reach for the Waves chapter's source-versus-observer distinction here."
          ]
        },
        {
          "t": "protip",
          "html": "work in fractional shifts and nothing else until the last line. almost every problem is just Δλ/λ = <i>v</i><sub>r</sub>/<i>c</i>, so compute that dimensionless number first, decide its sign from the words \"longer means receding\", and only then multiply by <i>c</i> for a speed or by λ for an absolute change. the sanity check that catches almost every slip: everyday and stellar speeds give fractional shifts between 10<sup>−6</sup> and 10<sup>−3</sup>. if you get something near 1, you have an arithmetic error, not a relativistic galaxy."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Doppler effect = shift in observed <i>f</i> or λ from RELATIVE motion", "note": "light has no medium, so only relative velocity exists" },
            { "f": "Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> · Δλ/λ = +<i>v</i><sub>r</sub>/<i>c</i>", "note": "<i>v</i><sub>r</sub> positive for recession. opposite signs, on purpose" },
            { "f": "<i>v</i><sub>r</sub> = <i>c</i> · Δλ/λ", "note": "fractional shift first, speed second" },
            { "f": "receding → redshift · approaching → blueshift", "note": "stretched is long is red" },
            { "f": "only the RADIAL component shifts the light", "note": "purely transverse motion gives no first-order shift" },
            { "f": "factor of 2 for a reflection, and for two opposite edges", "note": "radar guns and stellar rotation" },
            { "f": "exact: <i>f</i>′ = <i>f</i>√((<i>c</i> − <i>v</i>)/(<i>c</i> + <i>v</i>))", "note": "reduces to the small-speed form when <i>v</i> is much less than <i>c</i>" }
          ],
          "aids": [
            "red = receding, retreating. blue = bound toward you",
            "compute the fraction, then decide the sign from the words, then multiply by c",
            "shift near 10 to the minus six or minus three is normal. shift near 1 is a mistake"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Interference and Young's Double-Slit Experiment",
      "chip": "03 THE FRINGES",
      "kalam": "never use two sources. always split one",
      "blocks": [
        {
          "t": "p",
          "html": "Drop two stones into a still pond, a little apart, at the very same instant. Two sets of circular ripples spread out and run into each other. Watch the overlap carefully: at some points the water heaves violently, at others it stays almost dead flat. Nothing was added or removed anywhere, and both ripple trains are present everywhere, yet the <i>combination</i> is loud in some places and silent in others.<br><br>That redistribution is <b>interference</b>, and it is the fingerprint of waves. The rule behind it is the <b>principle of superposition</b>, which you already have from the Waves chapter: when two waves overlap, the resultant displacement at any instant is the algebraic sum of the individual displacements. Two crests arriving together add to a bigger crest, which is <b>constructive</b> interference. A crest meeting a trough cancels, which is <b>destructive</b>.<br><br>Energy is never destroyed at the dark points. It is moved to the bright ones. The bright fringes are brighter precisely <i>because</i> the dark fringes are dark, and the average brightness across the whole pattern is exactly what the two sources would have given with no interference at all."
        },
        {
          "t": "p",
          "html": "So why do you not see this every day? Two tube-lights in your room are two sources of the same kind of wave, overlapping all over the ceiling, and the ceiling is uniformly lit.<br><br>Here is the catch, and it is the reason Young's experiment is famous. For a bright-and-dark pattern to stay put long enough for your eye to register it, the two overlapping waves must keep a <b>constant phase relationship over time</b>. Light is emitted by countless atoms in random, independent bursts lasting about 10<sup>−8</sup> s, so the phase between two <i>separate</i> sources reshuffles roughly a hundred million times a second. The pattern flickers into a uniform grey blur faster than any eye or camera can catch. That is exactly the coherence condition the Waves chapter states for sound, and light is where it actually bites."
        },
        {
          "t": "think",
          "html": "imagine two singers trying to harmonise. if both follow the same conductor they stay locked in step and produce a stable blend: coherent. if each sings to a private metronome, drifting in and out of time, the audience hears a muddled wash: incoherent. thomas young's 1801 stroke of genius was the optical version of \"give them one conductor\". he took light from a <b>single</b> source and split it in two with two closely spaced slits. whatever random phase jitter the source has is now <b>identical</b> in both beams, so it cancels out of the difference, and the two slits are permanently in step no matter how badly the source misbehaves."
        },
        {
          "t": "def",
          "term": "Coherent sources",
          "html": "Two sources are <b>coherent</b> if they emit waves of the same frequency with a phase difference that stays constant in time. Coherence is what makes an interference pattern <b>steady</b>, and therefore visible.<br><br>Equal amplitudes are <i>not</i> required for a pattern to exist. They only decide how dark the dark fringes get: with unequal amplitudes the minima never reach true zero and the contrast washes out. Two independent sources, however identical, are never coherent."
        },
        {
          "t": "p",
          "html": "There are broadly two ways to manufacture coherent sources from one parent, and both appear in exams by name.<br><br><b>Division of wavefront.</b> A single wavefront is split sideways into two parts that then overlap. That is exactly what Young's two slits do, and what a Fresnel biprism or Lloyd's mirror do too. This topic is division of wavefront from beginning to end.<br><br><b>Division of amplitude.</b> A single beam is partially reflected and partially transmitted at a surface, so the <i>same</i> wave becomes two reduced-amplitude copies that later recombine. That is the mechanism behind the colours of a soap film and an oil slick, and it is the whole of the next topic.<br><br>In both cases the trick is identical in spirit: never use two separate sources, always split one."
        },
        {
          "t": "defgrid",
          "title": "What the pattern needs, and what breaks it",
          "rows": [
            { "k": "Coherence", "v": "non-negotiable. Two independent lamps give uniform illumination and no fringes at all" },
            { "k": "Comparable amplitudes", "v": "for good contrast. If one slit is much brighter, the minima never reach zero" },
            { "k": "Monochromatic light", "v": "for sharp fringes. White light gives a white centre with coloured edges and few visible fringes" },
            { "k": "Small angles", "v": "the simple formulas assume <i>D</i> is far larger than <i>d</i>, so sin θ ≈ tan θ ≈ θ" },
            { "k": "A narrow source slit", "v": "roughly <i>s</i>/<i>S</i> less than λ/<i>d</i>, or fringes from different parts of the source overlap and blur" },
            { "k": "Central fringe", "v": "always BRIGHT in a standard setup, because both paths to it are exactly equal" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 10.4 AND 10.5 · THE APPARATUS, AND THE TRIANGLE INSIDE IT",
          "chips": ["the setup", "the path difference"],
          "captions": [
            "Figure 10.4. Monochromatic light illuminates one narrow slit S, whose wavefronts spread and reach two closely spaced slits S1 and S2, separation d. Because both are fed by the same original wavefront, they are permanently coherent: that single slit is Young's conductor. Their wavefronts spread again and overlap all the way to a screen a distance D away, and where crests meet crests the screen is bright. The amber bands on the right are the fringes: equally spaced, parallel, and centred on O, the point straight ahead where both paths are the same length. Notice the geometry is deliberately not to scale. In a real setup d is under a millimetre and D is about a metre, a ratio of a thousand to one, which is exactly what makes the small-angle approximation safe.",
            "Figure 10.5. The triangle that produces every formula in this topic. Take a point P on the screen a height y above the centre O. Light reaching P from S2 has travelled further than light from S1, and the whole question is by how much. Drop a perpendicular from S1 onto S2P, meeting it at N. Because D is enormously larger than d, the two paths S1P and S2P are very nearly parallel, both making the same angle theta with the axis. Everything beyond N is common to both journeys, so the ENTIRE path difference is the short leg S2N right at the slits, and that leg is d sin(theta). For small angles sin(theta) is tan(theta) is y/D, which turns the path difference into yd/D and finishes the geometry."
          ],
          "frames": [
            {
              "x": [0.6, 10.2], "y": [-3.2, 3.2], "axes": "none", "aspect": 0.675,
              "polys": [
                { "pts": [[1.9, 0.3], [2.1, 0.3], [2.1, 3.05], [1.9, 3.05], [1.9, 0.3]], "fill": "hatch" },
                { "pts": [[1.9, -3.05], [2.1, -3.05], [2.1, -0.3], [1.9, -0.3], [1.9, -3.05]], "fill": "hatch" },
                { "pts": [[3.9, 0.75], [4.1, 0.75], [4.1, 3.05], [3.9, 3.05], [3.9, 0.75]], "fill": "hatch" },
                { "pts": [[3.9, -0.25], [4.1, -0.25], [4.1, 0.25], [3.9, 0.25], [3.9, -0.25]], "fill": "hatch" },
                { "pts": [[3.9, -3.05], [4.1, -3.05], [4.1, -0.75], [3.9, -0.75], [3.9, -3.05]], "fill": "hatch" },
                { "pts": [[9.5, -3.05], [9.5, 3.05]], "tone": "ink" }
              ],
              "arcs": [
                { "at": [1.2, 0], "r": 0.3, "from": -55, "to": 55, "tone": "soft" },
                { "at": [1.2, 0], "r": 0.5, "from": -55, "to": 55, "tone": "soft" },
                { "at": [1.2, 0], "r": 0.68, "from": -55, "to": 55, "tone": "soft" },
                { "at": [4, 0.5], "r": 1.8, "from": -45, "to": 45, "tone": "soft" },
                { "at": [4, 0.5], "r": 3.2, "from": -45, "to": 45, "tone": "soft" },
                { "at": [4, -0.5], "r": 1.8, "from": -45, "to": 45, "tone": "soft" },
                { "at": [4, -0.5], "r": 3.2, "from": -45, "to": 45, "tone": "soft" }
              ],
              "arrows": [
                { "from": [3.7, -0.5], "to": [3.7, 0.5], "head": "both", "tone": "amber", "label": "d" },
                { "from": [4.15, -2.8], "to": [9.45, -2.8], "head": "both", "tone": "amber", "label": "D" }
              ],
              "marks": [
                { "x": 1.2, "y": 0, "glyph": "dot", "label": "S" },
                { "x": 4, "y": 0.5, "glyph": "dot", "label": "S1" },
                { "x": 4, "y": -0.5, "glyph": "dot", "label": "S2" },
                { "x": 9.5, "y": 0, "glyph": "dot", "label": "O" },
                { "x": 9.75, "y": 0.62, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": 1.24, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": 1.86, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": 2.48, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": -0.62, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": -1.24, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": -1.86, "glyph": "square", "tone": "amber" },
                { "x": 9.75, "y": -2.48, "glyph": "square", "tone": "amber" }
              ]
            },
            {
              "x": [-1.2, 9.2], "y": [-2.6, 2.9], "axes": "none", "aspect": 0.545,
              "polys": [
                { "pts": [[8, -2.4], [8, 2.7]], "tone": "ink" }
              ],
              "segments": [
                { "from": [0, 0.5], "to": [8, 2.2] },
                { "from": [0, -0.5], "to": [8, 2.2] },
                { "from": [0, 0], "to": [8, 2.2], "dash": true, "soft": true },
                { "from": [0, 0], "to": [8, 0], "dash": true, "soft": true },
                { "from": [0, 0.5], "to": [0.303, -0.398], "dash": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 1.3, "from": 0, "to": 15.4, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [8.55, 0], "to": [8.55, 2.2], "head": "both", "tone": "amber", "label": "y" },
                { "from": [0.15, -2.2], "to": [7.95, -2.2], "head": "both", "tone": "amber", "label": "D", "at": "below" }
              ],
              "points": [
                { "x": 0, "y": 0.5, "label": "S1", "at": "nw" },
                { "x": 0, "y": -0.5, "label": "S2", "at": "sw" },
                { "x": 8, "y": 2.2, "label": "P", "at": "nw" },
                { "x": 8, "y": 0, "label": "O", "at": "se" },
                { "x": 0.303, "y": -0.398, "label": "N", "at": "se" }
              ],
              "labels": [
                { "x": 2.6, "y": -1.15, "text": "S2N = d sin θ" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PATH DIFFERENCE, AND THE PHASE IT CAUSES",
          "main": "Δ<i>x</i> = <i>d</i> sin θ ≈ <i>yd</i>/<i>D</i><br>φ = (2π/λ) Δ<i>x</i>",
          "legend": [
            "Δ<i>x</i> = path difference, the extra distance light from the far slit travels (m)",
            "<i>d</i> = slit separation (m), <i>D</i> = slit-to-screen distance (m), <i>y</i> = height of the point above the centre (m), θ = angular position (radian)",
            "φ = phase difference (radian, dimensionless), λ = wavelength (m). [L<sup>−1</sup>][L] = 1, so φ is a pure number"
          ],
          "note": "This is the conversion declared in Topic 01 and quoted from Waves, Topic 02, and this is where it starts earning its keep. A path difference of ONE WAVELENGTH is a phase difference of 2π, not of 1."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BRIGHT AND DARK",
          "tag": "m = 0, ±1, ±2 is the fringe ORDER",
          "main": "bright: Δ<i>x</i> = <i>m</i>λ · <i>y</i><sub>bright</sub> = <i>m</i>λ<i>D</i>/<i>d</i><br>dark: Δ<i>x</i> = (2<i>m</i> − 1)λ/2 · <i>y</i><sub>dark</sub> = (2<i>m</i> − 1)λ<i>D</i>/(2<i>d</i>)",
          "legend": [
            "<i>m</i> = fringe order, a whole number. Bright takes <i>m</i> = 0, ±1, ±2, ...; dark takes <i>m</i> = ±1, ±2, ...",
            "λ = wavelength (m), <i>D</i> = screen distance (m), <i>d</i> = slit separation (m), <i>y</i> = position on the screen measured from the centre (m)",
            "Δ<i>x</i> = path difference (m). Bright needs a whole number of wavelengths; dark needs an odd number of half-wavelengths"
          ],
          "note": "This chapter writes the fringe order as m and reserves n for refractive index. Many Indian textbooks use n for the order, so when you compare, mentally swap n for m. Topic 06 is where keeping them apart pays off, because tan(i) = n there is an index and nothing else."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · FRINGE POSITIONS AND FRINGE WIDTH",
          "steps": [
            { "eq": "Δ<i>x</i> = S<sub>2</sub>P − S<sub>1</sub>P", "why": "Two coherent slits S1 and S2, separation <i>d</i>, are lit by light of wavelength λ. A screen sits parallel to them at distance <i>D</i>, with <i>D</i> far larger than <i>d</i>. Take a point P on the screen at height <i>y</i> from the centre O. The brightness at P is decided entirely by the difference in the two path lengths." },
            { "eq": "Δ<i>x</i> = S<sub>2</sub>N = <i>d</i> sin θ", "why": "Drop a perpendicular from S1 onto S2P, meeting it at N. Because <i>D</i> is enormously larger than <i>d</i>, the two paths are very nearly parallel, both at angle θ to the axis. Everything beyond N is common to both, so the only extra distance is the short leg S2N at the slits, and in the right triangle S1S2N that leg is <i>d</i> sin θ." },
            { "eq": "Δ<i>x</i> = <i>yd</i>/<i>D</i>", "why": "For points near the axis θ is tiny, so sin θ ≈ tan θ = <i>y</i>/<i>D</i>. This is the small-angle step, and it is the only approximation in the whole derivation." },
            { "eq": "<i>y</i><sub>bright</sub> = <i>m</i>λ<i>D</i>/<i>d</i>", "why": "A bright fringe needs the two waves to arrive in phase, so the path difference must be a whole number of wavelengths: <i>yd</i>/<i>D</i> = <i>m</i>λ. Solve for <i>y</i>. Note <i>m</i> = 0 gives <i>y</i> = 0: at O the two paths are exactly equal, so the CENTRAL FRINGE IS ALWAYS BRIGHT." },
            { "eq": "<i>y</i><sub>dark</sub> = (2<i>m</i> − 1)λ<i>D</i>/(2<i>d</i>)", "why": "A dark fringe needs the waves exactly out of step, so the path difference must be an odd number of half-wavelengths: <i>yd</i>/<i>D</i> = (2<i>m</i> − 1)λ/2. The first dark fringe, <i>m</i> = 1, sits at λ<i>D</i>/2<i>d</i>, which is halfway to the first bright one." },
            { "eq": "β = <i>y</i><sub><i>m</i>+1</sub> − <i>y</i><sub><i>m</i></sub> = λ<i>D</i>/<i>d</i>", "why": "Subtract consecutive bright positions: (<i>m</i> + 1)λ<i>D</i>/<i>d</i> − <i>m</i>λ<i>D</i>/<i>d</i>. The <i>m</i> cancels, which is the real result: the spacing does not depend on the order, so ALL fringes are equally spaced. Doing the same subtraction on the dark positions gives the identical β, so bright and dark bands are equally wide." }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FRINGE WIDTH",
          "main": "β = λ<i>D</i>/<i>d</i> · θ<sub>β</sub> = β/<i>D</i> = λ/<i>d</i>",
          "legend": [
            "β = fringe width, the distance between consecutive bright fringes, in metres, dimensions [L]",
            "λ = wavelength (m), <i>D</i> = screen distance (m), <i>d</i> = slit separation (m)",
            "θ<sub>β</sub> = angular fringe width (radian), which does not depend on <i>D</i> at all"
          ],
          "note": "Fringe width is a metre by dimensions and a MILLIMETRE in practice. With lambda about 600 nm, D about 1 m and d about 0.5 mm you get 1.2 mm. An answer in metres or micrometres means a factor of a thousand has gone missing."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · INTENSITY ACROSS THE PATTERN",
          "tag": "quoted from Waves, Topic 02",
          "main": "<i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos φ<br>equal slits: <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(φ/2), <i>I</i><sub>max</sub> = 4<i>I</i><sub>0</sub>, <i>I</i><sub>min</sub> = 0<br><i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)/(<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>))<sup>2</sup>",
          "legend": [
            "<i>I</i><sub>1</sub>, <i>I</i><sub>2</sub> = the intensities each slit would give alone (W/m<sup>2</sup>, dimensions [M T<sup>−3</sup>]); <i>I</i><sub>0</sub> = the common value when the slits are equal",
            "φ = phase difference (radian); <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub> = the two amplitudes (m), with <i>I</i> proportional to <i>a</i><sup>2</sup>",
            "<i>I</i> = resultant intensity at the point (W/m<sup>2</sup>)"
          ],
          "note": "The first line is the Waves chapter's result, quoted, not re-derived. What is new here is the second: for equal slits the maximum is 4I0 and not 2I0, and the minimum is exactly zero. Take square roots BEFORE you add, never after."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE MAXIMUM IS 4I0 AND THE AVERAGE IS 2I0",
          "steps": [
            { "eq": "<i>A</i> = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> + 2<i>a</i>·<i>a</i> cos φ)", "why": "Each slit alone delivers amplitude <i>a</i> at the point P, and they arrive with phase difference φ = (2π/λ)Δ<i>x</i>. Adding two equal amplitudes at angle φ is the cosine rule, which is the Waves chapter's superposition result with <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> = <i>a</i>." },
            { "eq": "<i>A</i> = 2<i>a</i> cos(φ/2)", "why": "Use 1 + cos φ = 2cos<sup>2</sup>(φ/2). The HALF-ANGLE is where most marks are lost in this chapter: it is cos(φ/2), never cos φ." },
            { "eq": "<i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(φ/2)", "why": "Intensity goes as the square of amplitude, and writing <i>I</i><sub>0</sub> = <i>a</i><sup>2</sup> for one slit alone gives <i>I</i> = (2<i>a</i>)<sup>2</sup>cos<sup>2</sup>(φ/2) = 4<i>I</i><sub>0</sub>cos<sup>2</sup>(φ/2)." },
            { "eq": "<i>I</i><sub>max</sub> = 4<i>I</i><sub>0</sub> at φ = 0, 2π, 4π ...", "why": "These are exactly the points where Δ<i>x</i> = <i>m</i>λ, the bright fringes. Four times one slit, not twice: two amplitudes added to 2<i>a</i>, and squaring doubled the doubling." },
            { "eq": "<i>I</i><sub>min</sub> = 0 at φ = π, 3π ...", "why": "The dark fringes, where Δ<i>x</i> is an odd number of half-wavelengths. Exactly zero, but only because the two amplitudes are equal; unequal slits leave a floor of (<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>)<sup>2</sup>." },
            { "eq": "⟨<i>I</i>⟩ = 2<i>I</i><sub>0</sub>", "why": "The average of cos<sup>2</sup> over a full cycle is 1/2, so the mean intensity across the pattern is 2<i>I</i><sub>0</sub>, which is exactly the sum of what the two slits deliver separately. Energy was redistributed, not created. This is the check to run whenever a bright fringe comes out brighter than 4<i>I</i><sub>0</sub>." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE PATTERN AS A GRAPH, AND WHAT UNEQUAL SLITS DO TO IT",
          "chips": ["equal slits", "unequal slits"],
          "captions": [
            "Intensity against position on the screen, with the horizontal axis measured in fringe widths and the vertical axis in units of I0, the intensity one slit alone would deliver. Read three things off it. The maxima sit at 4I0, four times one slit and not two, because the amplitudes added first and the squaring came after. The minima reach exactly zero. And the spacing between consecutive maxima is one beta everywhere on the screen, which is the arrow drawn near the bottom: the pattern is uniform, and beta does not depend on the order m.",
            "The same experiment with one slit made narrower, so the two amplitudes are in the ratio 3 to 1 while the total light through the pair is unchanged. Two things happen at once, and only one of them is obvious. The minima lift off zero, because a smaller amplitude can no longer cancel a larger one, so the dark fringes are no longer dark and the CONTRAST is lost. And the maxima drop from 4I0 to 3.2I0. But look at the mean: it is still 2I0, exactly as before, and the dashed line marks the peak the equal-slit case reached. No light was lost, it was just shared out more evenly, which is another way of saying that interference only ever moves energy around."
          ],
          "frames": [
            {
              "x": [-2.6, 2.6], "y": [-0.5, 4.6], "axes": "auto", "aspect": 0.62,
              "axisX": "y / β", "axisY": "I",
              "ticksX": { "at": [-2, -1, 1, 2], "labels": ["−2β", "−β", "β", "2β"] },
              "ticksY": { "at": [0, 2, 4], "labels": ["0", "2I0", "4I0"] },
              "curves": [
                { "c": "cos", "a": 2, "b": 6.2832, "d": 2 }
              ],
              "arrows": [
                { "from": [0, 0.55], "to": [1, 0.55], "head": "both", "tone": "amber", "label": "β" }
              ]
            },
            {
              "x": [-2.6, 2.6], "y": [-0.5, 4.6], "axes": "auto", "aspect": 0.62,
              "axisX": "y / β", "axisY": "I",
              "ticksX": { "at": [-2, -1, 1, 2], "labels": ["−2β", "−β", "β", "2β"] },
              "ticksY": { "at": [0, 2, 4], "labels": ["0", "2I0", "4I0"] },
              "curves": [
                { "c": "cos", "a": 1.2, "b": 6.2832, "d": 2 },
                { "c": "line", "m": 0, "k": 4, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 1.75, "y": 1.05, "text": "minima never reach 0" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TWO THINGS THAT MOVE THE PATTERN",
          "main": "in a medium: β′ = β/<i>n</i><br>thin sheet over one slit: shift = (<i>n</i> − 1)<i>t</i>/λ fringes, β unchanged",
          "legend": [
            "<i>n</i> = refractive index of the medium or of the sheet (no unit); <i>t</i> = sheet thickness (m)",
            "β = fringe width in air (m), β′ = fringe width when the whole apparatus is immersed (m)",
            "λ = wavelength in air (m). The shift is a pure number: a count of fringe widths"
          ],
          "note": "Immersing the apparatus shrinks lambda to lambda/n, and beta is proportional to lambda, so the fringes crowd CLOSER. A sheet over one slit adds a constant (n - 1)t to every ray through that slit, which slides the whole pattern rigidly toward that slit and leaves the spacing untouched."
        },
        {
          "t": "p",
          "html": "One more thing the pattern does, and it is a favourite one-mark question. Use <b>white light</b> instead of a laser and the central fringe is <b>white</b>, because at O the path difference is zero for every colour at once and they all reinforce together. Move even slightly off centre and the colours separate, because β = λ<i>D</i>/<i>d</i> is proportional to λ: violet at about 400 nm has the smallest fringe width and appears <b>nearest</b> the centre, red at about 700 nm the largest and appears <b>furthest</b> out. Only a handful of coloured fringes survive before the orders of different colours overlap and wash back to white.<br><br>The visible band running 400 to 700 nm is the Electromagnetic Waves chapter's, quoted rather than restated, and it is the reason this ordering is violet inward and red outward and never the other way."
        },
        {
          "t": "proc",
          "title": "Any YDSE numerical, in fringe widths",
          "steps": [
            "Compute β = λ<i>D</i>/<i>d</i> FIRST, in millimetres, and sanity-check that it landed between about 0.1 mm and a few millimetres.",
            "Locate everything in units of β: the <i>m</i>th bright fringe is at <i>m</i>β, the <i>m</i>th dark fringe at (<i>m</i> − 1/2)β. No further substitution needed.",
            "For an intensity question, convert the path difference to phase with φ = (2π/λ)Δ<i>x</i>, then use <i>I</i> = 4<i>I</i><sub>0</sub>cos<sup>2</sup>(φ/2). Watch the half-angle.",
            "For a glass sheet over one slit, the pattern shifts by (<i>n</i> − 1)<i>t</i>/λ fringe widths toward the covered slit. β does not change, so do not recompute it.",
            "For immersion, divide β by <i>n</i> and stop. For a coincidence of two wavelengths, set <i>m</i><sub>1</sub>λ<sub>1</sub> = <i>m</i><sub>2</sub>λ<sub>2</sub> and take the smallest whole-number pair."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In a Young's double-slit experiment, light of wavelength 600 nm illuminates two slits 0.8 mm apart, with the screen 1.5 m away. Find (a) the fringe width and (b) the distance of the 3rd bright fringe from the centre.",
          "steps": [
            "(a) β = λ<i>D</i>/<i>d</i> = (600 × 10<sup>−9</sup>)(1.5)/(0.8 × 10<sup>−3</sup>) = (9 × 10<sup>−7</sup>)/(8 × 10<sup>−4</sup>) = 1.125 × 10<sup>−3</sup> m = 1.125 mm.",
            "Sanity check before going on: about a millimetre, which is what a school setup gives.",
            "(b) The <i>m</i>th bright fringe sits at <i>y</i><sub><i>m</i></sub> = <i>m</i>β, so for <i>m</i> = 3, <i>y</i><sub>3</sub> = 3 × 1.125 = 3.375 mm.",
            "Working in fringe widths saved a second substitution: once β is known, every bright fringe is just a multiple of it."
          ],
          "ans": "β = 1.125 mm · the 3rd bright fringe is 3.375 mm from the centre"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A YDSE pattern has fringe width β in air. The entire apparatus, slits and screen and all, is immersed in water (<i>n</i> = 4/3). The new fringe width is (A) 4β/3 (B) 3β/4 (C) β (D) 16β/9.",
          "steps": [
            "Immersing the apparatus changes exactly one thing: the wavelength shrinks to λ′ = λ/<i>n</i>. Nothing about <i>D</i> or <i>d</i> moves.",
            "Since β is proportional to λ, β′ = β/<i>n</i> = β/(4/3) = 3β/4.",
            "The trap is the instinct that a higher refractive index makes things bigger, which pushes students to (A). It is the wrong way round: a denser medium SHORTENS the wavelength, so the fringes crowd closer together.",
            "Option (D) is for those who square the index by mistake. The sanity check is one sentence: water shrinks λ, so water shrinks β."
          ],
          "ans": "(B) 3β/4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "In a YDSE with <i>d</i> = 0.5 mm and <i>D</i> = 1 m, light containing two wavelengths λ<sub>1</sub> = 480 nm and λ<sub>2</sub> = 600 nm is used. Find the least distance from the centre where a bright fringe of λ<sub>1</sub> coincides with a bright fringe of λ<sub>2</sub>.",
          "steps": [
            "A coincidence needs one position to be a bright fringe for BOTH wavelengths at once: <i>m</i><sub>1</sub>λ<sub>1</sub><i>D</i>/<i>d</i> = <i>m</i><sub>2</sub>λ<sub>2</sub><i>D</i>/<i>d</i>, so <i>m</i><sub>1</sub>λ<sub>1</sub> = <i>m</i><sub>2</sub>λ<sub>2</sub>.",
            "<i>m</i><sub>1</sub>/<i>m</i><sub>2</sub> = λ<sub>2</sub>/λ<sub>1</sub> = 600/480 = 5/4, so the smallest whole numbers are <i>m</i><sub>1</sub> = 5 and <i>m</i><sub>2</sub> = 4.",
            "<i>y</i> = 5(480 × 10<sup>−9</sup>)(1)/(0.5 × 10<sup>−3</sup>) = (2.4 × 10<sup>−6</sup>)/(5 × 10<sup>−4</sup>) = 4.8 × 10<sup>−3</sup> m = 4.8 mm.",
            "Check with the other wavelength: 4(600 × 10<sup>−9</sup>)(1)/(0.5 × 10<sup>−3</sup>) = 4.8 mm. The two agree, which is the whole point of a coincidence problem."
          ],
          "ans": "<i>y</i> = 4.8 mm, where the 5th fringe of 480 nm meets the 4th of 600 nm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A thin transparent sheet of refractive index <i>n</i> = 1.5 and thickness <i>t</i> is placed over ONE slit of a YDSE using light of wavelength 500 nm. The central bright fringe shifts to where the 6th bright fringe used to be. Find <i>t</i>, then find the new fringe width if <i>d</i> = 0.4 mm and <i>D</i> = 1 m.",
          "steps": [
            "The sheet replaces a length <i>t</i> of air by <i>t</i> of glass, adding optical path (<i>n</i> − 1)<i>t</i> to that slit's journey. This is the same (<i>n</i> − 1)<i>t</i> factor that tilted the wavefront through the thin prism in Topic 01.",
            "The centre of the pattern is wherever the TOTAL path difference is zero, so it slides toward the covered slit until the geometry cancels the sheet's extra path.",
            "It moved by 6 fringes, so the introduced path difference equals 6 wavelengths: (<i>n</i> − 1)<i>t</i> = 6λ.",
            "<i>t</i> = 6λ/(<i>n</i> − 1) = 6(500 × 10<sup>−9</sup>)/(0.5) = (3 × 10<sup>−6</sup>)/(0.5) = 6 × 10<sup>−6</sup> m = 6 μm.",
            "New fringe width: β = λ<i>D</i>/<i>d</i> = (500 × 10<sup>−9</sup>)(1)/(0.4 × 10<sup>−3</sup>) = 1.25 × 10<sup>−3</sup> m = 1.25 mm, and it is unchanged by the sheet.",
            "The sting: students expect β to change because the picture looks disturbed. It does not. A uniform sheet adds a CONSTANT path to every ray through that slit, so the whole pattern translates rigidly. Spacing preserved, centre moved."
          ],
          "ans": "<i>t</i> = 6 μm · β = 1.25 mm, unchanged, with the pattern shifted by 6 fringes"
        },
        {
          "t": "mcq",
          "q": "Two independent sodium lamps emitting light of the same wavelength are used in place of the two slits in Young's experiment. The screen will show",
          "opts": [
            { "label": "the usual bright and dark fringes", "nudge": "This assumes equal wavelength is enough. It is not: the requirement is a CONSTANT PHASE relationship, and two independent lamps cannot supply one." },
            { "label": "wider fringes", "nudge": "This treats \"different source\" as a change of geometry. Nothing about <i>d</i>, <i>D</i> or λ moved, so if fringes existed at all they would have the same width." },
            { "label": "uniform illumination with no fringes", "nudge": null },
            { "label": "only a single central bright fringe", "nudge": "This misremembers the white-light result, where one central white fringe survives, and applies it where there is no coherence at all. With no coherence there is no central fringe either." }
          ],
          "correct": 2,
          "solution": "Two independent lamps are incoherent: their phase difference reshuffles about 10<sup>8</sup> times a second, so the pattern moves faster than it can be seen and averages to uniform brightness. This is why Young had to split ONE source."
        },
        {
          "t": "mcq",
          "q": "In a YDSE the fringe width is β. If the distance between the slits is doubled and the distance to the screen is halved, the new fringe width is",
          "opts": [
            { "label": "β", "nudge": "This assumes the two changes cancel. They do not: <i>d</i> is in the denominator and <i>D</i> is in the numerator, so doubling one and halving the other push β the SAME way, both downward." },
            { "label": "β/2", "nudge": "This catches only one of the two effects. Apply both: a factor of 1/2 from doubling <i>d</i> and another 1/2 from halving <i>D</i>." },
            { "label": "β/4", "nudge": null },
            { "label": "4β", "nudge": "This inverts both dependences at once, which would mean a wider slit separation spreads the fringes out. It squeezes them." }
          ],
          "correct": 2,
          "solution": "β = λ<i>D</i>/<i>d</i>. Doubling <i>d</i> halves β; halving <i>D</i> halves it again. β → β/4. Push <i>d</i> all the way to zero and β runs away to infinity, which is the same dependence taken to its limit: two slits on top of each other are one slit, with nothing to interfere with."
        },
        {
          "t": "mcq",
          "q": "At a point on the screen in a YDSE the path difference between the two waves is λ/4. If the maximum intensity in the pattern is <i>I</i><sub>0</sub>, the intensity at this point is",
          "opts": [
            { "label": "<i>I</i><sub>0</sub>", "nudge": "This treats λ/4 as if it were a maximum. It is neither a maximum nor a minimum: a quarter-wavelength of path is a quarter cycle, right between the two." },
            { "label": "<i>I</i><sub>0</sub>/2", "nudge": null },
            { "label": "<i>I</i><sub>0</sub>/4", "nudge": "This comes from using cos<sup>2</sup>φ instead of cos<sup>2</sup>(φ/2), which is the single most common intensity error in the chapter. cos<sup>2</sup>(π/2) = 0 would give zero anyway; cos<sup>2</sup> of π/4 is what is wanted." },
            { "label": "3<i>I</i><sub>0</sub>/4", "nudge": "This comes from using sin<sup>2</sup>(φ/2), which treats the central point as a minimum and measures from the wrong end." }
          ],
          "correct": 1,
          "solution": "φ = (2π/λ)(λ/4) = π/2. With <i>I</i><sub>max</sub> = <i>I</i><sub>0</sub> the pattern is <i>I</i> = <i>I</i><sub>0</sub>cos<sup>2</sup>(φ/2) = <i>I</i><sub>0</sub>cos<sup>2</sup>(π/4) = <i>I</i><sub>0</sub>/2."
        },
        {
          "t": "mcq",
          "q": "In a YDSE with white light, the central fringe is white. The fringe closest to the central white fringe is",
          "opts": [
            { "label": "white", "nudge": "White holds only exactly at the centre, where the path difference is zero for every colour at once. Step off centre and the colours immediately separate." },
            { "label": "violet", "nudge": null },
            { "label": "red", "nudge": "This reverses the wavelength dependence. β is proportional to λ, so red at 700 nm has the WIDEST fringes and lands furthest from the centre." },
            { "label": "black", "nudge": "This confuses the edge of the white-light pattern with a dark fringe. The inner fringes here are coloured, not black; the first dark band for any one colour is further out than the first coloured bright band." }
          ],
          "correct": 1,
          "solution": "β = λ<i>D</i>/<i>d</i>, so the shortest wavelength has the smallest fringe width and satisfies its bright condition closest to the centre. Violet is nearest, red is furthest."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] In a YDSE the slits are 1 mm apart and the screen is 1.2 m away. If the fringe width is 0.6 mm, find the wavelength of the light used.", "a": "λ = β<i>d</i>/<i>D</i> = (0.6 × 10<sup>−3</sup>)(1 × 10<sup>−3</sup>)/1.2 = (6 × 10<sup>−7</sup>)/1.2 = 5 × 10<sup>−7</sup> m = 500 nm. Comfortably inside the visible band, which is the check." },
            { "q": "[NEET] Two coherent sources have intensities in the ratio 4 : 1. Find the ratio <i>I</i><sub>max</sub> : <i>I</i><sub>min</sub> in the interference pattern.", "a": "Amplitudes go as the square roots, so <i>a</i><sub>1</sub> : <i>a</i><sub>2</sub> = 2 : 1. Then <i>I</i><sub>max</sub> : <i>I</i><sub>min</sub> = (2 + 1)<sup>2</sup> : (2 − 1)<sup>2</sup> = 9 : 1. Take the square roots BEFORE adding; adding the intensities first gives 25 : 9 and is wrong." },
            { "q": "[JEE Main] In a YDSE in air the fringe width is 0.4 mm, with <i>d</i> = 0.5 mm and <i>D</i> = 50 cm. Find (a) the wavelength and (b) the fringe width when the experiment is repeated in a medium of refractive index 1.6.", "a": "(a) λ = β<i>d</i>/<i>D</i> = (0.4 × 10<sup>−3</sup>)(0.5 × 10<sup>−3</sup>)/0.5 = (2 × 10<sup>−7</sup>)/0.5 = 4 × 10<sup>−7</sup> m = 400 nm. (b) β′ = β/<i>n</i> = 0.4/1.6 = 0.25 mm. Denser medium, narrower fringes." },
            { "q": "[JEE Main] In a YDSE the path difference at a point P on the screen is 1.5λ. If the intensity due to each slit alone is <i>I</i><sub>0</sub>, what is the resultant intensity at P?", "a": "φ = (2π/λ)(1.5λ) = 3π. <i>I</i> = 4<i>I</i><sub>0</sub>cos<sup>2</sup>(3π/2) = 0. P is a dark point, which you could also have said at once: 1.5λ is an odd number of half-wavelengths." },
            { "q": "[JEE Advanced] In a YDSE the two slits have widths in the ratio 1 : 9, so the amplitudes reaching the screen are in the ratio 1 : 3. Find (a) the ratio of maximum to minimum intensity and (b) the ratio of the intensity at a constructive point to the intensity due to the narrower slit alone.", "a": "(a) <i>I</i><sub>max</sub> : <i>I</i><sub>min</sub> = (3 + 1)<sup>2</sup> : (3 − 1)<sup>2</sup> = 16 : 4 = 4 : 1. (b) At a constructive point <i>I</i> = (<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)<sup>2</sup> = (1 + 3)<sup>2</sup> = 16 units, while the narrow slit alone gives <i>a</i><sub>1</sub><sup>2</sup> = 1 unit, so the ratio is 16 : 1." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the half-angle in the intensity formula.</b> It is <i>I</i> = 4<i>I</i><sub>0</sub>cos<sup>2</sup>(φ/2), never cos<sup>2</sup>φ. Losing the 1/2 is the most common intensity error in the whole chapter, and it silently converts a maximum into a minimum.",
            "<b>Recomputing β after inserting a glass sheet.</b> A uniform sheet over one slit only SHIFTS the pattern, by (<i>n</i> − 1)<i>t</i>/λ fringes. It leaves β = λ<i>D</i>/<i>d</i> untouched, because none of λ, <i>D</i> or <i>d</i> changed.",
            "<b>Multiplying by n instead of dividing when the apparatus is immersed.</b> A denser medium shrinks λ, so it shrinks β: β′ = β/<i>n</i>. If your fringes got wider in water, you inverted it.",
            "<b>Mixing the bright and dark conditions.</b> Bright is Δ<i>x</i> = <i>m</i>λ, dark is Δ<i>x</i> = (2<i>m</i> − 1)λ/2. A reliable warning sign is an answer with a dark central fringe: at the centre Δ<i>x</i> = 0, which is always bright in a standard YDSE.",
            "<b>Writing <i>I</i><sub>max</sub> = 2<i>I</i><sub>0</sub> for two equal slits.</b> It is 4<i>I</i><sub>0</sub>. Amplitudes add to 2<i>a</i>, and intensity is the square. 2<i>I</i><sub>0</sub> is the AVERAGE over the pattern, which is a different and equally important number."
          ]
        },
        {
          "t": "protip",
          "html": "think in fringes, not in metres. compute β once, then the <i>m</i>th bright fringe is at <i>m</i>β, the <i>m</i>th dark fringe is at (<i>m</i> − 1/2)β, and a glass sheet shifts the whole thing by (<i>n</i> − 1)<i>t</i>/λ fringes. converting everything to \"number of fringe widths\" turns messy substitutions into one-line ratios, and it makes the sanity check automatic: β should land near a millimetre, and every position on the screen should come out as a small multiple of it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "coherent = same frequency, constant phase difference", "note": "two independent bulbs give NO fringes. split one source" },
            { "f": "Δ<i>x</i> = <i>d</i> sin θ ≈ <i>yd</i>/<i>D</i> · φ = (2π/λ)Δ<i>x</i>", "note": "one λ of path is 2π of phase" },
            { "f": "bright: Δ<i>x</i> = <i>m</i>λ · dark: Δ<i>x</i> = (2<i>m</i> − 1)λ/2", "note": "the central fringe is always bright" },
            { "f": "β = λ<i>D</i>/<i>d</i> · θ<sub>β</sub> = λ/<i>d</i>", "note": "uniform, independent of <i>m</i>, and near a millimetre in the lab" },
            { "f": "<i>I</i> = 4<i>I</i><sub>0</sub>cos<sup>2</sup>(φ/2) · <i>I</i><sub>max</sub> = 4<i>I</i><sub>0</sub> · ⟨<i>I</i>⟩ = 2<i>I</i><sub>0</sub>", "note": "four at the peak, two on average. energy only moves" },
            { "f": "<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)/(<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>))<sup>2</sup>", "note": "zero minima only when the amplitudes are equal" },
            { "f": "immersed: β′ = β/<i>n</i> · sheet over one slit: shift (<i>n</i> − 1)<i>t</i>/λ fringes, β unchanged", "note": "one squeezes, the other slides" },
            { "f": "white light: white centre, violet nearest, red furthest", "note": "because β is proportional to λ" }
          ],
          "aids": [
            "order m, index n. keep them apart and topic 06 stays clean",
            "denser shrinks: shorter λ means narrower fringes",
            "four I-nought at a maximum, two I-nought on average. if a bright fringe beats 4I0, a factor went astray"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Thin-Film Interference",
      "chip": "04 THE FILM",
      "kalam": "count the flips before you decide bright or dark",
      "blocks": [
        {
          "t": "p",
          "html": "A soap bubble is colourless soapy water, and it blazes with shifting rainbows. A film of oil on a rain puddle does the same. There is no pigment anywhere in either of them. The colour is pure wave physics, and it is the second great branch of interference: <b>division of amplitude</b>.<br><br>The mechanism is short. When light hits a thin transparent film it does not simply pass through. Part of it reflects off the <b>top</b> surface. Part refracts in, crosses to the <b>bottom</b> surface, reflects there, and comes back out. You now have two reflected beams travelling in the same direction, and because they came from the same original ray they are perfectly coherent whatever the source is doing. They interfere. Whether you see brightness or darkness for a given colour depends on the extra distance the second beam covered inside the film, which depends on the thickness <i>t</i>, on the index <i>n</i>, and on the angle you are looking from.<br><br>Because the condition depends on wavelength, white light produces colour: at one thickness a particular colour reinforces while its neighbours partly cancel, so that patch of film glows with it. A bubble's wall thins and flows as it drains, the thickness changes from place to place and moment to moment, and the colours swirl."
        },
        {
          "t": "think",
          "html": "the two reflected beams are two runners who start together; one takes a short detour down through the film and back up. if the detour lands him back in step with the first runner, they reinforce and you see brightness. if it lands him exactly out of step, they cancel and you see darkness. so far so simple. but there is a twist that trips up almost everyone, and it has nothing to do with distance: one of the two runners is turned around at the door."
        },
        {
          "t": "p",
          "html": "That twist is the <b>half-wave loss</b>. When light reflects at a surface going from a <b>rarer</b> medium into a <b>denser</b> one, low <i>n</i> to high <i>n</i>, the reflected wave suffers an abrupt phase reversal of π, which is worth an extra path of λ/2. Reflection from denser to rarer has no such change at all.<br><br>For a film sitting in air, the <b>top</b> reflection is air into film, rarer into denser, so it takes the flip. The <b>bottom</b> reflection is film into air, denser into rarer, so it does not. There is a NET λ/2 to account for, and that single extra half-wavelength is why the bright and dark conditions for a thin film look flipped compared with what you would naively write down.<br><br>Here is the cleanest consequence, and it is a picture you have seen. Just before a soap bubble pops, the top of it goes <b>black</b>. The film there has thinned until 2<i>nt</i> is negligible, so the only thing left in the comparison is the half-wave loss, and the two reflected beams are exactly λ/2 out of step for <i>every</i> visible wavelength at once. Zero thickness gives darkness, not brightness. Hold that limiting case: it will decide the centre of the Newton's rings pattern later in this topic."
        },
        {
          "t": "def",
          "term": "The half-wave loss, and how to count it",
          "html": "A reflection adds an extra λ/2 to the path <b>only</b> when the wave goes from a rarer medium into a denser one. Denser into rarer adds nothing.<br><br>So the routine for any thin film is: look at the top surface and the bottom surface, count how many of the two reflections are rarer into denser, and call that count <i>N</i>. A film in air has <i>N</i> = 1, one net half-wave loss. A film resting on glass, with the film's index between air and glass, has <i>N</i> = 2, which is a full λ and therefore no net effect at all, and the bright and dark conditions swap back.<br><br>Everything in this topic assumes a film in air, so <i>N</i> = 1 throughout unless a problem says otherwise."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · OPTICAL PATH DIFFERENCE IN A THIN FILM",
          "main": "Δ<sub>path</sub> = 2<i>nt</i> cos <i>r</i><br>Δ<sub>eff</sub> = 2<i>nt</i> cos <i>r</i> − λ/2",
          "legend": [
            "<i>n</i> = refractive index of the film (no unit); <i>t</i> = film thickness (m, typically hundreds of nm)",
            "<i>r</i> = the angle of refraction INSIDE the film, measured from the normal (degrees). At near-normal incidence cos <i>r</i> ≈ 1 and the path difference is just 2<i>nt</i>",
            "Δ = path difference (m); λ = wavelength in vacuum (m). The λ/2 is the half-wave loss at the top surface, and it is subtracted for a film in air"
          ],
          "note": "It is 2nt cos r, not 2t cos r. The film's index multiplies the path because what matters is the OPTICAL path, and at non-normal incidence the cosine matters too."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE 2nt cos r COMES FROM",
          "steps": [
            { "eq": "AB + BC = 2<i>t</i>/cos <i>r</i>", "why": "A ray strikes the film at A with incidence angle <i>i</i> and refracts to angle <i>r</i> inside. Beam 1 reflects at A. Beam 2 goes in, reflects at B on the bottom surface, and leaves at C on the top, parallel to beam 1. Each of the two legs inside the film is a hypotenuse of a right triangle of height <i>t</i>, so each is <i>t</i>/cos <i>r</i>." },
            { "eq": "optical path inside = 2<i>nt</i>/cos <i>r</i>", "why": "Optical path is the geometric path times the index of the medium it is in, because that is the length that counts phase. Multiplying by <i>n</i> is the whole reason a thicker index gives more colour for the same thickness." },
            { "eq": "AD = <i>AC</i> sin <i>i</i> = 2<i>nt</i> sin<sup>2</sup><i>r</i>/cos <i>r</i>", "why": "Beam 1 has a head start: by the time beam 2 emerges at C, beam 1 has already travelled to the level of C. Drop a perpendicular CD onto beam 1; the extra distance beam 1 covered is AD. With AC = 2<i>t</i> tan <i>r</i> along the surface and Snell's law sin <i>i</i> = <i>n</i> sin <i>r</i>, this becomes 2<i>nt</i> sin<sup>2</sup><i>r</i>/cos <i>r</i>." },
            { "eq": "Δ<sub>path</sub> = 2<i>nt</i>(1 − sin<sup>2</sup><i>r</i>)/cos <i>r</i> = 2<i>nt</i> cos <i>r</i>", "why": "Subtract the head start from the in-film path and use 1 − sin<sup>2</sup><i>r</i> = cos<sup>2</sup><i>r</i>. One cos <i>r</i> cancels and the whole geometry collapses to a single clean product." },
            { "eq": "Δ<sub>eff</sub> = 2<i>nt</i> cos <i>r</i> − λ/2", "why": "Now add the half-wave loss. Beam 1 reflects at the top, air into denser film, and gains λ/2; beam 2's internal reflection at the bottom, film into air, gains nothing. So there is one net λ/2, subtracted here." },
            { "eq": "bright when Δ<sub>eff</sub> = <i>m</i>λ · dark when Δ<sub>eff</sub> = (<i>m</i> + 1/2)λ", "why": "READ THIS CAREFULLY, because printed copies of this book have it backwards and the errata corrects it. Reinforcement needs the effective difference to be a WHOLE number of wavelengths; cancellation needs a HALF-INTEGER number. Move the λ/2 across and you get the two clean statements in the box below: reflected bright at 2<i>nt</i> cos <i>r</i> = (<i>m</i> + 1/2)λ, reflected dark at 2<i>nt</i> cos <i>r</i> = <i>m</i>λ. Check it against the black soap film: at <i>t</i> = 0 the effective difference is −λ/2, a half-integer, so dark. Which is what you see." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 10.6 AND 10.7 · TWO REFLECTIONS, AND THE GEOMETRY BETWEEN THEM",
          "chips": ["the two beams", "the geometry"],
          "captions": [
            "Figure 10.6. A film of index n and thickness t sitting in air. One ray arrives at A. Part of it reflects immediately as beam 1, and that reflection is air into a denser film, so it suffers the half-wave flip: this is the only place in the picture where the flip happens. The rest refracts in at angle r, crosses to B on the bottom surface, reflects there (film into air, denser into rarer, no flip at all), and leaves at C as beam 2, travelling parallel to beam 1. Two beams, same direction, same original ray, therefore coherent, therefore they interfere. The whole topic is about the difference between their journeys.",
            "Figure 10.7. The same picture with the bookkeeping drawn in. Beam 2 travels the two legs AB and BC inside the film, each of length t / cos r, and the optical path is n times that. But beam 1 got a head start: by the time beam 2 emerges at C, beam 1 has already reached the level of C, and the dashed perpendicular CD marks how far. So the extra optical path belonging to beam 2 is n(AB + BC) minus AD, and with AC = 2t tan r and Snell's law that difference collapses to exactly 2nt cos r. Then subtract the lambda over 2 from the flip at A, and the conditions in the formula box follow."
          ],
          "frames": [
            {
              "x": [-2.8, 2.2], "y": [-1.9, 1.9], "axes": "none", "aspect": 0.763,
              "polys": [
                { "pts": [[-2.75, -1.2], [2.15, -1.2], [2.15, 0], [-2.75, 0], [-2.75, -1.2]], "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-2.422, 1.455], "to": [-1.2, 0], "tone": "amber" },
                { "from": [-1.2, 0], "to": [0.022, 1.455], "tone": "amber", "label": "1, λ/2 flip", "at": "start" },
                { "from": [-0.062, 0], "to": [1.16, 1.455], "tone": "amber", "label": "2", "at": "end" }
              ],
              "segments": [
                { "from": [-1.2, 0], "to": [-0.631, -1.2] },
                { "from": [-0.631, -1.2], "to": [-0.062, 0], "label": "no flip at B", "at": "mid" },
                { "from": [-2.45, -1.2], "to": [-2.45, 0], "arrow": true, "label": "t", "at": "mid" }
              ],
              "points": [
                { "x": -1.2, "y": 0, "label": "A", "at": "sw" },
                { "x": -0.631, "y": -1.2, "label": "B", "at": "sw" },
                { "x": -0.062, "y": 0, "label": "C", "at": "nw" }
              ],
              "labels": [
                { "x": 1.35, "y": -0.62, "text": "film, index n" }
              ]
            },
            {
              "x": [-2.8, 2.2], "y": [-1.9, 1.9], "axes": "none", "aspect": 0.763,
              "polys": [
                { "pts": [[-2.75, -1.2], [2.15, -1.2], [2.15, 0], [-2.75, 0], [-2.75, -1.2]], "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-1.2, 0], "to": [0.022, 1.455], "tone": "amber" },
                { "from": [-0.062, 0], "to": [1.16, 1.455], "tone": "amber" }
              ],
              "segments": [
                { "from": [-1.2, 0], "to": [-0.631, -1.2], "label": "t / cos r", "at": "mid" },
                { "from": [-0.631, -1.2], "to": [-0.062, 0] },
                { "from": [-0.062, 0], "to": [-0.7295, 0.5605], "dash": true },
                { "from": [-1.2, 0], "to": [-0.062, 0], "label": "2t tan r", "at": "below" }
              ],
              "arcs": [
                { "at": [-1.2, 0], "r": 0.62, "from": 251, "to": 270, "label": "r", "tone": "amber" }
              ],
              "points": [
                { "x": -1.2, "y": 0, "label": "A", "at": "nw" },
                { "x": -0.631, "y": -1.2, "label": "B", "at": "sw" },
                { "x": -0.062, "y": 0, "label": "C", "at": "se" },
                { "x": -0.7295, "y": 0.5605, "label": "D", "at": "nw" }
              ],
              "labels": [
                { "x": 1.35, "y": -0.62, "text": "film, index n" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FOUR CONDITIONS",
          "tag": "film in air, one net half-wave loss",
          "main": "reflected bright: 2<i>nt</i> cos <i>r</i> = (<i>m</i> + 1/2)λ<br>reflected dark: 2<i>nt</i> cos <i>r</i> = <i>m</i>λ<br>transmitted: exactly reversed",
          "legend": [
            "<i>m</i> = 0, 1, 2, ... the order, a whole number; <i>n</i> = film index (no unit); <i>t</i> = thickness (m)",
            "<i>r</i> = refraction angle inside the film. Near-normal incidence gives cos <i>r</i> ≈ 1, so both conditions use 2<i>nt</i>",
            "λ = vacuum wavelength (m), usually quoted in nanometres"
          ],
          "note": "The 1/2 sits with the BRIGHT condition for reflected light, which is the reverse of what you would write without the half-wave loss. Reflected and transmitted patterns are complementary: where the reflection is bright the transmission is dark, which is simply energy conservation."
        },
        {
          "t": "defgrid",
          "title": "Count the flips, then choose the condition",
          "rows": [
            { "k": "Film in air", "v": "top air-to-film YES, bottom film-to-air no. Net 1. Bright at (<i>m</i> + 1/2)λ" },
            { "k": "Film on glass", "v": "both rarer-to-denser, net 2, worth a full λ. The conditions swap: bright at <i>m</i>λ" },
            { "k": "Very thin film", "v": "2<i>nt</i> → 0 but the flip remains, so the reflection is DARK for every colour. The black soap bubble" },
            { "k": "Reflected vs transmitted", "v": "complementary. Reflected bright is transmitted dark, and the reverse" },
            { "k": "Too thick", "v": "paths differ by many wavelengths, all colours overlap, and the film looks plain white" },
            { "k": "Optical, not geometric", "v": "always 2<i>nt</i> cos <i>r</i>. Dropping the <i>n</i> or the cosine is the commonest slip" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ANTI-REFLECTION COATING",
          "main": "<i>t</i><sub>min</sub> = λ/(4<i>n</i><sub>coat</sub>) · ideal <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>",
          "legend": [
            "<i>t</i><sub>min</sub> = thinnest coating that cancels the reflection (m). For visible light this lands near 100 nm",
            "λ = wavelength in vacuum (m); <i>n</i><sub>coat</sub> = index of the COATING, not of the glass",
            "<i>n</i><sub>glass</sub> = index of the substrate underneath (no unit)"
          ],
          "note": "A coating whose index lies between air and glass makes BOTH reflections rarer-to-denser, so both carry a half-wave loss and the two losses cancel. What is left is the plain 2n t, and destructive interference then needs the quarter-wave thickness. Matching n_coat to the square root of n_glass makes the two reflected amplitudes equal as well, so the cancellation is nearly complete: that is the bluish bloom on camera lenses."
        },
        {
          "t": "proc",
          "title": "Newton's rings, from the wedge to the radius",
          "steps": [
            "Set the scene: a plano-convex lens of radius of curvature <i>R</i> rests on a flat glass plate, so the air gap between them grows outward from zero at the contact point.",
            "Get the gap from the geometry: <i>t</i> = ρ<sup>2</sup>/(2<i>R</i>), where ρ is the distance from the contact point. This is the sagitta of a shallow arc, and it is the only geometry in the problem.",
            "Count the half-wave losses: the gap is AIR between two pieces of glass, so the reflection at the bottom of the gap is air into glass, rarer into denser, and takes the flip; the one at the top does not. Net 1, exactly like a film in air.",
            "Apply the DARK condition with <i>n</i> = 1 for air: 2<i>t</i> = <i>m</i>λ. Substituting <i>t</i> gives ρ<sup>2</sup>/<i>R</i> = <i>m</i>λ, so ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>).",
            "Check the centre. At the contact point <i>t</i> = 0, which satisfies the dark condition with <i>m</i> = 0, so the central spot is DARK. If your answer makes it bright, you dropped the flip.",
            "Fill the gap with a liquid of index <i>n</i> and the condition becomes 2<i>nt</i> = <i>m</i>λ, so every ring shrinks by a factor of √<i>n</i>. Measuring how much they shrink is how the liquid's index gets measured."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NEWTON'S RINGS, IN REFLECTED LIGHT",
          "main": "<i>t</i> = ρ<sup>2</sup>/(2<i>R</i>)<br>dark: ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>) · bright: ρ<sub><i>m</i></sub> = √((<i>m</i> − 1/2)λ<i>R</i>)<br>liquid in the gap: ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>/<i>n</i>)",
          "legend": [
            "ρ<sub><i>m</i></sub> = radius of the <i>m</i>th ring (m, and a few millimetres in practice); <i>R</i> = radius of curvature of the lens (m)",
            "<i>t</i> = air-gap thickness at that radius (m); λ = wavelength (m); <i>m</i> = ring order, a whole number",
            "<i>n</i> = index of a liquid filling the gap (no unit). The rings shrink by √<i>n</i>"
          ],
          "note": "The centre is DARK, because t = 0 there and the half-wave loss survives. Radii go as the square root of the order, so the rings crowd closer together the further out you count, which is what the picture shows and what a measurement confirms."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · NEWTON'S RINGS, IN SECTION AND FROM ABOVE",
          "chips": ["the air wedge", "the rings"],
          "captions": [
            "Side view. A plano-convex lens rests on a flat glass plate and touches it at one point. Between them is a wedge of AIR whose thickness grows outward, and the thickness at a distance rho from the contact point is t = rho squared over 2R, which is just the sagitta of a shallow arc. That is the only geometry in the whole experiment: everything else is the thin-film condition applied to a gap whose thickness you can now write down. The curvature here is drawn far stronger than any real lens, where R is of order a metre and the gap at a millimetre out is a few hundred nanometres.",
            "The same setup seen from above in reflected monochromatic light. Concentric dark rings on a bright background, and the crucial detail is at the very centre: it is DARK, not bright. At the contact point the gap thickness is zero, so the only thing left in the comparison is the half-wave flip at the air-to-glass reflection, and the two reflected beams cancel. That is the same limiting case as the black soap bubble, in a different apparatus. Notice also that the rings crowd closer together outward, because rho goes as the square root of the order: the 4th ring is only twice the radius of the 1st, not four times it."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-1.3, 1.7], "axes": "none", "aspect": 0.425,
              "polys": [
                { "pts": [[-3.2, -0.6], [3.2, -0.6], [3.2, 0], [-3.2, 0], [-3.2, -0.6]], "fill": "hatch" },
                { "pts": [[-3, 1.146], [-2.5, 0.758], [-2, 0.469], [-1.5, 0.257], [-1, 0.113], [-0.5, 0.028], [0, 0], [0.5, 0.028], [1, 0.113], [1.5, 0.257], [2, 0.469], [2.5, 0.758], [3, 1.146], [3, 1.55], [-3, 1.55], [-3, 1.146]], "smooth": true, "fill": "wash", "tone": "soft" }
              ],
              "segments": [
                { "from": [2, -0.85], "to": [2, 0.469], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [0, -0.85], "to": [2, -0.85], "head": "both", "tone": "amber", "label": "ρ", "at": "below" },
                { "from": [2, 0], "to": [2, 0.469], "head": "both", "tone": "amber", "label": "t", "at": "end" }
              ],
              "labels": [
                { "x": -1.55, "y": 1.24, "text": "lens, radius R" },
                { "x": -1.55, "y": -0.32, "text": "flat plate" }
              ]
            },
            {
              "x": [-2.6, 2.6], "y": [-2.1, 2.1], "axes": "none", "aspect": 0.807,
              "arcs": [
                { "at": [0, 0], "r": 1, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 1, "from": 180, "to": 360, "tone": "ink" },
                { "at": [0, 0], "r": 1.414, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 1.414, "from": 180, "to": 360, "tone": "ink" },
                { "at": [0, 0], "r": 1.732, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 1.732, "from": 180, "to": 360, "tone": "ink" },
                { "at": [0, 0], "r": 2, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 2, "from": 180, "to": 360, "tone": "ink" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [1, 1], "tone": "amber", "label": "√(2λR)", "at": "end" }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "dark centre" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A soap film (<i>n</i> = 1.33) in air is viewed by reflected light at near-normal incidence. Find the minimum thickness for which the film appears bright for light of wavelength 532 nm.",
          "steps": [
            "Film in air, so one net half-wave loss, so the REFLECTED BRIGHT condition is 2<i>nt</i> cos <i>r</i> = (<i>m</i> + 1/2)λ.",
            "Near-normal incidence means cos <i>r</i> ≈ 1, so 2<i>nt</i> = (<i>m</i> + 1/2)λ.",
            "Minimum thickness is the smallest order, <i>m</i> = 0: 2<i>nt</i> = λ/2, so <i>t</i> = λ/(4<i>n</i>).",
            "<i>t</i> = (532 × 10<sup>−9</sup>)/(4 × 1.33) = (532 × 10<sup>−9</sup>)/5.32 = 1.0 × 10<sup>−7</sup> m = 100 nm.",
            "Sanity check: a quarter of a wavelength inside the film, and about 100 nm, which is where every thin bright film and every AR coating lands."
          ],
          "ans": "<i>t</i><sub>min</sub> = 100 nm"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A camera lens (<i>n</i><sub>glass</sub> = 1.5) is coated with magnesium fluoride (<i>n</i> = 1.38) to minimise reflection of 550 nm light. The minimum coating thickness is about (A) 50 nm (B) 100 nm (C) 138 nm (D) 200 nm.",
          "steps": [
            "An AR coating is a quarter-wave layer: <i>t</i> = λ/(4<i>n</i><sub>coat</sub>).",
            "<i>t</i> = 550/(4 × 1.38) = 550/5.52 = 99.6 nm, so about 100 nm.",
            "Two traps live in this question. The first is plugging in <i>n</i><sub>glass</sub> = 1.5 instead of the coating's index: the relevant medium is the film the light is travelling through, always.",
            "The second is forgetting the 4 and computing λ/(2<i>n</i>), which gives 200 nm and option (D). The quarter-wave factor comes from the fact that both reflections here carry a half-wave loss, so the losses cancel and the plain 2<i>nt</i> = λ/2 condition applies."
          ],
          "ans": "(B) about 100 nm"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "In a Newton's rings experiment with λ = 600 nm and a lens of radius of curvature <i>R</i> = 1.0 m, find the radius of the 10th dark ring seen in reflected light.",
          "steps": [
            "Dark rings in reflected light: ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>).",
            "ρ<sub>10</sub> = √(10 × 600 × 10<sup>−9</sup> × 1.0) = √(6.0 × 10<sup>−6</sup>).",
            "√(6.0 × 10<sup>−6</sup>) = 2.45 × 10<sup>−3</sup> m = 2.45 mm, so the diameter is about 4.9 mm.",
            "Sanity check: a few millimetres, which is exactly the size a travelling microscope is built to measure. An answer in metres or in micrometres would mean the square root was skipped or applied twice."
          ],
          "ans": "ρ<sub>10</sub> = 2.45 mm, a diameter of about 4.9 mm"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "In a Newton's rings setup the diameter of the 15th dark ring in air is 5.90 mm. A transparent liquid is introduced into the gap and the same ring shrinks to 5.10 mm. Find the refractive index of the liquid.",
          "steps": [
            "In air the dark ring satisfies ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>). With a liquid of index <i>n</i> the optical path becomes 2<i>nt</i>, so the same order is reached at a smaller thickness: ρ′<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>/<i>n</i>).",
            "Take the ratio of the squares for the same <i>m</i>, λ and <i>R</i>: ρ<sup>2</sup>/ρ′<sup>2</sup> = <i>n</i>.",
            "Diameters can be used directly, because <i>D</i> = 2ρ and the factor of 4 cancels: <i>n</i> = <i>D</i><sup>2</sup>/<i>D</i>′<sup>2</sup>.",
            "<i>n</i> = (5.90)<sup>2</sup>/(5.10)<sup>2</sup> = 34.81/26.01 = 1.34.",
            "Sanity check: 1.34 is a plausible index for a liquid, close to water's 1.33, and it must be greater than 1 because the rings shrank. If it had come out below 1 the ratio was taken upside down."
          ],
          "ans": "<i>n</i> = 1.34"
        },
        {
          "t": "mcq",
          "q": "A very thin soap film, much thinner than the wavelength of light, appears black in reflected light because",
          "opts": [
            { "label": "it absorbs all the light", "nudge": "A soap film is essentially transparent and absorbs almost nothing in the visible. If absorption were the cause the transmitted light would be dark too, and it is not." },
            { "label": "the two reflected beams interfere destructively due to the half-wave loss", "nudge": null },
            { "label": "it transmits all colours equally", "nudge": "This describes what happens on the other side, and the two ARE complementary, but it does not explain why the REFLECTION is dark. The mechanism is interference, not transmission." },
            { "label": "it reflects only ultraviolet light", "nudge": "Nothing in the setup selects a band. The film is thin for every visible wavelength at once, which is exactly why it goes black rather than coloured." }
          ],
          "correct": 1,
          "solution": "As <i>t</i> → 0 the geometric contribution 2<i>nt</i> → 0, but the half-wave loss at the top reflection does not go away. The two reflected beams stay λ/2 out of step for every visible wavelength at once, so the film is dark in all colours."
        },
        {
          "t": "mcq",
          "q": "The condition for a BRIGHT fringe in light REFLECTED from a thin film of index <i>n</i> and thickness <i>t</i> in air, at normal incidence, is",
          "opts": [
            { "label": "2<i>nt</i> = <i>m</i>λ", "nudge": "This is the DARK condition for reflected light. Reversing the two is the single most common thin-film error, and it is exactly the sentence the errata to this book corrects." },
            { "label": "2<i>nt</i> = (<i>m</i> + 1/2)λ", "nudge": null },
            { "label": "<i>nt</i> = <i>m</i>λ", "nudge": "This drops the factor of 2 from the down-and-back journey. The beam crosses the film twice, so the path is 2<i>nt</i>, not <i>nt</i>." },
            { "label": "2<i>t</i> = <i>m</i>λ", "nudge": "This uses the geometric path instead of the optical one. The index multiplies the path because it is phase that is being counted, and it also gets the bright and dark conditions the wrong way round." }
          ],
          "correct": 1,
          "solution": "The half-wave loss at the air-to-film reflection puts the 1/2 with the BRIGHT condition for reflected light. Without the loss it would be the other way, which is why counting flips has to come before choosing the formula."
        },
        {
          "t": "mcq",
          "q": "In a Newton's rings experiment viewed in reflected light, the central spot is",
          "opts": [
            { "label": "bright", "nudge": "This ignores the half-wave loss. Geometrically the gap is zero there, so it looks like a maximum, but the flip at the air-to-glass reflection turns it into a minimum." },
            { "label": "dark", "nudge": null },
            { "label": "coloured", "nudge": "Colour appears in the outer rings with white light, not at the centre with monochromatic light. At zero thickness every wavelength cancels equally, which is colourless." },
            { "label": "absent", "nudge": "There is a definite spot at the centre; the question is only whether it is bright or dark. A missing centre would mean no light reaches the contact point at all." }
          ],
          "correct": 1,
          "solution": "At the contact point the air-film thickness is essentially zero, so 2<i>t</i> = 0 satisfies the dark condition <i>m</i> = 0. The half-wave loss makes the two reflections cancel. Same physics as the black soap film."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Explain in two or three lines why a thin film of oil on water shows brilliant colours in sunlight while a thick slab of the same oil does not.", "a": "In a thin film the two reflected beams differ by only a wavelength-scale path, so one colour reinforces strongly and selectively while its neighbours partly cancel, giving a vivid colour. In a thick slab the path difference spans many wavelengths and changes rapidly with angle and thickness, so all colours reinforce somewhere and average back to white." },
            { "q": "[NEET] A thin film of index 1.5 in air appears dark in reflected light of wavelength 600 nm at near-normal incidence. What is the minimum non-zero thickness of the film?", "a": "Reflected dark: 2<i>nt</i> = <i>m</i>λ. The minimum NON-ZERO case is <i>m</i> = 1, so <i>t</i> = λ/(2<i>n</i>) = 600/(2 × 1.5) = 200 nm. (<i>m</i> = 0 gives <i>t</i> = 0, which is the black-film case and not a film at all.)" },
            { "q": "[JEE Main] A lens is to be given an anti-reflection coating of index 1.25 for light of wavelength 500 nm. Find the minimum coating thickness.", "a": "<i>t</i> = λ/(4<i>n</i><sub>coat</sub>) = 500/(4 × 1.25) = 500/5 = 100 nm. Again a quarter-wave layer near 100 nm, which is the shape of every AR answer." },
            { "q": "[JEE Main] In a Newton's rings experiment with λ = 589 nm and <i>R</i> = 0.8 m, find the radius of the 5th BRIGHT ring in reflected light.", "a": "Bright rings: ρ<sub><i>m</i></sub> = √((<i>m</i> − 1/2)λ<i>R</i>). For <i>m</i> = 5, ρ = √(4.5 × 589 × 10<sup>−9</sup> × 0.8) = √(2.12 × 10<sup>−6</sup>) = 1.46 × 10<sup>−3</sup> m = 1.46 mm." },
            { "q": "[JEE Advanced] A wedge-shaped air film is formed between two glass plates touching at one edge, with a thin wire of diameter <i>D</i> placed 5 cm from the contact edge. With light of wavelength 600 nm at normal incidence, 40 bright fringes are seen along the 5 cm. Find the wire diameter.", "a": "For an air wedge, consecutive bright fringes correspond to a thickness change of λ/2 = 300 nm. Over the whole 5 cm the thickness climbs from 0 at the contact edge to <i>D</i> at the wire, so <i>D</i> = 40 × λ/2 = 40 × 300 × 10<sup>−9</sup> = 1.2 × 10<sup>−5</sup> m = 12 μm. The 5 cm never enters the answer: it fixes the wedge angle, not the height." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading the derivation's conditions in the printed book without the errata.</b> Page 33 of the printed Chapter 10 says cancellation needs an integer number of wavelengths of effective difference and reinforcement a half-integer. It is the wrong way round, the errata says so, and the chapter's own summary two paragraphs later contradicts it. Effective difference of a WHOLE number of wavelengths is BRIGHT.",
            "<b>Forgetting the half-wave loss altogether.</b> This is the signature thin-film error. A rarer-to-denser reflection adds λ/2. Count the flips at BOTH surfaces before you write any condition, and the bright and dark cases land correctly every time.",
            "<b>Swapping reflected and transmitted.</b> They are complementary: reflected-bright is transmitted-dark. Decide which one the question is asking about before you reach for a formula, not after.",
            "<b>Using the geometric path instead of the optical one.</b> It is 2<i>nt</i> cos <i>r</i>, not 2<i>t</i> cos <i>r</i>. The film index multiplies the path, and at non-normal incidence the cosine matters as well.",
            "<b>Putting the glass index into the AR coating formula.</b> <i>t</i> = λ/(4<i>n</i>) takes the COATING's index. The glass index only decides what the ideal coating index would be, through <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>."
          ]
        },
        {
          "t": "protip",
          "html": "run the same three-step routine on every thin-film problem, in this order and no other. write the optical path 2<i>nt</i> (with cos <i>r</i> if the incidence is not near normal). count the net half-wave losses: one rarer-to-denser reflection means yes, and zero or two means no. only then choose bright or dark. for anti-reflection coatings remember the magic quarter, <i>t</i> = λ/4<i>n</i>. and carry one sanity anchor: the thinnest bright films and every AR coating come out near 100 nm for visible light, so an answer in micrometres or millimetres means a factor has gone missing."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "mechanism: division of amplitude", "note": "top-surface and bottom-surface reflections, same original ray, always coherent" },
            { "f": "Δ<sub>path</sub> = 2<i>nt</i> cos <i>r</i>, and 2<i>nt</i> at near-normal incidence", "note": "optical path, so the <i>n</i> stays in" },
            { "f": "half-wave loss: rarer → denser adds λ/2, denser → rarer adds nothing", "note": "count the flips at both surfaces first" },
            { "f": "reflected bright: 2<i>nt</i> cos <i>r</i> = (<i>m</i> + 1/2)λ · dark: = <i>m</i>λ", "note": "transmitted is exactly reversed" },
            { "f": "very thin film → BLACK in reflection", "note": "the flip survives when the thickness does not" },
            { "f": "AR coating: <i>t</i><sub>min</sub> = λ/(4<i>n</i><sub>coat</sub>), ideal <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>", "note": "both reflections flip, so the losses cancel" },
            { "f": "Newton's rings: <i>t</i> = ρ<sup>2</sup>/2<i>R</i> · dark ρ<sub><i>m</i></sub> = √(<i>m</i>λ<i>R</i>) · centre DARK", "note": "a liquid in the gap shrinks every ring by √<i>n</i>" }
          ],
          "aids": [
            "two-en-tee, mind the half: write 2nt, count the flips, then decide",
            "zero thickness is dark, not bright. the black bubble and the black ring centre are the same fact",
            "quarter-wave films come out near 100 nm. microns or millimetres means a slip"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Diffraction of Light",
      "chip": "05 THE SPREAD",
      "kalam": "same formula as the double slit, opposite meaning",
      "blocks": [
        {
          "t": "p",
          "html": "Stand in a gully in any old town and you can <i>hear</i> the vegetable vendor calling from around the corner long before you can <i>see</i> the cart. Sound bends round the corner happily. Light travels straight and leaves a sharp shadow. Same corner, same physics of waves. So why the difference?<br><br>The answer is <b>diffraction</b>, and the whole secret is one ratio: the wavelength divided by the size of the obstacle or opening. Diffraction is the bending or spreading of a wave as it passes an edge or squeezes through an aperture, and every wave does it, but the effect is only noticeable when the aperture is roughly the size of the wavelength. Sound has a wavelength of about a metre, comparable to a doorway, so it spreads through doorways with ease. Visible light has a wavelength of about half a <b>micrometre</b>, millions of times smaller than any everyday opening, so its bending is microscopic and we are fooled into thinking light always goes in straight lines. Shrink the opening to the scale of light's own wavelength and light spreads out just as dramatically as the sound does."
        },
        {
          "t": "p",
          "html": "Picture a plane wavefront hitting a single narrow slit of width <i>a</i>, and landing on a distant screen. Naive ray optics predicts a single bright strip the exact width of the slit. What you actually see is a <b>broad bright central band</b>, flanked on both sides by progressively <b>fainter</b> bright bands separated by dark ones. The light has fanned out far beyond the geometric image of the slit.<br><br>Now the notation warning, and it is the one that costs the most marks in this chapter. In this topic <i>a</i> is the <b>width of one slit</b>. In the last topic <i>d</i> was the <b>separation between two slits</b>. They are different lengths belonging to different pictures, and there are questions that need both at once. Guard them."
        },
        {
          "t": "think",
          "html": "here is the beautiful link back to topic 01. by huygens' principle every point <b>across the width of the slit</b> acts as a secondary source, all starting in phase because the arriving wavefront is plane. what lands on the screen is just those countless wavelets interfering <b>with one another</b>. so diffraction is not a new mechanism at all: it is the interference of a wavefront with itself. straight ahead every wavelet travels essentially the same distance, so they all reinforce, and that is the bright centre. at certain angles the contributions pair up and cancel exactly, and those are the dark minima."
        },
        {
          "t": "def",
          "term": "Diffraction, and its two regimes",
          "html": "<b>Diffraction</b> is the bending and spreading of a wave at an aperture or an edge, and it becomes appreciable when the aperture is comparable to the wavelength.<br><br><b>Fraunhofer diffraction</b> is the clean far-field case: both the incident and the diffracted wavefronts are <b>plane</b>, with source and screen effectively at infinity, usually arranged with lenses. The formula <i>a</i> sin θ = <i>m</i>λ assumes it.<br><br><b>Fresnel diffraction</b> is the near-field case, where source or screen is close and the wavefronts are curved. It is messier and is not examined at this level, but knowing which is which is a standard one-mark question."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.8 · ONE SLIT, AND A CENTRAL BAND TWICE AS WIDE",
          "chips": ["the setup", "the widths"],
          "captions": [
            "A plane wavefront arrives from the left at a barrier with a single slit of width a. On the far side the light does not continue as a beam of width a; it fans out. On the screen at distance D you get a broad bright central band centred on the axis, then a dark gap, then a much fainter secondary band, and so on outward. The dashed lines mark the axis and the two directions in which the first dark minima fall, at the angle theta where a sin(theta) = lambda. Everything about the pattern is set by the single ratio lambda over a: make the slit narrower and theta grows, so the light spreads MORE, which is the opposite of what most people guess.",
            "The same screen with the measurements marked. The crosses are the minima, at a sin(theta) = m lambda for m = 1, 2, and so on. Count the spacings: the minima are evenly spaced, one lambda over a apart in sin(theta), so every secondary band is one unit wide. But the central band runs from the m = -1 minimum all the way to the m = +1 minimum, which is TWO units. That is the signature of a diffraction envelope, and it is the fact most often lost by a factor of two: the central maximum has angular width 2 lambda over a and linear width 2 lambda D over a, while every other maximum is half that. It is also far brighter; the first secondary maximum carries only about 4.7 per cent of the central intensity."
          ],
          "frames": [
            {
              "x": [-2.8, 6.8], "y": [-3, 3], "axes": "none", "aspect": 0.636,
              "polys": [
                { "pts": [[-0.12, 0.6], [0.12, 0.6], [0.12, 2.9], [-0.12, 2.9], [-0.12, 0.6]], "fill": "hatch" },
                { "pts": [[-0.12, -2.9], [0.12, -2.9], [0.12, -0.6], [-0.12, -0.6], [-0.12, -2.9]], "fill": "hatch" },
                { "pts": [[-2.2, -2.9], [-2.2, 2.9]], "tone": "soft" },
                { "pts": [[-1.6, -2.9], [-1.6, 2.9]], "tone": "soft" },
                { "pts": [[-1, -2.9], [-1, 2.9]], "tone": "soft" },
                { "pts": [[5.6, -2.9], [5.6, 2.9]], "tone": "ink" },
                { "pts": [[5.65, -1.2], [6, -1.2], [6, 1.2], [5.65, 1.2], [5.65, -1.2]], "fill": "wash", "tone": "amber" },
                { "pts": [[5.65, 1.35], [6, 1.35], [6, 2.25], [5.65, 2.25], [5.65, 1.35]], "fill": "wash", "tone": "soft" },
                { "pts": [[5.65, -2.25], [6, -2.25], [6, -1.35], [5.65, -1.35], [5.65, -2.25]], "fill": "wash", "tone": "soft" }
              ],
              "segments": [
                { "from": [0.12, 0], "to": [5.55, 0], "dash": true, "soft": true },
                { "from": [0.12, 0], "to": [5.55, 1.2], "dash": true, "soft": true },
                { "from": [0.12, 0], "to": [5.55, -1.2], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0.12, 0], "r": 1.7, "from": 0, "to": 12.5, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [-2.65, 0], "to": [-0.4, 0], "tone": "amber", "label": "plane wave", "at": "above" },
                { "from": [0, -0.6], "to": [0, 0.6], "head": "both", "tone": "amber", "label": "a" }
              ]
            },
            {
              "x": [-2.8, 6.8], "y": [-3, 3], "axes": "none", "aspect": 0.636,
              "polys": [
                { "pts": [[-0.12, 0.6], [0.12, 0.6], [0.12, 2.9], [-0.12, 2.9], [-0.12, 0.6]], "fill": "hatch" },
                { "pts": [[-0.12, -2.9], [0.12, -2.9], [0.12, -0.6], [-0.12, -0.6], [-0.12, -2.9]], "fill": "hatch" },
                { "pts": [[5.6, -2.9], [5.6, 2.9]], "tone": "ink" },
                { "pts": [[5.65, -1.2], [6, -1.2], [6, 1.2], [5.65, 1.2], [5.65, -1.2]], "fill": "wash", "tone": "amber" },
                { "pts": [[5.65, 1.25], [6, 1.25], [6, 2.35], [5.65, 2.35], [5.65, 1.25]], "fill": "wash", "tone": "soft" },
                { "pts": [[5.65, -2.35], [6, -2.35], [6, -1.25], [5.65, -1.25], [5.65, -2.35]], "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [6.35, -1.2], "to": [6.35, 1.2], "head": "both", "tone": "amber", "label": "2λD/a" },
                { "from": [6.35, 1.2], "to": [6.35, 2.4], "head": "both", "tone": "soft", "label": "λD/a" }
              ],
              "marks": [
                { "x": 5.6, "y": 1.2, "glyph": "cross" },
                { "x": 5.6, "y": -1.2, "glyph": "cross" },
                { "x": 5.6, "y": 2.4, "glyph": "cross" },
                { "x": 5.6, "y": -2.4, "glyph": "cross" }
              ],
              "labels": [
                { "x": 2.6, "y": -2.5, "text": "centre is twice as wide" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SINGLE-SLIT MINIMA",
          "tag": "DARK, not bright",
          "main": "<i>a</i> sin θ = <i>m</i>λ, <i>m</i> = ±1, ±2, ±3, ...<br>secondary maxima, approximately: <i>a</i> sin θ ≈ (<i>m</i> + 1/2)λ",
          "legend": [
            "<i>a</i> = width of the SINGLE slit (m), not the separation between two slits",
            "θ = angular position of the minimum (degrees or radians); λ = wavelength (m)",
            "<i>m</i> = order, a whole number. <i>m</i> = 0 is EXCLUDED, because straight ahead is the central maximum and not a minimum"
          ],
          "note": "Compare with the double slit, where d sin(theta) = m lambda gave a BRIGHT fringe. Same algebra, opposite meaning, different length. Whenever you write this formula, say the word minimum out loud."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY a sin θ = λ IS DARKNESS",
          "steps": [
            { "eq": "Δ<i>x</i><sub>edges</sub> = <i>a</i> sin θ", "why": "A plane monochromatic wavefront falls normally on a slit of width <i>a</i>. Every point across the slit is a Huygens source, all in phase. Look in the direction θ. Light from the bottom edge travels further than light from the top edge by <i>a</i> sin θ, which is the same edge-to-edge geometry as the two slits of the last topic, except that now the two edges belong to ONE slit." },
            { "eq": "split the slit into two halves of width <i>a</i>/2", "why": "This is the trick, and it is the only clever step in the chapter. Mentally divide the slit down the middle and pair every point in the upper half with the point exactly <i>a</i>/2 below it in the lower half. Every point in the slit now belongs to exactly one pair." },
            { "eq": "Δ<i>x</i><sub>pair</sub> = (<i>a</i>/2) sin θ", "why": "Each partner in a pair is separated by <i>a</i>/2 across the slit, so the path difference between the two members of ANY pair is the same: (<i>a</i>/2) sin θ. The pairing works because the separation, not the position, decides the difference." },
            { "eq": "(<i>a</i>/2) sin θ = λ/2 ⟹ <i>a</i> sin θ = λ", "why": "Now demand that each pair be exactly out of phase, a path difference of half a wavelength. Then every point in the upper half is cancelled by its partner in the lower half, and the total amplitude is EXACTLY ZERO. Pairing produces cancellation, which is why this condition marks darkness. This is the first minimum." },
            { "eq": "<i>a</i> sin θ = <i>m</i>λ", "why": "Split into four equal parts instead and pair within them: complete cancellation now needs (<i>a</i>/4) sin θ = λ/2, that is <i>a</i> sin θ = 2λ. Continuing with 2<i>m</i> equal parts gives the general condition. Note <i>m</i> = 0 is impossible: you cannot split the slit into zero parts, and straight ahead every wavelet arrives in phase." },
            { "eq": "central width = 2λ/<i>a</i> in sin θ, and 2λ<i>D</i>/<i>a</i> on the screen", "why": "The central maximum runs from the <i>m</i> = −1 minimum to the <i>m</i> = +1 minimum, so it spans two units of λ/<i>a</i> while every other maximum spans one. Twice as wide, and far brighter: the first secondary maximum carries about 4.7 per cent of the central intensity." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.9 · PAIRING THE SLIT INTO HALVES, THEN QUARTERS",
          "chips": ["halves, first minimum", "quarters, second"],
          "captions": [
            "The pairing argument drawn. The slit of width a runs from T at the top to B at the bottom, and M is its midpoint. Follow the light going off at angle theta. Take the ray leaving T and the ray leaving M: they are a pair, separated by a/2 across the slit. Drop a perpendicular from T onto the ray from M and the extra distance the M ray must cover is (a/2) sin(theta). Now note that this is the SAME for every pair, because the pairing separation is always a/2 whatever point of the upper half you start from. So if that one path difference equals lambda over 2, every point in the upper half is cancelled by its partner in the lower half, and the whole slit contributes nothing. (a/2) sin(theta) = lambda/2 rearranges to a sin(theta) = lambda: the first minimum.",
            "The same argument with four parts instead of two. Divide the slit into four strips and pair each point with the one a/4 below it. The path difference for a pair is now (a/4) sin(theta), and cancellation needs that to be lambda over 2, which gives a sin(theta) = 2 lambda: the second minimum. Splitting into 2m equal parts and pairing within them gives a sin(theta) = m lambda for every m, and each of those is DARKNESS. The comparison worth memorising: the double slit's d sin(theta) = m lambda is a bright fringe, the single slit's a sin(theta) = m lambda is a dark one. Same algebra, opposite meaning, different length."
          ],
          "frames": [
            {
              "x": [-1.6, 5], "y": [-2.4, 3.2], "axes": "none", "aspect": 0.845,
              "polys": [
                { "pts": [[-0.12, 1.5], [0.12, 1.5], [0.12, 3.1], [-0.12, 3.1], [-0.12, 1.5]], "fill": "hatch" },
                { "pts": [[-0.12, -2.3], [0.12, -2.3], [0.12, -1.5], [-0.12, -1.5], [-0.12, -2.3]], "fill": "hatch" }
              ],
              "arrows": [
                { "from": [0, 1.5], "to": [3.171, 2.98], "tone": "amber" },
                { "from": [0, 0], "to": [3.171, 1.48], "tone": "amber" },
                { "from": [-0.55, 0], "to": [-0.55, 1.5], "head": "both", "tone": "soft", "label": "a/2" },
                { "from": [-0.55, -1.5], "to": [-0.55, 0], "head": "both", "tone": "soft", "label": "a/2" }
              ],
              "segments": [
                { "from": [0, 1.5], "to": [0.575, 0.268], "dash": true },
                { "from": [0, 0], "to": [2.2, 0], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 1.15, "from": 0, "to": 25, "label": "θ", "tone": "amber" }
              ],
              "points": [
                { "x": 0, "y": 1.5, "label": "T", "at": "nw" },
                { "x": 0, "y": 0, "label": "M", "at": "sw" },
                { "x": 0, "y": -1.5, "label": "B", "at": "sw" },
                { "x": 0.575, "y": 0.268, "label": "N", "at": "se" }
              ],
              "labels": [
                { "x": 2.5, "y": -0.85, "text": "pair difference (a/2) sin θ" }
              ]
            },
            {
              "x": [-1.6, 5], "y": [-2.4, 3.2], "axes": "none", "aspect": 0.845,
              "polys": [
                { "pts": [[-0.12, 1.5], [0.12, 1.5], [0.12, 3.1], [-0.12, 3.1], [-0.12, 1.5]], "fill": "hatch" },
                { "pts": [[-0.12, -2.3], [0.12, -2.3], [0.12, -1.5], [-0.12, -1.5], [-0.12, -2.3]], "fill": "hatch" }
              ],
              "arrows": [
                { "from": [0, 1.5], "to": [3.171, 2.98], "tone": "amber" },
                { "from": [0, 0.75], "to": [3.171, 2.23], "tone": "amber" },
                { "from": [-0.55, 0.75], "to": [-0.55, 1.5], "head": "both", "tone": "soft", "label": "a/4" }
              ],
              "segments": [
                { "from": [0, 1.5], "to": [0.287, 0.884], "dash": true },
                { "from": [0, 0.75], "to": [2.2, 0.75], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0, 0.75], "r": 1.15, "from": 0, "to": 25, "label": "θ", "tone": "amber" }
              ],
              "marks": [
                { "x": 0, "y": 0.75, "glyph": "dot" },
                { "x": 0, "y": 0, "glyph": "dot" },
                { "x": 0, "y": -0.75, "glyph": "dot" }
              ],
              "points": [
                { "x": 0, "y": 1.5, "label": "T", "at": "nw" },
                { "x": 0, "y": -1.5, "label": "B", "at": "sw" }
              ],
              "labels": [
                { "x": 2.5, "y": -0.85, "text": "pair difference (a/4) sin θ" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CENTRAL MAXIMUM",
          "main": "θ<sub>1</sub> ≈ λ/<i>a</i> · Δθ = 2λ/<i>a</i><br><i>w</i> = 2λ<i>D</i>/<i>a</i>, or 2<i>f</i>λ/<i>a</i> with a lens",
          "legend": [
            "θ<sub>1</sub> = angular half-width, axis to the first minimum (radian, valid for small angles)",
            "Δθ = full angular width of the central maximum (radian); <i>w</i> = its linear width on the screen (m)",
            "<i>D</i> = screen distance (m), <i>f</i> = focal length if a lens focuses the pattern (m), <i>a</i> = slit width (m), λ = wavelength (m)"
          ],
          "note": "Everything in this topic is one number, lambda over a. Compute it once and the rest is a multiplication. Narrower slit means a bigger ratio means MORE spreading, which is the opposite of the everyday instinct."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · INTERFERENCE AGAINST DIFFRACTION, ON ONE PAIR OF AXES",
          "chips": ["two slits", "one slit"],
          "captions": [
            "Two-slit interference, plotted as intensity against position on the screen. Every bright fringe reaches the same height, they are evenly spaced, and the dark fringes go to exactly zero. The pattern is uniform right across the screen, and one unit on the horizontal axis is one fringe width beta = lambda D over d.",
            "Single-slit diffraction, on the same axes and the same vertical scale. Now tap between the two chips and read the three differences off directly. First, the heights are wildly unequal: the centre carries almost all the light and the first side band reaches only 4.7 per cent of it, so on this scale it is barely off the floor. Second, the widths are unequal: the central band spans two units where every other band spans one. Third, and this is the trap, the MINIMA of this pattern sit at exactly the same places the double slit put its MAXIMA, at whole numbers on the axis. One unit here is lambda D over a, and a sin(theta) = m lambda is darkness where d sin(theta) = m lambda was brightness."
          ],
          "frames": [
            {
              "x": [-3.2, 3.2], "y": [-0.12, 1.2], "axes": "auto", "aspect": 0.6,
              "axisX": "y / β", "axisY": "I / Imax",
              "ticksX": { "at": [-3, -2, -1, 1, 2, 3] },
              "ticksY": { "at": [0, 0.5, 1] },
              "curves": [
                { "c": "cos", "a": 0.5, "b": 6.2832, "d": 0.5 }
              ]
            },
            {
              "x": [-3.2, 3.2], "y": [-0.12, 1.2], "axes": "auto", "aspect": 0.6,
              "axisX": "y / (λD/a)", "axisY": "I / Imax",
              "ticksX": { "at": [-3, -2, -1, 1, 2, 3] },
              "ticksY": { "at": [0, 0.5, 1] },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[-3.2, 0.003], [-3.1, 0.001], [-3, 0], [-2.9, 0.001], [-2.8, 0.004], [-2.7, 0.009], [-2.6, 0.014], [-2.5, 0.016], [-2.4, 0.016], [-2.3, 0.013], [-2.2, 0.007], [-2.1, 0.002], [-2, 0], [-1.9, 0.003], [-1.8, 0.011], [-1.7, 0.023], [-1.6, 0.036], [-1.5, 0.045], [-1.4, 0.047], [-1.3, 0.039], [-1.2, 0.024], [-1.1, 0.008], [-1, 0], [-0.9, 0.012], [-0.8, 0.055], [-0.7, 0.135], [-0.6, 0.255], [-0.5, 0.405], [-0.4, 0.573], [-0.3, 0.737], [-0.2, 0.875], [-0.1, 0.968], [0, 1], [0.1, 0.968], [0.2, 0.875], [0.3, 0.737], [0.4, 0.573], [0.5, 0.405], [0.6, 0.255], [0.7, 0.135], [0.8, 0.055], [0.9, 0.012], [1, 0], [1.1, 0.008], [1.2, 0.024], [1.3, 0.039], [1.4, 0.047], [1.5, 0.045], [1.6, 0.036], [1.7, 0.023], [1.8, 0.011], [1.9, 0.003], [2, 0], [2.1, 0.002], [2.2, 0.007], [2.3, 0.013], [2.4, 0.016], [2.5, 0.016], [2.6, 0.014], [2.7, 0.009], [2.8, 0.004], [2.9, 0.001], [3, 0], [3.1, 0.001], [3.2, 0.003]] }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Interference against diffraction",
          "rows": [
            { "k": "Source of the waves", "v": "two separate coherent slits · many points across ONE wavefront" },
            { "k": "Fringe spacing", "v": "all fringes equally spaced · central band wide, others narrower and unequal" },
            { "k": "Fringe intensity", "v": "all bright fringes nearly equal · central band brightest, rapidly fainter outward" },
            { "k": "What <i>m</i>λ gives", "v": "BRIGHT, from <i>d</i> sin θ · DARK, from <i>a</i> sin θ" },
            { "k": "The length involved", "v": "<i>d</i>, the separation of two slits · <i>a</i>, the width of one slit" },
            { "k": "Usable fringes", "v": "many sharp ones · only a few, and the outer ones are very faint" }
          ]
        },
        {
          "t": "p",
          "html": "Line up <b>many</b> equally spaced slits instead of one or two and you have a <b>diffraction grating</b>, the sharper and more useful cousin of the double slit. Its principal maxima obey <i>d</i> sin θ = <i>m</i>λ with <i>d</i> the slit spacing, but with thousands of slits the bright lines become razor-thin, which is why gratings are the workhorse of spectroscopy: they fan white light into a pure spectrum and let wavelengths be measured precisely.<br><br>You meet the same physics daily. The rainbow sheen off a CD or DVD is a <b>reflection grating</b> at work, its closely spaced tracks sending different colours to different angles. Push the wavelength down to the size of <b>atoms</b> and the natural grating becomes a crystal: X-rays diffracting off regular planes of atoms, at Bragg's condition 2<i>d</i> sin θ = <i>m</i>λ, is how the structure of crystals and famously of DNA was decoded. Diffraction is not a laboratory curiosity. It is how we read the very small."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RAYLEIGH CRITERION",
          "main": "θ<sub>min</sub> = 1.22 λ/<i>D</i><sub>ap</sub><br>resolving power = 1/θ<sub>min</sub><br>microscope: <i>d</i><sub>min</sub> = 0.61 λ/NA",
          "legend": [
            "θ<sub>min</sub> = smallest resolvable angular separation (radian); <i>D</i><sub>ap</sub> = aperture diameter (m)",
            "The 1.22 belongs to a CIRCULAR aperture. For a slit of width <i>a</i> it would be plain λ/<i>a</i>",
            "<i>d</i><sub>min</sub> = smallest resolvable separation under a microscope (m); NA = numerical aperture = <i>n</i> sin β, dimensionless, with β the half-angle of the cone entering the objective"
          ],
          "note": "Two point sources are just resolvable when the central maximum of one diffraction pattern falls on the first minimum of the other. A telescope is improved by a LARGER aperture; a microscope by a larger NA and a shorter wavelength, which is what oil immersion and electron microscopy are for."
        },
        {
          "t": "p",
          "html": "One consequence of that last formula deserves its own sentence, because it is the difference between a good telescope and an expensive disappointment.<br><br><b>Resolution is not magnification.</b> A longer objective focal length makes the image bigger. It does not make it more detailed. What sets the finest detail a telescope can show is θ<sub>min</sub> = 1.22λ/<i>D</i><sub>ap</sub>, which depends only on the aperture DIAMETER, and no amount of magnification recovers detail that diffraction has already blurred away. That is why research telescopes chase ever larger mirrors rather than ever longer tubes.<br><br>The microscope's version runs the other way but for the same reason. Its limit is <i>d</i><sub>min</sub> = 0.61λ/NA, so you improve it by widening the cone of light the objective collects, which is what an oil-immersion lens does by raising <i>n</i> above 1, or by shortening the wavelength. Shortening λ is the route that eventually leaves optics altogether: an electron microscope works with a wavelength thousands of times smaller than light's, and that wavelength is the subject of the Dual Nature chapter."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Light of wavelength 600 nm falls normally on a single slit of width 0.2 mm, with a screen 1.5 m away. Find (a) the angular position of the first minimum and (b) the linear width of the central maximum.",
          "steps": [
            "(a) First minimum, <i>m</i> = 1, so <i>a</i> sin θ = λ and sin θ = λ/<i>a</i>.",
            "sin θ = (600 × 10<sup>−9</sup>)/(0.2 × 10<sup>−3</sup>) = 3 × 10<sup>−3</sup> rad, and for an angle this small θ ≈ sin θ.",
            "(b) The central maximum runs from the <i>m</i> = −1 minimum to the <i>m</i> = +1 minimum, so its width is 2λ<i>D</i>/<i>a</i>, TWICE the half-width.",
            "<i>w</i> = 2 × (3 × 10<sup>−3</sup>) × 1.5 = 9 × 10<sup>−3</sup> m = 9 mm.",
            "Sanity check: λ/<i>a</i> came out at 3 × 10<sup>−3</sup>, comfortably small, so we are in the weak-diffraction regime and the small-angle step was safe."
          ],
          "ans": "θ<sub>1</sub> = 3 × 10<sup>−3</sup> rad · central maximum 9 mm wide"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In a single-slit diffraction experiment the slit width is halved. The width of the central maximum (A) halves (B) doubles (C) stays the same (D) quadruples.",
          "steps": [
            "<i>w</i> = 2λ<i>D</i>/<i>a</i>, so <i>w</i> is inversely proportional to <i>a</i>. Halving <i>a</i> doubles <i>w</i>.",
            "The trap is the instinct that a smaller slit means smaller everything, which pushes students straight to (A). It is backwards.",
            "The physical picture that fixes it: a narrower slit forces the light to spread MORE. In the limit where <i>a</i> approaches λ, the central maximum fills nearly the whole screen.",
            "Run the limit the other way as a second check: widen the slit and θ<sub>1</sub> = λ/<i>a</i> shrinks toward zero, the central band collapses onto the geometric image of the slit, and you have recovered ray optics. Narrow slit, wide spread."
          ],
          "ans": "(B) doubles"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A double-slit arrangement has slit separation <i>d</i> = 0.9 mm and each slit has width <i>a</i> = 0.3 mm. Which interference maxima are MISSING from the pattern, and how many bright fringes lie inside the central diffraction maximum?",
          "steps": [
            "This is the combination question: the double-slit fringes are modulated by the single-slit envelope, so an interference maximum is wiped out wherever it lands on a diffraction minimum.",
            "Set the two conditions at the same angle: <i>d</i> sin θ = <i>m</i><sub>I</sub>λ for the interference maximum, and <i>a</i> sin θ = <i>m</i><sub>D</sub>λ for the diffraction minimum.",
            "Divide: <i>m</i><sub>I</sub>/<i>m</i><sub>D</sub> = <i>d</i>/<i>a</i> = 0.9/0.3 = 3. So <i>m</i><sub>I</sub> = ±3, ±6, ±9, ... are missing: every 3rd interference order vanishes.",
            "The central diffraction maximum runs out to the first diffraction minimum, <i>m</i><sub>D</sub> = 1, so the interference orders that fit inside it are those with <i>m</i><sub>I</sub> less than <i>d</i>/<i>a</i> = 3, namely <i>m</i><sub>I</sub> = 0, ±1, ±2.",
            "That is the central fringe plus two on each side: 5 bright fringes. The <i>m</i><sub>I</sub> = ±3 orders fall exactly on the edge and are the ones that go missing."
          ],
          "ans": "Orders <i>m</i><sub>I</sub> = ±3, ±6, ... are missing · 5 bright fringes fit inside the central maximum"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The objective of a telescope has aperture diameter 12 cm. Using light of mean wavelength 550 nm, (a) find the smallest angular separation it can resolve, and (b) the minimum distance between two points on the Moon, 3.8 × 10<sup>8</sup> m away, that it could just resolve.",
          "steps": [
            "(a) Rayleigh limit: θ<sub>min</sub> = 1.22 λ/<i>D</i><sub>ap</sub> = 1.22 × (550 × 10<sup>−9</sup>)/0.12.",
            "1.22 × 550 × 10<sup>−9</sup> = 6.71 × 10<sup>−7</sup>, and dividing by 0.12 gives 5.6 × 10<sup>−6</sup> rad.",
            "(b) For a small angle the linear separation is <i>s</i> = θ<sub>min</sub> × <i>L</i> = (5.59 × 10<sup>−6</sup>)(3.8 × 10<sup>8</sup>) = 2.1 × 10<sup>3</sup> m.",
            "So about 2.1 km. Even a fine telescope, limited purely by diffraction at its aperture, cannot separate two lunar features closer than that.",
            "The lesson is the one the last paragraph made: no eyepiece and no magnification recovers that detail. Only a bigger <i>D</i><sub>ap</sub> does, which is exactly why observatories build larger mirrors."
          ],
          "ans": "θ<sub>min</sub> = 5.6 × 10<sup>−6</sup> rad · smallest resolvable separation on the Moon about 2.1 km"
        },
        {
          "t": "mcq",
          "q": "In single-slit diffraction, the condition <i>a</i> sin θ = λ gives",
          "opts": [
            { "label": "the first bright fringe", "nudge": "The killer trap of this topic: importing the YDSE rule that <i>m</i>λ means bright. In a single slit the same algebra means the exact opposite, because the mechanism is pairing and cancellation." },
            { "label": "the first dark fringe", "nudge": null },
            { "label": "the central maximum", "nudge": "The central maximum sits at θ = 0, which is <i>m</i> = 0, and <i>m</i> = 0 is explicitly excluded from the minima formula for exactly that reason." },
            { "label": "the second dark fringe", "nudge": "That would need <i>a</i> sin θ = 2λ. Check the order before you check the physics." }
          ],
          "correct": 1,
          "solution": "<i>a</i> sin θ = <i>m</i>λ locates the MINIMA in single-slit diffraction, so <i>m</i> = 1 is the first dark fringe. It comes from pairing every point in the slit with a partner half a slit-width away and demanding they cancel."
        },
        {
          "t": "mcq",
          "q": "When the width of a single slit is increased, the central diffraction maximum",
          "opts": [
            { "label": "becomes wider and brighter", "nudge": "The width dependence is reversed. <i>w</i> = 2λ<i>D</i>/<i>a</i> is inversely proportional to <i>a</i>, so a wider slit gives a NARROWER central band." },
            { "label": "becomes narrower and brighter", "nudge": null },
            { "label": "becomes wider and dimmer", "nudge": "Both halves are wrong. The band narrows, and more light gets through a wider slit, so it also brightens." },
            { "label": "is unchanged", "nudge": "This ignores the inverse dependence on <i>a</i> entirely. Push <i>a</i> to a very large value and the band shrinks to the geometric image of the slit, which is ray optics reappearing." }
          ],
          "correct": 1,
          "solution": "<i>w</i> = 2λ<i>D</i>/<i>a</i>, so increasing <i>a</i> narrows the central maximum. More light passes through the wider slit and is concentrated into a smaller region, so it is also brighter."
        },
        {
          "t": "mcq",
          "q": "The resolving power of a telescope is increased by",
          "opts": [
            { "label": "increasing the focal length of the objective", "nudge": "This increases MAGNIFICATION, not resolution. The two are independent, and enlarging a blurred image only makes a bigger blur." },
            { "label": "increasing the aperture of the objective", "nudge": null },
            { "label": "decreasing the aperture of the objective", "nudge": "Exactly backwards. θ<sub>min</sub> = 1.22λ/<i>D</i><sub>ap</sub> grows as the aperture shrinks, so a smaller telescope resolves less." },
            { "label": "increasing the eyepiece focal length", "nudge": "The eyepiece affects magnification only. Nothing downstream of the objective can undo the diffraction that happened at the objective." }
          ],
          "correct": 1,
          "solution": "Resolving power is 1/θ<sub>min</sub> = <i>D</i><sub>ap</sub>/(1.22λ), so a larger aperture means finer resolution. It is the aperture DIAMETER that matters, not the focal length and not the eyepiece."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Light of wavelength 500 nm falls on a slit of width 0.1 mm. Find the angular width of the central maximum.", "a": "Δθ = 2λ/<i>a</i> = 2(500 × 10<sup>−9</sup>)/(0.1 × 10<sup>−3</sup>) = (10<sup>−6</sup>)/(10<sup>−4</sup>) = 0.01 rad. Remember the factor of 2: the half-width is 0.005 rad." },
            { "q": "[NEET] In single-slit diffraction with the slit width fixed, one colour puts its first minimum at a smaller angle than red light at 700 nm does. Is that colour's wavelength larger or smaller than 700 nm, and why?", "a": "Smaller. sin θ = λ/<i>a</i> with <i>a</i> fixed, so a smaller angle means a smaller wavelength. Violet, at the short end of the visible band, hugs the axis most closely; red spreads furthest." },
            { "q": "[JEE Main] A parallel beam of 600 nm light passes through a slit and is focused by a lens of focal length 0.5 m onto a screen. If the central maximum is 3 mm wide, find the slit width.", "a": "With a lens, <i>w</i> = 2<i>f</i>λ/<i>a</i>, so <i>a</i> = 2<i>f</i>λ/<i>w</i> = 2(0.5)(600 × 10<sup>−9</sup>)/(3 × 10<sup>−3</sup>) = (6 × 10<sup>−7</sup>)/(3 × 10<sup>−3</sup>) = 2 × 10<sup>−4</sup> m = 0.2 mm." },
            { "q": "[JEE Main] Estimate the Fresnel distance for an aperture of 3 mm illuminated by 500 nm light, and say whether ray optics is valid at a screen 10 m away.", "a": "<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ = (3 × 10<sup>−3</sup>)<sup>2</sup>/(500 × 10<sup>−9</sup>) = (9 × 10<sup>−6</sup>)/(5 × 10<sup>−7</sup>) = 18 m. Since 10 m is less than 18 m, ray optics is still valid, though only just." },
            { "q": "[JEE Advanced] Two stars have an angular separation of 4 × 10<sup>−6</sup> rad. What is the minimum aperture diameter of a telescope, using λ = 500 nm, needed to just resolve them?", "a": "<i>D</i><sub>ap</sub> = 1.22λ/θ<sub>min</sub> = 1.22(500 × 10<sup>−9</sup>)/(4 × 10<sup>−6</sup>) = (6.1 × 10<sup>−7</sup>)/(4 × 10<sup>−6</sup>) = 0.15 m, that is 15 cm. A modest amateur instrument, which is why double stars at a few arc-seconds are within reach of one." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading <i>a</i> sin θ = <i>m</i>λ as a maximum.</b> It is the MINIMUM condition, the mirror image of the double slit's bright condition. Say the word minimum out loud every time you write it, because the algebra gives you no clue.",
            "<b>Confusing <i>a</i> with <i>d</i>.</b> Single-slit diffraction uses the slit WIDTH <i>a</i>; double-slit interference uses the SEPARATION <i>d</i>. A missing-orders problem needs both at once, and swapping them turns a ratio of 3 into a ratio of 1/3.",
            "<b>Forgetting the central maximum is twice as wide.</b> Higher-order maxima are spaced by λ/<i>a</i> in sin θ, but the central one spans 2λ/<i>a</i>. Half the wrong answers to a central-width question are out by exactly this factor of two.",
            "<b>Confusing resolution with magnification.</b> A bigger aperture improves resolution; a longer objective focal length improves magnification. They are independent, and only the first recovers detail.",
            "<b>Using 1.22 for a slit or dropping it for a circular aperture.</b> The 1.22 belongs to a circular aperture. For a slit of width <i>a</i> the criterion is the plain λ/<i>a</i>."
          ]
        },
        {
          "t": "protip",
          "html": "build the whole topic on one number: λ/<i>a</i>. the first minimum sits at λ/<i>a</i>, the central maximum spans 2λ/<i>a</i>, and its linear width is 2λ<i>D</i>/<i>a</i>. compute λ/<i>a</i> once and every other answer is one multiplication away. use it as a regime check too: if λ/<i>a</i> comes out bigger than about 0.1 you are in strong-diffraction territory, and if it is microscopic ray optics is perfectly fine. and keep one number for intensity, because it settles a lot of arguments: the first secondary maximum is only about 4.7 per cent of the central one, so on any honest graph the side bands are barely off the floor."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "diffraction = spreading at an aperture, appreciable when the aperture is comparable to λ", "note": "sound bends round a door, light does not" },
            { "f": "mechanism: interference of one wavefront WITH ITSELF", "note": "every point across the slit is a Huygens source" },
            { "f": "minima (DARK): <i>a</i> sin θ = <i>m</i>λ, <i>m</i> = ±1, ±2, ...", "note": "the opposite of YDSE, and <i>m</i> = 0 is excluded" },
            { "f": "central maximum: Δθ = 2λ/<i>a</i>, <i>w</i> = 2λ<i>D</i>/<i>a</i>", "note": "twice as wide as every other band, and far brighter" },
            { "f": "Fraunhofer = plane wavefronts, far field · Fresnel = curved, near field", "note": "the formulas here all assume Fraunhofer" },
            { "f": "<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/λ", "note": "ray optics well inside it, diffraction well beyond" },
            { "f": "Rayleigh: θ<sub>min</sub> = 1.22λ/<i>D</i><sub>ap</sub> · microscope <i>d</i><sub>min</sub> = 0.61λ/NA", "note": "aperture for a telescope, numerical aperture for a microscope" },
            { "f": "missing orders with two slits: <i>m</i><sub>I</sub>/<i>m</i><sub>D</sub> = <i>d</i>/<i>a</i>", "note": "an interference maximum landing on a diffraction minimum" }
          ],
          "aids": [
            "d for double is bright, a for aperture is dark. same formula, opposite result",
            "narrower slit, wider spread. widen the slit and you get ray optics back",
            "compute λ/a first. everything else in the topic is that number times something"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Polarisation of Light",
      "chip": "06 THE AXIS",
      "kalam": "half first, cosine-squared the rest",
      "blocks": [
        {
          "t": "p",
          "html": "Tie one end of a rope to a wall and shake the free end. You can shake it up and down, side to side, or in any direction in the plane perpendicular to the rope, and each shake sends a wave. Now thread the rope through the vertical slats of a fence. Only the up-and-down shakes get through; the side-to-side ones are stopped by the slats.<br><br>The fence has <b>filtered the vibrations</b>, keeping only those aligned with its gap. That fence is a perfect model of a <b>polaroid</b>, and the whole of this topic is about which direction a transverse wave wiggles in."
        },
        {
          "t": "p",
          "html": "Here is the idea that makes polarisation matter far beyond a party trick: <b>only transverse waves can be polarised</b>.<br><br>The Electromagnetic Waves chapter established that light is a transverse electromagnetic wave, with its electric field oscillating perpendicular to the direction of travel. That gives it a wiggle direction, and a wiggle direction is something a fence can filter. Sound, by contrast, is <b>longitudinal</b>: its oscillations are along the direction of travel, so there is no sideways direction to filter and <b>sound cannot be polarised</b>.<br><br>This is not a footnote. It is the single most direct piece of experimental evidence that light is transverse, and it is what settles the question. The Waves chapter set up the distinction between longitudinal and transverse; the EM Waves chapter asserted that light is the transverse kind; this topic is the experiment that proves it."
        },
        {
          "t": "p",
          "html": "Ordinary light from the Sun or a bulb is <b>unpolarised</b>: a chaotic mixture of waves wiggling in every possible transverse direction, reshuffling billions of times a second. A <b>polaroid</b> has a built-in molecular grating that transmits only the component of the electric field along its <b>pass axis</b> and absorbs the rest.<br><br>Send unpolarised light through one polaroid and what emerges is <b>plane-polarised</b>, wiggling in just one direction, at exactly <b>half</b> the original intensity. The half is not a coincidence and not a property of a particular polaroid: averaged over all the random incident directions, half the energy lines up with the pass axis and half does not. You will see in a moment that it is Malus's law averaged over every angle."
        },
        {
          "t": "think",
          "html": "take two polaroids and look at a bright window through both. rotate one of them. when their pass axes are <b>parallel</b>, light sails through. as you turn toward 90 degrees the view darkens. at exactly 90 degrees, crossed, it goes <b>completely black</b>: the first polaroid already filtered the light down to one direction, and the second, perpendicular to it, blocks that direction entirely. it is the two-fence picture. a vertical fence followed by a horizontal one passes nothing at all. the smooth darkening in between is what malus's law describes, and it is worth doing with two pairs of polarised sunglasses before you meet the formula."
        },
        {
          "t": "def",
          "term": "Polariser, analyser and pass axis",
          "html": "A <b>polariser</b> is the first polaroid, which converts unpolarised light into plane-polarised light. An <b>analyser</b> is a second polaroid used to test or measure that polarisation. Physically they are the same object; the names describe the job.<br><br>The <b>pass axis</b> is the direction of electric-field oscillation the polaroid transmits. The component of the incoming field along it gets through in full; the component perpendicular to it is absorbed entirely."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 10.10 AND 10.11 · WHAT A POLAROID KEEPS AND WHAT IT THROWS AWAY",
          "chips": ["one polaroid", "resolving E", "crossed"],
          "captions": [
            "Figure 10.10, first stage, drawn along the beam. On the left, unpolarised light: the electric field wiggles in every transverse direction, drawn as a rosette of double-headed arrows, and the mixture reshuffles billions of times a second. It meets a polaroid whose pass axis is vertical, shown by the slats. Out the other side comes light wiggling in one direction only, and at exactly half the incident intensity. The half comes from averaging over all those random directions, and no orientation of this first polaroid changes it: there is no angle to measure from when the incoming light has no single direction.",
            "Figure 10.11, now looking straight down the beam at the second polaroid, the analyser. The vertical arrow is the electric field E0 arriving from the first polaroid. The dashed line is the analyser's pass axis, at angle theta to it. Resolve E0 into two perpendicular pieces: E0 cos(theta) ALONG the pass axis, which is transmitted in full, and E0 sin(theta) across it, which is absorbed completely. Only the first survives, so the emerging amplitude is E0 cos(theta), and since intensity goes as the square of amplitude the emerging intensity is I0 cos squared theta. That is the whole of Malus's law, and it is one resolution of a vector into components.",
            "Figure 10.10, second stage: the crossed case, theta = 90 degrees. The field arriving is vertical and the pass axis is horizontal, so the component along the axis is exactly zero. Nothing gets through, and the word exactly is doing real work: for ideal polaroids this is not a very small number but a true zero. It is also the limiting case of the previous chip, since cos squared of 90 degrees is 0, which is why the crossed and parallel cases do not need to be remembered separately from the law."
          ],
          "frames": [
            {
              "x": [-4.4, 4.4], "y": [-2.9, 2.9], "axes": "none", "aspect": 0.669,
              "arrows": [
                { "from": [-3, -0.9], "to": [-3, 0.9], "head": "both", "tone": "ink" },
                { "from": [-3.9, 0], "to": [-2.1, 0], "head": "both", "tone": "ink" },
                { "from": [-3.64, -0.64], "to": [-2.36, 0.64], "head": "both", "tone": "ink" },
                { "from": [-2.36, -0.64], "to": [-3.64, 0.64], "head": "both", "tone": "ink" },
                { "from": [1.9, -0.62], "to": [1.9, 0.62], "head": "both", "tone": "amber" }
              ],
              "polys": [
                { "pts": [[-0.75, -1.9], [-0.35, -1.9], [-0.35, 1.9], [-0.75, 1.9], [-0.75, -1.9]], "tone": "ink" },
                { "pts": [[-0.67, -1.7], [-0.67, 1.7]], "tone": "soft" },
                { "pts": [[-0.55, -1.7], [-0.55, 1.7]], "tone": "soft" },
                { "pts": [[-0.43, -1.7], [-0.43, 1.7]], "tone": "soft" }
              ],
              "labels": [
                { "x": -3, "y": 1.75, "text": "unpolarised" },
                { "x": -0.55, "y": 2.35, "text": "pass axis vertical" },
                { "x": 1.9, "y": 1.5, "text": "plane-polarised" },
                { "x": 1.9, "y": -1.5, "text": "intensity I0/2" }
              ]
            },
            {
              "x": [-2.6, 2.6], "y": [-1.9, 1.9], "axes": "none", "aspect": 0.734,
              "segments": [
                { "from": [-1.35, -1.61], "to": [0, 0], "dash": true, "soft": true },
                { "from": [0.739, 0.88], "to": [1.35, 1.61], "dash": true, "soft": true, "label": "pass axis", "at": "end" },
                { "from": [0, 1.5], "to": [0.739, 0.88], "dash": true, "soft": true },
                { "from": [0, 1.5], "to": [-0.739, 0.62], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [0, 0], "to": [0, 1.5], "tone": "ink", "label": "E0" },
                { "from": [0, 0], "to": [0.739, 0.88], "tone": "green", "label": "E0 cos θ", "at": "end" },
                { "from": [0, 0], "to": [-0.739, 0.62], "tone": "red", "label": "E0 sin θ", "at": "end" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.55, "from": 50, "to": 90, "label": "θ", "tone": "ink" }
              ],
              "labels": [
                { "x": 1.15, "y": -1.05, "text": "green through, red absorbed" }
              ]
            },
            {
              "x": [-2.6, 2.6], "y": [-1.9, 1.9], "axes": "none", "aspect": 0.734,
              "segments": [
                { "from": [-2.1, 0], "to": [2.1, 0], "dash": true, "soft": true, "label": "pass axis", "at": "end" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [0, 1.5], "tone": "ink", "label": "E0" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.6, "from": 0, "to": 90, "label": "90°", "tone": "ink" }
              ],
              "marks": [
                { "x": 1.4, "y": 0, "glyph": "cross", "tone": "red" }
              ],
              "labels": [
                { "x": -1.05, "y": -1.05, "text": "nothing gets through" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · UNPOLARISED LIGHT THROUGH ONE POLAROID",
          "main": "<i>I</i> = <i>I</i><sub>0</sub>/2",
          "legend": [
            "<i>I</i><sub>0</sub> = intensity of the UNPOLARISED light arriving (W/m<sup>2</sup>, dimensions [M T<sup>−3</sup>])",
            "<i>I</i> = intensity leaving the polaroid (W/m<sup>2</sup>), and the emerging light is plane-polarised along the pass axis",
            "There is no angle in this formula, and that is the point: unpolarised light has no single direction to measure an angle from"
          ],
          "note": "The half is Malus's law averaged over every incident direction, since the mean of cos squared over a full turn is exactly 1/2. It applies only at the FIRST polaroid, and only to genuinely unpolarised input."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MALUS'S LAW",
          "tag": "for light that is ALREADY polarised",
          "main": "<i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> θ",
          "legend": [
            "<i>I</i><sub>0</sub> = intensity of the incident POLARISED light (W/m<sup>2</sup>)",
            "θ = angle between the incident polarisation direction and the polaroid's pass axis (degrees)",
            "<i>I</i> = transmitted intensity (W/m<sup>2</sup>). Since cos<sup>2</sup> never exceeds 1, the output can never exceed the input"
          ],
          "note": "Parallel, theta = 0, gives I0. Crossed, theta = 90 degrees, gives exactly 0. The law contains both endpoints, so they are not separate facts to remember."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MALUS'S LAW",
          "steps": [
            { "eq": "<i>E</i><sub>0</sub> incident, pass axis at angle θ", "why": "Plane-polarised light of amplitude <i>E</i><sub>0</sub>, and therefore of intensity <i>I</i><sub>0</sub> proportional to <i>E</i><sub>0</sub><sup>2</sup>, falls on an analyser whose pass axis makes angle θ with the incident polarisation direction." },
            { "eq": "<i>E</i><sub>parallel</sub> = <i>E</i><sub>0</sub> cos θ, <i>E</i><sub>perp</sub> = <i>E</i><sub>0</sub> sin θ", "why": "Resolve the field into a component along the pass axis and one across it. This is ordinary vector resolution; nothing about polaroids has been used yet." },
            { "eq": "<i>E</i> = <i>E</i><sub>0</sub> cos θ", "why": "NOW use the polaroid: it passes the parallel component in full and absorbs the perpendicular one entirely. So the emerging amplitude is just the parallel component." },
            { "eq": "<i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> θ", "why": "Intensity goes as the square of amplitude, so squaring the last line gives Malus's law. Note that the square is where the physics gets interesting: at θ = 60° the amplitude is halved but the intensity drops to a quarter." },
            { "eq": "check: θ = 0 gives <i>I</i><sub>0</sub>, θ = 90° gives 0", "why": "The parallel case transmits everything and the crossed case transmits nothing, both exactly. A law that did not contain its own endpoints would be suspect." },
            { "eq": "unpolarised input: ⟨cos<sup>2</sup> θ⟩ = 1/2", "why": "For unpolarised light every θ occurs with equal likelihood, and the average of cos<sup>2</sup> over a full turn is 1/2. So the first polaroid transmits half, which is where the <i>I</i><sub>0</sub>/2 rule comes from. The two formulas of this topic are one formula." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · MALUS'S LAW AS A CURVE",
          "chips": ["the curve", "the three angles you are asked about"],
          "captions": [
            "Transmitted intensity as a fraction of the incident polarised intensity, against the angle between the polarisation direction and the pass axis. The curve is cos squared theta, which is a raised cosine of twice the frequency, so it completes a full cycle every 180 degrees rather than every 360. That period is a physical fact, not a curiosity: rotating a polaroid by 180 degrees brings it back to the same pass axis, because an axis has no arrowhead.",
            "The same curve with the three angles every exam asks about marked on it. At 0 degrees the axes are parallel and everything gets through. At 45 degrees exactly half does, which is why a polaroid inserted between two crossed ones does its best work at 45 degrees. At 90 degrees the polaroids are crossed and the transmission is exactly zero. Read the shape as well as the points: the curve is flat near 0 and near 90, so small misalignments near the parallel setting barely matter, while near the crossed setting the extinction is very forgiving too. The steepest response, and therefore the most sensitive measurement, is at 45 degrees."
          ],
          "frames": [
            {
              "x": [0, 180], "y": [-0.12, 1.15], "axes": "auto", "aspect": 0.6,
              "axisX": "θ (degrees)", "axisY": "I / I0",
              "ticksX": { "at": [45, 90, 135, 180] },
              "ticksY": { "at": [0, 0.5, 1] },
              "curves": [
                { "c": "cos", "a": 0.5, "b": 0.0349066, "d": 0.5 }
              ]
            },
            {
              "x": [0, 180], "y": [-0.12, 1.15], "axes": "auto", "aspect": 0.6,
              "axisX": "θ (degrees)", "axisY": "I / I0",
              "ticksX": { "at": [45, 90, 135, 180] },
              "ticksY": { "at": [0, 0.5, 1] },
              "curves": [
                { "c": "cos", "a": 0.5, "b": 0.0349066, "d": 0.5 },
                { "c": "vline", "x": 45, "dash": true, "soft": true },
                { "c": "vline", "x": 90, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0, "y": 1, "label": "parallel" },
                { "x": 45, "y": 0.5, "label": "half" },
                { "x": 90, "y": 0, "label": "crossed", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "There is a second route to polarised light that needs no polaroid at all: <b>reflection</b>.<br><br>When unpolarised light reflects off a non-metallic surface, water, glass, a wet road, the reflected beam is <b>partially</b> polarised, and at one special angle of incidence, the <b>Brewster angle</b>, it becomes completely plane-polarised, perpendicular to the plane of incidence. That is exactly why polaroid sunglasses cut glare: glare off horizontal surfaces is horizontally polarised, and the sunglasses' vertical pass axis blocks it.<br><br>A third route is <b>scattering</b>, and it is happening above your head right now. When sunlight scatters off air molecules, the light scattered at 90° to the Sun is strongly polarised, which is why a clear blue sky brightens and dims as you rotate a polaroid in front of it, and how bees navigate by the sky's polarisation pattern when the Sun is hidden. A fourth, met at university, is <b>double refraction</b> in crystals like calcite, which splits a beam into two oppositely polarised rays. The common thread: every method <b>selects</b> one transverse direction out of the unpolarised jumble."
        },
        {
          "t": "defgrid",
          "title": "Four ways to polarise light",
          "rows": [
            { "k": "Selective absorption", "v": "the polaroid sheet. Long aligned molecules absorb one field component and transmit the perpendicular one" },
            { "k": "Reflection", "v": "at the Brewster angle tan <i>i</i><sub>B</sub> = <i>n</i>, the reflected beam is fully plane-polarised. Polaroid sunglasses" },
            { "k": "Scattering", "v": "sunlight scattered at 90° by air molecules is strongly polarised. The blue sky through a rotating polaroid" },
            { "k": "Double refraction", "v": "calcite and quartz split a beam into two oppositely polarised rays. The old Nicol prism" },
            { "k": "What cannot be polarised", "v": "sound, and any longitudinal wave. There is no transverse direction to select" },
            { "k": "Degree of polarisation", "v": "<i>P</i> = (<i>I</i><sub>max</sub> − <i>I</i><sub>min</sub>)/(<i>I</i><sub>max</sub> + <i>I</i><sub>min</sub>). 0 unpolarised, 1 fully polarised" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BREWSTER'S LAW",
          "main": "tan <i>i</i><sub>B</sub> = <i>n</i><br><i>i</i><sub>B</sub> + <i>r</i> = 90°",
          "legend": [
            "<i>i</i><sub>B</sub> = polarising angle, an angle of INCIDENCE measured from the normal (degrees)",
            "<i>n</i> = refractive index of the reflecting medium (no unit), which is why a tangent can legally equal it",
            "<i>r</i> = angle of refraction (degrees). At <i>i</i><sub>B</sub> the reflected and refracted rays are exactly perpendicular"
          ],
          "note": "For glass at n = 1.5, i_B = 56.3 degrees. Because n varies slightly with wavelength, so does i_B, which means polarisation by reflection is perfectly complete for only one colour at a time. The n here is a refractive index and nothing else, which is why this chapter kept m for the fringe order."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BREWSTER'S LAW",
          "steps": [
            { "eq": "<i>i</i><sub>B</sub> + <i>r</i> = 90°", "why": "The experimental fact Brewster found in 1812: at the angle where the reflected beam is completely plane-polarised, the reflected ray and the refracted ray are perpendicular to each other. Physically, the dipoles oscillating in the medium cannot radiate along their own axis, so for one polarisation component there is nothing to send in the reflected direction, leaving the reflection fully polarised." },
            { "eq": "<i>r</i> = 90° − <i>i</i><sub>B</sub>", "why": "Rearranged, ready to substitute. Note that <i>r</i> is the angle of REFRACTION, so it is the complement of <i>i</i><sub>B</sub> and not the reflection angle, which is <i>i</i><sub>B</sub> itself." },
            { "eq": "<i>n</i> = sin <i>i</i><sub>B</sub> / sin <i>r</i>", "why": "Snell's law from Topic 01, with the first medium air so that <i>n</i><sub>1</sub> = 1. Nothing about polarisation has been used in this step; it is the ordinary refraction law." },
            { "eq": "<i>n</i> = sin <i>i</i><sub>B</sub> / sin(90° − <i>i</i><sub>B</sub>) = sin <i>i</i><sub>B</sub> / cos <i>i</i><sub>B</sub>", "why": "Substitute the complement and use sin(90° − x) = cos x. The whole derivation is one experimental fact plus one trigonometric identity." },
            { "eq": "tan <i>i</i><sub>B</sub> = <i>n</i>", "why": "A tangent equals a refractive index, which is only legal because both sides are dimensionless. For glass, <i>n</i> = 1.5 gives <i>i</i><sub>B</sub> = 56.3°, and for water, <i>n</i> = 1.33 gives 53.1°, which is roughly the angle you look at a road at from a car seat." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 10.12 · THE BREWSTER GEOMETRY",
          "chips": ["an ordinary angle", "at the Brewster angle"],
          "captions": [
            "Unpolarised light striking a glass surface at an ordinary angle of incidence, here 35 degrees. Some of it reflects and some refracts into the glass, and the reflected beam is PARTIALLY polarised: it carries more of the component perpendicular to the plane of the page than of the one in it, but not exclusively. The reflected and refracted rays here make an angle of about 122 degrees with each other, which is nothing special. Rotate a polaroid in this reflected beam and it brightens and dims, but never goes fully dark.",
            "The same surface at the Brewster angle, 56.3 degrees for glass at n = 1.5. Two things happen at once and they are the same thing. The reflected ray and the refracted ray become exactly perpendicular, the 90 degree arc drawn between them, and the reflected beam becomes COMPLETELY plane-polarised, its electric field entirely perpendicular to the page, which is what the dotted circles on it mean. Add the geometry to Snell's law and tan of the Brewster angle is the refractive index. Rotate a polaroid in this reflected beam and at one orientation it goes fully black."
          ],
          "frames": [
            {
              "x": [-2.4, 2.4], "y": [-2, 1.8], "axes": "none", "aspect": 0.792,
              "polys": [
                { "pts": [[-2.35, -1.95], [2.35, -1.95], [2.35, 0], [-2.35, 0], [-2.35, -1.95]], "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-1.262, 1.803], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [1.262, 1.803], "tone": "amber" },
                { "from": [0, 0], "to": [0.765, -1.848], "tone": "amber" }
              ],
              "segments": [
                { "from": [0, -1.85], "to": [0, 1.75], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.72, "from": 90, "to": 125, "label": "i", "tone": "ink" },
                { "at": [0, 0], "r": 0.72, "from": 270, "to": 292.5, "label": "r", "tone": "ink" }
              ],
              "labels": [
                { "x": 1.5, "y": -0.62, "text": "glass" },
                { "x": -1.5, "y": 0.35, "text": "partly polarised" }
              ]
            },
            {
              "x": [-2.4, 2.4], "y": [-2, 1.8], "axes": "none", "aspect": 0.792,
              "polys": [
                { "pts": [[-2.35, -1.95], [2.35, -1.95], [2.35, 0], [-2.35, 0], [-2.35, -1.95]], "fill": "wash", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-1.83, 1.22], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [1.83, 1.22], "tone": "amber" },
                { "from": [0, 0], "to": [1.11, -1.664], "tone": "amber" }
              ],
              "segments": [
                { "from": [0, -1.85], "to": [0, 1.75], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.62, "from": 90, "to": 146.3, "label": "iB", "tone": "ink" },
                { "at": [0, 0], "r": 0.62, "from": 270, "to": 303.7, "label": "r", "tone": "ink" },
                { "at": [0, 0], "r": 1.45, "from": -56.3, "to": 33.7, "label": "90°", "tone": "ink" }
              ],
              "marks": [
                { "x": 0.9, "y": 0.6, "glyph": "outof" },
                { "x": 1.35, "y": 0.9, "glyph": "outof" }
              ],
              "labels": [
                { "x": 1.5, "y": -0.62, "text": "glass" },
                { "x": -1.35, "y": 0.35, "text": "unpolarised" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any stack of polaroids: half first, cosine-squared the rest",
          "steps": [
            "If the incoming light is UNPOLARISED, write <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2 for the first polaroid and note that the light leaving it is polarised along that polaroid's pass axis. If the incoming light is already polarised, skip this step entirely and start with Malus.",
            "For every polaroid after the first, multiply by cos<sup>2</sup>(Δθ), where Δθ is the angle to the PREVIOUS polaroid's axis, not to the first one.",
            "Track the running orientation as you go, because the polarisation direction after each polaroid is that polaroid's own pass axis.",
            "Sanity-check the ends: crossed polaroids with nothing between them pass zero, and the most a two-polaroid stack can ever pass from unpolarised input is <i>I</i><sub>0</sub>/2.",
            "For a maximisation question, write the total as a function of the free angle and use a double-angle identity: cos θ sin θ = (1/2) sin 2θ turns two factors into one, and the maximum is then obvious."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Unpolarised light of intensity <i>I</i><sub>0</sub> passes through two polaroids whose pass axes are at 30° to each other. Find the intensity of the emerging light.",
          "steps": [
            "First polaroid, unpolarised input: <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2. The light leaving is polarised along that polaroid's axis.",
            "Second polaroid, and now the light IS polarised, so Malus applies with θ = 30°.",
            "<i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup> 30° = (<i>I</i><sub>0</sub>/2)(√3/2)<sup>2</sup> = (<i>I</i><sub>0</sub>/2)(3/4) = 3<i>I</i><sub>0</sub>/8.",
            "Sanity check: 3/8 is less than 1/2, which it must be, since no orientation of the second polaroid can pass more than what reaches it."
          ],
          "ans": "<i>I</i> = 3<i>I</i><sub>0</sub>/8"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Unpolarised light of intensity <i>I</i><sub>0</sub> falls on a single polaroid. The transmitted intensity is (A) <i>I</i><sub>0</sub> (B) <i>I</i><sub>0</sub>cos<sup>2</sup>θ (C) <i>I</i><sub>0</sub>/2 (D) 0.",
          "steps": [
            "For unpolarised light through ONE polaroid the output is always <i>I</i><sub>0</sub>/2, whatever the polaroid's orientation.",
            "Option (B) is the classic mistake: applying Malus's law to unpolarised light. Malus needs an incident polarisation DIRECTION to measure θ from, and unpolarised light has none. There is literally no angle to substitute.",
            "Reach for cos<sup>2</sup>θ only AFTER the first polaroid has done its job and given the light a direction.",
            "The physical reason for the half: averaged over all the random incident directions, ⟨cos<sup>2</sup>θ⟩ = 1/2, so half the energy lines up with the axis and half does not."
          ],
          "ans": "(C) <i>I</i><sub>0</sub>/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Unpolarised light of intensity <i>I</i><sub>0</sub> passes through three polaroids. The first and third are crossed, at 90°. The middle one has its axis at 30° to the first. Find the intensity emerging from the third.",
          "steps": [
            "First polaroid: <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2, polarised along axis 1.",
            "Second polaroid, at 30° to the first: <i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup> 30° = (<i>I</i><sub>0</sub>/2)(3/4) = 3<i>I</i><sub>0</sub>/8. The light is now polarised along axis 2.",
            "Third polaroid. Its axis is at 90° to the FIRST, so it is at 90° − 30° = 60° to the SECOND, and 60° is the angle Malus needs.",
            "<i>I</i><sub>3</sub> = <i>I</i><sub>2</sub> cos<sup>2</sup> 60° = (3<i>I</i><sub>0</sub>/8)(1/4) = 3<i>I</i><sub>0</sub>/32.",
            "The striking part: with only the first and third polaroids the output is exactly zero. Slipping a polaroid BETWEEN two crossed ones lets light through again, because the middle one re-orients the polarisation so that the third is no longer perpendicular to it."
          ],
          "ans": "<i>I</i> = 3<i>I</i><sub>0</sub>/32"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Two polaroids are crossed at 90°. A third is inserted between them with its pass axis at angle φ to the first. With unpolarised input of intensity <i>I</i><sub>0</sub>, (a) find the transmitted intensity as a function of φ and (b) find the φ that maximises it, and that maximum.",
          "steps": [
            "After the first polaroid: <i>I</i><sub>0</sub>/2. The middle one is at φ to the first, and the last is at 90° to the first, hence at (90° − φ) to the middle one.",
            "(a) Applying Malus twice: <i>I</i>(φ) = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>φ cos<sup>2</sup>(90° − φ) = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>φ sin<sup>2</sup>φ.",
            "Simplify with the double-angle identity cos φ sin φ = (1/2) sin 2φ: <i>I</i>(φ) = (<i>I</i><sub>0</sub>/2)(1/4) sin<sup>2</sup>2φ = (<i>I</i><sub>0</sub>/8) sin<sup>2</sup>2φ.",
            "(b) sin<sup>2</sup>2φ is largest, equal to 1, when 2φ = 90°, so φ = 45°, and <i>I</i><sub>max</sub> = <i>I</i><sub>0</sub>/8.",
            "Read the answer physically: the middle polaroid should BISECT the angle between the crossed pair. Each Malus factor is then cos<sup>2</sup>45° = 1/2, and (<i>I</i><sub>0</sub>/2)(1/2)(1/2) = <i>I</i><sub>0</sub>/8.",
            "A system that passed nothing at all now passes an eighth of the input, by adding an extra absorber. That is the elegant sting."
          ],
          "ans": "<i>I</i>(φ) = (<i>I</i><sub>0</sub>/8) sin<sup>2</sup>2φ · maximum <i>I</i><sub>0</sub>/8 at φ = 45°"
        },
        {
          "t": "mcq",
          "q": "Polarisation of light proves that light waves are",
          "opts": [
            { "label": "longitudinal", "nudge": "The opposite of the truth, and it would predict that light CANNOT be polarised, which is how sound actually behaves." },
            { "label": "transverse", "nudge": null },
            { "label": "both longitudinal and transverse", "nudge": "This treats light as a mixed-mode wave. Light is purely transverse; there is no longitudinal component of E or B in a plane electromagnetic wave in free space." },
            { "label": "neither", "nudge": "This ignores the experimental fact of polarisation altogether. A wave that can be filtered by orientation must have an orientation to filter." }
          ],
          "correct": 1,
          "solution": "Only a transverse wave has a polarisation direction that a polaroid can select. The fact that light CAN be polarised is therefore direct evidence that it is transverse, and sound, being longitudinal, cannot be polarised at all."
        },
        {
          "t": "mcq",
          "q": "Light reflected from a surface is completely plane-polarised when the angle between the reflected and refracted rays is",
          "opts": [
            { "label": "0°", "nudge": "That would mean the two rays travel together, so there is no separation of the two polarisation components and no polarising effect at all." },
            { "label": "45°", "nudge": "An arbitrary value with no physical basis here. It tempts students who confuse this with a Malus-law angle, where 45° really is special." },
            { "label": "90°", "nudge": null },
            { "label": "180°", "nudge": "This would send the refracted ray back along the reflected one, which is geometrically impossible for a ray entering the medium." }
          ],
          "correct": 2,
          "solution": "At the Brewster angle the reflected and refracted rays are mutually perpendicular, so <i>i</i><sub>B</sub> + <i>r</i> = 90°. Feeding that into Snell's law gives tan <i>i</i><sub>B</sub> = <i>n</i>."
        },
        {
          "t": "mcq",
          "q": "The Brewster angle for a medium of refractive index √3 is",
          "opts": [
            { "label": "30°", "nudge": "This corresponds to tan <i>i</i><sub>B</sub> = 1/√3, which is the relation inverted. Check which way round the tangent goes before computing." },
            { "label": "45°", "nudge": "tan 45° = 1, which would mean <i>n</i> = 1, that is no medium at all. A Brewster angle of 45° describes a boundary between identical media." },
            { "label": "60°", "nudge": null },
            { "label": "90°", "nudge": "This misreads Brewster's law as <i>i</i><sub>B</sub> being some multiple of <i>n</i>. At 90° the light grazes the surface and never enters it." }
          ],
          "correct": 2,
          "solution": "tan <i>i</i><sub>B</sub> = <i>n</i> = √3, so <i>i</i><sub>B</sub> = 60°. The refraction angle is then the complement, 30°, and the two rays are 90° apart as they must be."
        },
        {
          "t": "mcq",
          "q": "Two polaroids are oriented with their pass axes parallel. By what angle must one be rotated so that the transmitted intensity falls to one quarter of its parallel value?",
          "opts": [
            { "label": "30°", "nudge": "cos<sup>2</sup>30° = 3/4, not 1/4. This is the angle at which three quarters get through, and it is the answer to a different question." },
            { "label": "45°", "nudge": "cos<sup>2</sup>45° = 1/2. Halving and quartering are different: the square means the angle for a quarter is well past the angle for a half." },
            { "label": "60°", "nudge": null },
            { "label": "75°", "nudge": "cos<sup>2</sup>75° is about 0.067, far below a quarter. This overshoots by taking the intensity ratio as the cosine rather than its square." }
          ],
          "correct": 2,
          "solution": "Malus: <i>I</i>/<i>I</i><sub>0</sub> = cos<sup>2</sup>θ = 1/4, so cos θ = 1/2 and θ = 60°. Take the square root of the intensity ratio before you take the inverse cosine."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] At what angle of incidence is light reflected off a glass surface (<i>n</i> = 1.5) completely plane-polarised?", "a": "<i>i</i><sub>B</sub> = tan<sup>−1</sup>(1.5) = 56.3°. The refracted ray then leaves at 90° − 56.3° = 33.7°, and the two rays are perpendicular, which is the check." },
            { "q": "[NEET] Unpolarised light of intensity 32 W/m<sup>2</sup> passes through two polaroids with axes at 45°. Find the final intensity.", "a": "First polaroid: 32/2 = 16 W/m<sup>2</sup>. Second, by Malus: 16 × cos<sup>2</sup>45° = 16 × 1/2 = 8 W/m<sup>2</sup>." },
            { "q": "[JEE Main] At the Brewster angle for a certain medium the angle of refraction is 32°. Find the refractive index.", "a": "<i>i</i><sub>B</sub> = 90° − 32° = 58°, so <i>n</i> = tan 58° = 1.60. Note that the question gives the REFRACTION angle, so the complement must be taken first." },
            { "q": "[JEE Advanced] Three polaroids are stacked. The second is at 30° to the first and the third at 30° to the second, so 60° to the first. Unpolarised light of intensity <i>I</i><sub>0</sub> is incident. Find the emerging intensity.", "a": "<i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>30° cos<sup>2</sup>30° = (<i>I</i><sub>0</sub>/2)(3/4)(3/4) = 9<i>I</i><sub>0</sub>/32. Each cosine takes the angle to the PREVIOUS polaroid, which here happens to be 30° both times." },
            { "q": "[JEE Advanced] Compare the answer above with what you would get if the third polaroid were at 60° to the second instead of 30°, and say which arrangement passes more light.", "a": "With 60° to the second: <i>I</i> = (<i>I</i><sub>0</sub>/2)(3/4)cos<sup>2</sup>60° = (<i>I</i><sub>0</sub>/2)(3/4)(1/4) = 3<i>I</i><sub>0</sub>/32, one third of the 9<i>I</i><sub>0</sub>/32 above. Turning the same total rotation in equal small steps always passes more than turning it in one big step, which is the whole idea behind the crossed-polaroid trick." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Skipping the <i>I</i><sub>0</sub>/2 at the first polaroid.</b> Unpolarised light entering the first polaroid is ALWAYS halved, whatever its orientation. Forgetting it throws off every multi-polaroid numerical by a factor of two.",
            "<b>Applying Malus's law to unpolarised light.</b> <i>I</i><sub>0</sub>cos<sup>2</sup>θ needs a defined incident polarisation direction. Unpolarised light has none, so there is no θ to substitute. Use Malus only from the second polaroid onward.",
            "<b>Measuring Malus angles from the wrong reference.</b> In a stack, each θ is the angle between CONSECUTIVE polaroids, not the angle from the first one. Track the running orientation as you go.",
            "<b>Forgetting that <i>i</i><sub>B</sub> is an angle of incidence.</b> tan <i>i</i><sub>B</sub> = <i>n</i> gives the INCIDENCE angle. The refraction angle is its complement, 90° − <i>i</i><sub>B</sub>, and a question that hands you the refraction angle needs that step first.",
            "<b>Taking the intensity ratio as the cosine.</b> Malus has cos SQUARED. To get θ from an intensity ratio, take the square root first: <i>I</i>/<i>I</i><sub>0</sub> = 1/4 gives cos θ = 1/2 and θ = 60°, not 75°."
          ]
        },
        {
          "t": "protip",
          "html": "every polaroid problem is the same two moves. write <i>I</i><sub>0</sub>/2 for the first polaroid if the input is unpolarised, then multiply by cos<sup>2</sup>(Δθ) once for each polaroid after it, with Δθ measured to the PREVIOUS one. that is the whole method. three sanity checks come free: crossed polaroids pass exactly zero, inserting one between two crossed ones always lets some light back through, and a two-polaroid stack fed with unpolarised light can never pass more than <i>I</i><sub>0</sub>/2. if an answer beats that, a factor has gone the wrong way."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "only TRANSVERSE waves polarise, so light does and sound does not", "note": "the most direct evidence that light is transverse" },
            { "f": "unpolarised → one polaroid: <i>I</i> = <i>I</i><sub>0</sub>/2, output plane-polarised", "note": "no angle in it. there is none to measure" },
            { "f": "Malus: <i>I</i> = <i>I</i><sub>0</sub>cos<sup>2</sup>θ", "note": "for light that is ALREADY polarised. parallel gives <i>I</i><sub>0</sub>, crossed gives exactly 0" },
            { "f": "⟨cos<sup>2</sup>θ⟩ = 1/2", "note": "which is why the two formulas above are really one" },
            { "f": "Brewster: tan <i>i</i><sub>B</sub> = <i>n</i>, and <i>i</i><sub>B</sub> + <i>r</i> = 90°", "note": "reflected ⟂ refracted, reflected fully polarised. 56.3° for glass" },
            { "f": "stack routine: <i>I</i><sub>0</sub>/2, then × cos<sup>2</sup>(Δθ) per polaroid", "note": "Δθ to the PREVIOUS polaroid, never to the first" },
            { "f": "<i>P</i> = (<i>I</i><sub>max</sub> − <i>I</i><sub>min</sub>)/(<i>I</i><sub>max</sub> + <i>I</i><sub>min</sub>)", "note": "0 for unpolarised, 1 for fully polarised" },
            { "f": "made by absorption, reflection, scattering, double refraction", "note": "sunglasses, blue sky, LCD screens, 3D glasses" }
          ],
          "aids": [
            "half first, cosine-squared the rest",
            "transverse polarises, longitudinal cannot",
            "crossed means zero. put a third one at 45 degrees in between and you get an eighth back"
          ]
        }
      ]
    }
  ]
};

export default phy12WaveOptics;
