/**
 * Chapter 01 · Electric Charges and Fields. Physics, Class 12.
 *
 * Restructured from pages 8 to 79 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-09-mech-fluids.ts. This is the first Class 12 physics chapter.
 *
 * FIVE TOPICS FROM FIVE SOURCE SUBTOPICS, AND NOTHING WAS MERGED. The source
 * names exactly five: 1 Electric Charge: Properties, Quantisation & Charging,
 * 2 Coulomb's Law and Electric Forces, 3 Electric Field and Dipoles,
 * 4 Continuous Charge Distribution, 5 Electric Flux and Gauss's Law. Five sits
 * inside the reader's own gate (scripts/validate-chapters.mjs, line 89, four to
 * six), so no merge was needed and none was made. Nothing was split either.
 *
 * A NOTE ON FINDING THAT STRUCTURE, because a keyword search does not. The word
 * "Subtopic" appears nowhere in pages 8 to 79: this chapter heads its sections
 * "1 · Electric Charge...", "2 · Coulomb's Law..." and so on, and the running
 * head is the bare chapter title. The structure above was read off the printed
 * Contents (source page 2) and the chapter's own front matter (source page 8),
 * both of which list the five and their start pages, 9, 15, 27, 39 and 48.
 * Later chapters of this same book DO use the "Subtopic 01" form, so the
 * absence here is this chapter's house style, not damage.
 *
 * THE ROUND 2 ADDENDUM (pages 60 to 79: Supplement, then Addendum A Continuous
 * Distributions Beyond Ring, Disc, Arc; B Conductors, Boundary Conditions,
 * Pressure, Images; C Dipoles in Non-Uniform Fields and Dipole-Dipole
 * Interaction; D Gauss's Law Advanced; E Electrostatic Energy Density,
 * Self-Energy and Pressure; F JEE Advanced Problem Patterns) IS NOT A TOPIC,
 * per the brief. Every line drawn from it below sits in a `protip`, a
 * `mistakes` item, a practice item or the hardest `ex` in its group: A's
 * finite-line result into Topic 04's practice item 5 and A's arbitrary-arc
 * result into the closing line of Topic 04's arc derivation, A's cavity
 * superposition into Topic 05's protip, B's conductor boundary condition into
 * Topic 05's factor-of-two material, and C's force on a dipole in a non-uniform
 * field into Topic 03's hardest example (the main body already states
 * F = p dE/dr, so that is reinforcement rather than new matter). ADDENDA D AND
 * E SUPPLY NOTHING AT ALL. D's coaxial cables, finite slabs and conductor
 * cavities sit outside what this chapter teaches, and the non-uniform-density
 * example Topic 05 uses is the MAIN BODY's own Subtopic 5 Example 4 rather than
 * D's restatement of it; E is entirely electrostatic energy, which the
 * Contents places in Chapter 02. No `formula`, `defgrid`, `deriv` or `proc`
 * block below is sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 924 to 925, in full). It carries exactly two
 * entries, "Chapter 7: Alternating Current, page 14, Practice Exercise 5, the
 * data contradict themselves" and "Chapter 10: Wave Optics, page 33, thin-film
 * interference, the dark and bright conditions are swapped". NEITHER TOUCHES
 * PAGES 8 TO 79, and no entry anywhere in the errata names Chapter 1. The
 * errata's own preamble says the fixable class of defect (wrong printed
 * answers, leaked pipeline notes, raw markup) was corrected in place and is not
 * repeated in the list; the corrections below are the ones that survived that
 * pass in this chapter.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 8 to 79 was recomputed independently, all five subtopics and all
 * six addenda. The MAIN BODY (pages 8 to 59) is almost clean: exactly one
 * printed result disagrees with an independent recomputation, and it is a
 * dimensional error rather than an arithmetic one. The ROUND 2 ADDENDUM is
 * where the errors are, as the brief warned, FIVE of them against that one:
 *
 *   1. MAIN BODY, Subtopic 4, Practice 4 (page 45): "A ring of radius R carries
 *      charge Q. At what axial distance is the field maximum, and what is that
 *      maximum field?" The printed answer is
 *      E_max = [1/(4 pi eps0)] · 2Q/(3 sqrt3 · 4 pi eps0 R^2), which carries
 *      4 pi eps0 TWICE and is therefore not even a field dimensionally: it
 *      reduces to [M L T-3 A-1] × [M-1 L-3 T4 A2]^-1, off by a whole factor of
 *      1/(4 pi eps0). Working: E(x) = kQx/(x^2 + R^2)^(3/2), maximum at
 *      x = R/sqrt2 (the printed position, which is right and matches the
 *      chapter's own Example 4). There x^2 + R^2 = 3R^2/2, so
 *      (x^2 + R^2)^(3/2) = (3/2)^(3/2) R^3 = 1.8371 R^3 and
 *      E_max = kQ(R/sqrt2)/(1.8371 R^3) = kQ/(2.598 R^2). Since
 *      1/2.598 = 0.3849 = 2/(3 sqrt3), the CORRECT ANSWER is
 *      E_max = 2kQ/(3 sqrt3 R^2) = 0.385 kQ/R^2, with exactly one 1/(4 pi eps0)
 *      in it. Topic 04 below carries the corrected form in its `ex` group, in
 *      its snapshot, and as the labelled peak of its own ring-axis figure.
 *   2. ADDENDUM A, Example A.1 (page 62): finite rod, L = 0.40 m,
 *      lambda = 2.0 microC/m, field on the perpendicular bisector at
 *      d = 0.30 m. The formula derived, E = 2k lambda L/(d sqrt(L^2 + 4d^2)),
 *      is correct and agrees with the main body's own Subtopic 4 Practice 5.
 *      The arithmetic that follows is not. Printed:
 *      "2(9 × 10^9)(2 × 10^-6) = 72 × 10^3". That product is 36 × 10^3; 72 is
 *      what FOUR times 9 × 10^9 × 2 × 10^-6 would give. Every later line
 *      inherits the doubling, so the printed answer 1.33 × 10^5 N/C is exactly
 *      twice the truth. Working: 2k lambda = 3.6 × 10^4;
 *      L/(d sqrt(L^2 + 4d^2)) = 0.40/(0.30 × sqrt(0.52)) = 0.40/0.21633
 *      = 1.849; E = 3.6 × 10^4 × 1.849 = 6.66 × 10^4 N/C. Cross-checked against
 *      the main body's equivalent form k lambda L/(d sqrt(d^2 + L^2/4))
 *      = 7200/0.108167 = 6.66 × 10^4 N/C, same number by a different route.
 *      CORRECT ANSWER 6.7 × 10^4 N/C. Topic 04's practice item 5 poses this
 *      geometry with its own numbers and its own recomputed answer.
 *   3. ADDENDUM E, Practice 2 (page 75): "A solid sphere of radius R has charge
 *      Q distributed uniformly. Find the energy stored in the field inside the
 *      sphere and outside. Ratio?" Printed: U_in = (1/5) kQ^2/R
 *      = Q^2/(20 pi eps0 R), U_out = (1/2) kQ^2/R, ratio 2 : 5. U_out is right;
 *      U_in is not, and it contradicts the SAME ADDENDUM'S OWN Method section
 *      four pages earlier (page 73), which derives U_in = Q^2/(40 pi eps0 R).
 *      Working: E_in = Qr/(4 pi eps0 R^3), so u = eps0 E^2/2
 *      = Q^2 r^2/(32 pi^2 eps0 R^6) and
 *      U_in = INT 0..R u · 4 pi r^2 dr = Q^2/(8 pi eps0 R^6) · R^5/5
 *      = Q^2/(40 pi eps0 R) = (1/10) kQ^2/R. CORRECT ANSWER
 *      U_in = (1/10) kQ^2/R, ratio U_in : U_out = 1 : 5. The decisive check is
 *      the total: the printed pair sums to (1/5 + 1/2) = 7/10 of kQ^2/R, while
 *      the self-energy of a uniformly charged sphere is (3/5) kQ^2/R, which
 *      the addendum states correctly on the same page. The corrected pair,
 *      1/10 + 1/2 = 3/5, lands on it exactly.
 *   4. ADDENDUM F, Example F.1 (page 77): spring-block-charge equilibrium,
 *      m = 0.50 kg, q = +10 microC, k = 100 N/m, Q = +20 microC at 0.30 m.
 *      The equilibrium condition 100 x0 = 1.8/(x0 + 0.30)^2 is set up
 *      correctly, and the two trial values printed (x0 = 0.10 gives 10 against
 *      11.25; x0 = 0.12 gives 12 against 10.20) bracket the root. The printed
 *      refinement, "Better: x0 = 0.112 m", does not solve it: at 0.112 the left
 *      side is 11.2 and the right is 1.8/0.169744 = 10.60. Working: solve
 *      100x(x + 0.3)^2 = 1.8. At x = 0.108, 10.8 × 0.166464 = 1.7978; at
 *      x = 0.1081, 10.81 × 0.166546 = 1.8004. CORRECT ANSWER x0 = 0.108 m,
 *      which is also what linear interpolation between the book's own two
 *      trials gives. Carrying it through the book's own frequency formula,
 *      omega^2 = (k/m)(1 + 2x0/(x0 + d)) = 200(1 + 0.216/0.408) = 305.9, so
 *      omega = 17.5 rad/s and T = 0.36 s, against the printed 17.6 rad/s.
 *   5. ADDENDUM A, Example A.2 (page 63), a SIGN rather than a number. The
 *      hemispherical shell's field at the centre of its base is derived
 *      correctly, E = sigma/(4 eps0), but the direction sentence contradicts
 *      the addendum's own standard-results table on the facing page. The table
 *      says "perpendicular to base, away from shell", which is right: a
 *      positive shell pushes a positive test charge away from itself, out
 *      through the base plane. The example's closing line says the opposite,
 *      "from the centre of the base toward the shell... for sigma > 0, field
 *      points into the hemispherical cavity". Its own working gives the correct
 *      answer: the vector from a source ON the shell to the field point AT the
 *      centre points radially inward, which for the UPPER hemisphere means
 *      downward, which is away from the shell. CORRECT DIRECTION: away from the
 *      shell, along the symmetry axis, through the base plane.
 *   6. ADDENDUM F, Practice 2 (page 78) states a magnitude where a sign is the
 *      whole content: three charges q on a ring with Q at the centre, "the
 *      condition on Q/q", answered "Q = q/sqrt3". For the central charge to
 *      pull the ring charges INWARD against their own mutual repulsion, Q must
 *      carry the OPPOSITE sign to q. The magnitude q/sqrt3 is right (the
 *      mutual repulsion on one charge is kq^2/(sqrt3 R^2) outward, balanced by
 *      kqQ/R^2 inward), so the correction is Q = -q/sqrt3.
 *
 *   None of items 2 to 6 reaches a student through this chapter: all five sit
 *   in the addendum, which is not a topic. Item 1 does, and it is corrected
 *   everywhere it appears below.
 *
 * SOURCE DAMAGE, checked rather than assumed. This is a different book from the
 * Class 11 reference, and its range behaves differently from every dialect the
 * brief listed. What pages 8 to 79 actually have:
 *
 *   - GREEK AND ITALIC SURVIVE, AS MATHEMATICAL ALPHANUMERIC (U+1D400 to
 *     U+1D7FF), which the app's faces cannot draw and the validator rejects:
 *     5,447 instances across 51 distinct glyphs. The heaviest are math-italic
 *     r (486), d (426), E (418), R (403), q (392), Q (356), epsilon (345), pi
 *     (278), x (235), k (188), p (176), sigma (152), F (151), theta (133),
 *     lambda (127) and rho (103). Copying any run of source symbol text
 *     verbatim would have shipped a page of blank boxes. Every symbol below is
 *     retyped as an ordinary character inside <i> tags, every Greek letter as
 *     its plain Unicode form.
 *   - VECTORS ARRIVE AS U+20D7, the combining arrow above, 323 times. The
 *     validator rejects it outright. Every vector below is a plain italic
 *     letter and every unit vector is a real circumflex: î, ĵ, k̂, and r̂ where
 *     the source wrote r-hat.
 *   - THE ESCAPED-TOKEN FAMILY IS HERE, in seven flavours rather than the five
 *     the brief predicted, and the mapping differs from the Class 11 book on
 *     one member. Confirmed by reading each instance in context: "\n7" is a
 *     minus sign (38 instances, e.g. page 29's "E_+ \n7 E_\n7" is E+ minus E-,
 *     and page 21's "(1/d \n71/(d + L))"); "\nN" is the times sign (20, e.g.
 *     page 19's "(9 \nN 10 9)" is 9 × 10^9, and page 29's
 *     "tau = p \nN E" is the CROSS product); "\nA" is a centred dot (16, and it
 *     is doing two different jobs, ordinary multiplication in "k q lambda \nA
 *     L/(d(d+L))" on page 21 and the DOT product in "U = \n7 p \nA E" on page
 *     29, which the surrounding prose disambiguates); "\nC" is the ratio colon
 *     (1, page 23's "1 \nC 1"); "\nK" is the degree sign (2, both in Subtopic
 *     5's flux practice item, "0 \nK" and "60 \nK"); "\no" is the parallel sign
 *     (1, page 29's "p \no E"); "\nH" is a midline ellipsis (1, page 18's
 *     superposition sum). Note that "\nN" here is TIMES, the same as the Class
 *     11 book, but "\nA" carries the dot product as well as plain
 *     multiplication, which the Class 11 book did not.
 *   - DEGREES ARE U+2218 RING OPERATOR, NOT U+00B0. All 38 angle marks in the
 *     range ("60 ∘", "90 ∘", "180 ∘") use the composition operator, and there
 *     is not a single real degree sign anywhere in pages 8 to 79. Every angle
 *     below is retyped with ° (U+00B0).
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     power of ten (10, newline, −19), every dimensional formula
 *     ([M L 3 T −4 A −2]), every subscripted charge (q, newline, 1) and every
 *     exponent in a denominator ((x 2 + R 2) 3/2) breaks apart. Recomputing
 *     every worked example independently (see CORRECTIONS above) was the check
 *     that these were rebuilt correctly.
 *   - INTER-WORD SPACES VANISH at tight kerning, throughout. Instances actually
 *     used or paraphrased below: "the conceptual bedrock of the whole
 *     chapter.CBSE" (p.9), "conductors vs insulators" run into
 *     "Coulomb's-lawcalculation" (p.9), "charging an object simply
 *     meanstransferring electrons" (p.9), "no new charge is ever created, it is
 *     only moved around" broken as "movedaround" (p.9), "the rod never loses
 *     any charge(no contact)" (p.11), "they reveal the two foundational facts"
 *     run together as "andlike charges repel" (p.9), "the force falls off as
 *     the square of the distance" as "it'sfar weakerthan half-strength"
 *     (p.15), "ordinary matter is almost perfectly neutral" as
 *     "neutral- every object" (p.16), "a charge modifies the space around
 *     it" as "it sets up anelectric fieldeverywhere" (p.27), "the perpendicular
 *     components cancel, while the components along the axis add" as
 *     "cancel, while thecomponents along the axis add" (p.31), "we stop
 *     counting individuals and start describing a density" as "start describing
 *     adensity" (p.39), and "this total outward flux doesn't care about the
 *     shape" as "It depends onone thing only" (p.48).
 *   - NO ASCII-SHIFTED HEADING RUN INSIDE THE RANGE. The +29 shift the brief
 *     warned about is real in this book, but every instance sits on the
 *     CONTENTS page (source page 2), where "$GGHQGXP$" is "Addendum A" and
 *     "6XEWRSLF" is "Subtopic", and on the contents pages of other chapters.
 *     Inside pages 8 to 79 there is not one shifted line: a full scan for runs
 *     whose characters lie in the shifted band found only the extractor's own
 *     "===== PAGE n =====" markers. Page numbers were still read from the page
 *     foot, as instructed.
 *   - NO OCTAL ESCAPES. Zero matches for the \\050 family anywhere in the range.
 *   - LEAKED DRAFTING NOTES, one long run. Addendum A's Example A.2 (page 62)
 *     prints its author's thinking aloud in the finished book: "directed along
 *     axis toward the ring (since ring is positively charged, field at centre
 *     of curvature points toward it? Wait, field point is at centre of
 *     sphere... Let's be careful... Actually simpler... That argument fails...
 *     Let's integrate properly." It is followed by a correct integration, and
 *     by the wrong direction sentence recorded as correction 5 above. A second,
 *     shorter leak sits on page 46, where an orphaned fragment of Subtopic 4's
 *     practice answer, "Q(R/sqrt2)/ (3/2) 3 / 2 R 3 =", is printed loose in the
 *     middle of the Pitfalls section. Nothing from either run was transcribed.
 *
 * SIGNS, DECLARED ONCE AND HELD. Topic 01's `def` block fixes the convention
 * for the whole chapter and every later topic obeys it: like charges repel and
 * unlike attract; the electric field points AWAY from a positive charge and
 * TOWARD a negative one; a field line starts on positive charge and ends on
 * negative charge and NEVER begins or ends in empty space; the dipole moment
 * points from the negative charge to the positive one; and a charge substituted
 * into a vector formula carries its own sign, so the algebra decides attraction
 * or repulsion without a separate case. This is where the marks go in this
 * chapter, and it earns a `mistakes` item in Topic 01, another in Topic 03, and
 * is the trap behind Topic 03's fourth MCQ.
 *
 * CONSTANTS, FIXED FOR EVERY CLASS 12 ELECTROSTATICS CHAPTER. k = 1/(4πε₀)
 * = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>, ε₀ = 8.854 × 10⁻¹²
 * C²/N m², e = 1.6 × 10⁻¹⁹ C, c = 3 × 10⁸ m/s, mass of the electron
 * 9.11 × 10⁻³¹ kg. Where a question supplies its own value, the block below
 * says which form it is using: the two places this matters are Topic 05's cube
 * example, which needs ε₀ = 8.854 × 10⁻¹² rather than k, and Topic 04's disc
 * example, whose σ = 8.85 × 10⁻⁷ C/m² is chosen by the source precisely so that
 * σ/2ε₀ comes out at a round 5.0 × 10⁴ N/C.
 *
 * DIMENSIONS. Every formula printed below, reduced. CHARGE NEEDS ITS OWN
 * DIMENSION, so the whole ledger works in M L T A, with the ampere as the
 * fourth base quantity and charge as [A T]; there is no way to reduce charge to
 * mass, length and time, and a three-dimension ledger would silently make ε₀
 * dimensionless. Thirty-eight reductions, thirty-eight consistent as printed
 * below, and exactly ONE printed source formula rejected on dimensional grounds
 * alone: the ring's maximum field, correction 1 above, which this ledger is
 * what caught.
 *
 *   T1  q = ne: [A T] = [A T], n a pure number. ✓
 *       Q = q1 + q2 + ... : [A T] throughout, which is why additivity is
 *       algebraic and not a magnitude sum. ✓
 *       q' = (q1 + q2)/2: [A T]. ✓
 *       e/m for the electron: [A T]/[M] = [A T M-1], and 1.6 × 10-19/9.11
 *       × 10-31 = 1.76 × 10^11 C/kg, the standard value. ✓
 *   T2  F = k|q1 q2|/r2: [M L3 T-4 A-2][A2 T2]/[L2] = [M L T-2], a force. ✓
 *       eps0 from that same law: eps0 = q1 q2/(4 pi F r2)
 *       = [A2 T2]/([M L T-2][L2]) = [M-1 L-3 T4 A2]. ✓ And k = 1/(4 pi eps0)
 *       is its exact reciprocal, [M L3 T-4 A-2], which is why the printed MCQ
 *       offering both as options is a real trap and not a cheap one.
 *       F_med = F_vac/K: K = eps/eps0 is a ratio of like quantities, so it is
 *       dimensionless and cannot change the dimensions of a force. ✓
 *       r' = r sqrtK: [L], since K is a pure number. ✓
 *       F = k q Q/(d(d + L)) for the rod on its axis: [M L3 T-4 A-2][A2 T2]
 *       /[L2] = [M L T-2], a force. ✓ And it must be, because the L -> 0 limit
 *       has to land on k q Q/d2, which is the same reduction.
 *       null point x = d/(1 + sqrt(q2/q1)): [L], the bracket being a pure
 *       number because it is a ratio of like charges. ✓
 *   T3  E = F/q0: [M L T-2]/[A T] = [M L T-3 A-1], which is N/C and also V/m. ✓
 *       E = kQ/r2: [M L3 T-4 A-2][A T]/[L2] = [M L T-3 A-1], matching. ✓
 *       p = q(2a): [A T][L] = [L T A]. ✓
 *       E_axial = 2 k p r/(r2 - a2)2: [M L3 T-4 A-2][L T A][L]/[L4]
 *       = [M L T-3 A-1]. ✓ And its far form 2kp/r3 gives
 *       [M L3 T-4 A-2][L T A]/[L3] = [M L T-3 A-1], the same, which is the
 *       check that taking r >> a did not lose a length. ✓
 *       E_eq = k p/(r2 + a2)^(3/2): [M L3 T-4 A-2][L T A]/[L3]
 *       = [M L T-3 A-1]. ✓
 *       tau = pE sin(theta): [L T A][M L T-3 A-1] = [M L2 T-2], a torque, and
 *       the same dimensions as energy, as a torque must be. ✓
 *       U = -pE cos(theta) and W = pE(cos t1 - cos t2): [M L2 T-2] both. ✓
 *       F = p dE/dr: [L T A][M L T-3 A-1]/[L] = [M L T-2], a force. ✓ This is
 *       the line that proves the non-uniform-field force formula is not a
 *       misremembered torque: a torque would come out one power of L larger.
 *   T4  lambda = dq/dl: [A T L-1]. sigma = dq/dA: [A T L-2]. rho = dq/dV:
 *       [A T L-3]. ✓ All three, and the MCQ that asks for sigma is answered by
 *       counting one power of length.
 *       E = k Q x/(x2 + R2)^(3/2): [M L3 T-4 A-2][A T][L]/[L3]
 *       = [M L T-3 A-1]. ✓
 *       E_disc = (sigma/2 eps0)(1 - x/sqrt(x2 + R2)): the bracket is
 *       dimensionless, and [A T L-2][M L3 T-4 A-2] = [M L T-3 A-1]. ✓
 *       E_arc = 2 k lambda/R: [M L3 T-4 A-2][A T L-1]/[L] = [M L T-3 A-1]. ✓
 *       E_max for the ring = 2 k Q/(3 sqrt3 R2): [M L3 T-4 A-2][A T]/[L2]
 *       = [M L T-3 A-1], a field. ✓ This is the reduction that CONDEMNS the
 *       printed answer in correction 1 above: with 1/(4 pi eps0) in it twice
 *       the same expression comes out as [M L T-3 A-1] times
 *       [M-1 L-3 T4 A2], which is not a field or anything else.
 *       finite rod on its bisector, E = 2 k lambda L/(d sqrt(L2 + 4 d2)):
 *       [M L3 T-4 A-2][A T L-1][L]/([L][L]) = [M L T-3 A-1]. ✓ And its
 *       L -> infinity limit 2 k lambda/d reduces identically, which is the
 *       cross-check against Topic 05's Gauss result for an infinite line.
 *   T5  Phi = E A cos(theta): [M L T-3 A-1][L2] = [M L3 T-3 A-1]. ✓
 *       GAUSS'S LAW, the chapter's best test, because the two sides are built
 *       from unrelated pieces. Left: [M L3 T-3 A-1], as above. Right:
 *       Q/eps0 = [A T]/[M-1 L-3 T4 A2] = [A T][M L3 T-4 A-2]
 *       = [M L3 T-3 A-1]. The two agree, and a dropped eps0 would show up
 *       instantly as [A T] against [M L3 T-3 A-1]. ✓
 *       E_line = lambda/(2 pi eps0 r): [A T L-1][M L3 T-4 A-2]/[L]
 *       = [M L T-3 A-1]. ✓
 *       E_sheet = sigma/(2 eps0) and E_conductor = sigma/eps0: [A T L-2][M L3
 *       T-4 A-2] = [M L T-3 A-1] for both, so the factor of two is a pure
 *       number and dimensions cannot catch that particular error. Worth saying
 *       out loud, because it is the one place in this chapter where a
 *       dimensional check is no defence. ✓
 *       E_solid_in = rho r/(3 eps0): [A T L-3][L][M L3 T-4 A-2]
 *       = [M L T-3 A-1]. ✓
 *       Phi_face = q/(6 eps0): [M L3 T-3 A-1], a flux, the six being a pure
 *       count of faces. ✓
 *
 * PHYSICAL PLAUSIBILITY, checked rather than assumed. TWO 1 C CHARGES 1 m APART
 * REPEL WITH 9 × 10^9 N, which is roughly the weight of a million tonnes, and
 * it is the reason no example in this chapter uses a charge above a few
 * microcoulombs: a coulomb is an absurd amount of static charge, and a student
 * who writes one into a Coulomb's law problem should feel the answer is wrong
 * before checking it. Topic 02 says so in its own words and Topic 02's protip
 * turns it into a sanity rule. The electron's charge-to-mass ratio comes out at
 * 1.6 × 10-19/9.11 × 10-31 = 1.76 × 10^11 C/kg, the accepted value, which is
 * the check behind Topic 01's mass-transfer practice item. The Coulomb-to-
 * gravity ratio for two protons is k e2/(G m_p2) = 9 × 10^9 × 2.56 × 10-38
 * /(6.67 × 10-11 × 2.79 × 10-54) = 1.2 × 10^36, matching the source's stated
 * "around 10^36". Every charge in every example below is between 1 nC and
 * 20 microC, every field between 10^3 and 10^6 N/C, every force below 10 N, and
 * no speed anywhere approaches c.
 *
 * LIMITING CASES, used where they teach something rather than as decoration.
 * THE DIPOLE FAR FIELD MUST FALL AS 1/r3, NOT 1/r2, and Topic 03's derivation
 * closes on exactly that: at r >> a the exact 2kpr/(r2 - a2)2 collapses to
 * 2kp/r3, one power of r faster than a point charge, because the two charges
 * nearly cancel and only a residual survives. That single power is the
 * chapter's most-tested fact and Topic 03's first MCQ. The disc field runs the
 * other way and checks two limits at once: up close (x << R) it becomes the
 * infinite sheet sigma/2 eps0, and far away (x >> R) it becomes k Q/x2 with
 * Q = sigma pi R2, so one formula contains both the plane and the point. The
 * finite rod collapses to k q Q/d2 as L goes to zero, which is Topic 02's own
 * check on its integration. The ring's axial field is zero at the centre by
 * symmetry and k Q/x2 far away, and Topic 04's figure draws both ends of that
 * curve. Gauss's shell result at r just above R is k Q/R2, and just below it is
 * zero, so the field jumps across a surface charge, which is what makes the
 * conductor factor of two believable rather than arbitrary.
 *
 * SEAMS: what is quoted as already known, and from which file.
 *   - phy-11-07-gravitation.ts, Topic 01 (F = G m1 m2/r2, and the three cases
 *     where a point-mass law may be used, with the test "is every part of this
 *     body the same distance away?"): quoted directly in Topic 02's opening,
 *     which introduces Coulomb's law as the same algebraic shape with charge in
 *     place of mass, and reuses that same test rather than restating it.
 *   - phy-11-07-gravitation.ts, Topic 02 (gravitational field intensity as
 *     force per unit mass, and the SHELL THEOREM: a uniform shell pulls an
 *     outside point as if all its mass sat at the centre, and exerts zero force
 *     anywhere inside): the largest seam in this chapter. Topic 03 defines the
 *     electric field by naming that file's g = F/m and changing one word.
 *     Topic 05's spherical-shell derivation says openly that it is proving the
 *     shell theorem again, in three lines of Gauss instead of Newton's
 *     integration, and Topic 05's protip points at the same file's cavity trick
 *     for the sphere-with-a-hole problem.
 *   - phy-11-04-laws-of-motion.ts, Topic 01 (Newton's third law): quoted in
 *     Topic 02's derivation step 3 and in its third MCQ, neither of which
 *     re-argues the law; they only check that Coulomb's law obeys it.
 *   - phy-11-06-rotational-motion.ts, Topics 02 and 03. Topic 02 gives torque
 *     as r × F; Topic 03 gives the COUPLE, two equal opposite parallel forces
 *     whose lines of action do not coincide, with zero net force and a turning
 *     effect Fd that is the same about every point. Both are quoted in Topic
 *     03's torque derivation below, which supplies only the perpendicular
 *     distance 2a sin θ and leaves the mechanics of a couple to that file.
 *   - math-12-10-vector-algebra.ts, Topic 03 (the dot product and a · b
 *     = ab cos θ) and Topic 04 (the cross product, its magnitude ab sin θ and
 *     its perpendicular direction): quoted for Φ = E · A in Topic 05,
 *     U = −p · E and τ = p × E in Topic 03. None of the three is re-derived.
 *   - math-12-07-integrals.ts, Topics 02 and 05. Topic 02 is substitution,
 *     quoted where Topic 04's disc derivation puts u = x² + r²; Topic 05 is the
 *     definite integral proper, quoted where Topic 04's arc derivation
 *     integrates sin θ over 0 to π and where Topic 05's non-uniform sphere
 *     integrates shell by shell. Neither idea is re-introduced. Class 12
 *     Mathematics reaches integration properly, so unlike the Class 11 physics
 *     chapters this one does not have to teach it in a line.
 *   - NOT quoted, because it belongs to the next chapter: electrostatic
 *     potential and potential energy. The source's Addendum E is entirely about
 *     energy density and self-energy, and the Contents places both in Chapter
 *     02. Topic 03 below carries the dipole's potential energy U = −pE cos θ,
 *     because the source's main body does, but it states it as a result to be
 *     re-derived properly in Chapter 02 rather than deriving a potential this
 *     chapter has no tools for.
 *
 * THIRTEEN FIGURES NAMED, THIRTEEN DRAWN, PLUS SIX DESIGNED, IN EIGHTEEN
 * DIAGRAM BLOCKS. The source names Figures 1.1 to 1.13 and every one is here:
 * 1.1 to 1.3 in Topic 02, 1.4 to 1.6 in Topic 03, 1.7 to 1.9 in Topic 04, 1.10
 * to 1.13 in Topic 05. None dropped. Figure 1.7, the charged ring, is printed
 * inside the source's Subtopic 3 but is drawn here in Topic 04, beside the disc
 * it is used to build: the disc derivation is literally a stack of rings, and
 * separating the two would have made Topic 04 quote a figure a student had not
 * yet been shown a derivation for.
 * The six designed figures are the pictures the brief named that the source
 * does not: three ways to charge a body and the quantisation ladder (Topic 01),
 * the inverse-square falloff as a graph (Topic 02), the field lines of a single
 * charge and of a dipole (Topic 03), the ring's axial field as a curve with its
 * peak at R/√2 (Topic 04), and flux as the field that gets through a tilted
 * surface (Topic 05). The sphere-inside-versus-outside curve the brief asked
 * for is the second chip of Figure 1.12, beside the scene it explains.
 *
 * THE PANEL RULE IS OBEYED EVERYWHERE. Six figures below are two or three
 * chips on ONE diagram block, never two panels inside one frame: the charging
 * figure (friction, conduction, induction, three chips), Figure 1.1 (like
 * charges, then unlike), the field-line figure (one charge, then a dipole),
 * Figures 1.4 and 1.5 (the same dipole seen end-on, then broadside-on, which is
 * how the source itself pairs them), Figure 1.12 (the two Gaussian spheres,
 * then E against r) and the flux figure (face-on, then tilted).
 * Four drawing constraints paid for by earlier chapters are honoured
 * throughout: `flow` box text carries no markup (this chapter uses no `flow`
 * frame at all), a `hatch` fill hatches the bounding box so only rectangles get
 * one (this chapter uses `wash` everywhere), every point label that has a line
 * leaving it to the north-east carries an explicit `at` (which a charge with
 * field lines radiating from it hits on every single line), and every `circle`
 * curve sits on a frame whose `aspect` equalises the two axes, so a Gaussian
 * sphere is round and not an ellipse.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12ElectricCharges: Chapter = {
  "chapter": "01",
  "title": "Electric Charges and Fields",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Electric Charge: Properties, Quantisation and Charging",
      "chip": "01 CHARGE",
      "kalam": "charge moves, it is never made",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Electric Charge: Properties, Quantisation and Charging</b><br>The conceptual bedrock of the whole chapter, and the cheapest marks in it. CBSE Boards reliably ask a 1 to 3 mark question on quantisation, on conservation, or on the four steps of charging by induction. NEET favours conceptual one-liners: conductors against insulators, the properties of charge, the sign induced on the near face. JEE Main sometimes sets a quantisation numerical that feeds straight into a Coulomb's law calculation. Master this first, because everything later rests on it.<br><br><b>02 · Coulomb's Law and Electric Forces</b><br>The workhorse of all of electrostatics. JEE Main expects one or two direct numericals, usually a superposition or an equilibrium setup. NEET sets at least one conceptual or single-step question, very often the force-in-a-medium trap. JEE Advanced builds integration-flavoured force problems on rods and rings. CBSE Boards reliably ask for the vector statement of the law and a 2 to 3 mark numerical.<br><br><b>03 · Electric Field and Dipoles</b><br>A high-yield subtopic in every exam. CBSE Boards love the axial and equatorial field derivations, which are a near-guaranteed 3 to 5 mark question, and the torque expression. JEE Main mixes field superposition with dipole torque and energy numericals, one or two questions. NEET favours quick conceptual traps: the properties of field lines, the 1/<i>r</i><sup>3</sup> falloff, and which orientation is stable. JEE Advanced pushes into fields from continuous distributions and dipoles in non-uniform fields.<br><br><b>04 · Continuous Charge Distribution</b><br>A bridge topic that powers every field-from-an-extended-object problem. CBSE Boards ask for the definitions of linear, surface and volume charge density and for the integral set-up. JEE Main and JEE Advanced lean on it heavily: rings, discs, arcs and rods are perennial favourites, and the charged-disc result connects straight to the infinite-sheet field from Gauss's law. NEET keeps it conceptual, usually a symmetry-based zero-field argument.<br><br><b>05 · Electric Flux and Gauss's Law</b><br>One of the most heavily tested slices in the book. CBSE Boards almost always ask for one of the three application derivations, the line charge, the plane sheet or the spherical shell, for 3 to 5 marks. JEE Main sets numericals on flux through surfaces and on fields from symmetric distributions, one or two questions. NEET loves the conceptual traps: flux being independent of the surface's shape, and external charges contributing nothing. JEE Advanced pushes into non-uniform charge densities and cavity problems where Gauss plus superposition do the heavy lifting."
        },
        {
          "t": "p",
          "html": "Rub a plastic comb on dry hair and it picks up torn bits of paper. Rub a glass rod with silk and it pulls a hanging pith ball towards it, yet a second glass rod rubbed the same way pushes the first one away. People have played with these tricks since antiquity, and the Greek word for amber, <i>elektron</i>, is where the word electricity comes from. Two facts fall straight out of them and they carry the entire chapter: there are <b>two kinds of electric charge</b>, and <b>like charges repel while unlike charges attract</b>.<br><br>We call them positive and negative, names Benjamin Franklin picked more or less arbitrarily long before anyone knew an electron existed. Today we know what is underneath. Every atom has a positive nucleus and negative electrons around it, and charging an object means nothing more exotic than <b>moving electrons</b>. Strip electrons off and what is left is positive. Add electrons and it becomes negative. Notice what never happens: no new charge is created. Charge is only ever moved around."
        },
        {
          "t": "think",
          "html": "picture a busy kirana shop. the total money in the till plus the money in the customers' pockets is fixed for the day. notes move across the counter constantly, but nobody prints fresh ones mid-transaction, so the grand total never changes. charge behaves exactly like this. rubbing shifts electrons from one body to the other, so one gains precisely what the other loses. the universe's books always balance, to the last electron."
        },
        {
          "t": "p",
          "html": "Materials split into two camps by how freely charge moves through them. In <b>conductors</b>, which means metals, the human body, the earth itself and ionic solutions, some electrons are loosely held and roam, so charge spreads across the whole object almost instantly. In <b>insulators</b>, which means rubber, glass, dry wood and plastic, electrons are bound tightly and charge stays put wherever you deposited it.<br><br>That single difference explains a familiar frustration. You can charge a plastic comb by rubbing and it stays charged, but a metal rod held in your bare hand refuses to hold charge at all: it leaks away through you into the ground. That process has a name, <b>earthing</b> or grounding, and it is not an accident to be avoided. It is a tool, and the induction procedure below uses it deliberately."
        },
        {
          "t": "think",
          "html": "earthing works because the earth is enormous. connect a charged conductor to it and the charge spreads out over something the size of a planet, so what is left on your object is effectively nothing. the earth is not a sink that destroys charge, it is just a reservoir so large that any charge you hand it disappears into the noise. the same reasoning is why the earth is taken as the zero of potential in the next chapter, and why a metal rod held in your bare hand will not stay charged: you are a conductor connected to the ground."
        },
        {
          "t": "p",
          "html": "How would you even know an object is charged? The classic instrument is the <b>gold-leaf electroscope</b>: a metal disc on top of a metal rod, with two very thin gold leaves hanging from the bottom of the rod inside a glass case. Touch a charged body to the disc and charge spreads down to both leaves. Both leaves now carry the SAME sign, so they repel each other and swing apart, and the angle they open through tells you roughly how much charge arrived.<br><br>Read that carefully, because it is the whole logic of the next few pages. The leaves diverge because they repel, and <b>repulsion is the only definitive test of charge</b>. Attraction proves nothing on its own: a charged rod attracts a neutral conductor just as eagerly as an oppositely charged one, by rearranging the conductor's own electrons. Every year some paper somewhere asks a version of that sentence."
        },
        {
          "t": "p",
          "html": "Now a subtler and more beautiful fact. Charge is not infinitely divisible. You cannot hand someone any arbitrary amount of it, only <b>whole-number multiples of a fundamental packet</b>, and that packet is the charge on a single electron, <i>e</i> = 1.6 × 10<sup>−19</sup> C. This is <b>quantisation of charge</b>. Eggs are sold by the dozen and never by the half-egg; charge is issued in units of <i>e</i> and never in fractions of one.<br><br>Then why does charge look perfectly continuous in the laboratory? Because <i>e</i> is absurdly small. A modest everyday charge of 1 μC already corresponds to <i>n</i> = 10<sup>−6</sup>/1.6 × 10<sup>−19</sup> ≈ 6.25 × 10<sup>12</sup> electrons. Adding or removing one electron changes that by one part in six trillion, which no instrument you will meet can detect. A sand dune looks smooth from across the beach even though it is built entirely of separate grains, and charge is exactly the same: discrete underneath, seamless at the scale you can see."
        },
        {
          "t": "p",
          "html": "Two more properties finish the list, and both are quiet enough that students skip them and then lose marks. <b>Additivity</b>: the total charge of a system is the ALGEBRAIC sum of the individual charges, signs included. Put +6 μC and −2 μC in a box and the box holds +4 μC, not 8 μC. <b>Conservation</b>: the net charge of an isolated system never changes with time. Charge can be transferred, and it can even be created, but only in equal and opposite pairs, which is why a photon with no charge at all is allowed to turn into an electron and a positron. The books balance before and after."
        },
        {
          "t": "def",
          "term": "Signs, decided once for this whole chapter",
          "html": "Sign errors are where the marks go in electrostatics, so five conventions are fixed here and every later topic obeys them without restating them. <b>One:</b> like charges repel, unlike attract. <b>Two:</b> the electric field points AWAY from a positive charge and TOWARD a negative one, always, so the direction of a field is decided by the sign of the source and never by the sign of the charge you are testing with. <b>Three:</b> a field line starts on positive charge and ends on negative charge, and it NEVER begins or ends in empty space; where a line appears to stop, the charge it lands on is simply outside the picture. <b>Four:</b> the dipole moment <i>p</i> points from the negative charge to the positive charge, minus to plus, which is the opposite of the direction the field between them points. <b>Five:</b> when a charge is substituted into a VECTOR formula it carries its own sign, and the algebra then decides attraction or repulsion for you; when it is substituted into a MAGNITUDE formula you use its size only and settle the direction separately from the physics. Mixing those last two produces phantom negative forces, and that is a `mistakes` item in the next topic."
        },
        {
          "t": "defgrid",
          "title": "The quantities of electric charge",
          "rows": [
            { "k": "Charge", "v": "<i>q</i> or <i>Q</i>, SI unit coulomb (C), dimensions [A T]. A scalar, but a signed one" },
            { "k": "Elementary charge", "v": "<i>e</i> = 1.6 × 10<sup>−19</sup> C. An electron carries −<i>e</i>, a proton +<i>e</i>" },
            { "k": "Quantisation", "v": "<i>q</i> = <i>ne</i> with <i>n</i> a whole number, positive, negative or zero" },
            { "k": "Everyday sizes", "v": "1 C is enormous. Real charges are μC (10<sup>−6</sup>), nC (10<sup>−9</sup>) or pC (10<sup>−12</sup>)" },
            { "k": "Electron mass", "v": "<i>m</i><sub>e</sub> = 9.11 × 10<sup>−31</sup> kg, needed whenever charge transfer implies mass transfer" },
            { "k": "Charge to mass", "v": "<i>e</i>/<i>m</i><sub>e</sub> = 1.76 × 10<sup>11</sup> C/kg for the electron, a number worth recognising" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · QUANTISATION AND ADDITIVITY",
          "tag": "the two properties every conceptual MCQ is built on",
          "main": "<i>q</i> = <i>ne</i>, <i>n</i> = 0, ±1, ±2, ±3, …<br><i>Q</i><sub>total</sub> = <i>q</i><sub>1</sub> + <i>q</i><sub>2</sub> + … + <i>q</i><sub>k</sub>",
          "legend": [
            "<i>q</i> = charge on the body (C), <i>n</i> = the number of excess or deficit electrons, a pure integer",
            "<i>e</i> = 1.6 × 10<sup>−19</sup> C, the elementary charge, always positive as written; the electron's charge is −<i>e</i>",
            "the sum is ALGEBRAIC, with every sign carried in, and <i>k</i> is simply how many charges there are"
          ],
          "note": "The test a question is really asking: divide the offered charge by e. If the answer is not a whole number, that charge cannot exist. 2.4 × 10⁻¹⁹ C fails, because it is 1.5e."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SHARING BETWEEN IDENTICAL CONDUCTORS",
          "main": "two identical spheres: <i>q</i>′<sub>1</sub> = <i>q</i>′<sub>2</sub> = (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2<br><i>N</i> identical spheres in mutual contact: each gets <i>Q</i><sub>total</sub>/<i>N</i>",
          "legend": [
            "<i>q</i><sub>1</sub>, <i>q</i><sub>2</sub> = the charges before contact (C), with their signs; <i>q</i>′ denotes a charge after contact",
            "<i>N</i> = how many identical conductors are touched together at once, a pure count",
            "IDENTICAL is doing real work here: two spheres of different radii do not share equally, they share so as to reach the same potential"
          ],
          "note": "Always finish with the conservation check, total before equals total after. It costs one line and it catches a dropped sign every time."
        },
        {
          "t": "proc",
          "title": "Charging by friction, conduction and induction",
          "steps": [
            "<b>Friction.</b> Rub two different insulators together. Electrons move from the material that holds them less tightly to the one that holds them more tightly, so the two bodies end up with EQUAL AND OPPOSITE charges. Glass rubbed with silk loses electrons and goes positive; the silk gains them and goes negative.",
            "<b>Conduction.</b> Touch a charged body to a neutral conductor. Charge flows across until they share it, equally if the two are identical. Two signatures to memorise: the neutral body ends up with the SAME sign as the charging body, and the charging body LOSES some of its charge.",
            "<b>Induction, step 1.</b> Bring the charged rod NEAR the neutral conductor without touching it. Free electrons rearrange themselves: the near face develops a charge opposite to the rod, the far face the same sign as the rod. The conductor as a whole is still neutral.",
            "<b>Induction, step 2.</b> Earth the conductor while the rod stays in place. The like-sign charge on the far face is repelled and drains away to the ground; the unlike charge on the near face stays, held there by the rod's attraction.",
            "<b>Induction, steps 3 and 4.</b> Remove the EARTHING FIRST, with the rod still near, and only then remove the rod. The conductor is left with a net charge OPPOSITE to the rod, which now spreads over it. Break the order and you undo the whole thing. Note what did not happen: the rod never touched anything, so the rod kept every bit of its own charge."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "CHARGING · THREE ROUTES, THREE SIGNATURES",
          "chips": ["friction", "conduction", "induction"],
          "captions": [
            "Rub glass with silk. Electrons cross from the glass to the silk, so the glass is left positive and the silk equally negative. Nothing was created: whatever one gained, the other lost, which is conservation of charge drawn as a picture.",
            "Touch a positively charged rod to a neutral conductor. Charge flows across the contact, so the conductor ends up with the SAME sign as the rod and the rod ends up with less charge than it started with. Contact is the signature of conduction.",
            "Bring the same rod close without touching. The conductor's own electrons crowd towards the rod, leaving the near face unlike and the far face like, with the total still zero. Earth the far side, remove the earth, then remove the rod, and the conductor keeps a charge OPPOSITE to the rod, while the rod has lost nothing at all."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "bodies": [
                { "kind": "block", "at": [2.4, 3.6], "w": 2.2, "h": 2.2, "label": "glass" },
                { "kind": "block", "at": [7.6, 3.6], "w": 2.2, "h": 2.2, "label": "silk" }
              ],
              "marks": [
                { "x": 1.9, "y": 4.5, "glyph": "plus", "tone": "ink" },
                { "x": 2.4, "y": 4.5, "glyph": "plus", "tone": "ink" },
                { "x": 2.9, "y": 4.5, "glyph": "plus", "tone": "ink" },
                { "x": 7.1, "y": 4.5, "glyph": "minus", "tone": "ink" },
                { "x": 7.6, "y": 4.5, "glyph": "minus", "tone": "ink" },
                { "x": 8.1, "y": 4.5, "glyph": "minus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [3.9, 3.6], "to": [6.1, 3.6], "tone": "amber", "label": "electrons", "at": "above" }
              ],
              "labels": [
                { "x": 5.0, "y": 1.3, "text": "equal and opposite" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.7065,
              "curves": [
                { "c": "circle", "cx": 6.6, "cy": 3.5, "r": 1.5 }
              ],
              "polys": [
                { "pts": [[1.0, 3.9], [5.1, 3.9], [5.1, 3.1], [1.0, 3.1]], "close": true, "tone": "ink" }
              ],
              "marks": [
                { "x": 1.7, "y": 3.5, "glyph": "plus", "tone": "ink" },
                { "x": 2.6, "y": 3.5, "glyph": "plus", "tone": "ink" },
                { "x": 6.2, "y": 4.3, "glyph": "plus", "tone": "amber" },
                { "x": 7.1, "y": 3.9, "glyph": "plus", "tone": "amber" },
                { "x": 6.4, "y": 2.7, "glyph": "plus", "tone": "amber" }
              ],
              "labels": [
                { "x": 3.0, "y": 4.7, "text": "charged rod" },
                { "x": 6.6, "y": 5.9, "text": "contact: same sign" }
              ]
            },
            {
              "x": [0, 12], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[0.5, 4.4], [3.2, 4.4], [3.2, 3.6], [0.5, 3.6]], "close": true, "tone": "ink" },
                { "pts": [[4.6, 5.2], [9.6, 5.2], [9.6, 2.8], [4.6, 2.8]], "close": true, "tone": "ink" }
              ],
              "marks": [
                { "x": 1.1, "y": 4.0, "glyph": "plus", "tone": "ink" },
                { "x": 1.85, "y": 4.0, "glyph": "plus", "tone": "ink" },
                { "x": 2.6, "y": 4.0, "glyph": "plus", "tone": "ink" },
                { "x": 5.1, "y": 4.3, "glyph": "minus", "tone": "amber" },
                { "x": 5.1, "y": 3.5, "glyph": "minus", "tone": "amber" },
                { "x": 9.1, "y": 4.3, "glyph": "plus", "tone": "amber" },
                { "x": 9.1, "y": 3.5, "glyph": "plus", "tone": "amber" }
              ],
              "labels": [
                { "x": 1.85, "y": 5.9, "text": "rod, no contact" },
                { "x": 7.1, "y": 1.6, "text": "unlike near, like far" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "QUANTISATION · THE LADDER OF ALLOWED CHARGES",
          "chips": ["only whole packets"],
          "captions": [
            "Every charge a body can carry sits on one of these rungs, at an integer multiple of e = 1.6 × 10⁻¹⁹ C. Nothing lives between them. The crossed point at 1.5e is not a rare charge or a hard one to make, it is an impossible one, and that is exactly what a which-of-these-is-not-a-possible-charge question is testing. The rungs are drawn far apart here; in reality they are 1.6 × 10⁻¹⁹ C apart, which is why a microcoulomb looks like a smooth quantity rather than a stack of six trillion steps."
          ],
          "frames": [
            {
              "x": [-2.7, 3.7], "y": [-1.1, 1.1], "axes": "none", "aspect": 0.4,
              "polys": [
                { "pts": [[-2.5, 0], [3.5, 0]], "tone": "ink" }
              ],
              "marks": [
                { "x": -2, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": -1, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": 0, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": 1, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": 2, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": 3, "y": 0, "glyph": "tick", "tone": "ink" },
                { "x": 1.5, "y": 0, "glyph": "cross", "tone": "red" }
              ],
              "labels": [
                { "x": -2, "y": -0.45, "text": "−2e" },
                { "x": -1, "y": -0.45, "text": "−e" },
                { "x": 0, "y": -0.45, "text": "0" },
                { "x": 1, "y": -0.45, "text": "e" },
                { "x": 2, "y": -0.45, "text": "2e" },
                { "x": 3, "y": -0.45, "text": "3e" },
                { "x": -1.1, "y": 0.62, "text": "allowed values only" },
                { "x": 1.5, "y": 0.62, "text": "1.5e cannot exist" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any charge-sharing or quantisation question, in one line",
          "steps": [
            "<b>Read the sign of every charge before you touch the arithmetic.</b> Additivity and sharing are both ALGEBRAIC. Plugging in magnitudes is the single commonest way this topic is lost.",
            "<b>Identical conductors touching: jump straight to the average.</b> Two spheres give (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 each; <i>N</i> spheres brought into mutual contact at once give total/<i>N</i> each. No flow calculation is ever needed.",
            "<b>Repeated touching is a halving.</b> A charged sphere touched to one identical neutral sphere keeps half. Touched to a second fresh neutral sphere it keeps a quarter, and after <i>n</i> such touches it keeps <i>Q</i>/2<sup><i>n</i></sup>. That geometric decay is a favourite Advanced twist.",
            "<b>For a possible-value question, divide by <i>e</i>.</b> An integer means the charge is allowed; anything else means it is not. Do the division, do not eyeball it.",
            "<b>Close with the conservation check.</b> Total charge before must equal total charge after, every time. If it does not, a sign has slipped, and you will find it in one line."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A body carries a charge of −1.0 μC. How many excess electrons does it hold? Take <i>e</i> = 1.6 × 10<sup>−19</sup> C.",
          "steps": [
            "The charge is negative, so the body has an EXCESS of electrons rather than a deficit. Work with the magnitude: <i>q</i> = 1.0 × 10<sup>−6</sup> C.",
            "Quantisation gives <i>q</i> = <i>ne</i>, so <i>n</i> = <i>q</i>/<i>e</i> = (1.0 × 10<sup>−6</sup>)/(1.6 × 10<sup>−19</sup>).",
            "<i>n</i> = 6.25 × 10<sup>12</sup> electrons. Notice the size of that number against the size of the charge: a microcoulomb is a tiny charge and still needs six trillion electrons, which is precisely why quantisation is invisible in the laboratory."
          ],
          "ans": "6.25 × 10<sup>12</sup> excess electrons"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Two identical conducting spheres carry charges +<i>q</i> and −3<i>q</i>. They are brought into contact and then separated. What charge does each carry afterwards?",
          "steps": [
            "The trap is to average the magnitudes, (<i>q</i> + 3<i>q</i>)/2 = 2<i>q</i>, which is wrong twice over: wrong size and no sign.",
            "Identical conductors share the ALGEBRAIC total equally: each gets (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 = ((+<i>q</i>) + (−3<i>q</i>))/2 = (−2<i>q</i>)/2.",
            "Each sphere ends with −<i>q</i>. Conservation check: total before = −2<i>q</i>, total after = (−<i>q</i>) + (−<i>q</i>) = −2<i>q</i>. Balanced."
          ],
          "ans": "each sphere carries −<i>q</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A metal sphere has 1.25 × 10<sup>13</sup> electrons removed from it. (a) Find its charge. (b) Two such identical spheres are placed 30 cm apart in vacuum. Find the force between them. Take <i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>.",
          "steps": [
            "(a) Removing electrons leaves the sphere POSITIVE. <i>q</i> = <i>ne</i> = (1.25 × 10<sup>13</sup>)(1.6 × 10<sup>−19</sup>) = 2.0 × 10<sup>−6</sup> C = +2.0 μC.",
            "(b) Both spheres carry +2.0 μC and <i>r</i> = 0.30 m. <i>F</i> = <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2.0 × 10<sup>−6</sup>)<sup>2</sup>/(0.30)<sup>2</sup>.",
            "The numerator is (9 × 10<sup>9</sup>)(4 × 10<sup>−12</sup>) = 3.6 × 10<sup>−2</sup>, and dividing by 0.09 gives <i>F</i> = 0.40 N.",
            "Like charges, so the force is repulsive, along the line joining the centres. Sanity check on the size: two microcoulombs at a third of a metre give a fraction of a newton, which is about the weight of a 40 g biscuit. Plausible for laboratory static electricity."
          ],
          "ans": "(a) +2.0 μC · (b) 0.40 N, repulsive"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A conducting sphere carries charge <i>Q</i>. It is touched, one after another, to three identical spheres that are initially neutral: to the first, separated, then to the second, separated, then to the third. Find the charge left on the original sphere and the total charge on the other three.",
          "steps": [
            "Each touch is between two IDENTICAL spheres, so each touch leaves the original with exactly half of whatever it was carrying. This is the halving rule, applied three times.",
            "After the first touch the original holds <i>Q</i>/2 and sphere 1 holds <i>Q</i>/2. After the second it holds <i>Q</i>/4 and sphere 2 holds <i>Q</i>/4. After the third it holds <i>Q</i>/8 and sphere 3 holds <i>Q</i>/8.",
            "The three spheres together carry <i>Q</i>/2 + <i>Q</i>/4 + <i>Q</i>/8 = 7<i>Q</i>/8.",
            "Conservation check: <i>Q</i>/8 + 7<i>Q</i>/8 = <i>Q</i>. After <i>n</i> such touches the original retains <i>Q</i>/2<sup><i>n</i></sup>, a geometric decay, and no amount of touching ever takes it exactly to zero."
          ],
          "ans": "original keeps <i>Q</i>/8 · the three hold 7<i>Q</i>/8 between them"
        },
        {
          "t": "mcq",
          "q": "Which of the following is NOT a possible value for the charge on a body?",
          "opts": [
            { "label": "3.2 × 10<sup>−19</sup> C", "nudge": "Divide by e: this is exactly 2e. A perfectly ordinary charge, and it is offered here to tempt anyone who does not do the division." },
            { "label": "4.8 × 10<sup>−19</sup> C", "nudge": "This is 3e, an exact multiple, so it is allowed. Only one of the four fails the division test." },
            { "label": "2.4 × 10<sup>−19</sup> C", "nudge": null },
            { "label": "1.6 × 10<sup>−18</sup> C", "nudge": "This is 10e. The extra power of ten makes it look unusual, but it is still a whole-number multiple." }
          ],
          "correct": 2,
          "solution": "Charge must be an integer multiple of e = 1.6 × 10⁻¹⁹ C. Dividing each: 3.2/1.6 = 2, 4.8/1.6 = 3, 16/1.6 = 10, but 2.4/1.6 = 1.5. Only 2.4 × 10⁻¹⁹ C is not a whole number of packets, so it cannot exist."
        },
        {
          "t": "mcq",
          "q": "A charged body B attracts a body A. What can you conclude about A?",
          "opts": [
            { "label": "A is positively charged", "nudge": "You were told nothing about B's own sign, so no specific sign for A can follow. This option overclaims from no information at all." },
            { "label": "A is negatively charged", "nudge": "Same overclaim as the previous option, with the sign flipped. Attraction alone cannot single out one sign." },
            { "label": "A carries a charge opposite to B", "nudge": "True as one possibility, but it quietly ignores the other one. A charged body attracts a NEUTRAL conductor too, by inducing opposite charge on its near face." },
            { "label": "A is either oppositely charged or neutral", "nudge": null }
          ],
          "correct": 3,
          "solution": "Attraction is not a test of charge. A charged body attracts a neutral conductor by induction just as readily as it attracts an oppositely charged one. Only REPULSION is a definitive test that a body carries charge, because nothing neutral is ever repelled."
        },
        {
          "t": "mcq",
          "q": "During charging by induction, the charging rod:",
          "opts": [
            { "label": "loses charge equal to the charge induced", "nudge": "This describes CONDUCTION, where contact lets charge flow across. Induction never involves contact, so nothing can leave the rod." },
            { "label": "gains charge from the conductor", "nudge": "Nothing crosses the gap in either direction. There is no mechanism here for the rod to gain anything." },
            { "label": "loses no charge at all", "nudge": null },
            { "label": "ends up neutral", "nudge": "This would require the rod to hand over every bit of its charge, which needs contact. The rod finishes with exactly what it started with." }
          ],
          "correct": 2,
          "solution": "Induction involves no contact, so the rod transfers nothing. It merely rearranges the conductor's own electrons, and the charge that finally stays on the conductor came from the earth connection, not from the rod. Conduction is the one where the rod loses charge and the body gains the SAME sign; induction is no contact, opposite sign, rod unharmed."
        },
        {
          "t": "mcq",
          "q": "A photon, which carries no charge, converts into an electron and a positron. Which property of charge guarantees the books still balance?",
          "opts": [
            { "label": "quantisation", "nudge": "Quantisation tells you the packet size, that any charge must be a multiple of e. It says nothing about totals before and after a process." },
            { "label": "additivity", "nudge": "Additivity is the RULE you use to compute the total, that charges add algebraically. It is the arithmetic, not the law that fixes the answer at zero." },
            { "label": "conservation", "nudge": null },
            { "label": "attraction between unlike charges", "nudge": "The electron and positron do attract each other, but that is a force question and has nothing to do with the bookkeeping of the total." }
          ],
          "correct": 2,
          "solution": "The photon starts with zero charge. The electron (−e) and the positron (+e) total zero as well. Net charge is unchanged, which is conservation of charge: charge may be created, but only in equal and opposite pairs, so an isolated system's total never moves."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] How much positive charge is carried by all the protons in 1 g of hydrogen? Take 6 × 10<sup>23</sup> atoms per gram, one proton per atom.", "a": "<i>Q</i> = <i>ne</i> = (6 × 10<sup>23</sup>)(1.6 × 10<sup>−19</sup>) = 9.6 × 10<sup>4</sup> C. Worth pausing on: one gram of the lightest element carries nearly 10<sup>5</sup> C of positive charge, and an equal negative charge sits on its electrons. Matter is neutral to fantastic precision, which is the only reason you are not thrown across the room by every passing object." },
            { "q": "[NEET] A glass rod rubbed with silk acquires a charge of +4.8 × 10<sup>−16</sup> C. How many electrons did it lose, and what charge does the silk end up with?", "a": "<i>n</i> = (4.8 × 10<sup>−16</sup>)/(1.6 × 10<sup>−19</sup>) = 3000 electrons lost. By conservation the silk gains those same 3000 electrons and carries −4.8 × 10<sup>−16</sup> C." },
            { "q": "[JEE Main] Three identical conducting spheres carry +6 μC, −2 μC and +2 μC. All three are brought into mutual contact at the same time and then separated. Find the charge on each.", "a": "Algebraic total = +6 − 2 + 2 = +6 μC. Three identical spheres in mutual contact share it equally, so each carries +2 μC. Check: 3 × (+2) = +6 μC." },
            { "q": "[JEE Main] A charge of −2 μC is transferred from body A to body B. By how much does the mass of B change, and in which direction? Take <i>m</i><sub>e</sub> = 9.11 × 10<sup>−31</sup> kg.", "a": "Negative charge arriving means electrons arriving: <i>n</i> = (2 × 10<sup>−6</sup>)/(1.6 × 10<sup>−19</sup>) = 1.25 × 10<sup>13</sup>. So Δ<i>m</i> = <i>nm</i><sub>e</sub> = (1.25 × 10<sup>13</sup>)(9.11 × 10<sup>−31</sup>) ≈ 1.1 × 10<sup>−17</sup> kg, and B GAINS that mass. Cross-check by the charge-to-mass ratio: Δ<i>m</i> = <i>q</i>/(<i>e</i>/<i>m</i><sub>e</sub>) = (2 × 10<sup>−6</sup>)/(1.76 × 10<sup>11</sup>) = 1.1 × 10<sup>−17</sup> kg, the same." },
            { "q": "[JEE Advanced] A positively charged rod is brought near one end of an isolated neutral conductor, without touching it. State the sign induced on the near end and on the far end, and say whether the rod loses any charge.", "a": "Near end negative, far end positive, and the conductor is still neutral overall because nothing entered or left it. The rod loses NO charge: induction involves no contact, so there is no path for charge to cross." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing induction with conduction.</b> Conduction means contact, the same sign on the body, and the rod losing charge. Induction means no contact, the opposite sign on the body, and the rod keeping everything. Label which one the question describes before you write a single symbol.",
            "<b>Treating attraction as proof of charge.</b> A charged object attracts neutral conductors just as happily as oppositely charged ones. Only repulsion proves that a body is charged. This exact fact is tested somewhere in some paper every single year.",
            "<b>Dropping signs in additivity and sharing.</b> Both are algebraic. The average rule is (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 with the signs carried in, so +<i>q</i> and −3<i>q</i> give −<i>q</i> each, not 2<i>q</i> each. Plugging in magnitudes loses the sign and the mark together.",
            "<b>Eyeballing a quantisation check.</b> A valid charge divided by <i>e</i> must come out a whole number. Actually do the division. 2.4 × 10<sup>−19</sup> C looks as respectable as 3.2 × 10<sup>−19</sup> C until you divide, and then one of them is 1.5 packets.",
            "<b>Believing quantisation stops being true at large scales.</b> It does not. It is exact at every scale; it merely becomes undetectable, because one electron in six trillion is not a change any instrument you will use can see. A question that says charge is continuous for macroscopic bodies is describing an appearance, not a law."
          ]
        },
        {
          "t": "protip",
          "html": "two numbers are worth burning in before you go any further. one microcoulomb is about 6 × 10<sup>12</sup> electrons, which tells you instantly that a charge quoted in coulombs in a physics problem is either a trick or a typo. and the electron's charge-to-mass ratio, <i>e</i>/<i>m</i><sub>e</sub> = 1.76 × 10<sup>11</sup> C/kg, converts any transferred charge straight into a transferred mass without a second calculation. for the sharing questions, say \"identical means average\" out loud and reach for (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 before you reach for anything else, then spend one line checking that the total did not move."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>q</i> = <i>ne</i>, <i>e</i> = 1.6 × 10<sup>−19</sup> C", "note": "quantisation; charge has dimensions [A T], unit C" },
            { "f": "<i>Q</i> = <i>q</i><sub>1</sub> + <i>q</i><sub>2</sub> + …, signs included", "note": "additivity is ALGEBRAIC, never a sum of magnitudes" },
            { "f": "net charge of an isolated system is constant", "note": "conservation; charge is made only in equal and opposite pairs" },
            { "f": "identical spheres touching: each gets (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2", "note": "<i>N</i> spheres in mutual contact: each gets total/<i>N</i>" },
            { "f": "friction: equal and opposite · conduction: same sign, rod loses · induction: opposite sign, rod keeps", "note": "the three routes, and their three signatures" }
          ],
          "aids": [
            "\"charge moves, it is never made\"",
            "\"repulsion is the only sure test of charge\"",
            "\"induction: no touch, opposite charge, rod unharmed\"",
            "\"divide by e, and it had better be a whole number\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Coulomb's Law and Electric Forces",
      "chip": "02 COULOMB",
      "kalam": "product up, distance squared down",
      "blocks": [
        {
          "t": "p",
          "html": "Two charges sitting metres apart push or pull on each other with no string, no rod and nothing touching. Coulomb's law is the sentence that puts a number on that invisible shove. Charles Augustin de Coulomb measured it in 1784 with a <b>torsion balance</b>, which is a tiny see-saw hanging from a fine fibre that twists when a force acts on it. He had a lovely trick for changing a charge without ever measuring one: touch a charged metal sphere to an identical uncharged one and, by symmetry, the charge splits exactly in half. Touch again and you have a quarter. That is the sharing rule from the last topic, being used as a laboratory instrument a century before anyone knew what an electron was.<br><br>Two clean dependencies came out of the twisting. First, the force grows with the <b>product</b> of the two charges: double either one and the force doubles. Second, the force falls off as the <b>square of the distance</b>: push the charges twice as far apart and the force drops to a quarter, not to a half."
        },
        {
          "t": "think",
          "html": "stand at the counter of a mithai shop and the smell is overpowering. walk to twice the distance and it is far weaker than half strength, because the aroma has spread out over a sphere whose surface grows as the square of the distance. electric influence spreads the same geometric way. the <i>r</i><sup>2</sup> in the denominator is not an arbitrary choice somebody made, it is the surface area of a sphere, and the same reason gives gravity its square too."
        },
        {
          "t": "p",
          "html": "You have met this algebra already. <b>Gravitation, Topic 01</b> gave you <i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> and, more usefully, the rule for when a point-mass law is allowed to be used at all: two point particles, two uniform spheres, or a uniform sphere and a point, with the test question <b>is every part of this body the same distance away?</b> Coulomb's law is that law with charge in place of mass, and the same test applies word for word. Where the answer is no, you integrate, which is Topic 04's whole business."
        },
        {
          "t": "p",
          "html": "Two differences between the two laws matter, and both run deep. Gravity is only ever attractive, because there is no negative mass; charges do both, and the sign decides which. And the electric force is monstrously stronger. Between two protons the Coulomb repulsion beats the gravitational attraction by a factor of about 10<sup>36</sup>, which you can check yourself: <i>ke</i><sup>2</sup>/(<i>Gm</i><sub>p</sub><sup>2</sup>) = (9 × 10<sup>9</sup>)(2.56 × 10<sup>−38</sup>)/((6.67 × 10<sup>−11</sup>)(2.79 × 10<sup>−54</sup>)) ≈ 1.2 × 10<sup>36</sup>. That is why gravity is completely irrelevant inside an atom and electric forces run everything there.<br><br>So a fair question: if the electric force is that enormous, why are you not flung across the room every time you walk past a doorknob? Because ordinary matter is neutral to fantastic precision. Every object packs in almost exactly equal amounts of positive and negative charge, and their pushes and pulls cancel to many decimal places. You only notice the electric force when that balance is disturbed, by a comb through dry hair or a balloon on a sweater. The giant force is always there. It is hiding behind near-perfect cancellation."
        },
        {
          "t": "think",
          "html": "the other quiet assumption in every problem you will solve is superposition: that the force between two charges is completely unaffected by whatever third charge is standing nearby. that is not obvious and it is not derivable. it is an experimental fact, tested to extraordinary precision, and it is the reason a two-body law is enough to describe a universe full of charges. every three-charge question you meet is really the same two-charge law applied twice and then added as vectors."
        },
        {
          "t": "def",
          "term": "When Coulomb's law in this form is allowed",
          "html": "The simple <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup> is not a free pass, and every condition on it is examinable. <b>Point charges:</b> the bodies must be small compared with their separation <i>r</i>. There is one loophole worth memorising, and it is the shell theorem from Gravitation, Topic 02 wearing different clothes: a uniformly charged sphere acts on anything OUTSIDE it exactly as if all its charge sat at its centre, so two such spheres may be treated as points at centre-to-centre distance. <b>At rest:</b> this is electrostatics. Moving charges also produce magnetic forces, which this law knows nothing about and which Chapter 04 handles. <b>In vacuum or air:</b> inside a material medium the force is reduced by the dielectric constant, and the formula needs the correction below. Within those limits the law has been tested from about 10<sup>−15</sup> m, which is nuclear scale, up to laboratory distances, which is part of why we trust it so completely."
        },
        {
          "t": "defgrid",
          "title": "The constants and symbols of Coulomb's law",
          "rows": [
            { "k": "Coulomb constant", "v": "<i>k</i> = 1/(4πε<sub>0</sub>) = 9.0 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>, dimensions [M L<sup>3</sup> T<sup>−4</sup> A<sup>−2</sup>]" },
            { "k": "Permittivity of vacuum", "v": "ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>, equivalently F/m, dimensions [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]" },
            { "k": "Separation", "v": "<i>r</i> = the distance between the two charges (m). Never a coordinate, always a gap" },
            { "k": "Unit vector", "v": "r̂<sub>21</sub> points FROM <i>q</i><sub>1</sub> TOWARD <i>q</i><sub>2</sub>. Dimensionless; it carries direction only" },
            { "k": "Dielectric constant", "v": "<i>K</i> = ε/ε<sub>0</sub>, a pure number, always at least 1. Vacuum 1, air 1.0006, water about 80" },
            { "k": "Why the 4π", "v": "put there on purpose (rationalisation) so that Gauss's law and the sphere results come out clean later" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · COULOMB'S LAW, MAGNITUDE AND VECTOR",
          "tag": "one equation that handles attraction and repulsion without cases",
          "main": "<i>F</i> = (1/4πε<sub>0</sub>) |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup> = <i>k</i>|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup><br>vector form: <i>F</i><sub>21</sub> = <i>k</i>(<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) r̂<sub>21</sub>",
          "legend": [
            "<i>F</i> = force on either charge (N); <i>q</i><sub>1</sub>, <i>q</i><sub>2</sub> = the two charges (C); <i>r</i> = their separation (m)",
            "<i>k</i> = 9.0 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>; r̂<sub>21</sub> = unit vector from charge 1 to charge 2, dimensionless",
            "in the MAGNITUDE form use sizes only, inside the modulus bars; in the VECTOR form substitute the signs and let the algebra decide the direction"
          ],
          "note": "If q1q2 is positive the vector points along r̂21, away from charge 1: repulsion. If it is negative the vector flips to the opposite of r̂21: attraction. No separate cases are ever needed, which is exactly why the vector form is worth learning."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · IN A MEDIUM, AND SUPERPOSITION",
          "main": "<i>F</i><sub>med</sub> = <i>F</i><sub>vac</sub>/<i>K</i>, and to restore the force: <i>r</i>′ = <i>r</i>/√<i>K</i><br><i>F</i><sub>1</sub> = <i>F</i><sub>12</sub> + <i>F</i><sub>13</sub> + … + <i>F</i><sub>1<i>n</i></sub>, added as VECTORS",
          "legend": [
            "<i>K</i> = ε/ε<sub>0</sub>, the dielectric constant of the medium, a pure number never less than 1",
            "<i>F</i><sub>vac</sub> = the force the same two charges would feel in vacuum at the same separation (N); <i>r</i>′ = the new separation (m)",
            "<i>F</i><sub>1<i>j</i></sub> = the force on charge 1 from charge <i>j</i> alone, computed as if the other <i>n</i> − 2 charges were not there"
          ],
          "note": "Force scales as 1/K but distance compensates as the square root of K, because r enters squared. Students routinely apply the wrong one of those two. Tie the factor to what the question actually asks for."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · FROM THE TORSION BALANCE TO THE VECTOR FORM, TAP A LINE",
          "steps": [
            {
              "eq": "measurement gives <i>F</i> ∝ |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>| and <i>F</i> ∝ 1/<i>r</i><sup>2</sup>, so <i>F</i> = <i>k</i>|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>",
              "why": "Two experimental proportionalities, combined. The constant k is NOT derived from anything: it is fixed by our independent choice of how big a coulomb is, and in SI that choice makes it 9 × 10⁹ N m²/C²."
            },
            {
              "eq": "put the charges at positions <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub>, and define <i>r</i><sub>21</sub> = <i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>, with r̂<sub>21</sub> = <i>r</i><sub>21</sub>/|<i>r</i><sub>21</sub>|",
              "why": "A force has a direction, so we need something to point it with. The separation vector runs from charge 1 to charge 2, and dividing by its own length leaves pure direction."
            },
            {
              "eq": "the force acts ALONG the line joining the charges: <i>F</i><sub>21</sub> = <i>k</i>(<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) r̂<sub>21</sub>",
              "why": "A force directed along the line joining two bodies is called a CENTRAL force, and both this law and gravitation are of that kind. Note the charges now go in WITH their signs: like charges make the prefactor positive and the force points along r̂21, away from charge 1, which is repulsion; unlike charges flip it, which is attraction."
            },
            {
              "eq": "swap the labels. Since r̂<sub>12</sub> = −r̂<sub>21</sub>, we get <i>F</i><sub>12</sub> = −<i>F</i><sub>21</sub>",
              "why": "The two forces are equal in size and opposite in direction, whatever the charges are. Coulomb's law obeys Newton's third law automatically, and the third law is the one from Laws of Motion, Topic 01, not a new rule for charges. A 9Q charge does not push harder than a Q charge: the product q1q2 is the same read either way."
            },
            {
              "eq": "for many charges: <i>F</i><sub>1</sub> = <i>F</i><sub>12</sub> + <i>F</i><sub>13</sub> + … + <i>F</i><sub>1<i>n</i></sub>",
              "why": "This is the SUPERPOSITION principle, and it is an experimental fact rather than a consequence of the law: each pair acts as though the others were absent, and the results add as vectors. It is what lets a two-body law describe a universe full of charges. For a continuous body the sum becomes an integral over elements dq, which is Topic 04."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.1 · TWO CHARGES, AND THE VECTOR THAT POINTS THE FORCE",
          "chips": ["like charges repel", "unlike charges attract"],
          "captions": [
            "Position vectors r₁ and r₂ run from an origin O to the two charges, and the separation vector r₂₁ = r₂ − r₁ runs from q₁ to q₂. Divided by its own length it becomes the unit vector r̂₂₁, which carries direction and nothing else. Both charges are positive here, so the product q₁q₂ is positive, the force on q₂ points ALONG r̂₂₁, and the two forces push outward. Note they are drawn the same length: Newton's third law, and the sizes of the charges never enter it.",
            "The same picture with q₂ negative. Nothing in the formula changes; only the sign of the product does. The prefactor turns negative, so the force on q₂ now points OPPOSITE to r̂₂₁ and the arrows swing inward. One equation, both cases, no separate rule for attraction."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.55,
              "points": [
                { "x": 1, "y": 1, "label": "O", "at": "sw" }
              ],
              "segments": [
                { "from": [1, 1], "to": [4, 3.5], "arrow": true, "soft": true, "label": "r₁", "at": "mid" },
                { "from": [1, 1], "to": [8, 3.5], "arrow": true, "soft": true, "label": "r₂", "at": "mid" }
              ],
              "marks": [
                { "x": 4, "y": 3.5, "glyph": "plus", "tone": "ink", "label": "q₁" },
                { "x": 8, "y": 3.5, "glyph": "plus", "tone": "ink", "label": "q₂" }
              ],
              "arrows": [
                { "from": [4.4, 3.5], "to": [7.6, 3.5], "tone": "soft", "label": "r̂₂₁", "at": "above" },
                { "from": [3.6, 3.5], "to": [2.3, 3.5], "tone": "amber", "label": "F₁₂" },
                { "from": [8.4, 3.5], "to": [9.7, 3.5], "tone": "amber", "label": "F₂₁", "at": "end" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none", "aspect": 0.55,
              "marks": [
                { "x": 4, "y": 3.5, "glyph": "plus", "tone": "ink", "label": "q₁" },
                { "x": 8, "y": 3.5, "glyph": "minus", "tone": "ink", "label": "q₂" }
              ],
              "arrows": [
                { "from": [4.5, 3.5], "to": [5.8, 3.5], "tone": "amber", "label": "F₁₂", "at": "end" },
                { "from": [7.5, 3.5], "to": [6.2, 3.5], "tone": "amber", "label": "F₂₁", "at": "end" }
              ],
              "labels": [
                { "x": 6, "y": 1.6, "text": "product is negative" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "INVERSE SQUARE · WHAT THE DISTANCE ACTUALLY DOES",
          "chips": ["quarter, then a ninth"],
          "captions": [
            "The force between two fixed charges, plotted against their separation. Double the distance and the force is not halved, it is quartered; treble it and the force is a ninth. That collapse is why electrostatic forces are ferocious at atomic distances and negligible across a room, and why a question that moves charges apart by a factor almost always wants a squared factor back. The curve never touches the axis: an inverse-square force has infinite reach, it just becomes uninteresting."
          ],
          "frames": [
            {
              "x": [0, 4.6], "y": [0, 4.8],
              "axisX": "r (m)", "axisY": "F (N)",
              "ticksX": { "every": 1 }, "ticksY": { "every": 1 },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0.95, 4.43], [1.0, 4.0], [1.1, 3.31], [1.2, 2.78], [1.4, 2.04], [1.6, 1.56], [1.8, 1.23], [2.0, 1.0], [2.4, 0.69], [2.8, 0.51], [3.0, 0.444], [3.2, 0.39], [3.6, 0.31], [4.2, 0.23]] }
              ],
              "points": [
                { "x": 1, "y": 4, "label": "F", "at": "ne" },
                { "x": 2, "y": 1, "label": "F/4", "at": "ne" },
                { "x": 3, "y": 0.444, "label": "F/9", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any multi-charge force problem, in five moves",
          "steps": [
            "<b>Draw the charges and put an arrow on the one you are asked about, for every other charge.</b> Point each arrow using like-repels and unlike-attracts, before any arithmetic. A wrong direction here cannot be recovered later.",
            "<b>Write every force as a multiple of one reference force.</b> Set <i>F</i><sub>0</sub> = <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup> using the problem's own charge and its own shortest distance, then express the rest as multiples of it. This halves the arithmetic and dodges most calculator slips.",
            "<b>Resolve and add as VECTORS.</b> Two equal forces at angle θ give a resultant 2<i>F</i> cos(θ/2) along the bisector. At 60° that is √3<i>F</i>, at 90° it is √2<i>F</i>, at 120° it is exactly <i>F</i>. Adding magnitudes instead is the commonest JEE Main error in this topic.",
            "<b>Substitute numbers last, and convert units first.</b> Centimetres to metres, microcoulombs to coulombs. Right method with wrong powers of ten is the single largest source of lost marks here.",
            "<b>Run a limiting check.</b> Let a length go to zero or to infinity and see whether your expression collapses to something you already know. If a rod's force does not become <i>kqQ</i>/<i>d</i><sup>2</sup> as the rod shrinks to a point, the answer is wrong and you have found it in one line."
          ]
        },
        {
          "t": "p",
          "html": "One family of questions comes up so often that it is worth deriving once rather than solving from scratch every time: the <b>null point</b>. Two fixed charges are given, and you are asked where a third charge could sit and feel nothing at all.<br><br>Before any algebra, settle WHERE such a point can be, because that single decision eliminates most wrong answers. For two LIKE charges the point must lie between them, since anywhere outside the pair both pushes act the same way and can never cancel. For two UNLIKE charges it is the reverse: between them both pulls act the same way, so the null point must lie outside the pair, on the side of the SMALLER charge, where being closer can make up for being smaller. Only then is it worth writing an equation."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE NULL POINT BETWEEN TWO LIKE CHARGES, TAP A LINE",
          "steps": [
            {
              "eq": "put <i>q</i><sub>1</sub> at the origin and <i>q</i><sub>2</sub> a distance <i>d</i> away, both positive, and look for a point at distance <i>x</i> from <i>q</i><sub>1</sub> where a third charge feels nothing",
              "why": "The point must lie BETWEEN them. Outside the pair, both pushes act the same way and can never cancel, whatever the sizes. That one sentence eliminates half the wrong answers before any algebra."
            },
            {
              "eq": "<i>kq</i><sub>1</sub><i>q</i><sub>3</sub>/<i>x</i><sup>2</sup> = <i>kq</i><sub>2</sub><i>q</i><sub>3</sub>/(<i>d</i> − <i>x</i>)<sup>2</sup>",
              "why": "The two forces on the test charge are opposite in direction, so for zero net force their magnitudes must be equal. Everything about the test charge, its size and its sign, cancels: the null point belongs to the pair, not to whatever you put there."
            },
            {
              "eq": "(<i>d</i> − <i>x</i>)<sup>2</sup>/<i>x</i><sup>2</sup> = <i>q</i><sub>2</sub>/<i>q</i><sub>1</sub>, so (<i>d</i> − <i>x</i>)/<i>x</i> = √(<i>q</i><sub>2</sub>/<i>q</i><sub>1</sub>)",
              "why": "Take the positive square root, because x and d − x are both lengths inside the gap. The ratio of distances is the square root of the ratio of charges, which is the whole content of the result."
            },
            {
              "eq": "<i>x</i> = <i>d</i>/(1 + √(<i>q</i><sub>2</sub>/<i>q</i><sub>1</sub>))",
              "why": "Check it on the symmetric case: q2 = q1 gives x = d/2, the midpoint, as it must. And q2 = 4q1 gives x = d/3, so the null point sits nearer the SMALLER charge, one third of the way along. That is the practice question below, already answered."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.2 · THREE EQUAL CHARGES, AND WHAT HOLDS THEM",
          "chips": ["forces on one corner"],
          "captions": [
            "Charge Q at each corner of an equilateral triangle of side a. The top charge is pushed away from each of the other two, along the two sides, and the angle between those two pushes is the triangle's own interior angle, 60°. Two equal forces at 60° give a resultant 2F cos30° = √3F, directed outward along the median, which is also the line from the centroid through the corner. A negative charge q₀ placed at the centroid pulls each corner back inward; making that pull equal √3F requires q₀ = −Q/√3. The equilibrium is real but UNSTABLE: nudge one charge and nothing pushes it back."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[2, 1], [8, 1], [5, 6.196]], "close": true, "tone": "soft" }
              ],
              "segments": [
                { "from": [5, 6.196], "to": [5, 1], "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 2, "y": 1, "glyph": "plus", "tone": "ink", "label": "Q" },
                { "x": 8, "y": 1, "glyph": "plus", "tone": "ink", "label": "Q" },
                { "x": 5, "y": 6.196, "glyph": "plus", "tone": "ink" },
                { "x": 5, "y": 2.732, "glyph": "minus", "tone": "amber", "label": "q₀" }
              ],
              "arrows": [
                { "from": [5, 6.196], "to": [5.8, 7.58], "tone": "soft", "label": "F", "at": "end" },
                { "from": [5, 6.196], "to": [4.2, 7.58], "tone": "soft", "label": "F", "at": "end" },
                { "from": [5, 6.196], "to": [5, 9.1], "tone": "amber", "label": "√3F", "at": "end" }
              ],
              "labels": [
                { "x": 5, "y": 0.35, "text": "side a" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.3 · A ROD IS NOT A POINT, SO YOU SLICE IT",
          "chips": ["one element at a time"],
          "captions": [
            "A uniformly charged rod of length L and total charge Q, with a point charge q on its axis a distance d from the near end. Coulomb's law cannot be used in one shot here, because the far end of the rod is further away than the near end and the test question fails: not every part of the rod is the same distance from q. So take a slice of width dx at distance x, treat that slice as a point charge dq = λ dx, write its contribution kq dq/x², and integrate x from d to d + L. This is the only figure in the topic where every arrow would point the same way, which is the symmetry gift that makes the integral a scalar one."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 6], "axes": "none", "aspect": 0.5,
              "polys": [
                { "pts": [[5, 3.3], [11, 3.3], [11, 2.7], [5, 2.7]], "close": true, "fill": "wash", "tone": "soft" },
                { "pts": [[6.4, 3.3], [6.9, 3.3], [6.9, 2.7], [6.4, 2.7]], "close": true, "fill": "wash", "tone": "amber" }
              ],
              "marks": [
                { "x": 2, "y": 3, "glyph": "plus", "tone": "ink", "label": "q" }
              ],
              "arrows": [
                { "from": [1.6, 3.0], "to": [0.4, 3.0], "tone": "amber", "head": "end" }
              ],
              "segments": [
                { "from": [2, 1.6], "to": [5, 1.6], "soft": true, "label": "d", "at": "mid" },
                { "from": [2, 1.0], "to": [6.65, 1.0], "soft": true, "label": "x", "at": "mid" },
                { "from": [5, 0.4], "to": [11, 0.4], "soft": true, "label": "L", "at": "mid" }
              ],
              "labels": [
                { "x": 1.0, "y": 3.9, "text": "dF on q" },
                { "x": 6.65, "y": 4.0, "text": "element dx" },
                { "x": 8.6, "y": 4.8, "text": "rod, charge Q" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "Two point charges <i>q</i><sub>1</sub> = +4 μC and <i>q</i><sub>2</sub> = −6 μC are placed 30 cm apart in vacuum. Find the magnitude and the nature of the force between them. Take <i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>.",
          "steps": [
            "Convert first: <i>q</i><sub>1</sub> = 4 × 10<sup>−6</sup> C, <i>q</i><sub>2</sub> = 6 × 10<sup>−6</sup> C in magnitude, <i>r</i> = 0.30 m.",
            "Use the MAGNITUDE form, so the modulus bars take the sizes only: <i>F</i> = <i>k</i>|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)(6 × 10<sup>−6</sup>)/(0.30)<sup>2</sup>.",
            "Numerator: (9 × 10<sup>9</sup>)(24 × 10<sup>−12</sup>) = 0.216. Divide by 0.09: <i>F</i> = 2.4 N.",
            "The nature is settled separately, from the physics rather than the arithmetic: the signs are opposite, so the force is ATTRACTIVE, directed along the line joining the charges."
          ],
          "ans": "2.4 N, attractive"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "Two charges repel with force <i>F</i> when a distance <i>r</i> apart in vacuum. They are then immersed in kerosene of dielectric constant <i>K</i> = 4. By how much must their separation change so that the force returns to <i>F</i>?",
          "steps": [
            "The trap is to divide the separation by <i>K</i> and answer <i>r</i>/4. That over-corrects, because distance enters the law SQUARED while the medium enters it linearly.",
            "Work with the ratio and never compute a force. In vacuum <i>F</i> = <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup>. In kerosene at a new separation <i>r</i>′, <i>F</i>′ = <i>kq</i><sup>2</sup>/(<i>Kr</i>′<sup>2</sup>).",
            "Set <i>F</i>′ = <i>F</i>: <i>Kr</i>′<sup>2</sup> = <i>r</i><sup>2</sup>, so <i>r</i>′ = <i>r</i>/√<i>K</i> = <i>r</i>/√4 = <i>r</i>/2.",
            "Mental check: halving the distance multiplies the force by four, which exactly cancels the division by four that the medium imposed. The charges must be brought CLOSER, to half the original gap."
          ],
          "ans": "bring them to <i>r</i>/2"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Three identical charges <i>Q</i> = 2 μC sit at the corners of an equilateral triangle of side <i>a</i> = 10 cm. (a) Find the net electrostatic force on any one of them. (b) What charge <i>q</i><sub>0</sub> at the centroid would hold the whole system in equilibrium?",
          "steps": [
            "(a) One pair first: <i>F</i> = <i>kQ</i><sup>2</sup>/<i>a</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)<sup>2</sup>/(0.10)<sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−12</sup>)/0.01 = 3.6 N.",
            "A corner charge feels two such pushes, and the angle between them is the triangle's interior angle, 60°. Two equal vectors at 60° give 2<i>F</i> cos30° = √3<i>F</i> = 1.732 × 3.6 ≈ 6.2 N, directed outward along the median, away from the centroid.",
            "(b) The centroid sits a distance <i>d</i> = <i>a</i>/√3 from each vertex, so <i>d</i><sup>2</sup> = <i>a</i><sup>2</sup>/3. To cancel an OUTWARD force the centroid charge must PULL, so <i>q</i><sub>0</sub> is negative.",
            "Its force on a corner: <i>F</i><sub>0</sub> = <i>k</i>|<i>q</i><sub>0</sub>|<i>Q</i>/<i>d</i><sup>2</sup> = 3<i>k</i>|<i>q</i><sub>0</sub>|<i>Q</i>/<i>a</i><sup>2</sup>. Setting that equal to √3<i>kQ</i><sup>2</sup>/<i>a</i><sup>2</sup> gives 3|<i>q</i><sub>0</sub>| = √3<i>Q</i>, so |<i>q</i><sub>0</sub>| = <i>Q</i>/√3 = 2/1.732 ≈ 1.15 μC.",
            "Flag it, because examiners do: this equilibrium is UNSTABLE. Displace any charge slightly and nothing returns it."
          ],
          "ans": "(a) ≈ 6.2 N outward · (b) <i>q</i><sub>0</sub> ≈ −1.15 μC"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A thin rod of length <i>L</i> carries total charge <i>Q</i> spread uniformly. A point charge <i>q</i> sits on the rod's axis, a distance <i>d</i> from the NEAR end. Find the force on <i>q</i>, check the result as the rod shrinks to a point, then evaluate it for <i>q</i> = 1 μC, <i>Q</i> = 5 μC, <i>d</i> = 0.10 m, <i>L</i> = 0.30 m.",
          "steps": [
            "Every part of the rod is at a different distance, so the point-charge law is not allowed and we slice. Linear density λ = <i>Q</i>/<i>L</i>; an element of width <i>dx</i> at distance <i>x</i> from <i>q</i> carries <i>dq</i> = λ <i>dx</i>, and <i>x</i> runs from <i>d</i> to <i>d</i> + <i>L</i>.",
            "Every element pushes <i>q</i> along the same axis, so the contributions add as SCALARS with no components to resolve: <i>dF</i> = <i>kq</i> λ <i>dx</i>/<i>x</i><sup>2</sup>.",
            "Integrate: <i>F</i> = <i>kq</i>λ ∫ <i>dx</i>/<i>x</i><sup>2</sup> from <i>d</i> to <i>d</i> + <i>L</i> = <i>kq</i>λ[1/<i>d</i> − 1/(<i>d</i> + <i>L</i>)] = <i>kq</i>λ<i>L</i>/(<i>d</i>(<i>d</i> + <i>L</i>)). Substituting λ = <i>Q</i>/<i>L</i> cancels the <i>L</i>: <i>F</i> = <i>kqQ</i>/(<i>d</i>(<i>d</i> + <i>L</i>)).",
            "Limit check, the step that is worth as much as the calculus: let <i>L</i> → 0 and the rod collapses to a point at distance <i>d</i>. The formula gives <i>kqQ</i>/<i>d</i><sup>2</sup>, exactly Coulomb's law. Had it not, the integration would be wrong.",
            "Numbers: <i>F</i> = (9 × 10<sup>9</sup>)(10<sup>−6</sup>)(5 × 10<sup>−6</sup>)/((0.10)(0.40)) = (4.5 × 10<sup>−2</sup>)/(4 × 10<sup>−2</sup>) = 1.1 N. Sanity check against the point-charge answer at the same near distance, <i>kqQ</i>/<i>d</i><sup>2</sup> = 4.5 N: the real rod pulls less, because most of it is further away than <i>d</i>. That is the right direction."
          ],
          "ans": "<i>F</i> = <i>kqQ</i>/(<i>d</i>(<i>d</i> + <i>L</i>)) ≈ 1.1 N"
        },
        {
          "t": "mcq",
          "q": "Two point charges exert a force <i>F</i> on each other. If BOTH charges are doubled and the distance between them is ALSO doubled, the new force is:",
          "opts": [
            { "label": "4<i>F</i>", "nudge": "This counts the charges (a factor of 4) and forgets the distance entirely. Both changes were made, and only one of them was used here." },
            { "label": "2<i>F</i>", "nudge": "A split-the-difference guess with no physical route to it. Nothing in the law produces a bare factor of 2 from these two changes." },
            { "label": "<i>F</i>", "nudge": null },
            { "label": "<i>F</i>/4", "nudge": "The mirror-image error: this applies the distance factor (a division by 4) and ignores the charges. Apply both, and they cancel." }
          ],
          "correct": 2,
          "solution": "F is proportional to q₁q₂/r². Doubling both charges multiplies the numerator by 4, and doubling the separation multiplies the denominator by 4. The two factors cancel exactly, so the force is unchanged."
        },
        {
          "t": "mcq",
          "q": "Two charges a distance <i>r</i> apart in vacuum feel a force <i>F</i>. They are moved into a medium of dielectric constant <i>K</i>, with <i>r</i> unchanged. The new force is:",
          "opts": [
            { "label": "<i>KF</i>", "nudge": "This has the effect backwards. The medium's molecules polarise and screen the charges from each other, so the force can only get weaker, never stronger, and K is never less than 1." },
            { "label": "<i>F</i>/<i>K</i>", "nudge": null },
            { "label": "<i>F</i>/<i>K</i><sup>2</sup>", "nudge": "This gives K the same squared role that the DISTANCE has. K enters the law once, in the denominator, exactly where ε₀ sits." },
            { "label": "√<i>K</i> <i>F</i>", "nudge": "The square root of K is real but it belongs to a different question: it is the factor by which you must change the DISTANCE to restore the original force. It has no place in the force ratio itself." }
          ],
          "correct": 1,
          "solution": "Inside a material the molecules polarise and partly cancel the field between the charges, so F_med = F_vac/K, with K = ε/ε₀ at least 1. The medium can only reduce the force. Distance compensation is the separate √K result."
        },
        {
          "t": "mcq",
          "q": "A charge +<i>Q</i> and a charge +9<i>Q</i> are held a fixed distance apart. Let <i>F</i><sub>1</sub> be the force on +<i>Q</i> due to +9<i>Q</i>, and <i>F</i><sub>2</sub> the force on +9<i>Q</i> due to +<i>Q</i>. Then:",
          "opts": [
            { "label": "<i>F</i><sub>1</sub> = 9<i>F</i><sub>2</sub>", "nudge": "This comes from the intuition that the bigger charge pushes harder. The expression kq₁q₂/r² contains only the PRODUCT of the charges, which reads the same in either order." },
            { "label": "<i>F</i><sub>2</sub> = 9<i>F</i><sub>1</sub>", "nudge": "Same intuition, opposite direction, and wrong for the same reason. Newton's third law is not suspended when the two bodies are unequal." },
            { "label": "<i>F</i><sub>1</sub> = <i>F</i><sub>2</sub>", "nudge": null },
            { "label": "<i>F</i><sub>1</sub> = 3<i>F</i><sub>2</sub>", "nudge": "The 3 is √9 imported from a distance-compensation problem, where a square root genuinely appears. It has nothing to do with a pair of action-reaction forces." }
          ],
          "correct": 2,
          "solution": "Coulomb's law obeys Newton's third law exactly, as the derivation's last step shows: r̂₁₂ = −r̂₂₁, so F₁₂ = −F₂₁. The two forces are equal in size and opposite in direction however unequal the charges are. This is the same third law you met in Laws of Motion, Topic 01."
        },
        {
          "t": "mcq",
          "q": "The dimensional formula of the permittivity of free space ε<sub>0</sub> is:",
          "opts": [
            { "label": "[M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]", "nudge": null },
            { "label": "[M L<sup>3</sup> T<sup>−4</sup> A<sup>−2</sup>]", "nudge": "This is the exact reciprocal, and it is the dimensional formula of k = 1/(4πε₀). A very easy swap to make under time pressure, so check which of the two the stem is asking for." },
            { "label": "[M<sup>−1</sup> L<sup>−2</sup> T<sup>2</sup> A]", "nudge": "The powers of charge are miscounted: charge is [A T], so ε₀ must carry A² and T⁴, not A and T²." },
            { "label": "[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]", "nudge": "This is electric potential, which belongs to the next chapter. It appears here because it looks plausibly electrical, not because any reduction produces it." }
          ],
          "correct": 0,
          "solution": "Rearranging the law, ε₀ = q₁q₂/(4πFr²), so [ε₀] = [A T]²/([M L T⁻²][L²]) = [A² T²]/[M L³ T⁻²] = [M⁻¹ L⁻³ T⁴ A²]. Note that charge needs its own base dimension, the ampere: there is no way to build [A T] out of mass, length and time alone."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Two charges of +2 μC each are placed 10 cm apart in vacuum. Find the magnitude and nature of the force between them.", "a": "<i>F</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)<sup>2</sup>/(0.10)<sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−12</sup>)/0.01 = 3.6 N, repulsive, since both charges have the same sign." },
            { "q": "[NEET] The force between two point charges in air is <i>F</i>. Without changing the charges or their separation, they are placed in a medium of dielectric constant <i>K</i> = 3. What is the new force?", "a": "<i>F</i>/3. The medium screens the interaction and can only weaken it. If the question had instead asked how to restore <i>F</i>, the answer would involve √3, not 3." },
            { "q": "[JEE Main] Charges +<i>q</i> and +4<i>q</i> are fixed a distance <i>d</i> apart. At what distance from +<i>q</i>, along the line joining them, should a third charge be placed so that it feels zero net force?", "a": "Between them, at <i>x</i> = <i>d</i>/(1 + √(4<i>q</i>/<i>q</i>)) = <i>d</i>/(1 + 2) = <i>d</i>/3 from +<i>q</i>. Nearer the smaller charge, as it must be, and the third charge's own size and sign never entered." },
            { "q": "[JEE Main] A total charge <i>Q</i> is split into two parts held a fixed distance apart. For the force between the two parts to be MAXIMUM, what should the ratio of the parts be?", "a": "Let the parts be <i>x</i> and <i>Q</i> − <i>x</i>. The force goes as the product <i>x</i>(<i>Q</i> − <i>x</i>), which is largest at <i>x</i> = <i>Q</i>/2. So the ratio is 1 : 1, each part <i>Q</i>/2." },
            { "q": "[JEE Advanced] Four equal charges <i>q</i> sit at the corners of a square of side <i>a</i>. Find the magnitude of the net force on any one corner charge.", "a": "The two adjacent charges are at distance <i>a</i> and push at right angles, giving √2 <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup> along the diagonal. The diagonal charge is at <i>a</i>√2, contributing <i>kq</i><sup>2</sup>/(2<i>a</i><sup>2</sup>) along the same line. Total <i>F</i> = (<i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>)(√2 + 1/2) ≈ 1.91 <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>, outward along the diagonal." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Putting signs into a magnitude calculation.</b> When you only want the SIZE of a force, use |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>| and settle attraction or repulsion separately from the physics. Signs belong in the VECTOR form. Mixing the two produces a negative force, which is not a thing.",
            "<b>Adding forces like numbers.</b> With three or more charges the individual Coulomb forces are vectors. Two equal forces at 60° give √3<i>F</i>, not 2<i>F</i>; at 120° they give exactly <i>F</i>. Summing magnitudes is the single most common error this topic collects.",
            "<b>Confusing <i>K</i> with √<i>K</i>.</b> The force scales as 1/<i>K</i>. The DISTANCE you would need in order to restore the force scales as 1/√<i>K</i>. Read which of the two the question wants before writing anything down.",
            "<b>Forgetting to convert.</b> Distances arrive in centimetres, charges in μC or nC. One centimetre is 10<sup>−2</sup> m and one microcoulomb is 10<sup>−6</sup> C. Right method, wrong power of ten is how most of the marks in this topic are actually lost.",
            "<b>Using the point-charge law on an extended body.</b> Ask the Gravitation test question first: is every part of this body the same distance away? For a rod, a ring or a plate the answer is no, and no amount of algebra rescues it. You slice and integrate, which is Topic 04."
          ]
        },
        {
          "t": "protip",
          "html": "one number will save you repeatedly: two charges of 1 C each, 1 m apart, would repel with 9 × 10<sup>9</sup> N, which is roughly the weight of a million tonnes. so a coulomb is an absurd amount of static charge, and if a problem hands you charges in coulombs rather than microcoulombs, expect either a trick or a typo. beyond that, never compute each force fully first. write everything as a multiple of one reference <i>F</i><sub>0</sub> = <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>, do the geometry in symbols, and substitute at the very end. and finish every derived expression with a limiting check, the way the rod collapses to <i>kqQ</i>/<i>d</i><sup>2</sup>: if it does not reduce to something you already know, it is wrong, and you have just found out cheaply."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>F</i> = <i>k</i>|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>, <i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>", "note": "point charges, at rest, in vacuum or air" },
            { "f": "<i>F</i><sub>21</sub> = <i>k</i>(<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) r̂<sub>21</sub>", "note": "signs in, and the algebra gives attraction or repulsion" },
            { "f": "ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>", "note": "[ε₀] = [M⁻¹ L⁻³ T⁴ A²]; [k] is its exact reciprocal" },
            { "f": "<i>F</i><sub>med</sub> = <i>F</i><sub>vac</sub>/<i>K</i>, restore with <i>r</i>′ = <i>r</i>/√<i>K</i>", "note": "K is never less than 1, so a medium only ever weakens" },
            { "f": "net force = VECTOR sum of the pairwise forces", "note": "two equal forces at 60°, 90°, 120° give √3F, √2F, F" },
            { "f": "null point of two like charges: <i>x</i> = <i>d</i>/(1 + √(<i>q</i><sub>2</sub>/<i>q</i><sub>1</sub>))", "note": "always BETWEEN them, and nearer the smaller charge" }
          ],
          "aids": [
            "\"product up, distance squared down\"",
            "\"the medium divides by K, the distance by root K\"",
            "\"forces are vectors, never just add the numbers\"",
            "\"one coulomb at one metre is a million tonnes\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Electric Field and Dipoles",
      "chip": "03 FIELD",
      "kalam": "the field is there whether or not you test it",
      "blocks": [
        {
          "t": "p",
          "html": "Coulomb's law told you the force BETWEEN two charges, and something about that is quietly uncomfortable. How does one charge know that another is sitting three metres away? They never touch, and nothing visible passes between them. Physicists resolved the discomfort with one of the great ideas in all of science: the <b>field</b>.<br><br>The trick is to split the interaction into two stages. A charge does not reach out and grab another charge. Instead it <b>modifies the space around itself</b>, setting up an electric field everywhere, a kind of invisible tension filling the region. Any second charge that wanders in simply responds to the field AT ITS OWN LOCATION. Neither charge ever needs to know the other exists; each deals only with the field where it happens to be standing."
        },
        {
          "t": "think",
          "html": "picture a still pond. drop a stone and ripples spread out across the whole surface. a leaf floating far away starts bobbing, not because it feels the stone, but because it responds to the ripple that has arrived at its own spot. the stone made the disturbance, the leaf reacts to the local disturbance. the electric field is that ever-present disturbance a charge leaves in the space around it, and it is still there on a day when nobody drops a leaf in to check."
        },
        {
          "t": "p",
          "html": "You have already built this idea once. <b>Gravitation, Topic 02</b> defined the gravitational field intensity as force per unit mass, <i>g</i> = <i>F</i>/<i>m</i>, and made exactly the same argument: the field belongs to the source and exists whether or not anything is placed in it. Change one word and you have electrostatics. Define the electric field <i>E</i> at a point as the force per unit POSITIVE charge that a tiny test charge <i>q</i><sub>0</sub> would feel there, <i>E</i> = <i>F</i>/<i>q</i><sub>0</sub>. Fields superpose exactly as forces do, because they are forces divided by a number: the field of many sources is the vector sum of the individual fields.<br><br>Two consequences follow from the sign convention fixed in Topic 01 and they are worth stating as separate facts, because students merge them and lose marks. <b>The direction of a field is decided by the sign of its SOURCE</b>, away from positive and toward negative. <b>The direction a charge MOVES is decided by its own sign</b>: a positive charge accelerates along <i>E</i>, a negative charge against it. The field does not change when you swap the test charge; only the response does."
        },
        {
          "t": "p",
          "html": "The picture that makes a field visible is the <b>field line</b>, and its rules are pure examination material. The tangent at any point gives the direction of the field there. Lines run from positive charge to negative charge and NEVER begin or end in empty space. Where they crowd together the field is strong, and where they spread apart it is weak. And two field lines can never cross, because at a crossing point the field would have to have two directions at once, which is not a thing a vector can do. That last rule is the one examiners set most often, usually inside a which-of-these-is-incorrect stem."
        },
        {
          "t": "p",
          "html": "Now meet an arrangement that looks trivial and is not: two equal and opposite charges, +<i>q</i> and −<i>q</i>, held a small distance 2<i>a</i> apart. That is an <b>electric dipole</b>. Its total charge is exactly zero, and yet dipoles run half of chemistry and much of biology. A water molecule is a dipole. Every cell membrane in your body carries a dipole layer. The behaviour of any insulator in a field is the collective behaviour of countless tiny dipoles.<br><br>The quantity that describes one is the <b>dipole moment</b> <i>p</i>, a vector of magnitude <i>p</i> = <i>q</i> × 2<i>a</i> pointing FROM the negative charge TO the positive charge. It packages how much charge and how far apart into a single arrow, and that is not just tidiness: two molecules with the same <i>p</i> behave identically at a distance, even if one has large charges close together and the other small charges far apart. From far away the dipole moment is the only thing about the dipole that survives."
        },
        {
          "t": "think",
          "html": "a dipole is a compass needle made of charge. drop a compass needle into the earth's magnetic field and it does not get dragged across the table, it swings round to line up. a dipole in a uniform electric field does exactly this: the two ends feel equal and opposite pushes, so there is no net shove at all, only a twist. and the moment the field stops being uniform, the two ends sit in slightly different fields, the pushes no longer cancel, and a real net force appears. that is how a charged comb picks up neutral paper."
        },
        {
          "t": "def",
          "term": "The four places this topic's formulas quietly stop working",
          "html": "<b>One, the test charge must be vanishingly small.</b> A real test charge exerts its own force back on the source and rearranges it, so the definition is strictly a limit, <i>E</i> = lim(<i>F</i>/<i>q</i><sub>0</sub>) as <i>q</i><sub>0</sub> → 0. <b>Two, the compact dipole formulas hold only far away.</b> Both 2<i>kp</i>/<i>r</i><sup>3</sup> and <i>kp</i>/<i>r</i><sup>3</sup> assume <i>r</i> is much larger than <i>a</i>. Close in you must go back to the exact two-charge expressions, or to adding the two Coulomb fields as vectors. <b>Three, zero net force needs a UNIFORM field.</b> In a non-uniform field the two ends sit in different fields, a net force <i>F</i> = <i>p</i> d<i>E</i>/d<i>r</i> survives, and it points toward the stronger field when <i>p</i> is aligned with <i>E</i>. <b>Four, the energy expression <i>U</i> = −<i>pE</i> cos θ measures from the θ = 90° position,</b> which is the chosen zero. Nothing physical depends on that choice, but every number you quote for <i>U</i> does, so say which zero you are using. Potential energy properly belongs to Chapter 02; here it is a result to use, not one this chapter derives."
        },
        {
          "t": "defgrid",
          "title": "The field and the dipole, in one table",
          "rows": [
            { "k": "Electric field", "v": "<i>E</i> = <i>F</i>/<i>q</i><sub>0</sub>, unit N/C, which is the same as V/m. Dimensions [M L T<sup>−3</sup> A<sup>−1</sup>]" },
            { "k": "Field of a point charge", "v": "<i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>, away from +<i>Q</i> and toward −<i>Q</i>. A vector, unlike charge itself" },
            { "k": "Dipole moment", "v": "<i>p</i> = <i>q</i> × 2<i>a</i>, unit C m, dimensions [L T A]. Points from −<i>q</i> to +<i>q</i>" },
            { "k": "Axial field", "v": "<i>E</i><sub>a</sub> = 2<i>kp</i>/<i>r</i><sup>3</sup> for <i>r</i> ≫ <i>a</i>, directed ALONG <i>p</i>" },
            { "k": "Equatorial field", "v": "<i>E</i><sub>e</sub> = <i>kp</i>/<i>r</i><sup>3</sup> for <i>r</i> ≫ <i>a</i>, directed OPPOSITE to <i>p</i>. So <i>E</i><sub>a</sub> = 2<i>E</i><sub>e</sub>" },
            { "k": "Torque and energy", "v": "τ = <i>pE</i> sin θ, unit N m; <i>U</i> = −<i>pE</i> cos θ, unit J. Both zero at θ = 0 for the torque, minimum at θ = 0 for the energy" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE FIELD, DEFINED AND EVALUATED",
          "tag": "force per unit positive charge, and it exists with nothing in it",
          "main": "<i>E</i> = <i>F</i>/<i>q</i><sub>0</sub>, so <i>F</i> = <i>q</i><sub>0</sub><i>E</i><br>point charge: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>, away from +<i>Q</i>, toward −<i>Q</i>",
          "legend": [
            "<i>E</i> = electric field at the point (N/C or V/m); <i>F</i> = force the test charge feels there (N)",
            "<i>q</i><sub>0</sub> = the test charge (C), taken vanishingly small so it does not disturb the source",
            "<i>Q</i> = the source charge (C), <i>r</i> = distance from the source to the point (m), <i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>"
          ],
          "note": "Fields superpose as vectors, exactly as forces do. The direction of E comes from the sign of Q; the direction a test charge MOVES comes from the sign of the test charge. Keep those two apart and half this topic's traps disappear."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DIPOLE FIELD, EXACT AND FAR",
          "main": "axial: <i>E</i><sub>a</sub> = 2<i>kpr</i>/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup> → 2<i>kp</i>/<i>r</i><sup>3</sup> when <i>r</i> ≫ <i>a</i><br>equatorial: <i>E</i><sub>e</sub> = <i>kp</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup> → <i>kp</i>/<i>r</i><sup>3</sup> when <i>r</i> ≫ <i>a</i>",
          "legend": [
            "<i>p</i> = <i>q</i> × 2<i>a</i>, the dipole moment (C m), pointing from the negative charge to the positive one",
            "<i>a</i> = HALF the separation of the charges (m), so the full separation is 2<i>a</i>; <i>r</i> = distance from the dipole's centre (m)",
            "<i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>. The axial field points along <i>p</i>, the equatorial field points against it"
          ],
          "note": "Both far forms fall as 1/r³, one power faster than a point charge's 1/r². That is the single most tested fact in this topic: at a distance the two opposite charges very nearly cancel, and only a residual survives. A dipole is a weaker long-range object than a bare charge, not a stronger one."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TORQUE, ENERGY, AND THE FORCE THAT ONLY EXISTS IN A NON-UNIFORM FIELD",
          "main": "τ = <i>p</i> × <i>E</i>, magnitude τ = <i>pE</i> sin θ<br><i>U</i> = −<i>p</i> · <i>E</i> = −<i>pE</i> cos θ, and <i>W</i> = <i>pE</i>(cos θ<sub>1</sub> − cos θ<sub>2</sub>)<br>non-uniform field: <i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i>",
          "legend": [
            "τ = torque on the dipole (N m); <i>p</i> = dipole moment (C m); <i>E</i> = the external field (N/C)",
            "θ = angle from <i>p</i> to <i>E</i>; <i>U</i> = potential energy (J), zero at θ = 90°; <i>W</i> = work you must do to turn it from θ<sub>1</sub> to θ<sub>2</sub> (J)",
            "d<i>E</i>/d<i>x</i> = how fast the field changes along the dipole's own direction (N/C per m), so <i>F</i> is in newtons"
          ],
          "note": "The cross product and the dot product are the ones from Vector Algebra, Topics 03 and 04, used and not re-derived. Torque is maximum at 90° and zero at both 0° and 180°, but only 0° is STABLE: it is the minimum of U, and a nudge is pushed back. At 180° the torque is zero too, and any nudge swings it right round."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIELD LINES · WHAT THE PICTURE IS ALLOWED TO DO",
          "chips": ["one positive charge", "a dipole"],
          "captions": [
            "A single positive charge. The lines run radially outward in every direction, and they thin out with distance, which is the inverse-square law drawn rather than written: the same number of lines is spread over a sphere whose area grows as r². Reverse every arrow and you have a negative charge. Nothing here starts or stops in empty space; the lines shown simply run off the edge of the picture and end on whatever negative charge the universe eventually provides.",
            "A dipole. Every line leaves the positive charge and arrives on the negative one, which is the rule in its purest form. Note two things a question will ask about. Along the axis, outside the pair, the lines run the same way as p. Along the perpendicular bisector, between the charges, they run OPPOSITE to p, which is exactly why the equatorial field is antiparallel while the axial field is parallel. And nowhere do two lines cross."
          ],
          "frames": [
            {
              "x": [-5, 5], "y": [-3.575, 3.575], "axes": "none", "aspect": 0.7204,
              "marks": [
                { "x": 0, "y": 0, "glyph": "plus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [0.5, 0], "to": [3.0, 0], "tone": "soft" },
                { "from": [0.354, 0.354], "to": [2.12, 2.12], "tone": "soft" },
                { "from": [0, 0.5], "to": [0, 3.0], "tone": "soft" },
                { "from": [-0.354, 0.354], "to": [-2.12, 2.12], "tone": "soft" },
                { "from": [-0.5, 0], "to": [-3.0, 0], "tone": "soft" },
                { "from": [-0.354, -0.354], "to": [-2.12, -2.12], "tone": "soft" },
                { "from": [0, -0.5], "to": [0, -3.0], "tone": "soft" },
                { "from": [0.354, -0.354], "to": [2.12, -2.12], "tone": "soft" }
              ],
              "labels": [
                { "x": -3.6, "y": 2.9, "text": "lines point away" }
              ]
            },
            {
              "x": [-5, 5], "y": [-3.575, 3.575], "axes": "none", "aspect": 0.7204,
              "marks": [
                { "x": -1.5, "y": 0, "glyph": "minus", "tone": "ink" },
                { "x": 1.5, "y": 0, "glyph": "plus", "tone": "ink" }
              ],
              "curves": [
                { "c": "pts", "smooth": true, "soft": true, "pts": [[1.42, 0.36], [1.15, 0.80], [0.75, 1.10], [0.30, 1.25], [0, 1.28], [-0.30, 1.25], [-0.75, 1.10], [-1.15, 0.80], [-1.42, 0.36]] },
                { "c": "pts", "smooth": true, "soft": true, "pts": [[1.48, 0.55], [1.10, 1.30], [0.65, 1.85], [0.25, 2.10], [0, 2.15], [-0.25, 2.10], [-0.65, 1.85], [-1.10, 1.30], [-1.48, 0.55]] },
                { "c": "pts", "smooth": true, "soft": true, "pts": [[1.42, -0.36], [1.15, -0.80], [0.75, -1.10], [0.30, -1.25], [0, -1.28], [-0.30, -1.25], [-0.75, -1.10], [-1.15, -0.80], [-1.42, -0.36]] },
                { "c": "pts", "smooth": true, "soft": true, "pts": [[1.48, -0.55], [1.10, -1.30], [0.65, -1.85], [0.25, -2.10], [0, -2.15], [-0.25, -2.10], [-0.65, -1.85], [-1.10, -1.30], [-1.48, -0.55]] }
              ],
              "arrows": [
                { "from": [1.1, 0], "to": [-1.1, 0], "tone": "soft" },
                { "from": [-1.5, -3.0], "to": [1.5, -3.0], "tone": "amber", "label": "p" }
              ],
              "labels": [
                { "x": -2.6, "y": 0, "text": "−q" },
                { "x": 2.6, "y": 0, "text": "+q" },
                { "x": 0, "y": 3.0, "text": "no two lines cross" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE AXIAL FIELD OF A DIPOLE, TAP A LINE",
          "steps": [
            {
              "eq": "put −<i>q</i> at <i>A</i> and +<i>q</i> at <i>B</i>, separation 2<i>a</i>, centre <i>O</i>. Take <i>P</i> on the axis, a distance <i>r</i> from <i>O</i>, on the +<i>q</i> side",
              "why": "Everything here is one-dimensional. Both fields at P lie along the same line, which is what makes this the easier of the two derivations and the one to attempt first in an examination."
            },
            {
              "eq": "<i>E</i><sub>+</sub> = <i>kq</i>/(<i>r</i> − <i>a</i>)<sup>2</sup>, pointing AWAY from +<i>q</i>, and <i>E</i><sub>−</sub> = <i>kq</i>/(<i>r</i> + <i>a</i>)<sup>2</sup>, pointing TOWARD −<i>q</i>",
              "why": "Straight from the sign convention. P is nearer the positive charge, so r − a is the smaller distance and E₊ is the larger field. The two point in opposite directions along the axis."
            },
            {
              "eq": "<i>E</i><sub>axial</sub> = <i>E</i><sub>+</sub> − <i>E</i><sub>−</sub> = <i>kq</i>[1/(<i>r</i> − <i>a</i>)<sup>2</sup> − 1/(<i>r</i> + <i>a</i>)<sup>2</sup>]",
              "why": "Antiparallel vectors subtract. The result is positive, meaning the net field points along p, because the nearer charge always wins."
            },
            {
              "eq": "combine the fractions: (<i>r</i> + <i>a</i>)<sup>2</sup> − (<i>r</i> − <i>a</i>)<sup>2</sup> = 4<i>ar</i>, over (<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup>, giving <i>E</i><sub>axial</sub> = 2<i>kpr</i>/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup>",
              "why": "The numerator kq · 4ar is rewritten as 2k(q · 2a)r = 2kpr, which is where the dipole moment appears for the first time. Notice it arrives on its own; nobody put it in by hand."
            },
            {
              "eq": "for <i>r</i> ≫ <i>a</i>, <i>r</i><sup>2</sup> − <i>a</i><sup>2</sup> ≈ <i>r</i><sup>2</sup>, so <i>E</i><sub>axial</sub> = 2<i>kp</i>/<i>r</i><sup>3</sup>, directed along <i>p</i>",
              "why": "The limiting check that matters. The field falls as 1/r³, not 1/r², and the reason is physical rather than algebraic: at a distance the two opposite charges almost cancel and only what is left over survives. If your working ever produces a dipole field going as 1/r², you have dropped a term."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE EQUATORIAL FIELD, AND THE FACTOR OF TWO",
          "steps": [
            {
              "eq": "put <i>P</i> on the perpendicular bisector, a distance <i>r</i> from <i>O</i>. Each charge is then the same distance √(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>) from <i>P</i>",
              "why": "That equality is the whole reason this derivation is different from the axial one: the two field magnitudes come out identical, and only their directions differ."
            },
            {
              "eq": "<i>E</i><sub>+</sub> = <i>E</i><sub>−</sub> = <i>kq</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)",
              "why": "Same charge magnitude, same distance, so same field size. E₊ points away from +q and E₋ points toward −q, so the two arrows splay out symmetrically about the perpendicular."
            },
            {
              "eq": "resolve each into a component along the dipole axis and one perpendicular to it. The perpendicular components CANCEL; the axial components ADD, both pointing opposite to <i>p</i>",
              "why": "This is the symmetry step, and it is worth more marks than the algebra that follows. Recognising which components die is the skill the next topic is built on."
            },
            {
              "eq": "with cos θ = <i>a</i>/√(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>): <i>E</i><sub>eq</sub> = 2<i>E</i><sub>+</sub> cos θ = <i>kq</i>(2<i>a</i>)/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup> = <i>kp</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup>",
              "why": "The two surviving components are each E₊cos θ, and the geometry supplies cos θ from the right triangle with legs a and r. Again q · 2a assembles itself into p."
            },
            {
              "eq": "for <i>r</i> ≫ <i>a</i>: <i>E</i><sub>eq</sub> = <i>kp</i>/<i>r</i><sup>3</sup>, opposite to <i>p</i>, so <i>E</i><sub>axial</sub> = 2<i>E</i><sub>eq</sub> at the same distance",
              "why": "Two facts, and examiners test them together: the sizes differ by exactly a factor of two, and the directions are opposite, axial along p and equatorial against it. Students routinely remember one of the two and are marked on the other."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURES 1.4 AND 1.5 · THE SAME DIPOLE, SEEN TWO WAYS",
          "chips": ["end-on (axial)", "broadside-on (equatorial)"],
          "captions": [
            "Point P sits on the axis, beyond the positive charge, a distance r from the centre O. The positive charge is nearer, at r − a, so its field E₊ is the larger of the two and points away from it, along p. The negative charge is further, at r + a, and its field E₋ points back toward it, against p. The two are antiparallel, so they SUBTRACT, and what survives points along p.",
            "The same dipole, with P now on the perpendicular bisector. Both charges are the same distance √(r² + a²) away, so E₊ and E₋ have equal magnitudes. Their components perpendicular to the axis cancel exactly; their components along the axis both point from the +q side toward the −q side, so they add. The resultant E is antiparallel to p, and at the same large r it is exactly half the axial value."
          ],
          "frames": [
            {
              "x": [0, 12], "y": [0, 6], "axes": "none", "aspect": 0.5,
              "points": [
                { "x": 3.5, "y": 3, "label": "O", "at": "sw" },
                { "x": 10, "y": 3, "label": "P", "at": "se" }
              ],
              "marks": [
                { "x": 2, "y": 3, "glyph": "minus", "tone": "ink", "label": "A" },
                { "x": 5, "y": 3, "glyph": "plus", "tone": "ink", "label": "B" }
              ],
              "arrows": [
                { "from": [2, 2.1], "to": [5, 2.1], "tone": "amber", "label": "p", "at": "end" },
                { "from": [10.3, 3], "to": [11.6, 3], "tone": "ink", "label": "E₊" },
                { "from": [9.7, 3], "to": [8.4, 3], "tone": "soft", "label": "E₋" }
              ],
              "segments": [
                { "from": [2, 1.3], "to": [3.5, 1.3], "soft": true, "label": "a", "at": "mid" },
                { "from": [3.5, 1.3], "to": [5, 1.3], "soft": true, "label": "a", "at": "mid" },
                { "from": [3.5, 0.6], "to": [10, 0.6], "soft": true, "label": "r", "at": "mid" }
              ]
            },
            {
              "x": [0, 12], "y": [0, 7], "axes": "none", "aspect": 0.6,
              "points": [
                { "x": 5, "y": 1.5, "label": "O", "at": "sw" },
                { "x": 5, "y": 5.5, "label": "P", "at": "ne" }
              ],
              "marks": [
                { "x": 3, "y": 1.5, "glyph": "minus", "tone": "ink", "label": "A" },
                { "x": 7, "y": 1.5, "glyph": "plus", "tone": "ink", "label": "B" }
              ],
              "segments": [
                { "from": [3, 1.5], "to": [5, 5.5], "dash": true, "soft": true },
                { "from": [7, 1.5], "to": [5, 5.5], "dash": true, "soft": true },
                { "from": [5, 1.5], "to": [5, 5.5], "dash": true, "soft": true, "label": "r", "at": "mid" }
              ],
              "arrows": [
                { "from": [5, 5.5], "to": [4.285, 6.93], "tone": "soft", "label": "E₊", "at": "end" },
                { "from": [5, 5.5], "to": [4.285, 4.07], "tone": "soft", "label": "E₋", "at": "end" },
                { "from": [5, 5.5], "to": [3.4, 5.5], "tone": "amber", "label": "E" },
                { "from": [3, 0.35], "to": [7, 0.35], "tone": "amber", "label": "p", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TORQUE ON A DIPOLE IN A UNIFORM FIELD",
          "steps": [
            {
              "eq": "in a uniform field <i>E</i>, the charge +<i>q</i> feels +<i>qE</i> and the charge −<i>q</i> feels −<i>qE</i>, so the net force is exactly zero",
              "why": "Equal magnitudes, opposite directions, and the field is the same at both ends because it is uniform. The dipole cannot translate. That is a genuine result and not an approximation."
            },
            {
              "eq": "the two forces do not share a line of action, so they form a COUPLE",
              "why": "A couple is the object from Rotational Motion, Topic 03: two equal opposite parallel forces whose lines of action do not coincide, giving zero net force and a turning effect that comes out the same about every point you take moments about. Nothing about couples needs to be re-derived here."
            },
            {
              "eq": "with the dipole axis at angle θ to <i>E</i>, the perpendicular distance between the two lines of action is 2<i>a</i> sin θ",
              "why": "Drop a perpendicular from one charge onto the other's line of action. The hypotenuse is the full separation 2a and the angle at the centre is θ, so the perpendicular leg is 2a sin θ. At θ = 0 the two forces share a line and the distance vanishes."
            },
            {
              "eq": "τ = (force) × (perpendicular distance) = (<i>qE</i>)(2<i>a</i> sin θ) = (<i>q</i> · 2<i>a</i>)<i>E</i> sin θ = <i>pE</i> sin θ, and in vectors τ = <i>p</i> × <i>E</i>",
              "why": "The cross product carries both the magnitude pE sin θ and the axis of the twist, which is perpendicular to both p and E. Vector Algebra, Topic 04 supplies it; nothing new is needed."
            },
            {
              "eq": "τ is maximum at θ = 90° and zero at θ = 0° and θ = 180°, but only θ = 0° is STABLE",
              "why": "Compare the energies. U = −pE cos θ is a minimum, −pE, at θ = 0, so a nudge is pushed back. At θ = 180° the energy is a maximum, +pE, so the same nudge swings the dipole right round. Zero torque and stable equilibrium are two different statements, and a question that asks for the stable orientation is not asking where the torque vanishes."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.6 · A COUPLE, NOT A PUSH",
          "chips": ["the twist on a tilted dipole"],
          "captions": [
            "A dipole at angle θ to a uniform field. The positive end is pulled along E with force qE, the negative end is pulled against it with the same force, and because the field is the same everywhere the two forces are exactly equal in size. Their vector sum is zero, so the dipole does not drift anywhere. But they act on different lines, separated perpendicular to themselves by 2a sinθ, and that is a couple: it turns the dipole without moving it. The turning effect is qE times that perpendicular distance, which is pE sinθ, and it dies to nothing when θ reaches zero and the two forces finally share one line."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "arrows": [
                { "from": [0.4, 6.3], "to": [9.6, 6.3], "tone": "soft", "label": "E" },
                { "from": [0.4, 3.5], "to": [9.6, 3.5], "tone": "soft" },
                { "from": [0.4, 0.7], "to": [9.6, 0.7], "tone": "soft" },
                { "from": [3.928, 2.6], "to": [6.072, 4.4], "tone": "ink", "label": "p", "at": "mid" },
                { "from": [6.072, 4.4], "to": [7.9, 4.4], "tone": "amber", "label": "qE" },
                { "from": [3.928, 2.6], "to": [2.1, 2.6], "tone": "amber", "label": "qE" }
              ],
              "marks": [
                { "x": 3.928, "y": 2.6, "glyph": "minus", "tone": "ink" },
                { "x": 6.072, "y": 4.4, "glyph": "plus", "tone": "ink" }
              ],
              "segments": [
                { "from": [3.928, 2.6], "to": [3.928, 4.4], "dash": true, "soft": true, "label": "2a sinθ", "at": "start" }
              ],
              "arcs": [
                { "at": [5, 3.5], "r": 0.9, "from": 0, "to": 40, "label": "θ", "tone": "amber" }
              ],
              "labels": [
                { "x": 5, "y": 0.2, "text": "no net force, only a twist" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading any dipole orientation question",
          "steps": [
            "<b>Draw <i>p</i> from minus to plus, and draw <i>E</i>, and mark θ between them.</b> Everything in this topic is a function of that one angle, and half the wrong answers come from measuring it from the wrong end of the dipole.",
            "<b>Torque question: use τ = <i>pE</i> sin θ.</b> Maximum at 90°, zero at 0° and 180°. The net FORCE is zero at every angle, provided the field is uniform, and a question that gives you a uniform field and asks for the net force is asking you to write zero with confidence.",
            "<b>Energy or work question: use <i>U</i> = −<i>pE</i> cos θ.</b> Work done BY YOU to turn the dipole from θ<sub>1</sub> to θ<sub>2</sub> is <i>U</i><sub>2</sub> − <i>U</i><sub>1</sub> = <i>pE</i>(cos θ<sub>1</sub> − cos θ<sub>2</sub>). Turning away from θ = 0 always costs positive work; check the sign of your answer against that.",
            "<b>Stability question: it is the minimum of <i>U</i>, not the zero of τ.</b> θ = 0 with <i>p</i> along <i>E</i> is stable at <i>U</i> = −<i>pE</i>. θ = 180° is unstable at <i>U</i> = +<i>pE</i>. Both have zero torque, so torque alone cannot tell them apart.",
            "<b>If the field is NOT uniform, expect a net force as well as a torque.</b> Use <i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i>, which points toward the stronger field when <i>p</i> is aligned with <i>E</i>. This is the mechanism behind every charged-object-attracts-neutral-scrap demonstration."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A point charge <i>Q</i> = +4 μC sets up an electric field. (a) Find the field magnitude at a point 20 cm away. (b) What force acts on a charge <i>q</i><sub>0</sub> = −3 nC placed at that point, and in which direction?",
          "steps": [
            "(a) <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)/(0.20)<sup>2</sup> = (3.6 × 10<sup>4</sup>)/(0.04) = 9 × 10<sup>5</sup> N/C.",
            "Direction of the FIELD: radially outward, away from the positive source. That is fixed by <i>Q</i>'s sign and by nothing else.",
            "(b) <i>F</i> = |<i>q</i><sub>0</sub>|<i>E</i> = (3 × 10<sup>−9</sup>)(9 × 10<sup>5</sup>) = 2.7 × 10<sup>−3</sup> N.",
            "Direction of the FORCE: the test charge is negative, so the force is OPPOSITE to <i>E</i>, that is, back toward <i>Q</i>. The field still points outward; only the response reverses."
          ],
          "ans": "(a) 9 × 10<sup>5</sup> N/C outward · (b) 2.7 × 10<sup>−3</sup> N toward <i>Q</i>"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "At a fixed distance <i>r</i> ≫ <i>a</i> from a short dipole, the axial field is <i>E</i><sub>a</sub> = 1.8 × 10<sup>4</sup> N/C. What is the equatorial field at the same distance, and in which direction relative to <i>p</i>?",
          "steps": [
            "No formula needs to be evaluated. Both far fields carry the same <i>kp</i>/<i>r</i><sup>3</sup>, and the only difference is the factor of two: <i>E</i><sub>a</sub> = 2<i>E</i><sub>e</sub>.",
            "<i>E</i><sub>e</sub> = <i>E</i><sub>a</sub>/2 = (1.8 × 10<sup>4</sup>)/2 = 9 × 10<sup>3</sup> N/C.",
            "Direction: the equatorial field is ANTIPARALLEL to <i>p</i>, while the axial field is parallel to it. Half the marks in a question like this sit in that second sentence, and students who remember the 2 routinely forget the direction."
          ],
          "ans": "9 × 10<sup>3</sup> N/C, antiparallel to <i>p</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A dipole of moment <i>p</i> = 5 × 10<sup>−9</sup> C m sits in a uniform field <i>E</i> = 2 × 10<sup>4</sup> N/C. (a) Find the torque when <i>p</i> makes 30° with <i>E</i>. (b) Find the work needed to turn the dipole from its stable equilibrium position to θ = 90°.",
          "steps": [
            "(a) τ = <i>pE</i> sin θ = (5 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>) sin 30° = (10<sup>−4</sup>)(0.5) = 5 × 10<sup>−5</sup> N m.",
            "(b) Stable equilibrium is θ<sub>1</sub> = 0°, where <i>p</i> lies along <i>E</i>. The target is θ<sub>2</sub> = 90°.",
            "<i>W</i> = <i>pE</i>(cos θ<sub>1</sub> − cos θ<sub>2</sub>) = <i>pE</i>(cos 0° − cos 90°) = <i>pE</i>(1 − 0) = <i>pE</i>.",
            "<i>W</i> = (5 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>) = 1 × 10<sup>−4</sup> J. Sign check: turning AWAY from the stable position should cost you positive work, and it does. Had the answer come out negative, an angle would have been swapped."
          ],
          "ans": "(a) τ = 5 × 10<sup>−5</sup> N m · (b) <i>W</i> = 1 × 10<sup>−4</sup> J"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A short dipole of moment <i>p</i> = 4.0 × 10<sup>−9</sup> C m lies along the <i>x</i>-axis, pointing in the +<i>x</i> direction, in the non-uniform field <i>E</i> = <i>E</i><sub>0</sub>(1 + α<i>x</i>) along +<i>x</i>, with <i>E</i><sub>0</sub> = 5.0 × 10<sup>4</sup> N/C and α = 2.0 per metre. Find the torque on the dipole and the net force on it.",
          "steps": [
            "Torque first, because it is the one line that is free: <i>p</i> is parallel to <i>E</i> everywhere along the axis, so θ = 0 and τ = <i>pE</i> sin 0° = 0. The dipole has no tendency to turn.",
            "Net force is where the non-uniformity bites. In a uniform field it would be exactly zero; here the two ends sit in slightly different fields and the cancellation is incomplete.",
            "The gradient: d<i>E</i>/d<i>x</i> = <i>E</i><sub>0</sub>α = (5.0 × 10<sup>4</sup>)(2.0) = 1.0 × 10<sup>5</sup> N/C per metre. Note it is a constant here, so the answer does not depend on where the dipole sits.",
            "<i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i> = (4.0 × 10<sup>−9</sup>)(1.0 × 10<sup>5</sup>) = 4.0 × 10<sup>−4</sup> N, directed along +<i>x</i>, which is toward the STRONGER field.",
            "Sanity check on the direction, without any algebra: the positive end sits at larger <i>x</i> where the field is stronger, so it is pulled forward harder than the negative end is pulled back. The dipole is dragged toward the strong-field region. Reverse the dipole and the force reverses with it."
          ],
          "ans": "τ = 0 · <i>F</i> = 4.0 × 10<sup>−4</sup> N toward the stronger field"
        },
        {
          "t": "mcq",
          "q": "Which statement about electric field lines is INCORRECT?",
          "opts": [
            { "label": "the tangent to a field line gives the direction of the field there", "nudge": "This is a correct property, and it is the definition of what a field line is for. The stem asks which statement is wrong, so a true statement cannot be the answer." },
            { "label": "two field lines can intersect where the field is strong", "nudge": null },
            { "label": "field lines start on positive charge and end on negative charge", "nudge": "Correct as stated, and it is exactly the convention fixed in Topic 01. Read the stem again: it wants the false one." },
            { "label": "closely spaced lines indicate a stronger field", "nudge": "Also correct. Line density IS field strength; it is how the inverse-square law shows up in the picture." }
          ],
          "correct": 1,
          "solution": "Two field lines can never cross, anywhere, strong field or weak. At a crossing point the field would have two directions at once, and a vector has one. The other three statements are all genuine properties, which is what makes a which-is-incorrect stem worth reading twice."
        },
        {
          "t": "mcq",
          "q": "At a large distance <i>r</i>, the electric field of a short dipole varies as:",
          "opts": [
            { "label": "1/<i>r</i>", "nudge": "This is the falloff of an infinite LINE of charge, which you meet in Topic 05. A dipole is a compact object and cannot fall off that slowly." },
            { "label": "1/<i>r</i><sup>2</sup>", "nudge": "This is the point-charge answer, applied reflexively. A dipole has zero total charge, so the leading 1/r² term cancels exactly and what remains is one power weaker." },
            { "label": "1/<i>r</i><sup>3</sup>", "nudge": null },
            { "label": "1/<i>r</i><sup>4</sup>", "nudge": "One power too many. 1/r⁴ is the falloff of a quadrupole, an arrangement whose dipole moment vanishes as well as its charge." }
          ],
          "correct": 2,
          "solution": "Both dipole fields go as kp/r³ far away: 2kp/r³ on the axis and kp/r³ on the equator. The physical reason is that the two opposite charges nearly cancel at a distance, leaving only a residual, so a dipole is a weaker long-range object than a bare charge."
        },
        {
          "t": "mcq",
          "q": "A dipole sits in a uniform electric field. Its orientation of STABLE equilibrium, and the potential energy there, are:",
          "opts": [
            { "label": "θ = 0°, <i>U</i> = −<i>pE</i>", "nudge": null },
            { "label": "θ = 0°, <i>U</i> = +<i>pE</i>", "nudge": "The orientation is right and the sign is not. U = −pE cos θ, so at θ = 0 the energy is −pE. Dropping that minus sign is the commonest slip in this formula." },
            { "label": "θ = 180°, <i>U</i> = −<i>pE</i>", "nudge": "The energy value is right but it belongs to the other orientation. At θ = 180° the energy is +pE, a MAXIMUM, which is unstable: any nudge swings the dipole right round." },
            { "label": "θ = 90°, <i>U</i> = 0", "nudge": "This is the chosen ZERO of the energy scale and the orientation of maximum torque. Neither of those makes it an equilibrium, let alone a stable one." }
          ],
          "correct": 0,
          "solution": "Stable equilibrium is the minimum of U = −pE cos θ, which occurs at θ = 0 with p parallel to E, giving U = −pE. Both θ = 0 and θ = 180° have zero torque, so the torque cannot distinguish them; only the energy can."
        },
        {
          "t": "mcq",
          "q": "A negative charge is released from rest at a point where the electric field is <i>E</i>. Which statement is correct?",
          "opts": [
            { "label": "the field at that point reverses direction because the charge is negative", "nudge": "The field belongs to the SOURCE and does not know or care what you place in it. Putting a different test charge at a point changes the response, never the field." },
            { "label": "the charge accelerates along <i>E</i>", "nudge": "This is what a POSITIVE charge does. The force on a charge is qE, and a negative q flips the direction of the force relative to the field." },
            { "label": "the charge accelerates opposite to <i>E</i>", "nudge": null },
            { "label": "the charge stays at rest, because a negative charge is repelled by a field", "nudge": "A field is not a charge and does not repel anything by itself. A negative charge in a field feels a real force of magnitude |q|E; it simply points the other way." }
          ],
          "correct": 2,
          "solution": "Two separate rules, and merging them is where the marks go. The direction of E is set by the sign of the SOURCE, away from positive and toward negative. The direction of motion is set by the sign of the charge you release: F = qE, so a negative charge accelerates against E. Swapping the test charge never moves the field."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Charges of +5 nC and −5 nC are placed 4 mm apart. Find the magnitude and direction of the dipole moment.", "a": "<i>p</i> = <i>q</i> × (separation) = (5 × 10<sup>−9</sup>)(4 × 10<sup>−3</sup>) = 2 × 10<sup>−11</sup> C m, directed from the −5 nC charge toward the +5 nC charge. Note the separation given is the full 2<i>a</i>, not <i>a</i>." },
            { "q": "[NEET] A dipole is placed in a uniform field. At which orientation is the torque on it maximum, and what is the net force on it in that orientation?", "a": "Torque is maximum at θ = 90°, where <i>p</i> is perpendicular to <i>E</i>, and equals <i>pE</i>. The net force is ZERO, at that orientation and at every other one, because the field is uniform." },
            { "q": "[JEE Main] A short dipole has <i>p</i> = 2 × 10<sup>−8</sup> C m. Find the electric field 10 cm from its centre on the equatorial line.", "a": "<i>E</i><sub>e</sub> = <i>kp</i>/<i>r</i><sup>3</sup> = (9 × 10<sup>9</sup>)(2 × 10<sup>−8</sup>)/(0.10)<sup>3</sup> = (180)/(10<sup>−3</sup>) = 1.8 × 10<sup>5</sup> N/C, directed opposite to <i>p</i>. On the axis at the same distance it would be twice this, 3.6 × 10<sup>5</sup> N/C, along <i>p</i>." },
            { "q": "[JEE Main] A dipole of moment <i>p</i> is in stable equilibrium in a uniform field <i>E</i>. Find the work done in rotating it through 180°.", "a": "<i>W</i> = <i>pE</i>(cos 0° − cos 180°) = <i>pE</i>(1 − (−1)) = 2<i>pE</i>. Equivalently the energy climbs from −<i>pE</i> to +<i>pE</i>, a rise of 2<i>pE</i>, which is the largest turning cost the field can impose." },
            { "q": "[JEE Advanced] At what distance along the axis of a short dipole is the field magnitude equal to the equatorial field at distance <i>r</i>?", "a": "Set 2<i>kp</i>/<i>r</i>′<sup>3</sup> = <i>kp</i>/<i>r</i><sup>3</sup>, so <i>r</i>′<sup>3</sup> = 2<i>r</i><sup>3</sup> and <i>r</i>′ = 2<sup>1/3</sup><i>r</i> ≈ 1.26<i>r</i>. You must move about 26 per cent further out along the axis to weaken the field to its equatorial value, and the two fields still point in opposite directions." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing 1/<i>r</i><sup>2</sup> with 1/<i>r</i><sup>3</sup>.</b> A point charge's field falls as 1/<i>r</i><sup>2</sup>; a short dipole's far field falls as 1/<i>r</i><sup>3</sup>. Anchor it with the reason rather than the symbol: a dipole reaches less far BECAUSE its two charges cancel, so the surviving field has to die faster.",
            "<b>Remembering the factor of two and forgetting the direction.</b> <i>E</i><sub>axial</sub> = 2<i>E</i><sub>equatorial</sub> at equal distance, AND the axial field points along <i>p</i> while the equatorial field points against it. Both halves are examined, usually in the same question.",
            "<b>Letting the test charge decide the field's direction.</b> The field points away from a positive source and toward a negative one, full stop. Replacing a positive test charge with a negative one reverses the FORCE and leaves the field exactly where it was.",
            "<b>Assuming a dipole never feels a net force.</b> That holds only in a UNIFORM field. In a non-uniform field <i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i> is not zero, which is the entire mechanism by which a charged comb lifts neutral bits of paper.",
            "<b>Reading zero torque as stable equilibrium.</b> Both θ = 0° and θ = 180° have zero torque, and only θ = 0° is stable. Stability lives in the energy, <i>U</i> = −<i>pE</i> cos θ, at its minimum. Sketching that cosine once fixes this permanently."
          ]
        },
        {
          "t": "protip",
          "html": "for any symmetric distribution question, ring, arc, line or dipole, do not integrate or substitute anything until you have asked which components cancel. spotting the cancellation is worth more marks than the calculus that follows, and it is what turns a two-dimensional vector integral into a one-line scalar one. for the dipole numericals themselves, whenever the question says short or gives you <i>r</i> ≫ <i>a</i>, go straight to the compact <i>kp</i>/<i>r</i><sup>3</sup> forms instead of the full two-charge expressions: faster, and far fewer places to drop a sign. and hold onto the sentence \"axial is twice equatorial and they point opposite ways\" as a single unit, because examiners test the two halves together and give no marks for half of it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>E</i> = <i>F</i>/<i>q</i><sub>0</sub>, unit N/C = V/m", "note": "[M L T⁻³ A⁻¹]; the field exists with no test charge in it" },
            { "f": "point charge: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>", "note": "away from +Q, toward −Q; fields superpose as vectors" },
            { "f": "field lines: never cross, never start or end in empty space", "note": "tangent gives direction, density gives strength" },
            { "f": "<i>p</i> = <i>q</i> × 2<i>a</i>, from −<i>q</i> to +<i>q</i>, unit C m", "note": "[L T A]; the only thing about a dipole that survives at distance" },
            { "f": "<i>E</i><sub>a</sub> = 2<i>kp</i>/<i>r</i><sup>3</sup> along <i>p</i> · <i>E</i><sub>e</sub> = <i>kp</i>/<i>r</i><sup>3</sup> against <i>p</i>", "note": "both 1/r³, and E_a = 2E_e at the same distance" },
            { "f": "τ = <i>pE</i> sin θ · <i>U</i> = −<i>pE</i> cos θ · <i>F</i> = <i>p</i> d<i>E</i>/d<i>x</i>", "note": "stable at θ = 0 (U = −pE); net force only if E is non-uniform" }
          ],
          "aids": [
            "\"a dipole dies as 1 over r cubed, because opposites cancel\"",
            "\"axial is twice equatorial, and they point opposite ways\"",
            "\"uniform field: only twist, no push\"",
            "\"p points minus to plus\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Continuous Charge Distribution",
      "chip": "04 DENSITY",
      "kalam": "chop, cancel, integrate",
      "blocks": [
        {
          "t": "p",
          "html": "A real charged object, a metal wire, a plastic disc, a glass sphere, does not carry a handful of point charges. It carries an unimaginable number of them: recall that 1 μC is already about 6 × 10<sup>12</sup> electrons. Tracking each one with Coulomb's law is hopeless, so we do what physicists always do with the very numerous. We stop counting individuals and start describing a <b>density</b>.<br><br>A city's population is better described by people per square kilometre than by a list of residents, and a charged body is better described by charge per unit length, per unit area, or per unit volume. Three flavours, one for each shape. <b>Linear density</b> λ, coulombs per metre, for thin wires, rods and rings. <b>Surface density</b> σ, coulombs per square metre, for sheets, discs and shells. <b>Volume density</b> ρ, coulombs per cubic metre, for solid bodies."
        },
        {
          "t": "think",
          "html": "imagine spreading a fixed amount of ghee over a roti. describe it as grams per square centimetre and you can find the ghee on any patch by multiplying the density by that patch's area. charge works identically. pick any tiny piece of the object and its charge is density times the size of the piece. that tiny charge, <i>dq</i>, is small enough to treat as a point, so coulomb's law applies to it, and the total field is the vector sum of all the pieces."
        },
        {
          "t": "p",
          "html": "That is the entire game, and it is worth saying as one sentence you can recite in an examination: <b>chop the object into infinitesimal point-charge elements <i>dq</i>, write the field <i>dE</i> of each one, use symmetry to kill the components that cancel, and integrate what survives.</b><br><br>Notice which of those four steps is doing the real work. It is the third. The integral ∫<i>dq</i>/<i>r</i><sup>2</sup> is only manageable when symmetry removes most of the components, which happens for rings, discs, arcs, infinite lines and infinite sheets, and that is exactly the list of shapes examiners set. Without symmetry the vector integral is genuinely brutal and no examination will ask you for one. So the skill being tested is not calculus. It is recognising, before you integrate anything, which components die."
        },
        {
          "t": "p",
          "html": "Two limits are worth carrying through this whole topic, because they turn a formula you might misremember into one you can check. <b>Up close, everything flat looks infinite.</b> Stand near enough to a charged disc and its edge disappears from view, so its field approaches the infinite-sheet value σ/2ε<sub>0</sub>, with no distance in it at all. <b>Far away, everything looks like a point.</b> Retreat far enough from any bounded distribution and its shape stops mattering; only its total charge survives, and the field becomes <i>kQ</i>/<i>x</i><sup>2</sup>. Every result below satisfies both, and if yours does not, it is wrong."
        },
        {
          "t": "p",
          "html": "A density is allowed to VARY with position, and JEE Advanced likes it when it does. A rod might carry λ(<i>x</i>) = λ<sub>0</sub><i>x</i>/<i>L</i>, so that the far end holds more charge than the near end, or a sphere might carry ρ(<i>r</i>) = ρ<sub>0</sub>(1 − <i>r</i>/<i>R</i>), thinning out toward its surface. Nothing about the method changes. You still chop, still write <i>dq</i> = λ<i>dl</i> or ρ<i>dV</i>, still cancel by symmetry and still integrate.<br><br>What changes is that the density can no longer be pulled out of the integral, so the integral itself does real work. Two consequences follow, and both are examinable. The total charge is now ∫λ<i>dl</i> rather than λ<i>L</i>, so you must integrate even to answer how much charge is on the object. And the symmetry may survive even when the uniformity does not: a sphere with ρ depending only on <i>r</i> is still spherically symmetric, which is exactly why Topic 05 can still use Gauss's law on it."
        },
        {
          "t": "think",
          "html": "the density picture is an approximation and it is worth knowing where it fails. charge really is granular, in packets of 1.6 × 10<sup>−19</sup> C, so λ, σ and ρ are averages over patches containing enormous numbers of electrons. at everyday scales that is fantastically accurate. at atomic scales it stops being true at all, and you would have to go back to counting. same story as a sand dune: smooth from ten metres, individual grains from ten centimetres."
        },
        {
          "t": "def",
          "term": "Which density, and which element",
          "html": "The commonest error in this topic is reaching for the wrong density, so match them once and hold it. A <b>wire, rod, ring or arc</b> is one-dimensional: use λ and take <i>dq</i> = λ <i>dl</i>, which becomes λ <i>dx</i> along a straight rod and λ<i>R</i> <i>d</i>θ along an arc of radius <i>R</i>. A <b>sheet, disc or shell</b> is two-dimensional: use σ and take <i>dq</i> = σ <i>dA</i>, which becomes σ · 2π<i>r dr</i> for a disc sliced into rings. A <b>solid body</b> is three-dimensional: use ρ and take <i>dq</i> = ρ <i>dV</i>, which becomes ρ · 4π<i>r</i><sup>2</sup> <i>dr</i> for a sphere sliced into shells. For a UNIFORM density the total charge is simply density times total size: <i>Q</i> = λ<i>L</i>, or σ<i>A</i>, or ρ<i>V</i>. Densities are allowed to vary with position, and then the set-up is identical but the integral is harder, which is where Topic 05's hardest example goes."
        },
        {
          "t": "defgrid",
          "title": "The three charge densities",
          "rows": [
            { "k": "Linear, λ", "v": "λ = <i>dq</i>/<i>dl</i>, unit C/m, dimensions [L<sup>−1</sup> T A]. Wires, rods, rings, arcs" },
            { "k": "Surface, σ", "v": "σ = <i>dq</i>/<i>dA</i>, unit C/m<sup>2</sup>, dimensions [L<sup>−2</sup> T A]. Sheets, discs, shells" },
            { "k": "Volume, ρ", "v": "ρ = <i>dq</i>/<i>dV</i>, unit C/m<sup>3</sup>, dimensions [L<sup>−3</sup> T A]. Solid bodies" },
            { "k": "The element", "v": "<i>dq</i> = λ <i>dl</i> = σ <i>dA</i> = ρ <i>dV</i>, whichever matches the geometry" },
            { "k": "Total charge", "v": "<i>Q</i> = ∫λ <i>dl</i> = ∫σ <i>dA</i> = ∫ρ <i>dV</i>; for uniform density, just density × size" },
            { "k": "Full ring at its centre", "v": "<i>E</i> = 0, by symmetry alone. Worth knowing before any integral is written" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER INTEGRAL",
          "tag": "chop, write, cancel, integrate",
          "main": "<i>E</i> = (1/4πε<sub>0</sub>) ∫ (<i>dq</i>/<i>s</i><sup>2</sup>) ŝ<br>with <i>dq</i> = λ <i>dl</i> = σ <i>dA</i> = ρ <i>dV</i>",
          "legend": [
            "<i>E</i> = the field at the chosen point (N/C), obtained as a VECTOR sum over the whole body",
            "<i>s</i> = distance from the element <i>dq</i> to the field point (m), and ŝ = the unit vector pointing from <i>dq</i> to that point",
            "λ, σ, ρ = linear (C/m), surface (C/m<sup>2</sup>) and volume (C/m<sup>3</sup>) charge densities; <i>dl</i>, <i>dA</i>, <i>dV</i> are the matching elements"
          ],
          "note": "The integral is written with a unit vector because it is a vector integral. In practice you never evaluate it as one: symmetry kills every component except one, and what is left is an ordinary scalar integral in a single variable. Identifying that surviving direction is the step worth the marks."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE STANDARD RESULTS",
          "main": "ring on its axis: <i>E</i> = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup><br>disc on its axis: <i>E</i> = (σ/2ε<sub>0</sub>)(1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>))<br>semicircular arc, at its centre: <i>E</i> = 2<i>k</i>λ/<i>R</i>",
          "legend": [
            "<i>E</i> = field magnitude (N/C); <i>x</i> = distance along the axis from the centre of the ring or disc (m)",
            "<i>R</i> = radius of the ring, disc or arc (m); <i>Q</i> = total charge on the ring (C); σ = surface density on the disc (C/m<sup>2</sup>); λ = linear density on the arc (C/m)",
            "<i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup>, and ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>. Every field here points along the symmetry axis"
          ],
          "note": "Three checks, and each one catches a different error. The ring gives zero at x = 0, as symmetry demands. The disc gives σ/2ε₀ as x goes to zero, which is the infinite sheet. Both give kQ/x² far away. The arc's result carries a bare 1/R, because the whole arc sits at exactly one distance from its own centre."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD ON THE AXIS OF A CHARGED RING, TAP A LINE",
          "steps": [
            {
              "eq": "a ring of radius <i>R</i> carries total charge <i>Q</i>. Take <i>P</i> on the axis, a distance <i>x</i> from the centre. Every element <i>dq</i> is the same distance <i>s</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) from <i>P</i>",
              "why": "That single sentence is the gift the geometry hands you: because the distance is the same for every element, s comes out of the integral and never has to be tracked."
            },
            {
              "eq": "each element gives <i>dE</i> = <i>k dq</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>), pointing from the element toward <i>P</i>",
              "why": "Coulomb's law applied to a piece small enough to count as a point. The direction is different for every element, which is the only complication."
            },
            {
              "eq": "for every element there is a diametrically opposite one. Their components PERPENDICULAR to the axis cancel in pairs; only the components ALONG the axis survive, each equal to <i>dE</i> cos α with cos α = <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)",
              "why": "The symmetry step. Pair up the elements before integrating and the vector problem collapses to a scalar one, which is why this derivation fits on half a page."
            },
            {
              "eq": "<i>E</i> = ∫<i>dE</i> cos α = [<i>k</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)] · [<i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)] ∫<i>dq</i> = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>",
              "why": "Nothing inside the integral depends on which element you are on, so the whole integral is just ∫dq = Q. This is as easy as a continuous distribution ever gets."
            },
            {
              "eq": "checks: <i>x</i> = 0 gives <i>E</i> = 0, and <i>x</i> ≫ <i>R</i> gives <i>E</i> → <i>kQ</i>/<i>x</i><sup>2</sup>",
              "why": "The first is symmetry: at the centre every element is opposed by its twin and the whole field cancels. The second is the far-field rule: from a long way off the ring is just a point charge Q. A result that fails either check is wrong."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.7 · A RING, AND THE COMPONENTS THAT DIE",
          "chips": ["one element and its twin"],
          "captions": [
            "A ring of radius R seen edge-on, with its axis running to the right through the centre. The element dq at the top sends a field dE to P, and so does its mirror element at the bottom. Each of those two vectors has a component along the axis and a component across it. The across-components are equal and opposite, so they cancel exactly; the along-components are equal and in the same direction, so they add. Run that pairing over the whole ring and only the axial direction survives, which is why the answer is a scalar integral with a single cos α in it."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-3.2, 3.2], "axes": "none",
              "curves": [
                { "c": "ellipse", "cx": 2, "cy": 0, "a": 0.5, "b": 2 }
              ],
              "points": [
                { "x": 7, "y": 0, "label": "P", "at": "se" }
              ],
              "marks": [
                { "x": 2, "y": 2, "glyph": "dot", "tone": "amber", "label": "dq" },
                { "x": 2, "y": -2, "glyph": "dot", "tone": "amber" }
              ],
              "segments": [
                { "from": [2, 0], "to": [6.8, 0], "dash": true, "soft": true },
                { "from": [2, 0], "to": [2, 2], "soft": true, "label": "R", "at": "mid" },
                { "from": [2, -2.6], "to": [7, -2.6], "soft": true, "label": "x", "at": "mid" }
              ],
              "arrows": [
                { "from": [2, 2], "to": [4.97, 0.81], "tone": "soft", "label": "dE" },
                { "from": [2, -2], "to": [4.97, -0.81], "tone": "soft", "label": "dE" },
                { "from": [7.2, 0], "to": [8.8, 0], "tone": "amber", "label": "E" }
              ],
              "labels": [
                { "x": 2, "y": 2.9, "text": "ring, charge Q" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD ON THE AXIS OF A CHARGED DISC",
          "steps": [
            {
              "eq": "treat the disc, radius <i>R</i> and surface density σ, as a nest of thin concentric rings. A ring of radius <i>r</i> and width <i>dr</i> has area <i>dA</i> = 2π<i>r dr</i>, so <i>dq</i> = σ 2π<i>r dr</i>",
              "why": "The disc is not a new problem. It is a stack of the previous one, and building a harder result out of an easier one is the move this whole topic rewards."
            },
            {
              "eq": "using the ring result at axial distance <i>x</i>: <i>dE</i> = <i>k x</i> σ 2π<i>r dr</i>/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup>, all along the axis",
              "why": "Every ring contributes along the same axis, so no further cancellation argument is needed; the disc's circular symmetry already killed the off-axis parts ring by ring."
            },
            {
              "eq": "<i>E</i> = (σ<i>x</i>/2ε<sub>0</sub>) ∫<sub>0</sub><sup><i>R</i></sup> <i>r dr</i>/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup>, and the substitution <i>u</i> = <i>x</i><sup>2</sup> + <i>r</i><sup>2</sup> gives ∫ = 1/<i>x</i> − 1/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)",
              "why": "Ordinary substitution, the method from Integrals, Topic 02: du = 2r dr, which is exactly the r dr sitting in the numerator waiting for it. Note 2πk = 1/(2ε₀), which is where the ε₀ form comes from."
            },
            {
              "eq": "<i>E</i> = (σ/2ε<sub>0</sub>)(1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>))",
              "why": "The x outside cancels the 1/x from the integral, which is why a distance survives only inside the bracket. Everything in that bracket is dimensionless."
            },
            {
              "eq": "two limits: <i>x</i> ≪ <i>R</i> gives <i>E</i> → σ/2ε<sub>0</sub>, and <i>x</i> ≫ <i>R</i> gives <i>E</i> → <i>kQ</i>/<i>x</i><sup>2</sup> with <i>Q</i> = σπ<i>R</i><sup>2</sup>",
              "why": "One formula containing both a plane and a point. Up close the second term vanishes and you get the infinite-sheet field, with no distance in it, because from there the disc looks endless. Far away the bracket expands to R²/2x² and you recover the point charge. Topic 05 derives the infinite sheet independently from Gauss's law and gets the same σ/2ε₀, which is a real cross-check between two different methods."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.8 · A DISC IS A STACK OF RINGS",
          "chips": ["one ring element"],
          "captions": [
            "The disc seen edge-on, radius R, uniform surface density σ, with P on its central axis at distance x. The dashed ring of radius r and width dr is one element of the stack: its area is 2πr dr and its charge is σ times that. Its axial field is the ring result you already have, and integrating r from 0 to R sweeps the ring outward until it becomes the whole disc. Standing very close to the centre, x becomes negligible against R, the bracket goes to 1, and the disc behaves exactly like an infinite sheet."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [-3.2, 3.2], "axes": "none",
              "curves": [
                { "c": "ellipse", "cx": 2, "cy": 0, "a": 0.6, "b": 2.4 },
                { "c": "ellipse", "cx": 2, "cy": 0, "a": 0.35, "b": 1.4, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 7, "y": 0, "label": "P", "at": "se" }
              ],
              "marks": [
                { "x": 2, "y": 1.4, "glyph": "dot", "tone": "amber" }
              ],
              "segments": [
                { "from": [2, 0], "to": [6.3, 0], "dash": true, "soft": true },
                { "from": [2, 0], "to": [2, 1.4], "soft": true, "label": "r", "at": "end" },
                { "from": [2, 0], "to": [2, -2.4], "soft": true, "label": "R", "at": "end" },
                { "from": [2, -2.9], "to": [7, -2.9], "soft": true, "label": "x", "at": "mid" }
              ],
              "arrows": [
                { "from": [2, 1.4], "to": [4.89, 0.59], "tone": "soft", "label": "dE" },
                { "from": [7.4, 0], "to": [8.9, 0], "tone": "amber", "label": "E" }
              ],
              "labels": [
                { "x": 2, "y": 2.9, "text": "disc, density σ" },
                { "x": 4.6, "y": 1.9, "text": "ring width dr" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD AT THE CENTRE OF A SEMICIRCULAR ARC",
          "steps": [
            {
              "eq": "a wire is bent into a semicircle of radius <i>R</i> with uniform linear density λ, centred at <i>O</i>. An element subtending <i>d</i>θ at the centre has length <i>dl</i> = <i>R d</i>θ, so <i>dq</i> = λ<i>R d</i>θ",
              "why": "Parameterise by angle, not by arc length: it is the variable the geometry is already written in, and the limits then come out as plain angles."
            },
            {
              "eq": "<i>dE</i> = <i>k dq</i>/<i>R</i><sup>2</sup> = <i>k</i>λ <i>d</i>θ/<i>R</i>, directed from the element toward <i>O</i> and, for positive λ, pointing away from the element",
              "why": "Every point of the arc is at exactly the same distance R from the centre, so the R² in the denominator is a constant, and one power of R cancels against the R in dl. What is left has no R² in it at all, which is why the answer carries a bare 1/R."
            },
            {
              "eq": "with θ measured from the diameter, the components PARALLEL to the diameter cancel in pairs, and the surviving component of each element is <i>dE</i> sin θ",
              "why": "Pair each element with its mirror image in the vertical symmetry axis. Same symmetry argument as the ring, done about a line rather than about a point."
            },
            {
              "eq": "<i>E</i> = (<i>k</i>λ/<i>R</i>) ∫<sub>0</sub><sup>π</sup> sin θ <i>d</i>θ = (<i>k</i>λ/<i>R</i>)[−cos θ]<sub>0</sub><sup>π</sup> = 2<i>k</i>λ/<i>R</i>",
              "why": "A definite integral of exactly the kind set up in Integrals, Topic 05, and worth precisely 2. The field points along the symmetry axis, away from the arc for positive λ."
            },
            {
              "eq": "compare with a FULL ring at its centre, which gives exactly zero",
              "why": "Close the semicircle and the second half cancels the first, element by element, and the whole field vanishes. Half a ring gives 2kλ/R, a whole ring gives nothing. Examiners set that contrast constantly, and the general result for an arc of half-angle θ₀ is 2kλ sin θ₀/R, which reproduces both: θ₀ = 90° gives the semicircle and θ₀ = 180° gives zero."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.9 · HALF A RING IS NOT HALF OF NOTHING",
          "chips": ["what survives at the centre"],
          "captions": [
            "A semicircular arc of radius R and uniform positive linear density λ, with its diameter horizontal and its centre at O. The element dq at angle θ pushes a positive test charge at O directly away from itself, and its mirror element on the other side pushes just as hard the other way. Their horizontal components cancel; their downward components add. Sweeping θ from 0 to π leaves a net field 2kλ/R pointing straight down, away from the arc. Complete the circle and the lower half would cancel this exactly, which is why a full ring gives zero at its centre."
          ],
          "frames": [
            {
              "x": [-4, 4], "y": [-2.2, 3.4], "axes": "none",
              "arcs": [
                { "at": [0, 0], "r": 2.5, "from": 0, "to": 180, "tone": "ink" },
                { "at": [0, 0], "r": 0.9, "from": 0, "to": 60, "label": "θ", "tone": "amber" }
              ],
              "points": [
                { "x": 0, "y": 0, "label": "O", "at": "sw" }
              ],
              "marks": [
                { "x": 1.25, "y": 2.165, "glyph": "dot", "tone": "amber", "label": "dq" },
                { "x": -1.25, "y": 2.165, "glyph": "dot", "tone": "amber" }
              ],
              "segments": [
                { "from": [-2.5, 0], "to": [2.5, 0], "dash": true, "soft": true },
                { "from": [0, 0], "to": [1.25, 2.165], "dash": true, "soft": true, "label": "R", "at": "mid" }
              ],
              "arrows": [
                { "from": [0, 0], "to": [-0.8, -1.386], "tone": "soft", "label": "dE" },
                { "from": [0, 0], "to": [0.8, -1.386], "tone": "soft", "label": "dE" },
                { "from": [0, 0], "to": [0, -1.9], "tone": "amber", "label": "E" }
              ],
              "labels": [
                { "x": 0, "y": 3.1, "text": "arc, density λ" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "THE RING'S AXIAL FIELD · ZERO, A PEAK, THEN DECAY",
          "chips": ["where the field is strongest"],
          "captions": [
            "The ring's axial field plotted against distance along the axis. It starts at exactly zero at the centre, because every element is cancelled by its twin. It rises, peaks at x = R/√2, then decays. Far out it is indistinguishable from a point charge's 1/x² curve, because from there the ring is a point. The peak is a JEE Advanced favourite: differentiate kQx/(x² + R²)^(3/2), set the numerator R² − 2x² to zero, and the maximum value is 2kQ/(3√3 R²), which is about 0.385 kQ/R²."
          ],
          "frames": [
            {
              "x": [0, 4.2], "y": [0, 0.46],
              "axisX": "distance x", "axisY": "E",
              "ticksX": { "at": [1, 2, 3, 4], "labels": ["R", "2R", "3R", "4R"] },
              "ticksY": { "every": 0.1 },
              "curves": [
                { "c": "pts", "smooth": true, "pts": [[0, 0], [0.2, 0.189], [0.4, 0.320], [0.6, 0.378], [0.707, 0.385], [0.9, 0.370], [1.2, 0.315], [1.6, 0.238], [2.0, 0.179], [2.6, 0.120], [3.2, 0.085], [4.0, 0.057]] },
                { "c": "vline", "x": 0.707, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 0.707, "y": 0.385, "label": "peak", "at": "ne" }
              ],
              "labels": [
                { "x": 2.6, "y": 0.40, "text": "far out, like 1/x²" },
                { "x": 0.55, "y": 0.06, "text": "zero at the centre" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Setting up any continuous-distribution integral",
          "steps": [
            "<b>Pick the element that matches the shape.</b> λ <i>dx</i> along a rod, λ<i>R d</i>θ along an arc, σ · 2π<i>r dr</i> for a disc sliced into rings, ρ · 4π<i>r</i><sup>2</sup><i>dr</i> for a sphere sliced into shells. Getting this wrong makes everything after it wrong.",
            "<b>Ask which components cancel, BEFORE integrating.</b> Draw one element and its mirror twin, and see what dies. For a full loop everything usually dies and the answer is zero. On an axis only the axial part survives.",
            "<b>Reduce to one variable.</b> Express every distance and every cosine in terms of your chosen parameter, <i>x</i> or θ, and check that nothing else is hiding in the integrand.",
            "<b>Integrate over the real limits.</b> A semicircle is 0 to π, a quarter arc is 0 to π/2, a disc is <i>r</i> = 0 to <i>R</i>. Half the wrong answers in this topic are right integrals with wrong limits.",
            "<b>Check two limits at the end.</b> Does the result vanish where symmetry says it must? Does it become <i>kQ</i>/<i>x</i><sup>2</sup> far away, or σ/2ε<sub>0</sub> up close? Each check costs one line and catches a different mistake."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A thin rod of length 50 cm carries a uniform linear charge density λ = 4 μC/m. Find the total charge on the rod.",
          "steps": [
            "For a UNIFORM density, total charge is simply density times size, with no integration required: <i>Q</i> = λ<i>L</i>.",
            "Convert first: λ = 4 × 10<sup>−6</sup> C/m, <i>L</i> = 0.50 m.",
            "<i>Q</i> = (4 × 10<sup>−6</sup>)(0.50) = 2.0 × 10<sup>−6</sup> C = 2.0 μC. The integral ∫λ <i>dl</i> would give the same number; it is only needed when λ varies along the rod."
          ],
          "ans": "<i>Q</i> = 2.0 μC"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A uniformly charged full ring and a uniformly charged semicircular arc have the same radius <i>R</i> and the same linear density λ. Compare the electric field at the centre of each.",
          "steps": [
            "The trap is to start integrating both. Symmetry settles the ring in one sentence and no integral is needed at all.",
            "Full ring: every element has a diametrically opposite twin pushing the opposite way with exactly equal strength, so every contribution is cancelled. <i>E</i> at the centre is exactly ZERO.",
            "Semicircle: the cancellation is only partial, because half the elements are missing. What survives is <i>E</i> = 2<i>k</i>λ/<i>R</i>, directed along the symmetry axis and away from the arc for positive λ.",
            "Worth noticing: the ring's zero is not an approximation and does not depend on <i>R</i>, λ or the total charge. It is pure symmetry, which is why examiners can ask it without giving you any numbers."
          ],
          "ans": "ring 0 · semicircle 2<i>k</i>λ/<i>R</i>"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "A disc of radius <i>R</i> = 10 cm carries a uniform surface charge density σ = 8.85 × 10<sup>−7</sup> C/m<sup>2</sup>. Find the electric field on its axis at a distance <i>x</i> = <i>R</i> from the centre. Take ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>.",
          "steps": [
            "The question quotes ε<sub>0</sub> rather than <i>k</i>, so use the ε<sub>0</sub> form of the disc result directly: <i>E</i> = (σ/2ε<sub>0</sub>)(1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)).",
            "The bracket, at <i>x</i> = <i>R</i>: <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) = <i>R</i>/(<i>R</i>√2) = 1/√2 ≈ 0.707, so the bracket is 1 − 0.707 = 0.293. Notice no numbers were needed: at <i>x</i> = <i>R</i> the bracket is the same for every disc.",
            "The prefactor: σ/2ε<sub>0</sub> = (8.85 × 10<sup>−7</sup>)/(2 × 8.85 × 10<sup>−12</sup>) = 5.0 × 10<sup>4</sup> N/C. The awkward-looking σ was chosen precisely so this comes out round.",
            "<i>E</i> = (5.0 × 10<sup>4</sup>)(0.293) ≈ 1.46 × 10<sup>4</sup> N/C, directed along the axis, away from the disc.",
            "Two sanity checks, and they point the same way. It must be well below the up-close value σ/2ε<sub>0</sub> = 5.0 × 10<sup>4</sup> N/C, and it is. It must also be below the point-charge estimate <i>kQ</i>/<i>x</i><sup>2</sup>, which with <i>Q</i> = σπ<i>R</i><sup>2</sup> = 2.78 × 10<sup>−8</sup> C comes to 2.5 × 10<sup>4</sup> N/C, and it is: the real disc gives 0.59 of that. Both make sense, because pretending the charge sits at the centre puts all of it closer than it really is AND ignores that only the axial component of each contribution survives."
          ],
          "ans": "<i>E</i> ≈ 1.46 × 10<sup>4</sup> N/C along the axis"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "For a ring of radius <i>R</i> carrying total charge <i>Q</i>, find the axial distance at which the field is maximum, and the value of that maximum field.",
          "steps": [
            "Start from the ring result <i>E</i>(<i>x</i>) = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>. It is zero at <i>x</i> = 0 and tends to zero far away, so somewhere in between it must peak.",
            "Differentiate the <i>x</i>-dependent part. The numerator of d<i>E</i>/d<i>x</i> reduces to (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) − 3<i>x</i><sup>2</sup> = <i>R</i><sup>2</sup> − 2<i>x</i><sup>2</sup>, over (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>5/2</sup>.",
            "Set the numerator to zero: <i>R</i><sup>2</sup> = 2<i>x</i><sup>2</sup>, so <b><i>x</i> = <i>R</i>/√2</b> ≈ 0.707<i>R</i>. That is the position of the peak.",
            "Now the value. At that <i>x</i>, <i>x</i><sup>2</sup> + <i>R</i><sup>2</sup> = 3<i>R</i><sup>2</sup>/2, so (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> = (3/2)<sup>3/2</sup><i>R</i><sup>3</sup> = 1.837<i>R</i><sup>3</sup>. Hence <i>E</i><sub>max</sub> = <i>kQ</i>(<i>R</i>/√2)/(1.837<i>R</i><sup>3</sup>) = <i>kQ</i>/(2.598<i>R</i><sup>2</sup>).",
            "Since 1/2.598 = 0.385 = 2/(3√3), the clean form is <b><i>E</i><sub>max</sub> = 2<i>kQ</i>/(3√3 <i>R</i><sup>2</sup>) ≈ 0.385 <i>kQ</i>/<i>R</i><sup>2</sup></b>. Check it dimensionally: exactly one factor of <i>k</i>, which is one factor of 1/(4πε<sub>0</sub>), so this is a field. An expression carrying 1/(4πε<sub>0</sub>) twice would not be one, and that is precisely the slip to watch for here.",
            "Plausibility: the peak field is about 38 per cent of what a point charge <i>Q</i> would give at distance <i>R</i>. Less than a point charge, as it must be, because the ring's charge is spread out and only part of each contribution points along the axis."
          ],
          "ans": "<i>x</i> = <i>R</i>/√2 · <i>E</i><sub>max</sub> = 2<i>kQ</i>/(3√3 <i>R</i><sup>2</sup>)"
        },
        {
          "t": "mcq",
          "q": "The electric field at the centre of a uniformly charged FULL ring is:",
          "opts": [
            { "label": "<i>kQ</i>/<i>R</i><sup>2</sup>", "nudge": "This treats the ring as a point charge Q sitting at distance R, which is the wrong model: the charge is spread all around the point, not concentrated on one side of it." },
            { "label": "2<i>kQ</i>/<i>R</i><sup>2</sup>", "nudge": "An arbitrary multiple of the point-charge value, with no symmetry argument behind it. The factor of 2 belongs to the arc result, and even there it multiplies kλ, not kQ." },
            { "label": "zero", "nudge": null },
            { "label": "<i>kQ</i>/2<i>R</i><sup>2</sup>", "nudge": "Also a guessed multiple. Halving a point-charge field is what you might expect if half the ring vanished, and it is not what a complete ring does." }
          ],
          "correct": 2,
          "solution": "Every element of the ring is balanced by the diametrically opposite element, which is the same distance away and pushes exactly the opposite way. Every contribution cancels in pairs, so the field at the centre is exactly zero, whatever Q and R happen to be. No integration is required, and none is expected."
        },
        {
          "t": "mcq",
          "q": "For a uniformly charged disc, as the axial distance satisfies <i>x</i> ≪ <i>R</i>, the axial field tends to:",
          "opts": [
            { "label": "σ/ε<sub>0</sub>", "nudge": "This is the field just outside a CONDUCTOR's surface, where the charge has metal behind it and the field exists on one side only. A thin non-conducting disc radiates both ways and gives half as much. This factor of two is the most punished trap in the chapter." },
            { "label": "σ/2ε<sub>0</sub>", "nudge": null },
            { "label": "zero", "nudge": "This confuses the centre of a RING, where the field genuinely is zero, with a point just off the surface of a DISC, where it is not. A disc has charge all around and beneath the point, not only opposite it." },
            { "label": "<i>kQ</i>/<i>x</i><sup>2</sup>", "nudge": "This is the far-field limit, the opposite regime to the one the stem describes. It applies when x is much LARGER than R." }
          ],
          "correct": 1,
          "solution": "Put x ≪ R into E = (σ/2ε₀)(1 − x/√(x² + R²)). The second term goes to zero and E → σ/2ε₀, the infinite-sheet value, with no distance in it. Physically: stand close enough and the edge of the disc disappears from view, so the disc looks infinite."
        },
        {
          "t": "mcq",
          "q": "The dimensional formula of surface charge density σ is:",
          "opts": [
            { "label": "[L<sup>−1</sup> T A]", "nudge": "This is LINEAR density λ, charge per length. One power of length short: σ is charge per AREA." },
            { "label": "[L<sup>−2</sup> T A]", "nudge": null },
            { "label": "[L<sup>−3</sup> T A]", "nudge": "This is VOLUME density ρ, charge per cubic metre. One power of length too many." },
            { "label": "[L<sup>−2</sup> T<sup>−1</sup> A]", "nudge": "The power of area is right and the power of time is not. Charge is [A T], with T to the plus one, so σ must carry T and not 1/T." }
          ],
          "correct": 1,
          "solution": "σ is charge divided by area, so [σ] = [A T]/[L²] = [L⁻² T A]. The three densities differ only in the power of length: λ is [L⁻¹ T A], σ is [L⁻² T A], ρ is [L⁻³ T A], and counting that one power is the whole question."
        },
        {
          "t": "mcq",
          "q": "To find the field of an extended charged body, the correct general expression is:",
          "opts": [
            { "label": "<i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> using the total charge as a point", "nudge": "Valid only far away, or for a spherically symmetric body seen from outside. Near a rod, a disc or a ring it is simply the wrong answer, and the question says GENERAL." },
            { "label": "<i>E</i> = (1/4πε<sub>0</sub>) ∫ (<i>dq</i>/<i>s</i><sup>2</sup>) ŝ", "nudge": null },
            { "label": "<i>E</i> = <i>Q</i>/ε<sub>0</sub>", "nudge": "That is a FLUX, not a field: it is the right-hand side of Gauss's law, and its units are N m²/C rather than N/C. Topic 05 uses it, for a different question." },
            { "label": "<i>E</i> = σ/2ε<sub>0</sub> always", "nudge": "This is the infinite-sheet result, and the word ALWAYS is what makes it wrong. It applies to a plane, and to a disc only when you stand very close to it." }
          ],
          "correct": 1,
          "solution": "The field of any extended body is the vector integral of the point-charge contributions of its elements: chop the body into dq, write each dE using Coulomb's law, and add. The other three options are all correct results in their own special cases, which is exactly why they are offered here."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A spherical surface of radius 5 cm carries a uniform surface charge density σ = 2 μC/m<sup>2</sup>. Find the total charge on it.", "a": "<i>Q</i> = σ(4π<i>R</i><sup>2</sup>) = (2 × 10<sup>−6</sup>)(4π)(0.05)<sup>2</sup> = (2 × 10<sup>−6</sup>)(3.14 × 10<sup>−2</sup>) ≈ 6.3 × 10<sup>−8</sup> C, about 63 nC. Uniform density means no integral is needed, only the area." },
            { "q": "[NEET] State the SI units and the dimensional formulae of λ, σ and ρ.", "a": "λ: C/m, [L<sup>−1</sup> T A]. σ: C/m<sup>2</sup>, [L<sup>−2</sup> T A]. ρ: C/m<sup>3</sup>, [L<sup>−3</sup> T A]. Charge itself is [A T]; the three differ only in the power of length, which is what makes them so easy to confuse under time pressure." },
            { "q": "[JEE Main] For the disc of the worked example, find the field very close to its surface (<i>x</i> → 0) and compare it with the infinite-sheet result.", "a": "The bracket goes to 1, so <i>E</i> → σ/2ε<sub>0</sub> = (8.85 × 10<sup>−7</sup>)/(2 × 8.85 × 10<sup>−12</sup>) = 5.0 × 10<sup>4</sup> N/C. That is IDENTICAL to the infinite-sheet field, because up close the disc's edge is out of sight and it behaves as though it went on forever." },
            { "q": "[JEE Main] A wire is bent into a quarter circle of radius <i>R</i> with uniform linear density λ. Find the magnitude of the field at the centre.", "a": "Unlike the semicircle, BOTH components survive here, and each integrates to <i>k</i>λ/<i>R</i>. The resultant is √2 <i>k</i>λ/<i>R</i>, directed along the bisector of the quarter arc and away from it. Check: two perpendicular quarter arcs, each contributing √2<i>k</i>λ/<i>R</i> at 45° to the common axis, add to 2 × √2<i>k</i>λ/<i>R</i> × cos45° = 2<i>k</i>λ/<i>R</i>, the semicircle result." },
            { "q": "[JEE Advanced] A rod of length <i>L</i> = 0.60 m carries uniform λ = 3.0 μC/m. Find the field at a point on its perpendicular bisector, 0.40 m from the rod.", "a": "The standard finite-rod result is <i>E</i> = 2<i>k</i>λ<i>L</i>/(<i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>)). Here 2<i>k</i>λ = 2(9 × 10<sup>9</sup>)(3.0 × 10<sup>−6</sup>) = 5.4 × 10<sup>4</sup>, and √(0.36 + 0.64) = 1.00 m exactly, so <i>E</i> = (5.4 × 10<sup>4</sup>)(0.60)/(0.40 × 1.00) = 8.1 × 10<sup>4</sup> N/C, perpendicular to the rod and away from it. Cross-check with the equivalent form <i>k</i>λ<i>L</i>/(<i>d</i>√(<i>d</i><sup>2</sup> + <i>L</i><sup>2</sup>/4)) = 16200/(0.40 × 0.50) = 8.1 × 10<sup>4</sup> N/C, the same by a different route. Limit check: as <i>L</i> → ∞ this becomes 2<i>k</i>λ/<i>d</i>, the infinite-line field of Topic 05." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Adding magnitudes instead of vectors.</b> Field contributions are vectors. Resolve into components and use symmetry to cancel BEFORE integrating; never sum the sizes of the <i>dE</i> blindly. On a full ring that error turns an answer of zero into a large positive number.",
            "<b>Treating an extended body as a point too early.</b> <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> is valid far away, or for spherical symmetry seen from outside. Near a disc, a rod or a ring you must integrate, and no amount of algebra substitutes for it.",
            "<b>Mismatching the density to the geometry.</b> λ per length, σ per area, ρ per volume, and the element must match: λ<i>dl</i>, σ<i>dA</i>, ρ<i>dV</i>. Using σ on a wire is not a small slip, it is a dimensionally different quantity.",
            "<b>Letting the ring and the arc overwrite each other.</b> Full ring at the centre: <i>E</i> = 0. Semicircle at the centre: <i>E</i> = 2<i>k</i>λ/<i>R</i>. Quarter arc: √2<i>k</i>λ/<i>R</i>. They are different numbers for different objects, and only the first is guaranteed by symmetry.",
            "<b>Producing an expression with 1/(4πε<sub>0</sub>) in it twice.</b> This happens when a result written in <i>k</i> is combined with one written in ε<sub>0</sub> without noticing they are the same constant. It is not a small error: the answer stops being a field at all. Reduce anything you are unsure of to M L T A and count."
          ]
        },
        {
          "t": "protip",
          "html": "before integrating anything, ask which components cancel. for a full loop, usually everything, and the answer is zero with no calculus at all. for a disc on its axis, only the axial part survives, which turns a two-dimensional vector integral into a one-variable scalar one. the symmetry step is worth more marks than the calculus, and it is faster. after that, sanity-check every result against two limits you already trust: a disc should become an infinite sheet up close and a point charge far away, and a ring should give zero at its centre. and if a printed formula looks odd, count its constants: exactly one factor of <i>k</i>, or one of 1/(4πε<sub>0</sub>), belongs in any field. two is a typo, and you can catch it in five seconds."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "λ = <i>dq</i>/<i>dl</i> · σ = <i>dq</i>/<i>dA</i> · ρ = <i>dq</i>/<i>dV</i>", "note": "C/m, C/m², C/m³; [L⁻¹TA], [L⁻²TA], [L⁻³TA]" },
            { "f": "<i>E</i> = (1/4πε<sub>0</sub>) ∫ (<i>dq</i>/<i>s</i><sup>2</sup>) ŝ", "note": "chop, write dE, cancel by symmetry, integrate" },
            { "f": "ring on axis: <i>E</i> = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>", "note": "zero at the centre; peak at x = R/√2, where E = 2kQ/(3√3 R²)" },
            { "f": "disc on axis: <i>E</i> = (σ/2ε<sub>0</sub>)(1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>))", "note": "→ σ/2ε₀ up close (a sheet), → kQ/x² far away (a point)" },
            { "f": "semicircular arc at its centre: <i>E</i> = 2<i>k</i>λ/<i>R</i>", "note": "quarter arc √2kλ/R; full ring 0; arc of half-angle θ₀ gives 2kλ sinθ₀/R" },
            { "f": "finite rod, perpendicular bisector: <i>E</i> = 2<i>k</i>λ<i>L</i>/(<i>d</i>√(<i>L</i><sup>2</sup> + 4<i>d</i><sup>2</sup>))", "note": "→ 2kλ/d as L → ∞, the infinite line of Topic 05" }
          ],
          "aids": [
            "\"chop, cancel, integrate\"",
            "\"full loop gives zero at the centre, half loop gives 2kλ over R\"",
            "\"a disc up close is just an infinite sheet\"",
            "\"lambda for length, sigma for surface, rho for volume\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Electric Flux and Gauss's Law",
      "chip": "05 GAUSS",
      "kalam": "flux counts what is inside, and nothing else",
      "blocks": [
        {
          "t": "p",
          "html": "Hold a rectangular net in a flowing river. How much water passes through it each second? Three things decide it: how fast the water flows, how big the net is, and, crucially, the ANGLE at which you hold it. Face-on to the current you catch the maximum flow. Turn the net edge-on and almost nothing passes through, even though the net has not shrunk by a millimetre.<br><br><b>Electric flux</b> is exactly that idea with the electric field playing the part of the current. It measures how much field passes through a chosen surface. For a flat surface of area <i>A</i> in a uniform field, Φ = <i>EA</i> cos θ, where θ is the angle between the field and the <b>area vector</b>, a vector of magnitude <i>A</i> pointing perpendicular to the surface. The cosine is the angle of the net: face-on, θ = 0 and the flux is <i>EA</i>; edge-on, θ = 90° and the flux is zero."
        },
        {
          "t": "think",
          "html": "think of field lines as threads piercing the surface, and flux as the net number of threads that get through. tilt the surface and fewer threads pass, because the surface now presents a smaller effective area, <i>A</i> cos θ. for a curved surface or a field that varies from place to place, chop it into tiny flat patches, work out <i>E</i> · <i>dA</i> on each one, and add. that is what the integral sign in the formula is doing, and nothing more."
        },
        {
          "t": "p",
          "html": "Now the astonishing part. Take any CLOSED surface, a balloon of any lumpy shape you like, and add up the flux poking outward through the whole of it. Gauss discovered that this total does not care about the shape of the surface, or its size, or how the charges inside are arranged, or what charges sit OUTSIDE. It depends on exactly one thing: the net charge trapped inside.<br><br>That is <b>Gauss's law</b>, ∮<i>E</i> · <i>dA</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>, and it is not a calculating trick. It is one of the four Maxwell equations, a foundational statement about the universe. But it does have an enormously practical payoff: when a charge distribution has enough symmetry, Gauss's law delivers the field in two or three lines, replacing the punishing integrals Coulomb's law would have demanded."
        },
        {
          "t": "think",
          "html": "picture a gulab jamun sealed inside a box. every drop of syrup it releases must eventually escape through the box's walls, so the total leaking out equals the total syrup inside, no matter how oddly the box is shaped. now put a second sweet OUTSIDE the box. whatever syrup of its enters through one wall leaves through another, and contributes exactly nothing to what escapes THIS box. charge is the source of field lines, and the net lines escaping a closed surface count the net charge inside it. everything else cancels on the way through."
        },
        {
          "t": "p",
          "html": "One result deserves to be recognised rather than merely learned. <b>Gravitation, Topic 02</b> gave you Newton's shell theorem: a uniform spherical shell pulls an outside point exactly as if all its mass sat at the centre, and exerts zero net force anywhere inside. Newton proved that by a long integration over the shell. Gauss's law proves the electrical version, which is the same theorem with charge in place of mass, in about four lines, and the derivation below does it. When you meet a spherical shell in this chapter you are not learning a new fact; you are watching a fact you already own being obtained by a far better method.<br><br>Two warnings sit alongside that power, and both are examined. Gauss's law is ALWAYS true for any closed surface, but it is only USEFUL for finding <i>E</i> when the symmetry lets you pull <i>E</i> outside the integral: a sphere for spherical symmetry, a cylinder for a line, a pillbox for a plane. And the <i>E</i> in the integral is the TOTAL field from all charges, inside and outside; it is only the NET FLUX that depends on the enclosed charge alone."
        },
        {
          "t": "def",
          "term": "Choosing a Gaussian surface, and what it may not do",
          "html": "The Gaussian surface is <b>imaginary</b>. Nothing is built, nothing is charged, and you may draw it wherever you like, so choose it to make the algebra collapse. <b>Match it to the symmetry:</b> a concentric SPHERE for a point charge or any spherically symmetric body, a coaxial CYLINDER for an infinite line or cylinder, a PILLBOX straddling the surface for an infinite plane. On a badly chosen surface <i>E</i> varies from point to point and cannot come out of the integral, and Gauss's law, though still true, tells you nothing you can use. <b>Split the surface into faces,</b> those where <i>E</i> is parallel to <i>dA</i>, contributing <i>E</i> times that area, and those where <i>E</i> is perpendicular to <i>dA</i>, contributing exactly zero. Half the marks in a board derivation are in that split. <b>Never let the surface pass through a point charge,</b> where the field is undefined; it may pass through a continuous distribution without any trouble. And note what Gauss's law does NOT give you: it delivers the field only where the symmetry holds, so it says nothing about the field near the end of a finite wire or the rim of a real disc."
        },
        {
          "t": "defgrid",
          "title": "Flux, Gauss, and the standard results",
          "rows": [
            { "k": "Electric flux", "v": "Φ = <i>E</i> · <i>A</i> = <i>EA</i> cos θ, unit N m<sup>2</sup>/C or V m, dimensions [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>]" },
            { "k": "Area vector", "v": "<i>A</i> = <i>A</i>n̂, magnitude the area, direction the outward normal to the surface" },
            { "k": "Gauss's law", "v": "∮<i>E</i> · <i>dA</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>, with <i>Q</i><sub>enc</sub> the ALGEBRAIC net charge inside" },
            { "k": "Infinite line", "v": "<i>E</i> = λ/(2πε<sub>0</sub><i>r</i>) = 2<i>k</i>λ/<i>r</i>, radial, falling as 1/<i>r</i>" },
            { "k": "Infinite sheet", "v": "<i>E</i> = σ/(2ε<sub>0</sub>), perpendicular to the sheet and INDEPENDENT of distance" },
            { "k": "Thin spherical shell", "v": "<i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> for <i>r</i> greater than <i>R</i>, and <i>E</i> = 0 for <i>r</i> less than <i>R</i>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FLUX, AND GAUSS'S LAW",
          "tag": "the whole topic in two lines",
          "main": "Φ = <i>E</i> · <i>A</i> = <i>EA</i> cos θ, and in general Φ = ∫<i>E</i> · <i>dA</i><br>∮<i>E</i> · <i>dA</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>",
          "legend": [
            "Φ = electric flux (N m<sup>2</sup>/C); <i>E</i> = the field at the surface (N/C); <i>A</i> = area vector, magnitude the area in m<sup>2</sup>, direction along the outward normal",
            "θ = angle between <i>E</i> and the area vector, so cos θ is 1 face-on and 0 edge-on",
            "<i>Q</i><sub>enc</sub> = net charge enclosed (C), signs included; ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>. The circle on the integral means the surface is CLOSED"
          ],
          "note": "The dot product is the one from Vector Algebra, Topic 03, used and not re-derived. Dimensional cross-check: the left side is [M L T−3 A−1][L2] = [M L3 T−3 A−1], and the right side is [A T]/[M−1 L−3 T4 A2] = [M L3 T−3 A−1]. The two sides of Gauss's law agree, which they had better."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE THREE APPLICATIONS TO MEMORISE",
          "main": "infinite line, density λ: <i>E</i> = λ/(2πε<sub>0</sub><i>r</i>)<br>infinite sheet, density σ: <i>E</i> = σ/(2ε<sub>0</sub>) · conductor surface: <i>E</i> = σ/ε<sub>0</sub><br>thin shell, charge <i>Q</i>: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> outside, <i>E</i> = 0 inside",
          "legend": [
            "<i>E</i> = field magnitude (N/C); <i>r</i> = perpendicular distance from the line, or distance from the shell's centre (m)",
            "λ = linear density (C/m); σ = surface density (C/m<sup>2</sup>); <i>Q</i> = total charge on the shell (C)",
            "<i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup>/C<sup>2</sup> and ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>; the line field is radial, the sheet field is perpendicular, the shell field is radial"
          ],
          "note": "Watch the three falloffs together, because they are the point: a point charge goes as 1/r², a line as 1/r, and a sheet not at all. The more the charge is spread out, the more slowly its field dies. And note the factor of two between a thin sheet and a conductor's surface: dimensions cannot catch that error, because both sides reduce identically. Only the physics can."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FLUX · THE FIELD THAT ACTUALLY GETS THROUGH",
          "chips": ["face-on", "tilted by θ"],
          "captions": [
            "A flat surface held square across a uniform field. Every field line that reaches the surface passes through it, so the flux is as large as it can be, Φ = EA. The area vector A points along the outward normal, which here is straight along E, so the angle between them is zero and cos θ is 1.",
            "The same surface and the same field, turned through θ. Fewer lines get through, because the surface now presents a smaller effective area, A cos θ, to the oncoming field. So Φ = EA cos θ. Keep turning until the surface is edge-on at θ = 90° and no line pierces it at all: the flux is zero, and the surface has not changed size by a millimetre."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[5, 1.2], [5, 6.0]], "tone": "amber" }
              ],
              "arrows": [
                { "from": [0.5, 1.2], "to": [9.5, 1.2], "tone": "soft" },
                { "from": [0.5, 2.4], "to": [9.5, 2.4], "tone": "soft" },
                { "from": [0.5, 4.8], "to": [9.5, 4.8], "tone": "soft" },
                { "from": [0.5, 6.0], "to": [9.5, 6.0], "tone": "soft" },
                { "from": [5.15, 3.6], "to": [6.75, 3.6], "tone": "ink", "label": "A" }
              ],
              "labels": [
                { "x": 2.2, "y": 6.6, "text": "uniform field E" },
                { "x": 7.3, "y": 0.5, "text": "face-on: flux = EA" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[3.66, 1.76], [6.34, 5.44]], "tone": "amber" }
              ],
              "arrows": [
                { "from": [0.5, 1.2], "to": [9.5, 1.2], "tone": "soft" },
                { "from": [0.5, 2.4], "to": [9.5, 2.4], "tone": "soft" },
                { "from": [0.5, 4.8], "to": [9.5, 4.8], "tone": "soft" },
                { "from": [0.5, 6.0], "to": [9.5, 6.0], "tone": "soft" },
                { "from": [5, 3.6], "to": [6.47, 2.18], "tone": "ink", "label": "A", "at": "below" }
              ],
              "arcs": [
                { "at": [5, 3.6], "r": 1.0, "from": 0, "to": -40, "label": "θ", "tone": "amber" }
              ],
              "labels": [
                { "x": 2.2, "y": 6.6, "text": "same field E" },
                { "x": 7.6, "y": 0.5, "text": "tilted: flux = EA cosθ" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE FLUX IS q/ε₀, AND WHY THE RADIUS CANCELS",
          "steps": [
            {
              "eq": "put a point charge <i>q</i> at the centre of an imaginary sphere of radius <i>r</i>",
              "why": "Choosing the sphere is the whole art. Its centre is the charge's own centre of symmetry, which is what makes every simplification below available."
            },
            {
              "eq": "by symmetry <i>E</i> is radial and has the same magnitude <i>kq</i>/<i>r</i><sup>2</sup> at every point of the surface, and it is parallel to <i>dA</i> everywhere",
              "why": "The outward normal to a sphere is radial, and so is the field. So E · dA is simply E dA at every patch, with no cosine to carry."
            },
            {
              "eq": "Φ = ∮<i>E dA</i> = <i>E</i> ∮<i>dA</i> = (<i>kq</i>/<i>r</i><sup>2</sup>)(4π<i>r</i><sup>2</sup>) = <i>q</i>/ε<sub>0</sub>",
              "why": "E comes out of the integral because it is constant on the surface, and what remains is just the sphere's area. Then 4πk = 1/ε₀ finishes it."
            },
            {
              "eq": "the radius <i>r</i> has CANCELLED",
              "why": "This is the whole discovery in one observation. The field weakens as 1/r² and the area grows as r², so their product never changes. Every sphere around the charge, near or far, passes exactly the same flux. Draw any lumpy closed surface instead and the same argument survives, patch by patch, which is how the general law follows."
            },
            {
              "eq": "a charge OUTSIDE the surface contributes zero net flux",
              "why": "Its field lines enter through one part of the surface and leave through another. Every line that goes in comes out, so the inward flux exactly cancels the outward flux. The external charge does change the field at points ON the surface; it just cannot change the total that gets through."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD OF AN INFINITE LINE CHARGE",
          "steps": [
            {
              "eq": "symmetry first: for an infinite straight wire of uniform density λ, <i>E</i> must be radial, perpendicular to the wire, and depend only on the perpendicular distance <i>r</i>",
              "why": "There is no reason for the field to favour any direction along the wire or around it, because the wire looks identical from every such position. Stating this before choosing a surface is what a board answer is marked on."
            },
            {
              "eq": "choose a coaxial cylinder of radius <i>r</i> and length <i>L</i> as the Gaussian surface",
              "why": "It matches the symmetry: on the curved face E is everywhere perpendicular to the surface and everywhere the same size, which is precisely the condition for E to leave the integral."
            },
            {
              "eq": "the two flat ends contribute nothing, because there <i>E</i> is PARALLEL to the surface, so <i>E</i> · <i>dA</i> = 0. On the curved face: Φ = <i>E</i>(2π<i>rL</i>)",
              "why": "This is the split that carries the marks. On the caps the field runs along the surface rather than through it, so not one line escapes there."
            },
            {
              "eq": "<i>Q</i><sub>enc</sub> = λ<i>L</i>, so <i>E</i>(2π<i>rL</i>) = λ<i>L</i>/ε<sub>0</sub> and <i>E</i> = λ/(2πε<sub>0</sub><i>r</i>) = 2<i>k</i>λ/<i>r</i>",
              "why": "The length L cancels, which it must: an infinite wire has no special length, so no answer about it may contain one."
            },
            {
              "eq": "the falloff is 1/<i>r</i>, SLOWER than a point charge's 1/<i>r</i><sup>2</sup>",
              "why": "Physically, as you retreat from a line more and more of it comes into play, so the line keeps feeding the field. Cross-check it against Topic 04: the finite rod's perpendicular field 2kλL/(d√(L² + 4d²)) becomes 2kλ/d as L goes to infinity, which is exactly this result reached by integration instead."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.10 · A LINE, AND THE CYLINDER THAT FITS IT",
          "chips": ["coaxial Gaussian surface"],
          "captions": [
            "An infinite line of positive charge with linear density λ, wrapped in a coaxial cylinder of radius r and length L. The field is radial everywhere, so on the curved face it is perpendicular to the surface and constant in size, giving a flux of E times 2πrL. On the two flat caps the field lies flat ALONG the surface and passes nothing through at all. The enclosed charge is λL, and the L on both sides cancels, leaving E = λ/(2πε₀r)."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 8], "axes": "none",
              "curves": [
                { "c": "ellipse", "cx": 5, "cy": 6.4, "a": 1.8, "b": 0.5, "dash": true, "soft": true },
                { "c": "ellipse", "cx": 5, "cy": 1.6, "a": 1.8, "b": 0.5, "dash": true, "soft": true }
              ],
              "polys": [
                { "pts": [[5, 0.4], [5, 7.6]], "tone": "ink" },
                { "pts": [[3.2, 1.6], [3.2, 6.4]], "dash": true, "tone": "soft" },
                { "pts": [[6.8, 1.6], [6.8, 6.4]], "dash": true, "tone": "soft" }
              ],
              "arrows": [
                { "from": [5.3, 3.2], "to": [7.8, 3.2], "tone": "amber" },
                { "from": [5.3, 4.4], "to": [7.8, 4.4], "tone": "amber", "label": "E", "at": "end" },
                { "from": [4.7, 3.2], "to": [2.2, 3.2], "tone": "amber" },
                { "from": [4.7, 4.4], "to": [2.2, 4.4], "tone": "amber" }
              ],
              "segments": [
                { "from": [5, 2.4], "to": [6.8, 2.4], "soft": true, "label": "r", "at": "mid" },
                { "from": [8.2, 1.6], "to": [8.2, 6.4], "soft": true, "label": "L", "at": "start" }
              ],
              "labels": [
                { "x": 2.4, "y": 7.4, "text": "line charge λ" },
                { "x": 7.6, "y": 7.4, "text": "Gaussian cylinder" },
                { "x": 5, "y": 0.6, "text": "no flux through the caps" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FIELD OF AN INFINITE PLANE SHEET",
          "steps": [
            {
              "eq": "symmetry: for an infinite sheet of uniform density σ, <i>E</i> must point straight away from the sheet, have the same magnitude on both sides, and not depend on distance at all",
              "why": "The sheet looks identical from every point at every distance, because it has no edge to give you a scale. That is the strange feature that makes the answer distance-free."
            },
            {
              "eq": "choose a PILLBOX, a short cylinder piercing the sheet, with flat caps of area <i>A</i> on either side",
              "why": "The caps face the field square-on; the curved side runs along it. The pillbox is to a plane what the coaxial cylinder is to a line."
            },
            {
              "eq": "the curved side contributes nothing. Each cap contributes <i>EA</i>, and there are TWO caps: Φ = 2<i>EA</i>",
              "why": "This factor of two is the entire content of the derivation, and the whole trap that follows from it. The sheet radiates in both directions, so two faces are active."
            },
            {
              "eq": "<i>Q</i><sub>enc</sub> = σ<i>A</i>, so 2<i>EA</i> = σ<i>A</i>/ε<sub>0</sub> and <i>E</i> = σ/(2ε<sub>0</sub>)",
              "why": "The area A cancels, as it must, since a patch of an infinite sheet is not special. The result contains no distance whatever, which is why the field between capacitor plates is uniform."
            },
            {
              "eq": "for a CONDUCTOR'S surface, the same pillbox gives <i>E</i> = σ/ε<sub>0</sub>, twice as much",
              "why": "Inside a conductor the field is zero, so the cap buried in the metal passes no flux at all and only ONE cap is active. One active cap instead of two, so no factor of two, so twice the field. That difference is the most punished single fact in this chapter, and Topic 04's disc result agreeing with the sheet value σ/2ε₀ by an entirely separate method is the check that the sheet half of it is right."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.11 · A SHEET, AND THE PILLBOX WITH TWO ACTIVE CAPS",
          "chips": ["two caps, hence the two"],
          "captions": [
            "An infinite sheet with uniform positive surface density σ, pierced by a cylindrical pillbox whose two flat caps each have area A. The field comes straight out of both caps, perpendicular to the sheet, so each cap contributes EA and the total flux is 2EA. Nothing at all escapes through the curved side, where the field runs along the surface. Setting 2EA equal to σA/ε₀ gives E = σ/2ε₀, and the 2 in that answer is the second cap. Bury one cap inside a conductor, where the field is zero, and only one cap is left: the answer doubles to σ/ε₀."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "curves": [
                { "c": "ellipse", "cx": 3.4, "cy": 3.6, "a": 0.4, "b": 1.25, "dash": true, "soft": true },
                { "c": "ellipse", "cx": 6.6, "cy": 3.6, "a": 0.4, "b": 1.25, "dash": true, "soft": true }
              ],
              "polys": [
                { "pts": [[5, 0.4], [5, 6.6]], "tone": "ink" },
                { "pts": [[3.4, 2.35], [6.6, 2.35]], "dash": true, "tone": "soft" },
                { "pts": [[3.4, 4.85], [6.6, 4.85]], "dash": true, "tone": "soft" }
              ],
              "marks": [
                { "x": 5, "y": 1.0, "glyph": "plus", "tone": "ink" },
                { "x": 5, "y": 2.2, "glyph": "plus", "tone": "ink" },
                { "x": 5, "y": 3.6, "glyph": "plus", "tone": "ink" },
                { "x": 5, "y": 5.0, "glyph": "plus", "tone": "ink" },
                { "x": 5, "y": 6.2, "glyph": "plus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [6.9, 3.6], "to": [8.8, 3.6], "tone": "amber", "label": "E" },
                { "from": [3.1, 3.6], "to": [1.2, 3.6], "tone": "amber", "label": "E", "at": "below" }
              ],
              "labels": [
                { "x": 2.2, "y": 6.4, "text": "sheet, density σ" },
                { "x": 6.6, "y": 5.0, "text": "cap area A" },
                { "x": 5, "y": 0.7, "text": "no flux through the side" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE UNIFORMLY CHARGED SPHERICAL SHELL, INSIDE AND OUT",
          "steps": [
            {
              "eq": "a thin shell of radius <i>R</i> carries charge <i>Q</i> spread uniformly. By spherical symmetry <i>E</i> is radial and constant in magnitude over any concentric sphere",
              "why": "One sentence, and it is the sentence the whole derivation rests on. It is also the sentence that fails the moment the charge is not spread uniformly, which is why a non-uniform shell cannot be done this way."
            },
            {
              "eq": "OUTSIDE, <i>r</i> greater than <i>R</i>: take a Gaussian sphere of radius <i>r</i>. It encloses the whole charge, so <i>E</i>(4π<i>r</i><sup>2</sup>) = <i>Q</i>/ε<sub>0</sub> and <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>",
              "why": "From outside, the shell is indistinguishable from a point charge Q at its centre. This is exactly Newton's shell theorem from Gravitation, Topic 02, obtained here in one line instead of by integrating over the shell."
            },
            {
              "eq": "at the surface, <i>r</i> = <i>R</i>: <i>E</i> = <i>kQ</i>/<i>R</i><sup>2</sup>, the largest field anywhere",
              "why": "Worth recording separately, because a question that asks for the field AT the surface is asking for the outside formula evaluated at R, and not for something between the two cases."
            },
            {
              "eq": "INSIDE, <i>r</i> less than <i>R</i>: the Gaussian sphere lies entirely within the shell and encloses NO charge, so <i>E</i>(4π<i>r</i><sup>2</sup>) = 0 and <i>E</i> = 0 everywhere inside",
              "why": "Also the shell theorem, and it is exact rather than approximate. The near part of the shell is small but close, the far part is large but distant, and because the field falls as the square of the distance the two compensate perfectly."
            },
            {
              "eq": "so the field JUMPS from 0 to <i>kQ</i>/<i>R</i><sup>2</sup> as you cross the surface",
              "why": "A surface charge is an idealisation with zero thickness, and a field is allowed to be discontinuous across one. Compare with a SOLID uniformly charged sphere, where the interior encloses a growing fraction of the charge and E = ρr/3ε₀ rises linearly from the centre before joining kQ/r² outside. Shell and solid sphere are different graphs, and merging them is a mistakes item below."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.12 · TWO GAUSSIAN SPHERES, AND THE GRAPH THEY PRODUCE",
          "chips": ["the two surfaces", "E against r"],
          "captions": [
            "A thin shell of radius R carrying charge Q on its surface, with two dashed Gaussian spheres drawn concentric with it. The larger one, at r greater than R, encloses the whole of Q, so it reports E = kQ/r² and the shell behaves from outside exactly like a point charge at the centre. The smaller one, at r less than R, encloses nothing at all, so it reports E = 0. That is why field arrows are drawn outside and none inside.",
            "The same two results as one curve. The field is flat at zero all the way out to the surface, jumps abruptly to kQ/R² there, and then decays as 1/r². The jump is real and not a drawing error: a surface charge has zero thickness, and a field is allowed to be discontinuous across one. A SOLID uniformly charged sphere gives a different left-hand half, rising linearly as ρr/3ε₀ from the centre before joining this same 1/r² tail."
          ],
          "frames": [
            {
              "x": [-6, 6], "y": [-6, 6], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 3 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 4.6, "dash": true, "soft": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.7, "dash": true, "soft": true }
              ],
              "marks": [
                { "x": 3, "y": 0, "glyph": "plus", "tone": "ink" },
                { "x": 1.5, "y": 2.598, "glyph": "plus", "tone": "ink" },
                { "x": -1.5, "y": 2.598, "glyph": "plus", "tone": "ink" },
                { "x": -3, "y": 0, "glyph": "plus", "tone": "ink" },
                { "x": -1.5, "y": -2.598, "glyph": "plus", "tone": "ink" },
                { "x": 1.5, "y": -2.598, "glyph": "plus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [2.771, 1.6], "to": [4.85, 2.8], "tone": "amber" },
                { "from": [-2.771, 1.6], "to": [-4.85, 2.8], "tone": "amber" },
                { "from": [-2.771, -1.6], "to": [-4.85, -2.8], "tone": "amber" },
                { "from": [2.771, -1.6], "to": [4.85, -2.8], "tone": "amber" }
              ],
              "labels": [
                { "x": 0, "y": 0, "text": "E = 0 inside" },
                { "x": 0, "y": 5.3, "text": "outside: E = kQ/r²" },
                { "x": -4.9, "y": 0.9, "text": "r > R" },
                { "x": -2.2, "y": 0.9, "text": "r < R" }
              ]
            },
            {
              "x": [0, 4.2], "y": [0, 1.25],
              "axisX": "distance r", "axisY": "E",
              "ticksX": { "at": [1, 2, 3], "labels": ["R", "2R", "3R"] },
              "ticksY": { "every": 0.5 },
              "curves": [
                { "c": "pts", "pts": [[0, 0], [0.999, 0]] },
                { "c": "pts", "smooth": true, "pts": [[1, 1], [1.2, 0.694], [1.4, 0.510], [1.6, 0.391], [1.8, 0.309], [2.0, 0.250], [2.4, 0.174], [2.8, 0.128], [3.2, 0.098], [3.6, 0.077], [4.0, 0.063]] },
                { "c": "pts", "dash": true, "soft": true, "pts": [[1, 0], [1, 1]] }
              ],
              "points": [
                { "x": 1, "y": 1, "label": "kQ/R²", "at": "ne" }
              ],
              "labels": [
                { "x": 0.45, "y": 0.14, "text": "E = 0 inside" },
                { "x": 2.7, "y": 0.55, "text": "kQ/r² outside" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any Gauss's law question, in five moves",
          "steps": [
            "<b>Read what is being asked for.</b> If the question wants FLUX through a closed surface, never compute a field: read off <i>Q</i><sub>enc</sub>/ε<sub>0</sub> and stop. If it wants the FIELD, you need the symmetry, and steps two to five.",
            "<b>Name the symmetry: spherical, cylindrical or planar.</b> Nothing else is tractable. If the distribution has none of the three, Gauss's law is still true and still useless, and you should be integrating instead.",
            "<b>Draw the matching Gaussian surface through the point you care about.</b> Sphere for spherical, coaxial cylinder for a line, pillbox for a plane. The point must lie ON the surface, because that is where the answer will be reported.",
            "<b>Split the flux by face.</b> Faces where <i>E</i> is parallel to the outward normal contribute <i>E</i> × area; faces where it is perpendicular contribute exactly zero. Say which is which in words: board schemes award marks for this line alone.",
            "<b>Count the enclosed charge algebraically, and solve.</b> Only what is INSIDE counts, with signs. Then finish with a check: does the answer fall as 1/<i>r</i><sup>2</sup>, 1/<i>r</i>, or not at all, and is that what this geometry should give?"
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.13 · TWO SHEETS, AND WHERE THE FIELD LIVES",
          "chips": ["the capacitor field"],
          "captions": [
            "Two large parallel sheets carrying +σ and −σ. Each one alone produces σ/2ε₀ everywhere, pointing away from the positive sheet and toward the negative one. BETWEEN the plates those two contributions point the same way and add, giving σ/ε₀ directed from positive to negative. OUTSIDE, on either side, they point opposite ways and cancel exactly to zero. This is the ideal parallel-plate capacitor field, and it drops out of Gauss's law plus superposition with no new physics at all."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[3, 0.6], [3, 6.4]], "tone": "ink" },
                { "pts": [[7, 0.6], [7, 6.4]], "tone": "ink" }
              ],
              "marks": [
                { "x": 3, "y": 1.0, "glyph": "plus", "tone": "ink" },
                { "x": 3, "y": 3.5, "glyph": "plus", "tone": "ink" },
                { "x": 3, "y": 6.0, "glyph": "plus", "tone": "ink" },
                { "x": 7, "y": 1.0, "glyph": "minus", "tone": "ink" },
                { "x": 7, "y": 3.5, "glyph": "minus", "tone": "ink" },
                { "x": 7, "y": 6.0, "glyph": "minus", "tone": "ink" }
              ],
              "arrows": [
                { "from": [3.3, 2.2], "to": [6.7, 2.2], "tone": "amber" },
                { "from": [3.3, 4.8], "to": [6.7, 4.8], "tone": "amber", "label": "E = σ/ε₀" }
              ],
              "labels": [
                { "x": 3, "y": 6.8, "text": "+σ" },
                { "x": 7, "y": 6.8, "text": "−σ" },
                { "x": 1.4, "y": 3.5, "text": "E = 0" },
                { "x": 8.6, "y": 3.5, "text": "E = 0" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD",
          "q": "A point charge <i>q</i> = +6 μC is placed at the centre of a cube of side 10 cm. (a) Find the total electric flux through the cube. (b) Find the flux through one face. Take ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup>/N m<sup>2</sup>.",
          "steps": [
            "(a) Gauss's law does not care that the surface is a cube rather than a sphere. Φ<sub>total</sub> = <i>q</i>/ε<sub>0</sub> = (6 × 10<sup>−6</sup>)/(8.854 × 10<sup>−12</sup>).",
            "Φ<sub>total</sub> = 6.8 × 10<sup>5</sup> N m<sup>2</sup>/C.",
            "(b) The charge sits at the centre, so the six faces are equivalent by symmetry and each takes an equal share: Φ<sub>face</sub> = Φ<sub>total</sub>/6 = <i>q</i>/(6ε<sub>0</sub>).",
            "Φ<sub>face</sub> = (6.8 × 10<sup>5</sup>)/6 = 1.1 × 10<sup>5</sup> N m<sup>2</sup>/C.",
            "Notice what never entered the working: the side length, 10 cm. Flux through a closed surface is size-independent, so the number would be identical for a cube of side 1 m. The symmetry argument in part (b) is what needs the charge to be at the CENTRE; move it and the six faces stop being equal."
          ],
          "ans": "total 6.8 × 10<sup>5</sup> N m<sup>2</sup>/C · per face 1.1 × 10<sup>5</sup> N m<sup>2</sup>/C"
        },
        {
          "t": "ex",
          "tag": "NEET PATTERN",
          "q": "A charge +<i>Q</i> sits inside a closed surface and the flux through it is Φ<sub>0</sub>. Without moving +<i>Q</i>: (i) the surface is enlarged to twice its size, and separately (ii) a charge +3<i>Q</i> is brought to a point just OUTSIDE the surface. Find the flux in each case.",
          "steps": [
            "The trap is to assume that a bigger surface must catch more, or that a large charge sitting right next to the surface must matter. Neither is true, and the reason is the same in both cases.",
            "(i) Enlarging the surface does not change what is ENCLOSED. Still just +<i>Q</i>, so the flux is Φ<sub>0</sub>, unchanged.",
            "(ii) The +3<i>Q</i> is outside, so <i>Q</i><sub>enc</sub> is still +<i>Q</i>. Its field lines enter one part of the surface and leave another, contributing zero net flux. The flux is Φ<sub>0</sub>, unchanged.",
            "Be precise about what DID change in case (ii): the field at points ON the surface is now completely different, because the external charge contributes to it everywhere. Only the TOTAL that gets through is unaffected. The shortcut for every question of this type is one question: what is inside?"
          ],
          "ans": "Φ<sub>0</sub> in both cases"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN PATTERN",
          "q": "Two large parallel sheets carry uniform surface densities +σ and −σ. Find the field (a) in the region between them and (b) in the regions outside.",
          "steps": [
            "Each sheet alone gives <i>E</i><sub>0</sub> = σ/(2ε<sub>0</sub>) everywhere, independent of distance. The +σ sheet's field points AWAY from it on both sides; the −σ sheet's field points TOWARD it on both sides. Then superpose.",
            "(a) Between the sheets: the +σ sheet pushes the field from the positive plate toward the negative one, and the −σ sheet pulls it the same way. The two ADD.",
            "<i>E</i><sub>between</sub> = σ/(2ε<sub>0</sub>) + σ/(2ε<sub>0</sub>) = σ/ε<sub>0</sub>, directed from the positive sheet to the negative sheet.",
            "(b) Outside, on either side: the two contributions now point in OPPOSITE directions and are equal in size, so they cancel exactly. <i>E</i><sub>outside</sub> = 0.",
            "This is the ideal parallel-plate capacitor: a uniform field σ/ε<sub>0</sub> inside and nothing outside. Note that σ/ε<sub>0</sub> here is a SUPERPOSITION of two sheets, and is not the same statement as the conductor-surface result σ/ε<sub>0</sub>, even though the two expressions look identical. Different reasoning, same number."
          ],
          "ans": "σ/ε<sub>0</sub> between, 0 outside"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED PATTERN",
          "q": "A solid sphere of radius <i>R</i> carries a volume charge density that varies as ρ(<i>r</i>) = ρ<sub>0</sub>(1 − <i>r</i>/<i>R</i>) for <i>r</i> up to <i>R</i>. Find the field (a) at an interior point and (b) at an exterior point, and verify the two agree at <i>r</i> = <i>R</i>.",
          "steps": [
            "The symmetry is still spherical even though the density varies, because ρ depends only on <i>r</i>. So <i>E</i> is radial and constant on any concentric sphere, and Gauss's law still works; only the enclosed charge is harder.",
            "(a) Integrate over shells of thickness <i>dr</i>′, each of volume 4π<i>r</i>′<sup>2</sup><i>dr</i>′: <i>Q</i><sub>enc</sub> = 4πρ<sub>0</sub>∫<sub>0</sub><sup><i>r</i></sup>(<i>r</i>′<sup>2</sup> − <i>r</i>′<sup>3</sup>/<i>R</i>)<i>dr</i>′ = 4πρ<sub>0</sub>(<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/4<i>R</i>).",
            "Apply Gauss over a sphere of radius <i>r</i>: <i>E</i>(4π<i>r</i><sup>2</sup>) = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>, giving <b><i>E</i> = (ρ<sub>0</sub>/ε<sub>0</sub>)(<i>r</i>/3 − <i>r</i><sup>2</sup>/4<i>R</i>)</b> for <i>r</i> up to <i>R</i>.",
            "(b) Outside, the whole charge is enclosed: <i>Q</i> = 4πρ<sub>0</sub>(<i>R</i><sup>3</sup>/3 − <i>R</i><sup>3</sup>/4) = 4πρ<sub>0</sub><i>R</i><sup>3</sup>/12 = πρ<sub>0</sub><i>R</i><sup>3</sup>/3. Hence <b><i>E</i> = ρ<sub>0</sub><i>R</i><sup>3</sup>/(12ε<sub>0</sub><i>r</i><sup>2</sup>)</b>.",
            "Verify at <i>r</i> = <i>R</i>. Interior: (ρ<sub>0</sub>/ε<sub>0</sub>)(<i>R</i>/3 − <i>R</i>/4) = ρ<sub>0</sub><i>R</i>/12ε<sub>0</sub>. Exterior: ρ<sub>0</sub><i>R</i><sup>3</sup>/(12ε<sub>0</sub><i>R</i><sup>2</sup>) = ρ<sub>0</sub><i>R</i>/12ε<sub>0</sub>. They match, so the field is continuous across the surface, which confirms both halves.",
            "Why continuous here but discontinuous for a shell? Because this sphere has no surface charge: its density falls smoothly to zero at <i>r</i> = <i>R</i>, since ρ(<i>R</i>) = ρ<sub>0</sub>(1 − 1) = 0. Only a genuine surface layer of zero thickness makes a field jump."
          ],
          "ans": "inside (ρ<sub>0</sub>/ε<sub>0</sub>)(<i>r</i>/3 − <i>r</i><sup>2</sup>/4<i>R</i>) · outside ρ<sub>0</sub><i>R</i><sup>3</sup>/12ε<sub>0</sub><i>r</i><sup>2</sup>"
        },
        {
          "t": "mcq",
          "q": "A closed surface encloses a net charge <i>q</i>. The SHAPE of the surface is changed, keeping <i>q</i> inside, and an extra charge is placed OUTSIDE it. The net flux through the surface:",
          "opts": [
            { "label": "increases", "nudge": "This assumes an odd or larger surface catches more field. Gauss's law contains no reference to shape or size, only to the enclosed charge." },
            { "label": "becomes zero", "nudge": "This confuses two statements. The EXTERNAL charge contributes zero net flux, which is true; the total flux is not zero, because q is still sitting inside." },
            { "label": "remains <i>q</i>/ε<sub>0</sub>", "nudge": null },
            { "label": "depends on the new shape", "nudge": "The shape independence is the whole discovery. The flux through a wildly lumpy surface around q is identical to the flux through a neat sphere around it." }
          ],
          "correct": 2,
          "solution": "Net flux equals Q_enc/ε₀, and neither change touched Q_enc. Reshaping the surface leaves q inside; the external charge sends every line that enters back out again, for zero net contribution. The field ON the surface is now different, but the total getting through is not."
        },
        {
          "t": "mcq",
          "q": "The field just outside a large CONDUCTING plate of surface density σ, and the field due to a NON-CONDUCTING infinite sheet of the same σ, are respectively:",
          "opts": [
            { "label": "σ/2ε<sub>0</sub> and σ/ε<sub>0</sub>", "nudge": "The two are the right values in the wrong order, which is the single most common wrong answer in this chapter. Ask which one has a conductor behind it, because that is the one with only one active cap." },
            { "label": "σ/ε<sub>0</sub> and σ/2ε<sub>0</sub>", "nudge": null },
            { "label": "both σ/2ε<sub>0</sub>", "nudge": "This assumes the two geometries are the same. They are not: a thin sheet radiates on both sides, while a conductor's charge has metal behind it and a field on only one side." },
            { "label": "both σ/ε<sub>0</sub>", "nudge": "Same assumption as the previous option, settled on the other value. Whichever number you pick, the two cases genuinely differ by a factor of two." }
          ],
          "correct": 1,
          "solution": "Pillbox both times, and count the active caps. A thin non-conducting sheet has the field coming out of BOTH caps, so 2EA = σA/ε₀ and E = σ/2ε₀. At a conductor's surface the field inside the metal is zero, so the buried cap passes nothing and only ONE cap is active: EA = σA/ε₀ and E = σ/ε₀. Note that dimensions cannot catch this error, since both expressions reduce identically."
        },
        {
          "t": "mcq",
          "q": "The electric field at a point INSIDE a uniformly charged thin spherical shell of radius <i>R</i> and charge <i>Q</i> is:",
          "opts": [
            { "label": "<i>kQ</i>/<i>r</i><sup>2</sup>", "nudge": "That is the field OUTSIDE the shell, correct in the wrong region. A Gaussian sphere drawn inside encloses none of Q." },
            { "label": "<i>kQ</i>/<i>R</i><sup>2</sup>", "nudge": "That is the field exactly AT the surface, which is the outside formula evaluated at r = R. It is the largest field anywhere, and it is not the interior value." },
            { "label": "zero", "nudge": null },
            { "label": "<i>kQr</i>/<i>R</i><sup>3</sup>", "nudge": "This is the interior field of a SOLID uniformly charged sphere, which rises linearly from the centre. Shell and solid sphere have quite different interiors, and this option is the trap that tests whether you merged them." }
          ],
          "correct": 2,
          "solution": "A Gaussian sphere of radius less than R lies entirely inside the shell and encloses no charge at all, so E(4πr²) = 0 and E = 0 everywhere inside. This is Newton's shell theorem in electrical clothing, and it is exact rather than approximate: the near part of the shell is small but close, the far part large but distant, and an inverse-square law makes them cancel perfectly."
        },
        {
          "t": "mcq",
          "q": "The SI unit and the dimensional formula of electric flux are:",
          "opts": [
            { "label": "N/C and [M L T<sup>−3</sup> A<sup>−1</sup>]", "nudge": "These belong to the electric FIELD, not to flux. Someone reading this option forgot to multiply by an area." },
            { "label": "N m<sup>2</sup>/C and [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>]", "nudge": null },
            { "label": "N m/C and [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]", "nudge": "Off by exactly one power of length. That combination is electric potential, which arrives in the next chapter." },
            { "label": "C/m<sup>2</sup> and dimensionless", "nudge": "This is surface charge density, an unrelated quantity, and nothing in this chapter is dimensionless except the dielectric constant." }
          ],
          "correct": 1,
          "solution": "Flux is E · A, so its unit is (N/C)(m²) = N m²/C, and [Φ] = [M L T⁻³ A⁻¹][L²] = [M L³ T⁻³ A⁻¹]. Cross-check it on the other side of Gauss's law: Q/ε₀ = [A T]/[M⁻¹ L⁻³ T⁴ A²] = [M L³ T⁻³ A⁻¹], the same."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A uniform field <i>E</i> = 5 × 10<sup>3</sup> N/C passes through a square of side 20 cm. Find the flux when the square's normal makes (a) 0° and (b) 60° with the field.", "a": "Area = (0.20)<sup>2</sup> = 0.040 m<sup>2</sup>. (a) Φ = <i>EA</i> cos 0° = (5 × 10<sup>3</sup>)(0.040)(1) = 200 N m<sup>2</sup>/C. (b) Φ = 200 × cos 60° = 200 × 0.5 = 100 N m<sup>2</sup>/C. At 90° it would be exactly zero, with the square edge-on and no line piercing it." },
            { "q": "[NEET] A point charge is placed at one CORNER of a cube. What fraction of the total flux passes through the cube?", "a": "One eighth, so Φ = <i>q</i>/8ε<sub>0</sub>. Think of eight identical cubes packed around the charge so that it sits at their common corner; together they surround it completely and share the total flux <i>q</i>/ε<sub>0</sub> equally. Note the contrast with the charge at the CENTRE of one cube, which gives <i>q</i>/6ε<sub>0</sub> per face." },
            { "q": "[JEE Main] An infinite line charge produces a field of 9 × 10<sup>4</sup> N/C at a perpendicular distance of 2 cm. Find its linear charge density λ.", "a": "From <i>E</i> = 2<i>k</i>λ/<i>r</i>, λ = <i>rE</i>/(2<i>k</i>) = (0.02)(9 × 10<sup>4</sup>)/(2 × 9 × 10<sup>9</sup>) = 1800/(1.8 × 10<sup>10</sup>) = 1.0 × 10<sup>−7</sup> C/m, which is 0.1 μC per metre. Sanity check: at twice the distance the field would be half, not a quarter, because a line falls as 1/<i>r</i>." },
            { "q": "[JEE Main] A thin spherical shell of radius 20 cm carries charge 5 μC. Find the field (a) at 30 cm and (b) at 10 cm from the centre.", "a": "(a) 30 cm is outside, so <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>)(5 × 10<sup>−6</sup>)/(0.30)<sup>2</sup> = (4.5 × 10<sup>4</sup>)/0.09 = 5.0 × 10<sup>5</sup> N/C, radially outward. (b) 10 cm is inside, so <i>E</i> = 0 exactly. No calculation is needed or expected for part (b)." },
            { "q": "[JEE Advanced] A solid sphere of radius <i>R</i> has UNIFORM volume charge density ρ. Show that the field at an interior point grows linearly, <i>E</i> = ρ<i>r</i>/3ε<sub>0</sub>.", "a": "A Gaussian sphere of radius <i>r</i> less than <i>R</i> encloses <i>Q</i><sub>enc</sub> = ρ(4/3)π<i>r</i><sup>3</sup>. Gauss gives <i>E</i>(4π<i>r</i><sup>2</sup>) = ρ(4/3)π<i>r</i><sup>3</sup>/ε<sub>0</sub>, so <i>E</i> = ρ<i>r</i>/3ε<sub>0</sub>, which rises straight from zero at the centre. At the surface it reaches ρ<i>R</i>/3ε<sub>0</sub> = <i>kQ</i>/<i>R</i><sup>2</sup>, joining the outside curve continuously, because a uniform solid sphere carries no surface layer." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing an outside charge changes the flux.</b> The <i>E</i> in ∮<i>E</i> · <i>dA</i> is the TOTAL field from all charges, inside and outside, so an external charge really does change the field at points on the surface. What it cannot change is the NET flux, because every line it sends in comes back out.",
            "<b>The σ/2ε<sub>0</sub> against σ/ε<sub>0</sub> trap.</b> A thin charged SHEET gives σ/2ε<sub>0</sub>, with the field on both sides. A CONDUCTOR'S surface gives σ/ε<sub>0</sub>, with the field on one side only. Tag which the problem describes before writing anything, because a dimensional check will not save you here: both expressions reduce identically.",
            "<b>Choosing a Gaussian surface that does not match the symmetry.</b> Gauss's law is true on any closed surface and USEFUL only where <i>E</i> is constant over each face. On an arbitrary surface <i>E</i> varies from point to point and cannot leave the integral, and you have gained nothing.",
            "<b>Merging the shell with the solid sphere.</b> Inside a thin SHELL, <i>E</i> = 0. Inside a uniformly charged SOLID sphere, <i>E</i> = ρ<i>r</i>/3ε<sub>0</sub> = <i>kQr</i>/<i>R</i><sup>3</sup>, growing linearly with <i>r</i>. Two different graphs; sketch both once and they stop swapping.",
            "<b>Computing a field when the question asked for flux.</b> If the surface is closed and the question says flux, the answer is <i>Q</i><sub>enc</sub>/ε<sub>0</sub> and there is no field calculation to do. Students routinely lose several minutes computing a field they were never asked for, and then use it wrongly."
          ]
        },
        {
          "t": "protip",
          "html": "for any closed-surface flux question, never compute a field. ask only \"what is inside?\", divide by ε<sub>0</sub>, and stop. for a field question, identify the symmetry first, draw the matching surface second, and only then split the flux into faces where <i>E</i> is parallel to the normal and faces where it is perpendicular. half the board marks live in that split, stated in words. one more result worth carrying from the source's own advanced material: a solid sphere with a spherical hole carved out of it is not a new integral at all. treat it as a full sphere of density ρ plus a smaller sphere of density −ρ sitting in the hole, add the two fields, and the field inside the cavity comes out UNIFORM, equal to ρ<i>a</i>/3ε<sub>0</sub> where <i>a</i> is the vector from the big centre to the cavity centre. that is the same negative-mass superposition trick the gravitation chapter used for a hollowed planet."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "Φ = <i>E</i> · <i>A</i> = <i>EA</i> cos θ, unit N m<sup>2</sup>/C", "note": "[M L³ T⁻³ A⁻¹]; face-on is maximum, edge-on is zero" },
            { "f": "∮<i>E</i> · <i>dA</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>", "note": "shape-independent; outside charges give zero NET flux" },
            { "f": "infinite line: <i>E</i> = λ/(2πε<sub>0</sub><i>r</i>) = 2<i>k</i>λ/<i>r</i>", "note": "radial, falls as 1/r; coaxial cylinder, caps give nothing" },
            { "f": "sheet: <i>E</i> = σ/2ε<sub>0</sub> · conductor surface: <i>E</i> = σ/ε<sub>0</sub>", "note": "two active caps against one; a pure factor of two" },
            { "f": "shell: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> outside, 0 inside · solid: ρ<i>r</i>/3ε<sub>0</sub> inside", "note": "the shell theorem, proved in four lines instead of by integration" },
            { "f": "point charge in a cube: total <i>q</i>/ε<sub>0</sub>, per face <i>q</i>/6ε<sub>0</sub>, at a corner <i>q</i>/8ε<sub>0</sub>", "note": "the side length never enters any of the three" }
          ],
          "aids": [
            "\"flux counts what is inside, shape and outsiders do not matter\"",
            "\"sheet halves it, conductor does not\"",
            "\"inside a shell nothing, inside a solid linear\"",
            "\"match the surface to the symmetry\""
          ]
        }
      ]
    }
  ]
};

export default phy12ElectricCharges;
