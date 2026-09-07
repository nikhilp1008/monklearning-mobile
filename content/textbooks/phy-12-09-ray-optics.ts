/**
 * Chapter 9 · Ray Optics and Optical Instruments. Physics, Class 12.
 *
 * Restructured from pages 552 to 628 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-08-electromagnetic-waves.ts.
 *
 * SIX TOPICS FROM SIX SOURCE SUBTOPICS, ONE FOR ONE. The source's own split is
 * already the right one and it is exactly the validator's ceiling: 9.1
 * Reflection and Spherical Mirrors, 9.2 Refraction and Total Internal
 * Reflection, 9.3 Refraction at Spherical Surfaces and the Lens-Maker's
 * Formula, 9.4 Thin Lens, Power and Combinations, 9.5 Prism and Dispersion,
 * 9.6 Optical Instruments. Nothing was merged and nothing was split.
 *
 * CUT: HOW 77 PAGES BECAME 148 BLOCKS. The organising idea is the one the
 * brief names: ONE sign convention and TWO formulas, applied to a growing
 * catalogue of surfaces. So the convention is declared once, in Topic 01's
 * `def`, in full, and every later topic spends its prose on WHICH case a
 * configuration is rather than restating the rules. What that bought:
 *   - The catalogue rides in `defgrid` and `formula`, not in paragraphs. The
 *     concave-mirror image table, the convex-lens image table, the radius-sign
 *     table, the four standard mirror rays, the three lens rays, the six
 *     instrument formulas and the whole TIR family are tables. Roughly twelve
 *     source pages of prose collapse into nine grids.
 *   - The `optics` figure kind SOLVES the image position, so four pages of
 *     "object beyond C gives ... at C gives ..." become two figures with nine
 *     chips between them and no prose at all. This is the single biggest
 *     saving in the chapter.
 *   - Every subtopic's four worked examples are kept (24 of 24): they are the
 *     source's best material and they are what an exam actually asks. Every
 *     subtopic's five practice items are kept too, except where the source's
 *     own question is inconsistent (see CORRECTIONS 1).
 *   - The Round 2 Addendum (pages 609 to 628, twenty pages, Addenda A to F) is
 *     NOT a topic, per the brief. It reaches a student in four places, each one
 *     line long: Topic 03's protip names the two-surface method and the
 *     separation trap that Addendum A gets wrong; Topic 04's mistakes item on
 *     the silvered lens names the power register Addendum B mixes up; Topic
 *     05's protip names chromatic aberration as the lens analogue of
 *     dispersion (Addendum C); Topic 06's snapshot aid names resolving power
 *     as the thing magnification does not buy (Addendum F). No addendum NUMBER
 *     is carried anywhere below, which matters, because twelve of its answers
 *     and claims are wrong (CORRECTIONS 5 to 16).
 *   - Dropped entirely, and named so the next author knows: the mirage and
 *     Snell's-window paragraphs survive as one sentence each rather than three;
 *     the rainbow and blue-sky passage (page 591) is one `p`, not a section,
 *     because scattering is Chapter 10's; the terrestrial telescope keeps one
 *     line and loses its tube-length formula; the Galilean telescope, resolving
 *     power and the achromatic doublet are addendum-only and stay there.
 *
 * ERRATA REVIEWED (source pages 924 to 925, read in full, not assumed). The
 * Class 12 errata has exactly two entries and NEITHER TOUCHES CHAPTER 9:
 * Chapter 7 (Alternating Current) page 14, a Practice 5 whose stated drive
 * frequency IS the resonant frequency of its own components; and Chapter 10
 * (Wave Optics) page 33, thin-film interference with the dark and bright
 * conditions swapped in one sentence. Chapter 9 is not named, and neither
 * entry changes a number, a formula or a claim used below.
 *
 * THE SIGN CONVENTION, AND ONE DELIBERATE DEPARTURE FROM THE BRIEF. The brief
 * asks for the Cartesian convention (distances from the pole, along the
 * incident light positive) and then says to state that a real image has a
 * POSITIVE image distance. Those two sentences are not compatible for a
 * mirror, and the chapter is written the honest way rather than the asked way:
 *   - Under the New Cartesian convention the source declares (page 556) and
 *     NCERT uses, light runs left to right, so a real object always has u < 0,
 *     a concave mirror has f < 0 and R < 0, and a convex mirror has f > 0.
 *   - A real image forms where the light ACTUALLY ARRIVES after the element.
 *     For a lens or a refracting surface the light carries on forwards, so a
 *     real image has v > 0, exactly as the brief says. For a MIRROR the light
 *     is sent back the way it came, so a real image sits in front of the
 *     mirror and has v < 0. Saying "real means positive v" would make every
 *     mirror answer in this chapter wrong, including all four of the source's
 *     own worked examples.
 *   So Topic 01's `def` states the convention once, and the unifying sentence
 *   that replaces the brief's is stated in Topic 01, repeated in Topic 04's
 *   `mistakes` and checked against every one of the 24 worked examples, 27
 *   practice answers and 24 MCQ keys below: A REAL IMAGE LIES ON THE SIDE THE
 *   LIGHT ACTUALLY TRAVELS TO, which is v < 0 for a mirror and v > 0 for a
 *   lens. The renderer agrees: components/textbook/figures.tsx dashes a
 *   mirror image when v > 0 and a lens image when v < 0, which is the same
 *   statement in code (see OPTICS below, where its doc comment does not).
 *
 * CORRECTIONS BEYOND THE ERRATA. Every worked example, practice answer and MCQ
 * key on pages 552 to 628 was recomputed independently. The MAIN BODY (pages
 * 552 to 608) is in excellent shape: 24 worked examples, 30 practice items and
 * 24 MCQ keys, and only one substantive fault plus two extraction artefacts.
 * The ROUND 2 ADDENDUM (pages 609 to 628) is not, exactly as the brief
 * predicted: eleven wrong answers in twenty pages, several of them wrong three
 * times over in one problem, and four leaked draft sentences still plated.
 *
 *   1. MAIN BODY, Subtopic 05, Practice 3 (page 597): THE QUESTION IS
 *      OVER-DETERMINED AND CONTRADICTS ITSELF. Printed: "A thin prism of angle
 *      6 degrees gives a deviation of 3 degrees. A second thin prism gives a
 *      deviation of 4 degrees for the same colour. If the two are combined to
 *      produce a direct-vision (zero net deviation) arrangement, find the
 *      refracting angle of the second prism (its material has n = 1.6)."
 *      Working: the first prism has n1 = 1 + 3/6 = 1.5. Zero net deviation
 *      needs the second prism to deviate by 3 degrees, not 4, so
 *      A2 = 3/(1.6 - 1) = 5 degrees. But the question states the second prism
 *      deviates by 4 degrees, which forces A2 = 4/0.6 = 6.67 degrees, and then
 *      the net deviation is 1 degree, not zero. The two data cannot both hold.
 *      The printed answer computes A2 = 5 degrees and silently ignores its own
 *      "4 degrees" datum. CORRECTED BY DELETING THE CONTRADICTORY DATUM:
 *      Topic 05's practice item 3 below drops the "4 degrees" and asks the
 *      question the answer actually answers, so A2 = 5 degrees is derivable
 *      from the stated data alone.
 *   2. MAIN BODY, extraction artefact, not an authoring error. Subtopic 02,
 *      Practice 4 (page 572) prints its answer as "d = ... cm" with the number
 *      missing; the value 2.05 is stranded eleven lines further down the page,
 *      after the MCQ answers. Same for Subtopic 03, Practice 1 (page 579),
 *      whose answer reads "v = " with the value stranded as
 *      "infinity (image at infinity)" on the following page. Both are page-float
 *      damage in the extractor, not missing content. Recomputed anyway and both
 *      stranded values are RIGHT: lateral shift 2.05 cm (t = 4 cm, n = 1.5,
 *      i = 60 degrees gives r = 35.3 degrees and d = 4 sin(24.7)/cos(35.3) =
 *      2.05 cm), and v is genuinely infinite, because the object at 30 cm sits
 *      exactly at that surface's first focal point n1 R/(n2 - n1) = 15/0.5 =
 *      30 cm. Topic 03's practice item 1 keeps that question because "the
 *      answer is infinity" is a better lesson than any finite number.
 *   3. MAIN BODY, leaked draft sentence, Subtopic 04, Example 4 (page 587):
 *      "Wait, here the curved face is silvered, so light enters the flat face
 *      first; either ordering gives the same magnitude." A pipeline note left
 *      in the plated text. The claim is true and the arithmetic that follows is
 *      right; only the sentence is debris. Topic 04's Example 4 below states
 *      the point cleanly instead.
 *   4. MAIN BODY, Subtopic 03, Example 3 (page 578), found on the final
 *      numerical sweep. The lens-in-water ratio is printed as
 *      "0.5/(1.5/1.33 - 1) = 0.5/(1.125 - 1) = 0.5/0.125 = 4", giving
 *      f_water = 80 cm. But 1.5/1.33 = 1.1278, not 1.125; the 1.125 is the
 *      value for water taken as exactly 4/3. Working with the question's own
 *      stated 1.33: the denominator is 0.1278, the ratio is 3.912, and
 *      f_water = 78.2 cm. CORRECT ANSWER 78 cm to two figures, and Topic 03's
 *      Example 3 below carries that with the 4/3 alternative named in one
 *      clause, because the two conventions are three per cent apart and a
 *      student who used 4/3 should not think they are wrong.
 *   5. ADDENDUM A, Example A.1 (page 610): the two surfaces of a sphere are a
 *      DIAMETER apart, not a radius. Printed: "The intermediate image is 54 cm
 *      inside the glass from surface 1, i.e. 54 - 6 = 48 cm from surface 2",
 *      giving a final image at 96/11 = 8.73 cm. Working: R = 6 cm, so the
 *      surfaces are 2R = 12 cm apart and u2 = +(54 - 12) = +42 cm. Then
 *      1/v2 = 1/12 + 1.5/42 = 1/12 + 1/28 = 10/84, so v2 = 8.4 cm. CORRECT
 *      ANSWER 8.4 cm beyond the far surface.
 *   6. ADDENDUM A, Example A.2 (page 611): the glass thickness is subtracted
 *      TWICE. Its own step 2 gets v2 = -33.3 cm from the outer surface, and its
 *      conclusion then prints "40 - 11.67 = 28.3 cm, which agrees with
 *      33.3 - 5 = 28.3 cm". It does not agree, it contradicts. Working: the
 *      real depth below the OUTER surface is 40 + 5 = 45 cm and the total
 *      shift is 40(1 - 3/4) + 5(1 - 2/3) = 11.67 cm, so the apparent depth is
 *      33.3 cm; equivalently 40/(4/3) + 5/1.5 = 30 + 3.33 = 33.3 cm. CORRECT
 *      ANSWER 33.3 cm.
 *   7. ADDENDUM A, Practice 2 (page 613): wrong in three consecutive steps.
 *      Printed "1.5/v1 + 1/9 = 0.5/3 gives v1 = 9 cm"; the left side is
 *      1/6 - 1/9 = 1/18, so v1 = 27 cm. Printed "distance from surface 2:
 *      6 - 3 = 3 cm"; the sphere's diameter is 6 cm and the intermediate image
 *      is at 27 cm, so u2 = +21 cm. Printed final "v2 = -6 cm"; the correct
 *      second surface gives 1/v2 = 1/6 + 1.5/21 = 5/21, so v2 = 4.2 cm.
 *      CORRECT ANSWER a real image 4.2 cm beyond the far surface, not a virtual
 *      one inside the ball.
 *   8. ADDENDUM A, Practice 3 (page 613): the question omits the numerical
 *      radius and the plated answer says so out loud ("Without R, cannot solve
 *      numerically, this needs the radius value. Assume R = 2 cm"), which is a
 *      leaked draft sentence. Even on its own assumption it then errs: with
 *      v1 = 18 cm and a rod 10 cm long, the intermediate image falls 8 cm
 *      BEYOND the flat end, so u2 = +8 cm (a virtual object), not the printed
 *      -(18 + 10) = -28 cm. CORRECT ANSWER on that assumption: 1/v2 = 1.5/8,
 *      v2 = 5.3 cm beyond the flat face, real.
 *   9. ADDENDUM B, Example B.1 (page 614): CONTRADICTS THE MAIN BODY ON THE
 *      SAME PHYSICAL SETUP. Subtopic 04's Example 4 (page 587) and this one are
 *      the identical silvered plano-convex lens, n = 1.5, R = 20 cm. The main
 *      body gets P_eq = 2(2.5) + 10 = 15 D, f_eq = 6.67 cm. The addendum feeds
 *      the mirror's CARTESIAN sign into the power sum, P_m = -10 D, and gets
 *      P_eq = -5 D, f_eq = 20 cm. The equivalent-mirror formula runs on the
 *      converging-is-positive register throughout (that is why the lens power
 *      is doubled rather than signed), so the main body is right and the
 *      addendum is wrong. CORRECT ANSWER f_eq = 6.67 cm. Topic 04's `mistakes`
 *      item names this register clash, because it is a real trap and not just
 *      a printing fault.
 *  10. ADDENDUM B, Practice 2 (page 616): first step wrong, so the whole chain
 *      is. Printed "u = -15, v = +30 cm". Working: 1/v = 1/20 - 1/15 = -1/60,
 *      so v = -60 cm. An object 15 cm from a 20 cm converging lens is INSIDE
 *      the focus and can only give a virtual image, which is the sanity check
 *      the printed answer walks straight past.
 *  11. ADDENDUM B, Practice 4 (page 616): printed "the lens forms an image at
 *      v = +20 cm. This image is 10 cm beyond the mirror". The mirror is 30 cm
 *      beyond the lens, so the image is 10 cm IN FRONT of it. Correct chain:
 *      the plane mirror images it 10 cm behind itself, that is 40 cm from the
 *      lens on the far side, and the return pass gives 1/v = 1/10 - 1/40 =
 *      3/40, v = 13.3 cm. CORRECT ANSWER 13.3 cm on the object side, real.
 *  12. ADDENDUM B, Practice 5 (page 616): printed "1/v = -1/20 - 1/30 = -5/60,
 *      v = -12 cm" for a concave mirror with f = -20 cm and u = -30 cm. The
 *      mirror formula gives 1/v = 1/f - 1/u = -1/20 + 1/30 = -1/60, so
 *      v = -60 cm. That image lands 10 cm past the lens 50 cm away, a virtual
 *      object at u = +10 cm, and 1/v = 1/10 + 1/10 gives v = +5 cm. CORRECT
 *      ANSWER 5 cm beyond the lens, not the printed 22.5 cm.
 *  13. ADDENDUM C, Method (page 617): the two colours are the wrong way round.
 *      Printed "f_r = f0/(1 + w/2), f_v = f0/(1 - w/2)" and "the longitudinal
 *      chromatic aberration is f_v - f_r". Violet has the LARGER index, hence
 *      the SHORTER focal length, so f_v < f_r and the aberration is f_r - f_v.
 *      The addendum's own Example C.2 computes f_r - f_v = 20.83 - 19.23 =
 *      1.6 cm and says in words that violet focuses nearer, so the Method
 *      section contradicts its own example one page later.
 *  14. ADDENDUM E, Example E.2 (page 624) and Practice 2 (page 625): the sign
 *      of the object's velocity is taken backwards, and E.2 then contradicts
 *      itself in consecutive sentences ("the positive sign means the image
 *      moves away from the mirror", then "Answer: the image approaches the
 *      mirror"). An object approaching the mirror has u INCREASING towards
 *      zero, so u-dot is POSITIVE, and v-dot = -m squared times u-dot is
 *      negative. E.2 (convex, f = +20 cm, u = -40 cm, m = +1/3): v = +13.3 cm
 *      and v-dot = -(1/9)(5) = -0.56 cm/s, so the virtual image moves TOWARDS
 *      the mirror at 0.56 cm/s. Practice 2 (concave, f = -10 cm, u = -30 cm,
 *      m = -0.5): v = -15 cm and v-dot = -(0.25)(3) = -0.75 cm/s, so v goes
 *      from -15 to -15.75 and the real image RECEDES from the mirror at
 *      0.75 cm/s. The printed answer says it approaches, which also fails the
 *      qualitative check the main body's own Subtopic 01 Example 3 makes: an
 *      object outside C moving in pushes the image outward.
 *  15. ADDENDUM E, Example E.3 (page 625): a plane mirror receding from a fixed
 *      object at 2 m/s. Printed image position "x_i = -x_m", which only holds
 *      for a mirror at the origin, giving an image speed of 2 m/s. The image of
 *      a point at the origin in a mirror at x_m is at 2 x_m, so the image speed
 *      is TWICE the mirror's. CORRECT ANSWER 4 m/s, and the standard statement
 *      of the result ("the image moves at twice the mirror's speed") is printed
 *      in the same example's own opening line.
 *  16. ADDENDUM F, Example F.3 (page 627): tube length defined the opposite way
 *      from the main body. The addendum takes L = v_o - f_e, so v_o = L + f_e =
 *      25 cm; Subtopic 06's Key Formulas (page 601) and its own Practice 3 take
 *      L = v_o + f_e, so v_o = L - f_e = 15 cm. Same instrument, same numbers,
 *      two answers (M = 120 against M = 70). The main body's convention is the
 *      standard one and is what Topic 06 below uses.
 *   Editorial, recorded but not carried: Addendum B's Example B.3 sets a
 *   problem and then declines to solve it ("this problem requires tracing
 *   specific rays ... the algebraic solution involves infinite series"), and
 *   Addendum C's Example C.3 designs a direct-vision spectroscope, gets
 *   w_net = -0.30, writes "not useful", changes its own data mid-answer and
 *   stops. Both are drafts, not worked examples.
 *
 * SOURCE DAMAGE. Pages 552 to 628 have their own dialect, measured rather than
 * assumed. Every passage below was re-authored from context, never transcribed.
 *   - MATHEMATICAL ALPHANUMERIC (U+1D400 to U+1D7FF), 3,492 instances in 77
 *     pages, and it is the chapter's entire symbol vocabulary: math-italic
 *     f (442), n (434), v (280), r (202), A, P, u, R, m, e, o, C, i, M, F, D,
 *     d, L, c, y, t, x, w, g, T, l, z, plus Greek delta (68), theta (66),
 *     omega (64), lambda (23), alpha (22), beta (13), pi (12). These have no
 *     fallback on the device and draw as blank boxes, so every symbol below is
 *     retyped as an ordinary letter inside <i> tags and every Greek letter as
 *     its plain Unicode form.
 *   - THE ESCAPE-TOKEN FAMILY, PARTIALLY, and as LITERAL backslash-n-letter
 *     text rather than as newlines: "\n7" for the minus sign, 101 instances;
 *     "\nK" for the degree sign, 59; "\nN" for the multiplication sign, 12;
 *     "\nA" for a centred dot, 2. Checked for and ABSENT: "\nC" (colon) and
 *     "\nH" (ellipsis), 0 of each. The range's other minus signs extract
 *     correctly as U+2212 (527 of them) and most multiplication signs as
 *     U+00D7 (75), so this is a localised font fallback, not a whole-range
 *     substitution. Also present and rarer: "\tk", "\tl", "\tU", "\tV", "\t?",
 *     "\t@" for the four sizes of bracket around a fraction, which is why the
 *     prism formula and the lens-in-liquid ratio extract with stray letters
 *     inside them.
 *   - THE fi LIGATURE IS DELETED, NOT SUBSTITUTED. "Definitions" arrives as
 *     "Denitions" in 4 of its 15 occurrences (the section headings 9.2.2,
 *     9.3.2, 9.5.2, 9.6.2), and "reflecting" as "reecting" once on page 604.
 *     No U+FB01 or U+FB00 survives anywhere; the glyph is simply dropped.
 *   - SUPERSCRIPTS AND SUBSCRIPTS LAND ON THEIR OWN LINES, pervasively. Every
 *     prime on an image height, every R1 and R2, every f_o and f_e, every
 *     dimensional formula. 387 lines in the range are the single character
 *     "1" and 306 are "2". Recomputing every numerical answer independently
 *     was the check that these were rebuilt correctly.
 *   - U+2218 RING OPERATOR FOR THE DEGREE SIGN, 60 instances, 51 of them alone
 *     on their own line after a number. Every angle below uses U+00B0.
 *   - U+20D7 COMBINING ARROW, 7 instances, all in Addendum E's velocity
 *     vectors, and it lands BEFORE its letter. Nothing below carries one.
 *   - INTER-WORD SPACES VANISH AT TIGHT KERNING, throughout: "the
 *     thaliis smooth", "a24 degrees critical angle", "Real, invertedDiminished"
 *     (the whole image table extracts with no space between any two columns),
 *     "9.1.3 CBSE Board Derivations" joined to the end of the previous
 *     sentence, and the running head "Chapter 9" fused to the first word of
 *     every page.
 *   - NOT PRESENT IN THIS RANGE, checked for by hand: octal escapes of the
 *     \050 kind (0), Wingdings ticks arriving as bare digits (0), leaked LaTeX
 *     delimiters (0), and the ASCII heading shifts of +29, -29 and +46 that
 *     other ranges logged (0; every heading from 9.1.1 to 9.6.8 reads
 *     correctly).
 *   - NO SILENTLY EMPTY PAGES. All 77 pages were measured for extracted length
 *     before any of them was read. The shortest are 596 (207 characters), 568
 *     (241) and 557 (264), and every page under 350 characters is one of the
 *     fourteen "CHAPTER 9 FIGURES" pages, which carry one or two figure
 *     captions and nothing else. No run of blank pages exists, so no pdftoppm
 *     render was needed.
 *
 * DIMENSIONS. Every formula printed below, reduced in M L T. Optics is
 * geometry, so almost everything is either a length or a pure number, and that
 * is exactly why dimensions are a weak check here and PLAUSIBILITY (below) is
 * the strong one. Thirty-one formulas checked, thirty-one consistent.
 *   T1  f = R/2: [L] = [L]. OK.
 *       1/v + 1/u = 1/f: [L-1] on all three terms. OK, and this is the one
 *         structural check that catches the commonest wrong memory, v + u = f,
 *         which is [L] = [L] and therefore passes dimensions while being
 *         nonsense. Dimensions cannot save you here; the reciprocals must be
 *         remembered.
 *       m = h'/h = -v/u = f/(f - u) = (f - v)/f: [L]/[L] = [1] in all four
 *         forms. OK. A stray f in a numerator, m = f v/u, would give [L] and
 *         is the fastest way to spot the slip.
 *       m_L = -m squared and m_A = m squared: [1]. OK.
 *       delta = 180 degrees - 2i: [1], and both terms must be angles, which is
 *         why 180 - 2i is legal and 180 - 2 sin i is not.
 *       N = 360 degrees / theta: [1]. OK.
 *       x1 x2 = f squared (Newton): [L2] = [L2]. OK.
 *       P = 1/f: [L-1], the dioptre, which is a reciprocal METRE and nothing
 *         else. This is the chapter's one live unit trap and it gets its own
 *         `mistakes` item in Topic 04.
 *   T2  n = c/v: [L T-1]/[L T-1] = [1]. OK.
 *       n1 sin i = n2 sin r: [1] both sides. OK.
 *       lambda = lambda0/n: [L]. OK, and n lambda would also be [L], which is
 *         why the direction of the change has to come from physics (the wave
 *         slows, so it shortens) and not from dimensions.
 *       d' = d/n and shift = d(1 - 1/n) and normal shift = t(1 - 1/n): [L] in
 *         each. OK, and (1 - 1/n) is a pure number strictly less than 1, so
 *         the shift can never exceed the thickness. That bound is a real
 *         check: a slab cannot lift a mark further than its own depth.
 *       lateral shift = t sin(i - r)/cos r: [L] times [1] = [L]. OK.
 *       sin C = 1/n: [1]. OK, and it forces n > 1 for a critical angle to
 *         exist at all, which is the whole content of the denser-to-rarer rule.
 *       NA = sqrt(n1 squared - n2 squared): [1]. OK.
 *       r = h tan C = h/sqrt(n squared - 1): [L]. OK.
 *       optical path = n times geometric path: [L]. OK.
 *   T3  n2/v - n1/u = (n2 - n1)/R: [L-1] on every term, since the indices are
 *         pure numbers. OK. The mirror-formula shape n2/v + n1/u would be
 *         equally consistent, which is why Topic 03's MCQ trap has to be
 *         killed by the derivation and not by inspection.
 *       m = n1 v/(n2 u): [1]. OK.
 *       1/f = (n - 1)(1/R1 - 1/R2): [1] times [L-1] = [L-1]. OK, and the
 *         (n - 1) MUST be a difference of two pure numbers: writing n R
 *         instead gives [L], not [L-1].
 *   T4  1/v - 1/u = 1/f: [L-1]. OK.
 *       m = v/u: [1]. OK.
 *       1/F = 1/f1 + 1/f2: [L-1]. OK.
 *       P = P1 + P2 - d P1 P2: [L-1] + [L][L-1][L-1] = [L-1]. OK, and this is
 *         the chapter's one genuinely informative reduction: the separation
 *         term needs BOTH powers to be dimensionally legal, so d P1 or d/P1
 *         are both immediately dead.
 *       P_eq = 2 P_lens + P_mirror: [L-1]. OK.
 *       f = (D squared - d squared)/(4D): [L2]/[L] = [L]. OK.
 *   T5  r1 + r2 = A and delta = i + e - A: [1]. OK.
 *       n = sin((A + delta_m)/2)/sin(A/2): [1]. OK.
 *       delta = (n - 1)A: [1] times [angle] = [angle]. OK, and n A would also
 *         be an angle, which is why the (n - 1) is a physics fact and not a
 *         dimensional one; with n around 1.5 the two differ by a factor of 3.
 *       A_max = 2C: [1]. OK.
 *       theta = (n_v - n_r)A: [angle]. OK.
 *       omega = (n_v - n_r)/(n_y - 1): [1]. OK, and BOTH the numerator and the
 *         denominator are differences of pure numbers, which is the structural
 *         reason omega cannot depend on A.
 *   T6  M = beta/alpha: [1]. OK.
 *       M = D/f and M = 1 + D/f: [1]. OK, and the second only makes sense
 *         because D/f is dimensionless: you cannot add 1 to a length.
 *       M = (v_o/|u_o|)(D/f_e) and M = (L/f_o)(D/f_e): [1]. OK.
 *       M = f_o/f_e = P_e/P_o: [1]. OK, and note the INVERSION: powers divide
 *         the other way up from focal lengths, which is Topic 06's Example 2.
 *       L = f_o + f_e: [L]. OK.
 *
 * PLAUSIBILITY, checked on every number below.
 *   CRITICAL ANGLES, computed rather than quoted, and used as the chapter's
 *   standing sanity check: water at n = 1.33 gives C = arcsin(0.752) = 48.8
 *   degrees, and the source's own 48.6 degrees is the same number at n = 4/3.
 *   Crown glass at n = 1.5 gives C = arcsin(0.667) = 41.8 degrees. Diamond at
 *   n = 2.42 gives 24.4 degrees. All three appear below and all three match the
 *   brief's expected 49, 42 and 24 degrees.
 *   SMALL C MEANS LARGE n, monotonically, and every MCQ option below was
 *   checked against it.
 *   REFRACTIVE INDEX IS NEVER LESS THAN 1 for a real medium, so any answer of
 *   the form n = sin C is dead on sight. Topic 02's MCQ 3 is exactly this.
 *   A CONVERGING LENS CANNOT FORM A REAL IMAGE OF AN OBJECT INSIDE ITS FOCUS,
 *   and a convex mirror and a concave lens can NEVER form a real image of a
 *   real object. Checked against every worked example, every practice answer
 *   and every figure frame: Topic 04's figure includes the inside-F chip
 *   precisely so a student watches the image flip to virtual, and Addendum B's
 *   Practice 2 (CORRECTION 9) is the source failing this exact test.
 *   MAGNIFICATION SIGN AGAINST THE RAY DIAGRAM. Every m below was checked
 *   against the picture: negative m means inverted means real for a single
 *   element, positive m means erect means virtual. The `optics` renderer
 *   dashes the virtual images independently, from its own solution of the
 *   formula, so the figures and the arithmetic are checked against each other
 *   rather than both against me.
 *   DIOPTRES ARE RECIPROCAL METRES. Every power below was recomputed from f in
 *   METRES: +2 D is f = 50 cm, +5 D is f = 20 cm, and the telescope of Topic
 *   06's Example 2 has a 0.5 D objective, which is a 200 cm focal length and
 *   is why the tube is two metres long.
 *
 * LIMITING CASES, used where they teach something.
 *   OBJECT AT INFINITY. Put 1/u = 0 in either formula and v = f: parallel light
 *   converges to the focus. That is the DEFINITION of the focus recovered from
 *   the formula, and it is what makes f measurable. Topic 04's figure runs the
 *   object in from beyond 2F and Topic 01's `defgrid` opens on this row.
 *   OBJECT AT THE FOCUS. Put u = f and 1/v = 0: the image runs to infinity.
 *   Topic 01's fourth MCQ is this limit read as a question, and Topic 06's
 *   whole "relaxed eye" adjustment is this limit used on purpose.
 *   R GOING TO INFINITY IN THE SINGLE-SURFACE RELATION. The right-hand side
 *   vanishes and n2/v = n1/u, which IS the apparent-depth result of Topic 02.
 *   So the flat-boundary chapter is the curved-boundary chapter with the
 *   curvature switched off, and Topic 03 opens on that rather than on algebra.
 *   THE PRISM AT MINIMUM DEVIATION. The delta-against-i curve is U-shaped, so
 *   d(delta)/di = 0 exactly once, and reversibility forces that one point to be
 *   the symmetric one, i = e. Away from it, every value of delta is reached at
 *   TWO angles of incidence, which is what Topic 05's second figure draws and
 *   what makes the spectrometer measurement well defined.
 *   THE THIN PRISM. Let A go small in the prism formula, replace both sines by
 *   their arguments, and n = (A + delta_m)/A collapses to delta = (n - 1)A,
 *   now independent of i. Topic 05's `deriv` runs this and it is the bridge to
 *   the whole dispersion family.
 *   THE LENS THAT VANISHES. Let n_medium approach n_lens and the lens-maker
 *   factor goes to zero, so 1/f goes to zero and f goes to infinity: the lens
 *   stops refracting entirely. Topic 03's fourth MCQ and Topic 04's fourth MCQ
 *   are the same limit asked twice, which is how often the source thinks it
 *   matters.
 *
 * SEAMS: what is quoted as already known, and from where.
 *   - phy-12-08-electromagnetic-waves.ts, quoted rather than re-derived. Light
 *     is an electromagnetic wave travelling at c = 3 x 10^8 m/s in vacuum, and
 *     the visible band runs 400 to 700 nm with violet at the short end. Topic
 *     02's refractive-index `def` cites it by name for c, and Topic 05's
 *     dispersion paragraph cites it for the wavelength ordering that makes
 *     violet the most deviated colour. Neither is rebuilt here.
 *   - phy-11-14-waves.ts, Topic 01, quoted for the one fact that decides half
 *     of Topic 02: FREQUENCY BELONGS TO THE SOURCE AND SPEED BELONGS TO THE
 *     MEDIUM, with v = f lambda tying them. Everything in "what changes when
 *     light enters glass" follows from it: f is fixed, v drops by n, so lambda
 *     must drop by n. Topic 02's `formula` for lambda = lambda0/n says so and
 *     points at that chapter rather than re-deriving.
 *   - NOT quoted, and the reason is worth recording. Wave Optics is Chapter 10
 *     and does not exist in content/textbooks yet (checked at the start and
 *     again at the end of writing). Three things below are deliberately left
 *     as forward references rather than half-explained: why Snell's law is true
 *     (Huygens), why a rainbow's colours are ordered as they are in detail, and
 *     the resolving-power limit that Topic 06's snapshot names as the thing
 *     magnification cannot buy. When that chapter lands, those are the three
 *     places to add a citation, and nothing else below depends on it.
 *   - The source's own cross-references are sound in this chapter, unlike the
 *     off-by-one run in Chapter 8. Every "see Subtopic 0x" on pages 552 to 608
 *     points at the subtopic that actually carries the material; spot-checked
 *     all eleven.
 *
 * TWELVE FIGURE BLOCKS: 11 OF THE 17 NAMED ARE DRAWN, plus 3 designed here.
 * The source names seventeen figures, more than any other chapter, on its
 * fourteen "CHAPTER 9 FIGURES" pages. What became of each:
 *   9.1  concave and convex mirror with P, C, F, R and parallel rays: DRAWN as
 *        Topic 01's first figure, two chips, `plot` with axes off.
 *   9.2, 9.3  the mirror-formula geometry and the four standard rays: NOT drawn
 *        as separate pictures. 9.2 is the `deriv` (its similar triangles are
 *        the derivation's steps, and a static triangle picture adds nothing a
 *        tapped step does not) and 9.3 is the `proc` (four numbered rays are a
 *        numbered list). What IS drawn instead is the thing neither of them
 *        shows: where the image actually goes, as five `optics` chips.
 *   9.4  refraction, grazing, TIR at three angles: DRAWN as Topic 02's first
 *        figure, but as FOUR chips on one boundary rather than the source's two
 *        side-by-side panels. THE PANEL RULE: two panels at 316pt is 150pt
 *        each. Four chips keep the boundary, the normal and the scale fixed
 *        while only the angle changes, which is the whole lesson.
 *   9.5  apparent depth: NOT drawn; it is the `deriv` in Topic 02, three lines
 *        long, and its picture is two rays and a dashed extension, which the
 *        text can carry.
 *   9.6  the optical fibre and its acceptance cone: DRAWN as Topic 02's second
 *        figure, two chips.
 *   9.7  the single spherical refracting surface: DRAWN as Topic 03's first
 *        figure, two chips, the second being the R going to infinity limit that
 *        the source states in words and never shows.
 *   9.8, 9.9  the convex lens with its principal rays: DRAWN as Topic 04's
 *        `optics` figure, five chips, WITH the construction rays, which the
 *        renderer draws correctly for a lens.
 *   9.10  white light fanning out into a spectrum: DRAWN as the fourth chip of
 *        Topic 05's first figure.
 *   9.11  the prism ray with i, r1, r2, e, A and delta: DRAWN as chips 1 and 2
 *        of Topic 05's first figure. Chip 3, the no-emergence case, is designed
 *        here from the source's Example 4.
 *   9.13  two thin prisms apex-to-base: NOT drawn. Both combinations are one
 *        `defgrid` row each, because the picture of two touching wedges shows
 *        nothing the two cancellation conditions do not say better.
 *   9.12  the i-delta curve: DRAWN as Topic 05's second figure, two chips, and
 *        it is a real graph rather than a scene, so check-figures inspects it.
 *   9.14  the simple microscope: DRAWN as Topic 06's `optics` figure, two
 *        chips, the second being the object OUTSIDE the focus so a student sees
 *        the magnifier stop working.
 *   9.15  the compound microscope: NOT drawn. Two lenses, four rays and five
 *        labelled distances do not fit 308px wide, and the honest version is
 *        the `flow` chain in Topic 06, which says what the two stages DO.
 *   9.16  the astronomical telescope in normal adjustment: DRAWN as Topic 06's
 *        second figure, two chips.
 *   9.17  the Newtonian reflector: NOT drawn; one line of the reflecting-
 *        telescope `p` and a snapshot row carry it.
 * The three designed here that the source does not name:
 *   T01  the concave-mirror image progression, five `optics` chips. The source
 *        has this as a six-row table and two static ray diagrams; a tapped
 *        sequence is how a student actually watches the image move and flip.
 *   T03  the radius sign convention, three chips (biconvex, biconcave,
 *        plano-convex), each marking where the centre of curvature sits and
 *        therefore the sign of R. The source states the rule three times, in
 *        three different places, and never draws it, and getting R2 wrong is
 *        its own listed Pitfall 1 for that subtopic.
 *   T04  the two-stage chain as `flow`, two chips: an image is the object for
 *        the next element, and a silvered lens is three events in series. That
 *        sentence is the engine of Topics 04 and 06 and the source only ever
 *        says it in prose.
 * RENDERER FACTS HONOURED, each live while drawing:
 *   - `flow` box text is plain SVG with NO markup and must fit its row, so
 *     every box below is one short line on a small grid.
 *   - `polys` with fill "hatch" hatches the BOUNDING BOX, so the only hatched
 *     shape below is the axis-aligned rectangle of the fibre cladding.
 *   - A point label defaults to north-east, which is wrong wherever a ray
 *     leaves the point that way, and in a ray diagram something leaves every
 *     marked point. Every `points` entry below carries an explicit `at`.
 *   - Two collinear strokes read as one line. The principal axis is never
 *     drawn along a ray: the R and f markers in Topic 01's first figure are
 *     offset below the axis, and the prism's base is a poly edge rather than a
 *     second stroke on the axis.
 *   - A horizontal arrow's at "above" label lands BELOW the shaft when the
 *     arrow points left, so every leftward arrow below carries the opposite
 *     `at` from the one its name suggests.
 *   - A `circle` curve is only round when both axes carry the same pixels per
 *     unit. No `circle` curve appears below at all; every curved surface is a
 *     smoothed `polys` and every angle is an `arcs`, which is drawn in screen
 *     space and stays round.
 *   - check-figures inspects only `plot`, `numberline` and `flow`, so the six
 *     `optics` frames were placed by hand against the renderer's own
 *     arithmetic in components/textbook/figures.tsx (see OPTICS below).
 *
 * OPTICS: THE FIRST REAL USE OF THE KIND, AND WHAT IT COSTS. `FigureOptics`
 * has shipped unused in every chapter so far. It works, it is the right idea,
 * and it earns its place: the author gives an element, a focal length and an
 * object position, and the RENDERER solves 1/v + 1/u = 1/f (mirror) or
 * 1/v - 1/u = 1/f (lens), places the image, sizes it by m, and dashes it when
 * it is virtual. Twelve chips below are drawn that way, across three figures,
 * and not one image position was placed by hand. Three findings a future author needs:
 *   1. ITS DOC COMMENT IS WRONG ABOUT MIRRORS. lib/textbooks.ts says of `f`:
 *      "Convex lens and concave mirror are +". The CODE is right and the
 *      comment is not. Pass f = +10 for a concave mirror with an object at
 *      u = -30 and the renderer returns v = +7.5, an erect virtual image,
 *      which is not what a concave mirror does. Pass f = -10, the NCERT and
 *      source sign, and it returns v = -15, m = -0.5, real inverted
 *      diminished, drawn on the object's side and undashed. Correct. Every
 *      mirror frame below therefore passes a NEGATIVE f for a concave mirror.
 *      DO NOT TOUCH lib/textbooks.ts (the brief forbids it); the comment is
 *      the thing to fix, not the code.
 *   2. THE THIRD CONSTRUCTION RAY IS WRONG FOR A MIRROR. All three rays live
 *      in one `rays &&` block. Rays 1 and 2 (parallel in, through F out) are
 *      correct for both elements. Ray 3 is drawn as a single straight segment
 *      from the object tip to the image tip, which for a LENS is exactly the
 *      undeviated ray through the optical centre (it passes through the centre
 *      identically, checked algebraically) and for a MIRROR is a line that
 *      never touches the mirror at all: with f = -10 and u = -30 it runs from
 *      (-30, h) to (-15, -h/2), entirely on the object's side, crossing the
 *      axis in mid-air. A confidently wrong ray. So every MIRROR frame below
 *      sets rays: false and the caption carries the construction, while every
 *      LENS frame sets rays: true.
 *   3. AN `optics` FRAME CANNOT BE ANNOTATED AT ALL. RayDiagram reads only
 *      frame.optics and frame.aspect; `labels`, `arrows`, `segments`, `marks`
 *      and `arcs` on the same frame are silently ignored. So u, v, f and h
 *      cannot be dimensioned on the picture, C cannot be named as anything but
 *      "2F", the object and image cannot be labelled O and I, and the normal
 *      at the pole cannot be drawn. Every one of those had to move into the
 *      chip label or the caption.
 * FIGURE VOCABULARY REQUESTED. Four things this chapter genuinely needed and
 * could not express, listed in the order they cost the most:
 *   (a) REFRACTION AT A BOUNDARY, as a solved primitive. `optics` covers two
 *       mirrors and two lenses, which is four of the chapter's SEVEN elements.
 *       It cannot draw a plane boundary with an incident ray, a normal, and a
 *       refracted ray placed by Snell's law from n1, n2 and i; and it cannot
 *       draw refraction at a single spherical surface, which is the whole of
 *       Topic 03 and the thing every lens is built from. Both were hand-drawn
 *       as `plot` scenes below, which means the angles are AUTHORED, not
 *       solved: I computed r = arcsin(sin i / n) myself for each frame and
 *       placed the ray by hand. That is precisely the hand-placement
 *       FigureOptics exists to prevent, and it is the single largest gap.
 *   (b) A PRISM, likewise. The wedge, the two refractions, the deviation angle
 *       between the produced incident ray and the emergent ray, and the
 *       minimum-deviation symmetry are hand-drawn in Topic 05.
 *   (c) TOTAL INTERNAL REFLECTION. There is no way to say "this ray is past
 *       the critical angle, so it reflects instead of refracting" and have the
 *       renderer decide which. Topic 02's four chips each hard-code the answer.
 *   (d) ANNOTATION ON AN `optics` FRAME, per finding 3 above. Even accepting
 *       that the renderer solves the geometry, an author needs to mark u and v
 *       and to name C. Allowing `labels` and `segments` to pass through to
 *       RayDiagram in its own pixel space would cost little and would let the
 *       nine chips below carry their own dimensions.
 * None of these was approximated into something wrong: where the renderer
 * could not express the physics, the physics was drawn by hand and the
 * arithmetic behind every hand-placed angle is stated in the caption.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12RayOptics: Chapter = {
  "chapter": "09",
  "title": "Ray Optics and Optical Instruments",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Reflection and Spherical Mirrors",
      "chip": "01 THE BOUNCE",
      "kalam": "one rule, i = r, and a spoon that proves it twice",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Reflection and Spherical Mirrors</b><br>Bread-and-butter optics. JEE Main carries 1 to 2 questions (mirror formula, magnification, image velocity, two-mirror geometry) and NEET usually one (nature of image, sign-based magnification). JEE Advanced hides it inside multi-step problems: moving objects, rotating mirrors, combinations. For CBSE Boards the mirror-formula derivation and ray diagrams are a reliable 2 to 3 marks.<br><br><b>02 · Refraction and Total Internal Reflection</b><br>A high-yield pair. JEE Main reliably carries 1 to 2 questions on Snell's law, lateral and normal shift, critical angle and fibre numerical aperture. NEET favours the conceptual side: apparent depth, critical-angle comparisons, the diamond and the mirage. JEE Advanced buries TIR inside multi-interface problems. CBSE Boards love the apparent-depth and critical-angle derivations.<br><br><b>03 · Refraction at Spherical Surfaces and the Lens-Maker's Formula</b><br>The engine room of lens optics. JEE Main asks a lens-maker numerical most years: find <i>f</i> from <i>R</i> and <i>n</i>, or the focal length of a lens dipped in liquid. JEE Advanced loves single-surface problems with glass spheres and rods. NEET keeps it conceptual. For CBSE Boards, the single-surface relation and the lens-maker derivation are classic 2 to 3 mark questions.<br><br><b>04 · Thin Lens, Power and Combinations</b><br>Among the highest-yield topics in the chapter. JEE Main and NEET both almost always carry a lens-formula or magnification numerical, and power and combinations appear most years. JEE Advanced mixes lenses with mirrors, the displacement method and silvered lenses. CBSE Boards ask the lens formula, magnification, power and the lenses-in-contact derivation.<br><br><b>05 · Prism and Dispersion</b><br>A perennial favourite. JEE Main almost always carries a prism question. NEET leans on minimum-deviation symmetry, thin-prism deviation and which colour bends most. JEE Advanced combines prisms with TIR or with achromatic pairs. CBSE Boards reliably ask the δ = <i>i</i> + <i>e</i> − <i>A</i> derivation, the prism formula, or a dispersive-power definition.<br><br><b>06 · Optical Instruments</b><br>A dependable scoring topic. JEE Main usually carries one magnifying-power numerical. NEET favours the adjustment angle: relaxed against strained eye. JEE Advanced combines the lens equations with tube-length geometry. For CBSE Boards, the compound-microscope or astronomical-telescope ray diagram with its magnifying power is a classic 3-mark question."
        },
        {
          "t": "p",
          "html": "Throw a rubber ball straight at a smooth wall. It comes back, and the angle at which it leaves mirrors the angle at which it arrived. Light does the same thing, and the whole of this topic is that one rule applied cleverly. The <b>two laws of reflection</b>: the incident ray, the reflected ray and the <b>normal</b> (the perpendicular at the point of contact) all lie in one plane, and the angle of incidence equals the angle of reflection, <i>i</i> = <i>r</i>. Both angles are measured <b>from the normal</b>, never from the surface."
        },
        {
          "t": "p",
          "html": "Why does a polished steel thali show your face while a sheet of paper does not, when both reflect light? Because the thali is smooth at the scale of a wavelength, so parallel rays stay parallel after bouncing. That is <b>regular</b> or <b>specular</b> reflection and it builds a crisp image. Paper is microscopically rough: its facets point every which way, so parallel rays scatter. That is <b>diffuse</b> reflection, and it is why you can read this page from any angle and cannot see your face in it. Notice that the laws are never broken in diffuse reflection. Each tiny facet obeys <i>i</i> = <i>r</i> perfectly; the facets are just tilted at random."
        },
        {
          "t": "think",
          "html": "grab a steel spoon. the caved-in side is a concave mirror: hold it close and your face is big and upright, pull it away and you are suddenly upside down. flip it over to the bulging side and you are always small, always upright, with half the kitchen behind you. two surfaces of one spoon, two completely different behaviours, and this topic is about predicting them exactly."
        },
        {
          "t": "p",
          "html": "Before curving anything, nail down the flat case. A <b>plane mirror</b> always gives a virtual, erect image the same size as the object (<i>m</i> = +1), as far behind the mirror as the object stands in front. It performs <b>lateral inversion</b>: your right hand maps to the image's left, which is why AMBULANCE is painted reversed on a bonnet so it reads correctly in a driver's rear-view mirror. One neat consequence of <i>i</i> = <i>r</i>: to see your full height you need a mirror only <b>half your height</b>, mounted at the right level, no matter how far back you stand."
        },
        {
          "t": "p",
          "html": "Now bend that flat mirror into a piece of a sphere. Four landmarks pin down any <b>spherical mirror</b>. The <b>pole</b> <i>P</i> is the centre of the mirror's own surface. The <b>centre of curvature</b> <i>C</i> is the centre of the sphere it was cut from, and the distance <i>PC</i> is the <b>radius of curvature</b> <i>R</i>. The line through <i>P</i> and <i>C</i> is the <b>principal axis</b>. The most useful point is the <b>focus</b> <i>F</i>: shine parallel rays on a concave mirror and they converge there, which is why a concave mirror burns paper and why solar cookers are concave. A convex mirror does the opposite, spreading parallel rays as though they came from a focus <b>behind</b> the mirror, which is why scooter mirrors are convex and stamped with a warning that objects are closer than they appear."
        },
        {
          "t": "def",
          "term": "The New Cartesian sign convention",
          "html": "Three rules, stated once, used in every numerical in this chapter. <b>(1)</b> All distances are measured <b>from the pole</b> <i>P</i> of the mirror (or from the optical centre of a lens). <b>(2)</b> Distances measured <b>along the incident light</b> are positive; distances against it are negative. Light is always drawn travelling left to right, so a real object, which sits on the side the light comes from, always has <i>u</i> < 0. <b>(3)</b> Heights above the principal axis are positive, below it negative.<br><br>The consequences you will use constantly: a <b>concave</b> mirror has <i>f</i> < 0 and <i>R</i> < 0, because its focus and centre lie in front of it, on the incoming side. A <b>convex</b> mirror has <i>f</i> > 0 and <i>R</i> > 0. And a real image forms <b>where the light actually arrives</b>: for a mirror the light is sent back, so a real image lies in front of the mirror and has <i>v</i> < 0. (For a lens, later in this chapter, the light carries on forwards, so a real image has <i>v</i> > 0. Same convention, opposite side, because the light goes the other way.)"
        },
        {
          "t": "formula",
          "kicker": "The mirror formula",
          "tag": "USE FOR EVERY MIRROR",
          "main": "1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>,   <i>f</i> = <i>R</i>/2",
          "legend": [
            "<i>u</i> object distance from the pole, in metres (centimetres are fine if every length in the same line is in centimetres)",
            "<i>v</i> image distance from the pole, in metres",
            "<i>f</i> focal length, in metres; negative for concave, positive for convex",
            "<i>R</i> radius of curvature, in metres, always twice the focal length"
          ],
          "note": "The two terms <b>add</b>. The lens formula in Topic 04 subtracts, and confusing the two is the single most expensive error in this chapter. Signs first, algebra second: write the signed values of <i>u</i> and <i>f</i> on their own line before you touch the formula. And <i>f</i> = <i>R</i>/2 is a <b>paraxial</b> result, true for rays close to the axis making small angles with it; for a wide-aperture mirror the outer rays focus slightly differently and the defect is called spherical aberration."
        },
        {
          "t": "formula",
          "kicker": "Magnification, and its three flavours",
          "tag": "SIGN CARRIES THE ORIENTATION",
          "main": "<i>m</i> = <i>h</i>′/<i>h</i> = −<i>v</i>/<i>u</i> = <i>f</i>/(<i>f</i> − <i>u</i>)",
          "legend": [
            "<i>h</i> object height, in metres, positive above the axis",
            "<i>h</i>′ image height, in metres, negative below the axis",
            "<i>m</i> lateral magnification, a pure number: positive means erect and virtual, negative means inverted and real",
            "longitudinal (along the axis): <i>m</i><sub>L</sub> = −<i>m</i><sup>2</sup>; areal (a flat face): <i>m</i><sub>A</sub> = <i>m</i><sup>2</sup>"
          ],
          "note": "|<i>m</i>| > 1 is enlarged, |<i>m</i>| < 1 is diminished. The third form <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) is worth memorising: when a question gives you <i>m</i> and asks for <i>u</i>, it skips solving for <i>v</i> entirely. In image-velocity problems the axial part of the motion scales by <i>m</i><sup>2</sup> and the transverse part by |<i>m</i>|, and they are never the same factor."
        },
        {
          "t": "defgrid",
          "title": "Concave mirror, real object: the whole catalogue",
          "tag": "LEARN THE ROW, NOT THE FORMULA",
          "rows": [
            { "k": "Object at infinity", "v": "Image at <i>F</i>. Real, inverted, a point" },
            { "k": "Object beyond <i>C</i>", "v": "Image between <i>F</i> and <i>C</i>. Real, inverted, diminished" },
            { "k": "Object at <i>C</i>", "v": "Image at <i>C</i>. Real, inverted, same size" },
            { "k": "Object between <i>C</i> and <i>F</i>", "v": "Image beyond <i>C</i>. Real, inverted, magnified" },
            { "k": "Object at <i>F</i>", "v": "Image at infinity. The projector and searchlight case" },
            { "k": "Object between <i>F</i> and <i>P</i>", "v": "Image behind the mirror. Virtual, erect, magnified" },
            { "k": "Any convex mirror", "v": "Image between <i>P</i> and <i>F</i>, behind. Always virtual, erect, diminished" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Two mirrors, one geometry",
          "chips": ["CONCAVE", "CONVEX"],
          "captions": [
            "Parallel rays strike the caved-in surface and cross at one point, the focus <i>F</i>. It sits halfway from the pole <i>P</i> to the centre of curvature <i>C</i>, which is what <i>f</i> = <i>R</i>/2 says. Under the sign convention both <i>F</i> and <i>C</i> lie on the incoming side, so <i>f</i> and <i>R</i> are both negative for this mirror.",
            "The same parallel rays on the bulging surface spread apart. Follow the reflected rays backwards, dashed, and they meet at a focus <b>behind</b> the mirror: on the outgoing side, so <i>f</i> and <i>R</i> are positive here. Nothing physically arrives at that point, which is exactly why a convex mirror can only ever make a virtual image."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-2, 2],
              "axes": "none",
              "polys": [
                { "pts": [[1.0, 1.5], [1.3, 0.8], [1.4, 0], [1.3, -0.8], [1.0, -1.5]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-2.8, 0], "to": [1.45, 0], "soft": true }
              ],
              "arrows": [
                { "from": [-2.6, 0.9], "to": [1.27, 0.9], "tone": "amber" },
                { "from": [-2.6, -0.9], "to": [1.27, -0.9], "tone": "amber" },
                { "from": [1.27, 0.9], "to": [-0.1, 0], "tone": "amber" },
                { "from": [1.27, -0.9], "to": [-0.1, 0], "tone": "amber" },
                { "from": [-1.6, -1.55], "to": [1.4, -1.55], "head": "both", "tone": "soft", "label": "R", "at": "below" }
              ],
              "points": [
                { "x": 1.4, "y": 0, "label": "P", "at": "ne" },
                { "x": -0.1, "y": 0, "label": "F", "at": "sw" },
                { "x": -1.6, "y": 0, "label": "C", "at": "nw" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-2, 2],
              "axes": "none",
              "polys": [
                { "pts": [[1.0, 1.4], [0.72, 0.75], [0.6, 0], [0.72, -0.75], [1.0, -1.4]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-2.6, 0], "to": [2.8, 0], "soft": true },
                { "from": [0.72, 0.75], "to": [1.6, 0], "dash": true, "soft": true },
                { "from": [0.72, -0.75], "to": [1.6, 0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-2.5, 0.75], "to": [0.7, 0.75], "tone": "amber" },
                { "from": [-2.5, -0.75], "to": [0.7, -0.75], "tone": "amber" },
                { "from": [0.72, 0.75], "to": [-0.34, 1.65], "tone": "amber" },
                { "from": [0.72, -0.75], "to": [-0.34, -1.65], "tone": "amber" }
              ],
              "points": [
                { "x": 0.6, "y": 0, "label": "P", "at": "sw" },
                { "x": 1.6, "y": 0, "label": "F", "at": "ne" },
                { "x": 2.6, "y": 0, "label": "C", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "optics",
          "kicker": "Walk the object in and watch the image",
          "chips": ["BEYOND C", "AT C", "C TO F", "INSIDE F", "CONVEX"],
          "captions": [
            "Concave mirror, <i>f</i> = −10 cm, object at <i>u</i> = −30 cm, beyond <i>C</i> (the tick marked 2F). The reader solves 1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = −1/15 itself and puts the image at <i>v</i> = −15 cm, between <i>F</i> and <i>C</i>, with <i>m</i> = −0.5: real, inverted, diminished. Real, so it is drawn solid and on the object's own side, because that is where the reflected light actually goes.",
            "Object at <i>u</i> = −20 cm, exactly at <i>C</i>. The image comes back to <i>C</i> at <i>v</i> = −20 cm with <i>m</i> = −1: same size, still inverted, still real. This is the one position where a concave mirror neither magnifies nor shrinks, and it is the answer to a very common MCQ.",
            "Object at <i>u</i> = −15 cm, between <i>C</i> and <i>F</i>. Now <i>v</i> = −30 cm and <i>m</i> = −2: the image has moved out beyond <i>C</i> and doubled. Compare the three chips so far and read the pattern: as the object comes in towards <i>F</i>, the image runs outwards and grows. At <i>u</i> = <i>f</i> exactly, 1/<i>v</i> = 0 and it reaches infinity.",
            "Object at <i>u</i> = −5 cm, inside the focus. The image flips to <i>v</i> = +10 cm, behind the mirror, drawn dashed because nothing arrives there: <i>m</i> = +2, virtual, erect, magnified. This is shaving-mirror mode, and it is the only way a concave mirror makes an erect image.",
            "Convex mirror, <i>f</i> = +10 cm, object at <i>u</i> = −20 cm. <i>v</i> = +6.7 cm and <i>m</i> = +0.33: virtual, erect, diminished, tucked between the pole and <i>F</i>. Move the object anywhere you like and this never changes, which is why the rear-view mirror shows you the whole road and makes every car look far away.<br><br>Construction rays are switched off in all five frames on purpose: the renderer's third ray is drawn correctly for a lens and not for a mirror. Build them yourself with the four-ray procedure below."
          ],
          "frames": [
            { "optics": { "element": "concaveMirror", "f": -10, "object": { "u": -30, "h": 6 }, "rays": false } },
            { "optics": { "element": "concaveMirror", "f": -10, "object": { "u": -20, "h": 6 }, "rays": false } },
            { "optics": { "element": "concaveMirror", "f": -10, "object": { "u": -15, "h": 6 }, "rays": false } },
            { "optics": { "element": "concaveMirror", "f": -10, "object": { "u": -5, "h": 6 }, "rays": false } },
            { "optics": { "element": "convexMirror", "f": 10, "object": { "u": -20, "h": 6 }, "rays": false } }
          ]
        },
        {
          "t": "deriv",
          "kicker": "The mirror formula, from two similar triangles",
          "steps": [
            {
              "eq": "△ABP ~ △A′B′P  so  A′B′/AB = PB′/PB",
              "why": "Take a concave mirror with an object <i>AB</i> standing on the axis beyond <i>C</i>, giving a real inverted image <i>A</i>′<i>B</i>′. Send a ray from the tip <i>B</i> straight to the pole <i>P</i>. It reflects with <i>i</i> = <i>r</i> about the principal axis, so the axis acts as the mirror line and the two triangles are similar."
            },
            {
              "eq": "△ (parallel ray) ~ △A′B′F  so  A′B′/AB = FB′/PF",
              "why": "Now send a second ray from <i>B</i> parallel to the axis. It strikes the mirror near the pole (paraxial, so the strike point is effectively <i>P</i>) and reflects through <i>F</i>. Its height at the mirror equals <i>AB</i>, which gives the second similar pair."
            },
            {
              "eq": "PB′/PB = (PB′ − PF)/PF",
              "why": "Equate the two expressions for A′B′/AB, and write FB′ as PB′ − PF, which is just reading the distances off the axis."
            },
            {
              "eq": "PB′ = −v,  PB = −u,  PF = −f",
              "why": "Apply the sign convention. All three points lie in front of the mirror, on the incoming side, so all three measured distances are negatives of the signed quantities. This substitution is the step every wrong answer skips."
            },
            {
              "eq": "−v/−u = (f − v)/(−f)  ⇒  vf = uv − uf",
              "why": "Substitute and cross-multiply. Nothing physical is happening here; it is bookkeeping."
            },
            {
              "eq": "1/v + 1/u = 1/f",
              "why": "Divide throughout by <i>uvf</i>. Derived for one case, a real image in a concave mirror, but valid for every spherical mirror and every image type <b>provided</b> the signs are applied consistently. That universality is exactly why the convention is not negotiable."
            }
          ]
        },
        {
          "t": "proc",
          "title": "Locate an image by ray diagram",
          "steps": [
            "Draw the principal axis, the mirror, and mark <i>P</i>, <i>F</i> and <i>C</i>. Stand the object as an arrow on the axis with its tip above the line.",
            "Ray 1: from the tip, <b>parallel to the axis</b>. It reflects through <i>F</i> for a concave mirror, or appears to diverge from <i>F</i> behind the mirror for a convex one.",
            "Ray 2: from the tip, <b>through (or aimed at) <i>F</i></b>. It reflects back <b>parallel</b> to the axis. This is Ray 1 run backwards, which is why both work.",
            "Ray 3: from the tip, <b>through (or aimed at) <i>C</i></b>. It strikes the mirror along its own normal and <b>retraces</b> its path.",
            "Ray 4: from the tip, <b>to the pole <i>P</i></b>. It reflects symmetrically about the axis, with <i>i</i> = <i>r</i>.",
            "Any <b>two</b> of these fix the image tip; the third is a free cross-check. If the reflected rays themselves meet, the image is <b>real</b>. If only their backward extensions meet behind the mirror, it is <b>virtual</b>, and you draw those extensions dashed."
          ]
        },
        {
          "t": "defgrid",
          "title": "The rest of the reflection toolkit",
          "tag": "SMALL, EXAMINED, EASY MARKS",
          "rows": [
            { "k": "Deviation on one reflection", "v": "δ = 180° − 2<i>i</i>. Grazing incidence barely bends the ray; normal incidence sends it straight back" },
            { "k": "Rotating a plane mirror", "v": "Hold the incident ray fixed, turn the mirror by θ, and the reflected ray turns by <b>2θ</b>" },
            { "k": "Two mirrors at angle θ", "v": "Let <i>N</i> = 360°/θ. Images = <i>N</i> − 1 if <i>N</i> is even; if <i>N</i> is odd, <i>N</i> − 1 off the bisector and <i>N</i> on it" },
            { "k": "Newton's formula", "v": "<i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <i>f</i><sup>2</sup>, with both distances measured from the focus rather than the pole" },
            { "k": "A mirror's focal length", "v": "<i>f</i> = <i>R</i>/2 is pure geometry. It does not change in water and does not change with colour, so mirrors show no chromatic aberration" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A concave mirror has a radius of curvature of 30 cm. An object is placed 25 cm in front of it. Find the position, size and nature of the image.",
          "steps": [
            "Signs first. Concave, so <i>R</i> = −30 cm and <i>f</i> = <i>R</i>/2 = −15 cm. Real object, so <i>u</i> = −25 cm.",
            "1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = 1/(−15) − 1/(−25) = −1/15 + 1/25.",
            "Common denominator 75: (−5 + 3)/75 = −2/75, so <i>v</i> = −37.5 cm.",
            "<i>m</i> = −<i>v</i>/<i>u</i> = −(−37.5)/(−25) = −1.5.",
            "Read the two signs. <i>v</i> < 0 puts the image in front of the mirror, so it is <b>real</b>. <i>m</i> < 0 makes it <b>inverted</b>, and |<i>m</i>| > 1 makes it <b>magnified</b>."
          ],
          "ans": "37.5 cm in front of the mirror, real, inverted, magnified 1.5 times. Always close with the position, the orientation and the size."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A convex mirror of focal length 20 cm forms an erect image one-third the size of the object. Where is the object? (a) 20 cm (b) 40 cm (c) 60 cm (d) 80 cm, all in front of the mirror.",
          "steps": [
            "The trap is the word erect. A convex mirror always gives a virtual, erect, diminished image of a real object, so <i>m</i> must be <b>positive</b> and between 0 and 1. The one-third means <i>m</i> = +1/3, not −1/3.",
            "Skip <i>v</i> entirely and use <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) with <i>f</i> = +20 cm.",
            "1/3 = 20/(20 − <i>u</i>), so 20 − <i>u</i> = 60 and <i>u</i> = −40 cm."
          ],
          "ans": "40 cm in front of the mirror, option (b). Anyone who reaches for a negative <i>m</i> out of concave-mirror reflex lands on the wrong root, and the third magnification form saves about twenty seconds."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "An object on the axis of a concave mirror of focal length 20 cm is 30 cm away and moving towards the mirror at 5 cm/s. Find the speed of the image.",
          "steps": [
            "Locate the image. <i>f</i> = −20 cm, <i>u</i> = −30 cm, so 1/<i>v</i> = −1/20 + 1/30 = (−3 + 2)/60 = −1/60 and <i>v</i> = −60 cm.",
            "Along the axis the motion scales by the <b>longitudinal</b> magnification: <i>m</i><sub>L</sub> = −(<i>v</i>/<i>u</i>)<sup>2</sup> = −(−60/−30)<sup>2</sup> = −4.",
            "Image speed = |<i>m</i><sub>L</sub>| × 5 cm/s = 20 cm/s.",
            "Read the minus in <i>m</i><sub>L</sub>: the image moves the opposite way, so as the object comes in the image runs out and grows."
          ],
          "ans": "20 cm/s, receding from the mirror. Sanity check: the object sits between <i>F</i> and <i>C</i>, the region where image motion is famously amplified, so a factor of 4 is exactly what you should expect."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A point object is 15 cm in front of a concave mirror of focal length 10 cm. It moves with 3 cm/s along the axis (towards the mirror) and 4 cm/s perpendicular to it. Find the speed of the image.",
          "steps": [
            "<i>f</i> = −10 cm, <i>u</i> = −15 cm gives 1/<i>v</i> = −1/10 + 1/15 = −1/30, so <i>v</i> = −30 cm.",
            "<i>m</i> = −<i>v</i>/<i>u</i> = −(−30)/(−15) = −2, so <i>m</i><sup>2</sup> = 4.",
            "The two directions scale by <b>different</b> factors, and that is the whole problem. Axial: |<i>m</i><sup>2</sup>| × 3 = 12 cm/s. Transverse: |<i>m</i>| × 4 = 8 cm/s.",
            "The two image components are perpendicular, so combine them: √(12<sup>2</sup> + 8<sup>2</sup>) = √208 = 4√13."
          ],
          "ans": "About 14.4 cm/s. The classic blunder is applying one magnification to the whole velocity vector; axial and transverse scale by <i>m</i><sup>2</sup> and |<i>m</i>|, so they must be separated, scaled and recombined."
        },
        {
          "t": "mcq",
          "q": "An object is placed at the centre of curvature of a concave mirror. The image is:",
          "opts": [
            { "label": "virtual, erect, same size", "nudge": "That is the object-inside-<i>F</i> case, the only place a concave mirror gives a virtual erect image. At <i>C</i> the object is well outside <i>F</i>." },
            { "label": "real, inverted, same size", "nudge": null },
            { "label": "real, inverted, magnified", "nudge": "That is the object between <i>F</i> and <i>C</i>. Picked by everyone who memorises concave means magnifies without checking the position." },
            { "label": "virtual, inverted, diminished", "nudge": "Virtual and inverted can never occur together for a single mirror. A virtual image here is always erect, so this option is impossible before you compute anything." }
          ],
          "correct": 1,
          "solution": "At <i>u</i> = <i>R</i> = 2<i>f</i>, the mirror formula gives 1/<i>v</i> = 1/<i>f</i> − 1/(2<i>f</i>) = 1/(2<i>f</i>), so <i>v</i> = 2<i>f</i> = <i>R</i>. The image comes back to <i>C</i>, and <i>m</i> = −<i>v</i>/<i>u</i> = −1: real, inverted, exactly the same size."
        },
        {
          "t": "mcq",
          "q": "The focal length of a glass mirror (<i>n</i> = 1.5) is <i>f</i> in air. Fully immersed in water it becomes:",
          "opts": [
            { "label": "<i>f</i>, unchanged", "nudge": null },
            { "label": "1.33<i>f</i>", "nudge": "Importing the lens reflex. A lens really does change focal length with the surrounding medium, because refraction depends on the index contrast. Reflection does not." },
            { "label": "0.75<i>f</i>", "nudge": "Same lens reflex, applied the other way up. Ask what physical process at the mirror surface could possibly care about the water." },
            { "label": "2<i>f</i>", "nudge": "A random scaling with no formula behind it. <i>f</i> = <i>R</i>/2 has no place for a refractive index at all." }
          ],
          "correct": 0,
          "solution": "A mirror's focal length is <i>f</i> = <i>R</i>/2, which is pure geometry: it depends on how the glass was ground and on nothing else. No refractive index appears anywhere, so the surrounding medium is irrelevant, and so is the colour of the light. That last point is worth keeping: mirrors show no chromatic aberration, which is the reason every giant telescope in Topic 06 uses one."
        },
        {
          "t": "mcq",
          "q": "An object moves from far away towards the focus of a concave mirror. As it does, the real image:",
          "opts": [
            { "label": "moves towards the mirror and shrinks", "nudge": "Exactly backwards. Check the two limits: at infinity the image is at <i>F</i>, and at <i>F</i> it is at infinity, so it must move outwards, not inwards." },
            { "label": "moves away from the mirror and grows without bound", "nudge": null },
            { "label": "stays fixed at the focus", "nudge": "Confusing one special case, rays from infinity focusing at <i>F</i>, with every object position. The focus is where <b>parallel</b> light converges, not where images live." },
            { "label": "moves to <i>C</i> and stays the same size", "nudge": "That describes the single instant when the object passes through <i>C</i>, not the whole journey." }
          ],
          "correct": 1,
          "solution": "Start at infinity: 1/<i>u</i> = 0 gives <i>v</i> = <i>f</i>, a tiny image at the focus. End at the focus: <i>u</i> = <i>f</i> gives 1/<i>v</i> = 0, so <i>v</i> runs to infinity. Between the two, the image marches steadily outwards and grows without bound. That is the projector and searchlight regime, and the two limiting cases settle the question with no algebra in between."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] An object 4 cm tall is placed 18 cm from a concave mirror of focal length 12 cm. Find the position, height and nature of the image.",
              "a": "<i>f</i> = −12 cm, <i>u</i> = −18 cm. 1/<i>v</i> = −1/12 + 1/18 = (−3 + 2)/36 = −1/36, so <i>v</i> = −36 cm. <i>m</i> = −<i>v</i>/<i>u</i> = −2, so <i>h</i>′ = −8 cm. The image is 36 cm in front of the mirror, 8 cm tall, real, inverted, magnified 2 times."
            },
            {
              "q": "[NEET] A convex rear-view mirror has a radius of curvature of 3.6 m. A bus is 9 m behind. How far behind the mirror does its image appear, and is it diminished?",
              "a": "Convex, so <i>f</i> = +1.8 m and <i>u</i> = −9 m. 1/<i>v</i> = 1/1.8 + 1/9 = 0.5556 + 0.1111 = 0.6667, so <i>v</i> = +1.5 m: 1.5 m behind the mirror, virtual. <i>m</i> = −<i>v</i>/<i>u</i> = +0.17, so yes, strongly diminished. That shrinking is the price of the wide field of view, and it is what the warning stamped on the mirror is about."
            },
            {
              "q": "[JEE Main] A concave mirror produces a real image five times the size of an object placed 24 cm from the pole. Find the focal length.",
              "a": "Real image means inverted, so <i>m</i> = −5, not +5. From <i>m</i> = −<i>v</i>/<i>u</i>, <i>v</i> = 5<i>u</i> = 5(−24) = −120 cm. Then 1/<i>f</i> = 1/<i>v</i> + 1/<i>u</i> = −1/120 − 1/24 = −6/120 = −1/20, so <i>f</i> = −20 cm, that is a concave mirror of focal length 20 cm."
            },
            {
              "q": "[JEE Main] Two plane mirrors are inclined at 60°, with a point object placed symmetrically between them. How many images are formed?",
              "a": "<i>N</i> = 360°/60° = 6, which is even, so the number of images is <i>N</i> − 1 = 5. The symmetric placement matters only when <i>N</i> is odd, and here it is not."
            },
            {
              "q": "[JEE Advanced] A plane mirror is rotated by 4° while the incident ray is held fixed. By what angle does the reflected ray turn, and how far does a reflected laser spot move on a screen 2.5 m away?",
              "a": "The reflected ray turns through twice the mirror's rotation: 2 × 4° = 8°. The spot shifts by 2.5 × tan 8° = 2.5 × 0.1405 = 0.35 m, that is 35 cm. This doubling is what makes an optical lever such a sensitive instrument: a tiny rotation becomes a large, easily measured displacement."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Dropping the sign convention.</b> Feeding in <i>u</i> = +25 cm instead of −25 cm flips the entire answer. Write the signed values on a separate line before the formula, every single time.",
            "<b>Getting the sign of <i>f</i> backwards.</b> Concave means <i>f</i> < 0, convex means <i>f</i> > 0. A surprising number of real image from a convex mirror answers trace back to one stray minus sign here.",
            "<b>Using <i>f</i> = <i>R</i>/2 blindly on a wide mirror.</b> It is a paraxial result. When a question mentions a large aperture or spherical aberration on purpose, it is only an approximation.",
            "<b>Mixing the three magnifications.</b> Lateral is −<i>v</i>/<i>u</i>, longitudinal is −<i>m</i><sup>2</sup>, areal is <i>m</i><sup>2</sup>. In velocity problems the axial part scales by <i>m</i><sup>2</sup> and the transverse part by |<i>m</i>|, never the same factor.",
            "<b>Reading a virtual image as a real one.</b> For a mirror, real means <i>v</i> < 0, in front. Positive <i>v</i> is behind the mirror and nothing arrives there. This flips over for lenses in Topic 04, which is why the rule to hold is where the light actually goes, not a memorised sign."
          ]
        },
        {
          "t": "protip",
          "html": "keep a one-line nature check ready and it kills two MCQ options before you compute anything. for a real object, a concave mirror gives a real inverted image <b>only</b> when the object lies beyond <i>F</i>. put it inside <i>F</i>, or use any convex mirror at all, and the image is guaranteed virtual, erect and diminished (or magnified, inside <i>F</i>). and when a question hands you <i>m</i>, do not solve for <i>v</i>: go straight to <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>)."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>i</i> = <i>r</i>, and the two rays and the normal are coplanar", "note": "angles from the normal, never from the surface" },
            { "f": "<i>f</i> = <i>R</i>/2. Concave: <i>f</i>, <i>R</i> < 0. Convex: <i>f</i>, <i>R</i> > 0. Real object: <i>u</i> < 0", "note": "the convention, in one line" },
            { "f": "1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>", "note": "the mirror formula ADDS. Real image means <i>v</i> < 0, in front" },
            { "f": "<i>m</i> = −<i>v</i>/<i>u</i> = <i>f</i>/(<i>f</i> − <i>u</i>); longitudinal −<i>m</i><sup>2</sup>, areal <i>m</i><sup>2</sup>", "note": "+ erect and virtual, − inverted and real" },
            { "f": "δ = 180° − 2<i>i</i>; rotate the mirror by θ and the ray turns 2θ", "note": "the optical lever" },
            { "f": "Two mirrors at θ: <i>N</i> = 360°/θ images. Newton: <i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <i>f</i><sup>2</sup>", "note": "<i>f</i> is medium- and colour-independent" }
          ],
          "aids": [
            "real is negative: for a mirror, real objects and real images both sit in front, where distances are negative",
            "concave caves in, convex bulges out. the steel spoon settles it in two seconds",
            "signs first, algebra second. write u, f and their signs on their own line before you touch the formula"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Refraction and Total Internal Reflection",
      "chip": "02 THE BEND",
      "kalam": "light slows down, so it turns, and past one angle it refuses to leave",
      "blocks": [
        {
          "t": "p",
          "html": "Imagine a marching band crossing at an angle from a paved road onto soft sand. The row does not stop, but the first foot to touch the sand slows while the player still on the road keeps marching fast, so the whole line <b>pivots</b>. Light does exactly this. Crossing from one transparent medium into another its <b>speed</b> changes, and if it meets the boundary at an angle the beam bends. That is <b>refraction</b>, and it is why a straw in a glass of nimbu paani looks snapped at the surface and why the bottom of a swimming pool always looks shallower than it is."
        },
        {
          "t": "def",
          "term": "Refractive index",
          "html": "How much a medium slows light: <i>n</i> = <i>c</i>/<i>v</i>, the speed of light in vacuum divided by its speed in the material. It is a pure number with no units, and it is never less than 1 for a real medium. Air is essentially 1, water is 1.33, ordinary crown glass is 1.5, and diamond a hefty 2.42. Bigger <i>n</i> means slower light and <b>stronger bending</b>.<br><br>The <b>relative</b> index of medium 2 with respect to medium 1 is <i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>, and reversing the pair reciprocates it: <i>n</i><sub>12</sub><i>n</i><sub>21</sub> = 1. That is the <b>principle of reversibility</b>, that a ray retraces its own path when reversed, and it quietly powers half the shortcuts in this chapter. The <i>c</i> here is the 3 × 10<sup>8</sup> m/s that Chapter 8 obtained from μ<sub>0</sub> and ε<sub>0</sub>; nothing about it is re-derived here. Coaching books often write μ for this quantity instead of <i>n</i>. Same thing."
        },
        {
          "t": "formula",
          "kicker": "Snell's law of refraction",
          "tag": "ANGLES FROM THE NORMAL",
          "main": "<i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>",
          "legend": [
            "<i>n</i><sub>1</sub> refractive index of the medium the light starts in, dimensionless",
            "<i>n</i><sub>2</sub> refractive index of the medium it enters, dimensionless",
            "<i>i</i> angle of incidence, measured from the <b>normal</b>, in degrees",
            "<i>r</i> angle of refraction, also from the normal, in degrees"
          ],
          "note": "Entering a <b>denser</b> medium (larger <i>n</i>) the ray bends <b>towards</b> the normal; entering a rarer one it bends away. Both angles are measured from the perpendicular, never from the surface: a ray described as at 30° to the surface has <i>i</i> = 60°, and that one slip wrecks otherwise perfect solutions. Snell's law is taken as experimental here; its proof from wavefronts belongs to Wave Optics."
        },
        {
          "t": "formula",
          "kicker": "What changes in the glass, and what does not",
          "tag": "ONE MARK, ASKED CONSTANTLY",
          "main": "<i>f</i> unchanged,  <i>v</i> = <i>c</i>/<i>n</i>,  λ = λ<sub>0</sub>/<i>n</i>",
          "legend": [
            "<i>f</i> frequency, in hertz, fixed by the <b>source</b> and by nothing else",
            "<i>v</i> speed in the medium, in m/s",
            "λ<sub>0</sub> wavelength in vacuum, in metres; λ is the wavelength inside the medium",
            "<i>n</i> refractive index of the medium, dimensionless"
          ],
          "note": "This is the Class 11 Waves rule applied without change: frequency belongs to the <b>source</b>, speed belongs to the <b>medium</b>, and <i>v</i> = <i>f</i>λ then forces the wavelength to shrink by the same factor the speed does. Colour is set by frequency, so a red laser stays red underwater even though its wavelength there is a quarter shorter. Also worth carrying: the <b>optical path length</b> is <i>n</i> times the geometric path, which is how far the light would have travelled in vacuum in the same time."
        },
        {
          "t": "p",
          "html": "Refraction stages a few quiet everyday tricks that boards ask about directly. The atmosphere's density, and so its refractive index, falls with altitude, so light from the rising or setting Sun bends gradually towards the Earth along its whole path. We therefore see the Sun about <b>two minutes before</b> it truly reaches the horizon at dawn and for roughly two minutes <b>after</b> it has set at dusk. Near the horizon the Sun looks visibly <b>flattened</b>, because its lower edge is lifted more than its upper one. And the same restless, fluctuating refraction in turbulent air makes <b>stars twinkle</b>, while the nearer, broader planets shine steadily: a planet is a small disc rather than a point, and its many points do not all flicker together."
        },
        {
          "t": "think",
          "html": "now flip the journey. picture a torch underwater, tilting slowly upward. going from dense to rare the ray bends away from the normal, so as you tilt, the refracted beam leans flatter and flatter against the surface. at one special angle it lies exactly along the surface. tilt a hair more and snell's law has no valid answer left to give, so nothing gets out at all."
        },
        {
          "t": "def",
          "term": "Total internal reflection",
          "html": "Past a certain angle of incidence, <b>all</b> of the light is reflected back into the denser medium and none of it escapes: a perfect mirror made out of nothing but a boundary. That special angle is the <b>critical angle</b> <i>C</i>, the one whose refracted ray grazes the surface at exactly 90°.<br><br>TIR has <b>two non-negotiable conditions</b>, and you must check both before hunting for any number. <b>(1)</b> The light must be travelling from a <b>denser to a rarer</b> medium, <i>n</i><sub>1</sub> > <i>n</i><sub>2</sub>. <b>(2)</b> The angle of incidence must <b>exceed</b> the critical angle, <i>i</i> > <i>C</i>. Miss either one and what you get is ordinary partial refraction, not total reflection."
        },
        {
          "t": "formula",
          "kicker": "The critical angle",
          "tag": "SMALL ANGLE MEANS BIG INDEX",
          "main": "sin <i>C</i> = <i>n</i><sub>rarer</sub>/<i>n</i><sub>denser</sub>,  and into air  sin <i>C</i> = 1/<i>n</i>",
          "legend": [
            "<i>C</i> critical angle, in degrees, measured from the normal inside the denser medium",
            "<i>n</i> refractive index of the denser medium when the other side is air, dimensionless"
          ],
          "note": "Read the formula backwards and it is a sanity rule you can use on sight: a <b>small</b> critical angle means a <b>large</b> index. Water at 1.33 gives <i>C</i> = 48.8°, crown glass at 1.5 gives 41.8°, and diamond at 2.42 gives 24.4°. If you ever compute an index below 1 for a real material, you have written <i>n</i> = sin <i>C</i> instead of sin <i>C</i> = 1/<i>n</i>."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "One boundary, four angles",
          "chips": ["INTO GLASS", "BELOW C", "AT C", "PAST C"],
          "captions": [
            "Air above, glass below, and a ray arriving at <i>i</i> = 45°. Entering the denser medium it bends <b>towards</b> the normal: sin <i>r</i> = sin 45°/1.5 = 0.471, so <i>r</i> = 28°. Every angle in all four frames is measured from the dashed normal, and every one was computed from Snell's law before it was drawn.",
            "Now send the ray the other way, from glass up into air, at <i>i</i> = 30°. It bends <b>away</b> from the normal: sin <i>r</i> = 1.5 sin 30° = 0.75, so <i>r</i> = 49°. Since 30° is less than the critical 41.8°, most of the light gets out. The faint dashed ray going back down is the partial reflection that always accompanies refraction.",
            "Tilt to <i>i</i> = 41.8°, the critical angle for this glass. The refracted ray now lies flat <b>along</b> the surface at <i>r</i> = 90°, the largest angle of refraction that exists. One more degree and Snell's law would need sin <i>r</i> greater than 1, which no angle can supply.",
            "At <i>i</i> = 60°, past the critical angle, there is no refracted ray at all and 100 per cent of the light turns back into the glass, obeying the ordinary law of reflection with the reflected angle equal to the incident one. Nothing is lost to a metal coating, which is why a totally reflecting prism beats a silvered mirror in binoculars and periscopes."
          ],
          "frames": [
            {
              "x": [-2.5, 2.5],
              "y": [-1.6, 1.6],
              "axes": "none",
              "segments": [
                { "from": [-2.3, 0], "to": [2.3, 0] },
                { "from": [0, -1.3], "to": [0, 1.3], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.2, 1.2], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [0.66, -1.24], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.5, "from": 90, "to": 135, "label": "i" },
                { "at": [0, 0], "r": 0.5, "from": 270, "to": 298, "label": "r" }
              ],
              "labels": [
                { "x": -1.7, "y": 0.35, "text": "air, n = 1" },
                { "x": -1.7, "y": -0.4, "text": "glass, n = 1.5" }
              ]
            },
            {
              "x": [-2.5, 2.5],
              "y": [-1.6, 1.6],
              "axes": "none",
              "segments": [
                { "from": [-2.3, 0], "to": [2.3, 0] },
                { "from": [0, -1.3], "to": [0, 1.3], "dash": true, "soft": true },
                { "from": [0, 0], "to": [0.75, -1.3], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-0.75, -1.3], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [1.13, 0.99], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.5, "from": 240, "to": 270, "label": "i" },
                { "at": [0, 0], "r": 0.5, "from": 41, "to": 90, "label": "r" }
              ],
              "labels": [
                { "x": -1.75, "y": 0.45, "text": "air" },
                { "x": -1.75, "y": -0.5, "text": "glass" }
              ]
            },
            {
              "x": [-2.5, 2.5],
              "y": [-1.6, 1.6],
              "axes": "none",
              "segments": [
                { "from": [-2.3, 0], "to": [0, 0] },
                { "from": [0, -1.3], "to": [0, 1.3], "dash": true, "soft": true },
                { "from": [0, 0], "to": [1.0, -1.12], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.0, -1.12], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [2.0, 0], "tone": "amber", "label": "r = 90", "at": "above" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.55, "from": 228, "to": 270, "label": "C" }
              ],
              "labels": [
                { "x": -1.8, "y": 0.5, "text": "air" },
                { "x": -1.8, "y": -0.55, "text": "glass" }
              ]
            },
            {
              "x": [-2.5, 2.5],
              "y": [-1.6, 1.6],
              "axes": "none",
              "segments": [
                { "from": [-2.3, 0], "to": [2.3, 0] },
                { "from": [0, -1.3], "to": [0, 1.3], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.39, -0.8], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [1.39, -0.8], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.55, "from": 210, "to": 270, "label": "i" },
                { "at": [0, 0], "r": 0.55, "from": 270, "to": 330, "label": "i" }
              ],
              "labels": [
                { "x": 1.0, "y": 0.75, "text": "no ray gets out" },
                { "x": -1.8, "y": -0.55, "text": "glass" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Where total internal reflection shows up",
          "tag": "NEET LOVES THESE",
          "rows": [
            { "k": "A diamond's sparkle", "v": "<i>C</i> = 24.4° is so small that almost every internal face reflects, so light ricochets inside before escaping in flashes" },
            { "k": "A highway mirage", "v": "Hot air near the road is less dense, so skylight bends upward into TIR and the road looks wet" },
            { "k": "Snell's window", "v": "Look up from underwater and the whole 180° world above is squeezed into a bright circle of half-angle <i>C</i> = 48.8°" },
            { "k": "Optical fibres", "v": "Light is trapped in the core by repeated TIR at the core-cladding wall and guided for kilometres" },
            { "k": "Prisms in binoculars", "v": "A 45° glass prism (<i>C</i> = 41.8°) reflects 100 per cent, with no coating to absorb, tarnish or ghost" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "The critical angle, and why the direction matters",
          "steps": [
            {
              "eq": "n sin i = (1) sin r",
              "why": "Light passing from a denser medium of index <i>n</i> out into air. As <i>i</i> grows so does <i>r</i>, and the refracted ray leans further from the normal."
            },
            {
              "eq": "r cannot exceed 90 degrees",
              "why": "The largest angle of refraction that physically exists is a ray grazing along the surface. There is nowhere further for it to go."
            },
            {
              "eq": "n sin C = sin 90 = 1  ⇒  sin C = 1/n",
              "why": "Put <i>i</i> = <i>C</i> and <i>r</i> = 90° into Snell's law. This defines the critical angle."
            },
            {
              "eq": "i > C would need sin r > 1",
              "why": "Beyond <i>C</i>, Snell's law demands a sine greater than 1, which is impossible, so no refracted ray can exist and every bit of the light is reflected. This is also <b>why</b> the denser-to-rarer direction is required: only then is sin <i>r</i> bigger than sin <i>i</i>, so only then can it run into the wall at 1."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "Apparent depth, and the shift a slab makes",
          "steps": [
            {
              "eq": "n sin θ₁ = sin θ₂",
              "why": "A point object <i>O</i> lies at real depth <i>d</i> in a medium of index <i>n</i>, viewed from directly above. A ray from <i>O</i> meets the surface a small horizontal distance <i>x</i> away, making θ<sub>1</sub> inside and θ<sub>2</sub> in air."
            },
            {
              "eq": "paraxial: sin θ ≈ tan θ,  so  n tan θ₁ = tan θ₂",
              "why": "Near-normal viewing only. Look at the pool steeply from the side and this step fails, which is why the result carries that condition."
            },
            {
              "eq": "tan θ₁ = x/d,  tan θ₂ = x/d′",
              "why": "Straight off the geometry: <i>d</i> is the real depth and <i>d</i>′ the depth the backward extensions of the emerging rays appear to come from."
            },
            {
              "eq": "n(x/d) = x/d′  ⇒  d′ = d/n",
              "why": "The <i>x</i> cancels, which is what makes the result independent of exactly which paraxial ray you picked. The object appears <b>raised</b> by <i>d</i> − <i>d</i>′ = <i>d</i>(1 − 1/<i>n</i>)."
            },
            {
              "eq": "Δ = t(1 − 1/n)",
              "why": "Run the same algebra for a slab of thickness <i>t</i> lying over an object and you get the <b>normal shift</b>: the slab appears to lift whatever is underneath it by this much. Note that (1 − 1/<i>n</i>) is always less than 1, so a slab can never raise a mark by more than its own thickness."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "Shifts through flat glass and water",
          "tag": "THREE FORMULAS, ONE FAMILY",
          "main": "<i>d</i>′ = <i>d</i>/<i>n</i>,  Δ = <i>t</i>(1 − 1/<i>n</i>),  lateral <i>s</i> = <i>t</i> sin(<i>i</i> − <i>r</i>)/cos <i>r</i>",
          "legend": [
            "<i>d</i> real depth and <i>d</i>′ apparent depth, in metres, for near-normal viewing only",
            "Δ normal shift, in metres, by which a slab of thickness <i>t</i> appears to lift what lies beneath it",
            "<i>t</i> slab thickness, in metres; <i>n</i> its refractive index, dimensionless",
            "<i>s</i> lateral shift, in metres: the sideways displacement of a ray that has crossed a slab"
          ],
          "note": "The two faces of a parallel slab are parallel, so the second bend exactly undoes the first and the emergent ray comes out <b>parallel</b> to the incident one, merely shifted sideways. That is the whole difference between a slab and the prism of Topic 05, whose faces are not parallel and whose bends therefore add. The shift grows with thickness, with incidence angle and with index: a thick dense slab at a steep angle displaces the beam most."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "How a fibre traps light",
          "chips": ["THE ACCEPTANCE CONE", "GUIDED BY TIR"],
          "captions": [
            "Light entering the flat end face refracts into the core. A ray arriving at θ to the axis becomes a ray at α inside, with sin α = sin θ/<i>n</i><sub>1</sub>: for <i>n</i><sub>1</sub> = 1.5 and θ = 20°, α = 13°. The two drawn rays are the edges of the cone the fibre will accept, and the sine of that half-angle is the fibre's <b>numerical aperture</b>.",
            "Inside, the ray meets the core-cladding wall at (90° − α) to that wall's normal, which for α = 13° is 77°: far beyond the critical angle for a glass-to-glass pair with indices as close as 1.50 and 1.46. So it reflects, and reflects again, and is guided for kilometres with nothing lost to a coating. Send the light in outside the acceptance cone and α is too large, the wall angle drops below <i>C</i>, and the light leaks straight out into the cladding."
          ],
          "frames": [
            {
              "x": [-1, 5],
              "y": [-1.4, 1.4],
              "aspect": 0.55,
              "axes": "none",
              "polys": [
                { "pts": [[0, 0.5], [4.5, 0.5], [4.5, 0.8], [0, 0.8]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[0, -0.5], [4.5, -0.5], [4.5, -0.8], [0, -0.8]], "close": true, "fill": "hatch", "tone": "soft" }
              ],
              "segments": [
                { "from": [0, -0.8], "to": [0, 0.8] },
                { "from": [0.15, 0], "to": [4.5, 0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-0.95, 0.35], "to": [0, 0], "tone": "amber" },
                { "from": [-0.95, -0.35], "to": [0, 0], "tone": "amber" },
                { "from": [0, 0], "to": [2.14, 0.5], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 0], "r": 0.55, "from": 160, "to": 180, "label": "θ" },
                { "at": [0, 0], "r": 0.9, "from": 0, "to": 13, "label": "α" }
              ],
              "labels": [
                { "x": 3.9, "y": 1.1, "text": "cladding" }
              ]
            },
            {
              "x": [-1, 5],
              "y": [-1.4, 1.4],
              "aspect": 0.55,
              "axes": "none",
              "polys": [
                { "pts": [[0, 0.5], [4.5, 0.5], [4.5, 0.8], [0, 0.8]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[0, -0.5], [4.5, -0.5], [4.5, -0.8], [0, -0.8]], "close": true, "fill": "hatch", "tone": "soft" },
                { "pts": [[0, 0], [2.14, 0.5], [4.28, -0.5], [4.5, -0.4]], "tone": "amber" }
              ],
              "segments": [
                { "from": [0, -0.8], "to": [0, 0.8] },
                { "from": [2.14, 0.5], "to": [2.14, 0.05], "dash": true, "soft": true }
              ],
              "arcs": [
                { "at": [2.14, 0.5], "r": 0.45, "from": 270, "to": 332, "label": "past C" }
              ],
              "labels": [
                { "x": 2.3, "y": -1.1, "text": "each bounce is TIR" },
                { "x": 3.9, "y": 1.1, "text": "cladding" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "Numerical aperture, and the cone of escape",
          "tag": "JEE ADVANCED FAVOURITE",
          "main": "NA = sin θ<sub>max</sub> = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>),  <i>s</i> = <i>h</i>/√(<i>n</i><sup>2</sup> − 1)",
          "legend": [
            "<i>n</i><sub>1</sub> core index and <i>n</i><sub>2</sub> cladding index, both dimensionless, with <i>n</i><sub>1</sub> the larger",
            "θ<sub>max</sub> acceptance half-angle in air, in degrees",
            "<i>h</i> depth of a point source below a water surface, in metres",
            "<i>s</i> radius of the bright circle of escaping light on the surface, in metres"
          ],
          "note": "Two faces of one idea. The fibre formula asks which rays get <b>trapped</b>; the cone-of-escape formula asks which get <b>out</b>. A lamp at the bottom of a pool lights a disc of radius <i>h</i> tan <i>C</i> on the surface and outside that circle the surface acts as a mirror, showing you the pool floor. Looked at from underneath, that same circle is Snell's window."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A coin lies at the bottom of a beaker of water (<i>n</i> = 4/3) at a depth of 24 cm. Looking straight down, how deep does it appear, and by how much does it seem to rise?",
          "steps": [
            "Apparent depth: <i>d</i>′ = <i>d</i>/<i>n</i> = 24/(4/3) = 24 × 3/4 = 18 cm.",
            "Apparent rise: <i>d</i> − <i>d</i>′ = 24 − 18 = 6 cm.",
            "Cross-check with the shift form: <i>d</i>(1 − 1/<i>n</i>) = 24(1 − 3/4) = 6 cm."
          ],
          "ans": "The coin appears 18 cm below the surface, raised by 6 cm. Both routes agree, which is the check worth doing whenever a question offers you two formulas from the same family."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A ray inside a glass block strikes the glass-air face at 45°. For which glass does it undergo total internal reflection? (a) <i>n</i> = 1.30 (b) <i>n</i> = 1.40 (c) <i>n</i> = 1.50 (d) it never can.",
          "steps": [
            "Do not compute a critical angle three times. TIR at 45° needs 45° > <i>C</i>, which means sin 45° > sin <i>C</i> = 1/<i>n</i>.",
            "So 1/√2 > 1/<i>n</i>, which rearranges to <i>n</i> > √2 = 1.414.",
            "Compare each option to 1.414 at a glance. Only 1.50 clears the bar."
          ],
          "ans": "Option (c). The 45° totally-reflecting prism condition, <i>n</i> > √2, is worth memorising outright: it turns a three-part calculation into one comparison, and it is why ordinary crown glass at 1.5 works in binoculars while a cheaper low-index glass would not."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A ray is incident at 60° on a parallel-sided glass slab of refractive index √3 and thickness 9 cm. Find the angle of refraction and the lateral shift of the emergent beam.",
          "steps": [
            "Snell at the first face: sin 60° = √3 sin <i>r</i>, so sin <i>r</i> = (√3/2)/√3 = 1/2 and <i>r</i> = 30°.",
            "Lateral shift: <i>s</i> = <i>t</i> sin(<i>i</i> − <i>r</i>)/cos <i>r</i> = 9 × sin 30°/cos 30°.",
            "That is 9 × (1/2)/(√3/2) = 9/√3 = 3√3 = 5.20 cm."
          ],
          "ans": "<i>r</i> = 30° and the beam is displaced sideways by 5.20 cm, still travelling parallel to its original direction. Notice the clean collapse: whenever <i>i</i> − <i>r</i> happens to equal <i>r</i>, the whole expression becomes <i>t</i> tan <i>r</i>, which is a useful flag that the geometry has simplified."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A step-index fibre has a core of index 1.50 and cladding of index 1.46. Derive and evaluate the acceptance angle, the largest half-angle of the cone of light entering from air that the fibre will guide.",
          "steps": [
            "Two interfaces, taken in order. At the end face, air to core: sin θ = <i>n</i><sub>1</sub> sin α, where α is the angle to the axis inside the core.",
            "At the wall, the ray meets the core-cladding normal at (90° − α). Guiding needs that to be at least the critical angle for the pair: 90° − α ≥ <i>C</i>, with sin <i>C</i> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>.",
            "At the limit, α = 90° − <i>C</i>, so sin α = cos <i>C</i> = √(1 − <i>n</i><sub>2</sub><sup>2</sup>/<i>n</i><sub>1</sub><sup>2</sup>).",
            "Substitute back: sin θ<sub>max</sub> = <i>n</i><sub>1</sub>√(1 − <i>n</i><sub>2</sub><sup>2</sup>/<i>n</i><sub>1</sub><sup>2</sup>) = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>) = NA.",
            "Evaluate: √(1.50<sup>2</sup> − 1.46<sup>2</sup>) = √(2.25 − 2.1316) = √0.1184 = 0.344."
          ],
          "ans": "NA = 0.344, so θ<sub>max</sub> = 20.1°. Only rays entering within about a 20° half-cone of the axis are trapped and guided, which is exactly why fibre connectors have to be aligned so precisely. The elegance is that a messy two-interface chain collapses into one compact difference of squares."
        },
        {
          "t": "mcq",
          "q": "A ray passes from medium 1 into medium 2 and bends <b>towards</b> the normal. Which statement is certainly true?",
          "opts": [
            { "label": "<i>v</i><sub>1</sub> is less than <i>v</i><sub>2</sub>", "nudge": "Backwards. In the denser medium light is slower, so <i>v</i><sub>2</sub> is less than <i>v</i><sub>1</sub>. Bending towards the normal is the signature of slowing down." },
            { "label": "medium 2 is optically denser", "nudge": null },
            { "label": "the frequency increases in medium 2", "nudge": "Frequency never changes on refraction. It is set by the source and nothing at a boundary can alter it." },
            { "label": "the wavelength increases in medium 2", "nudge": "The opposite: λ = λ<sub>0</sub>/<i>n</i>, so in a denser medium the wavelength shrinks. Choosing this or the frequency option signals the everything-changes misconception." }
          ],
          "correct": 1,
          "solution": "Bending towards the normal means <i>r</i> is less than <i>i</i>, so by Snell's law <i>n</i><sub>2</sub> is greater than <i>n</i><sub>1</sub>: medium 2 is denser. Then the speed falls and, since the frequency is fixed by the source, the wavelength falls with it in the same ratio."
        },
        {
          "t": "mcq",
          "q": "Total internal reflection can occur when light travels from:",
          "opts": [
            { "label": "air to glass", "nudge": "Rarer to denser. The ray bends towards the normal and can always get through, so no critical angle exists in this direction at all." },
            { "label": "air to water", "nudge": "Also rarer to denser. Check the direction before you check any angle." },
            { "label": "glass to water", "nudge": null },
            { "label": "water to glass", "nudge": "The trap for students who memorise the words glass and water without tracking which comes first. Water at 1.33 into glass at 1.5 is rarer to denser." }
          ],
          "correct": 2,
          "solution": "TIR needs denser to rarer. Glass at about 1.5 going into water at about 1.33 qualifies, with sin <i>C</i> = 1.33/1.5 = 0.887 and <i>C</i> = 62.5°. The other three all run rarer to denser, where the ray bends towards the normal and always has a legal refracted direction available."
        },
        {
          "t": "mcq",
          "q": "The critical angle for a medium with respect to air is 30°. Its refractive index is:",
          "opts": [
            { "label": "0.5", "nudge": "This is <i>n</i> = sin <i>C</i>, the formula written upside down. An index below 1 for a real material should be impossible on sight, because it would mean light travels faster in the medium than in vacuum." },
            { "label": "√3", "nudge": "Comes from using cos 30° or tan 30° somewhere. Write sin <i>C</i> = 1/<i>n</i> out in full and there is no room for either." },
            { "label": "2", "nudge": null },
            { "label": "2/√3", "nudge": "1/cos 30° rather than 1/sin 30°. The critical-angle relation involves the sine only, because it comes from putting sin 90° = 1 on the far side of Snell's law." }
          ],
          "correct": 2,
          "solution": "sin <i>C</i> = 1/<i>n</i> gives <i>n</i> = 1/sin 30° = 1/0.5 = 2. Check it against the standing rule: a small critical angle means a large index, and 30° is smaller than glass's 42°, so this material must be denser than glass. An index of 2 sits sensibly between glass at 1.5 and diamond at 2.42."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Light travels from air into glass of refractive index 1.5. With <i>c</i> = 3 × 10<sup>8</sup> m/s, find its speed and its wavelength inside the glass for light of vacuum wavelength 600 nm.",
              "a": "<i>v</i> = <i>c</i>/<i>n</i> = 3 × 10<sup>8</sup>/1.5 = 2 × 10<sup>8</sup> m/s. λ = λ<sub>0</sub>/<i>n</i> = 600/1.5 = 400 nm. The frequency is unchanged at <i>c</i>/λ<sub>0</sub> = 5 × 10<sup>14</sup> Hz, and you can confirm the pair with <i>v</i> = <i>f</i>λ: (5 × 10<sup>14</sup>)(400 × 10<sup>−9</sup>) = 2 × 10<sup>8</sup> m/s."
            },
            {
              "q": "[NEET] The critical angle for a glass-air interface is 42°. Will a ray inside the glass be totally internally reflected if it strikes the surface at 40°? At 50°? One line for each.",
              "a": "At 40°: no. It is less than <i>C</i>, so the ray refracts out (partly), with only a partial reflection staying behind. At 50°: yes. It exceeds <i>C</i> and the direction is denser to rarer, so both conditions are met and all of the light turns back."
            },
            {
              "q": "[JEE Main] A microscope is focused on a mark on a table. A glass slab 6 cm thick (<i>n</i> = 1.5) is laid over the mark. By how much must the microscope be raised to refocus?",
              "a": "The slab lifts the mark by the normal shift Δ = <i>t</i>(1 − 1/<i>n</i>) = 6(1 − 2/3) = 2 cm, so raise the microscope by 2 cm. Note it is the shift, not the apparent depth, that the microscope has to follow."
            },
            {
              "q": "[JEE Main] A ray strikes a 4 cm thick parallel glass slab (<i>n</i> = 1.5) at 60°. Find the lateral displacement of the emergent ray.",
              "a": "sin <i>r</i> = sin 60°/1.5 = 0.866/1.5 = 0.577, so <i>r</i> = 35.3°. Then <i>s</i> = <i>t</i> sin(<i>i</i> − <i>r</i>)/cos <i>r</i> = 4 sin 24.7°/cos 35.3° = 4(0.418)/0.816 = 2.05 cm."
            },
            {
              "q": "[JEE Advanced] A small lamp lies at the bottom of a pool of water (<i>n</i> = 4/3) 2.0 m deep. Find the radius and area of the bright circle seen on the surface, outside which the surface looks like a mirror.",
              "a": "<i>s</i> = <i>h</i>/√(<i>n</i><sup>2</sup> − 1) = 2.0/√(16/9 − 1) = 2.0/√(7/9) = 6/√7 = 2.27 m. Area = π<i>s</i><sup>2</sup> = π(2.27)<sup>2</sup> = 16.2 m<sup>2</sup>. Everything outside that circle meets the surface past the critical angle 48.6°, so it is totally internally reflected back down."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Measuring angles from the surface instead of the normal.</b> A ray at 30° to the surface has <i>i</i> = 60°. This single slip has wrecked more otherwise perfect solutions than any other in the topic.",
            "<b>Forgetting the direction requirement for TIR.</b> It is impossible from rarer to denser. Check the medium order <b>before</b> hunting for a critical angle, not after.",
            "<b>Inverting the critical-angle formula.</b> It is sin <i>C</i> = 1/<i>n</i>, never <i>n</i> = sin <i>C</i>. If your answer gives an index below 1 for a real material, you have flipped it.",
            "<b>Using apparent depth at a steep viewing angle.</b> <i>d</i>′ = <i>d</i>/<i>n</i> is a near-normal result. Look into the pool from the side and you need the full Snell geometry instead.",
            "<b>Assuming everything changes on refraction.</b> Speed and wavelength change; <b>frequency does not</b>, and neither does colour."
          ]
        },
        {
          "t": "protip",
          "html": "two reflexes worth having by heart. one: for the standard 45° totally-reflecting prism, TIR happens if and only if <i>n</i> > √2 = 1.414, so never compute a per-case critical angle for that geometry again. two: relate <i>C</i> and <i>n</i> qualitatively, small <i>C</i> means large <i>n</i>, and you can kill MCQ options on sight, because a 24° critical angle simply <b>must</b> belong to something like diamond."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>n</i> = <i>c</i>/<i>v</i>; <i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>; <i>n</i><sub>12</sub><i>n</i><sub>21</sub> = 1", "note": "reversibility: a ray retraces its own path" },
            { "f": "<i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>", "note": "angles from the normal. Denser bends toward, rarer bends away" },
            { "f": "<i>f</i> fixed, λ = λ<sub>0</sub>/<i>n</i>", "note": "frequency belongs to the source, speed to the medium" },
            { "f": "<i>d</i>′ = <i>d</i>/<i>n</i>; Δ = <i>t</i>(1 − 1/<i>n</i>); <i>s</i> = <i>t</i> sin(<i>i</i> − <i>r</i>)/cos <i>r</i>", "note": "the first two need near-normal viewing" },
            { "f": "sin <i>C</i> = 1/<i>n</i>. TIR needs denser to rarer AND <i>i</i> > <i>C</i>", "note": "water 48.8°, glass 41.8°, diamond 24.4°" },
            { "f": "NA = sin θ<sub>max</sub> = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>); escape radius <i>h</i>/√(<i>n</i><sup>2</sup> − 1)", "note": "trapped inside, or out through the window" }
          ],
          "aids": [
            "slower means bends toward: entering the slower medium, the ray turns towards the normal",
            "denser to rarer, and over the critical: both boxes must be ticked or it is not TIR",
            "small angle, big index. a tiny critical angle can only belong to a very dense material"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Refraction at Spherical Surfaces and the Lens-Maker's Formula",
      "chip": "03 THE CURVE",
      "kalam": "one curved surface, done twice, is a lens",
      "blocks": [
        {
          "t": "p",
          "html": "Every refraction so far has happened at a <b>flat</b> boundary. But the most useful optical device there is, the lens, is built from <b>curved</b> refracting surfaces, so to understand a lens we first have to understand what one curved surface does, and then simply do it twice. Look at a fish through the rounded glass wall of an aquarium: it appears shifted and resized, because light from it refracts as it crosses that curved boundary. A curved surface bends each ray by a different amount depending on where it strikes, and the net effect is to gather the rays (or spread them) so they appear to come from a new point. An image."
        },
        {
          "t": "formula",
          "kicker": "Refraction at a single spherical surface",
          "tag": "THE PARENT OF EVERY LENS FORMULA",
          "main": "<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>,   <i>m</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>)",
          "legend": [
            "<i>n</i><sub>1</sub> index of the medium the light <b>starts</b> in, dimensionless",
            "<i>n</i><sub>2</sub> index of the medium it <b>enters</b>, dimensionless",
            "<i>u</i>, <i>v</i> object and image distances from the <b>pole</b> of the surface, in metres, signed by the Cartesian convention",
            "<i>R</i> radius of curvature of the surface, in metres, signed by where its centre lies",
            "<i>m</i> lateral magnification, dimensionless"
          ],
          "note": "Read the structure and you will not misremember it: the <b>image-side index over the image distance</b>, minus the object-side index over the object distance, equals the index jump over <i>R</i>. Refraction <b>subtracts</b>, exactly like the lens formula and unlike the mirror. The extra index ratio in <i>m</i>, absent in the mirror case, is there because the object and the image now sit in <b>different media</b>, so the angular sizes scale with the indices as well as with the distances."
        },
        {
          "t": "think",
          "html": "a flat surface is just a spherical one with <i>R</i> = infinity. put <i>R</i> to infinity in the relation and the whole right-hand side vanishes, leaving <i>n</i><sub>2</sub>/<i>v</i> = <i>n</i><sub>1</sub>/<i>u</i>, which rearranges into exactly the apparent-depth result you already proved in the last topic. so this formula does not replace what you learned. it generalises it, and curvature is precisely what lets a surface <b>focus</b> light instead of merely shifting it."
        },
        {
          "t": "def",
          "term": "The sign of a radius of curvature",
          "html": "Light is always taken as travelling left to right. For each surface in turn, ask one question: <b>on which side does its centre of curvature lie?</b> If the centre is on the <b>outgoing</b> (right) side, <i>R</i> is <b>positive</b>. If it is on the <b>incoming</b> (left) side, <i>R</i> is <b>negative</b>. A flat face has its centre infinitely far away, <i>R</i> = ∞, and contributes nothing.<br><br>Two consequences you will use in every lens-maker problem. A <b>biconvex</b> lens has <i>R</i><sub>1</sub> > 0 and <i>R</i><sub>2</sub> < 0. A <b>biconcave</b> lens has <i>R</i><sub>1</sub> < 0 and <i>R</i><sub>2</sub> > 0. And <i>R</i><sub>1</sub> always means the radius of the surface the light meets <b>first</b>, which is a matter of which way round the lens is facing, not of which face happens to be drawn first."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "One curved surface, and the flat limit",
          "chips": ["A CONVEX SURFACE", "R GOES TO INFINITY"],
          "captions": [
            "A convex surface separates a rarer medium <i>n</i><sub>1</sub> on the left from a denser <i>n</i><sub>2</sub> on the right, with its centre of curvature <i>C</i> on the outgoing side, so <i>R</i> is positive. A paraxial ray from the axial object <i>O</i> strikes the surface and refracts <b>towards</b> the dashed normal, which at any point of a spherical surface is simply the radius drawn from <i>C</i>. The refracted ray crosses the axis at the real image <i>I</i>. The pole <i>P</i> is where every distance in the formula is measured from.",
            "Now flatten the surface completely. With <i>R</i> = ∞ the relation collapses to <i>n</i><sub>2</sub>/<i>v</i> = <i>n</i><sub>1</sub>/<i>u</i>, so an object in water (<i>n</i><sub>1</sub> = 1.33) viewed from air appears at <i>v</i> = <i>u</i>/1.33, which is closer to the surface and on the <b>same side</b>. Going denser to rarer, the ray bends <b>away</b> from the normal, and only the dashed backward extension reaches <i>I</i>: nothing arrives there, so the image is virtual. This is apparent depth, recovered as a special case."
          ],
          "frames": [
            {
              "x": [-3.5, 3.5],
              "y": [-1.8, 1.8],
              "axes": "none",
              "polys": [
                { "pts": [[0.6, 1.5], [0.15, 0.8], [0, 0], [0.15, -0.8], [0.6, -1.5]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-3.2, 0], "to": [3.2, 0], "soft": true },
                { "from": [1.6, 0], "to": [-0.45, 1.13], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-2.4, 0], "to": [0.15, 0.8], "tone": "amber" },
                { "from": [0.15, 0.8], "to": [3.0, 0], "tone": "amber" }
              ],
              "points": [
                { "x": -2.4, "y": 0, "label": "O", "at": "sw" },
                { "x": 0, "y": 0, "label": "P", "at": "sw" },
                { "x": 1.6, "y": 0, "label": "C", "at": "se" },
                { "x": 3.0, "y": 0, "label": "I", "at": "se" }
              ],
              "labels": [
                { "x": -2.2, "y": 1.35, "text": "n₁" },
                { "x": 2.2, "y": 1.35, "text": "n₂" }
              ]
            },
            {
              "x": [-3.5, 3.5],
              "y": [-1.8, 1.8],
              "axes": "none",
              "segments": [
                { "from": [0, -1.5], "to": [0, 1.5] },
                { "from": [-3.2, 0], "to": [3.2, 0], "soft": true },
                { "from": [0, 0.5], "to": [-1.8, 0], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-2.4, 0], "to": [0, 0.5], "tone": "amber" },
                { "from": [0, 0.5], "to": [2.6, 1.35], "tone": "amber" }
              ],
              "points": [
                { "x": -2.4, "y": 0, "label": "O", "at": "sw" },
                { "x": -1.8, "y": 0, "label": "I", "at": "nw" },
                { "x": 0, "y": 0, "label": "P", "at": "se" }
              ],
              "labels": [
                { "x": -2.3, "y": 1.35, "text": "water" },
                { "x": 1.6, "y": 1.35, "text": "air" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "Refraction at a spherical surface, from three small angles",
          "steps": [
            {
              "eq": "i = α + θ  and  θ = r + β",
              "why": "A paraxial ray from an axial object <i>O</i> meets the surface at <i>M</i>, a small height above the axis, and refracts to the image <i>I</i>. Write α for angle <i>MOP</i>, β for angle <i>MIP</i>, θ for angle <i>MCP</i>. Both relations are the exterior-angle theorem, applied to triangle <i>OMC</i> and then to triangle <i>MIC</i>."
            },
            {
              "eq": "n₁ i = n₂ r",
              "why": "Snell's law linearised. For paraxial rays the angles are small enough that sin θ can be replaced by θ, which is the one approximation this whole topic rests on."
            },
            {
              "eq": "n₁(α + θ) = n₂(θ − β)  ⇒  n₁α + n₂β = (n₂ − n₁)θ",
              "why": "Substitute the two angle relations into Snell's law and collect terms. Nothing physical yet; this is where the geometry has been used up."
            },
            {
              "eq": "α ≈ h/(−u),  β ≈ h/v,  θ ≈ h/R",
              "why": "Small-angle values of the three angles, with <i>h</i> the height of <i>M</i> above the axis. The minus sign on <i>u</i> is the sign convention doing its work: <i>u</i> is negative for a real object, and α is a positive angle."
            },
            {
              "eq": "n₂/v − n₁/u = (n₂ − n₁)/R",
              "why": "Substitute and cancel the common <i>h</i>. That cancellation is what makes the result independent of which paraxial ray you chose, which is exactly why a sharp image forms at all. Derived here for a convex surface and a real image, it holds for every spherical refracting surface once the signs are applied consistently."
            }
          ]
        },
        {
          "t": "p",
          "html": "Now build a lens. A <b>thin lens</b> is two refracting surfaces back to back, glass in between and air (usually) outside. Light refracts once entering the glass and again leaving it. Apply the single-surface relation at each face, treat the image made by the first as the object for the second, and add the two results: almost everything cancels and what is left is the <b>lens-maker's formula</b>. It is a remarkable statement. The focal length of a lens, its entire optical personality, is fixed by only two things: the <b>material</b> and the <b>shape</b>. A lens grinder choosing a glass and a pair of curvatures is literally dialling in a focal length, which is where the formula gets its name."
        },
        {
          "t": "formula",
          "kicker": "The lens-maker's formula",
          "tag": "CBSE DERIVATION, ASKED EVERY YEAR",
          "main": "1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>)   in air",
          "legend": [
            "<i>f</i> focal length of the thin lens, in metres, positive for converging",
            "<i>n</i> refractive index of the lens material, dimensionless",
            "<i>R</i><sub>1</sub> radius of the surface the light meets first, in metres, signed",
            "<i>R</i><sub>2</sub> radius of the second surface, in metres, signed"
          ],
          "note": "In a medium rather than air, the factor (<i>n</i> − 1) becomes (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1), and every lens-dipped-in-liquid question is that one replacement. Note what the formula does <b>not</b> contain: the thickness, the diameter, and the object's position. It describes the lens, not the situation. Both this and the single-surface relation are <b>paraxial</b> and assume a <b>thin</b> lens, one whose thickness is negligible beside the distances and the radii."
        },
        {
          "t": "deriv",
          "kicker": "The lens-maker's formula, as two surfaces in series",
          "steps": [
            {
              "eq": "n/v₁ − 1/u = (n − 1)/R₁",
              "why": "Surface 1, air into glass. The object at <i>u</i> gives an intermediate image at <i>v</i><sub>1</sub>, which may be nowhere real; it is a bookkeeping position and nothing more."
            },
            {
              "eq": "1/v − n/v₁ = (1 − n)/R₂",
              "why": "Surface 2, glass back into air, with that intermediate image now acting as the <b>object</b>. Because the lens is thin, both refractions happen at effectively the same plane, so no distance has to be carried between them. This is the step the thin-lens assumption buys."
            },
            {
              "eq": "1/v − 1/u = (n − 1)(1/R₁ − 1/R₂)",
              "why": "Add the two equations. The <i>n</i>/<i>v</i><sub>1</sub> terms cancel exactly, which is the whole trick, and the intermediate image disappears from the answer."
            },
            {
              "eq": "1/v − 1/u = 1/f",
              "why": "Compare with the definition of the focal length: put the object at infinity, so 1/<i>u</i> = 0 and <i>v</i> = <i>f</i>. Matching the two right-hand sides gives 1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>), and it also hands you the thin-lens formula of Topic 04 for free."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Where the centre sits decides the sign",
          "chips": ["BICONVEX", "BICONCAVE", "PLANO-CONVEX"],
          "captions": [
            "Light runs left to right, so the left face is surface 1. Its centre of curvature <i>C</i><sub>1</sub> lies on the outgoing side, to the right, so <i>R</i><sub>1</sub> is positive. The right face bulges the other way, so its centre <i>C</i><sub>2</sub> lies back on the incoming side and <i>R</i><sub>2</sub> is negative. In the lens-maker's formula those two signs make 1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub> an addition, which is why a biconvex lens converges.",
            "The same lens turned inside out. Now the first surface caves in, so its centre sits back on the left and <i>R</i><sub>1</sub> is negative, while the second surface puts its centre out on the right, making <i>R</i><sub>2</sub> positive. Both terms flip, 1/<i>f</i> comes out negative, and the lens diverges. The shape rule (thicker in the middle converges, thinner in the middle diverges) is this arithmetic read off the picture.",
            "One flat face and one curved. A flat surface has its centre infinitely far away, so <i>R</i><sub>1</sub> = ∞ and its term 1/<i>R</i><sub>1</sub> is simply zero: it contributes no bending at all to a paraxial ray on the axis. Only the curved face counts, which is why a plano-convex lens of radius <i>R</i> has <i>f</i> = <i>R</i>/(<i>n</i> − 1), exactly twice the focal length of the equiconvex lens of the same radius."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-1.6, 1.6],
              "axes": "none",
              "polys": [
                { "pts": [[0.25, 1.0], [-0.1, 0.5], [-0.2, 0], [-0.1, -0.5], [0.25, -1.0]], "smooth": true, "tone": "ink" },
                { "pts": [[-0.25, 1.0], [0.1, 0.5], [0.2, 0], [0.1, -0.5], [-0.25, -1.0]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-2.8, 0], "to": [2.8, 0], "soft": true }
              ],
              "arrows": [
                { "from": [-2.6, 1.35], "to": [-1.6, 1.35], "tone": "soft", "label": "light", "at": "above" }
              ],
              "points": [
                { "x": 2.2, "y": 0, "label": "C1", "at": "ne" },
                { "x": -2.2, "y": 0, "label": "C2", "at": "nw" }
              ],
              "labels": [
                { "x": 1.5, "y": -1.15, "text": "R₁ > 0" },
                { "x": -1.5, "y": -1.15, "text": "R₂ < 0" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-1.6, 1.6],
              "axes": "none",
              "polys": [
                { "pts": [[-0.35, 1.0], [-0.12, 0.5], [-0.06, 0], [-0.12, -0.5], [-0.35, -1.0]], "smooth": true, "tone": "ink" },
                { "pts": [[0.35, 1.0], [0.12, 0.5], [0.06, 0], [0.12, -0.5], [0.35, -1.0]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-2.8, 0], "to": [2.8, 0], "soft": true },
                { "from": [-0.35, 1.0], "to": [0.35, 1.0] },
                { "from": [-0.35, -1.0], "to": [0.35, -1.0] }
              ],
              "arrows": [
                { "from": [-2.6, 1.35], "to": [-1.6, 1.35], "tone": "soft", "label": "light", "at": "above" }
              ],
              "points": [
                { "x": -2.2, "y": 0, "label": "C1", "at": "nw" },
                { "x": 2.2, "y": 0, "label": "C2", "at": "ne" }
              ],
              "labels": [
                { "x": -1.5, "y": -1.15, "text": "R₁ < 0" },
                { "x": 1.5, "y": -1.15, "text": "R₂ > 0" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-1.6, 1.6],
              "axes": "none",
              "polys": [
                { "pts": [[-0.15, 1.0], [0.2, 0.5], [0.3, 0], [0.2, -0.5], [-0.15, -1.0]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-2.8, 0], "to": [2.8, 0], "soft": true },
                { "from": [-0.15, -1.0], "to": [-0.15, 1.0] }
              ],
              "arrows": [
                { "from": [-2.6, 1.35], "to": [-1.6, 1.35], "tone": "soft", "label": "light", "at": "above" }
              ],
              "points": [
                { "x": -2.0, "y": 0, "label": "C2", "at": "nw" }
              ],
              "labels": [
                { "x": -1.3, "y": -1.15, "text": "R₁ = ∞" },
                { "x": 1.5, "y": -1.15, "text": "R₂ < 0" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two consequences are worth feeling in your bones before the algebra. First, <b>a lens's focal length depends on what surrounds it</b>. Dip a glass lens in water and the factor (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1) shrinks from 0.5 to about 0.125, so the lens becomes four times weaker. Push it further, to a lens made of glass sitting in a liquid of the <b>same</b> index, and it stops working as a lens at all: no index contrast, no refraction, no focusing. Second, and stranger, <b>the same shape can converge or diverge depending on the medium</b>. An air bubble trapped in water is shaped exactly like a convex lens but <b>diverges</b> light, because the lens is now rarer than its surroundings and every bend goes the other way."
        },
        {
          "t": "formula",
          "kicker": "Two shortcuts worth memorising",
          "tag": "SKIP THE SIGN BOOKKEEPING",
          "main": "<i>f</i> = <i>R</i>/(2(<i>n</i> − 1)),   <i>f</i><sub>medium</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>m</sub> − 1)",
          "legend": [
            "<i>R</i> the common magnitude of both radii of a symmetric (equiconvex or equiconcave) lens, in metres",
            "<i>n</i> index of the lens glass, dimensionless",
            "<i>n</i><sub>g</sub> index of the glass and <i>n</i><sub>m</sub> index of the surrounding medium, both dimensionless",
            "<i>f</i><sub>air</sub>, <i>f</i><sub>medium</sub> focal lengths in air and in the medium, in metres"
          ],
          "note": "The first form drops out of the lens-maker's formula for <i>R</i><sub>1</sub> = +<i>R</i> and <i>R</i><sub>2</sub> = −<i>R</i>, and it kills the commonest sign error outright. The second is a <b>ratio</b>, so the shape factor cancels and you never need the radii at all for a lens-in-liquid question. Watch its sign: once <i>n</i><sub>m</sub> exceeds <i>n</i><sub>g</sub> the denominator goes negative and the ratio does too, which is the algebra saying that a converging lens has turned into a diverging one."
        },
        {
          "t": "proc",
          "title": "Apply the radius sign convention",
          "steps": [
            "Draw the lens with the light travelling <b>left to right</b>, and label the face the light meets first as surface 1.",
            "For surface 1, ask where its centre of curvature sits. Right of the surface means <i>R</i><sub>1</sub> > 0; left means <i>R</i><sub>1</sub> < 0; flat means <i>R</i><sub>1</sub> = ∞ and the term is zero.",
            "Repeat, independently, for surface 2. Do not assume the second sign follows from the first: for a plano-convex lens one of them is infinite.",
            "Substitute <b>with signs</b> into 1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>). If the lens is in a liquid, replace (<i>n</i> − 1) by (<i>n</i><sub>g</sub>/<i>n</i><sub>m</sub> − 1) at this point and nowhere else.",
            "Check the answer against the shape. Thicker in the middle and denser than its surroundings must give <i>f</i> > 0; anything else means a sign went astray."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "One end of a long glass rod (<i>n</i> = 1.5) is polished into a convex surface of radius 10 cm. A small object sits in air on the axis, 50 cm from that end. Where is the image?",
          "steps": [
            "Signs first. <i>n</i><sub>1</sub> = 1 (air), <i>n</i><sub>2</sub> = 1.5 (glass), <i>u</i> = −50 cm. The centre of curvature is inside the rod, on the outgoing side, so <i>R</i> = +10 cm.",
            "1.5/<i>v</i> − 1/(−50) = 0.5/10 = 0.05.",
            "1.5/<i>v</i> = 0.05 − 0.02 = 0.03, so <i>v</i> = 1.5/0.03 = +50 cm."
          ],
          "ans": "A real image 50 cm inside the rod. The positive <i>v</i> is what tells you it lies on the outgoing side, where the light actually goes, so it is real even though it is buried in glass."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A biconvex lens has both faces of radius 20 cm and is made of glass with <i>n</i> = 1.5. Find its focal length.",
          "steps": [
            "Symmetric biconvex, so <i>R</i><sub>1</sub> = +20 cm and <i>R</i><sub>2</sub> = −20 cm. The second sign is the whole question.",
            "1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub> = 1/20 + 1/20 = 1/10.",
            "1/<i>f</i> = (1.5 − 1)(1/10) = 0.05, so <i>f</i> = 20 cm.",
            "Or go straight there: <i>f</i> = <i>R</i>/(2(<i>n</i> − 1)) = 20/(2 × 0.5) = 20 cm."
          ],
          "ans": "<i>f</i> = 20 cm, converging. The trap is treating <i>R</i><sub>2</sub> as positive: that turns the sum into a difference, gives 1/<i>f</i> = 0 and an infinite focal length, and the answer is wrong in a way that should look absurd rather than plausible."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "The lens above (<i>f</i> = 20 cm in air, <i>n</i><sub>g</sub> = 1.5) is fully immersed in water (<i>n</i><sub>w</sub> = 1.33). Find its new focal length.",
          "steps": [
            "Take the ratio of the two lens-maker expressions so the shape factor cancels and the radii never appear.",
            "<i>f</i><sub>water</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>w</sub> − 1) = 0.5/(1.5/1.33 − 1).",
            "1.5/1.33 = 1.128, so the denominator is 0.128 and the ratio is 0.5/0.128 = 3.9.",
            "<i>f</i><sub>water</sub> = 3.9 × 20 cm = 78 cm."
          ],
          "ans": "About 78 cm, so the lens is <b>nearly four times weaker</b> in water. (Take water as exactly 4/3 instead of 1.33 and the ratio is exactly 4, giving 80 cm.) Physically: the glass-to-water index contrast is about a quarter of the glass-to-air contrast, so each surface bends the light a quarter as much, and it takes four times the distance to bring the rays together."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A solid glass sphere of radius <i>R</i> and index 1.5 sits in air. A parallel beam travels along a diameter. Where does it come to a focus?",
          "steps": [
            "Surface 1, air to glass, radius +<i>R</i>, object at infinity: 1.5/<i>v</i><sub>1</sub> − 0 = 0.5/<i>R</i>, so <i>v</i><sub>1</sub> = 3<i>R</i> measured from surface 1.",
            "But surface 2 is only 2<i>R</i> away, the diameter. So that would-be image falls <i>R</i> <b>beyond</b> surface 2 and acts as a <b>virtual object</b> for it, at <i>u</i><sub>2</sub> = +<i>R</i>.",
            "Surface 2, glass to air. Its centre of curvature is now on the incoming side, so <i>R</i><sub>2</sub> = −<i>R</i>: 1/<i>v</i> − 1.5/<i>R</i> = (1 − 1.5)/(−<i>R</i>) = 0.5/<i>R</i>.",
            "1/<i>v</i> = 0.5/<i>R</i> + 1.5/<i>R</i> = 2/<i>R</i>, so <i>v</i> = <i>R</i>/2."
          ],
          "ans": "The beam focuses <i>R</i>/2 beyond the far surface: a glass sphere of index 1.5 focuses parallel light half a radius outside itself. Two things carry the whole problem, and both are worth stealing: the surfaces are a <b>diameter</b> apart, not a radius, and the radius sign <b>flips</b> at the second surface."
        },
        {
          "t": "mcq",
          "q": "The lens-maker's formula assumes the lens is:",
          "opts": [
            { "label": "thick and made of crown glass", "nudge": "Directly contradicts the derivation, which adds two surface results taken at the <b>same</b> plane. That step is only legal for a thin lens, and the glass type never enters at all beyond its index." },
            { "label": "thin, with paraxial rays", "nudge": null },
            { "label": "used only in water", "nudge": "The formula is stated in air and generalised to any medium by one substitution. Nothing about it is water-specific." },
            { "label": "silvered on one face", "nudge": "A silvered lens is a separate construction built on top of this formula, in Topic 04. It is not a condition for it." }
          ],
          "correct": 1,
          "solution": "Both assumptions do real work. <b>Thin</b> lets the two surface refractions be treated as happening at one plane, so no distance has to be carried between them and the intermediate image cancels. <b>Paraxial</b> is what allowed sin θ to be replaced by θ in the single-surface derivation this is built from. Break either one and you get aberrations rather than a single focal length."
        },
        {
          "t": "mcq",
          "q": "For refraction at a single spherical surface, the correct relation is:",
          "opts": [
            { "label": "<i>n</i><sub>1</sub>/<i>v</i> − <i>n</i><sub>2</sub>/<i>u</i> = (<i>n</i><sub>1</sub> − <i>n</i><sub>2</sub>)/<i>R</i>", "nudge": "The two indices are swapped. The image-side index goes with the image distance, and here they have been paired the wrong way round." },
            { "label": "<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>", "nudge": null },
            { "label": "1/<i>v</i> − 1/<i>u</i> = 1/<i>R</i>", "nudge": "Drops the indices entirely, which is a mirror-shaped guess. Without an index difference there is no refraction to describe." },
            { "label": "<i>n</i><sub>2</sub>/<i>v</i> + <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>", "nudge": "A plus sign, imported from the mirror formula. A very common cross-topic slip, and the reason the memory line is refraction subtracts, reflection adds." }
          ],
          "correct": 1,
          "solution": "Image-side index over image distance, minus object-side index over object distance, equals the index jump over <i>R</i>. Two structural checks kill the wrong options fast: putting <i>n</i><sub>1</sub> = <i>n</i><sub>2</sub> must make the right side zero and give <i>v</i> = <i>u</i> (no surface, no bending), and letting <i>R</i> go to infinity must return the apparent-depth relation. Only option (b) does both."
        },
        {
          "t": "mcq",
          "q": "An equiconvex lens is cut into two halves by a plane <b>containing</b> the principal axis. The focal length of each half is:",
          "opts": [
            { "label": "<i>f</i>/2", "nudge": "Confusing this with a transverse cut, and then halving rather than doubling. Two different mistakes stacked." },
            { "label": "<i>f</i>, unchanged", "nudge": null },
            { "label": "2<i>f</i>", "nudge": "That is the answer for a cut <b>perpendicular</b> to the axis, which makes two plano-convex lenses of doubled focal length. Read which plane the knife goes through." },
            { "label": "4<i>f</i>", "nudge": "No cut produces this. It usually comes from doubling twice, once for each surface." }
          ],
          "correct": 1,
          "solution": "Look at what the lens-maker's formula actually contains: <i>n</i>, <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>, and nothing else. A cut along the axis leaves both radii exactly as they were, so <i>f</i> is unchanged; each half is dimmer, because it collects half the light, but it focuses at the same place. A cut across the axis turns one biconvex lens into two plano-convex ones, replacing one radius by infinity and doubling <i>f</i>. Recognising which cut preserves the radii is the entire question."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A convex spherical surface of radius 15 cm separates air from glass (<i>n</i> = 1.5). An object in air is 30 cm from the surface. Find the image position.",
              "a": "1.5/<i>v</i> − 1/(−30) = 0.5/15 = 1/30, so 1.5/<i>v</i> = 1/30 − 1/30 = 0. The image is at <b>infinity</b>: the emergent beam is parallel. That is not a trick, it is a landmark. The object sits exactly at the surface's first focal point, <i>n</i><sub>1</sub><i>R</i>/(<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>) = 15/0.5 = 30 cm, and light from the first focus always leaves parallel."
            },
            {
              "q": "[NEET] A plano-convex lens of glass (<i>n</i> = 1.5) has its curved face of radius 25 cm. Find its focal length and power.",
              "a": "One face flat, so 1/<i>f</i> = 0.5(1/25) = 0.02 and <i>f</i> = 50 cm. Power is 1/<i>f</i> with <i>f</i> in <b>metres</b>: <i>P</i> = 1/0.50 = +2 D. Writing 1/50 and calling it 0.02 D is the classic dioptre error."
            },
            {
              "q": "[JEE Main] A double-concave lens of glass (<i>n</i> = 1.5) has both faces of radius 30 cm. Find its focal length, and say whether it converges or diverges.",
              "a": "<i>R</i><sub>1</sub> = −30 cm and <i>R</i><sub>2</sub> = +30 cm, so 1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub> = −1/30 − 1/30 = −1/15. Then 1/<i>f</i> = 0.5(−1/15) = −1/30 and <i>f</i> = −30 cm: diverging, as the shape already told you."
            },
            {
              "q": "[JEE Advanced] An equiconvex lens has focal length 15 cm in air (<i>n</i> = 1.5). What is its focal length in a liquid of index 1.6?",
              "a": "<i>f</i><sub>liq</sub>/<i>f</i><sub>air</sub> = 0.5/(1.5/1.6 − 1) = 0.5/(0.9375 − 1) = 0.5/(−0.0625) = −8, so <i>f</i><sub>liq</sub> = −120 cm. The sign flip is the answer: the glass is now <b>rarer</b> than its surroundings, so the converging lens has become a diverging one of focal length 120 cm."
            },
            {
              "q": "[JEE Advanced] A small air bubble is trapped inside a large block of glass (<i>n</i> = 1.5). Viewed through the nearest flat face, it appears 5 cm below the surface. Find its real depth.",
              "a": "Flat face, so the apparent depth relation applies with the object in the denser medium: apparent = real/<i>n</i>. Therefore real depth = <i>n</i> × apparent = 1.5 × 5 = 7.5 cm. Getting this upside down and dividing gives 3.3 cm, which would have the bubble appear <b>deeper</b> than it is, and refraction into a rarer medium never does that."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Getting <i>R</i><sub>2</sub> wrong.</b> For a biconvex lens <i>R</i><sub>1</sub> > 0 but <i>R</i><sub>2</sub> < 0. Treating both as positive collapses the formula to 1/<i>f</i> = 0. Decide each radius from where its own centre of curvature sits, every time.",
            "<b>Forgetting the medium hiding in (<i>n</i> − 1).</b> It is really (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1). Any lens-in-water question needs the ratio, not the bare (<i>n</i> − 1).",
            "<b>Mixing up <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub> at a single surface.</b> <i>n</i><sub>1</sub> is where the light starts and <i>n</i><sub>2</sub> is where it arrives, and the relation pairs the image-side index with <i>v</i>.",
            "<b>Using the mirror's plus sign.</b> Refraction relations <b>subtract</b> the object term; the mirror formula adds. Keep the two structures apart or every second answer will be wrong.",
            "<b>Separating the two surfaces of a sphere by <i>R</i> instead of 2<i>R</i>.</b> In any two-surface problem, the intermediate image distance must be measured again from the <b>second</b> pole, and for a sphere the poles are a diameter apart."
          ]
        },
        {
          "t": "protip",
          "html": "for a symmetric lens go straight to <i>f</i> = <i>R</i>/(2(<i>n</i> − 1)) and skip the sign bookkeeping entirely, and for any lens-in-liquid question use the ratio form, because the shape cancels and you never need the radii. and for a two-surface problem (sphere, rod, aquarium), write the method down before the numbers: image of surface 1 becomes object for surface 2, distances re-measured from the <b>second</b> pole, radius sign decided afresh. that habit is the whole of the advanced material, and the three places it is easiest to slip are the separation, the second radius's sign, and forgetting that an image landing past the second surface is a <b>virtual object</b> with positive <i>u</i>."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>", "note": "image-side index with the image distance. Refraction subtracts" },
            { "f": "<i>m</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>)", "note": "the index ratio appears because object and image sit in different media" },
            { "f": "1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>)", "note": "in a medium, replace (<i>n</i> − 1) by (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1)" },
            { "f": "Centre of curvature on the outgoing side means <i>R</i> > 0", "note": "biconvex: <i>R</i><sub>1</sub> > 0, <i>R</i><sub>2</sub> < 0. Flat: <i>R</i> = ∞" },
            { "f": "<i>f</i> = <i>R</i>/(2(<i>n</i> − 1)) for a symmetric lens", "note": "and <i>f</i> = <i>R</i>/(<i>n</i> − 1) for plano-convex, twice as long" },
            { "f": "<i>f</i><sub>medium</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>m</sub> − 1)", "note": "the lens weakens, and reverses once the medium is denser than the glass" }
          ],
          "aids": [
            "a flat surface is just R = infinity. curvature is what focuses, everything else only shifts",
            "refraction subtracts, reflection adds. one minus sign is the whole difference between the two families",
            "(n minus 1) hides the medium: it is really n of the lens over n of the surroundings, minus one"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Thin Lens, Power and Combinations",
      "chip": "04 THE LENS",
      "kalam": "mirror adds, lens subtracts, and dioptres are just one over f in metres",
      "blocks": [
        {
          "t": "p",
          "html": "A lens is a sculptor of wavefronts. A <b>convex</b> or <b>converging</b> lens is thicker in the middle, so it slows the central part of an arriving wavefront more than the edges and curls a flat wave inwards until the rays meet at the focus. A <b>concave</b> or <b>diverging</b> lens is thinner in the middle and does the reverse, spreading the rays as though they had sprung from a virtual focus in front. The magnifying glass, the camera, your spectacles and the eyepiece of every instrument in Topic 06 are all lenses doing exactly this."
        },
        {
          "t": "formula",
          "kicker": "The thin lens formula, and its magnification",
          "tag": "THE MOST IMPORTANT SIGN IN THE CHAPTER",
          "main": "1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>,   <i>m</i> = <i>h</i>′/<i>h</i> = <i>v</i>/<i>u</i>",
          "legend": [
            "<i>u</i> object distance from the optical centre, in metres, negative for a real object",
            "<i>v</i> image distance from the optical centre, in metres, <b>positive</b> for a real image",
            "<i>f</i> focal length, in metres, positive for converging and negative for diverging",
            "<i>m</i> lateral magnification, dimensionless: negative means inverted and real, positive means erect and virtual"
          ],
          "note": "Look hard at the two differences from the mirror. The lens formula <b>subtracts</b> the object term where the mirror adds it, and the lens magnification is <b>+</b><i>v</i>/<i>u</i> where the mirror's is −<i>v</i>/<i>u</i>. Both signs flip together, and they flip for one physical reason: a lens passes the light forwards, so a real image lands on the far side at positive <i>v</i>, while a mirror sends it back and puts a real image at negative <i>v</i>. Same convention, opposite geometry. In practice you will usually rearrange to 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i>, which is where the plus sign in the worked examples comes from."
        },
        {
          "t": "think",
          "html": "a convex lens behaves like a generous host. bring an object closer and closer from far away and the real image it throws marches outward and grows, racing to infinity just as the object reaches the focus. step the object <b>inside</b> the focus and the lens switches roles entirely: now it hands you a magnified, erect, virtual image on the same side, which is precisely magnifying-glass mode. a concave lens, by contrast, is utterly predictable and never does anything else at all."
        },
        {
          "t": "defgrid",
          "title": "Convex lens, real object: the whole catalogue",
          "tag": "THE MIRROR TABLE, ONE STEP OVER",
          "rows": [
            { "k": "Object at infinity", "v": "Image at <i>F</i>. Real, inverted, a point" },
            { "k": "Object beyond 2<i>F</i>", "v": "Image between <i>F</i> and 2<i>F</i>. Real, inverted, diminished" },
            { "k": "Object at 2<i>F</i>", "v": "Image at 2<i>F</i>. Real, inverted, same size" },
            { "k": "Object between <i>F</i> and 2<i>F</i>", "v": "Image beyond 2<i>F</i>. Real, inverted, magnified" },
            { "k": "Object at <i>F</i>", "v": "Image at infinity. The collimator, and the relaxed eye of Topic 06" },
            { "k": "Object inside <i>F</i>", "v": "Image on the <b>same</b> side. Virtual, erect, magnified" },
            { "k": "Any concave lens", "v": "Image between the lens and <i>F</i>, same side. Always virtual, erect, diminished" }
          ]
        },
        {
          "t": "diagram",
          "kind": "optics",
          "kicker": "Move the object, watch the image",
          "chips": ["BEYOND 2F", "AT 2F", "F TO 2F", "INSIDE F", "CONCAVE LENS"],
          "captions": [
            "Convex lens, <i>f</i> = +20 cm, object at <i>u</i> = −60 cm, beyond 2<i>F</i>. The reader solves 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i> = 1/30 and places the image at <i>v</i> = +30 cm with <i>m</i> = −0.5: real, inverted, diminished, between <i>F</i> and 2<i>F</i> on the far side. Two construction rays are drawn: parallel in and through the far focus out, and straight through the optical centre undeviated.",
            "Object at <i>u</i> = −40 cm, exactly 2<i>F</i>. The image returns to 2<i>F</i> on the other side, <i>v</i> = +40 cm with <i>m</i> = −1. Same size, inverted, real. This is the one lens position that copies an object exactly, and it is what a photocopier or a one-to-one relay is set to.",
            "Object at <i>u</i> = −30 cm, between <i>F</i> and 2<i>F</i>. Now <i>v</i> = +60 cm and <i>m</i> = −2. Compare the three chips so far: the object came in from 60 to 40 to 30 cm and the image went out from 30 to 40 to 60 cm and grew. Object and image have simply swapped places, which is the reversibility of light drawn as a picture, and it is the whole basis of the displacement method below.",
            "Object at <i>u</i> = −10 cm, inside the focus. The image jumps to <i>v</i> = −20 cm, on the <b>same</b> side as the object, drawn dashed because no light actually arrives there: <i>m</i> = +2, virtual, erect, magnified. This is the magnifying glass, and it is why a loupe has to be held close to what it is reading.",
            "Concave lens, <i>f</i> = −20 cm, object at <i>u</i> = −30 cm. <i>v</i> = −12 cm and <i>m</i> = +0.4: virtual, erect, diminished, tucked between the lens and its focus on the object's side. Move the object anywhere at all and none of those three words change, exactly like a convex mirror. The two are optical twins."
          ],
          "frames": [
            { "optics": { "element": "convexLens", "f": 20, "object": { "u": -60, "h": 6 } } },
            { "optics": { "element": "convexLens", "f": 20, "object": { "u": -40, "h": 6 } } },
            { "optics": { "element": "convexLens", "f": 20, "object": { "u": -30, "h": 6 } } },
            { "optics": { "element": "convexLens", "f": 20, "object": { "u": -10, "h": 6 } } },
            { "optics": { "element": "concaveLens", "f": -20, "object": { "u": -30, "h": 6 } } }
          ]
        },
        {
          "t": "proc",
          "title": "Locate a lens image by ray diagram",
          "steps": [
            "Draw the principal axis and the lens, and mark <i>F</i> and 2<i>F</i> on <b>both</b> sides. A lens has two foci, one on each side, and forgetting the far one is what makes the first ray impossible to draw.",
            "Ray 1: from the object's tip, <b>parallel to the axis</b>. It refracts through the <b>far</b> focus for a convex lens, or appears to diverge from the <b>near</b> focus for a concave one.",
            "Ray 2: from the tip, <b>through the optical centre</b>. It passes straight through, undeviated, because at the centre the two faces are parallel and the lens acts as a very thin slab.",
            "Ray 3: from the tip, <b>through the near focus</b>. It emerges parallel to the axis. This is Ray 1 reversed.",
            "Any two of the three fix the image; the third is a free check. If the refracted rays meet, the image is <b>real</b>, on the far side, and can be caught on a screen. If only their backward extensions meet, it is <b>virtual</b>, on the same side, and cannot."
          ]
        },
        {
          "t": "p",
          "html": "For practical work we rate a lens not by its focal length but by its <b>power</b>. A short focal length means strong bending, so power is defined as <i>P</i> = 1/<i>f</i> and measured in <b>dioptres</b> (D) when <i>f</i> is in <b>metres</b>. A +5 D lens has <i>f</i> = 20 cm and is twice as strong as a +2.5 D lens with <i>f</i> = 40 cm. The reason opticians use it rather than focal length is that <b>lenses in contact simply add their powers</b>, signs included: a prescription of −2.5 D specifies exactly the diverging power your eye needs to have subtracted, and a lens-maker can supply that by any combination of glass and curvature."
        },
        {
          "t": "formula",
          "kicker": "Power, in dioptres",
          "tag": "THE UNIT TRAP OF THE CHAPTER",
          "main": "<i>P</i> = 1/<i>f</i>   (<i>f</i> in metres)",
          "legend": [
            "<i>P</i> power of the lens, in dioptre (D), which is one <b>reciprocal metre</b>",
            "<i>f</i> focal length, in <b>metres</b>, positive for converging and negative for diverging"
          ],
          "note": "Every year, students compute a focal length in centimetres and report its reciprocal as a power. <i>f</i> = 20 cm is not 0.05 D; it is 0.20 m, so <i>P</i> = +5 D. Convert to metres first, every single time. The same 1/<i>f</i> also equals (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>) from Topic 03, so a lens's power is fixed by its glass and its grinding."
        },
        {
          "t": "formula",
          "kicker": "Lenses combined",
          "tag": "IN CONTACT, AND WITH A GAP",
          "main": "1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub>,  <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub>,  <i>m</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><br>separated by <i>d</i>:  <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> − <i>d P</i><sub>1</sub><i>P</i><sub>2</sub>",
          "legend": [
            "<i>F</i> focal length of the equivalent single lens, in metres",
            "<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub> the individual focal lengths, in metres, with their own signs",
            "<i>P</i><sub>1</sub>, <i>P</i><sub>2</sub> the individual powers, in dioptre",
            "<i>d</i> separation between the two lenses, in <b>metres</b>, so that <i>d P</i><sub>1</sub><i>P</i><sub>2</sub> is also in dioptre",
            "<i>m</i> total magnification: the two stages <b>multiply</b>, they do not add"
          ],
          "note": "The simple sum holds <b>only in contact</b>. With a finite gap you must subtract <i>d P</i><sub>1</sub><i>P</i><sub>2</sub>, and the dimensions tell you the term is right: a length times two reciprocal lengths is a reciprocal length. Keep <i>d</i> in metres alongside the powers, or the correction comes out a hundred times too big."
        },
        {
          "t": "deriv",
          "kicker": "Why powers add for lenses in contact",
          "steps": [
            {
              "eq": "1/v₁ − 1/u = 1/f₁",
              "why": "The object at <i>u</i> is imaged by the first lens at <i>v</i><sub>1</sub>. Nothing is assumed about whether that image is real; it may fall beyond the second lens and act as a virtual object."
            },
            {
              "eq": "1/v − 1/v₁ = 1/f₂",
              "why": "That image now serves as the object for the second lens, <b>at the same location</b>, because the lenses touch and the separation is zero. This is the one place the in-contact condition is used, and it is why the rule fails for a gap."
            },
            {
              "eq": "1/v − 1/u = 1/f₁ + 1/f₂",
              "why": "Add the two equations and the 1/<i>v</i><sub>1</sub> terms cancel, exactly as the intermediate image cancelled in the lens-maker derivation. The pair now behaves as one element with a single object distance and a single image distance."
            },
            {
              "eq": "1/F = 1/f₁ + 1/f₂  ⇔  P = P₁ + P₂",
              "why": "Compare with 1/<i>v</i> − 1/<i>u</i> = 1/<i>F</i> for a single equivalent lens. Extending to <i>N</i> lenses adds more terms and nothing else, and the magnifications chain as a product because each stage magnifies what the previous one produced."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "flow",
          "kicker": "Two elements, one chain",
          "chips": ["IMAGE BECOMES OBJECT", "A SILVERED LENS"],
          "captions": [
            "The single method behind every multi-element problem in this chapter, and in Topic 06. Solve the first element on its own; take the image it makes, wherever it lands; and treat that as the <b>object</b> for the next element, re-measuring its distance from the new element's own centre or pole. If it lands <b>beyond</b> the next element, it is a <b>virtual object</b> with positive <i>u</i>, and the formula handles that without complaint. The magnifications multiply along the chain.",
            "Silvering the back face of a lens makes three optical events in series, not one: the light refracts through the glass, reflects at the silvered surface, and refracts through the same glass again on the way out. So the lens power is counted <b>twice</b> and the mirror power once, giving <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>, and the whole thing then behaves as a single mirror of focal length 1/<i>P</i><sub>eq</sub>. In this one formula all three powers are counted converging-positive, which is a different register from the Cartesian signs used everywhere else."
          ],
          "frames": [
            {
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "object", "tone": "ink" },
                  { "id": "b", "col": 1, "row": 0, "text": "element 1", "tone": "amber" },
                  { "id": "c", "col": 1, "row": 1, "text": "image 1" },
                  { "id": "d", "col": 0, "row": 1, "text": "acts as object 2", "tone": "amber" },
                  { "id": "e", "col": 0, "row": 2, "text": "element 2" },
                  { "id": "f", "col": 1, "row": 2, "text": "final image", "tone": "ink" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "b", "to": "c" },
                  { "from": "c", "to": "d" },
                  { "from": "d", "to": "e" },
                  { "from": "e", "to": "f" }
                ]
              }
            },
            {
              "flow": {
                "boxes": [
                  { "id": "a", "col": 0, "row": 0, "text": "light enters", "tone": "ink" },
                  { "id": "b", "col": 1, "row": 0, "text": "refract: lens", "tone": "amber" },
                  { "id": "c", "col": 1, "row": 1, "text": "reflect: mirror" },
                  { "id": "d", "col": 0, "row": 1, "text": "refract: lens", "tone": "amber" },
                  { "id": "e", "col": 0, "row": 2, "text": "one equal mirror", "tone": "ink" }
                ],
                "links": [
                  { "from": "a", "to": "b" },
                  { "from": "b", "to": "c" },
                  { "from": "c", "to": "d" },
                  { "from": "d", "to": "e" }
                ]
              }
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "Two set pieces the exams love",
          "tag": "SILVERED LENS AND DISPLACEMENT",
          "main": "<i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>,   <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>)",
          "legend": [
            "<i>P</i><sub>eq</sub> power of the equivalent mirror, in dioptre, taken positive when converging",
            "<i>P</i><sub>lens</sub> power of the lens, counted twice because the light crosses the glass twice",
            "<i>P</i><sub>mirror</sub> power of the silvered face treated as a mirror, 2/<i>R</i> in magnitude",
            "<i>D</i> the fixed object-to-screen distance, in metres, and <i>d</i> the distance between the two lens positions that both give a sharp image",
            "<i>f</i> focal length of the lens, in metres"
          ],
          "note": "The displacement method is the school laboratory's way of measuring <i>f</i> without ever knowing where the lens's centre is, and it works because of the object-image swap you saw in the figure above: if a lens at one place images <i>u</i> to <i>v</i>, then moving it so that <i>u</i> and <i>v</i> exchange also gives a sharp image. Memorise the formula outright and a multi-step problem becomes one line."
        },
        {
          "t": "proc",
          "title": "Treat a silvered lens as one mirror",
          "steps": [
            "Compute the lens power from the lens-maker's formula, ignoring the silvering entirely. Use the <b>unsilvered</b> face's radius as <i>R</i><sub>1</sub> and the silvered one as <i>R</i><sub>2</sub>; the ordering does not change the magnitude.",
            "Compute the mirror power of the silvered face alone: <i>f</i><sub>mirror</sub> = <i>R</i>/2 in magnitude, so <i>P</i><sub>mirror</sub> = 2/<i>R</i>, counted positive when that face acts as a converging (concave) mirror to the light inside the glass. A silvered <b>flat</b> face is a plane mirror and contributes zero.",
            "Add them as <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>. The doubling is the physical content: the light passes through the glass on the way in and again on the way out.",
            "Invert to get <i>f</i><sub>eq</sub> = 1/<i>P</i><sub>eq</sub>, then treat the whole assembly as a single mirror of that focal length and finish with the ordinary mirror formula and its ordinary Cartesian signs."
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An object is placed 30 cm in front of a convex lens of focal length 20 cm. Find the position, magnification and nature of the image.",
          "steps": [
            "Signs first: <i>u</i> = −30 cm, <i>f</i> = +20 cm.",
            "Rearrange the lens formula: 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i> = 1/20 − 1/30 = (3 − 2)/60 = 1/60.",
            "<i>v</i> = +60 cm.",
            "<i>m</i> = <i>v</i>/<i>u</i> = 60/(−30) = −2."
          ],
          "ans": "A real image 60 cm on the far side, inverted, magnified 2 times. Cross-check it against the table: the object at 30 cm lies between <i>F</i> (20 cm) and 2<i>F</i> (40 cm), so the image must be beyond 2<i>F</i>, real, inverted and magnified. It is, at 60 cm."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An object is 30 cm in front of a concave lens of focal length 15 cm. Find the image.",
          "steps": [
            "Before any algebra: a concave lens <b>always</b> gives a virtual, erect, diminished image of a real object, so you already know <i>v</i> < 0 and 0 < <i>m</i> < 1.",
            "<i>f</i> = −15 cm (the sign is the trap), <i>u</i> = −30 cm.",
            "1/<i>v</i> = 1/(−15) + 1/(−30) = (−2 − 1)/30 = −1/10, so <i>v</i> = −10 cm.",
            "<i>m</i> = <i>v</i>/<i>u</i> = (−10)/(−30) = +1/3."
          ],
          "ans": "A virtual, erect image 10 cm from the lens on the object's side, one third the size. Students who plug in <i>f</i> = +15 cm get a spurious real image, and the always virtual, erect, diminished rule is the instant check: any option with a real image or |<i>m</i>| greater than 1 is wrong on sight."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. Find the focal length and power of the combination and state its nature.",
          "steps": [
            "In contact, so the focal lengths combine reciprocally with their signs: 1/<i>F</i> = 1/20 + 1/(−30) = (3 − 2)/60 = 1/60, giving <i>F</i> = +60 cm.",
            "In powers, converting to metres first: <i>P</i><sub>1</sub> = 1/0.20 = +5 D and <i>P</i><sub>2</sub> = 1/(−0.30) = −3.33 D.",
            "<i>P</i> = 5 − 3.33 = +1.67 D, and 1/1.67 = 0.60 m, which is the same 60 cm."
          ],
          "ans": "A converging combination of focal length 60 cm, <i>P</i> = +1.67 D. The convex lens wins because it is the stronger of the two, and adding signed powers in dioptres is both faster and harder to get wrong than juggling reciprocals."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A plano-convex lens of glass (<i>n</i> = 1.5) has its curved face of radius 20 cm, and that curved face is silvered. Find the focal length of the equivalent mirror.",
          "steps": [
            "Lens power. The light enters the flat face first, so <i>R</i><sub>1</sub> = ∞ and <i>R</i><sub>2</sub> = −20 cm: 1/<i>f</i><sub>lens</sub> = 0.5(0 + 1/20) = 1/40, so <i>f</i><sub>lens</sub> = 40 cm and <i>P</i><sub>lens</sub> = 1/0.40 = +2.5 D. Reversing the lens gives the same magnitude, so the ordering is not worth worrying about.",
            "Mirror power. Seen from inside the glass, the silvered convex face is a converging (concave) mirror of radius 20 cm, so <i>f</i><sub>mirror</sub> = 10 cm and <i>P</i><sub>mirror</sub> = 1/0.10 = +10 D.",
            "Combine, counting the lens twice: <i>P</i><sub>eq</sub> = 2(2.5) + 10 = 15 D.",
            "<i>f</i><sub>eq</sub> = 1/15 m = 6.67 cm."
          ],
          "ans": "The assembly behaves as a concave mirror of focal length 6.67 cm. The subtlety that makes this a JEE Advanced staple is the doubling: light traverses the glass on the way in and again on the way out, so <i>P</i><sub>lens</sub> enters twice. Check the shape of the answer: a silvered lens is always <b>stronger</b> than either of its parts, because all three powers reinforce."
        },
        {
          "t": "mcq",
          "q": "The thin lens formula is:",
          "opts": [
            { "label": "1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>", "nudge": "That is the <b>mirror</b> formula, and this is the highest-frequency cross-topic confusion in the whole chapter. Mirror adds, lens subtracts." },
            { "label": "1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>", "nudge": null },
            { "label": "1/<i>u</i> − 1/<i>v</i> = 1/<i>f</i>", "nudge": "The subtraction is the right way round only if you also flip the sign of <i>f</i>, which no convention does. Test it on the object at infinity: it gives <i>v</i> = −<i>f</i>." },
            { "label": "<i>v</i> − <i>u</i> = <i>f</i>", "nudge": "Dimensionally a length equals a length, so dimensions cannot catch it, but it fails every limit: an object at infinity would need an infinite focal length." }
          ],
          "correct": 1,
          "solution": "Burn in the pair: <b>mirror adds, lens subtracts</b>, and the magnification signs flip along with them, −<i>v</i>/<i>u</i> for a mirror and +<i>v</i>/<i>u</i> for a lens. Test any candidate on the object at infinity: 1/<i>u</i> = 0 must give <i>v</i> = +<i>f</i>, a real image at the far focus. Only option (b) does."
        },
        {
          "t": "mcq",
          "q": "Two thin lenses of powers +5 D and −3 D are placed in contact. The focal length of the combination is:",
          "opts": [
            { "label": "+50 cm", "nudge": null },
            { "label": "−50 cm", "nudge": "The magnitude is right but the sign is not. Adding +5 and −3 gives +2 D, so the combination converges." },
            { "label": "+12.5 cm", "nudge": "This adds the magnitudes, 5 + 3 = 8 D. Powers add <b>with sign</b>, which is the entire convenience of the dioptre." },
            { "label": "+2 cm", "nudge": "Confusing the power (2 D) with a focal length in centimetres. 2 D means 1/2 metre, which is 50 cm." }
          ],
          "correct": 0,
          "solution": "<i>P</i> = 5 + (−3) = +2 D, so <i>F</i> = 1/2 = 0.5 m = +50 cm, converging. Notice that all the work is in remembering that dioptres are reciprocal <b>metres</b>: get that right and the arithmetic is one addition."
        },
        {
          "t": "mcq",
          "q": "A convex lens of focal length <i>f</i> produces an image the same size as the object. The object distance is:",
          "opts": [
            { "label": "<i>f</i>", "nudge": "The object at the focus sends the image to infinity, where it has no size at all to compare." },
            { "label": "3<i>f</i>/2", "nudge": "Between <i>f</i> and 2<i>f</i>, so this magnifies. Substitute it: <i>v</i> = 3<i>f</i> and <i>m</i> = −2." },
            { "label": "2<i>f</i>", "nudge": null },
            { "label": "4<i>f</i>", "nudge": "Beyond 2<i>f</i>, so this diminishes. Substituting gives <i>v</i> = 4<i>f</i>/3 and <i>m</i> = −1/3." }
          ],
          "correct": 2,
          "solution": "|<i>m</i>| = 1 for a real image happens at exactly one place, <i>u</i> = −2<i>f</i>, and the image comes out at <i>v</i> = +2<i>f</i>. The image table gives it without algebra: 2<i>F</i> to 2<i>F</i>, unit magnification. It is also the minimum possible object-to-image separation for a converging lens, 4<i>f</i>, which is a fact worth carrying into the displacement method."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] An object is 15 cm from a convex lens of focal length 10 cm. Find the image distance, magnification and nature.",
              "a": "1/<i>v</i> = 1/10 + 1/(−15) = (3 − 2)/30 = 1/30, so <i>v</i> = +30 cm. <i>m</i> = 30/(−15) = −2: real, inverted, magnified 2 times, on the far side. The object between <i>F</i> and 2<i>F</i> gives an image beyond 2<i>F</i>, as the table says."
            },
            {
              "q": "[NEET] A converging lens of power +4 D is combined in contact with a diverging lens of power −6 D. Find the power, focal length and nature of the combination.",
              "a": "<i>P</i> = 4 + (−6) = −2 D, so <i>F</i> = 1/(−2) = −0.5 m = −50 cm: the pair diverges. The stronger lens dictates the character of the combination, which is exactly how a corrective spectacle lens is designed."
            },
            {
              "q": "[JEE Main] A convex lens forms a real image three times the size of an object placed 20 cm from it. Find the focal length.",
              "a": "Real means inverted, so <i>m</i> = −3, not +3. From <i>m</i> = <i>v</i>/<i>u</i> with <i>u</i> = −20 cm, <i>v</i> = +60 cm. Then 1/<i>f</i> = 1/<i>v</i> − 1/<i>u</i> = 1/60 + 1/20 = 4/60 = 1/15, so <i>f</i> = +15 cm. Sanity check: 20 cm lies between 15 and 30 cm, so the object is between <i>F</i> and 2<i>F</i> and a magnified real image is exactly what should happen."
            },
            {
              "q": "[JEE Main] Two thin convex lenses of focal lengths 20 cm and 30 cm are placed coaxially 10 cm apart. Find the focal length of the combination.",
              "a": "Use the separated form in consistent units. In centimetres, 1/<i>F</i> = 1/20 + 1/30 − 10/(20 × 30) = 1/12 − 1/60 = 4/60 = 1/15, so <i>F</i> = 15 cm. Note the gap makes the pair <b>stronger</b> here, not weaker: in contact they would give 12 cm, and the correction term subtracts from 1/<i>F</i>."
            },
            {
              "q": "[JEE Advanced] A point object and a screen are fixed 80 cm apart. A convex lens between them throws a sharp image at two positions 20 cm apart. Find the focal length.",
              "a": "The displacement method: <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>) = (6400 − 400)/320 = 6000/320 = 18.75 cm. Check the answer is even possible: a converging lens needs <i>D</i> to be at least 4<i>f</i> = 75 cm for any sharp image to exist at all, and 80 cm clears that, which is why two positions rather than one exist."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Using the mirror formula for a lens.</b> Lens: 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> with <i>m</i> = +<i>v</i>/<i>u</i>. Mirror: 1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i> with <i>m</i> = −<i>v</i>/<i>u</i>. <b>Both</b> signs are opposite, and this is the most frequent error in the chapter.",
            "<b>Reading a real image as negative <i>v</i>.</b> For a lens a real image is on the far side, so <i>v</i> > 0. That is the opposite of the mirror, for the physical reason that the light carries on forwards instead of turning back.",
            "<b>Wrong sign of <i>f</i> for a concave lens.</b> Diverging means <i>f</i> < 0 and <i>P</i> < 0. A real image from a concave lens almost always traces to a missing minus.",
            "<b>Computing power from centimetres.</b> Dioptres are reciprocal <b>metres</b>: <i>f</i> = 25 cm is <i>P</i> = +4 D, not +0.04 D.",
            "<b>Adding powers for separated lenses.</b> <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> holds only in contact. With a gap, subtract <i>d P</i><sub>1</sub><i>P</i><sub>2</sub> with <i>d</i> in metres.",
            "<b>Counting the lens once in a silvered lens.</b> The light crosses the glass twice, so <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>. And note that this one formula counts every power converging-positive: feeding a concave mirror's Cartesian negative focal length into it will give an answer that contradicts the ordinary mirror route for the very same piece of glass."
          ]
        },
        {
          "t": "protip",
          "html": "work every combination in <b>dioptres</b>. adding signed powers is faster and far less error-prone than juggling reciprocals of focal lengths, and it is already the unit your optician writes in. keep three one-line facts within reach and most lens questions collapse: mirror adds and lens subtracts; a concave lens is a convex mirror's twin, always virtual, erect and diminished; and for the laboratory favourite, <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>)."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>,  <i>m</i> = <i>v</i>/<i>u</i>", "note": "lens subtracts, mirror adds. Real image means <i>v</i> > 0 here" },
            { "f": "<i>P</i> = 1/<i>f</i> in dioptre, with <i>f</i> in metres", "note": "convex is +, concave is −. 20 cm is 5 D, never 0.05 D" },
            { "f": "In contact: 1/<i>F</i> = Σ1/<i>f</i><sub>i</sub>, <i>P</i> = Σ<i>P</i><sub>i</sub>, <i>m</i> = Π<i>m</i><sub>i</sub>", "note": "powers add, magnifications multiply" },
            { "f": "Separated by <i>d</i>: <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> − <i>d P</i><sub>1</sub><i>P</i><sub>2</sub>", "note": "<i>d</i> in metres, or the correction is 100 times too large" },
            { "f": "Silvered lens: <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>", "note": "the light crosses the glass twice. All powers converging-positive" },
            { "f": "Displacement method: <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>)", "note": "needs <i>D</i> of at least 4<i>f</i> for any image to form" }
          ],
          "aids": [
            "mirror adds, lens subtracts. write it at the top of the page before you start",
            "concave lens equals convex mirror's twin: always virtual, erect, diminished, no exceptions",
            "powers add in contact, and a dioptre is one over f in metres. convert first, add second"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Prism and Dispersion",
      "chip": "05 THE WEDGE",
      "kalam": "two faces that are not parallel, so the bends add instead of cancelling",
      "blocks": [
        {
          "t": "p",
          "html": "A prism is a wedge of glass with two flat faces meeting at an angle: the triangular paperweight that throws a rainbow on the wall when sunlight catches it. Nothing in it is new. A prism is simply <b>two refractions, one after another, at two surfaces that are not parallel</b>, and that single fact is what separates it from the slab of Topic 02. In a slab the second face undoes the bending of the first, so the ray leaves parallel to how it arrived, merely shifted. In a prism the faces are tilted relative to each other, so the two bends <b>add</b> and the ray leaves travelling in a genuinely new direction. The total turning is the <b>angle of deviation</b> δ, and both bends push the ray towards the thick part of the wedge, so a prism always deviates light <b>towards its base</b>."
        },
        {
          "t": "think",
          "html": "imagine cycling from smooth road onto a wedge-shaped patch of sand and out again. you turn once going in and again coming out, and because the two edges of the patch are not parallel you end up heading off at an angle you never would have on a straight strip. the wedge geometry is the whole story."
        },
        {
          "t": "formula",
          "kicker": "The two prism equations",
          "tag": "NEVER MIX THESE UP",
          "main": "<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>,   δ = <i>i</i> + <i>e</i> − <i>A</i>",
          "legend": [
            "<i>A</i> refracting or apex angle of the prism, the angle between the two faces, in degrees",
            "<i>i</i> angle of incidence at the first face, and <i>e</i> the angle of emergence at the second, in degrees",
            "<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub> the two angles of refraction <b>inside</b> the glass, in degrees",
            "δ total angle of deviation between the incident and emergent directions, in degrees"
          ],
          "note": "The apex angle equals the sum of the two <b>internal</b> angles, not of <i>i</i> and <i>e</i>. Writing <i>i</i> + <i>e</i> = <i>A</i> is the commonest slip in the topic and it is dimensionally invisible, because every quantity here is an angle. Note also what the pair gives you free: since <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> is fixed at <i>A</i>, making <i>r</i><sub>1</sub> larger makes <i>r</i><sub>2</sub> smaller, and that trade is the whole of the emergence and TIR analysis below."
        },
        {
          "t": "deriv",
          "kicker": "Where the two prism equations come from",
          "steps": [
            {
              "eq": "A + ∠(between the normals) = 180°",
              "why": "Drop normals at the two points where the ray meets the faces. Those normals and the two faces bound a quadrilateral, in which the apex angle and the angle between the normals are supplementary."
            },
            {
              "eq": "r₁ + r₂ + ∠(between the normals) = 180°",
              "why": "The internal ray and the two normals bound a triangle, whose angles sum to 180°."
            },
            {
              "eq": "r₁ + r₂ = A",
              "why": "Subtract the two. The angle between the normals cancels, and what is left is a statement about the prism's shape alone: how much bending the two faces have to share out between them."
            },
            {
              "eq": "δ = (i − r₁) + (e − r₂)",
              "why": "The ray turns by (<i>i</i> − <i>r</i><sub>1</sub>) at the first face and by (<i>e</i> − <i>r</i><sub>2</sub>) at the second, and because the faces are not parallel the two turns are in the <b>same</b> sense and simply add."
            },
            {
              "eq": "δ = i + e − A",
              "why": "Substitute <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>. Everything internal has vanished: the deviation depends only on what you can measure outside the glass, which is what makes a prism a usable measuring instrument."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "One ray, two faces, four stories",
          "chips": ["THE PATH", "MINIMUM DEVIATION", "NO EMERGENCE", "DISPERSION"],
          "captions": [
            "An equilateral prism, <i>A</i> = 60°, glass of <i>n</i> = 1.5, with a ray entering at <i>i</i> = 60°. Snell at the first face gives sin <i>r</i><sub>1</sub> = sin 60°/1.5 = 0.577, so <i>r</i><sub>1</sub> = 35.3°; then <i>r</i><sub>2</sub> = 60° − 35.3° = 24.7°, and sin <i>e</i> = 1.5 sin 24.7° = 0.627 gives <i>e</i> = 38.9°. The deviation is <i>i</i> + <i>e</i> − <i>A</i> = 38.9°, and it is the angle between the dashed continuation of the incident ray and the emergent ray. Both bends turn the light towards the base.",
            "Rotate the prism until the deviation is least and the path becomes <b>symmetric</b>: <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2 = 30°, and the internal ray runs parallel to the base. Snell then gives sin <i>i</i> = 1.5 sin 30° = 0.75 and <i>i</i> = 48.6°, so δ<sub>m</sub> = 2<i>i</i> − <i>A</i> = 37.2°. Measure <i>A</i> and δ<sub>m</sub> on a spectrometer and the prism formula hands you the refractive index.",
            "Now come in shallow, at <i>i</i> = 20°. Then <i>r</i><sub>1</sub> = 13.2°, so <i>r</i><sub>2</sub> = 46.8°, which is past the critical angle 41.8° for this glass. Nothing emerges at the second face: the light is totally internally reflected inside the prism and leaves through the base instead. The largest <i>r</i><sub>1</sub> possible is <i>C</i> itself, at grazing incidence, so the smallest <i>r</i><sub>2</sub> possible is <i>A</i> − <i>C</i>, and if even that exceeds <i>C</i>, meaning <i>A</i> > 2<i>C</i>, no ray whatever can get out.",
            "White light at minimum deviation, and the reason a prism makes rainbows while a slab does not. Glass has a slightly larger index for violet than for red, so violet slows more, bends more and deviates most, while red deviates least. The angle between the two extreme emergent rays is the <b>angular dispersion</b>. The colour separation is exaggerated here: for a real crown-glass prism the whole fan is a fraction of a degree wide."
          ],
          "frames": [
            {
              "x": [-3, 3],
              "y": [-1.8, 1.8],
              "axes": "none",
              "polys": [
                { "pts": [[0, 1.2], [-1.21, -0.9], [1.21, -0.9]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "segments": [
                { "from": [-1.038, 0.4], "to": [-0.172, -0.1], "dash": true, "soft": true },
                { "from": [0.11, 0.007], "to": [0.976, 0.507], "dash": true, "soft": true },
                { "from": [-0.605, 0.15], "to": [0.3, 0.673], "dash": true, "soft": true },
                { "from": [0.543, 0.257], "to": [-0.216, 0.375], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.77, -0.53], "to": [-0.605, 0.15], "tone": "amber" },
                { "from": [-0.605, 0.15], "to": [0.543, 0.257], "tone": "amber" },
                { "from": [0.543, 0.257], "to": [1.93, 0.043], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 1.2], "r": 0.35, "from": 244, "to": 296, "label": "A", "tone": "ink" },
                { "at": [-0.605, 0.15], "r": 0.4, "from": 145.5, "to": 214.5, "label": "i" },
                { "at": [0.543, 0.257], "r": 0.4, "from": 349.5, "to": 394.4, "label": "e" },
                { "at": [-0.216, 0.375], "r": 0.45, "from": 349.5, "to": 394.5, "label": "δ", "tone": "ink" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-1.8, 1.8],
              "axes": "none",
              "polys": [
                { "pts": [[0, 1.2], [-1.21, -0.9], [1.21, -0.9]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "segments": [
                { "from": [-1.038, 0.4], "to": [-0.172, -0.1], "dash": true, "soft": true },
                { "from": [0.172, -0.1], "to": [1.038, 0.4], "dash": true, "soft": true },
                { "from": [-0.605, 0.15], "to": [0.35, 0.473], "dash": true, "soft": true },
                { "from": [0.605, 0.15], "to": [-0.05, 0.37], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.84, -0.26], "to": [-0.605, 0.15], "tone": "amber" },
                { "from": [-0.605, 0.15], "to": [0.605, 0.15], "tone": "amber" },
                { "from": [0.605, 0.15], "to": [1.84, -0.26], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 1.2], "r": 0.35, "from": 244, "to": 296, "label": "A", "tone": "ink" },
                { "at": [-0.605, 0.15], "r": 0.45, "from": 145.5, "to": 201.9, "label": "i" },
                { "at": [0.605, 0.15], "r": 0.45, "from": 338.1, "to": 394.4, "label": "e" },
                { "at": [0, 0.354], "r": 0.5, "from": 338.1, "to": 381.9, "label": "δm", "tone": "ink" }
              ],
              "labels": [
                { "x": 0, "y": -1.35, "text": "ray parallel to base" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-1.8, 1.8],
              "axes": "none",
              "polys": [
                { "pts": [[0, 1.2], [-1.21, -0.9], [1.21, -0.9]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "segments": [
                { "from": [0.45, -0.53], "to": [1.29, -0.05], "dash": true, "soft": true }
              ],
              "arrows": [
                { "from": [-1.89, 0.38], "to": [-0.605, 0.15], "tone": "amber" },
                { "from": [-0.605, 0.15], "to": [0.86, -0.29], "tone": "amber" },
                { "from": [0.86, -0.29], "to": [0.72, -0.9], "tone": "amber" }
              ],
              "arcs": [
                { "at": [0, 1.2], "r": 0.35, "from": 244, "to": 296, "label": "A", "tone": "ink" },
                { "at": [0.86, -0.29], "r": 0.42, "from": 160.2, "to": 214.4, "label": "r2 past C" }
              ],
              "labels": [
                { "x": -1.0, "y": -1.35, "text": "trapped by TIR" }
              ]
            },
            {
              "x": [-3, 3],
              "y": [-1.8, 1.8],
              "axes": "none",
              "polys": [
                { "pts": [[0, 1.2], [-1.21, -0.9], [1.21, -0.9]], "close": true, "fill": "wash", "tone": "ink" }
              ],
              "arrows": [
                { "from": [-1.84, -0.26], "to": [-0.605, 0.15], "tone": "amber", "label": "white light", "at": "above" },
                { "from": [-0.605, 0.15], "to": [0.605, 0.15], "tone": "amber" },
                { "from": [0.605, 0.15], "to": [1.84, -0.265], "tone": "amber", "label": "red", "at": "above" },
                { "from": [0.605, 0.15], "to": [1.77, -0.42], "tone": "amber", "label": "violet", "at": "below" }
              ],
              "arcs": [
                { "at": [0, 1.2], "r": 0.35, "from": 244, "to": 296, "label": "A", "tone": "ink" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Here is the elegant part. Rotate the prism slowly, changing <i>i</i>, and the deviation does not change in a simple way. It first <b>decreases</b>, reaches a lowest value, and then <b>increases</b> again. That single special minimum is the <b>angle of minimum deviation</b> δ<sub>m</sub>, and it happens at one symmetric arrangement where the ray runs parallel to the base with the angle of incidence exactly equal to the angle of emergence. The symmetry is not a coincidence: by the reversibility of light, any unsymmetric path would have a mirror-image partner with the <b>same</b> deviation, giving two angles of incidence for one value of δ. At the minimum there can only be one, so the minimum must be the symmetric one."
        },
        {
          "t": "formula",
          "kicker": "The prism formula",
          "tag": "HOW A SPECTROMETER MEASURES n",
          "main": "<i>n</i> = sin((<i>A</i> + δ<sub>m</sub>)/2) / sin(<i>A</i>/2)",
          "legend": [
            "<i>n</i> refractive index of the prism material, dimensionless",
            "<i>A</i> apex angle of the prism, in degrees",
            "δ<sub>m</sub> angle of minimum deviation, in degrees, measured by rotating the prism until δ stops falling",
            "at minimum deviation: <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, and δ<sub>m</sub> = 2<i>i</i> − <i>A</i>"
          ],
          "note": "This holds <b>only</b> at minimum deviation; away from it there is no such tidy formula. It is the working equation of a laboratory spectrometer: measure the apex angle, rotate until the deviation is least, read δ<sub>m</sub>, and the refractive index falls out. In a numerical you almost never need the whole formula, because at minimum deviation you can jump straight to <i>r</i> = <i>A</i>/2 and apply Snell's law once."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "The deviation curve",
          "chips": ["ONE MINIMUM", "THE SAME δ TWICE"],
          "captions": [
            "Deviation against angle of incidence for an equilateral prism of <i>n</i> = 1.5, computed point by point from sin <i>r</i><sub>1</sub> = sin <i>i</i>/<i>n</i>, <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub>, sin <i>e</i> = <i>n</i> sin <i>r</i><sub>2</sub> and δ = <i>i</i> + <i>e</i> − <i>A</i>. The curve is U-shaped with exactly one minimum, marked at <i>i</i> = 48.6° and δ<sub>m</sub> = 37.2°. It stops on the left at <i>i</i> = 27.9°, where <i>r</i><sub>2</sub> reaches the critical angle and the emergent ray grazes the far face; below that, nothing comes out at all.",
            "Draw any horizontal line above the minimum and it cuts the curve <b>twice</b>: the same deviation is produced by two different angles of incidence. The two are not independent, they are <i>i</i> and <i>e</i> swapped, which is the reversibility of light showing up as a graph. That is exactly why the minimum is the one usable measurement: it is the single deviation that belongs to only one setting of the prism, so a spectrometer reading taken there is unambiguous."
          ],
          "frames": [
            {
              "x": [25, 92],
              "y": [34, 60],
              "axisX": "i (degrees)",
              "axisY": "δ (degrees)",
              "ticksX": { "at": [30, 50, 70, 90], "labels": ["30", "50", "70", "90"] },
              "ticksY": { "at": [40, 50, 60], "labels": ["40", "50", "60"] },
              "curves": [
                { "c": "pts", "pts": [[28, 55.6], [30, 47.0], [35, 41.0], [40, 38.5], [45, 37.4], [48.6, 37.2], [52, 37.3], [55, 37.7], [60, 38.9], [70, 42.9], [80, 49.2], [90, 57.9]], "smooth": true }
              ],
              "points": [
                { "x": 48.6, "y": 37.2, "label": "min", "at": "se" }
              ]
            },
            {
              "x": [25, 92],
              "y": [34, 60],
              "axisX": "i (degrees)",
              "axisY": "δ (degrees)",
              "ticksX": { "at": [30, 50, 70, 90], "labels": ["30", "50", "70", "90"] },
              "ticksY": { "at": [40, 50, 60], "labels": ["40", "50", "60"] },
              "curves": [
                { "c": "pts", "pts": [[28, 55.6], [30, 47.0], [35, 41.0], [40, 38.5], [45, 37.4], [48.6, 37.2], [52, 37.3], [55, 37.7], [60, 38.9], [70, 42.9], [80, 49.2], [90, 57.9]], "smooth": true },
                { "c": "line", "m": 0, "k": 42.9, "dash": true, "soft": true }
              ],
              "points": [
                { "x": 33.6, "y": 42.9, "label": "i", "at": "sw" },
                { "x": 70, "y": 42.9, "label": "e", "at": "se" },
                { "x": 48.6, "y": 37.2, "label": "min", "at": "se" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "The thin prism, and the limit on emergence",
          "tag": "TWO SMALL FORMULAS, HEAVILY EXAMINED",
          "main": "δ = (<i>n</i> − 1)<i>A</i>,   <i>A</i><sub>max</sub> = 2<i>C</i>",
          "legend": [
            "δ deviation by a prism of small apex angle, in degrees, and independent of the angle of incidence",
            "<i>n</i> refractive index of the glass, dimensionless",
            "<i>A</i> apex angle, in degrees, a few degrees at most for the thin-prism result to hold",
            "<i>C</i> critical angle, in degrees, with sin <i>C</i> = 1/<i>n</i>"
          ],
          "note": "It is (<i>n</i> − 1)<i>A</i>, never <i>nA</i>: with <i>n</i> = 1.5 those differ by a factor of three. The second result is the no-emergence condition. The largest angle of refraction the first face can produce is <i>C</i> itself, at grazing incidence, so the <b>smallest</b> <i>r</i><sub>2</sub> available is <i>A</i> − <i>C</i>. If even that exceeds <i>C</i>, every ray is trapped, and the condition <i>A</i> − <i>C</i> > <i>C</i> is exactly <i>A</i> > 2<i>C</i>. For crown glass that is <i>A</i> > 83.6°."
        },
        {
          "t": "deriv",
          "kicker": "Shrinking the prism until the incidence angle stops mattering",
          "steps": [
            {
              "eq": "n = sin((A + δm)/2) / sin(A/2)",
              "why": "Start from the exact prism formula at minimum deviation, which holds for any apex angle."
            },
            {
              "eq": "sin θ ≈ θ for small θ",
              "why": "Let <i>A</i> be a few degrees. Then <i>A</i>/2 and (<i>A</i> + δ<sub>m</sub>)/2 are both small, since δ<sub>m</sub> is itself of order <i>A</i>, and every sine may be replaced by its own argument."
            },
            {
              "eq": "n ≈ (A + δm)/A",
              "why": "The halves cancel top and bottom. All the geometry has gone; only a ratio of two angles is left."
            },
            {
              "eq": "δ = (n − 1)A",
              "why": "Rearrange. And now notice what is <b>missing</b>: the angle of incidence. For a thin prism the deviation is essentially the same however you hold it, which is what makes thin prisms the natural building blocks for dispersion analysis and for the two-prism combinations below."
            }
          ]
        },
        {
          "t": "p",
          "html": "Why a rainbow, though? Because glass bends different colours by different amounts. The refractive index is slightly larger for violet light than for red, so violet slows most, bends most and deviates most, while red deviates least. White light enters as one beam and fans out into a spectrum: this spreading is <b>dispersion</b>, and the angle between the extreme colours is the <b>angular dispersion</b>. The reason a slab makes no rainbow but a prism does is the same wedge geometry as before: in a slab the colours re-merge at the second face, and in a prism they keep diverging. In the sky, sunlight dispersed and internally reflected inside countless raindrops gives the <b>primary rainbow</b> at about 42° from the antisolar point, red on the outside; a second, fainter bow at about 51° comes from <b>two</b> internal reflections and has its colours reversed."
        },
        {
          "t": "formula",
          "kicker": "Dispersion through a thin prism",
          "tag": "SIZE VERSUS MATERIAL",
          "main": "δ<sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i>,  θ = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>,  ω = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1)",
          "legend": [
            "δ<sub>y</sub> mean deviation, of the middle (yellow) colour, in degrees",
            "θ angular dispersion, the angle between the extreme red and violet rays, in degrees",
            "ω dispersive power, dimensionless",
            "<i>n</i><sub>v</sub>, <i>n</i><sub>r</sub>, <i>n</i><sub>y</sub> the indices for violet, red and mean yellow light, all dimensionless"
          ],
          "note": "Keep the two spreading quantities apart, because a question will try to swap them. The <b>angular dispersion</b> θ has units of angle and scales with the prism's size through <i>A</i>. The <b>dispersive power</b> ω is θ divided by the mean deviation, so the <i>A</i> cancels and what is left is a pure number belonging to the <b>glass alone</b>. Change the apex angle and θ changes while ω does not."
        },
        {
          "t": "defgrid",
          "title": "Two prisms, two ways round",
          "tag": "SPLIT THE TWO EFFECTS",
          "rows": [
            { "k": "Achromatic combination", "v": "Cancels the <b>colour spread</b> and keeps a net bend: (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> + (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′ = 0" },
            { "k": "Direct-vision combination", "v": "Cancels the <b>net deviation</b> and keeps the colours: (<i>n</i><sub>y</sub> − 1)<i>A</i> + (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′ = 0" },
            { "k": "How they are built", "v": "A crown-glass prism upright with a flint-glass prism inverted, so the two apex angles effectively oppose each other" },
            { "k": "Why not both at once", "v": "Flint glass has both a higher mean index and a higher dispersive power than crown, so the two conditions cannot hold together. You choose which effect to kill" },
            { "k": "The same idea in lenses", "v": "A single lens focuses violet nearer than red, an aberration of about <i>f</i>ω, and an achromatic doublet cancels it the same way" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "An equilateral glass prism gives an angle of minimum deviation of 30°. Find the refractive index of the material.",
          "steps": [
            "Equilateral, so <i>A</i> = 60°, and δ<sub>m</sub> = 30° is given.",
            "<i>n</i> = sin((<i>A</i> + δ<sub>m</sub>)/2)/sin(<i>A</i>/2) = sin(45°)/sin(30°).",
            "= (1/√2)/(1/2) = 2/√2 = √2 = 1.414."
          ],
          "ans": "<i>n</i> = √2 = 1.41. Sanity check the answer against the world: an index near 1.4 to 1.5 is exactly what glass should give. Anything below 1, or above about 2.5, would mean an arithmetic slip rather than an exotic material."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A ray passes through a prism of refracting angle 60° at minimum deviation. The material has <i>n</i> = √3. Find the angle of incidence.",
          "steps": [
            "At minimum deviation you never need the full prism formula. Use the symmetry: <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2 = 30°.",
            "Snell at the first face: sin <i>i</i> = <i>n</i> sin <i>r</i><sub>1</sub> = √3 × 1/2 = √3/2.",
            "<i>i</i> = 60°.",
            "As a bonus, δ<sub>m</sub> = 2<i>i</i> − <i>A</i> = 120° − 60° = 60°."
          ],
          "ans": "<i>i</i> = 60°. The trap is reaching for the prism formula, solving it for δ<sub>m</sub>, and then backing out <i>i</i>: three steps where one will do. Recognising that minimum deviation means <i>r</i> = <i>A</i>/2 collapses the whole thing to one application of Snell's law."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "A thin crown-glass prism has a refracting angle of 5°, with <i>n</i><sub>v</sub> = 1.524, <i>n</i><sub>r</sub> = 1.514 and mean <i>n</i><sub>y</sub> = 1.519. Find the mean deviation, the angular dispersion and the dispersive power.",
          "steps": [
            "Mean deviation: δ<sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i> = 0.519 × 5° = 2.60°.",
            "Angular dispersion: θ = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> = 0.010 × 5° = 0.050°.",
            "Dispersive power: ω = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) = 0.010/0.519 = 0.019."
          ],
          "ans": "δ<sub>y</sub> = 2.60°, θ = 0.050° and ω = 0.019. Read the three numbers together: the whole rainbow from this prism is one twentieth of a degree wide, spread across a mean bend fifty times larger. And ω would be identical for any apex angle, because it is a property of the glass, while both deviations scale with <i>A</i>."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A prism is made of glass with <i>n</i> = 1.5. Show that no ray can emerge from the second face if the refracting angle exceeds a certain maximum, and evaluate it.",
          "steps": [
            "For any ray to emerge, it must meet the second face at less than the critical angle: <i>r</i><sub>2</sub> < <i>C</i>, where sin <i>C</i> = 1/<i>n</i>.",
            "Since <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>, making <i>r</i><sub>2</sub> as small as possible means making <i>r</i><sub>1</sub> as large as possible.",
            "The largest <i>r</i><sub>1</sub> occurs at grazing incidence, <i>i</i> = 90°: sin 90° = <i>n</i> sin <i>r</i><sub>1,max</sub>, so sin <i>r</i><sub>1,max</sub> = 1/<i>n</i> = sin <i>C</i>, and <i>r</i><sub>1,max</sub> = <i>C</i> exactly.",
            "So the smallest achievable <i>r</i><sub>2</sub> is <i>A</i> − <i>C</i>. Emergence needs even this to satisfy <i>A</i> − <i>C</i> < <i>C</i>, that is <i>A</i> < 2<i>C</i>.",
            "Evaluate: sin <i>C</i> = 1/1.5 = 0.667, so <i>C</i> = 41.8° and <i>A</i><sub>max</sub> = 83.6°."
          ],
          "ans": "Any prism of this glass with an apex angle above about 83.6° traps all light by total internal reflection. The elegance is the chaining of two limits: grazing incidence pins <i>r</i><sub>1,max</sub> to <i>C</i>, and the critical-angle condition at the second face then forces <i>A</i> < 2<i>C</i>."
        },
        {
          "t": "mcq",
          "q": "At the angle of minimum deviation through a prism, which is correct?",
          "opts": [
            { "label": "the ray inside is parallel to the base and <i>i</i> = <i>e</i>", "nudge": null },
            { "label": "the angle of incidence is 90°", "nudge": "That is grazing incidence, a different special case entirely, and it gives the <b>largest</b> deviation the prism can produce, not the smallest." },
            { "label": "the emergent ray is normal to the second face", "nudge": "A one-face condition (<i>e</i> = 0), unrelated to the symmetry that minimum deviation requires." },
            { "label": "the deviation is maximum", "nudge": "The exact opposite. Students who have never drawn the U-shaped δ against <i>i</i> curve sometimes flip the minimum and the maximum." }
          ],
          "correct": 0,
          "solution": "Minimum deviation is the symmetric case: <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, and the internal ray parallel to the base. The argument for it is reversibility, not calculus: every deviation above the minimum is produced at two angles of incidence, one the reverse of the other, and the minimum is the single value where those two collapse into one."
        },
        {
          "t": "mcq",
          "q": "A thin prism of angle 4° and refractive index 1.5 produces a deviation of:",
          "opts": [
            { "label": "1°", "nudge": "An extra stray factor of two. Substitute the numbers rather than half-remembering the shape of the formula." },
            { "label": "2°", "nudge": null },
            { "label": "4°", "nudge": "This forgets the (<i>n</i> − 1) altogether and just copies <i>A</i>, which would say the glass bends light by the apex angle regardless of what it is made of." },
            { "label": "6°", "nudge": "This multiplies <i>A</i> by <i>n</i> rather than by (<i>n</i> − 1), the single most common thin-prism slip. It also fails a limit: a prism made of air, <i>n</i> = 1, would then still deviate light." }
          ],
          "correct": 1,
          "solution": "δ = (<i>n</i> − 1)<i>A</i> = (0.5)(4°) = 2°. The limiting case is the check worth carrying: as <i>n</i> approaches 1 the glass matches its surroundings and the deviation must go to zero, which only the (<i>n</i> − 1) form does."
        },
        {
          "t": "mcq",
          "q": "The dispersive power of a prism material depends on:",
          "opts": [
            { "label": "the refracting angle <i>A</i>", "nudge": "This confuses dispersive power with <b>angular dispersion</b> θ = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>, which genuinely does scale with <i>A</i>. Dividing by the mean deviation is exactly what cancels it." },
            { "label": "only the material, through its refractive indices", "nudge": null },
            { "label": "the angle of incidence", "nudge": "For a thin prism the deviation barely depends on the angle of incidence at all, so neither can any ratio of deviations." },
            { "label": "the height of the prism", "nudge": "No formula in the topic contains a height. Picking this or the incidence angle usually means confusing how much a particular prism spreads colours with how strongly the glass itself can." }
          ],
          "correct": 1,
          "solution": "ω = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) contains no geometric factor whatsoever: numerator and denominator are both differences of pure numbers, so no apex angle can survive. It is a material constant, which is precisely why glass catalogues quote it and why the achromatic condition can be stated in terms of it."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A prism of refracting angle 60° is made of material of refractive index 1.5. Find the angle of minimum deviation.",
              "a": "At minimum deviation <i>r</i> = <i>A</i>/2 = 30°, so sin <i>i</i> = 1.5 sin 30° = 0.75 and <i>i</i> = 48.6°. Then δ<sub>m</sub> = 2<i>i</i> − <i>A</i> = 97.2° − 60° = 37.2°. This is the number the deviation-curve figure above is drawn around."
            },
            {
              "q": "[NEET] Light passes symmetrically through an equilateral prism and the deviation equals the refracting angle. Find the refractive index.",
              "a": "Symmetric means minimum deviation, and δ<sub>m</sub> = <i>A</i> = 60°. So <i>n</i> = sin((60° + 60°)/2)/sin 30° = sin 60°/sin 30° = 0.866/0.5 = √3 = 1.73. Denser than ordinary crown glass, which is consistent with a prism that deviates a whole 60°."
            },
            {
              "q": "[JEE Main] A thin prism of angle 6° gives a deviation of 3°. It is combined with a second thin prism of <i>n</i> = 1.6, inverted, to give zero net deviation. Find the second prism's angle.",
              "a": "First prism: 3° = (<i>n</i><sub>1</sub> − 1)(6°), so <i>n</i><sub>1</sub> = 1.5. For the deviations to cancel, the second must deviate by the same 3° the other way: 3° = (1.6 − 1)<i>A</i><sub>2</sub> = 0.6<i>A</i><sub>2</sub>, so <i>A</i><sub>2</sub> = 5°. The denser glass needs the smaller angle, which is the whole point of pairing crown with flint."
            },
            {
              "q": "[JEE Main] For a flint-glass prism, <i>n</i><sub>v</sub> = 1.66, <i>n</i><sub>r</sub> = 1.62 and <i>n</i><sub>y</sub> = 1.64. Find its dispersive power.",
              "a": "ω = (1.66 − 1.62)/(1.64 − 1) = 0.04/0.64 = 0.0625. Compare it with the crown glass of the worked example, ω = 0.019: flint disperses more than three times as strongly for the same mean bend, which is exactly why the two are paired in achromatic and direct-vision combinations."
            },
            {
              "q": "[JEE Advanced] A ray is incident normally on the first face of a prism of angle <i>A</i> made of glass with <i>n</i> = 1.5. For what range of <i>A</i> does it undergo total internal reflection at the second face?",
              "a": "Normal incidence means <i>i</i> = 0 and so <i>r</i><sub>1</sub> = 0, which makes <i>r</i><sub>2</sub> = <i>A</i> − 0 = <i>A</i> exactly. TIR therefore needs <i>A</i> > <i>C</i> = arcsin(1/1.5) = 41.8°. Note how much weaker this bound is than the all-rays condition <i>A</i> > 2<i>C</i> = 83.6°: one particular ray is trapped from 41.8° upwards, but it takes twice that angle to trap every ray."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Writing <i>i</i> + <i>e</i> = <i>A</i>.</b> The apex angle equals the sum of the two <b>internal</b> angles, <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>. The relation involving <i>i</i> and <i>e</i> is δ = <i>i</i> + <i>e</i> − <i>A</i>.",
            "<b>Thinking minimum deviation happens at normal incidence.</b> It happens at the <b>symmetric</b> setting, <i>i</i> = <i>e</i>, not at <i>i</i> = 0. Many students assume the least bending comes from going straight in.",
            "<b>Dropping the (<i>n</i> − 1) in the thin-prism deviation.</b> It is (<i>n</i> − 1)<i>A</i>, never <i>nA</i>. With <i>n</i> = 1.5 that is a factor-of-three error.",
            "<b>Confusing angular dispersion with dispersive power.</b> θ = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> has units of angle and depends on the prism; ω = θ/δ<sub>y</sub> is a dimensionless constant of the glass.",
            "<b>Using the prism formula away from minimum deviation.</b> <i>n</i> = sin((<i>A</i> + δ)/2)/sin(<i>A</i>/2) is only true at the minimum. For any other δ you must go back to Snell's law at both faces."
          ]
        },
        {
          "t": "protip",
          "html": "at minimum deviation, jump straight to <i>r</i> = <i>A</i>/2 and apply snell once. that reflex alone answers most prism numericals in a single line. and for any dispersion question, separate <b>size</b> from <b>material</b> before you start: the two deviations scale with <i>A</i>, but ω never does, so if a question changes only the prism's angle, ω is unchanged and you can carry it straight over. the same split runs through lenses too, where a single lens's chromatic aberration is about <i>f</i>ω and is cured by pairing two glasses, exactly as two prisms are paired here."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>,  δ = <i>i</i> + <i>e</i> − <i>A</i>", "note": "a prism always bends light towards its base" },
            { "f": "At minimum: <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, δ<sub>m</sub> = 2<i>i</i> − <i>A</i>", "note": "the internal ray runs parallel to the base" },
            { "f": "<i>n</i> = sin((<i>A</i> + δ<sub>m</sub>)/2)/sin(<i>A</i>/2)", "note": "only at minimum deviation. The spectrometer equation" },
            { "f": "Thin prism: δ = (<i>n</i> − 1)<i>A</i>", "note": "independent of the angle of incidence. Never <i>nA</i>" },
            { "f": "No emergence when <i>A</i> > 2<i>C</i>, sin <i>C</i> = 1/<i>n</i>", "note": "83.6° for crown glass. One ray is trapped from <i>A</i> > <i>C</i>" },
            { "f": "θ = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>,  ω = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1)", "note": "θ is an angle and scales with <i>A</i>; ω is the material alone" }
          ],
          "aids": [
            "r1 plus r2 equals A, and delta equals i plus e minus A. two equations, never mix them up",
            "symmetry means minimum: equal in, equal out gives the least deviation there is",
            "red rides round the outside: violet has the bigger index, bends most, deviates most"
          ]
        }
      ]
    },
    {
      "n": "06",
      "title": "Optical Instruments",
      "chip": "06 THE EYE'S REACH",
      "kalam": "not bigger, just wider: every instrument here sells you angle",
      "blocks": [
        {
          "t": "p",
          "html": "One idea runs under every instrument in this topic: <b>what decides how big something looks is not its real size but the angle it subtends at your eye</b>. A distant kite and a nearby coin can occupy the same angle and look the same size. Your eye can enlarge that angle by bringing a thing closer, but only up to a limit: the closest distance at which a relaxed healthy eye can focus comfortably is the <b>least distance of distinct vision</b>, <i>D</i> = 25 cm, also called the near point. Bring an ant closer than that and it blurs. So the naked eye is stuck at an angle of <i>h</i>/<i>D</i>, and every instrument below is a device for <b>beating that limit</b>."
        },
        {
          "t": "def",
          "term": "Magnifying power",
          "html": "The <b>angular</b> magnification: <i>M</i> = β/α, where α is the angle the object subtends at the unaided eye held at the near point, and β is the angle it subtends when seen through the instrument. It is a pure number.<br><br>Keep it firmly apart from the <b>linear</b> magnification <i>m</i> = <i>h</i>′/<i>h</i> of Topics 01 and 04, which compares <b>heights</b>. They are different numbers for the same instrument, and the gap is not subtle: for a simple microscope focused for a relaxed eye, the image is at infinity, so <i>m</i> is technically infinite while <i>M</i> = <i>D</i>/<i>f</i> is a modest 5 or 10. The finite one is the one that matters, because it is what your retina actually receives."
        },
        {
          "t": "think",
          "html": "hold your thumb up at arm's length and it covers the moon. nothing has happened to either of them. the moon has not shrunk and your thumb has not grown, but the angles they subtend at your eye are now the same, and angle is the only thing your retina can measure. every instrument in this topic is in the business of selling you angle."
        },
        {
          "t": "formula",
          "kicker": "The simple microscope",
          "tag": "THE MAGNIFYING GLASS",
          "main": "<i>M</i> = <i>D</i>/<i>f</i>  (relaxed),   <i>M</i> = 1 + <i>D</i>/<i>f</i>  (near point)",
          "legend": [
            "<i>M</i> magnifying power, dimensionless",
            "<i>D</i> least distance of distinct vision, 25 cm by convention",
            "<i>f</i> focal length of the lens, in the same unit as <i>D</i>"
          ],
          "note": "Two standard adjustments, and a question always tells you which. <b>Relaxed</b> or <b>normal</b> means the final image is at <b>infinity</b> and the eye is unstrained; the object then sits exactly at the focus. <b>Near point</b> or <b>strained</b> means the image is pulled up to <i>D</i>, which buys you one extra unit of magnification at the cost of eye strain. Note that you can only add the 1 because <i>D</i>/<i>f</i> is a pure number, and that a short focal length is what makes a magnifier strong: a 5 cm loupe gives 5 times, a 2.5 cm one gives 10."
        },
        {
          "t": "diagram",
          "kind": "optics",
          "kicker": "Why a loupe must be held close",
          "chips": ["OBJECT INSIDE F", "OBJECT OUTSIDE F"],
          "captions": [
            "A convex lens of <i>f</i> = +10 cm with the object at <i>u</i> = −6 cm, inside the focus. The reader solves the lens formula and puts the image at <i>v</i> = −15 cm with <i>m</i> = +2.5: virtual, erect, magnified, on the <b>same</b> side as the object and drawn dashed because no light arrives there. Your eye, on the far side, focuses on that enlarged virtual image comfortably while the object itself sits far closer than the near point. That is the whole trick of a magnifying glass.",
            "The same lens with the object moved out to <i>u</i> = −15 cm, beyond the focus. Now <i>v</i> = +30 cm and <i>m</i> = −2: the image has flipped to real and inverted, on the far side, and it is no longer something a nearby eye can use. A loupe that has drifted more than its own focal length from the stamp has stopped being a loupe, which is why you instinctively move it in and out until the image snaps."
          ],
          "frames": [
            { "optics": { "element": "convexLens", "f": 10, "object": { "u": -6, "h": 6 } } },
            { "optics": { "element": "convexLens", "f": 10, "object": { "u": -15, "h": 6 } } }
          ]
        },
        {
          "t": "deriv",
          "kicker": "The simple microscope, both adjustments",
          "steps": [
            {
              "eq": "α = h/D",
              "why": "Without any lens, the largest angle an object of height <i>h</i> can subtend is reached by bringing it to the near point. Closer than that and it blurs, so this is the honest baseline to compare against."
            },
            {
              "eq": "β = h/f",
              "why": "Put the object exactly at the focus of the lens. The emerging rays are parallel, so the image is at infinity and the eye is relaxed, and the angle those parallel rays make with the axis is <i>h</i>/<i>f</i>."
            },
            {
              "eq": "M = β/α = (h/f)/(h/D) = D/f",
              "why": "The object height cancels, which is why the magnifying power belongs to the instrument and not to what you happen to be looking at."
            },
            {
              "eq": "M = 1 + D/f  at the near point",
              "why": "Instead put the virtual image at <i>v</i> = −<i>D</i> and use the lens formula to find where the object must sit: <i>u</i> = −<i>fD</i>/(<i>f</i> + <i>D</i>). The angle works out to (<i>D</i> + <i>f</i>)/<i>f</i> times α, which is the extra 1. It is the bonus for dragging the image right up to the closest point the eye can still focus, paid for in strain."
            }
          ]
        },
        {
          "t": "p",
          "html": "One lens cannot deliver the magnifications a biology lab needs, so the <b>compound microscope</b> does the job in two stages. A short-focus <b>objective</b>, held close to the specimen, forms a real, inverted, magnified image inside the tube. A second lens, the <b>eyepiece</b>, then acts as a simple microscope on <b>that</b> image and magnifies it again. Because the stages act in series their effects <b>multiply</b>: it is like photocopying a document at 300 per cent and then photocopying the copy at 300 per cent again. The image you finally see is inverted relative to the specimen, which nobody minds when the specimen is a cell."
        },
        {
          "t": "formula",
          "kicker": "The compound microscope",
          "tag": "TWO STAGES, MULTIPLIED",
          "main": "<i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>)  ≈ (<i>L</i>/<i>f</i><sub>o</sub>)(<i>D</i>/<i>f</i><sub>e</sub>)",
          "legend": [
            "<i>m</i><sub>o</sub> linear magnification of the objective, dimensionless",
            "<i>M</i><sub>e</sub> angular magnification of the eyepiece: <i>D</i>/<i>f</i><sub>e</sub> relaxed, or 1 + <i>D</i>/<i>f</i><sub>e</sub> at the near point",
            "<i>u</i><sub>o</sub>, <i>v</i><sub>o</sub> object and image distances for the objective, in centimetres",
            "<i>f</i><sub>o</sub>, <i>f</i><sub>e</sub> objective and eyepiece focal lengths, in centimetres",
            "<i>L</i> tube length, in centimetres, with <i>L</i> ≈ <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>"
          ],
          "note": "The approximate form holds when the object sits just outside <i>f</i><sub>o</sub> and the tube is long, so that <i>v</i><sub>o</sub> ≈ <i>L</i> and |<i>u</i><sub>o</sub>| ≈ <i>f</i><sub>o</sub>. Read it as a design rule: to make <i>M</i> large, <b>both</b> focal lengths must be <b>small</b>, which is exactly why the lenses in a microscope are tiny. Beware that some books define the tube length the other way round, as the distance from the objective image to the eyepiece; here <i>L</i> = <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub> throughout."
        },
        {
          "t": "p",
          "html": "The <b>telescope</b> solves the opposite problem. You cannot bring the Moon closer, so instead of magnifying a near object you magnify the <b>angle</b> of a far one. A large, long-focus <b>objective</b> gathers the nearly parallel rays from the distant object and forms a small real image at its focus; the <b>eyepiece</b> then views that image like a magnifying glass. The payoff is simply the ratio of the focal lengths. Notice the <b>role reversal</b> against the microscope: there the objective wants a short focal length, here it wants a long one, and mixing them up inverts the answer. A <b>reflecting</b> telescope replaces the objective lens with a large concave mirror, and a <b>terrestrial</b> telescope adds an erecting lens between the two so that a ship or a cricket match comes out the right way up, at the cost of a longer tube and with the magnifying power unchanged."
        },
        {
          "t": "formula",
          "kicker": "The astronomical telescope",
          "tag": "LONG OBJECTIVE, SHORT EYEPIECE",
          "main": "<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>,   <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>",
          "legend": [
            "<i>M</i> magnifying power in normal adjustment (final image at infinity), dimensionless",
            "<i>f</i><sub>o</sub>, <i>f</i><sub>e</sub> objective and eyepiece focal lengths, in centimetres",
            "<i>P</i><sub>o</sub>, <i>P</i><sub>e</sub> the corresponding powers, in dioptre",
            "<i>L</i> tube length in normal adjustment, in centimetres"
          ],
          "note": "Watch the <b>inversion</b> in the power form: the objective is the <b>weak</b> lens and the eyepiece the strong one, so <i>M</i> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> is the focal-length ratio the other way up. Pulling the final image to the near point instead multiplies <i>M</i> by (1 + <i>f</i><sub>e</sub>/<i>D</i>). And a reflecting telescope uses the same <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>, with <i>f</i><sub>o</sub> now belonging to a concave mirror."
        },
        {
          "t": "deriv",
          "kicker": "The telescope in normal adjustment",
          "steps": [
            {
              "eq": "α = h′/f_o",
              "why": "The distant object subtends α at the objective, which is the same angle it subtends at the naked eye, since the object is far away compared with anything in the instrument. The objective forms a real inverted image of height <i>h</i>′ at its own focus."
            },
            {
              "eq": "β = h′/f_e",
              "why": "In normal adjustment that image lies at the eyepiece's focus <b>too</b>, so the eyepiece sends out parallel rays, the final image is at infinity and the eye is relaxed. The angle those parallel rays make at the eye is <i>h</i>′/<i>f</i><sub>e</sub>."
            },
            {
              "eq": "M = β/α = f_o/f_e",
              "why": "The intermediate image height <i>h</i>′ cancels, exactly as <i>h</i> did for the simple microscope. For high magnification the objective wants a <b>long</b> focal length and the eyepiece a short one, the exact opposite priority to a microscope."
            },
            {
              "eq": "L = f_o + f_e",
              "why": "The two foci coincide, so the lens separation is the sum of the focal lengths. This is where a telescope's length comes from, and why a 50-times instrument is a metre or two long."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "A telescope in normal adjustment",
          "chips": ["THE OBJECTIVE", "AND THE EYEPIECE"],
          "captions": [
            "Rays from a distant object arrive effectively <b>parallel</b>, all tilted by the same small angle α to the axis, because every part of the object is the same enormous distance away. The long-focus objective brings them to a real, inverted image <i>I</i> at its focus <i>F</i>. That image is tiny, far smaller than the object, which is the point students find hardest: a telescope does not enlarge anything at this stage. It only puts a manageable copy where a magnifier can get at it.",
            "The eyepiece is now placed one eyepiece focal length beyond that image, so the image sits at <b>its</b> focus too and the light leaves parallel again, letting a relaxed eye focus at infinity. What has changed is the angle: the emerging rays are tilted by β, which is much larger than α, and <i>M</i> = β/α = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>. Note the tube length: the two foci coincide, so the lenses stand <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> apart."
          ],
          "frames": [
            {
              "x": [-1, 9],
              "y": [-1.6, 1.6],
              "aspect": 0.5,
              "axes": "none",
              "polys": [
                { "pts": [[0.15, 1.1], [-0.05, 0.55], [-0.12, 0], [-0.05, -0.55], [0.15, -1.1]], "smooth": true, "tone": "ink" },
                { "pts": [[-0.15, 1.1], [0.05, 0.55], [0.12, 0], [0.05, -0.55], [-0.15, -1.1]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-0.9, 0], "to": [8.8, 0], "soft": true }
              ],
              "arrows": [
                { "from": [-0.9, 0.075], "to": [6, -0.5], "tone": "amber" },
                { "from": [-0.9, 0.975], "to": [0, 0.9], "tone": "amber" },
                { "from": [0, 0.9], "to": [6, -0.5], "tone": "amber" },
                { "from": [-0.9, -0.825], "to": [0, -0.9], "tone": "amber" },
                { "from": [0, -0.9], "to": [6, -0.5], "tone": "amber" }
              ],
              "points": [
                { "x": 6, "y": 0, "label": "F", "at": "ne" },
                { "x": 6, "y": -0.5, "label": "I", "at": "se" }
              ],
              "labels": [
                { "x": 3.0, "y": 1.15, "text": "from a distant object" },
                { "x": 1.5, "y": -1.25, "text": "objective" }
              ]
            },
            {
              "x": [-1, 9],
              "y": [-1.6, 1.6],
              "aspect": 0.5,
              "axes": "none",
              "polys": [
                { "pts": [[0.15, 1.1], [-0.05, 0.55], [-0.12, 0], [-0.05, -0.55], [0.15, -1.1]], "smooth": true, "tone": "ink" },
                { "pts": [[-0.15, 1.1], [0.05, 0.55], [0.12, 0], [0.05, -0.55], [-0.15, -1.1]], "smooth": true, "tone": "ink" },
                { "pts": [[7.1, 0.55], [6.97, 0.28], [6.93, 0], [6.97, -0.28], [7.1, -0.55]], "smooth": true, "tone": "ink" },
                { "pts": [[6.9, 0.55], [7.03, 0.28], [7.07, 0], [7.03, -0.28], [6.9, -0.55]], "smooth": true, "tone": "ink" }
              ],
              "segments": [
                { "from": [-0.9, 0], "to": [8.8, 0], "soft": true },
                { "from": [-0.9, 0.975], "to": [0, 0.9], "soft": true },
                { "from": [0, 0.9], "to": [6, -0.5], "soft": true },
                { "from": [-0.9, 0.075], "to": [6, -0.5], "soft": true }
              ],
              "arrows": [
                { "from": [6, -0.5], "to": [7, 0.42], "tone": "amber" },
                { "from": [7, 0.42], "to": [8.8, 1.32], "tone": "amber" },
                { "from": [6, -0.5], "to": [7, 0], "tone": "amber" },
                { "from": [7, 0], "to": [8.8, 0.9], "tone": "amber" },
                { "from": [6, -0.5], "to": [7, -0.42], "tone": "amber" },
                { "from": [7, -0.42], "to": [8.8, 0.48], "tone": "amber" }
              ],
              "points": [
                { "x": 6, "y": -0.5, "label": "I", "at": "sw" }
              ],
              "labels": [
                { "x": 1.5, "y": -1.25, "text": "objective" },
                { "x": 7.4, "y": -1.25, "text": "eyepiece" }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Microscope against telescope",
          "tag": "OPPOSITE IN EVERY ROW",
          "rows": [
            { "k": "What it fights", "v": "Microscope: the object is too <b>small</b>. Telescope: the object is too <b>far</b>" },
            { "k": "Objective focal length", "v": "Microscope: <b>short</b>. Telescope: <b>long</b>. Mixing these up inverts the answer" },
            { "k": "Magnifying power", "v": "Microscope: (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>). Telescope: <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>" },
            { "k": "Tube length", "v": "Microscope: <i>L</i> ≈ <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>. Telescope: <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>. Not interchangeable" },
            { "k": "Why mirrors win", "v": "A mirror shows no chromatic aberration, can be supported from behind so it does not sag, and gathers more light for the same cost" },
            { "k": "What aperture buys", "v": "Light-gathering power and resolution, both separate from magnification. A wider objective shows fainter stars and separates closer pairs" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A compound microscope has an objective of focal length 1.5 cm and an eyepiece of focal length 5 cm. An object is 2 cm from the objective and the final image is at the near point (<i>D</i> = 25 cm). Find the objective image distance, the objective's magnification and the total magnifying power.",
          "steps": [
            "Objective, using the lens formula with <i>u</i><sub>o</sub> = −2 cm and <i>f</i><sub>o</sub> = 1.5 cm: 1/<i>v</i><sub>o</sub> = 1/1.5 − 1/2 = 0.667 − 0.5 = 0.167, so <i>v</i><sub>o</sub> = 6 cm.",
            "Objective magnification: <i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>| = 6/2 = 3.",
            "Eyepiece at the near point: <i>M</i><sub>e</sub> = 1 + <i>D</i>/<i>f</i><sub>e</sub> = 1 + 25/5 = 6.",
            "Multiply: <i>M</i> = 3 × 6 = 18."
          ],
          "ans": "<i>v</i><sub>o</sub> = 6 cm, <i>m</i><sub>o</sub> = 3, and the microscope magnifies 18 times. Note how the two stages multiply: neither lens alone would manage anything like it, and that is the entire reason for the two-lens design."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "An astronomical telescope is built from an objective of power 0.5 D and an eyepiece of power 25 D, in normal adjustment. Find its magnifying power.",
          "steps": [
            "Do not convert to focal lengths. <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = (1/<i>P</i><sub>o</sub>)/(1/<i>P</i><sub>e</sub>) = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>.",
            "<i>M</i> = 25/0.5 = 50.",
            "Check by the long route: <i>f</i><sub>o</sub> = 1/0.5 = 2 m = 200 cm and <i>f</i><sub>e</sub> = 1/25 = 0.04 m = 4 cm, so <i>M</i> = 200/4 = 50."
          ],
          "ans": "<i>M</i> = 50. The trap is the inversion: the <b>objective</b> is the low-power, long-focus lens and the <b>eyepiece</b> is the high-power one, so students who convert and then divide the wrong way get 1/50. Working straight from the powers sidesteps both the conversion and the inversion."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL",
          "q": "An astronomical telescope in normal adjustment has a magnifying power of 24 and a tube length of 100 cm. Find the two focal lengths.",
          "steps": [
            "Two equations: <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 24 and <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> = 100 cm.",
            "Substitute <i>f</i><sub>o</sub> = 24<i>f</i><sub>e</sub> into the second: 25<i>f</i><sub>e</sub> = 100 cm.",
            "<i>f</i><sub>e</sub> = 4 cm, so <i>f</i><sub>o</sub> = 96 cm."
          ],
          "ans": "<i>f</i><sub>o</sub> = 96 cm and <i>f</i><sub>e</sub> = 4 cm. The very long objective and very short eyepiece are the telescope signature, and the pair of equations is the standard way an examiner hides a magnifying-power question inside a geometry one."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A compound microscope has <i>f</i><sub>o</sub> = 2 cm and <i>f</i><sub>e</sub> = 5 cm, with the lenses 17 cm apart, focused so the final image is at infinity. Where must the object be, and what is the total magnifying power?",
          "steps": [
            "Final image at infinity means the intermediate image must fall exactly on the eyepiece's focus, 5 cm in front of it. With a 17 cm separation, <i>v</i><sub>o</sub> = 17 − 5 = 12 cm.",
            "Objective lens formula: 1/<i>u</i><sub>o</sub> = 1/<i>v</i><sub>o</sub> − 1/<i>f</i><sub>o</sub> = 1/12 − 1/2 = (1 − 6)/12 = −5/12, so <i>u</i><sub>o</sub> = −2.4 cm.",
            "<i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>| = 12/2.4 = 5.",
            "<i>M</i><sub>e</sub> = <i>D</i>/<i>f</i><sub>e</sub> = 25/5 = 5, the relaxed form, because the final image is at infinity.",
            "<i>M</i> = 5 × 5 = 25."
          ],
          "ans": "The object sits 2.4 cm from the objective, just outside its 2 cm focus as it must be, and the microscope magnifies 25 times. The relaxed-eye condition is what fixes <i>v</i><sub>o</sub>: once you see that the intermediate image has to land on the eyepiece's focus, everything after it is bookkeeping."
        },
        {
          "t": "mcq",
          "q": "The magnifying power of a simple microscope when the image is at infinity is:",
          "opts": [
            { "label": "1 + <i>D</i>/<i>f</i>", "nudge": "That is the <b>near point</b> value, for a strained eye. The most common mix-up in the topic, and a question always tells you which adjustment it means." },
            { "label": "<i>D</i>/<i>f</i>", "nudge": null },
            { "label": "<i>f</i>/<i>D</i>", "nudge": "Inverted. Since <i>f</i> is smaller than <i>D</i> for any usable magnifier, this is less than 1, which would mean the lens makes things look smaller." },
            { "label": "1 + <i>f</i>/<i>D</i>", "nudge": "Inverted and then shifted by 1. It gives something barely above 1 for any real lens, which no magnifying glass has ever done." }
          ],
          "correct": 1,
          "solution": "Image at infinity is the <b>relaxed</b> case, with the object exactly at the focus, so β = <i>h</i>/<i>f</i> and <i>M</i> = <i>D</i>/<i>f</i>. The fastest way to kill the two inverted options is to notice that a magnifier must magnify, so <i>M</i> has to exceed 1, and <i>f</i> is always less than <i>D</i>."
        },
        {
          "t": "mcq",
          "q": "An astronomical telescope in normal adjustment has <i>f</i><sub>o</sub> = 100 cm and <i>f</i><sub>e</sub> = 5 cm. Its magnifying power and tube length are:",
          "opts": [
            { "label": "20 and 105 cm", "nudge": null },
            { "label": "20 and 95 cm", "nudge": "The magnification is right but the tube is wrong: the two foci coincide, so the lenses stand <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> apart, not <i>f</i><sub>o</sub> − <i>f</i><sub>e</sub>. Subtracting is the Galilean design, with a diverging eyepiece." },
            { "label": "0.05 and 105 cm", "nudge": "The magnification ratio is inverted. Remember which lens is which: the objective is the long one, so the ratio is greater than 1." },
            { "label": "500 and 105 cm", "nudge": "This multiplies the focal lengths instead of dividing them. A units-blind slip, and 500 times from a one-metre tube should look implausible." }
          ],
          "correct": 0,
          "solution": "<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 100/5 = 20, and <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> = 105 cm. Both come straight out of the normal-adjustment picture: the intermediate image sits at the shared focus, so the separation is the sum, and the angle is scaled by the ratio."
        },
        {
          "t": "mcq",
          "q": "To increase the magnifying power of a compound microscope, one should:",
          "opts": [
            { "label": "increase both <i>f</i><sub>o</sub> and <i>f</i><sub>e</sub>", "nudge": "This lowers <i>M</i>. Both focal lengths sit in denominators, so growing them shrinks the product." },
            { "label": "decrease both <i>f</i><sub>o</sub> and <i>f</i><sub>e</sub>", "nudge": null },
            { "label": "increase <i>f</i><sub>o</sub>, decrease <i>f</i><sub>e</sub>", "nudge": "That is the <b>telescope</b> recipe, where the objective wants a long focal length. The two instruments pull in opposite directions and this is the trap the whole option set is built around." },
            { "label": "use a single long-focus lens", "nudge": "This abandons the two-stage design that makes high magnification possible at all, and a long focal length makes a poor magnifier besides." }
          ],
          "correct": 1,
          "solution": "<i>M</i> ≈ (<i>L</i>/<i>f</i><sub>o</sub>)(<i>D</i>/<i>f</i><sub>e</sub>), so both focal lengths appear in denominators and smaller is stronger. That is why a microscope's lenses are tiny while a telescope's objective is enormous, and remembering the two together is easier than remembering either alone."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A magnifying glass of focal length 5 cm is used to read fine print. Find its magnifying power when the final image is (a) at infinity and (b) at the near point, <i>D</i> = 25 cm.",
              "a": "(a) Relaxed: <i>M</i> = <i>D</i>/<i>f</i> = 25/5 = 5. (b) Near point: <i>M</i> = 1 + <i>D</i>/<i>f</i> = 6. The strained setting buys exactly one extra unit, always, whatever the focal length, because the extra term is the pure number 1."
            },
            {
              "q": "[NEET] The objective and eyepiece of an astronomical telescope have focal lengths 150 cm and 6 cm. Find the magnifying power and the tube length in normal adjustment.",
              "a": "<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 150/6 = 25, and <i>L</i> = 150 + 6 = 156 cm. A metre and a half of tube for 25 times is the honest trade a refractor makes, and it is one reason large telescopes are reflectors."
            },
            {
              "q": "[JEE Main] A compound microscope has <i>f</i><sub>o</sub> = 1 cm, <i>f</i><sub>e</sub> = 4 cm and tube length 20 cm. Taking <i>v</i><sub>o</sub> as the tube length minus <i>f</i><sub>e</sub>, estimate the total magnifying power for a relaxed eye.",
              "a": "<i>v</i><sub>o</sub> = 20 − 4 = 16 cm, so <i>m</i><sub>o</sub> ≈ <i>v</i><sub>o</sub>/<i>f</i><sub>o</sub> = 16 (the approximation |<i>u</i><sub>o</sub>| ≈ <i>f</i><sub>o</sub>, good when the object sits just outside the focus). <i>M</i><sub>e</sub> = <i>D</i>/<i>f</i><sub>e</sub> = 25/4 = 6.25. So <i>M</i> ≈ 16 × 6.25 = 100, a standard laboratory figure."
            },
            {
              "q": "[JEE Main] A telescope has a magnifying power of 20 in normal adjustment with a 5 cm eyepiece. It is readjusted so the final image forms at the near point. What is the new magnifying power?",
              "a": "<i>M</i><sub>near</sub> = (<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>)(1 + <i>f</i><sub>e</sub>/<i>D</i>) = 20(1 + 5/25) = 20 × 1.2 = 24. Note this correction factor uses <i>f</i><sub>e</sub>/<i>D</i>, not <i>D</i>/<i>f</i><sub>e</sub>: it is a small boost of 20 per cent, not a fivefold one."
            },
            {
              "q": "[JEE Advanced] A reflecting telescope uses a concave mirror objective of focal length 120 cm and an eyepiece of 3 cm. Find the magnifying power and give two reasons this design is preferred over a refractor of the same power.",
              "a": "<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 120/3 = 40. Reasons: a mirror's focal length is <i>R</i>/2, pure geometry, so it shows <b>no chromatic aberration</b> at all; and a mirror can be supported from behind across its whole back, so it can be made very large and rigid without sagging, which also means it gathers far more light. A large lens can only be held at its rim and splits colours as well."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "<b>Confusing magnifying power with linear magnification.</b> <i>M</i> compares <b>angles</b> at the eye; <i>m</i> compares <b>heights</b>. For a magnifier focused at infinity, <i>m</i> is infinite while <i>M</i> = <i>D</i>/<i>f</i> is about 5.",
            "<b>Swapping the roles of objective and eyepiece.</b> Microscope: the objective has the <b>short</b> focal length. Telescope: the objective has the <b>long</b> one. They are opposite, and mixing them inverts the answer exactly.",
            "<b>Not reading which adjustment is asked.</b> Relaxed, normal or image at infinity uses <i>D</i>/<i>f</i> and <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>; strained or at the near point adds the 1, or the factor (1 + <i>f</i><sub>e</sub>/<i>D</i>) for a telescope.",
            "<b>Using the wrong tube length.</b> Telescope in normal adjustment: <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>. Microscope: <i>L</i> ≈ <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>. These are not interchangeable, and some sources define the microscope's the other way round, so check what a question means before substituting.",
            "<b>Thinking a bigger objective means more magnification.</b> Aperture buys <b>light</b> and <b>resolution</b>, not magnifying power, which depends only on the focal lengths."
          ]
        },
        {
          "t": "protip",
          "html": "for telescopes work directly in powers, <i>M</i> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>, and you skip two unit conversions and the inversion trap in one move. keep a one-line role check handy: <b>short-focus objective means microscope, long-focus objective means telescope</b>. and remember what magnification does not buy you: two stars a hair apart stay a single blur no matter how much you magnify, because <b>resolving power</b> is set by the objective's diameter and the wavelength, not by the eyepiece. that is a Wave Optics idea, and it is the real reason research telescopes are built enormous rather than merely long."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "<i>M</i> = β/α, the <b>angle</b> ratio, and <i>D</i> = 25 cm", "note": "distinct from linear <i>m</i> = <i>h</i>′/<i>h</i>, which compares heights" },
            { "f": "Simple microscope: <i>M</i> = <i>D</i>/<i>f</i>, or 1 + <i>D</i>/<i>f</i> at the near point", "note": "object inside <i>F</i>, image virtual and erect" },
            { "f": "Compound: <i>M</i> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>) ≈ (<i>L</i>/<i>f</i><sub>o</sub>)(<i>D</i>/<i>f</i><sub>e</sub>)", "note": "both focal lengths small; tube <i>L</i> ≈ <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>" },
            { "f": "Telescope: <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>, <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>", "note": "long objective, short eyepiece. Near point multiplies by (1 + <i>f</i><sub>e</sub>/<i>D</i>)" },
            { "f": "Reflector: same <i>M</i>, objective is a concave mirror", "note": "no chromatic aberration, rigid, large, and cheaper per unit aperture" },
            { "f": "Aperture buys light and resolution, never magnification", "note": "the limit magnification cannot beat, and it belongs to Wave Optics" }
          ],
          "aids": [
            "angle, not size. magnifying power is about the angle at your eye and nothing else",
            "micro short, tele long: that is the objective's focal length in each instrument",
            "relaxed is D over f; strained adds 1. read the wording before you pick the formula"
          ]
        }
      ]
    }
  ]
};

export default phy12RayOptics;
