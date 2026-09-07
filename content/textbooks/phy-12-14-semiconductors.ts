/**
 * Chapter 14 · Semiconductor Electronics. Physics, Class 12.
 *
 * Restructured from pages 859 to 923 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-03-current-electricity.ts and phy-12-12-atoms.ts.
 *
 * THE LAST CHAPTER OF THE CORPUS, and the only one whose subject is a
 * MANUFACTURED object rather than a natural one. Everything else in either
 * book describes something that was already there; this describes something
 * engineers built, and the whole chapter is one idea seen five ways: a p-n
 * junction, and what happens when you tune it. That is the spine below.
 *
 * FIVE TOPICS FROM FOUR SOURCE SUBTOPICS, SPLIT ONCE. The source names four
 * (01 Energy Bands and Intrinsic / Extrinsic Semiconductors; 02 p-n Junction
 * Diode and Applications; 03 Special-Purpose Diodes: Zener, Photodiode, LED
 * and Solar Cell; 04 Digital Electronics and Logic Gates). Four is inside the
 * reader's gate, so the split was a choice and is justified here:
 *
 *   TOPIC 02 + TOPIC 03 = SOURCE SUBTOPIC 02, split at the seam its own
 *   title carries. "p-n Junction Diode AND APPLICATIONS" is two subjects and
 *   the source treats them as two: its Section 3 changes register halfway
 *   down, from "Derivation A - Origin of the barrier potential" and
 *   "Derivation B - Why forward bias lowers the barrier", which are junction
 *   electrostatics, to "The filter - turning pulsating output into steady DC"
 *   and "Two ways to build a full-wave rectifier", which are power-supply
 *   engineering and use nothing from the derivations but the word "diode".
 *   The formula sheet splits the same way: V_eff, I = (V - V_b)/(R + r_f),
 *   E = V_b/d and the Shockley equation on one side; eta_max, f_out, I_dc and
 *   I_rms on the other. Not one symbol is shared across that line. Topic 02 is
 *   the junction and the biased diode; Topic 03 is what a diode is FOR.
 *
 *   NOTHING WAS MERGED. Subtopics 03 and 04 were the obvious candidate, since
 *   both are outside the CBSE syllabus and inside JEE Main and NEET. They are
 *   kept apart because they share nothing at all: one is junction physics with
 *   photons in it, the other is Boolean algebra, and a merged topic would have
 *   had two unrelated halves and one checkpoint covering both.
 *
 * SYLLABUS SCOPE, STATED WHERE A STUDENT WILL SEE IT. The source's own
 * preamble (page 859) is explicit and it matters more here than in any other
 * chapter: Topics 01 to 03 below are common to CBSE Boards, JEE Main and NEET;
 * Topics 04 and 05 (special-purpose diodes, logic gates) are in JEE Main and
 * NEET 2026 but have been REMOVED from CBSE; and junction transistors,
 * amplifiers and oscillators are removed from all three and appear nowhere
 * below, not even as an aside. The hook says all of this in the student's own
 * terms, because a board candidate revising Topic 05 is wasting an evening.
 *
 * THE ROUND 2 ADDENDUM (pages 906 to 923: A the full diode equation with
 * ideality factor and breakdown temperature coefficients, B junction and
 * diffusion capacitance and dynamic resistance, C solar-cell fill factor and
 * efficiency, D Boolean algebra and minimal gate realisations, E reading
 * timing waveforms) IS NOT A TOPIC, per the brief. It reaches a student in
 * exactly five places below, each one line:
 *   - Topic 02's protip names the ideality factor n as the one thing that
 *     changes in the Shockley equation for a real diode (Addendum A, Method).
 *   - Topic 02's mistakes item names dynamic resistance r_d = n V_T / I_D as
 *     the small-signal replacement for Ohm's law (Addendum B, Method).
 *   - Topic 04's defgrid row on breakdown carries the temperature-coefficient
 *     signature, negative for Zener and positive for avalanche (Addendum A,
 *     Method). This one is in the MAIN body too, on page 889, so it is not
 *     really addendum-only.
 *   - Topic 04's protip names the fill factor and the 1000 W/m^2 standard
 *     illumination (Addendum C, Method).
 *   - Topic 05's protip names timing-waveform gate identification and the
 *     read-mid-slice rule (Addendum E, Method).
 * No `formula`, `defgrid`, `deriv`, `proc`, `ex`, `mcq` or `practice` block
 * below carries an addendum NUMBER, which matters, because nine of the ones I
 * checked are wrong and one of them is a truth table.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full, confirmed rather than
 * assumed). NO ENTRY TOUCHES THIS RANGE. The Class 12 errata carries exactly
 * two items and both name their chapter: Chapter 7 (Alternating Current),
 * page 14, a series-LCR practice problem whose stated drive frequency IS the
 * resonant frequency of its own stated components, so the described phase lag
 * cannot occur; and Chapter 10 (Wave Optics), page 33, a thin-film derivation
 * with the bright and dark conditions swapped in one sentence. Chapter 14 is
 * not named, neither entry changes a number or a claim used below, and neither
 * is quoted here.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 859 to 923 was recomputed independently, addendum first, and
 * every truth table was checked cell by cell against the gate it defines.
 *
 * THE MAIN BODY IS ALMOST CLEAN. Pages 860 to 905 carry sixteen worked
 * examples, twenty practice answers and sixteen MCQ keys. Fourteen of the
 * sixteen examples, eighteen of the twenty practice answers and all sixteen
 * MCQ keys reproduce exactly, including every truth table. TWO PRACTICE
 * ANSWERS ARE WRONG, both in Subtopic 01, both temperature ratios, and both
 * are carried into Topic 01 below in their corrected form:
 *
 *   1. SUBTOPIC 01, PRACTICE 4 (page 868). Intrinsic sample at 300 K, take
 *      sigma proportional to exp(-E_g / 2 k_B T) with E_g = 0.72 eV and
 *      k_B = 8.62 x 10^-5 eV/K; by what factor does sigma change at 330 K?
 *      Printed "approximately 3.6". Working:
 *        E_g/(2 k_B) = 0.72/(2 x 8.62 x 10^-5) = 4176 K
 *        1/300 - 1/330 = 30/99000 = 3.0303 x 10^-4 K^-1
 *        product = 1.2656, and e^1.2656 = 3.545
 *      CORRECT ANSWER approximately 3.5. The printed 3.6 needs an exponent of
 *      1.281, i.e. a 1.2 per cent larger bracket than the stated temperatures
 *      give. Topic 01's practice 4 prints 3.5 with this working.
 *   2. SUBTOPIC 01, PRACTICE 5 (page 869). Full expression
 *      n_i proportional to T^(3/2) exp(-E_g / 2 k_B T), E_g = 1.1 eV,
 *      T_1 = 290 K, T_2 = 350 K, find n_i2/n_i1. Printed "approximately 60
 *      (prefactor contributes approximately 1.32; exponential approximately
 *      45)". The prefactor is right and the exponential is not. Working:
 *        (350/290)^(3/2) = 1.2069^1.5 = 1.326
 *        E_g/(2 k_B) = 1.1/(1.724 x 10^-4) = 6380.5 K
 *        1/290 - 1/350 = 60/101500 = 5.9113 x 10^-4 K^-1
 *        product = 3.7717, and e^3.7717 = 43.5, not 45
 *        1.326 x 43.5 = 57.7
 *      CORRECT ANSWER approximately 58. The printed 60 is 1.32 x 45 rounded
 *      up, so the whole error is the exponential factor. Topic 01's practice 5
 *      prints 58 with both factors shown separately, since the point of the
 *      question is that the prefactor barely matters.
 *
 *   Nothing else in the main body moved. Checked and reproduced exactly:
 *   Subtopic 01's Examples 1 (n_h = 4.5 x 10^9 m^-3), 3 (n_h = 1.2 x 10^18
 *   m^-3, sigma = 30 S/m, rho = 0.033 ohm m) and 4 (E_g = 1.15 eV from a
 *   quadrupling between 300 K and 320 K, which lands on silicon's 1.1 eV);
 *   Subtopic 02's Examples 1 (10 mA), 3 (I_m = 10 mA, I_dc = 3.18 mA,
 *   eta = 39.8 per cent) and 4 (V_T = 25.9 mV, I = 0.22 mA at 0.30 V,
 *   Delta-V = 18 mV per doubling and 59.6 mV per decade) and its practice
 *   (E = 1.5 x 10^5 V/m; I = 19 mA; a factor of 10.2); Subtopic 03's Examples
 *   1 (R_S = 200 ohm), 3 (I_Zmax = 0.20 A, R_S >= 50 ohm) and 4 (590 nm both
 *   ways) and its practice (133 ohm; 2.0 eV; 48 ohm); and every one of
 *   Subtopic 04's four tables.
 *
 * THE ADDENDUM IS NOT CLEAN, and this time one of its faults is a LOGIC
 * error rather than an arithmetic one, which is worse: a wrong number
 * announces itself to a checker, and a wrong Boolean expression does not.
 * Nine faults, recorded with their working, none carried into a block.
 *
 *   A1. ADDENDUM A, Example A.1 (page 908): AN ELECTRONVOLT CONVERTED AS IF
 *       IT WERE A JOULE, AND THE WHOLE EXAMPLE BUILT ON IT. Printed: "convert
 *       E_g = 1.1 eV = 1.1 x 10^-19 J", giving E_g/k_B = 1.1 x 10^-19 /
 *       1.38 x 10^-23 = 7970 K. But 1.1 eV = 1.1 x 1.6 x 10^-19 = 1.76 x
 *       10^-19 J, so E_g/k_B = 1.76 x 10^-19 / 1.38 x 10^-23 = 12750 K. (The
 *       same number the easy way: 1.1/8.62 x 10^-5 = 12760 K.) The 7970 is
 *       then reused in Step 3 as if it were e/k_B per volt, which is a second
 *       and different confusion: e/k_B = 1.6 x 10^-19/1.38 x 10^-23 = 11594
 *       K/V. Redone with both constants right, for a diode held at 0.70 V
 *       while T goes 300 K to 330 K:
 *         I_S ratio = (330/300)^3 exp(12750 x 3.0303 x 10^-4)
 *                   = 1.331 x e^3.865 = 1.331 x 47.7 = 63.5
 *         voltage factor = exp(0.70 x 11594 x 3.0303 x 10^-4)
 *                   = e^2.459 = 11.7
 *         total = 63.5 x 11.7 = 743
 *       CORRECT ANSWER approximately 740 times, i.e. I_2 of order 7 A, not the
 *       printed 80 times and 800 mA. And the absurd size of the honest answer
 *       is the physics the example was reaching for: a silicon diode held at a
 *       FIXED forward voltage while it warms goes into thermal runaway, which
 *       is exactly why real circuits drive diodes and LEDs from a current
 *       source or through a series resistor and never from a fixed voltage.
 *   A2. ADDENDUM A, Practice 3 (page 910): A FACTOR OF TEN. V_Z = 8.0 V at
 *       20 degrees C and 8.2 V at 80 degrees C; printed "+0.33 mV/degree C".
 *       Working: (8.2 - 8.0)/(80 - 20) = 0.2/60 = 3.33 x 10^-3 V per degree
 *       = +3.3 mV/degree C. CORRECT ANSWER +3.3 mV/degree C. The named
 *       mechanism (avalanche, positive coefficient, V_Z above about 7 V) is
 *       right and is unaffected.
 *   A3. ADDENDUM A, Practice 1 (page 910): the answer matches neither method.
 *       Germanium, E_g = 0.7 eV, 5 mA at 0.3 V, 300 K to 330 K; printed
 *       "roughly 25 times, approximately 125 mA". Working, the same route as
 *       A1 with the right constants: E_g/k_B = 0.7 x 1.6 x 10^-19/1.38 x
 *       10^-23 = 8116 K, so the I_S ratio is 1.331 x e^2.459 = 15.6, and the
 *       voltage factor is exp(0.30 x 11594 x 3.0303 x 10^-4) = e^1.054 = 2.87.
 *       CORRECT ANSWER approximately 45 times, about 220 mA. The source's own
 *       (wrong) constant would have given about 10 times, so 25 is not even
 *       the error propagated consistently.
 *   A4. ADDENDUM D, Example D.1 (page 918): THE OUTPUT EXPRESSION IS WRONG,
 *       and this is the one that would actually mislead. Circuit: A and B each
 *       through a NOT gate, both inverted signals into NAND gate 3, whose
 *       output goes into NAND gate 4 with input C. Printed
 *       "Y = A + B + NOT C". Working: gate 3 gives T_3 = NOT(NOT A . NOT B)
 *       = A + B, which the source has right. Gate 4 then gives
 *       Y = NOT(T_3 . C) = NOT T_3 + NOT C. The source writes "NOT T_3 =
 *       A + B", confusing T_3 with its own complement: NOT T_3 = NOT(A + B) =
 *       NOT A . NOT B. So CORRECT ANSWER Y = (NOT A)(NOT B) + NOT C, which is
 *       NOT((A + B) . C). The printed answer fails at A = 1, C = 1: it claims
 *       "A = 1 gives Y = 1 regardless", and the circuit gives
 *       Y = NOT(1 . 1) = 0. Topic 05 draws this circuit correctly as the last
 *       chip of its universal-gate figure and states the right expression.
 *   A5. ADDENDUM D, Example D.2 (page 918): the minimum gate count is 4, not
 *       3. Y = NOT(A.B + C) = NOT(A.B) . NOT C. Gate 1 NAND(A, B) gives
 *       NOT(A.B); gate 2 NAND(C, C) gives NOT C; gate 3 NAND of those gives
 *       NOT( NOT(A.B) . NOT C ) = A.B + C, which is Y's COMPLEMENT, so a
 *       fourth NAND with its inputs tied is needed to invert it. Check at
 *       A = B = C = 0: Y must be 1 and the printed three-gate circuit outputs
 *       0. CORRECT ANSWER 4 NAND gates. The same example calls its own NOR
 *       route "worse" at 4 gates; the two are in fact equal.
 *   A6. ADDENDUM D, Example D.3 (page 919): the final claim is right and two
 *       intermediates are not. With T_1 = NAND(A, B) = NOT(A.B):
 *         T_2 = NAND(A, T_1) = NOT A + A.B = NOT A + B
 *         T_3 = NAND(B, T_1) = NOT B + A.B = NOT B + A
 *       The source prints both as "NOT A + NOT B", which would make T_2 and
 *       T_3 identical and Y = NOT(T_2 . T_3) = NOT T_2 = A.B, not XOR. The
 *       circuit and the headline (XOR from 4 NANDs) are correct; only the two
 *       labels are wrong. Verified the right way: Y = NOT(T_2 . T_3) =
 *       NOT T_2 + NOT T_3 = A.(NOT B) + B.(NOT A) = A XOR B.
 *   A7. ADDENDUM D, Practice 2 (page 919): the inverter is on the wrong input.
 *       Asked to realise Y = A . NOT B from NOR gates only, the printed answer
 *       inverts B and then takes NOR(NOT B, A) = NOT(NOT B + A) = B . NOT A,
 *       which is the other one. CORRECT: invert A, then NOR(NOT A, B) =
 *       NOT(NOT A + B) = A . NOT B. Two NOR gates either way; the inverter
 *       goes on A.
 *   A8. ADDENDUM D, Practice 3 (page 919): "2 NAND gates" for
 *       Y = NOT((A + B) . C). The printed answer argues with itself in
 *       mid-sentence, rejects its own first construction, and then asserts 2
 *       for the second. But the second needs NOT A and NOT B, and each costs a
 *       NAND: NAND(A,A), NAND(B,B), NAND(NOT A, NOT B) = A + B, and finally
 *       NAND(A + B, C) = Y. CORRECT ANSWER 4 NAND gates.
 *   A9. ADDENDUM E, Practice 1 (page 922): a mis-assigned slice. With
 *       A = 0 1 1 0 0 1 and B = 0 0 1 1 0 1, slice 6 carries (1, 1) and not
 *       the printed (1, 0); the combination 11 giving 0 occurs at slices 3 AND
 *       6. The identification (NAND) is unaffected and correct.
 *   Two further items are reported as garbled rather than wrong. Addendum A's
 *   temperature table prints the built-in potential as "V_b = E_g/e - 3 V_T
 *   ln(N/n_i)", which mixes the two standard forms; the clean statement is
 *   V_b = (k_B T/e) ln(N_A N_D / n_i^2), which Addendum B then uses correctly
 *   four pages later. And Addendum C's Practice 3 hint repeats a factor of
 *   1/e inside an expression that is already a voltage. Neither is used below.
 *
 * TRUTH TABLES, CHECKED CELL BY CELL. Eight tables in the range, 100 output
 * cells, and every cell is right, which is the opposite of what the brief
 * warned to expect and had to be established rather than assumed:
 *   - page 897, the master two-input table (OR, AND, NAND, NOR, XOR over four
 *     rows, 20 cells). Printed as unbroken digit runs, "0011 0" for row 00 and
 *     "1100 0" for row 11, so it had to be split by hand before it could be
 *     read: 00 gives 0,0,1,1,0; 01 gives 1,0,1,0,1; 10 gives 1,0,1,0,1;
 *     11 gives 1,1,0,0,0. All 20 correct.
 *   - page 901, Example 1's table for Y = A + NOT B (8 cells). Correct.
 *   - page 902, Example 3's table for A.(NOT B) + (NOT A).B (12 cells), which
 *     is XOR. Correct, and rows 2 and 3 arrive concatenated as
 *     "0 1 0 1 11 0 1 0 11 1 0 0 0", which is three rows in one run.
 *   - page 902, Example 4's verification of OR from three NANDs (12 cells),
 *     same concatenation. Correct.
 *   - page 920, Addendum E's six-gate column table (24 cells). Correct,
 *     including XNOR = 1,0,0,1.
 *   - page 921, Example E.1's eight-slice reading (24 cells). Correct and
 *     self-consistent: repeated input combinations give the same output every
 *     time, which is the check the method itself prescribes.
 *   - page 922, Practice E.1 and E.2 (two six-slice trains). The outputs are
 *     right; only one slice LABEL in E.1's answer is wrong, logged as A9.
 * THE WINGDINGS-DIGIT ARTEFACT DOES NOT APPEAR IN THIS RANGE. It was searched
 * for specifically, since a stray 1 or 0 in a truth table is invisible: no
 * bare digit follows a symbol or terminates a check anywhere in pages 859 to
 * 923, and every standalone digit line in the extraction is either a
 * superscript, a subscript or a page number. The one digit fault found is the
 * OPPOSITE defect: page 899's footer, which should read 31, extracts as "1".
 * A dropped digit, in a page number, harmless.
 *
 * SOURCE DAMAGE. Pages 859 to 923 have their own dialect and every passage
 * below was re-authored from context, never transcribed. What this range
 * actually contains, measured over 114,427 extracted characters before any of
 * it was read:
 *
 *   - MATHEMATICAL ALPHANUMERIC (U+1D400 to U+1D7FF), 2,613 instances across
 *     48 code points, and they are the chapter's entire symbol vocabulary:
 *     math-italic V (276), A (253), B (219), I (204), T (147), n (143),
 *     e (102), C (101), E (93), Z (93), g (90), S (86), Y (65), R (61),
 *     L (54), k (51), i (46), b (46), plus the Greek eta (18), lambda (18),
 *     nu (16), sigma (15), mu (12), epsilon (11), tau (8), pi (6) and rho (3).
 *     These draw as blank boxes on device and validate-chapters rejects them
 *     outright. Every symbol below is retyped as an ordinary character inside
 *     <i> tags.
 *   - COMBINING MACRON U+0304, 145 instances, AND IT LANDS BEFORE ITS LETTER.
 *     This is the Boolean NOT bar, and it is the single most consequential
 *     defect in the range: "NOT A" extracts as a bare macron on its own line
 *     followed by a math-italic A on the next, so De Morgan's theorem arrives
 *     as an unordered pile of bars and letters and had to be reconstructed
 *     from the logic rather than read. Every complement below is written A' or
 *     B' with a PRIME, and Topic 05 says so in the student's own terms in its
 *     first defgrid: the overbar is a combining mark this reader cannot set,
 *     the prime is the notation half the textbooks use anyway, and mixing them
 *     up is not possible because nothing else in the chapter carries a prime.
 *   - THE ESCAPE-TOKEN FAMILY, PARTIALLY, 48 in all. "\n7" is the MINUS SIGN
 *     (17: page 863's "m \n7 3" for cubic metres, page 877's forward-bias
 *     "V_b \n7 V"). "\nN" is the MULTIPLICATION SIGN (18: page 863's
 *     "1.6 \nN 10 -19 C", page 890's "30 \nN 10 -3 A"). "\nA" is the CENTRED
 *     DOT (12, ALL of them the Boolean AND operator, so page 897's gate table
 *     reads "Y = A \nA B"). One "\no" (page 885), which sits where the
 *     PARALLEL sign belongs: "series resistor + Zener \no load". Checked for
 *     and ABSENT: "\nK" (degree), "\nC" (colon), "\nH" (ellipsis), 0 each.
 *     Most of the range's minus signs (202) and multiplication signs (127)
 *     extract correctly, so this is localised font fallback rather than a
 *     whole-range substitution.
 *   - THE DEGREE SIGN IS FINE HERE, unlike every other range logged. Ten
 *     ordinary U+00B0 and four U+2218 RING OPERATOR, and ALL FOURTEEN are in
 *     the addendum's temperature coefficients. The main body, pages 859 to
 *     905, contains no degree sign at all, because nothing in it is measured
 *     in degrees Celsius. Every degree below is U+00B0.
 *   - U+20D7 COMBINING ARROW, exactly ONE instance (page 875, the depletion
 *     field in Derivation A), and it lands BEFORE its letter, so the field
 *     reads as a bare arrow on its own line then "E". Forbidden in output; the
 *     field below is a plain italic E with its direction stated in words, and
 *     stated the same way every time (from the n-side to the p-side).
 *   - THE fi LIGATURE IS DELETED RATHER THAN SUBSTITUTED, but only once:
 *     page 859's "Syllabus scope (read this rst)" for "read this first". Every
 *     other fi in the range survives ("Definitions", "fixed", "efficiency",
 *     "identified", "sufficient" all extract correctly), so this is a single
 *     glyph and not a systematic loss. Checked for and absent: U+FB00 to
 *     U+FB02 as literal ligature characters, 0 each.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout, and this range's
 *     instances are unusually dense in the exam-facing prose. Actually
 *     paraphrased below: "silicon≈ 1.1eV, germanium≈ 0.7eV" (p.860),
 *     "conducts via twocarriers at once" (p.861), "the germaniumdiode reaches
 *     its 0.3 V threshold first" (p.879), "it clampsthe shared voltage"
 *     (p.879), "an intrinsic semiconductor at300K" (p.868), "a student who
 *     memorises only the dopedcases" (p.869), "the diode isforward biasedand
 *     conducts" (p.879), "reverse bias gives a current whosechangeis large"
 *     (p.890), "more efficient (eta_max = 81.2% vs40.6%for half-wave)"
 *     (p.881), "the answer is always NOT, answerit on sight" (p.904).
 *     Whole runs of Section 2's symbol dictionaries arrive with every space
 *     between a symbol and its gloss removed.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively, and
 *     here they are worse than usual because the chapter's symbols are almost
 *     all subscripted: n_e, n_h, n_i, E_g, k_B, V_b, V_Z, I_Z, I_L, R_S, r_f,
 *     I_dc, I_rms, f_in, f_out, V_OC and I_SC each break into two or three
 *     lines every time they appear, and a power of ten into four. Every
 *     numerical answer below was recomputed independently, which is the check
 *     that these were reassembled correctly.
 *   - TABLES ARRIVE AS UNBROKEN DIGIT RUNS. See TRUTH TABLES above; this is
 *     the range's most dangerous single defect and the reason every table was
 *     split by hand and checked against the gate rather than read.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: octal escapes of the
 *     \050 kind (0), leaked LaTeX delimiters (0 of "\(", "\[" or "$"), HTML
 *     entities (0), and the ASCII heading shifts of +29, -29 and +46 that
 *     other ranges logged (0; all 32 "Section N:" headings and all four Cheat
 *     Sheet Box headings read correctly).
 *   - NO SILENTLY EMPTY PAGES. Every page from 859 to 925 was measured for
 *     extracted length before any of it was read. The shortest are 858 (110
 *     characters, just outside the range), 923 (184), 876 (265), 866 (274)
 *     and 891 (304), and the short ones are all the book's own "CHAPTER 14
 *     FIGURES"
 *     pages, each holding one or two figure captions and nothing else. No run
 *     of blank pages exists anywhere in 859 to 925, so no pdftoppm render was
 *     needed.
 *
 * CONVENTIONS, DECLARED ONCE AND HELD.
 *   CURRENT IS CONVENTIONAL, AND THERE ARE TWO CARRIERS. Topic 01's `def` on
 *   the hole and the `p` beside it fix this for the whole chapter, because
 *   getting it wrong inverts every diode explanation afterwards: current is
 *   the flow of POSITIVE charge by convention, so it runs the way a positive
 *   carrier would go and OPPOSITE to the electrons that are usually doing the
 *   carrying; in a semiconductor BOTH electrons and holes carry it, and they
 *   carry it in opposite directions while adding to the same conventional
 *   current; and a hole is a VACANCY that behaves like a positive carrier, not
 *   a particle. It earns Topic 01's first `mistakes` item, as the brief asks.
 *   FORWARD AND REVERSE BIAS ARE DEFINED BY WHICH TERMINAL MEETS WHICH REGION,
 *   never by which way the diode is drawn on the page. Topic 02's `def` fixes
 *   it: FORWARD BIAS is the p-region to the battery's POSITIVE terminal and
 *   the n-region to the NEGATIVE; REVERSE BIAS is the n-region to POSITIVE and
 *   the p-region to NEGATIVE. Every circuit, every example and every figure
 *   caption below states the connection in those words before it states the
 *   consequence, and Topic 02's designed `circuit` figure makes the point by
 *   drawing the diode in exactly the SAME place pointing exactly the SAME way
 *   in both chips, and reversing only the battery. Two pictures that differ by
 *   one symbol, and the bias is opposite in them.
 *   THE COMPLEMENT IS A PRIME. See SOURCE DAMAGE. A' means NOT A.
 *   CONSTANTS. e = 1.6 x 10^-19 C, k_B = 1.38 x 10^-23 J/K = 8.62 x 10^-5
 *   eV/K, h = 6.63 x 10^-34 J s, c = 3 x 10^8 m/s, hc = 1240 eV nm. Barrier
 *   potentials: silicon 0.7 V, germanium 0.3 V. Band gaps: silicon 1.1 eV,
 *   germanium 0.7 eV, diamond 5.4 eV. Thermal voltage V_T = 25.9 mV at 300 K.
 *   SIGNIFICANT FIGURES. Two or three everywhere, never a calculator tail.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A K (mass,
 * length, time, CURRENT and temperature; the ampere is the SI base unit here
 * and charge is derived as [T A]). Thirty lines checked, thirty consistent,
 * none rejected. Topic 05 has no dimensional content at all, by its nature,
 * and the last two entries say why.
 *
 *   T1  n_e = n_h = n_i: [L-3] throughout. A number density.
 *       n_e n_h = n_i^2: [L-6] on both sides. The mass-action law is an
 *       equation between SQUARED densities, which is the check that catches a
 *       student who writes n_e + n_h = 2 n_i instead.
 *       n_i proportional to T^(3/2) exp(-E_g/2 k_B T): the exponent must be
 *       pure, and it is: E_g is [M L2 T-2], k_B is [M L2 T-2 K-1], T is [K],
 *       so E_g/(k_B T) is dimensionless. The T^(3/2) prefactor carries the
 *       dimension on the proportionality constant, not on T itself.
 *       sigma = e(n_e mu_e + n_h mu_h): [T A][L-3][M-1 T2 A] =
 *       [M-1 L-3 T3 A2]. And the siemens per metre is 1/(ohm metre) =
 *       1/[M L3 T-3 A-2] = [M-1 L-3 T3 A2]. They agree, which is the whole
 *       claim that a conductivity can be built out of carrier counts.
 *       mu = v_d/E: [L T-1]/[M L T-3 A-1] = [M-1 T2 A]. A mobility is not a
 *       velocity, and this is the line that proves it.
 *       rho = 1/sigma: [M L3 T-3 A-2], the ohm metre.
 *       E_g(Si) = 1.21 - 3.60 x 10^-4 T eV: the coefficient carries eV/K, so
 *       the subtraction is between two energies. A bare number there would be
 *       the commonest way to get this wrong.
 *   T2  V_eff = V_b - V (forward) and V_b + V (reverse): volts throughout,
 *       [M L2 T-3 A-1]. A barrier is a POTENTIAL, not an energy, and writing
 *       it in eV instead of V is caught here immediately.
 *       I = (V_battery - V_b)/(R + r_f): [M L2 T-3 A-1]/[M L2 T-3 A-2] = [A].
 *       The numerator is a difference of two volts, so the barrier drop can
 *       only ever be SUBTRACTED, never divided by.
 *       r_d = Delta-V/Delta-I: [M L2 T-3 A-2], an ohm, the same dimension as
 *       an ordinary resistance and a different number, which is the point.
 *       E = V_b/d: [M L2 T-3 A-1]/[L] = [M L T-3 A-1], a field in volts per
 *       metre.
 *       I = I_S(exp(eV/k_B T) - 1): eV is [T A][M L2 T-3 A-1] = [M L2 T-2],
 *       an energy, and k_B T is [M L2 T-2], an energy, so the exponent is
 *       pure. The "- 1" then subtracts a pure number from a pure number and
 *       the whole bracket multiplies a current.
 *       V_T = k_B T/e: [M L2 T-2]/[T A] = [M L2 T-3 A-1], a volt. This is the
 *       line that says the thermal VOLTAGE is a voltage and not an energy,
 *       and 25.9 mV against 25.9 meV is a real and common slip.
 *   T3  eta = 0.406 R_L/(r_f + R_L) and 0.812 R_L/(r_f + R_L): an ohm over an
 *       ohm, dimensionless, as an efficiency must be. Both ceilings, 40.6 and
 *       81.2 per cent, are pure numbers with no unit attached.
 *       I_dc = I_m/pi and 2 I_m/pi: [A]. Dividing by pi cannot change a
 *       dimension, which is why the half-wave and full-wave forms differ only
 *       by a factor of two.
 *       I_rms = I_m/2 (half-wave) and I_m/root 2 (full-wave): [A].
 *       ripple factor r = root((I_rms/I_dc)^2 - 1): a ratio of two currents,
 *       so dimensionless, and the "- 1" is legal only because of that.
 *       I_m = V_m/(r_f + R_L): [A].
 *       f_out = f_in and 2 f_in: [T-1], a hertz. A rectifier changes the
 *       NUMBER, never the dimension.
 *       PIV = V_m (half-wave and bridge) and 2 V_m (centre-tap): volts,
 *       [M L2 T-3 A-1]. A peak inverse voltage is a voltage like any other,
 *       and the factor of two is a count of transformer windings, not a
 *       change of quantity.
 *       tau = R_L C: [M L2 T-3 A-2][M-1 L-2 T4 A2] = [T], a second. The
 *       filter's whole argument is that this time must be long compared with
 *       the gap between pulses, and both sides of that comparison are seconds.
 *   T4  I_in = I_Z + I_L: [A], and it is Kirchhoff's junction rule, quoted
 *       from Chapter 3 rather than rederived.
 *       R_S = (V_in - V_Z)/(I_Z + I_L): [M L2 T-3 A-1]/[A] = [M L2 T-3 A-2],
 *       an ohm.
 *       V_RS = (I_Z + I_L) R_S: [A][M L2 T-3 A-2] = a volt.
 *       I_Z,max = P/V_Z: [M L2 T-3]/[M L2 T-3 A-1] = [A]. A power rating
 *       divided by a voltage IS a current, which is the whole trick of the
 *       Zener sizing question.
 *       h nu = E_g: [M L2 T-1][T-1] = [M L2 T-2], an energy on both sides.
 *       lambda = hc/E_g: [M L2 T-1][L T-1]/[M L2 T-2] = [L], a length. This
 *       is the check that stops hc being written as h/c.
 *       lambda(nm) = 1240/E_g(eV): a numerical shortcut, dimensionally
 *       meaningless on its face and legal only because both units are named.
 *       The full form above is what it abbreviates, and the note says so.
 *   T5  Boolean variables are DIMENSIONLESS binary states. There is no SI
 *       unit and no dimensional formula anywhere in Topic 05, and the source
 *       says so explicitly (page 899), which is why that topic's checkpoint
 *       carries truth tables where the others carry formulas.
 *       n inputs give 2^n rows: a pure count on both sides.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   BOTH WORKHORSE SEMICONDUCTORS ABSORB INFRARED, and the arithmetic is the
 *   same one line twice. Silicon at E_g = 1.1 eV has a threshold wavelength
 *   of 1240/1.1 = 1130 nm and germanium at 0.7 eV has 1240/0.7 = 1770 nm.
 *   The visible band ends at about 700 nm, so both thresholds sit well into
 *   the infrared: neither can emit visible light and both are transparent to
 *   nothing a human can see. That single fact explains why LEDs are made of
 *   compounds and not of silicon, and Topic 04 turns it into an MCQ.
 *   A FORWARD SILICON DIODE DROPS ABOUT 0.7 V WHATEVER THE CURRENT, and the
 *   reason is in Topic 02's own Example 3: the voltage needed to DOUBLE the
 *   current is V_T ln 2 = 25.9 x 0.693 = 18 mV, and to raise it TENFOLD is
 *   V_T ln 10 = 25.9 x 2.303 = 59.6 mV, both independent of where you start.
 *   So dragging a diode from 1 mA to 100 mA, a hundredfold, costs 2 x 59.6 =
 *   119 mV. The drop moves by a tenth of a volt while the current moves by two
 *   orders of magnitude, which is precisely what licenses the "replace the
 *   diode by a 0.7 V battery" model the whole of Topics 02 and 03 run on.
 *   THE RECTIFIER CEILINGS ARE CEILINGS. eta = 0.406 R_L/(r_f + R_L) is
 *   strictly below 0.406 for any r_f > 0 and reaches it only in the limit
 *   r_f = 0, and the same for 0.812 full-wave. Topic 03's Example 1 lands on
 *   39.8 per cent with r_f = 20 ohm against R_L = 980 ohm, which is 98 per
 *   cent of the ceiling and correctly BELOW it. Any answer above 40.6 or 81.2
 *   per cent is arithmetically impossible, and Topic 03's mistakes item says
 *   so as a check a student can run in one second.
 *   THE CEILINGS THEMSELVES ARE ROUNDED UP, AND THIS IS REPORTED RATHER THAN
 *   CORRECTED. Deriving them from the definition, eta = I_dc^2 R_L /
 *   (I_rms^2 (r_f + R_L)), gives (4/pi^2) R_L/(r_f + R_L) for half-wave and
 *   (8/pi^2) for full-wave, and 4/pi^2 = 4/9.8696 = 0.40528 while
 *   8/pi^2 = 0.81057. So the exact ceilings are 40.5 and 81.1 per cent, and
 *   40.6 and 81.2 are a conventional rounding up that every Indian textbook,
 *   every syllabus and this source all print. They are NOT changed below: a
 *   student who writes 40.5 in an exam will be marked wrong, the gap is 0.1
 *   of a percentage point and never shows at exam precision, and the brief's
 *   own plausibility bounds are stated as 40.6 and 81.2. Topic 03's
 *   efficiency `formula` note gives both numbers and says which is which, so
 *   the student who checks 4/pi^2 on a calculator is not left confused.
 *   THE RIPPLE FACTOR IS DIMENSIONLESS AND ORDERED. r = 1.21 half-wave and
 *   0.48 full-wave, both pure numbers, and the full-wave figure must be the
 *   smaller because its pulses arrive twice as often and the capacitor has
 *   half as long to sag. Derived rather than quoted:
 *   half-wave I_rms/I_dc = (I_m/2)/(I_m/pi) = pi/2 = 1.571, so
 *   r = root(1.571^2 - 1) = root(1.467) = 1.211; full-wave
 *   I_rms/I_dc = (I_m/root 2)/(2 I_m/pi) = pi/(2 root 2) = 1.111, so
 *   r = root(1.2337 - 1) = root(0.2337) = 0.483.
 *   THE ZENER SIZING ANSWERS ARE THE RIGHT SIZE. A 2 W Zener at 10 V can pass
 *   200 mA, and 200 mA through a 50 ohm resistor with 10 V across it is 2 W in
 *   the resistor too, so both parts of Topic 04's Example 2 are dissipating
 *   watts, not milliwatts, which is why such a regulator needs a heatsink and
 *   why nobody builds a 20 W supply this way.
 *   A SOLAR CELL'S OPEN-CIRCUIT VOLTAGE IS BELOW ITS BAND GAP IN VOLTS.
 *   Silicon's E_g/e is 1.1 V and a real cell gives 0.55 to 0.7 V, about half.
 *   Topic 04 states the inequality and the reason (the cell is a forward-
 *   biased diode at open circuit, and a diode cannot hold a forward voltage
 *   anywhere near its gap), and never quotes a V_OC above 0.7 V.
 *
 * LIMITING CASES, used where they teach something.
 *   THE DIODE EQUATION AT ZERO BIAS. I = I_S(e^0 - 1) = I_S(1 - 1) = 0
 *   EXACTLY. Not approximately zero: exactly zero, and it must be, because an
 *   unbiased junction in the dark with nothing across it cannot deliver
 *   current to anything. That single evaluation is what the "- 1" is FOR, and
 *   Topic 02's deriv ends on it, because a student who drops the "- 1"
 *   everywhere gets I = I_S at zero volts and never notices.
 *   THE DIODE EQUATION DEEP IN REVERSE. With V large and negative, e^(V/V_T)
 *   goes to zero and I goes to I_S(0 - 1) = -I_S. So the reverse current
 *   SATURATES at a fixed value set by thermally generated minority carriers,
 *   independent of how hard you pull, which is exactly what "reverse
 *   saturation current" means and why the reverse branch of the I-V curve is
 *   flat rather than sloping. At room temperature -0.1 V is already deep:
 *   e^(-0.1/0.0259) = e^-3.86 = 0.021, so the current is within 2 per cent of
 *   -I_S at a tenth of a volt. Topic 02's I-V figure draws the flat branch
 *   because of this number, and its caption gives it.
 *   ZERO FORWARD RESISTANCE. eta = 0.406 R_L/(r_f + R_L) goes to 0.406 as
 *   r_f goes to zero and to zero as r_f grows without bound, so the ideal
 *   diode is the best a half-wave rectifier can ever be and a lossy one
 *   delivers nothing. Both ends are physical.
 *   INFINITE FILTER CAPACITANCE. tau = R_L C goes to infinity, the capacitor
 *   never sags between pulses, and the output is a flat DC line at the peak
 *   voltage with zero ripple. Real capacitors are finite, so real supplies
 *   ripple; the limit tells you which way to push.
 *   A GATE WITH ITS INPUTS TIED. NAND(A, A) = (A.A)' = A' and NOR(A, A) =
 *   (A + A)' = A', both by idempotence, so both universal gates collapse to
 *   an inverter. AND(A, A) = A and OR(A, A) = A collapse to a plain wire. The
 *   four cases together are Topic 05's fastest exam result and its proc's
 *   last step.
 *   T = 0 K. n_i goes to zero, the valence band is full, the conduction band
 *   is empty, and a pure semiconductor is a perfect insulator. Topic 01's
 *   first MCQ is exactly this and the deriv reaches it from the 4N counting
 *   argument rather than asserting it.
 *
 * SEAMS: what is quoted as already known, and from where. Every file named
 * here was checked to exist in content/textbooks and to be registered in
 * lib/textbooks.ts before it was leaned on.
 *   - phy-12-03-current-electricity.ts, which is the chapter this one stands
 *     on. Quoted and NOT rederived: the definition of current I = dq/dt and
 *     that it is CONVENTIONAL, the flow of positive charge (its Topic 01);
 *     Ohm's law V = IR and the fact that it is a property of some materials
 *     rather than a law of nature, which is what lets Topic 02 say a diode is
 *     non-ohmic and mean something (its Topic 01); resistivity, conductivity
 *     and sigma = 1/rho (its Topic 01); that a metal's resistance RISES with
 *     temperature while a semiconductor's FALLS, which that chapter states
 *     with the same free-electron reasoning and which Topic 01's MCQ here
 *     turns into a two-material comparison (its Topic 01); series and parallel
 *     reduction (its Topic 02); and Kirchhoff's junction and loop rules, which
 *     Topic 04's Zener regulator uses without proof (its Topic 05). Its
 *     circuit figures are also the pattern every `circuit` frame below
 *     follows, down to the grid conventions.
 *   - phy-12-12-atoms.ts, for the photon and E = h nu, and for hc = 1240 eV
 *     nm which Topic 04 runs on. That chapter derives the constant in its own
 *     header (1239.8 with unrounded constants, 1243 with the classroom ones)
 *     and states it in a `formula` note; Topic 04 here quotes 1240 and names
 *     the chapter rather than deriving it again. Its `levels` figures are the
 *     pattern for Figures 14.1 and 14.3 below, and its header's four reported
 *     gaps in `levels` were read before either was drawn. See RENDERER FACTS.
 *   - phy-12-11-dual-nature.ts, for the photoelectric threshold idea: a
 *     photon does something only if its energy clears a gap. Topic 04's
 *     photodiode threshold is that idea with E_g in place of the work
 *     function, and its `p` says so and names the chapter.
 *   - phy-12-02-potential-capacitance.ts, for a capacitor storing charge, for
 *     Q = CV, and for the time constant of an RC discharge. Topic 03's filter
 *     is one application of it and rederives nothing.
 *   - phy-12-07-alternating-current.ts, for peak against rms and for the
 *     idea that a sinusoid's average over a full cycle is zero. Topic 03's
 *     rectifier metrics assume both. NOTE that this is the chapter carrying
 *     one of the two errata entries, on its page 14; the erratum is in a
 *     practice problem about series LCR resonance and touches nothing quoted
 *     here.
 *   - Chapter 13, Nuclei, was being written concurrently by a sibling and had
 *     landed clean (5 topics, 139 blocks) by the time this chapter's gates
 *     were run. It is NOT quoted anywhere below and nothing was rewritten on
 *     its account: semiconductor electronics needs nothing from nuclear
 *     physics, and no block here assumes it exists. Checked rather than
 *     assumed, since the two files were open at the same time.
 *
 * SEVENTEEN FIGURES: 12 DRAWN OF THE 12 THE SOURCE NAMES, PLUS 5 DESIGNED.
 * The source names exactly twelve, on its six "CHAPTER 14 FIGURES" pages
 * (862, 864, 866, 873, 876, 878, 886, 888, 891, 898, 900), and every one is
 * drawn below.
 *   14.1 (page 862) conductor, insulator and semiconductor band diagrams,
 *     Topic 01, `levels`, THREE CHIPS. THE PANEL RULE IS THE REASON: the
 *     source asks for "three side-by-side" panels, which at 308px would be
 *     100px each and unreadable, and the comparison is better made by
 *     switching chips because the valence band and the top of the frame do
 *     not move between them, so the only thing that changes is the gap.
 *   14.2 (page 864) band splitting against interatomic distance, Topic 01,
 *     `plot`, one chip. The two bands are `polys` whose envelopes fan out
 *     leftwards from a sharp level at large r, with a dashed line at the
 *     equilibrium spacing r0.
 *   14.3 (page 866) donor and acceptor levels, Topic 01, `levels`, TWO CHIPS
 *     for the same reason as 14.1. The donor and acceptor levels are drawn
 *     FURTHER from their bands than they really sit, and the captions say so
 *     in the student's own terms: 0.01 eV against a 1.1 eV gap is one part in
 *     a hundred and ten, which at 277px is two pixels, so a true-scale line
 *     would be indistinguishable from the band edge and its label would land
 *     on the band's. Exaggerated and admitted beats accurate and invisible.
 *   14.4 (page 873) the junction at equilibrium, Topic 02, `plot`, THREE
 *     CHIPS: equilibrium, forward bias, reverse bias. The depletion region is
 *     a dashed `polys` rectangle whose WIDTH changes between chips, which is
 *     the whole content of the figure, and the fixed ions are `marks` with
 *     plus and minus glyphs so the picture reads with colour removed.
 *   14.5 (page 876) the band-bending picture, Topic 02, `plot`, TWO CHIPS
 *     (equilibrium and forward bias). `levels` cannot draw this: its rows are
 *     horizontal by construction and band bending is precisely a slope.
 *   14.6 (page 878) the diode I-V characteristic, Topic 02, `plot`, TWO
 *     CHIPS. Drawn with `{ c: 'pts' }` because the characteristic is not any
 *     named function and its asymmetry is the entire point. Both axes carry
 *     units and ticks: an I-V curve without them is a shape.
 *   14.7 (page 878) the capacitor-input filter, Topic 03, `plot`, TWO CHIPS
 *     (unfiltered, filtered) rather than the source's stacked traces.
 *   14.8 (page 886) the four special diodes, Topic 04, `circuit`, FOUR CHIPS
 *     rather than the source's 2x2 panel. Each chip is one device in its own
 *     bias condition inside a dashed `regions` box that NAMES that condition,
 *     which is the fact the whole subtopic turns on.
 *   14.9 (page 888) the Zener voltage regulator, Topic 04, `circuit`, one
 *     chip, with the three currents as `currents` arrows and the output as a
 *     `regions` box.
 *   14.10 (page 891) the illuminated solar cell in the fourth quadrant,
 *     Topic 04, `plot`, TWO CHIPS, paired with the Zener characteristic so a
 *     student sees the two I-V curves that are not ordinary diodes together.
 *     It is DRAWN BEFORE 14.9 in the topic, out of the source's numbering,
 *     because the Zener curve it is paired with belongs beside the Zener's
 *     own definition and the regulator circuit belongs later. The source
 *     numbers by where a figure falls in ITS text; this chapter's order is
 *     its own.
 *   14.11 (page 898) the gate symbols, Topic 05, `plot`, THREE CHIPS with the
 *     gates STACKED VERTICALLY inside each chip rather than in the source's
 *     row. A row of six symbols at 308px is 51px per gate; three stacked at
 *     full width are legible, and the stack also groups them the way the
 *     algebra does (basic, bubbled, exclusive).
 *   14.12 (page 900) the universal NAND constructions, Topic 05, `flow`,
 *     THREE CHIPS: NOT, AND, OR, each from NANDs alone.
 * The five designed here, and why each earns its space:
 *   D1 (Topic 01) carrier concentration against temperature, and ln sigma
 *     against 1/T. Two chips. The source states the exponential law four
 *     times, builds two examples and two practice items on it, and never
 *     draws it; the second chip is the straight line whose SLOPE is the band
 *     gap, which is Example 3's closing sentence and the only experimental
 *     route to E_g a Class 12 student can follow.
 *   D2 (Topic 02) the same diode biased both ways, `circuit`, two chips. The
 *     brief requires forward and reverse bias to be defined by which terminal
 *     meets which region rather than by a picture, and this figure is that
 *     rule made visible: the diode symbol points the SAME way in both chips
 *     and only the battery is reversed, so the picture cannot be read off the
 *     arrow.
 *   D3 (Topic 03) half-wave and full-wave bridge rectifier circuits,
 *     `circuit`, TWO CHIPS not two panels. The bridge's four diodes sit
 *     inside a dashed `regions` box, which is the one place in the chapter
 *     where a box IS the physics: the bridge is a unit you buy as a single
 *     component.
 *   D4 (Topic 03) the three waveforms, `plot`, three chips: input sine,
 *     half-wave output, full-wave output. Same time axis and same peak in all
 *     three, so what changes between chips is only what the rectifier did.
 *   D5 (Topic 05) two switches and a bulb, `circuit`, two chips: in series
 *     (AND) and in parallel (OR). This is the source's own intuition on page
 *     896 ("two switches wired in parallel to a bulb"), drawn, and it is the
 *     only figure in the topic that is about electricity rather than algebra.
 *
 * RENDERER FACTS HONOURED, each one live while drawing this.
 *   - `circuit` GAINED frame-level `labels` and `marks` (both read in GRID
 *     units), `circuit.regions` (a dashed labelled box) and `side` on part
 *     labels shortly before this chapter, and this is the first chapter to
 *     have all four from the start. All four are used and all four held. What
 *     they bought, concretely: `regions` labels the bias condition on each of
 *     Figure 14.8's four chips and boxes the bridge in D3, which no part or
 *     node could carry; `marks` puts the plus and minus terminal signs on
 *     both batteries in D2, so forward and reverse bias are readable from the
 *     picture without trusting a colour, and marks the bridge's plus and
 *     minus output corners in D3; frame `labels` writes "p"
 *     and "n" beside the diode and "light in" beside the photodiode, which
 *     are neither parts nor nodes; and `side` moves the Zener's label to the
 *     LEFT of its branch in Figure 14.9, where the default "right of a
 *     vertical part" would have put it under the I_Z current label, and pins
 *     both switch labels ABOVE their rows in D5, where the default put the
 *     lower one through the caption text. One gap found and worked around,
 *     recorded under REQUESTS.
 *   - `circuit` label geometry, computed by hand against figures.tsx because
 *     check-figures does not inspect this kind. The mapping is
 *     X(n) = 22 + (n/gw)(308 - 44) and Y(n) = 22 + (n/gh)(height - 44) with
 *     height = round(308 x aspect). A part label sits 14px above (or 16px
 *     below, or 14px either side of) the part's midpoint at 10px; a node
 *     label sits at (-8, -8) from its node, anchor end; a current label sits
 *     at (+10, -7) from the arrow TIP, anchor start; a region label sits at
 *     (+4, -5) from the box's top-left corner, anchor start; and a frame label
 *     is centred on its own grid point. Every label in every `circuit` frame
 *     below was placed by evaluating those five formulas in a throwaway script
 *     and checking the boxes for overlap at 0.5 x fontsize per character,
 *     which is the same estimate check-figures uses. The script also tests
 *     every box against the 308px canvas, since a label anchored 'start' on
 *     the right-hand side of a grid silently walks off the edge. Two faults
 *     were found and fixed that way: a switch label overlapping a frame label
 *     in D5, and a region label overlapping a current label in Figure 14.9.
 *   - `levels` places a jump at 0.28 + (i mod 5) x 0.14 of the rail width and
 *     hangs its label 12px right of the jump's own midpoint, and Atoms
 *     reported four gaps in it. Three of the four shaped this chapter. (1) A
 *     jump's x position cannot be authored, so EVERY `levels` frame below
 *     carries exactly one jump or none at all. (2) `at` is
 *     read through `scale`, and with the default linear scale it is the
 *     energy, which is what a band diagram wants, so the inverseSquare
 *     workaround Atoms needed does not arise here. (3) A jump label always
 *     sits at the midpoint with no `at` control, so the gap arrows in 14.1
 *     and 14.3 are the only labelled jumps in their frames. (4) There is no
 *     way to mark a continuum, which this chapter never needs.
 *   - `levels` label budgets, measured: the rail runs x0 = 46 to
 *     x1 = width - 58 = 250, a left label is anchored END at x = 40 and a
 *     right label anchored START at x = 255. At 10px and 9.5px with 0.5 of
 *     the size per character that is 8 characters on the left and 11 on the
 *     right before either runs off the 308px canvas. Every row label below is
 *     at most 2 characters ("VB", "CB", "Ed", "Ea") and every right label at
 *     most 9 ("electrons", "overlaps", "filled", "holes", "empty", "full").
 *   - `flow` box text is plain SVG with NO markup and must fit its row, or it
 *     spills through the border. Figure 14.12's boxes are at most 4 characters
 *     on a line ("NAND", "A+B", "A.B", "A'"), its first frame is 3 columns by
 *     1 row and the other two are 4 by 2, and check-figures confirms every box
 *     fits both its row height and its column width.
 *   - `polys` with fill 'hatch' hatches the BOUNDING BOX, not the polygon, so
 *     NOTHING below is hatched at all. Figure 14.4's p-region and n-region
 *     blocks are axis-aligned rectangles and could have been, but they read
 *     better as 'wash', and the depletion region between them is deliberately
 *     left unfilled because "no mobile carriers in here" is the whole point.
 *   - A point label defaults to north-east, which is wrong wherever a line
 *     leaves that way. Figure 14.6's knee point carries at 'se' because the
 *     forward branch climbs steeply to its north-east, and Figure 14.10's
 *     maximum-power point carries at 'sw' for the mirror reason.
 *   - A `circle` curve is round only when both axes carry the same
 *     pixels-per-unit. NO frame below uses one: there is not a single circle
 *     in semiconductor electronics, so the aspect trap never arises. Arcs are
 *     not used either, so the screen-space arc problem that cost Ray Optics
 *     seventy degrees cannot occur here.
 *   - Two collinear strokes read as one line. Figure 14.2's band-gap arrow is
 *     offset 0.4 plot units (19px) from the dashed r0 line rather than drawn
 *     on it, and Figure 14.7's ripple arrow starts on the dashed peak line
 *     rather than running along it, with its label authored at 'start' so it
 *     hangs below that line instead of being struck through by it. Figure
 *     14.11's paired input leads are 1.5 units (43px) apart, far enough that
 *     the two never read as one thick lead.
 *   - A horizontal arrow's at 'above' label lands BELOW when the arrow points
 *     left. Figure 14.4's field arrow points from the n-side to the p-side,
 *     which is leftwards on the page, and Figure 14.5's electron arrow points
 *     the same way, so BOTH are authored at 'below' to make their labels
 *     appear above the shaft. Stated here because it reads backwards.
 *   - `plot` axis titles are placed at the AXIS, not at the frame edge:
 *     axisY sits at X(0) + 4 and axisX at X(x1) right-anchored. So a window
 *     whose zero sits near the right-hand edge pushes the y-axis title off
 *     the canvas. Figure 14.6's reverse branch met this exactly, with 0 V at
 *     x = 287 of 308, and it is why that axis reads "I (µA)" rather than
 *     "I (microamps)": six characters fit in the 21px that were left and
 *     twelve did not.
 *   - check-figures inspects only `plot`, `numberline` and `flow`. It reports
 *     no overlaps for the twenty `plot` frames and three `flow` frames below.
 *     The eleven `circuit` frames and five `levels` frames were checked by the
 *     hand script described above. Thirty-nine frames in seventeen figures.
 *
 * REQUESTS: one, small, and worked around rather than blocking.
 *   `circuit` has no way to draw a LIGHT RAY. Three chips of Figure 14.8
 *   want an arrow that is not a current and not a wire: photons going into a
 *   photodiode or a solar cell, and photons coming out of an LED. Frame-level
 *   `marks` carry glyphs and frame-level `labels` carry text, but neither
 *   draws an arrow, and `currents` draws one in amber and calls it a current,
 *   which would be a lie in a figure whose whole subject is that the energy is
 *   flowing the other way. Figure 14.8 says "light in" and "light out" in
 *   frame `labels` instead, which works and is duller than it should be. What
 *   would fix it is the smallest possible addition: `arrows` on a `circuit`
 *   frame, read in grid units, with the same shape FigureArrow already has.
 *   Nothing else is missing. `regions`, `marks`, `labels` and `side` covered
 *   every other case this chapter met, which is what the two chapters that
 *   asked for them were hoping for.
 *
 * NOTES for whoever comes next.
 *   - THE PRIME NOTATION FOR THE BOOLEAN COMPLEMENT is a decision, not an
 *     accident, and it is stated to the student rather than hidden. The
 *     alternative was U+0304 COMBINING MACRON over an italic letter, which is
 *     what the source uses and what NCERT prints. It was rejected because a
 *     combining mark over a glyph in a fallback face is exactly the failure
 *     mode nobody can test from a laptop, and because the source's own
 *     extraction proves how badly it travels: 145 macrons, every one of them
 *     landing before its letter. If a future reader gains a real overline,
 *     Topic 05's first defgrid is the one place that has to change.
 *   - THIS IS THE LAST CHAPTER OF THE CORPUS. Nothing downstream quotes it.
 *     What it could give a future chapter, if one is ever added: the two-
 *     carrier conductivity sigma = e(n_e mu_e + n_h mu_h) generalises Chapter
 *     3's single-carrier form and would belong in any treatment of conduction
 *     in electrolytes or plasmas, and Topic 05's Boolean algebra is the only
 *     place in either book where an operation is defined by a table rather
 *     than by an equation.
 *   - TRANSISTORS ARE NOT HERE ON PURPOSE. The source removed them from all
 *     three exams and says so twice; a future syllabus change would need a
 *     sixth topic, which the validator's ceiling allows exactly once.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12Semiconductors: Chapter = {
  "chapter": "14",
  "title": "Semiconductor Electronics",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Energy Bands and Doping",
      "chip": "01 THE GAP",
      "kalam": "how big is the climb out of the crowd",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>Read the scope first, because half this chapter is not on every paper.</b><br>Topics 01 to 03 below are common to CBSE Boards, JEE Main and NEET. Topics 04 and 05, special-purpose diodes and logic gates, are in <b>JEE Main and NEET 2026</b> but have been <b>removed from the CBSE syllabus</b>. Junction transistors, amplifiers and oscillators are removed from all three and appear nowhere in this chapter: if you meet them in an older book, they are no longer examinable.<br><br><b>01 · Energy Bands and Doping</b><br>The conceptual bedrock, and it shows up everywhere. CBSE Boards almost always carry a 1 to 3 mark question on band classification, on what doping means, or on carrier type. NEET asks 1 to 2 single-line conceptual questions. JEE Main folds it into numericals on the mass-action law and on conductivity, and JEE Advanced pushes it into exponential temperature dependence and band-gap estimation.<br><br><b>02 · The p-n Junction and the Biased Diode</b><br>The workhorse. CBSE Boards almost guarantee a 2 to 3 mark question on junction formation or on biasing. NEET leans on quick conceptual traps: bias direction, reverse saturation current. JEE Main loves circuit numericals with a barrier drop; JEE Advanced reaches for the ideal-diode exponential.<br><br><b>03 · Rectifiers and Filters</b><br>The application half of the same subtopic, and the half a board paper is most likely to draw. Expect a circuit and its output waveform for 2 to 3 marks, the frequency and efficiency pair as a one-liner in NEET, and an efficiency or ripple numerical in JEE Main.<br><br><b>04 · Special-Purpose Diodes</b><br>Out of CBSE, firmly in JEE Main and NEET. NEET treats these as high-yield fact questions; JEE Main reliably sets a Zener voltage-regulator numerical. JEE Advanced probes the emission and absorption symmetry of LED and photodiode.<br><br><b>05 · Digital Electronics and Logic Gates</b><br>Out of CBSE, in JEE Main and NEET, and a reliable scoring zone because the questions are pattern-based rather than calculation-heavy. NEET sets 1 to 2 questions on gate identification, truth tables or universal gates. JEE Main asks for the Boolean expression of a combination circuit."
        },
        {
          "t": "p",
          "html": "Picture a single silicon atom floating alone in empty space. Its electrons are allowed to sit only at very specific, sharply defined energies, like marked seats in an otherwise empty hall. Nothing in between is permitted.<br><br>Now bring billions of those atoms together into a solid crystal. Every atom's neighbours are crowding in, and no two electrons in the whole crystal experience exactly the same electrical surroundings. Pauli's exclusion principle forbids any two electrons from occupying the identical quantum state, so nature resolves the crowding by <b>splitting</b> each sharp atomic level into an enormous number of very closely spaced levels. There are so many of them, packed so tightly, that they smear into what we call an <b>energy band</b>: a near-continuous range of allowed energies."
        },
        {
          "t": "think",
          "html": "picture a mumbai local at peak hour. the valence band is the jam-packed general compartment: every spot taken, bodies pressed together, nobody able to actually <b>move</b> even though everyone is technically there. the conduction band is the empty luggage deck above, where anyone who climbs up can walk around freely. the band gap is the height you have to climb to get from the packed floor to that empty deck. small climb, a few passengers make it and start moving. enormous climb, nobody moves at all."
        },
        {
          "t": "p",
          "html": "Two of these bands matter for us, and only two.<br><br>The <b>valence band</b> holds the energies of the outermost electrons, the ones involved in bonding. The <b>conduction band</b> sits just above it and is normally empty; an electron that reaches it is no longer tied to any single atom and is free to drift through the crystal and carry current. Between the top of the valence band and the bottom of the conduction band there is usually a stretch of <b>forbidden</b> energies where no electron is allowed to exist at all.<br><br>The width of that no-man's-land is the whole chapter's first number."
        },
        {
          "t": "def",
          "term": "Energy band gap",
          "html": "The energy <i>E</i><sub>g</sub> separating the top of the valence band from the bottom of the conduction band, measured in electronvolts (eV) or joules (J), with 1 eV = 1.6 × 10<sup>−19</sup> J. It is the price of admission: an electron must be given at least <i>E</i><sub>g</sub> to leave the valence band and become a free carrier. No allowed state exists inside the gap, so an electron cannot stop halfway."
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE 14.1 · ONE PICTURE CLASSIFIES EVERY SOLID",
          "chips": ["conductor", "insulator", "semiconductor"],
          "captions": [
            "A conductor (a metal). The conduction band either overlaps the valence band or is already partly filled, so there is effectively no climb at all: electrons move at the slightest push and the gap is zero. Notice that the valence band and the top of the frame are drawn in exactly the same place on all three chips, so the only thing that changes as you switch between them is the size of the gap. That is the whole comparison, and it is why these are three chips rather than three panels squeezed side by side.",
            "An insulator. The gap is huge, above 3 eV, and diamond's is about 5.4 eV. Thermal energy at room temperature is roughly 0.026 eV, a hundred times too small even to think about the climb, so the valence band stays completely full, the conduction band stays completely empty, and no conduction occurs at any voltage you would survive applying.",
            "A semiconductor. Same structure as the insulator, but the gap is small: below 3 eV, and about 1.1 eV for silicon and 0.7 eV for germanium. A modest amount of thermal energy now lifts a small but meaningful number of electrons across, so the conductivity sits between a metal's and an insulator's. Every electron that makes the climb leaves an empty seat behind it in the valence band, and that empty seat conducts too."
          ],
          "frames": [
            {
              "aspect": 0.9,
              "levels": {
                "rows": [
                  { "at": 0, "label": "VB", "right": "filled" },
                  { "at": 11, "label": "CB", "right": "overlaps" }
                ],
                "bands": [
                  { "from": 0, "to": 3, "fill": "wash" },
                  { "from": 2.6, "to": 11, "fill": "wash" }
                ]
              }
            },
            {
              "aspect": 0.9,
              "levels": {
                "rows": [
                  { "at": 0, "label": "VB", "right": "filled" },
                  { "at": 11, "label": "CB", "right": "empty" }
                ],
                "bands": [
                  { "from": 0, "to": 3, "fill": "wash" },
                  { "from": 8, "to": 11, "fill": "wash" }
                ],
                "jumps": [{ "from": 3, "to": 8, "label": "Eg > 3 eV", "tone": "amber" }]
              }
            },
            {
              "aspect": 0.9,
              "levels": {
                "rows": [
                  { "at": 0, "label": "VB", "right": "holes" },
                  { "at": 11, "label": "CB", "right": "electrons" }
                ],
                "bands": [
                  { "from": 0, "to": 3, "fill": "wash" },
                  { "from": 4.1, "to": 11, "fill": "wash" }
                ],
                "jumps": [{ "from": 3, "to": 4.1, "label": "Eg < 3 eV", "tone": "amber" }]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three classes, by their gap",
          "rows": [
            { "k": "Conductor (metal)", "v": "<i>E</i><sub>g</sub> ≈ 0. Bands overlap or the conduction band is already partly filled. Resistance RISES with temperature." },
            { "k": "Semiconductor", "v": "<i>E</i><sub>g</sub> below 3 eV. Silicon 1.1 eV, germanium 0.7 eV. Resistance FALLS with temperature." },
            { "k": "Insulator", "v": "<i>E</i><sub>g</sub> above 3 eV. Diamond about 5.4 eV. Effectively no free carriers at any ordinary temperature." },
            { "k": "Elemental semiconductor", "v": "One element, from Group 14: silicon and germanium. These run everyday electronics." },
            { "k": "Compound semiconductor", "v": "Two or more elements: GaAs, GaP, CdS, InP. The gap can be engineered, which is why LEDs and solar cells are made of these and not of silicon." }
          ]
        },
        {
          "t": "p",
          "html": "Where does a band actually come from? Not from a rule, but from squeezing.<br><br>Take <i>N</i> isolated silicon atoms very far apart. Each has its own sharp levels, and because the atoms cannot feel each other, every atom's level sits at exactly the same energy as every other's. Now push them together. As the spacing shrinks, each atom's electrons start to feel its neighbours, the identical levels are forced apart, and by the time the atoms are at the spacing a real crystal actually sits at, what was one sharp line has fanned into a band a few electronvolts wide.<br><br>Read the figure below from the right, where the atoms are far apart, towards the left, where they are crushed together. The vertical line marks the real crystal."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.2 · WHERE A BAND COMES FROM",
          "chips": ["squeezing sharp levels into bands"],
          "captions": [
            "Energy against the spacing between atoms. At the right-hand edge the atoms are so far apart that they do not interact, and each allowed energy is a single sharp line. Move left and the lines fan out into bands whose widths grow as the squeeze tightens. The dashed line at r0 is the equilibrium spacing, the distance a real silicon crystal actually settles at, and everything you will ever use about the band picture is read off that one vertical line: a filled band below, an empty band above, and a gap of about 1.1 eV between them. Push further left, past r0, and the two bands would eventually run into each other, which is one honest way to think about what makes a metal a metal."
          ],
          "frames": [
            {
              "x": [0, 6],
              "y": [0, 11],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "atomic spacing",
              "axisY": "energy",
              "polys": [
                {
                  "pts": [[5.5, 7.0], [4.5, 7.15], [3.5, 7.5], [2.6, 8.0], [1.8, 8.75], [1.0, 9.8], [1.0, 5.6], [1.8, 5.95], [2.6, 6.3], [3.5, 6.6], [4.5, 6.85], [5.5, 7.0]],
                  "smooth": true,
                  "close": true,
                  "fill": "wash",
                  "tone": "soft"
                },
                {
                  "pts": [[5.5, 4.0], [4.5, 4.08], [3.5, 4.2], [2.6, 4.32], [1.8, 4.46], [1.0, 4.6], [1.0, 1.2], [1.8, 2.5], [2.6, 3.4], [3.5, 3.7], [4.5, 3.9], [5.5, 4.0]],
                  "smooth": true,
                  "close": true,
                  "fill": "wash",
                  "tone": "soft"
                }
              ],
              "segments": [{ "from": [2.6, 0.9], "to": [2.6, 10.4], "dash": true }],
              "arrows": [
                { "from": [3.0, 4.27], "to": [3.0, 6.43], "head": "both", "tone": "amber", "label": "Eg", "at": "mid" }
              ],
              "labels": [
                { "x": 2.6, "y": 0.5, "text": "r0" },
                { "x": 4.9, "y": 8.6, "text": "conduction", "soft": true },
                { "x": 4.9, "y": 2.4, "text": "valence", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Hole",
          "html": "The <b>vacancy</b> left in the valence band when an electron jumps up to the conduction band. A neighbouring valence electron can slide sideways into that vacancy, which moves the vacancy to where that electron came from; repeat it and the vacancy appears to travel through the crystal. A hole is therefore <b>not a particle</b>. It is a missing electron in a nearly full band, and it behaves in every equation exactly as a mobile particle of charge +<i>e</i> would. Treating it as one is legitimate bookkeeping, not a claim about what exists."
        },
        {
          "t": "think",
          "html": "a hole moves like an empty seat in a cinema row. one person shuffles over into the gap, then the next, then the next, and the gap travels the length of the row in the opposite direction to the people. nobody built a \"gap\". but if you filmed only the gap, you would swear something was moving."
        },
        {
          "t": "p",
          "html": "Three sentences that decide whether every diode explanation later in this chapter comes out right or backwards. Learn them now.<br><br><b>Current is conventional.</b> By universal convention, current points the way <b>positive</b> charge would flow. In a metal the actual carriers are electrons, which drift the <b>opposite</b> way to the current, and Chapter 3, Current Electricity, sets that out in full. Nothing in this chapter changes it.<br><br><b>A semiconductor has two carriers, not one.</b> Electrons in the conduction band and holes in the valence band both carry current, and in a pure sample they are created in exactly equal numbers because every electron that leaves makes exactly one hole.<br><br><b>The two carriers move in opposite directions and add.</b> Put a field across a semiconductor and the electrons drift one way while the holes drift the other. Because their charges are also opposite, both contributions point the <b>same way as the conventional current</b> and the two currents add rather than cancel. That is why the conductivity formula below has two terms with a plus sign between them."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO CARRIER LAWS",
          "tag": "the second one survives doping",
          "main": "pure sample: <i>n</i><sub>e</sub> = <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><br>any sample, in equilibrium: <i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>",
          "legend": [
            "<i>n</i><sub>e</sub> = electron number density in the conduction band, in per cubic metre (m<sup>−3</sup>)",
            "<i>n</i><sub>h</sub> = hole number density in the valence band, in per cubic metre (m<sup>−3</sup>)",
            "<i>n</i><sub>i</sub> = intrinsic carrier concentration (m<sup>−3</sup>), which depends only on the MATERIAL and the TEMPERATURE and never on doping"
          ],
          "note": "The second line is called the law of mass action and it is the most useful single relation in the topic, because it holds for a doped crystal just as it holds for a pure one. Doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub> individually by many orders of magnitude and leaves their PRODUCT exactly where it was."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW CARRIERS DEPEND ON TEMPERATURE",
          "tag": "exponential, so compare exponents",
          "main": "<i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup> e<sup>−<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub><i>T</i></sup>",
          "legend": [
            "<i>n</i><sub>i</sub> = intrinsic carrier concentration, in per cubic metre (m<sup>−3</sup>)",
            "<i>T</i> = absolute temperature, in kelvin (K)",
            "<i>E</i><sub>g</sub> = band gap, in joules (J) or electronvolts (eV)",
            "<i>k</i><sub>B</sub> = Boltzmann constant = 1.38 × 10<sup>−23</sup> J/K = 8.62 × 10<sup>−5</sup> eV/K"
          ],
          "note": "The exponent must be a pure number, and it is: <i>E</i><sub>g</sub> and <i>k</i><sub>B</sub><i>T</i> are both energies. The <i>T</i><sup>3/2</sup> in front is slow and the exponential is violent, so over any exam-sized temperature change you can usually drop the prefactor entirely. Practice 5 below is the one place where you should not."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CONDUCTIVITY WITH TWO CARRIERS",
          "tag": "Chapter 3's formula, twice",
          "main": "σ = <i>e</i>(<i>n</i><sub>e</sub>μ<sub>e</sub> + <i>n</i><sub>h</sub>μ<sub>h</sub>),  ρ = 1/σ",
          "legend": [
            "σ = conductivity, in siemens per metre (S m<sup>−1</sup>); ρ = resistivity, in ohm metre (Ω m)",
            "<i>e</i> = elementary charge = 1.6 × 10<sup>−19</sup> C",
            "μ<sub>e</sub>, μ<sub>h</sub> = electron and hole mobilities, in m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>, each being the drift speed a carrier reaches per unit electric field",
            "<i>n</i><sub>e</sub>, <i>n</i><sub>h</sub> = the two carrier densities (m<sup>−3</sup>)"
          ],
          "note": "This is exactly Chapter 3's single-carrier conductivity written twice and added, once for each carrier. The mobilities are not equal: in germanium μ<sub>e</sub> = 0.39 and μ<sub>h</sub> = 0.19 m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>, so an electron is about twice as nimble as a hole and the electron term dominates even before doping tilts the counts."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "TEMPERATURE, PLOTTED TWO WAYS",
          "chips": ["carriers against temperature", "the straight line that measures Eg"],
          "captions": [
            "Intrinsic carrier concentration against temperature for a silicon-like gap of 1.1 eV, plotted relative to its own value at 300 K. Nothing much happens up to room temperature and then the curve leaves the page: heating from 300 K to 360 K, a change of a fifth, multiplies the carrier count by about forty-five. That is what an exponential does, and it is why a semiconductor's resistance falls so sharply with temperature while a metal's creeps up.",
            "The same physics plotted so that it becomes a straight line. Take logarithms of the exponential law and ln σ against 1/T is a line of slope −Eg/2kB, so measuring conductivity at two temperatures and taking the slope MEASURES the band gap. The x axis is 1000/T rather than 1/T only so the numbers on it are readable. This is not a decoration: it is the experimental route Example 3 walks, and it is the only way a Class 12 student can get at Eg without a spectrometer."
          ],
          "frames": [
            {
              "x": [245, 365],
              "y": [0, 52],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "T (K)",
              "axisY": "ni / ni(300 K)",
              "ticksX": { "at": [260, 300, 340], "labels": ["260", "300", "340"] },
              "ticksY": { "at": [0, 20, 40], "labels": ["0", "20", "40"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[250, 0.01], [260, 0.03], [270, 0.08], [280, 0.2], [290, 0.46], [300, 1.0], [310, 2.1], [320, 4.2], [330, 8.0], [340, 14.7], [350, 26.3], [360, 45.5]],
                  "smooth": true
                }
              ],
              "points": [{ "x": 300, "y": 1.0, "label": "300 K", "at": "se" }]
            },
            {
              "x": [2.7, 3.5],
              "y": [0, 8],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "1000/T (per K)",
              "axisY": "ln of sigma",
              "ticksX": { "at": [2.8, 3.0, 3.2, 3.4], "labels": ["2.8", "3.0", "3.2", "3.4"] },
              "ticksY": { "at": [2, 4, 6], "labels": ["2", "4", "6"] },
              "curves": [{ "c": "line", "m": -6.38, "k": 23.864 }],
              "points": [
                { "x": 2.85, "y": 5.68, "label": "hotter", "at": "se" },
                { "x": 3.35, "y": 2.49, "label": "cooler", "at": "nw" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A PURE SEMICONDUCTOR IS AN INSULATOR AT 0 K, TAP A LINE",
          "steps": [
            {
              "eq": "take a crystal of <i>N</i> atoms of silicon or germanium. Each free atom contributes 4 valence electrons, two <i>s</i> and two <i>p</i>",
              "why": "Silicon and germanium are Group 14, which is what \"tetravalent\" means, and it is the one fact about the periodic table this chapter needs. The count is per atom, so the crystal holds 4<i>N</i> valence electrons in total."
            },
            {
              "eq": "when the atoms bond, those outer levels split into TWO bands, and each band can hold 4<i>N</i> states",
              "why": "This is Figure 14.2 read at the equilibrium spacing. The number of states is conserved: whatever the isolated atoms could hold, the crystal can hold, just spread over a range of energies instead of concentrated at one."
            },
            {
              "eq": "the lower band takes all 4<i>N</i> electrons and is therefore exactly full; the upper band is left exactly empty",
              "why": "Electrons fill from the bottom, and 4<i>N</i> electrons into a 4<i>N</i>-state band fills it precisely, with none left over. The lower band is the valence band and the upper one is the conduction band, and the names now mean something rather than being labels."
            },
            {
              "eq": "a completely full band carries NO net current",
              "why": "For every electron drifting one way there is another drifting the other, because every state is occupied and the states come in balanced pairs. Applying a field cannot change that: there is no empty state to move into. This is the step people skip, and it is the whole argument."
            },
            {
              "eq": "at <i>T</i> = 0 K nothing has been lifted across the gap, so the valence band is full, the conduction band is empty, and the crystal is a PERFECT insulator",
              "why": "Not approximately an insulator. Perfectly one, with zero free carriers. Everything a semiconductor does at room temperature it does because thermal energy has broken a few bonds, and the reasoning here, not the count 4<i>N</i>, is what an examiner is asking for."
            }
          ]
        },
        {
          "t": "def",
          "term": "Intrinsic and extrinsic semiconductor",
          "html": "An <b>intrinsic</b> semiconductor is a chemically pure crystal, in which the only carriers are the electron-hole pairs that thermal energy has broken out of bonds, so <i>n</i><sub>e</sub> = <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub> exactly.<br><br>An <b>extrinsic</b> semiconductor is one that has been deliberately doped with a controlled trace of a different element, so that one carrier type vastly outnumbers the other. Every device in this chapter is built from extrinsic material: a pure crystal is a laboratory curiosity, and an intrinsic sample's carrier count is fixed by nature rather than by you."
        },
        {
          "t": "p",
          "html": "A pure semiconductor is not much use. At room temperature silicon has about 10<sup>16</sup> carriers per cubic metre against a metal's 10<sup>29</sup>, and worse, you cannot control it: the carrier count is fixed by the material and the temperature, and you get whatever nature gives you.<br><br><b>Doping</b> fixes that, and it is the single idea that turned semiconductors from a curiosity into an industry. You deliberately add about one impurity atom per 10<sup>6</sup> host atoms, roughly one part per million, and you choose the impurity by its <b>valency</b>. Nothing else about the crystal changes. The impurity sits in the lattice where a silicon atom would have been."
        },
        {
          "t": "p",
          "html": "One part per million sounds like nothing at all. Do the arithmetic and see why it is overwhelming.<br><br>Silicon packs about 5 × 10<sup>28</sup> atoms into a cubic metre. One part per million of that is 5 × 10<sup>22</sup> dopant atoms per cubic metre, and if each pentavalent atom releases its spare electron then <i>n</i><sub>e</sub> becomes about 5 × 10<sup>22</sup> m<sup>−3</sup>.<br><br>Now compare with the intrinsic count, <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup>. The doping has multiplied the electron population by a factor of about <b>three million</b>, using an impurity so dilute that it changes nothing else about the crystal at all. Those are exactly the numbers in Example 1 below, and they are the reason a semiconductor's conductivity can be engineered across many orders of magnitude while a metal's cannot be touched."
        },
        {
          "t": "proc",
          "title": "Reading a dopant off the periodic table",
          "steps": [
            "<b>Count the impurity's valence electrons.</b> The host is tetravalent, four. A dopant is either <b>pentavalent</b> (five: phosphorus, arsenic, antimony) or <b>trivalent</b> (three: boron, aluminium, indium, gallium). There is no third case in this syllabus.",
            "<b>Pentavalent, so one electron is spare.</b> Four of its five valence electrons form covalent bonds with the four silicon neighbours. The fifth has no bond to join, is only loosely held (binding energy about 0.01 eV), and sits on a filled <b>donor level</b> just below the conduction band. Room-temperature thermal energy is about 0.026 eV, more than enough, so that electron is up in the conduction band almost immediately.",
            "<b>Pentavalent gives n-type.</b> Electrons are now the majority carriers, <i>n</i><sub>e</sub> is far greater than <i>n</i><sub>h</sub>, and the Fermi level shifts UP towards the conduction band. Remember it as: the N in peNtavalent flags N-type.",
            "<b>Trivalent, so one bond is short.</b> Three bonding electrons cannot satisfy four silicon neighbours, so one covalent bond is left incomplete: a ready-made hole. This creates an empty <b>acceptor level</b> just above the valence band (0.01 to 0.05 eV up). Valence electrons hop into it and leave holes behind.",
            "<b>Trivalent gives p-type.</b> Holes are now the majority carriers, <i>n</i><sub>h</sub> is far greater than <i>n</i><sub>e</sub>, and the Fermi level shifts DOWN towards the valence band. The rule to carry: the Fermi level always follows the majority carrier."
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "FIGURE 14.3 · WHAT DOPING PUTS INSIDE THE GAP",
          "chips": ["n-type: a donor level", "p-type: an acceptor level"],
          "captions": [
            "n-type. The pentavalent donor puts a FILLED level Ed inside the forbidden gap, just below the conduction band. That is the whole trick: the spare electron no longer has to climb 1.1 eV, it has to climb about 0.01 eV, and room temperature supplies twenty-six times that. The gap between Ed and the conduction band is drawn far wider than it really is, because at true scale it would be one hundredth of the main gap and you would not be able to see the line at all. The line is drawn right across the frame for the same reason; a donor level is a local thing, sitting only where an impurity atom sits.",
            "p-type. The trivalent acceptor puts an EMPTY level Ea inside the gap, 0.01 to 0.05 eV above the valence band, again drawn far further from its band than it really sits. A valence electron hops up into it for almost nothing and leaves a hole behind in the valence band, and it is that hole, not the trapped electron, that carries current. Both chips show the same crystal with the same 1.1 eV gap. All that has changed is which side of the gap the new level sits on, and that single choice decides everything about the material."
          ],
          "frames": [
            {
              "aspect": 0.9,
              "levels": {
                "rows": [
                  { "at": 0, "label": "VB", "right": "full" },
                  { "at": 9.6, "label": "Ed", "dash": true, "tone": "amber" },
                  { "at": 11, "label": "CB", "right": "electrons" }
                ],
                "bands": [
                  { "from": 0, "to": 3, "fill": "wash" },
                  { "from": 11, "to": 14, "fill": "wash" }
                ],
                "jumps": [{ "from": 9.6, "to": 11, "label": "0.01 eV", "tone": "amber" }]
              }
            },
            {
              "aspect": 0.9,
              "levels": {
                "rows": [
                  { "at": 0, "label": "VB", "right": "holes" },
                  { "at": 4.4, "label": "Ea", "dash": true, "tone": "amber" },
                  { "at": 11, "label": "CB", "right": "empty" }
                ],
                "bands": [
                  { "from": 0, "to": 3, "fill": "wash" },
                  { "from": 11, "to": 14, "fill": "wash" }
                ],
                "jumps": [{ "from": 3, "to": 4.4, "label": "0.05 eV", "tone": "amber" }]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "n-type against p-type, side by side",
          "rows": [
            { "k": "Dopant", "v": "n-type: pentavalent (P, As, Sb), called a DONOR. p-type: trivalent (B, Al, In, Ga), called an ACCEPTOR." },
            { "k": "Majority carrier", "v": "n-type: electrons. p-type: holes. The letter names the sign of the majority MOBILE carrier and nothing else." },
            { "k": "Minority carrier", "v": "n-type: holes, and their count is <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>e</sub>. p-type: electrons, count <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>h</sub>." },
            { "k": "New level in the gap", "v": "n-type: a filled donor level about 0.01 eV BELOW the conduction band. p-type: an empty acceptor level 0.01 to 0.05 eV ABOVE the valence band." },
            { "k": "Fermi level", "v": "n-type: shifts up, near the conduction band. p-type: shifts down, near the valence band. Intrinsic: mid-gap. The Fermi level follows the majority." },
            { "k": "Net charge", "v": "ZERO, in both. Every mobile electron is balanced by a fixed positive donor ion and every mobile hole by a fixed negative acceptor ion." }
          ]
        },
        {
          "t": "p",
          "html": "Two consequences of doping are asked about constantly and are worth separating carefully.<br><br><b>The mass-action law survives.</b> Flooding an n-type crystal with electrons does not leave the hole count alone: with far more electrons about, any hole is far more likely to meet one and recombine, so the hole population is driven DOWN. The two effects balance so precisely that the product <i>n</i><sub>e</sub><i>n</i><sub>h</sub> stays pinned at <i>n</i><sub>i</sub><sup>2</sup>, fixed by material and temperature alone. Doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub>; it never touches <i>n</i><sub>i</sub>.<br><br><b>The crystal stays electrically neutral.</b> \"n-type\" does not mean negatively charged. Every mobile electron the donor released left behind a fixed, positively charged donor ion locked into the lattice, and the two exactly cancel. The same in reverse for p-type. A doped crystal you could hold in your hand has no net charge at all."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A pure silicon sample has <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup> at room temperature. It is doped with a pentavalent donor so that <i>n</i><sub>e</sub> = 5 × 10<sup>22</sup> m<sup>−3</sup>. Find the hole concentration and state the type of semiconductor.",
          "steps": [
            "Pentavalent means donor, so this is n-type before any arithmetic. Electrons are the majority carrier.",
            "Law of mass action: <i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>, so <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>e</sub>.",
            "<i>n</i><sub>h</sub> = (1.5 × 10<sup>16</sup>)<sup>2</sup>/(5 × 10<sup>22</sup>) = (2.25 × 10<sup>32</sup>)/(5 × 10<sup>22</sup>)",
            "= 4.5 × 10<sup>9</sup> m<sup>−3</sup>. Sanity check: doping multiplied the electron count by about 3 million and divided the hole count by about 3 million, and the product is unchanged."
          ],
          "ans": "<i>n</i><sub>h</sub> = 4.5 × 10<sup>9</sup> m<sup>−3</sup>. n-type: electrons majority, holes minority."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "An intrinsic germanium sample has <i>n</i><sub>i</sub> = 2.4 × 10<sup>19</sup> m<sup>−3</sup>, with μ<sub>e</sub> = 0.39 and μ<sub>h</sub> = 0.19 m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>. It is doped n-type so that <i>n</i><sub>e</sub> = 4.8 × 10<sup>20</sup> m<sup>−3</sup>. Find the hole concentration and the conductivity.",
          "steps": [
            "Holes first, by mass action: <i>n</i><sub>h</sub> = (2.4 × 10<sup>19</sup>)<sup>2</sup>/(4.8 × 10<sup>20</sup>) = (5.76 × 10<sup>38</sup>)/(4.8 × 10<sup>20</sup>) = 1.2 × 10<sup>18</sup> m<sup>−3</sup>.",
            "Now conductivity with both carriers: σ = <i>e</i>(<i>n</i><sub>e</sub>μ<sub>e</sub> + <i>n</i><sub>h</sub>μ<sub>h</sub>).",
            "Electron term: (4.8 × 10<sup>20</sup>)(0.39) = 1.872 × 10<sup>20</sup>. Hole term: (1.2 × 10<sup>18</sup>)(0.19) = 2.28 × 10<sup>17</sup>.",
            "σ = 1.6 × 10<sup>−19</sup> × (1.872 × 10<sup>20</sup> + 2.28 × 10<sup>17</sup>) = 1.6 × 10<sup>−19</sup> × 1.874 × 10<sup>20</sup> ≈ 30 S m<sup>−1</sup>, so ρ = 1/σ ≈ 0.033 Ω m.",
            "Notice the hole term is 0.12 per cent of the total. Once a sample is doped, the minority carrier is almost irrelevant to conduction, which is why you can often ignore it and why you must never ignore it in a mass-action question."
          ],
          "ans": "<i>n</i><sub>h</sub> = 1.2 × 10<sup>18</sup> m<sup>−3</sup>; σ ≈ 30 S m<sup>−1</sup> (ρ ≈ 0.033 Ω m)."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "The conductivity of an intrinsic silicon sample QUADRUPLES when its temperature rises from 300 K to 320 K. Estimate the band gap, and say which approximations you are making.",
          "steps": [
            "Conductivity tracks carrier count, σ ∝ <i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup>e<sup>−<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub><i>T</i></sup>. Over this 20 K interval the <i>T</i><sup>3/2</sup> prefactor changes by only 10 per cent, (320/300)<sup>3/2</sup> = 1.10, and mobility drifts a little the other way, while the exponential has to supply a factor of nearly four. So keep only the exponential.",
            "σ<sub>2</sub>/σ<sub>1</sub> ≈ exp[(<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub>)(1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>)]. Take logarithms with the ratio equal to 4: ln 4 = 1.386.",
            "1/300 − 1/320 = 20/96000 = 2.083 × 10<sup>−4</sup> K<sup>−1</sup>.",
            "<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub> = 1.386/(2.083 × 10<sup>−4</sup>) = 6654 K.",
            "<i>E</i><sub>g</sub> = 2 × (8.62 × 10<sup>−5</sup> eV/K) × 6654 K ≈ 1.15 eV, which lands on silicon's known 1.1 eV. The dropped factors were safe."
          ],
          "ans": "<i>E</i><sub>g</sub> ≈ 1.15 eV. The band gap is buried in the SLOPE of ln σ against 1/<i>T</i>, so two conductivity measurements are a genuine experimental route to it."
        },
        {
          "t": "mcq",
          "q": "At absolute zero, a pure (intrinsic) semiconductor behaves as:",
          "opts": [
            { "label": "a perfect conductor", "nudge": "This memorises \"semiconductors conduct\" without the temperature caveat. They conduct because heat has broken bonds, and at 0 K there is no heat to do it." },
            { "label": "a perfect insulator", "nudge": null },
            { "label": "a superconductor", "nudge": "Confuses zero temperature with superconductivity, which is a different phenomenon with a different mechanism and does not follow from the band picture at all." },
            { "label": "an n-type semiconductor", "nudge": "Assumes purity implies doping. An intrinsic sample has no impurity in it, so it cannot be n-type or p-type." }
          ],
          "correct": 1,
          "solution": "At 0 K there is no thermal energy to lift any electron across the gap, so the valence band is completely full and the conduction band completely empty. No free carriers, and a completely full band carries no net current, so the crystal is a perfect insulator. This is the last line of the derivation above."
        },
        {
          "t": "mcq",
          "q": "A pure silicon crystal is doped with phosphorus, which is pentavalent. The resulting material has:",
          "opts": [
            { "label": "a net negative charge", "nudge": "The classic misconception that n-type means negative. The n names the sign of the majority mobile carrier, not the charge of the crystal." },
            { "label": "a net positive charge", "nudge": "Over-corrects in the wrong direction. There is no net charge in either direction: the mobile electrons and the fixed donor ions balance exactly." },
            { "label": "zero net charge, with electrons as majority carriers", "nudge": null },
            { "label": "zero net charge, with holes as majority carriers", "nudge": "Gets the neutrality right and flips the carrier type. Pentavalent means donor means electrons, and it is the trivalent dopant that gives holes." }
          ],
          "correct": 2,
          "solution": "Phosphorus donates a loosely bound fifth electron, making the sample n-type with electrons as the majority carrier. The crystal stays electrically neutral overall, because every mobile electron released is balanced by the fixed positive donor ion it left behind in the lattice."
        },
        {
          "t": "mcq",
          "q": "As temperature increases, the resistance of a pure semiconductor and that of a metallic conductor respectively:",
          "opts": [
            { "label": "both increase", "nudge": "Assumes the two materials behave alike. They do not, because heating changes different things in each: the carrier NUMBER in a semiconductor, the scattering RATE in a metal." },
            { "label": "both decrease", "nudge": "Same error as the first option in the other direction. A metal's carrier count is fixed by its structure and cannot rise with heating." },
            { "label": "semiconductor decreases, conductor increases", "nudge": null },
            { "label": "semiconductor increases, conductor decreases", "nudge": "Reverses both, which is the single most common slip in the topic: it applies the familiar \"metal heats up, resistance rises\" rule to the semiconductor too." }
          ],
          "correct": 2,
          "solution": "Heating a semiconductor generates more electron-hole pairs, so the carrier count rises exponentially, conductivity rises and resistance FALLS. That is a negative temperature coefficient. In a metal the carrier count is fixed; heating only makes the lattice vibrate more and scatter electrons harder, so resistance RISES. Chapter 3, Current Electricity, derives both from the same free-electron picture."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Draw and label the energy-band diagrams for a conductor, an insulator and a semiconductor, and state the approximate band gap of each.",
              "a": "Conductor: valence and conduction bands overlap or the conduction band is partly filled, <i>E</i><sub>g</sub> ≈ 0. Insulator: <i>E</i><sub>g</sub> above 3 eV (diamond about 5.4 eV). Semiconductor: <i>E</i><sub>g</sub> below 3 eV (silicon 1.1 eV, germanium 0.7 eV). Figure 14.1's three chips are the three diagrams."
            },
            {
              "q": "[NEET] A tetravalent germanium crystal is doped with traces of indium. State the resulting type, identify the majority carriers, and say which way the Fermi level shifts from mid-gap.",
              "a": "Indium is trivalent, so it is an acceptor and the crystal is p-type. Holes are the majority carriers and electrons the minority. The Fermi level shifts DOWN, towards the valence band, because the Fermi level follows the majority carrier."
            },
            {
              "q": "[JEE MAIN] A silicon sample has <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup> and is doped p-type so that <i>n</i><sub>h</sub> = 4.5 × 10<sup>22</sup> m<sup>−3</sup>. Find <i>n</i><sub>e</sub> and say which carrier is the minority.",
              "a": "<i>n</i><sub>e</sub> = <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>h</sub> = (2.25 × 10<sup>32</sup>)/(4.5 × 10<sup>22</sup>) = 5 × 10<sup>9</sup> m<sup>−3</sup>. Electrons are the minority carriers, by thirteen orders of magnitude."
            },
            {
              "q": "[JEE MAIN] An intrinsic semiconductor at 300 K has conductivity σ<sub>1</sub>. Using σ ∝ e<sup>−<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub><i>T</i></sup>, by what factor does the conductivity change when the temperature rises to 330 K? Take <i>E</i><sub>g</sub> = 0.72 eV and <i>k</i><sub>B</sub> = 8.62 × 10<sup>−5</sup> eV/K.",
              "a": "About 3.5 times. Working: <i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub> = 0.72/(2 × 8.62 × 10<sup>−5</sup>) = 4176 K; (1/300 − 1/330) = 30/99000 = 3.0303 × 10<sup>−4</sup> K<sup>−1</sup>; the product is 1.266, and e<sup>1.266</sup> = 3.5. (The source prints 3.6, which does not follow from the stated numbers.)"
            },
            {
              "q": "[JEE ADVANCED] Using the FULL expression <i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup>e<sup>−<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub><i>T</i></sup> with <i>E</i><sub>g</sub> = 1.1 eV, compute <i>n</i><sub>i</sub>(350 K) / <i>n</i><sub>i</sub>(290 K).",
              "a": "About 58. Prefactor: (350/290)<sup>3/2</sup> = 1.33. Exponential: <i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub> = 6380 K and (1/290 − 1/350) = 60/101500 = 5.911 × 10<sup>−4</sup> K<sup>−1</sup>, so the exponent is 3.772 and e<sup>3.772</sup> = 43.5. Product 1.33 × 43.5 = 58. Notice how little the prefactor contributed: this is the question that shows you when it is safe to drop it. (The source prints 60, from an exponential factor of 45 instead of 43.5.)"
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting that current is conventional, and that a hole is not a particle.</b> Current points the way POSITIVE charge would go. In a semiconductor both electrons and holes carry it, moving in opposite directions but contributing to the SAME conventional current because their charges are opposite too. A hole is a vacancy behaving like a positive carrier, not an object. Get this wrong here and every diode explanation in the next four topics comes out backwards.",
            "<b>Thinking doping changes <i>n</i><sub>i</sub>.</b> It never does. <i>n</i><sub>i</sub> depends only on the material and the temperature. Doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub> individually, often by six orders of magnitude, and leaves the product <i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup> exactly where it was.",
            "<b>Reading \"n-type\" as \"negatively charged\".</b> Both n-type and p-type crystals are electrically neutral overall. The letter names the sign of the majority MOBILE carrier; the fixed ionised dopant cores balance it exactly.",
            "<b>Mixing up donor and acceptor.</b> Pentavalent gives donor gives n-type; trivalent gives acceptor gives p-type. Swapping them flips every subsequent answer, including which side of a junction is which.",
            "<b>Applying the metal's temperature rule to the semiconductor.</b> A semiconductor gets MORE conductive when heated, the exact opposite of a metal, because heating creates carriers rather than just scattering them."
          ]
        },
        {
          "t": "protip",
          "html": "for any temperature or band-gap comparison, work with the <b>exponent</b> of e to the minus Eg over 2kBT and never the full number. a smaller gap or a higher temperature always means more carriers, so you can rank options or kill distractors by inspection before you touch a calculator. \"which of these three samples has the most carriers?\" is always the smallest gap, in one second, no arithmetic."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "conductor <i>E</i><sub>g</sub> ≈ 0 · semiconductor <i>E</i><sub>g</sub> under 3 eV · insulator over 3 eV", "note": "Si 1.1 eV, Ge 0.7 eV, diamond 5.4 eV. One picture classifies every solid." },
            { "f": "<i>n</i><sub>e</sub> = <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub> (pure)", "note": "Two carriers, always created in pairs, always in equal numbers in an intrinsic sample." },
            { "f": "<i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>", "note": "The law of mass action. True for doped samples too, which is what makes it worth having." },
            { "f": "<i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup>e<sup>−<i>E</i><sub>g</sub>/2<i>k</i><sub>B</sub><i>T</i></sup>", "note": "Carriers rise with T, so resistance FALLS: a negative temperature coefficient, unlike a metal." },
            { "f": "σ = <i>e</i>(<i>n</i><sub>e</sub>μ<sub>e</sub> + <i>n</i><sub>h</sub>μ<sub>h</sub>)", "note": "Chapter 3's conductivity, twice, once per carrier. Both terms add." },
            { "f": "pentavalent → donor → n-type; trivalent → acceptor → p-type", "note": "About 1 ppm of dopant. Fermi level follows the majority: up for n, down for p." },
            { "f": "every doped crystal is electrically NEUTRAL", "note": "Mobile carriers are balanced by the fixed ionised dopant cores. n and p name the carrier, not the charge." }
          ],
          "aids": [
            "the N in peNtavalent flags N-type. trivalent is one bond short, so it gives a hole.",
            "fermi follows the majority: electrons up high near the conduction band, holes down low near the valence band.",
            "doping moves n_e and n_h in opposite directions and never moves n_i.",
            "metal heats up, resistance up. semiconductor heats up, resistance down. always opposite."
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "The p-n Junction and the Biased Diode",
      "chip": "02 THE VALVE",
      "kalam": "one crystal, two halves, and traffic in one direction only",
      "blocks": [
        {
          "t": "p",
          "html": "Take a single crystal of silicon and, by doping, make one half p-type and the other half n-type. The boundary where they meet is a <b>p-n junction</b>, and almost every semiconductor device you will ever meet is built on this one idea. NCERT calls the junction the key to all semiconductor devices, and that is not an exaggeration.<br><br>Notice the word <b>single</b>. You cannot make a junction by pressing a p-type slab against an n-type slab. Surfaces are rough on a scale thousands of times bigger than the spacing between atoms, so the contact would be a broken discontinuity with air gaps in it, not a junction. It has to be grown as one crystal whose doping changes partway through."
        },
        {
          "t": "p",
          "html": "The instant those two regions sit side by side, something dramatic happens at the boundary, and it happens with no battery anywhere in sight.<br><br>The n-side is crowded with electrons; the p-side is crowded with holes. Nature hates a concentration gradient, so electrons go tumbling from the n-side into the p-side and holes drift the other way. That is <b>diffusion</b>, driven purely by crowding, exactly like a drop of ink spreading in still water.<br><br>But every electron that leaves the n-side abandons a fixed, positively charged donor ion, and every hole that leaves the p-side leaves behind a fixed, negatively charged acceptor ion. Those ions are locked into the lattice and cannot move. So a thin zone right at the junction empties out of <b>mobile</b> carriers and fills with <b>fixed</b> charge: negative on the p-side, positive on the n-side."
        },
        {
          "t": "think",
          "html": "picture two neighbourhoods, one packed with people who want to spread out, one with lots of empty plots. at first people rush across the border. but every person who crosses gets registered at a checkpoint, and the paperwork piles up into a wall that makes the next crossing harder. eventually the wall is tall enough that the flood of crossers is exactly balanced by the trickle the wall pushes back, and the border settles into a quiet, deserted no-man's-land."
        },
        {
          "t": "def",
          "term": "Depletion region",
          "html": "The thin zone straddling the junction that has been emptied of <b>mobile</b> carriers, leaving only the fixed ionised dopant cores: negative acceptor ions on the p-side and positive donor ions on the n-side. It is typically a fraction of a micrometre wide. Because it has no mobile carriers in it, it is the most resistive part of the whole crystal, and because it holds two sheets of opposite fixed charge, it behaves electrically like a charged parallel-plate region."
        },
        {
          "t": "def",
          "term": "Barrier potential",
          "html": "The built-in voltage <i>V</i><sub>b</sub> that appears across the depletion region at equilibrium, produced by the exposed fixed ions. About <b>0.3 V for germanium</b> and <b>0.7 V for silicon</b> at room temperature. It is not imposed from outside: it is the self-built voltage at which the crystal stops its own diffusion. You cannot measure it with a voltmeter across the diode's terminals, because the contact potentials at the leads cancel it exactly."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.4 · THE DEPLETION REGION, AND WHAT BIAS DOES TO IT",
          "chips": ["at equilibrium", "forward bias", "reverse bias"],
          "captions": [
            "No battery. The shaded blocks are the p-side (mobile holes, drawn as plus signs) and the n-side (mobile electrons, minus signs). Between them is the depletion region, drawn unshaded because it has no mobile carriers left in it at all: the only charges inside are the FIXED ions the departed carriers left behind, negative on the p-side and positive on the n-side. Those two sheets of fixed charge set up an internal field E pointing from the n-side to the p-side, which is leftwards on this page, and it is that field that stops further diffusion. Read the charge signs, not the shading: the figure is designed to work in black and white.",
            "Forward bias: the p-region is joined to the battery's POSITIVE terminal and the n-region to the NEGATIVE. The battery's field points from p to n, OPPOSING the internal field, so the net barrier drops to Vb minus V, fewer fixed ions are needed to hold it up, and the depletion region NARROWS. Compare its width with the first chip: that narrowing is the whole picture. Once V passes the barrier, majority carriers flood across and the current becomes large.",
            "Reverse bias: the n-region is joined to the POSITIVE terminal and the p-region to the NEGATIVE. Now the battery's field ADDS to the internal one, the barrier rises to Vb plus V, majority carriers are pulled away from the junction, and more fixed ions are exposed, so the depletion region WIDENS. Count the ion columns: three deep on each side here against two before. Almost no current flows, only the trickle of thermally generated minority carriers, and that trickle is what the next figure's flat reverse branch is."
          ],
          "frames": [
            {
              "x": [0, 12],
              "y": [0, 6],
              "aspect": 0.52,
              "axes": "none",
              "polys": [
                { "pts": [[0.6, 1.3], [5.0, 1.3], [5.0, 4.7], [0.6, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[7.0, 1.3], [11.4, 1.3], [11.4, 4.7], [7.0, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[5.0, 1.3], [7.0, 1.3], [7.0, 4.7], [5.0, 4.7]], "close": true, "dash": true, "tone": "amber" }
              ],
              "marks": [
                { "x": 1.4, "y": 2.1, "glyph": "plus" },
                { "x": 2.4, "y": 3.5, "glyph": "plus" },
                { "x": 3.4, "y": 2.3, "glyph": "plus" },
                { "x": 1.9, "y": 4.2, "glyph": "plus" },
                { "x": 8.6, "y": 2.1, "glyph": "minus" },
                { "x": 9.6, "y": 3.5, "glyph": "minus" },
                { "x": 10.6, "y": 2.3, "glyph": "minus" },
                { "x": 9.1, "y": 4.2, "glyph": "minus" },
                { "x": 5.5, "y": 2.1, "glyph": "minus", "tone": "amber" },
                { "x": 5.5, "y": 3.9, "glyph": "minus", "tone": "amber" },
                { "x": 6.5, "y": 2.1, "glyph": "plus", "tone": "amber" },
                { "x": 6.5, "y": 3.9, "glyph": "plus", "tone": "amber" }
              ],
              "arrows": [
                { "from": [6.5, 3.0], "to": [5.5, 3.0], "tone": "amber", "label": "E", "at": "below" }
              ],
              "labels": [
                { "x": 2.6, "y": 5.3, "text": "p-side" },
                { "x": 9.4, "y": 5.3, "text": "n-side" },
                { "x": 6.0, "y": 5.3, "text": "no battery", "soft": true },
                { "x": 6.0, "y": 0.7, "text": "depletion region", "soft": true }
              ]
            },
            {
              "x": [0, 12],
              "y": [0, 6],
              "aspect": 0.52,
              "axes": "none",
              "polys": [
                { "pts": [[0.6, 1.3], [5.4, 1.3], [5.4, 4.7], [0.6, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[6.6, 1.3], [11.4, 1.3], [11.4, 4.7], [6.6, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[5.4, 1.3], [6.6, 1.3], [6.6, 4.7], [5.4, 4.7]], "close": true, "dash": true, "tone": "amber" }
              ],
              "marks": [
                { "x": 1.4, "y": 2.1, "glyph": "plus" },
                { "x": 2.4, "y": 3.5, "glyph": "plus" },
                { "x": 3.4, "y": 2.3, "glyph": "plus" },
                { "x": 1.9, "y": 4.2, "glyph": "plus" },
                { "x": 8.6, "y": 2.1, "glyph": "minus" },
                { "x": 9.6, "y": 3.5, "glyph": "minus" },
                { "x": 10.6, "y": 2.3, "glyph": "minus" },
                { "x": 9.1, "y": 4.2, "glyph": "minus" },
                { "x": 5.7, "y": 3.9, "glyph": "minus", "tone": "amber" },
                { "x": 6.3, "y": 3.9, "glyph": "plus", "tone": "amber" }
              ],
              "arrows": [
                { "from": [6.3, 3.0], "to": [5.7, 3.0], "tone": "amber", "label": "E", "at": "below" },
                { "from": [2.0, 0.75], "to": [10.0, 0.75], "tone": "amber", "label": "large I", "at": "below" }
              ],
              "labels": [
                { "x": 2.6, "y": 5.3, "text": "p-side" },
                { "x": 9.4, "y": 5.3, "text": "n-side" },
                { "x": 6.0, "y": 5.3, "text": "p to +, n to −", "soft": true }
              ]
            },
            {
              "x": [0, 12],
              "y": [0, 6],
              "aspect": 0.52,
              "axes": "none",
              "polys": [
                { "pts": [[0.6, 1.3], [4.4, 1.3], [4.4, 4.7], [0.6, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[7.6, 1.3], [11.4, 1.3], [11.4, 4.7], [7.6, 4.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[4.4, 1.3], [7.6, 1.3], [7.6, 4.7], [4.4, 4.7]], "close": true, "dash": true, "tone": "amber" }
              ],
              "marks": [
                { "x": 1.4, "y": 2.1, "glyph": "plus" },
                { "x": 2.4, "y": 3.5, "glyph": "plus" },
                { "x": 1.9, "y": 4.2, "glyph": "plus" },
                { "x": 8.6, "y": 2.1, "glyph": "minus" },
                { "x": 9.6, "y": 3.5, "glyph": "minus" },
                { "x": 10.6, "y": 2.3, "glyph": "minus" },
                { "x": 4.9, "y": 1.9, "glyph": "minus", "tone": "amber" },
                { "x": 4.9, "y": 4.1, "glyph": "minus", "tone": "amber" },
                { "x": 5.6, "y": 3.0, "glyph": "minus", "tone": "amber" },
                { "x": 7.1, "y": 1.9, "glyph": "plus", "tone": "amber" },
                { "x": 7.1, "y": 4.1, "glyph": "plus", "tone": "amber" },
                { "x": 6.4, "y": 3.0, "glyph": "plus", "tone": "amber" }
              ],
              "labels": [
                { "x": 2.4, "y": 5.3, "text": "p-side" },
                { "x": 9.6, "y": 5.3, "text": "n-side" },
                { "x": 6.0, "y": 5.3, "text": "n to +, p to −", "soft": true },
                { "x": 6.0, "y": 0.7, "text": "only a trickle", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE BARRIER POTENTIAL COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "diffusion begins: electrons go n to p and holes go p to n, driven only by the concentration gradient",
              "why": "There is no field yet and no battery. Electrons are 10<sup>6</sup> times denser on the n-side than on the p-side, and holes the other way round, so both carriers spread out for the same reason ink spreads in water. By convention this diffusion CURRENT flows from p to n."
            },
            {
              "eq": "fixed charge appears: each departing electron uncovers a positive donor ion, each departing hole a negative acceptor ion",
              "why": "The dopant cores are part of the lattice and cannot follow their carriers. So the junction now carries a dipole layer of immobile charge, with no mobile carriers left inside it. That layer IS the depletion region, and it grew rather than being built."
            },
            {
              "eq": "the fixed dipole sets up an electric field <i>E</i> pointing from the n-side to the p-side",
              "why": "Positive ions on the n-side, negative on the p-side, so the field runs from the positive sheet to the negative one, which is from n to p. It pushes any stray minority carrier back across the junction, producing a small DRIFT current opposite in sense to the diffusion current."
            },
            {
              "eq": "the barrier grows until diffusion current exactly cancels drift current, giving ZERO net current",
              "why": "Diffusion empties carriers across, drift pushes them back, and the wall gets taller until the two rates match. It must reach zero net current, because a junction sitting on a bench with nothing attached cannot be delivering current to anything."
            },
            {
              "eq": "the potential difference standing at that balance point is the barrier potential <i>V</i><sub>b</sub>: 0.3 V for Ge, 0.7 V for Si",
              "why": "Not imposed from outside. It is the self-built voltage at which the crystal stops its own diffusion, and the physical reasoning, not the number, is what a 3-mark board question is asking for."
            }
          ]
        },
        {
          "t": "def",
          "term": "Forward bias and reverse bias",
          "html": "Defined by <b>which battery terminal meets which region</b>, and never by which way the diode happens to be drawn on the page.<br><br><b>FORWARD BIAS:</b> the <b>p</b>-region is connected to the battery's <b>positive</b> terminal and the n-region to the negative. The barrier falls to <i>V</i><sub>b</sub> − <i>V</i>, the depletion region narrows, and current is large.<br><br><b>REVERSE BIAS:</b> the <b>n</b>-region is connected to the battery's <b>positive</b> terminal and the p-region to the negative. The barrier rises to <i>V</i><sub>b</sub> + <i>V</i>, the depletion region widens, and only the tiny reverse saturation current flows.<br><br>Hold that and nothing else. A diode symbol can be drawn pointing left or right, upside down, or in the middle of a bridge; the arrow tells you where the p-side is, and the p-side plus the battery's polarity tell you the bias."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "THE SAME DIODE, BIASED BOTH WAYS",
          "chips": ["forward bias", "reverse bias"],
          "captions": [
            "The diode is drawn in exactly the same place and pointing exactly the same way in both chips. The triangle points from p to n, so the anode (the p-side) is on the left and the cathode (the n-side, the barred end) is on the right. Here the battery's plus sign faces left, so the positive terminal reaches the p-side round the bottom and up the left rail. That is forward bias, by the definition and not by the picture, and a current flows.",
            "Nothing about the diode has changed. Only the battery has been turned round, so its plus sign now faces right and its positive terminal reaches the n-side through the resistor. That is reverse bias, and the branch is effectively an open circuit: no current arrow, because there is nothing worth drawing at a few microamps against the milliamps of the first chip. This is the whole reason bias is defined by terminals and not by pictures: the two pictures differ by one symbol you could easily miss."
          ],
          "frames": [
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 1], "to": [3, 1] },
                  { "from": [5, 1], "to": [6, 1] },
                  { "from": [8, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 5] },
                  { "from": [11, 5], "to": [8, 5] },
                  { "from": [4, 5], "to": [1, 5] },
                  { "from": [1, 5], "to": [1, 1] }
                ],
                "parts": [
                  { "at": [3, 1], "to": [5, 1], "kind": "diode", "tone": "amber" },
                  { "at": [6, 1], "to": [8, 1], "kind": "R", "label": "R", "side": "above" },
                  { "at": [4, 5], "to": [8, 5], "kind": "battery", "label": "V", "side": "below" }
                ],
                "currents": [{ "at": [8.4, 1], "to": [10.2, 1], "label": "I" }],
                "regions": [
                  { "from": [2.4, 0.35], "to": [5.6, 2.2], "label": "forward bias", "tone": "amber" }
                ]
              },
              "marks": [
                { "x": 5.3, "y": 4.35, "glyph": "plus" },
                { "x": 6.7, "y": 4.35, "glyph": "minus" }
              ],
              "labels": [
                { "x": 3.3, "y": 1.75, "text": "p" },
                { "x": 4.7, "y": 1.75, "text": "n" }
              ]
            },
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 1], "to": [3, 1] },
                  { "from": [5, 1], "to": [6, 1] },
                  { "from": [8, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 5] },
                  { "from": [11, 5], "to": [8, 5] },
                  { "from": [4, 5], "to": [1, 5] },
                  { "from": [1, 5], "to": [1, 1] }
                ],
                "parts": [
                  { "at": [3, 1], "to": [5, 1], "kind": "diode", "tone": "amber" },
                  { "at": [6, 1], "to": [8, 1], "kind": "R", "label": "R", "side": "above" },
                  { "at": [8, 5], "to": [4, 5], "kind": "battery", "label": "V", "side": "below" }
                ],
                "regions": [
                  { "from": [2.4, 0.35], "to": [5.6, 2.2], "label": "reverse bias", "tone": "amber" }
                ]
              },
              "marks": [
                { "x": 5.3, "y": 4.35, "glyph": "minus" },
                { "x": 6.7, "y": 4.35, "glyph": "plus" }
              ],
              "labels": [
                { "x": 3.3, "y": 1.75, "text": "p" },
                { "x": 4.7, "y": 1.75, "text": "n" },
                { "x": 9.5, "y": 3.0, "text": "no current" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Forward against reverse, every consequence",
          "rows": [
            { "k": "The connection", "v": "Forward: p-region to the battery's PLUS. Reverse: n-region to the battery's PLUS. This line decides all the others." },
            { "k": "External field", "v": "Forward: OPPOSES the built-in field. Reverse: ADDS to it. Everything below follows from this one sentence." },
            { "k": "Effective barrier", "v": "Forward: falls to V_b − V. Reverse: rises to V_b + V." },
            { "k": "Depletion width", "v": "Forward: NARROWS, because a lower barrier needs fewer exposed ions. Reverse: WIDENS. Width and barrier always move together." },
            { "k": "Resistance and current", "v": "Forward: resistance falls, current rises EXPONENTIALLY past the knee. Reverse: resistance is enormous, and only the reverse saturation current flows." },
            { "k": "Who carries it", "v": "Forward: MAJORITY carriers, flooding across the lowered barrier. Reverse: MINORITY carriers only, thermally generated, and there are very few of them." }
          ]
        },
        {
          "t": "p",
          "html": "One limit on the reverse story, and it is the hinge between this topic and Topic 04.<br><br>\"No current in reverse\" holds only <b>below the breakdown voltage</b> <i>V</i><sub>br</sub>. Push the reverse voltage past it and the current shoots up almost vertically. For an ordinary diode that is fatal: nothing is limiting the current, the power dissipated in a tiny volume rises with it, and the diode is destroyed by its own heat within moments.<br><br>Notice carefully what kills it. Not the breakdown itself, but the <b>heat</b>. If you put a resistor in series to hold the current down, breakdown becomes perfectly survivable and even useful, because the voltage across the junction stays pinned while the current changes. That single observation is the entire Zener diode, and Topic 04 is built on it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHAT BIAS DOES TO THE BARRIER",
          "tag": "one sign, and everything follows",
          "main": "forward: <i>V</i><sub>eff</sub> = <i>V</i><sub>b</sub> − <i>V</i><br>reverse: <i>V</i><sub>eff</sub> = <i>V</i><sub>b</sub> + <i>V</i>",
          "legend": [
            "<i>V</i><sub>b</sub> = built-in barrier potential, in volts (V): 0.3 V for germanium, 0.7 V for silicon",
            "<i>V</i> = magnitude of the applied bias, in volts (V)",
            "<i>V</i><sub>eff</sub> = the effective barrier a majority carrier must still climb, in volts (V)"
          ],
          "note": "Everything else in this topic is a consequence of these two signs. Lower barrier means a narrower depletion region, lower resistance and exponentially more carriers able to cross. Higher barrier means a wider depletion region, higher resistance and nothing but the minority trickle."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.5 · THE SAME STORY IN ENERGY: BAND BENDING",
          "chips": ["at equilibrium", "under forward bias"],
          "captions": [
            "The two band edges drawn right across the junction, p-side on the left and n-side on the right. Far from the junction the bands are flat and the gap between them is the same on both sides, because it is the same crystal. Near the junction they BEND, and the height of the step is exactly e times the barrier potential. An electron sitting in the conduction band on the n-side has to climb that step to reach the p-side, which is what \"barrier\" means in energy language. Notice the gap never changes width: the whole ladder shifts, it does not stretch.",
            "Forward bias, same picture, smaller step. The applied voltage has lifted the n-side relative to the p-side, so the climb is now e times (Vb minus V) instead of e times Vb. Because the number of electrons with enough energy to make a climb falls off exponentially with the height of the climb, shaving a couple of tenths of a volt off the step multiplies the crossing rate by thousands. That is the origin of the exponential in the diode equation, and it is why the forward current turns on so abruptly at the knee."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [0, 10],
              "aspect": 0.62,
              "axes": "none",
              "polys": [
                { "pts": [[0.5, 8.4], [3.6, 8.4], [4.4, 8.2], [5.0, 7.0], [5.6, 6.0], [6.4, 5.7], [9.5, 5.6]], "smooth": true, "tone": "ink" },
                { "pts": [[0.5, 5.8], [3.6, 5.8], [4.4, 5.6], [5.0, 4.4], [5.6, 3.4], [6.4, 3.1], [9.5, 3.0]], "smooth": true, "tone": "ink" }
              ],
              "segments": [{ "from": [6.4, 8.4], "to": [8.0, 8.4], "dash": true, "soft": true }],
              "arrows": [
                { "from": [7.0, 5.6], "to": [7.0, 8.4], "head": "both", "tone": "amber", "label": "eVb", "at": "mid" }
              ],
              "labels": [
                { "x": 1.8, "y": 9.4, "text": "p-side" },
                { "x": 8.2, "y": 9.4, "text": "n-side" },
                { "x": 2.0, "y": 7.1, "text": "gap", "soft": true },
                { "x": 1.5, "y": 4.6, "text": "valence band", "soft": true }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 10],
              "aspect": 0.62,
              "axes": "none",
              "polys": [
                { "pts": [[0.5, 7.2], [3.6, 7.2], [4.4, 7.05], [5.0, 6.5], [5.6, 5.9], [6.4, 5.7], [9.5, 5.6]], "smooth": true, "tone": "ink" },
                { "pts": [[0.5, 4.6], [3.6, 4.6], [4.4, 4.45], [5.0, 3.9], [5.6, 3.3], [6.4, 3.1], [9.5, 3.0]], "smooth": true, "tone": "ink" }
              ],
              "segments": [{ "from": [7.9, 7.2], "to": [9.2, 7.2], "dash": true, "soft": true }],
              "arrows": [
                { "from": [8.5, 5.6], "to": [8.5, 7.2], "head": "both", "tone": "amber", "label": "e(Vb − V)", "at": "mid" },
                { "from": [7.5, 6.6], "to": [5.0, 6.6], "tone": "amber", "label": "electrons", "at": "below" }
              ],
              "labels": [
                { "x": 1.8, "y": 9.4, "text": "p-side" },
                { "x": 8.2, "y": 9.4, "text": "n-side" },
                { "x": 1.5, "y": 3.4, "text": "valence band", "soft": true }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CURRENT IN A SIMPLE DIODE CIRCUIT",
          "tag": "always subtract the barrier",
          "main": "<i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>) / (<i>R</i> + <i>r</i><sub>f</sub>)",
          "legend": [
            "<i>I</i> = current in the series loop, in amperes (A)",
            "<i>V</i><sub>battery</sub> = supply voltage, in volts (V); the diode must be FORWARD biased for this to apply at all",
            "<i>V</i><sub>b</sub> = barrier potential dropped across the diode, in volts (V): 0.3 V Ge, 0.7 V Si",
            "<i>R</i> = external series resistance and <i>r</i><sub>f</sub> = the diode's own forward resistance, both in ohms (Ω)"
          ],
          "note": "The barrier is SUBTRACTED from the driving voltage, never divided into it. Dropping the −<i>V</i><sub>b</sub> is the single most frequent numerical error in this chapter, and it is worth a full mark every time. If the diode is reverse biased, this formula does not apply: the branch is an open circuit and <i>I</i> = 0."
        },
        {
          "t": "proc",
          "title": "Solving any diode circuit without getting lost",
          "steps": [
            "<b>Decide the bias from the polarity, one diode at a time.</b> Trace from the battery's positive terminal. If it reaches the diode's p-side (the triangle end, not the bar), that diode is forward biased. If it reaches the n-side (the bar), reverse.",
            "<b>Replace every reverse-biased diode by a GAP.</b> An open circuit. No current in that branch at all, so you can rub the branch out and redraw. Half of every exam diode circuit dies at this step, which is the point of the question.",
            "<b>Replace every forward-biased diode by a battery of <i>V</i><sub>b</sub> volts</b> opposing the supply, 0.7 V for silicon and 0.3 V for germanium, plus its forward resistance <i>r</i><sub>f</sub> in series if the question gives one. Never write <i>V</i> = <i>IR</i> across the diode itself: a diode is NON-OHMIC and has no single resistance.",
            "<b>Now apply Ohm's law and Kirchhoff to what is left,</b> which is an ordinary resistor network with an extra battery or two in it. Chapter 3, Current Electricity, has every tool you need from here and nothing new is required.",
            "<b>Check the sign of the answer.</b> If a current comes out negative, the diode you assumed was conducting is not, so go back to step 1 and re-decide. A diode cannot carry current backwards, so a negative answer is never the answer."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.6 · THE I-V CHARACTERISTIC, ONE BRANCH AT A TIME",
          "chips": ["the forward branch", "the reverse branch"],
          "captions": [
            "The forward branch of a silicon diode, on honest linear axes: volts across, milliamps up. Almost nothing happens until about 0.6 V, and then the current climbs so steeply that the curve is nearly vertical past 0.72 V. The bend is the KNEE, at roughly 0.7 V for silicon and 0.3 V for germanium. Past the knee the voltage barely moves however hard you drive the current, which is what licenses the whole \"replace the diode with a 0.7 V battery\" trick.",
            "The reverse branch, and read the vertical axis carefully: it is in MICROAMPS, ten thousand times smaller than the milliamps of the first chip. Put the two chips on one pair of axes and this whole branch would flatten onto the horizontal line, which is exactly why the printed figure has to cheat with two different scales and why these are two chips instead. The current is nearly constant at about one microamp, whatever the voltage, because it is carried by the few thermally generated minority carriers and there are only so many of them. Then at the breakdown voltage Vbr the current plunges, and an ordinary diode not protected by a series resistor is destroyed by the heat."
          ],
          "frames": [
            {
              "x": [0, 0.8],
              "y": [0, 30],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "V (volts)",
              "axisY": "I (mA)",
              "ticksX": { "at": [0.2, 0.4, 0.6, 0.7], "labels": ["0.2", "0.4", "0.6", "0.7"] },
              "ticksY": { "at": [10, 20, 30], "labels": ["10", "20", "30"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[0, 0], [0.3, 0], [0.45, 0.001], [0.5, 0.004], [0.55, 0.03], [0.6, 0.21], [0.64, 0.98], [0.66, 2.1], [0.68, 4.6], [0.7, 10.0], [0.715, 17.9], [0.725, 26.2], [0.728, 29.5]],
                  "smooth": true
                }
              ],
              "points": [{ "x": 0.7, "y": 10.0, "label": "knee 0.7 V", "at": "sw" }],
              "labels": [{ "x": 0.32, "y": 3.5, "text": "almost nothing", "soft": true }]
            },
            {
              "x": [-12, 2],
              "y": [-26, 3],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "V (volts)",
              "axisY": "I (µA)",
              "ticksX": { "at": [-10, -5, 0], "labels": ["−10", "−5", "0"] },
              "ticksY": { "at": [-20, -10], "labels": ["−20", "−10"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[-10.6, -25], [-10.5, -14], [-10.3, -6], [-10, -2], [-9.5, -1.3], [-8, -1.1], [-4, -1.05], [-1, -1.0], [-0.2, -0.9], [0, 0], [0.3, 0.05], [0.45, 0.64], [0.49, 3.0]],
                  "smooth": true
                }
              ],
              "points": [{ "x": -10, "y": -2, "label": "Vbr", "at": "sw" }],
              "labels": [{ "x": -5.5, "y": 2.0, "text": "reverse saturation", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE IDEAL DIODE EQUATION",
          "tag": "SHOCKLEY",
          "main": "<i>I</i> = <i>I</i><sub>S</sub>(e<sup><i>V</i>/<i>V</i><sub>T</sub></sup> − 1),  <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> ≈ 25.9 mV at 300 K",
          "legend": [
            "<i>I</i> = diode current, in amperes (A), positive in the forward direction",
            "<i>I</i><sub>S</sub> = reverse saturation current, in amperes (A), typically nanoamps for silicon",
            "<i>V</i> = applied bias, in volts (V), POSITIVE for forward and NEGATIVE for reverse",
            "<i>V</i><sub>T</sub> = thermal voltage, in volts (V), equal to <i>k</i><sub>B</sub><i>T</i>/<i>e</i>; a VOLTAGE, not an energy",
            "<i>T</i> = absolute temperature (K), <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J/K, <i>e</i> = 1.6 × 10<sup>−19</sup> C"
          ],
          "note": "One equation covers both branches, which is why it is worth the exponential. Silicon and germanium differ in it only through <i>I</i><sub>S</sub>. The two limits below are the whole reason the curve looks the way Figure 14.6 draws it."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · READING THE DIODE EQUATION AT ITS LIMITS, TAP A LINE",
          "steps": [
            {
              "eq": "at <i>V</i> = 0: <i>I</i> = <i>I</i><sub>S</sub>(e<sup>0</sup> − 1) = <i>I</i><sub>S</sub>(1 − 1) = 0, EXACTLY",
              "why": "Not approximately zero. Exactly zero, and it has to be: an unbiased junction sitting in the dark with nothing across it cannot deliver current to anything. This is what the −1 is FOR, and a student who drops it everywhere gets <i>I</i> = <i>I</i><sub>S</sub> at zero volts and never notices."
            },
            {
              "eq": "deep in reverse, <i>V</i> large and negative: e<sup><i>V</i>/<i>V</i><sub>T</sub></sup> → 0, so <i>I</i> → <i>I</i><sub>S</sub>(0 − 1) = −<i>I</i><sub>S</sub>",
              "why": "The reverse current SATURATES at a fixed value and stops responding to voltage, which is why it is called the reverse saturation current and why Figure 14.6's reverse branch is flat. And \"deep\" is not deep at all: at −0.1 V the exponential is already e<sup>−3.86</sup> = 0.021, so the current is within 2 per cent of −<i>I</i><sub>S</sub> at a tenth of a volt."
            },
            {
              "eq": "well into forward, <i>V</i> a few tenths of a volt: e<sup><i>V</i>/<i>V</i><sub>T</sub></sup> ≫ 1, so <i>I</i> ≈ <i>I</i><sub>S</sub>e<sup><i>V</i>/<i>V</i><sub>T</sub></sup>",
              "why": "At 0.30 V the exponent is 0.30/0.0259 = 11.6 and e<sup>11.6</sup> is about 1.1 × 10<sup>5</sup>, so the −1 is a hundred-thousandth of the answer. Drop it and the exponential is all that is left."
            },
            {
              "eq": "in that regime, doubling the current costs Δ<i>V</i> = <i>V</i><sub>T</sub> ln 2 = 18 mV, whatever the current was",
              "why": "Take the ratio of two currents: <i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = e<sup>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)/<i>V</i><sub>T</sub></sup>, and the individual currents cancel. So the step in voltage depends only on the RATIO you want, never on where you start. Tenfold costs <i>V</i><sub>T</sub> ln 10 = 59.6 mV, about 60 mV per decade."
            },
            {
              "eq": "therefore a forward silicon diode drops about 0.7 V whatever current it carries",
              "why": "Going from 1 mA to 100 mA is two decades, which costs 2 × 59.6 = 119 mV. The current moves by a factor of a hundred and the voltage moves by a tenth of a volt. That logarithmic stiffness is the whole justification for the \"replace the diode with a 0.7 V battery\" model, and now you know exactly how good an approximation it is."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FIELD INSIDE THE DEPLETION REGION",
          "tag": "uniform-field model",
          "main": "<i>E</i> = <i>V</i><sub>b</sub> / <i>d</i>",
          "legend": [
            "<i>E</i> = magnitude of the electric field in the depletion region, in volts per metre (V m<sup>−1</sup>)",
            "<i>V</i><sub>b</sub> = barrier potential across the region, in volts (V)",
            "<i>d</i> = depletion-region width, in metres (m), typically a fraction of a micrometre"
          ],
          "note": "The field points from the n-side to the p-side, always. The numbers are startling: 0.3 V across 2 micrometres is 1.5 × 10<sup>5</sup> V m<sup>−1</sup>, a field you would need 150 kV across a metre of air to match. That is what makes the depletion region such a violent place, and it is the reason a Zener diode in Topic 04 can be made to break down at a few volts."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A silicon diode (barrier potential 0.7 V, negligible forward resistance) is in series with <i>R</i> = 430 Ω across a 5 V battery, with the p-side towards the positive terminal. Find the current.",
          "steps": [
            "Bias first: p-side to positive means FORWARD bias, so the diode conducts and the formula applies.",
            "Of the 5 V, the diode takes 0.7 V. The rest drives current through <i>R</i>.",
            "<i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/<i>R</i> = (5 − 0.7)/430 = 4.3/430",
            "= 0.010 A = 10 mA. Sanity check: forget the barrier drop and you get 5/430 = 11.6 mA, which is 16 per cent too big. That subtraction is exactly the marks-losing step."
          ],
          "ans": "<i>I</i> = 10 mA."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A germanium diode (<i>V</i><sub>b</sub> = 0.3 V) and a silicon diode (<i>V</i><sub>b</sub> = 0.7 V) are connected in PARALLEL, both forward biased, in series with a resistor across a battery. Which one actually conducts?",
          "steps": [
            "The trap is to say \"both are forward biased, so both conduct\". Check what parallel means first.",
            "Being in parallel, the two diodes share the SAME voltage across them at all times.",
            "As the supply is raised, the germanium diode reaches its 0.3 V threshold first and starts conducting.",
            "Once it conducts, it CLAMPS the shared voltage at about 0.3 V, because a conducting diode holds its drop nearly fixed however much current it takes.",
            "The silicon diode therefore never sees the 0.7 V it needs, and stays effectively off."
          ],
          "ans": "Only the germanium diode conducts. General rule: among parallel forward diodes the LOWEST barrier wins and holds the others off. In SERIES the logic flips, and the barriers simply add."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A silicon junction at 300 K obeys <i>I</i> = <i>I</i><sub>S</sub>(e<sup><i>V</i>/<i>V</i><sub>T</sub></sup> − 1) with <i>I</i><sub>S</sub> = 2.0 × 10<sup>−9</sup> A. Find the forward current at <i>V</i> = 0.30 V, and show that the voltage step needed to double the current does not depend on the current.",
          "steps": [
            "Thermal voltage: <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> = (1.38 × 10<sup>−23</sup>)(300)/(1.6 × 10<sup>−19</sup>) = 0.0259 V = 25.9 mV.",
            "Exponent at 0.30 V: <i>V</i>/<i>V</i><sub>T</sub> = 0.30/0.0259 = 11.6, and e<sup>11.6</sup> ≈ 1.1 × 10<sup>5</sup>, which is far bigger than 1, so drop the −1.",
            "<i>I</i> ≈ (2.0 × 10<sup>−9</sup>)(1.1 × 10<sup>5</sup>) = 2.2 × 10<sup>−4</sup> A = 0.22 mA.",
            "For the doubling: <i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = e<sup>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)/<i>V</i><sub>T</sub></sup> = 2, so Δ<i>V</i> = <i>V</i><sub>T</sub> ln 2 = (25.9 mV)(0.693) = 18 mV.",
            "There is no <i>I</i> anywhere in that answer. Every doubling, anywhere on the steep part of the curve, costs the same 18 mV, and every tenfold rise costs <i>V</i><sub>T</sub> ln 10 = 59.6 mV."
          ],
          "ans": "<i>I</i> ≈ 0.22 mA; Δ<i>V</i> = 18 mV per doubling, about 60 mV per decade, independent of the current."
        },
        {
          "t": "mcq",
          "q": "When a p-n junction is reverse biased, the width of the depletion region and the barrier potential respectively:",
          "opts": [
            { "label": "decrease, decrease", "nudge": "This is the FORWARD-bias behaviour. It is the answer of somebody who swapped the two cases, which is the commonest single error in the topic." },
            { "label": "increase, increase", "nudge": null },
            { "label": "increase, decrease", "nudge": "Half right. Width and barrier are not independent: the barrier IS the potential across the exposed fixed ions, so a wider region always means a taller barrier." },
            { "label": "stay the same, increase", "nudge": "The width cannot stay the same while the barrier rises. A taller barrier needs more exposed fixed charge, and more exposed charge is exactly what a wider region means." }
          ],
          "correct": 1,
          "solution": "The external field ADDS to the built-in field, sweeping majority carriers away from the junction. More fixed ions are uncovered, so the depletion region widens, and the effective barrier rises to <i>V</i><sub>b</sub> + <i>V</i>. Width and barrier always move together, in both directions."
        },
        {
          "t": "mcq",
          "q": "The small current that flows through a reverse-biased p-n junction, below breakdown, is due to:",
          "opts": [
            { "label": "majority carriers", "nudge": "Reverses the logic. Majority carriers are precisely what reverse bias suppresses: the field pushes them away from the junction." },
            { "label": "minority carriers", "nudge": null },
            { "label": "breakdown of covalent bonds in the depletion region", "nudge": "That describes BREAKDOWN, which is a different and much higher-voltage regime. Below breakdown no bonds are being torn by the field." },
            { "label": "the barrier potential", "nudge": "Confuses the cause with the field that drives it. The barrier field is what sweeps the carriers across, but there has to be a carrier there in the first place." }
          ],
          "correct": 1,
          "solution": "Reverse bias blocks majority carriers but HELPS thermally generated minority carriers across, since the field pushes them the way they were already going. Their number is set by temperature and not by voltage, which is why the current saturates: it is nearly voltage-independent, exactly as the diode equation's −<i>I</i><sub>S</sub> limit says."
        },
        {
          "t": "mcq",
          "q": "For an IDEAL diode, the forward and reverse resistances are respectively:",
          "opts": [
            { "label": "infinite and zero", "nudge": "Flips the two. This is the classic slip from forgetting which bias conducts, and it would make the device conduct backwards and block forwards." },
            { "label": "zero and infinite", "nudge": null },
            { "label": "zero and zero", "nudge": "That is a plain wire: it conducts equally both ways, so it has no valve action at all and could not rectify anything." },
            { "label": "infinite and infinite", "nudge": "That is an insulator: it conducts in neither direction, so it is not a component, it is a gap." }
          ],
          "correct": 1,
          "solution": "An ideal diode is a perfect closed switch when forward biased (zero resistance) and a perfect open switch when reverse biased (infinite resistance). The one-way asymmetry is what DEFINES a diode, and the two wrong extremes destroy it in opposite ways."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Define the depletion region and the barrier potential of a p-n junction, and give typical barrier-potential values for germanium and silicon.",
              "a": "Depletion region: the carrier-free zone at the junction containing only the fixed ionised dopant cores, negative on the p-side and positive on the n-side. Barrier potential: the built-in voltage across that region which opposes further diffusion, self-built rather than applied. <i>V</i><sub>b</sub> ≈ 0.3 V for germanium and ≈ 0.7 V for silicon at room temperature."
            },
            {
              "q": "[NEET] Why can a p-n junction not be made by pressing a p-type slab firmly against an n-type slab?",
              "a": "Because a polished surface is still rough on a scale thousands of times larger than the spacing between atoms, so the contact is a broken discontinuity with gaps in it rather than a continuous lattice. Diffusion and the depletion region need one crystal whose doping changes partway through, which is why junctions are GROWN and not assembled."
            },
            {
              "q": "[JEE MAIN] The depletion region of a p-n junction is 2.0 µm wide and the barrier potential is 0.30 V. Assuming a uniform field, find the magnitude and direction of the electric field at the junction.",
              "a": "<i>E</i> = <i>V</i><sub>b</sub>/<i>d</i> = 0.30/(2.0 × 10<sup>−6</sup>) = 1.5 × 10<sup>5</sup> V m<sup>−1</sup>, directed from the n-side towards the p-side. That is the direction the exposed positive donor ions point the field, and it is the direction that pushes minority electrons back into the n-side."
            },
            {
              "q": "[JEE MAIN] A germanium diode (<i>V</i><sub>b</sub> = 0.3 V, forward resistance <i>r</i><sub>f</sub> = 15 Ω) is forward biased by a 6 V battery in series with <i>R</i> = 285 Ω. Find the current.",
              "a": "<i>I</i> = (6 − 0.3)/(285 + 15) = 5.7/300 = 0.019 A = 19 mA. Both the barrier subtraction and the forward resistance belong in the same one-line calculation; leaving out either one is worth a mark."
            },
            {
              "q": "[JEE ADVANCED] An ideal diode at 300 K (<i>V</i><sub>T</sub> = 25.9 mV) carries current <i>I</i><sub>1</sub> at a forward voltage of 0.20 V. By what factor does the current increase when the forward voltage is raised to 0.26 V at the same temperature?",
              "a": "Factor = e<sup>(0.26 − 0.20)/0.0259</sup> = e<sup>2.32</sup> ≈ 10.2, so roughly a tenfold rise. That is the 60 mV per decade rule read backwards: 60 mV of extra forward voltage buys one decade of current, at 300 K, for any diode."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading the bias off the picture instead of the terminals.</b> Forward bias is p-region to the battery's PLUS and n-region to its MINUS. Reverse is n to plus, p to minus. A diode symbol can point any way on a page, and in a bridge rectifier two of the four point the wrong way on purpose.",
            "<b>Treating the diode as ohmic.</b> Never write <i>V</i> = <i>IR</i> across the diode. It is non-ohmic and has no single resistance. Model it as a fixed <i>V</i><sub>b</sub> drop when forward and an open circuit when reverse, then use Ohm's law on everything else. (For small a.c. signals riding on a steady current there IS a useful slope resistance, the dynamic resistance <i>r</i><sub>d</sub> = Δ<i>V</i>/Δ<i>I</i>, but it is a slope and not a ratio, and it changes with the operating current.)",
            "<b>Forgetting the barrier drop.</b> The usable driving voltage in a forward circuit is <i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>, not the full battery voltage. This is the most frequent numerical error in the chapter.",
            "<b>Swapping what bias does to the depletion region.</b> Forward NARROWS it (lower barrier, more current); reverse WIDENS it (higher barrier, almost none). Width and barrier always move the same way as each other.",
            "<b>Dropping the −1 in the diode equation everywhere.</b> It is negligible in strong forward bias and it is the entire answer near zero bias, where it is what makes the current exactly zero rather than <i>I</i><sub>S</sub>."
          ]
        },
        {
          "t": "protip",
          "html": "redraw every diode circuit twice using the switch model: forward is a wire (or a 0.7 V battery), reverse is a gap. the problem collapses into resistor algebra in seconds and you instantly see which branches are dead. and if you meet a real diode in an advanced question, the only thing that changes in the shockley equation is an ideality factor <i>n</i> in the exponent, between about 1.1 and 1.5 for silicon, which shifts the 60 mV per decade to 60<i>n</i> mV. everything else you know still holds."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "junction at equilibrium: diffusion balances drift", "note": "Gives the depletion region (fixed ions, no mobile carriers) and the barrier potential V_b." },
            { "f": "<i>V</i><sub>b</sub> ≈ 0.3 V (Ge), ≈ 0.7 V (Si); internal field points n → p", "note": "Self-built, not applied. You cannot read it on a voltmeter across the terminals." },
            { "f": "forward = p to +, n to −: barrier → <i>V</i><sub>b</sub> − <i>V</i>, region narrows", "note": "Current rises exponentially past the knee. Defined by terminals, never by the picture." },
            { "f": "reverse = n to +, p to −: barrier → <i>V</i><sub>b</sub> + <i>V</i>, region widens", "note": "Only the reverse saturation current, carried by minority carriers, until breakdown at V_br." },
            { "f": "<i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/(<i>R</i> + <i>r</i><sub>f</sub>)", "note": "Always subtract the barrier. Reverse-biased branch: open circuit, I = 0." },
            { "f": "<i>I</i> = <i>I</i><sub>S</sub>(e<sup><i>V</i>/<i>V</i><sub>T</sub></sup> − 1), <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> ≈ 25.9 mV at 300 K", "note": "Zero at V = 0 exactly; −I_S deep in reverse; about 60 mV per decade forward." },
            { "f": "<i>E</i> = <i>V</i><sub>b</sub>/<i>d</i>", "note": "0.3 V across 2 µm is 1.5 × 10<sup>5</sup> V/m. The depletion region is a violent place." }
          ],
          "aids": [
            "forward is friendly, barrier falls. reverse resists, barrier rises.",
            "p to plus is forward. that is the whole rule, and it does not care which way the triangle points.",
            "diode = one-way valve: zero resistance forward, infinite resistance reverse, in the ideal case.",
            "sixty millivolts per decade. a diode's drop is stiff, which is why 0.7 V is a usable constant."
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Rectifiers and Filters",
      "chip": "03 A.C. TO D.C.",
      "kalam": "the wall gives you a wave, your phone wants a flat line",
      "blocks": [
        {
          "t": "p",
          "html": "Here is the problem the diode was invented to solve. Every socket in the country delivers <b>alternating</b> current: a voltage that swings from positive to negative and back fifty times a second. Almost every device you own runs on <b>direct</b> current: a steady voltage that does not swing at all. Something has to convert one into the other, and that something is a diode.<br><br>The trick is exactly the one-way valve behaviour from Topic 02. Feed an a.c. voltage to a diode in series with a load. On the half-cycle that forward biases the diode, current flows through the load. On the half-cycle that reverse biases it, the diode is an open circuit and nothing flows. The negative half of the wave has been deleted."
        },
        {
          "t": "def",
          "term": "Rectification",
          "html": "The process of converting alternating voltage into <b>unidirectional</b> voltage using the one-way conduction of a diode. Note the word: unidirectional, not steady. What comes out of a rectifier is <b>pulsating d.c.</b>, a voltage that never goes negative but is far from flat. Making it flat is a second, separate job, done by a <b>filter</b>, and the rest of this topic is those two jobs in order."
        },
        {
          "t": "think",
          "html": "a rectifier is a turnstile at a railway station. people walk up to it from both sides all day long, and it only lets them through one way. what comes out the far side is not a steady stream of people, it is a burst every time somebody arrives from the right direction, and nobody at all in between. that burstiness is the pulsating part, and smoothing it out is somebody else's job."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "TWO WAYS TO RECTIFY",
          "chips": ["half-wave: one diode", "full-wave: the bridge"],
          "captions": [
            "The half-wave rectifier, which is as simple as it gets: one diode in series with the load. The a.c. comes in at the two terminals on the left, usually from a transformer secondary. On the half-cycle that makes the upper input terminal positive, the diode's p-side is positive, so it is forward biased and current flows the way the arrow shows. On the other half-cycle the diode is reverse biased and the loop is broken, so the load sees nothing at all. Half of every cycle is simply thrown away, which is where the name and the poor 40.6 per cent efficiency ceiling both come from.",
            "The bridge rectifier: four diodes in a diamond, drawn inside the dashed box because that is genuinely how you buy them, as one sealed component with four leads. The a.c. enters at the left and right corners of the diamond and the load hangs off the top and bottom corners. On either half-cycle exactly TWO of the four diodes are forward biased, in series, and they steer the current the same way through the load. Nothing is thrown away, so the output has twice as many pulses per second and twice the efficiency ceiling. The great practical advantage is that it needs no centre-tapped transformer, which is why almost every mains adapter in your house has one in it."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "circuit": {
                "grid": [14, 10],
                "wires": [
                  { "from": [1, 2.5], "to": [4, 2.5] },
                  { "from": [7, 2.5], "to": [11, 2.5] },
                  { "from": [11, 2.5], "to": [11, 7.5] },
                  { "from": [11, 7.5], "to": [1, 7.5] }
                ],
                "parts": [
                  { "at": [4, 2.5], "to": [7, 2.5], "kind": "diode", "tone": "amber" },
                  { "at": [11, 2.5], "to": [11, 7.5], "kind": "R", "label": "load", "side": "right" }
                ],
                "nodes": [
                  { "at": [1, 2.5], "junction": true },
                  { "at": [1, 7.5], "junction": true }
                ],
                "currents": [{ "at": [7.6, 2.5], "to": [9.8, 2.5], "label": "I" }],
                "regions": [
                  { "from": [3.4, 1.4], "to": [7.6, 3.6], "label": "one diode", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 1.9, "y": 5.0, "text": "a.c. in" }]
            },
            {
              "aspect": 0.72,
              "circuit": {
                "grid": [14, 10],
                "wires": [
                  { "from": [1, 4.5], "to": [3, 4.5] },
                  { "from": [8, 4.5], "to": [9.6, 4.5] },
                  { "from": [9.6, 4.5], "to": [9.6, 9.2] },
                  { "from": [9.6, 9.2], "to": [1, 9.2] },
                  { "from": [5.5, 2.2], "to": [5.5, 0.9] },
                  { "from": [5.5, 0.9], "to": [12.4, 0.9] },
                  { "from": [12.4, 0.9], "to": [12.4, 2.8] },
                  { "from": [12.4, 6.2], "to": [12.4, 7.8] },
                  { "from": [12.4, 7.8], "to": [5.5, 7.8] },
                  { "from": [5.5, 7.8], "to": [5.5, 6.8] }
                ],
                "parts": [
                  { "at": [3, 4.5], "to": [5.5, 2.2], "kind": "diode", "tone": "amber" },
                  { "at": [8, 4.5], "to": [5.5, 2.2], "kind": "diode", "tone": "amber" },
                  { "at": [5.5, 6.8], "to": [3, 4.5], "kind": "diode", "tone": "amber" },
                  { "at": [5.5, 6.8], "to": [8, 4.5], "kind": "diode", "tone": "amber" },
                  { "at": [12.4, 2.8], "to": [12.4, 6.2], "kind": "R", "label": "load", "side": "right" }
                ],
                "nodes": [
                  { "at": [1, 4.5], "junction": true },
                  { "at": [1, 9.2], "junction": true },
                  { "at": [5.5, 2.2], "junction": true },
                  { "at": [5.5, 6.8], "junction": true }
                ],
                "regions": [
                  { "from": [2.4, 1.6], "to": [8.6, 7.4], "label": "bridge: 4 diodes", "tone": "amber" }
                ]
              },
              "marks": [
                { "x": 6.4, "y": 1.5, "glyph": "plus" },
                { "x": 4.6, "y": 7.3, "glyph": "minus" }
              ],
              "labels": [{ "x": 1.4, "y": 3.6, "text": "a.c. in" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "There are exactly two standard ways to build a full-wave rectifier, and an examiner may ask for either.<br><br>The <b>centre-tap rectifier</b> uses a centre-tapped transformer and only <b>two</b> diodes. The centre tap is the zero reference, and the two ends of the secondary swing in opposite directions, so on each half-cycle one diode is forward biased and the other is reverse biased. Simple, but it needs that special transformer, and each diode has to withstand twice the peak voltage in reverse.<br><br>The <b>bridge rectifier</b> uses <b>four</b> diodes and <b>no</b> centre tap. On each half-cycle two diodes conduct in series and send current the same way through the load. It is the arrangement in almost every real power supply, and each diode only has to withstand the peak voltage.<br><br>Both produce identical output: twice the pulse rate of the input, and the same 81.2 per cent efficiency ceiling."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "WHAT COMES OUT, ON THE SAME TIME AXIS",
          "chips": ["the a.c. input", "half-wave output", "full-wave output"],
          "captions": [
            "The input: a 50 Hz sine of peak value 10 V, so one complete cycle takes 20 ms and the picture covers two of them. Half the time the voltage is positive and half the time it is negative, and its average over a whole cycle is exactly zero. That is what makes it useless for powering anything that cares about polarity.",
            "Half-wave output, same axes, same peak. The negative halves have simply been deleted, because the diode was reverse biased and the loop was open. One hump per input cycle, so the output pulse frequency EQUALS the input frequency: 50 Hz in, 50 Hz out. The average is no longer zero, it is the peak divided by pi, but look at how much of the time axis is dead. That wasted half is the reason the efficiency ceiling is only 40.6 per cent.",
            "Full-wave output, same axes again. Now the negative halves have been FLIPPED rather than deleted, because the other pair of bridge diodes took over and sent that half-cycle through the load the same way round. Two humps per input cycle, so the output frequency is DOUBLE the input: 50 Hz in, 100 Hz out. The average is twice the half-wave value and the gaps between pulses are half as long, which is why a full-wave output is both more efficient and far easier to smooth."
          ],
          "frames": [
            {
              "x": [0, 40],
              "y": [-12, 12],
              "aspect": 0.62,
              "axes": "auto",
              "axisX": "t (ms)",
              "axisY": "V (volts)",
              "ticksX": { "at": [10, 20, 30, 40], "labels": ["10", "20", "30", "40"] },
              "ticksY": { "at": [-10, 10], "labels": ["−10", "10"] },
              "curves": [{ "c": "sin", "a": 10, "b": 0.31416 }],
              "labels": [{ "x": 15, "y": 11.0, "text": "the a.c. input", "soft": true }]
            },
            {
              "x": [0, 40],
              "y": [-12, 12],
              "aspect": 0.62,
              "axes": "auto",
              "axisX": "t (ms)",
              "axisY": "V (volts)",
              "ticksX": { "at": [10, 20, 30, 40], "labels": ["10", "20", "30", "40"] },
              "ticksY": { "at": [-10, 10], "labels": ["−10", "10"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[0, 0], [1, 3.09], [2, 5.88], [4, 9.51], [5, 10], [6, 9.51], [8, 5.88], [9, 3.09], [10, 0], [15, 0], [20, 0], [21, 3.09], [22, 5.88], [24, 9.51], [25, 10], [26, 9.51], [28, 5.88], [29, 3.09], [30, 0], [35, 0], [40, 0]]
                }
              ],
              "labels": [{ "x": 15, "y": -6.0, "text": "nothing here at all", "soft": true }]
            },
            {
              "x": [0, 40],
              "y": [-12, 12],
              "aspect": 0.62,
              "axes": "auto",
              "axisX": "t (ms)",
              "axisY": "V (volts)",
              "ticksX": { "at": [10, 20, 30, 40], "labels": ["10", "20", "30", "40"] },
              "ticksY": { "at": [-10, 10], "labels": ["−10", "10"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[0, 0], [1, 3.09], [2, 5.88], [4, 9.51], [5, 10], [6, 9.51], [8, 5.88], [9, 3.09], [10, 0], [11, 3.09], [12, 5.88], [14, 9.51], [15, 10], [16, 9.51], [18, 5.88], [19, 3.09], [20, 0], [21, 3.09], [22, 5.88], [24, 9.51], [25, 10], [26, 9.51], [28, 5.88], [29, 3.09], [30, 0], [31, 3.09], [32, 5.88], [34, 9.51], [35, 10], [36, 9.51], [38, 5.88], [39, 3.09], [40, 0]]
                }
              ],
              "labels": [{ "x": 20, "y": -6.0, "text": "both halves used", "soft": true }]
            }
          ]
        },
        {
          "t": "p",
          "html": "One number a rectifier question can ask for that is not on the efficiency table: the <b>peak inverse voltage</b>, or PIV. It is the largest reverse voltage any single diode has to survive during the blocking half-cycle, and it decides which diode you are allowed to buy.<br><br>In a <b>half-wave</b> rectifier the non-conducting diode has the full supply across it, so PIV = <i>V</i><sub>m</sub>. In a <b>bridge</b> the two blocking diodes share the reverse voltage in the same way, so again PIV = <i>V</i><sub>m</sub>. In a <b>centre-tap</b> rectifier the blocking diode sees the whole secondary winding, both halves of it, so PIV = 2<i>V</i><sub>m</sub>.<br><br>That factor of two is the practical reason engineers prefer the bridge even though it uses twice as many diodes: four cheap diodes rated for <i>V</i><sub>m</sub> beat two diodes rated for 2<i>V</i><sub>m</sub> plus a special transformer."
        },
        {
          "t": "defgrid",
          "title": "The two ways to build a full-wave rectifier",
          "rows": [
            { "k": "Centre-tap: diodes", "v": "TWO, each conducting on alternate half-cycles, with the centre tap as the zero reference." },
            { "k": "Centre-tap: transformer", "v": "Must be centre-tapped, which is a special and more expensive part." },
            { "k": "Centre-tap: PIV", "v": "2V_m, because the blocking diode sees the whole secondary winding." },
            { "k": "Bridge: diodes", "v": "FOUR, in a diamond, with exactly two conducting IN SERIES on each half-cycle." },
            { "k": "Bridge: transformer", "v": "No centre tap needed at all, and often no transformer at all in low-voltage work." },
            { "k": "Bridge: PIV", "v": "V_m only. This, plus the ordinary transformer, is why the bridge is what you actually find inside a mains adapter." }
          ]
        },
        {
          "t": "defgrid",
          "title": "Half-wave against full-wave, every number",
          "rows": [
            { "k": "Diodes", "v": "Half-wave: 1. Full-wave: 2 with a centre-tapped transformer, or 4 in a bridge with no centre tap." },
            { "k": "Output frequency", "v": "Half-wave: <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>. Full-wave: <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>. From 50 Hz mains: 50 Hz and 100 Hz." },
            { "k": "Average (d.c.) current", "v": "Half-wave: <i>I</i><sub>m</sub>/π. Full-wave: 2<i>I</i><sub>m</sub>/π. Exactly twice, because there are twice as many humps." },
            { "k": "R.m.s. current", "v": "Half-wave: <i>I</i><sub>m</sub>/2. Full-wave: <i>I</i><sub>m</sub>/√2, which is the ordinary sinusoidal r.m.s. from Chapter 7." },
            { "k": "Maximum efficiency", "v": "Half-wave: 40.6 per cent. Full-wave: 81.2 per cent. Both are CEILINGS, reached only when the diode's forward resistance is zero." },
            { "k": "Ripple factor", "v": "Half-wave: 1.21. Full-wave: 0.48. Dimensionless, and smaller is better, so full-wave output is much easier to smooth." }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE LOAD CURRENTS",
          "tag": "peak, average, r.m.s.",
          "main": "<i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)<br>half-wave: <i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π,  <i>I</i><sub>rms</sub> = <i>I</i><sub>m</sub>/2<br>full-wave: <i>I</i><sub>dc</sub> = 2<i>I</i><sub>m</sub>/π,  <i>I</i><sub>rms</sub> = <i>I</i><sub>m</sub>/√2",
          "legend": [
            "<i>I</i><sub>m</sub> = peak load current, in amperes (A), reached at the crest of each hump",
            "<i>V</i><sub>m</sub> = peak value of the a.c. supply voltage, in volts (V)",
            "<i>r</i><sub>f</sub> = diode forward resistance and <i>R</i><sub>L</sub> = load resistance, both in ohms (Ω)",
            "<i>I</i><sub>dc</sub> = average load current over a full cycle (A); <i>I</i><sub>rms</sub> = root-mean-square load current (A)"
          ],
          "note": "The peak current is just Ohm's law applied at the crest, with the diode modelled by its forward resistance. Everything else is an average over the shape of what is left after rectification, and the two rectifiers differ only in that shape."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE <i>I</i><sub>m</sub>/π COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "the load current is <i>i</i> = <i>I</i><sub>m</sub> sin θ for θ from 0 to π, and zero for θ from π to 2π",
              "why": "That is the half-wave output written as a formula: one hump, then nothing. The diode conducts through the positive half-cycle and blocks the negative one, and θ = ωt is just the phase."
            },
            {
              "eq": "<i>I</i><sub>dc</sub> is the average over a WHOLE cycle: (1/2π) times the integral of <i>i</i> dθ from 0 to 2π",
              "why": "Over a whole cycle, not over the conducting half. This is the step people get wrong. The dead half-cycle still counts as time during which the load received nothing, and a d.c. meter averaging over seconds sees it."
            },
            {
              "eq": "= (1/2π) times the integral of <i>I</i><sub>m</sub> sin θ dθ from 0 to π = (<i>I</i><sub>m</sub>/2π)[−cos θ] from 0 to π",
              "why": "The second half of the cycle contributes nothing, so only the first integral survives. Chapter 7, Alternating Current, sets up exactly this average for a sinusoid."
            },
            {
              "eq": "= (<i>I</i><sub>m</sub>/2π)(1 + 1) = <i>I</i><sub>m</sub>/π ≈ 0.318 <i>I</i><sub>m</sub>",
              "why": "So a half-wave rectifier delivers less than a third of its peak current as useful d.c. For a full-wave rectifier there are two humps in the same 2π, so the same integral runs twice and gives 2<i>I</i><sub>m</sub>/π ≈ 0.637 <i>I</i><sub>m</sub>, exactly double."
            },
            {
              "eq": "the r.m.s. value follows the same way and gives <i>I</i><sub>m</sub>/2 half-wave, <i>I</i><sub>m</sub>/√2 full-wave",
              "why": "Squaring first means the dead half still contributes nothing but the average of sin<sup>2</sup> over the live half is 1/2, so the mean square is <i>I</i><sub>m</sub><sup>2</sup>/4 and the root is <i>I</i><sub>m</sub>/2. The full-wave case has both halves live, so it reduces to the familiar sinusoidal <i>I</i><sub>m</sub>/√2."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RECTIFIER EFFICIENCY",
          "tag": "a ratio of powers, so a pure number",
          "main": "half-wave: η = 0.406 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)<br>full-wave: η = 0.812 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)",
          "legend": [
            "η = rectification efficiency, the d.c. output power divided by the a.c. input power, DIMENSIONLESS",
            "<i>R</i><sub>L</sub> = load resistance, in ohms (Ω)",
            "<i>r</i><sub>f</sub> = diode forward resistance, in ohms (Ω)"
          ],
          "note": "The bracket is a resistance divided by a resistance, so it can never exceed 1. That makes 40.6 and 81.2 per cent hard CEILINGS: an answer above either is arithmetically impossible and you should go back and look for the error. The two numbers come from 4/π<sup>2</sup> and 8/π<sup>2</sup>, which evaluate to 0.405 and 0.811; 40.6 and 81.2 are the figures every syllabus and every paper uses, and the difference never shows at exam precision."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RIPPLE FACTOR",
          "tag": "how far from flat",
          "main": "<i>r</i> = √((<i>I</i><sub>rms</sub>/<i>I</i><sub>dc</sub>)<sup>2</sup> − 1)",
          "legend": [
            "<i>r</i> = ripple factor, the r.m.s. value of the fluctuating part divided by the d.c. part, DIMENSIONLESS",
            "<i>I</i><sub>rms</sub> = r.m.s. load current (A); <i>I</i><sub>dc</sub> = average load current (A)"
          ],
          "note": "Half-wave: <i>I</i><sub>rms</sub>/<i>I</i><sub>dc</sub> = (<i>I</i><sub>m</sub>/2)/(<i>I</i><sub>m</sub>/π) = π/2 = 1.571, so <i>r</i> = √(1.467) = 1.21. Full-wave: the ratio is π/(2√2) = 1.111, so <i>r</i> = √(0.234) = 0.48. A ripple factor above 1 means the wobble is bigger than the useful part, which is a fair description of half-wave output and the reason nobody uses it for anything that matters."
        },
        {
          "t": "p",
          "html": "A rectifier alone gives <b>pulsating</b> d.c., and the waveform chips above show how far that is from what a circuit actually needs. The fix is a <b>filter</b>: a large capacitor placed in <b>parallel with the load</b>, across the output.<br><br>The reasoning is entirely Chapter 2's. During each output pulse the capacitor charges up towards the peak voltage. When the pulse falls away, the capacitor has nowhere to dump its charge except through the load, so it discharges through <i>R</i><sub>L</sub> with the time constant τ = <i>R</i><sub>L</sub><i>C</i>, holding the output voltage up until the next pulse arrives and tops it up again. What is left of the fluctuation is called the <b>ripple</b>.<br><br>Two consequences follow immediately, and both are examinable. A <b>larger capacitor</b> means a larger τ, a slower sag and less ripple. And a <b>full-wave</b> rectifier is far easier to smooth than a half-wave one, because its pulses arrive twice as often, so the capacitor has half as long to sag between them."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.7 · WHAT THE CAPACITOR DOES",
          "chips": ["without the capacitor", "with the capacitor"],
          "captions": [
            "Full-wave output feeding the load directly, 10 V peak from a 50 Hz supply, so the humps arrive every 10 ms. The voltage is never negative, which is what rectification bought you, but it spends a good part of every pulse near zero. Anything you plug into this will see the supply collapse a hundred times a second.",
            "The same output with a capacitor across the load. Here R_L C is 30 ms, which is three times the 10 ms gap between pulses, so the capacitor loses only about a quarter of its charge before the next hump tops it up. The dashed line is the unfiltered output from the first chip, drawn underneath for comparison. What is left is the small saw-tooth marked as ripple, and it is the whole reason mains adapters are full of large electrolytic capacitors. Make C ten times bigger and the sag becomes ten times smaller, at the cost of a physically bigger and more expensive part."
          ],
          "frames": [
            {
              "x": [0, 40],
              "y": [-12, 12],
              "aspect": 0.62,
              "axes": "auto",
              "axisX": "t (ms)",
              "axisY": "V (volts)",
              "ticksX": { "at": [10, 20, 30, 40], "labels": ["10", "20", "30", "40"] },
              "ticksY": { "at": [-10, 10], "labels": ["−10", "10"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[0, 0], [1, 3.09], [2, 5.88], [4, 9.51], [5, 10], [6, 9.51], [8, 5.88], [9, 3.09], [10, 0], [11, 3.09], [12, 5.88], [14, 9.51], [15, 10], [16, 9.51], [18, 5.88], [19, 3.09], [20, 0], [21, 3.09], [22, 5.88], [24, 9.51], [25, 10], [26, 9.51], [28, 5.88], [29, 3.09], [30, 0], [31, 3.09], [32, 5.88], [34, 9.51], [35, 10], [36, 9.51], [38, 5.88], [39, 3.09], [40, 0]]
                }
              ],
              "labels": [{ "x": 20, "y": -6.0, "text": "pulsating, not steady", "soft": true }]
            },
            {
              "x": [0, 40],
              "y": [-12, 12],
              "aspect": 0.62,
              "axes": "auto",
              "axisX": "t (ms)",
              "axisY": "V (volts)",
              "ticksX": { "at": [10, 20, 30, 40], "labels": ["10", "20", "30", "40"] },
              "ticksY": { "at": [-10, 10], "labels": ["−10", "10"] },
              "curves": [
                {
                  "c": "pts",
                  "soft": true,
                  "dash": true,
                  "pts": [[0, 0], [1, 3.09], [2, 5.88], [4, 9.51], [5, 10], [6, 9.51], [8, 5.88], [9, 3.09], [10, 0], [11, 3.09], [12, 5.88], [14, 9.51], [15, 10], [16, 9.51], [18, 5.88], [19, 3.09], [20, 0], [21, 3.09], [22, 5.88], [24, 9.51], [25, 10], [26, 9.51], [28, 5.88], [29, 3.09], [30, 0], [31, 3.09], [32, 5.88], [34, 9.51], [35, 10], [36, 9.51], [38, 5.88], [39, 3.09], [40, 0]]
                },
                {
                  "c": "pts",
                  "pts": [[0, 0], [1, 3.09], [2, 5.88], [4, 9.51], [5, 10], [7, 9.36], [10, 8.46], [12, 7.92], [12.6, 7.76], [13, 8.09], [14, 9.51], [15, 10], [17, 9.36], [20, 8.46], [22, 7.92], [22.6, 7.76], [23, 8.09], [24, 9.51], [25, 10], [27, 9.36], [30, 8.46], [32, 7.92], [32.6, 7.76], [33, 8.09], [34, 9.51], [35, 10], [37, 9.36], [40, 8.46]]
                }
              ],
              "segments": [{ "from": [18, 10], "to": [26, 10], "dash": true, "soft": true }],
              "arrows": [
                { "from": [22, 7.92], "to": [22, 10], "head": "both", "tone": "amber", "label": "ripple", "at": "start" }
              ],
              "labels": [{ "x": 8, "y": -6.0, "text": "capacitor holds it up", "soft": true }]
            }
          ]
        },
        {
          "t": "def",
          "term": "Ripple",
          "html": "The small residual fluctuation left on a filtered rectifier output, riding on top of the steady d.c. It is measured by the <b>ripple factor</b> <i>r</i>, the r.m.s. value of the fluctuating part divided by the d.c. part, which is <b>dimensionless</b> and for which smaller is better. Unfiltered, the figure is 1.21 for half-wave and 0.48 for full-wave. Add a capacitor and both fall, in proportion to how large a time constant you can afford. Ripple can be made small; it can never be made zero with a finite capacitor."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FILTER TIME CONSTANT",
          "tag": "compare it with the gap between pulses",
          "main": "τ = <i>R</i><sub>L</sub><i>C</i>,  fractional sag ≈ 1 − e<sup>−<i>T</i>/τ</sup>",
          "legend": [
            "τ = discharge time constant of the filter, in seconds (s)",
            "<i>R</i><sub>L</sub> = load resistance, in ohms (Ω); <i>C</i> = filter capacitance, in farads (F)",
            "<i>T</i> = time between successive output pulses, in seconds (s): 1/<i>f</i><sub>in</sub> for half-wave and 1/(2<i>f</i><sub>in</sub>) for full-wave"
          ],
          "note": "The comparison, not the value, is what matters: you want τ much LARGER than <i>T</i>. From 50 Hz mains a full-wave rectifier gives <i>T</i> = 10 ms, so a 1 kΩ load with a 100 µF capacitor has τ = 100 ms, ten times the gap, and the output sags by only 1 − e<sup>−0.1</sup> ≈ 9.5 per cent between pulses. In the limit of infinite <i>C</i> the sag goes to zero and the output is a flat line at the peak voltage."
        },
        {
          "t": "proc",
          "title": "Answering any rectifier question in the right order",
          "steps": [
            "<b>Name the rectifier first, before any arithmetic.</b> One diode is half-wave. Two diodes plus a centre tap, or four in a bridge, is full-wave. Every number in the question depends on this answer, so getting it wrong loses the whole thing.",
            "<b>Write the peak current.</b> <i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>). If the question gives an r.m.s. supply voltage rather than a peak, multiply by √2 first: this is where a factor of 1.41 goes missing.",
            "<b>Then the averages, from the table.</b> <i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π half-wave or 2<i>I</i><sub>m</sub>/π full-wave; <i>I</i><sub>rms</sub> = <i>I</i><sub>m</sub>/2 or <i>I</i><sub>m</sub>/√2.",
            "<b>Efficiency last, and check it against the ceiling.</b> η = 0.406 or 0.812 times <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>). If your answer exceeds 40.6 or 81.2 per cent you have made an arithmetic slip, because the bracket cannot exceed 1.",
            "<b>For frequency questions, do not calculate at all.</b> Half-wave passes one pulse per input cycle, so <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>. Full-wave passes two, so <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>. From 50 Hz that is 50 Hz and 100 Hz; from 60 Hz, 60 Hz and 120 Hz."
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A half-wave rectifier uses a diode of forward resistance <i>r</i><sub>f</sub> = 20 Ω feeding a load <i>R</i><sub>L</sub> = 980 Ω. The peak voltage of the a.c. source is <i>V</i><sub>m</sub> = 10 V. Find the peak load current, the d.c. load current and the rectification efficiency.",
          "steps": [
            "Peak current, Ohm's law at the crest: <i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>) = 10/(20 + 980) = 10/1000 = 0.010 A = 10 mA.",
            "D.c. current, half-wave: <i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π = 10/π = 3.18 mA.",
            "Efficiency, half-wave: η = 0.406 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>) = 0.406 × 980/1000 = 0.398.",
            "Check against the ceiling: 39.8 per cent sits just under 40.6 per cent, as it must, and it is short of the ceiling only because <i>r</i><sub>f</sub> is not zero."
          ],
          "ans": "<i>I</i><sub>m</sub> = 10 mA, <i>I</i><sub>dc</sub> = 3.18 mA, η = 39.8 per cent."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD PATTERN",
          "q": "A full-wave bridge rectifier is fed from 50 Hz mains and delivers a peak load current of 14 mA. Find the output pulse frequency, the d.c. load current, the r.m.s. load current and the ripple factor.",
          "steps": [
            "Frequency: full-wave passes both half-cycles, so <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub> = 100 Hz. No calculation needed.",
            "D.c. current: <i>I</i><sub>dc</sub> = 2<i>I</i><sub>m</sub>/π = 2 × 14/π = 8.91 mA.",
            "R.m.s. current: <i>I</i><sub>rms</sub> = <i>I</i><sub>m</sub>/√2 = 14/1.414 = 9.90 mA.",
            "Ripple factor: <i>r</i> = √((9.90/8.91)<sup>2</sup> − 1) = √(1.234 − 1) = √0.234 = 0.48.",
            "That 0.48 is the standard full-wave value and it does not depend on the numbers you were given, which is a useful check: the ratio <i>I</i><sub>rms</sub>/<i>I</i><sub>dc</sub> is π/(2√2) for any full-wave rectifier."
          ],
          "ans": "<i>f</i><sub>out</sub> = 100 Hz, <i>I</i><sub>dc</sub> = 8.91 mA, <i>I</i><sub>rms</sub> = 9.90 mA, ripple factor 0.48."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A full-wave rectifier running from 50 Hz mains feeds a 1.0 kΩ load through a 100 µF filter capacitor. Find the time between output pulses, the discharge time constant, and the approximate fractional sag in output voltage between pulses.",
          "steps": [
            "Time between pulses: full-wave gives 100 pulses per second, so <i>T</i> = 1/(2 × 50) = 0.010 s = 10 ms.",
            "Time constant: τ = <i>R</i><sub>L</sub><i>C</i> = (1.0 × 10<sup>3</sup>)(100 × 10<sup>−6</sup>) = 0.10 s = 100 ms.",
            "Compare: τ/<i>T</i> = 10, so the capacitor is only one tenth of the way into its discharge when the next pulse arrives.",
            "Fractional sag ≈ 1 − e<sup>−<i>T</i>/τ</sup> = 1 − e<sup>−0.10</sup> = 1 − 0.905 = 0.095.",
            "So the output falls by about 9.5 per cent of the peak between pulses. Halve the capacitor and the sag roughly doubles; use a half-wave rectifier instead and <i>T</i> becomes 20 ms, so the sag roughly doubles again."
          ],
          "ans": "<i>T</i> = 10 ms, τ = 100 ms, sag ≈ 9.5 per cent of the peak."
        },
        {
          "t": "mcq",
          "q": "A half-wave rectifier is operated from 50 Hz a.c. mains. The frequency of the rectified output is:",
          "opts": [
            { "label": "25 Hz", "nudge": "Halves the input instead of matching it. Nothing in a rectifier ever halves a frequency; a diode cannot skip whole cycles." },
            { "label": "50 Hz", "nudge": null },
            { "label": "100 Hz", "nudge": "This is the FULL-WAVE answer. It is the single most common slip in the topic, from misremembering which rectifier doubles the frequency." },
            { "label": "zero", "nudge": "Confuses \"d.c. output\" with \"zero frequency\". The output is PULSATING d.c., and its pulses have a perfectly good repetition rate." }
          ],
          "correct": 1,
          "solution": "A half-wave rectifier passes one pulse per input cycle, so the output pulse frequency equals the input frequency, 50 Hz. Only the full-wave rectifier, which uses both half-cycles, doubles it to 100 Hz. Memorise the pair together and you can never half-remember one of them."
        },
        {
          "q": "In a bridge rectifier, on any one half-cycle of the input, the number of diodes conducting is:",
          "t": "mcq",
          "opts": [
            { "label": "one", "nudge": "That is the half-wave count. With only one path the current could not both leave and return through the load, so the loop would not be closed." },
            { "label": "two, in series", "nudge": null },
            { "label": "two, in parallel", "nudge": "Gets the number right and the topology wrong. The two conducting diodes are on opposite sides of the load, so the current passes through one, then the load, then the other." },
            { "label": "all four", "nudge": "If all four conducted the bridge would be a short circuit across the source and the load would see nothing. Two are always reverse biased, which is what steers the current." }
          ],
          "correct": 1,
          "solution": "Two diagonally opposite diodes are forward biased on each half-cycle and conduct in series: current leaves the source, passes through the first diode, through the load, through the second diode and back. On the other half-cycle the other pair takes over and sends the current through the load the SAME way, which is exactly what makes the output full-wave."
        },
        {
          "t": "mcq",
          "q": "To reduce the ripple in a rectifier's output, the filter capacitor should be connected:",
          "opts": [
            { "label": "in series with the load, and made as small as possible", "nudge": "Both halves wrong. In series a capacitor blocks d.c. entirely, which is the opposite of what a power supply wants, and a smaller C gives a shorter time constant and more ripple." },
            { "label": "in series with the load, and made as large as possible", "nudge": "The size is right and the position is fatal: a capacitor in series passes no steady current at all, so the load would receive nothing." },
            { "label": "in parallel with the load, and made as large as possible", "nudge": null },
            { "label": "in parallel with the load, and made as small as possible", "nudge": "Right position, wrong size. Ripple falls as τ = R_L C grows, so you want the LARGEST capacitor you can afford, not the smallest." }
          ],
          "correct": 2,
          "solution": "The capacitor goes across the load, so that it charges to the peak during each pulse and then discharges through the load between pulses. The discharge time constant is τ = <i>R</i><sub>L</sub><i>C</i>, so a larger capacitance means a slower sag and less ripple. In series it would simply block the d.c. the rectifier just worked to produce."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[NEET] A full-wave rectifier is supplied with 60 Hz a.c. State the fundamental ripple frequency of its output, and say which is more efficient, half-wave or full-wave, giving the maximum efficiency of each.",
              "a": "<i>f</i><sub>out</sub> = 2 × 60 = 120 Hz. Full-wave is the more efficient: its ceiling is 81.2 per cent against 40.6 per cent for half-wave, exactly double, because it uses both half-cycles instead of throwing one away."
            },
            {
              "q": "[CBSE] Draw the circuit of a half-wave rectifier and sketch its input and output waveforms on a common time axis. State which half-cycle of the input appears at the load.",
              "a": "The circuit is one diode in series with the load across the a.c. supply, as in this topic's first figure. The output is the input's POSITIVE half-cycles only, when the diode's p-side is at the higher potential and it is forward biased; during the negative half-cycles the diode is reverse biased and the output is flat zero. The output waveform is the second chip of the waveform figure."
            },
            {
              "q": "[JEE MAIN] A full-wave rectifier uses diodes of forward resistance 25 Ω and a load of 475 Ω, fed from a supply of peak value 20 V. Find the peak current, the d.c. current and the efficiency.",
              "a": "<i>I</i><sub>m</sub> = 20/(25 + 475) = 20/500 = 0.040 A = 40 mA. <i>I</i><sub>dc</sub> = 2<i>I</i><sub>m</sub>/π = 80/π = 25.5 mA. η = 0.812 × 475/500 = 0.771, so 77.1 per cent, which sits below the 81.2 per cent ceiling as it must."
            },
            {
              "q": "[JEE MAIN] Show that the ripple factor of a half-wave rectifier is 1.21, and say in one line why the full-wave figure of 0.48 is smaller.",
              "a": "<i>I</i><sub>rms</sub>/<i>I</i><sub>dc</sub> = (<i>I</i><sub>m</sub>/2)/(<i>I</i><sub>m</sub>/π) = π/2 = 1.571, so <i>r</i> = √(1.571<sup>2</sup> − 1) = √1.467 = 1.21. The peak current cancels, so the answer is the same for every half-wave rectifier. Full-wave is smaller because it delivers twice the average current from the same peak, so the fluctuating part is a much smaller share of the total."
            },
            {
              "q": "[JEE ADVANCED] A full-wave rectifier from 50 Hz mains feeds a 2.2 kΩ load through a 47 µF capacitor. Find the time constant and estimate the fractional sag between pulses. Would a half-wave rectifier with the same components be better or worse?",
              "a": "τ = (2.2 × 10<sup>3</sup>)(47 × 10<sup>−6</sup>) = 0.103 s = 103 ms. Full-wave pulses arrive every <i>T</i> = 10 ms, so the sag ≈ 1 − e<sup>−10/103</sup> = 1 − e<sup>−0.0971</sup> = 0.093, about 9.3 per cent. A half-wave rectifier would be WORSE: its pulses arrive every 20 ms, doubling <i>T</i>, so the sag would roughly double to about 18 per cent."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Swapping the two frequency rules.</b> Half-wave gives <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>; full-wave gives 2<i>f</i><sub>in</sub>. Learn them as a PAIR with the two efficiencies, 40.6 and 81.2 per cent, so you can never half-remember one.",
            "<b>Quoting an efficiency above the ceiling.</b> η = 0.406 or 0.812 times a bracket that is a resistance over a larger resistance, so it can never reach 1. Any answer above 40.6 or 81.2 per cent is arithmetically impossible and means you have slipped somewhere.",
            "<b>Averaging over the conducting half instead of the whole cycle.</b> <i>I</i><sub>dc</sub> for a half-wave rectifier is <i>I</i><sub>m</sub>/π, not 2<i>I</i><sub>m</sub>/π. The dead half-cycle is still time during which the load got nothing, and the average has to count it.",
            "<b>Using an r.m.s. supply voltage as if it were the peak.</b> If the question says \"220 V a.c.\" that is r.m.s., and the peak is 220√2 = 311 V. <i>I</i><sub>m</sub> is built from the PEAK.",
            "<b>Putting the filter capacitor in series.</b> It goes across the load, in parallel. In series it blocks the d.c. entirely, which undoes the whole point of the rectifier."
          ]
        },
        {
          "t": "protip",
          "html": "the four rectifier numbers come in two matched pairs and it is much easier to remember them that way. half-wave: one diode, one hump per cycle, <i>f</i> unchanged, 40.6 per cent, ripple 1.21. full-wave: two humps, double the frequency, double the efficiency, ripple 0.48. every single full-wave figure is either double or better than the half-wave one, so if you remember one column you can reconstruct the other by asking \"which way would being twice as good push this?\""
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "rectification gives PULSATING d.c., not steady d.c.", "note": "Unidirectional, but far from flat. Smoothing it is the filter's separate job." },
            { "f": "half-wave: <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>, η<sub>max</sub> = 40.6 per cent, ripple 1.21", "note": "One diode. Half of every cycle is thrown away, which is where all three numbers come from." },
            { "f": "full-wave: <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>, η<sub>max</sub> = 81.2 per cent, ripple 0.48", "note": "Two diodes with a centre tap, or four in a bridge with none. Both halves used." },
            { "f": "<i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π (half), 2<i>I</i><sub>m</sub>/π (full)", "note": "Average over the WHOLE cycle. I_m = V_m/(r_f + R_L), from the peak, not the r.m.s." },
            { "f": "<i>I</i><sub>rms</sub> = <i>I</i><sub>m</sub>/2 (half), <i>I</i><sub>m</sub>/√2 (full)", "note": "Ripple factor r = √((I_rms/I_dc)² − 1), dimensionless, smaller is better." },
            { "f": "η = 0.406 or 0.812 × <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)", "note": "The bracket cannot exceed 1, so both percentages are hard ceilings." },
            { "f": "filter: capacitor ACROSS the load, τ = <i>R</i><sub>L</sub><i>C</i>", "note": "Want τ much bigger than the gap between pulses. Bigger C, smaller ripple." }
          ],
          "aids": [
            "full wave is fully better: double the frequency, double the efficiency, quarter the ripple.",
            "half-wave 40.6, full-wave 81.2. one is exactly twice the other, which is the memory hook.",
            "the capacitor goes across the load. in series it would block the very d.c. you just made.",
            "bridge = four diodes, no centre tap, two conducting in series at a time."
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Special-Purpose Diodes",
      "chip": "04 FOUR TRICKS",
      "kalam": "the same junction, tuned four different ways",
      "blocks": [
        {
          "t": "p",
          "html": "This topic and the next are <b>out of the CBSE syllabus</b> and firmly <b>in JEE Main and NEET 2026</b>. If you are sitting boards only, you can skip both. If you are sitting either entrance exam, this is high-yield and cheap: the questions are conceptual and there is almost nothing to calculate except one standard Zener numerical.<br><br>An ordinary p-n junction diode is a one-way valve. But once engineers understood the junction properly, they realised they could <b>tune</b> it: change the doping, change the geometry, change the operating regime, and make it do a special job. That is the whole of this topic. Four devices, all of them just p-n junctions, each exploiting one particular trick the junction can perform."
        },
        {
          "t": "p",
          "html": "Before the four devices, hold this map in your head, because almost every exam question about them is really a question about it.<br><br><b>Two of them run REVERSE biased.</b> The <b>Zener diode</b> deals in a controlled, useful breakdown; the <b>photodiode</b> deals in light going in.<br><br><b>One runs FORWARD biased.</b> The <b>LED</b> deals in light coming out.<br><br><b>One runs with NO bias at all.</b> The <b>solar cell</b> generates its own emf from the light falling on it.<br><br>Learn the map and the four devices stop being a memory list and become one idea seen from four angles: energy going into the junction or coming out of it, electrically or optically."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 14.8 · FOUR DEVICES, FOUR BIAS CONDITIONS",
          "chips": ["Zener", "photodiode", "LED", "solar cell"],
          "captions": [
            "The Zener, reverse biased. Follow the polarity: the battery's long bar at the top left is its positive terminal, current runs right along the top and down the right-hand branch, so it arrives at the diode's BARRED end, its cathode, its n-side. n-side to positive is reverse bias, by the definition from Topic 02, and reverse is where a Zener does all its work. The dashed box carries that fact because no part label could. Held in breakdown like this, the diode clamps its own terminal voltage at Vz however the current swings.",
            "The photodiode, also reverse biased, and the circuit is deliberately drawn the same shape so you can see that the bias condition is identical. The circle is an ammeter, because what you actually do with a photodiode is measure its current. Light falls on the junction through a transparent window, creates electron-hole pairs in the depletion region, and the reverse field sweeps them out as a photocurrent proportional to the intensity. The current arrow is drawn small on purpose: this is microamps, not milliamps.",
            "The LED, forward biased, and the only change from the first two chips is that the diode has been turned round so the current arrives at its TRIANGLE end, the anode, its p-side. p-side to positive is forward bias. Electrons and holes now pour into the junction and recombine, and each recombination releases its energy as a photon of energy roughly equal to the band gap. The series resistor is not optional decoration: without it the diode's own 60 mV per decade stiffness would let the current run away and destroy it.",
            "The solar cell, and notice what is missing: there is no battery anywhere in the circuit. The cell IS the source. Sunlight creates electron-hole pairs, the junction's own built-in field separates them, and the cell drives a current through the load with no external supply at all. Look at where the current leaves: it comes out of the TRIANGLE end, the p-side, which is this cell's positive terminal. So the photocurrent runs BACKWARDS through the diode symbol, against the arrow, and that is not a drawing error. It is exactly why an illuminated cell's characteristic sits in the fourth quadrant. Whether there is an external supply is the single discriminator between a solar cell and a photodiode, and it is what almost every exam question on these two is really testing."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 8],
                "wires": [
                  { "from": [1, 2], "to": [3, 2] },
                  { "from": [7, 2], "to": [10, 2] },
                  { "from": [10, 2], "to": [10, 3] },
                  { "from": [10, 5], "to": [10, 6] },
                  { "from": [10, 6], "to": [1, 6] }
                ],
                "parts": [
                  { "at": [1, 2], "to": [1, 6], "kind": "battery", "label": "Vin", "side": "right" },
                  { "at": [3, 2], "to": [7, 2], "kind": "R", "label": "Rs", "side": "above" },
                  { "at": [10, 5], "to": [10, 3], "kind": "diode", "tone": "amber" }
                ],
                "regions": [
                  { "from": [8.8, 2.6], "to": [11.2, 5.4], "label": "reverse bias", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 6.5, "y": 7.2, "text": "clamped at Vz" }]
            },
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 8],
                "wires": [
                  { "from": [1, 2], "to": [3, 2] },
                  { "from": [7, 2], "to": [10, 2] },
                  { "from": [10, 2], "to": [10, 3] },
                  { "from": [10, 5], "to": [10, 6] },
                  { "from": [10, 6], "to": [1, 6] }
                ],
                "parts": [
                  { "at": [1, 2], "to": [1, 6], "kind": "battery", "label": "Vin", "side": "right" },
                  { "at": [3, 2], "to": [7, 2], "kind": "A" },
                  { "at": [10, 5], "to": [10, 3], "kind": "diode", "tone": "amber" }
                ],
                "currents": [{ "at": [6.0, 6.0], "to": [4.0, 6.0], "label": "I" }],
                "regions": [
                  { "from": [8.8, 2.6], "to": [11.2, 5.4], "label": "reverse bias", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 7.0, "y": 4.0, "text": "light in" }]
            },
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 8],
                "wires": [
                  { "from": [1, 2], "to": [3, 2] },
                  { "from": [7, 2], "to": [10, 2] },
                  { "from": [10, 2], "to": [10, 3] },
                  { "from": [10, 5], "to": [10, 6] },
                  { "from": [10, 6], "to": [1, 6] }
                ],
                "parts": [
                  { "at": [1, 2], "to": [1, 6], "kind": "battery", "label": "Vin", "side": "right" },
                  { "at": [3, 2], "to": [7, 2], "kind": "R", "label": "R", "side": "above" },
                  { "at": [10, 3], "to": [10, 5], "kind": "diode", "tone": "amber" }
                ],
                "currents": [{ "at": [6.0, 6.0], "to": [4.0, 6.0], "label": "I" }],
                "regions": [
                  { "from": [8.8, 2.6], "to": [11.2, 5.4], "label": "forward bias", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 7.0, "y": 4.0, "text": "light out" }]
            },
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 8],
                "wires": [
                  { "from": [2, 2], "to": [10, 2] },
                  { "from": [10, 2], "to": [10, 3] },
                  { "from": [10, 5], "to": [10, 6] },
                  { "from": [10, 6], "to": [2, 6] }
                ],
                "parts": [
                  { "at": [2, 2], "to": [2, 6], "kind": "diode", "tone": "amber" },
                  { "at": [10, 3], "to": [10, 5], "kind": "R", "label": "load", "side": "right" }
                ],
                "currents": [{ "at": [5.0, 2.0], "to": [7.5, 2.0], "label": "I" }],
                "regions": [
                  { "from": [0.9, 1.5], "to": [3.1, 6.5], "label": "no bias at all", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 4.6, "y": 4.0, "text": "light in" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The bias map, which is half the marks",
          "rows": [
            { "k": "Zener diode", "v": "REVERSE bias, in breakdown, and connected in PARALLEL with the load. Job: hold a voltage steady." },
            { "k": "Photodiode", "v": "REVERSE bias. Job: turn light into a current proportional to intensity. Needs an external supply." },
            { "k": "LED", "v": "FORWARD bias. Job: turn current into light of a colour set by the band gap. Needs a series resistor." },
            { "k": "Solar cell", "v": "NO external bias at all. Job: turn light into electrical power. It generates its own emf." },
            { "k": "The discriminator", "v": "Photodiode against solar cell: is there an external supply? Yes means photodiode, no means solar cell. This is the exam question every time." }
          ]
        },
        {
          "t": "p",
          "html": "<b>The Zener diode: making breakdown useful.</b><br><br>Ordinarily, reverse breakdown destroys a diode. The Zener is deliberately built to survive it and exploit it. By doping <b>both</b> sides very heavily, the depletion region is made extremely thin, under 10<sup>−6</sup> m, so a huge electric field of order 5 × 10<sup>6</sup> V m<sup>−1</sup> appears at a modest reverse voltage of only a few volts. Remember from Topic 02 that <i>E</i> = <i>V</i><sub>b</sub>/<i>d</i>: shrink <i>d</i> and you get an enormous field for very little voltage.<br><br>At a sharply defined reverse voltage, the <b>Zener voltage</b> <i>V</i><sub>Z</sub>, the current rises almost vertically while the voltage across the diode barely changes at all. That flat, near-vertical stretch is the whole gift. A Zener clamps its own terminal voltage to <i>V</i><sub>Z</sub> however the current swings, which makes it a natural <b>voltage regulator</b>."
        },
        {
          "t": "think",
          "html": "picture an overflow weir on an irrigation tank. below the weir level, the water height rises and falls with whatever flows in. but once the water reaches the weir, any extra inflow just spills over the top and the level <b>stays pinned</b> at the weir height. the zener voltage is the weir height. extra current spills through the diode while the voltage stays locked, and that is regulation in one picture."
        },
        {
          "t": "def",
          "term": "Zener diode",
          "html": "A heavily doped p-n junction designed to operate <b>continuously in reverse breakdown</b> without being destroyed, provided the current is limited by an external series resistor. Its defining number is the <b>Zener voltage</b> <i>V</i><sub>Z</sub>, the sharply defined reverse voltage at which the current turns nearly vertical. Below <i>V</i><sub>Z</sub> it does nothing useful at all; forward biased it is just an ordinary diode with a 0.7 V drop; above its rated power it burns out. All three limits are examinable."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.10 · TWO I-V CURVES THAT ARE NOT ORDINARY DIODES",
          "chips": ["the Zener characteristic", "the illuminated solar cell"],
          "captions": [
            "A Zener with Vz = 6 V. The forward branch on the right is completely ordinary: it is the same 0.7 V knee any silicon diode has, which is why a Zener used forward is nothing special. Everything interesting is on the left. The reverse current sits at essentially zero until the voltage reaches −6 V, and then the curve turns almost vertical: the current can change from a fraction of a milliamp to tens of milliamps while the voltage moves by a few hundredths of a volt. Read the picture as a rule: on that vertical stretch, the current is whatever the rest of the circuit demands and the voltage is Vz whatever the current.",
            "An illuminated solar cell, and the curve sits in the FOURTH quadrant, positive voltage with negative current, which is the signature of a device SUPPLYING power rather than consuming it. Two numbers name the ends. Isc, the short-circuit current, is what flows when the terminals are shorted and V = 0; it is proportional to the light intensity. Voc, the open-circuit voltage, is what appears when no current is drawn; it grows only logarithmically with intensity and for silicon is 0.55 to 0.7 V, always well below the 1.1 V the band gap might suggest. Between them lies the knee where the product of voltage and current peaks, and that maximum-power point is what a panel is rated by."
          ],
          "frames": [
            {
              "x": [-8, 1],
              "y": [-30, 15],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "V (volts)",
              "axisY": "I (mA)",
              "ticksX": { "at": [-6, -4, -2, 0], "labels": ["−6", "−4", "−2", "0"] },
              "ticksY": { "at": [-20, -10, 10], "labels": ["−20", "−10", "10"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[-7.2, -28], [-6.6, -18], [-6.2, -8], [-6.0, -3], [-5.8, -0.6], [-5, -0.3], [-3, -0.2], [-1, -0.15], [0, 0], [0.5, 0.2], [0.65, 2], [0.7, 7], [0.73, 14]],
                  "smooth": true
                }
              ],
              "points": [{ "x": -6.0, "y": -3, "label": "Vz", "at": "se" }],
              "labels": [{ "x": -3.5, "y": -14, "text": "flat, whatever the current", "soft": true }]
            },
            {
              "x": [-0.1, 0.75],
              "y": [-3.6, 0.6],
              "aspect": 0.72,
              "axes": "auto",
              "axisX": "V (volts)",
              "axisY": "I (amps)",
              "ticksX": { "at": [0, 0.2, 0.4, 0.6], "labels": ["0", "0.2", "0.4", "0.6"] },
              "ticksY": { "at": [-3, -2, -1], "labels": ["−3", "−2", "−1"] },
              "curves": [
                {
                  "c": "pts",
                  "pts": [[-0.05, -3.02], [0, -3.0], [0.2, -2.98], [0.35, -2.94], [0.45, -2.86], [0.5, -2.76], [0.53, -2.64], [0.55, -2.5], [0.57, -2.2], [0.585, -1.6], [0.595, -0.8], [0.6, 0], [0.607, 0.55]],
                  "smooth": true
                }
              ],
              "points": [
                { "x": 0, "y": -3.0, "label": "Isc", "at": "se" },
                { "x": 0.6, "y": 0, "label": "Voc", "at": "nw" },
                { "x": 0.5, "y": -2.76, "label": "max power", "at": "sw" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Reverse breakdown comes in two physically distinct flavours, and telling them apart is a favourite exam point because they look identical on a curve and behave oppositely with temperature.<br><br><b>Zener breakdown</b> dominates in <b>heavily</b> doped junctions with a <b>thin</b> depletion region and a <b>low</b> breakdown voltage, typically below about 6 V. The field is so intense that it directly tears valence electrons out of their bonds, a quantum-mechanical <b>tunnelling</b> process. Its breakdown voltage <b>decreases</b> with temperature.<br><br><b>Avalanche breakdown</b> dominates in <b>lightly</b> doped junctions with a <b>wider</b> depletion region and a <b>higher</b> breakdown voltage, above about 7 V. Here the thermally generated minority carriers are accelerated by the field until they smash bonds on impact, knocking out more carriers that knock out still more: a chain reaction called <b>impact ionisation</b>. Its breakdown voltage <b>increases</b> with temperature.<br><br>Both give the sharp, near-vertical reverse current that a regulator exploits, and the device is called a Zener diode whichever mechanism is actually running inside it."
        },
        {
          "t": "defgrid",
          "title": "Zener breakdown against avalanche breakdown",
          "rows": [
            { "k": "Doping", "v": "Zener: heavy on both sides, thin junction. Avalanche: lighter, wider junction." },
            { "k": "Typical voltage", "v": "Zener: below about 6 V. Avalanche: above about 7 V. Between them both mechanisms contribute." },
            { "k": "Mechanism", "v": "Zener: the field tears electrons straight out of bonds, quantum tunnelling. Avalanche: fast carriers knock out more carriers, impact ionisation." },
            { "k": "Temperature coefficient", "v": "Zener: NEGATIVE, V_Z falls as T rises. Avalanche: POSITIVE, V_Z rises as T rises. This is the diagnostic test, and the only one." },
            { "k": "Device name", "v": "Both are sold as \"Zener diodes\" regardless of which mechanism operates, which is why the coefficient and not the label tells you what is happening." }
          ]
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 14.9 · THE ZENER VOLTAGE REGULATOR",
          "chips": ["one resistor, one Zener, one load"],
          "captions": [
            "The entire circuit, and it is worth memorising as a shape. An unregulated input arrives on the left and passes through the series resistor Rs to a node. From that node the Zener hangs down to the bottom rail in REVERSE bias, and the load hangs down beside it, in PARALLEL with the Zener. That parallel connection is why the load sees exactly Vz, marked by the dashed box. The line current Iin splits at the node into Iz through the Zener and IL through the load, so Iin = Iz + IL, which is nothing but Kirchhoff's junction rule from Chapter 3. Now suppose the input rises. Vout cannot rise, because the Zener is holding it, so the extra voltage appears across Rs, more current flows through Rs, and every bit of the surplus is shunted through the Zener while IL stays exactly where it was. The Zener is an overflow, and Rs is the only thing standing between the surplus and a destroyed diode."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [13, 8],
                "wires": [
                  { "from": [1, 2], "to": [2, 2] },
                  { "from": [5, 2], "to": [11, 2] },
                  { "from": [11, 6], "to": [1, 6] }
                ],
                "parts": [
                  { "at": [2, 2], "to": [5, 2], "kind": "R", "label": "Rs", "side": "above" },
                  { "at": [7, 6], "to": [7, 2], "kind": "diode", "label": "Vz", "side": "left", "tone": "amber" },
                  { "at": [11, 2], "to": [11, 6], "kind": "R", "label": "load", "side": "right" }
                ],
                "nodes": [
                  { "at": [1, 2], "junction": true },
                  { "at": [1, 6], "junction": true },
                  { "at": [7, 2], "junction": true },
                  { "at": [7, 6], "junction": true }
                ],
                "currents": [
                  { "at": [5.3, 2], "to": [6.4, 2], "label": "Iin" },
                  { "at": [6.4, 3.0], "to": [6.4, 4.2], "label": "Iz" },
                  { "at": [9.2, 2], "to": [10.3, 2], "label": "IL" }
                ],
                "regions": [
                  { "from": [10, 1.0], "to": [12.4, 6.6], "label": "Vout = Vz", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 1.0, "y": 4.0, "text": "Vin" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ZENER REGULATOR",
          "tag": "three lines, one circuit",
          "main": "<i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub>,  <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub><br><i>R</i><sub>S</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>) / (<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>)<br><i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>",
          "legend": [
            "<i>V</i><sub>Z</sub> = Zener (breakdown) voltage, in volts (V); <i>V</i><sub>in</sub> = unregulated input voltage (V); <i>V</i><sub>out</sub> = regulated output (V)",
            "<i>I</i><sub>Z</sub> = current through the Zener (A); <i>I</i><sub>L</sub> = load current (A); <i>I</i><sub>in</sub> = total line current through <i>R</i><sub>S</sub> (A)",
            "<i>R</i><sub>S</sub> = series regulating resistor, in ohms (Ω)",
            "<i>P</i> = the Zener's power rating, in watts (W); <i>I</i><sub>Z,max</sub> = the largest current it can pass without overheating (A)"
          ],
          "note": "The last line is the one students forget exists, and it is where half the JEE Main marks are: a power rating divided by a voltage IS a current, and it sets the smallest <i>R</i><sub>S</sub> you are allowed to use. For good regulation choose <i>I</i><sub>Z</sub> comfortably larger than <i>I</i><sub>L</sub>, so the Zener never falls out of breakdown when the load draws more."
        },
        {
          "t": "proc",
          "title": "Sizing the series resistor without killing the Zener",
          "steps": [
            "<b>Find the maximum safe Zener current from the power rating.</b> <i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>. This is a ceiling on the Zener, not on the circuit.",
            "<b>Identify the WORST case, which is never the average.</b> The Zener dissipates most when the input is at its HIGHEST and the load draws its LEAST, because then all the line current has nowhere to go but through the Zener. Take <i>V</i><sub>in</sub> at the top of its stated range and <i>I</i><sub>L</sub> at the bottom, usually zero.",
            "<b>Write the line current in that worst case.</b> <i>I</i> = (<i>V</i><sub>in,max</sub> − <i>V</i><sub>Z</sub>)/<i>R</i><sub>S</sub>, all of it through the Zener if the load is disconnected.",
            "<b>Demand that it not exceed the ceiling</b> and solve for <i>R</i><sub>S</sub>: <i>R</i><sub>S</sub> ≥ (<i>V</i><sub>in,max</sub> − <i>V</i><sub>Z</sub>)/<i>I</i><sub>Z,max</sub>. Note the direction of the inequality: too SMALL an <i>R</i><sub>S</sub> is what destroys the diode.",
            "<b>Then check the other end.</b> With the input at its lowest and the load at its heaviest, is there still enough current left to keep the Zener in breakdown? If not, the regulator drops out and the output sags below <i>V</i><sub>Z</sub>. A good design keeps a few milliamps in hand."
          ]
        },
        {
          "t": "p",
          "html": "<b>The photodiode: light in, current out.</b><br><br>Take a reverse-biased junction and shine light on it through a transparent window. A photon of energy <i>h</i>ν ≥ <i>E</i><sub>g</sub> can knock an electron across the gap, creating an extra electron-hole pair in the depletion region, and the reverse field immediately sweeps the pair apart and out into the circuit as a <b>photocurrent proportional to the light intensity</b>. One suitable photon makes one pair, so the count of carriers scales linearly with the count of photons. That is the whole device: a light meter, and an optical detector.<br><br>The threshold idea is exactly the photoelectric threshold from Chapter 11, Dual Nature of Radiation and Matter, with the band gap <i>E</i><sub>g</sub> playing the part of the work function. A photon that cannot clear the gap does nothing at all, however many of them arrive."
        },
        {
          "t": "proc",
          "title": "Why a photodiode is used in reverse bias, when forward gives more current",
          "steps": [
            "<b>Notice the paradox first.</b> A photodiode passes milliamps in forward bias and only microamps in reverse. Yet it is always operated in reverse. The reasoning is about SENSITIVITY, not magnitude.",
            "<b>In reverse bias the dark current is tiny.</b> So a given amount of light produces a LARGE fractional change in current, easy to measure and cleanly proportional to intensity.",
            "<b>In forward bias the current is already large from the bias itself.</b> The light-induced change is a small wobble on top of a big number, and resolving a one per cent change in a milliamp is far harder than resolving a doubling of a microamp.",
            "<b>So reverse bias wins on measurability.</b> The device trades absolute current for a clean, intensity-proportional signal, which is exactly what a detector needs.",
            "<b>Answering the exam version.</b> Eliminate any option that argues from \"larger current\". The right answer always argues from FRACTIONAL CHANGE, or equivalently from signal against background."
          ]
        },
        {
          "t": "p",
          "html": "<b>The LED: current in, light out.</b> This is the photodiode run backwards, conceptually. Forward bias a junction; electrons and holes pour into the junction region and <b>recombine</b>, and each recombination releases its energy as a photon of energy <i>h</i>ν ≈ <i>E</i><sub>g</sub>. Choose a material with the right band gap and you have chosen the colour of the light. A light-emitting diode is, quite literally, a diode that glows when forward biased.<br><br>This is also the reason LEDs are not made of silicon. Visible light runs from about 400 to 700 nm, which is 1.8 to 3.1 eV, and silicon's gap of 1.1 eV and germanium's of 0.7 eV both put their photons deep in the <b>infrared</b>, where nobody can see them. Visible LEDs use wider-gap compound semiconductors such as gallium arsenide phosphide, which is exactly what compound semiconductors were introduced for back in Topic 01."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · BAND GAP AND COLOUR",
          "tag": "one division, both devices",
          "main": "<i>h</i>ν = <i>hc</i>/λ ≈ <i>E</i><sub>g</sub>  ⇒  λ = <i>hc</i>/<i>E</i><sub>g</sub><br>shortcut: λ (nm) = 1240 / <i>E</i><sub>g</sub> (eV)",
          "legend": [
            "λ = wavelength emitted by an LED, or the LONGEST wavelength a photodiode or solar cell can detect, in metres (m) or nanometres (nm)",
            "<i>E</i><sub>g</sub> = band gap of the semiconductor, in joules (J) or electronvolts (eV)",
            "ν = photon frequency, in hertz (Hz); <i>h</i> = Planck's constant = 6.63 × 10<sup>−34</sup> J s; <i>c</i> = 3 × 10<sup>8</sup> m/s"
          ],
          "note": "The constant <i>hc</i> = 1240 eV nm comes from Chapter 12, Atoms, which derives it. Use the shortcut and skip joules entirely: one division gives the answer and tells you the colour at the same time, since 620 nm is red, 590 nm yellow-orange and 470 nm blue. Bigger gap gives higher photon energy gives SHORTER wavelength gives bluer light, and the direction of that chain is worth a mark on its own."
        },
        {
          "t": "p",
          "html": "<b>The solar cell: light in, power out, no battery.</b><br><br>A solar cell is a large-area p-n junction which, when illuminated, generates its <b>own</b> emf. It needs no external bias at all, and that is what separates it from the photodiode. Sunlight creates electron-hole pairs throughout the junction region, the built-in field of the depletion region separates them, and the separated charges drive a current through an external load. It is a photodiode turned into a tiny power station.<br><br>Two numbers describe it, and both are read off the fourth-quadrant curve in Figure 14.10. The <b>short-circuit current</b> <i>I</i><sub>SC</sub> is the current when the terminals are shorted, is proportional to the light intensity and to the cell's area, and is the most current the cell can deliver. The <b>open-circuit voltage</b> <i>V</i><sub>OC</sub> is the voltage when no current is drawn, grows only logarithmically with intensity, and for silicon is 0.55 to 0.7 V. It is always well below <i>E</i><sub>g</sub>/<i>e</i> = 1.1 V, because at open circuit the cell is a forward-biased diode and a diode cannot hold a forward voltage anywhere near its gap.<br><br>A cell's band gap has to be matched to the solar spectrum, around 1.1 to 1.5 eV, which is another reason silicon dominates."
        },
        {
          "t": "think",
          "html": "the band gap is a step, and the photon an led emits is the energy an electron gives up falling down it. a taller step means a more energetic photon, and a more energetic photon means a bluer colour. so choosing a material is choosing a step height, and choosing a step height is choosing a colour. silicon's step is too short to give anything you can see: its photons come out in the infrared, which is why your tv remote is silicon-adjacent and your indicator lamp is not."
        },
        {
          "t": "def",
          "term": "Solar cell",
          "html": "A large-area p-n junction that converts light directly into electrical power, generating its <b>own</b> emf with <b>no external bias</b> at all. Illumination creates electron-hole pairs, the junction's built-in field separates them, and the separated charges drive current through an external load.<br><br>The contrast with the photodiode is the whole examinable point. A photodiode is a <b>detector</b>: reverse biased, it needs an external supply and its output is a signal. A solar cell is a <b>generator</b>: unbiased, it needs no supply and its output is power. Same junction, same physics, opposite jobs, and the discriminating question is always \"is there an external supply?\""
        },
        {
          "t": "defgrid",
          "title": "Reading a solar cell's characteristic",
          "rows": [
            { "k": "Short-circuit current I_SC", "v": "The current when the terminals are shorted, so V = 0. Proportional to light intensity and to the cell's area, and the most current the cell can deliver." },
            { "k": "Open-circuit voltage V_OC", "v": "The voltage when no current is drawn. Grows only LOGARITHMICALLY with intensity, so doubling the sunlight barely moves it. For silicon, 0.55 to 0.7 V." },
            { "k": "Why V_OC is below E_g/e", "v": "At open circuit the cell is a forward-biased diode, and a diode cannot hold a forward voltage anywhere near its gap. Silicon's gap is 1.1 V and its V_OC is about half that." },
            { "k": "Maximum-power point", "v": "The knee between the two extremes, where the product V × I peaks. A panel is rated by this point, not by I_SC or V_OC separately." },
            { "k": "Fourth quadrant", "v": "Positive voltage with negative current, the signature of a device SUPPLYING energy rather than consuming it." },
            { "k": "Optimal band gap", "v": "About 1.4 eV for the solar spectrum: large enough for a useful voltage, small enough to absorb most of the light. Silicon at 1.1 eV is near-optimal, which is why it dominates." }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A Zener diode with <i>V</i><sub>Z</sub> = 6.0 V regulates the supply to a load drawing <i>I</i><sub>L</sub> = 10 mA. The unregulated input is <i>V</i><sub>in</sub> = 12 V. Choosing <i>I</i><sub>Z</sub> = 20 mA for good regulation, find the series resistor <i>R</i><sub>S</sub>.",
          "steps": [
            "Total line current, from the junction rule: <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub> = 20 + 10 = 30 mA.",
            "Voltage across the series resistor: the load and Zener hold 6.0 V, so <i>R</i><sub>S</sub> takes the rest. <i>V</i><sub>RS</sub> = <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub> = 12 − 6 = 6.0 V.",
            "All of <i>I</i><sub>in</sub> flows through <i>R</i><sub>S</sub>, so <i>R</i><sub>S</sub> = 6.0/(30 × 10<sup>−3</sup>)",
            "= 200 Ω. Check the choice: <i>I</i><sub>Z</sub> is twice <i>I</i><sub>L</sub>, so even if the load doubled its draw the Zener would still be in breakdown and still regulating."
          ],
          "ans": "<i>R</i><sub>S</sub> = 200 Ω, delivering a regulated 6.0 V to the load."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A Zener diode has a power rating <i>P</i> = 2.0 W and <i>V</i><sub>Z</sub> = 10 V. It regulates a line whose unregulated voltage fluctuates between 15 V and 20 V. Ignoring the load, find the MINIMUM series resistance that keeps the Zener within its rating.",
          "steps": [
            "Maximum safe Zener current from the rating: <i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub> = 2.0/10 = 0.20 A.",
            "Worst case: the Zener dissipates most when <i>V</i><sub>in</sub> is HIGHEST and the load draws LEAST, so take <i>V</i><sub>in</sub> = 20 V with no load, which sends all the line current through the Zener.",
            "The line current must not exceed the ceiling: (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/<i>R</i><sub>S</sub> ≤ <i>I</i><sub>Z,max</sub>.",
            "<i>R</i><sub>S</sub> ≥ (20 − 10)/0.20 = 50 Ω.",
            "Sanity check the size: at 50 Ω the Zener passes 200 mA at 10 V, which is 2.0 W, and <i>R</i><sub>S</sub> itself drops 10 V at 200 mA, another 2.0 W. Both parts are dissipating watts, not milliwatts, which is why regulators like this need heatsinks and why nobody builds a large supply this way."
          ],
          "ans": "<i>R</i><sub>S</sub> ≥ 50 Ω. Anything smaller destroys the diode at the top of the input range."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "An LED and a photodiode are both made from the same semiconductor, of band gap <i>E</i><sub>g</sub> = 2.1 eV. Find the wavelength the LED emits and its colour, find the longest wavelength the photodiode can detect, and explain why the two coincide although the devices run in opposite bias.",
          "steps": [
            "LED emission: recombination gives <i>h</i>ν ≈ <i>E</i><sub>g</sub>, so λ = <i>hc</i>/<i>E</i><sub>g</sub> = 1240/2.1 = 590 nm, which is yellow-orange.",
            "Photodiode threshold: to create a pair, an incoming photon must satisfy <i>h</i>ν ≥ <i>E</i><sub>g</sub>, that is λ ≤ <i>hc</i>/<i>E</i><sub>g</sub>. So the LONGEST detectable wavelength is the same 590 nm; anything redder is too weak to bridge the gap and passes straight through undetected.",
            "The symmetry: the two processes are time-reverses of each other. The LED EMITS a photon when an electron drops across <i>E</i><sub>g</sub> (recombination, forward bias driving carriers together); the photodiode ABSORBS a photon to push an electron across <i>E</i><sub>g</sub> (pair generation, reverse bias sweeping carriers apart).",
            "Same energy step, therefore same wavelength. Only the direction of energy flow and the bias differ."
          ],
          "ans": "λ = 590 nm, yellow-orange, for both. A material's band gap sets the colour it can GIVE and the colour it can SEE, and they are the same colour."
        },
        {
          "t": "mcq",
          "q": "A Zener diode used as a voltage regulator is connected:",
          "opts": [
            { "label": "in forward bias, in series with the load", "nudge": "Forward biased, a Zener is just an ordinary diode with a 0.7 V drop and no regulating action at all. The flat region lives in reverse breakdown." },
            { "label": "in reverse bias, in parallel with the load", "nudge": null },
            { "label": "in forward bias, in parallel with the load", "nudge": "Right topology, wrong bias. Across the load is where it belongs, but forward biased it has nothing flat to clamp with." },
            { "label": "in reverse bias, in series with the load", "nudge": "Right bias, wrong topology. In series the Zener could not hold the LOAD's voltage: it would only fix the drop across itself while the load took whatever was left." }
          ],
          "correct": 1,
          "solution": "Regulation relies on the flat breakdown region, which lives in REVERSE bias, and the Zener must sit ACROSS the load so the load sees the clamped <i>V</i><sub>Z</sub> directly. Both halves of the answer are load-bearing, and each wrong option gets exactly one of them right."
        },
        {
          "t": "mcq",
          "q": "Which special-purpose diode operates WITHOUT any external bias?",
          "opts": [
            { "label": "Zener diode", "nudge": "Needs an external supply to push it into reverse breakdown in the first place. Unbiased it does nothing at all." },
            { "label": "photodiode", "nudge": "This is the classic slip, because a photodiode and a solar cell are both illuminated junctions. The photodiode REQUIRES reverse bias to work as a detector." },
            { "label": "light-emitting diode", "nudge": "Needs an external supply to forward bias it. Without a current pushed through it there is nothing to recombine and no light." },
            { "label": "solar cell", "nudge": null }
          ],
          "correct": 3,
          "solution": "A solar cell generates its own emf from incident light, so it needs no external supply, and that is exactly what distinguishes it from the photodiode. The discriminator to carry into the exam: is there an external supply in the circuit? Yes means photodiode, no means solar cell."
        },
        {
          "t": "mcq",
          "q": "Silicon (<i>E</i><sub>g</sub> = 1.1 eV) is unsuitable for making a visible-light LED because:",
          "opts": [
            { "label": "silicon cannot be doped", "nudge": "Simply false, and spectacularly so: silicon is the most heavily doped material in the history of engineering. The entire chapter up to here is about doping it." },
            { "label": "its band gap is too small, so the emitted photons are infrared", "nudge": null },
            { "label": "its band gap is too large, so the emitted photons are ultraviolet", "nudge": "Reverses the chain. A SMALL gap gives a LOW photon energy, which is a LONG wavelength, which is infrared. Ultraviolet would need a gap above about 3.1 eV." },
            { "label": "silicon has no holes", "nudge": "False. Every semiconductor conducts by electrons and holes together, and an intrinsic silicon crystal has exactly as many holes as electrons." }
          ],
          "correct": 1,
          "solution": "The emitted photon energy is about <i>E</i><sub>g</sub> = 1.1 eV, which by the shortcut λ = 1240/1.1 corresponds to about 1130 nm, well into the infrared and invisible. Visible light needs a gap of roughly 1.8 to 3.1 eV, which is why visible LEDs are made from wider-gap compound semiconductors."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE PATTERN] State the bias condition (forward, reverse, or none) under which each of the following operates: Zener diode as a regulator, photodiode, LED, solar cell.",
              "a": "Zener regulator: REVERSE bias, in breakdown, in parallel with the load. Photodiode: REVERSE bias. LED: FORWARD bias. Solar cell: NO external bias, it is self-generating. Memory hook: Zener and Photodiode are Reverse, LED is Forward, Solar is None."
            },
            {
              "q": "[NEET] Why is a Zener diode heavily doped on both sides, and what effect does this have on the width of its depletion region and on its breakdown voltage?",
              "a": "Heavy doping exposes far more fixed ionised cores per unit length, so the same barrier is built across a much thinner slab: the depletion region becomes very thin, under 10<sup>−6</sup> m. Since <i>E</i> = <i>V</i>/<i>d</i>, a thin region means a very high junction field at only a few volts of reverse bias, which gives a LOW and sharply defined breakdown voltage. That is exactly what a regulator needs."
            },
            {
              "q": "[JEE MAIN] A Zener regulator uses <i>V</i><sub>Z</sub> = 5.0 V and an unregulated input of 9.0 V, and supplies a load current of 15 mA. If the Zener current is chosen equal to the load current, find <i>R</i><sub>S</sub>.",
              "a": "<i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub> = 15 + 15 = 30 mA. The series resistor drops <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub> = 9.0 − 5.0 = 4.0 V. So <i>R</i><sub>S</sub> = 4.0/(30 × 10<sup>−3</sup>) = 133 Ω."
            },
            {
              "q": "[JEE MAIN] An LED emits light of wavelength 620 nm. Estimate the band gap of the semiconductor used, taking <i>hc</i> = 1240 eV nm, and name the colour.",
              "a": "<i>E</i><sub>g</sub> = <i>hc</i>/λ = 1240/620 = 2.0 eV. At 620 nm the light is red, which sits at the low-energy end of the visible band, as a 2.0 eV gap should."
            },
            {
              "q": "[JEE ADVANCED] A Zener rated 1.0 W with <i>V</i><sub>Z</sub> = 8.0 V regulates a line that varies between 11 V and 14 V, with no load connected. Find the minimum permissible series resistance.",
              "a": "<i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub> = 1.0/8.0 = 0.125 A. Worst case is the top of the input range with no load, <i>V</i><sub>in</sub> = 14 V, so all the line current goes through the Zener. <i>R</i><sub>S</sub> ≥ (14 − 8)/0.125 = 48 Ω. Below 48 Ω the diode exceeds 1.0 W whenever the line reaches 14 V and burns out."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing the photodiode with the solar cell.</b> Both are illuminated junctions, but the photodiode is REVERSE BIASED and detects, while the solar cell is UNBIASED and generates. The discriminator is always the same question: is there an external supply?",
            "<b>Getting the colour-and-gap direction backwards.</b> Larger band gap gives higher photon energy gives SHORTER wavelength gives bluer light. Smaller gap gives infrared. Silicon at 1.1 eV and germanium at 0.7 eV are infrared-only, which is why visible LEDs use compounds.",
            "<b>Forgetting the worst case in Zener power problems.</b> Maximum Zener dissipation happens at MAXIMUM input voltage with MINIMUM load, usually no load at all. That is the condition that sizes the series resistor, and taking the average input instead gives a resistor that lets the diode burn.",
            "<b>Treating the Zener as forward biased.</b> Regulation lives entirely in the reverse breakdown region. Forward, a Zener is a perfectly ordinary diode with a 0.7 V drop, and it regulates nothing.",
            "<b>Arguing that the photodiode should be forward biased because the current is larger.</b> It is larger, and it is useless: what a detector needs is a large FRACTIONAL change, and that only happens when the dark current is tiny."
          ]
        },
        {
          "t": "protip",
          "html": "for every wavelength question, skip joules and use λ in nanometres = 1240 divided by the gap in electronvolts. one division gives the answer and the colour together: about 620 nm is red, 590 nm yellow, 470 nm blue. for every zener sizing question, test the <b>extreme</b> of the input range and never the average, and remember that the answer is an inequality, not a number. and if a solar-cell question ever asks for the fill factor, it is the ratio of the maximum power to the product of Isc and Voc, typically 0.7 to 0.85, with efficiency measured against a standard 1000 W per square metre of sunlight."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "bias map: Zener and photodiode REVERSE, LED FORWARD, solar cell NONE", "note": "Half the marks in this topic are this one line. Learn it as a map, not a list." },
            { "f": "Zener: heavy doping → thin depletion region → high field at low voltage", "note": "So breakdown at a few volts, sharply defined, and survivable if the current is limited." },
            { "f": "<i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub>, <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>, <i>R</i><sub>S</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/(<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>)", "note": "Reverse biased, in PARALLEL with the load. The Zener is an overflow for surplus current." },
            { "f": "<i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>", "note": "Worst case = maximum input, minimum load. Sets a LOWER bound on R_S." },
            { "f": "breakdown: Zener = tunnelling, low V_Z, coefficient NEGATIVE", "note": "Avalanche = impact ionisation, high V_Z, coefficient POSITIVE. The sign is the only test." },
            { "f": "photodiode: photocurrent ∝ intensity; reverse for SENSITIVITY not size", "note": "Large fractional change against a tiny dark current is what a detector needs." },
            { "f": "λ (nm) = 1240 / <i>E</i><sub>g</sub> (eV)", "note": "LED emission and photodiode threshold, same number. Visible needs 1.8 to 3.1 eV, so not Si or Ge." },
            { "f": "solar cell: <i>I</i><sub>SC</sub> ∝ intensity, <i>V</i><sub>OC</sub> below <i>E</i><sub>g</sub>/<i>e</i>, curve in the 4th quadrant", "note": "Fourth quadrant because it SUPPLIES power. Max-power point at the knee. Gap 1.1 to 1.5 eV." }
          ],
          "aids": [
            "zener and photodiode reverse, led forward, solar none. four words, four devices.",
            "zener clamps like a weir: extra current spills over, the level stays put.",
            "led gives light, photodiode and solar cell take light. same gap, opposite direction.",
            "twelve forty over the gap in electronvolts gives nanometres. one division, every time."
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Digital Electronics and Logic Gates",
      "chip": "05 ONES AND ZEROS",
      "kalam": "two voltages, and the whole digital world built out of them",
      "blocks": [
        {
          "t": "p",
          "html": "Like Topic 04, this is <b>out of the CBSE syllabus and in JEE Main and NEET 2026</b>, and it is the cheapest scoring zone in the whole chapter, because the questions are pattern-based rather than calculation-heavy.<br><br>Everything so far has been <b>analog</b>: voltages that vary smoothly and continuously, like the needle of a speedometer sweeping across its dial. But the entire digital world, your phone, your calculator, every computer, runs on a deliberately cruder idea. Allow a voltage to take only <b>two</b> values. Call a low voltage, say 0 V, a logical <b>0</b>, and a high voltage, say 5 V, a logical <b>1</b>. Two states, nothing in between.<br><br>Why throw away so much? Because two-level signals are extraordinarily <b>robust</b>. A little noise that would corrupt an analog reading cannot turn a clean 0 V into a clean 5 V, because the gap is far too wide. And every complex digital operation, from adding numbers to running an app, can be assembled from a handful of simple building blocks. Master the handful and you have the grammar of all digital electronics."
        },
        {
          "t": "think",
          "html": "picture the tube-light switch on your wall. it is either on or off, and there is no such thing as 37 per cent on. if on means 1 and off means 0, that single switch is the simplest possible digital element. now imagine a little box with two switches as <b>inputs</b> and one bulb as its <b>output</b>, wired so that the bulb's state depends on the switches in a fixed, logical way. that box is a logic gate, and that really is the whole idea."
        },
        {
          "t": "def",
          "term": "Digital signal, and positive logic",
          "html": "A <b>digital signal</b> is one that only ever takes two voltage levels, and numbers built from those two states are <b>binary</b>. This chapter uses <b>positive logic</b> throughout: the HIGHER voltage represents 1 and the lower represents 0. The opposite convention, negative logic, simply swaps the labels and changes nothing physical. The 0 V and 5 V levels here are illustrative; real logic families use different thresholds with a forbidden band in the middle that a valid signal must never sit in.<br><br>A <b>logic gate</b> is a digital circuit that enforces a definite logical relationship between its input voltages and its output voltage."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "TWO SWITCHES AND A BULB",
          "chips": ["in series: the AND gate", "in parallel: the OR gate"],
          "captions": [
            "Two switches in SERIES with a cell and a lamp. The bulb lights only if BOTH switches are closed, because there is one path and every switch on it has to be shut. Call a closed switch 1 and a lit bulb 1, and you have just built an AND gate out of nothing but wire. This is the picture to fall back on whenever you cannot remember which gate is which: series means both, and both means AND.",
            "The same two switches in PARALLEL, the four dots marking where the branch splits and rejoins. Now there are two independent paths to the bulb, so closing EITHER switch lights it, and closing both also lights it. That is the OR gate: output high if any input is high. Notice what the picture makes obvious and the algebra sometimes hides: with both switches closed the bulb is not twice as bright. It is just on. That is exactly why 1 + 1 = 1 in Boolean algebra."
          ],
          "frames": [
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 1], "to": [2, 1] },
                  { "from": [4, 1], "to": [5, 1] },
                  { "from": [7, 1], "to": [9, 1] },
                  { "from": [9, 1], "to": [9, 3] },
                  { "from": [9, 5], "to": [9, 6] },
                  { "from": [9, 6], "to": [1, 6] },
                  { "from": [1, 6], "to": [1, 5] }
                ],
                "parts": [
                  { "at": [1, 1], "to": [1, 5], "kind": "cell", "label": "V", "side": "right" },
                  { "at": [2, 1], "to": [4, 1], "kind": "switch", "label": "A", "side": "above" },
                  { "at": [5, 1], "to": [7, 1], "kind": "switch", "label": "B", "side": "above" },
                  { "at": [9, 3], "to": [9, 5], "kind": "lamp", "label": "Y", "side": "right", "tone": "amber" }
                ]
              },
              "labels": [{ "x": 5.0, "y": 4.0, "text": "both, or nothing" }]
            },
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 2], "to": [3, 2] },
                  { "from": [3, 2], "to": [3, 4] },
                  { "from": [3, 2], "to": [4, 2] },
                  { "from": [6, 2], "to": [8, 2] },
                  { "from": [3, 4], "to": [4, 4] },
                  { "from": [6, 4], "to": [8, 4] },
                  { "from": [8, 2], "to": [8, 4] },
                  { "from": [8, 2], "to": [10, 2] },
                  { "from": [10, 2], "to": [10, 3] },
                  { "from": [10, 5], "to": [10, 6] },
                  { "from": [10, 6], "to": [1, 6] },
                  { "from": [1, 6], "to": [1, 5] }
                ],
                "parts": [
                  { "at": [1, 2], "to": [1, 5], "kind": "cell", "label": "V", "side": "right" },
                  { "at": [4, 2], "to": [6, 2], "kind": "switch", "label": "A", "side": "above" },
                  { "at": [4, 4], "to": [6, 4], "kind": "switch", "label": "B", "side": "below" },
                  { "at": [10, 3], "to": [10, 5], "kind": "lamp", "label": "Y", "side": "right", "tone": "amber" }
                ],
                "nodes": [
                  { "at": [3, 2], "junction": true },
                  { "at": [3, 4], "junction": true },
                  { "at": [8, 2], "junction": true },
                  { "at": [8, 4], "junction": true }
                ]
              },
              "labels": [{ "x": 5.5, "y": 6.6, "text": "either one will do" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "There are exactly <b>three basic gates</b>, and everything else is built from them.<br><br>The <b>OR gate</b> is the \"either\" gate: its output is high if <b>any</b> input is high. Two switches in parallel.<br><br>The <b>AND gate</b> is the \"both\" gate: its output is high only if <b>all</b> inputs are high. Two switches in series.<br><br>The <b>NOT gate</b>, or inverter, is the \"opposite\" gate: one input, one output, and it simply flips: 0 becomes 1 and 1 becomes 0.<br><br>From these three we build the two most important <b>derived</b> gates, the <b>NAND</b> (AND followed by NOT) and the <b>NOR</b> (OR followed by NOT). Those two are special: they are <b>universal gates</b>, meaning any logic function whatsoever can be built using only NANDs, or only NORs. That is why real chips are often manufactured from a sea of identical NAND gates."
        },
        {
          "t": "defgrid",
          "title": "The notation, declared once",
          "rows": [
            { "k": "The complement", "v": "Written A′ here and read \"NOT A\" or \"A bar\". Many textbooks, including NCERT, print it as A with a horizontal bar over the top; A′ is the other standard notation and means exactly the same thing. Nothing else in this chapter carries a prime, so there is nothing to confuse it with." },
            { "k": "OR", "v": "<i>Y</i> = <i>A</i> + <i>B</i>. The \"+\" is the logical OR, NEVER arithmetic addition. Output 1 when any input is 1." },
            { "k": "AND", "v": "<i>Y</i> = <i>A</i> · <i>B</i>. The \"·\" is the logical AND. Output 1 only when all inputs are 1." },
            { "k": "NOT", "v": "<i>Y</i> = <i>A</i>′. One input. Output 1 when the input is 0, and 0 when it is 1." },
            { "k": "NAND and NOR", "v": "<i>Y</i> = (<i>A</i> · <i>B</i>)′ and <i>Y</i> = (<i>A</i> + <i>B</i>)′. AND then NOT, and OR then NOT. Both are UNIVERSAL." },
            { "k": "XOR and XNOR", "v": "<i>Y</i> = <i>A</i>·<i>B</i>′ + <i>A</i>′·<i>B</i>, output 1 only when the inputs DIFFER. XNOR is its complement: output 1 only when they are the SAME." }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 14.11 · THE SYMBOLS, AND HOW TO TELL THEM APART",
          "chips": ["the three basic gates", "add a bubble, invert the output", "XOR: the double back"],
          "captions": [
            "The three shapes you have to recognise on sight, drawn one above the other at full width rather than squeezed into a row. The OR is the CURVED-BACK shield with a pointed nose. The AND is the FLAT-BACKED D-shape. The NOT is a triangle with a small hollow circle at its tip, and that circle is the important part: in this notation a small circle on a line always means \"inverted here\". Inputs A and B enter on the left, the output Y leaves on the right, and every gate in every circuit you will ever be shown follows that convention.",
            "The two derived gates, and they are exactly the two basic shapes with a bubble added at the output. AND plus a bubble is NAND; OR plus a bubble is NOR. That is the entire visual rule, and it is why the bubble is worth learning as a symbol in its own right rather than as part of a shape. These two are the universal gates: tie their inputs together and each becomes an inverter, and from an inverter plus the gate itself you can build anything.",
            "XOR, the exclusive-OR: an OR shape with a SECOND curved line drawn across its back. Output 1 only when the inputs differ, which is what \"exclusive\" means, so unlike the ordinary OR it goes back to 0 when both inputs are high. Put a bubble on its output and you have XNOR, which is 1 only when the inputs agree. The extra back line is the only thing distinguishing XOR from OR on a page, so look for it deliberately."
          ],
          "frames": [
            {
              "x": [0, 10],
              "y": [0, 12],
              "aspect": 1.174,
              "axes": "none",
              "polys": [
                {
                  "pts": [[3.2, 11.5], [4.025, 11.425], [4.7, 11.2], [5.3, 10.75], [5.75, 10], [5.3, 9.25], [4.7, 8.8], [4.025, 8.575], [3.2, 8.5], [3.5, 9.1], [3.68, 9.7], [3.725, 10], [3.68, 10.3], [3.5, 10.9]],
                  "smooth": true,
                  "close": true,
                  "tone": "ink"
                },
                {
                  "pts": [[3.2, 4.5], [3.2, 7.5], [4.025, 7.5], [4.599, 7.386], [5.086, 7.061], [5.411, 6.574], [5.525, 6], [5.411, 5.426], [5.086, 4.939], [4.599, 4.614], [4.025, 4.5]],
                  "close": true,
                  "tone": "ink"
                },
                {
                  "pts": [[3.2, 0.8], [3.2, 3.2], [5.3, 2]],
                  "close": true,
                  "tone": "ink"
                }
              ],
              "marks": [{ "x": 5.5, "y": 2, "glyph": "open" }],
              "segments": [
                { "from": [1.4, 10.75], "to": [3.75, 10.75] },
                { "from": [1.4, 9.25], "to": [3.75, 9.25] },
                { "from": [5.75, 10], "to": [7.3, 10] },
                { "from": [1.4, 6.75], "to": [3.2, 6.75] },
                { "from": [1.4, 5.25], "to": [3.2, 5.25] },
                { "from": [5.525, 6], "to": [7.3, 6] },
                { "from": [1.4, 2], "to": [3.2, 2] },
                { "from": [5.72, 2], "to": [7.3, 2] }
              ],
              "labels": [
                { "x": 1.1, "y": 10.75, "text": "A" },
                { "x": 1.1, "y": 9.25, "text": "B" },
                { "x": 7.6, "y": 10, "text": "Y" },
                { "x": 8.9, "y": 10, "text": "OR" },
                { "x": 1.1, "y": 6.75, "text": "A" },
                { "x": 1.1, "y": 5.25, "text": "B" },
                { "x": 7.6, "y": 6, "text": "Y" },
                { "x": 8.8, "y": 6, "text": "AND" },
                { "x": 1.1, "y": 2, "text": "A" },
                { "x": 7.6, "y": 2, "text": "Y" },
                { "x": 8.8, "y": 2, "text": "NOT" }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 8],
              "aspect": 0.8,
              "axes": "none",
              "polys": [
                {
                  "pts": [[3.2, 4.5], [3.2, 7.5], [4.025, 7.5], [4.599, 7.386], [5.086, 7.061], [5.411, 6.574], [5.525, 6], [5.411, 5.426], [5.086, 4.939], [4.599, 4.614], [4.025, 4.5]],
                  "close": true,
                  "tone": "ink"
                },
                {
                  "pts": [[3.2, 3.5], [4.025, 3.425], [4.7, 3.2], [5.3, 2.75], [5.75, 2], [5.3, 1.25], [4.7, 0.8], [4.025, 0.575], [3.2, 0.5], [3.5, 1.1], [3.68, 1.7], [3.725, 2], [3.68, 2.3], [3.5, 2.9]],
                  "smooth": true,
                  "close": true,
                  "tone": "ink"
                }
              ],
              "marks": [
                { "x": 5.72, "y": 6, "glyph": "open" },
                { "x": 5.95, "y": 2, "glyph": "open" }
              ],
              "segments": [
                { "from": [1.4, 6.75], "to": [3.2, 6.75] },
                { "from": [1.4, 5.25], "to": [3.2, 5.25] },
                { "from": [5.94, 6], "to": [7.3, 6] },
                { "from": [1.4, 2.75], "to": [3.75, 2.75] },
                { "from": [1.4, 1.25], "to": [3.75, 1.25] },
                { "from": [6.17, 2], "to": [7.3, 2] }
              ],
              "labels": [
                { "x": 1.1, "y": 6.75, "text": "A" },
                { "x": 1.1, "y": 5.25, "text": "B" },
                { "x": 7.6, "y": 6, "text": "Y" },
                { "x": 8.7, "y": 6, "text": "NAND" },
                { "x": 1.1, "y": 2.75, "text": "A" },
                { "x": 1.1, "y": 1.25, "text": "B" },
                { "x": 7.6, "y": 2, "text": "Y" },
                { "x": 8.8, "y": 2, "text": "NOR" }
              ]
            },
            {
              "x": [0, 10],
              "y": [0, 4],
              "aspect": 0.426,
              "axes": "none",
              "polys": [
                {
                  "pts": [[3.2, 3.5], [4.025, 3.425], [4.7, 3.2], [5.3, 2.75], [5.75, 2], [5.3, 1.25], [4.7, 0.8], [4.025, 0.575], [3.2, 0.5], [3.5, 1.1], [3.68, 1.7], [3.725, 2], [3.68, 2.3], [3.5, 2.9]],
                  "smooth": true,
                  "close": true,
                  "tone": "ink"
                },
                {
                  "pts": [[2.75, 0.5], [3.05, 1.1], [3.23, 1.7], [3.275, 2], [3.23, 2.3], [3.05, 2.9], [2.75, 3.5]],
                  "smooth": true,
                  "tone": "amber"
                }
              ],
              "segments": [
                { "from": [1.4, 2.75], "to": [3.75, 2.75] },
                { "from": [1.4, 1.25], "to": [3.75, 1.25] },
                { "from": [5.75, 2], "to": [7.3, 2] }
              ],
              "labels": [
                { "x": 1.1, "y": 2.75, "text": "A" },
                { "x": 1.1, "y": 1.25, "text": "B" },
                { "x": 7.6, "y": 2, "text": "Y" },
                { "x": 8.8, "y": 2, "text": "XOR" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The complete two-input truth table",
          "rows": [
            { "k": "A = 0, B = 0", "v": "OR 0 · AND 0 · NAND 1 · NOR 1 · XOR 0 · XNOR 1" },
            { "k": "A = 0, B = 1", "v": "OR 1 · AND 0 · NAND 1 · NOR 0 · XOR 1 · XNOR 0" },
            { "k": "A = 1, B = 0", "v": "OR 1 · AND 0 · NAND 1 · NOR 0 · XOR 1 · XNOR 0" },
            { "k": "A = 1, B = 1", "v": "OR 1 · AND 1 · NAND 0 · NOR 0 · XOR 0 · XNOR 1" },
            { "k": "NOT (one input)", "v": "0 gives 1, and 1 gives 0. That is the whole gate." },
            { "k": "Reading it back", "v": "OR is 1 if ANY input is 1. AND is 1 only if ALL are. NAND and NOR are those two with the output inverted. XOR is 1 when the inputs DIFFER, XNOR when they agree." }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BOOLEAN IDENTITIES",
          "tag": "logic, never arithmetic",
          "main": "<i>A</i> + 0 = <i>A</i>,  <i>A</i> + 1 = 1,  <i>A</i> + <i>A</i> = <i>A</i>,  <i>A</i> + <i>A</i>′ = 1<br><i>A</i> · 0 = 0,  <i>A</i> · 1 = <i>A</i>,  <i>A</i> · <i>A</i> = <i>A</i>,  <i>A</i> · <i>A</i>′ = 0,  (<i>A</i>′)′ = <i>A</i>",
          "legend": [
            "<i>A</i> = a logic variable, taking only the values 0 and 1. DIMENSIONLESS: there is no SI unit anywhere in this topic and nothing here has a dimensional formula",
            "\"+\" means logical OR and \"·\" means logical AND, so 1 + 1 = 1 and not 2",
            "<i>A</i>′ means NOT <i>A</i>, the complement"
          ],
          "note": "The two that do the most work are <i>A</i> + <i>A</i> = <i>A</i> and <i>A</i> · <i>A</i> = <i>A</i>, called idempotence. They are why tying the two inputs of a gate together collapses it: OR and AND become plain wires, and NAND and NOR both become inverters, which is the first step of every universal-gate construction."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DE MORGAN'S THEOREMS",
          "tag": "the most-tested lines in the topic",
          "main": "(<i>A</i> + <i>B</i>)′ = <i>A</i>′ · <i>B</i>′<br>(<i>A</i> · <i>B</i>)′ = <i>A</i>′ + <i>B</i>′",
          "legend": [
            "<i>A</i>, <i>B</i> = logic variables, each 0 or 1, DIMENSIONLESS",
            "The prime is the complement; \"+\" is OR and \"·\" is AND"
          ],
          "note": "Both things happen at once: the bar DISTRIBUTES onto each variable AND the operation FLIPS. Forgetting the flip and writing (<i>A</i> + <i>B</i>)′ = <i>A</i>′ + <i>B</i>′ is the single commonest error in the topic, and it is the distractor every MCQ on De Morgan is built from. The one-line version to carry: break the bar, change the sign."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 14.12 · EVERYTHING, FROM NAND GATES ALONE",
          "chips": ["NOT from one NAND", "AND from two", "OR from three"],
          "captions": [
            "Tie both inputs of a NAND together and feed them the same signal A. The output is (A · A)′, and by idempotence A · A = A, so the output is simply A′. One NAND gate has become an inverter, and that is the doorway to everything else on this page.",
            "AND from two NANDs. The first NAND gives (A · B)′, which is the AND you want but inverted. So feed it into a second NAND used as the inverter from the first chip, and the two inversions cancel: ((A · B)′)′ = A · B. Two gates, and the trick is simply that a NAND is an AND with an unwanted inversion you can undo.",
            "OR from three NANDs, and this one needs De Morgan rather than cancellation. Invert each input separately with a NAND-as-NOT, giving A′ and B′, then NAND those two together. The result is (A′ · B′)′, and De Morgan turns that into (A′)′ + (B′)′ = A + B. Three gates. Since NOT, AND and OR are all now reproducible from NANDs alone, and every Boolean function reduces to those three, NAND alone suffices for any logic circuit whatsoever. The identical argument with the other De Morgan theorem works for NOR."
          ],
          "frames": [
            {
              "aspect": 0.34,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "A" },
                  { "id": "g", "col": 1, "row": 0, "text": "NAND" },
                  { "id": "y", "col": 2, "row": 0, "text": "A'", "tone": "amber" }
                ],
                "links": [
                  { "from": "a", "to": "g", "label": "both" },
                  { "from": "g", "to": "y" }
                ]
              }
            },
            {
              "aspect": 0.5,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "A" },
                  { "id": "b", "col": 0, "row": 1, "text": "B" },
                  { "id": "g1", "col": 1, "row": 0, "text": "NAND" },
                  { "id": "g2", "col": 2, "row": 0, "text": "NAND" },
                  { "id": "y", "col": 3, "row": 0, "text": "A.B", "tone": "amber" }
                ],
                "links": [
                  { "from": "a", "to": "g1" },
                  { "from": "b", "to": "g1" },
                  { "from": "g1", "to": "g2" },
                  { "from": "g2", "to": "y" }
                ]
              }
            },
            {
              "aspect": 0.5,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "A" },
                  { "id": "b", "col": 0, "row": 1, "text": "B" },
                  { "id": "g1", "col": 1, "row": 0, "text": "NAND" },
                  { "id": "g2", "col": 1, "row": 1, "text": "NAND" },
                  { "id": "g3", "col": 2, "row": 0, "text": "NAND" },
                  { "id": "y", "col": 3, "row": 0, "text": "A+B", "tone": "amber" }
                ],
                "links": [
                  { "from": "a", "to": "g1" },
                  { "from": "b", "to": "g2" },
                  { "from": "g1", "to": "g3" },
                  { "from": "g2", "to": "g3" },
                  { "from": "g3", "to": "y" }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY NAND IS UNIVERSAL, TAP A LINE",
          "steps": [
            {
              "eq": "a gate set is UNIVERSAL if it can reproduce NOT, AND and OR",
              "why": "Because every Boolean function whatsoever can be written as sums of products of variables and their complements, and those three operations are all such an expression uses. Reproduce the three and you have reproduced everything."
            },
            {
              "eq": "NOT from NAND: tie both inputs to <i>A</i>. Output = (<i>A</i> · <i>A</i>)′ = <i>A</i>′",
              "why": "By idempotence, <i>A</i> · <i>A</i> = <i>A</i>. One gate, and it is the step that makes the other two possible."
            },
            {
              "eq": "AND from NAND: one NAND, then a second used as the inverter above. Output = ((<i>A</i> · <i>B</i>)′)′ = <i>A</i> · <i>B</i>",
              "why": "Double negation, (<i>X</i>′)′ = <i>X</i>. A NAND already computes the AND you want and then spoils it with an inversion, so undoing that inversion is all that is needed. Two gates."
            },
            {
              "eq": "OR from NAND: invert each input, then NAND them. Output = (<i>A</i>′ · <i>B</i>′)′ = (<i>A</i>′)′ + (<i>B</i>′)′ = <i>A</i> + <i>B</i>",
              "why": "This is De Morgan's second theorem applied to <i>A</i>′ and <i>B</i>′, then double negation on each term. Three gates: two inverters and one combining NAND."
            },
            {
              "eq": "therefore NAND alone suffices for any logic circuit, and the same argument gives NOR",
              "why": "The NOR version uses the other De Morgan theorem: invert each input with a NOR-as-NOT, then NOR them, giving (<i>A</i>′ + <i>B</i>′)′ = <i>A</i> · <i>B</i>. Three NOR gates for an AND. This is the deep reason chips are mass-produced from one repeated gate: one mask, one transistor layout, endless functions."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Building the truth table of any combination circuit",
          "steps": [
            "<b>Count the inputs and write every row.</b> With <i>n</i> inputs there are 2<sup><i>n</i></sup> rows: four for two inputs, eight for three. List them in binary order (00, 01, 10, 11) so you cannot miss one.",
            "<b>Add a column for every intermediate wire, not just the final output.</b> Label each wire with its Boolean expression as you go, and never skip a gate. Half the marks in a JEE Main question are for these columns.",
            "<b>Fill them left to right, using each gate's own rule.</b> OR is any-high, AND is all-high, NOT flips, NAND and NOR are those inverted. Every gate is a deterministic function of its inputs, so propagating left to right is guaranteed to give the unique output for each case.",
            "<b>Look for tied inputs before you do anything else.</b> A NAND or a NOR with both inputs fed the same signal is a NOT gate, every time. An OR or an AND with tied inputs is a plain wire. Spotting one of these collapses many circuits instantly.",
            "<b>Identify the result by its output column.</b> All six two-input gates have distinct columns, so once you have (00, 01, 10, 11) you have the gate. If the output is high exactly when the inputs differ, it is XOR; when they agree, XNOR."
          ]
        },
        {
          "t": "proc",
          "title": "Realising any expression from NAND or NOR alone",
          "steps": [
            "<b>Decide which universal gate you are being asked for</b>, and recall which De Morgan theorem it goes with. NAND pairs with (<i>X</i> · <i>Y</i>)′ = <i>X</i>′ + <i>Y</i>′; NOR pairs with (<i>X</i> + <i>Y</i>)′ = <i>X</i>′ · <i>Y</i>′.",
            "<b>Push the expression into a form with bars over SINGLE variables only.</b> Use De Morgan repeatedly until no bar sits over a bracket. Every remaining bar is then one tied-input gate, and every remaining operation is one more gate.",
            "<b>Build the inverters first.</b> Each NOT costs one gate with its inputs tied. This is where most of the gate count comes from, and it is why counting inverters is how you count the circuit.",
            "<b>Then combine, and check whether the last gate leaves you inverted.</b> A NAND computes AND-then-NOT, so if your target was the AND you need one more gate to undo it. Forgetting this final inversion is how a correct-looking three-gate answer turns out to compute the complement of what was asked.",
            "<b>Verify on the corner rows before you commit.</b> Test all-zero and all-one inputs against what the target expression should give. Two rows will catch a missing final inversion instantly, because a complement is wrong on every row."
          ]
        },
        {
          "t": "def",
          "term": "Universal gate",
          "html": "A gate from which <b>any</b> logic function whatsoever can be built, using copies of that gate alone and nothing else. There are exactly two, <b>NAND</b> and <b>NOR</b>, and a gate qualifies precisely when it can reproduce NOT, AND and OR, since every Boolean expression reduces to those three.<br><br>Neither OR nor AND is universal, because no combination of them ever produces a complement. XOR is not universal either, however useful it is. Universality is why a chip designer can lay out one transistor pattern and repeat it across a whole wafer."
        },
        {
          "t": "p",
          "html": "Why does XOR earn a symbol of its own, when it is just two ANDs and an OR?<br><br>Because it is exactly <b>binary addition without the carry</b>. Add two binary digits: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, and 1 + 1 = 10, which is a sum digit of 0 with a carry of 1. Line up the sum digits and you get 0, 1, 1, 0, which is the XOR column. Line up the carries and you get 0, 0, 0, 1, which is the AND column.<br><br>So one XOR gate and one AND gate side by side add two bits, sum on one output and carry on the other. That pair is called a half adder, it is the smallest arithmetic unit in existence, and every calculator and every processor is built by stacking it. This is not on the syllabus as a topic, but it is the answer to \"what are gates FOR\", and it is worth thirty seconds."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD / JEE MAIN PATTERN",
          "q": "A logic circuit produces the output <i>Y</i> = <i>A</i> + <i>B</i>′, read as \"A OR (NOT B)\". Construct its complete truth table and state for how many input combinations the output is high.",
          "steps": [
            "Two inputs, so 2<sup>2</sup> = 4 rows. Add an intermediate column for <i>B</i>′.",
            "<i>A</i> = 0, <i>B</i> = 0: <i>B</i>′ = 1, so <i>Y</i> = 0 + 1 = 1.",
            "<i>A</i> = 0, <i>B</i> = 1: <i>B</i>′ = 0, so <i>Y</i> = 0 + 0 = 0.",
            "<i>A</i> = 1, <i>B</i> = 0: <i>B</i>′ = 1, so <i>Y</i> = 1 + 1 = 1. Note that 1 + 1 is 1, not 2.",
            "<i>A</i> = 1, <i>B</i> = 1: <i>B</i>′ = 0, so <i>Y</i> = 1 + 0 = 1."
          ],
          "ans": "<i>Y</i> = 1 in three of the four cases. It is 0 only when <i>A</i> = 0 and <i>B</i> = 1, the single case where neither \"A is high\" nor \"B is low\" holds."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "The two inputs of a NOR gate are connected together and fed the same signal <i>A</i>. Which single gate does the circuit behave as?",
          "steps": [
            "The trap is to answer \"it is still a NOR\" or \"it becomes an OR\". Write the expression instead.",
            "With both inputs equal to <i>A</i>, the output is (<i>A</i> + <i>A</i>)′.",
            "Idempotence: <i>A</i> + <i>A</i> = <i>A</i>.",
            "So the output is <i>A</i>′, which is a NOT gate."
          ],
          "ans": "A NOT gate (inverter). Whenever a two-input NAND OR NOR has its inputs tied together it becomes a NOT gate, and this is the first step of every universal-gate construction, so answer it on sight."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Inputs <i>A</i> and <i>B</i> each split into two paths. Gate 1 computes <i>A</i>·<i>B</i>′, gate 2 computes <i>A</i>′·<i>B</i>, and their outputs feed an OR gate. Find the Boolean expression and name the standard gate this implements.",
          "steps": [
            "The OR of the two AND outputs: <i>Y</i> = <i>A</i>·<i>B</i>′ + <i>A</i>′·<i>B</i>.",
            "<i>A</i> = 0, <i>B</i> = 0: 0·1 = 0 and 1·0 = 0, so <i>Y</i> = 0.",
            "<i>A</i> = 0, <i>B</i> = 1: 0·0 = 0 and 1·1 = 1, so <i>Y</i> = 1.",
            "<i>A</i> = 1, <i>B</i> = 0: 1·1 = 1 and 0·0 = 0, so <i>Y</i> = 1.",
            "<i>A</i> = 1, <i>B</i> = 1: 1·0 = 0 and 0·1 = 0, so <i>Y</i> = 0. The output is 1 exactly when the inputs DIFFER."
          ],
          "ans": "<i>Y</i> = <i>A</i>·<i>B</i>′ + <i>A</i>′·<i>B</i> = <i>A</i> XOR <i>B</i>. Two AND gates with one inverted input each, feeding an OR, is the standard way XOR is built from basic gates."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Realise an OR gate using only NAND gates. Prove the circuit is correct using De Morgan's theorem and state the minimum number of NAND gates required.",
          "steps": [
            "Invert each input with a NAND used as a NOT, inputs tied: gate 1 gives <i>A</i>′, gate 2 gives <i>B</i>′. That is 2 gates.",
            "Feed <i>A</i>′ and <i>B</i>′ into a third NAND: the output is (<i>A</i>′ · <i>B</i>′)′. That is 1 more gate.",
            "De Morgan, in the form (<i>X</i> · <i>Y</i>)′ = <i>X</i>′ + <i>Y</i>′, with <i>X</i> = <i>A</i>′ and <i>Y</i> = <i>B</i>′: (<i>A</i>′ · <i>B</i>′)′ = (<i>A</i>′)′ + (<i>B</i>′)′ = <i>A</i> + <i>B</i>.",
            "Verify by table: inputs 00 give <i>A</i>′<i>B</i>′ = 1 so the output is 0; 01 gives 1·0 = 0 so the output is 1; 10 gives 0·1 = 0 so the output is 1; 11 gives 0·0 = 0 so the output is 1. That column, 0 1 1 1, is OR exactly."
          ],
          "ans": "Minimum 3 NAND gates. De Morgan's theorem PREDICTS the construction before you draw a single wire: invert the inputs, NAND them, and an OR falls out."
        },
        {
          "t": "mcq",
          "q": "Which of the following is a UNIVERSAL gate?",
          "opts": [
            { "label": "OR", "nudge": "A basic gate, but it cannot produce inversion by itself, and without a NOT you can never build a NAND or a NOR. Basic is not the same as universal." },
            { "label": "AND", "nudge": "Same problem as OR: no amount of ANDing ever complements anything, so the set is incomplete." },
            { "label": "NAND", "nudge": null },
            { "label": "XOR", "nudge": "Tempting because XOR feels important and clever, but it is a DERIVED gate, itself built from basic ones, and it is not universal. Students who equate \"important\" with \"universal\" pick this." }
          ],
          "correct": 2,
          "solution": "A NAND gate can be combined to reproduce NOT (tie the inputs), AND (NAND then invert) and OR (invert both inputs, then NAND), and every Boolean function reduces to those three. So NAND alone suffices for any circuit. NOR is the other universal gate, by the mirror argument."
        },
        {
          "t": "mcq",
          "q": "The Boolean expression (<i>A</i> + <i>B</i>)′ is equal to:",
          "opts": [
            { "label": "<i>A</i>′ + <i>B</i>′", "nudge": "Applies the bar to each term but keeps the OR. This is the classic De Morgan error: the operation has to FLIP as well, from + to ·." },
            { "label": "<i>A</i>′ · <i>B</i>′", "nudge": null },
            { "label": "<i>A</i> · <i>B</i>", "nudge": "Flips the operation but forgets to complement the variables, so it is high exactly when the correct answer is not." },
            { "label": "(<i>A</i> · <i>B</i>)′", "nudge": "This is the OTHER De Morgan form, which equals A′ + B′. It tempts anyone who memorised the two theorems without tracking which is which." }
          ],
          "correct": 1,
          "solution": "De Morgan's first theorem: the complement of a sum is the product of the complements. Both things happen together, the bar distributes AND the operation flips. Check it on one row: <i>A</i> = 1, <i>B</i> = 0 gives (1 + 0)′ = 0 on the left and 0 · 1 = 0 on the right."
        },
        {
          "t": "mcq",
          "q": "A two-input gate gives output 1 only when its two inputs are DIFFERENT. The gate is:",
          "opts": [
            { "label": "AND", "nudge": "AND is 1 only when both inputs are 1, which is a case where they are the SAME. It is 0 on both of the differing rows." },
            { "label": "NOR", "nudge": "NOR is 1 only when both inputs are 0, again a case where they agree. It is the mirror mistake to picking AND." },
            { "label": "XOR", "nudge": null },
            { "label": "NAND", "nudge": "NAND is 1 in three of the four rows, including 00 where the inputs agree, so it does not single out \"different\" at all." }
          ],
          "correct": 2,
          "solution": "\"Output 1 only when the inputs differ\" is the definition of the exclusive-OR, <i>Y</i> = <i>A</i>·<i>B</i>′ + <i>A</i>′·<i>B</i>, whose column over (00, 01, 10, 11) is 0 1 1 0. None of the other three has that column, which is why the description pins the gate uniquely."
        },
        {
          "t": "mcq",
          "q": "In Boolean algebra, 1 + 1 equals:",
          "opts": [
            { "label": "2", "nudge": "Treats \"+\" as ordinary addition. In Boolean algebra the symbols denote LOGIC operations and never counting, and there is no such value as 2." },
            { "label": "0", "nudge": "Confuses OR with XOR. It is true that 1 XOR 1 = 0, but the plain \"+\" is OR, and OR of two highs is high." },
            { "label": "1", "nudge": null },
            { "label": "10", "nudge": "Treats \"+\" as binary addition with a carry. Boolean algebra has no carry and no second digit: a variable is 0 or 1 and nothing else." }
          ],
          "correct": 2,
          "solution": "The \"+\" is logical OR, so 1 + 1 = 1, and more generally <i>A</i> + <i>A</i> = <i>A</i>. Go back to the two switches in parallel: close both and the bulb is not twice as bright, it is simply on. That picture settles this question permanently."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE / NEET PATTERN] Draw the logic symbol and write the truth table and Boolean expression for the AND gate and for the NOR gate.",
              "a": "AND: the flat-backed D-shape, <i>Y</i> = <i>A</i> · <i>B</i>, output 1 only for <i>A</i> = <i>B</i> = 1, so the column over (00, 01, 10, 11) is 0 0 0 1. NOR: the curved-back shield with a bubble on the output, <i>Y</i> = (<i>A</i> + <i>B</i>)′, output 1 only for <i>A</i> = <i>B</i> = 0, column 1 0 0 0. The two are near opposites: each is high in exactly one row, and in different rows."
            },
            {
              "q": "[NEET] A NAND gate has both its inputs shorted together and fed with signal <i>A</i>. What logic operation does it perform?",
              "a": "NOT. The output is (<i>A</i> · <i>A</i>)′, and by idempotence <i>A</i> · <i>A</i> = <i>A</i>, so the output is <i>A</i>′. The same happens with a NOR, whose tied-input output is (<i>A</i> + <i>A</i>)′ = <i>A</i>′. Tied inputs turn either universal gate into an inverter."
            },
            {
              "q": "[JEE MAIN] Write the Boolean expression for the output of a two-input AND gate whose output is then passed through a NOT gate, and name the resulting gate.",
              "a": "<i>Y</i> = (<i>A</i> · <i>B</i>)′, which is the NAND gate. \"NAND\" is literally \"NOT AND\", and the symbol is the AND shape with a bubble on its output, which is the same statement drawn."
            },
            {
              "q": "[JEE MAIN] For inputs <i>A</i> = 1 and <i>B</i> = 0, find the output of (i) an XOR gate, (ii) a NOR gate and (iii) a NAND gate.",
              "a": "(i) XOR = 1, because the inputs differ. (ii) NOR = (1 + 0)′ = 1′ = 0. (iii) NAND = (1 · 0)′ = 0′ = 1. Reading straight off the master table's third row gives the same three answers in one second."
            },
            {
              "q": "[JEE ADVANCED] Using De Morgan's theorem, realise an AND gate using only NOR gates, and state the minimum number of NOR gates needed.",
              "a": "Invert each input with a NOR-as-NOT, inputs tied: 2 gates, giving <i>A</i>′ and <i>B</i>′. Then NOR those two: (<i>A</i>′ + <i>B</i>′)′, and by De Morgan that equals (<i>A</i>′)′ · (<i>B</i>′)′ = <i>A</i> · <i>B</i>. Minimum 3 NOR gates. It is the exact mirror of building an OR from three NANDs."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Treating Boolean \"+\" as arithmetic.</b> <i>A</i> + <i>A</i> = <i>A</i> and 1 + 1 = 1. The \"+\" is OR and the \"·\" is AND. This is the most common conceptual slip in the whole topic and it makes every subsequent line wrong.",
            "<b>Botching De Morgan.</b> The bar distributes AND the operation flips: (<i>A</i> + <i>B</i>)′ = <i>A</i>′ · <i>B</i>′, not <i>A</i>′ + <i>B</i>′. Forgetting the flip is the top error, and every De Morgan MCQ is built around it.",
            "<b>Confusing the AND and OR symbols.</b> AND is the FLAT-backed D-shape and means \"both\"; OR is the CURVED-back shield and means \"either\". Swapping them inverts the whole truth table.",
            "<b>Forgetting which gates are universal.</b> Only NAND and NOR. Not XOR, however clever it looks. Tie the inputs of either universal gate and it becomes an inverter, which is the gateway to every construction.",
            "<b>Naming a gate from a single row.</b> AND and OR agree on the 11 row and NAND and NOR agree on the 00 row, so one matching row proves nothing. Collect all four input combinations before you commit."
          ]
        },
        {
          "t": "protip",
          "html": "to identify an unknown gate fast you rarely need the whole table, just the two corner cases. check the all-zero input and the all-one input: OR(0,0) = 0 and OR(1,1) = 1; AND is the opposite way round; NAND(1,1) = 0; NOR(0,0) = 1; XOR(1,1) = 0. two rows usually pin it down. and if the question hands you two input PULSE TRAINS drawn against time instead of a table, slice the time axis at every input transition, read each trace <b>mid-slice</b> and never at an edge, build the little table from the slices, and match the output column. same physics, same table, drawn sideways."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "digital = two levels only: 0 (low) and 1 (high); positive logic means high is 1", "note": "Robust because noise cannot bridge the gap. Logic variables are dimensionless: no SI unit here." },
            { "f": "OR <i>Y</i> = <i>A</i> + <i>B</i> (any-high) · AND <i>Y</i> = <i>A</i> · <i>B</i> (all-high) · NOT <i>Y</i> = <i>A</i>′", "note": "OR is the curved-back shield, AND the flat-backed D, NOT a triangle with a bubble." },
            { "f": "NAND (<i>A</i> · <i>B</i>)′ · NOR (<i>A</i> + <i>B</i>)′ · XOR <i>A</i>·<i>B</i>′ + <i>A</i>′·<i>B</i>", "note": "A bubble on the output is what inverts a shape. XOR is 1 only when the inputs differ." },
            { "f": "columns over (00, 01, 10, 11): OR 0111 · AND 0001 · NAND 1110 · NOR 1000 · XOR 0110 · XNOR 1001", "note": "All six are distinct, so the output column names the gate uniquely." },
            { "f": "universal gates: NAND and NOR, either alone builds ANY circuit", "note": "Tie the inputs and each becomes a NOT. XOR from 4 NANDs; OR from 3 NANDs; AND from 3 NORs." },
            { "f": "De Morgan: (<i>A</i> + <i>B</i>)′ = <i>A</i>′ · <i>B</i>′ and (<i>A</i> · <i>B</i>)′ = <i>A</i>′ + <i>B</i>′", "note": "The bar distributes AND the operation flips. Break the bar, change the sign." },
            { "f": "key identities: <i>A</i> + <i>A</i> = <i>A</i>, <i>A</i> · <i>A</i> = <i>A</i>, <i>A</i> + <i>A</i>′ = 1, <i>A</i> · <i>A</i>′ = 0, (<i>A</i>′)′ = <i>A</i>", "note": "n inputs give 2 to the power n truth-table rows: four for two inputs, eight for three." }
          ],
          "aids": [
            "OR = either, AND = both, NOT = opposite. series is AND, parallel is OR.",
            "NAND and NOR are the universal twins. tie their inputs and they turn into NOT.",
            "de morgan: break the bar, change the sign. both things, every time.",
            "XOR = eXclusive = the odd-one-out gate. high only when the two inputs disagree."
          ]
        }
      ]
    }
  ]
};

export default phy12Semiconductors;
