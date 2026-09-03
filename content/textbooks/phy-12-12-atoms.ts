/**
 * Chapter 12 · Atoms. Physics, Class 12.
 *
 * Restructured from pages 755 to 808 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-08-electromagnetic-waves.ts.
 *
 * FIVE TOPICS FROM THREE SOURCE SUBTOPICS, SPLIT TWICE. The source carries
 * only three subtopics (01 Alpha-particle Scattering and Rutherford's Nuclear
 * Model, 02a Bohr's Model and Energy Levels, 02b Atomic Spectra and the
 * Hydrogen Spectral Series), and the reader's gate wants four to six, so at
 * least one split was forced. Two were taken, on seams the source draws for
 * itself:
 *   Subtopic 01 splits at its own Section 3, which is headed "(A) Distance of
 *     closest approach" and "(B) Impact parameter relation". (A) is a
 *     head-on, one-dimensional energy-conservation argument and needs no
 *     geometry at all; (B) is a two-dimensional scattering geometry that also
 *     carries the 1/sin^4 counting law and, with it, the two failures of the
 *     nuclear atom. Topic 01 is the experiment and the closest approach;
 *     Topic 02 is the geometry, the counting law and the collapse.
 *   Subtopic 02a splits after Step 4 of its own derivation. Steps 1 to 4 get
 *     the radius and the speed out of force balance plus quantisation, and
 *     never mention energy. Step 5 adds the energy, and with it the sign, the
 *     virial split, the ionisation energy and the de Broglie standing wave,
 *     which is the whole conceptual load of the model. Topic 03 is the
 *     postulates, the radius and the speed; Topic 04 is the energy ladder.
 * Subtopic 02b was NOT split, though it is the densest of the three. Its
 * Rydberg formula, its five series, its series limits and its line count are
 * one argument read at four zoom levels, and a checkpoint in the middle of it
 * would separate the formula from the table it exists to produce. It is
 * Topic 05, and it is the longest topic here.
 *
 * THE ROUND 2 ADDENDUM (pages 787 to 808: A reduced mass and isotope shifts,
 * B Moseley's law and X-ray spectra, C the Franck-Hertz experiment, D laser
 * physics, E the Zeeman effect, F what needs full quantum mechanics) IS NOT A
 * TOPIC, per the brief, and it reaches a student in exactly four places
 * below, all of them a single line:
 *   - Topic 03's protip names the reduced-mass replacement as the one
 *     correction that survives to JEE Advanced (Addendum A, Method).
 *   - Topic 04's mistakes item on Bohr's domain names electron-electron
 *     repulsion in neutral helium as the reason 24.6 eV is not 54.4 eV
 *     (Addendum A, Example A.2, whose two numbers are both correct).
 *   - Topic 04's protip names the Franck-Hertz experiment as the direct
 *     electrical measurement of an excitation energy (Addendum C, Method).
 *   - Topic 05's final paragraph names fine structure and line intensities as
 *     what the level scheme cannot reach (Addendum F, Method).
 * No `formula`, `defgrid`, `deriv`, `proc`, `ex`, `mcq` or `practice` block
 * below is sourced from the addendum, and no addendum NUMBER is carried
 * anywhere, which matters, because six of the ones I checked are wrong.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). NO ENTRY TOUCHES THIS
 * RANGE, confirmed rather than assumed. The Class 12 errata has exactly two
 * entries. Chapter 7 (Alternating Current) page 14: a Practice 5 whose stated
 * drive frequency IS the resonant frequency of its own stated components, so
 * "the current lagging the voltage" cannot hold. Chapter 10 (Wave Optics)
 * page 33: thin-film interference with the dark and bright conditions swapped
 * in one sentence. Chapter 12 is not named, and neither entry changes a
 * number, a formula or a claim this chapter uses.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 755 to 808 was recomputed independently, addendum first.
 *
 * THE MAIN BODY IS CLEAN. Pages 755 to 786 carry twelve worked examples,
 * fifteen practice answers and twelve MCQ keys, and every single one of them
 * recomputes correctly: the closest approaches (2.1, 3.0, 2.9 and 4.5
 * femtometre-scale answers), the impact parameters (2.3 and 3.3 x 10^-14 m),
 * the 1/sin^4 ratios (4 and 1/4), the same-potential 1 : 1 and the
 * same-momentum 8 : 1, the Bohr radii and energies, the muonic 2.82 and 2.53
 * keV, and every Rydberg wavelength in the five-series table (121.6, 656.3,
 * 1875, 4051, 7460 nm and the limits 91.2, 364.6, 820.4, 1458, 2279 nm).
 * I re-derived the table from R = 1.097 x 10^7 m^-1 rather than trusting it,
 * and it agrees to the last printed figure everywhere. Two soft items only:
 *
 *   1. SOFT, page 760. "The true gold radius is about 6 fm." On the standard
 *      estimate the Nuclei chapter uses, R = 1.2 A^(1/3) fm with A = 197,
 *      the gold radius is 1.2 x 5.82 = 6.98 fm, so about 7 fm. Six is what
 *      R_0 = 1.1 fm would give. The argument the sentence is making (the
 *      alpha turns round well before touching) is unaffected and gets
 *      stronger with the larger figure, but Topic 01's practice 4 below uses
 *      1.2 A^(1/3) explicitly and says 7 fm, so the two would have clashed.
 *   2. SOFT, page 782. Example 1 calls 486 nm "blue-green". It is; H-beta is
 *      cyan. Recorded only because Topic 05's spectrum figure has to place it
 *      and a reader checking the figure against the text will want to know
 *      the two agree deliberately.
 *
 * THE ADDENDUM IS NOT CLEAN, exactly as the brief predicted, and the six
 * faults below are recorded with their working even though not one of them is
 * carried into a block.
 *
 *   A1. ADDENDUM B, Example B.2 and Practice 2 (pages 792 to 793): THE
 *       MOSELEY CONSTANT IS WRONG, AND EVERYTHING BUILT ON IT IS WRONG.
 *       Printed: "Moseley's law for K-alpha X-rays is sqrt(nu) = 2.98 x 10^7
 *       (Z - 1) Hz^(1/2)." Working: Moseley's line is the n = 2 to n = 1
 *       transition of a screened nucleus, so nu = (3/4) c R (Z - 1)^2 and
 *       a = sqrt((3/4) c R) = sqrt(0.75 x 3 x 10^8 x 1.097 x 10^7)
 *       = sqrt(2.468 x 10^15) = 4.97 x 10^7 Hz^(1/2), not 2.98 x 10^7. It
 *       looks like 4.98 with the leading digit slipped. The consequences:
 *       (a) Example B.2 computes Cu K-alpha as 4.31 Angstrom against a
 *       measured 1.54, notices the gap, prints the leaked draft sentence
 *       "Let me recalculate using the standard form of Moseley's law", and
 *       restarts. The restart then quotes "a = 2.99 x 10^7 m^(-1/2)" for the
 *       WAVENUMBER form, where the right constant is sqrt(0.75 R)
 *       = sqrt(8.2275 x 10^6) = 2.87 x 10^3 m^(-1/2), four orders out; and
 *       its own arithmetic prints "1/lambda = 7.01 x 10^17 m^-2" and then
 *       "lambda = 1.43 x 10^-10 m", when 1/(7.01 x 10^17) is 1.43 x 10^-18.
 *       The right answer, from 1/lambda = (3/4) R (Z - 1)^2 with Z = 29, is
 *       1/lambda = 8.2275 x 10^6 x 784 = 6.450 x 10^9 m^-1, CORRECT LAMBDA
 *       = 155 pm, which agrees with the measured 154 pm to within the
 *       rounding of R.
 *       (b) Practice 2 asks for the element whose K-alpha is 57.5 pm and
 *       answers "Z = 77, Iridium". Working: (Z - 1)^2 = (1/lambda)/((3/4)R)
 *       = 1.739 x 10^10 / 8.2275 x 10^6 = 2113.8, so Z - 1 = 45.98 and
 *       CORRECT ANSWER Z = 47, SILVER, whose K-alpha is 55.9 pm. Iridium's
 *       K-alpha is about 21 pm, three times too short. The chapter refutes
 *       itself: its own Comprehensive Practice 9 (page 807) uses the correct
 *       a = sqrt((3/4) c R) = 4.97 x 10^7 and lands on cobalt correctly.
 *   A2. ADDENDUM A, Example A.1 Step 3 (page 789): a transposed digit.
 *       Printed "1836 x 3673 = 6,743,268". Working: 1836 x 3673 = 6,743,628.
 *       The printed ratio 6,743,268 / 6,745,464 = 0.999675 should be
 *       6,743,628 / 6,745,464 = 0.999728. The example's OWN check catches it
 *       and is ignored: it says the fractional shift should be m_e/M_d
 *       = 1/(2 x 1836) = 2.72 x 10^-4, and 1 - 0.999728 is 2.72 x 10^-4
 *       exactly, while 1 - 0.999675 is 3.25 x 10^-4, twenty per cent out.
 *       The final answer 656.1 nm survives because it is only quoted to four
 *       figures. CORRECT RATIO 0.999728.
 *   A3. ADDENDUM A, Practice 3 (page 790): the wrong isotope, twice over.
 *       The question asks for the change in the Rydberg constant from
 *       hydrogen (M = 1836 m_e) to TRITIUM (M = 3 x 1836 m_e = 5508 m_e).
 *       The printed answer writes "For T: R_T = R_inf x 3672/3673", which is
 *       2 x 1836, i.e. DEUTERIUM. And the arithmetic does not follow from
 *       even that: (1836/1837) x (3673/3672) = 0.999728, not the printed
 *       0.99955, and 0.999728 is a 0.027 per cent change, not the printed
 *       0.045 per cent. Working with the right mass:
 *       R_H/R_T = (1836/1837) x (5509/5508) = 0.999637.
 *       CORRECT ANSWER 0.036 per cent.
 *   A4. ADDENDUM E, Practice 5(b) (page 804): a power of ten in a square.
 *       Printed "(121.6 x 10^-9)^2 = (1.479 x 10^-17)". Working:
 *       (1.216 x 10^-7)^2 = 1.479 x 10^-14, a thousand times larger. So
 *       delta-lambda = lambda^2 mu_B B/(hc) = (1.479 x 10^-14)(9.274 x
 *       10^-24)/(1.986 x 10^-25) = 6.90 x 10^-13 m. CORRECT ANSWER
 *       6.9 x 10^-13 m, which is 6.9 x 10^-4 nm, not the printed
 *       6.9 x 10^-7 nm. The printed value is a thousand times too small, and
 *       the sentence "This is extremely small" is doing the work of a check.
 *   A5. ADDENDUM F, Practice 3 (page 806): arithmetic, twice printed.
 *       "Delta-E ~ (13.6/4) x (1/18769) ~ 3.4 x 10^-4 eV." Working:
 *       13.6/4 = 3.4 eV, and 3.4/18769 = 1.81 x 10^-4 eV. The printed
 *       3.4 x 10^-4 is the numerator with the division not done, and it is
 *       carried into the joule conversion on the same line (5.4 x 10^-23 J,
 *       which should be 2.9 x 10^-23 J). CORRECT ANSWER 1.8 x 10^-4 eV.
 *       (As an order-of-magnitude estimate it over-predicts anyway: the real
 *       n = 2 fine-structure splitting is 4.5 x 10^-5 eV.)
 *   A6. ADDENDUM F, Method (page 804), a naming fault rather than a number.
 *       "The 2p(3/2) and 2s(1/2) states ... differ by ~4.5 x 10^-5 eV (the
 *       Lamb shift)." 4.5 x 10^-5 eV is right for that pair, but it is the
 *       FINE STRUCTURE splitting. The Lamb shift is the 2s(1/2) to 2p(1/2)
 *       gap, and the same addendum gives it correctly four pages later as
 *       4.4 x 10^-6 eV and 1057 MHz. Two different effects, one name, ten
 *       times apart.
 *   A7. ADDENDUM's Comprehensive Practice 10 (page 808): the answer is right
 *       and the reasoning that reaches it is not. It asserts
 *       "Delta-E(31) > Delta-E(32) > Delta-E(21)", which is false:
 *       Delta-E(31) = 12.09 eV, Delta-E(21) = 10.2 eV, Delta-E(32) = 1.89 eV,
 *       so the true order is 31 > 21 > 32. It then writes "The smallest gap
 *       is 2 to 1", which is also false, before arriving at the correct
 *       lambda(32) > lambda(21) > lambda(31). Topic 05's line-count material
 *       states the ordering rule correctly and derives it from the ladder
 *       rather than asserting it.
 *   A8. ADDENDUM C, Practice 4 (page 796), leaked draft prose still in the
 *       plated answer: "...but that doesn't mean the electron has
 *       energy-wait. At exactly 9.8 V, ..." The physics either side of the
 *       word is right; the word is a note to self.
 *
 * SOURCE DAMAGE. Pages 755 to 808 have their own dialect. Every passage below
 * was re-authored from context, never transcribed. What this range actually
 * had, checked rather than assumed, over 99,511 extracted characters:
 *
 *   - GREEK AND ITALIC SURVIVE AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), which draws as blank boxes on device and which
 *     validate-chapters rejects outright. 2,630 instances across 52 distinct
 *     code points, and they are the chapter's entire symbol vocabulary:
 *     math-italic n (344), Z (216), m (189), e (154), E (137), B, N, f, R, r,
 *     c, d, b, K, v, t, and the Greek lambda (145), nu (82), mu (67), pi
 *     (63), eps, theta, alpha, sigma, phi, tau. Every symbol below is retyped
 *     as an ordinary character inside <i> tags and every Greek letter as its
 *     plain Unicode form.
 *   - THE DEGREE SIGN IS NEVER U+00B0. Zero instances of it in 54 pages.
 *     Every degree in the source is U+2218 RING OPERATOR (26 instances,
 *     "90 U+2218") or the token "\nK" (4 instances, in the two cheat-sheet
 *     boxes). Both are re-authored as ° (U+00B0) below, and the ring operator
 *     is exactly what validate-chapters warns about after a digit.
 *   - THE TOKEN FAMILY, PARTIALLY. "\nN" for the multiplication sign, 13
 *     instances, all in Subtopic 02a's Example 4 and its two boxes. "\n7" for
 *     the minus sign, 5 instances, all inside cheat-sheet formulas, so
 *     "h nu = E_i \n7 E_f" and "N = n(n \n7 1)/2". "\nK" for the degree sign,
 *     4. One "\tV" (page 759), which sits where a closing bracket belongs:
 *     "N proportional-to 1/K^2 (proportional-to 1/v^4 \tV". Checked for and
 *     ABSENT: "\nA" (centred dot), "\nC" (colon), "\nH" (ellipsis), 0 each.
 *     Most of the range's minus signs (390) and multiplication signs (254)
 *     extract correctly, so the token dialect is a localised font fallback,
 *     not a whole-range substitution.
 *   - WINGDINGS TICKS AND CROSSES ARRIVE AS BARE DIGITS, and this one is
 *     dangerous because the result is still readable as arithmetic. Subtopic
 *     02a Example 2 prints "He+: Z = 2, n = 2 => Z = n3" and "Be3+: Z = 4,
 *     n = 2 => Z != n7". The trailing 3 is a Wingdings tick and the trailing
 *     7 is a Wingdings cross. Same again at the end of Example 3, "= 2 lambda
 *     .3", where the 3 is a tick confirming the check. Four instances, and a
 *     transcriber who did not know would have carried a stray digit into a
 *     quantum number.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively.
 *     Every power of ten, every E_n and r_n and n_f and n_i, every Z^2 and
 *     n^2, and every dimensional formula breaks into three or four lines.
 *     Recomputing every numerical answer independently, and re-deriving every
 *     formula in the DIMENSIONS ledger below, was the check that these were
 *     rebuilt correctly.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout. "6.4MeV",
 *     "isTheBalmerseries", "thePaschen, Brackett, and Pfundseries", "the
 *     atom's mass and charge", "13.6eV", "Correct: (B).", "Series limit
 *     (n_i to infinity)Lyman1Ultraviolet121.6nm91.2nm" (the entire
 *     five-series table arrives as one unbroken run per row).
 *   - TEXT ARRIVES OUT OF ORDER on page 759. The sentence that introduces the
 *     scattering law, "Rutherford scattering law - number () per unit
 *     detector area at angle:", extracts at the BOTTOM of the page, after the
 *     formula it introduces and after the page number. Its bracket is empty
 *     where the symbol N(theta) belongs. Page 772 ends with three stranded
 *     "~" glyphs that belong to the three "approximately" signs in Example 4.
 *   - U+20D7 COMBINING ARROW, 14 instances, all in Addendum E, and it lands
 *     BEFORE its letter. No vector notation is needed anywhere in this
 *     chapter's own material, so nothing below carries one.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: octal escapes of the
 *     \050 kind (0), ff/fi/fl ligatures as U+FB00 to U+FB02 (0 each), leaked
 *     LaTeX delimiters (0 of "\(", "\[" or "$"), HTML entities (0), and the
 *     ASCII heading shifts of +29, -29 and +46 that other ranges logged (0;
 *     all 24 "Section N:" headings and both Cheat Sheet Box headings read
 *     correctly).
 *   - NO SILENTLY EMPTY PAGES. Every page from 755 to 808 was measured for
 *     extracted length before any of it was read. The shortest are 755 (78
 *     characters, the cover), 756 (238, the contents), 775 (345), 777 (503)
 *     and 776 (513), and those last three are the book's own "CHAPTER 12
 *     FIGURES" pages, each holding one or two figure captions and nothing
 *     else. No run of blank pages exists, so no pdftoppm render was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A. Twenty-one
 * lines checked, twenty-one consistent, none rejected. Current is a base
 * dimension, so [A] is irreducible; charge is [A T]; eps0 is
 * [M-1 L-3 T4 A2]; h is [M L2 T-1].
 *
 *   THE GROUP THAT DOES ALL THE WORK. e^2/(4 pi eps0) = [A2 T2]/
 *   [M-1 L-3 T4 A2] = [M L3 T-2], which is an energy times a length,
 *   [M L2 T-2][L]. Every formula in Topics 01 to 04 is that group divided by
 *   either an energy or a length, so the dimensions come out as a length or
 *   an energy without further thought. This is the single most useful check
 *   in the chapter and the source states it too (page 759).
 *
 *   T1  d = 2 Z e^2/(4 pi eps0 K): [M L3 T-2]/[M L2 T-2] = [L]. OK. Z is a
 *       count and dimensionless, so it cannot rescue a wrong power anywhere.
 *       d = Z e^2/(pi eps0 m v^2), the same formula with K = (1/2) m v^2
 *       substituted: [A2 T2]/([M-1 L-3 T4 A2][M][L2 T-2]) = [A2 T2]/
 *       [L-1 T2 A2] = [L]. OK, and this is the form that shows d goes as
 *       1/v^2 rather than 1/v.
 *       U = (1/4 pi eps0) q1 q2/r: [M L3 T-2]/[L] = [M L2 T-2] = J. OK.
 *       K = (1/2) m v^2: [M][L2 T-2] = [M L2 T-2]. OK, same as U, which is
 *       the necessary condition for setting one equal to the other.
 *   T2  b = Z e^2 cot(theta/2)/(4 pi eps0 K): cot is dimensionless, so this
 *       is d/2 times a pure number and is [L]. OK. The two lengths differ by
 *       a number, never by a dimension, which is why they are so easy to
 *       confuse and why only the physics distinguishes them.
 *       N(theta) = N_i n_v t Z^2 e^4/((8 pi eps0)^2 r^2 K^2 sin^4(theta/2)).
 *       Numerator: N_i is a count, n_v is [L-3], t is [L], e^4 is [A4 T4], so
 *       [L-2 A4 T4]. Denominator: [M-2 L-6 T8 A4][L2][M2 L4 T-4] = [T4 A4].
 *       Quotient [L-2]. So N is a count PER UNIT AREA, which is what the
 *       source's own (damaged, out-of-order) caption on page 759 says it is:
 *       number per unit detector area. A formula that came out as a bare
 *       count would have meant a missing r^2.
 *   T3  L = m v r = n h/(2 pi): [M][L T-1][L] = [M L2 T-1], and h is
 *       [M L2 T-1] since J s is [M L2 T-2][T]. OK, and this is the check that
 *       Planck's constant is an angular momentum, which is the whole reason
 *       Bohr could quantise with it.
 *       Coulomb = centripetal: [M L3 T-2]/[L2] = [M L T-2] against
 *       [M][L2 T-2]/[L] = [M L T-2]. OK, both a force.
 *       r_n = eps0 n^2 h^2/(pi m Z e^2): eps0 h^2 = [M-1 L-3 T4 A2]
 *       [M2 L4 T-2] = [M L T2 A2]; m e^2 = [M A2 T2]; quotient [L]. OK.
 *       v_n = Z e^2/(2 eps0 n h): [A2 T2]/([M-1 L-3 T4 A2][M L2 T-1])
 *       = [A2 T2]/[L-1 T3 A2] = [L T-1]. OK.
 *       T_n = 2 pi r_n/v_n: [L]/[L T-1] = [T]. OK.
 *   T4  E_n = -m e^4 Z^2/(8 eps0^2 h^2 n^2): [M][A4 T4]/([M-2 L-6 T8 A4]
 *       [M2 L4 T-2]) = [M A4 T4]/[L-2 T6 A4] = [M L2 T-2] = J. OK. Drop one
 *       power of eps0 and you get [M-1 L-4 T2 A2] times an energy, which is
 *       nothing at all, so the squared eps0 is not decoration.
 *       KE = -E_n and PE = 2 E_n: both energies, and the identity
 *       KE + PE = E_n is then an addition of like terms. OK.
 *       lambda = h/(m v): [M L2 T-1]/[M L T-1] = [L]. OK.
 *       2 pi r_n = n lambda: [L] = [L]. OK, and n must be a pure number for
 *       this to hold, which is the content of the standing-wave argument.
 *   T5  1/lambda = R Z^2 (1/n_f^2 - 1/n_i^2): the bracket is a pure number,
 *       so [R] = [L-1] and the left side is [L-1]. OK.
 *       R = m e^4/(8 eps0^2 h^3 c): this is E_1/(h c), so [M L2 T-2]/
 *       ([M L2 T-1][L T-1]) = [M L2 T-2]/[M L3 T-2] = [L-1]. OK, and it is
 *       the same clump of constants as E_n with one more h and one c, which
 *       is exactly what dividing an energy by h c does.
 *       E = h nu = h c/lambda: [M L2 T-1][T-1] = [M L2 T-2], and
 *       [M L2 T-1][L T-1]/[L] = [M L2 T-2]. OK, both a joule.
 *       lambda_min = n_f^2/(R Z^2): 1/[L-1] = [L]. OK.
 *       N = n(n - 1)/2: dimensionless, as a count must be. OK.
 *       Ionisation potential V = E_ion/e: [M L2 T-2]/[A T] = [M L2 T-3 A-1]
 *       = volt. OK, and this is why 13.6 eV and 13.6 V are the same statement
 *       written in two units, which Topic 05's mistakes item leans on.
 *
 * THE TWO WORKHOLD NUMBERS, DERIVED RATHER THAN QUOTED, because a student who
 * has only been told 13.6 and 0.53 cannot check anything.
 *   a0 = eps0 h^2/(pi m e^2)
 *      = (8.854 x 10^-12)(6.63 x 10^-34)^2/(pi x 9.11 x 10^-31 x
 *        (1.6 x 10^-19)^2)
 *      = (8.854 x 10^-12)(4.3957 x 10^-67)/(pi x 2.3322 x 10^-68)
 *      = 3.8920 x 10^-78 / 7.3268 x 10^-68
 *      = 5.312 x 10^-11 m = 0.531 Angstrom.
 *   Quoted everywhere as 0.529 Angstrom, and with CODATA values
 *   (h = 6.62607 x 10^-34, e = 1.602177 x 10^-19, eps0 = 8.85419 x 10^-12,
 *   m = 9.10938 x 10^-31) the same expression returns 5.29177 x 10^-11 m,
 *   i.e. 0.52918 Angstrom. The 0.4 per cent gap is entirely the rounding of e
 *   to 1.6 x 10^-19. Topic 03 uses 0.53 Angstrom as the two-figure anchor and
 *   0.529 where the source's own examples do.
 *   E_1 = m e^4/(8 eps0^2 h^2), most easily as e^2/(8 pi eps0 a0):
 *      = (1.6 x 10^-19)^2/(8 pi x 8.854 x 10^-12 x 5.29 x 10^-11)
 *      = 2.56 x 10^-38/1.17719 x 10^-20
 *      = 2.1746 x 10^-18 J = 13.59 eV.
 *   With CODATA values the same expression returns 13.6057 eV. So the
 *   ionisation energy of hydrogen is 13.6 eV to three figures, derived, not
 *   asserted. Topic 04's deriv closes on this arithmetic.
 *   R = E_1/(h c) = 2.1793 x 10^-18/(6.62607 x 10^-34 x 2.99792 x 10^8)
 *     = 2.1793 x 10^-18/1.98645 x 10^-25 = 1.0973 x 10^7 m^-1, which is the
 *   printed Rydberg constant to four figures. Bohr's model does not fit R; it
 *   PREDICTS it, and Topic 05's deriv ends on that sentence.
 *   h c = (6.62607 x 10^-34)(2.99792 x 10^8)/(1.602177 x 10^-19) x 10^9
 *       = 1239.8 eV nm, so the 1240 the whole chapter runs on is accurate to
 *   0.02 per cent. With the rounded classroom constants (h = 6.63 x 10^-34,
 *   c = 3 x 10^8, e = 1.6 x 10^-19) it comes out at 1243 eV nm, which is
 *   0.25 per cent high; that is why every wavelength below computed the
 *   1240/E way lands 0.1 to 0.2 nm above the same wavelength computed the
 *   Rydberg way (656.47 against 656.34 for H-alpha, 121.57 against 121.54 for
 *   Lyman-alpha). Both are quoted to three figures, where they agree.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   H-ALPHA IS 656 nm AND VISIBLY RED. Computed two ways and both agree:
 *   1/lambda = R(1/4 - 1/9) = 1.097 x 10^7 x 0.13889 = 1.5236 x 10^6 m^-1,
 *   lambda = 656.3 nm; and lambda = 1240/1.889 = 656.5 nm. 656 nm sits at the
 *   red end of the visible band, which is why the Balmer series is the one
 *   anybody could see, and Topic 05's spectrum figure places it there.
 *   THE LYMAN SERIES IS ULTRAVIOLET AND THE PASCHEN INFRARED. Lyman runs
 *   121.6 down to 91.2 nm, entirely below the 400 nm violet edge; Paschen
 *   runs 1875 down to 820 nm, entirely above the 700 nm red edge. Balmer runs
 *   656.3 down to 364.6 nm, so its first four lines are visible and its tail
 *   crosses into the ultraviolet at the limit, which the convergence figure
 *   in Topic 05 shows rather than states.
 *   IONISATION ENERGY 13.6 eV, derived above, and the first excitation energy
 *   10.2 eV = 13.6 x (3/4). A hydrogen atom in a room-temperature gas has
 *   about 0.04 eV of thermal energy, three hundred times too little, which is
 *   why hydrogen is transparent to visible light and has to be excited in a
 *   discharge tube to glow at all.
 *   THE n = 1 ORBIT IS 0.53 Angstrom, derived above, and an atom is about
 *   1 Angstrom across, so the Bohr radius is the right size for an atom by
 *   construction rather than by luck. The n = 4 orbit is sixteen times
 *   larger, 8.5 Angstrom, which is why a highly excited atom is enormous.
 *   ORBITAL SPEED v_1 = 2.19 x 10^6 m/s = c/137, so a hydrogen electron is
 *   0.7 per cent of the speed of light and the non-relativistic treatment is
 *   safe. It stops being safe for large Z, since v goes as Z: at Z = 79 the
 *   ratio is 79/137, and that is where Bohr's arithmetic genuinely fails.
 *   NUCLEAR SIZE. The closest approach of a 7.7 MeV alpha to gold is
 *   3.0 x 10^-14 m, and the gold nucleus is about 7 x 10^-15 m, so the alpha
 *   turns round about four radii short of touching. That is why the
 *   experiment sets an UPPER BOUND on the nuclear radius and not the radius
 *   itself, and Topic 01's practice 4 makes a student compute the margin.
 *
 * LIMITING CASES, used where they teach something.
 *   E_n AND r_n AS n GROWS. E_n = -13.6/n^2 goes to zero from below and r_n
 *   = 0.53 n^2 goes to infinity, so a very highly excited electron is very
 *   far out and very weakly held. The GAPS shrink as 1/n^2 - 1/(n+1)^2, which
 *   goes as 2/n^3, so the levels crowd, and that crowding is the whole reason
 *   a spectral series converges to a limit instead of running on forever.
 *   Topic 04's levels figure draws the crowding and Topic 05's draws what it
 *   does to the lines.
 *   THE SERIES LIMIT IS THE IONISATION EDGE SEEN FROM ABOVE. n_i to infinity
 *   gives 1/lambda_min = R Z^2/n_f^2, and the energy of that photon,
 *   13.6 Z^2/n_f^2 eV, is exactly the binding energy of the level n_f. So the
 *   Lyman limit at 91.2 nm carries 13.6 eV, the Balmer limit at 364.6 nm
 *   carries 3.40 eV, and beyond each limit lies a CONTINUUM rather than more
 *   lines, because the electron is then free and its energy is no longer
 *   quantised. Checked: 1240/91.2 = 13.60 eV and 1240/364.6 = 3.40 eV, which
 *   is E_1 and E_2 exactly.
 *   b = 0 AND b TO INFINITY. The impact parameter formula
 *   b = (d/2) cot(theta/2) sends theta to 180° as b goes to zero and theta to
 *   0° as b grows, so the two extremes of the scattering geometry are the
 *   head-on rebound and the undeviated pass. Topic 02's figure draws both
 *   ends and its MCQ is the pairing read backwards.
 *   THE SAME ACCELERATING POTENTIAL CANCELS THE PROJECTILE CHARGE. With
 *   K = qV, d = q Z e/(4 pi eps0 q V) = Z e/(4 pi eps0 V), independent of q
 *   entirely. An alpha carries twice the charge and therefore feels twice the
 *   push, and gains twice the energy from the same volts, and the two effects
 *   cancel exactly. Topic 01's Example 2 is this, and it is the single most
 *   common trap in the chapter.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-12-11-dual-nature.ts, AND THE ANSWER CHANGED MID-WRITE, so both
 *     checks are recorded. On the FIRST check, before Topic 01 was written,
 *     content/textbooks held phy-12-01 through phy-12-08 and nothing beyond:
 *     Chapter 11 did not exist and there was nothing to quote. On the SECOND
 *     check, after Topic 05 was finished, phy-12-09, 10 and 11 had all
 *     landed, and phy-12-11-dual-nature.ts is complete at 2,119 lines with
 *     four topics. Everything below that had been written as an inline
 *     prior-chapter statement was then checked against it, and all three
 *     agree, so nothing had to be rewritten:
 *       * h c = 1240 eV nm. Its header derives the same constant the same
 *         way and reaches the same two numbers this file's header does: 1243
 *         with the rounded classroom constants, 1239.8 with the unrounded
 *         ones, so 1240 is the true value and 1243 the rounding. Topic 05's
 *         photon-energy `formula` note gives the derivation and names the
 *         chapter.
 *       * The photon, E = h nu, and light being emitted and absorbed in
 *         lumps. Its Topic 01 `def` on a photon is the fuller statement;
 *         Topic 04's `def` on a stationary state and Topic 05's opening here
 *         use it and both name Chapter 11.
 *       * The de Broglie relation lambda = h/p. Its Topic 04 owns it.
 *     ONE DELIBERATE OVERLAP, recorded rather than removed. That chapter's
 *     Topic 04 also carries a standing-wave `deriv` taking 2 pi r = n lambda
 *     to m v r = n h/2 pi, and a Figure 11.7 with the fitting and
 *     non-fitting waves as two chips. Its own header asks Atoms to quote
 *     both rather than redraw the orbit. Two things overrule that here.
 *     First, the duplication is the SOURCE BOOK's: pages 768 and 770 of the
 *     Class 12 reference put the de Broglie justification inside Chapter 12
 *     Subtopic 02a, and Figure 12.7 is one of the ten figures Chapter 12
 *     names for itself, so a chapter that omitted it would be missing a
 *     named figure. Second, the two treatments do different work at the end.
 *     Chapter 11's stops at the algebra, because it has no orbit radii to
 *     put in. This one closes on the arithmetic only Chapter 12 can do: for
 *     n = 2 of hydrogen, v = 1.095 x 10^6 m/s gives lambda = 6.65 Angstrom
 *     while 2 pi r_2 = 2 pi (2.116) = 13.29 Angstrom, and 13.29/6.65 is 2.00
 *     exactly. Topic 04's `p` introducing de Broglie says outright that the
 *     relation and the picture belong to Chapter 11 and that the check is
 *     what this chapter adds.
 *     Nothing else below depends on Chapter 11, and no block assumes a
 *     student has read it.
 *   - phy-12-01-electric-charges-fields.ts and
 *     phy-12-02-potential-capacitance.ts: Coulomb's law, 1/(4 pi eps0)
 *     = 9.0 x 10^9 N m^2 C^-2, and the electrostatic potential energy of two
 *     point charges U = q1 q2/(4 pi eps0 r) with its zero at infinite
 *     separation. Topic 01's derivation of the closest approach uses all
 *     three and re-derives none of them; the `deriv` step names the chapter
 *     it is borrowing from. Both files exist and are registered.
 *   - phy-11-05-work-energy-power.ts: conservation of mechanical energy for a
 *     conservative force. Topic 01's derivation is one application of it.
 *   - phy-11-06-rotational-motion.ts: angular momentum L = m v r for a
 *     particle on a circle. Topic 03's second postulate quantises exactly
 *     that quantity and does not redefine it.
 *   - phy-11-04-laws-of-motion.ts and phy-11-03-motion-plane.ts: the
 *     centripetal requirement m v^2/r for uniform circular motion. Topic 03's
 *     Step 1 is that requirement with the Coulomb attraction supplying it.
 *   - Chapter 13, Nuclei, is pre-loaded rather than quoted, since it does not
 *     exist yet either. See NOTES at the end of this header for what it can
 *     take from here.
 *
 * TWELVE FIGURES: 10 DRAWN OF THE 10 THE SOURCE NAMES, PLUS 2 DESIGNED HERE.
 * The source names exactly ten, on its three "CHAPTER 12 FIGURES" pages (766,
 * 775 and 777) and page 786, and every one of them is drawn below.
 *   12.1 (page 766) the Geiger-Marsden apparatus, Topic 01, two chips: the
 *     beam line, then the three fates with their counts. `plot` with
 *     axes "none", the collimator as two hatched rectangles with the slit
 *     between them, the foil as a thin filled rectangle.
 *   12.2 (page 766) three alpha trajectories with b, d and theta, Topic 02,
 *     THREE CHIPS rather than three paths in one frame. Each path is a `pts`
 *     curve integrated from the actual Coulomb equations of motion rather
 *     than sketched, with d_0 = 0.9 plot units, so the b = 1.6 path really
 *     does bend by about 30° and the b = 0.45 path really does turn through
 *     about 90°. The theta arc sits at the point where the outgoing tangent
 *     meets the incoming line, computed from the integration, not guessed.
 *   12.3 (page 766) the energy bar chart at three instants, Topic 01, three
 *     chips: r to infinity, closing in, r = d. Two bars and a dashed total.
 *   12.4 (page 766) the 1/sin^4(theta/2) counting law against theta on a log
 *     axis, Topic 02, two chips: the law, then Geiger's counts on it.
 *   12.5 (page 775) the hydrogen energy ladder, Topic 04, `levels` with
 *     scale "inverseSquare", two chips: the labelled rungs, then the same
 *     ladder with n = 5 and n = 6 added so the crowding is visible.
 *   12.6 (page 777) the force-balance sketch, Topic 03, one chip. The orbit
 *     is a `circle` curve, so the aspect is set to 0.775 to make the two axes
 *     carry the same pixels per unit and keep it round.
 *   12.7 (page 777) the de Broglie standing wave, Topic 04, two chips: four
 *     wavelengths closing on themselves, then a non-integer wave that does
 *     not. Both are `pts` curves of r = 1.3 + 0.22 sin(k phi) converted to
 *     Cartesian, so the closure is arithmetic rather than draughtsmanship.
 *   12.8 (page 786) the energy ladder with the series marked, Topic 05,
 *     FOUR CHIPS, and THE PANEL RULE IS THE REASON. Lyman, Balmer and
 *     Paschen each light up on the SAME ladder, one at a time, with a fourth
 *     chip showing all three at once. Three side-by-side panels at 316pt
 *     would be 100pt each and unreadable; three chips on one ladder are
 *     full width every time and make the point better, because the rungs do
 *     not move between chips and a student watches the arrows change
 *     destination.
 *   12.9 (page 786) emission against absorption, Topic 05, three chips:
 *     bright lines, dark lines, then the two strips stacked so the alignment
 *     is visible. Stacked, not side by side, for the same reason.
 *   12.10 (page 786) the Balmer lines converging on the series limit, Topic
 *     05, `numberline`, two chips: the four visible lines, then the whole
 *     series piling up at 364.6 nm.
 * The two designed here, and why each earns its space:
 *   T1 Thomson's atom against Rutherford's, two chips, one alpha path drawn
 *     through each. The source spends two paragraphs on why a smeared charge
 *     cannot turn an alpha round and never draws the comparison, and the
 *     comparison IS the argument: the same alpha, the same aim, two atoms,
 *     two fates.
 *   T3 the first three orbits drawn to scale as semicircular `arcs` at radii
 *     1, 4 and 9. The n^2 law is stated four times in the source and never
 *     shown, and 1 : 4 : 9 is startling when you see it. Semicircles rather
 *     than full circles because arcs take their radius from the x scale and
 *     are drawn in screen space, so they stay round whatever the axes do, and
 *     a half picture fits the card where a full one would need a square.
 * RENDERER FACTS HONOURED, each one live while drawing this:
 *   - `levels` places a jump at 0.28 + (i mod 5) x 0.14 of the rail width and
 *     hangs its label 12px to the right at the jump's own midpoint. At 308px
 *     the rail runs x = 46 to 250, so consecutive jumps are 28.6px apart and
 *     a label longer than about five characters WILL reach its neighbour.
 *     Every `levels` frame below therefore labels at most two of its jumps,
 *     the first and the series limit, whose midpoints are far apart in y as
 *     well as x. Computed by hand against figures.tsx, since check-figures
 *     does not inspect `levels`.
 *   - `flow` box text is plain SVG with no markup and must fit its row. No
 *     `flow` figure appears below: nothing in this chapter is a box diagram.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, so the two lead
 *     collimator blocks in Topic 01 are axis-aligned rectangles and nothing
 *     else is hatched anywhere.
 *   - A point label defaults to north-east. Topic 05's numberline puts the
 *     series-limit label at "se" because the crowd of converging lines lies
 *     to its north-east and would sit under it.
 *   - A `circle` curve is round only when both axes carry the same pixels per
 *     unit. Two frames below use one: Topic 03's Bohr orbit (aspect 0.775 on
 *     a 4.4 by 3.4 window) and Topic 04's standing wave (aspect 0.735 on a
 *     5.2 by 3.8 window). Both were solved from the renderer's own arithmetic
 *     and both come out at a skew of 1.00.
 *   - Two collinear strokes read as one line. Topic 02's head-on frame draws
 *     the incoming and rebounding paths offset by 0.4 plot units, about 12px,
 *     rather than on top of each other, and says so in the caption.
 *   - A horizontal arrow's at "above" label lands BELOW when the arrow points
 *     left. Topic 03's radius segment points left for exactly that reason:
 *     its label then sits below the segment and clears the nucleus glyph.
 *   - check-figures inspects only `plot`, `numberline` and `flow`, so all six
 *     `levels` frames were checked by a throwaway script that mirrors
 *     EnergyLevels in figures.tsx exactly: same `place`, same lo/hi/span,
 *     same x0 = 46 and x1 = 250, same 16px pads, same jump stride, same
 *     label offsets and font sizes. At aspect 1.05 the height is 323px and
 *     the rows land at y = 307, 89, 48, 34, 28, 24 and 16 for n = 1 to 6 and
 *     the continuum. No label pair overlaps in any frame and nothing runs
 *     past x = 308. That the n = 4, 5 and 6 lines sit 6px and 4px apart is
 *     not a defect, it is the crowding the figure exists to show, which is
 *     why those three rows carry no labels.
 * WHAT `levels` LACKS, recorded for whoever extends it. Four things, none of
 * which blocked this chapter but three of which shaped it:
 *   1. A jump's horizontal position is fixed at 0.28 + (i mod 5) x 0.14 of
 *      the rail, so an author cannot place one. Five jumps is the hard
 *      ceiling before they land on top of each other, and two jumps whose
 *      midpoints are close in y will collide in their labels well before
 *      that. Figure 12.8 labels only two jumps per frame for this reason.
 *   2. `at` is the quantum number, not the energy, so a row can only be put
 *      where -1/n^2 puts it. The continuum at E = 0 is therefore written
 *      `at: 1000`, which places it at -1 x 10^-6 and is visually exact but
 *      is a workaround rather than an expression of the physics.
 *   3. A jump label always sits at the midpoint, 12px to the right. There is
 *      no `at` control of the kind `arrows` and `segments` both have, so a
 *      label cannot be slid along its own jump to dodge a neighbour.
 *   4. There is no way to mark the CONTINUUM above the top row. `bands` fills
 *      between two rows with an amber wash, which reads as a highlighted
 *      region rather than as "no levels here, any energy allowed". Topic
 *      05's caption says it in words instead.
 * No new figure vocabulary is requested.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12Atoms: Chapter = {
  "chapter": "12",
  "title": "Atoms",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Alpha Scattering and the Nuclear Atom",
      "chip": "01 THE FOIL",
      "kalam": "roll something hard at it and see what comes back",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Alpha Scattering and the Nuclear Atom</b><br>A near-guaranteed scorer. CBSE Boards almost always carry a 2 to 3 mark question on the experiment, its observations, or what each observation proves. NEET asks one conceptual MCQ, usually on the distance of closest approach or on what undeviated passage proves. JEE Main likes the <i>d</i> proportional to <i>Z</i>/<i>K</i> numericals.<br><br><b>02 · Impact Parameter, the Counting Law, and Why the Model Failed</b><br>JEE Main loves the impact parameter and the 1/sin<sup>4</sup>(θ/2) ratio. NEET asks the <i>b</i> against θ pairing as a one-liner. CBSE Boards ask for the two drawbacks of Rutherford's model, worth 2 marks, almost every year. JEE Advanced layers in nuclear recoil or combines closest approach with momentum conservation.<br><br><b>03 · Bohr's Postulates, Orbit Radius and Speed</b><br>The highest-yield topic of the chapter. CBSE Boards reliably ask for the three postulates or the derivation of the radius, worth 3 to 5 marks. NEET asks one or two MCQs every year on the <i>n</i><sup>2</sup>/<i>Z</i> and <i>Z</i>/<i>n</i> scalings. JEE Main leans on hydrogenic-ion numericals.<br><br><b>04 · Energy Levels, Ionisation and the Standing Wave</b><br>CBSE Boards ask for the energy expression or the meaning of the negative sign, 2 to 3 marks. NEET asks the level-spacing question and the He<sup>+</sup> energy every other year. JEE Main asks excitation against ionisation. JEE Advanced combines Bohr with de Broglie or with exotic atoms.<br><br><b>05 · Atomic Spectra and the Hydrogen Spectral Series</b><br>The single most question-dense topic in the chapter. CBSE Boards ask the series names and regions or a Rydberg calculation, 2 to 3 marks, almost every year. NEET reliably asks one or two MCQs on series regions, series limits or line counting. JEE Main loves Rydberg numericals and the <i>n</i>(<i>n</i> − 1)/2 count."
        },
        {
          "t": "p",
          "html": "Here is a problem with no obvious way in. You walk into a completely dark room and you are told that somewhere inside it hangs a single small, very heavy iron ball. You cannot see it, you cannot feel around for it, and you are not allowed to touch the walls. Find out how big it is and how heavy.<br><br>There is a trick. Stand at the doorway and roll dozens of carrom strikers across the floor in a wide flat beam. Most of them will sail straight across and clatter into the far wall: those met nothing. Every so often one will clip the hidden ball and skid off at an angle. And once in a very long while, a striker aimed almost dead centre will smack the ball head-on and come <b>straight back at you</b>.<br><br>From the tally alone you learn two things. The ball is <b>tiny</b>, because hits are rare, so it occupies almost none of the floor. And it is <b>heavy and hard</b>, because it can throw a striker back the way it came instead of being knocked aside itself."
        },
        {
          "t": "p",
          "html": "That is almost exactly what Hans Geiger and Ernest Marsden did in 1911, on Ernest Rutherford's suggestion. Their strikers were fast <b>alpha particles</b>, helium nuclei of charge +2<i>e</i>, fired at a wafer-thin sheet of gold foil. Their dark room was the gold atom, whose insides nobody could see.<br><br>The picture everybody accepted at the time was <b>Thomson's plum-pudding model</b>: the atom as a soft sphere of positive charge with electrons sprinkled through it like nuts through a barfi. If that were true, the positive charge would be smeared thinly over the whole atom, the electric field anywhere inside would be weak, and an alpha ploughing through should barely be nudged. A few degrees at most. Like rolling a cricket ball through mist."
        },
        {
          "t": "think",
          "html": "a thin smear of charge can never turn a fast, heavy alpha particle around. to reverse it you need a <b>concentrated, intense</b> electric field, and that means all the positive charge has to be packed into a minuscule volume rather than spread out. so the moment even one alpha comes back, the pudding is dead."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.1 · THE APPARATUS, AND THE THREE FATES",
          "chips": ["the beam line", "what came back"],
          "captions": [
            "A radioactive alpha source sits inside a lead block cut with a narrow slit, so what leaves is a thin parallel beam rather than a spray. The beam crosses a vacuum chamber and strikes a gold foil only a few thousand atoms thick. Beyond the foil, a zinc sulphide screen with a microscope behind it can be swung around the foil on an arm, and every alpha that lands on it makes a tiny flash a human observer counts by eye. The angle theta is measured from the original beam direction, and the whole apparatus is evacuated so the alphas are not stopped by air.",
            "The same foil, with the counting removed and the three outcomes drawn. Most alphas carry straight on as if the foil were not there. A small fraction come off at a noticeable angle. And about one in eight thousand comes back on the near side, deflected by more than 90 degrees. Rutherford said it was as astonishing as firing a shell at a sheet of tissue paper and having it rebound into your face. The three fates are one experiment, and each of them proves a different thing."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [-3, 3],
              "axes": "none",
              "aspect": 0.64,
              "polys": [
                { "pts": [[0.5, 0.35], [2.0, 0.35], [2.0, 1.1], [0.5, 1.1]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[0.5, -1.1], [2.0, -1.1], [2.0, -0.35], [0.5, -0.35]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[4.7, -1.8], [4.85, -1.8], [4.85, 1.8], [4.7, 1.8]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "marks": [
                { "x": 1.0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": 8.15, "y": 2.55, "glyph": "square", "label": "ZnS" }
              ],
              "arrows": [
                { "from": [2.1, 0], "to": [4.55, 0], "tone": "amber", "label": "alpha beam", "at": "mid" },
                { "from": [4.9, 0], "to": [8.6, 0], "tone": "soft" },
                { "from": [4.9, 0.1], "to": [7.9, 2.4], "tone": "amber" },
                { "from": [4.7, -0.1], "to": [2.6, -2.1], "tone": "amber" }
              ],
              "arcs": [
                { "at": [4.9, 0], "r": 1.6, "from": 0, "to": 38, "label": "θ", "tone": "amber" }
              ],
              "labels": [
                { "x": 1.55, "y": 1.75, "text": "lead collimator", "soft": true },
                { "x": 4.775, "y": -2.35, "text": "gold foil" }
              ]
            },
            {
              "x": [0, 10],
              "y": [-3, 3],
              "axes": "none",
              "aspect": 0.64,
              "polys": [
                { "pts": [[4.7, -2.0], [4.85, -2.0], [4.85, 2.0], [4.7, 2.0]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "arrows": [
                { "from": [1.2, 0], "to": [4.55, 0], "label": "the beam", "at": "mid" },
                { "from": [4.9, 0], "to": [8.8, 0], "tone": "soft", "label": "most", "at": "end" },
                { "from": [4.9, 0.06], "to": [8.4, 1.25], "tone": "amber", "label": "few", "at": "end" },
                { "from": [4.7, -0.06], "to": [1.6, -1.7], "tone": "amber", "label": "1 in 8000", "at": "end" }
              ],
              "labels": [
                { "x": 4.775, "y": -2.4, "text": "gold foil" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "What Geiger and Marsden actually saw broke the model. <b>Most</b> alphas did pass almost straight through, which is what the mist picture predicts. But a small fraction came off at large angles, and about <b>1 in 8000</b> was turned back through more than 90°, some of them almost straight back along the beam.<br><br>Read the three outcomes one at a time, because each proves something different and exam questions live in that distinction. The straight-through majority says the atom is <b>mostly empty space</b>. The occasional large deflection says there is something in there with a <b>strong, concentrated positive charge</b>. And the rare rebound says that something is <b>massive</b>, because a light target cannot reverse a heavy projectile any more than a ping-pong ball can reverse a cricket ball."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TWO ATOMS, ONE ALPHA, TWO FATES",
          "chips": ["Thomson's pudding", "Rutherford's nucleus"],
          "captions": [
            "Thomson's atom. The positive charge is spread evenly through the whole sphere and the electrons sit in it like raisins. Because the charge is smeared, the electric field anywhere inside is weak, and an alpha crossing it feels a gentle push that is partly cancelled by the charge on the far side. The path bends by a fraction of a degree and no more. This model predicts that nothing ever comes back, and that prediction is what the experiment killed.",
            "Rutherford's atom, drawn at the same scale. All the positive charge and almost all the mass now sit in a nucleus at the centre, and the atom's outline is only where the electrons roam. An alpha aimed well away from the centre passes through untouched, which is the straight-through majority. An alpha aimed near the centre meets a field thousands of times stronger than anything the pudding could offer, and can be turned right round. Same alpha, same aim, two atoms, two fates."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-2.2, 2.2],
              "axes": "none",
              "aspect": 0.72,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.6, "soft": true }
              ],
              "marks": [
                { "x": -0.7, "y": 0.6, "glyph": "minus", "tone": "soft" },
                { "x": 0.8, "y": 0.5, "glyph": "minus", "tone": "soft" },
                { "x": 0.0, "y": -0.9, "glyph": "minus", "tone": "soft" },
                { "x": -0.6, "y": -0.4, "glyph": "minus", "tone": "soft" },
                { "x": 0.9, "y": -0.35, "glyph": "minus", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-2.9, 0.95], "to": [2.9, 0.78], "tone": "amber", "label": "barely bent", "at": "end" }
              ],
              "labels": [
                { "x": 0, "y": 1.92, "text": "charge smeared" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-2.2, 2.2],
              "axes": "none",
              "aspect": 0.72,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.6, "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" },
                { "x": -1.25, "y": 0.95, "glyph": "minus", "tone": "soft" },
                { "x": 1.15, "y": -1.0, "glyph": "minus", "tone": "soft" }
              ],
              "arrows": [
                { "from": [-2.9, -1.55], "to": [2.9, -1.55], "tone": "soft", "label": "misses", "at": "end" },
                { "from": [-2.9, 0.12], "to": [-0.55, 0.12], "tone": "amber" },
                { "from": [-0.55, 0.52], "to": [-2.9, 0.52], "tone": "amber", "label": "thrown back", "at": "end" }
              ],
              "labels": [
                { "x": 0, "y": 1.92, "text": "charge in a speck" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Nucleus",
          "html": "The tiny, dense central core of an atom, carrying the whole positive charge +<i>Ze</i> and essentially all the mass. Rutherford put its size at roughly 10<sup>−15</sup> m across, against about 10<sup>−10</sup> m for the whole atom, from the <b>frequency</b> of large-angle scattering: the rarer the big deflections, the smaller the target has to be."
        },
        {
          "t": "p",
          "html": "Take those two numbers seriously for a second, because the ratio is the thing worth remembering. The nucleus is about <b>one ten-thousandth</b> the width of the atom. If an atom were blown up to the size of a cricket stadium, the nucleus would be a grain of rice at the centre of the pitch, and everything from there to the top row of seats would be empty.<br><br>That is why most alphas felt nothing at all. They were not passing through matter in any everyday sense. They were crossing a stadium and almost never hitting the grain of rice."
        },
        {
          "t": "defgrid",
          "title": "Three observations, three conclusions",
          "rows": [
            { "k": "Most alphas undeviated", "v": "The atom is mostly empty space. Nothing was in the way." },
            { "k": "A few deflected by large angles", "v": "There is a concentrated positive charge, not a smear." },
            { "k": "About 1 in 8000 turned back", "v": "That charge sits on something heavy: the nucleus." },
            { "k": "Deflection grows with foil Z", "v": "The scatterer is the nucleus, whose charge is +Ze." },
            { "k": "No alpha is deflected by electrons", "v": "An electron is about 7300 times lighter than an alpha." }
          ]
        },
        {
          "t": "think",
          "html": "a swarm of mosquitoes cannot deflect a thrown stone, however many of them there are. the atom's electrons are the mosquitoes here: <b>all</b> the bending an alpha suffers is the nucleus's doing, and that is worth saying out loud because a favourite MCQ option blames the electrons."
        },
        {
          "t": "p",
          "html": "Now make the picture quantitative. Fire an alpha <b>straight at</b> a nucleus, dead centre. The two are both positive, so they repel, and the closer the alpha gets the harder it is pushed back. It slows, slows further, and at some separation it stops dead for an instant before being flung back the way it came.<br><br>That separation has a name: the <b>distance of closest approach</b>, written <i>d</i>. It is the natural ruler for this experiment, because whatever <i>d</i> comes out to be, the nucleus must be smaller than that. The alpha never got any nearer, so it never found out what was inside."
        },
        {
          "t": "formula",
          "kicker": "DISTANCE OF CLOSEST APPROACH",
          "tag": "HEAD-ON, STATIONARY NUCLEUS",
          "main": "<i>d</i> = 2<i>Ze</i><sup>2</sup> / 4πε<sub>0</sub><i>K</i>",
          "legend": [
            "<i>d</i> = minimum centre-to-centre separation reached, in metres (m)",
            "<i>Z</i> = atomic number of the target nucleus, a pure number with no unit",
            "<i>e</i> = 1.6 × 10<sup>−19</sup> coulomb (C); the alpha carries 2<i>e</i> and the nucleus <i>Ze</i>",
            "<i>K</i> = kinetic energy of the incoming alpha, in joules (J), equal to ½<i>mv</i><sup>2</sup>",
            "1/4πε<sub>0</sub> = 9.0 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>, Coulomb's constant"
          ],
          "note": "Read the three proportionalities straight off it: <i>d</i> grows with <i>Z</i>, falls as 1/<i>K</i>, and since <i>K</i> = ½<i>mv</i><sup>2</sup>, falls as 1/<i>v</i><sup>2</sup>. Substituting <i>K</i> gives the equivalent form <i>d</i> = <i>Ze</i><sup>2</sup>/πε<sub>0</sub><i>mv</i><sup>2</sup>, which is the one to use when a question gives you a speed instead of an energy."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CLOSEST APPROACH FROM ENERGY CONSERVATION",
          "steps": [
            {
              "eq": "far away: all energy is kinetic, <i>K</i>, and the potential energy is zero",
              "why": "The zero of electrostatic potential energy sits at infinite separation, the convention from Electrostatic Potential and Capacitance. Note what this convention does elsewhere: for two charges that ATTRACT, every bound state then comes out NEGATIVE, which is the sign you will meet on every energy level from Topic 04 onward. Here the two charges repel, so the potential energy is positive and the alpha is never bound at all."
            },
            {
              "eq": "at closest approach: the alpha has momentarily stopped, so the kinetic energy is zero",
              "why": "\"Closest approach\" is precisely the instant the velocity reverses, and a velocity that changes sign passes through zero. This is what turns a hard two-body problem into one line of algebra: it lets you equate a pure kinetic state to a pure potential state and skip everything in between."
            },
            {
              "eq": "the Coulomb force is conservative, so <i>K</i> + 0 = 0 + (1/4πε<sub>0</sub>)(2<i>e</i>)(<i>Ze</i>)/<i>d</i>",
              "why": "Total mechanical energy is conserved for a conservative force, from Work, Energy and Power. The potential energy of two point charges <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> a distance <i>r</i> apart is <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/4πε<sub>0</sub><i>r</i>, from Electric Charges and Fields, and here the charges are 2<i>e</i> and <i>Ze</i>."
            },
            {
              "eq": "rearranging, <i>d</i> = 2<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i>",
              "why": "One step of algebra, and every symbol in it is something a question hands you. Check the dimensions before trusting it: <i>e</i><sup>2</sup>/4πε<sub>0</sub> has the dimensions of an energy times a length, so dividing by an energy leaves a length. That check catches a dropped <i>K</i> instantly."
            },
            {
              "eq": "for a 7.7 MeV alpha on gold (<i>Z</i> = 79): <i>d</i> ≈ 3.0 × 10<sup>−14</sup> m",
              "why": "7.7 MeV was about the most energetic alpha available from a natural source in 1911, so this is the closest anyone could then get. Since the alpha clearly turns round without ever penetrating, this sets an UPPER BOUND on the nuclear radius, not the radius itself. The real gold nucleus is about 7 × 10<sup>−15</sup> m, four times smaller, which is why higher-energy beams were needed later to measure a nucleus rather than merely bound it."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.3 · WHERE THE ENERGY GOES",
          "chips": ["far away", "closing in", "at r = d"],
          "captions": [
            "The alpha is still far from the nucleus. The separation is effectively infinite, the electrostatic potential energy is zero by the convention we chose, and every joule the alpha has is kinetic. The dashed line at the top is the total energy K, and it will not move for the rest of this figure: that fixed height IS the conservation law.",
            "The alpha has driven in against the repulsion. It has been slowing all the way, so the kinetic bar has dropped, and every joule it lost has appeared in the potential bar. Nothing has been created or destroyed; the two bars always add up to the dashed line. At this instant the alpha is still moving inward, just more slowly than before.",
            "Closest approach. The alpha has stopped, so the kinetic bar has fallen to nothing and the whole of K now sits in the potential bar. Setting the full-height potential bar equal to the original full-height kinetic bar is exactly the equation the derivation solves, and reading it off the picture is why the derivation is one line. An instant later the alpha is flung back out and the two bars trade places again in reverse."
          ],
          "frames": [
            {
              "x": [0, 4],
              "y": [-0.22, 1.25],
              "axes": "none",
              "aspect": 0.62,
              "polys": [
                { "pts": [[0.55, 0], [1.45, 0], [1.45, 1], [0.55, 1]], "close": true, "fill": "wash", "tone": "amber", "label": "K" },
                { "pts": [[2.55, 0], [3.45, 0], [3.45, 0.012], [2.55, 0.012]], "close": true, "fill": "wash", "tone": "ink", "label": "0" }
              ],
              "segments": [
                { "from": [0.15, 0], "to": [3.85, 0], "soft": true },
                { "from": [0.2, 1], "to": [3.8, 1], "dash": true, "soft": true, "label": "total = K", "at": "start" }
              ],
              "labels": [
                { "x": 1.0, "y": -0.15, "text": "kinetic" },
                { "x": 3.0, "y": -0.15, "text": "potential" }
              ]
            },
            {
              "x": [0, 4],
              "y": [-0.22, 1.25],
              "axes": "none",
              "aspect": 0.62,
              "polys": [
                { "pts": [[0.55, 0], [1.45, 0], [1.45, 0.4], [0.55, 0.4]], "close": true, "fill": "wash", "tone": "amber", "label": "0.4K" },
                { "pts": [[2.55, 0], [3.45, 0], [3.45, 0.6], [2.55, 0.6]], "close": true, "fill": "wash", "tone": "ink", "label": "0.6K" }
              ],
              "segments": [
                { "from": [0.15, 0], "to": [3.85, 0], "soft": true },
                { "from": [0.2, 1], "to": [3.8, 1], "dash": true, "soft": true, "label": "total = K", "at": "start" }
              ],
              "labels": [
                { "x": 1.0, "y": -0.15, "text": "kinetic" },
                { "x": 3.0, "y": -0.15, "text": "potential" }
              ]
            },
            {
              "x": [0, 4],
              "y": [-0.22, 1.25],
              "axes": "none",
              "aspect": 0.62,
              "polys": [
                { "pts": [[0.55, 0], [1.45, 0], [1.45, 0.012], [0.55, 0.012]], "close": true, "fill": "wash", "tone": "amber", "label": "0" },
                { "pts": [[2.55, 0], [3.45, 0], [3.45, 1], [2.55, 1]], "close": true, "fill": "wash", "tone": "ink", "label": "K" }
              ],
              "segments": [
                { "from": [0.15, 0], "to": [3.85, 0], "soft": true },
                { "from": [0.2, 1], "to": [3.8, 1], "dash": true, "soft": true, "label": "total = K", "at": "start" }
              ],
              "labels": [
                { "x": 1.0, "y": -0.15, "text": "kinetic" },
                { "x": 3.0, "y": -0.15, "text": "potential" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any closest-approach question, in four moves",
          "steps": [
            "<b>Convert the energy to joules first.</b> Questions give <i>K</i> in MeV. Multiply by 1.6 × 10<sup>−13</sup> to get joules, because 1 MeV = 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> J. Doing this last is how factors of 10<sup>6</sup> go missing.",
            "<b>Check whether the projectile is an alpha.</b> The 2 in 2<i>Ze</i><sup>2</sup> is the alpha's charge. For a proton it is 1, for a deuteron 1, for a fully stripped carbon ion 6. Write the projectile charge as a symbol, not from memory.",
            "<b>Group the constants once.</b> (9.0 × 10<sup>9</sup>)(1.6 × 10<sup>−19</sup>)<sup>2</sup> = 2.304 × 10<sup>−28</sup> in SI units. Now <i>d</i> = 2 × 2.304 × 10<sup>−28</sup> × <i>Z</i>/<i>K</i>, and the arithmetic is one multiplication and one division.",
            "<b>If the question is a ratio or a comparison, do not plug in numbers at all.</b> Write <i>d</i> proportional to <i>zZ</i>/<i>K</i>, where <i>z</i> is the projectile charge, and divide. Half the marks in this topic are lost to students computing two full answers and then dividing them.",
            "<b>Sanity-check the size.</b> A few times 10<sup>−14</sup> m is right for a MeV alpha on a heavy nucleus. If you get 10<sup>−10</sup> m you have the size of a whole atom and have dropped a factor somewhere; if you get 10<sup>−18</sup> m, an alpha could not have got that close without nuclear forces taking over."
          ]
        },
        {
          "t": "p",
          "html": "Before using any of this, be clear about where it holds. Four assumptions are hiding inside that one-line formula, and JEE Advanced questions are built out of breaking them.<br><br>The foil must be <b>thin enough that each alpha scatters off one nucleus only</b>. A thick foil gives multiple scattering and the simple picture collapses. The force is taken to be <b>pure Coulomb repulsion</b>, which holds only while the alpha stays outside the nucleus; at very high energies it gets close enough for the short-range nuclear force to act, and Rutherford's predictions start to fail. Which, incidentally, is how nuclear sizes were later measured. The nucleus is taken as <b>stationary</b>, which is safe for gold and unsafe for lithium. And the atomic <b>electrons are ignored</b> entirely, because they are far too light to matter."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An alpha particle of kinetic energy 6.4 MeV is fired head-on at a silver nucleus (<i>Z</i> = 47). Find the distance of closest approach.",
          "steps": [
            "Convert: <i>K</i> = 6.4 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> = 1.024 × 10<sup>−12</sup> J.",
            "<i>d</i> = 2<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i> = (9.0 × 10<sup>9</sup>)(2)(47)(1.6 × 10<sup>−19</sup>)<sup>2</sup> / (1.024 × 10<sup>−12</sup>).",
            "Numerator: (9.0 × 10<sup>9</sup>)(94)(2.56 × 10<sup>−38</sup>) = 2.166 × 10<sup>−26</sup>.",
            "<i>d</i> = 2.166 × 10<sup>−26</sup> / 1.024 × 10<sup>−12</sup> = 2.115 × 10<sup>−14</sup> m."
          ],
          "ans": "<i>d</i> ≈ 2.1 × 10<sup>−14</sup> m, that is about 21 fm. Comfortably larger than a silver nucleus, so the pure-Coulomb assumption holds."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An alpha particle and a proton are accelerated through the <b>same</b> potential difference <i>V</i>, then fired head-on at identical gold nuclei. What is the ratio of their distances of closest approach?",
          "steps": [
            "The trap: most students write <i>d</i> proportional to the projectile charge and answer 2 : 1. Stop and ask how each particle got its energy.",
            "A charge <i>q</i> accelerated through <i>V</i> gains <i>K</i> = <i>qV</i>. Proton: <i>q</i> = <i>e</i>, so <i>K</i> = <i>eV</i>. Alpha: <i>q</i> = 2<i>e</i>, so <i>K</i> = 2<i>eV</i>.",
            "Now <i>d</i> = <i>q</i>(<i>Ze</i>)/4πε<sub>0</sub><i>K</i> with <i>K</i> = <i>qV</i>, so <i>d</i> = <i>q</i>(<i>Ze</i>)/4πε<sub>0</sub><i>qV</i> = <i>Ze</i>/4πε<sub>0</sub><i>V</i>.",
            "The projectile charge <i>q</i> has cancelled completely. Both particles stop at the same distance."
          ],
          "ans": "<i>d</i><sub>proton</sub> : <i>d</i><sub>alpha</sub> = 1 : 1. Extra charge means extra push and extra energy, and the two exactly offset when the energy comes from the same volts."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Alpha particles of 7.7 MeV, the most energetic available from a natural source, are fired head-on at gold (<i>Z</i> = 79). Find <i>d</i>, and compare it with the gold nuclear radius of about 7.0 fm.",
          "steps": [
            "<i>K</i> = 7.7 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> = 1.232 × 10<sup>−12</sup> J.",
            "Numerator: (9.0 × 10<sup>9</sup>)(2)(79)(2.56 × 10<sup>−38</sup>) = 3.640 × 10<sup>−26</sup>.",
            "<i>d</i> = 3.640 × 10<sup>−26</sup> / 1.232 × 10<sup>−12</sup> = 2.95 × 10<sup>−14</sup> m ≈ 3.0 × 10<sup>−14</sup> m.",
            "Ratio: <i>d</i>/<i>R</i> = 3.0 × 10<sup>−14</sup> / 7.0 × 10<sup>−15</sup> ≈ 4.3."
          ],
          "ans": "<i>d</i> ≈ 3.0 × 10<sup>−14</sup> m, about four nuclear radii. The alpha turns round well before touching, so the experiment bounds the nuclear radius from above and does not measure it."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "An alpha particle (<i>m</i> = 4<i>u</i>) of kinetic energy 3.0 MeV makes a head-on collision with a stationary lithium-7 nucleus (<i>M</i> = 7<i>u</i>, <i>Z</i> = 3). Allowing for the recoil of the lithium, find the distance of closest approach.",
          "steps": [
            "Key insight: when the target can recoil, the alpha does <b>not</b> fully stop. At minimum separation both move together with a common velocity, because the separation is momentarily not changing.",
            "Momentum: <i>mv</i> = (<i>m</i> + <i>M</i>)<i>V</i>, so <i>V</i> = <i>mv</i>/(<i>m</i> + <i>M</i>). The kinetic energy still in that common motion is unavailable for the repulsion.",
            "Energy available to become potential energy = <i>K</i>[1 − <i>m</i>/(<i>m</i> + <i>M</i>)] = <i>K</i> · <i>M</i>/(<i>m</i> + <i>M</i>).",
            "So <i>d</i> = <i>d</i><sub>0</sub>(<i>m</i> + <i>M</i>)/<i>M</i> = <i>d</i><sub>0</sub>(1 + <i>m</i>/<i>M</i>), where <i>d</i><sub>0</sub> is the fixed-nucleus answer.",
            "<i>d</i><sub>0</sub> = (9.0 × 10<sup>9</sup>)(2)(3)(2.56 × 10<sup>−38</sup>)/(4.8 × 10<sup>−13</sup>) = 1.382 × 10<sup>−27</sup>/4.8 × 10<sup>−13</sup> = 2.88 × 10<sup>−15</sup> m.",
            "Recoil factor = (4 + 7)/7 = 11/7 = 1.57, so <i>d</i> = 2.88 × 10<sup>−15</sup> × 1.57 = 4.53 × 10<sup>−15</sup> m."
          ],
          "ans": "<i>d</i> ≈ 4.5 fm, about 57 per cent larger than the naive 2.9 fm. Recoil matters most for <b>light</b> targets, and note that 4.5 fm is only about twice the lithium nuclear radius, so the pure-Coulomb assumption is already on the edge here."
        },
        {
          "t": "mcq",
          "q": "The fact that <b>most</b> alpha particles pass through the gold foil almost undeviated indicates that:",
          "opts": [
            { "label": "the nucleus is positively charged", "nudge": "True, but shown by the LARGE-ANGLE scattering, not by undeviated passage. A right fact attached to the wrong evidence is the commonest way this question is failed." },
            { "label": "the atom is mostly empty space", "nudge": null },
            { "label": "electrons have negligible mass", "nudge": "Also true, and it explains why electrons never deflect an alpha. But undeviated passage is a statement about how much of the atom is occupied, not about what the occupants weigh." },
            { "label": "the nucleus is extremely dense", "nudge": "Inferred from the rare BACKWARD bounces, which need a heavy target. The straight-through majority says nothing about density." }
          ],
          "correct": 1,
          "solution": "Undeviated passage means those alphas encountered <b>nothing</b>: the atom's mass and charge occupy only a tiny fraction of its volume. Keep the three outcomes and their three conclusions separate in your head, because every option here is a true statement attached to the wrong observation."
        },
        {
          "t": "mcq",
          "q": "An alpha particle is fired at a nucleus. If the atomic number <i>Z</i> is doubled and the kinetic energy <i>K</i> is halved, the distance of closest approach changes by a factor of:",
          "opts": [
            { "label": "2", "nudge": "This counts only the Z doubling and forgets that the energy changed too. Both factors act, and they act in the same direction." },
            { "label": "4", "nudge": null },
            { "label": "1", "nudge": "This assumes the two effects cancel. They do not: more charge pushes harder AND less energy gets you less far, so both changes increase d." },
            { "label": "1/4", "nudge": "This inverts the energy dependence, treating d as proportional to K instead of 1/K. Halving K must make the alpha stop further out, not nearer." }
          ],
          "correct": 1,
          "solution": "<i>d</i> is proportional to <i>Z</i>/<i>K</i>. Doubling <i>Z</i> doubles <i>d</i>; halving <i>K</i> doubles it again. New <i>d</i> = (2<i>Z</i>)/(<i>K</i>/2) = 4 × old. Never compute two full answers for a ratio question."
        },
        {
          "t": "mcq",
          "q": "An alpha particle and a proton carry the <b>same momentum</b> and are fired head-on at the same nucleus. Take <i>m</i><sub>alpha</sub> = 4<i>m</i><sub>p</sub>. The ratio <i>d</i><sub>alpha</sub> : <i>d</i><sub>proton</sub> is:",
          "opts": [
            { "label": "1 : 1", "nudge": "That is the answer for the same accelerating POTENTIAL, where the charge cancels. Same momentum is a different constraint and does not cancel anything." },
            { "label": "2 : 1", "nudge": "This counts only the alpha's doubled charge and forgets that equal momentum gives the heavier particle less kinetic energy." },
            { "label": "8 : 1", "nudge": null },
            { "label": "4 : 1", "nudge": "This counts only the mass ratio through K = p squared over 2m and forgets the alpha's charge of 2e." }
          ],
          "correct": 2,
          "solution": "<i>d</i> is proportional to <i>zZ</i>/<i>K</i>, where <i>z</i> is the projectile charge. With equal momentum <i>p</i>, <i>K</i> = <i>p</i><sup>2</sup>/2<i>m</i>, so <i>K</i><sub>p</sub>/<i>K</i><sub>alpha</sub> = <i>m</i><sub>alpha</sub>/<i>m</i><sub>p</sub> = 4. Then <i>d</i><sub>alpha</sub>/<i>d</i><sub>p</sub> = (2<i>e</i>/<i>e</i>) × 4 = 8. Both effects push the same way: the alpha has more charge and less energy."
        },
        {
          "t": "mcq",
          "q": "The observation that about 1 in 8000 alpha particles is turned back through more than 90° is the direct evidence for:",
          "opts": [
            { "label": "the foil being only a few atoms thick", "nudge": "Foil thinness is an experimental precaution that guarantees single scattering. It is an input to the experiment, not something the counts prove." },
            { "label": "the charge and nearly all the mass sitting in a tiny, heavy core", "nudge": null },
            { "label": "the atom being mostly empty", "nudge": "That is what the straight-through majority proves. The rebounds are rare precisely because the atom is empty, but rarity and reversal are two different facts." },
            { "label": "electrons orbiting the nucleus", "nudge": "Nothing in the scattering data mentions electrons at all. Where the electrons are was Rutherford's guess afterwards, not his measurement." }
          ],
          "correct": 1,
          "solution": "To reverse a fast, heavy alpha you need two things at once: a field intense enough to stop it, which means concentrated charge, and a target heavy enough not to be knocked aside itself, which means concentrated mass. Only a small dense nucleus supplies both."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] An alpha particle of kinetic energy 5.0 MeV is fired head-on at a copper nucleus (<i>Z</i> = 29). Find the distance of closest approach.",
              "a": "<i>K</i> = 8.0 × 10<sup>−13</sup> J. Numerator = (9.0 × 10<sup>9</sup>)(2)(29)(2.56 × 10<sup>−38</sup>) = 1.336 × 10<sup>−26</sup>. <i>d</i> = 1.336 × 10<sup>−26</sup>/8.0 × 10<sup>−13</sup> = 1.7 × 10<sup>−14</sup> m."
            },
            {
              "q": "[NEET] If the kinetic energy of an alpha particle is doubled, by what factor does its distance of closest approach to a fixed nucleus change?",
              "a": "It is halved. <i>d</i> is proportional to 1/<i>K</i>, so <i>d</i> becomes <i>d</i>/2. No numbers needed."
            },
            {
              "q": "[JEE Main] A proton and an alpha particle have the <b>same kinetic energy</b> and are fired head-on at the same nucleus. Find <i>d</i><sub>alpha</sub> : <i>d</i><sub>proton</sub>.",
              "a": "2 : 1. With <i>K</i> fixed, <i>d</i> is proportional to the projectile charge alone, and the alpha carries 2<i>e</i> against the proton's <i>e</i>. Contrast this with the same-potential version, where the charge cancels and the answer is 1 : 1."
            },
            {
              "q": "[JEE Advanced] An alpha of 4.0 MeV is fired head-on at an aluminium nucleus (<i>Z</i> = 13). Find <i>d</i>, and decide whether the pure-Coulomb assumption is safe given that the aluminium radius is <i>R</i> = 1.2 <i>A</i><sup>1/3</sup> fm with <i>A</i> = 27.",
              "a": "<i>K</i> = 6.4 × 10<sup>−13</sup> J; numerator = (9.0 × 10<sup>9</sup>)(2)(13)(2.56 × 10<sup>−38</sup>) = 5.99 × 10<sup>−27</sup>; <i>d</i> = 9.4 × 10<sup>−15</sup> m = 9.4 fm. The radius is 1.2 × 27<sup>1/3</sup> = 1.2 × 3 = 3.6 fm, so the alpha stops about 2.6 radii out. Still outside, so the assumption holds, but only just: raise the energy a little and the nuclear force starts to bite."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting that the alpha's charge is 2<i>e</i>.</b> Writing <i>Ze</i><sup>2</sup> instead of 2<i>Ze</i><sup>2</sup> silently halves every answer, and nothing in the arithmetic warns you.",
            "<b>Leaving <i>K</i> in MeV.</b> The formula is in SI. 1 MeV = 1.6 × 10<sup>−13</sup> J, and a missing factor of 10<sup>6</sup> is the single most common numerical error in this topic.",
            "<b>Mishandling the energy dependence.</b> <i>d</i> is proportional to 1/<i>K</i>, not to 1/√<i>K</i> and not to 1/<i>K</i><sup>2</sup>. And watch the same-accelerating-potential trap, where the projectile charge cancels out entirely.",
            "<b>Blaming electrons for the large deflections.</b> An electron is about 7300 times lighter than an alpha and cannot turn it. All the deflection is the nucleus's doing.",
            "<b>Reading <i>d</i> as the nuclear radius.</b> It is an upper bound on the radius. The alpha stops short of touching, so all you learn is that the nucleus is smaller than <i>d</i>."
          ]
        },
        {
          "t": "protip",
          "html": "group the constants once and reuse them all chapter. (9 × 10<sup>9</sup>)(1.6 × 10<sup>−19</sup>)<sup>2</sup> = 2.304 × 10<sup>−28</sup>, so <i>d</i> = 4.61 × 10<sup>−28</sup> <i>Z</i>/<i>K</i> with <i>K</i> in joules. and for anything phrased as a ratio, do not touch a calculator: write <i>d</i> proportional to <i>zZ</i>/<i>K</i> and divide. two sanity checks catch nearly every slip, and both are free. a MeV alpha on a heavy nucleus stops a few times 10<sup>−14</sup> m out, and the answer must be bigger than a nucleus and smaller than an atom."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "d = 2Ze² / 4πε₀K", "note": "Distance of closest approach, head-on, stationary nucleus. In metres." },
            { "f": "d ∝ Z,  d ∝ 1/K,  d ∝ 1/v²", "note": "The three proportionalities. Use these for every ratio question." },
            { "f": "1/4πε₀ = 9.0 × 10⁹ N m² C⁻²", "note": "And (9 × 10⁹)(1.6 × 10⁻¹⁹)² = 2.304 × 10⁻²⁸." },
            { "f": "1 MeV = 1.6 × 10⁻¹³ J", "note": "Convert before substituting, never after." },
            { "f": "Same accelerating V ⇒ d is the same", "note": "K = qV makes the projectile charge cancel. The chapter's favourite trap." },
            { "f": "Nucleus ~10⁻¹⁵ m, atom ~10⁻¹⁰ m", "note": "A grain of rice at the centre of a cricket stadium." },
            { "f": "About 1 in 8000 scattered past 90°", "note": "Rare, and therefore proof that the target is tiny." }
          ],
          "aids": [
            "most go straight: the atom is empty. a few bend hard: the charge is concentrated. one comes back: it is heavy.",
            "the 2 in 2Ze² is the alpha, not a typo. drop it and every answer halves.",
            "d is where it stops, so the nucleus must be smaller than d. it is a ceiling, not a measurement."
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Impact Parameter, the Counting Law, and Why the Model Failed",
      "chip": "02 THE AIM",
      "kalam": "how close you aim decides how hard it turns",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 fired the alpha dead centre. That is the easy case and the rare one. Almost every alpha in the beam is aimed <b>past</b> the nucleus rather than at it, and what happens then is a two-dimensional problem: the alpha swings round the nucleus, is pushed sideways as it goes, and leaves along a new direction.<br><br>The whole of that geometry is controlled by one number, decided before the alpha arrives anywhere near the nucleus. It is how far <b>off centre</b> the alpha was aimed."
        },
        {
          "t": "def",
          "term": "Impact parameter",
          "html": "The perpendicular distance <i>b</i> from the centre of the nucleus to the line along which the alpha was originally travelling. It is measured on the <b>incoming</b> straight line, extended, and not on the curved path the alpha actually follows. A small <i>b</i> means the alpha was aimed close to the centre; <i>b</i> = 0 is the head-on case of Topic 01."
        },
        {
          "t": "p",
          "html": "Keep <i>b</i> and <i>d</i> apart in your head, because they are both lengths, both measured from the nucleus, and both come out at a few times 10<sup>−14</sup> m for a MeV alpha. They are not the same thing.<br><br><i>b</i> is a sideways <b>offset, fixed before</b> the encounter, and the alpha's aim decides it. <i>d</i> is the <b>minimum separation during</b> the encounter, and the physics decides it. For a head-on shot <i>b</i> = 0 and <i>d</i> is as large as it will ever be. For a distant pass <i>b</i> is huge and the alpha never gets close at all."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.2 · THREE AIMS, THREE FATES",
          "chips": ["large b", "small b", "b = 0"],
          "captions": [
            "An alpha aimed well off centre, with b = 1.6 in the units of this figure, where the head-on closest approach would be 0.9. The dashed line is the path it would have taken with no nucleus there, and b is the perpendicular from the nucleus to that line. The alpha is pushed sideways for the whole of its passage, but it is never close and the push is never strong, so it leaves along a direction only about 30 degrees off its original one. Every path in this figure was integrated from the Coulomb equations of motion rather than sketched, so the bends are the real ones.",
            "The same nucleus and the same alpha energy, aimed more than three times closer: b = 0.45 against 1.6. Now the alpha drives deep into the repulsive field before it is turned, the sideways push is far larger, and it comes out at nearly 90 degrees to where it started. Compare the two frames: cutting b by a factor of three has tripled the deflection. Smaller aim, bigger bend, and the relationship is the cotangent below.",
            "The limiting case, b = 0, which is the head-on shot of Topic 01. The alpha comes straight in, stops at the distance of closest approach d, and is thrown back along the line it came, so theta = 180 degrees. The incoming and outgoing paths really lie on top of one another; they are drawn a little apart here only so you can see there are two of them. This is the b that produces the rare backward bounce, and it is why those bounces are rare: almost no alpha in a wide beam is aimed that precisely."
          ],
          "frames": [
            {
              "x": [-5, 5],
              "y": [-2.4, 2.4],
              "axes": "none",
              "aspect": 0.54,
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[-4.85, 1.62], [-4.58, 1.62], [-4.31, 1.62], [-4.04, 1.63], [-3.77, 1.63], [-3.51, 1.64], [-3.24, 1.64], [-2.98, 1.65], [-2.73, 1.66], [-2.47, 1.67], [-2.22, 1.69], [-1.97, 1.7], [-1.73, 1.72], [-1.49, 1.75], [-1.26, 1.78], [-1.03, 1.81], [-0.8, 1.86], [-0.58, 1.91], [-0.36, 1.97], [-0.14, 2.03], [0.08, 2.11], [0.3, 2.2], [0.52, 2.29]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "segments": [
                { "from": [0, 0], "to": [0, 1.6], "dash": true, "label": "b", "at": "mid" }
              ],
              "arrows": [
                { "from": [-1.05, 1.6], "to": [4.5, 1.6], "dash": true, "tone": "soft", "label": "undeflected", "at": "end" }
              ],
              "arcs": [
                { "at": [-1.05, 1.6], "r": 1.2, "from": 0, "to": 24, "label": "θ", "tone": "amber" }
              ],
              "labels": [
                { "x": 0, "y": -1.9, "text": "nucleus +Ze" }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-2.4, 2.4],
              "axes": "none",
              "aspect": 0.54,
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[-4.85, 0.45], [-4.51, 0.46], [-4.18, 0.46], [-3.85, 0.46], [-3.53, 0.46], [-3.21, 0.46], [-2.89, 0.47], [-2.58, 0.47], [-2.28, 0.48], [-1.99, 0.49], [-1.71, 0.5], [-1.45, 0.51], [-1.21, 0.54], [-1.0, 0.58], [-0.83, 0.63], [-0.69, 0.72], [-0.6, 0.85], [-0.53, 1.02], [-0.48, 1.23], [-0.44, 1.47], [-0.41, 1.73], [-0.39, 2.0], [-0.36, 2.29]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "segments": [
                { "from": [0, 0], "to": [0, 0.45], "dash": true, "label": "b", "at": "mid" }
              ],
              "arrows": [
                { "from": [-0.5, 0.45], "to": [4.5, 0.45], "dash": true, "tone": "soft", "label": "undeflected", "at": "end" }
              ],
              "arcs": [
                { "at": [-0.5, 0.45], "r": 1.0, "from": 0, "to": 86, "label": "θ", "tone": "amber" }
              ],
              "labels": [
                { "x": 0, "y": -1.9, "text": "nucleus +Ze" }
              ]
            },
            {
              "x": [-5, 5],
              "y": [-2.4, 2.4],
              "axes": "none",
              "aspect": 0.54,
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "arrows": [
                { "from": [-4.6, 0.2], "to": [-1.05, 0.2], "tone": "amber", "label": "aimed dead on", "at": "mid" },
                { "from": [-1.05, -0.2], "to": [-4.6, -0.2], "tone": "amber", "label": "straight back", "at": "above" }
              ],
              "segments": [
                { "from": [-1.0, 0], "to": [0, 0], "dash": true, "label": "d", "at": "mid" }
              ],
              "labels": [
                { "x": -2.8, "y": 1.3, "text": "b = 0" },
                { "x": -2.8, "y": -1.3, "text": "θ = 180°" },
                { "x": 0, "y": -1.9, "text": "nucleus +Ze" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "IMPACT PARAMETER AND SCATTERING ANGLE",
          "tag": "RUTHERFORD, 1911",
          "main": "<i>b</i> = <i>Ze</i><sup>2</sup> cot(θ/2) / 4πε<sub>0</sub><i>K</i>",
          "legend": [
            "<i>b</i> = impact parameter, the perpendicular offset of the incoming line, in metres (m)",
            "θ = scattering angle, the angle between the incoming and outgoing directions, in degrees or radians and itself dimensionless",
            "<i>Z</i> = atomic number of the target nucleus, a pure number",
            "<i>e</i> = 1.6 × 10<sup>−19</sup> coulomb (C)",
            "<i>K</i> = kinetic energy of the alpha, in joules (J)"
          ],
          "note": "Compare this with <i>d</i> = 2<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i> from Topic 01 and one useful thing falls out at once: <b><i>b</i> = (<i>d</i>/2) cot(θ/2)</b>. The two lengths differ only by a pure number, which is why they are so easy to confuse, and it means you can convert between them without touching a constant."
        },
        {
          "t": "p",
          "html": "The cotangent is doing all the work, so read what it says. As <b>θ gets small</b>, cot(θ/2) blows up, so <i>b</i> is huge: a distant pass barely bends. As <b>θ approaches 180°</b>, cot(θ/2) goes to zero, so <i>b</i> goes to zero: only a dead-centre shot comes straight back.<br><br>Between the extremes the relationship is smooth and one-to-one. Every impact parameter gives exactly one scattering angle, and vice versa. That is what makes the whole experiment readable: the distribution of angles you measure is a translation of the distribution of aims in the beam, and the beam's aims are spread evenly across the foil because the alphas have no idea where the nuclei are."
        },
        {
          "t": "think",
          "html": "you are not steering the alphas. you spray them across the foil at random and let geometry sort them. the ones that happen to be aimed near a nucleus come back hard, and there are very few of those simply because a nucleus is a very small target. so the <b>rarity</b> of a large angle and the <b>smallness</b> of the nucleus are the same fact counted two ways."
        },
        {
          "t": "deriv",
          "kicker": "WHERE THE COTANGENT COMES FROM",
          "steps": [
            {
              "eq": "the alpha moves in the Coulomb field of a fixed point charge, so its path is a hyperbola",
              "why": "An inverse-square force always produces a conic section. Attraction gives ellipses, which is why planets orbit; repulsion gives the branch of a hyperbola that curves away from the centre. The nucleus sits at the focus, and the two straight asymptotes of that hyperbola are the incoming and outgoing directions."
            },
            {
              "eq": "the force is central, so angular momentum about the nucleus is conserved: <i>L</i> = <i>mvb</i> throughout",
              "why": "A central force has no torque about its own centre, from Rotational Motion. Evaluating <i>L</i> far away, where the alpha moves in a straight line at speed <i>v</i> with perpendicular offset <i>b</i>, gives <i>L</i> = <i>mvb</i> immediately, and that single number then constrains the whole path."
            },
            {
              "eq": "the force is conservative, so <i>K</i> is the same far before and far after: only the DIRECTION changes",
              "why": "The alpha leaves with exactly the speed it arrived with, because the potential energy is zero at both ends. So the encounter is a pure rotation of the velocity vector, and the one thing left to compute is the angle of that rotation."
            },
            {
              "eq": "solving the hyperbola with those two constants gives <i>b</i> = (<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i>) cot(θ/2)",
              "why": "This step is the geometry of a conic and is quoted rather than derived, exactly as the source quotes it: CBSE asks for the RESULT and its reading, never the integration. What you are expected to defend is the reasoning behind the form, which is the next step."
            },
            {
              "eq": "reading the form: smaller <i>b</i> means deeper penetration, larger sideways push, larger θ",
              "why": "This is the sentence that earns the mark. The alpha drives further into the repulsive field when it is aimed closer, so it feels a stronger force for longer, so it is turned further. The inverse relationship between <i>b</i> and θ is not a formula to memorise; it is what closer aim has to mean."
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the part the experiment actually measures. Nobody could see an individual alpha's impact parameter. What Geiger and Marsden counted were <b>flashes per minute at a given angle</b>, and Rutherford predicted that count.<br><br>The prediction is startling in how steeply it falls. Halve the angle and the count does not merely rise, it multiplies. Between 10° and 90° the predicted count changes by a factor of over four thousand, and the measured counts followed the curve across that whole range. Getting a prediction right over four orders of magnitude is not agreement; it is proof."
        },
        {
          "t": "formula",
          "kicker": "RUTHERFORD'S SCATTERING LAW",
          "tag": "COUNTS PER UNIT DETECTOR AREA",
          "main": "<i>N</i>(θ) ∝ <i>Z</i><sup>2</sup> <i>t</i> / <i>K</i><sup>2</sup> sin<sup>4</sup>(θ/2)",
          "legend": [
            "<i>N</i>(θ) = number of alphas arriving per unit detector area at angle θ, in m<sup>−2</sup>",
            "<i>Z</i> = atomic number of the foil atoms, a pure number",
            "<i>t</i> = foil thickness, in metres (m)",
            "<i>K</i> = kinetic energy of the incoming alphas, in joules (J)",
            "θ = scattering angle measured from the beam direction, dimensionless"
          ],
          "note": "In full, <i>N</i>(θ) = <i>N</i><sub>i</sub><i>n</i><sub>v</sub><i>t</i> <i>Z</i><sup>2</sup><i>e</i><sup>4</sup> / (8πε<sub>0</sub>)<sup>2</sup><i>r</i><sup>2</sup><i>K</i><sup>2</sup>sin<sup>4</sup>(θ/2), where <i>N</i><sub>i</sub> is the number of incident alphas, <i>n</i><sub>v</sub> the foil atoms per unit volume in m<sup>−3</sup>, and <i>r</i> the detector distance in metres. Exams only ever use the four proportionalities, so learn those and derive nothing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.4 · HOW STEEPLY THE COUNTS FALL",
          "chips": ["the law", "Geiger's counts"],
          "captions": [
            "The predicted count against scattering angle, with the vertical axis in powers of ten because no linear axis could hold the range. At 10 degrees the count is about 4300 times what it is at 90 degrees, and the curve is still falling at 180 degrees. The steepness is the whole content of the 1/sin to the fourth: scattering at large angles is not slightly rarer than scattering at small angles, it is rarer by thousands. That is why the backward bounce was worth remarking on and why Rutherford could deduce a size from a count.",
            "The same curve with Geiger and Marsden's measured counts laid over it as open circles. They sat in a darkened room and counted scintillations by eye at angle after angle, and the points follow the theoretical curve across four decades. A model that matches over one decade might be lucky. A model that matches over four is describing something real, and this is the graph that made the nuclear atom the accepted picture."
          ],
          "frames": [
            {
              "x": [0, 190],
              "y": [-0.4, 5.6],
              "aspect": 0.72,
              "axisX": "θ (degrees)",
              "axisY": "log10 N",
              "ticksX": { "at": [0, 45, 90, 135, 180] },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[6, 5.13], [8, 4.63], [10, 4.24], [15, 3.54], [20, 3.04], [30, 2.35], [40, 1.86], [50, 1.5], [60, 1.2], [80, 0.77], [100, 0.46], [120, 0.25], [140, 0.11], [160, 0.03], [180, 0]] }
              ],
              "points": [
                { "x": 10, "y": 4.24, "label": "10°" },
                { "x": 90, "y": 0.6, "label": "90°" }
              ],
              "labels": [
                { "x": 112, "y": 4.5, "text": "10° vs 90° is 4300 : 1" }
              ]
            },
            {
              "x": [0, 190],
              "y": [-0.4, 5.6],
              "aspect": 0.72,
              "axisX": "θ (degrees)",
              "axisY": "log10 N",
              "ticksX": { "at": [0, 45, 90, 135, 180] },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[6, 5.13], [8, 4.63], [10, 4.24], [15, 3.54], [20, 3.04], [30, 2.35], [40, 1.86], [50, 1.5], [60, 1.2], [80, 0.77], [100, 0.46], [120, 0.25], [140, 0.11], [160, 0.03], [180, 0]] }
              ],
              "points": [
                { "x": 10, "y": 4.19, "open": true },
                { "x": 15, "y": 3.58, "open": true },
                { "x": 20, "y": 3.0, "open": true },
                { "x": 30, "y": 2.32, "open": true },
                { "x": 45, "y": 1.7, "open": true },
                { "x": 60, "y": 1.18, "open": true },
                { "x": 90, "y": 0.62, "open": true },
                { "x": 120, "y": 0.24, "open": true },
                { "x": 150, "y": 0.08, "open": true }
              ],
              "labels": [
                { "x": 120, "y": 3.5, "text": "measured counts" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The four proportionalities, and what each one tests",
          "rows": [
            { "k": "N ∝ 1/sin⁴(θ/2)", "v": "The angular shape. Halving the angle multiplies the count many times over." },
            { "k": "N ∝ Z²", "v": "The scatterer is the nuclear charge. Gold scatters far harder than aluminium." },
            { "k": "N ∝ t", "v": "Thicker foil, more nuclei in the way, proportionally more scattering." },
            { "k": "N ∝ 1/K²", "v": "Faster alphas are harder to turn, so raising the energy empties the large angles." },
            { "k": "b = 0 ⟺ θ = 180°", "v": "Dead-centre aim gives the head-on rebound. The two ends of the geometry." },
            { "k": "b → ∞ ⟺ θ → 0°", "v": "A distant pass is no pass at all. This is the straight-through majority." }
          ]
        },
        {
          "t": "proc",
          "title": "Any counting-law ratio, in three moves",
          "steps": [
            "<b>Write only the factors that change.</b> If the question changes the angle alone, the whole formula collapses to <i>N</i> ∝ 1/sin<sup>4</sup>(θ/2) and everything else divides out. Carrying constants through a ratio wastes time and invites slips.",
            "<b>Halve the angle before taking the sine.</b> The formula is sin(θ/2), not sin θ. At θ = 90° you need sin 45° = 1/√2, not sin 90° = 1. This single step is the most common wrong answer in the topic.",
            "<b>Take the fourth power last.</b> Work out sin(θ/2) first, then raise it to the fourth. sin<sup>4</sup>45° = (1/√2)<sup>4</sup> = 1/4, and sin<sup>4</sup>30° = (1/2)<sup>4</sup> = 1/16. Those two numbers cover most exam questions on their own.",
            "<b>Check the direction before writing the answer.</b> Larger angle always means fewer counts. If your ratio says more alphas arrive at 120° than at 60°, you have inverted something."
          ]
        },
        {
          "t": "p",
          "html": "Rutherford now had an atom that explained his own experiment perfectly. He also had an atom that could not exist.<br><br>Put the electrons in orbit round the nucleus, which is the only way to stop them falling straight in, and you have a charge moving in a circle. A charge moving in a circle is <b>accelerating</b>, and Electromagnetic Waves says an accelerating charge <b>radiates</b>. So the electron must continuously bleed energy, spiral inward, and crash into the nucleus. The calculation gives it about <b>10<sup>−8</sup> seconds</b> to live.<br><br>Atoms have been around for thirteen billion years. Something is badly wrong."
        },
        {
          "t": "p",
          "html": "The second failure is quieter and turns out to be the more useful one. As the electron spiralled in, its orbital frequency would change continuously, so the light it radiated would sweep smoothly through every frequency: a <b>continuous</b> spectrum, a smeared rainbow.<br><br>That is not what a hot gas emits. Heat hydrogen in a discharge tube, spread the light with a prism, and you get a handful of <b>sharp bright lines</b> at fixed wavelengths and nothing at all in between. Rutherford's model has no way to produce a line, because it has no special frequencies in it. Every one of these failures points the same way, and the way is Bohr's."
        },
        {
          "t": "defgrid",
          "title": "What Rutherford's model does and does not explain",
          "rows": [
            { "k": "Large-angle scattering", "v": "Explained. It is the reason the model exists." },
            { "k": "Most alphas undeviated", "v": "Explained. The atom is nearly all empty space." },
            { "k": "Size of the nucleus", "v": "Bounded from above by the distance of closest approach." },
            { "k": "Stability of the atom", "v": "FAILS. An orbiting electron radiates and should spiral in within 10⁻⁸ s." },
            { "k": "Sharp line spectra", "v": "FAILS. A spiralling electron would emit a continuous smear, not lines." }
          ]
        },
        {
          "t": "think",
          "html": "notice that both failures come from the same source: classical physics applied inside the atom. rutherford's picture of a tiny heavy nucleus is <b>right</b> and survives untouched into every later model. what fails is the assumption that an electron in an atom obeys the same rules as a charge in a laboratory. bohr's move was simply to say that it does not."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Alpha particles of kinetic energy 5.0 MeV are scattered by a gold foil (<i>Z</i> = 79). (a) Find the impact parameter for a scattering angle of 90°. (b) For what scattering angle is the impact parameter twice that value?",
          "steps": [
            "<i>K</i> = 5.0 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> = 8.0 × 10<sup>−13</sup> J.",
            "(a) At θ = 90°, cot(θ/2) = cot 45° = 1, so <i>b</i> = <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i>.",
            "Numerator: (9.0 × 10<sup>9</sup>)(79)(2.56 × 10<sup>−38</sup>) = 1.820 × 10<sup>−26</sup>.",
            "<i>b</i> = 1.820 × 10<sup>−26</sup>/8.0 × 10<sup>−13</sup> = 2.275 × 10<sup>−14</sup> m.",
            "(b) Doubling <i>b</i> needs cot(θ/2) = 2, so tan(θ/2) = 0.5 and θ/2 = 26.6°."
          ],
          "ans": "(a) <i>b</i> ≈ 2.3 × 10<sup>−14</sup> m. (b) θ ≈ 53°. Sensible: a larger impact parameter has to give a gentler, smaller-angle deflection."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "For a given alpha energy and target, at what scattering angle is the impact parameter exactly half the distance of closest approach?",
          "steps": [
            "The trap is to reach for numbers. Nothing here needs a constant: use the relation between the two lengths.",
            "<i>d</i> = 2<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>K</i> and <i>b</i> = <i>Ze</i><sup>2</sup> cot(θ/2)/4πε<sub>0</sub><i>K</i>, so <i>b</i> = (<i>d</i>/2) cot(θ/2).",
            "Setting <i>b</i> = <i>d</i>/2 gives cot(θ/2) = 1, so θ/2 = 45°."
          ],
          "ans": "θ = 90°, whatever the energy and whatever the target. Worth memorising as an anchor: the 90° scatter is the one whose impact parameter is half the head-on closest approach."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "In a scattering experiment, 100 alpha particles per minute are detected at 60°. How many per minute arrive at 90°, and how many at 120°?",
          "steps": [
            "<i>N</i> ∝ 1/sin<sup>4</sup>(θ/2), so compute sin<sup>4</sup>(θ/2) at each angle and take ratios.",
            "θ = 60°: sin 30° = 0.5, sin<sup>4</sup> = 1/16, so 1/sin<sup>4</sup> = 16.",
            "θ = 90°: sin 45° = 0.707, sin<sup>4</sup> = 1/4, so 1/sin<sup>4</sup> = 4.",
            "θ = 120°: sin 60° = 0.866, sin<sup>4</sup> = 0.5625, so 1/sin<sup>4</sup> = 1.78.",
            "At 90°: 100 × 4/16 = 25 per minute. At 120°: 100 × 1.78/16 = 11 per minute."
          ],
          "ans": "About 25 per minute at 90° and about 11 per minute at 120°. The counts drop steadily with angle, which is the direction check on any answer here."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A gold foil (<i>Z</i> = 79) is replaced by a silver foil (<i>Z</i> = 47) of the same thickness and the same number of atoms per unit volume, with the beam energy unchanged. By what factor does the count at a fixed angle change? If the beam energy is then doubled as well, what is the overall factor?",
          "steps": [
            "Only <i>Z</i> and <i>K</i> change, so write <i>N</i> ∝ <i>Z</i><sup>2</sup>/<i>K</i><sup>2</sup> and drop everything else.",
            "Changing the foil: <i>N</i><sub>Ag</sub>/<i>N</i><sub>Au</sub> = (47/79)<sup>2</sup> = (0.595)<sup>2</sup> = 0.354.",
            "Doubling <i>K</i>: an extra factor of 1/2<sup>2</sup> = 0.25.",
            "Overall: 0.354 × 0.25 = 0.0885."
          ],
          "ans": "The silver foil alone gives about 0.35 of the gold count. With the energy doubled as well, about 0.089 of it, a drop of more than eleven times. Both changes push the same way, which is why the combined effect is so large."
        },
        {
          "t": "mcq",
          "q": "For a head-on collision between an alpha particle and a nucleus, the impact parameter <i>b</i> and the scattering angle θ are respectively:",
          "opts": [
            { "label": "b = 0, θ = 0°", "nudge": "This reads \"head-on\" as \"no deflection\", confusing aiming AT the centre with grazing past it. Aiming at the centre gives the biggest deflection there is." },
            { "label": "b = maximum, θ = 180°", "nudge": "This swaps the two. A maximum impact parameter is a distant pass, which is the gentlest encounter possible, not the most violent." },
            { "label": "b = 0, θ = 180°", "nudge": null },
            { "label": "b = maximum, θ = 0°", "nudge": "This describes the distant grazing pass, the large-b limit. True as a pair, but it is the opposite extreme from head-on." }
          ],
          "correct": 2,
          "solution": "Head-on means aimed straight at the centre, so <i>b</i> = 0, and the alpha rebounds straight back, so θ = 180°. Check it against the formula: cot(θ/2) goes to zero as θ goes to 180°, and <i>b</i> goes to zero with it."
        },
        {
          "t": "mcq",
          "q": "Using <i>N</i>(θ) ∝ 1/sin<sup>4</sup>(θ/2), the ratio of the number of particles scattered at 90° to the number at 180° is:",
          "opts": [
            { "label": "1", "nudge": "This assumes the count does not depend on angle at all, which would make the whole experiment pointless: it is the angular dependence that revealed the nucleus." },
            { "label": "2", "nudge": "This comes from using 1/sin squared instead of the fourth power. Halving the exponent halves the ratio in the log, so 4 becomes 2." },
            { "label": "4", "nudge": null },
            { "label": "16", "nudge": "This comes from dropping the \"/2\" and using sin to the fourth of theta itself: sin 90° over sin 180° is then undefined, and the 16 comes from a half-remembered 30 degree case." }
          ],
          "correct": 2,
          "solution": "<i>N</i>(90°)/<i>N</i>(180°) = sin<sup>4</sup>(90°)/sin<sup>4</sup>(45°) = 1/(1/√2)<sup>4</sup> = 1/(1/4) = 4. Halve the angle before taking the sine, then raise to the fourth power, in that order."
        },
        {
          "t": "mcq",
          "q": "In a Rutherford scattering experiment the foil thickness is doubled and the alpha beam energy is halved. The count detected at a fixed angle changes by a factor of:",
          "opts": [
            { "label": "2", "nudge": "This counts the thickness and forgets the energy. Both were changed, and both changes increase the count." },
            { "label": "4", "nudge": "This counts the energy through 1/K instead of 1/K squared, and misses the thickness entirely or the other way round." },
            { "label": "8", "nudge": null },
            { "label": "16", "nudge": "This squares the thickness dependence as well. N is proportional to t itself, not to t squared: twice as many nuclei in the way means twice as much scattering, not four times." }
          ],
          "correct": 2,
          "solution": "<i>N</i> ∝ <i>t</i>/<i>K</i><sup>2</sup>. Doubling <i>t</i> doubles the count; halving <i>K</i> multiplies it by 1/(1/2)<sup>2</sup> = 4. Together, 2 × 4 = 8."
        },
        {
          "t": "mcq",
          "q": "Rutherford's nuclear model of the atom is unable to explain:",
          "opts": [
            { "label": "the large-angle scattering of alpha particles", "nudge": "That is the one thing it explains best. The model was built to account for exactly this observation." },
            { "label": "the stability of the atom", "nudge": null },
            { "label": "the small size of the nucleus", "nudge": "The model gives an upper bound on the nuclear size directly, from the distance of closest approach. That is a success, not a failure." },
            { "label": "the electrical neutrality of the atom", "nudge": "Neutrality is built in: Z electrons outside balance a charge of +Ze inside. Nothing about it is problematic." }
          ],
          "correct": 1,
          "solution": "An orbiting electron is an accelerating charge, so classically it must radiate, lose energy and spiral into the nucleus in about 10<sup>−8</sup> s. Its companion failure is the spectrum: a spiralling electron would emit a continuous smear of frequencies, but atoms emit sharp lines. Both failures come from applying classical rules inside the atom, and both are what Bohr's postulates are built to escape."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[JEE Main] Alpha particles of 6.0 MeV are scattered by gold (<i>Z</i> = 79). Find the impact parameter for a scattering angle of 60°. Take cot 30° = 1.73.",
              "a": "<i>K</i> = 9.6 × 10<sup>−13</sup> J. <i>Ze</i><sup>2</sup>/4πε<sub>0</sub> = (9.0 × 10<sup>9</sup>)(79)(2.56 × 10<sup>−38</sup>) = 1.820 × 10<sup>−26</sup>. So <i>b</i> = 1.820 × 10<sup>−26</sup> × 1.73/9.6 × 10<sup>−13</sup> = 3.3 × 10<sup>−14</sup> m."
            },
            {
              "q": "[NEET] <i>N</i> alpha particles per minute are detected at 60°. How many per minute are detected at 90°?",
              "a": "<i>N</i>/4. Since 1/sin<sup>4</sup>30° = 16 and 1/sin<sup>4</sup>45° = 4, the count at 90° is 4/16 = 1/4 of the count at 60°."
            },
            {
              "q": "[CBSE] State the two observations of the alpha-scattering experiment that Rutherford's own model cannot account for, and say in one line what each would require.",
              "a": "Neither is a scattering observation: both are failures of the model afterwards. (i) Atoms are stable, but an orbiting electron radiates and should collapse in about 10<sup>−8</sup> s, so something must forbid radiation from an orbit. (ii) Atoms emit sharp line spectra, but a spiralling electron would emit a continuous smear, so the atom's energies must come in fixed steps rather than a continuous range."
            },
            {
              "q": "[JEE Advanced] Show that the impact parameter for a 90° scatter equals half the head-on distance of closest approach, and hence find <i>b</i> at 90° for 7.7 MeV alphas on gold.",
              "a": "<i>b</i> = (<i>d</i>/2) cot(θ/2), and cot 45° = 1, so <i>b</i>(90°) = <i>d</i>/2 exactly. From Topic 01, <i>d</i> = 3.0 × 10<sup>−14</sup> m for 7.7 MeV on gold, so <i>b</i> = 1.5 × 10<sup>−14</sup> m. No new arithmetic was needed at all."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Interchanging <i>b</i> and <i>d</i>.</b> <i>b</i> is the sideways offset fixed before the encounter; <i>d</i> is the minimum separation during it. Different quantities, different formulas, and they differ by the factor 2cot(θ/2).",
            "<b>Using sin θ instead of sin(θ/2).</b> The counting law halves the angle first. Writing sin<sup>4</sup>θ turns the 90°-to-180° ratio from 4 into something undefined.",
            "<b>Squaring the thickness.</b> <i>N</i> ∝ <i>t</i>, not <i>t</i><sup>2</sup>. Twice the foil means twice as many nuclei in the path, so twice the scattering, and no more.",
            "<b>Saying Rutherford's model failed because of the scattering data.</b> It explains the scattering completely. It fails on stability and on line spectra, both of which are separate facts the experiment never touched.",
            "<b>Quoting 10<sup>−8</sup> s as a measurement.</b> It is a classical prediction of how long an atom should survive, and it is wrong by every second the universe has existed. Quoting it as if it were observed loses the mark."
          ]
        },
        {
          "t": "protip",
          "html": "keep two anchor numbers and you can do most of this topic without a calculator. sin<sup>4</sup>45° = 1/4 and sin<sup>4</sup>30° = 1/16, so the counts at 90° and 60° stand in the ratio 4 : 16, that is 1 : 4. and remember the pairing at the two ends, because half the MCQs are just that pairing read backwards: <b>big b, small bend</b>, and <b>head-on heads back</b>. if a question gives you <i>d</i> and asks for <i>b</i>, or the other way round, use <i>b</i> = (<i>d</i>/2)cot(θ/2) and never go near a constant."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "b = Ze² cot(θ/2) / 4πε₀K", "note": "Impact parameter against scattering angle. In metres." },
            { "f": "b = (d/2) cot(θ/2)", "note": "The bridge between the two lengths. No constants needed." },
            { "f": "b = 0 ⟺ θ = 180°;  b → ∞ ⟺ θ → 0°", "note": "The two ends of the geometry. Half the MCQs live here." },
            { "f": "N(θ) ∝ Z² t / K² sin⁴(θ/2)", "note": "The counting law. Counts per unit detector area." },
            { "f": "sin⁴45° = 1/4,  sin⁴30° = 1/16", "note": "The two anchors. N(90°) : N(180°) = 4 : 1." },
            { "f": "Failure 1: stability", "note": "An orbiting electron radiates and should spiral in within 10⁻⁸ s." },
            { "f": "Failure 2: line spectra", "note": "A spiralling electron gives a continuous smear, not sharp lines." }
          ],
          "aids": [
            "big b, small bend. head-on heads back. sin-four says far-few: large angles are rare.",
            "b is the aim, d is the arrival. one is set before, one is found during.",
            "rutherford's nucleus survives everything. what dies is the classical electron around it."
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Bohr's Postulates, Orbit Radius and Speed",
      "chip": "03 THE STAIRCASE",
      "kalam": "not any orbit. only certain ones, and nothing between",
      "blocks": [
        {
          "t": "p",
          "html": "By 1912 physics had a beautiful nuclear atom and a fatal problem with it, and Topic 02 ended on both. Niels Bohr, a young Dane who had worked briefly in Rutherford's lab, made a bold move in 1913. He decided that the rules of classical physics simply <b>do not apply</b> inside the atom, and wrote down new ones by hand.<br><br>That sounds like cheating, and in 1913 plenty of people said so. What made it stick was that the new rules predicted a number nobody had been able to predict, to four decimal places. We will get to that number in Topic 05. First, the rules."
        },
        {
          "t": "think",
          "html": "picture the ramp of a multi-storey car park against the staircase of the same building. on the ramp you can stop your scooter at <b>any</b> height, a continuous range. on the staircase you can only stand on a step: height 1, height 2, height 3, never half a step. classical physics treated the electron like the ramp, any orbit and any energy allowed. bohr declared the atom is a <b>staircase</b>."
        },
        {
          "t": "p",
          "html": "Which orbits are the steps? Bohr's masterstroke was to quantise the <b>angular momentum</b>, not the energy and not the radius. He postulated that an electron can only sit in an orbit where its angular momentum <i>mvr</i> is a whole-number multiple of <i>h</i>/2π.<br><br>Notice how little he assumed. One quantity, one integer, one condition. Everything else in this chapter, the radii, the speeds, the energies, the entire hydrogen spectrum, is a consequence of that single line plus ordinary Newtonian circular motion. Exams test this distinction directly, so hold on to it: angular momentum is <b>postulated</b> quantised; energy and radius are <b>derived</b>."
        },
        {
          "t": "defgrid",
          "title": "Bohr's three postulates",
          "rows": [
            { "k": "1 · Stationary orbits", "v": "An electron can occupy certain special circular orbits without radiating, whatever classical electromagnetism says." },
            { "k": "2 · Quantised L", "v": "Those orbits are the ones where the angular momentum is mvr = nh/2π, with n = 1, 2, 3, ..." },
            { "k": "3 · Transitions", "v": "Radiation is emitted or absorbed only when the electron jumps between two of these orbits, with <i>h</i>ν = <i>E</i><sub>i</sub> − <i>E</i><sub>f</sub>." },
            { "k": "n, the quantum number", "v": "The step number on the staircase. One integer fixes the orbit size, the speed and the energy at once." },
            { "k": "What is NOT assumed", "v": "Nothing is said about why the electron does not radiate. Postulate 1 asserts it, and that is the model's honest weak point." }
          ]
        },
        {
          "t": "formula",
          "kicker": "BOHR'S SECOND POSTULATE",
          "tag": "QUANTISATION OF ANGULAR MOMENTUM",
          "main": "<i>L</i> = <i>mv</i><sub>n</sub><i>r</i><sub>n</sub> = <i>nh</i>/2π",
          "legend": [
            "<i>L</i> = angular momentum of the electron about the nucleus, in kg m<sup>2</sup> s<sup>−1</sup>, which is the same as J s",
            "<i>m</i> = electron mass, 9.11 × 10<sup>−31</sup> kg",
            "<i>v</i><sub>n</sub> = orbital speed in the <i>n</i>-th orbit, in m s<sup>−1</sup>",
            "<i>r</i><sub>n</sub> = radius of the <i>n</i>-th orbit, in metres (m)",
            "<i>n</i> = principal quantum number, a positive integer with no unit",
            "<i>h</i> = Planck's constant, 6.63 × 10<sup>−34</sup> J s"
          ],
          "note": "Check that this can even be written: <i>h</i> in J s is [M L<sup>2</sup> T<sup>−2</sup>][T] = [M L<sup>2</sup> T<sup>−1</sup>], which is exactly the dimension of angular momentum. Planck's constant IS an angular momentum, and that is the whole reason Bohr could quantise with it rather than inventing a new constant."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.6 · WHAT HOLDS THE ELECTRON ON THE CIRCLE",
          "chips": ["the force balance"],
          "captions": [
            "A single electron of charge minus e on a circular orbit of radius r about a nucleus of charge plus Ze. Only one force acts: the electrostatic attraction, drawn pointing inward along the radius, with magnitude kZe squared over r squared where k is 1/4 pi epsilon-nought. The velocity is tangential, at right angles to that force, which is why the speed never changes and the orbit stays circular. Uniform circular motion needs an inward force of exactly mv squared over r, so setting the Coulomb pull equal to that requirement is the first line of the derivation. Note what is NOT in this picture: nothing is radiating. Classically the accelerating electron should be pouring out energy, and Bohr's first postulate simply forbids it."
          ],
          "frames": [
            {
              "x": [-2.2, 2.2],
              "y": [-1.7, 1.7],
              "axes": "none",
              "aspect": 0.775,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.25, "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus", "label": "+Ze" },
                { "x": 0.884, "y": 0.884, "glyph": "minus", "label": "−e" }
              ],
              "arrows": [
                { "from": [0.884, 0.884], "to": [0.3, 0.3], "tone": "amber", "label": "kZe²/r²", "at": "mid" },
                { "from": [0.884, 0.884], "to": [0.134, 1.634], "tone": "ink", "label": "v", "at": "end" }
              ],
              "segments": [
                { "from": [0, 0], "to": [-1.25, 0], "dash": true, "label": "r", "at": "mid" }
              ],
              "labels": [
                { "x": 0, "y": -1.45, "text": "mv²/r = kZe²/r²" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ORBIT RADIUS AND SPEED, FROM TWO EQUATIONS",
          "steps": [
            {
              "eq": "force balance: (1/4πε<sub>0</sub>)(<i>Ze</i>)(<i>e</i>)/<i>r</i><sup>2</sup> = <i>mv</i><sup>2</sup>/<i>r</i>",
              "why": "Circular motion needs a net inward force, from Laws of Motion, and the only force present is the electrostatic attraction from Electric Charges and Fields. This is pure classical physics: Bohr changed nothing here."
            },
            {
              "eq": "so <i>mv</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i>, call this equation (i)",
              "why": "Multiplying through by <i>r</i> tidies it into a form worth keeping, because the left side is twice the kinetic energy and the right side is the magnitude of the potential energy. Topic 04 collects that debt; here it is just a convenient grouping."
            },
            {
              "eq": "quantisation: <i>mvr</i> = <i>nh</i>/2π, so <i>v</i> = <i>nh</i>/2π<i>mr</i>",
              "why": "This is the ONLY non-classical input in the whole derivation, and it is Bohr's second postulate. Everything that follows is algebra. Solving it for <i>v</i> lets us eliminate the speed and get an equation in <i>r</i> alone."
            },
            {
              "eq": "substitute into (i): <i>m</i>(<i>nh</i>/2π<i>mr</i>)<sup>2</sup> = <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i>, that is <i>n</i><sup>2</sup><i>h</i><sup>2</sup>/4π<sup>2</sup><i>mr</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i>",
              "why": "Two equations, two unknowns, one substitution. One power of <i>r</i> cancels from each side, which is the step that makes the answer come out as a clean <i>n</i><sup>2</sup> rather than something messier."
            },
            {
              "eq": "<i>r</i><sub>n</sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup>/π<i>mZe</i><sup>2</sup> = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>, with <i>a</i><sub>0</sub> = 0.529 Å",
              "why": "The whole clump of constants is the Bohr radius, and computing it is worth doing once: (8.854 × 10<sup>−12</sup>)(6.63 × 10<sup>−34</sup>)<sup>2</sup>/(π × 9.11 × 10<sup>−31</sup> × 2.56 × 10<sup>−38</sup>) = 3.892 × 10<sup>−78</sup>/7.327 × 10<sup>−68</sup> = 5.31 × 10<sup>−11</sup> m. That is 0.53 Å, and an atom is about 1 Å across, so the model produces an atom of the right size out of nothing but <i>h</i>, <i>e</i> and the electron mass."
            },
            {
              "eq": "put <i>r</i><sub>n</sub> back into <i>v</i> = <i>nh</i>/2π<i>mr</i><sub>n</sub>: <i>v</i><sub>n</sub> = <i>Ze</i><sup>2</sup>/2ε<sub>0</sub><i>nh</i> = 2.19 × 10<sup>6</sup>(<i>Z</i>/<i>n</i>) m s<sup>−1</sup>",
              "why": "The <i>n</i><sup>2</sup> in the radius beats the <i>n</i> in the numerator, so the speed falls as 1/<i>n</i>: outer electrons move more slowly. For hydrogen's ground state that is 2.19 × 10<sup>6</sup> m s<sup>−1</sup>, which is <i>c</i>/137, so the electron is at 0.7 per cent of the speed of light and ignoring relativity is safe. It stops being safe at large <i>Z</i>, since <i>v</i> grows with <i>Z</i>."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "RADIUS OF THE n-TH ORBIT",
          "tag": "HYDROGENIC ATOM",
          "main": "<i>r</i><sub>n</sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup> / π<i>mZe</i><sup>2</sup> = <i>a</i><sub>0</sub> <i>n</i><sup>2</sup>/<i>Z</i>",
          "legend": [
            "<i>r</i><sub>n</sub> = radius of the <i>n</i>-th allowed orbit, in metres (m)",
            "<i>n</i> = principal quantum number, 1, 2, 3, ..., dimensionless",
            "<i>Z</i> = nuclear charge number, dimensionless; <i>Z</i> = 1 for hydrogen",
            "<i>a</i><sub>0</sub> = Bohr radius = 0.529 × 10<sup>−10</sup> m, the radius of hydrogen's ground orbit",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s; <i>m</i> = 9.11 × 10<sup>−31</sup> kg; ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>"
          ],
          "note": "The scaling is <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, and both halves matter. Going out from <i>n</i> = 1 to <i>n</i> = 2 quadruples the orbit; raising <i>Z</i> pulls the electron in, because a more highly charged nucleus grips harder. For fast work: 0.53, 2.12, 4.76, 8.46 Å for <i>n</i> = 1 to 4 in hydrogen."
        },
        {
          "t": "formula",
          "kicker": "ORBITAL SPEED IN THE n-TH ORBIT",
          "tag": "HYDROGENIC ATOM",
          "main": "<i>v</i><sub>n</sub> = <i>Ze</i><sup>2</sup> / 2ε<sub>0</sub><i>nh</i> = 2.19 × 10<sup>6</sup> (<i>Z</i>/<i>n</i>) m s<sup>−1</sup>",
          "legend": [
            "<i>v</i><sub>n</sub> = orbital speed of the electron in the <i>n</i>-th orbit, in metres per second (m s<sup>−1</sup>)",
            "<i>n</i> = principal quantum number, dimensionless",
            "<i>Z</i> = nuclear charge number, dimensionless",
            "<i>e</i> = 1.6 × 10<sup>−19</sup> C; <i>h</i> = 6.63 × 10<sup>−34</sup> J s; ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>"
          ],
          "note": "The scaling is <i>v</i> ∝ <i>Z</i>/<i>n</i>, the exact opposite pattern to the radius. Outer orbits are bigger AND slower. From these two, the period follows at once: <i>T</i><sub>n</sub> = 2π<i>r</i><sub>n</sub>/<i>v</i><sub>n</sub> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>, and the revolution frequency is its reciprocal."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE FIRST THREE ORBITS, DRAWN TO SCALE",
          "chips": ["radii go as n squared"],
          "captions": [
            "The n = 1, 2 and 3 orbits of hydrogen at true relative size, drawn as half circles so the whole family fits the card. Because r is proportional to n squared, the radii stand in the ratio 1 : 4 : 9, so the third orbit is nine times the first and not three times it. That is far more dramatic than the formula looks on the page, and it is why an atom excited to a high level becomes enormous: at n = 10 the orbit is a hundred times the ground-state radius, about 53 angstrom, which is bigger than most whole molecules. The nucleus at the centre is drawn far larger than scale allows; at this magnification it would be smaller than the ink."
          ],
          "frames": [
            {
              "x": [-10, 10],
              "y": [-1.6, 10],
              "axes": "none",
              "aspect": 0.62,
              "arcs": [
                { "at": [0, 0], "r": 1, "from": 0, "to": 180, "label": "n=1, 0.53 Å", "tone": "amber" },
                { "at": [0, 0], "r": 4, "from": 0, "to": 180, "label": "n=2, 2.12 Å", "tone": "soft" },
                { "at": [0, 0], "r": 9, "from": 0, "to": 180, "label": "n=3, 4.76 Å", "tone": "soft" }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "segments": [
                { "from": [-9.6, 0], "to": [9.6, 0], "soft": true }
              ],
              "labels": [
                { "x": 0, "y": -1.0, "text": "nucleus" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Principal quantum number",
          "html": "The integer <i>n</i> = 1, 2, 3, ... that labels an allowed orbit. It is the step number on the staircase, and it is the only knob in the model: fix <i>n</i> and you have fixed the radius, the speed, the period and, in Topic 04, the energy. <i>n</i> = 1 is called the <b>ground state</b> and everything above it an <b>excited state</b>. It enters as a count of quanta of angular momentum, which is why it must be a whole number and can never be zero: <i>n</i> = 0 would mean no angular momentum and no orbit at all."
        },
        {
          "t": "def",
          "term": "Hydrogenic atom",
          "html": "Any atom or ion with exactly <b>one</b> electron moving round a nucleus of charge +<i>Ze</i>: H (<i>Z</i> = 1), He<sup>+</sup> (<i>Z</i> = 2), Li<sup>2+</sup> (<i>Z</i> = 3), Be<sup>3+</sup> (<i>Z</i> = 4), and so on. Every Bohr formula below is written for a hydrogenic atom, with <i>Z</i> carried explicitly, and every one of them is <b>wrong</b> for anything else, because a second electron brings a repulsion the model has no room for."
        },
        {
          "t": "p",
          "html": "That restriction is not a technicality, and it is where most marks are lost. The formulas carry <i>Z</i> in three different powers: <i>r</i> goes as 1/<i>Z</i>, <i>v</i> goes as <i>Z</i>, and the energy of Topic 04 goes as <i>Z</i><sup>2</sup>. Treating He<sup>+</sup> or Li<sup>2+</sup> as if it were hydrogen is the single most common error in the whole chapter.<br><br>And the model applies to <b>none</b> of neutral helium, lithium or sodium. Not approximately, not with a correction: the moment there are two electrons, they repel each other, the potential is no longer a clean 1/<i>r</i>, and −13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> does not apply at all."
        },
        {
          "t": "proc",
          "title": "Any radius, speed or period question, in four moves",
          "steps": [
            "<b>Identify the species and read off <i>Z</i>.</b> H is 1, He<sup>+</sup> is 2, Li<sup>2+</sup> is 3, Be<sup>3+</sup> is 4. The charge on the ion tells you: an ion of charge +(<i>Z</i> − 1) with one electron left has nuclear charge <i>Z</i>.",
            "<b>Check it is hydrogenic at all.</b> Count the electrons. One electron, use Bohr. Two or more, the model does not apply and no amount of algebra will rescue it.",
            "<b>Write the scaling before the number.</b> <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>v</i> ∝ <i>Z</i>/<i>n</i>, <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>. Most questions never need the anchors at all.",
            "<b>Attach the anchor only if an absolute value is wanted.</b> <i>a</i><sub>0</sub> = 0.529 Å and <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup> for hydrogen's ground state. Multiply by the scaling factor and stop.",
            "<b>Sanity-check the size.</b> A radius should land between about 0.1 Å and a few tens of angstrom, and a speed below about 10<sup>7</sup> m s<sup>−1</sup>. A speed near <i>c</i> means you have inverted the <i>Z</i>/<i>n</i>."
          ]
        },
        {
          "t": "think",
          "html": "the period is worth a moment. <i>T</i> ∝ <i>n</i><sup>3</sup>, so moving from <i>n</i> = 1 to <i>n</i> = 2 makes the orbit four times bigger and the trip round it eight times longer. the electron in a highly excited atom is dawdling round an enormous loop, which is exactly the picture you want when topic 05 tells you the high levels crowd together."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "For a hydrogen atom, find (a) the radius of the <i>n</i> = 3 orbit and (b) the orbital speed there. Take <i>a</i><sub>0</sub> = 0.529 Å and <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>.",
          "steps": [
            "(a) <i>r</i><sub>n</sub> = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i> with <i>Z</i> = 1 and <i>n</i> = 3.",
            "<i>r</i><sub>3</sub> = 0.529 × 9/1 = 4.76 Å = 4.76 × 10<sup>−10</sup> m.",
            "(b) <i>v</i><sub>n</sub> = 2.19 × 10<sup>6</sup>(<i>Z</i>/<i>n</i>) = 2.19 × 10<sup>6</sup> × (1/3).",
            "<i>v</i><sub>3</sub> = 7.30 × 10<sup>5</sup> m s<sup>−1</sup>."
          ],
          "ans": "<i>r</i><sub>3</sub> ≈ 4.76 Å and <i>v</i><sub>3</sub> ≈ 7.3 × 10<sup>5</sup> m s<sup>−1</sup>. Nine times the ground-state radius and a third of the ground-state speed, exactly as the two scalings promise."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Among H, He<sup>+</sup> and Li<sup>2+</sup>, which has the smallest first-orbit (<i>n</i> = 1) radius, and by what factor is it smaller than hydrogen's?",
          "steps": [
            "The trap is the instinct that a bigger element means a bigger orbit. It is exactly backwards here.",
            "At fixed <i>n</i>, <i>r</i> = <i>a</i><sub>0</sub>/<i>Z</i>, so the radius falls as <i>Z</i> rises.",
            "H (<i>Z</i> = 1): 0.529 Å. He<sup>+</sup> (<i>Z</i> = 2): 0.265 Å. Li<sup>2+</sup> (<i>Z</i> = 3): 0.176 Å."
          ],
          "ans": "Li<sup>2+</sup> is smallest, at one third of hydrogen's radius. A more highly charged nucleus pulls its single electron in tighter, so among hydrogenic species more charge always means a smaller atom."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "Find the period of revolution of the electron in the ground state of hydrogen, and hence the number of revolutions it makes per second. By what factor does the period change on moving to <i>n</i> = 2?",
          "steps": [
            "<i>T</i> = 2π<i>r</i><sub>1</sub>/<i>v</i><sub>1</sub>, with <i>r</i><sub>1</sub> = 0.529 × 10<sup>−10</sup> m and <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>.",
            "Numerator: 2π × 0.529 × 10<sup>−10</sup> = 3.324 × 10<sup>−10</sup> m.",
            "<i>T</i> = 3.324 × 10<sup>−10</sup>/2.19 × 10<sup>6</sup> = 1.52 × 10<sup>−16</sup> s.",
            "Frequency = 1/<i>T</i> = 6.6 × 10<sup>15</sup> revolutions per second.",
            "<i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>, so from <i>n</i> = 1 to <i>n</i> = 2 the factor is 2<sup>3</sup> = 8."
          ],
          "ans": "<i>T</i> ≈ 1.5 × 10<sup>−16</sup> s, about 6.6 × 10<sup>15</sup> revolutions each second, and the period is 8 times longer at <i>n</i> = 2. That middle figure is worth pausing on: the electron goes round more times in one second than there are seconds in two hundred million years."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Compare the <i>n</i> = 2 orbit of He<sup>+</sup> with the <i>n</i> = 1 orbit of hydrogen. Find the ratio of the radii, of the speeds and of the periods, without computing any absolute value.",
          "steps": [
            "He<sup>+</sup> has one electron and <i>Z</i> = 2, so it is hydrogenic and the formulas apply.",
            "Radii: <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>. He<sup>+</sup> gives 4/2 = 2; H gives 1/1 = 1. Ratio 2 : 1.",
            "Speeds: <i>v</i> ∝ <i>Z</i>/<i>n</i>. He<sup>+</sup> gives 2/2 = 1; H gives 1/1 = 1. Ratio 1 : 1.",
            "Periods: <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>. He<sup>+</sup> gives 8/4 = 2; H gives 1. Ratio 2 : 1.",
            "Cross-check: <i>T</i> = 2π<i>r</i>/<i>v</i>, and 2/1 = 2, which agrees."
          ],
          "ans": "Twice the radius, the same speed, twice the period. The equal speeds are the interesting part: <i>Z</i>/<i>n</i> is 1 for both, so the electron in He<sup>+</sup> at <i>n</i> = 2 moves at exactly the ground-state speed of hydrogen. Anything with <i>Z</i> = <i>n</i> does."
        },
        {
          "t": "mcq",
          "q": "Bohr's second postulate <b>directly</b> quantises the electron's:",
          "opts": [
            { "label": "energy", "nudge": "The energy is quantised too, but as a CONSEQUENCE. It comes out at the end of the derivation, several steps after the postulate." },
            { "label": "angular momentum", "nudge": null },
            { "label": "speed", "nudge": "Also quantised as a consequence, since v depends on n. But nothing in the postulate mentions speed at all." },
            { "label": "orbital radius", "nudge": "Derived, not postulated. The radius comes from combining the postulate with the classical force balance, which is two ingredients, not one." }
          ],
          "correct": 1,
          "solution": "The postulate says <i>mvr</i> = <i>nh</i>/2π and nothing else. Everything else in the model, radius, speed, period and energy, follows from it plus classical circular motion. This is a favourite discriminator between understanding the model and memorising its results."
        },
        {
          "t": "mcq",
          "q": "The angular momentum of the electron in the <i>n</i> = 3 orbit of a hydrogen atom is:",
          "opts": [
            { "label": "h/2π", "nudge": "That is the ground-state value, n = 1. The postulate makes L proportional to n, so the third orbit carries three times as much." },
            { "label": "3h/2π", "nudge": null },
            { "label": "9h/2π", "nudge": "This uses n squared, borrowing the radius scaling. Angular momentum goes as n itself: that is exactly what the postulate says." },
            { "label": "3h/4π", "nudge": "This halves the answer, probably by confusing h/2π with h/4π. The postulate is nh/2π, with a 2 in the denominator." }
          ],
          "correct": 1,
          "solution": "<i>L</i> = <i>nh</i>/2π directly from the postulate, so <i>n</i> = 3 gives 3<i>h</i>/2π. Notice that <i>Z</i> does not appear: the angular momentum of the third orbit is the same in hydrogen, He<sup>+</sup> and Li<sup>2+</sup>, even though the radii and speeds are all different."
        },
        {
          "t": "mcq",
          "q": "Among H, He<sup>+</sup> and Li<sup>2+</sup>, the smallest first-orbit (<i>n</i> = 1) radius belongs to:",
          "opts": [
            { "label": "H", "nudge": "This follows the instinct that a bigger element must have a bigger orbit. For hydrogenic ions it is the reverse: more nuclear charge grips the one electron harder." },
            { "label": "He⁺", "nudge": "Smaller than hydrogen, yes, but not the smallest of the three. Keep going up in Z." },
            { "label": "Li²⁺", "nudge": null },
            { "label": "all three are equal", "nudge": "This ignores the Z-dependence entirely. If radius did not depend on Z, the Bohr radius could not be a property of hydrogen in particular." }
          ],
          "correct": 2,
          "solution": "At fixed <i>n</i>, <i>r</i> = <i>a</i><sub>0</sub><i>n</i><sup>2</sup>/<i>Z</i>, so the largest <i>Z</i> gives the smallest orbit. Li<sup>2+</sup> with <i>Z</i> = 3 has a first-orbit radius of 0.529/3 = 0.176 Å."
        },
        {
          "t": "mcq",
          "q": "The orbital speed of the electron in the <i>n</i> = 2 orbit of He<sup>+</sup>, compared with the <i>n</i> = 1 orbit of hydrogen, is:",
          "opts": [
            { "label": "the same", "nudge": null },
            { "label": "twice as large", "nudge": "This counts the doubled Z and forgets that n doubled too. The two changes cancel." },
            { "label": "half as large", "nudge": "This counts the doubled n and forgets the doubled Z. Again, the two changes cancel." },
            { "label": "four times as large", "nudge": "This uses Z squared, borrowing the ENERGY scaling. The speed goes as Z to the first power only." }
          ],
          "correct": 0,
          "solution": "<i>v</i> ∝ <i>Z</i>/<i>n</i>. For He<sup>+</sup> at <i>n</i> = 2 that ratio is 2/2 = 1, and for hydrogen at <i>n</i> = 1 it is 1/1 = 1. Equal speeds, both 2.19 × 10<sup>6</sup> m s<sup>−1</sup>. Any hydrogenic state with <i>Z</i> = <i>n</i> shares hydrogen's ground-state speed, and Topic 04 will show it shares the energy too."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the radius and the orbital speed of the electron in the <i>n</i> = 2 orbit of a hydrogen atom.",
              "a": "<i>r</i><sub>2</sub> = 0.529 × 4/1 = 2.12 Å = 2.12 × 10<sup>−10</sup> m. <i>v</i><sub>2</sub> = 2.19 × 10<sup>6</sup> × (1/2) = 1.10 × 10<sup>6</sup> m s<sup>−1</sup>."
            },
            {
              "q": "[NEET] Find the ratio of the orbital speeds of the electron in the <i>n</i> = 1 and <i>n</i> = 3 orbits of hydrogen.",
              "a": "<i>v</i> ∝ 1/<i>n</i> at fixed <i>Z</i>, so <i>v</i><sub>1</sub> : <i>v</i><sub>3</sub> = 3 : 1. No constants needed."
            },
            {
              "q": "[JEE Main] By what factor does the period of revolution change when a hydrogen electron moves from the <i>n</i> = 1 to the <i>n</i> = 2 orbit?",
              "a": "<i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup> and <i>Z</i> is unchanged, so the factor is 2<sup>3</sup> = 8. The period gets eight times longer. Equivalently, the revolution frequency drops to one eighth."
            },
            {
              "q": "[JEE Advanced] A hydrogenic ion has its <i>n</i> = 3 orbit at exactly the same radius as hydrogen's <i>n</i> = 1 orbit. Identify <i>Z</i>, and find the ratio of the two orbital speeds.",
              "a": "<i>a</i><sub>0</sub> × 9/<i>Z</i> = <i>a</i><sub>0</sub> × 1/1 gives <i>Z</i> = 9, which is F<sup>8+</sup>, a fluorine nucleus with one electron. Speeds: <i>v</i> ∝ <i>Z</i>/<i>n</i>, so the ion gives 9/3 = 3 against hydrogen's 1. The ion's electron moves three times faster round the same-sized orbit, and its period is therefore one third."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the <i>Z</i> for ions.</b> The formulas carry 1/<i>Z</i> in the radius, <i>Z</i> in the speed and <i>Z</i><sup>2</sup> in the energy. Treating He<sup>+</sup> or Li<sup>2+</sup> like hydrogen is the single most common error in the chapter.",
            "<b>Using Bohr on a multi-electron atom.</b> Neutral He, Li or Na have more than one electron, so electron-electron repulsion breaks the model completely. Applying it there earns zero, however tidy the arithmetic.",
            "<b>Confusing what is postulated with what is derived.</b> Angular momentum is postulated quantised. Radius, speed and energy are consequences. Exam MCQs test exactly this distinction.",
            "<b>Getting the <i>Z</i>-direction of the radius backwards.</b> More nuclear charge means a SMALLER orbit, not a bigger one, because the pull is stronger. Li<sup>2+</sup> is smaller than hydrogen, not larger.",
            "<b>Mixing up the <i>n</i>-powers.</b> Radius goes as <i>n</i><sup>2</sup>, speed as 1/<i>n</i>, period as <i>n</i><sup>3</sup>, angular momentum as <i>n</i>. Four different powers of the same integer, and swapping any two is a whole mark."
          ]
        },
        {
          "t": "protip",
          "html": "memorise three scalings and two anchors, then everything in this topic is a division. scalings: <i>r</i> ∝ <i>n</i><sup>2</sup>/<i>Z</i>, <i>v</i> ∝ <i>Z</i>/<i>n</i>, <i>T</i> ∝ <i>n</i><sup>3</sup>/<i>Z</i><sup>2</sup>. anchors: <i>a</i><sub>0</sub> = 0.53 Å and <i>v</i><sub>1</sub> = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>. for a comparison question never compute fully, just divide. and one caution for later: if you ever meet muonic hydrogen or an isotope shift, the only change is that the electron mass is replaced by the reduced mass of the two-body system, and every formula above then follows the new mass through unchanged. that is the whole of what JEE Advanced asks about the correction."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "mvr = nh/2π", "note": "Bohr's second postulate. The ONE non-classical input." },
            { "f": "kZe²/r² = mv²/r", "note": "Force balance. Pure classical circular motion." },
            { "f": "rₙ = a₀n²/Z,  a₀ = 0.529 Å", "note": "Radius. Grows as n², shrinks as 1/Z." },
            { "f": "vₙ = 2.19 × 10⁶ (Z/n) m/s", "note": "Speed. Grows as Z, falls as 1/n. v₁ = c/137." },
            { "f": "Tₙ ∝ n³/Z²", "note": "Period. T₁ = 1.5 × 10⁻¹⁶ s for hydrogen." },
            { "f": "L = nh/2π, independent of Z", "note": "The one quantity that does not care which nucleus it is." },
            { "f": "One electron only", "note": "H, He⁺, Li²⁺, Be³⁺. Never neutral helium." }
          ],
          "aids": [
            "radius rises as n squared, speed falls as one over n. bigger orbits, slower electrons.",
            "angular momentum is postulated. radius, speed and energy are earned.",
            "z pulls in and n pushes out. if a number moves the wrong way, you have swapped them."
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Energy Levels, Ionisation and the Standing Wave",
      "chip": "04 THE LADDER",
      "kalam": "negative means held. the deeper the number, the tighter the grip",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 03 got the size of each orbit and the speed in it. Neither of those is what a spectrum measures. What a spectrum measures is <b>energy</b>, and the energy is where the whole model pays off.<br><br>The two pieces are already in hand. The electron is moving, so it has kinetic energy. It is held by an attraction, so it has potential energy. Add them, substitute the radius from Topic 03, and one number falls out that a student will carry for the rest of physics."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE ENERGY OF THE n-TH LEVEL",
          "steps": [
            {
              "eq": "from the force balance, <i>mv</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i>, so KE = ½<i>mv</i><sup>2</sup> = <i>Ze</i><sup>2</sup>/8πε<sub>0</sub><i>r</i>",
              "why": "This is equation (i) of Topic 03 halved. Notice that we never needed to know <i>v</i> itself: the force balance hands the kinetic energy over directly in terms of <i>r</i>, which is what we are about to substitute for."
            },
            {
              "eq": "PE = −<i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i>, with the zero taken at infinite separation",
              "why": "The potential energy of two point charges, from Electric Charges and Fields, with one charge −<i>e</i> and the other +<i>Ze</i>. The product of the charges is negative, so the potential energy is negative, and the convention that fixes that sign is the zero at infinity: as the electron is dragged out to infinity the potential energy rises to zero."
            },
            {
              "eq": "<i>E</i> = KE + PE = <i>Ze</i><sup>2</sup>/8πε<sub>0</sub><i>r</i> − <i>Ze</i><sup>2</sup>/4πε<sub>0</sub><i>r</i> = −<i>Ze</i><sup>2</sup>/8πε<sub>0</sub><i>r</i>",
              "why": "The potential term is twice the kinetic term and opposite in sign, so the sum is exactly minus the kinetic energy. Read that again, because it is the whole sign story: <i>E</i> = −KE. The total is negative for every orbit, and the electron is bound."
            },
            {
              "eq": "substitute <i>r</i><sub>n</sub> = ε<sub>0</sub><i>n</i><sup>2</sup><i>h</i><sup>2</sup>/π<i>mZe</i><sup>2</sup>: <i>E</i><sub>n</sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>",
              "why": "One substitution, and the radius disappears. What is left contains nothing but fundamental constants, <i>Z</i> and <i>n</i>. That is the moment the model stops being a picture and starts being a prediction."
            },
            {
              "eq": "evaluating the constants: <i>E</i><sub>1</sub> for hydrogen = −13.6 eV",
              "why": "Do it once rather than trusting it. The cleanest route is <i>E</i><sub>1</sub> = −<i>e</i><sup>2</sup>/8πε<sub>0</sub><i>a</i><sub>0</sub> = −(1.6 × 10<sup>−19</sup>)<sup>2</sup>/(8π × 8.854 × 10<sup>−12</sup> × 5.29 × 10<sup>−11</sup>) = −2.56 × 10<sup>−38</sup>/1.177 × 10<sup>−20</sup> = −2.175 × 10<sup>−18</sup> J. Dividing by 1.6 × 10<sup>−19</sup> gives −13.6 eV. With unrounded constants the same expression gives −13.606 eV."
            },
            {
              "eq": "so <i>E</i><sub>n</sub> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV",
              "why": "The working form, and the one every exam question is built on. For hydrogen: −13.6, −3.40, −1.51, −0.85, −0.54, −0.38 eV for <i>n</i> = 1 to 6. Those six numbers are worth knowing cold, because Topic 05's entire spectrum is differences between them."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "ENERGY OF THE n-TH LEVEL",
          "tag": "HYDROGENIC ATOM",
          "main": "<i>E</i><sub>n</sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup> / 8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup> = −13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV",
          "legend": [
            "<i>E</i><sub>n</sub> = total energy of the atom in the <i>n</i>-th state, in joules (J), quoted in electronvolts where 1 eV = 1.6 × 10<sup>−19</sup> J",
            "<i>n</i> = principal quantum number, dimensionless",
            "<i>Z</i> = nuclear charge number, dimensionless",
            "<i>m</i> = 9.11 × 10<sup>−31</sup> kg; <i>e</i> = 1.6 × 10<sup>−19</sup> C",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s; ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>"
          ],
          "note": "The scaling is <i>E</i> ∝ <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, so any state with <i>Z</i> = <i>n</i> has exactly −13.6 eV: He<sup>+</sup> at <i>n</i> = 2, Li<sup>2+</sup> at <i>n</i> = 3, Be<sup>3+</sup> at <i>n</i> = 4. That shortcut answers a whole family of MCQs without arithmetic."
        },
        {
          "t": "p",
          "html": "Now the sign, because it is the most misread thing in the chapter.<br><br>We put the zero of energy at <b>infinite separation</b>, which is where a free electron and a bare nucleus sit with nothing between them. Every bound state therefore has energy <b>below</b> zero, and the more tightly bound the electron is, the further below zero it sits. So −13.6 eV is <b>deeper</b> than −3.4 eV. The ground state is the most negative number in the list, and it is the hardest state to escape from, and those are the same statement.<br><br>Students constantly say the <i>n</i> = 2 level is \"lower\" than <i>n</i> = 1 because 3.4 is a smaller number than 13.6. It is not. Read the minus sign."
        },
        {
          "t": "think",
          "html": "think of a well rather than a ladder. ground level is zero: that is infinity, where the electron is free. every bound state is a depth <b>down</b> the well, and −13.6 eV is thirteen point six units below the rim. climbing out costs you exactly that. so a more negative number means a deeper hole and a harder climb, and \"lower energy\" and \"more tightly bound\" are the same words."
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE 12.5 · THE HYDROGEN ENERGY LADDER",
          "chips": ["the rungs", "the gaps shrink"],
          "captions": [
            "The allowed energies of a hydrogen atom, drawn at true spacing on a scale of minus one over n squared. The ground state sits at the bottom at −13.6 eV, and the dashed line at the top is E = 0, which means the electron has been pulled free: that is ionisation. The upward arrow is the 13.6 eV it costs to make that journey from the ground state. Notice how unevenly the rungs are spaced. The first gap swallows three quarters of the whole well, and everything from n = 4 upward is crushed into the last six per cent of it.",
            "The same ladder with n = 5 and n = 6 added and the first three gaps marked. From n = 1 to n = 2 costs 10.2 eV; from n = 2 to n = 3 costs only 1.89 eV; from n = 3 to n = 4 costs 0.66 eV. The gaps are collapsing, because E goes as minus one over n squared and the difference between consecutive levels falls away as roughly two over n cubed. This crowding is not decoration: in Topic 05 it becomes the reason every spectral series piles up at a limit instead of running on forever with evenly spaced lines."
          ],
          "frames": [
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3", "right": "−1.51 eV" },
                  { "at": 4, "label": "n = 4", "right": "−0.85 eV" },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 1, "to": 1000, "label": "13.6 eV", "tone": "amber" }
                ]
              }
            },
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3" },
                  { "at": 4 },
                  { "at": 5 },
                  { "at": 6 },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 2, "to": 1, "label": "10.2 eV", "tone": "amber" },
                  { "from": 3, "to": 2, "label": "1.89 eV", "tone": "amber" },
                  { "from": 4, "to": 3, "tone": "amber" }
                ]
              }
            }
          ]
        },
        {
          "t": "def",
          "term": "Stationary state",
          "html": "One of the allowed orbits, in which the atom has a definite energy <i>E</i><sub>n</sub> and emits <b>no</b> radiation, however long it stays there. \"Stationary\" refers to the energy being fixed, not to the electron standing still. Radiation appears only when the atom moves between two stationary states, and it is emitted as a single lump of energy, a photon, of exactly the size of the gap. The photon and the relation <i>E</i> = <i>h</i>ν belong to Chapter 11, Dual Nature of Radiation and Matter; here they are used as given."
        },
        {
          "t": "formula",
          "kicker": "HOW THE ENERGY SPLITS",
          "tag": "THE VIRIAL RELATIONS",
          "main": "KE = −<i>E</i><sub>n</sub> = +13.6 <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV,  PE = 2<i>E</i><sub>n</sub> = −2 × KE",
          "legend": [
            "KE = kinetic energy of the orbiting electron, always POSITIVE, in eV or joules (J)",
            "PE = electrostatic potential energy of the electron and nucleus, always NEGATIVE, in eV or joules (J)",
            "<i>E</i><sub>n</sub> = KE + PE, the total energy, always negative for a bound state, in eV or joules (J)",
            "<i>n</i>, <i>Z</i> = quantum number and nuclear charge number, both dimensionless"
          ],
          "note": "Three numbers, one independent. For hydrogen's ground state: KE = +13.6 eV, PE = −27.2 eV, total = −13.6 eV. The pattern PE = 2<i>E</i> = −2KE holds for any inverse-square attraction, which is why the same relation turns up for satellites in Gravitation."
        },
        {
          "t": "p",
          "html": "Two words get confused constantly, and they are worth pinning down before any numerical work.<br><br><b>Excitation</b> lifts the electron from the ground state to a higher <b>bound</b> level. It still belongs to the atom afterwards. The cost is the gap: 10.2 eV to reach <i>n</i> = 2 in hydrogen, 12.09 eV to reach <i>n</i> = 3.<br><br><b>Ionisation</b> removes the electron altogether, taking it to <i>n</i> = ∞ where <i>E</i> = 0. The cost from the ground state is the full 13.6 eV. Notice that it is only a little more than the second excitation energy, because the levels have already crowded so tightly near the top."
        },
        {
          "t": "formula",
          "kicker": "IONISATION AND EXCITATION",
          "tag": "FROM THE GROUND STATE",
          "main": "<i>E</i><sub>ion</sub> = 13.6 <i>Z</i><sup>2</sup> eV,  <i>E</i><sub>exc</sub> = 13.6 <i>Z</i><sup>2</sup>(1 − 1/<i>n</i><sup>2</sup>) eV",
          "legend": [
            "<i>E</i><sub>ion</sub> = energy needed to take the electron from <i>n</i> = 1 out to <i>n</i> = ∞, in electronvolts (eV)",
            "<i>E</i><sub>exc</sub> = energy needed to lift it from <i>n</i> = 1 to the bound level <i>n</i>, in electronvolts (eV)",
            "<i>n</i> = the destination level, dimensionless",
            "<i>Z</i> = nuclear charge number, dimensionless"
          ],
          "note": "The corresponding <b>potentials</b> are the same numbers in volts, because an electron accelerated through <i>V</i> volts gains <i>V</i> electronvolts. So hydrogen's ionisation potential is 13.6 V and its first excitation potential is 10.2 V, and to ionise from a level <i>n</i> rather than the ground state simply costs |<i>E</i><sub>n</sub>| = 13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV."
        },
        {
          "t": "defgrid",
          "title": "Hydrogen, level by level",
          "rows": [
            { "k": "n = 1 (ground)", "v": "E = −13.6 eV. KE = +13.6, PE = −27.2. Needs 13.6 eV to free." },
            { "k": "n = 2", "v": "E = −3.40 eV. Reached from the ground state for 10.2 eV." },
            { "k": "n = 3", "v": "E = −1.51 eV. Reached from the ground state for 12.09 eV." },
            { "k": "n = 4", "v": "E = −0.85 eV. Only 0.85 eV from being free." },
            { "k": "n = ∞", "v": "E = 0. The electron is free and its energy is no longer quantised." },
            { "k": "Any Z = n state", "v": "E = −13.6 eV exactly. He⁺ at n = 2, Li²⁺ at n = 3, Be³⁺ at n = 4." }
          ]
        },
        {
          "t": "p",
          "html": "One question has been hanging over the whole model. <b>Why</b> is the angular momentum quantised? Bohr had no answer in 1913; he simply asserted it and let the results argue for him.<br><br>Louis de Broglie supplied the answer eleven years later. If the electron is also a wave, with wavelength λ = <i>h</i>/<i>mv</i>, then an orbit is a loop that a wave has to fit into. Only a loop whose circumference is a <b>whole number</b> of wavelengths lets the wave meet itself in step and survive as a steady standing wave. Any other loop has the wave arriving back out of step with itself, interfering destructively, and cancelling out.<br><br>The relation and that picture belong to Chapter 11, Dual Nature of Radiation and Matter, which sets both out in full. What this chapter can add, because it is the one that knows the orbit sizes, is the arithmetic: put real numbers into 2π<i>r</i> = <i>n</i>λ for a real hydrogen orbit and check whether the wavelengths actually fit. They do, exactly, and the worked example below is that check."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE POSTULATE, EXPLAINED",
          "steps": [
            {
              "eq": "the electron has a wavelength λ = <i>h</i>/<i>mv</i>",
              "why": "The de Broglie relation, from Chapter 11, Dual Nature of Radiation and Matter. It is used here as given, since nothing in this chapter derives it. For the <i>n</i> = 1 electron in hydrogen it works out at about 3.3 Å, which is comparable with the orbit itself, and that is precisely why wave behaviour cannot be ignored inside an atom."
            },
            {
              "eq": "a steady standing wave on a closed loop needs a whole number of wavelengths: 2π<i>r</i><sub>n</sub> = <i>n</i>λ",
              "why": "The same condition that fixes which notes a tabla skin or a guitar string can sound, from Waves. On a loop, the wave has to arrive back at its starting point in step with itself; if it does not, it interferes with itself on every circuit and dies away. So <i>n</i> is a count of wavelengths and is necessarily a whole number."
            },
            {
              "eq": "substitute: 2π<i>r</i><sub>n</sub> = <i>nh</i>/<i>mv</i>",
              "why": "Nothing but replacing λ. Everything on the right is now the quantities that appear in Bohr's postulate, so the next step is a rearrangement rather than a new idea."
            },
            {
              "eq": "rearranging, <i>mvr</i><sub>n</sub> = <i>nh</i>/2π",
              "why": "This is Bohr's second postulate, exactly, arrived at from a wave condition instead of asserted. The staircase of allowed orbits is really the set of resonances of a wave on a loop, and the integer <i>n</i> was never mysterious: it is how many wavelengths go round."
            },
            {
              "eq": "check it on <i>n</i> = 2 of hydrogen: <i>v</i><sub>2</sub> = 1.095 × 10<sup>6</sup> m s<sup>−1</sup>, λ = 6.65 Å, 2π<i>r</i><sub>2</sub> = 2π(2.12) = 13.3 Å",
              "why": "13.3 Å is 2 × 6.65 Å exactly, so precisely two wavelengths fit the second orbit. Not approximately two, and not two and a bit. The wave picture and the quantisation rule are the same statement, and this arithmetic is the check that they are."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.7 · WHY ONLY WHOLE NUMBERS FIT",
          "chips": ["n = 4 closes", "not allowed"],
          "captions": [
            "An electron wave wrapped round the n = 4 orbit, drawn as a wave whose distance from the dashed circle rises and falls as it goes round. Exactly four full wavelengths fit the circumference, so after one complete circuit the wave arrives back at its starting point in step with itself, crest meeting crest. It reinforces itself on every circuit and stands there indefinitely. This is what Bohr's second postulate means physically: n counts wavelengths.",
            "The same orbit with a wave whose wavelength is slightly wrong, so that 3.4 wavelengths would fit rather than a whole number. Follow it round once and it comes back OUT of step with where it started: the open circle is where it began and the filled one is where it arrives. On the next circuit it is more out of step still, and after many circuits every phase is present at once and the whole thing cancels to nothing. An orbit like this cannot hold a steady electron wave, which is why it is not an allowed orbit at all."
          ],
          "frames": [
            {
              "x": [-2.6, 2.6],
              "y": [-1.9, 1.9],
              "axes": "none",
              "aspect": 0.735,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.3, "dash": true, "soft": true },
                { "c": "pts", "smooth": true, "pts": [[1.3, 0.0], [1.369, 0.118], [1.419, 0.247], [1.44, 0.38], [1.427, 0.512], [1.379, 0.633], [1.299, 0.738], [1.192, 0.82], [1.068, 0.879], [0.936, 0.916], [0.805, 0.936], [0.682, 0.948], [0.572, 0.958], [0.474, 0.977], [0.387, 1.01], [0.304, 1.059], [0.221, 1.125], [0.13, 1.201], [0.028, 1.281], [-0.087, 1.353], [-0.214, 1.409], [-0.347, 1.437], [-0.479, 1.433], [-0.604, 1.394], [-0.713, 1.322], [-0.802, 1.221], [-0.866, 1.1], [-0.908, 0.969], [-0.932, 0.837], [-0.945, 0.712], [-0.955, 0.598], [-0.971, 0.498], [-1.0, 0.408], [-1.045, 0.325], [-1.107, 0.242], [-1.181, 0.153], [-1.261, 0.054], [-1.336, -0.058], [-1.397, -0.181], [-1.433, -0.313], [-1.438, -0.447], [-1.407, -0.574], [-1.343, -0.688], [-1.248, -0.782], [-1.132, -0.852], [-1.002, -0.9], [-0.87, -0.928], [-0.742, -0.943], [-0.625, -0.953], [-0.522, -0.966], [-0.43, -0.991], [-0.345, -1.032], [-0.263, -1.09], [-0.176, -1.162], [-0.08, -1.241], [0.028, -1.319], [0.149, -1.384], [0.28, -1.427], [0.414, -1.44], [0.543, -1.418], [0.661, -1.362], [0.76, -1.274], [0.837, -1.162], [0.89, -1.035], [0.922, -0.903], [0.94, -0.773], [0.95, -0.653], [0.962, -0.546], [0.984, -0.452], [1.02, -0.366], [1.074, -0.284], [1.143, -0.199], [1.221, -0.105], [1.3, 0.0]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "labels": [
                { "x": 0, "y": -1.72, "text": "four waves fit exactly" }
              ]
            },
            {
              "x": [-2.6, 2.6],
              "y": [-1.9, 1.9],
              "axes": "none",
              "aspect": 0.735,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.3, "dash": true, "soft": true },
                { "c": "pts", "smooth": true, "pts": [[1.3, 0.0], [1.358, 0.117], [1.401, 0.243], [1.421, 0.375], [1.414, 0.507], [1.38, 0.634], [1.319, 0.749], [1.232, 0.847], [1.126, 0.926], [1.006, 0.984], [0.878, 1.021], [0.75, 1.041], [0.625, 1.048], [0.509, 1.048], [0.401, 1.046], [0.301, 1.049], [0.208, 1.06], [0.117, 1.081], [0.024, 1.113], [-0.074, 1.152], [-0.181, 1.195], [-0.298, 1.234], [-0.423, 1.265], [-0.555, 1.28], [-0.688, 1.275], [-0.817, 1.245], [-0.936, 1.189], [-1.039, 1.109], [-1.122, 1.007], [-1.18, 0.889], [-1.214, 0.76], [-1.225, 0.627], [-1.216, 0.496], [-1.193, 0.371], [-1.162, 0.254], [-1.13, 0.147], [-1.102, 0.047], [-1.082, -0.047], [-1.073, -0.139], [-1.074, -0.235], [-1.082, -0.336], [-1.094, -0.446], [-1.104, -0.565], [-1.105, -0.692], [-1.092, -0.822], [-1.06, -0.952], [-1.007, -1.074], [-0.931, -1.182], [-0.834, -1.27], [-0.72, -1.334], [-0.594, -1.371], [-0.462, -1.38], [-0.329, -1.365], [-0.202, -1.328], [-0.083, -1.277], [0.026, -1.217], [0.125, -1.155], [0.215, -1.097], [0.301, -1.048], [0.386, -1.009], [0.475, -0.979], [0.571, -0.958], [0.676, -0.939], [0.79, -0.919], [0.91, -0.891], [1.033, -0.85], [1.152, -0.793], [1.262, -0.717], [1.355, -0.622], [1.425, -0.511], [1.469, -0.388], [1.484, -0.258], [1.47, -0.127], [1.429, 0.0]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus" }
              ],
              "points": [
                { "x": 1.3, "y": 0, "open": true, "label": "start", "at": "sw" },
                { "x": 1.429, "y": 0, "label": "end" }
              ],
              "labels": [
                { "x": 0, "y": -1.72, "text": "ends do not meet" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any energy, ionisation or excitation question, in four moves",
          "steps": [
            "<b>Write the two level energies with their signs.</b> <i>E</i><sub>n</sub> = −13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> eV, both of them negative. Write the minus signs down; do not carry them in your head.",
            "<b>Subtract in the right order.</b> Energy absorbed going up is <i>E</i><sub>upper</sub> − <i>E</i><sub>lower</sub>, which comes out positive because the upper level is the less negative one. If you get a negative answer for a cost, you have subtracted backwards.",
            "<b>For ionisation from level <i>n</i>, the answer is just |<i>E</i><sub>n</sub>|.</b> The destination has <i>E</i> = 0, so the cost is the whole depth. From the ground state of hydrogen that is 13.6 eV; from <i>n</i> = 2 only 3.4 eV.",
            "<b>Convert only if the question asks in joules.</b> Multiply by 1.6 × 10<sup>−19</sup>. Most answers are cleaner left in eV, and an ionisation POTENTIAL is the same number again in volts.",
            "<b>Check the size.</b> Every hydrogen answer must lie between 0 and 13.6 eV, because that is the depth of the whole well. Anything larger means <i>Z</i> is not 1 or you have added instead of subtracting."
          ]
        },
        {
          "t": "think",
          "html": "the gap from <i>n</i> = 1 to <i>n</i> = 2 is 10.2 eV, and the gap from <i>n</i> = 2 all the way to freedom is only 3.4 eV. three quarters of the whole climb is the very first step. that is what the crowded top of the ladder means in practice, and it is why hydrogen's first spectral line is so much more energetic than all the rest."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "For a hydrogen atom in the <i>n</i> = 3 state, find (a) the total energy, (b) the kinetic energy, (c) the potential energy, and (d) the energy needed to ionise the atom from this state.",
          "steps": [
            "(a) <i>E</i><sub>3</sub> = −13.6 × 1<sup>2</sup>/3<sup>2</sup> = −13.6/9 = −1.51 eV.",
            "(b) KE = −<i>E</i><sub>3</sub> = +1.51 eV. Kinetic energy is always positive.",
            "(c) PE = 2<i>E</i><sub>3</sub> = −3.02 eV. Check: KE + PE = 1.51 − 3.02 = −1.51 = <i>E</i><sub>3</sub>.",
            "(d) Ionisation means reaching <i>E</i> = 0, so the cost is 0 − (−1.51) = 1.51 eV."
          ],
          "ans": "<i>E</i><sub>3</sub> = −1.51 eV, KE = +1.51 eV, PE = −3.02 eV, and 1.51 eV frees the electron. Compare that with 13.6 eV from the ground state: an excited atom is nine times easier to ionise."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Which of these has the <b>same</b> electron energy as a hydrogen atom in its ground state, −13.6 eV? (i) He<sup>+</sup> at <i>n</i> = 2, (ii) Li<sup>2+</sup> at <i>n</i> = 3, (iii) Be<sup>3+</sup> at <i>n</i> = 2.",
          "steps": [
            "The trap is to compute one, find it matches, tick it and move on. The question does not say only one option is right.",
            "<i>E</i> = −13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup>, so <i>E</i> = −13.6 eV exactly when <i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> = 1, that is whenever <i>Z</i> = <i>n</i>.",
            "(i) He<sup>+</sup>: <i>Z</i> = 2, <i>n</i> = 2, so <i>Z</i> = <i>n</i>. Energy = −13.6 × 4/4 = −13.6 eV.",
            "(ii) Li<sup>2+</sup>: <i>Z</i> = 3, <i>n</i> = 3, so <i>Z</i> = <i>n</i>. Energy = −13.6 × 9/9 = −13.6 eV.",
            "(iii) Be<sup>3+</sup>: <i>Z</i> = 4, <i>n</i> = 2, so <i>Z</i> is not <i>n</i>. Energy = −13.6 × 16/4 = −54.4 eV."
          ],
          "ans": "Both (i) and (ii). The rule \"<i>Z</i> = <i>n</i> gives −13.6 eV\" beats computing three separate values, and it catches the assumption that exactly one option must be correct."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "How much energy is required to remove the electron from the <i>n</i> = 2 state of a He<sup>+</sup> ion? Compare it with the energy required to remove it from the ground state of hydrogen.",
          "steps": [
            "He<sup>+</sup> has one electron and <i>Z</i> = 2, so Bohr applies.",
            "<i>E</i><sub>2</sub> = −13.6 × 2<sup>2</sup>/2<sup>2</sup> = −13.6 × 4/4 = −13.6 eV.",
            "Ionisation takes the electron to <i>E</i> = 0, so the cost is 13.6 eV.",
            "Hydrogen's ground state is also −13.6 eV, so the cost there is also 13.6 eV."
          ],
          "ans": "13.6 eV, exactly the same as from hydrogen's ground state. This is the <i>Z</i> = <i>n</i> coincidence again: doubling the nuclear charge quadruples the binding, and moving out one level quarters it, so the two changes cancel."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Find the de Broglie wavelength of the electron in the <i>n</i> = 2 orbit of hydrogen and verify that it satisfies Bohr's standing-wave condition. Take <i>h</i> = 6.63 × 10<sup>−34</sup> J s and <i>m</i> = 9.11 × 10<sup>−31</sup> kg.",
          "steps": [
            "Orbital speed: <i>v</i><sub>2</sub> = 2.19 × 10<sup>6</sup> × (1/2) = 1.095 × 10<sup>6</sup> m s<sup>−1</sup>.",
            "Momentum: <i>mv</i> = 9.11 × 10<sup>−31</sup> × 1.095 × 10<sup>6</sup> = 9.975 × 10<sup>−25</sup> kg m s<sup>−1</sup>.",
            "λ = <i>h</i>/<i>mv</i> = 6.63 × 10<sup>−34</sup>/9.975 × 10<sup>−25</sup> = 6.65 × 10<sup>−10</sup> m = 6.65 Å.",
            "Orbit circumference: <i>r</i><sub>2</sub> = 0.529 × 4 = 2.116 Å, so 2π<i>r</i><sub>2</sub> = 2π × 2.116 = 13.29 Å.",
            "Ratio: 13.29/6.65 = 2.00."
          ],
          "ans": "λ ≈ 6.65 Å, and exactly two wavelengths fit the <i>n</i> = 2 orbit. Not roughly two: two. The wave picture and Bohr's quantisation rule are the same statement seen from two sides."
        },
        {
          "t": "mcq",
          "q": "The energy of the <i>n</i> = 2 state of a He<sup>+</sup> ion is:",
          "opts": [
            { "label": "−3.4 eV", "nudge": "This forgets the Z squared and treats He⁺ as if it were hydrogen at n = 2. The nuclear charge is doubled, so the binding is four times stronger." },
            { "label": "−13.6 eV", "nudge": null },
            { "label": "−54.4 eV", "nudge": "This forgets the divide by n squared and gives the He⁺ GROUND state instead. Check which level the question asked for." },
            { "label": "−6.8 eV", "nudge": "This uses Z over n squared instead of Z squared over n squared, a half-applied formula. Both the numerator and the denominator are squared." }
          ],
          "correct": 1,
          "solution": "<i>E</i> = −13.6<i>Z</i><sup>2</sup>/<i>n</i><sup>2</sup> = −13.6 × 4/4 = −13.6 eV. He<sup>+</sup> at <i>n</i> = 2 has <i>Z</i> = <i>n</i>, and every such state sits at −13.6 eV."
        },
        {
          "t": "mcq",
          "q": "As <i>n</i> increases, the spacing between adjacent hydrogen energy levels:",
          "opts": [
            { "label": "increases", "nudge": "This is the instinct that more energy must mean bigger gaps. The energies do rise towards zero, but they rise by less and less each step." },
            { "label": "decreases", "nudge": null },
            { "label": "stays constant", "nudge": "This confuses the atom with a harmonic oscillator, whose levels really are evenly spaced. The hydrogen well is not a parabola and its levels are not evenly spaced." },
            { "label": "is always zero", "nudge": "True only in the limit as n goes to infinity, where the levels merge into the continuum. For any finite n the gap is finite." }
          ],
          "correct": 1,
          "solution": "<i>E</i><sub>n</sub> = −13.6/<i>n</i><sup>2</sup>, so the levels converge on 0 as <i>n</i> grows and the gaps shrink: 10.2 eV, then 1.89 eV, then 0.66 eV, then 0.31 eV. That crowding is what makes every spectral series pile up at a series limit."
        },
        {
          "t": "mcq",
          "q": "For a hydrogen atom in the <i>n</i> = 2 state, the kinetic and potential energies of the electron are respectively:",
          "opts": [
            { "label": "+3.4 eV and −6.8 eV", "nudge": null },
            { "label": "−3.4 eV and +6.8 eV", "nudge": "The signs are swapped. Kinetic energy is one half mv squared and can never be negative, whatever the total energy does." },
            { "label": "+3.4 eV and −3.4 eV", "nudge": "These would add to zero, making the electron free. The potential energy is twice the total, not equal and opposite to the kinetic." },
            { "label": "+1.7 eV and −5.1 eV", "nudge": "These do add to −3.4 eV, but they do not obey PE = 2E. The split is fixed by the inverse-square force and is not free to be anything that adds up." }
          ],
          "correct": 0,
          "solution": "<i>E</i><sub>2</sub> = −3.4 eV. KE = −<i>E</i> = +3.4 eV and PE = 2<i>E</i> = −6.8 eV, and the check is that 3.4 − 6.8 = −3.4. The kinetic energy is positive in every state; only the total and the potential are negative."
        },
        {
          "t": "mcq",
          "q": "The energy needed to excite a hydrogen atom from its ground state to the <i>n</i> = 3 level is:",
          "opts": [
            { "label": "1.51 eV", "nudge": "That is the depth of the n = 3 level below zero, which is the energy needed to ionise FROM n = 3. The climb from n = 1 is a different journey." },
            { "label": "12.09 eV", "nudge": null },
            { "label": "13.6 eV", "nudge": "That is full ionisation, taking the electron all the way out. Reaching n = 3 stops short of that, so it must cost less." },
            { "label": "15.11 eV", "nudge": "This ADDS the two level depths instead of subtracting them. Both energies are negative, so the gap is a difference and must be smaller than 13.6 eV." }
          ],
          "correct": 1,
          "solution": "<i>E</i><sub>3</sub> − <i>E</i><sub>1</sub> = (−1.51) − (−13.6) = 12.09 eV. Equivalently 13.6(1 − 1/9) = 13.6 × 8/9 = 12.09 eV. Every hydrogen excitation energy must come out between 0 and 13.6 eV, which kills option (D) on sight."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the energy of the <i>n</i> = 4 level of hydrogen, and the energy needed to ionise the atom from that level.",
              "a": "<i>E</i><sub>4</sub> = −13.6/16 = −0.85 eV. Ionisation from <i>n</i> = 4 costs 0 − (−0.85) = 0.85 eV, sixteen times less than from the ground state."
            },
            {
              "q": "[NEET] Calculate the ionisation energy of a singly ionised helium atom, He<sup>+</sup>, from its ground state.",
              "a": "He<sup>+</sup> is hydrogenic with <i>Z</i> = 2, so <i>E</i><sub>1</sub> = −13.6 × 4 = −54.4 eV and the ionisation energy is 54.4 eV. Four times hydrogen's, because the energy scales as <i>Z</i><sup>2</sup>."
            },
            {
              "q": "[JEE Main] A hydrogen-like ion requires 217.6 eV to be ionised from its ground state. Identify <i>Z</i>, and find the energy of the photon emitted when its electron drops from <i>n</i> = 4 to <i>n</i> = 2.",
              "a": "13.6<i>Z</i><sup>2</sup> = 217.6 gives <i>Z</i><sup>2</sup> = 16, so <i>Z</i> = 4, which is Be<sup>3+</sup>. Then <i>E</i>(4 to 2) = 13.6 × 16 × (1/4 − 1/16) = 217.6 × 0.1875 = 40.8 eV."
            },
            {
              "q": "[JEE Advanced] Using KE = −<i>E</i><sub>n</sub>, find the speed of the electron in hydrogen's ground state from the energy alone, and check it against 2.19 × 10<sup>6</sup> m s<sup>−1</sup>.",
              "a": "KE = 13.6 eV = 13.6 × 1.6 × 10<sup>−19</sup> = 2.176 × 10<sup>−18</sup> J. From KE = ½<i>mv</i><sup>2</sup>, <i>v</i> = √(2 × 2.176 × 10<sup>−18</sup>/9.11 × 10<sup>−31</sup>) = √(4.777 × 10<sup>12</sup>) = 2.19 × 10<sup>6</sup> m s<sup>−1</sup>. It agrees, which is the check that KE = −<i>E</i> is not a mnemonic but a real relation."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Calling the <i>n</i> = 2 level \"lower\" than <i>n</i> = 1 because 3.4 is smaller than 13.6.</b> Read the minus sign. −13.6 eV is deeper than −3.4 eV, so the ground state is the lowest level and the hardest to escape from.",
            "<b>Making the kinetic energy negative.</b> KE = −<i>E</i><sub>n</sub>, and since <i>E</i><sub>n</sub> is negative, KE comes out positive. Only the total and the potential energy are negative.",
            "<b>Adding level energies instead of subtracting them.</b> A transition energy is a difference of two negative numbers, so it is always smaller than 13.6<i>Z</i><sup>2</sup> eV. If your answer exceeds the ionisation energy, you have added.",
            "<b>Confusing excitation with ionisation.</b> Excitation lifts the electron to a higher bound level, ionisation removes it entirely. 10.2 eV is an excitation energy and 13.6 eV is the ionisation energy; the two potentials are 10.2 V and 13.6 V and are not interchangeable.",
            "<b>Using Bohr's energies for neutral helium.</b> He has two electrons, and their mutual repulsion makes the real first ionisation energy 24.6 eV rather than the 54.4 eV a hydrogenic calculation gives. The model is not slightly wrong there; it does not apply."
          ]
        },
        {
          "t": "protip",
          "html": "carry the six hydrogen levels in your head and most of this topic is mental arithmetic: −13.6, −3.40, −1.51, −0.85, −0.54, −0.38 eV. every transition energy is a difference of two of them, every ionisation energy is one of them without the sign, and every hydrogenic ion is the same list multiplied by <i>Z</i><sup>2</sup>. one more thing worth knowing, because it turns the ladder from a theory into a measurement: franck and hertz fired slow electrons through mercury vapour in 1914 and found the current dipping at 4.9 V and again at 9.8 V and 14.7 V, because an electron could only give up energy in lumps of exactly 4.9 eV. an electrical experiment measuring an excitation energy directly, with no light involved at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Eₙ = −13.6 Z²/n² eV", "note": "Total energy. Negative because the electron is bound." },
            { "f": "Zero of energy is at n = ∞", "note": "So −13.6 eV is DEEPER than −3.40 eV, not higher." },
            { "f": "KE = −Eₙ,  PE = 2Eₙ = −2 KE", "note": "H ground state: +13.6, −27.2, total −13.6 eV." },
            { "f": "H: −13.6, −3.40, −1.51, −0.85 eV", "note": "n = 1 to 4. Every transition is a difference of two of these." },
            { "f": "E_ion = 13.6 Z² eV", "note": "H: 13.6 eV, and 13.6 V as a potential. He⁺: 54.4 eV." },
            { "f": "First excitation of H = 10.2 eV", "note": "Second = 12.09 eV. Three quarters of the well is the first step." },
            { "f": "2πrₙ = nλ,  λ = h/mv", "note": "de Broglie's standing wave. It EXPLAINS mvr = nh/2π." },
            { "f": "Z = n ⇒ E = −13.6 eV", "note": "He⁺ at n = 2, Li²⁺ at n = 3. The fastest MCQ shortcut here." }
          ],
          "aids": [
            "negative means held. more negative means held tighter. the ground state is the deepest hole.",
            "kinetic is plus, potential is minus twice as much, total is minus the kinetic. three numbers, one fact.",
            "excitation moves you up a step. ionisation takes you off the staircase entirely."
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Atomic Spectra and the Hydrogen Spectral Series",
      "chip": "05 THE LINES",
      "kalam": "every element signs its name in light, and never anyone else's",
      "blocks": [
        {
          "t": "p",
          "html": "Drop a pinch of common salt into a flame and it burns a vivid yellow. Copper salts burn green. Strontium, which is what makes a Diwali <i>anaar</i> throw crimson, burns crimson every single time.<br><br>Each element, when you give it energy, gives back light of its <b>own</b> fixed set of colours and never any others. Spread that light with a prism and you do not get a smooth rainbow. You get a handful of sharp bright lines on a dark background, in a pattern as particular to that element as a fingerprint. Astronomers read the composition of stars this way, from light that left them millions of years ago, and they have never needed a sample."
        },
        {
          "t": "p",
          "html": "The flip side is just as striking. Shine continuous white light <b>through</b> a cool gas and then look at what comes out the other side. You find <b>dark</b> lines, at exactly the same wavelengths the gas would have emitted if you had heated it.<br><br>The gas absorbs precisely the colours it can emit, and nothing else. Emission and absorption are the same list of wavelengths read in negative, which is a strong hint that both are controlled by the same underlying set of numbers."
        },
        {
          "t": "def",
          "term": "Emission line spectrum",
          "html": "The set of sharp bright lines on a dark background produced when an energised gas radiates. Each line is one wavelength, each wavelength corresponds to one energy, and the complete pattern identifies the element uniquely. It is produced when electrons fall from higher levels to lower ones."
        },
        {
          "t": "def",
          "term": "Absorption line spectrum",
          "html": "A continuous spectrum crossed by dark lines, produced when white light passes through a cool gas. A photon is swallowed only if its energy <b>exactly</b> matches a gap between two levels of that gas, so the missing wavelengths are precisely the ones the same gas would emit. The dark lines in sunlight, first mapped by Fraunhofer, are this effect in the sun's own outer atmosphere."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.9 · THE SAME LIST, READ TWO WAYS",
          "chips": ["emission", "absorption", "they line up"],
          "captions": [
            "The visible emission spectrum of hydrogen. The strip is what a spectrometer shows, laid out by wavelength across the visible band, and the four marked lines are the only visible light hydrogen emits: 656 nm in the red, 486 nm blue-green, 434 nm violet and 410 nm at the edge of what the eye can see. Everything else in the strip is dark. Four lines, and no hydrogen anywhere in the universe has ever produced a fifth in this band.",
            "The absorption spectrum of the same gas. Now the strip is filled, because white light is passing through and every wavelength arrives. What comes out is missing four wavelengths, and they are the same four: 656, 486, 434 and 410 nm. A cool gas takes out of a beam exactly what a hot one puts into it.",
            "The two strips together, drawn to the same scale so the positions can be compared directly. Every bright line in the top strip sits exactly above a dark line in the bottom one, and the dashed connectors say so. That coincidence is the evidence that both processes are controlled by one set of energy gaps: emission is the electron falling through a gap and absorption is the electron climbing the same gap, so of course the photon is the same size either way."
          ],
          "frames": [
            {
              "x": [380, 700],
              "y": [-1.35, 1.35],
              "axes": "none",
              "aspect": 0.55,
              "polys": [
                { "pts": [[385, -0.35], [695, -0.35], [695, 0.35], [385, 0.35]], "close": true, "fill": "none", "tone": "ink" }
              ],
              "segments": [
                { "from": [656.3, -0.35], "to": [656.3, 0.35], "label": "656 nm", "at": "below" },
                { "from": [486.1, -0.35], "to": [486.1, 0.35], "label": "486 nm", "at": "above" },
                { "from": [434.0, -0.35], "to": [434.0, 0.35] },
                { "from": [410.2, -0.35], "to": [410.2, 0.35] }
              ],
              "labels": [
                { "x": 403, "y": -0.75, "text": "400 nm", "soft": true },
                { "x": 540, "y": -0.75, "text": "bright lines" },
                { "x": 677, "y": -0.75, "text": "700 nm", "soft": true }
              ]
            },
            {
              "x": [380, 700],
              "y": [-1.35, 1.35],
              "axes": "none",
              "aspect": 0.55,
              "polys": [
                { "pts": [[385, -0.35], [695, -0.35], [695, 0.35], [385, 0.35]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "segments": [
                { "from": [656.3, -0.35], "to": [656.3, 0.35], "label": "656 nm", "at": "below" },
                { "from": [486.1, -0.35], "to": [486.1, 0.35], "label": "486 nm", "at": "above" },
                { "from": [434.0, -0.35], "to": [434.0, 0.35] },
                { "from": [410.2, -0.35], "to": [410.2, 0.35] }
              ],
              "labels": [
                { "x": 403, "y": -0.75, "text": "400 nm", "soft": true },
                { "x": 540, "y": -0.75, "text": "dark lines" },
                { "x": 677, "y": -0.75, "text": "700 nm", "soft": true }
              ]
            },
            {
              "x": [380, 700],
              "y": [-1.35, 1.35],
              "axes": "none",
              "aspect": 0.55,
              "polys": [
                { "pts": [[385, 0.3], [695, 0.3], [695, 0.95], [385, 0.95]], "close": true, "fill": "none", "tone": "ink" },
                { "pts": [[385, -0.95], [695, -0.95], [695, -0.3], [385, -0.3]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "segments": [
                { "from": [656.3, 0.3], "to": [656.3, 0.95] },
                { "from": [486.1, 0.3], "to": [486.1, 0.95] },
                { "from": [434.0, 0.3], "to": [434.0, 0.95] },
                { "from": [410.2, 0.3], "to": [410.2, 0.95] },
                { "from": [656.3, -0.95], "to": [656.3, -0.3] },
                { "from": [486.1, -0.95], "to": [486.1, -0.3] },
                { "from": [434.0, -0.95], "to": [434.0, -0.3] },
                { "from": [410.2, -0.95], "to": [410.2, -0.3] },
                { "from": [656.3, -0.3], "to": [656.3, 0.3], "dash": true, "soft": true },
                { "from": [486.1, -0.3], "to": [486.1, 0.3], "dash": true, "soft": true },
                { "from": [434.0, -0.3], "to": [434.0, 0.3], "dash": true, "soft": true },
                { "from": [410.2, -0.3], "to": [410.2, 0.3], "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 405, "y": 1.15, "text": "emission" },
                { "x": 600, "y": 1.15, "text": "same wavelengths" },
                { "x": 412, "y": -1.18, "text": "absorption" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "So why lines, and not a smooth smear? Topic 04 already answered it.<br><br>The atom has a <b>staircase</b> of allowed energies, not a ramp. An electron can only sit on a step. When it falls from an upper step <i>n</i><sub>i</sub> to a lower step <i>n</i><sub>f</sub>, the atom sheds the difference as a single photon, and the photon energy is the whole gap: <i>h</i>ν = <i>E</i><sub>ni</sub> − <i>E</i><sub>nf</sub>.<br><br>Because the steps are at fixed heights, the gaps are fixed, so the emitted photons have fixed energies, so they have fixed wavelengths. Sharp lines. Absorption is the same staircase climbed instead of descended: a photon is swallowed only if its energy exactly matches a step-to-step gap, and one that does not match passes straight through."
        },
        {
          "t": "think",
          "html": "imagine a building whose landings are at very particular, uneven heights. a ball dropped from the 4th landing can make only certain precise thuds, depending on which lower landing it lands on: 4 to 3, 4 to 2, 4 to 1. it can never make an in-between thud, because there is no in-between landing. the hydrogen spectrum is the complete catalogue of every possible thud."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE RYDBERG FORMULA FROM BOHR'S LEVELS",
          "steps": [
            {
              "eq": "photon energy equals the level gap: <i>h</i>ν = <i>E</i><sub>ni</sub> − <i>E</i><sub>nf</sub>",
              "why": "Bohr's third postulate. The atom can shed energy only in the lump that separates two allowed states, and light carries energy in lumps of <i>h</i>ν, which is Chapter 11's photon. Note the order: the initial level is the higher one, so this difference is positive."
            },
            {
              "eq": "insert the levels: <i>h</i>ν = (<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup>)(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>)",
              "why": "From Topic 04, <i>E</i><sub>n</sub> = −<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/8ε<sub>0</sub><sup>2</sup><i>h</i><sup>2</sup><i>n</i><sup>2</sup>. Both levels are negative, and subtracting the lower (more negative) from the upper flips the order of the two fractions, which is why <i>n</i><sub>f</sub> ends up written first. Getting that order wrong gives a negative wavelength."
            },
            {
              "eq": "convert to wavelength with ν = <i>c</i>/λ: 1/λ = (<i>me</i><sup>4</sup><i>Z</i><sup>2</sup>/8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>)(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>)",
              "why": "Dividing an energy by <i>hc</i> turns it into a reciprocal length, which is what the extra <i>h</i> and the <i>c</i> in the denominator are doing. Spectroscopists work in 1/λ, called the wavenumber, precisely because it is proportional to energy."
            },
            {
              "eq": "the whole clump of constants is the Rydberg constant: <i>R</i> = <i>me</i><sup>4</sup>/8ε<sub>0</sub><sup>2</sup><i>h</i><sup>3</sup><i>c</i>",
              "why": "And here is the payoff. Compute it: <i>R</i> = <i>E</i><sub>1</sub>/<i>hc</i> = 2.179 × 10<sup>−18</sup>/(6.626 × 10<sup>−34</sup> × 2.998 × 10<sup>8</sup>) = 2.179 × 10<sup>−18</sup>/1.986 × 10<sup>−25</sup> = 1.097 × 10<sup>7</sup> m<sup>−1</sup>."
            },
            {
              "eq": "the measured Rydberg constant is 1.097 × 10<sup>7</sup> m<sup>−1</sup>",
              "why": "This is the sentence that made people believe Bohr. The Rydberg constant had been known empirically since 1888, fitted to spectra and explained by nothing. Bohr's model does not FIT it; it PREDICTS it, out of the electron mass, its charge, Planck's constant and the speed of light, none of which has anything obvious to do with the colour of hydrogen. The agreement is better than 0.1 per cent."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "THE RYDBERG FORMULA",
          "tag": "ANY HYDROGENIC TRANSITION",
          "main": "1/λ = <i>RZ</i><sup>2</sup> (1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>)",
          "legend": [
            "λ = wavelength of the emitted or absorbed photon, in metres (m)",
            "1/λ = the wavenumber, in m<sup>−1</sup>, which is what the formula naturally produces",
            "<i>R</i> = Rydberg constant = 1.097 × 10<sup>7</sup> m<sup>−1</sup>",
            "<i>n</i><sub>f</sub> = the LOWER level, where the electron finishes; dimensionless",
            "<i>n</i><sub>i</sub> = the UPPER level, where it starts; dimensionless, and always greater than <i>n</i><sub>f</sub>",
            "<i>Z</i> = nuclear charge number, dimensionless; <i>Z</i> = 1 for hydrogen"
          ],
          "note": "The smaller level is written first. Reverse them and 1/λ comes out negative, which is the fastest sign of a slip. For a hydrogenic ion every hydrogen wavelength is divided by <i>Z</i><sup>2</sup>, so He<sup>+</sup> lines sit at a quarter of hydrogen's wavelengths and Li<sup>2+</sup> at a ninth: the whole spectrum shifts hard into the ultraviolet."
        },
        {
          "t": "formula",
          "kicker": "PHOTON ENERGY AND WAVELENGTH",
          "tag": "THE 1240 SHORTCUT",
          "main": "<i>E</i> = <i>hc</i>/λ,  λ(nm) = 1240 / <i>E</i>(eV)",
          "legend": [
            "<i>E</i> = photon energy, equal to the level gap 13.6<i>Z</i><sup>2</sup>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>), in electronvolts (eV)",
            "λ = wavelength, in nanometres (nm) in the shortcut and in metres (m) in the first form",
            "<i>h</i> = 6.63 × 10<sup>−34</sup> J s; <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>"
          ],
          "note": "The 1240 comes from Chapter 11, Dual Nature of Radiation and Matter, and is worth deriving once: <i>hc</i> = (6.626 × 10<sup>−34</sup>)(2.998 × 10<sup>8</sup>) = 1.986 × 10<sup>−25</sup> J m, and dividing by 1.602 × 10<sup>−19</sup> J per eV gives 1.240 × 10<sup>−6</sup> eV m, that is 1240 eV nm. It gives the same wavelengths as the Rydberg formula to three figures: the 3 to 2 transition is 1.89 eV, and 1240/1.89 = 656 nm."
        },
        {
          "t": "p",
          "html": "Now group the lines by their <b>destination</b>. Not by where the electron started, but by the step it finishes on, because that is what makes the pattern visible.<br><br>Every jump that ends on <i>n</i><sub>f</sub> = 1 forms one family, the <b>Lyman series</b>, and every one of them is ultraviolet, because falling all the way to the ground state is an expensive drop. Every jump ending on <i>n</i><sub>f</sub> = 2 is the <b>Balmer series</b>, and it is the only family with lines in the visible band, which is why it was found first, by a Swiss schoolteacher named Johann Balmer in 1885, nearly thirty years before anyone could explain it. Endings on 3, 4 and 5 give <b>Paschen</b>, <b>Brackett</b> and <b>Pfund</b>, all infrared."
        },
        {
          "t": "defgrid",
          "title": "The five series of hydrogen",
          "rows": [
            { "k": "Lyman, <i>n</i><sub>f</sub> = 1", "v": "Ultraviolet. First line 121.6 nm, series limit 91.2 nm." },
            { "k": "Balmer, <i>n</i><sub>f</sub> = 2", "v": "Visible. First line 656.3 nm (H<sub>α</sub>), series limit 364.6 nm." },
            { "k": "Paschen, <i>n</i><sub>f</sub> = 3", "v": "Infrared. First line 1875 nm, series limit 820.4 nm." },
            { "k": "Brackett, <i>n</i><sub>f</sub> = 4", "v": "Infrared. First line 4051 nm, series limit 1458 nm." },
            { "k": "Pfund, <i>n</i><sub>f</sub> = 5", "v": "Far infrared. First line 7460 nm, series limit 2279 nm." },
            { "k": "First line vs limit", "v": "First line = smallest gap = LONGEST wavelength. Limit = largest gap = SHORTEST." }
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE 12.8 · WHERE EACH SERIES LANDS",
          "chips": ["Lyman", "Balmer", "Paschen", "all three"],
          "captions": [
            "The Lyman series: every jump that ends on n = 1. The longest arrow shown is the series limit, an electron arriving from infinitely far up, and it carries the largest energy in the family and therefore the shortest wavelength, 91.2 nm. The first line, 2 down to 1, is the smallest gap in the family and so the longest wavelength, 121.6 nm. Every Lyman photon carries at least 10.2 eV, which is deep ultraviolet: none of this family is visible, and none of it gets through the atmosphere.",
            "The Balmer series: every jump ending on n = 2. Because the ladder has already crowded by the time you reach n = 2, these gaps are far smaller, between 1.89 eV and 3.40 eV, and that band happens to be visible light. This is the only hydrogen series any human eye has ever seen directly, and the accident that put it there is simply where the second rung sits.",
            "The Paschen series: every jump ending on n = 3. Higher up the ladder still, so the gaps are smaller again, from 0.66 eV down to 0.28 eV at the limit, and the whole family is infrared. Notice the pattern across the three chips: the higher the destination rung, the smaller every gap in the family, and the longer every wavelength. Brackett and Pfund continue it further into the infrared.",
            "The first line of each of the three series on one ladder, so the sizes can be compared. Lyman's 10.2 eV drop is more than five times Balmer's 1.89 eV and more than fifteen times Paschen's 0.66 eV, and that ordering is fixed by nothing more than how crowded the rungs are where each series lands. The destination alone decides the family, its region of the spectrum, and where its limit falls."
          ],
          "frames": [
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3", "right": "−1.51 eV" },
                  { "at": 4 },
                  { "at": 5 },
                  { "at": 6 },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 2, "to": 1, "label": "121.6 nm", "tone": "amber" },
                  { "from": 3, "to": 1, "tone": "amber" },
                  { "from": 4, "to": 1, "tone": "amber" },
                  { "from": 1000, "to": 1, "label": "91.2 nm", "tone": "amber" }
                ]
              }
            },
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3", "right": "−1.51 eV" },
                  { "at": 4 },
                  { "at": 5 },
                  { "at": 6 },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 3, "to": 2, "label": "656 nm", "tone": "amber" },
                  { "from": 4, "to": 2, "tone": "amber" },
                  { "from": 5, "to": 2, "tone": "amber" },
                  { "from": 1000, "to": 2, "label": "365 nm", "tone": "amber" }
                ]
              }
            },
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3", "right": "−1.51 eV" },
                  { "at": 4 },
                  { "at": 5 },
                  { "at": 6 },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 4, "to": 3, "label": "1875 nm", "tone": "amber" },
                  { "from": 5, "to": 3, "tone": "amber" },
                  { "from": 6, "to": 3, "tone": "amber" },
                  { "from": 1000, "to": 3, "label": "820 nm", "tone": "amber" }
                ]
              }
            },
            {
              "aspect": 1.05,
              "levels": {
                "scale": "inverseSquare",
                "rows": [
                  { "at": 1, "label": "n = 1", "right": "−13.6 eV" },
                  { "at": 2, "label": "n = 2", "right": "−3.40 eV" },
                  { "at": 3, "label": "n = 3", "right": "−1.51 eV" },
                  { "at": 4 },
                  { "at": 5 },
                  { "at": 6 },
                  { "at": 1000, "label": "n = ∞", "right": "0 eV", "dash": true }
                ],
                "jumps": [
                  { "from": 2, "to": 1, "label": "Lyman", "tone": "amber" },
                  { "from": 3, "to": 2, "label": "Balmer", "tone": "amber" },
                  { "from": 4, "to": 3, "label": "Paschen", "tone": "amber" }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Within each family the lines crowd closer and closer together as <i>n</i><sub>i</sub> climbs, and they pile up at a wavelength they never quite reach. That accumulation point is the <b>series limit</b>.<br><br>It is the shortest wavelength and the highest energy of the family, and it corresponds to <i>n</i><sub>i</sub> going to infinity, which is to say an electron arriving from complete freedom. It is a limit, not a line you reach by any finite jump. And past it there are no more lines at all: past the limit lies the <b>continuum</b>, where the electron was free before it arrived and its energy was not quantised, so any wavelength at all is possible."
        },
        {
          "t": "def",
          "term": "Series limit",
          "html": "The shortest wavelength of a spectral series, approached as <i>n</i><sub>i</sub> goes to infinity. It is the accumulation point the lines of that family crowd towards and never reach by any finite jump. Its photon energy equals the <b>binding energy of the destination level</b> exactly, so the Lyman limit at 91.2 nm carries 13.6 eV and the Balmer limit at 364.6 nm carries 3.40 eV. Beyond the limit the spectrum is a smooth <b>continuum</b>, not more lines, because the arriving electron was free and its energy was never quantised."
        },
        {
          "t": "formula",
          "kicker": "THE SERIES LIMIT",
          "tag": "SHORTEST WAVELENGTH OF A SERIES",
          "main": "λ<sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup> / <i>RZ</i><sup>2</sup>",
          "legend": [
            "λ<sub>min</sub> = the series limit, the shortest wavelength of that series, in metres (m)",
            "<i>n</i><sub>f</sub> = the destination level that names the series, dimensionless",
            "<i>R</i> = 1.097 × 10<sup>7</sup> m<sup>−1</sup>; <i>Z</i> = nuclear charge number, dimensionless"
          ],
          "note": "Set <i>n</i><sub>i</sub> to infinity in the Rydberg formula and the second fraction vanishes, leaving this. For hydrogen it gives 91.2, 364.6, 820.4, 1458 and 2279 nm for the five series. Cross-check with energy: the limit photon carries 13.6<i>Z</i><sup>2</sup>/<i>n</i><sub>f</sub><sup>2</sup> eV, which is exactly the binding energy of level <i>n</i><sub>f</sub>. So 1240/91.2 = 13.6 eV and 1240/364.6 = 3.40 eV, which are <i>E</i><sub>1</sub> and <i>E</i><sub>2</sub>."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 12.10 · HOW A SERIES CONVERGES",
          "chips": ["the visible four", "the whole series"],
          "captions": [
            "The four Balmer lines the eye can see, on a wavelength axis. H-alpha at 656 nm is far out on the red side, and the next three come at 486, 434 and 410 nm. Look at the spacing: the gap from 656 to 486 is 170 nm, the next is 52 nm, the next only 24 nm. The lines are not evenly spaced and they are getting closer together as you move left.",
            "The same series continued. The transitions from n = 7, 8, 9, 10 and beyond pile up faster and faster and run into each other at the dashed line: the series limit at 364.6 nm, which is n_f squared over R with n_f = 2. The crowding here is the crowding of the energy ladder in Figure 12.5 seen from the other end. Because the levels converge on E = 0, the gaps converge on 3.40 eV, so the wavelengths converge on 1240/3.40 = 365 nm. Beyond the dashed line the spectrum is not empty and not more lines: it is a smooth continuum, produced by electrons that were already free before they arrived."
          ],
          "frames": [
            {
              "x": [355, 680],
              "y": [-1, 1],
              "aspect": 0.42,
              "axisX": "wavelength (nm)",
              "ticksX": { "at": [400, 450, 500, 550, 600, 650] },
              "segments": [
                { "from": [656.3, 0], "to": [656.3, 0.75], "label": "656", "at": "below" },
                { "from": [486.2, 0], "to": [486.2, 0.75], "label": "486", "at": "below" },
                { "from": [434.1, 0], "to": [434.1, 0.75], "label": "434", "at": "below" },
                { "from": [410.2, 0], "to": [410.2, 0.75], "label": "410", "at": "above" }
              ],
              "labels": [
                { "x": 520, "y": 0.9, "text": "the four visible lines" }
              ]
            },
            {
              "x": [355, 680],
              "y": [-1, 1],
              "aspect": 0.42,
              "axisX": "wavelength (nm)",
              "ticksX": { "at": [400, 450, 500, 550, 600, 650] },
              "segments": [
                { "from": [656.3, 0], "to": [656.3, 0.75], "label": "656", "at": "below" },
                { "from": [486.2, 0], "to": [486.2, 0.75] },
                { "from": [434.1, 0], "to": [434.1, 0.75] },
                { "from": [410.2, 0], "to": [410.2, 0.75] },
                { "from": [397.0, 0], "to": [397.0, 0.75] },
                { "from": [388.9, 0], "to": [388.9, 0.75] },
                { "from": [383.6, 0], "to": [383.6, 0.75] },
                { "from": [379.7, 0], "to": [379.7, 0.75] },
                { "from": [371.1, 0], "to": [371.1, 0.75] },
                { "from": [368.2, 0], "to": [368.2, 0.75] },
                { "from": [364.6, 0], "to": [364.6, 1.0], "dash": true, "label": "limit", "at": "below" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "HOW MANY LINES AN EXCITED ATOM CAN EMIT",
          "tag": "FROM LEVEL n, DOWN TO EVERYTHING",
          "main": "<i>N</i> = <i>n</i>(<i>n</i> − 1) / 2",
          "legend": [
            "<i>N</i> = number of distinct spectral lines the atom can produce, a pure count with no unit",
            "<i>n</i> = the level the atom was excited to, dimensionless"
          ],
          "note": "It is a count of pairs: every ordered pair of levels from <i>n</i> down to 1 is one possible jump, and there are <i>n</i> levels, so <i>n</i>(<i>n</i> − 1)/2 pairs. From <i>n</i> = 3 that is 3 lines (3 to 2, 3 to 1, 2 to 1) and from <i>n</i> = 4 it is 6. The cascade matters: an atom excited to <i>n</i> = 4 can come down in stages, so the lines from the intermediate jumps count too."
        },
        {
          "t": "proc",
          "title": "Identifying a series and finding its two ends",
          "steps": [
            "<b>Read off <i>n</i><sub>f</sub>, the destination.</b> That alone names the series: 1 is Lyman, 2 is Balmer, 3 is Paschen, 4 is Brackett, 5 is Pfund. The starting level tells you which line within the family, not which family.",
            "<b>Name the region from <i>n</i><sub>f</sub>.</b> 1 is ultraviolet, 2 is visible, 3 and above are infrared. That is the whole of what most NEET questions on regions want.",
            "<b>For the LONGEST wavelength, take <i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1.</b> Longest wavelength means smallest energy gap, which is the closest pair of levels, which is the first line of the series.",
            "<b>For the SHORTEST wavelength, take <i>n</i><sub>i</sub> to infinity.</b> That is the series limit, λ<sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/<i>RZ</i><sup>2</sup>. Students routinely compute the first line when the question asked for the shortest.",
            "<b>For an ion, divide every hydrogen wavelength by <i>Z</i><sup>2</sup>.</b> The pattern is identical and the whole spectrum shifts toward the ultraviolet: He<sup>+</sup> lines sit at a quarter of hydrogen's wavelengths."
          ]
        },
        {
          "t": "think",
          "html": "\"shortest\" and \"longest\" trip up more students than any formula in this chapter, so tie them to the ladder instead of memorising them. the <b>first</b> line is the two closest rungs, so the smallest gap, so the least energy, so the longest wave. the <b>limit</b> is the biggest possible drop into that rung, so the most energy, so the shortest wave. small gap, long wave, every time."
        },
        {
          "t": "p",
          "html": "Before the limitations, one measure of how powerful this is. In 1868, during a total solar eclipse, astronomers spread the light of the sun's outer atmosphere and found a bright yellow line at 587.6 nm that matched no element known on Earth. They named the unknown element <b>helium</b>, after the Greek for sun, and it was another twenty-seven years before anybody found any of it here.<br><br>An element was discovered ninety-three million miles away, by reading a single line in a spectrum, decades before a sample of it was ever held. That is what \"as unique as a fingerprint\" is worth in practice, and it is why spectroscopy remains the main way anyone knows what a star is made of."
        },
        {
          "t": "p",
          "html": "Two things the model cannot do, worth knowing because exam questions ask for them by name.<br><br>Bohr predicts <b>where</b> every line sits and says nothing about <b>how bright</b> it is. Line intensities need transition probabilities, which need full quantum mechanics. And every line, looked at with a good enough spectrometer, turns out to be several lines very close together: that is <b>fine structure</b>, and explaining it needs electron spin, which Bohr's single quantum number has no room for.<br><br>One thing the model does do, at the other end. For very large <i>n</i>, the frequency of the photon from an <i>n</i> + 1 to <i>n</i> jump approaches the electron's own classical frequency of revolution in its orbit, so the quantum prediction merges smoothly into the classical one. That is Bohr's <b>correspondence principle</b>, and any quantum theory has to satisfy it."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "Find the wavelength of the photon emitted when a hydrogen electron jumps from <i>n</i><sub>i</sub> = 4 to <i>n</i><sub>f</sub> = 2. Name the series and the region of the spectrum.",
          "steps": [
            "1/λ = <i>R</i>(1/2<sup>2</sup> − 1/4<sup>2</sup>) = <i>R</i>(1/4 − 1/16) = <i>R</i> × 3/16.",
            "1/λ = 1.097 × 10<sup>7</sup> × 0.1875 = 2.057 × 10<sup>6</sup> m<sup>−1</sup>.",
            "λ = 1/2.057 × 10<sup>6</sup> = 4.86 × 10<sup>−7</sup> m = 486 nm.",
            "Cross-check by energy: <i>E</i> = 13.6(1/4 − 1/16) = 13.6 × 0.1875 = 2.55 eV, and 1240/2.55 = 486 nm."
          ],
          "ans": "λ ≈ 486 nm. Since <i>n</i><sub>f</sub> = 2 it is the Balmer series, and 486 nm is blue-green visible light, the line called H-beta."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "What is the shortest wavelength present in the Paschen series of hydrogen?",
          "steps": [
            "The trap: reaching for the first line, 4 down to 3. But <b>shortest</b> wavelength means <b>largest</b> energy gap, which is the series limit, not the first line.",
            "The largest gap into <i>n</i><sub>f</sub> = 3 comes from <i>n</i><sub>i</sub> going to infinity, so 1/λ<sub>min</sub> = <i>R</i>/3<sup>2</sup>.",
            "1/λ<sub>min</sub> = 1.097 × 10<sup>7</sup>/9 = 1.219 × 10<sup>6</sup> m<sup>−1</sup>.",
            "λ<sub>min</sub> = 9/1.097 × 10<sup>7</sup> = 8.20 × 10<sup>−7</sup> m."
          ],
          "ans": "λ<sub>min</sub> ≈ 820 nm, in the infrared. The memory hook: shortest wavelength is the series limit, <i>n</i><sub>f</sub><sup>2</sup>/<i>R</i>; longest wavelength is the first line."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A hydrogen atom is excited to the <i>n</i> = 4 level and then de-excites. (a) How many distinct spectral lines can it emit? (b) What is the longest wavelength among them, and which series does it belong to?",
          "steps": [
            "(a) <i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = 4 × 3/2 = 6 lines.",
            "(b) Longest wavelength means smallest energy gap, which is the closest pair of levels available: 4 down to 3.",
            "1/λ = <i>R</i>(1/3<sup>2</sup> − 1/4<sup>2</sup>) = <i>R</i>(1/9 − 1/16) = <i>R</i> × 7/144.",
            "1/λ = 1.097 × 10<sup>7</sup> × 0.04861 = 5.33 × 10<sup>5</sup> m<sup>−1</sup>, so λ = 1.875 × 10<sup>−6</sup> m."
          ],
          "ans": "(a) 6 lines. (b) 1875 nm, the first line of the Paschen series, in the infrared. The six lines are 4 to 3, 4 to 2, 4 to 1, 3 to 2, 3 to 1 and 2 to 1, and they are spread across three different series."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Show that certain emission lines of He<sup>+</sup> coincide exactly with the Balmer series of hydrogen, and identify the He<sup>+</sup> transition that matches H-alpha (3 to 2).",
          "steps": [
            "For He<sup>+</sup>, <i>Z</i> = 2, so 1/λ = 4<i>R</i>(1/<i>n</i><sub>f</sub><sup>2</sup> − 1/<i>n</i><sub>i</sub><sup>2</sup>) with primed quantum numbers.",
            "For the H Balmer series, 1/λ = <i>R</i>(1/4 − 1/<i>n</i><sub>i</sub><sup>2</sup>).",
            "Match term by term: 4/<i>n</i><sub>f</sub><sup>2</sup> = 1/4 gives <i>n</i><sub>f</sub> = 4 for helium, and 4/<i>n</i><sub>i</sub><sup>2</sup> = 1/<i>n</i><sub>i</sub><sup>2</sup> gives the helium upper level as twice hydrogen's.",
            "So every He<sup>+</sup> transition of the form 2<i>n</i> down to 4 overlaps the H Balmer line <i>n</i> down to 2.",
            "For H-alpha, <i>n</i><sub>i</sub> = 3, so the helium partner is 6 down to 4.",
            "Check: He<sup>+</sup> 6 to 4 gives 4<i>R</i>(1/16 − 1/36) = 4<i>R</i> × 0.03472 = <i>R</i> × 5/36, and H 3 to 2 gives <i>R</i>(1/4 − 1/9) = <i>R</i> × 5/36. Identical."
          ],
          "ans": "He<sup>+</sup> 6 to 4 has exactly the same wavelength as hydrogen's H-alpha, 656.3 nm. This near-degeneracy is why early astronomers briefly mis-assigned some stellar He<sup>+</sup> lines to hydrogen."
        },
        {
          "t": "mcq",
          "q": "The Balmer series of the hydrogen spectrum lies in the:",
          "opts": [
            { "label": "ultraviolet region", "nudge": "That is the Lyman series, which ends on n = 1. Falling all the way to the ground state releases at least 10.2 eV, far too much for visible light." },
            { "label": "visible region", "nudge": null },
            { "label": "infrared region", "nudge": "That covers Paschen, Brackett and Pfund, everything with n_f of 3 or more. Their gaps are too small to make visible photons." },
            { "label": "microwave region", "nudge": "No hydrogen electronic series falls in microwaves. The smallest electronic gaps here are still hundredths of an eV, which is far-infrared at longest." }
          ],
          "correct": 1,
          "solution": "Balmer ends on <i>n</i> = 2 and is the only hydrogen series with lines the eye can see: 656, 486, 434 and 410 nm. That is an accident of where the second rung sits, and it is why Balmer found the pattern in 1885 with nothing but a prism."
        },
        {
          "t": "mcq",
          "q": "The series limit of any hydrogen spectral series corresponds to a transition from:",
          "opts": [
            { "label": "n_i = n_f + 1", "nudge": "That is the FIRST line of the series, the smallest gap and therefore the longest wavelength. The limit is at the opposite end of the family." },
            { "label": "n_i = 2 n_f", "nudge": "An arbitrary intermediate jump with nothing special about it. Nothing in the physics picks out twice the destination level." },
            { "label": "n_i → ∞", "nudge": null },
            { "label": "n_i = n_f", "nudge": "That is not a transition at all: the gap is zero, so there is no photon and no line." }
          ],
          "correct": 2,
          "solution": "The series limit is the shortest-wavelength, largest-gap member of the family, reached as the upper level goes to infinity. Its photon carries exactly the binding energy of the destination level, and beyond it the spectrum becomes a continuum rather than more lines."
        },
        {
          "t": "mcq",
          "q": "When an electron in a hydrogen atom de-excites from <i>n</i> = 3, the maximum number of distinct spectral lines it can produce is:",
          "opts": [
            { "label": "2", "nudge": "This counts only the direct jumps from n = 3 and misses the 2 to 1 line produced by the cascade afterwards." },
            { "label": "3", "nudge": null },
            { "label": "6", "nudge": "This uses n(n − 1) without dividing by 2, counting every pair of levels twice over." },
            { "label": "9", "nudge": "This uses n squared, which counts every ordered pair including a level with itself. A transition needs two DIFFERENT levels." }
          ],
          "correct": 1,
          "solution": "<i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = 3 × 2/2 = 3, namely 3 to 2, 3 to 1 and 2 to 1. The cascade is the point: an atom that lands on <i>n</i> = 2 on the way down then falls again, and that second photon is a line too."
        },
        {
          "t": "mcq",
          "q": "The frequency of the first Lyman line of hydrogen is ν. The frequency of the corresponding 2 to 1 line in doubly ionised lithium, Li<sup>2+</sup>, is:",
          "opts": [
            { "label": "ν", "nudge": "This ignores the Z-dependence entirely. Li²⁺ binds its single electron nine times more tightly than hydrogen does, so every gap is nine times larger." },
            { "label": "3ν", "nudge": "This uses Z instead of Z squared. The energy levels go as Z squared, and frequency is proportional to energy." },
            { "label": "9ν", "nudge": null },
            { "label": "27ν", "nudge": "This uses Z cubed. No quantity in the Bohr model scales as Z cubed; the energy and hence the frequency go as Z squared." }
          ],
          "correct": 2,
          "solution": "For the same transition, <i>E</i> and therefore ν are proportional to <i>Z</i><sup>2</sup>. Li<sup>2+</sup> has <i>Z</i> = 3, so ν becomes 3<sup>2</sup>ν = 9ν, and the wavelength drops to a ninth: 121.6/9 = 13.5 nm, deep in the ultraviolet."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Find the wavelength of the first line of the Lyman series of hydrogen, the 2 to 1 transition, and state its region of the spectrum.",
              "a": "1/λ = <i>R</i>(1/1 − 1/4) = 3<i>R</i>/4 = 0.75 × 1.097 × 10<sup>7</sup> = 8.23 × 10<sup>6</sup> m<sup>−1</sup>, so λ = 1.22 × 10<sup>−7</sup> m = 121.6 nm. Ultraviolet. Cross-check: the gap is 10.2 eV and 1240/10.2 = 121.6 nm."
            },
            {
              "q": "[NEET] Name the spectral series of hydrogen that lies entirely in the visible region, and state its destination level.",
              "a": "The Balmer series, with <i>n</i><sub>f</sub> = 2. Its four visible lines are 656, 486, 434 and 410 nm; the rest of the series runs on past the violet edge to the series limit at 364.6 nm."
            },
            {
              "q": "[JEE Main] How many distinct spectral lines are emitted when a hydrogen atom de-excites from the <i>n</i> = 5 level all the way to the ground state?",
              "a": "<i>N</i> = <i>n</i>(<i>n</i> − 1)/2 = 5 × 4/2 = 10 lines. They belong to four series: four Lyman lines, three Balmer, two Paschen and one Brackett."
            },
            {
              "q": "[JEE Advanced] Find the ratio of the longest-wavelength line of the Lyman series to the longest-wavelength line of the Balmer series of hydrogen.",
              "a": "Longest means first line in each case. Lyman 2 to 1: 1/λ = <i>R</i>(1 − 1/4) = 3<i>R</i>/4. Balmer 3 to 2: 1/λ = <i>R</i>(1/4 − 1/9) = 5<i>R</i>/36. So λ<sub>L</sub> : λ<sub>B</sub> = (4/3<i>R</i>) : (36/5<i>R</i>) = 20/108 = 5 : 27. Checking with the numbers, 121.6/656.3 = 0.185 and 5/27 = 0.185."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Swapping <i>n</i><sub>i</sub> and <i>n</i><sub>f</sub>.</b> In the Rydberg formula the SMALLER level comes first and names the series; the larger is where the electron starts. Reverse them and 1/λ comes out negative.",
            "<b>Computing the wrong end of a series.</b> Shortest wavelength is the series limit, <i>n</i><sub>i</sub> to infinity. Longest wavelength is the first line, <i>n</i><sub>i</sub> = <i>n</i><sub>f</sub> + 1. Students routinely compute one when asked for the other.",
            "<b>Forgetting <i>Z</i><sup>2</sup> for ions.</b> Wavelengths go as 1/<i>Z</i><sup>2</sup> and energies and frequencies as <i>Z</i><sup>2</sup>. He<sup>+</sup> and Li<sup>2+</sup> are not hydrogen, and their whole spectra sit far into the ultraviolet.",
            "<b>Confusing excitation with ionisation.</b> Excitation lifts the electron to a higher bound level (10.2 eV to reach <i>n</i> = 2 in hydrogen); ionisation frees it entirely (13.6 eV). The excitation potential is not the ionisation potential.",
            "<b>Naming the series from where the electron started.</b> The series is named by the DESTINATION. A 5 to 2 jump is a Balmer line, not a Pfund one, even though it began on the fifth rung."
          ]
        },
        {
          "t": "protip",
          "html": "two shortcuts answer most of this topic in seconds. λ<sub>min</sub> = <i>n</i><sub>f</sub><sup>2</sup>/<i>RZ</i><sup>2</sup> for the series limit, and <i>N</i> = <i>n</i>(<i>n</i> − 1)/2 for the line count. for regions, remember lyman is ultraviolet, balmer is visible, and everything higher is infrared, which the mnemonic <b>\"lazy boys play bridge in patna\"</b> keeps in order: lyman, balmer, paschen, brackett, pfund. and always cross-check a wavelength the other way: compute the gap in eV, divide 1240 by it, and see whether you get the same nanometres. two independent routes agreeing is worth more than one route done carefully."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "1/λ = RZ²(1/n_f² − 1/n_i²)", "note": "The Rydberg formula. R = 1.097 × 10⁷ m⁻¹. Smaller level first." },
            { "f": "λ(nm) = 1240 / E(eV)", "note": "The cross-check. Hα: 1.89 eV gives 656 nm." },
            { "f": "Lyman 1 UV · Balmer 2 visible", "note": "Paschen 3, Brackett 4, Pfund 5, all infrared." },
            { "f": "λ_min = n_f² / RZ²", "note": "Series limit, the SHORTEST wavelength. Lyman 91.2, Balmer 364.6 nm." },
            { "f": "First line: n_i = n_f + 1", "note": "The LONGEST wavelength. Lyman 121.6, Balmer 656.3, Paschen 1875 nm." },
            { "f": "N = n(n − 1)/2", "note": "Lines from level n, cascade included. n = 4 gives 6, n = 5 gives 10." },
            { "f": "Hα 656, Hβ 486, Hγ 434, Hδ 410 nm", "note": "The only hydrogen lines the eye can see." },
            { "f": "R predicted, not fitted", "note": "R = me⁴/8ε₀²h³c, and the prediction matches to 0.1 per cent." }
          ],
          "aids": [
            "lazy boys play bridge in patna: lyman, balmer, paschen, brackett, pfund.",
            "the series is named by where the electron LANDS, never by where it started.",
            "limit is shortest, first line is longest. small gap means long wave, every time."
          ]
        }
      ]
    }
  ]
};

export default phy12Atoms;
