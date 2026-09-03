/**
 * Chapter 03 · Current Electricity. Physics, Class 12.
 *
 * Restructured from pages 139 to 252 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * content/textbooks/phy-11-09-mech-fluids.ts.
 *
 * HOW 114 PAGES WERE CUT TO 153 BLOCKS. This is the largest chapter in either
 * book and roughly 40 percent longer than the Class 11 fluids chapter, so the
 * cut is the real editorial work and is set out here in full.
 *
 *   1. THE ROUND 2 ADDENDUM IS NOT A TOPIC, per the brief. That removes pages
 *      235 to 252 outright, eighteen pages, sixteen percent of the range.
 *      Addenda A (delta-star), B (infinite grids), C (mesh analysis),
 *      D (advanced potentiometry), E (unbalanced-bridge galvanometer current)
 *      and F (non-identical cells) survive below only inside a `protip`, a
 *      `mistakes` item or the hardest `ex` of a group. No `formula`,
 *      `defgrid`, `deriv` or `proc` block below is sourced from the addendum.
 *      This turned out to matter for a second reason: every arithmetic error
 *      in the whole range is in the addendum. See CORRECTIONS.
 *   2. THE MASTER APPENDIX (pages 230 to 234) IS NOT A TOPIC EITHER. Its
 *      formula sheet, units table and twenty-five rapid-revision facts are
 *      exactly what six `snapshot` blocks are for, so it was distributed into
 *      them rather than given space of its own. Its five integrated problems
 *      became the last `ex` of the group whose topic they lean on hardest.
 *   3. THE LAWS ARE FEW AND THE CIRCUITS ARE MANY. That is the organising idea
 *      the chapter's own map states: "what makes charge flow, what resists it,
 *      how to power it, and how to measure it." So the formula inventory is
 *      carried DENSELY by `defgrid` and `formula` (fifteen defgrids and
 *      twenty-two formula cards below, holding all fifty-three printed
 *      relations), and the prose is spent almost entirely on WHICH law a
 *      configuration calls for and why: series-versus-parallel intuition, when
 *      a bridge balances, why a null method reads a true EMF. Where the source
 *      re-derives an idea it has already proved, this chapter states it once
 *      and points back.
 *   4. WHAT WAS DROPPED, NAMED. The resistor colour-code table is compressed
 *      from a two-column ten-row table into one `defgrid` row plus a `proc`
 *      and the BBROY mnemonic. The eight-way "how to use this reference"
 *      preamble and the study-pass advice (pages 143 to 144) are gone, being
 *      instructions to a reader of a PDF. Subtopic 02's thermistor paragraph
 *      and superconductivity paragraph are compressed to one `defgrid` row and
 *      one `mistakes` line each. The seven-item units-and-dimensions table is
 *      absorbed into `formula.legend` lines, which the brief requires anyway.
 *
 * SIX TOPICS FROM EIGHT SOURCE SUBTOPICS, AND EXACTLY TWO MERGES. The source
 * names eight: 01 Electric Current, Ohm's Law & Drift Velocity; 02 Resistivity,
 * Temperature Dependence & Material Classification; 03 Combination of Resistors;
 * 04 Electrical Energy & Power; 05 EMF, Terminal Voltage & Internal Resistance;
 * 06 Combination of Cells; 07 Kirchhoff's Laws & Electrical Networks;
 * 08 Wheatstone Bridge & Measuring Instruments. The reader's own gate
 * (scripts/validate-chapters.mjs) rejects any chapter outside four to six
 * topics, so eight could not ship. Both merges are on seams the source crosses
 * itself, and each is justified here:
 *
 *   - TOPIC 01 = SOURCE 01 + 02. The source prints subtopic 02's headline
 *     formula, rho_T = rho_0[1 + alpha(T - T0)], inside subtopic 01's own Key
 *     Formulas section (page 149) before subtopic 02 exists; subtopic 01's
 *     Practice item 4 (page 158) is a pure temperature-coefficient problem
 *     belonging wholly to subtopic 02; subtopic 01's MCQ Q3 (page 159) is the
 *     metal-versus-semiconductor question that is subtopic 02's central idea;
 *     and subtopic 02 opens by saying "Recall from the drift picture that
 *     resistivity is rho = m/(n e^2 tau)", then spends its section 3.2 deriving
 *     its own results from subtopic 01's microscopic Ohm's law. The seam is
 *     crossed in both directions on four separate pages. One quantity, rho, and
 *     one model, the free-electron gas, run the whole of both.
 *   - TOPIC 04 = SOURCE 05 + 06. Every formula in subtopic 06 is subtopic 05's
 *     I = E/(R + r) with E replaced by E_eq and r by r_eq; subtopic 06's
 *     section 3.1 derivation is literally subtopic 05's loop equation written n
 *     times; and subtopic 06's Example 4 closes by pointing back across the
 *     seam in its own words ("exactly the maximum-current, and maximum-power-
 *     transfer, condition from the energy subtopic, now realised by choosing
 *     the grouping"). Neither half has the material to carry a topic of this
 *     chapter's density alone: subtopic 05's every practice item and every MCQ
 *     is a one-line substitution into V = E - Ir.
 *
 *   NOTHING ELSE WAS MERGED AND NOTHING WAS SPLIT. Source 07 and 08 were the
 *   obvious third candidate, since subtopic 08 opens by saying the bridge
 *   balance condition was "derived in full under Kirchhoff's laws". They are
 *   kept apart anyway: at thirteen and sixteen pages they are the two highest-
 *   yield slices in the chapter, and a merged topic would have been half the
 *   book. Topics 01 and 04 below are correspondingly the two largest, which is
 *   what an honest merge looks like: the material is all still here.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). NO ENTRY TOUCHES THIS
 * RANGE. The Class 12 errata carries exactly two items, both outside Chapter 3:
 * Chapter 7 (Alternating Current), page 14, a series-LCR practice problem whose
 * stated drive frequency is its own resonant frequency, so the described phase
 * lag cannot occur; and Chapter 10 (Wave Optics), page 33, a thin-film
 * derivation with the bright and dark conditions swapped in one sentence.
 * Neither is quoted or used below. Chapter 3 has no erratum.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 139 to 252 was recomputed independently. THE MAIN BODY IS CLEAN:
 * all thirty-two worked examples, forty practice items, thirty-two MCQ keys and
 * five integrated problems across subtopics 01 to 08 and the Master Appendix
 * reproduce exactly. EVERY ERROR IN THE RANGE IS IN THE ROUND 2 ADDENDUM, nine
 * of them, which is the same pattern the Class 11 authors logged, worse:
 *
 *   1. Addendum A, Example A.3 (page 237). Bridge with P = 6, Q = 3, R = 9,
 *      S = 3 and a galvanometer arm of 2, all ohms, asked for R_AC. Printed
 *      6.94 ohm. The printed route is incoherent on its own terms: it names a
 *      "delta P-S-R", but P (arm AB), S (arm DC) and R (arm AD) do not form a
 *      triangle, and it then adds the star arm R_R back to the FULL 9 ohm arm
 *      R, counting R twice. Node analysis with V_A = V, V_C = 0 gives
 *      V_B = 23V/75 and V_D = 7V/25, hence I = 44V/(225 R) and
 *      R_AC = 225/44 = 5.11 ohm. The correction does not even need the exact
 *      galvanometer resistance: shorting the bridge arm gives
 *      (6||9) + (3||3) = 5.10 ohm and opening it gives (6+3)||(9+3) = 5.14 ohm,
 *      and R_AC is monotonic in G between those, so ANY galvanometer resistance
 *      puts the answer in [5.10, 5.14] ohm. 6.94 ohm is impossible.
 *      CORRECT ANSWER 5.11 ohm.
 *   2. Addendum A, Practice 5 (page 238). Star R1 = 2, R2 = 3, R3 = 6 ohm
 *      converted to delta. Printed R12 = 2 + 3 + 12/6 = 7 ohm. But
 *      R1 R2 = 2 x 3 = 6, not 12, so R12 = 2 + 3 + 6/6 = 6 ohm. (R23 = 18 and
 *      R31 = 12 are both right.) Worse than the slip is the excuse printed
 *      beneath it: the source notices its reconversion gives 84/37 instead of
 *      2 and blames "rounding in intermediate steps". There is no rounding
 *      anywhere in the calculation and the transformation is exact. With the
 *      correct delta (6, 18, 12), sum 36, the reverse transformation recovers
 *      6 x 12/36 = 2, 6 x 18/36 = 3 and 18 x 12/36 = 6 exactly. CORRECT ANSWER
 *      R12 = 6 ohm, and the reconversion is exact, not approximate.
 *   3. Addendum B, Method (page 239), repeated as Practice 3 (page 240). The
 *      resistance between ADJACENT nodes of an infinite square grid of equal
 *      resistors R. Printed 2R/3, from the claim that current entering at A
 *      "splits equally into the three other bonds" while AB "is special". A
 *      node of a square grid has FOUR bonds and the entering current divides
 *      among all four. Superposition: inject I at A and I/4 flows A to B;
 *      extract I at B and another I/4 flows A to B; superposed, AB carries I/2,
 *      so V_AB = IR/2 and R_AB = R/2. CORRECT ANSWER R/2.
 *   4. Addendum B, Practice 1 (page 240). X = 2 + (3 || X). Printed
 *      "X^2 - X - 6 = 0, X = 3 ohm", which is Example B.1's quadratic with new
 *      numbers dropped into it. Working: X(3 + X) = 2(3 + X) + 3X gives
 *      3X + X^2 = 6 + 5X, so X^2 - 2X - 6 = 0 and X = 1 + sqrt(7) = 3.65 ohm.
 *      (Example B.1 itself, X = 1 + (2 || X) giving X = 2 ohm, is correct.)
 *      CORRECT ANSWER 3.65 ohm.
 *   5. Addendum B, Practice 4 (page 240). Cube face diagonal. The answer 3R/4
 *      is right but one printed intermediate is not: with current in at A and
 *      out at C, the antisymmetry that maps A to C forces V_F = V_H = V/2 and
 *      V_E = 2V/3, V_G = V/3. The source prints V_F,H = V/3. Checking KCL at F
 *      settles it: with V_B = V/2, V_E = 2V/3 and V_G = V/3, the three terms
 *      are 0, +V/6 and -V/6 and sum to zero only if V_F = V/2. The final
 *      answer survives because the current calculation never uses V_F.
 *   6. Addendum C, Practice 1 (page 243). Two meshes, E1 = 8 V with R1 = 2 ohm,
 *      E2 = 2 V with R2 = 2 ohm, shared R3 = 4 ohm. Printed I1 = 1.6 A,
 *      I2 = 0.4 A. Those satisfy mesh 1 (6I1 - 4I2 = 8) but not mesh 2:
 *      -4(1.6) + 6(0.4) = -4, and the equation demands +2. Solving the pair
 *      6I1 - 4I2 = 8 and -4I1 + 6I2 = 2 gives I1 = 2.8 A, I2 = 2.2 A, shared
 *      branch 0.6 A. Power check, which the section's own Example C.1
 *      recommends: sources 8(2.8) + 2(2.2) = 26.8 W, dissipation
 *      2(2.8^2) + 2(2.2^2) + 4(0.6^2) = 15.68 + 9.68 + 1.44 = 26.8 W.
 *      CORRECT ANSWER I1 = 2.8 A, I2 = 2.2 A, shared 0.6 A.
 *   7. Addendum C, Example C.2 (page 242). Three-mesh circuit. The printed
 *      answers I1 = 1 A, I2 = 0, I3 = 0.5 A fail the example's OWN printed mesh
 *      1 equation: 10(1) - 5(0.5) = 7.5, not 10. The break is visible in the
 *      working, which "substitutes into Mesh 1" by replacing I3 with
 *      (2 I3 - I1), an expression for I2; and the printed mesh 2 equation,
 *      -5I2 + 10I3 = 5, does not follow from the loop stated one line above it
 *      (5 - 5I2 - 5(I2 - I3) = 0 gives 10I2 - 5I3 = 5). Solving the three loops
 *      as stated gives I1 = 1.75 A, I2 = 1.25 A, I3 = 1.5 A. The circuit
 *      description is itself ambiguous about which arm R2 belongs to, so this
 *      is reported as a broken solution rather than as one clean number.
 *   8. Addendum E, Method (page 246), both worked examples and Practice 1, 2
 *      and 3. THE GALVANOMETER-CURRENT FORMULA HAS THE WRONG NUMERATOR. The
 *      source prints I_g proportional to E(PR - QS). It must be E(PS - QR),
 *      because the chapter's own balance condition, derived on page 210, is
 *      P/Q = R/S, that is PS = QR, and a galvanometer current must vanish
 *      exactly at balance. The decisive case is the source's own Practice 2:
 *      P = 8, Q = 12, R = 6, S = 9 ohm has PS = 72 = QR, so the bridge is
 *      BALANCED and I_g = 0 exactly; the printed answer is -21.1 mA. Both
 *      worked examples hide the defect because they set P = Q, which makes
 *      PR - QS and PS - QR exact negatives of each other, so the magnitudes
 *      agree and only a sign that was assigned by hand differs. Checked
 *      independently on an asymmetric case, P = 2, Q = 4, R = 1, S = 3, G = 5
 *      ohm, E = 10 V: node analysis gives I_g = 0.118 A, which
 *      E(PS - QR)/[G(P+Q)(R+S) + PQ(R+S) + RS(P+Q)] = 10(2)/170 reproduces and
 *      the printed form, 10(-10)/170 = 0.588 A, misses by a factor of five. The
 *      DENOMINATOR is correct as printed. CORRECT FORMULA
 *      I_g = E(PS - QR) / [G(P+Q)(R+S) + PQ(R+S) + RS(P+Q)], positive meaning
 *      D to B. This is the only addendum result that reaches a student below,
 *      in Topic 05's `protip`, and it is quoted in the corrected form.
 *   9. Addendum E, Practice 3 (page 249) is ill-posed rather than merely wrong.
 *      A bridge is balanced, so I_g = 0; S is then raised by one percent and
 *      the question asks for "the percentage change in I_g". A percentage
 *      change from zero is undefined, and the printed answer, "approximately
 *      -1%", is meaningless. The honest statement is that I_g rises FROM zero
 *      in proportion to the imbalance, since PS - QR moves from 0 to 0.01 PS.
 *
 *   Two further addendum defects are reported as under-specified rather than
 *   wrong, because the stated data do not determine an answer: Addendum B's
 *   Example B.3 (a "3 x 3 grid of 9 resistors", which no square grid of nodes
 *   has, and which asserts both R/4 and R/2 for the same quantity in eight
 *   lines, having first claimed a grid corner has four neighbours), and
 *   Addendum C's Practice 2 and 4, whose printed workings invent a resistor the
 *   question does not mention and end in an ellipsis.
 *
 *   NONE OF THE NINE REACHES A STUDENT THROUGH THIS CHAPTER. Eight sit in
 *   material the brief excludes. The ninth, the galvanometer-current formula,
 *   is quoted once in Topic 05 in its corrected form with its own worked check.
 *
 * SOURCE DAMAGE. This range's dialect is NOT the one the Class 11 fluids
 * chapter met, and every passage below was re-authored from context rather than
 * transcribed. What pages 139 to 252 actually contain:
 *
 *   - MATHEMATICAL ALPHANUMERIC GLYPHS, PERVASIVELY, and this is the range's
 *     dominant defect: 4,244 characters in U+1D400 to U+1D7FF, which the app's
 *     faces cannot draw and scripts/validate-chapters.mjs rejects outright.
 *     The counts are led by the symbols this chapter is made of: math-italic R
 *     1088 times, I 633, E 394, r 390, V 239, n 235, P 179, l 156, plus 111
 *     each of d and S. The Greek is the same story and the brief's named
 *     exposure is real: resistivity arrives as math-italic rho (U+1D70C) 70
 *     times against exactly ONE ordinary rho (U+03C1), and relaxation time as
 *     math-italic tau 59 times against one ordinary tau. Also math-italic
 *     alpha 81, sigma 19, delta 11, eta 9, mu 8 and pi 8. Copying any run of
 *     source symbol text verbatim would have shipped blank boxes.
 *   - OHM SURVIVES CLEANLY, which is the one piece of luck. All 412 instances
 *     of the ohm sign in the range are ordinary U+03A9 GREEK CAPITAL LETTER
 *     OMEGA. Resistance in ohms and resistivity in ohm metres are therefore
 *     safe to read off the page; only the rho beside them is not.
 *   - FIVE LITERAL ESCAPE TOKENS, 76 in all, a wider family than the Class 11
 *     books logged and with a different membership. "\n7" is a MINUS SIGN (34
 *     instances: page 143's "V = E \n7 Ir", page 181's derivative
 *     "(R + r)^2 \n7 R \nA 2(R + r)"). "\nN" is the MULTIPLICATION SIGN (22:
 *     page 149's "1.6 \nN 10 -19 C", page 175's "3 \nN6/9 = 2 A"). "\nC" is
 *     the RATIO COLON (8: page 177's "R_s \nC R_p", page 185's "(A)1 \nC 1").
 *     "\nA" is the CENTRED DOT (8: page 150's "A \nA v_d dt", page 149's
 *     "m/(ne^2 tau) \nA L/A"). "\nH" is the ELLIPSIS (4, all in subtopic 03's
 *     series and parallel sums, "R_1 + R_2 + \nH + R_n"). There is NO "\nK":
 *     the degree sign does not use this family at all.
 *   - THE DEGREE SIGN ARRIVES AS U+2218 RING OPERATOR, 34 times, never as
 *     U+00B0, and never as an escape token. Every "20 degrees C" in subtopic
 *     02 and every alpha in per-degree-Celsius is affected. Every degree below
 *     is retyped as U+00B0, which the validator's own U+2218 rule wants.
 *   - COMBINING RIGHT ARROW ABOVE (U+20D7) 41 times, and it lands BEFORE the
 *     letter it decorates rather than after it, so the field vector reads as a
 *     bare arrow on its own line then "E". Forbidden in output; every vector
 *     below is a plain italic letter, with the vector nature stated in words
 *     where it matters (current density is a vector, current is not).
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances actually
 *     paraphrased below: "slow net shuffleof the whole crowd" (p.146),
 *     "current is a scalar, not a vector.We do speak of its direction" (p.147),
 *     "thinsthe wire" (p.154), "Resistivity does not change" run into
 *     "rho is a property of thematerial" (p.155), "Metal:nis fixed" and
 *     "nrisesexponentially" (p.163), "aparallel combination is always
 *     smallerthan the smallest resistor" (p.169), "the bulb with thehigher
 *     resistanceglows brighter" (p.183), "some of the cell's push is used up"
 *     run as "dropping Ir voltsinsidethe cell" (p.188), "EMFs donotadd in
 *     parallel" (p.202), "charge cannot pile up there" as "it's not a
 *     capacitor" run into "So whatever charge per second flows inmust flowout"
 *     (p.206), "the galvanometer branch can be erasedfrom the circuit"
 *     (p.214), "measure by balancing, not by deflecting" as "no current flows
 *     through the detector at all" (p.219), and "the potentiometer at balance
 *     drawszero current from the cell" (p.223). One whole practice item,
 *     subtopic 03's item 3, arrives with EVERY space gone and printed out of
 *     order on page 177 after the MCQs rather than on page 176 with items 1, 2,
 *     4 and 5: "3.[JEEMain]InSubtopic03Example3'snetworkstyle,a9Vbattery
 *     drivesa1Ohmresistorinserieswithaparallelpairof4Ohmand4Ohm." Its physics
 *     is correct (3 A total, 6 V across the parallel section, both verified)
 *     and it appears below, reset, as Topic 02's practice item 3.
 *   - NO ASCII-SHIFTED HEADING RUN (the "+29" pattern), NO OCTAL ESCAPES and NO
 *     LEAKED LATEX anywhere in pages 139 to 252. Every heading in this range
 *     extracted as readable English; the only backslashes in the entire range
 *     are the 76 escape tokens listed above. Page numbers were still read from
 *     the page foot, as instructed.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     power of ten, every dimensional formula and every subscripted current
 *     breaks into three or four lines: "1.6 \nN / 10 / -19 / C" is four lines,
 *     and "[M / 0 / L / 1 / T / -1 / A / 0]" is eight. Recomputing every
 *     worked example independently was the check that these were rebuilt right,
 *     and it is why the CORRECTIONS list above is confident.
 *
 * SIGN CONVENTION FOR KIRCHHOFF, DECLARED ONCE AND HELD. Topic 05's `def` block
 * fixes it for the whole chapter, in the source's own terms (its table on page
 * 206): TRAVERSE EVERY LOOP CLOCKWISE. A resistor crossed ALONG the assumed
 * current contributes MINUS IR; crossed AGAINST it, PLUS IR. A cell contributes
 * PLUS E when you enter at its minus terminal and leave at its plus, and MINUS
 * E the other way round, and the cell's sign depends ONLY on which terminal you
 * meet first, never on the current direction. Every worked example, practice
 * answer and MCQ in Topics 05 and 06 traverses clockwise and states it. The
 * convention earns Topic 05's first `mistakes` item and its `protip`, because
 * the source calls sign chaos "the #1 error" of the subtopic and it is the
 * chapter's single largest source of lost marks.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A (mass, length,
 * time and CURRENT, since the ampere is the SI base unit here and charge is
 * derived as [T A], not the other way round). Fifty-three lines checked,
 * fifty-three consistent, none rejected:
 *
 *   T1  I = dq/dt: [T A]/[T] = [A]. Correct, and the ampere is a base unit.
 *       I = n e A v_d: [L-3][T A][L2][L T-1] = [A]. Every geometric factor
 *       cancels, which is the content of "current is the same at every
 *       cross-section".
 *       v_d = e E tau/m: [T A][M L T-3 A-1][T]/[M] = [L T-1]. A velocity.
 *       mu = v_d/E = e tau/m: [L T-1]/[M L T-3 A-1] = [M-1 T2 A], and
 *       [T A][T]/[M] = [M-1 T2 A]. The two routes agree, which is the whole
 *       claim that mobility is drift speed per unit field.
 *       J = I/A = n e v_d: [A]/[L2] = [L-2 A]; [L-3][T A][L T-1] = [L-2 A].
 *       J = sigma E: [M-1 L-3 T3 A2][M L T-3 A-1] = [L-2 A]. Consistent, and a
 *       dropped sigma would show as [L-2 A] against [M L T-3 A-1] instantly.
 *       V = I R: [A][M L2 T-3 A-2] = [M L2 T-3 A-1], the volt.
 *       R = rho L/A: [M L3 T-3 A-2][L]/[L2] = [M L2 T-3 A-2], the ohm.
 *       rho = m/(n e2 tau): [M]/([L-3][T2 A2][T]) = [M L3 T-3 A-2]. Matching
 *       the ohm metre exactly, which is the microscopic model's payoff.
 *       sigma = 1/rho: [M-1 L-3 T3 A2], the siemens per metre.
 *       E = rho J: [M L3 T-3 A-2][L-2 A] = [M L T-3 A-1], a field. This is the
 *       chapter's best dimensional test, because the microscopic Ohm's law is
 *       the one relation a student cannot check by feel.
 *       R_T = R_0[1 + alpha(T - T0)]: alpha is [K-1] and (T - T0) is [K], so
 *       the bracket is dimensionless and R_T matches R_0.
 *       alpha = (R_T - R_0)/(R_0 (T - T0)): (ohm/ohm)/[K] = [K-1].
 *       R_static = V/I and R_dyn = dV/dI: both [M L2 T-3 A-2]. They are the
 *       same dimension and different numbers, which is exactly the point.
 *   T2  R_s = sum R_i and 1/R_p = sum 1/R_i: ohms and per-ohms, term by term.
 *       R_p = R1 R2/(R1 + R2): [ohm2]/[ohm] = [ohm].
 *       V1 = V R1/(R1 + R2) and I1 = I R2/(R1 + R2): a volt and an ampere times
 *       a dimensionless ratio. A divider can never change the dimension, which
 *       is why putting the wrong resistor on top is invisible to this check and
 *       has to be caught by the physics instead.
 *       X = R(1 + sqrt(5))/2: an ohm times a pure number.
 *   T3  P = V I: [M L2 T-3 A-1][A] = [M L2 T-3], the watt.
 *       P = I2 R: [A2][M L2 T-3 A-2] = [M L2 T-3].
 *       P = V2/R: [M2 L4 T-6 A-2]/[M L2 T-3 A-2] = [M L2 T-3]. All three faces
 *       of the power formula land on the same dimension, as they must.
 *       H = I2 R t: [M L2 T-3][T] = [M L2 T-2], the joule.
 *       1 kWh = 3.6 x 10^6 J: [M L2 T-2], an energy and not a power, which is
 *       the commonest unit error in the topic.
 *       R = V_rated2/P_rated: [M2 L4 T-6 A-2]/[M L2 T-3] = [M L2 T-3 A-2].
 *       P_load = E2 R/(R + r)2: [M2 L4 T-6 A-2][M L2 T-3 A-2]/[M2 L4 T-6 A-4]
 *       = [M L2 T-3]. The squared bracket is what makes this work; a linear one
 *       would leave an ohm behind.
 *       P_max = E2/4r: [M2 L4 T-6 A-2]/[M L2 T-3 A-2] = [M L2 T-3].
 *   T4  E = W/q: [M L2 T-2]/[T A] = [M L2 T-3 A-1], a volt. This single line is
 *       the proof that EMF is not a force: a force is [M L T-2] and nothing
 *       here can reach it.
 *       V = E - I r and V = E + I r: [M L2 T-3 A-1] minus [A][M L2 T-3 A-2],
 *       both volts, so the subtraction is legal.
 *       I = E/(R + r): [M L2 T-3 A-1]/[M L2 T-3 A-2] = [A].
 *       r = (E - V)/I: [M L2 T-3 A-1]/[A] = [M L2 T-3 A-2], an ohm.
 *       r = R(E/V - 1): an ohm times a dimensionless bracket.
 *       I_short = E/r: [A].
 *       E_eq = n E and r_eq = n r: n is a count, so a volt and an ohm.
 *       r_eq = r/n: an ohm.
 *       E_eq = (E1 r2 + E2 r1)/(r1 + r2): [V][ohm]/[ohm] = [V]. Weighting an
 *       EMF by the OTHER cell's resistance is what keeps this dimensionally
 *       clean, and swapping the subscripts would too, so this one is checked
 *       by the limiting case below instead.
 *       r_eq = r1 r2/(r1 + r2): [ohm].
 *       I = m n E/(m R + n r): [V]/[ohm] = [A], counts being dimensionless.
 *       m R = n r: ohm equals ohm, so the maximum-current condition is an
 *       equation between two resistances and not between a count and a
 *       resistance, which is the trap it protects against.
 *       I_max = n E/2R: [A].
 *   T5  sum I = 0 at a junction: [A].
 *       sum E = sum I R around a loop: [M L2 T-3 A-1] on both sides. The loop
 *       rule is an equation between VOLTS, so a term written as a power or a
 *       current is caught here at once.
 *       P/Q = R/S: dimensionless on both sides. The balance condition survives
 *       any change of unit, which is why a bridge needs no calibration.
 *       independent loops = b - n + 1: a pure count.
 *   T6  R/X = l/(100 - l): ohm over ohm equals centimetre over centimetre, both
 *       dimensionless. The resistance per unit length cancels, which is the
 *       whole reason a meter bridge only needs a UNIFORM wire and not a wire of
 *       any particular material.
 *       X = R(100 - l)/l: [ohm].
 *       k = V/L = I R_wire/L: [M L2 T-3 A-1]/[L] = [M L T-3 A-1]. Identical to
 *       an electric field, in volts per metre, which is what a uniform
 *       potential ramp is.
 *       V_l = k l: [M L T-3 A-1][L] = [M L2 T-3 A-1], a volt.
 *       E1/E2 = l1/l2: dimensionless both sides, so the gradient cancels and
 *       the comparison never needs a calibrated instrument.
 *       r = R(l1 - l2)/l2: [ohm] times a length ratio.
 *       E1 + E2 = k l_s and E1 - E2 = k l_d: volts.
 *       I_g = E(PS - QR)/[G(P+Q)(R+S) + PQ(R+S) + RS(P+Q)] (corrected, see
 *       CORRECTIONS 8): [V][ohm2]/[ohm3] = [V]/[ohm] = [A]. Both the printed
 *       numerator and the correct one pass this check, which is exactly why the
 *       error survived into print and had to be caught by the balance case
 *       instead.
 *
 * PHYSICAL PLAUSIBILITY, checked on every number below.
 *   - DRIFT VELOCITY IS OF ORDER 10^-4 m/s and this chapter says so out loud
 *     rather than leaving it as a number, because every student expects it to
 *     be fast. Topic 01's worked example lands on 1.5 x 10^-4 m/s in a copper
 *     wire carrying 3.0 A, its MCQ makes the order of magnitude the whole
 *     question, and its `protip` makes v_d about 10^-4 m/s and tau about
 *     10^-14 s a standing order-of-magnitude check.
 *   - RESISTANCE IN SERIES ALWAYS EXCEEDS THE LARGEST MEMBER, AND IN PARALLEL
 *     ALWAYS FALLS BELOW THE SMALLEST. Free, and applied to every network
 *     answer in the chapter: 2, 3 and 6 ohm give 11 ohm in series (above 6) and
 *     1 ohm in parallel (below 2); 6 || 3 = 2 ohm (below 3); the balanced
 *     bridge reduces to 30 || 45 = 18 ohm (below 30); the infinite ladder gives
 *     1.618 R, above the single series R it starts with. It is the closing step
 *     of Topic 02's `proc` and one of its `mistakes` items.
 *   - EVERY POWER DISSIPATED IS POSITIVE and every power balance closes: Topic
 *     03's maximum-power example splits 36 W into 18 W and 18 W; Topic 05's
 *     example matches 23 W of source power against 23 W of I2R exactly, and
 *     that match is made the topic's `protip`.
 *   - EVERY RESISTIVITY IS REAL: copper 1.7 x 10^-8, aluminium 2.8 x 10^-8 ohm
 *     m, conductors 10^-8 to 10^-6, semiconductors 10^-5 to 10^0, insulators
 *     10^8 to 10^16 ohm m. Every alpha for a metal is positive and of order
 *     10^-3 per kelvin. Copper's free-electron density is 8.5 x 10^28 per cubic
 *     metre throughout, and relaxation times come out near 10^-14 s.
 *   - NO SPEED ANYWHERE APPROACHES c = 3 x 10^8 m/s, and the one place c
 *     appears is Topic 01's MCQ, where it is the WRONG answer offered to a
 *     student who confuses the signal with the carriers.
 *
 * LIMITING CASES, used where they teach rather than as decoration.
 *   - TWO EQUAL RESISTANCES IN PARALLEL give R/2, half of either, which is the
 *     fastest sanity check in Topic 02 and the reason "parallel is always less
 *     than the least" is one of its memory aids. Extended: n equal resistors
 *     give R/n and the ratio of the series to the parallel value is exactly
 *     n^2, which Topic 02's own MCQ tests and its Example 2 uses as a check.
 *   - INTERNAL RESISTANCE GOING TO ZERO collapses V = E - I r to V = E, the
 *     ideal cell, and sends the short-circuit current E/r to infinity, which is
 *     why a real cell is safe and an ideal one is a fiction. Topic 04 makes
 *     that pair of limits the definition of an ideal source, and its practice
 *     item 3 is a real cell that turns out to have r = 0 exactly, so the
 *     student meets the limit as an answer rather than as an aside.
 *   - AT MAXIMUM POWER TRANSFER, R = r, the efficiency is exactly 50 percent
 *     and NOT 100. Topic 03 derives both and its MCQ traps the student who
 *     believes matching is efficient.
 *   - THE FRUSTUM'S RESISTANCE, rho L/(pi a b), COLLAPSES TO rho L/(pi a^2) AS
 *     b tends to a, recovering R = rho L/A for a cylinder. Topic 01's hardest
 *     example closes on exactly that check, and the geometric mean ab in the
 *     denominator rather than an average is the thing worth noticing.
 *   - A BALANCED BRIDGE IS THE LIMIT OF AN UNBALANCED ONE. Topic 05 states the
 *     bracket the equivalent resistance must lie in for ANY galvanometer
 *     resistance, between the shorted and the open values, and Topic 06's
 *     protip uses that bracket as a free check. It is also what catches source
 *     error 1 above.
 *
 * SEAMS: what is quoted as already known, and from which file.
 *   - phy-11-11-thermodynamics.ts (Class 11, Thermodynamics): the first law and
 *     energy conservation as a bookkeeping identity. Topic 05's loop rule is
 *     introduced below as that same statement in circuit clothing and is not
 *     re-argued from scratch, and Topic 03's power balance is quoted as an
 *     energy audit rather than proved.
 *   - phy-11-09-mech-fluids.ts, Topic 04 (the equation of continuity, A1 v1 =
 *     A2 v2, and "in the steady state nothing piles up"): quoted directly in
 *     Topic 01's argument that the current is the same at every cross-section
 *     of a tapering conductor, and again in Topic 05's junction rule. The
 *     fluids chapter proves the steady-state no-accumulation argument once and
 *     this chapter uses it twice without reproving it. It is also the source's
 *     own analogy, page 156's "current density crowds where the conductor is
 *     thin, exactly like river water speeding up through a narrow gorge".
 *   - phy-11-09-mech-fluids.ts, Topic 05 (Poiseuille's law and the series and
 *     parallel combination of fluid resistances): named in Topic 02's protip,
 *     because pipes in series and in parallel obey the same two rules as
 *     resistors and a student who has met one has met both.
 *   - math-11-12-limits.ts, Topic 01 (the derivative as the limit of a
 *     difference quotient): quoted in Topic 01's definition of instantaneous
 *     current as dq/dt and of dynamic resistance as dV/dI, and in Topic 03's
 *     maximisation of the load power, neither of which is re-proved.
 *   - math-12-07-integrals.ts (integration as the reverse of differentiation):
 *     Topic 01's frustum example integrates rho dx/(pi r(x)^2) with a linear
 *     substitution and does not re-introduce the idea. Checked that the Class
 *     12 Integrals chapter exists and is registered, so a student meeting this
 *     has the tool.
 *   - math-11-08-sequences.ts, Topic 04 (the AM-GM inequality and its equality
 *     case, where that chapter's own "AM-GM as an optimisation engine" formula
 *     card lives): Topic 04's
 *     mixed-grouping optimisation minimises mR + nr at fixed product mnRr by
 *     naming AM-GM rather than differentiating, which is the source's own
 *     argument on page 199 and one line shorter than calculus.
 *   - NOT quoted, because it is not written yet: capacitance. The source's
 *     Topic 05 limiting-conditions paragraph notes that the junction rule holds
 *     in the steady state and that a charging capacitor accumulates charge.
 *     Topic 05 below states the steady-state restriction in words and leaves
 *     the capacitor branch to Chapter 2, rather than half-teaching a q/C term
 *     this chapter has no tools for.
 *
 * NINETEEN FIGURES NAMED, NINETEEN DRAWN, PLUS ONE DESIGNED. The source names
 * Figures 3.1 to 3.19, the most of any chapter surveyed, and every one is here:
 * 3.1 to 3.8 in Topic 01, 3.9 to 3.11 in Topic 02, 3.12 in Topic 03, 3.13 to
 * 3.15 in Topic 04, 3.16 to 3.18 in Topic 05, 3.19 in Topic 06. The designed
 * twentieth is the potentiometer circuit in Topic 06: the source devotes four
 * sections and two derivations to the instrument and names no figure for it,
 * which is plainly an omission rather than a decision. Sixteen `diagram` blocks
 * carry the twenty figures, because THE PANEL RULE applies four times and the
 * source's own "two panels" briefs are two CHIPS here, never two panels inside
 * one 316pt frame: Figure 3.2 (field off, then field on), Figure 3.8 (a metal,
 * then a semiconductor), Figures 3.9 and 3.10 (series, then parallel: the
 * canonical case), and Figure 3.16 (the junction, then the loop as altitude).
 * Figure 3.17 is two chips for the other reason the brief names, a bridge
 * before and after balancing. Figures 3.4, 3.5 and 3.6 are one three-chip block
 * because they are one idea, the three ways Ohm's law fails, and the source
 * prints all three on one page. Every V-I and rho-T plot carries axisX, axisY
 * and ticks, because a characteristic curve without axis units is just a line.
 *
 * THE `circuit` FIGURE KIND, FIRST REAL USE. Nine of the twenty figures are
 * `circuit` frames. They exercise five of its eleven part kinds (R, cell,
 * battery, V and G) plus all four of its other fields (grid, wires, junction
 * nodes and current arrows); C, L, lamp, switch, A and diode are simply not
 * what this chapter draws. It held up: a series
 * chain, three parallel branches, an infinite ladder, a cell with its internal
 * resistance, an m-by-n cell array, a two-source network, a diamond bridge with
 * a galvanometer across one diagonal, a meter bridge with a jockey on a
 * hundred-centimetre wire, and a potentiometer with primary and secondary loops
 * all came out of the grid netlist without an author computing a pixel.
 * Diagonal parts work, which the diamond bridge needs. Two placement facts the
 * kind does not document and this chapter had to work out: a part's label sits
 * 14px ABOVE the midpoint when the part is more horizontal than vertical and
 * 14px to the RIGHT when it is more vertical, so a vertical part near the right
 * edge of the grid pushes its label off the canvas unless it is inset; and a
 * node label sits up and to the LEFT of its dot, so two nodes on the same
 * horizontal rail must be more than about six grid units apart or their labels
 * collide. Both are held to below. One measured caution: the grid maps to
 * pixels with SEPARATE x and y scales, so a "diamond" bridge is only a diamond
 * when the aspect ratio is set to make the two scales equal, which is
 * height = 44 + gh x (308 - 44)/gw.
 *
 * FIGURE VOCABULARY REQUESTED. Two things this chapter genuinely needed and
 * could not express, both approximated in the caption rather than drawn wrongly:
 *   - A DASHED ENCLOSURE AROUND A SUB-CIRCUIT. The source's Figure 3.13 is
 *     "inside a dashed box labelled cell: an EMF source E in series with an
 *     internal resistor r", and the box IS the physics: it is what makes the
 *     two things one component with two terminals. `FigureCircuit` has no
 *     boundary primitive, so Topic 04's figure draws the cell and r on one
 *     branch and the caption has to say they are inside the battery. A
 *     `regions?: { from: [number, number]; to: [number, number]; label?:
 *     string; dash?: boolean }[]` on FigureCircuit would draw it.
 *   - FREE TEXT AND DIMENSION MARKS IN CIRCUIT SPACE. A meter bridge needs "l"
 *     and "100 - l" under two stretches of wire and a potentiometer needs the
 *     balancing length marked; there is no `labels` or `arrows` field on
 *     FigureCircuit, only labels attached to parts, nodes and currents. Both
 *     figures below smuggle the lengths in as labels on label-only nodes, which
 *     works but places them up and to the left of a point rather than under a
 *     span. A `labels?: { at: [number, number]; text: string }[]`, or dimension
 *     arrows, would be the honest fix.
 *   Nothing else was missing. `plot` covered every characteristic curve,
 *   including the S-shaped negative-resistance curve, which is not a function
 *   of V and which `{ c: 'pts' }` draws because a point list may double back.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12CurrentElectricity: Chapter = {
  "chapter": "03",
  "title": "Current Electricity",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Current, Drift Velocity and What Resistance Really Is",
      "chip": "01 FLOW",
      "kalam": "the carriers crawl, the signal sprints",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Current, Drift Velocity and Resistivity</b><br>The conceptual foundation of the entire chapter. CBSE Boards love the drift-velocity derivation of Ohm's law, a near-guaranteed 2 to 3 mark derivation, plus 1-mark definitions of current density and mobility, and they regularly ask for the resistor colour code and the temperature-dependence graphs of metals against semiconductors. JEE Main reliably sets one or two numericals on <i>v</i><sub>d</sub>, relaxation time, <i>R</i> = ρ<i>L</i>/<i>A</i> under stretching, and on <i>R</i>(<i>T</i>) and α. NEET favours conceptual traps on the scalar-versus-vector nature of current, the order of magnitude of drift speed, and which material carries a negative α. JEE Advanced builds non-uniform-conductor and multi-carrier problems on this base and links zero-temperature-coefficient combinations.<br><br><b>02 · Combination of Resistors</b><br>Bread-and-butter of the chapter, and the single most tested skill across all four exams: simplify the network correctly, then apply Ohm's law. CBSE Boards ask for the series and parallel derivations, 2 to 3 marks, and simple reductions. JEE Main sets at least one network-reduction or divider numerical every cycle. JEE Advanced builds infinite ladders, symmetric networks and cubes on this foundation. NEET tests quick maximum and minimum equivalent-resistance recognition.<br><br><b>03 · Electrical Energy and Power</b><br>Very high yield and application-rich. CBSE Boards ask for the power formulas, Joule's law of heating and the commercial unit of energy, 2 to 3 marks, usually with a billing numerical. JEE Main reliably sets bulb-rating and power-dissipation problems. JEE Advanced uses the maximum-power-transfer theorem and series-parallel brightness comparisons. NEET favours quick \"which bulb is brighter\" conceptuals.<br><br><b>04 · Real Cells: EMF, Internal Resistance and Grouping</b><br>Two source subtopics, one idea: a real battery fights itself. CBSE Boards ask for the definitions of EMF and internal resistance, the relation <i>V</i> = <i>E</i> − <i>Ir</i>, and the equivalent EMF and internal resistance of series and parallel combinations, 2 to 3 marks each. JEE Main sets numericals finding <i>E</i> and <i>r</i> from load measurements and on the two-different-cells parallel formula. JEE Advanced explores charging cells, power to the load, and the mixed-grouping optimisation. NEET loves \"why is terminal voltage less than EMF\", short-circuit current, and when to group cells in series against in parallel.<br><br><b>05 · Kirchhoff's Laws and Electrical Networks</b><br>One of the most heavily examined subtopics in the whole chapter. CBSE Boards ask for the statements of both rules with their underlying conservation principles, 2 marks, and the full Wheatstone bridge balance derivation, 3 marks, almost every year. JEE Main reliably sets one multi-loop network numerical. JEE Advanced builds unbalanced-bridge and symmetry problems. NEET favours quick balanced-bridge recognition and junction-rule conceptuals.<br><br><b>06 · Measuring by Balancing: Meter Bridge and Potentiometer</b><br>A perennial favourite that closes the chapter. CBSE Boards regularly ask for the meter-bridge and potentiometer principles plus the internal-resistance derivation, 3 to 5 marks in total. JEE Main sets numericals on balance length and potential gradient every cycle. JEE Advanced loves the sum-and-difference method and balance-point shifts. NEET reliably tests \"why a potentiometer beats a voltmeter\" and meter-bridge sensitivity as one-liners."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 3.1 · THE WHOLE CHAPTER, IN ORDER",
          "chips": ["what flows, what resists, what drives, what measures"],
          "captions": [
            "The chapter has one storyline and the six topics run along it. 01 defines the flow and explains from the free-electron model why resistance exists at all. 02 asks what a given wire's resistance depends on. 03 collapses many resistors into one. 04 is where resistance does something useful, and 05 brings in the real battery that fights itself and shows how to group several of them. 06 and 07 are the general toolkit for circuits too tangled for series and parallel tricks, and the measuring instruments built on it. The two amber boxes are where most of the marks are: simplifying a network correctly, and applying Kirchhoff when you cannot."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "01\ncurrent" },
                  { "id": "b", "col": 1, "row": 0, "text": "02\nresistivity" },
                  { "id": "c", "col": 2, "row": 0, "text": "03\ncombining", "tone": "amber" },
                  { "id": "d", "col": 3, "row": 0, "text": "04\npower" },
                  { "id": "e", "col": 0, "row": 1, "text": "05\nreal cells" },
                  { "id": "f", "col": 1, "row": 1, "text": "06\ngrouping" },
                  { "id": "g", "col": 2, "row": 1, "text": "07\nKirchhoff", "tone": "amber" },
                  { "id": "h", "col": 3, "row": 1, "text": "08\nmeasuring" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "b", "to": "c" },
                  { "from": "c", "to": "d" },
                  { "from": "d", "to": "e", "dash": true },
                  { "from": "e", "to": "f" },
                  { "from": "f", "to": "g" },
                  { "from": "g", "to": "h" }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Picture Old Delhi railway station on a festival morning. Thousands of people are milling about the concourse, pushing towards the chai stall, drifting back, weaving sideways, going nowhere in particular. Then the Rajdhani is announced on Platform 3. Suddenly, on top of all that random jostling, there is a <b>slow net shuffle</b> of the whole crowd towards the platform. Individuals still bump and zig-zag; the crowd as a whole creeps forward.<br><br>That slow net shuffle, riding on top of furious random motion, is exactly what electric current is at the level of electrons. Inside a metal the outermost electrons of each atom are tied to no single nucleus. They form a sea of <b>free electrons</b> that zip about at around 10<sup>5</sup> m/s at room temperature, but completely randomly, so averaged over the whole wire they go nowhere: as much charge crosses any section leftward as rightward and the net current is zero. Connect a cell and you set up an electric field <i>E</i> inside the wire. That field pushes every electron with a force of magnitude <i>eE</i>, directed opposite to <i>E</i> because the electron's charge is negative. The random storm does not stop. A gentle, persistent bias is now superimposed on it, and the electrons pick up a tiny average velocity against the field. That sluggish average is the <b>drift velocity</b>, <i>v</i><sub>d</sub>."
        },
        {
          "t": "think",
          "html": "the shocking part is how sluggish. in an ordinary copper wire carrying a few amperes the drift speed is about 10<sup>−4</sup> m/s, slower than a snail, a fraction of a millimetre per second. so why does a tubelight glow the instant you flip the switch, even with metres of wire in between? because you are not waiting for one electron to walk from the switch to the bulb. the field is established along the whole wire at nearly the speed of light, and every electron, including the ones already sitting inside the filament, starts drifting almost at once. it is a pipe already full of water: open the tap and water gushes from the far end immediately, even though any one molecule moves slowly. the signal is fast, the carriers are slow."
        },
        {
          "t": "p",
          "html": "Now make it precise. <b>Electric current</b> is the rate at which charge crosses a section: <i>I</i> = <i>q</i>/<i>t</i> for a steady flow, and <i>I</i> = <i>dq</i>/<i>dt</i> at an instant, the same derivative you met as the limit of a difference quotient in Limits and Derivatives.<br><br>Here is an exam favourite that costs marks every year. <b>Current is a scalar, not a vector.</b> We do speak of its direction, the conventional current, taken as the direction a positive charge would move, which is opposite to the actual electron drift. But it does not add like a vector. At a wire junction, currents combine by simple algebraic addition along the wires, never by the parallelogram law, and no single vector could describe the current along a bent wire. What <i>is</i> a genuine vector is the <b>current density</b> <i>J</i> = <i>I</i>/<i>A</i>, which points along the conventional current and lives at a point rather than in a wire. Current is a scalar, current density is a vector, and that one sentence is among the most tested in the chapter."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.2 · WHAT THE FIELD ACTUALLY CHANGES",
          "chips": ["field off", "field on"],
          "captions": [
            "No field. Each electron rattles between collisions at about 10⁵ m/s along a tangled path, and the paths point every way at once. Average them over the whole wire and the net displacement is zero: as much charge crosses any section leftward as rightward, so the current is zero even though every carrier is moving fast.",
            "Field on. The storm does not stop and the paths look almost the same, which is the point of drawing them twice. Every path is now tilted slightly against E, so the average is no longer zero. That small leftward bias is the drift velocity, of order 10⁻⁴ m/s, and the conventional current I points the other way, along E, because the carriers are negative."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.6,
              "polys": [
                { "pts": [[0.6, 4.8], [9.4, 4.8]], "tone": "ink" },
                { "pts": [[0.6, 1.2], [9.4, 1.2]], "tone": "ink" },
                { "pts": [[1.6, 2.2], [2.4, 3.5], [1.8, 4.2], [2.9, 3.2], [2.1, 2.5]], "tone": "soft" },
                { "pts": [[4.2, 4.2], [5.1, 3.0], [4.4, 2.2], [5.4, 2.9], [4.6, 3.9]], "tone": "soft" },
                { "pts": [[6.8, 2.4], [7.7, 3.7], [7.0, 4.3], [8.0, 3.3], [7.2, 2.6]], "tone": "soft" }
              ],
              "marks": [
                { "x": 1.6, "y": 2.2, "glyph": "dot", "tone": "ink" },
                { "x": 4.2, "y": 4.2, "glyph": "dot", "tone": "ink" },
                { "x": 6.8, "y": 2.4, "glyph": "dot", "tone": "ink" }
              ],
              "labels": [{ "x": 5, "y": 5.5, "text": "net drift zero" }]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.6,
              "polys": [
                { "pts": [[0.6, 4.8], [9.4, 4.8]], "tone": "ink" },
                { "pts": [[0.6, 1.2], [9.4, 1.2]], "tone": "ink" },
                { "pts": [[2.6, 2.2], [2.2, 3.5], [1.4, 4.2], [2.1, 3.2], [1.2, 2.5]], "tone": "soft" },
                { "pts": [[5.2, 4.2], [4.7, 3.0], [3.8, 2.2], [4.6, 2.9], [3.6, 3.9]], "tone": "soft" },
                { "pts": [[7.8, 2.4], [7.3, 3.7], [6.5, 4.3], [7.2, 3.3], [6.2, 2.6]], "tone": "soft" }
              ],
              "marks": [
                { "x": 2.6, "y": 2.2, "glyph": "dot", "tone": "ink" },
                { "x": 5.2, "y": 4.2, "glyph": "dot", "tone": "ink" },
                { "x": 7.8, "y": 2.4, "glyph": "dot", "tone": "ink" }
              ],
              "arrows": [
                { "from": [3.2, 5.5], "to": [6.8, 5.5], "tone": "amber", "label": "E", "at": "start" },
                { "from": [3.2, 0.5], "to": [6.8, 0.5], "tone": "amber", "label": "I", "at": "start" }
              ],
              "labels": [{ "x": 7.7, "y": 5.4, "text": "electrons drift left" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The quantities of conduction",
          "rows": [
            { "k": "Current", "v": "<i>I</i> = <i>dq</i>/<i>dt</i>, a SCALAR. SI unit ampere (A) = 1 C s<sup>−1</sup>, an SI base unit. Dimensions [A]" },
            { "k": "Current density", "v": "<i>J</i> = <i>I</i>/<i>A</i>, a VECTOR along the conventional current. Unit A m<sup>−2</sup>, dimensions [L<sup>−2</sup> A]" },
            { "k": "Drift velocity", "v": "<i>v</i><sub>d</sub>, the average velocity the field adds on top of the random motion. Unit m/s, typically 10<sup>−4</sup> m/s" },
            { "k": "Relaxation time", "v": "τ, the average time between collisions with the lattice. Unit s, typically 10<sup>−14</sup> s in a metal" },
            { "k": "Mobility", "v": "μ = |<i>v</i><sub>d</sub>|/<i>E</i>, drift speed per unit field. Unit m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>, dimensions [M<sup>−1</sup> T<sup>2</sup> A]" },
            { "k": "Constants used here", "v": "<i>e</i> = 1.6 × 10<sup>−19</sup> C · electron mass 9.11 × 10<sup>−31</sup> kg · <i>n</i> for copper ≈ 8.5 × 10<sup>28</sup> m<sup>−3</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CURRENT FROM THE CARRIERS",
          "tag": "the bridge from microscopic to measurable",
          "main": "<i>I</i> = <i>dq</i>/<i>dt</i> = <i>neAv</i><sub>d</sub><br><i>J</i> = <i>I</i>/<i>A</i> = <i>nev</i><sub>d</sub> = σ<i>E</i>",
          "legend": [
            "<i>n</i> = free-electron number density (m<sup>−3</sup>), <i>e</i> = 1.6 × 10<sup>−19</sup> C, <i>A</i> = cross-sectional area (m<sup>2</sup>)",
            "<i>v</i><sub>d</sub> = drift speed (m/s), <i>I</i> = current (A), <i>J</i> = current density (A m<sup>−2</sup>), <i>q</i> = charge (C), <i>t</i> = time (s)",
            "σ = conductivity (S m<sup>−1</sup>), <i>E</i> = electric field inside the conductor (V/m); <i>J</i> = σ<i>E</i> is Ohm's law written at a point"
          ],
          "note": "Assumes one kind of carrier with uniform density across the section. Electrolytes carry current by ions of both signs and semiconductors by electrons and holes, so both need a second term; JEE Advanced problems love to break exactly this assumption."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DRIFT VELOCITY AND MOBILITY",
          "main": "<i>v</i><sub>d</sub> = <i>eE</i>τ/<i>m</i>  and  μ = |<i>v</i><sub>d</sub>|/<i>E</i> = <i>e</i>τ/<i>m</i>",
          "legend": [
            "τ = relaxation time, the mean interval between collisions (s); <i>m</i> = electron mass, 9.11 × 10<sup>−31</sup> kg",
            "<i>E</i> = field inside the conductor (V/m); for a uniform wire of length <i>L</i> across potential difference <i>V</i>, <i>E</i> = <i>V</i>/<i>L</i>",
            "μ = mobility (m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>); <i>v</i><sub>d</sub> in m/s, and for copper it comes out near 10<sup>−4</sup> m/s at ordinary currents"
          ],
          "note": "Every collision wipes out the velocity gained from the field, so an electron can only build up drift over the short interval τ and never indefinitely. That single sentence is why the drift speed is a constant and not an acceleration."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · DRIFT VELOCITY TO OHM'S LAW, TAP A LINE",
          "steps": [
            {
              "eq": "with no field the electron velocities average to zero. Switch on <i>E</i>: each electron feels a force of size <i>eE</i> against the field, so its acceleration is <i>a</i> = <i>eE</i>/<i>m</i>",
              "why": "The free-electron model, due to Drude, treats the electrons as a classical gas that accelerates between collisions and is randomised at each one. Nothing about the wire's shape has been used yet."
            },
            {
              "eq": "a collision randomises the motion, so the drift built up is the acceleration acting over the mean free interval τ: <i>v</i><sub>d</sub> = <i>a</i>τ = <i>eE</i>τ/<i>m</i>",
              "why": "This is the step that makes resistance exist. If collisions stopped, τ would be infinite, the drift would grow without limit and a metal would carry unbounded current from any field at all."
            },
            {
              "eq": "in time <i>dt</i> every electron in a slice of length <i>v</i><sub>d</sub><i>dt</i> crosses the far face. That slice holds <i>n</i>(<i>Av</i><sub>d</sub><i>dt</i>) electrons, so <i>dq</i> = <i>neAv</i><sub>d</sub><i>dt</i> and <i>I</i> = <i>neAv</i><sub>d</sub>",
              "why": "Pure counting: number density times volume times the charge each carries. Dividing by the area gives the current density <i>J</i> = <i>nev</i><sub>d</sub>, which is the same statement freed of the wire's thickness."
            },
            {
              "eq": "substitute the drift velocity: <i>I</i> = <i>neA</i>(<i>eE</i>τ/<i>m</i>) = (<i>ne</i><sup>2</sup>τ/<i>m</i>)<i>AE</i>, and put <i>E</i> = <i>V</i>/<i>L</i>",
              "why": "The field inside a uniform conductor of length <i>L</i> carrying a potential difference <i>V</i> is simply <i>V</i>/<i>L</i>. Everything on the right is now either a material constant or a measurement you can make with a meter."
            },
            {
              "eq": "<i>V</i> = <i>I</i>(<i>m</i>/<i>ne</i><sup>2</sup>τ)(<i>L</i>/<i>A</i>), so comparing with <i>V</i> = <i>IR</i>: <i>R</i> = ρ<i>L</i>/<i>A</i> with ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ",
              "why": "Ohm's law falls out, and so does what resistivity IS. Notice what the derivation actually proves: <i>V</i> is proportional to <i>I</i> only because <i>n</i>, <i>e</i>, <i>m</i> and τ are constants of the material at a fixed temperature. Heat the wire, τ drops, ρ rises, and the straight line bends. That is precisely why a tungsten filament is non-ohmic."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.3 · THE SLICE THAT COUNTS THE CHARGE",
          "chips": ["one drift-length of conductor"],
          "captions": [
            "The counting argument behind I = neAv_d, drawn. In a time dt every free electron drifts a distance v_d dt, so exactly the electrons inside the shaded slice, and no others, cross the right-hand face in that time. The slice has volume A times v_d dt, so it holds n A v_d dt electrons carrying a total charge of e times that, and dividing by dt gives the current. Nothing in the argument mentions the shape of the wire, which is why the same formula holds for a tapering conductor."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.6,
              "polys": [
                { "pts": [[1.2, 1.6], [8.8, 1.6], [8.8, 4.4], [1.2, 4.4]], "close": true, "tone": "ink" },
                { "pts": [[7.4, 1.6], [8.8, 1.6], [8.8, 4.4], [7.4, 4.4]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "arrows": [
                { "from": [5.2, 3.0], "to": [7.2, 3.0], "tone": "ink", "label": "drift", "at": "above" },
                { "from": [7.4, 1.0], "to": [8.8, 1.0], "head": "both", "tone": "amber", "label": "vd dt", "at": "below" },
                { "from": [0.6, 1.6], "to": [0.6, 4.4], "head": "both", "tone": "ink", "label": "A", "at": "mid" }
              ],
              "labels": [{ "x": 4.2, "y": 5.2, "text": "volume = A vd dt" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · RESISTANCE, RESISTIVITY, CONDUCTIVITY",
          "tag": "one is about the object, one about the material",
          "main": "<i>R</i> = ρ<i>L</i>/<i>A</i>,  ρ = 1/σ = <i>m</i>/<i>ne</i><sup>2</sup>τ<br><i>V</i> = <i>IR</i> (macroscopic)  ⟺  <i>E</i> = ρ<i>J</i> (at a point)",
          "legend": [
            "<i>R</i> = resistance, SI unit ohm (Ω) = V A<sup>−1</sup>, dimensions [M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]",
            "ρ = RESISTIVITY, SI unit Ω m, dimensions [M L<sup>3</sup> T<sup>−3</sup> A<sup>−2</sup>]. A material property, independent of size and shape",
            "σ = conductivity, SI unit S m<sup>−1</sup> (siemens per metre, also Ω<sup>−1</sup> m<sup>−1</sup>); <i>L</i> = length (m), <i>A</i> = cross-section (m<sup>2</sup>), <i>n</i> = carrier density (m<sup>−3</sup>), τ = relaxation time (s), <i>m</i> = electron mass (kg)"
          ],
          "note": "Ω against Ω m is worth a mark on its own. Resistance belongs to a particular piece of wire and changes when you stretch it; resistivity belongs to copper and does not. Stretch, recast or cut a wire and R changes while rho stays exactly where it was."
        },
        {
          "t": "p",
          "html": "Ohm's law is a useful approximation, not a law of nature like conservation of charge. It holds cleanly only for metallic conductors at constant temperature and modest fields, and real devices break it in three textbook-classic ways that CBSE asks for by name, usually with the <i>V</i> to <i>I</i> graph attached.<br><br><b>One, <i>V</i> is not proportional to <i>I</i>.</b> The graph is a curve, not a straight line, so resistance is no longer one number. The classic case is a metal whose temperature changes with the current: in a tungsten filament lamp, as <i>I</i> rises the filament heats, τ falls, ρ rises and the graph bends. <b>Two, the relation depends on the sign of <i>V</i>.</b> Reversing the applied voltage does not simply reverse the current; the size of <i>I</i> for +<i>V</i> differs from its size for −<i>V</i>. A semiconductor diode is the standard example, conducting freely in forward bias and almost blocking in reverse. <b>Three, the relation is not unique.</b> For some materials, gallium arsenide among them, the curve bends back on itself so that one voltage corresponds to several currents, and in the middle stretch <i>dV</i>/<i>dI</i> is negative: the current rises while the voltage falls."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.4 TO 3.6 · THE THREE WAYS OHM'S LAW FAILS",
          "chips": ["ohmic and filament", "diode", "negative resistance"],
          "captions": [
            "A metal at constant temperature gives a straight line through the origin, and its slope IS 1/R. A filament does not: as the current rises the wire heats, tau falls, rho rises, and the curve bends away from the line towards the V axis. Same axes, same device family, and the only difference is that one of them is allowed to get hot.",
            "The diode. In forward bias almost nothing happens until a small threshold, then the current climbs very steeply. In reverse bias the current is tiny and nearly flat. The magnitude of I for +V is nothing like the magnitude for −V, so no single R can describe it: reversing the voltage does not reverse the current.",
            "The S-shaped characteristic of a material like gallium arsenide, and the only one of the three that is not even a function of V. Read up the dashed line: one voltage, three different currents. Along the middle stretch the curve leans backwards, so dV/dI is negative, and that is what a negative-resistance region means. Note that the STATIC resistance V/I stays positive throughout; it is the local slope that goes negative."
          ],
          "frames": [
            {
              "x": [0, 6], "y": [0, 6], "aspect": 0.72,
              "axisX": "V (volt)", "axisY": "I (ampere)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "line", "m": 0.9, "k": 0 },
                { "c": "pts", "pts": [[0, 0], [1, 0.8], [2, 1.45], [3, 1.95], [4, 2.3], [5, 2.55], [6, 2.7]], "smooth": true, "dash": true }
              ],
              "labels": [
                { "x": 3.7, "y": 4.6, "text": "ohmic: slope 1/R" },
                { "x": 4.6, "y": 1.5, "text": "filament" }
              ]
            },
            {
              "x": [-4, 4], "y": [-1.5, 4], "aspect": 0.72, "axes": "cross",
              "axisX": "V (volt)", "axisY": "I (mA)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "pts", "pts": [[-4, -0.14], [-2.5, -0.11], [-1, -0.07], [-0.3, -0.03], [0, 0], [0.35, 0.05], [0.6, 0.25], [0.85, 0.9], [1.1, 2.2], [1.3, 3.6]], "smooth": true }
              ],
              "labels": [
                { "x": 2.5, "y": 2.6, "text": "forward" },
                { "x": -2.2, "y": 1.0, "text": "reverse: nearly 0" }
              ]
            },
            {
              "x": [0, 6], "y": [0, 5], "aspect": 0.72,
              "axisX": "V (volt)", "axisY": "I (mA)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "pts", "pts": [[0.4, 0.2], [1.6, 0.75], [2.9, 1.35], [3.4, 1.75], [2.6, 2.35], [1.8, 2.9], [2.1, 3.4], [3.2, 3.9], [4.6, 4.3]], "smooth": true },
                { "c": "vline", "x": 2.6, "dash": true, "soft": true }
              ],
              "labels": [
                { "x": 4.7, "y": 1.1, "text": "one V, three I" },
                { "x": 1.4, "y": 4.2, "text": "dV/dI < 0 here" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Ohmic and non-ohmic, static and dynamic",
          "html": "A device is <b>OHMIC</b> if it obeys <i>V</i> = <i>IR</i> with a constant <i>R</i>, which draws a straight line through the origin. Everything else is <b>NON-OHMIC</b>: diode, transistor, thermistor, electrolyte, gas discharge, filament lamp. For a non-ohmic device two different resistances are in play and JEE likes the distinction. The <b>static resistance</b> <i>R</i><sub>static</sub> = <i>V</i>/<i>I</i> is the slope of the line from the ORIGIN to the working point. The <b>dynamic resistance</b> <i>R</i><sub>dyn</sub> = <i>dV</i>/<i>dI</i> is the LOCAL slope of the curve there. For an ohmic resistor the two are equal and that is the whole content of being ohmic. In a negative-resistance region <i>R</i><sub>dyn</sub> is negative while <i>R</i><sub>static</sub> stays positive, which is not a contradiction: one is a ratio and the other is a rate of change."
        },
        {
          "t": "p",
          "html": "Why does a copper wire carry current almost effortlessly while the rubber around it blocks it completely? Both are made of atoms. The difference is <b>how many carriers are free to move</b> and <b>how easily they move</b>, and the derivation above has already told you where to look: ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ falls when there are many free electrons and when they travel a long time between collisions. Materials differ wildly in both, and that single fact spreads their resistivities across an astonishing <b>twenty-four orders of magnitude</b>, from about 10<sup>−8</sup> Ω m for silver to over 10<sup>16</sup> Ω m for a good insulator.<br><br>Heating a conductor pulls the two factors in opposite directions and which one wins decides the material's character. In a <b>metal</b>, <i>n</i> is fixed because every valence electron is already free; heating makes the lattice ions vibrate harder, collisions become more frequent, τ drops, and so ρ and <i>R</i> rise. In a <b>semiconductor</b>, heating breaks covalent bonds and <i>n</i> climbs exponentially; τ still falls, but the flood of new carriers overwhelms it and ρ drops. <b>Alloys</b> such as manganin, constantan and nichrome are the quiet heroes: their resistivity is moderately high and almost completely unaffected by temperature, which is exactly what a standard resistance coil or a potentiometer wire needs."
        },
        {
          "t": "think",
          "html": "three roads at rush hour. a metal is a wide empty expressway already packed with vehicles that flow freely: huge n, long τ, tiny ρ. a semiconductor is a town road, nearly deserted at night, but as the day heats up more and more vehicles pour onto it, so its conductivity improves with temperature. an insulator is a road blocked by walls, almost nothing moves, ρ enormous. and an alloy is a toll road deliberately built so the traffic does not change when the weather does."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HOW RESISTANCE VARIES WITH TEMPERATURE",
          "main": "ρ<sub>T</sub> = ρ<sub>0</sub>[1 + α(<i>T</i> − <i>T</i><sub>0</sub>)],  <i>R</i><sub>T</sub> = <i>R</i><sub>0</sub>[1 + α(<i>T</i> − <i>T</i><sub>0</sub>)]<br>α = (<i>R</i><sub>T</sub> − <i>R</i><sub>0</sub>) / <i>R</i><sub>0</sub>(<i>T</i> − <i>T</i><sub>0</sub>)",
          "legend": [
            "ρ<sub>0</sub>, <i>R</i><sub>0</sub> = resistivity (Ω m) and resistance (Ω) at the reference temperature <i>T</i><sub>0</sub>",
            "α = temperature coefficient of resistivity, SI unit K<sup>−1</sup> (equivalently °C<sup>−1</sup>, since only a temperature DIFFERENCE appears), dimensions [K<sup>−1</sup>]",
            "<i>T</i> = the new temperature; metals have α > 0 and typically about 4 × 10<sup>−3</sup> K<sup>−1</sup>, semiconductors and insulators have α < 0, alloys have α ≈ 0"
          ],
          "note": "A first-order approximation, honest over moderate ranges only. Over a wide range the curves bend: metals flatten to a small residual value near absolute zero, and some drop to EXACTLY zero below a critical temperature, which is superconductivity and which no linear law can describe."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.8 · TWO MATERIALS, OPPOSITE HABITS",
          "chips": ["a metal", "a semiconductor"],
          "captions": [
            "A metal. Resistivity climbs roughly linearly with temperature over the ordinary range, because n is fixed and only tau changes: hotter lattice, more collisions, shorter tau, larger rho. Follow it down towards T = 0 and it flattens onto a small residual value set by impurities rather than by heat, which is the part the linear law never captures.",
            "A semiconductor, on the same axes and falling steeply. Heating liberates carriers, so n climbs exponentially and beats the drop in tau. The sign of alpha is not a convention here, it is a statement about which of the two factors in rho = m/ne²tau is doing the moving."
          ],
          "frames": [
            {
              "x": [0, 6], "y": [0, 4], "aspect": 0.72,
              "axisX": "T (K)", "axisY": "ρ (Ω m)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "pts": [[0, 0.3], [0.6, 0.36], [1.2, 0.62], [2, 1.05], [3, 1.6], [4, 2.15], [5, 2.7], [6, 3.25]], "smooth": true }
              ],
              "labels": [
                { "x": 4.0, "y": 1.1, "text": "α > 0" },
                { "x": 1.5, "y": 0.35, "text": "residual" }
              ]
            },
            {
              "x": [0, 6], "y": [0, 4], "aspect": 0.72,
              "axisX": "T (K)", "axisY": "ρ (Ω m)",
              "ticksX": { "every": 2 }, "ticksY": { "every": 1 },
              "curves": [{ "c": "exp", "a": 3.6, "k": -0.9, "d": 0.15 }],
              "labels": [{ "x": 3.4, "y": 2.2, "text": "α < 0" }]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Materials, ranges and the colour code",
          "rows": [
            { "k": "Sign of α", "v": "metals +, and about 4 × 10<sup>−3</sup> K<sup>−1</sup> · semiconductors and insulators − · alloys (manganin, constantan, nichrome) ≈ 0" },
            { "k": "Resistivity ranges", "v": "conductors 10<sup>−8</sup> to 10<sup>−6</sup> Ω m · semiconductors 10<sup>−5</sup> to 10<sup>0</sup> Ω m · insulators 10<sup>8</sup> to 10<sup>16</sup> Ω m" },
            { "k": "Superconductor", "v": "below a critical temperature <i>T</i><sub>c</sub> the resistivity falls ABRUPTLY to exactly zero, so current flows with no loss at all" },
            { "k": "Thermistor", "v": "a semiconductor oxide engineered for a LARGE α, usually negative, so a small temperature change gives a big resistance change. A resistor used as a thermometer" },
            { "k": "Colour code", "v": "<i>R</i> = (digit<sub>1</sub> digit<sub>2</sub>) × 10<sup>multiplier</sup> Ω ± tolerance. Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Grey 8, White 9" },
            { "k": "Tolerance band", "v": "gold ± 5%, silver ± 10%, no fourth band ± 20%. This is the band you use to work out which end to read from" }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a four-band resistor, and stretching one",
          "steps": [
            "<b>Orient it by the tolerance band first.</b> Gold or silver, and usually set slightly apart from the other three: put it on the RIGHT. Read from the wrong end and the digits and the multiplier swap places silently.",
            "<b>First two bands are the digits, left to right</b>, forming a two-digit number. <b>Third band is the power of ten</b> that multiplies it, which is the same as saying how many zeros to write. <b>Fourth is the tolerance.</b> Brown, Black, Red, Gold is therefore 10 × 10<sup>2</sup> = 1 kΩ ± 5%, so the true value lies between 950 Ω and 1050 Ω.",
            "<b>Remember the mnemonic for 0 to 9:</b> <i>B B ROY of Great Britain had a Very Good Wife</i>, giving Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White.",
            "<b>For any stretching or recasting question, skip the area bookkeeping.</b> The metal is conserved, so the volume <i>AL</i> is fixed; write <i>A</i> = <i>V</i><sub>0</sub>/<i>L</i> in <i>R</i> = ρ<i>L</i>/<i>A</i> and you get <i>R</i> = ρ<i>L</i><sup>2</sup>/<i>V</i><sub>0</sub>, that is <b><i>R</i> ∝ <i>L</i><sup>2</sup></b>. Square the length ratio and you are done: halve the length and you get <i>R</i>/4, double it and you get 4<i>R</i>.",
            "<b>Then check what did NOT change.</b> ρ is a property of copper, not of a piece of copper, so no amount of stretching, cutting or recasting alters it. If your answer has ρ changing, you have confused the object with the material."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.7 · WHEN THE CROSS-SECTION WILL NOT SIT STILL",
          "chips": ["a conductor that tapers"],
          "captions": [
            "A solid frustum: the radius grows linearly from a at the left face to b at the right over a length L. The current entering the small face is the same as the current leaving the large one, because in the steady state nothing accumulates anywhere inside, exactly the continuity argument you used for a fluid in a pipe. What is NOT the same is the current density and the drift speed, which crowd where the conductor is thin, like river water speeding up through a narrow gorge. To get the resistance you stack thin discs of thickness dx in series, each contributing rho dx over pi r(x)², and integrate."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.6,
              "polys": [
                { "pts": [[1, 2.4], [9, 1.2], [9, 4.8], [1, 3.6]], "close": true, "tone": "ink" },
                { "pts": [[4.8, 1.83], [5.4, 1.74], [5.4, 4.26], [4.8, 4.17]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "segments": [
                { "from": [1, 3], "to": [9, 3], "dash": true, "soft": true },
                { "from": [1, 3], "to": [1, 3.6], "arrow": true, "label": "a", "at": "end" },
                { "from": [9, 3], "to": [9, 4.8], "arrow": true, "label": "b", "at": "end" }
              ],
              "arrows": [
                { "from": [0.1, 2.0], "to": [0.9, 2.0], "tone": "amber", "label": "I", "at": "above" },
                { "from": [9.1, 3], "to": [9.9, 3], "tone": "amber", "label": "I", "at": "above" },
                { "from": [1, 0.9], "to": [5.1, 0.9], "head": "both", "tone": "soft", "label": "x", "at": "mid" }
              ],
              "labels": [{ "x": 5.1, "y": 5.4, "text": "disc of thickness dx" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A copper wire of cross-sectional area 1.5 mm<sup>2</sup> carries a steady current of 3.0 A. The free-electron density of copper is <i>n</i> = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Find the drift velocity of the electrons, and comment on its size.",
          "steps": [
            "Convert first, because this is where the marks go: <i>A</i> = 1.5 mm<sup>2</sup> = 1.5 × 10<sup>−6</sup> m<sup>2</sup>. A square millimetre is 10<sup>−6</sup> m<sup>2</sup>, not 10<sup>−3</sup>.",
            "From <i>I</i> = <i>neAv</i><sub>d</sub>, rearrange: <i>v</i><sub>d</sub> = <i>I</i>/<i>neA</i>.",
            "Denominator: (8.5 × 10<sup>28</sup>)(1.6 × 10<sup>−19</sup>)(1.5 × 10<sup>−6</sup>) = 2.04 × 10<sup>4</sup>.",
            "<i>v</i><sub>d</sub> = 3.0 / (2.04 × 10<sup>4</sup>) = 1.5 × 10<sup>−4</sup> m/s, which is about 0.15 mm/s."
          ],
          "ans": "<i>v</i><sub>d</sub> ≈ 1.5 × 10<sup>−4</sup> m/s ≈ 0.15 mm/s. The electrons crawl forward at well under a millimetre per second while the wire carries a perfectly ordinary 3 A. This is the slow-carriers, fast-signal idea made quantitative, and 10<sup>−4</sup> m/s is the order of magnitude to memorise."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A uniform wire of resistance <i>R</i> is stretched until its length becomes 1.5 times the original, the volume of metal staying constant. What is the new resistance, and does the resistivity change?",
          "steps": [
            "The trap: seeing <i>R</i> = ρ<i>L</i>/<i>A</i>, multiplying the length by 1.5 and answering 1.5<i>R</i>. Stretching THINS the wire, so <i>A</i> shrinks as well.",
            "Hold the volume <i>V</i><sub>0</sub> = <i>AL</i> fixed and write <i>A</i> = <i>V</i><sub>0</sub>/<i>L</i>: <i>R</i> = ρ<i>L</i>/(<i>V</i><sub>0</sub>/<i>L</i>) = ρ<i>L</i><sup>2</sup>/<i>V</i><sub>0</sub>, so <i>R</i> ∝ <i>L</i><sup>2</sup> at constant volume.",
            "Therefore <i>R</i>′ = <i>R</i>(<i>L</i>′/<i>L</i>)<sup>2</sup> = <i>R</i>(1.5)<sup>2</sup> = 2.25<i>R</i>.",
            "Resistivity: unchanged. ρ belongs to copper, and copper is still copper however you pull it. Only <i>R</i>, which depends on geometry, moves."
          ],
          "ans": "<i>R</i>′ = 2.25<i>R</i>, and ρ is unchanged. For any stretching or recasting at constant volume, square the length ratio and stop."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "For copper the resistivity is ρ = 1.7 × 10<sup>−8</sup> Ω m and the free-electron density is <i>n</i> = 8.5 × 10<sup>28</sup> m<sup>−3</sup>. Taking <i>m</i> = 9.11 × 10<sup>−31</sup> kg and <i>e</i> = 1.6 × 10<sup>−19</sup> C, find (a) the relaxation time τ and (b) the electron mobility μ.",
          "steps": [
            "(a) Rearrange ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ to give τ = <i>m</i>/<i>ne</i><sup>2</sup>ρ, then build the denominator in two steps.",
            "<i>ne</i><sup>2</sup> = (8.5 × 10<sup>28</sup>)(2.56 × 10<sup>−38</sup>) = 2.18 × 10<sup>−9</sup>, and <i>ne</i><sup>2</sup>ρ = (2.18 × 10<sup>−9</sup>)(1.7 × 10<sup>−8</sup>) = 3.70 × 10<sup>−17</sup>.",
            "τ = (9.11 × 10<sup>−31</sup>)/(3.70 × 10<sup>−17</sup>) = 2.5 × 10<sup>−14</sup> s.",
            "(b) μ = <i>e</i>τ/<i>m</i> = (1.6 × 10<sup>−19</sup>)(2.46 × 10<sup>−14</sup>)/(9.11 × 10<sup>−31</sup>) = (3.94 × 10<sup>−33</sup>)/(9.11 × 10<sup>−31</sup>) = 4.3 × 10<sup>−3</sup> m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>.",
            "Faster route to (b), worth knowing: μ = σ/<i>ne</i> = 1/(ρ<i>ne</i>) = 1/(1.7 × 10<sup>−8</sup> × 8.5 × 10<sup>28</sup> × 1.6 × 10<sup>−19</sup>) = 1/231 = 4.3 × 10<sup>−3</sup>, with no τ needed at all."
          ],
          "ans": "τ = 2.5 × 10<sup>−14</sup> s and μ = 4.3 × 10<sup>−3</sup> m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>. Both pass the smell test: 10<sup>−14</sup> s is the textbook order for a metal at room temperature, and a few times 10<sup>−3</sup> is the measured mobility of copper."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A solid conductor is a frustum whose radius grows linearly from <i>a</i> at the left face to <i>b</i> at the right over a length <i>L</i>. It has resistivity ρ and carries a steady current <i>I</i> entering the small face. Find (a) how the drift speed varies along it, and (b) the resistance between the two faces.",
          "steps": [
            "(a) In the steady state no charge piles up anywhere inside, so whatever enters per second must leave per second and <i>I</i> is the SAME at every cross-section, fat or thin. At distance <i>x</i> from the small face, <i>r</i>(<i>x</i>) = <i>a</i> + (<i>b</i> − <i>a</i>)<i>x</i>/<i>L</i> and <i>A</i>(<i>x</i>) = π<i>r</i>(<i>x</i>)<sup>2</sup>.",
            "Since <i>I</i> = <i>neA</i>(<i>x</i>)<i>v</i><sub>d</sub>(<i>x</i>) is fixed while <i>A</i>(<i>x</i>) grows, <i>v</i><sub>d</sub>(<i>x</i>) = <i>I</i>/(<i>ne</i>π<i>r</i>(<i>x</i>)<sup>2</sup>) ∝ 1/<i>r</i>(<i>x</i>)<sup>2</sup>. Fastest at the narrow end, slowest at the wide one.",
            "(b) Stack thin discs of thickness <i>dx</i> in SERIES, each of resistance ρ<i>dx</i>/<i>A</i>(<i>x</i>): <i>R</i> = ∫ρ<i>dx</i>/π<i>r</i>(<i>x</i>)<sup>2</sup> from 0 to <i>L</i>.",
            "Substitute <i>u</i> = <i>r</i>(<i>x</i>), so <i>du</i> = (<i>b</i> − <i>a</i>)<i>dx</i>/<i>L</i> and <i>u</i> runs from <i>a</i> to <i>b</i>: <i>R</i> = (ρ<i>L</i>/π(<i>b</i> − <i>a</i>))∫<i>du</i>/<i>u</i><sup>2</sup> = (ρ<i>L</i>/π(<i>b</i> − <i>a</i>))(1/<i>a</i> − 1/<i>b</i>).",
            "Simplify 1/<i>a</i> − 1/<i>b</i> = (<i>b</i> − <i>a</i>)/<i>ab</i>, and the bracket cancels."
          ],
          "ans": "<i>v</i><sub>d</sub> ∝ 1/<i>r</i>(<i>x</i>)<sup>2</sup> and <i>R</i> = ρ<i>L</i>/π<i>ab</i>. Check the limit: let <i>b</i> → <i>a</i> and you get ρ<i>L</i>/π<i>a</i><sup>2</sup> = ρ<i>L</i>/<i>A</i>, the cylinder formula, exactly as it must. Notice that the answer carries the GEOMETRIC mean <i>ab</i> and not the average of the two radii."
        },
        {
          "t": "mcq",
          "q": "Which statement about electric current is correct?",
          "opts": [
            { "label": "Current is a vector along the wire and obeys the parallelogram law", "nudge": "It has a direction, so the vector instinct is natural, but no single vector can describe the current along a BENT wire. Direction here is a sign convention along a conductor." },
            { "label": "Current has a direction but is a scalar, since currents add algebraically along a conductor" },
            { "label": "Current density is a scalar while current is a vector", "nudge": "Exactly inverted. Current density is the genuine vector: it lives at a point, has units of per-area, and points along the conventional current." },
            { "label": "Both current and current density are vectors", "nudge": "Half right, and it is the wrong half. Current density is a vector; current is not, because it does not combine by the parallelogram law at a junction." }
          ],
          "correct": 1,
          "solution": "At a junction, currents simply add with signs along the wires, which is algebra, not vector addition. The quick test in an exam: if a quantity is quoted with a direction in space AND units of per-area, it is <i>J</i>; if it is quoted along a wire in amperes, it is <i>I</i> and it is a scalar."
        },
        {
          "t": "mcq",
          "q": "The drift speed of conduction electrons in a metal carrying an ordinary current is of the order of:",
          "opts": [
            { "label": "3 × 10<sup>8</sup> m/s", "nudge": "That is <i>c</i>, the speed at which the FIELD is established along the wire. It is why the bulb lights instantly, and it is not how fast any electron moves." },
            { "label": "10<sup>5</sup> m/s", "nudge": "That is the random THERMAL speed, which is genuinely huge but averages to zero displacement. Drift is the small bias riding on top of it." },
            { "label": "10<sup>−4</sup> m/s" },
            { "label": "0 m/s", "nudge": "True only with no field applied. Switch the field on and the average velocity becomes small but definitely non-zero, which is the entire point of drift." }
          ],
          "correct": 2,
          "solution": "About 10<sup>−4</sup> m/s, astonishingly slow, and the worked example above confirms it: 3.0 A through a 1.5 mm<sup>2</sup> copper wire gives 1.5 × 10<sup>−4</sup> m/s. Keep this and τ ≈ 10<sup>−14</sup> s as standing checks; if a calculation lands far from them you have slipped a power of ten."
        },
        {
          "t": "mcq",
          "q": "A conductor has free-electron density <i>n</i> = 1.0 × 10<sup>29</sup> m<sup>−3</sup> and carries a current density of 8.0 A mm<sup>−2</sup>. The drift speed of its electrons is:",
          "opts": [
            { "label": "0.5 mm/s" },
            { "label": "5 mm/s", "nudge": "This is what you get by dropping the mm<sup>2</sup> to m<sup>2</sup> conversion partly, losing a factor in the exponent. A square millimetre is 10<sup>−6</sup> m<sup>2</sup>." },
            { "label": "0.5 m/s", "nudge": "The digits are right and the power of ten is not. Also fails the standing check: no drift speed in a metal is anywhere near 0.5 m/s." },
            { "label": "8 mm/s", "nudge": "This just repeats the 8 from the question without doing the division by <i>ne</i>. A no-calculation trap." }
          ],
          "correct": 0,
          "solution": "Convert first: <i>J</i> = 8.0 A mm<sup>−2</sup> = 8.0 × 10<sup>6</sup> A m<sup>−2</sup>. Then <i>v</i><sub>d</sub> = <i>J</i>/<i>ne</i> = (8.0 × 10<sup>6</sup>)/[(1.0 × 10<sup>29</sup>)(1.6 × 10<sup>−19</sup>)] = (8.0 × 10<sup>6</sup>)/(1.6 × 10<sup>10</sup>) = 5 × 10<sup>−4</sup> m/s = 0.5 mm/s. The A mm<sup>−2</sup> to A m<sup>−2</sup> conversion, a factor of 10<sup>6</sup>, is the single most common arithmetic slip in the topic."
        },
        {
          "t": "mcq",
          "q": "On heating, the resistance of a pure metal ____ while that of a semiconductor ____, because:",
          "opts": [
            { "label": "increases / decreases: in the metal τ falls, in the semiconductor <i>n</i> rises sharply" },
            { "label": "decreases / increases: in the metal <i>n</i> rises, in the semiconductor τ falls", "nudge": "The two mechanisms have been swapped. In a metal every valence electron is already free, so <i>n</i> cannot rise; only τ is temperature-sensitive." },
            { "label": "increases / increases: collisions increase in both", "nudge": "Collisions do increase in both, but in a semiconductor the exponential growth of <i>n</i> overwhelms the drop in τ, so ρ falls despite the extra collisions." },
            { "label": "decreases / decreases: carriers move faster in both", "nudge": "Blames the change on speed. ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ contains no speed at all; only <i>n</i> and τ can move." }
          ],
          "correct": 0,
          "solution": "Read it straight off ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ. In a metal <i>n</i> is essentially fixed, hotter lattice vibrations cut τ, so ρ and <i>R</i> rise: α > 0. In a semiconductor heating liberates many more carriers, <i>n</i> climbs steeply and beats the drop in τ, so ρ falls: α < 0. One formula, two opposite behaviours, decided entirely by which factor moves."
        },
        {
          "t": "practice",
          "items": [
            { "q": "A steady current of 2.5 A flows through a conductor. How many electrons cross a given cross-section in 4 minutes?", "a": "<i>q</i> = <i>It</i> = 2.5 × 240 = 600 C, so <i>N</i> = 600/(1.6 × 10<sup>−19</sup>) = 3.75 × 10<sup>21</sup> electrons." },
            { "q": "A wire of resistance <i>R</i> is melted down and recast into a wire of HALF the original length, same material and same volume of metal. What is its new resistance?", "a": "<i>R</i> ∝ <i>L</i><sup>2</sup> at constant volume, so <i>R</i>′ = <i>R</i>(1/2)<sup>2</sup> = <i>R</i>/4. Recasting shortens and fattens it, and both changes push the resistance down." },
            { "q": "The current density in an aluminium wire is 5 × 10<sup>6</sup> A m<sup>−2</sup> and its resistivity is 2.8 × 10<sup>−8</sup> Ω m. Find the electric field inside the wire.", "a": "Microscopic Ohm's law, <i>E</i> = ρ<i>J</i> = (2.8 × 10<sup>−8</sup>)(5 × 10<sup>6</sup>) = 0.14 V/m. A tiny field, which is why a metre of wire drops only a fraction of a volt." },
            { "q": "A metallic resistor reads 10.0 Ω at 20 °C and its temperature coefficient is α = 4.0 × 10<sup>−3</sup> °C<sup>−1</sup>. Find its resistance at 120 °C.", "a": "<i>R</i><sub>T</sub> = 10.0[1 + (4.0 × 10<sup>−3</sup>)(100)] = 10.0 × 1.4 = 14.0 Ω. It is a metal and it got hotter, so the answer had to come out above 10.0 Ω." },
            { "q": "A conductor's circular cross-section tapers so that its radius grows from <i>a</i> at one end to 2<i>a</i> at the other, carrying a steady current <i>I</i>. Find the ratio of the drift speeds at the narrow end and the wide end.", "a": "<i>v</i><sub>d</sub> ∝ 1/<i>r</i><sup>2</sup>, so the ratio is (2<i>a</i>)<sup>2</sup> : <i>a</i><sup>2</sup> = 4 : 1. Four times faster where the wire is half as wide." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Mixing up current and current density.</b> <i>I</i> is a scalar in amperes; <i>J</i> is a vector in A m<sup>−2</sup>. If a quantity is quoted with a direction in space and a per-area unit, it is <i>J</i>, never <i>I</i>.",
            "<b>Quoting the drift speed to explain why a bulb lights instantly.</b> Those are two different speeds: the carriers crawl at 10<sup>−4</sup> m/s and the FIELD travels at nearly <i>c</i>. Answering \"because the electrons move fast\" loses the mark outright.",
            "<b>Letting resistivity depend on size.</b> ρ is a material constant; only <i>R</i> = ρ<i>L</i>/<i>A</i> feels geometry. Stretching, recasting or cutting changes <i>R</i> and never ρ. Watch the units too, because Ω m and Ω are different quantities and the paper will say which it wants.",
            "<b>Forgetting the 1 + in the temperature law.</b> <i>R</i><sub>T</sub> = <i>R</i><sub>0</sub>(1 + αΔ<i>T</i>). Dropping the 1 gives you only the CHANGE, so 100 Ω heated 50 °C with α = 4 × 10<sup>−3</sup> comes out as 20 Ω instead of 120 Ω.",
            "<b>Getting the sign of α backwards.</b> Metals positive, semiconductors and insulators negative, alloys about zero. Flip it and the whole answer inverts, and the reasoning mark goes with it."
          ]
        },
        {
          "t": "protip",
          "html": "two order-of-magnitude checks that catch almost every slipped power of ten in this topic: drift speed about 10<sup>−4</sup> m/s and relaxation time about 10<sup>−14</sup> s for a metal. run them before you commit to any <i>v</i><sub>d</sub>, τ or μ answer. and for stretching or recasting, never track the area: constant volume means <i>R</i> ∝ <i>L</i><sup>2</sup>, so square the length ratio and move on. one more, for the temperature questions: work with the ratio <i>R</i><sub>T</sub>/<i>R</i><sub>0</sub> = 1 + αΔ<i>T</i> and you never have to carry the absolute resistances until the last line."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>I</i> = <i>dq</i>/<i>dt</i> = <i>neAv</i><sub>d</sub>", "note": "current, a SCALAR, in amperes. Conventional current runs opposite to the electron drift" },
            { "f": "<i>v</i><sub>d</sub> = <i>eE</i>τ/<i>m</i>, μ = <i>e</i>τ/<i>m</i>", "note": "typical <i>v</i><sub>d</sub> ≈ 10<sup>−4</sup> m/s, τ ≈ 10<sup>−14</sup> s. μ in m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>" },
            { "f": "<i>J</i> = <i>I</i>/<i>A</i> = <i>nev</i><sub>d</sub> = σ<i>E</i>", "note": "current density, a VECTOR, in A m<sup>−2</sup>. This is Ohm's law written at a point" },
            { "f": "<i>R</i> = ρ<i>L</i>/<i>A</i>, ρ = <i>m</i>/<i>ne</i><sup>2</sup>τ", "note": "R in Ω belongs to the object; ρ in Ω m belongs to the material" },
            { "f": "<i>R</i><sub>T</sub> = <i>R</i><sub>0</sub>[1 + α(<i>T</i> − <i>T</i><sub>0</sub>)]", "note": "α in K<sup>−1</sup>. Metals +, semiconductors and insulators −, alloys ≈ 0" },
            { "f": "constant volume ⟹ <i>R</i> ∝ <i>L</i><sup>2</sup>", "note": "stretch to 1.5<i>L</i> and you get 2.25<i>R</i>; recast to <i>L</i>/2 and you get <i>R</i>/4" }
          ],
          "aids": [
            "slow snails, fast switch: electrons drift like snails, the field travels near light speed",
            "ρ is the material's fingerprint, R is the object's. only R feels geometry",
            "J is the vector, I is not",
            "metal hates heat (R up), semiconductor loves heat (R down), alloy does not care",
            "colour code: B B ROY of Great Britain had a Very Good Wife, and the third band is how many zeros"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Combining Resistors: Series, Parallel and the Ladder",
      "chip": "02 COMBINE",
      "kalam": "series adds, parallel eases",
      "blocks": [
        {
          "t": "p",
          "html": "Real circuits are almost never one resistor. They are tangles of many, and the whole art of circuit analysis starts with two ways resistors can sit together, because almost every network is those two patterns nested inside each other.<br><br><b>Series</b> is resistors lined up one after another, like toll booths on the Mumbai to Pune expressway. Every car has to pass through <i>every</i> booth in turn, so the <b>same current</b> flows through each resistor and the total delay is the <b>sum</b> of the individual delays. More booths in a row means more total resistance. The voltage, meanwhile, gets shared out: each resistor drops a slice of the total, in proportion to its own size.<br><br><b>Parallel</b> is resistors sitting side by side between the same two points, like several ticket counters at a railway station. Now the crowd <b>splits</b> among the queues. Each path sees the <b>same voltage</b> across its ends, because both ends touch the same two nodes, but the current divides, with more of it taking the easier, lower-resistance path. And here is the part that surprises people: adding another parallel path gives the current more room, so the total resistance <b>falls</b>. A parallel combination is always smaller than the smallest resistor in it."
        },
        {
          "t": "think",
          "html": "series resistors are extra layers of cloth over a torch: every layer dims it further, so resistance adds. parallel resistors are extra doors out of a crowded hall: every new door makes leaving easier, so resistance drops. that one image tells you the DIRECTION of every answer before you compute a single number, and half the marks in this topic are for getting the direction right."
        },
        {
          "t": "def",
          "term": "What \"in series\" and \"in parallel\" actually require",
          "html": "These are statements about CONNECTIONS, not about how the diagram happens to be drawn. Two resistors are <b>genuinely in series</b> only if there is <b>no junction between them</b>, so that the same current is forced through both with nowhere to leak away. Two resistors are <b>genuinely in parallel</b> only if they share <b>both</b> end nodes, so that both ends sit at the same pair of potentials. Resistors that merely look side by side on the page are not parallel unless both their ends actually meet. This is why an unbalanced Wheatstone bridge cannot be reduced at all by these rules: the bridging resistor joins two midpoints, so no pair of arms shares both nodes and no pair carries a common current. Such networks need Kirchhoff's laws, which is Topic 05."
        },
        {
          "t": "defgrid",
          "title": "The two patterns, side by side",
          "rows": [
            { "k": "Series", "v": "same <i>I</i> through each · <i>V</i> divides · <i>R</i><sub>s</sub> = Σ<i>R</i><sub>i</sub> · result is ALWAYS above the largest member" },
            { "k": "Parallel", "v": "same <i>V</i> across each · <i>I</i> divides · 1/<i>R</i><sub>p</sub> = Σ(1/<i>R</i><sub>i</sub>) · result is ALWAYS below the smallest member" },
            { "k": "Two in parallel", "v": "<i>R</i><sub>p</sub> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>), the product-over-sum shortcut. For two EQUAL resistors it gives exactly <i>R</i>/2" },
            { "k": "<i>n</i> equal resistors", "v": "series <i>nR</i>, parallel <i>R</i>/<i>n</i>, and the ratio of the largest to the smallest obtainable value is exactly <i>n</i><sup>2</sup>" },
            { "k": "Standard results", "v": "infinite ladder (series <i>R</i>, shunt <i>R</i>): <i>X</i> = <i>R</i>(1 + √5)/2 ≈ 1.618<i>R</i> · cube of twelve equal <i>R</i> across a body diagonal: 5<i>R</i>/6" },
            { "k": "Units", "v": "every resistance is in ohms (Ω), dimensions [M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]. A reciprocal sum has units Ω<sup>−1</sup>, so the last step is always to invert" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO COMBINATION RULES",
          "tag": "everything else in the topic is these two, nested",
          "main": "series: <i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + … + <i>R</i><sub>n</sub><br>parallel: 1/<i>R</i><sub>p</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + … + 1/<i>R</i><sub>n</sub>",
          "legend": [
            "<i>R</i><sub>s</sub>, <i>R</i><sub>p</sub> = the single equivalent resistance (Ω) that would draw the same current from the same source",
            "series carries a common current <i>I</i> (A) and splits the voltage: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + …",
            "parallel carries a common voltage <i>V</i> (V) and splits the current: <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + …"
          ],
          "note": "The parallel formula gives you 1/Rp, not Rp. Inverting at the very end is the last step of the calculation and the one most often forgotten, which is why so many answers come back as a number smaller than 1 that should have been its reciprocal."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.9 AND 3.10 · THE SAME THREE RESISTORS, TWO WAYS",
          "chips": ["three in series", "three in parallel"],
          "captions": [
            "Series. One path from A to B and every electron takes it, so the same I flows through R₁, R₂ and R₃ in turn. There is no junction anywhere between them, which is what forces the common current. The battery's V is shared out among the three drops, V = V₁ + V₂ + V₃, each proportional to its own resistance. Adding a fourth resistor here can only make things worse for the current: R_s exceeds every member.",
            "Parallel. Now all three hang between the SAME two nodes A and B, so all three see the identical V, and the battery current splits three ways at A and reunites at B. Adding a fourth branch gives the current one more route, so the equivalent resistance goes DOWN. Note that these are the same three resistors as the first chip: nothing about the components changed, only which nodes their ends touch."
          ],
          "frames": [
            {
              "aspect": 0.5,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [2, 1] },
                  { "from": [4, 1], "to": [5, 1] },
                  { "from": [7, 1], "to": [8, 1] },
                  { "from": [10, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 5] },
                  { "from": [11, 5], "to": [8, 5] },
                  { "from": [4, 5], "to": [1, 5] },
                  { "from": [1, 5], "to": [1, 1] }
                ],
                "parts": [
                  { "at": [2, 1], "to": [4, 1], "kind": "R", "label": "R₁" },
                  { "at": [5, 1], "to": [7, 1], "kind": "R", "label": "R₂" },
                  { "at": [8, 1], "to": [10, 1], "kind": "R", "label": "R₃" },
                  { "at": [4, 5], "to": [8, 5], "kind": "battery", "label": "V", "tone": "amber" }
                ],
                "nodes": [
                  { "at": [1, 1], "label": "A" },
                  { "at": [11, 1], "label": "B" }
                ],
                "currents": [{ "at": [2.2, 2.2], "to": [3.8, 2.2], "label": "I" }]
              }
            },
            {
              "aspect": 0.5,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [3, 1], "to": [3, 4] },
                  { "from": [9, 1], "to": [9, 4] },
                  { "from": [3, 4], "to": [3, 5.4] },
                  { "from": [9, 4], "to": [9, 5.4] },
                  { "from": [3, 5.4], "to": [4.5, 5.4] },
                  { "from": [7.5, 5.4], "to": [9, 5.4] }
                ],
                "parts": [
                  { "at": [3, 1], "to": [9, 1], "kind": "R", "label": "R₁" },
                  { "at": [3, 2.5], "to": [9, 2.5], "kind": "R", "label": "R₂" },
                  { "at": [3, 4], "to": [9, 4], "kind": "R", "label": "R₃" },
                  { "at": [4.5, 5.4], "to": [7.5, 5.4], "kind": "battery", "label": "V", "tone": "amber" }
                ],
                "nodes": [
                  { "at": [3, 1], "junction": true },
                  { "at": [3, 2.5], "junction": true, "label": "A" },
                  { "at": [3, 4], "junction": true },
                  { "at": [9, 1], "junction": true },
                  { "at": [9, 2.5], "junction": true, "label": "B" },
                  { "at": [9, 4], "junction": true }
                ],
                "currents": [{ "at": [4.3, 5.4], "to": [3.3, 5.4], "label": "I" }]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE BOTH RULES COME FROM, TAP A LINE",
          "steps": [
            {
              "eq": "SERIES. Three resistors end to end across <i>V</i>, carrying a common current <i>I</i>",
              "why": "The current is common because there is no junction between them: charge is conserved and has nowhere else to go, so whatever enters <i>R</i><sub>1</sub> must leave it and enter <i>R</i><sub>2</sub>."
            },
            {
              "eq": "<i>V</i><sub>1</sub> = <i>IR</i><sub>1</sub>, <i>V</i><sub>2</sub> = <i>IR</i><sub>2</sub>, <i>V</i><sub>3</sub> = <i>IR</i><sub>3</sub>, and <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub> = <i>I</i>(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>3</sub>)",
              "why": "Ohm's law on each, then the loop rule: the source voltage equals the sum of the drops around the circuit. Comparing with <i>V</i> = <i>IR</i><sub>s</sub> gives <i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>3</sub>, and since every term is positive the sum must exceed the largest of them."
            },
            {
              "eq": "PARALLEL. Three resistors all between the same nodes A and B, so all three carry the same <i>V</i>",
              "why": "Both ends of every branch touch the same pair of nodes, and a node has one potential, so the potential difference across each branch is identical. Nothing about the branches themselves is assumed."
            },
            {
              "eq": "<i>I</i><sub>1</sub> = <i>V</i>/<i>R</i><sub>1</sub>, <i>I</i><sub>2</sub> = <i>V</i>/<i>R</i><sub>2</sub>, <i>I</i><sub>3</sub> = <i>V</i>/<i>R</i><sub>3</sub>, and <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + <i>I</i><sub>3</sub> = <i>V</i>(1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + 1/<i>R</i><sub>3</sub>)",
              "why": "The junction rule at A: the current the source delivers is the sum of what the branches take. Dividing through by <i>V</i> and comparing with <i>I</i> = <i>V</i>/<i>R</i><sub>p</sub> gives the reciprocal rule."
            },
            {
              "eq": "check the limit: two EQUAL resistors <i>R</i> in parallel give 1/<i>R</i><sub>p</sub> = 2/<i>R</i>, so <i>R</i><sub>p</sub> = <i>R</i>/2",
              "why": "Exactly half of either one, which is the fastest sanity check in the topic and the one to run before anything else. It also shows why the result is always below the smallest branch: adding any further branch only makes the reciprocal sum bigger, and so <i>R</i><sub>p</sub> smaller."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO DIVIDERS",
          "tag": "note which resistor sits on top",
          "main": "voltage divider: <i>V</i><sub>1</sub> = <i>V</i> · <i>R</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)<br>current divider: <i>I</i><sub>1</sub> = <i>I</i> · <i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)",
          "legend": [
            "<i>V</i> = total voltage across two resistors IN SERIES (V); <i>V</i><sub>1</sub> = the share dropped across <i>R</i><sub>1</sub> (V)",
            "<i>I</i> = total current entering two resistors IN PARALLEL (A); <i>I</i><sub>1</sub> = the share taken by the branch <i>R</i><sub>1</sub> (A)",
            "<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub> = the two resistances (Ω); both ratios are dimensionless and both must come out between 0 and 1"
          ],
          "note": "The voltage divider puts a resistor's OWN value on top; the current divider puts the OTHER one on top. That is not an inconsistency, it is the physics: a bigger resistor takes a bigger share of the voltage and a smaller share of the current."
        },
        {
          "t": "proc",
          "title": "Reducing any network without losing your way",
          "steps": [
            "<b>Predict the direction before you compute.</b> Any series result must exceed the largest resistor in the chain; any parallel result must fall below the smallest branch. Write the bound on your page first, and you will spot a wrong answer before you finish it.",
            "<b>Label the nodes, then collapse from the far end inwards.</b> Find the pair of resistors that are unambiguously in series or in parallel, replace them with one value, redraw, repeat. Working from the end furthest from the source keeps the source out of the algebra until the last step.",
            "<b>Use product over sum for exactly two in parallel</b> and <i>R</i>/<i>n</i> for <i>n</i> equal ones. The full reciprocal sum is for three or more unequal branches only, and it is where the missing final inversion happens.",
            "<b>Before you reduce anything across a bridge, check the balance ratio.</b> If a network has a resistor joining two midpoints, compare the two arm ratios. If they are equal the bridge is balanced, the bridging arm carries no current, and you may delete it and reduce what is left. If they are not equal, stop and use Kirchhoff.",
            "<b>Finish with a conservation check.</b> The branch currents you found must add back to the total, and the branch voltages around any loop must add back to the source. If they do not, you have inverted a ratio somewhere."
          ]
        },
        {
          "t": "p",
          "html": "Two families of network defeat step-by-step reduction and both are JEE Advanced regulars, so it is worth knowing what tool each needs.<br><br>The first is the <b>symmetric network</b>, of which the cube of twelve equal resistors is the classic. You cannot find a single pair that is cleanly in series or in parallel anywhere in it. What you can do is exploit symmetry: if two nodes are interchangeable under a symmetry of the network that also swaps nothing about where the current enters and leaves, they must sit at the same potential, and nodes at the same potential can be merged. Merge them and the cube collapses into three groups of parallel resistors in series, giving 5<i>R</i>/6 across a body diagonal.<br><br>The second is the <b>infinite ladder</b>, and it yields to a trick that feels like cheating and is not. Because the ladder is infinite, chopping off the first rung leaves a network identical to the one you started with. That is a statement you can write as an equation, and an equation you can solve."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.11 · THE LADDER THAT CONTAINS ITSELF",
          "chips": ["series R along the top, shunt R to the rail"],
          "captions": [
            "A repeating ladder: one R in series along the top rail, then one R shunted down to the bottom rail, forever. Cover everything to the right of the first shunt with your hand and what remains visible is one series R and one shunt R feeding a network that looks exactly like the whole thing. That is the self-similarity, and it turns an infinite circuit into a quadratic. Notice which junctions are dots: the shunt taps the top rail at every step, so the current has somewhere to leave, and no two of the series resistors are in series with each other."
          ],
          "frames": [
            {
              "aspect": 0.45,
              "circuit": {
                "grid": [14, 6],
                "wires": [
                  { "from": [1, 1], "to": [2, 1] },
                  { "from": [4, 1], "to": [6, 1] },
                  { "from": [8, 1], "to": [10, 1] },
                  { "from": [12, 1], "to": [13.5, 1] },
                  { "from": [1, 5], "to": [13.5, 5] },
                  { "from": [1, 1], "to": [1, 5] }
                ],
                "parts": [
                  { "at": [2, 1], "to": [4, 1], "kind": "R", "label": "R" },
                  { "at": [6, 1], "to": [8, 1], "kind": "R", "label": "R" },
                  { "at": [10, 1], "to": [12, 1], "kind": "R", "label": "R" },
                  { "at": [4, 1], "to": [4, 5], "kind": "R", "label": "R" },
                  { "at": [8, 1], "to": [8, 5], "kind": "R", "label": "R" },
                  { "at": [12, 1], "to": [12, 5], "kind": "R", "label": "R" }
                ],
                "nodes": [
                  { "at": [4, 1], "junction": true },
                  { "at": [8, 1], "junction": true },
                  { "at": [12, 1], "junction": true },
                  { "at": [4, 5], "junction": true },
                  { "at": [8, 5], "junction": true },
                  { "at": [12, 5], "junction": true }
                ],
                "currents": [{ "at": [1.4, 2.4], "to": [2.6, 2.4], "label": "X" }]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE INFINITE LADDER, TAP A LINE",
          "steps": [
            {
              "eq": "let <i>X</i> be the resistance looking into the input terminals of the whole infinite ladder",
              "why": "It exists and is finite, which is worth a moment: each extra rung shunts a little more current away, and the sequence of finite ladders converges. If you doubted this, compute the first three rungs and watch the value settle."
            },
            {
              "eq": "remove the first rung. What remains is an identical infinite ladder, of resistance <i>X</i> again",
              "why": "This is the whole trick. Infinity minus one rung is still infinity, so the tail is not merely similar to the original, it IS the original. A finite ladder would give a different tail and no equation."
            },
            {
              "eq": "so the whole network is one series <i>R</i>, then <i>R</i> in parallel with the tail: <i>X</i> = <i>R</i> + <i>RX</i>/(<i>R</i> + <i>X</i>)",
              "why": "Read it straight off the drawing: the series resistor is in the path of everything, and after it the current chooses between the shunt <i>R</i> and the rest of the ladder, which is what parallel means."
            },
            {
              "eq": "multiply by (<i>R</i> + <i>X</i>): <i>RX</i> + <i>X</i><sup>2</sup> = <i>R</i><sup>2</sup> + <i>RX</i> + <i>RX</i>, so <i>X</i><sup>2</sup> − <i>RX</i> − <i>R</i><sup>2</sup> = 0",
              "why": "An ordinary quadratic in <i>X</i>, with <i>R</i> carried along as a constant. Every term has the dimension of a resistance squared, which is the check that no algebra was lost."
            },
            {
              "eq": "<i>X</i> = [<i>R</i> + √(<i>R</i><sup>2</sup> + 4<i>R</i><sup>2</sup>)]/2 = <i>R</i>(1 + √5)/2 ≈ 1.618<i>R</i>",
              "why": "The negative root is discarded because a resistance cannot be negative. And the answer is the golden ratio times <i>R</i>, which is a small piece of mathematics hiding in a resistor network. Sanity check the size: it must exceed the single series <i>R</i> the current has to cross first, and it does."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Resistors of 2 Ω, 3 Ω and 6 Ω are available. Find the equivalent resistance when they are connected (a) all in series and (b) all in parallel.",
          "steps": [
            "(a) Series: <i>R</i><sub>s</sub> = 2 + 3 + 6 = 11 Ω.",
            "(b) Parallel: 1/<i>R</i><sub>p</sub> = 1/2 + 1/3 + 1/6. Put them over the common denominator 6: (3 + 2 + 1)/6 = 6/6 = 1.",
            "So 1/<i>R</i><sub>p</sub> = 1 Ω<sup>−1</sup>, and inverting, <i>R</i><sub>p</sub> = 1 Ω. Do not stop at the 1 in the line above without inverting: here the two happen to look the same, which is exactly when the slip goes unnoticed."
          ],
          "ans": "<i>R</i><sub>s</sub> = 11 Ω and <i>R</i><sub>p</sub> = 1 Ω. Both pass the bound test: 11 Ω is above the largest member (6 Ω) and 1 Ω is below the smallest (2 Ω)."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Four identical 12 Ω resistors are given. What are the maximum and the minimum equivalent resistances obtainable using all four?",
          "steps": [
            "The trap is to start hunting through clever mixed arrangements. The EXTREMES are always the two pure cases, because every mixed arrangement is bounded by them.",
            "Maximum: all four in series, <i>R</i><sub>max</sub> = 4 × 12 = 48 Ω.",
            "Minimum: all four in parallel, <i>R</i><sub>min</sub> = 12/4 = 3 Ω.",
            "Built-in check: the ratio should be <i>n</i><sup>2</sup> for <i>n</i> identical resistors. 48/3 = 16 = 4<sup>2</sup>."
          ],
          "ans": "<i>R</i><sub>max</sub> = 48 Ω, <i>R</i><sub>min</sub> = 3 Ω. Their ratio, 16, is <i>n</i><sup>2</sup> with <i>n</i> = 4, exactly as it must be."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A 12 V battery of negligible internal resistance drives a network: a 2 Ω resistor in series with a parallel combination of 6 Ω and 3 Ω. Find (a) the total current from the battery and (b) the current through the 3 Ω resistor.",
          "steps": [
            "(a) Collapse the parallel pair first, using product over sum: <i>R</i><sub>p</sub> = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Check: 2 Ω is below the smaller branch, 3 Ω.",
            "Total resistance = 2 + 2 = 4 Ω, so <i>I</i> = <i>V</i>/<i>R</i> = 12/4 = 3.0 A.",
            "(b) The full 3.0 A crosses the series 2 Ω, then splits at the parallel pair. Current divider with the OTHER resistor on top: <i>I</i><sub>3Ω</sub> = 3.0 × 6/(6 + 3) = 3.0 × 6/9 = 2.0 A.",
            "Check twice over. First, <i>I</i><sub>6Ω</sub> = 3.0 × 3/9 = 1.0 A and 2.0 + 1.0 = 3.0 A. Second, the voltage across the pair is 3.0 × 2 = 6.0 V, giving 6/3 = 2.0 A and 6/6 = 1.0 A."
          ],
          "ans": "<i>I</i> = 3.0 A from the battery and 2.0 A through the 3 Ω. The smaller resistor carries the larger current, which is the whole content of the divider rule."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "An infinite ladder is built from identical resistors <i>R</i>: each rung places one <i>R</i> in series along the top and one <i>R</i> as a shunt down to the bottom rail, repeated forever. A student instead builds a ladder from 1 Ω series and 2 Ω shunt resistors. Find the equivalent resistance <i>X</i> at the input in that case.",
          "steps": [
            "Self-similarity: removing the first rung leaves an identical infinite ladder of resistance <i>X</i>. So <i>X</i> = 1 + (2 ∥ <i>X</i>) = 1 + 2<i>X</i>/(2 + <i>X</i>).",
            "Multiply through by (2 + <i>X</i>): <i>X</i>(2 + <i>X</i>) = (2 + <i>X</i>) + 2<i>X</i>, that is 2<i>X</i> + <i>X</i><sup>2</sup> = 2 + 3<i>X</i>.",
            "Rearrange: <i>X</i><sup>2</sup> − <i>X</i> − 2 = 0, which factorises as (<i>X</i> − 2)(<i>X</i> + 1) = 0.",
            "Discard <i>X</i> = −1 Ω, since a resistance cannot be negative. So <i>X</i> = 2 Ω.",
            "Sanity check: <i>X</i> must be larger than the 1 Ω the current has to cross before it reaches anything else, and smaller than 1 + 2 = 3 Ω, which is what a single rung with nothing beyond it would give. 2 Ω sits in that bracket."
          ],
          "ans": "<i>X</i> = 2 Ω. The same method on the all-equal ladder gives <i>X</i><sup>2</sup> − <i>RX</i> − <i>R</i><sup>2</sup> = 0 and <i>X</i> = <i>R</i>(1 + √5)/2 ≈ 1.618<i>R</i>. Do the algebra fresh each time: swapping in new numbers without redoing it is exactly how a printed answer of 3 Ω gets attached to a quadratic that does not have 3 as a root."
        },
        {
          "t": "mcq",
          "q": "The equivalent resistance of a parallel combination of resistors is always:",
          "opts": [
            { "label": "larger than the largest resistor", "nudge": "That describes SERIES. Adding a parallel path can only give the current more room, never less." },
            { "label": "equal to their arithmetic average", "nudge": "There is no physical basis for an average here: the parallel rule adds RECIPROCALS, and the reciprocal of a sum is not the sum of reciprocals." },
            { "label": "smaller than the smallest resistor" },
            { "label": "equal to their sum", "nudge": "Also the series rule. Watch which quantity is shared: parallel shares the voltage, so it is the currents that add, not the resistances." }
          ],
          "correct": 2,
          "solution": "Every extra parallel branch adds another positive term to 1/<i>R</i><sub>p</sub>, so 1/<i>R</i><sub>p</sub> is bigger than any single 1/<i>R</i><sub>i</sub>, and <i>R</i><sub>p</sub> is therefore smaller than every <i>R</i><sub>i</sub>. The limiting case makes it concrete: two equal <i>R</i> give <i>R</i>/2, already half the smaller one."
        },
        {
          "t": "mcq",
          "q": "<i>n</i> identical resistors give a series resistance <i>R</i><sub>s</sub> and a parallel resistance <i>R</i><sub>p</sub>. The ratio <i>R</i><sub>s</sub> : <i>R</i><sub>p</sub> equals:",
          "opts": [
            { "label": "<i>n</i>", "nudge": "Counts only one of the two factors of <i>n</i>. Series multiplies by <i>n</i> AND parallel divides by <i>n</i>, so both count." },
            { "label": "<i>n</i><sup>2</sup>" },
            { "label": "1", "nudge": "This would mean the arrangement does not matter, which contradicts the whole topic: for <i>n</i> = 4 identical 12 Ω resistors the two values are 48 Ω and 3 Ω." },
            { "label": "1/<i>n</i><sup>2</sup>", "nudge": "Inverted. <i>R</i><sub>s</sub> is the LARGER of the two, so the ratio must be greater than 1." }
          ],
          "correct": 1,
          "solution": "<i>R</i><sub>s</sub> = <i>nR</i> and <i>R</i><sub>p</sub> = <i>R</i>/<i>n</i>, so <i>R</i><sub>s</sub>/<i>R</i><sub>p</sub> = <i>nR</i> × <i>n</i>/<i>R</i> = <i>n</i><sup>2</sup>. Worth memorising as a free check on any identical-resistor question, and it is where the answer 48/3 = 16 came from above."
        },
        {
          "t": "mcq",
          "q": "A 6 Ω and a 3 Ω resistor are in parallel, and this combination is in series with a 4 Ω resistor. The total equivalent resistance is:",
          "opts": [
            { "label": "13 Ω", "nudge": "This adds all three in series, ignoring that two of them share both nodes. 13 Ω also fails the bound test in the other direction: it is larger than 6 + 4." },
            { "label": "6 Ω" },
            { "label": "2 Ω", "nudge": "This stops after the parallel step and forgets that the 4 Ω is still in the path. Every series element must be added on at the end." },
            { "label": "9 Ω", "nudge": "This treats 6 and 3 as though they added, which is the series rule applied to a parallel pair, and then drops the 4 Ω." }
          ],
          "correct": 1,
          "solution": "Parallel pair first: (6 × 3)/9 = 2 Ω, which correctly lands below the smaller branch. Then in series with 4 Ω: 2 + 4 = 6 Ω, which correctly lands above 4 Ω. Doing the two bound checks in that order is faster than the arithmetic."
        },
        {
          "t": "practice",
          "items": [
            { "q": "Resistors of 5 Ω, 10 Ω and 15 Ω are connected in series across a 6 V battery. Find the equivalent resistance and the current.", "a": "<i>R</i><sub>s</sub> = 5 + 10 + 15 = 30 Ω, above the largest member as it must be. <i>I</i> = 6/30 = 0.2 A." },
            { "q": "Two equal resistors give an equivalent of 3 Ω when joined in parallel. What is their equivalent resistance in series?", "a": "Two equal <i>R</i> in parallel give <i>R</i>/2, so <i>R</i>/2 = 3 and <i>R</i> = 6 Ω. In series they give 12 Ω, and 12/3 = 4 = 2<sup>2</sup>, the <i>n</i><sup>2</sup> check." },
            { "q": "A 9 V battery drives a 1 Ω resistor in series with a parallel pair of 4 Ω and 4 Ω. Find the total current and the voltage across the parallel section.", "a": "Parallel pair = 4/2 = 2 Ω, total 1 + 2 = 3 Ω, so <i>I</i> = 9/3 = 3 A. Voltage across the pair = 3 × 2 = 6 V, leaving 3 V across the 1 Ω, and 6 + 3 = 9 V." },
            { "q": "A total current of 6 A enters a parallel combination of 2 Ω and 4 Ω. Find the current in each branch.", "a": "Divider with the other resistor on top: <i>I</i><sub>2Ω</sub> = 6 × 4/6 = 4 A and <i>I</i><sub>4Ω</sub> = 6 × 2/6 = 2 A. They sum to 6 A, and the smaller resistor carries the larger current." },
            { "q": "Twelve identical resistors, each <i>R</i>, form the edges of a cube. Find the equivalent resistance between two diagonally opposite corners.", "a": "5<i>R</i>/6. By symmetry the three corners next to the entry point are at one potential and the three next to the exit are at another, so the cube collapses to 3 parallel edges, then 6, then 3: <i>R</i>/3 + <i>R</i>/6 + <i>R</i>/3 = 5<i>R</i>/6, which is comfortably below the single edge <i>R</i>." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting to invert at the end of a parallel calculation.</b> The formula gives 1/<i>R</i><sub>p</sub>, not <i>R</i><sub>p</sub>. Reporting the reciprocal sum as the answer is the single commonest error in the topic, and the bound check catches it instantly.",
            "<b>Calling side-by-side resistors parallel because of the drawing.</b> They are parallel only if they share BOTH end nodes. Trace the actual connections rather than trusting the layout on the page.",
            "<b>Putting the same resistor on top in the current divider.</b> <i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>): the OTHER one rides on top. Get it backwards and you hand the bigger current to the bigger resistor, which is physically absurd.",
            "<b>Trying to reduce across a bridge.</b> If a resistor joins two midpoints, series and parallel do not apply until you have checked balance. Reduce anyway and you will get a confident, wrong number.",
            "<b>Skipping the bound test.</b> Series must exceed the largest member and parallel must fall below the smallest. It costs three seconds and it is free marks in verification."
          ]
        },
        {
          "t": "protip",
          "html": "reuse what you already know. fluid resistances in a pipe network combine by exactly these two rules, and Poiseuille flow in Mechanical Properties of Fluids proved it: pipes end to end add their resistances, pipes side by side add their flow rates. same algebra, different quantity.<br>and one JEE Advanced tool worth naming even though it is off syllabus: three resistors in a closed triangle (a delta) have no series or parallel pair at all, but they can be swapped for a three-armed star, each star arm being the product of the two delta arms meeting at that node divided by the sum of all three. for an equal delta this is just <i>R</i>/3 per arm. the transformation is exact, not approximate: convert one way and back and you recover your original numbers to the last digit, so if a reconversion misses, the arithmetic slipped and nothing was rounded."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + …", "note": "same current, voltage divides. Result always ABOVE the largest member" },
            { "f": "1/<i>R</i><sub>p</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + …", "note": "same voltage, current divides. Result always BELOW the smallest. Invert at the end" },
            { "f": "<i>R</i><sub>p</sub> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)", "note": "product over sum, for exactly two. Two equal ones give <i>R</i>/2" },
            { "f": "<i>V</i><sub>1</sub> = <i>VR</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>), <i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)", "note": "voltage divider uses its own R on top, current divider uses the other one" },
            { "f": "<i>n</i> equal <i>R</i>: <i>nR</i> and <i>R</i>/<i>n</i>, ratio <i>n</i><sup>2</sup>", "note": "the fastest check available on any identical-resistor question" },
            { "f": "ladder <i>R</i>(1 + √5)/2 · cube 5<i>R</i>/6", "note": "self-similarity for the infinite ladder, symmetry for the cube" }
          ],
          "aids": [
            "series adds, parallel eases",
            "parallel is always less than the least",
            "current divider: the other one rides on top",
            "predict the direction before you compute, then check you landed inside it",
            "if a bridging resistor joins two midpoints, check balance before touching anything"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Energy, Power and the Electricity Bill",
      "chip": "03 POWER",
      "kalam": "max power is not max efficiency",
      "blocks": [
        {
          "t": "p",
          "html": "Every time current flows through a resistor the drifting electrons keep crashing into the lattice and losing energy, and that lost energy reappears as <b>heat</b>. This is why a phone charger warms up, a heater glows and a fuse melts. The cell does work to push charge around the circuit; the resistor converts that work into heat, and sometimes light. Two quantities capture it: <b>energy</b>, the total amount converted, and <b>power</b>, the rate at which it is converted.<br><br>Get power from the definition of potential difference and nothing else. Moving a charge <i>q</i> through a potential difference <i>V</i> takes work <i>W</i> = <i>qV</i>. If this happens steadily with a current <i>I</i> over a time <i>t</i>, then <i>q</i> = <i>It</i>, so <i>W</i> = <i>VIt</i> and the rate of doing work is <i>P</i> = <i>W</i>/<i>t</i> = <i>VI</i>. Using Ohm's law the same power then wears three faces: <i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>. They are the same number, always, for an ohmic resistor. Which face you reach for depends entirely on what is being held constant."
        },
        {
          "t": "think",
          "html": "think of a heater as a toll on a hill road. the toll per car is the voltage, energy handed over per coulomb. the traffic rate is the current, coulombs per second. money collected per second, the power, is naturally <i>V</i> × <i>I</i>. collect for two hours and you have the total energy, which is exactly what the electricity board charges you for, and exactly why the unit on the bill is a kilowatt-hour and not a watt."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POWER, IN THREE FACES",
          "tag": "same number, three routes",
          "main": "<i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>",
          "legend": [
            "<i>P</i> = power, SI unit watt (W) = J s<sup>−1</sup>, dimensions [M L<sup>2</sup> T<sup>−3</sup>]",
            "<i>V</i> = potential difference across the element (V), <i>I</i> = current through it (A), <i>R</i> = its resistance (Ω)",
            "<i>P</i> = <i>VI</i> holds for ANY two-terminal device; the other two faces assume the element is ohmic, so that <i>V</i> = <i>IR</i> may be substituted"
          ],
          "note": "For a real bulb R rises sharply as the filament heats, so its cold resistance is far below its working value and a rated wattage applies only at its rated voltage. Every filament question in this topic is asked at rated voltage for exactly that reason."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENERGY, HEAT AND THE UNIT ON THE BILL",
          "main": "<i>W</i> = <i>Pt</i> = <i>VIt</i> = <i>I</i><sup>2</sup><i>Rt</i> = (<i>V</i><sup>2</sup>/<i>R</i>)<i>t</i><br>Joule's law: <i>H</i> = <i>I</i><sup>2</sup><i>Rt</i> · 1 kWh = 3.6 × 10<sup>6</sup> J",
          "legend": [
            "<i>W</i> = electrical energy converted, and <i>H</i> = heat produced in a resistor. SI unit joule (J), dimensions [M L<sup>2</sup> T<sup>−2</sup>]",
            "<i>t</i> = time (s) for the joule forms, or hours when you work directly in kilowatt-hours",
            "1 kWh is one kilowatt sustained for one hour: 1000 W × 3600 s = 3.6 × 10<sup>6</sup> J. It is an ENERGY, not a power"
          ],
          "note": "The I squared in Joule's law is the practical fact of the whole topic: doubling the current quadruples the heating. That is why heavy loads run on thick cables, and why a loose connection, which is a small extra resistance carrying the full current, is what starts fires."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE POWER FORMULA AND JOULE'S LAW, TAP A LINE",
          "steps": [
            {
              "eq": "moving a charge <i>dq</i> through a potential difference <i>V</i> requires work <i>dW</i> = <i>Vdq</i>",
              "why": "This is the definition of potential difference, not a new result: <i>V</i> IS the work done per unit charge. Nothing about resistors has been assumed yet, which is why <i>P</i> = <i>VI</i> works for a motor and a battery too."
            },
            {
              "eq": "since <i>dq</i> = <i>Idt</i>, we get <i>dW</i> = <i>VIdt</i>, so <i>P</i> = <i>dW</i>/<i>dt</i> = <i>VI</i>",
              "why": "The rate of doing work is power, by definition. In a PURE RESISTOR none of this work is stored: it is handed to the lattice through collisions and emerges as heat, which is why for a resistor the power converted and the heat produced are the same quantity."
            },
            {
              "eq": "substitute Ohm's law two ways: <i>P</i> = (<i>IR</i>)<i>I</i> = <i>I</i><sup>2</sup><i>R</i>, and <i>P</i> = <i>V</i>(<i>V</i>/<i>R</i>) = <i>V</i><sup>2</sup>/<i>R</i>",
              "why": "Two substitutions, two faces, and this is where the choice matters. In a SERIES circuit the current is common, so <i>P</i> = <i>I</i><sup>2</sup><i>R</i> rules and the BIGGER resistor dissipates more. In a PARALLEL circuit the voltage is common, so <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> rules and the SMALLER resistor dissipates more."
            },
            {
              "eq": "over a time <i>t</i>, the heat produced is <i>H</i> = <i>Pt</i> = <i>I</i><sup>2</sup><i>Rt</i>",
              "why": "Joule's law of heating. It is the first law of thermodynamics doing its usual bookkeeping: electrical work in, thermal energy out, with nothing left over inside a resistor because a resistor stores nothing."
            }
          ]
        },
        {
          "t": "def",
          "term": "Which face of the power formula, and why it flips",
          "html": "This one question decides every brightness problem in the chapter, so ask it first: <b>what is shared, the current or the voltage?</b><br><br>In a <b>series</b> circuit the current is shared, so use <i>P</i> = <i>I</i><sup>2</sup><i>R</i>. With <i>I</i> the same for both, the element with the <b>higher resistance</b> dissipates more. Since a bulb's resistance is <i>R</i> = <i>V</i><sup>2</sup><sub>rated</sub>/<i>P</i><sub>rated</sub>, the LOWER-wattage bulb has the HIGHER resistance, so in series the 40 W bulb outshines the 100 W one.<br><br>In a <b>parallel</b> circuit the voltage is shared, so use <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>. With <i>V</i> the same for both, the element with the <b>lower resistance</b> dissipates more, so the 100 W bulb wins, which is what the ratings were designed to mean in the first place. Series: the weaker bulb wins. Parallel: the stronger bulb wins."
        },
        {
          "t": "defgrid",
          "title": "Ratings, units and the household arithmetic",
          "rows": [
            { "k": "Appliance rating", "v": "\"60 W, 240 V\" fixes <i>R</i> = <i>V</i><sup>2</sup><sub>rated</sub>/<i>P</i><sub>rated</sub> AT the rated voltage only. Higher wattage means LOWER resistance" },
            { "k": "Commercial unit", "v": "1 kWh, the \"unit\" on the bill = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> J. Cost = (units) × (rate per unit)" },
            { "k": "Working shortcut", "v": "keep power in kW and time in hours end to end. Never convert to joules for a billing question unless the paper asks for joules" },
            { "k": "Joule heating", "v": "<i>H</i> = <i>I</i><sup>2</sup><i>Rt</i>, so heat goes as the SQUARE of the current. Halve the current and you quarter the heating" },
            { "k": "Max power transfer", "v": "into a load <i>R</i> from a source of EMF <i>E</i> and internal resistance <i>r</i>: peak at <i>R</i> = <i>r</i>, with <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/4<i>r</i> and efficiency exactly 50%" },
            { "k": "Max efficiency", "v": "a DIFFERENT condition, <i>R</i> ≫ <i>r</i>, where almost nothing is lost inside the source but the delivered power is small. Power lines run here, not at the match" }
          ]
        },
        {
          "t": "p",
          "html": "A real battery cannot dump unlimited power into a load, and the reason is its own internal resistance <i>r</i>, which is Topic 04's subject. Take it on trust for one paragraph: the current a source of EMF <i>E</i> drives through a load <i>R</i> is <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), so the power reaching the load is <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>.<br><br>Now watch the two ends. Make <i>R</i> very small and the current is large but almost all the voltage is lost inside the source, so the load gets little. Make <i>R</i> very large and the load voltage is high but the current is tiny, so again it gets little. Somewhere in between the product peaks, and that is the <b>maximum power transfer</b> condition. It has a sting in the tail that JEE tests relentlessly: at the peak the load and the internal resistance carry the same current through the same resistance, so they dissipate equally and the efficiency is exactly 50 percent. Maximum power transfer is deliberately, unavoidably inefficient. It is what you want when matching a signal source to a receiver, and never what you want on a transmission line."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE POWER PEAKS, TAP A LINE",
          "steps": [
            {
              "eq": "<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), so the load power is <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>",
              "why": "<i>E</i> and <i>r</i> belong to the source and are FIXED; only <i>R</i> is ours to choose. That is what makes this a one-variable maximisation and not a two-variable one."
            },
            {
              "eq": "differentiate with respect to <i>R</i> and set to zero: <i>dP</i>/<i>dR</i> = <i>E</i><sup>2</sup>[(<i>R</i> + <i>r</i>)<sup>2</sup> − <i>R</i> · 2(<i>R</i> + <i>r</i>)]/(<i>R</i> + <i>r</i>)<sup>4</sup>",
              "why": "The quotient rule, exactly as in Applications of Derivatives. Nothing here is special to circuits; it is the standard hunt for a stationary point."
            },
            {
              "eq": "cancel one factor of (<i>R</i> + <i>r</i>): <i>dP</i>/<i>dR</i> = <i>E</i><sup>2</sup>(<i>r</i> − <i>R</i>)/(<i>R</i> + <i>r</i>)<sup>3</sup>, which is zero when <i>R</i> = <i>r</i>",
              "why": "And the sign tells you it is a maximum, not a minimum: the derivative is positive for <i>R</i> < <i>r</i> and negative for <i>R</i> > <i>r</i>, so the curve rises to the match point and falls away after it."
            },
            {
              "eq": "substitute <i>R</i> = <i>r</i>: <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup><i>r</i>/(2<i>r</i>)<sup>2</sup> = <i>E</i><sup>2</sup>/4<i>r</i>",
              "why": "Clean and worth memorising. Note it depends on the INTERNAL resistance alone: a source with a small <i>r</i> can deliver more peak power, which is why a car battery can crank an engine and a torch cell cannot."
            },
            {
              "eq": "efficiency at the match: the same current flows through <i>R</i> and <i>r</i>, and they are equal, so they dissipate equally and η = 50%",
              "why": "No calculation needed once you see it, and it is the trap. Maximum POWER and maximum EFFICIENCY are different conditions: efficiency <i>R</i>/(<i>R</i> + <i>r</i>) rises towards 100 percent only as <i>R</i> ≫ <i>r</i>, where the delivered power has collapsed towards zero."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.12 · THE LOAD POWER CURVE",
          "chips": ["power delivered against load resistance"],
          "captions": [
            "Load power against load resistance, for a fixed source. Both ends of the curve are zero and for opposite reasons: a short circuit has plenty of current and no load voltage, an open circuit has plenty of voltage and no current. The peak sits exactly at R = r, at a height E²/4r. Notice how flat the top is, which is a practical comfort: a load anywhere within a factor of about two of r still delivers most of the available power, so a match need not be exact. Notice too how slowly the curve falls to the right, which is why running at R much larger than r costs surprisingly little power and buys a great deal of efficiency."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 1.25], "aspect": 0.66,
              "axisX": "R (Ω)", "axisY": "P (units of E²/4r)",
              "ticksX": { "at": [2, 4, 6, 8], "labels": ["r", "2r", "3r", "4r"] },
              "ticksY": { "at": [0.5, 1], "labels": ["0.5", "1"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.5, 0.64], [1, 0.889], [1.5, 0.98], [2, 1], [2.5, 0.988], [3, 0.96], [4, 0.889], [5, 0.816], [6, 0.75], [8, 0.64], [10, 0.556]], "smooth": true }
              ],
              "segments": [
                { "from": [2, 0], "to": [2, 1], "dash": true, "soft": true },
                { "from": [0, 1], "to": [2, 1], "dash": true, "soft": true }
              ],
              "points": [{ "x": 2, "y": 1, "label": "R = r", "at": "ne" }],
              "labels": [{ "x": 6.6, "y": 0.42, "text": "falls slowly" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any brightness or heating question, in four moves",
          "steps": [
            "<b>Ask what is shared first.</b> Series shares the CURRENT, parallel shares the VOLTAGE. This single question picks the right face of the power formula and does most of the work.",
            "<b>Turn every rating into a resistance.</b> \"<i>P</i> watts at <i>V</i> volts\" means <i>R</i> = <i>V</i><sup>2</sup>/<i>P</i> at that voltage. Higher wattage always means lower resistance, which is the fact that makes the series answer counter-intuitive.",
            "<b>Apply the chosen face and compare.</b> Series and <i>P</i> = <i>I</i><sup>2</sup><i>R</i>: bigger <i>R</i> is brighter, so the lower-wattage bulb wins. Parallel and <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>: smaller <i>R</i> is brighter, so the higher-wattage bulb wins.",
            "<b>For energy and cost, stay in kW and hours.</b> Multiply power in kilowatts by time in hours to get units, then multiply by the tariff. Converting to joules and back is where the arithmetic goes wrong, and the bill is quoted in kWh anyway."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "An electric bulb is rated \"60 W, 240 V\". Find (a) its resistance at the rated voltage and (b) the current it draws.",
          "steps": [
            "(a) From <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>, rearrange: <i>R</i> = <i>V</i><sup>2</sup>/<i>P</i> = (240)<sup>2</sup>/60 = 57600/60 = 960 Ω.",
            "(b) From <i>P</i> = <i>VI</i>: <i>I</i> = <i>P</i>/<i>V</i> = 60/240 = 0.25 A.",
            "Cross-check with the third face: <i>I</i><sup>2</sup><i>R</i> = (0.25)<sup>2</sup> × 960 = 0.0625 × 960 = 60 W. All three faces agree, as they must."
          ],
          "ans": "<i>R</i> = 960 Ω and <i>I</i> = 0.25 A, both at the rated 240 V. Run the same bulb at a lower voltage and the cold filament's resistance is considerably below 960 Ω, so this figure is not a property of the bulb alone."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Two bulbs, \"100 W, 240 V\" and \"40 W, 240 V\", are connected IN SERIES across 240 V. Which glows brighter?",
          "steps": [
            "The trap is to answer \"the 100 W bulb, obviously\". That is right in parallel and wrong in series.",
            "In series the CURRENT is common, so brightness goes as <i>P</i> = <i>I</i><sup>2</sup><i>R</i> and the higher resistance wins.",
            "Turn the ratings into resistances: <i>R</i><sub>100</sub> = 240<sup>2</sup>/100 = 576 Ω and <i>R</i><sub>40</sub> = 240<sup>2</sup>/40 = 1440 Ω.",
            "The lower-wattage bulb has the HIGHER resistance, 1440 Ω against 576 Ω, so with a common current it dissipates 2.5 times as much."
          ],
          "ans": "The 40 W bulb glows brighter in series. Memory hook: in series the weaker bulb wins, in parallel the stronger bulb wins. Neither bulb runs at its rated power here, because neither has its rated 240 V across it."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A household runs a 1.5 kW water geyser for 2 hours every day for 30 days. Electricity costs 8 rupees per kWh. Find the monthly energy consumed and its cost.",
          "steps": [
            "Work directly in kilowatt-hours and never convert: total running time = 2 h/day × 30 days = 60 h.",
            "Energy <i>W</i> = <i>Pt</i> = 1.5 kW × 60 h = 90 kWh, that is 90 units on the bill.",
            "Cost = 90 kWh × 8 rupees/kWh = 720 rupees.",
            "For comparison, in joules: 90 kWh = 90 × 3.6 × 10<sup>6</sup> = 3.24 × 10<sup>8</sup> J, a number no meter reader would ever quote. This is precisely why the kWh exists."
          ],
          "ans": "90 kWh, costing 720 rupees. Note that a kWh is an ENERGY: writing \"90 kW per hour\" or treating the unit as a power is a guaranteed lost mark."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A battery of EMF 12 V has internal resistance 2 Ω. A variable resistor <i>R</i> is the load. Find (a) the <i>R</i> for maximum power transfer, (b) that maximum power, and (c) the efficiency at that point.",
          "steps": [
            "(a) Maximum power transfer occurs when the load matches the internal resistance: <i>R</i> = <i>r</i> = 2 Ω.",
            "(b) <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/4<i>r</i> = (12)<sup>2</sup>/(4 × 2) = 144/8 = 18 W.",
            "(c) At the match, <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) = 12/4 = 3.0 A. Total power drawn from the EMF = <i>EI</i> = 12 × 3.0 = 36 W, of which the load takes <i>I</i><sup>2</sup><i>R</i> = 9 × 2 = 18 W.",
            "Efficiency η = 18/36 = 50%. The other 18 W is dissipated INSIDE the battery, as <i>I</i><sup>2</sup><i>r</i> = 9 × 2 = 18 W, which closes the energy audit exactly."
          ],
          "ans": "<i>R</i> = 2 Ω, <i>P</i><sub>max</sub> = 18 W, η = 50%. Half the energy is wasted in the source, which is why matching is used for signals and never for power distribution: a grid running at 50 percent efficiency would burn half the country's generation inside its own turbines."
        },
        {
          "t": "mcq",
          "q": "The commercial unit of electrical energy, 1 kWh, equals:",
          "opts": [
            { "label": "3.6 × 10<sup>3</sup> J", "nudge": "This uses the kilowatt but only one second, not one hour. Missing a factor of 3600." },
            { "label": "3.6 × 10<sup>6</sup> J" },
            { "label": "1000 J", "nudge": "This is just the kilowatt with no time at all, so it is a power dressed up as an energy. Watch the units: W × s = J, and there is no s here." },
            { "label": "3600 J", "nudge": "This uses the hour but drops the kilo, taking the power as 1 W. Each wrong option here drops exactly one factor, which is how the trap is built." }
          ],
          "correct": 1,
          "solution": "1 kWh = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> J. Build it from the definition each time rather than recalling the digits: a kilowatt sustained for an hour. And keep the dimension in mind, [M L<sup>2</sup> T<sup>−2</sup>], which is an energy and not a power."
        },
        {
          "t": "mcq",
          "q": "Two identical bulbs are connected once in series and once in parallel across the same supply voltage. The ratio of the TOTAL power consumed, series to parallel, is:",
          "opts": [
            { "label": "1 : 1", "nudge": "This ignores that the arrangement changes the total resistance, from 2<i>R</i> to <i>R</i>/2, a factor of four." },
            { "label": "1 : 4" },
            { "label": "4 : 1", "nudge": "Inverted. Series RAISES the total resistance, and with the supply voltage fixed, <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> means more resistance draws LESS power." },
            { "label": "2 : 1", "nudge": "Uses only one factor of two. The resistance changes from 2<i>R</i> to <i>R</i>/2, which is a factor of four, not two." }
          ],
          "correct": 1,
          "solution": "For two equal bulbs of resistance <i>R</i> across a fixed supply <i>V</i>: series gives <i>R</i><sub>s</sub> = 2<i>R</i> and so <i>P</i><sub>s</sub> = <i>V</i><sup>2</sup>/2<i>R</i>; parallel gives <i>R</i><sub>p</sub> = <i>R</i>/2 and so <i>P</i><sub>p</sub> = 2<i>V</i><sup>2</sup>/<i>R</i>. The ratio is (1/2) : 2 = 1 : 4. The supply voltage is fixed here, so this is a <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> question about the WHOLE network."
        },
        {
          "t": "mcq",
          "q": "A bulb rated \"<i>P</i>, <i>V</i>\" is operated at HALF its rated voltage. Assuming its resistance stays constant, the power it now consumes is:",
          "opts": [
            { "label": "<i>P</i>/2", "nudge": "This assumes <i>P</i> is proportional to <i>V</i>, forgetting the square in <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>." },
            { "label": "<i>P</i>/4" },
            { "label": "<i>P</i>", "nudge": "A rating is not a guarantee. It describes what the bulb does at its rated voltage and nowhere else." },
            { "label": "2<i>P</i>", "nudge": "The wrong direction entirely: less voltage across the same resistance means less current AND less voltage, so the power must fall." }
          ],
          "correct": 1,
          "solution": "With <i>R</i> fixed, <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> so <i>P</i> ∝ <i>V</i><sup>2</sup>, and halving <i>V</i> gives a factor of (1/2)<sup>2</sup> = 1/4. In reality the cooler filament also has a lower resistance, so a real bulb does slightly better than a quarter, but the constant-<i>R</i> assumption is what the question states."
        },
        {
          "t": "mcq",
          "q": "For maximum power transfer from a source of internal resistance <i>r</i> to a load <i>R</i>, the condition and the efficiency are:",
          "opts": [
            { "label": "<i>R</i> ≫ <i>r</i> and η = 100%", "nudge": "This describes maximum EFFICIENCY, which is a different optimisation. There the delivered power has collapsed towards zero." },
            { "label": "<i>R</i> = <i>r</i> and η = 50%" },
            { "label": "<i>R</i> ≪ <i>r</i> and η = 50%", "nudge": "The efficiency is right by accident but the condition is wrong: with a tiny load the current is large and almost all of it is wasted inside the source." },
            { "label": "<i>R</i> = <i>r</i> and η = 100%", "nudge": "The most common trap in the topic. The condition is right, but at the match the equal resistances carry the same current and dissipate equally, so exactly half the energy stays inside the source." }
          ],
          "correct": 1,
          "solution": "The power peaks at <i>R</i> = <i>r</i>, where <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/4<i>r</i>. At that point the load and the internal resistance are equal and carry the same current, so each takes half the total, and η = 50% exactly. Maximum power and maximum efficiency are different conditions, and no arrangement achieves both."
        },
        {
          "t": "practice",
          "items": [
            { "q": "A heater is rated \"2000 W, 250 V\". Find its resistance and the current it draws at the rated voltage.", "a": "<i>R</i> = <i>V</i><sup>2</sup>/<i>P</i> = 62500/2000 = 31.25 Ω, and <i>I</i> = <i>P</i>/<i>V</i> = 2000/250 = 8.0 A. Check: <i>I</i><sup>2</sup><i>R</i> = 64 × 31.25 = 2000 W." },
            { "q": "Two bulbs, \"60 W, 220 V\" and \"100 W, 220 V\", are connected in PARALLEL across 220 V. Which glows brighter, and why?", "a": "The 100 W bulb. In parallel each gets the full 220 V, so <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> rules and the lower resistance, which belongs to the higher-wattage bulb, dissipates more. In parallel each bulb actually runs at its rating." },
            { "q": "A current of 5 A flows through a 4 Ω resistor for 10 minutes. Find the heat produced, in joules and in calories, taking 1 cal = 4.2 J.", "a": "<i>H</i> = <i>I</i><sup>2</sup><i>Rt</i> = 25 × 4 × 600 = 6.0 × 10<sup>4</sup> J, which is 60000/4.2 = 1.43 × 10<sup>4</sup> cal." },
            { "q": "An appliance of resistance 50 Ω is connected across a 200 V supply. Find the power consumed and the energy used in 3 hours, in kWh.", "a": "<i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> = 40000/50 = 800 W = 0.8 kW. Energy = 0.8 kW × 3 h = 2.4 kWh." },
            { "q": "A cell of EMF 6 V and internal resistance 1 Ω feeds a load <i>R</i>. (a) For what <i>R</i> is the load power maximum? (b) What is that maximum power? (c) What load power results if instead <i>R</i> = 5 Ω?", "a": "(a) <i>R</i> = <i>r</i> = 1 Ω. (b) <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/4<i>r</i> = 36/4 = 9.0 W. (c) <i>I</i> = 6/(5 + 1) = 1.0 A, so <i>P</i> = <i>I</i><sup>2</sup><i>R</i> = 5.0 W. Less power than at the match, but the efficiency is now 5/6, about 83 percent." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reaching for the wrong face of the power formula.</b> Series shares the current so <i>P</i> = <i>I</i><sup>2</sup><i>R</i> and the bigger <i>R</i> wins; parallel shares the voltage so <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i> and the smaller <i>R</i> wins. Choosing wrongly inverts every brightness answer.",
            "<b>Treating a bulb's rated resistance as fixed at all voltages.</b> \"60 W, 240 V\" gives <i>R</i> only AT 240 V; the cold filament has a much lower resistance, which is why a bulb draws a surge when you switch it on.",
            "<b>Forgetting the square in <i>P</i> ∝ <i>V</i><sup>2</sup>.</b> Halving the voltage quarters the power, and doubling the current quadruples the heating. Both come from squares and both are routinely halved or doubled instead.",
            "<b>Confusing maximum power with maximum efficiency.</b> They occur at different conditions, <i>R</i> = <i>r</i> against <i>R</i> ≫ <i>r</i>, and claiming 100 percent efficiency at the match is the most punished error in the topic.",
            "<b>Treating the kWh as a power.</b> It is an energy, 3.6 × 10<sup>6</sup> J, so a bill is a count of energy units and \"kW per hour\" is meaningless."
          ]
        },
        {
          "t": "protip",
          "html": "for anything with a bill in it, stay in kilowatts and hours from the first line to the last. power in kW times time in hours gives units, units times the tariff gives the money, and joules never enter the calculation.<br>for anything with a brightness comparison in it, ask one question before you write anything down: is the current shared or is the voltage shared? that picks the formula, and the formula gives the answer in one line. and keep this pair handy as a check on max-power questions: the peak height is <i>E</i><sup>2</sup>/4<i>r</i> and the efficiency there is 50 percent, never more."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>", "note": "watts. The first face works for any device; the other two need an ohmic one" },
            { "f": "<i>H</i> = <i>I</i><sup>2</sup><i>Rt</i>", "note": "Joule's law, in joules. Heat goes as the SQUARE of the current" },
            { "f": "1 kWh = 3.6 × 10<sup>6</sup> J", "note": "the unit on the bill. An energy, not a power. Cost = units × tariff" },
            { "f": "<i>R</i> = <i>V</i><sup>2</sup><sub>rated</sub>/<i>P</i><sub>rated</sub>", "note": "higher wattage means LOWER resistance, and holds only at the rated voltage" },
            { "f": "series ⟹ <i>I</i><sup>2</sup><i>R</i>, parallel ⟹ <i>V</i><sup>2</sup>/<i>R</i>", "note": "so in series the bigger R is brighter, in parallel the smaller R is brighter" },
            { "f": "<i>R</i> = <i>r</i>: <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/4<i>r</i>, η = 50%", "note": "maximum power transfer, and it is deliberately half-wasteful" }
          ],
          "aids": [
            "series, the weaker bulb wins; parallel, the stronger bulb wins",
            "ask what is shared, current or voltage, and the formula picks itself",
            "power scales with voltage squared, heating with current squared",
            "max power is not max efficiency: R = r gives exactly 50 percent",
            "for a bill, live in kW and hours and never visit joules"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Real Cells: EMF, Internal Resistance and Grouping",
      "chip": "04 SOURCES",
      "kalam": "draw current, lose voltage",
      "blocks": [
        {
          "t": "p",
          "html": "A cell is a charge pump. Chemical reactions inside it do work to lift positive charge from the low-potential terminal to the high-potential terminal, against the electric field, exactly as a water pump lifts water uphill. The <b>electromotive force</b>, written <i>E</i>, is the energy this pump gives to <b>each coulomb</b> of charge. Despite the name it is <b>not a force</b>: its unit is the volt, energy per charge, and no amount of algebra can turn joules per coulomb into newtons. It is the full push the cell can offer when nothing is drawing from it.<br><br>But no real pump is perfect. The chemicals and electrodes inside the cell themselves resist the flow of charge, and that is the <b>internal resistance</b> <i>r</i>. Sitting idle on open circuit, with no current, the cell shows its full EMF across its terminals. The instant you connect a load and a current <i>I</i> flows, some of the cell's push is spent overcoming its own internal resistance, dropping <i>Ir</i> volts <b>inside</b> the cell. What is left for the outside world, the <b>terminal voltage</b> <i>V</i>, is therefore less than the EMF: <i>V</i> = <i>E</i> − <i>Ir</i> while discharging."
        },
        {
          "t": "think",
          "html": "a tank on the roof and a tap downstairs. the EMF is the full pressure the tank's height gives you. the narrow, slightly rusty pipe inside is the internal resistance, and it eats some pressure whenever water actually flows. shut the tap and you measure full pressure, which is the open-circuit EMF. open it wide and the pressure at the tap sags, which is the terminal voltage. open it fully with nothing outside at all, a short circuit, and the flow is limited only by that inner pipe: <i>I</i> = <i>E</i>/<i>r</i>, large but finite, and hot enough to be dangerous."
        },
        {
          "t": "def",
          "term": "EMF, terminal voltage, and what an ideal cell would be",
          "html": "<b>EMF</b> <i>E</i> = <i>W</i>/<i>q</i> is a property of the CELL and never changes with what you connect to it. <b>Terminal voltage</b> <i>V</i> is a property of the CIRCUIT and depends entirely on the current being drawn. They are equal only on open circuit, where <i>I</i> = 0.<br><br>Two limiting cases pin the meaning down. Let <i>r</i> go to zero and <i>V</i> = <i>E</i> − <i>Ir</i> becomes <i>V</i> = <i>E</i> for every current: that is an <b>ideal source</b>, one whose terminal voltage never sags. At the same time the short-circuit current <i>E</i>/<i>r</i> goes to infinity, which is why an ideal cell is a useful fiction and not an object: a real cell is protected from destroying itself by the very resistance that makes it imperfect. Going the other way, <b>charging</b> reverses the current, so an external source must overcome the cell's EMF <i>and</i> its internal drop, and the terminal voltage becomes <i>V</i> = <i>E</i> + <i>Ir</i>, which is <b>greater</b> than the EMF. If you ever compute a discharging cell with <i>V</i> > <i>E</i>, or a charging one with <i>V</i> < <i>E</i>, a sign has slipped."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE REAL CELL",
          "tag": "one sign, two situations",
          "main": "<i>E</i> = <i>W</i>/<i>q</i><br><i>V</i> = <i>E</i> − <i>Ir</i> (discharging) · <i>V</i> = <i>E</i> + <i>Ir</i> (charging)",
          "legend": [
            "<i>E</i> = EMF, the work the source does per unit charge, SI unit volt (V) = J C<sup>−1</sup>, dimensions [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]",
            "<i>V</i> = terminal voltage, the potential difference actually available across the cell's terminals (V)",
            "<i>I</i> = current through the cell (A), <i>r</i> = internal resistance (Ω), <i>W</i> = work done by the source (J), <i>q</i> = charge moved (C)"
          ],
          "note": "The sign follows the direction of the current through the cell, not the cell's polarity. Current LEAVING the positive terminal is discharge and the drop subtracts; current forced INTO the positive terminal is charging and the drop adds."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.13 · WHAT IS ACTUALLY INSIDE A BATTERY",
          "chips": ["EMF and internal resistance in series"],
          "captions": [
            "The left branch is the whole battery, not just the cell symbol: an ideal EMF E in series with the internal resistance r, and everything between the two terminal dots belongs INSIDE the case. That series pair is why the voltmeter across the terminals reads V = E − Ir and not E: the same current that flows through R also flows through r, and the Ir it drops there never leaves the battery. Open the circuit and I = 0, so the r branch drops nothing and the meter reads the full EMF. That is the whole trick behind measuring an EMF: stop the current."
          ],
          "frames": [
            {
              "aspect": 0.5,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [2, 5], "to": [2, 4.2] },
                  { "from": [2, 3.0], "to": [2, 2.8] },
                  { "from": [2, 1.6], "to": [2, 1] },
                  { "from": [2, 1], "to": [9, 1] },
                  { "from": [9, 5], "to": [2, 5] },
                  { "from": [9, 1], "to": [9, 2] },
                  { "from": [9, 4], "to": [9, 5] },
                  { "from": [5.5, 1], "to": [5.5, 2] },
                  { "from": [5.5, 4], "to": [5.5, 5] }
                ],
                "parts": [
                  { "at": [2, 4.2], "to": [2, 3.0], "kind": "cell", "label": "E" },
                  { "at": [2, 2.8], "to": [2, 1.6], "kind": "R", "label": "r", "tone": "red" },
                  { "at": [5.5, 2], "to": [5.5, 4], "kind": "V", "label": "V", "tone": "amber" },
                  { "at": [9, 2], "to": [9, 4], "kind": "R", "label": "R" }
                ],
                "nodes": [
                  { "at": [2, 1], "junction": true },
                  { "at": [2, 5], "junction": true },
                  { "at": [5.5, 1], "junction": true },
                  { "at": [5.5, 5], "junction": true }
                ],
                "currents": [{ "at": [3.4, 0.45], "to": [4.8, 0.45], "label": "I" }]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE TERMINAL VOLTAGE SAGS, TAP A LINE",
          "steps": [
            {
              "eq": "a cell of EMF <i>E</i> and internal resistance <i>r</i> drives a steady current <i>I</i> through an external resistor <i>R</i>",
              "why": "One loop, three elements, and the internal resistance is genuinely IN SERIES with the EMF because every electron that leaves the terminal has first crossed the electrolyte."
            },
            {
              "eq": "go once round the loop: the EMF supplies <i>E</i> per coulomb, which is spent on the internal drop <i>Ir</i> and the external drop <i>IR</i>. So <i>E</i> = <i>Ir</i> + <i>IR</i>",
              "why": "Energy conservation, the same bookkeeping the first law of thermodynamics does: what the source hands each coulomb is exactly what the resistances take from it over one lap, because nothing is stored anywhere."
            },
            {
              "eq": "hence <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), and the terminal voltage is what appears across the EXTERNAL resistor: <i>V</i> = <i>IR</i>",
              "why": "The terminals are the two points where the external circuit connects, so the potential difference between them is by definition the drop across everything outside the cell."
            },
            {
              "eq": "substitute <i>IR</i> = <i>E</i> − <i>Ir</i>: <i>V</i> = <i>E</i> − <i>Ir</i>",
              "why": "The terminal voltage is the full EMF minus the volts lost inside. Set <i>I</i> = 0 and you get <i>V</i> = <i>E</i>, which is why an open-circuit voltmeter reads the EMF, to a good approximation."
            },
            {
              "eq": "rearranged for measurement: <i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>(<i>E</i>/<i>V</i> − 1)",
              "why": "Lost voltage divided by the current you drew. This is the fastest route to <i>r</i> in an exam, because both quantities on the right are things a meter reports directly, and it needs no simultaneous equations at all."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CURRENT, INTERNAL RESISTANCE, AND THE TWO EXTREMES",
          "main": "<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>),  <i>V</i> = <i>IR</i> = <i>ER</i>/(<i>R</i> + <i>r</i>)<br><i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>(<i>E</i>/<i>V</i> − 1)",
          "legend": [
            "<i>R</i> = external load (Ω), <i>r</i> = internal resistance (Ω), <i>I</i> = current (A), <i>E</i> = EMF (V), <i>V</i> = terminal voltage (V)",
            "open circuit (<i>R</i> infinite, so <i>I</i> = 0): <i>V</i> = <i>E</i>, the terminal voltage equals the EMF",
            "short circuit (<i>R</i> = 0): <i>I</i><sub>max</sub> = <i>E</i>/<i>r</i> and <i>V</i> = 0. Large but FINITE, capped by <i>r</i> alone"
          ],
          "note": "Not infinite. \"No external resistance means infinite current\" is a standing misconception, and the internal resistance is precisely what rules it out. A 2 V cell with r = 0.1 ohm shorts at 20 A, which is enough to ruin the cell and not enough to break physics."
        },
        {
          "t": "proc",
          "title": "Finding E and r from measurements",
          "steps": [
            "<b>If you are given an open-circuit reading, use it directly.</b> The open-circuit terminal voltage IS the EMF, because no current flows and there is no internal drop to subtract.",
            "<b>Get the current from the EXTERNAL branch, never from the cell.</b> With a load <i>R</i> across the terminals reading <i>V</i>, the current is <i>I</i> = <i>V</i>/<i>R</i>. Trying to find <i>I</i> from <i>E</i> and <i>r</i> before you know <i>r</i> goes round in circles.",
            "<b>Then <i>r</i> is the lost voltage over the current drawn:</b> <i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i>. One line, no simultaneous equations.",
            "<b>With TWO loads and no open-circuit reading, write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) for each case and equate.</b> Two measurements close a system with two unknowns; the EMF cancels and <i>r</i> falls out in one step, then back-substitute for <i>E</i>.",
            "<b>Sanity-check the sign at the end.</b> A discharging cell must have <i>V</i> < <i>E</i> and a positive <i>r</i>. A negative internal resistance means you subtracted the wrong way round."
          ]
        },
        {
          "t": "p",
          "html": "One cell can only push so hard and supply so much. To get more, we combine cells, and <i>how</i> we combine them decides whether we gain voltage or current capacity.<br><br><b>Cells in series</b> are stacked head to tail, like several people lifting a load to successive shelves: each adds its lift, so the EMFs <b>add</b>. But each cell also brings its own internal resistance into the line, so those add too. Series grouping is what you want when the external resistance is <b>large</b>, because then you need a big push and the modest extra internal resistance hardly matters. A TV remote stacks two AA cells in series for 3 V.<br><br><b>Cells in parallel</b> are placed side by side, all positives joined and all negatives joined, like several people sharing the same lifting job. The voltage stays at one cell's worth, and it is a hard rule that EMFs do <b>not</b> add in parallel. What does change is that the internal resistances are now in parallel, so the combined internal resistance <b>drops</b> to <i>r</i>/<i>n</i>. Parallel grouping is what you want when the external resistance is <b>small</b>, because then <i>r</i> is what chokes the current. Two car batteries wired in parallel crank a heavy engine; two in series would just be 24 V.<br><br>For the best of both, use <b>mixed grouping</b>: rows of cells in series, several such rows in parallel. Choosing how many go in each row tunes the pack to deliver the maximum current into a given load."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · GROUPING CELLS",
          "tag": "reduce any pack to one equivalent cell first",
          "main": "series (<i>n</i> identical): <i>E</i><sub>eq</sub> = <i>nE</i>, <i>r</i><sub>eq</sub> = <i>nr</i><br>parallel (<i>n</i> identical): <i>E</i><sub>eq</sub> = <i>E</i>, <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i><br>two unequal in parallel: <i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>), <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>)",
          "legend": [
            "<i>E</i>, <i>r</i> = the EMF (V) and internal resistance (Ω) of one identical cell; <i>n</i> = how many, a pure count",
            "<i>E</i><sub>eq</sub>, <i>r</i><sub>eq</sub> = the EMF and internal resistance of the single cell the whole pack behaves as; then <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>)",
            "if <i>k</i> of the <i>n</i> series cells are REVERSED, the net EMF is (<i>n</i> − 2<i>k</i>)<i>E</i>, because each reversal swings that cell from +<i>E</i> to −<i>E</i>"
          ],
          "note": "In the unequal parallel formula each EMF is weighted by the OTHER cell's internal resistance. Read it as a conductance-weighted average, (E1/r1 + E2/r2) divided by (1/r1 + 1/r2): the cell with the lower internal resistance has more say."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.14 AND 3.15 · STACKING CELLS TWO WAYS",
          "chips": ["n cells in one series row", "m rows of n cells"],
          "captions": [
            "Series. Every cell is head to tail with the next, so one current threads all of them and their EMFs add to nE. So do their internal resistances, giving nr, which is the price of the extra voltage. Reverse any one cell and the net EMF falls by 2E, not E, because that cell swings from pushing to opposing.",
            "Mixed grouping, drawn here as three rows of two. Each row is a series chain of EMF nE and resistance nr, and the rows hang in parallel between two bus bars, so the pack behaves as one cell of EMF nE and internal resistance nr/m. The two pure cases are just the ends of this picture: one row is pure series, one cell per row is pure parallel. Choosing m and n is choosing where on that scale to sit."
          ],
          "frames": [
            {
              "aspect": 0.45,
              "circuit": {
                "grid": [14, 6],
                "wires": [
                  { "from": [1, 1], "to": [2, 1] },
                  { "from": [4, 1], "to": [5, 1] },
                  { "from": [7, 1], "to": [8, 1] },
                  { "from": [10, 1], "to": [13, 1] },
                  { "from": [13, 1], "to": [13, 2] },
                  { "from": [13, 4], "to": [13, 5] },
                  { "from": [13, 5], "to": [1, 5] },
                  { "from": [1, 5], "to": [1, 1] }
                ],
                "parts": [
                  { "at": [2, 1], "to": [4, 1], "kind": "cell", "label": "E, r" },
                  { "at": [5, 1], "to": [7, 1], "kind": "cell", "label": "E, r" },
                  { "at": [8, 1], "to": [10, 1], "kind": "cell", "label": "E, r" },
                  { "at": [13, 2], "to": [13, 4], "kind": "R", "label": "R", "tone": "amber" }
                ],
                "nodes": [{ "at": [11.6, 1], "label": "···" }],
                "currents": [{ "at": [5.2, 2.1], "to": [6.8, 2.1], "label": "I" }]
              }
            },
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [12, 8],
                "wires": [
                  { "from": [2, 1], "to": [2, 5] },
                  { "from": [9, 1], "to": [9, 5] },
                  { "from": [4, 1], "to": [5, 1] },
                  { "from": [7, 1], "to": [9, 1] },
                  { "from": [4, 3], "to": [5, 3] },
                  { "from": [7, 3], "to": [9, 3] },
                  { "from": [4, 5], "to": [5, 5] },
                  { "from": [7, 5], "to": [9, 5] },
                  { "from": [9, 1], "to": [10.5, 1] },
                  { "from": [10.5, 1], "to": [10.5, 2.5] },
                  { "from": [10.5, 5.5], "to": [10.5, 7] },
                  { "from": [10.5, 7], "to": [2, 7] },
                  { "from": [2, 5], "to": [2, 7] }
                ],
                "parts": [
                  { "at": [2, 1], "to": [4, 1], "kind": "cell", "label": "E, r" },
                  { "at": [5, 1], "to": [7, 1], "kind": "cell" },
                  { "at": [2, 3], "to": [4, 3], "kind": "cell" },
                  { "at": [5, 3], "to": [7, 3], "kind": "cell" },
                  { "at": [2, 5], "to": [4, 5], "kind": "cell" },
                  { "at": [5, 5], "to": [7, 5], "kind": "cell" },
                  { "at": [10.5, 2.5], "to": [10.5, 5.5], "kind": "R", "label": "R", "tone": "amber" }
                ],
                "nodes": [
                  { "at": [2, 1], "junction": true },
                  { "at": [2, 3], "junction": true },
                  { "at": [2, 5], "junction": true },
                  { "at": [9, 1], "junction": true },
                  { "at": [9, 3], "junction": true },
                  { "at": [9, 5], "junction": true }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MIXED GROUPING AND THE BEST ARRANGEMENT, TAP A LINE",
          "steps": [
            {
              "eq": "<i>m</i> rows in parallel, each row holding <i>n</i> identical cells in series. Each row has EMF <i>nE</i> and resistance <i>nr</i>",
              "why": "Going along one row is a pure series problem, already solved: the EMFs stack and so do the internal resistances. Nothing new is assumed yet."
            },
            {
              "eq": "the <i>m</i> rows are identical and in parallel, so <i>E</i><sub>eq</sub> = <i>nE</i> and <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i>, giving <i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>/<i>m</i>) = <i>mnE</i>/(<i>mR</i> + <i>nr</i>)",
              "why": "Identical branches in parallel share the load equally, so the EMF is one row's worth and the resistances combine by the usual <i>r</i>/<i>m</i> rule. The last form, with the denominator cleared, is the one to maximise."
            },
            {
              "eq": "the total number of cells <i>N</i> = <i>mn</i> is fixed, so maximising <i>I</i> means MINIMISING the denominator <i>mR</i> + <i>nr</i>",
              "why": "The numerator <i>mnE</i> = <i>NE</i> is a constant once you have decided how many cells you own. Only the denominator is yours to shape."
            },
            {
              "eq": "the product (<i>mR</i>)(<i>nr</i>) = <i>mnRr</i> = <i>NRr</i> is also constant, so by AM-GM the sum <i>mR</i> + <i>nr</i> is least when the two terms are EQUAL",
              "why": "The arithmetic mean of two positive numbers with a fixed product is smallest when they are equal, which you proved in Sequences and Series. One line, and no calculus needed."
            },
            {
              "eq": "<i>mR</i> = <i>nr</i>, that is <i>R</i> = <i>nr</i>/<i>m</i> = <i>r</i><sub>eq</sub>, and then <i>I</i><sub>max</sub> = <i>nE</i>/2<i>R</i>",
              "why": "Arrange the cells so the pack's INTERNAL resistance matches the EXTERNAL one. It is the same match condition as maximum power transfer in Topic 03, reached here by choosing a physical arrangement rather than by turning a dial, and both come down to the same inequality."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Which grouping, and when",
          "rows": [
            { "k": "Large external <i>R</i>", "v": "SERIES. Then <i>R</i> ≫ <i>nr</i> and <i>I</i> ≈ <i>nE</i>/<i>R</i>, that is <i>n</i> times the single-cell current. The extra internal resistance hardly matters" },
            { "k": "Small external <i>R</i>", "v": "PARALLEL. Then <i>r</i>/<i>n</i> is what limits the current, and <i>I</i> ≈ <i>nE</i>/<i>r</i>, that is <i>n</i> times the single-cell short-circuit current" },
            { "k": "Maximum current, <i>N</i> cells", "v": "MIXED, with <i>mR</i> = <i>nr</i> and <i>mn</i> = <i>N</i>. Solve the two together; there is one integer solution and it is what the question wants" },
            { "k": "A reversed cell", "v": "changes the net series EMF by 2<i>E</i>, not <i>E</i>. Three 2 V cells with one reversed give (3 − 2)(2) = 2 V, and <i>r</i><sub>eq</sub> is still 3<i>r</i>" },
            { "k": "Unequal cells in parallel", "v": "use the weighted formula, never <i>r</i>/<i>n</i>. The stronger cell can drive current BACKWARDS through the weaker one, which is exactly what charging is" },
            { "k": "Always", "v": "collapse the pack to one equivalent cell (<i>E</i><sub>eq</sub>, <i>r</i><sub>eq</sub>) first, then <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>). One formula handles every case" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A cell of EMF 12 V and internal resistance 0.5 Ω is connected to an external resistance of 5.5 Ω. Find the current in the circuit and the terminal voltage of the cell.",
          "steps": [
            "Current: <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) = 12/(5.5 + 0.5) = 12/6 = 2.0 A.",
            "Terminal voltage: <i>V</i> = <i>E</i> − <i>Ir</i> = 12 − (2.0)(0.5) = 12 − 1.0 = 11 V.",
            "Cross-check the other way: <i>V</i> = <i>IR</i> = 2.0 × 5.5 = 11 V. The two routes agree."
          ],
          "ans": "<i>I</i> = 2.0 A and <i>V</i> = 11 V. The terminal voltage sits below the EMF by exactly the internal drop, 1.0 V, which is the volts the battery spent on itself."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A cell reads 1.5 V across its terminals on OPEN circuit. Connected to a 4 Ω resistor, the terminal voltage falls to 1.2 V. Find its internal resistance.",
          "steps": [
            "The trap is trying to find the current from <i>E</i> and <i>r</i> before you know <i>r</i>, which goes round in circles. Get the current from the EXTERNAL branch instead.",
            "Open circuit means no current, so no internal drop: <i>E</i> = 1.5 V.",
            "Loaded current, straight from Ohm's law on the load: <i>I</i> = <i>V</i>/<i>R</i> = 1.2/4 = 0.30 A.",
            "The lost voltage is the internal drop: <i>E</i> − <i>V</i> = <i>Ir</i>, so 1.5 − 1.2 = 0.30<i>r</i>, giving <i>r</i> = 0.3/0.3 = 1.0 Ω."
          ],
          "ans": "<i>r</i> = 1.0 Ω. The hook worth carrying into the exam: voltage you lost, divided by current you drew, is the internal resistance."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Connected to a 10 Ω resistor a cell drives 0.50 A; connected to a 4 Ω resistor the same cell drives 1.0 A. Find its EMF and internal resistance.",
          "steps": [
            "Two measurements, two unknowns. Write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) for each case: <i>E</i> = 0.50(10 + <i>r</i>) and <i>E</i> = 1.0(4 + <i>r</i>).",
            "Equate them, and the EMF cancels: 0.50(10 + <i>r</i>) = 1.0(4 + <i>r</i>), that is 5 + 0.5<i>r</i> = 4 + <i>r</i>.",
            "So 1 = 0.5<i>r</i> and <i>r</i> = 2.0 Ω.",
            "Back-substitute into the second equation: <i>E</i> = 1.0(4 + 2) = 6.0 V. Check with the first: 0.50(10 + 2) = 6.0 V."
          ],
          "ans": "<i>E</i> = 6.0 V and <i>r</i> = 2.0 Ω. This two-load method is the standard laboratory route to both quantities and a JEE staple, and it needs no voltmeter at all."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "You have 24 identical cells, each of EMF 1.5 V and internal resistance 0.5 Ω, to drive an external resistance <i>R</i> = 3 Ω. Arrange them as <i>m</i> rows of <i>n</i> series cells, with <i>mn</i> = 24, to deliver the MAXIMUM current, and find that current.",
          "steps": [
            "Maximum-current condition: <i>mR</i> = <i>nr</i>, so <i>m</i>(3) = <i>n</i>(0.5) and <i>n</i>/<i>m</i> = 3/0.5 = 6, that is <i>n</i> = 6<i>m</i>.",
            "Combine with <i>mn</i> = 24: <i>m</i>(6<i>m</i>) = 24, so 6<i>m</i><sup>2</sup> = 24, <i>m</i><sup>2</sup> = 4 and <i>m</i> = 2, giving <i>n</i> = 12.",
            "So arrange 2 rows of 12 cells in series. Then <i>E</i><sub>eq</sub> = <i>nE</i> = 12 × 1.5 = 18 V and <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i> = (12 × 0.5)/2 = 3.0 Ω.",
            "<i>I</i><sub>max</sub> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) = 18/(3 + 3) = 18/6 = 3.0 A.",
            "Compare the two pure cases with the same 24 cells: all in series gives 36/(3 + 12) = 2.4 A, all in parallel gives 1.5/(3 + 0.021) = 0.50 A. The mixed arrangement beats both."
          ],
          "ans": "2 rows of 12 cells, giving <i>I</i><sub>max</sub> = 3.0 A. Note that <i>r</i><sub>eq</sub> = 3.0 Ω came out exactly equal to <i>R</i>, which is the maximum-power-transfer condition from Topic 03 reached by choosing an arrangement rather than by turning a dial."
        },
        {
          "t": "mcq",
          "q": "The terminal voltage of a cell is LESS than its EMF when the cell is:",
          "opts": [
            { "label": "on open circuit", "nudge": "On open circuit <i>I</i> = 0, so there is no internal drop at all and <i>V</i> = <i>E</i> exactly. Equal, not less." },
            { "label": "discharging, that is supplying current" },
            { "label": "being charged", "nudge": "Charging is the other sign: <i>V</i> = <i>E</i> + <i>Ir</i>, so the terminal voltage is GREATER than the EMF. That is how a charger forces current in." },
            { "label": "at absolute zero", "nudge": "Temperature does change <i>r</i> in a real cell, but nothing here sets the relation between <i>V</i> and <i>E</i>. Only the current direction does." }
          ],
          "correct": 1,
          "solution": "While discharging, current leaves the positive terminal and the internal drop subtracts: <i>V</i> = <i>E</i> − <i>Ir</i> < <i>E</i>. The three cases are worth holding together: open circuit gives <i>V</i> = <i>E</i>, discharging gives <i>V</i> < <i>E</i>, charging gives <i>V</i> > <i>E</i>."
        },
        {
          "t": "mcq",
          "q": "A cell of EMF <i>E</i> and internal resistance <i>r</i> is short-circuited. The current drawn is:",
          "opts": [
            { "label": "zero", "nudge": "That would need infinite resistance, which is an OPEN circuit, the exact opposite of a short." },
            { "label": "<i>E</i>/<i>r</i>" },
            { "label": "infinite", "nudge": "The standing misconception: no external resistance does not mean no resistance. The internal <i>r</i> is still in the loop and it caps the current." },
            { "label": "<i>Er</i>", "nudge": "Dimensionally impossible: volts times ohms is not amperes. A quick unit check kills this option without any physics." }
          ],
          "correct": 1,
          "solution": "With <i>R</i> = 0, <i>I</i> = <i>E</i>/(0 + <i>r</i>) = <i>E</i>/<i>r</i>, which is large but strictly finite. A 2 V cell with <i>r</i> = 0.1 Ω shorts at 20 A, enough to overheat and ruin it. The limit <i>r</i> → 0 is what would send this to infinity, which is exactly why an ideal cell is a fiction."
        },
        {
          "t": "mcq",
          "q": "<i>n</i> identical cells of EMF <i>E</i> and internal resistance <i>r</i> are connected in PARALLEL. The equivalent EMF and internal resistance are:",
          "opts": [
            { "label": "<i>nE</i> and <i>nr</i>", "nudge": "That is the SERIES result. In parallel the cells sit across the same pair of nodes, so they cannot stack their EMFs any more than two resistors in parallel can stack their voltages." },
            { "label": "<i>E</i> and <i>r</i>/<i>n</i>" },
            { "label": "<i>nE</i> and <i>r</i>/<i>n</i>", "nudge": "Takes the series behaviour of the EMF and the parallel behaviour of the resistance. Both must come from the same arrangement." },
            { "label": "<i>E</i> and <i>nr</i>", "nudge": "The other half-and-half mix. Adding parallel branches can only LOWER the combined internal resistance, never raise it." }
          ],
          "correct": 1,
          "solution": "In parallel every cell has the same pair of terminals, so the combined EMF is one cell's worth, <i>E</i>. The <i>n</i> internal resistances are genuinely in parallel, giving <i>r</i>/<i>n</i>. That is why parallel grouping helps with a SMALL external resistance: it attacks the thing that is limiting the current."
        },
        {
          "t": "mcq",
          "q": "In a mixed grouping of cells, the current through the external resistance <i>R</i> is maximum when:",
          "opts": [
            { "label": "<i>R</i> is as large as possible", "nudge": "<i>R</i> is given by the problem, not chosen, and a large <i>R</i> throttles the current in any case. The thing you get to choose is the ARRANGEMENT." },
            { "label": "<i>R</i> equals the pack's equivalent internal resistance" },
            { "label": "all the cells are in series", "nudge": "Optimal only when <i>R</i> happens to be large. For 24 cells into 3 Ω, all-series gives 2.4 A against the matched arrangement's 3.0 A." },
            { "label": "all the cells are in parallel", "nudge": "Optimal only when <i>R</i> happens to be very small. For 24 cells into 3 Ω it gives about 0.50 A, the worst of the three." }
          ],
          "correct": 1,
          "solution": "Maximise <i>I</i> = <i>mnE</i>/(<i>mR</i> + <i>nr</i>) with <i>mn</i> fixed. The numerator is constant, the product of the two denominator terms is constant, so by AM-GM the sum is least when <i>mR</i> = <i>nr</i>, that is when <i>R</i> = <i>nr</i>/<i>m</i> = <i>r</i><sub>eq</sub>. All-series and all-parallel are just the two extreme arrangements, each optimal only for its own extreme of <i>R</i>."
        },
        {
          "t": "practice",
          "items": [
            { "q": "A battery of EMF 9 V gives a terminal voltage of 8.4 V when supplying 1.2 A. Find its internal resistance.", "a": "<i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = (9 − 8.4)/1.2 = 0.6/1.2 = 0.50 Ω. Lost voltage over current drawn, in one line." },
            { "q": "A cell gives 2.0 A through a 3 Ω resistor and 1.2 A through a 5 Ω resistor. Find its EMF and internal resistance.", "a": "2.0(3 + <i>r</i>) = 1.2(5 + <i>r</i>) gives 6 + 2<i>r</i> = 6 + 1.2<i>r</i>, so 0.8<i>r</i> = 0 and <i>r</i> = 0, with <i>E</i> = 6.0 V. A genuinely ideal cell, and the limiting case of the whole topic met as an answer." },
            { "q": "A 12 V battery of internal resistance 0.4 Ω is charged by a 15 V source through a 2.6 Ω resistor. Find the charging current, the battery's terminal voltage while charging, and the power dissipated as heat inside the battery.", "a": "Net driving voltage = 15 − 12 = 3 V across 2.6 + 0.4 = 3.0 Ω, so <i>I</i> = 1.0 A. Charging, so <i>V</i> = <i>E</i> + <i>Ir</i> = 12 + 0.4 = 12.4 V, above the EMF as it must be. Internal heat = <i>I</i><sup>2</sup><i>r</i> = 0.40 W." },
            { "q": "Three identical cells of EMF 2 V and <i>r</i> = 1 Ω are in series but ONE is reversed. With an external resistance of 1 Ω, find the current.", "a": "Net EMF = (3 − 2 × 1)(2) = 2.0 V, since a reversal costs 2<i>E</i>. The internal resistances still all add: <i>r</i><sub>eq</sub> = 3.0 Ω. So <i>I</i> = 2/(1 + 3) = 0.50 A." },
            { "q": "32 identical cells, each 1.2 V with <i>r</i> = 0.4 Ω, must drive a 0.8 Ω load with maximum current. Find the best arrangement of <i>m</i> rows of <i>n</i> and the resulting current.", "a": "<i>mR</i> = <i>nr</i> gives <i>n</i>/<i>m</i> = 0.8/0.4 = 2, so <i>n</i> = 2<i>m</i>; with <i>mn</i> = 32, 2<i>m</i><sup>2</sup> = 32 and <i>m</i> = 4, <i>n</i> = 8. Then <i>E</i><sub>eq</sub> = 9.6 V, <i>r</i><sub>eq</sub> = (8)(0.4)/4 = 0.8 Ω = <i>R</i> as required, and <i>I</i><sub>max</sub> = 9.6/1.6 = 6.0 A." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing EMF with terminal voltage.</b> EMF is fixed and belongs to the cell; terminal voltage depends on the current drawn. They are equal ONLY on open circuit, and a question that hinges on the difference is testing exactly this.",
            "<b>Using the discharge sign while charging.</b> Discharging <i>V</i> = <i>E</i> − <i>Ir</i>, charging <i>V</i> = <i>E</i> + <i>Ir</i>. Use the wrong one on a charging battery and you report a terminal voltage below the EMF, which cannot happen while current is being forced in.",
            "<b>Believing the short-circuit current is infinite.</b> It is <i>E</i>/<i>r</i>, finite and set by the internal resistance. Only an ideal cell, with <i>r</i> = 0, would give an infinite answer, and no such cell exists.",
            "<b>Adding EMFs in parallel.</b> Identical cells in parallel give <i>E</i>, never <i>nE</i>. Only series stacks EMFs, and only parallel cuts the internal resistance.",
            "<b>Counting a reversed cell once.</b> Reversing one cell changes the net series EMF by 2<i>E</i>, because it swings from +<i>E</i> to −<i>E</i>. Subtracting a single <i>E</i> is the standard half-wrong answer, and the internal resistances still all add."
          ]
        },
        {
          "t": "protip",
          "html": "reduce every grouping to ONE equivalent cell before you do anything else. get <i>E</i><sub>eq</sub> and <i>r</i><sub>eq</sub>, then use <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>) and you have one formula for every case in the topic, series, parallel, mixed and unequal alike.<br>for internal resistance from data, the cleanest route is <i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i>: lost voltage over current drawn. for two-load problems, write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) twice and equate, and the EMF disappears in one step. and for any mixed-grouping optimisation, jump straight to the pair <i>mR</i> = <i>nr</i> with <i>mn</i> = <i>N</i> and solve them together; there is exactly one integer answer and it is what the paper wants."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>E</i> = <i>W</i>/<i>q</i>", "note": "energy per coulomb, in volts. A voltage, NOT a force" },
            { "f": "<i>V</i> = <i>E</i> − <i>Ir</i> · <i>V</i> = <i>E</i> + <i>Ir</i>", "note": "discharging subtracts, charging adds. Equal only when <i>I</i> = 0" },
            { "f": "<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), <i>I</i><sub>short</sub> = <i>E</i>/<i>r</i>", "note": "the short-circuit current is large but finite, capped by <i>r</i> alone" },
            { "f": "<i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>(<i>E</i>/<i>V</i> − 1)", "note": "lost voltage over current drawn, in ohms" },
            { "f": "series <i>nE</i>, <i>nr</i> · parallel <i>E</i>, <i>r</i>/<i>n</i>", "note": "series for a large <i>R</i>, parallel for a small one. A reversed cell costs 2<i>E</i>" },
            { "f": "mixed: <i>I</i> = <i>mnE</i>/(<i>mR</i> + <i>nr</i>), max at <i>mR</i> = <i>nr</i>", "note": "match the pack's internal resistance to the load, then <i>I</i><sub>max</sub> = <i>nE</i>/2<i>R</i>" }
          ],
          "aids": [
            "draw current, lose voltage: the terminal voltage sags by exactly Ir",
            "charging adds, discharging subtracts",
            "short-circuit current is E/r, not infinity",
            "series stacks voltage, parallel stacks stamina",
            "always collapse the pack to one cell first, then one formula does everything"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Kirchhoff's Two Rules, and the Wheatstone Bridge",
      "chip": "05 NETWORKS",
      "kalam": "no pile-up at a junction, no net climb round a loop",
      "blocks": [
        {
          "t": "p",
          "html": "Series and parallel rules are wonderful until the circuit refuses to be either. The moment you meet two batteries pushing against each other, or a bridge where no two resistors are cleanly in series or in parallel, the reduction tricks of Topic 02 collapse. You need something completely general, and that is <b>Kirchhoff's two rules</b>. The beautiful part is that both are everyday conservation laws wearing circuit clothing.<br><br><b>The junction rule.</b> Picture a Mumbai local pulling into Dadar. The number of passengers stepping onto the platform from all the doors equals the number stepping off into the train and out through the exits: nobody evaporates and nobody materialises. A wire junction is exactly that. It is a meeting point of wires, not a storage tank, and in the steady state charge cannot pile up there because a junction is not a capacitor. So whatever charge per second flows in must flow out. This is conservation of charge, and it is the same steady-state argument you used for a fluid in a pipe, where nothing accumulated anywhere and <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> followed.<br><br><b>The loop rule.</b> Now imagine walking the hills around Lonavala. You set off, climb some ridges, drop into some valleys, wander about, and eventually return to exactly the spot you started from. However complicated your path, your net change in altitude is zero, because you are back where you began. Electric potential behaves precisely like altitude: it has one definite value at every point. So trace any closed loop in a circuit, add up every rise and drop in potential, and the total must come back to zero. This is conservation of energy: each coulomb gains from the cells exactly what it surrenders to the resistors over one full lap."
        },
        {
          "t": "think",
          "html": "treat the whole circuit as a contour map. cells are escalators that lift charge to a higher potential. resistors are slopes it slides down, shedding energy as heat on the way. the junction rule then says traffic is conserved at every crossroad, and the loop rule says every round trip returns you to the same altitude. with only those two you can crack any network, however tangled, and you never need to spot a clever simplification again."
        },
        {
          "t": "def",
          "term": "The sign convention, fixed once for the whole chapter",
          "html": "Sign chaos is the single largest source of lost marks in this chapter, so fix the rules now and never vary them.<br><br><b>TRAVERSE EVERY LOOP CLOCKWISE.</b> Then, for each element you cross:<br><b>A resistor crossed ALONG the assumed current</b> contributes <b>−<i>IR</i></b>, because moving with the current is moving from high potential to low. <b>Crossed AGAINST the assumed current</b> it contributes <b>+<i>IR</i></b>.<br><b>A cell entered at its − terminal and left at its +</b> contributes <b>+<i>E</i></b>. <b>Entered at + and left at −</b> it contributes <b>−<i>E</i></b>.<br><br>Notice the asymmetry, because it is the whole trick: the resistor's sign depends on the CURRENT direction, while the cell's sign depends ONLY on which terminal you meet first and never on the current at all. Set the sum of everything you crossed to zero and solve.<br><br>And do not panic at a negative answer. It is not a mistake. It means the real current runs opposite to the direction you assumed. Keep the magnitude, flip the arrow, and move on: never re-solve."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO RULES",
          "tag": "charge conservation, then energy conservation",
          "main": "junction rule (KCL): Σ<i>I</i> = 0, that is Σ<i>I</i><sub>in</sub> = Σ<i>I</i><sub>out</sub><br>loop rule (KVL): ΣΔ<i>V</i> = 0, that is Σ<i>E</i> = Σ<i>IR</i>",
          "legend": [
            "<i>I</i> = branch current (A), taken positive towards the junction and negative away from it in the first form",
            "Δ<i>V</i> = potential change across each element as you traverse (V), summed once round any closed loop",
            "<i>E</i> = EMF of each source in the loop (V), <i>R</i> = each resistance in the loop (Ω), so both sides of the second form are volts"
          ],
          "note": "The junction rule holds in the STEADY STATE, when currents are constant and nothing accumulates. A capacitor branch does accumulate charge while it charges, and in the steady state carries no DC current at all, which is Chapter 2's business rather than this chapter's."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 3.16 · THE TWO RULES, DRAWN",
          "chips": ["a junction", "a loop, as altitude"],
          "captions": [
            "The junction rule. Three currents arrive and two leave, and the node itself stores nothing, so the arithmetic is forced: I₁ + I₂ + I₃ = I₄ + I₅. There is no physics here beyond charge conservation and the steady-state assumption that nothing piles up at a point. Note the amber arrows are only the ones LEAVING: which currents you call in and which out is your choice, and the rule survives either labelling as long as you are consistent.",
            "The loop rule, drawn as a walk. The cell is an escalator that lifts each coulomb to a higher potential, +E. Each resistor is a slope it slides down, shedding IR as heat. Walk once round and return to the starting point, and since potential is single-valued the net change in altitude has to be zero, so the climbs and the descents must cancel exactly. That is conservation of energy for one coulomb of charge over one lap."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.7,
              "marks": [{ "x": 5, "y": 3.5, "glyph": "dot", "tone": "ink" }],
              "arrows": [
                { "from": [1, 6], "to": [4.4, 3.9], "tone": "ink", "label": "I₁", "at": "start" },
                { "from": [0.8, 3.5], "to": [4.3, 3.5], "tone": "ink", "label": "I₂", "at": "start" },
                { "from": [1, 1], "to": [4.4, 3.1], "tone": "ink", "label": "I₃", "at": "start" },
                { "from": [5.6, 3.9], "to": [9, 6], "tone": "amber", "label": "I₄", "at": "end" },
                { "from": [5.6, 3.1], "to": [9, 1], "tone": "amber", "label": "I₅", "at": "end" }
              ],
              "labels": [{ "x": 5, "y": 0.5, "text": "I₁+I₂+I₃ = I₄+I₅" }]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.66,
              "polys": [{ "pts": [[1, 1], [2.5, 4.5], [5, 2.9], [7.5, 1.9], [9, 1]], "tone": "ink" }],
              "arrows": [
                { "from": [1.3, 1.4], "to": [2.3, 4.1], "tone": "green", "label": "+E", "at": "mid" },
                { "from": [3.0, 4.1], "to": [4.8, 3.0], "tone": "red", "label": "−IR", "at": "above" },
                { "from": [5.4, 2.75], "to": [7.3, 1.95], "tone": "red", "label": "−IR", "at": "above" }
              ],
              "segments": [
                { "from": [9, 1], "to": [1, 1], "dash": true, "soft": true, "label": "back to start", "at": "mid" }
              ],
              "labels": [{ "x": 5.6, "y": 5.4, "text": "net climb = 0" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY BOTH RULES ARE TRUE, TAP A LINE",
          "steps": [
            {
              "eq": "JUNCTION RULE. In a small time <i>dt</i>, let <i>dq</i><sub>in</sub> flow into a junction and <i>dq</i><sub>out</sub> flow out",
              "why": "A junction is a geometric point where wires meet. It has no capacity to store charge, so it is not a reservoir, and in the steady state the charge sitting there is constant."
            },
            {
              "eq": "conservation of charge with nothing stored gives <i>dq</i><sub>in</sub> = <i>dq</i><sub>out</sub>; divide by <i>dt</i> to get Σ<i>I</i><sub>in</sub> = Σ<i>I</i><sub>out</sub>",
              "why": "The step that matters is the steady-state assumption, because it is what turns a statement about CHARGE into a statement about CURRENT. Drop it and the rule fails, which is exactly what happens on a charging capacitor's plates."
            },
            {
              "eq": "LOOP RULE. The electrostatic field in the circuit is conservative, so the potential <i>V</i> has one unique value at each point",
              "why": "This is the altitude property. A point on a hillside has one height, not two, however many paths lead to it, and an electric potential behaves the same way."
            },
            {
              "eq": "start anywhere on a closed loop, add the potential change across every element, and return to the start: ΣΔ<i>V</i> = 0",
              "why": "You arrive back at the SAME point with the SAME potential, so the net change must vanish. Nothing about the elements has been assumed, which is why the rule works for a loop containing anything at all."
            },
            {
              "eq": "split the changes into gains from sources and losses across resistors: Σ<i>E</i> = Σ<i>IR</i>",
              "why": "Physically, each coulomb is handed exactly as much energy by the cells as it surrenders to the resistors over one lap. This is the first law of thermodynamics doing its bookkeeping again, and it is why the power check works: total source power must equal total <i>I</i><sup>2</sup><i>R</i> dissipated."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The bookkeeping, at a glance",
          "rows": [
            { "k": "Resistor, crossed WITH the current", "v": "−<i>IR</i>, a drop. Moving along the current is moving downhill in potential" },
            { "k": "Resistor, crossed AGAINST the current", "v": "+<i>IR</i>, a rise. Same resistor, same current, opposite direction of travel" },
            { "k": "Cell, entered at − and left at +", "v": "+<i>E</i>. Depends only on the terminals you meet, NEVER on the current direction" },
            { "k": "Cell, entered at + and left at −", "v": "−<i>E</i>. This is the case in a cell being charged by a stronger neighbour" },
            { "k": "How many equations", "v": "for <i>b</i> branches and <i>n</i> nodes: (<i>n</i> − 1) independent junction equations and (<i>b</i> − <i>n</i> + 1) independent loops, totalling <i>b</i>, exactly matching the <i>b</i> unknown branch currents" },
            { "k": "A negative answer", "v": "not an error. The real current runs opposite to the direction you assumed. Keep the magnitude, flip the arrow, never re-solve" }
          ]
        },
        {
          "t": "proc",
          "title": "Solving any network with Kirchhoff",
          "steps": [
            "<b>Count before you write.</b> With <i>b</i> branches and <i>n</i> nodes you need (<i>n</i> − 1) junction equations and (<i>b</i> − <i>n</i> + 1) loop equations. Knowing the number in advance stops you writing a redundant loop, whose equation is just a combination of ones you already have and tells you nothing.",
            "<b>Assign a current to every branch and draw the arrow.</b> Any direction will do. Then use the junction rule at once to express as many currents as you can in terms of the others, so that a branch shared between two loops carries the SUM rather than a new unknown.",
            "<b>Traverse each loop clockwise and write the sum.</b> Resistor along the current, −<i>IR</i>; against it, +<i>IR</i>; cell from − to +, +<i>E</i>; from + to −, −<i>E</i>. Never mix the two dependencies up.",
            "<b>Solve, and keep any minus signs.</b> A negative current means the arrow you drew points the wrong way, which is information, not an error. In a two-cell network it usually means the weaker cell is being CHARGED by the stronger one.",
            "<b>Finish with the power check.</b> Total power delivered by the sources, Σ<i>EI</i>, must equal the total dissipated, Σ<i>I</i><sup>2</sup><i>R</i>. If those two numbers disagree, a sign or an arithmetic slip is hiding in your currents, and this is the fastest way to find out before the marker does."
          ]
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.18 · TWO CELLS THAT WILL NOT COMBINE",
          "chips": ["two sources sharing one resistor"],
          "captions": [
            "Two cells, each with its own series resistance, sharing a middle branch between nodes A and B. No pair of elements here is in series (there are junctions at A and B) and no pair is in parallel with the middle resistor alone, so Topic 02's rules simply do not apply and Kirchhoff is the only route. Assume I₁ and I₂ rise in the two cell branches; the junction rule at A then forces the middle branch to carry I₁ + I₂ downward, which spends one unknown before any loop is written. Solve the two clockwise loops and you find I₂ comes out negative: the stronger cell is charging the weaker one."
          ],
          "frames": [
            {
              "aspect": 0.5,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [2, 1], "to": [10, 1] },
                  { "from": [2, 5], "to": [10, 5] },
                  { "from": [2, 5], "to": [2, 4.2] },
                  { "from": [2, 3.2], "to": [2, 2.8] },
                  { "from": [2, 1.6], "to": [2, 1] },
                  { "from": [6, 1], "to": [6, 2] },
                  { "from": [6, 4], "to": [6, 5] },
                  { "from": [10, 5], "to": [10, 4.2] },
                  { "from": [10, 3.2], "to": [10, 2.8] },
                  { "from": [10, 1.6], "to": [10, 1] }
                ],
                "parts": [
                  { "at": [2, 4.2], "to": [2, 3.2], "kind": "cell", "label": "E₁" },
                  { "at": [2, 2.8], "to": [2, 1.6], "kind": "R", "label": "2 Ω" },
                  { "at": [6, 2], "to": [6, 4], "kind": "R", "label": "4 Ω", "tone": "amber" },
                  { "at": [10, 4.2], "to": [10, 3.2], "kind": "cell", "label": "E₂" },
                  { "at": [10, 2.8], "to": [10, 1.6], "kind": "R", "label": "2 Ω" }
                ],
                "nodes": [
                  { "at": [2, 1], "junction": true },
                  { "at": [6, 1], "junction": true, "label": "A" },
                  { "at": [10, 1], "junction": true },
                  { "at": [2, 5], "junction": true },
                  { "at": [6, 5], "junction": true, "label": "B" },
                  { "at": [10, 5], "junction": true }
                ],
                "currents": [
                  { "at": [1.5, 3.6], "to": [1.5, 2.6], "label": "I₁" },
                  { "at": [7.0, 3.8], "to": [7.0, 4.6], "label": "I₁+I₂" },
                  { "at": [9.5, 3.6], "to": [9.5, 2.6], "label": "I₂" }
                ]
              }
            }
          ]
        },
        {
          "t": "p",
          "html": "Now the payoff. Take four resistors <i>P</i>, <i>Q</i>, <i>R</i> and <i>S</i> arranged in a diamond, with a cell driving current across one diagonal and a sensitive galvanometer bridging the other. This is the <b>Wheatstone bridge</b>, and it is not reducible by series and parallel at all: the galvanometer arm joins two midpoints, so no two arms share both nodes and no two carry a common current.<br><br>But something remarkable happens at one particular set of resistances. If the two ladders divide the voltage in exactly the same ratio, the two midpoints sit at the same potential, no current crosses the bridge, and the galvanometer reads zero. The bridge is then <b>balanced</b>. And when you work out the condition, the battery's EMF and the galvanometer's resistance both drop out entirely, leaving a statement about the four resistances alone: <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>.<br><br>That is why the bridge is a <b>null method</b> rather than a deflection method. It compares resistances without needing to know the source voltage, without needing a calibrated meter, and without the meter's own resistance mattering, which makes it far more accurate than reading a needle against a scale. It is also, for exam purposes, an enormous shortcut: check the two ratios first, and if they match you may delete the bridging arm entirely and reduce what is left by series and parallel in ten seconds."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE BALANCE CONDITION, TAP A LINE",
          "steps": [
            {
              "eq": "at balance <i>I</i><sub>g</sub> = 0, so no current diverts at B. The same <i>I</i><sub>1</sub> therefore flows through <i>P</i> (arm AB) and <i>Q</i> (arm BC), and the same <i>I</i><sub>2</sub> through <i>R</i> (arm AD) and <i>S</i> (arm DC)",
              "why": "The junction rule at B and at D. This is the whole reason balance simplifies things: with the bridge arm carrying nothing, each half of the diamond becomes an ordinary series pair."
            },
            {
              "eq": "loop A → B → D → A, clockwise: across <i>P</i> along <i>I</i><sub>1</sub> gives −<i>I</i><sub>1</sub><i>P</i>; across <i>G</i> along <i>I</i><sub>g</sub> gives −<i>I</i><sub>g</sub><i>G</i>; across <i>R</i> against <i>I</i><sub>2</sub> gives +<i>I</i><sub>2</sub><i>R</i>",
              "why": "The convention, held exactly: with the current gives a drop, against it gives a rise. <i>I</i><sub>2</sub> was assumed to run A to D, and we are walking D to A, hence the plus."
            },
            {
              "eq": "so −<i>I</i><sub>1</sub><i>P</i> − <i>I</i><sub>g</sub><i>G</i> + <i>I</i><sub>2</sub><i>R</i> = 0, and setting <i>I</i><sub>g</sub> = 0 gives <i>I</i><sub>1</sub><i>P</i> = <i>I</i><sub>2</sub><i>R</i>",
              "why": "Equation one. In words: the drop from A to B equals the drop from A to D, which is another way of saying B and D are at the same potential."
            },
            {
              "eq": "loop B → C → D → B, same sense: −<i>I</i><sub>1</sub><i>Q</i> + <i>I</i><sub>2</sub><i>S</i> + <i>I</i><sub>g</sub><i>G</i> = 0, and at balance <i>I</i><sub>1</sub><i>Q</i> = <i>I</i><sub>2</sub><i>S</i>",
              "why": "Equation two, and note that <i>G</i> appears in both loops with opposite signs precisely because we cross it in opposite directions. At balance it vanishes from both, which is the point."
            },
            {
              "eq": "divide the first equation by the second: <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>, equivalently <i>PS</i> = <i>QR</i>",
              "why": "Both unknown currents cancel in the division, and so do <i>E</i> and <i>G</i>, which never survived past the balance substitution. The condition contains ONLY the four resistances, which is exactly what makes the bridge a precision instrument: nothing about the source or the detector can bias the answer."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.17 · THE BRIDGE, BEFORE AND AFTER BALANCE",
          "chips": ["unbalanced: the arm carries current", "balanced: the arm vanishes"],
          "captions": [
            "The bridge as built. A cell drives current in at A and out at C; the four arms P, Q, R and S form the diamond and the galvanometer G bridges B to D. In general B and D are at different potentials, so a current Ig crosses the bridge arm and NOTHING here is in series or in parallel with anything else. Every arm carries a different current from its neighbour and only Kirchhoff will get you the numbers.",
            "The same bridge with P/Q = R/S. Now the two ladders divide the source voltage in identical ratios, so B and D sit at the same potential, no current crosses, and the galvanometer arm can be erased from the diagram entirely. What is left is P and Q in series (carrying I₁) and R and S in series (carrying I₂), the two chains simply in parallel. Ten seconds of arithmetic instead of three simultaneous equations, which is why you check the ratio before touching anything."
          ],
          "frames": [
            {
              "aspect": 0.857,
              "circuit": {
                "grid": [12, 10],
                "wires": [
                  { "from": [2, 4], "to": [2, 9] },
                  { "from": [2, 9], "to": [4, 9] },
                  { "from": [8, 9], "to": [10, 9] },
                  { "from": [10, 9], "to": [10, 4] }
                ],
                "parts": [
                  { "at": [2, 4], "to": [6, 1.5], "kind": "R", "label": "P" },
                  { "at": [6, 1.5], "to": [10, 4], "kind": "R", "label": "Q" },
                  { "at": [2, 4], "to": [6, 6.5], "kind": "R", "label": "R" },
                  { "at": [6, 6.5], "to": [10, 4], "kind": "R", "label": "S" },
                  { "at": [6, 1.5], "to": [6, 6.5], "kind": "G", "tone": "amber" },
                  { "at": [4, 9], "to": [8, 9], "kind": "cell", "label": "E" }
                ],
                "nodes": [
                  { "at": [2, 4], "label": "A", "junction": true },
                  { "at": [6, 1.5], "label": "B", "junction": true },
                  { "at": [10, 4], "label": "C", "junction": true },
                  { "at": [6, 6.5], "label": "D", "junction": true }
                ],
                "currents": [
                  { "at": [3.4, 8.5], "to": [5.0, 8.5], "label": "I" },
                  { "at": [6.4, 3.2], "to": [6.4, 4.8], "label": "Ig" }
                ]
              }
            },
            {
              "aspect": 0.857,
              "circuit": {
                "grid": [12, 10],
                "wires": [
                  { "from": [2, 4], "to": [2, 9] },
                  { "from": [2, 9], "to": [4, 9] },
                  { "from": [8, 9], "to": [10, 9] },
                  { "from": [10, 9], "to": [10, 4] }
                ],
                "parts": [
                  { "at": [2, 4], "to": [6, 1.5], "kind": "R", "label": "P" },
                  { "at": [6, 1.5], "to": [10, 4], "kind": "R", "label": "Q" },
                  { "at": [2, 4], "to": [6, 6.5], "kind": "R", "label": "R" },
                  { "at": [6, 6.5], "to": [10, 4], "kind": "R", "label": "S" },
                  { "at": [4, 9], "to": [8, 9], "kind": "cell", "label": "E" }
                ],
                "nodes": [
                  { "at": [2, 4], "label": "A", "junction": true },
                  { "at": [6, 1.5], "label": "B", "junction": true },
                  { "at": [10, 4], "label": "C", "junction": true },
                  { "at": [6, 6.5], "label": "D", "junction": true }
                ],
                "currents": [
                  { "at": [2.8, 3.6], "to": [4.0, 2.85], "label": "I₁" },
                  { "at": [2.8, 4.4], "to": [4.0, 5.15], "label": "I₂" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · WHEATSTONE BALANCE",
          "tag": "check this before any bridge algebra",
          "main": "<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>  ⟺  <i>PS</i> = <i>QR</i>  ⟹  <i>I</i><sub>g</sub> = 0",
          "legend": [
            "<i>P</i> = arm AB and <i>Q</i> = arm BC (the top path), <i>R</i> = arm AD and <i>S</i> = arm DC (the bottom path), all in Ω",
            "<i>I</i><sub>g</sub> = galvanometer current (A), zero at balance, and at balance points B and D sit at equal potential",
            "the condition contains NO <i>E</i> and no galvanometer resistance <i>G</i>: they cancel in the derivation, which is what makes the bridge a null method"
          ],
          "note": "At balance you may delete the bridge arm and reduce the rest as (P + Q) in parallel with (R + S). If it is NOT balanced, the equivalent resistance still lies between the shorted value, (P||R) + (Q||S), and the open value, (P + Q)||(R + S), whatever the galvanometer resistance is: a free bracket to check any answer against."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two cells drive current through a shared resistor. The left branch has <i>E</i><sub>1</sub> = 8 V in series with 2 Ω; the right branch has <i>E</i><sub>2</sub> = 4 V in series with 2 Ω; a 4 Ω resistor bridges the two nodes A and B. Find the current in each branch.",
          "steps": [
            "Assign currents: let <i>I</i><sub>1</sub> rise through the left branch and <i>I</i><sub>2</sub> through the right. The junction rule at the top node then forces the middle resistor to carry <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> downward, so there are only two unknowns.",
            "Left loop, clockwise: up the left branch we enter the cell at − and leave at +, giving +8, then cross 2 Ω along <i>I</i><sub>1</sub>, giving −2<i>I</i><sub>1</sub>; then down the middle along (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>), giving −4(<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>). Sum to zero: 8 = 6<i>I</i><sub>1</sub> + 4<i>I</i><sub>2</sub>.",
            "Right loop, same sense: 4 = 4<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub>.",
            "Multiply the first by 3 and the second by 2: 18<i>I</i><sub>1</sub> + 12<i>I</i><sub>2</sub> = 24 and 8<i>I</i><sub>1</sub> + 12<i>I</i><sub>2</sub> = 8. Subtract: 10<i>I</i><sub>1</sub> = 16, so <i>I</i><sub>1</sub> = 1.6 A.",
            "Back-substitute: 4(1.6) + 6<i>I</i><sub>2</sub> = 4, so 6<i>I</i><sub>2</sub> = −2.4 and <i>I</i><sub>2</sub> = −0.4 A."
          ],
          "ans": "<i>I</i><sub>1</sub> = 1.6 A, <i>I</i><sub>2</sub> = −0.4 A, and the 4 Ω carries 1.6 − 0.4 = 1.2 A. The minus sign is the interesting part: the real current in the right branch runs opposite to the arrow drawn, which means the 4 V cell is being CHARGED by the stronger 8 V one."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A bridge has <i>P</i> = 10 Ω, <i>Q</i> = 20 Ω, <i>R</i> = 15 Ω, <i>S</i> = 30 Ω, with a galvanometer across the bridge diagonal and a 6 V battery across the supply diagonal. Find the equivalent resistance of the network.",
          "steps": [
            "The trap is diving into Kirchhoff with five resistors and three unknown currents, or worse, trying to fold the galvanometer arm into a series-parallel reduction.",
            "Always check the balance ratio first: <i>P</i>/<i>Q</i> = 10/20 = 1/2, and <i>R</i>/<i>S</i> = 15/30 = 1/2. Equal, so the bridge is BALANCED and <i>I</i><sub>g</sub> = 0.",
            "The galvanometer branch carries nothing, so it can be erased. What remains is <i>P</i> + <i>Q</i> = 30 Ω in series along the top and <i>R</i> + <i>S</i> = 45 Ω in series along the bottom, the two simply in parallel.",
            "<i>R</i><sub>eq</sub> = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω, which correctly falls below the smaller of the two chains."
          ],
          "ans": "18 Ω. The 6 V is a red herring: an equivalent resistance never depends on the source. Check <i>P</i>/<i>Q</i> against <i>R</i>/<i>S</i> before touching anything else, and a two-minute problem becomes a ten-second one."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Battery <i>E</i><sub>1</sub> = 8 V with 1 Ω and battery <i>E</i><sub>2</sub> = 7 V with 1 Ω drive current through a common 2 Ω resistor between nodes A and B. (a) Find all three branch currents. (b) Verify conservation of energy by checking the power balance.",
          "steps": [
            "(a) Same layout as before, with <i>I</i><sub>1</sub> and <i>I</i><sub>2</sub> rising in the cell branches and <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> in the middle. The two clockwise loops give 8 = <i>I</i><sub>1</sub> + 2(<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>) = 3<i>I</i><sub>1</sub> + 2<i>I</i><sub>2</sub> and 7 = 2<i>I</i><sub>1</sub> + 3<i>I</i><sub>2</sub>.",
            "Multiply the first by 3 and the second by 2: 9<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub> = 24 and 4<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub> = 14. Subtract: 5<i>I</i><sub>1</sub> = 10, so <i>I</i><sub>1</sub> = 2.0 A, then <i>I</i><sub>2</sub> = 1.0 A and the middle branch carries 3.0 A.",
            "(b) Power delivered by the sources: <i>E</i><sub>1</sub><i>I</i><sub>1</sub> + <i>E</i><sub>2</sub><i>I</i><sub>2</sub> = (8)(2.0) + (7)(1.0) = 16 + 7 = 23 W.",
            "Power dissipated: <i>I</i><sub>1</sub><sup>2</sup>(1) + <i>I</i><sub>2</sub><sup>2</sup>(1) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)<sup>2</sup>(2) = 4 + 1 + 18 = 23 W."
          ],
          "ans": "<i>I</i><sub>1</sub> = 2.0 A, <i>I</i><sub>2</sub> = 1.0 A, middle branch 3.0 A, and the power balances at 23 W both ways. The match is no accident: it IS the loop rule, energy conservation, showing up as a number, which makes it a powerful self-check on any solved network."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Five resistors form a bridge between A and C: arm AB = <i>R</i>, BC = 2<i>R</i>, AD = 2<i>R</i>, DC = <i>R</i>, and the bridge arm BD = <i>R</i>. Find the equivalent resistance between A and C.",
          "steps": [
            "Check balance first, as always: <i>P</i>/<i>Q</i> = <i>R</i>/2<i>R</i> = 1/2 but <i>R</i>/<i>S</i> (bottom path) = 2<i>R</i>/<i>R</i> = 2. Not equal, so the bridge is UNBALANCED and the bridge arm carries current.",
            "Let <i>I</i> enter at A and split into <i>i</i><sub>1</sub> through AB and <i>i</i><sub>2</sub> through AD, with <i>i</i><sub>g</sub> flowing B to D. Junction rule: BC carries <i>i</i><sub>1</sub> − <i>i</i><sub>g</sub> and DC carries <i>i</i><sub>2</sub> + <i>i</i><sub>g</sub>.",
            "Loop A → B → D → A: −<i>i</i><sub>1</sub><i>R</i> − <i>i</i><sub>g</sub><i>R</i> + <i>i</i><sub>2</sub>(2<i>R</i>) = 0, so <i>i</i><sub>g</sub> = 2<i>i</i><sub>2</sub> − <i>i</i><sub>1</sub>.",
            "Loop B → C → D → B: −(<i>i</i><sub>1</sub> − <i>i</i><sub>g</sub>)(2<i>R</i>) + (<i>i</i><sub>2</sub> + <i>i</i><sub>g</sub>)<i>R</i> + <i>i</i><sub>g</sub><i>R</i> = 0, giving −2<i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> + 4<i>i</i><sub>g</sub> = 0. Substitute the first: −6<i>i</i><sub>1</sub> + 9<i>i</i><sub>2</sub> = 0, so <i>i</i><sub>2</sub> = (2/3)<i>i</i><sub>1</sub> and <i>i</i><sub>g</sub> = (1/3)<i>i</i><sub>1</sub>.",
            "Total current <i>I</i> = <i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> = (5/3)<i>i</i><sub>1</sub>. Along A → B → C: <i>V</i><sub>AC</sub> = <i>i</i><sub>1</sub><i>R</i> + (<i>i</i><sub>1</sub> − <i>i</i><sub>g</sub>)(2<i>R</i>) = <i>i</i><sub>1</sub><i>R</i> + (4/3)<i>i</i><sub>1</sub><i>R</i> = (7/3)<i>i</i><sub>1</sub><i>R</i>."
          ],
          "ans": "<i>R</i><sub>eq</sub> = <i>V</i><sub>AC</sub>/<i>I</i> = (7/3)/(5/3) × <i>R</i> = 1.4<i>R</i>. Two checks. First, the other path must give the same <i>V</i><sub>AC</sub>: <i>i</i><sub>2</sub>(2<i>R</i>) + (<i>i</i><sub>2</sub> + <i>i</i><sub>g</sub>)<i>R</i> = (4/3)<i>i</i><sub>1</sub><i>R</i> + <i>i</i><sub>1</sub><i>R</i> = (7/3)<i>i</i><sub>1</sub><i>R</i>, identical, as the loop rule guarantees. Second, the bracket: shorting the arm gives (<i>R</i>∥2<i>R</i>) + (2<i>R</i>∥<i>R</i>) = 1.333<i>R</i> and opening it gives 3<i>R</i>∥3<i>R</i> = 1.5<i>R</i>, so any answer had to lie between 1.33<i>R</i> and 1.5<i>R</i>. It does."
        },
        {
          "t": "mcq",
          "q": "Kirchhoff's junction rule is a direct consequence of the conservation of:",
          "opts": [
            { "label": "energy", "nudge": "That is the basis of the LOOP rule, and this swap is the single most common one in the topic. The junction rule never mentions energy at all." },
            { "label": "charge" },
            { "label": "momentum", "nudge": "Momentum plays no part in circuit theory at this level; nothing in either rule is a vector equation." },
            { "label": "potential", "nudge": "Potential is not a conserved quantity. The loop rule uses the SINGLE-VALUEDNESS of potential, which is a different statement from conservation." }
          ],
          "correct": 1,
          "solution": "Charge entering a node equals charge leaving it, because a junction stores nothing in the steady state. Hold the pair together: junction rule from conservation of CHARGE, loop rule from conservation of ENERGY. Being able to name which is which is worth a mark on its own in the Boards."
        },
        {
          "t": "mcq",
          "q": "While applying the loop rule, you traverse a resistor IN THE SAME DIRECTION as the assumed current. The corresponding term is:",
          "opts": [
            { "label": "+<i>IR</i>", "nudge": "This is the sign for traversing AGAINST the current. Choosing it is the classic sign flip, and it inverts every current in the network." },
            { "label": "−<i>IR</i>" },
            { "label": "+<i>E</i>", "nudge": "An EMF term, which belongs to a cell, not a resistor. Keep the two dependencies separate: resistor signs follow the current, cell signs follow the terminals." },
            { "label": "zero", "nudge": "A resistor carrying current always has a potential difference across it, <i>IR</i>. It contributes zero only when no current flows through it, as in a balanced bridge arm." }
          ],
          "correct": 1,
          "solution": "Moving along the current means moving from higher to lower potential across a resistor, so the term is a DROP, −<i>IR</i>. Turn around and walk the other way through the same resistor and it becomes +<i>IR</i>. The cell's sign, by contrast, depends only on which terminal you enter first."
        },
        {
          "t": "mcq",
          "q": "A Wheatstone bridge with arms <i>P</i>, <i>Q</i>, <i>R</i>, <i>S</i> and the galvanometer across the bridge diagonal shows ZERO deflection. Which relation must hold?",
          "opts": [
            { "label": "<i>PQ</i> = <i>RS</i>", "nudge": "A symmetric-looking product, and wrong. Balance equates the RATIOS in the two parallel paths, not products of arms in the same path." },
            { "label": "<i>P</i> + <i>Q</i> = <i>R</i> + <i>S</i>", "nudge": "Sums have no meaning for balance. A bridge with arms 1, 2, 2, 4 is balanced, and 1 + 2 does not equal 2 + 4." },
            { "label": "<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>" },
            { "label": "<i>PR</i> = <i>QS</i>", "nudge": "The other tempting cross-product, and it is exactly the pairing that fails. Test it on <i>P</i> = 8, <i>Q</i> = 12, <i>R</i> = 6, <i>S</i> = 9: that bridge IS balanced, yet <i>PR</i> = 48 and <i>QS</i> = 108." }
          ],
          "correct": 2,
          "solution": "Zero deflection means B and D sit at equal potential, so the two ladders must divide the source voltage in identical ratios: <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>, equivalently <i>PS</i> = <i>QR</i>. Cross-multiply the ratio to get the product form and you will never confuse it with <i>PR</i> = <i>QS</i>, which is a different and false condition."
        },
        {
          "t": "mcq",
          "q": "A bridge has <i>P</i> = 2 Ω, <i>Q</i> = 4 Ω, <i>R</i> = 3 Ω, <i>S</i> = 6 Ω, and a galvanometer of 5 Ω across the bridge diagonal. The equivalent resistance between the supply terminals is:",
          "opts": [
            { "label": "3.6 Ω" },
            { "label": "2.5 Ω", "nudge": "Comes from trying to fold the 5 Ω bridge arm into the reduction. Checking balance first removes the arm entirely and removes the temptation." },
            { "label": "5.6 Ω", "nudge": "Also from trying to fold the 5 Ω bridge arm into the reduction. It is close enough to the right answer to look plausible, which is exactly why checking balance FIRST is safer than reducing and hoping." },
            { "label": "15 Ω", "nudge": "Adds the two chains in series instead of in parallel. 6 + 9 = 15, and the two chains sit side by side between the same nodes, so they are parallel." }
          ],
          "correct": 0,
          "solution": "Check balance: <i>P</i>/<i>Q</i> = 2/4 = 1/2 and <i>R</i>/<i>S</i> = 3/6 = 1/2. Balanced, so the 5 Ω galvanometer arm carries nothing and is removed. Then (<i>P</i> + <i>Q</i>) = 6 Ω in parallel with (<i>R</i> + <i>S</i>) = 9 Ω gives 54/15 = 3.6 Ω, correctly below both chains. The galvanometer's resistance never entered, which is the whole point of a balanced bridge."
        },
        {
          "t": "practice",
          "items": [
            { "q": "In a balanced Wheatstone bridge, <i>P</i> = 4 Ω, <i>Q</i> = 8 Ω and <i>R</i> = 6 Ω. Find the value of <i>S</i> that produces balance.", "a": "<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> gives 4/8 = 6/<i>S</i>, so <i>S</i> = 12 Ω. Cross-check with the product form: <i>PS</i> = 48 = <i>QR</i>." },
            { "q": "A bridge has <i>P</i> = 5 Ω, <i>Q</i> = 10 Ω, <i>R</i> = 8 Ω, <i>S</i> = 16 Ω, with a galvanometer across the bridge diagonal and a 6 V cell across the supply diagonal. What current flows through the galvanometer?", "a": "Zero. 5/10 = 8/16 = 1/2, so the bridge is balanced and <i>I</i><sub>g</sub> = 0 exactly, whatever the galvanometer's resistance and whatever the cell's EMF." },
            { "q": "Battery <i>E</i><sub>1</sub> = 5 V with 2 Ω and battery <i>E</i><sub>2</sub> = 7 V with 2 Ω drive current through a common 1 Ω resistor between nodes A and B. Find the current through the 1 Ω resistor.", "a": "Loops: 5 = 3<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> and 7 = <i>I</i><sub>1</sub> + 3<i>I</i><sub>2</sub>. Solving, <i>I</i><sub>1</sub> = 1.0 A and <i>I</i><sub>2</sub> = 2.0 A, so the shared branch carries 3.0 A. Power check: 5(1) + 7(2) = 19 W, and 2(1) + 2(4) + 1(9) = 19 W." },
            { "q": "Two cells of EMF 9 V and 3 V, with internal resistances 1 Ω and 2 Ω, are connected IN OPPOSITION in a single loop together with an external 3 Ω resistor. Find the loop current and the terminal voltage of the 9 V cell.", "a": "Opposition means the net driving EMF is 9 − 3 = 6 V, across a total 1 + 2 + 3 = 6 Ω, so <i>I</i> = 1.0 A. The 9 V cell is discharging: <i>V</i> = 9 − (1.0)(1) = 8.0 V. The 3 V cell is being charged, so its terminal voltage is 3 + (1.0)(2) = 5.0 V." },
            { "q": "An unbalanced bridge between A and C has arms AB = <i>R</i>, BC = 2<i>R</i>, AD = <i>R</i>, DC = <i>R</i> and bridge arm BD = <i>R</i>. Find the equivalent resistance between A and C.", "a": "Node analysis with <i>V</i><sub>A</sub> = <i>V</i> and <i>V</i><sub>C</sub> = 0 gives <i>V</i><sub>B</sub> = 8<i>V</i>/13 and <i>V</i><sub>D</sub> = 7<i>V</i>/13, so <i>I</i> = 11<i>V</i>/13<i>R</i> and <i>R</i><sub>eq</sub> = 13<i>R</i>/11 ≈ 1.18<i>R</i>. Bracket check: shorted gives (<i>R</i>∥<i>R</i>) + (2<i>R</i>∥<i>R</i>) = 1.17<i>R</i>, open gives 3<i>R</i>∥2<i>R</i> = 1.2<i>R</i>, and 1.18<i>R</i> sits between them." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Sign chaos in the loop rule, the number one error of the whole chapter.</b> Mixing up +<i>IR</i> and −<i>IR</i>, or attaching the cell's sign to the current direction. Say it aloud: the RESISTOR's sign follows whether you move with or against the current, and the CELL's sign follows only which terminal you enter first.",
            "<b>Panicking over a negative current.</b> A negative answer means your assumed direction was backwards, and nothing more. Keep the magnitude, flip the arrow, and read what it is telling you, which is often that the weaker cell is being charged.",
            "<b>Brute-forcing a balanced bridge.</b> Launching into five-resistor Kirchhoff when a two-second check of <i>P</i>/<i>Q</i> against <i>R</i>/<i>S</i> would have collapsed the problem. Always test balance first.",
            "<b>Writing a redundant loop.</b> A loop whose equation is just a combination of ones you already have gives you a useless line and the illusion of progress. Count first: (<i>n</i> − 1) junction equations and (<i>b</i> − <i>n</i> + 1) loops, no more.",
            "<b>Using the junction rule on a branch that stores charge.</b> It holds in the STEADY STATE. A capacitor charging up is accumulating charge on its plates, and in the steady state it carries no DC current at all, so a capacitor branch needs separate handling."
          ]
        },
        {
          "t": "protip",
          "html": "before you declare victory on any solved network, run the power check: total <i>EI</i> from the sources must equal total <i>I</i><sup>2</sup><i>R</i> dissipated. it takes twenty seconds, it uses numbers you already have, and it catches every sign slip and every arithmetic error at once.<br>one JEE Advanced result worth carrying, and worth carrying CORRECTLY. for an unbalanced bridge the galvanometer current is <i>I</i><sub>g</sub> = <i>E</i>(<i>PS</i> − <i>QR</i>) divided by [<i>G</i>(<i>P</i>+<i>Q</i>)(<i>R</i>+<i>S</i>) + <i>PQ</i>(<i>R</i>+<i>S</i>) + <i>RS</i>(<i>P</i>+<i>Q</i>)]. the numerator must be <i>PS</i> − <i>QR</i> and nothing else, because that is exactly the combination that vanishes at balance: any formula whose numerator does not go to zero when <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> is wrong, and a version with <i>PR</i> − <i>QS</i> on top would hand you 21 mA through a perfectly balanced bridge. test any bridge formula on a balanced set before you trust it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Σ<i>I</i> = 0 at a junction", "note": "conservation of CHARGE, in the steady state. Currents in equal currents out" },
            { "f": "ΣΔ<i>V</i> = 0 round a loop, Σ<i>E</i> = Σ<i>IR</i>", "note": "conservation of ENERGY. Both sides are volts" },
            { "f": "resistor: −<i>IR</i> along, +<i>IR</i> against", "note": "the resistor's sign follows the current, always traversing clockwise" },
            { "f": "cell: +<i>E</i> from − to +, −<i>E</i> from + to −", "note": "the cell's sign follows the terminals only, never the current" },
            { "f": "(<i>n</i> − 1) junction + (<i>b</i> − <i>n</i> + 1) loop = <i>b</i>", "note": "exactly as many independent equations as there are branch currents" },
            { "f": "<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> ⟹ <i>I</i><sub>g</sub> = 0", "note": "then delete the bridge arm and reduce (<i>P</i>+<i>Q</i>) parallel (<i>R</i>+<i>S</i>)" }
          ],
          "aids": [
            "junction means no pile-up: charge in equals charge out",
            "loop means back home, zero net climb",
            "a negative current is information, not an error: flip the arrow and keep going",
            "balanced bridge: cross-products equal, PS = QR, and then the arm vanishes",
            "always finish with the power check, sources in equals I²R out"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Measuring by Balancing: Meter Bridge and Potentiometer",
      "chip": "06 MEASURE",
      "kalam": "null means no theft",
      "blocks": [
        {
          "t": "p",
          "html": "How do you measure a resistance you cannot see inside, or the <b>true</b> voltage of a cell without disturbing it? You could clip on an ohmmeter or a voltmeter, but every such meter steals a little current from the circuit, and that theft changes the very quantity you are trying to read. A voltmeter across a cell draws a current <i>I</i>, so it reports <i>E</i> − <i>Ir</i> and not <i>E</i>.<br><br>The clever idea behind every instrument in this topic is to measure by <b>balancing</b> rather than by deflecting: arrange the circuit so that at the moment of measurement <b>no current flows through the detector at all</b>. A measurement made at zero current is a measurement that does not disturb what it measures. This is the <b>null method</b>, and it is the soul of the Wheatstone bridge, the meter bridge and the potentiometer alike.<br><br>The <b>meter bridge</b> is the Wheatstone bridge made practical and cheap. Two of its four arms are replaced by a single uniform one-metre wire, and a sliding contact called a jockey lets you tune the ratio continuously until the galvanometer nulls. Slide, watch for zero, read the length off the scale beneath, done. The <b>potentiometer</b> takes the same idea further. A steady current through a long uniform wire creates a perfectly even potential ramp along it, so many volts per centimetre, the same everywhere. To measure an EMF you tap that ramp at the exact point where it pushes back equally hard against the cell, so that no current flows from the cell. At that point the cell is not loaded at all, and what you read is its true EMF."
        },
        {
          "t": "think",
          "html": "two staircases side by side, and you want to know whether the two people standing on them are at the same height. you do not need to know how tall the staircases are or how either person climbed. lay a plank between them and look: if it stays horizontal, they are level. the bridge weighs an unknown resistance against known ones the way a balance scale weighs an unknown mass against standard weights, by hunting for the point of perfect equilibrium rather than by reading a spring."
        },
        {
          "t": "def",
          "term": "Why a null reading beats a deflection reading",
          "html": "Every deflecting meter is a compromise, because it must take some energy from the circuit to move its needle. An <b>ideal voltmeter</b> would have infinite resistance and draw no current, so it would read the true potential difference; an <b>ideal ammeter</b> would have zero resistance and drop no voltage, so it would not reduce the current it is inserted to measure. Real ones only approximate this, which is why a voltmeter is built with a high resistance and an ammeter with a low one: each is designed to disturb as little as possible of the quantity it reports.<br><br>A null instrument sidesteps the compromise entirely. At balance the detector carries <b>zero</b> current, so it takes nothing from the circuit and its own resistance is irrelevant to the answer. The potentiometer at balance therefore behaves as a voltmeter of infinite resistance, and reads the EMF itself rather than the loaded terminal voltage. The same is true of the bridge: its balance condition contains neither the source EMF nor the galvanometer resistance, so neither can bias the result."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE METER BRIDGE",
          "tag": "the wire only has to be uniform, not special",
          "main": "<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>)  ⟹  <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>",
          "legend": [
            "<i>R</i> = the known resistance in one gap (Ω), <i>X</i> = the unknown resistance in the other gap (Ω)",
            "<i>l</i> = balancing length in cm, measured from the end on the <i>R</i> SIDE of the 100 cm wire; the other wire arm is (100 − <i>l</i>) cm",
            "the wire's resistance per unit length cancels out entirely, so the wire must be UNIFORM but need not be of any particular material or thickness"
          ],
          "note": "Measure l from the wrong end and the answer silently inverts, giving R times l over (100 minus l). Sensitivity is greatest with the null near the middle of the wire, so choose R comparable to X."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 3.19 · THE METER BRIDGE",
          "chips": ["a bridge with two arms made of wire"],
          "captions": [
            "A Wheatstone bridge with two of its arms replaced by one uniform metre wire from A to C. The known R sits in the left gap and the unknown X in the right, meeting at junction B. The jockey rests on the wire at D, a distance l from A, and the galvanometer runs from B to D. Sliding the jockey changes the ratio of the two wire arms continuously, and the null is where R over X equals l over (100 − l). Because the two wire arms are proportional to their lengths, the wire's resistance per centimetre appears on both sides of the balance equation and cancels: that is why any uniform wire will do."
          ],
          "frames": [
            {
              "aspect": 0.643,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 5], "to": [1, 1] },
                  { "from": [1, 1], "to": [2, 1] },
                  { "from": [4, 1], "to": [6, 1] },
                  { "from": [6, 1], "to": [8, 1] },
                  { "from": [10, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 5] },
                  { "from": [1, 5], "to": [11, 5] },
                  { "from": [1, 5], "to": [1, 6.4] },
                  { "from": [1, 6.4], "to": [3.5, 6.4] },
                  { "from": [7, 6.4], "to": [11, 6.4] },
                  { "from": [11, 6.4], "to": [11, 5] }
                ],
                "parts": [
                  { "at": [2, 1], "to": [4, 1], "kind": "R", "label": "R" },
                  { "at": [8, 1], "to": [10, 1], "kind": "R", "label": "X", "tone": "amber" },
                  { "at": [6, 1], "to": [4.5, 5], "kind": "G" },
                  { "at": [3.5, 6.4], "to": [7, 6.4], "kind": "cell", "label": "E" }
                ],
                "nodes": [
                  { "at": [1, 5], "label": "A", "junction": true },
                  { "at": [11, 5], "label": "C", "junction": true },
                  { "at": [6, 1], "label": "B", "junction": true },
                  { "at": [4.5, 5], "label": "D", "junction": true },
                  { "at": [2.7, 5], "label": "l" },
                  { "at": [8, 5], "label": "100 − l" }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE BALANCE LENGTH RELATION, TAP A LINE",
          "steps": [
            {
              "eq": "the wire AC is uniform, so its resistance per unit length is a constant, say <i>k</i>. The two wire arms are then AD = <i>kl</i> and DC = <i>k</i>(100 − <i>l</i>)",
              "why": "Uniform means the same cross-section and the same material everywhere, so <i>R</i> = ρ<i>L</i>/<i>A</i> makes resistance strictly proportional to length. Nothing about the value of <i>k</i> is assumed."
            },
            {
              "eq": "the meter bridge IS a Wheatstone bridge, with <i>R</i> and <i>X</i> as the upper two arms and the two wire pieces as the lower two",
              "why": "The galvanometer runs from the junction B between <i>R</i> and <i>X</i> down to the jockey at D, which is exactly the bridge diagonal. So the balance condition already derived applies unchanged."
            },
            {
              "eq": "at balance: <i>R</i>/<i>X</i> = <i>kl</i>/<i>k</i>(100 − <i>l</i>) = <i>l</i>/(100 − <i>l</i>)",
              "why": "And there is the whole point of the instrument: the unknown <i>k</i> cancels top and bottom. You never have to know the wire's resistivity, its thickness or its total resistance, which is why a cheap uniform wire and a metre scale are enough."
            },
            {
              "eq": "solve: <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>",
              "why": "Sanity-check the direction on every answer. A null to the LEFT of centre means the left wire arm is shorter and so lower in resistance, which forces the right-gap resistance to be the larger of the two."
            },
            {
              "eq": "sensitivity: the bridge responds most sharply to a small imbalance when the null sits near the MIDDLE of the wire",
              "why": "Near the ends the two wire arms are wildly unequal and the balance goes mushy, so a large jockey movement produces almost no change in the galvanometer. Choose the known <i>R</i> comparable to <i>X</i> and the null lands centrally, where a millimetre of jockey travel gives the biggest kick."
            }
          ]
        },
        {
          "t": "p",
          "html": "The potentiometer replaces the sliding-ratio idea with something even cleaner: a <b>potential ramp</b>. Drive a steady current from a driver cell through a long uniform wire and the potential falls evenly along it, so the drop across any length <i>l</i> from the start is <i>V</i><sub>l</sub> = <i>kl</i>, where <i>k</i> is a constant called the <b>potential gradient</b>, in volts per metre. Length has become a precise proxy for potential difference, and a metre scale has become a voltmeter.<br><br>Now put the cell you want to measure into a secondary loop, opposing the ramp, with a galvanometer in series. Slide the contact until the galvanometer reads zero. At that point the ramp's drop over the tapped length exactly cancels the cell's EMF, so <b>no current flows out of the cell</b>, so no <i>Ir</i> is lost inside it, so the balanced potential is the cell's true EMF and not its terminal voltage.<br><br>Three consequences follow. First, comparing two EMFs needs no calibration at all: balance each in turn and <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>, because <i>k</i> cancels. Second, you can measure a cell's internal resistance by balancing it twice, once open and once with a known resistance across it. Third, the driver must be the stronger source: a potentiometer can only balance an EMF <b>smaller</b> than the total drop across its wire, and if the test cell exceeds it, the galvanometer never nulls anywhere and there is no balance point at all."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE POTENTIOMETER",
          "tag": "k cancels in every ratio question",
          "main": "<i>k</i> = <i>V</i>/<i>L</i> = <i>IR</i><sub>wire</sub>/<i>L</i>,  <i>V</i><sub>l</sub> = <i>kl</i><br><i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>,  <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>",
          "legend": [
            "<i>k</i> = potential gradient, SI unit V m<sup>−1</sup>, dimensions [M L T<sup>−3</sup> A<sup>−1</sup>], the same as an electric field",
            "<i>L</i> = total wire length (m), <i>R</i><sub>wire</sub> = its total resistance (Ω), <i>I</i> = the steady primary current (A), <i>V</i> = the drop across the whole wire (V)",
            "<i>l</i><sub>1</sub>, <i>l</i><sub>2</sub> = balancing lengths (cm or m); for internal resistance, <i>l</i><sub>1</sub> is the OPEN-cell length, <i>l</i><sub>2</sub> the length with a known <i>R</i> across the cell, and <i>l</i><sub>2</sub> < <i>l</i><sub>1</sub> always"
          ],
          "note": "For sum and difference, put two cells in the secondary loop aiding and then opposing: E1 + E2 = k l_s and E1 − E2 = k l_d, so E1/E2 = (l_s + l_d)/(l_s − l_d). The opposition length is always the shorter one, since a difference is smaller than a sum."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE · THE POTENTIOMETER, PRIMARY AND SECONDARY",
          "chips": ["a potential ramp, tapped at a null"],
          "captions": [
            "Two loops sharing one wire. The primary, along the top, is the driver cell and a rheostat sending a steady current down the long uniform wire from A to B, which sets up an even potential ramp of k volts per metre. The secondary, along the bottom, is the cell under test in series with a galvanometer, connected between A and the jockey at J. Slide J until the galvanometer reads zero: the ramp's drop over the length l then exactly opposes the cell's EMF. At that instant the cell supplies NO current, so nothing is lost inside it and the reading is the true EMF. Lower the gradient, by lengthening the wire or raising the rheostat, and the same voltage spreads over a longer length, which is what makes the instrument more sensitive."
          ],
          "frames": [
            {
              "aspect": 0.643,
              "circuit": {
                "grid": [12, 7],
                "wires": [
                  { "from": [1, 4], "to": [1, 1] },
                  { "from": [1, 1], "to": [3, 1] },
                  { "from": [6, 1], "to": [7.5, 1] },
                  { "from": [9.5, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 4] },
                  { "from": [1, 4], "to": [11, 4] },
                  { "from": [1, 4], "to": [1, 6.4] },
                  { "from": [1, 6.4], "to": [2.5, 6.4] },
                  { "from": [5, 6.4], "to": [6.5, 6.4] },
                  { "from": [8.5, 6.4], "to": [9.5, 6.4] },
                  { "from": [9.5, 6.4], "to": [9.5, 4] }
                ],
                "parts": [
                  { "at": [3, 1], "to": [6, 1], "kind": "cell", "label": "Ed" },
                  { "at": [7.5, 1], "to": [9.5, 1], "kind": "R", "label": "Rh" },
                  { "at": [2.5, 6.4], "to": [5, 6.4], "kind": "cell", "label": "E", "tone": "amber" },
                  { "at": [6.5, 6.4], "to": [8.5, 6.4], "kind": "G", "tone": "amber" }
                ],
                "nodes": [
                  { "at": [1, 4], "label": "A", "junction": true },
                  { "at": [11, 4], "label": "B", "junction": true },
                  { "at": [9.5, 4], "label": "J", "junction": true },
                  { "at": [5, 4], "label": "l" }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · COMPARING EMFS AND FINDING r, TAP A LINE",
          "steps": [
            {
              "eq": "a steady current <i>I</i> in a uniform wire of length <i>L</i> and total resistance <i>R</i><sub>wire</sub> drops <i>V</i><sub>l</sub> = <i>I</i>(<i>kl</i>) = (<i>IR</i><sub>wire</sub>/<i>L</i>)<i>l</i>, that is <i>V</i><sub>l</sub> ∝ <i>l</i>",
              "why": "Resistance is proportional to length in a uniform wire, and the same current passes through every part of it, so the drop is proportional to length. This linearity is the entire principle, and it needs a uniform wire AND a constant primary current."
            },
            {
              "eq": "COMPARING TWO EMFS. Balance each cell in turn: <i>E</i><sub>1</sub> = <i>kl</i><sub>1</sub> and <i>E</i><sub>2</sub> = <i>kl</i><sub>2</sub>. Divide: <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>",
              "why": "The gradient cancels, so you never need to know it, and neither cell is loaded at its own balance point, so both readings are true EMFs with no internal drop hidden in them. That is why the method is exact rather than merely good."
            },
            {
              "eq": "INTERNAL RESISTANCE. First balance the cell alone, drawing no current, so <i>E</i> = <i>kl</i><sub>1</sub>",
              "why": "Key across the cell open. With no current there is no internal drop, so this length measures the full EMF."
            },
            {
              "eq": "now close a known <i>R</i> across the cell's terminals. It drives <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>), so its terminal voltage falls to <i>V</i> = <i>ER</i>/(<i>R</i> + <i>r</i>), balancing at a SHORTER length <i>l</i><sub>2</sub>: <i>V</i> = <i>kl</i><sub>2</sub>",
              "why": "The cell is now loaded, so its terminal voltage has sagged by <i>Ir</i>, and a smaller voltage balances over a shorter stretch of the ramp. This is where the <i>r</i> information enters."
            },
            {
              "eq": "divide: <i>E</i>/<i>V</i> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>, and since <i>E</i>/<i>V</i> = <i>I</i>(<i>R</i> + <i>r</i>)/<i>IR</i> = (<i>R</i> + <i>r</i>)/<i>R</i>, we get <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>",
              "why": "Open length minus loaded length, over the loaded length, times the known resistance. And it carries a free sanity check: <i>l</i><sub>2</sub> is always less than <i>l</i><sub>1</sub> because a terminal voltage is always less than an EMF, so <i>r</i> must come out positive."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The instruments, and what each one really measures",
          "rows": [
            { "k": "Wheatstone bridge", "v": "compares four resistances. Balance <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> contains no <i>E</i> and no <i>G</i>, so neither source nor detector biases the answer" },
            { "k": "Meter bridge", "v": "the same bridge with two arms made of one uniform wire. <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>. Aim for a null near 50 cm, where sensitivity is greatest" },
            { "k": "Potentiometer", "v": "measures a potential difference by length. Gradient <i>k</i> = <i>IR</i><sub>wire</sub>/<i>L</i> in V m<sup>−1</sup>; at balance it draws zero current and so reads the TRUE EMF" },
            { "k": "Why manganin or constantan", "v": "the potentiometer wire needs a near-zero temperature coefficient, so <i>k</i> stays constant as the current warms the wire. A drifting gradient is a drifting calibration" },
            { "k": "Ideal voltmeter", "v": "infinite resistance, drawing no current, so it does not load what it measures. A real one is built with a HIGH resistance for the same reason" },
            { "k": "Ideal ammeter", "v": "zero resistance, dropping no voltage, so it does not reduce the current it is inserted to read. A real one is built with a LOW resistance" }
          ]
        },
        {
          "t": "proc",
          "title": "Running a potentiometer question",
          "steps": [
            "<b>Ask first whether the question wants an absolute voltage or a ratio.</b> If it is a ratio, comparing EMFs, finding an internal resistance, or a sum-and-difference problem, the gradient <i>k</i> CANCELS and you should never compute it. Work directly with lengths and you will finish in one line.",
            "<b>Only for an absolute voltage, build <i>k</i> from the primary loop.</b> Find the primary current <i>I</i> = <i>E</i><sub>driver</sub>/(<i>R</i><sub>rheostat</sub> + <i>R</i><sub>wire</sub>), take the drop across the wire alone, <i>IR</i><sub>wire</sub>, and divide by the wire's length. Then any balance length gives <i>V</i> = <i>kl</i>.",
            "<b>Check the driver dominates.</b> The total drop across the wire must exceed the EMF you are trying to balance, or there is no null point anywhere on the wire and the experiment simply fails. This is why the primary uses a strong, fresh cell.",
            "<b>For internal resistance, get the order right:</b> <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>, with <i>l</i><sub>1</sub> the OPEN-cell length and <i>l</i><sub>2</sub> the loaded one, and divide by the LOADED length. Written the other way round it hands you a negative resistance.",
            "<b>To make the instrument more sensitive, reduce <i>k</i>.</b> A longer wire or a smaller primary current, via a larger series rheostat, spreads a given voltage over a longer, more precisely measurable balancing length."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "In a meter bridge a known resistance <i>R</i> = 5 Ω sits in the left gap and an unknown <i>X</i> in the right. The galvanometer nulls with the jockey 40 cm from the left end. Find <i>X</i>.",
          "steps": [
            "The balance length is measured from the <i>R</i> side, so <i>l</i> = 40 cm and the other arm is 100 − 40 = 60 cm.",
            "<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>), so <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>.",
            "<i>X</i> = 5 × 60/40 = 5 × 1.5 = 7.5 Ω."
          ],
          "ans": "<i>X</i> = 7.5 Ω. Direction check: the null sits LEFT of centre, so the left wire arm is shorter and lower in resistance, which forces the right-gap resistance to be the larger. 7.5 Ω against 5 Ω, consistent."
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A cell balances at <i>l</i><sub>1</sub> = 300 cm on a potentiometer. With a 4 Ω resistor connected across the cell's terminals the balancing length drops to <i>l</i><sub>2</sub> = 250 cm. Find the internal resistance.",
          "steps": [
            "The trap is reaching for the potential gradient and concluding you are stuck without the primary current or the wire's resistance. You never need <i>k</i>: it cancels.",
            "Use the length-only formula: <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>.",
            "<i>r</i> = 4 × (300 − 250)/250 = 4 × 50/250 = 4 × 0.2 = 0.80 Ω.",
            "Why the length dropped: adding the shunt makes the cell deliver current, so its terminal voltage falls below its EMF, and a smaller voltage balances over a shorter stretch of ramp."
          ],
          "ans": "<i>r</i> = 0.80 Ω. Always expect <i>l</i><sub>2</sub> < <i>l</i><sub>1</sub>. If your arithmetic gives the loaded length as the longer one, you have swapped the two readings, and writing the formula upside down hands you a negative resistance."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A potentiometer wire is 4 m long with a total resistance of 8 Ω, driven by a primary cell of EMF 2.0 V and negligible internal resistance in series with a rheostat <i>R</i><sub>s</sub>. (a) Find <i>R</i><sub>s</sub> so that the potential gradient is exactly 0.40 V/m. (b) At what length does a secondary cell of EMF 1.0 V then balance?",
          "steps": [
            "(a) The primary current is <i>I</i> = <i>E</i><sub>d</sub>/(<i>R</i><sub>s</sub> + <i>R</i><sub>wire</sub>) and the drop across the WIRE alone is <i>IR</i><sub>wire</sub>, so <i>k</i> = <i>IR</i><sub>wire</sub>/<i>L</i> = (2.0 × 8)/[(<i>R</i><sub>s</sub> + 8) × 4].",
            "Set <i>k</i> = 0.40: 16/[4(<i>R</i><sub>s</sub> + 8)] = 0.40, that is 4/(<i>R</i><sub>s</sub> + 8) = 0.40, so <i>R</i><sub>s</sub> + 8 = 10 and <i>R</i><sub>s</sub> = 2.0 Ω.",
            "(b) A balance length satisfies <i>E</i> = <i>kl</i>, so <i>l</i> = <i>E</i>/<i>k</i> = 1.0/0.40 = 2.5 m.",
            "Check the null exists: 2.5 m is comfortably within the 4 m wire, and the total drop across the wire is <i>kL</i> = 0.40 × 4 = 1.6 V, which exceeds the 1.0 V being balanced."
          ],
          "ans": "<i>R</i><sub>s</sub> = 2.0 Ω and the cell balances at 2.5 m. This is one of the few potentiometer questions that genuinely needs <i>k</i>, because part (b) asks for an absolute length rather than a ratio."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "Two cells of EMF <i>E</i><sub>1</sub> and <i>E</i><sub>2</sub>, with <i>E</i><sub>1</sub> > <i>E</i><sub>2</sub>, are tested on a potentiometer of constant gradient <i>k</i> = 0.050 V/cm. Connected in series AIDING in the secondary loop they balance at <i>l</i><sub>s</sub> = 80 cm; connected in OPPOSITION they balance at <i>l</i><sub>d</sub> = 20 cm. Find the ratio <i>E</i><sub>1</sub> : <i>E</i><sub>2</sub> and the individual EMFs.",
          "steps": [
            "The potentiometer balances whatever NET EMF is present in the secondary loop. Aiding gives <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>; opposing gives <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>.",
            "<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> = <i>kl</i><sub>s</sub> = 0.050 × 80 = 4.0 V, and <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub> = <i>kl</i><sub>d</sub> = 0.050 × 20 = 1.0 V.",
            "For the ratio, divide rather than substitute, and <i>k</i> disappears: <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = (<i>l</i><sub>s</sub> + <i>l</i><sub>d</sub>)/(<i>l</i><sub>s</sub> − <i>l</i><sub>d</sub>) = 100/60 = 5/3. This works even if <i>k</i> were unknown.",
            "For the individual values, add and subtract the two equations: <i>E</i><sub>1</sub> = (4.0 + 1.0)/2 = 2.5 V and <i>E</i><sub>2</sub> = (4.0 − 1.0)/2 = 1.5 V."
          ],
          "ans": "<i>E</i><sub>1</sub> : <i>E</i><sub>2</sub> = 5 : 3, with <i>E</i><sub>1</sub> = 2.5 V and <i>E</i><sub>2</sub> = 1.5 V. Check: 2.5/1.5 = 5/3. And the opposition length must be the shorter of the two, since the difference of two EMFs is smaller than their sum, which it is: 20 cm against 80 cm."
        },
        {
          "t": "mcq",
          "q": "A potentiometer is preferred over a voltmeter for measuring the EMF of a cell because:",
          "opts": [
            { "label": "it has a very low resistance", "nudge": "Backwards. A low-resistance meter would load the cell badly. What matters is the EFFECTIVE infinite resistance at balance, where it draws nothing at all." },
            { "label": "at balance it draws no current from the cell, so it reads the true EMF" },
            { "label": "it is cheaper and smaller", "nudge": "It is neither, and in any case cost has nothing to do with what a reading means. The question is about accuracy." },
            { "label": "it amplifies the EMF", "nudge": "No amplification happens anywhere. The instrument COMPARES a voltage against a known ramp; it never boosts anything." }
          ],
          "correct": 1,
          "solution": "At the null point no current flows from the cell, so there is no <i>Ir</i> drop and the reading equals the true EMF. A voltmeter of finite resistance draws current and therefore reports <i>E</i> − <i>Ir</i>, the loaded terminal voltage. The potentiometer at balance behaves as an ideal voltmeter of infinite resistance."
        },
        {
          "t": "mcq",
          "q": "A meter bridge gives its sharpest balance when the null point is located:",
          "opts": [
            { "label": "near the left end, about 10 cm", "nudge": "Here the two wire arms are wildly unequal, the balance goes mushy, and a large jockey movement barely moves the needle." },
            { "label": "near the right end, about 90 cm", "nudge": "The same problem mirrored. Sensitivity is symmetric about the middle and poor at both ends." },
            { "label": "near the middle, about 50 cm" },
            { "label": "anywhere, since position does not matter", "nudge": "A common misconception. The balance CONDITION is exact wherever it occurs, but the precision with which you can find it is not, and that is what sensitivity means." }
          ],
          "correct": 2,
          "solution": "Sensitivity is greatest when the four arms are comparable, which puts the null near the centre. There a millimetre of jockey travel produces the largest galvanometer response. In practice you choose the known resistance <i>R</i> to be comparable to <i>X</i> precisely in order to centre the balance."
        },
        {
          "t": "mcq",
          "q": "A cell balances at 150 cm on a potentiometer. With a 3 Ω resistance across its terminals the balance length becomes 100 cm. The internal resistance of the cell is:",
          "opts": [
            { "label": "0.5 Ω", "nudge": "Drops the factor of <i>R</i>. The length ratio alone is dimensionless and cannot be a resistance." },
            { "label": "1.5 Ω" },
            { "label": "3.0 Ω", "nudge": "Simply echoes the given 3 Ω without doing any arithmetic, which is a no-work trap." },
            { "label": "4.5 Ω", "nudge": "Comes from computing <i>R</i> × <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub> instead of <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>, that is forgetting to take the DIFFERENCE in the numerator." }
          ],
          "correct": 1,
          "solution": "<i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub> = 3 × (150 − 100)/100 = 3 × 0.5 = 1.5 Ω. Open length minus loaded length, over the loaded length, times the known resistance. The loaded length is the shorter one, so the numerator is positive and <i>r</i> comes out positive, which is the built-in check."
        },
        {
          "t": "practice",
          "items": [
            { "q": "In a meter bridge a known resistance <i>R</i> = 6 Ω is in the left gap and the balance point is at 60 cm from the left end. Find the unknown resistance <i>X</i> in the right gap.", "a": "<i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i> = 6 × 40/60 = 4.0 Ω. The null is right of centre, so the right-gap resistance must be the smaller, and 4.0 Ω is below 6 Ω." },
            { "q": "On a potentiometer a Daniell cell of EMF 1.2 V balances at 240 cm. A second cell balances at 360 cm under the same settings. Find the EMF of the second cell.", "a": "<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>, so <i>E</i><sub>2</sub> = 1.2 × 360/240 = 1.8 V. The gradient never had to be computed." },
            { "q": "A potentiometer wire is 10 m long and the potential difference across its full length is 5.0 V. Find the potential gradient and the EMF of a cell that balances at 4.0 m.", "a": "<i>k</i> = <i>V</i>/<i>L</i> = 5.0/10 = 0.50 V/m, and <i>E</i> = <i>kl</i> = 0.50 × 4.0 = 2.0 V. This is an absolute-voltage question, so here <i>k</i> genuinely is needed." },
            { "q": "A cell balances at 250 cm on a potentiometer. With a 5 Ω resistor across it the balance shifts to 200 cm. Find the internal resistance of the cell.", "a": "<i>r</i> = 5 × (250 − 200)/200 = 5 × 0.25 = 1.25 Ω, positive as it must be since the loaded length is the shorter." },
            { "q": "In a meter bridge the balance point is at 25 cm from the left end. The two gap resistances are then interchanged. Find the new balance point and the ratio of the two resistances in the original arrangement.", "a": "Originally <i>R</i>/<i>X</i> = 25/75 = 1/3, so the ratio left to right is 1 : 3. After interchanging, <i>X</i>/<i>R</i> = <i>l</i>′/(100 − <i>l</i>′) gives 3 = <i>l</i>′/(100 − <i>l</i>′) and <i>l</i>′ = 75 cm. The balance point simply mirrors about the centre, which is a useful check on any interchange question." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Flipping the internal-resistance formula.</b> It is <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>: open length minus loaded length, divided by the LOADED length. Writing it the other way round gives a negative, nonsensical answer.",
            "<b>Forgetting the driver must be the stronger source.</b> A potentiometer can only balance an EMF smaller than the total drop across its wire. If the test cell exceeds it, the galvanometer never nulls anywhere and there is no balance point to find.",
            "<b>Measuring the meter-bridge length from the wrong end.</b> <i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>) pairs the length measured from the <i>R</i>-side end with <i>R</i>. Read it from the other end and your answer silently inverts.",
            "<b>Treating a voltmeter reading as an EMF.</b> A voltmeter loads the cell and reads <i>E</i> − <i>Ir</i>. In any question that hinges on the difference between EMF and terminal voltage, that substitution is the whole trap.",
            "<b>Computing the gradient when the question is a ratio.</b> In every comparison, internal-resistance and sum-and-difference problem the gradient cancels. Working it out wastes time and imports rounding error into an answer that did not need it."
          ]
        },
        {
          "t": "protip",
          "html": "in any potentiometer ratio question the gradient <i>k</i> cancels, so never compute it unless the paper asks for an absolute voltage. work straight from the lengths and most of these finish in a single line.<br>for the meter bridge, use the interchange symmetry as a free check: swapping the two gaps must move the balance point to its mirror image about 50 cm, so a null at 25 cm becomes one at 75 cm. and one broader habit for the whole chapter, from the bridge material of Topic 05: before trusting any formula for a bridge, test it on a set of resistances you KNOW to be balanced. anything that does not give exactly zero there is wrong, however plausible the algebra looked."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>), <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>", "note": "meter bridge, <i>l</i> in cm from the <i>R</i> end. Aim for a null near 50 cm" },
            { "f": "<i>k</i> = <i>V</i>/<i>L</i> = <i>IR</i><sub>wire</sub>/<i>L</i>, <i>V</i><sub>l</sub> = <i>kl</i>", "note": "potential gradient in V m<sup>−1</sup>. Needs a uniform wire and a steady primary current" },
            { "f": "<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>", "note": "comparing EMFs. The gradient cancels, so no calibration is needed at all" },
            { "f": "<i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>", "note": "open length <i>l</i><sub>1</sub>, loaded length <i>l</i><sub>2</sub>, and always <i>l</i><sub>2</sub> < <i>l</i><sub>1</sub>" },
            { "f": "<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = (<i>l</i><sub>s</sub> + <i>l</i><sub>d</sub>)/(<i>l</i><sub>s</sub> − <i>l</i><sub>d</sub>)", "note": "sum and difference. The opposition length is always the shorter one" },
            { "f": "ideal voltmeter: infinite <i>R</i> · ideal ammeter: zero <i>R</i>", "note": "so neither disturbs what it measures. A null instrument achieves it exactly" }
          ],
          "aids": [
            "null means no theft: zero current at balance, so the reading is the true EMF",
            "a potentiometer is an infinite-resistance ideal voltmeter",
            "k cancels in every ratio, so only compute it for an absolute voltage",
            "internal resistance: open minus loaded, over loaded",
            "voltmeter high resistance, ammeter low resistance, both for the same reason"
          ]
        }
      ]
    }
  ]
};

export default phy12CurrentElectricity;
