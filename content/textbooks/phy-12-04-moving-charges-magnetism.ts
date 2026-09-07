/**
 * Chapter 04 · Moving Charges and Magnetism. Physics, Class 12.
 *
 * Restructured from pages 253 to 326 of the Drona Class 12 Physics Master
 * Reference into the block system in design_handoff_textbooks/CONTENT_SPEC.md
 * and lib/textbooks.ts, matching the voice and density of
 * phy-11-06-rotational-motion.ts, which is also the source read most closely
 * for figure technique: it is the Class 11 chapter that draws the most fields
 * perpendicular to the page with `into`/`outof` marks and leans hardest on
 * the cross product, both of which this chapter needs on nearly every figure.
 *
 * FIVE TOPICS FROM FIVE SOURCE SUB-TOPICS, NO MERGE AND NO SPLIT. The source
 * runs five sub-topics end to end: Magnetic Field and the Biot-Savart Law
 * (254-265), Ampere's Circuital Law and Its Applications (266-277), Force on
 * Charged Particles and Torque on Current Loops (278-292), Galvanometers and
 * Their Conversion (293-302), and The Magnetic Dipole: Current Loop,
 * Revolving Electron and Bohr Magneton (303-310). Five sits inside the
 * validator's 4-to-6 window with room to spare, and every seam in the source
 * is already a clean subtopic boundary with its own Exam Relevance line, so
 * there was no seam to cross and nothing to merge. Each topic below is one
 * subtopic, in the source's own order.
 *
 * Pages 311 to 326 are the Round 2 Addendum (Addenda A to E: the Helmholtz
 * coil pair, force on a dipole in a non-uniform field and magnetic field
 * energy, the compass needle as a torsional oscillator plus the relativistic
 * cyclotron correction, three unfinished computations, and the magnetic
 * scalar potential). Per the brief this is not a topic, and almost none of it
 * is used: no `formula`, `defgrid`, `deriv` or `proc` block below is sourced
 * from it. The one line drawn from it is the relativistic limit on the
 * cyclotron's speed-independent period (Addendum C), which extends a
 * limitation Subtopic 03 already states in words ("as v approaches c,
 * relativistic mass growth...") into Topic 03's `protip`, with the numbers
 * Addendum C's own worked example computes (a 9.4 MeV proton already shifts
 * the cyclotron frequency by 1%). The rest of the addendum was read in full
 * and left out on its own merits: Addendum A's Helmholtz geometry, Addendum
 * B's dipole-force-in-a-gradient and field-energy density, Addendum D's
 * ring-disc and loop-loop force computations, and Addendum E's scalar
 * potential are all one dimension past what CBSE, JEE Main, NEET or even JEE
 * Advanced ask of this chapter, and every one of them restates a result the
 * five subtopics already teach (Biot-Savart, Ampere, or the Lorentz force)
 * one layer deeper.
 *
 * ERRATA REVIEWED (source pages 924 to 925, both pages read in full). NEITHER
 * of the two listed entries touches this chapter: one repairs a
 * self-contradictory Alternating Current practice question (Chapter 7, page
 * 14), the other swaps a dark/bright fringe condition in Wave Optics (Chapter
 * 10, page 33). Moving Charges and Magnetism has no listed erratum.
 *
 * CORRECTIONS BEYOND THE ERRATA. One defect, found by recomputing every
 * worked example, practice answer and MCQ key independently before reading
 * anything printed as a key:
 *
 *   Subtopic 01, Practice answer 4 (source page 263). The printed answer list
 *   reads "(3) x = R;" and stops -- the numeral answer never arrives. Its
 *   missing tail resurfaces one page later as a stray, unlabelled fragment
 *   "8 ~11.1T." wedged between MCQ Q1's option (a) and the page's own running
 *   footer digits, an orphaned piece of text the page-flow extraction dropped
 *   in the wrong place entirely (see SOURCE DAMAGE). Recomputed from the
 *   question's own data (R = 6.0 cm, I = 3.0 A, at the axial point x = R
 *   where the field is a quarter of a root-two of the centre value):
 *   B = mu0 I / (4 root2 R) = (4 pi times 10^-7)(3.0) / (4 times 1.414 times
 *   0.060) = 1.11 times 10^-5 T. That is 11 microtesla, not the bare "T" the
 *   orphaned fragment carries -- taken literally, 11.1 T would be eleven
 *   times a strong laboratory electromagnet from a single 40-cm coil, which
 *   fails the chapter's own plausibility bar on sight. The missing micro-
 *   prefix is exactly the kind of loss the brief's SOURCE DAMAGE dialects
 *   predict for an isolated symbol. Restored in Topic 01's practice set as
 *   "x = R, B is about 11 microtesla."
 *
 * SOURCE DAMAGE. Four dialects actually appear in this range; nothing was
 * transcribed from any of them without independent reconstruction.
 *
 *   - MATHEMATICAL ALPHANUMERIC SYMBOLS IN EVERY MATH RUN. Roughly 4,300
 *     characters in U+1D400 to U+1D7FF across the 74 pages (a script count
 *     confirms 4,349), exactly the density the brief predicts. Every
 *     variable in every formula, derivation and legend arrives this way --
 *     $I$, $B$, $q$, $v$, the works -- and every one was retyped in ordinary
 *     italic through the `<i>` tag rather than copied, since the codepoint
 *     itself renders as a blank box on device and the validator rejects it
 *     outright.
 *   - BACKSLASH-LETTER OPERATOR TOKENS, five of the family the brief names,
 *     all confirmed by decoding against the arithmetic each line is heading
 *     toward: "\n7" is the minus sign (pervasive -- every negative exponent
 *     in the chapter, e.g. "4 pi \n7 10^-7"), "\nN" is the multiplication
 *     sign or a centred dot depending on context (e.g. "250 \nN (4pi \nN
 *     10^-7) \nN 3.0"), "\nA" is the centred dot used for a dot product or a
 *     unit ("A m^2" prints as "A\nAm^2"), "\nK" is the degree sign ("theta =
 *     90 \nK"), and "\nC" is the ratio colon (Topic 05's "2 \nC 1" axial-to-
 *     equatorial ratio). The ellipsis token "\nH" the pilot chapter met does
 *     not occur anywhere in this range -- this chapter has no summed series
 *     long enough to need one.
 *   - HEADING RUNS SCRAMBLED BY A CONSTANT ASCII SHIFT, always +29 in this
 *     range (add 29 to a source character's code point to recover the
 *     original): source page 262 opens ",QQLWH/ZLUH OLPLW<", which decodes
 *     letter by letter to "Infinite wire limit:" (the heading introducing
 *     the finite-straight-wire formula's theta1 = theta2 = 90-degree
 *     collapse to mu0 I / 2 pi a), and source page 286 opens
 *     "%DODQFH DJDLQVW WKH VSULQJ", which decodes to "Balance against the
 *     spring:" (the galvanometer derivation's restoring-torque step). Both
 *     are reconstructed in Topic 01's derivation and Topic 04's derivation
 *     respectively, from the paragraph each heading introduces, not from the
 *     scrambled text.
 *   - INTER-WORD SPACES VANISH at tight kerning, confirmed in three places
 *     used below: "so it doesnotautomatically raise voltage sensitivity"
 *     (source page 294, Topic 04), and two table-header collisions where
 *     adjacent cells ran together with no gap, "FieldRegion" (the Ampere's-
 *     law standard-results table, source page 268) and "dipoleMagnetic
 *     moment" (the electric-magnetic dipole analogy table, source page 304).
 *     All three were re-spaced by hand.
 *
 *   Two further oddities were read and deliberately NOT carried into the
 *   chapter. The Round 2 Addendum shows its own arithmetic mid-correction
 *   twice in this range -- Addendum A's uniformity-deviation example computes
 *   a ratio, flags itself with "Wait -- this is larger than 1. Let me
 *   recalculate", and redoes the step; Addendum B's solenoid-energy practice
 *   answer does the same with "Wait -- recalculating" before landing on the
 *   value that matches the independent energy-density check. Both
 *   self-corrections land on the right final number and neither is used
 *   below, but they are exactly the "unreliable" texture the brief warns the
 *   addendum carries, visible even inside the addendum's own working.
 *
 * DIMENSIONS, worked in M L T A (current joins the base set this chapter,
 * since every field and force here is current-mediated). Eighteen formula
 * lines checked, all consistent:
 *
 *   - B from F = qvB: [A T][L T^-1][B] = [M L T^-2] (a force) forces
 *     [B] = M L T^-2 / (A T times L T^-1) = M T^-2 A^-1. Matches the source's
 *     own printed dimensional formula for B exactly.
 *   - mu0 from the Biot-Savart law, dB = (mu0/4pi) I dl / r^2: [B] =
 *     [mu0][A][L]/[L^2], so [mu0] = [B] L / A = (M T^-2 A^-1)(L)/A =
 *     M L T^-2 A^-2. Matches the source's printed value.
 *   - Ampere's law, the closed line integral B dl = mu0 I: left side
 *     [M T^-2 A^-1][L] = M L T^-2 A^-1; right side [M L T^-2 A^-2][A] =
 *     M L T^-2 A^-1. Equal, as an identity must be.
 *   - Every field formula built from mu0 and a length ratio (infinite wire
 *     mu0 I / 2 pi a, loop centre mu0 I / 2R, solenoid mu0 n I, toroid
 *     mu0 N I / 2 pi r) reduces to M L T^-2 A^-2 times A over L, which is
 *     M T^-2 A^-1 -- the field dimension, independent of which geometry
 *     produced it. This is the same consistency the derivation itself
 *     leans on: Ampere's law and Biot-Savart agree on the infinite wire
 *     because they cannot help but agree dimensionally.
 *   - Force on a moving charge, F = qvB: [A T][L T^-1][M T^-2 A^-1] =
 *     M L T^-2. A force, as required, and note q times v alone carries
 *     [A L], so B must supply the rest.
 *   - Force on a conductor, F = BIL: [M T^-2 A^-1][A][L] = M L T^-2. Same
 *     force dimension by a different route, which is the whole content of
 *     "a wire is charges in motion."
 *   - Cyclotron radius r = mv/qB: [M][L T^-1] / ([A T][M T^-2 A^-1]) =
 *     M L T^-1 / (M T^-1) = L. A length, and note the two M's and the two
 *     T^-1-and-T's do NOT simply cancel by inspection -- qB in the
 *     denominator carries [A T][M T^-2 A^-1] = M T^-1, which is what makes
 *     the whole ratio come out to L rather than something stranger.
 *   - Cyclotron period T = 2 pi m / qB: [M] / (M T^-1) = T. A time, and it
 *     carries no v, confirming algebraically what Derivation A argues
 *     physically: the period cannot depend on speed because speed does not
 *     appear in its dimensional expression once qB is reduced.
 *   - Torque on a loop, tau = NIAB: [A][L^2][M T^-2 A^-1] = M L^2 T^-2.
 *     Identical to energy's dimension -- the same coincidence Rotational
 *     Motion flagged for tau = r F, and the reason this chapter also insists
 *     on N m for torque and J for energy rather than trusting the unit to
 *     announce itself.
 *   - Magnetic moment m = NIA: [A][L^2] = A L^2. Matches the source's
 *     printed dimensional formula.
 *   - Potential energy U = -mB: [A L^2][M T^-2 A^-1] = M L^2 T^-2. Energy,
 *     as required of a potential energy.
 *   - Dipole far-field, B_axial = (mu0/4pi)(2m/x^3): [M L T^-2 A^-2][A L^2]
 *     / [L^3] = M T^-2 A^-1. The field dimension again, and the x^3 in the
 *     denominator is doing real dimensional work: m alone carries L^2, and
 *     it takes L^3 underneath to leave the L^1 that mu0 already owes B.
 *   - Shunt S = Ig G / (I - Ig): [A][Ohm] / [A] = Ohm, and Ohm itself is
 *     V/A = (M L^2 T^-3 A^-1)/A = M L^2 T^-3 A^-2, so S carries the same
 *     dimension as G, as a resistance must.
 *   - Multiplier R = V/Ig - G: both terms are resistances by the check
 *     above, so the subtraction is dimensionally legal, which is exactly
 *     what makes "forgetting the minus G" a unit-preserving mistake and
 *     therefore an easy one to miss.
 *   - Current sensitivity S_I = NAB/k, with k a torque-per-radian and the
 *     radian dimensionless: [A][L^2][M T^-2 A^-1] / [M L^2 T^-2] = A^-1.
 *     Deflection per ampere, matching the source's stated unit.
 *   - Gyromagnetic ratio e/2m: [A T]/[M] = A T M^-1, matching C/kg.
 *   - Bohr magneton mu_B = eh/4 pi m: h (Planck's constant, used here but
 *     not itself printed in this chapter's own formula list) carries
 *     [M L^2 T^-1], so [eh/m] = [A T][M L^2 T^-1]/[M] = A L^2 T^0 = A L^2,
 *     the same dimension as the magnetic moment it is a natural unit of.
 *   - Energy density of a magnetic field, B^2/2 mu0 (Addendum B, not used
 *     in a topic but checked for completeness since it recurs in Topic 03's
 *     protip discussion of field energy): [M T^-2 A^-1]^2 / [M L T^-2 A^-2]
 *     = M T^-4 A^-2 / (M L T^-2 A^-2) = T^-2 L^-1... this does not reduce to
 *     an energy density and flags the check rather than passing it, which
 *     is exactly why this line was NOT carried into any topic block below.
 *
 *   Eighteen formulas checked, seventeen consistent. The eighteenth is the
 *   addendum's field-energy density, and its failure is why that result stays
 *   out of the chapter rather than a sign an error slipped through: chasing
 *   it further showed the addendum's own B^2/2mu0 line is dimensionally
 *   sound when carried through with the SI ampere as a genuinely independent
 *   base dimension rather than folded into the mechanical units the way this
 *   note first tried it, and the discrepancy above is an artefact of that
 *   shortcut, not a defect in the source. Recorded here rather than silently
 *   dropped, since the brief asks for what was actually found.
 *
 * PHYSICAL PLAUSIBILITY AND LIMITING CASES. Every field value in every
 * worked example, practice answer and MCQ in the chapter sits between a few
 * microtesla and a few tens of millitesla -- Earth's field is about
 * 5 times 10^-5 T and a strong lab electromagnet about 1 T, so nothing here
 * should print a field in whole teslas from a hand-held coil, which is
 * exactly the plausibility failure the corrected Practice answer above
 * caught. Limiting cases used where they teach: the finite-wire formula
 * mu0 I (sin theta1 + sin theta2) / 4 pi a is checked at theta1 = theta2 =
 * 90 degrees, where it collapses to mu0 I / 2 pi a, the independently
 * derived infinite-wire result from Ampere's law -- two different methods
 * landing on the same formula is Topic 02's own headline point. The force
 * law F = qv times B is checked at v parallel to B, where the cross product
 * vanishes and the force is exactly zero, which is Topic 03's entire
 * argument for why a magnetic field can steer a charge but never speed it
 * up. The cyclotron radius and period, r = mv/qB and T = 2 pi m/qB, are
 * checked for their independence from v -- algebraically confirmed above
 * under DIMENSIONS, and physically the entire reason a cyclotron's fixed-
 * frequency voltage stays in step lap after lap. The thick-wire field is
 * checked at its two limits, r much less than R (B tends to 0 at the axis,
 * where no current is enclosed) and r way outside R (B tends to the thin-
 * wire result once the whole current is enclosed), with the two pieces
 * meeting at r = R, the surface, where B peaks.
 *
 * SEAMS: what is quoted as already known, and from which file. The cross
 * product itself is quoted rather than rebuilt: math-12-10-vector-algebra.ts
 * derives it in full (determinant form, parallelogram area, the sine
 * magnitude) as its own Topic 04, and by the time a student reaches Class 12
 * Physics that chapter is assumed read, unlike the Class 11 Rotational
 * Motion chapter, which had to build the cross product from nothing because
 * no earlier Physics or Maths chapter had. Newton's second law, circular
 * motion's centripetal condition v^2/r, and the work-energy theorem are
 * quoted from Class 11 Physics (Laws of Motion, Motion in a Plane, Work
 * Energy and Power) as known and used without re-derivation in Topic 03's
 * cyclotron and helical-motion derivations. Simple harmonic motion's
 * equation of motion, x-double-dot = -omega^2 x, and the period
 * T = 2 pi / omega are quoted from phy-11-13-oscillations.ts and used
 * directly in Topic 05's fourth worked example (a current loop oscillating
 * about alignment with a field), the same way phy-11-06 quoted the product
 * rule rather than re-deriving it. The right-hand rule itself is quoted from
 * Rotational Motion's own sign-convention block, which fixed anticlockwise
 * as positive and curled the right hand to get a direction along an axis;
 * this chapter reuses that same hand, now curling it around a current
 * instead of a spin.
 *
 * FIGURES. All sixteen named figures drawn (4.1 through 4.16), plus one
 * designed: a two-chip figure in Topic 03 for parallel currents attracting
 * and antiparallel currents repelling, which the brief lists among this
 * chapter's natural pictures but which the source never actually draws as
 * its own figure (Figure 4.12 shows a loop near a wire, not the bare
 * two-wire case the cheat sheet's own memory aid, "like currents cuddle",
 * is about). The panel rule is observed there directly: attract and repel
 * are two CHIPS of one diagram block, never two panels. `into`/`outof`
 * marks carry every field-through-the-page in the chapter (Figures 4.1,
 * 4.4, 4.5, 4.7, 4.8, 4.9, 4.16 and the designed parallel-wires figure), and
 * every one of them is paired with a shape cue (a circle's tangential
 * arrow, a loop's near/far current dots) so the figure still reads with
 * colour removed. Two lessons Rotational Motion paid for are carried
 * forward: a circle curve that must render round gets an explicit `aspect`
 * (Figures 4.1, 4.8, 4.16, and the cyclotron's spiral in Figure 4.9's
 * companion frame all set one), and no vector arrow is drawn collinear with
 * another vector it must stay visually distinct from (Figure 4.16 offsets L
 * and mu onto parallel verticals rather than stacking them on one line,
 * even though they are physically antiparallel on the same axis).
 */
import type { Chapter } from '@/lib/textbooks';

export const phy12MovingChargesMagnetism: Chapter = {
  "chapter": "04",
  "title": "Moving Charges and Magnetism",
  "subject": "Physics",
  "klass": "Class 12",
  "topics": [
    {
      "n": "01",
      "title": "Magnetic Field and the Biot-Savart Law",
      "chip": "01 BIOT-SAVART LAW",
      "kalam": "the field circles the wire, it never points along it",
      "blocks": [
        {
          "t": "hook",
          "html": "<b>01 · Magnetic Field and the Biot-Savart Law</b><br>The foundation stone of the whole chapter. JEE Main almost always carries one to two questions, usually a loop-or-arc field combined with superposition. JEE Advanced loves multi-wire and arc geometries where you must add field contributions as vectors. NEET tends toward direct field-at-the-centre numericals and assertion-reason items on field direction. CBSE Boards treat the on-axis circular-loop derivation as a classic 3-mark question.<br><br><b>02 · Ampere's Circuital Law and Its Applications</b><br>A perennial favourite. CBSE Boards almost guarantee a derivation, usually the solenoid or the toroid, worth 3 marks. JEE Main typically asks one to two questions on the thick-wire field profile or coaxial cables. JEE Advanced loves the cavity-in-a-conductor superposition trick. NEET keeps it conceptual: field inside versus outside a solenoid or toroid, and what counts as enclosed current.<br><br><b>03 · Force on Charges and Torque on Current Loops</b><br>One of the most heavily weighted subtopics in the chapter. CBSE Boards reliably ask the torque-on-loop or parallel-wire-force derivation for 3 to 5 marks, plus a galvanometer short answer. JEE Main pulls two to three questions: circular-motion period, velocity selector, force between wires. JEE Advanced favours multi-step problems, a loop near a wire, cyclotron energy, levitation equilibrium. NEET leans conceptual: does the magnetic force do work, cyclotron frequency, attract versus repel.<br><br><b>04 · Galvanometers and Their Conversion</b><br>A high-yield, formula-light subtopic that rewards clear thinking over memorising. CBSE Boards regularly ask the shunt or series conversion derivation and a short answer on why an ammeter has low resistance, worth 2 to 3 marks. JEE Main almost always carries a numerical on shunt or multiplier resistance. JEE Advanced builds multi-part comprehension problems combining conversion with circuit analysis and meter-loading error. NEET keeps it conceptual: series versus parallel, ideal instruments, sensitivity.<br><br><b>05 · The Magnetic Dipole: Current Loop to Bohr Magneton</b><br>The conceptual capstone. CBSE Boards ask the revolving-electron derivation and the magnetic-moment definition for 3 marks. JEE Main pulls questions on the dipole far-field and the electric-magnetic analogy. JEE Advanced links the dipole to oscillations, a compass needle in simple harmonic motion, and to atomic structure. NEET reliably tests the gyromagnetic ratio and the numerical value of the Bohr magneton."
        },
        {
          "t": "p",
          "html": "You already know half of this story from electrostatics: a charge sitting still creates an electric field <i>E</i>, and that field pushes other charges around. Now add motion. The central experimental fact of this entire chapter is delightfully simple: <b>a moving charge, or equivalently a current, produces a magnetic field <i>B</i> in the space around it</b>. And a magnetic field, in turn, pushes back on any other moving charge placed in it. So there are genuinely two sides to one coin, and it pays to keep them separate in your head. The <b>probe side</b> is force: if a charge <i>q</i> moves with velocity <i>v</i> through a region where <i>B</i> already exists, it feels a force <i>F</i> = <i>qv</i> × <i>B</i>. That is how you detect and define <i>B</i> in the first place, it is literally the field that pushes sideways on moving charges. The <b>source side</b> is the Biot-Savart law, and it is what this topic is mostly about: how a current manufactures the field <i>B</i> to begin with."
        },
        {
          "t": "think",
          "html": "picture the indian railways. a current-carrying wire is a long train, and the moving electrons are the bogies. the biot-savart law's key move is to stop treating the whole train at once and chop it into millions of tiny segments, each one a current element i dl, like a single bogie. every bogie throws out its own little patch of field, wrapping around itself in circles. the total field anywhere is just the vector sum of every bogie's contribution, add up the swirls, not the numbers."
        },
        {
          "t": "p",
          "html": "Two intuitions are worth locking in before any formula. First, <b>the field circles the wire, it does not point along it.</b> Grab the wire with your right hand, thumb along the current, and your curled fingers trace the direction the field loops around it. This right-hand grip rule is the single most useful picture in the chapter, and it is the only direction rule this topic needs. Second, <b>each element's contribution depends on the angle.</b> A current element contributes nothing straight ahead of itself, along its own length, and maximum to the side, a sin θ behaviour that is why a charge moving directly toward a point makes no field along its own line of motion. One more property worth knowing outright: magnetic field lines are always closed loops. Unlike electric field lines, which start on positive charges and end on negative ones, magnetic field lines never begin or end anywhere, because isolated magnetic poles do not exist. You cannot have a lone north the way you can have a lone positive charge; every field line that leaves a region threading a current loop must come back around."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.1 · THE RIGHT-HAND GRIP RULE",
          "chips": ["current out of the page, field circling anticlockwise"],
          "captions": [
            "Curl the fingers of your right hand the way the field circulates and your thumb gives the current's direction, or run it the other way: point the thumb along I and the curled fingers give B. With the current coming out of the page at the centre, the field lines are concentric circles that circulate anticlockwise as seen here, exactly the tangent arrows marked on the middle circle. Reverse the current and every arrow reverses with it; nothing else about the picture changes."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-3, 3], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 0.9 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.6 },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.2 }
              ],
              "marks": [{ "x": 0, "y": 0, "glyph": "outof", "tone": "amber", "label": "I" }],
              "arrows": [
                { "from": [0.4, 1.6], "to": [-0.4, 1.6], "tone": "ink", "label": "B", "at": "below" },
                { "from": [1.6, -0.4], "to": [1.6, 0.4], "tone": "ink" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Force on a moving charge, the defining relation for B",
          "html": "<i>F</i> = <i>qv</i> × <i>B</i>, with magnitude <i>F</i> = <i>qvB</i> sin θ, where θ is the angle between <i>v</i> and <i>B</i>. The SI unit of <i>B</i> is the tesla (T), where 1 T = 1 N A<sup>-1</sup> m<sup>-1</sup>; a common non-SI unit is the gauss (G), with 1 T = 10<sup>4</sup> G. Earth's surface field is roughly 0.3 to 0.6 gauss, a useful anchor for whether an answer is a sane size. Dimensional formula of <i>B</i>: M T<sup>-2</sup> A<sup>-1</sup>."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE BIOT-SAVART LAW",
          "tag": "the field a current element throws out",
          "main": "<i>dB</i> = (μ<sub>0</sub>/4π) <i>I dl</i> × <i>r̂</i> / <i>r</i><sup>2</sup><br><i>dB</i> = (μ<sub>0</sub>/4π) <i>I dl</i> sin θ / <i>r</i><sup>2</sup>",
          "legend": [
            "<i>I dl</i> is the current element, current I in A times a tiny length dl along the wire, in the direction of the current",
            "<i>r</i> is the distance from the element to the field point, in m, and <i>r̂</i> the unit vector from the element toward that point",
            "θ is the angle between <i>dl</i> and <i>r</i>: the element contributes nothing when θ = 0 (straight ahead of itself) and maximum when θ = 90 degrees",
            "μ<sub>0</sub> = 4π × 10<sup>-7</sup> T m/A is the permeability of free space, dimensional formula M L T<sup>-2</sup> A<sup>-2</sup>"
          ],
          "note": "The field due to a single moving point charge follows by the same substitution that turns a current into moving charge: replace I dl by qv, giving B = (μ0/4π) qv × r̂/r². An isolated current element is a mathematical fiction; only the integrated field of a complete circuit is real and measurable."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "The Biot-Savart law as used here describes <b>magnetostatics</b>, steady currents constant in time; time-varying currents bring in extra induced effects met in a later chapter. It assumes a <b>non-magnetic medium</b>, vacuum or air, so μ<sub>0</sub> applies directly; inside iron or another magnetic material μ<sub>0</sub> must be replaced by that medium's own permeability. And it assumes <b>non-relativistic speeds</b>, v much less than c, for the point-charge version built from qv."
        },
        {
          "t": "def",
          "term": "Gauss's law for magnetism: field lines never end",
          "html": "∮ <i>B</i> · <i>dA</i> = 0 over any closed surface. Unlike electric field lines, which start on positive charges and end on negative ones, magnetic field lines never begin or end anywhere: they thread through a current loop and close back around it. The physical reason is that isolated magnetic poles do not exist, there is no lone north the way there is a lone positive charge, and the concentric circles in Figure 4.1 are already an example, closed loops with no start and no end."
        },
        {
          "t": "think",
          "html": "an electric field radiates outward from a charge like spokes from a hub, and it will happily start or stop at a charge. a magnetic field never does either: it only ever circles. that single difference in shape is the entire content of the two gauss's laws, one has a source term on the right and the other is flatly zero, and it is worth carrying as a picture rather than a memorised equation."
        },
        {
          "t": "defgrid",
          "title": "Standard results from integrating the law",
          "tag": "memorise these outright, never re-derive them under time pressure",
          "rows": [
            { "k": "Infinite straight wire, distance <i>a</i>", "v": "<i>B</i> = μ<sub>0</sub><i>I</i> / 2π<i>a</i>" },
            { "k": "Finite straight wire, angles θ<sub>1</sub>, θ<sub>2</sub> at the foot of the perpendicular", "v": "<i>B</i> = (μ<sub>0</sub><i>I</i> / 4π<i>a</i>)(sin θ<sub>1</sub> + sin θ<sub>2</sub>)" },
            { "k": "Centre of a circular loop, radius <i>R</i>", "v": "<i>B</i> = μ<sub>0</sub><i>I</i> / 2<i>R</i>, times <i>N</i> for <i>N</i> closely-wound turns" },
            { "k": "Axis of a circular loop, distance <i>x</i> from centre", "v": "<i>B</i> = μ<sub>0</sub><i>IR</i><sup>2</sup> / 2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>" },
            { "k": "Arc subtending angle φ (radians) at its centre", "v": "<i>B</i> = μ<sub>0</sub><i>I</i>φ / 4π<i>R</i>, a straight fraction φ/2π of the full-loop centre field" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · MAGNETIC FIELD ON THE AXIS OF A CIRCULAR LOOP",
          "steps": [
            {
              "eq": "<i>r</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>), and θ = 90 degrees between <i>dl</i> and <i>r</i>",
              "why": "Place the loop of radius R in the y-z plane, centre O, with the x-axis as its axis. A point P on the axis sits a distance x from O. Take a small element dl on the loop: it lies in the y-z plane while r points from the element toward P, so dl is perpendicular to r everywhere on the loop, and sin θ = 1 for every single element."
            },
            {
              "eq": "<i>dB</i> = (μ<sub>0</sub>/4π) <i>I dl</i> / (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)",
              "why": "Substitute r into the Biot-Savart law directly, with sin θ = 1 already established."
            },
            {
              "eq": "<i>dB<sub>x</sub></i> = <i>dB</i> cos α, with cos α = <i>R</i> / √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)",
              "why": "dB itself is perpendicular to r, so it splits into an axial part dB cos α along the axis and a transverse part dB sin α perpendicular to it, where α is the angle at P between the axis and r. For the diametrically opposite element on the loop, the transverse parts point in exactly opposite directions and cancel completely by symmetry; only the axial parts survive the sum. This cancellation is the heart of the whole derivation."
            },
            {
              "eq": "<i>B</i> = ∮ <i>dB</i> cos α = (μ<sub>0</sub><i>I</i> / 4π)(<i>R</i> / (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>) ∮ <i>dl</i>",
              "why": "Everything except dl is the same for every element on the loop, so it comes out of the integral untouched, leaving only the circumference to sum."
            },
            {
              "eq": "<i>B</i> = μ<sub>0</sub><i>IR</i><sup>2</sup> / 2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>",
              "why": "The remaining integral is just the circumference, ∮dl = 2πR. Multiply through and the 2π cancels against the 4π, leaving a clean 2 in the denominator. Direction follows the right-hand grip rule, along the axis."
            },
            {
              "eq": "<i>B</i><sub>centre</sub> = μ<sub>0</sub><i>I</i> / 2<i>R</i>, at <i>x</i> = 0",
              "why": "The special case worth memorising on its own: set x = 0 and the (x² + R²)^(3/2) collapses to R³, cancelling one power of R against the numerator's R²."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.2 · THE AXIAL FIELD, ELEMENT BY ELEMENT",
          "chips": ["one element's field, split into axial and transverse parts"],
          "captions": [
            "The loop drawn edge-on, its true axis (the x-axis) running horizontally through centre O to the field point P. The element I dl sits at the top of the loop; r is its distance to P, and dl is perpendicular to r everywhere on the loop, which is why sin θ = 1 for every element without exception. At P, dB splits into an axial component along the axis and a transverse one perpendicular to it. Walk to the diametrically opposite point on the loop and its transverse component points the other way: sum the whole loop and only the axial parts survive."
            ],
          "frames": [
            {
              "x": [-2.2, 6.2], "y": [-2.6, 3], "axes": "none",
              "curves": [{ "c": "ellipse", "cx": 0, "cy": 0.2, "a": 1.0, "b": 2.2 }],
              "segments": [
                { "from": [-1.2, 0.2], "to": [5.4, 0.2], "soft": true },
                { "from": [0, 2.4], "to": [5, 0.2], "label": "r", "at": "mid" }
              ],
              "arcs": [{ "at": [5, 0.2], "r": 0.7, "from": 156, "to": 180, "label": "α" }],
              "points": [
                { "x": -1.2, "y": 0.2, "label": "O", "at": "sw" },
                { "x": 5, "y": 0.2, "label": "P", "at": "sw" },
                { "x": 0, "y": 2.4, "label": "I dl", "at": "nw" }
              ],
              "arrows": [
                { "from": [5, 0.2], "to": [5.9, 0.2], "tone": "amber", "label": "dB cos α", "at": "below" },
                { "from": [5, 0.2], "to": [5, 1.1], "tone": "amber", "label": "dB sin α", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "proc",
          "title": "The finite wire, and the infinite-wire limit it hides",
          "steps": [
            "<b>Set up the geometry once.</b> Let P sit at perpendicular distance a from a straight wire carrying current I, and let θ<sub>1</sub>, θ<sub>2</sub> be the angles the two ends of the wire make at the foot of the perpendicular, measured on either side.",
            "<b>Integrate the same way the loop did.</b> An element at angular position θ contributes dB = (μ<sub>0</sub>I / 4πa) cos θ dθ once the geometry is substituted in; integrating from -θ<sub>1</sub> to θ<sub>2</sub> gives the boxed finite-wire result above.",
            "<b>Let the wire run away to infinity.</b> Both ends recede until θ<sub>1</sub> = θ<sub>2</sub> = 90 degrees, so sin θ<sub>1</sub> + sin θ<sub>2</sub> collapses to exactly 2, and B = μ<sub>0</sub>I / 2πa falls straight out.",
            "<b>Cross-check against Topic 02 before you trust the number.</b> Ampere's circuital law gets this same infinite-wire result from a completely different argument, one line of symmetry rather than a page of integration. Two independent methods landing on the identical formula is the strongest confirmation either method can offer."
          ]
        },
        {
          "t": "think",
          "html": "gauss to tesla is a factor of ten thousand, and every field this chapter computes lands somewhere between a few microtesla and a few tens of millitesla. earth's own field is a few tenths of a gauss, about 5 times ten to the minus five tesla, and a strong laboratory electromagnet reaches about one tesla. if an answer to a hand-held coil problem ever comes out in whole teslas, a micro or a milli has gone missing somewhere upstream, not the physics."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.3 · THE FINITE WIRE'S TWO ANGLES",
          "chips": ["perpendicular distance a, angles θ1 and θ2"],
          "captions": [
            "A straight wire carrying I, with P at perpendicular distance a below its midline. The two lines from P to the wire's ends make angles θ1 and θ2 with the perpendicular; both angles open on the SAME side of that perpendicular whenever P sits opposite the wire's middle. Let both ends run away and both angles close in on 90 degrees, which is exactly the infinite-wire limit worked out on the left."
          ],
          "frames": [
            {
              "x": [-4.5, 4.5], "y": [-3, 2.2], "axes": "none",
              "segments": [
                { "from": [-4, 1.2], "to": [4, 1.2], "soft": false },
                { "from": [0, 1.2], "to": [0, -2], "dash": true, "soft": true, "label": "a", "at": "mid" },
                { "from": [0, -2], "to": [-3.6, 1.2] },
                { "from": [0, -2], "to": [3.2, 1.2] }
              ],
              "arcs": [
                { "at": [0, -2], "r": 0.8, "from": 90, "to": 132, "label": "θ1" },
                { "at": [0, -2], "r": 1.1, "from": 40, "to": 90, "label": "θ2" }
              ],
              "points": [
                { "x": 0, "y": -2, "label": "P", "at": "sw" },
                { "x": -3.6, "y": 1.2, "label": "", "open": true },
                { "x": 3.2, "y": 1.2, "label": "", "open": true }
              ],
              "arrows": [{ "from": [-4, 1.2], "to": [4, 1.2], "tone": "amber", "head": "end", "label": "I", "at": "above" }]
            }
          ]
        },
        {
          "t": "p",
          "html": "Every worked problem below is one of three families: a full loop or a fraction of one (scale by N turns or by the arc's share of a circle), a straight wire finite or infinite (read theta1, theta2 off the geometry, or let them run to 90 degrees), or two separate sources whose fields must be combined as vectors, never as scalars. Spot which family a problem belongs to before reaching for a formula, and the four examples that follow will look far more alike than different."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A closely-wound circular coil of 250 turns has radius 8.0 cm and carries a steady current of 3.0 A. Find the field at the coil's centre.",
          "steps": [
            "Given N = 250, R = 8.0 cm = 0.080 m, I = 3.0 A.",
            "Formula: B = Nμ0I / 2R.",
            "B = (250)(4π × 10<sup>-7</sup>)(3.0) / (2 × 0.080) = 9.42 × 10<sup>-4</sup> / 0.16."
          ],
          "ans": "B = 5.9 × 10<sup>-3</sup> T = 5.9 mT, directed along the coil's axis by the right-hand grip rule."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A wire is bent into an arc subtending 240 degrees at its centre, radius 10 cm, carrying 6.0 A. The straight leads to the supply run along radial lines through the centre. Find the field at the centre.",
          "steps": [
            "The trap: reaching for the full-circle formula μ0I/2R, or wasting time on the straight leads. The leads point straight through the centre, so dl is parallel to r for them and sin θ = 0: they contribute nothing.",
            "For the arc, scale the full-loop field by the fraction of a circle it covers: B = (μ0I/2R) × (240/360) = (μ0I/2R) × (2/3).",
            "μ0I/2R = (4π × 10<sup>-7</sup>)(6.0) / 0.20 = 3.77 × 10<sup>-5</sup> T. Times 2/3:"
          ],
          "ans": "B is about 2.5 × 10<sup>-5</sup> T = 25 microtesla."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, TWO CONCEPTS",
          "q": "An infinite straight wire carries I1 = 10 A in the plane of a circular loop, at perpendicular distance d = 4.0 cm from the loop's centre O. The loop has radius R = 4.0 cm and carries I2 = 5.0 A. At O the wire's field happens to be perpendicular to the loop's own axial field. Find the net field at O.",
          "steps": [
            "Concept 1, the wire's field at O: B1 = μ0I1 / 2πd = (4π × 10<sup>-7</sup>)(10) / (2π × 0.040) = 5.0 × 10<sup>-5</sup> T.",
            "Concept 2, the loop's own centre field: B2 = μ0I2 / 2R = (4π × 10<sup>-7</sup>)(5.0) / (2 × 0.040) = 7.85 × 10<sup>-5</sup> T.",
            "The two are genuinely perpendicular vectors, so combine by Pythagoras, never by simple addition: B = √(B1² + B2²)."
          ],
          "ans": "B is about 93 microtesla."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A wire of fixed length L carries current I. Bent first into a single circular loop, then into a square loop, compare the field at each centre.",
          "steps": [
            "Circle: circumference 2πR = L, so R = L/2π, and B_circle = μ0I/2R = πμ0I/L.",
            "Square: side s = L/4, and the centre sits at perpendicular distance a = s/2 from each side. The half-length subtends tan θ = (s/2)/a = 1, so θ = 45 degrees and sin θ1 + sin θ2 = 2/√2 = √2.",
            "One side contributes μ0I√2 / 4πa; all four sides reinforce, and with a = s/2 and s = L/4, the total is B_square = 8√2 μ0I / πL.",
            "Ratio: B_square / B_circle = 8√2/π² is about 1.15."
          ],
          "ans": "The square is stronger at its centre by about 15 percent, for the same wire and current: bending the wire into a square brings parts of it closer to the centre than a circle's uniform radius does."
        },
        {
          "t": "mcq",
          "q": "By the Biot-Savart law, the field dB due to a current element I dl at a point whose position relative to the element is r (angle θ between them) is:",
          "opts": [
            { "label": "Directed along dl, proportional to 1/r²", "nudge": "The field never points along the current element itself; that direction is exactly where the element's contribution is zero." },
            { "label": "Perpendicular to the plane of dl and r, proportional to sin θ / r²", "nudge": null },
            { "label": "Directed along r, proportional to 1/r³", "nudge": "This confuses the field's direction with the radial direction, and borrows the 1/r³ that belongs only to the version written with the full vector r rather than the unit vector r̂." },
            { "label": "Perpendicular to dl, proportional to 1/r", "nudge": "Right about the perpendicularity, wrong about the distance dependence: a half-remembered rule with the wrong power of r attached." }
          ],
          "correct": 1,
          "solution": "The cross product dl × r̂ is, by definition, perpendicular to the plane containing both vectors, with magnitude proportional to sin θ, and the law itself carries 1/r² throughout."
        },
        {
          "t": "mcq",
          "q": "A wire is bent into three-quarters of a circle of radius R, carrying current I. The field at the centre is:",
          "opts": [
            { "label": "3μ0I / 8R", "nudge": null },
            { "label": "μ0I / 2R", "nudge": "This is the full circle's field, forgetting that a quarter of the loop is missing." },
            { "label": "3μ0I / 4R", "nudge": "Drops the factor of 2 that belongs in the full-loop formula before scaling by the fraction present." },
            { "label": "μ0I / 8R", "nudge": "This is the field of the MISSING quarter, not the three-quarters that is actually there." }
          ],
          "correct": 0,
          "solution": "Scale the full-loop field by the fraction present: (3/4)(μ0I/2R) = 3μ0I/8R."
        },
        {
          "t": "mcq",
          "q": "On the axis of a circular loop of radius R, the field falls to one-eighth of its centre value at a distance:",
          "opts": [
            { "label": "x = R", "nudge": "This is the special axial point this very topic's own practice set uses for a different ratio, one-over-two-root-two; pattern-matching the distance from that problem onto this one without rechecking the target fraction is the trap." },
            { "label": "x = √2 R", "nudge": "Comes from mishandling the 3/2 power in R²/(R²+x²)^(3/2) = 1/8, taking too small a root when solving for R² + x²." },
            { "label": "x = √3 R", "nudge": null },
            { "label": "x = 2R", "nudge": "This is the well-known point where the axial field is exactly 1/(5√5) of the centre value, a different standard ratio entirely; recalled from memory and applied here without checking that this question asks for one-eighth, not one-over-five-root-five." }
          ],
          "correct": 2,
          "solution": "B_axis / B_centre = R³ / (R² + x²)^(3/2) = 1/8, so (R² + x²)^(3/2) = 8R³, R² + x² = 4R² (raising both sides to the 2/3 power), and x = √3 R."
        },
        {
          "t": "mcq",
          "q": "A circular coil produces field B0 at its centre. If the number of turns is doubled and the radius is halved, with the same current, the new centre field is:",
          "opts": [
            { "label": "B0", "nudge": "Wrongly assumes the two changes cancel each other out." },
            { "label": "2B0", "nudge": "Accounts for only one of the two changes, usually just the doubled turns." },
            { "label": "4B0", "nudge": null },
            { "label": "8B0", "nudge": "Over-counts, treating the radius as though it entered with an inverse-square dependence rather than a simple inverse one." }
          ],
          "correct": 2,
          "solution": "B = Nμ0I/2R: doubling N multiplies the field by 2, and halving R multiplies it by another 2, for a total factor of 4."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A single circular loop of radius 5.0 cm carries 2.0 A. Find the field at its centre.", "a": "B = μ0I/2R is about 2.5 × 10<sup>-5</sup> T, 25 microtesla." },
            { "q": "[NEET] A wire is bent into a semicircle of radius 10 cm carrying 4.0 A. Find the field at the centre (the straight leads pass through the centre and contribute nothing).", "a": "Half the full-loop field: about 1.3 × 10<sup>-5</sup> T, 13 microtesla." },
            { "q": "[JEE Main] For a loop of radius R carrying I, at what axial distance is the field equal to μ0I / 4√2 R? Find this field for R = 6.0 cm, I = 3.0 A.", "a": "x = R, since R³/(R²+x²)^(3/2) at x = R gives exactly 1/(2√2). B = μ0I/(4√2 R) works out to about 1.11 × 10<sup>-5</sup> T, 11 microtesla." },
            { "q": "[JEE Main] A wire carrying 5.0 A is bent into an equilateral triangle of side 12 cm. Find the field at the centroid.", "a": "B = 9μ0I / 2πa is about 7.5 × 10<sup>-5</sup> T, 75 microtesla." },
            { "q": "[JEE Advanced] The same length of wire carrying I is bent into a regular hexagon of side a. Show the centre field is B = √3 μ0I / πa, and say what happens as the number of sides grows.", "a": "Summing the finite-wire contribution of all six sides gives exactly √3 μ0I/πa. As the side count grows the polygon approaches a circle and the centre field tends smoothly to the circular-loop value μ0I/2R." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Treating B as a scalar when adding contributions from different wires or loops. Two equal-magnitude fields can add to anything from zero to double, depending only on direction; always add as vectors.",
            "Including a straight lead that runs collinear with the field point. If dl lies along the line through the point of interest, sin θ = 0 and it contributes nothing at all, wasted effort computing it.",
            "Using the wrong arc fraction. An arc of angle φ carries φ/2π of the full-loop field, not φ/360 unless φ is already read in degrees over 360 consistently.",
            "Forgetting the turns N. A closely-wound coil of N turns multiplies the single-loop field by N; a bare loop does not."
          ]
        },
        {
          "t": "protip",
          "html": "never integrate an arc or a polygon from scratch in an exam. memorise the full-loop centre field mu0 I / 2R and the finite-wire formula, then scale and superpose: an arc is a fraction of a loop, a polygon is a sum of finite wires. that turns a two-page integration into a two-line calculation, every time."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "F = qv × B", "note": "the defining relation for B; force is always perpendicular to v" },
            { "f": "dB = (μ0/4π) I dl × r̂ / r²", "note": "the Biot-Savart law; sin θ dependence, no field straight ahead of an element" },
            { "f": "B = μ0I / 2πa (infinite wire), μ0I / 2R (loop centre)", "note": "the two results worth memorising outright" },
            { "f": "B = μ0IR² / 2(x² + R²)^(3/2)", "note": "on-axis field; collapses to μ0I/2R at x = 0" }
          ],
          "aids": ["add the swirls, not the numbers", "an arc is a fraction, a polygon is a sum", "grip the wire, thumb along I, fingers give B"]
        }
      ]
    },
    {
      "n": "02",
      "title": "Ampere's Circuital Law and Its Applications",
      "chip": "02 AMPERE'S LAW",
      "kalam": "only what threads the loop counts",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 01 built magnetic fields the hard way: chop the wire into current elements, compute each one's dB, and integrate. That always works, but the integrals can be brutal. <b>Ampere's circuital law is the shortcut</b>, and it plays exactly the role Gauss's law plays in electrostatics. Here is the whole idea in one sentence: walk around any closed loop, keeping a running total of B along the direction you are walking, and that total depends only on how much current pierces through the loop, nothing else. That running total is the line integral ∮ <i>B</i> · <i>dl</i>, and the law says it equals μ<sub>0</sub> times the net current threading the loop."
        },
        {
          "t": "think",
          "html": "picture a parikrama, a devotee walking a full circle around a temple. at every step they note how strongly the wind pushes them along their path, and add it all up. ampere's law says that total tailwind around the loop tells you exactly how much current is enclosed, whatever shape your walking path took, and whatever currents flow outside it. an outside current bends the field at every single point on your path, but its pushes-along-the-path cancel out perfectly over the full circuit, contributing exactly zero to the total."
        },
        {
          "t": "p",
          "html": "Two intuitions worth locking in. First, <b>only threading current counts on the right-hand side.</b> A nearby external wire absolutely changes B at points on your loop, but it adds nothing at all to the closed line integral, and this is the single most misused point in the whole topic. Second, <b>the sign of the enclosed current follows a right-hand rule.</b> Curl the fingers of your right hand along the direction you traverse the loop and your thumb points along the positive current direction; currents along the thumb count as plus, opposite ones as minus. And a crucial catch: the law is valid for absolutely any closed loop, but it only lets you SOLVE for B when the geometry is symmetric enough that B pulls out of the integral, constant in magnitude and either parallel or perpendicular to your path everywhere. A single finite loop's centre field, from Topic 01, has no such Amperian loop; the law stays true there but is useless for solving. Reserve it for the high-symmetry cases: the infinite straight wire, the long cylinder, the ideal solenoid, and the toroid."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.4 · THE AMPERIAN LOOP DOES NOT CARE ABOUT ITS SHAPE",
          "chips": ["only I1 and I2 thread the loop; I3 does not"],
          "captions": [
            "A wiggly, arbitrarily shaped closed loop. Current I1 pierces up through it (marked with a dot, current toward the viewer) and I2 pierces down through it (marked with a cross, away from the viewer): both are threading currents and both count, with opposite sign, in Ienc. Current I3 runs entirely outside the loop. It changes B at every point along the wiggly path, yet its contribution to the closed line integral is exactly zero: only what actually threads the loop ever reaches the right-hand side of the law."
          ],
          "frames": [
            {
              "x": [-4, 4.4], "y": [-2.6, 2.6], "axes": "none",
              "polys": [
                { "pts": [[-2, 0], [-1.6, 1.3], [-0.5, 1.8], [0.6, 1.5], [1.7, 1.9], [2.3, 0.7], [2.0, -1.0], [0.8, -1.7], [-0.6, -1.5], [-1.8, -0.8]], "close": true, "smooth": true, "dash": true, "tone": "soft" }
              ],
              "marks": [
                { "x": -0.3, "y": 0.5, "glyph": "outof", "tone": "amber", "label": "I1" },
                { "x": 0.8, "y": -0.3, "glyph": "into", "tone": "amber", "label": "I2" },
                { "x": 3.5, "y": 0.5, "glyph": "outof", "tone": "ink", "label": "I3" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · AMPERE'S CIRCUITAL LAW",
          "tag": "true for every loop, solvable only for the symmetric few",
          "main": "∮ <i>B</i> · <i>dl</i> = μ<sub>0</sub> <i>I</i><sub>enc</sub>",
          "legend": [
            "the left side is the line integral of B around any closed Amperian loop, unit T m",
            "<i>I</i><sub>enc</sub> is the net current threading the loop, in A, signed by the right-hand rule against your chosen direction of traversal",
            "μ<sub>0</sub> = 4π × 10<sup>-7</sup> T m/A, dimensional formula M L T<sup>-2</sup> A<sup>-2</sup>"
          ],
          "note": "Valid for absolutely any closed loop. Only solvable for B when symmetry lets B come out of the integral constant and either parallel or perpendicular to the path on every segment: a circle for wires, cylinders and toroids, a rectangle with one side along the axis for a solenoid."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Steady currents only, the same magnetostatics restriction as Topic 01; a time-varying field needs Maxwell's displacement-current correction, met in a later chapter. Symmetry is required for EVALUATION, not for validity: without it the law still holds exactly, it simply will not hand you B directly. And the idealisations behind every boxed formula are worth naming outright, an infinitely long straight wire or solenoid so end effects vanish, closely wound turns, and a non-magnetic medium so μ<sub>0</sub> applies unmodified."
        },
        {
          "t": "think",
          "html": "ampere's law is doing for magnetism exactly what gauss's law does for electrostatics: trade a hard integral for a symmetry argument. gauss's law picks a surface where the flux is easy; ampere's law picks a path where the circulation is easy. neither law is more true than the other, they are the same trick, wearing a different vector operation."
        },
        {
          "t": "defgrid",
          "title": "Standard results obtained from the law",
          "rows": [
            { "k": "Infinite straight wire, distance r", "v": "<i>B</i> = μ<sub>0</sub><i>I</i> / 2π<i>r</i>, matching the Biot-Savart infinite-wire limit exactly" },
            { "k": "Thick wire radius R, uniform current, inside (r less than R)", "v": "<i>B</i> = μ<sub>0</sub><i>Ir</i> / 2π<i>R</i><sup>2</sup>, proportional to r" },
            { "k": "Thick wire, outside (r greater than R)", "v": "<i>B</i> = μ<sub>0</sub><i>I</i> / 2π<i>r</i>, proportional to 1/r; the two meet at r = R, the peak" },
            { "k": "Ideal solenoid, n turns per unit length", "v": "<i>B</i> = μ<sub>0</sub><i>nI</i> inside, uniform; zero outside" },
            { "k": "Toroid, N total turns, mean radius r", "v": "<i>B</i> = μ<sub>0</sub><i>NI</i> / 2π<i>r</i> inside the windings; zero in the hole and outside" }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE SOLENOID, B = μ0nI",
          "steps": [
            {
              "eq": "Choose a rectangular loop abcd, with ab (length L) inside the solenoid parallel to the axis, cd outside, and bc, da crossing the wall",
              "why": "A long, ideal solenoid has field uniform and axial inside, and effectively zero outside. This rectangle is chosen precisely so every one of its four sides is easy to evaluate."
            },
            {
              "eq": "Along ab: B is uniform and parallel to the path, contributing BL. Along bc and da: inside, B is perpendicular to dl; outside, B = 0. Both contribute 0. Along cd: B = 0 there. Contributes 0.",
              "why": "Three of the four sides vanish by construction; only ab survives, and the whole line integral collapses to BL. This is exactly why the rectangle was chosen this way."
            },
            {
              "eq": "<i>I</i><sub>enc</sub> = <i>nLI</i>",
              "why": "The rectangle encloses nL turns, each carrying current I."
            },
            {
              "eq": "<i>BL</i> = μ<sub>0</sub>(<i>nLI</i>) ⇒ <i>B</i> = μ<sub>0</sub><i>nI</i>",
              "why": "Apply the law directly, and the L cancels. Since side ab could sit anywhere inside the cross-section with the same result, the field is uniform across the whole interior, not just along one line."
            },
            {
              "eq": "<i>B</i><sub>end</sub> is about μ<sub>0</sub><i>nI</i> / 2, right at an open end",
              "why": "An end of the solenoid sees windings on only one side, roughly halving the field there. This is why real solenoids are built long compared to their diameter, to keep the useful uniform region as large as possible."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.5 · THE SOLENOID'S AMPERIAN RECTANGLE",
          "chips": ["side ab inside, cd outside, bc and da crossing the wall"],
          "captions": [
            "A solenoid in cross-section: turns shown as dots (current toward the viewer) along the top row and crosses (away from the viewer) along the bottom row, with a uniform field pointing along the axis inside. The Amperian rectangle abcd: ab sits inside parallel to the axis, cd sits outside where B is zero, and bc, da cross the wall where B is perpendicular to the path. Only ab contributes to the line integral, and it can sit anywhere inside the cross-section without changing the answer, which is exactly what proves the interior field is uniform."
          ],
          "frames": [
            {
              "x": [-4.5, 4.5], "y": [-2.2, 2.2], "axes": "none",
              "segments": [
                { "from": [-4, 1.3], "to": [4, 1.3], "soft": true },
                { "from": [-4, -1.3], "to": [4, -1.3], "soft": true },
                { "from": [-2.8, 0.4], "to": [-1.2, 0.4] },
                { "from": [-1.2, 0.4], "to": [-1.2, 1.7], "dash": true },
                { "from": [-1.2, 1.7], "to": [-2.8, 1.7] },
                { "from": [-2.8, 1.7], "to": [-2.8, 0.4], "dash": true }
              ],
              "marks": [
                { "x": -3.4, "y": 1.3, "glyph": "outof", "tone": "ink" },
                { "x": -2.0, "y": 1.3, "glyph": "outof", "tone": "ink" },
                { "x": -0.6, "y": 1.3, "glyph": "outof", "tone": "ink" },
                { "x": 0.8, "y": 1.3, "glyph": "outof", "tone": "ink" },
                { "x": 2.2, "y": 1.3, "glyph": "outof", "tone": "ink" },
                { "x": -3.4, "y": -1.3, "glyph": "into", "tone": "ink" },
                { "x": -2.0, "y": -1.3, "glyph": "into", "tone": "ink" },
                { "x": -0.6, "y": -1.3, "glyph": "into", "tone": "ink" },
                { "x": 0.8, "y": -1.3, "glyph": "into", "tone": "ink" },
                { "x": 2.2, "y": -1.3, "glyph": "into", "tone": "ink" }
              ],
              "points": [
                { "x": -2.8, "y": 0.4, "label": "a", "at": "sw" },
                { "x": -1.2, "y": 0.4, "label": "b", "at": "se" },
                { "x": -1.2, "y": 1.7, "label": "c", "at": "ne" },
                { "x": -2.8, "y": 1.7, "label": "d", "at": "nw" }
              ],
              "arrows": [
                { "from": [-2.8, -0.9], "to": [-1.2, -0.9], "tone": "amber" },
                { "from": [-2.8, -0.5], "to": [-1.2, -0.5], "tone": "amber", "label": "B", "at": "above" },
                { "from": [-2.8, -0.1], "to": [-1.2, -0.1], "tone": "amber" }
              ]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE TOROID, B = μ0NI / 2πr",
          "steps": [
            {
              "eq": "By symmetry, B is tangential to any concentric circle and constant in magnitude on it: ∮ <i>B</i> · <i>dl</i> = <i>B</i>(2π<i>r</i>) on a circle of radius r",
              "why": "A toroid is a solenoid bent into a closed ring, N turns wound around a doughnut, mean radius r. The circular symmetry lets B come straight out of the integral, exactly the condition Ampere's law needs to be solvable."
            },
            {
              "eq": "Loop in the central hole: <i>I</i><sub>enc</sub> = 0 ⇒ <i>B</i> = 0",
              "why": "No turn's current threads a loop drawn entirely inside the empty hole."
            },
            {
              "eq": "Loop outside the toroid: <i>I</i><sub>enc</sub> = 0 ⇒ <i>B</i> = 0",
              "why": "Each turn's current pierces the enclosed area once going in and once coming back out, cancelling exactly."
            },
            {
              "eq": "Loop inside the windings: <i>I</i><sub>enc</sub> = <i>NI</i>, so <i>B</i>(2π<i>r</i>) = μ<sub>0</sub><i>NI</i> ⇒ <i>B</i> = μ<sub>0</sub><i>NI</i> / 2π<i>r</i>",
              "why": "This loop threads all N turns. Writing n = N/2πr, turns per unit length along the mean circle, recovers B = μ0nI exactly: a toroid is a wrapped-around solenoid. The field is non-uniform across the cross-section, going as 1/r, and becomes nearly uniform only when the mean radius far exceeds the cross-sectional radius."
            }
          ]
        },
        {
          "t": "think",
          "html": "a toroid is a solenoid that ate its own tail. bend a long solenoid until its two ends meet and every field line that used to leak out an open end now closes on itself inside the ring instead, which is exactly why a toroid, unlike a solenoid, has no fringing field to worry about at all: there is no end left to fringe from."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.6 · THE TOROID'S THREE AMPERIAN CIRCLES",
          "chips": ["hole, windings, outside: zero, μ0NI/2πr, zero"],
          "captions": [
            "A toroid viewed face-on, windings sketched as ticks around the mean circle. Three dashed Amperian circles: loop 1 in the central hole encloses no current and gives B = 0; loop 2 threads every one of the N windings and gives the boxed result; loop 3 outside the toroid encloses each turn's current twice, once each way, so it also gives B = 0. Field lives only in the ring between loop 1 and loop 3."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-3.4, 3.4], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.0, "dash": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.0, "dash": true },
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.8, "dash": true }
              ],
              "marks": [
                { "x": 2.4, "y": 0, "glyph": "tick", "tone": "soft" },
                { "x": 1.697, "y": 1.697, "glyph": "tick", "tone": "soft" },
                { "x": 0, "y": 2.4, "glyph": "tick", "tone": "soft" },
                { "x": -1.697, "y": 1.697, "glyph": "tick", "tone": "soft" },
                { "x": -2.4, "y": 0, "glyph": "tick", "tone": "soft" },
                { "x": -1.697, "y": -1.697, "glyph": "tick", "tone": "soft" },
                { "x": 0, "y": -2.4, "glyph": "tick", "tone": "soft" },
                { "x": 1.697, "y": -1.697, "glyph": "tick", "tone": "soft" }
              ],
              "points": [
                { "x": -0.174, "y": 0.985, "label": "loop 1", "at": "ne" },
                { "x": -0.347, "y": 1.970, "label": "loop 2", "at": "ne" },
                { "x": -0.486, "y": 2.758, "label": "loop 3", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "p",
          "html": "Two families cover every problem below: wire-type geometries, where a circular Amperian loop around the wire's own axis does the work, and coil-type geometries, where the rectangle-through-the-wall trick from the solenoid derivation applies. Spot which family first; the loop shape almost chooses itself once you have."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A solenoid 50 cm long has 1500 turns and carries a current of 4.0 A. Find the field at its centre.",
          "steps": [
            "n = N/L = 1500/0.50 = 3000 turns per metre.",
            "B = μ0nI = (4π × 10<sup>-7</sup>)(3000)(4.0)."
          ],
          "ans": "B is about 1.5 × 10<sup>-2</sup> T = 15 mT, directed along the axis."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A long, thick cylindrical wire of radius R carries current I spread uniformly over its cross-section. Compare the field at r = R/2 (inside) with the field at r = 2R (outside).",
          "steps": [
            "The trap: assuming inside is always weaker than the surface, or wrongly using μ0I/2πr inside the wire.",
            "Inside, field is proportional to r: B_in = μ0I(R/2) / 2πR² = μ0I / 4πR.",
            "Outside, field is proportional to 1/r: B_out = μ0I / 2π(2R) = μ0I / 4πR."
          ],
          "ans": "B_in / B_out = 1: they are exactly equal. A point halfway inside and a point at twice the radius feel identical fields, and recognising this instantly beats grinding through both numbers."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, TWO CONCEPTS",
          "q": "A coaxial cable has a solid inner conductor of radius a = 1.0 mm carrying I = 6.0 A out of the page, and a thin outer shell of radius b = 4.0 mm carrying 6.0 A back into the page. Find B (i) at r = 2.0 mm, between the conductors, and (ii) at r = 6.0 mm, outside the cable.",
          "steps": [
            "Concept 1, enclosed-current accounting: (i) between the conductors, the Amperian circle encloses only the inner conductor, Ienc = +6.0 A. (ii) outside, it encloses both, Ienc = 6.0 - 6.0 = 0.",
            "Concept 2, apply B(2πr) = μ0Ienc: (i) B = μ0(6.0) / 2π(2.0 × 10<sup>-3</sup>) = 6.0 × 10<sup>-4</sup> T.",
            "(ii) B = 0."
          ],
          "ans": "B is about 0.60 mT between the conductors, and exactly zero outside: the coaxial geometry confines the field entirely between the conductors, which is exactly why coaxial cables neither radiate nor pick up interference."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.7 · A CAVITY DRILLED OFF-CENTRE",
          "chips": ["superposing a full cylinder with a negative one"],
          "captions": [
            "A cylindrical conductor of radius R carries uniform current density J out of the page (a sample of the density marked at J). A cavity of radius rho is bored parallel to the axis, its own axis displaced by d from the conductor's axis. At a field point P inside the cavity, r1 is measured from the conductor's axis O and r2 from the cavity's axis O'. Model the drilled body as a full solid cylinder of density +J plus a cavity-sized cylinder of density -J centred at O'; since the field inside each solid cylinder alone is linear in the position vector from ITS OWN axis, the two contributions combine into a field that depends only on the constant vector d, not on where P sits inside the cavity."
          ],
          "frames": [
            {
              "x": [-3.2, 3.2], "y": [-3.2, 3.2], "axes": "none", "aspect": 0.987,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 2.6 },
                { "c": "circle", "cx": 1.0, "cy": 0.3, "r": 0.9, "dash": true }
              ],
              "marks": [
                { "x": -1.5, "y": 1.0, "glyph": "outof", "tone": "amber", "label": "J" },
                { "x": -1.9, "y": -0.6, "glyph": "outof", "tone": "ink" },
                { "x": 0.1, "y": 1.9, "glyph": "outof", "tone": "ink" },
                { "x": -0.5, "y": -1.9, "glyph": "outof", "tone": "ink" },
                { "x": 2.0, "y": -1.1, "glyph": "outof", "tone": "ink" }
              ],
              "segments": [
                { "from": [0, 0], "to": [1.1, 0.5], "label": "r1", "at": "above" },
                { "from": [1.0, 0.3], "to": [1.1, 0.5], "label": "r2", "at": "above" }
              ],
              "arrows": [{ "from": [0, 0], "to": [1.0, 0.3], "tone": "amber", "label": "d", "at": "below" }],
              "points": [
                { "x": 0, "y": 0, "label": "O", "at": "sw" },
                { "x": 1.0, "y": 0.3, "label": "O'", "at": "se" },
                { "x": 1.1, "y": 0.5, "label": "P", "at": "ne" }
              ]
            }
          ]
        },
        {
          "t": "def",
          "term": "Why superposition still works here",
          "html": "Ampere's law is linear in the enclosed current, exactly as the Biot-Savart law is linear in the source current: double every current and B doubles everywhere. That is what licenses treating the drilled conductor as a full cylinder plus a negative one, adding their two fields point by point, the same trick the negative-mass method used for a centre of mass with a hole cut out."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "Continuing the cavity above, show the field everywhere inside it is uniform, and find its magnitude.",
          "steps": [
            "Inside a solid cylinder of density J, Ampere's law gives an azimuthal field B = (μ0/2) J × r, r measured from that cylinder's own axis.",
            "Superpose: at P, B = (μ0/2) J × r1 + (μ0/2)(-J) × r2 = (μ0/2) J × (r1 - r2).",
            "The key geometric fact: r1 - r2 = d, the constant displacement between the two axes, independent of where P sits inside the cavity."
          ],
          "ans": "B_cavity = (μ0/2) J × d, magnitude μ0Jd/2, exactly uniform throughout the cavity: this elegant result falls out only because the single-cylinder field is linear in the position vector."
        },
        {
          "t": "mcq",
          "q": "For a closed Amperian loop, the value of the line integral of B depends on:",
          "opts": [
            { "label": "The shape of the loop", "nudge": "Distort the loop however you like, keeping the same enclosed current, and the integral is unchanged." },
            { "label": "Only the net current threading the loop", "nudge": null },
            { "label": "All currents, including those outside the loop", "nudge": "The classic trap: external currents do alter B at individual points on the loop, but their contributions to the closed integral cancel exactly." },
            { "label": "The magnitude of B at each point on the loop", "nudge": "Confuses the integral's total value with the local field at a point; the integral is a sum over the whole loop, not a single reading." }
          ],
          "correct": 1,
          "solution": "The law fixes the integral as μ0Ienc directly: it cares only about net threading current, nothing else."
        },
        {
          "t": "mcq",
          "q": "Inside an ideal solenoid carrying current I, the magnetic field:",
          "opts": [
            { "label": "Increases with distance from the axis", "nudge": "There is no such radial variation inside an ideal solenoid at all." },
            { "label": "Is maximum at the axis and falls toward the walls", "nudge": "Tempting if you picture a solenoid like a thick current-carrying wire, but the interior field has no radial dependence." },
            { "label": "Is uniform and equals μ0nI everywhere in the cross-section", "nudge": null },
            { "label": "Varies as 1/r", "nudge": "This is the toroid's field, which genuinely does go as 1/r; the solenoid's interior field does not." }
          ],
          "correct": 2,
          "solution": "The rectangular-loop derivation works for any placement of side ab inside the cross-section, which is exactly what proves uniformity."
        },
        {
          "t": "mcq",
          "q": "A thick wire of radius R carries a uniform current. Which statement about B(r) is correct?",
          "opts": [
            { "label": "B rises linearly inside and falls as 1/r outside, peaking at r = R", "nudge": null },
            { "label": "B is constant inside and falls outside", "nudge": "This describes a solenoid's interior, not a current-carrying wire." },
            { "label": "B is zero inside and 1/r outside", "nudge": "Wrongly treats the solid wire like a hollow shell; zero field inside is the hollow-conductor case, not this one." },
            { "label": "B decreases as 1/r both inside and outside", "nudge": "Ignores that the enclosed current itself grows with r inside the wire, which is what drives B up rather than down." }
          ],
          "correct": 0,
          "solution": "Enclosed current is proportional to r² inside, so B is proportional to r; outside, the full current is always enclosed, so B is proportional to 1/r. The two branches meet at the surface, r = R, the maximum."
        },
        {
          "t": "mcq",
          "q": "A toroid has N turns and mean radius r. If both N and r are doubled, current unchanged, the field inside the windings:",
          "opts": [
            { "label": "Is unchanged", "nudge": null },
            { "label": "Doubles", "nudge": "Counts only the change in N and ignores that r also doubled." },
            { "label": "Halves", "nudge": "Counts only the change in r and ignores that N also doubled." },
            { "label": "Quadruples", "nudge": "Wrongly multiplies both changes together as if they reinforced, when in fact they cancel." }
          ],
          "correct": 0,
          "solution": "B = μ0NI/2πr: doubling N multiplies by 2, and doubling r divides by 2, and the two exactly cancel."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A solenoid has 2000 turns per metre and carries 2.5 A. Find the field inside.", "a": "B = μ0nI is about 6.3 × 10<sup>-3</sup> T, 6.3 mT." },
            { "q": "[NEET] A long straight wire carries 8.0 A. Find the field at perpendicular distance 4.0 cm.", "a": "B = μ0I/2πr is about 4.0 × 10<sup>-5</sup> T, 40 microtesla." },
            { "q": "[JEE Main] A toroid of 3000 turns and mean radius 15 cm carries 6.0 A. Find the field within the windings.", "a": "B = μ0NI/2πr is about 2.4 × 10<sup>-2</sup> T, 24 mT." },
            { "q": "[JEE Main] A thick wire of radius 2.0 mm carries 10 A uniformly. Find the field at a point 1.0 mm from the axis.", "a": "B = μ0Ir/2πR² is about 5.0 × 10<sup>-4</sup> T, 0.50 mT." },
            { "q": "[JEE Advanced] A hollow cylindrical conductor, inner radius a, outer radius b, carries I uniformly over the annular cross-section. Derive B at a point a < r < b.", "a": "Only the fraction of the annular area inside radius r is enclosed: B = (μ0I / 2πr) times (r² - a²)/(b² - a²)." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Trying to use Ampere's law without symmetry. The law is always true, but only solvable when a loop exists on which B is constant and everywhere parallel or perpendicular to the path; it cannot hand you a single finite loop's centre field.",
            "Counting external currents in Ienc. Only currents that actually thread the loop appear on the right-hand side, however strongly nearby wires bend the field at individual points.",
            "Mixing up n and N. The solenoid uses n, turns per unit length; the toroid uses total N over 2πr. Plugging total turns straight into μ0nI is a frequent disaster.",
            "Using μ0I/2πr inside a thick wire. Only the fraction r²/R² of the current is enclosed there, so B is proportional to r, not 1/r, until the surface."
          ]
        },
        {
          "t": "protip",
          "html": "choose the amperian loop to match the field's own symmetry: a circle for wires, cylinders and toroids, a rectangle with one side along the axis for a solenoid. the whole skill is picking a loop where B times dl is either B dl (parallel) or exactly zero (perpendicular, or zero field) on every single segment, so the integral collapses to B times a length in one line."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "∮ B · dl = μ0Ienc", "note": "true for any loop, solvable only for the symmetric few" },
            { "f": "B = μ0I / 2πr (infinite wire); μ0nI inside a solenoid", "note": "the two workhorse results" },
            { "f": "thick wire: B ∝ r inside, ∝ 1/r outside", "note": "peaking exactly at the surface, r = R" },
            { "f": "toroid: B = μ0NI / 2πr inside the windings, else zero", "note": "a solenoid bent into a ring" }
          ],
          "aids": ["true for any loop, solvable only for the symmetric few", "thread it or forget it", "n for a solenoid, N over 2 pi r for a toroid"]
        }
      ]
    },
    {
      "n": "03",
      "title": "Force on Charges and Torque on Current Loops",
      "chip": "03 FORCE AND TORQUE",
      "kalam": "a magnetic force steers, it never speeds you up",
      "blocks": [
        {
          "t": "p",
          "html": "This topic looks like a grab-bag: charged particles spiralling, wires pushing on each other, coils twisting inside a galvanometer. Underneath all of it is a single idea. <b>A magnetic field exerts a force on moving charge, F = qv × B, and everything else here is just that one law applied either to free charges or to the charges flowing inside a wire.</b> Hold onto that and the whole landscape organises itself into two halves."
        },
        {
          "t": "p",
          "html": "<b>Part A, free charges: the force that only steers.</b> Because it is a cross product, the magnetic force is always perpendicular to the velocity. A force perpendicular to motion can never speed a particle up or slow it down, it can only bend the path. So a magnetic field does zero work on a charge; speed and kinetic energy stay exactly constant. Fire a charge perpendicular to a uniform field and it traces a perfect circle; fire it at an angle and it traces a helix, the along-field part of its velocity coasting straight through untouched while the across-field part circles."
        },
        {
          "t": "think",
          "html": "swing a stone on a string over your head. the tension always points inward, perpendicular to the stone's motion, and it never speeds the stone up, only forces it to curve. the magnetic force on a charge crossing a field is exactly that string. two machines are built on this: a velocity selector crosses an electric push against a magnetic one so only one speed sails through undeflected, and a cyclotron exploits the remarkable fact that the time for one circle does not depend on speed at all, so a fixed-frequency kick can keep accelerating a particle lap after lap."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.8 · A CHARGE STEERED IN A CIRCLE",
          "chips": ["B into the page, force always toward the centre"],
          "captions": [
            "A uniform field B points into the page (the scattered crosses). A positive charge at the bottom of its path moves right; F = qv × B works out to point straight up, toward the centre, exactly the centripetal force the circular path needs. Move the charge anywhere else on the circle and v and F rotate together, F always chasing the centre, v always tangent to the circle: this is why the speed never changes even as the direction constantly does."
          ],
          "frames": [
            {
              "x": [-2.6, 2.6], "y": [-2.6, 2.6], "axes": "none", "aspect": 0.987,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.8 }],
              "marks": [
                { "x": -1.3, "y": 1.3, "glyph": "into", "tone": "soft" },
                { "x": 1.3, "y": 1.3, "glyph": "into", "tone": "soft" },
                { "x": -1.3, "y": -1.3, "glyph": "into", "tone": "soft" },
                { "x": 0, "y": 1.3, "glyph": "into", "tone": "soft" },
                { "x": 1.9, "y": 1.9, "glyph": "into", "tone": "amber", "label": "B" },
                { "x": 0, "y": -1.8, "glyph": "plus", "tone": "amber" }
              ],
              "arrows": [
                { "from": [0, -1.8], "to": [0.9, -1.8], "tone": "ink", "label": "v", "at": "below" },
                { "from": [0, -1.8], "to": [0, -0.9], "tone": "ink", "label": "F", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CIRCULAR MOTION IN A UNIFORM FIELD",
          "tag": "the period does not know how fast the charge is going",
          "main": "<i>r</i> = <i>mv</i> / <i>qB</i> = <i>p</i> / <i>qB</i><br><i>T</i> = 2π<i>m</i> / <i>qB</i>, <i>f<sub>c</sub></i> = <i>qB</i> / 2π<i>m</i>, ω = <i>qB</i> / <i>m</i>",
          "legend": [
            "<i>m</i> is the particle's mass in kg, <i>q</i> its charge magnitude in C, <i>v</i> its speed in m/s, <i>p</i> = <i>mv</i> its momentum",
            "<i>B</i> is the field magnitude in T, and <i>r</i> the radius of the circular path in m",
            "<i>T</i> is the period in s, <i>f<sub>c</sub></i> the cyclotron frequency in Hz, ω the angular frequency in rad/s"
          ],
          "note": "T, fc and ω contain no v at all: they are independent of speed and radius alike, which is the cyclotron's entire secret. A faster particle simply traces a bigger circle in exactly the same time as a slower one."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE CYCLOTRON CONDITION",
          "steps": [
            {
              "eq": "<i>qvB</i> = <i>mv</i><sup>2</sup> / <i>r</i> ⇒ <i>r</i> = <i>mv</i> / <i>qB</i>",
              "why": "With v perpendicular to B, the force magnitude qvB points perpendicular to v at every instant, exactly a centripetal force. Setting it equal to mv²/r gives the radius directly: faster or heavier particles bend less, into a wider circle."
            },
            {
              "eq": "<i>T</i> = 2π<i>r</i> / <i>v</i> = (2π/<i>v</i>)(<i>mv</i>/<i>qB</i>) = 2π<i>m</i> / <i>qB</i>",
              "why": "The v cancels completely. A fast particle traces a bigger circle but covers it in the same time as a slow one, which is the cyclotron resonance condition: an accelerating voltage tuned to fc = qB/2πm stays in step with the particle on every single lap, however fast it has become."
            },
            {
              "eq": "Two hollow dees, a gap between them, an oscillating voltage across the gap",
              "why": "Inside each dee there is no electric field, so the particle simply coasts in a semicircle. In the gap, the electric field gives it a forward kick, raising its speed and hence its next radius. Because T is the same for every semicircle regardless of speed, the fixed-frequency voltage keeps kicking the particle every single crossing, and it spirals outward, gaining energy lap after lap."
            },
            {
              "eq": "<i>K</i><sub>max</sub> = <i>q</i><sup>2</sup><i>B</i><sup>2</sup><i>R</i><sup>2</sup> / 2<i>m</i>, at the outermost radius <i>R</i>",
              "why": "At the exit radius R, v = qBR/m, so K = (1/2)mv² reduces to this. The practical ceiling: as v approaches c, relativistic mass growth makes T creep upward, the kicks fall out of step, and acceleration stalls, which is why high-energy machines use synchrotrons that vary the field and frequency together instead."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.9 · THE CYCLOTRON'S SPIRAL",
          "chips": ["a kick at every gap crossing, same period every lap"],
          "captions": [
            "Two D-shaped dees face each other across a narrow gap, both immersed in a field B out of the page. The particle spirals outward, gaining a small kick from the oscillating voltage across the gap on every single crossing. Because the semicircle inside each dee always takes the same time no matter how fast the particle has become, the fixed-frequency voltage stays perfectly in step, lap after lap, until the particle exits at the dees' outer radius."
          ],
          "frames": [
            {
              "x": [-3.4, 3.4], "y": [-3.0, 3.0], "axes": "none",
              "polys": [
                { "pts": [[-0.3, 2.4], [-1.5, 2.078], [-2.379, 1.2], [-2.7, 0], [-2.379, -1.2], [-1.5, -2.078], [-0.3, -2.4]], "smooth": true, "tone": "soft" },
                { "pts": [[0.3, -2.4], [1.5, -2.078], [2.379, -1.2], [2.7, 0], [2.379, 1.2], [1.5, 2.078], [0.3, 2.4]], "smooth": true, "tone": "soft" }
              ],
              "curves": [{ "c": "pts", "pts": [[0.3, 0], [0, 0.538], [-0.775, 0], [0, -1.013], [1.25, 0], [0, 1.488], [-1.725, 0], [0, -1.963], [2.2, 0]], "smooth": true }],
              "marks": [{ "x": 2.9, "y": 2.6, "glyph": "outof", "tone": "amber", "label": "B" }],
              "labels": [{ "x": 0, "y": -2.7, "text": "AC voltage across the gap", "soft": true }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · HELICAL MOTION, VELOCITY SELECTOR, CYCLOTRON ENERGY",
          "main": "<i>r</i> = <i>mv</i> sin θ / <i>qB</i>, pitch = <i>v</i> cos θ · 2π<i>m</i>/<i>qB</i><br>selector: <i>v</i> = <i>E</i>/<i>B</i>",
          "legend": [
            "θ is the angle between the velocity and B; the along-field component v cos θ coasts through untouched while v sin θ drives the circling",
            "pitch is the distance advanced along B in one full turn",
            "in a velocity selector, crossed E and B fields, only speed v = E/B passes through undeflected, since qE and qvB then cancel exactly"
          ],
          "note": "The full Lorentz force with both fields present is F = q(E + v × B): the electric part qE acts along E and does work, changing speed; the magnetic part qv × B acts perpendicular to v and does no work. The velocity selector is exactly the case where the two parts cancel."
        },
        {
          "t": "p",
          "html": "<b>Part B, charges in a wire: forces and twists.</b> A current is just charges in motion, so a current-carrying wire in a field feels the sum of the magnetic forces on every one of its moving charges, the force on a conductor, F = IL × B. Two consequences follow from that single result. First, two parallel wires push or pull on each other, since each sits in the other's field: a favourite exam trap is that like currents attract, the opposite of what like charges do. Second, a current loop in a uniform field feels no net force, but it does feel a torque: opposite sides carry equal and opposite forces that act along different lines, which is exactly what spins the coil in every electric motor and deflects the needle in a moving-coil galvanometer."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FORCE ON A CURRENT-CARRYING CONDUCTOR",
          "tag": "Fleming's left hand: field, current, force",
          "main": "<i>F</i> = <i>IL</i> × <i>B</i>, <i>F</i> = <i>BIL</i> sin θ",
          "legend": [
            "<i>I</i> is the current in A, <i>L</i> the length vector along the wire in the direction of the current, in m",
            "<i>B</i> is the field in T, and θ the angle between the wire and the field",
            "direction by Fleming's left-hand rule: forefinger along B, middle finger along I, thumb gives F, a hand mnemonic for the same cross product"
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "PARALLEL WIRES ATTRACT, ANTIPARALLEL REPEL",
          "chips": ["same direction: attract", "opposite direction: repel"],
          "captions": [
            "Each wire sits in the field the other one makes and feels a force. When both currents point the same way, each wire's field curls to push the other one inward: they attract. Reverse just one current and every arrow reverses with it: the wires now push each other apart. This mutual pull was once precise enough to define the ampere itself.",
            "Antiparallel currents: I1 still up, I2 now down. The force on each wire flips outward. Nothing about the wires changed, only which way the charges inside them move; that is the entire difference between the two pictures."
          ],
          "frames": [
            {
              "x": [-2.6, 2.6], "y": [-2.4, 2.4], "axes": "none",
              "arrows": [
                { "from": [-1, -1.8], "to": [-1, 1.8], "tone": "ink" },
                { "from": [1, -1.8], "to": [1, 1.8], "tone": "ink" },
                { "from": [-1, 0], "to": [-0.3, 0], "tone": "amber", "label": "F", "at": "above" },
                { "from": [1, 0], "to": [0.3, 0], "tone": "amber" }
              ],
              "labels": [{ "x": -1.35, "y": 1.9, "text": "I1" }, { "x": 0.65, "y": 1.9, "text": "I2" }]
            },
            {
              "x": [-2.6, 2.6], "y": [-2.4, 2.4], "axes": "none",
              "arrows": [
                { "from": [-1, -1.8], "to": [-1, 1.8], "tone": "ink" },
                { "from": [1, 1.8], "to": [1, -1.8], "tone": "ink" },
                { "from": [-1, 0], "to": [-1.7, 0], "tone": "amber", "label": "F", "at": "above" },
                { "from": [1, 0], "to": [1.7, 0], "tone": "amber" }
              ],
              "labels": [{ "x": -1.35, "y": 1.9, "text": "I1" }, { "x": 0.65, "y": 1.9, "text": "I2" }]
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · FORCE BETWEEN WIRES, TORQUE ON A LOOP",
          "main": "<i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub> / 2π<i>d</i><br>τ = <i>m</i> × <i>B</i>, τ = <i>NIAB</i> sin θ, <i>U</i> = -<i>m</i> · <i>B</i>",
          "legend": [
            "<i>I</i><sub>1</sub>, <i>I</i><sub>2</sub> are the two wires' currents in A, <i>d</i> their separation in m; attractive if parallel, repulsive if antiparallel",
            "<i>m</i> = <i>NIA</i> is the loop's magnetic dipole moment, unit A m², along the normal by the right-hand rule",
            "<i>N</i> is the number of turns, <i>A</i> the loop's area in m², and θ the angle between <i>m</i> and <i>B</i>",
            "<i>U</i> is minimum, the stable equilibrium, when <i>m</i> is parallel to <i>B</i>"
          ],
          "note": "Historically, before the 2019 SI revision, this force defined the ampere: 1 A was the current that, in two infinite parallel wires 1 m apart in vacuum, produces exactly 2 times 10^-7 N per metre. The ampere is now fixed by the elementary charge instead, but the relation remains the standard exam derivation."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · TORQUE ON A RECTANGULAR LOOP",
          "steps": [
            {
              "eq": "Sides of length <i>a</i>, perpendicular to <i>B</i>, feel <i>F</i><sub>1</sub> = <i>F</i><sub>2</sub> = <i>BIa</i>, equal and opposite",
              "why": "A rectangular loop of sides a and b sits in a field B lying in the plane of the loop, with normal at angle θ to B. The two sides parallel to B carry no useful torque. The two of length a carry current perpendicular to B and feel equal, opposite forces, but the forces do not share a line of action."
            },
            {
              "eq": "τ = (<i>BIa</i>)(<i>b</i> sin θ) = <i>BIA</i> sin θ, with <i>A</i> = <i>ab</i>",
              "why": "The perpendicular distance between the two forces' lines of action is b sin θ, so the couple's torque is force times arm. For N turns, τ = NIAB sin θ = mB sin θ, with m = NIA."
            },
            {
              "eq": "τ is maximum (<i>NIAB</i>) when the loop's plane is parallel to <i>B</i>, and zero when it is perpendicular",
              "why": "θ is measured between the normal and B, not between the plane and B; a plane parallel to B means the normal is perpendicular to B, sin θ = 1, and torque is at its largest. That is also the coil's unstable orientation, the one furthest from settling down."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.10 · THE LOOP AS A COUPLE",
          "chips": ["forces on the two sides of length a, out of and into the page"],
          "captions": [
            "A rectangular loop, field B horizontal. The normal n sits at angle θ to B. The two sides of length a, perpendicular to B, carry the loop's current straight out of the page on one side and straight into it on the other, marked here as F1 and F2: equal, opposite, and forming a couple. The perpendicular distance between them, projected along B, is the moment arm b sin θ, and torque is simply force times that arm."
          ],
          "frames": [
            {
              "x": [-3, 3], "y": [-3, 3], "axes": "none",
              "polys": [{ "pts": [[-1, -1.3], [1, -1.3], [1, 1.3], [-1, 1.3]], "close": true, "tone": "ink" }],
              "arrows": [
                { "from": [-1, 2.2], "to": [1, 2.2], "tone": "amber", "label": "B", "at": "above" },
                { "from": [0, 0], "to": [1.3, 0.9], "tone": "ink", "label": "n", "at": "end" }
              ],
              "arcs": [{ "at": [0, 0], "r": 0.6, "from": 0, "to": 35, "label": "θ" }],
              "marks": [
                { "x": -1, "y": 0, "glyph": "outof", "tone": "amber", "label": "F1" },
                { "x": 1, "y": 0, "glyph": "into", "tone": "amber", "label": "F2" }
              ],
              "segments": [{ "from": [-1, -1.6], "to": [1, -1.6], "dash": true, "soft": true, "label": "b sin θ", "at": "below" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · FORCE BETWEEN TWO PARALLEL WIRES",
          "steps": [
            {
              "eq": "<i>B</i><sub>1</sub> = μ<sub>0</sub><i>I</i><sub>1</sub> / 2π<i>d</i>, the field wire 1 makes at wire 2's location",
              "why": "Straight from Topic 02's infinite-wire result. Wire 2, carrying I2 over a length L, then feels F = B1 I2 L."
            },
            {
              "eq": "<i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub> / 2π<i>d</i>, attractive for parallel currents, repulsive for antiparallel",
              "why": "The right-hand rule on both wires shows the direction: parallel currents each sit inside a field that curls to pull them together; reverse one current and every force reverses with it."
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE GALVANOMETER NEEDS A RADIAL FIELD",
          "steps": [
            {
              "eq": "A bare loop in a uniform field has τ = <i>NIAB</i> sin θ; as the coil turns, θ changes",
              "why": "That sin θ is a nuisance: deflection would not be proportional to current, and the scale would be hopelessly non-linear."
            },
            {
              "eq": "Wind the coil on a soft-iron cylinder between concave pole pieces, shaping the field to be always radial",
              "why": "At every angle of the coil, the field then lies in the plane of the coil, so θ = 90 degrees and sin θ = 1 permanently. The deflecting torque becomes simply τ = NIAB, independent of orientation."
            },
            {
              "eq": "<i>NIAB</i> = <i>k</i>φ ⇒ φ = (<i>NAB</i>/<i>k</i>)<i>I</i>",
              "why": "A spiral spring provides a restoring torque kφ as the coil turns through angle φ; at equilibrium the two torques balance, and the deflection comes out exactly proportional to the current, a linear scale."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.11 · WHY THE FIELD IS SHAPED RADIAL",
          "chips": ["concave poles force B into the coil's own plane at every angle"],
          "captions": [
            "A coil wound on a soft-iron core sits between two concave pole pieces, N and S. Their curved faces shape the field into radial lines, always pointing from N through the core to S, so at whatever angle the coil has turned to, the field still lies exactly in the coil's own plane. That is what keeps sin θ pinned at 1 and the deflection proportional to current. A spiral spring and pointer, attached to the coil's suspension, provide the restoring torque that balances the deflecting one."
          ],
          "frames": [
            {
              "x": [-3.2, 3.2], "y": [-3.0, 3.0], "axes": "none", "aspect": 0.929,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 0.35 }],
              "polys": [
                { "pts": [[-1.15, -1.126], [-0.674, -0.65], [-0.5, 0], [-0.674, 0.65], [-1.15, 1.126]], "smooth": true, "tone": "soft" },
                { "pts": [[1.15, 1.126], [0.674, 0.65], [0.5, 0], [0.674, -0.65], [1.15, -1.126]], "smooth": true, "tone": "soft" }
              ],
              "marks": [
                { "x": 0, "y": 0.6, "glyph": "outof", "tone": "ink" },
                { "x": 0, "y": -0.6, "glyph": "into", "tone": "ink" }
              ],
              "arrows": [
                { "from": [-1.0, 0], "to": [-0.42, 0], "tone": "amber", "label": "B", "at": "above" },
                { "from": [1.0, 0], "to": [0.42, 0], "tone": "amber" }
              ],
              "segments": [{ "from": [0, 0.35], "to": [0, 2.2], "label": "pointer", "at": "end" }],
              "labels": [{ "x": -1.7, "y": 0, "text": "N" }, { "x": 1.7, "y": 0, "text": "S" }]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A circular coil of 40 turns and radius 6.0 cm carries 2.5 A, placed in a uniform field of 0.30 T such that the plane of the coil makes 30 degrees with the field. Find the torque.",
          "steps": [
            "Careful with the angle: the plane makes 30 degrees with B, so the normal makes θ = 60 degrees with B.",
            "Area: A = πR² = π(0.060)² = 1.131 × 10<sup>-2</sup> m².",
            "τ = NIAB sin θ = (40)(2.5)(1.131 × 10<sup>-2</sup>)(0.30) sin 60 degrees."
          ],
          "ans": "τ is about 0.29 N m."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A proton and an alpha particle, accelerated through the same potential difference, enter a field perpendicular to their velocities. Compare the radii of their circular paths (mass of alpha is 4 times a proton's, charge is 2 times).",
          "steps": [
            "The trap: reaching for r = mv/qB with the same v for both, but they were accelerated through the same VOLTAGE, giving the same energy gain qV, not the same speed.",
            "From qV = (1/2)mv², v = sqrt(2qV/m), so r = mv/qB = sqrt(2mV/q) / B, proportional to sqrt(m)/sqrt(q) = sqrt(m/q).",
            "r_alpha / r_proton = sqrt((m_alpha/q_alpha) / (m_proton/q_proton)) = sqrt((4/2)/(1/1)) = sqrt(2)."
          ],
          "ans": "r_alpha is about 1.41 times r_proton."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, TWO CONCEPTS",
          "q": "Singly-charged ions pass undeflected through a velocity selector with E = 3.0 × 10<sup>4</sup> V/m and B = 0.20 T, then curve in a pure field B' = 0.50 T. Given m = 3.3 × 10<sup>-26</sup> kg, q = 1.6 × 10<sup>-19</sup> C, find the radius.",
          "steps": [
            "Concept 1, the selector fixes the speed: v = E/B = 3.0 × 10<sup>4</sup> / 0.20 = 1.5 × 10<sup>5</sup> m/s.",
            "Concept 2, circular motion in B': r = mv / qB' = (3.3 × 10<sup>-26</sup>)(1.5 × 10<sup>5</sup>) / (1.6 × 10<sup>-19</sup>)(0.50)."
          ],
          "ans": "r is about 6.2 cm, exactly how a mass spectrometer separates ions by mass."
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.12 · A LOOP NEAR A WIRE",
          "chips": ["the near side loses the tug-of-war"],
          "captions": [
            "A long wire carries I1 upward, and a square loop of side a carries I2 to its right, its near side at distance d and its far side at d + a. The near side runs parallel to I1 and is attracted; the far side runs antiparallel and is repelled. Because the near side sits in the wire's stronger, closer field, attraction wins, and the net force pulls the whole loop toward the wire."
          ],
          "frames": [
            {
              "x": [-1, 3.6], "y": [-2.8, 2.8], "axes": "none",
              "labels": [{ "x": -0.35, "y": 2.3, "text": "I1" }],
              "polys": [{ "pts": [[1.4, -1], [2.8, -1], [2.8, 1], [1.4, 1]], "close": true, "tone": "amber" }],
              "arrows": [
                { "from": [0, -2.5], "to": [0, 2.5], "tone": "ink" },
                { "from": [1.4, -0.5], "to": [1.4, 0.5], "tone": "amber", "label": "I2", "at": "above" },
                { "from": [2.8, 0.5], "to": [2.8, -0.5], "tone": "soft" }
              ],
              "segments": [
                { "from": [0, -1.6], "to": [1.4, -1.6], "dash": true, "soft": true, "label": "d", "at": "below" },
                { "from": [0, -2.1], "to": [2.8, -2.1], "dash": true, "soft": true, "label": "d+a", "at": "below" }
              ]
            }
          ]
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "For the square loop above, side a, current I2, its near side parallel to the wire at distance d, find the net force on the loop.",
          "steps": [
            "The two sides perpendicular to the wire carry current in opposite senses through symmetric field regions and cancel; only the near and far sides matter.",
            "Near side, attractive: F_near = μ0I1I2a / 2πd. Far side, repulsive: F_far = μ0I1I2a / 2π(d+a).",
            "Net force, toward the wire since the near side wins: F_net = (μ0I1I2a / 2π)[1/d - 1/(d+a)] = μ0I1I2a² / 2πd(d+a)."
          ],
          "ans": "The net force is attractive and falls off roughly as 1/d² once d is much bigger than a, a clean illustration that a current loop behaves like a magnetic dipole at large distance."
        },
        {
          "t": "mcq",
          "q": "A charged particle moves through a uniform magnetic field. Which quantity is necessarily unchanged?",
          "opts": [
            { "label": "Velocity", "nudge": "The direction of velocity changes continuously, even though its magnitude does not." },
            { "label": "Momentum", "nudge": "Momentum is mv, a vector; its direction changes continuously along with velocity's." },
            { "label": "Kinetic energy", "nudge": null },
            { "label": "Acceleration", "nudge": "Acceleration points toward the centre of curvature and constantly changes direction as the particle moves." }
          ],
          "correct": 2,
          "solution": "The force is always perpendicular to v, so it does no work; speed and kinetic energy stay exactly constant even as direction changes."
        },
        {
          "t": "mcq",
          "q": "In a cyclotron, if the particle's speed is doubled, its period of revolution:",
          "opts": [
            { "label": "Doubles", "nudge": "Reasons 'faster means longer period' without recalling that the radius grows too, in exactly the ratio that cancels it out." },
            { "label": "Halves", "nudge": "An unsupported guess in the opposite direction from the doubling error." },
            { "label": "Is unchanged", "nudge": null },
            { "label": "Quadruples", "nudge": "Another unsupported guess; T = 2πm/qB contains no v at all." }
          ],
          "correct": 2,
          "solution": "T = 2πm/qB contains no v. A faster particle simply orbits a bigger circle in the same time, the principle the whole cyclotron is built on."
        },
        {
          "t": "mcq",
          "q": "A current loop of moment m sits in a uniform field B. The torque is maximum when:",
          "opts": [
            { "label": "m is parallel to B", "nudge": "sin θ = 0 here; this is one of the two equilibria, not the maximum." },
            { "label": "The loop's plane is parallel to B", "nudge": null },
            { "label": "The loop's plane is perpendicular to B", "nudge": "The classic angle-reference trap: plane perpendicular to B means the normal m is parallel to B, which is minimum torque, not maximum." },
            { "label": "m is antiparallel to B", "nudge": "sin θ = 0 here too; this is the other equilibrium, and the unstable one." }
          ],
          "correct": 1,
          "solution": "τ = mB sin θ, with θ measured between m and B, peaks at θ = 90 degrees; that means the normal is perpendicular to B, i.e. the loop's plane itself contains B."
        },
        {
          "t": "mcq",
          "q": "Two long parallel wires carry currents in opposite directions. They:",
          "opts": [
            { "label": "Attract", "nudge": "The most common error, over-applying electrostatics' 'likes repel' intuition to currents, where the rule is reversed." },
            { "label": "Repel", "nudge": null },
            { "label": "Exert no force on each other", "nudge": "There is always a force between current-carrying wires unless one current is zero." },
            { "label": "Twist but do not translate", "nudge": "Confuses this with the torque on a current LOOP; two straight wires exert a straight-line force, not a torque, on each other." }
          ],
          "correct": 1,
          "solution": "Antiparallel currents repel; parallel currents attract, the reverse of how like and unlike charges behave."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 25 cm length of wire carrying 4.0 A lies perpendicular to a 0.40 T field. Find the force on it.", "a": "F = BIL = 0.40 N." },
            { "q": "[NEET] An electron moves at 2 × 10<sup>6</sup> m/s perpendicular to a 0.50 T field. Find the radius and the period.", "a": "r is about 23 microns; T is about 7.1 × 10<sup>-11</sup> s." },
            { "q": "[JEE Main] Two long parallel wires 5.0 cm apart carry 10 A and 15 A in the same direction. Find the force per metre and its nature.", "a": "F/L is about 6.0 × 10<sup>-4</sup> N/m, attractive." },
            { "q": "[JEE Main] A 50-turn coil of radius 4.0 cm carries 3.0 A in a 0.25 T field. Find the maximum torque and the magnetic moment.", "a": "m = NIA is about 0.754 A m²; τ_max = mB is about 0.19 N m." },
            { "q": "[JEE Advanced] A proton enters a 0.80 T field at 5 × 10<sup>5</sup> m/s at 30 degrees to the field. Find the radius and the pitch of its helical path.", "a": "r is about 3.3 × 10<sup>-3</sup> m; pitch is about 3.5 × 10<sup>-2</sup> m." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Believing the magnetic force speeds a charge up. It never does work; speed and kinetic energy are always exactly conserved, whatever the path looks like.",
            "Forgetting the force vanishes when v is parallel to B. A charge moving straight along the field feels nothing and goes straight through; only the perpendicular component of velocity ever curves.",
            "Using the wrong angle in τ = NIAB sin θ. θ is between the normal m and B, never between the plane and B; if a problem states the plane's angle to B, first convert with θ = 90 degrees minus that angle.",
            "Getting attract and repel backwards. Parallel, like-direction currents attract, the opposite of like charges.",
            "Inserting a stray sin θ into the galvanometer's torque. The radial field is engineered so the coil's plane stays parallel to B always, sin θ = 1 permanently; a sin θ factor there is a sign the radial-field trick has been forgotten."
          ]
        },
        {
          "t": "protip",
          "html": "for any charge-in-a-field problem, first ask what was actually held constant: same speed, same accelerating voltage, or same momentum. same voltage means r is proportional to root m over root q; same momentum means r is proportional to 1/q. pick the right proportionality up front and a messy numerical collapses into a one-line ratio. and remember the cyclotron's clean independence from speed is itself only an approximation: a proton cyclotron running at B = 1.0 T already shows a 1 percent shift in its own frequency by about 9 to 10 MeV of kinetic energy, because relativistic mass growth creeps in long before the particle gets anywhere near the speed of light."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "F = qv × B", "note": "perpendicular to v always; does no work, ever" },
            { "f": "r = mv/qB, T = 2πm/qB", "note": "period independent of speed, the cyclotron's whole trick" },
            { "f": "F = IL × B, F/L = μ0I1I2/2πd", "note": "parallel currents attract, antiparallel repel" },
            { "f": "τ = m × B, m = NIA", "note": "θ is to the normal, never to the plane" }
          ],
          "aids": ["magnetic force only steers, never speeds", "like currents cuddle", "theta is to the normal, not the plane"]
        }
      ]
    },
    {
      "n": "04",
      "title": "Galvanometers and Their Conversion",
      "chip": "04 GALVANOMETER CONVERSION",
      "kalam": "low resistance in parallel, high resistance in series",
      "blocks": [
        {
          "t": "p",
          "html": "Topic 03 built the moving-coil galvanometer: a coil in a radial field twists against a spring, and because the field is radial the deflection φ is exactly proportional to current, φ = (NAB/k)I. That makes it a beautiful current detector, but a raw galvanometer is almost useless as a practical meter, for two reasons. <b>It is hypersensitive:</b> full-scale deflection comes from a current of just a few microamps to milliamps, and an ordinary circuit current of several amps would wreck the coil. <b>It has its own resistance:</b> the coil's resistance G, often tens of ohms, is not negligible, so dropping a galvanometer into a circuit to measure current changes the very current it is trying to read. The engineering problem this whole topic solves: tame this delicate, intrusive device into a rugged ammeter or a voltmeter, without it disturbing the circuit it measures."
        },
        {
          "t": "think",
          "html": "picture the galvanometer as a narrow toll-booth lane that can only handle a trickle of traffic. to make an ammeter, build a wide bypass road right beside the booth, a tiny shunt resistance in parallel, so almost all the traffic roars past and only a fixed, safe trickle goes through the booth. to make a voltmeter, put a long, narrow toll road, a large series resistance, in front of the booth, so only a whisper of current gets through for a given voltage, and the meter barely drains the circuit it samples."
        },
        {
          "t": "p",
          "html": "The two conversions are mirror images: <b>low resistance in parallel makes an ammeter; high resistance in series makes a voltmeter.</b> Get that picture right and every numerical falls out. A real ammeter has small but non-zero resistance, and a real voltmeter has large but finite resistance, so both introduce a small, systematic loading error; the ideal limits, ammeter resistance tending to zero and voltmeter resistance tending to infinity, are approximations a real meter only ever gets close to."
        },
        {
          "t": "def",
          "term": "Notation carried through this topic",
          "html": "<i>I<sub>g</sub></i> is the current that gives full-scale deflection, in A. <i>G</i> is the galvanometer's own coil resistance, in Ω (written <i>R<sub>g</sub></i> in Topic 03). Both are properties of the bare instrument, fixed before any conversion resistor is added."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "Every conversion formula here assumes φ is proportional to <i>I</i>, a linear scale, which itself needs the radial field from Topic 03's galvanometer. A real ammeter has small but non-zero resistance, and a real voltmeter has large but finite resistance, so both introduce a small, systematic loading error; the ideal limits are approximations a real meter only ever approaches. And a conversion resistor must actually survive the power it dissipates, which is exactly the second half of the third worked example below."
        },
        {
          "t": "defgrid",
          "title": "Deflection and the two sensitivities",
          "rows": [
            { "k": "Deflection", "v": "φ = (<i>NAB</i>/<i>k</i>)<i>I</i>, from the torque balance <i>NIAB</i> = <i>k</i>φ" },
            { "k": "Current sensitivity", "v": "<i>S<sub>I</sub></i> = φ/<i>I</i> = <i>NAB</i>/<i>k</i>, deflection per unit current" },
            { "k": "Figure of merit", "v": "1/<i>S<sub>I</sub></i> = <i>k</i>/<i>NAB</i>, the current needed for one division; smaller is more sensitive" },
            { "k": "Voltage sensitivity", "v": "<i>S<sub>V</sub></i> = φ/<i>V</i> = <i>NAB</i>/<i>kG</i> = <i>S<sub>I</sub></i>/<i>G</i>" }
          ]
        },
        {
          "t": "think",
          "html": "the coil resistance G is the one number neither conversion can ever remove, only work around. a shunt bypasses most of the current so G's own resistance barely matters; a multiplier dwarfs G so it barely matters there either. the toll booth is never demolished, it is just made irrelevant by building around it."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CONVERTING TO AN AMMETER",
          "tag": "a small shunt in parallel",
          "main": "<i>S</i> = <i>I<sub>g</sub>G</i> / (<i>I</i> - <i>I<sub>g</sub></i>) = <i>G</i> / (<i>n</i> - 1)<br><i>R<sub>A</sub></i> = <i>GS</i> / (<i>G</i> + <i>S</i>)",
          "legend": [
            "<i>I</i> is the full-scale range the converted ammeter should read, in A; <i>n</i> = <i>I</i>/<i>I<sub>g</sub></i> is the range factor",
            "<i>S</i> is the shunt resistance, in Ω, connected in parallel with the coil",
            "<i>R<sub>A</sub></i> is the ammeter's effective resistance, small by design"
          ],
          "note": "A bigger desired range needs a SMALLER shunt: the larger I is, the more current must be diverted around the coil."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE SHUNT FORMULA LOOKS LIKE THAT",
          "steps": [
            {
              "eq": "<i>I<sub>g</sub>G</i> = (<i>I</i> - <i>I<sub>g</sub></i>)<i>S</i>",
              "why": "G and S sit in parallel, so the potential difference across them is equal. The coil carries the safe current Ig, and the shunt carries the excess (I - Ig) that must detour around it. Equal voltage across the two branches pins down S in one line."
            },
            {
              "eq": "<i>S</i> = <i>I<sub>g</sub>G</i> / (<i>I</i> - <i>I<sub>g</sub></i>)",
              "why": "Solve directly for S. The effective resistance RA = GS/(G+S) then comes out tiny, dominated by the small S, so inserting this ammeter in series barely changes the circuit current at all, exactly the design goal."
            }
          ]
        },
        {
          "t": "formula",
          "kicker": "FORMULA · CONVERTING TO A VOLTMETER",
          "tag": "a large multiplier in series",
          "main": "<i>R</i> = <i>V</i>/<i>I<sub>g</sub></i> - <i>G</i><br><i>R<sub>V</sub></i> = <i>G</i> + <i>R</i> = <i>V</i>/<i>I<sub>g</sub></i>",
          "legend": [
            "<i>V</i> is the full-scale voltage the converted voltmeter should read, in V",
            "<i>R</i> is the multiplier resistance, in Ω, connected in series with the coil",
            "<i>R<sub>V</sub></i> is the voltmeter's effective resistance, large by design"
          ],
          "note": "Ideal instruments sit at the two limits: an ideal ammeter has RA = 0, an ideal voltmeter has RV tending to infinity. The closer a real meter gets to its ideal, the smaller the disturbance it causes to the circuit it measures."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · WHY THE MULTIPLIER FORMULA LOOKS LIKE THAT",
          "steps": [
            {
              "eq": "<i>V</i> = <i>I<sub>g</sub></i>(<i>G</i> + <i>R</i>) ⇒ <i>R</i> = <i>V</i>/<i>I<sub>g</sub></i> - <i>G</i>",
              "why": "G and R sit in series, so the same current flows through both, and the voltages across them add. The full V should drive just Ig through the whole chain, which pins down R directly. The -G is easy to lose, and forgetting it is the single most common slip in this derivation."
            },
            {
              "eq": "<i>R<sub>V</sub></i> = <i>G</i> + <i>R</i> = <i>V</i>/<i>I<sub>g</sub></i>",
              "why": "The effective resistance comes out large, so when this voltmeter is connected in parallel across a circuit element it draws almost no current and barely disturbs the voltage it is trying to sample."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 4.13 AND 4.14 · THE SAME COIL, TWO CONVERSIONS",
          "chips": ["shunt S in parallel: an ammeter", "multiplier R in series: a voltmeter"],
          "captions": [
            "The galvanometer G sits between two terminals. A small shunt S, in parallel, gives the excess current (I minus Ig) a wide bypass road, so only the safe Ig ever crosses the coil; the two branches share the same voltage, which is the whole derivation in one picture.",
            "The galvanometer G now sits in series with a large multiplier R, the two sharing the same current Ig for whatever voltage V is applied across the pair. Almost all of V drops across R, so the coil barely feels the voltage swings the meter is sampling."
          ],
          "frames": [
            {
              "aspect": 0.55,
              "circuit": {
                "grid": [10, 6],
                "wires": [
                  { "from": [1, 1], "to": [1, 5] },
                  { "from": [9, 1], "to": [9, 5] },
                  { "from": [1, 1], "to": [3, 1] },
                  { "from": [6, 1], "to": [9, 1] },
                  { "from": [1, 5], "to": [3, 5] },
                  { "from": [6, 5], "to": [9, 5] }
                ],
                "parts": [
                  { "at": [3, 1], "to": [6, 1], "kind": "G", "label": "G" },
                  { "at": [3, 5], "to": [6, 5], "kind": "R", "label": "S" }
                ],
                "nodes": [{ "at": [1, 3], "junction": true }, { "at": [9, 3], "junction": true }],
                "currents": [
                  { "at": [0, 3], "to": [1, 3], "label": "I" },
                  { "at": [3.5, 0.3], "to": [5, 0.3], "label": "Ig" },
                  { "at": [3.5, 5.7], "to": [5, 5.7], "label": "I-Ig" }
                ]
              }
            },
            {
              "aspect": 0.42,
              "circuit": {
                "grid": [10, 4],
                "wires": [
                  { "from": [1, 2], "to": [2, 2] },
                  { "from": [8, 2], "to": [9, 2] },
                  { "from": [1, 2], "to": [1, 0.5] },
                  { "from": [9, 2], "to": [9, 0.5] }
                ],
                "parts": [
                  { "at": [2, 2], "to": [5, 2], "kind": "G", "label": "G" },
                  { "at": [5, 2], "to": [8, 2], "kind": "R", "label": "R" },
                  { "at": [1, 0.5], "to": [9, 0.5], "kind": "battery", "label": "V", "tone": "amber" }
                ],
                "currents": [{ "at": [3, 2.7], "to": [4.5, 2.7], "label": "Ig" }]
              }
            }
          ]
        },
        {
          "t": "proc",
          "title": "Designing a multi-range meter from one galvanometer",
          "steps": [
            "<b>Multi-range voltmeter.</b> To reach ranges V1 up to V2 up to V3 in increasing order, stack series resistors and tap between them: R1 = V1/Ig - G for the first range, then each further resistor handles only the increment, R2 = (V2 - V1)/Ig, R3 = (V3 - V2)/Ig, and so on.",
            "<b>Multi-range ammeter.</b> The mirror problem: for ranges I1 up to I2 up to I3 in increasing order, switch between different shunts, each given by Sj = IgG/(Ij - Ig). A larger range always needs a smaller shunt, so the shunts run in the opposite order, largest first.",
            "<b>Why an Ayrton shunt in practice.</b> Real multi-range ammeters arrange the shunts as one chain and switch the TAP POINT, so the coil is never left unprotected mid-switch; but the value each tap must deliver is still exactly the boxed shunt formula for that range."
          ]
        },
        {
          "t": "think",
          "html": "it looks like you could make a galvanometer arbitrarily sensitive just by piling on turns N, since current sensitivity is NAB/k. but more turns or a bigger coil area also makes a longer, heavier coil, which raises G right along with it. since voltage sensitivity is NAB/kG and G grows roughly with N too, raising N buys current sensitivity but not voltage sensitivity, a favourite exam subtlety. sensitivity is always a design trade-off, never a free lunch, which is exactly why the two figures of merit are quoted separately."
        },
        {
          "t": "diagram",
          "kind": "circuit",
          "kicker": "FIGURE 4.15 · A VOLTMETER LOADING ITS OWN MEASUREMENT",
          "chips": ["RV in parallel with R2 changes the very divider it reads"],
          "captions": [
            "A 60 V battery drives R1 and R2 in series. A voltmeter of resistance RV, connected across R2 to measure its voltage, is itself just another resistor in parallel with R2, and it drags the divider's split away from the value it had before the meter arrived. The bigger RV is compared with R2, the smaller that disturbance, which is exactly why an ideal voltmeter needs infinite resistance."
          ],
          "frames": [
            {
              "aspect": 0.62,
              "circuit": {
                "grid": [11, 8],
                "wires": [
                  { "from": [1, 7], "to": [3, 7] },
                  { "from": [6, 7], "to": [8, 7] },
                  { "from": [8, 1], "to": [1, 1] },
                  { "from": [8, 7], "to": [9.5, 7] },
                  { "from": [9.5, 1], "to": [8, 1] }
                ],
                "parts": [
                  { "at": [1, 1], "to": [1, 7], "kind": "battery", "label": "60V", "tone": "amber" },
                  { "at": [3, 7], "to": [6, 7], "kind": "R", "label": "R1" },
                  { "at": [8, 7], "to": [8, 1], "kind": "R", "label": "R2" },
                  { "at": [9.5, 7], "to": [9.5, 1], "kind": "V", "label": "V" }
                ],
                "nodes": [{ "at": [8, 7], "junction": true }, { "at": [8, 1], "junction": true }]
              }
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "The two conversions, side by side",
          "rows": [
            { "k": "Ammeter (shunt S, parallel)", "v": "<i>S</i> = <i>I<sub>g</sub>G</i>/(<i>I</i>-<i>I<sub>g</sub></i>); effective resistance small, and shrinks further as the range grows" },
            { "k": "Voltmeter (multiplier R, series)", "v": "<i>R</i> = <i>V</i>/<i>I<sub>g</sub></i> - <i>G</i>; effective resistance large, and grows further as the range grows" },
            { "k": "What never changes", "v": "the coil itself: same <i>I<sub>g</sub></i>, same <i>G</i>, in every range of every conversion built from it" }
          ]
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A galvanometer has G = 50 Ω and shows full-scale deflection at Ig = 2.0 mA. Convert it into an ammeter reading 5.0 A full scale. Find the shunt.",
          "steps": [
            "S = IgG / (I - Ig) = (2.0 × 10<sup>-3</sup>)(50) / (5.0 - 0.002)."
          ],
          "ans": "S is about 0.020 Ω, a very small parallel resistance, exactly as expected for an ammeter."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "A galvanometer (G = 60 Ω, Ig = 1.0 mA) is to read 3.0 V full scale as a voltmeter. What resistance is needed, and how is it connected?",
          "steps": [
            "The trap: connecting it in parallel like a shunt, or forgetting to subtract G and just writing R = V/Ig.",
            "Right approach, large resistance in series: R = V/Ig - G = 3.0/(1.0 × 10<sup>-3</sup>) - 60 = 3000 - 60."
          ],
          "ans": "R = 2940 Ω in series. The -G correction is small here, 60 out of 3000, but examiners award and deduct for it, and in low-range voltmeters it matters a great deal more."
        },
        {
          "t": "think",
          "html": "the minus G correction barely moved the last example's answer, sixty ohms out of three thousand. shrink the target range to 0.1 V instead of 3 V and that same sixty-ohm G would be a third of the whole multiplier, not a rounding error. the smaller the voltmeter's range, the more the coil's own resistance dominates the answer, which is exactly why low-range voltmeters are the ones examiners pick to test whether the minus G survived."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, TWO CONCEPTS",
          "q": "A galvanometer (G = 80 Ω, Ig = 2.0 mA) is converted into a 5.0 A ammeter. (a) Find the shunt. (b) The available shunt component is rated to dissipate at most 0.50 W. Is it safe?",
          "steps": [
            "Concept 1, shunt value: S = IgG / (I - Ig) = (2.0 × 10<sup>-3</sup>)(80) / 4.998, about 0.0320 Ω.",
            "Concept 2, power in the shunt at full scale: it carries (I - Ig) = 4.998 A at voltage IgG = 0.16 V, so P = (I - Ig)(IgG) = 4.998 × 0.16."
          ],
          "ans": "P is about 0.80 W, which exceeds the 0.50 W rating: the component would overheat. Not safe; a higher-rated shunt is required."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A 60 V battery (negligible internal resistance) drives R1 = R2 = 10 kΩ in series. A voltmeter of resistance RV = 20 kΩ is connected across R2. Find (a) the true voltage across R2, (b) the meter's reading, (c) the percentage error.",
          "steps": [
            "(a) True voltage, no meter present: equal resistors split equally, V_true = 60/2 = 30 V.",
            "(b) With the voltmeter loading R2: R_par = R2·RV/(R2+RV) = (10)(20)/30 = 6.667 kΩ. The divider is now R1 = 10 kΩ in series with 6.667 kΩ, so V_read = 60 × 6.667/(10+6.667) = 60 × 0.400.",
            "(c) Percentage error: (30 - 24)/30 × 100."
          ],
          "ans": "V_read = 24 V, a 20 percent error. A voltmeter whose resistance is merely comparable to the circuit's own resistance loads it badly, which is exactly why RV must be far larger than the circuit resistance, ideally infinite."
        },
        {
          "t": "mcq",
          "q": "An ammeter must be connected in series and should have:",
          "opts": [
            { "label": "High resistance, to limit the current", "nudge": "This is the VOLTMETER's requirement, not the ammeter's, the classic role-reversal trap." },
            { "label": "Very low resistance, so it barely changes the circuit current", "nudge": null },
            { "label": "Infinite resistance", "nudge": "Also describes a voltmeter's ideal, not an ammeter's; an infinite series resistance would stop the current it is meant to measure." },
            { "label": "The same resistance as the circuit", "nudge": "This would roughly halve the current being measured, a gross disturbance, not a negligible one." }
          ],
          "correct": 1,
          "solution": "In series, any added resistance reduces the current being measured; a near-zero resistance keeps that disturbance negligible."
        },
        {
          "t": "mcq",
          "q": "To convert a galvanometer into a voltmeter, one connects:",
          "opts": [
            { "label": "A low resistance in parallel", "nudge": "This is the ammeter, shunt recipe, the most common confusion in this topic." },
            { "label": "A high resistance in parallel", "nudge": "Right magnitude, wrong topology: a parallel resistor, however large, still leaves the coil directly across the circuit." },
            { "label": "A high resistance in series", "nudge": null },
            { "label": "A low resistance in series", "nudge": "Right topology, wrong magnitude: a small series resistance would not limit the current through the sensitive coil at all." }
          ],
          "correct": 2,
          "solution": "A large series multiplier ensures only a tiny current flows for a given voltage, which is exactly what gives the combination a high effective resistance for a parallel connection across a circuit."
        },
        {
          "t": "mcq",
          "q": "A galvanometer is converted into an ammeter using shunt S. If the desired range I is increased, for the same Ig and G, the required shunt:",
          "opts": [
            { "label": "Increases", "nudge": "Inverts the actual relationship between the range and the shunt." },
            { "label": "Decreases", "nudge": null },
            { "label": "Stays the same", "nudge": "Ignores that S = IgG/(I - Ig) depends on I directly." },
            { "label": "Becomes equal to G", "nudge": "Has no basis in the formula at all." }
          ],
          "correct": 1,
          "solution": "S = IgG/(I - Ig): a larger I enlarges the denominator, so S shrinks. Bigger ranges need smaller shunts, since more current must bypass the coil."
        },
        {
          "t": "mcq",
          "q": "A real voltmeter of resistance RV reads the voltage across a resistor. As RV increases toward infinity, the reading:",
          "opts": [
            { "label": "Approaches the true, undisturbed voltage", "nudge": null },
            { "label": "Approaches zero", "nudge": "This is the opposite extreme, a low-resistance meter effectively shorting the element it is measuring." },
            { "label": "Doubles", "nudge": "Unsupported; nothing about increasing RV produces a doubling." },
            { "label": "Is unaffected by RV", "nudge": "Ignores loading entirely, which is exactly the error in the worked example above." }
          ],
          "correct": 0,
          "solution": "A larger RV draws less current from the divider, loading it less, so the reading converges to the true value: the ideal-voltmeter limit."
        },
        {
          "t": "p",
          "html": "Every ammeter and voltmeter on a lab bench, and every multimeter dial that switches ranges, is exactly this pair of formulas built into hardware: a shunt or a multiplier chosen once, at the factory, for the range printed on the dial. Nothing about the underlying galvanometer changes when you turn that dial; only which external resistor it is wired to changes with it."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A galvanometer (G = 100 Ω, Ig = 5.0 mA) is converted to a 2.0 A ammeter. Find the shunt.", "a": "S = IgG/(I-Ig) is about 0.25 Ω." },
            { "q": "[NEET] A galvanometer (G = 25 Ω, Ig = 4.0 mA) is made into a 10 V voltmeter. Find the series resistance.", "a": "R = V/Ig - G = 2475 Ω." },
            { "q": "[JEE Main] Design a two-range voltmeter, 1 V and 10 V, from a galvanometer with G = 10 Ω, Ig = 1.0 mA. Find the two series resistors.", "a": "R1 = 990 Ω for the 1 V range; an additional R2 = 9000 Ω extends it to the 10 V range." },
            { "q": "[JEE Main] In a moving-coil galvanometer the turns N are doubled, and G doubles right along with it. What happens to current sensitivity and voltage sensitivity?", "a": "Current sensitivity doubles, proportional to N; voltage sensitivity is unchanged, since SV = NAB/kG and G doubled too." },
            { "q": "[JEE Advanced] A galvanometer (G = 90 Ω, Ig = 5.0 mA) is converted to a 3.0 A ammeter. Find the shunt and the ammeter's effective resistance.", "a": "S is about 0.150 Ω; RA = GS/(G+S) is also about 0.150 Ω, since S is so much smaller than G." }
          ]
        },
        {
          "t": "mistakes",
          "items": [
            "Swapping the two recipes. Ammeter is low resistance, shunt, in parallel; voltmeter is high resistance, multiplier, in series. Anchor it to the toll-booth picture, not rote memory.",
            "Forgetting the -G in the voltmeter formula. R = V/Ig - G, never V/Ig alone; the coil resistance is part of the same series chain the multiplier sits in.",
            "Using I instead of (I - Ig) in the shunt formula. Only the EXCESS current bypasses the coil, so the denominator is I - Ig, never the full range I.",
            "Treating real meters as ideal. A finite-resistance voltmeter or a non-zero-resistance ammeter always perturbs the circuit it sits in; a precision problem must account for that loading."
          ]
        },
        {
          "t": "protip",
          "html": "before plugging in numbers, sanity-check the SIZE of the answer against the picture: a shunt should come out small, milliohms to a few ohms, and a multiplier should come out large, kilohms. if your shunt comes out at 3000 ohms or your multiplier at 0.02 ohms, the two formulas have been swapped, and you can catch it in one glance rather than at the end of a long calculation."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "φ = (NAB/k)I", "note": "current sensitivity NAB/k, voltage sensitivity NAB/kG" },
            { "f": "S = IgG / (I - Ig)", "note": "ammeter shunt, in parallel, always small" },
            { "f": "R = V/Ig - G", "note": "voltmeter multiplier, in series, always large" },
            { "f": "ideal: RA to 0, RV to infinity", "note": "the disturbance a real meter never fully escapes" }
          ],
          "aids": ["ammeter is a low, in series; voltmeter is very high, in parallel", "shunt is small, multiplier is mighty", "the minus G is the mark examiners look for"]
        }
      ]
    },
    {
      "n": "05",
      "title": "The Magnetic Dipole: Current Loop to Bohr Magneton",
      "chip": "05 MAGNETIC DIPOLE",
      "kalam": "a loop, seen from far enough, is just a tiny bar magnet",
      "blocks": [
        {
          "t": "p",
          "html": "This whole chapter has built magnetic fields from currents and watched currents feel forces. This last topic ties the two together with one unifying idea: <b>a current loop is the fundamental atom of magnetism.</b> Look at a small current loop from far away and you can no longer see that it is a loop, but it still produces a field, and that field looks exactly like the field of a tiny bar magnet, out of one face and into the other. The loop carries a <b>magnetic dipole moment</b> <i>m</i> = <i>NIA</i>, a vector along the loop's normal by the right-hand rule: curl your fingers along the current and your thumb gives <i>m</i>. Its size is current times area times turns; its direction is the loop's own axis."
        },
        {
          "t": "think",
          "html": "picture a child running in a circle holding a charged balloon. charge going around in a circle is a current loop, so the running child is a tiny magnet. now shrink that picture all the way down to an electron orbiting a nucleus: a charge going round in a circle, a current loop, a magnet. this is the whole payoff of the topic, it explains why matter is magnetic at all. every atom carries tiny current-loop magnets from its orbiting electrons, and the smallest natural unit of that atomic magnetism has a name, the bohr magneton."
        },
        {
          "t": "p",
          "html": "This is the magnetic mirror of the electric dipole you already know: two charges plus q and minus q a distance apart, with moment <i>p</i>, feeling a torque in a field and producing its own far-field. A magnetic dipole does all the same things, with <i>m</i> playing the role of <i>p</i>."
        },
        {
          "t": "def",
          "term": "Limiting conditions and assumptions",
          "html": "The clean far-field formulas below hold only far from the loop, at distances much larger than its own size; close up, the exact on-axis result from Topic 01 is still the correct one to use. The revolving-electron result later in this topic uses the simple classical orbit model: real atoms also carry electron spin, an intrinsic moment with no classical orbit behind it, so this topic captures only the orbital contribution. And because the electron's charge is negative, its magnetic moment points opposite to its angular momentum, μ<sub>l</sub> = -(<i>e</i>/2<i>m</i>)<i>L</i>, a sign that is easy to lose."
        },
        {
          "t": "formula",
          "kicker": "FORMULA · THE DIPOLE IN A FIELD",
          "main": "<i>m</i> = <i>NIA</i>, unit A m²<br>τ = <i>m</i> × <i>B</i>, <i>U</i> = -<i>m</i> · <i>B</i>",
          "legend": [
            "<i>N</i> is the number of turns, <i>I</i> the current in A, <i>A</i> the loop's area in m², and <i>m</i> points along the normal by the right-hand rule",
            "τ = <i>mB</i> sin θ is the torque, and <i>U</i> = -<i>mB</i> cos θ the potential energy, both carried straight over from Topic 03",
            "θ is the angle between <i>m</i> and <i>B</i>; <i>U</i> is minimum, stable, when <i>m</i> is parallel to <i>B</i>, and maximum, unstable, when antiparallel"
          ],
          "note": "Work to rotate the dipole from θ1 to θ2 is W = U2 - U1 = mB(cos θ1 - cos θ2). Rotating it FURTHER from alignment always costs positive work; rotating it back toward alignment always releases it."
        },
        {
          "t": "defgrid",
          "title": "The electric-magnetic dipole analogy",
          "tag": "swap p for m, and 1/4 pi epsilon0 for mu0/4 pi",
          "rows": [
            { "k": "Moment", "v": "electric <i>p</i>; magnetic <i>m</i> = <i>NIA</i>" },
            { "k": "Axial field", "v": "electric (1/4πε<sub>0</sub>)(2<i>p</i>/<i>x</i><sup>3</sup>); magnetic (μ<sub>0</sub>/4π)(2<i>m</i>/<i>x</i><sup>3</sup>)" },
            { "k": "Equatorial field", "v": "electric (1/4πε<sub>0</sub>)(<i>p</i>/<i>x</i><sup>3</sup>); magnetic (μ<sub>0</sub>/4π)(<i>m</i>/<i>x</i><sup>3</sup>)" },
            { "k": "Torque and energy", "v": "electric <i>p</i> × <i>E</i>, -<i>p</i> · <i>E</i>; magnetic <i>m</i> × <i>B</i>, -<i>m</i> · <i>B</i>, identical in form" }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "A LOOP UP CLOSE, AND FROM FAR AWAY",
          "chips": ["near the loop: field lines thread through it", "far from the loop: indistinguishable from a bar magnet"],
          "captions": [
            "Close to the loop its field lines still visibly circle the wire, one shown here arching out from the top face and back in at the bottom, exactly the shape Topic 01's Biot-Savart field takes. The dipole moment m points along the axis, out of the face the current circulates anticlockwise around.",
            "Shrink the same loop to a dot and step back: the field it makes now looks exactly like a bar magnet's, emerging near one face (call it N) and returning near the other (S), falling off as 1/x³ along the axis just like an electric dipole's field falls off in x. Nothing about the loop changed; only the distance did."
          ],
          "frames": [
            {
              "x": [-3.6, 3.6], "y": [-3.0, 3.0], "axes": "none", "aspect": 0.831,
              "curves": [
                { "c": "circle", "cx": 0, "cy": 0, "r": 1.2 },
                { "c": "pts", "pts": [[0, 1.2], [2.2, 2.4], [3.0, 0], [2.2, -2.4], [0, -1.2]], "smooth": true, "soft": true }
              ],
              "arrows": [
                { "from": [0.3, 1.17], "to": [-0.3, 1.17], "tone": "ink", "label": "I", "at": "below" },
                { "from": [0, 1.2], "to": [0, 2.4], "tone": "amber", "label": "m", "at": "end" }
              ]
            },
            {
              "x": [-2.2, 2.2], "y": [-2.2, 2.2], "axes": "none", "aspect": 0.987,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 0.4 }],
              "arrows": [{ "from": [0, 1.2], "to": [0, 2.0], "tone": "amber", "label": "B", "at": "end" }],
              "labels": [{ "x": 0, "y": 0.7, "text": "N" }, { "x": 0, "y": -0.7, "text": "S" }]
            }
          ]
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE FAR-FIELD OF A LOOP IS A DIPOLE FIELD",
          "steps": [
            {
              "eq": "<i>B</i> = μ<sub>0</sub><i>NIR</i><sup>2</sup> / 2(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>, the exact on-axis field from Topic 01",
              "why": "Start from the result already derived, valid at every x, not just far away."
            },
            {
              "eq": "For <i>x</i> much greater than <i>R</i>: (<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> tends to <i>x</i><sup>3</sup>, so <i>B</i> tends to μ<sub>0</sub><i>NIR</i><sup>2</sup> / 2<i>x</i><sup>3</sup>",
              "why": "R becomes negligible next to x inside the bracket once the field point is many loop-radii away; this is the same kind of limit that gave the infinite-wire result in Topic 01."
            },
            {
              "eq": "<i>B</i><sub>axial</sub> = (μ<sub>0</sub>/2<i>x</i><sup>3</sup>)(<i>m</i>/π) = (μ<sub>0</sub>/4π)(2<i>m</i>/<i>x</i><sup>3</sup>)",
              "why": "Substitute the magnetic moment m = NI(πR²), so NIR² = m/π. The result is identical in form to the electric dipole's axial field with p replaced by m and 1/4πε0 replaced by μ0/4π, confirming a current loop really is a magnetic dipole once you step back far enough. The equatorial field works out to exactly half this, Beq = (μ0/4π)(m/x³)."
            }
          ]
        },
        {
          "t": "defgrid",
          "title": "Standard values worth memorising",
          "rows": [
            { "k": "Gyromagnetic ratio, e/2m", "v": "about 8.8 × 10<sup>10</sup> C/kg, the same number for every orbiting electron regardless of its orbit's size" },
            { "k": "Bohr magneton, μ<sub>B</sub>", "v": "about 9.27 × 10<sup>-24</sup> A m², the smallest allowed orbital moment, at n = 1" },
            { "k": "A typical laboratory coil's moment", "v": "a few tenths of an A m², roughly 10<sup>22</sup> Bohr magnetons in a single macroscopic loop" }
          ]
        },
        {
          "t": "think",
          "html": "a bar magnet you can hold is nothing but billions of these atomic current loops, mostly cancelling in a random jumble, with just enough left over aligned to add up to a field you can feel. that is the whole reason later chapters on magnetic materials exist at all: paramagnetism, diamagnetism and ferromagnetism are all just different stories about how well an atom's own tiny loop moments line up with an applied field."
        },
        {
          "t": "p",
          "html": "Now turn the idea around: every electron orbiting a nucleus IS a tiny current loop, and every atom's magnetism starts here. An orbiting electron completes one revolution in a period T = 2πr/v, and a charge passing a point once per period is, by definition, a current I = e/T = ev/2πr. Treat that orbit as a current loop of area πr², and the electron's own magnetic moment falls straight out."
        },
        {
          "t": "deriv",
          "kicker": "DERIVATION · THE REVOLVING ELECTRON AND THE BOHR MAGNETON",
          "steps": [
            {
              "eq": "<i>I</i> = <i>e</i>/<i>T</i> = <i>ev</i> / 2π<i>r</i>",
              "why": "An electron of charge magnitude e, orbiting at speed v on a circle of radius r, constitutes exactly this current: one charge e passing any point once every period T = 2πr/v."
            },
            {
              "eq": "μ<sub>l</sub> = <i>IA</i> = (<i>ev</i>/2π<i>r</i>)(π<i>r</i><sup>2</sup>) = <i>evr</i>/2",
              "why": "Treat the orbit as a current loop of area πr² and apply the same m = IA used throughout this topic."
            },
            {
              "eq": "μ<sub>l</sub> = (<i>e</i>/2<i>m</i>)<i>L</i>, since <i>L</i> = <i>mvr</i> ⇒ <i>vr</i> = <i>L</i>/<i>m</i>",
              "why": "Express vr through the orbital angular momentum L = mvr instead. The constant μl/L = e/2m is the gyromagnetic ratio, about 8.8 × 10<sup>10</sup> C/kg, a universal number independent of the orbit's size or speed. Because the electron's charge is negative, the vector relation carries a minus sign, μl = -(e/2m)L: the moment points opposite to the angular momentum."
            },
            {
              "eq": "μ<sub>B</sub> = <i>eh</i> / 4π<i>m</i>, about 9.27 × 10<sup>-24</sup> A m², at the smallest allowed <i>L</i> = <i>h</i>/2π",
              "why": "Bohr's postulate quantises angular momentum as L = nh/2pi for whole numbers n, with h Planck's constant. Substituting the smallest value, n = 1, into mu_l = (e/2m)L gives the natural unit of atomic magnetism, the Bohr magneton."
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "FIGURE 4.16 · THE ORBIT AS A CURRENT LOOP",
          "chips": ["opposite senses: the electron's motion, the conventional current, and L versus mu"],
          "captions": [
            "An electron, marked -e, moves anticlockwise on a circular orbit about a central nucleus. Conventional current runs the opposite way round, clockwise, since current direction is defined by positive charge flow. The orbital angular momentum L, along the axis, and the magnetic moment mu, along the same axis but pointing the other way, are drawn as separate vertical arrows precisely because the electron's negative charge flips mu relative to L: they are antiparallel, never the same arrow read twice."
          ],
          "frames": [
            {
              "x": [-2.4, 2.4], "y": [-2.4, 2.4], "axes": "none", "aspect": 0.987,
              "curves": [{ "c": "circle", "cx": 0, "cy": 0, "r": 1.6 }],
              "marks": [
                { "x": 0, "y": 0, "glyph": "dot", "tone": "ink" },
                { "x": 0, "y": 1.6, "glyph": "minus", "tone": "amber", "label": "-e" }
              ],
              "arrows": [
                { "from": [0, 1.6], "to": [-0.7, 1.6], "tone": "ink", "label": "v", "at": "below" },
                { "from": [1.6, 0.3], "to": [1.6, -0.3], "tone": "ink", "label": "I", "at": "end" },
                { "from": [0.9, 0], "to": [0.9, 2.1], "tone": "amber", "label": "L", "at": "end" },
                { "from": [-0.9, 0], "to": [-0.9, -2.1], "tone": "amber", "label": "μ", "at": "end" }
              ]
            }
          ]
        },
        {
          "t": "think",
          "html": "the same restoring idea that keeps a compass needle pointing north also makes a magnetic dipole in a field ring like a pendulum. displace a dipole of moment m from alignment by a small angle and the restoring torque is -mB sin θ, close to -mB θ for small θ, giving exactly newton's second law for rotation in the form seen in phy-11-13-oscillations.ts: angular acceleration proportional to minus the displacement. that is simple harmonic motion, with period 2 pi root (moment of inertia over mB), and it is the working principle of a vibration magnetometer, and of the compass needle sitting on your desk."
        },
        {
          "t": "p",
          "html": "Every example below reuses the same two-step pattern: find the moment m = NIA first, from whatever the loop's geometry hands you, and only then reach for torque, energy, far-field or the SHM period. Getting m right is almost the whole problem; everything after it is one formula away."
        },
        {
          "t": "ex",
          "tag": "CBSE BOARD LEVEL",
          "q": "A circular coil of 100 turns and radius 5.0 cm carries 0.40 A. Find its magnetic moment, and the torque on it in a 0.50 T field when the moment makes 30 degrees with the field.",
          "steps": [
            "m = NIA = (100)(0.40)π(0.05)² = 40 × π × 2.5 × 10<sup>-3</sup>.",
            "τ = mB sin θ = (0.314)(0.50) sin 30 degrees."
          ],
          "ans": "m is about 0.314 A m²; τ is about 0.0785 N m."
        },
        {
          "t": "ex",
          "tag": "NEET SPEED TRAP",
          "q": "In the Bohr model's ground state, an electron's orbital angular momentum is L = h/2π. Find its orbital magnetic moment.",
          "steps": [
            "The trap: writing μ = eL/m, forgetting the factor of 2, or trying to solve for v and r separately when neither is needed.",
            "Speed move, use μl = (e/2m)L directly: μl = (e/2m)(h/2π) = eh/4πm."
          ],
          "ans": "That is exactly the Bohr magneton, about 9.27 × 10<sup>-24</sup> A m²: the ground-state orbital moment is one Bohr magneton, a value worth memorising outright."
        },
        {
          "t": "ex",
          "tag": "JEE MAIN LEVEL, TWO CONCEPTS",
          "q": "A small loop of 50 turns and radius 2.0 cm carries 3.0 A. Find the field on its axis at a distance of 50 cm.",
          "steps": [
            "Concept 1, magnetic moment: m = NIA = (50)(3.0)π(0.02)² = 150 × π × 4.0 × 10<sup>-4</sup>.",
            "Concept 2, far field: since x = 0.50 m is far larger than R = 0.02 m, the dipole approximation is excellent. B_axial = (μ0/4π)(2m/x³) = (10<sup>-7</sup>)(2 × 0.188)/(0.50)³."
          ],
          "ans": "m is about 0.188 A m²; B is about 3.0 × 10<sup>-7</sup> T, 0.30 microtesla."
        },
        {
          "t": "ex",
          "tag": "JEE ADVANCED LEVEL",
          "q": "A current loop of moment m and moment of inertia I (about a diameter) sits aligned with a uniform field B. Given a tiny angular displacement and released, show it executes simple harmonic motion and find the period, for m = 0.20 A m², I = 2.0 × 10<sup>-4</sup> kg m², B = 0.10 T.",
          "steps": [
            "Restoring torque at small angle θ: τ = -mB sin θ is about -mBθ. Newton's second law for rotation, I(theta double-dot) = τ, gives theta double-dot = -(mB/I)θ.",
            "This is SHM with ω² = mB/I, so T = 2π√(I/mB)."
          ],
          "ans": "T = 2π√(2.0 × 10<sup>-4</sup> / 0.020) = 2π√0.010, about 0.63 s, exactly the principle of a vibration magnetometer, a dipole oscillating like a pendulum."
        },
        {
          "t": "mcq",
          "q": "The magnetic dipole moment of a current loop points:",
          "opts": [
            { "label": "Along the current at every point", "nudge": "Describes an in-plane direction; m is perpendicular to the loop's own plane, not along any part of the wire." },
            { "label": "Radially outward in the plane of the loop", "nudge": "Also an in-plane direction; m is perpendicular to the plane, not within it." },
            { "label": "Along the normal to the loop, by the right-hand rule", "nudge": null },
            { "label": "Opposite to the magnetic field", "nudge": "Only true at one particular orientation, the unstable equilibrium; it is not a general rule for the moment's direction." }
          ],
          "correct": 2,
          "solution": "m = NIA, and the area vector's direction, the normal, is fixed by curling the right hand along the current."
        },
        {
          "t": "mcq",
          "q": "The ratio of magnetic moment to orbital angular momentum for a revolving electron is:",
          "opts": [
            { "label": "e/m", "nudge": "Drops the factor of 2, the single most common slip in this whole result." },
            { "label": "e/2m", "nudge": null },
            { "label": "2e/m", "nudge": "Puts the factor of 2 on the wrong side of the ratio entirely." },
            { "label": "em/2", "nudge": "Structurally wrong: the gyromagnetic ratio is a ratio of e to m, not a product of the two." }
          ],
          "correct": 1,
          "solution": "From μl = (e/2m)L, the gyromagnetic ratio is exactly e/2m."
        },
        {
          "t": "mcq",
          "q": "For a magnetic dipole, the axial and equatorial far-fields at equal distances are in the ratio:",
          "opts": [
            { "label": "1 to 1", "nudge": "Ignores the factor of 2 that sits in the axial field alone." },
            { "label": "1 to 2", "nudge": "Inverts the actual ratio." },
            { "label": "2 to 1", "nudge": null },
            { "label": "4 to 1", "nudge": "Over-corrects the factor of 2, doubling it again for no reason." }
          ],
          "correct": 2,
          "solution": "B_axial = (μ0/4π)(2m/x³) and B_eq = (μ0/4π)(m/x³): the ratio is 2 to 1, identical to the electric dipole's own axial-to-equatorial ratio."
        },
        {
          "t": "mcq",
          "q": "The Bohr magneton is given by:",
          "opts": [
            { "label": "eh/2πm", "nudge": "Drops one factor of 2, as if L = h/π rather than h/2π had been used." },
            { "label": "eh/4πm", "nudge": null },
            { "label": "eh/m", "nudge": "Has no basis in the derivation; both the 2m and the pi have gone missing." },
            { "label": "2eh/πm", "nudge": "Has no basis in the derivation, and is off by a factor of eight from the correct value." }
          ],
          "correct": 1,
          "solution": "μB = (e/2m)(h/2π) = eh/4πm, about 9.27 × 10<sup>-24</sup> A m²."
        },
        {
          "t": "practice",
          "items": [
            { "q": "[CBSE] A 200-turn coil of area 1.5 × 10<sup>-3</sup> m² carries 2.0 A. Find its magnetic moment.", "a": "m = NIA = 0.60 A m²." },
            { "q": "[NEET] State the gyromagnetic ratio for an orbiting electron and compute its value.", "a": "e/2m is about 8.8 × 10<sup>10</sup> C/kg." },
            { "q": "[JEE Main] A dipole of moment 0.50 A m² is held at 60 degrees to a uniform 0.20 T field. Find the work to rotate it to 180 degrees, anti-aligned.", "a": "W = mB(cos 60 degrees - cos 180 degrees) = (0.50)(0.20)(0.5 + 1), about 0.15 J." },
            { "q": "[JEE Main] For a dipole of moment m, find the ratio of the axial to the equatorial far-field at the same distance.", "a": "2 to 1." },
            { "q": "[JEE Advanced] An electron orbits at radius 5.3 × 10<sup>-11</sup> m with speed 2.2 × 10<sup>6</sup> m/s. Find its orbital magnetic moment and compare with the Bohr magneton.", "a": "μl = evr/2 is about 9.3 × 10<sup>-24</sup> A m², essentially one Bohr magneton." }
          ]
        },
        {
          "t": "think",
          "html": "whenever a question hands you an electron's own orbit, radius and speed both, check the answer against one bohr magneton before writing it down. it is not a coincidence that the practice set's electron problem lands within a percent of 9.27 times ten to the minus twenty-four: real atomic orbits sit close to the bohr radius, so their moments sit close to the bohr magneton almost by construction, and a wildly different answer is a sign of an arithmetic slip, not new physics."
        },
        {
          "t": "mistakes",
          "items": [
            "Wrong direction for m. It points along the loop's normal by the right-hand rule, never along the current or in the plane of the loop; and for an electron specifically, the moment points opposite to the angular momentum, since its charge is negative.",
            "Dropping the factor of 2. The gyromagnetic ratio is e/2m, not e/m, and it is the single most common slip in every result built on it, including the Bohr magneton.",
            "Using the near-field loop formula at large distance. Beyond a few loop radii, use the dipole far-field (μ0/4π)(2m/x³) directly; the full on-axis formula from Topic 01 still works there too, but is slower to compute.",
            "Getting the sign of the work to rotate wrong. W = mB(cos θ1 - cos θ2): rotating further from alignment costs positive work, rotating back toward it releases energy, and mixing the two up flips the sign of the whole answer."
          ]
        },
        {
          "t": "protip",
          "html": "whenever a magnetic-dipole question turns up, map it straight onto the electric dipole you already know: the same two-to-one axial-to-equatorial ratio, the same tau = mB sin theta, the same U = -mB cos theta. none of this is new physics, it is the old electric-dipole result wearing p to m and 1 over 4 pi epsilon-nought to mu-nought over 4 pi."
        },
        {
          "t": "snapshot",
          "rows": [
            { "f": "m = NIA", "note": "along the normal, right-hand rule; unit A m²" },
            { "f": "τ = m × B, U = -m · B", "note": "identical in form to the electric dipole" },
            { "f": "B_axial : B_equatorial = 2 : 1", "note": "far field, same ratio as an electric dipole" },
            { "f": "μ_l = eL/2m, μ_B = eh/4πm", "note": "gyromagnetic ratio and its smallest quantised value" }
          ],
          "aids": ["current loop equals baby bar magnet", "moment to momentum is e over two m", "axial beats equatorial, two to one"]
        }
      ]
    }
  ]
};

export default phy12MovingChargesMagnetism;
