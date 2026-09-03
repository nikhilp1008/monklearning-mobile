/**
 * Chapter 01 · Units and Measurements. Physics, Class 11.
 *
 * Restructured from pages 8 to 73 of the Drona Class 11 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-09-mech-fluids.ts.
 *
 * SIX TOPICS FROM SIX SOURCE SUBTOPICS, AND NO MERGE. The source names exactly
 * six: 01 Systems of Units and SI Units (pp. 8 to 16), 02 Dimensional Analysis
 * and Formulas (pp. 17 to 25), 03 Errors in Measurement (pp. 26 to 34), 04
 * Significant Figures (pp. 35 to 43), 05 Measuring Instruments (pp. 44 to 52),
 * 06 Measurement of Length, Mass and Time (pp. 53 to 60). Six is exactly the
 * validator's ceiling, so nothing had to be merged and nothing was split.
 *
 * THE ROUND 2 ADDENDUM (pages 61 to 73: A dimensions through calculus, B
 * percentage errors in sums and reciprocals, C dimensional formulae of the
 * constants, D dimensionless groups and estimation) IS NOT A TOPIC, per the
 * brief. Every line drawn from it below sits in a `protip`, a `mistakes` item,
 * a `practice` item or the hardest `ex` in its group: A into Topic 02's
 * "dimensions of a coefficient" material, B into Topic 03's sum-versus-product
 * pitfall and its reciprocal `ex`, C into Topic 02's protip, D into Topic 06's
 * estimation `ex` and protip. No `formula`, `defgrid`, `deriv` or `proc` block
 * below is sourced from the addendum.
 *
 * ERRATA REVIEWED (source pages 977 to 981, in full; entries for Chapters 1, 2,
 * 4, 6, 8, 9 and 11). EXACTLY ONE ENTRY TOUCHES THIS RANGE, and it is the very
 * first entry in the list:
 *
 *   - Page 977, "Chapter 1: Units and Measurements. Page 1, 'the world finally
 *     agreed on one universal standard': wrong year for SI adoption." The
 *     source prints "So in 1971 the world finally agreed on one universal
 *     standard, the Systeme International d'Unites". Confirmed present in the
 *     extraction (PDF page 8). The 11th CGPM adopted the name SI and its
 *     framework with SIX base units in 1960; the mole became the seventh base
 *     unit only at the 14th CGPM in 1971, and the chapter has conflated the two
 *     dates. Topic 01 below says 1960, names 1971 as the year the mole joined,
 *     and makes the two-date story a `mistakes` item so a student who has seen
 *     the printed page is actively corrected rather than silently contradicted.
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 8 to 73 was recomputed independently, the addendum first because
 * the brief warns it is the least reliable part of this book. The main body of
 * this chapter is unusually clean: all four worked examples and all five
 * practice answers in each of the six subtopics reproduce exactly, and all
 * twenty-four MCQ keys are right. Seven defects survive, one of them a plain
 * arithmetic error:
 *
 *   1. ADDENDUM C, PRACTICE 3 (page 70). "In y = a sin(bx + ct), find [a], [b],
 *      [c], and the dimensions of b c." Printed answer: "[a] = L, [b] = L-1,
 *      [c] = T-1; [bc] = L T-1, again a speed, the same phase-velocity logic as
 *      Example C.4." The first three are right and the fourth is wrong.
 *      Working: the sine's argument is dimensionless, so [b][x] = 1 gives
 *      [b] = L-1 and [c][t] = 1 gives [c] = T-1. The PRODUCT is then
 *      [bc] = L-1 T-1, which is not a speed and is not any named quantity. The
 *      speed is the RATIO: [c]/[b] = T-1/L-1 = L T-1, which is exactly the
 *      omega/k of Example C.4 that the answer's own sentence appeals to. So
 *      either the question should ask for c/b, or the answer should read
 *      L-1 T-1 and drop the phase-velocity claim. CORRECT ANSWER [bc] = L-1
 *      T-1; the phase speed is c/b = L T-1. Topic 02's protip carries the ratio
 *      form and says why, so the defect cannot propagate.
 *   2. THE ORDER-OF-MAGNITUDE RULE IS STATED TWO INCOMPATIBLE WAYS. Subtopic 04
 *      (page 36) says the order of magnitude is found "by writing the value as
 *      m x 10^n with 1/2 <= m < about 5", the LINEAR-midpoint convention.
 *      Subtopic 06 (page 55) says "writing it as m x 10^n with 1 <= m < 10 and
 *      rounding the mantissa (mantissa < sqrt(10) = 3.16 rounds down, otherwise
 *      up)", the LOG-midpoint convention. The two disagree for every mantissa
 *      between 3.16 and 5: subtopic 04 makes 4 x 10^5 order 10^5, subtopic 06
 *      makes it order 10^6. Only subtopic 06 gives a reason, and only subtopic
 *      06's rule reproduces the source's own worked cases (electron 9.1 x
 *      10^-31 kg to order 10^-30, Earth 5.96 x 10^24 kg to order 10^25). Topic
 *      04 and Topic 06 below both use the sqrt(10) rule, state the threshold
 *      out loud, and Topic 04's `mistakes` names the 3.16 boundary explicitly.
 *   3. THE PARSEC IS QUOTED AT TWO DIFFERENT PRECISIONS. Subtopic 01 (page 10)
 *      prints 1 pc = 3.086 x 10^16 m; subtopic 06 (page 54) prints 3.08 x 10^16
 *      m. The true value is 3.0857 x 10^16 m, so both are honest roundings, but
 *      a student converting with one and checking against the other loses the
 *      last digit. This chapter uses 3.08 x 10^16 m throughout, which is the
 *      NCERT value, and says once that the sharper figure is 3.086 x 10^16 m.
 *   4. SUBTOPIC 01, EXAMPLE 4 (page 14) calls sqrt(Gh/c^3) = 4 x 10^-35 m
 *      "essentially the Planck length". The Planck length is sqrt(hbar G/c^3) =
 *      1.616 x 10^-35 m. Working: with h rather than hbar = h/2pi the result is
 *      larger by sqrt(2pi) = 2.5066, and 4.05/1.616 = 2.51. So the printed
 *      number is 2.5 times the Planck length. The arithmetic is right and the
 *      dimensional derivation is right; only the identification is loose. This
 *      is the single best illustration in the chapter of the method's own
 *      advertised limitation, because the missing factor IS the dimensionless
 *      constant dimensional analysis cannot supply, so Topic 01's `ex` 4 keeps
 *      the derivation and closes on exactly that point.
 *   5. SUBTOPIC 03, EXAMPLE 4 (page 32) computes R = 66.7 ohm and then squares
 *      the ROUNDED value, printing "(66.7)^2 = 4448.9". R = 200/3 = 66.667 and
 *      R^2 = 4444.4. This breaks the "round only once, at the end" rule that
 *      subtopic 04 lays down two subtopics later, in the same chapter. The
 *      printed final answer, Delta-R = 1.3 ohm, is unaffected: 4444.4 x 3.0 x
 *      10^-4 = 1.333 and 4448.9 x 3.0 x 10^-4 = 1.335, both 1.3 ohm to two
 *      significant figures. Topic 03's `ex` 4 squares the unrounded value and
 *      names the habit.
 *   6. "SI HAS SEVEN BASE UNITS AND TWO SUPPLEMENTARY UNITS" (pages 8, 9, 15,
 *      16) is out of date. The 20th CGPM (1995, Resolution 8) abolished the
 *      supplementary-unit class and reinterpreted the radian and the steradian
 *      as DIMENSIONLESS DERIVED units. Indian boards, NEET and JEE still key
 *      the answer as "2 supplementary units", and the source's own MCQ and
 *      practice answers do too, so this chapter teaches the exam answer, marks
 *      it as the exam answer, and puts the 1995 history in a `protip` rather
 *      than quietly shipping a claim the BIPM withdrew thirty years ago.
 *   7. SUBTOPIC 06, EXAMPLE 1 (page 56) reports the Moon's diameter as
 *      3.35 x 10^6 m from an angular diameter given as "about 0.5 degrees",
 *      which carries ONE significant figure. By this chapter's own Subtopic 04
 *      rule the honest report is 3 x 10^6 m. The arithmetic is right (8.727 x
 *      10^-3 rad times 3.84 x 10^8 m = 3.351 x 10^6 m); the precision claim is
 *      not. This chapter is ABOUT significant figures, so Topic 06's `ex` 1
 *      keeps the guard digits through the working, rounds to one figure at the
 *      end, and checks the answer against the accepted 3.48 x 10^6 m.
 *
 * SOURCE DAMAGE. My range turned out to contain TWO DIFFERENT AUTHORING
 * PIPELINES with two different failure modes, and the brief's predicted
 * dialects are only half present. Every passage below was re-authored from
 * context, never transcribed.
 *
 *   - THIRTY-FIVE OF SIXTY-SIX PAGES EXTRACT AS COMPLETELY EMPTY under the
 *     project's own extractor. `python3 scripts/extract-pdf.py` returns nothing
 *     at all for pages 8 to 10, 13 to 19, 22 to 28, 31 to 37, 40 to 46 and 49
 *     to 52, which is the entire body of Subtopics 01 through 05, five of the
 *     six topics. Only the interleaved figure pages (11, 12, 20, 21, 29, 30,
 *     38, 39, 47, 48) and pages 53 to 73 come through. This is a new failure
 *     mode, not one of the four the brief names, and it is fatal rather than
 *     noisy: an agent trusting that extractor would have concluded this chapter
 *     had one subtopic. POPPLER RECOVERS ALL SIXTY-SIX PAGES. `pdftotext -f 8
 *     -l 73` returns clean, ordered text for every page, and that is the source
 *     this chapter is written from. Both extractions were kept side by side and
 *     compared page by page wherever they overlap.
 *   - PAGES 8 TO 52 ARE A DIFFERENT PIPELINE FROM PAGES 53 TO 73. The first
 *     block carries ZERO Mathematical Alphanumeric characters: symbols arrive
 *     as ordinary Latin letters with real Unicode superscripts and a real
 *     U+2212 minus ("kg m2 s-2" prints as kg m<sup>2</sup> s<sup>-2</sup> with
 *     the exponents intact and inline). The second block is LaTeX-set and full
 *     of U+1D400-range glyphs: 23 distinct math-italic characters on page 73
 *     alone, and every one of D, b, theta, alpha, rho, eta, epsilon, mu, pi and
 *     omega in the range arrives that way. Those render as blank boxes and the
 *     validator rejects them, so every symbol below is retyped as an ordinary
 *     character inside <i> tags and every Greek letter as its plain Unicode
 *     form.
 *   - THE TOKEN DIALECT IS PRESENT BUT THIN, and only in the project
 *     extractor's output for pages 53 to 73. Counted across the whole range:
 *     "\nN" for the multiplication sign, 11 instances (page 56's "3.84 \nN 10 8
 *     m" is 3.84 x 10<sup>8</sup> m, and "0.5 \nN pi/180" is 0.5 x pi/180);
 *     "\nK" for the degree sign, 2 instances (page 56's "0.5 \nK" is 0.5
 *     degrees). CHECKED AND ABSENT: "\n7" for minus, "\nC" for the ratio colon,
 *     "\nA" for the centred dot, "\n;" for plus-or-minus, "\tN" for an
 *     underbrace. Zero instances of each. The poppler extraction has none of
 *     these tokens at all, which is why it was used.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES in the project
 *     extractor's output for pages 53 to 73 (every "10" followed by a bare "-15"
 *     on the next line), and DO NOT in the poppler output, where they arrive
 *     inline. Recomputing every worked example independently was the check that
 *     the exponents were rebuilt correctly.
 *   - NO ASCII-SHIFTED HEADING RUN (the "+29" pattern) appears anywhere in
 *     pages 8 to 73. Every heading extracted as readable English. NO OCTAL
 *     ESCAPES (\050 and friends): zero matches. NO LEAKED LATEX: zero literal
 *     "$" delimiters and zero raw backslash commands in the poppler text, unlike
 *     the neighbouring Chapter 8 which the errata documents.
 *   - INTER-WORD SPACES VANISH, but only mildly in the poppler text: the whole
 *     66-page range yields two clean instances, "unitconversion" (page 8, "often
 *     unitconversion or which-is-a-base-unit type") and "distancemeasuring"
 *     (page 53, "you have a distancemeasuring machine"), plus a handful of
 *     hyphen-joins across line breaks ("screwgauge reading", page 45;
 *     "order-ofmagnitude diameter", page 59). The project extractor's output for
 *     the same pages is far worse, which is the second reason it was abandoned.
 *   - THE FIGURE RENDER PAGES DROP GREEK AND MINUS SIGNS, in BOTH pipelines.
 *     Page 21 gives the pendulum's restoring force as "mgsin" with theta gone
 *     and its caption box as "t = C /g" with the ell gone; page 30 gives the
 *     plate example as "A = b, = 16.30 +- 0.05" with Delta and ell gone; page 39
 *     prints the addition column heading as "+ or" with the minus gone; page 48
 *     prints "= Observed  Zero error" and "0.04 cm add" with both minus signs
 *     gone; page 57 gives the parallax relation as "bD= D x" and "D = b/D" with
 *     every theta gone. The text of a figure is therefore the least trustworthy
 *     text in the range, which is exactly the text a figure has to be rebuilt
 *     from, so all six were rebuilt from the rendered pages instead. See PAGES
 *     RENDERED below.
 *
 * PAGES RENDERED AND LOOKED AT. Five of the six figure pages were rendered with
 * `pdftoppm -r 130 -png` and read as images, because their text layer is the
 * damaged one described above: page 12 (Figure 1.1), page 21 (Figure 1.2), page
 * 30 (Figure 1.3), page 48 (Figure 1.5) and page 57 (Figure 1.6). Page 39
 * (Figure 1.4) was not rendered: its text layer came through complete, both
 * columns and both worked examples, and nothing in it is Greek or signed.
 *
 * TWO OF THE SOURCE'S OWN FIGURES ARE UNREADABLE AS PRINTED, which is the panel
 * rule vindicated in the source itself. Figure 1.5 lays three vernier sketches
 * side by side and its three per-panel captions collide with the shared caption
 * strip: on the rendered page "Zero error = 0", "+0.04 cm subtract" and "-0.04
 * cm add" all print underneath the words "Corrected = Observed - Zero error
 * (sign included)", overlapping it and each other. Figure 1.6 drops its
 * thumb-at-arm's-length inset on top of the parallax triangle, so "parallax =
 * the apparent shift" strikes through the label A and the two D labels on the
 * triangle's sides are covered by the formula box. Both are drawn below as
 * MULTI-CHIP BLOCKS, never as panels inside one frame: Figure 1.5 as three
 * chips, Figure 1.6 as two.
 *
 * TEN FIGURES: ALL SIX NAMED ONES DRAWN, PLUS FOUR DESIGNED.
 *   - Figure 1.1, Topic 01, `flow`, one chip. A 3 x 3 grid: the seven base units
 *     at the centre with seven links fanning out to seven derived units, and the
 *     radian/steradian box in the corner with no link into it at all, which is
 *     the whole editorial point of the source's own brief.
 *   - Figure 1.2, Topic 02, `plot`, one chip. The pendulum, with the restoring
 *     component drawn as a real arrow and the mass label placed so the string
 *     does not strike it.
 *   - Figure 1.3, Topic 03, `flow`, two chips. THE BRIEF WARNS THAT ERROR
 *     PROPAGATION IS A RULES TABLE AND NOT A FIGURE, AND THE SOURCE'S OWN
 *     FIGURE 1.3 PROVES IT: the rendered page is a table of two rules with a
 *     banner over it. So this is NOT drawn as the source's rules table. It is
 *     drawn as two worked propagations with real numbers flowing through them,
 *     three inputs entering one box and one error leaving it, which is a
 *     picture of a computation rather than a picture of a rule. The rules
 *     themselves live in `formula` and `deriv` blocks where they belong.
 *   - Figure 1.4, Topic 04, `flow`, two chips. The multiply rule and the add
 *     rule, one chip each, each a chain from two inputs through a raw result to
 *     a rounded one. Two chips rather than the source's two columns, for the
 *     same reason.
 *   - Figure 1.5, Topic 05, `plot`, three chips. No zero error, positive, and
 *     negative. Each chip is one scale pair at full width, so the coinciding
 *     vernier line is actually visible.
 *   - Figure 1.6, Topic 06, `plot`, two chips. The parallax triangle, then the
 *     thumb at arm's length, which the source crushes into one frame.
 *   - DESIGNED 1, Topic 02, `flow`, two chips: the dimensional filter, an
 *     equation entering a diamond that asks whether every term matches and
 *     leaving as "definitely wrong" or "may be right, not proved right". It
 *     draws the one asymmetry the topic turns on and that no source figure
 *     covers.
 *   - DESIGNED 2, Topic 03, `plot`, two chips: the archer's target. Precise and
 *     inaccurate, then imprecise and accurate on average. The source states the
 *     distinction in prose and never draws it, and it is the single most tested
 *     conceptual point in Subtopic 03.
 *   - DESIGNED 3, Topic 05, `levels`, one chip: the least-count ladder, metre
 *     scale to vernier to screw gauge, a hundredfold in two steps.
 *   - DESIGNED 4, Topic 06, `levels`, three chips: the orders-of-magnitude
 *     ladder in length, mass and time, which the brief names as this chapter's
 *     natural picture and which the source gives only as three bulleted lists.
 *     `levels` rather than `numberline` on purpose: a numberline places every
 *     label on one horizontal line at the same height, and six labels across
 *     308pt collide.
 *
 * No new figure vocabulary is requested. Three drawing constraints paid for by
 * earlier chapters are honoured throughout: `flow` box text carries no markup
 * and every line below fits its box (the widest is 20 characters in a 116pt
 * box), `polys` with `fill: 'hatch'` is used only on rectangles and the parallax
 * triangle takes `wash`, and every container edge is a `polys` edge rather than
 * a `segments` stroke.
 *
 * DIMENSIONS. This chapter TEACHES dimensional analysis, so it is held to its
 * own method. Every formula printed below, reduced to M L T (and A, K where the
 * quantity needs them). Thirty-two lines checked, thirty-two consistent, none
 * rejected:
 *
 *   T1  P = F/A: [M L T-2]/[L2] = [M L-1 T-2], the pascal. OK
 *       J = N m: [M L T-2][L] = [M L2 T-2]. OK
 *       W = J/s: [M L2 T-2]/[T] = [M L2 T-3]. OK
 *       C = A s: [A][T] = [A T], which is why charge is derived and current is
 *       base. OK
 *       n1 u1 = n2 u2: a physical magnitude, identical on both sides, so the
 *       ratio n2/n1 = (u1/u2) is a pure number. OK
 *       n2 = n1 (M1/M2)^a (L1/L2)^b (T1/T2)^c: every bracket is a ratio of two
 *       sizes of the SAME base unit, hence dimensionless, so the equation is a
 *       number equals a number. OK
 *       d-theta = ds/r: [L]/[L] = [M0 L0 T0]. OK
 *       d-Omega = dA/r2: [L2]/[L2] = [M0 L0 T0]. OK, and the two together are
 *       the whole content of "supplementary units are dimensionless".
 *       L = c^-3/2 G^1/2 h^1/2: [L T-1]^-3/2 [M-1 L3 T-2]^1/2 [M L2 T-1]^1/2 =
 *       M^(-1/2+1/2) L^(-3/2+3/2+1) T^(3/2-1-1/2) = [L]. OK, and the exponents
 *       coming out half-integral is the signature of a three-constant unit.
 *   T2  [Q] = [M^a L^b T^c]: the definition itself, nothing to check.
 *       homogeneity, [LHS] = [term 1] = [term 2] = ...: this IS the check.
 *       t = C sqrt(l/g): sqrt([L]/[L T-2]) = sqrt([T2]) = [T]. OK, and the mass
 *       exponent coming out zero is the physics, not an accident.
 *       v = C sqrt(T/mu): sqrt([M L T-2]/[M L-1]) = sqrt([L2 T-2]) = [L T-1].
 *       OK.
 *       f = C sqrt(G rho): sqrt([M-1 L3 T-2][M L-3]) = sqrt([T-2]) = [T-1]. OK,
 *       and the radius dropping out is forced, not chosen.
 *       [dy/dx] = [Y][X]-1 and [integral y dx] = [Y][X]: a difference carries
 *       its own quantity's dimension and a limit changes no units, so the
 *       quotient carries [Y][X]-1 and the sum of y dx terms carries [Y][X]. OK.
 *       arguments of sin, cos, ln, exp are [M0 L0 T0]: forced, since a power
 *       series adds x to x2 to x3 and only a pure number can be added to its
 *       own square.
 *   T3  a_mean = (1/n) sum a_i: [A], the same as a single reading, since 1/n is
 *       a pure count. OK.
 *       Delta-a_i = |a_mean - a_i|: [A], a difference of two values of a. OK.
 *       Delta-a/a: [A]/[A] = [M0 L0 T0], which is why a percentage error can be
 *       compared across quantities and an absolute error cannot. OK.
 *       Delta-x = Delta-a + Delta-b: [A] = [A] + [A], and the rule is only
 *       legal BECAUSE a and b have the same dimension, which is exactly the
 *       homogeneity of Topic 02 reappearing. OK.
 *       Delta-x/x = p(Delta-a/a) + q(Delta-b/b) + r(Delta-c/c): every term
 *       dimensionless. OK.
 *       Delta-R = R2 (Delta-R1/R1^2 + Delta-R2/R2^2): [R]2 [R]/[R]2 = [R]. OK,
 *       and this is the check that catches the commonest slip, writing R rather
 *       than R2 out front.
 *   T4  value = m x 10^n with 1 <= m < 10: m and 10^n are both pure numbers, so
 *       scientific notation moves no dimension anywhere. OK, and that is why
 *       significant figures are unit-independent.
 *       implied uncertainty, 3.5 cm giving 3.5 +- 0.1 cm: [L] +- [L]. OK.
 *   T5  LC = 1 MSD - 1 VSD: [L] - [L] = [L], legal only because both are
 *       lengths. OK.
 *       LC = (1 MSD)/n: [L] over a pure count = [L]. OK.
 *       reading = MSR + (VSR x LC) - zero error: [L] + (pure number)[L] - [L] =
 *       [L]. OK, and it is the middle term that catches the commonest error,
 *       treating the coinciding division number as a length on its own.
 *       pitch = (distance moved)/(number of rotations): [L]. OK.
 *       LC = pitch/(circular divisions): [L]. OK.
 *   T6  theta = b/D: [L]/[L] = [M0 L0 T0], so the parallactic angle is a pure
 *       number and MUST be in radians. OK, and this one line is why degrees
 *       break the formula.
 *       D = b/theta: [L]/1 = [L]. OK.
 *       alpha = d/D and d = alpha D: dimensionless and [L]. OK.
 *       D = v t/2: [L T-1][T] = [L], the 1/2 being a pure number. OK.
 *       t = V/A: [L3]/[L2] = [L]. OK, and the reduction is the whole idea of the
 *       monolayer method.
 *       m = q B r/v: [A T][M T-2 A-1][L]/[L T-1] = [M L T-1]/[L T-1] = [M]. OK.
 *       D (in parsec) = 1/p (in arc-seconds): a defined ratio of two pure
 *       numbers, which is why it works only in those two units and in no others.
 *
 * PHYSICAL PLAUSIBILITY, every constant and magnitude checked against its real
 * value. c = 299 792 458 m/s exactly, h = 6.626 070 15 x 10^-34 J s exactly,
 * e = 1.602 176 634 x 10^-19 C exactly, k_B = 1.380 649 x 10^-23 J/K exactly,
 * N_A = 6.022 140 76 x 10^23 /mol exactly, K_cd = 683 lm/W exactly, Delta-nu_Cs
 * = 9 192 631 770 Hz exactly: all seven defining constants match the 2019 SI to
 * the last printed digit. 1 AU = 1.496 x 10^11 m (true 1.4960 x 10^11), 1 ly =
 * 9.46 x 10^15 m (true 9.4607 x 10^15), 1 u = 1.66 x 10^-27 kg (true 1.6605 x
 * 10^-27), 1 arc-second = 4.85 x 10^-6 rad (true 4.8481 x 10^-6): all good. The
 * parsec is the one loose end, see correction 3 above. Moon's diameter 3.475 x
 * 10^6 m and Earth-Moon distance 3.84 x 10^8 m, both right. Sun's diameter 1.39
 * x 10^9 m, right. Earth's mass computed as 5.96 x 10^24 kg against the true
 * 5.972 x 10^24, right. Copper atom estimated at 1.4 x 10^-10 m against the
 * measured metallic radius 1.28 x 10^-10 m, right to the decade the method
 * claims. Every order-of-magnitude ladder entry checks out under the sqrt(10)
 * rule, INCLUDING the two that look wrong at first glance: Earth's radius 6.37 x
 * 10^6 m rounds UP to 10^7 m because 6.37 > 3.16, and Earth's mass 5.97 x 10^24
 * kg rounds up to 10^25 kg for the same reason. The one entry I would not have
 * chosen is the observable universe at 10^55 kg, since the modern estimate for
 * ordinary matter is nearer 10^53 kg; 10^55 kg is NCERT's own table value and
 * the number an exam will key, so it is kept and flagged here rather than
 * quietly changed. No speed anywhere approaches c; the fastest thing in the
 * chapter is a radar pulse, which IS c.
 *
 * SIGNIFICANT FIGURES ARE THE SUBJECT, SO THEY ARE ALSO THE DISCIPLINE. Every
 * worked answer, practice answer and MCQ key below is rounded once, at the end,
 * to the precision its own inputs allow, and says which input set that
 * precision. Where the source over-claims, this chapter does not: see correction
 * 7. Where an input is exact (a pure count, a defined constant, pi taken as
 * exact), the working says so explicitly, because "which of my numbers is
 * allowed to limit the answer" is the actual skill Subtopic 04 is testing.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-11-02-motion-straight-line.ts, Topic 01 (displacement, velocity and
 *     acceleration as defined quantities, and the equations of motion): quoted
 *     in Topic 02's dimensional check of s = ut + (1/2)at^2 and in its MCQ on
 *     v = u + at, neither of which is re-derived. That file is where a student
 *     has met these; this chapter only takes their dimensions.
 *   - phy-11-02-motion-straight-line.ts, Topic 05 (the derivative as a rate of
 *     change, introduced there in one line): quoted in Topic 01's definition of
 *     pressure-style derived quantities and, more importantly, in Topic 02's
 *     protip on [dy/dx] = [Y][X]-1, which needs the reader to already accept
 *     that dy/dx is a quotient of two small quantities. Class 11 Mathematics
 *     reaches derivatives but not integrals (checked: math-11-12-limits.ts
 *     teaches differentiation only), so the integral rule is stated as the
 *     mirror image rather than derived.
 *   - math-11-12-limits.ts, Topic 01 (the limit of a difference quotient):
 *     quoted in the same protip, which turns on "taking the limit changes no
 *     units".
 *   - math-11-13-statistics.ts, Topic 01 (the arithmetic mean, and mean
 *     deviation about the mean): quoted directly in Topic 03. The mean absolute
 *     error IS the mean deviation about the mean, applied to repeated readings
 *     of one quantity, and Topic 03 says so instead of re-teaching the average.
 *     That file also teaches why deviations are taken as magnitudes, which is
 *     the same reason the absolute errors here carry modulus bars.
 *   - phy-11-09-mech-fluids.ts, Topic 05 (the coefficient of viscosity, defined
 *     there through F = eta A dv/dx): quoted in Topic 02's dimensional table as
 *     a worked entry rather than a memorised one. The two chapters agree that
 *     [eta] = [M L-1 T-1].
 *   - NOT quoted, because it is not written yet: electricity and magnetism. The
 *     source's Addendum C builds [epsilon-0], [mu-0], [B], [R] and [C] from
 *     Coulomb's law, the Lorentz force and Ohm's law. Topic 02 below carries the
 *     METHOD (isolate the constant in its defining law, then substitute) and
 *     works it on the van der Waals constants a and b, which need only pressure
 *     and volume, quantities this chapter has already defined. The electrical
 *     constants are named in a `protip` as the place the method pays off next,
 *     with their answers, and are not derived from laws a Class 11 student has
 *     not met.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11UnitsMeasurements: Chapter = {
  "chapter": "01",
  "title": "Units and Measurements",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Systems of Units, and the SI",
      "chip": "01 SI UNITS",
      "kalam": "a number without a unit is not an answer",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Systems of Units and SI Units</b><br>JEE Main carries one direct question most years, usually a unit conversion or a \"which of these is a base unit\" trap, and every dimensional-analysis problem in JEE Advanced is built on it. NEET asks it rarely and only at the definition level. CBSE Boards favour 1 to 2 mark short answers on the base units, the supplementary units, or the 2019 SI definitions.<br><br><b>02 · Dimensional Analysis and Formulas</b><br>One of the highest-yield subtopics in the whole book. JEE Main almost always carries one question: checking a relation, deriving a formula, or a conversion. JEE Advanced loves it as a tool buried inside a harder problem, and sets the judgement question of when the method breaks. NEET asks it occasionally as \"match the dimensions\". CBSE Boards typically set a 2 to 3 mark question on checking correctness or writing a dimensional formula.<br><br><b>03 · Errors in Measurement</b><br>A perennial scorer. JEE Main reliably carries one or two questions, almost always on combination of errors, finding the maximum percentage error in a derived quantity. JEE Advanced embeds error analysis inside experiment-based questions and sets the reciprocal cases the product rule cannot touch. NEET asks one question, usually conceptual: accuracy against precision, or a quick percentage error. CBSE Boards set a 2 to 3 mark question on the types of error or on mean, absolute and percentage error.<br><br><b>04 · Significant Figures</b><br>High frequency and easy to score. JEE Main carries roughly one question most years, counting figures or reporting a calculated result correctly. NEET asks a quick counting or rounding question fairly often. CBSE Boards almost always include a 1 to 2 mark question on counting significant figures or expressing an answer to the right number of them. The rules are few and the marks are cheap, provided you are precise.<br><br><b>05 · Measuring Instruments: Vernier Callipers and Screw Gauge</b><br>An examiner's favourite, because it blends a formula, a reading procedure and a sign convention. JEE Main and JEE Advanced both ask least-count and zero-error questions almost every year, often as a modified-instrument twist where no number is standard. NEET sets a quick least-count or reading question. CBSE Boards include it as a 2 to 3 mark numerical and in the practical viva, especially the least-count calculation and the zero-error correction.<br><br><b>06 · Measurement of Length, Mass and Time</b><br>The indirect-measurement toolkit. CBSE Boards favour 1 to 2 mark questions on parallax, angular size or the size-of-a-molecule estimate, and love order-of-magnitude reframing. JEE Main occasionally sets a parallax or echo numerical, and quietly tests parsec against light year. NEET asks the occasional definition or range question. JEE Advanced rarely asks it directly but leans on the estimation habit it builds. The marks are easy and conceptual, provided you keep parsec, light year and AU straight and never forget the factor of two in an echo."
        },
        {
          "t": "p",
          "html": "Call a friend in another city and say, \"I just bought a table that is five long.\" Five what? Five feet, five metres, five hand-spans? The number by itself tells him nothing. Every measurement in physics is a sentence with exactly two words, a <b>number</b> and a <b>unit</b>, and dropping either one turns the sentence into noise.<br><br>Look at what you are actually doing when you measure. You are asking a single question: <b>how many times does my chosen standard fit into this thing?</b> If your standard is the metre and the table swallows it three and a half times, the table is 3.5 m. So a measurement is a ratio, the size of the thing divided by the size of your reference. One consequence falls out immediately and you will use it as a sanity check for the rest of the chapter: <b>switch to a smaller unit and the number gets bigger</b>, because more of the small unit fit inside. A wall that is 3 m is also 300 cm. Same wall, smaller unit, bigger number."
        },
        {
          "t": "think",
          "html": "picture the seven si base units as the seven notes of indian classical music, sa re ga ma pa dha ni. just seven, and yet every raga and every film song is built by combining them. length, mass, time, electric current, temperature, amount of substance and luminous intensity are the seven notes of physics, and every quantity you will ever meet, from the energy of a falling mango to the magnetic field of a galaxy, is a song composed out of those seven."
        },
        {
          "t": "p",
          "html": "We do not need a separate fundamental standard for every quantity. That would be chaos. Instead a small handful were picked as the founding members, the <b>base</b> or fundamental quantities, and everything else is built from them. Speed is length per time. Force is mass times length per time squared. These built-from-base quantities are the <b>derived</b> quantities, and their units are derived units. It is a language: a few root words make an entire dictionary.<br><br>Different groups of people picked different founding members and different sizes for them. The British used FPS, foot, pound, second. Scientists liked CGS, centimetre, gram, second. Engineers leaned on MKS, metre, kilogram, second. The trouble is obvious: a pharma company in Pune, a NASA engineer and a French physicist measuring the same thing wrote down three different numbers. So <b>in 1960 the 11th General Conference on Weights and Measures agreed on one universal standard</b>, the Système International d'Unités, or SI, a tidied-up MKS system. It began with six base units; the <b>mole was added as the seventh only in 1971</b>. Get those two dates the right way round, because they are the sort of thing a one-mark question is made of."
        },
        {
          "t": "p",
          "html": "Even inside one agreed system, the same base quantity needs differently sized rulers for different jobs. You would give the distance between two cities in kilometres, the thickness of a hair in micrometres, the gap between two atoms in angstroms and the span of the solar system in astronomical units, and every one of those is a length. SI handles this through <b>prefixes</b>, kilo, milli, nano and the rest, so nobody has to write a number trailing twenty zeros. The base unit is still the metre; the prefixes are costumes it wears.<br><br>The deepest change came in 2019. Until then the kilogram was a lump of platinum and iridium in a vault outside Paris, and a lump of metal can be scratched, can gain dust, can drift. Since 2019 <b>every SI base unit is fixed by assigning an exact numerical value to a constant of nature</b>: the second to a caesium frequency, the metre to the speed of light, the kilogram to the Planck constant, the ampere to the elementary charge, the kelvin to the Boltzmann constant, the mole to the Avogadro constant and the candela to a luminous efficacy. Nothing can be scratched. A laboratory anywhere in the universe can rebuild the whole system from seven numbers."
        },
        {
          "t": "def",
          "term": "What makes a standard good enough to be a unit",
          "html": "Four demands, and the 2019 redefinition is what happens when a standard fails one of them. A unit must be <b>well defined</b>, so two people reading the definition build the same thing. It must be <b>invariant</b>, unchanging with time, place and temperature. It must be <b>reproducible</b> anywhere, without borrowing anyone's artefact. And it must be <b>imperishable</b>, so it cannot decay or be lost. The platinum kilogram passed the first and failed the other three, which is exactly why it was retired. Notice also that <b>the choice of which quantities are basic is a convention, not a law of nature</b>: you could build a perfectly consistent system in which speed and time are fundamental and length is derived. SI's seven are the agreed, practical choice, and that is the only sense in which they are special."
        },
        {
          "t": "defgrid",
          "title": "The seven SI base quantities",
          "rows": [
            { "k": "Length", "v": "metre, m. Dimensional formula [L]. Fixed by <i>c</i> = 299 792 458 m/s exactly" },
            { "k": "Mass", "v": "kilogram, kg. [M]. Fixed by <i>h</i> = 6.626 070 15 × 10<sup>−34</sup> J s exactly" },
            { "k": "Time", "v": "second, s. [T]. Fixed by 9 192 631 770 caesium-133 hyperfine oscillations" },
            { "k": "Electric current", "v": "ampere, A. [A]. Fixed by <i>e</i> = 1.602 176 634 × 10<sup>−19</sup> C exactly. NOT charge" },
            { "k": "Temperature", "v": "kelvin, K. [K]. Fixed by <i>k</i><sub>B</sub> = 1.380 649 × 10<sup>−23</sup> J/K exactly" },
            { "k": "Amount of substance", "v": "mole, mol. [mol]. Fixed by <i>N</i><sub>A</sub> = 6.022 140 76 × 10<sup>23</sup> /mol exactly" },
            { "k": "Luminous intensity", "v": "candela, cd. [cd]. Fixed by a luminous efficacy of 683 lm/W exactly" }
          ]
        },
        {
          "t": "defgrid",
          "title": "Derived units you must know cold",
          "rows": [
            { "k": "Force", "v": "newton, N = kg m/s<sup>2</sup>. Dimensions [M L T<sup>−2</sup>]" },
            { "k": "Work, energy, heat", "v": "joule, J = N m = kg m<sup>2</sup>/s<sup>2</sup>. [M L<sup>2</sup> T<sup>−2</sup>]" },
            { "k": "Power", "v": "watt, W = J/s = kg m<sup>2</sup>/s<sup>3</sup>. [M L<sup>2</sup> T<sup>−3</sup>]" },
            { "k": "Pressure, stress", "v": "pascal, Pa = N/m<sup>2</sup> = kg/(m s<sup>2</sup>). [M L<sup>−1</sup> T<sup>−2</sup>]" },
            { "k": "Charge", "v": "coulomb, C = A s. [A T]. Derived, because the ampere is the base unit" },
            { "k": "Frequency", "v": "hertz, Hz = 1/s. [T<sup>−1</sup>]. A cycle is a pure count, so it adds nothing" }
          ]
        },
        {
          "t": "defgrid",
          "title": "Prefixes and the practical units worth memorising",
          "rows": [
            { "k": "Large prefixes", "v": "10<sup>12</sup> tera T · 10<sup>9</sup> giga G · 10<sup>6</sup> mega M · 10<sup>3</sup> kilo k · 10<sup>2</sup> hecto h · 10<sup>1</sup> deca da" },
            { "k": "Small prefixes", "v": "10<sup>−2</sup> centi c · 10<sup>−3</sup> milli m · 10<sup>−6</sup> micro μ · 10<sup>−9</sup> nano n · 10<sup>−12</sup> pico p · 10<sup>−15</sup> femto f" },
            { "k": "Small lengths", "v": "1 angstrom = 1 Å = 10<sup>−10</sup> m, atomic sizes · 1 fermi = 1 fm = 10<sup>−15</sup> m, nuclear sizes" },
            { "k": "Large lengths", "v": "1 AU ≈ 1.496 × 10<sup>11</sup> m · 1 light year ≈ 9.46 × 10<sup>15</sup> m · 1 parsec ≈ 3.08 × 10<sup>16</sup> m" },
            { "k": "Masses", "v": "1 atomic mass unit = 1 u ≈ 1.66 × 10<sup>−27</sup> kg · 1 tonne = 10<sup>3</sup> kg · 1 quintal = 10<sup>2</sup> kg" },
            { "k": "Careful with", "v": "K is kelvin but k is the prefix kilo · M is mega but m is milli · a prefix is never used alone" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE CONVERSION MASTER RELATION",
          "tag": "one line, every conversion you will ever do",
          "main": "<i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub><br>for a quantity of dimensions [M<sup>a</sup> L<sup>b</sup> T<sup>c</sup>]:<br><i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup>a</sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup>b</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup>c</sup>",
          "legend": [
            "<i>n</i><sub>1</sub>, <i>n</i><sub>2</sub> = the numerical values in the old and the new system, both pure numbers",
            "<i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> = the SIZES of the old and the new unit, so <i>M</i><sub>1</sub>/<i>M</i><sub>2</sub> is a ratio of two mass units and carries no dimensions",
            "<i>a</i>, <i>b</i>, <i>c</i> = the exponents of mass, length and time in the quantity's own dimensional formula, and each ratio is raised to its own exponent"
          ],
          "note": "The physical magnitude of a thing is fixed by nature, so number times unit size is a constant. Everything else here is bookkeeping. The step students skip is the first one, writing down the dimensional formula, and skipping it is the number one reason a conversion comes out wrong."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO SUPPLEMENTARY UNITS",
          "tag": "both dimensionless, and that is the whole point",
          "main": "plane angle: <i>d</i>θ = <i>ds</i>/<i>r</i>, unit radian (rad)<br>solid angle: <i>d</i>Ω = <i>dA</i>/<i>r</i><sup>2</sup>, unit steradian (sr)<br>both carry [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]",
          "legend": [
            "<i>ds</i> = the arc length cut off on a circle of radius <i>r</i> (m), so the ratio is a length over a length",
            "<i>dA</i> = the patch of area cut out on a sphere of radius <i>r</i> (m<sup>2</sup>), so the ratio is an area over an area",
            "<i>r</i> = the radius in both cases (m), and it is the division by <i>r</i> that kills every dimension"
          ],
          "note": "Exam answer: SI has 7 base units and 2 supplementary units. Historical footnote worth carrying: the 20th CGPM abolished the supplementary class in 1995 and reclassified both as dimensionless DERIVED units. Boards and NEET still key the older answer, so give it, but know why."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 1.1 · SEVEN ROOTS, AND THE DICTIONARY THEY BUILD",
          "chips": ["the seven, and what they make"],
          "captions": [
            "The seven base units sit at the centre and seven arrows leave them, one to each derived unit. Read any arrow backwards and you get the definition: pressure is force over area, so kg/(m s squared); energy is force times distance, so kg m squared per s squared. The box in the corner has no arrow into it on purpose. Radian and steradian are ratios of like quantities, so they are dimensionless, and they are not base units of anything."
          ],
          "frames": [
            {
              "aspect": 0.78,
              "flow": {
                "boxes": [
                  { "id": "spd", "col": 0, "row": 0, "text": "speed\nm/s" },
                  { "id": "chg", "col": 1, "row": 0, "text": "charge\nA s (C)" },
                  { "id": "frc", "col": 2, "row": 0, "text": "force\nkg m/s² (N)" },
                  { "id": "prs", "col": 0, "row": 1, "text": "pressure\nkg/(m s²) Pa" },
                  { "id": "base", "col": 1, "row": 1, "text": "7 SI base units\nm kg s A K\nmol cd", "tone": "amber" },
                  { "id": "eng", "col": 2, "row": 1, "text": "energy\nkg m²/s² (J)" },
                  { "id": "frq", "col": 0, "row": 2, "text": "frequency\n1/s (Hz)" },
                  { "id": "pwr", "col": 1, "row": 2, "text": "power\nkg m²/s³ (W)" },
                  { "id": "sup", "col": 2, "row": 2, "text": "rad and sr\ndimensionless", "tone": "soft" }
                ],
                "links": [
                  { "from": "base", "to": "spd" },
                  { "from": "base", "to": "chg" },
                  { "from": "base", "to": "frc" },
                  { "from": "base", "to": "prs" },
                  { "from": "base", "to": "eng" },
                  { "from": "base", "to": "frq" },
                  { "from": "base", "to": "pwr" }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Writing any derived unit in base units",
          "steps": [
            "<b>Start from the defining relation, not from memory.</b> Pressure is force per area, <i>P</i> = <i>F</i>/<i>A</i>. If you cannot recall the unit, you can always recall the definition.",
            "<b>Break each piece down until only base units are left.</b> Force comes from <i>F</i> = <i>ma</i>, so it is kg × m/s<sup>2</sup> = kg m/s<sup>2</sup>. Area is m<sup>2</sup>.",
            "<b>Combine and simplify.</b> (kg m/s<sup>2</sup>)/m<sup>2</sup> = kg/(m s<sup>2</sup>), which is the pascal. Nothing was memorised; every step traced back to the seven.",
            "<b>Use this whenever the quantity is unfamiliar.</b> In an exam you will meet a quantity you have never seen. The base-unit chain is the only safe route, because the reasoning survives where a memorised result does not."
          ]
        },
        {
          "t": "proc",
          "title": "Converting a value between two systems",
          "steps": [
            "<b>Write the dimensional formula first,</b> [M<sup>a</sup> L<sup>b</sup> T<sup>c</sup>]. This is the step students skip, and skipping it is how conversions go wrong.",
            "<b>Substitute into</b> <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup>a</sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup>b</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup>c</sup>, taking each ratio as old unit over new unit.",
            "<b>Raise every ratio to its own exponent.</b> Density is [M L<sup>−3</sup>], so the length ratio is CUBED. A dimension counts how many times that unit takes part, and the ratio has to take part the same number of times.",
            "<b>Check the direction before you write the answer.</b> Converting to a smaller unit must give a larger number. If your answer breaks that, you inverted a ratio, and you have just caught the error in two seconds."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · BUILDING A UNIT OUT OF CONSTANTS, TAP A LINE",
          "steps": [
            {
              "eq": "declare <i>c</i>, <i>G</i> and <i>h</i> fundamental and ask for a LENGTH: write <i>L</i> = <i>c</i><sup>x</sup><i>G</i><sup>y</sup><i>h</i><sup>z</sup>",
              "why": "This is exactly what the 2019 SI does, only with seven constants instead of three. Anchor a few unchanging numbers and every unit follows automatically, reproducible in any laboratory in the cosmos."
            },
            {
              "eq": "insert dimensions: [<i>c</i>] = [L T<sup>−1</sup>], [<i>G</i>] = [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>], [<i>h</i>] = [M L<sup>2</sup> T<sup>−1</sup>]",
              "why": "G comes from F = Gm₁m₂/r², so [G] = [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]. Planck's constant comes from E = hν, so [h] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. Neither was memorised."
            },
            {
              "eq": "[L] = [M<sup>−y+z</sup> L<sup>x+3y+2z</sup> T<sup>−x−2y−z</sup>], so M: −<i>y</i> + <i>z</i> = 0, T: −<i>x</i> − 2<i>y</i> − <i>z</i> = 0, L: <i>x</i> + 3<i>y</i> + 2<i>z</i> = 1",
              "why": "Three base dimensions give exactly three equations, which is why three constants can be pinned and a fourth could not. Match the exponent of M, then L, then T, one at a time."
            },
            {
              "eq": "<i>z</i> = <i>y</i>, <i>x</i> = −3<i>y</i>, and −3<i>y</i> + 3<i>y</i> + 2<i>y</i> = 1 gives <i>y</i> = 1/2. So <i>L</i> = <i>c</i><sup>−3/2</sup><i>G</i><sup>1/2</sup><i>h</i><sup>1/2</sup> = √(<i>Gh</i>/<i>c</i><sup>3</sup>)",
              "why": "Half-integer exponents are the fingerprint of a three-constant unit; nothing has gone wrong. Substituting G = 6.67 × 10⁻¹¹, h = 6.63 × 10⁻³⁴ and c = 3 × 10⁸ gives Gh/c³ = 1.64 × 10⁻⁶⁹ m², so L ≈ 4 × 10⁻³⁵ m."
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "The universal gas constant <i>R</i> has the SI unit J mol<sup>−1</sup> K<sup>−1</sup>. Express this unit entirely in terms of SI base units.",
          "steps": [
            "Only the joule is not a base unit, so break it down. Energy is work, and work is force times distance: J = N × m.",
            "The newton comes from <i>F</i> = <i>ma</i>: N = kg × m/s<sup>2</sup> = kg m s<sup>−2</sup>. So J = (kg m s<sup>−2</sup>) × m = kg m<sup>2</sup> s<sup>−2</sup>.",
            "Substitute back: unit of <i>R</i> = (kg m<sup>2</sup> s<sup>−2</sup>) mol<sup>−1</sup> K<sup>−1</sup> = kg m<sup>2</sup> s<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>.",
            "Notice what survived. Mole and kelvin are base units in their own right, so they cannot be broken down any further, and a student who tries to \"simplify\" them has misunderstood what a base unit is."
          ],
          "ans": "kg m<sup>2</sup> s<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Which one of these is a base (fundamental) quantity in the SI system? (A) electric charge (B) force (C) electric current (D) energy",
          "steps": [
            "The trap is charge. It feels fundamental, it is such a basic idea, and most students tick it on reflex. In SI the chosen electrical base quantity is CURRENT, not charge.",
            "Eliminate the two obvious ones by sight: force is kg m s<sup>−2</sup> and energy is kg m<sup>2</sup> s<sup>−2</sup>, visibly built out of other units, so both are derived.",
            "That leaves charge against current. Current is charge per unit time, so charge = current × time, and the coulomb is C = A s. A unit written as a product of other units is a derived unit.",
            "The seven base quantities are a fixed list to be memorised, not a list to be reasoned out from how fundamental something feels."
          ],
          "ans": "(C) electric current"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A student measures the surface tension of a soap film as 36 dyne cm<sup>−1</sup> in the CGS system. Convert it to SI units.",
          "steps": [
            "First the dimensional formula, always. Surface tension is force per unit length: [M L T<sup>−2</sup>]/[L] = [M T<sup>−2</sup>]. So <i>a</i> = 1, <i>b</i> = 0, <i>c</i> = −2.",
            "Now the master relation, with CGS as system 1 and SI as system 2: <i>n</i><sub>2</sub> = 36 × (g/kg)<sup>1</sup> × (cm/m)<sup>0</sup> × (s/s)<sup>−2</sup>.",
            "The length ratio is raised to the power zero, so it drops out entirely, and the time ratio is 1. Since 1 g = 10<sup>−3</sup> kg, <i>n</i><sub>2</sub> = 36 × 10<sup>−3</sup> = 0.036.",
            "Direction check: the kilogram is a far bigger mass unit than the gram, so the number must shrink, and 36 became 0.036. The input carried two significant figures, so the answer keeps two."
          ],
          "ans": "0.036 N m<sup>−1</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Build a \"natural\" system in which the speed of light <i>c</i>, the gravitational constant <i>G</i> and Planck's constant <i>h</i> are all fundamental and set numerically equal to 1. Find the unit of length in terms of them and estimate its size. Take <i>c</i> = 3 × 10<sup>8</sup> m/s, <i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup> kg<sup>−2</sup>, <i>h</i> = 6.63 × 10<sup>−34</sup> J s.",
          "steps": [
            "The derivation above gives <i>L</i> = √(<i>Gh</i>/<i>c</i><sup>3</sup>). Substitute: <i>Gh</i> = (6.67 × 10<sup>−11</sup>)(6.63 × 10<sup>−34</sup>) = 4.42 × 10<sup>−44</sup>, and <i>c</i><sup>3</sup> = 2.7 × 10<sup>25</sup>.",
            "<i>Gh</i>/<i>c</i><sup>3</sup> = 1.64 × 10<sup>−69</sup> m<sup>2</sup>, so <i>L</i> = 4.0 × 10<sup>−35</sup> m. Every input carried three significant figures at most, and <i>c</i> only one, so quote it as 4 × 10<sup>−35</sup> m.",
            "This is the scale at which gravity and quantum mechanics collide, and it is close to the Planck length. Close, not equal. <b>The true Planck length is √(<i>ħG</i>/<i>c</i><sup>3</sup>) = 1.6 × 10<sup>−35</sup> m</b>, built with <i>ħ</i> = <i>h</i>/2π rather than <i>h</i>.",
            "The two differ by exactly √(2π) = 2.51, and 4.0/1.6 = 2.5. Sit with that for a second: the factor our method missed is a pure number, and a pure number is precisely what dimensional analysis is blind to. The derivation is right and the identification is loose, which is the method's honest signature."
          ],
          "ans": "<i>L</i> = √(<i>Gh</i>/<i>c</i><sup>3</sup>) ≈ 4 × 10<sup>−35</sup> m, about 2.5 times the Planck length"
        },
        {
          "t": "mcq",
          "q": "Which of the following is NOT an SI base unit?",
          "opts": [
            { "label": "mole", "nudge": "The mole is a base unit, added as the seventh in 1971. Students demote it because \"amount of substance\" sounds like a counting convention rather than a physical quantity." },
            { "label": "kelvin", "nudge": "The kelvin is a base unit. Students demote it because temperature feels like it should be derived from energy, but SI defines it as base." },
            { "label": "coulomb", "nudge": null },
            { "label": "candela", "nudge": "The candela is a base unit. Luminous intensity is on the list of seven, and forgetting it is the commonest way to name only six." }
          ],
          "correct": 2,
          "solution": "The coulomb is derived: C = A s, because SI picked the ampere, not the charge, as the electrical base unit. Every electrical quantity is then built from the ampere and the second."
        },
        {
          "t": "mcq",
          "q": "The 2019 redefinition of the SI base units was based primarily on:",
          "opts": [
            { "label": "carefully preserved physical artefacts", "nudge": "This describes the OLD kilogram, the platinum-iridium cylinder, which was abandoned in 2019 precisely because artefacts degrade. The option names the thing that was thrown away." },
            { "label": "fixed numerical values of fundamental constants", "nudge": null },
            { "label": "properties of water at standard conditions", "nudge": "This recalls the old Celsius and litre conventions tied to water. Water-based definitions are outdated and were never the basis of the 2019 change." },
            { "label": "fractions of the Earth's dimensions", "nudge": "This recalls the original 1790s metre, one ten-millionth of the Earth's quadrant. Historically true, and about two hundred years too early." }
          ],
          "correct": 1,
          "solution": "Every base unit is now fixed by assigning an exact value to a constant of nature: c, h, e, k_B, N_A, the caesium frequency and a luminous efficacy. That makes the units permanent, artefact-free and reproducible anywhere."
        },
        {
          "t": "mcq",
          "q": "Plane angle and solid angle in the SI system are best described as:",
          "opts": [
            { "label": "base quantities with their own dimensions", "nudge": "This promotes them to the list of seven, which they have never been on. They are ratios, and a ratio of two like quantities cannot be fundamental." },
            { "label": "derived quantities of dimension [L]", "nudge": "This falls for the arc length in ds/r and forgets the division by r. The r underneath cancels the length exactly." },
            { "label": "dimensionless supplementary units", "nudge": null },
            { "label": "fundamental units of dimension [L<sup>2</sup>]", "nudge": "This falls for the area in dA/r<sup>2</sup> and forgets the r<sup>2</sup> underneath, which cancels the area exactly." }
          ],
          "correct": 2,
          "solution": "Radian is ds/r and steradian is dA/r², both ratios of like quantities, so every dimension cancels and both are [M⁰ L⁰ T⁰]. Boards call them the two supplementary units, which is the answer to give."
        },
        {
          "t": "mcq",
          "q": "When one physical quantity is expressed in two different systems of units, the product (numerical value × size of the unit) is:",
          "opts": [
            { "label": "doubled", "nudge": "There is no operation here that could double anything. This is a distractor for a student guessing without reading." },
            { "label": "always constant", "nudge": null },
            { "label": "dependent on the system chosen", "nudge": "This is the subtle trap. The number changes and the unit size changes, which fools you into thinking the product changes too. They change in exactly compensating ways." },
            { "label": "equal to zero", "nudge": "A measured quantity with zero magnitude would not need units at all. Another guessing distractor." }
          ],
          "correct": 1,
          "solution": "The physical magnitude is fixed by nature and does not care what you call it, so n₁u₁ = n₂u₂ always. That single line powers every conversion in the chapter."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Express the SI unit of power, the watt, entirely in terms of base units.", "a": "Power is work per time, so W = J/s = (kg m<sup>2</sup> s<sup>−2</sup>)/s = kg m<sup>2</sup> s<sup>−3</sup>." },
            { "q": "[NEET] State the number of base quantities and the number of supplementary units in the SI system.", "a": "7 base quantities and 2 supplementary units, the radian and the steradian. (Since 1995 the BIPM calls the latter two dimensionless derived units, but boards key the older answer.)" },
            { "q": "[JEE Main] The density of a metal is 5 g cm<sup>−3</sup>. Convert it to kg m<sup>−3</sup>.", "a": "Density is [M L<sup>−3</sup>], so <i>n</i><sub>2</sub> = 5 × (g/kg)<sup>1</sup>(cm/m)<sup>−3</sup> = 5 × 10<sup>−3</sup> × 10<sup>6</sup> = 5000 kg m<sup>−3</sup>. The cube on the length ratio is the whole question." },
            { "q": "[JEE Main] In a new system the unit of force is 1000 N, the unit of length is 100 m and the unit of time is 10 s. Find the unit of mass in kilograms.", "a": "From <i>F</i> = <i>ma</i>, mass = force × time<sup>2</sup> / length = 1000 × (10)<sup>2</sup>/100 = 1000 kg." },
            { "q": "[JEE Advanced] If energy <i>E</i>, velocity <i>v</i> and time <i>T</i> are chosen as the fundamental quantities, find the dimensions of mass and of length in terms of them.", "a": "Mass = [<i>E</i> <i>v</i><sup>−2</sup>], since [M L<sup>2</sup> T<sup>−2</sup>][L<sup>−2</sup> T<sup>2</sup>] = [M]. Length = [<i>v</i> <i>T</i>], since [L T<sup>−1</sup>][T] = [L]." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Calling charge, force or energy fundamental.</b> Only electric current is the electrical base quantity, and force and energy are visibly products of other units. Memorise the seven as a fixed list; intuition is not evidence here.",
            "<b>Getting the two SI dates the wrong way round.</b> The SI was adopted in <b>1960</b> with six base units. The <b>mole</b> joined as the seventh in <b>1971</b>. A printed source that says the whole system was agreed in 1971 has merged the two events, and an examiner asking \"when was SI adopted\" wants 1960.",
            "<b>Sloppy unit symbols.</b> It is kg, never Kg or kgs. K is kelvin, k is kilo. N is the symbol but newton is the name and stays lowercase. It is s, not sec. Symbols never take a plural s and never a full stop. Boards deduct for exactly this.",
            "<b>Forgetting the dimensional power in a conversion.</b> Converting a density, [M L<sup>−3</sup>], means cubing the length ratio. Skipping the exponent is the single commonest conversion error in the chapter.",
            "<b>Giving radian or steradian a dimension.</b> They are pure ratios. Treating them as lengths or areas corrupts every dimensional check you do afterwards, because an angle that carries [L] will happily balance an equation that is actually wrong."
          ]
        },
        {
          "t": "protip",
          "html": "for any conversion, write the dimensional formula first and then plug mechanically into n₂ = n₁(M₁/M₂)^a(L₁/L₂)^b(T₁/T₂)^c. finish with the direction check: smaller unit, bigger number. that one habit kills almost every conversion mistake in about ten seconds. and if a question ever hands you a new system defined by constants rather than by rulers, do not panic: write the target as a product of powers of those constants, match M, L and T one at a time, and accept half-integer exponents when they come. that is not a mistake, it is what a three-constant system looks like, and it is exactly how the real 2019 si was built."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "7 base units: m, kg, s, A, K, mol, cd", "note": "current is base, charge is derived (C = A s)" },
            { "f": "2 supplementary units: rad, sr", "note": "ds/r and dA/r², both [M⁰ L⁰ T⁰]" },
            { "f": "SI adopted 1960 · mole added 1971 · redefined 2019", "note": "since 2019 every base unit is fixed by a constant of nature" },
            { "f": "<i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub>", "note": "magnitude is fixed by nature; number and unit trade off exactly" },
            { "f": "<i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup>a</sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup>b</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup>c</sup>", "note": "each ratio raised to its own exponent; a cube on density" },
            { "f": "N = kg m/s<sup>2</sup> · J = kg m<sup>2</sup>/s<sup>2</sup> · W = kg m<sup>2</sup>/s<sup>3</sup> · Pa = kg/(m s<sup>2</sup>)", "note": "four derived units worth knowing without thinking" }
          ],
          "aids": [
            "\"current is king, charge is its child: C = A s\"",
            "\"smaller unit, bigger number\"",
            "\"angles are ratios, so they are dimension-less\"",
            "\"sixty for the system, seventy-one for the mole\""
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Dimensional Analysis, and What It Can and Cannot Do",
      "chip": "02 DIMENSIONS",
      "kalam": "the recipe survives when the ruler changes",
      "blocks": [
        {
          "t": "p",
          "html": "Every physical quantity is a blend of a few ingredients: how much length is in it, how much mass, how much time. Think of a recipe. A samosa is not a fundamental thing; it is potato plus flour plus spices in fixed proportions. In exactly the same way speed is not fundamental, it is one part length and one part inverse time. Force is one part mass, one part length and two parts inverse time. The list of how many parts of each base ingredient a quantity contains is its <b>dimensions</b>, and writing that list compactly gives its <b>dimensional formula</b>.<br><br>We use square brackets and the letters M, L, T, A, K to record the recipe. Speed is [L T<sup>−1</sup>]. Force is [M L T<sup>−2</sup>]. Here is the beauty of it: <b>the recipe does not depend on your units at all</b>. Measure speed in m/s, in km/h or in furlongs per fortnight and the dimensional formula is [L T<sup>−1</sup>] every time. Dimensions capture what a quantity IS, stripped of the accident of which ruler you happened to pick up."
        },
        {
          "t": "think",
          "html": "imagine proofreading a friend's physics answer with no time to redo the problem. you can still catch a blunder in five seconds: check that the recipe on the left matches the recipe on the right. if she writes that pressure equals force times area, you check. pressure is [M L⁻¹ T⁻²]; force times area is [M L T⁻²][L²] = [M L³ T⁻²]. mismatch. caught, without knowing a single thing about the actual situation. dimensional analysis is the physicist's spell-checker."
        },
        {
          "t": "p",
          "html": "Why does that unit-independence matter so much? Because it means dimensions describe something real and permanent about a quantity while units are only our changeable labels. Two students in two countries using two unit systems will write different NUMBERS for the same force and the same DIMENSIONAL FORMULA. So dimensions sit underneath all the bookkeeping of units and quietly watch whether the physics makes sense.<br><br>A useful consequence follows at once. Any quantity that is a ratio of two similar things comes out <b>dimensionless</b>, with formula [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>], because the ingredients cancel perfectly. Strain is length over length. Refractive index is speed over speed. Relative density is density over density. An angle in radians is arc over radius. Every one of them is a pure number, and pure numbers are exactly what the method cannot produce, which is a limitation you will meet again in about two minutes."
        },
        {
          "t": "p",
          "html": "Now the single most powerful idea here. <b>You can only add or compare things of the same nature.</b> You would never say \"3 kilograms plus 5 seconds\"; it is gibberish. The same rule governs every equation in physics: <b>every term that is added, subtracted or equated must have identical dimensions</b>. That is the <b>principle of homogeneity</b>, and it is forced on us by the plain impossibility of adding unlike quantities, not chosen for convenience.<br><br>Homogeneity buys three things, and they are the three jobs of the topic. It lets you <b>check</b> whether an equation could be right. It lets you <b>derive</b> an unknown relationship when a quantity depends on a small number of others. And it lets you <b>convert</b> a value between unit systems, which is Topic 01's master relation seen from underneath. Physicists have used the second job to estimate the energy released by a nuclear explosion and the speed of ripples on water long before the full theory existed, so treat it as a real weapon rather than a classroom trick."
        },
        {
          "t": "def",
          "term": "Dimensional formula, and dimensional equation",
          "html": "The <b>dimensional formula</b> of a quantity is the expression [M<sup>a</sup> L<sup>b</sup> T<sup>c</sup> …] showing which base quantities make it up and to what powers. The <b>dimensional equation</b> is the statement that equates the quantity to that formula, for example [Force] = [M L T<sup>−2</sup>]. Read the exponents as a count: force contains mass once, length once and time twice over. A quantity with every exponent zero is <b>dimensionless</b>, and there is a real difference between dimensionless and unitless, because the radian is dimensionless yet still has a name. And here is the sentence examiners love: <b>equal dimensions do not mean equal quantities</b>. Work and torque are both [M L<sup>2</sup> T<sup>−2</sup>] and you can never add them, because one is a scalar you can bank and the other is a vector that turns things."
        },
        {
          "t": "defgrid",
          "title": "The dimensional formulae to know by heart, part one",
          "rows": [
            { "k": "Velocity", "v": "displacement ÷ time. [M<sup>0</sup> L T<sup>−1</sup>], SI unit m s<sup>−1</sup>" },
            { "k": "Acceleration", "v": "velocity ÷ time. [M<sup>0</sup> L T<sup>−2</sup>], SI unit m s<sup>−2</sup>" },
            { "k": "Force, weight, thrust", "v": "mass × acceleration. [M L T<sup>−2</sup>], SI unit N" },
            { "k": "Momentum, impulse", "v": "mass × velocity, and force × time. Both [M L T<sup>−1</sup>], SI unit kg m s<sup>−1</sup>" },
            { "k": "Work, energy, torque", "v": "force × distance. All three [M L<sup>2</sup> T<sup>−2</sup>], SI unit J. Same recipe, different dishes" },
            { "k": "Power", "v": "work ÷ time. [M L<sup>2</sup> T<sup>−3</sup>], SI unit W" }
          ]
        },
        {
          "t": "defgrid",
          "title": "The dimensional formulae to know by heart, part two",
          "rows": [
            { "k": "Pressure, stress, Young's modulus", "v": "force ÷ area. All [M L<sup>−1</sup> T<sup>−2</sup>], SI unit Pa" },
            { "k": "Density", "v": "mass ÷ volume. [M L<sup>−3</sup>], SI unit kg m<sup>−3</sup>" },
            { "k": "Surface tension", "v": "force ÷ length. [M L<sup>0</sup> T<sup>−2</sup>], SI unit N m<sup>−1</sup>. NOT a force" },
            { "k": "Coefficient of viscosity", "v": "from <i>F</i> = η<i>A</i>(<i>dv</i>/<i>dx</i>). [M L<sup>−1</sup> T<sup>−1</sup>], SI unit Pa s" },
            { "k": "Planck's constant", "v": "energy ÷ frequency. [M L<sup>2</sup> T<sup>−1</sup>], SI unit J s" },
            { "k": "Gravitational constant", "v": "from <i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>. [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>], SI unit N m<sup>2</sup> kg<sup>−2</sup>" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE PRINCIPLE OF HOMOGENEITY",
          "tag": "the engine under all three jobs",
          "main": "[LHS] = [term 1] = [term 2] = [term 3] = …<br>and for any function: sin, cos, ln and exp take [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>] arguments only",
          "legend": [
            "every term that is ADDED, SUBTRACTED or EQUATED in a physical equation must carry the same dimensional formula",
            "a dimensionally WRONG equation is definitely wrong; a dimensionally right one is only possibly right, because pure numbers are invisible to the method",
            "the function rule is forced: e<sup>x</sup> is 1 + <i>x</i> + <i>x</i><sup>2</sup>/2 + …, and only a pure number can be added to its own square"
          ],
          "note": "Read the function rule backwards and it hands you dimensions for free: seeing sin(ωt) tells you instantly that ωt is a pure number, so [ω] = [T⁻¹]. Seeing sin(kx − ωt) gives you [k] = [L⁻¹] as well, because the two pieces are added and each must be dimensionless on its own."
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "THE DIMENSIONAL FILTER, AND WHY IT IS ONE-SIDED",
          "chips": ["an equation that fails", "an equation that passes"],
          "captions": [
            "Feed an equation in at the top and ask the only question the method knows how to ask: does every term carry the same dimensional formula? Here the third term does not. [L T] is not [L], so homogeneity is broken and the equation is DEFINITELY wrong. No motion was solved, no numbers were substituted, and the verdict is final.",
            "The same filter, the same question, a different answer. Every term in v = u + at reduces to [L T⁻¹], so nothing is broken. But look at the verdict carefully: MAY be right, not proved right. The filter cannot see a missing one-half, a missing 2π or an extra term of the same dimensions. It catches liars, never the merely sloppy, and that asymmetry is the whole examinable content of this figure."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "q", "col": 0, "row": 0, "text": "s = ut + ½at³" },
                  { "id": "d", "col": 0, "row": 1, "text": "every term the same?", "shape": "diamond", "tone": "amber" },
                  { "id": "r", "col": 0, "row": 2, "text": "[L], [L], [L T]" },
                  { "id": "v", "col": 0, "row": 3, "text": "NO: definitely wrong", "tone": "red" }
                ],
                "links": [
                  { "from": "q", "to": "d" },
                  { "from": "d", "to": "r" },
                  { "from": "r", "to": "v" }
                ]
              }
            },
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "q", "col": 0, "row": 0, "text": "v = u + a t" },
                  { "id": "d", "col": 0, "row": 1, "text": "every term the same?", "shape": "diamond", "tone": "amber" },
                  { "id": "r", "col": 0, "row": 2, "text": "[L T⁻¹] all three" },
                  { "id": "v", "col": 0, "row": 3, "text": "MAY be right only", "tone": "green" }
                ],
                "links": [
                  { "from": "q", "to": "d" },
                  { "from": "d", "to": "r" },
                  { "from": "r", "to": "v" }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Checking whether an equation could be right",
          "steps": [
            "<b>Write the dimensional formula of the left-hand side.</b> One line, no algebra.",
            "<b>Write the formula of each right-hand term SEPARATELY.</b> Terms joined by plus or minus are checked one at a time, never lumped together.",
            "<b>Compare.</b> If the left side matches every right-hand term, the equation is dimensionally consistent and MAY be correct. If even one term differs, the equation is definitely wrong and you can stop.",
            "<b>Say the caveat out loud in a board answer.</b> \"Dimensionally correct does not imply physically correct, because the method cannot see dimensionless constants.\" That sentence is worth a mark on its own."
          ]
        },
        {
          "t": "proc",
          "title": "Deriving an unknown relationship",
          "steps": [
            "<b>Check the count first.</b> The unknown may depend on at most THREE quantities, because M, L and T give you only three equations. Four unknowns and three equations leaves the system under-determined, and recognising that is itself a JEE Advanced question.",
            "<b>Assume a single power-law product</b> with a dimensionless constant out front: <i>Q</i> = <i>C x</i><sup>a</sup><i>y</i><sup>b</sup><i>z</i><sup>c</sup>. The method cannot produce a sum of terms, so it cannot produce <i>ut</i> + ½<i>at</i><sup>2</sup>.",
            "<b>Replace every symbol by its dimensional formula</b> and collect the powers of M, L and T on the right into a single bracket.",
            "<b>Equate the exponents of M, then L, then T</b>, one base quantity at a time. Three simultaneous equations, three unknowns.",
            "<b>Substitute back and STATE that <i>C</i> is unknown.</b> Boards expect the caveat explicitly. For the pendulum <i>C</i> turns out to be 2π, and no amount of dimensional reasoning could ever have told you that."
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE PENDULUM PERIOD, TAP A LINE",
          "steps": [
            {
              "eq": "assume <i>t</i> = <i>C</i> ℓ<sup>a</sup><i>m</i><sup>b</sup><i>g</i><sup>c</sup>, where ℓ is the length, <i>m</i> the bob's mass and <i>g</i> the acceleration due to gravity",
              "why": "Three quantities, three equations available, so the method can work. C is a dimensionless constant we accept we will never find this way."
            },
            {
              "eq": "insert dimensions: [T] = [L]<sup>a</sup>[M]<sup>b</sup>[L T<sup>−2</sup>]<sup>c</sup> = [M<sup>b</sup> L<sup>a+c</sup> T<sup>−2c</sup>]",
              "why": "Collect every power of M, of L and of T into one bracket. The left side is a bare time, so its M exponent is 0, its L exponent is 0 and its T exponent is 1."
            },
            {
              "eq": "M: <i>b</i> = 0. T: −2<i>c</i> = 1, so <i>c</i> = −1/2. L: <i>a</i> + <i>c</i> = 0, so <i>a</i> = 1/2",
              "why": "Take M first, because it appears in only one place and settles b immediately. Then T fixes c, and L falls out. Notice b = 0 was forced on us; nobody decided the mass should not matter."
            },
            {
              "eq": "<i>t</i> = <i>C</i> ℓ<sup>1/2</sup><i>g</i><sup>−1/2</sup> = <i>C</i> √(ℓ/<i>g</i>), and experiment gives <i>C</i> = 2π",
              "why": "Two real physics lessons fall out of pure bookkeeping: the period does not depend on the bob's mass at all, and it grows as the square root of the length, so a pendulum four times as long ticks twice as slowly. Dimensional check: √(L/(L T⁻²)) = √(T²) = T. The 2π is the method's blind spot, and the honest answer says so."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.2 · THE PENDULUM, AND THE MASS THAT CANCELS",
          "chips": ["length decides, mass does not"],
          "captions": [
            "A bob of mass m on a string of length l, pulled aside by a small angle. Gravity pulls straight down with mg; only the component along the swing, mg sinθ, pushes it back towards the vertical dashed line. Both the restoring force and the inertia resisting it are proportional to m, so the mass cancels out of the motion entirely. Dimensional analysis reaches the same verdict without any of this reasoning, and gets there in three lines: b = 0 in t = C l^a m^b g^c."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[3, 9.3], [7, 9.3], [7, 9.8], [3, 9.8]], "close": true, "fill": "hatch", "tone": "soft" }
              ],
              "segments": [
                { "from": [5, 9.3], "to": [5, 3.4], "dash": true },
                { "from": [5, 9.3], "to": [7.257, 3.099], "label": "ℓ", "at": "mid" }
              ],
              "arcs": [
                { "at": [5, 9.3], "r": 1.2, "from": 270, "to": 292, "label": "θ", "tone": "amber" }
              ],
              "marks": [
                { "x": 7.257, "y": 3.099, "glyph": "dot", "label": "m" }
              ],
              "arrows": [
                { "from": [7.257, 3.099], "to": [7.257, 0.9], "tone": "ink", "label": "mg", "at": "end" },
                { "from": [7.257, 3.099], "to": [5.565, 2.483], "tone": "amber", "label": "mg sinθ", "at": "end" }
              ],
              "labels": [
                { "x": 3.6, "y": 6.5, "text": "vertical" },
                { "x": 2.4, "y": 2.0, "text": "m cancels out" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Before the examples, the boundaries, because examiners test them relentlessly and every one of them is a place where a confident student writes something false.<br><br><b>Dimensional correctness never proves physical correctness.</b> The method is blind to pure numbers, so it cannot see the ½ in ½<i>mv</i><sup>2</sup> or the 2π in the pendulum. It also <b>cannot distinguish two quantities with the same dimensions</b>: work and torque are both [M L<sup>2</sup> T<sup>−2</sup>], and the method will happily let you write one where the other belongs. It <b>fails when a quantity depends on more than three variables</b>, because M, L and T give only three equations. It <b>cannot produce a sum of terms</b>, so it can never hand you <i>ut</i> + ½<i>at</i><sup>2</sup> as a single expression. Knowing when NOT to trust the tool is worth as much as knowing how to use it."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A student writes the displacement of a particle as <i>s</i> = <i>ut</i> + ½<i>at</i><sup>3</sup>, where <i>u</i> is the initial velocity, <i>a</i> the acceleration and <i>t</i> the time. Check whether the equation is dimensionally correct.",
          "steps": [
            "Left-hand side. Displacement is a length: [<i>s</i>] = [L].",
            "First right-hand term. [<i>ut</i>] = [L T<sup>−1</sup>][T] = [L]. This one matches.",
            "Second right-hand term. The ½ is a pure number and contributes nothing, so [<i>at</i><sup>3</sup>] = [L T<sup>−2</sup>][T<sup>3</sup>] = [L T]. This does NOT match [L].",
            "Homogeneity is violated, so the equation is dimensionally incorrect and therefore cannot be physically correct. The right term is ½<i>at</i><sup>2</sup>, which gives [L T<sup>−2</sup>][T<sup>2</sup>] = [L]. One check exposed the error without solving any motion at all."
          ],
          "ans": "dimensionally incorrect: [<i>at</i><sup>3</sup>] = [L T], not [L]"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Which of these pairs does NOT have the same dimensional formula? (A) work and torque (B) impulse and momentum (C) pressure and stress (D) force and surface tension",
          "steps": [
            "The trap is the word \"tension\". Students see it, pair surface tension with force on reflex, and tick something else.",
            "Surface tension is force per unit LENGTH: [M L T<sup>−2</sup>]/[L] = [M T<sup>−2</sup>]. Force is [M L T<sup>−2</sup>]. They differ by exactly one power of length.",
            "Check the others quickly. Work and torque are both force × distance, [M L<sup>2</sup> T<sup>−2</sup>]. Impulse is force × time and momentum is mass × velocity, both [M L T<sup>−1</sup>]. Pressure and stress are both force ÷ area, [M L<sup>−1</sup> T<sup>−2</sup>].",
            "Never judge dimensions by a quantity's name. \"Tension\" inside \"surface tension\" does not make it a force, any more than a sea horse is a horse."
          ],
          "ans": "(D) force and surface tension"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "The speed <i>v</i> of a transverse wave on a stretched string depends on the tension <i>F</i> in the string and on μ, the mass per unit length. Use dimensional analysis to find the form of <i>v</i>.",
          "steps": [
            "Two quantities, three equations available, so the method is comfortably inside its range. Assume <i>v</i> = <i>C F</i><sup>a</sup>μ<sup>b</sup>.",
            "Dimensions: [<i>v</i>] = [L T<sup>−1</sup>], [<i>F</i>] = [M L T<sup>−2</sup>] because tension is a force, and [μ] = [M L<sup>−1</sup>]. So [L T<sup>−1</sup>] = [M<sup>a+b</sup> L<sup>a−b</sup> T<sup>−2a</sup>].",
            "T gives −2<i>a</i> = −1, so <i>a</i> = 1/2. M gives <i>a</i> + <i>b</i> = 0, so <i>b</i> = −1/2. Check with L: <i>a</i> − <i>b</i> = 1/2 + 1/2 = 1, which is what we needed. Three equations and two unknowns, and the third equation is a free consistency check.",
            "<i>v</i> = <i>C</i>√(<i>F</i>/μ). The full wave theory gives <i>C</i> = 1, but the structure was already fixed: speed rises with tension and falls with the string's heaviness, which is the examiner's real target."
          ],
          "ans": "<i>v</i> = <i>C</i>√(<i>F</i>/μ), with <i>C</i> = 1 from the full theory"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A self-gravitating cloud of gas pulsates. Its natural frequency <i>f</i> is expected to depend on its radius <i>R</i>, its mean density ρ and the gravitational constant <i>G</i>. Find how <i>f</i> depends on them and explain the striking result.",
          "steps": [
            "Assume <i>f</i> = <i>C R</i><sup>a</sup>ρ<sup>b</sup><i>G</i><sup>c</sup>. Dimensions: [<i>f</i>] = [T<sup>−1</sup>], [<i>R</i>] = [L], [ρ] = [M L<sup>−3</sup>], [<i>G</i>] = [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>].",
            "Collecting: [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>] = [M<sup>b−c</sup> L<sup>a−3b+3c</sup> T<sup>−2c</sup>].",
            "M gives <i>b</i> − <i>c</i> = 0, so <i>b</i> = <i>c</i>. T gives −2<i>c</i> = −1, so <i>c</i> = 1/2 and <i>b</i> = 1/2. L gives <i>a</i> − 3<i>b</i> + 3<i>c</i> = 0, and since <i>b</i> = <i>c</i> those two cancel, leaving <i>a</i> = 0.",
            "<i>f</i> = <i>C</i>√(<i>G</i>ρ), and the radius has dropped out completely. A giant star and a small star of the same mean density pulsate at the same rate. Astrophysicists really do use this scaling to estimate stellar pulsation timescales, and it came from bookkeeping, not from stellar structure."
          ],
          "ans": "<i>f</i> = <i>C</i>√(<i>G</i>ρ), independent of <i>R</i>"
        },
        {
          "t": "mcq",
          "q": "The dimensional formula [M L<sup>−1</sup> T<sup>−2</sup>] corresponds to:",
          "opts": [
            { "label": "force", "nudge": "Force is [M L T<sup>−2</sup>]. You get this by forgetting to divide by the area, which is exactly one power of L<sup>2</sup> short." },
            { "label": "pressure", "nudge": null },
            { "label": "energy", "nudge": "Energy is [M L<sup>2</sup> T<sup>−2</sup>]. The exponent of L is +2, not −1, and the two look alike only if you read the sign carelessly." },
            { "label": "power", "nudge": "Power is [M L<sup>2</sup> T<sup>−3</sup>]. Chosen by students who muddle the time exponent and do not check the length exponent at all." }
          ],
          "correct": 1,
          "solution": "Pressure is force per area: [M L T⁻²]/[L²] = [M L⁻¹ T⁻²]. Stress, Young's modulus and energy density share the same recipe, which is why a question of this shape can have more than one true-sounding answer and only one listed."
        },
        {
          "t": "mcq",
          "q": "An equation is found to be dimensionally correct. We can conclude that it:",
          "opts": [
            { "label": "is definitely physically correct", "nudge": "This is the single commonest conceptual error in the chapter. Consistency is necessary but not sufficient: s = ut + at<sup>2</sup> passes the check and is still wrong by a factor of two." },
            { "label": "may or may not be physically correct", "nudge": null },
            { "label": "is definitely wrong", "nudge": "This is the opposite mistake. Dimensional failure proves wrongness; dimensional success proves nothing either way." },
            { "label": "must contain a dimensionless constant", "nudge": "Tempting-sounding but false. Plenty of correct equations, v = u + at among them, carry no separate dimensionless constant at all." }
          ],
          "correct": 1,
          "solution": "The method is blind to pure numbers and to extra terms of the same dimensions, so a passing equation is only a candidate. A failing equation, by contrast, is finished."
        },
        {
          "t": "mcq",
          "q": "Dimensional analysis CANNOT be used to:",
          "opts": [
            { "label": "check the correctness of an equation", "nudge": "This is job one of three. A student who knows the three applications eliminates this at once." },
            { "label": "determine the value of a dimensionless constant", "nudge": null },
            { "label": "convert a value between unit systems", "nudge": "This is job three, and it is the whole of Topic 01's master relation. The exponents in the dimensional formula are what the unit ratios get raised to." },
            { "label": "find the dimensional formula of a derived quantity", "nudge": "This is the method's most basic use, tracing a quantity back to M, L and T through its defining relation." }
          ],
          "correct": 1,
          "solution": "The method never delivers a pure number, so ½, 2π and 6π are all beyond it. That single blindness is its defining limitation and the reason every derived relation carries an unknown C."
        },
        {
          "t": "mcq",
          "q": "Which pair has the SAME dimensional formula?",
          "opts": [
            { "label": "work and power", "nudge": "They differ by one power of time: work is [M L<sup>2</sup> T<sup>−2</sup>] and power is [M L<sup>2</sup> T<sup>−3</sup>]. Power is work per second." },
            { "label": "impulse and momentum", "nudge": null },
            { "label": "force and pressure", "nudge": "They differ by an area: pressure is force divided by [L<sup>2</sup>]. Each wrong option here is a deliberate near-miss, off by exactly one base quantity." },
            { "label": "energy and force", "nudge": "They differ by a length: energy is force times distance. Near-miss by one power of L." }
          ],
          "correct": 1,
          "solution": "Impulse is force × time = [M L T⁻²][T] = [M L T⁻¹], and momentum is mass × velocity = [M][L T⁻¹] = [M L T⁻¹]. That equality is the impulse-momentum theorem wearing a disguise."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] Find the dimensional formula of (a) the coefficient of viscosity and (b) Planck's constant.", "a": "(a) From <i>F</i> = η<i>A</i>(<i>dv</i>/<i>dx</i>): [η] = [M L T<sup>−2</sup>]/([L<sup>2</sup>][T<sup>−1</sup>]) = [M L<sup>−1</sup> T<sup>−1</sup>]. (b) From <i>E</i> = <i>h</i>ν: [<i>h</i>] = [M L<sup>2</sup> T<sup>−2</sup>]/[T<sup>−1</sup>] = [M L<sup>2</sup> T<sup>−1</sup>]." },
            { "q": "[NEET] Name a physical quantity whose dimensional formula is [M L<sup>2</sup> T<sup>−2</sup>].", "a": "Work, or energy, or torque, or heat. Any one is acceptable, and naming all four is the better answer because it shows you know the method cannot tell them apart." },
            { "q": "[JEE Main] The escape velocity <i>v</i><sub>e</sub> of a body from a planet depends on the surface gravity <i>g</i> and the planet's radius <i>R</i>. Derive the dependence.", "a": "<i>v</i><sub>e</sub> = <i>C g</i><sup>a</sup><i>R</i><sup>b</sup>. [L T<sup>−1</sup>] = [L T<sup>−2</sup>]<sup>a</sup>[L]<sup>b</sup>: T gives −2<i>a</i> = −1 so <i>a</i> = 1/2, L gives <i>a</i> + <i>b</i> = 1 so <i>b</i> = 1/2. Hence <i>v</i><sub>e</sub> = <i>C</i>√(<i>gR</i>), with <i>C</i> = √2 from the full theory." },
            { "q": "[JEE Main] Using dimensional analysis, convert 1 joule into ergs, the CGS unit of energy.", "a": "Energy is [M L<sup>2</sup> T<sup>−2</sup>], so <i>n</i><sub>2</sub> = 1 × (kg/g)<sup>1</sup>(m/cm)<sup>2</sup>(s/s)<sup>−2</sup> = 10<sup>3</sup> × 10<sup>4</sup> = 10<sup>7</sup>. So 1 J = 10<sup>7</sup> erg." },
            { "q": "[JEE Advanced] The period <i>t</i> of small oscillations of a liquid drop depends on its radius <i>r</i>, its density ρ and its surface tension <i>S</i>. Derive the form of <i>t</i>.", "a": "<i>t</i> = <i>C</i>√(ρ<i>r</i><sup>3</sup>/<i>S</i>). Check it: [ρ<i>r</i><sup>3</sup>/<i>S</i>] = [M L<sup>−3</sup>][L<sup>3</sup>]/[M T<sup>−2</sup>] = [T<sup>2</sup>], and the square root is a time. Notice how the check is faster than the derivation, which is why you should always do it." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Believing \"dimensionally correct\" means \"correct\".</b> It only means the equation survived a coarse filter. The real formula may differ by a numerical factor or carry an extra term of the same dimensions, and neither is visible to the method.",
            "<b>Forgetting to write the unknown constant.</b> When you derive a relation, always write <i>C</i> and state in words that dimensional analysis cannot evaluate it. Boards award that caveat its own mark.",
            "<b>Assuming equal dimensions means the same quantity.</b> Work and torque, energy and torque, pressure and energy density all share a formula and are physically different. Dimensions cannot tell them apart and neither can you, from dimensions alone.",
            "<b>Putting a dimensional quantity inside sin, ln or an exponential.</b> The argument of any such function is a pure number, always. If a printed formula has sin(<i>x</i>) with <i>x</i> a length, either something is missing or the formula is wrong.",
            "<b>Trying to derive a four-variable relation.</b> Three base dimensions give three equations. With four unknown exponents the system is under-determined, and the honest answer is to say so and stop, not to invent a fourth equation."
          ]
        },
        {
          "t": "protip",
          "html": "to find the dimensions of anything buried inside a formula, use homogeneity directly instead of hunting for a definition. in y = A sin(kx − ωt) you get [k] = [L⁻¹] and [ω] = [T⁻¹] in about two seconds, because kx and ωt must each be pure numbers. the same move works on derivatives: a difference Δy carries y's own dimension and a limit changes no units, so [dy/dx] = [Y][X]⁻¹ and [d²y/dx²] = [Y][X]⁻², and an integral runs the other way, [∫y dx] = [Y][X]. that single rule cracks every damped-oscillator and heat-conduction question jee sets. one caution when you form a new quantity out of two extracted constants: check whether the examiner wants the product or the ratio. for y = a sin(bx + ct) the PRODUCT bc is [L⁻¹T⁻¹] and means nothing, while the RATIO c/b is [L T⁻¹], the wave's own speed. get that backwards and a correct derivation ends in a wrong sentence."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "[Q] = [M<sup>a</sup> L<sup>b</sup> T<sup>c</sup>], and it never depends on your units", "note": "same recipe in m/s, km/h or furlongs per fortnight" },
            { "f": "homogeneity: every added or equated term shares one formula", "note": "forced by the impossibility of adding kilograms to seconds" },
            { "f": "three jobs: check, derive, convert", "note": "cannot do: pure numbers, more than 3 variables, sums of terms" },
            { "f": "dimensionally wrong ⟹ definitely wrong; dimensionally right ⟹ maybe", "note": "the one-sided filter, and the most tested sentence in the topic" },
            { "f": "<i>t</i> = <i>C</i>√(ℓ/<i>g</i>) · <i>v</i> = <i>C</i>√(<i>F</i>/μ) · <i>f</i> = <i>C</i>√(<i>G</i>ρ)", "note": "three derivations, three unknown C's, one method" },
            { "f": "arguments of sin, cos, ln, exp are always [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]", "note": "read it backwards to harvest [ω] = [T⁻¹] for free" }
          ],
          "aids": [
            "\"same recipe, different dish\" for work against torque",
            "\"dimensions catch the liar, not the sloppy\"",
            "\"inside sin, no dimension within\"",
            "\"three equations, so at most three unknowns\""
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Errors in Measurement, and How They Combine",
      "chip": "03 ERRORS",
      "kalam": "an error is not a mistake, and only one of them is your fault",
      "blocks": [
        {
          "t": "p",
          "html": "Stand on a platform and time how long a train takes to pull in. You press an imaginary stopwatch as the engine crosses a pole and stop it as the last coach clears. Did you press at exactly the right instants? Of course not. Your thumb was a fraction early once and a fraction late the next time. However hard you try, the measurement carries a small, unavoidable wrongness, and that built-in wrongness is what physics calls <b>error</b>.<br><br>Get this straight before anything else, because students mix it up constantly. <b>An error is not a mistake.</b> Writing 7 × 8 = 54 is a mistake, and you could have avoided it by being careful. Measuring a desk as 92.3 cm when it is really 92.34 cm is not carelessness, it is the limit of your instrument and your eye. <b>Mistakes can be eliminated; errors can only be estimated and reduced.</b> Accepting that is the whole spirit of experimental physics."
        },
        {
          "t": "think",
          "html": "an archer at a target makes the difference between two prized words obvious. if all her arrows land in a tight little cluster but up in the top corner, she is precise, the arrows agree with each other, and inaccurate, they miss the bull's-eye. that is systematic error. if her arrows scatter all around the centre, some left some right, she is imprecise, but their average may sit right on the gold. that is random error, and averaging can tame it. burn the picture in: precision is agreement among readings, accuracy is closeness to the truth."
        },
        {
          "t": "p",
          "html": "Errors come in three flavours that behave completely differently, and matching the cure to the disease is half the skill.<br><br><b>Systematic errors</b> are the consistent, one-directional ones. A weighing scale that reads 20 g with nothing on it makes every reading 20 g too high, same size and same sign every single time. A zero error in a screw gauge, a badly calibrated thermometer, a stopwatch that runs slow: all systematic. The good news is that being predictable, they can be found and corrected.<br><br><b>Random errors</b> are the jittery, unpredictable ones: your thumb on the stopwatch, a flicker in the mains voltage, a slight change in how you line up your eye. They scatter on both sides of the true value with no pattern. You cannot fix one of them, but you can beat them down by taking many readings and averaging.<br><br><b>Gross errors</b> are plain human blunders, misreading 23 as 32 or forgetting a unit. We do not model these; we simply stay awake. And sitting slightly apart is the <b>least-count error</b>, the smallest amount your instrument can resolve. A metre scale graduated in millimetres cannot tell you anything finer than a millimetre, whatever your eyesight."
        },
        {
          "t": "p",
          "html": "Each type has its own weapon, and picking the wrong one wastes an afternoon.<br><br>Systematic errors fall to <b>better technique</b>: check and remove the zero error, calibrate against a trusted standard, correct for a known bias such as temperature drift. Random errors fall to <b>repetition</b>: take many readings and average, because the scatter cancels. Least-count error falls to a <b>finer instrument</b>: a screw gauge (least count 0.01 mm) beats a vernier (0.1 mm), which beats a plain scale (1 mm).<br><br>Notice what this rules out. <b>Averaging is completely blind to systematic error.</b> A precise but uncalibrated instrument gives you a very repeatable wrong answer, and taking a thousand readings makes you a thousand times more confident in it. That is why the treatment of a zero error in Topic 05 is a correction and not an average."
        },
        {
          "t": "def",
          "term": "Precision and accuracy, and the assumptions underneath",
          "html": "<b>Precision</b> is how closely repeated readings agree with each other, and it is set by the instrument's resolution and by random scatter. <b>Accuracy</b> is how close a reading is to the true value, and it is destroyed by systematic error. A measurement can have either without the other, and probing that gap is the examiner's favourite conceptual question in this topic.<br><br>Three quiet assumptions hold everything here together. First, <b>we assume a true value exists</b> even though we can never know it, and we take the arithmetic mean of many readings as our best stand-in. That works for random errors only; if a systematic error is present the mean is shifted too. Second, the <b>half the least count</b> rule applies to a single reading where no repeated data exists. Third, and most important for exams, the combination-of-error formulas give the <b>maximum possible error</b>, a deliberately pessimistic worst case in which every individual error conspires in the same unlucky direction. The typical error is smaller."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "PRECISION IS NOT ACCURACY",
          "chips": ["precise, not accurate", "accurate on average, not precise"],
          "captions": [
            "Five arrows in a tight cluster, and all five in the wrong place. The archer is repeatable, so her random error is small and her precision is high, but something is pulling every shot the same way, so her accuracy is poor. This is systematic error, and shooting a thousand more arrows will not move the cluster one millimetre. The cure is to find the bias, not to shoot more.",
            "Five arrows scattered all around the gold, and none of them near a neighbour. Precision is poor, so the random error is large, and yet the average of the five sits almost exactly on the centre. This is what averaging is for, and it is the reason a lab asks for five readings of the pendulum's period rather than one."
          ],
          "frames": [
            {
              "x": [-6, 6], "y": [-4, 4], "axes": "none", "aspect": 0.675,
              "curves": [
                { "c": "circle", "r": 3, "soft": true },
                { "c": "circle", "r": 2, "soft": true },
                { "c": "circle", "r": 1 }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": 1.7, "y": 1.7, "glyph": "cross" },
                { "x": 2.0, "y": 1.6, "glyph": "cross" },
                { "x": 1.8, "y": 2.0, "glyph": "cross" },
                { "x": 2.1, "y": 1.9, "glyph": "cross" },
                { "x": 1.9, "y": 1.8, "glyph": "cross" }
              ],
              "labels": [
                { "x": 0, "y": -3.5, "text": "tight group, wrong place" }
              ]
            },
            {
              "x": [-6, 6], "y": [-4, 4], "axes": "none", "aspect": 0.675,
              "curves": [
                { "c": "circle", "r": 3, "soft": true },
                { "c": "circle", "r": 2, "soft": true },
                { "c": "circle", "r": 1 }
              ],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "amber" },
                { "x": 2.6, "y": 0.6, "glyph": "cross" },
                { "x": -2.2, "y": 1.4, "glyph": "cross" },
                { "x": 0.4, "y": -2.7, "glyph": "cross" },
                { "x": -1.4, "y": -1.9, "glyph": "cross" },
                { "x": 0.8, "y": 2.6, "glyph": "cross" }
              ],
              "labels": [
                { "x": 0, "y": -3.5, "text": "scattered, average is true" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The five error quantities, in the order you compute them",
          "rows": [
            { "k": "Mean", "v": "<i>a</i><sub>mean</sub> = (1/<i>n</i>)Σ<i>a</i><sub>i</sub>, the best stand-in for the true value. Same units as <i>a</i>" },
            { "k": "Absolute error", "v": "Δ<i>a</i><sub>i</sub> = |<i>a</i><sub>mean</sub> − <i>a</i><sub>i</sub>|, one per reading. Same units as <i>a</i>" },
            { "k": "Mean absolute error", "v": "Δ<i>a</i><sub>mean</sub> = (1/<i>n</i>)ΣΔ<i>a</i><sub>i</sub>. Report the result as <i>a</i> = <i>a</i><sub>mean</sub> ± Δ<i>a</i><sub>mean</sub>" },
            { "k": "Relative error", "v": "Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub>, dimensionless [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>], so it can be compared across quantities" },
            { "k": "Percentage error", "v": "δ<i>a</i> = (Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub>) × 100%. The form every exam question asks for" },
            { "k": "Least-count error", "v": "for a SINGLE reading with no repeats, take the absolute error as ½ × (least count), unless told otherwise" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE COMBINATION RULES",
          "tag": "worst case, always: every error pushes the same way",
          "main": "sum or difference, <i>x</i> = <i>a</i> ± <i>b</i>: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i><br>product or quotient, <i>x</i> = <i>ab</i> or <i>a</i>/<i>b</i>: Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i><br>powers, <i>x</i> = <i>a</i><sup>p</sup><i>b</i><sup>q</sup>/<i>c</i><sup>r</sup>: Δ<i>x</i>/<i>x</i> = <i>p</i>(Δ<i>a</i>/<i>a</i>) + <i>q</i>(Δ<i>b</i>/<i>b</i>) + <i>r</i>(Δ<i>c</i>/<i>c</i>)",
          "legend": [
            "Δ<i>a</i>, Δ<i>b</i>, Δ<i>c</i> = absolute errors, carrying the units of the quantities themselves",
            "<i>p</i>, <i>q</i>, <i>r</i> = the exponents in the formula, and each one MULTIPLIES its quantity's relative error. A square doubles a contribution and a square root halves it",
            "note the two surprises: in a DIFFERENCE the absolute errors still ADD, and a quantity in the DENOMINATOR still contributes with a PLUS sign"
          ],
          "note": "Every one of these is a maximum, obtained by letting all the individual errors reinforce. The consequence students miss: subtracting two nearly equal numbers keeps the absolute error the same while shrinking the result, so the percentage error explodes. Design experiments to avoid it."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY EVEN A DIFFERENCE ADDS ITS ERRORS, TAP A LINE",
          "steps": [
            {
              "eq": "let <i>x</i> = <i>a</i> + <i>b</i>, with the measured values written as (<i>a</i> ± Δ<i>a</i>) and (<i>b</i> ± Δ<i>b</i>)",
              "why": "The plus-or-minus means the true value lies anywhere inside that band. We are hunting for the widest the band on x can possibly be."
            },
            {
              "eq": "<i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>) + (<i>b</i> ± Δ<i>b</i>) = (<i>a</i> + <i>b</i>) ± (Δ<i>a</i> + Δ<i>b</i>), so Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>",
              "why": "The extreme happens when both errors take the same sign and reinforce. That is what worst case means, and it is why we never subtract errors."
            },
            {
              "eq": "now the difference, <i>x</i> = <i>a</i> − <i>b</i>: <i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>) − (<i>b</i> ± Δ<i>b</i>) = (<i>a</i> − <i>b</i>) ± Δ<i>a</i> ∓ Δ<i>b</i>",
              "why": "The minus sign flips which sign of Δb is the unlucky one, but it does not stop Δb from being unlucky. Take a as high as it can be and b as low as it can be and the difference is too big by Δa + Δb."
            },
            {
              "eq": "so Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i> for a difference as well, and the percentage error δ<i>x</i> = Δ<i>x</i>/(<i>a</i> − <i>b</i>) can now be enormous",
              "why": "Take a = 5.00 ± 0.02 cm and b = 4.00 ± 0.02 cm. Then x = 1.00 ± 0.04 cm, a 4% error built from two inputs each good to 0.4% and 0.5%. The absolute error stayed put while the result shrank by five. Never design an experiment around a small difference of two big numbers."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY A PRODUCT ADDS RELATIVE ERRORS, TAP A LINE",
          "steps": [
            {
              "eq": "let <i>x</i> = <i>ab</i>, so <i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>)(<i>b</i> ± Δ<i>b</i>) = <i>ab</i> ± <i>a</i>Δ<i>b</i> ± <i>b</i>Δ<i>a</i> ± Δ<i>a</i>Δ<i>b</i>",
              "why": "Straight expansion, nothing assumed yet. Four terms come out of two brackets."
            },
            {
              "eq": "drop the last term, Δ<i>a</i>Δ<i>b</i>",
              "why": "It is a product of two small quantities and is negligible beside the others. With Δa/a and Δb/b both around 1%, that term is around 0.01% of x, which is a hundred times smaller than the terms we are keeping."
            },
            {
              "eq": "divide right through by <i>x</i> = <i>ab</i>: 1 ± Δ<i>x</i>/<i>x</i> = 1 ± Δ<i>b</i>/<i>b</i> ± Δ<i>a</i>/<i>a</i>",
              "why": "Dividing is what converts absolute errors into relative ones, and it is the reason products and quotients obey a relative rule while sums obey an absolute one."
            },
            {
              "eq": "worst case: Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i>. For a power, <i>x</i> = <i>a</i><sup>p</sup> is <i>a</i> multiplied by itself <i>p</i> times, so Δ<i>x</i>/<i>x</i> = <i>p</i>(Δ<i>a</i>/<i>a</i>)",
              "why": "Write a³ as a × a × a and apply the product rule twice: three identical relative errors add, giving 3(Δa/a). The exponent comes down and multiplies, and a square root, p = ½, contributes half. A quantity in the denominator has p negative, but worst case takes magnitudes, so it still contributes with a plus."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 1.3 · TWO WORKED PROPAGATIONS",
          "chips": ["a sum: absolutes add", "a product: relatives add"],
          "captions": [
            "Two measured lengths enter and one sum leaves. Because the quantity is a SUM, it is the absolute errors that travel: 0.2 and 0.1 arrive and 0.3 leaves. Do not try to add the percentages here. One percentage is a fraction of 10.0 and the other is a fraction of 5.0, and a sum of fractions with different denominators is attached to nothing at all.",
            "Three percentage errors enter and one leaves, and now it is the relative errors that travel, each multiplied by its own exponent. The square on a doubles its 1% into 2%, b passes through unchanged at 2%, and the square root on c halves its 4% into 2%. Total 6%. Notice that a is measured most precisely of the three and still contributes as much as b: that is what a squared term does to an error budget, and it tells you which quantity to measure carefully."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "a = 10.0 ± 0.2" },
                  { "id": "b", "col": 2, "row": 0, "text": "b = 5.0 ± 0.1" },
                  { "id": "x", "col": 1, "row": 1, "text": "x = a + b\n= 15.0", "tone": "amber" },
                  { "id": "d", "col": 1, "row": 2, "text": "Δx = Δa + Δb\n= 0.3" }
                ],
                "links": [
                  { "from": "a", "to": "x" },
                  { "from": "b", "to": "x" },
                  { "from": "x", "to": "d" }
                ]
              }
            },
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "δa = 1%" },
                  { "id": "b", "col": 1, "row": 0, "text": "δb = 2%" },
                  { "id": "c", "col": 2, "row": 0, "text": "δc = 4%" },
                  { "id": "x", "col": 1, "row": 1, "text": "x = a²b/√c", "tone": "amber" },
                  { "id": "d", "col": 1, "row": 2, "text": "δx = 2δa+δb+½δc\n= 6%" }
                ],
                "links": [
                  { "from": "a", "to": "x" },
                  { "from": "b", "to": "x" },
                  { "from": "c", "to": "x" },
                  { "from": "x", "to": "d" }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Any \"find the maximum percentage error\" question, in ten seconds",
          "steps": [
            "<b>Do not compute absolute errors first.</b> That is the slow route and it is only needed for sums, differences and reciprocals.",
            "<b>Write the quantity as a product of powers</b>, <i>x</i> = <i>a</i><sup>p</sup><i>b</i><sup>q</sup>/<i>c</i><sup>r</sup>. Pull every numerical factor out; π, ½ and 4 are exact and contribute nothing.",
            "<b>Say the answer straight out:</b> δ<i>x</i> = <i>p</i>δ<i>a</i> + <i>q</i>δ<i>b</i> + <i>r</i>δ<i>c</i>, then substitute the percentages. A three-minute calculation collapses to one line.",
            "<b>Look at which term contributed most.</b> It is almost always the quantity with the highest power, and that tells you instantly where a real experiment should spend its care. In a Searle's-apparatus question with δ<i>m</i> = 1%, δ<i>L</i> = 0.2%, δ<i>r</i> = 0.5% and δ<i>e</i> = 1.5% and <i>Y</i> proportional to <i>mL</i>/(<i>r</i><sup>2</sup><i>e</i>), the answer is 1 + 0.2 + 2(0.5) + 1.5 = 3.7%, and the radius quietly out-bids the extension despite being the smaller number.",
            "<b>Switch methods when the relation is not a product of powers.</b> For anything of the form 1/<i>x</i> = 1/<i>a</i> ± 1/<i>b</i>, which covers parallel resistors, thin lenses, mirrors and springs, differentiate instead: Δ<i>x</i> = <i>x</i><sup>2</sup>(Δ<i>a</i>/<i>a</i><sup>2</sup> + Δ<i>b</i>/<i>b</i><sup>2</sup>)."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "The period of a simple pendulum is measured five times: 2.56 s, 2.54 s, 2.59 s, 2.55 s, 2.51 s. Find the mean period, the mean absolute error, the relative error and the percentage error, and report the result properly.",
          "steps": [
            "Mean: (2.56 + 2.54 + 2.59 + 2.55 + 2.51)/5 = 12.75/5 = 2.55 s. Every reading carries two decimal places, so the mean does too.",
            "Absolute errors, |<i>T</i><sub>mean</sub> − <i>T</i><sub>i</sub>|: 0.01, 0.01, 0.04, 0.00, 0.04 s. Take magnitudes, always, or the deviations cancel and you learn nothing.",
            "Mean absolute error: (0.01 + 0.01 + 0.04 + 0.00 + 0.04)/5 = 0.10/5 = 0.02 s.",
            "Relative error = 0.02/2.55 = 0.0078, so the percentage error is 0.78%. Report the period as <i>T</i> = (2.55 ± 0.02) s: the uncertainty is quoted to one significant figure and the value is quoted to the same decimal place, which is the convention that stops you claiming 2.5482 ± 0.02."
          ],
          "ans": "<i>T</i> = (2.55 ± 0.02) s, about 0.78%"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A quantity is computed as <i>Z</i> = <i>A</i><sup>2</sup><i>B</i>/√<i>C</i>. The percentage errors in <i>A</i>, <i>B</i> and <i>C</i> are 2%, 1% and 4%. Find the maximum percentage error in <i>Z</i>.",
          "steps": [
            "The lazy answer just adds 2 + 1 + 4 = 7%. It is wrong twice over: it ignores the square on <i>A</i> and it ignores the square root on <i>C</i>.",
            "Apply the power rule with the exponents attached: δ<i>Z</i> = 2(δ<i>A</i>) + 1(δ<i>B</i>) + ½(δ<i>C</i>).",
            "Substitute: 2(2%) + 1% + ½(4%) = 4% + 1% + 2% = 7%.",
            "The number came out 7% too, but only by coincidence of these particular figures, and the coincidence is the trap. Change <i>C</i> to 8% and the lazy route gives 11% while the correct one gives 9%. Attach the exponent every time: a square doubles a contribution, a square root halves it, and a quantity in the denominator still adds."
          ],
          "ans": "7%, from 2(2%) + 1% + ½(4%)"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "The density of a small steel sphere is found from its mass and its diameter. The mass is <i>m</i> = (50.0 ± 0.1) g and the diameter is <i>d</i> = (2.00 ± 0.01) cm. Find the maximum percentage error in the density.",
          "steps": [
            "Set up the formula. Density is ρ = <i>m</i>/<i>V</i>, and for a sphere <i>V</i> = (π/6)<i>d</i><sup>3</sup>, so ρ = 6<i>m</i>/(π<i>d</i><sup>3</sup>).",
            "Identify the powers: ρ is proportional to <i>m</i><sup>1</sup><i>d</i><sup>−3</sup>. The factor 6/π is exact and contributes no error at all.",
            "Power rule: δρ = 1(δ<i>m</i>) + 3(δ<i>d</i>). Compute the two inputs: δ<i>m</i> = 0.1/50.0 = 0.2%, δ<i>d</i> = 0.01/2.00 = 0.5%.",
            "δρ = 0.2% + 3(0.5%) = 0.2% + 1.5% = 1.7%. Look where the error lives: the diameter is measured more precisely in absolute terms and still contributes seven times more, because it enters as a cube. In an experiment, spend your care on the highest-power quantity."
          ],
          "ans": "1.7%, of which 1.5% comes from the diameter alone"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Two resistors, <i>R</i><sub>1</sub> = (100 ± 2) Ω and <i>R</i><sub>2</sub> = (200 ± 4) Ω, are connected in parallel. Find the equivalent resistance and its absolute error.",
          "steps": [
            "Central value: 1/<i>R</i> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>, so <i>R</i> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) = (100)(200)/300 = 66.67 Ω.",
            "Why the product rule fails here: <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub> appear in both the numerator and the denominator of that expression, coupled together, so adding relative errors would count each of them twice.",
            "Differentiate the reciprocal form instead, which separates the variables cleanly: −Δ<i>R</i>/<i>R</i><sup>2</sup> = −Δ<i>R</i><sub>1</sub>/<i>R</i><sub>1</sub><sup>2</sup> − Δ<i>R</i><sub>2</sub>/<i>R</i><sub>2</sub><sup>2</sup>, and taking magnitudes for the worst case, Δ<i>R</i> = <i>R</i><sup>2</sup>(Δ<i>R</i><sub>1</sub>/<i>R</i><sub>1</sub><sup>2</sup> + Δ<i>R</i><sub>2</sub>/<i>R</i><sub>2</sub><sup>2</sup>).",
            "Substitute, and square the UNROUNDED 66.67, not the rounded 66.7, because rounding once at the end is the rule this chapter is about: Δ<i>R</i> = (66.67)<sup>2</sup>(2/10000 + 4/40000) = 4444(3.0 × 10<sup>−4</sup>) = 1.33 Ω. So <i>R</i> = (66.7 ± 1.3) Ω. The same template handles capacitors in series, thin lenses and spring combinations, which is why it is worth the extra line."
          ],
          "ans": "<i>R</i> = (66.7 ± 1.3) Ω"
        },
        {
          "t": "mcq",
          "q": "Random errors in a measurement can be reduced by:",
          "opts": [
            { "label": "correcting the instrument's zero error", "nudge": "A zero error is the textbook SYSTEMATIC error: fixed size, fixed sign, every reading. Correcting it does nothing about scatter." },
            { "label": "taking many readings and averaging", "nudge": null },
            { "label": "recalibrating against a standard", "nudge": "Recalibration also attacks systematic error. This option and the zero-error one are the same confusion offered twice, which is exactly what the question is testing." },
            { "label": "using a cleaner formula", "nudge": "Algebra does not touch the physical scatter in your readings. The measurement was already taken by the time the formula appears." }
          ],
          "correct": 1,
          "solution": "Random errors scatter both ways with no pattern, so their average tends towards zero as readings pile up. That is exactly what averaging is for, and it is also exactly what averaging cannot do to a systematic bias."
        },
        {
          "t": "mcq",
          "q": "For <i>R</i> = <i>AB</i>/<i>C</i>, the maximum relative error in <i>R</i> equals:",
          "opts": [
            { "label": "the sum of the absolute errors in <i>A</i>, <i>B</i> and <i>C</i>", "nudge": "This mixes absolute with relative, which is a dimensional impossibility: you would be adding a length to a time to a mass and calling the result a fraction." },
            { "label": "the sum of the relative errors in <i>A</i>, <i>B</i> and <i>C</i>", "nudge": null },
            { "label": "the difference of the relative errors", "nudge": "This is the seductive trap. Students reason that the denominator should subtract, but worst case forbids it: the unlucky case is C being too small while A and B are too big." },
            { "label": "the product of the relative errors", "nudge": "This confuses adding errors with multiplying quantities. A product of two 1% errors is 0.01%, which was the term we deliberately threw away in the derivation." }
          ],
          "correct": 1,
          "solution": "For products and quotients the relative errors add, and a quantity in the denominator contributes with a plus sign too, because we are taking the worst possible combination of signs."
        },
        {
          "t": "mcq",
          "q": "A measurement is described as having high precision but low accuracy. This most likely indicates:",
          "opts": [
            { "label": "large random error, small systematic error", "nudge": "That is the opposite archer: arrows scattered widely but centred on the gold, which is low precision and possibly good accuracy on average." },
            { "label": "small random error, large systematic error", "nudge": null },
            { "label": "both errors large", "nudge": "If the random error were large the readings would not agree with each other, and the question has already told you they do." },
            { "label": "both errors negligible", "nudge": "Negligible systematic error is exactly what accuracy means, and the question has told you accuracy is low." }
          ],
          "correct": 1,
          "solution": "High precision means the readings agree tightly, so random error is small. Low accuracy means they sit far from the truth, so a systematic bias is shifting all of them. That is the clustered-but-off archer."
        },
        {
          "t": "mcq",
          "q": "If <i>Z</i> = <i>A</i><sup>n</sup>, the relative error in <i>Z</i> is:",
          "opts": [
            { "label": "equal to the relative error in <i>A</i>", "nudge": "This forgets the exponent entirely. It would make the error in a cube the same as the error in the length, which the density example just disproved." },
            { "label": "<i>n</i> times the relative error in <i>A</i>", "nudge": null },
            { "label": "1/<i>n</i> times the relative error in <i>A</i>", "nudge": "This inverts the rule, a common slip for roots. But even a root follows the same rule: a square root has n = ½, so it contributes half, which IS n times." },
            { "label": "<i>n</i> times the ABSOLUTE error in <i>A</i>", "nudge": "This mixes relative on the left with absolute on the right. The two sides would not even have the same dimensions." }
          ],
          "correct": 1,
          "solution": "The exponent multiplies the relative error: ΔZ/Z = n(ΔA/A). Write Aⁿ as A multiplied by itself n times and apply the product rule; n identical relative errors add."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] The mass of an object is measured five times: 5.12 g, 5.16 g, 5.10 g, 5.14 g, 5.13 g. Find the mean mass, the mean absolute error and the percentage error.", "a": "Mean = 25.65/5 = 5.13 g. Deviations 0.01, 0.03, 0.03, 0.01, 0.00, so Δ<i>m</i><sub>mean</sub> = 0.08/5 = 0.016 g. δ<i>m</i> = 0.016/5.13 ≈ 0.31%. Report <i>m</i> = (5.13 ± 0.02) g." },
            { "q": "[NEET] <i>Z</i> = <i>A</i><sup>3</sup>/<i>B</i><sup>2</sup>, with percentage errors of 1% in <i>A</i> and 2% in <i>B</i>. Find the maximum percentage error in <i>Z</i>.", "a": "δ<i>Z</i> = 3(1%) + 2(2%) = 3% + 4% = 7%. The denominator contributes with a plus sign, not a minus." },
            { "q": "[JEE Main] Resistance is found from <i>R</i> = <i>V</i>/<i>I</i>, with <i>V</i> = (8.0 ± 0.2) V and <i>I</i> = (2.0 ± 0.1) A. Find <i>R</i> and its maximum percentage error.", "a": "<i>R</i> = 8.0/2.0 = 4.0 Ω. δ<i>R</i> = 0.2/8.0 + 0.1/2.0 = 2.5% + 5% = 7.5%, so Δ<i>R</i> = 0.3 Ω and <i>R</i> = (4.0 ± 0.3) Ω. The ammeter is the weak link." },
            { "q": "[JEE Main] A pendulum's period is found by timing 20 oscillations: <i>t</i> = (40.0 ± 0.1) s, with length <i>L</i> = (80.0 ± 0.1) cm. Using <i>g</i> = 4π<sup>2</sup><i>L</i>/<i>T</i><sup>2</sup>, find the maximum percentage error in <i>g</i>.", "a": "δ<i>T</i> = δ<i>t</i> = 0.1/40.0 = 0.25% (timing many swings is what makes it this small) and δ<i>L</i> = 0.1/80.0 = 0.125%. δ<i>g</i> = δ<i>L</i> + 2δ<i>T</i> = 0.125% + 0.50% = 0.63%. Timing dominates even after the trick." },
            { "q": "[JEE Advanced] Two lengths are <i>a</i> = (5.00 ± 0.02) cm and <i>b</i> = (4.00 ± 0.02) cm. Find the percentage error in the difference <i>x</i> = <i>a</i> − <i>b</i> and comment.", "a": "<i>x</i> = (1.00 ± 0.04) cm, so δ<i>x</i> = 4%, against 0.4% and 0.5% in the inputs. The absolute error stayed at 0.04 cm while the result shrank fivefold. Avoid small differences of nearly equal quantities when you design an experiment." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Subtracting absolute errors in a difference.</b> For both <i>a</i> + <i>b</i> and <i>a</i> − <i>b</i>, the absolute errors ADD. The minus sign in the quantity never becomes a minus sign in the error, because the worst case always reinforces.",
            "<b>Dropping the power factor.</b> A squared term contributes twice its relative error and a square root contributes half. This is the single most frequent JEE and NEET slip in the topic, and the number that goes missing is never small.",
            "<b>Adding percentage errors in a SUM.</b> Percentages of different bases cannot be added: one is a fraction of <i>a</i> and the other a fraction of <i>b</i>. Convert both to absolute errors, add those, then convert back. For 100 ± 1 plus 1 ± 0.5 the answer is 101 ± 1.5, about 1.5%, not 1% + 50%.",
            "<b>Comparing absolute errors of different quantities.</b> \"0.5 cm is worse than 0.1 s\" is meaningless; they are not the same kind of thing. Convert both to percentage errors, which are dimensionless, before judging which measurement was the better one.",
            "<b>Believing averaging fixes everything.</b> Averaging crushes random error and is completely blind to systematic error. A precise but uncalibrated instrument gives you a very repeatable wrong answer, and more readings only make you more confident in it."
          ]
        },
        {
          "t": "protip",
          "html": "for any maximum-percentage-error question, never compute absolute errors first. write the quantity as a product of powers and read the answer straight off: δx = pδa + qδb + rδc. ten seconds instead of three minutes. keep absolute errors for exactly three situations: sums, differences, and reciprocals-add relations. and here is the sanity habit that catches a wrong answer before you move on. for a SUM, the output percentage always lands BETWEEN the two input percentages, dragged towards the bigger quantity's; masses of 10.0 ± 0.1 g and 20.0 ± 0.1 g give 1% and 0.5% in, and 0.67% out. for a reciprocals-add relation the output is usually WORSE than either input; u = 30.0 ± 0.1 cm and v = 20.0 ± 0.1 cm give 0.33% and 0.5% in, and 2.2% out. if your answer sits on the wrong side of the inputs, you used the wrong rule."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "error ≠ mistake", "note": "mistakes are eliminated; errors are estimated and reduced" },
            { "f": "systematic: fixed sign, kills accuracy, cured by calibration", "note": "random: random sign, kills precision, cured by averaging" },
            { "f": "<i>a</i><sub>mean</sub> ± Δ<i>a</i><sub>mean</sub>, with Δ<i>a</i><sub>mean</sub> = (1/<i>n</i>)Σ|<i>a</i><sub>mean</sub> − <i>a</i><sub>i</sub>|", "note": "the mean deviation of Statistics, applied to one quantity" },
            { "f": "sum or difference: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>", "note": "absolute errors add for BOTH; that is the surprise" },
            { "f": "product, quotient, power: Δ<i>x</i>/<i>x</i> = <i>p</i>Δ<i>a</i>/<i>a</i> + <i>q</i>Δ<i>b</i>/<i>b</i> + <i>r</i>Δ<i>c</i>/<i>c</i>", "note": "the exponent multiplies; denominators still add" },
            { "f": "reciprocals add: Δ<i>x</i> = <i>x</i><sup>2</sup>(Δ<i>a</i>/<i>a</i><sup>2</sup> + Δ<i>b</i>/<i>b</i><sup>2</sup>)", "note": "parallel resistors, lenses, mirrors, springs" }
          ],
          "aids": [
            "\"plus or minus, errors always add\"",
            "\"powers come down to multiply\"",
            "\"average kills the random, calibration kills the systematic\"",
            "\"subtract two close numbers and the percentage explodes\""
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Significant Figures, and Honest Answers",
      "chip": "04 SIG FIGS",
      "kalam": "you cannot manufacture precision you never measured",
      "blocks": [
        {
          "t": "p",
          "html": "Measure a pencil with an ordinary plastic ruler marked in millimetres. You read it as 14.2 cm: the 1 and the 4 are certain, and that last 2 is your best honest guess at the bit between two millimetre marks. Now suppose you wrote 14.2000 cm. That would be a lie. It claims you knew the length to the nearest ten-thousandth of a centimetre, which your ruler cannot deliver. The digits you are genuinely entitled to write, <b>all the certain ones plus the first uncertain one</b>, are the <b>significant figures</b> of the measurement.<br><br>Here is the shift that makes the whole topic click. <b>Every digit carries a promise about the instrument behind it.</b> 14.2 cm quietly says \"I measured to about a millimetre\". 14.20 cm says \"I measured ten times more finely\". These are different claims about the real world, even though 14.2 and 14.20 are the same number in arithmetic. In pure mathematics a trailing zero is decoration; in physics it is information."
        },
        {
          "t": "think",
          "html": "picture significant figures as the load-bearing digits, the ones actually holding up the weight of your measurement. some zeros are load-bearing, because they report real precision, and some are only scaffolding, because they just position the decimal point. the entire skill of this topic is telling the structural digits from the scaffolding. in 0.00450 kg the three zeros on the left are pure scaffolding, while the 4, the 5 and the final 0 are holding the roof up. three significant figures, not six."
        },
        {
          "t": "p",
          "html": "Think of a kirana shopkeeper weighing dal. A cheap spring balance reads \"2 kg\": one significant figure, trustworthy to the nearest hundred grams or so. A good digital scale reads \"2.000 kg\": four significant figures, trustworthy to the gram. Same dal, but the second instrument EARNED those extra digits. You can never manufacture precision you did not measure, and significant figures are simply the rule of honesty that stops you from trying.<br><br>Why does this matter beyond the exam? Because measurements travel. Your recorded length gets multiplied and combined by other people into a final result, and if you overstate your precision that false confidence silently corrupts everything downstream: a bridge tolerance, a drug dosage, a satellite trajectory. When a result is reported as 9.8 m/s<sup>2</sup> rather than 9.81 m/s<sup>2</sup>, the writer is telling you something real about the experiment behind it. Learning to read and write that signal is a professional skill, not a marking rule."
        },
        {
          "t": "p",
          "html": "Four boundaries, each of which trips somebody every year.<br><br>Significant figures apply to <b>measured</b> quantities, not exact ones. The number of students in a class, a pure count, a defined constant, the 2 in 2π<i>r</i>: all have <b>infinite significant figures and never limit your answer</b>. Trailing zeros in a whole number with no decimal point are <b>genuinely ambiguous</b>: does 4500 have two, three or four? You cannot tell, and the only honest fix is scientific notation, 4.5 × 10<sup>3</sup> or 4.50 × 10<sup>3</sup> or 4.500 × 10<sup>3</sup>. The count is <b>independent of the unit</b>: 5.6 cm, 0.056 m and 56 mm all have two, because changing units only moves the decimal and adds scaffolding. And significant figures are a <b>shorthand for precision, not a substitute for a proper error analysis</b>; Topic 03 is the real machinery and this is the quick standardised summary of it."
        },
        {
          "t": "def",
          "term": "Significant figures, and the uncertainty they imply",
          "html": "The <b>significant figures</b> of a measured value are all the digits known reliably plus the first uncertain (estimated) one. Their job is to report precision without writing out an error bar. The convention that connects the two: <b>a measured value is taken to be uncertain by about ±1 in its last significant digit</b>. So 3.5 cm means 3.5 ± 0.1 cm, and 3.50 cm means 3.50 ± 0.01 cm. Adding one significant figure tightens the implied precision roughly tenfold, which is why a trailing zero is never cosmetic. In <b>scientific notation</b>, <i>m</i> × 10<sup>n</sup> with 1 ≤ <i>m</i> < 10, the significant figures are read entirely from the mantissa <i>m</i> and the power of ten contributes none: 6.30 × 10<sup>4</sup> has three."
        },
        {
          "t": "defgrid",
          "title": "Counting significant figures: the rules that decide",
          "rows": [
            { "k": "Non-zero digits", "v": "always significant. 42.3 has 3. Every non-zero digit reports a measured magnitude" },
            { "k": "Sandwiched zeros", "v": "significant. 5.004 has 4. They sit inside the measured span, so they carry information" },
            { "k": "Leading zeros", "v": "never significant. 0.0067 has 2. Pure scaffolding, they only locate the decimal point" },
            { "k": "Trailing zeros after a decimal", "v": "significant. 4.330 has 4, and 0.05000 has 4. You would only write them if you had measured that far" },
            { "k": "Trailing zeros in a bare whole number", "v": "ambiguous, conventionally NOT counted. 4500 is taken as 2. Use scientific notation to say what you mean" },
            { "k": "The power of ten", "v": "never significant. In 7.00 × 10<sup>8</sup>, only the mantissa 7.00 counts, so 3. Also 164 mm = 0.164 m, both 3" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE TWO ARITHMETIC RULES",
          "tag": "different rules, and they must never be swapped",
          "main": "× and ÷ : the result keeps as many SIGNIFICANT FIGURES as the least-precise factor<br>+ and − : the result keeps as many DECIMAL PLACES as the least-precise term<br>implied uncertainty ≈ ±1 in the last significant digit",
          "legend": [
            "for × and ÷, precision is a RELATIVE matter, so what limits you is the total count of trustworthy digits",
            "for + and −, precision is set by the POSITION of the last trustworthy digit, so what limits you is the decimal place",
            "exact numbers (pure counts, defined constants, π taken as exact) have infinite significant figures and never limit anything"
          ],
          "note": "Round once, at the very end. Carry one or two guard digits through the intermediate steps, because rounding early injects fresh error and repeated rounding compounds it, dragging the final answer away from the truth."
        },
        {
          "t": "proc",
          "title": "Counting significant figures on a tricky number",
          "steps": [
            "<b>Scan left to right and stop at the first non-zero digit.</b> Everything to its left is scaffolding, whatever it is.",
            "<b>Count every digit from there to the end, zeros included,</b> as long as there is a decimal point in the number. In 0.003080 the leading 0.00 is scaffolding while 3, the sandwiched 0, the 8 and the trailing 0 are all significant, giving 4.",
            "<b>If there is NO decimal point, stop at the last non-zero digit</b> and note that the answer is ambiguous. 5060 is conventionally 3; writing 5060. with a deliberate decimal point makes it 4.",
            "<b>If the number is in scientific notation, ignore the power of ten entirely.</b> 7.00 × 10<sup>8</sup> has 3, however large the exponent looks.",
            "<b>When zeros confuse you, rewrite in scientific notation.</b> The mantissa answers the question with no ambiguity at all: 0.002030 kg becomes 2.030 × 10<sup>−3</sup> kg, and the four figures are unmistakable."
          ]
        },
        {
          "t": "proc",
          "title": "Rounding, including the rule that looks wrong",
          "steps": [
            "<b>Look at the digit immediately to the right of the cut-off,</b> and at that digit only. What comes after it matters only in deciding whether it is \"exactly 5\".",
            "<b>Less than 5: drop it and leave the last kept digit alone.</b> 6.24 becomes 6.2.",
            "<b>More than 5, or 5 followed by any non-zero digit: round the last kept digit up.</b> 6.27 becomes 6.3, and 14.252 becomes 14.3 to three figures.",
            "<b>Exactly 5, or 5 followed only by zeros: round half to EVEN.</b> Leave the last kept digit unchanged if it is even, raise it if it is odd. So 6.250 becomes 6.2 because 2 is even, and 6.350 becomes 6.4 because 3 is odd.",
            "<b>Why that odd-looking rule?</b> Always rounding a 5 upwards would bias a long column of data slightly upward. Rounding to the nearest even digit sends half the ties up and half down, so the bias cancels across many values. Boards and JEE both set this exact scenario."
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "FIGURE 1.4 · TWO RULES THAT MUST NEVER BE SWAPPED",
          "chips": ["multiply: count figures", "add: count decimal places"],
          "captions": [
            "Two measured numbers go in, one product comes out, and the deciding question is how many significant figures each input has. 2.5 has two, 3.42 has three, so the product may keep only two. The raw arithmetic gives 8.55; the honest report is 8.6. The extra digits the calculator produced were never earned by the measurement, and keeping them would claim precision that 2.5 simply does not have.",
            "The same shape, a completely different question. Here it is DECIMAL PLACES that matter, not significant figures. 12.5 is known to one decimal place and 0.0021 to four, so the sum can only be trusted to one. The raw sum 12.5021 rounds to 12.5, and the tiny second term changes nothing at all. Run this pair through the multiplication rule instead and you would report three significant figures, 12.5, by luck rather than by reasoning, which is exactly why the two rules must be kept apart."
          ],
          "frames": [
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "2.5\n2 sig figs" },
                  { "id": "b", "col": 2, "row": 0, "text": "3.42\n3 sig figs" },
                  { "id": "p", "col": 1, "row": 1, "text": "2.5 × 3.42\n= 8.55 raw", "tone": "amber" },
                  { "id": "r", "col": 1, "row": 2, "text": "8.6\n2 sig figs" }
                ],
                "links": [
                  { "from": "a", "to": "p" },
                  { "from": "b", "to": "p" },
                  { "from": "p", "to": "r", "label": "keep the least" }
                ]
              }
            },
            {
              "aspect": 0.72,
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "12.5\n1 decimal" },
                  { "id": "b", "col": 2, "row": 0, "text": "0.0021\n4 decimals" },
                  { "id": "p", "col": 1, "row": 1, "text": "12.5 + 0.0021\n= 12.5021", "tone": "amber" },
                  { "id": "r", "col": 1, "row": 2, "text": "12.5\n1 decimal" }
                ],
                "links": [
                  { "from": "a", "to": "p" },
                  { "from": "b", "to": "p" },
                  { "from": "p", "to": "r", "label": "keep the least" }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Carrying significant figures through a whole calculation",
          "steps": [
            "<b>Do the entire computation first, keeping one or two guard digits</b> at every intermediate step. Never round in the middle.",
            "<b>Then decide which rule governs the final step:</b> least significant figures for × and ÷, least decimal places for + and −.",
            "<b>Identify which INPUT sets the limit,</b> and say so in your answer. Exact numbers do not count: π taken as 3.14 exact, the 6 in a sphere's volume formula and a pure count are all free passes.",
            "<b>Round exactly once, at the end.</b> A calculation that mixes both operations follows the rule of whichever operation produced the final number, and the safest habit is to keep guard digits until that last step.",
            "<b>Sanity check the report.</b> Your answer should never look more precise than your least precise measurement allowed. If it does, you have kept a digit you did not earn."
          ]
        },
        {
          "t": "def",
          "term": "Order of magnitude, and where the boundary really sits",
          "html": "The <b>order of magnitude</b> of a quantity is the power of ten nearest to it. Write the value as <i>m</i> × 10<sup>n</sup> with 1 ≤ <i>m</i> < 10, then round the mantissa: <b>if <i>m</i> is less than √10 ≈ 3.16 the order is 10<sup>n</sup>, and otherwise it is 10<sup>n+1</sup></b>. The threshold is 3.16 and not 5, because \"nearest\" on a scale of powers of ten means nearest in ratio, and 3.16 is the geometric midpoint between 1 and 10.<br><br>Two worked cases. A hydrogen atom is about 1.06 × 10<sup>−10</sup> m; 1.06 is below 3.16, so the order is 10<sup>−10</sup> m. An electron is 9.1 × 10<sup>−31</sup> kg; 9.1 is above 3.16, so the order is 10<sup>−30</sup> kg, not 10<sup>−31</sup>. The same rule puts the Earth's radius, 6.37 × 10<sup>6</sup> m, at order 10<sup>7</sup> m, which surprises people every time. Orders of magnitude let you compare wildly different scales at a glance and make back-of-the-envelope estimates without precise data, which is what Topic 06 lives on."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A rectangular glass sheet is measured as 2.165 m long and 1.2 m broad. Find its area to the correct number of significant figures.",
          "steps": [
            "Count first. The length 2.165 m has 4 significant figures; the breadth 1.2 m has 2.",
            "Multiply the raw values, keeping everything: 2.165 × 1.2 = 2.598 m<sup>2</sup>.",
            "This is a product, so the significant-figure rule applies and the answer may carry only as many figures as the weakest factor, which is the breadth with 2.",
            "Round to 2 figures. The digit after the cut-off is 9, which is greater than 5, so round up: 2.6 m<sup>2</sup>. Four digits came out of the calculator and honesty sends us back to two, because the breadth measurement was the weak link and nothing downstream can repair it."
          ],
          "ans": "2.6 m<sup>2</sup>"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "How many significant figures are there in the measured value 0.002030 kg?",
          "steps": [
            "Two wrong answers are on offer. Counting the leading zeros gives 6; dropping the final zero gives 3. Both are wrong.",
            "Scan left to right. The leading 0.00 is scaffolding and never counts. The 2 is non-zero, so it counts. The next 0 is sandwiched between 2 and 3, so it counts. The 3 is non-zero, so it counts.",
            "The final 0 comes after a decimal point, so it is significant. You would only have written it if you had measured that far.",
            "Load-bearing digits: 2, 0, 3, 0. Four significant figures. Rewriting as 2.030 × 10<sup>−3</sup> kg makes it unmistakable, and that is the move to make whenever zeros confuse you."
          ],
          "ans": "4"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A thin cylindrical wire has radius 1.5 mm, length 30.0 cm and mass 8.0 g. Taking π = 3.14 as exact, find the density in g cm<sup>−3</sup> to the correct number of significant figures.",
          "steps": [
            "Convert and count. <i>r</i> = 1.5 mm = 0.15 cm, 2 significant figures. ℓ = 30.0 cm, 3. <i>m</i> = 8.0 g, 2. And π = 3.14 is declared exact, so it has infinite figures and never limits anything.",
            "Volume, keeping guard digits and not rounding: <i>V</i> = π<i>r</i><sup>2</sup>ℓ = 3.14 × (0.15)<sup>2</sup> × 30.0 = 3.14 × 0.0225 × 30.0 = 2.1195 cm<sup>3</sup>.",
            "Density, again keeping guard digits: ρ = <i>m</i>/<i>V</i> = 8.0/2.1195 = 3.774 g cm<sup>−3</sup>.",
            "Now round, once, at the end. The fewest significant figures among the MEASURED inputs is 2, from both the radius and the mass, so ρ = 3.8 g cm<sup>−3</sup>. The exact π was a free pass; only measurements set the precision."
          ],
          "ans": "3.8 g cm<sup>−3</sup>"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A student records the side of a small metal cube as 2.5 cm. (a) Find the percentage uncertainty in the side using the implied-uncertainty convention. (b) Find the volume, its percentage uncertainty, and the volume to the correct number of significant figures. (c) Say quantitatively what changes if the side is instead recorded as 2.50 cm.",
          "steps": [
            "(a) 2.5 cm is uncertain by ±1 in its last digit, so ±0.1 cm. δ(side) = (0.1/2.5) × 100% = 4%.",
            "(b) Volume is <i>V</i> = <i>a</i><sup>3</sup>, so the power rule from Topic 03 triples the percentage uncertainty: δ<i>V</i> = 3 × 4% = 12%. Numerically <i>V</i> = (2.5)<sup>3</sup> = 15.625 cm<sup>3</sup>, and since the side carried 2 significant figures the report is <i>V</i> = 16 cm<sup>3</sup>.",
            "Cross-check the two answers against each other: 12% of 16 is about 2, so <i>V</i> = (16 ± 2) cm<sup>3</sup>. The significant-figure rule and the error-propagation rule are telling the same story in two dialects, which is a good habit to build.",
            "(c) Writing 2.50 cm implies ±0.01 cm, so δ(side) = (0.01/2.50) × 100% = 0.4% and δ<i>V</i> = 3 × 0.4% = 1.2%. <b>One extra significant figure cut the side's uncertainty tenfold and the volume's from 12% to 1.2%.</b> A trailing zero is not cosmetic; it is a tenfold tightening of your claim about reality."
          ],
          "ans": "(a) 4% · (b) <i>V</i> = 16 cm<sup>3</sup>, δ<i>V</i> = 12% · (c) 0.4% and 1.2%"
        },
        {
          "t": "mcq",
          "q": "The number of significant figures in 0.0500 is:",
          "opts": [
            { "label": "1", "nudge": "This drops both trailing zeros, treating them as decoration. After a decimal point they are measured digits and always count." },
            { "label": "2", "nudge": "This drops one trailing zero. Both of them come after the decimal point, so both are significant." },
            { "label": "3", "nudge": null },
            { "label": "4", "nudge": "This counts one of the leading zeros. Zeros to the left of the first non-zero digit are pure scaffolding, whatever their number." }
          ],
          "correct": 2,
          "solution": "The two leading zeros are scaffolding; the 5 and the two trailing zeros after the decimal are all significant, giving 3. Written as 5.00 × 10⁻², the three figures are obvious."
        },
        {
          "t": "mcq",
          "q": "When two measured quantities are multiplied, the number of significant figures in the result equals:",
          "opts": [
            { "label": "the largest among the factors", "nudge": "This claims precision the weaker measurement never supported. A chain is as strong as its weakest link, and so is a product." },
            { "label": "the smallest among the factors", "nudge": null },
            { "label": "the sum of the factors' significant figures", "nudge": "Multiplying the quantities does not multiply or add their digit counts. Two 3-figure numbers do not give a 6-figure answer." },
            { "label": "the smallest number of decimal places among the factors", "nudge": "This is the killer trap: decimal places govern ADDITION, not multiplication. Swapping the two rules is the most-tested mistake in the whole subtopic." }
          ],
          "correct": 1,
          "solution": "A product can be no more precise than its least precise factor, so it keeps the fewest significant figures. Decimal places belong to the addition rule and must never be brought here."
        },
        {
          "t": "mcq",
          "q": "Which of these measured values has exactly four significant figures?",
          "opts": [
            { "label": "0.0024", "nudge": "Only 2. The three leading zeros are scaffolding, and 0.0024 is 2.4 × 10<sup>−3</sup> however you dress it up." },
            { "label": "2400", "nudge": "Ambiguous trailing zeros with no decimal point, conventionally taken as 2. This option baits the belief that more digits means more significant figures." },
            { "label": "2.400", "nudge": null },
            { "label": "24000", "nudge": "Also ambiguous and conventionally 2. Adding more trailing zeros to a bare whole number adds no information at all." }
          ],
          "correct": 2,
          "solution": "In 2.400 the 2, the 4 and both trailing zeros after the decimal point are significant, so 4. The other three all suffer from zeros that carry no measurement behind them."
        },
        {
          "t": "mcq",
          "q": "Rounded to three significant figures by the standard round-half-to-even rule, 4.7350 becomes:",
          "opts": [
            { "label": "4.73", "nudge": "This leaves the last kept digit unchanged, which is what you do when that digit is EVEN. Here it is 3, which is odd, so it must go up." },
            { "label": "4.74", "nudge": null },
            { "label": "4.735", "nudge": "This ignores the instruction and keeps four figures. The question asked for three." },
            { "label": "4.70", "nudge": "This drops a significant digit rather than rounding it, turning 4.73-something into 4.70 and destroying real information." }
          ],
          "correct": 1,
          "solution": "The digit being dropped is exactly 5 followed only by a zero, so round half to even applies. The preceding digit is 3, which is odd, so it is raised to 4, giving 4.74. Half the ties go up and half go down, which is what keeps a long column of data unbiased."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] State the number of significant figures in each: (a) 0.00708 (b) 5.040 × 10<sup>4</sup> (c) 6500 (d) 100.00", "a": "(a) 3, the leading zeros are scaffolding. (b) 4, read from the mantissa alone. (c) 2, ambiguous trailing zeros conventionally not counted. (d) 5, the decimal point makes every trailing zero count." },
            { "q": "[NEET] How many significant figures are there in the measured value 2.0040 m?", "a": "5. The 2, the two sandwiched zeros, the 4 and the trailing zero after the decimal are all significant." },
            { "q": "[JEE Main] Evaluate 24.36 + 0.0245 + 105.2 and express the answer to the correct number of significant figures.", "a": "Raw sum 129.5845. This is addition, so count DECIMAL PLACES: 2, 4 and 1, and the fewest is 1 from 105.2. Answer 129.6." },
            { "q": "[JEE Main] Evaluate 5.42 × 0.6 and express the answer to the correct number of significant figures.", "a": "Raw product 3.252. This is multiplication, so count SIGNIFICANT FIGURES: 3 and 1, and the fewest is 1 from 0.6. Answer 3." },
            { "q": "[JEE Advanced] The edge of a cube is measured as 2.5 cm. Find the volume to the correct significant figures and state the implied percentage uncertainty in both the edge and the volume.", "a": "<i>V</i> = (2.5)<sup>3</sup> = 15.625, reported as 16 cm<sup>3</sup> because the edge has 2 significant figures. Edge uncertainty 0.1/2.5 = 4%; volume uncertainty 3 × 4% = 12%, so <i>V</i> = (16 ± 2) cm<sup>3</sup>." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Counting leading zeros.</b> Zeros to the left of the first non-zero digit are pure scaffolding. 0.0042 has two significant figures, not four, and no amount of writing them out changes that.",
            "<b>Mishandling trailing zeros.</b> After a decimal point they are significant, so 3.50 has three. In a bare whole number they are ambiguous, so 350 is conventionally two. Always resolve the ambiguity with scientific notation rather than hoping the reader guesses right.",
            "<b>Swapping the two arithmetic rules.</b> Significant figures for × and ÷, decimal places for + and −. They are not interchangeable, and exams deliberately bait the confusion with numbers where the two rules give different answers.",
            "<b>Rounding in the middle of a calculation.</b> Rounding early injects error that then compounds. Carry one or two guard digits and round exactly once, at the end. This is also why squaring a rounded intermediate, as in a parallel-resistance error problem, is a habit worth breaking.",
            "<b>Putting the order-of-magnitude boundary at 5.</b> The threshold is <b>√10 ≈ 3.16</b>, not 5, because nearest on a logarithmic scale means nearest in ratio. So 4 × 10<sup>5</sup> has order 10<sup>6</sup>, and the Earth's radius 6.37 × 10<sup>6</sup> m has order 10<sup>7</sup> m."
          ]
        },
        {
          "t": "protip",
          "html": "when zeros make you unsure, rewrite the number in scientific notation in your head. the mantissa answers the question instantly and with zero ambiguity. in any multi-step calculation, do the whole computation with extra digits, decide the governing rule at the end (least sig figs for times and divide, least decimal places for plus and minus), and round exactly once. that habit alone prevents most of the marks lost in this subtopic. one last guard that catches a surprising number of slips: check whether the constants a question hands you are meant as exact or as measured. π = 3.14 and g = 9.8 m/s² each carry their own figures, and if one of them turns out to be the least precise number in your working, it is the one setting your answer's precision, not the quantity you spent all afternoon measuring."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "significant figures = certain digits + the first uncertain one", "note": "they report precision without writing an error bar" },
            { "f": "non-zero ✓ · sandwiched zeros ✓ · leading zeros ✗ · trailing after a decimal ✓", "note": "bare whole-number trailing zeros: ambiguous, use 10<sup>n</sup> form" },
            { "f": "× and ÷ ⟹ least significant figures", "note": "+ and − ⟹ least decimal places. Never swap them" },
            { "f": "exact numbers have infinite figures", "note": "counts, defined constants, the 2 in 2π<i>r</i>: never a limit" },
            { "f": "implied uncertainty ≈ ±1 in the last digit", "note": "2.5 cm is ±0.1; 2.50 cm is ±0.01, a tenfold tighter claim" },
            { "f": "order of magnitude: <i>m</i> × 10<sup>n</sup>, round up if <i>m</i> > √10 ≈ 3.16", "note": "9.1 × 10<sup>−31</sup> kg has order 10<sup>−30</sup> kg" }
          ],
          "aids": [
            "\"leading zeros lead nowhere; trailing decimals tell the truth\"",
            "\"times-divide gives figures; plus-minus gives places\"",
            "\"when zeros confuse, scientific notation defuses\"",
            "\"round half to even keeps the column honest\"",
            "\"the boundary is 3.16, not 5\""
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Vernier Callipers and the Screw Gauge",
      "chip": "05 INSTRUMENTS",
      "kalam": "find the least count, take the reading, correct the zero",
      "blocks": [
        {
          "t": "p",
          "html": "An ordinary plastic ruler measures to about a millimetre. But what if you need the diameter of a wire thinner than that, or the thickness of a coin to a hundredth of a millimetre? You would be squinting between two marks and guessing. The genius of the <b>vernier callipers</b> and the <b>screw gauge</b> is that they let you read BEYOND the smallest mark on the main scale, turning that guess into a number. They take you from \"about 2 mm\" to \"2.34 mm, confidently\".<br><br>Everything here rests on one idea: the <b>least count</b>, the smallest length an instrument can reliably measure. A plain scale has a least count of 1 mm. A good vernier gets to 0.1 mm. A screw gauge gets to 0.01 mm, ten times finer again. The smaller the least count, the more decimal places you are entitled to write, so this subtopic is the hands-on face of everything in Topics 03 and 04: <b>the least count IS the uncertainty in a single reading</b>."
        },
        {
          "t": "think",
          "html": "imagine measuring a tiny gap with your fingers. impossible. but if you had a ramp so gentle that walking a long way along it raised you only a centimetre, you could measure that centimetre by measuring your long walk instead. a screw's threads are exactly that gentle ramp: they turn a linear distance too small to see into a rotation you can read off a circle. the vernier and the screw gauge are both precision amplifiers, taking a measurement too fine for the eye and blowing it up into something the eye can handle."
        },
        {
          "t": "p",
          "html": "How does a vernier read BETWEEN the millimetre marks? Through a beautiful trick of mismatched scales. The sliding vernier scale has divisions very slightly SMALLER than the main scale's: typically <b>10 vernier divisions span only 9 millimetres</b>, so each vernier division is 0.9 mm. Because of that deliberate mismatch, exactly one vernier line will line up perfectly with a main-scale line, and WHICH line it is tells you the fractional part. Two slightly different combs sliding past each other: only one pair of teeth ever aligns at a time, and that alignment pinpoints the gap.<br><br>The screw gauge uses a different trick, the magnifying power of a screw. Turn the screw one full rotation and it advances by a fixed small distance called the <b>pitch</b>. Wrap a finely divided circular scale around that rotation and a movement far too small to see on a straight ruler gets stretched out around the circle, where it is easy to read. Turning rotation into tiny readable linear motion is the screw's superpower."
        },
        {
          "t": "p",
          "html": "This also decides which instrument a good experimenter reaches for, and the answer is not \"the finest one\". To measure a table you use a metre scale; the vernier's extra precision would be wasted effort. To measure the internal diameter of a pipe or the length of a small cylinder, the vernier earns its keep. For something genuinely tiny, a wire's diameter or a glass slide's thickness, only the screw gauge will do.<br><br>There is a quiet trade-off underneath. <b>Finer instruments measure smaller ranges.</b> A metre scale spans a metre and resolves a millimetre; a screw gauge resolves a hundredth of a millimetre and typically spans a couple of centimetres. Choosing the right instrument is itself part of good measurement.<br><br>And here is the link back to Topic 03 that makes this subtopic worth its marks. <b>A zero error is a textbook systematic error.</b> It has a fixed size and a fixed sign and shifts every reading the same way, so no amount of averaging will remove it. The only cure is to measure it, by closing the jaws and reading the offset, and then correct for it. The irreducible least-count uncertainty, by contrast, behaves like the limiting error in a single reading. These instruments are where the abstract ideas of the last two topics become something you can see and fix with your hands."
        },
        {
          "t": "def",
          "term": "Least count, and zero error",
          "html": "The <b>least count</b> (LC) is the smallest length an instrument can measure, and equivalently the uncertainty in one reading. Smaller least count means a finer instrument. It sets the best case only: the real uncertainty is worse if the instrument carries a <b>zero error</b>, a built-in offset that shows when the jaws are closed on nothing.<br><br>A zero error is <b>positive</b> when the moving zero sits PAST the main zero, so every reading comes out too high, and <b>negative</b> when it sits SHORT of it. Both are handled by one universal rule, <b>corrected = observed − zero error, with the sign carried</b>. A positive error is subtracted; a negative one is subtracted too, which adds its magnitude. Memorise the single formula, never two separate cases, and the signs look after themselves.<br><br>Two more real-world limits worth naming: <b>backlash</b>, the play in the screw threads when you reverse direction, and <b>over-tightening</b>, which is why a screw gauge has a ratchet to apply the same gentle pressure every time."
        },
        {
          "t": "defgrid",
          "title": "The instrument quantities",
          "rows": [
            { "k": "MSD", "v": "main scale division, the value of one division on the fixed scale. Usually 1 mm, but check" },
            { "k": "VSD", "v": "vernier scale division, one division on the sliding scale, deliberately slightly smaller than 1 MSD" },
            { "k": "Least count, vernier", "v": "LC = 1 MSD − 1 VSD = (1 MSD)/<i>n</i>, where <i>n</i> is the number of vernier divisions. Typically 0.1 mm" },
            { "k": "Pitch", "v": "the linear distance the spindle advances in ONE complete rotation of the screw. Do not assume 1 mm" },
            { "k": "Least count, screw gauge", "v": "LC = pitch ÷ (number of circular scale divisions). Typically 0.01 mm" },
            { "k": "Zero error", "v": "the reading with the jaws fully closed, with its sign. All of these carry dimension [L] and SI unit metre" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE VERNIER CALLIPERS",
          "tag": "mismatched combs, and the gap between them",
          "main": "LC = 1 MSD − 1 VSD = (value of 1 main division)/<i>n</i><br>reading = MSR + (coinciding vernier division × LC)<br>corrected = observed − zero error",
          "legend": [
            "<i>n</i> = the number of divisions on the vernier scale, a pure count. More divisions means a finer instrument",
            "MSR = the main scale reading, the last main mark BEFORE the vernier zero (m or cm)",
            "the coinciding division is a pure NUMBER, not a length; it only becomes a length after multiplying by LC"
          ],
          "note": "The simplification LC = (1 MSD)/n holds when n vernier divisions span (n − 1) main divisions, which is the standard construction. If a question says 25 VSD coincide with 24 MSD, that is still the standard pattern with n = 25, so LC = (1 MSD)/25."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE SCREW GAUGE",
          "tag": "a rotation stretched into a length",
          "main": "pitch = (linear distance moved)/(number of complete rotations)<br>LC = pitch/(number of circular scale divisions)<br>reading = MSR + (coinciding circular division × LC), then corrected = observed − zero error",
          "legend": [
            "pitch = the advance per full turn (mm), measured, not assumed. Modified-instrument questions almost always change it",
            "MSR = the reading on the linear (main) scale, in mm",
            "the circular division number is again a pure count, and only becomes a length when multiplied by LC"
          ],
          "note": "One full rotation, the pitch, is shared out among all the circular divisions, so each division is worth pitch over that count. If your least count comes out larger than the pitch you have inverted the ratio, which is a check worth two seconds."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE VERNIER LEAST COUNT COMES FROM, TAP A LINE",
          "steps": [
            {
              "eq": "the standard construction: <i>n</i> vernier divisions span exactly (<i>n</i> − 1) main divisions, so <i>n</i>(VSD) = (<i>n</i> − 1)(MSD)",
              "why": "This is the deliberate mismatch. Ten vernier divisions are laid out to cover nine millimetres, so each one is very slightly short of a millimetre."
            },
            {
              "eq": "1 VSD = ((<i>n</i> − 1)/<i>n</i>) MSD",
              "why": "Divide through by n. With n = 10 this is 0.9 MSD, or 0.9 mm on a millimetre scale."
            },
            {
              "eq": "LC = 1 MSD − 1 VSD = MSD(1 − (<i>n</i> − 1)/<i>n</i>) = MSD/<i>n</i>",
              "why": "The least count is the small GAP by which one vernier division falls short of one main division. With MSD = 1 mm and n = 10, LC = 0.1 mm."
            },
            {
              "eq": "and that gap is the finest distinction the instrument can register",
              "why": "Slide the vernier along. Its zero has to advance by exactly this gap before the NEXT vernier line takes its turn to coincide. So the instrument can only tell you which multiple of the gap you are at, and nothing finer. This is also why more vernier divisions, larger n, means a finer instrument: the gap shrinks."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "THE LADDER OF LEAST COUNTS",
          "chips": ["a hundredfold in two steps"],
          "captions": [
            "Three instruments, three least counts, each a factor of ten below the one above. The metre scale resolves a millimetre, the vernier a tenth of that and the screw gauge a hundredth. The number on the left is also, directly, the uncertainty in a single reading with that instrument, which is why a screw gauge answer may carry two decimal places in millimetres and a vernier answer may not. Notice what the ladder does NOT show: range. Each step down in least count costs you range, and a screw gauge that resolves 0.01 mm typically spans only a couple of centimetres."
          ],
          "frames": [
            {
              "aspect": 0.5,
              "levels": {
                "rows": [
                  { "at": 0, "label": "1 mm", "right": "metre scale" },
                  { "at": -1, "label": "0.1 mm", "right": "vernier", "tone": "amber" },
                  { "at": -2, "label": "0.01 mm", "right": "screw gauge", "tone": "amber" }
                ],
                "jumps": [
                  { "from": 0, "to": -1, "label": "10 times finer" },
                  { "from": -1, "to": -2, "label": "10 times again" }
                ]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Reading a vernier callipers, every time",
          "steps": [
            "<b>Compute the least count FIRST.</b> LC = (value of one main scale division) ÷ (number of vernier divisions). Never assume 0.1 mm; a question that says 1 cm is divided into 20 parts has MSD = 0.5 mm.",
            "<b>Note the main scale reading</b>, the last main-scale mark just BEFORE the vernier zero. This gives you the whole millimetres.",
            "<b>Find the vernier division that coincides exactly</b> with any main-scale line. Call that number the VSR. It is a count, not a length.",
            "<b>Combine:</b> reading = MSR + (VSR × LC). The multiplication is the step students skip, and \"the 8th division\" is not 8 mm.",
            "<b>Correct for zero error</b> with its sign: corrected = observed − zero error. Then check that the last decimal place of your answer matches the least count, because a corrected diameter more precise than the LC means you slipped somewhere."
          ]
        },
        {
          "t": "proc",
          "title": "Reading a screw gauge, every time",
          "steps": [
            "<b>Find the pitch.</b> Pitch = (linear distance moved) ÷ (number of full rotations). Do not assume 1 mm. In modified-instrument questions it is often 0.5 mm or 3 mm.",
            "<b>Compute the least count:</b> LC = pitch ÷ (number of circular scale divisions).",
            "<b>Note the linear scale reading</b> and then the circular division that lines up with the reference line.",
            "<b>Combine:</b> reading = MSR + (circular division × LC).",
            "<b>Correct for zero error,</b> counting it in DIVISIONS first and then converting: a negative zero error of 5 divisions on an LC of 0.01 mm is −0.05 mm, and corrected = observed − (−0.05) = observed + 0.05 mm."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.5 · THE JAWS ARE CLOSED. WHAT DOES IT READ?",
          "chips": ["no zero error", "positive zero error", "negative zero error"],
          "captions": [
            "Jaws fully closed, and the vernier zero sits exactly on the main zero. The amber line marks the coincidence, which is at the zero itself. There is nothing to correct here, and this is the state you should check for before every set of readings.",
            "Jaws closed, and the vernier zero has slipped to the RIGHT of the main zero. Counting along, the 4th vernier line is the one that coincides, so the offset is 4 × 0.01 cm = +0.04 cm. The instrument reads too high by that amount on every single measurement, so it must be SUBTRACTED. Positive zero error, subtract.",
            "Jaws closed, and the vernier zero sits to the LEFT of the main zero. Now the 6th vernier line coincides, giving a zero error of −0.04 cm. The instrument reads too low every time, and the universal rule still applies: corrected = observed − (−0.04) = observed + 0.04 cm. One formula, and the sign does the thinking."
          ],
          "frames": [
            {
              "x": [0, 11], "y": [0, 6.4], "axes": "none", "aspect": 0.52,
              "segments": [
                { "from": [0.4, 4.8], "to": [10.6, 4.8] },
                { "from": [1.5, 4.8], "to": [1.5, 4.2] },
                { "from": [2.5, 4.8], "to": [2.5, 4.2] },
                { "from": [3.5, 4.8], "to": [3.5, 4.2] },
                { "from": [4.5, 4.8], "to": [4.5, 4.2] },
                { "from": [5.5, 4.8], "to": [5.5, 4.2] },
                { "from": [6.5, 4.8], "to": [6.5, 4.2] },
                { "from": [7.5, 4.8], "to": [7.5, 4.2] },
                { "from": [8.5, 4.8], "to": [8.5, 4.2] },
                { "from": [9.5, 4.8], "to": [9.5, 4.2] },
                { "from": [10.5, 4.8], "to": [10.5, 4.2] },
                { "from": [0.4, 2.4], "to": [9.6, 2.4] },
                { "from": [1.4, 2.4], "to": [1.4, 3.0] },
                { "from": [2.3, 2.4], "to": [2.3, 3.0] },
                { "from": [3.2, 2.4], "to": [3.2, 3.0] },
                { "from": [4.1, 2.4], "to": [4.1, 3.0] },
                { "from": [5.0, 2.4], "to": [5.0, 3.0] },
                { "from": [5.9, 2.4], "to": [5.9, 3.0] },
                { "from": [6.8, 2.4], "to": [6.8, 3.0] },
                { "from": [7.7, 2.4], "to": [7.7, 3.0] },
                { "from": [8.6, 2.4], "to": [8.6, 3.0] },
                { "from": [9.5, 2.4], "to": [9.5, 3.0] }
              ],
              "arrows": [
                { "from": [0.5, 2.4], "to": [0.5, 4.8], "head": "none", "tone": "amber" }
              ],
              "points": [
                { "x": 0.5, "y": 4.8, "label": "0", "at": "nw" },
                { "x": 0.5, "y": 2.4, "label": "0", "at": "sw" }
              ],
              "labels": [
                { "x": 5.5, "y": 5.8, "text": "main scale, 1 mm" },
                { "x": 5.5, "y": 1.4, "text": "vernier, 10 divisions" },
                { "x": 2.6, "y": 0.55, "text": "no zero error at all" }
              ]
            },
            {
              "x": [0, 11], "y": [0, 6.4], "axes": "none", "aspect": 0.52,
              "segments": [
                { "from": [0.4, 4.8], "to": [10.6, 4.8] },
                { "from": [0.5, 4.8], "to": [0.5, 4.2] },
                { "from": [1.5, 4.8], "to": [1.5, 4.2] },
                { "from": [2.5, 4.8], "to": [2.5, 4.2] },
                { "from": [3.5, 4.8], "to": [3.5, 4.2] },
                { "from": [5.5, 4.8], "to": [5.5, 4.2] },
                { "from": [6.5, 4.8], "to": [6.5, 4.2] },
                { "from": [7.5, 4.8], "to": [7.5, 4.2] },
                { "from": [8.5, 4.8], "to": [8.5, 4.2] },
                { "from": [9.5, 4.8], "to": [9.5, 4.2] },
                { "from": [10.5, 4.8], "to": [10.5, 4.2] },
                { "from": [0.8, 2.4], "to": [10.0, 2.4] },
                { "from": [0.9, 2.4], "to": [0.9, 3.0] },
                { "from": [1.8, 2.4], "to": [1.8, 3.0] },
                { "from": [2.7, 2.4], "to": [2.7, 3.0] },
                { "from": [3.6, 2.4], "to": [3.6, 3.0] },
                { "from": [5.4, 2.4], "to": [5.4, 3.0] },
                { "from": [6.3, 2.4], "to": [6.3, 3.0] },
                { "from": [7.2, 2.4], "to": [7.2, 3.0] },
                { "from": [8.1, 2.4], "to": [8.1, 3.0] },
                { "from": [9.0, 2.4], "to": [9.0, 3.0] },
                { "from": [9.9, 2.4], "to": [9.9, 3.0] }
              ],
              "arrows": [
                { "from": [4.5, 2.4], "to": [4.5, 4.8], "head": "none", "tone": "amber" }
              ],
              "points": [
                { "x": 0.5, "y": 4.8, "label": "0", "at": "nw" },
                { "x": 0.9, "y": 2.4, "label": "0", "at": "sw" }
              ],
              "labels": [
                { "x": 5.5, "y": 5.8, "text": "main scale, 1 mm" },
                { "x": 5.5, "y": 1.4, "text": "vernier, 10 divisions" },
                { "x": 2.6, "y": 0.55, "text": "+0.04 cm, so subtract" }
              ]
            },
            {
              "x": [0, 11], "y": [0, 6.4], "axes": "none", "aspect": 0.52,
              "segments": [
                { "from": [0.4, 4.8], "to": [10.6, 4.8] },
                { "from": [0.5, 4.8], "to": [0.5, 4.2] },
                { "from": [1.5, 4.8], "to": [1.5, 4.2] },
                { "from": [2.5, 4.8], "to": [2.5, 4.2] },
                { "from": [3.5, 4.8], "to": [3.5, 4.2] },
                { "from": [4.5, 4.8], "to": [4.5, 4.2] },
                { "from": [6.5, 4.8], "to": [6.5, 4.2] },
                { "from": [7.5, 4.8], "to": [7.5, 4.2] },
                { "from": [8.5, 4.8], "to": [8.5, 4.2] },
                { "from": [9.5, 4.8], "to": [9.5, 4.2] },
                { "from": [10.5, 4.8], "to": [10.5, 4.2] },
                { "from": [0.05, 2.4], "to": [9.2, 2.4] },
                { "from": [0.1, 2.4], "to": [0.1, 3.0] },
                { "from": [1.0, 2.4], "to": [1.0, 3.0] },
                { "from": [1.9, 2.4], "to": [1.9, 3.0] },
                { "from": [2.8, 2.4], "to": [2.8, 3.0] },
                { "from": [3.7, 2.4], "to": [3.7, 3.0] },
                { "from": [4.6, 2.4], "to": [4.6, 3.0] },
                { "from": [6.4, 2.4], "to": [6.4, 3.0] },
                { "from": [7.3, 2.4], "to": [7.3, 3.0] },
                { "from": [8.2, 2.4], "to": [8.2, 3.0] },
                { "from": [9.1, 2.4], "to": [9.1, 3.0] }
              ],
              "arrows": [
                { "from": [5.5, 2.4], "to": [5.5, 4.8], "head": "none", "tone": "amber" }
              ],
              "points": [
                { "x": 0.5, "y": 4.8, "label": "0", "at": "nw" },
                { "x": 0.1, "y": 2.4, "label": "0", "at": "sw" }
              ],
              "labels": [
                { "x": 5.5, "y": 5.8, "text": "main scale, 1 mm" },
                { "x": 5.5, "y": 1.4, "text": "vernier, 10 divisions" },
                { "x": 2.6, "y": 0.55, "text": "−0.04 cm, so add" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A vernier callipers has a main scale graduated in millimetres and 10 vernier divisions coinciding with 9 main scale divisions. Measuring a rod, the main scale reads 1.2 cm and the 6th vernier division coincides. There is no zero error. Find the length of the rod.",
          "steps": [
            "Least count first, always. With 1 MSD = 1 mm and <i>n</i> = 10 vernier divisions, LC = (1 mm)/10 = 0.1 mm = 0.01 cm.",
            "Main scale reading: MSR = 1.2 cm, the last main mark before the vernier zero.",
            "Vernier contribution: VSR × LC = 6 × 0.01 cm = 0.06 cm. Notice that 6 is a count, and it only became a length when it met the least count.",
            "Length = 1.2 + 0.06 = 1.26 cm, and there is no zero error to correct. The answer's last decimal place matches the least count exactly, which is the built-in check that you have not over-claimed."
          ],
          "ans": "1.26 cm"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A screw gauge reads +0.05 mm when its jaws are completely closed. Measuring a wire, it reads 2.34 mm. What is the correct diameter?",
          "steps": [
            "The hasty student either reports 2.34 mm as it stands or, worse, ADDS the zero error to get 2.39 mm. Both are wrong.",
            "A positive zero error means the instrument reads systematically HIGH. Whatever you put in the jaws, the answer comes out 0.05 mm too big.",
            "Apply the one universal rule: corrected = observed − zero error = 2.34 − (+0.05) = 2.29 mm.",
            "Never memorise two cases. Memorise corrected = observed − zero error and let the sign do the work. Adding when you should subtract is the most common instrument mistake in NEET, and it is worth double: you lose the mark and you land on a distractor that was placed there for you."
          ],
          "ans": "2.29 mm"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. Measuring a wire, the main scale reads 2 mm and the 45th circular division coincides. The instrument has a negative zero error of 5 circular divisions. Find (a) the corrected diameter and (b) the maximum percentage error in the cross-sectional area, taking the least count as the uncertainty.",
          "steps": [
            "Least count: LC = pitch/(circular divisions) = (1 mm)/100 = 0.01 mm.",
            "Observed reading: MSR + (45 × LC) = 2 + 0.45 = 2.45 mm.",
            "Zero error: 5 divisions negative means −5 × 0.01 = −0.05 mm. Corrected <i>d</i> = observed − zero error = 2.45 − (−0.05) = 2.50 mm. A negative zero error INCREASED the reading, which is exactly what the sign rule predicts and what intuition gets wrong.",
            "(b) Area is <i>A</i> = π<i>d</i><sup>2</sup>/4, so <i>A</i> is proportional to <i>d</i><sup>2</sup> and the power rule from Topic 03 doubles the relative error: Δ<i>A</i>/<i>A</i> = 2(Δ<i>d</i>/<i>d</i>) = 2(0.01/2.50) = 2 × 0.004 = 0.008 = 0.8%. The diameter's error doubles on its way into the area."
          ],
          "ans": "(a) 2.50 mm · (b) 0.8%"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A laboratory has two instruments. In a vernier callipers, 1 cm on the main scale is divided into 20 equal parts and 25 vernier divisions coincide with 24 main scale divisions. In a screw gauge, the linear scale is graduated in millimetres, one complete rotation advances the spindle by 3 main-scale divisions, and the circular scale has 200 divisions. Find both least counts and say which instrument is more precise.",
          "steps": [
            "(a) Vernier. First the value of ONE main scale division, which is not 1 mm here: 1 MSD = (1 cm)/20 = 0.05 cm = 0.5 mm.",
            "With 25 VSD spanning 24 MSD, this is the standard construction with <i>n</i> = 25, so LC = (1 MSD)/<i>n</i> = (0.5 mm)/25 = 0.02 mm.",
            "(b) Screw gauge. The linear scale is in millimetres, so 1 main-scale division = 1 mm, and one rotation advances 3 of them: pitch = 3 mm, not 1 mm. LC = pitch/200 = (3 mm)/200 = 0.015 mm.",
            "(c) Smaller least count means finer, and 0.015 mm < 0.02 mm, so the screw gauge wins. What makes this Advanced is that not one number was standard: no 1 mm main division, no 1 mm pitch, no (<i>n</i> − 1) shortcut taken on faith. Rebuild each least count from its definition and the modified-instrument twist stops being a twist."
          ],
          "ans": "vernier 0.02 mm · screw gauge 0.015 mm · the screw gauge is more precise"
        },
        {
          "t": "mcq",
          "q": "The least count of a vernier callipers is given by:",
          "opts": [
            { "label": "1 MSD + 1 VSD", "nudge": "Adding them gives roughly two main divisions, which is coarser than the plain scale you started with. The vernier would be making things worse." },
            { "label": "1 MSD − 1 VSD", "nudge": null },
            { "label": "1 VSD − 1 MSD", "nudge": "This reverses the subtraction and gives a negative number, which no length can be. The vernier division is the SMALLER of the two." },
            { "label": "1 MSD × 1 VSD", "nudge": "A product of two lengths is an area, not a length. This comes from combining the symbols without asking what the mismatched-combs picture is showing." }
          ],
          "correct": 1,
          "solution": "The least count is the small gap by which one vernier division falls short of one main division. With n vernier divisions spanning (n − 1) main ones, that gap works out to (1 MSD)/n."
        },
        {
          "t": "mcq",
          "q": "The least count of a screw gauge equals:",
          "opts": [
            { "label": "pitch × number of circular divisions", "nudge": "This makes the least count far LARGER than the pitch, which would mean one division of the circular scale is worth more than a whole turn of the screw." },
            { "label": "pitch ÷ number of circular divisions", "nudge": null },
            { "label": "number of circular divisions ÷ pitch", "nudge": "This inverts the ratio and gives units of 1/length, so the answer would not even be a length." },
            { "label": "pitch + number of circular divisions", "nudge": "Adding a length to a pure count is dimensionally meaningless, the exact thing Topic 02's homogeneity forbids." }
          ],
          "correct": 1,
          "solution": "One full rotation moves the spindle by the pitch, and that advance is shared out equally among all the circular divisions, so each division is worth pitch divided by their number."
        },
        {
          "t": "mcq",
          "q": "An instrument has a positive zero error. To get the correct reading, the zero error should be:",
          "opts": [
            { "label": "added to the observed reading", "nudge": "This doubles the error instead of removing it. A positive zero error means the instrument already reads too high; adding makes it higher still." },
            { "label": "subtracted from the observed reading", "nudge": null },
            { "label": "ignored, since it is constant", "nudge": "Being constant is exactly what makes it a SYSTEMATIC error, and systematic errors are the ones averaging cannot touch. Constant is the reason to correct it, not to ignore it." },
            { "label": "multiplied by the least count", "nudge": "That is the step for converting a coinciding DIVISION into a length, not for applying a correction. Here the zero error is already a length." }
          ],
          "correct": 1,
          "solution": "Corrected = observed − zero error, with the sign carried. A positive zero error is subtracted; a negative one is also subtracted, which adds its magnitude. One rule, both cases."
        },
        {
          "t": "mcq",
          "q": "Among the following, the instrument capable of the most precise length measurement is the one with the:",
          "opts": [
            { "label": "largest least count", "nudge": "Exactly backwards. The least count IS the uncertainty in a single reading, so a large one means a coarse instrument." },
            { "label": "smallest least count", "nudge": null },
            { "label": "longest main scale", "nudge": "A longer scale measures a bigger RANGE, not a finer detail. The two are actually traded against each other in real instruments." },
            { "label": "most main scale divisions", "nudge": "The main scale sets the coarse reading. It is the vernier or circular divisions that refine it, and they are what appear in the least-count formula." }
          ],
          "correct": 1,
          "solution": "Precision improves as the least count shrinks, because the least count is the uncertainty in one reading. That is also why the answer's last decimal place should match the least count and no further."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A vernier callipers has 1 MSD = 1 mm and 20 vernier divisions coinciding with 19 main scale divisions. Find its least count.", "a": "LC = (1 MSD)/<i>n</i> = (1 mm)/20 = 0.05 mm." },
            { "q": "[NEET] A screw gauge has a pitch of 0.5 mm and 100 divisions on the circular scale. Find its least count.", "a": "LC = pitch/100 = (0.5 mm)/100 = 0.005 mm." },
            { "q": "[JEE Main] A screw gauge of least count 0.01 mm reads a main scale value of 4 mm with the 32nd circular division coinciding. It has a positive zero error of 0.03 mm. Find the corrected diameter.", "a": "Observed = 4 + (32 × 0.01) = 4.32 mm. Corrected = 4.32 − (+0.03) = 4.29 mm." },
            { "q": "[JEE Main] A vernier callipers of least count 0.01 cm reads 3.2 cm on the main scale with the 7th vernier division coinciding. It has a negative zero error of 4 divisions. Find the corrected length.", "a": "Observed = 3.2 + (7 × 0.01) = 3.27 cm. Zero error = −4 × 0.01 = −0.04 cm. Corrected = 3.27 − (−0.04) = 3.31 cm." },
            { "q": "[JEE Advanced] In a vernier callipers, 50 vernier divisions coincide with 49 main scale divisions and 1 MSD = 0.5 mm. Find the least count, and how many least counts make exactly 1 cm.", "a": "LC = (0.5 mm)/50 = 0.01 mm. And 1 cm = 10 mm, so 10/0.01 = 1000 least counts make a centimetre." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Getting the zero-error sign wrong.</b> Positive means subtract; negative means subtract a negative, which adds the magnitude. Use the single rule corrected = observed − zero error and let the sign do the thinking, because two remembered cases is one case too many under exam pressure.",
            "<b>Assuming the screw gauge pitch is 1 mm.</b> The pitch is how far the spindle moves per rotation and must be computed from the question. In modified-instrument problems it is very often 0.5 mm or 3 mm, and that single assumption ruins the whole answer.",
            "<b>Assuming 1 MSD is 1 mm.</b> If a question says 1 cm is divided into 20 parts, then 1 MSD = 0.5 mm and every least count downstream changes. Read the main scale's own definition before you touch the vernier.",
            "<b>Using the coinciding division number as a length.</b> The 45th division is not 45 mm. It is 45 × LC, which for a screw gauge of LC = 0.01 mm is 0.45 mm. Multiplying by the least count is what turns a count into a length.",
            "<b>Trying to average away a zero error.</b> It is a systematic error with a fixed size and sign, so a hundred readings all carry it identically. Measure it with the jaws closed and correct for it; averaging is the cure for the other disease."
          ]
        },
        {
          "t": "protip",
          "html": "compute the least count first, every single time, before you look at any reading. with the lc in hand every question collapses to the same three beats: reading = msr + (coinciding division × lc), then corrected = observed − zero error. nail that fixed sequence and these become near-automatic. one more time-saver for the exam hall, and it doubles as a proof-reader: the last meaningful decimal place of your answer should match the least count. an lc of 0.01 mm entitles you to two decimal places in millimetres, no more and no fewer. if your corrected diameter comes out as 2.4567 mm you have carried digits the instrument never gave you, and if it comes out as 2.5 mm you have thrown away a digit it did give you. the lc is a built-in sanity check on the final figure."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "LC = smallest measurable length = uncertainty in ONE reading", "note": "smaller LC means finer, but also smaller range" },
            { "f": "vernier: LC = 1 MSD − 1 VSD = (1 MSD)/<i>n</i>", "note": "check the value of 1 MSD; it is not always 1 mm" },
            { "f": "screw gauge: pitch = distance/rotations, LC = pitch/(circular divisions)", "note": "never assume a 1 mm pitch" },
            { "f": "reading = MSR + (coinciding division × LC)", "note": "the division number is a count until it meets the LC" },
            { "f": "corrected = observed − zero error, sign included", "note": "positive subtract, negative add the magnitude" },
            { "f": "typical: metre scale 1 mm · vernier 0.1 mm · screw gauge 0.01 mm", "note": "a zero error is systematic; averaging will never remove it" }
          ],
          "aids": [
            "\"main minus vernier\" for the callipers",
            "\"pitch over circle\" for the screw gauge",
            "\"corrected equals observed minus zero error\", one rule, every sign",
            "\"smaller least count, sharper the count\"",
            "\"the answer's last decimal should match the lc\""
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Measuring the Very Large and the Very Small",
      "chip": "06 EXTREMES",
      "kalam": "turn the unmeasurable into something measurable, then do arithmetic",
      "blocks": [
        {
          "t": "p",
          "html": "Stretch out a measuring tape and you can read off the length of a room, the height of a friend, the width of a notebook. Now try to measure three other things with that same tape: the distance to the Moon, the diameter of an oil molecule, the distance to a star. The tape is useless for all three, two of them absurdly large and one absurdly small. This is the whole problem of the topic. <b>Direct measurement only works in a narrow human-sized band</b>, roughly a millimetre to a few hundred metres. Outside it, we have to be clever and measure things <b>indirectly</b>.<br><br>Here is the first trick, and you already use it without knowing. Hold your thumb up at arm's length and look at it with the left eye only, then the right eye only. The thumb jumps against the far wall. That apparent jump is <b>parallax</b>, the shift in a nearby object's position when you view it from two different places, and the closer the object the bigger the jump. Turn that around and you have a distance-measuring machine: if you know how far apart your two eyes are, and you measure the size of the jump, you can compute the distance. Astronomers do exactly this, with two observatories on Earth as the two eyes, or the same telescope six months apart at opposite ends of the Earth's orbit."
        },
        {
          "t": "think",
          "html": "measuring extreme sizes is like weighing a single grain of rice. you cannot; your kitchen scale will not budge for one grain. so instead you weigh a thousand grains and divide by a thousand. you never measured one grain directly, you measured something big and easy and then did arithmetic. every method in this topic is a version of that same move: convert the unmeasurable into something measurable, then divide."
        },
        {
          "t": "p",
          "html": "The second trick is <b>timing an echo</b>. Shout into a canyon and the time the echo takes to come back tells you how far the wall is, because sound travels at a known speed. Replace sound with a radio pulse and you have RADAR, with a laser pulse and you have LIDAR, with underwater sound and you have SONAR, and the same idea measures the distance to an aircraft, to the Moon or to the seabed. <b>The rule never changes: the pulse goes out and comes back, so the distance is HALF the round trip</b>, and forgetting that factor of two is the classic blunder of the topic.<br><br>The third trick is for the impossibly small: <b>spread it thin and divide</b>. Take a tiny known volume of oil and let it spread on water until the film is just one molecule thick. Then the thickness IS the molecule's size, and thickness is only volume divided by area, both of which you can measure easily. A quantity too small to see becomes an easy volume and an easy area, which is exactly the grain-of-rice move again."
        },
        {
          "t": "p",
          "html": "Mass and time hide the same story. A chemical balance handles grams to kilograms, but the mass of an electron, around 10<sup>−30</sup> kg, or of a galaxy, around 10<sup>42</sup> kg, needs indirect methods. A <b>mass spectrograph</b> bends charged particles in a magnetic field and weighs atoms from the radius of the bend; planetary orbits and gravity weigh stars and galaxies. Time stretches from the 10<sup>−22</sup> s life of an unstable particle to the 10<sup>17</sup> s age of the universe, and the most precise clocks we have are <b>atomic clocks</b>, which count the unimaginably steady vibrations of caesium atoms: accurate to about 1 part in 10<sup>13</sup>, a drift of roughly 1 s in 10<sup>5</sup> years.<br><br>Step back and the numbers are astonishing. The quantities of physics span about <b>10<sup>41</sup> in length, 10<sup>85</sup> in mass and 10<sup>39</sup> in time</b>, and knowing where things sit on that ladder is itself a skill examiners test. It is also the skill that catches a wrong answer: if your calculation puts a star at 10<sup>8</sup> m, you have dropped a factor somewhere, because that is the distance to the Moon."
        },
        {
          "t": "def",
          "term": "The parsec, and the assumptions every method here rests on",
          "html": "The <b>parsec</b> is defined as the distance at which 1 AU subtends an angle of 1 arc-second, where 1″ = 1/3600 of a degree. Equivalently, a star whose parallax is <i>p</i> arc-seconds lies at a distance of 1/<i>p</i> parsec. That gives 1 pc ≈ 3.08 × 10<sup>16</sup> m ≈ 3.26 light years, and the sharper value is 3.086 × 10<sup>16</sup> m.<br><br>Four quiet assumptions hold the topic together, and every one of them is examinable. The parallax relation <i>D</i> = <i>b</i>/θ needs θ <b>in radians</b> and small, so that the arc equals the chord, and it only works when the object is far compared with the basis <i>b</i>. The angular-size relation α = <i>d</i>/<i>D</i> needs α in radians too, and treats the object's diameter as an arc of a circle of radius <i>D</i>. The molecular-size estimate assumes the film is <b>exactly one molecule thick</b> and that molecules pack without gaps, so it gives an ESTIMATE good to an order of magnitude, never a precise value. And echo methods assume the pulse speed is constant along the whole path, which in air or water varies with temperature."
        },
        {
          "t": "defgrid",
          "title": "The units of the very large and the very small",
          "rows": [
            { "k": "1 fermi", "v": "1 fm = 10<sup>−15</sup> m. Nuclear sizes. The smallest length in the chapter" },
            { "k": "1 angstrom", "v": "1 Å = 10<sup>−10</sup> m. Atomic sizes, and the natural unit for a molecular diameter" },
            { "k": "1 astronomical unit", "v": "1 AU ≈ 1.496 × 10<sup>11</sup> m, the mean Earth to Sun distance. The basis for stellar parallax is 2 AU" },
            { "k": "1 light year", "v": "1 ly ≈ 9.46 × 10<sup>15</sup> m, how far light travels in one year. A distance, never a time" },
            { "k": "1 parsec", "v": "1 pc ≈ 3.08 × 10<sup>16</sup> m ≈ 3.26 ly. The LARGEST of the three, so a distance has the FEWEST parsecs" },
            { "k": "1 atomic mass unit", "v": "1 u = 1/12 the mass of a carbon-12 atom ≈ 1.66 × 10<sup>−27</sup> kg · 1 tonne = 10<sup>3</sup> kg · 1 quintal = 10<sup>2</sup> kg" }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · PARALLAX, AND ANGULAR SIZE",
          "tag": "two lines that measure the sky",
          "main": "θ = <i>b</i>/<i>D</i> ⟹ <i>D</i> = <i>b</i>/θ<br>α = <i>d</i>/<i>D</i> ⟹ <i>d</i> = α<i>D</i>",
          "legend": [
            "<i>b</i> = the basis, the known separation of the two viewing points (m). Two observatories for a planet; the Earth's orbital diameter, <i>b</i> = 2 AU, for a star",
            "θ = the parallactic angle between the two lines of sight, IN RADIANS. <i>D</i> = the object's distance (m)",
            "α = the angular diameter the object subtends, IN RADIANS, and <i>d</i> = its true diameter (m). Use 1° = π/180 rad and 1″ = 4.85 × 10<sup>−6</sup> rad"
          ],
          "note": "Both are pure geometry: for a small angle the basis is an arc of a circle of radius D, so arc = radius × angle. The sanity check that catches an inverted ratio: a LARGER parallax means a CLOSER object. And the two chain together, parallax first for the distance, angular size second for the real size."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · ECHO METHODS, AND THE MONOLAYER",
          "tag": "halve the track, then spread it thin",
          "main": "<i>D</i> = <i>vt</i>/2<br><i>t</i> = <i>V</i>/<i>A</i>",
          "legend": [
            "<i>v</i> = the pulse speed (m/s): <i>c</i> = 3 × 10<sup>8</sup> m/s for radio and laser, about 1500 m/s for sound in water",
            "<i>t</i> in the first line = the TOTAL round-trip time (s), which is why the 2 is there; <i>D</i> = the one-way distance (m)",
            "<i>V</i> = the volume of pure oleic acid in one drop (m<sup>3</sup>), <i>A</i> = the area of the circular film (m<sup>2</sup>), and <i>t</i> in the second line = the film's thickness (m), which IS the molecular diameter"
          ],
          "note": "Skipping the 1/2 doubles your answer and is the single most common error in the whole subtopic. The monolayer result is an estimate: it assumes a perfect gap-free film one molecule thick, and it lands at about 10⁻⁹ m, which is the right decade for a long-chain organic molecule."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 1.6 · PARALLAX, FROM YOUR THUMB TO A STAR",
          "chips": ["the thin triangle", "your thumb at arm's length"],
          "captions": [
            "The distant object S sits at the apex of a very thin isosceles triangle. The base is the basis b, joining two observation points A and B, and the two equal sides are the lines of sight, each of length D. The apex angle θ is the parallactic angle. For a small angle the base is an arc of a circle of radius D, so b = Dθ and therefore D = b/θ. Every symbol in that line is measurable: b from a map, θ from two telescopes.",
            "The same geometry, done with your face. Your two eyes are the basis, your thumb is the near object and the wall is the distant background. Close one eye, then the other, and the thumb jumps. The nearer your thumb, the bigger the jump, which is the whole method in one sentence: a larger parallax means a closer object. Bring your thumb in to half the distance and the jump roughly doubles."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 10], "axes": "none", "aspect": 0.9,
              "polys": [
                { "pts": [[3.2, 1.4], [5, 9.0], [6.8, 1.4]], "close": true, "fill": "wash", "tone": "soft" }
              ],
              "arcs": [
                { "at": [5, 9.0], "r": 1.0, "from": 255, "to": 285, "label": "θ", "tone": "amber" }
              ],
              "points": [
                { "x": 5, "y": 9.0, "label": "S" },
                { "x": 3.2, "y": 1.4, "label": "A", "at": "sw" },
                { "x": 6.8, "y": 1.4, "label": "B", "at": "se" }
              ],
              "labels": [
                { "x": 2.5, "y": 5.6, "text": "D" },
                { "x": 7.5, "y": 5.6, "text": "D" },
                { "x": 5.0, "y": 0.7, "text": "b (basis)" },
                { "x": 2.2, "y": 8.4, "text": "D = b/θ" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 7], "axes": "none", "aspect": 0.62,
              "polys": [
                { "pts": [[0.6, 5.6], [9.4, 5.6]], "tone": "soft" }
              ],
              "segments": [
                { "from": [4.2, 0.9], "to": [5.99, 5.6], "dash": true },
                { "from": [5.8, 0.9], "to": [4.01, 5.6], "dash": true }
              ],
              "arrows": [
                { "from": [4.01, 5.6], "to": [5.99, 5.6], "head": "both", "tone": "amber", "label": "the jump", "at": "below" }
              ],
              "marks": [
                { "x": 5.0, "y": 3.0, "glyph": "square", "label": "thumb", "tone": "amber" },
                { "x": 4.2, "y": 0.9, "glyph": "dot", "label": "L" },
                { "x": 5.8, "y": 0.9, "glyph": "dot", "label": "R" }
              ],
              "labels": [
                { "x": 5.0, "y": 6.4, "text": "far wall" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Distance by parallax, and size from it",
          "steps": [
            "<b>Pick a basis <i>b</i> you actually know.</b> Two observatories a known distance apart for a planet, or the two ends of the Earth's orbit six months apart, <i>b</i> = 2 AU, for a star.",
            "<b>Measure the parallactic angle θ between the two lines of sight, and CONVERT IT TO RADIANS.</b> Use 1° = π/180 rad and 1″ = 4.85 × 10<sup>−6</sup> rad. Every formula in this topic is a small-angle geometry result and degrees will silently ruin it.",
            "<b>Apply <i>D</i> = <i>b</i>/θ.</b> This works because for a small angle the basis is the arc of a circle of radius <i>D</i>, so arc = radius × angle.",
            "<b>Sanity-check the direction:</b> a larger parallax means a CLOSER object. If your answer says otherwise you have inverted the ratio.",
            "<b>Only now can you ask how big it is.</b> Measure the angular diameter α, again in radians, and apply <i>d</i> = α<i>D</i> using the distance you just found. The two steps chain, and the size question cannot be answered first."
          ]
        },
        {
          "t": "proc",
          "title": "The oleic acid monolayer, step by step",
          "steps": [
            "<b>Dilute to a known, tiny concentration.</b> Dissolve 1 cm<sup>3</sup> of oleic acid in alcohol to make 20 cm<sup>3</sup>, then take 1 cm<sup>3</sup> of THAT and dilute again to 20 cm<sup>3</sup>. The concentration is (1/20) × (1/20) = 1/400.",
            "<b>Sprinkle lycopodium powder on clean water</b> and place ONE drop of the final solution on it. The alcohol dissolves away, the oleic acid spreads into a thin circular film, and the powder makes its edge visible.",
            "<b>Measure the film's diameter and get the area,</b> <i>A</i> = π<i>r</i><sup>2</sup>.",
            "<b>Compute the volume of PURE oleic acid in the drop:</b> (drop volume) × (concentration). This is where the dilution pays off, because a measurable drop contains an unmeasurably small amount of acid.",
            "<b>Divide:</b> <i>t</i> = <i>V</i>/<i>A</i>. Assuming the film is one molecule thick, that thickness is the molecular diameter, and it comes out around 10<sup>−9</sup> m. Report it as an ESTIMATE: the monolayer and no-gaps assumptions make it good to an order of magnitude, not to three figures."
          ]
        },
        {
          "t": "diagram",
          "kind": "levels",
          "kicker": "THE LADDER OF MAGNITUDES",
          "chips": ["lengths", "masses", "times"],
          "captions": [
            "From a nucleus to the observable universe, a span of about 10 to the 41. The rungs are spaced by their actual powers of ten, so the picture is honest about how empty the middle is: you and everything you can touch live in a narrow band around 10 to the 0, and the two ends of the ladder are unreachable by any tape measure. Note the rung that surprises people: the Earth's radius is 6.37 × 10 to the 6 m, and because 6.37 is above the square root of ten, its order of magnitude is 10 to the 7.",
            "From an electron to the observable universe, a span of about 10 to the 85, the widest range in physics. A proton sits just above the electron at 10 to the minus 27 kg and is left off the drawing only because it would print on top of it. The chemical balance in your school laboratory covers about six of these eighty-five decades, which is why everything else on this ladder is weighed by a magnetic field or by an orbit.",
            "From the time light takes to cross a nucleus to the age of the universe, about 10 to the 39. A caesium clock, accurate to one part in 10 to the 13, would drift by a second in about 10 to the 5 years, which is a rung this ladder does not even have room to show. Human experience occupies the middle, at the heartbeat, and everything above and below it is counted rather than felt."
          ],
          "frames": [
            {
              "aspect": 0.95,
              "levels": {
                "rows": [
                  { "at": 26, "label": "10²⁶ m", "right": "universe" },
                  { "at": 11, "label": "10¹¹ m", "right": "Earth-Sun" },
                  { "at": 7, "label": "10⁷ m", "right": "Earth R" },
                  { "at": 0, "label": "10⁰ m", "right": "human", "tone": "amber" },
                  { "at": -10, "label": "10⁻¹⁰ m", "right": "atom" },
                  { "at": -15, "label": "10⁻¹⁵ m", "right": "nucleus" }
                ]
              }
            },
            {
              "aspect": 0.95,
              "levels": {
                "rows": [
                  { "at": 55, "label": "10⁵⁵ kg", "right": "universe" },
                  { "at": 30, "label": "10³⁰ kg", "right": "Sun" },
                  { "at": 25, "label": "10²⁵ kg", "right": "Earth" },
                  { "at": 2, "label": "10² kg", "right": "human", "tone": "amber" },
                  { "at": -30, "label": "10⁻³⁰ kg", "right": "electron" }
                ]
              }
            },
            {
              "aspect": 0.95,
              "levels": {
                "rows": [
                  { "at": 17, "label": "10¹⁷ s", "right": "universe" },
                  { "at": 7, "label": "10⁷ s", "right": "one year" },
                  { "at": 0, "label": "10⁰ s", "right": "heartbeat", "tone": "amber" },
                  { "at": -15, "label": "10⁻¹⁵ s", "right": "light wave" },
                  { "at": -24, "label": "10⁻²⁴ s", "right": "nucleus" }
                ]
              }
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "The Moon subtends an angular diameter of about 0.5° at an observer on Earth. Taking the Earth to Moon distance as 3.84 × 10<sup>8</sup> m, estimate the Moon's diameter.",
          "steps": [
            "Convert the angle to radians first, because the small-angle relation demands it: α = 0.5 × (π/180) = 8.727 × 10<sup>−3</sup> rad. Keep the guard digits for now.",
            "Apply <i>d</i> = α<i>D</i> = (8.727 × 10<sup>−3</sup>)(3.84 × 10<sup>8</sup>) = 3.351 × 10<sup>6</sup> m, still with guard digits.",
            "Now round, once, at the end, and be honest about the input. <b>\"About 0.5°\" carries ONE significant figure</b>, so the answer is entitled to one: <i>d</i> ≈ 3 × 10<sup>6</sup> m. Quoting 3.35 × 10<sup>6</sup> m would claim three figures that the angle never supplied, which is exactly the offence Topic 04 exists to prevent.",
            "Check it. The accepted value is 3.48 × 10<sup>6</sup> m, comfortably inside a one-figure claim of 3 × 10<sup>6</sup> m. And notice what was never needed: nobody went to the Moon. An angle and a distance were enough."
          ],
          "ans": "<i>d</i> ≈ 3 × 10<sup>6</sup> m, about 3500 km, against the accepted 3.48 × 10<sup>6</sup> m"
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A nearby star lies 4.0 light years from Earth. Its distance in parsec is closest to: (A) 13.0 pc (B) 1.2 pc (C) 4.0 pc (D) 0.31 pc",
          "steps": [
            "The trap is the direction of the conversion. Students half-remember \"1 pc ≈ 3.26 ly\" and MULTIPLY, getting 4.0 × 3.26 ≈ 13, which is option (A) sitting there waiting.",
            "Think in units, not in formulas. A parsec is the BIGGER unit, so the number of parsecs must be SMALLER than the number of light years. This is Topic 01's \"smaller unit, bigger number\" read backwards.",
            "<i>D</i> = (4.0 ly)/(3.26 ly per pc) = 1.2 pc, keeping two significant figures because the input had two.",
            "Fix the ordering once and for all: AU < light year < parsec, with 1 pc ≈ 3.26 ly ≈ 3.08 × 10<sup>16</sup> m. Since the parsec is the biggest, any distance has the fewest parsecs, so you divide."
          ],
          "ans": "(B) 1.2 pc"
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "In the oleic acid experiment, 1 cm<sup>3</sup> of oleic acid is dissolved in alcohol to make 20 cm<sup>3</sup>; then 1 cm<sup>3</sup> of that solution is diluted again to 20 cm<sup>3</sup>. One drop of the final solution, volume 0.05 cm<sup>3</sup>, is placed on water and spreads into a circular film of radius 10 cm. Estimate the diameter of an oleic acid molecule.",
          "steps": [
            "Concentration of pure acid after the double dilution: (1/20) × (1/20) = 1/400. These are exact ratios and limit nothing.",
            "Volume of pure oleic acid in one drop: <i>V</i> = 0.05 × (1/400) = 1.25 × 10<sup>−4</sup> cm<sup>3</sup>.",
            "Area of the film: <i>A</i> = π<i>r</i><sup>2</sup> = 3.14 × (10)<sup>2</sup> = 314 cm<sup>2</sup>.",
            "Thickness, which is the molecular diameter if the film is one molecule thick: <i>t</i> = <i>V</i>/<i>A</i> = (1.25 × 10<sup>−4</sup>)/314 = 3.98 × 10<sup>−7</sup> cm = 4.0 × 10<sup>−9</sup> m. The drop volume carried one significant figure, so report about 4 × 10<sup>−9</sup> m, a few nanometres, which is the right size for a long-chain organic molecule. It is an estimate and the monolayer assumption is why."
          ],
          "ans": "about 4 × 10<sup>−9</sup> m, roughly 40 Å"
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "The parallax of a star, measured using the diameter of the Earth's orbit (≈ 3.0 × 10<sup>11</sup> m) as the basis, is 4.0 × 10<sup>−6</sup> rad. (a) Find the star's distance in metres, light years and parsec. (b) Its angular diameter is measured as 4.0 × 10<sup>−8</sup> rad. Find its actual diameter as a multiple of the Sun's, 1.39 × 10<sup>9</sup> m.",
          "steps": [
            "(a) Parallax first, because the size question cannot be answered without the distance: <i>D</i> = <i>b</i>/θ = (3.0 × 10<sup>11</sup>)/(4.0 × 10<sup>−6</sup>) = 7.5 × 10<sup>16</sup> m. Both inputs carry two significant figures, so the answer does.",
            "Convert. In light years: (7.5 × 10<sup>16</sup>)/(9.46 × 10<sup>15</sup>) = 7.9 ly. In parsec: (7.5 × 10<sup>16</sup>)/(3.08 × 10<sup>16</sup>) = 2.4 pc. Sanity check on the ordering: the parsec number is smaller than the light-year number, as it must be.",
            "(b) Now the angular size, using the distance we just found: <i>d</i> = α<i>D</i> = (4.0 × 10<sup>−8</sup>)(7.5 × 10<sup>16</sup>) = 3.0 × 10<sup>9</sup> m.",
            "As a multiple of the Sun: (3.0 × 10<sup>9</sup>)/(1.39 × 10<sup>9</sup>) = 2.2. What makes this Advanced is the CHAIN: parallax gives the distance, and only with the distance in hand does an angle become a size. That is exactly the two-step reasoning a real astronomer uses, with three unit systems to keep straight along the way."
          ],
          "ans": "(a) 7.5 × 10<sup>16</sup> m ≈ 7.9 ly ≈ 2.4 pc · (b) about 2.2 solar diameters"
        },
        {
          "t": "mcq",
          "q": "The parallax method is best suited to measuring:",
          "opts": [
            { "label": "the thickness of a sheet of paper", "nudge": "That is a small-length problem for a screw gauge. Parallax needs a line-of-sight shift against a distant background, which a sheet of paper cannot provide." },
            { "label": "the distance of a nearby star", "nudge": null },
            { "label": "the size of a molecule", "nudge": "That is the monolayer method, t = V/A. Nothing here involves viewing an object from two places." },
            { "label": "the mass of an atom", "nudge": "That is a mass measurement, done with a spectrograph through m = qBr/v. Parallax measures distances only." }
          ],
          "correct": 1,
          "solution": "Parallax exploits the apparent shift of a relatively nearby object against a far background, which is exactly the situation for the Moon, the planets and nearby stars. The basis for a star is the Earth's orbital diameter, 2 AU."
        },
        {
          "t": "mcq",
          "q": "A radar signal takes 2.6 s to return after reflecting off the Moon. The Earth to Moon distance is closest to:",
          "opts": [
            { "label": "7.8 × 10<sup>8</sup> m", "nudge": "This is ct, the full round trip, with the factor of two forgotten. It is the single most common error in the whole subtopic and the answer is exactly double the truth." },
            { "label": "3.9 × 10<sup>8</sup> m", "nudge": null },
            { "label": "1.95 × 10<sup>8</sup> m", "nudge": "This halves twice, dividing by four instead of two. Halve the TIME once, then multiply by the speed." },
            { "label": "3.9 × 10<sup>5</sup> m", "nudge": "The right mantissa with the wrong power of ten, which is a kilometre-to-metre slip. 3.9 × 10<sup>5</sup> m is 390 km, roughly the height of a space station, not the Moon." }
          ],
          "correct": 1,
          "solution": "D = ct/2 = (3 × 10⁸)(2.6)/2 = 3.9 × 10⁸ m, which agrees with the accepted 3.84 × 10⁸ m. The pulse covers the distance twice, so halve the round-trip time before you multiply."
        },
        {
          "t": "mcq",
          "q": "Which orders these units correctly from smallest to largest?",
          "opts": [
            { "label": "fermi, angstrom, AU, light year, parsec", "nudge": null },
            { "label": "angstrom, fermi, AU, parsec, light year", "nudge": "Two errors at once: the fermi (10<sup>−15</sup> m) is SMALLER than the angstrom (10<sup>−10</sup> m), and the parsec is larger than the light year, not smaller." },
            { "label": "fermi, angstrom, AU, parsec, light year", "nudge": "The small end is right and the large end is swapped. 1 pc ≈ 3.26 ly, so the parsec comes last." },
            { "label": "angstrom, fermi, light year, AU, parsec", "nudge": "The fermi and the angstrom are the wrong way round, and so are the AU and the light year. Nearly every pair here is inverted." }
          ],
          "correct": 0,
          "solution": "10⁻¹⁵ < 10⁻¹⁰ < 1.5 × 10¹¹ < 9.46 × 10¹⁵ < 3.08 × 10¹⁶ m. The two classic traps are putting the fermi after the angstrom and swapping the light year with the parsec."
        },
        {
          "t": "mcq",
          "q": "The experimental equality of inertial mass and gravitational mass is the basis of:",
          "opts": [
            { "label": "Newton's first law", "nudge": "The first law is about a body's state of motion with no net force. It says nothing about the two ways of measuring mass being numerically equal." },
            { "label": "the principle of homogeneity", "nudge": "That is Topic 02's rule about every term in an equation sharing one dimensional formula. Unrelated, and offered here because both sound like principles about equality." },
            { "label": "the equivalence principle", "nudge": null },
            { "label": "the conservation of momentum", "nudge": "Conservation of momentum follows from Newton's third law and has nothing to say about how mass is measured." }
          ],
          "correct": 2,
          "solution": "Inertial mass is measured by resistance to acceleration, F = ma; gravitational mass is measured by the gravitational force a body feels. Experiment finds them identical, and that identity is what Einstein built the equivalence principle on."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] The Sun's angular diameter seen from Earth is 1920″. Taking the Earth to Sun distance as 1.496 × 10<sup>11</sup> m, estimate the Sun's diameter. Take 1″ = 4.85 × 10<sup>−6</sup> rad.", "a": "α = 1920 × 4.85 × 10<sup>−6</sup> = 9.31 × 10<sup>−3</sup> rad. <i>d</i> = α<i>D</i> = (9.31 × 10<sup>−3</sup>)(1.496 × 10<sup>11</sup>) = 1.39 × 10<sup>9</sup> m, to three significant figures, which is what the inputs allow." },
            { "q": "[NEET] Arrange in increasing order of length: 1 AU, 1 light year, 1 parsec, 1 angstrom.", "a": "1 Å < 1 AU < 1 ly < 1 pc, that is 10<sup>−10</sup> < 1.5 × 10<sup>11</sup> < 9.46 × 10<sup>15</sup> < 3.08 × 10<sup>16</sup> m." },
            { "q": "[JEE Main] A radar pulse sent towards a planet returns after 7.0 minutes. Taking <i>c</i> = 3.0 × 10<sup>8</sup> m/s, find the planet's distance from Earth.", "a": "<i>t</i> = 7.0 × 60 = 420 s. <i>D</i> = <i>ct</i>/2 = (3.0 × 10<sup>8</sup>)(420)/2 = 6.3 × 10<sup>10</sup> m. Halve the time, then multiply." },
            { "q": "[JEE Main] In a mass spectrograph a singly ionised atom (<i>q</i> = 1.6 × 10<sup>−19</sup> C) moving at <i>v</i> = 2.0 × 10<sup>5</sup> m/s bends on a circle of radius <i>r</i> = 0.10 m in a field <i>B</i> = 0.50 T. Find its mass, using <i>m</i> = <i>qBr</i>/<i>v</i>, and express it in atomic mass units.", "a": "<i>m</i> = (1.6 × 10<sup>−19</sup>)(0.50)(0.10)/(2.0 × 10<sup>5</sup>) = 4.0 × 10<sup>−26</sup> kg. Dividing by 1.66 × 10<sup>−27</sup> kg per u gives about 24 u, which is magnesium." },
            { "q": "[JEE Advanced] A star has a parallax of 0.76″ measured with 1 AU as the basis, the standard stellar parallax. Find its distance in parsec, light years and metres.", "a": "By the parsec's definition, <i>D</i> = 1/<i>p</i> = 1/0.76 = 1.32 pc, carrying a guard digit. In light years, 1.32 × 3.26 = 4.3 ly. In metres, 1.32 × 3.08 × 10<sup>16</sup> = 4.1 × 10<sup>16</sup> m. Round once, at the end, to the two significant figures 0.76 allows. This is roughly the distance to Alpha Centauri, the nearest star system." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Forgetting the factor of two in an echo.</b> The pulse travels to the target AND back, so <i>D</i> = <i>vt</i>/2, never <i>vt</i>. Halve the round-trip time before you multiply, and remember that the wrong answer is exactly double, which is what makes it such an inviting distractor.",
            "<b>Mixing up parsec, light year and AU.</b> From smallest to largest: AU < ly < pc, with 1 pc ≈ 3.26 ly. Since the parsec is the biggest unit, a distance has the FEWEST parsecs, so converting light years to parsecs means dividing.",
            "<b>Using degrees instead of radians.</b> Both <i>D</i> = <i>b</i>/θ and <i>d</i> = α<i>D</i> are small-angle geometry and demand radians. Convert first: 1° = π/180 rad, 1″ = 4.85 × 10<sup>−6</sup> rad. Forgetting this is worth a factor of 57 and no examiner will award part marks for it.",
            "<b>Treating the molecular-size estimate as exact.</b> The monolayer method assumes a perfect gap-free film one molecule thick, so it gives an order of magnitude, about 10<sup>−9</sup> m, and nothing finer. Report it as an estimate, and report it to the significant figures the drop volume actually allowed.",
            "<b>Putting the order-of-magnitude boundary in the wrong place.</b> The Earth's radius is 6.37 × 10<sup>6</sup> m, and because 6.37 exceeds √10 ≈ 3.16 its order of magnitude is 10<sup>7</sup> m, not 10<sup>6</sup> m. The same trap catches the Earth's mass, 5.97 × 10<sup>24</sup> kg, whose order is 10<sup>25</sup> kg."
          ]
        },
        {
          "t": "protip",
          "html": "for any indirect-length question, name the method from the clue word before you write anything. \"subtends an angle\" means parallax or angular size, so D = b/θ or d = αD. \"the signal returns in time t\" means D = vt/2. \"film\", \"drop\" or \"monolayer\" means t = V/A. then convert every angle to radians before substituting. and finish with the habit that saves more marks than any formula: glance at the order of magnitude against the ladder. the moon is around 10⁸ m away, a nearby star around 10¹⁶ m, a molecule around 10⁻⁹ m, an atom around 10⁻¹⁰ m. if your answer is off by powers of ten you have dropped a factor or mishandled a unit, and you will know it in one second. the same estimation habit answers whole questions on its own: the earth's mass falls out of g = GM/R², giving M = gR²/G = 9.8 × (6.37 × 10⁶)²/(6.67 × 10⁻¹¹) = 5.96 × 10²⁴ kg, and a copper atom's radius falls out of one density and one molar mass, giving about 1.4 × 10⁻¹⁰ m. nobody weighed the earth. a falling apple, a radius and a constant did it."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>D</i> = <i>b</i>/θ, with θ in radians", "note": "basis 2 AU for a star; bigger parallax means closer object" },
            { "f": "<i>d</i> = α<i>D</i>, with α in radians", "note": "find <i>D</i> first, usually by parallax, then the size" },
            { "f": "<i>D</i> = <i>vt</i>/2", "note": "always halve the round trip: RADAR, SONAR, LIDAR alike" },
            { "f": "<i>t</i> = <i>V</i>/<i>A</i>, with <i>V</i> = (drop volume) × (concentration)", "note": "the monolayer estimate, about 10<sup>−9</sup> m" },
            { "f": "1 AU ≈ 1.496 × 10<sup>11</sup> m · 1 ly ≈ 9.46 × 10<sup>15</sup> m · 1 pc ≈ 3.08 × 10<sup>16</sup> m ≈ 3.26 ly", "note": "1 Å = 10<sup>−10</sup> m · 1 fermi = 10<sup>−15</sup> m · 1 u ≈ 1.66 × 10<sup>−27</sup> kg" },
            { "f": "ranges: length 10<sup>−15</sup> to 10<sup>26</sup> m · mass 10<sup>−30</sup> to 10<sup>55</sup> kg · time 10<sup>−22</sup> to 10<sup>17</sup> s", "note": "SI second = 9 192 631 770 caesium oscillations, good to 1 part in 10<sup>13</sup>" }
          ],
          "aids": [
            "\"two eyes, one distance\": parallax needs a basis and an angle",
            "\"there and back, so halve the track\"",
            "\"AU, then ly, then pc\": parsec is biggest, so fewest parsecs",
            "\"one molecule thick\": the film's thickness is the molecule's size",
            "\"radians always\", before every substitution"
          ]
        }
      ]
    }
  ]
};

export default phy11UnitsMeasurements;
