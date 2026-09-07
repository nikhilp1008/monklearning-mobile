/**
 * Chapter 05 · Magnetism and Matter. Physics, Class 12.
 *
 * Restructured from pages 327 to 385 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-12-04-moving-charges-magnetism.ts, the chapter immediately before this
 * one, which is also where this chapter's prerequisites live and are quoted
 * from rather than re-derived (see SEAMS below): the magnetic dipole moment of
 * a current loop, the right-hand rule, and torque on a loop.
 *
 * FIVE TOPICS FROM FIVE SOURCE SUB-TOPICS, NO MERGE AND NO SPLIT, same shape
 * as the previous chapter. The source runs five sub-topics end to end, each
 * with its own Exam Relevance line and cheat sheet: Bar Magnet, Magnetic
 * Field Lines and Dipole Moment (327-336), Earth's Magnetism (337-345),
 * Magnetic Properties of Materials (346-354), Magnetism and Gauss's Law
 * (355-361), and Permanent Magnets and Electromagnets (362-368). Five sits
 * inside the validator's 4-to-6 window with room to spare, and every seam is
 * already a clean subtopic boundary, so there was nothing to merge and no
 * subtopic whose own title carried an "and" that needed splitting.
 *
 * Pages 369 to 385 are the Round 2 Addendum (Addenda A to E: force on a
 * dipole in a non-uniform field by the energy-gradient method, the
 * oscillation period re-derived from energy conservation, magnetic circuits
 * -- MMF, reluctance, air-gap problems -- which the chapter proper never
 * mentions, neutral-point superposition geometry for two magnets at angles,
 * and the hysteresis power-loss formula plus cylindrical shielding factors).
 * Per the brief this is not a topic, and NONE of it is used below: every
 * `formula`, `defgrid`, `deriv` and `proc` block in all five topics traces to
 * the chapter proper, pages 327-368. Unlike the previous chapter, no single
 * line was worth pulling forward from the addendum either -- the five
 * subtopics already carry a full formula set, four worked examples and a
 * cheat sheet each, and the addendum's five methods (energy-gradient forces,
 * energy-conservation oscillation, magnetic circuits, multi-magnet
 * superposition, hysteresis power loss) all sit one clear step past what
 * CBSE, JEE Main, NEET or JEE Advanced ask of this chapter. The addendum was
 * read in full regardless, and its own arithmetic is a case study in why: its
 * very first worked example (Addendum A, Example A.1) sets up a bar magnet in
 * a UNIFORM Earth's field, correctly derives that the energy-gradient force
 * must then be zero, contradicts its own premise mid-derivation ("Wait -- ...
 * But this contradicts the known result"), and silently substitutes a
 * different problem (a magnet near a second magnet's non-uniform field) to
 * get a nonzero answer -- without ever flagging that the printed question and
 * the printed solution are not the same problem. Exactly the "unreliable"
 * texture the brief warns the addendum carries.
 *
 * ERRATA REVIEWED (source pages 924 to 925, both pages read in full). Two
 * entries are listed, and NEITHER touches this chapter: one restates a
 * self-contradictory Alternating Current practice question (Chapter 7, page
 * 14, where the given data placed the circuit exactly at its own resonant
 * frequency while also claiming a phase lag), the other swaps a dark/bright
 * fringe condition in Wave Optics (Chapter 10, page 33). Magnetism and Matter
 * has no listed erratum. Confirmed by reading the errata pages directly
 * rather than assumed from the brief.
 *
 * CORRECTIONS BEYOND THE ERRATA. None. Every worked example, every practice
 * answer and every MCQ key across all five subtopics -- twenty worked
 * examples, twenty-five practice items, twenty MCQs -- was independently
 * recomputed from the question's own given data before this file's `ex`,
 * `practice` and `mcq` blocks were written, addendum first as the brief
 * asks. All matched the printed value. This differs from the previous
 * chapter, which found one orphaned unit fragment; this range's own damage
 * (see below) lands entirely on the ~4,300 mid-formula Mathematical
 * Alphanumeric characters and the pervasive vanished inter-word spaces,
 * neither of which touched a printed numeral or a printed answer key.
 *
 * SOURCE DAMAGE. Three dialects actually appear in this range, one of them
 * heavier than anywhere the brief's own list anticipates by name.
 *
 *   - MATHEMATICAL ALPHANUMERIC SYMBOLS IN EVERY MATH RUN, at the highest
 *     density seen in any chapter read so far for this app: a script count
 *     over the raw extraction returns 3,256 characters in U+1D400 to U+1D7FF
 *     across these 59 pages. Every variable in every formula, derivation,
 *     worked example and legend arrives this way -- m, B, H, M, chi, mu, all
 *     of it -- and every one was retyped in ordinary italic through the
 *     `<i>` tag rather than copied, since the codepoint itself draws as a
 *     blank box on device. A second, related dialect rides along with it:
 *     the combining vector arrow U+20D7 lands BEFORE the letter it modifies
 *     rather than over it (confirmed on 148 occurrences, e.g. the extraction
 *     of "m-with-arrow" reads arrow-then-newline-then-m), which the brief
 *     names explicitly. This chapter writes every vector as a plain italic
 *     letter per the house style regardless (B, H, M, m for moment), so the
 *     arrow's position was moot once the decision to drop it was made, but
 *     it is recorded here because it is exactly the ordering the brief
 *     flags and it is confirmed, not assumed.
 *   - BACKSLASH-LETTER OPERATOR TOKENS, but in a variant spelling this
 *     extraction pass did not put a backslash in front of: every occurrence
 *     in this range reads as the three literal characters "{", "n", and a
 *     letter, not "\" + "n" + a letter the way the previous chapter's own
 *     extraction rendered the same family. Decoded the same way, by the
 *     arithmetic each line is heading toward: "{nK" is the degree sign
 *     (pervasive -- every angle in the chapter, e.g. "cos30{nK"), "{n7" is
 *     the minus sign ("U = {n7 1.17J"), "{nN" is the multiplication or
 *     centred dot ("0.46 {nN sin30{nK"), "{nA" is the dot product or a unit's
 *     centred dot ("m {nA B" for the dot product; "A{nAm^2" for the SI unit),
 *     and "{nC" is the ratio colon ("2 {nC 1" for the axial-to-equatorial
 *     ratio). The ellipsis token the pilot chapter met does not occur
 *     anywhere in this range. No ASCII-heading-shift dialect (the +29/-29/+46
 *     family the previous chapter found on two section headings) appears
 *     anywhere in these 59 pages either -- checked directly with a pattern
 *     search for scrambled all-caps runs, not assumed absent.
 *   - INTER-WORD SPACES VANISH at tight kerning, far more often than the
 *     three-instance count the previous chapter recorded: a scan for
 *     unbroken lowercase runs of fifteen characters or more returns thirty
 *     distinct collisions in this range alone (a sample: "linesneverintersect",
 *     "withnopermanent", "acooperativelock", "monopolesshouldexist"). Every
 *     one was re-spaced by hand against the sentence it sits in; none altered
 *     a number or a formula, only prose.
 *
 *   No blank-page run occurs anywhere in 327-385: every one of the 59 pages
 *   carries a page-appropriate line count when checked directly (the
 *   shortest, at 7-9 lines each, are the chapter's own figure-caption
 *   appendix pages, which repeat each figure's caption once inline and once
 *   on its own page -- not damage, just how this book's own layout works).
 *   Confirmed by counting lines between every consecutive PAGE marker in the
 *   range rather than assumed from the brief's "another book" warning.
 *
 * DIMENSIONS, worked in M L T A. Sixteen formula lines checked, all
 * consistent with each other and with the previous chapter's own dimensional
 * formula for B, which this chapter quotes rather than re-derives:
 *
 *   - Dipole moment m = NIA (current loop) or qm(2l) (pole model): [A][L^2] =
 *     A L^2, matching the source's own [L^2 A]. The SI unit A m^2 falls
 *     straight out.
 *   - Torque tau = m x B: [A L^2][M T^-2 A^-1] = M L^2 T^-2, the energy
 *     dimension -- the identical coincidence Moving Charges and Magnetism
 *     flagged for tau = NIAB, now recurring for the bar-magnet torque built
 *     from the same cross product.
 *   - Potential energy U = -m.B: [A L^2][M T^-2 A^-1] = M L^2 T^-2, an
 *     energy, as required, and dimensionally identical to torque -- which is
 *     exactly why this chapter insists on N m for one and J for the other
 *     rather than trusting the unit to announce which is which.
 *   - Short-magnet axial field B_axial = (mu0/4pi)(2m/r^3): [M L T^-2 A^-2]
 *     [A L^2] / [L^3] = M T^-2 A^-1, the field dimension, matching B exactly;
 *     the equatorial field carries the identical dimensional formula since it
 *     differs only by the factor of 2 and a sign, never by a power of length.
 *   - Oscillation period T = 2 pi root(I/mB): moment of inertia I is [M L^2];
 *     mB is [A L^2][M T^-2 A^-1] = M L^2 T^-2. I/mB = [M L^2]/[M L^2 T^-2] =
 *     T^2, and the square root gives a time. No v or omega enters on either
 *     side, so the dimensional check alone confirms the period does not
 *     depend on amplitude, the small-oscillation assumption the formula
 *     already carries.
 *   - Magnetising field H = B0/mu0: [M T^-2 A^-1] / [M L T^-2 A^-2] =
 *     L^-1 A, matching the source's own [L^-1 A] and the SI unit A/m.
 *   - Magnetisation M = m_net/V: [A L^2]/[L^3] = L^-1 A, identical to H's
 *     dimension -- the reason B = mu0(H + M) can add them directly without a
 *     conversion factor, and the reason confusing the two costs no marks on
 *     a units check even though it is a real physics error.
 *   - Susceptibility chi = M/H: [L^-1 A]/[L^-1 A], dimensionless, matching
 *     the source. Relative permeability mu_r = 1 + chi is dimensionless by
 *     the same argument, since 1 and chi must share a dimension to add.
 *   - Permeability mu = mu0 mu_r: dimensionless mu_r leaves mu the same
 *     dimension as mu0, M L T^-2 A^-2, matching the source's printed
 *     dimensional formula for mu exactly.
 *   - Curie's law chi = C mu0/T: chi is dimensionless and mu0 is
 *     [M L T^-2 A^-2], so the Curie constant C must carry [M^-1 L^-1 T^3 A^2]
 *     x [T, temperature] to cancel mu0/T and leave chi dimensionless -- the
 *     source never states C's own dimensional formula, and this chapter
 *     does not need it beyond the ratio form chi1 T1 = chi2 T2, which is
 *     dimensionally self-consistent regardless (both sides are chi x
 *     temperature).
 *   - Magnetic flux Phi_B = B.A: [M T^-2 A^-1][L^2] = M L^2 T^-2 A^-1,
 *     matching the source's printed dimensional formula and giving the
 *     weber directly as a tesla metre squared.
 *   - Gauss's law for magnetism, the closed-surface integral: both sides of
 *     a closed-surface flux statement carry [M L^2 T^-2 A^-1] once a flux is
 *     on each side (this chapter's right side is simply zero, dimensionally
 *     trivial but not dimensionally empty -- zero webers is still a flux).
 *   - Cored-solenoid field B = mu0 mu_r n I: n is turns per length, [L^-1],
 *     dimensionless (turns don't carry a dimension); mu0 mu_r n I =
 *     [M L T^-2 A^-2][L^-1][A] = M T^-2 A^-1, the field dimension, matching
 *     B and confirming a core multiplies the field by a pure number (mu_r)
 *     rather than changing what kind of quantity comes out.
 *   - Pole-face lifting force F = B^2 A/mu0: [M T^-2 A^-1]^2 [L^2] /
 *     [M L T^-2 A^-2] = [M^2 T^-4 A^-2][L^2] / [M L T^-2 A^-2] = M L T^-2, a
 *     force, matching the source and matching the previous chapter's own
 *     force-from-B^2 check on the energy density line it flagged and did not
 *     use. This chapter's version is used, since it is the pole-face lifting
 *     force stated outright by the source rather than an addendum aside, and
 *     it reduces cleanly where that one did not.
 *   - Dip-latitude relation tan(delta) = 2 tan(lambda): both sides are the
 *     ratio of two field components with identical dimension (B_V/B_H), so
 *     the equation is a dimensionless identity, as any equation between two
 *     tangents of angles must be. Consistent, and confirms the "2" is a
 *     genuine geometric factor, not a unit-conversion factor in disguise.
 *
 *   Sixteen formulas checked, sixteen consistent, none flagged. Unlike the
 *   previous chapter's field-energy-density aside, nothing in this range's
 *   used formulas produced a dimensional mismatch on the first pass.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Every field value in every
 * worked example, practice answer and MCQ sits where it should: Earth's own
 * field throughout Subtopic 02's examples is quoted in gauss between 0.32 G
 * and 0.68 G (3.2 to 6.8 x 10^-5 T), matching the textbook anchor of about
 * 5 x 10^-5 T for Earth's surface field almost exactly, and the one
 * laboratory field this chapter computes outright, the horseshoe
 * electromagnet's 1.5 to 1.57 T pole face, sits right where "a strong lab
 * magnet is about 1 T" says it should, not an order of magnitude off in
 * either direction. Susceptibility signs are consistent everywhere they are
 * used: every diamagnetic chi in every table and example is negative and of
 * order 10^-5, every paramagnetic chi is positive and of the same tiny
 * order, and every ferromagnetic chi (400, 476, 499, 1200) is positive and
 * three to four orders of magnitude larger, exactly the "small and negative
 * / small and positive / large" pattern the brief states as the plausibility
 * bar for this chapter specifically. Limiting cases used where they teach:
 * the finite-magnet axial and equatorial fields collapse to the short-magnet
 * forms (r^2 - l^2)^2 to r^4 and (r^2 + l^2)^(3/2) to r^3 once r is much
 * larger than the half-length l, recovering the clean 1/r^3 falloff -- never
 * 1/r^2, which is the point Topic 01's derivation makes explicit by building
 * the short-magnet field as an equivalent solenoid rather than asserting the
 * power. The dip-latitude relation is checked at both ends: lambda = 0 gives
 * delta = 0 (a purely horizontal field at the magnetic equator) and lambda
 * approaches 90 degrees gives delta approaching 90 degrees (a purely
 * vertical field at the magnetic pole), and the total field's own
 * root(1 + 3 sin^2(lambda)) factor is checked at both ends too: it equals 1
 * at the equator and 2 at the pole, so B_E doubles from equator to pole,
 * which is the same factor of 2 as the axial-to-equatorial short-magnet
 * ratio, surfacing a second time in a different guise. Gauss's law for
 * magnetism is itself a limiting-case argument taken to its logical end: the
 * net flux through any closed surface is checked against the case of a
 * surface shrunk to enclose a single pole, and even there it is exactly
 * zero, because Subtopic 01 already established that "a single pole" is not
 * a thing that exists to be enclosed.
 *
 * SEAMS: what is quoted as already known, and from which file. The magnetic
 * dipole moment of a current loop, m = NIA, and the torque tau = m x B on
 * such a loop are quoted directly from phy-12-04-moving-charges-magnetism.ts
 * Topic 05, which derived both from the Biot-Savart law and the Lorentz
 * force; this chapter picks the vector relations up unchanged and applies
 * them to a bar magnet's EQUIVALENT current loop (the "magnet as a stack of
 * microscopic current loops" picture) rather than re-deriving torque from
 * first principles a second time. The right-hand rule itself traces further
 * back, through that same chapter, to phy-11-06-rotational-motion.ts, and is
 * not re-explained here beyond a one-line reminder. The cross and dot
 * products are quoted from math-12-10-vector-algebra.ts, as the previous
 * chapter already established for this course. Simple harmonic motion's
 * governing equation and its period T = 2 pi / omega, quoted by the previous
 * chapter from phy-11-13-oscillations.ts for a current loop's own
 * oscillation, are quoted again here for the bar-magnet oscillation formula
 * T = 2 pi root(I/mB) in Topic 01, which is the same equation with the
 * torsional restoring constant mB standing in for a spring constant. Curie's
 * law's own T^-1 dependence is presented as an empirical fact of this
 * chapter, not derived from the kinetic theory of Class 11's
 * phy-11-12-kinetic-theory.ts, since the source itself never makes that
 * connection explicit.
 *
 * FIGURES. All eight named figures drawn (5.1 through 5.8), zero designed
 * beyond the named set -- unlike the previous chapter, nothing on the
 * brief's own natural-picture list needed a figure the source had not
 * already drawn as one of the eight. The panel rule is observed exactly
 * where the brief warns it will be tested: Figure 5.5's diamagnetic,
 * paramagnetic and ferromagnetic comparison is ONE diagram block with THREE
 * CHIPS, never three panels, and the visual encoding is field-line spacing
 * at the sample (wide at the bar for diamagnetic, unchanged for paramagnetic,
 * pulled tight for ferromagnetic) rather than three unrelated pictures. The
 * hysteresis loop, Figure 5.6, is drawn with a `pts` curve precisely because
 * B is not a function of H on a hysteresis loop -- the same closed,
 * two-branch trace the brief calls out by name -- with the two named points
 * (retentivity, coercivity) placed with an explicit `at` rather than the
 * default north-east, since a line leaves both of them in the direction the
 * default would have put the label. `into`/`outof` marks do not appear
 * anywhere in this chapter: unlike Moving Charges and Magnetism, nothing in
 * these five subtopics puts a field through the plane of the page rather
 * than in it, and Figure 5.5's dia/para/ferro comparison uses lateral field
 * lines instead for exactly that reason.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12MagnetismMatter: Chapter = {
  "chapter": "05",
  "title": "Magnetism and Matter",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Bar Magnet, Magnetic Field Lines and Dipole Moment",
      "chip": "01 BAR MAGNET",
      "kalam": "snap a magnet in half and you get two magnets, never a lone pole",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Bar Magnet, Magnetic Field Lines and Dipole Moment</b><br>Reliably good for 1 to 2 questions in JEE Main (torque, potential energy, axial/equatorial fields), and a frequent NEET assertion-reason or single-numeric item. JEE Advanced tends to fold it into a multi-body field-superposition or oscillation problem. CBSE Boards almost always carry a 2 to 3 mark question on field-line properties or the torque/PE derivation.<br><br><b>02 · Earth's Magnetism</b><br>A dependable source of 1 question in JEE Main and NEET, usually on resolving the field into components (<i>B<sub>H</sub></i>, <i>B<sub>V</sub></i>, δ) or the dip-latitude relation. JEE Advanced favours apparent-dip combinations and the full dipole model. CBSE Boards reliably ask a 2 to 3 mark question defining the three elements or deriving tan δ = 2 tan λ.<br><br><b>03 · Magnetic Properties of Materials</b><br>One of the highest-yield subtopics of the chapter. NEET loves single-fact items on dia/para/ferro classification, Curie temperature, and the meaning of the hysteresis-loop area. JEE Main asks numericals on χ, μ<sub>r</sub>, <i>B</i> and Curie's law. JEE Advanced reaches for domain/saturation estimates and hysteresis energy loss. CBSE Boards reliably carry a 3-mark distinguish-the-three-types or hysteresis question.<br><br><b>04 · Magnetism and Gauss's Law</b><br>A short but genuinely high-yield topic. CBSE Boards favour a 1 to 2 mark statement-or-meaning question. NEET loves assertion-reason and single-statement MCQs on what the net flux through a closed surface must be. JEE Main asks the occasional flux-bookkeeping numerical. Conceptually it underpins the flux idea that returns in full force in Electromagnetic Induction, and it is one of Maxwell's four equations.<br><br><b>05 · Permanent Magnets and Electromagnets</b><br>A steady CBSE favourite for 2 to 3 marks: how a permanent magnet is made, why soft iron is used for an electromagnet's core, or selecting a material from a hysteresis loop. NEET asks single-statement and assertion-reason items on material choice. JEE Main reaches for the cored-solenoid field <i>B</i> = μ<sub>0</sub>μ<sub>r</sub><i>nI</i> and electromagnet lifting-force numericals; JEE Advanced may turn these into a small design problem. High-yield, low-effort marks once the soft/hard logic is locked in."
        },
        {
          "t": "p",
          "html": "Scatter iron filings on a sheet of paper laid over a bar magnet and tap it gently. The filings do not pile up randomly, they arrange into graceful arcs sweeping from one end of the magnet to the other. You have just seen a magnetic field. Those two ends are the <b>north pole</b> and the <b>south pole</b>, and they behave a lot like the +<i>q</i> and −<i>q</i> of an electric dipole you already know: like poles repel, unlike poles attract. The resemblance is close enough that a single number captures how strong a magnet is and which way it points, the <b>magnetic dipole moment <i>m</i></b>, a vector running from S to N inside the magnet."
        },
        {
          "t": "p",
          "html": "But here is the one place the analogy breaks, and it is the most important fact in the whole chapter. With charges, you can hold a lone +<i>q</i> in your hand. With magnets, <b>you cannot isolate a single pole.</b> Snap a bar magnet in half hoping to collect a pure north pole, and you get two complete, weaker magnets, each with its own N and S. Snap those again: four magnets. This is the experimental face of a deep law, <b>magnetic monopoles do not exist</b>, and it is why a magnet's field lines form continuous closed loops with no beginning and no end, unlike electric field lines, which are born on +<i>q</i> and die on −<i>q</i>."
        },
        {
          "t": "think",
          "html": "picture a tiny compass needle as a baby bar magnet. drop it anywhere near a big magnet and it swings until it lines up like a weathervane in the wind, its n end pointing along the local field. do this at hundreds of points and join the arrows head to tail: those joined arrows are the field lines. where they crowd tightly, near the poles, the field is strong; where they fan out, it is weak. a field line is just the path your imaginary compass would trace, one step at a time."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.1 · A BAR MAGNET'S FIELD, CLOSED LOOPS",
          "chips": [
            "field lines close through the magnet, never starting or ending"
          ],
          "captions": [
            "A bar magnet with its north pole on the right, south on the left. The nested loops are field lines: they emerge from N, arc around the outside to S, and (though the loops drawn here stop at the magnet's surface) continue right through the interior from S back to N, closing every single one of them. Density carries strength: the loops crowd close near the poles and fan out with distance, exactly the iron-filing pattern the paragraph above describes. A compass dropped anywhere would swing tangent to whichever loop passes through that point, its N end pointing the way the arrow does."
          ],
          "frames": [
            {
              "x": [
                -3,
                3
              ],
              "y": [
                -2.2,
                2.2
              ],
              "axes": "none",
              "curves": [
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 1.3,
                  "b": 0.8
                },
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 1.9,
                  "b": 1.2
                },
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 2.5,
                  "b": 1.6
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 1.8,
                  "h": 0.6,
                  "tone": "ink"
                }
              ],
              "labels": [
                {
                  "x": -1.15,
                  "y": 0,
                  "text": "S"
                },
                {
                  "x": 1.15,
                  "y": 0,
                  "text": "N"
                }
              ],
              "arrows": [
                {
                  "from": [
                    0.4,
                    1.6
                  ],
                  "to": [
                    -0.4,
                    1.6
                  ],
                  "tone": "amber",
                  "label": "B",
                  "at": "above"
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two more pictures make the field lines feel less abstract. A bar magnet's external field is nearly identical to a tightly wound current-carrying solenoid's: Ampere's old hypothesis, that all magnetism traces back to tiny circulating currents inside matter, lets you treat a magnet as a stack of microscopic current loops, which is why the same dipole-moment formula (<i>m</i> = <i>NIA</i> for a coil) describes both. And it answers a question every child asks: why does a magnet pick up an iron nail but ignore a wooden pencil? The nail is packed with atomic current loops pointing every which way, cancelling out, so it starts unmagnetised. Bring the magnet close and its field nudges those atomic moments into rough alignment, turning the nail into a temporary magnet whose near end is an opposite pole, pulled in. Wood has no such moments to align, so it barely responds. This attraction needs the field to vary from place to place, a point the next section makes exact."
        },
        {
          "t": "p",
          "html": "The same non-uniform-field rule explains a keychain magnet and a steel almirah door: bring the magnet near the sheet steel and it snaps flat against it well before actual contact, exactly because the field gets stronger the closer you get, dB/dx points inward, and the steel's own induced moment gets dragged along the gradient. Move the same magnet toward a wooden door and nothing happens at any distance, because wood has no significant moment to induce in the first place."
        },
        {
          "t": "def",
          "term": "Magnetic dipole moment, the measure of a magnet's strength and orientation",
          "html": "<i>m</i> = <i>NIA</i> (current loop) or <i>m</i> = <i>q<sub>m</sub></i>(2<i>l</i>) (pole model, pole strength <i>q<sub>m</sub></i> times the magnetic length 2<i>l</i>). SI unit: A m<sup>2</sup>, also written J T<sup>-1</sup>. Dimensional formula: L<sup>2</sup>A. Points from S to N inside the magnet, the same convention as the current loop's normal by the right-hand rule quoted from the previous chapter."
        },
        {
          "t": "p",
          "html": "The formula comes in two equivalent dresses. <i>m</i> = <i>NIA</i> is the current-loop version, natural whenever a coil or an equivalent solenoid is on the table, the way the derivation below builds it. <i>m</i> = <i>q<sub>m</sub></i>(2<i>l</i>) is the pole-strength version, natural whenever a problem hands you a magnet's own length and asks about forces on its two ends, the way the torque derivation below builds it. Both describe the identical vector; pick whichever one the given data hands you directly, never convert between them for its own sake."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Three idealisations sit under every clean formula in this topic. The <b>short-magnet (point-dipole) approximation</b>, the axial and equatorial fields boxed below, holds only when the distance <i>r</i> is much larger than the magnet's own half-length <i>l</i>; up close, the full finite-length expressions are needed instead. A <b>uniform field</b> is assumed whenever the net force on a magnet is said to vanish, true only when both poles sit in the same field strength; in a NON-uniform field the poles feel unequal forces and there is a genuine net translational force. And the <b>pole-strength (magnetic-charge) model</b>, <i>q<sub>m</sub></i>, is a calculational convenience only, never physically real, since Section 1 already established that isolated poles do not exist."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · TORQUE ON A DIPOLE IN A UNIFORM FIELD",
          "tag": "a couple, never a net push, in a uniform field",
          "main": "<i>τ</i> = <i>m</i> × <i>B</i>, |<i>τ</i>| = <i>mB</i> sin θ",
          "legend": [
            "θ is the angle between <i>m</i> and <i>B</i>; torque is maximum at θ = 90°, zero at θ = 0° or 180°",
            "<i>m</i> in A m², <i>B</i> in tesla (T)",
            "unit of τ: N m, dimensional formula M L² T⁻²"
          ],
          "note": "The net force on the dipole is exactly zero in a uniform field: the N and S poles feel equal, opposite, non-collinear forces, a couple that turns the magnet without translating it. A net translational force needs a non-uniform field, met later in this topic."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · POTENTIAL ENERGY AND WORK",
          "tag": "the same integral that gives an electric dipole its energy",
          "main": "<i>U</i> = −<i>m</i> · <i>B</i> = −<i>mB</i> cos θ<br><i>W</i> = <i>mB</i>(cos θ<sub>1</sub> − cos θ<sub>2</sub>)",
          "legend": [
            "<i>U</i> in joule, dimensional formula M L² T⁻², reference <i>U</i> = 0 chosen at θ = 90°",
            "<i>W</i> is the work an external agent does rotating the dipole from θ₁ to θ₂",
            "minimum (stable) energy at θ = 0°; maximum (unstable) at θ = 180°"
          ],
          "note": "Carry the negative sign through every line. Drop it and stable and unstable equilibria swap places: θ = 0° must come out as the LOWEST energy, aligned with the field, the way a compass needle settles."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FIELD OF A SHORT BAR MAGNET (POINT DIPOLE)",
          "tag": "valid only far from the magnet, r much greater than its half-length l",
          "main": "<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/4π)(2<i>m</i>/<i>r</i><sup>3</sup>)<br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/4π)(<i>m</i>/<i>r</i><sup>3</sup>)",
          "legend": [
            "<i>B</i><sub>axial</sub> points parallel to <i>m</i>; <i>B</i><sub>equatorial</sub> points anti-parallel to <i>m</i>",
            "at equal distance, <i>B</i><sub>axial</sub> : <i>B</i><sub>equatorial</sub> = 2 : 1, worth memorising as a pure ratio",
            "unit of <i>B</i>: tesla, dimensional formula M T⁻²A⁻¹"
          ],
          "note": "Full finite-length forms, half-length l: B_axial = (μ0/4π)(2mr)/(r²−l²)², B_equatorial = (μ0/4π)(m)/(r²+l²)^(3/2). Both collapse to the short-magnet forms above once r is much larger than l, the same 1/r³ falloff the axial-field derivation below builds directly, never a 1/r² step."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FULL (FINITE-LENGTH) FIELDS",
          "tag": "valid at any distance, half-length l, centre-distance r",
          "main": "<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/4π)(2<i>mr</i>)/(<i>r</i><sup>2</sup>−<i>l</i><sup>2</sup>)<sup>2</sup><br><i>B</i><sub>equatorial</sub> = (μ<sub>0</sub>/4π)(<i>m</i>)/(<i>r</i><sup>2</sup>+<i>l</i><sup>2</sup>)<sup>3/2</sup>",
          "legend": [
            "these reduce to the short-magnet forms the moment r is much larger than l, since (r²∓l²) then collapses to r²",
            "both still carry the same axial:equatorial 2:1 ratio only in that r ≫ l limit, not in general",
            "unit and dimensional formula unchanged from the short-magnet field: tesla, M T⁻²A⁻¹"
          ],
          "note": null
        },
        {
          "t": "defgrid",
          "title": "The electric-magnetic dipole analogy, a high-yield memory table",
          "tag": "wherever electrostatics has p and 1/4πε₀, magnetism has m and μ₀/4π",
          "rows": [
            {
              "k": "Dipole moment",
              "v": "<i>p</i> (electric) ↔ <i>m</i> (magnetic)"
            },
            {
              "k": "Constant",
              "v": "1/4πε<sub>0</sub> ↔ μ<sub>0</sub>/4π"
            },
            {
              "k": "Axial field (short dipole)",
              "v": "2<i>p</i>/4πε<sub>0</sub><i>r</i><sup>3</sup> ↔ μ<sub>0</sub>(2<i>m</i>)/4π<i>r</i><sup>3</sup>"
            },
            {
              "k": "Equatorial field (short dipole)",
              "v": "−<i>p</i>/4πε<sub>0</sub><i>r</i><sup>3</sup> ↔ −μ<sub>0</sub><i>m</i>/4π<i>r</i><sup>3</sup>"
            },
            {
              "k": "Torque",
              "v": "<i>p</i> × <i>E</i> ↔ <i>m</i> × <i>B</i>"
            },
            {
              "k": "Energy",
              "v": "−<i>p</i> · <i>E</i> ↔ −<i>m</i> · <i>B</i>"
            }
          ]
        },
        {
          "t": "think",
          "html": "a phone's own compass app is doing exactly this. its magnetometer chip is a solid-state stand-in for the iron filings, sensing the local field's direction the same way a scattered filing lines up with it, and the app just draws the arrow instead of making you tap the glass."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · AXIAL FIELD OF A BAR MAGNET, VIA AN EQUIVALENT SOLENOID",
          "steps": [
            {
              "eq": "Model the magnet as a solenoid of length 2<i>l</i>, radius <i>a</i>, <i>n</i> turns per unit length carrying current <i>I</i>. Find <i>B</i> at point <i>P</i> on the axis, distance <i>r</i> from centre <i>O</i>.",
              "why": "A solenoid's external field lines copy a bar magnet's almost exactly, so whatever this derivation finds transfers directly to the magnet. This is the same \"magnet as a stack of current loops\" picture from the intuition above, made quantitative."
            },
            {
              "eq": "A slice of thickness <i>dx</i> at distance <i>x</i> from centre behaves as one loop carrying (<i>n dx</i>)<i>I</i>, contributing <i>dB</i> = μ<sub>0</sub>(<i>n dx</i>)<i>Ia</i><sup>2</sup> / 2[(<i>r</i>−<i>x</i>)<sup>2</sup>+<i>a</i><sup>2</sup>]<sup>3/2</sup>",
              "why": "This is exactly the on-axis loop field the previous chapter derived, applied to one thin slice at separation (r − x) from P."
            },
            {
              "eq": "Short-magnet condition: <i>r</i> ≫ <i>a</i> and <i>r</i> ≫ <i>l</i>, so (<i>r</i>−<i>x</i>)<sup>2</sup>+<i>a</i><sup>2</sup> ≈ <i>r</i><sup>2</sup> for every <i>x</i> in [−<i>l</i>, <i>l</i>]",
              "why": "Far from the magnet, the small offset x and the coil radius a barely change the distance to P, so the denominator becomes a constant that can leave the integral."
            },
            {
              "eq": "<i>B</i> = ∫<sub>−l</sub><sup>l</sup> μ<sub>0</sub><i>nIa</i><sup>2</sup>/2<i>r</i><sup>3</sup> <i>dx</i> = μ<sub>0</sub><i>nIa</i><sup>2</sup><i>l</i>/<i>r</i><sup>3</sup>",
              "why": "With the denominator constant, the integral is elementary: it just totals up the length 2l of solenoid."
            },
            {
              "eq": "Total moment <i>m</i> = (<i>n</i>·2<i>l</i>)(<i>I</i>)(π<i>a</i><sup>2</sup>) ⇒ <i>nIa</i><sup>2</sup><i>l</i> = <i>m</i>/2π",
              "why": "Total turns times current times loop area, the definition of a solenoid's magnetic moment, rearranged to substitute back."
            },
            {
              "eq": "<i>B</i><sub>axial</sub> = μ<sub>0</sub><i>m</i>/2π<i>r</i><sup>3</sup> = (μ<sub>0</sub>/4π)(2<i>m</i>/<i>r</i><sup>3</sup>), directed along <i>m</i>",
              "why": "Substituting collapses the whole derivation to the boxed short-magnet axial field. The equatorial field is not built from a second integral: NCERT reads it straight off this same electric-magnetic analogy table, since the two dipole fields share one formula wearing different constants."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · OSCILLATION PERIOD OF A MAGNET IN A FIELD",
          "tag": "the torsional restoring constant mB stands in for a spring constant",
          "main": "<i>T</i> = 2π√(<i>I</i>/<i>mB</i>)",
          "legend": [
            "<i>I</i> is the magnet's moment of inertia about the oscillation axis, in kg m²",
            "small oscillations about the stable (aligned) equilibrium from Topic 01's own torque formula",
            "unit of T: second"
          ],
          "note": "The same equation as simple harmonic motion, T = 2π/ω, quoted from phy-11-13-oscillations.ts, with the torque's own restoring constant mB standing in for a spring constant k. No amplitude appears on either side, confirming the period is independent of how far the magnet is displaced, provided the displacement stays small."
        },
        {
          "t": "think",
          "html": "close up, the fine print matters, l and the exact shape of the magnet all show up in the full finite-length formulas. walk far enough away and none of that survives: every magnet, whatever its true shape, looks like the same clean point dipole, 2m over r cubed on the axis, m over r cubed on the equator. this is the same lesson every field this course has taught, close up the details bite, far away only the total moment counts."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.2 · TORQUE AS A COUPLE",
          "chips": [
            "equal, opposite, non-collinear forces on the two poles"
          ],
          "captions": [
            "A bar magnet tilted at angle θ to a uniform field B (the parallel arrows). The N pole feels a force qmB along B; the S pole feels the same magnitude opposite, along −B. The two forces are equal and opposite but act along different lines, separated by the perpendicular distance 2l sinθ, so they form a couple rather than cancelling to nothing: the magnet turns but does not drift sideways, exactly as the note under the torque formula states."
          ],
          "frames": [
            {
              "x": [
                -2.6,
                2.6
              ],
              "y": [
                -2,
                2
              ],
              "axes": "none",
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 2,
                  "h": 0.32,
                  "rot": 30,
                  "tone": "ink"
                }
              ],
              "segments": [
                {
                  "from": [
                    -2.3,
                    1.1
                  ],
                  "to": [
                    2.3,
                    1.1
                  ],
                  "soft": true,
                  "dash": true
                },
                {
                  "from": [
                    -2.3,
                    -1.1
                  ],
                  "to": [
                    2.3,
                    -1.1
                  ],
                  "soft": true,
                  "dash": true
                },
                {
                  "from": [
                    0.866,
                    0.5
                  ],
                  "to": [
                    -0.866,
                    -0.5
                  ],
                  "dash": true,
                  "label": "2l sin θ",
                  "at": "mid"
                }
              ],
              "arcs": [
                {
                  "at": [
                    0,
                    0
                  ],
                  "r": 0.55,
                  "from": 0,
                  "to": 30,
                  "label": "θ"
                }
              ],
              "arrows": [
                {
                  "from": [
                    -2.1,
                    1.1
                  ],
                  "to": [
                    -1.5,
                    1.1
                  ],
                  "tone": "soft",
                  "label": "B",
                  "at": "above"
                },
                {
                  "from": [
                    0.866,
                    0.5
                  ],
                  "to": [
                    1.55,
                    0.5
                  ],
                  "tone": "amber",
                  "label": "q_mB",
                  "at": "above"
                },
                {
                  "from": [
                    -0.866,
                    -0.5
                  ],
                  "to": [
                    -1.55,
                    -0.5
                  ],
                  "tone": "amber",
                  "label": "q_mB",
                  "at": "above"
                }
              ],
              "labels": [
                {
                  "x": 0.45,
                  "y": 0.92,
                  "text": "N"
                },
                {
                  "x": -0.45,
                  "y": -0.92,
                  "text": "S"
                }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TORQUE, WORK AND POTENTIAL ENERGY OF A DIPOLE",
          "steps": [
            {
              "eq": "Each pole feels <i>F</i> = <i>q<sub>m</sub>B</i>, N pole along <i>B</i>, S pole opposite. Perpendicular separation of the two lines of action: 2<i>l</i> sin θ.",
              "why": "Equal, opposite, non-collinear forces are a couple by definition (Figure 5.2), not a net force: the net is q_mB − q_mB = 0 whenever the field is uniform."
            },
            {
              "eq": "<i>τ</i> = <i>F</i> × (perpendicular separation) = (<i>q<sub>m</sub>B</i>)(2<i>l</i> sin θ) = (<i>q<sub>m</sub></i>·2<i>l</i>)<i>B</i> sin θ = <i>mB</i> sin θ",
              "why": "A couple's torque is one force times the perpendicular distance between the lines of action; substituting q_m·2l = m gives the boxed formula in vector form τ = m × B."
            },
            {
              "eq": "<i>dW</i> = <i>τ dθ</i> = <i>mB</i> sin θ <i>dθ</i>, integrated: <i>W</i> = ∫<sub>θ1</sub><sup>θ2</sup> <i>mB</i> sin θ <i>dθ</i> = <i>mB</i>(cos θ<sub>1</sub> − cos θ<sub>2</sub>)",
              "why": "Work done by an external agent rotating the dipole against the torque, standard work-against-a-variable-torque integral, quoted from the way work is built from a varying force elsewhere in this course."
            },
            {
              "eq": "Choosing <i>U</i> = 0 at θ = 90°: <i>U</i> = −<i>mB</i> cos θ = −<i>m</i> · <i>B</i>",
              "why": "This stored work IS the potential energy. The reference choice at 90° (where cos θ = 0) is what makes the formula come out this clean, and it is the same reference electrostatics uses for an electric dipole."
            },
            {
              "eq": "Non-uniform field: net force <i>F</i> = <i>m</i>(<i>dB</i>/<i>dx</i>) when <i>m</i> is aligned with a field that varies along <i>x</i>",
              "why": "If B increases along +x, the N and S poles now sit in slightly different field strengths and their forces no longer cancel; the difference over the pole separation gives this net pull. This is the precise statement of why a magnet attracts an iron nail: the nail's induced moment aligns with the field, and the field is strongest near the pole, so dB/dx ≠ 0 drags the nail in. No gradient, no pull."
            }
          ]
        },
        {
          "t": "p",
          "html": "Every worked problem below is one of three moves: read τ or U straight off the angle with the field, compare an axial field to an equatorial one with nothing but the clean 2 : 1 ratio, or track what happens to pole strength and pole separation when a magnet is cut or bent. Spot which move a problem wants before reaching for a formula."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A bar magnet of magnetic moment 4.5 A m² is held at 30° to a uniform magnetic field of 0.30 T. Find (a) the torque on it, (b) its potential energy, and (c) the work needed to rotate it from 30° to 90°.",
          "steps": [
            "τ = mB sin θ = (4.5)(0.30) sin30° = 1.35 × 0.5.",
            "U = −mB cos θ = −(1.35) cos30° = −1.35 × 0.866.",
            "W = mB(cos θ1 − cos θ2) = 1.35(cos30° − cos90°) = 1.35(0.866 − 0)."
          ],
          "ans": "(a) τ = 0.675 N m. (b) U = −1.17 J. (c) W = 1.17 J, matching |U| exactly since the final angle is the U = 0 reference."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A short bar magnet produces a field of 32 μT at a point 25 cm from its centre on the axial line. What is the field at a point the same 25 cm away on the equatorial line?",
          "steps": [
            "Do not compute anything from scratch. Both points are the same distance r from the centre.",
            "B_axial / B_equatorial = 2, always, at equal distance, whatever r and m happen to be.",
            "B_equatorial = B_axial / 2 = 32 / 2."
          ],
          "ans": "B_equatorial = 16 μT. Axial is always exactly twice equatorial at equal distance; no calculator needed."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, COUPLES OSCILLATION WITH MOMENT",
          "q": "A bar magnet oscillating in a uniform field has a time period T = 3.0 s. It is cut into two equal pieces by a cut perpendicular to its length, and one piece is set oscillating in the same field. Find the new time period.",
          "steps": [
            "Cutting perpendicular to length halves both mass and length. For a rod, I = ML²/12, so halving both: I' = (M/2)(L/2)² / 12 = I/8.",
            "Pole strength is unchanged by the cut, but the magnetic length halves, so m' = m/2.",
            "T' = 2π√(I'/m'B) = 2π√[(I/8)/((m/2)B)] = 2π√[(1/4)(I/mB)] = T/2."
          ],
          "ans": "T' = 1.5 s. The ratio traces to (I'/m')/(I/m) = (1/8)/(1/2) = 1/4, whose square root is 1/2; tracking only I and forgetting m also halves is the common slip."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL, THE GENERAL DIPOLE FIELD",
          "q": "A short bar magnet of moment m = 0.60 A m² sits at the origin, pointing along +x. Find the magnitude of the field at a point P at r = 0.10 m from the centre, along a direction making θ = 60° with the axis, and the angle this field makes with the line OP.",
          "steps": [
            "The general point-dipole field has radial and transverse parts: B_r = (μ0/4π)(2m cos θ)/r³, B_θ = (μ0/4π)(m sin θ)/r³.",
            "Resultant magnitude: B = (μ0/4π)(m/r³)√(1 + 3cos²θ) = (10⁻⁷)(0.60/10⁻³)√(1 + 3(0.5)²) = (6×10⁻⁵)√1.75.",
            "Direction from OP: tan α = B_θ/B_r = (1/2) tan θ = (1/2) tan60° = (1/2)(1.732)."
          ],
          "ans": "B ≈ 7.9 × 10⁻⁵ T, at about 40.9° to OP. Check the two special cases: θ = 0° reduces to the pure axial field, θ = 90° to the pure equatorial field, exactly as the boxed formulas above demand."
        },
        {
          "t": "mcq",
          "q": "A straight bar magnet of magnetic moment M is bent into a semicircular arc without changing its length. The new magnetic moment is:",
          "opts": [
            {
              "label": "M",
              "nudge": "Assumes bending leaves the moment unchanged, forgetting that the pole separation shrank once the bar curved."
            },
            {
              "label": "2M/π",
              "nudge": null
            },
            {
              "label": "M/π",
              "nudge": "Uses the arc's radius L/π as the new pole separation instead of the diameter 2L/π, the actual straight-line distance between the two ends."
            },
            {
              "label": "πM/2",
              "nudge": "Inverts the ratio: bending a straight bar into a curve can only shrink the pole-to-pole distance, never grow it, so the new moment must be smaller than M."
            }
          ],
          "correct": 1,
          "solution": "Moment depends on the straight-line separation between poles, not the wire's length. Original separation L gives M = q_mL. After bending, L = πR ⇒ R = L/π, and the poles now sit a diameter apart, 2R = 2L/π. So M' = q_m(2L/π) = 2M/π."
        },
        {
          "t": "mcq",
          "q": "The magnetic field at a point on the equatorial line of a short bar magnet is directed:",
          "opts": [
            {
              "label": "along m",
              "nudge": "This is the axial direction; a classic axial/equatorial direction swap."
            },
            {
              "label": "opposite to m",
              "nudge": null
            },
            {
              "label": "perpendicular to m",
              "nudge": "Mistakes the equatorial LINE's own direction (perpendicular to the axis) for the field's direction, which still runs along the magnet's own axis."
            },
            {
              "label": "radially away from the magnet",
              "nudge": "Treats the magnet like an isolated charge, but monopoles do not exist, so the field is dipolar, not radial."
            }
          ],
          "correct": 1,
          "solution": "On the equatorial (broadside-on) line, the dipole field points anti-parallel to m, directly opposite the axial case."
        },
        {
          "t": "mcq",
          "q": "Which statement about a bar magnet's field lines is INCORRECT?",
          "opts": [
            {
              "label": "They form continuous closed loops",
              "nudge": "This is a true property, not the false one the question asks for."
            },
            {
              "label": "Inside the magnet they run from S to N",
              "nudge": "Also true; it is exactly how the loop closes."
            },
            {
              "label": "Two field lines may cross where the field is strongest",
              "nudge": null
            },
            {
              "label": "The tangent at any point gives the direction of B",
              "nudge": "True by definition of what a field line is."
            }
          ],
          "correct": 2,
          "solution": "Field lines never intersect: a crossing would mean two different directions for B at one point, which is impossible. Crowded, yes, that is what \"strong field\" looks like; crossing, never."
        },
        {
          "t": "mcq",
          "q": "A bar magnet of moment 3.0 A m² rests aligned with a uniform field of 0.20 T. The work done to rotate it to the unstable equilibrium position is:",
          "opts": [
            {
              "label": "0.6 J",
              "nudge": "Drops the factor of 2 by treating cos180° as 0 instead of −1."
            },
            {
              "label": "1.2 J",
              "nudge": null
            },
            {
              "label": "0 J",
              "nudge": "Reasons \"both ends are equilibria, so net work is zero\", but the two equilibria sit at very different potential energies."
            },
            {
              "label": "0.3 J",
              "nudge": "Uses 90° in place of 180° for the final angle."
            }
          ],
          "correct": 1,
          "solution": "Stable equilibrium is θ1 = 0°, unstable is θ2 = 180°: W = mB(cos0° − cos180°) = (3.0)(0.20)(1 − (−1)) = 0.6 × 2 = 1.2 J."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A bar magnet of moment 2.0 A m² is placed at 60° to a uniform field of 0.15 T. Find the torque acting on it.",
              "a": "τ = mB sinθ = (2.0)(0.15)sin60° ≈ 0.26 N m."
            },
            {
              "q": "[NEET] The axial field of a short bar magnet at a distance of 10 cm is 50 μT. What is the equatorial field at the same distance?",
              "a": "25 μT, exactly half, by the 2 : 1 ratio."
            },
            {
              "q": "[JEE Main] Calculate the work done rotating a magnet of moment 1.2 A m² from its stable equilibrium position to 120° in a uniform field of 0.25 T.",
              "a": "W = mB(cos0° − cos120°) = (1.2)(0.25)(1+0.5) ≈ 0.45 J."
            },
            {
              "q": "[JEE Main] A magnet of moment 0.80 A m² and moment of inertia 5.0 × 10⁻⁵ kg m² oscillates in a uniform field of 0.040 T. Find its time period.",
              "a": "T = 2π√(I/mB) ≈ 0.25 s."
            },
            {
              "q": "[JEE Advanced] A short bar magnet of moment 1.0 A m² lies on the x-axis. At what distance on its axial line is the field equal to 8.0 × 10⁻⁶ T?",
              "a": "r³ = μ0(2m)/(4π × 8.0×10⁻⁶) = 0.025, r ≈ 0.29 m."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Swapping axial and equatorial. Axial is twice the equatorial at equal distance and points ALONG m; equatorial points OPPOSITE. This is the single most common slip in the whole topic.",
            "Losing the minus sign in U = −mB cos θ. Drop it and stable and unstable equilibria trade places; θ = 0° must always come out as the lowest energy.",
            "Confusing where torque and energy peak. Torque is maximum at 90° and zero at 0°/180°; energy is minimum at 0° and maximum at 180°. They peak in different places, not the same one.",
            "Assuming a uniform field pushes a magnet. In a uniform field the net force is exactly zero, only a torque acts. A net translational force needs the field to VARY from place to place."
          ]
        },
        {
          "t": "protip",
          "html": "for any \"field at the same distance\" comparison, never plug numbers, just use the ratio B_axial to B_equatorial equals 2 to 1. for cutting or bending problems, ask only one question: what happens to pole strength, and what happens to pole separation? everything else follows from those two answers alone."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "m = NIA = q_m(2l)",
              "note": "dipole moment; unit A m², points S to N inside the magnet"
            },
            {
              "f": "τ = m × B, U = −m · B",
              "note": "torque and energy of a dipole in a uniform field"
            },
            {
              "f": "B_axial : B_equatorial = 2 : 1",
              "note": "short-magnet far field, both fall off as 1/r³"
            },
            {
              "f": "T = 2π√(I/mB)",
              "note": "small oscillations about the aligned equilibrium"
            }
          ],
          "aids": [
            "axial is ahead, along m; equatorial is against, opposite m",
            "torque turns, energy stores",
            "a magnet cut in half is two weaker magnets, never one pole"
          ]
        }
      ]
    },
    {
      "n": "02",
      "title": "Earth's Magnetism",
      "chip": "02 EARTH'S FIELD",
      "kalam": "the whole planet is a bar magnet, tilted and buried at its centre",
      "blocks": [
        {
          "t": "p",
          "html": "Hold a compass anywhere and the needle quietly swings until it settles, pointing roughly north. That everyday fact is this topic's headline: <b>the entire Earth behaves like one colossal bar magnet</b>, tilted slightly, buried at its centre. Its field reaches out through the crust and the air and turns your compass needle into line, the exact torque-on-a-dipole story from Topic 01, now playing out on a planetary stage. But the planet plays a trick on the language: the needle's north pole points toward geographic north, and since unlike poles attract, the magnetic pole sitting near geographic North must actually be a magnetic <b>south</b> pole. Field lines outside the Earth therefore run from the southern geographic region to the northern one, which is why every formula below assumes that direction without restating it."
        },
        {
          "t": "p",
          "html": "A magnetic field is a vector, so one number is never enough to pin it down at a place: geophysicists use <b>three elements</b>. <b>Declination α</b> is the angle between true (geographic) north and magnetic north, the correction a hiker's compass needs. <b>Dip or inclination δ</b> is the angle the total field makes with the horizontal, since the field does not lie flat along the ground, it tilts into it. <b>Horizontal component <i>B<sub>H</sub></i></b> is the part of the field parallel to the ground, the only part an ordinary swinging compass feels. India's own declination is small, under a degree at Delhi and Mumbai, which is why a compass here points very nearly true north."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "The <b>point-dipole model</b> treats all of Earth's magnetism as a single dipole at the centre; it captures the broad pattern but ignores local rock deposits and the slow drift of the poles. The relation tan δ = 2 tan λ assumes this <b>centred, symmetric dipole</b>; real local anomalies bend it. And the dipole axis itself is tilted about 11.3° from the Earth's rotation axis, so magnetic and geographic latitude differ; every λ in this topic always means magnetic latitude, never the latitude read off a map."
        },
        {
          "t": "think",
          "html": "the earth's magnetic axis missing the rotation axis by about eleven degrees is a top spinning slightly off true. spin any top and its own axis wobbles a little around the vertical; the earth's magnetic axis is frozen at one fixed tilt away from the spin axis rather than wobbling, but the picture is the same one, an axis of symmetry that is close to, but not exactly, the axis you would have guessed from the outside."
        },
        {
          "t": "think",
          "html": "picture the earth's field at your feet as an arrow jammed into a riverbank at an angle, like a fishing rod. declination is how far the arrow's shadow on the ground swings left or right of true north. dip is how steeply the arrow tilts down into the ground. horizontal component is just the length of that ground shadow. three numbers, one sideways twist, one downward tilt, one on-the-ground strength, and the field is completely pinned down."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.3 · RESOLVING THE TOTAL FIELD",
          "chips": [
            "B_E splits into a horizontal leg and a vertical leg, angle δ between them"
          ],
          "captions": [
            "The total field B_E at a point P, tilted below the horizontal by the dip δ. It always splits into a horizontal leg B_H (adjacent to δ, so it pairs with cosine) and a vertical leg B_V (opposite δ, so it pairs with sine), completing a right triangle with B_E as the hypotenuse. This single triangle answers almost every numerical in this topic: given any two of B_E, B_H, B_V, δ, the other two follow from Pythagoras and a tangent."
          ],
          "frames": [
            {
              "x": [
                -0.6,
                4.2
              ],
              "y": [
                -2.6,
                0.9
              ],
              "axes": "none",
              "segments": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    3.2,
                    0
                  ],
                  "dash": true,
                  "label": "B_H",
                  "at": "above"
                },
                {
                  "from": [
                    3.2,
                    0
                  ],
                  "to": [
                    3.2,
                    -2
                  ],
                  "dash": true,
                  "label": "B_V",
                  "at": "end"
                }
              ],
              "arrows": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    3.2,
                    -2
                  ],
                  "tone": "amber",
                  "label": "B_E",
                  "at": "mid"
                }
              ],
              "arcs": [
                {
                  "at": [
                    0,
                    0
                  ],
                  "r": 1,
                  "from": -32,
                  "to": 0,
                  "label": "δ"
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0,
                  "label": "P",
                  "at": "nw"
                }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Resolving the total field",
          "tag": "δ measured from the horizontal, the single triangle every numerical here needs",
          "rows": [
            {
              "k": "Horizontal component",
              "v": "<i>B<sub>H</sub></i> = <i>B<sub>E</sub></i> cos δ"
            },
            {
              "k": "Vertical component",
              "v": "<i>B<sub>V</sub></i> = <i>B<sub>E</sub></i> sin δ"
            },
            {
              "k": "Dip, from the ratio",
              "v": "tan δ = <i>B<sub>V</sub></i> / <i>B<sub>H</sub></i>"
            },
            {
              "k": "Total field, by Pythagoras",
              "v": "<i>B<sub>E</sub></i> = √(<i>B<sub>H</sub></i>² + <i>B<sub>V</sub></i>²)"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · DIP-LATITUDE RELATION",
          "tag": "the centred-dipole model of the Earth",
          "main": "tan δ = 2 tan λ",
          "legend": [
            "λ is the magnetic latitude, measured up from the magnetic equator",
            "δ = 0° at the magnetic equator (λ = 0), δ = 90° at the magnetic poles (λ = 90°)",
            "both δ and λ are dimensionless angles"
          ],
          "note": "The factor of 2 is the same factor of 2 that separates the axial and equatorial short-magnet fields in Topic 01, surfacing here as the gap between dip and latitude. Dip is always steeper than latitude; the two coincide only at 0° and 90°."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FIELD COMPONENTS IN THE DIPOLE MODEL",
          "tag": "Earth's moment M, radius r",
          "main": "<i>B<sub>V</sub></i> = (μ<sub>0</sub>/4π)(2<i>M</i> sin λ/<i>r</i><sup>3</sup>)<br><i>B<sub>H</sub></i> = (μ<sub>0</sub>/4π)(<i>M</i> cos λ/<i>r</i><sup>3</sup>)<br><i>B<sub>E</sub></i> = (μ<sub>0</sub>/4π)(<i>M</i>/<i>r</i><sup>3</sup>)√(1 + 3 sin²λ)",
          "legend": [
            "this is the same general dipole field from Topic 01's worked example, with θ (from the axis) replaced by 90° − λ",
            "B_E is minimum at the equator and exactly double that at the poles",
            "all three in tesla, dimensional formula M T⁻²A⁻¹"
          ],
          "note": null
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHERE THE FACTOR OF 2 IN THE DIP-LATITUDE RELATION COMES FROM",
          "steps": [
            {
              "eq": "Import the general point-dipole field from Topic 01: <i>B<sub>r</sub></i> = (μ<sub>0</sub>/4π)(2<i>M</i> cos θ/<i>r</i><sup>3</sup>), <i>B<sub>θ</sub></i> = (μ<sub>0</sub>/4π)(<i>M</i> sin θ/<i>r</i><sup>3</sup>), θ measured from the dipole axis",
              "why": "The Earth is modelled as a short dipole of moment M at the centre, distance r to the surface, so this is the exact formula Topic 01's Example 4 already used, just relabelled for a planet instead of a bar magnet."
            },
            {
              "eq": "At magnetic latitude λ (measured from the magnetic equator), θ = 90° − λ, so cos θ = sin λ and sin θ = cos λ",
              "why": "Latitude is measured from the equator; the dipole formula's angle θ is measured from the axis (the pole). The two are complementary by definition."
            },
            {
              "eq": "At the surface, the radial direction B_r points vertically and the tangential direction B_θ points horizontally, so <i>B<sub>V</sub></i> = (μ<sub>0</sub>/4π)(2<i>M</i> sin λ/<i>r</i><sup>3</sup>), <i>B<sub>H</sub></i> = (μ<sub>0</sub>/4π)(<i>M</i> cos λ/<i>r</i><sup>3</sup>)",
              "why": "Substituting the complementary angle directly into B_r and B_θ, then renaming them by what they physically are at the surface: straight down (vertical) and along the ground (horizontal)."
            },
            {
              "eq": "tan δ = <i>B<sub>V</sub></i>/<i>B<sub>H</sub></i> = (2<i>M</i> sin λ)/(<i>M</i> cos λ) = 2 tan λ",
              "why": "The ratio cancels every constant, μ0/4π, M and r³ alike, leaving a pure geometric relation between two angles. Check the extremes: λ = 0 gives δ = 0 (purely horizontal at the equator); λ → 90° gives δ → 90° (purely vertical at the pole), both matching the physical picture."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.4 · THE EARTH AS A TILTED DIPOLE",
          "chips": [
            "magnetic latitude λ, radial B_V, tangential B_H"
          ],
          "captions": [
            "Earth's cross-section through the tilted magnetic axis (dashed), with the magnetic S pole near the top, matching the fact that a compass north end is pulled toward it. At a point P on the surface, magnetic latitude λ is measured up from the magnetic equator (perpendicular to the axis, dashed). The field's radial part B_V points along OP; its tangential part B_H points along the surface. Together they are exactly Figure 5.3's triangle, redrawn on the sphere instead of at a single point."
          ],
          "frames": [
            {
              "x": [
                -2.2,
                2.2
              ],
              "y": [
                -2.2,
                2.2
              ],
              "axes": "none",
              "aspect": 0.987,
              "curves": [
                {
                  "c": "circle",
                  "cx": 0,
                  "cy": 0,
                  "r": 1.8
                }
              ],
              "segments": [
                {
                  "from": [
                    -0.34,
                    -1.26
                  ],
                  "to": [
                    0.34,
                    1.26
                  ],
                  "dash": true,
                  "soft": true
                },
                {
                  "from": [
                    -1.35,
                    0.36
                  ],
                  "to": [
                    1.35,
                    -0.36
                  ],
                  "dash": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 0.34,
                  "y": 1.26,
                  "label": "mag. S",
                  "at": "nw"
                },
                {
                  "x": -0.34,
                  "y": -1.26,
                  "label": "mag. N",
                  "at": "sw"
                },
                {
                  "x": 1.38,
                  "y": 1.16,
                  "label": "P",
                  "at": "ne"
                }
              ],
              "arrows": [
                {
                  "from": [
                    1.38,
                    1.16
                  ],
                  "to": [
                    0.84,
                    0.71
                  ],
                  "tone": "amber",
                  "label": "B_V",
                  "at": "below"
                },
                {
                  "from": [
                    1.38,
                    1.16
                  ],
                  "to": [
                    0.93,
                    1.69
                  ],
                  "tone": "amber",
                  "label": "B_H",
                  "at": "above"
                }
              ],
              "arcs": [
                {
                  "at": [
                    0,
                    0
                  ],
                  "r": 0.6,
                  "from": 0,
                  "to": 40,
                  "label": "λ"
                }
              ]
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Locus lines, and reading a tilted dip circle",
          "tag": "apparent dip: tan δ′ = tan δ / cos β for a plane at angle β to the meridian",
          "rows": [
            {
              "k": "Isogonic / agonic lines",
              "v": "join places of equal declination / of zero declination"
            },
            {
              "k": "Isoclinic / aclinic lines",
              "v": "join places of equal dip / of zero dip (the magnetic equator)"
            },
            {
              "k": "Apparent dip in two perpendicular planes",
              "v": "cot²δ = cot²δ<sub>1</sub> + cot²δ<sub>2</sub>"
            },
            {
              "k": "Neutral points, magnet's N pointing geo. north",
              "v": "on the equatorial line, where (μ<sub>0</sub>/4π)(<i>m</i>/<i>d</i><sup>3</sup>) = <i>B<sub>H</sub></i>"
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · NEUTRAL POINTS",
          "tag": "where a nearby magnet's own field exactly cancels B_H",
          "main": "N pole toward geographic north: (μ<sub>0</sub>/4π)(<i>m</i>/<i>d</i><sup>3</sup>) = <i>B<sub>H</sub></i> (equatorial line)<br>N pole toward geographic south: (μ<sub>0</sub>/4π)(2<i>m</i>/<i>d</i><sup>3</sup>) = <i>B<sub>H</sub></i> (axial line)",
          "legend": [
            "d is the distance of the neutral point from the magnet's centre, in m",
            "the two boxed forms are exactly Topic 01's own equatorial and axial short-magnet fields, just set equal to B_H",
            "measuring d and knowing B_H gives the magnet's own moment m, the working principle of a deflection magnetometer"
          ],
          "note": null
        },
        {
          "t": "p",
          "html": "Prospectors put this in reverse: a magnetic anomaly, a buried ore body with its own weak field, shows up as a local dent or bump in the smooth dip-latitude picture this topic builds. A survey party dragging a magnetometer across a field is really just watching for the same kind of neutral-point cancellation or reinforcement Topic 02 already derives, at a much smaller scale and against ore instead of a bar magnet."
        },
        {
          "t": "think",
          "html": "isogonic and isoclinic lines are a weather map for magnetism, the same idea as joining every city with the same temperature into one contour. isogonic joins equal declination, isoclinic joins equal dip, and the two special contours, agonic (zero declination) and the magnetic equator (zero dip, aclinic), are just the zero-contour on each of those two maps."
        },
        {
          "t": "think",
          "html": "a dip circle out of the meridian always reads MORE than the true dip, never less. tilting the plane only ever throws away part of the horizontal component (it gets a cos beta, beta not zero), while the vertical component could not care less which vertical plane you hold the circle in. less horizontal pull, same vertical pull, so the needle tips further down: the apparent dip always inflates."
        },
        {
          "t": "p",
          "html": "A neutral point is where a nearby bar magnet's own field exactly cancels the horizontal component of the Earth's field, so a compass placed there spins freely with nothing to align it. Where the null falls depends only on orientation: north pole toward geographic north sends the neutral points to the equatorial line, since the magnet's field opposes B_H there; flip the magnet, north pole toward geographic south, and the opposition happens on the axial line instead, sending the neutral points there. Both cases reuse Topic 01's own axial and equatorial formulas unchanged, just set equal to a piece of the Earth's own field, which is the working principle of a deflection magnetometer."
        },
        {
          "t": "p",
          "html": "Declination is not a classroom abstraction: a ship's or aircraft's compass reads magnetic north, and every chart correction between magnetic north and true north traces straight back to this one angle. Because the magnetic pole drifts slowly year on year, declination itself creeps with it, which is why navigational charts print a small yearly correction alongside the declination value for a region rather than treating it as fixed forever."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "At a place the horizontal component of the Earth's field is B_H = 0.40 G and the angle of dip is 30°. Find (a) the total field B_E and (b) the vertical component B_V.",
          "steps": [
            "B_E = B_H / cos δ = 0.40 / cos30° = 0.40 / 0.866.",
            "B_V = B_E sin δ = 0.46 × sin30° = 0.46 × 0.5.",
            "Check: B_V = B_H tan δ = 0.40 × tan30° = 0.40 × 0.577 ≈ 0.23 G, the same answer by the other route."
          ],
          "ans": "B_E ≈ 0.46 G, B_V ≈ 0.23 G. Both routes agree, and B_E > B_H as it must, since B_E is the hypotenuse."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "The angle of dip at a place is 45°. What is the magnetic latitude of the place?",
          "steps": [
            "Do not equate dip with latitude, that is the trap.",
            "tan δ = 2 tan λ ⇒ tan45° = 2 tan λ ⇒ tan λ = 0.5.",
            "λ = tan⁻¹(0.5)."
          ],
          "ans": "λ ≈ 26.6°. The tempting wrong answers are 45° (dropping the factor of 2 entirely) and 22.5° (halving the angle instead of the tangent). Dip is always steeper than latitude."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, APPARENT DIP IN TWO PLANES",
          "q": "A dip circle shows an apparent dip of 30° in one vertical plane and 45° when rotated to the perpendicular vertical plane. Find the true dip.",
          "steps": [
            "The two planes are mutually perpendicular, so cot²δ = cot²δ1 + cot²δ2 = cot²30° + cot²45° = 3 + 1 = 4.",
            "cot δ = 2 ⇒ tan δ = 0.5.",
            "δ = tan⁻¹(0.5)."
          ],
          "ans": "δ ≈ 26.6°, smaller than both apparent readings (30°, 45°), exactly as expected: every tilt of the plane away from the meridian only ever inflates the reading, never shrinks it."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL, THE FULL DIPOLE MODEL",
          "q": "At a location the horizontal and vertical components of the Earth's field are equal. (a) Find the magnetic latitude. (b) If the field at the magnetic equator is B0, express the total field B_E at this location in terms of B0.",
          "steps": [
            "(a) B_V = B_H ⇒ tan δ = 1 ⇒ δ = 45°. Then tan λ = (1/2)tan45° = 0.5 ⇒ λ = tan⁻¹(0.5) ≈ 26.6°.",
            "(b) At the equator (λ = 0), B0 = (μ0/4π)(M/r³), the √(1+3sin²0) = 1 case. At latitude λ: B_E = B0√(1+3sin²λ).",
            "With tan λ = 0.5, sin λ = 0.5/√1.25 ≈ 0.447, so sin²λ ≈ 0.20, and B_E = B0√(1+0.6) = B0√1.6."
          ],
          "ans": "λ ≈ 26.6°; B_E ≈ 1.26 B0, about 26 percent above the equatorial field, consistent with the model climbing from B0 at the equator to 2B0 at the poles."
        },
        {
          "t": "mcq",
          "q": "The angle of dip at the magnetic equator is:",
          "opts": [
            {
              "label": "0°",
              "nudge": null
            },
            {
              "label": "45°",
              "nudge": "Confuses dip with the special case where the latitude itself is 45°."
            },
            {
              "label": "90°",
              "nudge": "This is the value at the POLES, the classic equator/pole swap."
            },
            {
              "label": "depends on longitude",
              "nudge": "Misreads the dipole model: dip depends on magnetic latitude, never on longitude."
            }
          ],
          "correct": 0,
          "solution": "At the magnetic equator the field is purely horizontal, so B_V = 0 and tan δ = B_V/B_H = 0 ⇒ δ = 0°."
        },
        {
          "t": "mcq",
          "q": "A dip needle is set to swing in a vertical plane that is perpendicular to the magnetic meridian. It comes to rest at an apparent dip of:",
          "opts": [
            {
              "label": "0°",
              "nudge": "Wrongly assumes \"no horizontal pull felt\" makes the needle lie flat; it is the opposite, it stands on end."
            },
            {
              "label": "equal to the true dip",
              "nudge": "Forgets that orientation of the plane matters to what the needle can feel at all."
            },
            {
              "label": "between 0° and the true dip",
              "nudge": "Has the inequality backwards: apparent dip is never LESS than the true dip."
            },
            {
              "label": "90°",
              "nudge": null
            }
          ],
          "correct": 3,
          "solution": "In that plane the effective horizontal component is B_H cos90° = 0, so the needle feels only B_V and stands straight down: apparent dip = 90°. Formally tan δ′ = tan δ / cos90° → ∞."
        },
        {
          "t": "mcq",
          "q": "If the angle of dip at a place is 45°, the magnetic latitude is:",
          "opts": [
            {
              "label": "45°",
              "nudge": "Assumes dip equals latitude, dropping the factor of 2."
            },
            {
              "label": "tan⁻¹(2)",
              "nudge": "Applies the factor of 2 to the wrong side of the relation."
            },
            {
              "label": "tan⁻¹(0.5)",
              "nudge": null
            },
            {
              "label": "30°",
              "nudge": "A plausible-looking round number with no derivation behind it."
            }
          ],
          "correct": 2,
          "solution": "tan45° = 2 tan λ ⇒ tan λ = 0.5 ⇒ λ = tan⁻¹(0.5) ≈ 26.6°."
        },
        {
          "t": "mcq",
          "q": "At a location B_H = 0.34 G and B_V = 0.34 G. The total field and the dip are respectively:",
          "opts": [
            {
              "label": "0.48 G, 45°",
              "nudge": null
            },
            {
              "label": "0.68 G, 45°",
              "nudge": "Adds the two magnitudes directly instead of combining them by Pythagoras."
            },
            {
              "label": "0.34 G, 0°",
              "nudge": "Assumes equal components somehow cancel; they are perpendicular, not opposite."
            },
            {
              "label": "0.48 G, 90°",
              "nudge": "Gets the magnitude right but botches the dip."
            }
          ],
          "correct": 0,
          "solution": "B_E = √(B_H² + B_V²) = 0.34√2 ≈ 0.48 G; tan δ = B_V/B_H = 1 ⇒ δ = 45°."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] At a place the horizontal component of the Earth's field is 0.32 G and the dip is 60°. Find the total field B_E.",
              "a": "B_E = B_H/cosδ = 0.32/0.5 = 0.64 G."
            },
            {
              "q": "[NEET] State the angle of dip at (i) the magnetic equator and (ii) a magnetic pole.",
              "a": "(i) 0°. (ii) 90°."
            },
            {
              "q": "[JEE Main] The total magnetic field at a place is 0.50 G and the angle of dip is 30°. Find the vertical component B_V.",
              "a": "B_V = B_E sinδ = 0.50 × 0.5 = 0.25 G."
            },
            {
              "q": "[JEE Main] A short bar magnet of moment 0.50 A m² is placed in the magnetic meridian with its N pole pointing geographic north, where B_H = 0.50 G. Find the distance of the neutral points from the magnet's centre.",
              "a": "Equatorial line: (μ0/4π)(m/d³) = B_H gives d ≈ 0.10 m (10 cm)."
            },
            {
              "q": "[JEE Advanced] A dip circle reads apparent dips of 30° and 60° in two mutually perpendicular vertical planes. Determine the true dip.",
              "a": "cot²δ = cot²30° + cot²60° ≈ 3.33, δ ≈ 28.7°."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing dip with latitude. tan δ = 2 tan λ, never δ = λ. Dip is always steeper than latitude; they coincide only at 0° and 90°.",
            "True vs. apparent dip backwards. A dip circle out of the meridian reads MORE than the true dip, never less. Given a reading and an orientation, expect the true dip to be the smaller value.",
            "Swapping sine and cosine in the components. Dip is measured from the horizontal, so B_H = B_E cos δ and B_V = B_E sin δ. Pair cosine with the horizontal leg every time.",
            "Getting Earth's polarity backwards. The pole near geographic North is a magnetic SOUTH pole, which is why a compass north end is pulled toward it. Stating it loosely costs marks on assertion-reason items."
          ]
        },
        {
          "t": "protip",
          "html": "for any \"given two of B_E, B_H, B_V, delta, find the rest\" problem, draw the one right triangle, B_E as hypotenuse, delta measured from the horizontal leg, and read everything off it. no formula needs memorising beyond that triangle and tan delta equals two tan lambda. two anchor facts to keep in your pocket: equator means dip zero, field weakest; pole means dip ninety, field strongest, exactly twice equatorial."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "B_H = B_E cos δ, B_V = B_E sin δ",
              "note": "the resolution triangle every numerical here uses"
            },
            {
              "f": "tan δ = 2 tan λ",
              "note": "dip-latitude relation; the same factor of 2 as the axial:equatorial ratio"
            },
            {
              "f": "B_E = (μ0/4π)(M/r³)√(1+3sin²λ)",
              "note": "min at the equator, doubles by the poles"
            },
            {
              "f": "tan δ′ = tan δ / cos β",
              "note": "apparent dip always exceeds the true dip off the meridian"
            }
          ],
          "aids": [
            "cos for the crawling (horizontal), sin for the sinking (vertical)",
            "dip doubles the tangent",
            "geographic north hides a magnetic south"
          ]
        }
      ]
    },
    {
      "n": "03",
      "title": "Magnetic Properties of Materials",
      "chip": "03 MAGNETIC MATERIALS",
      "kalam": "the same field, whispered by copper, murmured by aluminium, shouted by iron",
      "blocks": [
        {
          "t": "p",
          "html": "Bring a magnet near an iron nail and it leaps to it. Bring the same magnet near a copper coin, a drop of water, or a wooden ruler and almost nothing happens. Almost nothing is not nothing: the copper is very faintly pushed away, the water too, and the iron is pulled in with thousands of times more force. Every material on Earth responds to a magnetic field, they just whisper at wildly different volumes. This topic is the grammar of that response."
        },
        {
          "t": "p",
          "html": "Matter is built from atoms, and every atom is a swarm of moving charges, orbiting and spinning electrons, so every atom is potentially a tiny magnet. What a material does in a field depends on what those atomic magnets are up to, and that splits every substance into three families. <b>Diamagnetic</b> materials (copper, water, bismuth, gold, diamond) have atoms with NO permanent moment, the electrons pair up and cancel; switch on a field and the orbiting electrons readjust to oppose the change, a Lenz's-law-like reflex, so the material is weakly repelled and drifts from strong field toward weak. This effect is universal, present in every material, but usually drowned out by something stronger. <b>Paramagnetic</b> materials (aluminium, sodium, oxygen, platinum) DO have permanent atomic moments, but thermal jostling keeps them pointing every which way until a field partly lines them up, so the material is weakly attracted, drifting from weak field toward strong; heat fights the alignment, so paramagnetism weakens as temperature rises. <b>Ferromagnetic</b> materials (iron, cobalt, nickel, gadolinium) are the loud ones: their atomic moments do not just have the option to align, they force their neighbours to align too, locking into large blocks called domains, each already holding around 10<sup>11</sup> atoms pointing the same way. An external field merely nudges these pre-aligned domains to grow and rotate, producing enormous magnetisation, strong attraction, magnetism that survives after the field is removed, and hysteresis."
        },
        {
          "t": "p",
          "html": "A domain is worth picturing at scale: a single one already holds on the order of 10<sup>11</sup> atoms, all pointing the same way before any external field is even switched on. An unmagnetised piece of iron is not short of alignment inside any one domain, it is short of AGREEMENT between domains, millions of them, each internally aligned but pointing in every direction relative to its neighbours, so the bulk sample cancels to nothing. An external field's real job is not to align individual atoms one at a time, it is to grow the domains that already agree with it at the expense of the ones that do not, and to swing the stubborn ones over. That domain-scale picture is why ferromagnetism can be enormous, thermal jostling has to fight an entire committed block of 10<sup>11</sup> atoms at once, not a single atom in isolation."
        },
        {
          "t": "think",
          "html": "picture a stadium crowd. in a diamagnet, everyone is seated and indifferent, shout \"wave\" and they only lean slightly away in annoyance. in a paramagnet, individuals are willing to join the wave but keep getting distracted, only a strong, insistent announcer, a strong field, gets a loose wave going. in a ferromagnet, whole sections have already linked arms and rehearsed; the faintest cue sets off a massive, self-reinforcing wave. raise the rowdiness, the temperature, too high and even the rehearsed sections break apart, that is the curie point."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "<i>M</i> = χ<i>H</i> with constant χ holds only for LINEAR materials, dia and para. Ferromagnets are wildly non-linear, χ depends on both <i>H</i> and on the material's own past history, which is exactly what a hysteresis loop is. Curie's law (χ ∝ 1/<i>T</i>) applies to paramagnets far from saturation; once every dipole is aligned, increasing <i>H</i> further does nothing more. And a ferromagnet obeys every rule in this topic only BELOW its Curie temperature; above <i>T<sub>c</sub></i> it surrenders and becomes an ordinary paramagnet."
        },
        {
          "t": "def",
          "term": "Magnetic intensity (magnetising field) H",
          "html": "The externally applied field, independent of the medium: <i>H</i> = <i>B</i><sub>0</sub>/μ<sub>0</sub>, where <i>B</i><sub>0</sub> is the field that current alone would produce in vacuum. SI unit: A m⁻¹. Dimensional formula: L⁻¹A."
        },
        {
          "t": "def",
          "term": "Magnetisation M",
          "html": "The net magnetic dipole moment per unit volume that a material develops in response to H: <i>M</i> = <i>m</i><sub>net</sub>/<i>V</i>. SI unit: A m⁻¹, dimensional formula L⁻¹A, the same dimension as H, which is exactly why the two can be added directly with no conversion factor."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE MASTER RELATION OF THIS CHAPTER",
          "tag": "declared once here, held everywhere from this point on",
          "main": "<i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>)",
          "legend": [
            "<i>B</i> is the total field actually inside the material, in tesla: the effect",
            "<i>H</i> is what you apply, in A m⁻¹: the cause",
            "<i>M</i> is how the material itself responds, in A m⁻¹: the material's own contribution"
          ],
          "note": "Every field question in this chapter and the next reduces to keeping these three straight. B is never the same thing as H, and this chapter's H has nothing to do with the Earth's B_H from Topic 02: that one was deliberately written with a subscript to keep H free for exactly this use."
        },
        {
          "t": "p",
          "html": "A card's magnetic stripe is a working coercivity demonstration in your wallet: the stripe is a thin ferromagnetic ribbon deliberately chosen for HIGH coercivity, so the encoded pattern survives ordinary stray fields, a bag's magnetic clasp, another card brushing past it, without being erased. That is precisely why swiping it near a genuinely strong magnet, well above its coercivity, can wipe the data: the same physics Topic 05 builds into choosing a permanent-magnet material is already sitting in your pocket."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · SUSCEPTIBILITY AND PERMEABILITY",
          "tag": "the one number that sorts the three families",
          "main": "χ = <i>M</i>/<i>H</i> (linear materials)<br>μ<sub>r</sub> = 1 + χ, μ = μ<sub>0</sub>μ<sub>r</sub>, <i>B</i> = μ<i>H</i>",
          "legend": [
            "χ (susceptibility) is dimensionless: small negative for diamagnets, small positive for paramagnets, large for ferromagnets",
            "μ_r (relative permeability) is dimensionless",
            "μ (permeability) has unit T m A⁻¹, dimensional formula M L T⁻²A⁻²"
          ],
          "note": "A superconductor is a PERFECT diamagnet: χ = −1, μ_r = 0, expelling the field completely (the Meissner effect), the one case worth memorising as an exact number rather than an order of magnitude."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY μ_r = 1 + χ",
          "steps": [
            {
              "eq": "Start from <i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>), and for a linear material <i>M</i> = χ<i>H</i>",
              "why": "Both are already established: the master relation above, and the definition of susceptibility."
            },
            {
              "eq": "<i>B</i> = μ<sub>0</sub>(<i>H</i> + χ<i>H</i>) = μ<sub>0</sub><i>H</i>(1 + χ)",
              "why": "Substitute M = χH directly and factor out H."
            },
            {
              "eq": "But by definition <i>B</i> = μ<i>H</i> = μ<sub>0</sub>μ<sub>r</sub><i>H</i>. Comparing: μ<sub>0</sub>μ<sub>r</sub><i>H</i> = μ<sub>0</sub><i>H</i>(1 + χ) ⇒ μ<sub>r</sub> = 1 + χ",
              "why": "Two different expressions for the same B, in the same field H, must have equal coefficients. This bridges the microscopic response χ to the bulk property μ_r, and instantly explains the classification: χ < 0 gives μ_r < 1 (diamagnet), χ small positive gives μ_r just above 1 (paramagnet), χ huge gives μ_r ≫ 1 (ferromagnet)."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The three families at a glance",
          "tag": "sign first, size second",
          "rows": [
            {
              "k": "Susceptibility χ",
              "v": "dia: small, negative (~−10⁻⁵) · para: small, positive (~+10⁻⁵) · ferro: large, positive (~10³)"
            },
            {
              "k": "Relative permeability μ_r",
              "v": "dia: slightly < 1 · para: slightly > 1 · ferro: ≫ 1"
            },
            {
              "k": "Behaviour in a field",
              "v": "dia: feebly repelled, strong→weak · para: feebly attracted, weak→strong · ferro: strongly attracted, weak→strong"
            },
            {
              "k": "Temperature dependence",
              "v": "dia: nearly independent · para: χ ∝ 1/T (Curie) · ferro: complex, turns paramagnetic above T_c"
            },
            {
              "k": "Examples",
              "v": "dia: Cu, Bi, water, diamond, Au · para: Al, Na, O₂, Pt, Cr · ferro: Fe, Co, Ni, Gd"
            }
          ]
        },
        {
          "t": "p",
          "html": "The Meissner effect from the susceptibility formula's own note is not a laboratory curiosity: an MRI scanner's main field comes from a superconducting coil precisely because a superconductor carries current with zero resistance, and once that current is set flowing it needs no ongoing power to sustain a field strong enough to image tissue. The perfect-diamagnet property, chi equals negative one, shows up separately as the reason a superconductor can levitate a magnet above itself, expelling the field completely rather than merely weakening it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CURIE'S LAW AND THE CURIE-WEISS LAW",
          "tag": "how susceptibility moves with temperature",
          "main": "χ = <i>C</i>μ<sub>0</sub>/<i>T</i> (paramagnet, far from saturation)<br>χ = <i>C</i>/(<i>T</i> − <i>T<sub>c</sub></i>) (ferromagnet above its Curie temperature)",
          "legend": [
            "<i>C</i> is the Curie constant, specific to the material",
            "<i>T</i> is absolute temperature in kelvin; <i>T<sub>c</sub></i> is the Curie temperature",
            "representative T_c: iron ≈ 1043 K, nickel ≈ 631 K, gadolinium ≈ 317 K"
          ],
          "note": "In a paramagnet, cooler means easier alignment, so χ rises as T falls. A ferromagnet's domains are a cooperative lock; heat it past T_c and the lock breaks, the domains dissolve, and the material drops to ordinary paramagnetic behaviour following the second law."
        },
        {
          "t": "think",
          "html": "curie's law and the curie-weiss law are the same physics on either side of a melting point. below Tc, cooperation wins and the material is ferromagnetic; heat it past Tc and cooperation loses to thermal chaos, exactly like ice past zero degrees. the material does not forget how to be magnetic above Tc, it only forgets how to stay lined up without your help, which is precisely what ordinary paramagnetism is."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.5 · THREE BARS, THREE RESPONSES",
          "chips": [
            "diamagnetic: expelled",
            "paramagnetic: barely pulled in",
            "ferromagnetic: strongly crowded"
          ],
          "captions": [
            "Uniform field lines approaching a diamagnetic bar detour around it, spreading wide as they pass its location: fewer lines thread the sample than would pass through empty space, the field expelled rather than gathered.",
            "The same field lines barely notice a paramagnetic bar: they dip only slightly closer together at its location, a small real concentration that a bare eye can barely tell apart from no effect at all.",
            "The same field lines crowd tightly through a ferromagnetic bar: pulled in from a wide capture region outside, they bunch far closer together at the sample than the original spacing, the domains inside the bar reinforcing the applied field enormously."
          ],
          "frames": [
            {
              "x": [
                -2.6,
                2.6
              ],
              "y": [
                -1.6,
                1.6
              ],
              "axes": "none",
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 0.5,
                  "h": 1.6,
                  "tone": "ink"
                }
              ],
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      0.9
                    ],
                    [
                      -0.6,
                      0.9
                    ],
                    [
                      0,
                      1.25
                    ],
                    [
                      0.6,
                      0.9
                    ],
                    [
                      2.6,
                      0.9
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      0
                    ],
                    [
                      -0.6,
                      0
                    ],
                    [
                      0,
                      0.9
                    ],
                    [
                      0.6,
                      0
                    ],
                    [
                      2.6,
                      0
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      -0.9
                    ],
                    [
                      -0.6,
                      -0.9
                    ],
                    [
                      0,
                      -1.25
                    ],
                    [
                      0.6,
                      -0.9
                    ],
                    [
                      2.6,
                      -0.9
                    ]
                  ],
                  "smooth": true
                }
              ]
            },
            {
              "x": [
                -2.6,
                2.6
              ],
              "y": [
                -1.6,
                1.6
              ],
              "axes": "none",
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 0.5,
                  "h": 1.6,
                  "tone": "ink"
                }
              ],
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      0.85
                    ],
                    [
                      -0.6,
                      0.85
                    ],
                    [
                      0,
                      0.75
                    ],
                    [
                      0.6,
                      0.85
                    ],
                    [
                      2.6,
                      0.85
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      0
                    ],
                    [
                      -0.6,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0.6,
                      0
                    ],
                    [
                      2.6,
                      0
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      -0.85
                    ],
                    [
                      -0.6,
                      -0.85
                    ],
                    [
                      0,
                      -0.75
                    ],
                    [
                      0.6,
                      -0.85
                    ],
                    [
                      2.6,
                      -0.85
                    ]
                  ],
                  "smooth": true
                }
              ]
            },
            {
              "x": [
                -2.6,
                2.6
              ],
              "y": [
                -1.6,
                1.6
              ],
              "axes": "none",
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 0.5,
                  "h": 1.6,
                  "tone": "ink"
                }
              ],
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      1.3
                    ],
                    [
                      -0.6,
                      1.3
                    ],
                    [
                      0,
                      0.25
                    ],
                    [
                      0.6,
                      1.3
                    ],
                    [
                      2.6,
                      1.3
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      0
                    ],
                    [
                      -0.6,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0.6,
                      0
                    ],
                    [
                      2.6,
                      0
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      -2.6,
                      -1.3
                    ],
                    [
                      -0.6,
                      -1.3
                    ],
                    [
                      0,
                      -0.25
                    ],
                    [
                      0.6,
                      -1.3
                    ],
                    [
                      2.6,
                      -1.3
                    ]
                  ],
                  "smooth": true
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Classifying an unknown material",
          "steps": [
            "<b>Check the sign of χ (or whether μ_r is above or below 1).</b> Negative χ, or μ_r < 1, means diamagnetic. Positive means para or ferro.",
            "<b>Check the magnitude.</b> χ around 10⁻⁵ means paramagnetic; χ around 10³ means ferromagnetic.",
            "<b>Confirm with behaviour.</b> Repelled, moving to weaker field, means dia; weakly attracted means para; strongly attracted and retaining magnetism means ferro.",
            "<b>Check temperature response, if given.</b> Independent of T means dia; χ ∝ 1/T means para; losing magnetism sharply at a T_c means ferro."
          ]
        },
        {
          "t": "proc",
          "title": "Reading a hysteresis loop",
          "steps": [
            "<b>Saturation.</b> As H grows, B levels off: every domain is aligned and there is nothing left to recruit.",
            "<b>Retentivity (remanence).</b> The value of B left when H is brought back to zero. The material remembers.",
            "<b>Coercivity.</b> The reverse H you must apply to drive B back to zero. A measure of how stubbornly the material holds its magnetisation.",
            "<b>Loop area.</b> Equals the energy dissipated per unit volume per cycle, lost as heat. A soft material (soft iron) has a thin loop, low coercivity, low retentivity, little waste, ideal for anything that flips polarity many times a second. A hard material (steel, Alnico) has a fat loop, high coercivity and retentivity, ideal for a magnet that must keep its field."
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.6 · A HYSTERESIS LOOP",
          "chips": [
            "saturation, retentivity, coercivity, and the area that is lost as heat"
          ],
          "captions": [
            "B plotted against H for one full cycle: B is NOT a function of H here, the same H gives a different B depending on whether H is rising or falling, which is exactly what makes this a loop rather than a curve. The outer trace saturates at top and bottom; at H = 0 it still holds a nonzero B, the retentivity; driving H negative brings B back to zero at the coercivity point. The thinner inner loop, drawn to the same axes, is a soft-iron loop: far less width (coercivity) and far less height at H = 0 (retentivity), the signature of a material built to switch off cleanly rather than hold on."
          ],
          "frames": [
            {
              "x": [
                -3.4,
                3.4
              ],
              "y": [
                -1.7,
                1.7
              ],
              "axisX": "H",
              "axisY": "B",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      1.4
                    ],
                    [
                      2,
                      1.38
                    ],
                    [
                      1,
                      1.2
                    ],
                    [
                      0,
                      0.9
                    ],
                    [
                      -0.6,
                      0.5
                    ],
                    [
                      -1.2,
                      0
                    ],
                    [
                      -2,
                      -0.9
                    ],
                    [
                      -3,
                      -1.4
                    ],
                    [
                      -2,
                      -1.38
                    ],
                    [
                      -1,
                      -1.2
                    ],
                    [
                      0,
                      -0.9
                    ],
                    [
                      0.6,
                      -0.5
                    ],
                    [
                      1.2,
                      0
                    ],
                    [
                      2,
                      0.9
                    ],
                    [
                      3,
                      1.4
                    ]
                  ],
                  "smooth": true
                },
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      1
                    ],
                    [
                      1.5,
                      0.98
                    ],
                    [
                      0.5,
                      0.7
                    ],
                    [
                      0,
                      0.5
                    ],
                    [
                      -0.2,
                      0.3
                    ],
                    [
                      -0.4,
                      0
                    ],
                    [
                      -1,
                      -0.6
                    ],
                    [
                      -3,
                      -1
                    ],
                    [
                      -1.5,
                      -0.98
                    ],
                    [
                      -0.5,
                      -0.7
                    ],
                    [
                      0,
                      -0.5
                    ],
                    [
                      0.2,
                      -0.3
                    ],
                    [
                      0.4,
                      0
                    ],
                    [
                      1,
                      0.6
                    ],
                    [
                      3,
                      1
                    ]
                  ],
                  "smooth": true,
                  "soft": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0.9,
                  "label": "retentivity",
                  "at": "nw"
                },
                {
                  "x": -1.2,
                  "y": 0,
                  "label": "coercivity",
                  "at": "nw"
                }
              ],
              "labels": [
                {
                  "x": 2.1,
                  "y": -1.15,
                  "text": "steel"
                },
                {
                  "x": 1.9,
                  "y": -0.55,
                  "text": "soft iron",
                  "soft": true
                }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "High permeability has a second, quieter application beyond the electromagnets Topic 05 builds on it: <b>magnetic shielding</b>. Enclose a sensitive instrument inside a box of soft iron, and field lines vastly prefer the high-μ path through the iron itself over the empty interior, crowding into the walls and largely bypassing the hollow region they surround, leaving the enclosed instrument nearly field-free. It is the magnetic analogue of how a conductor shields against an electric field, and it works for exactly the reason Topic 04's Gauss's law makes precise: field lines are continuous, so a line diverted into the wall on one side must complete its loop, and the path of least resistance for that loop almost never cuts back through the low-permeability hollow at the centre."
        },
        {
          "t": "p",
          "html": "Every worked problem below reduces to one of four moves: convert between χ, μ_r and B via the definitions above, apply Curie's law as a ratio (χ1T1 = χ2T2) rather than from scratch, read a hysteresis loop's four named features off its shape, or scale up a single atomic moment to a bulk magnetisation by counting atoms."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A magnetising field of H = 1500 A m⁻¹ produces a magnetisation M = 6.0 × 10⁵ A m⁻¹ in a material. Find (a) the susceptibility χ, (b) the relative permeability μ_r, and (c) the magnetic field B inside.",
          "steps": [
            "χ = M/H = 6.0×10⁵ / 1500.",
            "μ_r = 1 + χ.",
            "B = μ0(H + M) = (4π×10⁻⁷)(1500 + 6.0×10⁵)."
          ],
          "ans": "χ = 400, μ_r = 401, B ≈ 0.76 T. The enormous χ marks this as a ferromagnet; M dwarfs H, so B ≈ μ0M to good approximation."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "Three materials have relative permeabilities 0.9996, 1.0004, and 850. Classify each.",
          "steps": [
            "No calculation, just read against unity.",
            "μ_r = 0.9996 < 1 ⇒ χ < 0 ⇒ diamagnetic.",
            "μ_r = 1.0004, just above 1 ⇒ χ small positive ⇒ paramagnetic. μ_r = 850 ≫ 1 ⇒ ferromagnetic."
          ],
          "ans": "Diamagnetic, paramagnetic, ferromagnetic in that order. The trap is misreading μ_r < 1 as paramagnetic, and a second trap is assuming μ_r this close to 1 means \"non-magnetic\": diamagnetism is real, just feeble."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, CURIE'S LAW",
          "q": "A paramagnetic salt has susceptibility χ = 4.0 × 10⁻³ at 300 K. (a) Find its susceptibility at 200 K. (b) At what temperature would the susceptibility fall to 2.0 × 10⁻³?",
          "steps": [
            "Curie's law gives χ ∝ 1/T, so χ1T1 = χ2T2.",
            "(a) χ2 = χ1(T1/T2) = 4.0×10⁻³ × (300/200).",
            "(b) T2 = T1(χ1/χ2) = 300 × (4.0×10⁻³ / 2.0×10⁻³)."
          ],
          "ans": "(a) χ2 = 6.0×10⁻³ (colder means more aligned, so χ grows). (b) T2 = 600 K. Treating χ as proportional to T rather than 1/T, which would wrongly increase χ on heating, is the common slip."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL, DOMAIN SATURATION",
          "q": "A single domain of iron is a cube of side 1.5 μm. Iron has density 7.9 × 10³ kg m⁻³ and molar mass 56 g mol⁻¹, and each iron atom carries a moment of 9.3 × 10⁻²⁴ A m². Estimate the maximum (saturation) magnetisation of the domain.",
          "steps": [
            "Volume V = (1.5×10⁻⁶)³ = 3.375×10⁻¹⁸ m³. Mass = ρV = 2.67×10⁻¹¹ g, so moles = 2.67×10⁻¹¹ / 56 = 4.76×10⁻¹³ mol.",
            "Number of atoms N = (4.76×10⁻¹³)(6.022×10²³) ≈ 2.87×10¹¹.",
            "Maximum moment m_max = N × 9.3×10⁻²⁴ ≈ 2.67×10⁻¹² A m². M_s = m_max/V."
          ],
          "ans": "M_s ≈ 7.9 × 10⁵ A m⁻¹, a huge magnetisation, orders of magnitude beyond any paramagnet, exactly why ferromagnets are the loud family. A full sample shows far less only because its domains start out pointing every which way."
        },
        {
          "t": "mcq",
          "q": "Above its Curie temperature, a ferromagnetic material becomes:",
          "opts": [
            {
              "label": "diamagnetic",
              "nudge": "A common confusion, but diamagnetism is a separate, orbital effect, not what thermal disorder produces."
            },
            {
              "label": "paramagnetic",
              "nudge": null
            },
            {
              "label": "completely non-magnetic",
              "nudge": "The atomic moments do not vanish, only their cooperative domain ordering does."
            },
            {
              "label": "more strongly ferromagnetic",
              "nudge": "Backwards: heat weakens, never strengthens, ferromagnetism."
            }
          ],
          "correct": 1,
          "solution": "Heat past T_c destroys domain alignment; the permanent atomic moments survive but are randomised by thermal motion, the textbook definition of a paramagnet, obeying χ = C/(T − T_c)."
        },
        {
          "t": "mcq",
          "q": "Which magnetic property is exhibited by ALL materials?",
          "opts": [
            {
              "label": "paramagnetism",
              "nudge": "Requires permanent atomic moments, which many materials lack entirely."
            },
            {
              "label": "ferromagnetism",
              "nudge": "Requires cooperative domain alignment, present in only a handful of elements."
            },
            {
              "label": "diamagnetism",
              "nudge": null
            },
            {
              "label": "hysteresis",
              "nudge": "Exclusive to ferromagnets."
            }
          ],
          "correct": 2,
          "solution": "Diamagnetism arises from the universal Lenz-like response of orbiting electrons, so it is present in every substance, though masked whenever a stronger para or ferro effect coexists."
        },
        {
          "t": "mcq",
          "q": "The area enclosed by the B-H hysteresis loop of a ferromagnet represents:",
          "opts": [
            {
              "label": "the retentivity",
              "nudge": "Retentivity is a single intercept (B at H = 0), not an area."
            },
            {
              "label": "the coercivity",
              "nudge": "Coercivity is the reverse H intercept (B = 0), also not an area."
            },
            {
              "label": "the permeability",
              "nudge": "Permeability is a slope-like ratio, unrelated to the enclosed area."
            },
            {
              "label": "the energy dissipated per unit volume per cycle",
              "nudge": null
            }
          ],
          "correct": 3,
          "solution": "The loop area carries units of energy density and equals the heat lost each cycle as domains are dragged back and forth."
        },
        {
          "t": "mcq",
          "q": "The most suitable material for a transformer core is one with:",
          "opts": [
            {
              "label": "high retentivity and high coercivity",
              "nudge": "Describes a permanent magnet (steel/Alnico), exactly the wrong choice: it would bleed energy as heat every cycle."
            },
            {
              "label": "low retentivity and low coercivity",
              "nudge": null
            },
            {
              "label": "high retentivity and low coercivity",
              "nudge": "Mixes soft and hard traits incoherently; a real soft material is low in both."
            },
            {
              "label": "low retentivity and high coercivity",
              "nudge": "Also mixes the two traits; a genuinely soft loop is low in both together."
            }
          ],
          "correct": 1,
          "solution": "A transformer core flips polarity fifty to sixty times a second, so it must waste as little energy per cycle as possible: a thin loop, meaning low coercivity and low retentivity, soft iron."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] A material has susceptibility χ = 499. Find its relative permeability μ_r and permeability μ.",
              "a": "μ_r = 500, μ = μ0μ_r ≈ 6.3 × 10⁻⁴ T m A⁻¹."
            },
            {
              "q": "[NEET] Classify each material by susceptibility: (i) χ = −1.2×10⁻⁵, (ii) χ = +2.1×10⁻⁵, (iii) χ = 1200.",
              "a": "(i) diamagnetic (ii) paramagnetic (iii) ferromagnetic."
            },
            {
              "q": "[JEE Main] A paramagnetic material has χ = 3.0×10⁻⁴ at 250 K. Find its susceptibility at 400 K.",
              "a": "χ2 = χ1(T1/T2) = 3.0×10⁻⁴ × (250/400) ≈ 1.875×10⁻⁴."
            },
            {
              "q": "[JEE Main] A transformer core encloses a hysteresis loop equivalent to 250 J m⁻³ per cycle, has volume 8.0×10⁻⁴ m³, and operates at 50 Hz. Find the power dissipated as hysteresis loss.",
              "a": "Energy/cycle = 250 × 8.0×10⁻⁴ = 0.2 J; power = 0.2 × 50 = 10 W."
            },
            {
              "q": "[JEE Advanced] H = 2000 A m⁻¹ produces a flux of 3.0×10⁻⁵ Wb through an iron bar of cross-section 0.25 cm². Find the relative permeability and susceptibility.",
              "a": "B = flux/area = 1.2 T, μ_r = B/(μ0H) ≈ 477, χ ≈ 476."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing H with B, and with the Earth's B_H. H is the magnetising field you apply, the cause; B is the total field inside, the effect; B = μ0(H + M). This chapter's H is unrelated to Topic 02's B_H, hence the careful subscript there.",
            "Dropping the sign of χ for diamagnets. Diamagnetic χ is NEGATIVE; that is the entire reason μ_r < 1 and the material is repelled. Writing it as a small positive number gets the physics backwards.",
            "Treating the \"+1\" in μ_r = 1 + χ as optional. It matters enormously when χ is tiny (dia and para): forget it and a diamagnet's μ_r ≈ 0.99999 becomes nonsense.",
            "Mixing up Curie's law and the Curie-Weiss law. Paramagnet: χ ∝ 1/T. Ferromagnet above T_c: χ ∝ 1/(T − T_c). Using the wrong one near a transition is a classic JEE trap."
          ]
        },
        {
          "t": "protip",
          "html": "classify any material in one glance, look only at chi, or mu_r against 1: sign first, size second. negative means dia; small positive means para; huge means ferro. for application questions, translate \"needs to stay magnetised\" into hard, high coercivity, permanent magnet, and \"needs to switch off cheaply\" into soft, low coercivity, transformer or electromagnet core."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "B = μ0(H + M)",
              "note": "the master relation; B is the effect, H the cause, M the material's own contribution"
            },
            {
              "f": "χ = M/H, μ_r = 1 + χ, μ = μ0μ_r",
              "note": "sign of χ sorts the three families; size confirms it"
            },
            {
              "f": "χ ∝ 1/T (Curie), χ ∝ 1/(T−T_c) (Curie-Weiss)",
              "note": "paramagnet, and ferromagnet above its Curie point"
            },
            {
              "f": "loop area = energy lost per unit volume per cycle",
              "note": "thin loop for switching, fat loop for holding"
            }
          ],
          "aids": [
            "dia dodges, para pulls in a little, ferro forces",
            "sign first, size second, for chi",
            "never forget the plus one in mu_r"
          ]
        }
      ]
    },
    {
      "n": "04",
      "title": "Magnetism and Gauss's Law",
      "chip": "04 GAUSS'S LAW",
      "kalam": "a field line that leaves a closed surface must come back, always",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 noticed something quietly remarkable about a bar magnet's field lines: they form continuous closed loops, no beginning, no end. Every line that leaves the north pole loops around the outside, dives back in at the south pole, and threads through the magnet to close on itself. Electric field lines do not do this, they are born on a positive charge and die on a negative one. That single structural difference is the entire content of Gauss's law for magnetism, once it is dressed up in the language of flux."
        },
        {
          "t": "p",
          "html": "Picture holding a wire ring in a breeze. How much wind passes through the ring depends on the wind's strength, the ring's area, and how you tilt it, edge-on catches almost nothing, face-on catches the most. <b>Magnetic flux Φ<sub>B</sub></b> measures exactly this for a field: how much of it \"passes through\" a surface, counting orientation. Now picture not a flat ring but a CLOSED surface, a balloon, a sealed box, anything with a definite inside and outside, and ask for the net flux out of it. Trap an electric charge inside the balloon and field lines stream outward and never return, a net outward flux proportional to the trapped charge, electric Gauss's law. For a magnetic field, every line is a closed loop: a loop that pokes out of the balloon must poke back in somewhere else, because it has nowhere else to end. Every line that exits is a line that re-enters, so the outward and inward contributions cancel perfectly, and the net magnetic flux through ANY closed surface is exactly zero."
        },
        {
          "t": "think",
          "html": "try to trap \"just a north pole\" by sealing a bag tight around one end of a bar magnet. field lines burst outward through the bag near that pole, surely a net outflow? no. those very lines curve around and re-enter the bag's far side, and inside the magnet they run s to n to close the loop anyway. tally every line and as many leave as return: net flux zero, always, because there is no lone pole to bag in the first place."
        },
        {
          "t": "think",
          "html": "a sealed steel tiffin box makes the same point about a closed surface. whatever you pack inside, the box itself gains or loses nothing just by being sealed, what goes in equals what is available to come out. gauss's law for magnetism says a magnetic field is even more restrictive than that: nothing new is ever created inside a closed surface at all, so the tally in and the tally out must match exactly, every single time, not merely on average."
        },
        {
          "t": "p",
          "html": "Is the \"no monopoles\" rule truly unbreakable? In 1931 Paul Dirac showed that if even one magnetic monopole existed anywhere in the universe, it would elegantly explain why electric charge always comes in neat integer multiples of e, a tantalising hint that monopoles should exist. Decades of dedicated searches, in cosmic rays, in particle accelerators, in ancient rock and lunar samples, have never found one. Gauss's law for magnetism stands as one of the most precisely tested statements in physics: as far as every experiment can tell, the right-hand side is exactly zero. Should a monopole ever turn up, a source term would appear here, mirroring the electric case exactly, but until then the zero is as solid as physics gets."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "The zero on the right of ∮<i>B</i> · <i>dA</i> = 0 applies only to CLOSED surfaces; through an open surface the flux can be, and usually is, nonzero, and that nonzero open-surface flux is exactly what drives electromagnetic induction in the next chapter. The law itself is universal and assumption-free as long as no magnetic monopole exists; should one ever turn up, a source term would appear here, mirroring the electric case. And flux is a SIGNED scalar, outward positive, inward negative, so careful sign bookkeeping is essential the moment a closed surface is split into parts."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · MAGNETIC FLUX AND GAUSS'S LAW FOR MAGNETISM",
          "tag": "the exact statement that magnetic monopoles do not exist",
          "main": "Φ<sub>B</sub> = ∫<sub>S</sub> <i>B</i> · <i>dA</i> = <i>BA</i> cos θ (flat area, uniform field)<br>∮<sub>S</sub> <i>B</i> · <i>dA</i> = 0 (every closed surface, always)",
          "legend": [
            "θ is the angle between B and the surface's outward normal dA",
            "unit of flux: weber (Wb), 1 Wb = 1 T m² = 1 V s",
            "dimensional formula of flux: M L² T⁻²A⁻¹"
          ],
          "note": "Contrast with electric Gauss's law, ∮E · dA = q_enc/ε0: electric fields have sources (charges), so the right side is proportional to what is enclosed. Magnetic fields have no sources, no monopoles, so the right side is always zero, not an approximation, not a special case, for every field and every closed surface."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.7 · WHY THE CLOSED-SURFACE FLUX IS ZERO",
          "chips": [
            "a bar magnet inside: every line that exits re-enters",
            "a +q charge inside: lines stream out and never return"
          ],
          "captions": [
            "A closed Gaussian surface (dashed) around a bar magnet. The smallest field loop stays entirely inside; the larger loops poke out through the boundary and curve back in, crossing it an equal number of times outward and inward. Every crossing out is matched by a crossing in, so the net flux totals to exactly zero, whatever surface is drawn.",
            "The same closed surface around an isolated positive charge instead. Field lines radiate straight outward in every direction and never return: each one crosses the boundary exactly once, all outward, giving a net flux proportional to the enclosed charge rather than zero. This is the contrast the whole topic is built on."
          ],
          "frames": [
            {
              "x": [
                -3,
                3
              ],
              "y": [
                -2.4,
                2.4
              ],
              "axes": "none",
              "aspect": 0.8,
              "curves": [
                {
                  "c": "circle",
                  "cx": 0,
                  "cy": 0,
                  "r": 2,
                  "dash": true
                },
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 1.1,
                  "b": 0.7
                },
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 1.9,
                  "b": 1.2
                },
                {
                  "c": "ellipse",
                  "cx": 0,
                  "cy": 0,
                  "a": 2.7,
                  "b": 1.7
                }
              ],
              "bodies": [
                {
                  "kind": "block",
                  "at": [
                    0,
                    0
                  ],
                  "w": 1.4,
                  "h": 0.5,
                  "tone": "ink"
                }
              ]
            },
            {
              "x": [
                -3,
                3
              ],
              "y": [
                -2.4,
                2.4
              ],
              "axes": "none",
              "aspect": 0.8,
              "curves": [
                {
                  "c": "circle",
                  "cx": 0,
                  "cy": 0,
                  "r": 1.7,
                  "dash": true
                }
              ],
              "marks": [
                {
                  "x": 0,
                  "y": 0,
                  "glyph": "plus",
                  "tone": "amber",
                  "label": "q"
                }
              ],
              "arrows": [
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    2.15,
                    0
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    1.52005,
                    1.52005
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0,
                    2.15
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    -1.52005,
                    1.52005
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    -2.15,
                    0
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    -1.52005,
                    -1.52005
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    0,
                    -2.15
                  ],
                  "tone": "amber"
                },
                {
                  "from": [
                    0,
                    0
                  ],
                  "to": [
                    1.52005,
                    -1.52005
                  ],
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "From \"no monopoles\" to the law, the logical chain",
          "steps": [
            "Experiment shows magnetic poles always come in N-S pairs; cutting a magnet never isolates a single pole (Topic 01).",
            "Therefore magnetic field lines have no point to start from or end on, they must be continuous closed loops.",
            "For any closed surface, a closed loop that crosses the boundary outward must cross back inward an equal number of times.",
            "Inward and outward flux contributions cancel exactly, giving ∮B · dA = 0. Equivalently, the \"net magnetic charge\" enclosed by any surface is always zero, because such a charge does not exist."
          ]
        },
        {
          "t": "proc",
          "title": "Using the closed-surface law to find an unknown flux",
          "steps": [
            "Split the closed surface into faces (the two caps and curved side of a cylinder, or the six faces of a box).",
            "Adopt one convention and keep it: outward flux positive, inward flux negative.",
            "The signed fluxes through every face must sum to zero: Φ1 + Φ2 + ... + Φn = 0.",
            "If every flux but one is known, the last is fixed: it equals minus the sum of the rest. This is the single most common exam application of the whole topic."
          ]
        },
        {
          "t": "defgrid",
          "title": "Open surfaces, and the surface-independence consequence",
          "tag": "the closed-surface zero is not the whole story",
          "rows": [
            {
              "k": "Through an open surface",
              "v": "flux is generally nonzero, and that nonzero value is exactly what drives induced EMF in the next chapter"
            },
            {
              "k": "Two open surfaces sharing one rim",
              "v": "carry the SAME flux (join them into one closed surface; its total flux is zero, forcing the two to match)"
            },
            {
              "k": "Why this matters",
              "v": "flux \"through a loop\" is well defined regardless of which surface you stretch across it, the quiet foundation electromagnetic induction rests on"
            },
            {
              "k": "Contrast, one line",
              "v": "electric: ∮E · dA = q_enc/ε0 (has a source) · magnetic: ∮B · dA = 0 (no source, ever)"
            }
          ]
        },
        {
          "t": "p",
          "html": "This zero is one of exactly four equations, together called Maxwell's equations, that summarise the whole of classical electricity and magnetism. Electric Gauss's law (a source term, charge) and this magnetic Gauss's law (no source term, ever) are two of the four; the other two, Faraday's law and the Ampere-Maxwell law, connect changing electric and magnetic fields to each other and belong to a later chapter. This topic's zero is the simplest of the four to state and, because it never has an exception to track, one of the easiest to apply correctly under exam pressure."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A circular coil of radius 5.0 cm is placed in a uniform magnetic field of 0.40 T. The normal to the coil makes an angle of 60° with the field. Find the magnetic flux through the coil.",
          "steps": [
            "Area A = πr² = π(0.050)² = 7.85×10⁻³ m².",
            "Φ_B = BA cos θ = (0.40)(7.85×10⁻³) cos60° = (0.40)(7.85×10⁻³)(0.5)."
          ],
          "ans": "Φ_B ≈ 1.6 × 10⁻³ Wb. A clean single-surface calculation; note the angle is measured from the NORMAL, so cos60° is correct as given."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A bar magnet is placed entirely inside a closed spherical surface. What is the net magnetic flux through the sphere?",
          "steps": [
            "Do not compute anything.",
            "Gauss's law for magnetism says the net flux through ANY closed surface is exactly zero: ∮B · dA = 0.",
            "The trap is reasoning \"the enclosed N pole pumps flux outward, so it should be positive\"; but the S pole is inside too, and every field line is a closed loop that re-enters as often as it exits."
          ],
          "ans": "Φ_net = 0. Even a tiny fragment of magnet enclosed still gives zero, since there is no isolated pole to act as a net source."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, FLUX BOOKKEEPING",
          "q": "A closed cylindrical surface sits in a magnetic field. The flux entering through one flat end-cap is 8.0 mWb, and the flux leaving through the curved side is 3.0 mWb. Find the magnitude and direction of the flux through the other end-cap.",
          "steps": [
            "Adopt outward flux positive. Entering end-cap: Φ1 = −8.0 mWb (inward). Curved side: Φ_curved = +3.0 mWb (outward).",
            "Gauss's law: Φ1 + Φ_curved + Φ2 = 0 ⇒ −8.0 + 3.0 + Φ2 = 0.",
            "Φ2 = +5.0 mWb."
          ],
          "ans": "Φ2 = 5.0 mWb, directed outward. The whole problem is sign-careful arithmetic enforced by ∮B · dA = 0."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL, SURFACE INDEPENDENCE",
          "q": "A flat circular disc and a hemispherical cap share the same circular rim, bounding a region of magnetic field. The flux through the flat disc is 7.0 mWb. (a) Find the flux through the hemispherical cap. (b) Justify the result using Gauss's law.",
          "steps": [
            "(a) The two surfaces share the same boundary rim, so they link the same flux by the surface-independence result: Φ_cap = Φ_disc = 7.0 mWb.",
            "(b) The disc and the cap, with consistent outward orientation, form a single closed surface enclosing the volume between them.",
            "Gauss's law gives Φ_cap(out) + Φ_disc(out) = 0; the two outward normals point in opposite senses relative to the shared rim, and converting both to the same orientation through the loop flips one sign, yielding Φ_cap = Φ_disc."
          ],
          "ans": "Φ_cap = 7.0 mWb, and this is exactly the surface-independence result: flux through a loop depends only on the loop, never on the surface stretched across it."
        },
        {
          "t": "mcq",
          "q": "The relation ∮B · dA = 0 for any closed surface implies that:",
          "opts": [
            {
              "label": "the magnetic field is always zero",
              "nudge": "Zero NET flux does not mean zero field; the field can be large, with inflow exactly balancing outflow."
            },
            {
              "label": "isolated magnetic monopoles do not exist",
              "nudge": null
            },
            {
              "label": "the field is always uniform",
              "nudge": "The law holds for any field whatsoever, uniform or not."
            },
            {
              "label": "magnetic flux is always positive",
              "nudge": "Flux is signed; the law says contributions cancel, not that every contribution is positive."
            }
          ],
          "correct": 1,
          "solution": "Zero net flux through every closed surface means there is no enclosed magnetic \"charge\" to act as a source, i.e. no monopoles; field lines are closed loops."
        },
        {
          "t": "mcq",
          "q": "The SI unit of magnetic flux is the:",
          "opts": [
            {
              "label": "tesla",
              "nudge": "Tesla is the unit of magnetic field (flux density), not flux itself."
            },
            {
              "label": "weber",
              "nudge": null
            },
            {
              "label": "gauss",
              "nudge": "Gauss is a CGS unit of field, not of flux."
            },
            {
              "label": "henry",
              "nudge": "Henry is the unit of inductance, a different chapter entirely."
            }
          ],
          "correct": 1,
          "solution": "Flux is measured in webers, where 1 Wb = 1 T m²."
        },
        {
          "t": "mcq",
          "q": "A bar magnet of pole strength q_m is sealed inside a closed surface. The net magnetic flux through the surface is:",
          "opts": [
            {
              "label": "μ0 q_m",
              "nudge": "Assumes a magnetic-charge source term analogous to q/ε0 in electrostatics, but no such term exists for magnetism."
            },
            {
              "label": "q_m / μ0",
              "nudge": "Same mistaken assumption of a magnetic source term."
            },
            {
              "label": "zero",
              "nudge": null
            },
            {
              "label": "proportional to q_m",
              "nudge": "Also assumes a source term that does not exist."
            }
          ],
          "correct": 2,
          "solution": "By Gauss's law for magnetism the net flux is zero regardless of what is enclosed, because magnetic field lines form closed loops."
        },
        {
          "t": "mcq",
          "q": "Gauss's law for magnetism differs fundamentally from Gauss's law for electrostatics because:",
          "opts": [
            {
              "label": "magnetic fields are weaker than electric fields",
              "nudge": "Field strength has nothing to do with the structure of the law."
            },
            {
              "label": "magnetic monopoles do not exist",
              "nudge": null
            },
            {
              "label": "magnetic field lines are always straight",
              "nudge": "Magnetic field lines are typically curved closed loops, not straight."
            },
            {
              "label": "magnetic flux cannot be measured",
              "nudge": "Flux is readily measurable, for instance via induced EMF."
            }
          ],
          "correct": 1,
          "solution": "The electric law has a source term (q_enc/ε0) because isolated charges exist; the magnetic law is zero because isolated magnetic poles do not."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] Define magnetic flux and state its SI unit and dimensional formula.",
              "a": "Φ_B = ∫B · dA; weber (Wb); dimensional formula M L² T⁻²A⁻¹."
            },
            {
              "q": "[NEET] A small bar magnet is enclosed within a closed cubical box. State the net magnetic flux emerging from the box.",
              "a": "Zero, by Gauss's law for magnetism."
            },
            {
              "q": "[JEE Main] A square loop of side 10 cm lies in a uniform field of 0.20 T, with its normal making 45° with the field. Find the flux through the loop.",
              "a": "Φ_B = BA cosθ = (0.20)(0.01)(0.7071) ≈ 1.4×10⁻³ Wb."
            },
            {
              "q": "[JEE Main] Over a closed surface, the outward flux through region A is 12 mWb and the inward flux through region B is 5 mWb. Find the flux through the remaining region C, with direction.",
              "a": "12 − 5 + Φ_C = 0 ⇒ Φ_C = 7 mWb, directed inward."
            },
            {
              "q": "[JEE Advanced] Two open surfaces share a common boundary loop. The flux through the first (flat) is 9.0 mWb. State the flux through the second (curved), and name the law that guarantees it.",
              "a": "9.0 mWb, by surface independence, a consequence of Gauss's law for magnetism."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Confusing closed surfaces with open ones. ∮B · dA = 0 is ONLY for closed surfaces; through an open surface (a coil, one face) flux is generally nonzero, and that nonzero value is exactly what matters for induced EMF later.",
            "Thinking an enclosed pole gives net flux. Sealing a surface around a north pole does NOT give positive flux, the lines loop back in. No isolated pole, no net source.",
            "Dropping signs in flux bookkeeping. Outward positive, inward negative. In split-surface problems, one missing sign flips the answer's direction and often its value too.",
            "Confusing weber with tesla. Tesla is field (flux density); weber is flux, field times area. Remember 1 Wb = 1 T m²."
          ]
        },
        {
          "t": "protip",
          "html": "the instant a question reads \"net flux through a closed surface,\" write zero, never integrate. save the actual phi equals BA cos theta work for open surfaces. for split-closed-surface problems, just enforce \"signed fluxes sum to zero\" and solve for the one unknown."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "Φ_B = ∫B · dA = BA cos θ",
              "note": "unit weber, Wb = T m²; dimensional formula M L² T⁻²A⁻¹"
            },
            {
              "f": "∮_S B · dA = 0",
              "note": "for every closed surface, always; the exact statement no monopoles exist"
            },
            {
              "f": "electric: ∮E · dA = q_enc/ε0 (source) · magnetic: 0 (none)",
              "note": "the one-line contrast worth memorising"
            },
            {
              "f": "flux through a loop depends only on the loop",
              "note": "not on the surface spanning it; the foundation of induced EMF later"
            }
          ],
          "aids": [
            "closed surface, flux is zero, full stop",
            "E has ends, on charges; B is a loop, no ends",
            "weber equals tesla times area"
          ]
        }
      ]
    },
    {
      "n": "05",
      "title": "Permanent Magnets and Electromagnets",
      "chip": "05 PERMANENT MAGNETS",
      "kalam": "steel remembers, soft iron forgets, and a good engineer needs both",
      "blocks": [
        {
          "t": "p",
          "html": "Two magnets sit in the average kitchen: the little disc holding a note to the fridge, and, hidden inside the doorbell on the wall, a coil that becomes a magnet only when you press the button. They are the two ends of this topic. One keeps its magnetism for years with no help at all; the other has magnetism on tap, summoned and dismissed by a flick of current. Understanding why a material falls into one camp or the other comes straight from Topic 03's hysteresis loop."
        },
        {
          "t": "p",
          "html": "A <b>permanent magnet</b> is a ferromagnetic material whose domains, once aligned, stubbornly STAY aligned after the magnetising field is switched off. That needs two things from the loop: high <b>retentivity</b>, so it keeps a strong field at H = 0, and, even more importantly, high <b>coercivity</b>, so a stray field, a knock, or the passage of time cannot easily wipe it out. A fat hysteresis loop, steel, Alnico (aluminium-nickel-cobalt), cobalt-steel, ferrites, and the modern rare-earth magnets like neodymium (Nd-Fe-B), fits the bill. An <b>electromagnet</b> wants the opposite temperament: a strong field while current flows, then a field that collapses the instant current stops. That wants very high <b>permeability</b>, a big field for modest current, but LOW retentivity and LOW coercivity so nothing lingers on switch-off. A thin hysteresis loop, and soft iron is the textbook choice."
        },
        {
          "t": "think",
          "html": "picture the domains as a crowd facing random directions, and magnetising as getting them all to face one way. in steel, permanent, the crowd is stubborn, once turned they hold the pose long after you stop directing them, high coercivity, exactly what a magnet that must last needs. in soft iron, electromagnet, the crowd is eager but flighty, they snap to attention the moment you direct them, high permeability, but relax back to random the instant you stop, low retentivity, perfect for a magnet you want to turn off. steel is the disciplined soldier; soft iron is the obedient, forgetful recruit."
        },
        {
          "t": "def",
          "term": "Retentivity and coercivity, recalled from Topic 03",
          "html": "<b>Retentivity (remanence)</b> is the flux density B (or magnetisation M) remaining in a material when H is reduced to zero, how much magnetism it keeps. <b>Coercivity</b> is the reverse magnetising field H required to reduce B (or M) back to zero, how hard it is to demagnetise. Unit of coercivity: A m⁻¹, the same as any H."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Everything in this topic lives BELOW the Curie temperature; heat any ferromagnet past T_c (Topic 03) and it turns paramagnetic, losing both retentivity and coercivity outright. The formula B = μ0μ_rnI assumes the core is UNSATURATED and μ_r stays roughly constant; near saturation μ_r drops and the field stops rising in proportion to current. And the lifting-force formula F = B²A/2μ0 assumes the pole face and the load sit in FLUSH, gap-free contact; even a thin air gap slashes the force dramatically."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FIELD INSIDE A CORED SOLENOID",
          "tag": "an air core times mu_r is the whole point of an electromagnet",
          "main": "<i>B</i> = μ<sub>0</sub>μ<sub>r</sub><i>nI</i> = μ<i>nI</i>, <i>n</i> = <i>N</i>/<i>L</i>",
          "legend": [
            "<i>N</i> = total turns, <i>L</i> = solenoid length, <i>I</i> = current in A, <i>n</i> = turns per metre",
            "μ_r = relative permeability of the core; air core gives μ_r = 1 and B = μ0nI",
            "unit of B: tesla; a soft-iron core multiplies the air-core field by μ_r, typically hundreds to a few thousand"
          ],
          "note": null
        },
        {
          "t": "formula",
          "kicker": "FORMULA · LIFTING (HOLDING) FORCE OF AN ELECTROMAGNET",
          "tag": "per pole face, and for a two-face horseshoe",
          "main": "<i>F</i> = <i>B</i>²<i>A</i>/2μ<sub>0</sub> (one pole face)<br><i>F</i><sub>total</sub> = <i>B</i>²<i>A</i>/μ<sub>0</sub> (horseshoe, two faces)",
          "legend": [
            "<i>B</i> = flux density at the pole face, in T; <i>A</i> = face area, in m²",
            "unit of F: newton, dimensional formula M L T⁻²",
            "current to demagnetise a sample of coercivity H_c in a solenoid of n turns per metre: I = H_c/n"
          ],
          "note": "A horseshoe grips with TWO faces, so its total is twice the single-face formula, not the single-face formula alone. The lifting-force formula assumes flush, gap-free contact; even a thin air gap slashes the force dramatically."
        },
        {
          "t": "think",
          "html": "a horseshoe is a bar magnet folded back on itself so both pole faces point the same way, at the load. two pole faces pulling on the same spot beats one pole face pulling alone, which is exactly why the lifting formula doubles rather than staying at the single-face value, and exactly why a scrapyard crane's magnet is shaped like a fat disc with the whole rim as one effective pole facing straight down, not a single bar dangling above the car."
        },
        {
          "t": "defgrid",
          "title": "Choosing a material",
          "tag": "read the requirement, then read it off the loop",
          "rows": [
            {
              "k": "Retentivity",
              "v": "permanent magnet: high · electromagnet core: low"
            },
            {
              "k": "Coercivity (the key property)",
              "v": "permanent magnet: high · electromagnet core: low"
            },
            {
              "k": "Permeability",
              "v": "permanent magnet: high · electromagnet core: very high"
            },
            {
              "k": "Hysteresis loop",
              "v": "permanent magnet: wide/fat, large area · electromagnet core: narrow/thin, small area"
            },
            {
              "k": "Typical material",
              "v": "permanent magnet: steel, Alnico, ferrite, Nd-Fe-B · electromagnet core: soft iron"
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 5.8 · TWO LOOPS, TWO JOBS",
          "chips": [
            "electromagnet core: thin loop",
            "permanent magnet: fat loop"
          ],
          "captions": [
            "Soft iron's loop for an electromagnet core: narrow in H (low coercivity) and short in B at H = 0 (low retentivity). Little area means little energy wasted per cycle, and almost nothing remains once the current stops, exactly the on/off control a doorbell or a crane electromagnet needs.",
            "Steel or Alnico's loop for a permanent magnet: wide in H (high coercivity, hard to demagnetise by a stray field or a knock) and tall in B at H = 0 (high retentivity, a strong field kept with no current at all). The large area is not a defect here, since this loop is traversed once, on magnetising, not cycled fifty times a second."
          ],
          "frames": [
            {
              "x": [
                -3.4,
                3.4
              ],
              "y": [
                -1.7,
                1.7
              ],
              "axisX": "H",
              "axisY": "B",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      1
                    ],
                    [
                      1.5,
                      0.98
                    ],
                    [
                      0.5,
                      0.7
                    ],
                    [
                      0,
                      0.5
                    ],
                    [
                      -0.2,
                      0.3
                    ],
                    [
                      -0.4,
                      0
                    ],
                    [
                      -1,
                      -0.6
                    ],
                    [
                      -3,
                      -1
                    ],
                    [
                      -1.5,
                      -0.98
                    ],
                    [
                      -0.5,
                      -0.7
                    ],
                    [
                      0,
                      -0.5
                    ],
                    [
                      0.2,
                      -0.3
                    ],
                    [
                      0.4,
                      0
                    ],
                    [
                      1,
                      0.6
                    ],
                    [
                      3,
                      1
                    ]
                  ],
                  "smooth": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0.5,
                  "label": "low retentivity",
                  "at": "nw"
                }
              ]
            },
            {
              "x": [
                -3.4,
                3.4
              ],
              "y": [
                -1.7,
                1.7
              ],
              "axisX": "H",
              "axisY": "B",
              "curves": [
                {
                  "c": "pts",
                  "pts": [
                    [
                      3,
                      1.4
                    ],
                    [
                      2,
                      1.38
                    ],
                    [
                      1,
                      1.2
                    ],
                    [
                      0,
                      0.9
                    ],
                    [
                      -0.6,
                      0.5
                    ],
                    [
                      -1.2,
                      0
                    ],
                    [
                      -2,
                      -0.9
                    ],
                    [
                      -3,
                      -1.4
                    ],
                    [
                      -2,
                      -1.38
                    ],
                    [
                      -1,
                      -1.2
                    ],
                    [
                      0,
                      -0.9
                    ],
                    [
                      0.6,
                      -0.5
                    ],
                    [
                      1.2,
                      0
                    ],
                    [
                      2,
                      0.9
                    ],
                    [
                      3,
                      1.4
                    ]
                  ],
                  "smooth": true
                }
              ],
              "points": [
                {
                  "x": 0,
                  "y": 0.9,
                  "label": "high retentivity",
                  "at": "nw"
                },
                {
                  "x": -1.2,
                  "y": 0,
                  "label": "high coercivity",
                  "at": "sw"
                }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "Making a permanent magnet",
          "steps": [
            "<b>Electrical method (most effective, used commercially).</b> Place the steel rod inside a solenoid and pass a strong direct current. The intense, uniform field aligns the domains; steel's high coercivity locks the alignment in once the current stops.",
            "<b>Single-touch (stroking).</b> Stroke the rod end to end repeatedly with ONE pole of a magnet, always the same direction, lifting clear between strokes. Each pass nudges more domains into alignment.",
            "<b>Double-touch.</b> Stroke from the centre outward with two UNLIKE poles simultaneously, one moving to each end.",
            "<b>Hammering in the Earth's field.</b> Hold the rod along the Earth's field direction and tap it with a hammer; the shocks help domains jostle into alignment with that field."
          ]
        },
        {
          "t": "proc",
          "title": "Destroying magnetism",
          "steps": [
            "<b>Heat past the Curie temperature.</b> Thermal agitation randomises the domains (Topic 03); on cooling, the material is unmagnetised.",
            "<b>Rough handling.</b> Random hammering delivers shocks in scattered orientations, scattering the domain alignment along with them.",
            "<b>AC demagnetisation.</b> Place the sample in a solenoid carrying alternating current of slowly decreasing amplitude; the repeatedly reversing, shrinking field walks the material around ever-smaller hysteresis loops down to zero magnetisation."
          ]
        },
        {
          "t": "think",
          "html": "ac demagnetisation is a shrinking spiral, not a straight line to zero. each half-cycle drags the material around a hysteresis loop, but the current's own amplitude is falling, so every loop is a little smaller than the one before it. round after round, the loops nest inward like a spring winding down, and the material rides that shrinking spiral all the way to the origin, zero magnetisation, without ever needing to touch the curie temperature at all."
        },
        {
          "t": "p",
          "html": "A current-carrying solenoid alone gives B = μ0nI. Insert a soft-iron core and its domains align with the solenoid's own field, adding their own enormous magnetisation on top, so the field becomes B = μ0μ_rnI, larger by the factor μ_r, several hundred to a few thousand for soft iron. Because soft iron has low retentivity, the moment the current stops the domains relax and the field nearly vanishes, giving the on/off control an electromagnet exists to provide in the first place."
        },
        {
          "t": "p",
          "html": "A doorbell and a relay are the same soft-iron electromagnet doing two different jobs. In a doorbell, the coil pulls a soft-iron striker against a gong the instant current flows, and releases it the instant you let go of the button, exactly the clean on/off Topic 05 keeps insisting on. A relay uses the identical pull to close a completely separate, often much higher-current, circuit: a small control current in the coil switches a large power circuit at the armature, which is why relays sit between a car's key switch and its starter motor, or between a low-voltage sensor and a mains-voltage appliance."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A solenoid 0.25 m long has 500 turns and carries a current of 2.0 A. A soft-iron core of relative permeability 600 fills it. Find the magnetic field inside.",
          "steps": [
            "n = N/L = 500/0.25 = 2000 m⁻¹.",
            "B = μ0μ_rnI = (4π×10⁻⁷)(600)(2000)(2.0)."
          ],
          "ans": "B ≈ 3.0 T. Without the core the field would be only μ0nI = 5.0×10⁻³ T; the soft iron multiplies it 600 times over, and that amplification, plus the clean switch-off, is the entire point of an electromagnet."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "For the core of an electromagnet, which is the better choice, soft iron or steel, and why?",
          "steps": [
            "Answer instantly from the soft/hard logic: soft iron.",
            "An electromagnet must produce a strong field while current flows and lose it the instant current stops. Soft iron has high permeability (strong field per unit current) and low retentivity (no lingering magnetism), a thin loop.",
            "The trap is picking steel because “strong, hard material makes a stronger magnet.” Steel's high coercivity is exactly wrong here, it stays magnetised after switch-off, defeating the on/off purpose."
          ],
          "ans": "Soft iron. Steel is for permanent magnets; soft iron is for electromagnets. Soft for switching, hard for holding."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, LIFTING FORCE",
          "q": "A horseshoe electromagnet produces a flux density of 1.5 T at each of its two pole faces, each of area 8.0 cm². Find the maximum weight it can support.",
          "steps": [
            "Two pole faces, so use the horseshoe formula directly: F = B²A/μ0.",
            "F = (1.5)²(8.0×10⁻⁴) / (4π×10⁻⁷) = (2.25)(8.0×10⁻⁴) / (1.2566×10⁻⁶)."
          ],
          "ans": "F ≈ 1.4 × 10³ N (about 1432 N, roughly a 146 kg load with g = 9.8 m s⁻²). Per pole face alone the force is B²A/2μ0; the two faces of a horseshoe double it, cancelling the 2 in the denominator, which is why scrapyard electromagnets can lift entire cars."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL, A DESIGN PROBLEM",
          "q": "A horseshoe electromagnet must lift a 200 kg iron block. Each of its two pole faces has area 10 cm². The core has relative permeability 800, and the energising solenoid has 4000 turns per metre. (a) What flux density is needed at the poles? (b) What current must flow? (Take g = 9.8 m s⁻².)",
          "steps": [
            "(a) Required force F = mg = 200 × 9.8 = 1960 N. From F = B²A/μ0 with A = 1.0×10⁻³ m²: B = √(Fμ0/A) = √[(1960)(1.2566×10⁻⁶)/(1.0×10⁻³)] = √2.463.",
            "(b) From B = μ0μ_rnI: I = B/(μ0μ_rn) = 1.57 / [(1.2566×10⁻⁶)(800)(4000)]."
          ],
          "ans": "(a) B ≈ 1.57 T. (b) I ≈ 0.39 A. Strip the core away (μ_r = 1) and the same field would need 800 times the current, about 310 A, exactly why electromagnets are always built around a high-permeability core."
        },
        {
          "t": "mcq",
          "q": "The material most suitable for a permanent magnet should have:",
          "opts": [
            {
              "label": "high retentivity and low coercivity",
              "nudge": "Low coercivity would let it demagnetise easily under a stray field, useless for permanence."
            },
            {
              "label": "low retentivity and high coercivity",
              "nudge": "Low retentivity means little remanent field to begin with, even if it resists losing what little it has."
            },
            {
              "label": "high retentivity and high coercivity",
              "nudge": null
            },
            {
              "label": "low retentivity and low coercivity",
              "nudge": "Describes soft iron, an electromagnet core, not a permanent magnet."
            }
          ],
          "correct": 2,
          "solution": "A permanent magnet must hold a strong field (high retentivity) AND resist being demagnetised by stray fields or knocks (high coercivity), a wide loop, as in steel or Alnico."
        },
        {
          "t": "mcq",
          "q": "Soft iron is preferred over steel for an electromagnet core because soft iron has:",
          "opts": [
            {
              "label": "high coercivity",
              "nudge": "A permanent-magnet trait; the field would persist after switch-off, defeating on/off control."
            },
            {
              "label": "high permeability and low retentivity",
              "nudge": null
            },
            {
              "label": "high retentivity and high coercivity",
              "nudge": "Both permanent-magnet traits, the exact opposite of what an electromagnet core needs."
            },
            {
              "label": "a large hysteresis loop area",
              "nudge": "A large loop area means large energy loss per cycle, undesirable in any electromagnet."
            }
          ],
          "correct": 1,
          "solution": "High permeability gives a strong field for a given current; low retentivity ensures the magnetism vanishes the moment current is switched off."
        },
        {
          "t": "mcq",
          "q": "Which of the following will NOT demagnetise a permanent magnet?",
          "opts": [
            {
              "label": "heating it above its Curie temperature",
              "nudge": "Thermal chaos past T_c randomises domains: this DOES demagnetise."
            },
            {
              "label": "hammering it in random orientations",
              "nudge": "Random shocks scatter domain alignment: this DOES demagnetise."
            },
            {
              "label": "placing it in a solenoid with steady DC current aligned to its magnetisation",
              "nudge": null
            },
            {
              "label": "placing it in a solenoid with decreasing alternating current",
              "nudge": "The standard AC demagnetisation method: this DOES demagnetise."
            }
          ],
          "correct": 2,
          "solution": "A steady DC field aligned WITH the existing magnetisation only reinforces it further, it does not destroy it."
        },
        {
          "t": "mcq",
          "q": "A solenoid with an iron core (μ_r = 1000) carries a current that would produce 0.004 T in air. The field inside the core is:",
          "opts": [
            {
              "label": "0.004 T",
              "nudge": "Ignores the core entirely."
            },
            {
              "label": "4 T",
              "nudge": null
            },
            {
              "label": "0.4 T",
              "nudge": "Multiplies by 100 instead of 1000."
            },
            {
              "label": "40 T",
              "nudge": "Multiplies by 10,000 instead of 1000."
            }
          ],
          "correct": 1,
          "solution": "The core multiplies the air-core field by μ_r: B = μ_r × B_air = 1000 × 0.004 = 4 T."
        },
        {
          "t": "practice",
          "items": [
            {
              "q": "[CBSE] State two methods by which a steel bar can be converted into a permanent magnet.",
              "a": "Any two of: stroking (single-touch) with one pole of a magnet; placing it in a DC solenoid; hammering it along the Earth's field."
            },
            {
              "q": "[NEET] Name the material best suited for the core of an electromagnet and give the property that makes it suitable.",
              "a": "Soft iron, high permeability with low retentivity."
            },
            {
              "q": "[JEE Main] A solenoid 0.40 m long with 800 turns carries 1.5 A around a core of relative permeability 500. Find the magnetic field inside.",
              "a": "n = 2000 m⁻¹; B = μ0μ_rnI ≈ 1.9 T."
            },
            {
              "q": "[JEE Main] One pole face of an electromagnet, area 5.0 cm², carries a flux density of 1.2 T. Find the force with which it attracts a soft-iron keeper placed flush against it.",
              "a": "Single face: F = B²A/2μ0 ≈ 286 N."
            },
            {
              "q": "[JEE Advanced] A ferromagnetic sample has coercivity 5000 A m⁻¹. It is demagnetised in a solenoid of 2500 turns per metre. Find the current required, and name one non-electrical demagnetising method.",
              "a": "I = H_c/n = 5000/2500 = 2.0 A; alternatively, heat above the Curie temperature (or hammer it in random orientations)."
            }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Swapping steel and soft iron. Steel (high coercivity, wide loop) is for PERMANENT magnets; soft iron (high permeability, low retentivity, thin loop) is for ELECTROMAGNET cores. Reversing these is the single most common error in this topic.",
            "Forgetting the core factor. A cored solenoid gives B = μ0μ_rnI, not μ0nI. Dropping μ_r undercounts the field by hundreds or thousands of times.",
            "Missing the second pole face in a lifting-force problem. A horseshoe grips with TWO faces: F_total = B²A/μ0, twice the single-face B²A/2μ0.",
            "Confusing retentivity with coercivity. Retentivity is the field LEFT at H = 0 (how much it keeps); coercivity is the reverse field NEEDED to zero it (how hard it is to erase). Both need to be high for a permanent magnet, but coercivity is the make-or-break one."
          ]
        },
        {
          "t": "protip",
          "html": "reduce every material question to one phrase: soft for switching, hard for holding. soft iron switches, so it belongs in an electromagnet; hard steel holds, so it belongs in a permanent magnet. for force problems, check whether the magnet grips with one pole face or two before plugging in, and always convert pole-face area from square centimetres to square metres, a factor of ten to the minus four that gets dropped more often than any other step in this topic."
        },
        {
          "t": "snapshot",
          "rows": [
            {
              "f": "B = μ0μ_rnI",
              "note": "cored-solenoid field; the core boosts it by μ_r"
            },
            {
              "f": "F = B²A/2μ0 (one face), B²A/μ0 (horseshoe)",
              "note": "lifting force; two faces double it"
            },
            {
              "f": "permanent: high retentivity + high coercivity",
              "note": "wide loop; steel, Alnico, ferrite, Nd-Fe-B"
            },
            {
              "f": "electromagnet core: high permeability + low retentivity + low coercivity",
              "note": "thin loop; soft iron"
            }
          ],
          "aids": [
            "soft for switching, hard for holding",
            "retentivity is what is retained, coercivity is the force to cancel",
            "the core multiplies by mu_r, never forget the core"
          ]
        }
      ]
    }
  ]
};

export default phy12MagnetismMatter;
