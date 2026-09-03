/**
 * Chapter 07 · Alternating Current. Physics, Class 12.
 *
 * Restructured from pages 456 to 513 of the Drona Class 12 Physics Master
 * Reference into the block system in lib/textbooks.ts, matching the voice and
 * density of phy-12-04-moving-charges-magnetism.ts, which is also the sibling
 * read most closely for phasor technique: it already draws a right-hand-rule
 * circle and a torque-on-loop diagram, and this chapter's phasor triangle and
 * reference-circle picture are the same construction wearing V and I instead
 * of B and IA.
 *
 * FIVE TOPICS FROM FIVE SOURCE SUBTOPICS, NO MERGE AND NO SPLIT, ONE
 * RESEQUENCING. The source's own subtopic NUMBERS do not run in the order the
 * book prints them: it presents, in order, Subtopic 00 (AC Fundamentals:
 * Average and RMS Values and Phasors), Subtopic 01 (AC Voltage across R, L, C
 * and LCR Series Circuits), Subtopic 04 (LC Oscillations), Subtopic 02
 * (Resonance and Q-Factor), Subtopic 03 (Power in AC Circuits and
 * Transformers) -- 00, 01, 04, 02, 03, not 00 through 04. The five topics below
 * follow the book's PRINTED order exactly (each is one subtopic, untouched),
 * which is also the pedagogically necessary order: LC Oscillations must come
 * before Resonance, because Resonance's entire argument is "drive an LCR
 * circuit at the frequency it already wants to oscillate at on its own," and
 * that "own frequency," omega-nought = 1/root(LC), is the natural frequency
 * Topic 03 derives from a source-free LC loop. Putting Resonance first would
 * have forced omega-nought's derivation into a topic about something else.
 * Five sits inside the validator's 4-to-6 window with room to spare, and every
 * seam in the source is already a clean Section-8-to-Section-1 boundary, so
 * there was nothing to merge and nothing to split.
 *
 * The Round 2 Addendum (pages 497 to 536: A parallel circuits and the
 * admittance method, B parallel resonance / anti-resonance, C power factor
 * correction, D damped LC oscillations, E series-parallel reduction) is NOT A
 * TOPIC, per the brief, and four of its five sections are one dimension past
 * what CBSE, JEE Main, NEET or even JEE Advanced ask of this chapter: complex
 * admittance algebra, a rejector "tank" circuit built from two lossy branches,
 * and general series-parallel reduction are graduate-circuits material dressed
 * in Class 12 notation, and every one of them restates a result the five main
 * subtopics already teach (impedance, phasor addition, or the LCR differential
 * equation) one layer deeper. Two lines were drawn forward regardless, each
 * into the topic it directly extends, the same way the sibling chapter pulled
 * one relativistic correction out of its own addendum:
 *   - Addendum C (Power Factor Correction) supplies Topic 05's closing `proc`
 *     block. Capacitor-bank sizing for a lagging industrial load is squarely
 *     mainstream JEE Main material that the main body's Subtopic 03 defines
 *     power factor for but never shows how to FIX, and Addendum C's own
 *     worked example (a 10 kW motor at cos phi = 0.707, corrected to unity)
 *     recomputes clean: reactive power 10 kVAR, required capacitance 602
 *     microfarad, line current falling from 61.5 A to 43.5 A, checked two
 *     independent ways (VωC against the motor's own reactive-current
 *     component) and both landing on 43.5 A.
 *   - Addendum D (Damped LC Oscillations) supplies one line in Topic 03's
 *     protip: a real LC loop's ring-down frequency is omega_d =
 *     root(omega0^2 - (R/2L)^2), the exact structural twin of the damped SHM
 *     result omega' = root(omega0^2 - (b/2m)^2) already met in
 *     phy-11-13-oscillations.ts, with R/2L standing in for b/2m. This is the
 *     one-line extension the chapter's own Concept Intuition already gestures
 *     at ("a real one slowly dies away") without naming the formula.
 * Addendum A (admittance), B (parallel resonance) and E (series-parallel
 * reduction) were read in full and used nowhere: their own worked examples
 * were spot-checked and reproduce, but nothing in them is examinable at this
 * level that Topics 02 and 04 do not already cover by simpler means.
 *
 * ERRATA REVIEWED (source pages 924 to 925, both pages read in full). BOTH
 * listed entries were read; ONE touches this chapter. The Chapter 10 entry
 * repairs a swapped dark/bright condition in Wave Optics thin-film
 * interference and has nothing to do with Alternating Current. The Chapter 7
 * entry is this chapter's own, and it is Subtopic 01's Practice Exercise 5 --
 * full working under CORRECTIONS below, since the errata gives the diagnosis
 * and a replacement problem rather than a single corrected number.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and
 * MCQ key on pages 456 to 496 was recomputed independently before the errata
 * pages were opened, addendum first per the brief's instruction to treat it
 * with particular suspicion. The five main subtopics came out clean: all
 * twenty worked examples, twenty-five practice answers and twenty MCQ keys
 * reproduce. Addendum C's one example used below (see FIGURES/SEAMS note
 * above) also reproduces. One defect was found independently, and it is
 * exactly the one the errata lists:
 *
 *   Subtopic 01, Practice Exercise 5 (source page 470, JEE Advanced). Printed:
 *   "A series LCR circuit carries rms current 2 A when driven at omega_1 = 500
 *   rad/s, with the current LAGGING the voltage. When the frequency is
 *   lowered to omega_2, the current LEADS the voltage by the same angle and
 *   the rms current is again 2 A. Given L = 0.20 H and C = 20 microfarad,
 *   find omega_2 and R (rms source voltage = 100 V)." Independently checked
 *   before the errata was read: the stated drive frequency IS the resonant
 *   frequency of the stated components, omega_0 = 1/root(LC) =
 *   1/root(0.20 x 20e-6) = 500 rad/s = omega_1 exactly. At resonance X_L = X_C
 *   identically, the phase angle is exactly zero, and the current is in
 *   phase with the voltage -- so "the current lagging the voltage" cannot hold
 *   for this L, C and omega_1 at once. The standard equal-current construction
 *   needs omega_1 * omega_2 = omega_0^2, which with omega_1 = omega_0 forces
 *   omega_2 = omega_0 = omega_1: the "second frequency" collapses onto the
 *   first, because the intended pair sits symmetrically ABOUT resonance, not
 *   ON it. The printed answer (omega_2 = 500 rad/s, R = V/I = 50 ohm) computes
 *   this degenerate case without remarking on the contradiction. Restored in
 *   Topic 02's practice set using the errata's own consistent substitute: keep
 *   V = 100 V and I = 2 A, change L to 0.10 H (so omega_0 = 1/root(0.10 x
 *   20e-6) = 707 rad/s) and take omega_1 = 800 rad/s, above resonance, where
 *   X_L = 80 ohm exceeds X_C = 62.5 ohm and the current genuinely lags.
 *   Then omega_2 = omega_0^2/omega_1 = 625 rad/s, where X_C = 80 ohm exceeds
 *   X_L = 62.5 ohm and the current genuinely leads by the same angle; with
 *   Z = V/I = 50 ohm, R = root(Z^2 - (X_L - X_C)^2) = root(2500 - 306.25) is
 *   about 46.8 ohm.
 *
 * SOURCE DAMAGE. Four dialects actually appear across this range; nothing
 * below was transcribed from any of them without independent reconstruction,
 * and a fifth predicted dialect (an ASCII-shifted heading run) does not occur
 * here at all.
 *
 *   - MATHEMATICAL ALPHANUMERIC SYMBOLS IN EVERY MATH RUN, exactly the
 *     dominant dialect the brief predicts. A script count over pages 456 to
 *     513 finds 4,571 characters in U+1D400 to U+1D7FF, led by math-italic
 *     omega (447 instances), L (423), C (369), R (305), m (263), V (244), I
 *     (210), i (195) and X (182) -- the eight symbols this chapter's every
 *     formula is built from. Every one was retyped in ordinary italic through
 *     the `<i>` tag; the codepoint itself is a blank box on device and the
 *     validator rejects it outright.
 *   - BACKSLASH-LETTER OPERATOR TOKENS, four of the five flavours the brief
 *     names, all decoded against the arithmetic each line is heading toward:
 *     "\n7" is the minus sign (23 instances, e.g. Subtopic 01's derivation
 *     "i = \n7 (vm/omegaL) cos omegat" is the inductor current's own minus
 *     sign), "\nN" is the multiplication sign (12 instances, e.g. "8.0 \nN
 *     10^-6" is 8.0 times ten-to-the-minus-six), "\nK" is the degree sign (12
 *     instances, every phase angle in Subtopics 01 to 03), and "\nA" is
 *     multiplication again in every one of its four occurrences here (e.g.
 *     Subtopic 02's "L/R \nA 1/root(LC)" and Subtopic 03's "vm \nA
 *     (omega0 L/R)"), rather than the centred-dot reading the pilot chapter
 *     needed -- a reminder that the SAME token decodes differently chapter to
 *     chapter and must be checked against its own arithmetic every time, not
 *     assumed from precedent. "\nC" (ratio colon) and "\nH" (ellipsis) do not
 *     occur in this range. A fifth, rarer token turned up once and is not in
 *     the brief's own list: "\tq" stands for a literal opening bracket "[" in
 *     Subtopic 03's average-power derivation ("p = vmim\tq sin^2 omegat cos
 *     phi \n7 sin omegat cos omegat sin phi]"), paired with a literal closing
 *     "]" later on the same line -- reconstructed the way
 *     phy-11-13-oscillations.ts reconstructed its own "\tq"/"\t@" pair.
 *   - INTER-WORD SPACES VANISH at tight kerning, confirmed in the chapter's
 *     own headline mnemonic (source page 472): "EMF leads currentI" and
 *     "currentIleadsEMF" have lost the spaces around "I" in "Memorise 'ELI the
 *     ICE man.' In an inductor (L), EMF leads current I -> ELI. In a
 *     capacitor (C), current I leads EMF -> ICE," re-spaced by hand below.
 *     Every addendum page footer ("Class 12 PhysicsPage 7 of 17") shows the
 *     same defect but carries no content.
 *   - NO ASCII-SHIFTED HEADING RUN (the "+29"/"-29"/"+46" pattern) appears
 *     anywhere in pages 456 to 536, and no octal escape and no Wingdings tick
 *     digit either -- every heading in this range extracted as readable
 *     English. Checked for the "silently empty page" failure the brief warns
 *     about: every one of the 58 pages in this range carries non-trivial
 *     text (the shortest, source pages 463, 467, 482 and 491, are single
 *     paragraphs of FIGURE CAPTION text continuing from the previous page --
 *     read in full above, not blank), so no page needed the pdftoppm
 *     fallback.
 *
 * DIMENSIONS, worked in M L T A. Every boxed formula below reduces cleanly;
 * the load-bearing check is the one the brief asks for by name:
 *
 *   - Impedance / reactance / resistance are the SAME dimension, and must be:
 *     from F = qvB style reasoning (quoted from Moving Charges and
 *     Magnetism), volt = M L^2 T^-3 A^-1, so ohm = volt/ampere =
 *     M L^2 T^-3 A^-2. X_L = omegaL: [T^-1][L_ind] must equal M L^2 T^-3 A^-2,
 *     forcing [L_ind] = M L^2 T^-2 A^-2 (the henry). X_C = 1/(omegaC): forces
 *     [C] = 1/([T^-1][M L^2 T^-3 A^-2]) = M^-1 L^-2 T^4 A^2 (the farad). Z =
 *     root(R^2 + (X_L - X_C)^2) is a sum of two things of identical
 *     dimension under a root, which is the only way the addition is legal at
 *     all -- exactly the check the impedance TRIANGLE is making every time it
 *     is drawn.
 *   - omega0 = 1/root(LC): root([M L^2 T^-2 A^-2][M^-1 L^-2 T^4 A^2]) =
 *     root(T^2) = T, so 1/root(LC) is T^-1, matching omega. This is the same
 *     computation LC Oscillations and Resonance both lean on, and it is why
 *     the two topics share one symbol for one frequency.
 *   - Q = omega0 L/R: [T^-1][M L^2 T^-2 A^-2]/[M L^2 T^-3 A^-2] = T^-1 x T =
 *     dimensionless, as a "quality" ratio must be. Q = 1/(omega0 C R) and Q =
 *     (1/R)root(L/C) reduce the same way.
 *   - Energy: U_C = q^2/2C: [A T]^2 x [M^-1 L^-2 T^4 A^2]^-1 = A^2T^2 x
 *     M L^2 T^-4 A^-2 = M L^2 T^-2, a joule. U_L = (1/2)Li^2:
 *     [M L^2 T^-2 A^-2][A^2] = M L^2 T^-2. Identical, as the two must be to
 *     trade places every quarter cycle.
 *   - Average power P = V_rms I_rms cos phi: [M L^2 T^-3 A^-1][A] = M L^2 T^-3,
 *     a watt, with cos phi correctly dimensionless.
 *   - Transformer ratio k = N_s/N_p and transmission loss P_loss = I^2 R_line:
 *     [A^2][M L^2 T^-3 A^-2] = M L^2 T^-3, a watt again, consistent with P
 *     above -- the SAME dimension the line is meant to be wasting.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Every current and voltage printed
 * below sits in a plausible domestic-to-industrial range (amps to tens of
 * amps, volts to a few hundred), and Indian mains is used consistently as 220
 * V rms, 311 V peak, 50 Hz, T = 0.02 s, omega = 314 rad/s throughout -- the
 * anchor the RMS-versus-peak `mistakes` item in Topic 01 is built on. Power
 * factor is checked to sit in [0, 1] in every worked example and practice
 * item (Topic 05's transmission-loss example even uses an IMPOSSIBLE number,
 * an 800 percent loss at 250 V, deliberately, to show why low-voltage
 * transmission of 100 kW over that line cannot physically happen at all).
 * At resonance the impedance is checked to be minimum and purely resistive
 * (Z = R) in Topic 04's own derivation, so the current is maximum there -- the
 * single fact the whole topic is organised around. Limiting cases, used where
 * they teach: as omega tends to zero, X_C = 1/omegaC tends to infinity (a
 * capacitor blocks DC, Topic 02's black-box example and MCQ both turn on
 * this) while X_L = omegaL tends to zero (an inductor is a short to DC); as
 * omega tends to infinity the two limits swap, X_L blocking and X_C
 * short-circuiting. The finite-R half-power frequencies of Topic 04 are
 * checked against the R = 0 ideal-LC limit of Topic 03: as R tends to zero the
 * bandwidth Delta-omega = R/L tends to zero and Q tends to infinity, an
 * infinitely sharp, physically unreachable resonance -- exactly the fiction
 * Topic 04's own `def` block names outright.
 *
 * PHASE CONVENTION, DECLARED ONCE AND HELD. Topic 02's `def` block fixes it
 * for the rest of the chapter, matching the source's own choice rather than
 * NCERT's mirror-image one: current is the common, reference phasor in every
 * series circuit (I = im sin omegat), and phi is the angle by which the
 * SOURCE VOLTAGE LEADS the current, tan phi = (X_L - X_C)/R. Equivalently,
 * and used exactly as often below, the current LAGS the voltage in a net
 * inductive circuit and LEADS it in a net capacitive one. In an inductor
 * alone the current lags the voltage by 90 degrees; in a capacitor alone it
 * leads by 90 degrees; the single mnemonic held throughout is "ELI the ICE
 * man" (inductor: EMF Leads I; capacitor: I Leads EMF). RMS VERSUS PEAK is
 * this chapter's OTHER defining error, declared in Topic 01's own `def`
 * block: an unqualified V or I means the RMS value everywhere below unless a
 * subscript or the word "peak" says otherwise, matching the source's own "220
 * V" convention and made a `mistakes` item on sight.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-11-13-oscillations.ts, Topic 01 (the phase convention x = A sin
 *     (omegat + phi), and that velocity leads displacement by pi/2 while
 *     acceleration is exactly anti-phase) and Topic 05 (the reference circle:
 *     a rotating radius whose vertical projection gives the instantaneous
 *     value): quoted directly in Topic 01 for the current phasor and reused
 *     without re-derivation in Topic 02's phasor construction -- the source's
 *     own text says outright that phasor addition "is literally the
 *     reference-circle picture of SHM," and this chapter takes that sentence
 *     at face value rather than re-proving it.
 *   - phy-11-13-oscillations.ts, Topic 04 (the driven, damped harmonic
 *     oscillator's equation of motion and its resonance condition, and the
 *     damped-amplitude formula A = A0 e^(-bt/2m)): quoted in Topic 02's LCR
 *     derivation, where L(d^2q/dt^2) + R(dq/dt) + q/C = vm sin omegat is
 *     named as that SAME equation with L, R and 1/C standing in for mass,
 *     damping and spring constant, and again in Topic 03 and Topic 04, where
 *     the LC circuit's own equation of motion, d^2q/dt^2 = -omega0^2 q, is
 *     the identical SHM signature met there first, and the damped-LC ring-down
 *     frequency quoted in Topic 03's protip (Addendum D) is the direct
 *     structural twin of that chapter's own damped-omega formula.
 *   - math-11-03-trigonometry.ts (sin^2 theta = (1 - cos2theta)/2 and the
 *     companion cosine identity): used without re-derivation in every
 *     sin^2-omegat averaging step below (the RMS derivation, the LC energy
 *     derivation, the average-power derivation) and in three of this
 *     chapter's OWN designed figures, which draw i^2(t), the two LC energies,
 *     and instantaneous power p(t) using this identity directly as a `cos`
 *     PlotCurve (a = -0.5 or +0.5, b = 2, d = 0.5) rather than any new curve
 *     primitive.
 *   - phy-12-04-moving-charges-magnetism.ts is quoted once, structurally
 *     rather than physically: F = qvB's own dimensional bookkeeping (volt =
 *     M L^2 T^-3 A^-1) is the base this chapter's own DIMENSIONS section
 *     builds every ohm, henry and farad from, exactly as that chapter quoted
 *     the cross product from Vector Algebra rather than rebuilding it.
 *   - phy-12-06-electromagnetic-induction.ts DID NOT YET EXIST when this
 *     chapter's source was first read, and by the time it existed it carried
 *     only Topics 01 (Flux, Faraday's and Lenz's Laws) and 02 (Motional EMF
 *     and Eddy Currents) -- Topic 03 (Self-Induction), the topic that properly
 *     OWNS the inductor's back-emf, epsilon = -L(di/dt), the henry as its
 *     unit, and the energy (1/2)LI^2, was still unwritten by both a second
 *     check partway through this chapter and a final check before this
 *     report. Flagged as PRIOR-CHAPTER MATERIAL rather than re-derived: Topic
 *     02 below states inline, in one `def` block, exactly the two facts it
 *     needs (the self-induced back-emf opposes the current that creates it,
 *     magnitude L di/dt, unit the henry) as given, uses them once to build
 *     X_L = omegaL, and does not re-derive L itself for any geometry -- that
 *     derivation belongs one chapter earlier and should be checked against
 *     phy-12-06-electromagnetic-induction.ts's own eventual Topic 03 if it is
 *     read again before this file ships, since a difference in stated
 *     convention there (sign, or which quantity is called epsilon versus v)
 *     would need to be matched here.
 *
 * FIGURES. Three named figures drawn in full (7.1 the LCR phasor diagram, 7.2
 * the resonance curve, 7.3 the transformer), plus six designed, because the
 * source names only three and reading the physics calls for more: the bare
 * LCR series circuit itself (Topic 02, using the `circuit` kind's new
 * frame-level `labels` for the loop's shared current and part-level `side`
 * so R, L and C's labels do not collide sitting side by side on one rail);
 * i(t) against i^2(t), the picture RMS is actually defined from (Topic 01);
 * v and i against time for R, L and C (Topic 02) -- THE PANEL RULE CASE THE
 * BRIEF NAMES DIRECTLY, three chips in one diagram block, never three panels,
 * because the whole point is comparing where each curve's PEAK sits against
 * the others sharing one clock; charge and current against time in an LC loop
 * (Topic 03), the electrical twin of phy-11-13-oscillations.ts's own x-and-v
 * figure; the two LC energies against time, oscillating at twice the charge's
 * own frequency (Topic 03); and instantaneous power p(t) for a resistor
 * against a pure reactance, the picture "wattless current" is actually drawn
 * from rather than asserted (Topic 05). Two renderer techniques do real work
 * across several of these: multiple curves in one frame are told apart by
 * `dash`/`soft` plus a small `labels` tag at each curve's own peak -- since
 * `PlotCurve` carries no `tone` field at all -- exactly the technique
 * phy-11-13-oscillations.ts's Figure 13.A already paid for; and sin^2 and
 * cos^2 are drawn EXACTLY, not approximated, as a `cos` curve with a = ±0.5,
 * b = 2, d = 0.5, using sin^2 x = (1 - cos2x)/2 directly rather than any
 * `pts` sampling. `{ c: 'pts' }` draws Figure 7.2's resonance curves, which
 * are not any named function. Every in-figure label is written without
 * markup and without a true subscript character where the alphabet has none
 * (X_C has no subscript C in Unicode), so "XL" and "VL-VC" stand for X_L and
 * V_L - V_C as plain adjacent characters, exactly as earlier chapters wrote
 * "dB cos alpha" rather than reaching for a tag the renderer would show
 * literally. Tone stays within two accents per frame throughout: amber marks
 * the reactive/resonant quantity under discussion (the net X_L - X_C phasor,
 * the resonance peak, the wattless power lobe), red marks the transmission
 * loss that vanishes at high voltage, and every figure was checked to still
 * read with colour removed, since dash/soft/label already carry the meaning
 * tone is only reinforcing.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12AlternatingCurrent: Chapter = {
  "chapter": "07",
  "title": "Alternating Current",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "AC Fundamentals: Average, RMS Values and Phasors",
      "chip": "01 RMS & PHASORS",
      "kalam": "what alternates still does real work",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · AC Fundamentals: Average, RMS Values and Phasors</b><br>The bedrock of the whole chapter -- every later formula uses V<sub>rms</sub>, I<sub>rms</sub> and omega. CBSE Boards regularly ask for the RMS derivation and the mean-value derivation, 2 to 3 marks. JEE Main tests form factor, peak factor and the RMS of a combined waveform. NEET loves the peak-versus-RMS trap on the 220 V mains. Get this topic right and the rest of the chapter is arithmetic.<br><br><b>02 · AC Voltage across R, L, C and the LCR Series Circuit</b><br>The structural heart of the chapter. JEE Main reliably pulls one to two numericals on impedance and phase angle; NEET favours quick conceptual traps on reactance and phasor addition; JEE Advanced builds multi-element black-box and multi-frequency problems on top of it. CBSE Boards almost always carry the LCR impedance derivation, 3 to 5 marks, plus a short answer on the phase behaviour of L and C.<br><br><b>03 · LC Oscillations</b><br>The conceptual root of resonance. JEE Main and Advanced regularly ask for the oscillation frequency, the maximum current from an initial charge, and energy-sharing instants; NEET tests the L-C energy-exchange concept and the SHM analogy. Trimmed from the current rationalised NCERT text, so CBSE rarely asks it directly -- but it is firmly in the JEE/NEET syllabus and essential for understanding resonance.<br><br><b>04 · Resonance and Q-Factor</b><br>A perennial favourite. JEE Main almost always carries a numerical on resonant frequency or Q-factor; NEET tests the resonance condition as one-liner conceptual traps; JEE Advanced probes bandwidth, half-power frequencies, voltage magnification and sharpness. CBSE Boards regularly ask for the derivation of f0 and a definition of Q-factor, 2 to 3 marks.<br><br><b>05 · Power in AC Circuits and Transformers</b><br>Reliably worth marks everywhere. JEE Main carries numericals on average power, power factor and transformer turns/current ratios; NEET loves the wattless-power conceptual trap and transformer-loss one-liners; JEE Advanced builds power-transmission and efficiency problems. CBSE Boards regularly ask for the transformer principle with the turns-ratio derivation, the list of energy losses and how they are minimised, and a definition of power factor, 3 to 5 marks."
        },
        {
          "t": "p",
          "html": "A direct current pushes the same way always, the current from a cell. An <b>alternating current</b> is restless: it grows, falls to zero, reverses, and repeats, many times each second. Almost all the electricity in the world is AC, and the shape it takes is the sine wave: <i>i</i> = <i>i<sub>m</sub></i> sin <i>omegat</i>, <i>v</i> = <i>v<sub>m</sub></i> sin <i>omegat</i>, where <i>i<sub>m</sub></i> is the peak (or amplitude), the largest value the current reaches, and <i>omega</i> = 2<i>pif</i> = 2<i>pi</i>/<i>T</i> is the angular frequency. In India the mains runs at <i>f</i> = 50 Hz, so the current completes fifty full back-and-forth cycles every second. The reason the world bothers with a restless current instead of clean, steady DC is almost entirely one fact, met in full in Topic 05: <b>AC voltage can be stepped up and down almost losslessly with a transformer</b>, which lets power travel across a country at very high voltage and tiny current, saving enormous amounts of energy. DC cannot do that simply. The price is conceptual: a quantity that keeps reversing is harder to pin one honest number on."
        },
        {
          "t": "think",
          "html": "picture fanning yourself on a hot day. the fan swings forward, then back, forward, then back, and its average position never moves an inch, net displacement zero over a full swing. but you do not feel zero cooling. every stroke, forward or backward, pushes air across your skin, and the cooling does not care which direction the stroke went, only how much air moved. a resistor is exactly this fan: it heats up on the positive half of the cycle and heats up again, just as much, on the negative half, because heating goes as i squared, which is always positive whichever way the current points. so the honest question is never how big on average, that is a trap and the answer is a boring zero. the honest question is how much heating does it do, and the answer to that is rms."
        },
        {
          "t": "def",
          "term": "The RMS-versus-peak convention, fixed once for this whole chapter",
          "html": "Unless a value is explicitly called <b>peak</b> or carries a lone subscript <i>m</i> (as in <i>v<sub>m</sub></i>, <i>i<sub>m</sub></i>), every <i>V</i> and <i>I</i> below is an <b>RMS</b> value -- the same convention the mains rating itself uses. India's mains is quoted as <b>220 V, and that 220 is RMS</b>, never peak: <i>v<sub>m</sub></i> = <i>V<sub>rms</sub></i> root2 = 220 x 1.414 is about <b>311 V</b>. At <i>f</i> = 50 Hz, <i>T</i> = 1/<i>f</i> = <b>0.02 s</b> and <i>omega</i> = 2<i>pif</i> is about <b>314 rad/s</b>. These four numbers, 220 V rms / 311 V peak / 0.02 s / 314 rad/s, recur through every topic below and are worth memorising outright rather than recomputing."
        },
        {
          "t": "p",
          "html": "Why RMS and not the ordinary average? Over one full cycle a sinusoidal current spends exactly as much time positive as negative, so its average is exactly <b>zero</b> -- yet it clearly lights a bulb and delivers real power, so zero cannot be the honest measure of its strength. A resistor does not care which way the current flows; it heats up either way, because heating goes as <i>i</i><sup>2</sup>, which never goes negative. So the question that actually has a useful answer is: what STEADY DC current would produce the same heating in the same resistor? That equivalent value is the <b>root-mean-square (RMS)</b> current, literally the square root of the mean of the square of the current -- the DC-equivalent value, and what every AC meter reads and every appliance is rated for. A second, weaker measure, the <b>average (mean) value over only the positive half-cycle</b>, matters for things like the charge delivered by a half-wave rectifier, and is derived alongside RMS below."
        },
        {
          "t": "p",
          "html": "A wonderfully compact way to carry all of this in one picture is the <b>phasor</b>: a rotating arrow of length equal to the amplitude, spinning anticlockwise at angular speed <i>omega</i>. Its projection onto the vertical axis at any instant gives the instantaneous value, <i>i<sub>m</sub></i> sin <i>omegat</i>. This is exactly the <b>reference circle</b> already met for simple harmonic motion -- the same rotating radius, the same angle <i>omegat</i>, only now the thing rotating is a voltage or a current instead of a displacement. It becomes indispensable the moment two AC quantities are out of step and must be added like vectors rather than like numbers, which is the whole content of Topic 02."
        },
        {
          "t": "think",
          "html": "picture a clock's second hand lying flat, spinning anticlockwise, and a torch shining down its own length from directly above. the shadow it throws on the vertical wall behind it is not a dot circling round, it is a point sliding up, slowing, reversing, sliding down, speeding through the centre -- exactly a sine wave. the second hand never speeds up or slows down, it turns at a perfectly constant rate, omega. all the apparent speeding and slowing in the SHADOW is just geometry, the angle between the hand and the wall changing. a phasor is that hand. two phasors turning at the same omega keep a fixed angle between them forever, which is the only reason 'adding two AC quantities' is even a sensible thing to ask for -- they are two shadows of two hands locked rigidly together, spinning as one."
        },
        {
          "t": "defgrid",
          "title": "Form and peak factor, sinusoid against two other common waveforms",
          "tag": "why the root2 factor is not a universal constant",
          "rows": [
            { "k": "Sinusoid (this chapter, throughout)", "v": "form factor 1.11, peak factor root2 is about 1.414" },
            { "k": "Square wave (on for half a cycle, off the other half at full value)", "v": "form factor 1, peak factor 1 -- RMS equals peak equals the mean, because the wave never changes magnitude" },
            { "k": "Symmetric triangular wave", "v": "form factor about 1.155, peak factor root3 is about 1.732" }
          ]
        },
        {
          "t": "defgrid",
          "title": "The AC vocabulary, with units and dimensions",
          "tag": "every later formula is built from these eight",
          "rows": [
            { "k": "Peak (amplitude) <i>i<sub>m</sub></i>, <i>v<sub>m</sub></i>", "v": "the largest instantaneous value reached. SI unit A or V" },
            { "k": "RMS value <i>I<sub>rms</sub></i>, <i>V<sub>rms</sub></i>", "v": "the DC-equivalent heating value; what a meter reads. SI unit A or V, dimensions [A] or [M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>]" },
            { "k": "Half-cycle mean <i>I<sub>avg</sub></i>, <i>V<sub>avg</sub></i>", "v": "the average over the positive half-cycle only; the FULL-cycle average is always zero" },
            { "k": "Angular frequency <i>omega</i>", "v": "rate the phase advances, <i>omega</i> = 2<i>pif</i>. SI unit rad/s, [T<sup>-1</sup>]" },
            { "k": "Frequency <i>f</i>, period <i>T</i>", "v": "cycles per second (Hz) and seconds per cycle (s); <i>f</i> = 1/<i>T</i>" },
            { "k": "Form factor", "v": "<i>I<sub>rms</sub></i> / <i>I<sub>avg</sub></i> = <i>pi</i>/2root2, about 1.11 for a sinusoid" },
            { "k": "Peak factor", "v": "<i>i<sub>m</sub></i> / <i>I<sub>rms</sub></i> = root2, about 1.414 for a sinusoid" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RMS AND MEAN VALUES OF A SINUSOID",
          "tag": "sinusoids only -- a different wave shape needs a fresh integral",
          "main": "<i>I<sub>rms</sub></i> = <i>i<sub>m</sub></i>/root2 = 0.707 <i>i<sub>m</sub></i><br><i>I<sub>avg</sub></i> = 2<i>i<sub>m</sub></i>/<i>pi</i> = 0.637 <i>i<sub>m</sub></i>",
          "legend": [
            "<i>i<sub>m</sub></i> = peak current (A); the identical pair of formulas holds for <i>V<sub>rms</sub></i> and <i>V<sub>avg</sub></i> from <i>v<sub>m</sub></i>",
            "<i>I<sub>rms</sub></i> is a full-cycle quantity; <i>I<sub>avg</sub></i> is a HALF-cycle quantity, since the full-cycle average is exactly zero"
          ],
          "note": "root2 is about 1.414 and 2/pi is about 0.637, and RMS always sits ABOVE the half-cycle mean and BELOW the peak: 0.637 im < 0.707 im < im. If a computed RMS value ever falls outside that window for a sinusoid, a step has gone wrong."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POWER IN A RESISTOR, THE REASON RMS IS DEFINED THIS WAY",
          "main": "<i>P<sub>avg</sub></i> = <i>I<sub>rms</sub></i><sup>2</sup> <i>R</i> = <i>V<sub>rms</sub></i> <i>I<sub>rms</sub></i> = <i>V<sub>rms</sub></i><sup>2</sup>/<i>R</i>",
          "legend": [
            "<i>P<sub>avg</sub></i> = average power dissipated (W), identical in FORM to the DC result <i>P</i> = <i>I</i><sup>2</sup><i>R</i> once RMS values are used",
            "<i>R</i> = resistance (ohm)"
          ],
          "note": "Mean-squares ADD, not RMS values directly: for a mixed current (a steady DC part plus an AC part, or two sinusoids), I_rms<sup>2</sup> = I_1,rms<sup>2</sup> + I_2,rms<sup>2</sup> + ... -- cross-terms between genuinely different behaviours average to zero over a full cycle."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · RMS VALUE OF A SINUSOIDAL CURRENT",
          "steps": [
            {
              "eq": "<i>I<sub>rms</sub></i><sup>2</sup> = (1/<i>T</i>) integral over one period of <i>i</i><sup>2</sup> <i>dt</i>, with <i>i</i> = <i>i<sub>m</sub></i> sin <i>omegat</i>",
              "why": "RMS is defined as the square root of the MEAN of the square, over one full cycle, so the derivation starts by writing that mean as an integral."
            },
            {
              "eq": "sin<sup>2</sup> <i>omegat</i> = (1 - cos 2<i>omegat</i>)/2, so <i>I<sub>rms</sub></i><sup>2</sup> = (<i>i<sub>m</sub></i><sup>2</sup>/2<i>T</i>) integral of (1 - cos 2<i>omegat</i>) <i>dt</i>",
              "why": "The power-reduction identity turns an awkward sin-squared integral into a constant term and a cosine term that is easy to integrate."
            },
            {
              "eq": "the cos 2<i>omegat</i> term integrates to exactly zero over one full period, leaving <i>I<sub>rms</sub></i><sup>2</sup> = (<i>i<sub>m</sub></i><sup>2</sup>/2<i>T</i>) x <i>T</i> = <i>i<sub>m</sub></i><sup>2</sup>/2",
              "why": "A full cosine cycle has as much area above the axis as below, so it vanishes over exactly one period -- the same cancellation that makes the plain average of AC zero in the first place."
            },
            {
              "eq": "<i>I<sub>rms</sub></i> = <i>i<sub>m</sub></i>/root2",
              "why": "Square root both sides. Physically: the mean of sin-squared over a cycle is exactly one-half, so the mean SQUARE current is im^2/2, and its square root -- the value that matches a DC current's heating -- is im/root2."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MEAN VALUE OVER A HALF CYCLE",
          "steps": [
            {
              "eq": "<i>I<sub>avg</sub></i> = (1/(<i>T</i>/2)) integral from 0 to <i>T</i>/2 of <i>i<sub>m</sub></i> sin <i>omegat</i> <i>dt</i>",
              "why": "The full-cycle average is zero by symmetry, so the useful mean is taken over the positive half only, 0 to T/2."
            },
            {
              "eq": "= (2<i>i<sub>m</sub></i>/<i>T</i>) x [-cos <i>omegat</i>/<i>omega</i>] from 0 to <i>T</i>/2 = (2<i>i<sub>m</sub></i>/<i>Tomega</i>) (-cos<i>pi</i> + cos0) = (2<i>i<sub>m</sub></i>/<i>Tomega</i>) x 2",
              "why": "omega(T/2) = pi exactly, since omega = 2pi/T, so cos at the upper limit is cos(pi) = -1 and at the lower limit cos(0) = 1, and the bracket becomes 1 - (-1) = 2."
            },
            {
              "eq": "<i>I<sub>avg</sub></i> = 4<i>i<sub>m</sub></i>/(2<i>pi</i>) = 2<i>i<sub>m</sub></i>/<i>pi</i> = 0.637 <i>i<sub>m</sub></i>",
              "why": "Substitute T x omega = 2pi and simplify. This is the half-cycle mean used for form factor, and it is what a half-wave rectifier's average output current actually equals."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHY RMS, NOT THE ORDINARY AVERAGE",
          "chips": ["current against time", "current SQUARED against time"],
          "captions": [
            "One full cycle of i = im sin omegat. Its own average is exactly zero, spending equal time above and below the axis, yet an ammeter reads something real. RMS is that reading, and it sits between the half-cycle mean (0.637 im) and the peak (im), never outside that window.",
            "The same current, squared. Because i squared can never go negative, its average is NOT zero: it swings between 0 and im squared, spending exactly half the cycle above the midline 0.5 im squared and half below, by sin squared omegat = (1 - cos 2 omegat)/2. Square-root that midline and RMS falls out -- this is what the definition is actually doing, not the plain sine."
          ],
          "frames": [
            {
              "x": [0, 6.2832], "y": [-1.3, 1.3],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "sin" }],
              "segments": [
                { "from": [0, 0.707], "to": [6.2832, 0.707], "dash": true, "soft": true, "label": "rms", "at": "start" }
              ],
              "labels": [{ "x": 0.3, "y": -1.15, "text": "mean = 0.637" }]
            },
            {
              "x": [0, 6.2832], "y": [-0.15, 1.15],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "cos", "a": -0.5, "b": 2, "d": 0.5 }],
              "segments": [
                { "from": [0, 0.5], "to": [6.2832, 0.5], "dash": true, "soft": true, "label": "mean", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Converting between peak, RMS and mean in three lines",
          "steps": [
            "<b>Identify what you are given.</b> A bare number with no qualifier is RMS (the mains convention); a value explicitly called peak, or carrying a lone subscript m, is im or vm.",
            "<b>Go peak to RMS by dividing by root2</b> (0.707), and RMS to peak by multiplying by root2 (1.414). Going peak to half-cycle mean, multiply by 2/pi (0.637).",
            "<b>Never divide by 2 out of habit.</b> That is the commonest single slip in this topic -- root2 is about 1.41, not 2, and confusing the two turns a correct RMS current into a wrong one by 40 percent."
          ]
        },
        {
          "t": "p",
          "html": "One more reason RMS earns its square rather than settling for a plain magnitude, |<i>i</i>|: power itself is built from <i>i</i><sup>2</sup>, not from |<i>i</i>|, so RMS is the one averaging rule that plugs directly into P = <i>I</i><sup>2</sup><i>R</i> without any extra step. A magnitude average would need its own separate square-and-square-root detour before it could say anything about heating at all; RMS simply IS that detour, done once and named."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "The peak voltage of a sinusoidal AC supply is 311 V. Find (a) the RMS voltage and (b) the mean voltage over a half cycle.",
          "steps": [
            "Given vm = 311 V.",
            "(a) Vrms = vm / root2 = 311 / 1.414 = 220 V -- the familiar mains rating.",
            "(b) Vavg = 2vm / pi = (2 x 311) / 3.1416 = 198 V."
          ],
          "ans": "Vrms = 220 V, Vavg = 198 V. RMS always exceeds the half-cycle mean; their ratio, 1.11, is the form factor."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An AC source is labelled \"220 V.\" What is its peak voltage?",
          "steps": [
            "The trap: assuming 220 V is the peak. It is not -- every AC rating quoted without qualification is an RMS value.",
            "Fast reasoning: vm = Vrms x root2 = 220 x 1.414."
          ],
          "ans": "About 311 V. The insulation in home wiring must withstand 311 V, not 220 V -- a favourite one-mark trap."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A current i = 4 sin(100 pi t) A flows through a 100 ohm resistor. Find (a) the frequency, (b) the RMS current, and (c) the average power dissipated.",
          "steps": [
            "(a) Comparing with i = im sin omegat: omega = 100 pi rad/s, so f = omega/2pi = 50 Hz.",
            "(b) im = 4 A, so Irms = 4/root2 = 2.83 A.",
            "(c) Pavg = Irms<sup>2</sup> R = (2.83)<sup>2</sup> x 100 = 8.0 x 100 = 800 W."
          ],
          "ans": "f = 50 Hz, Irms = 2.83 A, Pavg = 800 W. Shortcut: P = (1/2) im<sup>2</sup> R = (1/2)(16)(100) = 800 W, the 1/2 being the RMS factor squared."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A current i = (3 + 4 sin omegat) A -- a steady 3 A with a 4 A peak AC riding on top -- flows through a 5 ohm resistor. Find (a) the RMS current and (b) the average power dissipated.",
          "steps": [
            "(a) i<sup>2</sup> = 9 + 24 sin omegat + 16 sin<sup>2</sup> omegat. Average term by term: <9> = 9, <24 sin omegat> = 0 (a full-cycle sine average), <16 sin<sup>2</sup> omegat> = 16 x (1/2) = 8.",
            "<i<sup>2</sup>> = 9 + 0 + 8 = 17, so Irms = root17 = 4.12 A.",
            "(b) Pavg = Irms<sup>2</sup> R = 17 x 5 = 85 W."
          ],
          "ans": "Irms is about 4.12 A, Pavg = 85 W. The deep idea: mean-squares add, Irms<sup>2</sup> = IDC<sup>2</sup> + IAC,rms<sup>2</sup> = 3<sup>2</sup> + (4/root2)<sup>2</sup> = 9 + 8 = 17 -- the DC and AC parts heat independently, and the cross-term between them averages away."
        },
        {
          "t": "mcq",
          "q": "The average value of i = im sin omegat over one COMPLETE cycle is:",
          "opts": [
            { "label": "im / root2", "nudge": "That is the RMS value, not the plain average." },
            { "label": "2im / pi", "nudge": "That is the HALF-cycle mean, not the full-cycle average." },
            { "label": "im", "nudge": "That confuses the average with the peak." },
            { "label": "zero", "nudge": null }
          ],
          "correct": 3,
          "solution": "Over a full cycle the current is positive for half and equally negative for the other half, so the average is exactly zero."
        },
        {
          "t": "mcq",
          "q": "The RMS value of a sinusoidal voltage of peak 200 V is:",
          "opts": [
            { "label": "100 V", "nudge": "Dividing by 2 instead of root2." },
            { "label": "141 V", "nudge": null },
            { "label": "200 V", "nudge": "Assumes RMS equals peak, which is never true for a genuine sinusoid." },
            { "label": "283 V", "nudge": "Multiplying by root2 instead of dividing by it." }
          ],
          "correct": 1,
          "solution": "Vrms = vm / root2 = 200 / 1.414 = 141 V."
        },
        {
          "t": "mcq",
          "q": "For a sinusoidal AC, the form factor (RMS divided by half-cycle mean) is:",
          "opts": [
            { "label": "root2", "nudge": "That is the PEAK factor (peak divided by RMS), not the form factor." },
            { "label": "2/pi", "nudge": "That is the half-cycle mean factor alone, not a ratio of two RMS-type quantities." },
            { "label": "pi / 2root2, about 1.11", "nudge": null },
            { "label": "1", "nudge": "The form factor of a sinusoid is never exactly 1." }
          ],
          "correct": 2,
          "solution": "Form factor = (im/root2) / (2im/pi) = pi / 2root2, about 1.11."
        },
        {
          "t": "mcq",
          "q": "A resistor carries i = im sin omegat. The average power it dissipates is:",
          "opts": [
            { "label": "im<sup>2</sup> R", "nudge": "Uses the peak current as if it were a steady DC value." },
            { "label": "(1/2) im<sup>2</sup> R", "nudge": null },
            { "label": "zero", "nudge": "Confuses the CURRENT'S zero average with the POWER'S average; power goes as i squared, which is always positive and never averages to zero." },
            { "label": "im<sup>2</sup> R / pi", "nudge": "Mixes in the half-cycle-mean factor where the RMS factor belongs." }
          ],
          "correct": 1,
          "solution": "Pavg = Irms<sup>2</sup> R = (im/root2)<sup>2</sup> R = (1/2) im<sup>2</sup> R."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A sinusoidal current has a peak value of 10 A. Find its RMS value and its mean value over a half cycle.", "a": "Irms = 10/root2 = 7.07 A; Iavg = 2(10)/pi = 6.37 A." },
            { "q": "[NEET] The RMS value of an alternating voltage is 50 V. What is its peak value and the mean value over a half cycle?", "a": "vm = 50 root2 = 70.7 V; Vavg = 2(70.7)/pi = 45.0 V." },
            { "q": "[JEE Main] An AC voltage v = 311 sin(314t) V is applied across a 220 ohm resistor. Find the RMS current and the average power.", "a": "Vrms = 311/root2 = 220 V; Irms = 220/220 = 1.0 A; P = Irms<sup>2</sup> R = 220 W." },
            { "q": "[JEE Main] A sinusoidal current of peak 2 A and frequency 50 Hz flows for one full cycle. Compute (i) the time period, (ii) the RMS value, (iii) the form factor.", "a": "T = 1/50 = 0.02 s; Irms = 2/root2 = 1.41 A; form factor = 1.11 (true of every sinusoid, regardless of amplitude or frequency)." },
            { "q": "[JEE Advanced] A current i = 2 + 3 sin omegat + 4 cos omegat (A) flows through a resistor. Find its RMS value.", "a": "Mean-squares add for the DC term and for the two same-frequency sinusoids taken together: <i<sup>2</sup>> = 2<sup>2</sup> + 3^2/2 + 4^2/2 = 4 + 4.5 + 8 = 16.5, so Irms = root16.5 = 4.06 A." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Treating the rated voltage as the peak. \"220 V mains\" is RMS; the peak is 311 V. Every AC rating met without qualification is RMS.",
            "Saying the average of AC is something nonzero. Over a FULL cycle it is exactly zero. Only the half-cycle mean (2im/pi) is nonzero -- always say which one is meant.",
            "Applying im/root2 to a non-sinusoidal wave. The root2 factor is specific to sine waves; for a square wave Irms = im itself, and for any other shape the mean-square integral must be redone from scratch.",
            "Adding RMS values directly for a mixed current. For a DC-plus-AC current, or two sinusoids, add the SQUARES: Irms<sup>2</sup> = I1<sup>2</sup> + I2<sup>2</sup> + ... -- cross-terms of genuinely different frequency or behaviour average to zero, but the RMS values themselves do not simply add."
          ]
        },
        {
          "t": "protip",
          "html": "for any average-power-in-a-resistor question, the fastest route is P = (1/2) vm im = (1/2) im<sup>2</sup> R, the 1/2 being (1/root2) squared in disguise, so RMS never even needs to be computed separately. quick sanity check: RMS should always sit between the half-cycle mean and the peak, 0.637 im < 0.707 im < im -- if a computed RMS lands outside that window for a sinusoid, something upstream has slipped."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "i = im sin omegat, omega = 2pif = 2pi/T", "note": "the AC waveform; India runs at f = 50 Hz" },
            { "f": "Irms = im/root2 = 0.707 im", "note": "the DC-equivalent heating value; what meters read" },
            { "f": "Iavg = 2im/pi = 0.637 im", "note": "half-cycle mean; the FULL-cycle average is zero" },
            { "f": "Pavg = Irms<sup>2</sup> R = (1/2) im<sup>2</sup> R", "note": "mean-squares add for mixed currents" }
          ],
          "aids": ["220 V rms is 311 V peak", "rms sits between mean and peak", "power goes as i squared, it never sees a sign"]
        }
      ]
    },
    {
      "n": "02",
      "title": "AC Voltage across R, L, C and the LCR Series Circuit",
      "chip": "02 R L C LCR",
      "kalam": "current decides who lags and who leads",
      "blocks": [
        {
          "t": "p",
          "html": "In a DC circuit, opposition to current has exactly one face: resistance. Push a steady voltage, get a steady current, and Ohm's law settles everything. AC changes the game because the driving voltage itself keeps swinging, fifty times a second on Indian mains. The moment the push starts oscillating, two new characters walk on: the <b>inductor</b>, which hates a CHANGE in current, and the <b>capacitor</b>, which hates a STEADY current. Each opposes AC in a way that depends on how fast the current is swinging -- on the frequency -- and that frequency-dependent opposition has a name, <b>reactance</b> (<i>X</i>). Unlike resistance, reactance stores and returns energy rather than dissipating it, but it shares resistance's unit, the ohm, and behaves the same way arithmetically."
        },
        {
          "t": "think",
          "html": "picture three commuters on a crowded mumbai local at rush hour, the platform surging forward and back as the train doors open and close, our alternating drive. the resistor is the steady, indifferent commuter: whatever the crowd does, they move with it exactly, in step, every time. the inductor is the cautious uncle who resists any sudden change of motion; by the time he commits to moving, the crowd has already peaked and started back, so he always lags. push the crowd faster and he is asked to reverse direction more violently, so he digs in harder -- an inductor opposes high frequencies hardest. the capacitor is the eager teenager who lunges ahead before the crowd has even committed, so the current through it leads. and a capacitor's resistance to the rush shrinks as the crowd surges faster, while a steady, unmoving crowd (dc) leaves him fully blocked, going nowhere at all."
        },
        {
          "t": "def",
          "term": "The phase convention, fixed for the rest of this chapter",
          "html": "The current is the shared, reference phasor in every series circuit (the same current flows through every element at every instant), <i>i</i> = <i>i<sub>m</sub></i> sin <i>omegat</i>, and <i>phi</i> is the angle by which the SOURCE VOLTAGE LEADS the current: positive <i>phi</i> means inductive (voltage leads), negative <i>phi</i> means capacitive (voltage lags, current leads), <i>phi</i> = 0 is the purely resistive resonance case. Equivalently, and used just as often below: the current LAGS the voltage in a net inductive circuit and LEADS it in a net capacitive one. Held throughout: in an inductor ALONE the current lags the voltage by 90 degrees; in a capacitor ALONE it leads by 90 degrees. One mnemonic carries the whole rule and no other is needed: <b>ELI the ICE man</b> -- in an inductor (L), EMF Leads current I (ELI); in a capacitor (C), current I Leads EMF (ICE)."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Every reactance relation (<i>V<sub>L</sub></i> = <i>IX<sub>L</sub></i>, <i>V<sub>C</sub></i> = <i>IX<sub>C</sub></i>) is a statement about AMPLITUDES or RMS values, never instantaneous ones -- instantaneously <i>v<sub>L</sub></i> and <i>i</i> are 90 degrees apart, and <i>v<sub>L</sub></i> = <i>iX<sub>L</sub></i> at a single instant is never true. Every element below is IDEAL: a pure resistor carries no inductance, a pure inductor carries no winding resistance, a pure capacitor leaks no charge; a real coil's own resistance quietly shifts phase angles in a lab. The source is SINUSOIDAL and single-frequency throughout, since phasor algebra collapses for a non-sinusoidal drive, and every result below is the STEADY-STATE response, ignoring the brief transient at switch-on. One fact is carried in from one chapter earlier rather than re-derived here: an inductor's self-induced back-emf opposes the current that creates it, with magnitude <i>L</i>(<i>di</i>/<i>dt</i>), <i>L</i> the inductance in henry -- that definition belongs to Self-Induction and is used below exactly once, to build <i>X<sub>L</sub></i>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · R, L AND C ALONE",
          "tag": "three elements, three phase relationships",
          "main": "Resistor: <i>v</i> and <i>i</i> in phase<br>Inductor: <i>i</i> lags <i>v</i> by 90 degrees, <i>X<sub>L</sub></i> = <i>omegaL</i> = 2<i>pifL</i><br>Capacitor: <i>i</i> leads <i>v</i> by 90 degrees, <i>X<sub>C</sub></i> = 1/<i>omegaC</i> = 1/2<i>pifC</i>",
          "legend": [
            "<i>X<sub>L</sub></i>, <i>X<sub>C</sub></i> = inductive and capacitive reactance (ohm), each an amplitude-to-amplitude ratio, <i>im</i> = <i>vm</i>/<i>X</i>",
            "<i>L</i> = inductance (henry), <i>C</i> = capacitance (farad), <i>omega</i> = angular frequency (rad/s)"
          ],
          "note": "XL GROWS with frequency (an inductor opposes AC hardest when it swings fastest); XC SHRINKS with frequency (a capacitor opposes AC hardest when it barely moves at all, i.e. near DC, where XC tends to infinity and blocks current completely)."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SERIES LCR CIRCUIT",
          "tag": "impedance and phase angle",
          "main": "<i>Z</i> = root(<i>R</i><sup>2</sup> + (<i>X<sub>L</sub></i> - <i>X<sub>C</sub></i>)<sup>2</sup>), <i>i<sub>m</sub></i> = <i>v<sub>m</sub></i>/<i>Z</i><br>tan <i>phi</i> = (<i>X<sub>L</sub></i> - <i>X<sub>C</sub></i>)/<i>R</i>",
          "legend": [
            "<i>Z</i> = impedance (ohm), the AC analogue of resistance for a mixed circuit",
            "<i>R</i> = resistance, <i>X<sub>L</sub></i>, <i>X<sub>C</sub></i> = reactances, all in ohm",
            "<i>phi</i> = phase by which the source voltage leads the current, using the convention declared above"
          ],
          "note": "Voltages across R, L and C add as PHASORS, never arithmetically: V = root(VR<sup>2</sup> + (VL - VC)<sup>2</sup>). VL and VC are 180 degrees apart (antiphase to each other), so they partly cancel before combining at right angles with VR."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PURE-REACTANCE EDGE CASE, R = 0",
          "tag": "L and C alone in series, no resistor at all",
          "main": "<i>Z</i> = |<i>X<sub>L</sub></i> - <i>X<sub>C</sub></i>|, <i>phi</i> = +90 degrees when <i>X<sub>L</sub></i> is larger, -90 degrees when <i>X<sub>C</sub></i> is larger",
          "legend": [
            "the impedance TRIANGLE has collapsed flat: with R = 0 there is no horizontal side left, only the vertical net-reactance side, so Z equals it exactly"
          ],
          "note": "The one exception is XL = XC exactly: then Z = 0, and an ideal source would drive infinite current -- the resonance condition met properly in Topic 04, and the reason a real circuit always needs SOME resistance."
        },
        {
          "t": "think",
          "html": "three phasors -- VR, VL, VC -- are three dancers holding a fixed pose relative to each other, all spinning together at the same omega, because they all answer to the one shared current. VR always stands shoulder to shoulder with the current. VL always stands a quarter turn ahead. VC always stands a quarter turn behind. freeze the spin at any instant and you get exactly figure 7.1: the picture does not change shape as time runs, it only spins as one rigid unit. that rigidity is the whole justification for adding voltages as vectors instead of as numbers -- vectors that keep a fixed angle between them add exactly the way arrows do, tip to tail."
        },
        {
          "t": "proc",
          "title": "Reading a problem: which of the four families is this?",
          "steps": [
            "<b>A single pure element (R, L or C alone) across a source.</b> Use that element's own V-I relation directly; no impedance triangle needed.",
            "<b>A full series LCR with R, L, C and omega all given.</b> Compute XL and XC first, then Z and phi from the impedance triangle.",
            "<b>Voltmeter or ammeter READINGS given, not R, L, C values.</b> Combine as phasors directly (VR, VL, VC or their currents), spotting a Pythagorean triple where possible -- never add the raw readings.",
            "<b>A sealed 'black box.'</b> A DC test isolates R (a capacitor blocks DC, an inductor is a dead short); an AC test then isolates |X|, but never its sign -- a second frequency or a phase measurement is the only way to tell L from C."
          ]
        },
        {
          "t": "defgrid",
          "title": "Units and dimensions, R through omega",
          "rows": [
            { "k": "Resistance / reactance / impedance <i>R</i>, <i>X</i>, <i>Z</i>", "v": "ohm (Ω); dimensions [M L<sup>2</sup> T<sup>-3</sup> A<sup>-2</sup>]" },
            { "k": "Inductance <i>L</i>", "v": "henry (H); [M L<sup>2</sup> T<sup>-2</sup> A<sup>-2</sup>]" },
            { "k": "Capacitance <i>C</i>", "v": "farad (F); [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>]" },
            { "k": "Angular frequency <i>omega</i>", "v": "rad/s; [T<sup>-1</sup>]" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · REACTANCE OF A PURE INDUCTOR",
          "steps": [
            {
              "eq": "<i>v<sub>m</sub></i> sin <i>omegat</i> = <i>L</i>(<i>di</i>/<i>dt</i>), so <i>di</i> = (<i>v<sub>m</sub></i>/<i>L</i>) sin <i>omegat</i> <i>dt</i>",
              "why": "Kirchhoff's loop rule around a source driving an inductor alone: the self-induced back-emf must balance the applied voltage at every instant."
            },
            {
              "eq": "integrate: <i>i</i> = -(<i>v<sub>m</sub></i>/<i>omegaL</i>) cos <i>omegat</i> = (<i>v<sub>m</sub></i>/<i>omegaL</i>) sin(<i>omegat</i> - <i>pi</i>/2)",
              "why": "The constant of integration is a DC term with no place in a purely AC steady state, so it is dropped. Rewriting -cos as a sine shifted by pi/2 puts the result in the same sin(omegat + phase) form the rest of the chapter uses."
            },
            {
              "eq": "comparing with <i>i</i> = <i>i<sub>m</sub></i> sin(<i>omegat</i> - <i>pi</i>/2): the current LAGS the voltage by 90 degrees, and <i>i<sub>m</sub></i> = <i>v<sub>m</sub></i>/(<i>omegaL</i>). Define <i>X<sub>L</sub></i> = <i>omegaL</i>",
              "why": "This recovers the Ohm-like form im = vm/XL. Why the lag: an inductor opposes the CHANGE in current, so the current cannot rise until the voltage has already done its work -- it trails a quarter cycle behind, always."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · REACTANCE OF A PURE CAPACITOR",
          "steps": [
            {
              "eq": "<i>q</i> = <i>Cv</i> = <i>Cv<sub>m</sub></i> sin <i>omegat</i>, and <i>i</i> = <i>dq</i>/<i>dt</i>",
              "why": "Current is the rate of change of the charge sitting on the capacitor's plates, and that charge simply tracks the applied voltage through q = Cv at every instant."
            },
            {
              "eq": "<i>i</i> = <i>omegaCv<sub>m</sub></i> cos <i>omegat</i> = (<i>v<sub>m</sub></i>/(1/<i>omegaC</i>)) sin(<i>omegat</i> + <i>pi</i>/2)",
              "why": "Differentiate, then rewrite the cosine as a sine shifted forward by pi/2."
            },
            {
              "eq": "the current LEADS the voltage by 90 degrees, with <i>i<sub>m</sub></i> = <i>v<sub>m</sub></i>/(1/<i>omegaC</i>). Define <i>X<sub>C</sub></i> = 1/<i>omegaC</i>",
              "why": "Why the lead: current is largest when the capacitor is empty and charging fastest, and that happens BEFORE the voltage peaks, so the current runs ahead of it."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · IMPEDANCE OF A SERIES LCR CIRCUIT, THE PHASOR METHOD",
          "steps": [
            {
              "eq": "connect R, L, C in series across <i>v</i> = <i>v<sub>m</sub></i> sin <i>omegat</i>; since the same current flows through all three at every instant, take <i>i</i> = <i>i<sub>m</sub></i> sin(<i>omegat</i> + <i>phi</i>) as the reference phasor",
              "why": "Series elements share one current, so the current -- not the source voltage -- is the natural anchor for the phasor diagram."
            },
            {
              "eq": "draw each voltage phasor against the current: VR = imR in phase with I; VL = imXL, 90 degrees ahead of I; VC = imXC, 90 degrees behind I",
              "why": "This is exactly the R, L, C phase relationship just derived, one phasor per element, all sharing the common current I as reference."
            },
            {
              "eq": "VL and VC are antiphase (opposite directions on the same line), so they combine into one net phasor of magnitude im|XL - XC|, perpendicular to VR",
              "why": "Two phasors 180 degrees apart subtract rather than add; what survives is a single vertical phasor perpendicular to the horizontal VR."
            },
            {
              "eq": "by Pythagoras, vm = root(VR<sup>2</sup> + (VL - VC)<sup>2</sup>) = im root(R<sup>2</sup> + (XL - XC)<sup>2</sup>), so Z = vm/im = root(R<sup>2</sup> + (XL - XC)<sup>2</sup>)",
              "why": "VR and the net (VL - VC) phasor are at right angles, so the source-voltage amplitude is the hypotenuse of a right triangle -- impedance is defined the same way resistance is for DC, as the voltage-to-current amplitude ratio."
            },
            {
              "eq": "tan phi = (VL - VC)/VR = (XL - XC)/R, read straight off the same triangle",
              "why": "The identical circuit obeys L(d<sup>2</sup>q/dt<sup>2</sup>) + R(dq/dt) + q/C = vm sin omegat, precisely the forced, damped harmonic oscillator equation already met in Oscillations, with R playing the damping, 1/C the spring constant, and L the mass. The phasor triangle and that differential equation are two languages for one physical system, and im = vm/Z is exactly that oscillator's steady-state response curve."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE · A SERIES LCR CIRCUIT",
          "chips": ["R, L and C in series across an AC source"],
          "captions": [
            "One loop, one shared current I threading R, L and C in turn before returning to the source. Because they are in series, I is the same at every instant everywhere in the loop -- the reference phasor the whole of this topic is built on. The source symbol carries a tilde, the standard mark for 'alternating' rather than a steady cell."
          ],
          "frames": [
            {
              "circuit": {
                "grid": [8, 4],
                "wires": [{ "from": [1, 1], "to": [7, 1] }, { "from": [7, 1], "to": [7, 3] }],
                "parts": [
                  { "at": [1, 1], "to": [1, 3], "kind": "cell", "label": "~", "side": "left" },
                  { "at": [1, 3], "to": [3, 3], "kind": "R", "label": "R", "side": "above" },
                  { "at": [3, 3], "to": [5, 3], "kind": "L", "label": "L", "side": "above" },
                  { "at": [5, 3], "to": [7, 3], "kind": "C", "label": "C", "side": "above" }
                ],
                "currents": [{ "at": [3, 1], "to": [4.6, 1], "label": "I" }]
              }
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · V AND I AGAINST TIME, R VERSUS L VERSUS C",
          "chips": ["resistor: in phase", "inductor: i lags v", "capacitor: i leads v"],
          "captions": [
            "R alone. Solid is v, dashed is i (drawn at a smaller relative height only to keep the two visible as separate curves, not to imply a scale). Both peak at the SAME instant -- in phase, ELI/ICE has nothing to say here because there is no reactance at all.",
            "L alone. The dashed current peaks a quarter cycle AFTER the solid voltage: the current lags, exactly ELI (EMF Leads I).",
            "C alone. The dashed current peaks a quarter cycle BEFORE the solid voltage: the current leads, exactly ICE (I leads EMF)."
          ],
          "frames": [
            {
              "x": [0, 6.2832], "y": [-1.3, 1.3],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "sin" }, { "c": "sin", "a": 0.8, "dash": true }],
              "labels": [{ "x": 1.05, "y": 1.15, "text": "v" }, { "x": 2.15, "y": 0.62, "text": "i" }]
            },
            {
              "x": [0, 6.2832], "y": [-1.3, 1.3],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "sin" }, { "c": "sin", "a": 0.8, "shift": 1.5708, "dash": true }],
              "labels": [{ "x": 1.05, "y": 1.15, "text": "v" }, { "x": 3.6, "y": -0.65, "text": "i" }]
            },
            {
              "x": [0, 6.2832], "y": [-1.3, 1.3],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "sin" }, { "c": "sin", "a": 0.8, "shift": -1.5708, "dash": true }],
              "labels": [{ "x": 2.05, "y": 1.15, "text": "v" }, { "x": 0.35, "y": 0.62, "text": "i" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.1 · THE LCR PHASOR DIAGRAM, AND THE IMPEDANCE TRIANGLE IT SCALES",
          "chips": ["voltage phasors", "the impedance triangle"],
          "captions": [
            "Current I along +x, the reference. VR is parallel to I (not separately drawn, to avoid two arrows on one line) and the net reactive phasor VL - VC stands perpendicular to it, drawn here for XL greater than XC. The resultant source voltage V is the hypotenuse, at angle phi above I.",
            "The same right triangle, stripped of the current: R horizontal, the net reactance XL - XC vertical, Z the hypotenuse, angle phi identical to the phasor diagram's own. V = IZ scales this triangle by the one shared current."
          ],
          "frames": [
            {
              "x": [-0.5, 4.2], "y": [-0.5, 2.6], "axes": "none",
              "arrows": [
                { "from": [0, 0], "to": [3, 0], "tone": "ink", "label": "I", "head": "end" },
                { "from": [3, 0], "to": [3, 2], "tone": "amber", "label": "VL-VC", "at": "end" },
                { "from": [0, 0], "to": [3, 2], "tone": "ink", "label": "V", "at": "above" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.8, "from": 0, "to": 34, "label": "φ" }]
            },
            {
              "x": [-0.5, 4.2], "y": [-0.5, 2.6], "axes": "none",
              "arrows": [
                { "from": [0, 0], "to": [3, 0], "tone": "ink", "label": "R", "head": "end" },
                { "from": [3, 0], "to": [3, 2], "tone": "amber", "label": "XL-XC", "at": "end" },
                { "from": [0, 0], "to": [3, 2], "tone": "ink", "label": "Z", "at": "above" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.8, "from": 0, "to": 34, "label": "φ" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Every worked problem below belongs to one of the four families named in the procedure above: a single pure element, a full LCR with every value given, meter readings that must be combined as phasors, or a sealed black box whose contents must be deduced. Spot which family a problem belongs to before reaching for a formula, and the four examples that follow will look far more alike than different."
        },
        {
          "t": "def",
          "term": "A sanity check worth running on every LCR answer",
          "html": "Z can never be SMALLER than either R or |XL - XC| alone -- it is the hypotenuse of a right triangle whose legs are exactly those two quantities, and a hypotenuse is never shorter than either leg. If a computed Z ever comes out less than the R or the reactance that was fed into it, a step has gone wrong, most often a sum where a difference belonged, or vice versa."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A 25 microfarad capacitor is connected across a 230 V (rms), 50 Hz AC supply. Find (a) the capacitive reactance and (b) the RMS current.",
          "steps": [
            "Given C = 25 x 10^-6 F, Vrms = 230 V, f = 50 Hz.",
            "(a) XC = 1/(2pifC) = 1/(2pi x 50 x 25 x 10^-6) = 1/(7.854 x 10^-3) = 127.3 ohm.",
            "(b) Only opposition is the capacitor, so Ohm's law for AC gives Irms = Vrms/XC = 230/127.3 = 1.81 A."
          ],
          "ans": "XC = 127.3 ohm, Irms = 1.81 A. The current here LEADS the voltage by 90 degrees, though reactance and RMS current alone never carry a sign -- only the phase does."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In a series LCR circuit, a voltmeter reads 80 V across the resistor, 120 V across the inductor and 60 V across the capacitor. What is the RMS voltage of the source?",
          "steps": [
            "The trap: 80 + 120 + 60 = 260 V is tempting and wrong -- these voltages are out of phase and cannot be added arithmetically.",
            "VL and VC are antiphase, so they subtract: VL - VC = 120 - 60 = 60 V, perpendicular to VR.",
            "V = root(VR<sup>2</sup> + (VL - VC)<sup>2</sup>) = root(80<sup>2</sup> + 60<sup>2</sup>) = root(6400 + 3600) = root10000."
          ],
          "ans": "100 V. An 80-60-100 right triangle, spotted and solved without a calculator."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A series LCR circuit has R = 30 ohm, L = 50 mH, C = 50 microfarad, driven by an AC source of RMS voltage 120 V at omega = 1000 rad/s. Find (a) the impedance, (b) the RMS current, (c) the phase angle, and (d) the RMS voltage across the inductor. Comment on (d).",
          "steps": [
            "Reactances: XL = omegaL = 1000 x 0.050 = 50 ohm; XC = 1/(omegaC) = 1/(1000 x 50 x 10^-6) = 20 ohm.",
            "(a) Z = root(R<sup>2</sup> + (XL - XC)<sup>2</sup>) = root(30<sup>2</sup> + 30<sup>2</sup>) = 30 root2 = 42.4 ohm.",
            "(b) Irms = Vrms/Z = 120/(30 root2) = 2 root2 = 2.83 A.",
            "(c) tan phi = (XL - XC)/R = 30/30 = 1, so phi = +45 degrees -- inductive, source voltage leads.",
            "(d) VL = Irms XL = 2 root2 x 50 = 100 root2 = 141.4 V."
          ],
          "ans": "Z = 42.4 ohm, Irms = 2.83 A, phi = +45 degrees, VL is about 141 V -- LARGER than the 120 V source. Not a mistake: VL and VC are partly out of phase and cancel in the resultant, so only the PHASOR sum must equal the source voltage, not any single element's own reading."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A sealed box has two terminals. A 12 V DC source drives a steady 2 A through it. An AC source of RMS voltage 12 V at omega = 100 rad/s drives only 1.2 A RMS. Deduce as much as possible about the contents of the box.",
          "steps": [
            "The DC test rules out a pure L or pure C: a capacitor would block DC entirely, an ideal inductor would offer zero opposition (a dead short). A finite steady current flows, so the box contains RESISTANCE: R = VDC/IDC = 12/2 = 6 ohm.",
            "The AC test adds a reactance: Z = Vrms/Irms = 12/1.2 = 10 ohm, so X = root(Z<sup>2</sup> - R<sup>2</sup>) = root(100 - 36) = 8 ohm.",
            "Magnitude alone cannot say whether X is inductive or capacitive -- both give the same current amplitude. Either L = X/omega = 8/100 = 0.08 H, or C = 1/(omegaX) = 1/(100 x 8) = 1.25 x 10^-3 F = 1.25 mF."
          ],
          "ans": "R = 6 ohm in series with EITHER a 0.08 H inductor OR a 1.25 mF capacitor. Breaking the tie needs a phase measurement (does current lead or lag?) or a second frequency (reactance rises with omega for L, falls for C): current magnitude fixes |Z|, only phase or frequency-dependence reveals which reactance it is."
        },
        {
          "t": "mcq",
          "q": "A pure inductor is connected to an AC source. If the frequency doubles while the voltage amplitude stays fixed, the RMS current through the inductor:",
          "opts": [
            { "label": "doubles", "nudge": "That is what happens for a CAPACITOR, not an inductor." },
            { "label": "halves", "nudge": null },
            { "label": "is unchanged", "nudge": "Treats XL as a fixed resistance, independent of frequency, which it never is." },
            { "label": "becomes four times as large", "nudge": "Applies a power-style squared relationship where none exists here." }
          ],
          "correct": 1,
          "solution": "XL = omegaL = 2pifL, so doubling f doubles XL; with constant voltage, I = V/XL halves."
        },
        {
          "t": "mcq",
          "q": "In a series LCR circuit, XL = 12 ohm, XC = 12 ohm, R = 5 ohm. The phase angle between source voltage and current is:",
          "opts": [
            { "label": "90 degrees", "nudge": "Assumes reactances present always mean a 90-degree shift, forgetting they can cancel." },
            { "label": "45 degrees", "nudge": "Defaults to 45 degrees whenever R and X 'look comparable', without actually checking their difference." },
            { "label": "0 degrees", "nudge": null },
            { "label": "53 degrees", "nudge": "Misremembers a 3-4-5 triangle that is not present in this data." }
          ],
          "correct": 2,
          "solution": "tan phi = (XL - XC)/R = 0/5 = 0, so phi = 0 -- the circuit is purely resistive, exactly the resonance condition XL = XC."
        },
        {
          "t": "mcq",
          "q": "An ideal capacitor is connected across a DC battery. Once steady state is reached, the current through the capacitor is:",
          "opts": [
            { "label": "maximum", "nudge": "Confuses the brief charging transient with the steady state." },
            { "label": "V / XC", "nudge": "Blindly applies the AC reactance formula when XC is already infinite -- right idea, wrong justification." },
            { "label": "zero", "nudge": null },
            { "label": "infinite", "nudge": "Swaps the capacitor's behaviour with an inductor's." }
          ],
          "correct": 2,
          "solution": "At DC, f = 0, so XC = 1/(2pifC) tends to infinity; once fully charged, no steady current flows. A capacitor blocks DC."
        },
        {
          "t": "mcq",
          "q": "In a series LCR circuit the source voltage LAGS the current. Which statement is necessarily true?",
          "opts": [
            { "label": "XL is greater than XC", "nudge": "Reverses the inequality; that condition gives voltage LEADING, not lagging." },
            { "label": "XC is greater than XL", "nudge": null },
            { "label": "R = 0", "nudge": "A phase shift needs no such thing; R only sets the SIZE of phi, never its sign." },
            { "label": "the circuit is at resonance", "nudge": "Resonance is phi = 0, the opposite of a lagging voltage." }
          ],
          "correct": 1,
          "solution": "Voltage lagging current means phi is negative, so tan phi = (XL - XC)/R is negative, forcing XC greater than XL -- the circuit is net capacitive."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 0.40 H inductor is connected to a 110 V, 50 Hz AC source. Calculate the inductive reactance and the RMS current.", "a": "XL = 2pi(50)(0.40) = 125.7 ohm; Irms = 110/125.7 = 0.875 A." },
            { "q": "[NEET] In a series LCR circuit, VR = 60 V, VL = 100 V, VC = 20 V. Find the RMS source voltage.", "a": "V = root(60<sup>2</sup> + (100-20)<sup>2</sup>) = root(3600+6400) = root10000 = 100 V." },
            { "q": "[JEE Main] A series LCR circuit has R = 8 ohm, XL = 30 ohm, XC = 24 ohm. If the RMS current is 5 A, find the impedance and the RMS source voltage.", "a": "Z = root(8<sup>2</sup> + (30-24)<sup>2</sup>) = root(64+36) = 10 ohm; V = IZ = 5 x 10 = 50 V." },
            { "q": "[JEE Main] A capacitor and a resistor are joined in series across a 200 V, omega = 400 rad/s source. The resistor is 40 ohm and the RMS current is 4 A. Find the capacitance.", "a": "Z = 200/4 = 50 ohm, so XC = root(50<sup>2</sup> - 40<sup>2</sup>) = 30 ohm, C = 1/(omega XC) = 1/(400 x 30) is about 83.3 microfarad." },
            { "q": "[JEE Advanced, replacing a self-contradictory printed question -- see the header's CORRECTIONS note] A series LCR circuit has L = 0.10 H and C = 20 microfarad. At omega1 = 800 rad/s the RMS current is 2 A with the current lagging the voltage; lowering the frequency to omega2, the current leads by the same angle and the RMS current is again 2 A (source RMS voltage 100 V throughout). Find omega2 and R.", "a": "omega0 = 1/root(LC) = 707 rad/s. Equal-current frequencies satisfy omega1 omega2 = omega0<sup>2</sup>, so omega2 = omega0^2/omega1 = 500000/800 = 625 rad/s. Z = V/I = 50 ohm; at omega1, XL = 80 ohm, XC = 62.5 ohm, so R = root(Z<sup>2</sup> - (XL-XC)<sup>2</sup>) = root(2500 - 306.25) is about 46.8 ohm." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Adding voltages arithmetically. VR + VL + VC is the single most common LCR error; combine as phasors, V = root(VR<sup>2</sup> + (VL - VC)<sup>2</sup>), never by plain addition.",
            "Treating reactance as a fixed resistance. XL and XC both change with frequency -- always ask which way: XL rises, XC falls.",
            "Sign-convention whiplash on phi. Some books write the current's phase relative to voltage, others the voltage's phase relative to current, with opposite signs for the identical physics. Pick the convention declared above, state it, and never flip mid-solution.",
            "Confusing instantaneous and amplitude relations. VL = IXL holds for amplitudes or RMS values only; the instantaneous vL = iXL is never true, since vL and i are 90 degrees apart at every single instant."
          ]
        },
        {
          "t": "protip",
          "html": "eli the ice man fixes every lead/lag question instantly: inductor, emf leads i; capacitor, i leads emf. for lcr numericals, always sketch the impedance right triangle, R horizontal, XL - XC vertical, Z the hypotenuse -- half the jee problems in this topic are just a 3-4-5, 5-12-13 or 8-15-17 triangle wearing ohms instead of centimetres."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "XL = omegaL, XC = 1/omegaC", "note": "XL rises with frequency, XC falls; both in ohm" },
            { "f": "Z = root(R<sup>2</sup> + (XL - XC)<sup>2</sup>), im = vm/Z", "note": "impedance; the AC analogue of resistance" },
            { "f": "tan phi = (XL - XC)/R", "note": "phi > 0 inductive, phi < 0 capacitive, phi = 0 resonance" },
            { "f": "V = root(VR<sup>2</sup> + (VL - VC)<sup>2</sup>)", "note": "voltages add as phasors, never arithmetically" }
          ],
          "aids": ["ELI the ICE man", "R horizontal, X vertical, Z the hypotenuse", "current is the common current, always"]
        }
      ]
    },
    {
      "n": "03",
      "title": "LC Oscillations",
      "chip": "03 LC OSCILLATIONS",
      "kalam": "energy remembers nothing, only trades hands",
      "blocks": [
        {
          "t": "p",
          "html": "Charge a capacitor, then connect it across an inductor alone -- no battery, no resistor. The capacitor discharges through the inductor, but the inductor resists the sudden rise of current, so the current builds gradually. By the time the capacitor is fully empty, the current is at its maximum and the inductor is storing all the energy in its magnetic field. The current has nowhere to stop, so it keeps flowing and recharges the capacitor the other way round, and the whole story runs in reverse. Energy sloshes endlessly between the capacitor's electric field and the inductor's magnetic field. These are <b>LC oscillations</b>."
        },
        {
          "t": "think",
          "html": "it is the electrical twin of a mass on a spring, pulled aside and released. all the energy starts as potential energy in the stretched spring, exactly the electric field charged into the capacitor. as the mass flies through the centre, energy becomes all kinetic, exactly the magnetic field in the inductor, where current, the speed of charge, is at its maximum. the mass overshoots, the spring compresses the other way, exactly the capacitor charging in reverse, and it repeats forever if nothing eats the energy. in an lc circuit the friction is resistance, R; an ideal circuit with R=0 oscillates undamped forever, a real one slowly dies away."
        },
        {
          "t": "defgrid",
          "title": "The SHM to LC correspondence, quoted from Oscillations",
          "tag": "translate any known SHM result with this table alone",
          "rows": [
            { "k": "displacement <i>x</i>, velocity <i>v</i> = <i>x-dot</i>", "v": "charge <i>q</i>, current <i>i</i> = <i>q-dot</i>" },
            { "k": "mass <i>m</i> (inertia)", "v": "inductance <i>L</i> (opposes a CHANGE in current)" },
            { "k": "spring constant <i>k</i>", "v": "reciprocal capacitance 1/<i>C</i>" },
            { "k": "(1/2)<i>kx</i><sup>2</sup> (spring PE), (1/2)<i>mv</i><sup>2</sup> (KE)", "v": "<i>q</i><sup>2</sup>/2<i>C</i> (capacitor energy), (1/2)<i>Li</i><sup>2</sup> (inductor energy)" },
            { "k": "<i>omega</i> = root(<i>k</i>/<i>m</i>)", "v": "<i>omega0</i> = 1/root(<i>LC</i>)" }
          ]
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Ideal LC means <b>R = 0</b>: only then is the oscillation undamped, constant amplitude forever. Any real resistance steadily drains energy as heat, so real oscillations decay, and if R is large enough the circuit does not oscillate at all, it merely relaxes back to zero. An LC circuit is <b>not an energy source</b>: total energy is fixed by the initial charge and only shuttles between the two elements, nothing is created. The clean cosine solution below assumes the capacitor starts FULLY CHARGED with zero initial current; a different starting condition only shifts the phase."
        },
        {
          "t": "p",
          "html": "Why a cosine and not a sine? It is purely a bookkeeping choice about where the clock starts, and this chapter starts it at the one instant every LC problem naturally hands over: full charge, zero current. Start the clock anywhere else -- say, midway through the swing -- and the SAME physics is described by a sine, or by a cosine carrying a phase constant, exactly as Topic 01 fixed x = A sin(omegat + phi) for SHM in general. Nothing below depends on the particular starting instant; only the ALGEBRA looks cleanest from this one."
        },
        {
          "t": "think",
          "html": "drop a ball into a smooth, frictionless bowl from one rim. it swings through the bottom, climbs the far rim to the same height it started from (energy conservation, nothing lost), swings back, and repeats forever. an ideal LC circuit is that ball: q0 is the starting rim, q=0 at the bottom is the centre where all the 'height' has become 'speed', and the far rim it climbs to is q=-q0, the mirror image. real bowls have a little friction, real circuits have a little R, and both stories end the same way, a slow settling to rest at the bottom -- which is exactly the picture Topic 03's own closing paragraph makes quantitative with omegad."
        },
        {
          "t": "proc",
          "title": "Solving an LC problem in three lines",
          "steps": [
            "<b>Get omega0 first.</b> omega0 = 1/root(LC) is needed for almost every other quantity, so compute it before anything else, from whatever L and C are given.",
            "<b>Choose the fastest route to imax.</b> Given an initial capacitor voltage V0, use imax = V0 root(C/L) directly; given an initial charge q0, use imax = q0omega0 -- either way, energy conservation, (1/2)CV0<sup>2</sup> = (1/2)Limax<sup>2</sup>, is the fact underneath both shortcuts.",
            "<b>For a fraction-of-period or fraction-of-imax question, translate straight into SHM.</b> q behaves exactly like x = A cos omegat; a question about 'when is the energy equally shared' or 'what is q when i is half its maximum' is a question already solved in Oscillations, wearing new symbols."
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NATURAL FREQUENCY, CHARGE AND CURRENT",
          "main": "<i>omega0</i> = 1/root(<i>LC</i>), <i>f0</i> = 1/(2<i>pi</i> root(<i>LC</i>)), <i>T</i> = 2<i>pi</i> root(<i>LC</i>)<br><i>q</i> = <i>q0</i> cos <i>omega0t</i>, <i>i</i> = <i>dq</i>/<i>dt</i> = -<i>q0omega0</i> sin <i>omega0t</i>, <i>imax</i> = <i>q0omega0</i> = <i>q0</i>/root(<i>LC</i>)",
          "legend": [
            "<i>q0</i> = initial (maximum) charge, capacitor fully charged and current zero at t = 0",
            "<i>omega0</i> = natural angular frequency (rad/s); same expression as the resonant frequency Topic 04 derives",
            "<i>imax</i> = peak current (A), reached when the capacitor is fully discharged"
          ],
          "note": "The minus sign in i simply says the capacitor is DISCHARGING as current grows; charge and current are a quarter cycle out of step, exactly displacement and velocity in SHM."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENERGY STORED, AND ITS CONSERVATION",
          "main": "<i>UC</i> = <i>q</i><sup>2</sup>/2<i>C</i>, <i>UL</i> = (1/2)<i>Li</i><sup>2</sup><br><i>Utotal</i> = <i>q</i><sup>2</sup>/2<i>C</i> + (1/2)<i>Li</i><sup>2</sup> = <i>q0</i><sup>2</sup>/2<i>C</i> = (1/2)<i>Limax</i><sup>2</sup> = constant",
          "legend": [
            "<i>UC</i>, <i>UL</i> = capacitor and inductor energy (J), each varying with time",
            "<i>Utotal</i> = total energy (J), fixed for all time in an ideal (R = 0) circuit"
          ],
          "note": "A useful shortcut for an initial capacitor voltage V0 (so q0 = CV0): imax = V0 root(C/L), read straight off (1/2)CV0<sup>2</sup> = (1/2)Limax<sup>2</sup>."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE LC OSCILLATION EQUATION AND ITS SOLUTION",
          "steps": [
            {
              "eq": "Kirchhoff's voltage law around the loop: <i>L</i>(<i>di</i>/<i>dt</i>) + <i>q</i>/<i>C</i> = 0",
              "why": "The voltage across the inductor plus the voltage across the capacitor must sum to zero around any closed loop with no source."
            },
            {
              "eq": "<i>i</i> = <i>dq</i>/<i>dt</i>, so <i>di</i>/<i>dt</i> = <i>d</i><sup>2</sup><i>q</i>/<i>dt</i><sup>2</sup>; substituting, <i>d</i><sup>2</sup><i>q</i>/<i>dt</i><sup>2</sup> = -(1/<i>LC</i>) <i>q</i>",
              "why": "Current is the rate at which the capacitor's own charge changes, so the loop equation becomes a second-order equation in q alone."
            },
            {
              "eq": "this is the defining equation of SHM, <i>q-double-dot</i> = -<i>omega0</i><sup>2</sup><i>q</i>, with <i>omega0</i><sup>2</sup> = 1/<i>LC</i> -- the identical signature met in Oscillations, now for charge instead of displacement",
              "why": "The equation is quoted, not re-derived: once a system's own dynamics reduce to x-double-dot = -omega<sup>2</sup> x, everything already known about SHM (period, phase, energy) applies without re-proof."
            },
            {
              "eq": "with the capacitor fully charged at t = 0: <i>q</i> = <i>q0</i> cos <i>omega0t</i>, <i>i</i> = -<i>q0omega0</i> sin <i>omega0t</i>, <i>imax</i> = <i>q0omega0</i>",
              "why": "The cosine solution matches the stated initial condition (charge maximum, current zero at t = 0) exactly the way x = A cos omegat does for a mass released from rest at maximum displacement."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ENERGY EXCHANGE, AND WHY THE TOTAL NEVER CHANGES",
          "steps": [
            {
              "eq": "<i>U</i> = <i>q</i><sup>2</sup>/2<i>C</i> + (1/2)<i>Li</i><sup>2</sup> = (<i>q0</i><sup>2</sup>cos<sup>2</sup><i>omega0t</i>)/2<i>C</i> + (1/2)<i>L</i>(<i>q0omega0</i>)<sup>2</sup>sin<sup>2</sup><i>omega0t</i>",
              "why": "Substitute the solution for q and i directly into the two energy expressions and add them."
            },
            {
              "eq": "<i>omega0</i><sup>2</sup> = 1/<i>LC</i> makes <i>L</i>(<i>q0omega0</i>)<sup>2</sup> = <i>Lq0</i><sup>2</sup>/<i>LC</i> = <i>q0</i><sup>2</sup>/<i>C</i>, so <i>U</i> = (<i>q0</i><sup>2</sup>/2<i>C</i>)(cos<sup>2</sup><i>omega0t</i> + sin<sup>2</sup><i>omega0t</i>) = <i>q0</i><sup>2</sup>/2<i>C</i>",
              "why": "Both energy terms turn out to carry the SAME coefficient once omega0<sup>2</sup> = 1/LC is substituted, so the sin<sup>2</sup> + cos<sup>2</sup> = 1 identity collapses the sum to a constant instantly."
            },
            {
              "eq": "the total is independent of time: entirely electric when q = q0 (i = 0), entirely magnetic when i = imax (q = 0)",
              "why": "Nothing is created or destroyed, only moved. Each energy term carries cos<sup>2</sup> or sin<sup>2</sup>, which completes a full cycle TWICE per period of q itself, so the energy oscillates at 2f0, not f0."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · CHARGE AND CURRENT, A QUARTER CYCLE APART",
          "chips": ["q and i on one clock"],
          "captions": [
            "One full period. Solid is q/q0, dashed is i/imax. The capacitor starts fully charged with current zero; a quarter cycle later charge has fallen to zero and current is at its most negative -- discharging fastest. This is the exact electrical twin of displacement and velocity in SHM, a quarter cycle apart for the identical reason: one is the rate of change of the other."
          ],
          "frames": [
            {
              "x": [0, 6.2832], "y": [-1.3, 1.3],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "cos" }, { "c": "sin", "a": -1, "dash": true }],
              "labels": [{ "x": 0.35, "y": 1.15, "text": "q" }, { "x": 1.9, "y": -0.85, "text": "i" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE TWO ENERGIES, OSCILLATING AT TWICE THE FREQUENCY",
          "chips": ["UC, UL and the constant total"],
          "captions": [
            "UC (solid) and UL (dashed), each drawn as a fraction of the fixed total. Both go as cos-squared or sin-squared, which repeat TWICE within one period of q, so the two energy curves complete two full humps while q itself completes only one. Their sum (faint, flat) never moves -- everything the capacitor gives up, the inductor gains, instant by instant."
          ],
          "frames": [
            {
              "x": [0, 6.2832], "y": [-0.15, 1.25],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [
                { "c": "cos", "a": 0.5, "b": 2, "d": 0.5 },
                { "c": "cos", "a": -0.5, "b": 2, "d": 0.5, "dash": true },
                { "c": "line", "m": 0, "k": 1, "soft": true }
              ],
              "labels": [{ "x": 0.35, "y": 1.15, "text": "UC" }, { "x": 1.9, "y": 1.15, "text": "UL" }, { "x": 4.9, "y": 1.13, "text": "total" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "One line beyond the ideal case, worth carrying forward: a REAL LC loop always has some resistance, and the ring-down is the exact structural twin of the damped SHM already met in Oscillations. There, the decaying amplitude carried omega' = root(omega0<sup>2</sup> - (b/2m)<sup>2</sup>); here, with R playing the role of b and 2L playing 2m, the damped angular frequency is omegad = root(omega0<sup>2</sup> - (R/2L)<sup>2</sup>) -- smaller than the ideal omega0, and the amplitude itself shrinks as e^(-Rt/2L). This is what the intuition paragraph above means by \"a real one slowly dies away,\" made quantitative."
        },
        {
          "t": "def",
          "term": "Why LC oscillations matter beyond their own subtopic",
          "html": "This subtopic can feel like a detour: no source, no resistor, nothing driving it. It earns its place because <i>omega0</i> = 1/root(<i>LC</i>) is not a curiosity, it is the SAME frequency that reappears as the resonant frequency of the driven LCR circuit in Topic 04, and it is what makes the LCR differential equation quoted in Topic 02 behave as a genuine oscillator rather than merely a decaying circuit. Everything about maximum current, energy sharing and the SHM correspondence carries forward unchanged the moment a source and a resistor are added back."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An ideal LC circuit has L = 20 mH and C = 50 microfarad. Find the natural angular frequency, the frequency, and the time period.",
          "steps": [
            "omega0 = 1/root(LC) = 1/root((20 x 10^-3)(50 x 10^-6)) = 1/root(1.0 x 10^-6) = 1000 rad/s.",
            "f0 = omega0/2pi = 1000/6.283 = 159 Hz.",
            "T = 1/f0 = 6.28 x 10^-3 s."
          ],
          "ans": "omega0 = 1000 rad/s, f0 = 159 Hz, T = 6.28 ms."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In an ideal LC circuit the capacitor starts fully charged. After what fraction of the period is the energy equally shared between capacitor and inductor?",
          "steps": [
            "The trap: guessing T/4 (that is when the transfer is COMPLETE) or T/2.",
            "Equal sharing means UC = (1/2) Utotal, i.e. q^2/2C = (1/2)(q0^2/2C), so q = q0/root2.",
            "With q = q0 cos omega0t, this needs cos omega0t = 1/root2, i.e. omega0t = pi/4, giving t = T/8."
          ],
          "ans": "t = T/8. Full transfer happens at T/4; equal sharing happens halfway there, at T/8 -- the same A/root2 instant met in SHM."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "An 8 microfarad capacitor is charged to 100 V and then connected across a 2 mH ideal inductor. Find the maximum current.",
          "steps": [
            "Energy conservation, cleanest route: (1/2)CV0<sup>2</sup> = (1/2)Limax<sup>2</sup>, so imax = V0 root(C/L) = 100 root((8 x 10^-6)/(2 x 10^-3)) = 100 root(4 x 10^-3).",
            "imax = 100 x 0.0632 = 6.32 A.",
            "Cross-check via omega0: q0 = CV0 = 8 x 10^-4 C, omega0 = 1/root(LC) is about 7906 rad/s, imax = q0omega0 = 6.32 A. Matches."
          ],
          "ans": "imax = 6.32 A."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "In an ideal LC circuit (initial charge q0, natural frequency omega0), find the current at the instant the capacitor's charge has fallen to q0/2, as a fraction of imax.",
          "steps": [
            "Total energy is q0^2/2C. At q = q0/2, UC = (q0/2)^2/2C = q0^2/8C = (1/4) Utotal, so the inductor holds the remaining three-quarters.",
            "(1/2)Li<sup>2</sup> = (3/4)(q0^2/2C) = 3q0^2/8C. Using 1/LC = omega0<sup>2</sup>: i<sup>2</sup> = 3q0<sup>2</sup>omega0^2/4, so i = (root3/2) q0omega0.",
            "Since imax = q0omega0, i = (root3/2) imax."
          ],
          "ans": "i = (root3/2) imax, about 0.87 imax. The exact mirror of an SHM particle at x = A/2, moving at v = (root3/2) vmax -- the energy analogy made literal."
        },
        {
          "t": "mcq",
          "q": "The frequency of oscillation of an ideal LC circuit is:",
          "opts": [
            { "label": "1/(2pi root(LC))", "nudge": null },
            { "label": "1/root(LC)", "nudge": "That is the ANGULAR frequency omega0, not f0." },
            { "label": "2pi root(LC)", "nudge": "That is the time period T, not a frequency at all." },
            { "label": "1/(2pi LC)", "nudge": "Drops the square root over LC." }
          ],
          "correct": 0,
          "solution": "f0 = omega0/2pi = 1/(2pi root(LC))."
        },
        {
          "t": "mcq",
          "q": "In an ideal LC circuit, the energy oscillates between capacitor and inductor with a frequency:",
          "opts": [
            { "label": "f0", "nudge": "Assumes energy and charge share the same frequency; they do not." },
            { "label": "2f0", "nudge": null },
            { "label": "f0/2", "nudge": "Inverts the correct factor." },
            { "label": "4f0", "nudge": "Overshoots the correct factor." }
          ],
          "correct": 1,
          "solution": "Each energy term carries cos-squared or sin-squared, which repeats twice within one charge cycle, so the energy oscillates at 2f0."
        },
        {
          "t": "mcq",
          "q": "A capacitor of charge q0 is connected across an inductor L (capacitance C). The maximum current is:",
          "opts": [
            { "label": "q0 root(LC)", "nudge": "Multiplies by root(LC) instead of dividing by it." },
            { "label": "q0 / root(LC)", "nudge": null },
            { "label": "q0 LC", "nudge": "Wrong power of LC entirely." },
            { "label": "q0 / LC", "nudge": "Wrong power of LC entirely." }
          ],
          "correct": 1,
          "solution": "imax = q0omega0 = q0/root(LC)."
        },
        {
          "t": "mcq",
          "q": "In the LC-SHM analogy, the inductance L plays the role of:",
          "opts": [
            { "label": "the spring constant", "nudge": "The spring constant corresponds to 1/C, not L." },
            { "label": "the displacement", "nudge": "Displacement corresponds to q, a variable, not a circuit element." },
            { "label": "the mass", "nudge": null },
            { "label": "the velocity", "nudge": "Velocity corresponds to i, a variable, not a circuit element." }
          ],
          "correct": 2,
          "solution": "L opposes changes in current exactly as mass opposes changes in velocity: L stands in for m, and 1/C stands in for k."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] An LC circuit has L = 0.5 H and C = 2 microfarad. Find its frequency of oscillation.", "a": "f0 = 1/(2pi root(LC)) = 1/(2pi root(0.5 x 2 x 10^-6)) = 159 Hz." },
            { "q": "[NEET] In an ideal LC circuit, at what instant (as a fraction of the period, from a fully charged capacitor) is the energy stored ENTIRELY in the inductor?", "a": "t = T/4 (capacitor fully discharged, current at its maximum)." },
            { "q": "[JEE Main] A 5 microfarad capacitor charged to 20 V is connected to a 20 mH inductor. Find (i) the maximum current and (ii) the total energy.", "a": "imax = V0 root(C/L) = 20 root((5e-6)/(20e-3)) = 0.316 A; total energy = (1/2)CV0<sup>2</sup> = (1/2)(5e-6)(400) = 1.0 mJ." },
            { "q": "[JEE Main] An LC circuit oscillates at 1000 Hz. If L = 10 mH, find C.", "a": "C = 1/(4pi<sup>2</sup> f0<sup>2</sup> L) = 1/(4pi<sup>2</sup> x 10<sup>6</sup> x 10^-2) is about 2.5 microfarad." },
            { "q": "[JEE Advanced] In an ideal LC circuit with peak current imax, find the charge on the capacitor (as a fraction of q0) at the instant the current equals imax/2.", "a": "When i = imax/2, UL = (1/4)Utotal, so UC = (3/4)Utotal, giving q = (root3/2) q0, about 0.87 q0." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing omega0 and f0. omega0 = 1/root(LC) is the ANGULAR frequency; the ordinary frequency is f0 = omega0/2pi. Check whether a question wants rad/s or Hz.",
            "Getting imax wrong. It is imax = q0omega0 = q0/root(LC), not q0/C, which would be the initial voltage. The energy route, imax = V0 root(C/L), is often the safest.",
            "Forgetting the energy oscillates at 2f0. Charge and current oscillate at f0, but the energies, going as their squares, cycle twice as fast.",
            "Treating an LC circuit as a power source. It stores a fixed total energy and only shuttles it back and forth; with any real resistance it slowly dies out. It generates nothing."
          ]
        },
        {
          "t": "protip",
          "html": "lean on the shm analogy for every lc problem: charge fully present, current zero is the turning point (x=A); charge zero, current maximum is the centre (x=0). any shm result already known, v=omega root(A<sup>2</sup>-x<sup>2</sup>), the energy fraction at A/2, the time to reach A/root2, translates instantly with x to q, v to i, omega to omega0, A to q0. quick sanity check: imax=q0omega0 must come out in amperes -- if it does not, a power of L or C has gone missing somewhere upstream."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "omega0 = 1/root(LC), f0 = omega0/2pi", "note": "natural frequency; the SAME omega0 as resonance" },
            { "f": "q = q0 cos omega0t, i = -q0omega0 sin omega0t", "note": "quarter cycle apart, exactly x and v in SHM" },
            { "f": "Utotal = q0^2/2C = (1/2)Limax<sup>2</sup>", "note": "constant; energy oscillates at 2f0, not f0" },
            { "f": "L to mass, 1/C to spring constant", "note": "the whole chapter is this one substitution" }
          ],
          "aids": ["L is mass, one-over-C is the spring", "energy sloshes at twice the frequency", "an ideal LC generates nothing, it only trades"]
        }
      ]
    },
    {
      "n": "04",
      "title": "Resonance and Q-Factor",
      "chip": "04 RESONANCE",
      "kalam": "drive it at its own rhythm and it surges",
      "blocks": [
        {
          "t": "p",
          "html": "The inductor and capacitor are opposites: XL = omegaL GROWS with frequency, XC = 1/omegaC SHRINKS with it. They also pull the current in opposite directions, one making voltage lead, the other making it lag. Somewhere in between, these two opposing tendencies must exactly cancel. That frequency is the <b>resonant frequency</b>, and the dramatic things that happen there are this topic's whole subject."
        },
        {
          "t": "think",
          "html": "picture pushing a friend on a rope swing tied to a tree branch. push at random moments and you fight the swing as often as you help it, so it barely moves. push at exactly the swing's own natural rhythm and tiny pushes build into a huge arc. a series lcr circuit is the electrical version of that swing. the inductor and capacitor between them have a natural rhythm, omega0=1/root(LC). drive the circuit at any other frequency and XL, XC disagree, impedance is large, and only a small current flows. drive it at exactly omega0 and the two reactances annihilate each other, the circuit forgets it ever had an inductor or a capacitor, behaves as if only R were present, and the current shoots up to its maximum, im=vm/R."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Resonance needs BOTH L and C -- a pure RL or RC circuit has nothing for the single reactance to cancel against, so it never resonates. The resonant frequency is INDEPENDENT of R: resistance controls sharpness and peak height, never where the peak sits. The ideal limit R tending to zero is a fiction -- it predicts an infinite resonant current, and real circuits always carry some resistance (windings, leads), so the current is large but finite. The bandwidth and half-power formulas below assume a reasonably SHARP resonance (Q comfortably large); for very low Q the half-power points are no longer cleanly symmetric about omega0."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE RESONANCE CONDITION",
          "main": "<i>XL</i> = <i>XC</i> ⇒ <i>omega0L</i> = 1/<i>omega0C</i> ⇒ <i>omega0</i> = 1/root(<i>LC</i>), <i>f0</i> = 1/(2<i>pi</i> root(<i>LC</i>))",
          "legend": [
            "<i>omega0</i> = resonant angular frequency (rad/s), <i>f0</i> = resonant frequency (Hz) -- depends ONLY on L and C, never on R"
          ],
          "note": "At resonance: Z = R (minimum), im = vm/R (maximum), phi = 0 (voltage and current in phase), power factor cos phi = 1, the circuit is purely resistive."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · Q-FACTOR, BANDWIDTH, AND VOLTAGE MAGNIFICATION",
          "tag": "three equal ways to write one number",
          "main": "<i>Q</i> = <i>omega0L</i>/<i>R</i> = 1/(<i>omega0CR</i>) = (1/<i>R</i>) root(<i>L</i>/<i>C</i>) = <i>omega0</i>/<i>Δomega</i><br><i>Δomega</i> = <i>R</i>/<i>L</i>; half-power: |<i>XL</i> - <i>XC</i>| = <i>R</i>, <i>omega1omega2</i> = <i>omega0</i><sup>2</sup><br><i>VL</i> = <i>VC</i> = <i>Q</i> <i>Vsource</i> at resonance",
          "legend": [
            "<i>Q</i> = quality factor, dimensionless -- how sharp and how selective the resonance is",
            "<i>Δomega</i> = <i>omega2</i> - <i>omega1</i>, the bandwidth between the two half-power frequencies (rad/s)",
            "<i>omega1</i>, <i>omega2</i> = lower/upper half-power frequencies, where average power has fallen to half its peak value"
          ],
          "note": "omega0 is the GEOMETRIC mean of the half-power frequencies, omega0 = root(omega1 omega2) -- not their arithmetic mean. Voltage magnification is real and dangerous: a 10 V source can produce 100 V across the coil if Q = 10, so high-Q components must be rated well above the supply voltage."
        },
        {
          "t": "think",
          "html": "a high-Q circuit is a fussy, precise tuner: hand it one exact rhythm and it surges; offer anything even slightly off and it barely stirs, the same way a wine glass rings loudly at its own note and stays silent at every other. a low-Q circuit is a sloppy tuner, ready to respond to almost anything within a wide range, the way a cracked bell gives a dull thud at nearly any tap rather than one clean pitch. the crack, physically, is resistance: it is what turns a ringing note into a thud, by eating the energy that would otherwise keep the ring going."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · Q AS AN ENERGY RATIO",
          "tag": "a fourth equivalent definition, useful when a problem gives energies rather than R, L, C",
          "main": "<i>Q</i> = 2<i>pi</i> x (energy stored) / (energy dissipated per cycle)",
          "legend": [
            "energy stored is the peak energy held by L and C together, (1/2)<i>Limax</i><sup>2</sup>",
            "energy dissipated per cycle is the heat R removes in one full period T"
          ],
          "note": "A high Q means the circuit rings for many cycles before its stored energy is drained -- literally the same 'how many swings before it dies out' picture used for a damped oscillator, since a driven LCR circuit at resonance and a lightly damped free oscillator share the identical Q."
        },
        {
          "t": "p",
          "html": "One more way to feel Q, worth carrying alongside the tuner picture: it is roughly how many radians of oscillation happen before a free-running version of the SAME circuit (imagine switching the source off right at resonance) would ring down to a small fraction of its starting amplitude. A Q of 10 rings for a few full cycles before dying out; a Q of 1000, the kind built into a good radio's tuning stage, rings for hundreds of cycles -- which is exactly why it can tell two very close broadcast frequencies apart."
        },
        {
          "t": "defgrid",
          "title": "Units and dimensions",
          "rows": [
            { "k": "Resonant frequency <i>f0</i>", "v": "hertz (Hz); [T<sup>-1</sup>]" },
            { "k": "Resonant angular frequency <i>omega0</i>, bandwidth <i>Δomega</i>", "v": "rad/s; [T<sup>-1</sup>]" },
            { "k": "Quality factor <i>Q</i>", "v": "dimensionless; [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE RESONANT FREQUENCY",
          "steps": [
            {
              "eq": "<i>im</i> = <i>vm</i>/<i>Z</i> = <i>vm</i>/root(<i>R</i><sup>2</sup> + (<i>XL</i>-<i>XC</i>)<sup>2</sup>)",
              "why": "For a fixed source amplitude vm, this current is LARGEST when the denominator is smallest."
            },
            {
              "eq": "<i>R</i> is fixed, so the denominator is smallest when the reactive part vanishes entirely: <i>XL</i> - <i>XC</i> = 0 ⇒ <i>omega0L</i> = 1/<i>omega0C</i>",
              "why": "Zero is the smallest a squared quantity can ever be, so the current is maximised exactly when the two reactances cancel."
            },
            {
              "eq": "<i>omega0</i><sup>2</sup> = 1/<i>LC</i> ⇒ <i>omega0</i> = 1/root(<i>LC</i>), <i>f0</i> = 1/(2<i>pi</i> root(<i>LC</i>))",
              "why": "R never appears in this result -- the resonant frequency depends only on L and C. Physically, omega0 is the natural frequency at which energy sloshes between the inductor's magnetic field and the capacitor's electric field; the resistor only drains that energy, it does not set its rhythm."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · Q-FACTOR AS VOLTAGE MAGNIFICATION",
          "steps": [
            {
              "eq": "define <i>Q</i> = <i>omega0</i>/<i>Δomega</i>; using <i>Δomega</i> = <i>R</i>/<i>L</i> (derived next), <i>Q</i> = <i>omega0L</i>/<i>R</i>",
              "why": "Q is defined as the ratio of the resonant frequency to how wide the resonance peak is -- a high Q means a narrow, selective peak."
            },
            {
              "eq": "at resonance <i>omega0L</i> = 1/(<i>omega0C</i>), so <i>Q</i> also equals 1/(<i>omega0CR</i>), and substituting <i>omega0</i> = 1/root(<i>LC</i>) gives the third form, <i>Q</i> = (1/<i>R</i>) root(<i>L</i>/<i>C</i>)",
              "why": "Three algebraically equal expressions for the same dimensionless number, useful depending on which quantities a problem actually supplies."
            },
            {
              "eq": "at resonance <i>im</i> = <i>vm</i>/<i>R</i>, so <i>VL</i> = <i>imXL</i> = (<i>vm</i>/<i>R</i>)(<i>omega0L</i>) = <i>vm</i>(<i>omega0L</i>/<i>R</i>) = <i>QVm</i>",
              "why": "Q is literally the factor by which the source voltage is amplified across the inductor (and equally across the capacitor, since VL = VC at resonance) -- why high-Q components must be rated for far higher voltages than the supply."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BANDWIDTH AND THE HALF-POWER FREQUENCIES",
          "steps": [
            {
              "eq": "half power means average power has fallen to half its peak, and since power goes as <i>Irms</i><sup>2</sup>, that means current has fallen to <i>imax</i>/root2, so impedance has risen to root2 <i>R</i>",
              "why": "Half power corresponds to a fixed fraction of maximum CURRENT, root(1/2), because power depends on the square of current."
            },
            {
              "eq": "<i>Z</i><sup>2</sup> = <i>R</i><sup>2</sup> + (<i>XL</i>-<i>XC</i>)<sup>2</sup> = 2<i>R</i><sup>2</sup> ⇒ |<i>XL</i>-<i>XC</i>| = <i>R</i> at each half-power frequency",
              "why": "Solved directly from the impedance-doubled-in-square condition."
            },
            {
              "eq": "solving the resulting quadratics for the upper and lower roots and subtracting gives <i>Δomega</i> = <i>omega2</i> - <i>omega1</i> = <i>R</i>/<i>L</i>; multiplying the two roots gives <i>omega1omega2</i> = 1/<i>LC</i> = <i>omega0</i><sup>2</sup>",
              "why": "omega0 is therefore the GEOMETRIC mean of the two half-power frequencies -- exactly the symmetric-pair-about-resonance fact behind Topic 02's own corrected practice question."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.2 · THE RESONANCE CURVE",
          "chips": ["sharpness depends on R", "the half-power construction"],
          "captions": [
            "Current (as a fraction of its resonant maximum) against frequency (as a fraction of omega0), for two values of R. The solid, tall curve is high-Q, low R -- a fussy, selective tuner. The dashed, low, broad curve is low-Q, high R -- a sloppy one. Both peak at exactly omega/omega0 = 1, since R never shifts where the peak sits, only how tall and narrow it is.",
            "Zoomed on the sharp curve. The half-power level, 1/root2 of the peak, is marked, with the two frequencies omega1 and omega2 where the curve crosses it. Their spacing is the bandwidth Δomega, and omega0 sits at their geometric mean, visibly between them."
          ],
          "frames": [
            {
              "x": [0.4, 1.8], "y": [0, 1.08],
              "axisX": "ω / ω0", "axisY": "I / Imax",
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0.4,0.0594],[0.45,0.0704],[0.5,0.083],[0.55,0.0981],[0.6,0.1164],[0.65,0.1393],[0.7,0.1691],[0.75,0.2095],[0.8,0.2676],[0.85,0.3576],[0.9,0.5095],[0.95,0.7729],[1.0,1.0],[1.05,0.7881],[1.1,0.5478],[1.15,0.4071],[1.2,0.3227],[1.25,0.2676],[1.3,0.2292],[1.35,0.201],[1.4,0.1793],[1.45,0.1622],[1.5,0.1483],[1.55,0.1368],[1.6,0.1272],[1.65,0.1189],[1.7,0.1117],[1.75,0.1055],[1.8,0.0999]] },
                { "c": "pts", "smooth": true, "dash": true, "pts": [[0.4,0.1568],[0.45,0.1848],[0.5,0.2169],[0.55,0.2542],[0.6,0.2983],[0.65,0.3513],[0.7,0.416],[0.75,0.4961],[0.8,0.5952],[0.85,0.7144],[0.9,0.8448],[0.95,0.9557],[1.0,1.0],[1.05,0.9597],[1.1,0.8678],[1.15,0.7652],[1.2,0.6727],[1.25,0.5952],[1.3,0.5318],[1.35,0.48],[1.4,0.4372],[1.45,0.4015],[1.5,0.3714],[1.55,0.3457],[1.6,0.3235],[1.65,0.3042],[1.7,0.2872],[1.75,0.2722],[1.8,0.2587]] }
              ],
              "labels": [{ "x": 0.95, "y": 1.02, "text": "small R" }, { "x": 1.4, "y": 0.55, "text": "large R" }]
            },
            {
              "x": [0.85, 1.15], "y": [-0.15, 1.25],
              "axisX": "ω / ω0", "axisY": "I / Imax",
              "curves": [{ "c": "pts", "smooth": true, "pts": [[0.85,0.3576],[0.87,0.4083],[0.89,0.4718],[0.91,0.5518],[0.93,0.6522],[0.95,0.7729],[0.97,0.8989],[0.99,0.9873],[1.01,0.9876],[1.03,0.904],[1.05,0.7881],[1.07,0.6783],[1.09,0.5866],[1.11,0.5131],[1.13,0.4544],[1.15,0.4071]] }],
              "segments": [
                { "from": [0.85, 0.7071], "to": [1.15, 0.7071], "dash": true, "soft": true, "label": "half power", "at": "start" },
                { "from": [0.9395, 0], "to": [0.9395, 0.7071], "dash": true, "soft": true },
                { "from": [1.0645, 0], "to": [1.0645, 0.7071], "dash": true, "soft": true },
                { "from": [0.9395, 1.1], "to": [1.0645, 1.1], "label": "Δω", "at": "above" }
              ],
              "labels": [{ "x": 0.9395, "y": -0.1, "text": "ω1" }, { "x": 1.0645, "y": -0.1, "text": "ω2" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Sharpening a resonance without shifting it",
          "steps": [
            "<b>Fix what must not move.</b> omega0 = 1/root(LC) depends only on the PRODUCT LC, so any change that keeps LC fixed leaves the peak exactly where it was.",
            "<b>Route 1 -- lower R.</b> Halving R halves the bandwidth Δomega = R/L and doubles Q, the simplest fix and the one a circuit designer reaches for first.",
            "<b>Route 2 -- reshape L and C, holding LC fixed.</b> Doubling L and halving C leaves omega0 untouched, but Q = (1/R) root(L/C) uses an L/C ratio that is now four times larger, so root(L/C) doubles and Q doubles right along with it.",
            "<b>The deeper point.</b> Sharpness is governed by the ratio (1/R) root(L/C); there is more than one knob to turn, but only the product LC ever decides where the peak sits."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A series LCR circuit has L = 2.0 H, C = 8.0 microfarad, R = 40 ohm, driven by a 20 V (rms) AC source. Find (a) the resonant angular frequency, (b) the impedance at resonance, (c) the RMS current at resonance, and (d) the Q-factor.",
          "steps": [
            "(a) omega0 = 1/root(LC) = 1/root(2.0 x 8.0 x 10^-6) = 1/root(1.6 x 10^-5) = 250 rad/s.",
            "(b) At resonance the reactances cancel: Z = R = 40 ohm.",
            "(c) Irms = Vrms/R = 20/40 = 0.50 A.",
            "(d) Q = omega0L/R = (250 x 2.0)/40 = 12.5."
          ],
          "ans": "omega0 = 250 rad/s, Z = 40 ohm, Irms = 0.50 A, Q = 12.5."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A series LCR circuit at resonance is driven by a 25 V (rms) source. A voltmeter reads 200 V across the inductor. Find (a) the Q-factor and (b) the reading across the capacitor.",
          "steps": [
            "The trap: reaching for Z, XL, omega0 -- none of which are given -- and stalling.",
            "Fast method: at resonance, VL = Q Vsource directly, so Q = VL/Vsource = 200/25 = 8.",
            "Since VC = VL at resonance (they cancel as phasors), the capacitor also reads 200 V."
          ],
          "ans": "Q = 8, VC = 200 V. The whole problem is one division, provided the resonance facts are remembered outright."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A series LCR circuit has R = 10 ohm, L = 0.10 H, C = 10 microfarad. Find (a) the resonant angular frequency, (b) the Q-factor, (c) the bandwidth, and (d) the two half-power frequencies.",
          "steps": [
            "(a) omega0 = 1/root(LC) = 1/root(0.10 x 10 x 10^-6) = 1000 rad/s.",
            "(b) Q = omega0L/R = (1000 x 0.10)/10 = 10.",
            "(c) Δomega = R/L = 10/0.10 = 100 rad/s. Cross-check: Q = omega0/Δomega = 1000/100 = 10.",
            "(d) Q = 10 is comfortably large, so the half-power points sit almost symmetrically about omega0: omega1 is about 950 rad/s, omega2 is about 1050 rad/s (exact roots 951.2 and 1051.2 rad/s; root(951.2 x 1051.2) is about 1000, confirming the geometric-mean property)."
          ],
          "ans": "omega0 = 1000 rad/s, Q = 10, Δomega = 100 rad/s, half-power frequencies about 950 and 1050 rad/s."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A series LCR circuit has L = 4.0 H, C = 10 microfarad, R = 50 ohm. Find omega0 and Q, then find two physically distinct ways to halve the bandwidth without shifting the resonant frequency, and the resulting Q.",
          "steps": [
            "omega0 = 1/root(LC) = 1/root(4.0 x 10 x 10^-6) is about 158.1 rad/s. Q = (1/R) root(L/C) = (1/50) root(4.0/10x10^-6) is about 12.65. Δomega = R/L = 50/4.0 = 12.5 rad/s.",
            "Route 1 -- halve R to 25 ohm: omega0 is untouched (it never depended on R), Δomega = 25/4.0 = 6.25 rad/s is halved, Q doubles to about 25.3.",
            "Route 2 -- keep R = 50 ohm, double L to 8.0 H and halve C to 5.0 microfarad: LC = 8.0 x 5.0 x 10^-6 = 4.0 x 10^-5 is unchanged, so omega0 is preserved, but L/C is now four times larger, so Q = (1/R) root(L/C) doubles to about 25.3, with Δomega = R/L = 50/8.0 = 6.25 rad/s."
          ],
          "ans": "omega0 = 158.1 rad/s, Q rises from 12.65 to about 25.3 either way, and omega0 stays fixed both times because only the PRODUCT LC decides where the peak sits."
        },
        {
          "t": "mcq",
          "q": "In a series LCR circuit, R is doubled while L and C are unchanged. The resonant frequency:",
          "opts": [
            { "label": "doubles", "nudge": "Assumes R enters omega0 because it appears in impedance -- it does not." },
            { "label": "halves", "nudge": "Assumes R enters omega0 because it appears in impedance -- it does not." },
            { "label": "is unchanged", "nudge": null },
            { "label": "becomes one-fourth", "nudge": "Assumes R enters omega0 because it appears in impedance -- it does not." }
          ],
          "correct": 2,
          "solution": "omega0 = 1/root(LC) has no R in it at all. Changing R alters sharpness and peak current, never the resonant frequency."
        },
        {
          "t": "mcq",
          "q": "A series LCR circuit is at resonance. Which one statement is FALSE?",
          "opts": [
            { "label": "the current is maximum", "nudge": "This one is TRUE at resonance -- im = vm/R is the largest current the circuit can carry at any frequency, so it is not the false statement being asked for." },
            { "label": "the power factor is unity", "nudge": "This one is TRUE at resonance -- phi = 0 there, so cos phi = 1, and it is not the false statement being asked for." },
            { "label": "the impedance equals R", "nudge": "This one is TRUE at resonance -- the reactances cancel exactly, leaving Z = R, so it is not the false statement being asked for." },
            { "label": "the voltage across the inductor is zero", "nudge": null }
          ],
          "correct": 3,
          "solution": "The first three are all true at resonance. VL = 0 is false: VL and VC individually equal Q times the source voltage and can be very large, cancelling only as phasors, not as magnitudes."
        },
        {
          "t": "mcq",
          "q": "The Q-factor of a series LCR circuit is given by:",
          "opts": [
            { "label": "R / (omega0L)", "nudge": "The reciprocal of the correct expression -- the ratio has been inverted." },
            { "label": "omega0L / R", "nudge": null },
            { "label": "omega0 / (RC)", "nudge": "The reciprocal of 1/(omega0CR) -- again inverted." },
            { "label": "R / L", "nudge": "That expression is the bandwidth Δomega, not Q." }
          ],
          "correct": 1,
          "solution": "Q = omega0L/R = 1/(omega0CR) = (1/R)root(L/C)."
        },
        {
          "t": "mcq",
          "q": "For a series LCR circuit with resonant frequency omega0 and bandwidth Δomega, the half-power frequencies omega1 and omega2 satisfy:",
          "opts": [
            { "label": "omega1 + omega2 = omega0", "nudge": "Assumes an arithmetic-mean relation; that would give omega1 + omega2 = 2 omega0, not omega0." },
            { "label": "omega1 omega2 = omega0<sup>2</sup>", "nudge": null },
            { "label": "omega1 omega2 = omega0", "nudge": "Dimensionally impossible -- a frequency squared cannot equal a frequency." },
            { "label": "omega2 - omega1 = omega0", "nudge": "That difference is the bandwidth Δomega = omega0/Q, not omega0 itself." }
          ],
          "correct": 1,
          "solution": "omega0 is the GEOMETRIC mean of the half-power frequencies: omega0 = root(omega1 omega2)."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A series LCR circuit has L = 5.0 H, C = 20 microfarad, R = 100 ohm. Find f0 and Q.", "a": "f0 = 1/(2pi root(LC)) = 15.9 Hz; Q = (1/R) root(L/C) = 5.0." },
            { "q": "[NEET] A series LCR circuit at resonance has a source voltage of 15 V (rms) and Q-factor 6. What is the RMS voltage across the capacitor?", "a": "VC = Q V = 6 x 15 = 90 V." },
            { "q": "[JEE Main] A series LCR circuit has R = 20 ohm, L = 0.20 H, C = 50 microfarad. Find the resonant angular frequency, the bandwidth, and the Q-factor.", "a": "omega0 = 1/root(0.2 x 50e-6) = 316 rad/s; Δomega = R/L = 100 rad/s; Q = omega0/Δomega = 3.16." },
            { "q": "[JEE Main] At resonance, a series LCR circuit draws an RMS current of 3.0 A from a 60 V (rms) source. L = 0.50 H. Find R and omega0 given C = 8.0 microfarad.", "a": "R = V/I = 60/3 = 20 ohm; omega0 = 1/root(LC) = 1/root(0.5 x 8e-6) = 500 rad/s." },
            { "q": "[JEE Advanced] The half-power frequencies of a series LCR circuit are omega1 = 480 rad/s and omega2 = 520 rad/s, R = 8.0 ohm. Find (a) omega0, (b) Q, (c) L, (d) C.", "a": "omega0 = root(480 x 520) is about 499.6 rad/s; Δomega = 40 rad/s, Q = omega0/Δomega is about 12.5; L = R/Δomega = 8/40 = 0.20 H; C = 1/(omega0<sup>2</sup> L) is about 20 microfarad." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Believing R shifts the resonant frequency. It never does -- omega0 = 1/root(LC) depends only on L and C. R changes how SHARP and TALL the peak is, never where it sits.",
            "Confusing VL - VC = 0 with VL = 0. At resonance the inductor and capacitor voltages CANCEL as phasors, but each is individually large, in fact Q times the source. Forgetting this burns out real components as often as it loses marks.",
            "Mixing up Q, bandwidth, and their reciprocals. Memorise the chain Q = omega0/Δomega and Δomega = R/L; Q = omega0L/R follows immediately. Many wrong MCQ options are simply inverted versions of the right one.",
            "Treating the ideal LC limit (R = 0) as physical. It predicts infinite resonant current. Real circuits always carry some resistance, so the current is large but finite -- never write 'infinite' unless a problem explicitly idealises."
          ]
        },
        {
          "t": "protip",
          "html": "for any sharpness or selectivity question, reach straight for Q = f0/Δf. for resonance numericals, remember the two-line shortcut: at resonance the source voltage equals VR alone, and VL = VC = Q times the source. these two facts crack most neet/jee one-liners without ever touching omega0. quick sanity check: a high-Q answer should pair with a SMALL R and a NARROW bandwidth -- if the numbers say otherwise, something has been inverted."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "omega0 = 1/root(LC), independent of R", "note": "the peak's location; R never moves it" },
            { "f": "Q = omega0L/R = 1/(omega0CR) = (1/R)root(L/C)", "note": "three equal forms; dimensionless" },
            { "f": "Δomega = R/L, omega0 = root(omega1omega2)", "note": "bandwidth; geometric, not arithmetic, mean" },
            { "f": "VL = VC = Q Vsource at resonance", "note": "voltage magnification; can far exceed the supply" }
          ],
          "aids": ["low R, high Q, sharp tune", "at resonance, source voltage is VR alone", "R sets the height, LC sets the address"]
        }
      ]
    },
    {
      "n": "05",
      "title": "Power in AC Circuits and Transformers",
      "chip": "05 POWER & TRANSFORMERS",
      "kalam": "turns trade voltage for current, never both",
      "blocks": [
        {
          "t": "p",
          "html": "Every topic so far has asked how MUCH current flows. The deeper question for any real device is how much energy it actually consumes. In DC the answer is trivial, P = VI. In AC, that simple product hides a trap, and the trap is this topic's whole story: the phase angle <i>phi</i> between voltage and current decides what fraction of VI is real, useful power, and what fraction is <b>wattless</b> -- current that flows, that an ammeter genuinely reads, but that does no net work at all."
        },
        {
          "t": "think",
          "html": "imagine pushing a heavy trunk back and forth across a floor. if your push is always in step with the trunk's own motion, forward exactly while it moves forward, every joule of effort does useful work -- that is a resistor, voltage and current marching together. now imagine a pure inductor or capacitor: the current is a quarter cycle out of step with the voltage. for half of every cycle you pour energy in, charging the field; for the other half the element hands every joule straight back. over a full cycle the books balance exactly, net energy consumed is zero, yet the current is real and an ammeter reads it. that is wattless current, and what fraction of it counts is set by one number, cos phi, the power factor."
        },
        {
          "t": "def",
          "term": "Wattless current, and the power factor",
          "html": "A pure resistor has <i>phi</i> = 0, so cos <i>phi</i> = 1 -- every watt counts. A pure reactance has <i>phi</i> = 90 degrees, so cos <i>phi</i> = 0 -- nothing counts, and the current carried is entirely <b>wattless</b> (its magnitude is <i>Irms</i> sin <i>phi</i>). A real LCR circuit sits somewhere between. Utilities care about this because a factory drawing huge wattless current loads the cables and transformers without paying for any billable energy, which is why a low power factor is penalised."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AVERAGE POWER AND POWER FACTOR",
          "main": "<i>Pavg</i> = <i>Vrms</i> <i>Irms</i> cos <i>phi</i><br>cos <i>phi</i> = <i>R</i>/<i>Z</i> = true power / apparent power",
          "legend": [
            "<i>Pavg</i> = true (real) power (W); apparent power = <i>Vrms</i> <i>Irms</i> (unit volt-ampere, VA)",
            "cos <i>phi</i> = power factor, dimensionless, always between 0 and 1"
          ],
          "note": "Special cases: pure R gives cos phi = 1 (maximum power); pure L or C gives cos phi = 0 (zero power, wattless); at resonance cos phi = 1 again, since the circuit is purely resistive there."
        },
        {
          "t": "def",
          "term": "The power triangle",
          "html": "Three powers, one right triangle, exactly the shape of the impedance triangle scaled by <i>Vrms Irms</i>. <b>Apparent power</b> <i>S</i> = <i>VrmsIrms</i> is the hypotenuse (unit VA). <b>Real (true) power</b> <i>P</i> = <i>S</i> cos <i>phi</i> is the horizontal side (unit W) -- what a wattmeter actually reads and what the electricity bill actually charges for. <b>Reactive power</b> <i>Q</i> = <i>S</i> sin <i>phi</i> is the vertical side (unit VAR, volt-ampere-reactive) -- the wattless component, real in the sense that it genuinely occupies cable and transformer capacity, but never billed because it does no net work. <i>S</i><sup>2</sup> = <i>P</i><sup>2</sup> + <i>Q</i><sup>2</sup>, the same Pythagoras as every other triangle in this chapter."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE IDEAL TRANSFORMER",
          "main": "<i>Vs</i>/<i>Vp</i> = <i>Ns</i>/<i>Np</i> = <i>k</i>, <i>Is</i>/<i>Ip</i> = <i>Np</i>/<i>Ns</i> = 1/<i>k</i><br><i>VpIp</i> = <i>VsIs</i>; efficiency <i>eta</i> = <i>Pout</i>/<i>Pin</i> x 100%",
          "legend": [
            "<i>Vp</i>, <i>Vs</i> = primary/secondary voltage (V); <i>Ip</i>, <i>Is</i> = primary/secondary current (A); <i>Np</i>, <i>Ns</i> = primary/secondary turns",
            "<i>k</i> = transformation ratio, dimensionless; <i>eta</i> = efficiency, practical transformers reach 90 to 99 percent"
          ],
          "note": "Voltage and current always move OPPOSITELY: step voltage up by k and current steps down by the same k, because power in must equal power out (ideal) or exceed power out (real) -- never the reverse. Transmission-line loss for fixed transmitted power P is Ploss = I<sup>2</sup> Rline = P<sup>2</sup> Rline/V<sup>2</sup>, so Ploss is proportional to 1/V<sup>2</sup>: this is the entire reason the grid transmits at very high voltage."
        },
        {
          "t": "defgrid",
          "title": "Transformer energy losses, and how each is reduced",
          "rows": [
            { "k": "Copper loss", "v": "I<sup>2</sup>R Joule heating in the winding resistance; reduced with thick, low-resistance wire, especially on the high-current winding" },
            { "k": "Eddy-current loss", "v": "circulating currents induced in the core itself; reduced by LAMINATING the core, thin insulated sheets that break up the loops" },
            { "k": "Hysteresis loss", "v": "energy spent repeatedly re-magnetising the core; reduced with a SOFT magnetic material carrying a narrow hysteresis loop, e.g. silicon steel" },
            { "k": "Flux leakage", "v": "some flux never reaches the second coil; reduced by winding the two coils close together, one over the other" }
          ]
        },
        {
          "t": "def",
          "term": "The choke coil",
          "html": "Reducing an AC current with a plain resistor pays for every ampere it removes by burning energy as heat, <i>I</i><sup>2</sup><i>R</i>. A <b>choke coil</b> does almost the same job for nearly free: a large-inductance, very-low-resistance coil (<i>r</i> tiny) in series with the load, throttling current through its reactance <i>XL</i> = <i>omegaL</i> while its power factor stays close to zero, cos <i>phi</i> = <i>r</i>/root(<i>r</i><sup>2</sup>+<i>XL</i><sup>2</sup>) is about zero, so <i>Pchoke</i> is about zero. This is why fluorescent tube lights use a choke (ballast) rather than a resistor: it limits current the way a resistor does but runs cool, dissipating almost no power. A choke works only on AC -- on DC, <i>XL</i> = 0 and it offers only its own tiny resistance <i>r</i>."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AVERAGE POWER, AND WHY WATTLESS CURRENT VANISHES",
          "steps": [
            {
              "eq": "<i>v</i> = <i>vm</i> sin <i>omegat</i>, <i>i</i> = <i>im</i> sin(<i>omegat</i> - <i>phi</i>); instantaneous power <i>p</i> = <i>vi</i> = <i>vmim</i> sin <i>omegat</i> sin(<i>omegat</i> - <i>phi</i>)",
              "why": "phi is the phase by which the voltage leads the current, the convention fixed in Topic 02; cosine is even, so the sign of phi will not matter to the final average power."
            },
            {
              "eq": "expand sin(<i>omegat</i>-<i>phi</i>) = sin <i>omegat</i> cos <i>phi</i> - cos <i>omegat</i> sin <i>phi</i>, giving <i>p</i> = <i>vmim</i>[sin<sup>2</sup><i>omegat</i> cos <i>phi</i> - sin <i>omegat</i> cos <i>omegat</i> sin <i>phi</i>]",
              "why": "A direct trigonometric expansion, splitting instantaneous power into two terms, one carrying cos phi and one carrying sin phi."
            },
            {
              "eq": "average over a full cycle: the mean of sin<sup>2</sup><i>omegat</i> is 1/2 and the mean of sin <i>omegat</i> cos <i>omegat</i> is 0 (it is half of sin 2<i>omegat</i>, which averages to zero), so the sin <i>phi</i> term vanishes entirely",
              "why": "The vanishing term is exactly the wattless power sloshing back and forth every cycle -- real on an instant-by-instant basis, but contributing nothing once averaged."
            },
            {
              "eq": "<i>Pavg</i> = <i>vmim</i>(1/2) cos <i>phi</i> = (<i>vm</i>/root2)(<i>im</i>/root2) cos <i>phi</i> = <i>Vrms</i> <i>Irms</i> cos <i>phi</i>",
              "why": "Geometrically, cos phi = R/Z from the impedance triangle, so only the RESISTANCE ever dissipates energy -- reactances merely store and return it, which is why a pure inductor or capacitor (phi = 90 degrees) consumes exactly zero average power."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TRANSFORMER TURNS RATIO",
          "steps": [
            {
              "eq": "an alternating current in the primary sets up an alternating flux Phi in the shared iron core; because the core confines it, the SAME flux threads every turn of both coils",
              "why": "This shared-flux assumption is the entire principle a transformer runs on, and it is only good because the core is a closed loop of high-permeability iron."
            },
            {
              "eq": "by Faraday's law, <i>epsilonp</i> = -<i>Np</i>(<i>dΦ</i>/<i>dt</i>), <i>epsilons</i> = -<i>Ns</i>(<i>dΦ</i>/<i>dt</i>); since <i>dΦ</i>/<i>dt</i> is identical for both, dividing gives <i>epsilons</i>/<i>epsilonp</i> = <i>Ns</i>/<i>Np</i>",
              "why": "Both coils see the identical rate of change of flux, so the ratio of their induced emfs is fixed purely by their turns ratio."
            },
            {
              "eq": "for an ideal transformer (no winding resistance), terminal voltage equals induced emf on both sides, giving <i>Vs</i>/<i>Vp</i> = <i>Ns</i>/<i>Np</i>",
              "why": "The emf relation becomes a directly measurable voltage relation once winding resistance is idealised away."
            },
            {
              "eq": "no energy is dissipated, so input power equals output power: <i>VpIp</i> = <i>VsIs</i>, giving <i>Is</i>/<i>Ip</i> = <i>Vp</i>/<i>Vs</i> = <i>Np</i>/<i>Ns</i>",
              "why": "Voltage and current scale OPPOSITELY because power must be conserved -- there is no free energy in a transformer, step the voltage up and the current must step down by the identical factor."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WATTLESS POWER, SEEN RATHER THAN ASSERTED",
          "chips": ["p(t) for a resistor", "p(t) for a pure reactance"],
          "captions": [
            "Instantaneous power in a resistor, p = vi = im sin<sup>2</sup> omegat. It never goes negative -- energy only ever flows IN -- and its mean (dashed) sits at exactly half the peak, which is precisely Pavg = Vrms Irms.",
            "Instantaneous power in a pure inductor or capacitor. It oscillates at TWICE the source frequency, spending exactly as much time negative (energy flowing back OUT to the source) as positive (energy flowing in). Its average is exactly zero -- this is what 'wattless' looks like, not merely what it is called."
          ],
          "frames": [
            {
              "x": [0, 6.2832], "y": [-0.15, 1.15],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "cos", "a": -0.5, "b": 2, "d": 0.5 }],
              "segments": [{ "from": [0, 0.5], "to": [6.2832, 0.5], "dash": true, "soft": true, "label": "mean", "at": "end" }]
            },
            {
              "x": [0, 6.2832], "y": [-0.6, 0.6],
              "ticksX": { "at": [0, 1.5708, 3.1416, 4.7124, 6.2832], "labels": ["0", "T/4", "T/2", "3T/4", "T"] },
              "curves": [{ "c": "sin", "a": -0.5, "b": 2 }],
              "segments": [{ "from": [0, 0], "to": [6.2832, 0], "dash": true, "soft": true, "label": "mean = 0", "at": "below" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 7.3 · THE TRANSFORMER",
          "chips": ["shared core, two coils"],
          "captions": [
            "A laminated core (hatched, seen edge-on) shared by two coils. The primary, Np turns, is driven by the AC source at left; the secondary, Ns turns, feeds the load at right. Both are wound on the SAME core, so the alternating flux Phi they share is identical, which is the whole principle: more turns on a side means more induced voltage on that side."
          ],
          "frames": [
            {
              "x": [0, 9], "y": [0, 5], "axes": "none",
              "polys": [{ "pts": [[4, 0.5], [5, 0.5], [5, 4.5], [4, 4.5]], "close": true, "fill": "hatch", "tone": "ink" }],
              "points": [
                { "x": 3.3, "y": 1, "open": true }, { "x": 3.3, "y": 1.7, "open": true }, { "x": 3.3, "y": 2.4, "open": true }, { "x": 3.3, "y": 3.1, "open": true }, { "x": 3.3, "y": 3.8, "open": true },
                { "x": 5.7, "y": 1, "open": true }, { "x": 5.7, "y": 1.7, "open": true }, { "x": 5.7, "y": 2.4, "open": true }, { "x": 5.7, "y": 3.1, "open": true }, { "x": 5.7, "y": 3.8, "open": true }
              ],
              "segments": [
                { "from": [3.3, 1], "to": [3.3, 3.8], "soft": true },
                { "from": [5.7, 1], "to": [5.7, 3.8], "soft": true },
                { "from": [1, 2.4], "to": [3.3, 2.4], "label": "~", "at": "mid" },
                { "from": [5.7, 2.4], "to": [8, 2.4], "label": "load", "at": "mid" }
              ],
              "arcs": [
                { "at": [4.5, 4.5], "r": 0.7, "from": 20, "to": 160, "tone": "amber", "label": "Φ" },
                { "at": [4.5, 0.5], "r": 0.7, "from": 200, "to": 340, "tone": "amber" }
              ],
              "labels": [{ "x": 3.3, "y": 4.15, "text": "Np" }, { "x": 5.7, "y": 4.15, "text": "Ns" }]
            }
          ]
        },
        {
          "t": "think",
          "html": "a factory's induction motors are almost all net inductive, so the mains current arriving at the gate is doing two jobs at once: a real-work part that turns shafts and lights bulbs, billed honestly, and a wattless part that the motors simply borrow and hand straight back every cycle, never billed but still squeezing through the same wires and the same transformer. a shunt capacitor bank is a local lender: parked right at the factory gate, it hands the motors their own borrowed current on the spot, so the wire back to the power station only has to carry the real-work part. nothing about the motors changes; only how far the wattless current has to travel does."
        },
        {
          "t": "p",
          "html": "One plausibility check worth running on every transformer answer: efficiency can never exceed 100 percent, and a real secondary power is always LESS than the primary power fed in, never more or equal (an ideal transformer is the limiting case of equal, never a real one). If an answer implies power growing from primary to secondary, or an efficiency above 100 percent, the arithmetic has gone wrong somewhere upstream -- most often a turns ratio inverted, or a current computed from the wrong side's voltage."
        },
        {
          "t": "proc",
          "title": "Correcting a lagging power factor with a capacitor bank",
          "steps": [
            "<b>Find the present reactive power.</b> From P and cos phi1, get tan phi1 and Q1 = P tan phi1 (in VAR) -- this is the reactive power the supply is currently forced to carry alongside the real power P.",
            "<b>Decide the target.</b> To correct to cos phi2 (often unity), the capacitor must supply Qrequired = P(tan phi1 - tan phi2).",
            "<b>Size the bank.</b> A shunt capacitor draws a current that LEADS the voltage by 90 degrees and so supplies purely reactive power: C = Qrequired/(omega Vrms<sup>2</sup>).",
            "<b>Worked check (a 10 kW motor at cos phi1 = 0.707, corrected to unity, 230 V rms, 50 Hz):</b> tan phi1 = 1, so Q1 = 10 kVAR; C = 10000/(314 x 230<sup>2</sup>) is about 602 microfarad; line current falls from I1 = P/(V cos phi1) = 61.5 A to I2 = P/V = 43.5 A, a 29 percent reduction -- the capacitor supplies exactly the motor's own reactive current, leaving only the real-power component for the supply."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A coil of resistance R = 30 ohm and inductive reactance XL = 40 ohm is connected to a 200 V (rms) AC source. Find (a) the impedance, (b) the power factor, and (c) the average power consumed.",
          "steps": [
            "(a) Z = root(R<sup>2</sup> + XL<sup>2</sup>) = root(30<sup>2</sup> + 40<sup>2</sup>) = root(2500) = 50 ohm.",
            "(b) cos phi = R/Z = 30/50 = 0.6.",
            "(c) Irms = Vrms/Z = 200/50 = 4 A. Pavg = Vrms Irms cos phi = 200 x 4 x 0.6 = 480 W."
          ],
          "ans": "Z = 50 ohm, cos phi = 0.6, Pavg = 480 W. Cross-check: P = Irms<sup>2</sup> R = 4<sup>2</sup> x 30 = 480 W -- only the resistor dissipates."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An ideal inductor draws an RMS current of 2.0 A when connected to a 220 V, 50 Hz supply. What is the average power consumed?",
          "steps": [
            "The trap: the obvious move, P = Vrms Irms = 220 x 2.0 = 440 W, is the APPARENT power, not the real power, and it is wrong here.",
            "An ideal inductor has phi = 90 degrees, so cos phi = 0: Pavg = Vrms Irms cos phi = 220 x 2.0 x 0."
          ],
          "ans": "0 W. A pure inductor (or capacitor) always consumes zero average power -- the current is entirely wattless. See 'ideal/pure inductor or capacitor' and write zero immediately."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A step-down transformer reduces 2200 V (rms) to 220 V (rms). The secondary delivers 10 A to a load, and the transformer is 90 percent efficient. Find (a) the turns ratio Np:Ns, (b) the output power, and (c) the primary current.",
          "steps": [
            "(a) Np/Ns = Vp/Vs = 2200/220 = 10, so Np:Ns = 10:1.",
            "(b) Pout = Vs Is = 220 x 10 = 2200 W.",
            "(c) eta = Pout/Pin, so Pin = Pout/eta = 2200/0.90 = 2444 W; Ip = Pin/Vp = 2444/2200 = 1.11 A."
          ],
          "ans": "turns ratio 10:1, output power 2200 W, primary current about 1.11 A. Assuming 100 percent efficiency would have given Ip = 1.0 A -- the 0.11 A gap is exactly what feeds the losses."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A power plant must deliver P = 100 kW through a transmission line of resistance Rline = 5.0 ohm. Compare the fractional power lost as heat when transmitting at (a) 250 V versus (b) 25,000 V.",
          "steps": [
            "Fractional loss Ploss/P = P Rline/V<sup>2</sup> (since I = P/V and Ploss = I<sup>2</sup> Rline).",
            "(a) At V = 250 V: (100000 x 5.0)/250<sup>2</sup> = 500000/62500 = 8.0, i.e. 800 percent -- physically impossible, meaning 100 kW simply cannot be delivered over this line at 250 V; the required current, 400 A, is ruinous.",
            "(b) At V = 25,000 V: (100000 x 5.0)/25000<sup>2</sup> = 500000/(6.25 x 10<sup>8</sup>) = 8.0 x 10^-4, i.e. 0.08 percent -- the current is only 4 A."
          ],
          "ans": "800 percent (impossible) versus 0.08 percent. Since Ploss is proportional to 1/V<sup>2</sup>, a 100-times voltage increase cuts the loss by 100<sup>2</sup> = 10,000 times -- the entire reason the grid steps voltage up at the plant and back down near the consumer."
        },
        {
          "t": "mcq",
          "q": "The average power consumed by a pure inductor connected to an AC source is:",
          "opts": [
            { "label": "Vrms Irms", "nudge": "Computes the apparent power, forgetting the power factor entirely." },
            { "label": "(1/2) Vrms Irms", "nudge": "Misremembers a 1/2 factor from the RMS or averaging step where none belongs here." },
            { "label": "zero", "nudge": null },
            { "label": "Vrms Irms / root2", "nudge": "Misremembers a 1/root2 factor from the RMS or averaging step where none belongs here." }
          ],
          "correct": 2,
          "solution": "For a pure inductor phi = 90 degrees, so cos phi = 0 and Pavg = Vrms Irms cos phi = 0. The current is entirely wattless."
        },
        {
          "t": "mcq",
          "q": "A transformer steps voltage up from 100 V to 400 V. If the primary current is 8 A, the secondary current in an ideal transformer is:",
          "opts": [
            { "label": "32 A", "nudge": "Multiplies current by the voltage ratio instead of dividing -- the 'step up everything' error that violates energy conservation." },
            { "label": "8 A", "nudge": "Assumes the current is unchanged." },
            { "label": "4 A", "nudge": "Divides by 2 instead of the actual factor of 4." },
            { "label": "2 A", "nudge": null }
          ],
          "correct": 3,
          "solution": "Energy conservation: VpIp = VsIs, so Is = Ip(Vp/Vs) = 8 x (100/400) = 2 A. Voltage stepped up four times, current stepped down four times."
        },
        {
          "t": "mcq",
          "q": "The core of a transformer is laminated primarily to reduce:",
          "opts": [
            { "label": "hysteresis loss", "nudge": "Hysteresis loss is reduced by choosing a SOFT magnetic material with a narrow loop, not by lamination." },
            { "label": "copper loss", "nudge": "Copper loss is in the WINDINGS, reduced by thicker wire, unrelated to the core at all." },
            { "label": "eddy-current loss", "nudge": null },
            { "label": "flux leakage", "nudge": "Flux leakage is reduced by coil PLACEMENT, not by lamination." }
          ],
          "correct": 2,
          "solution": "Lamination breaks the core's conducting cross-section into thin insulated sheets, sharply shrinking the induced eddy-current loops and their I<sup>2</sup>R heating."
        },
        {
          "t": "mcq",
          "q": "In an AC circuit, v = 200 sin omegat (V) and i = 5 sin(omegat - pi/3) (A). The average power consumed is:",
          "opts": [
            { "label": "500 W", "nudge": "Forgets the cos phi = 0.5 factor entirely: (1/2)(200)(5) = 500." },
            { "label": "250 W", "nudge": null },
            { "label": "1000 W", "nudge": "Uses peak values without the 1/2 factor and without cos phi at all." },
            { "label": "866 W", "nudge": "Uses sin 60 degrees (about 0.866) instead of cos 60 degrees, confusing the wattless and the real components." }
          ],
          "correct": 1,
          "solution": "P = (1/2) vm im cos phi = (1/2)(200)(5) cos60 = (1/2)(1000)(0.5) = 250 W."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A series RC circuit has R = 60 ohm and XC = 80 ohm, connected to a 100 V (rms) source. Find the power factor and the average power consumed.", "a": "Z = root(60<sup>2</sup>+80<sup>2</sup>) = 100 ohm; cos phi = R/Z = 0.6; I = 100/100 = 1 A; P = VIcos phi = 100 x 1 x 0.6 = 60 W." },
            { "q": "[NEET] A pure capacitor is connected to a 230 V, 50 Hz supply and draws 1.5 A. What is the average power dissipated?", "a": "0 W (pure capacitor, cos phi = 0)." },
            { "q": "[JEE Main] A transformer has 200 turns in the primary and 50 in the secondary. The primary is fed 240 V (rms) and draws 0.5 A. Assuming it is ideal, find the secondary voltage and current.", "a": "Vs = Vp(Ns/Np) = 240 x (50/200) = 60 V; Is = Ip(Np/Ns) = 0.5 x 4 = 2.0 A." },
            { "q": "[JEE Main] An AC circuit draws 660 W from a 220 V, 50 Hz source at a power factor of 0.75 (lagging). Find the RMS current and the apparent power.", "a": "I = P/(Vcos phi) = 660/(220 x 0.75) = 4.0 A; apparent power = VI = 220 x 4 = 880 VA." },
            { "q": "[JEE Advanced] A town demands 440 kW at 220 V, 20 km from a plant, sent at 22 kV along a line of total resistance 16 ohm (assume the plant supplies exactly the town demand plus line loss). Find (a) the line current, (b) the line power loss, and (c) the percentage of generated power lost.", "a": "I = P/V = 440000/22000 = 20 A; loss = I<sup>2</sup> R = 20<sup>2</sup> x 16 = 6.4 kW; generated power = 440 + 6.4 = 446.4 kW, so percentage lost = 6.4/446.4 is about 1.43 percent." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Using P = VI for a reactive circuit. That is the APPARENT power. The real power is Vrms Irms cos phi -- always find the phase angle or power factor before reporting a power.",
            "Thinking a transformer works on DC. It needs a CHANGING flux; steady DC induces nothing in the secondary at all, and can overheat and burn out the primary. Transformers are AC-only devices.",
            "Believing 'step-up' raises both voltage and current. It cannot -- that would create power from nothing. Voltage up always means current down, in exact proportion, and vice versa.",
            "Muddling the loss types. Copper loss lives in the WINDINGS, fixed with thicker wire. Eddy-current loss lives in the CORE, fixed by lamination. Hysteresis loss also lives in the core, fixed with a soft, narrow-loop material. Keep the location and the fix paired."
          ]
        },
        {
          "t": "protip",
          "html": "for power, the cleanest formula is almost always P = Irms<sup>2</sup> R -- only resistance dissipates, so knowing the current and R skips the power factor entirely. for transformers, anchor everything to one sentence: voltage and turns go together, current goes the opposite way, power stays the same. quick sanity check: if a transformer answer shows power rising from primary to secondary, an error has been made -- power can only stay equal (ideal) or drop (real), never rise."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Pavg = Vrms Irms cos phi, cos phi = R/Z", "note": "power factor; pure R gives 1, pure L or C gives 0" },
            { "f": "Vs/Vp = Ns/Np, Is/Ip = Np/Ns", "note": "transformer; voltage and current scale oppositely" },
            { "f": "VpIp = VsIs (ideal); eta = Pout/Pin", "note": "power conserved ideally, lost only in real windings/core" },
            { "f": "Ploss = P<sup>2</sup> Rline/V<sup>2</sup>, proportional to 1/V<sup>2</sup>", "note": "why the grid transmits at high voltage" }
          ],
          "aids": ["high voltage, low loss", "voltage and turns together, current the other way", "only resistance ever dissipates"]
        }
      ]
    }
  ]
};

export default phy12AlternatingCurrent;
