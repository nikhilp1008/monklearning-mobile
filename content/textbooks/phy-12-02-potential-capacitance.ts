/**
 * Chapter 02 · Electrostatic Potential and Capacitance. Physics, Class 12.
 *
 * Restructured from pages 80 to 138 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-09-mech-fluids.ts.
 *
 * FIVE TOPICS FROM FIVE SOURCE SUBTOPICS, and no merges. The source names
 * exactly five: 01 Electrostatic Potential and Equipotential Surfaces, 02
 * Electrostatic Potential Energy, 03 Capacitance and Dielectrics, 04
 * Electrostatics of Conductors, 05 Combination of Capacitors. The reader's own
 * gate (scripts/validate-chapters.mjs, line 89) accepts four to six, so five
 * ships unchanged and nothing had to be merged or split. Each topic below is
 * correspondingly larger than a six-topic chapter's, which is what a 1:1 map
 * looks like when the source has five subtopics and 150 blocks of material.
 *
 * THE ROUND 2 ADDENDUM (pages 122 to 138: A the half-sigma-q-V method, B
 * potential of continuous distributions, C partial dielectrics and the force on
 * a slab, D spherical and cylindrical capacitors, E coalescing charged drops)
 * IS NOT A TOPIC, per the brief. Every line drawn from it below sits in a
 * `protip`, a `mistakes` item, a `practice` item or the hardest `ex` in its
 * group: A into Topic 02's protip and its last practice item, B into Topic 01's
 * ring example (which the chapter body itself already uses), C into Topic 03's
 * composite-dielectric example and protip, D into Topic 04's spherical-capacitor
 * example, E into Topic 04's protip. No `formula`, `defgrid`, `deriv` or `proc`
 * block below is sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). It carries exactly two
 * entries, one for Chapter 7 Alternating Current (a series-LCR practice problem
 * whose stated drive frequency IS the resonant frequency, so the "current lags"
 * premise cannot hold) and one for Chapter 10 Wave Optics (the thin-film
 * dark/bright conditions swapped in one sentence). NEITHER ENTRY TOUCHES PAGES
 * 80 TO 138. Nothing in this chapter is corrected by the errata; everything
 * corrected below was found by recomputation.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 80 to 138 was recomputed independently. The FIVE plated subtopics
 * came out clean: all sixteen worked examples, all twenty-five practice answers
 * and all twenty MCQ keys on pages 81 to 121 reproduce exactly. Every defect is
 * in the Round 2 Addendum, which is where the brief said to look:
 *
 *   1. Addendum A, Practice 1 (page 124): "+4 μC and −6 μC are 0.20 m apart."
 *      Printed U = −1.08 x 10^-3 J = −1.08 mJ. Working:
 *      U = (9 x 10^9)(4 x 10^-6)(−6 x 10^-6)/0.20
 *        = (9 x 10^9)(−2.4 x 10^-11)/0.20 = −0.216/0.20 = −1.08 J.
 *      The printed value is a thousand times too small: the exponents
 *      9 − 6 − 6 = −3 were carried into the answer instead of being cleared by
 *      the 9 x 4 x 6 = 216 in front. CORRECT ANSWER −1.08 J. Topic 02's fifth
 *      practice item asks this question with the right number and makes the
 *      external-agent sign the point of it.
 *   2. Addendum B, Example B.2 (page 127): finite rod, L = 0.40 m,
 *      λ = 2 x 10^-8 C/m, point on the perpendicular bisector at a = 0.10 m.
 *      The logarithm, ln(0.4236/0.0236) = ln 17.95 = 2.889, is right. The
 *      printed line then reads "V = (9 x 10^9)(2 x 10^-8)(2.889) = 0.18 x 2.889
 *      = 0.52 V". But kλ = (9 x 10^9)(2 x 10^-8) = 1.8 x 10^2 = 180 V, not 0.18:
 *      9 x 2 = 18 and 10^(9−8) = 10. CORRECT ANSWER V ≈ 5.2 x 10^2 V.
 *   3. Addendum B, Example B.3 (page 127): charged disk, R = 0.10 m,
 *      σ = 5 x 10^-6 C/m2, x = 0.05 m. Printed V = 1.75 x 10^6 V. Working:
 *      V = (σ/2ε0)(sqrt(R^2 + x^2) − x) = (5.65 x 10^10)(5 x 10^-6)(0.0618).
 *      (5.65 x 10^10)(5 x 10^-6) = 2.825 x 10^5, and x 0.0618 gives
 *      1.75 x 10^4 V. The printed answer is a hundred times too large. CORRECT
 *      ANSWER 1.7 x 10^4 V. The same addendum's own Practice 3, worked with the
 *      same formula, comes out right (8.14 x 10^5 V, independently confirmed),
 *      so the defect is arithmetic in this one example and not in the method.
 *   4. Addendum B, Practice 2 (page 128): rod of length L = 0.30 m, total charge
 *      Q = +2 μC, point ON THE AXIS at a = 0.10 m from the NEARER END. The
 *      printed answer states V = Q ln(L/a)/(4 π ε0 L) and then evaluates
 *      "60 x 0.301 x 1.099 = 19.8 kV". Both halves are wrong. For a point on the
 *      axis the element at distance s contributes k dq/s with s running from a
 *      to a + L, so V = (kQ/L) ln((a + L)/a), not ln(L/a); and the printed
 *      arithmetic multiplies by log10(2) = 0.301 AND by ln(3) = 1.099, which is
 *      neither. Working: kQ/L = (9 x 10^9)(2 x 10^-6)/0.30 = 6.0 x 10^4 V and
 *      ln(0.40/0.10) = ln 4 = 1.386. CORRECT ANSWER V = 8.3 x 10^4 V.
 *   5. Addendum C, Practice 2 part (d) (page 132): the force on a dielectric
 *      entering an isolated capacitor of plate area A = 0.01 m2 charged to
 *      V0 = 200 V, K = 6. Printed F = C0 V0^2 (K − 1)/(2A) = 1.77 x 10^-3 N.
 *      The formula is dimensionally impossible: C V^2 is an energy, and an
 *      energy divided by an AREA is a pressure, not a force. The energy method
 *      differentiates with respect to the distance the slab has moved, so the
 *      denominator is 2s where s is the edge the slab enters along, exactly as
 *      the same addendum's own Example C.1 writes it (F = 3 C0 V0^2/(2s) there).
 *      With square plates, s = sqrt(A) = 0.10 m:
 *      F = (1.77 x 10^-10)(4 x 10^4)(5)/(2 x 0.10) = 3.54 x 10^-5/0.20
 *        = 1.77 x 10^-4 N. CORRECT ANSWER 1.8 x 10^-4 N, ten times smaller than
 *      printed. Topic 03's protip states the force with the length in the
 *      denominator and says why.
 *   6. Addendum A, Example A.2 (page 124), THE SIGN ERROR THE BRIEF PREDICTED.
 *      Four charges of +1 μC each are brought from infinity to the corners of a
 *      square of side 0.50 m, and the question asks "how much energy is
 *      released in the process". The printed answer says "U ≈ 0.098 J of energy
 *      is released as the four charges snap together" and then, in the same
 *      sentence, "like charges repel, so work must be done to assemble them from
 *      infinity". Both cannot be true. Four LIKE charges assembled from infinity
 *      ABSORB energy: the external agent does positive work, W_ext = +ΔU, and
 *      that work is stored, not released. Nothing snaps together. This is the
 *      Gravitation trap in new clothes, the field named as the agent doing work
 *      that an external agent does, and Topic 02's `mistakes` block and its
 *      fifth practice item both attack it. The arithmetic is also a digit out:
 *      4(0.018) + 2(0.018/sqrt 2) = 0.072 + 0.02546 = 0.0975, which is 0.097 J
 *      to two figures, not 0.098 J.
 *   7. Not an error, an ambiguity, recorded because a reader will trip on it.
 *      Figure 2.1 (page 84) is captioned "Surface A is at potential V, surface B
 *      at potential V + dV ... with the field vector E shown pointing from A
 *      toward B". Read naively that says the field points UPHILL. It does not:
 *      the source is following NCERT, where δV is defined as the change in V
 *      measured IN THE DIRECTION OF E and is therefore negative, which is what
 *      makes |E| δl = −δV come out positive two lines later. The derivation's
 *      own text is correct. Figure 2.1 below removes the ambiguity by labelling
 *      the upstream surface V + dV and the downstream one V, so the arrow
 *      visibly runs downhill, and Topic 01's `deriv` says so in words.
 *
 * SOURCE DAMAGE. The brief's patterns behave differently in this range, and
 * every passage below was re-authored from context, never transcribed:
 *
 *   - GREEK AND LATIN SYMBOLS DO NOT VANISH HERE. They survive extraction, but
 *     as MATHEMATICAL ALPHANUMERIC glyphs (U+1D400 to U+1D7FF), which the app's
 *     faces cannot draw and validate-chapters.mjs rejects outright: 404 instances
 *     of math-italic V, 357 of C, 302 of Q, 269 of q, 227 of U, 220 of epsilon,
 *     182 of E, 162 of pi, 140 of K, 134 of mu, 65 of theta, 58 of sigma, and
 *     forty more letters besides. Copying any run of source symbol text verbatim
 *     would have shipped a wall of blank boxes. Every symbol below is retyped as
 *     an ordinary character inside <i> tags, and every Greek letter as its plain
 *     Unicode form.
 *   - FIVE ESCAPE TOKENS, one of them new. This range has "\n7" for the minus
 *     sign (17 instances, e.g. page 83's "V = \n7 INT E . dl" and page 115's
 *     "(V1 \n7 V2)^2" in the energy-loss formula), "\nN" for the times sign (12,
 *     e.g. page 82's "9 \nN 10^9 N m^2 C^-2" and page 109's "Q = 2 \nN 10^-6 C"),
 *     "\nK" for the degree sign (1, page 85's equatorial "theta = 90 \nK"), and
 *     two that the Class 11 log does not list: "\nA" for the CENTRED DOT of a
 *     dot product (9 instances, every one of them inside "E \nA dl" or
 *     "p \nA r-hat", so a vector dot product arrives with its operator replaced
 *     by a control token), and "\nH" for the ELLIPSIS in a series (5 instances,
 *     all in Topic 05's own formulas: "1/C1 + 1/C2 + \nH + 1/Cn" and
 *     "C1 + C2 + \nH + Cn"). A sixth, "\t?", appears once on page 93 where the
 *     dipole work integral should open a bracket: "= pE\t?cos θ0 \n7 cos θ1)".
 *     There is no "\nC" (colon) in this range and no octal escape anywhere.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     permittivity (ε 0), every capacitance (C 1, C 2, C series), every power of
 *     ten (10 -12), every dimensional formula ([M L 2 T -3 A -1]) and every
 *     squared term (V 2, r 2) breaks into a column of fragments. Recomputing
 *     every worked example independently (see CORRECTIONS above) was the check
 *     that these were rebuilt correctly, and it is how items 1 to 5 were caught.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances actually
 *     used or paraphrased below: "the potentialVat that point" (p.81), "you
 *     simplyadd up their individual potentials" (p.81), "perpendicular to the
 *     equipotential surface" run together as "alwaysperpendicular" (p.82),
 *     "V = 0at a point doesnotmeanE = 0there" (p.82), "the total work an
 *     external agent must do" with "bringing each one in slowly" as
 *     "conservative, this bill depends only" (p.91), "U ∝ 1/r,not1/r 2" (p.92),
 *     "capacitance is a property of geometry alone" as "notof how much charge"
 *     (p.99), "Battery disconnected→the chargeQis trapped" and "SoQisking"
 *     (p.99), "the field inside the body of a conductor is zero" as
 *     "the headline result is:the electric field inside" (p.107),
 *     "shielding protects the insidefrom theoutside" (p.107), "Every capacitor
 *     in series carries thesame charge Q" (p.114), and "capacitors add in
 *     parallel, addreciprocally in series" (p.121).
 *   - NO ASCII-SHIFTED HEADING RUN. The "+29" pattern the Class 11 book showed
 *     appears nowhere in pages 80 to 138; every heading in this range extracted
 *     as readable English. Page numbers were still read from the page foot.
 *   - NO LEAKED LATEX in this range, and no pipeline notes.
 *
 * THE SIGN CONVENTION, DECLARED ONCE AND HELD. Topic 01's `def` block fixes it
 * for the whole chapter and every later topic obeys it without restating it:
 * potential is a SIGNED SCALAR; the zero is at infinity; W by an EXTERNAL AGENT
 * moving a charge quasi-statically from A to B is q(V_B − V_A) = +ΔU; W by the
 * FIELD is −ΔU; and E points toward DECREASING V, which is the whole content of
 * the minus sign in E = −dV/dr. Every worked example, practice answer and MCQ
 * below names which agent is doing the work before it writes a sign, because
 * the source's own Addendum A got exactly that backwards (CORRECTIONS item 6).
 *
 * VOLTS ARE NOT JOULES. The chapter's defining error is conflating potential
 * (V, volts, a property of a POINT) with potential energy (U, joules, a property
 * of a CHARGE-plus-field or of a whole CONFIGURATION), and the bridge between
 * them is U = qV, the one place the charge enters. Topic 02's third `mistakes`
 * item is that confusion; Topic 02's `def` block sets E, V and U side by side
 * with their units before a single formula; and every `formula.legend` in this
 * file names the SI unit of every symbol it glosses.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T A (four base
 * quantities, because charge is A T and nothing here is expressible in M L T
 * alone). Twenty-four lines checked, twenty-four consistent, none rejected:
 *
 *   BASE  ε0: [M-1 L-3 T4 A2], so 1/(4 π ε0) = k: [M L3 T-4 A-2]. Check against
 *       its printed unit N m2 C-2: [M L T-2][L2]/[A T]2 = [M L3 T-4 A-2]. ✓
 *       charge q = [A T]; surface density σ = [A T L-2]; linear density
 *       λ = [A T L-1]; dipole moment p = q(2a) = [L T A], which is the source's
 *       own printed [M0 L1 T1 A1]. ✓
 *   T1  V = W/q: [M L2 T-2]/[A T] = [M L2 T-3 A-1], the volt. ✓
 *       V = kQ/r: [M L3 T-4 A-2][A T]/[L] = [M L2 T-3 A-1]. ✓
 *       V_B − V_A = −INT E . dl: [M L T-3 A-1][L] = [M L2 T-3 A-1], matching V,
 *       which is the check that the line integral of a field IS a potential. ✓
 *       E = −dV/dr: [M L2 T-3 A-1]/[L] = [M L T-3 A-1]. Against N C-1:
 *       [M L T-2]/[A T] = [M L T-3 A-1], so V m-1 and N C-1 are the same unit,
 *       which is why the source can print both. ✓
 *       V = p cos θ/(4 π ε0 r2): [M L3 T-4 A-2][L T A]/[L2] = [M L2 T-3 A-1]. ✓
 *       W = q ΔV: [A T][M L2 T-3 A-1] = [M L2 T-2], a joule. ✓
 *   T2  U = k q1 q2/r: [M L3 T-4 A-2][A T]2/[L] = [M L2 T-2]. ✓
 *       U = qV: [A T][M L2 T-3 A-1] = [M L2 T-2], identical, which is the whole
 *       content of "U = qV is the bridge". ✓
 *       U = (1/2) Σ q_i V_i: same reduction, the half being dimensionless. ✓
 *       U = −p . E = −pE cos θ: [L T A][M L T-3 A-1] = [M L2 T-2]. ✓
 *       τ = pE sin θ: the same [M L2 T-2], because a torque and an energy carry
 *       the same dimensions and are told apart by what they DO, not by units. ✓
 *       1 eV = 1.6 x 10^-19 J: [A T][M L2 T-3 A-1] = [M L2 T-2]. ✓
 *   T3  C = Q/V: [A T]/[M L2 T-3 A-1] = [M-1 L-2 T4 A2], the farad. ✓
 *       C = ε0 A/d: [M-1 L-3 T4 A2][L2]/[L] = [M-1 L-2 T4 A2]. ✓ And K is
 *       dimensionless, so C = K ε0 A/d reduces identically, which is the formal
 *       statement of "a dielectric cannot change what kind of quantity C is".
 *       E = σ/ε0: [A T L-2][M L3 T-4 A-2] = [M L T-3 A-1], matching E above. ✓
 *       V = Ed: [M L T-3 A-1][L] = [M L2 T-3 A-1]. ✓
 *       U = (1/2) C V2: [M-1 L-2 T4 A2][M L2 T-3 A-1]2 = [M L2 T-2]. ✓
 *       U = Q2/2C: [A T]2/[M-1 L-2 T4 A2] = [M L2 T-2]. ✓
 *       U = (1/2) QV: [A T][M L2 T-3 A-1] = [M L2 T-2]. ✓ All three forms agree,
 *       which is the free check the brief asks for: a dropped factor shows up as
 *       three answers that do not match.
 *       u = (1/2) ε0 E2: [M-1 L-3 T4 A2][M L T-3 A-1]2 = [M L-1 T-2], an energy
 *       per volume, [M L2 T-2]/[L3]. ✓
 *   T4  C = 4 π ε0 R: [M-1 L-3 T4 A2][L] = [M-1 L-2 T4 A2]. ✓
 *       C = 4 π ε0 ab/(b − a): [M-1 L-3 T4 A2][L2]/[L], identical. ✓
 *   T5  1/C_s = Σ 1/C_i and C_p = Σ C_i: reciprocal farads against reciprocal
 *       farads, farads against farads. ✓
 *       V_c = (C1 V1 + C2 V2)/(C1 + C2): [F][V]/[F] = [V]. ✓
 *       ΔU = (1/2)(C1 C2/(C1 + C2))(V1 − V2)2: [F][V]2 = [M L2 T-2]. ✓
 *
 * PHYSICAL PLAUSIBILITY. Every constant is the one the brief fixes across Class
 * 12: k = 9 x 10^9 N m2 C-2, ε0 = 8.854 x 10^-12 C2 N-1 m-2 (printed to three
 * figures as 8.85 throughout, which is what every number below uses), e = 1.6 x
 * 10^-19 C, c = 3 x 10^8 m/s, electron mass 9.11 x 10^-31 kg. Every capacitance
 * that appears is a real one: pF for the spherical and parallel-plate examples,
 * μF for the network examples, and never a bare farad, because A FARAD IS
 * ENORMOUS. Topic 03 makes that concrete rather than asserting it: an air-gap
 * parallel-plate capacitor of 1 F with d = 1 mm needs A = Cd/ε0 = 10^-3/8.85 x
 * 10^-12 = 1.1 x 10^8 m2, about 113 square kilometres of plate, which is why
 * every capacitor in a real circuit is measured in μF, nF or pF. Every energy
 * below is checked against all three of ½CV2, Q2/2C and ½QV. No speed anywhere
 * approaches c: the fastest is Topic 02's 19 m/s.
 *
 * LIMITING CASES, used where they teach something rather than as decoration.
 *   - K = 1 must return the vacuum result, and it does: C = K ε0 A/d collapses
 *     to ε0 A/d and E = E0/K to E0. Topic 03's `def` block makes that the test
 *     of whether you have the dielectric formulas the right way up, since a K in
 *     the wrong place would give C0/K at K = 1 only by accident.
 *   - d going to zero sends C = ε0 A/d to infinity, and the honest reading is
 *     that the MODEL fails first, not the capacitor: E = V/d rises just as fast,
 *     so the gap breaks down at the dielectric strength long before d is small
 *     enough to matter. Topic 03's `mistakes` block carries this.
 *   - b going to infinity in C = 4 π ε0 ab/(b − a) gives 4 π ε0 a, the isolated
 *     sphere: an outer shell infinitely far away is no shell at all. Topic 04's
 *     protip closes on it.
 *   - r going to infinity sends V = kQ/r to zero, which is not a result but the
 *     CHOICE of zero, and Topic 01 says so where it declares the convention.
 *   - θ = 90° sends the dipole potential p cos θ/(4 π ε0 r2) to zero, which is
 *     the equatorial plane, and sends U = −pE cos θ to zero, which is the chosen
 *     reference. Same cosine, two different meanings, and Topic 02's `mistakes`
 *     block separates them.
 *   - n equal capacitors give C/n in series and nC in parallel, a factor of n2
 *     apart, which is Topic 05's fastest sanity check.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - content/textbooks/phy-12-01-electric-charges-fields.ts DID NOT EXIST when
 *     the first four topics of this file were written: a sibling agent was
 *     writing it concurrently. Two results from it were therefore STATED INLINE
 *     rather than quoted, each in one line, each flagged in its own block as
 *     belonging to the previous chapter:
 *       (i) the field of a point charge, E = kQ/r2 directed away from a positive
 *           charge, stated in Topic 01's first `formula` as the thing the
 *           potential is the line integral of;
 *       (ii) Gauss's law, that the flux of E out of any closed surface is
 *           q_enclosed/ε0, stated in Topic 04's `deriv` A and used three times
 *           in that topic. Topic 04 does not reprove it.
 *     phy-12-01 appeared before this file was finished and BOTH STATEMENTS WERE
 *     THEN CHECKED AGAINST IT AND AGREE: it writes the same field law and states
 *     Gauss's law as the closed integral of E . dA equal to Q_enc/ε0, which is
 *     the same sentence in symbols. Nothing here needed changing and that file
 *     is not edited by this one. One cosmetic difference worth knowing: it
 *     prints ε0 as 8.854 x 10^-12 in seven places and 8.85 in three, while every
 *     number in this file uses 8.85 throughout, which is what the source's own
 *     worked examples use and what every arithmetic result below assumes.
 *   - phy-11-05-work-energy-power.ts (work done by a conservative force is minus
 *     the change in potential energy, and the work-energy theorem): quoted
 *     directly in Topic 02, which identifies electrostatic PE as the same idea
 *     with a new force law rather than rebuilding conservative forces.
 *   - phy-11-07-gravitation.ts (a bound system carries negative energy, and the
 *     zero of potential is a choice made at infinity): quoted in Topic 02's
 *     opening, and deliberately, because the electrostatic case adds the one
 *     thing gravitation cannot show, a POSITIVE bound-looking energy for like
 *     charges.
 *   - math-12-07-integrals.ts (the definite integral, and INT dx/x2 = −1/x):
 *     used unremarked in Topic 01's point-charge derivation and Topic 04's
 *     spherical-capacitor derivation. Class 12 Mathematics reaches integration
 *     before this chapter is taught, so it is not re-introduced.
 *   - NOT quoted, because it is not this chapter's: the capacitor's behaviour in
 *     TIME. Charging through a resistance, the exponential and the time constant
 *     belong to Current Electricity. Topic 03 states the finished result that
 *     half the battery's energy is lost as heat whatever the resistance, and
 *     says explicitly that the proof waits for the next chapter.
 *
 * SEVEN FIGURES NAMED, SEVEN DRAWN, PLUS NINE DESIGNED: fifteen `diagram`
 * blocks carrying twenty-one frames. The source names Figures 2.1 to 2.7 and
 * every one is here: 2.1 and 2.2 in Topic 01, 2.3 in Topic 02, 2.4 in Topic 03,
 * 2.5 in Topic 04, and 2.6 with 2.7 sharing one block in Topic 05.
 * Nine more figures are designed for arguments the source makes in prose and
 * never draws: V against r beside E against r (Topic 01), U against r for like
 * and unlike charges (Topic 02), U against θ for a dipole (Topic 02), the
 * capacitor with and without a dielectric (Topic 03), the battery fork as a
 * flow chart (Topic 03), the area under the q-V line that is the missing half
 * in ½QV (Topic 03), E and V against r for a charged conducting sphere (Topic
 * 04), the cavity with its induced surfaces (Topic 04), and the mixed network
 * of Topic 05's third example. THE PANEL RULE IS OBEYED: Figures 2.6 and 2.7,
 * series against parallel, are TWO CHIPS OF ONE BLOCK and never two panels of
 * one frame, and so are all six other paired figures.
 *
 * CIRCUIT, ON ITS FIRST REAL USE. `FigureCircuit` had never been used by any
 * chapter, and it held up: `grid` plus orthogonal `wires` plus `parts` on grid
 * segments expresses a series chain, a parallel bank and a series-parallel
 * network with no pixel arithmetic anywhere, the 'C' glyph is a proper two-plate
 * capacitor symbol, `nodes` with `junction` draws the solder dots that make a
 * parallel bank readable, and `currents` gives the charge arrow the series
 * figure needs. Three things it lacks, all reported below under FIGURE
 * VOCABULARY REQUESTED, and each worked around rather than approximated.
 *
 * FIGURE VOCABULARY REQUESTED, from the circuit kind only. Everything the plot
 * kind needed already existed.
 *   1. `labels` (free text at a grid coordinate). CircuitDiagram renders wires,
 *      parts, currents and nodes and ignores `frame.labels` entirely, so a
 *      circuit cannot be annotated anywhere except on a part or a node. Figure
 *      2.6's own brief asks for "V1, V2, V3 marked across the three capacitors"
 *      AND the capacitor names, and one `part.label` cannot carry both. Worked
 *      around by naming the capacitors on the parts and putting the voltage
 *      division in the caption.
 *   2. `marks` in a circuit frame. The same brief asks for "+Q/−Q on each plate
 *      pair", which is a charge SIGN, the one thing the tone rules say must be
 *      carried by shape. `FigureMark` already has 'plus' and 'minus' glyphs and
 *      the plot kind draws them; the circuit kind does not read `frame.marks`.
 *      Worked around with a `currents` arrow labelled Q along the bottom rail,
 *      which says the same thing about the series chain and nothing at all about
 *      which plate is which.
 *   3. A part label that can sit on EITHER side of its run. A vertical part's
 *      label is always placed to its right at (mx + 14, my + 3.5) and a
 *      horizontal part's always above it. In the parallel figure that puts every
 *      capacitor's name to the right of it, which is fine at three capacitors
 *      and would collide with the next branch at four. An `at` field, exactly
 *      like `FigureArrow.at`, would fix it.
 * Also worth recording for the next author: check-figures.mjs inspects only
 * `plot`, `numberline` and `flow` frames. A circuit's labels are NOT checked for
 * overlap, so every circuit position below was worked out against the
 * renderer's own placement arithmetic by hand.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12PotentialCapacitance: Chapter = {
  "chapter": "02",
  "title": "Electrostatic Potential and Capacitance",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Electrostatic Potential and Equipotential Surfaces",
      "chip": "01 POTENTIAL",
      "kalam": "altitude belongs to the place, not to the stone",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Electrostatic Potential and Equipotential Surfaces</b><br>The conceptual gateway to the whole chapter. CBSE Boards reliably ask a 2 to 3 mark definition, or the <i>E</i> = −<i>dV</i>/<i>dr</i> derivation, plus an equipotential-surface diagram. JEE Main asks one or two numericals on the potential of a charge system and on the field-potential relation. NEET loves the \"is it <i>V</i> or is it <i>E</i> that is zero here?\" trap and sets it almost every year. JEE Advanced uses this topic as a hidden first step inside larger energy and field problems.<br><br><b>02 · Electrostatic Potential Energy</b><br>A perennial scorer. CBSE Boards routinely ask for the 3 mark derivation of the energy of a two-charge system, or for the dipole result <i>U</i> = −<i>pE</i> cos θ. JEE Main loves system-of-charges numericals and \"released from rest, find the speed\" problems. NEET hammers the 1/<i>r</i> against 1/<i>r</i><sup>2</sup> trap and the sign questions. JEE Advanced folds it inside larger problems: released charges, rotating dipoles, the work to assemble or to dismantle.<br><br><b>03 · Capacitance and Dielectrics</b><br>One of the highest-yield topics in the book. CBSE Boards almost always carry the derivation of <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> and the energy-stored derivation, plus a \"battery connected or disconnected\" reasoning question. JEE Main loves dielectric-insertion numericals and energy changes. NEET reuses the same conceptual fork every year. JEE Advanced pushes into composite dielectrics, the force on a slab, and energy methods.<br><br><b>04 · Electrostatics of Conductors</b><br>A favourite for conceptual marks. CBSE Boards ask the standard properties, the field inside a conductor, the charge on the surface, and <i>E</i> = σ/ε<sub>0</sub> just outside, as 2 to 3 mark reasoning questions. NEET reuses the shielding and cavity idea every cycle. JEE Main and Advanced build induced-charge problems on conductors with cavities, on concentric shells, and on spherical capacitors.<br><br><b>05 · Combination of Capacitors</b><br>Among the most reliably tested topics in the chapter. CBSE Boards ask the series and parallel derivations and a numerical on equivalent capacitance. JEE Main almost guarantees a network-reduction problem carrying the charge or voltage on an individual capacitor. NEET keeps it lighter, equivalent capacitance and the \"series gives less\" idea. JEE Advanced reaches for mixed networks, symmetry, and the energy lost when charged capacitors are reconnected."
        },
        {
          "t": "p",
          "html": "Think about the climb from Dehradun up to Mussoorie. The higher you go, the more you have stored: let go of a stone at the top and it comes crashing down all on its own. <b>Altitude</b> is doing something quietly powerful there. It tells you how much potential to do work a position holds, before you have even put a stone there.<br><br>Notice that altitude belongs to the <b>location on the mountain, not to the stone</b>. A pebble and a boulder both sit at \"2000 metres\". How much energy each actually carries depends on its mass, but the 2000 metres belongs to the spot. Electrostatic potential is exactly this electrical altitude. Every point in an electric field has a number attached to it that answers one question: how much work would it take to haul <b>one unit of positive charge</b> up to here, all the way from infinitely far away? That number is the potential <i>V</i> at that point, and it belongs to the point."
        },
        {
          "t": "think",
          "html": "picture the field around a positive charge as a hill, with the charge sitting on the peak. the potential is the height of the ground at each point, steep and tall near the charge, flattening out as you walk away. now draw the contour lines you would see on a trekking map: each line joins points of equal height. walk along a contour and you neither climb nor descend, so you do zero work. those contours are the equipotential surfaces, and the steepest descent is always perpendicular to them. that is the whole picture, and you already own it."
        },
        {
          "t": "def",
          "term": "The sign convention, decided once for this whole chapter",
          "html": "Four rules, and every worked example, practice answer and MCQ in this chapter obeys them without restating them. <b>One:</b> potential is a <b>signed scalar</b>. A positive charge raises it, a negative charge lowers it, and contributions add with their signs like entries in a bank passbook. <b>Two:</b> the <b>zero is at infinity</b>. That is a choice, not a result, and choosing a different reference shifts every number by the same constant without changing a single physical answer. <b>Three:</b> the work done by an <b>EXTERNAL AGENT</b> carrying a charge <i>q</i> slowly from <i>A</i> to <i>B</i> is <i>W</i><sub>ext</sub> = <i>q</i>(<i>V</i><sub>B</sub> − <i>V</i><sub>A</sub>) = +Δ<i>U</i>, while the work done by the <b>FIELD</b> over the same journey is <i>W</i><sub>field</sub> = −Δ<i>U</i>. Name the agent before you write the sign. <b>Four:</b> the field points toward <b>decreasing</b> potential, always downhill. That is the entire content of the minus sign in <i>E</i> = −<i>dV</i>/<i>dr</i>."
        },
        {
          "t": "p",
          "html": "Two consequences fall out at once, and they are the source of most of the marks lost in this chapter.<br><br><b>Potential is a scalar.</b> It has no direction. When several charges are present you simply add their individual potentials, with signs, and you are done. A contribution of +5 V and one of −5 V cancel to zero. This is gloriously easier than adding electric fields, which are vectors and demand you track directions and angles.<br><br><b>Potential difference is what actually drives charge.</b> Just as water flows from a higher tank to a lower one, positive charge slides from high potential to low. And here is the trap that NEET sets every year: <i>V</i> = 0 at a point does <b>not</b> mean <i>E</i> = 0 there, and <i>E</i> = 0 does <b>not</b> mean <i>V</i> = 0. They answer different questions. At the midpoint between +<i>q</i> and −<i>q</i> the potentials cancel but the fields reinforce, so <i>V</i> = 0 with <i>E</i> large. At the midpoint between two equal positive charges the fields cancel but the potentials add, so <i>E</i> = 0 with <i>V</i> large. Evaluate each separately, every time."
        },
        {
          "t": "think",
          "html": "the deepest version of the same idea: potential is a property of the source and the point, and of nothing else. it does not care whether you ever put a test charge there. altitude on a mountain exists whether or not anyone is standing on it, and a spot at 2000 metres is at 2000 metres for a pebble, a boulder and nobody at all."
        },
        {
          "t": "defgrid",
          "title": "The quantities of electrostatic potential",
          "rows": [
            { "k": "Potential", "v": "<i>V</i> = <i>W</i><sub>∞→P</sub>/<i>q</i><sub>0</sub>, a scalar. SI unit volt, 1 V = 1 J C<sup>−1</sup>. Dimensions [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]" },
            { "k": "Potential difference", "v": "<i>V</i><sub>B</sub> − <i>V</i><sub>A</sub>, same unit and dimensions. A property of the TWO POINTS, never of the charge moved" },
            { "k": "Electric field", "v": "<i>E</i>, a vector. Unit V m<sup>−1</sup> = N C<sup>−1</sup>. Dimensions [M L T<sup>−3</sup> A<sup>−1</sup>]" },
            { "k": "Equipotential surface", "v": "the locus of points at one value of <i>V</i>. Perpendicular to <i>E</i> everywhere, and two of them can never intersect" },
            { "k": "Dipole moment", "v": "<i>p</i> = <i>q</i>(2<i>a</i>), pointing from −<i>q</i> to +<i>q</i>. Unit C m. Dimensions [L T A]" },
            { "k": "Constants", "v": "<i>k</i> = 1/(4πε<sub>0</sub>) = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>, ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POTENTIAL OF A POINT CHARGE",
          "tag": "the workhorse of the whole chapter",
          "main": "<i>V</i> = (1/4πε<sub>0</sub>) <i>Q</i>/<i>r</i> = <i>kQ</i>/<i>r</i>",
          "legend": [
            "<i>Q</i> = the source charge in coulombs, carrying its own sign; <i>r</i> = distance from the charge to the point, in metres (m)",
            "<i>k</i> = 1/(4πε<sub>0</sub>) = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>, and <i>V</i> comes out in volts (V), which are joules per coulomb",
            "from the previous chapter, the field of the same charge is <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>, pointing away from a positive charge. Potential is its line integral, which is why one power of <i>r</i> is lost"
          ],
          "note": "Valid for a point charge, or for a spherically symmetric charge seen from outside it, with V = 0 at infinity. Notice V falls as 1/r while E falls as 1/r squared: they are different functions of distance and confusing them is the commonest slip in the topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POTENTIAL DIFFERENCE AND WORK",
          "main": "<i>V</i><sub>B</sub> − <i>V</i><sub>A</sub> = − ∫ <i>E</i> · <i>dl</i> from <i>A</i> to <i>B</i><br><i>W</i><sub>ext</sub> = <i>q</i>(<i>V</i><sub>B</sub> − <i>V</i><sub>A</sub>) = <i>q</i>Δ<i>V</i>",
          "legend": [
            "<i>E</i> = the electric field along the path, in V m<sup>−1</sup>; <i>dl</i> = an element of the path, in metres (m)",
            "<i>q</i> = the charge being moved, in coulombs (C); <i>W</i><sub>ext</sub> = work done by an EXTERNAL AGENT, in joules (J)",
            "the work done by the FIELD over the same journey is the negative of this, <i>W</i><sub>field</sub> = −<i>q</i>Δ<i>V</i>"
          ],
          "note": "The integral is path-independent, which is exactly what makes potential a usable idea: round any closed loop the net work is zero, so a charge carried once around and back to its starting point has cost nothing."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.1 · EQUIPOTENTIALS, AND WHY THE FIELD CROSSES THEM AT RIGHT ANGLES",
          "chips": ["two surfaces, one step apart", "circles round a point charge"],
          "captions": [
            "Two closely spaced equipotential surfaces. The upstream one is at V + dV and the downstream one at V, so the field runs downhill from left to right and dl is the perpendicular gap between them. Carry a unit positive charge across against the field and the work is E dl, which must equal the potential it climbs. That single sentence gives E = −dV/dr. Read it backwards and you get the other half: where the surfaces crowd together the same drop in V happens over a smaller dl, so the field is strong; where they spread apart it is weak.",
            "The same law for a single positive charge. The equipotentials are spheres, drawn here as circles, and the field lines are radii. Every radius meets every circle at a right angle, which is not a coincidence: if the field had any component ALONG a surface it would do work moving a charge along it, and then the surface would not be an equipotential. The circles crowd near the charge, which is where the field is strong."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 8], "axes": "none", "aspect": 0.72,
              "polys": [
                { "pts": [[2.4, 0.8], [3.0, 2.4], [3.2, 4.0], [2.9, 5.6], [2.3, 7.0]], "smooth": true, "tone": "ink" },
                { "pts": [[4.6, 0.8], [5.2, 2.4], [5.4, 4.0], [5.1, 5.6], [4.5, 7.0]], "smooth": true, "tone": "ink" }
              ],
              "arrows": [
                { "from": [2.85, 3.7], "to": [4.35, 3.7], "tone": "amber", "label": "E", "at": "above" }
              ],
              "segments": [
                { "from": [2.85, 2.3], "to": [4.35, 2.3], "dash": true, "soft": true, "label": "dl", "at": "below" }
              ],
              "labels": [
                { "x": 1.6, "y": 7.5, "text": "V + dV" },
                { "x": 6.2, "y": 7.5, "text": "V" }
              ]
            },
            {
              "x": [-3.2, 3.2], "y": [-3.2, 3.2], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "r": 1.0, "soft": true, "dash": true },
                { "c": "circle", "r": 1.9, "soft": true, "dash": true },
                { "c": "circle", "r": 2.8, "soft": true, "dash": true }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus", "tone": "ink", "label": "+Q" }
              ],
              "arrows": [
                { "from": [0.4, 0], "to": [3.0, 0], "tone": "amber" },
                { "from": [0, 0.4], "to": [0, 3.0], "tone": "amber" },
                { "from": [-0.4, 0], "to": [-3.0, 0], "tone": "amber" },
                { "from": [0, -0.4], "to": [0, -3.0], "tone": "amber" }
              ],
              "labels": [
                { "x": -1.75, "y": 2.35, "text": "equipotentials" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "It is worth knowing what the equipotentials of the standard arrangements actually look like, because a two-mark diagram question asks for exactly this and there is no calculation to hide behind.<br><br><b>A single point charge:</b> concentric <b>spheres</b>, crowded near the charge and spreading out with distance, with the radial field lines meeting every one of them at a right angle. <b>A uniform field,</b> such as the gap of a parallel-plate capacitor: a stack of parallel <b>planes</b> perpendicular to the field, evenly spaced, because a uniform field means a potential that falls at a steady rate. <b>A dipole:</b> not spheres at all, and the one surface you should be able to draw without thinking is the <b>flat plane through the centre</b>, perpendicular to the axis, on which <i>V</i> = 0 because every point on it is equidistant from both charges. <b>A charged conductor of any shape:</b> its own surface is an equipotential, and so is every surface just outside it, which is why the field always leaves a conductor perpendicular to its skin.<br><br>One rule polices all four: <b>equipotentials never cross</b>. A crossing point would carry two different potentials at once, and a point has only one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · POTENTIAL DUE TO A POINT CHARGE, TAP A LINE",
          "steps": [
            {
              "eq": "put +<i>Q</i> at the origin and carry a test charge <i>q</i><sub>0</sub> in from infinity to a point at distance <i>r</i>, moving it so slowly it never gains kinetic energy",
              "why": "Quasi-static on purpose. If the charge picked up speed, some of the external agent's work would have gone into kinetic energy and the number we are defining would not belong to the point alone. Taking V = 0 at infinity is the convention declared above."
            },
            {
              "eq": "at an intermediate distance <i>x</i> the field is <i>E</i> = <i>kQ</i>/<i>x</i><sup>2</sup>, pointing outward, so the external agent must push inward with an equal and opposite force",
              "why": "This is the field law from the previous chapter, used and not reproved. The agent's force cancels the electric force exactly, which is what moving without acceleration means."
            },
            {
              "eq": "<i>V</i> = − ∫ <i>E</i> <i>dx</i> from ∞ to <i>r</i> = −<i>kQ</i> ∫ <i>dx</i>/<i>x</i><sup>2</sup> = −<i>kQ</i> [−1/<i>x</i>] from ∞ to <i>r</i>",
              "why": "The dot product picks out the component of E along the path, and on a radial path E and dl are parallel, so the dot product is just E dx. The leading minus is what turns work done against the field into potential."
            },
            {
              "eq": "<i>V</i> = −<i>kQ</i>(−1/<i>r</i> + 0) = <i>kQ</i>/<i>r</i>",
              "why": "The zero is the value at infinity, which is the reference we chose. A negative source charge simply carries its sign through and gives a negative potential, which is consistent with potential being a signed scalar and is the whole reason the sign convention had to be declared first."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD IS MINUS THE POTENTIAL GRADIENT",
          "steps": [
            {
              "eq": "take two equipotential surfaces a perpendicular distance δ<i>l</i> apart, the upstream one at <i>V</i> + δ<i>V</i> and the downstream one at <i>V</i>, with δ<i>V</i> the drop across the gap",
              "why": "The field must be perpendicular to both surfaces, because a component along a surface would do work moving a charge along it and the surface would then not be an equipotential. So the shortest path between them is along E."
            },
            {
              "eq": "carry a unit positive charge from the low surface to the high one, against the field, through δ<i>l</i>. The work done is <i>W</i> = <i>E</i> δ<i>l</i>",
              "why": "Force times distance, with the external agent supplying a force of size E on a unit charge. Naming the agent matters: the FIELD does −E δl over the same journey."
            },
            {
              "eq": "but that work is also the potential it climbs, so <i>E</i> δ<i>l</i> = δ<i>V</i>, hence <i>E</i> = δ<i>V</i>/δ<i>l</i> measured against the field",
              "why": "This is just W = q ΔV with q = 1. Both readings of the same work have to agree, which is what pins the size of E to the steepness of V."
            },
            {
              "eq": "measure <i>r</i> ALONG the field instead, so <i>V</i> falls as <i>r</i> grows, and in the limit δ<i>l</i> → 0: <i>E</i> = −<i>dV</i>/<i>dr</i>",
              "why": "The minus sign is bookkeeping about direction, not a new physical fact: V decreases along E, so dV/dr is negative and E comes out positive. Two readings follow. The field points where V falls most steeply, and its size is the potential GRADIENT, so crowded equipotentials mean a strong field."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · POTENTIAL AND FIELD ARE DIFFERENT FUNCTIONS OF DISTANCE",
          "chips": ["potential falls as one over r", "field falls as one over r squared"],
          "captions": [
            "The potential of a point charge against distance. It falls as 1/r: double the distance and the potential halves. There is no flat part and no kink, and it approaches zero only at infinity, which is where we chose the zero to be.",
            "The field of the same charge, on the same axes, with the potential drawn faintly behind it for comparison. The field falls as 1/r squared, so it collapses much faster: at r = 2 m the potential has halved but the field has quartered. Every arithmetic disaster in this chapter starts with using one curve where the other was meant, and the giveaway is the exponent."
          ],
          "frames": [
            {
              "x": [0, 4], "y": [0, 7], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "V", "ticksX": { "every": 1 }, "ticksY": { "every": 2 },
              "curves": [{ "c": "recip", "a": 3 }],
              "labels": [
                { "x": 2.5, "y": 3.6, "text": "V = kQ/r" }
              ]
            },
            {
              "x": [0, 4], "y": [0, 7], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "E", "ticksX": { "every": 1 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "recip", "a": 3, "dash": true, "soft": true },
                { "c": "power", "a": 3, "p": -2 }
              ],
              "labels": [
                { "x": 2.5, "y": 4.4, "text": "E = kQ/r²" },
                { "x": 2.6, "y": 1.5, "text": "V, faint, for contrast" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SUPERPOSITION, AND THE SHORT DIPOLE",
          "main": "<i>V</i> = <i>k</i> Σ <i>q</i><sub>i</sub>/<i>r</i><sub>i</sub><br><i>V</i><sub>dipole</sub> = <i>kp</i> cos θ/<i>r</i><sup>2</sup>",
          "legend": [
            "<i>q</i><sub>i</sub> = the <i>i</i>th charge in coulombs, with its sign; <i>r</i><sub>i</sub> = its distance to the point in metres (m). The sum is ALGEBRAIC, with no angles anywhere",
            "<i>p</i> = <i>q</i>(2<i>a</i>) = the dipole moment in C m; θ = the angle between the dipole axis and the line to the point, in degrees; <i>r</i> = distance from the dipole's centre (m)",
            "<i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup> and <i>V</i> is in volts (V) in both lines"
          ],
          "note": "The dipole result holds only in the far field, r much greater than the separation 2a. On the axis (theta = 0) it is largest; on the equatorial plane (theta = 90 degrees) it is exactly zero, because every point there is equidistant from both charges."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · POTENTIAL OF A SHORT DIPOLE",
          "steps": [
            {
              "eq": "superpose the two point-charge potentials at a point <i>P</i> distant <i>r</i><sub>1</sub> from +<i>q</i> and <i>r</i><sub>2</sub> from −<i>q</i>: <i>V</i> = <i>kq</i>(1/<i>r</i><sub>1</sub> − 1/<i>r</i><sub>2</sub>) = <i>kq</i>(<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub><i>r</i><sub>2</sub>)",
              "why": "Superposition, and nothing more. This is one line of algebra precisely because potential is a scalar: had we been adding fields we would need components, angles and a diagram at this step."
            },
            {
              "eq": "drop perpendiculars from the two charges onto the line <i>OP</i>. For <i>r</i> ≫ <i>a</i>: <i>r</i><sub>1</sub> ≈ <i>r</i> − <i>a</i> cos θ and <i>r</i><sub>2</sub> ≈ <i>r</i> + <i>a</i> cos θ",
              "why": "The far-field approximation. From far away the two lines to P are nearly parallel, so the extra distance to the far charge is just the projection a cos θ. This is the only approximation in the derivation and it is where r much greater than 2a is used."
            },
            {
              "eq": "so <i>r</i><sub>2</sub> − <i>r</i><sub>1</sub> ≈ 2<i>a</i> cos θ and <i>r</i><sub>1</sub><i>r</i><sub>2</sub> ≈ <i>r</i><sup>2</sup>",
              "why": "The product keeps only the leading term because the a cos θ pieces cancel to first order. Keeping them would give a correction of order a squared over r squared, which is exactly what \"short dipole\" throws away."
            },
            {
              "eq": "<i>V</i> = <i>kq</i>(2<i>a</i> cos θ)/<i>r</i><sup>2</sup> = <i>kp</i> cos θ/<i>r</i><sup>2</sup>",
              "why": "Two checks. It falls as 1 over r squared, FASTER than a point charge's 1 over r, because the two opposite potentials nearly cancel at large distance. And it depends on direction, which a point charge's never does: maximum on the axis, exactly zero on the equatorial plane."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.2 · THE DIPOLE GEOMETRY THE DERIVATION USES",
          "chips": ["r1, r2 and the projection a cos theta"],
          "captions": [
            "A dipole of charges −q and +q separated by 2a about its centre O, with a point P at distance r and at angle theta to the axis. The two dashed lines are r1 from +q and r2 from −q. The short dashed strokes are the perpendiculars dropped from each charge onto OP, and the pieces they cut off along OP are ±a cos theta. That is the whole approximation: from far away r1 is shorter than r by a cos theta and r2 is longer by the same amount, so the difference is 2a cos theta and the product is r squared."
          ],
          "frames": [
            {
              "x": [-4, 6], "y": [-1.5, 5.5], "axes": "none", "aspect": 0.72,
              "marks": [
                { "x": -1, "y": 0, "glyph": "minus", "tone": "ink", "label": "−q" },
                { "x": 1, "y": 0, "glyph": "plus", "tone": "ink", "label": "+q" }
              ],
              "points": [
                { "x": 0, "y": 0, "label": "O", "at": "sw" },
                { "x": 3.9, "y": 3.5, "label": "P", "at": "ne" }
              ],
              "segments": [
                { "from": [-3.4, 0], "to": [5.4, 0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [3.9, 3.5], "label": "r", "at": "mid" },
                { "from": [1, 0], "to": [3.9, 3.5], "dash": true, "label": "r₁", "at": "end" },
                { "from": [-1, 0], "to": [3.9, 3.5], "dash": true, "label": "r₂", "at": "start" },
                { "from": [1, 0], "to": [0.56, 0.5], "dash": true, "soft": true },
                { "from": [-1, 0], "to": [-0.56, -0.5], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [0, 0], "r": 1.9, "from": 0, "to": 42, "label": "θ", "tone": "amber" }
              ],
              "arrows": [
                { "from": [-1, -1.05], "to": [1, -1.05], "head": "both", "tone": "ink", "label": "2a", "at": "below" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two features of that dipole result are worth more than the algebra that produced them.<br><br><b>It falls off faster.</b> A point charge's potential goes as 1/<i>r</i>; a dipole's goes as 1/<i>r</i><sup>2</sup>. The reason is physical, not algebraic: the two opposite charges nearly cancel each other from far away, and the leftover is a difference of two nearly equal numbers. The same logic pushes a quadrupole to 1/<i>r</i><sup>3</sup>.<br><br><b>It has a direction.</b> A point charge's potential is the same everywhere on a sphere around it. A dipole's is not: it is largest on the axis, zero on the equatorial plane, and negative on the far side. So the equipotentials of a dipole are not spheres, and the equipotential surface <i>V</i> = 0 is the flat plane through its centre. This is where exam questions like to live, because a student who has only ever drawn spheres has nothing to draw."
        },
        {
          "t": "proc",
          "title": "Finding the potential at a point due to several charges",
          "steps": [
            "<b>Write down each charge with its sign.</b> Not its magnitude. The sign is doing real work in the sum and dropping it is the fastest way to a wrong answer.",
            "<b>Find each distance to the point.</b> Geometry only, and it is worth naming the triangle: a 3-4-5 turns 0.4 and 0.3 into 0.5 with no calculator, and the centroid of an equilateral triangle of side <i>a</i> is at <i>a</i>/√3 from each vertex.",
            "<b>Add <i>kq</i><sub>i</sub>/<i>r</i><sub>i</sub> algebraically.</b> No components, no angles, no resolving. If you find yourself drawing a vector triangle you have started solving the wrong problem.",
            "<b>If the field is wanted too, start again from scratch.</b> Fields are vectors and must be added as vectors. The two answers are independent, and a symmetric arrangement will very often give one of them zero and not the other.",
            "<b>Sanity check the sign.</b> The final <i>V</i> should carry the sign of whichever charge dominates: nearest and biggest wins. If a symmetric system of equal and opposite charges hands you a non-zero potential at the symmetry point, hunt for the arithmetic slip."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A small charged sphere carries +25 nC. (a) Find the electrostatic potential at a point <i>P</i> that is 0.30 m from its centre. (b) How much work must be done to bring a charge of +2 nC from infinity to <i>P</i>?",
          "steps": [
            "Given <i>Q</i> = +25 × 10<sup>−9</sup> C, <i>r</i> = 0.30 m, <i>q</i><sub>0</sub> = +2 × 10<sup>−9</sup> C. Outside a spherically symmetric charge the potential is the point-charge one.",
            "(a) <i>V</i> = <i>kQ</i>/<i>r</i> = (9 × 10<sup>9</sup>)(25 × 10<sup>−9</sup>)/0.30 = 225/0.30 = 750 V.",
            "(b) The work is done by an external agent, and the potential at infinity is zero, so <i>W</i><sub>ext</sub> = <i>q</i><sub>0</sub>(<i>V</i><sub>P</sub> − <i>V</i><sub>∞</sub>) = <i>q</i><sub>0</sub><i>V</i> = (2 × 10<sup>−9</sup>)(750) = 1.5 × 10<sup>−6</sup> J.",
            "Positive, and it should be: the agent is pushing a positive charge toward a positive sphere, uphill all the way. The field does −1.5 μJ over the same journey."
          ],
          "ans": "<i>V</i> = 750 V · <i>W</i><sub>ext</sub> = 1.5 μJ"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Charges of +4 μC and −4 μC are fixed 0.20 m apart. At the exact midpoint of the line joining them, find the potential <i>V</i> and the magnitude of the field <i>E</i>.",
          "steps": [
            "The instinct that snares people: \"equal and opposite, so everything cancels.\" Half right, and that half is the trap.",
            "Potential is a scalar, so add with signs. The midpoint is 0.10 m from each: <i>V</i> = <i>k</i>(+4 μC)/0.10 + <i>k</i>(−4 μC)/0.10 = 0.",
            "Field is a vector, so add with directions. The field of +4 μC points away from it, toward the negative charge. The field of −4 μC points toward it, which is the same way. They reinforce.",
            "<i>E</i> = 2 × <i>kq</i>/<i>r</i><sup>2</sup> = 2 × (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)/(0.10)<sup>2</sup> = 2 × (3.6 × 10<sup>6</sup>) = 7.2 × 10<sup>6</sup> N C<sup>−1</sup>."
          ],
          "ans": "<i>V</i> = 0 but <i>E</i> = 7.2 × 10<sup>6</sup> N C<sup>−1</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A thin ring of radius <i>R</i> = 0.4 m carries a uniformly distributed charge <i>Q</i> = +8 nC. (a) Find the potential at the centre <i>O</i> and at a point <i>P</i> on the axis, 0.3 m from the centre. (b) Find the work done in carrying +5 nC from <i>P</i> to <i>O</i>.",
          "steps": [
            "Every element of the ring is the SAME distance √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) from an axial point, so the superposition sum collapses to a single division: <i>V</i><sub>axis</sub> = <i>kQ</i>/√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>). No integration is needed, which is the whole reason the ring is the standard first continuous distribution.",
            "(a) At the centre, <i>x</i> = 0: <i>V</i><sub>O</sub> = (9 × 10<sup>9</sup>)(8 × 10<sup>−9</sup>)/0.4 = 72/0.4 = 180 V.",
            "At <i>P</i>: √(0.4<sup>2</sup> + 0.3<sup>2</sup>) = √0.25 = 0.5 m, a 3-4-5 triangle. <i>V</i><sub>P</sub> = 72/0.5 = 144 V.",
            "(b) <i>W</i><sub>ext</sub> = <i>q</i>(<i>V</i><sub>O</sub> − <i>V</i><sub>P</sub>) = (5 × 10<sup>−9</sup>)(180 − 144) = (5 × 10<sup>−9</sup>)(36) = 1.8 × 10<sup>−7</sup> J."
          ],
          "ans": "<i>V</i><sub>O</sub> = 180 V · <i>V</i><sub>P</sub> = 144 V · <i>W</i><sub>ext</sub> = 0.18 μJ"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "In a region the potential is <i>V</i>(<i>x</i>, <i>y</i>) = α(<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup>) with α = 50 V m<sup>−2</sup> and coordinates in metres. (a) Find the field as a function of position. (b) Find its magnitude at (2, 1) m. (c) Name the shape of the equipotential surfaces. (d) Where is the field zero?",
          "steps": [
            "(a) The field is minus the gradient, taken one coordinate at a time: <i>E</i><sub>x</sub> = −∂<i>V</i>/∂<i>x</i> = −2α<i>x</i>, <i>E</i><sub>y</sub> = −∂<i>V</i>/∂<i>y</i> = +2α<i>y</i>, <i>E</i><sub>z</sub> = 0. Note the second sign: differentiating −α<i>y</i><sup>2</sup> and then negating gives a PLUS.",
            "(b) At (2, 1): <i>E</i><sub>x</sub> = −2(50)(2) = −200 V m<sup>−1</sup> and <i>E</i><sub>y</sub> = +2(50)(1) = +100 V m<sup>−1</sup>. Magnitude = √(200<sup>2</sup> + 100<sup>2</sup>) = √50000 ≈ 224 V m<sup>−1</sup>.",
            "(c) <i>V</i> = constant means <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = constant, a family of <b>rectangular hyperbolas</b>, which in three dimensions are hyperbolic cylinders. Not every equipotential is a sphere or a plane, and this is the geometry Advanced likes because it defeats a memorised picture.",
            "(d) Both components vanish only at the <b>origin</b>. Note that <i>V</i>(0, 0) = 0 there as well, but that is a coincidence of this particular function and not a rule."
          ],
          "ans": "<i>E</i> = (−2α<i>x</i>, +2α<i>y</i>) · |<i>E</i>| ≈ 224 V m<sup>−1</sup> · rectangular hyperbolas · <i>E</i> = 0 at the origin"
        },
        {
          "t": "mcq",
          "q": "At the midpoint of the line joining a +<i>q</i> and a −<i>q</i> charge, the potential <i>V</i> and the field <i>E</i> are:",
          "opts": [
            { "label": "<i>V</i> = 0 and <i>E</i> = 0", "nudge": "This assumes everything cancels, which is the classic confusion of treating a vector field like a scalar potential. The two fields point the SAME way at the midpoint, so they add." },
            { "label": "<i>V</i> = 0 and <i>E</i> ≠ 0", "nudge": null },
            { "label": "<i>V</i> ≠ 0 and <i>E</i> = 0", "nudge": "This is the exact inversion of the truth: it cancels the vector and adds the scalar. Between two LIKE charges it would be right, which is why it feels familiar." },
            { "label": "<i>V</i> ≠ 0 and <i>E</i> ≠ 0", "nudge": "This forgets that potential is a signed scalar and that the two contributions here are exactly opposite. +kq/r and −kq/r sum to zero with no work at all." }
          ],
          "correct": 1,
          "solution": "Potentials from equal and opposite charges at equal distances cancel, so V = 0. The two field vectors both point from the positive charge toward the negative one, so they reinforce and E = 7.2 × 10⁶ N/C for the standard 4 μC pair at 0.20 m. Zero potential, very much non-zero field."
        },
        {
          "t": "mcq",
          "q": "Which statement about equipotential surfaces is FALSE?",
          "opts": [
            { "label": "No work is done moving a charge along an equipotential surface", "nudge": "This is a core property, not the false one. Along the surface there is no potential difference, so W = qΔV = 0 whatever path you take on it." },
            { "label": "The electric field is everywhere perpendicular to the surface", "nudge": "Also a core property. Any component of E along the surface would do work moving a charge along it, and the surface would stop being an equipotential." },
            { "label": "Two equipotential surfaces can intersect where the field is zero", "nudge": null },
            { "label": "Equipotential surfaces are closer together where the field is stronger", "nudge": "This follows directly from E = −dV/dr and is true. The trap here is mistaking a correct statement for the false one because it sounds like a claim rather than a definition." }
          ],
          "correct": 2,
          "solution": "Equipotential surfaces never intersect, anywhere, for any field. A crossing point would have to carry two different potentials at once, which is impossible: the potential is a single number attached to a point. The clause about the field being zero is a decoy and changes nothing."
        },
        {
          "t": "mcq",
          "q": "In a region of space the potential is constant and non-zero. The electric field in that region is:",
          "opts": [
            { "label": "zero", "nudge": null },
            { "label": "constant but non-zero", "nudge": "This confuses a constant potential with a constant field. A constant potential has zero gradient, and it is the gradient that the field equals." },
            { "label": "infinite", "nudge": "Nothing in E = −dV/dr can produce an infinite value from a potential that does not change. An infinite field would need V to jump over zero distance." },
            { "label": "larger where <i>V</i> is larger", "nudge": "This is the deep-rooted error of thinking a big potential means a big field. The field depends on how FAST V changes, not on how big it is: a plateau at 10000 V has zero field everywhere on it." }
          ],
          "correct": 0,
          "solution": "E = −dV/dr. If V does not change from point to point, its gradient is zero everywhere in the region, so E = 0. This is exactly why the inside of a conductor, which is one big equipotential, has no field in it."
        },
        {
          "t": "mcq",
          "q": "A point charge −<i>Q</i> produces, at a distance <i>r</i>, a potential that is:",
          "opts": [
            { "label": "positive", "nudge": "This ignores the sign of the source. Potential is a signed scalar and it carries the sign of the charge that makes it, which is the first line of this chapter's convention." },
            { "label": "negative", "nudge": null },
            { "label": "zero", "nudge": "That would need either Q = 0 or r infinite. A real charge at a finite distance always contributes something." },
            { "label": "dependent on the test charge placed there", "nudge": "This is the conceptual trap: it turns a property of the point into a property of whatever you put there. Nothing need be placed at the point at all for the potential to have a value." }
          ],
          "correct": 1,
          "solution": "V = k(−Q)/r is negative. Potential is a property of the source and the point together, and it exists whether or not a test charge is ever brought there, exactly as an altitude of 2000 m exists whether or not anyone is standing on the spot."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A point charge of +40 nC sits in vacuum. Find the potential 0.20 m away, and the work an external agent must do to bring +5 nC from infinity to that point.", "a": "<i>V</i> = <i>kQ</i>/<i>r</i> = (9 × 10<sup>9</sup>)(40 × 10<sup>−9</sup>)/0.20 = 1800 V. <i>W</i><sub>ext</sub> = <i>qV</i> = (5 × 10<sup>−9</sup>)(1800) = 9 × 10<sup>−6</sup> J = 9 μJ, positive because the agent pushes a positive charge uphill." },
            { "q": "[NEET] Four equal charges of +5 μC each are fixed at the corners of a square, each corner 1 m from the centre. Find the potential and the field magnitude at the centre.", "a": "<i>V</i> = 4 × (9 × 10<sup>9</sup>)(5 × 10<sup>−6</sup>)/1 = 1.8 × 10<sup>5</sup> V. <i>E</i> = 0, because the four field vectors cancel in opposite pairs. One quantity zero and the other not, from the same arrangement." },
            { "q": "[JEE Main] Charges of +2 μC, +2 μC and −2 μC sit at the vertices of an equilateral triangle of side 0.30 m. Find the potential at the centroid.", "a": "The centroid is <i>a</i>/√3 = 0.30/1.732 = 0.1732 m from each vertex. The charges sum algebraically to +2 μC, so <i>V</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/0.1732 ≈ 1.04 × 10<sup>5</sup> V." },
            { "q": "[JEE Main] In a region the potential varies as <i>V</i> = 4<i>x</i><sup>2</sup> volt, with <i>x</i> in metres. Find the magnitude and direction of the field at <i>x</i> = 2 m.", "a": "<i>E</i> = −<i>dV</i>/<i>dx</i> = −8<i>x</i>, so at <i>x</i> = 2 m, <i>E</i> = −16 V m<sup>−1</sup>: magnitude 16 V m<sup>−1</sup>, directed along −<i>x</i>. The minus is the field running downhill, since <i>V</i> grows with <i>x</i> here." },
            { "q": "[JEE Advanced] An infinitely long straight wire carries a uniform linear charge density λ = 5 × 10<sup>−9</sup> C m<sup>−1</sup>. Find the potential difference between points at perpendicular distances <i>r</i><sub>1</sub> = 0.10 m and <i>r</i><sub>2</sub> = 0.40 m. Use <i>E</i> = λ/(2πε<sub>0</sub><i>r</i>).", "a": "<i>V</i>(<i>r</i><sub>1</sub>) − <i>V</i>(<i>r</i><sub>2</sub>) = 2<i>k</i>λ ln(<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>) = 2(9 × 10<sup>9</sup>)(5 × 10<sup>−9</sup>) ln 4 = 90 × 1.386 ≈ 125 V, with <i>r</i><sub>1</sub> at the higher potential. Note that no ABSOLUTE potential exists here: the integral diverges at infinity, so an infinite line has only potential differences." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Reading <i>V</i> = 0 as <i>E</i> = 0, or the reverse.</b> These are independent questions with independent answers. Midpoint of two equal and opposite charges: <i>V</i> = 0 but <i>E</i> ≠ 0. Midpoint of two equal LIKE charges: <i>E</i> = 0 but <i>V</i> ≠ 0. Evaluate each on its own, always.",
            "<b>Adding potentials as if they were vectors.</b> Students drag in angles and components out of habit. Do not. Just add <i>kq</i><sub>i</sub>/<i>r</i><sub>i</sub> with their signs. It is a one-line algebraic sum, and reaching for a vector triangle is a sign you have started the wrong problem.",
            "<b>Dropping the minus in <i>E</i> = −<i>dV</i>/<i>dr</i>.</b> The sign is the direction: the field points DOWNHILL, toward lower potential. Without it your field points backwards, and in a two-mark direction question that is the whole mark.",
            "<b>Using 1/<i>r</i><sup>2</sup> for potential.</b> Field goes as 1/<i>r</i><sup>2</sup>, potential as 1/<i>r</i>. The potential is the field integrated over distance, which lifts the power from −2 to −1. If your potential has the same exponent as your force law, you have slipped.",
            "<b>Treating work along an equipotential as path-dependent.</b> Any path ON an equipotential surface costs exactly zero work, however long and however winding, because Δ<i>V</i> = 0 end to end."
          ]
        },
        {
          "t": "protip",
          "html": "for \"find V at a symmetric point\", use the ratio method: compare distances instead of recomputing k each time. 750 V at 0.30 m is 500 V at 0.45 m in one step. then run the sign check, positive charges raise V and negative charges lower it, so the sign of your answer should match whichever charge is nearest and biggest. and keep one sentence ready for the exam hall, because it settles half the conceptual questions in this topic on its own: potential is one number per point, field is one arrow per point, and neither one tells you the other."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>V</i> = <i>kQ</i>/<i>r</i>, a signed scalar, unit volt = J C<sup>−1</sup>", "note": "dimensions [M L² T⁻³ A⁻¹]; the zero is at infinity, by choice" },
            { "f": "<i>V</i> = <i>k</i> Σ <i>q</i><sub>i</sub>/<i>r</i><sub>i</sub>", "note": "algebraic sum, no vectors, no angles, no components" },
            { "f": "<i>V</i><sub>B</sub> − <i>V</i><sub>A</sub> = −∫ <i>E</i> · <i>dl</i> and <i>W</i><sub>ext</sub> = <i>q</i>Δ<i>V</i>", "note": "the field does −qΔV over the same journey; name the agent first" },
            { "f": "<i>E</i> = −<i>dV</i>/<i>dr</i>", "note": "field runs downhill; crowded equipotentials mean a strong field" },
            { "f": "<i>V</i><sub>dipole</sub> = <i>kp</i> cos θ/<i>r</i><sup>2</sup>", "note": "max on the axis, exactly zero on the equatorial plane, falls as 1/r²" },
            { "f": "equipotential ⟂ <i>E</i> everywhere", "note": "zero work along it, and two of them never intersect" }
          ],
          "aids": [
            "\"potential is a scalar, just add with signs\"",
            "\"the field flows downhill\" (that is the minus sign)",
            "\"on an equipotential, you ride free\" (zero work)",
            "\"V and E are different questions, answer each on its own\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Electrostatic Potential Energy",
      "chip": "02 ENERGY",
      "kalam": "volts belong to the point, joules belong to the charge",
      "blocks": [
        {
          "t": "p",
          "html": "Picture seating a large, quarrelsome joint family for a wedding feast. Some relatives cannot stand each other: push two of them close together and you have to keep working to hold them there, and the moment you let go they fly apart. Others are inseparable, they <i>want</i> to sit together, and you would have to do work to pull them apart. The total tension stored in a seating plan depends only on <b>who ends up next to whom</b>, never on the order in which they walked in.<br><br>That stored tension, ready to be released the instant you stop holding things in place, is exactly what <b>electrostatic potential energy</b> measures. It is the total work an external agent must do to assemble a configuration of charges by bringing each one in slowly from infinity, fighting or being helped by the ones already placed. Because the electrostatic force is <b>conservative</b>, the bill depends only on the final arrangement and never on the path or the order of assembly. That path-independence is what makes potential energy a meaningful idea at all: if the work depended on the route, you could not attach a single number to a configuration."
        },
        {
          "t": "p",
          "html": "Topic 01 said <b>potential <i>V</i> is the electrical altitude of a point</b>, work per unit charge to haul a test charge there from infinity. <b>Potential energy <i>U</i> is the actual energy bill for the whole arrangement.</b> Keep the two apart and this topic is bookkeeping; conflate them and every number you write is in the wrong unit.<br><br><b>The sign of <i>U</i> tells you the story of the system.</b> Bring two LIKE charges together and you push against repulsion: the external agent does positive work, so <i>U</i> > 0. The system is wound up like a compressed spring, eager to fly apart. Bring two UNLIKE charges together and the attraction does the work for you: the external agent does negative work, so <i>U</i> < 0. That system is <b>bound</b>, like a fixed deposit, and you would have to invest energy to break it apart. You met exactly this in Gravitation, where every orbiting body carries negative energy. Electrostatics adds the case gravity cannot show you, because gravity has only one sign of mass: a positive potential energy, for two like charges."
        },
        {
          "t": "think",
          "html": "the whole sign business hangs on one question: who is doing the work? when the FIELD does positive work on a charge, the charge falls downhill in energy and U decreases, exactly like a stone losing gravitational PE as it drops. when an EXTERNAL AGENT does positive work, dragging the charge uphill against the field, U increases. so W by the field is −ΔU and W by the agent is +ΔU. keep a firm grip on who is pushing and the sign sorts itself out, every single time."
        },
        {
          "t": "def",
          "term": "Three quantities, three units, one bridge",
          "html": "The chapter's defining error is mixing these up, so set them side by side before touching a formula. <b><i>E</i>, the electric field:</b> a VECTOR, unit N C<sup>−1</sup> = V m<sup>−1</sup>. Force per unit charge, at a point. <b><i>V</i>, the potential:</b> a signed SCALAR, unit <b>volt</b> = J C<sup>−1</sup>. Energy per unit charge, at a point. It belongs to the point and exists whether or not a charge is there. <b><i>U</i>, the potential energy:</b> a signed SCALAR, unit <b>joule</b>. The energy of a CHARGE-in-a-field, or of a whole CONFIGURATION of charges. It does not exist until there is a charge to own it. <b>The bridge is <i>U</i> = <i>qV</i></b>, and the charge <i>q</i> is the only thing that turns volts into joules. If an answer to \"find the potential\" comes out in joules, or an answer to \"find the energy\" in volts, the bridge was crossed in the wrong direction."
        },
        {
          "t": "defgrid",
          "title": "Energy bookkeeping, in one table",
          "rows": [
            { "k": "Two point charges", "v": "<i>U</i> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>, signs carried, unit joule (J). Dimensions [M L<sup>2</sup> T<sup>−2</sup>]" },
            { "k": "Like charges", "v": "<i>q</i><sub>1</sub><i>q</i><sub>2</sub> > 0 so <i>U</i> > 0: wound up, wants to fly apart" },
            { "k": "Unlike charges", "v": "<i>q</i><sub>1</sub><i>q</i><sub>2</sub> < 0 so <i>U</i> < 0: bound, needs energy to separate" },
            { "k": "Charge in an external field", "v": "<i>U</i> = <i>qV</i>, the bridge from volts to joules" },
            { "k": "Number of pairs", "v": "<i>n</i>(<i>n</i> − 1)/2. Three charges give 3 pairs, four give 6, five give 10" },
            { "k": "Work relations", "v": "<i>W</i><sub>field</sub> = −Δ<i>U</i>, <i>W</i><sub>ext</sub> = +Δ<i>U</i>, and <i>K</i> + <i>U</i> = constant when only electric forces act" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENERGY OF A CHARGE SYSTEM",
          "tag": "the exponent is the whole exam",
          "main": "<i>U</i> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub><br><i>U</i> = <i>k</i> Σ<sub>pairs</sub> <i>q</i><sub>i</sub><i>q</i><sub>j</sub>/<i>r</i><sub>ij</sub> = ½ Σ<sub>i</sub> <i>q</i><sub>i</sub><i>V</i><sub>i</sub>",
          "legend": [
            "<i>q</i><sub>1</sub>, <i>q</i><sub>2</sub>, <i>q</i><sub>i</sub> = the charges in coulombs (C), each with its own sign; <i>r</i><sub>12</sub>, <i>r</i><sub>ij</sub> = separations in metres (m)",
            "<i>V</i><sub>i</sub> = the potential at charge <i>i</i> due to ALL THE OTHERS, in volts (V), never including its own",
            "<i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>, and <i>U</i> comes out in joules (J). The sum runs over DISTINCT PAIRS, and the half in the second form is there because summing over every <i>i</i> counts each pair twice"
          ],
          "note": "U goes as 1/r, not 1/r squared. The inverse square belongs to force and field. This one exponent is the most common arithmetic disaster in the topic, and it is worth checking before anything else."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · ENERGY FALLS AS ONE OVER r, AND FORCE DOES NOT",
          "chips": ["like charges, energy above zero", "unlike charges, energy below zero"],
          "captions": [
            "The energy of two LIKE charges against their separation. It is positive everywhere and falls as 1/r, approaching zero only at infinite separation. Drawn faintly beside it is the 1/r squared curve, which is the FORCE law: it starts higher and collapses far faster. Reaching for the wrong one of these two curves is the single commonest slip in the topic, and the giveaway is always the exponent.",
            "The same picture for two UNLIKE charges. The curve is the mirror image below the axis: U is negative everywhere, deepest when the charges are closest, and it climbs toward zero as they separate. Negative energy means BOUND, and the depth of the well is exactly the energy an external agent must supply to pull the pair apart to infinity."
          ],
          "frames": [
            {
              "x": [0.2, 4], "y": [0, 6], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "U (J)", "ticksX": { "every": 1 }, "ticksY": { "every": 2 },
              "curves": [
                { "c": "power", "a": 2, "p": -2, "dash": true, "soft": true },
                { "c": "recip", "a": 2 }
              ],
              "labels": [
                { "x": 2.5, "y": 1.5, "text": "U = kq₁q₂/r" },
                { "x": 1.9, "y": 3.6, "text": "1/r², the force law" }
              ]
            },
            {
              "x": [0.2, 4], "y": [-6, 1], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "U (J)", "ticksX": { "every": 1 }, "ticksY": { "at": [-4, -2, 0] },
              "curves": [
                { "c": "recip", "a": -2 }
              ],
              "labels": [
                { "x": 2.6, "y": -1.6, "text": "bound, U below zero" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · ENERGY OF A TWO-CHARGE SYSTEM",
          "steps": [
            {
              "eq": "start on an empty stage with <i>U</i> = 0 at infinite separation, and bring each charge in infinitely slowly",
              "why": "Both conditions are doing work. The zero at infinity is the same choice made for potential in Topic 01, and moving slowly means no kinetic energy appears, so every joule the agent spends ends up stored."
            },
            {
              "eq": "bring in <i>q</i><sub>1</sub> first. Work done = 0",
              "why": "There is nothing there yet, so no field, so no force to fight. This step costs nothing, and noticing that is what makes the assembly argument short."
            },
            {
              "eq": "now <i>q</i><sub>1</sub> produces, at the destination a distance <i>r</i><sub>12</sub> away, a potential <i>V</i><sub>1</sub> = <i>kq</i><sub>1</sub>/<i>r</i><sub>12</sub>. Bringing <i>q</i><sub>2</sub> there costs <i>W</i> = <i>q</i><sub>2</sub><i>V</i><sub>1</sub>",
              "why": "This is the bridge U = qV, used in the direction it was built for: the work to bring a charge to a point where a potential already exists is charge times potential, by the very definition of potential."
            },
            {
              "eq": "<i>U</i> = 0 + <i>q</i><sub>2</sub><i>V</i><sub>1</sub> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>",
              "why": "Two checks. Bring q₂ in first instead and you get q₁V₂, which is the same expression, confirming order-independence. And the sign behaves: like charges give U > 0 because we worked against repulsion, unlike charges give U < 0 because the attraction did the work for us."
            }
          ]
        },
        {
          "t": "p",
          "html": "For more than two charges, add up <b>every distinct pair</b> and nothing else. Three charges make three pairs, four make six, five make ten, and missing one is the commonest way a multi-charge total comes out wrong.<br><br>There is a faster route worth knowing for a crowded arrangement. Compute the potential <i>V</i><sub>i</sub> at each charge due to all the OTHERS, form <i>q</i><sub>i</sub><i>V</i><sub>i</sub>, add them all up, and halve the total. The half is there because that sum counts every pair twice, once from each end. On a three-charge triangle both routes take about the same time; on a square of four it is noticeably faster, and on anything with symmetry it is much faster, because equal <i>V</i><sub>i</sub> values can be reused."
        },
        {
          "t": "p",
          "html": "A single charge sitting in a field made by something else is the simplest case of all: <i>U</i> = <i>qV</i>, where <i>V</i> is the external potential at the charge's location. This is the form that solves \"released from rest, find the speed\" problems in two lines. Only electric forces act, so kinetic plus potential energy is constant, and Δ<i>K</i> = −Δ<i>U</i>. Never go near the forces: the force varies with position and integrating it is the long way round to a number energy hands you directly.<br><br>Two charges in an external field need three terms, not two: each charge's own energy in the external field, <b>plus their mutual interaction</b>. Forgetting the third term is a standard Advanced trap, because the answer still looks plausible."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · A DIPOLE IN A UNIFORM FIELD",
          "main": "τ = <i>pE</i> sin θ<br><i>U</i>(θ) = −<i>pE</i> cos θ",
          "legend": [
            "<i>p</i> = the dipole moment in C m; <i>E</i> = the uniform external field in N C<sup>−1</sup>; θ = the angle between them, in degrees",
            "τ = the torque in N m, and <i>U</i> = the potential energy in joules (J). In a UNIFORM field there is no net force, only this torque",
            "the reference is <i>U</i> = 0 at θ = 90°, which is why the cosine and not the sine appears: at 90° the dipole is neither helped nor hindered"
          ],
          "note": "Stable equilibrium at theta = 0, where U = −pE is a minimum and the dipole lines up with the field like a compass needle. Unstable at theta = 180 degrees, where U = +pE is a maximum and the smallest nudge flips it."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE DIPOLE ENERGY IS MINUS p E COS THETA",
          "steps": [
            {
              "eq": "in a uniform field the forces +<i>qE</i> and −<i>qE</i> on the two charges are equal and opposite, so there is no net force, only a torque τ = <i>pE</i> sin θ trying to align the dipole",
              "why": "Uniform matters. In a non-uniform field the two forces differ in size and there IS a net force, which is exactly what pulls a dielectric into a capacitor later in this chapter."
            },
            {
              "eq": "rotate the dipole quasi-statically from θ<sub>0</sub> to θ<sub>1</sub>. The external agent's work is <i>W</i><sub>ext</sub> = ∫ τ <i>d</i>θ = <i>pE</i> ∫ sin θ <i>d</i>θ",
              "why": "Torque times angle is the rotational version of force times distance. Quasi-static again means no angular acceleration, so nothing leaks into rotational kinetic energy and all the work is stored."
            },
            {
              "eq": "= <i>pE</i>(cos θ<sub>0</sub> − cos θ<sub>1</sub>), so <i>U</i>(θ<sub>1</sub>) − <i>U</i>(θ<sub>0</sub>) = <i>pE</i>(cos θ<sub>0</sub> − cos θ<sub>1</sub>)",
              "why": "The stored work IS the change in potential energy, because the agent did it and it went nowhere else. Note the order of the cosines: integrating sin gives minus cos, and the limits then swap them back."
            },
            {
              "eq": "choose <i>U</i> = 0 at θ<sub>0</sub> = 90°, where cos θ<sub>0</sub> = 0: <i>U</i>(θ) = −<i>pE</i> cos θ",
              "why": "The reference is a choice, standard because 90° is the neutral orientation. Read the result: U is a minimum of −pE at θ = 0, the preferred rest position, and a maximum of +pE at θ = 180°, unstable. A compass needle settling along the Earth's field is doing exactly this."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.3 · THE DIPOLE THAT WANTS TO LINE UP",
          "chips": ["a torque, and no net force"],
          "captions": [
            "A short dipole of moment p, from −q to +q, sitting at an angle theta in a uniform field E drawn as evenly spaced horizontal arrows. The two forces qE are equal in size and opposite in direction, so they cancel as a net force and leave a pure couple. That couple turns the dipole toward the field, which is why the energy is lowest at theta = 0. Make the field non-uniform and the two forces stop cancelling, and then the dipole is pulled bodily as well as turned, which is the mechanism behind a dielectric being sucked into a capacitor."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.72,
              "arrows": [
                { "from": [0.5, 5.8], "to": [9.5, 5.8], "tone": "amber", "label": "E", "at": "start" },
                { "from": [0.5, 4.2], "to": [9.5, 4.2], "tone": "amber" },
                { "from": [0.5, 2.6], "to": [9.5, 2.6], "tone": "amber" },
                { "from": [0.5, 1.0], "to": [9.5, 1.0], "tone": "amber" },
                { "from": [3.3, 2.5], "to": [5.9, 4.5], "tone": "ink", "label": "p", "at": "mid" },
                { "from": [6.2, 4.6], "to": [7.2, 4.6], "tone": "ink", "label": "qE", "at": "below" },
                { "from": [3.0, 2.4], "to": [2.0, 2.4], "tone": "ink", "label": "qE", "at": "above" }
              ],
              "marks": [
                { "x": 3.2, "y": 2.4, "glyph": "minus", "tone": "ink", "label": "−q" },
                { "x": 6.0, "y": 4.6, "glyph": "plus", "tone": "ink", "label": "+q" }
              ],
              "arcs": [
                { "at": [3.2, 2.4], "r": 1.3, "from": 0, "to": 38, "label": "θ", "tone": "ink" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · THE DIPOLE ENERGY, END TO END",
          "chips": ["one full turn of the dipole"],
          "captions": [
            "U/pE against the angle, through a whole revolution. The curve is minus a cosine: a minimum of −pE at 0 degrees, zero at 90 degrees where the reference was set, a maximum of +pE at 180 degrees, and back down again. The two dots are the two equilibria and they are not equivalent. At 0 degrees the dipole sits in a valley, so a small nudge brings it back, which is stable. At 180 degrees it balances on a peak, so a small nudge runs away, which is unstable. The work to flip a dipole end to end is the full height of the curve, 2pE."
          ],
          "frames": [
            {
              "x": [0, 360], "y": [-1.5, 1.6], "aspect": 0.72,
              "axisX": "θ (degrees)", "axisY": "U/pE",
              "ticksX": { "at": [0, 90, 180, 270, 360] }, "ticksY": { "at": [-1, 0, 1] },
              "curves": [
                { "c": "cos", "a": -1, "b": 0.0174533 }
              ],
              "marks": [
                { "x": 0, "y": -1, "glyph": "dot", "tone": "green" },
                { "x": 180, "y": 1, "glyph": "dot", "tone": "red" }
              ],
              "labels": [
                { "x": 62, "y": -1.26, "text": "stable, U = −pE" },
                { "x": 180, "y": 1.36, "text": "unstable, U = +pE" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The energy of a multi-charge configuration",
          "steps": [
            "<b>Count the pairs before you compute anything.</b> <i>n</i>(<i>n</i> − 1)/2 of them: 3 for a triangle, 6 for a square, 10 for five charges. Write the list out, because a missing pair is invisible in the final number.",
            "<b>Group the pairs by distance.</b> On a square of side <i>a</i> there are four SIDE pairs at <i>a</i> and two DIAGONAL pairs at <i>a</i>√2, not six pairs at <i>a</i>. On an equilateral triangle all three are at <i>a</i>, which is why it is the easy case.",
            "<b>Add <i>kq</i><sub>i</sub><i>q</i><sub>j</sub>/<i>r</i><sub>ij</sub> with signs.</b> The product of two negatives is positive, so a pair of negative charges contributes a POSITIVE energy exactly like a pair of positives.",
            "<b>Or take the fast route on anything symmetric.</b> Compute <i>V</i><sub>i</sub> at each charge from all the OTHERS, form <i>q</i><sub>i</sub><i>V</i><sub>i</sub>, add, and halve. On a square it is noticeably quicker, and equal <i>V</i><sub>i</sub> values can be reused instead of recomputed.",
            "<b>Interpret the sign, and name the agent.</b> Total negative means bound and means the external agent did NEGATIVE work assembling it. Total positive means the agent did positive work and the energy is stored, not released. State which before you write the sentence."
          ]
        },
        {
          "t": "proc",
          "title": "Released from rest, find the speed",
          "steps": [
            "<b>Do not touch the forces.</b> The force varies with position, so Newton's second law would need an integral. Energy hands you the answer in two lines.",
            "<b>Write <i>U</i><sub>i</sub> and <i>U</i><sub>f</sub> from the geometry.</b> For a pair, <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i>; for a charge in an external field, <i>qV</i>; and for \"very far away\", <i>U</i> = 0 exactly.",
            "<b>Set <i>K</i><sub>i</sub> + <i>U</i><sub>i</sub> = <i>K</i><sub>f</sub> + <i>U</i><sub>f</sub>.</b> Released from rest means <i>K</i><sub>i</sub> = 0, so the whole drop in <i>U</i> becomes kinetic energy: Δ<i>K</i> = −Δ<i>U</i>.",
            "<b>Check who moves.</b> If both charges are free, the kinetic energy is shared and momentum decides how, so ½<i>m</i><sub>1</sub><i>v</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>v</i><sub>2</sub><sup>2</sup> = −Δ<i>U</i>. If one is nailed down, all of it goes to the other one.",
            "<b>Sanity check the direction.</b> A released charge always moves so that <i>U</i> DECREASES. Like charges fly apart, unlike charges rush together. If your answer has a charge climbing its own energy hill for free, a sign has slipped."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two point charges, +3 μC and −5 μC, are held 0.60 m apart in vacuum. Find the electrostatic potential energy of the system.",
          "steps": [
            "Given <i>q</i><sub>1</sub> = +3 × 10<sup>−6</sup> C, <i>q</i><sub>2</sub> = −5 × 10<sup>−6</sup> C, <i>r</i> = 0.60 m. Plug the charges in <b>with their signs</b>.",
            "<i>U</i> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i> = (9 × 10<sup>9</sup>)(+3 × 10<sup>−6</sup>)(−5 × 10<sup>−6</sup>)/0.60.",
            "The numerator is (9 × 10<sup>9</sup>)(−15 × 10<sup>−12</sup>) = −0.135, so <i>U</i> = −0.135/0.60 = −0.225 J.",
            "The negative sign says <b>bound</b>: the attraction did the work of assembly, and an external agent would have to supply +0.225 J to drag the two charges back to infinity."
          ],
          "ans": "<i>U</i> = −0.225 J, a bound system"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Two charges, each +4 μC, are placed 0.20 m apart. Find the electrostatic potential energy of the pair.",
          "steps": [
            "The trap is in plain sight: under exam pressure students reach for the force habit and divide by <i>r</i><sup>2</sup>. <b>Energy goes as 1/<i>r</i>.</b>",
            "<i>U</i> = <i>kq</i><sup>2</sup>/<i>r</i> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)<sup>2</sup>/0.20 = (9 × 10<sup>9</sup>)(16 × 10<sup>−12</sup>)/0.20.",
            "= 0.144/0.20 = <b>+0.72 J</b>, positive because the charges are alike and the system is wound up.",
            "The seductive wrong answer divides by (0.20)<sup>2</sup> = 0.04 instead of 0.20, giving 3.6 J, exactly five times too big. If your exponent matches the force law, you have slipped."
          ],
          "ans": "<i>U</i> = +0.72 J"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A charge <i>q</i><sub>1</sub> = +5 μC is fixed in place. A second charge <i>q</i><sub>2</sub> = +2 μC of mass 5 g is released from rest at <i>r</i><sub>1</sub> = 0.10 m from it. Find the speed of <i>q</i><sub>2</sub> when it has travelled very far away.",
          "steps": [
            "Like charges repel, so <i>q</i><sub>2</sub> accelerates outward and potential energy turns into kinetic energy. Only electric forces act, so <i>K</i><sub>i</sub> + <i>U</i><sub>i</sub> = <i>K</i><sub>f</sub> + <i>U</i><sub>f</sub>.",
            "<i>U</i><sub>i</sub> = (9 × 10<sup>9</sup>)(5 × 10<sup>−6</sup>)(2 × 10<sup>−6</sup>)/0.10 = (9 × 10<sup>9</sup>)(10 × 10<sup>−12</sup>)/0.10 = 0.090/0.10 = 0.90 J.",
            "At infinity <i>U</i><sub>f</sub> = 0, and it started from rest so <i>K</i><sub>i</sub> = 0. All the potential energy becomes kinetic: <i>K</i><sub>f</sub> = 0.90 J = ½<i>mv</i><sup>2</sup>. Only <i>q</i><sub>2</sub> moves, because <i>q</i><sub>1</sub> is fixed.",
            "<i>v</i> = √(2<i>K</i><sub>f</sub>/<i>m</i>) = √(2 × 0.90/(5 × 10<sup>−3</sup>)) = √360 ≈ 19 m s<sup>−1</sup>."
          ],
          "ans": "<i>v</i> ≈ 19 m s<sup>−1</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A dipole of moment <i>p</i> = 4 × 10<sup>−9</sup> C m and moment of inertia <i>I</i> = 1.0 × 10<sup>−6</sup> kg m<sup>2</sup> can rotate freely about an axis through its centre, in a uniform field <i>E</i> = 2 × 10<sup>4</sup> N C<sup>−1</sup>. It is released from rest at θ = 90°. Find its angular speed when it becomes aligned with the field.",
          "steps": [
            "Only the field's torque does work, so rotational mechanical energy is conserved: the drop in potential energy reappears as rotational kinetic energy.",
            "<i>pE</i> = (4 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>) = 8 × 10<sup>−5</sup> J. Then <i>U</i><sub>90</sub> = −<i>pE</i> cos 90° = 0 and <i>U</i><sub>0</sub> = −<i>pE</i> cos 0° = −8 × 10<sup>−5</sup> J.",
            "With <i>K</i><sub>i</sub> = 0: ½<i>I</i>ω<sup>2</sup> = <i>U</i><sub>90</sub> − <i>U</i><sub>0</sub> = 0 − (−8 × 10<sup>−5</sup>) = 8 × 10<sup>−5</sup> J.",
            "ω = √(2 × 8 × 10<sup>−5</sup>/(1.0 × 10<sup>−6</sup>)) = √160 ≈ 12.6 rad s<sup>−1</sup>. The dipole swings to alignment exactly as a released pendulum swings to its lowest point: minimum potential energy, maximum kinetic."
          ],
          "ans": "ω ≈ 12.6 rad s<sup>−1</sup>"
        },
        {
          "t": "mcq",
          "q": "The electrostatic potential energy of two point charges varies with their separation <i>r</i> as:",
          "opts": [
            { "label": "proportional to 1/<i>r</i>", "nudge": null },
            { "label": "proportional to 1/<i>r</i><sup>2</sup>", "nudge": "This is THE classic trap: it is the dependence of the FORCE and the field, not of the energy. Energy is the integral of force over distance, and integrating lifts the power from −2 to −1." },
            { "label": "proportional to <i>r</i>", "nudge": "This has the energy GROWING as the charges separate, which is backwards for like charges and wrong in size for any pair. Two charges infinitely far apart have zero interaction energy, not infinite." },
            { "label": "proportional to <i>r</i><sup>2</sup>", "nudge": "This is the spring law, U = ½kx², borrowed from a completely different force. The Coulomb force is not a restoring force proportional to displacement." }
          ],
          "correct": 0,
          "solution": "U = kq₁q₂/r, an inverse FIRST power. Force and field go as 1/r², potential and potential energy as 1/r, because each integration over distance raises the exponent by one. Check the exponent before checking anything else."
        },
        {
          "t": "mcq",
          "q": "The electrostatic potential energy of a system of two equal positive charges is:",
          "opts": [
            { "label": "positive", "nudge": null },
            { "label": "negative", "nudge": "That is the sign for UNLIKE charges, where the attraction does the work of assembly. Two positive charges have a positive product, so U carries a plus." },
            { "label": "zero", "nudge": "That would need infinite separation or one of the charges to be zero. Two real charges at a finite distance always interact." },
            { "label": "dependent on the path used to assemble them", "nudge": "This contradicts the conservative nature of the electrostatic force. Potential energy depends only on the final configuration, and picking this means missing the idea the whole topic is built on." }
          ],
          "correct": 0,
          "solution": "Like charges repel, so an external agent must do positive work to bring them together, and W_ext = +ΔU. The system is wound up like a compressed spring: let it go and it flies apart, converting that stored U into kinetic energy."
        },
        {
          "t": "mcq",
          "q": "A dipole in a uniform external field has MINIMUM potential energy, and so is in stable equilibrium, when <i>p</i> is:",
          "opts": [
            { "label": "parallel to <i>E</i>", "nudge": null },
            { "label": "perpendicular to <i>E</i>", "nudge": "At 90° the energy is zero, which is neither the minimum nor the maximum. Zero is not the same as least, and here it is only zero because 90° is where we chose the reference." },
            { "label": "antiparallel to <i>E</i>", "nudge": "This is the MAXIMUM-energy, UNSTABLE position, U = +pE. It is the most-chosen wrong answer, from swapping the energy minimum for the maximum." },
            { "label": "at 45° to <i>E</i>", "nudge": "Nothing in U = −pE cos θ is special at 45°. The cosine has its extremes at 0° and 180°, and no stationary point anywhere else." }
          ],
          "correct": 0,
          "solution": "U = −pE cos θ is least, at −pE, when cos θ = 1, that is θ = 0 with p along E. A compass needle settling along the Earth's field is a dipole finding this minimum, and displacing it produces a restoring torque, which is what stable means."
        },
        {
          "t": "mcq",
          "q": "The work done in carrying a point charge once around a closed loop in an electrostatic field is:",
          "opts": [
            { "label": "zero", "nudge": null },
            { "label": "<i>qV</i>", "nudge": "This misapplies U = qV. Around a closed loop the start and end points coincide, so ΔV = 0 and there is no potential difference for q to multiply." },
            { "label": "dependent on the shape of the loop", "nudge": "This would be true only for a NON-conservative force such as friction. The electrostatic force is conservative, which is precisely what makes potential a usable idea." },
            { "label": "infinite", "nudge": "Nothing in the situation produces an infinite quantity. A finite field acting over a finite path does finite work, and here that finite work happens to be zero." }
          ],
          "correct": 0,
          "solution": "The electrostatic field is conservative, so the work depends only on the endpoints. Around a closed path the endpoints are the same point, so ΔU = 0 and the net work is zero however long or winding the loop."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Charges of +6 nC and +9 nC are placed 0.03 m apart. Find the electrostatic potential energy of the system.", "a": "<i>U</i> = (9 × 10<sup>9</sup>)(6 × 10<sup>−9</sup>)(9 × 10<sup>−9</sup>)/0.03 = 4.86 × 10<sup>−7</sup>/0.03 = 1.62 × 10<sup>−5</sup> J. Positive: like charges, and an external agent paid for the assembly." },
            { "q": "[NEET] A charge of −2 μC and one of +3 μC are 0.50 m apart. Compute the potential energy and say whether the system is bound.", "a": "<i>U</i> = (9 × 10<sup>9</sup>)(−2 × 10<sup>−6</sup>)(3 × 10<sup>−6</sup>)/0.50 = −0.054/0.50 = −0.108 J. Negative, so <b>bound</b>: 0.108 J must be supplied to separate them to infinity." },
            { "q": "[JEE Main] Three equal charges of +1 μC each are fixed at the corners of an equilateral triangle of side 1.0 m. Find the total electrostatic potential energy.", "a": "Three pairs, each at the same separation: <i>U</i> = 3 × (9 × 10<sup>9</sup>)(1 × 10<sup>−6</sup>)<sup>2</sup>/1.0 = 3 × 9 × 10<sup>−3</sup> = 0.027 J." },
            { "q": "[JEE Main] A charge of +2 μC and mass 2 g is released from rest where the external potential is 500 V, and moves freely to a point where the potential is 100 V. Find its final speed.", "a": "Δ<i>U</i> = <i>q</i>Δ<i>V</i> = (2 × 10<sup>−6</sup>)(100 − 500) = −8 × 10<sup>−4</sup> J, so <i>K</i><sub>f</sub> = 8 × 10<sup>−4</sup> J. <i>v</i> = √(2 × 8 × 10<sup>−4</sup>/(2 × 10<sup>−3</sup>)) = √0.8 ≈ 0.89 m s<sup>−1</sup>." },
            { "q": "[JEE Advanced] Charges of +4 μC and −6 μC are brought from infinity and held 0.20 m apart. Find the potential energy of the pair, and say whether the external agent does positive or negative work.", "a": "<i>U</i> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)(−6 × 10<sup>−6</sup>)/0.20 = −0.216/0.20 = <b>−1.08 J</b>. Since <i>U</i> started at zero, <i>W</i><sub>ext</sub> = Δ<i>U</i> = −1.08 J, which is NEGATIVE: the attraction does the work and the agent has to hold the charges back. Energy leaves the system, it is not absorbed by it." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using 1/<i>r</i><sup>2</sup> for energy.</b> Force and field go as 1/<i>r</i><sup>2</sup>; potential and potential energy go as 1/<i>r</i>. Check this exponent before you check your arithmetic, because every other digit will be right and the answer will still be wrong.",
            "<b>Confusing volts with joules.</b> <i>V</i> is energy per unit charge at a POINT, in volts, and exists with no charge there at all. <i>U</i> is the energy of a charge or a whole configuration, in joules, and does not exist until there is a charge to own it. The bridge is <i>U</i> = <i>qV</i>, and it is the only place the charge enters.",
            "<b>Naming the wrong agent as the one doing work.</b> Assembling four LIKE charges from infinity ABSORBS energy: the external agent does positive work and it is stored. Nothing is released and nothing snaps together. Say out loud which agent you mean before you write a sign, because \"energy released\" and \"work done on the system\" are opposite statements.",
            "<b>Dropping a pair.</b> A system of <i>n</i> charges has <i>n</i>(<i>n</i> − 1)/2 distinct pairs: 3 for three charges, 6 for four, 10 for five. On a square remember there are two DIAGONAL pairs at separation <i>a</i>√2 as well as four side pairs.",
            "<b>Mixing up the dipole's two zeros.</b> The potential of a dipole is zero at θ = 90° because the two charges are equidistant. The ENERGY of a dipole in a field is zero at θ = 90° because that is where we chose the reference. Same angle, same cosine, completely different reasons, and only one of them is a choice."
          ]
        },
        {
          "t": "protip",
          "html": "for anything with symmetry, use the half-sigma-q-V form instead of listing pairs: work out V at each charge from all the others, multiply by that charge, add, halve. on a square of four it is noticeably faster and it reuses equal V values instead of recomputing distances. and for assemble-or-dismantle questions there is one line that never fails: the work to dismantle a configuration back to infinity is 0 − U, which is −U, a positive number exactly when U is negative. a bound system charges you to take it apart, and that is the whole meaning of the minus sign."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>U</i> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i>, unit joule", "note": "goes as 1/r; like charges U > 0, unlike U < 0, zero at infinity" },
            { "f": "<i>U</i> = <i>k</i> Σ<sub>pairs</sub> <i>q</i><sub>i</sub><i>q</i><sub>j</sub>/<i>r</i><sub>ij</sub> = ½ Σ <i>q</i><sub>i</sub><i>V</i><sub>i</sub>", "note": "n(n − 1)/2 pairs; the half stops each pair being counted twice" },
            { "f": "<i>U</i> = <i>qV</i>", "note": "the bridge: volts times coulombs make joules" },
            { "f": "<i>U</i> = −<i>pE</i> cos θ and τ = <i>pE</i> sin θ", "note": "stable at 0°, unstable at 180°, U = 0 at 90° by choice" },
            { "f": "<i>W</i><sub>field</sub> = −Δ<i>U</i> and <i>W</i><sub>ext</sub> = +Δ<i>U</i>", "note": "name the agent first; K + U is constant when only electric forces act" },
            { "f": "1 eV = 1.6 × 10<sup>−19</sup> J", "note": "the energy an electron gains falling through 1 V" }
          ],
          "aids": [
            "\"energy goes as one over r, force as one over r squared\"",
            "\"like charges, positive energy; bound systems are negative\"",
            "\"a dipole rests aligned\" (theta = 0, the minimum)",
            "\"released from rest? use delta-K = minus delta-U, never forces\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Capacitance and Dielectrics",
      "chip": "03 CAPACITANCE",
      "kalam": "capacitance is geometry, and the battery decides the rest",
      "blocks": [
        {
          "t": "p",
          "html": "Think of the overhead water tank on a roof. Pour water in and the level rises, and the <b>level</b> you reach is set by two things: how much water you added, and the <b>shape of the tank</b>. A wide tank barely rises for a lot of water; a narrow pipe shoots up fast for very little. Swap water for electric charge and level for voltage and you have a <b>capacitor</b>: a device that stores charge, where the voltage it reaches depends on how much charge you put in and on the geometry of the device.<br><br>Capacitance measures that storage capacity: how much charge the system holds <b>per volt</b> it rises to, <i>C</i> = <i>Q</i>/<i>V</i>. A large capacitance soaks up a lot of charge while barely changing its voltage, which is the wide tank. And the counterintuitive fact follows immediately: <b>capacitance is a property of geometry alone</b>, of plate area, separation, and what fills the gap, and <b>not</b> of how much charge you have stored or what voltage you have applied. Pouring more water into a tank does not widen the tank. The ratio <i>Q</i>/<i>V</i> stays fixed because <i>Q</i> and <i>V</i> rise in lockstep."
        },
        {
          "t": "p",
          "html": "A practical capacitor is just <b>two conductors separated by an insulator</b>, most simply two parallel metal plates. Put +<i>Q</i> on one and −<i>Q</i> on the other, a uniform field appears in the gap, a potential difference <i>V</i> builds across it, and <i>C</i> = <i>Q</i>/<i>V</i> comes out depending only on the plate area <i>A</i> and the gap <i>d</i>.<br><br>Now slide an insulating slab, glass or mica or plastic, into the gap. The slab cannot conduct, but its molecules <b>polarise</b>: they stretch or rotate so their positive ends face the negative plate and their negative ends face the positive plate, like a parade of tiny compass needles lining up. Those lined-up bound charges create their own field <b>opposing</b> the original, so the net field in the gap weakens by a factor <i>K</i>, the <b>dielectric constant</b>. Weaker field means less voltage for the same charge, which means <b>more</b> capacitance. A dielectric multiplies capacitance by <i>K</i>, and since <i>K</i> ≥ 1 always, it can only ever increase it."
        },
        {
          "t": "think",
          "html": "there is one question to ask before you touch a formula in this topic, and it decides everything downstream: is the battery still connected? disconnected means the charge is trapped with nowhere to go, so Q is king and V, E and the stored energy all rearrange around it. connected means the battery clamps the voltage at its emf, so V is king and Q and the energy rearrange instead, with charge flowing in or out of the battery. get this fork right and dielectric questions become bookkeeping. get it wrong and every single number after it is wrong."
        },
        {
          "t": "def",
          "term": "How big is a farad, really",
          "html": "A farad is one coulomb per volt, and it is an <b>enormous</b> unit. Rearrange <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> and ask what plate area a 1 F air-gap capacitor with a 1 mm gap would need: <i>A</i> = <i>Cd</i>/ε<sub>0</sub> = (1)(10<sup>−3</sup>)/(8.85 × 10<sup>−12</sup>) = 1.1 × 10<sup>8</sup> m<sup>2</sup>, which is about <b>113 square kilometres</b> of metal plate. That is why nothing on a circuit board is measured in farads. Real capacitors run from a few pF, which is a couple of centimetres of plate, through nF to a few thousand μF for the big electrolytic cans in a power supply. Two consequences for the exam. If a calculation hands you a bare farad or two, you have almost certainly dropped a power of ten. And <b><i>K</i> = 1 must return the vacuum answer</b>: put <i>K</i> = 1 into <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> and into <i>E</i> = <i>E</i><sub>0</sub>/<i>K</i> and both collapse to the empty-gap result, which is the fastest test of whether you have the dielectric formulas the right way up."
        },
        {
          "t": "defgrid",
          "title": "Capacitance, in one table",
          "rows": [
            { "k": "Capacitance", "v": "<i>C</i> = <i>Q</i>/<i>V</i>. SI unit farad, 1 F = 1 C V<sup>−1</sup>. Dimensions [M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>]" },
            { "k": "Parallel plate", "v": "<i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> in air; <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = <i>KC</i><sub>0</sub> with a dielectric filling the gap" },
            { "k": "Field in the gap", "v": "<i>E</i> = σ/ε<sub>0</sub> = <i>V</i>/<i>d</i>, uniform. With a dielectric, <i>E</i> = <i>E</i><sub>0</sub>/<i>K</i>" },
            { "k": "Dielectric constant", "v": "<i>K</i>, dimensionless and always ≥ 1. Vacuum and air 1.0, paper about 3.7, mica 6, water 80" },
            { "k": "Dielectric strength", "v": "the largest field a material survives before it conducts. A DIFFERENT quantity from <i>K</i>, and it is what caps the working voltage" },
            { "k": "Energy stored", "v": "<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/2<i>C</i> = ½<i>QV</i>, unit joule. Energy density <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CAPACITANCE AND THE PARALLEL PLATE",
          "tag": "geometry, and nothing else",
          "main": "<i>C</i> = <i>Q</i>/<i>V</i><br><i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i>, and <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = <i>KC</i><sub>0</sub>",
          "legend": [
            "<i>Q</i> = magnitude of the charge on EACH plate in coulombs (C), not the total, which is zero; <i>V</i> = potential difference across the plates in volts (V)",
            "<i>A</i> = plate area in m<sup>2</sup>; <i>d</i> = separation in metres (m); <i>K</i> = dielectric constant, dimensionless and at least 1",
            "ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>, and <i>C</i> comes out in farads (F), in practice pF, nF or μF"
          ],
          "note": "Ideal plates only: d must be tiny compared with the plate size, so the field is uniform and the fringing at the edges can be ignored. Note that Q cancels out of the derivation, which is the formal statement that capacitance does not care how much charge you stored."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.4 · THE PARALLEL-PLATE CAPACITOR",
          "chips": ["a uniform field in the gap"],
          "captions": [
            "Two plates of area A a distance d apart, carrying +Q and −Q, so the surface charge density is sigma = Q/A on each. Between them the fields of the two sheets point the same way and add to sigma over epsilon-nought; outside them they point opposite ways and cancel, which is why the field lines are drawn only in the gap and are evenly spaced there. The edges are drawn straight because we are ignoring the fringing that really happens there, and that idealisation is exactly what \"d much smaller than the plate size\" buys."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[1.5, 4.6], [1.5, 5.0], [8.5, 5.0], [8.5, 4.6]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[1.5, 1.4], [1.5, 1.0], [8.5, 1.0], [8.5, 1.4]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "marks": [
                { "x": 2.2, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 3.6, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 5.0, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 6.4, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 7.8, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 2.2, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 3.6, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 5.0, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 6.4, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 7.8, "y": 1.75, "glyph": "minus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [2.9, 4.05], "to": [2.9, 1.95], "tone": "amber" },
                { "from": [4.3, 4.05], "to": [4.3, 1.95], "tone": "amber" },
                { "from": [5.7, 4.05], "to": [5.7, 1.95], "tone": "amber", "label": "E", "at": "mid" },
                { "from": [7.1, 4.05], "to": [7.1, 1.95], "tone": "amber" },
                { "from": [9.2, 4.6], "to": [9.2, 1.4], "head": "both", "tone": "ink", "label": "d", "at": "mid" }
              ],
              "labels": [
                { "x": 4.6, "y": 5.5, "text": "+Q on area A" },
                { "x": 4.6, "y": 0.5, "text": "−Q" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CAPACITANCE OF A PARALLEL-PLATE CAPACITOR",
          "steps": [
            {
              "eq": "two large plates of area <i>A</i> a small distance <i>d</i> apart carry +<i>Q</i> and −<i>Q</i>, so each has surface charge density σ = <i>Q</i>/<i>A</i>",
              "why": "Large and close is the whole idealisation: it makes the field uniform in the gap and lets us ignore the fringing at the edges, which is the only place the real field differs."
            },
            {
              "eq": "one charged sheet gives σ/2ε<sub>0</sub> on each side. Between the plates the two contributions point the same way and add: <i>E</i> = σ/ε<sub>0</sub> = <i>Q</i>/(ε<sub>0</sub><i>A</i>)",
              "why": "The +Q sheet pushes a test charge away from itself and the −Q sheet pulls it toward itself, and in the gap both effects drive the field the same way. Outside the plates the two point oppositely and cancel exactly, which is why a capacitor's field is confined to its gap."
            },
            {
              "eq": "the field is uniform, so the potential difference is just <i>V</i> = <i>Ed</i> = <i>Qd</i>/(ε<sub>0</sub><i>A</i>)",
              "why": "V = −∫E · dl collapses to E times d whenever E is constant along the path, which is exactly the payoff of the uniform-field idealisation."
            },
            {
              "eq": "<i>C</i> = <i>Q</i>/<i>V</i> = <i>Q</i>/(<i>Qd</i>/ε<sub>0</sub><i>A</i>) = ε<sub>0</sub><i>A</i>/<i>d</i>",
              "why": "Q has cancelled, and that cancellation IS the claim that capacitance depends only on geometry. Filling the gap with a dielectric replaces ε₀ by Kε₀ and gives C = Kε₀A/d, which at K = 1 returns this line unchanged."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHAT A DIELECTRIC ACTUALLY DOES",
          "chips": ["empty gap, full field", "slab in, field cut by K"],
          "captions": [
            "The empty capacitor. Five charges on each plate, four field lines, and the field in the gap is sigma over epsilon-nought all the way across.",
            "The same capacitor with a slab filling the gap. The free charge on the plates has not moved: it is still five and five. But the slab's molecules have polarised, and the bound charge that surfaces is NEGATIVE on the face towards the positive plate and POSITIVE on the face towards the negative one. Those bound layers make their own field pointing the opposite way, so the net field in the gap is what is left over, E-nought over K, drawn here as fewer and shorter arrows. Less field for the same charge means less voltage, and less voltage for the same charge means MORE capacitance, by exactly the factor K."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[1.5, 4.6], [1.5, 5.0], [8.5, 5.0], [8.5, 4.6]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[1.5, 1.4], [1.5, 1.0], [8.5, 1.0], [8.5, 1.4]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "marks": [
                { "x": 2.2, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 3.6, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 5.0, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 6.4, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 7.8, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 2.2, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 3.6, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 5.0, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 6.4, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 7.8, "y": 1.75, "glyph": "minus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [2.9, 4.05], "to": [2.9, 1.95], "tone": "amber" },
                { "from": [4.3, 4.05], "to": [4.3, 1.95], "tone": "amber" },
                { "from": [5.7, 4.05], "to": [5.7, 1.95], "tone": "amber", "label": "E₀", "at": "mid" },
                { "from": [7.1, 4.05], "to": [7.1, 1.95], "tone": "amber" }
              ],
              "labels": [
                { "x": 4.6, "y": 5.5, "text": "vacuum between" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[1.5, 4.6], [1.5, 5.0], [8.5, 5.0], [8.5, 4.6]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[1.5, 1.4], [1.5, 1.0], [8.5, 1.0], [8.5, 1.4]], "close": true, "fill": "wash", "tone": "ink" },
                { "pts": [[1.9, 4.6], [1.9, 1.4], [8.1, 1.4], [8.1, 4.6]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "marks": [
                { "x": 2.4, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 3.9, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 5.4, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 6.9, "y": 4.25, "glyph": "plus", "tone": "ink" },
                { "x": 2.4, "y": 3.6, "glyph": "minus", "tone": "amber" },
                { "x": 3.9, "y": 3.6, "glyph": "minus", "tone": "amber" },
                { "x": 5.4, "y": 3.6, "glyph": "minus", "tone": "amber" },
                { "x": 6.9, "y": 3.6, "glyph": "minus", "tone": "amber" },
                { "x": 2.4, "y": 2.4, "glyph": "plus", "tone": "amber" },
                { "x": 3.9, "y": 2.4, "glyph": "plus", "tone": "amber" },
                { "x": 5.4, "y": 2.4, "glyph": "plus", "tone": "amber" },
                { "x": 6.9, "y": 2.4, "glyph": "plus", "tone": "amber" },
                { "x": 2.4, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 3.9, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 5.4, "y": 1.75, "glyph": "minus", "tone": "ink" },
                { "x": 6.9, "y": 1.75, "glyph": "minus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [8.6, 3.45], "to": [8.6, 2.55], "tone": "amber", "label": "E₀/K", "at": "mid" }
              ],
              "labels": [
                { "x": 4.6, "y": 5.5, "text": "slab of constant K" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The dielectric fork: what changes and what does not",
          "rows": [
            { "k": "Battery DISCONNECTED", "v": "<i>Q</i> is trapped and cannot change. <i>C</i> rises to <i>KC</i><sub>0</sub> in both cases" },
            { "k": "· charge", "v": "unchanged" },
            { "k": "· voltage and field", "v": "both fall by <i>K</i>: <i>V</i> = <i>Q</i>/<i>C</i> and <i>E</i> = <i>V</i>/<i>d</i>" },
            { "k": "· energy", "v": "falls by <i>K</i>, from <i>U</i> = <i>Q</i><sup>2</sup>/2<i>C</i> with <i>Q</i> fixed" },
            { "k": "Battery CONNECTED", "v": "<i>V</i> is clamped at the emf and cannot change" },
            { "k": "· charge and energy", "v": "both rise by <i>K</i>, from <i>Q</i> = <i>CV</i> and <i>U</i> = ½<i>CV</i><sup>2</sup>. The FIELD <i>E</i> = <i>V</i>/<i>d</i> is unchanged" }
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE · THE ONE FORK THAT DECIDES EVERY DIELECTRIC QUESTION",
          "chips": ["ask the question first"],
          "captions": [
            "Slide a slab into a capacitor and the capacitance rises to K times its old value whichever branch you are on. What differs is which quantity is nailed down. With the battery off the charge has nowhere to go, so Q holds and everything else divides by K. With the battery on the emf holds the voltage, so V holds, charge flows IN from the battery, and Q and the stored energy multiply by K while the field V over d does not move at all. Decide the branch before you write a single formula."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 1, "row": 0, "text": "slab slides in", "shape": "round" },
                  { "id": "b", "col": 0, "row": 1, "text": "battery off\nQ is king" },
                  { "id": "c", "col": 2, "row": 1, "text": "battery on\nV is king" },
                  { "id": "d", "col": 0, "row": 2, "text": "V, E, U fall", "tone": "amber" },
                  { "id": "e", "col": 2, "row": 2, "text": "Q and U rise", "tone": "amber" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "a", "to": "c" },
                  { "from": "b", "to": "d" },
                  { "from": "c", "to": "e" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENERGY STORED, IN THREE EQUAL FORMS",
          "main": "<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/2<i>C</i> = ½<i>QV</i><br><i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>",
          "legend": [
            "<i>C</i> = capacitance in farads (F); <i>V</i> = potential difference in volts (V); <i>Q</i> = charge on each plate in coulombs (C); <i>U</i> = stored energy in joules (J)",
            "the three forms are identical because <i>Q</i> = <i>CV</i>. Use <i>Q</i><sup>2</sup>/2<i>C</i> when the charge is fixed and ½<i>CV</i><sup>2</sup> when the voltage is fixed, and the <i>K</i>-scaling falls out on sight",
            "<i>u</i> = energy per unit volume of field, in J m<sup>−3</sup>, with <i>E</i> the field in V m<sup>−1</sup>. The energy lives in the FIELD, not on the plates"
          ],
          "note": "Computing all three and checking they agree costs one line and catches a dropped factor of two for free. If ½CV² and Q²/2C disagree, one of Q, C or V is wrong."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE ENERGY CARRIES A HALF",
          "steps": [
            {
              "eq": "charging means ferrying charge from one plate to the other, and it gets harder as you go",
              "why": "The first bit of charge crosses a gap with no potential difference across it and costs nothing. The last bit crosses the full V. This is exactly why the answer is not QV."
            },
            {
              "eq": "when the capacitor already holds <i>q</i>, its voltage is <i>V</i>′ = <i>q</i>/<i>C</i>, so moving a further <i>dq</i> costs <i>dW</i> = <i>V</i>′ <i>dq</i> = (<i>q</i>/<i>C</i>) <i>dq</i>",
              "why": "The work to move a charge through a potential difference is charge times potential difference, from Topic 01. The only subtlety is that the potential difference is itself growing as q grows."
            },
            {
              "eq": "<i>W</i> = ∫ (<i>q</i>/<i>C</i>) <i>dq</i> from 0 to <i>Q</i> = <i>Q</i><sup>2</sup>/2<i>C</i>",
              "why": "The integral of q dq is q²/2, and that is where the half comes from: it is the AVERAGE voltage during charging, V/2, not the final voltage. Substituting Q = CV gives the other two forms."
            },
            {
              "eq": "divide <i>U</i> = ½<i>CV</i><sup>2</sup> by the gap volume <i>Ad</i>, with <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> and <i>V</i> = <i>Ed</i>: <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>",
              "why": "Every trace of A and d cancels, leaving only the field. That is the strongest hint in the whole chapter that the energy is not sitting on the plates at all: it is stored in the field filling the gap, and the same expression works wherever there is a field."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · WHERE THE MISSING HALF WENT",
          "chips": ["the area under the q-V line"],
          "captions": [
            "Voltage against the charge already delivered. Because V = q/C, the graph is a straight line through the origin, and the work done in delivering the next small dq is the thin strip of area V dq under it. Add all the strips and the work is the whole triangle, which is half of base times height, that is QV/2. Draw the rectangle instead and you get QV, the answer you would get if the capacitor had been at its final voltage the whole time. It was not: it started at zero. The battery really does supply QV, and the missing half is dissipated in the connecting resistance, however small that resistance is."
          ],
          "frames": [
            {
              "x": [0, 5], "y": [0, 5], "aspect": 0.72,
              "axisX": "q delivered", "axisY": "V across",
              "ticksX": { "every": 1 }, "ticksY": { "every": 1 },
              "curves": [{ "c": "line", "m": 1, "k": 0 }],
              "areas": [{ "under": { "c": "line", "m": 1, "k": 0 }, "from": 0, "to": 4 }],
              "points": [{ "x": 4, "y": 4, "label": "(Q, V)", "at": "nw" }],
              "labels": [{ "x": 3.0, "y": 1.1, "text": "area = QV/2" }]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any dielectric-insertion question, in five moves",
          "steps": [
            "<b>Ask the fork first.</b> Battery disconnected, or still connected? Write the answer at the top of the page before anything else.",
            "<b>Write the constant quantity at the top too.</b> Disconnected: <i>Q</i> = <i>C</i><sub>0</sub><i>V</i><sub>0</sub>, fixed. Connected: <i>V</i>, fixed at the emf.",
            "<b>Compute the new capacitance.</b> A slab filling the gap gives <i>KC</i><sub>0</sub>. A slab filling half the AREA is two capacitors in <b>parallel</b>. A slab filling half the THICKNESS is two capacitors in <b>series</b>. Getting these two apart is the whole of the composite question.",
            "<b>Read everything else off the constant.</b> Disconnected: <i>V</i> = <i>Q</i>/<i>C</i>, <i>E</i> = <i>V</i>/<i>d</i>, <i>U</i> = <i>Q</i><sup>2</sup>/2<i>C</i>, all scaling as 1/<i>K</i>. Connected: <i>Q</i> = <i>CV</i> and <i>U</i> = ½<i>CV</i><sup>2</sup>, both scaling as <i>K</i>, with <i>E</i> = <i>V</i>/<i>d</i> unchanged.",
            "<b>Check the energy three ways.</b> ½<i>CV</i><sup>2</sup>, <i>Q</i><sup>2</sup>/2<i>C</i> and ½<i>QV</i> must all agree. If they do not, one of the three quantities is wrong and you have found it before the examiner did."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A parallel-plate capacitor has plates of area 200 cm<sup>2</sup> separated by 1.0 mm of air. (a) Find its capacitance. (b) Connected to a 50 V supply, what charge sits on each plate?",
          "steps": [
            "Convert first: <i>A</i> = 200 cm<sup>2</sup> = 2.0 × 10<sup>−2</sup> m<sup>2</sup> (a factor of 10<sup>4</sup>, not 10<sup>2</sup>), and <i>d</i> = 1.0 × 10<sup>−3</sup> m.",
            "(a) <i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(2.0 × 10<sup>−2</sup>)/(1.0 × 10<sup>−3</sup>) = 1.77 × 10<sup>−10</sup> F = 177 pF.",
            "(b) <i>Q</i> = <i>C</i><sub>0</sub><i>V</i> = (1.77 × 10<sup>−10</sup>)(50) = 8.85 × 10<sup>−9</sup> C = 8.85 nC.",
            "Sanity check the size: a hand-sized plate area with a 1 mm gap gives hundreds of picofarads, which is exactly the range real capacitors of this shape live in."
          ],
          "ans": "<i>C</i><sub>0</sub> = 177 pF · <i>Q</i> = 8.85 nC"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A 5 μF capacitor is charged to 100 V and then DISCONNECTED from the battery. A dielectric of constant <i>K</i> = 4 is slid in to fill the gap. Find the new voltage and the new stored energy.",
          "steps": [
            "The trap springs the instant a student assumes the voltage stays at 100 V. Disconnected means the charge is trapped, so <b><i>Q</i> is king</b>.",
            "<i>Q</i> = <i>C</i><sub>0</sub><i>V</i><sub>0</sub> = (5 μF)(100 V) = 500 μC, and this number cannot change.",
            "<i>C</i> = <i>KC</i><sub>0</sub> = 20 μF, so <i>V</i> = <i>Q</i>/<i>C</i> = 500 μC/20 μF = <b>25 V</b>, four times smaller.",
            "Use the <i>Q</i>-fixed form for energy: <i>U</i><sub>0</sub> = <i>Q</i><sup>2</sup>/2<i>C</i><sub>0</sub> = (5 × 10<sup>−4</sup>)<sup>2</sup>/(2 × 5 × 10<sup>−6</sup>) = 2.5 × 10<sup>−2</sup> J, and <i>U</i> = <i>U</i><sub>0</sub>/<i>K</i> = 6.25 × 10<sup>−3</sup> J. Cross-check with ½<i>QV</i> = ½(5 × 10<sup>−4</sup>)(25) = 6.25 mJ. Agrees."
          ],
          "ans": "<i>V</i> = 25 V, not 100 · <i>U</i> = 6.25 mJ, both divided by <i>K</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A 10 μF capacitor is connected to a 200 V battery and KEPT connected. A dielectric of constant <i>K</i> = 5 is inserted, filling the gap. Find (a) the charge before and after, (b) the extra charge drawn from the battery, (c) the change in stored energy.",
          "steps": [
            "Battery connected, so <b><i>V</i> is king</b>, clamped at 200 V. The capacitance rises to <i>C</i> = <i>KC</i><sub>0</sub> = 50 μF.",
            "(a) <i>Q</i><sub>0</sub> = <i>C</i><sub>0</sub><i>V</i> = (10 μF)(200 V) = 2000 μC = 2 mC, and <i>Q</i> = <i>CV</i> = (50 μF)(200 V) = 10000 μC = 10 mC.",
            "(b) The battery supplies the difference: Δ<i>Q</i> = 10 − 2 = 8 mC.",
            "(c) Use the <i>V</i>-fixed form: <i>U</i><sub>0</sub> = ½<i>C</i><sub>0</sub><i>V</i><sup>2</sup> = ½(10 × 10<sup>−6</sup>)(200)<sup>2</sup> = 0.20 J and <i>U</i> = 5<i>U</i><sub>0</sub> = 1.0 J, so Δ<i>U</i> = +0.80 J. Note the bookkeeping: the battery did Δ<i>Q</i> · <i>V</i> = (8 × 10<sup>−3</sup>)(200) = 1.6 J of work, and only half of that ends up stored."
          ],
          "ans": "<i>Q</i><sub>0</sub> = 2 mC, <i>Q</i> = 10 mC · Δ<i>Q</i> = 8 mC · Δ<i>U</i> = +0.80 J"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A parallel-plate capacitor of plate area <i>A</i> and gap <i>d</i> is filled with two dielectric slabs STACKED one above the other, each of thickness <i>d</i>/2, with constants <i>K</i><sub>1</sub> and <i>K</i><sub>2</sub>. (a) Derive the capacitance. (b) Evaluate it for <i>A</i> = 100 cm<sup>2</sup>, <i>d</i> = 4.0 mm, <i>K</i><sub>1</sub> = 2, <i>K</i><sub>2</sub> = 4.",
          "steps": [
            "(a) The same charge <i>Q</i>, so the same σ = <i>Q</i>/<i>A</i>, threads through BOTH slabs. In a medium of constant <i>K</i><sub>i</sub> the field is <i>E</i><sub>i</sub> = σ/(<i>K</i><sub>i</sub>ε<sub>0</sub>), so the drop across slab <i>i</i> is <i>V</i><sub>i</sub> = <i>E</i><sub>i</sub>(<i>d</i>/2) = <i>Qd</i>/(2<i>K</i><sub>i</sub>ε<sub>0</sub><i>A</i>).",
            "The voltages add: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> = (<i>Qd</i>/2ε<sub>0</sub><i>A</i>)(1/<i>K</i><sub>1</sub> + 1/<i>K</i><sub>2</sub>). Same charge and added voltages is the signature of a SERIES pair, which is what stacked slabs really are.",
            "So <i>C</i> = <i>Q</i>/<i>V</i> = (2ε<sub>0</sub><i>A</i>/<i>d</i>) · <i>K</i><sub>1</sub><i>K</i><sub>2</sub>/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>).",
            "(b) With <i>A</i> = 1.0 × 10<sup>−2</sup> m<sup>2</sup> and <i>d</i> = 4.0 × 10<sup>−3</sup> m: 2ε<sub>0</sub><i>A</i>/<i>d</i> = 2(8.85 × 10<sup>−12</sup>)(1.0 × 10<sup>−2</sup>)/(4.0 × 10<sup>−3</sup>) = 4.425 × 10<sup>−11</sup> F, and <i>K</i><sub>1</sub><i>K</i><sub>2</sub>/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>) = 8/6. So <i>C</i> ≈ 5.9 × 10<sup>−11</sup> F. If the slabs had sat SIDE BY SIDE instead, each covering half the area, they would be in parallel and the answer would be ε<sub>0</sub><i>A</i>(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/2<i>d</i> = 66 pF, a different number from the same two slabs."
          ],
          "ans": "<i>C</i> = (2ε<sub>0</sub><i>A</i>/<i>d</i>)<i>K</i><sub>1</sub><i>K</i><sub>2</sub>/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>) ≈ 59 pF"
        },
        {
          "t": "mcq",
          "q": "A parallel-plate capacitor is charged so that the charge on its plates is doubled. Its capacitance:",
          "opts": [
            { "label": "doubles", "nudge": "This assumes C tracks the charge, which is the exact misconception this topic exists to remove. Doubling Q doubles V as well, so the ratio Q/V does not move." },
            { "label": "halves", "nudge": "This inverts even the wrong intuition. Nothing about adding charge to a fixed pair of plates could make them store less per volt." },
            { "label": "stays the same", "nudge": null },
            { "label": "quadruples", "nudge": "This borrows the square from the ENERGY, which really does go as V². Capacitance is a ratio, not an energy, and it has no square in it." }
          ],
          "correct": 2,
          "solution": "C = Kε₀A/d contains only geometry and the dielectric. Q cancelled out of the derivation. If a problem says the capacitance changed, something about the GEOMETRY or the dielectric changed, never just the charge or the voltage."
        },
        {
          "t": "mcq",
          "q": "A capacitor is connected to a battery. While it remains connected, a dielectric slab is inserted to fill the gap. The charge on the plates:",
          "opts": [
            { "label": "increases", "nudge": null },
            { "label": "decreases", "nudge": "This contradicts Q = CV with V clamped and C risen. Charge could only fall if the battery pulled it out, and a battery holding V fixed against a larger C must push more in." },
            { "label": "stays the same", "nudge": "This is the DISCONNECTED answer, picked by memorising \"charge is conserved\" without first checking whether the battery is still in the circuit. With a battery attached there is somewhere for charge to come from." },
            { "label": "drops to zero", "nudge": "Nothing here discharges the capacitor. The slab is an insulator, so it cannot carry charge between the plates." }
          ],
          "correct": 0,
          "solution": "Battery connected means V is fixed. C rises to KC₀, so Q = CV rises to KQ₀, and the extra charge flows in from the battery. This one fork, connected or not, decides the whole question."
        },
        {
          "t": "mcq",
          "q": "The voltage across a capacitor is doubled. The energy stored:",
          "opts": [
            { "label": "doubles", "nudge": "This is the linear-thinking trap. U = ½CV² carries a square, so doubling V multiplies U by four, not two." },
            { "label": "quadruples", "nudge": null },
            { "label": "halves", "nudge": "Energy cannot fall when the voltage rises on a fixed capacitor. Both Q and V have gone up, and U = ½QV is the product of two larger numbers." },
            { "label": "is unchanged", "nudge": "This treats stored energy as a property of the capacitor alone. It is not: C is fixed by geometry, but U depends on how hard you have charged it." }
          ],
          "correct": 1,
          "solution": "U = ½CV², so U is proportional to V². Doubling V multiplies U by 4. The same square is why a capacitor's working-voltage rating matters so much: a modest overvoltage carries a large energy overshoot."
        },
        {
          "t": "mcq",
          "q": "A capacitor <i>C</i> is charged through a battery of emf <i>V</i>. What fraction of the energy supplied by the battery ends up stored in the capacitor?",
          "opts": [
            { "label": "100 per cent", "nudge": "This forgets the dissipation entirely. The battery moves charge Q through its full emf V, doing QV of work, while the capacitor's own voltage climbs from zero and averages only V/2." },
            { "label": "50 per cent", "nudge": null },
            { "label": "25 per cent", "nudge": "This misremembers the fraction, probably by squaring the half. The stored energy is ½CV² against a supplied CV², which is one half and not one quarter." },
            { "label": "it depends on the circuit resistance", "nudge": "The seductive answer: more resistance does mean slower charging, but the TOTAL heat is always exactly half the supplied energy, whatever the resistance. Picking this misses the resistance-independence, which is the elegant part." }
          ],
          "correct": 1,
          "solution": "The battery does QV = CV² of work, and the capacitor stores ½CV². The other half is dissipated as heat in whatever resistance is in the loop, and remarkably the fraction does not depend on how much resistance that is. The proof needs the charging current in time and belongs to Current Electricity."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A parallel-plate capacitor has plates of area 0.05 m<sup>2</sup> separated by 2.0 mm of air. Find its capacitance.", "a": "<i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(0.05)/(2.0 × 10<sup>−3</sup>) = 2.21 × 10<sup>−10</sup> F ≈ 221 pF." },
            { "q": "[NEET] A 2 μF capacitor is charged to 60 V and disconnected. A dielectric of constant <i>K</i> = 3 is then inserted to fill the gap. Find the new voltage and the new stored energy.", "a": "Disconnected, so <i>Q</i> = (2 μF)(60 V) = 120 μC is fixed. <i>C</i> = 6 μF, so <i>V</i> = 120/6 = <b>20 V</b> and <i>U</i> = <i>Q</i><sup>2</sup>/2<i>C</i> = (1.2 × 10<sup>−4</sup>)<sup>2</sup>/(1.2 × 10<sup>−5</sup>) = 1.2 × 10<sup>−3</sup> J. Both fell by <i>K</i> = 3." },
            { "q": "[JEE Main] A 4 μF capacitor is charged to 250 V. Find the energy stored in it.", "a": "<i>U</i> = ½<i>CV</i><sup>2</sup> = ½(4 × 10<sup>−6</sup>)(250)<sup>2</sup> = ½(4 × 10<sup>−6</sup>)(62500) = 0.125 J. Cross-check: <i>Q</i> = 1.0 mC, so ½<i>QV</i> = ½(10<sup>−3</sup>)(250) = 0.125 J. Agrees." },
            { "q": "[JEE Main] A 3 μF capacitor is connected to a 100 V battery and kept connected. A dielectric of constant <i>K</i> = 4 is inserted, filling the gap. Find the extra charge drawn from the battery.", "a": "Connected, so <i>V</i> = 100 V is fixed. <i>Q</i><sub>0</sub> = 300 μC and <i>Q</i> = (12 μF)(100 V) = 1200 μC, so Δ<i>Q</i> = <b>900 μC</b> = 9 × 10<sup>−4</sup> C." },
            { "q": "[JEE Advanced] A parallel-plate capacitor of area 0.02 m<sup>2</sup> and gap 1.0 mm has two dielectric slabs placed SIDE BY SIDE, each covering half the plate area, with <i>K</i><sub>1</sub> = 2 and <i>K</i><sub>2</sub> = 6. Find the capacitance.", "a": "Side by side means the same voltage across each half, so they are in <b>parallel</b> and the capacitances add: <i>C</i> = ε<sub>0</sub>(<i>A</i>/2)(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/<i>d</i> = (8.85 × 10<sup>−12</sup>)(0.01)(8)/(1.0 × 10<sup>−3</sup>) = 7.08 × 10<sup>−10</sup> F ≈ 708 pF. Stacked instead, they would be in series and give a smaller answer." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing <i>C</i> depends on <i>Q</i> or <i>V</i>.</b> It does not. <i>C</i> is fixed by area, separation and dielectric. If a problem implies the capacitance changed, it is because the GEOMETRY or the DIELECTRIC changed, never just the charge or the voltage.",
            "<b>Skipping the \"is the battery connected?\" check.</b> This is the number one error in the topic. Disconnected means <i>Q</i> is fixed; connected means <i>V</i> is fixed. Decide it FIRST, every single time, before touching a formula.",
            "<b>Picking the wrong energy formula.</b> Use <i>U</i> = <i>Q</i><sup>2</sup>/2<i>C</i> when <i>Q</i> is held fixed and <i>U</i> = ½<i>CV</i><sup>2</sup> when <i>V</i> is held fixed. The right choice makes the <i>K</i>-scaling obvious in one line, and the wrong one buries it under algebra.",
            "<b>Confusing the volt with the joule when the plate charge is asked for.</b> A capacitor holds +<i>Q</i> and −<i>Q</i>, so its NET charge is zero and <i>Q</i> in every formula means the magnitude on ONE plate. And <i>U</i> = ½<i>QV</i> is in joules while <i>V</i> is in volts, which is the same bridge as Topic 02 with the extra half.",
            "<b>Letting <i>d</i> go to zero to make <i>C</i> enormous.</b> On paper <i>C</i> = ε<sub>0</sub><i>A</i>/<i>d</i> goes to infinity. In reality <i>E</i> = <i>V</i>/<i>d</i> rises just as fast, and the gap breaks down at the dielectric strength long before <i>d</i> gets small enough to matter. Dielectric strength is a different quantity from <i>K</i> and it is what really limits a capacitor."
          ]
        },
        {
          "t": "protip",
          "html": "build a two-branch reflex and you will never think about this topic again. disconnected? write Q at the top of the page as a constant, then read off V = Q/C, E = V/d, U = Q²/2C, everything scaling as one over K. connected? write V at the top, then Q = CV and U = ½CV², both scaling as K, with E = V/d untouched. and for the advanced version, the force that sucks a dielectric into a capacitor is a slope of energy against DISTANCE, F = ½V² dC/dx at fixed voltage: the denominator is the length the slab slides along, never the plate area, and a force with an area under it is a pressure and cannot be right."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>C</i> = <i>Q</i>/<i>V</i>, unit farad = C V<sup>−1</sup>", "note": "geometry and dielectric only; a farad is huge, so expect pF to μF" },
            { "f": "<i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i>, and <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i>", "note": "K = 1 must give back the vacuum answer, and it does" },
            { "f": "<i>E</i> = σ/ε<sub>0</sub> = <i>V</i>/<i>d</i>, and <i>E</i> = <i>E</i><sub>0</sub>/<i>K</i>", "note": "uniform in the gap; a dielectric weakens it, never strengthens it" },
            { "f": "<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/2<i>C</i> = ½<i>QV</i>", "note": "all three must agree; check them and a dropped factor shows itself" },
            { "f": "<i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>", "note": "the energy lives in the field, not on the plates" },
            { "f": "disconnected ⇒ <i>Q</i> fixed · connected ⇒ <i>V</i> fixed", "note": "V, E, U all ÷K on the first branch; Q, U both ×K on the second" }
          ],
          "aids": [
            "\"capacitance is geometry, not charge\"",
            "\"disconnected? Q is king. connected? V is king\"",
            "\"energy goes as V squared, and charging always wastes half\"",
            "\"a dielectric only ever boosts C, by K\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Electrostatics of Conductors",
      "chip": "04 CONDUCTORS",
      "kalam": "inside a conductor nothing happens, and that is the whole story",
      "blocks": [
        {
          "t": "p",
          "html": "A conductor is a material packed with <b>free electrons</b> that go wherever a field pushes them. That single fact decides everything about how a conductor behaves once the charges have stopped moving, which is what <b>electrostatic equilibrium</b> means. Think of the free electrons as an obedient crowd that instantly rearranges itself to kill any field trying to shove it around. The moment an external field appears, the electrons shuffle until they have set up their own field that exactly cancels the intruder, <b>everywhere inside the metal</b>.<br><br>So the headline result is: <b>the electric field inside the body of a conductor is zero.</b> Not small. Exactly zero, in equilibrium. If it were not, the free charges would still be feeling a force and would still be moving, which contradicts the word equilibrium. The crowd settles only when nobody is being pushed."
        },
        {
          "t": "p",
          "html": "From that one idea a cascade of properties follows, and every one of them is a two-mark question somewhere.<br><br><b>All the excess charge sits on the surface.</b> Draw any closed surface just inside the metal. The field on it is zero, so the flux through it is zero, so by Gauss's law it encloses no net charge. Shrink or move that surface anywhere you like inside the conductor and the answer is always zero. The only place left for the excess charge to live is the outer surface.<br><br><b>The whole conductor is a single equipotential.</b> Since <i>E</i> = 0 inside, there is no downhill anywhere within the metal, so moving a charge from one interior point to another costs no work and every point sits at the same potential. The surface is at that same potential too, so a charged conductor is one big equipotential blob.<br><br><b>Just outside the surface the field is perpendicular, and equals σ/ε<sub>0</sub>.</b> Any sideways component would drag the surface charges along the surface, and they have stopped moving, so the tangential part must be zero. The field can only stick straight out or straight in, and its size is set by the LOCAL surface charge density."
        },
        {
          "t": "think",
          "html": "a hollow conductor is a fortress. carve a cavity inside one, put no charge in the cavity, and the field in that cavity is zero no matter how violent the field outside, because the surface charges rearrange to cancel it throughout. that is electrostatic shielding: the faraday cage, the reason you are safe inside a car during lightning, the reason sensitive electronics sit in metal boxes. but notice the one-way nature of it. shielding protects the inside from the outside. a charge placed inside the cavity still makes its presence felt outside, and no amount of metal hides it."
        },
        {
          "t": "def",
          "term": "Everything here holds only in equilibrium",
          "html": "Four boundaries, and questions live on all of them. <b>One:</b> every result on this page requires <b>electrostatic equilibrium</b>, charges at rest. A wire carrying a current has a field inside it, and that is the whole of the next chapter. <b>Two:</b> \"<i>E</i> = 0 inside\" means inside the <b>conducting material itself</b>, not inside a cavity that contains a charge. <b>Three:</b> <i>E</i> = σ/ε<sub>0</sub> just outside is <b>twice</b> the σ/2ε<sub>0</sub> of an isolated charged sheet, because a conductor's charge layer is one-sided: the field is dead on the metal side, so all the flux is forced out of the other face. <b>Four:</b> σ is <b>not uniform</b> on an irregular conductor. It piles up where the surface curves sharply, at points and edges, which is exactly why lightning rods are pointed and why sharp corners on a high-voltage terminal are where the air breaks down first."
        },
        {
          "t": "defgrid",
          "title": "The five properties, in one table",
          "rows": [
            { "k": "Inside the metal", "v": "<i>E</i> = 0 everywhere in the material, in equilibrium. Not small, exactly zero" },
            { "k": "Charge location", "v": "<i>q</i> inside any interior Gaussian surface = 0, so all excess charge sits on the SURFACE" },
            { "k": "Potential", "v": "<i>V</i> = constant throughout, interior and surface: one equipotential blob" },
            { "k": "Just outside", "v": "<i>E</i> = σ/ε<sub>0</sub>, perpendicular to the surface. Compare an isolated sheet: σ/2ε<sub>0</sub>" },
            { "k": "Cavity, empty", "v": "<i>E</i> = 0 inside it whatever the outside field: the Faraday cage, and it shields one way only" },
            { "k": "Cavity holding +<i>q</i>", "v": "inner surface takes −<i>q</i>, outer surface takes +<i>q</i> on a neutral conductor" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FIELD AT A CONDUCTOR'S SURFACE",
          "main": "<i>E</i><sub>inside</sub> = 0<br><i>E</i><sub>just outside</sub> = σ/ε<sub>0</sub>, normal to the surface",
          "legend": [
            "σ = the LOCAL surface charge density in C m<sup>−2</sup>, which varies over an irregular conductor and is largest where the surface is sharply curved",
            "<i>E</i> is in N C<sup>−1</sup> = V m<sup>−1</sup>; ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>",
            "an isolated charged sheet gives only σ/2ε<sub>0</sub>, half as much, because its flux escapes from BOTH faces"
          ],
          "note": "Both lines need electrostatic equilibrium. The field is discontinuous at the surface, jumping from 0 to sigma over epsilon-nought across a layer of no thickness, and that jump is the surface charge itself."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 2.5 · THE PILLBOX THAT GIVES SIGMA OVER EPSILON-NOUGHT",
          "chips": ["a Gaussian box straddling the skin"],
          "captions": [
            "A tiny cylindrical Gaussian surface straddling the conductor's surface, one flat cap of area dS just outside and the other just inside the metal. The inner cap contributes nothing to the flux because the field there is zero. The curved side contributes nothing either, because just outside the surface the field is perpendicular and so runs along the side rather than through it. That leaves only the outer cap, carrying E dS, and Gauss's law sets it equal to sigma dS over epsilon-nought. One face doing all the work is exactly why the answer is double the isolated sheet's."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[0.6, 2.6], [0.6, 0.6], [9.4, 0.6], [9.4, 2.6]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[4.2, 3.4], [4.2, 1.8], [5.8, 1.8], [5.8, 3.4]], "close": true, "dash": true, "tone": "amber" }
              ],
              "marks": [
                { "x": 1.6, "y": 2.9, "glyph": "plus", "tone": "ink" },
                { "x": 2.6, "y": 2.9, "glyph": "plus", "tone": "ink" },
                { "x": 7.4, "y": 2.9, "glyph": "plus", "tone": "ink" },
                { "x": 8.4, "y": 2.9, "glyph": "plus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [5.0, 3.5], "to": [5.0, 4.9], "tone": "amber", "label": "E", "at": "mid" }
              ],
              "labels": [
                { "x": 2.4, "y": 1.5, "text": "E = 0 inside" },
                { "x": 3.0, "y": 3.6, "text": "cap dS" },
                { "x": 7.4, "y": 4.3, "text": "σ on the surface" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE FIELD IS ZERO AND THE CHARGE IS ON THE SKIN",
          "steps": [
            {
              "eq": "suppose a non-zero field <i>E</i> existed inside the metal. Every free electron would feel a force −<i>eE</i> and accelerate",
              "why": "A proof by contradiction, and the only physics it uses is that a conductor HAS free charges. Accelerating charges means charges still moving, which is precisely not equilibrium."
            },
            {
              "eq": "so the electrons redistribute until their own field cancels the internal one exactly, and in equilibrium <i>E</i><sub>inside</sub> = 0",
              "why": "They stop rearranging only when nobody feels a push, and that condition IS zero field. Note that this takes about 10⁻¹⁶ s in a metal, which is why we can treat it as instantaneous."
            },
            {
              "eq": "draw a Gaussian surface entirely inside the metal. Everywhere on it <i>E</i> = 0, so the flux through it is zero",
              "why": "Flux is the field summed over the surface, and a field that is zero at every point contributes nothing anywhere."
            },
            {
              "eq": "Gauss's law says that flux = <i>q</i><sub>enclosed</sub>/ε<sub>0</sub>, so <i>q</i><sub>enclosed</sub> = 0, for ANY interior surface. All the excess charge is on the outer surface",
              "why": "Gauss's law is quoted from the previous chapter: the flux of E out of any closed surface is the enclosed charge divided by ε₀. Since the surface was arbitrary, shrink it around any interior point you like and there is still no charge there. The surface is the only place left."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD JUST OUTSIDE, AND WHY IT IS DOUBLE",
          "steps": [
            {
              "eq": "take a tiny cylindrical pillbox straddling the surface, one flat face of area Δ<i>S</i> just outside and the other just inside",
              "why": "Tiny on purpose: over a small enough patch the surface is flat and σ is constant, which is what lets a single number stand for the local charge density."
            },
            {
              "eq": "the inner face contributes no flux, because <i>E</i> = 0 in the metal. The curved side contributes none either, because <i>E</i> outside is perpendicular to the surface and so runs ALONG the side",
              "why": "Perpendicularity was established from the tangential argument: a sideways field would drag surface charge sideways, and the charges have stopped. So the only face left with flux through it is the outer cap."
            },
            {
              "eq": "so the total flux is <i>E</i> Δ<i>S</i>, and the charge enclosed is σ Δ<i>S</i>. Gauss's law gives <i>E</i> Δ<i>S</i> = σ Δ<i>S</i>/ε<sub>0</sub>",
              "why": "Same Gauss's law as before, applied to the same kind of box in the other position. The Δ S on both sides is about to do the useful work."
            },
            {
              "eq": "Δ<i>S</i> cancels: <i>E</i> = σ/ε<sub>0</sub>",
              "why": "Compare an isolated sheet, where flux escapes through BOTH faces and each carries half, giving σ/2ε₀. Here the inside face is dead, so all the flux is forced out of one face and the answer doubles. Reaching for σ/2ε₀ at a conductor's surface is the commonest error in this topic."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE ISOLATED SPHERE AND THE SPHERICAL CAPACITOR",
          "main": "<i>V</i> = <i>kQ</i>/<i>R</i> and <i>C</i> = 4πε<sub>0</sub><i>R</i><br><i>C</i><sub>spherical</sub> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>)",
          "legend": [
            "<i>R</i> = radius of the isolated conducting sphere in metres (m), <i>Q</i> = its charge in coulombs (C), <i>V</i> = its potential in volts (V)",
            "<i>a</i> = inner radius and <i>b</i> = outer radius of the concentric pair, both in metres (m), with vacuum between them",
            "ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>, and <i>C</i> is in farads (F). Fill the gap with a dielectric and both results pick up a factor <i>K</i>"
          ],
          "note": "Let b run off to infinity and ab/(b − a) tends to a, so the spherical capacitor collapses to the isolated sphere: an outer shell infinitely far away is no shell at all. And a small gap b − a gives a large capacitance, the same lesson as the 1/d in the parallel plate."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · CAPACITANCE OF A SPHERICAL CAPACITOR",
          "steps": [
            {
              "eq": "inner sphere radius <i>a</i> carries +<i>Q</i>, outer shell radius <i>b</i> carries −<i>Q</i>. By Gauss's law the field in the gap is that of the inner charge alone: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>",
              "why": "A spherical Gaussian surface of radius r between the shells encloses only +Q. The outer shell's charge sits outside it and contributes nothing, which is the whole reason a shell can be ignored from inside."
            },
            {
              "eq": "<i>V</i> = ∫ <i>E</i> <i>dr</i> from <i>a</i> to <i>b</i> = <i>kQ</i> ∫ <i>dr</i>/<i>r</i><sup>2</sup> = <i>kQ</i>(1/<i>a</i> − 1/<i>b</i>)",
              "why": "The same integral as the point-charge potential, now between two finite limits instead of from infinity. Note it is the inner sphere that comes out at the higher potential, as it must, since the field runs outward from it."
            },
            {
              "eq": "= <i>kQ</i>(<i>b</i> − <i>a</i>)/(<i>ab</i>)",
              "why": "Just combining the fractions, and the form makes the next step one line."
            },
            {
              "eq": "<i>C</i> = <i>Q</i>/<i>V</i> = <i>ab</i>/(<i>k</i>(<i>b</i> − <i>a</i>)) = 4πε<sub>0</sub><i>ab</i>/(<i>b</i> − <i>a</i>)",
              "why": "Q cancels again, exactly as it did for the parallel plate: capacitance is geometry. Set b to infinity and you recover C = 4πε₀a, the isolated sphere, which is the limiting check worth doing every time you meet this formula."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · FIELD AND POTENTIAL OF A CHARGED CONDUCTING SPHERE",
          "chips": ["field jumps at the surface", "potential is flat inside"],
          "captions": [
            "The field against distance from the centre. It is exactly zero everywhere inside the metal, then JUMPS at the surface to sigma over epsilon-nought, which is the same number as kQ/R squared, and falls away as 1/r squared outside. The jump is real: the field is discontinuous across a surface charge layer, and the size of the jump is what the surface charge is.",
            "The potential of the same sphere, on the same distance axis. It is CONSTANT inside, because the whole conductor is one equipotential and a flat potential is what zero field means. Outside it falls as 1/r, exactly as if all the charge sat at the centre. And notice what does NOT happen at the surface: the potential has no jump, only a kink, because a jump in V would need an infinite field."
          ],
          "frames": [
            {
              "x": [0, 4], "y": [0, 5], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "E",
              "ticksX": { "at": [1], "labels": ["R"] },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [1, 0], [1, 4], [1.2, 2.78], [1.4, 2.04], [1.6, 1.56], [1.8, 1.23], [2, 1], [2.4, 0.69], [2.8, 0.51], [3.2, 0.39], [3.6, 0.31], [4, 0.25]] }
              ],
              "labels": [
                { "x": 0.55, "y": 0.5, "text": "E = 0 inside" },
                { "x": 2.7, "y": 1.7, "text": "kQ/r² outside" }
              ],
              "points": [
                { "x": 1, "y": 4, "label": "σ/ε₀", "at": "ne" }
              ]
            },
            {
              "x": [0, 4], "y": [0, 5], "aspect": 0.72,
              "axisX": "r (m)", "axisY": "V",
              "ticksX": { "at": [1], "labels": ["R"] },
              "curves": [
                { "c": "pts", "pts": [[0, 4], [1, 4], [1.2, 3.33], [1.4, 2.86], [1.6, 2.5], [1.8, 2.22], [2, 2], [2.4, 1.67], [2.8, 1.43], [3.2, 1.25], [3.6, 1.11], [4, 1]] }
              ],
              "labels": [
                { "x": 0.75, "y": 4.5, "text": "V flat inside" },
                { "x": 2.8, "y": 2.4, "text": "kQ/r outside" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE · A CHARGE IN A CAVITY, AND THE TWO SURFACES IT CREATES",
          "chips": ["minus q inside, plus q outside"],
          "captions": [
            "A neutral conductor with a cavity holding +q. Draw a Gaussian surface inside the metal that encloses the cavity: the field on it is zero, so it must enclose zero net charge, so the inner wall has to carry exactly −q. The conductor started neutral, so that −q had to come from somewhere, and the +q it left behind ends up on the outer surface. From outside, the field is exactly that of +q sitting at the centre: the cavity's own geometry, and even where in the cavity the charge sits, are completely invisible. Shielding runs one way, and this is the direction it does not run."
          ],
          "frames": [
            {
              "x": [-4, 4], "y": [-3.2, 3.2], "axes": "none", "aspect": 0.8,
              "curves": [
                { "c": "circle", "r": 3.0 },
                { "c": "circle", "r": 1.1 }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus", "tone": "amber", "label": "+q" },
                { "x": 0.955, "y": 0.955, "glyph": "minus", "tone": "ink" },
                { "x": -0.955, "y": 0.955, "glyph": "minus", "tone": "ink" },
                { "x": -0.955, "y": -0.955, "glyph": "minus", "tone": "ink" },
                { "x": 0.955, "y": -0.955, "glyph": "minus", "tone": "ink" },
                { "x": 2.7, "y": 0, "glyph": "plus", "tone": "ink" },
                { "x": 0, "y": 2.7, "glyph": "plus", "tone": "ink" },
                { "x": -2.7, "y": 0, "glyph": "plus", "tone": "ink" },
                { "x": 0, "y": -2.7, "glyph": "plus", "tone": "ink" }
              ],
              "labels": [
                { "x": 0, "y": 2.05, "text": "metal: E = 0 here" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "the surface charge is not spread evenly on anything but a sphere. it piles up wherever the surface curves sharply, at points, edges and spikes, because a tight curve lets the charges get further from each other than a flat stretch does. and since E just outside is sigma over epsilon-nought, a big sigma means a big field, so the air near a sharp point breaks down first. that is a lightning rod: not a target, a drain. it is the place the field is largest, so it is where the discharge starts and where the charge quietly leaks away before a strike can build. the same fact is why every high-voltage terminal you will ever see is rounded."
        },
        {
          "t": "proc",
          "title": "Concentric shells, without tears",
          "steps": [
            "<b>Learn the one rule that does all the work.</b> A uniformly charged shell of radius <i>r</i><sub>shell</sub> contributes <i>kq</i>/<i>r</i><sub>shell</sub>, a CONSTANT, at every point inside or on it, and <i>kq</i>/<i>r</i> at points outside it.",
            "<b>To find the potential of a shell, evaluate at its own radius.</b> Add the contribution of every charge in the system, its own included, using the rule above for each one.",
            "<b>Never mix up which shell is inside which.</b> For the inner shell of radius <i>a</i>, its own charge gives <i>kq</i>/<i>a</i> and the outer shell gives the constant <i>kQ</i>/<i>b</i>. For the outer shell, BOTH charges are at or inside <i>b</i>, so both give <i>k</i>(...)/<i>b</i>.",
            "<b>For fields, use Gauss's law and count only what is enclosed.</b> Between the shells only the inner charge counts, and outside both, the sum counts. A shell is invisible from inside it, for the field.",
            "<b>Sanity check.</b> Two positive shells always leave the inner one at the higher potential, since you have to climb outward against the field to reach it. If your inner shell comes out lower, a contribution has been dropped."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A solid conducting sphere of radius 0.10 m carries a charge of +2 μC. Find (a) the potential of the sphere, (b) the field just outside its surface, (c) the field at its centre.",
          "steps": [
            "Outside a spherically symmetric conductor, everything behaves as if the whole charge sat at the centre.",
            "(a) <i>V</i> = <i>kQ</i>/<i>R</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/0.10 = 1.8 × 10<sup>5</sup> V. And this is the potential of the WHOLE sphere, surface and interior alike, because a conductor is one equipotential.",
            "(b) <i>E</i> = <i>kQ</i>/<i>R</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/(0.10)<sup>2</sup> = 1.8 × 10<sup>6</sup> N C<sup>−1</sup>. Equivalently σ/ε<sub>0</sub>, and checking that both routes agree is worth the ten seconds.",
            "(c) At the centre, and everywhere else inside the metal, <i>E</i> = 0. Note that <i>V</i> is NOT zero there: it is 1.8 × 10<sup>5</sup> V, the same as at the surface. Zero field with non-zero potential, which is Topic 01's trap wearing a conductor."
          ],
          "ans": "<i>V</i> = 1.8 × 10<sup>5</sup> V · <i>E</i><sub>outside</sub> = 1.8 × 10<sup>6</sup> N C<sup>−1</sup> · <i>E</i><sub>centre</sub> = 0"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A point charge of +5 nC sits at the centre of a cavity inside an electrically NEUTRAL conductor. State the charge induced on the inner and outer surfaces, and describe the field at a point outside the conductor.",
          "steps": [
            "The trap is forgetting that a neutral conductor must rearrange its own charge to keep its interior field zero. Nothing is being added; it is being moved.",
            "Draw a Gaussian surface inside the metal enclosing the cavity. Since <i>E</i> = 0 there, it encloses zero net charge, so the inner surface must carry <b>−5 nC</b> to cancel the +5 nC in the cavity.",
            "The conductor was neutral overall and nothing has entered or left it, so the +5 nC that the inner surface gave up must appear on the <b>outer surface</b>.",
            "Outside, the field is exactly that of a +5 nC point charge at the centre. The cavity's shape and even the charge's position inside it are invisible from outside, because the outer surface charge redistributes uniformly. Shielding works inward, never outward."
          ],
          "ans": "inner surface −5 nC · outer surface +5 nC · outside, the field of +5 nC at the centre"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "A conducting shell of radius <i>a</i> = 0.05 m carries <i>q</i> = +2 nC. It is surrounded by a concentric conducting shell of radius <i>b</i> = 0.10 m carrying <i>Q</i> = +4 nC. Find the potential of (a) the outer shell, (b) the inner shell.",
          "steps": [
            "A conductor's potential is the sum of the contributions from ALL charges, evaluated at its own radius. Its own charge is included.",
            "(a) At the outer shell, radius <i>b</i>: both charges are at or inside <i>b</i>, so each acts as if centred. <i>V</i><sub>b</sub> = <i>k</i>(<i>q</i> + <i>Q</i>)/<i>b</i> = (9 × 10<sup>9</sup>)(6 × 10<sup>−9</sup>)/0.10 = 540 V.",
            "(b) At the inner shell, radius <i>a</i>: its own charge contributes <i>kq</i>/<i>a</i>, while the outer shell, being OUTSIDE it, contributes the constant <i>kQ</i>/<i>b</i> everywhere within itself.",
            "<i>V</i><sub>a</sub> = <i>kq</i>/<i>a</i> + <i>kQ</i>/<i>b</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−9</sup>)/0.05 + (9 × 10<sup>9</sup>)(4 × 10<sup>−9</sup>)/0.10 = 360 + 360 = 720 V. Higher than the outer shell, as two positive shells must be."
          ],
          "ans": "<i>V</i><sub>b</sub> = 540 V · <i>V</i><sub>a</sub> = 720 V, the inner shell higher"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A spherical capacitor has an inner sphere of radius <i>a</i> = 0.08 m carrying +<i>Q</i> and a concentric outer shell of radius <i>b</i> = 0.10 m carrying −<i>Q</i>, with vacuum between. Find its capacitance.",
          "steps": [
            "By Gauss's law the field at any radius <i>r</i> in the gap between the spheres is that of the inner charge alone: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>.",
            "<i>V</i> = ∫ <i>E</i> <i>dr</i> from <i>a</i> to <i>b</i> = <i>kQ</i>(1/<i>a</i> − 1/<i>b</i>) = <i>kQ</i>(<i>b</i> − <i>a</i>)/(<i>ab</i>), so <i>C</i> = <i>Q</i>/<i>V</i> = <i>ab</i>/(<i>k</i>(<i>b</i> − <i>a</i>)).",
            "<i>C</i> = (0.08)(0.10)/((9 × 10<sup>9</sup>)(0.02)) = 0.008/(1.8 × 10<sup>8</sup>) ≈ 4.4 × 10<sup>−11</sup> F ≈ 44 pF.",
            "Two checks. Picofarads, which is the right order for a hand-sized object, and a small gap <i>b</i> − <i>a</i> gives a large capacitance, exactly the lesson of the parallel plate's 1/<i>d</i>. Fill the gap with a dielectric of constant <i>K</i> and every step picks up one factor of <i>K</i>, giving <i>C</i> = 4π<i>K</i>ε<sub>0</sub><i>ab</i>/(<i>b</i> − <i>a</i>)."
          ],
          "ans": "<i>C</i> = 4πε<sub>0</sub><i>ab</i>/(<i>b</i> − <i>a</i>) ≈ 44 pF"
        },
        {
          "t": "mcq",
          "q": "In electrostatic equilibrium, the electric field inside the MATERIAL of a charged conductor is:",
          "opts": [
            { "label": "zero", "nudge": null },
            { "label": "σ/ε<sub>0</sub>", "nudge": "That is the field JUST OUTSIDE the surface, not inside the metal. The two are separated by a layer of no thickness and differ by the whole of the field." },
            { "label": "σ/2ε<sub>0</sub>", "nudge": "That is the isolated-sheet value, and it is not the field anywhere near a conductor. It appears here because it is the number students most often reach for by mistake." },
            { "label": "maximum at the centre", "nudge": "This contradicts the whole equilibrium argument. Any interior field at all would keep the free electrons moving, and then the conductor would not be in equilibrium." }
          ],
          "correct": 0,
          "solution": "Free charges rearrange until the internal field cancels everywhere, because otherwise they would keep moving and equilibrium would not have been reached. Exactly zero, not merely small."
        },
        {
          "t": "mcq",
          "q": "Excess charge given to a solid conductor resides:",
          "opts": [
            { "label": "uniformly throughout its volume", "nudge": "This ignores that the interior field is zero. A Gaussian surface drawn anywhere inside would then enclose charge, which Gauss's law forbids when the flux through it is zero." },
            { "label": "only on its surface", "nudge": null },
            { "label": "only at its centre", "nudge": "The centre is an interior point like any other, and the same Gaussian argument kills it. There is nothing special about the centre of a conductor." },
            { "label": "half on the surface and half inside", "nudge": "Any charge at all in the interior would show up as flux through an interior Gaussian surface, and there is none. The split is all-or-nothing, and it is all." }
          ],
          "correct": 1,
          "solution": "Draw any Gaussian surface inside the metal. E = 0 on it, so the flux is zero, so by Gauss's law it encloses no net charge. Since the surface can be drawn anywhere inside, no interior point holds charge, and the surface is the only place left."
        },
        {
          "t": "mcq",
          "q": "A hollow conductor has an EMPTY cavity. It is placed in a strong external field. The field inside the cavity is:",
          "opts": [
            { "label": "equal to the external field", "nudge": "This assumes the field walks straight through the metal. It cannot: the surface charges rearrange precisely so that it does not." },
            { "label": "half the external field", "nudge": "There is no mechanism that would halve it. The cancellation is exact, not partial, because the charges rearrange until nobody feels a push." },
            { "label": "zero", "nudge": null },
            { "label": "opposite to the external field", "nudge": "This imagines the induced charges overshooting. They do not: they stop rearranging the instant the net field is zero, which is what equilibrium means." }
          ],
          "correct": 2,
          "solution": "Electrostatic shielding, the Faraday cage. The surface charges rearrange to cancel the external field throughout the cavity, however strong it is. Note the one-way nature: a charge placed INSIDE the cavity is still detectable outside."
        },
        {
          "t": "mcq",
          "q": "The field just outside the surface of a charged conductor, where the local surface charge density is σ, is:",
          "opts": [
            { "label": "σ/2ε<sub>0</sub>", "nudge": "The classic trap: this is the isolated-sheet value, and it forgets that a conductor kills the field on the metal side, so all the flux is forced out of one face instead of two." },
            { "label": "σ/ε<sub>0</sub>", "nudge": null },
            { "label": "σε<sub>0</sub>", "nudge": "Dimensionally impossible. Multiplying by ε₀ rather than dividing gives C² m⁻⁴ N⁻¹, which is not a field, and a quick unit check kills this option without any physics." },
            { "label": "zero", "nudge": "That is the value INSIDE the metal. Just outside, the field is what the surface charge produces, and the two differ across a layer with no thickness." }
          ],
          "correct": 1,
          "solution": "The pillbox has zero flux through its inner face because E = 0 in the metal, and zero through its curved side because E outside is perpendicular. All the flux exits one face, giving E ΔS = σΔS/ε₀ and hence σ/ε₀, double the isolated sheet."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A conducting sphere of radius 0.20 m carries 4 μC. Find the potential at its surface and the field just outside it.", "a": "<i>V</i> = <i>kQ</i>/<i>R</i> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)/0.20 = 1.8 × 10<sup>5</sup> V. <i>E</i> = <i>kQ</i>/<i>R</i><sup>2</sup> = 36000/0.04 = 9 × 10<sup>5</sup> N C<sup>−1</sup>." },
            { "q": "[NEET] A point charge of +8 nC is placed inside a cavity of a neutral conductor. State the charge on the inner and outer surfaces.", "a": "Inner surface <b>−8 nC</b>, so that a Gaussian surface in the metal encloses zero. Outer surface <b>+8 nC</b>, because the conductor as a whole is still neutral." },
            { "q": "[JEE Main] The surface charge density on a large conductor is 2 × 10<sup>−6</sup> C m<sup>−2</sup>. Find the field just outside its surface.", "a": "<i>E</i> = σ/ε<sub>0</sub> = (2 × 10<sup>−6</sup>)/(8.85 × 10<sup>−12</sup>) ≈ 2.3 × 10<sup>5</sup> N C<sup>−1</sup>. Use σ/ε<sub>0</sub>, not σ/2ε<sub>0</sub>: this is a conductor, not a lone sheet." },
            { "q": "[JEE Main] Find the capacitance of an isolated conducting sphere of radius 0.09 m.", "a": "<i>C</i> = 4πε<sub>0</sub><i>R</i> = <i>R</i>/<i>k</i> = 0.09/(9 × 10<sup>9</sup>) = 1.0 × 10<sup>−11</sup> F = 10 pF. Note how tiny: a sphere the size of a cricket ball is ten picofarads, which is why a farad needs 113 square kilometres of plate." },
            { "q": "[JEE Advanced] A spherical capacitor has inner radius 0.10 m and outer radius 0.12 m with vacuum between. Find its capacitance, and compare it with the isolated sphere of the same inner radius.", "a": "<i>C</i> = <i>ab</i>/(<i>k</i>(<i>b</i> − <i>a</i>)) = (0.10)(0.12)/((9 × 10<sup>9</sup>)(0.02)) = 6.7 × 10<sup>−11</sup> F ≈ 67 pF. The isolated 0.10 m sphere alone would be <i>R</i>/<i>k</i> = 11 pF, so the nearby outer shell multiplies the capacitance by six, and it does so purely by shrinking the voltage for the same charge." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using σ/2ε<sub>0</sub> for a conductor's surface field.</b> That is the isolated-sheet result. A conductor gives σ/ε<sub>0</sub>, double, because the field is zero on the metal side and all the flux is forced out of one face.",
            "<b>Thinking the field merely weakens inside a conductor.</b> In equilibrium it is exactly zero in the material, not reduced. Anything else would keep the free electrons moving.",
            "<b>Reading <i>E</i> = 0 as <i>V</i> = 0.</b> A charged conductor has zero field inside and a perfectly definite non-zero potential throughout, equal to its surface value. This is Topic 01's trap in its most common disguise.",
            "<b>Forgetting the induced charges on a cavity.</b> A charge +<i>q</i> in a cavity always induces −<i>q</i> on the inner wall and, for a neutral conductor, +<i>q</i> on the outer surface. Skipping this corrupts every field and potential value that follows.",
            "<b>Assuming shielding works both ways.</b> A Faraday cage shields the inside from outside fields, but a charge inside the cavity IS detectable outside. Shielding is one-directional and exam questions test exactly that asymmetry."
          ]
        },
        {
          "t": "protip",
          "html": "treat any charged conductor as a single equipotential and let gauss's law carry the load: to find the charge in a region, draw a gaussian surface there and read off \"enclosed = 0\". for concentric shells memorise the one line that answers every part: a shell contributes kq over its OWN radius at points inside or on it, and kq over r at points outside it. and for the drop-coalescence questions that both jee main and neet reuse every year, remember that volume conservation gives R = n^(1/3) r and charge conservation gives Q = nq, so the big drop's potential is n^(2/3) times one small drop's and its energy is n^(5/3) times, which is n^(2/3) times the total of all n small ones. the energy goes UP on merging, and surface tension pays for it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>E</i> = 0 inside the material of a conductor", "note": "in equilibrium only; a current-carrying wire is a different story" },
            { "f": "all excess charge sits on the SURFACE", "note": "from Gauss on any interior surface: enclosed charge is zero" },
            { "f": "the whole conductor is one equipotential", "note": "so E = 0 with V non-zero, which is not a contradiction" },
            { "f": "<i>E</i> = σ/ε<sub>0</sub> just outside, perpendicular", "note": "double the σ/2ε₀ of a lone sheet, because one face is dead" },
            { "f": "cavity with +<i>q</i>: inner −<i>q</i>, outer +<i>q</i>", "note": "empty cavity in any external field gives E = 0: the Faraday cage" },
            { "f": "<i>C</i> = 4πε<sub>0</sub><i>R</i> and <i>C</i> = 4πε<sub>0</sub><i>ab</i>/(<i>b</i> − <i>a</i>)", "note": "b to infinity returns the isolated sphere; sigma piles up at sharp points" }
          ],
          "aids": [
            "\"inside a conductor nothing happens: E = 0, charge on the skin\"",
            "\"a conductor is one equipotential blob\"",
            "\"sigma over epsilon-nought outside a conductor, half that for a lone sheet\"",
            "\"the cage shields in, not out\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Combination of Capacitors",
      "chip": "05 NETWORKS",
      "kalam": "series shares charge, parallel shares voltage, and that is the whole topic",
      "blocks": [
        {
          "t": "p",
          "html": "A single capacitor rarely gives exactly the capacitance, or the voltage rating, that a circuit needs, so capacitors get wired together. There are two basic ways and they behave like opposites.<br><br><b>Series is a single-file queue.</b> Connect capacitors end to end so one charging path runs through all of them. Here is the physical fact everything else follows from: when the battery pushes +<i>Q</i> onto the first plate, that plate induces −<i>Q</i> on the plate facing it, and since the inner plates are connected to each other and isolated from everything else, the +<i>Q</i> they are left with is pushed onto the next capacitor, and so on down the chain. <b>Every capacitor in series carries the same charge <i>Q</i>.</b> The battery's voltage gets shared out: each takes a slice and the slices add to the total. Because each capacitor sees only a fraction of the voltage while holding the full charge, the combination stores that charge at a higher total voltage, which means <b>less</b> capacitance overall. Series capacitance always comes out below the smallest member, like joining pipes end to end and making the flow harder."
        },
        {
          "t": "p",
          "html": "<b>Parallel is side by side.</b> Connect all the left plates to one terminal and all the right plates to the other, straight across the battery. Now <b>every capacitor sees the same voltage <i>V</i></b>, because they are all clipped to the same two terminals, and each grabs as much charge as its own capacitance allows. The charges add.<br><br>The picture behind that is worth carrying: putting capacitors in parallel is effectively adding plate area, and area is what capacitance is made of. So parallel capacitance is the plain sum, always larger than the largest member, like widening a road. Two identical capacitors in parallel are one capacitor of twice the area; the same two in series are one capacitor of twice the gap. That is why the two rules pull in opposite directions."
        },
        {
          "t": "think",
          "html": "spot which quantity is SHARED and the rest follows without memorising anything. series shares charge, so the voltages add, so the reciprocals add, exactly like resistors in parallel. parallel shares voltage, so the charges add, so the capacitances add, exactly like resistors in series. capacitors are the mirror image of resistors, and if you remember one set of rules you get the other by swapping the words series and parallel."
        },
        {
          "t": "def",
          "term": "Where the series rule quietly assumes something",
          "html": "Three assumptions, and Advanced questions are built on breaking them. <b>One:</b> the same-charge rule needs the inner plates to start <b>uncharged and isolated</b>, which is true for a normal battery-charged chain and false if someone has pre-charged one capacitor or earthed a middle node. <b>Two:</b> the capacitors and wires are <b>ideal</b>, with no leakage and no resistance affecting the FINAL state. Resistance changes how long the settling takes and where the heat goes, never where the charge ends up. <b>Three:</b> for the common-potential results, the two capacitors are joined <b>like plate to like plate</b>, positive to positive. Join them positive to negative and the charges subtract instead of adding, and the whole arithmetic changes sign. And keep the two sanity checks permanently loaded: <b><i>C</i><sub>series</sub> is below the smallest member and <i>C</i><sub>parallel</sub> is above the largest</b>. If your answer violates either, you have swapped the formulas, and you have caught it in three seconds."
        },
        {
          "t": "defgrid",
          "title": "Series against parallel, side by side",
          "rows": [
            { "k": "Series, shared", "v": "the CHARGE <i>Q</i> is the same on every capacitor. The voltages add: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ..." },
            { "k": "Series, formula", "v": "1/<i>C</i><sub>s</sub> = Σ 1/<i>C</i><sub>i</sub>. For two, <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>). For <i>n</i> equal, <i>C</i>/<i>n</i>" },
            { "k": "Parallel, shared", "v": "the VOLTAGE <i>V</i> is the same across every capacitor. The charges add: <i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + ..." },
            { "k": "Parallel, formula", "v": "<i>C</i><sub>p</sub> = Σ <i>C</i><sub>i</sub>. For <i>n</i> equal, <i>nC</i>, so the two answers sit a factor of <i>n</i><sup>2</sup> apart" },
            { "k": "Sanity checks", "v": "<i>C</i><sub>s</sub> is below the SMALLEST member, <i>C</i><sub>p</sub> above the LARGEST. Both, every time" },
            { "k": "Mirror of resistors", "v": "capacitors add in parallel and reciprocally in series, which is resistors the other way round" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CAPACITORS IN SERIES",
          "tag": "same charge, added voltages",
          "main": "1/<i>C</i><sub>s</sub> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + ... + 1/<i>C</i><sub>n</sub><br>two only: <i>C</i><sub>s</sub> = <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)",
          "legend": [
            "<i>C</i><sub>1</sub> to <i>C</i><sub>n</sub> = the individual capacitances in farads (F), in practice μF or pF; <i>C</i><sub>s</sub> = the equivalent capacitance, same unit",
            "the charge <i>Q</i> in coulombs (C) is COMMON to all of them, and <i>V</i><sub>i</sub> = <i>Q</i>/<i>C</i><sub>i</sub> gives each one's share of the voltage in volts (V)",
            "for <i>n</i> equal capacitors of value <i>C</i>, the answer is simply <i>C</i>/<i>n</i>, with no arithmetic to do at all"
          ],
          "note": "The product-over-sum shortcut is for TWO capacitors only. Applying it to three at once is a standard slip; reduce two of them first, then combine the result with the third."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CAPACITORS IN PARALLEL",
          "tag": "same voltage, added charges",
          "main": "<i>C</i><sub>p</sub> = <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + ... + <i>C</i><sub>n</sub>",
          "legend": [
            "<i>C</i><sub>1</sub> to <i>C</i><sub>n</sub> = the individual capacitances in farads (F); <i>C</i><sub>p</sub> = the equivalent capacitance, same unit",
            "the voltage <i>V</i> in volts (V) is COMMON to all of them, and <i>Q</i><sub>i</sub> = <i>C</i><sub>i</sub><i>V</i> gives each one's share of the charge in coulombs (C)",
            "for <i>n</i> equal capacitors of value <i>C</i>, the answer is <i>nC</i>"
          ],
          "note": "The physical picture is added plate area, which is why the sum is plain and not reciprocal. A parallel bank is one big capacitor whose plates have been cut into pieces and wired back together."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURES 2.6 AND 2.7 · THE TWO WAYS TO WIRE THEM",
          "chips": ["series, one charge for all", "parallel, one voltage for all"],
          "captions": [
            "Figure 2.6. Three capacitors end to end in a single line across a battery of voltage V. The amber arrow on the bottom rail is the charge Q the battery pushes round, and there is only one path for it, so the SAME Q ends up on every capacitor in the chain. What differs is the voltage each one develops: V1 = Q/C1, V2 = Q/C2, V3 = Q/C3, and those three add up to V. The smallest capacitor takes the largest share of the voltage, which is why it is the one that breaks down first in a real circuit.",
            "Figure 2.7. The same three capacitors side by side, all left plates joined to one terminal and all right plates to the other. The solder dots mark the junctions where the branches split. Every capacitor is clipped across the same two terminals, so every one sees the full V, and each grabs its own charge Q1 = C1V, Q2 = C2V, Q3 = C3V. Those add up to the total the battery supplied. Same three components, opposite behaviour, decided entirely by how they were wired."
          ],
          "frames": [
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [1.8, 1] },
                  { "from": [4.2, 1], "to": [5.0, 1] },
                  { "from": [7.4, 1], "to": [8.2, 1] },
                  { "from": [10.6, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 5] },
                  { "from": [11, 5], "to": [1, 5] },
                  { "from": [1, 5], "to": [1, 3.6] },
                  { "from": [1, 2.4], "to": [1, 1] }
                ],
                "parts": [
                  { "at": [1.8, 1], "to": [4.2, 1], "kind": "C", "label": "C₁" },
                  { "at": [5.0, 1], "to": [7.4, 1], "kind": "C", "label": "C₂" },
                  { "at": [8.2, 1], "to": [10.6, 1], "kind": "C", "label": "C₃" },
                  { "at": [1, 3.6], "to": [1, 2.4], "kind": "battery", "label": "V" }
                ],
                "currents": [
                  { "at": [3.0, 5], "to": [5.0, 5], "label": "Q" }
                ]
              }
            },
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [8, 1] },
                  { "from": [1, 5], "to": [8, 5] },
                  { "from": [1, 1], "to": [1, 2.4] },
                  { "from": [1, 3.6], "to": [1, 5] },
                  { "from": [3, 1], "to": [3, 2.2] },
                  { "from": [3, 3.8], "to": [3, 5] },
                  { "from": [5.5, 1], "to": [5.5, 2.2] },
                  { "from": [5.5, 3.8], "to": [5.5, 5] },
                  { "from": [8, 1], "to": [8, 2.2] },
                  { "from": [8, 3.8], "to": [8, 5] }
                ],
                "parts": [
                  { "at": [1, 2.4], "to": [1, 3.6], "kind": "battery", "label": "V" },
                  { "at": [3, 2.2], "to": [3, 3.8], "kind": "C", "label": "C₁" },
                  { "at": [5.5, 2.2], "to": [5.5, 3.8], "kind": "C", "label": "C₂" },
                  { "at": [8, 2.2], "to": [8, 3.8], "kind": "C", "label": "C₃" }
                ],
                "nodes": [
                  { "at": [3, 1], "junction": true },
                  { "at": [5.5, 1], "junction": true },
                  { "at": [3, 5], "junction": true },
                  { "at": [5.5, 5], "junction": true }
                ]
              }
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY SERIES ADDS RECIPROCALS",
          "steps": [
            {
              "eq": "connect <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> end to end across a source of voltage <i>V</i>. The battery deposits +<i>Q</i> on the first plate and −<i>Q</i> on the last",
              "why": "Only the two outer plates are connected to the battery. Everything in between is an isolated island of metal, and that is what forces the next step."
            },
            {
              "eq": "by induction, every capacitor in the chain carries the same charge <i>Q</i>",
              "why": "Each isolated inner pair of plates started neutral and must stay neutral overall, so a −Q induced on one face leaves exactly +Q on the other. The charge is not shared out; it is repeated."
            },
            {
              "eq": "the voltages add: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub>, and each is <i>V</i><sub>i</sub> = <i>Q</i>/<i>C</i><sub>i</sub>. So <i>V</i> = <i>Q</i>(1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + 1/<i>C</i><sub>3</sub>)",
              "why": "Walking from one end of the chain to the other, you drop through each capacitor in turn, and potential differences along a path simply add. Q comes out as a common factor because it is the same in every term, which is the payoff of the previous step."
            },
            {
              "eq": "the equivalent capacitor holds the same <i>Q</i> at the same <i>V</i>, so <i>V</i> = <i>Q</i>/<i>C</i><sub>s</sub>. Comparing: 1/<i>C</i><sub>s</sub> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + 1/<i>C</i><sub>3</sub>",
              "why": "Because reciprocals are added, C_s comes out smaller than the smallest member: adding another capacitor in series can only add another positive term to the right-hand side and so can only make C_s smaller."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY PARALLEL ADDS DIRECTLY",
          "steps": [
            {
              "eq": "connect <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> side by side across the source, so each has the same voltage <i>V</i> across it",
              "why": "All the left plates are one conductor and all the right plates are another, and a conductor is one equipotential, which is Topic 04 doing the work here. So each capacitor sees the same two potentials."
            },
            {
              "eq": "each draws its own charge <i>Q</i><sub>i</sub> = <i>C</i><sub>i</sub><i>V</i>",
              "why": "The definition C = Q/V applied to each capacitor separately. Nothing is shared out: each one takes what its own capacitance dictates at the voltage it is given."
            },
            {
              "eq": "the battery supplies the total: <i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + <i>Q</i><sub>3</sub> = (<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>)<i>V</i>",
              "why": "Charge conservation at the junction: whatever leaves the terminal splits among the branches and the pieces must add back to the whole."
            },
            {
              "eq": "the equivalent capacitor holds that total at the same <i>V</i>, so <i>Q</i> = <i>C</i><sub>p</sub><i>V</i> and <i>C</i><sub>p</sub> = <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>",
              "why": "Capacitances add directly, so the parallel value exceeds the largest member. Physically this is just more plate area presented to the same voltage, which is exactly what C = ε₀A/d says capacitance is made of."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Capacitors of 2 μF, 3 μF and 6 μF are available. Find the equivalent capacitance when they are connected (a) all in series, (b) all in parallel.",
          "steps": [
            "(a) 1/<i>C</i><sub>s</sub> = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 1, so <i>C</i><sub>s</sub> = 1 μF. Take a common denominator rather than reaching for product-over-sum, which is a two-capacitor shortcut only.",
            "(b) <i>C</i><sub>p</sub> = 2 + 3 + 6 = 11 μF.",
            "Both sanity checks hold: 1 μF is below the smallest member, 2 μF, and 11 μF is above the largest, 6 μF.",
            "Notice the range: the same three components give anything from 1 μF to 11 μF depending only on the wiring, a factor of eleven."
          ],
          "ans": "<i>C</i><sub>s</sub> = 1 μF · <i>C</i><sub>p</sub> = 11 μF"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Four identical capacitors, each of 4 μF, are connected first all in series and then all in parallel. Find both equivalent capacitances.",
          "steps": [
            "The trap is adding the series values directly and writing 16 μF for both. For <i>n</i> EQUAL capacitors there is no arithmetic to do at all.",
            "<i>C</i><sub>series</sub> = <i>C</i>/<i>n</i> = 4/4 = 1 μF.",
            "<i>C</i><sub>parallel</sub> = <i>nC</i> = 4 × 4 = 16 μF.",
            "The two answers always sit a factor of <i>n</i><sup>2</sup> apart, here 16. That ratio is the fastest check available on an OMR sheet: if your two answers are not in the ratio <i>n</i><sup>2</sup>, one of them is wrong."
          ],
          "ans": "series 1 μF · parallel 16 μF, a factor of 16 apart"
        },
        {
          "t": "p",
          "html": "Real questions are rarely all-series or all-parallel. They are networks, and the way to survive one is to <b>reduce it in stages and redraw after each stage</b>. Find a pair that is unambiguously in series or unambiguously in parallel, replace it with its equivalent, draw the smaller circuit, and repeat until one capacitor is left. Then work backwards from the equivalent to recover the charge and voltage on each original component.<br><br>Working backwards is the half that carries the marks. Going forwards you only need the two formulas; coming back you need the two <b>shared</b> quantities. Down a series branch the charge is the same everywhere, so once you know the branch's charge you divide by each capacitance to get each voltage. Across a parallel bank the voltage is the same everywhere, so once you know the bank's voltage you multiply by each capacitance to get each charge. Every per-capacitor number in a network comes from one of those two sentences."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ENERGY OF A COMBINATION",
          "main": "<i>U</i> = Σ<sub>i</sub> ½ <i>C</i><sub>i</sub><i>V</i><sub>i</sub><sup>2</sup> = ½ <i>C</i><sub>eq</sub><i>V</i><sup>2</sup>",
          "legend": [
            "<i>C</i><sub>i</sub> = each capacitor in farads (F) with <i>V</i><sub>i</sub> = its OWN voltage in volts (V), which in a series branch is not the supply voltage",
            "<i>C</i><sub>eq</sub> = the equivalent capacitance of the whole network in farads (F), <i>V</i> = the supply voltage in volts (V)",
            "<i>U</i> = total stored energy in joules (J). The two routes must give the same number, which makes one of them a check on the other"
          ],
          "note": "Energies add whatever the wiring, because energy is energy. What does not add is the voltage in a series branch: using the supply voltage for every member of a chain is the fastest way to get an energy several times too large."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE · THE NETWORK THAT NEEDS BOTH RULES",
          "chips": ["a series pair, in parallel with a third"],
          "captions": [
            "C1 and C2 sit end to end in the upper branch, so they form a series pair carrying one common charge. C3 sits alone in the lower branch. Both branches run between the same two junction dots, A on the left and B on the right, so both see the full battery voltage. Reduce it in two moves: first collapse the series pair to C1C2 over C1 plus C2, then add that to C3 in parallel. Coming back, C3 has the whole supply voltage across it, while the series pair splits its share between C1 and C2 in inverse proportion to their capacitances, the smaller capacitor taking the larger slice."
          ],
          "frames": [
            {
              "aspect": 0.6,
              "circuit": {
                "grid": [12, 6],
                "wires": [
                  { "from": [1, 1], "to": [2.0, 1] },
                  { "from": [4.2, 1], "to": [5.4, 1] },
                  { "from": [7.6, 1], "to": [11, 1] },
                  { "from": [11, 1], "to": [11, 4.6] },
                  { "from": [1, 1], "to": [1, 4.6] },
                  { "from": [1, 3], "to": [3.6, 3] },
                  { "from": [5.8, 3], "to": [11, 3] },
                  { "from": [1, 4.6], "to": [4.0, 4.6] },
                  { "from": [6.6, 4.6], "to": [11, 4.6] }
                ],
                "parts": [
                  { "at": [2.0, 1], "to": [4.2, 1], "kind": "C", "label": "C₁" },
                  { "at": [5.4, 1], "to": [7.6, 1], "kind": "C", "label": "C₂" },
                  { "at": [3.6, 3], "to": [5.8, 3], "kind": "C", "label": "C₃" },
                  { "at": [4.0, 4.6], "to": [6.6, 4.6], "kind": "battery", "label": "12 V" }
                ],
                "nodes": [
                  { "at": [1, 3], "label": "A", "junction": true },
                  { "at": [11, 3], "label": "B", "junction": true }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reducing a capacitor network",
          "steps": [
            "<b>Find the two terminals</b> the equivalent capacitance is being asked between, and mark them. Every reduction has to preserve what happens between those two points and nothing else.",
            "<b>Look for an unambiguous pair.</b> Two capacitors are in SERIES only if the node between them connects to nothing else; they are in PARALLEL only if both their ends are common. If neither is clearly true, redraw before you compute.",
            "<b>Replace and redraw.</b> One reduction per redraw. Trying to collapse three stages in your head is how a correct method produces a wrong number.",
            "<b>Come back down for the per-capacitor values.</b> Series branch: one charge, <i>Q</i> = <i>C</i><sub>branch</sub><i>V</i><sub>branch</sub>, then <i>V</i><sub>i</sub> = <i>Q</i>/<i>C</i><sub>i</sub> for each member. Parallel bank: one voltage, then <i>Q</i><sub>i</sub> = <i>C</i><sub>i</sub><i>V</i> for each member.",
            "<b>Check the sums.</b> The individual voltages down a series branch must add back to the branch voltage, and the individual charges across a parallel bank must add back to the total. Two additions, and they catch almost every slip."
          ]
        },
        {
          "t": "p",
          "html": "There is a third situation the source flags and every exam reuses: <b>reconnecting two capacitors that are already charged</b>. Join them, like plate to like plate, and charge sloshes from the one at the higher potential to the one at the lower until they settle at a <b>common potential</b>. Total charge is conserved, because there is nowhere for it to go, so the common potential is just the total charge divided by the total capacitance.<br><br>What is NOT conserved is energy. Some is always lost, as heat in the connecting wires and a little as radiation, and the loss is unavoidable: it vanishes only in the trivial case where the two capacitors were already at the same voltage. This surprises students every year, so it is worth naming the reason. Charge conservation is a law. Energy conservation is also a law, but it counts ALL the energy, and the heat in the wire is part of the ledger. The stored electrostatic energy falls; the total does not."
        },
        {
          "t": "think",
          "html": "the same factor of a half you met when charging a capacitor is hiding here too. connect a charged capacitor to an uncharged identical one and each ends up with half the charge at half the voltage, so each stores a quarter of the original energy and the pair stores half. exactly half the energy has gone into heat, and no amount of thickening the wire saves any of it. charge is conserved, energy is not, and the wire always takes its cut."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COMMON POTENTIAL AND THE ENERGY LOST",
          "main": "<i>V</i><sub>c</sub> = (<i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)<br>Δ<i>U</i><sub>lost</sub> = ½ [<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)] (<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>",
          "legend": [
            "<i>C</i><sub>1</sub>, <i>C</i><sub>2</sub> = the two capacitances in farads (F); <i>V</i><sub>1</sub>, <i>V</i><sub>2</sub> = their voltages before connection, in volts (V)",
            "<i>Q</i><sub>1</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> in coulombs (C); <i>V</i><sub>c</sub> = the settled common potential in volts (V)",
            "Δ<i>U</i><sub>lost</sub> = the energy dissipated, in joules (J). The squared bracket makes it never negative, whichever capacitor was the higher one"
          ],
          "note": "Both results assume like plate joined to like plate. Join positive to negative and the charges subtract in the numerator, so the common potential can even come out zero. And the loss vanishes only when V1 = V2, which is the one case where no charge moves at all."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY RECONNECTING ALWAYS COSTS ENERGY",
          "steps": [
            {
              "eq": "two capacitors carry <i>Q</i><sub>1</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. Join them like to like. Charge is conserved and they settle at one common <i>V</i><sub>c</sub>",
              "why": "Nothing can leave the isolated pair, so the total charge before equals the total after. And they must end at a common potential, because two conductors joined by a wire are one conductor, which Topic 04 already established is a single equipotential."
            },
            {
              "eq": "<i>V</i><sub>c</sub> = (<i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)",
              "why": "The joined pair behaves as one capacitor of C₁ + C₂ holding the total charge, which is the parallel rule appearing without a battery anywhere in sight."
            },
            {
              "eq": "before: <i>U</i><sub>i</sub> = ½<i>C</i><sub>1</sub><i>V</i><sub>1</sub><sup>2</sup> + ½<i>C</i><sub>2</sub><i>V</i><sub>2</sub><sup>2</sup>. After: <i>U</i><sub>f</sub> = ½(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)<i>V</i><sub>c</sub><sup>2</sup>",
              "why": "Each capacitor stores ½CV² with its own voltage before, and the merged pair stores ½CV² with the common voltage after. Everything else is algebra."
            },
            {
              "eq": "subtracting and simplifying: Δ<i>U</i><sub>lost</sub> = <i>U</i><sub>i</sub> − <i>U</i><sub>f</sub> = ½ [<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)] (<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>",
              "why": "The result is a positive quantity times a square, so it can never be negative: energy always falls, never rises, and it falls by nothing only when V₁ = V₂, which is exactly the case where no charge moves. Notice the front factor is the SERIES combination of the two capacitances, which is a pleasant surprise from a parallel-looking problem."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Two charged capacitors, reconnected",
          "steps": [
            "<b>Check how they are joined.</b> Like plate to like plate is the standard case and the formulas below assume it. Positive to negative means the charges subtract.",
            "<b>Write both charges before, with signs.</b> <i>Q</i><sub>1</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub>. An uncharged capacitor contributes <i>Q</i> = 0 but still contributes its <i>C</i>.",
            "<b>Common potential is total charge over total capacitance.</b> <i>V</i><sub>c</sub> = (<i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>). It must lie BETWEEN <i>V</i><sub>1</sub> and <i>V</i><sub>2</sub>: if it does not, a sign has gone wrong.",
            "<b>Final charges are <i>C</i><sub>i</sub><i>V</i><sub>c</sub>.</b> Check they add back to the original total, which is the one conservation law you have here.",
            "<b>Compute the loss and expect it to be positive.</b> Either subtract the two energies directly, or use ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>. A negative loss means you have subtracted the wrong way round."
          ]
        },
        {
          "t": "defgrid",
          "title": "Four checks worth running on every network answer",
          "rows": [
            { "k": "Series bound", "v": "<i>C</i><sub>s</sub> must be less than the SMALLEST member. Adding one more in series can only reduce it further" },
            { "k": "Parallel bound", "v": "<i>C</i><sub>p</sub> must exceed the LARGEST member, and equal the plain sum" },
            { "k": "Voltages down a branch", "v": "must add back to the branch voltage, and the SMALLEST capacitor takes the LARGEST share" },
            { "k": "Charges across a bank", "v": "must add back to the total, and the LARGEST capacitor takes the LARGEST share" },
            { "k": "Energy, two ways", "v": "Σ ½<i>C</i><sub>i</sub><i>V</i><sub>i</sub><sup>2</sup> must equal ½<i>C</i><sub>eq</sub><i>V</i><sup>2</sup>" },
            { "k": "Reconnection", "v": "<i>V</i><sub>c</sub> lies between <i>V</i><sub>1</sub> and <i>V</i><sub>2</sub>, and Δ<i>U</i><sub>lost</sub> is never negative" }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "Capacitors <i>C</i><sub>1</sub> = 3 μF and <i>C</i><sub>2</sub> = 6 μF are in series, and this series pair is in parallel with <i>C</i><sub>3</sub> = 4 μF. The network is connected to a 12 V battery. Find (a) the equivalent capacitance, (b) the charge on <i>C</i><sub>3</sub>, (c) the voltages across <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub>.",
          "steps": [
            "(a) Series pair first, product over sum since there are exactly two: <i>C</i><sub>12</sub> = (3 × 6)/(3 + 6) = 2 μF, below the smaller member as it must be. Then in parallel with <i>C</i><sub>3</sub>: <i>C</i><sub>eq</sub> = 2 + 4 = 6 μF.",
            "(b) <i>C</i><sub>3</sub> is a branch straight across the battery, so it has the full 12 V: <i>Q</i><sub>3</sub> = (4 μF)(12 V) = 48 μC.",
            "(c) The series branch also has 12 V across it, so it carries <i>Q</i><sub>12</sub> = (2 μF)(12 V) = 24 μC, and that SAME charge sits on both <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub>.",
            "<i>V</i><sub>1</sub> = 24/3 = 8 V and <i>V</i><sub>2</sub> = 24/6 = 4 V. They add to 12 V, which checks out, and the smaller capacitor took the bigger slice, which is the rule worth remembering."
          ],
          "ans": "<i>C</i><sub>eq</sub> = 6 μF · <i>Q</i><sub>3</sub> = 48 μC · <i>V</i><sub>1</sub> = 8 V, <i>V</i><sub>2</sub> = 4 V"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN",
          "q": "For the same network as above, find the total energy stored, two different ways.",
          "steps": [
            "Route one, from the equivalent capacitor: <i>U</i> = ½<i>C</i><sub>eq</sub><i>V</i><sup>2</sup> = ½(6 × 10<sup>−6</sup>)(12)<sup>2</sup> = ½(6 × 10<sup>−6</sup>)(144) = 4.32 × 10<sup>−4</sup> J.",
            "Route two, capacitor by capacitor. <i>C</i><sub>3</sub>: ½(4 × 10<sup>−6</sup>)(12)<sup>2</sup> = 2.88 × 10<sup>−4</sup> J. <i>C</i><sub>1</sub>: ½(3 × 10<sup>−6</sup>)(8)<sup>2</sup> = 0.96 × 10<sup>−4</sup> J. <i>C</i><sub>2</sub>: ½(6 × 10<sup>−6</sup>)(4)<sup>2</sup> = 0.48 × 10<sup>−4</sup> J.",
            "Sum: (2.88 + 0.96 + 0.48) × 10<sup>−4</sup> = 4.32 × 10<sup>−4</sup> J. The two routes agree.",
            "Note the trap the check catches. Had you used 12 V for <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub> as well, you would get (2.88 + 2.16 + 4.32) × 10<sup>−4</sup> = 9.36 × 10<sup>−4</sup> J, more than twice the truth, and the disagreement between the two routes would tell you so instantly."
          ],
          "ans": "<i>U</i> = 4.32 × 10<sup>−4</sup> J = 0.432 mJ, by both routes"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A 4 μF capacitor charged to 100 V is connected, positive plate to positive plate, across a 6 μF capacitor charged to 50 V. Find (a) the common potential, (b) the final charge on each, (c) the energy lost.",
          "steps": [
            "(a) Charge is conserved: <i>V</i><sub>c</sub> = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = (4 × 100 + 6 × 50)/(4 + 6) = (400 + 300)/10 = 70 V. It lies between 50 and 100, as it must.",
            "(b) <i>Q</i><sub>1</sub> = (4 μF)(70 V) = 280 μC and <i>Q</i><sub>2</sub> = (6 μF)(70 V) = 420 μC. Total 700 μC, which matches the original 400 + 300 μC.",
            "(c) Δ<i>U</i> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup> = ½(24/10 × 10<sup>−6</sup>)(50)<sup>2</sup> = ½(2.4 × 10<sup>−6</sup>)(2500) = 3 × 10<sup>−3</sup> J.",
            "Cross-check by subtracting the energies directly: before, ½(4)(100)<sup>2</sup> + ½(6)(50)<sup>2</sup> = (20000 + 7500) μJ = 27.5 mJ. After, ½(10)(70)<sup>2</sup> = 24.5 mJ. Difference 3 mJ. Agrees, and it is positive, as an energy LOSS has to be."
          ],
          "ans": "<i>V</i><sub>c</sub> = 70 V · 280 μC and 420 μC · 3 mJ lost as heat"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED",
          "q": "A capacitor of 2 μF charged to 200 V is connected across an identical UNCHARGED 2 μF capacitor. Find the common potential, the final energy, and the fraction of the original energy lost.",
          "steps": [
            "Charge conserved: <i>Q</i> = (2 μF)(200 V) = 400 μC, and it now sits on a total capacitance of 4 μF, so <i>V</i><sub>c</sub> = 400/4 = 100 V, exactly half.",
            "Energy before: ½(2 × 10<sup>−6</sup>)(200)<sup>2</sup> = 0.040 J. Energy after: ½(4 × 10<sup>−6</sup>)(100)<sup>2</sup> = 0.020 J.",
            "So exactly half the energy has gone, 0.020 J of it, into heat in the connecting wire. Check with the formula: ½[(2)(2)/4 × 10<sup>−6</sup>](200)<sup>2</sup> = ½(10<sup>−6</sup>)(40000) = 0.020 J. Agrees.",
            "The fraction is exactly one half for two IDENTICAL capacitors, one of them uncharged, and it does not depend on the resistance of the wire at all. That is the same resistance-independent half you met when charging a capacitor from a battery, and it is not a coincidence: both are charge moving through a voltage difference that is not zero."
          ],
          "ans": "<i>V</i><sub>c</sub> = 100 V · <i>U</i><sub>f</sub> = 0.020 J · exactly half the energy is lost"
        },
        {
          "t": "mcq",
          "q": "When capacitors are connected in series, the equivalent capacitance is:",
          "opts": [
            { "label": "larger than the largest member", "nudge": "That is the parallel result. Adding reciprocals can only produce a value below every member, never above any of them." },
            { "label": "smaller than the smallest member", "nudge": null },
            { "label": "the average of the values", "nudge": "There is no averaging anywhere in the derivation. The result is a reciprocal sum, and for 2 μF and 6 μF it gives 1.5 μF, not the average of 4 μF." },
            { "label": "the sum of the values", "nudge": "This is the PARALLEL rule, the most common mix-up in the topic. Anchor it with the shared quantity instead: series shares charge, and shared charge makes voltages add, which makes reciprocals add." }
          ],
          "correct": 1,
          "solution": "1/C_s is a sum of positive terms, one per capacitor, so 1/C_s is larger than any single 1/C_i and C_s is therefore smaller than every C_i. Adding one more capacitor in series can only push it lower still."
        },
        {
          "t": "mcq",
          "q": "Three capacitors are connected in series across a battery. Which quantity is the same for all three?",
          "opts": [
            { "label": "the voltage across each", "nudge": "That is the PARALLEL property. In series the voltage is precisely what gets shared out, and the smallest capacitor takes the largest slice." },
            { "label": "the charge on each", "nudge": null },
            { "label": "the energy in each", "nudge": "Each stores Q²/2C_i with a common Q, so the energies differ unless the capacitances happen to be equal. The smallest capacitor stores the most." },
            { "label": "the capacitance of each", "nudge": "The question gives you three capacitors, not three equal ones. Nothing about wiring them in series changes what they individually are." }
          ],
          "correct": 1,
          "solution": "The inner plates form isolated islands that started neutral, so a −Q induced on one face leaves exactly +Q on the other, all the way down the chain. Charge is repeated, not shared; voltage is what gets shared."
        },
        {
          "t": "mcq",
          "q": "Capacitors in parallel across a source all share the same:",
          "opts": [
            { "label": "charge", "nudge": "This is the SERIES property, and it is the classic inversion. Across a parallel bank each capacitor takes its own charge Q_i = C_iV, and they differ." },
            { "label": "voltage", "nudge": null },
            { "label": "energy", "nudge": "Each stores ½C_iV² with a common V, so the energies are in the ratio of the capacitances and are equal only if the capacitors are." },
            { "label": "reciprocal capacitance", "nudge": "Reciprocals belong to the series formula, and even there they are added, not shared. Nothing in a parallel bank is reciprocal." }
          ],
          "correct": 1,
          "solution": "Every parallel capacitor is clipped across the same two terminals, and each terminal is a conductor, which Topic 04 established is a single equipotential. So every capacitor sees the same potential difference, and the charges differ according to Q_i = C_iV."
        },
        {
          "t": "mcq",
          "q": "Two capacitors charged to different potentials are connected together, like plate to like plate. Compared with before, the total stored energy:",
          "opts": [
            { "label": "increases", "nudge": "Nothing supplies energy here. There is no battery in the picture, so the stored energy cannot grow, and the algebra gives a loss that is a positive constant times a square." },
            { "label": "stays the same", "nudge": "The seductive conservation trap. CHARGE is conserved because it has nowhere to go; ENERGY is conserved too, but only when you count the heat in the wire, which is not stored energy." },
            { "label": "decreases", "nudge": null },
            { "label": "becomes zero", "nudge": "That would need all the charge to vanish, and charge is conserved. The pair ends at a common potential that lies between the two original ones, so it still stores something." }
          ],
          "correct": 2,
          "solution": "ΔU_lost = ½[C₁C₂/(C₁ + C₂)](V₁ − V₂)², a positive quantity times a square, so it is never negative and is zero only when the two voltages were already equal. The energy goes to heat in the wires and a little radiation, and remarkably the amount does not depend on the resistance."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Capacitors of 4 μF and 12 μF are connected (a) in series and (b) in parallel. Find each equivalent capacitance.", "a": "(a) Product over sum: (4 × 12)/16 = <b>3 μF</b>, below the smaller. (b) 4 + 12 = <b>16 μF</b>, above the larger. Both checks hold." },
            { "q": "[NEET] Three identical 9 μF capacitors are connected all in series, then all in parallel. Find both equivalent capacitances.", "a": "Series <i>C</i>/<i>n</i> = 9/3 = <b>3 μF</b>. Parallel <i>nC</i> = 27 μF. The ratio is <i>n</i><sup>2</sup> = 9, as it always is for equal capacitors." },
            { "q": "[JEE Main] Capacitors of 2 μF and 4 μF are in series across a 6 V battery. Find the equivalent capacitance, the charge on each, and the voltage across each.", "a": "<i>C</i><sub>eq</sub> = (2 × 4)/6 = 4/3 μF. <i>Q</i> = (4/3)(6) = <b>8 μC on each</b>, series meaning one common charge. Then <i>V</i> across 2 μF = 8/2 = 4 V and across 4 μF = 8/4 = 2 V, adding back to 6 V." },
            { "q": "[JEE Main] Capacitors of 5 μF, 10 μF and 15 μF are connected in parallel across 20 V. Find the total charge and the charge on the 10 μF capacitor.", "a": "<i>C</i><sub>p</sub> = 30 μF, so total <i>Q</i> = (30 μF)(20 V) = <b>600 μC</b>. On the 10 μF alone: <i>Q</i> = (10 μF)(20 V) = 200 μC, one third of the total, which is its share of the capacitance." },
            { "q": "[JEE Advanced] A 2 μF capacitor charged to 200 V is connected across an uncharged 3 μF capacitor. Find the common potential and the energy lost.", "a": "<i>V</i><sub>c</sub> = (2 × 200 + 0)/(2 + 3) = <b>80 V</b>. Δ<i>U</i> = ½[(2)(3)/5 × 10<sup>−6</sup>](200 − 0)<sup>2</sup> = ½(1.2 × 10<sup>−6</sup>)(40000) = <b>0.024 J</b> = 24 mJ. Check: before ½(2 × 10<sup>−6</sup>)(200)<sup>2</sup> = 40 mJ, after ½(5 × 10<sup>−6</sup>)(80)<sup>2</sup> = 16 mJ, difference 24 mJ. Agrees." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Swapping the series and parallel formulas.</b> Capacitors are the OPPOSITE of resistors: they add in parallel and add reciprocally in series. Anchor it with the shared quantity rather than the formula, because the shared quantity you can reason out and the formula you can only remember.",
            "<b>Forgetting which quantity is shared when you come back down.</b> Same charge in series, same voltage in parallel. This is what lets you find the voltage or charge on an INDIVIDUAL capacitor inside a network, and getting it backwards makes every per-component number wrong even when the equivalent capacitance is right.",
            "<b>Using the supply voltage for every capacitor in a series branch.</b> Each member gets only its own share, <i>V</i><sub>i</sub> = <i>Q</i>/<i>C</i><sub>i</sub>. Using the full supply voltage in ½<i>CV</i><sup>2</sup> for each one gives an energy several times too large, and comparing with ½<i>C</i><sub>eq</sub><i>V</i><sup>2</sup> catches it immediately.",
            "<b>Applying the product-over-sum shortcut to three capacitors.</b> It is derived for exactly two. With three, reduce a pair first and then combine, or take a common denominator of the reciprocals.",
            "<b>Assuming energy is conserved on reconnection.</b> Only charge is. There is always a loss unless the two voltages were already equal, and the loss does not depend on the resistance of the wire, so making the wire thicker saves none of it."
          ]
        },
        {
          "t": "protip",
          "html": "reduce in stages and redraw after every one, and label the charge or voltage you know at each node as you go. for two capacitors memorise product over sum, it is far faster than reciprocals under exam pressure, and for n equal ones jump straight to C/n and nC. two more lines worth carrying into the hall. in a series chain the SMALLEST capacitor takes the LARGEST voltage, so it is the one that breaks down first in a real circuit and the one an examiner asks about. and any question that says two charged capacitors are joined is really asking two things at once: what is conserved (charge, always) and what is not (energy, always), so write both sentences down before you write a number."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "series: 1/<i>C</i><sub>s</sub> = Σ 1/<i>C</i><sub>i</sub>, two only <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)", "note": "same charge on each, voltages add, and C_s is below the smallest" },
            { "f": "parallel: <i>C</i><sub>p</sub> = Σ <i>C</i><sub>i</sub>", "note": "same voltage across each, charges add, and C_p is above the largest" },
            { "f": "<i>n</i> equal: <i>C</i>/<i>n</i> in series, <i>nC</i> in parallel", "note": "the two sit a factor of n² apart, which is a one-glance check" },
            { "f": "<i>V</i><sub>c</sub> = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)", "note": "charge conserved; V_c must land between V₁ and V₂" },
            { "f": "Δ<i>U</i><sub>lost</sub> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>", "note": "never negative; zero only when the two voltages already matched" },
            { "f": "<i>U</i> = Σ ½<i>C</i><sub>i</sub><i>V</i><sub>i</sub><sup>2</sup> = ½<i>C</i><sub>eq</sub><i>V</i><sup>2</sup>", "note": "two routes to the same number, so each one checks the other" }
          ],
          "aids": [
            "\"series shares charge, parallel shares voltage\"",
            "\"capacitors are upside-down resistors\"",
            "\"series below the smallest, parallel above the largest\"",
            "\"reconnect and charge is conserved, energy is not\""
          ]
        }
      ]
    }
  ]
};

export default phy12PotentialCapacitance;
