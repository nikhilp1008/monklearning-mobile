/**
 * Chapter 14 · Waves. Physics, Class 11. The last chapter of the book.
 *
 * Restructured from pages 925 to 976 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-09-mech-fluids.ts.
 *
 * FIVE TOPICS FROM FOUR SOURCE SUBTOPICS, and exactly one split. The source
 * names four: 01 Wave Characteristics and Speed, 02 Superposition and Beats,
 * 03 Standing Waves and Acoustics, 04 Doppler Effect. Four is inside the
 * reader's gate (scripts/validate-chapters.mjs rejects anything outside four
 * to six topics), so nothing had to move. Subtopic 03 was split anyway, at a
 * seam the source cuts in its own title: "Standing Waves AND Acoustics". The
 * seam is visible three more times inside it. Its Section 1 pivots on one
 * sentence, "For air columns in pipes, the boundary rule is about how the air
 * can move", and everything after that sentence is pipes. Its Section 2
 * formula list is two blocks with nothing shared but v = f lambda: string
 * first, then open pipe, closed pipe, end correction, resonance tube. Its
 * Section 3 derivation is titled "Stationary Wave and the Harmonics of a
 * String" and never mentions a pipe at all, so the pipe half of the subtopic
 * has no derivation of its own in the source; Topic 04 below supplies one from
 * the boundary rule the source does state. And it is by far the largest
 * subtopic in the chapter. Left whole it would have been a 40-block topic
 * against a 26-block Doppler, and the reader gets one checkpoint per topic.
 * Nothing was merged and nothing else was split; Topics 01, 02 and 05 are the
 * source's Subtopics 01, 02 and 04 one for one.
 *
 * THE ROUND 2 ADDENDUM (pages 963 to 976: A power and energy in a travelling
 * wave, B reflection and transmission at a junction of two strings, C the wave
 * equation and d'Alembert's solution, D longitudinal standing waves in rods
 * and the end correction) IS NOT A TOPIC, per the brief. Every line drawn from
 * it below sits in a `protip`, a `mistakes` item or the hardest `ex` in its
 * group: A into Topic 01's protip (average power) and Topic 01's mistakes
 * item on amplitude, B into Topic 03's protip on fixed versus free ends, C
 * into Topic 01's mistakes item on non-sinusoidal pulses, D into Topic 04's
 * pressure-versus-displacement `def` and its protip on rods. No `formula`,
 * `defgrid`, `deriv` or `proc` block below is sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 977 to 981, in full; entries for Chapters 1,
 * 2, 4, 6, 8, 9 and 11). NO ENTRY TOUCHES THIS RANGE. Chapter 14 is not named
 * anywhere in the errata, and none of the seven listed entries changes a
 * number, a formula or a claim that this chapter uses. The errata's own
 * preamble is worth one line for future authors: it says several dozen
 * "corrupted character" and "leaked markup" defects the audit flagged turned
 * out to be text-extraction artefacts that the printed PDF renders correctly,
 * which is exactly the class of defect logged under SOURCE DAMAGE below.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 925 to 976 was recomputed independently. The main body is in
 * unusually good shape: one wrong answer in four subtopics. The Round 2
 * Addendum is not, exactly as the brief predicted; four of the five items
 * below are in it.
 *
 *   1. MAIN BODY. Subtopic 02, Practice 2 (page 941): "Fork A (frequency 320
 *      Hz) gives 5 beats/s with fork B. On filing fork B, the beat frequency
 *      increases to 8/s. Find the original frequency of B." Printed answer:
 *      "Filing raises B's frequency; beats increased, so B was below A ->
 *      f_B = 315 Hz." The reasoning contradicts itself. Filing RAISES f_B. If
 *      f_B were 315 Hz, raising it moves it TOWARDS A's 320 Hz and the beat
 *      count FALLS, which is not what the question says. The candidates are
 *      320 +/- 5 = 315 or 325; only 325 Hz gets further from 320 when filed,
 *      so only 325 Hz makes the beats rise. CORRECT ANSWER 325 Hz. Topic 02's
 *      practice item 2 below carries the corrected answer and the one-line
 *      reason, and the same trap is set the right way round in Topic 02's
 *      Example 2 (wax, beats fall, so the fork was ABOVE), which the source
 *      does get right, so the two now agree with each other.
 *   2. ADDENDUM A, Example A.3 (page 966), the hanging-rope amplitude. The
 *      algebra is right and the sentence describing it is backwards. Power
 *      conservation gives A(x)^2 v(x) = constant with v(x) = sqrt(gx), so
 *      A ~ x^(-1/4), and the printed formula A(x) = A0 (x0/x)^(1/4) says the
 *      same thing: amplitude FALLS as x grows. The printed "Result: Amplitude
 *      grows as the wave climbs" and its "Check: ...the wave goes up, so v
 *      decreases, amplitude increases" are both wrong, and the Check is wrong
 *      twice over, because v = sqrt(gx) plainly increases with x. CORRECT
 *      READING: a pulse sent UP a hanging rope shrinks, and a pulse sent DOWN
 *      one grows, which is the whip effect and the reason the source's own
 *      Subtopic 01 Example 4 has the pulse speeding up as it climbs.
 *   3. ADDENDUM A, Practice 5 (page 966): rope 2 kg, 10 m, 100 Hz, amplitude
 *      1 cm at the bottom, estimate the amplitude at the top. Printed answer
 *      "A(10)/A(1) = (1/10)^(-1/4) = 1.78, amplitude at top 1.78 cm" applies
 *      the exponent with the wrong sign, following item 2. Working: with the
 *      1 cm reference taken at x = 1 m as the printed answer does,
 *      A(10)/A(1) = (10/1)^(-1/4) = 10^(-0.25) = 0.562. CORRECT ANSWER about
 *      0.56 cm, and the amplitude has fallen, not risen.
 *   4. ADDENDUM A, Practice 4 (page 966): energy transmitted into a string of
 *      twice the linear density at the same tension. Z = sqrt(T mu), so
 *      Z2 = sqrt(2) Z1, and T_E = 4 Z1 Z2/(Z1 + Z2)^2 = 4 sqrt(2)/(1 +
 *      sqrt(2))^2 = 5.6569/5.8284. Printed answer 0.943. Working:
 *      (1 + sqrt 2)^2 = 3 + 2 sqrt 2 = 5.8284, and 5.6569/5.8284 = 0.9706.
 *      The printed value is 4 sqrt(2)/6, i.e. the denominator evaluated as 6
 *      instead of 5.828. CORRECT ANSWER T_E = 0.971, so 0.97 E0 transmitted
 *      and 0.03 E0 reflected. (Check: R_E = ((1 - sqrt 2)/(1 + sqrt 2))^2 =
 *      (0.4142/2.4142)^2 = 0.0294, and 0.971 + 0.029 = 1.000.)
 *   5. ADDENDUM A, Practice 1 (page 966) is wrong TWICE, and the second fault
 *      only shows up once you fix the first. "A string (mu = 0.05 kg/m,
 *      T = 20 N) carries a wave y = 0.01 sin(20 pi t - 2 pi x)."
 *      (a) OVER-DETERMINED. The string forces v = sqrt(T/mu) = sqrt(400) =
 *      20 m/s, but the printed wave has omega/k = 20 pi/2 pi = 10 m/s. No wave
 *      of that wave number can exist on that string, so the problem as printed
 *      has no solution at all; the printed answer silently uses v = 20 while
 *      keeping k = 2 pi.
 *      (b) A FACTOR OF TEN, even under its own inconsistent reading. Printed
 *      answer "P = 0.2 pi^2 = 1.97 W". Working, with v = 20 as the printed
 *      answer assumes: P = (1/2) mu omega^2 A^2 v =
 *      (1/2)(0.05)(20 pi)^2 (0.01)^2 (20). Take it in order:
 *      (1/2)(0.05) = 0.025; (20 pi)^2 = 400 pi^2, and 0.025 x 400 = 10, so we
 *      have 10 pi^2; times A^2 = 1 x 10^-4 gives 1 x 10^-3 pi^2; times v = 20
 *      gives 0.02 pi^2 = 0.197 W. The printed 0.2 pi^2 is ten times too large.
 *      TWO SELF-CONSISTENT REPAIRS. Keep the string and set k = pi rad/m
 *      (lambda = 2 m, v = 20 m/s): P = 0.02 pi^2 = 0.197 W. Or keep the
 *      printed wave and set T = 5 N so that v = 10 m/s: P = 0.01 pi^2 =
 *      9.9 x 10^-2 W. Topic 01's protip below states the second repair with
 *      its own recomputed number, because it is the one that leaves the
 *      printed wave equation intact, and it spells out the tension-against-
 *      wave-number consistency check that would have caught (a).
 *   6. ADDENDUM D, Example D.2 (page 974) is an unfinished draft left in the
 *      printed text. It poses an open pipe of length 0.50 m with v = 340 m/s
 *      resonating at 340 Hz, solves it, gets e = 0 exactly, prints "Wait, if
 *      f1 = v/(2L) exactly, then e = 0", and then rewrites its own question
 *      ("Let's change numbers to make it non-trivial. Revised problem: pipe
 *      length 0.48 m..."). The revised arithmetic is correct (0.48 + 2e = 0.5,
 *      so e = 1 cm), and the original is not wrong so much as degenerate: with
 *      L = v/(2f) to the digit there is no room left for an end correction.
 *      Not carried below in any form. Topic 04's resonance-tube example uses
 *      its own numbers, checked against v = f lambda.
 *   7. Minor, recorded for completeness. Addendum B, Practice 1 (page 969)
 *      quotes the impedances as "Z1 = 1, Z2 = 3 (in sqrt(kg N) units)". The
 *      numbers are right, the unit is not: Z = sqrt(T mu) = sqrt(N kg/m) =
 *      sqrt(kg^2/s^2) = kg/s, which is what the addendum's own Method step 1
 *      prints. sqrt(kg N) would be kg sqrt(m)/s.
 *
 *   Items 2 to 7 sit in the addendum, which is not a topic. The one place
 *   addendum arithmetic reaches a student below is Topic 01's protip, and it
 *   carries the recomputed 9.9 x 10^-3 W, not the printed 1.97 W.
 *
 * SOURCE DAMAGE. Pages 925 to 976 have their own dialect, and it is not the
 * one the neighbouring chapters logged. Every passage below was re-authored
 * from context, never transcribed:
 *
 *   - GREEK SURVIVES, AS MATHEMATICAL ALPHANUMERIC (U+1D400 to U+1D7FF), which
 *     the app's faces cannot draw and validate-chapters rejects outright. 1908
 *     instances in 52 pages, and they are the chapter's whole vocabulary:
 *     math-italic v 285, f 252, x 123, A 86, T 82, lambda 81, t 74, I 72, pi
 *     57, y 57, mu 57, L 53, omega 50, s 46, partial 40, k 39, n 38, o 38,
 *     u 36, Z 32, d 31, e 31, phi 30, l 23, r 18, c 16, R 15, a 14, E 14,
 *     theta 12, and more. Copying any run of source symbol text verbatim would
 *     have shipped blank boxes. Every symbol below is retyped as an ordinary
 *     character inside <i> tags, and every Greek letter as its plain Unicode
 *     form.
 *   - AN ASCII SHIFT OF MINUS 29, CONFINED TO FOUR HEADINGS AND TWO LETTERS.
 *     Every Cheat Sheet Box heading in the range is hit and nothing else is:
 *     "Q8ICK RECALL" four times, "S8PERPOSITION & BEATS", "STANDIN* WAVES &
 *     ACO8STICS". U (85) arrives as 8 (56) and G (71) as * (42), both exactly
 *     29 below. No other letter in those headings shifts, and no heading
 *     outside the Cheat Sheet Boxes shifts at all. The brief's "+29 heading
 *     shift" is therefore real here but partial and signed the other way, so
 *     it was decoded letter by letter rather than by a blanket offset.
 *   - A SECOND, DIFFERENT SHIFT IN THE ADDENDUM: "Pavg" arrives as "Pav9"
 *     three times (pages 964 and 965), g (103) to 9 (57), an offset of 46, not
 *     29. Same defect family, different font.
 *   - TICKS AND CROSSES ARRIVE AS BARE DIGITS. A lone "3" on its own line is a
 *     check mark and a lone "7" is a ballot X, the Wingdings code points. 15
 *     and 2 instances respectively, and they carry meaning: page 940's
 *     "loading drops it toward 480, so it gets closer, so beats decrease. 3"
 *     is a tick confirming that branch, and the "7" two lines later rejects
 *     the other. Read as digits, the tuning-fork worked example says nothing
 *     at all.
 *   - ARROWS VANISH SILENTLY. Page 954's memory line extracts as "Toward
 *     frequency up. Away  frequency down." with a double space where an arrow
 *     stood, and page 927's classification list loses its bullet arrows the
 *     same way. Restored as the word "gives" or a colon below, never as a
 *     glyph.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     unit (m s -1), every subscript (v p, f beat, l 1, I max), every
 *     dimensional formula ([L T -1]) and every power (10 8) breaks apart, and
 *     "f'" survives only as a stray prime on its own line. Recomputing every
 *     worked example independently, and re-deriving every dimensional formula
 *     in the DIMENSIONS ledger below, was the check that these were rebuilt
 *     correctly.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. The running head
 *     is "avesDrona" on all 38 pages, and inside the body: "particles
 *     vibrateperpendicularto the direction", "particles vibratealongthe
 *     direction", "notby how the wave was produced", "the n-th
 *     harmonicFrequency", "the m-th overtoneThe (m+1)-th allowed frequency",
 *     "this apparent change... is theDoppler Effect", "Situation
 *     FormulaResult", "at the same depth" style joins in every answer key
 *     ("500Hz", "340m s", "0.6m"), and "Section 8: Cheat Sheet Box" running
 *     into its own heading four times.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: the "\n7 = minus,
 *     \nN = times, \nK = degree, \nC = colon" token family (0 instances of
 *     all five), octal escapes of the \050 kind (0), U+20D7 combining arrows
 *     (0), and leaked LaTeX delimiters (0). This range's minus signs and
 *     multiplication signs extract correctly as U+2212 and U+00D7.
 *
 * THE SIGN CONVENTION, DECLARED ONCE AND HELD. Topic 01's `def` block fixes it
 * for the whole chapter: a wave travelling in the <b>+x</b> direction is
 * written <i>y</i> = <i>A</i> sin(ω<i>t</i> − <i>kx</i> + φ), and one
 * travelling in −<i>x</i> is <i>y</i> = <i>A</i> sin(ω<i>t</i> + <i>kx</i> +
 * φ). Direction is decided by the RELATIVE sign of ωt and kx, never by which
 * one is written first. The source declares the same convention on page 928
 * and then quietly abandons it on page 946, where the standing-wave derivation
 * opens with y1 = a sin(kx − ωt) and y2 = a sin(kx + ωt). Those are the same
 * two waves as ours up to an overall phase of π, so the source's result
 * y = 2a sin(kx) cos(ωt) is correct; but a student who reads page 928 and then
 * page 946 back to back has been shown two conventions and told about neither.
 * Topic 03 below re-derives the standing wave in the chapter's own convention,
 * from y1 = A sin(ωt + kx) hitting a fixed end and reflecting as
 * y2 = −A sin(ωt − kx), which lands on 2A sin(kx) cos(ωt) with no stray sign
 * to explain away and a node at x = 0 by construction. The confusion earns a
 * `mistakes` item in Topic 01 and is the trap behind Topic 01's second MCQ.
 *
 * DIMENSIONS. Every formula printed below, reduced to M L T. Twenty-seven
 * lines checked, twenty-seven consistent, none rejected. Angles, phases and
 * the radian are dimensionless throughout:
 *
 *   T1  v = f lambda: [T-1][L] = [L T-1]. ✓
 *       v = lambda/T_period: [L]/[T] = [L T-1]. ✓
 *       omega = 2 pi f: [T-1], and k = 2 pi/lambda: [L-1]. ✓
 *       v = omega/k: [T-1]/[L-1] = [L T-1]. ✓ This is the one identity that
 *       makes omega in rad/s and k in rad/m impossible to swap: the wrong way
 *       up gives [L-1 T] = a time per length, which is not a speed.
 *       y = A sin(omega t - kx + phi): omega t = [T-1][T] = 1 and
 *       kx = [L-1][L] = 1, so the whole argument is dimensionless as a sine's
 *       argument must be, and y and A are both [L]. ✓
 *       V = SQRT(T/MU), THE CHAPTER'S BEST TEST. Tension is a force,
 *       [M L T-2]. Linear mass density is [M L-1]. T/mu = [M L T-2]/[M L-1] =
 *       [L2 T-2], which is a speed SQUARED, and the square root is [L T-1]. ✓
 *       A dropped mu would leave [M L T-2] under the root; a mu written as a
 *       volume density would leave [L4 T-2] and a square root of [L2 T-1].
 *       Neither is a speed, so both show up instantly.
 *       v_p = A omega cos(...): [L][T-1] = [L T-1], the same dimensions as the
 *       wave speed and a completely different quantity, which is exactly why
 *       dimensions alone cannot catch that confusion. ✓
 *   T2  A_res = sqrt(A1^2 + A2^2 + 2 A1 A2 cos phi): [L]. ✓
 *       I = I1 + I2 + 2 sqrt(I1 I2) cos phi: intensity is power per area,
 *       [M L2 T-3]/[L2] = [M T-3], and all three terms carry it. ✓
 *       I_max = (sqrt I1 + sqrt I2)^2: [M T-3]. ✓
 *       phi = (2 pi/lambda) delta-x: [L-1][L] = 1, dimensionless, as a phase
 *       must be. ✓
 *       f_beat = |f1 - f2|: [T-1], and t_beat = 1/f_beat: [T]. ✓
 *       df/f = (1/2) dT/T: a ratio of two frequencies against a ratio of two
 *       forces, so both sides are pure numbers. ✓ This is the one relation in
 *       the chapter that dimensions cannot police at all, since anything over
 *       itself is dimensionless; it is checked instead by the limiting case
 *       (dT = 0 must give df = 0) and by the exact f proportional to root T.
 *   T3  y = 2A sin(kx) cos(omega t): [L], with both arguments dimensionless. ✓
 *       nodes at x = n lambda/2 and antinodes at (2n+1) lambda/4: [L]. ✓
 *       f_n = n v/2L: [L T-1]/[L] = [T-1]. ✓
 *       f_1 = (1/2L) sqrt(T/mu): [L-1][L T-1] = [T-1]. ✓ This is the sonometer
 *       formula and it is the composition of the two lines above, so if either
 *       one is wrong this one cannot be right.
 *   T4  open pipe f_n = n v/2L: [T-1]. ✓
 *       closed pipe f_n = (2n-1) v/4L: [T-1]. ✓
 *       end correction e = 0.6 r: [L], a length from a length. ✓
 *       lambda = 2(l2 - l1): [L]; v = 2 f (l2 - l1): [T-1][L] = [L T-1];
 *       e = (l2 - 3 l1)/2: [L]. ✓
 *   T5  f' = f (v +/- v_o)/(v -/+ v_s): [T-1] times a ratio of two speeds,
 *       which is dimensionless, so [T-1]. ✓ A Doppler answer with the wrong
 *       dimensions is impossible, which is why this formula is checked by
 *       PLAUSIBILITY instead (see below) and never by dimensions.
 *       f_echo = f (v + u)/(v - u): [T-1]. ✓
 *       f_beat = 2 u f/(v - u): [L T-1][T-1]/[L T-1] = [T-1]. ✓
 *       wind, v replaced by (v +/- w): a speed plus a speed is a speed,
 *       [L T-1], so every Doppler line above survives the substitution
 *       unchanged. ✓
 *       delta-lambda/lambda = u/c: [L]/[L] = [L T-1]/[L T-1] = 1 on both
 *       sides. ✓
 *   Protip only, from Addendum A: P_avg = (1/2) mu omega^2 A^2 v =
 *       [M L-1][T-2][L2][L T-1] = [M L2 T-3] = watt. ✓
 *
 * PHYSICAL PLAUSIBILITY, checked three ways on every number below.
 *   v = f lambda holds in every worked example, practice answer and MCQ that
 *   produces two of the three. Every one is spelled out in its own step, so a
 *   student can see the check being run rather than being told it was.
 *   HARMONIC SERIES. Every open-pipe and string answer below is an integer
 *   multiple of that system's own fundamental, and every closed-pipe answer is
 *   an ODD multiple of its own. Topic 04's Example 3 is the check made into a
 *   question: 250, 350 and 450 Hz cannot be 2.5, 3.5 and 4.5 times a 100 Hz
 *   fundamental, so the pipe is closed and the fundamental is 50 Hz.
 *   BEATS. Every beat frequency below is the difference of two frequencies and
 *   is smaller than either of them, which rules out the two commonest wrong
 *   answers (the sum, and half the difference) without any working.
 *   SPEEDS. Sound in air is 330 to 343 m/s throughout and is never taken as a
 *   round 300; where the source's own question supplies its own value, that
 *   value is used and named. No speed anywhere approaches c, and the one
 *   optical answer, 3.06 x 10^5 m/s for a receding galaxy, is 0.1 per cent of
 *   c, which is why the non-relativistic Doppler formula is legitimate there.
 *
 * LIMITING CASES, used where they teach something rather than as decoration.
 *   f_1 = (1/2L) sqrt(T/mu) AS T GOES TO ZERO gives f_1 = 0: a slack string
 *   has no pitch, because there is no restoring force to return it, and this
 *   is why a string must be tightened before it can sound at all. Topic 03's
 *   deriv closes on it.
 *   THE SAME FORMULA AS L GOES TO ZERO sends f_1 to infinity, which is why
 *   pressing a fret raises the pitch and why the model has to fail once L is
 *   comparable to the string's own thickness: a real string has stiffness, and
 *   the perfectly flexible assumption dies first.
 *   BEATS AS f_2 APPROACHES f_1 give f_beat going to zero and t_beat going to
 *   infinity, which is not an edge case but the working principle of tuning by
 *   ear: the throb slows until it stops. Topic 02 makes that the point of the
 *   whole topic rather than a footnote.
 *   DOPPLER AS v_s APPROACHES v sends the denominator to zero and f' to
 *   infinity. The formula is not failing quietly; it is telling you the
 *   wavefronts have piled onto each other, which is the shock wave. Topic 05's
 *   `def` names v_s < v as the condition and this limit as the reason.
 *   CLOSED PIPE AGAINST OPEN PIPE AT EQUAL LENGTH gives v/4L against v/2L, a
 *   ratio of exactly 1 to 2, which is the octave a student can hear. Topic
 *   04's MCQ is that limit read backwards.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - math-11-03-trigonometry.ts, Topic 04 (graphs, periodicity, and the rule
 *     that the period of f(bx + c) is base/|b| while c only shifts the graph
 *     sideways): quoted directly in Topic 01, which identifies omega as the b
 *     of sin(omega t) and phi as its c, and never re-derives why a bigger b
 *     means a shorter period. The Trigonometry chapter's own line, "the
 *     voltage in your wall socket is a sine wave repeating fifty times a
 *     second", is the promissory note this chapter cashes.
 *   - math-11-03-trigonometry.ts, Topic 05 (sum-to-product: sin C + sin D =
 *     2 sin((C+D)/2) cos((C-D)/2) and cos C + cos D = 2 cos((C+D)/2)
 *     cos((C-D)/2)): quoted by name in BOTH of this chapter's superposition
 *     derivations, the beat formula in Topic 02 and the standing wave in Topic
 *     03. Neither is re-proved; both name the identity and cite the chapter,
 *     because both derivations are one identity plus one line of physics and
 *     pretending otherwise hides which is which.
 *   - phy-11-13-oscillations.ts DID NOT EXIST at the start of this chapter and
 *     DID exist by the end. It was checked for twice, as the brief asks. On
 *     the first check content/textbooks held no such file and lib/textbooks.ts
 *     carried no such key, so Topics 01 and 03 were drafted with SHM stated
 *     inline. On the second check, after Topic 05 was written, the sibling
 *     file had landed and was registered. It was then READ (not edited) and
 *     the three inline statements were replaced by real quotations, which is
 *     the outcome the brief prefers. What is quoted, and where:
 *       * Its Topic 01 phase convention, x = A sin(omega t + phi), NOT the
 *         cosine form. This chapter independently chose the same sine
 *         convention for y = A sin(omega t - kx + phi), so the two files agree
 *         line for line and a student can carry a phase across the seam
 *         without a quarter-cycle correction. That is luck rather than
 *         coordination, and it is worth a check if either convention ever
 *         moves.
 *       * Its v = A omega cos(omega t + phi) and v_max = A omega. Topic 01's
 *         particle-velocity `formula` note now says outright that
 *         (v_p)max = A omega IS that chapter's v_max with a position label
 *         attached, rather than presenting it as a new result.
 *       * Its picture of SHM as a motion with one mean position and one
 *         angular frequency. Topic 01's `think` block uses it to make the one
 *         genuinely new point a wave adds: the phase constant now depends on
 *         position, being reduced by kx, so each particle lags its left-hand
 *         neighbour by a fixed fraction of a cycle. Topic 03's standing-wave
 *         `formula` note uses the same quotation to define a node as a
 *         particle whose SHM has zero amplitude.
 *     Nothing is re-derived from SHM below and no number changed when the
 *     quotations went in.
 *   - phy-11-09-mech-fluids.ts and phy-11-10-thermal-properties.ts: nothing
 *     quoted. The bulk modulus behind the speed of sound in a gas is named in
 *     Topic 01 as belonging to those chapters and is not used numerically
 *     anywhere below, because the source never gives it either.
 *
 * ELEVEN FIGURES, ALL DESIGNED HERE. THE SOURCE NAMES NONE. There is not one
 * "Figure 14.n" callout in pages 925 to 976, and that is not extraction
 * damage: the chapter genuinely ships without figures, in a subject where the
 * snapshot-versus-history confusion and the node-count of a harmonic are
 * pictures before they are formulas. What to draw was decided by reading the
 * text for the places where prose is doing a picture's job. The set:
 *   T1  the same wave against x and against t, two chips, which is the single
 *       most valuable figure in the chapter and the reason `axisX` exists;
 *       transverse against longitudinal, two chips; the curved string element
 *       that the v = sqrt(T/mu) derivation talks about and never shows.
 *   T2  two pulses meeting, three chips (approaching, crest on crest, crest on
 *       trough); beats, two chips (the two tones, then the sum inside its
 *       envelope).
 *   T3  the standing wave assembled from its two travelling halves, two chips;
 *       the harmonics of a string, three chips.
 *   T4  the pipes, four chips (open fundamental, open second harmonic, closed
 *       fundamental, closed third harmonic), which is the whole all-versus-odd
 *       distinction drawn rather than asserted; the resonance tube at its
 *       first and second resonance, two chips, on one shared x-scale so that
 *       l2 - l1 = lambda/2 is visible as a length.
 *   T5  the wavefronts of a still source and of a moving one, two chips; and
 *       the asymmetry as a graph, f'/f against u/v for a moving source and a
 *       moving observer, which is the one chip in the chapter that is a plot
 *       of a formula rather than a picture of a thing.
 * THE PANEL RULE IS HONOURED THROUGHOUT: the harmonics of a string are three
 * chips and the pipes are four, never panels inside one frame. Six renderer
 * facts earlier chapters paid for are honoured and are worth restating,
 * because every one of them bit while drawing this chapter:
 *   - A horizontal arrow's `at: "above"` label lands BELOW the shaft when the
 *     arrow points left. Topic 02's first figure has two pulses approaching,
 *     so one arrow points each way; the leftward one carries `at: "below"` to
 *     put its label visually above, matching its partner.
 *   - `polys` with `fill: "hatch"` hatches the BOUNDING BOX. Every clamp and
 *     every closed pipe end below is therefore an axis-aligned rectangle and
 *     nothing else.
 *   - A `circle` CURVE is round only when both axes carry the same pixels per
 *     unit. Topic 05's wavefront frames are windowed and aspected to make that
 *     exactly true (x span 8, y span 5.72, aspect 0.72), which is why the
 *     bunching reads as bunching rather than as an ellipse.
 *   - A point label defaults to north-east, which is wrong wherever a curve
 *     leaves the point that way. Topic 03's node label carries `at: "nw"` for
 *     precisely that reason.
 *   - A curve is drawn across the WHOLE window, so a sine cannot be stopped at
 *     a clamp or a pipe mouth. Every bounded envelope below (string harmonics,
 *     pipes, resonance tube) is a `pts` curve sampled over its own interval,
 *     not a `sin` curve, so the wave stops where the instrument does.
 *   - Two long collinear strokes read as one line, so every wall and every
 *     pipe wall below is a `polys` edge rather than a `segments` stroke.
 * No new figure vocabulary is requested. Everything this chapter wanted to
 * draw, `plot` could already draw.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11Waves: Chapter = {
  "chapter": "14",
  "title": "Waves",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Wave Characteristics and Wave Speed",
      "chip": "01 TRAVEL",
      "kalam": "the pattern moves, the medium stays home",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Wave Characteristics and Speed</b><br>The foundation stone of the whole chapter. JEE Main typically asks one or two direct questions on the wave equation, on wave speed along a string, and on particle velocity against wave velocity. NEET leans towards conceptual questions on wave types and on the <i>v</i> = <i>f</i>λ relationship across media. JEE Advanced rarely asks this alone; it embeds it inside multi-concept problems such as variable-tension ropes and superposition setups. For CBSE Boards, expect a 2 to 3 mark derivation of wave speed on a string, or a short answer on wave characteristics.<br><br><b>02 · Superposition and Beats</b><br>A reliably scoring topic. JEE Main almost always has a question on beat frequency or on the tuning-fork loading and filing logic, and often one on the resultant amplitude or intensity of two coherent waves. NEET loves the conceptual beats question and the unknown-frequency puzzle. JEE Advanced folds beats into multi-step problems, sonometer tension changes and the <i>f</i> proportional to √<i>T</i> link. CBSE Boards typically ask for the principle of superposition or a short derivation of the beat frequency, for 2 to 3 marks.<br><br><b>03 · Standing Waves on a Stretched String</b><br>One of the highest-yield slices in the chapter. JEE Main reliably asks about node and antinode spacing, about the harmonic series, and about the sonometer's <i>f</i> proportional to √<i>T</i>/<i>L</i> scaling. NEET favours conceptual questions on what a standing wave is and on where the nodes sit. JEE Advanced builds multi-step problems on loaded wires and on touching a wire to kill a harmonic. CBSE Boards regularly ask for the derivation of a stationary wave and the harmonic series of a string, worth 3 to 5 marks.<br><br><b>04 · Air Columns, Organ Pipes and Resonance</b><br>The other half of the same idea, and just as heavily examined. JEE Main reliably asks one or two questions on organ-pipe harmonics, on the closed against open distinction, or on the three successive resonance frequencies trick. NEET favours conceptual questions on which harmonics a closed pipe produces. JEE Advanced builds resonance-tube and end-correction problems, often multi-step. CBSE Boards ask for the harmonic series of a pipe and for the resonance-tube method of finding the speed of sound.<br><br><b>05 · Doppler Effect</b><br>A guaranteed scorer and a perennial favourite. JEE Main almost always carries one Doppler problem: source moving, observer moving, both moving, or a reflection off a wall. NEET loves the conceptual asymmetry question and the simple approaching-source numerical. JEE Advanced layers in wind, angles, or double-Doppler echoes. CBSE Boards typically ask for the derivation for a moving source and a stationary observer, worth 2 to 3 marks, plus a short numerical."
        },
        {
          "t": "p",
          "html": "Picture the stands at a packed stadium during an India match. Someone a few sections away stands up, throws their arms in the air, and sits back down. The person next to them does the same a moment later, then the next, and the next. Within seconds a giant ripple of standing and sitting sweeps all the way around the ground. Here is the beautiful part: <b>not a single person travelled around the stadium</b>. Everyone stayed in their own seat. What travelled was the pattern.<br><br>That is a wave, in one sentence. A <b>wave is a disturbance that travels through a medium or through space, carrying energy and momentum from one place to another, without any net transport of the medium itself</b>. The particles of the medium only wiggle about their own fixed average position. Drop a pebble in a still pond and a twig floating nearby bobs up and down; it does not get carried to the shore, even though the ripple clearly races outward. The water goes up and down, and the energy goes outward."
        },
        {
          "t": "think",
          "html": "every particle of the medium is running its own little oscillation about its mean position, and for the waves we study here that oscillation is exactly the <b>simple harmonic motion</b> of the previous chapter. nothing about it is re-derived here. oscillations writes displacement as <i>x</i> = <i>A</i> sin(ω<i>t</i> + φ) with speed <i>A</i>ω cos(ω<i>t</i> + φ), largest at the mean position and zero at the two extremes, and this chapter uses that same sine convention on purpose so the two files agree line for line. the only new thing a wave adds is that <b>φ now depends on where you are standing</b>: the particle at position <i>x</i> is running the same SHM with its phase constant reduced by <i>kx</i>, so it is a fixed fraction of a cycle behind its neighbour on the left. what we call the wave moving is that <b>phase</b> being handed along the row, exactly like the stadium crowd handing the stand-up cue down the line."
        },
        {
          "t": "p",
          "html": "Waves get classified three ways, and every one of the three earns a question somewhere.<br><br><b>By whether they need a medium.</b> <b>Mechanical waves</b> need a material medium: sound, waves on a string, ripples on water. No medium, no wave, which is why sound cannot cross the vacuum of space however loud the explosion in the film was. <b>Non-mechanical or electromagnetic waves</b> such as light, radio and X-rays need no medium and travel happily through vacuum.<br><br><b>By the direction the particles vibrate.</b> In a <b>transverse</b> wave the particles vibrate <i>perpendicular</i> to the direction the wave travels: a wave on a guitar string, light, ripples on a pond. Flick one end of a long rope up and down and the rope moves vertically while the wave moves horizontally. In a <b>longitudinal</b> wave the particles vibrate <i>along</i> the direction the wave travels, creating <b>compressions</b> where they crowd together and <b>rarefactions</b> where they spread apart. Sound is the classic example. Push and pull one end of a slinky and the coils squeeze and stretch along the slinky's own length.<br><br><b>By dimensionality.</b> A wave on a string is one-dimensional, ripples on a pond surface are two-dimensional, and sound spreading from a firecracker is three-dimensional."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE TWO WAYS A PARTICLE CAN VIBRATE",
          "chips": ["transverse", "longitudinal"],
          "captions": [
            "A transverse wave on a rope. The wave travels to the right; every particle of the rope travels straight up and down, along the short double arrow, and goes nowhere to the right at all. This is the picture that makes particle velocity and wave velocity obviously different quantities: they are not even in the same direction.",
            "A longitudinal wave, drawn as the coils of a slinky. Each coil oscillates left and right about its own home position, along the same line the wave travels. Where the coils crowd together you have a compression, where they spread apart a rarefaction, and the pattern of crowding is what moves to the right. Sound in air is exactly this."
          ],
          "frames": [
            {
              "x": [0, 14.5], "y": [-1.9, 2.1], "axes": "none", "aspect": 0.5,
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.393, 0.383], [0.785, 0.707], [1.178, 0.924], [1.571, 1], [1.963, 0.924], [2.356, 0.707], [2.749, 0.383], [3.142, 0], [3.534, -0.383], [3.927, -0.707], [4.32, -0.924], [4.712, -1], [5.105, -0.924], [5.498, -0.707], [5.89, -0.383], [6.283, 0], [6.676, 0.383], [7.069, 0.707], [7.461, 0.924], [7.854, 1], [8.247, 0.924], [8.639, 0.707], [9.032, 0.383], [9.425, 0], [9.818, -0.383], [10.21, -0.707], [10.603, -0.924], [10.996, -1], [11.388, -0.924], [11.781, -0.707], [12.174, -0.383], [12.566, 0]], "smooth": true }
              ],
              "polys": [
                { "pts": [[0, 0], [12.566, 0]], "tone": "soft", "dash": true }
              ],
              "arrows": [
                { "from": [2, 1.72], "to": [6, 1.72], "tone": "amber", "label": "wave", "at": "above" },
                { "from": [13.6, -1], "to": [13.6, 1], "head": "both", "tone": "amber", "label": "particle", "at": "end" }
              ]
            },
            {
              "x": [0, 14.5], "y": [-1.9, 2.1], "axes": "none", "aspect": 0.5,
              "bands": [{ "x0": 2.54, "x1": 3.74 }, { "x0": 8.82, "x1": 10.02 }],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot" }, { "x": 0.532, "y": 0, "glyph": "dot" },
                { "x": 1.107, "y": 0, "glyph": "dot" }, { "x": 1.722, "y": 0, "glyph": "dot" },
                { "x": 2.358, "y": 0, "glyph": "dot" }, { "x": 2.996, "y": 0, "glyph": "dot" },
                { "x": 3.612, "y": 0, "glyph": "dot" }, { "x": 4.188, "y": 0, "glyph": "dot" },
                { "x": 4.709, "y": 0, "glyph": "dot" }, { "x": 5.169, "y": 0, "glyph": "dot" },
                { "x": 5.573, "y": 0, "glyph": "dot" }, { "x": 5.937, "y": 0, "glyph": "dot" },
                { "x": 6.291, "y": 0, "glyph": "dot" }, { "x": 6.667, "y": 0, "glyph": "dot" },
                { "x": 7.101, "y": 0, "glyph": "dot" }, { "x": 7.617, "y": 0, "glyph": "dot" },
                { "x": 8.223, "y": 0, "glyph": "dot" }, { "x": 8.899, "y": 0, "glyph": "dot" },
                { "x": 9.607, "y": 0, "glyph": "dot" }, { "x": 10.294, "y": 0, "glyph": "dot" },
                { "x": 10.913, "y": 0, "glyph": "dot" }, { "x": 11.437, "y": 0, "glyph": "dot" },
                { "x": 11.869, "y": 0, "glyph": "dot" }, { "x": 12.244, "y": 0, "glyph": "dot" }
              ],
              "labels": [
                { "x": 3.14, "y": 0.92, "text": "compression" },
                { "x": 6.28, "y": -0.92, "text": "rarefaction" }
              ],
              "arrows": [
                { "from": [2, 1.72], "to": [6, 1.72], "tone": "amber", "label": "wave", "at": "above" },
                { "from": [13.05, 0], "to": [14.25, 0], "head": "both", "tone": "amber", "label": "particle", "at": "above" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Every wave, whatever its type, is described by the same handful of quantities: how big the swing is (<b>amplitude</b>), how long one full pattern is in space (<b>wavelength</b>), how long one full oscillation takes in time (<b>time period</b>), how many oscillations happen per second (<b>frequency</b>), and how fast the disturbance travels (<b>wave speed</b>).<br><br>One sentence ties them together and it is the most useful sentence in the chapter: <b>the source sets the frequency, and the medium sets the speed</b>. Shouting louder does not make sound arrive sooner, and neither does shouting at a higher pitch. Wave speed in a given medium is fixed by the medium's own properties and by nothing else. So when a wave crosses from one medium into another, <i>f</i> is the quantity that survives unchanged, because the source is still shaking at the same rate; <i>v</i> and λ both change, and they change together so that <i>v</i> = <i>f</i>λ still holds."
        },
        {
          "t": "def",
          "term": "The sign convention, decided once for this whole chapter",
          "html": "A wave travelling in the <b>+<i>x</i> direction</b> is written <b><i>y</i>(<i>x</i>, <i>t</i>) = <i>A</i> sin(ω<i>t</i> − <i>kx</i> + φ)</b>. A wave travelling in the <b>−<i>x</i> direction</b> is written <b><i>y</i> = <i>A</i> sin(ω<i>t</i> + <i>kx</i> + φ)</b>. The direction is decided by the <b>relative sign of ω<i>t</i> and <i>kx</i></b>, never by which of the two is written first: opposite signs means +<i>x</i>, matching signs means −<i>x</i>. That is why sin(ω<i>t</i> − <i>kx</i>) and sin(<i>kx</i> − ω<i>t</i>) are both waves travelling in +<i>x</i>. They are not opposite directions, they are the same wave shifted in phase by π, since sin(<i>kx</i> − ω<i>t</i>) = −sin(ω<i>t</i> − <i>kx</i>). Every equation in this chapter is written the first way and stays that way, including the standing-wave derivation in Topic 03, which most books quietly write the other way round."
        },
        {
          "t": "defgrid",
          "title": "The quantities of a travelling wave",
          "rows": [
            { "k": "Amplitude <i>A</i>", "v": "maximum displacement of a particle from its mean position, metre (m), [L]" },
            { "k": "Wavelength λ", "v": "length of one complete cycle in space, metre (m), [L]" },
            { "k": "Time period <i>T</i>", "v": "time for one complete oscillation of a particle, second (s), [T]" },
            { "k": "Frequency <i>f</i>", "v": "<i>f</i> = 1/<i>T</i>, oscillations per second, hertz (Hz), [T<sup>−1</sup>]" },
            { "k": "Wave speed <i>v</i>", "v": "speed of the disturbance, metre per second (m/s), [L T<sup>−1</sup>]" },
            { "k": "Angular frequency ω", "v": "ω = 2π<i>f</i>, radian per second (rad/s), [T<sup>−1</sup>]" },
            { "k": "Wave number <i>k</i>", "v": "<i>k</i> = 2π/λ, radian per metre (rad/m), [L<sup>−1</sup>]" },
            { "k": "Linear mass density μ", "v": "mass per unit length of a string, kg/m, [M L<sup>−1</sup>]" },
            { "k": "Phase constant φ", "v": "sets where in its cycle the wave starts, radian, dimensionless" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER RELATION",
          "tag": "the one line every numerical answer must satisfy",
          "main": "<i>v</i> = <i>f</i>λ = λ/<i>T</i> = ω/<i>k</i><br>ω = 2π<i>f</i> = 2π/<i>T</i> · <i>k</i> = 2π/λ",
          "legend": [
            "<i>v</i> = wave speed (m/s), <i>f</i> = frequency (Hz), λ = wavelength (m), <i>T</i> = time period (s)",
            "ω = angular frequency (rad/s), <i>k</i> = angular wave number (rad/m). ω is a rate per second and <i>k</i> is a rate per metre, and swapping them is where most of the marks in this chapter are lost",
            "<i>v</i> = ω/<i>k</i> is the safest of the three forms, because you read ω and <i>k</i> straight off a printed wave equation with no conversions at all"
          ],
          "note": "In one medium f and v are both fixed, so lambda is fixed too. Change the medium and v changes, f does not, and lambda absorbs the difference. Change the source and f changes, v does not, and lambda absorbs the difference again. Lambda is the quantity that always gives way."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PROGRESSIVE WAVE, AND ITS PARTICLE VELOCITY",
          "main": "<i>y</i>(<i>x</i>, <i>t</i>) = <i>A</i> sin(ω<i>t</i> − <i>kx</i> + φ) for travel in +<i>x</i><br><i>v</i><sub>p</sub> = ∂<i>y</i>/∂<i>t</i> = <i>A</i>ω cos(ω<i>t</i> − <i>kx</i> + φ), (<i>v</i><sub>p</sub>)<sub>max</sub> = <i>A</i>ω",
          "legend": [
            "<i>y</i> = displacement of the particle at position <i>x</i> at time <i>t</i> (m), <i>A</i> = amplitude (m)",
            "ω = angular frequency (rad/s), <i>k</i> = wave number (rad/m), φ = phase constant (radian, dimensionless)",
            "<i>v</i><sub>p</sub> = velocity of one particle of the medium (m/s), which is NOT the wave speed <i>v</i> and is not even in the same direction for a transverse wave"
          ],
          "note": "Differentiating with respect to t holds x fixed, which is exactly what watching one particle means, and what comes out is Oscillations' own v = A omega cos(omega t + phi) with its phase constant read as (phi - kx). So (v_p)max = A omega is not a new result; it is that chapter's v_max, arriving one chapter later with a position label attached. From Trigonometry, the b in sin(bt) divides the period, so a bigger omega means a shorter T, and phi only slides the graph sideways."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A PHOTOGRAPH, AND A DIARY",
          "chips": ["y against x", "y against t"],
          "captions": [
            "A SNAPSHOT. Freeze time and photograph the whole rope at once. The horizontal axis is position, and the repeat distance you read off it is the WAVELENGTH. Every particle in the picture is at a different point of its cycle, which is why the curve has a shape at all.",
            "A HISTORY. Now stand at one fixed spot and watch that single particle for a while. The horizontal axis is time, and the repeat you read off it is the TIME PERIOD. The two graphs are the same curve, and they are answers to completely different questions. Read the axis label before you read anything else, because nothing else on the page tells you which one you are holding."
          ],
          "frames": [
            {
              "x": [0, 8.4], "y": [-1.5, 1.85], "aspect": 0.62,
              "axisX": "x (m)",
              "ticksX": { "at": [0, 2, 4, 6, 8], "labels": ["0", "λ/2", "λ", "3λ/2", "2λ"] },
              "curves": [{ "c": "sin", "b": 1.5708 }],
              "arrows": [
                { "from": [1, 1.35], "to": [5, 1.35], "head": "both", "tone": "amber", "label": "λ", "at": "mid" },
                { "from": [3, 0], "to": [3, -1], "tone": "amber", "label": "A", "at": "mid" }
              ]
            },
            {
              "x": [0, 8.4], "y": [-1.5, 1.85], "aspect": 0.62,
              "axisX": "t (s)",
              "ticksX": { "at": [0, 2, 4, 6, 8], "labels": ["0", "T/2", "T", "3T/2", "2T"] },
              "curves": [{ "c": "sin", "b": 1.5708 }],
              "arrows": [
                { "from": [1, 1.35], "to": [5, 1.35], "head": "both", "tone": "amber", "label": "T", "at": "mid" },
                { "from": [3, 0], "to": [3, -1], "tone": "amber", "label": "A", "at": "mid" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Those two graphs are the reason so many marks disappear in this chapter. They are drawn with the same pen and they look identical. The only thing that distinguishes them is the axis label, and the quantity you read off them is different: a repeat along the <i>x</i>-axis is λ, a repeat along the <i>t</i>-axis is <i>T</i>. Get that backwards and every subsequent number, <i>k</i>, ω, <i>v</i>, is wrong by the same silent factor.<br><br>The same confusion has a second face. <b>Particle velocity is not wave velocity.</b> The wave speed <i>v</i> = ω/<i>k</i> is how fast the <i>pattern</i> advances. The particle speed <i>v</i><sub>p</sub> = <i>A</i>ω cos(...) is how fast one <i>bit of the medium</i> is wiggling. They have the same dimensions, [L T<sup>−1</sup>], so dimensional analysis will never catch the mix-up for you. And either one can be the larger: crank the amplitude up on a slow-moving wave and the particles can easily outrun the pattern."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SPEED OF A TRANSVERSE WAVE ON A STRING",
          "tag": "tight and light goes fast",
          "main": "<i>v</i> = √(<i>T</i>/μ)",
          "legend": [
            "<i>T</i> = tension in the string (N). This <i>T</i> is a force and has nothing to do with the time period; where both appear below, the time period is written <i>T</i><sub>p</sub>",
            "μ = linear mass density, mass per unit length (kg/m). For a wire of radius <i>r</i> and material density ρ, μ = ρπ<i>r</i><sup>2</sup>, so μ scales as the SQUARE of the radius",
            "<i>v</i> = wave speed (m/s), and note what is absent: no <i>A</i>, no <i>f</i>, no λ. The string decides, not the way you shook it"
          ],
          "note": "Assumes a perfectly flexible, uniform string under constant tension, with small amplitudes. A real string has stiffness, which is why this formula fails first for thick, short strings and why a piano's lowest strings are wound rather than simply thickened."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY v = √(T/μ), TAP A LINE",
          "steps": [
            {
              "eq": "hop into a frame that travels along the string WITH the pulse, at speed <i>v</i>",
              "why": "This is the whole trick. In this frame the pulse is frozen in place and the string slides backwards through it at speed <i>v</i>. A moving bump has become a stationary bump with material flowing through it, which is a problem we can do."
            },
            {
              "eq": "at the crest, the string is curved, so treat a short piece of it as an arc of a circle of radius <i>R</i> subtending an angle 2θ at the centre. Its length is Δℓ = 2<i>R</i>θ and its mass is μΔℓ",
              "why": "Any smooth curve looks like a circular arc over a short enough stretch. Choosing the crest is deliberate: there the string is momentarily horizontal, so the geometry is at its simplest."
            },
            {
              "eq": "tension <i>T</i> pulls at both ends, tangent to the string. The horizontal parts cancel by symmetry; each vertical part is <i>T</i> sin θ, so the net inward force is <i>F</i> = 2<i>T</i> sin θ ≈ 2<i>T</i>θ",
              "why": "The small-angle approximation is legitimate because we chose the element to be small. Over a short enough arc sin θ and θ are indistinguishable, and that is what lets the geometry collapse."
            },
            {
              "eq": "substitute θ = Δℓ/2<i>R</i>: <i>F</i> = 2<i>T</i>(Δℓ/2<i>R</i>) = <i>T</i>Δℓ/<i>R</i>",
              "why": "The angle has been traded for a length and a radius, which is what we need, because the next step is about circular motion and circular motion is written in <i>R</i>."
            },
            {
              "eq": "in the moving frame that element is going round a circle of radius <i>R</i> at speed <i>v</i>, so it needs a centripetal force <i>F</i><sub>c</sub> = <i>mv</i><sup>2</sup>/<i>R</i> = μΔℓ<i>v</i><sup>2</sup>/<i>R</i>",
              "why": "There is nothing else acting on the element. The net tension we just computed IS the centripetal force, so the two expressions are equal."
            },
            {
              "eq": "<i>T</i>Δℓ/<i>R</i> = μΔℓ<i>v</i><sup>2</sup>/<i>R</i> ⟹ <i>T</i> = μ<i>v</i><sup>2</sup> ⟹ <i>v</i> = √(<i>T</i>/μ)",
              "why": "Both Δℓ and <i>R</i> cancel, which is the sign that the answer was never about the particular element we chose. Read what survives: tighter string means faster, heavier string means slower, and no amplitude and no frequency anywhere. Push the tension to zero and the speed goes to zero too, which is right: a slack string has no restoring force and carries nothing at all."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE ELEMENT AT THE CREST",
          "chips": ["one small arc, two tensions"],
          "captions": [
            "The derivation's picture, drawn in the frame that rides along with the pulse. A short piece of the crest is an arc of a circle of radius R subtending 2θ at the centre. The tension pulls tangentially at each end; the horizontal components cancel and the two vertical components add to 2T sin θ, pointing straight at the centre. That is the centripetal force holding the element on its circle, and setting it equal to mv²/R is the entire derivation."
          ],
          "frames": [
            {
              "x": [-4, 4], "y": [-0.7, 4.1], "axes": "none", "aspect": 0.613,
              "polys": [
                { "pts": [[-1.199, 2.967], [-0.935, 3.06], [-0.61, 3.141], [-0.279, 3.188], [0, 3.2], [0.279, 3.188], [0.61, 3.141], [0.935, 3.06], [1.199, 2.967]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1.199, 2.967], "dash": true, "label": "R", "at": "mid" },
                { "from": [0, 0], "to": [-1.199, 2.967], "dash": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.9, "from": 68, "to": 112, "label": "2θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [1.199, 2.967], "to": [2.404, 2.48], "tone": "ink", "label": "T", "at": "end" },
                { "from": [-1.199, 2.967], "to": [-2.404, 2.48], "tone": "ink", "label": "T", "at": "end" },
                { "from": [0, 3.2], "to": [0, 1.9], "tone": "amber", "label": "2T sin θ", "at": "mid" }
              ],
              "points": [
                { "x": 0, "y": 0, "label": "centre", "at": "se" }
              ],
              "labels": [
                { "x": 0, "y": 3.66, "text": "the element" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a printed wave equation, in order",
          "steps": [
            "<b>Match it to <i>y</i> = <i>A</i> sin(ω<i>t</i> − <i>kx</i> + φ) before touching anything.</b> The coefficient sitting on <i>t</i> is ω in rad/s; the coefficient sitting on <i>x</i> is <i>k</i> in rad/m. Do not convert yet.",
            "<b>Read the direction off the relative sign.</b> Opposite signs on ω<i>t</i> and <i>kx</i> means +<i>x</i>; matching signs means −<i>x</i>. Which term is written first is irrelevant.",
            "<b>Take the speed as <i>v</i> = ω/<i>k</i>.</b> This is the safe route, because it needs no 2π at all. Dividing <i>k</i> by ω is the single commonest slip and gives you a time per length instead of a speed.",
            "<b>Only now convert.</b> <i>f</i> = ω/2π in Hz, λ = 2π/<i>k</i> in m, <i>T</i><sub>p</sub> = 1/<i>f</i> in s.",
            "<b>Check with <i>v</i> = <i>f</i>λ.</b> If the <i>f</i> and λ you just computed do not multiply back to the <i>v</i> you got from ω/<i>k</i>, one of the two 2π factors went the wrong way.",
            "<b>Answer what was asked.</b> Maximum particle speed is <i>A</i>ω, maximum particle acceleration is <i>A</i>ω<sup>2</sup>, and neither of them is <i>v</i>."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A nylon string of a sitar has a linear mass density of 0.04 kg/m and is stretched under a tension of 36 N. A transverse wave of frequency 50 Hz is set up on it. Find (a) the speed of the wave and (b) its wavelength.",
          "steps": [
            "(a) The string decides the speed, so use <i>v</i> = √(<i>T</i>/μ) = √(36/0.04) = √900 = 30 m/s.",
            "(b) The source decides the frequency, so use <i>v</i> = <i>f</i>λ to get λ = <i>v</i>/<i>f</i> = 30/50 = 0.6 m.",
            "Check <i>v</i> = <i>f</i>λ: (50 Hz)(0.6 m) = 30 m/s, which is the speed we started from.",
            "Notice the logic of the two parts. Nothing about the 50 Hz entered part (a), and nothing about the tension entered part (b) except through <i>v</i>. Shake the same string at 100 Hz and the speed is still 30 m/s; only λ halves."
          ],
          "ans": "<i>v</i> = 30 m/s · λ = 0.6 m"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two strings A and B are made of the same material. String A has twice the diameter of B and is kept under four times the tension of B. Find the ratio of wave speeds <i>v</i><sub>A</sub> : <i>v</i><sub>B</sub>.",
          "steps": [
            "The trap: students see four times the tension, write √4 = 2, and answer 2 : 1. That forgets that the thicker string is also heavier per metre.",
            "Same material means the same volume density ρ, so μ = ρπ<i>r</i><sup>2</sup> and μ scales as the square of the diameter: μ<sub>A</sub>/μ<sub>B</sub> = (2)<sup>2</sup> = 4.",
            "<i>v</i><sub>A</sub>/<i>v</i><sub>B</sub> = √((<i>T</i><sub>A</sub>/μ<sub>A</sub>) ÷ (<i>T</i><sub>B</sub>/μ<sub>B</sub>)) = √((<i>T</i><sub>A</sub>/<i>T</i><sub>B</sub>)(μ<sub>B</sub>/μ<sub>A</sub>)) = √(4 × 1/4) = 1.",
            "The tension boost is exactly cancelled by the extra mass. This is a classic exam construction: the numbers are chosen so that the answer is 1, and anyone who forgets the μ scaling gets a confident, wrong 2."
          ],
          "ans": "<i>v</i><sub>A</sub> : <i>v</i><sub>B</sub> = 1 : 1"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A transverse wave on a string is <i>y</i> = 0.05 sin(8π<i>t</i> − 4π<i>x</i>), all quantities in SI units. Find (a) the amplitude, frequency, wavelength and wave speed, (b) the maximum speed of a particle of the string, and (c) the tension, given that the string has a linear mass density of 0.5 kg/m.",
          "steps": [
            "(a) Match to <i>y</i> = <i>A</i> sin(ω<i>t</i> − <i>kx</i>): <i>A</i> = 0.05 m, ω = 8π rad/s, <i>k</i> = 4π rad/m, and the signs are opposite, so the wave travels in +<i>x</i>.",
            "<i>f</i> = ω/2π = 8π/2π = 4 Hz. λ = 2π/<i>k</i> = 2π/4π = 0.5 m. <i>v</i> = ω/<i>k</i> = 8π/4π = 2 m/s.",
            "Check <i>v</i> = <i>f</i>λ: (4 Hz)(0.5 m) = 2 m/s. The two 2π factors cancelled correctly.",
            "(b) (<i>v</i><sub>p</sub>)<sub>max</sub> = <i>A</i>ω = (0.05)(8π) = 0.4π ≈ 1.26 m/s. This is LESS than the wave speed of 2 m/s here, but nothing forces that; double the amplitude and the particles would be the faster of the two.",
            "(c) Rearranging <i>v</i> = √(<i>T</i>/μ) gives <i>T</i> = μ<i>v</i><sup>2</sup> = (0.5)(2)<sup>2</sup> = 2 N."
          ],
          "ans": "<i>A</i> = 0.05 m, <i>f</i> = 4 Hz, λ = 0.5 m, <i>v</i> = 2 m/s in +<i>x</i> · (<i>v</i><sub>p</sub>)<sub>max</sub> ≈ 1.26 m/s · <i>T</i> = 2 N"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A uniform rope of mass 5 kg and length 2 m hangs vertically from a ceiling, and a block of mass 4 kg is attached to its lower free end. A transverse pulse is generated at the bottom of the rope. How long does it take to reach the top? Take <i>g</i> = 10 m/s<sup>2</sup>, as the question specifies.",
          "steps": [
            "The key insight: the tension is NOT constant. Every point of the rope has to support the weight of everything hanging below it, so the tension grows as you go up, the wave speed grows with it, and no single <i>v</i> will do.",
            "Linear mass density of the rope: μ = <i>M</i>/<i>L</i> = 5/2 = 2.5 kg/m.",
            "At a height <i>x</i> above the bottom, the load below is the block plus the rope beneath that point: <i>T</i>(<i>x</i>) = (<i>m</i> + μ<i>x</i>)<i>g</i> = (4 + 2.5<i>x</i>)(10).",
            "Local speed: <i>v</i>(<i>x</i>) = √(<i>T</i>(<i>x</i>)/μ) = √((4 + 2.5<i>x</i>)(10)/2.5) = √(4(4 + 2.5<i>x</i>)) = 2√(4 + 2.5<i>x</i>).",
            "Time is the integral of <i>dx</i>/<i>v</i>(<i>x</i>) from 0 to 2. Put <i>u</i> = 4 + 2.5<i>x</i>, so <i>du</i> = 2.5 <i>dx</i>, and the limits run from <i>u</i> = 4 to <i>u</i> = 9.",
            "<i>t</i> = ∫ <i>du</i>/(2.5 · 2√<i>u</i>) = (1/5)[2√<i>u</i>] from 4 to 9 = (1/5)(6 − 4) = 2/5 = 0.4 s.",
            "Sanity check on the physics: the pulse is slowest at the very bottom, where the tension is only the block's 40 N, and fastest at the top, where it also carries the rope's own 50 N. Anyone who plugs in one average speed gets a wrong number, and the direction of the error tells you which end they averaged towards."
          ],
          "ans": "<i>t</i> = 0.4 s"
        },
        {
          "t": "p",
          "html": "One more idea before the practice, and it is the one that connects this topic to everything after it. <b>When a wave crosses a boundary into a new medium, the frequency is the quantity that cannot change.</b> The particles at the boundary are being driven by the particles just behind them, and those are oscillating at the source's rate. Nothing at a boundary can invent or destroy oscillations, so they arrive on the far side at the same rate they left.<br><br>Everything else gives way. The speed is fixed by the new medium, so it jumps, and λ = <i>v</i>/<i>f</i> jumps with it. Sound is faster in water than in air, so a sound wave crossing into water gets a <i>longer</i> wavelength, not a shorter one. Light going the other way, from air into glass, slows down and its wavelength shortens, which is why the same colour has a different wavelength inside a lens. The colour, which is the frequency, does not change, which is why a red object does not look blue underwater."
        },
        {
          "t": "mcq",
          "q": "The speed of a transverse wave on a stretched string depends on:",
          "opts": [
            { "label": "the frequency of the wave", "nudge": "This confuses \"I can change the frequency by shaking faster\" with \"the speed changes\". Shaking faster changes <i>f</i>, and since <i>v</i> is already fixed by the string, λ is what adjusts." },
            { "label": "the amplitude of the wave", "nudge": "Amplitude sets the energy the wave carries, never its speed. Look at <i>v</i> = √(<i>T</i>/μ): there is no <i>A</i> in it, and the derivation cancelled the element entirely." },
            { "label": "the tension and linear mass density of the string", "nudge": null },
            { "label": "the wavelength of the wave", "nudge": "Same error as the first option seen from the other side. λ adjusts itself to whatever <i>f</i> you impose; it does not set <i>v</i>." }
          ],
          "correct": 2,
          "solution": "From v = √(T/μ), the speed is fixed entirely by the string's tension and its mass per unit length, which is to say by the medium. The source sets f; the medium sets v; λ = v/f is what is left over."
        },
        {
          "t": "mcq",
          "q": "A wave is represented by <i>y</i> = 5 sin(4<i>t</i> − 2<i>x</i>) in SI units. Its speed is:",
          "opts": [
            { "label": "0.5 m/s", "nudge": "This is <i>k</i>/ω, the formula upside down. The result has dimensions [L<sup>−1</sup> T], a time per metre, which is not a speed at all." },
            { "label": "2 m/s", "nudge": null },
            { "label": "4 m/s", "nudge": "This reads ω = 4 rad/s as if it were the speed. ω is a rate per second; a speed is a length per second, and 4 has no length in it." },
            { "label": "8 m/s", "nudge": "This multiplies ω by <i>k</i> instead of dividing. The product has dimensions [L<sup>−1</sup> T<sup>−1</sup>], which is neither a speed nor anything else in this chapter." }
          ],
          "correct": 1,
          "solution": "ω = 4 rad/s and k = 2 rad/m, so v = ω/k = 4/2 = 2 m/s. The signs on ωt and kx are opposite, so the wave travels in +x. Check with v = fλ: f = 4/2π = 0.637 Hz and λ = 2π/2 = π m, and (0.637)(3.14) = 2 m/s."
        },
        {
          "t": "mcq",
          "q": "Which of the following can travel through a vacuum?",
          "opts": [
            { "label": "sound waves", "nudge": "Sound is mechanical: it is a pattern of compressions in a material, and with no material there is nothing to compress. The explosions you hear in space films are a convention, not physics." },
            { "label": "waves on a string", "nudge": "The string IS the medium. Remove it and the question no longer means anything." },
            { "label": "X-rays", "nudge": null },
            { "label": "water waves", "nudge": "Also mechanical, and the most obviously so of the three wrong options: no water, no wave." }
          ],
          "correct": 2,
          "solution": "X-rays are electromagnetic and need no medium, which is why sunlight reaches us across 150 million km of vacuum. The other three are mechanical and each requires its own material medium."
        },
        {
          "t": "mcq",
          "q": "A sound wave travels from air into water. Which quantity is unchanged as it crosses the boundary?",
          "opts": [
            { "label": "speed", "nudge": "Sound travels roughly four times faster in water than in air. The speed is set by the medium and the medium has just changed, so this is the one quantity guaranteed to jump." },
            { "label": "wavelength", "nudge": "With <i>f</i> locked and <i>v</i> rising, λ = <i>v</i>/<i>f</i> must rise too. The wavelength in water is about four times the wavelength in air." },
            { "label": "frequency", "nudge": null },
            { "label": "all of these", "nudge": "Tempting if you cannot remember which quantity is locked, but only one of the three can be, because <i>v</i> = <i>f</i>λ has to keep holding on both sides." }
          ],
          "correct": 2,
          "solution": "Frequency is dictated by the source and is preserved across a boundary: nothing there can add or lose oscillations. Since sound is faster in water and f is fixed, v = fλ forces λ to increase in water."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A wave travels at 340 m/s with a frequency of 680 Hz. Find its wavelength and its time period.", "a": "λ = <i>v</i>/<i>f</i> = 340/680 = 0.50 m. <i>T</i><sub>p</sub> = 1/<i>f</i> = 1/680 = 1.47 × 10<sup>−3</sup> s. Check: (680)(0.50) = 340 m/s." },
            { "q": "[NEET] A steel wire of length 1 m and mass 20 g is stretched under a tension of 80 N. Find the speed of a transverse wave on it.", "a": "μ = 0.020/1 = 0.020 kg/m, so <i>v</i> = √(80/0.020) = √4000 = 63.2 m/s. Two significant figures: 63 m/s." },
            { "q": "[JEE Main] A progressive wave is <i>y</i> = 0.02 sin(100π<i>t</i> − 0.5π<i>x</i>) in SI units. Find its amplitude, frequency, wavelength, speed and direction.", "a": "<i>A</i> = 0.02 m; ω = 100π rad/s so <i>f</i> = 50 Hz; <i>k</i> = 0.5π rad/m so λ = 4 m; <i>v</i> = ω/<i>k</i> = 200 m/s; signs opposite, so +<i>x</i>. Check: (50)(4) = 200 m/s." },
            { "q": "[JEE Main] Two wires of the same material have radii in the ratio 1 : 2 and are stretched by tensions in the ratio 2 : 1. Find the ratio of transverse wave speeds.", "a": "μ scales as <i>r</i><sup>2</sup>, so μ<sub>1</sub> : μ<sub>2</sub> = 1 : 4. <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √((<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)(μ<sub>2</sub>/μ<sub>1</sub>)) = √(2 × 4) = √8 = 2√2, so 2√2 : 1, about 2.83 : 1." },
            { "q": "[JEE Advanced] A uniform rope of length 9 m and mass 3 kg hangs freely from a ceiling with nothing attached to its lower end. Find the time a transverse pulse takes to travel from the bottom to the top. Take <i>g</i> = 10 m/s<sup>2</sup>.", "a": "With no block, <i>T</i>(<i>x</i>) = μ<i>xg</i>, so <i>v</i>(<i>x</i>) = √(<i>gx</i>) and <i>t</i> = ∫<sub>0</sub><sup>L</sup> <i>dx</i>/√(<i>gx</i>) = 2√(<i>L</i>/<i>g</i>) = 2√0.9 = 1.9 s. Note that μ has cancelled: the answer does not depend on how heavy the rope is." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading a y-against-t graph as a y-against-x graph.</b> They are the same curve. The repeat on an <i>x</i>-axis is λ and the repeat on a <i>t</i>-axis is <i>T</i><sub>p</sub>, and nothing but the axis label distinguishes them. If a question gives you a graph, read its horizontal axis before you read the curve.",
            "<b>Confusing particle velocity with wave velocity.</b> <i>v</i> = ω/<i>k</i> is how fast the pattern moves; <i>v</i><sub>p</sub> = <i>A</i>ω cos(...) is how fast a bit of the medium wiggles. They share dimensions, so no dimensional check will save you, and for a transverse wave they are not even in the same direction.",
            "<b>Thinking sin(ω<i>t</i> − <i>kx</i>) and sin(<i>kx</i> − ω<i>t</i>) travel in opposite directions.</b> They do not. Both travel in +<i>x</i>, and they differ by a phase of π, since sin(<i>kx</i> − ω<i>t</i>) = −sin(ω<i>t</i> − <i>kx</i>). Direction is decided by the RELATIVE sign of the two terms, not by which is written first. Reverse the direction by making the signs match, as in sin(ω<i>t</i> + <i>kx</i>).",
            "<b>Forgetting that μ scales with thickness.</b> In a same-material problem a thicker string has μ proportional to <i>d</i><sup>2</sup>, so doubling the diameter quadruples μ. Ignoring this is the single most common error in two-string ratio questions, and it always makes the answer look tidier than it is.",
            "<b>Assuming frequency changes when the medium changes.</b> It never does. <i>f</i> belongs to the source; <i>v</i> belongs to the medium; λ = <i>v</i>/<i>f</i> is the one that absorbs the difference. Many students hold λ fixed instead, which gets the physics exactly backwards.",
            "<b>Using a single wave speed on a hanging rope.</b> Tension varies along a vertical rope, so the speed varies too and you have to integrate <i>dx</i>/<i>v</i>(<i>x</i>). A constant-speed shortcut always gives the wrong time.",
            "<b>Assuming every wave is sinusoidal.</b> A pulse of any shape travels perfectly well; the general solution of the wave equation is any function of (<i>x</i> − <i>vt</i>) plus any function of (<i>x</i> + <i>vt</i>). The sinusoid is the case where <i>A</i>, <i>f</i> and λ mean something, and Advanced problems that hand you a triangular or Gaussian pulse are testing whether you noticed."
          ]
        },
        {
          "t": "protip",
          "html": "for any \"same material, different dimensions\" string problem, skip the arithmetic and go straight to proportions. <i>v</i> ∝ √(<i>T</i>/<i>r</i><sup>2</sup>) = √<i>T</i>/<i>r</i>, so a ratio question becomes one line and the μ-scaling trap disappears on its own. two more things worth carrying. first, the energy a wave on a string carries per second is <i>P</i> = ½μω<sup>2</sup><i>A</i><sup>2</sup><i>v</i>, so power goes as the SQUARE of both amplitude and frequency: on μ = 0.05 kg/m under 5.0 N, a wave <i>y</i> = 0.01 sin(20π<i>t</i> − 2π<i>x</i>) has <i>v</i> = √(5.0/0.05) = 10 m/s and carries ½(0.05)(20π)<sup>2</sup>(0.01)<sup>2</sup>(10) = 0.01π<sup>2</sup> = 9.9 × 10<sup>−2</sup> W. check the tension and the wave number agree before you start: ω/<i>k</i> here is 20π/2π = 10 m/s, the same 10 m/s the string gives, and a problem where those two disagree is a broken problem, not a hard one. second, sound in a fluid travels at √(<i>B</i>/ρ) with <i>B</i> the bulk modulus, which is the same shape of formula as √(<i>T</i>/μ): a stiffness on top, an inertia underneath. every wave speed in physics has that shape."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>v</i> = <i>f</i>λ = λ/<i>T</i><sub>p</sub> = ω/<i>k</i>", "note": "the master relation; every numerical answer must satisfy it" },
            { "f": "ω = 2π<i>f</i> (rad/s) · <i>k</i> = 2π/λ (rad/m)", "note": "ω is per second, <i>k</i> is per metre; swapping them is the classic mark-loser" },
            { "f": "<i>y</i> = <i>A</i> sin(ω<i>t</i> − <i>kx</i> + φ)", "note": "+<i>x</i> travel; matching signs would mean −<i>x</i>" },
            { "f": "<i>v</i> = √(<i>T</i>/μ) on a string", "note": "medium only: no <i>A</i>, no <i>f</i>, no λ. μ ∝ <i>r</i><sup>2</sup> for one material" },
            { "f": "<i>v</i><sub>p</sub> = <i>A</i>ω cos(...), max <i>A</i>ω", "note": "the particle, not the pattern; same dimensions, different quantity" },
            { "f": "across a boundary: <i>f</i> fixed, <i>v</i> and λ change", "note": "source sets <i>f</i>, medium sets <i>v</i>, λ absorbs the difference" }
          ],
          "aids": [
            "\"tight and light goes fast\"",
            "\"source sets the frequency, medium sets the speed\"",
            "\"x-axis gives λ, t-axis gives T: read the label first\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Superposition, Interference and Beats",
      "chip": "02 ADD UP",
      "kalam": "waves add, then walk on unchanged",
      "blocks": [
        {
          "t": "p",
          "html": "Throw two pebbles into a still pond a little distance apart. Two sets of circular ripples spread out and somewhere in the middle they meet. What happens? They simply <b>pass through each other</b>. Where two crests meet, the water rises extra high. Where a crest meets a trough, the surface barely moves at all. And once they have crossed, each ripple carries on exactly as if the other had never been there.<br><br>Waves do not collide and bounce off each other like cricket balls. They add, point by point and instant by instant, and then they move on unchanged. That single sentence is the whole of this topic, and everything else in it is arithmetic."
        },
        {
          "t": "def",
          "term": "Principle of superposition",
          "html": "When two or more waves overlap at a point, the <b>resultant displacement at that point is the algebraic sum of the displacements each wave would have produced on its own</b>: <i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + <i>y</i><sub>3</sub> + ... Algebraic means signs count, so a +3 mm crest arriving with a −3 mm trough gives 0, not 6. And the principle is about <b>displacement</b>, never about intensity or amplitude: those are what you compute AFTER adding. The principle holds in a <b>linear medium</b>, which in practice means small amplitudes. Drive a medium hard enough and the waves genuinely do interact, the sum stops being simple, and everything below fails; that is where shock waves and sonic booms live."
        },
        {
          "t": "think",
          "html": "imagine two people pushing the same child on a swing. if both push in step with the swing's own motion, their efforts add and the child goes higher and higher. if one pushes forward at exactly the moment the other pulls back, they cancel and the swing barely moves. waves do the same thing: arriving <b>in phase</b> they reinforce, which is constructive interference; arriving <b>out of phase</b> they cancel, which is destructive. nothing else is going on. the whole of interference is two pushes and a question about timing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TWO PULSES MEETING",
          "chips": ["approaching", "crest on crest", "crest on trough"],
          "captions": [
            "Two pulses of the same height travelling towards each other along one string. So far they do not know about each other at all: each is simply moving at the speed the string dictates.",
            "The instant they coincide. The dashed curve is what either pulse would be doing alone; the solid curve is their algebraic sum, and it is twice as tall. This is constructive interference, and note that no energy was created: a moment later the two pulses separate again, each with its original height.",
            "The same meeting with one pulse inverted. Now the sum is zero everywhere along the string, and for that one instant the string looks perfectly straight. It is NOT at rest: every particle is moving at full speed, which is where the energy is hiding. A moment later the two pulses reappear, unharmed."
          ],
          "frames": [
            {
              "x": [-7, 7], "y": [-1.6, 2.4], "axes": "none", "aspect": 0.5,
              "curves": [
                { "c": "line", "m": 0, "k": 0, "soft": true },
                { "c": "pts", "pts": [[-5.6, 0], [-5.2, 0.146], [-4.8, 0.5], [-4.4, 0.854], [-4, 1], [-3.6, 0.854], [-3.2, 0.5], [-2.8, 0.146], [-2.4, 0]], "smooth": true },
                { "c": "pts", "pts": [[2.4, 0], [2.8, 0.146], [3.2, 0.5], [3.6, 0.854], [4, 1], [4.4, 0.854], [4.8, 0.5], [5.2, 0.146], [5.6, 0]], "smooth": true }
              ],
              "arrows": [
                { "from": [-4, 1.45], "to": [-2.6, 1.45], "tone": "amber", "label": "v", "at": "above" },
                { "from": [4, 1.45], "to": [2.6, 1.45], "tone": "amber", "label": "v", "at": "below" }
              ]
            },
            {
              "x": [-7, 7], "y": [-1.6, 2.4], "axes": "none", "aspect": 0.5,
              "curves": [
                { "c": "line", "m": 0, "k": 0, "soft": true },
                { "c": "pts", "pts": [[-1.6, 0], [-1.2, 0.146], [-0.8, 0.5], [-0.4, 0.854], [0, 1], [0.4, 0.854], [0.8, 0.5], [1.2, 0.146], [1.6, 0]], "smooth": true, "dash": true, "soft": true },
                { "c": "pts", "pts": [[-1.6, 0], [-1.2, 0.293], [-0.8, 1], [-0.4, 1.707], [0, 2], [0.4, 1.707], [0.8, 1], [1.2, 0.293], [1.6, 0]], "smooth": true }
              ],
              "labels": [
                { "x": 4.2, "y": 1.6, "text": "sum = 2A" }
              ]
            },
            {
              "x": [-7, 7], "y": [-1.6, 2.4], "axes": "none", "aspect": 0.5,
              "curves": [
                { "c": "pts", "pts": [[-1.6, 0], [-1.2, 0.146], [-0.8, 0.5], [-0.4, 0.854], [0, 1], [0.4, 0.854], [0.8, 0.5], [1.2, 0.146], [1.6, 0]], "smooth": true, "dash": true, "soft": true },
                { "c": "pts", "pts": [[-1.6, 0], [-1.2, -0.146], [-0.8, -0.5], [-0.4, -0.854], [0, -1], [0.4, -0.854], [0.8, -0.5], [1.2, -0.146], [1.6, 0]], "smooth": true, "dash": true, "soft": true },
                { "c": "line", "m": 0, "k": 0 }
              ],
              "labels": [
                { "x": 4.2, "y": 0.9, "text": "sum = 0" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Turn that into numbers. Two waves of the same frequency arriving at a point with amplitudes <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub> and a phase difference φ between them do not simply add their amplitudes; they add as vectors of lengths <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub> separated by angle φ, which is why a cosine appears. At φ = 0 the amplitudes add outright and the point is at its loudest or brightest. At φ = π they subtract, and if the two amplitudes happen to be equal the point goes completely dark or silent.<br><br>For that pattern to <i>stay put</i> long enough to be seen, the two sources must be <b>coherent</b>: the same frequency, and a phase relationship that does not drift. Two ordinary bulbs are not coherent, their phase relationship reshuffles billions of times a second, and that is why you never see interference fringes on a wall lit by two lamps. Equal amplitudes are not required for a pattern to exist; they only decide how dark the dark bands get."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RESULTANT AMPLITUDE AND INTENSITY",
          "tag": "same frequency, phase difference φ",
          "main": "<i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos φ)<br><i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos φ",
          "legend": [
            "<i>A</i><sub>1</sub>, <i>A</i><sub>2</sub> = the two amplitudes (m), <i>A</i><sub>res</sub> = resultant amplitude (m), φ = phase difference (radian, dimensionless)",
            "<i>I</i> = intensity, power per unit area, W/m<sup>2</sup>, dimensions [M T<sup>−3</sup>]. Intensity goes as the SQUARE of amplitude, so <i>I</i> ∝ <i>A</i><sup>2</sup> and <i>A</i> ∝ √<i>I</i>",
            "the third term is the INTERFERENCE term. Drop it and you have the incoherent case, where intensities simply add; keep it and you have interference"
          ],
          "note": "Both lines are the cosine rule in disguise. Two amplitudes at angle phi add like two sides of a triangle, which is exactly why phi = 0 gives A1 + A2 and phi = pi gives |A1 - A2|."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BRIGHTEST AND DARKEST POINTS",
          "main": "<i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup> · <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup><br>constructive: φ = 2<i>n</i>π, Δ<i>x</i> = <i>n</i>λ · destructive: φ = (2<i>n</i> + 1)π, Δ<i>x</i> = (2<i>n</i> + 1)λ/2<br>φ = (2π/λ)Δ<i>x</i>",
          "legend": [
            "<i>I</i><sub>1</sub>, <i>I</i><sub>2</sub> = the two intensities (W/m<sup>2</sup>), <i>I</i><sub>max</sub> and <i>I</i><sub>min</sub> the brightest and darkest values in the pattern",
            "Δ<i>x</i> = path difference, the extra distance one wave travels (m); φ = the phase difference it causes (radian); <i>n</i> = 0, 1, 2, ... a whole number",
            "λ = wavelength (m). One whole wavelength of extra path is one whole cycle of extra phase, which is the entire content of φ = (2π/λ)Δ<i>x</i>"
          ],
          "note": "Take the square roots before you add, never after. Imax uses the sum of the square roots of the intensities, because it is really the sum of the amplitudes, squared."
        },
        {
          "t": "defgrid",
          "title": "Interference at a glance",
          "rows": [
            { "k": "Coherent sources", "v": "same frequency and a constant phase relationship. Required for a STEADY pattern" },
            { "k": "Constructive", "v": "φ = 0, 2π, 4π, ... equivalently Δ<i>x</i> = 0, λ, 2λ, ... amplitudes add" },
            { "k": "Destructive", "v": "φ = π, 3π, 5π, ... equivalently Δ<i>x</i> = λ/2, 3λ/2, ... amplitudes subtract" },
            { "k": "Path to phase", "v": "φ = (2π/λ)Δ<i>x</i>, dimensionless from [L<sup>−1</sup>][L]" },
            { "k": "Contrast", "v": "<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)/(√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>))<sup>2</sup>; perfectly dark only when <i>I</i><sub>1</sub> = <i>I</i><sub>2</sub>" },
            { "k": "Incoherent sources", "v": "the cos φ term averages to zero over time, so <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> and no pattern is seen" }
          ]
        },
        {
          "t": "p",
          "html": "Now change one thing. What if the two waves have <i>almost</i> the same frequency, but not quite?<br><br>Picture two singers in a bhajan holding the same note, but one is a hair sharp. You do not hear two separate notes. You hear one note whose <b>loudness swells and fades, swells and fades</b>. That periodic rise and fall in loudness is called <b>beats</b>.<br><br>Here is why it happens. Because the frequencies differ a little, the two waves drift in and out of step at your ear. For a moment they are in phase and the sound is loud; a little later they have slipped out of phase and it is soft; a little later still they are back in phase and it is loud again. The number of these loud-and-soft cycles per second is the <b>beat frequency</b>, and it turns out to be exactly the difference of the two frequencies."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · TWO NEARBY NOTES, AND THEIR THROB",
          "chips": ["the two tones", "the sum, in its envelope"],
          "captions": [
            "Two tones of slightly different frequency, plotted against time at one fixed point in space. They begin in step on the left; by the middle of the picture they are exactly out of step; by the right they have come back into step. The frequency difference here is exaggerated so you can see it happen inside one screen.",
            "Their algebraic sum, with the envelope drawn dashed. The fast wiggle is the note you actually hear, at the AVERAGE of the two frequencies. The slow swelling and fading is the envelope, and the ear hears a maximum whenever the envelope is at either of its extremes, top or bottom, because loudness depends on the size of the swing and not on its sign. That is where the factor of two in the derivation comes from, and it is why the beat rate is the full difference rather than half of it."
          ],
          "frames": [
            {
              "x": [0, 32], "y": [-1.6, 1.6], "aspect": 0.5,
              "axisX": "t",
              "curves": [
                { "c": "sin", "b": 1.2 },
                { "c": "sin", "b": 1.6, "dash": true }
              ]
            },
            {
              "x": [0, 32], "y": [-2.8, 3.6], "aspect": 0.58,
              "axisX": "t",
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.685], [0.5, 1.282], [0.75, 1.715], [1, 1.932], [1.25, 1.907], [1.5, 1.649], [1.75, 1.198], [2, 0.617], [2.25, -0.015], [2.5, -0.616], [2.75, -1.109], [3, -1.439], [3.25, -1.571], [3.5, -1.503], [3.75, -1.257], [4, -0.88], [4.25, -0.432], [4.5, 0.021], [4.75, 0.417], [5, 0.71], [5.25, 0.871], [5.5, 0.896], [5.75, 0.801], [6, 0.619], [6.25, 0.394], [6.5, 0.171], [6.75, -0.011], [7, -0.125], [7.25, -0.16], [7.5, -0.124], [7.75, -0.041], [8, 0.057], [8.25, 0.135], [8.5, 0.159], [8.75, 0.111], [9, -0.015], [9.25, -0.206], [9.5, -0.433], [9.75, -0.654], [10, -0.824], [10.25, -0.901], [10.5, -0.854], [10.75, -0.669], [11, -0.357], [11.25, 0.053], [11.5, 0.509], [11.75, 0.95], [12, 1.309], [12.25, 1.528], [12.5, 1.563], [12.75, 1.397], [13, 1.037], [13.25, 0.52], [13.5, -0.091], [13.75, -0.721], [14, -1.285], [14.25, -1.708], [14.5, -1.928], [14.75, -1.912], [15, -1.657], [15.25, -1.191], [15.5, -0.574], [15.75, 0.118], [16, 0.794], [16.25, 1.368], [16.5, 1.768], [16.75, 1.944], [17, 1.879], [17.25, 1.586], [17.5, 1.108], [17.75, 0.512], [18, -0.121], [18.25, -0.708], [18.5, -1.177], [18.75, -1.475], [19, -1.573], [19.25, -1.473], [19.5, -1.201], [19.75, -0.807], [20, -0.354], [20.25, 0.093], [20.5, 0.475], [20.75, 0.747], [21, 0.885], [21.25, 0.888], [21.5, 0.776], [21.75, 0.583], [22, 0.355], [22.25, 0.136], [22.5, -0.035], [22.75, -0.136], [23, -0.158], [23.25, -0.113], [23.5, -0.025], [23.75, 0.073], [24, 0.143], [24.25, 0.157], [24.5, 0.095], [24.75, -0.043], [25, -0.243], [25.25, -0.472], [25.5, -0.688], [25.75, -0.845], [26, -0.903], [26.25, -0.833], [26.5, -0.625], [26.75, -0.294], [27, 0.128], [27.25, 0.586], [27.5, 1.018], [27.75, 1.357], [28, 1.547], [28.25, 1.549], [28.5, 1.349], [28.75, 0.959], [29, 0.422], [29.25, -0.198], [29.5, -0.822], [29.75, -1.368], [30, -1.76], [30.25, -1.942], [30.5, -1.885], [30.75, -1.592], [31, -1.096], [31.25, -0.46], [31.5, 0.235], [31.75, 0.9], [32, 1.449]] },
                { "c": "cos", "a": 2, "b": 0.2, "dash": true, "soft": true },
                { "c": "cos", "a": -2, "b": 0.2, "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [0, 2.6], "to": [15.708, 2.6], "head": "both", "tone": "amber", "label": "1 beat", "at": "mid" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BEAT FREQUENCY",
          "tag": "the difference, plain and simple",
          "main": "<i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| · <i>t</i><sub>beat</sub> = 1/|<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|<br>note actually heard: (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2",
          "legend": [
            "<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub> = the two source frequencies (Hz), <i>f</i><sub>beat</sub> = loudness maxima per second (Hz)",
            "<i>t</i><sub>beat</sub> = the beat period, the time between successive maxima of loudness (s)",
            "the modulus matters: a beat frequency is a count of throbs and can never be negative, and it is always SMALLER than either source frequency"
          ],
          "note": "Beats need the two frequencies to be close. Above roughly 7 Hz of difference the human ear stops resolving individual throbs and hears a rough blur instead, which is why tuning by ear only works once you are already nearly right."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE BEAT RATE IS THE FULL DIFFERENCE, TAP A LINE",
          "steps": [
            {
              "eq": "sit at one fixed point, say your eardrum, and drop the spatial part of both waves: <i>y</i><sub>1</sub> = <i>A</i> sin(2π<i>f</i><sub>1</sub><i>t</i>), <i>y</i><sub>2</sub> = <i>A</i> sin(2π<i>f</i><sub>2</sub><i>t</i>)",
              "why": "Beats are about how the combined loudness changes in TIME at one place, so the <i>x</i> dependence is dead weight. Equal amplitudes are assumed only to keep the algebra clean; unequal ones give the same beat rate with a shallower dip."
            },
            {
              "eq": "superpose and use sum-to-product from Trigonometry, sin <i>C</i> + sin <i>D</i> = 2 sin((<i>C</i> + <i>D</i>)/2) cos((<i>C</i> − <i>D</i>)/2)",
              "why": "This identity is proved in math-11-03-trigonometry, Topic 05, and is not re-proved here. It is the only mathematical input to the whole derivation; everything else is physics."
            },
            {
              "eq": "<i>y</i> = 2<i>A</i> cos(2π((<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)/2)<i>t</i>) · sin(2π((<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2)<i>t</i>)",
              "why": "Two factors with wildly different timescales. Read them separately, which is the whole art of this derivation."
            },
            {
              "eq": "the SECOND factor oscillates at the average frequency (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2",
              "why": "Since the two frequencies are close, their average is close to both. This is the note your ear actually identifies: two forks at 512 Hz and 516 Hz sound like one note at 514 Hz."
            },
            {
              "eq": "the FIRST factor, 2<i>A</i> cos(2π((<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>)/2)<i>t</i>), is a slowly varying amplitude ENVELOPE at frequency |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|/2",
              "why": "Because the two frequencies are close, the half-difference is tiny and this factor changes lazily. It is the swelling and fading you hear, not a note in its own right."
            },
            {
              "eq": "loudness depends on |2<i>A</i> cos(...)|, and a cosine reaches magnitude 1 TWICE per cycle, so <i>f</i><sub>beat</sub> = 2 × |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|/2 = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|",
              "why": "This is the step everyone drops. The ear cannot hear the sign of the envelope, only its size, so a maximum of loudness happens at cos = +1 AND at cos = −1. That doubling is the whole reason the answer is the clean difference rather than half of it. Push <i>f</i><sub>2</sub> towards <i>f</i><sub>1</sub> and the beat rate falls to zero and the beat period runs off to infinity, which is exactly what a tabla player listens for."
            }
          ]
        },
        {
          "t": "think",
          "html": "two phenomena, two dimensions, and students merge them constantly. <b>interference</b> needs two sources of the SAME frequency and gives you a pattern in SPACE: loud here, quiet there, and it sits still. <b>beats</b> need two sources of NEARLY the same frequency and give you a pattern in TIME: loud now, quiet in a moment, everywhere at once. same frequency means a picture on a wall; nearly the same frequency means a throb in your ear. if a question mentions a path difference it is interference; if it mentions per second it is beats."
        },
        {
          "t": "def",
          "term": "Loading and filing a tuning fork",
          "html": "Beat questions almost never give you the unknown frequency directly. They give you a beat count, which leaves TWO candidates, <i>f</i><sub>standard</sub> ± <i>f</i><sub>beat</sub>, and then one extra clue to break the tie. The clue is always a physical change to one fork, and there are only two of them. <b>Loading a fork with wax adds mass, so its frequency FALLS.</b> <b>Filing a fork removes mass from the prongs and stiffens them, so its frequency RISES.</b> Memorise one and the other follows. Getting this backwards flips every ± resolution you will ever do, so it is worth ten seconds now: wax weighs it down."
        },
        {
          "t": "proc",
          "title": "Resolving the plus-or-minus in a beat problem",
          "steps": [
            "<b>Write both candidates immediately.</b> <i>f</i><sub>unknown</sub> = <i>f</i><sub>known</sub> ± <i>f</i><sub>beat</sub>. With no further clue, both are genuinely valid and the honest answer is both.",
            "<b>Decide which way the change pushes the altered fork.</b> Wax pushes it down; filing pushes it up. Increasing a sonometer's tension pushes it up; lengthening the wire pushes it down.",
            "<b>Ask whether the beat count went up or down.</b> Up means the two frequencies moved APART; down means they moved TOGETHER.",
            "<b>Put the two together.</b> If the fork was pushed down and the beats fell, it must have been ABOVE the standard and moved towards it. If the fork was pushed down and the beats rose, it was BELOW and moved away.",
            "<b>Answer the original frequency, not the new one.</b> A favourite trap offers the value the fork became AFTER loading. Read the question again before you circle anything.",
            "<b>Sanity check.</b> The beat frequency must be smaller than either source frequency and must come out positive. If it does not, you have added where you should have subtracted."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TENSION LINK, FOR SMALL CHANGES",
          "tag": "how a tiny tweak becomes an audible beat",
          "main": "<i>f</i> ∝ √<i>T</i> ⟹ d<i>f</i>/<i>f</i> = ½ · d<i>T</i>/<i>T</i>",
          "legend": [
            "<i>f</i> = the wire's frequency (Hz), <i>T</i> = its tension (N); both d<i>f</i> and d<i>T</i> are small changes in the same units as <i>f</i> and <i>T</i>",
            "both sides are dimensionless, being ratios of like quantities, which is what makes this a percentage rule",
            "the ½ comes from the square root and is the whole point: a 1 per cent tension change gives only a 0.5 per cent frequency change"
          ],
          "note": "Take logarithms of f proportional to root T and differentiate. Valid only for small changes; for a fourfold tension change, use the exact f proportional to root T instead, which doubles f."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two tuning forks of frequencies 512 Hz and 516 Hz are sounded together. Find (a) the beat frequency and (b) the time interval between two successive maxima of loudness.",
          "steps": [
            "(a) <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| = |516 − 512| = 4 Hz.",
            "(b) The time between successive maxima is the beat period: <i>t</i><sub>beat</sub> = 1/<i>f</i><sub>beat</sub> = 1/4 = 0.25 s.",
            "Sanity check: 4 Hz is smaller than either 512 or 516, as a difference must be, and it is well under the roughly 7 Hz limit above which the ear stops resolving individual throbs, so these beats really would be audible as separate pulses.",
            "The note you would hear is the average, 514 Hz, throbbing four times a second."
          ],
          "ans": "4 beats per second, with maxima 0.25 s apart"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A tuning fork A of unknown frequency produces 6 beats per second with a standard fork of 480 Hz. When A is loaded with a little wax, the beat frequency drops to 3 per second. Find the original frequency of A.",
          "steps": [
            "The trap: students stop at \"6 beats, so A is 486 Hz or 474 Hz\" and then guess. The loading clue is what breaks the tie, and it is the whole question.",
            "Candidates: <i>f</i><sub>A</sub> = 480 ± 6 = 486 Hz or 474 Hz.",
            "Wax LOWERS a fork's frequency, so loading pushes A downward on the frequency scale.",
            "If <i>f</i><sub>A</sub> = 486 Hz, pushing it down moves it towards 480, the gap narrows and the beats fall. That matches the data.",
            "If <i>f</i><sub>A</sub> = 474 Hz, pushing it down moves it away from 480, the gap widens and the beats rise. That contradicts the data.",
            "The mental shortcut, worth carrying: wax lowers; the beats went DOWN after loading, so the fork was ABOVE the standard. Pick the higher candidate. If the beats had gone up, pick the lower one."
          ],
          "ans": "<i>f</i><sub>A</sub> = 486 Hz"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Two coherent sources produce sound waves of intensities <i>I</i> and 4<i>I</i> at a point. Find (a) the ratio <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> in the resulting interference pattern, and (b) the resultant intensity where the phase difference is π/2.",
          "steps": [
            "(a) Amplitudes go as √<i>I</i>, so <i>A</i><sub>1</sub> : <i>A</i><sub>2</sub> = √<i>I</i> : √(4<i>I</i>) = 1 : 2. Take the square roots FIRST.",
            "<i>I</i><sub>max</sub> = (√<i>I</i> + √(4<i>I</i>))<sup>2</sup> = (√<i>I</i> + 2√<i>I</i>)<sup>2</sup> = (3√<i>I</i>)<sup>2</sup> = 9<i>I</i>.",
            "<i>I</i><sub>min</sub> = (2√<i>I</i> − √<i>I</i>)<sup>2</sup> = (√<i>I</i>)<sup>2</sup> = <i>I</i>. So <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = 9 : 1.",
            "(b) At φ = π/2 the cosine is exactly zero, so the interference term vanishes: <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 0 = <i>I</i> + 4<i>I</i> = 5<i>I</i>.",
            "That 5<i>I</i> is worth noticing. It is the incoherent answer, and it is also the AVERAGE of 9<i>I</i> and <i>I</i>. Interference redistributes energy between bright and dark; it never creates or destroys any."
          ],
          "ans": "<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = 9 : 1 · resultant at φ = π/2 is 5<i>I</i>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "Two identical sonometer wires are stretched by the same tension of 100 N and vibrate in unison at a fundamental frequency of 400 Hz. The tension in one wire is now increased by 1 N. How many beats per second are heard when both are plucked? Assume the change is small.",
          "steps": [
            "The setup: identical wires at identical tension means identical frequency and zero beats. The 1 N nudge creates the small mismatch that produces beats.",
            "For a wire's fundamental, <i>f</i> = (1/2<i>L</i>)√(<i>T</i>/μ), so with <i>L</i> and μ fixed, <i>f</i> ∝ √<i>T</i>.",
            "For a small change, d<i>f</i>/<i>f</i> = ½ · d<i>T</i>/<i>T</i>.",
            "d<i>f</i> = ½ × (1/100) × 400 = 2 Hz, so the stretched wire moves to 402 Hz while the other stays at 400 Hz.",
            "<i>f</i><sub>beat</sub> = |402 − 400| = 2 beats per second.",
            "Reasoning check: a 1 per cent tension increase gives only a 0.5 per cent frequency increase, because the square root halves it. That is exactly why a tiny turn of a tuning peg produces an audible, countable throb rather than a wild jump in pitch, and it is why tuning by beats is precise enough to be worth doing."
          ],
          "ans": "2 beats per second"
        },
        {
          "t": "mcq",
          "q": "Two tuning forks produce 5 beats per second. One of them is 480 Hz. The frequency of the other could be:",
          "opts": [
            { "label": "475 Hz only", "nudge": "Picking one candidate with nothing to break the tie. Nothing in the question says which fork is higher, so this is half an answer presented as a whole one." },
            { "label": "485 Hz only", "nudge": "The same error the other way up. Both 475 and 485 give a beat count of 5 with 480, and the question offers no loading or filing clue to choose between them." },
            { "label": "either 475 Hz or 485 Hz", "nudge": null },
            { "label": "480 Hz", "nudge": "Two identical frequencies give |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| = 0, which is silence in the throbbing sense: no beats at all. That is what a tuner is aiming for, not what this question describes." }
          ],
          "correct": 2,
          "solution": "With only the beat count given, the second fork is 480 ± 5. Both 475 Hz and 485 Hz are valid, and it takes a loading or filing clue to decide which."
        },
        {
          "t": "mcq",
          "q": "When two waves of nearly equal frequencies superpose, the beat frequency equals:",
          "opts": [
            { "label": "the sum of the two frequencies", "nudge": "Frequencies do not add when waves superpose; displacements do. And a beat frequency must be SMALLER than either source, so a sum is ruled out before any working." },
            { "label": "the difference of the two frequencies", "nudge": null },
            { "label": "half the difference of the two frequencies", "nudge": "This is the ENVELOPE frequency, and it is the single commonest slip in the topic. Loudness depends on the size of the envelope, not its sign, so the ear hears a maximum twice per envelope cycle and the throb rate is doubled back up to the full difference." },
            { "label": "the average of the two frequencies", "nudge": "The average is the frequency of the note you HEAR, the fast factor in the derivation. It is not the rate at which that note swells and fades." }
          ],
          "correct": 1,
          "solution": "f_beat = |f₁ − f₂|. The derivation gives an envelope at half the difference, and the factor of two comes back because loudness responds to |cos|, which peaks twice per cycle."
        },
        {
          "t": "mcq",
          "q": "For two sources to produce a steady, observable interference pattern, they must have:",
          "opts": [
            { "label": "the same amplitude only", "nudge": "Equal amplitudes make the dark fringes perfectly dark, since <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup> vanishes only then. But a pattern exists at any amplitude ratio; equality improves the contrast, it does not create the pattern." },
            { "label": "the same frequency and a constant phase difference", "nudge": null },
            { "label": "slightly different frequencies", "nudge": "Slightly different frequencies give BEATS, which is a pattern in time and not a steady pattern in space. This is the exact confusion between the two halves of this topic." },
            { "label": "the same intensity and opposite phase", "nudge": "Opposite phase gives cancellation AT a point. That describes one dark spot, not the condition for a sustained pattern to exist at all." }
          ],
          "correct": 1,
          "solution": "Coherence means identical frequency plus a phase relationship that does not drift. Without it the cos φ term averages to zero over the observation time and the intensities simply add."
        },
        {
          "t": "mcq",
          "q": "Fork A gives 4 beats per second with fork B, whose frequency is 300 Hz. When A is loaded with wax the beat frequency becomes 2 per second. The ORIGINAL frequency of A is:",
          "opts": [
            { "label": "296 Hz", "nudge": "If A were 296 Hz, loading it pushes it further below 300, the gap widens and the beats would RISE. The data say they fell, so this candidate is eliminated by the clue." },
            { "label": "304 Hz", "nudge": null },
            { "label": "302 Hz", "nudge": "This is what A BECOMES after loading, not what it was. Answering the wrong stage of a two-stage question is a classic way to lose a mark you had already earned." },
            { "label": "298 Hz", "nudge": "The same wrong-stage error applied to the wrong candidate: it is what 296 Hz would become after loading, and 296 Hz was already ruled out." }
          ],
          "correct": 1,
          "solution": "Candidates are 300 ± 4 = 304 or 296. Wax lowers A's frequency; the beats fell from 4 to 2, so A moved towards B and must have started ABOVE it. Hence 304 Hz."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two sound waves of frequencies 200 Hz and 205 Hz are produced together. How many beats are heard in 10 s?", "a": "<i>f</i><sub>beat</sub> = 5 Hz, so in 10 s you hear 50 beats. Check: 5 Hz is smaller than either source and under the 7 Hz audibility limit." },
            { "q": "[NEET] Fork A has frequency 320 Hz and gives 5 beats per second with fork B. On FILING fork B, the beat frequency rises to 8 per second. Find the original frequency of B.", "a": "<b>325 Hz.</b> Candidates are 320 ± 5 = 315 or 325. Filing RAISES B's frequency. From 325 Hz it moves further above 320, so the gap widens and the beats rise, matching the data. From 315 Hz it would move towards 320 and the beats would fall, which contradicts the data. (The printed source answers 315 Hz; its own stated reasoning contradicts it.)" },
            { "q": "[JEE Main] Two coherent waves of amplitudes <i>A</i> and 3<i>A</i> interfere. Find the ratio of maximum to minimum resultant intensity.", "a": "<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = (3<i>A</i> + <i>A</i>)<sup>2</sup>/(3<i>A</i> − <i>A</i>)<sup>2</sup> = 16/4 = 4 : 1. Amplitudes were given directly here, so add them and then square; do not take further square roots." },
            { "q": "[JEE Main] The speed of sound in a gas is found from two waves of wavelengths 1.00 m and 1.01 m which together produce 4 beats per second. Find the speed of sound.", "a": "<i>f</i><sub>1</sub> = <i>v</i>/1.00 and <i>f</i><sub>2</sub> = <i>v</i>/1.01, so <i>v</i>(1 − 1/1.01) = 4, giving <i>v</i>(0.01/1.01) = 4 and <i>v</i> = 404 m/s. Check: <i>f</i><sub>1</sub> = 404 Hz, <i>f</i><sub>2</sub> = 400 Hz, difference 4 Hz." },
            { "q": "[JEE Advanced] A sonometer wire vibrating at 256 Hz is in unison with a tuning fork. By what percentage must its tension be increased to produce 4 beats per second?", "a": "d<i>f</i>/<i>f</i> = ½ · d<i>T</i>/<i>T</i>, so 4/256 = ½(d<i>T</i>/<i>T</i>) and d<i>T</i>/<i>T</i> = 8/256 = 0.03125, that is 3.125 per cent. The wire moves to 260 Hz, and 260 − 256 = 4 Hz as required." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Halving the beat frequency.</b> <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, not half of it. The half belongs to the amplitude envelope, and loudness throbs at twice the envelope rate because the ear responds to the size of the swing and not its sign.",
            "<b>Mixing up loading and filing.</b> Wax LOWERS a fork's frequency; filing RAISES it. Getting this backwards flips your entire ± resolution and turns a solved problem into a confidently wrong one.",
            "<b>Adding intensities for coherent sources.</b> For coherent waves you cannot write <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>: the interference term 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos φ is exactly what makes the pattern. Intensities add only for INCOHERENT sources, where that term averages away.",
            "<b>Adding amplitudes when intensities were given, or the reverse.</b> If the question hands you intensities, take square roots before adding. If it hands you amplitudes, add and then square. Doing it in the wrong order turns a 9 : 1 into a 25 : 9 with no warning.",
            "<b>Confusing the beat scenario with the interference scenario.</b> Same frequency gives a spatial pattern that sits still. Nearly equal frequencies give a throb in time, everywhere at once. Different phenomena, different formulas, and a question that mentions path difference is never a beats question.",
            "<b>Answering the frequency after the change.</b> Loading and filing questions ask for the ORIGINAL frequency, and one of the four options is always the value the fork became. Reread the question before circling."
          ]
        },
        {
          "t": "protip",
          "html": "for any loading or filing question, run one sentence instead of four cases: \"wax lowers, filing raises; if the beats moved the SAME way as the push, the fork was on the far side; if they moved the OPPOSITE way, it was on the near side.\" that is faster than reasoning it out and it never inverts. for intensity questions, memorise the shape rather than the formula: <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/(<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>))<sup>2</sup>, and get to <i>A</i> from <i>I</i> by a square root before you do anything else. and carry one physical fact as a check on every interference answer: energy is only redistributed, never made, so the resultant intensity averaged over the whole pattern always comes back to <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>. if your bright fringes are brighter than that allows, a factor has gone astray."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> + ...", "note": "displacements add algebraically, then the waves walk on unchanged" },
            { "f": "<i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos φ)", "note": "the cosine rule; φ = 0 adds, φ = π subtracts" },
            { "f": "<i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup>, <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup>", "note": "roots first, then add, then square" },
            { "f": "constructive Δ<i>x</i> = <i>n</i>λ · destructive Δ<i>x</i> = (2<i>n</i> + 1)λ/2", "note": "and φ = (2π/λ)Δ<i>x</i> converts between the two languages" },
            { "f": "<i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|, <i>t</i><sub>beat</sub> = 1/<i>f</i><sub>beat</sub>", "note": "no halving; note heard is the average (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2" },
            { "f": "<i>f</i> ∝ √<i>T</i> ⟹ d<i>f</i>/<i>f</i> = ½ d<i>T</i>/<i>T</i>", "note": "1 per cent on tension is 0.5 per cent on pitch" }
          ],
          "aids": [
            "\"wax weighs it down, filing files it up\"",
            "\"beat equals the difference, plain and simple\"",
            "\"same f gives a pattern in space, close f gives a throb in time\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Standing Waves on a Stretched String",
      "chip": "03 STAND STILL",
      "kalam": "the boundary chooses which wavelengths may live",
      "blocks": [
        {
          "t": "p",
          "html": "Pluck a sitar string and watch it closely. The string does not send a wave racing off to one side. Instead the whole string seems to vibrate <b>in place</b>, with some points swinging wildly and other points sitting perfectly still. The pattern shimmers and goes nowhere. That is a <b>standing wave</b>, also called a stationary wave.<br><br>Where does it come from? When you pluck the string a wave travels out to the fixed end, <b>reflects</b>, and travels back. Now you have two waves of the same frequency moving in <i>opposite directions</i> along the same string, and they superpose. At certain points the two always cancel, and those permanently dead points are the <b>nodes</b>. Halfway between them the two always reinforce, and those maximum-swing points are the <b>antinodes</b>. A standing wave is a travelling wave plus its own reflection, and nothing else."
        },
        {
          "t": "think",
          "html": "a travelling wave is a train running down a track: the disturbance carries energy from station to station and keeps going. a standing wave is a skipping rope two children are twirling. the rope is clearly oscillating, but the <b>pattern</b>, one big loop or two or three, just sits between their hands. no energy streams off the ends; it sloshes back and forth, trapped between the two boundaries. the nodes are where each child's hand holds the rope still, and the antinode is the fat middle of the loop."
        },
        {
          "t": "def",
          "term": "What happens at a boundary, and why the sign matters",
          "html": "A wave reaching the end of a string reflects, and HOW it reflects depends on what it hits. At a <b>fixed end</b> the string cannot move at all, so the reflected wave must cancel the incoming one there at every instant. That forces the reflected wave to be <b>inverted</b>: a crest returns as a trough, a phase change of π. At a <b>free end</b>, one that can slide, nothing has to cancel and the reflection comes back <b>upright</b>, with no phase change. A fixed end is therefore always a node and a free end is always an antinode, and that single rule is what decides every harmonic series in this topic and the next. It is also why the derivation below starts by putting a minus sign on the reflected wave rather than by assuming one."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ASSEMBLING A STANDING WAVE",
          "chips": ["two travelling halves", "their sum"],
          "captions": [
            "One instant, and two waves. One is running left, the other right, and they have the same amplitude, frequency and wavelength. Neither one is standing still; both are perfectly ordinary travelling waves. This is what is actually on the string.",
            "The same instant, with the sum drawn solid and the two extremes of the sum drawn dashed. The string swings between those two dashed curves and never leaves them. Where the dashed curves cross, on the axis, the string never moves at all: those are the NODES, spaced λ/2 apart. Halfway between each pair the swing is largest: those are the ANTINODES, and a node is λ/4 from its nearest antinode."
          ],
          "frames": [
            {
              "x": [-0.5, 10], "y": [-2.7, 2.7], "axes": "none", "aspect": 0.62,
              "curves": [
                { "c": "line", "m": 0, "k": 0, "soft": true },
                { "c": "sin", "shift": -0.7854, "soft": true },
                { "c": "sin", "shift": 0.7854, "dash": true }
              ],
              "arrows": [
                { "from": [3.2, 2.2], "to": [1.4, 2.2], "tone": "amber", "label": "v", "at": "below" },
                { "from": [6.6, 2.2], "to": [8.4, 2.2], "tone": "amber", "label": "v", "at": "above" }
              ]
            },
            {
              "x": [-0.5, 10], "y": [-2.7, 2.7], "axes": "none", "aspect": 0.62,
              "curves": [
                { "c": "line", "m": 0, "k": 0, "soft": true },
                { "c": "sin", "a": 2, "dash": true, "soft": true },
                { "c": "sin", "a": -2, "dash": true, "soft": true },
                { "c": "sin", "a": 1.4142 }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot" },
                { "x": 3.1416, "y": 0, "glyph": "dot" },
                { "x": 9.4248, "y": 0, "glyph": "dot" }
              ],
              "points": [
                { "x": 6.2832, "y": 0, "label": "node", "at": "nw" },
                { "x": 4.7124, "y": 2, "label": "antinode", "at": "ne", "open": true }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE STANDING WAVE, IN THIS CHAPTER'S OWN SIGN CONVENTION",
          "steps": [
            {
              "eq": "put the fixed end at <i>x</i> = 0 and send a wave in from the right, so it travels in −<i>x</i>: <i>y</i><sub>1</sub> = <i>A</i> sin(ω<i>t</i> + <i>kx</i>)",
              "why": "Matching signs on ω<i>t</i> and <i>kx</i> means travel in −<i>x</i>, exactly as Topic 01 declared. Nothing here is a new convention."
            },
            {
              "eq": "the reflection travels back in +<i>x</i>, so write it as <i>y</i><sub>2</sub> = <i>B</i> sin(ω<i>t</i> − <i>kx</i>), with <i>B</i> unknown for now",
              "why": "Do not assume the reflected amplitude or its sign. Let the boundary condition decide, which is the only honest way to get the phase change."
            },
            {
              "eq": "the end is fixed, so <i>y</i>(0, <i>t</i>) = 0 for every <i>t</i>: (<i>A</i> + <i>B</i>) sin(ω<i>t</i>) = 0 ⟹ <i>B</i> = −<i>A</i>",
              "why": "A sine is not zero for all <i>t</i>, so the bracket must be. The reflected wave is inverted, and this is where the phase change of π at a fixed end comes from rather than being asserted."
            },
            {
              "eq": "<i>y</i> = <i>A</i> sin(ω<i>t</i> + <i>kx</i>) − <i>A</i> sin(ω<i>t</i> − <i>kx</i>)",
              "why": "Superposition, straight from Topic 02. Two travelling waves, added algebraically at every point and every instant."
            },
            {
              "eq": "apply sin <i>C</i> − sin <i>D</i> = 2 cos((<i>C</i> + <i>D</i>)/2) sin((<i>C</i> − <i>D</i>)/2) with <i>C</i> = ω<i>t</i> + <i>kx</i> and <i>D</i> = ω<i>t</i> − <i>kx</i>: <i>y</i> = 2<i>A</i> sin(<i>kx</i>) cos(ω<i>t</i>)",
              "why": "The identity is proved in math-11-03-trigonometry, Topic 05, and is not re-proved here. The half-sum is ω<i>t</i> and the half-difference is <i>kx</i>, which is the entire calculation."
            },
            {
              "eq": "read the physics: <i>x</i> and <i>t</i> have SEPARATED",
              "why": "A travelling wave has the form sin(ω<i>t</i> − <i>kx</i>), where position and time are locked together inside one bracket. Here they are in different factors. Every particle oscillates in time as cos(ω<i>t</i>), and every particle does it in step with every other; what differs from place to place is only the SIZE of the swing, 2<i>A</i> sin(<i>kx</i>). Nothing propagates. The pattern stands."
            },
            {
              "eq": "nodes: sin(<i>kx</i>) = 0 ⟹ <i>kx</i> = <i>n</i>π ⟹ <i>x</i> = <i>n</i>λ/2. Antinodes: |sin(<i>kx</i>)| = 1 ⟹ <i>x</i> = (2<i>n</i> + 1)λ/4",
              "why": "Since <i>k</i> = 2π/λ, the node spacing is λ/2 and a node sits λ/4 from its nearest antinode. Note that <i>x</i> = 0 comes out a node automatically, which is the boundary condition we imposed showing up in the answer, as it must."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE STANDING WAVE",
          "tag": "amplitude that depends on where you stand",
          "main": "<i>y</i> = 2<i>A</i> sin(<i>kx</i>) cos(ω<i>t</i>)<br>nodes at <i>x</i> = <i>n</i>λ/2 · antinodes at <i>x</i> = (2<i>n</i> + 1)λ/4",
          "legend": [
            "<i>A</i> = amplitude of each travelling wave (m), so the largest swing anywhere is 2<i>A</i>, at an antinode",
            "<i>k</i> = 2π/λ (rad/m), ω = 2π<i>f</i> (rad/s), <i>x</i> = distance from the fixed end (m), <i>t</i> = time (s)",
            "<i>n</i> = 0, 1, 2, ... a whole number. The position-dependent amplitude 2<i>A</i> sin(<i>kx</i>) is the SIGNATURE of a standing wave: no travelling wave has one"
          ],
          "note": "Every particle still runs Oscillations' simple harmonic motion in time, and here they all reach their extremes together, which a travelling wave never does. What the position decides is only the amplitude of that motion. A node is a particle whose SHM has amplitude zero, and an antinode is one whose amplitude is the largest available, 2A."
        },
        {
          "t": "defgrid",
          "title": "Distances on a standing wave",
          "rows": [
            { "k": "Node", "v": "a point of permanently zero displacement, where the two waves always cancel" },
            { "k": "Antinode", "v": "a point of maximum displacement amplitude 2<i>A</i>, where the two always reinforce" },
            { "k": "Node to node", "v": "λ/2, and the same for antinode to antinode" },
            { "k": "Node to nearest antinode", "v": "λ/4, exactly halfway between two nodes" },
            { "k": "One loop", "v": "the bulge between two consecutive nodes; one loop is λ/2 of string" },
            { "k": "Fixed end", "v": "always a node. A free end is always an antinode" }
          ]
        },
        {
          "t": "p",
          "html": "Now comes the idea that turns a standing wave into music. A <b>bounded</b> medium, a string clamped at both ends or an air column shut inside a flute, can only support standing waves whose pattern <i>fits neatly between its boundaries</i>.<br><br>A string fixed at both ends must have a node at each end. Not every wavelength can manage that. Only the ones where a whole number of half-loops fit exactly into the length <i>L</i> survive; everything else fails to match at one end or the other and dies out within a few reflections. Those surviving frequencies are the <b>harmonics</b>, the lowest of them is the <b>fundamental</b>, and this is the whole reason a string has a pitch at all rather than a hiss. It is also why a shorter string sounds higher: fewer centimetres means shorter allowed wavelengths means higher frequency, which is what your finger is doing every time it presses a fret."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE HARMONIC SERIES OF A STRING, TAP A LINE",
          "steps": [
            {
              "eq": "clamp the string at <i>x</i> = 0 and <i>x</i> = <i>L</i>. Both ends must be nodes",
              "why": "A clamp holds the string still, and a point held still is a node by definition. The end at <i>x</i> = 0 is already a node from the standing-wave derivation above, so only the far end is a new condition."
            },
            {
              "eq": "for <i>x</i> = <i>L</i> to be a node: sin(<i>kL</i>) = 0 ⟹ <i>kL</i> = <i>n</i>π, with <i>n</i> = 1, 2, 3, ...",
              "why": "This is the filter. The boundary is not describing the wave, it is SELECTING which waves are allowed to exist on this string at all. Everything else dies out."
            },
            {
              "eq": "substitute <i>k</i> = 2π/λ: (2π/λ)<i>L</i> = <i>n</i>π ⟹ <i>L</i> = <i>n</i>λ/2 ⟹ λ<sub>n</sub> = 2<i>L</i>/<i>n</i>",
              "why": "In words: a whole number of half-wavelengths must fit into the length. One half-loop, two, three, and so on. Nothing in between is possible."
            },
            {
              "eq": "use <i>v</i> = <i>f</i>λ: <i>f</i><sub>n</sub> = <i>v</i>/λ<sub>n</sub> = <i>nv</i>/2<i>L</i>",
              "why": "The speed <i>v</i> belongs to the string and is the same for every harmonic, so the allowed frequencies are simply <i>n</i> times the lowest one. A string supports EVERY integer multiple of its fundamental, and that evenly spaced series is why a plucked string sounds musical rather than like a clang."
            },
            {
              "eq": "the fundamental is <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i>, and substituting <i>v</i> = √(<i>T</i>/μ) gives <i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ)",
              "why": "This is the sonometer's master formula, and it is nothing but Topic 01's wave speed poured into this topic's boundary condition. Every law of the vibrating string is one of its three variables read on its own."
            },
            {
              "eq": "check the limits",
              "why": "Send <i>T</i> to zero and <i>f</i><sub>1</sub> goes to zero: a slack string has no restoring force, so nothing oscillates and there is no pitch, which is why a string must be tightened before it will sound. Send <i>L</i> to zero and <i>f</i><sub>1</sub> runs off to infinity, which is the right direction, and also where the model must eventually fail: a real string has stiffness, and once <i>L</i> is comparable to its thickness the perfectly flexible assumption dies first."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE FIRST THREE HARMONICS OF A STRING",
          "chips": ["fundamental", "second harmonic", "third harmonic"],
          "captions": [
            "The FUNDAMENTAL, n = 1. One loop fits between the clamps, so L = λ/2 and λ₁ = 2L. The solid and dashed curves are the two extremes the string swings between. Nodes: the two clamps only. Frequency f₁ = v/2L.",
            "The SECOND HARMONIC, n = 2. Two loops fit, so L = λ and λ₂ = L. A new node has appeared at the exact middle, and the frequency has doubled to 2f₁. Touch the string lightly at its midpoint and this is the mode that survives, because it already has a node there.",
            "The THIRD HARMONIC, n = 3. Three loops, L = 3λ/2, λ₃ = 2L/3, frequency 3f₁. Count the internal nodes as you tap along the three chips: 0, then 1, then 2. The n-th harmonic has n loops and n − 1 internal nodes, and that count is the fastest way to identify a mode from a picture."
          ],
          "frames": [
            {
              "x": [-0.4, 6.4], "y": [-1.5, 1.7], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[-0.4, -1.15], [0, -1.15], [0, 1.15], [-0.4, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[6, -1.15], [6.4, -1.15], [6.4, 1.15], [6, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.131], [0.5, 0.259], [0.75, 0.383], [1, 0.5], [1.25, 0.609], [1.5, 0.707], [1.75, 0.793], [2, 0.866], [2.25, 0.924], [2.5, 0.966], [2.75, 0.991], [3, 1], [3.25, 0.991], [3.5, 0.966], [3.75, 0.924], [4, 0.866], [4.25, 0.793], [4.5, 0.707], [4.75, 0.609], [5, 0.5], [5.25, 0.383], [5.5, 0.259], [5.75, 0.131], [6, 0]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.25, -0.131], [0.5, -0.259], [0.75, -0.383], [1, -0.5], [1.25, -0.609], [1.5, -0.707], [1.75, -0.793], [2, -0.866], [2.25, -0.924], [2.5, -0.966], [2.75, -0.991], [3, -1], [3.25, -0.991], [3.5, -0.966], [3.75, -0.924], [4, -0.866], [4.25, -0.793], [4.5, -0.707], [4.75, -0.609], [5, -0.5], [5.25, -0.383], [5.5, -0.259], [5.75, -0.131], [6, 0]] }
              ],
              "labels": [{ "x": 3, "y": 1.38, "text": "L = λ/2" }]
            },
            {
              "x": [-0.4, 6.4], "y": [-1.5, 1.7], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[-0.4, -1.15], [0, -1.15], [0, 1.15], [-0.4, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[6, -1.15], [6.4, -1.15], [6.4, 1.15], [6, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.259], [0.5, 0.5], [0.75, 0.707], [1, 0.866], [1.25, 0.966], [1.5, 1], [1.75, 0.966], [2, 0.866], [2.25, 0.707], [2.5, 0.5], [2.75, 0.259], [3, 0], [3.25, -0.259], [3.5, -0.5], [3.75, -0.707], [4, -0.866], [4.25, -0.966], [4.5, -1], [4.75, -0.966], [5, -0.866], [5.25, -0.707], [5.5, -0.5], [5.75, -0.259], [6, 0]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.25, -0.259], [0.5, -0.5], [0.75, -0.707], [1, -0.866], [1.25, -0.966], [1.5, -1], [1.75, -0.966], [2, -0.866], [2.25, -0.707], [2.5, -0.5], [2.75, -0.259], [3, 0], [3.25, 0.259], [3.5, 0.5], [3.75, 0.707], [4, 0.866], [4.25, 0.966], [4.5, 1], [4.75, 0.966], [5, 0.866], [5.25, 0.707], [5.5, 0.5], [5.75, 0.259], [6, 0]] }
              ],
              "marks": [{ "x": 3, "y": 0, "glyph": "dot" }],
              "labels": [{ "x": 3, "y": 1.38, "text": "L = λ" }]
            },
            {
              "x": [-0.4, 6.4], "y": [-1.5, 1.7], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[-0.4, -1.15], [0, -1.15], [0, 1.15], [-0.4, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[6, -1.15], [6.4, -1.15], [6.4, 1.15], [6, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.383], [0.5, 0.707], [0.75, 0.924], [1, 1], [1.25, 0.924], [1.5, 0.707], [1.75, 0.383], [2, 0], [2.25, -0.383], [2.5, -0.707], [2.75, -0.924], [3, -1], [3.25, -0.924], [3.5, -0.707], [3.75, -0.383], [4, 0], [4.25, 0.383], [4.5, 0.707], [4.75, 0.924], [5, 1], [5.25, 0.924], [5.5, 0.707], [5.75, 0.383], [6, 0]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.25, -0.383], [0.5, -0.707], [0.75, -0.924], [1, -1], [1.25, -0.924], [1.5, -0.707], [1.75, -0.383], [2, 0], [2.25, 0.383], [2.5, 0.707], [2.75, 0.924], [3, 1], [3.25, 0.924], [3.5, 0.707], [3.75, 0.383], [4, 0], [4.25, -0.383], [4.5, -0.707], [4.75, -0.924], [5, -1], [5.25, -0.924], [5.5, -0.707], [5.75, -0.383], [6, 0]] }
              ],
              "marks": [{ "x": 2, "y": 0, "glyph": "dot" }, { "x": 4, "y": 0, "glyph": "dot" }],
              "labels": [{ "x": 3, "y": 1.38, "text": "L = 3λ/2" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE HARMONICS OF A STRING FIXED AT BOTH ENDS",
          "tag": "every integer multiple, none missing",
          "main": "λ<sub>n</sub> = 2<i>L</i>/<i>n</i> · <i>f</i><sub>n</sub> = <i>nv</i>/2<i>L</i>, <i>n</i> = 1, 2, 3, ...<br><i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = (1/2<i>L</i>)√(<i>T</i>/μ)",
          "legend": [
            "<i>L</i> = vibrating length between the clamps (m), <i>n</i> = the harmonic number, a whole number and the number of loops you can count",
            "<i>v</i> = wave speed on the string (m/s), <i>T</i> = tension (N), μ = linear mass density (kg/m)",
            "<i>f</i><sub>n</sub> = the <i>n</i>-th allowed frequency (Hz). A string gives ALL integer multiples of <i>f</i><sub>1</sub>, which is exactly why it sounds like a note"
          ],
          "note": "Read the last line three ways and you have the three laws of a vibrating string: f is inversely proportional to L at fixed T and mu, proportional to root T at fixed L and mu, and inversely proportional to root mu at fixed L and T."
        },
        {
          "t": "defgrid",
          "title": "Harmonic against overtone, for a string",
          "rows": [
            { "k": "Fundamental", "v": "the lowest allowed frequency, <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i>. Also called the first harmonic" },
            { "k": "<i>n</i>-th harmonic", "v": "the frequency <i>nf</i><sub>1</sub>. Counting starts at the fundamental" },
            { "k": "<i>m</i>-th overtone", "v": "the <i>m</i>-th allowed frequency ABOVE the fundamental. Counting starts above it" },
            { "k": "For a string", "v": "1st overtone = 2nd harmonic; 2nd overtone = 3rd harmonic. Just add one" },
            { "k": "Loops and nodes", "v": "the <i>n</i>-th harmonic has <i>n</i> loops, <i>n</i> + 1 nodes counting the clamps, and <i>n</i> antinodes" },
            { "k": "Watch out", "v": "for a CLOSED pipe in the next topic this simple add-one rule fails, because the even harmonics do not exist" }
          ]
        },
        {
          "t": "p",
          "html": "Read <i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ) one variable at a time and you have the three <b>laws of a vibrating string</b>, which is what a sonometer exists to demonstrate. <b>Law of length:</b> at fixed <i>T</i> and μ, <i>f</i> is inversely proportional to <i>L</i>, so halving the length doubles the pitch. That is a fret. <b>Law of tension:</b> at fixed <i>L</i> and μ, <i>f</i> is proportional to √<i>T</i>, so quadrupling the tension doubles the pitch. That is a tuning peg. <b>Law of mass:</b> at fixed <i>L</i> and <i>T</i>, <i>f</i> is inversely proportional to √μ, so a four times heavier string sounds an octave lower. That is why the low strings of a guitar are the thick ones and why the bass strings of a piano are wound with wire rather than simply made thicker: winding raises μ without making the string too stiff to bend.<br><br>All three are the same formula, and a question that changes two of them at once is asking you to multiply two factors, not to remember a fourth law."
        },
        {
          "t": "think",
          "html": "a real plucked string does not sound one harmonic. it sounds the fundamental AND a helping of the higher ones all at once, and the recipe of how much of each is what makes a sitar sound like a sitar and a guitar like a guitar even on the same note. the pitch you name is the fundamental; the character you recognise is the mix above it. this is also why the topic matters beyond the exam: the boundary conditions decide which frequencies may exist, and the way you excite the string decides how loudly each of them does. pluck near the middle and you favour the fundamental; pluck near the bridge and you feed the high harmonics, which is why it sounds thin and bright."
        },
        {
          "t": "proc",
          "title": "Scaling a sonometer question without arithmetic",
          "steps": [
            "<b>Write <i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ) and look at which of the three the question actually changes.</b> Almost every sonometer problem changes exactly one or two of them.",
            "<b>Length is a straight inverse.</b> Halve <i>L</i> and <i>f</i> doubles. Adding a bridge at a point simply creates two shorter strings, each with its own <i>L</i>.",
            "<b>Tension goes as a square root.</b> Quadruple <i>T</i> and <i>f</i> only doubles, and a 1 per cent tension change is only a 0.5 per cent pitch change, which is Topic 02's tension link.",
            "<b>Mass per unit length goes as an inverse square root, and it scales with the SQUARE of the radius</b> for one material. Doubling the diameter quadruples μ and halves <i>f</i>.",
            "<b>Multiply the three factors together and check against a limit.</b> If your answer says a tighter, shorter, thinner string sounds LOWER, a factor has gone in upside down.",
            "<b>Then read off the harmonic asked for.</b> An <i>n</i>-loop pattern is <i>nf</i><sub>1</sub>, and the <i>m</i>-th overtone of a string is the (<i>m</i> + 1)-th harmonic."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A stretched wire of length 0.5 m is fixed at both ends. The speed of a transverse wave on it is 200 m/s. Find (a) its fundamental frequency and (b) the frequencies of its first two overtones.",
          "steps": [
            "(a) <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = 200/(2 × 0.5) = 200/1 = 200 Hz.",
            "Check with <i>v</i> = <i>f</i>λ: the fundamental has λ<sub>1</sub> = 2<i>L</i> = 1.0 m, and (200 Hz)(1.0 m) = 200 m/s.",
            "(b) A string supports every harmonic, so the first overtone is the 2nd harmonic and the second overtone is the 3rd: <i>f</i><sub>2</sub> = 2<i>f</i><sub>1</sub> = 400 Hz and <i>f</i><sub>3</sub> = 3<i>f</i><sub>1</sub> = 600 Hz.",
            "Plausibility: 200, 400, 600 are exact integer multiples of the 200 Hz fundamental, which is the signature of a string or an open pipe. If your answers were not integer multiples you would have made an arithmetic error, not discovered new physics."
          ],
          "ans": "fundamental 200 Hz · first two overtones 400 Hz and 600 Hz"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A sonometer wire sounds its fundamental at 300 Hz. The tension is now made four times larger and the vibrating length is halved. What is the new fundamental?",
          "steps": [
            "The trap: students multiply by 4 for the tension. The square root is the whole question.",
            "<i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ), so <i>f</i><sub>1</sub> ∝ √<i>T</i>/<i>L</i> with μ unchanged.",
            "Tension four times larger multiplies <i>f</i> by √4 = 2, not by 4.",
            "Length halved multiplies <i>f</i> by 2.",
            "Together: <i>f</i><sub>new</sub> = 300 × 2 × 2 = 1200 Hz.",
            "Sanity check on direction: tighter and shorter both raise the pitch, so the answer must be above 300 Hz, and it is. A student who applied the tension factor as 4 would get 2400 Hz, which is also above 300 Hz, so the direction check alone does not save you here. Only the square root does."
          ],
          "ans": "1200 Hz"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A wire of length 0.80 m and mass 16 g is stretched between two rigid supports under a tension of 200 N. Find (a) the speed of transverse waves on it, (b) its fundamental frequency, and (c) the frequency and wavelength of its third harmonic.",
          "steps": [
            "First get μ, which is where marks go: μ = mass/length = 0.016 kg/0.80 m = 0.020 kg/m. Convert the grams before anything else.",
            "(a) <i>v</i> = √(<i>T</i>/μ) = √(200/0.020) = √10000 = 100 m/s.",
            "(b) <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = 100/(2 × 0.80) = 100/1.6 = 62.5 Hz.",
            "(c) Third harmonic: <i>f</i><sub>3</sub> = 3<i>f</i><sub>1</sub> = 187.5 Hz, and λ<sub>3</sub> = 2<i>L</i>/3 = 1.6/3 = 0.533 m.",
            "Check <i>v</i> = <i>f</i>λ on the third harmonic: (187.5 Hz)(0.533 m) = 100 m/s, the same speed as part (a). The speed is a property of the string and does not change from harmonic to harmonic; only <i>f</i> and λ trade off against each other."
          ],
          "ans": "<i>v</i> = 100 m/s · <i>f</i><sub>1</sub> = 62.5 Hz · <i>f</i><sub>3</sub> = 187.5 Hz with λ<sub>3</sub> = 0.533 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A wire of length 1.0 m and mass 10 g is stretched between rigid supports under a tension of 400 N. (a) Find its fundamental frequency. (b) At what frequency does it vibrate in four loops? (c) The wire is now touched very lightly at its exact midpoint. Which of the first four harmonics survive?",
          "steps": [
            "μ = 0.010 kg/1.0 m = 0.010 kg/m, so <i>v</i> = √(400/0.010) = √40000 = 200 m/s.",
            "(a) <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = 200/2 = 100 Hz.",
            "(b) Four loops is <i>n</i> = 4, so <i>f</i><sub>4</sub> = 4 × 100 = 400 Hz, with λ<sub>4</sub> = 2<i>L</i>/4 = 0.50 m. Check: (400)(0.50) = 200 m/s.",
            "(c) A light touch forces a NODE at that point without otherwise loading the wire. So the modes that survive are exactly the ones that already had a node at <i>L</i>/2, and the modes that had an antinode there are killed.",
            "From the harmonic picture: the <i>n</i>-th harmonic has internal nodes at <i>L</i>/<i>n</i>, 2<i>L</i>/<i>n</i>, ... A node sits at <i>L</i>/2 exactly when <i>n</i> is EVEN.",
            "So 100 Hz and 300 Hz are killed and 200 Hz and 400 Hz survive. The lowest note the touched wire can now produce is 200 Hz, an octave above its untouched fundamental.",
            "This is not a curiosity; it is how a guitarist plays a harmonic, and it is the string version of the boundary-condition argument that runs the whole topic. Adding a constraint can only remove modes, never create them."
          ],
          "ans": "(a) 100 Hz · (b) 400 Hz · (c) only the even harmonics survive, so 200 Hz and 400 Hz, and the lowest available note becomes 200 Hz"
        },
        {
          "t": "mcq",
          "q": "In a stationary wave, the distance between a node and the nearest antinode is:",
          "opts": [
            { "label": "λ", "nudge": "That is a full wavelength, which is two whole loops away. You would pass a node, an antinode and another node before you got there." },
            { "label": "λ/2", "nudge": "That is node to node, or antinode to antinode. Confusing the full half-wavelength with half of it is the commonest slip in this topic, and it doubles every subsequent answer." },
            { "label": "λ/4", "nudge": null },
            { "label": "λ/8", "nudge": "Over-halving. There is no physical length in a standing wave equal to λ/8; the pattern's natural units are λ/2 and λ/4." }
          ],
          "correct": 2,
          "solution": "Adjacent nodes are λ/2 apart and the antinode sits exactly halfway between them, so node to nearest antinode is λ/4. Sketch one loop and label it and this stops being memorised."
        },
        {
          "t": "mcq",
          "q": "A standing wave is formed by the superposition of:",
          "opts": [
            { "label": "two waves of slightly different frequencies travelling in the same direction", "nudge": "That setup gives BEATS, which is Topic 02: a pattern in time, everywhere at once, not a pattern fixed in space." },
            { "label": "two identical waves travelling in opposite directions", "nudge": null },
            { "label": "two waves of different amplitudes travelling in the same direction", "nudge": "Same-direction superposition gives one travelling wave with a modified amplitude. It still travels, so it is not standing." },
            { "label": "a wave reflected at a free end only", "nudge": "Reflection is the usual SOURCE of the second wave, but it is the opposition of directions that matters, and reflection happens at fixed ends just as well as free ones. A fixed end inverts the wave; a free end does not; both give standing waves." }
          ],
          "correct": 1,
          "solution": "Counter-propagating waves of the same amplitude, frequency and wavelength, typically a wave and its own reflection, superpose to y = 2A sin(kx) cos(ωt), in which space and time have separated and nothing propagates."
        },
        {
          "t": "mcq",
          "q": "A string of length <i>L</i> fixed at both ends vibrates in three loops. Its wavelength is:",
          "opts": [
            { "label": "3<i>L</i>", "nudge": "More loops must mean a SHORTER wavelength, not a longer one. This answer has the proportionality upside down." },
            { "label": "3<i>L</i>/2", "nudge": "This is the relation read backwards: <i>L</i> = 3λ/2 is correct, so λ = 2<i>L</i>/3, not 3<i>L</i>/2. Inverting a fraction at the last step." },
            { "label": "2<i>L</i>/3", "nudge": null },
            { "label": "<i>L</i>/3", "nudge": "This forgets the factor of two, that is, it counts loops as whole wavelengths rather than half-wavelengths. Each loop is λ/2." }
          ],
          "correct": 2,
          "solution": "Each loop is half a wavelength, so three loops give L = 3λ/2 and λ = 2L/3. The general rule is λ_n = 2L/n."
        },
        {
          "t": "mcq",
          "q": "The tension in a sonometer wire is increased nine-fold, with its length and material unchanged. Its fundamental frequency becomes:",
          "opts": [
            { "label": "3 times the original", "nudge": null },
            { "label": "9 times the original", "nudge": "This forgets the square root. <i>f</i> ∝ √<i>T</i>, so a nine-fold tension gives a three-fold frequency, and the extra factor of three has been invented." },
            { "label": "one third of the original", "nudge": "Tightening a string always raises its pitch, which rules this out before any algebra. Check the direction first and you save the working." },
            { "label": "81 times the original", "nudge": "This squares where it should take a square root, which is the error in the second option applied twice." }
          ],
          "correct": 0,
          "solution": "f₁ = (1/2L)√(T/μ), so f ∝ √T. Nine times the tension gives √9 = 3 times the frequency."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A sonometer wire of length 1.0 m and linear mass density 0.010 kg/m is under a tension of 100 N. Find its fundamental frequency.", "a": "<i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ) = (1/2)√(100/0.010) = (1/2)(100) = 50 Hz. Check: <i>v</i> = 100 m/s and λ<sub>1</sub> = 2.0 m, so <i>f</i>λ = 100 m/s." },
            { "q": "[NEET] A string fixed at both ends vibrates in 3 loops at 420 Hz. Find its fundamental, and the frequency at which it would vibrate in 5 loops.", "a": "Three loops is the 3rd harmonic, so <i>f</i><sub>1</sub> = 420/3 = 140 Hz. Five loops is the 5th harmonic: 5 × 140 = 700 Hz." },
            { "q": "[JEE Main] On a standing wave the distance between adjacent nodes is 20 cm and the wave speed is 300 m/s. Find the wavelength and the frequency.", "a": "Node to node is λ/2, so λ = 0.40 m. <i>f</i> = <i>v</i>/λ = 300/0.40 = 750 Hz." },
            { "q": "[JEE Main] A sonometer wire of length 60 cm sounds a fundamental of 300 Hz. Where must a movable bridge be placed so that one of the two segments sounds a fundamental of 450 Hz?", "a": "At fixed <i>T</i> and μ, <i>f</i> ∝ 1/<i>L</i>, so <i>L</i>′ = 60 × (300/450) = 40 cm. The bridge sits 40 cm from one end, and the remaining 20 cm segment would sound 300 × (60/20) = 900 Hz." },
            { "q": "[JEE Advanced] Two wires of the same material and the same length are under the same tension, but the second has twice the radius of the first. The first sounds a fundamental of 400 Hz. What does the second sound, and how many beats per second are heard when both are plucked?", "a": "μ ∝ <i>r</i><sup>2</sup>, so μ is four times larger, <i>v</i> is halved and <i>f</i><sub>1</sub> is halved: the second wire sounds 200 Hz. But NO beats are heard. A 200 Hz difference is far beyond the roughly 7 Hz the ear can resolve as a throb; you simply hear two distinct notes an octave apart. A beat frequency that comes out larger than a musical interval is a signal to check whether beats are the right idea at all." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing node-to-node with node-to-antinode.</b> Node to node is λ/2; node to nearest antinode is λ/4. Sketch one loop and label both before you start, and half the errors in this topic disappear.",
            "<b>Thinking a node has no energy.</b> A node has no DISPLACEMENT. The energy in a standing wave sloshes between the loops and is entirely real; a string held at a node is still under full tension and the particles beside it are moving fast.",
            "<b>Counting loops as whole wavelengths.</b> Each loop is half a wavelength. Three loops is <i>L</i> = 3λ/2, so λ = 2<i>L</i>/3, and the factor of two is the one people drop.",
            "<b>Applying the tension factor without its square root.</b> <i>f</i> ∝ √<i>T</i>. Four times the tension is twice the frequency, not four times, and nine times is three times.",
            "<b>Forgetting that μ scales with the square of the radius.</b> Same material, twice the diameter: μ is four times larger, so <i>v</i> and <i>f</i> are halved. This is Topic 01's trap arriving in new clothes, and it catches people twice.",
            "<b>Assuming the overtone rule is always add one.</b> For a string, the <i>m</i>-th overtone is the (<i>m</i> + 1)-th harmonic, because every harmonic exists. That rule does NOT survive into the next topic's closed pipe, where the even harmonics are missing entirely."
          ]
        },
        {
          "t": "protip",
          "html": "count the loops before you write anything. the number of loops IS <i>n</i>, and <i>f</i> = <i>nf</i><sub>1</sub> and λ = 2<i>L</i>/<i>n</i> follow immediately, with no need to work out which overtone anybody is calling it. for ratio questions, write <i>f</i> ∝ √<i>T</i>/(<i>Lr</i>) once, since μ ∝ <i>r</i><sup>2</sup> puts the radius downstairs to the first power, and every sonometer scaling question becomes a single line. one deeper idea worth carrying into optics and into any junction problem you meet later: the reason a fixed end inverts a pulse and a free end does not is that both are limiting cases of joining your string to a second string. define the impedance <i>Z</i> = √(<i>T</i>μ); the reflected amplitude is (<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>) times the incoming one. an infinitely heavy second string is <i>Z</i><sub>2</sub> → ∞ and gives −1, a total inverted reflection, which is a fixed end. a massless one is <i>Z</i><sub>2</sub> → 0 and gives +1, a total upright reflection, which is a free end. two rules you were told to memorise turn out to be two ends of one formula."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>y</i> = 2<i>A</i> sin(<i>kx</i>) cos(ω<i>t</i>)", "note": "space and time separate; the amplitude depends on WHERE you stand" },
            { "f": "node to node = λ/2 · node to antinode = λ/4", "note": "one loop is λ/2 of string" },
            { "f": "fixed end is a node · free end is an antinode", "note": "a fixed end also INVERTS the reflection, a phase change of π" },
            { "f": "λ<sub>n</sub> = 2<i>L</i>/<i>n</i> · <i>f</i><sub>n</sub> = <i>nv</i>/2<i>L</i>", "note": "all harmonics, <i>n</i> loops, <i>n</i> − 1 internal nodes" },
            { "f": "<i>f</i><sub>1</sub> = (1/2<i>L</i>)√(<i>T</i>/μ)", "note": "the sonometer master formula; μ ∝ <i>r</i><sup>2</sup> for one material" },
            { "f": "string: <i>m</i>-th overtone = (<i>m</i> + 1)-th harmonic", "note": "true here, FALSE for a closed pipe" }
          ],
          "aids": [
            "\"count the loops, that number is n\"",
            "\"tension under a square root, length not\"",
            "\"a node is still, not empty\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Air Columns, Organ Pipes and Resonance",
      "chip": "04 PIPES",
      "kalam": "open ends take everything, closed ends only the odd",
      "blocks": [
        {
          "t": "p",
          "html": "Everything in the last topic was about a string, and a string is easy to picture because you can see it move. Now do the same physics inside a tube of air, where you cannot see anything at all, and you get every wind instrument ever built.<br><br>A bansuri, a flute, a shehnai and an organ pipe are all the same object: a column of air, bounded at both ends, carrying a standing sound wave. Sound in air is longitudinal, so what oscillates is not an up-and-down displacement but a back-and-forth one, along the tube. Everything else carries straight over. There are still nodes where the air never moves, antinodes where it moves most, a node-to-node spacing of λ/2, and a set of allowed frequencies that the boundaries select. A flute player raises the pitch by uncovering a hole, which shortens the effective column, which is exactly the same act as a guitarist pressing a fret."
        },
        {
          "t": "think",
          "html": "the whole of this topic is one rule about what the air is allowed to do at each end. a <b>closed end</b> is a sealed wall, and air cannot move through a wall, so the air there is forced to be still: a <b>displacement node</b>. an <b>open end</b> is open to the whole atmosphere, so the air there is free to slosh in and out as much as it likes: a <b>displacement antinode</b>. that is it. everything below, both harmonic series, the octave gap between the two kinds of pipe, and the missing even harmonics, is that one rule plus counting."
        },
        {
          "t": "def",
          "term": "The boundary rule for an air column",
          "html": "<b>Closed end: displacement NODE.</b> The wall holds the air still. <b>Open end: displacement ANTINODE.</b> The air is free to move. Two consequences follow immediately and are worth stating before any algebra. An <b>open pipe</b>, open at both ends, must have an antinode at each end. A <b>closed pipe</b>, closed at one end and open at the other, must have a node at one end and an antinode at the other, and that asymmetry is what makes it a different instrument. Note the naming carefully, because it trips people: a \"closed pipe\" is closed at ONE end only. A tube sealed at both ends would trap the air and is not an instrument."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHAT FITS INSIDE A PIPE",
          "chips": ["open, 1st", "open, 2nd", "closed, 1st", "closed, 3rd"],
          "captions": [
            "OPEN PIPE, FUNDAMENTAL. Antinodes at both open ends, one node in the middle. Half a wavelength fits, so L = λ/2 and f₁ = v/2L, the same formula as a string. The curves show the DISPLACEMENT of the air along the tube, not its sideways motion: the air is really sliding left and right, and this graph is how far.",
            "OPEN PIPE, SECOND HARMONIC. A whole wavelength now fits, L = λ, and the frequency is exactly 2f₁. An open pipe accepts every integer multiple of its fundamental, because putting an antinode at both ends is a condition that any whole number of half-loops can satisfy.",
            "CLOSED PIPE, FUNDAMENTAL. Node at the sealed left end, antinode at the open right end. Only a QUARTER of a wavelength fits, so L = λ/4 and f₁ = v/4L. For the same length of tube this is half the open pipe's fundamental: one full octave lower, on nothing but a boundary condition.",
            "CLOSED PIPE, FIRST OVERTONE. The next pattern that puts a node at the left and an antinode at the right needs three quarters of a wavelength, L = 3λ/4, giving 3f₁. Not 2f₁: there is no way to fit two quarter-wavelengths and still land an antinode on the open end. That is why a closed pipe has only ODD harmonics, and why its first overtone leapfrogs to the third."
          ],
          "frames": [
            {
              "x": [-0.45, 6.45], "y": [-1.7, 1.9], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[0, 1.3], [6, 1.3]], "tone": "ink" },
                { "pts": [[0, -1.3], [6, -1.3]], "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 1], [0.25, 0.991], [0.5, 0.966], [0.75, 0.924], [1, 0.866], [1.25, 0.793], [1.5, 0.707], [1.75, 0.609], [2, 0.5], [2.25, 0.383], [2.5, 0.259], [2.75, 0.131], [3, 0], [3.25, -0.131], [3.5, -0.259], [3.75, -0.383], [4, -0.5], [4.25, -0.609], [4.5, -0.707], [4.75, -0.793], [5, -0.866], [5.25, -0.924], [5.5, -0.966], [5.75, -0.991], [6, -1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, -1], [0.25, -0.991], [0.5, -0.966], [0.75, -0.924], [1, -0.866], [1.25, -0.793], [1.5, -0.707], [1.75, -0.609], [2, -0.5], [2.25, -0.383], [2.5, -0.259], [2.75, -0.131], [3, 0], [3.25, 0.131], [3.5, 0.259], [3.75, 0.383], [4, 0.5], [4.25, 0.609], [4.5, 0.707], [4.75, 0.793], [5, 0.866], [5.25, 0.924], [5.5, 0.966], [5.75, 0.991], [6, 1]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "open" },
                { "x": 3, "y": 0, "glyph": "dot" },
                { "x": 6, "y": 0, "glyph": "open" }
              ],
              "labels": [{ "x": 3, "y": 1.62, "text": "L = λ/2" }]
            },
            {
              "x": [-0.45, 6.45], "y": [-1.7, 1.9], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[0, 1.3], [6, 1.3]], "tone": "ink" },
                { "pts": [[0, -1.3], [6, -1.3]], "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 1], [0.25, 0.966], [0.5, 0.866], [0.75, 0.707], [1, 0.5], [1.25, 0.259], [1.5, 0], [1.75, -0.259], [2, -0.5], [2.25, -0.707], [2.5, -0.866], [2.75, -0.966], [3, -1], [3.25, -0.966], [3.5, -0.866], [3.75, -0.707], [4, -0.5], [4.25, -0.259], [4.5, 0], [4.75, 0.259], [5, 0.5], [5.25, 0.707], [5.5, 0.866], [5.75, 0.966], [6, 1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, -1], [0.25, -0.966], [0.5, -0.866], [0.75, -0.707], [1, -0.5], [1.25, -0.259], [1.5, 0], [1.75, 0.259], [2, 0.5], [2.25, 0.707], [2.5, 0.866], [2.75, 0.966], [3, 1], [3.25, 0.966], [3.5, 0.866], [3.75, 0.707], [4, 0.5], [4.25, 0.259], [4.5, 0], [4.75, -0.259], [5, -0.5], [5.25, -0.707], [5.5, -0.866], [5.75, -0.966], [6, -1]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "open" },
                { "x": 1.5, "y": 0, "glyph": "dot" },
                { "x": 3, "y": 0, "glyph": "open" },
                { "x": 4.5, "y": 0, "glyph": "dot" },
                { "x": 6, "y": 0, "glyph": "open" }
              ],
              "labels": [{ "x": 3, "y": 1.62, "text": "L = λ" }]
            },
            {
              "x": [-0.45, 6.45], "y": [-1.7, 1.9], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[-0.45, -1.3], [0, -1.3], [0, 1.3], [-0.45, 1.3]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 1.3], [6, 1.3]], "tone": "ink" },
                { "pts": [[0, -1.3], [6, -1.3]], "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.065], [0.5, 0.131], [0.75, 0.195], [1, 0.259], [1.25, 0.321], [1.5, 0.383], [1.75, 0.442], [2, 0.5], [2.25, 0.556], [2.5, 0.609], [2.75, 0.659], [3, 0.707], [3.25, 0.752], [3.5, 0.793], [3.75, 0.831], [4, 0.866], [4.25, 0.897], [4.5, 0.924], [4.75, 0.947], [5, 0.966], [5.25, 0.981], [5.5, 0.991], [5.75, 0.998], [6, 1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.25, -0.065], [0.5, -0.131], [0.75, -0.195], [1, -0.259], [1.25, -0.321], [1.5, -0.383], [1.75, -0.442], [2, -0.5], [2.25, -0.556], [2.5, -0.609], [2.75, -0.659], [3, -0.707], [3.25, -0.752], [3.5, -0.793], [3.75, -0.831], [4, -0.866], [4.25, -0.897], [4.5, -0.924], [4.75, -0.947], [5, -0.966], [5.25, -0.981], [5.5, -0.991], [5.75, -0.998], [6, -1]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot" },
                { "x": 6, "y": 0, "glyph": "open" }
              ],
              "labels": [{ "x": 3, "y": 1.62, "text": "L = λ/4" }]
            },
            {
              "x": [-0.45, 6.45], "y": [-1.7, 1.9], "axes": "none", "aspect": 0.42,
              "polys": [
                { "pts": [[-0.45, -1.3], [0, -1.3], [0, 1.3], [-0.45, 1.3]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 1.3], [6, 1.3]], "tone": "ink" },
                { "pts": [[0, -1.3], [6, -1.3]], "tone": "ink" },
                { "pts": [[0, 0], [6, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.25, 0.195], [0.5, 0.383], [0.75, 0.556], [1, 0.707], [1.25, 0.831], [1.5, 0.924], [1.75, 0.981], [2, 1], [2.25, 0.981], [2.5, 0.924], [2.75, 0.831], [3, 0.707], [3.25, 0.556], [3.5, 0.383], [3.75, 0.195], [4, 0], [4.25, -0.195], [4.5, -0.383], [4.75, -0.556], [5, -0.707], [5.25, -0.831], [5.5, -0.924], [5.75, -0.981], [6, -1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.25, -0.195], [0.5, -0.383], [0.75, -0.556], [1, -0.707], [1.25, -0.831], [1.5, -0.924], [1.75, -0.981], [2, -1], [2.25, -0.981], [2.5, -0.924], [2.75, -0.831], [3, -0.707], [3.25, -0.556], [3.5, -0.383], [3.75, -0.195], [4, 0], [4.25, 0.195], [4.5, 0.383], [4.75, 0.556], [5, 0.707], [5.25, 0.831], [5.5, 0.924], [5.75, 0.981], [6, 1]] }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot" },
                { "x": 2, "y": 0, "glyph": "open" },
                { "x": 4, "y": 0, "glyph": "dot" },
                { "x": 6, "y": 0, "glyph": "open" }
              ],
              "labels": [{ "x": 3, "y": 1.62, "text": "L = 3λ/4" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "The partner concept is <b>resonance</b>. Drive an air column at one of its own allowed frequencies, say by holding a sounding tuning fork over the mouth of a tube, and the sound suddenly swells. The column agrees to vibrate, energy pours in efficiently, and what was a faint hum becomes loud enough to hear across a room. Drive it at anything else and almost nothing happens.<br><br>It is the same physics as pushing a child on a swing. Push at the swing's own natural rhythm and it climbs higher and higher on small pushes; push at any other rhythm and you spend the same effort fighting yourself. A resonance-tube experiment is nothing more than hunting for the lengths at which a fixed-frequency fork happens to match the column's natural frequency, which is why the answer comes out as a set of lengths rather than a single one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE HARMONICS OF AN OPEN PIPE, TAP A LINE",
          "steps": [
            {
              "eq": "both ends open, so both ends must be displacement antinodes",
              "why": "The boundary rule, and nothing else is assumed. The air at each mouth is free to move, so each mouth is a point of maximum swing."
            },
            {
              "eq": "between an antinode and the next antinode there is exactly one node, and antinode to antinode is λ/2",
              "why": "Straight from Topic 03: node to node and antinode to antinode are both λ/2. The pipe must hold a whole number of those."
            },
            {
              "eq": "<i>L</i> = <i>n</i>λ/2 ⟹ λ<sub>n</sub> = 2<i>L</i>/<i>n</i>, with <i>n</i> = 1, 2, 3, ...",
              "why": "Any whole number of half-wavelengths puts antinodes at both ends, so every integer <i>n</i> is allowed and none is skipped."
            },
            {
              "eq": "<i>f</i><sub>n</sub> = <i>v</i>/λ<sub>n</sub> = <i>nv</i>/2<i>L</i>, so <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> and the series is <i>f</i><sub>1</sub>, 2<i>f</i><sub>1</sub>, 3<i>f</i><sub>1</sub>, ...",
              "why": "Identical in form to the string, for a completely different reason: the string had nodes at both ends and this has antinodes at both ends, and either pair of matching boundaries admits every integer. Two different instruments, one arithmetic."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · OPEN ORGAN PIPE",
          "tag": "antinodes at both ends, all harmonics",
          "main": "λ<sub>n</sub> = 2<i>L</i>/<i>n</i> · <i>f</i><sub>n</sub> = <i>nv</i>/2<i>L</i>, <i>n</i> = 1, 2, 3, ...<br><i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i>",
          "legend": [
            "<i>L</i> = length of the air column (m), <i>n</i> = harmonic number, a whole number with no values skipped",
            "<i>v</i> = speed of sound in the air inside the pipe (m/s), taken as 343 m/s at 20 °C unless a question supplies its own",
            "<i>f</i><sub>n</sub> = the <i>n</i>-th allowed frequency (Hz). Successive resonances of an open pipe are spaced by exactly <i>f</i><sub>1</sub>"
          ],
          "note": "Warm air is faster air, so an organ pipe sharpens as a hall heats up. The pipe's length has not changed; v has, and f = v/2L carries the change straight to the pitch."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE HARMONICS OF A CLOSED PIPE, AND THE MISSING EVENS",
          "steps": [
            {
              "eq": "one end closed, one open, so a node at the closed end and an antinode at the open end",
              "why": "The same boundary rule, applied to an asymmetric pipe. Everything different about a closed pipe comes from this asymmetry and nothing else."
            },
            {
              "eq": "node to nearest antinode is λ/4, so the shortest pipe that works has <i>L</i> = λ/4",
              "why": "This is Topic 03's node-to-antinode spacing, used here as a design constraint rather than as a measurement."
            },
            {
              "eq": "to get a longer pipe with the same boundaries, add whole loops of λ/2: <i>L</i> = λ/4, 3λ/4, 5λ/4, ... ⟹ <i>L</i> = (2<i>n</i> − 1)λ/4",
              "why": "Adding half a wavelength moves the far end past one node and one antinode, so it arrives back at an antinode. Adding a quarter would land it on a node, and that is forbidden at an open end. This is exactly where the even harmonics die."
            },
            {
              "eq": "λ<sub>n</sub> = 4<i>L</i>/(2<i>n</i> − 1) ⟹ <i>f</i><sub>n</sub> = (2<i>n</i> − 1)<i>v</i>/4<i>L</i>, so the series is <i>f</i><sub>1</sub>, 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, ...",
              "why": "Odd multiples only. The first overtone is the THIRD harmonic, not the second, and every question in this topic that catches people is built on that one sentence."
            },
            {
              "eq": "compare at equal length: closed <i>f</i><sub>1</sub> = <i>v</i>/4<i>L</i> against open <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i>, a ratio of exactly 1 to 2",
              "why": "The closed pipe sounds a full octave lower on the same length of tube, and you can hear the check: cover one end of a pipe and the pitch drops by an octave, not by a bit. Successive resonances of a closed pipe are spaced by 2<i>f</i><sub>1</sub>, not <i>f</i><sub>1</sub>, and that spacing is the fingerprint that identifies the pipe in an exam question."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CLOSED ORGAN PIPE",
          "tag": "node one end, antinode the other, odd harmonics only",
          "main": "λ<sub>n</sub> = 4<i>L</i>/(2<i>n</i> − 1) · <i>f</i><sub>n</sub> = (2<i>n</i> − 1)<i>v</i>/4<i>L</i>, <i>n</i> = 1, 2, 3, ...<br><i>f</i><sub>1</sub> = <i>v</i>/4<i>L</i>, then 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, 7<i>f</i><sub>1</sub>, ...",
          "legend": [
            "<i>L</i> = length of the air column, closed at one end only (m)",
            "<i>v</i> = speed of sound in air (m/s), <i>n</i> = 1, 2, 3, ... counting the ALLOWED frequencies, so (2<i>n</i> − 1) = 1, 3, 5, ... is the harmonic number",
            "<i>f</i><sub>n</sub> = the <i>n</i>-th allowed frequency (Hz). Successive resonances are spaced by 2<i>f</i><sub>1</sub>"
          ],
          "note": "Two counters live in this one formula and mixing them is the classic error. n counts which resonance you are on; (2n - 1) is the harmonic number. The 2nd allowed frequency is the 3rd harmonic and the 1st overtone, three names for one thing."
        },
        {
          "t": "think",
          "html": "why can a closed pipe not do 2<i>f</i><sub>1</sub>? try to build it. the fundamental fits a quarter wave in the tube. doubling the frequency halves the wavelength, so now you would need half a quarter-wave, that is λ/8, to reach the far end. but λ/8 from a node lands you halfway to the first antinode, in the middle of nowhere, and the open end demands an antinode. the pattern simply cannot be made. an open pipe has no such trouble because its two boundaries are the SAME kind, so anything that works at one end automatically works at the other after a whole number of half-loops. <b>matched ends give all harmonics; mismatched ends give odd ones only.</b>"
        },
        {
          "t": "defgrid",
          "title": "Open against closed, side by side",
          "rows": [
            { "k": "Open pipe", "v": "antinodes at both ends. <i>f</i><sub>n</sub> = <i>nv</i>/2<i>L</i>, all harmonics, spacing between resonances = <i>f</i><sub>1</sub>" },
            { "k": "Closed pipe", "v": "node at the closed end, antinode at the open end. <i>f</i><sub>n</sub> = (2<i>n</i> − 1)<i>v</i>/4<i>L</i>, odd only, spacing = 2<i>f</i><sub>1</sub>" },
            { "k": "Same length", "v": "<i>f</i><sub>closed</sub> : <i>f</i><sub>open</sub> = 1 : 2, so the closed pipe is one octave lower" },
            { "k": "Same fundamental", "v": "<i>L</i><sub>open</sub> : <i>L</i><sub>closed</sub> = 2 : 1, so the open pipe must be twice as long" },
            { "k": "Overtones, open", "v": "1st overtone = 2nd harmonic; <i>m</i>-th overtone = (<i>m</i> + 1)-th harmonic" },
            { "k": "Overtones, closed", "v": "1st overtone = 3rd harmonic; <i>m</i>-th overtone = (2<i>m</i> + 1)-th harmonic. Memorise this row" }
          ]
        },
        {
          "t": "def",
          "term": "Displacement and pressure are opposites",
          "html": "Everything drawn above is a <b>displacement</b> pattern: how far the air moves. There is a second pattern hiding inside the same wave, the <b>pressure</b> variation, and it is exactly out of step with the first. Where the air is <i>free to move most</i> it never gets compressed, and where the air is <i>held still</i> the air arriving from behind piles into it. So a <b>displacement node is a pressure antinode, and a displacement antinode is a pressure node</b>. At the sealed end of a closed pipe the air does not budge and the pressure swings hardest; at the open mouth the air sloshes freely and the pressure stays fixed at atmospheric, which is what being open to the atmosphere means. Questions that ask where the pressure variation is largest are asking for the displacement NODES, and answering with the antinodes is a whole mark gone for a question you understood."
        },
        {
          "t": "p",
          "html": "One honest complication before the numbers. The antinode at an open end does not sit exactly at the rim. The air just outside the mouth is dragged along by the column and moves with it, so the pattern bulges slightly out into the open air and the antinode sits a little way beyond the pipe. That extra distance is the <b>end correction</b>, written <i>e</i>, and for a pipe of radius <i>r</i> it is about 0.6<i>r</i>.<br><br>So the length that appears in every formula above is really an <b>effective length</b>: <i>L</i> + <i>e</i> for a closed pipe, which has one open end, and <i>L</i> + 2<i>e</i> for an open pipe, which has two. For a fat, short pipe this matters; for a thin, long one it is a rounding error. And there is one experimental trick that makes it vanish entirely, which is what the resonance tube is built on."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · END CORRECTION AND THE RESONANCE TUBE",
          "main": "<i>e</i> ≈ 0.6<i>r</i> · effective length = <i>L</i> + <i>e</i> (closed) or <i>L</i> + 2<i>e</i> (open)<br>λ = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>) · <i>v</i> = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>) · <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2",
          "legend": [
            "<i>e</i> = end correction (m), <i>r</i> = inner radius of the pipe (m), <i>L</i> = its geometric length (m)",
            "<i>l</i><sub>1</sub>, <i>l</i><sub>2</sub> = the air-column lengths at the first and second resonance of a resonance tube (m), measured from the water surface to the rim",
            "<i>f</i> = the frequency of the fork driving the tube (Hz), <i>v</i> = the speed of sound being measured (m/s)"
          ],
          "note": "The middle line is the whole experiment. Because e appears identically in both resonance conditions, subtracting them removes it, so lambda and v come out clean without ever knowing e. Only afterwards do you back it out."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A RESONANCE TUBE, TWICE",
          "chips": ["first resonance", "second resonance"],
          "captions": [
            "FIRST RESONANCE. The water surface at the left is the closed end and is a node; the open rim is at l₁. The antinode, marked by the open circle, sits a little BEYOND the rim, by the end correction e, so l₁ + e = λ/4 rather than l₁ = λ/4. The overhang is drawn much larger than life; in a real tube e is a few millimetres.",
            "SECOND RESONANCE. The same fork, the same tube, the water lowered until it sounds again. Now three quarters of a wavelength fit, l₂ + e = 3λ/4, and a node has appeared inside the column. Both frames are drawn to the same scale, so you can read the difference off the page: l₂ − l₁ is exactly λ/2, and the overhang e is identical in both pictures, which is precisely why subtracting the two lengths deletes it."
          ],
          "frames": [
            {
              "x": [-0.35, 3.5], "y": [-1.75, 1.6], "axes": "none", "aspect": 0.5,
              "polys": [
                { "pts": [[-0.35, -1.15], [0, -1.15], [0, 1.15], [-0.35, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 1.15], [0.85, 1.15]], "tone": "ink" },
                { "pts": [[0, -1.15], [0.85, -1.15]], "tone": "ink" },
                { "pts": [[0, 0], [1, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.062, 0.098], [0.125, 0.195], [0.188, 0.29], [0.25, 0.383], [0.312, 0.471], [0.375, 0.556], [0.438, 0.634], [0.5, 0.707], [0.562, 0.773], [0.625, 0.831], [0.688, 0.882], [0.75, 0.924], [0.812, 0.957], [0.875, 0.981], [0.938, 0.995], [1, 1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.062, -0.098], [0.125, -0.195], [0.188, -0.29], [0.25, -0.383], [0.312, -0.471], [0.375, -0.556], [0.438, -0.634], [0.5, -0.707], [0.562, -0.773], [0.625, -0.831], [0.688, -0.882], [0.75, -0.924], [0.812, -0.957], [0.875, -0.981], [0.938, -0.995], [1, -1]] }
              ],
              "marks": [{ "x": 1, "y": 0, "glyph": "open" }],
              "arrows": [
                { "from": [0, -1.45], "to": [0.85, -1.45], "head": "both", "tone": "amber", "label": "l₁", "at": "mid" }
              ],
              "labels": [{ "x": 0.93, "y": 0.42, "text": "e" }]
            },
            {
              "x": [-0.35, 3.5], "y": [-1.75, 1.6], "axes": "none", "aspect": 0.5,
              "polys": [
                { "pts": [[-0.35, -1.15], [0, -1.15], [0, 1.15], [-0.35, 1.15]], "close": true, "fill": "hatch", "tone": "ink" },
                { "pts": [[0, 1.15], [2.85, 1.15]], "tone": "ink" },
                { "pts": [[0, -1.15], [2.85, -1.15]], "tone": "ink" },
                { "pts": [[0, 0], [3, 0]], "tone": "soft", "dash": true }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.188, 0.29], [0.375, 0.556], [0.562, 0.773], [0.75, 0.924], [0.938, 0.995], [1.125, 0.981], [1.312, 0.882], [1.5, 0.707], [1.688, 0.471], [1.875, 0.195], [2.062, -0.098], [2.25, -0.383], [2.438, -0.634], [2.625, -0.831], [2.812, -0.957], [3, -1]] },
                { "c": "pts", "smooth": true, "dash": true, "soft": true, "pts": [[0, 0], [0.188, -0.29], [0.375, -0.556], [0.562, -0.773], [0.75, -0.924], [0.938, -0.995], [1.125, -0.981], [1.312, -0.882], [1.5, -0.707], [1.688, -0.471], [1.875, -0.195], [2.062, 0.098], [2.25, 0.383], [2.438, 0.634], [2.625, 0.831], [2.812, 0.957], [3, 1]] }
              ],
              "marks": [
                { "x": 1, "y": 0, "glyph": "open" },
                { "x": 2, "y": 0, "glyph": "dot" },
                { "x": 3, "y": 0, "glyph": "open" }
              ],
              "arrows": [
                { "from": [0, -1.45], "to": [2.85, -1.45], "head": "both", "tone": "amber", "label": "l₂", "at": "mid" }
              ],
              "labels": [{ "x": 2.93, "y": 0.42, "text": "e" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · HOW THE RESONANCE TUBE KILLS THE END CORRECTION",
          "steps": [
            {
              "eq": "the tube is a CLOSED pipe: the water surface is the closed end and the rim is open",
              "why": "Recognising this is half the marks. Everything about the resonance tube follows from the closed-pipe series, including why the second resonance is at three times the quarter-wave and not at twice it."
            },
            {
              "eq": "first resonance: <i>l</i><sub>1</sub> + <i>e</i> = λ/4. Second resonance: <i>l</i><sub>2</sub> + <i>e</i> = 3λ/4",
              "why": "The antinode sits <i>e</i> beyond the rim, so the EFFECTIVE column is <i>l</i> + <i>e</i>, and it is that effective column which must equal a quarter and then three quarters of a wavelength. The same <i>e</i> appears in both, because the tube has not changed."
            },
            {
              "eq": "subtract: <i>l</i><sub>2</sub> − <i>l</i><sub>1</sub> = 3λ/4 − λ/4 = λ/2 ⟹ λ = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)",
              "why": "This is the master move of the experiment. The unknown <i>e</i> cancels identically, so the wavelength comes out of two ruler readings and nothing else. No radius, no correction, no estimate."
            },
            {
              "eq": "the fork's frequency <i>f</i> is known, so <i>v</i> = <i>f</i>λ = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)",
              "why": "That is a measurement of the speed of sound in a school laboratory, accurate to a per cent or two, from a tuning fork and a metre rule."
            },
            {
              "eq": "now go back for <i>e</i>: <i>e</i> = λ/4 − <i>l</i><sub>1</sub> = (<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)/2 − <i>l</i><sub>1</sub> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2",
              "why": "Only once <i>v</i> is safely measured do you spend the data on <i>e</i>. Compare the answer with 0.6<i>r</i> as a check: agreement to a few tenths of a millimetre means the experiment was done properly, and a wild disagreement usually means the second resonance was misidentified."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Identifying a pipe from a list of resonance frequencies",
          "steps": [
            "<b>Take the common difference Δ between successive resonances.</b> Every question of this type gives you at least three, and the difference is always constant.",
            "<b>Divide the SMALLEST given frequency by Δ.</b> If the answer is a whole number, the pipe is OPEN and <i>f</i><sub>1</sub> = Δ.",
            "<b>If it is not a whole number, the pipe is CLOSED and <i>f</i><sub>1</sub> = Δ/2.</b> For a closed pipe successive odd harmonics differ by 2<i>f</i><sub>1</sub>, which is why the spacing is twice the fundamental.",
            "<b>Confirm by dividing every given frequency by your <i>f</i><sub>1</sub>.</b> For an open pipe you should get consecutive integers; for a closed pipe, consecutive ODD integers. If either check fails, you picked the wrong kind of pipe.",
            "<b>Only then find the length</b>, from <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> for open or <i>f</i><sub>1</sub> = <i>v</i>/4<i>L</i> for closed. Doing this before the identification is how a right method produces a wrong number.",
            "<b>Sanity check the length.</b> An organ pipe is between a few centimetres and a few metres. A pipe 40 m long is an arithmetic slip, not a discovery."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "The fundamental frequency of a closed organ pipe is 200 Hz. What is the frequency of its first overtone?",
          "steps": [
            "The trap: students reflexively double it to 400 Hz, thinking first overtone means second harmonic. For a closed pipe that is wrong, because the even harmonics simply do not exist.",
            "A closed pipe produces only odd harmonics: <i>f</i><sub>1</sub>, 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, ...",
            "So the first overtone is the THIRD harmonic: <i>f</i> = 3<i>f</i><sub>1</sub> = 3 × 200 = 600 Hz.",
            "Check the vocabulary once more: 600 Hz is the second ALLOWED frequency, the first OVERTONE, and the third HARMONIC. All three names describe the same note, and a question can ask for it by any of them."
          ],
          "ans": "600 Hz"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An open pipe and a closed pipe both have an air column 0.50 m long. Taking the speed of sound as 343 m/s, find the fundamental and the next allowed frequency of each. Ignore the end correction.",
          "steps": [
            "OPEN pipe: <i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = 343/(2 × 0.50) = 343 Hz, with λ<sub>1</sub> = 2<i>L</i> = 1.0 m. Check: (343)(1.0) = 343 m/s.",
            "Next allowed frequency for an open pipe is the 2nd harmonic: 2 × 343 = 686 Hz.",
            "CLOSED pipe: <i>f</i><sub>1</sub> = <i>v</i>/4<i>L</i> = 343/(4 × 0.50) = 171.5 Hz, with λ<sub>1</sub> = 4<i>L</i> = 2.0 m. Check: (171.5)(2.0) = 343 m/s.",
            "Next allowed frequency for a closed pipe is the 3rd harmonic: 3 × 171.5 = 514.5 Hz. It is NOT 343 Hz.",
            "Read the two lists side by side, because that is the whole lesson: the open pipe gives 343, 686, 1029, ... spaced by 343; the closed pipe gives 171.5, 514.5, 857.5, ... spaced by 343 as well, which is 2<i>f</i><sub>1</sub>. Same spacing, different starting note, and the closed pipe is an octave below on the identical length of tube."
          ],
          "ans": "open: 343 Hz then 686 Hz · closed: 171.5 Hz then 514.5 Hz"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For a certain organ pipe, three successive resonance frequencies are 250 Hz, 350 Hz and 450 Hz. The speed of sound in air is 340 m/s. (a) Is the pipe open or closed? (b) Find its fundamental frequency. (c) Find its length.",
          "steps": [
            "(a) The gaps are constant: 350 − 250 = 100 Hz and 450 − 350 = 100 Hz. So Δ = 100 Hz.",
            "Test OPEN. If the pipe were open then <i>f</i><sub>1</sub> = Δ = 100 Hz, and 250/100 = 2.5, which is not a whole number. A 100 Hz open pipe cannot produce 250 Hz, so the pipe is not open.",
            "So it is CLOSED, where successive odd harmonics differ by 2<i>f</i><sub>1</sub>.",
            "(b) 2<i>f</i><sub>1</sub> = 100 ⟹ <i>f</i><sub>1</sub> = 50 Hz.",
            "Confirm: 250/50 = 5, 350/50 = 7, 450/50 = 9. The 5th, 7th and 9th harmonics, all odd, exactly as a closed pipe demands.",
            "(c) <i>f</i><sub>1</sub> = <i>v</i>/4<i>L</i>, so <i>L</i> = <i>v</i>/4<i>f</i><sub>1</sub> = 340/(4 × 50) = 340/200 = 1.7 m.",
            "Check with <i>v</i> = <i>f</i>λ: λ<sub>1</sub> = 4<i>L</i> = 6.8 m and (50)(6.8) = 340 m/s. And 1.7 m is a perfectly ordinary organ pipe."
          ],
          "ans": "closed pipe · fundamental 50 Hz · length 1.7 m"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In a resonance-tube experiment a tuning fork of frequency 480 Hz gives its first resonance when the air column is 17 cm long and its second at 52 cm. Find (a) the speed of sound in air and (b) the end correction of the tube.",
          "steps": [
            "Recognise the apparatus: the water surface is a closed end and the rim is open, so this is a closed pipe. The first resonance is a quarter wavelength and the second is three quarters, both measured to the antinode, which sits <i>e</i> beyond the rim.",
            "<i>l</i><sub>1</sub> + <i>e</i> = λ/4 and <i>l</i><sub>2</sub> + <i>e</i> = 3λ/4.",
            "(a) Subtract, and <i>e</i> cancels: <i>l</i><sub>2</sub> − <i>l</i><sub>1</sub> = λ/2, so λ = 2(52 − 17) = 2(35) = 70 cm = 0.70 m.",
            "<i>v</i> = <i>f</i>λ = (480)(0.70) = 336 m/s. Plausible: sound in air at ordinary room temperature is 330 to 345 m/s, and 336 m/s sits comfortably inside that.",
            "(b) Now recover <i>e</i>: λ/4 = 70/4 = 17.5 cm, so <i>e</i> = 17.5 − 17 = 0.5 cm.",
            "Cross-check with the standard shortcut: <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2 = (52 − 51)/2 = 0.5 cm. The two routes agree, which is the real point of quoting both.",
            "Reasoning check: 0.5 cm of correction against a 17 cm column is about 3 per cent. Had we ignored <i>e</i> and used <i>l</i><sub>1</sub> = λ/4 alone, we would have found λ = 68 cm and <i>v</i> = 326 m/s, about 3 per cent low. Subtracting the two lengths is what buys back that error."
          ],
          "ans": "<i>v</i> = 336 m/s · <i>e</i> = 0.5 cm"
        },
        {
          "t": "mcq",
          "q": "Which harmonics are present in a pipe closed at one end?",
          "opts": [
            { "label": "all integer harmonics", "nudge": "True for an OPEN pipe and for a string, both of which have matching boundaries at the two ends. A closed pipe has a node at one end and an antinode at the other, and that mismatch is what removes half the series." },
            { "label": "only even harmonics", "nudge": "Exactly backwards. The even ones are the forbidden set; the fundamental itself is the 1st harmonic and is odd, so a series of even harmonics could not even contain the fundamental." },
            { "label": "only odd harmonics", "nudge": null },
            { "label": "only the fundamental", "nudge": "A closed pipe has an unlimited set of overtones at 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, 7<i>f</i><sub>1</sub> and so on. It is missing half the series, not all of it." }
          ],
          "correct": 2,
          "solution": "A closed end is a displacement node and an open end an antinode, so the column must hold an odd number of quarter-wavelengths. That permits f₁, 3f₁, 5f₁, ... and nothing between them."
        },
        {
          "t": "mcq",
          "q": "An open pipe and a closed pipe have the same fundamental frequency. The ratio of the length of the open pipe to that of the closed pipe is:",
          "opts": [
            { "label": "1 : 1", "nudge": "This assumes equal frequency means equal length, which ignores the very difference the question is testing. A closed pipe gets a lower note out of a given length, so to match it the open pipe must be longer." },
            { "label": "2 : 1", "nudge": null },
            { "label": "1 : 2", "nudge": "The ratio inverted, which is the sign that the two formulas got swapped. Setting <i>v</i>/2<i>L</i><sub>o</sub> = <i>v</i>/4<i>L</i><sub>c</sub> gives <i>L</i><sub>o</sub> = 2<i>L</i><sub>c</sub>, so the open one is the longer." },
            { "label": "4 : 1", "nudge": "This applies the factor of two twice, or squares it. There is only one factor of two between <i>v</i>/2<i>L</i> and <i>v</i>/4<i>L</i>." }
          ],
          "correct": 1,
          "solution": "Open: f₁ = v/2L_o. Closed: f₁ = v/4L_c. Setting them equal gives L_o = 2L_c, so the ratio is 2 : 1."
        },
        {
          "t": "mcq",
          "q": "At the closed end of an organ pipe there is a displacement node. The pressure variation there is:",
          "opts": [
            { "label": "a pressure node", "nudge": "This assumes displacement and pressure peak together. They do the opposite: where the air is held still it gets compressed hardest, so a displacement node is a pressure ANTINODE." },
            { "label": "a pressure antinode", "nudge": null },
            { "label": "both a pressure node and a displacement node", "nudge": "A point cannot be a node of both. The pressure pattern is the spatial derivative of the displacement pattern, and a derivative is largest exactly where the original is zero." },
            { "label": "neither, since pressure is constant in a standing wave", "nudge": "Pressure is anything but constant in a standing sound wave. The pressure variation is the part of the wave a microphone actually measures, and it is largest at the sealed end." }
          ],
          "correct": 1,
          "solution": "Displacement and pressure are exactly out of step. At a closed end the air cannot move, so the air behind it piles in and the pressure swings hardest: a displacement node is always a pressure antinode."
        },
        {
          "t": "mcq",
          "q": "The first overtone of a closed pipe of length <i>L</i> has the same frequency as the fundamental of an open pipe of length <i>L</i>′. Then <i>L</i>′/<i>L</i> is:",
          "opts": [
            { "label": "2/3", "nudge": null },
            { "label": "3/2", "nudge": "The ratio inverted at the last step. From 3<i>v</i>/4<i>L</i> = <i>v</i>/2<i>L</i>′ you get 6<i>L</i>′ = 4<i>L</i>, so <i>L</i>′ is the SMALLER of the two." },
            { "label": "1/3", "nudge": "This uses the closed pipe's fundamental <i>v</i>/4<i>L</i> instead of its first overtone 3<i>v</i>/4<i>L</i>, which is the overtone trap this whole topic is built around." },
            { "label": "3", "nudge": "This drops the factor of two between <i>v</i>/2<i>L</i>′ and <i>v</i>/4<i>L</i> and keeps only the harmonic number." }
          ],
          "correct": 0,
          "solution": "Closed first overtone is the 3rd harmonic, 3v/4L. Open fundamental is v/2L′. Equate: 3/(4L) = 1/(2L′), so 6L′ = 4L and L′/L = 2/3."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] An open organ pipe of length 0.34 m is sounded. Taking the speed of sound as 340 m/s, find its fundamental frequency.", "a": "<i>f</i><sub>1</sub> = <i>v</i>/2<i>L</i> = 340/0.68 = 500 Hz. Check: λ<sub>1</sub> = 2<i>L</i> = 0.68 m and (500)(0.68) = 340 m/s." },
            { "q": "[NEET] A closed organ pipe and an open organ pipe have the same length. Find the ratio of their fundamental frequencies.", "a": "<i>f</i><sub>closed</sub> : <i>f</i><sub>open</sub> = (<i>v</i>/4<i>L</i>) : (<i>v</i>/2<i>L</i>) = 1 : 2. The closed pipe is one octave lower on the same tube." },
            { "q": "[JEE Main] The second overtone of a closed organ pipe has the same frequency as the third harmonic of an open pipe. Find the ratio of their lengths, closed to open.", "a": "The closed pipe's second overtone is its 5th harmonic, 5<i>v</i>/4<i>L</i><sub>c</sub>. The open pipe's third harmonic is 3<i>v</i>/2<i>L</i><sub>o</sub>. Equate: 5/(4<i>L</i><sub>c</sub>) = 3/(2<i>L</i><sub>o</sub>), giving 10<i>L</i><sub>o</sub> = 12<i>L</i><sub>c</sub> and <i>L</i><sub>c</sub>/<i>L</i><sub>o</sub> = 5/6." },
            { "q": "[JEE Main] A pipe closed at one end resonates at 420 Hz and at 700 Hz, with no resonance between them. Taking the speed of sound as 343 m/s, find its fundamental and its length. Ignore the end correction.", "a": "For a closed pipe, successive resonances differ by 2<i>f</i><sub>1</sub>, so 2<i>f</i><sub>1</sub> = 700 − 420 = 280 and <i>f</i><sub>1</sub> = 140 Hz. Confirm: 420 = 3 × 140 and 700 = 5 × 140, consecutive odd harmonics. <i>L</i> = <i>v</i>/4<i>f</i><sub>1</sub> = 343/560 = 0.61 m." },
            { "q": "[JEE Advanced] A resonance tube driven by a 512 Hz fork gives its first resonance at an air-column length of 16.0 cm and its second at 49.5 cm. Find the speed of sound and the end correction.", "a": "λ = 2(49.5 − 16.0) = 67.0 cm = 0.670 m, so <i>v</i> = <i>f</i>λ = (512)(0.670) = 343 m/s, right on the room-temperature value. Then <i>e</i> = λ/4 − <i>l</i><sub>1</sub> = 16.75 − 16.0 = 0.75 cm, and the shortcut agrees: (49.5 − 48.0)/2 = 0.75 cm." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Calling the first overtone of a closed pipe the second harmonic.</b> It is the THIRD. Overtone counts allowed frequencies above the fundamental, and for a closed pipe those skip every even one. This single confusion is behind more lost marks in this topic than everything else combined.",
            "<b>Using <i>v</i>/2<i>L</i> for a closed pipe.</b> A closed pipe is <i>v</i>/4<i>L</i>, because only a quarter of a wavelength fits, not a half. Getting this wrong doubles every answer and the error survives all the way to the end without ever looking wrong.",
            "<b>Reading a resonance spacing as the fundamental.</b> The spacing between successive resonances is <i>f</i><sub>1</sub> for an open pipe but 2<i>f</i><sub>1</sub> for a closed one. Identify the pipe first, then divide.",
            "<b>Forgetting that a closed pipe is closed at one end only.</b> A tube sealed at both ends is not one of the two cases in this topic. If a question says both ends closed, it is testing whether you noticed.",
            "<b>Ignoring the end correction, or applying it once to an open pipe.</b> An open pipe has TWO open ends and therefore two corrections: <i>L</i> + 2<i>e</i>. A closed pipe has one: <i>L</i> + <i>e</i>. In a resonance-tube question you should not need <i>e</i> at all, because subtracting the two lengths removes it.",
            "<b>Mixing up displacement and pressure patterns.</b> At a closed end there is a displacement node and a pressure antinode; at an open end, the reverse. Questions that ask where the pressure variation is greatest are asking for the displacement nodes.",
            "<b>Forgetting that the speed of sound depends on temperature.</b> A pipe's pitch rises as the air warms even though its length has not changed, because <i>f</i> = <i>v</i>/2<i>L</i> and it is <i>v</i> that moved. If a question mentions temperature, it is not scene-setting."
          ]
        },
        {
          "t": "protip",
          "html": "for the three-successive-resonances question, do not draw anything. take the common difference Δ, divide the smallest frequency by it, and if you get a whole number the pipe is open with <i>f</i><sub>1</sub> = Δ, otherwise it is closed with <i>f</i><sub>1</sub> = Δ/2. that is a five-second identification, and every closed-pipe question in this topic can be checked in one more line by confirming that all the given frequencies come out as odd multiples. carry one extension too, because JEE Advanced likes it: a metal ROD obeys exactly the same rules with the boundaries relabelled, since a clamped point is a displacement node and a free end is a displacement antinode. a rod clamped at its centre is therefore two fixed-free half-rods, so its fundamental is <i>v</i>/(4 × <i>L</i>/2) = <i>v</i>/2<i>L</i>, with <i>v</i> = √(<i>Y</i>/ρ) from Young's modulus rather than √(<i>T</i>/μ). a free-free rod is the open pipe and a clamped-free rod is the closed pipe, and once you see that, rods need no new formulas at all."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "closed end = displacement node · open end = antinode", "note": "the one rule this whole topic is built from" },
            { "f": "open pipe: <i>f</i><sub>n</sub> = <i>nv</i>/2<i>L</i>, all harmonics", "note": "matched ends, so every integer works; spacing <i>f</i><sub>1</sub>" },
            { "f": "closed pipe: <i>f</i><sub>n</sub> = (2<i>n</i> − 1)<i>v</i>/4<i>L</i>, odd only", "note": "mismatched ends; spacing 2<i>f</i><sub>1</sub>; 1st overtone = 3rd harmonic" },
            { "f": "same length: closed : open = 1 : 2", "note": "the closed pipe sounds one octave lower" },
            { "f": "<i>e</i> ≈ 0.6<i>r</i>, effective length <i>L</i> + <i>e</i> or <i>L</i> + 2<i>e</i>", "note": "one correction per OPEN end" },
            { "f": "λ = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>v</i> = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2", "note": "subtracting the lengths deletes <i>e</i>: that is the experiment" },
            { "f": "displacement node = pressure antinode", "note": "and the other way round; they are never in step" }
          ],
          "aids": [
            "\"closed is odd only, open takes all\"",
            "\"closed pipe's first overtone leapfrogs to 3f₁\"",
            "\"subtract the two lengths and the end correction disappears\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Doppler Effect",
      "chip": "05 DOPPLER",
      "kalam": "towards raises, away lowers, and nothing else is negotiable",
      "blocks": [
        {
          "t": "p",
          "html": "You are standing at a railway crossing. A train rushes towards you with its horn blaring at a high, urgent pitch. The instant it passes and starts speeding away, the pitch drops. The driver, sitting inside the cab, hears no change at all, and the horn itself never changed its note.<br><br>That apparent change in the <b>observed frequency</b> of a wave, caused by <b>relative motion</b> between the source and the observer, is the <b>Doppler effect</b>. It is the most reliably examined idea in this chapter and also the one where most marks are lost, not because the physics is hard but because there are four sign choices and students memorise them instead of deriving them."
        },
        {
          "t": "think",
          "html": "start with the fact that solves half the problems: the driver hears nothing change. the driver and the horn move together, so there is no relative motion between them, so there is no shift. that tells you the effect is about the <b>relative</b> arrangement of source and observer and not about anybody's absolute speed. it also tells you what a stationary observer beside a stationary source hears, and what two cars travelling side by side at the same speed hear. no relative motion along the line joining them, no shift."
        },
        {
          "t": "p",
          "html": "Now the mechanism, which is worth more than the formula. Picture the source spitting out wavefronts, one every time period, like ripples.<br><br>If the <b>source</b> is rushing towards you, each new wavefront is launched from a point a little closer to you than the last, so the wavefronts <b>bunch up</b> in front of it and spread out behind it. Bunched wavefronts mean a genuinely <b>shorter wavelength arriving at your ear</b>, and since the medium still carries them at the same speed <i>v</i>, a shorter wavelength means a higher frequency. The wave in the air has physically changed.<br><br>If instead <b>you</b> move towards a stationary source, nothing at all happens to the wave in the air. The wavefronts are exactly as evenly spaced as before. What changes is that you are running into them, so you sweep past more of them per second. The wavelength is untouched; your <b>effective closing speed</b> is not.<br><br>Two completely different mechanisms, and that is why they give two slightly different answers even at the same speed."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WAVEFRONTS FROM A STILL SOURCE AND A MOVING ONE",
          "chips": ["source at rest", "source moving right"],
          "captions": [
            "A stationary source S emitting one wavefront every time period. The circles are evenly spaced in every direction, so an observer O anywhere hears the true frequency. The spacing of the circles IS the wavelength.",
            "The same source, now moving to the right at speed u, emitting at exactly the same rate. Each circle was launched from where the source was at the time, so the centres march to the right and the circles crowd together ahead of the source and spread apart behind it. Ahead, the spacing is (v − u)T; behind, it is (v + u)T. The observer O ahead therefore meets a shorter wavelength and hears a higher pitch, and someone standing behind would hear a lower one. Nothing about the source's own rate of emission has changed."
          ],
          "frames": [
            {
              "x": [-4.6, 3.4], "y": [-2.86, 2.86], "axes": "none", "aspect": 0.72,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.8, "soft": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.6, "soft": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.4, "soft": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "S" },
                { "x": 3, "y": 0, "glyph": "open", "label": "O" }
              ]
            },
            {
              "x": [-4.6, 3.4], "y": [-2.86, 2.86], "axes": "none", "aspect": 0.72,
              "curves": [
                { "c": "circle", "cx": -0.4, "cy": 0, "r": 0.8, "soft": true },
                { "c": "circle", "cx": -0.8, "cy": 0, "r": 1.6, "soft": true },
                { "c": "circle", "cx": -1.2, "cy": 0, "r": 2.4, "soft": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "label": "S" },
                { "x": 3, "y": 0, "glyph": "open", "label": "O" }
              ],
              "arrows": [
                { "from": [0.2, 0], "to": [1.3, 0], "tone": "amber", "label": "u", "at": "above" }
              ],
              "labels": [
                { "x": 2.4, "y": 1.9, "text": "bunched" },
                { "x": -3.4, "y": 1.9, "text": "stretched" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "The sanity check that outranks every formula",
          "html": "<b>Approaching means the observed frequency goes UP. Receding means it goes DOWN.</b> Every Doppler problem, however many moving parts it has, must agree with that sentence. If your algebra hands you a higher frequency when the source and observer are separating, you have made a sign error, full stop, and there is no reading of the physics that rescues it.<br><br>Use it as a gate, not as an afterthought. Decide before you compute whether the answer should be above or below the true frequency; then compute; then check. It costs three seconds and it catches the single most common error in the topic, which is not a conceptual failure at all but a plus written where a minus belonged."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE GENERAL DOPPLER FORMULA FOR SOUND",
          "tag": "observer on top, source underneath",
          "main": "<i>f</i>′ = <i>f</i> · (<i>v</i> ± <i>v</i><sub>o</sub>)/(<i>v</i> ∓ <i>v</i><sub>s</sub>)<br>numerator +<i>v</i><sub>o</sub> if the observer moves TOWARDS · denominator −<i>v</i><sub>s</sub> if the source moves TOWARDS",
          "legend": [
            "<i>f</i> = the true frequency the source emits (Hz), <i>f</i>′ = the frequency the observer actually hears (Hz)",
            "<i>v</i> = speed of sound in the medium (m/s), <i>v</i><sub>o</sub> = speed of the observer (m/s), <i>v</i><sub>s</sub> = speed of the source (m/s), all measured relative to the MEDIUM and all taken as positive numbers",
            "the ± and ∓ are not independent: both are chosen so that motion towards raises the pitch. Fix the two signs from the physics and the formula does the rest"
          ],
          "note": "The observer's speed always lives in the numerator and the source's always in the denominator, and swapping them is a different physical situation with a different answer. The memory line is v_s down below, v_o up top."
        },
        {
          "t": "defgrid",
          "title": "The four cases, written out",
          "rows": [
            { "k": "Source towards, observer still", "v": "<i>f</i>′ = <i>f</i> · <i>v</i>/(<i>v</i> − <i>v</i><sub>s</sub>). Pitch rises" },
            { "k": "Source away, observer still", "v": "<i>f</i>′ = <i>f</i> · <i>v</i>/(<i>v</i> + <i>v</i><sub>s</sub>). Pitch falls" },
            { "k": "Observer towards, source still", "v": "<i>f</i>′ = <i>f</i> · (<i>v</i> + <i>v</i><sub>o</sub>)/<i>v</i>. Pitch rises" },
            { "k": "Observer away, source still", "v": "<i>f</i>′ = <i>f</i> · (<i>v</i> − <i>v</i><sub>o</sub>)/<i>v</i>. Pitch falls" },
            { "k": "Both approaching", "v": "<i>f</i>′ = <i>f</i> · (<i>v</i> + <i>v</i><sub>o</sub>)/(<i>v</i> − <i>v</i><sub>s</sub>). Pitch rises the most" },
            { "k": "Both receding", "v": "<i>f</i>′ = <i>f</i> · (<i>v</i> − <i>v</i><sub>o</sub>)/(<i>v</i> + <i>v</i><sub>s</sub>). Pitch falls the most" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CASE A, A SOURCE MOVING TOWARDS A STILL OBSERVER",
          "steps": [
            {
              "eq": "the source emits at frequency <i>f</i>, so one period is <i>T</i><sub>p</sub> = 1/<i>f</i>, and if it stood still the wavelength in the air would be λ = <i>vT</i><sub>p</sub>",
              "why": "This is the ordinary wave in an ordinary medium. The medium carries sound at <i>v</i> whatever the source does, and it is worth saying out loud because it is the fact the whole derivation turns on."
            },
            {
              "eq": "during one period the source itself advances <i>v</i><sub>s</sub><i>T</i><sub>p</sub> towards the observer, so when it emits the next crest it has crept forward",
              "why": "The previous crest is already travelling at <i>v</i> and does not care that the source moved. What moves is only the launch point of the NEXT one."
            },
            {
              "eq": "the gap between consecutive crests is squeezed: λ′ = <i>vT</i><sub>p</sub> − <i>v</i><sub>s</sub><i>T</i><sub>p</sub> = (<i>v</i> − <i>v</i><sub>s</sub>)/<i>f</i>",
              "why": "This is the heart of the case. The source has physically shortened the wavelength in the air. Anyone standing there with a very fine ruler would measure a shorter λ, whether or not they were listening."
            },
            {
              "eq": "the observer is at rest and the sound still arrives at <i>v</i>, so <i>f</i>′ = <i>v</i>/λ′ = <i>fv</i>/(<i>v</i> − <i>v</i><sub>s</sub>)",
              "why": "Speed over wavelength is frequency. Since <i>v</i> − <i>v</i><sub>s</sub> < <i>v</i>, we get <i>f</i>′ > <i>f</i>, a higher pitch, which is what the sanity check demanded before we started."
            },
            {
              "eq": "look at what happens as <i>v</i><sub>s</sub> approaches <i>v</i>",
              "why": "The denominator goes to zero and <i>f</i>′ runs off to infinity. The formula is not misbehaving; it is telling you that all the wavefronts have piled onto each other into a single sharp front. That is the shock wave, and past that speed the ordinary Doppler formula does not apply at all."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CASE B, AN OBSERVER MOVING TOWARDS A STILL SOURCE",
          "steps": [
            {
              "eq": "the source is stationary, so the wavelength in the air is the ordinary λ = <i>v</i>/<i>f</i>, unchanged",
              "why": "Nothing has been done to the medium. The wavefronts are as evenly spaced as they ever were, and this is precisely what makes this case different from Case A."
            },
            {
              "eq": "the observer runs into the waves at <i>v</i><sub>o</sub>, so relative to the observer the sound closes at an effective speed <i>v</i> + <i>v</i><sub>o</sub>",
              "why": "Speeds add in the observer's own frame. Nothing about the air changed; only the rate at which this particular listener meets the fronts."
            },
            {
              "eq": "<i>f</i>′ = (effective speed)/(wavelength) = (<i>v</i> + <i>v</i><sub>o</sub>)/λ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/<i>v</i>",
              "why": "Again <i>f</i>′ > <i>f</i>, as approach requires. Note that the observer could keep running until <i>v</i><sub>o</sub> exceeded <i>v</i>, and nothing would blow up: they would simply overtake the wavefronts. There is no shock wave on this side."
            },
            {
              "eq": "compare the two at the SAME speed, <i>v</i><sub>s</sub> = <i>v</i><sub>o</sub> = <i>u</i>: <i>fv</i>/(<i>v</i> − <i>u</i>) against <i>f</i>(<i>v</i> + <i>u</i>)/<i>v</i>",
              "why": "These are not equal. Multiply out: the first is <i>fv</i><sup>2</sup>/(<i>v</i>(<i>v</i> − <i>u</i>)) and the second is <i>f</i>(<i>v</i> + <i>u</i>)(<i>v</i> − <i>u</i>)/(<i>v</i>(<i>v</i> − <i>u</i>)) = <i>f</i>(<i>v</i><sup>2</sup> − <i>u</i><sup>2</sup>)/(<i>v</i>(<i>v</i> − <i>u</i>)). The numerators differ by <i>u</i><sup>2</sup>, so the source-moving case always gives the LARGER shift. Combining both cases at once gives the general formula, <i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/(<i>v</i> − <i>v</i><sub>s</sub>)."
            }
          ]
        },
        {
          "t": "p",
          "html": "That asymmetry is not a quirk of the algebra and examiners adore it. <b>For sound, moving the source is not the same as moving the observer.</b><br><br>The reason is the medium. Sound needs air, and the air is a fixed stage against which everybody's motion is measured. A moving source drags its own launch points through that stage and physically alters the wavelength stored in it; a moving observer leaves the stage untouched and only changes how fast they sweep through it. Two mechanisms, two formulas, two answers.<br><br>Light has no medium. There is no stage, so there is nothing for the two cases to be different with respect to, and only the relative velocity can matter. The optical Doppler effect is therefore perfectly symmetric, which is one of the small experimental facts that pushed physics towards relativity."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE ASYMMETRY, AS A GRAPH",
          "chips": ["moving source against moving observer"],
          "captions": [
            "The observed frequency, as a fraction of the true one, plotted against speed as a fraction of the speed of sound. The solid curve is a SOURCE approaching a still observer, f′/f = 1/(1 − u/v); the dashed straight line is an OBSERVER approaching a still source, f′/f = 1 + u/v. At small speeds the two are almost the same, which is why the distinction never bothers you at walking pace. At u = 0.5v the marked points read 2.00 against 1.50, a difference of a third. And the solid curve runs away to infinity as u approaches v, where the wavefronts pile into a shock, while the dashed line simply carries on: only the source side has a speed limit."
          ],
          "frames": [
            {
              "x": [0, 0.75], "y": [0, 4.4], "aspect": 0.72,
              "axisX": "u / v",
              "axisY": "f′ / f",
              "ticksX": { "every": 0.25 },
              "ticksY": { "every": 1 },
              "curves": [
                { "c": "recip", "a": -1, "k": 1, "x0": 1, "d": 0 },
                { "c": "line", "m": 1, "k": 1, "dash": true }
              ],
              "points": [
                { "x": 0.5, "y": 2, "label": "2.00", "at": "nw" },
                { "x": 0.5, "y": 1.5, "label": "1.50", "at": "se" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "hold the two mechanisms apart with one question: <b>did the wavelength in the air change?</b> if the source moved, yes, the crests were laid down closer together and a ruler in the air would prove it. if only the observer moved, no, the crests are exactly where they always were and the observer is just meeting them faster. that question also tells you which slot the speed goes into. a changed wavelength divides, so <i>v</i><sub>s</sub> goes downstairs; a changed closing speed adds, so <i>v</i><sub>o</sub> goes upstairs."
        },
        {
          "t": "def",
          "term": "Where the standard formulas stop working",
          "html": "Four conditions sit underneath every line above. <b>One:</b> the motion is <i>along the line joining source and observer</i>. If a velocity is at an angle, only its component along that line counts, and at the moment of closest approach, where the motion is exactly sideways, there is <b>no Doppler shift at all</b> for sound. The pitch of a passing train is highest before it reaches you and lowest after, and passes through the true value at the instant it goes by. <b>Two:</b> the medium is the reference frame, so a <b>wind</b> changes the effective speed of sound and must be folded in. <b>Three:</b> the source speed must be less than the speed of sound, <i>v</i><sub>s</sub> < <i>v</i>. At <i>v</i><sub>s</sub> = <i>v</i> the denominator vanishes; beyond it the wavefronts pile into a cone behind the source, which is a <b>shock wave</b> or sonic boom, and the ordinary formula is simply not about that situation. <b>Four:</b> the medium itself is not moving except as accounted for by the wind term, and the speeds are all small compared with the speed of light, which for sound is never a concern."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WIND, AND THE MOVING MEDIUM",
          "main": "sound travelling in the same direction as a wind of speed <i>w</i>: replace <i>v</i> by (<i>v</i> + <i>w</i>) EVERYWHERE<br>sound travelling against the wind: replace <i>v</i> by (<i>v</i> − <i>w</i>) everywhere",
          "legend": [
            "<i>v</i> = still-air speed of sound (m/s), <i>w</i> = wind speed (m/s), measured along the source-to-observer line",
            "the replacement goes into the numerator AND the denominator of the Doppler formula, since both of them describe the same medium",
            "only the component of the wind along the line from source to observer matters; a crosswind does nothing to first order"
          ],
          "note": "A wind is not a Doppler shift on its own. Blow a wind past a stationary source and a stationary observer and the frequency is completely unchanged: v and lambda both rise and f = v/lambda is untouched. Wind only matters once something else is moving too."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DOPPLER EFFECT FOR LIGHT",
          "tag": "symmetric, because there is no medium",
          "main": "<i>f</i>′ = <i>f</i>(1 ± <i>u</i>/<i>c</i>) · Δλ/λ = <i>u</i>/<i>c</i>, valid for <i>u</i> ≪ <i>c</i><br>approaching gives BLUESHIFT · receding gives REDSHIFT",
          "legend": [
            "<i>u</i> = the RELATIVE speed of source and observer along the line of sight (m/s); for light only the relative speed exists",
            "<i>c</i> = 3 × 10<sup>8</sup> m/s, λ = emitted wavelength (m), Δλ = the shift in wavelength (m), and Δλ/λ is dimensionless",
            "<i>f</i>′ = observed frequency (Hz). Use + for approach and − for recession, which is the same towards-raises rule as for sound"
          ],
          "note": "This is the low-speed approximation. It is what tells us the universe is expanding: distant galaxies show every spectral line shifted to longer wavelengths, and the further away they are the larger the shift."
        },
        {
          "t": "proc",
          "title": "Assigning the two signs, every time",
          "steps": [
            "<b>Draw the line joining source and observer and put both velocities on it.</b> Only components along that line count; if the question gives an angle, resolve first.",
            "<b>Predict the answer's direction before computing.</b> Are they closing or separating? Closing means <i>f</i>′ > <i>f</i>, separating means <i>f</i>′ < <i>f</i>. Write that down.",
            "<b>Put <i>v</i><sub>o</sub> in the numerator with a + if the observer moves towards the source</b>, and with a − if away. The observer is always upstairs.",
            "<b>Put <i>v</i><sub>s</sub> in the denominator with a − if the source moves towards the observer</b>, and with a + if away. The source is always downstairs.",
            "<b>Fold in the wind, if any, by replacing <i>v</i> with <i>v</i> ± <i>w</i> in both numerator and denominator.</b> Students routinely apply it to only one, which is a different and wrong problem.",
            "<b>Compute, then check against step 2.</b> If the direction disagrees, flip one sign and see which one it was. Do not flip both."
          ]
        },
        {
          "t": "p",
          "html": "One arrangement appears so often it deserves its own name: a source moving towards a <b>wall</b> and hearing its own <b>echo</b>. It is a double Doppler, and the trick is to do it in two clean halves.<br><br>On the way to the wall, the car is a moving source and the wall is a stationary observer, so the wall receives a raised frequency. Then the wall re-emits that raised frequency as a stationary source, and the driver, still racing towards it, is now a moving observer, so it gets raised again. Two shifts in the same direction, one after the other, and the two combine into a single tidy formula. The driver also hears the horn directly, unshifted, because there is no relative motion between a driver and their own horn, and the two frequencies together produce audible beats."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ECHO FROM A WALL, AND THE BEATS IT MAKES",
          "main": "<i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>)<br><i>f</i><sub>beat</sub> = <i>f</i><sub>echo</sub> − <i>f</i> = 2<i>uf</i>/(<i>v</i> − <i>u</i>)",
          "legend": [
            "<i>u</i> = speed of the source moving towards the wall (m/s), <i>f</i> = the true horn frequency (Hz)",
            "<i>v</i> = speed of sound (m/s), <i>f</i><sub>echo</sub> = the frequency of the returning echo as heard by the driver (Hz)",
            "<i>f</i><sub>beat</sub> = beats per second between the direct horn sound and the echo (Hz). It grows with <i>u</i>, which is how a wall can be used to measure a speed"
          ],
          "note": "Treat the wall as a mirror: an image source approaching at u behind it. That single picture collapses the two-step grind into one line, and it is exactly the shortcut Advanced questions are set to reward."
        },
        {
          "t": "proc",
          "title": "Doing an echo problem without confusion",
          "steps": [
            "<b>Step one, the outward trip.</b> The moving object is the SOURCE and the wall is a stationary observer: <i>f</i><sub>wall</sub> = <i>f</i> · <i>v</i>/(<i>v</i> − <i>u</i>).",
            "<b>Step two, the return trip.</b> The wall is now a stationary SOURCE emitting <i>f</i><sub>wall</sub>, and the moving object is an approaching observer: <i>f</i><sub>echo</sub> = <i>f</i><sub>wall</sub> · (<i>v</i> + <i>u</i>)/<i>v</i>.",
            "<b>Notice that <i>v</i> cancels between the two steps</b>, leaving <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>). Learn the combined form and use the two steps only to justify it.",
            "<b>For beats, subtract the DIRECT sound, not the emitted one.</b> The driver hears their own horn at its true <i>f</i>, unshifted, because they move with it.",
            "<b>Check the size.</b> The echo is shifted up twice, so <i>f</i><sub>echo</sub> must exceed <i>f</i>, and by more than a single-shift calculation would give. If your echo comes out below the true frequency, you receded somewhere you should have approached."
          ]
        },
        {
          "t": "p",
          "html": "The applications are everywhere, and they are worth knowing because exam questions borrow their settings. A highway <b>radar speed gun</b> bounces microwaves off a car and reads the frequency shift of the return, which is the wall-echo calculation done with light instead of sound. A submarine's <b>sonar</b> does the same with sound in water to track another vessel. Doctors run an <b>ultrasound Doppler</b> across an artery to measure how fast blood is flowing and in which direction. And astronomers measure the <b>redshift</b> of distant galaxies, finding every spectral line stretched towards longer wavelengths by an amount that grows with distance, which is the observation that told us the universe is expanding."
        },
        {
          "t": "defgrid",
          "title": "Doppler symbols, and where each belongs",
          "rows": [
            { "k": "<i>f</i>", "v": "true frequency emitted by the source, Hz. Never changes" },
            { "k": "<i>f</i>′", "v": "frequency actually observed, Hz. This is what the question asks for" },
            { "k": "<i>v</i>", "v": "speed of sound in the medium, m/s. Take 343 m/s at 20 °C unless given" },
            { "k": "<i>v</i><sub>s</sub>", "v": "source speed, m/s. Always in the DENOMINATOR, minus if approaching" },
            { "k": "<i>v</i><sub>o</sub>", "v": "observer speed, m/s. Always in the NUMERATOR, plus if approaching" },
            { "k": "<i>w</i>", "v": "wind speed, m/s. Modifies <i>v</i> in both numerator and denominator" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A train approaches a stationary listener on a platform at 30 m/s, sounding a horn of frequency 500 Hz. Taking the speed of sound in air as 330 m/s, find the frequency the listener hears.",
          "steps": [
            "Predict first: they are closing, so the answer must be above 500 Hz.",
            "Source moving towards a stationary observer, so <i>v</i><sub>s</sub> = 30 m/s goes in the denominator with a minus, and <i>v</i><sub>o</sub> = 0.",
            "<i>f</i>′ = <i>f</i> · <i>v</i>/(<i>v</i> − <i>v</i><sub>s</sub>) = 500 × 330/(330 − 30) = 500 × 330/300 = 500 × 1.1 = 550 Hz.",
            "Check against the prediction: 550 Hz is above 500 Hz, as approach demands.",
            "Worth seeing the mechanism in the numbers: the wavelength in the air ahead of the train is (330 − 30)/500 = 0.60 m instead of the still-source 330/500 = 0.66 m. Shorter wavelength, same sound speed, higher pitch."
          ],
          "ans": "550 Hz"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In Case 1 a source moves towards a stationary observer at 30 m/s. In Case 2 the observer moves towards a stationary source at 30 m/s. The true frequency is 300 Hz and the speed of sound is 330 m/s. Are the two observed frequencies equal?",
          "steps": [
            "The trap: same speed, same approach, so the same answer, surely. No. Doppler for sound is asymmetric.",
            "Case 1, source moving: <i>f</i>′ = <i>f</i> · <i>v</i>/(<i>v</i> − <i>v</i><sub>s</sub>) = 300 × 330/300 = 330 Hz.",
            "Case 2, observer moving: <i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/<i>v</i> = 300 × 360/330 = 327.3 Hz.",
            "They differ, and the source-moving case is the larger. Both are above 300 Hz, so both pass the direction check; only the arithmetic distinguishes them.",
            "The reason, in one line: the moving source physically compressed the wavelength in the air, while the moving observer merely changed the rate at which they meet unchanged wavefronts. The two shifts agree only when both speeds are very small compared with <i>v</i>, which is why a walking pace never reveals the difference."
          ],
          "ans": "No. 330 Hz against 327.3 Hz, and the moving source always gives the larger shift"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "An ambulance with a siren of frequency 600 Hz moves towards a motorcyclist at 40 m/s, while the motorcyclist rides towards the ambulance at 20 m/s. Taking the speed of sound as 340 m/s, find the frequency the motorcyclist hears.",
          "steps": [
            "Predict: both are closing, so the answer must be well above 600 Hz, and higher than either motion alone would give.",
            "Both approaching, so the numerator gains +<i>v</i><sub>o</sub> and the denominator loses <i>v</i><sub>s</sub>.",
            "<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/(<i>v</i> − <i>v</i><sub>s</sub>) = 600 × (340 + 20)/(340 − 40) = 600 × 360/300 = 600 × 1.2 = 720 Hz.",
            "Check the direction: 720 Hz is above 600 Hz. Check the size: the source alone would give 600 × 340/300 = 680 Hz and the observer alone 600 × 360/340 = 635 Hz, so 720 Hz being larger than both is exactly right.",
            "Note what would happen if you swapped the two speeds by mistake, putting 40 upstairs and 20 downstairs: 600 × 380/320 = 712.5 Hz. Also above 600, so the direction check would NOT catch it. This is why the numerator and denominator rule has to be remembered as physics rather than as a shape."
          ],
          "ans": "720 Hz"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A car moving towards a large vertical wall at 20 m/s sounds a horn of frequency 320 Hz continuously. The speed of sound is 340 m/s. Find (a) the frequency of the echo heard by the driver and (b) the beat frequency between the direct horn sound and the echo.",
          "steps": [
            "Recognise the structure: a double Doppler. The wall first acts as a stationary observer, then re-emits as a stationary source, and the driver is both the original source and the final listener.",
            "Step one, sound reaching the wall. The car is an approaching source and the wall a stationary observer: <i>f</i><sub>wall</sub> = 320 × 340/(340 − 20) = 320 × 340/320 = 340 Hz.",
            "Step two, the echo. The wall is now a stationary source emitting 340 Hz, and the driver is an observer approaching it at 20 m/s: <i>f</i><sub>echo</sub> = 340 × (340 + 20)/340 = 340 × 360/340 = 360 Hz.",
            "The combined shortcut agrees: <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>) = 320 × 360/320 = 360 Hz.",
            "(b) The driver ALSO hears the horn directly at its true 320 Hz, because there is no relative motion between a driver and their own horn. Beats between the direct sound and the echo: <i>f</i><sub>beat</sub> = 360 − 320 = 40 Hz.",
            "The general result confirms it: <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>) = 2(20)(320)/(340 − 20) = 12800/320 = 40 Hz.",
            "Reasoning check: the beat count grows with the car's speed, so a driver could in principle read their own speed off the throb. That is exactly how some early sound-based speed gadgets worked, and it is the same idea a radar gun uses with light."
          ],
          "ans": "(a) echo 360 Hz · (b) 40 beats per second"
        },
        {
          "t": "mcq",
          "q": "A source of sound moves towards a stationary observer. Compared with the emitted sound, the observer hears a sound of:",
          "opts": [
            { "label": "higher frequency and shorter wavelength", "nudge": null },
            { "label": "higher frequency and longer wavelength", "nudge": "Self-contradictory. The speed of sound in the air is fixed by the air, so <i>v</i> = <i>f</i>λ makes a higher frequency and a longer wavelength impossible together." },
            { "label": "lower frequency and shorter wavelength", "nudge": "Right about the wavelength, wrong about the direction of the frequency. Bunched wavefronts arrive more often, not less." },
            { "label": "the same frequency", "nudge": "This ignores the relative motion entirely, which is the one thing the question supplied." }
          ],
          "correct": 0,
          "solution": "Approach bunches the wavefronts, so the wavelength arriving at the observer is genuinely shorter, and with v fixed by the medium a shorter λ means a higher f."
        },
        {
          "t": "mcq",
          "q": "A source and an observer both move towards each other at the same speed. Which formula gives the observed frequency?",
          "opts": [
            { "label": "<i>f</i>′ = <i>f</i>(<i>v</i> − <i>v</i><sub>o</sub>)/(<i>v</i> + <i>v</i><sub>s</sub>)", "nudge": "Both signs flipped. This is the RECEDING case, and it lowers the pitch, which fails the towards-raises check before you compute anything." },
            { "label": "<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/(<i>v</i> − <i>v</i><sub>s</sub>)", "nudge": null },
            { "label": "<i>f</i>′ = <i>f</i>(<i>v</i> − <i>v</i><sub>o</sub>)/(<i>v</i> − <i>v</i><sub>s</sub>)", "nudge": "One sign right and one wrong, the classic half-remembered rule. The denominator is correct for an approaching source; the numerator is the receding-observer case." },
            { "label": "<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub>o</sub>)/(<i>v</i> + <i>v</i><sub>s</sub>)", "nudge": "The mirror of the previous slip: correct numerator, receding denominator. Always test the whole expression against towards-raises rather than each half separately." }
          ],
          "correct": 1,
          "solution": "Approach must raise the pitch, so the numerator gains +v_o and the denominator loses v_s. The observer is always on top and the source always underneath."
        },
        {
          "t": "mcq",
          "q": "The Doppler effect for sound is NOT symmetric between a moving source and a moving observer because:",
          "opts": [
            { "label": "sound waves are longitudinal", "nudge": "Whether a wave is longitudinal or transverse has nothing to do with this. Water waves are transverse and show exactly the same asymmetry, for exactly the same reason." },
            { "label": "the speed of sound depends on frequency", "nudge": "In a non-dispersive medium such as ordinary air it does not, which is just as well: if it did, a chord played across a hall would arrive scrambled." },
            { "label": "sound travels through a medium that serves as a fixed reference frame", "nudge": null },
            { "label": "the observer cannot move faster than sound", "nudge": "An observer certainly can move faster than sound, and nothing in the formula breaks if they do. It is the SOURCE that has the speed limit, and even that is not the reason for the asymmetry." }
          ],
          "correct": 2,
          "solution": "The air is a stage everyone's motion is measured against. A moving source changes the wavelength stored in the air; a moving observer changes only the effective speed at which they meet it. Light, having no medium, is symmetric."
        },
        {
          "t": "mcq",
          "q": "Light from a distant star is observed shifted towards longer wavelengths. The star is:",
          "opts": [
            { "label": "approaching us, a blueshift", "nudge": "The term is right and the motion is wrong. Approach shortens the wavelength, towards the blue end of the spectrum; the question said longer." },
            { "label": "receding from us, a redshift", "nudge": null },
            { "label": "stationary", "nudge": "A stationary source shows no shift at all, and the question explicitly reports one." },
            { "label": "heating up", "nudge": "Heating changes a body's blackbody colour, which is a completely different mechanism and shifts the whole spectrum rather than displacing individual spectral lines. A Doppler shift moves the LINES." }
          ],
          "correct": 1,
          "solution": "Longer wavelength means redshift, which means recession. Δλ/λ = u/c then converts the shift into a speed."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A car sounds a horn of 400 Hz while moving AWAY from a stationary listener at 20 m/s. Find the observed frequency, taking the speed of sound as 340 m/s.", "a": "Receding source, so the denominator gains: <i>f</i>′ = 400 × 340/(340 + 20) = 400 × 340/360 = 377.8 Hz. Below 400 Hz, as recession demands." },
            { "q": "[NEET] A whistle of 500 Hz is stationary. An observer runs AWAY from it at 34 m/s. What frequency is heard? Speed of sound 340 m/s.", "a": "Receding observer, so the numerator loses: <i>f</i>′ = 500 × (340 − 34)/340 = 500 × 306/340 = 450 Hz." },
            { "q": "[JEE Main] Two trains move towards each other, each at 20 m/s. One sounds a whistle of 660 Hz. What does a passenger on the other train hear? Speed of sound 340 m/s.", "a": "Both approaching: <i>f</i>′ = 660 × (340 + 20)/(340 − 20) = 660 × 360/320 = 742.5 Hz. Above 660 Hz, as both closing demands." },
            { "q": "[JEE Main] A 400 Hz source moves towards a stationary observer at 30 m/s while a wind of 10 m/s blows from the source towards the observer. The still-air speed of sound is 340 m/s. Find the observed frequency.", "a": "The wind carries the sound, so the effective speed is 340 + 10 = 350 m/s, and it must be used in BOTH places: <i>f</i>′ = 400 × 350/(350 − 30) = 400 × 350/320 = 437.5 Hz." },
            { "q": "[JEE Advanced] A distant galaxy shows the sodium line, true wavelength 589.0 nm, shifted to 589.6 nm. Is it approaching or receding, and at what speed? Take <i>c</i> = 3 × 10<sup>8</sup> m/s.", "a": "The wavelength has increased, so it is a redshift and the galaxy is RECEDING. <i>u</i> = <i>c</i>Δλ/λ = (3 × 10<sup>8</sup>)(0.6/589.0) = 3.06 × 10<sup>5</sup> m/s, about 306 km/s. That is 0.1 per cent of <i>c</i>, comfortably inside the range where the low-speed formula is legitimate." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Sign-convention chaos.</b> The single most common error in the chapter. Do not memorise four formulas blindly. Anchor every problem to towards raises and away lowers, assign the signs so the result matches, and if it does not, flip exactly one sign and find out which.",
            "<b>Treating source-moving and observer-moving as the same.</b> For sound they give different answers, and the difference is examined deliberately. <i>v</i><sub>s</sub> lives in the denominator and <i>v</i><sub>o</sub> in the numerator, and swapping them changes the physical situation, not just the algebra.",
            "<b>Applying a wind to only one part of the formula.</b> The wind changes the speed of sound in the medium, and the numerator and denominator describe the same medium, so <i>v</i> becomes <i>v</i> ± <i>w</i> in BOTH. Half-applying it is a different problem with a plausible-looking wrong answer.",
            "<b>Using an off-axis velocity directly.</b> Only the component along the line joining source and observer counts. At the moment of closest approach the motion is entirely sideways and there is NO shift, which is why a passing horn sweeps down through its true pitch rather than jumping.",
            "<b>Subtracting the emitted frequency when the echo question wants the direct one.</b> In a wall-echo problem the driver hears their own horn at its true <i>f</i>, unshifted. Beats are between the echo and that, not between the echo and the frequency the wall received.",
            "<b>Using the sound formula for light.</b> Light has no medium, so there is no separate source and observer case and only the relative speed appears. Writing <i>c</i>/(<i>c</i> − <i>u</i>) for a receding galaxy is the sound formula smuggled into the wrong physics.",
            "<b>Ignoring what happens as <i>v</i><sub>s</sub> approaches <i>v</i>.</b> The formula diverging is not an arithmetic accident; it is the onset of a shock wave, and a question that gives a supersonic source is testing whether you noticed that the formula no longer applies."
          ]
        },
        {
          "t": "protip",
          "html": "for a source approaching a wall and hearing its own echo, skip the two-step grind entirely: treat the wall as a mirror and use <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>), with beats against the direct sound of <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>). recognising the wall as a stationary mirror turns a messy double Doppler into one line. for everything else, carry the shape rather than the four cases: <b>observer upstairs, source downstairs, towards raises</b>. and keep one order-of-magnitude fact for the multiple-choice sheet: at highway speeds <i>u</i>/<i>v</i> is about 0.06, so a Doppler shift on a car horn is a few per cent, not a few times. if an option offers a doubled or halved frequency for an ordinary vehicle, it is wrong before you compute anything."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>f</i>′ = <i>f</i>(<i>v</i> ± <i>v</i><sub>o</sub>)/(<i>v</i> ∓ <i>v</i><sub>s</sub>)", "note": "observer upstairs, source downstairs, always" },
            { "f": "+<i>v</i><sub>o</sub> if the observer approaches · −<i>v</i><sub>s</sub> if the source approaches", "note": "signs chosen so that towards raises the pitch" },
            { "f": "source moving ≠ observer moving, at equal speed", "note": "the source changes λ, the observer changes closing speed" },
            { "f": "wind: replace <i>v</i> by <i>v</i> ± <i>w</i> EVERYWHERE", "note": "both numerator and denominator; a wind alone shifts nothing" },
            { "f": "echo off a wall: <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>), <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>)", "note": "the wall is a mirror; the driver hears their own horn unshifted" },
            { "f": "light: <i>f</i>′ = <i>f</i>(1 ± <i>u</i>/<i>c</i>), Δλ/λ = <i>u</i>/<i>c</i>", "note": "symmetric, since there is no medium. red is receding" },
            { "f": "valid only for <i>v</i><sub>s</sub> < <i>v</i> and motion along the line of sight", "note": "at closest approach there is no shift; beyond <i>v</i> there is a shock wave" }
          ],
          "aids": [
            "\"towards raises, away lowers, and check it every time\"",
            "\"v_s down below, v_o up top\"",
            "\"red runs away\""
          ]
        }
      ]
    }
  ]
};

export default phy11Waves;
